import { EnhancedGeometricSequencesWorkbook } from './geometric-sequences-workbook.js';
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




// ============== GEOMETRIC SEQUENCES - RELATED PROBLEMS GENERATOR ==============

function generateRelatedGeometricSequences() {
    const relatedProblems = [];

    // Problem 1: Finding nth Term (Simple Doubling)
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Finding the nth Term of a Geometric Sequence',
        problem: 'Find the 6th term of the geometric sequence with first term a₁ = 3 and common ratio r = 2',
        parameters: { a1: 3, r: 2, n: 6 },
        problemType: 'find_nth_term',
        context: { 
            difficulty: 'beginner', 
            topic: 'Geometric Sequences - nth Term',
            realWorld: 'Population doubling, compound growth'
        },
        subparts: [
            'Given: a₁ = 3, r = 2, n = 6',
            'Formula: aₙ = a₁ · r^(n-1)',
            'Substitute: a₆ = 3 · 2^(6-1)',
            'Calculate exponent: a₆ = 3 · 2^5',
            'Evaluate power: a₆ = 3 · 32',
            'Final answer: a₆ = 96',
            'Check: Sequence is 3, 6, 12, 24, 48, 96 ✓'
        ],
        helper: 'Remember: exponent is (n-1) because we multiply by r exactly (n-1) times from a₁ to aₙ',
        solution: 'a₆ = 96',
        realWorldContext: 'Like calculating bacteria population after 6 generations if starting with 3 cells and doubling each generation'
    });

    // Problem 2: Finding Common Ratio from Sequence
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Finding the Common Ratio',
        problem: 'Find the common ratio of the geometric sequence: 5, 15, 45, 135, ...',
        parameters: { sequenceTerms: [5, 15, 45, 135] },
        problemType: 'find_common_ratio',
        context: { 
            difficulty: 'beginner', 
            topic: 'Geometric Sequences - Common Ratio',
            realWorld: 'Identifying growth rates from data'
        },
        subparts: [
            'Given sequence: 5, 15, 45, 135, ...',
            'Method: Divide any term by the previous term',
            'r = a₂/a₁ = 15/5 = 3',
            'Verify with next pair: r = a₃/a₂ = 45/15 = 3 ✓',
            'Verify with another: r = a₄/a₃ = 135/45 = 3 ✓',
            'Common ratio is consistent',
            'Final answer: r = 3'
        ],
        helper: 'Always divide later term by earlier term, and verify with multiple pairs',
        solution: 'r = 3',
        realWorldContext: 'Like finding the growth factor when sales triple each month'
    });

    // Problem 3: Sum of First n Terms
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Sum of First n Terms',
        problem: 'Find the sum of the first 5 terms of the geometric sequence with a₁ = 2 and r = 3',
        parameters: { a1: 2, r: 3, n: 5 },
        problemType: 'sum_n_terms',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Geometric Series - Finite Sum',
            realWorld: 'Total compound earnings, cumulative growth'
        },
        subparts: [
            'Given: a₁ = 2, r = 3, n = 5',
            'Formula: Sₙ = a₁(r^n - 1)/(r - 1) [using r^n - 1 since r > 1]',
            'Substitute: S₅ = 2(3^5 - 1)/(3 - 1)',
            'Calculate power: S₅ = 2(243 - 1)/(2)',
            'Simplify numerator: S₅ = 2(242)/2',
            'Calculate: S₅ = 484/2',
            'Final answer: S₅ = 242',
            'Check: Terms are 2, 6, 18, 54, 162',
            'Sum: 2 + 6 + 18 + 54 + 162 = 242 ✓'
        ],
        helper: 'Choose formula form (r^n - 1) or (1 - r^n) based on whether r > 1 or r < 1 for cleaner arithmetic',
        solution: 'S₅ = 242',
        realWorldContext: 'Like calculating total earnings over 5 investment periods with tripling returns'
    });

    // Problem 4: Infinite Sum (Convergent Series)
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Infinite Geometric Sum',
        problem: 'Find the sum of the infinite geometric series: 12 + 6 + 3 + 1.5 + ...',
        parameters: { a1: 12, r: 0.5 },
        problemType: 'infinite_sum',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Infinite Geometric Series',
            realWorld: 'Total distance in bouncing ball, fractal perimeters'
        },
        subparts: [
            'Given sequence: 12, 6, 3, 1.5, ...',
            'Find common ratio: r = 6/12 = 0.5',
            'Check convergence: |r| = |0.5| = 0.5 < 1 ✓',
            'Since |r| < 1, the series converges',
            'Formula: S∞ = a₁/(1 - r)',
            'Substitute: S∞ = 12/(1 - 0.5)',
            'Calculate denominator: S∞ = 12/0.5',
            'Final answer: S∞ = 24'
        ],
        helper: 'Infinite sum only exists when |r| < 1. Always check this condition first!',
        solution: 'S∞ = 24',
        realWorldContext: 'Like calculating total vertical distance traveled by a ball that bounces to half its previous height'
    });

    // Problem 5: Finding Which Term Equals a Value (using logarithms)
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Finding Term Position',
        problem: 'In a geometric sequence with a₁ = 5 and r = 2, which term equals 320?',
        parameters: { a1: 5, an: 320, r: 2 },
        problemType: 'find_term_position',
        context: { 
            difficulty: 'advanced', 
            topic: 'Geometric Sequences - Term Position',
            realWorld: 'Determining when target population or value is reached'
        },
        subparts: [
            'Given: a₁ = 5, aₙ = 320, r = 2',
            'Find: which term n equals 320',
            'Formula: aₙ = a₁ · r^(n-1)',
            'Substitute: 320 = 5 · 2^(n-1)',
            'Divide by 5: 64 = 2^(n-1)',
            'Recognize: 64 = 2^6',
            'Therefore: 2^(n-1) = 2^6',
            'So: n - 1 = 6',
            'Final answer: n = 7',
            'Alternative method using logarithms:',
            '  n - 1 = log(64)/log(2) = log(64)/log(2) = 6',
            '  n = 6 + 1 = 7',
            'Check: a₇ = 5 · 2^6 = 5 · 64 = 320 ✓'
        ],
        helper: 'For finding term position, use logarithms: n = log(aₙ/a₁)/log(r) + 1',
        solution: 'n = 7 (the 7th term)',
        realWorldContext: 'Like determining after how many doublings a bacterial population reaches a specific count'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveGeometricSequenceRelatedProblems() {
    const problems = generateRelatedGeometricSequences();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Geometric Sequence Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedGeometricSequencesWorkbook({
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
            const result = workbook.solveGeometricProblem({
                equation: problem.problem,
                scenario: problem.scenario,
                parameters: problem.parameters,
                problemType: problem.problemType,
                context: problem.context,
                sequence: problem.parameters.sequenceTerms
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
    console.log('Generating Geometric Sequences Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Geometric Sequences and nth Term Workbook',
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
            text: 'nth Term, Common Ratio, Sums, and Term Position',
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
            text: 'Geometric Sequences (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const geometricProblems = generateRelatedGeometricSequences();
    geometricProblems.forEach((problem, index) => {
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
            text: 'This workbook contains 5 carefully selected geometric sequence problems that progressively build your understanding. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed explanations',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Common mistakes and error prevention tips',
        '• Self-check questions and thinking prompts',
        '• Real-world applications and context',
        '• Historical context and development',
        '• Alternative solution methods',
        '• Verification of solutions',
        '• Pedagogical notes for deeper understanding',
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
            spacing: { after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'What are Geometric Sequences?',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'A geometric sequence is a sequence where each term is found by multiplying the previous term by a constant called the common ratio (r). This creates exponential growth or decay patterns found throughout nature, finance, and science.',
            spacing: { after: 200 }
        })
    );

    const keyPoints = [
        '• General form: a₁, a₁r, a₁r², a₁r³, ..., a₁r^(n-1)',
        '• nth term formula: aₙ = a₁ · r^(n-1)',
        '• Sum of n terms: Sₙ = a₁(r^n - 1)/(r - 1) when r ≠ 1',
        '• Infinite sum (|r| < 1): S∞ = a₁/(1 - r)',
        '• Applications: compound interest, population growth, radioactive decay, viral spread'
    ];

    keyPoints.forEach(point => {
        documentChildren.push(
            new docx.Paragraph({
                text: point,
                spacing: { after: 100 }
            })
        );
    });

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Geometric Sequences Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Geometric Sequences Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const geometricSolved = solveGeometricSequenceRelatedProblems();
    
    geometricSolved.forEach((solved, index) => {
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
        let difficultyColor = '2E7D32'; // green for easy
        if (solved.problem.difficulty === 'medium') difficultyColor = '1976D2'; // blue
        if (solved.problem.difficulty === 'hard') difficultyColor = 'D32F2F'; // red

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

        // Topic area
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

    // ============== KEY FORMULAS REFERENCE ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Key Formulas Reference',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const formulas = [
        {
            name: 'nth Term Formula',
            formula: 'aₙ = a₁ · r^(n-1)',
            when: 'Finding any term in the sequence'
        },
        {
            name: 'Common Ratio',
            formula: 'r = aₙ / aₙ₋₁',
            when: 'Finding the multiplicative factor from consecutive terms'
        },
        {
            name: 'Sum of n Terms',
            formula: 'Sₙ = a₁(r^n - 1)/(r - 1) or a₁(1 - r^n)/(1 - r)',
            when: 'Finding total of first n terms (r ≠ 1)'
        },
        {
            name: 'Infinite Sum',
            formula: 'S∞ = a₁/(1 - r)',
            when: 'Finding sum of infinite series (only when |r| < 1)'
        },
        {
            name: 'Term Position',
            formula: 'n = log(aₙ/a₁)/log(r) + 1',
            when: 'Finding which term has a specific value'
        },
        {
            name: 'Geometric Mean',
            formula: 'GM = √(a·b)',
            when: 'Finding middle term between two values'
        }
    ];

    formulas.forEach(f => {
        documentChildren.push(
            new docx.Paragraph({
                text: f.name,
                heading: docx.HeadingLevel.HEADING_3,
                spacing: { before: 200, after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Formula: ${f.formula}`,
                spacing: { after: 100 },
                shading: {
                    fill: "FFF9C4",
                    type: docx.ShadingType.CLEAR
                }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Use when: ${f.when}`,
                spacing: { after: 200 },
                italics: true
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
            text: 'Congratulations on completing these 5 geometric sequence problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered finding the nth term using the formula aₙ = a₁ · r^(n-1)',
        'You\'ve learned to identify and verify the common ratio',
        'You\'ve calculated finite sums using the geometric series formula',
        'You\'ve explored infinite sums and convergence conditions',
        'You\'ve used logarithms to find term positions',
        'You\'ve connected geometric sequences to exponential growth and decay',
        'You\'ve seen real-world applications in finance, biology, and physics'
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
        'Practice compound interest and investment problems',
        'Explore population growth and decay models',
        'Study geometric sequences with fractional and negative ratios',
        'Apply to real-world scenarios (viral spread, radioactive decay)',
        'Connect to exponential functions and logarithms',
        'Solve more complex problems involving geometric means',
        'Explore applications in fractals and self-similar patterns'
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
            mistake: 'Using r^n instead of r^(n-1)',
            correction: 'Remember: exponent is (n-1) because we multiply by r exactly (n-1) times from a₁ to aₙ'
        },
        {
            mistake: 'Dividing in wrong order when finding r',
            correction: 'Always divide later term by earlier term: r = aₙ / aₙ₋₁'
        },
        {
            mistake: 'Not checking convergence for infinite sums',
            correction: 'Infinite sum only exists when |r| < 1. Always verify this first!'
        },
        {
            mistake: 'Confusing geometric (multiply) with arithmetic (add)',
            correction: 'Geometric uses constant ratio (multiplication), arithmetic uses constant difference (addition)'
        },
        {
            mistake: 'Sign errors with negative ratios',
            correction: 'Track signs carefully: even powers make positive, odd powers keep negative'
        }
    ];

    commonMistakes.forEach((item, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `Mistake ${index + 1}: ${item.mistake}`,
                spacing: { before: 200, after: 100 },
                bold: true,
                color: 'D32F2F'
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `✓ Correction: ${item.correction}`,
                spacing: { after: 200 },
                color: '2E7D32'
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
        const filename = 'geometric_sequences_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Finding nth Term: 1 problem');
        console.log('    - Finding Common Ratio: 1 problem');
        console.log('    - Sum of n Terms: 1 problem');
        console.log('    - Infinite Sum: 1 problem');
        console.log('    - Finding Term Position: 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 50-60 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and visual highlighting');
        console.log('  • Topic area classification');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Complete step-by-step solution with enhanced explanations');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Verification of solutions with detailed checking');
        console.log('  • Key concepts and learning objectives');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Historical context of geometric sequences');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary');
        console.log('\n📚 Additional sections:');
        console.log('  • Comprehensive key formulas reference');
        console.log('  • Common mistakes to avoid with corrections');
        console.log('  • Summary of learning outcomes');
        console.log('  • Suggested next steps for continued learning');
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
