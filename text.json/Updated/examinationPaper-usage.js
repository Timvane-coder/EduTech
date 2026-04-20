//examinationPaper-usage.js
// ============================================================================
// examinationPaper-usage.js
//
// Interactive terminal-based test suite for Examination Paper generation.
// Mirrors biochemicalTests-usage.js exactly:
//
// Run:  node examinationPaper-usage.js
//       node examinationPaper-usage.js --all
//       node examinationPaper-usage.js --subject chemistry
//       node examinationPaper-usage.js --subject mathematics --full
//
// Output .docx files are saved to ./output/<subject>/<filename>.docx
// ============================================================================

import inquirer    from 'inquirer';
import chalk       from 'chalk';
import fs          from 'fs';
import path        from 'path';
import { fileURLToPath } from 'url';

import { ExaminationPaperRegistry } from './examinationPaperRegistry.js';
import { ExaminationGenerator }     from './examinationGenerator.js';
import { ExaminationPaperRenderer } from './ExaminationPaperRenderer.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ─────────────────────────────────────────────────────────────────────────────
// FILE HELPERS
// ─────────────────────────────────────────────────────────────────────────────

function ensureDir(dir) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

/**
 * Creates a fresh renderer, renders the requested pages, and writes docx.
 * @param {object} config  { subject, pages: [{ pageKey, options, drawingStep }] }
 * @param {string} outputPath
 */
async function renderAndSave(config, outputPath) {
    const renderer = new ExaminationPaperRenderer();

    for (const p of config.pages) {
        renderer.renderPage(config.subject, p.pageKey, p.options || {}, p.drawingStep ?? Infinity);
    }

    await renderer.generateDocx(outputPath);
}

/**
 * Render a complete paper with all defaults.
 */
async function renderFullPaperAndSave(subject, options, outputPath) {
    const renderer = new ExaminationPaperRenderer();
    renderer.renderFullPaper(subject, options);
    await renderer.generateDocx(outputPath);
}


// ─────────────────────────────────────────────────────────────────────────────
// TEST DEFINITIONS
// Mirrors DIAGRAMS object in biochemicalTests-usage.js
// ─────────────────────────────────────────────────────────────────────────────

