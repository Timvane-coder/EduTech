import { EnhancedNestedRadicalsMathematicalWorkbook } from './nested-radicals-workbook.js';
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




// ============== NESTED RADICALS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedNestedRadicalsProblems() {
    const relatedProblems = [];

    // Problem 1: Simple Nested Radical (Denestable)
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Simple Nested Radical - Denesting',
        problem: 'Simplify: √(5 + 2√6)',
        parameters: { a: 5, b: 24 }, // Note: 2√6 = √24
        problemType: 'simple_nested',
        context: { 
            difficulty: 'beginner', 
            topic: 'Denesting Nested Radicals',
            realWorld: 'Simplifying complex radical expressions in geometry'
        },
        subparts: [
            'Given: √(5 + 2√6)',
            'Step 1: Rewrite 2√6 as √24',
            'Expression becomes: √(5 + √24)',
            'Step 2: Check denesting condition',
            'Calculate a² - b = 5² - 24 = 25 - 24 = 1',
            '1 is a perfect square! So denesting is possible.',
            'Step 3: Find c = √(a² - b) = √1 = 1',
            'Step 4: Apply Ramanujan formula',
            '√((a+c)/2) + √((a-c)/2)',
            '= √((5+1)/2) + √((5-1)/2)',
            '= √3 + √2',
            'Verification: (√3 + √2)² = 3 + 2 + 2√6 = 5 + 2√6 ✓'
        ],
        helper: 'Check if a² - b is a perfect square. If yes, use Ramanujan denesting formula',
        solution: '√3 + √2',
        realWorldContext: 'Denesting appears in geometric constructions and simplifying diagonal lengths in complex shapes'
    });

    // Problem 2: Infinite Nested Radical (Converges to 2)
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Infinite Nested Radical',
        problem: 'Evaluate: √(2 + √(2 + √(2 + ...)))',
        parameters: { a: 2 },
        problemType: 'infinite_nested',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Infinite Nested Radicals',
            realWorld: 'Understanding convergence in recursive patterns'
        },
        subparts: [
            'Given: √(2 + √(2 + √(2 + ...)))',
            'Step 1: Recognize the self-repeating pattern',
            'The expression contains itself infinitely',
            'Step 2: Set up self-reference equation',
            'Let x = √(2 + √(2 + √(2 + ...)))',
            'Then x = √(2 + x) (since the pattern repeats)',
            'Step 3: Square both sides',
            'x² = 2 + x',
            'Step 4: Rearrange to standard quadratic form',
            'x² - x - 2 = 0',
            'Step 5: Factor the quadratic',
            '(x - 2)(x + 1) = 0',
            'Solutions: x = 2 or x = -1',
            'Step 6: Choose positive solution',
            'x = 2 (since √ means positive root)',
            'Verification: 2 = √(2 + 2) = √4 = 2 ✓'
        ],
        helper: 'For infinite nested radicals with pattern x = √(a + x), square both sides to get a quadratic equation',
        solution: '2',
        realWorldContext: 'Infinite nested patterns appear in fractal mathematics and iterative algorithms'
    });

    // Problem 3: Simple Nested Radical with Subtraction (Denestable)
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Nested Radical with Subtraction',
        problem: 'Simplify: √(7 - 4√3)',
        parameters: { a: 7, b: 48 }, // Note: 4√3 = √48
        problemType: 'simple_nested',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Denesting with Subtraction',
            realWorld: 'Solving geometric problems involving differences'
        },
        subparts: [
            'Given: √(7 - 4√3)',
            'Step 1: Rewrite 4√3 as √48',
            'Expression becomes: √(7 - √48)',
            'Step 2: Check denesting condition',
            'Calculate a² - b = 7² - 48 = 49 - 48 = 1',
            '1 is a perfect square! Denesting is possible.',
            'Step 3: Find c = √(a² - b) = √1 = 1',
            'Step 4: Apply Ramanujan formula (note the minus sign)',
            '√((a+c)/2) - √((a-c)/2)',
            '= √((7+1)/2) - √((7-1)/2)',
            '= √4 - √3',
            '= 2 - √3',
            'Verification: (2 - √3)² = 4 - 4√3 + 3 = 7 - 4√3 ✓'
        ],
        helper: 'For √(a - √b), the denested form has a minus sign: √p - √q',
        solution: '2 - √3',
        realWorldContext: 'Appears in calculating differences in diagonal measurements and in certain physics formulas'
    });

    // Problem 4: Golden Ratio - Infinite Nested Radical
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'The Golden Ratio',
        problem: 'Evaluate: √(1 + √(1 + √(1 + ...)))',
        parameters: { a: 1 },
        problemType: 'infinite_nested',
        context: { 
            difficulty: 'advanced', 
            topic: 'Golden Ratio and Infinite Nested Radicals',
            realWorld: 'Found in art, architecture, and nature (seashells, sunflowers, galaxies)'
        },
        subparts: [
            'Given: √(1 + √(1 + √(1 + ...)))',
            'This is the famous golden ratio!',
            'Step 1: Set up self-reference equation',
            'Let φ = √(1 + √(1 + √(1 + ...)))',
            'Then φ = √(1 + φ)',
            'Step 2: Square both sides',
            'φ² = 1 + φ',
            'Step 3: Rearrange to quadratic form',
            'φ² - φ - 1 = 0',
            'Step 4: Apply quadratic formula',
            'φ = (1 ± √(1 + 4))/2 = (1 ± √5)/2',
            'Step 5: Choose positive solution',
            'φ = (1 + √5)/2 ≈ 1.618...',
            'This is the golden ratio!',
            'Verification: φ² = φ + 1 (golden ratio property) ✓',
            'Historical Note: Known to ancient Greeks, appears throughout nature'
        ],
        helper: 'The golden ratio satisfies φ² = φ + 1 and appears in Fibonacci sequence, art, and nature',
        solution: '(1 + √5)/2 ≈ 1.618 (golden ratio φ)',
        realWorldContext: 'The golden ratio appears in nautilus shells, sunflower seed patterns, galaxy spirals, classical architecture (Parthenon), and Renaissance art'
    });

    // Problem 5: Another Denestable Nested Radical
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Nested Radical with Larger Numbers',
        problem: 'Simplify: √(11 + 6√2)',
        parameters: { a: 11, b: 72 }, // Note: 6√2 = √72
        problemType: 'simple_nested',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Denesting Practice',
            realWorld: 'Simplifying radical expressions in engineering calculations'
        },
        subparts: [
            'Given: √(11 + 6√2)',
            'Step 1: Rewrite 6√2 as √72',
            'Expression becomes: √(11 + √72)',
            'Step 2: Check denesting condition',
            'Calculate a² - b = 11² - 72 = 121 - 72 = 49',
            '49 = 7² is a perfect square! Denesting is possible.',
            'Step 3: Find c = √(a² - b) = √49 = 7',
            'Step 4: Apply Ramanujan formula',
            '√((a+c)/2) + √((a-c)/2)',
            '= √((11+7)/2) + √((11-7)/2)',
            '= √9 + √2',
            '= 3 + √2',
            'Verification: (3 + √2)² = 9 + 6√2 + 2 = 11 + 6√2 ✓'
        ],
        helper: 'Always check a² - b first. If it\'s a perfect square, denesting is straightforward',
        solution: '3 + √2',
        realWorldContext: 'Used in structural engineering to simplify complex load calculations and stress formulas'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveNestedRadicalsRelatedProblems() {
    const problems = generateRelatedNestedRadicalsProblems();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Nested Radicals Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedNestedRadicalsMathematicalWorkbook({
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
            const result = workbook.solveNestedRadicalProblem({
                expression: problem.problem.split(': ')[1] || problem.problem,
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

            console.log(`    ✓ Solution: ${result.solutionValue || 'See workbook'}`);
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
    console.log('Generating Nested Radicals Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Nested Radicals Workbook',
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
            text: 'Denesting, Infinite Patterns, and the Golden Ratio',
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
            text: 'Nested Radicals (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const nestedProblems = generateRelatedNestedRadicalsProblems();
    nestedProblems.forEach((problem, index) => {
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
            text: 'Introduction to Nested Radicals',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Nested radicals are square roots that contain other square roots within them. This workbook explores both simple nested radicals that can be "denested" into simpler forms, and infinite nested radicals that converge to beautiful mathematical constants like the golden ratio.',
            spacing: { after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'This workbook contains 5 carefully selected nested radical problems that progressively build your understanding. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed explanations',
        '• Ramanujan denesting formula and techniques',
        '• Self-reference equations for infinite nested radicals',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Common mistakes and error prevention tips',
        '• Historical context (Ramanujan, golden ratio)',
        '• Real-world applications in geometry, art, and nature',
        '• Alternative solution methods',
        '• Verification of solutions',
        '• Pedagogical notes for deeper understanding',
        '• ELI5 explanations with analogies'
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
            text: 'Key Concepts',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    const keyConcepts = [
        {
            title: 'Nested Radicals',
            description: 'A radical expression containing another radical inside it, like √(a + √b)'
        },
        {
            title: 'Denesting',
            description: 'Converting a nested radical to a sum or difference of simpler radicals: √(a ± √b) = √p ± √q'
        },
        {
            title: 'Denesting Condition',
            description: 'Denesting is possible when a² - b is a perfect square'
        },
        {
            title: 'Ramanujan Formula',
            description: '√(a ± √b) = √((a+c)/2) ± √((a-c)/2) where c = √(a² - b)'
        },
        {
            title: 'Infinite Nested Radicals',
            description: 'Patterns like √(a + √(a + √(a + ...))) that converge to finite values'
        },
        {
            title: 'Self-Reference Equation',
            description: 'For infinite patterns: x = √(a + x), which leads to x² - x - a = 0'
        },
        {
            title: 'Golden Ratio',
            description: 'φ = (1 + √5)/2 ≈ 1.618, satisfies √(1 + √(1 + √(1 + ...))) = φ'
        }
    ];

    keyConcepts.forEach(concept => {
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: `${concept.title}: `,
                        bold: true
                    }),
                    new docx.TextRun({
                        text: concept.description
                    })
                ],
                spacing: { after: 150 }
            })
        );
    });

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Nested Radicals Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Nested Radicals Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const nestedSolved = solveNestedRadicalsRelatedProblems();
    
    nestedSolved.forEach((solved, index) => {
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
        const difficultyColor = solved.problem.difficulty === 'easy' ? '2E7D32' : 
                                solved.problem.difficulty === 'medium' ? '1976D2' : 'D32F2F';
        
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'Difficulty: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.difficulty.toUpperCase(),
                        color: difficultyColor,
                        bold: true
                    })
                ],
                spacing: { after: 100 }
            })
        );

        // Topic
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'Topic: ',
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

        // Special note for golden ratio problem
        if (solved.problem.scenario.includes('Golden Ratio')) {
            documentChildren.push(
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            text: '⭐ Special Note: ',
                            bold: true
                        }),
                        new docx.TextRun({
                            text: 'This problem reveals the famous golden ratio (φ), one of the most beautiful constants in mathematics, art, and nature!',
                            italics: true
                        })
                    ],
                    spacing: { after: 300 },
                    shading: {
                        fill: "FFF9C4",
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

    // ============== RAMANUJAN SECTION ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'About Srinivasa Ramanujan',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'The Genius Behind the Denesting Formula',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { after: 200 }
        })
    );

    const ramanujanInfo = [
        'Srinivasa Ramanujan (1887-1920) was an Indian mathematical genius who made extraordinary contributions to number theory, infinite series, and continued fractions.',
        '',
        'Despite having almost no formal training in pure mathematics, Ramanujan independently discovered numerous deep mathematical results and formulas.',
        '',
        'His work on nested radicals includes the famous denesting formula used throughout this workbook, as well as incredible identities like:',
        '',
        '√(1 + 2√(1 + 3√(1 + 4√(...)))) = 3',
        '',
        'Ramanujan\'s story is one of raw talent, intuition, and mathematical beauty. His notebooks continue to inspire mathematicians today.',
        '',
        'He worked with British mathematician G.H. Hardy at Cambridge University, and their collaboration produced some of the most beautiful mathematics of the 20th century.'
    ];

    ramanujanInfo.forEach(text => {
        if (text === '') {
            documentChildren.push(
                new docx.Paragraph({
                    text: '',
                    spacing: { after: 100 }
                })
            );
        } else {
            documentChildren.push(
                new docx.Paragraph({
                    text: text,
                    spacing: { after: 150 }
                })
            );
        }
    });

    // ============== GOLDEN RATIO SECTION ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'The Golden Ratio in Nature and Art',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'φ = (1 + √5)/2 ≈ 1.618033988...',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { after: 200 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    const goldenRatioInfo = [
        {
            title: 'In Nature',
            items: [
                'Spiral patterns in nautilus shells follow the golden ratio',
                'Sunflower seed arrangements use Fibonacci spirals (related to φ)',
                'Galaxy spiral arms often exhibit golden ratio proportions',
                'Leaf arrangements on stems (phyllotaxis) optimize using φ',
                'DNA molecule measures 34 angstroms by 21 angstroms (Fibonacci numbers)'
            ]
        },
        {
            title: 'In Art and Architecture',
            items: [
                'The Parthenon in Athens incorporates golden ratio proportions',
                'Leonardo da Vinci\'s "Vitruvian Man" uses φ extensively',
                'The Great Pyramid of Giza has golden ratio dimensions',
                'Renaissance painters composed using the golden ratio',
                'Modern artists like Salvador Dalí deliberately used φ'
            ]
        },
        {
            title: 'Mathematical Properties',
            items: [
                'φ² = φ + 1 (defining property)',
                '1/φ = φ - 1 (reciprocal property)',
                'φ = √(1 + √(1 + √(1 + ...))) (our Problem 4!)',
                'φ = 1 + 1/(1 + 1/(1 + ...)) (continued fraction)',
                'Limit of Fibonacci ratios: Fₙ₊₁/Fₙ → φ as n → ∞'
            ]
        }
    ];

    goldenRatioInfo.forEach(section => {
        documentChildren.push(
            new docx.Paragraph({
                text: section.title,
                heading: docx.HeadingLevel.HEADING_3,
                spacing: { before: 300, after: 150 }
            })
        );

        section.items.forEach(item => {
            documentChildren.push(
                new docx.Paragraph({
                    text: `• ${item}`,
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
            text: 'Congratulations on completing these 5 nested radical problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve learned how to denest simple nested radicals using the Ramanujan formula',
        'You\'ve mastered solving infinite nested radicals using self-reference equations',
        'You\'ve discovered the golden ratio through nested radicals',
        'You\'ve practiced checking denesting conditions (a² - b must be perfect square)',
        'You\'ve seen real-world applications in geometry, art, and nature',
        'You\'ve learned about Ramanujan\'s contributions to mathematics',
        'You\'ve understood both addition and subtraction in nested radicals'
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
        'Denesting Condition: a² - b must be a perfect square',
        'Ramanujan Formula: √(a ± √b) = √((a+c)/2) ± √((a-c)/2) where c = √(a²-b)',
        'Infinite Nested: x = √(a + x) → x² = a + x → x² - x - a = 0',
        'Golden Ratio: φ = (1 + √5)/2, satisfies φ² = φ + 1',
        'Always choose positive root for nested radicals'
    ];

    keyFormulas.forEach(formula => {
        documentChildren.push(
            new docx.Paragraph({
                text: `• ${formula}`,
                spacing: { after: 100 },
                shading: {
                    fill: "FFF3E0",
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
        'Practice more denesting problems with different values',
        'Explore double nested radicals: √(a + √(b + √c))',
        'Study Ramanujan\'s other nested radical identities',
        'Investigate continued fractions and their connection to nested radicals',
        'Explore the Fibonacci sequence and its relationship to the golden ratio',
        'Apply nested radicals to geometric constructions',
        'Study convergence of infinite nested sequences numerically'
    ];

    nextSteps.forEach((step, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${step}`,
                spacing: { after: 100 }
            })
        );
    });

    // ============== PRACTICE PROBLEMS ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Additional Practice Problems',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    const practiceSections = [
        {
            level: 'Easy - Denesting Practice',
            problems: [
                '√(3 + 2√2)',
                '√(7 + 4√3)',
                '√(5 - 2√6)'
            ]
        },
        {
            level: 'Medium - Infinite Nested',
            problems: [
                '√(6 + √(6 + √(6 + ...)))',
                '√(12 + √(12 + √(12 + ...)))',
                '√(20 + √(20 + √(20 + ...)))'
            ]
        },
        {
            level: 'Hard - Challenge Problems',
            problems: [
                '√(9 - 4√5)',
                '√(13 + 4√10)',
                '√(3 + √(3 + √(3 + ...)))'
            ]
        }
    ];

    practiceSections.forEach(section => {
        documentChildren.push(
            new docx.Paragraph({
                text: section.level,
                heading: docx.HeadingLevel.HEADING_3,
                spacing: { before: 200, after: 100 }
            })
        );

        section.problems.forEach((problem, index) => {
            documentChildren.push(
                new docx.Paragraph({
                    text: `${index + 1}. ${problem}`,
                    spacing: { after: 100 }
                })
            );
        });
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
        const filename = 'nested_radicals_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Simple Denestable Nested Radicals: 3 problems');
        console.log('    - Infinite Nested Radicals: 2 problems (including Golden Ratio)');
        console.log('\n📄 ESTIMATED PAGES: 50-60 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and visual highlighting');
        console.log('  • Quick helper tips and real-world context');
        console.log('  • Complete step-by-step solution with Ramanujan formula');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Denesting condition checks and verification');
        console.log('  • Self-reference equations for infinite patterns');
        console.log('  • Historical context (Ramanujan, golden ratio)');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Practice problems for reinforcement');
        console.log('  • ELI5 explanations with analogies');
        console.log('  • Quick reference solution summary');
        console.log('\n🌟 Special Sections:');
        console.log('  • About Srinivasa Ramanujan and his contributions');
        console.log('  • The Golden Ratio in nature, art, and architecture');
        console.log('  • Key formulas and concepts reference');
        console.log('  • Additional practice problems (easy, medium, hard)');
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
