// ============================================================================
// ExaminationPaperRenderer.js
//
// Step-by-step docx generation for examination papers.
// Mirrors BiochemicalDiagramRenderer architecture exactly:
//   - One dispatcher per page type  (renderPage)
//   - One method per page key       (renderCoverPage, renderQuestionSectionAPage…)
//   - Step-by-step component accumulation matching BasePages.drawingSteps
//   - Each step appends docx Paragraph/Table children into a sections array
//   - generateDocx() seals the Document from accumulated sections
//
// Depends on:  examinationPaperRegistry.js  (BasePages, ExaminationPaperRegistry)
//              subjectOverrides.js           (SubjectOverrides, resolver)
//              examinationGenerator.js       (ExaminationGenerator)
//              docx                          (npm install docx)
// ============================================================================

import {
    Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
    Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
    ShadingType, VerticalAlign, PageNumber, PageBreak, LevelFormat,
    TableOfContents, UnderlineType, LineRuleType
} from 'docx';
import fs   from 'fs';
import path from 'path';
import os                               from 'os';
import { BasePages} from './BasePages.js';
import { ExaminationPaperRegistry } from './examinationPaperRegistry.js';
import { SubjectOverrides }                     from './subjectOverrides.js';
import { ExaminationGenerator }                 from './examinationGenerator.js';


import { MathematicsDiagramsRenderer } from './mathsrender.js';

import { ImageRun }                     from 'docx';
import { createCanvas }                 from '@napi-rs/canvas';
import { BiologyDiagramsRenderer }      from './biorender.js';
import { ChemistryDiagramRenderer }     from './chemistryrender.js';
import { PhysicsDiagramsRenderer }      from './physicsrender.js';



// ── DXA constants ─────────────────────────────────────────────────────────
// A4 portrait: 11906 × 16838 DXA.  1 inch = 1440 DXA.
const DXA = {
    PAGE_WIDTH:     11906,
    PAGE_HEIGHT:    16838,
    MARGIN_TOP:     1440,   // 1 inch
    MARGIN_BOTTOM:  1440,
    MARGIN_LEFT:    1800,   // 1.25 inch (standard exam layout)
    MARGIN_RIGHT:   1440,
    CONTENT_WIDTH:  11906 - 1800 - 1440,   // 8666
    MARKS_COL:       700,   // ~0.49 inch right margin marks column
};

// ── Border helpers ─────────────────────────────────────────────────────────
const BORDER_NONE   = { style: BorderStyle.NONE,   size: 0, color: 'FFFFFF' };
const BORDER_THIN   = { style: BorderStyle.SINGLE, size: 4,  color: '000000' };
const BORDER_MED    = { style: BorderStyle.SINGLE, size: 8,  color: '000000' };
const BORDER_THICK  = { style: BorderStyle.SINGLE, size: 16, color: '000000' };
const BORDER_GREY   = { style: BorderStyle.SINGLE, size: 4,  color: 'AAAAAA' };

function allBorders(b) { return { top: b, bottom: b, left: b, right: b }; }

// ── Spacing helper ─────────────────────────────────────────────────────────
function spacing(before = 0, after = 0, line = null) {
    const s = { before, after };
    if (line !== null) { s.line = line; s.lineRule = LineRuleType.EXACT; }
    return s;
}

// ── Text run helpers ───────────────────────────────────────────────────────
function run(text, opts = {}) {
    return new TextRun({ text, font: 'Times New Roman', size: 24, ...opts });
}
function bold(text, opts = {}) { return run(text, { bold: true, ...opts }); }
function italic(text, opts = {}) { return run(text, { italics: true, ...opts }); }

// ── Empty answer lines ─────────────────────────────────────────────────────
function answerLine() {
    // Use a single-row table with a visible bottom border cell
    // This renders correctly in Word, WPS, and mobile viewers
    return new Table({
        width:        { size: DXA.CONTENT_WIDTH - DXA.MARKS_COL, type: WidthType.DXA },
        columnWidths: [DXA.CONTENT_WIDTH - DXA.MARKS_COL],
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top:    BORDER_NONE,
                            left:   BORDER_NONE,
                            right:  BORDER_NONE,
                            bottom: BORDER_THIN
                        },
                        margins:  { top: 0, bottom: 0, left: 0, right: 0 },
                        children: [
                            new Paragraph({
                                spacing: spacing(0, 200),
                                children: [run('')]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

function answerLines(count = 4) {
    return Array.from({ length: count }, () => answerLine());
}

// ── Box (bordered rectangle) ───────────────────────────────────────────────
function borderedBox(children, opts = {}) {
    const {
        topBorder    = BORDER_THIN,
        bottomBorder = BORDER_THIN,
        leftBorder   = BORDER_THIN,
        rightBorder  = BORDER_THIN,
        shading      = null,
        widthDxa     = DXA.CONTENT_WIDTH,
        margins      = { top: 80, bottom: 80, left: 160, right: 160 }
    } = opts;

    return new Table({
        width: { size: widthDxa, type: WidthType.DXA },
        columnWidths: [widthDxa],
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top:    topBorder,
                            bottom: bottomBorder,
                            left:   leftBorder,
                            right:  rightBorder
                        },
                        shading: shading
                            ? { fill: shading, type: ShadingType.CLEAR }
                            : { fill: 'FFFFFF', type: ShadingType.CLEAR },
                        margins,
                        children
                    })
                ]
            })
        ]
    });
}

// ── Section rule ──────────────────────────────────────────────────────────
function sectionRule() {
    return new Paragraph({
        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: '000000', space: 1 } },
        spacing: spacing(0, 80),
        children: [run('')]
    });
}

// ── Marks box (right-aligned, used in question rows) ─────────────────────
function marksTable(questionContent, marksText, contentWidth = DXA.CONTENT_WIDTH, marksColWidth = DXA.MARKS_COL) {
    const questionColWidth = contentWidth - marksColWidth;
    return new Table({
        width:        { size: contentWidth, type: WidthType.DXA },
        columnWidths: [questionColWidth, marksColWidth],
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top:    BORDER_NONE,
                            bottom: BORDER_NONE,
                            left:   BORDER_NONE,
                            right:  BORDER_NONE
                        },
                        width:    { size: questionColWidth, type: WidthType.DXA },
                        margins:  { top: 0, bottom: 0, left: 0, right: 160 },
                        children: questionContent
                    }),
                    new TableCell({
                        borders: {
                            top:    BORDER_THIN,
                            bottom: BORDER_THIN,
                            left:   BORDER_THIN,
                            right:  BORDER_THIN
                        },
                        width:         { size: marksColWidth, type: WidthType.DXA },
                        margins:       { top: 60, bottom: 60, left: 80, right: 80 },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:  [run(marksText, { size: 20 })]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// ── Page number footer ────────────────────────────────────────────────────
function makeFooter(totalPages = '') {
    return new Footer({
        children: [
            new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                    run('Page ', { size: 20 }),
                    new TextRun({ children: [PageNumber.CURRENT], size: 20 }),
                    run(totalPages ? ` of ${totalPages}` : '', { size: 20 })
                ]
            })
        ]
    });
}

