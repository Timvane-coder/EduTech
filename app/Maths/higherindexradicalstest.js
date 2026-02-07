import { EnhancedHigherIndexRadicalsWorkbook } from './higher-index-radicals-workbook.js';
import * as docx from 'docx';
import fs from 'fs';
import path from 'path';


// ============== UTILITY FUNCTION ==============

// Generate all workbook sections for a problem
function generateProblemSections(workbookInstance) {
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

        // Section content
        if (section.data && Array.isArray(section.data)) {
            section.data.forEach(row => {
                if (Array.isArray(row)) {
                    // Handle table-like data
                    if (row.length === 2 && row[0] && row[1]) {
                        // Key-value pair
                        sections.push(
                            new docx.Paragraph({
                                children: [
                                    new docx.TextRun({
                                        text: `${row[0]}: `,
                                        bold: true
                                    }),
                                    new docx.TextRun({
                                        text: String(row[1])
                                    })
                                ],
                                spacing: { after: 100 }
                            })
                        );
                    } else if (row[0] === '' && row[1] === '') {
                        // Spacing row
                        sections.push(
                            new docx.Paragraph({
                                text: '',
                                spacing: { after: 200 }
                            })
                        );
                    } else if (row.length > 2) {
                        // Multi-column row (like verification tables)
                        sections.push(
                            new docx.Paragraph({
                                text: row.join(' | '),
                                spacing: { after: 100 }
                            })
                        );
                    }
                }
            });
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




// ============== HIGHER INDEX RADICALS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedHigherIndexRadicals() {
    const relatedProblems = [];

    // Problem 1: Simple Cube Root Evaluation (Perfect Cube)
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Cube Root of Perfect Cube',
        problem: 'Evaluate: ³√64',
        radicand: 64,
        index: 3,
        operation: 'evaluate',
        problemType: 'cube_root_evaluation',
        context: { 
            difficulty: 'beginner', 
            topic: 'Cube Roots',
            realWorld: 'Finding side length of a cube from its volume'
        },
        subparts: [
            'Given: ³√64',
            'Ask: What number cubed equals 64?',
            'Test: 4³ = 4 × 4 × 4 = 64 ✓',
            'Answer: ³√64 = 4',
            'Verification: 4³ = 64 ✓'
        ],
        helper: 'Perfect cubes to remember: 1, 8, 27, 64, 125, 216...',
        solution: '4',
        realWorldContext: 'If a cube has volume 64 cubic units, each side is 4 units long'
    });

    // Problem 2: Cube Root Simplification
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Simplifying Cube Roots',
        problem: 'Simplify: ³√54',
        radicand: 54,
        index: 3,
        operation: 'simplify',
        problemType: 'cube_root_simplification',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Simplifying Cube Roots',
            realWorld: 'Expressing radical values in simplest form'
        },
        subparts: [
            'Given: ³√54',
            'Prime factorization: 54 = 2 × 27 = 2 × 3³',
            'Rewrite: ³√54 = ³√(27 × 2) = ³√(3³ × 2)',
            'Apply product property: ³√(3³ × 2) = ³√(3³) × ³√2',
            'Extract perfect cube: ³√(3³) = 3',
            'Simplified form: 3³√2',
            'Verification: (3³√2)³ = 3³ × (³√2)³ = 27 × 2 = 54 ✓'
        ],
        helper: 'Factor the radicand and look for perfect cubes (numbers you can write as n³)',
        solution: '3³√2',
        realWorldContext: 'Making radical expressions cleaner for easier calculations in engineering'
    });

    // Problem 3: Fourth Root Evaluation (Perfect Fourth Power)
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Fourth Root of Perfect Fourth Power',
        problem: 'Evaluate: ⁴√81',
        radicand: 81,
        index: 4,
        operation: 'evaluate',
        problemType: 'fourth_root_evaluation',
        context: { 
            difficulty: 'beginner', 
            topic: 'Fourth Roots',
            realWorld: 'Finding values in quartic relationships'
        },
        subparts: [
            'Given: ⁴√81',
            'Note: Even index requires non-negative radicand ✓ (81 ≥ 0)',
            'Ask: What number to the fourth power equals 81?',
            'Test: 3⁴ = 3 × 3 × 3 × 3 = 81 ✓',
            'Answer: ⁴√81 = 3',
            'Verification: 3⁴ = 81 ✓',
            'Note: Principal (positive) root only for even indices'
        ],
        helper: 'Perfect fourth powers: 1, 16, 81, 256, 625... Remember 3⁴ = 81!',
        solution: '3',
        realWorldContext: 'Used in physics for quartic (fourth power) relationships like certain stress-strain curves'
    });

    // Problem 4: Cube Root with Negative Radicand
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Cube Root of Negative Number',
        problem: 'Evaluate: ³√(-27)',
        radicand: -27,
        index: 3,
        operation: 'evaluate',
        problemType: 'cube_root_evaluation',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Cube Roots with Negatives',
            realWorld: 'Handling negative values in three-dimensional scaling'
        },
        subparts: [
            'Given: ³√(-27)',
            'Note: Odd index allows negative radicands ✓',
            'Ask: What number cubed equals -27?',
            'Consider: A negative number cubed stays negative',
            'Test: (-3)³ = (-3) × (-3) × (-3) = -27 ✓',
            'Answer: ³√(-27) = -3',
            'Verification: (-3)³ = -27 ✓',
            'Key insight: Odd roots preserve the sign'
        ],
        helper: 'Odd index roots (like cube roots) CAN have negative radicands and give negative results',
        solution: '-3',
        realWorldContext: 'Like finding the dimension of a reflected/inverted 3D object with volume -27'
    });

    // Problem 5: Fourth Root Simplification
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Simplifying Fourth Roots',
        problem: 'Simplify: ⁴√162',
        radicand: 162,
        index: 4,
        operation: 'simplify',
        problemType: 'fourth_root_simplification',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Simplifying Fourth Roots',
            realWorld: 'Expressing complex radical values cleanly'
        },
        subparts: [
            'Given: ⁴√162',
            'Check domain: 162 ≥ 0 ✓ (even index)',
            'Prime factorization: 162 = 2 × 81 = 2 × 3⁴',
            'Rewrite: ⁴√162 = ⁴√(3⁴ × 2)',
            'Apply product property: ⁴√(3⁴ × 2) = ⁴√(3⁴) × ⁴√2',
            'Extract perfect fourth power: ⁴√(3⁴) = 3',
            'Simplified form: 3⁴√2',
            'Verification: (3⁴√2)⁴ = 3⁴ × (⁴√2)⁴ = 81 × 2 = 162 ✓'
        ],
        helper: 'Look for perfect fourth powers: 16 = 2⁴, 81 = 3⁴, 256 = 4⁴, etc.',
        solution: '3⁴√2',
        realWorldContext: 'Simplifying measurements in four-dimensional physics calculations or hypersurface geometry'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveHigherIndexRadicalsRelatedProblems() {
    const problems = generateRelatedHigherIndexRadicals();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Higher Index Radical Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedHigherIndexRadicalsWorkbook({
            theme: 'scientific',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed',
            includeThinkingPrompts: true,
            includeSelfCheckQuestions: true,
            includeRealWorldApplications: true
        });

        try {
            // Solve the problem
            const result = workbook.solveRadicalProblem({
                radicand: problem.radicand,
                index: problem.index,
                operation: problem.operation,
                scenario: problem.scenario,
                parameters: {},
                problemType: problem.problemType,
                context: problem.context
            });

            solvedProblems.push({
                problem: problem,
                workbook: workbook,
                result: result
            });

            console.log(`    ✓ Solution: ${result.solutionValue || problem.solution}`);
        } catch (error) {
            console.error(`    ✗ Error solving problem: ${error.message}`);
            solvedProblems.push({
                problem: problem,
                workbook: null,
                error: error.message
            });
        }
    });

    return solvedProblems;
}

