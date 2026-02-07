import { EnhancedSimultaneousEquationsWorkbook } from './simultaneous-equations-workbook.js';
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
                        // Multi-column row
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




// ============== SIMULTANEOUS EQUATIONS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedSimultaneousEquations() {
    const relatedProblems = [];

    // Problem 1: Simple Substitution Method (one variable already isolated)
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Simple Substitution - Variable Already Isolated',
        problem: 'Solve the system:\ny = 2x\nx + y = 9',
        equation1: 'y = 2x',
        equation2: 'x + y = 9',
        method: 'substitution_method',
        parameters: {},
        context: { 
            difficulty: 'beginner', 
            topic: 'Substitution Method',
            realWorld: 'Finding two unknowns when one is defined in terms of the other'
        },
        subparts: [
            'Given: y = 2x and x + y = 9',
            'Step 1: y is already isolated in the first equation',
            'Step 2: Substitute y = 2x into the second equation',
            'x + (2x) = 9',
            'Step 3: Combine like terms',
            '3x = 9',
            'Step 4: Divide by 3',
            'x = 3',
            'Step 5: Back-substitute to find y',
            'y = 2(3) = 6',
            'Solution: (3, 6)',
            'Check: 6 = 2(3) ✓ and 3 + 6 = 9 ✓'
        ],
        helper: 'When one variable is already isolated, substitution is the easiest method',
        solution: 'x = 3, y = 6',
        realWorldContext: 'Like a recipe where one ingredient is twice another, and together they total 9 cups'
    });

    // Problem 2: Simple Elimination Method (opposite coefficients)
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Simple Elimination - Opposite Coefficients',
        problem: 'Solve the system:\nx + y = 10\nx - y = 4',
        equation1: 'x + y = 10',
        equation2: 'x - y = 4',
        method: 'elimination_method',
        parameters: {},
        context: { 
            difficulty: 'beginner', 
            topic: 'Elimination Method',
            realWorld: 'Finding values when adding and subtracting gives different results'
        },
        subparts: [
            'Given: x + y = 10 and x - y = 4',
            'Step 1: Notice y coefficients are already opposites (+1 and -1)',
            'Step 2: Add the equations to eliminate y',
            '(x + y) + (x - y) = 10 + 4',
            'x + y + x - y = 14',
            '2x = 14',
            'Step 3: Divide by 2',
            'x = 7',
            'Step 4: Substitute x = 7 into first equation',
            '7 + y = 10',
            'y = 3',
            'Solution: (7, 3)',
            'Check: 7 + 3 = 10 ✓ and 7 - 3 = 4 ✓'
        ],
        helper: 'When coefficients are already opposites, direct elimination is fastest',
        solution: 'x = 7, y = 3',
        realWorldContext: 'Like having $10 total in nickels and dimes, with 4 more dimes than nickels'
    });

    // Problem 3: Substitution with Two-Step Isolation
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Substitution Method - Isolation Required',
        problem: 'Solve the system:\n2x + y = 11\nx + 3y = 13',
        equation1: '2x + y = 11',
        equation2: 'x + 3y = 13',
        method: 'substitution_method',
        parameters: {},
        context: { 
            difficulty: 'intermediate', 
            topic: 'Substitution Method with Isolation',
            realWorld: 'Solving systems where variables must be isolated first'
        },
        subparts: [
            'Given: 2x + y = 11 and x + 3y = 13',
            'Step 1: Isolate y from first equation (easier than isolating x)',
            'y = 11 - 2x',
            'Step 2: Substitute into second equation',
            'x + 3(11 - 2x) = 13',
            'Step 3: Distribute',
            'x + 33 - 6x = 13',
            'Step 4: Combine like terms',
            '-5x + 33 = 13',
            'Step 5: Subtract 33 from both sides',
            '-5x = -20',
            'Step 6: Divide by -5',
            'x = 4',
            'Step 7: Back-substitute to find y',
            'y = 11 - 2(4) = 11 - 8 = 3',
            'Solution: (4, 3)',
            'Check: 2(4) + 3 = 11 ✓ and 4 + 3(3) = 13 ✓'
        ],
        helper: 'Isolate the variable with coefficient 1 to avoid fractions',
        solution: 'x = 4, y = 3',
        realWorldContext: 'Like pricing items: 2 apples and 1 orange cost $11, while 1 apple and 3 oranges cost $13'
    });

    // Problem 4: Elimination with Multiplication
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Elimination Method - Requires Multiplication',
        problem: 'Solve the system:\n3x + 2y = 16\n5x - 2y = 8',
        equation1: '3x + 2y = 16',
        equation2: '5x - 2y = 8',
        method: 'elimination_method',
        parameters: {},
        context: { 
            difficulty: 'intermediate', 
            topic: 'Elimination Method with Multipliers',
            realWorld: 'Finding values when combining scenarios eliminates one variable'
        },
        subparts: [
            'Given: 3x + 2y = 16 and 5x - 2y = 8',
            'Step 1: Notice y coefficients are already opposites (+2 and -2)',
            'Step 2: Add equations to eliminate y',
            '(3x + 2y) + (5x - 2y) = 16 + 8',
            '3x + 2y + 5x - 2y = 24',
            '8x = 24',
            'Step 3: Divide by 8',
            'x = 3',
            'Step 4: Substitute x = 3 into first equation',
            '3(3) + 2y = 16',
            '9 + 2y = 16',
            '2y = 7',
            'y = 3.5',
            'Solution: (3, 3.5)',
            'Check: 3(3) + 2(3.5) = 9 + 7 = 16 ✓ and 5(3) - 2(3.5) = 15 - 7 = 8 ✓'
        ],
        helper: 'Look for coefficients that are already opposites before multiplying',
        solution: 'x = 3, y = 3.5',
        realWorldContext: 'Like balancing a budget: one scenario adds money, another subtracts, resulting in different totals'
    });

    // Problem 5: Matrix Method (Cramer's Rule)
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Matrix Method - Cramer\'s Rule',
        problem: 'Solve the system using matrices:\n2x + 3y = 8\n4x - y = 6',
        equation1: '2x + 3y = 8',
        equation2: '4x - y = 6',
        method: 'matrix_method',
        parameters: {},
        context: { 
            difficulty: 'intermediate', 
            topic: 'Matrix Methods and Determinants',
            realWorld: 'Systematic approach to solving systems using linear algebra'
        },
        subparts: [
            'Given: 2x + 3y = 8 and 4x - y = 6',
            'Step 1: Write in matrix form AX = B',
            'A = [2  3]    X = [x]    B = [8]',
            '    [4 -1]        [y]        [6]',
            'Step 2: Calculate det(A)',
            'det(A) = (2)(-1) - (4)(3) = -2 - 12 = -14',
            'Step 3: Since det(A) ≠ 0, unique solution exists',
            'Step 4: Calculate det(Aₓ) by replacing first column with B',
            'Aₓ = [8  3]',
            '     [6 -1]',
            'det(Aₓ) = (8)(-1) - (6)(3) = -8 - 18 = -26',
            'Step 5: Calculate x using Cramer\'s Rule',
            'x = det(Aₓ)/det(A) = -26/(-14) = 13/7 ≈ 1.857',
            'Step 6: Calculate det(Aᵧ) by replacing second column with B',
            'Aᵧ = [2  8]',
            '     [4  6]',
            'det(Aᵧ) = (2)(6) - (4)(8) = 12 - 32 = -20',
            'Step 7: Calculate y using Cramer\'s Rule',
            'y = det(Aᵧ)/det(A) = -20/(-14) = 10/7 ≈ 1.429',
            'Solution: (13/7, 10/7) or approximately (1.857, 1.429)',
            'Check: 2(13/7) + 3(10/7) = 26/7 + 30/7 = 56/7 = 8 ✓',
            '       4(13/7) - (10/7) = 52/7 - 10/7 = 42/7 = 6 ✓'
        ],
        helper: 'Matrix method is systematic and works well for larger systems',
        solution: 'x = 13/7, y = 10/7 (or x ≈ 1.857, y ≈ 1.429)',
        realWorldContext: 'Like solving engineering problems where matrix methods provide systematic solutions'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveSimultaneousRelatedProblems() {
    const problems = generateRelatedSimultaneousEquations();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Simultaneous Equations Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedSimultaneousEquationsWorkbook({
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
            includeRealWorldApplications: true,
            includeHistoricalContext: true
        });

        try {
            // Solve the problem
            const result = workbook.solveSimultaneousProblem({
                equation1: problem.equation1,
                equation2: problem.equation2,
                method: problem.method,
                parameters: problem.parameters,
                context: problem.context
            });

            solvedProblems.push({
                problem: problem,
                workbook: workbook,
                result: result
            });

            if (result.solutionValue) {
                console.log(`    ✓ Solution: x = ${result.solutionValue.x}, y = ${result.solutionValue.y}`);
            } else {
                console.log(`    ✓ Solution type: ${result.solutionType}`);
            }
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
    console.log('Generating Simultaneous Equations Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Simultaneous Equations Workbook',
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
            text: 'Substitution, Elimination, Matrix, and Graphical Methods',
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
            text: 'Simultaneous Equations (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const simultaneousProblems = generateRelatedSimultaneousEquations();
    simultaneousProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario} [${problem.difficulty}]`,
                spacing: { after: 50 }
            })
        );
        documentChildren.push(
            new docx.Paragraph({
                text: `   ${problem.problem.replace(/\n/g, ' and ')}`,
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
            text: 'This workbook contains 5 carefully selected simultaneous equation problems covering all major solution methods. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed explanations',
        '• Multiple solution methods: Substitution, Elimination, Matrix (Cramer\'s Rule), and Graphical',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Common mistakes and error prevention tips',
        '• Self-check questions and thinking prompts',
        '• Real-world applications and context',
        '• Method comparison and selection guidance',
        '• Verification of solutions in both original equations',
        '• Pedagogical notes for deeper understanding',
        '• Historical context of simultaneous equations',
        '• Practice problems for each method'
    ];

    features.forEach(feature => {
        documentChildren.push(
            new docx.Paragraph({
                text: feature,
                spacing: { after: 100 }
            })
        );
    });

    // ============== OVERVIEW OF METHODS ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Overview of Solution Methods',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    const methods = [
        {
            name: 'Substitution Method',
            description: 'Solve one equation for one variable, then substitute into the other equation. Best when one variable is already isolated or has coefficient ±1.',
            example: 'If y = 2x, substitute 2x for y in the second equation.'
        },
        {
            name: 'Elimination Method',
            description: 'Multiply equations to create opposite coefficients, then add/subtract to eliminate one variable. Best for integer coefficients.',
            example: 'If equations are x + y = 5 and x - y = 1, adding eliminates y.'
        },
        {
            name: 'Matrix Method (Cramer\'s Rule)',
            description: 'Use determinants to solve systematically. Best for larger systems or when using calculators/computers.',
            example: 'Calculate det(A), det(Aₓ), and det(Aᵧ), then x = det(Aₓ)/det(A).'
        },
        {
            name: 'Graphical Method',
            description: 'Graph both equations and find intersection point. Best for visual understanding and approximate solutions.',
            example: 'Plot both lines; their crossing point is the solution.'
        }
    ];

    methods.forEach((method, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${method.name}`,
                heading: docx.HeadingLevel.HEADING_3,
                spacing: { before: 200, after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: method.description,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'Example: ',
                        italics: true
                    }),
                    new docx.TextRun({
                        text: method.example,
                        italics: true
                    })
                ],
                spacing: { after: 200 }
            })
        );
    });

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Simultaneous Equations Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Simultaneous Equations Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const simultaneousSolved = solveSimultaneousRelatedProblems();
    
    simultaneousSolved.forEach((solved, index) => {
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
        const problemLines = solved.problem.problem.split('\n');
        documentChildren.push(
            new docx.Paragraph({
                text: 'System of Equations:',
                bold: true,
                spacing: { after: 100 }
            })
        );

        problemLines.forEach(line => {
            documentChildren.push(
                new docx.Paragraph({
                    text: line,
                    spacing: { after: 50 },
                    bold: true,
                    shading: {
                        fill: "E7F3FF",
                        type: docx.ShadingType.CLEAR
                    }
                })
            );
        });

        documentChildren.push(
            new docx.Paragraph({
                text: '',
                spacing: { after: 200 }
            })
        );

        // Method and difficulty
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'Solution Method: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.method.replace('_', ' ').toUpperCase(),
                        color: '1976D2'
                    })
                ],
                spacing: { after: 100 }
            })
        );

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
                    spacing: { after: 100 }
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

    // ============== METHOD COMPARISON SECTION ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Method Selection Guide',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'When to Use Each Method',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 200, after: 200 }
        })
    );

    const methodGuide = [
        {
            method: 'Substitution',
            useWhen: [
                'One variable is already isolated (y = ... or x = ...)',
                'One variable has coefficient 1 or -1',
                'Equations involve fractions or decimals',
                'Working with non-linear systems'
            ]
        },
        {
            method: 'Elimination',
            useWhen: [
                'Coefficients are small integers',
                'Coefficients are already opposites',
                'Both equations are in standard form',
                'You want to avoid fractions'
            ]
        },
        {
            method: 'Matrix (Cramer\'s Rule)',
            useWhen: [
                'Solving 3+ variable systems',
                'Using calculator or computer',
                'Want systematic approach',
                'Need to analyze system properties'
            ]
        },
        {
            method: 'Graphical',
            useWhen: [
                'Visual understanding needed',
                'Approximate solution acceptable',
                'Checking solution type (parallel, coincident)',
                'Teaching conceptual understanding'
            ]
        }
    ];

    methodGuide.forEach(guide => {
        documentChildren.push(
            new docx.Paragraph({
                text: guide.method,
                heading: docx.HeadingLevel.HEADING_3,
                spacing: { before: 200, after: 100 }
            })
        );

        guide.useWhen.forEach(reason => {
            documentChildren.push(
                new docx.Paragraph({
                    text: `• ${reason}`,
                    spacing: { after: 80 }
                })
            );
        });
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
            text: 'Congratulations on completing these 5 simultaneous equation problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered the Substitution Method for systems where variables can be easily isolated',
        'You\'ve learned the Elimination Method for efficiently combining equations',
        'You\'ve explored Matrix Methods (Cramer\'s Rule) for systematic solutions',
        'You\'ve understood the Graphical Method for visual interpretation',
        'You\'ve practiced verifying solutions in both original equations',
        'You\'ve learned when to choose each method based on the system\'s characteristics'
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
            text: 'Next Steps:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const nextSteps = [
        'Practice systems with fractions and decimals',
        'Explore systems with three variables',
        'Learn about inconsistent and dependent systems',
        'Apply to word problems (mixture, money, distance-rate-time)',
        'Study systems of inequalities',
        'Investigate non-linear systems (quadratic-linear pairs)',
        'Explore applications in linear programming'
    ];

    nextSteps.forEach((step, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${step}`,
                spacing: { after: 100 }
            })
        );
    });

    // ============== KEY FORMULAS REFERENCE ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Quick Reference: Key Formulas',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    const formulas = [
        {
            name: 'General System Form',
            formula: 'a₁x + b₁y = c₁ and a₂x + b₂y = c₂'
        },
        {
            name: 'Determinant (2×2)',
            formula: 'det(A) = a₁b₂ - a₂b₁'
        },
        {
            name: 'Cramer\'s Rule',
            formula: 'x = det(Aₓ)/det(A), y = det(Aᵧ)/det(A)'
        },
        {
            name: 'Slope-Intercept Form',
            formula: 'y = mx + b (for graphing)'
        }
    ];

    formulas.forEach(f => {
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: `${f.name}: `,
                        bold: true
                    }),
                    new docx.TextRun({
                        text: f.formula
                    })
                ],
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
        const filename = 'simultaneous_equations_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Substitution Method: 2 problems');
        console.log('    - Elimination Method: 2 problems');
        console.log('    - Matrix Method: 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 50-65 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • System of equations with visual highlighting');
        console.log('  • Method identification and difficulty level');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Complete step-by-step solution with enhanced explanations');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Verification of solutions in both equations');
        console.log('  • Method overview and theory');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods comparison');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Historical context of simultaneous equations');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary');
        console.log('\n📚 Additional Sections:');
        console.log('  • Comprehensive method selection guide');
        console.log('  • When to use each method');
        console.log('  • Summary and next steps');
        console.log('  • Key formulas quick reference');
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