// ── Header (subject + exam title) ────────────────────────────────────────
function makeHeader(subjectTitle = '', examTitle = '') {
    return new Header({
        children: [
            new Paragraph({
                border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: 'AAAAAA', space: 1 } },
                spacing: spacing(0, 80),
                children: [
                    run(subjectTitle, { bold: true }),
                    run(examTitle ? `   |   ${examTitle}` : '', { color: '555555' })
                ]
            })
        ]
    });
}


// ============================================================================
// EXAMINATION PAPER RENDERER CLASS
// ============================================================================

class ExaminationPaperRenderer {

    constructor() {
        // Accumulated section children, one entry per page-type added.
        // Each entry is { pageKey, subject, children: [...Paragraph|Table] }
        this._sections       = [];
        this._currentSection = null;

        // Paper-level metadata (populated when coverPage is rendered)
        this._meta = {
            subject:    '',
            examTitle:  '',
            schoolName: '',
            duration:   '',
            totalMarks: 0
        };

        // Question counter — continues across sections
        this._questionCounter = 0;

        // Numbering config reference (populated in generateDocx)
        this._numberingConfig = this._buildNumberingConfig();
    }

    // ── Numbering config ───────────────────────────────────────────────────
    _buildNumberingConfig() {
        return {
            config: [
                {
                    reference: 'questionNumbers',
                    levels: [{
                        level:     0,
                        format:    LevelFormat.DECIMAL,
                        text:      '%1.',
                        alignment: AlignmentType.LEFT,
                        style:     { paragraph: { indent: { left: 560, hanging: 360 } } }
                    }]
                },
                {
                    reference: 'subPartLetters',
                    levels: [{
                        level:     0,
                        format:    LevelFormat.LOWER_LETTER,
                        text:      '(%1)',
                        alignment: AlignmentType.LEFT,
                        style:     { paragraph: { indent: { left: 1000, hanging: 400 } } }
                    }]
                },
                {
                    reference: 'mcqOptions',
                    levels: [{
                        level:     0,
                        format:    LevelFormat.UPPER_LETTER,
                        text:      '%1.',
                        alignment: AlignmentType.LEFT,
                        style:     { paragraph: { indent: { left: 1440, hanging: 400 } } }
                    }]
                }
            ]
        };
    }

    // ── Core flush helper ──────────────────────────────────────────────────
    _openSection(pageKey, subject) {
        if (this._currentSection) {
            this._sections.push(this._currentSection);
        }
        this._currentSection = { pageKey, subject, children: [] };
    }

    _append(...nodes) {
        if (!this._currentSection) {
            throw new Error('No open section — call an open*Page method first.');
        }
        nodes.flat().forEach(n => this._currentSection.children.push(n));
    }

    _spacer(before = 160, after = 160) {
        this._append(new Paragraph({ spacing: spacing(before, after), children: [run('')] }));
    }


    // ════════════════════════════════════════════════════════════════════════
    // PAGE DISPATCHER
    // Mirrors BiochemicalDiagramRenderer.renderDiagram()
    // ════════════════════════════════════════════════════════════════════════

    /**
     * Render a specific page to the accumulated document.
     * @param {string} subject  chemistry | biology | physics | mathematics
     * @param {string} pageKey  coverPage | questionSectionAPage | … | closingPage
     * @param {object} options  component-level options merged with page defaults
     * @param {number} drawingStep  1..N — how far to build (mirrors BiochemicalRenderer)
     */

    
async renderPage(subject, pageKey, options = {}, drawingStep = 9999) {
    ExaminationPaperRegistry._assertSubject(subject);
    ExaminationPaperRegistry._assertPageKey(pageKey);

    // Normalise — inquirer can deliver Infinity as a string; 9999 means "all steps"
    const resolvedStep = (drawingStep === Infinity || drawingStep === 'Infinity' || drawingStep >= 9999)
        ? 9999
        : Number(drawingStep);

    const page = ExaminationPaperRegistry.getPage(subject, pageKey);
    const opts = { ...page.defaultOptions, ...options };

    this._openSection(pageKey, subject);

    switch (pageKey) {
        case 'coverPage':
            this.renderCoverPage(subject, page, opts, resolvedStep);
            break;
        case 'questionSectionAPage':
        case 'questionSectionBPage':
        case 'questionSectionCPage':
            await this.renderQuestionSectionPage(subject, pageKey, page, opts, resolvedStep);
            break;
        case 'closingPage':
            this.renderClosingPage(subject, page, opts, resolvedStep);
            break;
        case 'formattingConfig':
            this.renderFormattingConfigPage(subject, page, opts, resolvedStep);
            break;
    }
}

    // ════════════════════════════════════════════════════════════════════════
    // COVER PAGE RENDERER
    // drawingSteps (from BasePages.coverPage.drawingSteps):
    //   1 – schoolIdentity   : school name (and logo placeholder)
    //   2 – examMetadata     : title, subject, level, type, term
    //   3 – timeAndMarks     : duration + total marks
    //   4 – candidateFields  : name / number / centre boxes
    //   5 – instructions     : candidate instructions
    //   6 – inserts          : optional insets (watermark, security)
    //   7 – preview          : no-op (doc is already assembled)
    // ════════════════════════════════════════════════════════════════════════

    renderCoverPage(subject, page, opts, drawingStep) {
        const step = Number.isFinite(drawingStep) ? Math.min(drawingStep, 7) : 7;

        // Persist metadata for headers
        this._meta.subject    = opts.subjectTitle || subject;
        this._meta.examTitle  = opts.examTitle    || '';
        this._meta.schoolName = opts.schoolName   || '';
        this._meta.duration   = opts.duration     || page.defaultOptions.duration;
        this._meta.totalMarks = opts.totalMarks   || page.defaultOptions.totalMarks;

        // ── Step 1 — School identity ─────────────────────────────────────
        if (step >= 1) {
            // School name
            if (opts.schoolName) {
                this._append(
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing:   spacing(0, 120),
                        children:  [bold(opts.schoolName, { size: 36, allCaps: true })]
                    })
                );
            } else {
                // Placeholder
                this._append(
                    borderedBox(
                        [new Paragraph({
                            alignment: AlignmentType.CENTER,
                            spacing:   spacing(80, 80),
                            children:  [italic('[School Name]', { color: '888888', size: 28 })]
                        })],
                        { shading: 'F5F5F5', widthDxa: DXA.CONTENT_WIDTH }
                    )
                );
            }

            // Logo placeholder
            if (opts.showLogo) {
                this._append(
                    borderedBox(
                        [new Paragraph({
                            alignment: AlignmentType.CENTER,
                            spacing:   spacing(80, 80),
                            children:  [italic('[School Logo]', { color: 'AAAAAA' })]
                        })],
                        { widthDxa: 2200 }
                    )
                );
            }

