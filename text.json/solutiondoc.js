
    // ============================================================================
// PATCH FOR ChemistryExamPaperGenerator
// Changes:
//   1. generateComprehensiveDocumentForExam  – renders question subparts after
//      the problem text, before workbook sections
//   2. solveProblemsFromExam                 – captures diagram results
//      (supports both async and sync generateDiagram methods)
//   3. generateProblemSections               – unchanged (kept for reference)
//   4. NEW: generateSubpartsParagraphs       – helper that renders subparts
//   5. NEW: embedDiagramInDocument           – helper that embeds a PNG into
//      the document using docx ImageRun
// ============================================================================

// ─────────────────────────────────────────────────────────────────────────────
// REPLACEMENT: solveProblemsFromExam
//
// KEY CHANGE: After creating the workbook, detect and invoke generateDiagram
// (async OR sync). The resolved diagram result is stored on the solved entry
// so that generateComprehensiveDocumentForExam can embed it later.
// ─────────────────────────────────────────────────────────────────────────────
async solveProblemsFromExam(usedProblems) {
    const solvedProblems = {};

    console.log('\n' + '='.repeat(80));
    console.log('SOLVING PROBLEMS FROM EXAMINATION PAPER');
    console.log('='.repeat(80) + '\n');

    for (const problem of usedProblems.problemDetails) {
        const solverFunctionName = this.getSolverFunctionForProblemType(problem.type);

        if (!solverFunctionName) {
            console.warn(`⚠ No solver found for problem type: ${problem.type}`);
            continue;
        }

        console.log(`Solving Question ${problem.questionNumber}: ${problem.scenario}`);
        console.log(`  Topic: ${problem.topic}`);
        console.log(`  Type: ${problem.type}`);
        console.log(`  Solver: ${solverFunctionName}`);

        try {
            const workbook = this.createWorkbookForProblem(problem);

            if (!solvedProblems[problem.topic]) {
                solvedProblems[problem.topic] = [];
            }

            // ── Diagram handling ──────────────────────────────────────────
            // A problem may optionally expose a generateDiagram method.
            // It can be async (BiologyDiagramsRenderer) or sync (canvas).
            let diagramResult = null;

            if (typeof problem.generateDiagram === 'function') {
                try {
                    console.log(`  Generating diagram for Q${problem.questionNumber}…`);
                    // Await handles both Promise-returning and plain functions.
                    const raw = problem.generateDiagram();
                    diagramResult = (raw && typeof raw.then === 'function')
                        ? await raw
                        : raw;

                    if (diagramResult && diagramResult.success) {
                        console.log(`  ✓ Diagram saved: ${diagramResult.filename}`);
                    } else {
                        console.warn(`  ⚠ Diagram generation failed: ${diagramResult?.error}`);
                        diagramResult = null; // treat as "no diagram"
                    }
                } catch (diagErr) {
                    console.error(`  ❌ Diagram error: ${diagErr.message}`);
                    diagramResult = null;
                }
            }
            // ─────────────────────────────────────────────────────────────

            solvedProblems[problem.topic].push({
                questionNumber: problem.questionNumber,
                problem:        problem,
                workbook:       workbook,
                solverFunction: solverFunctionName,
                diagramResult:  diagramResult   // NEW – null when no diagram
            });

            console.log(`  ✓ Solved successfully\n`);

        } catch (error) {
            console.error(`  ❌ Error solving: ${error.message}\n`);
        }
    }

    return solvedProblems;
}