const PAPERS = {

    // ── Chemistry ─────────────────────────────────────────────────────────
    chemistry: {
        label:   'Chemistry Examination Paper',
        tag:     'CHEM',
        subject: 'chemistry',
        defaultOptions: {
            schoolName:   'Hillside Grammar School',
            examTitle:    'Chemistry — Second Term Examination',
            subjectTitle: 'Chemistry',
            examBoard:    'Cambridge IGCSE',
            candidateLevel: 'IGCSE / Form 5',
            examType:     'Theory Paper',
            termAndYear:  'Second Term 2025',
            duration:     '1 hour 30 minutes',
            totalMarks:   80
        },
        groups: [
            {
                name: 'Cover Page — Step-by-Step Build',
                cases: [1, 2, 3, 4, 5, 6, 7].map(step => ({
                    filename:    `chem_cover_step_${step}.docx`,
                    desc:        [
                        'Step 1 — School identity',
                        'Step 2 — Exam metadata (title, subject, level)',
                        'Step 3 — Duration and total marks',
                        'Step 4 — Candidate fields (name, number, centre)',
                        'Step 5 — Candidate instructions',
                        'Step 6 — Optional insets (watermark)',
                        'Step 7 — Preview complete'
                    ][step - 1],
                    config: {
                        subject: 'chemistry',
                        pages: [{
                            pageKey:     'coverPage',
                            drawingStep: step,
                            options: {
                                schoolName:    'Hillside Grammar School',
                                examTitle:     'Chemistry — Second Term Examination',
                                subjectTitle:  'Chemistry',
                                examBoard:     'Cambridge IGCSE',
                                candidateLevel: 'IGCSE / Form 5',
                                examType:      'Theory Paper',
                                termAndYear:   'Second Term 2025',
                                duration:      '1 hour 30 minutes',
                                totalMarks:    80,
                                showInset:     step === 6,
                                insetType:     'boardWatermark'
                            }
                        }]
                    }
                }))
            },
            {
                name: 'Section A — Step-by-Step Build',
                cases: [1, 2, 4, 6, 7, 8, 9].map(step => ({
                    filename: `chem_sectionA_step_${step}.docx`,
                    desc: {
                        1: 'Step 1 — Section A header + instructions',
                        2: 'Step 2 — Question format declaration',
                        4: 'Step 4 — Question blocks (stems)',
                        6: 'Step 6 — Diagram spaces',
                        7: 'Step 7 — Answer lines + working space',
                        8: 'Step 8 — Reference inset (periodic table)',
                        9: 'Step 9 — Section total box + page break'
                    }[step],
                    config: {
                        subject: 'chemistry',
                        pages: [{
                            pageKey:     'questionSectionAPage',
                            drawingStep: step,
                            options: {
                                sectionMarks:  30,
                                showInset:     step >= 8,
                                insetType:     'periodicTable'
                            }
                        }]
                    }
                }))
            },
            {
                name: 'Section B — With Generated Problems',
                cases: [
                    {
                        filename: `chem_sectionB_mole_calculations.docx`,
                        desc:     'Section B — Mole Calculations (full steps)',
                        config: {
                            subject: 'chemistry',
                            pages: [{
                                pageKey: 'questionSectionBPage',
                                options: {
                                    sectionMarks: 35,
                                    questions: [
                                        ExaminationGenerator.generateMoleCalculationschem101(null, null, {}),
                                        ExaminationGenerator.generateEquilibriumConstantschem101(null, null, {})
                                    ]
                                }
                            }]
                        }
                    },
                    {
                        filename: `chem_sectionB_galvanic_cells.docx`,
                        desc:     'Section B — Galvanic Cells (full steps)',
                        config: {
                            subject: 'chemistry',
                            pages: [{
                                pageKey: 'questionSectionBPage',
                                options: {
                                    sectionMarks: 35,
                                    questions: [
                                        ExaminationGenerator.generateGalvanicCellschem101(null, null, {}),
                                        ExaminationGenerator.generateTitrationsDiagramchem101(null, null, {})
                                    ]
                                }
                            }]
                        }
                    }
                ]
            },
            {
                name: 'Closing Page — Step-by-Step Build',
                cases: [1, 2, 3, 4, 5, 6, 7].map(step => ({
                    filename: `chem_closing_step_${step}.docx`,
                    desc: [
                        'Step 1 — End of Paper statement',
                        'Step 2 — Total marks box',
                        'Step 3 — Examiner-use summary grid',
                        'Step 4 — Candidate declaration + signature',
                        'Step 5 — Marker / moderator signature lines',
                        'Step 6 — Copyright + board footer',
                        'Step 7 — Preview complete'
                    ][step - 1],
                    config: {
                        subject: 'chemistry',
                        pages: [{
                            pageKey:     'closingPage',
                            drawingStep: step,
                            options: {
                                schoolName:               'Hillside Grammar School',
                                totalMarks:               80,
                                showCandidateDeclaration: step >= 4,
                                showMarkerSignature:      step >= 5,
                                showModeratorSignature:   step >= 5
                            }
                        }]
                    }
                }))
            },
            {
                name: 'Full Chemistry Paper (all sections, all defaults)',
                cases: [
                    {
                        filename: `chem_full_paper_default.docx`,
                        desc:     'Complete chemistry paper — cover + A + B + C + closing',
                        full:     true,
                        subject:  'chemistry',
                        options: {
                            schoolName:   'Hillside Grammar School',
                            examTitle:    'Chemistry — Second Term Examination',
                            subjectTitle: 'Chemistry',
                            duration:     '1 hour 30 minutes',
                            totalMarks:   80,
                            sectionAMarks: 40,
                            sectionBMarks: 40
 
                        }
                    }
                ]
            }
        ]
    },


    // ── Biology ───────────────────────────────────────────────────────────
    biology: {
        label:   'Biology Examination Paper',
        tag:     'BIOL',
        subject: 'biology',
        defaultOptions: {
            schoolName:    'Hillside Grammar School',
            examTitle:     'Biology — First Term Examination',
            subjectTitle:  'Biology',
            examBoard:     'Cambridge IGCSE',
            candidateLevel: 'IGCSE / Form 4',
            examType:      'Theory Paper',
            termAndYear:   'First Term 2025',
            duration:      '1 hour 15 minutes',
            totalMarks:    75
        },
        groups: [
            {
                name: 'Cover Page — Step-by-Step Build',
                cases: [1, 3, 5, 7].map(step => ({
                    filename: `biol_cover_step_${step}.docx`,
                    desc: {
                        1: 'Step 1 — School identity',
                        3: 'Step 3 — Duration and total marks',
                        5: 'Step 5 — Candidate instructions',
                        7: 'Step 7 — Preview complete'
                    }[step],
                    config: {
                        subject: 'biology',
                        pages: [{
                            pageKey:     'coverPage',
                            drawingStep: step,
                            options: {
                                schoolName:    'Hillside Grammar School',
                                examTitle:     'Biology — First Term Examination',
                                subjectTitle:  'Biology',
                                duration:      '1 hour 15 minutes',
                                totalMarks:    75
                            }
                        }]
                    }
                }))
            },
            {
                name: 'Section A — Cell Structure + Cell Division',
                cases: [
                    {
                        filename: `biol_sectionA_cell_structure.docx`,
                        desc:     'Section A — Cell Structure + Cell Division (full)',
                        config: {
                            subject: 'biology',
                            pages: [{
                                pageKey: 'questionSectionAPage',
                                options: {
                                    sectionMarks: 25,
                                    questions: [
                                        ExaminationGenerator.generateCellStructureDiagrambio101(null, null, {}),
                                        ExaminationGenerator.generateCellDivisionbio101(null, null, {})
                                    ]
                                }
                            }]
                        }
                    }
                ]
            },
            {
                name: 'Section B — Genetics + Ecosystems',
                cases: [
                    {
                        filename: `biol_sectionB_genetics_ecosystems.docx`,
                        desc:     'Section B — Mendelian Genetics + Ecosystems (full)',
                        config: {
                            subject: 'biology',
                            pages: [{
                                pageKey: 'questionSectionBPage',
                                options: {
                                    sectionMarks: 35,
                                    showContextPassage: true,
                                    contextPassage: 'Sickle-cell disease is caused by a single nucleotide substitution in the HBB gene, replacing glutamate with valine in the β-globin chain of haemoglobin.',
                                    questions: [
                                        ExaminationGenerator.generateMendelianGeneticsbio101(null, null, {}),
                                        ExaminationGenerator.generateEcosystemsbio101(null, null, {})
                                    ]
                                }
                            }]
                        }
                    }
                ]
            },
            {
                name: 'Full Biology Paper (all sections, all defaults)',
                cases: [
                    {
                        filename: `biol_full_paper_default.docx`,
                        desc:     'Complete biology paper — cover + A + B + C + closing',
                        full:     true,
                        subject:  'biology',
                        options: {
                            schoolName:   'Hillside Grammar School',
                            examTitle:    'Biology — First Term Examination',
                            subjectTitle: 'Biology',
                            duration:     '1 hour 15 minutes',
                            totalMarks:   75,
                            sectionAMarks: 40,
                            sectionBMarks: 35
                        }
                    }
                ]
            }
        ]
    },


    // ── Physics ───────────────────────────────────────────────────────────
    physics: {
        label:   'Physics Examination Paper',
        tag:     'PHYS',
        subject: 'physics',
        defaultOptions: {
            schoolName:    'Hillside Grammar School',
            examTitle:     'Physics — Second Term Examination',
            subjectTitle:  'Physics',
            examBoard:     'Cambridge IGCSE',
            candidateLevel: 'IGCSE / Form 5',
            examType:      'Theory Paper',
            termAndYear:   'Second Term 2025',
            duration:      '1 hour 15 minutes',
            totalMarks:    80
        },
        groups: [
            {
                name: 'Cover Page — Step-by-Step Build',
                cases: [1, 3, 5, 7].map(step => ({
                    filename: `phys_cover_step_${step}.docx`,
                    desc: {
                        1: 'Step 1 — School identity',
                        3: 'Step 3 — Duration and total marks',
                        5: 'Step 5 — Candidate instructions',
                        7: 'Step 7 — Preview complete'
                    }[step],
                    config: {
                        subject: 'physics',
                        pages: [{
                            pageKey:     'coverPage',
                            drawingStep: step,
                            options: {
                                schoolName:    'Hillside Grammar School',
                                examTitle:     'Physics — Second Term Examination',
                                subjectTitle:  'Physics',
                                duration:      '1 hour 15 minutes',
                                totalMarks:    80
                            }
                        }]
                    }
                }))
            },
            {
                name: 'Section A — Waves + Pressure & Moments',
                cases: [
                    {
                        filename: `phys_sectionA_waves_pressure.docx`,
                        desc:     'Section A — Waves & Properties + Pressure & Moments',
                        config: {
                            subject: 'physics',
                            pages: [{
                                pageKey: 'questionSectionAPage',
                                options: {
                                    sectionMarks: 25,
                                    questions: [
                                        ExaminationGenerator.generateWavesAndPropertiesphy101(null, null, {}),
                                        ExaminationGenerator.generatePressureAndMomentsphy101(null, null, {})
                                    ]
                                }
                            }]
                        }
                    }
                ]
            },
            {
                name: 'Section B — Kinematics + Forces + Energy',
                cases: [
                    {
                        filename: `phys_sectionB_kinematics_forces_energy.docx`,
                        desc:     'Section B — Kinematics + Forces + Energy (full)',
                        config: {
                            subject: 'physics',
                            pages: [{
                                pageKey: 'questionSectionBPage',
                                options: {
                                    sectionMarks: 40,
                                    questions: [
                                        ExaminationGenerator.generateKinematicsphy101(null, null, {}),
                                        ExaminationGenerator.generateForcesAndNewtonsLawsphy101(null, null, {}),
                                        ExaminationGenerator.generateEnergyWorkPowerphy101(null, null, {})
                                    ]
                                }
                            }]
                        }
                    }
                ]
            },
            {
                name: 'Full Physics Paper (all sections, all defaults)',
                cases: [
                    {
                        filename: `phys_full_paper_default.docx`,
                        desc:     'Complete physics paper — cover + A + B + C + closing',
                        full:     true,
                        subject:  'physics',
                        options: {
                            schoolName:   'Hillside Grammar School',
                            examTitle:    'Physics — Second Term Examination',
                            subjectTitle: 'Physics',
                            duration:     '1 hour 15 minutes',
                            totalMarks:   80,
                            sectionAMarks: 40,
                            sectionBMarks: 40
                        }
                    }
                ]
            }
        ]
    },


    // ── Mathematics ───────────────────────────────────────────────────────
    mathematics: {
        label:   'Mathematics Examination Paper',
        tag:     'MATH',
        subject: 'mathematics',
        defaultOptions: {
            schoolName:    'Hillside Grammar School',
            examTitle:     'Mathematics — Second Term Examination',
            subjectTitle:  'Mathematics',
            examBoard:     'Cambridge IGCSE',
            candidateLevel: 'IGCSE / Form 5',
            examType:      'Non-Calculator Paper',
            termAndYear:   'Second Term 2025',
            duration:      '2 hours',
            totalMarks:    100
        },
        groups: [
            {
                name: 'Cover Page — Step-by-Step Build',
                cases: [1, 3, 5, 7].map(step => ({
                    filename: `math_cover_step_${step}.docx`,
                    desc: {
                        1: 'Step 1 — School identity',
                        3: 'Step 3 — Duration and total marks',
                        5: 'Step 5 — Candidate instructions',
                        7: 'Step 7 — Preview complete'
                    }[step],
                    config: {
                        subject: 'mathematics',
                        pages: [{
                            pageKey:     'coverPage',
                            drawingStep: step,
                            options: {
                                schoolName:    'Hillside Grammar School',
                                examTitle:     'Mathematics — Second Term Examination',
                                subjectTitle:  'Mathematics',
                                duration:      '2 hours',
                                totalMarks:    100
                            }
                        }]
                    }
                }))
            },
            {
                name: 'Section A — Algebra + Number',
                cases: [
                    {
                        filename: `math_sectionA_algebra_number.docx`,
                        desc:     'Section A — Algebra & Equations + Number & Arithmetic',
                        config: {
                            subject: 'mathematics',
                            pages: [{
                                pageKey: 'questionSectionAPage',
                                options: {
                                    sectionMarks: 30,
                                    questions: [
                                        ExaminationGenerator.generateAlgebraEquationsmat101(null, null, {}),
                                        ExaminationGenerator.generateNumberAndArithmeticmat101(null, null, {})
                                    ]
                                }
                            }]
                        }
                    }
                ]
            },
            {
                name: 'Section B — Trigonometry + Quadratics + Statistics',
                cases: [
                    {
                        filename: `math_sectionB_trig_quad_stats.docx`,
                        desc:     'Section B — Trigonometry + Quadratics + Statistics (full)',
                        config: {
                            subject: 'mathematics',
                            pages: [{
                                pageKey: 'questionSectionBPage',
                                options: {
                                    sectionMarks: 40,
                                    questions: [
                                        ExaminationGenerator.generateTrigonometrymat101(null, null, {}),
                                        ExaminationGenerator.generateQuadraticEquationsmat101(null, null, {}),
                                        ExaminationGenerator.generateStatisticsAndProbabilitymat101(null, null, {})
                                    ]
                                }
                            }]
                        }
                    }
                ]
            },
            {
                name: 'Section C — Calculus + Sequences (mathematics only)',
                cases: [
                    {
                        filename: `math_sectionC_calculus_sequences.docx`,
                        desc:     'Section C — Calculus + Sequences & Series (full)',
                        config: {
                            subject: 'mathematics',
                            pages: [{
                                pageKey: 'questionSectionCPage',
                                options: {
                                    sectionMarks: 30,
                                    questions: [
                                        ExaminationGenerator.generateCalculusDifferentiationmat101(null, null, {}),
                                        ExaminationGenerator.generateCalculusIntegrationmat101(null, null, {}),
                                        ExaminationGenerator.generateSequencesAndSeriesmat101(null, null, {})
                                    ]
                                }
                            }]
                        }
                    }
                ]
            },
            {
                name: 'Formatting Config Page',
                cases: [
                    {
                        filename: `math_formatting_config.docx`,
                        desc:     'Formatting configuration page — all steps',
                        config: {
                            subject: 'mathematics',
                            pages: [{
                                pageKey: 'formattingConfig',
                                options: {
                                    paperSize:        'A4',
                                    orientation:      'portrait',
                                    bodyFont:         'Times New Roman',
                                    bodyFontSize:     12,
                                    lineSpacing:      1.5,
                                    questionSpacing:  10,
                                    watermark:        'DRAFT',
                                    colorProfile:     'black-and-white'
                                }
                            }]
                        }
                    }
                ]
            },
            {
                name: 'Full Mathematics Paper (all sections, all defaults)',
                cases: [
                    {
                        filename: `math_full_paper_default.docx`,
                        desc:     'Complete mathematics paper — cover + A + B + C + closing',
                        full:     true,
                        subject:  'mathematics',
                        options: {
                            schoolName:   'Hillside Grammar School',
                            examTitle:    'Mathematics — Second Term Examination',
                            subjectTitle: 'Mathematics',
                            duration:     '2 hours',
                            totalMarks:   100,
                            sectionAMarks: 40,
                            sectionBMarks: 30,
                            sectionCMarks: 30
                        }
                    }
                ]
            }
        ]
    }
};