            this._spacer(80, 80);
            this._append(sectionRule());
        }

        // ── Step 2 — Exam metadata ────────────────────────────────────────
        if (step >= 2) {
            this._spacer(160, 80);

            // Subject title
            this._append(
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing:   spacing(0, 80),
                    children:  [
                        bold(opts.subjectTitle || this._meta.subject, { size: 40, allCaps: true })
                    ]
                })
            );

            // Exam title
            if (opts.examTitle) {
                this._append(
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing:   spacing(0, 80),
                        children:  [bold(opts.examTitle, { size: 28 })]
                    })
                );
            }

            // Exam board
            if (opts.examBoard) {
                this._append(
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing:   spacing(0, 60),
                        children:  [run(opts.examBoard, { size: 22, color: '555555' })]
                    })
                );
            }

            // Level + type + term row
            const metaRow = [opts.candidateLevel, opts.examType, opts.termAndYear]
                .filter(Boolean).join('   |   ');
            if (metaRow) {
                this._append(
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing:   spacing(0, 60),
                        children:  [run(metaRow, { size: 22 })]
                    })
                );
            }

            // Exam date
            if (opts.examDate) {
                this._append(
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing:   spacing(0, 80),
                        children:  [run(opts.examDate, { size: 22 })]
                    })
                );
            }

            this._spacer(80, 80);
            this._append(sectionRule());
        }

        // ── Step 3 — Time and marks ───────────────────────────────────────
        if (step >= 3) {
            this._spacer(160, 80);

            const timeMarksWidth  = DXA.CONTENT_WIDTH;
            const colW            = Math.floor(timeMarksWidth / 2);

            this._append(
                new Table({
                    width:        { size: timeMarksWidth, type: WidthType.DXA },
                    columnWidths: [colW, colW],
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    borders:  allBorders(BORDER_NONE),
                                    width:    { size: colW, type: WidthType.DXA },
                                    margins:  { top: 60, bottom: 60, left: 0, right: 0 },
                                    children: [
                                        new Paragraph({
                                            children: [
                                                bold('Duration: ', { size: 22 }),
                                                run(opts.duration || '1 hour 30 minutes', { size: 22 })
                                            ]
                                        })
                                    ]
                                }),
                                new TableCell({
                                    borders:  allBorders(BORDER_NONE),
                                    width:    { size: colW, type: WidthType.DXA },
                                    margins:  { top: 60, bottom: 60, left: 0, right: 0 },
                                    children: [
                                        new Paragraph({
                                            alignment: AlignmentType.RIGHT,
                                            children:  [
                                                bold('Total Marks: ', { size: 22 }),
                                                run(String(opts.totalMarks || 80), { size: 22 })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            );

            this._spacer(80, 160);
        }

        // ── Step 4 — Candidate fields ─────────────────────────────────────
        if (step >= 4 && opts.showCandidateBoxes) {
            const fieldColW = Math.floor(DXA.CONTENT_WIDTH / 3);
            const fields    = [
                { label: 'Candidate Name',   show: true                     },
                { label: 'Candidate Number', show: opts.candidateNumberBox  },
                { label: 'Centre Number',    show: opts.centreNumberBox      },
            ].filter(f => f.show !== false);

            if (fields.length === 1) {
                // Full-width single field
                this._append(
                    borderedBox(
                        [new Paragraph({ children: [bold('Candidate Name: ')], spacing: spacing(60, 60) }),
                         new Paragraph({ children: [run('')],                  spacing: spacing(0, 240) })],
                        { widthDxa: DXA.CONTENT_WIDTH }
                    )
                );
            } else {
                const evenly = Math.floor(DXA.CONTENT_WIDTH / fields.length);
                this._append(
                    new Table({
                        width:        { size: DXA.CONTENT_WIDTH, type: WidthType.DXA },
                        columnWidths: fields.map(() => evenly),
                        rows: [
                            new TableRow({
                                children: fields.map(f =>
                                    new TableCell({
                                        borders:  allBorders(BORDER_THIN),
                                        width:    { size: evenly, type: WidthType.DXA },
                                        margins:  { top: 80, bottom: 80, left: 120, right: 120 },
                                        children: [
                                            new Paragraph({ children: [bold(f.label + ':', { size: 20 })] }),
                                            new Paragraph({ children: [run('')], spacing: spacing(0, 200) })
                                        ]
                                    })
                                )
                            })
                        ]
                    })
                );
            }

            this._spacer(120, 120);
        }

        // ── Step 5 — Candidate instructions ──────────────────────────────
        if (step >= 5 && opts.showInstructions) {
            const instructions = opts.candidateInstructions || [
                'Read all questions carefully before attempting to answer.',
                'Write your answers in the spaces provided.',
                `This paper contains ${opts.totalMarks || 80} marks.`,
                'Show all working where marks are allocated for method.',
                'Calculators may be used unless stated otherwise.'
            ];

            this._append(
                borderedBox(
                    [
                        new Paragraph({
                            spacing:  spacing(80, 80),
                            children: [bold('Instructions to Candidates', { size: 24, underline: { type: UnderlineType.SINGLE } })]
                        }),
                        ...(Array.isArray(instructions) ? instructions : [instructions]).map(line =>
                            new Paragraph({
                                numbering: { reference: 'questionNumbers', level: 0 },
                                spacing:   spacing(40, 40),
                                children:  [run(line, { size: 22 })]
                            })
                        )
                    ],
                    { shading: 'F8F8F8' }
                )
            );

            this._spacer(120, 120);
        }

        // ── Step 6 — Optional insets ──────────────────────────────────────
        if (step >= 6 && opts.showInset) {
            this._renderCoverInset(opts.insetType, opts);
        }

        // ── Step 7 — Preview (no-op; doc assembly happens in generateDocx) ─
        if (step >= 7) {
            this._append(
                new Paragraph({
                    spacing: spacing(80, 80),
                    children: [italic('[Cover page complete — proceed to Section A]', { color: 'AAAAAA', size: 18 })]
                })
            );
        }

        // Step indicator
        this._append(
            new Paragraph({
                alignment: AlignmentType.RIGHT,
                spacing:   spacing(40, 40),
                children:  [italic(`Step ${Math.min(step, 7)} of 7  |  Cover Page`, { size: 16, color: 'CCCCCC' })]
            })
        );
    }


    // ════════════════════════════════════════════════════════════════════════
    // QUESTION SECTION PAGE RENDERER  (A, B, C — unified)
    // drawingSteps shared across all three section pages:
    //   1 – sectionHeader    : section header + instructions
    //   2 – questionFormat   : format declaration paragraph
    //   3 – contextBlocks    : stimulus passages / data tables  (Section B/C only)
    //   4 – questionBlocks   : question stems + sub-parts
    //   5 – markAllocation   : marks column values
    //   6 – diagrams         : diagram/graph axis spaces
    //   7 – workingSpace     : working boxes + answer lines
    //   8 – insets           : supplementary reference insets
    //   9 – sectionTotal     : section total box + page break
    //  10 – preview          : no-op
    // ════════════════════════════════════════════════════════════════════════

    async renderQuestionSectionPage(subject, pageKey, page, opts, drawingStep) {
        const sectionLabel = page.defaultOptions.sectionLabel;
        const maxStep = pageKey === 'questionSectionAPage' ? 9 : 10;
        const step    = Number.isFinite(drawingStep) ? Math.min(drawingStep, maxStep) : maxStep;

        // ── Step 1 — Section header ────────────────────────────────────────
        if (step >= 1) {
            this._append(
                new Paragraph({
                    spacing:  spacing(0, 80),
                    children: [bold(`SECTION ${sectionLabel}`, { size: 32, allCaps: true })]
                })
            );

            // Section description
            this._append(
                new Paragraph({
                    spacing:  spacing(0, 60),
                    children: [italic(page.description, { size: 20, color: '555555' })]
                })
            );

            // Section instructions
            if (opts.showSectionInstructions !== false) {
                const instrText = opts.sectionInstructions ||
                    this._defaultSectionInstructions(pageKey, opts);

                this._append(
                    new Paragraph({
                        spacing:  spacing(0, 80),
                        border:   { bottom: { style: BorderStyle.SINGLE, size: 4, color: 'AAAAAA', space: 1 } },
                        children: [run(instrText, { size: 20, italics: true })]
                    })
                );
            }

            this._spacer(80, 80);
        }

        // ── Step 2 — Question format declaration ──────────────────────────
        if (step >= 2) {
            const fmtLabel = opts.questionFormat || page.defaultOptions.questionFormat;
            this._append(
                new Paragraph({
                    spacing:  spacing(0, 80),
                    children: [
                        run('Question format: ', { size: 20, color: '555555' }),
                        bold(this._humaniseFormat(fmtLabel), { size: 20 })
                    ]
                })
            );
            this._spacer(40, 80);
        }

        // ── Step 3 — Context / stimulus (Section B + C) ───────────────────
        if (step >= 3 && pageKey !== 'questionSectionAPage') {
            if (opts.showContextPassage || opts.contextPassage) {
                const passageText = opts.contextPassage ||
                    '[Insert context passage / data stimulus here]';
                this._append(
                    borderedBox(
                        [
                            new Paragraph({
                                spacing:  spacing(60, 40),
                                children: [bold('Context / Stimulus Material', { size: 20, underline: { type: UnderlineType.SINGLE } })]
                            }),
                            new Paragraph({
                                spacing:  spacing(40, 60),
                                children: [run(passageText, { size: 20, italics: true, color: '444444' })]
                            })
                        ],
                        { shading: 'F2F2F2' }
                    )
                );
                this._spacer(120, 80);
            }
        }

        // ── Step 4 — Question blocks ───────────────────────────────────────
        // AFTER
        if (step >= 4) {
           const questions = opts.questions || this._defaultQuestions(subject, pageKey, page, opts);
           for (let qi = 0; qi < questions.length; qi++) {
               await this._renderQuestionBlock(questions[qi], qi, opts, step);
           }
        }

        // ── Step 5 — Mark allocation (applied inline within step 4; here add summary) ──
        if (step >= 5 && opts.showMarkAllocations !== false) {
            if (!(opts.questions && opts.questions.length)) {
                // If no explicit questions, show a placeholder marks row
                this._append(
                    new Paragraph({
                        alignment: AlignmentType.RIGHT,
                        spacing:   spacing(40, 40),
                        children:  [
                            run('[Marks: ', { size: 20, color: '888888' }),
                            run('___', { size: 20, color: '888888' }),
                            run(']', { size: 20, color: '888888' })
                        ]
                    })
                );
            }
        }

        // ── Step 6 — Diagram spaces ────────────────────────────────────────
        if (step >= 6) {
            const needsDiagram = page.diagramRequired || opts.diagramRequired;
            if (needsDiagram && !(opts.questions && opts.questions.length)) {
                this._renderDiagramSpace(
                    opts.diagramSpaceLabel || `[Diagram Space — ${subject} ${sectionLabel}]`,
                    opts.diagramHeight || 3600
                );
            }
        }

        // ── Step 7 — Working space ─────────────────────────────────────────
        if (step >= 7) {
            if (opts.showWorkingBoxes !== false && pageKey !== 'questionSectionAPage') {
                if (!(opts.questions && opts.questions.length)) {
                    this._renderWorkingBox('[Working Space]', opts.workingBoxHeight || 2880);
                }
            }
            if (opts.showAnswerLines !== false && !(opts.questions && opts.questions.length)) {
                this._append(...answerLines(opts.answerLinesPerQuestion || 4));
            }
        }

        // ── Step 8 — Insets ───────────────────────────────────────────────
        if (step >= 8 && opts.showInset) {
            this._renderSectionInset(opts.insetType || page.defaultOptions.insetType, subject, sectionLabel);
        }

        // ── Step 9 — Section total ────────────────────────────────────────
        if (step >= 9) {
            this._spacer(160, 80);
            const colW = Math.floor(DXA.CONTENT_WIDTH / 2);
            this._append(
                new Table({
                    width:        { size: DXA.CONTENT_WIDTH, type: WidthType.DXA },
                    columnWidths: [colW, colW],
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    borders:  allBorders(BORDER_NONE),
                                    width:    { size: colW, type: WidthType.DXA },
                                    children: [new Paragraph({ children: [run('')] })]
                                }),
                                new TableCell({
                                    borders:  allBorders(BORDER_THIN),
                                    width:    { size: colW, type: WidthType.DXA },
                                    margins:  { top: 80, bottom: 80, left: 120, right: 120 },
                                    children: [
                                        new Paragraph({
                                            alignment: AlignmentType.CENTER,
                                            children:  [
                                                bold(`Section ${sectionLabel} Total: `, { size: 22 }),
                                                run(String(opts.sectionMarks || 0), { size: 22 })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            );

            // Page break
            this._append(
                new Paragraph({
                    children: [new PageBreak()]
                })
            );
        }

        // ── Step 10 / 9 (A) — Preview (no-op) ────────────────────────────
        this._append(
            new Paragraph({
                alignment: AlignmentType.RIGHT,
                spacing:   spacing(40, 40),
                children:  [
                    italic(
                        `Step ${step} of ${maxStep}  |  Section ${sectionLabel}`,
                        { size: 16, color: 'CCCCCC' }
                    )
                ]
            })
        );
    }


    // ════════════════════════════════════════════════════════════════════════
    // CLOSING PAGE RENDERER
    // drawingSteps:
    //   1 – endStatement     : "End of Paper" statement
    //   2 – totalMarksBox    : total marks summary box
    //   3 – examinerGrid     : examiner-use summary grid
    //   4 – declaration      : candidate declaration + signature line
    //   5 – signatoryLines   : marker / moderator lines
    //   6 – footerElements   : copyright notice + board footer
    //   7 – preview          : no-op
    // ════════════════════════════════════════════════════════════════════════

    renderClosingPage(subject, page, opts, drawingStep) {
        const step = Number.isFinite(drawingStep) ? Math.min(drawingStep, 7) : 7;

        this._spacer(480, 160);

        // ── Step 1 — End statement ────────────────────────────────────────
        if (step >= 1) {
            const endText = opts.endOfPaperMarker ||
                page.defaultOptions.endOfPaperMarker ||
                'END OF EXAMINATION PAPER';

            this._append(
                borderedBox(
                    [new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing:   spacing(160, 160),
                        children:  [bold(endText, { size: 32, allCaps: true })]
                    })],
                    { topBorder: BORDER_THICK, bottomBorder: BORDER_THICK,
                      leftBorder: BORDER_NONE, rightBorder: BORDER_NONE }
                )
            );
            this._spacer(160, 160);
        }

        // ── Step 2 — Total marks box ──────────────────────────────────────
        if (step >= 2 && opts.showTotalMarksBox !== false) {
            const colW = Math.floor(DXA.CONTENT_WIDTH / 2);
            this._append(
                new Table({
                    width:        { size: DXA.CONTENT_WIDTH, type: WidthType.DXA },
                    columnWidths: [colW, colW],
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    borders:  allBorders(BORDER_NONE),
                                    width:    { size: colW, type: WidthType.DXA },
                                    children: [new Paragraph({ children: [run('')] })]
                                }),
                                new TableCell({
                                    borders:  allBorders(BORDER_MED),
                                    width:    { size: colW, type: WidthType.DXA },
                                    margins:  { top: 80, bottom: 80, left: 120, right: 120 },
                                    children: [
                                        new Paragraph({
                                            alignment: AlignmentType.CENTER,
                                            spacing:   spacing(60, 60),
                                            children:  [bold('TOTAL MARKS', { size: 24 })]
                                        }),
                                        new Paragraph({
                                            alignment: AlignmentType.CENTER,
                                            spacing:   spacing(60, 120),
                                            children:  [
                                                run('Out of ', { size: 22 }),
                                                bold(String(opts.totalMarks || this._meta.totalMarks || 80), { size: 22 }),
                                                run('   /   ', { size: 22 }),
                                                bold(String(opts.totalMarks || this._meta.totalMarks || 80), { size: 22 })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            );
            this._spacer(160, 120);
        }

        // ── Step 3 — Examiner-use summary grid ────────────────────────────
        if (step >= 3 && opts.showExaminerGrid !== false) {
            const sections   = ['A', 'B', 'C'];
            const colW       = Math.floor(DXA.CONTENT_WIDTH / (sections.length + 1));
            const totalColW  = DXA.CONTENT_WIDTH - colW * sections.length;

            this._append(
                new Paragraph({
                    spacing:  spacing(80, 40),
                    children: [bold('For Examiner Use Only', { size: 20, italics: true })]
                })
            );

            this._append(
                new Table({
                    width:        { size: DXA.CONTENT_WIDTH, type: WidthType.DXA },
                    columnWidths: [...sections.map(() => colW), totalColW],
                    rows: [
                        // Header row
                        new TableRow({
                            children: [
                                ...sections.map(s =>
                                    new TableCell({
                                        borders:  allBorders(BORDER_THIN),
                                        width:    { size: colW, type: WidthType.DXA },
                                        margins:  { top: 80, bottom: 80, left: 80, right: 80 },
                                        shading:  { fill: 'EEEEEE', type: ShadingType.CLEAR },
                                        children: [new Paragraph({
                                            alignment: AlignmentType.CENTER,
                                            children:  [bold(`Section ${s}`, { size: 20 })]
                                        })]
                                    })
                                ),
                                new TableCell({
                                    borders:  allBorders(BORDER_THIN),
                                    width:    { size: totalColW, type: WidthType.DXA },
                                    margins:  { top: 80, bottom: 80, left: 80, right: 80 },
                                    shading:  { fill: 'DDDDDD', type: ShadingType.CLEAR },
                                    children: [new Paragraph({
                                        alignment: AlignmentType.CENTER,
                                        children:  [bold('TOTAL', { size: 20 })]
                                    })]
                                })
                            ]
                        }),
                        // Marks entry row (blank)
                        new TableRow({
                            children: [
                                ...sections.map(() =>
                                    new TableCell({
                                        borders:  allBorders(BORDER_THIN),
                                        width:    { size: colW, type: WidthType.DXA },
                                        margins:  { top: 60, bottom: 60, left: 60, right: 60 },
                                        children: [new Paragraph({
                                            spacing: spacing(0, 240),
                                            children: [run('')]
                                        })]
                                    })
                                ),
                                new TableCell({
                                    borders:  allBorders(BORDER_MED),
                                    width:    { size: totalColW, type: WidthType.DXA },
                                    margins:  { top: 60, bottom: 60, left: 60, right: 60 },
                                    children: [new Paragraph({
                                        spacing: spacing(0, 240),
                                        children: [run('')]
                                    })]
                                })
                            ]
                        })
                    ]
                })
            );
            this._spacer(120, 120);
        }

        // ── Step 4 — Candidate declaration ────────────────────────────────
        if (step >= 4 && opts.showCandidateDeclaration) {
            this._append(
                borderedBox(
                    [
                        new Paragraph({
                            spacing:  spacing(60, 40),
                            children: [bold('Candidate Declaration', { size: 22, underline: { type: UnderlineType.SINGLE } })]
                        }),
                        new Paragraph({
                            spacing:  spacing(40, 80),
                            children: [run(
                                'I confirm that the work submitted here is entirely my own and that I have not received any unauthorised assistance.',
                                { size: 20 }
                            )]
                        }),
                        new Paragraph({
                            spacing:  spacing(80, 40),
                            children: [bold('Signature: ', { size: 20 }), run('____________________________', { size: 20 })]
                        }),
                        new Paragraph({
                            spacing:  spacing(40, 60),
                            children: [bold('Date: ', { size: 20 }), run('____________________', { size: 20 })]
                        })
                    ],
                    { shading: 'FAFAFA' }
                )
            );
            this._spacer(120, 120);
        }

        // ── Step 5 — Signatory lines ──────────────────────────────────────
        if (step >= 5) {
            if (opts.showMarkerSignature) {
                this._append(new Paragraph({
                    spacing:  spacing(80, 40),
                    children: [bold('Marker Signature: ', { size: 20 }), run('_________________________', { size: 20 }),
                               run('   Date: ', { size: 20 }), run('______________', { size: 20 })]
                }));
            }
            if (opts.showModeratorSignature) {
                this._append(new Paragraph({
                    spacing:  spacing(40, 80),
                    children: [bold('Moderator Signature: ', { size: 20 }), run('_____________________', { size: 20 }),
                               run('   Date: ', { size: 20 }), run('______________', { size: 20 })]
                }));
            }
        }

        // ── Step 6 — Footer elements ──────────────────────────────────────
        if (step >= 6) {
            this._spacer(160, 80);
            this._append(sectionRule());

            if (opts.showCopyrightNotice !== false) {
                const year = new Date().getFullYear();
                this._append(
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing:   spacing(80, 40),
                        children:  [
                            italic(`© ${year} ${opts.schoolName || this._meta.schoolName || '[School Name]'}.`,
                                { size: 18, color: '888888' }),
                            italic('  All rights reserved. Reproduction prohibited without permission.',
                                { size: 18, color: '888888' })
                        ]
                    })
                );
            }
        }

        // Step indicator
        this._append(
            new Paragraph({
                alignment: AlignmentType.RIGHT,
                spacing:   spacing(40, 40),
                children:  [italic(`Step ${step} of 7  |  Closing Page`, { size: 16, color: 'CCCCCC' })]
            })
        );
    }


    // ════════════════════════════════════════════════════════════════════════
    // FORMATTING CONFIG PAGE RENDERER
    // drawingSteps:
    //   1 – paperLayout   : paper size / orientation / margins
    //   2 – typography    : fonts and sizes
    //   3 – spacing       : line and question spacing
    //   4 – markLayout    : marks column / format
    //   5 – numbering     : question numbering style
    //   6 – headerFooter  : header / footer content
    //   7 – watermark     : DRAFT / CONFIDENTIAL / none
    //   8 – apply         : propagate (no-op — all handled in generateDocx)
    // ════════════════════════════════════════════════════════════════════════

    renderFormattingConfigPage(subject, page, opts, drawingStep) {
        const step = Number.isFinite(drawingStep) ? Math.min(drawingStep, 8) : 8;

        this._append(
            new Paragraph({
                spacing:  spacing(0, 80),
                children: [bold('Formatting Configuration', { size: 28, color: '555555' })]
            })
        );
        this._append(
            new Paragraph({
                spacing:  spacing(0, 80),
                children: [italic('This page documents the formatting settings applied to the entire paper.', { size: 20, color: '888888' })]
            })
        );

        const rows = [];

        if (step >= 1) {
            rows.push(['Paper Size',    opts.paperSize    || 'A4']);
            rows.push(['Orientation',   opts.orientation  || 'Portrait']);
            rows.push(['Margins',       `Top ${opts.margins?.top || 25}mm  Bottom ${opts.margins?.bottom || 25}mm  Left ${opts.margins?.left || 25}mm  Right ${opts.margins?.right || 20}mm`]);
        }
        if (step >= 2) {
            rows.push(['Body Font',     `${opts.bodyFont    || 'Times New Roman'} ${opts.bodyFontSize    || 12}pt`]);
            rows.push(['Heading Font',  `${opts.headingFont || 'Times New Roman'} ${opts.headingFontSize || 14}pt`]);
        }
        if (step >= 3) {
            rows.push(['Line Spacing',      String(opts.lineSpacing      || 1.5)]);
            rows.push(['Question Spacing',  `${opts.questionSpacing || 8}pt`]);
        }
        if (step >= 4) {
            rows.push(['Marks Column',  `${opts.marksColumnWidth || 20}mm`]);
            rows.push(['Marks Format',  opts.marksFormat || '[{n}]']);
        }
        if (step >= 5) {
            rows.push(['Question Numbering', opts.questionNumbering || 'continuous']);
        }
        if (step >= 6) {
            rows.push(['Page Numbers',  opts.pageNumberPosition || 'bottom-center']);
        }
        if (step >= 7) {
            rows.push(['Watermark',     opts.watermark || 'none']);
            rows.push(['Colour Profile', opts.colorProfile || 'black-and-white']);
        }

        if (rows.length) {
            const labelW  = Math.floor(DXA.CONTENT_WIDTH * 0.38);
            const valueW  = DXA.CONTENT_WIDTH - labelW;

            this._append(
                new Table({
                    width:        { size: DXA.CONTENT_WIDTH, type: WidthType.DXA },
                    columnWidths: [labelW, valueW],
                    rows: rows.map(([label, value], i) =>
                        new TableRow({
                            children: [
                                new TableCell({
                                    borders:  allBorders(BORDER_GREY),
                                    width:    { size: labelW, type: WidthType.DXA },
                                    margins:  { top: 60, bottom: 60, left: 120, right: 120 },
                                    shading:  { fill: i % 2 === 0 ? 'F5F5F5' : 'FFFFFF', type: ShadingType.CLEAR },
                                    children: [new Paragraph({ children: [bold(label, { size: 20 })] })]
                                }),
                                new TableCell({
                                    borders:  allBorders(BORDER_GREY),
                                    width:    { size: valueW, type: WidthType.DXA },
                                    margins:  { top: 60, bottom: 60, left: 120, right: 120 },
                                    shading:  { fill: i % 2 === 0 ? 'F5F5F5' : 'FFFFFF', type: ShadingType.CLEAR },
                                    children: [new Paragraph({ children: [run(value, { size: 20 })] })]
                                })
                            ]
                        })
                    )
                })
            );
        }

        this._append(
            new Paragraph({
                alignment: AlignmentType.RIGHT,
                spacing:   spacing(40, 40),
                children:  [italic(`Step ${step} of 8  |  Formatting Config`, { size: 16, color: 'CCCCCC' })]
            })
        );
    }


    // ════════════════════════════════════════════════════════════════════════
    // QUESTION BLOCK RENDERER
    // Renders a single question with optional sub-parts, marks, diagram space,
    // working box, and answer lines.  Called from renderQuestionSectionPage.
    // ════════════════════════════════════════════════════════════════════════

    async _renderQuestionBlock(q, qi, opts, step) {
    this._questionCounter++;
    const qNum = this._questionCounter;

    // ── Derive marks — check every possible field name generators use ──
    const qMarks =
        q.marks           ??
        q.totalMarks      ??
        q.parameters?.totalMarks ??
        q.parameters?.marks      ??
        (q.subParts?.length
            ? q.subParts.reduce((s, sp) => s + (sp.marks || 0), 0)
            : null);

    const marksText = step >= 5 ? `[${qMarks ?? '—'}]` : '';

    // ── Question stem — plain paragraphs, NO table wrapper ────────────
    this._append(
        new Paragraph({
            spacing:  spacing(80, 40),
            children: [
                bold(`${qNum}.  `, { size: 24 }),
                run(q.stem || q.problem || '[Question stem]', { size: 24 })
            ]
        })
    );

    // Context paragraph
    if (q.context) {
        this._append(
            new Paragraph({
                spacing:  spacing(20, 40),
                children: [italic(q.context, { size: 20, color: '444444' })]
            })
        );
    }

    // Marks — right-aligned paragraph, no table
    if (marksText) {
        this._append(
            new Paragraph({
                alignment: AlignmentType.RIGHT,
                spacing:   spacing(0, 40),
                children:  [
                    run(marksText, {
                        size:   20,
                        bold:   true,
                        color:  '000000'
                    })
                ]
            })
        );
    }

    // ── Diagram — immediately after stem and marks ─────────────────────
    if (step >= 6 && (q.diagramRequired || q.diagramInfo)) {
        if (typeof q.generateDiagram === 'function') {
            const diagramParagraph = await this._embedDiagram(q, qNum);
            if (diagramParagraph) {
                const figureTitle = q.diagramInfo?.renderOptions?.title
                    ? `Figure ${qNum}: ${q.diagramInfo.renderOptions.title}`
                    : `Figure ${qNum}: ${q.scenario || 'Diagram'}`;

                this._append(
                    new Paragraph({
                        spacing:  spacing(60, 20),
                        children: [italic(figureTitle, { size: 18, color: '555555' })]
                    })
                );
                this._append(diagramParagraph);
                this._spacer(40, 40);
            } else {
                const label = q.diagramInfo?.renderOptions?.title
                    ? `[Diagram Space — ${q.diagramInfo.renderOptions.title}]`
                    : `[Diagram Space — Question ${qNum}]`;
                this._renderDiagramSpace(label, q.diagramHeight || 3600);
            }
        } else {
            const label = q.diagramInfo?.renderOptions?.title
                ? `[Diagram Space — ${q.diagramInfo.renderOptions.title}]`
                : `[Diagram Space — Question ${qNum}]`;
            this._renderDiagramSpace(label, q.diagramHeight || 3600);
        }
    }

    // ── Sub-parts ──────────────────────────────────────────────────────
    if (q.subParts && q.subParts.length) {
        q.subParts.forEach((sp, si) => {
            const letter = String.fromCharCode(97 + si);

            this._append(
                new Paragraph({
                    spacing:  spacing(40, 40),
                    children: [
                        bold(`    (${letter})  `, { size: 22 }),
                        run(sp.text || sp.stem || '[Sub-part]', { size: 22 })
                    ]
                })
            );

            if (step >= 5 && sp.marks) {
                this._append(
                    new Paragraph({
                        alignment: AlignmentType.RIGHT,
                        spacing:   spacing(0, 20),
                        children:  [run(`[${sp.marks}]`, { size: 20, bold: true })]
                    })
                );
            }

            if (step >= 7 && opts.showAnswerLines !== false) {
                const lineCount = sp.answerLines || opts.answerLinesPerQuestion || 4;
                this._append(...answerLines(lineCount));
            }
        });

    } else {
        // No sub-parts — answer lines directly after diagram
        if (step >= 7 && opts.showAnswerLines !== false) {
            const lineCount = q.answerLines || opts.answerLinesPerQuestion || 4;
            this._append(...answerLines(lineCount));
        }
    }

    // ── Working box ────────────────────────────────────────────────────
    if (step >= 7 && q.workingSpace && q.workingSpace !== 'none') {
        const wsLabel = q.scenario
            ? `Working Space — Question ${qNum} (${q.scenario})`
            : `Working Space — Question ${qNum}`;
        this._renderWorkingBox(wsLabel, 2880);
    }

    // ── Separator between questions ────────────────────────────────────
    this._append(
        new Paragraph({
            border:   { bottom: { style: BorderStyle.DOTTED, size: 2, color: 'CCCCCC', space: 1 } },
            spacing:  spacing(80, 80),
            children: [run('')]
        })
    );
}

    // ════════════════════════════════════════════════════════════════════════
    // COMPONENT HELPERS
    // ════════════════════════════════════════════════════════════════════════


    _renderWorkingBox(label = 'Working Space', heightDxa = 2880) {
    const labelRow = new Paragraph({
        spacing:  spacing(60, 0),
        children: [italic(label, { size: 18, color: 'AAAAAA' })]
    });

    // Empty paragraphs to fill the box height after the label
    const fillerCount = Math.max(1, Math.floor(heightDxa / 360) - 2);
    const fillers     = Array.from({ length: fillerCount }, () =>
        new Paragraph({ spacing: spacing(0, 0), children: [run('')] })
    );

    this._append(
        borderedBox(
            [labelRow, ...fillers],
            {
                shading:       'FEFEFE',
                topBorder:     BORDER_THIN,
                bottomBorder:  BORDER_THIN,
                leftBorder:    BORDER_THIN,
                rightBorder:   BORDER_THIN,
                margins:       { top: 80, bottom: 80, left: 160, right: 160 }
            }
        )
    );
    this._spacer(80, 80);
}   

    _renderDiagramSpace(label, heightDxa = 3600) {
    const labelRow = new Paragraph({
        spacing:  spacing(60, 0),
        children: [italic(label, { size: 18, color: 'AAAAAA' })]
    });

    // Empty paragraphs to fill the box height after the label
    const fillerCount = Math.max(1, Math.floor(heightDxa / 360) - 2);
    const fillers     = Array.from({ length: fillerCount }, () =>
        new Paragraph({ spacing: spacing(0, 0), children: [run('')] })
    );

    this._append(
        borderedBox(
            [labelRow, ...fillers],
            {
                shading:       'FAFAFA',
                topBorder:     BORDER_GREY,
                bottomBorder:  BORDER_GREY,
                leftBorder:    BORDER_GREY,
                rightBorder:   BORDER_GREY,
                margins:       { top: 80, bottom: 80, left: 160, right: 160 }
            }
        )
    );
    this._spacer(80, 80);
}



    _renderCoverInset(insetType, opts) {
        const label = insetType
            ? `[Inset: ${insetType}]`
            : '[Optional Inset]';
        this._append(
            borderedBox(
                [new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing:   spacing(80, 80),
                    children:  [italic(label, { size: 18, color: 'AAAAAA' })]
                })],
                { shading: 'F0F0F0' }
            )
        );
    }

    _renderSectionInset(insetType, subject, sectionLabel) {
        const insetLabel = insetType
            ? `[Reference Inset: ${insetType}  —  ${subject} Section ${sectionLabel}]`
            : `[Optional Reference Inset — Section ${sectionLabel}]`;
        this._append(
            borderedBox(
                [new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing:   spacing(80, 80),
                    children:  [italic(insetLabel, { size: 18, color: '4488AA' })]
                })],
                { shading: 'F0F8FF', topBorder: BORDER_GREY, bottomBorder: BORDER_GREY,
                  leftBorder: BORDER_GREY, rightBorder: BORDER_GREY }
            )
        );
    }


    // ════════════════════════════════════════════════════════════════════════
    // FULL PAPER GENERATORS  (mirrors renderAndSave in biochemicalTests-usage)
    // ════════════════════════════════════════════════════════════════════════

    /**
     * Generate a complete paper for a subject using default options.
     * Includes all pages at full step count (all components added).
     * @param {string} subject
     * @param {object} overrideOptions  merged on top of each page's defaultOptions
     */
    
async renderFullPaper(subject, overrideOptions = {}) {
    ExaminationPaperRegistry._assertSubject(subject);

    const subjectSuffix = {
        chemistry:   'chem',
        biology:     'bio',
        physics:     'phy',
        mathematics: 'mat'
    }[subject];

    const _getQuestions = (pageKey) => {
        const pts = ExaminationPaperRegistry.getProblemTypesBySection(subject, pageKey);
        return pts.map(pt => {
            const methodName = `generate${this._toPascalCase(pt.id)}${subjectSuffix}101`;
            if (typeof ExaminationGenerator[methodName] === 'function') {
                return ExaminationGenerator[methodName].call(ExaminationGenerator, null, null, {});
            }
            console.warn(`  ⚠ No generator found: ${methodName} — using synthetic fallback`);
            return this._syntheticQuestion(pt);
        });
    };

    // ① Cover
    await this.renderPage(subject, 'coverPage', overrideOptions);

    // ② Section A
    const sectionAQuestions = _getQuestions('questionSectionAPage');
    await this.renderPage(subject, 'questionSectionAPage', {
        ...overrideOptions,
        questions:    sectionAQuestions.length ? sectionAQuestions : undefined,
        sectionMarks: overrideOptions.sectionAMarks ?? 30
    });

    // ③ Section B
    const sectionBQuestions = _getQuestions('questionSectionBPage');
    await this.renderPage(subject, 'questionSectionBPage', {
        ...overrideOptions,
        questions:    sectionBQuestions.length ? sectionBQuestions : undefined,
        sectionMarks: overrideOptions.sectionBMarks ?? 35
    });

    // ④ Section C — only render if problem types exist for this subject
    const sectionCQuestions = _getQuestions('questionSectionCPage');
    if (sectionCQuestions.length) {
        await this.renderPage(subject, 'questionSectionCPage', {
            ...overrideOptions,
            questions:    sectionCQuestions,
            sectionMarks: overrideOptions.sectionCMarks ?? 30
        });
    }

    // ⑤ Closing
    await this.renderPage(subject, 'closingPage', overrideOptions);

    return this;
}
    /**
     * Optionally render formatting config page.
     */
    renderFormattingConfig(subject, options = {}) {
        this.renderPage(subject, 'formattingConfig', options);
        return this;
    }




    // ════════════════════════════════════════════════════════════════════════
// DIAGRAM EMBEDDING
// Calls q.generateDiagram(), saves PNG to temp, embeds as ImageRun in docx
// ════════════════════════════════════════════════════════════════════════

async _embedDiagram(q, qNum) {
    try {
        // Call the question's own generateDiagram method
        const result = await q.generateDiagram();

        if (!result?.success) {
            console.warn(`  ⚠ Diagram generation failed for Q${qNum}: ${result?.error || 'unknown error'}`);
            return null;
        }

        // Read the PNG buffer from the written file
        const pngBuffer = fs.readFileSync(result.path);

        // Clean up temp file
        try { fs.unlinkSync(result.path); } catch (_) {}

        // Get dimensions from diagramInfo or use defaults
        const canvasW = q.diagramInfo?.canvasSize?.width  || 800;
        const canvasH = q.diagramInfo?.canvasSize?.height || 600;

        // Scale to fit within content width (max 8666 DXA = ~152mm = ~431pt)
        // ImageRun uses EMU: 1 inch = 914400 EMU, 1 px ≈ 9144 EMU at 96dpi
        const maxWidthEmu  = 6096000;   // ~152mm — fits A4 content width with margins
        const pxToEmu      = 9144;
        const naturalW     = canvasW * pxToEmu;
        const naturalH     = canvasH * pxToEmu;
        const scale        = naturalW > maxWidthEmu ? maxWidthEmu / naturalW : 1;
        const finalW       = Math.round(naturalW * scale);
        const finalH       = Math.round(naturalH * scale);

        return new Paragraph({
            spacing: spacing(80, 80),
            children: [
                new ImageRun({
                    data:           pngBuffer,
                    transformation: { width: finalW / 9144, height: finalH / 9144 },
                    type:           'png'
                })
            ]
        });

    } catch (err) {
        console.warn(`  ⚠ Could not embed diagram for Q${qNum}: ${err.message}`);
        return null;
    }
}


    // ════════════════════════════════════════════════════════════════════════
    // DOCX ASSEMBLY  (mirrors Packer.toBuffer pattern)
    // ════════════════════════════════════════════════════════════════════════

    /**
     * Seals all accumulated sections into a docx Document and writes to disk.
     * @param {string} outputPath   full path including filename.docx
     * @returns {Promise<void>}
     */
    async generateDocx(outputPath) {
        // Flush any open section
        if (this._currentSection) {
            this._sections.push(this._currentSection);
            this._currentSection = null;
        }

        if (!this._sections.length) {
            throw new Error('No content to write — call renderPage() or renderFullPaper() first.');
        }

        const subject    = this._meta.subject    || this._sections[0]?.subject || '';
        const examTitle  = this._meta.examTitle  || '';
        const schoolName = this._meta.schoolName || '';

        // Build docx sections — one docx section per page group
        const docSections = this._sections.map((s, idx) => {
            const isFirst = idx === 0;
            const section = {
                properties: {
                    page: {
                        size: {
                            width:  DXA.PAGE_WIDTH,
                            height: DXA.PAGE_HEIGHT
                        },
                        margin: {
                            top:    DXA.MARGIN_TOP,
                            bottom: DXA.MARGIN_BOTTOM,
                            left:   DXA.MARGIN_LEFT,
                            right:  DXA.MARGIN_RIGHT
                        }
                    }
                },
                headers: {
                    default: makeHeader(subject, examTitle)
                },
                footers: {
                    default: makeFooter()
                },
                children: s.children
            };
            return section;
        });

        const doc = new Document({
            numbering: this._numberingConfig,
            styles: {
                default: {
                    document: {
                        run: {
                            font: 'Times New Roman',
                            size: 24
                        }
                    }
                },
                paragraphStyles: [
                    {
                        id:         'Heading1',
                        name:       'Heading 1',
                        basedOn:    'Normal',
                        next:       'Normal',
                        quickFormat: true,
                        run: { size: 32, bold: true, font: 'Times New Roman' },
                        paragraph:  { spacing: { before: 240, after: 120 }, outlineLevel: 0 }
                    },
                    {
                        id:         'Heading2',
                        name:       'Heading 2',
                        basedOn:    'Normal',
                        next:       'Normal',
                        quickFormat: true,
                        run: { size: 28, bold: true, font: 'Times New Roman' },
                        paragraph:  { spacing: { before: 200, after: 100 }, outlineLevel: 1 }
                    }
                ]
            },
            sections: docSections
        });

        const buffer = await Packer.toBuffer(doc);
        fs.mkdirSync(path.dirname(outputPath), { recursive: true });
        fs.writeFileSync(outputPath, buffer);
        console.log(`✓ Written: ${outputPath}`);
    }


    // ════════════════════════════════════════════════════════════════════════
    // PRIVATE UTILITY
    // ════════════════════════════════════════════════════════════════════════

    _toPascalCase(snakeId) {
        return snakeId
            .split('_')
            .map(w => w.charAt(0).toUpperCase() + w.slice(1))
            .join('');
    }

    _buildMethodName(problemTypeId, subject) {
    // Maps problem type id + subject to exact method names in ExaminationGenerator
    // e.g. 'galvanic_cells' + 'chemistry' → 'generateGalvanicCellschem101'
    //      'cell_division'  + 'biology'   → 'generateCellDivisionbio101'
    //      'kinematics'     + 'physics'   → 'generateKinematicsphy101'
    //      'trigonometry'   + 'mathematics' → 'generateTrigonometrymat101'

    const subjectSuffix = {
        chemistry:   'chem',
        biology:     'bio',
        physics:     'phy',
        mathematics: 'mat'
    }[subject] ?? subject.slice(0, 3);

    return `generate${this._toPascalCase(problemTypeId)}${subjectSuffix}101`;
}

    _syntheticQuestion(pt) {
        return {
            stem:          pt.description,
            marks:         6,
            workingSpace:  pt.workingSpace,
            diagramRequired: pt.diagramRequired,
            answerLines:   pt.workingSpace === 'lines' ? 6 : 4
        };
    }

    _humaniseFormat(fmt) {
        const map = {
            shortStructured:    'Short Structured',
            structuredMultiPart: 'Structured Multi-Part',
            extendedResponse:   'Extended Response',
            multipleChoice:     'Multiple Choice',
            dataResponse:       'Data Response',
            calculation:        'Calculation',
            graphPlotting:      'Graph Plotting',
            extendedResponse:   'Extended Response',
            essayStructured:    'Structured Essay',
            freeEssay:          'Free Essay'
        };
        return map[fmt] || fmt;
    }

    _defaultSectionInstructions(pageKey, opts) {
        if (pageKey === 'questionSectionAPage') {
            return `Answer ALL questions in this section.  Section marks: ${opts.sectionMarks || '—'}`;
        }
        if (pageKey === 'questionSectionBPage') {
            return `Answer ALL questions in this section.  Show all working.  Section marks: ${opts.sectionMarks || '—'}`;
        }
        return `Answer the question(s) in this section.  Section marks: ${opts.sectionMarks || '—'}`;
    }

    _defaultQuestions(subject, pageKey, page, opts) {
    const pts = ExaminationPaperRegistry.getProblemTypesBySection(subject, pageKey);
    if (!pts.length) return [];

    return pts.map(pt => {
        const methodName = this._buildMethodName(pt.id, subject);
        if (typeof ExaminationGenerator[methodName] === 'function') {
            return ExaminationGenerator[methodName].call(ExaminationGenerator, null, null, opts);
        }
        console.warn(`  ⚠ No generator found for method: ${methodName} — using synthetic fallback`);
        return this._syntheticQuestion(pt);
    });
}
}

export { ExaminationPaperRenderer };