// ─────────────────────────────────────────────────────────────────────────────
// REPLACEMENT: generateComprehensiveDocumentForExam
//
// KEY CHANGES inside the per-question block:
//   • Calls generateSubpartsParagraphs() to render subparts after problem text
//   • Calls embedDiagramInDocument() to embed PNG if diagramResult is present
//   • generateComprehensiveDocumentForExam is now async (was already async)
//   • Delegates to the now-async solveProblemsFromExam with await
// ─────────────────────────────────────────────────────────────────────────────
async generateComprehensiveDocumentForExam(examPaper, filename = 'exam_comprehensive_solutions.docx') {
    console.log('\n' + '='.repeat(80));
    console.log('GENERATING COMPREHENSIVE SOLUTIONS DOCUMENT');
    console.log('='.repeat(80) + '\n');

    const usedProblems  = this.trackProblemsInExamPaper(examPaper);

    console.log(`📋 Exam contains ${usedProblems.problemDetails.length} problems`);
    console.log(`📚 Topics covered: ${Array.from(usedProblems.topics).join(', ')}\n`);

    // NOTE: await is now required because solveProblemsFromExam is async
    const solvedProblems = await this.solveProblemsFromExam(usedProblems);

    const documentChildren = [];

    // ── Document header ────────────────────────────────────────────────────
    documentChildren.push(
        new Paragraph({
            text:      'Comprehensive Solutions Manual',
            heading:   HeadingLevel.HEADING_1,
            spacing:   { after: 200 },
            alignment: AlignmentType.CENTER
        }),
        new Paragraph({
            text:      `${examPaper.metadata.subjectName} - ${examPaper.metadata.examType}`,
            spacing:   { after: 150 },
            alignment: AlignmentType.CENTER
        }),
        new Paragraph({
            text:      `${examPaper.metadata.gradeLevel} | ${examPaper.metadata.academicYear}`,
            spacing:   { after: 300 },
            alignment: AlignmentType.CENTER
        }),
        new Paragraph({
            text:      `Generated: ${new Date().toLocaleString()}`,
            spacing:   { after: 600 },
            alignment: AlignmentType.CENTER
        })
    );

    // ── Table of contents ──────────────────────────────────────────────────
    documentChildren.push(
        new Paragraph({
            text:    'Table of Contents',
            heading: HeadingLevel.HEADING_2,
            spacing: { after: 200 }
        })
    );

    Object.keys(solvedProblems).forEach(topic => {
        documentChildren.push(
            new Paragraph({
                text:    topic,
                heading: HeadingLevel.HEADING_3,
                spacing: { before: 100, after: 50 }
            })
        );
        solvedProblems[topic].forEach(solved => {
            documentChildren.push(
                new Paragraph({
                    text:    `Question ${solved.questionNumber}: ${solved.problem.scenario}`,
                    spacing: { after: 50 },
                    indent:  { left: 360 }
                })
            );
        });
    });

    documentChildren.push(new Paragraph({ text: '', spacing: { after: 400 } }));

    // ── Detailed solutions ─────────────────────────────────────────────────
    for (const topic of Object.keys(solvedProblems)) {
        documentChildren.push(
            new Paragraph({
                text:            topic,
                heading:         HeadingLevel.HEADING_1,
                spacing:         { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        for (const solved of solvedProblems[topic]) {
            console.log(`Adding solution for Question ${solved.questionNumber}…`);

            // ── Question heading ─────────────────────────────────────────
            documentChildren.push(
                new Paragraph({
                    text:            `Question ${solved.questionNumber}: ${solved.problem.scenario}`,
                    heading:         HeadingLevel.HEADING_2,
                    spacing:         { before: 400, after: 300 },
                    pageBreakBefore: true
                })
            );

            // ── Problem text (bold) ──────────────────────────────────────
            documentChildren.push(
                new Paragraph({
                    children: [new TextRun({ text: String(solved.problem.problem), bold: true })],
                    spacing:  { after: 200 }
                })
            );

            // ── Metadata rows ────────────────────────────────────────────
            documentChildren.push(
                new Paragraph({ text: `Difficulty: ${solved.problem.difficulty}`, spacing: { after: 100 } }),
                new Paragraph({ text: `Marks: ${solved.problem.marks}`,           spacing: { after: 100 } }),
                new Paragraph({
                    children: [new TextRun({ text: `Helper Tip: ${solved.problem.helper}`, italics: true })],
                    spacing:  { after: 200 }
                })
            );

            // ── SUBPARTS (NEW) ───────────────────────────────────────────
            // Rendered immediately after the problem text / metadata so
            // students see the full question structure before the solution.
            const subpartParagraphs = this.generateSubpartsParagraphs(solved.problem);
            documentChildren.push(...subpartParagraphs);

            // ── DIAGRAM (NEW) ────────────────────────────────────────────
            // Embedded after the subparts, before the worked solution.
            if (solved.diagramResult && solved.diagramResult.success) {
                const diagramParagraphs = await this.embedDiagramInDocument(
                    solved.diagramResult,
                    solved.problem
                );
                documentChildren.push(...diagramParagraphs);
            }

            // ── Workbook solution sections ───────────────────────────────
            documentChildren.push(...this.generateProblemSections(solved.workbook));
        }
    }

    // ── Build and write document ───────────────────────────────────────────
    const doc = new Document({
        numbering: {
            config: [
                {
                    reference: 'subparts-bullets',
                    levels: [{
                        level:     0,
                        format:    LevelFormat.BULLET,
                        text:      '•',
                        alignment: AlignmentType.LEFT,
                        style: { paragraph: { indent: { left: 720, hanging: 360 } } }
                    }]
                },
                {
                    reference: 'subparts-numbers',
                    levels: [{
                        level:     0,
                        format:    LevelFormat.DECIMAL,
                        text:      '%1.',
                        alignment: AlignmentType.LEFT,
                        style: { paragraph: { indent: { left: 720, hanging: 360 } } }
                    }]
                }
            ]
        },
        sections: [{
            properties: {
                page: {
                    size:   { width: 12240, height: 15840 },   // US Letter
                    margin: { top: 720, right: 720, bottom: 720, left: 720 }
                }
            },
            children: documentChildren
        }]
    });

    try {
        const buffer = await Packer.toBuffer(doc);
        fs.writeFileSync(filename, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ COMPREHENSIVE SOLUTIONS DOCUMENT GENERATED');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${filename}`);
        console.log(`\n📊 Document Statistics:`);
        console.log(`  • Total Questions Solved: ${usedProblems.problemDetails.length}`);
        console.log(`  • Topics Covered: ${Object.keys(solvedProblems).length}`);
        console.log(`  • Total Pages: Approximately ${Math.ceil(usedProblems.problemDetails.length * 3)}`);
        console.log('\n' + '='.repeat(80) + '\n');

        return filename;
    } catch (error) {
        console.error(`\n❌ Error saving document: ${error.message}`);
        throw error;
    }
}


// ─────────────────────────────────────────────────────────────────────────────
// NEW HELPER: generateSubpartsParagraphs
//
// Converts problem.subparts (string[] | undefined) into docx Paragraph objects.
//
// Rendering rules:
//   • If subparts is empty / undefined → returns a single "No subparts" note
//     (can change to return [] if you prefer silent skip)
//   • Lines that are empty strings → spacer paragraph
//   • Lines that end with ':' (section headers like "Prokaryotic Cells:") →
//     rendered as bold sub-heading
//   • Lines that start with '  -' or '  •' (indented items) →
//     rendered as second-level bullets with extra indent
//   • All other lines → rendered as numbered list items (part a, b, c…)
//
// The numbered parts mirror the exam layout so students can cross-reference.
// ─────────────────────────────────────────────────────────────────────────────
generateSubpartsParagraphs(problem) {
    const paragraphs = [];

    // Section heading
    paragraphs.push(
        new Paragraph({
            children: [new TextRun({ text: 'Question Parts:', bold: true, underline: {} })],
            spacing:  { before: 200, after: 100 }
        })
    );

    const subparts = problem.subparts;

    // Guard: nothing to render
    if (!subparts || !Array.isArray(subparts) || subparts.length === 0) {
        paragraphs.push(
            new Paragraph({
                children: [new TextRun({ text: 'This question has no separate subparts.', italics: true })],
                spacing:  { after: 200 }
            })
        );
        return paragraphs;
    }

    // Part labels: (a), (b), (c) … for real question parts
    // We only advance the label counter for lines that are genuine sub-questions
    // (not spacers, headers, or sub-bullets).
    const partLabels = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let partIndex = 0;

    subparts.forEach(line => {

        // Empty line → spacer
        if (line.trim() === '') {
            paragraphs.push(new Paragraph({ text: '', spacing: { after: 80 } }));
            return;
        }

        const trimmed = line.trim();

        // Indented sub-bullet (starts with '-' or '•' after leading spaces)
        const isSubBullet = /^\s{2,}[-•]/.test(line);
        if (isSubBullet) {
            paragraphs.push(
                new Paragraph({
                    children: [new TextRun({ text: trimmed.replace(/^[-•]\s*/, '') })],
                    indent:   { left: 1080, hanging: 360 },   // deeper indent
                    numbering: { reference: 'subparts-bullets', level: 0 },
                    spacing:  { after: 60 }
                })
            );
            return;
        }

        // Section header (e.g. "Prokaryotic Cells:" or "Key Difference:")
        const isHeader = trimmed.endsWith(':') && trimmed.length < 60;
        if (isHeader) {
            paragraphs.push(
                new Paragraph({
                    children: [new TextRun({ text: trimmed, bold: true })],
                    spacing:  { before: 120, after: 60 },
                    indent:   { left: 360 }
                })
            );
            return;
        }

        // Standard sub-question – labelled (a), (b), (c) …
        const label = partIndex < partLabels.length
            ? `(${partLabels[partIndex]})`
            : `(${partIndex + 1})`;
        partIndex++;

        paragraphs.push(
            new Paragraph({
                children: [
                    new TextRun({ text: `${label}  `, bold: true }),
                    new TextRun({ text: trimmed })
                ],
                spacing: { after: 100 },
                indent:  { left: 360 }
            })
        );
    });

    // Trailing spacer
    paragraphs.push(new Paragraph({ text: '', spacing: { after: 200 } }));

    return paragraphs;
}


// ─────────────────────────────────────────────────────────────────────────────
// NEW HELPER: embedDiagramInDocument
//
// Reads the PNG written by generateDiagram() and returns an array of
// docx Paragraph objects containing:
//   1. A labelled heading  ("Diagram – <scenario>")
//   2. The image itself    (ImageRun, centred, max width 6.5 inches)
//   3. A caption           (italic, centred)
//   4. A trailing spacer
//
// diagramResult shape:  { success: true, filename: string, path: string }
// problem shape:        { scenario: string, topic: string, questionNumber: … }
// ─────────────────────────────────────────────────────────────────────────────
async embedDiagramInDocument(diagramResult, problem) {
    const paragraphs = [];

    try {
        // Resolve the file path – use .path first, fall back to .filename
        const imagePath = diagramResult.path || diagramResult.filename;

        if (!imagePath || !fs.existsSync(imagePath)) {
            console.warn(`  ⚠ Diagram file not found: ${imagePath}`);
            return paragraphs;
        }

        const imageBuffer = fs.readFileSync(imagePath);

        // Detect dimensions from the PNG header (bytes 16-23 hold width/height)
        // so we can maintain aspect ratio.  Falls back to safe defaults.
        let naturalWidth  = 800;
        let naturalHeight = 600;

        if (imageBuffer.length >= 24 &&
            imageBuffer.toString('ascii', 1, 4) === 'PNG') {
            naturalWidth  = imageBuffer.readUInt32BE(16);
            naturalHeight = imageBuffer.readUInt32BE(20);
        }

        // Target width: 6.5 inches (content width with 0.5" margins each side)
        // 1 inch = 914 400 EMU  (docx unit)
        const maxWidthInches  = 6.5;
        const emuPerInch      = 914400;
        const maxWidthEmu     = Math.round(maxWidthInches * emuPerInch);

        const aspectRatio     = naturalHeight / naturalWidth;
        const imageWidthEmu   = maxWidthEmu;
        const imageHeightEmu  = Math.round(imageWidthEmu * aspectRatio);

        // ── Diagram heading ────────────────────────────────────────────
        paragraphs.push(
            new Paragraph({
                children: [
                    new TextRun({
                        text:  `Diagram – ${problem.scenario}`,
                        bold:  true,
                        color: '2E75B6'
                    })
                ],
                spacing:  { before: 200, after: 100 },
                alignment: AlignmentType.CENTER
            })
        );

        // ── Image paragraph ────────────────────────────────────────────
        paragraphs.push(
            new Paragraph({
                children: [
                    new ImageRun({
                        data:          imageBuffer,
                        type:          'png',          // CRITICAL: always set type
                        transformation: {
                            width:  Math.round(imageWidthEmu  / emuPerInch * 96),  // px
                            height: Math.round(imageHeightEmu / emuPerInch * 96)   // px
                        }
                    })
                ],
                alignment: AlignmentType.CENTER,
                spacing:   { after: 100 }
            })
        );

        // ── Caption ────────────────────────────────────────────────────
        paragraphs.push(
            new Paragraph({
                children: [
                    new TextRun({
                        text:    `Figure: ${problem.topic} – Q${problem.questionNumber}`,
                        italics: true,
                        size:    20   // 10 pt
                    })
                ],
                alignment: AlignmentType.CENTER,
                spacing:   { after: 300 }
            })
        );

        console.log(`  ✓ Diagram embedded (${naturalWidth}×${naturalHeight}px)`);

    } catch (err) {
        console.error(`  ❌ Failed to embed diagram: ${err.message}`);
        // Return an error notice paragraph instead of crashing
        paragraphs.push(
            new Paragraph({
                children: [
                    new TextRun({
                        text:   `[Diagram could not be embedded: ${err.message}]`,
                        color:  'FF0000',
                        italics: true
                    })
                ],
                spacing: { after: 200 }
            })
        );
    }

    return paragraphs;
}

// ─────────────────────────────────────────────────────────────────────────────
// SUMMARY OF ALL CHANGES
// ─────────────────────────────────────────────────────────────────────────────
//
//  METHOD                              CHANGE
//  ─────────────────────────────────── ────────────────────────────────────────
//  solveProblemsFromExam               Made async; now awaits generateDiagram()
//                                      (works for both sync + async variants);
//                                      stores diagramResult on each solved entry
//
//  generateComprehensiveDocumentForExam Now awaits solveProblemsFromExam;
//                                      added numbering config for subpart lists;
//                                      calls generateSubpartsParagraphs() after
//                                      problem metadata;
//                                      calls embedDiagramInDocument() after
//                                      subparts, before workbook sections;
//                                      switched forEach loops to for…of so
//                                      await works correctly inside the loop
//
//  generateSubpartsParagraphs (NEW)    Pure helper – converts problem.subparts
//                                      (string[]) into docx Paragraphs with
//                                      (a)/(b)/(c) labels, section headers,
//                                      and sub-bullets
//
//  embedDiagramInDocument (NEW)        Async helper – reads PNG from disk,
//                                      detects dimensions from PNG header,
//                                      returns heading + ImageRun + caption
//
// ─────────────────────────────────────────────────────────────────────────────

    // ========================================================================
    // GENERATE PROBLEM SECTIONS (Keep from original code)
    // ========================================================================

    generateProblemSections(workbookInstance) {
        const workbook = workbookInstance.currentWorkbook;
        if (!workbook) {
            console.error('No workbook generated');
            return [];
        }

        const sections = [];

        workbook.sections.forEach((section, sectionIndex) => {
            sections.push(
                new Paragraph({
                    text: section.title,
                    heading: HeadingLevel.HEADING_2,
                    spacing: { before: 400, after: 200 }
                })
            );

            if (section.data && Array.isArray(section.data)) {
                section.data.forEach(row => {
                    if (Array.isArray(row)) {
                        if (row.length === 2 && row[0] && row[1]) {
                            if (row[0] === '' && row[1] === '') {
                                sections.push(
                                    new Paragraph({
                                        text: '',
                                        spacing: { after: 200 }
                                    })
                                );
                            } else if (row[0].toUpperCase() === row[0] && row[1] === '') {
                                sections.push(
                                    new Paragraph({
                                        text: row[0],
                                        heading: HeadingLevel.HEADING_3,
                                        spacing: { before: 200, after: 100 }
                                    })
                                );
                            } else if (row[0] === '•') {
                                sections.push(
                                    new Paragraph({
                                        text: row[1],
                                        bullet: {
                                            level: 0
                                        },
                                        spacing: { after: 50 }
                                    })
                                );
                            } else {
                                sections.push(
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${row[0]}: `,
                                                bold: true
                                            }),
                                            new TextRun({
                                                text: String(row[1])
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    })
                                );
                            }
                        } else if (row.length > 2) {
                            const isHeader = row.every(cell => 
                                typeof cell === 'string' && 
                                (cell.includes('Type') || cell.includes('Name') || cell.includes('Category'))
                            );
                            
                            sections.push(
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: row.join(' | '),
                                            bold: isHeader
                                        })
                                    ],
                                    spacing: { after: isHeader ? 150 : 100 }
                                })
                            );
                        }
                    }
                });
            }

            sections.push(
                new Paragraph({
                    text: '',
                    spacing: { after: 300 }
                })
            );
        });

        return sections;
    }

    // ========================================================================
    // NEW: CHECK AVAILABLE PROBLEMS IN EXAM PAPER
    // ========================================================================

    checkAvailableProblemsInExam(examPaper) {
        console.log('\n' + '='.repeat(80));
        console.log('CHECKING AVAILABLE PROBLEMS IN EXAM PAPER');
        console.log('='.repeat(80) + '\n');

        const problemsWithSolvers = [];
        const problemsWithoutSolvers = [];

        examPaper.questionSections.forEach(section => {
            section.questions.forEach(question => {
                const problemType = question.parameters?.type || question.type;
                const solverFunction = this.getSolverFunctionForProblemType(problemType);

                const problemInfo = {
                    questionNumber: question.number,
                    section: section.label,
                    topic: question.topic,
                    type: problemType,
                    scenario: question.scenario,
                    difficulty: question.difficulty,
                    marks: question.marks,
                    hasSolver: !!solverFunction,
                    solverFunction: solverFunction
                };

                if (solverFunction) {
                    problemsWithSolvers.push(problemInfo);
                } else {
                    problemsWithoutSolvers.push(problemInfo);
                }
            });
        });

        console.log(`✓ Problems with solvers: ${problemsWithSolvers.length}`);
        console.log(`⚠ Problems without solvers: ${problemsWithoutSolvers.length}\n`);

        if (problemsWithSolvers.length > 0) {
            console.log('Problems that CAN be solved:');
            problemsWithSolvers.forEach(p => {
                console.log(`  ✓ Q${p.questionNumber} (Section ${p.section}): ${p.scenario}`);
                console.log(`      Type: ${p.type} | Solver: ${p.solverFunction}`);
            });
            console.log();
        }

        if (problemsWithoutSolvers.length > 0) {
            console.log('Problems that CANNOT be solved (missing solvers):');
            problemsWithoutSolvers.forEach(p => {
                console.log(`  ⚠ Q${p.questionNumber} (Section ${p.section}): ${p.scenario}`);
                console.log(`      Type: ${p.type} | No solver available`);
            });
            console.log();
        }

        console.log('='.repeat(80) + '\n');

        return {
            withSolvers: problemsWithSolvers,
            withoutSolvers: problemsWithoutSolvers,
            totalProblems: problemsWithSolvers.length + problemsWithoutSolvers.length,
            canGenerateDocument: problemsWithSolvers.length > 0
        };
    }
}


const EndSection1 = "close";