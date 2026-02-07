import { EnhancedPolynomialRemainderFactorWorkbook } from './polynomial-remainder-factor-workbook.js';
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




// ============== POLYNOMIAL REMAINDER FACTOR - RELATED PROBLEMS GENERATOR ==============

function generateRelatedPolynomialRemainderFactorProblems() {
    const relatedProblems = [];

    // Problem 1: Basic Remainder Theorem
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Basic Remainder Theorem Application',
        problem: 'Find the remainder when P(x) = x² + 3x - 4 is divided by (x - 2)',
        polynomial: 'x² + 3x - 4',
        divisor: '(x - 2)',
        parameters: { 
            polynomial: 'x² + 3x - 4',
            divisor: '(x - 2)',
            divisorC: 2
        },
        problemType: 'remainder_basic',
        context: { 
            difficulty: 'beginner', 
            topic: 'Remainder Theorem',
            realWorld: 'Quick way to find remainders without long division'
        },
        subparts: [
            'Given: P(x) = x² + 3x - 4, divided by (x - 2)',
            'By Remainder Theorem: Remainder = P(c) where c comes from (x - c)',
            'From (x - 2), we have c = 2',
            'Evaluate P(2):',
            'P(2) = (2)² + 3(2) - 4',
            'P(2) = 4 + 6 - 4',
            'P(2) = 6',
            'Therefore, remainder = 6',
            'Check: This can be verified by polynomial long division'
        ],
        helper: 'Remainder Theorem: When P(x) is divided by (x - c), the remainder equals P(c)',
        solution: 'Remainder = 6',
        realWorldContext: 'Like calculating what\'s left over in division without doing the full division process - useful in engineering calculations and computer algorithms'
    });

    // Problem 2: Factor Theorem Test
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Testing if a Binomial is a Factor',
        problem: 'Is (x - 3) a factor of P(x) = x² - 5x + 6?',
        polynomial: 'x² - 5x + 6',
        divisor: '(x - 3)',
        parameters: { 
            polynomial: 'x² - 5x + 6',
            divisor: '(x - 3)',
            divisorC: 3
        },
        problemType: 'factor_test',
        context: { 
            difficulty: 'beginner', 
            topic: 'Factor Theorem',
            realWorld: 'Determining if expressions divide evenly - crucial for factoring'
        },
        subparts: [
            'Given: P(x) = x² - 5x + 6, test if (x - 3) is a factor',
            'By Factor Theorem: (x - c) is a factor ⟺ P(c) = 0',
            'From (x - 3), we have c = 3',
            'Evaluate P(3):',
            'P(3) = (3)² - 5(3) + 6',
            'P(3) = 9 - 15 + 6',
            'P(3) = 0',
            'Since P(3) = 0, (x - 3) IS a factor',
            'Verification: x² - 5x + 6 = (x - 2)(x - 3) ✓'
        ],
        helper: 'Factor Theorem: (x - c) is a factor if and only if P(c) = 0',
        solution: 'Yes, (x - 3) is a factor because P(3) = 0',
        realWorldContext: 'Like checking if a measurement divides evenly into a total - used in construction, manufacturing, and design'
    });

    // Problem 3: Synthetic Division
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Synthetic Division for Quotient and Remainder',
        problem: 'Use synthetic division to divide P(x) = 2x³ - 3x² + x - 5 by (x - 2)',
        polynomial: '2x³ - 3x² + x - 5',
        divisor: '(x - 2)',
        parameters: { 
            polynomial: '2x³ - 3x² + x - 5',
            divisor: '(x - 2)',
            divisorC: 2
        },
        problemType: 'remainder_synthetic',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Synthetic Division',
            realWorld: 'Efficient method for polynomial division - used in calculus and numerical analysis'
        },
        subparts: [
            'Given: P(x) = 2x³ - 3x² + x - 5, divided by (x - 2)',
            'Step 1: Set up synthetic division with c = 2',
            'Coefficients: 2, -3, 1, -5',
            'Step 2: Bring down first coefficient: 2',
            'Step 3: Multiply 2 × 2 = 4, add to -3: -3 + 4 = 1',
            'Step 4: Multiply 1 × 2 = 2, add to 1: 1 + 2 = 3',
            'Step 5: Multiply 3 × 2 = 6, add to -5: -5 + 6 = 1',
            'Result: 2 | 1 | 3 | 1',
            'Quotient: 2x² + x + 3',
            'Remainder: 1',
            'Answer: P(x) = (x - 2)(2x² + x + 3) + 1'
        ],
        helper: 'Synthetic division: Bring down, multiply by c, add to next coefficient, repeat',
        solution: 'Quotient = 2x² + x + 3, Remainder = 1',
        realWorldContext: 'Like using a calculator shortcut instead of long division - saves time in signal processing and data analysis'
    });

    // Problem 4: Finding Rational Roots
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Using Rational Root Theorem',
        problem: 'Find all rational roots of P(x) = 2x³ + x² - 13x + 6',
        polynomial: '2x³ + x² - 13x + 6',
        divisor: '',
        parameters: { 
            polynomial: '2x³ + x² - 13x + 6'
        },
        problemType: 'rational_roots',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Rational Root Theorem',
            realWorld: 'Systematically finding rational solutions to polynomial equations'
        },
        subparts: [
            'Given: P(x) = 2x³ + x² - 13x + 6',
            'Step 1: Identify a₀ = 6 (constant) and aₙ = 2 (leading coefficient)',
            'Step 2: Factors of 6: ±1, ±2, ±3, ±6',
            'Step 3: Factors of 2: ±1, ±2',
            'Step 4: Possible rational roots: ±1, ±2, ±3, ±6, ±1/2, ±3/2',
            'Step 5: Test using Factor Theorem:',
            'P(1) = 2 + 1 - 13 + 6 = -4 ✗',
            'P(-1) = -2 + 1 + 13 + 6 = 18 ✗',
            'P(2) = 16 + 4 - 26 + 6 = 0 ✓ (root found!)',
            'P(3) = 54 + 9 - 39 + 6 = 30 ✗',
            'P(-3) = -54 + 9 + 39 + 6 = 0 ✓ (root found!)',
            'P(1/2) = 1/4 + 1/4 - 13/2 + 6 = 0 ✓ (root found!)',
            'Rational roots: x = 2, x = -3, x = 1/2'
        ],
        helper: 'Rational Root Theorem: Possible roots are ±(factors of constant)/(factors of leading coefficient)',
        solution: 'Rational roots: x = 2, -3, 1/2',
        realWorldContext: 'Like narrowing down possible solutions before testing - used in optimization, economics, and physics modeling'
    });

    // Problem 5: Complete Factorization
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Complete Polynomial Factorization',
        problem: 'Factor completely: P(x) = x³ - 6x² + 11x - 6',
        polynomial: 'x³ - 6x² + 11x - 6',
        divisor: '',
        parameters: { 
            polynomial: 'x³ - 6x² + 11x - 6'
        },
        problemType: 'find_factors',
        context: { 
            difficulty: 'advanced', 
            topic: 'Complete Factorization',
            realWorld: 'Breaking down complex expressions - essential for solving equations and simplifying'
        },
        subparts: [
            'Given: P(x) = x³ - 6x² + 11x - 6',
            'Step 1: Use Rational Root Theorem',
            'Possible rational roots: ±1, ±2, ±3, ±6',
            'Step 2: Test candidates using Factor Theorem',
            'P(1) = 1 - 6 + 11 - 6 = 0 ✓ (x - 1) is a factor',
            'Step 3: Use synthetic division by (x - 1):',
            '1 | 1  -6  11  -6',
            '  |    1  -5   6',
            '  | 1  -5   6   0',
            'Quotient: x² - 5x + 6',
            'Step 4: Factor the quotient:',
            'x² - 5x + 6 = (x - 2)(x - 3)',
            'Step 5: Complete factorization:',
            'P(x) = (x - 1)(x - 2)(x - 3)',
            'Verification: Expand to check:',
            '(x - 1)(x - 2)(x - 3) = x³ - 6x² + 11x - 6 ✓'
        ],
        helper: 'Find one factor, divide it out, then factor the quotient - repeat until fully factored',
        solution: 'P(x) = (x - 1)(x - 2)(x - 3)',
        realWorldContext: 'Like breaking a complex problem into simple parts - used in structural analysis, circuit design, and cryptography'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solvePolynomialRemainderFactorRelatedProblems() {
    const problems = generateRelatedPolynomialRemainderFactorProblems();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Polynomial Remainder/Factor Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedPolynomialRemainderFactorWorkbook({
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
            const result = workbook.solveRemainderFactorProblem({
                polynomial: problem.polynomial,
                divisor: problem.divisor,
                operation: problem.problem,
                parameters: problem.parameters,
                problemType: problem.problemType,
                context: problem.context
            });

            solvedProblems.push({
                problem: problem,
                workbook: workbook,
                result: result
            });

            console.log(`    ✓ Solution complete`);
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
    console.log('Generating Polynomial Remainder/Factor Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Polynomial Remainder & Factor Theorem Workbook',
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
            text: 'Remainder Theorem, Factor Theorem, Synthetic Division & Complete Factorization',
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
            text: 'Polynomial Remainder & Factor Problems (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const polynomialProblems = generateRelatedPolynomialRemainderFactorProblems();
    polynomialProblems.forEach((problem, index) => {
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
            text: 'This workbook contains 5 carefully selected polynomial remainder and factor theorem problems that progressively build your understanding. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed explanations',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Common mistakes and error prevention tips',
        '• Self-check questions and thinking prompts',
        '• Real-world applications and context',
        '• Alternative solution methods',
        '• Verification of solutions',
        '• Pedagogical notes for deeper understanding',
        '• Prerequisite skills checklist',
        '• Practice problems for reinforcement'
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

    documentChildren.push(
        new docx.Paragraph({
            text: 'Key Theorems Covered:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const theorems = [
        '📐 Remainder Theorem: When P(x) is divided by (x - c), remainder = P(c)',
        '🔍 Factor Theorem: (x - c) is a factor of P(x) if and only if P(c) = 0',
        '⚡ Synthetic Division: Efficient method for dividing polynomials by linear factors',
        '🎯 Rational Root Theorem: Lists all possible rational roots as ±p/q',
        '🧩 Complete Factorization: Breaking polynomials into irreducible factor components'
    ];

    theorems.forEach(theorem => {
        documentChildren.push(
            new docx.Paragraph({
                text: theorem,
                spacing: { after: 100 }
            })
        );
    });

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Polynomial Remainder/Factor Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Polynomial Remainder & Factor Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const polynomialSolved = solvePolynomialRemainderFactorRelatedProblems();
    
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

        // Difficulty level with color coding
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

        // Polynomial and Divisor info
        if (solved.problem.polynomial) {
            documentChildren.push(
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            text: 'Polynomial: ',
                            bold: true
                        }),
                        new docx.TextRun({
                            text: `P(x) = ${solved.problem.polynomial}`,
                            italics: true
                        })
                    ],
                    spacing: { after: 100 }
                })
            );
        }

        if (solved.problem.divisor) {
            documentChildren.push(
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            text: 'Divisor: ',
                            bold: true
                        }),
                        new docx.TextRun({
                            text: solved.problem.divisor,
                            italics: true
                        })
                    ],
                    spacing: { after: 100 }
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
            text: 'Congratulations on completing these 5 polynomial remainder and factor problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered the Remainder Theorem for quick remainder calculation',
        'You\'ve learned to use the Factor Theorem to test for factors',
        'You\'ve practiced efficient synthetic division techniques',
        'You\'ve applied the Rational Root Theorem to find possible roots systematically',
        'You\'ve completed full polynomial factorizations',
        'You\'ve seen real-world applications in engineering, physics, and computer science',
        'You\'ve learned error prevention strategies specific to polynomial operations'
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
        'Practice polynomial long division for higher-degree divisors',
        'Explore complex roots and the Fundamental Theorem of Algebra',
        'Study polynomial graphs and their relationship to factors',
        'Learn about multiplicity and its effects on graphs',
        'Apply these skills to rational functions and partial fractions',
        'Investigate Descartes\' Rule of Signs for estimating real roots',
        'Practice constructing polynomials from given roots'
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
            spacing: { after: 300 }
        })
    );

    // Key Takeaways
    documentChildren.push(
        new docx.Paragraph({
            text: 'Key Takeaways:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const takeaways = [
        '🎯 The Remainder Theorem saves time by avoiding long division',
        '🔍 The Factor Theorem connects zeros/roots to factors',
        '⚡ Synthetic division is your fastest tool for linear divisors',
        '📊 The Rational Root Theorem narrows down possibilities before testing',
        '🧮 Complete factorization requires patience and systematic testing',
        '⚠️ Always watch signs when working with (x + c) vs (x - c)',
        '✅ Verification by multiplication confirms factorization correctness'
    ];

    takeaways.forEach(takeaway => {
        documentChildren.push(
            new docx.Paragraph({
                text: takeaway,
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
        const filename = 'polynomial_remainder_factor_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Remainder Theorem: 1 problem');
        console.log('    - Factor Theorem: 1 problem');
        console.log('    - Synthetic Division: 1 problem');
        console.log('    - Rational Root Theorem: 1 problem');
        console.log('    - Complete Factorization: 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 50-60 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and visual highlighting');
        console.log('  • Polynomial and divisor clearly displayed');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Relevant theorem explanations and formulas');
        console.log('  • Complete step-by-step solution with enhanced explanations');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Verification of solutions with detailed checking');
        console.log('  • Prerequisite skills assessment');
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

// ============== RUN THE DOCUMENT GENERATION ==============

generateComprehensiveDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});
