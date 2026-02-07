import { EnhancedPolynomialDivisionMathematicalWorkbook } from './polynomial-division-workbook.js';
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




// ============== POLYNOMIAL DIVISION - RELATED PROBLEMS GENERATOR ==============

function generateRelatedPolynomialDivisionProblems() {
    const relatedProblems = [];

    // Problem 1: Simple Long Division by Linear Divisor
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Long Division by Linear Divisor',
        problem: 'Divide: (x² + 7x + 12) ÷ (x + 3)',
        dividend: 'x^2 + 7x + 12',
        divisor: 'x + 3',
        method: 'long_division',
        problemType: 'long_division_linear',
        context: { 
            difficulty: 'beginner', 
            topic: 'Polynomial Long Division Basics',
            realWorld: 'Finding dimensions when area and one side are known'
        },
        subparts: [
            'Given: (x² + 7x + 12) ÷ (x + 3)',
            'Step 1: Divide leading terms: x²/x = x',
            'Step 2: Multiply (x + 3) by x: x² + 3x',
            'Step 3: Subtract: (x² + 7x + 12) - (x² + 3x) = 4x + 12',
            'Step 4: Divide leading terms: 4x/x = 4',
            'Step 5: Multiply (x + 3) by 4: 4x + 12',
            'Step 6: Subtract: (4x + 12) - (4x + 12) = 0',
            'Quotient: x + 4',
            'Remainder: 0',
            'Check: (x + 3)(x + 4) = x² + 7x + 12 ✓'
        ],
        helper: 'Divide leading terms, multiply divisor by result, subtract, and repeat',
        expectedQuotient: 'x + 4',
        expectedRemainder: '0',
        realWorldContext: 'Like finding the width of a rectangle when area = x² + 7x + 12 and length = x + 3'
    });

    // Problem 2: Synthetic Division
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Synthetic Division',
        problem: 'Divide using synthetic division: (x³ - 6x² + 11x - 6) ÷ (x - 1)',
        dividend: 'x^3 - 6x^2 + 11x - 6',
        divisor: 'x - 1',
        method: 'synthetic_division',
        problemType: 'synthetic_division_standard',
        context: { 
            difficulty: 'beginner', 
            topic: 'Synthetic Division Method',
            realWorld: 'Efficient calculation method for linear divisors'
        },
        subparts: [
            'Given: (x³ - 6x² + 11x - 6) ÷ (x - 1)',
            'Identify c: From (x - 1), c = 1',
            'Setup: 1 | 1  -6  11  -6',
            'Bring down: 1',
            'Multiply and add: 1×1 = 1, -6+1 = -5',
            'Multiply and add: 1×(-5) = -5, 11+(-5) = 6',
            'Multiply and add: 1×6 = 6, -6+6 = 0',
            'Result: 1  -5  6  | 0',
            'Quotient: x² - 5x + 6',
            'Remainder: 0',
            'Factor quotient: (x - 2)(x - 3)',
            'Complete factorization: (x - 1)(x - 2)(x - 3)'
        ],
        helper: 'For (x - c), use +c. Bring down first coefficient, then multiply by c and add repeatedly',
        expectedQuotient: 'x^2 - 5x + 6',
        expectedRemainder: '0',
        realWorldContext: 'Quick method to find factors - useful in finding zeros of polynomials'
    });

    // Problem 3: Long Division with Remainder
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Long Division with Non-Zero Remainder',
        problem: 'Divide: (2x³ - 3x² + 4x - 5) ÷ (x - 2)',
        dividend: '2x^3 - 3x^2 + 4x - 5',
        divisor: 'x - 2',
        method: 'long_division',
        problemType: 'long_division_linear',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Division with Remainders',
            realWorld: 'Not all divisions result in even factors'
        },
        subparts: [
            'Given: (2x³ - 3x² + 4x - 5) ÷ (x - 2)',
            'Step 1: Divide 2x³ by x: 2x²',
            'Multiply: 2x²(x - 2) = 2x³ - 4x²',
            'Subtract: (-3x² + 4x²) = x² + 4x',
            'Step 2: Divide x² by x: x',
            'Multiply: x(x - 2) = x² - 2x',
            'Subtract: (4x + 2x) = 6x - 5',
            'Step 3: Divide 6x by x: 6',
            'Multiply: 6(x - 2) = 6x - 12',
            'Subtract: (-5 + 12) = 7',
            'Quotient: 2x² + x + 6',
            'Remainder: 7',
            'Check: (x - 2)(2x² + x + 6) + 7 = 2x³ - 3x² + 4x - 5 ✓'
        ],
        helper: 'Continue dividing until the degree of remainder is less than the degree of divisor',
        expectedQuotient: '2x^2 + x + 6',
        expectedRemainder: '7',
        realWorldContext: 'Like dividing 23 by 5: quotient is 4, remainder is 3. Here, 7 is what\'s "left over"'
    });

    // Problem 4: Remainder Theorem Application
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Remainder Theorem Application',
        problem: 'Find the remainder when (x⁴ - 3x² + 2x - 5) is divided by (x - 3) using the Remainder Theorem',
        dividend: 'x^4 - 3x^2 + 2x - 5',
        divisor: 'x - 3',
        method: 'remainder_theorem',
        problemType: 'remainder_theorem_application',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Remainder Theorem',
            realWorld: 'Shortcut for finding remainders without full division'
        },
        subparts: [
            'Given: P(x) = x⁴ - 3x² + 2x - 5, divisor = (x - 3)',
            'Remainder Theorem: When P(x) ÷ (x - c), R = P(c)',
            'From (x - 3): c = 3',
            'Evaluate P(3):',
            'P(3) = (3)⁴ - 3(3)² + 2(3) - 5',
            'P(3) = 81 - 3(9) + 6 - 5',
            'P(3) = 81 - 27 + 6 - 5',
            'P(3) = 55',
            'Remainder: 55',
            'This means: x⁴ - 3x² + 2x - 5 = (x - 3)Q(x) + 55',
            'where Q(x) is some polynomial'
        ],
        helper: 'Remainder Theorem: R = P(c) when dividing by (x - c). Just substitute and evaluate!',
        expectedQuotient: 'not calculated',
        expectedRemainder: '55',
        realWorldContext: 'Like checking inventory (remainder) without counting everything (full division)'
    });

    // Problem 5: Factor Theorem Test
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Factor Theorem Test and Complete Factorization',
        problem: 'Test if (x - 2) is a factor of x³ - 2x² - 5x + 6, and if so, factor completely',
        dividend: 'x^3 - 2x^2 - 5x + 6',
        divisor: 'x - 2',
        method: 'factor_theorem',
        problemType: 'factor_theorem_test',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Factor Theorem and Complete Factorization',
            realWorld: 'Finding all solutions to polynomial equations'
        },
        subparts: [
            'Given: P(x) = x³ - 2x² - 5x + 6, test if (x - 2) is a factor',
            'Factor Theorem: (x - c) is a factor ⟺ P(c) = 0',
            'From (x - 2): c = 2',
            'Evaluate P(2):',
            'P(2) = (2)³ - 2(2)² - 5(2) + 6',
            'P(2) = 8 - 8 - 10 + 6',
            'P(2) = -4 ≠ 0',
            'Conclusion: (x - 2) is NOT a factor',
            '',
            'Try (x - 1): P(1) = 1 - 2 - 5 + 6 = 0 ✓',
            '(x - 1) IS a factor!',
            'Use synthetic division with c = 1:',
            '1 | 1  -2  -5  6',
            '     1  -1  -6',
            '   1  -1  -6  0',
            'Quotient: x² - x - 6 = (x - 3)(x + 2)',
            'Complete factorization: (x - 1)(x - 3)(x + 2)'
        ],
        helper: 'Factor Theorem: Test by substitution. If P(c) = 0, then (x - c) is a factor',
        expectedQuotient: 'x^2 - x - 6',
        expectedRemainder: '0 (when dividing by x - 1)',
        realWorldContext: 'Like testing if a key (factor) fits a lock (polynomial) perfectly'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solvePolynomialDivisionRelatedProblems() {
    const problems = generateRelatedPolynomialDivisionProblems();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Polynomial Division Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedPolynomialDivisionMathematicalWorkbook({
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
            const result = workbook.solvePolynomialDivisionProblem({
                dividend: problem.dividend,
                divisor: problem.divisor,
                method: problem.method,
                problemType: problem.problemType,
                context: problem.context
            });

            solvedProblems.push({
                problem: problem,
                workbook: workbook,
                result: result
            });

            console.log(`    ✓ Quotient: ${result.quotient || 'N/A'}`);
            console.log(`    ✓ Remainder: ${result.remainder !== undefined ? result.remainder : 'N/A'}`);
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

async function generatePolynomialDivisionDocument() {
    console.log('Generating Polynomial Division Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Polynomial Division Workbook',
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
            text: 'Long Division, Synthetic Division, Remainder Theorem, and Factor Theorem',
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
            text: 'Polynomial Division Problems (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const polyProblems = generateRelatedPolynomialDivisionProblems();
    polyProblems.forEach((problem, index) => {
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
            text: 'This workbook contains 5 carefully selected polynomial division problems covering the fundamental techniques. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed explanations',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Common mistakes and error prevention tips',
        '• Self-check questions and thinking prompts',
        '• Real-world applications and context',
        '• Alternative solution methods (long division, synthetic division, theorems)',
        '• Verification using the Division Algorithm: P(x) = D(x)·Q(x) + R(x)',
        '• Pedagogical notes for deeper understanding',
        '• Quick reference solution summaries'
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
        '✓ Long Division Algorithm: Divide → Multiply → Subtract → Bring Down → Repeat',
        '✓ Synthetic Division: Efficient method for divisors of form (x - c)',
        '✓ Remainder Theorem: R = P(c) when dividing P(x) by (x - c)',
        '✓ Factor Theorem: (x - c) is a factor ⟺ P(c) = 0',
        '✓ Division Algorithm: P(x) = D(x)·Q(x) + R(x), where deg(R) < deg(D)',
        '✓ Complete Factorization: Breaking polynomials into irreducible factors'
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
    console.log('\nProcessing Polynomial Division Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Polynomial Division Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const polySolved = solvePolynomialDivisionRelatedProblems();
    
    polySolved.forEach((solved, index) => {
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
                    fill: "E3F2FD",
                    type: docx.ShadingType.CLEAR
                },
                border: {
                    top: { style: docx.BorderStyle.SINGLE, size: 6, color: "1976D2" },
                    bottom: { style: docx.BorderStyle.SINGLE, size: 6, color: "1976D2" },
                    left: { style: docx.BorderStyle.SINGLE, size: 6, color: "1976D2" },
                    right: { style: docx.BorderStyle.SINGLE, size: 6, color: "1976D2" }
                }
            })
        );

        // Problem details
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'Dividend: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.dividend
                    })
                ],
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'Divisor: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.divisor
                    })
                ],
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'Method: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.method.replace(/_/g, ' ').toUpperCase(),
                        color: '1976D2'
                    })
                ],
                spacing: { after: 100 }
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
                spacing: { after: 200 }
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
                    fill: "FFFDE7",
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
                spacing: { after: 300 },
                shading: {
                    fill: "E8F5E9",
                    type: docx.ShadingType.CLEAR
                }
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
                spacing: { before: 400, after: 200 },
                shading: {
                    fill: "FFF3E0",
                    type: docx.ShadingType.CLEAR
                }
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

        // Final Answer Box
        documentChildren.push(
            new docx.Paragraph({
                text: 'Final Answer',
                heading: docx.HeadingLevel.HEADING_4,
                spacing: { before: 300, after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'Quotient: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.expectedQuotient,
                        bold: true,
                        color: '1565C0'
                    })
                ],
                spacing: { after: 100 },
                shading: {
                    fill: "E3F2FD",
                    type: docx.ShadingType.CLEAR
                }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'Remainder: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.expectedRemainder,
                        bold: true,
                        color: solved.problem.expectedRemainder === '0' ? '2E7D32' : 'D84315'
                    })
                ],
                spacing: { after: 400 },
                shading: {
                    fill: solved.problem.expectedRemainder === '0' ? "E8F5E9" : "FFF3E0",
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
            text: 'Congratulations on completing these 5 polynomial division problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered polynomial long division with both zero and non-zero remainders',
        'You\'ve learned the efficient synthetic division method for linear divisors',
        'You\'ve applied the Remainder Theorem to find remainders without full division',
        'You\'ve used the Factor Theorem to test factors and find zeros',
        'You\'ve practiced complete factorization of polynomials',
        'You\'ve verified solutions using the Division Algorithm: P(x) = D(x)·Q(x) + R(x)'
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
            text: 'Key Techniques Summary:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const techniques = [
        {
            name: 'Long Division',
            when: 'Use for any polynomial division, especially when divisor is not linear',
            steps: 'Divide → Multiply → Subtract → Bring Down → Repeat'
        },
        {
            name: 'Synthetic Division',
            when: 'Use only when divisor is (x - c) for faster computation',
            steps: 'Write c and coefficients → Bring down → Multiply by c and add → Repeat'
        },
        {
            name: 'Remainder Theorem',
            when: 'Use when you only need the remainder (not quotient)',
            steps: 'Find c from (x - c), then evaluate P(c)'
        },
        {
            name: 'Factor Theorem',
            when: 'Use to test if (x - c) is a factor or to find zeros',
            steps: 'Evaluate P(c). If P(c) = 0, then (x - c) is a factor'
        }
    ];

    techniques.forEach((tech, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${tech.name}`,
                bold: true,
                spacing: { before: 200, after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: '   When to use: ',
                        italics: true
                    }),
                    new docx.TextRun({
                        text: tech.when
                    })
                ],
                spacing: { after: 50 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: '   Steps: ',
                        italics: true
                    }),
                    new docx.TextRun({
                        text: tech.steps
                    })
                ],
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
        'Practice division by quadratic and higher-degree polynomials',
        'Apply Rational Root Theorem to find all rational zeros',
        'Work on partial fraction decomposition',
        'Explore polynomial inequalities',
        'Study the Fundamental Theorem of Algebra',
        'Apply polynomial division to simplifying rational expressions',
        'Use polynomial division in calculus (limits, integration)'
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
            text: 'Common Mistakes to Avoid:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const mistakes = [
        '❌ Forgetting to include zero coefficients for missing terms',
        '❌ Using wrong sign for c in synthetic division (remember: for x - 5, use +5)',
        '❌ Not changing signs when subtracting in long division',
        '❌ Stopping division too early (continue until deg(R) < deg(D))',
        '❌ Misaligning terms by degree in long division',
        '❌ Confusing zeros with factors (if x = 3 is zero, factor is x - 3, not x + 3)'
    ];

    mistakes.forEach(mistake => {
        documentChildren.push(
            new docx.Paragraph({
                text: mistake,
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
        const filename = 'polynomial_division_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Long Division (Linear): 2 problems');
        console.log('    - Synthetic Division: 1 problem');
        console.log('    - Remainder Theorem: 1 problem');
        console.log('    - Factor Theorem: 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 50-60 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with method and difficulty level');
        console.log('  • Visual highlighting with color-coded boxes');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Complete step-by-step solution with enhanced explanations');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Verification using Division Algorithm');
        console.log('  • Key concepts and theoretical foundations');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods comparison');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary with final answers');
        console.log('\n📚 Additional Features:');
        console.log('  • Comprehensive summary of all techniques');
        console.log('  • Decision guide for choosing the right method');
        console.log('  • Common mistakes checklist');
        console.log('  • Suggested next steps for continued learning');
        console.log('='.repeat(80) + '\n');
    } catch (error) {
        console.error(`\n❌ Error saving document: ${error.message}`);
        console.error(error.stack);
    }
}

// ============== RUN THE DOCUMENT GENERATION ==============

generatePolynomialDivisionDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});