// ─────────────────────────────────────────────────────────────────────────────
// RENDERING ENGINE  (mirrors renderGroup / renderDiagramSuite)
// ─────────────────────────────────────────────────────────────────────────────

async function renderGroup(subjectKey, group, paperDef) {
    const baseDir = path.join(__dirname, 'output', subjectKey);
    ensureDir(baseDir);

    console.log(chalk.cyan(`\n  📋 ${group.name}`));

    let passed = 0, failed = 0;

    for (const testCase of group.cases) {
        const outputPath = path.join(baseDir, testCase.filename);

        process.stdout.write(`    ${testCase.desc.padEnd(65)}`);
        try {
            if (testCase.full) {
                await renderFullPaperAndSave(testCase.subject, testCase.options, outputPath);
            } else {
                await renderAndSave(testCase.config, outputPath);
            }
            process.stdout.write(chalk.green(' ✓ OK\n'));
            passed++;
        } catch (err) {
            process.stdout.write(chalk.red(` ✗ FAIL\n`));
            console.error(chalk.red(`      Error: ${err.message}`));
            if (process.env.DEBUG) console.error(err.stack);
            failed++;
        }
    }

    return { passed, failed };
}

async function renderPaperSuite(subjectKey, paperDef) {
    console.log(chalk.bold.yellow(`\n[${paperDef.tag}] ${paperDef.label}`));
    console.log(chalk.grey(`       Subject: ${paperDef.subject}  |  ${paperDef.defaultOptions.duration}  |  ${paperDef.defaultOptions.totalMarks} marks`));

    let totalPassed = 0, totalFailed = 0;

    for (const group of paperDef.groups) {
        const { passed, failed } = await renderGroup(subjectKey, group, paperDef);
        totalPassed += passed;
        totalFailed += failed;
    }

    const status = totalFailed === 0
        ? chalk.green(`✓ ${totalPassed} passed`)
        : chalk.red(`✗ ${totalFailed} failed`) + chalk.green(` / ${totalPassed} passed`);

    console.log(`\n  Summary: ${status}`);
    return { totalPassed, totalFailed };
}


