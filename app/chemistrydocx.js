import { EnhancedOrganicChemistryMathematicalWorkbook } from './organicchemistryworkbook.js';
import * as docx from 'docx';
import fs from 'fs';
import path from 'path';

// ============== UTILITY FUNCTION ==============

// Generate all workbook sections for a problem
generateProblemSections(workbookInstance) {
    const workbook = workbookInstance.currentWorkbook;
    if (!workbook) {
        console.error('No workbook generated');
        return [];
    }

    const sections = [];

    // Process each section
    workbook.sections.forEach((section, sectionIndex) => {
        // Section title
        sections.push(
            new docx.Paragraph({
                text: section.title,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 200 }
            })
        );

        // Section content based on type
        if (section.type === 'problem') {
            sections.push(
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            text: 'Problem Type: ',
                            bold: true
                        }),
                        new docx.TextRun({
                            text: String(section.content.problemType || '')
                        })
                    ],
                    spacing: { after: 100 }
                })
            );

            if (section.content.description) {
                sections.push(
                    new docx.Paragraph({
                        text: section.content.description,
                        spacing: { after: 100 }
                    })
                );
            }

            if (section.content.structure) {
                sections.push(
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun({
                                text: 'Structure: ',
                                bold: true
                            }),
                            new docx.TextRun({
                                text: String(section.content.structure)
                            })
                        ],
                        spacing: { after: 100 }
                    })
                );
            }
        } else if (section.type === 'steps') {
            if (section.content.steps && Array.isArray(section.content.steps)) {
                section.content.steps.forEach(step => {
                    if (step.stepType === 'bridge') {
                        sections.push(
                            new docx.Paragraph({
                                text: step.explanation || '',
                                spacing: { after: 100 },
                                italics: true
                            })
                        );
                    } else {
                        sections.push(
                            new docx.Paragraph({
                                children: [
                                    new docx.TextRun({
                                        text: `Step ${step.stepNumber}: `,
                                        bold: true
                                    }),
                                    new docx.TextRun({
                                        text: step.step || ''
                                    })
                                ],
                                spacing: { after: 50 }
                            })
                        );

                        if (step.description) {
                            sections.push(
                                new docx.Paragraph({
                                    text: `  ${step.description}`,
                                    spacing: { after: 50 }
                                })
                            );
                        }

                        if (step.reasoning) {
                            sections.push(
                                new docx.Paragraph({
                                    text: `  Reasoning: ${step.reasoning}`,
                                    spacing: { after: 100 },
                                    italics: true
                                })
                            );
                        }
                    }
                });
            }
        } else if (section.type === 'solution') {
            const content = section.content;
            Object.entries(content).forEach(([key, value]) => {
                if (typeof value === 'object' && value !== null) {
                    sections.push(
                        new docx.Paragraph({
                            children: [
                                new docx.TextRun({
                                    text: `${key}: `,
                                    bold: true
                                }),
                                new docx.TextRun({
                                    text: JSON.stringify(value, null, 2)
                                })
                            ],
                            spacing: { after: 100 }
                        })
                    );
                } else {
                    sections.push(
                        new docx.Paragraph({
                            children: [
                                new docx.TextRun({
                                    text: `${key}: `,
                                    bold: true
                                }),
                                new docx.TextRun({
                                    text: String(value)
                                })
                            ],
                            spacing: { after: 100 }
                        })
                    );
                }
            });
        } else if (section.type === 'mechanism') {
            sections.push(
                new docx.Paragraph({
                    text: 'Detailed mechanism steps with electron flow...',
                    spacing: { after: 100 }
                })
            );
        } else if (section.type === 'lesson' || section.type === 'theory') {
            const content = section.content;
            if (content.concepts && Array.isArray(content.concepts)) {
                sections.push(
                    new docx.Paragraph({
                        text: 'Key Concepts:',
                        bold: true,
                        spacing: { after: 50 }
                    })
                );
                content.concepts.forEach(concept => {
                    sections.push(
                        new docx.Paragraph({
                            text: `  • ${concept}`,
                            spacing: { after: 50 }
                        })
                    );
                });
            }
            if (content.theory) {
                sections.push(
                    new docx.Paragraph({
                        text: 'Theory:',
                        bold: true,
                        spacing: { before: 100, after: 50 }
                    })
                );
                sections.push(
                    new docx.Paragraph({
                        text: content.theory,
                        spacing: { after: 100 }
                    })
                );
            }
        }

        // Add extra spacing after section
        sections.push(
            new docx.Paragraph({
                text: '',
                spacing: { after: 300 }
            })
        );
    });

    return sections;
}



