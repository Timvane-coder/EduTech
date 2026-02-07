Here's the complete code for simultaneous systems related problem generator with solver function and document creation:
import { EnhancedSimultaneousSystemsWorkbook } from './simultaneous-systems-workbook.js';
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


// ============== SIMULTANEOUS SYSTEMS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedSimultaneousSystems() {
    const relatedProblems = [];

    // Problem 1: Simple 2×2 System - Elimination (Easy)
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Simple 2×2 System Using Elimination',
        problem: 'Solve the system:\nx + y = 10\nx - y = 4',
        equations: ['x + y = 10', 'x - y = 4'],
        parameters: {
            a1: 1, b1: 1, c1: 10,
            a2: 1, b2: -1, c2: 4,
            systemSize: '2x2'
        },
        problemType: 'system_2x2_elimination',
        method: 'elimination',
        context: {
            difficulty: 'beginner',
            topic: '2×2 Systems of Linear Equations',
            realWorld: 'Finding two unknown values with simple constraints'
        },
        subparts: [
            'Given System:',
            '  x + y = 10  ... (1)',
            '  x - y = 4   ... (2)',
            '',
            'Step 1: Notice y terms are already opposites (+y and -y)',
            'Step 2: Add equations (1) + (2):',
            '  (x + y) + (x - y) = 10 + 4',
            '  x + y + x - y = 14',
            '  2x = 14',
            '  x = 7',
            '',
            'Step 3: Substitute x = 7 into equation (1):',
            '  7 + y = 10',
            '  y = 3',
            '',
            'Step 4: Check in both equations:',
            '  Equation (1): 7 + 3 = 10 ✓',
            '  Equation (2): 7 - 3 = 4 ✓',
            '',
            'Solution: x = 7, y = 3  or  (7, 3)'
        ],
        helper: 'When coefficients are already opposites, add the equations directly to eliminate a variable',
        solution: { x: 7, y: 3 },
        solutionFormatted: 'x = 7, y = 3  or  (7, 3)',
        realWorldContext: 'Like finding two numbers: their sum is 10 and their difference is 4'
    });

    // Problem 2: 2×2 System - Substitution (Easy)
    relatedProblems.push({
        difficulty: 'easy',
        scenario: '2×2 System Using Substitution',
        problem: 'Solve the system:\ny = 2x\nx + y = 9',
        equations: ['y = 2x', 'x + y = 9'],
        parameters: {
            a1: -2, b1: 1, c1: 0,  // Rewritten as -2x + y = 0
            a2: 1, b2: 1, c2: 9,
            systemSize: '2x2'
        },
        problemType: 'system_2x2_substitution',
        method: 'substitution',
        context: {
            difficulty: 'beginner',
            topic: '2×2 Systems - Substitution Method',
            realWorld: 'When one variable is already isolated'
        },
        subparts: [
            'Given System:',
            '  y = 2x      ... (1)',
            '  x + y = 9   ... (2)',
            '',
            'Step 1: Notice y is already isolated in equation (1)',
            '',
            'Step 2: Substitute y = 2x into equation (2):',
            '  x + (2x) = 9',
            '  3x = 9',
            '  x = 3',
            '',
            'Step 3: Substitute x = 3 back into equation (1):',
            '  y = 2(3)',
            '  y = 6',
            '',
            'Step 4: Check in both equations:',
            '  Equation (1): 6 = 2(3) = 6 ✓',
            '  Equation (2): 3 + 6 = 9 ✓',
            '',
            'Solution: x = 3, y = 6  or  (3, 6)'
        ],
        helper: 'When a variable is already isolated (like y = 2x), substitute that expression into the other equation',
        solution: { x: 3, y: 6 },
        solutionFormatted: 'x = 3, y = 6  or  (3, 6)',
        realWorldContext: 'Like finding quantities when one is twice the other and they total 9'
    });

    // Problem 3: 2×2 System - Elimination with Multiplication (Medium)
    relatedProblems.push({
        difficulty: 'medium',
        scenario: '2×2 System with Multiplication Before Elimination',
        problem: 'Solve the system:\n2x + 3y = 13\nx - y = 1',
        equations: ['2x + 3y = 13', 'x - y = 1'],
        parameters: {
            a1: 2, b1: 3, c1: 13,
            a2: 1, b2: -1, c2: 1,
            systemSize: '2x2'
        },
        problemType: 'system_2x2_elimination',
        method: 'elimination',
        context: {
            difficulty: 'intermediate',
            topic: '2×2 Systems - Elimination with Multipliers',
            realWorld: 'Solving problems requiring strategic multiplication'
        },
        subparts: [
            'Given System:',
            '  2x + 3y = 13  ... (1)',
            '  x - y = 1     ... (2)',
            '',
            'Step 1: Multiply equation (2) by 2 to match x coefficients:',
            '  2(x - y) = 2(1)',
            '  2x - 2y = 2   ... (3)',
            '',
            'Step 2: Subtract equation (3) from equation (1):',
            '  (2x + 3y) - (2x - 2y) = 13 - 2',
            '  2x + 3y - 2x + 2y = 11',
            '  5y = 11',
            '  y = 11/5 = 2.2',
            '',
            'Step 3: Substitute y = 2.2 into equation (2):',
            '  x - 2.2 = 1',
            '  x = 3.2',
            '',
            'Step 4: Check in both equations:',
            '  Equation (1): 2(3.2) + 3(2.2) = 6.4 + 6.6 = 13 ✓',
            '  Equation (2): 3.2 - 2.2 = 1 ✓',
            '',
            'Solution: x = 3.2, y = 2.2  or  (3.2, 2.2)',
            'Or in fraction form: x = 16/5, y = 11/5'
        ],
        helper: 'Multiply one or both equations by constants to create opposite coefficients, then eliminate',
        solution: { x: 3.2, y: 2.2 },
        solutionFormatted: 'x = 16/5 (or 3.2), y = 11/5 (or 2.2)  or  (16/5, 11/5)',
        realWorldContext: 'Like calculating prices when 2 apples and 3 oranges cost $13, and 1 apple minus 1 orange costs $1'
    });

    // Problem 4: Simple 3×3 System (Medium)
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Simple 3×3 System Using Elimination',
        problem: 'Solve the system:\nx + y + z = 6\nx - y + z = 2\nx + y - z = 0',
        equations: ['x + y + z = 6', 'x - y + z = 2', 'x + y - z = 0'],
        parameters: {
            a1: 1, b1: 1, c1: 1, d1: 6,
            a2: 1, b2: -1, c2: 1, d2: 2,
            a3: 1, b3: 1, c3: -1, d3: 0,
            systemSize: '3x3'
        },
        problemType: 'system_3x3_elimination',
        method: 'elimination',
        context: {
            difficulty: 'intermediate',
            topic: '3×3 Systems of Linear Equations',
            realWorld: 'Finding three unknown values with three constraints'
        },
        subparts: [
            'Given System:',
            '  x + y + z = 6   ... (1)',
            '  x - y + z = 2   ... (2)',
            '  x + y - z = 0   ... (3)',
            '',
            'Step 1: Eliminate z from equations (1) and (3):',
            '  Add (1) + (3):',
            '  (x + y + z) + (x + y - z) = 6 + 0',
            '  2x + 2y = 6',
            '  x + y = 3  ... (4)',
            '',
            'Step 2: Eliminate z from equations (1) and (2):',
            '  Subtract (2) from (1):',
            '  (x + y + z) - (x - y + z) = 6 - 2',
            '  x + y + z - x + y - z = 4',
            '  2y = 4',
            '  y = 2',
            '',
            'Step 3: Substitute y = 2 into equation (4):',
            '  x + 2 = 3',
            '  x = 1',
            '',
            'Step 4: Substitute x = 1 and y = 2 into equation (1):',
            '  1 + 2 + z = 6',
            '  z = 3',
            '',
            'Step 5: Check in all three equations:',
            '  Equation (1): 1 + 2 + 3 = 6 ✓',
            '  Equation (2): 1 - 2 + 3 = 2 ✓',
            '  Equation (3): 1 + 2 - 3 = 0 ✓',
            '',
            'Solution: x = 1, y = 2, z = 3  or  (1, 2, 3)'
        ],
        helper: 'For 3×3 systems: eliminate the SAME variable from two different pairs of equations to create a 2×2 system',
        solution: { x: 1, y: 2, z: 3 },
        solutionFormatted: 'x = 1, y = 2, z = 3  or  (1, 2, 3)',
        realWorldContext: 'Like finding three numbers where various sums equal 6, 2, and 0'
    });

    // Problem 5: 3×3 System - More Complex (Hard)
    relatedProblems.push({
        difficulty: 'hard',
        scenario: '3×3 System with Varied Coefficients',
        problem: 'Solve the system:\n2x + y - z = 3\nx - y + 2z = 4\n3x + 2y + z = 10',
        equations: ['2x + y - z = 3', 'x - y + 2z = 4', '3x + 2y + z = 10'],
        parameters: {
            a1: 2, b1: 1, c1: -1, d1: 3,
            a2: 1, b2: -1, c2: 2, d2: 4,
            a3: 3, b3: 2, c3: 1, d3: 10,
            systemSize: '3x3'
        },
        problemType: 'system_3x3_elimination',
        method: 'elimination',
        context: {
            difficulty: 'advanced',
            topic: '3×3 Systems with Mixed Coefficients',
            realWorld: 'Complex problems with multiple variables and constraints'
        },
        subparts: [
            'Given System:',
            '  2x + y - z = 3   ... (1)',
            '  x - y + 2z = 4   ... (2)',
            '  3x + 2y + z = 10 ... (3)',
            '',
            'Step 1: Eliminate z from equations (1) and (2):',
            '  Multiply (1) by 2: 4x + 2y - 2z = 6',
            '  Add to (2):  (4x + 2y - 2z) + (x - y + 2z) = 6 + 4',
            '  5x + y = 10  ... (4)',
            '',
            'Step 2: Eliminate z from equations (1) and (3):',
            '  Add (1) + (3):',
            '  (2x + y - z) + (3x + 2y + z) = 3 + 10',
            '  5x + 3y = 13  ... (5)',
            '',
            'Step 3: Solve 2×2 system of equations (4) and (5):',
            '  From (4): 5x + y = 10',
            '  From (5): 5x + 3y = 13',
            '  Subtract (4) from (5):',
            '  (5x + 3y) - (5x + y) = 13 - 10',
            '  2y = 3',
            '  y = 1.5',
            '',
            'Step 4: Substitute y = 1.5 into equation (4):',
            '  5x + 1.5 = 10',
            '  5x = 8.5',
            '  x = 1.7',
            '',
            'Step 5: Substitute x = 1.7 and y = 1.5 into equation (1):',
            '  2(1.7) + 1.5 - z = 3',
            '  3.4 + 1.5 - z = 3',
            '  4.9 - z = 3',
            '  z = 1.9',
            '',
            'Step 6: Check (verification left as exercise)',
            '',
            'Solution: x = 1.7, y = 1.5, z = 1.9  or  (1.7, 1.5, 1.9)',
            'Or in fraction form: x = 17/10, y = 3/2, z = 19/10'
        ],
        helper: 'For complex 3×3 systems: stay organized by labeling equations, eliminate the same variable from two pairs, then solve the resulting 2×2 system',
        solution: { x: 1.7, y: 1.5, z: 1.9 },
        solutionFormatted: 'x = 17/10 (or 1.7), y = 3/2 (or 1.5), z = 19/10 (or 1.9)',
        realWorldContext: 'Like balancing chemical equations or solving engineering problems with multiple interconnected variables'
    });

    return relatedProblems;
}


// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveSimultaneousSystemsRelatedProblems() {
    const problems = generateRelatedSimultaneousSystems();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Simultaneous System Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedSimultaneousSystemsWorkbook({
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
            const result = workbook.solveSystemProblem({
                equations: problem.equations,
                scenario: problem.scenario,
                parameters: problem.parameters,
                problemType: problem.problemType,
                context: problem.context,
                method: problem.method
            });

            solvedProblems.push({
                problem: problem,
                workbook: workbook,
                result: result
            });

            console.log(`    ✓ Solution: ${problem.solutionFormatted}`);
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


// ============== GENERATE COMPREHENSIVE DOCUMENT ==============

async function generateComprehensiveDocument() {
    console.log('Generating Simultaneous Systems Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Simultaneous Systems of Equations Workbook',
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
            text: '2×2 Systems (Substitution & Elimination) and 3×3 Systems',
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
            text: 'Simultaneous Systems of Equations (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const systemProblems = generateRelatedSimultaneousSystems();
    systemProblems.forEach((problem, index) => {
        const systemType = problem.parameters.systemSize === '3x3' ? '3×3' : '2×2';
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. [${systemType}] ${problem.scenario} [${problem.difficulty}]`,
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
            text: 'This workbook contains 5 carefully selected simultaneous systems problems that progressively build your understanding from simple 2×2 systems to more complex 3×3 systems. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed explanations',
        '• Multiple solution methods (Substitution, Elimination, Matrix)',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Common mistakes and error prevention tips specific to systems',
        '• Self-check questions and thinking prompts',
        '• Real-world applications and context',
        '• Method comparison and selection guidance',
        '• Geometric interpretation (lines and planes)',
        '• Verification of solutions in all equations',
        '• Historical context of systems of equations',
        '• Pedagogical notes for deeper understanding'
    ];

    features.forEach(feature => {
        documentChildren.push(
            new docx.Paragraph({
                text: feature,
                spacing: { after: 100 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: '',
            spacing: { after: 300 }
        })
    );

    // Problem Progression
    documentChildren.push(
        new docx.Paragraph({
            text: 'Problem Progression:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const progression = [
        'Problem 1: Simple 2×2 system with elimination (opposites already present)',
        'Problem 2: 2×2 system with substitution (one variable isolated)',
        'Problem 3: 2×2 system requiring multiplication before elimination',
        'Problem 4: Introduction to 3×3 systems with simple coefficients',
        'Problem 5: More complex 3×3 system with varied coefficients'
    ];

    progression.forEach(item => {
        documentChildren.push(
            new docx.Paragraph({
                text: `• ${item}`,
                spacing: { after: 100 }
            })
        );
    });

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Simultaneous Systems Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Simultaneous Systems Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const systemsSolved = solveSimultaneousSystemsRelatedProblems();
    
    systemsSolved.forEach((solved, index) => {
        console.log(`  Adding Problem ${index + 1} to document...`);

        const systemType = solved.problem.parameters.systemSize === '3x3' ? '3×3' : '2×2';

        // Page break before each problem (except first)
        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 1}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: index > 0
            })
        );

        // System type badge
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: `[${systemType} System] `,
                        bold: true,
                        color: systemType === '3×3' ? 'D32F2F' : '1976D2'
                    }),
                    new docx.TextRun({
                        text: `Method: ${solved.problem.method.charAt(0).toUpperCase() + solved.problem.method.slice(1)}`,
                        italics: true
                    })
                ],
                spacing: { after: 200 }
            })
        );

        // Problem statement box
        documentChildren.push(
            new docx.Paragraph({
                text: 'System of Equations:',
                bold: true,
                spacing: { after: 100 }
            })
        );

        solved.problem.equations.forEach(eq => {
            documentChildren.push(
                new docx.Paragraph({
                    text: `  ${eq}`,
                    spacing: { after: 50 },
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

        // Difficulty level
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'Difficulty: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.difficulty.toUpperCase(),
                        color: solved.problem.difficulty === 'easy' ? '2E7D32' : 
                               solved.problem.difficulty === 'medium' ? '1976D2' : 'D32F2F'
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
            if (subpart === '') {
                documentChildren.push(
                    new docx.Paragraph({
                        text: '',
                        spacing: { after: 100 }
                    })
                );
            } else if (subpart.startsWith('  ')) {
                // Indented equation or step
                documentChildren.push(
                    new docx.Paragraph({
                        text: subpart,
                        spacing: { after: 50 },
                        indent: { left: 720 }
                    })
                );
            } else {
                documentChildren.push(
                    new docx.Paragraph({
                        text: subpart,
                        spacing: { after: 100 }
                    })
                );
            }
        });

        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'Final Answer: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.solutionFormatted,
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
            text: 'Congratulations on completing these 5 simultaneous systems problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered solving 2×2 systems using both substitution and elimination methods',
        'You\'ve learned when to use each method for maximum efficiency',
        'You\'ve practiced creating opposite coefficients through strategic multiplication',
        'You\'ve tackled 3×3 systems and learned the systematic reduction approach (3→2→1)',
        'You\'ve verified solutions by substituting into all original equations',
        'You\'ve seen real-world applications of systems of equations',
        'You\'ve learned error prevention strategies specific to systems'
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
            text: 'Key Methods Comparison:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const methodComparison = [
        'Substitution Method: Best when a variable is already isolated (like y = 2x)',
        'Elimination Method: Best when coefficients are easy to match or are already opposites',
        'Graphical Method: Best for visual understanding and verification',
        'Matrix Method: Best for computation with technology or larger systems'
    ];

    methodComparison.forEach(item => {
        documentChildren.push(
            new docx.Paragraph({
                text: `• ${item}`,
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
        'Practice more 2×2 and 3×3 systems with different coefficient patterns',
        'Explore special cases: no solution (inconsistent) and infinite solutions (dependent)',
        'Apply systems to word problems (mixture, rate, investment, age problems)',
        'Learn matrix methods and Cramer\'s rule for computational efficiency',
        'Extend to larger systems (4×4 and beyond) using technology',
        'Study linear programming and optimization problems',
        'Connect to real-world applications in engineering, economics, and science'
    ];

    nextSteps.forEach((step, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${step}`,
                spacing: { after: 100 }
            })
        );
    });

    // Additional tips
    documentChildren.push(
        new docx.Paragraph({
            text: 'Pro Tips for Success:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const proTips = [
        'Always label your equations (1), (2), (3) to stay organized',
        'For 3×3 systems, eliminate the SAME variable from two different pairs',
        'Use parentheses when substituting expressions to avoid sign errors',
        'Verify your solution in ALL original equations, not just one',
        'Choose the method that makes the problem easiest for YOU',
        'Practice both methods to build flexibility and understanding',
        'Draw graphs for 2×2 systems to visualize the solution',
        'Keep your work neat and organized - it prevents errors'
    ];

    proTips.forEach(tip => {
        documentChildren.push(
            new docx.Paragraph({
                text: `💡 ${tip}`,
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
        const filename = 'simultaneous_systems_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - 2×2 Systems (Elimination): 2 problems');
        console.log('    - 2×2 Systems (Substitution): 1 problem');
        console.log('    - 3×3 Systems: 2 problems');
        console.log('\n📄 ESTIMATED PAGES: 60-75 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • System type badge (2×2 or 3×3) and method indicator');
        console.log('  • Complete system of equations with visual highlighting');
        console.log('  • Difficulty level indicator');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Complete step-by-step solution with enhanced explanations');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Method comparison section');
        console.log('  • Verification of solutions in all equations');
        console.log('  • Geometric interpretation (2D lines or 3D planes)');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods');
        console.log('  • Historical context of systems of equations');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary');
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
