import { EnhancedRadicalInequalitiesWorkbook } from './radical-inequalities-workbook.js';
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

// ============== RADICAL INEQUALITIES - RELATED PROBLEMS GENERATOR ==============

function generateRelatedRadicalInequalities() {
    const relatedProblems = [];

    // Problem 1: Simple Radical Inequality (Less Than) - Easy
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Simple Radical Inequality - Less Than',
        problem: 'Solve for x: √x < 4',
        parameters: { 
            radicand: 'x', 
            constant: 4 
        },
        problemType: 'simple_radical_less_than',
        context: { 
            difficulty: 'beginner', 
            topic: 'Simple Radical Inequalities',
            realWorld: 'Finding values within a square root constraint'
        },
        subparts: [
            'Given: √x < 4',
            'Step 1: Find domain - x must be ≥ 0 for square root to be defined',
            'Domain: x ≥ 0',
            'Step 2: Since 4 > 0, we can square both sides',
            'Square both sides: (√x)² < 4²',
            'x < 16',
            'Step 3: Intersect with domain',
            'Solution: x must satisfy BOTH x ≥ 0 AND x < 16',
            'Final answer: 0 ≤ x < 16 or [0, 16)',
            'Step 4: Verify - test x = 9: √9 = 3 < 4 ✓',
            'Test boundary: √16 = 4 (not less than 4) ✓'
        ],
        helper: 'Always find the domain FIRST (radicand ≥ 0), then square both sides if the constant is positive',
        solution: '0 ≤ x < 16',
        intervalNotation: '[0, 16)',
        realWorldContext: 'Like finding safe velocity values where v = √(2gh) must stay below 4 m/s',
        keyWarnings: [
            '⚠️ CRITICAL: √x is only defined when x ≥ 0',
            '⚠️ Remember: √x is always non-negative (√x ≥ 0)',
            '⚠️ Solution must satisfy BOTH the inequality AND the domain'
        ]
    });

    // Problem 2: Simple Radical Inequality (Greater Than) - Easy
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Simple Radical Inequality - Greater Than',
        problem: 'Solve for x: √(x + 1) ≥ 3',
        parameters: { 
            radicand: 'x + 1', 
            constant: 3 
        },
        problemType: 'simple_radical_greater_equal',
        context: { 
            difficulty: 'beginner', 
            topic: 'Simple Radical Inequalities',
            realWorld: 'Finding minimum values that satisfy a square root condition'
        },
        subparts: [
            'Given: √(x + 1) ≥ 3',
            'Step 1: Find domain',
            'For √(x + 1) to be defined: x + 1 ≥ 0',
            'Domain: x ≥ -1',
            'Step 2: Since 3 > 0, we can square both sides',
            'Square both sides: (√(x + 1))² ≥ 3²',
            'x + 1 ≥ 9',
            'Step 3: Solve for x',
            'x ≥ 9 - 1',
            'x ≥ 8',
            'Step 4: Intersect with domain',
            'Since x ≥ 8 is stricter than x ≥ -1, final answer is x ≥ 8',
            'Final answer: x ≥ 8 or [8, ∞)',
            'Step 5: Verify - test x = 8: √(8 + 1) = √9 = 3 ✓',
            'Test x = 10: √(10 + 1) = √11 ≈ 3.32 > 3 ✓'
        ],
        helper: 'For "greater than or equal to", the boundary point IS included in the solution',
        solution: 'x ≥ 8',
        intervalNotation: '[8, ∞)',
        realWorldContext: 'Like finding minimum distances where √(d²) ≥ 3 meters',
        keyWarnings: [
            '⚠️ Don\'t forget to check the domain restriction first',
            '⚠️ "Greater than or equal" means the boundary is INCLUDED',
            '⚠️ Always verify your answer in the original inequality'
        ]
    });

    // Problem 3: Radical Inequality with Linear Expression - Medium
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Radical Less Than Linear Expression',
        problem: 'Solve for x: √(x + 2) < x',
        parameters: { 
            radicand: 'x + 2', 
            linearExpression: 'x' 
        },
        problemType: 'radical_linear_less',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Radical Inequalities with Variable Expressions',
            realWorld: 'Comparing square root growth to linear growth'
        },
        subparts: [
            'Given: √(x + 2) < x',
            'Step 1: Find domain of radical',
            'x + 2 ≥ 0 → x ≥ -2',
            'Step 2: CASE ANALYSIS - right side can be positive or negative',
            'Case 1: If x < 0, then right side is negative',
            '  Since √(x + 2) ≥ 0 always, inequality √(x + 2) < x cannot hold when x < 0',
            '  Case 1 gives: NO SOLUTION',
            'Case 2: If x ≥ 0, then both sides are non-negative, can square',
            '  Square both sides: (√(x + 2))² < x²',
            '  x + 2 < x²',
            '  0 < x² - x - 2',
            '  x² - x - 2 > 0',
            '  Factor: (x - 2)(x + 1) > 0',
            '  Critical points: x = -1 and x = 2',
            '  Test intervals: x < -1 or x > 2',
            '  Combined with Case 2 condition (x ≥ 0): x > 2',
            'Step 3: Combine all cases',
            'Final answer: x > 2 or (2, ∞)',
            'Step 4: Verify - test x = 3: √(3 + 2) = √5 ≈ 2.24 < 3 ✓',
            'Test x = 1: √(1 + 2) = √3 ≈ 1.73 NOT < 1 ✓'
        ],
        helper: 'When comparing radical to variable expression, use CASE ANALYSIS based on whether right side is positive or negative',
        solution: 'x > 2',
        intervalNotation: '(2, ∞)',
        realWorldContext: 'Like finding when linear growth exceeds square root growth in population models',
        keyWarnings: [
            '⚠️ CRITICAL: Must do case analysis when right side contains variable',
            '⚠️ Cannot square when right side might be negative',
            '⚠️ After squaring, you may get a polynomial inequality - use test points'
        ]
    });

    // Problem 4: Radical Inequality (Special Case - Negative Constant) - Easy
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Radical Greater Than Negative Constant',
        problem: 'Solve for x: √(2x - 3) > -1',
        parameters: { 
            radicand: '2x - 3', 
            constant: -1 
        },
        problemType: 'simple_radical_greater_than',
        context: { 
            difficulty: 'beginner', 
            topic: 'Special Cases in Radical Inequalities',
            realWorld: 'Understanding that square roots are always non-negative'
        },
        subparts: [
            'Given: √(2x - 3) > -1',
            'Step 1: Find domain',
            'For √(2x - 3) to be defined: 2x - 3 ≥ 0',
            '2x ≥ 3',
            'x ≥ 3/2',
            'Domain: x ≥ 1.5',
            'Step 2: SPECIAL CASE ANALYSIS',
            'Key insight: √(2x - 3) is ALWAYS ≥ 0 (square roots are non-negative)',
            'Since √(2x - 3) ≥ 0, and 0 > -1, we have √(2x - 3) > -1 ALWAYS',
            'Step 3: Solution',
            'The inequality is TRUE for ALL values in the domain',
            'Final answer: x ≥ 3/2 or [1.5, ∞)',
            'Step 4: Verify - test x = 2: √(2(2) - 3) = √1 = 1 > -1 ✓',
            'Test x = 5: √(2(5) - 3) = √7 ≈ 2.65 > -1 ✓'
        ],
        helper: 'When radical is compared to negative number: √x > negative is ALWAYS true on domain; √x < negative has NO solution',
        solution: 'x ≥ 3/2 (entire domain)',
        intervalNotation: '[1.5, ∞)',
        realWorldContext: 'Like verifying that any physical velocity (always positive) exceeds a negative threshold',
        keyWarnings: [
            '⚠️ KEY CONCEPT: √x is ALWAYS ≥ 0 (never negative)',
            '⚠️ √x > negative → entire domain is solution',
            '⚠️ √x < negative → no solution exists'
        ]
    });

    // Problem 5: Radical Inequality (Two-Step) - Medium
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Radical Inequality with Operations',
        problem: 'Solve for x: √(3x - 2) ≤ 5',
        parameters: { 
            radicand: '3x - 2', 
            constant: 5 
        },
        problemType: 'simple_radical_less_equal',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Multi-Step Radical Inequalities',
            realWorld: 'Constraining values with maximum square root limits'
        },
        subparts: [
            'Given: √(3x - 2) ≤ 5',
            'Step 1: Find domain',
            'For √(3x - 2) to be defined: 3x - 2 ≥ 0',
            '3x ≥ 2',
            'x ≥ 2/3',
            'Domain: x ≥ 2/3 (approximately 0.67)',
            'Step 2: Since 5 > 0, we can square both sides',
            'Square both sides: (√(3x - 2))² ≤ 5²',
            '3x - 2 ≤ 25',
            'Step 3: Solve for x',
            '3x ≤ 25 + 2',
            '3x ≤ 27',
            'x ≤ 9',
            'Step 4: Intersect with domain',
            'Need BOTH x ≥ 2/3 AND x ≤ 9',
            'Final answer: 2/3 ≤ x ≤ 9 or [2/3, 9]',
            'Step 5: Verify',
            'Test x = 5: √(3(5) - 2) = √13 ≈ 3.61 ≤ 5 ✓',
            'Test boundary x = 9: √(3(9) - 2) = √25 = 5 ✓',
            'Test boundary x = 2/3: √(3(2/3) - 2) = √0 = 0 ≤ 5 ✓'
        ],
        helper: 'For inequalities with operations on the radicand, solve step-by-step after squaring, then intersect with domain',
        solution: '2/3 ≤ x ≤ 9',
        intervalNotation: '[2/3, 9] or [0.67, 9]',
        realWorldContext: 'Like finding safe operating ranges where √(3P - 2) must stay at or below 5 units',
        keyWarnings: [
            '⚠️ Domain restriction comes from radicand ≥ 0',
            '⚠️ After solving, ALWAYS intersect with domain',
            '⚠️ Test BOTH boundary points in verification'
        ]
    });

    return relatedProblems;
}

// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveRadicalInequalitiesRelatedProblems() {
    const problems = generateRelatedRadicalInequalities();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Radical Inequality Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedRadicalInequalitiesWorkbook({
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
                equation: problem.problem.split(': ')[1] || problem.problem,
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

            console.log(`    ✓ Solution: ${problem.solution}`);
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
    console.log('Generating Radical Inequalities Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Radical Inequalities Workbook',
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
            text: 'Simple Radical Inequalities, Linear Comparisons, and Special Cases',
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

    // ============== CRITICAL CONCEPTS ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Critical Concepts - READ FIRST!',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 },
            shading: {
                fill: "FFE6E6",
                type: docx.ShadingType.CLEAR
            }
        })
    );

    const criticalConcepts = [
        '⚠️ ALWAYS find domain FIRST: radicand ≥ 0',
        '⚠️ Remember: √x is ALWAYS ≥ 0 (never negative)',
        '⚠️ √x > negative → entire domain is solution',
        '⚠️ √x < negative → NO solution',
        '⚠️ Can only square when BOTH sides are non-negative',
        '⚠️ Squaring can introduce extraneous solutions - ALWAYS verify',
        '⚠️ Solution must satisfy BOTH inequality AND domain',
        '⚠️ Use case analysis when comparing to variable expression'
    ];

    criticalConcepts.forEach(concept => {
        documentChildren.push(
            new docx.Paragraph({
                text: concept,
                spacing: { after: 100 },
                bold: true,
                color: 'CC0000'
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: '',
            spacing: { after: 400 }
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
            text: 'Radical Inequalities (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const radicalProblems = generateRelatedRadicalInequalities();
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
            text: 'This workbook contains 5 carefully selected radical inequality problems that progressively build your understanding. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed explanations',
        '• Domain analysis (CRITICAL for radical inequalities)',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Common mistakes and error prevention tips (especially squaring issues)',
        '• Self-check questions and thinking prompts',
        '• Real-world applications from physics, engineering, and finance',
        '• Case analysis for variable expressions',
        '• Alternative solution methods',
        '• Comprehensive verification of solutions',
        '• Special case handling (negative constants, etc.)',
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

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Radical Inequalities Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Radical Inequalities Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const radicalSolved = solveRadicalInequalitiesRelatedProblems();
    
    radicalSolved.forEach((solved, index) => {
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

        // Key warnings
        if (solved.problem.keyWarnings && solved.problem.keyWarnings.length > 0) {
            documentChildren.push(
                new docx.Paragraph({
                    text: '⚠️ Key Warnings:',
                    heading: docx.HeadingLevel.HEADING_3,
                    spacing: { before: 200, after: 100 },
                    color: 'CC0000'
                })
            );

            solved.problem.keyWarnings.forEach(warning => {
                documentChildren.push(
                    new docx.Paragraph({
                        text: warning,
                        spacing: { after: 80 },
                        color: 'CC0000',
                        shading: {
                            fill: "FFE6E6",
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
                spacing: { before: 200, after: 100 },
                shading: {
                    fill: "E8F5E9",
                    type: docx.ShadingType.CLEAR
                }
            })
        );

        // Interval notation
        if (solved.problem.intervalNotation) {
            documentChildren.push(
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            text: 'Interval Notation: ',
                            bold: true
                        }),
                        new docx.TextRun({
                            text: solved.problem.intervalNotation,
                            bold: true,
                            color: '1565C0'
                        })
                    ],
                    spacing: { after: 400 },
                    shading: {
                        fill: "E3F2FD",
                        type: docx.ShadingType.CLEAR
                    }
                })
            );
        }
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
            text: 'Congratulations on completing these 5 radical inequality problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered domain restrictions (radicand ≥ 0)',
        'You understand that √x is always non-negative',
        'You\'ve learned when you can safely square both sides',
        'You\'ve practiced case analysis for variable expressions',
        'You know how to handle special cases (negative constants)',
        'You can identify and avoid extraneous solutions',
        'You\'ve seen real-world applications in physics and engineering'
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
        '🔑 ALWAYS find domain FIRST before solving',
        '🔑 Remember √x ≥ 0 always - use this for special cases',
        '🔑 Only square when both sides are non-negative',
        '🔑 Use case analysis for variable expressions',
        '🔑 ALWAYS verify solutions in original inequality',
        '🔑 Squaring can create extraneous solutions'
    ];

    keyTakeaways.forEach(takeaway => {
        documentChildren.push(
            new docx.Paragraph({
                text: takeaway,
                spacing: { after: 100 },
                bold: true
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
        'Practice compound radical inequalities (multiple radicals)',
        'Explore radical inequalities with polynomial expressions',
        'Try radical inequalities with rational expressions',
        'Combine radicals with absolute values',
        'Apply to real-world physics and engineering problems',
        'Study systems of radical inequalities'
    ];

    nextSteps.forEach((step, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${step}`,
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
        const filename = 'radical_inequalities_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Simple Radical Inequalities: 3 problems');
        console.log('    - Radical with Linear Expression: 1 problem');
        console.log('    - Special Cases: 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 50-60 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and visual highlighting');
        console.log('  • Critical warnings about domain, squaring, and common mistakes');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context from physics, engineering, and science');
        console.log('  • Complete step-by-step solution with domain analysis');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Case analysis for variable expressions (when applicable)');
        console.log('  • Special case handling (negative constants, etc.)');
        console.log('  • Comprehensive verification with extraneous solution checks');
        console.log('  • Key concepts and radical properties');
        console.log('  • Common mistakes in radical inequalities');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods (graphical, numerical, etc.)');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary with interval notation');
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