// ─────────────────────────────────────────────────────────────────────────────
// INTERACTIVE MENU  (mirrors biochemicalTests-usage.js interactiveMenu)
// ─────────────────────────────────────────────────────────────────────────────

async function interactiveMenu() {
    console.log(chalk.bold.blue('\n════════════════════════════════════════════════════'));
    console.log(chalk.bold.blue('  Examination Paper Generator — Test Suite'));
    console.log(chalk.bold.blue('════════════════════════════════════════════════════\n'));

    ExaminationPaperRegistry.printSummary();
    console.log('');

    const choices = [
        { name: 'Run ALL tests (all 4 subjects)', value: '__all__' },
        new inquirer.Separator('── Individual Subjects ───────────────────────────────'),
        ...Object.entries(PAPERS).map(([key, def]) => ({
            name:  `[${def.tag}] ${def.label}`,
            value: key
        })),
        new inquirer.Separator('── Step-by-Step Builders ─────────────────────────────'),
        { name: '🏗  Build a chemistry paper step-by-step',   value: '__build_chemistry__'   },
        { name: '🏗  Build a biology paper step-by-step',     value: '__build_biology__'     },
        { name: '🏗  Build a physics paper step-by-step',     value: '__build_physics__'     },
        { name: '🏗  Build a mathematics paper step-by-step', value: '__build_mathematics__' },
        new inquirer.Separator(),
        { name: 'Exit', value: '__exit__' }
    ];

    const { selected } = await inquirer.prompt([{
        type:    'list',
        name:    'selected',
        message: 'Select an option:',
        choices,
        pageSize: 20
    }]);

    if (selected === '__exit__') {
        console.log(chalk.grey('\nGoodbye.\n'));
        process.exit(0);
    }

    if (selected === '__all__') {
        await runAllPapers();
    } else if (selected.startsWith('__build_')) {
        // Extract subject: '__build_chemistry__' → 'chemistry'
        const subject = selected.replace(/^__build_/, '').replace(/__$/, '');
        if (!ExaminationPaperRegistry.supportedSubjects.includes(subject)) {
            console.error(chalk.red(`\nCould not resolve subject from selection: "${selected}" → "${subject}"\n`));
        } else {
            await interactiveStepBuilder(subject);
        }
    } else if (PAPERS[selected]) {
        await renderPaperSuite(selected, PAPERS[selected]);
        console.log(chalk.grey(`\n  DOCX files saved to ./output/${selected}/\n`));
    } else {
        console.error(chalk.red(`\nUnknown selection: "${selected}"\n`));
    }

    const { again } = await inquirer.prompt([{
        type:    'confirm',
        name:    'again',
        message: 'Return to menu?',
        default: true
    }]);

    if (again) await interactiveMenu();
}


