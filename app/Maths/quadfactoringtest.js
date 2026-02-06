import { EnhancedFactoringQuadraticsWorkbook } from './factoring-quadratics-workbook.js';
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




// ============== FACTORING QUADRATICS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedFactoringQuadraticsProblems() {
    const relatedProblems = [];

    // Problem 1: GCF Factoring
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'GCF Factoring',
        problem: 'Factor: 6x² + 9x',
        parameters: { a: 6, b: 9, c: 0 },
        problemType: 'gcf_only',
        context: { 
            difficulty: 'beginner', 
            topic: 'Greatest Common Factor Factoring',
            realWorld: 'Simplifying expressions by extracting common factors'
        },
        subparts: [
            'Given: 6x² + 9x',
            'Step 1: Find GCF of coefficients',
            'GCF(6, 9) = 3',
            'Step 2: Find GCF of variables',
            'Lowest power of x is x¹',
            'Step 3: Combined GCF = 3x',
            'Step 4: Factor out 3x',
            '6x² + 9x = 3x(2x + 3)',
            'Check: 3x(2x + 3) = 6x² + 9x ✓'
        ],
        helper: 'Always check for GCF first! Factor out the greatest common factor from all terms',
        solution: '3x(2x + 3)',
        realWorldContext: 'Like finding common dimensions in area calculations - what factor is shared by all terms?',
        verifyExpand: '3x × 2x = 6x², 3x × 3 = 9x, sum = 6x² + 9x ✓'
    });

    // Problem 2: Simple Trinomial (a = 1)
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Simple Trinomial Factoring',
        problem: 'Factor: x² + 7x + 12',
        parameters: { a: 1, b: 7, c: 12 },
        problemType: 'simple_trinomial',
        context: { 
            difficulty: 'beginner', 
            topic: 'Factoring Trinomials with Leading Coefficient 1',
            realWorld: 'Finding dimensions of rectangles from area expressions'
        },
        subparts: [
            'Given: x² + 7x + 12',
            'Step 1: Find two numbers that multiply to 12 and add to 7',
            'Factor pairs of 12: (1,12), (2,6), (3,4)',
            '1 + 12 = 13 ✗',
            '2 + 6 = 8 ✗',
            '3 + 4 = 7 ✓',
            'Step 2: Write as (x + 3)(x + 4)',
            'Check: (x + 3)(x + 4) = x² + 4x + 3x + 12 = x² + 7x + 12 ✓'
        ],
        helper: 'For x² + bx + c, find two numbers that multiply to c and add to b',
        solution: '(x + 3)(x + 4)',
        realWorldContext: 'Like finding length and width of a garden: if area is x² + 7x + 12, dimensions are (x+3) by (x+4)',
        verifyExpand: 'FOIL: First = x², Outer = 4x, Inner = 3x, Last = 12, sum = x² + 7x + 12 ✓'
    });

    // Problem 3: Difference of Squares
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Difference of Squares',
        problem: 'Factor: x² - 25',
        parameters: { a: 1, b: 0, c: -25 },
        problemType: 'difference_of_squares',
        context: { 
            difficulty: 'beginner', 
            topic: 'Special Pattern: Difference of Squares',
            realWorld: 'Comparing square areas or finding differences in quadratic relationships'
        },
        subparts: [
            'Given: x² - 25',
            'Step 1: Recognize the pattern a² - b²',
            'First term: x² = (x)²',
            'Second term: 25 = (5)²',
            'Step 2: Apply formula a² - b² = (a + b)(a - b)',
            'x² - 25 = (x + 5)(x - 5)',
            'Check: (x + 5)(x - 5) = x² - 5x + 5x - 25 = x² - 25 ✓',
            'Note: Middle terms cancel!'
        ],
        helper: 'Difference of squares: a² - b² = (a + b)(a - b). Only DIFFERENCE factors, not sum!',
        solution: '(x + 5)(x - 5)',
        realWorldContext: 'Like comparing two square plots: difference between x² and 5² square units',
        verifyExpand: 'Outer and inner terms (±5x) cancel, leaving x² - 25 ✓'
    });

    // Problem 4: AC Method (General Trinomial)
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'AC Method for General Trinomials',
        problem: 'Factor: 2x² + 7x + 3',
        parameters: { a: 2, b: 7, c: 3 },
        problemType: 'ac_method',
        context: { 
            difficulty: 'intermediate', 
            topic: 'AC Method for Trinomials with a ≠ 1',
            realWorld: 'Complex area problems with non-unit leading coefficients'
        },
        subparts: [
            'Given: 2x² + 7x + 3',
            'Step 1: Calculate AC = 2 × 3 = 6',
            'Step 2: Find factors of 6 that add to 7',
            'Factor pairs of 6: (1,6), (2,3)',
            '1 + 6 = 7 ✓',
            'Step 3: Rewrite middle term: 2x² + 1x + 6x + 3',
            'Step 4: Group: (2x² + 1x) + (6x + 3)',
            'Step 5: Factor each group: x(2x + 1) + 3(2x + 1)',
            'Step 6: Factor common binomial: (x + 3)(2x + 1)',
            'Check: (x + 3)(2x + 1) = 2x² + x + 6x + 3 = 2x² + 7x + 3 ✓'
        ],
        helper: 'AC Method: multiply a×c, find factors that add to b, split middle term, then group',
        solution: '(2x + 1)(x + 3)',
        realWorldContext: 'Like optimization problems: finding factors of a scaled quadratic expression',
        verifyExpand: 'FOIL gives 2x² + 6x + x + 3 = 2x² + 7x + 3 ✓'
    });

    // Problem 5: Perfect Square Trinomial
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Perfect Square Trinomial',
        problem: 'Factor: x² + 10x + 25',
        parameters: { a: 1, b: 10, c: 25 },
        problemType: 'perfect_square_trinomial',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Special Pattern: Perfect Square Trinomial',
            realWorld: 'Completing the square in geometric or algebraic contexts'
        },
        subparts: [
            'Given: x² + 10x + 25',
            'Step 1: Check if perfect square trinomial',
            'First term: √x² = x',
            'Last term: √25 = 5',
            'Step 2: Verify middle term = 2ab',
            'Expected: 2 × x × 5 = 10x ✓',
            'Actual: 10x ✓',
            'Step 3: Pattern confirmed: a² + 2ab + b² = (a + b)²',
            'x² + 10x + 25 = (x + 5)²',
            'Check: (x + 5)² = (x + 5)(x + 5) = x² + 5x + 5x + 25 = x² + 10x + 25 ✓'
        ],
        helper: 'Perfect square trinomial: a² + 2ab + b² = (a + b)². Check if middle = 2×√first×√last',
        solution: '(x + 5)²',
        realWorldContext: 'Like finding the side of a perfect square: if area is x² + 10x + 25, it\'s a square with side (x+5)',
        verifyExpand: 'Expanding (x+5)² gives x² + 10x + 25 ✓. Discriminant b²-4ac = 100-100 = 0 confirms perfect square'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveFactoringQuadraticsRelatedProblems() {
    const problems = generateRelatedFactoringQuadraticsProblems();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Factoring Quadratics Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedFactoringQuadraticsWorkbook({
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
            const result = workbook.solveFactoringProblem({
                expression: problem.problem.split(': ')[1] || problem.problem,
                problemType: problem.problemType,
                parameters: problem.parameters,
                context: problem.context
            });

            solvedProblems.push({
                problem: problem,
                workbook: workbook,
                result: result
            });

            console.log(`    ✓ Factorization: ${result.factorization}`);
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
    console.log('Generating Factoring Quadratics Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Factoring Quadratics Workbook',
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
            text: 'GCF, Simple Trinomials, Difference of Squares, AC Method, and Perfect Squares',
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
            text: 'Factoring Quadratics (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const factoringProblems = generateRelatedFactoringQuadraticsProblems();
    factoringProblems.forEach((problem, index) => {
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
            text: 'This workbook contains 5 carefully selected factoring quadratics problems that cover all major factoring methods. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed explanations',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Pattern recognition guides for each factoring method',
        '• Common mistakes and error prevention strategies',
        '• Self-check questions and thinking prompts',
        '• Real-world applications and geometric interpretations',
        '• Alternative solution methods and approaches',
        '• FOIL verification of factorizations',
        '• Pedagogical notes for deeper understanding',
        '• Practice problems for each method'
    ];

    features.forEach(feature => {
        documentChildren.push(
            new docx.Paragraph({
                text: feature,
                spacing: { after: 100 }
            })
        );
    });

    // ============== FACTORING OVERVIEW ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Factoring Methods Overview',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    const factoringMethods = [
        {
            method: 'GCF (Greatest Common Factor)',
            when: 'ALWAYS check this first',
            pattern: 'ax² + bx → GCF(ax + b)',
            example: '6x² + 9x = 3x(2x + 3)'
        },
        {
            method: 'Simple Trinomial',
            when: 'When leading coefficient a = 1',
            pattern: 'x² + bx + c = (x + m)(x + n) where m+n=b, mn=c',
            example: 'x² + 5x + 6 = (x + 2)(x + 3)'
        },
        {
            method: 'Difference of Squares',
            when: 'Two terms, both perfect squares, subtraction',
            pattern: 'a² - b² = (a + b)(a - b)',
            example: 'x² - 16 = (x + 4)(x - 4)'
        },
        {
            method: 'AC Method',
            when: 'General trinomial where a ≠ 1',
            pattern: 'Calculate AC, find factors, split middle term, group',
            example: '2x² + 7x + 3 = (2x + 1)(x + 3)'
        },
        {
            method: 'Perfect Square Trinomial',
            when: 'First and last are perfect squares, middle = 2ab',
            pattern: 'a² ± 2ab + b² = (a ± b)²',
            example: 'x² + 6x + 9 = (x + 3)²'
        }
    ];

    factoringMethods.forEach((method, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${method.method}`,
                heading: docx.HeadingLevel.HEADING_3,
                spacing: { before: 200, after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'When to use: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: method.when
                    })
                ],
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'Pattern: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: method.pattern,
                        italics: true
                    })
                ],
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'Example: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: method.example,
                        color: '1976D2'
                    })
                ],
                spacing: { after: 200 }
            })
        );
    });

    // ============== FACTORING STRATEGY FLOWCHART ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Factoring Strategy Flowchart',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    const flowchartSteps = [
        '1. ALWAYS check for GCF first and factor it out',
        '2. Count the remaining terms:',
        '   • 2 terms? → Check for difference of squares (a² - b²)',
        '   • 3 terms? → Go to step 3',
        '   • 4 terms? → Try factoring by grouping',
        '3. For 3-term expressions (trinomials):',
        '   • Check if perfect square trinomial (a² ± 2ab + b²)',
        '   • If yes → Factor as (a ± b)²',
        '   • If no → Go to step 4',
        '4. Is the leading coefficient 1?',
        '   • If a = 1 → Use simple trinomial method',
        '   • If a ≠ 1 → Use AC method or trial and error',
        '5. Check if factors can be factored further',
        '6. ALWAYS verify by expanding back to original expression'
    ];

    flowchartSteps.forEach(step => {
        documentChildren.push(
            new docx.Paragraph({
                text: step,
                spacing: { after: 100 },
                shading: {
                    fill: step.startsWith('   •') ? 'F5F5F5' : 'FFFFFF',
                    type: docx.ShadingType.CLEAR
                }
            })
        );
    });

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Factoring Quadratics Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Factoring Quadratics Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const factoringProblemsSolved = solveFactoringQuadraticsRelatedProblems();
    
    factoringProblemsSolved.forEach((solved, index) => {
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
                    fill: "FFE6F0",
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

        // Method indicator
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'Factoring Method: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.scenario,
                        color: '6A1B9A'
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
                        text: 'Final Answer: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.solution,
                        bold: true,
                        color: '2E7D32'
                    })
                ],
                spacing: { before: 200, after: 200 },
                shading: {
                    fill: "E8F5E9",
                    type: docx.ShadingType.CLEAR
                }
            })
        );

        // Verification
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: '✓ Verification: ',
                        bold: true,
                        color: '2E7D32'
                    }),
                    new docx.TextRun({
                        text: solved.problem.verifyExpand
                    })
                ],
                spacing: { after: 400 },
                shading: {
                    fill: "F1F8E9",
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
            text: 'Congratulations on completing these 5 factoring quadratics problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered GCF factoring - the essential first step',
        'You\'ve practiced simple trinomial factoring for expressions where a = 1',
        'You\'ve learned the difference of squares pattern - a powerful shortcut',
        'You\'ve conquered the AC method for general trinomials',
        'You\'ve recognized and factored perfect square trinomials',
        'You\'ve seen real-world applications of factoring',
        'You\'ve learned to verify factorizations using FOIL'
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
            text: 'Key Strategies to Remember:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const keyStrategies = [
        '1. ALWAYS check for GCF first before other methods',
        '2. Recognize patterns: difference of squares and perfect square trinomials',
        '3. For trinomials: check if a = 1 (simple method) or a ≠ 1 (AC method)',
        '4. Organize factor pairs systematically to avoid missing solutions',
        '5. Watch for sign patterns: both positive, both negative, or mixed',
        '6. ALWAYS verify by expanding back to original expression',
        '7. Check if factors can be factored further (complete factorization)'
    ];

    keyStrategies.forEach(strategy => {
        documentChildren.push(
            new docx.Paragraph({
                text: strategy,
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
        'Practice factoring by grouping (4-term polynomials)',
        'Explore sum and difference of cubes',
        'Apply factoring to solve quadratic equations',
        'Use factoring in graphing parabolas (finding x-intercepts)',
        'Apply factoring to simplify rational expressions',
        'Practice complete factorization (combining multiple methods)',
        'Solve real-world problems using factoring'
    ];

    nextSteps.forEach((step, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${step}`,
                spacing: { after: 100 }
            })
        );
    });

    // ============== COMMON MISTAKES TO AVOID ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Common Mistakes to Avoid',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    const commonMistakes = [
        {
            mistake: 'Skipping the GCF check',
            correction: 'ALWAYS check for GCF first - it simplifies everything else'
        },
        {
            mistake: 'Confusing sum and difference of squares',
            correction: 'Only DIFFERENCE of squares factors: a² - b². Sum a² + b² is prime over reals'
        },
        {
            mistake: 'Forgetting to multiply a × c in AC method',
            correction: 'AC method requires finding factors of a×c, not just c'
        },
        {
            mistake: 'Not verifying perfect square trinomials',
            correction: 'Always check: middle term must equal 2 × √first × √last'
        },
        {
            mistake: 'Sign errors in factor pairs',
            correction: 'Pay attention to sign patterns: both positive, both negative, or mixed'
        },
        {
            mistake: 'Stopping before complete factorization',
            correction: 'After factoring, check if factors can be factored further'
        },
        {
            mistake: 'Not verifying the factorization',
            correction: 'ALWAYS expand using FOIL to confirm your answer'
        }
    ];

    commonMistakes.forEach((item, index) => {
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: `${index + 1}. `,
                        bold: true
                    }),
                    new docx.TextRun({
                        text: item.mistake,
                        color: 'D32F2F'
                    })
                ],
                spacing: { after: 50 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: '   ✓ ',
                        color: '388E3C',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: item.correction,
                        color: '388E3C'
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
        const filename = 'factoring_quadratics_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - GCF Factoring: 1 problem');
        console.log('    - Simple Trinomial: 1 problem');
        console.log('    - Difference of Squares: 1 problem');
        console.log('    - AC Method: 1 problem');
        console.log('    - Perfect Square Trinomial: 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 45-55 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and visual highlighting');
        console.log('  • Factoring method identification');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Pattern recognition guides');
        console.log('  • Complete step-by-step solution with enhanced explanations');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • FOIL verification of factorization');
        console.log('  • Key concepts and learning objectives');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary');
        console.log('  • Visual verification with highlighted steps');
        console.log('\n📚 Special Features:');
        console.log('  • Comprehensive factoring methods overview');
        console.log('  • Strategic flowchart for choosing factoring methods');
        console.log('  • Common mistakes section with corrections');
        console.log('  • Next steps and learning progression guide');
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
