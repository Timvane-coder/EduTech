import { EnhancedRationalToQuadraticMathematicalWorkbook } from './rational-to-quadratic-workbook.js';
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




// ============== RATIONAL TO QUADRATIC EQUATIONS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedRationalToQuadraticEquations() {
    const relatedProblems = [];

    // Problem 1: Simple Rational Sum (Same Denominator)
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Simple Rational Sum',
        problem: 'Solve for x: 2/x + 3/x = 5',
        parameters: { a: 2, b: 3, c: 5 },
        problemType: 'simple_rational_sum',
        context: { 
            difficulty: 'beginner', 
            topic: 'Basic Rational Equations',
            realWorld: 'Combining rates or proportions with same denominator'
        },
        subparts: [
            'Given: 2/x + 3/x = 5',
            'Step 1: Combine fractions with same denominator',
            '(2 + 3)/x = 5',
            '5/x = 5',
            'Step 2: Multiply both sides by x',
            '5 = 5x',
            'Step 3: Divide by 5',
            'x = 1',
            'Step 4: Check for extraneous solutions',
            'Domain restriction: x ≠ 0',
            'Check: 2/1 + 3/1 = 2 + 3 = 5 ✓',
            'Solution is valid!'
        ],
        helper: 'When fractions have the same denominator, combine numerators first, then clear the fraction',
        solution: 'x = 1',
        realWorldContext: 'Like combining two work rates: if two tasks take 2 hours and 3 hours per unit respectively, and combined they complete 5 units per hour',
        domainRestrictions: ['x ≠ 0'],
        expectedExtraneous: false
    });

    // Problem 2: Reciprocal Sum Leading to Quadratic
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Sum of Reciprocals',
        problem: 'Solve for x: 1/x + 1/(x+2) = 3/4',
        parameters: { k: 2, c: 3/4 },
        problemType: 'reciprocal_sum',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Reciprocal Equations Leading to Quadratics',
            realWorld: 'Work rate problems with different completion times'
        },
        subparts: [
            'Given: 1/x + 1/(x+2) = 3/4',
            'Step 1: Identify domain restrictions',
            'x ≠ 0 and x ≠ -2',
            'Step 2: Find LCD = 4x(x+2)',
            'Step 3: Multiply all terms by LCD',
            '4(x+2) + 4x = 3x(x+2)',
            'Step 4: Expand',
            '4x + 8 + 4x = 3x² + 6x',
            '8x + 8 = 3x² + 6x',
            'Step 5: Rearrange to standard form',
            '3x² - 2x - 8 = 0',
            'Step 6: Factor or use quadratic formula',
            '(3x + 4)(x - 2) = 0',
            'x = -4/3 or x = 2',
            'Step 7: Check both solutions',
            'x = 2: 1/2 + 1/4 = 2/4 + 1/4 = 3/4 ✓',
            'x = -4/3: 1/(-4/3) + 1/(-4/3+2) = -3/4 + 1/(2/3) = -3/4 + 3/2 = 3/4 ✓',
            'Both solutions are valid!'
        ],
        helper: 'Find LCD of all denominators, multiply through, then solve the resulting quadratic. ALWAYS check for extraneous solutions!',
        solution: 'x = 2 or x = -4/3',
        realWorldContext: 'Like finding individual completion times when two workers together complete a job at a known combined rate',
        domainRestrictions: ['x ≠ 0', 'x ≠ -2'],
        expectedExtraneous: false
    });

    // Problem 3: Work Rate Problem
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Work Rate Problem',
        problem: 'Person A can complete a job in 6 hours. Person B can complete the same job in 4 hours. How long will it take them working together?',
        parameters: { t1: 6, t2: 4 },
        problemType: 'work_rate_combined',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Combined Work Rate Problems',
            realWorld: 'Calculating combined productivity of workers or machines'
        },
        subparts: [
            'Given: Person A completes job in 6 hours, Person B in 4 hours',
            'Step 1: Determine individual rates',
            'Rate_A = 1/6 jobs per hour',
            'Rate_B = 1/4 jobs per hour',
            'Step 2: Set up combined rate equation',
            '1/6 + 1/4 = 1/t (where t is time together)',
            'Step 3: Find LCD = 12',
            'Step 4: Solve for combined rate',
            '2/12 + 3/12 = 5/12 jobs per hour',
            'Step 5: Find time to complete 1 job',
            '1/t = 5/12',
            't = 12/5 = 2.4 hours',
            'Step 6: Verify',
            'In 2.4 hours: A completes 2.4/6 = 0.4 of job',
            'In 2.4 hours: B completes 2.4/4 = 0.6 of job',
            'Total: 0.4 + 0.6 = 1.0 job ✓'
        ],
        helper: 'Rate = 1/time. Combined rate = sum of individual rates. Then time = 1/(combined rate)',
        solution: 't = 2.4 hours (or 2 hours 24 minutes)',
        realWorldContext: 'Common in project management, manufacturing, and service industries for scheduling and resource allocation',
        domainRestrictions: ['t > 0 (time must be positive)'],
        expectedExtraneous: false
    });

    // Problem 4: Work Rate with Algebraic Relationship
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Work Rate with Related Times',
        problem: 'One worker takes 3 hours longer than another to complete a job. Working together, they finish in 2 hours. How long does each take working alone?',
        parameters: { difference: 3, together: 2 },
        problemType: 'work_rate_combined',
        context: { 
            difficulty: 'advanced', 
            topic: 'Work Rate Problems with Algebraic Relationships',
            realWorld: 'Comparing efficiency of workers or machines'
        },
        subparts: [
            'Given: One worker takes 3 hours longer; together they finish in 2 hours',
            'Step 1: Define variables',
            'Let t = time for faster worker',
            'Then t + 3 = time for slower worker',
            'Step 2: Set up rate equation',
            '1/t + 1/(t+3) = 1/2',
            'Step 3: Find LCD = 2t(t+3)',
            'Step 4: Multiply all terms by LCD',
            '2(t+3) + 2t = t(t+3)',
            'Step 5: Expand and simplify',
            '2t + 6 + 2t = t² + 3t',
            '4t + 6 = t² + 3t',
            'Step 6: Rearrange to standard form',
            't² - t - 6 = 0',
            'Step 7: Factor',
            '(t - 3)(t + 2) = 0',
            't = 3 or t = -2',
            'Step 8: Reject negative solution (time must be positive)',
            't = 3 hours (faster worker)',
            't + 3 = 6 hours (slower worker)',
            'Step 9: Verify',
            '1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2 ✓',
            'In 2 hours at rate 1/2 per hour: 2 × 1/2 = 1 job complete ✓'
        ],
        helper: 'Set up variable for one time, express other in terms of it, then solve the resulting quadratic. Check that solution makes sense in context!',
        solution: 'Faster worker: 3 hours, Slower worker: 6 hours',
        realWorldContext: 'Comparing employee efficiency, machine performance, or determining optimal staffing',
        domainRestrictions: ['t > 0 (time must be positive)', 't + 3 > 0'],
        expectedExtraneous: true,
        extraneousValue: -2,
        extraneousReason: 'Negative time is not meaningful in this context'
    });

    // Problem 5: Distance-Rate-Time with Current
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Boat in Current Problem',
        problem: 'A boat travels 40 miles upstream in the same time it takes to travel 60 miles downstream. The current speed is 5 mph. Find the boat\'s speed in still water.',
        parameters: { upstreamDistance: 40, downstreamDistance: 60, currentSpeed: 5 },
        problemType: 'distance_rate_rational',
        context: { 
            difficulty: 'advanced', 
            topic: 'Distance-Rate-Time with Varying Speeds',
            realWorld: 'Navigation problems accounting for current or wind'
        },
        subparts: [
            'Given: 40 miles upstream, 60 miles downstream, same time, current = 5 mph',
            'Step 1: Define variable',
            'Let r = boat speed in still water (mph)',
            'Step 2: Determine actual speeds',
            'Upstream speed = r - 5 mph',
            'Downstream speed = r + 5 mph',
            'Step 3: Set up time equation (time = distance/rate)',
            '40/(r-5) = 60/(r+5)',
            'Step 4: Cross multiply',
            '40(r+5) = 60(r-5)',
            'Step 5: Expand',
            '40r + 200 = 60r - 300',
            'Step 6: Solve for r',
            '200 + 300 = 60r - 40r',
            '500 = 20r',
            'r = 25 mph',
            'Step 7: Check domain restrictions',
            'r > 5 (must be faster than current) ✓',
            'Step 8: Verify',
            'Upstream time: 40/(25-5) = 40/20 = 2 hours',
            'Downstream time: 60/(25+5) = 60/30 = 2 hours ✓',
            'Times are equal!'
        ],
        helper: 'Set up equal time equation: distance_upstream/(speed-current) = distance_downstream/(speed+current), then solve',
        solution: 'r = 25 mph',
        realWorldContext: 'Essential for navigation planning in rivers, ocean currents, or aircraft flight planning with wind',
        domainRestrictions: ['r > 5 (boat must be faster than current)', 'r ≠ 5', 'r ≠ -5'],
        expectedExtraneous: false,
        note: 'This problem simplifies to linear, but the setup uses rational expressions that could lead to quadratics in more complex scenarios'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveRationalToQuadraticRelatedProblems() {
    const problems = generateRelatedRationalToQuadraticEquations();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Rational to Quadratic Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedRationalToQuadraticMathematicalWorkbook({
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
            const result = workbook.solveRationalToQuadraticProblem({
                equation: problem.problem.includes('Solve for x:') ? 
                    problem.problem.split('Solve for x: ')[1] : problem.problem,
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

async function generateRationalToQuadraticDocument() {
    console.log('Generating Rational to Quadratic Equations Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Rational to Quadratic Equations Workbook',
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
            text: 'Rational Equations, Work Rates, and Distance Problems',
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
            text: 'Rational to Quadratic Equations (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const rationalProblems = generateRelatedRationalToQuadraticEquations();
    rationalProblems.forEach((problem, index) => {
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
            text: 'This workbook contains 5 carefully selected rational to quadratic equation problems that progressively build your understanding of this important topic. Rational equations often lead to quadratic equations when we clear fractions, and checking for extraneous solutions is critical.',
            spacing: { after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Each problem includes:',
            spacing: { after: 200 },
            bold: true
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed explanations',
        '• Domain restriction identification (values that make denominators zero)',
        '• LCD (Least Common Denominator) finding and clearing fractions',
        '• Solving the resulting quadratic equation',
        '• Extraneous solution checking and rejection',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Common mistakes and error prevention tips',
        '• Self-check questions and thinking prompts',
        '• Real-world applications (work rates, distance-rate-time, etc.)',
        '• Alternative solution methods',
        '• Complete verification of all solutions',
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

    // ============== KEY CONCEPTS SECTION ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Key Concepts: Rational to Quadratic Equations',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    const keyConcepts = [
        {
            title: 'What are Rational Equations?',
            content: 'Rational equations contain fractions with variables in the denominators. Example: 1/x + 1/(x+2) = 3/4'
        },
        {
            title: 'Why do they lead to Quadratics?',
            content: 'When we clear fractions by multiplying by the LCD, the resulting equation often contains x² terms, making it quadratic.'
        },
        {
            title: 'Domain Restrictions',
            content: 'Before solving, identify all values that make denominators zero. These values are NOT in the domain and cannot be solutions.'
        },
        {
            title: 'Extraneous Solutions',
            content: 'When we multiply by variable expressions, we may introduce "fake" solutions. ALWAYS check each solution in the original equation.'
        },
        {
            title: 'Solution Process',
            content: '1) Identify domain restrictions, 2) Find LCD, 3) Multiply through by LCD, 4) Solve resulting quadratic, 5) Check all solutions, 6) Reject extraneous solutions'
        }
    ];

    keyConcepts.forEach(concept => {
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: concept.title + ': ',
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
    console.log('\nProcessing Rational to Quadratic Equations Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Rational to Quadratic Equations Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const rationalSolved = solveRationalToQuadraticRelatedProblems();
    
    rationalSolved.forEach((solved, index) => {
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
                text: solved.problem.problem,
                spacing: { after: 200 },
                bold: true,
                shading: {
                    fill: "E7F3FF",
                    type: docx.ShadingType.CLEAR
                }
            })
        );

        // Difficulty level
        const difficultyColors = {
            'easy': '2E7D32',
            'medium': 'F57C00',
            'hard': 'C62828'
        };

        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'Difficulty: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.difficulty.toUpperCase(),
                        color: difficultyColors[solved.problem.difficulty] || '1976D2',
                        bold: true
                    })
                ],
                spacing: { after: 100 }
            })
        );

        // Domain restrictions warning
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: '⚠️  Domain Restrictions: ',
                        bold: true,
                        color: 'D32F2F'
                    }),
                    new docx.TextRun({
                        text: solved.problem.domainRestrictions.join(', '),
                        color: 'D32F2F'
                    })
                ],
                spacing: { after: 150 },
                shading: {
                    fill: "FFEBEE",
                    type: docx.ShadingType.CLEAR
                }
            })
        );

        // Extraneous solution alert
        if (solved.problem.expectedExtraneous) {
            documentChildren.push(
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            text: '🚨 Alert: ',
                            bold: true,
                            color: 'F57C00'
                        }),
                        new docx.TextRun({
                            text: `This problem has an extraneous solution (x = ${solved.problem.extraneousValue}). `,
                            color: 'F57C00'
                        }),
                        new docx.TextRun({
                            text: solved.problem.extraneousReason,
                            color: 'F57C00',
                            italics: true
                        })
                    ],
                    spacing: { after: 150 },
                    shading: {
                        fill: "FFF3E0",
                        type: docx.ShadingType.CLEAR
                    }
                })
            );
        }

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
            // Highlight important steps
            const isImportant = subpart.includes('Check') || 
                               subpart.includes('Domain') || 
                               subpart.includes('extraneous') ||
                               subpart.includes('Verify');
            
            documentChildren.push(
                new docx.Paragraph({
                    text: subpart,
                    spacing: { after: 100 },
                    bullet: {
                        level: 0
                    },
                    ...(isImportant && {
                        shading: {
                            fill: "FFF9C4",
                            type: docx.ShadingType.CLEAR
                        }
                    })
                })
            );
        });

        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'Final Answer: ',
                        bold: true,
                        size: 24
                    }),
                    new docx.TextRun({
                        text: solved.problem.solution,
                        bold: true,
                        color: '2E7D32',
                        size: 24
                    })
                ],
                spacing: { before: 200, after: 400 },
                shading: {
                    fill: "E8F5E9",
                    type: docx.ShadingType.CLEAR
                }
            })
        );

        // Add note if present
        if (solved.problem.note) {
            documentChildren.push(
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            text: '📝 Note: ',
                            bold: true
                        }),
                        new docx.TextRun({
                            text: solved.problem.note,
                            italics: true
                        })
                    ],
                    spacing: { after: 200 }
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
            text: 'Congratulations on completing these 5 rational to quadratic equation problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered identifying domain restrictions before solving',
        'You\'ve learned to find LCD with variable denominators',
        'You\'ve practiced clearing fractions to create quadratic equations',
        'You\'ve solved resulting quadratics using multiple methods',
        'You\'ve learned to check for and reject extraneous solutions',
        'You\'ve applied these skills to work rate and distance-rate-time problems',
        'You\'ve understood the critical importance of verification in rational equations'
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
            text: 'Critical Reminders:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const reminders = [
        '🔴 ALWAYS identify domain restrictions FIRST (values that make denominators zero)',
        '🔴 ALWAYS check each solution in the ORIGINAL equation',
        '🔴 ALWAYS reject solutions that make any denominator equal to zero',
        '🔴 Multiply EVERY term by the LCD, not just fractions',
        '🔴 Extraneous solutions are not mistakes - they\'re a natural result of the solution process'
    ];

    reminders.forEach(reminder => {
        documentChildren.push(
            new docx.Paragraph({
                text: reminder,
                spacing: { after: 100 },
                shading: {
                    fill: "FFEBEE",
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
        'Practice more work rate problems with three or more workers',
        'Explore rational inequalities',
        'Study literal rational equations (solving for one variable in formulas)',
        'Apply to real-world physics problems (lens equations, electrical circuits)',
        'Move on to radical equations and their extraneous solutions',
        'Practice systems of equations involving rational expressions'
    ];

    nextSteps.forEach((step, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${step}`,
                spacing: { after: 100 }
            })
        );
    });

    // ============== COMMON MISTAKES REVIEW ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Common Mistakes to Avoid',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    const commonMistakes = [
        {
            mistake: 'Not identifying domain restrictions before solving',
            fix: 'Always list values that make denominators zero FIRST'
        },
        {
            mistake: 'Forgetting to multiply ALL terms by LCD',
            fix: 'Multiply every single term, including those without fractions'
        },
        {
            mistake: 'Not checking solutions for extraneous values',
            fix: 'ALWAYS substitute each solution back into the original equation'
        },
        {
            mistake: 'Accepting negative solutions in time/distance problems',
            fix: 'Check if solution makes sense in the real-world context'
        },
        {
            mistake: 'Incorrectly finding LCD with variable denominators',
            fix: 'Factor denominators first, then find LCD as product of unique factors'
        }
    ];

    commonMistakes.forEach((item, index) => {
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: `${index + 1}. Mistake: `,
                        bold: true,
                        color: 'C62828'
                    }),
                    new docx.TextRun({
                        text: item.mistake,
                        color: 'C62828'
                    })
                ],
                spacing: { after: 50 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: '   Fix: ',
                        bold: true,
                        color: '2E7D32'
                    }),
                    new docx.TextRun({
                        text: item.fix,
                        color: '2E7D32'
                    })
                ],
                spacing: { after: 150 }
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
        const filename = 'rational_to_quadratic_equations_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Simple Rational Sum: 1 problem');
        console.log('    - Reciprocal Sum: 1 problem');
        console.log('    - Work Rate (Basic): 1 problem');
        console.log('    - Work Rate (Advanced): 1 problem');
        console.log('    - Distance-Rate-Time: 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 50-60 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and visual highlighting');
        console.log('  • Domain restrictions clearly marked with warnings');
        console.log('  • Extraneous solution alerts (when applicable)');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Complete step-by-step solution with LCD method');
        console.log('  • Domain analysis and restriction identification');
        console.log('  • Quadratic solving with multiple methods');
        console.log('  • Extraneous solution checking and rejection');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Verification of all solutions with detailed checking');
        console.log('  • Key concepts about rational to quadratic equations');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary with highlighted steps');
        console.log('  • Common mistakes review section');
        console.log('='.repeat(80) + '\n');
    } catch (error) {
        console.error(`\n❌ Error saving document: ${error.message}`);
        console.error(error.stack);
    }
}

// ============== RUN THE DOCUMENT GENERATION ==============

generateRationalToQuadraticDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});