// ─────────────────────────────────────────────────────────────────────────────
// INTERACTIVE STEP BUILDER
// Mirrors the step-by-step construction described in the product goal:
//   ① Cover page — add components one by one or all at once
//   ② Section pages — add questions + components one by one or all
//   ③ Closing page — add components
//   ④ Optional formatting config
//   ⑤ Generate docx
// ─────────────────────────────────────────────────────────────────────────────

async function interactiveStepBuilder(subject) {
    console.log(chalk.bold.green(`\n🏗  Step-by-Step Builder — ${subject.toUpperCase()}\n`));

    const resolvedCover = ExaminationPaperRegistry.getPage(subject, 'coverPage');
    const paperPages    = [];   // accumulates { pageKey, options, drawingStep }

    // ── ① Cover page ──────────────────────────────────────────────────────
    console.log(chalk.cyan('\n── Cover Page ─────────────────────────────────────────\n'));
    const coverOpts = await promptCoverOptions(subject);
    const { coverStep } = await inquirer.prompt([{
        type:    'list',
        name:    'coverStep',
        message: 'How far to build the cover page?',
        choices: [
            { name: 'All at once (full cover)',                   value: 7 },
            ...resolvedCover.drawingSteps.map(s => ({
                name:  `${s.label}`,
                value: s.step
            }))
        ]
    }]);
    paperPages.push({ pageKey: 'coverPage', options: coverOpts, drawingStep: coverStep });

    // ── ② Section A ───────────────────────────────────────────────────────
    console.log(chalk.cyan('\n── Section A ──────────────────────────────────────────\n'));
    const sectionAConfig = await promptSectionOptions(subject, 'questionSectionAPage');
    paperPages.push({ pageKey: 'questionSectionAPage', ...sectionAConfig });

    // ── ③ Section B ───────────────────────────────────────────────────────
    console.log(chalk.cyan('\n── Section B ──────────────────────────────────────────\n'));
    const sectionBConfig = await promptSectionOptions(subject, 'questionSectionBPage');
    paperPages.push({ pageKey: 'questionSectionBPage', ...sectionBConfig });

    // ── ④ Section C (optional) ────────────────────────────────────────────
    const sectionCProblems = ExaminationPaperRegistry.getProblemTypesBySection(subject, 'questionSectionCPage');
    const { includeC } = await inquirer.prompt([{
        type:    'confirm',
        name:    'includeC',
        message: `Include Section C? (${sectionCProblems.length} problem type(s) registered)`,
        default: sectionCProblems.length > 0
    }]);

    if (includeC) {
        console.log(chalk.cyan('\n── Section C ──────────────────────────────────────────\n'));
        const sectionCConfig = await promptSectionOptions(subject, 'questionSectionCPage');
        paperPages.push({ pageKey: 'questionSectionCPage', ...sectionCConfig });
    }

    // ── ⑤ Closing page ────────────────────────────────────────────────────
    console.log(chalk.cyan('\n── Closing Page ───────────────────────────────────────\n'));
    const closingStep = await promptClosingStep();
    paperPages.push({
        pageKey:     'closingPage',
        drawingStep: closingStep,
        options:     { schoolName: coverOpts.schoolName, totalMarks: coverOpts.totalMarks }
    });

    // ── ⑥ Optional formatting config ─────────────────────────────────────
    const { includeFormatting } = await inquirer.prompt([{
        type:    'confirm',
        name:    'includeFormatting',
        message: 'Include a formatting configuration page?',
        default: false
    }]);

    if (includeFormatting) {
        paperPages.push({
            pageKey:     'formattingConfig',
            drawingStep: 8,
            options:     {}
        });
    }

    // ── ⑦ Generate ────────────────────────────────────────────────────────
    const defaultFilename = `${subject}_exam_${Date.now()}.docx`;
    const { outputFile } = await inquirer.prompt([{
        type:    'input',
        name:    'outputFile',
        message: 'Output filename (inside ./output/):',
        default: defaultFilename
    }]);

    const outputPath = path.join(__dirname, 'output', subject, outputFile);
    ensureDir(path.dirname(outputPath));

    try {
        await renderAndSave({ subject, pages: paperPages }, outputPath);
        console.log(chalk.bold.green(`\n✓ Examination paper generated: ${outputPath}\n`));
    } catch (err) {
        console.error(chalk.red(`\n✗ Generation failed: ${err.message}\n`));
        if (process.env.DEBUG) console.error(err.stack);
    }
}

