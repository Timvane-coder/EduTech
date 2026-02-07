Here's the complete code for polynomial graphing related problem generator with solver function and document creation:
import { EnhancedPolynomialGraphingWorkbook } from './polynomial-graphing-workbook.js';
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




// ============== POLYNOMIAL GRAPHING - RELATED PROBLEMS GENERATOR ==============

function generateRelatedPolynomialGraphingProblems() {
    const relatedProblems = [];

    // Problem 1: Simple Quadratic (Degree 2) - Factored Form
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Quadratic Polynomial - Factored Form',
        problem: 'Graph the polynomial: f(x) = (x - 2)(x + 3)',
        parameters: {
            degree: 2,
            leadingCoeff: 1,
            zeros: [2, -3],
            multiplicities: [1, 1],
            factored: '(x - 2)(x + 3)'
        },
        problemType: 'factored_form',
        context: {
            difficulty: 'beginner',
            topic: 'Graphing Quadratic Polynomials',
            realWorld: 'Modeling parabolic motion like projectile paths'
        },
        subparts: [
            'Given: f(x) = (x - 2)(x + 3)',
            'Step 1: Identify degree = 2 (quadratic), leading coefficient = 1',
            'Step 2: End behavior: Even degree, positive leading coeff → both ends UP ↗...↗',
            'Step 3: Find zeros: x = 2 and x = -3',
            'Step 4: Both multiplicities = 1 (odd) → graph CROSSES at both zeros',
            'Step 5: Y-intercept: f(0) = (0-2)(0+3) = -6, point (0, -6)',
            'Step 6: Max turning points = degree - 1 = 2 - 1 = 1 (the vertex)',
            'Step 7: Sketch smooth parabola opening upward, crossing at x = -3 and x = 2',
            'Step 8: Verify: smooth U-shape, crosses x-axis twice, has 1 turning point (minimum)'
        ],
        helper: 'For quadratics in factored form, zeros are immediately visible. Graph is a parabola.',
        keyFeatures: {
            zeros: [2, -3],
            yIntercept: -6,
            endBehavior: 'both up',
            turningPoints: 1,
            shape: 'parabola opening upward'
        },
        realWorldContext: 'Quadratics model projectile motion, profit functions, and area optimization problems'
    });

    // Problem 2: Cubic Polynomial - Standard Form
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Cubic Polynomial - Multiple Zeros',
        problem: 'Graph the polynomial: f(x) = x³ - 4x',
        parameters: {
            degree: 3,
            leadingCoeff: 1,
            zeros: [0, 2, -2],
            multiplicities: [1, 1, 1],
            factored: 'x(x - 2)(x + 2)'
        },
        problemType: 'cubic',
        context: {
            difficulty: 'intermediate',
            topic: 'Graphing Cubic Polynomials',
            realWorld: 'Modeling volume, growth rates, and engineering curves'
        },
        subparts: [
            'Given: f(x) = x³ - 4x',
            'Step 1: Factor: f(x) = x(x² - 4) = x(x - 2)(x + 2)',
            'Step 2: Degree = 3 (cubic), leading coefficient = 1',
            'Step 3: End behavior: Odd degree, positive coeff → left DOWN, right UP ↘...↗',
            'Step 4: Zeros: x = 0, x = 2, x = -2',
            'Step 5: All multiplicities = 1 (odd) → graph CROSSES at all three zeros',
            'Step 6: Y-intercept: f(0) = 0, point (0, 0)',
            'Step 7: Max turning points = 3 - 1 = 2',
            'Step 8: Sketch: starts low left, crosses at x = -2, rises to local max,',
            '        falls to local min, crosses at x = 0, rises and crosses at x = 2',
            'Step 9: Verify: S-shaped curve, 3 x-intercepts, 2 turning points'
        ],
        helper: 'Factor out common terms first. Cubic functions have characteristic S-shape when all zeros are distinct.',
        keyFeatures: {
            zeros: [0, 2, -2],
            yIntercept: 0,
            endBehavior: 'left down, right up',
            turningPoints: 2,
            shape: 'S-shaped cubic'
        },
        realWorldContext: 'Cubic polynomials model chemical reactions, population growth with limiting factors, and cost functions'
    });

    // Problem 3: Quartic with Even Multiplicity - Touch and Turn
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Quartic Polynomial - Even Multiplicity Zero',
        problem: 'Graph the polynomial: f(x) = -(x - 1)²(x + 2)',
        parameters: {
            degree: 3,
            leadingCoeff: -1,
            zeros: [1, -2],
            multiplicities: [2, 1],
            factored: '-(x - 1)²(x + 2)'
        },
        problemType: 'factored_form',
        context: {
            difficulty: 'intermediate',
            topic: 'Multiplicity and Graph Behavior',
            realWorld: 'Modeling systems with repeated equilibrium points'
        },
        subparts: [
            'Given: f(x) = -(x - 1)²(x + 2)',
            'Step 1: Degree = 2 + 1 = 3 (cubic), leading coefficient = -1',
            'Step 2: End behavior: Odd degree, NEGATIVE coeff → left UP, right DOWN ↗...↘',
            'Step 3: Zeros: x = 1 (multiplicity 2) and x = -2 (multiplicity 1)',
            'Step 4: Zero behavior:',
            '        At x = 1: multiplicity 2 (EVEN) → graph TOUCHES and turns',
            '        At x = -2: multiplicity 1 (ODD) → graph CROSSES',
            'Step 5: Y-intercept: f(0) = -(0-1)²(0+2) = -(1)(2) = -2, point (0, -2)',
            'Step 6: Max turning points = 3 - 1 = 2',
            'Step 7: Sketch: starts high left, crosses down at x = -2,',
            '        rises and touches x-axis at x = 1 (turns around), then falls right',
            'Step 8: Verify: crosses at x = -2, touches at x = 1, negative leading coeff'
        ],
        helper: 'EVEN multiplicity = touch and turn (like a bounce). ODD multiplicity = cross through.',
        keyFeatures: {
            zeros: [1, -2],
            yIntercept: -2,
            endBehavior: 'left up, right down',
            turningPoints: 2,
            shape: 'cubic with bounce at x = 1'
        },
        realWorldContext: 'Systems with repeated roots appear in damped oscillations and optimization problems with constraints'
    });

    // Problem 4: Quartic (Degree 4) - All Distinct Zeros
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Quartic Polynomial - Four Distinct Zeros',
        problem: 'Graph the polynomial: f(x) = (x + 2)(x + 1)(x - 1)(x - 3)',
        parameters: {
            degree: 4,
            leadingCoeff: 1,
            zeros: [-2, -1, 1, 3],
            multiplicities: [1, 1, 1, 1],
            factored: '(x + 2)(x + 1)(x - 1)(x - 3)'
        },
        problemType: 'factored_form',
        context: {
            difficulty: 'advanced',
            topic: 'Graphing Higher-Degree Polynomials',
            realWorld: 'Complex systems with multiple equilibrium points'
        },
        subparts: [
            'Given: f(x) = (x + 2)(x + 1)(x - 1)(x - 3)',
            'Step 1: Degree = 4 (quartic), leading coefficient = 1',
            'Step 2: End behavior: Even degree, positive coeff → both ends UP ↗...↗',
            'Step 3: Zeros: x = -2, x = -1, x = 1, x = 3',
            'Step 4: All multiplicities = 1 (odd) → graph CROSSES at all four zeros',
            'Step 5: Y-intercept: f(0) = (2)(1)(-1)(-3) = 6, point (0, 6)',
            'Step 6: Max turning points = 4 - 1 = 3',
            'Step 7: Sketch: starts high left, crosses down at x = -2, rises to local max,',
            '        crosses down at x = -1, rises to local max, crosses down at x = 1,',
            '        rises to local min, crosses up at x = 3, continues up right',
            'Step 8: Verify: W-shaped curve, 4 x-intercepts, 3 turning points, both ends up'
        ],
        helper: 'Quartic with 4 distinct zeros creates W-shape. Track sign changes between zeros.',
        keyFeatures: {
            zeros: [-2, -1, 1, 3],
            yIntercept: 6,
            endBehavior: 'both up',
            turningPoints: 3,
            shape: 'W-shaped quartic'
        },
        realWorldContext: 'Quartic polynomials model beam deflection in engineering, complex economic models, and multi-stage chemical reactions'
    });

    // Problem 5: Higher Multiplicity - Flatter Approach
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Polynomial with Higher Multiplicity',
        problem: 'Graph the polynomial: f(x) = x²(x - 3)³',
        parameters: {
            degree: 5,
            leadingCoeff: 1,
            zeros: [0, 3],
            multiplicities: [2, 3],
            factored: 'x²(x - 3)³'
        },
        problemType: 'factored_form',
        context: {
            difficulty: 'advanced',
            topic: 'Higher Multiplicity Behavior',
            realWorld: 'Systems with repeated critical points and varying rates of change'
        },
        subparts: [
            'Given: f(x) = x²(x - 3)³',
            'Step 1: Degree = 2 + 3 = 5 (quintic), leading coefficient = 1',
            'Step 2: End behavior: Odd degree, positive coeff → left DOWN, right UP ↘...↗',
            'Step 3: Zeros: x = 0 (multiplicity 2) and x = 3 (multiplicity 3)',
            'Step 4: Zero behavior:',
            '        At x = 0: multiplicity 2 (EVEN) → TOUCHES, flatter approach',
            '        At x = 3: multiplicity 3 (ODD) → CROSSES, flatter than simple cross',
            'Step 5: Y-intercept: f(0) = 0, point (0, 0)',
            'Step 6: Max turning points = 5 - 1 = 4',
            'Step 7: Higher multiplicity means FLATTER approach to x-axis at zeros',
            'Step 8: Sketch: starts low left, rises and touches flatly at x = 0,',
            '        falls to local min, rises and crosses flatly at x = 3, continues up',
            'Step 9: Verify: flatter at both zeros, touches at x = 0, crosses at x = 3'
        ],
        helper: 'Higher multiplicity = flatter approach to x-axis. Multiplicity 2 = parabolic touch, multiplicity 3 = cubic-like cross.',
        keyFeatures: {
            zeros: [0, 3],
            yIntercept: 0,
            endBehavior: 'left down, right up',
            turningPoints: 4,
            shape: 'quintic with flat touch at x=0 and flat cross at x=3'
        },
        realWorldContext: 'Higher multiplicities appear in systems with repeated eigenvalues, critical damping, and multiple-order phase transitions'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solvePolynomialGraphingRelatedProblems() {
    const problems = generateRelatedPolynomialGraphingProblems();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Polynomial Graphing Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedPolynomialGraphingWorkbook({
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
            const result = workbook.solvePolynomialProblem({
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

            console.log(`    ✓ Degree: ${problem.parameters.degree}, Zeros: ${problem.parameters.zeros.join(', ')}`);
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
    console.log('Generating Polynomial Graphing Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Polynomial Graphing Workbook',
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
            text: 'Quadratic, Cubic, Quartic, and Higher-Degree Polynomials',
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
            text: 'Polynomial Graphing (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const polynomialProblems = generateRelatedPolynomialGraphingProblems();
    polynomialProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario} [${problem.difficulty}] - Degree ${problem.parameters.degree}: ${problem.problem}`,
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
            text: 'This workbook contains 5 carefully selected polynomial graphing problems that progressively build your understanding from quadratic to quintic polynomials. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step graphing solutions with detailed explanations',
        '• End behavior analysis based on degree and leading coefficient',
        '• Zero identification and multiplicity behavior (cross vs. touch)',
        '• Turning point analysis and estimation',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Common graphing mistakes and error prevention strategies',
        '• Self-check questions and thinking prompts',
        '• Real-world applications in science, engineering, and economics',
        '• Alternative graphing methods and techniques',
        '• Complete graph verification checklists',
        '• Pedagogical notes for deeper mathematical understanding'
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
            text: 'Key Concepts Covered:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const keyConcepts = [
        '✓ Degree and leading coefficient identification',
        '✓ End behavior rules (4 cases: even/odd degree × positive/negative coefficient)',
        '✓ Finding zeros from factored and standard forms',
        '✓ Multiplicity and its effect on graph behavior',
        '✓ Maximum number of turning points (degree - 1)',
        '✓ Y-intercept calculation',
        '✓ Smooth, continuous curve sketching',
        '✓ Graph verification techniques'
    ];

    keyConcepts.forEach(concept => {
        documentChildren.push(
            new docx.Paragraph({
                text: concept,
                spacing: { after: 100 }
            })
        );
    });

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Polynomial Graphing Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Polynomial Graphing Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const polynomialSolved = solvePolynomialGraphingRelatedProblems();
    
    polynomialSolved.forEach((solved, index) => {
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

        // Difficulty level and degree
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
                               solved.problem.difficulty === 'medium' ? '1976D2' : 'C62828'
                    }),
                    new docx.TextRun({
                        text: '  |  Degree: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: `${solved.problem.parameters.degree}`,
                        color: '1976D2'
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

        // Key features box
        documentChildren.push(
            new docx.Paragraph({
                text: '📊 Key Features:',
                heading: docx.HeadingLevel.HEADING_3,
                spacing: { before: 200, after: 100 }
            })
        );

        const features = [
            `Zeros: ${solved.problem.keyFeatures.zeros.join(', ')}`,
            `Y-intercept: ${solved.problem.keyFeatures.yIntercept}`,
            `End Behavior: ${solved.problem.keyFeatures.endBehavior}`,
            `Max Turning Points: ${solved.problem.keyFeatures.turningPoints}`,
            `Shape: ${solved.problem.keyFeatures.shape}`
        ];

        features.forEach(feature => {
            documentChildren.push(
                new docx.Paragraph({
                    text: `  • ${feature}`,
                    spacing: { after: 80 }
                })
            );
        });

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
                spacing: { before: 200, after: 300 }
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
                text: 'Quick Reference Graphing Steps',
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

        // Visual graph description
        documentChildren.push(
            new docx.Paragraph({
                text: '📈 Graph Visualization:',
                heading: docx.HeadingLevel.HEADING_3,
                spacing: { before: 300, after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: solved.problem.keyFeatures.shape,
                spacing: { after: 100 },
                italics: true,
                shading: {
                    fill: "F5F5F5",
                    type: docx.ShadingType.CLEAR
                }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `End behavior: ${solved.problem.keyFeatures.endBehavior}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `The graph crosses or touches the x-axis at: ${solved.problem.keyFeatures.zeros.join(', ')}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Y-intercept at (0, ${solved.problem.keyFeatures.yIntercept})`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Maximum of ${solved.problem.keyFeatures.turningPoints} turning point(s)`,
                spacing: { after: 400 }
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
            text: 'Congratulations on completing these 5 polynomial graphing problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered quadratic (degree 2) polynomial graphing',
        'You\'ve learned to graph cubic (degree 3) polynomials with S-shaped curves',
        'You\'ve practiced quartic (degree 4) polynomials with W-shaped graphs',
        'You\'ve understood the critical difference between even and odd multiplicities',
        'You\'ve learned end behavior rules for all polynomial degrees',
        'You\'ve mastered the systematic graphing process from analysis to verification'
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
        '🎯 End Behavior: Even degree = same direction both ends, Odd degree = opposite directions',
        '🎯 Leading Coefficient: Positive = right end up, Negative = right end down',
        '🎯 Multiplicity Rules: Odd multiplicity = CROSS x-axis, Even multiplicity = TOUCH and turn',
        '🎯 Turning Points: Maximum = degree - 1 (but can be less)',
        '🎯 Smoothness: Polynomial graphs are ALWAYS smooth and continuous (no sharp corners or breaks)',
        '🎯 Y-intercept: Always found by evaluating f(0)'
    ];

    keyTakeaways.forEach(takeaway => {
        documentChildren.push(
            new docx.Paragraph({
                text: takeaway,
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
        'Practice graphing polynomials in standard form (requires factoring)',
        'Learn to use the Rational Root Theorem to find zeros',
        'Study polynomial division and the Remainder Theorem',
        'Apply calculus to find exact turning points using derivatives',
        'Explore polynomial inequalities and sign analysis',
        'Work with complex zeros and the Fundamental Theorem of Algebra',
        'Apply polynomial modeling to real-world optimization problems'
    ];

    nextSteps.forEach((step, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${step}`,
                spacing: { after: 100 }
            })
        );
    });

    // Practice recommendations
    documentChildren.push(
        new docx.Paragraph({
            text: 'Practice Recommendations:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const practiceRecs = [
        'Start with degree 2 and 3 polynomials until comfortable',
        'Always verify your graphs using technology (graphing calculator or software)',
        'Practice identifying end behavior before attempting full graphs',
        'Create a reference card with the 4 end behavior cases',
        'Memorize: "Even = Same, Odd = Opposite" for end behavior',
        'Draw quick sketches daily to build intuition',
        'Challenge yourself with mixed practice problems'
    ];

    practiceRecs.forEach(rec => {
        documentChildren.push(
            new docx.Paragraph({
                text: `• ${rec}`,
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
        const filename = 'polynomial_graphing_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Quadratic (Degree 2): 1 problem');
        console.log('    - Cubic (Degree 3): 2 problems');
        console.log('    - Quartic (Degree 4): 1 problem');
        console.log('    - Quintic (Degree 5): 1 problem');
        console.log('\n  • Multiplicity Coverage:');
        console.log('    - Simple zeros (multiplicity 1): 3 problems');
        console.log('    - Even multiplicity (touch): 3 problems');
        console.log('    - Odd higher multiplicity: 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 50-60 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with degree and difficulty level');
        console.log('  • Visual highlighting and key features summary');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Complete systematic graphing process (8 steps)');
        console.log('  • Degree and leading coefficient analysis');
        console.log('  • End behavior determination (4-case rule)');
        console.log('  • Zero identification and multiplicity analysis');
        console.log('  • Turning point estimation');
        console.log('  • Y-intercept calculation');
        console.log('  • Graph sketching guidance');
        console.log('  • Complete verification checklist');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Common graphing mistakes and prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative graphing methods');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference graphing steps summary');
        console.log('  • Visual graph description');
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
