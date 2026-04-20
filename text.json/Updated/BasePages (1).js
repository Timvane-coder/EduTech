// ============================================================================
// BasePages.js
//
// Architecture: Option 2 — Base Pages + Subject Overrides (Layered Registry)
//
// ┌─────────────────────────────────────────────────────────────────────┐
// │  BASE LAYER        Shared page structure across all subjects        │
// │                    drawingSteps, processOptions, core               │
// │                    componentOptions, defaultOptions skeleton        │
// └─────────────────────────────────────────────────────────────────────┘
//
// Consumed by:  examinationPaperRegistry.js  (registry class + problem types)
//               subjectOverrides.js          (resolver)
//
// Supported page keys: coverPage | questionSectionAPage |
//                      questionSectionBPage | questionSectionCPage |
//                      closingPage | formattingConfig
// ============================================================================


// ============================================================================
// BASE PAGES
// Structural definitions shared by every subject.
// Nothing subject-specific lives here.
// ============================================================================

const BasePages = {

    // ── Cover Page ────────────────────────────────────────────────────────
    coverPage: {
        name: 'Examination Cover Page',
        category: 'Examination Paper',
        description: 'Front page carrying school identity, exam metadata, candidate instructions, and duration',
        pageType: 'cover',
        pageStatus: 'blank',

        dataRequired: ['schoolName', 'examTitle'],

        usage: 'Opens every examination paper; populated before any question section is added',

        componentOptions: [
            'schoolName',
            'schoolLogo',
            'examBoard',
            'subjectTitle',
            'examType',
            'candidateLevel',
            'termAndYear',
            'examDate',
            'duration',
            'totalMarks',
            'candidateInstructions',
            'candidateNameBox',
            'candidateNumberBox',
            'centreNumberBox',
            'confidentialityNote',
            'pageNumbering'
        ],

        processOptions: ['manual', 'template', 'guided', 'import'],

        insets: [
            'boardWatermark',
            'securityStrip',
            'bilingualHeader',
            'accessibilityNote'
        ],

        drawingSteps: [
            { step: 1, id: 'schoolIdentity',  required: true,  label: 'Step 1 – Add school name (and logo if available)'           },
            { step: 2, id: 'examMetadata',    required: true,  label: 'Step 2 – Add exam title, subject, level, type, and term'    },
            { step: 3, id: 'timeAndMarks',    required: true,  label: 'Step 3 – Set duration and total marks'                     },
            { step: 4, id: 'candidateFields', required: false, label: 'Step 4 – Insert candidate name / number / centre boxes'    },
            { step: 5, id: 'instructions',    required: false, label: 'Step 5 – Write or paste candidate instructions'            },
            { step: 6, id: 'inserts',         required: false, label: 'Step 6 – Attach optional insets (watermark, security)'     },
            { step: 7, id: 'preview',         required: false, label: 'Step 7 – Preview and mark page complete'                   }
        ],

        defaultOptions: {
            title: 'Examination Cover Page',
            buildMode: 'manual',
            pageStatus: 'blank',
            schoolName: '',
            examTitle: '',
            examBoard: '',
            duration: '1 hour 30 minutes',
            totalMarks: 80,
            showLogo: false,
            showCandidateBoxes: true,
            showInstructions: true,
            showInset: false,
            insetType: 'boardWatermark',
            pageNumbering: true,
            width: 794,
            height: 1123,
            paperSize: 'A4',
            backgroundColor: '#ffffff'
        }
    },


    // ── Question Section A ────────────────────────────────────────────────
    questionSectionAPage: {
        name: 'Question Section A',
        category: 'Examination Paper',
        description: 'First question section — objective items, structured short-answer, or recall/comprehension tasks',
        pageType: 'questionSection',
        sectionLabel: 'A',
        pageStatus: 'blank',

        dataRequired: ['sectionLabel', 'questions'],

        usage: 'Opening question set; lowest cognitive demand — recall and comprehension',

        componentOptions: [
            'sectionHeader',
            'sectionInstructions',
            'questionBlock',
            'subQuestionBlock',
            'multipleChoiceOptions',
            'markAllocation',
            'diagramSpace',
            'labelledDiagram',
            'dataTable',
            'blankAnswerLines',
            'workingSpace',
            'pageBreak',
            'continuedOnNextPage',
            'sectionTotalBox'
        ],

        processOptions: ['manual', 'template', 'import', 'guided'],

        insets: [
            'graphPaper',
            'blankDiagram',
            'conversionTable'
        ],

        questionFormats: [
            'multipleChoice',
            'shortStructured',
            'fillInTheBlank',
            'trueOrFalse',
            'matchingPairs',
            'labelTheDiagram',
            'rankOrOrder',
            'calculation'
        ],

        drawingSteps: [
            { step: 1, id: 'sectionHeader',   required: true,  label: 'Step 1 – Insert Section A header and instructions'           },
            { step: 2, id: 'questionFormat',  required: true,  label: 'Step 2 – Choose question format (MCQ, short structured…)'   },
            { step: 3, id: 'questionBlocks',  required: true,  label: 'Step 3 – Insert question blocks (stems, sub-parts, options)' },
            { step: 4, id: 'markAllocation',  required: true,  label: 'Step 4 – Assign marks to each question / sub-part'          },
            { step: 5, id: 'diagrams',        required: false, label: 'Step 5 – Insert diagrams, tables, or figures'                },
            { step: 6, id: 'answerSpacing',   required: false, label: 'Step 6 – Add answer lines or working space'                  },
            { step: 7, id: 'insets',          required: false, label: 'Step 7 – Attach supplementary insets'                       },
            { step: 8, id: 'sectionTotal',    required: false, label: 'Step 8 – Insert section total box and page breaks'           },
            { step: 9, id: 'preview',         required: false, label: 'Step 9 – Preview and mark complete'                         }
        ],

        defaultOptions: {
            title: 'Section A',
            buildMode: 'manual',
            pageStatus: 'blank',
            sectionLabel: 'A',
            questionFormat: 'shortStructured',
            questionNumberingStyle: '1, 2, 3',
            subPartStyle: '(a), (b), (c)',
            totalQuestions: 0,
            sectionMarks: 0,
            showSectionInstructions: true,
            showMarkAllocations: true,
            showAnswerLines: true,
            answerLinesPerQuestion: 4,
            showInset: false,
            insetType: null,
            pageNumbering: true,
            width: 794,
            height: 1123,
            paperSize: 'A4',
            backgroundColor: '#ffffff'
        }
    },


    // ── Question Section B ────────────────────────────────────────────────
    questionSectionBPage: {
        name: 'Question Section B',
        category: 'Examination Paper',
        description: 'Second question section — structured data-response, longer calculations, context-based analysis',
        pageType: 'questionSection',
        sectionLabel: 'B',
        pageStatus: 'blank',

        dataRequired: ['sectionLabel', 'questions'],

        usage: 'Mid-paper section; moderate-to-high cognitive demand — analysis, application, and calculation',

        componentOptions: [
            'sectionHeader',
            'sectionInstructions',
            'questionBlock',
            'subQuestionBlock',
            'markAllocation',
            'contextPassage',
            'dataTable',
            'graphAxis',
            'labelledDiagram',
            'diagramSpace',
            'calculationWorkingBox',
            'blankAnswerLines',
            'partMarksBreakdown',
            'examinerNoteBox',
            'pageBreak',
            'continuedOnNextPage',
            'sectionTotalBox'
        ],

        processOptions: ['manual', 'template', 'import', 'guided'],

        insets: [
            'graphPaper',
            'blankDiagram',
            'conversionTable'
        ],

        questionFormats: [
            'structuredMultiPart',
            'dataResponse',
            'calculation',
            'extendedShortAnswer',
            'graphPlotting',
            'experimentDesign',
            'errorAnalysis'
        ],

        drawingSteps: [
            { step: 1,  id: 'sectionHeader',  required: true,  label: 'Step 1 – Insert Section B header and instructions'           },
            { step: 2,  id: 'questionFormat', required: true,  label: 'Step 2 – Choose question format (structured, data-response…)' },
            { step: 3,  id: 'contextBlocks',  required: false, label: 'Step 3 – Insert stimulus passages or data tables'             },
            { step: 4,  id: 'questionBlocks', required: true,  label: 'Step 4 – Insert question stems and sub-parts'                 },
            { step: 5,  id: 'markAllocation', required: true,  label: 'Step 5 – Assign marks and part-marks breakdown'               },
            { step: 6,  id: 'diagrams',       required: false, label: 'Step 6 – Insert diagrams, graph axes, or blank figures'       },
            { step: 7,  id: 'workingSpace',   required: false, label: 'Step 7 – Add calculation working boxes and answer lines'      },
            { step: 8,  id: 'insets',         required: false, label: 'Step 8 – Attach supplementary insets'                        },
            { step: 9,  id: 'sectionTotal',   required: false, label: 'Step 9 – Insert section total box and page breaks'            },
            { step: 10, id: 'preview',        required: false, label: 'Step 10 – Preview and mark complete'                         }
        ],

        defaultOptions: {
            title: 'Section B',
            buildMode: 'manual',
            pageStatus: 'blank',
            sectionLabel: 'B',
            questionFormat: 'structuredMultiPart',
            questionNumberingStyle: 'continues',
            subPartStyle: '(a), (b), (c)',
            totalQuestions: 0,
            sectionMarks: 0,
            showContextPassage: false,
            showMarkAllocations: true,
            showWorkingBoxes: true,
            showAnswerLines: true,
            answerLinesPerQuestion: 6,
            showInset: false,
            insetType: null,
            pageNumbering: true,
            width: 794,
            height: 1123,
            paperSize: 'A4',
            backgroundColor: '#ffffff'
        }
    },


    // ── Question Section C ────────────────────────────────────────────────
    questionSectionCPage: {
        name: 'Question Section C',
        category: 'Examination Paper',
        description: 'Third question section — extended-response, essays, or higher-order evaluation tasks',
        pageType: 'questionSection',
        sectionLabel: 'C',
        pageStatus: 'blank',

        dataRequired: ['sectionLabel', 'questions'],

        usage: 'Closing question section; highest cognitive demand — synthesis, evaluation, and extended writing',

        componentOptions: [
            'sectionHeader',
            'sectionInstructions',
            'questionBlock',
            'subQuestionBlock',
            'markAllocation',
            'contextPassage',
            'sourceDocument',
            'extendedWritingBox',
            'diagramSpace',
            'labelledDiagram',
            'dataTable',
            'graphAxis',
            'planningBox',
            'calculationWorkingBox',
            'evaluationCriteria',
            'examinerNoteBox',
            'pageBreak',
            'continuedOnNextPage',
            'choiceInstructions',
            'sectionTotalBox'
        ],

        processOptions: ['manual', 'template', 'import', 'guided'],

        insets: [
            'graphPaper',
            'sourceExtract',
            'markingRubric',
            'conversionTable'
        ],

        questionFormats: [
            'extendedResponse',
            'essayStructured',
            'freeEssay',
            'evaluationTask',
            'synopticQuestion',
            'investigationDesign',
            'sourceAnalysis'
        ],

        drawingSteps: [
            { step: 1,  id: 'sectionHeader',  required: true,  label: 'Step 1 – Insert Section C header and choice instructions'    },
            { step: 2,  id: 'questionFormat', required: true,  label: 'Step 2 – Choose question format (extended, essay…)'          },
            { step: 3,  id: 'sourceBlocks',   required: false, label: 'Step 3 – Insert source documents or stimulus material'       },
            { step: 4,  id: 'questionBlocks', required: true,  label: 'Step 4 – Insert question stems and sub-parts'                },
            { step: 5,  id: 'markAllocation', required: true,  label: 'Step 5 – Assign marks and attach marking rubric if needed'   },
            { step: 6,  id: 'writingSpace',   required: false, label: 'Step 6 – Add extended writing boxes and planning boxes'      },
            { step: 7,  id: 'diagrams',       required: false, label: 'Step 7 – Insert diagrams or graph axes'                      },
            { step: 8,  id: 'insets',         required: false, label: 'Step 8 – Attach supplementary insets'                       },
            { step: 9,  id: 'sectionTotal',   required: false, label: 'Step 9 – Insert section total box and page breaks'           },
            { step: 10, id: 'preview',        required: false, label: 'Step 10 – Preview and mark complete'                        }
        ],

        defaultOptions: {
            title: 'Section C',
            buildMode: 'manual',
            pageStatus: 'blank',
            sectionLabel: 'C',
            questionFormat: 'extendedResponse',
            questionNumberingStyle: 'continues',
            subPartStyle: '(a), (b), (c)',
            totalQuestions: 0,
            sectionMarks: 0,
            choiceInstructions: false,
            showContextPassage: false,
            showMarkAllocations: true,
            showPlanningBox: true,
            showExtendedWritingBox: true,
            extendedWritingLines: 20,
            showInset: false,
            insetType: null,
            pageNumbering: true,
            width: 794,
            height: 1123,
            paperSize: 'A4',
            backgroundColor: '#ffffff'
        }
    },


    // ── Closing Page ──────────────────────────────────────────────────────
    closingPage: {
        name: 'Examination Closing Page',
        category: 'Examination Paper',
        description: 'Final page — end-of-paper declaration, examiner-use boxes, signatory lines, and mark summary',
        pageType: 'closing',
        pageStatus: 'blank',

        dataRequired: ['endOfPaperMarker'],

        usage: 'Closes the paper; provides candidate declaration, marks tally, and examiner-use summary grid',

        componentOptions: [
            'endOfPaperStatement',
            'candidateDeclaration',
            'candidateSignatureLine',
            'totalMarksBox',
            'examinerUseSummaryGrid',
            'markerSignatureLine',
            'moderatorSignatureLine',
            'examinerCommentBox',
            'blankFiller',
            'boardLogoFooter',
            'copyrightNotice',
            'pageNumbering'
        ],

        processOptions: ['manual', 'template', 'guided'],

        insets: [
            'markingSummaryTable',
            'gradeBoundaryNote',
            'accessibilityFooter',
            'boardQAPanel'
        ],

        drawingSteps: [
            { step: 1, id: 'endStatement',   required: true,  label: 'Step 1 – Insert "End of Paper" statement'              },
            { step: 2, id: 'totalMarksBox',  required: false, label: 'Step 2 – Add total marks summary box'                  },
            { step: 3, id: 'examinerGrid',   required: false, label: 'Step 3 – Insert examiner-use summary grid'              },
            { step: 4, id: 'declaration',    required: false, label: 'Step 4 – Add candidate declaration and signature line' },
            { step: 5, id: 'signatoryLines', required: false, label: 'Step 5 – Insert marker and moderator signature lines'  },
            { step: 6, id: 'footerElements', required: false, label: 'Step 6 – Add copyright notice and board footer'        },
            { step: 7, id: 'preview',        required: false, label: 'Step 7 – Preview and mark complete'                    }
        ],

        defaultOptions: {
            title: 'Closing Page',
            buildMode: 'manual',
            pageStatus: 'blank',
            endOfPaperMarker: 'END OF EXAMINATION PAPER',
            showCandidateDeclaration: false,
            showExaminerGrid: true,
            showTotalMarksBox: true,
            showMarkerSignature: false,
            showModeratorSignature: false,
            showCopyrightNotice: true,
            showInset: false,
            insetType: 'markingSummaryTable',
            pageNumbering: true,
            width: 794,
            height: 1123,
            paperSize: 'A4',
            backgroundColor: '#ffffff'
        }
    },


    // ── Formatting Config ─────────────────────────────────────────────────
    formattingConfig: {
        name: 'Paper Formatting Configuration',
        category: 'Examination Paper',
        description: 'Global typography, layout, spacing, and mark-scheme settings applied across the entire paper',
        pageType: 'config',
        pageStatus: 'blank',

        dataRequired: [],

        usage: 'Set once at paper creation; can be overridden per section',

        componentOptions: [
            'paperSize',
            'orientation',
            'margins',
            'bodyFont',
            'headingFont',
            'bodyFontSize',
            'headingFontSize',
            'lineSpacing',
            'questionSpacing',
            'headerStyle',
            'footerStyle',
            'pageNumberPosition',
            'marksColumnWidth',
            'answerLineStyle',
            'answerLineSpacing',
            'diagramBorderStyle',
            'watermark',
            'colorProfile'
        ],

        processOptions: ['manual', 'template', 'guided'],

        insets: [],

        markSchemeOptions: [
            'showMarksInMargin',
            'showTotalPerQuestion',
            'showSectionTotals',
            'showGrandTotal',
            'marksFormat',
            'partMarksSeparator'
        ],

        questionNumberingOptions: [
            'independent',
            'continuous',
            'sectionPrefixed'
        ],

        drawingSteps: [
            { step: 1, id: 'paperLayout',  required: false, label: 'Step 1 – Set paper size, orientation, and margins'       },
            { step: 2, id: 'typography',   required: false, label: 'Step 2 – Choose body and heading fonts and sizes'         },
            { step: 3, id: 'spacing',      required: false, label: 'Step 3 – Set line spacing and question spacing'           },
            { step: 4, id: 'markLayout',   required: false, label: 'Step 4 – Configure marks column and marks format'         },
            { step: 5, id: 'numbering',    required: false, label: 'Step 5 – Choose question numbering style across sections' },
            { step: 6, id: 'headerFooter', required: false, label: 'Step 6 – Define repeating header and footer content'     },
            { step: 7, id: 'watermark',    required: false, label: 'Step 7 – Add watermark (DRAFT / CONFIDENTIAL / none)'    },
            { step: 8, id: 'apply',        required: false, label: 'Step 8 – Apply and propagate to all sections'            }
        ],

        defaultOptions: {
            title: 'Formatting Configuration',
            buildMode: 'manual',
            pageStatus: 'blank',
            paperSize: 'A4',
            orientation: 'portrait',
            margins: { top: 25, bottom: 25, left: 25, right: 20 },
            bodyFont: 'Times New Roman',
            headingFont: 'Times New Roman',
            bodyFontSize: 12,
            headingFontSize: 14,
            lineSpacing: 1.5,
            questionSpacing: 8,
            marksColumnWidth: 20,
            marksFormat: '[{n}]',
            pageNumberPosition: 'bottom-center',
            answerLineStyle: 'solid',
            answerLineSpacing: 8,
            diagramBorderStyle: 'box',
            watermark: null,
            colorProfile: 'black-and-white',
            showMarksInMargin: true,
            showSectionTotals: true,
            showGrandTotal: true,
            questionNumbering: 'continuous'
        }
    }

}; // end BasePages

export { BasePages };