// ============== COMPREHENSIVE DOCUMENT GENERATION ==============

async  generateComprehensiveChemistryDocument() {
    console.log('Generating Comprehensive Organic Chemistry Workbook with Related Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Comprehensive Organic Chemistry Workbook',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { after: 200 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Complete Guide with Related Problems',
            spacing: { after: 150 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Alkanes, Alkenes, Alkynes, Aromatics, Functional Groups, Isomerism, Reactions, Nomenclature, Mechanisms, and Polymers',
            spacing: { after: 300 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: `Generated: ${new Date().toLocaleString()}`,
            spacing: { after: 600 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    // ============== TABLE OF CONTENTS ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Table of Contents',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { after: 200 }
        })
    );

    // Part I: Alkanes
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Alkanes (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const alkanesProblems = generateRelatedAlkanes();
    alkanesProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part II: Alkenes
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Alkenes (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const alkenesProblems = generateRelatedAlkenes();
    alkenesProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 8}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part III: Alkynes
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Alkynes (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const alkynesProblems = generateRelatedAlkynes();
    alkynesProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 15}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part IV: Aromatic Compounds
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Aromatic Compounds (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const aromaticProblems = generateRelatedAromatic();
    aromaticProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 22}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part V: Functional Groups
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Functional Groups (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const functionalGroupsProblems = generateRelatedFunctionalGroups();
    functionalGroupsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 29}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part VI: Isomerism
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VI: Isomerism (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const isomerismProblems = generateRelatedIsomerism();
    isomerismProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 36}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part VII: Organic Reactions
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VII: Organic Reactions (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const reactionsProblems = generateRelatedOrganicReactions();
    reactionsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 43}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part VIII: Nomenclature
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VIII: Nomenclature (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const nomenclatureProblems = generateRelatedNomenclature();
    nomenclatureProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 50}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part IX: Mechanisms
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IX: Reaction Mechanisms (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const mechanismsProblems = generateRelatedMechanisms();
    mechanismsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 57}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part X: Polymers
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part X: Polymers (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const polymersProblems = generateRelatedPolymers();
    polymersProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 64}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: '',
            spacing: { after: 400 }
        })
    );

    // ============== PART I: ALKANES ==============
    console.log('\nProcessing Part I: Alkanes...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Alkanes',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const alkanesSolved = solveAlkanesRelatedProblems();
    alkanesSolved.forEach((solved, index) => {
        console.log(`  Adding Alkanes Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 1}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART II: ALKENES ==============
    console.log('\nProcessing Part II: Alkenes...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Alkenes',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const alkenesSolved = solveAlkenesRelatedProblems();
    alkenesSolved.forEach((solved, index) => {
        console.log(`  Adding Alkenes Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 8}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART III: ALKYNES ==============
    console.log('\nProcessing Part III: Alkynes...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Alkynes',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const alkynesSolved = solveAlkynesRelatedProblems();
    alkynesSolved.forEach((solved, index) => {
        console.log(`  Adding Alkynes Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 15}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART IV: AROMATIC COMPOUNDS ==============
    console.log('\nProcessing Part IV: Aromatic Compounds...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Aromatic Compounds',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const aromaticSolved = solveAromaticRelatedProblems();
    aromaticSolved.forEach((solved, index) => {
        console.log(`  Adding Aromatic Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 22}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART V: FUNCTIONAL GROUPS ==============
    console.log('\nProcessing Part V: Functional Groups...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Functional Groups',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const functionalGroupsSolved = solveFunctionalGroupsRelatedProblems();
    functionalGroupsSolved.forEach((solved, index) => {
        console.log(`  Adding Functional Groups Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 29}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART VI: ISOMERISM ==============
    console.log('\nProcessing Part VI: Isomerism...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VI: Isomerism',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const isomerismSolved = solveIsomerismRelatedProblems();
    isomerismSolved.forEach((solved, index) => {
        console.log(`  Adding Isomerism Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 36}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART VII: ORGANIC REACTIONS ==============
    console.log('\nProcessing Part VII: Organic Reactions...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VII: Organic Reactions',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const reactionsSolved = solveOrganicReactionsRelatedProblems();
    reactionsSolved.forEach((solved, index) => {
        console.log(`  Adding Organic Reactions Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 43}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART VIII: NOMENCLATURE ==============
    console.log('\nProcessing Part VIII: Nomenclature...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VIII: Nomenclature',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const nomenclatureSolved = solveNomenclatureRelatedProblems();
    nomenclatureSolved.forEach((solved, index) => {
        console.log(`  Adding Nomenclature Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 50}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART IX: REACTION MECHANISMS ==============
    console.log('\nProcessing Part IX: Reaction Mechanisms...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IX: Reaction Mechanisms',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const mechanismsSolved = solveMechanismsRelatedProblems();
    mechanismsSolved.forEach((solved, index) => {
        console.log(`  Adding Mechanisms Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 57}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART X: POLYMERS ==============
    console.log('\nProcessing Part X: Polymers...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part X: Polymers',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const polymersSolved = solvePolymersRelatedProblems();
    polymersSolved.forEach((solved, index) => {
        console.log(`  Adding Polymers Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 64}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });




    // Part I: Mole Calculations
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Mole Calculations (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const moleProblems = generateRelatedMoleCalculations();
    moleProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part II: Equation Balancing
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Equation Balancing (3 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const balancingProblems = generateRelatedEquationBalancing();
    balancingProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 6}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part III: Mass-Mass Stoichiometry
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Mass-Mass Stoichiometry (3 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const massMassProblems = generateRelatedMassMassStoichiometry();
    massMassProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 9}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part IV: Limiting Reagent
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Limiting Reagent (2 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const limitingProblems = generateRelatedLimitingReagent();
    limitingProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 12}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part V: Percent Yield
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Percent Yield (3 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const yieldProblems = generateRelatedPercentYield();
    yieldProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 14}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part VI: Gas Stoichiometry
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VI: Gas Stoichiometry (3 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const gasProblems = generateRelatedGasStoichiometry();
    gasProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 17}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part VII: Solution Stoichiometry
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VII: Solution Stoichiometry (4 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const solutionProblems = generateRelatedSolutionStoichiometry();
    solutionProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 20}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part VIII: Thermochemical
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VIII: Thermochemistry (3 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const thermoProblems = generateRelatedThermochemical();
    thermoProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 24}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part IX: Empirical Formula
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IX: Empirical and Molecular Formulas (4 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const empiricalProblems = generateRelatedEmpiricalFormula();
    empiricalProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 27}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: '',
            spacing: { after: 400 }
        })
    );

    // ============== PART I: MOLE CALCULATIONS ==============
    console.log('\nProcessing Part I: Mole Calculations...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Mole Calculations',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const moleSolved = solveMoleCalculationProblems();
    moleSolved.forEach((solved, index) => {
        console.log(`  Adding Mole Calculation Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 1}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Real-World Context: ${solved.problem.realWorldContext}`,
                spacing: { after: 300 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART II: EQUATION BALANCING ==============
    console.log('\nProcessing Part II: Equation Balancing...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Equation Balancing',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const balancingSolved = solveEquationBalancingProblems();
    balancingSolved.forEach((solved, index) => {
        console.log(`  Adding Equation Balancing Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 6}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Real-World Context: ${solved.problem.realWorldContext}`,
                spacing: { after: 300 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART III: MASS-MASS STOICHIOMETRY ==============
    console.log('\nProcessing Part III: Mass-Mass Stoichiometry...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Mass-Mass Stoichiometry',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const massMassSolved = solveMassMassProblems();
    massMassSolved.forEach((solved, index) => {
        console.log(`  Adding Mass-Mass Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 9}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Real-World Context: ${solved.problem.realWorldContext}`,
                spacing: { after: 300 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART IV: LIMITING REAGENT ==============
    console.log('\nProcessing Part IV: Limiting Reagent...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Limiting Reagent',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const limitingSolved = solveLimitingReagentProblems();
    limitingSolved.forEach((solved, index) => {
        console.log(`  Adding Limiting Reagent Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 12}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Real-World Context: ${solved.problem.realWorldContext}`,
                spacing: { after: 300 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART V: PERCENT YIELD ==============
    console.log('\nProcessing Part V: Percent Yield...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Percent Yield',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const yieldSolved = solvePercentYieldProblems();
    yieldSolved.forEach((solved, index) => {
        console.log(`  Adding Percent Yield Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 14}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Real-World Context: ${solved.problem.realWorldContext}`,
                spacing: { after: 300 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART VI: GAS STOICHIOMETRY ==============
    console.log('\nProcessing Part VI: Gas Stoichiometry...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VI: Gas Stoichiometry',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const gasSolved = solveGasStoichiometryProblems();
    gasSolved.forEach((solved, index) => {
        console.log(`  Adding Gas Stoichiometry Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 17}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Real-World Context: ${solved.problem.realWorldContext}`,
                spacing: { after: 300 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART VII: SOLUTION STOICHIOMETRY ==============
    console.log('\nProcessing Part VII: Solution Stoichiometry...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VII: Solution Stoichiometry',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const solutionSolved = solveSolutionStoichiometryProblems();
    solutionSolved.forEach((solved, index) => {
        console.log(`  Adding Solution Stoichiometry Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 20}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Real-World Context: ${solved.problem.realWorldContext}`,
                spacing: { after: 300 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART VIII: THERMOCHEMISTRY ==============
    /**console.log('\nProcessing Part VIII: Thermochemistry...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VIII: Thermochemistry',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const thermoSolved = solveThermochemicalProblems();
    thermoSolved.forEach((solved, index) => {
        console.log(`  Adding Thermochemical Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 24}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Real-World Context: ${solved.problem.realWorldContext}`,
                spacing: { after: 300 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });
    */


    // ============== PART IX: EMPIRICAL AND MOLECULAR FORMULAS ==============
    console.log('\nProcessing Part IX: Empirical and Molecular Formulas...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IX: Empirical and Molecular Formulas',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const empiricalSolved = solveEmpiricalFormulaProblems();
    empiricalSolved.forEach((solved, index) => {
        console.log(`  Adding Empirical Formula Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 27}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Real-World Context: ${solved.problem.realWorldContext}`,
                spacing: { after: 300 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });




    // Part I: Reaction Kinetics
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Reaction Kinetics (6 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const kineticsProblems = generateRelatedReactionKinetics();
    kineticsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part II: Rate Laws
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Rate Laws and Mechanisms (6 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const rateLawsProblems = generateRelatedRateLaws();
    rateLawsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 7}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part III: Activation Energy
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Activation Energy and Arrhenius Equation (6 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const activationProblems = generateRelatedActivationEnergy();
    activationProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 13}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part IV: Entropy
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Entropy and Second Law (6 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const entropyProblems = generateRelatedEntropy();
    entropyProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 19}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part V: Gibbs Free Energy
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Gibbs Free Energy (6 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const gibbsProblems = generateRelatedGibbsEnergy();
    gibbsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 25}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part VI: Spontaneity and Equilibrium
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VI: Spontaneity and Equilibrium (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const spontaneityProblems = generateRelatedSpontaneity();
    spontaneityProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 31}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: '',
            spacing: { after: 400 }
        })
    );

    // ============== PART I: REACTION KINETICS ==============
    console.log('\nProcessing Part I: Reaction Kinetics...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Reaction Kinetics',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const kineticsSolved = solveReactionKineticsProblems();
    kineticsSolved.forEach((solved, index) => {
        console.log(`  Adding Reaction Kinetics Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 1}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART II: RATE LAWS ==============
    console.log('\nProcessing Part II: Rate Laws...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Rate Laws and Mechanisms',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const rateLawsSolved = solveRateLawsProblems();
    rateLawsSolved.forEach((solved, index) => {
        console.log(`  Adding Rate Laws Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 7}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART III: ACTIVATION ENERGY ==============
    console.log('\nProcessing Part III: Activation Energy...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Activation Energy and Arrhenius Equation',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const activationSolved = solveActivationEnergyProblems();
    activationSolved.forEach((solved, index) => {
        console.log(`  Adding Activation Energy Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 13}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART IV: ENTROPY ==============
    console.log('\nProcessing Part IV: Entropy...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Entropy and Second Law',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const entropySolved = solveEntropyProblems();
    entropySolved.forEach((solved, index) => {
        console.log(`  Adding Entropy Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 19}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART V: GIBBS FREE ENERGY ==============
    console.log('\nProcessing Part V: Gibbs Free Energy...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Gibbs Free Energy',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const gibbsSolved = solveGibbsEnergyProblems();
    gibbsSolved.forEach((solved, index) => {
        console.log(`  Adding Gibbs Energy Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 25}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART VI: SPONTANEITY AND EQUILIBRIUM ==============
    console.log('\nProcessing Part VI: Spontaneity and Equilibrium...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VI: Spontaneity and Equilibrium',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const spontaneitySolved = solveSpontaneityProblems();
    spontaneitySolved.forEach((solved, index) => {
        console.log(`  Adding Spontaneity Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 31}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });




        // Part I: Equilibrium Constants
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Equilibrium Constants (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const equilibriumConstantsProblems = generateRelatedEquilibriumConstants();
    equilibriumConstantsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part II: Le Chatelier's Principle
    documentChildren.push(
        new docx.Paragraph({
            text: "Part II: Le Chatelier's Principle (7 Problems)",
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const leChatelierProblems = generateRelatedLeChatelier();
    leChatelierProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 8}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part III: Solubility Equilibria
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Solubility Equilibria (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const solubilityProblems = generateRelatedSolubilityEquilibria();
    solubilityProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 15}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part IV: Complex Ion Equilibria
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Complex Ion Equilibria (6 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const complexIonProblems = generateRelatedComplexIons();
    complexIonProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 22}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part V: Gas Phase Equilibria
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Gas Phase Equilibria (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const gasEquilibriumProblems = generateRelatedGasEquilibrium();
    gasEquilibriumProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 28}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: '',
            spacing: { after: 400 }
        })
    );

    // ============== PART I: EQUILIBRIUM CONSTANTS ==============
    console.log('\nProcessing Part I: Equilibrium Constants...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Equilibrium Constants',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const equilibriumConstantsSolved = solveEquilibriumConstantsProblems();
    equilibriumConstantsSolved.forEach((solved, index) => {
        console.log(`  Adding Equilibrium Constant Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 1}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Real-World Context: ${solved.problem.realWorldContext}`,
                spacing: { after: 300 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART II: LE CHATELIER'S PRINCIPLE ==============
    console.log('\nProcessing Part II: Le Chatelier\'s Principle...');
    documentChildren.push(
        new docx.Paragraph({
            text: "Part II: Le Chatelier's Principle",
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const leChatelierSolved = solveLeChatelierProblems();
    leChatelierSolved.forEach((solved, index) => {
        console.log(`  Adding Le Chatelier Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 8}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Real-World Context: ${solved.problem.realWorldContext}`,
                spacing: { after: 300 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART III: SOLUBILITY EQUILIBRIA ==============
    console.log('\nProcessing Part III: Solubility Equilibria...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Solubility Equilibria',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const solubilitySolved = solveSolubilityProblems();
    solubilitySolved.forEach((solved, index) => {
        console.log(`  Adding Solubility Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 15}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Real-World Context: ${solved.problem.realWorldContext}`,
                spacing: { after: 300 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART IV: COMPLEX ION EQUILIBRIA ==============
    console.log('\nProcessing Part IV: Complex Ion Equilibria...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Complex Ion Equilibria',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const complexIonSolved = solveComplexIonProblems();
    complexIonSolved.forEach((solved, index) => {
        console.log(`  Adding Complex Ion Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 22}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Real-World Context: ${solved.problem.realWorldContext}`,
                spacing: { after: 300 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART V: GAS PHASE EQUILIBRIA ==============
    console.log('\nProcessing Part V: Gas Phase Equilibria...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Gas Phase Equilibria',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const gasEquilibriumSolved = solveGasEquilibriumProblems();
    gasEquilibriumSolved.forEach((solved, index) => {
        console.log(`  Adding Gas Equilibrium Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 28}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Real-World Context: ${solved.problem.realWorldContext}`,
                spacing: { after: 300 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });         


    
    // Part I: Atomic Structure
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Atomic Structure (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const atomicProblems = generateRelatedAtomicStructure();
    atomicProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part II: Quantum Numbers
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Quantum Numbers & Shell Structure (3 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const quantumProblems = generateRelatedQuantumNumbers();
    quantumProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 8}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part III: Electron Configuration
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Electron Configuration (3 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const configProblems = generateRelatedElectronConfiguration();
    configProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 11}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part IV: Periodic Trends
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Periodic Trends (2 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const trendsProblems = generateRelatedPeriodicTrends();
    trendsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 14}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part V: Chemical Bonding
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Chemical Bonding & Valency (4 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const bondingProblems = generateRelatedBonding();
    bondingProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 16}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part VI: Molecular Geometry
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VI: Molecular Geometry (4 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const geometryProblems = generateRelatedMolecularGeometry();
    geometryProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 20}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part VII: Hybridization
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VII: Hybridization Theory (3 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const hybridProblems = generateRelatedHybridization();
    hybridProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 24}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part VIII: Lewis Structures
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VIII: Lewis Structures (4 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const lewisProblems = generateRelatedLewisStructures();
    lewisProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 27}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part IX: VSEPR Theory
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IX: VSEPR Theory (3 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const vseprProblems = generateRelatedVSEPR();
    vseprProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 31}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part X: Bond Polarity
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part X: Bond Polarity & Electronegativity (4 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const polarityProblems = generateRelatedBondPolarity();
    polarityProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 34}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part XI: Intermolecular Forces
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XI: Intermolecular Forces (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const imfProblems = generateRelatedIntermolecularForces();
    imfProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 38}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: '',
            spacing: { after: 400 }
        })
    );

    // ============== PART I: ATOMIC STRUCTURE ==============
    console.log('\nProcessing Part I: Atomic Structure...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Atomic Structure',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const atomicSolved = solveAtomicStructureProblems();
    atomicSolved.forEach((solved, index) => {
        console.log(`  Adding Atomic Structure Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 1}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART II: QUANTUM NUMBERS ==============
    console.log('\nProcessing Part II: Quantum Numbers...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Quantum Numbers & Shell Structure',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const quantumSolved = solveQuantumNumbersProblems();
    quantumSolved.forEach((solved, index) => {
        console.log(`  Adding Quantum Numbers Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 8}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART III: ELECTRON CONFIGURATION ==============
    console.log('\nProcessing Part III: Electron Configuration...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Electron Configuration',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const configSolved = solveElectronConfigurationProblems();
    configSolved.forEach((solved, index) => {
        console.log(`  Adding Electron Configuration Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 11}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART IV: PERIODIC TRENDS ==============
    console.log('\nProcessing Part IV: Periodic Trends...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Periodic Trends',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const trendsSolved = solvePeriodicTrendsProblems();
    trendsSolved.forEach((solved, index) => {
        console.log(`  Adding Periodic Trends Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 14}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART V: CHEMICAL BONDING ==============
    console.log('\nProcessing Part V: Chemical Bonding...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Chemical Bonding & Valency',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const bondingSolved = solveBondingProblems();
    bondingSolved.forEach((solved, index) => {
        console.log(`  Adding Bonding Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 16}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART VI: MOLECULAR GEOMETRY ==============
    console.log('\nProcessing Part VI: Molecular Geometry...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VI: Molecular Geometry',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const geometrySolved = solveMolecularGeometryProblems();
    geometrySolved.forEach((solved, index) => {
        console.log(`  Adding Molecular Geometry Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 20}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART VII: HYBRIDIZATION ==============
    console.log('\nProcessing Part VII: Hybridization...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VII: Hybridization Theory',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const hybridSolved = solveHybridizationProblems();
    hybridSolved.forEach((solved, index) => {
        console.log(`  Adding Hybridization Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 24}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART VIII: LEWIS STRUCTURES ==============
    console.log('\nProcessing Part VIII: Lewis Structures...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VIII: Lewis Structures',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const lewisSolved = solveLewisStructuresProblems();
    lewisSolved.forEach((solved, index) => {
        console.log(`  Adding Lewis Structures Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 27}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART IX: VSEPR THEORY ==============
    console.log('\nProcessing Part IX: VSEPR Theory...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IX: VSEPR Theory',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const vseprSolved = solveVSEPRProblems();
    vseprSolved.forEach((solved, index) => {
        console.log(`  Adding VSEPR Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 31}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART X: BOND POLARITY ==============
    console.log('\nProcessing Part X: Bond Polarity...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part X: Bond Polarity & Electronegativity',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const polaritySolved = solveBondPolarityProblems();
    polaritySolved.forEach((solved, index) => {
        console.log(`  Adding Bond Polarity Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 34}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART XI: INTERMOLECULAR FORCES ==============
    console.log('\nProcessing Part XI: Intermolecular Forces...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XI: Intermolecular Forces',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const imfSolved = solveIntermolecularForcesProblems();
    imfSolved.forEach((solved, index) => {
        console.log(`  Adding Intermolecular Forces Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 38}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });


    
    // Part I: General Acid-Base
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: General Acid-Base Chemistry (6 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const acidBaseProblems = generateRelatedAcidBase();
    acidBaseProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part II: pH Calculations
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: pH Calculations (6 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const pHProblems = generateRelatedpHCalculations();
    pHProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 7}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part III: Buffer Solutions
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Buffer Solutions (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const bufferProblems = generateRelatedBuffers();
    bufferProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 13}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part IV: Titrations
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Acid-Base Titrations (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const titrationProblems = generateRelatedTitrations();
    titrationProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 20}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part V: Polyprotic Acids
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Polyprotic Acids (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const polyproticProblems = generateRelatedPolyproticAcids();
    polyproticProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 27}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: '',
            spacing: { after: 400 }
        })
    );

    // ============== PART I: GENERAL ACID-BASE ==============
    console.log('\nProcessing Part I: General Acid-Base Chemistry...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: General Acid-Base Chemistry',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const acidBaseSolved = solveAcidBaseRelatedProblems();
    acidBaseSolved.forEach((solved, index) => {
        console.log(`  Adding General Acid-Base Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 1}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART II: pH CALCULATIONS ==============
    console.log('\nProcessing Part II: pH Calculations...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: pH Calculations',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const pHSolved = solvepHCalculationsRelatedProblems();
    pHSolved.forEach((solved, index) => {
        console.log(`  Adding pH Calculation Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 7}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART III: BUFFER SOLUTIONS ==============
    console.log('\nProcessing Part III: Buffer Solutions...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Buffer Solutions',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const bufferSolved = solveBuffersRelatedProblems();
    bufferSolved.forEach((solved, index) => {
        console.log(`  Adding Buffer Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 13}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART IV: TITRATIONS ==============
    console.log('\nProcessing Part IV: Acid-Base Titrations...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Acid-Base Titrations',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const titrationSolved = solveTitrationsRelatedProblems();
    titrationSolved.forEach((solved, index) => {
        console.log(`  Adding Titration Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 20}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART V: POLYPROTIC ACIDS ==============
    console.log('\nProcessing Part V: Polyprotic Acids...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Polyprotic Acids',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const polyproticSolved = solvePolyproticAcidsRelatedProblems();
    polyproticSolved.forEach((solved, index) => {
        console.log(`  Adding Polyprotic Acid Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 27}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });



// Part I: States of Matter
documentChildren.push(
    new docx.Paragraph({
        text: 'Part I: States of Matter (8 Problems)',
        heading: docx.HeadingLevel.HEADING_3,
        spacing: { before: 200, after: 100 }
    })
);

const statesProblems = generateRelatedStatesOfMatter();
statesProblems.forEach((problem, index) => {
    documentChildren.push(
        new docx.Paragraph({
            text: `${index + 1}. ${problem.scenario}: ${problem.problem}`,
            spacing: { after: 100 }
        })
    );
});

// Part II: Phase Changes
documentChildren.push(
    new docx.Paragraph({
        text: 'Part II: Phase Changes and Energy (8 Problems)',
        heading: docx.HeadingLevel.HEADING_3,
        spacing: { before: 200, after: 100 }
    })
);

const phaseProblems = generateRelatedPhaseChanges();
phaseProblems.forEach((problem, index) => {
    documentChildren.push(
        new docx.Paragraph({
            text: `${index + 9}. ${problem.scenario}: ${problem.problem}`,
            spacing: { after: 100 }
        })
    );
});

// Part III: Gas Laws
documentChildren.push(
    new docx.Paragraph({
        text: 'Part III: Gas Laws (9 Problems)',
        heading: docx.HeadingLevel.HEADING_3,
        spacing: { before: 200, after: 100 }
    })
);

const gasProblems = generateRelatedGasLaws();
gasProblems.forEach((problem, index) => {
    documentChildren.push(
        new docx.Paragraph({
            text: `${index + 17}. ${problem.scenario}: ${problem.problem}`,
            spacing: { after: 100 }
        })
    );
});

// Part IV: Kinetic Molecular Theory
documentChildren.push(
    new docx.Paragraph({
        text: 'Part IV: Kinetic Molecular Theory (8 Problems)',
        heading: docx.HeadingLevel.HEADING_3,
        spacing: { before: 200, after: 100 }
    })
);

const kineticProblems = generateRelatedKineticMolecularTheory();
kineticProblems.forEach((problem, index) => {
    documentChildren.push(
        new docx.Paragraph({
            text: `${index + 26}. ${problem.scenario}: ${problem.problem}`,
            spacing: { after: 100 }
        })
    );
});

documentChildren.push(
    new docx.Paragraph({
        text: '',
        spacing: { after: 400 }
    })
);

// ============== PART I: STATES OF MATTER ==============
console.log('\nProcessing Part I: States of Matter...');
documentChildren.push(
    new docx.Paragraph({
        text: 'Part I: States of Matter',
        heading: docx.HeadingLevel.HEADING_1,
        spacing: { before: 400, after: 300 },
        pageBreakBefore: true
    })
);

const statesSolved = solveStatesOfMatterRelatedProblems();
statesSolved.forEach((solved, index) => {
    console.log(`  Adding States of Matter Problem ${index + 1} to document...`);

    documentChildren.push(
        new docx.Paragraph({
            text: `Problem ${index + 1}: ${solved.problem.scenario}`,
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: `${solved.problem.problem}`,
            spacing: { after: 200 },
            bold: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: `Difficulty: ${solved.problem.difficulty}`,
            spacing: { after: 100 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: `Helper Tip: ${solved.problem.helper}`,
            spacing: { after: 200 },
            italics: true
        })
    );

    documentChildren.push(...generateProblemSections(solved.workbook));
});

// ============== PART II: PHASE CHANGES ==============
console.log('\nProcessing Part II: Phase Changes...');
documentChildren.push(
    new docx.Paragraph({
        text: 'Part II: Phase Changes and Energy',
        heading: docx.HeadingLevel.HEADING_1,
        spacing: { before: 400, after: 300 },
        pageBreakBefore: true
    })
);

const phaseSolved = solvePhaseChangesRelatedProblems();
phaseSolved.forEach((solved, index) => {
    console.log(`  Adding Phase Changes Problem ${index + 1} to document...`);

    documentChildren.push(
        new docx.Paragraph({
            text: `Problem ${index + 9}: ${solved.problem.scenario}`,
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: `${solved.problem.problem}`,
            spacing: { after: 200 },
            bold: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: `Difficulty: ${solved.problem.difficulty}`,
            spacing: { after: 100 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: `Helper Tip: ${solved.problem.helper}`,
            spacing: { after: 200 },
            italics: true
        })
    );

    documentChildren.push(...generateProblemSections(solved.workbook));
});

// ============== PART III: GAS LAWS ==============
console.log('\nProcessing Part III: Gas Laws...');
documentChildren.push(
    new docx.Paragraph({
        text: 'Part III: Gas Laws',
        heading: docx.HeadingLevel.HEADING_1,
        spacing: { before: 400, after: 300 },
        pageBreakBefore: true
    })
);

const gasSolved = solveGasLawsRelatedProblems();
gasSolved.forEach((solved, index) => {
    console.log(`  Adding Gas Laws Problem ${index + 1} to document...`);

    documentChildren.push(
        new docx.Paragraph({
            text: `Problem ${index + 17}: ${solved.problem.scenario}`,
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: `${solved.problem.problem}`,
            spacing: { after: 200 },
            bold: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: `Difficulty: ${solved.problem.difficulty}`,
            spacing: { after: 100 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: `Helper Tip: ${solved.problem.helper}`,
            spacing: { after: 200 },
            italics: true
        })
    );

    documentChildren.push(...generateProblemSections(solved.workbook));
});

// ============== PART IV: KINETIC MOLECULAR THEORY ==============
console.log('\nProcessing Part IV: Kinetic Molecular Theory...');
documentChildren.push(
    new docx.Paragraph({
        text: 'Part IV: Kinetic Molecular Theory',
        heading: docx.HeadingLevel.HEADING_1,
        spacing: { before: 400, after: 300 },
        pageBreakBefore: true
    })
);

const kineticSolved = solveKineticMolecularTheoryRelatedProblems();
kineticSolved.forEach((solved, index) => {
    console.log(`  Adding Kinetic Molecular Theory Problem ${index + 1} to document...`);

    documentChildren.push(
        new docx.Paragraph({
            text: `Problem ${index + 26}: ${solved.problem.scenario}`,
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: `${solved.problem.problem}`,
            spacing: { after: 200 },
            bold: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: `Difficulty: ${solved.problem.difficulty}`,
            spacing: { after: 100 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: `Helper Tip: ${solved.problem.helper}`,
            spacing: { after: 200 },
            italics: true
        })
    );

    documentChildren.push(...generateProblemSections(solved.workbook));
});



    // ============== CREATE AND SAVE DOCUMENT ==============
    const doc = new docx.Document({
        sections: [{
            properties: {
                page: {
                    margin: {
                        top: 720,    // 0.5 inch
                        right: 720,
                        bottom: 720,
                        left: 720
                    }
                }
            },
            children: documentChildren
        }]
    });

    // Save the document
    try {
        const buffer = await docx.Packer.toBuffer(doc);
        const filename = 'comprehensive_organic_chemistry_workbook_with_related_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ COMPREHENSIVE ORGANIC CHEMISTRY DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 70');
    } catch (error) {
        console.error(`\n❌ Error saving document: ${error.message}`);
        console.error(error.stack);
    }
}

// ============== RUN THE COMPREHENSIVE DOCUMENT GENERATION ==============

generateComprehensiveChemistryDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});