async function generateComprehensiveDocument() {
    console.log('Generating Higher Index Radicals Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Higher Index Radicals Workbook',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { after: 200 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Complete Guide with 5 Test Problems',
            spacing: { after: 150 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Cube Roots, Fourth Roots, and Simplification',
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

    documentChildren.push(
        new docx.Paragraph({
            text: 'Higher Index Radicals (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const radicalProblems = generateRelatedHigherIndexRadicals();
    radicalProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario} [${problem.difficulty}]: ${problem.problem}`,
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

    // ============== INTRODUCTION ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Introduction',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'This workbook contains 5 carefully selected higher index radical problems that progressively build your understanding. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed explanations',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Domain checking for even vs odd indices',
        '• Perfect power recognition and prime factorization techniques',
        '• Common mistakes and error prevention tips',
        '• Self-check questions and thinking prompts',
        '• Real-world applications and context',
        '• Alternative solution methods',
        '• Verification of solutions',
        '• Pedagogical notes for deeper understanding',
        '• Index-specific rules and properties'
    ];

    features.forEach(feature => {
        documentChildren.push(
            new docx.Paragraph({
                text: feature,
                spacing: { after: 100 }
            })
        );
    });

    // ============== KEY CONCEPTS SECTION ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Key Concepts Overview',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    const keyConcepts = [
        {
            title: 'What is a Higher Index Radical?',
            content: 'A radical with index n ≥ 3 (cube root, fourth root, fifth root, etc.). The index tells you which power to "undo".'
        },
        {
            title: 'Odd vs Even Index',
            content: 'ODD indices (3, 5, 7...): Allow negative radicands, preserve sign. EVEN indices (4, 6, 8...): Require non-negative radicands, give non-negative results.'
        },
        {
            title: 'Perfect Powers',
            content: 'Perfect cubes: 1, 8, 27, 64, 125, 216... Perfect fourths: 1, 16, 81, 256, 625... Recognizing these makes evaluation immediate!'
        },
        {
            title: 'Simplification Strategy',
            content: 'Factor the radicand → Find perfect nth powers → Extract them outside the radical → Leave remaining factors inside.'
        }
    ];

    keyConcepts.forEach(concept => {
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: `${concept.title}: `,
                        bold: true
                    }),
                    new docx.TextRun({
                        text: concept.content
                    })
                ],
                spacing: { after: 150 }
            })
        );
    });

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Higher Index Radicals Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Higher Index Radicals Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const radicalsSolved = solveHigherIndexRadicalsRelatedProblems();
    
    radicalsSolved.forEach((solved, index) => {
        console.log(`  Adding Problem ${index + 1} to document...`);

        // Page break before each problem (except first)
        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 1}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: index > 0
            })
        );

        // Problem statement box
        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true,
                shading: {
                    fill: "E7F3FF",
                    type: docx.ShadingType.CLEAR
                }
            })
        );

        // Difficulty level and index info
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'Difficulty: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.difficulty.toUpperCase(),
                        color: solved.problem.difficulty === 'easy' ? '2E7D32' : '1976D2'
                    }),
                    new docx.TextRun({
                        text: ' | Index: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: `${solved.problem.index} (${solved.problem.index % 2 === 0 ? 'EVEN - non-negative only' : 'ODD - all reals allowed'})`,
                        color: solved.problem.index % 2 === 0 ? 'D32F2F' : '388E3C'
                    })
                ],
                spacing: { after: 100 }
            })
        );

        // Helper tip
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: '💡 Quick Tip: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.helper,
                        italics: true
                    })
                ],
                spacing: { after: 200 },
                shading: {
                    fill: "FFFEF0",
                    type: docx.ShadingType.CLEAR
                }
            })
        );

        // Real-world context
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: '🌍 Real-World Context: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.realWorldContext
                    })
                ],
                spacing: { after: 300 }
            })
        );

        // Add workbook sections if solved successfully
        if (solved.workbook) {
            documentChildren.push(...generateProblemSections(solved.workbook));
        } else {
            documentChildren.push(
                new docx.Paragraph({
                    text: `Error: ${solved.error}`,
                    spacing: { after: 200 },
                    color: 'FF0000'
                })
            );
        }

        // Quick reference solution
        documentChildren.push(
            new docx.Paragraph({
                text: 'Quick Reference Solution',
                heading: docx.HeadingLevel.HEADING_3,
                spacing: { before: 400, after: 200 }
            })
        );

        solved.problem.subparts.forEach(subpart => {
            documentChildren.push(
                new docx.Paragraph({
                    text: subpart,
                    spacing: { after: 100 },
                    bullet: {
                        level: 0
                    }
                })
            );
        });

        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'Final Answer: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.solution,
                        bold: true,
                        color: '2E7D32'
                    })
                ],
                spacing: { before: 200, after: 400 },
                shading: {
                    fill: "E8F5E9",
                    type: docx.ShadingType.CLEAR
                }
            })
        );
    });

    // ============== SUMMARY SECTION ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Summary and Next Steps',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Congratulations on completing these 5 higher index radical problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve evaluated perfect cubes and fourth powers',
        'You\'ve learned to simplify cube roots and fourth roots',
        'You\'ve mastered the difference between odd and even indices',
        'You\'ve practiced working with negative radicands (odd index only)',
        'You\'ve learned prime factorization for radical simplification',
        'You\'ve verified solutions by raising to the appropriate power'
    ];

    documentChildren.push(
        new docx.Paragraph({
            text: 'What You\'ve Learned:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    summaryPoints.forEach(point => {
        documentChildren.push(
            new docx.Paragraph({
                text: `✓ ${point}`,
                spacing: { after: 100 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: 'Key Takeaways:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const keyTakeaways = [
        {
            title: 'Odd Index (3, 5, 7...)',
            content: 'Allows negative radicands. Preserves the sign. ³√(-8) = -2 is valid!'
        },
        {
            title: 'Even Index (4, 6, 8...)',
            content: 'Requires non-negative radicands. Gives non-negative results. ⁴√(-16) has no real solution.'
        },
        {
            title: 'Simplification',
            content: 'Factor completely → Find perfect nth powers → Extract them → Simplify remaining.'
        },
        {
            title: 'Verification',
            content: 'Always check by raising your answer to the index. If correct, you get the radicand back!'
        }
    ];

    keyTakeaways.forEach(takeaway => {
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: `• ${takeaway.title}: `,
                        bold: true
                    }),
                    new docx.TextRun({
                        text: takeaway.content
                    })
                ],
                spacing: { after: 150 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: 'Next Steps:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const nextSteps = [
        'Practice fifth and sixth roots',
        'Learn to add and subtract radicals (like radicals only!)',
        'Master multiplying and dividing radicals',
        'Solve radical equations (like ³√x = 5)',
        'Convert between radical and rational exponent form (³√a = a^(1/3))',
        'Work with radicals containing variables',
        'Rationalize denominators with higher index radicals'
    ];

    nextSteps.forEach((step, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${step}`,
                spacing: { after: 100 }
            })
        );
    });

    // ============== QUICK REFERENCE GUIDE ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Quick Reference Guide',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Perfect Cubes (memorize these!):',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: '1³ = 1, 2³ = 8, 3³ = 27, 4³ = 64, 5³ = 125, 6³ = 216, 7³ = 343, 8³ = 512, 9³ = 729, 10³ = 1000',
            spacing: { after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Perfect Fourth Powers (memorize these!):',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: '1⁴ = 1, 2⁴ = 16, 3⁴ = 81, 4⁴ = 256, 5⁴ = 625, 6⁴ = 1296',
            spacing: { after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Important Formulas:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const formulas = [
        'Definition: ⁿ√a = b means b^n = a',
        'Product Property: ⁿ√(ab) = ⁿ√a · ⁿ√b',
        'Quotient Property: ⁿ√(a/b) = ⁿ√a / ⁿ√b',
        'Rational Exponent: ⁿ√a = a^(1/n)',
        'With Power: ⁿ√(a^m) = a^(m/n)',
        'Nested Radicals: ᵐ√(ⁿ√a) = ᵐⁿ√a'
    ];

    formulas.forEach(formula => {
        documentChildren.push(
            new docx.Paragraph({
                text: `• ${formula}`,
                spacing: { after: 100 }
            })
        );
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
        const filename = 'higher_index_radicals_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Cube Root Evaluation: 2 problems');
        console.log('    - Cube Root Simplification: 1 problem');
        console.log('    - Fourth Root Evaluation: 1 problem');
        console.log('    - Fourth Root Simplification: 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 45-55 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and index information');
        console.log('  • Domain checking (odd vs even index)');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Complete step-by-step solution with enhanced explanations');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Prime factorization and perfect power identification');
        console.log('  • Verification by raising to the appropriate power');
        console.log('  • Key concepts and learning objectives');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary');
        console.log('\n📚 Additional features:');
        console.log('  • Perfect cubes and fourth powers reference table');
        console.log('  • Important formulas and properties');
        console.log('  • Odd vs even index rules clearly explained');
        console.log('  • Comprehensive summary and next steps');
        console.log('='.repeat(80) + '\n');
    } catch (error) {
        console.error(`\n❌ Error saving document: ${error.message}`);
        console.error(error.stack);
    }
}

// ============== RUN THE DOCUMENT GENERATION ==============

generateComprehensiveDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});
