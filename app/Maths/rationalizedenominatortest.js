import { EnhancedRationalizingDenominatorsWorkbook } from './rationalizing-denominators-workbook.js';
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




// ============== RATIONALIZING DENOMINATORS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedRationalizingProblems() {
    const relatedProblems = [];

    // Problem 1: Simple Monomial Square Root
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Simple Monomial Square Root Denominator',
        problem: 'Rationalize: 1/√3',
        numerator: 1,
        denominator: 'sqrt(3)',
        radical: 3,
        problemType: 'monomial_square_root',
        context: { 
            difficulty: 'beginner', 
            topic: 'Rationalizing Monomial Denominators',
            realWorld: 'Basic rationalization technique'
        },
        subparts: [
            'Given: 1/√3',
            'Goal: Eliminate √3 from the denominator',
            'Multiply by √3/√3 (which equals 1):',
            '(1/√3) × (√3/√3)',
            'Numerator: 1 × √3 = √3',
            'Denominator: √3 × √3 = 3',
            'Result: √3/3',
            'Check: Denominator is rational ✓'
        ],
        helper: 'Multiply both numerator and denominator by the radical in the denominator',
        solution: '√3/3',
        rationalizedForm: '√3/3',
        realWorldContext: 'Used in geometry when calculating perpendicular distances or normalizing vectors'
    });

    // Problem 2: Monomial with Coefficient
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Monomial with Coefficient',
        problem: 'Rationalize: 6/(2√5)',
        numerator: 6,
        denominator: '2*sqrt(5)',
        coefficient: 2,
        radical: 5,
        problemType: 'monomial_square_root_coefficient',
        context: { 
            difficulty: 'beginner', 
            topic: 'Rationalizing with Coefficients',
            realWorld: 'Simplifying complex fractions with radicals'
        },
        subparts: [
            'Given: 6/(2√5)',
            'Step 1: Multiply by √5/√5:',
            '(6/(2√5)) × (√5/√5)',
            'Numerator: 6√5',
            'Denominator: 2 × 5 = 10',
            'Result: (6√5)/10',
            'Step 2: Simplify by dividing by GCD(6,10)=2:',
            '(6√5)/10 = (3√5)/5',
            'Check: Denominator is rational ✓'
        ],
        helper: 'Multiply by the radical, then simplify the resulting fraction',
        solution: '(3√5)/5',
        rationalizedForm: '(3√5)/5',
        realWorldContext: 'Common in physics formulas involving square roots and coefficients'
    });

    // Problem 3: Binomial with Integer and Radical
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Binomial Denominator (Integer + Radical)',
        problem: 'Rationalize: 4/(2 + √3)',
        numerator: 4,
        denominator: '2 + sqrt(3)',
        integer: 2,
        radical: 3,
        sign: '+',
        problemType: 'binomial_mixed',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Rationalizing Binomial Denominators',
            realWorld: 'Using conjugates to eliminate radicals'
        },
        subparts: [
            'Given: 4/(2 + √3)',
            'Step 1: Identify conjugate: (2 - √3)',
            'Step 2: Multiply by conjugate over itself:',
            '(4/(2 + √3)) × ((2 - √3)/(2 - √3))',
            'Step 3: Multiply numerator:',
            '4(2 - √3) = 8 - 4√3',
            'Step 4: Apply difference of squares in denominator:',
            '(2 + √3)(2 - √3) = 2² - (√3)² = 4 - 3 = 1',
            'Result: 8 - 4√3',
            'Check: Denominator is 1 (rational) ✓'
        ],
        helper: 'Use the conjugate (change the middle sign) and apply difference of squares: (a+b)(a-b) = a² - b²',
        solution: '8 - 4√3',
        rationalizedForm: '8 - 4√3',
        realWorldContext: 'Used in complex calculations in engineering and physics where binomial denominators appear'
    });

    // Problem 4: Binomial with Two Radicals
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Binomial with Two Square Roots',
        problem: 'Rationalize: 6/(√7 + √2)',
        numerator: 6,
        denominator: 'sqrt(7) + sqrt(2)',
        radical1: 7,
        radical2: 2,
        problemType: 'binomial_sum_square_roots',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Rationalizing Binomials with Two Radicals',
            realWorld: 'Advanced rationalization with multiple radicals'
        },
        subparts: [
            'Given: 6/(√7 + √2)',
            'Step 1: Identify conjugate: (√7 - √2)',
            'Step 2: Multiply by conjugate:',
            '(6/(√7 + √2)) × ((√7 - √2)/(√7 - √2))',
            'Step 3: Distribute in numerator:',
            '6(√7 - √2) = 6√7 - 6√2',
            'Step 4: Apply difference of squares:',
            '(√7 + √2)(√7 - √2) = (√7)² - (√2)² = 7 - 2 = 5',
            'Result: (6√7 - 6√2)/5',
            'Check: Denominator is 5 (rational) ✓'
        ],
        helper: 'When both terms are radicals, the conjugate still eliminates them via difference of squares',
        solution: '(6√7 - 6√2)/5',
        rationalizedForm: '(6√7 - 6√2)/5',
        realWorldContext: 'Appears in advanced geometry problems involving irrational lengths'
    });

    // Problem 5: Cube Root Denominator
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Cube Root Denominator',
        problem: 'Rationalize: 2/∛4',
        numerator: 2,
        denominator: 'cbrt(4)',
        radical: 4,
        problemType: 'cube_root_simple',
        context: { 
            difficulty: 'advanced', 
            topic: 'Rationalizing Cube Root Denominators',
            realWorld: 'Higher-order root rationalization'
        },
        subparts: [
            'Given: 2/∛4',
            'Note: ∛4 = ∛(2²)',
            'Goal: Create ∛(2³) = 2 in denominator',
            'Step 1: Determine needed factor:',
            'Have ∛(2²), need ∛(2³), so multiply by ∛2',
            'Step 2: Multiply by ∛2/∛2:',
            '(2/∛4) × (∛2/∛2)',
            'Numerator: 2∛2',
            'Denominator: ∛4 × ∛2 = ∛8 = ∛(2³) = 2',
            'Result: (2∛2)/2 = ∛2',
            'Check: Denominator is 2 (rational) ✓'
        ],
        helper: 'For cube roots, multiply by the factor that creates a perfect cube. For ∛(a²), multiply by ∛a',
        solution: '∛2',
        rationalizedForm: '∛2',
        realWorldContext: 'Used in volume calculations and three-dimensional scaling problems'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveRationalizingRelatedProblems() {
    const problems = generateRelatedRationalizingProblems();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Rationalizing Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedRationalizingDenominatorsWorkbook({
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
            const result = workbook.solveRationalizingProblem({
                expression: problem.problem.split(': ')[1] || problem.problem,
                numerator: problem.numerator,
                denominator: problem.denominator,
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

async function generateRationalizingDocument() {
    console.log('Generating Rationalizing Denominators Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Rationalizing Denominators Workbook',
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
            text: 'Monomial, Binomial, and Cube Root Denominators',
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
            text: 'Rationalizing Denominators (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const rationalizingProblems = generateRelatedRationalizingProblems();
    rationalizingProblems.forEach((problem, index) => {
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
            text: 'This workbook contains 5 carefully selected rationalizing denominators problems that progressively build your understanding from simple monomial square roots to complex cube roots. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed explanations',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Conjugate identification and application techniques',
        '• Difference of squares pattern recognition',
        '• Common mistakes and error prevention tips',
        '• Self-check questions and thinking prompts',
        '• Real-world applications and context',
        '• Alternative solution methods',
        '• Verification of rationalized forms',
        '• Pedagogical notes for deeper understanding',
        '• Conjugate reference guide',
        '• Simplification strategies'
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
            text: 'What is Rationalizing?',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 150 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Rationalizing a denominator means eliminating all radicals (square roots, cube roots, etc.) from the bottom of a fraction. We do this by multiplying by a clever form of 1 that eliminates the radical without changing the value of the expression.',
            spacing: { after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Why Rationalize?',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 150 }
        })
    );

    const whyPoints = [
        '• Historical: Made division easier before calculators',
        '• Standard Form: Mathematical convention and cleaner appearance',
        '• Easier Comparison: Simpler to compare values with rational denominators',
        '• Further Calculations: Facilitates additional algebraic manipulation',
        '• Numerical Computation: Can improve computational accuracy'
    ];

    whyPoints.forEach(point => {
        documentChildren.push(
            new docx.Paragraph({
                text: point,
                spacing: { after: 100 }
            })
        );
    });

    // ============== KEY CONCEPTS SECTION ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Key Concepts',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: '1. Monomial Square Root: Multiply by the radical over itself',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Formula: a/√b = (a/√b) × (√b/√b) = (a√b)/b',
            spacing: { after: 100 },
            italics: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Example: 1/√5 = (√5)/5',
            spacing: { after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: '2. Binomial Denominator: Use the conjugate',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Conjugate Rule: Change the middle sign only',
            spacing: { after: 100 },
            italics: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Example: Conjugate of (a + √b) is (a - √b)',
            spacing: { after: 100 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Pattern: (a + b)(a - b) = a² - b²',
            spacing: { after: 200 },
            italics: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: '3. Cube Root: Create a perfect cube',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Rule: For ∛a, multiply by ∛(a²) to get ∛(a³) = a',
            spacing: { after: 100 },
            italics: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Example: 1/∛3 = ∛9/3',
            spacing: { after: 200 }
        })
    );

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Rationalizing Denominators Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Rationalizing Denominators Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const rationalizingSolved = solveRationalizingRelatedProblems();
    
    rationalizingSolved.forEach((solved, index) => {
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
                    fill: "E0F2F7",
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
                    fill: "FFF9E6",
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
            text: 'Congratulations on completing these 5 rationalizing denominators problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered monomial square root rationalization',
        'You\'ve learned to work with coefficients in denominators',
        'You\'ve practiced using conjugates for binomial denominators',
        'You\'ve understood the difference of squares pattern',
        'You\'ve tackled cube root rationalization',
        'You\'ve seen real-world applications of rationalization'
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
            text: 'Key Techniques Mastered:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const techniques = [
        '1. Multiplying by forms of 1 (radical/radical)',
        '2. Identifying and applying conjugates',
        '3. Using difference of squares: (a+b)(a-b) = a² - b²',
        '4. Creating perfect powers for higher roots',
        '5. Simplifying radicals before and after rationalization',
        '6. Verifying that denominators are rational'
    ];

    techniques.forEach(technique => {
        documentChildren.push(
            new docx.Paragraph({
                text: technique,
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
        'Practice rationalizing with variables in radicals',
        'Work with nested radicals',
        'Explore rationalizing numerators (used in calculus)',
        'Apply to complex fractions with multiple radicals',
        'Study applications in geometry and physics'
    ];

    nextSteps.forEach((step, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${step}`,
                spacing: { after: 100 }
            })
        );
    });

    // ============== REFERENCE SECTION ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Quick Reference Guide',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Common Rationalization Patterns:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const patterns = [
        '• 1/√a → √a/a',
        '• n/√a → (n√a)/a',
        '• 1/(a + √b) → (a - √b)/(a² - b)',
        '• 1/(√a + √b) → (√a - √b)/(a - b)',
        '• 1/∛a → ∛(a²)/a',
        '• 1/∛(a²) → ∛a/a'
    ];

    patterns.forEach(pattern => {
        documentChildren.push(
            new docx.Paragraph({
                text: pattern,
                spacing: { after: 100 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: 'Important Reminders:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const reminders = [
        '✓ Always multiply BOTH numerator and denominator',
        '✓ Conjugate changes ONLY the middle sign',
        '✓ (√a)² = a, not 2a',
        '✓ Simplify radicals before rationalizing when possible',
        '✓ Check that final denominator has NO radicals',
        '✓ Reduce fractions to lowest terms'
    ];

    reminders.forEach(reminder => {
        documentChildren.push(
            new docx.Paragraph({
                text: reminder,
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
        const filename = 'rationalizing_denominators_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Monomial Square Root: 2 problems');
        console.log('    - Binomial Denominators: 2 problems');
        console.log('    - Cube Root: 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 45-55 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and visual highlighting');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Complete step-by-step solution with enhanced explanations');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Conjugate identification and application (for binomials)');
        console.log('  • Difference of squares pattern explanation');
        console.log('  • Verification of rationalized denominators');
        console.log('  • Key concepts and learning objectives');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Conjugate reference guide');
        console.log('  • Simplification strategies');
        console.log('  • Quick reference solution summary');
        console.log('='.repeat(80) + '\n');
    } catch (error) {
        console.error(`\n❌ Error saving document: ${error.message}`);
        console.error(error.stack);
    }
}

// ============== RUN THE DOCUMENT GENERATION ==============

generateRationalizingDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});