// ── Cover options prompt ──────────────────────────────────────────────────────
async function promptCoverOptions(subject) {
    const subjectDefaults = PAPERS[subject]?.defaultOptions || {};

    const answers = await inquirer.prompt([
        { type: 'input', name: 'schoolName',    message: 'School name:',       default: subjectDefaults.schoolName    || '' },
        { type: 'input', name: 'examTitle',     message: 'Exam title:',        default: subjectDefaults.examTitle     || '' },
        { type: 'input', name: 'subjectTitle',  message: 'Subject title:',     default: subjectDefaults.subjectTitle  || subject },
        { type: 'input', name: 'examBoard',     message: 'Exam board:',        default: subjectDefaults.examBoard     || '' },
        { type: 'input', name: 'candidateLevel',message: 'Candidate level:',   default: subjectDefaults.candidateLevel || '' },
        { type: 'input', name: 'examType',      message: 'Exam type:',         default: subjectDefaults.examType      || 'Theory Paper' },
        { type: 'input', name: 'termAndYear',   message: 'Term and year:',     default: subjectDefaults.termAndYear   || '' },
        { type: 'input', name: 'duration',      message: 'Duration:',          default: subjectDefaults.duration      || '1 hour 30 minutes' },
        { type: 'input', name: 'totalMarks',    message: 'Total marks:',       default: String(subjectDefaults.totalMarks || 80),
          filter: v => parseInt(v, 10) },
        { type: 'confirm', name: 'showCandidateBoxes', message: 'Show candidate fields (name/number)?', default: true },
        { type: 'confirm', name: 'showInstructions',   message: 'Show candidate instructions?',        default: true }
    ]);

    return answers;
}

