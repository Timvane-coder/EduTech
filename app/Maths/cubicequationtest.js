import { EnhancedCubicQuarticMathematicalWorkbook } from './cubic-quartic-workbook.js';
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




// ============== CUBIC AND QUARTIC EQUATIONS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedCubicQuarticEquations() {
    const relatedProblems = [];

    // Problem 1: Difference of Cubes
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Difference of Cubes',
        problem: 'Solve for x: x³ - 8 = 0',
        parameters: { a: 1, b: 0, c: 0, d: -8 },
        problemType: 'cubic_sum_difference_cubes',
        context: { 
            difficulty: 'beginner', 
            topic: 'Cubic Equations - Special Factoring',
            realWorld: 'Finding dimensions when volume is known'
        },
        subparts: [
            'Given: x³ - 8 = 0',
            'Recognize as difference of cubes: x³ - 2³',
            'Apply formula: a³ - b³ = (a - b)(a² + ab + b²)',
            'Factor: (x - 2)(x² + 2x + 4) = 0',
            'Solve x - 2 = 0 → x = 2',
            'Check quadratic x² + 2x + 4: discriminant = 4 - 16 = -12 < 0',
            'Only real solution: x = 2',
            'Verify: 2³ - 8 = 8 - 8 = 0 ✓'
        ],
        helper: 'Recognize the pattern a³ - b³ and use the difference of cubes formula. The quadratic factor usually gives complex roots.',
        solution: 'x = 2',
        realWorldContext: 'Like finding the side length of a cube when you know its volume is 8 cubic units (cube root of 8)'
    });

    // Problem 2: Biquadratic Equation
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Biquadratic Equation',
        problem: 'Solve for x: x⁴ - 5x² + 4 = 0',
        parameters: { a: 1, b: 0, c: -5, d: 0, e: 4 },
        problemType: 'biquadratic',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Quartic Equations - Biquadratic Form',
            realWorld: 'Solving symmetric optimization problems'
        },
        subparts: [
            'Given: x⁴ - 5x² + 4 = 0',
            'Notice: only even powers (biquadratic form)',
            'Let u = x²',
            'Substitute: u² - 5u + 4 = 0',
            'Factor: (u - 4)(u - 1) = 0',
            'Solve: u = 4 or u = 1',
            'Back-substitute for x:',
            '  If u = 4: x² = 4 → x = ±2',
            '  If u = 1: x² = 1 → x = ±1',
            'Solutions: x = -2, -1, 1, 2',
            'Verify: (±2)⁴ - 5(±2)² + 4 = 16 - 20 + 4 = 0 ✓',
            'Verify: (±1)⁴ - 5(±1)² + 4 = 1 - 5 + 4 = 0 ✓'
        ],
        helper: 'CRITICAL: After finding u values, remember x = ±√u. Each positive u gives TWO x values!',
        solution: 'x = -2, -1, 1, 2 (four real roots)',
        realWorldContext: 'Like finding equilibrium points in a symmetric physical system with two pairs of balanced positions'
    });

    // Problem 3: Cubic with Rational Root
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Cubic using Rational Root Theorem',
        problem: 'Solve for x: x³ - 6x² + 11x - 6 = 0',
        parameters: { a: 1, b: -6, c: 11, d: -6 },
        problemType: 'cubic_rational_root',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Cubic Equations - Rational Root Theorem',
            realWorld: 'Finding critical points in polynomial models'
        },
        subparts: [
            'Given: x³ - 6x² + 11x - 6 = 0',
            'Possible rational roots (±p/q): ±1, ±2, ±3, ±6',
            'Test x = 1: 1 - 6 + 11 - 6 = 0 ✓ (x = 1 is a root!)',
            'Perform synthetic division by (x - 1):',
            '  Coefficients: 1  -6  11  -6',
            '  Result: 1  -5  6  0',
            'Quotient: x² - 5x + 6',
            'Factor quadratic: (x - 2)(x - 3) = 0',
            'Remaining roots: x = 2 and x = 3',
            'All solutions: x = 1, 2, 3',
            'Verify all roots in original equation ✓'
        ],
        helper: 'List all possible rational roots systematically, test each one using synthetic division, then factor the resulting quadratic',
        solution: 'x = 1, 2, 3 (three consecutive integers!)',
        realWorldContext: 'Like finding three consecutive years where profit/cost models intersect target values'
    });

    // Problem 4: Sum of Cubes
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Sum of Cubes',
        problem: 'Solve for x: x³ + 27 = 0',
        parameters: { a: 1, b: 0, c: 0, d: 27 },
        problemType: 'cubic_sum_difference_cubes',
        context: { 
            difficulty: 'beginner', 
            topic: 'Cubic Equations - Special Factoring',
            realWorld: 'Finding roots of polynomial models'
        },
        subparts: [
            'Given: x³ + 27 = 0',
            'Recognize as sum of cubes: x³ + 3³',
            'Apply formula: a³ + b³ = (a + b)(a² - ab + b²)',
            'Factor: (x + 3)(x² - 3x + 9) = 0',
            'Solve x + 3 = 0 → x = -3',
            'Check quadratic x² - 3x + 9:',
            '  Discriminant = 9 - 36 = -27 < 0 (no real roots)',
            'Only real solution: x = -3',
            'Verify: (-3)³ + 27 = -27 + 27 = 0 ✓'
        ],
        helper: 'Sum of cubes: a³ + b³ = (a + b)(a² - ab + b²). Note the MINUS sign in the middle of the trinomial!',
        solution: 'x = -3',
        realWorldContext: 'Like finding the side length of a cube that, when its volume is added to 27, equals zero (negative dimension representing opposite direction)'
    });

    // Problem 5: Cubic by Grouping
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Cubic by Grouping',
        problem: 'Solve for x: x³ + 3x² + 2x + 6 = 0',
        parameters: { a: 1, b: 3, c: 2, d: 6 },
        problemType: 'cubic_grouping',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Cubic Equations - Factor by Grouping',
            realWorld: 'Analyzing polynomial behavior in engineering'
        },
        subparts: [
            'Given: x³ + 3x² + 2x + 6 = 0',
            'Group terms: (x³ + 3x²) + (2x + 6)',
            'Factor each group:',
            '  First group: x²(x + 3)',
            '  Second group: 2(x + 3)',
            'Common factor (x + 3): (x + 3)(x² + 2) = 0',
            'Solve x + 3 = 0 → x = -3',
            'Solve x² + 2 = 0 → x² = -2 (no real solutions)',
            'Only real solution: x = -3',
            'Verify: (-3)³ + 3(-3)² + 2(-3) + 6',
            '       = -27 + 27 - 6 + 6 = 0 ✓'
        ],
        helper: 'Look for common patterns when grouping. Factor GCF from each group, then look for a common binomial factor.',
        solution: 'x = -3',
        realWorldContext: 'Like finding when a complex cost function (with fixed costs, variable costs, and interaction terms) equals zero'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveCubicQuarticRelatedProblems() {
    const problems = generateRelatedCubicQuarticEquations();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Cubic/Quartic Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedCubicQuarticMathematicalWorkbook({
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
            const result = workbook.solveCubicQuarticProblem({
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

async function generateComprehensiveDocument() {
    console.log('Generating Cubic and Quartic Equations Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Cubic and Quartic Equations Workbook',
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
            text: 'Sum/Difference of Cubes, Biquadratic, Rational Root Theorem, and Grouping',
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
            text: 'Cubic and Quartic Equations (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const cubicQuarticProblems = generateRelatedCubicQuarticEquations();
    cubicQuarticProblems.forEach((problem, index) => {
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
            text: 'This workbook contains 5 carefully selected cubic and quartic equation problems that progressively build your understanding of higher-degree polynomial equations. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed explanations',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic, historical)',
        '• Common mistakes and error prevention tips',
        '• Self-check questions and thinking prompts',
        '• Real-world applications and context',
        '• Historical context of cubic and quartic solutions',
        '• Alternative solution methods',
        '• Verification of solutions',
        '• Graphical analysis and polynomial behavior',
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

    documentChildren.push(
        new docx.Paragraph({
            text: '',
            spacing: { after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Why Cubic and Quartic Equations Matter:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const whyItMatters = [
        'Foundation for advanced mathematics and calculus',
        'Essential in physics (projectile motion, orbital mechanics)',
        'Used in engineering (beam deflection, structural analysis)',
        'Important in computer graphics (Bézier curves, smooth animations)',
        'Applications in economics and optimization problems',
        'Historical significance: led to discovery of complex numbers'
    ];

    whyItMatters.forEach(point => {
        documentChildren.push(
            new docx.Paragraph({
                text: `• ${point}`,
                spacing: { after: 100 }
            })
        );
    });

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Cubic and Quartic Equations Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Cubic and Quartic Equations Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const cubicQuarticSolved = solveCubicQuarticRelatedProblems();
    
    cubicQuarticSolved.forEach((solved, index) => {
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

        // Difficulty level and type
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
                    }),
                    new docx.TextRun({
                        text: '  |  Type: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.scenario
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
            text: 'Congratulations on completing these 5 cubic and quartic equation problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered sum and difference of cubes factoring',
        'You\'ve conquered biquadratic equations using substitution',
        'You\'ve applied the Rational Root Theorem systematically',
        'You\'ve practiced synthetic division for polynomial reduction',
        'You\'ve learned factor by grouping for cubic equations',
        'You\'ve seen real-world applications of polynomial equations',
        'You\'ve learned about the historical development of these solutions',
        'You\'ve understood the Fundamental Theorem of Algebra for higher-degree polynomials'
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

    const keyTechniques = [
        'Sum of Cubes: a³ + b³ = (a + b)(a² - ab + b²)',
        'Difference of Cubes: a³ - b³ = (a - b)(a² + ab + b²)',
        'Biquadratic Substitution: Let u = x² to reduce quartic to quadratic',
        'Rational Root Theorem: Test ±p/q where p|constant and q|leading coefficient',
        'Synthetic Division: Efficient method to test roots and reduce degree',
        'Factor by Grouping: Group terms strategically to find common factors'
    ];

    keyTechniques.forEach(technique => {
        documentChildren.push(
            new docx.Paragraph({
                text: `• ${technique}`,
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
        'Practice more complex cubic equations with no rational roots',
        'Explore Cardano\'s formula for depressed cubics',
        'Study Ferrari\'s method for general quartic equations',
        'Apply numerical methods (Newton-Raphson) to polynomials',
        'Investigate polynomial inequalities',
        'Study systems of polynomial equations',
        'Explore applications in calculus (finding critical points)',
        'Learn about Galois theory and why quintics have no general formula'
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
            text: 'Historical Note:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'The solution of cubic and quartic equations in 16th century Italy represents one of the most dramatic periods in mathematical history. These achievements involved mathematical duels, broken oaths, and the discovery of complex numbers. Mathematicians like del Ferro, Tartaglia, Cardano, and Ferrari competed for prestige and money, advancing algebra beyond what the ancient Greeks had achieved. Their work laid the foundation for modern algebra and showed that mathematics could progress through human ingenuity.',
            spacing: { after: 300 },
            italics: true
        })
    );

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
        const filename = 'cubic_quartic_equations_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Sum/Difference of Cubes: 2 problems');
        console.log('    - Biquadratic Equation: 1 problem');
        console.log('    - Rational Root Theorem: 1 problem');
        console.log('    - Factor by Grouping: 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 60-80 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and visual highlighting');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Complete step-by-step solution with enhanced explanations');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic, historical)');
        console.log('  • Verification of solutions with detailed checking');
        console.log('  • Key concepts and learning objectives');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Historical context of cubic/quartic solutions');
        console.log('  • Graphical analysis of polynomial behavior');
        console.log('  • Alternative solution methods');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary');
        console.log('\n🎓 SPECIAL FEATURES:');
        console.log('  • Historical notes on 16th century Italian mathematicians');
        console.log('  • Explanation of Fundamental Theorem of Algebra');
        console.log('  • Connection to complex numbers and their discovery');
        console.log('  • Advanced techniques like synthetic division and substitution');
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
