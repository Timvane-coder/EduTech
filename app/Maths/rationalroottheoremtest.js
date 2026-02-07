import { EnhancedRationalRootTheoremWorkbook } from './rational-root-workbook.js';
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




// ============== RATIONAL ROOT THEOREM - RELATED PROBLEMS GENERATOR ==============

function generateRelatedRationalRootProblems() {
    const relatedProblems = [];

    // Problem 1: Simple Monic Cubic (Easy - All Integer Roots)
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Monic Cubic Polynomial',
        problem: 'Find all rational roots: x³ - 6x² + 11x - 6 = 0',
        coefficients: [1, -6, 11, -6],
        problemType: 'basic_monic',
        context: { 
            difficulty: 'beginner', 
            topic: 'Rational Root Theorem - Monic Polynomials',
            realWorld: 'Finding break-even points in business models'
        },
        subparts: [
            'Given: x³ - 6x² + 11x - 6 = 0',
            'Step 1: Identify that this is monic (leading coefficient = 1)',
            'Step 2: Find factors of constant term -6: ±1, ±2, ±3, ±6',
            'Step 3: These are ALL possible rational roots (since leading coeff = 1)',
            'Step 4: Test x = 1: 1 - 6 + 11 - 6 = 0 ✓ (ROOT)',
            'Step 5: Factor out (x - 1), quotient: x² - 5x + 6',
            'Step 6: Factor quotient: (x - 2)(x - 3)',
            'Step 7: All roots are x = 1, 2, 3',
            'Factorization: (x - 1)(x - 2)(x - 3) = 0'
        ],
        helper: 'For monic polynomials (leading coefficient = 1), only test integer factors of the constant term',
        solution: 'x = 1, 2, 3',
        factorization: '(x - 1)(x - 2)(x - 3)',
        realWorldContext: 'Like finding three production levels where profit equals zero in a manufacturing scenario'
    });

    // Problem 2: Monic Cubic with Mixed Signs (Easy-Medium)
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Monic Cubic with Negative Root',
        problem: 'Find all rational roots: x³ - 4x² + x + 6 = 0',
        coefficients: [1, -4, 1, 6],
        problemType: 'basic_monic',
        context: { 
            difficulty: 'beginner', 
            topic: 'Rational Root Theorem with Negative Roots',
            realWorld: 'Modeling population changes with negative growth periods'
        },
        subparts: [
            'Given: x³ - 4x² + x + 6 = 0',
            'Step 1: Monic polynomial, leading coefficient = 1',
            'Step 2: Factors of constant term 6: ±1, ±2, ±3, ±6',
            'Step 3: Test x = -1: -1 - 4 - 1 + 6 = 0 ✓ (ROOT)',
            'Step 4: Factor out (x + 1), quotient: x² - 5x + 6',
            'Step 5: Factor quotient: (x - 2)(x - 3)',
            'Step 6: All roots are x = -1, 2, 3',
            'Factorization: (x + 1)(x - 2)(x - 3) = 0'
        ],
        helper: 'Don\'t forget to test negative factors! They\'re just as important as positive ones',
        solution: 'x = -1, 2, 3',
        factorization: '(x + 1)(x - 2)(x - 3)',
        realWorldContext: 'Finding critical points in a trajectory where an object returns to ground level'
    });

    // Problem 3: Non-Monic Cubic with Fractional Root (Medium)
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Non-Monic Cubic Polynomial',
        problem: 'Find all rational roots: 2x³ - 5x² - 4x + 3 = 0',
        coefficients: [2, -5, -4, 3],
        problemType: 'cubic_polynomial',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Rational Root Theorem - Non-Monic Polynomials',
            realWorld: 'Engineering design optimization with constraints'
        },
        subparts: [
            'Given: 2x³ - 5x² - 4x + 3 = 0',
            'Step 1: Leading coefficient = 2, constant term = 3',
            'Step 2: Factors of 3 (p): ±1, ±3',
            'Step 3: Factors of 2 (q): ±1, ±2',
            'Step 4: Form p/q candidates: ±1, ±3, ±1/2, ±3/2',
            'Step 5: Test x = 3: 2(27) - 5(9) - 4(3) + 3 = 54 - 45 - 12 + 3 = 0 ✓',
            'Step 6: Factor out (x - 3), quotient: 2x² + x - 1',
            'Step 7: Factor quotient: (2x - 1)(x + 1)',
            'Step 8: From 2x - 1 = 0 → x = 1/2, from x + 1 = 0 → x = -1',
            'All roots: x = 3, 1/2, -1',
            'Factorization: (x - 3)(2x - 1)(x + 1) = 0'
        ],
        helper: 'For non-monic polynomials, form ALL p/q combinations where p divides constant and q divides leading coefficient',
        solution: 'x = -1, 1/2, 3',
        factorization: '(x - 3)(2x - 1)(x + 1)',
        realWorldContext: 'Determining optimal dimensions for a box design with volume constraints'
    });

    // Problem 4: Cubic with Multiple Fractional Candidates (Medium-Hard)
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Cubic with Many Candidates',
        problem: 'Find all rational roots: 6x³ - 11x² - 3x + 2 = 0',
        coefficients: [6, -11, -3, 2],
        problemType: 'cubic_polynomial',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Rational Root Theorem - Systematic Testing',
            realWorld: 'Chemical reaction equilibrium analysis'
        },
        subparts: [
            'Given: 6x³ - 11x² - 3x + 2 = 0',
            'Step 1: Leading coefficient = 6, constant term = 2',
            'Step 2: Factors of 2 (p): ±1, ±2',
            'Step 3: Factors of 6 (q): ±1, ±2, ±3, ±6',
            'Step 4: Possible p/q candidates: ±1, ±2, ±1/2, ±1/3, ±2/3, ±1/6',
            'Step 5: Test x = 2: 6(8) - 11(4) - 3(2) + 2 = 48 - 44 - 6 + 2 = 0 ✓',
            'Step 6: Factor out (x - 2), quotient: 6x² + x - 1',
            'Step 7: Factor quotient: (2x - 1)(3x + 1)',
            'Step 8: From 2x - 1 = 0 → x = 1/2, from 3x + 1 = 0 → x = -1/3',
            'All roots: x = 2, 1/2, -1/3',
            'Factorization: (x - 2)(2x - 1)(3x + 1) = 0'
        ],
        helper: 'With many candidates, test integers first (easier), then simple fractions like ±1/2, ±1/3',
        solution: 'x = -1/3, 1/2, 2',
        factorization: '(x - 2)(2x - 1)(3x + 1)',
        realWorldContext: 'Finding equilibrium concentrations in a three-component chemical system'
    });

    // Problem 5: Quartic Polynomial (Advanced)
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Quartic Polynomial',
        problem: 'Find all rational roots: x⁴ - 5x³ + 5x² + 5x - 6 = 0',
        coefficients: [1, -5, 5, 5, -6],
        problemType: 'quartic_polynomial',
        context: { 
            difficulty: 'advanced', 
            topic: 'Rational Root Theorem - Higher Degree Polynomials',
            realWorld: 'Complex system dynamics with multiple equilibrium points'
        },
        subparts: [
            'Given: x⁴ - 5x³ + 5x² + 5x - 6 = 0',
            'Step 1: Monic quartic, leading coefficient = 1',
            'Step 2: Factors of -6: ±1, ±2, ±3, ±6',
            'Step 3: Test x = 1: 1 - 5 + 5 + 5 - 6 = 0 ✓ (ROOT)',
            'Step 4: Factor out (x - 1), quotient: x³ - 4x² + x + 6',
            'Step 5: Test x = 2 in quotient: 8 - 16 + 2 + 6 = 0 ✓ (ROOT)',
            'Step 6: Factor out (x - 2), new quotient: x² - 2x - 3',
            'Step 7: Factor x² - 2x - 3 = (x - 3)(x + 1)',
            'Step 8: All roots are x = 1, 2, 3, -1',
            'Factorization: (x - 1)(x - 2)(x - 3)(x + 1) = 0'
        ],
        helper: 'For higher degree polynomials, factor progressively: find one root, divide it out, repeat on quotient',
        solution: 'x = -1, 1, 2, 3',
        factorization: '(x - 1)(x - 2)(x - 3)(x + 1)',
        realWorldContext: 'Analyzing a fourth-degree polynomial model for vibration modes in structural engineering'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveRationalRootRelatedProblems() {
    const problems = generateRelatedRationalRootProblems();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Rational Root Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedRationalRootTheoremWorkbook({
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
            const result = workbook.solveRationalRootProblem({
                polynomial: problem.problem.split(': ')[1] || problem.problem,
                coefficients: problem.coefficients,
                problemType: problem.problemType,
                context: problem.context
            });

            solvedProblems.push({
                problem: problem,
                workbook: workbook,
                result: result
            });

            console.log(`    ✓ Roots: ${result.roots ? result.roots.join(', ') : 'None found'}`);
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
    console.log('Generating Rational Root Theorem Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Rational Root Theorem Workbook',
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
            text: 'Monic, Non-Monic, Cubic, and Quartic Polynomials',
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
            text: 'Rational Root Theorem Problems (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const rrtProblems = generateRelatedRationalRootProblems();
    rrtProblems.forEach((problem, index) => {
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
            text: 'This workbook contains 5 carefully selected Rational Root Theorem problems that progressively build your understanding. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with the Rational Root Theorem',
        '• Systematic factor finding and candidate formation',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic, computational)',
        '• Synthetic division demonstrations for testing candidates',
        '• Common mistakes and error prevention strategies',
        '• Self-check questions and thinking prompts at each step',
        '• Real-world applications from engineering, chemistry, and physics',
        '• Alternative solution methods and optimization strategies',
        '• Complete factorization and verification of all roots',
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
            spacing: { after: 300 }
        })
    );

    // ============== RATIONAL ROOT THEOREM OVERVIEW ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'The Rational Root Theorem',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Theorem Statement:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'If p/q is a rational root of the polynomial equation aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀ = 0 (where all coefficients are integers and p/q is in lowest terms), then:',
            spacing: { after: 100 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: '• p divides the constant term a₀',
            spacing: { after: 50 },
            bullet: { level: 0 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: '• q divides the leading coefficient aₙ',
            spacing: { after: 200 },
            bullet: { level: 0 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Key Points:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const keyPoints = [
        'The theorem provides a finite list of ALL possible rational roots',
        'It does NOT guarantee that rational roots exist, only what they would be if they do',
        'For monic polynomials (leading coefficient = 1), all possible rational roots are integers',
        'Testing is still required - the theorem only narrows down the possibilities',
        'Synthetic division is the preferred method for testing candidates'
    ];

    keyPoints.forEach(point => {
        documentChildren.push(
            new docx.Paragraph({
                text: `✓ ${point}`,
                spacing: { after: 100 }
            })
        );
    });

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Rational Root Theorem Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Rational Root Theorem Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const rrtSolved = solveRationalRootRelatedProblems();
    
    rrtSolved.forEach((solved, index) => {
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
            solved.problem.difficulty === 'medium' ? '1976D2' : 
            'C62828';

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

        // Polynomial details
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: '📊 Polynomial Type: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.scenario
                    })
                ],
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: '🎯 Degree: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: String(solved.problem.coefficients.length - 1)
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
                        text: 'Rational Roots: ',
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

        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'Complete Factorization: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.factorization,
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
            text: 'Congratulations on completing these 5 Rational Root Theorem problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered finding factors of constant terms and leading coefficients',
        'You\'ve practiced forming and simplifying p/q candidate ratios',
        'You\'ve learned to test candidates systematically using synthetic division',
        'You\'ve factored polynomials completely using found roots',
        'You\'ve worked with both monic and non-monic polynomials',
        'You\'ve handled cubic and quartic polynomials confidently',
        'You\'ve seen real-world applications in engineering, chemistry, and physics',
        'You\'ve learned error prevention and common mistake avoidance strategies'
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
            text: 'Key Theorem Insights:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const insights = [
        'The Rational Root Theorem dramatically reduces the search space for roots',
        'Monic polynomials (leading coefficient = 1) simplify to testing only integers',
        'Systematic organization prevents missing candidates or creating duplicates',
        'Synthetic division efficiently tests candidates AND provides quotients for factoring',
        'Not all polynomials have rational roots - the theorem only tells what they would be',
        'Progressive factoring (finding one root, dividing it out, repeating) is powerful'
    ];

    insights.forEach(insight => {
        documentChildren.push(
            new docx.Paragraph({
                text: `📌 ${insight}`,
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
        'Practice with polynomials that have no rational roots (leads to irrational/complex)',
        'Learn Descartes\' Rule of Signs to predict number of positive/negative roots',
        'Study upper and lower bounds to eliminate candidates more efficiently',
        'Explore the Fundamental Theorem of Algebra (guarantees n roots for degree n)',
        'Apply to real-world modeling problems in your field of interest',
        'Combine with graphing to visualize polynomial behavior',
        'Study polynomial division and the Remainder Theorem in depth'
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
            text: 'Practice Recommendations:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const recommendations = [
        'Start with monic cubics to build confidence with the process',
        'Progress to non-monic cubics with fractional roots',
        'Challenge yourself with higher-degree polynomials (quartic, quintic)',
        'Try creating your own polynomials by expanding known factors',
        'Work backwards: start with roots and build the polynomial',
        'Time yourself to build efficiency with synthetic division',
        'Join study groups to discuss different problem-solving approaches'
    ];

    recommendations.forEach(rec => {
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
        const filename = 'rational_root_theorem_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Monic Cubic Polynomials: 2 problems');
        console.log('    - Non-Monic Cubic Polynomials: 2 problems');
        console.log('    - Quartic Polynomial: 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 50-60 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and polynomial type');
        console.log('  • Quick helper tips for the Rational Root Theorem');
        console.log('  • Real-world context from engineering, chemistry, and physics');
        console.log('  • Systematic factor finding for both constant and leading coefficients');
        console.log('  • Complete p/q candidate formation and simplification');
        console.log('  • Synthetic division demonstrations for testing each candidate');
        console.log('  • Progressive factorization showing quotient polynomials');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic, computational)');
        console.log('  • Verification of all roots through substitution');
        console.log('  • Complete factorization showing all factors');
        console.log('  • Key concepts and theorem application');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods and optimization strategies');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary with all roots and factorization');
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