// ── Section options prompt ────────────────────────────────────────────────────
async function promptSectionOptions(subject, pageKey) {
    const sectionLabel = { questionSectionAPage: 'A', questionSectionBPage: 'B', questionSectionCPage: 'C' }[pageKey];
    const pts          = ExaminationPaperRegistry.getProblemTypesBySection(subject, pageKey);

    const subjectSuffix = {
        chemistry:   'chem',
        biology:     'bio',
        physics:     'phy',
        mathematics: 'mat'
    }[subject] ?? subject.slice(0, 4);

    console.log(chalk.grey(`  Problem types available for Section ${sectionLabel}: ${pts.map(p => p.label).join(', ') || 'none'}`));

    const { addMode } = await inquirer.prompt([{
        type:    'list',
        name:    'addMode',
        message: `How would you like to add Section ${sectionLabel} questions?`,
        choices: [
            { name: 'Add all available problem types at once (default)',    value: 'all'    },
            { name: 'Choose specific problem types to include',             value: 'choose' },
            { name: 'Blank section (no generated questions)',               value: 'blank'  }
        ]
    }]);

    let questions = [];

    if (addMode === 'all') {
        questions = pts.map(pt => {
            const methodName = `generate${_toPascalCase(pt.id)}${subjectSuffix}101`;
            if (typeof ExaminationGenerator[methodName] === 'function') {
                return ExaminationGenerator[methodName].call(ExaminationGenerator, null, null, {});
            }
            console.warn(chalk.yellow(`  ⚠ No generator found: ${methodName} — using synthetic fallback`));
            return {
                stem:            pt.description,
                marks:           6,
                workingSpace:    pt.workingSpace,
                diagramRequired: pt.diagramRequired
            };
        });

    } else if (addMode === 'choose' && pts.length) {
        const { chosen } = await inquirer.prompt([{
            type:     'checkbox',
            name:     'chosen',
            message:  `Select problem types for Section ${sectionLabel}:`,
            choices:  pts.map(pt => ({ name: pt.label, value: pt.id })),
            validate: v => v.length > 0 || 'Select at least one'
        }]);

        questions = chosen.map(id => {
            const pt         = pts.find(p => p.id === id);
            const methodName = `generate${_toPascalCase(id)}${subjectSuffix}101`;
            if (typeof ExaminationGenerator[methodName] === 'function') {
                return ExaminationGenerator[methodName].call(ExaminationGenerator, null, null, {});
            }
            console.warn(chalk.yellow(`  ⚠ No generator found: ${methodName} — using synthetic fallback`));
            return {
                stem:            pt.description,
                marks:           6,
                workingSpace:    pt.workingSpace,
                diagramRequired: pt.diagramRequired
            };
        });
    }

    const { sectionMarks } = await inquirer.prompt([{
        type:    'input',
        name:    'sectionMarks',
        message: `Total marks for Section ${sectionLabel}:`,
        default: String(questions.reduce((s, q) => s + (q.marks || q.totalMarks || 0), 0) || 30),
        filter:  v => parseInt(v, 10)
    }]);

    const { buildStep } = await inquirer.prompt([{
        type:    'list',
        name:    'buildStep',
        message: `Build step for Section ${sectionLabel}:`,
        choices: [
            { name: 'Full section (all steps)',                           value: 9999 },
            { name: 'Step 1 — Header + instructions only',                value: 1    },
            { name: 'Step 4 — Header + questions (no marks/diagrams)',    value: 4    },
            { name: 'Step 7 — Questions + diagrams + answer lines',       value: 7    },
            { name: 'Step 9 — Complete with section total + page break',  value: 9    }
        ]
    }]);

    return {
        options:     { questions: questions.length ? questions : undefined, sectionMarks },
        drawingStep: buildStep
    };
}

