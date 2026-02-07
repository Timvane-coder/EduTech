import { EnhancedTrianglePythagoreanMathematicalWorkbook } from './triangle-pythagorean-workbook.js';
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




// ============== TRIANGLE PYTHAGOREAN - RELATED PROBLEMS GENERATOR ==============

function generateRelatedTrianglePythagoreanProblems() {
    const relatedProblems = [];

    // Problem 1: Finding Hypotenuse (Classic 3-4-5 Triple)
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Finding the Hypotenuse - Classic Pythagorean Triple',
        problem: 'A right triangle has legs of length 3 and 4. Find the length of the hypotenuse.',
        parameters: { a: 3, b: 4 },
        problemType: 'find_hypotenuse',
        context: { 
            difficulty: 'beginner', 
            topic: 'Pythagorean Theorem - Finding Hypotenuse',
            realWorld: 'Finding diagonal distances'
        },
        subparts: [
            'Given: Right triangle with legs a = 3 and b = 4',
            'Find: Hypotenuse c',
            'Formula: c = √(a² + b²)',
            'Step 1: Square leg a → 3² = 9',
            'Step 2: Square leg b → 4² = 16',
            'Step 3: Add the squares → 9 + 16 = 25',
            'Step 4: Take square root → c = √25 = 5',
            'Verification: 3² + 4² = 9 + 16 = 25 = 5² ✓',
            'Note: This is the famous 3-4-5 Pythagorean triple!'
        ],
        helper: 'Remember: square each leg, add the squares, then take the square root. The hypotenuse is always the longest side!',
        solution: 'c = 5 units',
        realWorldContext: 'Like finding the diagonal distance across a rectangular room that is 3 feet by 4 feet. The diagonal is 5 feet.',
        visualTip: 'Draw a right triangle. Mark the right angle with a small square. Label the legs 3 and 4, and the hypotenuse (opposite the right angle) as c.'
    });

    // Problem 2: Finding a Leg (Given Hypotenuse and One Leg)
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Finding a Missing Leg - Ladder Problem',
        problem: 'A 13-foot ladder leans against a wall. The base of the ladder is 5 feet from the wall. How high up the wall does the ladder reach?',
        parameters: { c: 13, a: 5 },
        problemType: 'find_leg',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Pythagorean Theorem - Finding a Leg',
            realWorld: 'Ladder safety and height calculations'
        },
        subparts: [
            'Given: Ladder length (hypotenuse) c = 13 feet, base distance a = 5 feet',
            'Find: Height up wall (missing leg) b',
            'Formula: b = √(c² - a²)',
            'Step 1: Square the hypotenuse → 13² = 169',
            'Step 2: Square the known leg → 5² = 25',
            'Step 3: Subtract → 169 - 25 = 144',
            'Step 4: Take square root → b = √144 = 12',
            'The ladder reaches 12 feet up the wall',
            'Verification: 5² + 12² = 25 + 144 = 169 = 13² ✓',
            'Note: This is the 5-12-13 Pythagorean triple!'
        ],
        helper: 'When finding a leg: square the hypotenuse, subtract the known leg squared, then take the square root. Always subtract from the larger value (c²)!',
        solution: 'The ladder reaches 12 feet up the wall',
        realWorldContext: 'This is a real ladder safety problem! The ladder forms a right triangle with the ground and wall.',
        visualTip: 'Draw the wall (vertical), ground (horizontal), and ladder (diagonal). The wall and ground meet at a right angle.',
        safetyNote: 'Ladder safety rule: base should be about 1/4 of ladder length from wall. Here: 13/4 ≈ 3.25 feet. At 5 feet, this ladder is safe!'
    });

    // Problem 3: Distance Formula Between Two Points
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Distance Between Two Points on Coordinate Plane',
        problem: 'Find the distance between points A(1, 2) and B(5, 5) on a coordinate plane.',
        parameters: { x1: 1, y1: 2, x2: 5, y2: 5 },
        problemType: 'distance_formula',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Distance Formula (Pythagorean Application)',
            realWorld: 'GPS navigation and mapping'
        },
        subparts: [
            'Given: Point A(1, 2) and Point B(5, 5)',
            'Find: Distance d between the points',
            'Formula: d = √((x₂-x₁)² + (y₂-y₁)²)',
            'Step 1: Find horizontal distance → Δx = 5 - 1 = 4',
            'Step 2: Find vertical distance → Δy = 5 - 2 = 3',
            'Step 3: Square horizontal distance → 4² = 16',
            'Step 4: Square vertical distance → 3² = 9',
            'Step 5: Add the squares → 16 + 9 = 25',
            'Step 6: Take square root → d = √25 = 5',
            'The distance is 5 units',
            'Connection: This creates a 3-4-5 triangle on the coordinate plane!'
        ],
        helper: 'The distance formula IS the Pythagorean theorem! The horizontal and vertical distances are the legs, and the direct distance is the hypotenuse.',
        solution: 'd = 5 units',
        realWorldContext: 'GPS systems use this formula to calculate straight-line distances between locations. If you walk 4 blocks east and 3 blocks north, you\'re actually 5 blocks away from where you started (as the crow flies).',
        visualTip: 'Plot both points on graph paper. Draw a horizontal line from A, then a vertical line to B. The direct diagonal from A to B is the distance.',
        coordinateNote: 'The order of subtraction doesn\'t matter because we square the result (negative squared becomes positive)!'
    });

    // Problem 4: Verifying a Right Triangle (Converse of Pythagorean Theorem)
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Verifying a Right Triangle - Converse Theorem',
        problem: 'A triangle has sides of length 8, 15, and 17. Is this a right triangle? If so, which angle is the right angle?',
        parameters: { side1: 8, side2: 15, side3: 17 },
        problemType: 'verify_right_triangle',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Converse of Pythagorean Theorem',
            realWorld: 'Construction and verifying square corners'
        },
        subparts: [
            'Given: Triangle with sides 8, 15, and 17',
            'Find: Is it a right triangle?',
            'Step 1: Identify the longest side → 17 (this would be the hypotenuse if right)',
            'Step 2: Square all sides → 8² = 64, 15² = 225, 17² = 289',
            'Step 3: Add the two smaller squares → 64 + 225 = 289',
            'Step 4: Compare with largest square → 289 = 289 ✓',
            'Conclusion: YES, this is a right triangle!',
            'The right angle is opposite the side of length 17',
            'The right angle is between the sides of length 8 and 15',
            'Note: This is the 8-15-17 Pythagorean triple!'
        ],
        helper: 'To verify a right triangle: find the longest side, square all three sides, check if (smallest)² + (middle)² = (longest)². If yes, it\'s a right triangle!',
        solution: 'Yes, it is a right triangle. The right angle is opposite the side of length 17 (between sides 8 and 15).',
        realWorldContext: 'Carpenters use this principle! To check if a corner is square, they measure 8 feet along one edge, 15 feet along the other. If the diagonal measures 17 feet, the corner is perfectly square (90°).',
        visualTip: 'Draw the triangle with the longest side (17) opposite a corner. If that corner is 90°, the triangle is right.',
        testTypes: 'If a² + b² = c² → Right triangle. If a² + b² > c² → Acute triangle. If a² + b² < c² → Obtuse triangle.'
    });

    // Problem 5: Diagonal of a Rectangle - Real World Application
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'TV Screen Diagonal - Real World Application',
        problem: 'A rectangular TV screen is 48 inches wide and 27 inches tall. What is the diagonal size of the TV (how TVs are measured)?',
        parameters: { length: 48, width: 27 },
        problemType: 'word_problem_diagonal',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Pythagorean Theorem - Diagonal Applications',
            realWorld: 'Consumer electronics and shopping'
        },
        subparts: [
            'Given: TV width (horizontal) = 48 inches, height (vertical) = 27 inches',
            'Find: Diagonal measurement (how TVs are advertised)',
            'Recognize: Rectangle diagonal forms hypotenuse of right triangle',
            'Formula: diagonal = √(width² + height²)',
            'Step 1: Square the width → 48² = 2,304',
            'Step 2: Square the height → 27² = 729',
            'Step 3: Add the squares → 2,304 + 729 = 3,033',
            'Step 4: Take square root → d = √3,033 ≈ 55.07',
            'The TV is approximately 55 inches (diagonal measurement)',
            'This would be sold as a "55-inch TV"',
            'Verification: 48² + 27² = 2,304 + 729 = 3,033 ≈ 55.07² ✓'
        ],
        helper: 'For any rectangle, the diagonal is the hypotenuse of a right triangle formed by the length and width. Square both dimensions, add them, and take the square root!',
        solution: 'The TV diagonal is approximately 55 inches (marketed as a 55" TV)',
        realWorldContext: 'This is exactly how TV sizes are measured! A "55-inch TV" means the diagonal of the screen is 55 inches. The actual width and height are smaller. This helps you compare TVs and know if one will fit in your space.',
        visualTip: 'Draw a rectangle. Draw a diagonal line from one corner to the opposite corner. This diagonal is the hypotenuse. The width and height are the two legs.',
        shoppingTip: 'When shopping for a TV: the diagonal doesn\'t tell you if it fits your space! Always check the actual width and height. A 55" TV can have different dimensions depending on its aspect ratio (16:9 vs 4:3).',
        aspectRatioNote: 'This TV has a 16:9 aspect ratio (48/27 = 1.778 ≈ 16/9), which is standard for modern HDTVs.'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveTrianglePythagoreanRelatedProblems() {
    const problems = generateRelatedTrianglePythagoreanProblems();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Triangle Pythagorean Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedTrianglePythagoreanMathematicalWorkbook({
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
            const result = workbook.solvePythagoreanProblem({
                equation: problem.problem,
                scenario: problem.scenario,
                parameters: problem.parameters,
                problemType: problem.problemType,
                context: problem.context
            });

            solvedProblems.push({
                problem: problem,
                workbook: workbook,
                result: result
            });

            console.log(`    ✓ Solution: ${result.solutionValue || 'Solved'}`);
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
    console.log('Generating Triangle Pythagorean Theorem Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Triangle Pythagorean Theorem Workbook',
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
            text: 'Finding Hypotenuse, Finding Legs, Distance Formula, and Real-World Applications',
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
            text: 'Triangle Pythagorean Theorem Problems (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const pythagoreanProblems = generateRelatedTrianglePythagoreanProblems();
    pythagoreanProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario} [${problem.difficulty}]`,
                spacing: { after: 50 }
            })
        );
        documentChildren.push(
            new docx.Paragraph({
                text: `   ${problem.problem}`,
                spacing: { after: 100 },
                indent: { left: 360 }
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
            text: 'Introduction to the Pythagorean Theorem',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'The Pythagorean Theorem is one of the most famous and useful formulas in all of mathematics. Discovered over 2,500 years ago, it relates the three sides of a right triangle in a beautiful and practical way.',
            spacing: { after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            children: [
                new docx.TextRun({
                    text: 'The Theorem: ',
                    bold: true
                }),
                new docx.TextRun({
                    text: 'In a right triangle, the square of the hypotenuse (longest side) equals the sum of the squares of the other two sides.'
                })
            ],
            spacing: { after: 150 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            children: [
                new docx.TextRun({
                    text: 'Formula: ',
                    bold: true
                }),
                new docx.TextRun({
                    text: 'a² + b² = c²',
                    italics: true
                }),
                new docx.TextRun({
                    text: '  (where c is the hypotenuse, and a and b are the legs)'
                })
            ],
            spacing: { after: 300 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'This workbook contains 5 carefully selected Pythagorean theorem problems that progressively build your understanding. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with geometric visualizations',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Common mistakes and error prevention strategies specific to each problem type',
        '• Self-check questions and thinking prompts to deepen understanding',
        '• Extensive real-world applications (construction, navigation, consumer electronics)',
        '• Alternative solution methods including Pythagorean triple recognition',
        '• Detailed verification of solutions',
        '• Historical context (from ancient Babylonians to modern GPS)',
        '• Pedagogical notes for teachers and deeper learning',
        '• Triangle visualization with labeled diagrams',
        '• Practice problems for mastery'
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
            spacing: { after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            children: [
                new docx.TextRun({
                    text: '⚠️ Key Reminder: ',
                    bold: true,
                    color: 'D32F2F'
                }),
                new docx.TextRun({
                    text: 'The Pythagorean Theorem ONLY works for RIGHT TRIANGLES (triangles with one 90° angle). The hypotenuse is always the side opposite the right angle and is always the longest side.',
                    italics: true
                })
            ],
            spacing: { after: 300 },
            shading: {
                fill: "FFEBEE",
                type: docx.ShadingType.CLEAR
            }
        })
    );

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Triangle Pythagorean Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Triangle Pythagorean Theorem Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const pythagoreanSolved = solveTrianglePythagoreanRelatedProblems();
    
    pythagoreanSolved.forEach((solved, index) => {
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

        // Problem statement box with triangle emoji
        documentChildren.push(
            new docx.Paragraph({
                text: `📐 ${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true,
                shading: {
                    fill: "E3F2FD",
                    type: docx.ShadingType.CLEAR
                }
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
                        color: solved.problem.difficulty === 'easy' ? '2E7D32' : '1565C0'
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
                    fill: "FFF9C4",
                    type: docx.ShadingType.CLEAR
                }
            })
        );

        // Visual tip if available
        if (solved.problem.visualTip) {
            documentChildren.push(
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            text: '👁️ Visual Guide: ',
                            bold: true
                        }),
                        new docx.TextRun({
                            text: solved.problem.visualTip,
                            italics: true
                        })
                    ],
                    spacing: { after: 200 },
                    shading: {
                        fill: "F3E5F5",
                        type: docx.ShadingType.CLEAR
                    }
                })
            );
        }

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

        // Special notes (safety, shopping tips, etc.)
        if (solved.problem.safetyNote) {
            documentChildren.push(
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            text: '⚠️ Safety Note: ',
                            bold: true,
                            color: 'D32F2F'
                        }),
                        new docx.TextRun({
                            text: solved.problem.safetyNote
                        })
                    ],
                    spacing: { after: 200 },
                    shading: {
                        fill: "FFEBEE",
                        type: docx.ShadingType.CLEAR
                    }
                })
            );
        }

        if (solved.problem.shoppingTip) {
            documentChildren.push(
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            text: '🛒 Shopping Tip: ',
                            bold: true,
                            color: '1976D2'
                        }),
                        new docx.TextRun({
                            text: solved.problem.shoppingTip
                        })
                    ],
                    spacing: { after: 200 },
                    shading: {
                        fill: "E3F2FD",
                        type: docx.ShadingType.CLEAR
                    }
                })
            );
        }

        if (solved.problem.testTypes) {
            documentChildren.push(
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            text: '📊 Triangle Classification: ',
                            bold: true,
                            color: '7B1FA2'
                        }),
                        new docx.TextRun({
                            text: solved.problem.testTypes
                        })
                    ],
                    spacing: { after: 300 },
                    shading: {
                        fill: "F3E5F5",
                        type: docx.ShadingType.CLEAR
                    }
                })
            );
        }

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
            const isNote = subpart.startsWith('Note:') || subpart.startsWith('Verification:');
            const isConclusion = subpart.startsWith('Conclusion:') || subpart.startsWith('The ');
            
            documentChildren.push(
                new docx.Paragraph({
                    text: subpart,
                    spacing: { after: 100 },
                    bullet: {
                        level: 0
                    },
                    shading: isNote ? {
                        fill: "FFF9C4",
                        type: docx.ShadingType.CLEAR
                    } : isConclusion ? {
                        fill: "E8F5E9",
                        type: docx.ShadingType.CLEAR
                    } : undefined
                })
            );
        });

        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: '✓ Final Answer: ',
                        bold: true,
                        color: '2E7D32'
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

    // ============== PYTHAGOREAN TRIPLES REFERENCE ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Pythagorean Triples Quick Reference',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Pythagorean triples are sets of three whole numbers that satisfy a² + b² = c². Memorizing these can help you solve problems faster and verify your answers!',
            spacing: { after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Common Pythagorean Triples:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const triples = [
        { triple: '3-4-5', note: 'The most famous! Used in construction' },
        { triple: '5-12-13', note: 'Second most common' },
        { triple: '8-15-17', note: 'Useful for larger measurements' },
        { triple: '7-24-25', note: 'Less common but still handy' },
        { triple: '6-8-10', note: '2 × (3-4-5)' },
        { triple: '9-12-15', note: '3 × (3-4-5)' },
        { triple: '12-16-20', note: '4 × (3-4-5)' },
        { triple: '10-24-26', note: '2 × (5-12-13)' }
    ];

    triples.forEach(item => {
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: `• ${item.triple}: `,
                        bold: true
                    }),
                    new docx.TextRun({
                        text: item.note,
                        italics: true
                    })
                ],
                spacing: { after: 100 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            children: [
                new docx.TextRun({
                    text: '💡 Pro Tip: ',
                    bold: true
                }),
                new docx.TextRun({
                    text: 'Any multiple of a Pythagorean triple is also a Pythagorean triple! So if you see 15-20-25, recognize it as 5×(3-4-5).',
                    italics: true
                })
            ],
            spacing: { before: 200, after: 300 },
            shading: {
                fill: "FFF9C4",
                type: docx.ShadingType.CLEAR
            }
        })
    );

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
            text: 'Congratulations on completing these 5 Pythagorean theorem problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered finding the hypotenuse when both legs are known',
        'You\'ve learned to find a missing leg when the hypotenuse and one leg are known',
        'You\'ve applied the distance formula on the coordinate plane',
        'You\'ve used the converse theorem to verify right triangles',
        'You\'ve solved real-world problems involving ladders, TV screens, and more',
        'You\'ve learned to recognize and use Pythagorean triples for faster calculations',
        'You understand when and how to apply the Pythagorean theorem'
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
            text: 'Key Formulas to Remember:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const keyFormulas = [
        '📐 Pythagorean Theorem: a² + b² = c²',
        '📏 Finding Hypotenuse: c = √(a² + b²)',
        '📏 Finding a Leg: a = √(c² - b²) or b = √(c² - a²)',
        '📍 Distance Formula: d = √((x₂-x₁)² + (y₂-y₁)²)',
        '✓ Converse Test: If a² + b² = c², then triangle is right',
        '🔺 Triangle Types: a² + b² > c² (acute), a² + b² < c² (obtuse)'
    ];

    keyFormulas.forEach(formula => {
        documentChildren.push(
            new docx.Paragraph({
                text: formula,
                spacing: { after: 100 },
                shading: {
                    fill: "E3F2FD",
                    type: docx.ShadingType.CLEAR
                }
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
        'Practice with more complex problems involving decimals and irrational numbers',
        'Explore 3D applications of the Pythagorean theorem',
        'Learn about special right triangles (45-45-90 and 30-60-90)',
        'Study trigonometry (sine, cosine, tangent) which extends these concepts',
        'Apply to real construction or design projects',
        'Explore the many proofs of the Pythagorean theorem',
        'Learn about the Law of Cosines (generalization to all triangles)'
    ];

    nextSteps.forEach((step, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${step}`,
                spacing: { after: 100 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: '',
            spacing: { after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            children: [
                new docx.TextRun({
                    text: '🎯 Final Thought: ',
                    bold: true,
                    color: '1976D2'
                }),
                new docx.TextRun({
                    text: 'The Pythagorean theorem is over 2,500 years old and is still used every day in construction, navigation, computer graphics, and countless other fields. You\'re learning one of the most practical and beautiful theorems in all of mathematics!',
                    italics: true
                })
            ],
            spacing: { after: 300 },
            shading: {
                fill: "E3F2FD",
                type: docx.ShadingType.CLEAR
            }
        })
    );

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
        const filename = 'triangle_pythagorean_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Finding Hypotenuse: 1 problem (3-4-5 triangle)');
        console.log('    - Finding a Leg: 1 problem (ladder problem with 5-12-13)');
        console.log('    - Distance Formula: 1 problem (coordinate plane)');
        console.log('    - Verifying Right Triangle: 1 problem (8-15-17)');
        console.log('    - Real-World Application: 1 problem (TV diagonal)');
        console.log('\n📄 ESTIMATED PAGES: 50-60 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with visual highlighting and triangle emoji');
        console.log('  • Difficulty level indicator');
        console.log('  • Quick helper tips and visual guides');
        console.log('  • Real-world context with practical applications');
        console.log('  • Special notes (safety tips, shopping advice, etc.)');
        console.log('  • Triangle visualization guidance');
        console.log('  • Complete step-by-step solution with enhanced explanations');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Detailed verification using Pythagorean theorem');
        console.log('  • Key concepts and geometric principles');
        console.log('  • Common mistakes specific to triangle problems');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods (including Pythagorean triples)');
        console.log('  • Historical context (from Babylonians to modern GPS)');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary');
        console.log('\n📐 BONUS SECTIONS:');
        console.log('  • Pythagorean Triples Quick Reference Guide');
        console.log('  • Formula summary sheet');
        console.log('  • Triangle classification guide');
        console.log('  • Next steps for continued learning');
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
