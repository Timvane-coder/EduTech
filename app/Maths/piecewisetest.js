import { EnhancedPiecewiseLinearMathematicalWorkbook } from './piecewise-linear-workbook.js';
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


// ============== PIECEWISE LINEAR FUNCTIONS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedPiecewiseLinearProblems() {
    const relatedProblems = [];

    // Problem 1: Evaluate Two-Piece Function (Easy)
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Evaluating a Two-Piece Function',
        problem: 'Evaluate f(4) where f(x) = { 2x + 1 if x < 5, x + 6 if x ≥ 5 }',
        pieces: [
            { expression: '2x + 1', condition: 'x < 5' },
            { expression: 'x + 6', condition: 'x ≥ 5' }
        ],
        evaluateAt: 4,
        taskType: 'evaluate_two_piece',
        context: { 
            difficulty: 'beginner', 
            topic: 'Piecewise Function Evaluation',
            realWorld: 'Like choosing which pricing tier applies based on quantity'
        },
        subparts: [
            'Given: f(x) = { 2x + 1 if x < 5, x + 6 if x ≥ 5 }',
            'Evaluate at: x = 4',
            'Step 1: Check which condition x = 4 satisfies',
            '  • Is 4 < 5? YES ✓',
            '  • Is 4 ≥ 5? NO',
            'Step 2: Use the first piece: f(x) = 2x + 1',
            'Step 3: Substitute x = 4',
            '  f(4) = 2(4) + 1',
            '  f(4) = 8 + 1',
            '  f(4) = 9',
            'Answer: f(4) = 9'
        ],
        helper: 'First check which condition your x-value satisfies, then use ONLY that piece\'s formula',
        solution: 'f(4) = 9',
        realWorldContext: 'Like calculating shipping cost: one rate for packages under 5 lbs, another for 5+ lbs'
    });

    // Problem 2: Check Continuity at Boundary (Medium)
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Checking Continuity at a Boundary Point',
        problem: 'Check if f(x) = { x + 3 if x < 2, 2x + 1 if x ≥ 2 } is continuous at x = 2',
        pieces: [
            { expression: 'x + 3', condition: 'x < 2' },
            { expression: '2x + 1', condition: 'x ≥ 2' }
        ],
        evaluateAt: null,
        taskType: 'check_continuity',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Continuity of Piecewise Functions',
            realWorld: 'Checking if a pricing structure has smooth transitions or sudden jumps',
            checkContinuity: true
        },
        subparts: [
            'Given: f(x) = { x + 3 if x < 2, 2x + 1 if x ≥ 2 }',
            'Check continuity at: x = 2',
            'Step 1: Calculate left-hand limit (approaching from left)',
            '  lim[x→2⁻] f(x) = lim[x→2⁻] (x + 3) = 2 + 3 = 5',
            'Step 2: Calculate right-hand limit (approaching from right)',
            '  lim[x→2⁺] f(x) = lim[x→2⁺] (2x + 1) = 2(2) + 1 = 5',
            'Step 3: Find f(2) using the piece where x = 2 belongs',
            '  Since 2 ≥ 2 is true, use second piece',
            '  f(2) = 2(2) + 1 = 5',
            'Step 4: Compare all three values',
            '  Left limit = 5',
            '  f(2) = 5',
            '  Right limit = 5',
            '  All three are equal ✓',
            'Answer: CONTINUOUS at x = 2'
        ],
        helper: 'For continuity, check if left limit = f(a) = right limit at the boundary point',
        solution: 'Continuous at x = 2',
        realWorldContext: 'Like checking if a tax system transitions smoothly between brackets without sudden jumps'
    });

    // Problem 3: Graph Two-Piece Function (Medium)
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Graphing a Two-Piece Function',
        problem: 'Graph f(x) = { -x + 4 if x ≤ 2, 2x - 2 if x > 2 }',
        pieces: [
            { expression: '-x + 4', condition: 'x ≤ 2' },
            { expression: '2x - 2', condition: 'x > 2' }
        ],
        evaluateAt: null,
        taskType: 'graph_piecewise',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Graphing Piecewise Functions',
            realWorld: 'Visualizing how rates or rules change at different thresholds',
            graph: true
        },
        subparts: [
            'Given: f(x) = { -x + 4 if x ≤ 2, 2x - 2 if x > 2 }',
            'Piece 1: y = -x + 4 for x ≤ 2',
            '  • Slope: m = -1 (decreasing)',
            '  • y-intercept: b = 4',
            '  • Domain: x ≤ 2 (left side including x = 2)',
            '  • At x = 2: y = -2 + 4 = 2 → Point (2, 2) with CLOSED circle',
            'Piece 2: y = 2x - 2 for x > 2',
            '  • Slope: m = 2 (increasing)',
            '  • y-intercept: b = -2',
            '  • Domain: x > 2 (right side excluding x = 2)',
            '  • At x = 2: y = 2(2) - 2 = 2 → Point (2, 2) with OPEN circle',
            'Graphing instructions:',
            '  1. Draw first line segment ending at closed circle (2, 2)',
            '  2. Draw second line segment starting just after open circle (2, 2)',
            '  3. Note: Discontinuous at x = 2 (open circle on second piece)',
            'Answer: V-shaped graph with discontinuity at x = 2'
        ],
        helper: 'Graph each piece only on its domain; use closed circles (●) for ≤ or ≥, open circles (○) for < or >',
        solution: 'Two line segments meeting at x = 2 with jump discontinuity',
        realWorldContext: 'Like graphing parking rates: one rate up to 2 hours, different rate after 2 hours'
    });

    // Problem 4: Solve Piecewise Equation (Hard)
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Solving an Equation with Piecewise Function',
        problem: 'Solve f(x) = 7 where f(x) = { 3x + 1 if x < 3, x + 4 if x ≥ 3 }',
        pieces: [
            { expression: '3x + 1', condition: 'x < 3' },
            { expression: 'x + 4', condition: 'x ≥ 3' }
        ],
        evaluateAt: null,
        taskType: 'solve_equation',
        context: { 
            difficulty: 'advanced', 
            topic: 'Solving Equations with Piecewise Functions',
            realWorld: 'Finding what input gives a desired output in systems with different rules',
            solveFor: 7
        },
        parameters: { solveFor: 7 },
        subparts: [
            'Given: f(x) = { 3x + 1 if x < 3, x + 4 if x ≥ 3 }',
            'Solve: f(x) = 7',
            'Step 1: Solve using Piece 1 (3x + 1 = 7 where x < 3)',
            '  3x + 1 = 7',
            '  3x = 6',
            '  x = 2',
            '  Check domain: Is 2 < 3? YES ✓',
            '  x = 2 is VALID from Piece 1',
            'Step 2: Solve using Piece 2 (x + 4 = 7 where x ≥ 3)',
            '  x + 4 = 7',
            '  x = 3',
            '  Check domain: Is 3 ≥ 3? YES ✓',
            '  x = 3 is VALID from Piece 2',
            'Step 3: Verify solutions',
            '  For x = 2: f(2) = 3(2) + 1 = 7 ✓',
            '  For x = 3: f(3) = 3 + 4 = 7 ✓',
            'Answer: x = 2 and x = 3 (two solutions)'
        ],
        helper: 'Solve the equation separately on each piece, then check if each solution is in that piece\'s domain',
        solution: 'x = 2 and x = 3',
        realWorldContext: 'Like finding all purchase quantities that result in the same total cost under different pricing tiers'
    });

    // Problem 5: Three-Piece Function Evaluation (Hard)
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Evaluating a Three-Piece Function',
        problem: 'Evaluate g(5) where g(x) = { x - 1 if x < 2, 5 if 2 ≤ x < 6, 2x - 5 if x ≥ 6 }',
        pieces: [
            { expression: 'x - 1', condition: 'x < 2' },
            { expression: '5', condition: '2 ≤ x < 6' },
            { expression: '2x - 5', condition: 'x ≥ 6' }
        ],
        evaluateAt: 5,
        taskType: 'evaluate_three_piece',
        context: { 
            difficulty: 'advanced', 
            topic: 'Multi-Piece Function Evaluation',
            realWorld: 'Like tax systems with multiple brackets'
        },
        subparts: [
            'Given: g(x) = { x - 1 if x < 2, 5 if 2 ≤ x < 6, 2x - 5 if x ≥ 6 }',
            'Evaluate at: x = 5',
            'Step 1: Check which condition x = 5 satisfies',
            '  • Is 5 < 2? NO',
            '  • Is 2 ≤ 5 < 6? YES ✓ (5 is between 2 and 6)',
            '  • Is 5 ≥ 6? NO',
            'Step 2: Use the second piece: g(x) = 5',
            'Step 3: This is a constant function on this interval',
            '  g(5) = 5',
            'Note: The middle piece is a horizontal line (constant value)',
            'Answer: g(5) = 5'
        ],
        helper: 'With multiple pieces, systematically check each condition until you find which one the x-value satisfies',
        solution: 'g(5) = 5',
        realWorldContext: 'Like a flat-rate parking fee between 2-6 hours, with different rates outside that range'
    });

    return relatedProblems;
}


// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solvePiecewiseLinearRelatedProblems() {
    const problems = generateRelatedPiecewiseLinearProblems();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Piecewise Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedPiecewiseLinearMathematicalWorkbook({
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
            const result = workbook.solvePiecewiseProblem({
                pieces: problem.pieces,
                evaluateAt: problem.evaluateAt,
                taskType: problem.taskType,
                parameters: problem.parameters || {},
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

async function generateComprehensivePiecewiseDocument() {
    console.log('Generating Piecewise Linear Functions Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Piecewise Linear Functions Workbook',
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
            text: 'Evaluation, Continuity, Graphing, and Solving',
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
            text: 'Piecewise Linear Functions (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const piecewiseProblems = generateRelatedPiecewiseLinearProblems();
    piecewiseProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario} [${problem.difficulty}]`,
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
            text: 'This workbook contains 5 carefully selected piecewise linear function problems that progressively build your understanding of functions with different rules in different domains. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed explanations',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Domain condition checking and piece selection strategies',
        '• Endpoint notation and continuity analysis',
        '• Common mistakes and error prevention tips',
        '• Self-check questions and thinking prompts',
        '• Real-world applications (tax brackets, pricing tiers, shipping costs)',
        '• Alternative solution methods',
        '• Verification of solutions',
        '• Pedagogical notes for deeper understanding',
        '• Graphing instructions with endpoint notation'
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
            text: 'What Makes Piecewise Functions Special?',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const specialPoints = [
        'Different formulas apply in different parts of the domain',
        'Must check conditions to determine which piece to use',
        'Graphs consist of multiple line segments with specific endpoints',
        'May be continuous (smooth) or discontinuous (jumps/gaps)',
        'Model real-world situations with thresholds and tiers',
        'Require careful attention to inequality symbols (< vs ≤)'
    ];

    specialPoints.forEach(point => {
        documentChildren.push(
            new docx.Paragraph({
                text: `• ${point}`,
                spacing: { after: 100 }
            })
        );
    });

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Piecewise Linear Functions Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Piecewise Linear Functions Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const piecewiseSolved = solvePiecewiseLinearRelatedProblems();
    
    piecewiseSolved.forEach((solved, index) => {
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
        const difficultyColor = 
            solved.problem.difficulty === 'easy' ? '2E7D32' :
            solved.problem.difficulty === 'medium' ? 'F57C00' :
            '1976D2';

        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'Difficulty: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.difficulty.toUpperCase(),
                        color: difficultyColor
                    })
                ],
                spacing: { after: 100 }
            })
        );

        // Problem Type
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'Type: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.context.topic
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

        // Display piecewise function structure
        documentChildren.push(
            new docx.Paragraph({
                text: 'Piecewise Function Structure:',
                heading: docx.HeadingLevel.HEADING_3,
                spacing: { before: 200, after: 100 }
            })
        );

        solved.problem.pieces.forEach((piece, pieceIndex) => {
            documentChildren.push(
                new docx.Paragraph({
                    text: `Piece ${pieceIndex + 1}: ${piece.expression} when ${piece.condition}`,
                    spacing: { after: 100 },
                    shading: {
                        fill: pieceIndex % 2 === 0 ? "F0F4FF" : "FFF8F0",
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
            const isIndented = subpart.startsWith('  ');
            documentChildren.push(
                new docx.Paragraph({
                    text: subpart.trim(),
                    spacing: { after: 100 },
                    indent: isIndented ? { left: 720 } : undefined
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

        // Key Concepts for this problem
        documentChildren.push(
            new docx.Paragraph({
                text: 'Key Concepts Demonstrated:',
                heading: docx.HeadingLevel.HEADING_3,
                spacing: { before: 300, after: 100 }
            })
        );

        const keyConcepts = getKeyConceptsForProblem(solved.problem.taskType);
        keyConcepts.forEach(concept => {
            documentChildren.push(
                new docx.Paragraph({
                    text: `✓ ${concept}`,
                    spacing: { after: 100 }
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
            text: 'Congratulations on completing these 5 piecewise linear function problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve practiced evaluating piecewise functions by checking conditions',
        'You\'ve learned to check continuity at boundary points',
        'You\'ve mastered graphing with proper endpoint notation (open vs closed circles)',
        'You\'ve solved equations across multiple pieces with domain validation',
        'You\'ve worked with two-piece and three-piece functions',
        'You\'ve seen real-world applications like tax brackets and pricing tiers'
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
            text: 'Core Skills Mastered:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const coreSkills = [
        '📌 Condition Checking: Determining which piece applies to a given x-value',
        '📌 Endpoint Notation: Using open (○) and closed (●) circles correctly',
        '📌 Continuity Analysis: Checking left limit, function value, and right limit',
        '📌 Domain Restriction: Understanding that each piece has a specific domain',
        '📌 Multi-Piece Navigation: Working with functions that have 2, 3, or more pieces',
        '📌 Solution Validation: Checking that solutions belong to the correct piece\'s domain'
    ];

    coreSkills.forEach(skill => {
        documentChildren.push(
            new docx.Paragraph({
                text: skill,
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
        'Practice more complex piecewise functions with quadratic or exponential pieces',
        'Explore absolute value functions as special piecewise functions',
        'Study step functions (floor and ceiling functions)',
        'Apply piecewise functions to real-world optimization problems',
        'Learn about piecewise-defined derivatives in calculus',
        'Create your own piecewise functions from real-world scenarios'
    ];

    nextSteps.forEach((step, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${step}`,
                spacing: { after: 100 }
            })
        );
    });

    // ============== ADDITIONAL RESOURCES ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Common Pitfalls to Avoid:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 400, after: 100 }
        })
    );

    const pitfalls = [
        '❌ Using multiple pieces at once instead of just one',
        '❌ Misreading < vs ≤ in conditions',
        '❌ Forgetting to check which piece owns the boundary point',
        '❌ Extending graph beyond a piece\'s domain',
        '❌ Using wrong circle type at endpoints (open vs closed)',
        '❌ Accepting solutions without checking domain validity',
        '❌ Assuming continuity without proper verification'
    ];

    pitfalls.forEach(pitfall => {
        documentChildren.push(
            new docx.Paragraph({
                text: pitfall,
                spacing: { after: 100 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: 'Pro Tips for Success:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const proTips = [
        '✨ Always check conditions BEFORE substituting into formulas',
        '✨ Draw a number line to visualize which piece applies where',
        '✨ Use different colors when graphing different pieces',
        '✨ Create a checklist when solving: check all pieces, validate all solutions',
        '✨ Practice with real-world examples to build intuition',
        '✨ When in doubt about continuity, calculate all three values explicitly'
    ];

    proTips.forEach(tip => {
        documentChildren.push(
            new docx.Paragraph({
                text: tip,
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
        const filename = 'piecewise_linear_functions_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Evaluation Problems: 2 problems');
        console.log('    - Continuity Check: 1 problem');
        console.log('    - Graphing Problem: 1 problem');
        console.log('    - Equation Solving: 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 45-55 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and piecewise structure');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Complete step-by-step solution with enhanced explanations');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Condition checking and piece selection strategies');
        console.log('  • Endpoint notation and continuity analysis');
        console.log('  • Verification of solutions with domain validation');
        console.log('  • Key concepts and learning objectives');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary');
        console.log('='.repeat(80) + '\n');
    } catch (error) {
        console.error(`\n❌ Error saving document: ${error.message}`);
        console.error(error.stack);
    }
}


// ============== HELPER FUNCTION ==============

function getKeyConceptsForProblem(taskType) {
    const conceptMap = {
        'evaluate_two_piece': [
            'Checking which condition an x-value satisfies',
            'Using only the appropriate piece for evaluation',
            'Understanding inequality symbols (< vs ≤)',
            'Substitution and simplification'
        ],
        'check_continuity': [
            'Calculating left-hand and right-hand limits',
            'Finding the function value at a boundary point',
            'Comparing all three values for continuity',
            'Identifying continuous vs discontinuous functions'
        ],
        'graph_piecewise': [
            'Graphing linear functions on restricted domains',
            'Using open circles (○) for < or >',
            'Using closed circles (●) for ≤ or ≥',
            'Visualizing discontinuities on a graph'
        ],
        'solve_equation': [
            'Solving equations on each piece separately',
            'Validating solutions against domain conditions',
            'Finding multiple solutions across different pieces',
            'Systematic piece-by-piece approach'
        ],
        'evaluate_three_piece': [
            'Working with multi-piece functions',
            'Checking compound conditions (e.g., 2 ≤ x < 6)',
            'Understanding constant functions within pieces',
            'Systematic condition checking'
        ]
    };

    return conceptMap[taskType] || [
        'Understanding piecewise function structure',
        'Applying appropriate techniques',
        'Verifying results'
    ];
}


// ============== RUN THE DOCUMENT GENERATION ==============

generateComprehensivePiecewiseDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});