// ── Closing step prompt ───────────────────────────────────────────────────────
async function promptClosingStep() {
    const { step } = await inquirer.prompt([{
        type:    'list',
        name:    'step',
        message: 'How far to build the closing page?',
        choices: [
            { name: 'Full closing page (all steps)', value: 7 },
            { name: 'Step 1 — End of Paper statement only',    value: 1 },
            { name: 'Step 2 — + Total marks box',              value: 2 },
            { name: 'Step 3 — + Examiner-use grid',            value: 3 },
            { name: 'Step 6 — + Copyright footer',             value: 6 }
        ]
    }]);
    return step;
}

// ── Pascal-case helper (module-level, used in promptSectionOptions) ───────────
function _toPascalCase(snakeId) {
    return snakeId.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
}


// ─────────────────────────────────────────────────────────────────────────────
// BATCH RUNNER
// ─────────────────────────────────────────────────────────────────────────────

async function runAllPapers() {
    console.log(chalk.bold('\n▶  Rendering all subject examination papers…\n'));
    let grandPassed = 0, grandFailed = 0;

    for (const [key, def] of Object.entries(PAPERS)) {
        const { totalPassed, totalFailed } = await renderPaperSuite(key, def);
        grandPassed += totalPassed;
        grandFailed += totalFailed;
    }

    console.log(chalk.bold('\n════════════════════════════════════════════════════'));
    console.log(chalk.bold('  FINAL RESULTS'));
    console.log(chalk.bold('════════════════════════════════════════════════════'));
    console.log(`  Total passed : ${chalk.green(grandPassed)}`);
    console.log(`  Total failed : ${grandFailed > 0 ? chalk.red(grandFailed) : chalk.green(grandFailed)}`);
    console.log(`  Output dir   : ${chalk.cyan(path.join(__dirname, 'output'))}`);
    console.log('');
}


// ─────────────────────────────────────────────────────────────────────────────
// CLI ENTRY POINT
// ─────────────────────────────────────────────────────────────────────────────

const args       = process.argv.slice(2);
const runAll     = args.includes('--all');
const subjectIdx = args.indexOf('--subject');
const subjectKey = subjectIdx !== -1 ? args[subjectIdx + 1] : null;
const fullFlag   = args.includes('--full');

(async () => {
    if (runAll) {
        await runAllPapers();
    } else if (subjectKey) {
        if (!PAPERS[subjectKey]) {
            console.error(chalk.red(`\nUnknown subject: "${subjectKey}"`));
            console.log('Available subjects:', Object.keys(PAPERS).join(', '));
            process.exit(1);
        }
        if (fullFlag) {
            // Render just the full-paper case for that subject
            const def        = PAPERS[subjectKey];
            const fullCase   = def.groups.flatMap(g => g.cases).find(c => c.full);
            const outputPath = path.join(__dirname, 'output', subjectKey, fullCase.filename);
            ensureDir(path.dirname(outputPath));
            try {
                await renderFullPaperAndSave(subjectKey, def.defaultOptions, outputPath);
                console.log(chalk.green(`\n✓ ${outputPath}\n`));
            } catch (err) {
                console.error(chalk.red(`✗ ${err.message}`));
                process.exit(1);
            }
        } else {
            await renderPaperSuite(subjectKey, PAPERS[subjectKey]);
            console.log(chalk.grey(`\n  DOCX files saved to ./output/${subjectKey}/\n`));
        }
    } else {
        await interactiveMenu();
    }
})();
