import { EnhancedStandardQuadraticMathematicalWorkbook } from './standard-quadratic-workbook.js';
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




// ============== STANDARD QUADRATIC EQUATIONS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedStandardQuadraticEquations() {
    const relatedProblems = [];

    // Problem 1: Simple Factoring (Perfect Square Trinomial)
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Factoring a Simple Quadratic',
        problem: 'Solve for x: x² + 5x + 6 = 0',
        parameters: { a: 1, b: 5, c: 6 },
        problemType: 'standard_quadratic',
        method: 'factoring',
        context: { 
            difficulty: 'beginner', 
            topic: 'Quadratic Equations - Factoring Method',
            realWorld: 'Finding dimensions when area is known'
        },
        subparts: [
            'Given: x² + 5x + 6 = 0',
            'Goal: Factor the quadratic and use Zero Product Property',
            'Find two numbers that multiply to 6 and add to 5: 2 and 3',
            'Factor: (x + 2)(x + 3) = 0',
            'Apply Zero Product Property:',
            'x + 2 = 0  OR  x + 3 = 0',
            'x = -2  OR  x = -3',
            'Check x = -2: (-2)² + 5(-2) + 6 = 4 - 10 + 6 = 0 ✓',
            'Check x = -3: (-3)² + 5(-3) + 6 = 9 - 15 + 6 = 0 ✓'
        ],
        helper: 'When factoring x² + bx + c, find two numbers that multiply to c and add to b',
        solution: 'x = -2 or x = -3',
        realWorldContext: 'Like finding the length and width of a rectangle when you know the area and perimeter'
    });

    // Problem 2: Quadratic Formula with Perfect Square Discriminant
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Using Quadratic Formula',
        problem: 'Solve for x: 2x² - 5x - 3 = 0',
        parameters: { a: 2, b: -5, c: -3 },
        problemType: 'standard_quadratic',
        method: 'quadratic_formula',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Quadratic Equations - Quadratic Formula',
            realWorld: 'Projectile motion and optimization problems'
        },
        subparts: [
            'Given: 2x² - 5x - 3 = 0',
            'Identify: a = 2, b = -5, c = -3',
            'Calculate discriminant: Δ = b² - 4ac',
            'Δ = (-5)² - 4(2)(-3) = 25 + 24 = 49',
            'Since Δ > 0, there are two distinct real solutions',
            'Apply quadratic formula: x = (-b ± √Δ)/(2a)',
            'x = (-(-5) ± √49)/(2·2)',
            'x = (5 ± 7)/4',
            'x₁ = (5 + 7)/4 = 12/4 = 3',
            'x₂ = (5 - 7)/4 = -2/4 = -1/2',
            'Check x = 3: 2(3)² - 5(3) - 3 = 18 - 15 - 3 = 0 ✓',
            'Check x = -1/2: 2(-1/2)² - 5(-1/2) - 3 = 1/2 + 5/2 - 3 = 0 ✓'
        ],
        helper: 'Always calculate the discriminant first to know what type of solutions to expect',
        solution: 'x = 3 or x = -1/2',
        realWorldContext: 'Like finding when a thrown ball reaches a certain height on its way up and down'
    });

    // Problem 3: Completing the Square
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Completing the Square Method',
        problem: 'Solve for x: x² + 6x + 5 = 0',
        parameters: { a: 1, b: 6, c: 5 },
        problemType: 'standard_quadratic',
        method: 'completing_square',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Quadratic Equations - Completing the Square',
            realWorld: 'Finding vertex of parabola for optimization'
        },
        subparts: [
            'Given: x² + 6x + 5 = 0',
            'Step 1: Move constant to right side',
            'x² + 6x = -5',
            'Step 2: Take half of b coefficient and square it',
            '(6/2)² = 3² = 9',
            'Step 3: Add 9 to both sides',
            'x² + 6x + 9 = -5 + 9',
            'x² + 6x + 9 = 4',
            'Step 4: Factor left side as perfect square',
            '(x + 3)² = 4',
            'Step 5: Take square root of both sides',
            'x + 3 = ±2',
            'x + 3 = 2  OR  x + 3 = -2',
            'x = -1  OR  x = -5',
            'Check x = -1: (-1)² + 6(-1) + 5 = 1 - 6 + 5 = 0 ✓',
            'Check x = -5: (-5)² + 6(-5) + 5 = 25 - 30 + 5 = 0 ✓'
        ],
        helper: 'Completing the square transforms the equation to reveal the vertex form: (x - h)² = k',
        solution: 'x = -1 or x = -5',
        realWorldContext: 'Like finding the maximum profit point in business when costs follow a quadratic pattern'
    });

    // Problem 4: Pure Quadratic (Square Root Method)
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Square Root Method (Pure Quadratic)',
        problem: 'Solve for x: 3x² - 48 = 0',
        parameters: { a: 3, b: 0, c: -48 },
        problemType: 'pure_quadratic',
        method: 'square_root',
        context: { 
            difficulty: 'beginner', 
            topic: 'Quadratic Equations - Square Root Method',
            realWorld: 'Pythagorean theorem applications'
        },
        subparts: [
            'Given: 3x² - 48 = 0',
            'Goal: Isolate x² and take square root',
            'Step 1: Add 48 to both sides',
            '3x² = 48',
            'Step 2: Divide both sides by 3',
            'x² = 16',
            'Step 3: Take square root of both sides (remember ±)',
            'x = ±√16',
            'x = ±4',
            'x = 4  OR  x = -4',
            'Check x = 4: 3(4)² - 48 = 3(16) - 48 = 48 - 48 = 0 ✓',
            'Check x = -4: 3(-4)² - 48 = 3(16) - 48 = 48 - 48 = 0 ✓'
        ],
        helper: 'For pure quadratics (no x term), just isolate x² and take the square root. Don\'t forget ±!',
        solution: 'x = 4 or x = -4',
        realWorldContext: 'Like finding the side length of a square when you know its area'
    });

    // Problem 5: Quadratic with Irrational Solutions
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Quadratic Formula with Irrational Solutions',
        problem: 'Solve for x: x² - 4x + 1 = 0',
        parameters: { a: 1, b: -4, c: 1 },
        problemType: 'standard_quadratic',
        method: 'quadratic_formula',
        context: { 
            difficulty: 'advanced', 
            topic: 'Quadratic Equations - Irrational Solutions',
            realWorld: 'Precise engineering and physics calculations'
        },
        subparts: [
            'Given: x² - 4x + 1 = 0',
            'Identify: a = 1, b = -4, c = 1',
            'Calculate discriminant: Δ = b² - 4ac',
            'Δ = (-4)² - 4(1)(1) = 16 - 4 = 12',
            'Since Δ > 0 but not a perfect square, solutions are irrational',
            'Apply quadratic formula: x = (-b ± √Δ)/(2a)',
            'x = (-(-4) ± √12)/(2·1)',
            'x = (4 ± √12)/2',
            'Simplify √12 = √(4·3) = 2√3',
            'x = (4 ± 2√3)/2',
            'Factor numerator: x = 2(2 ± √3)/2',
            'x = 2 ± √3',
            'x₁ = 2 + √3 ≈ 3.732',
            'x₂ = 2 - √3 ≈ 0.268',
            'Note: Solutions are exact as 2 ± √3'
        ],
        helper: 'When discriminant is positive but not a perfect square, simplify the radical for exact answers',
        solution: 'x = 2 + √3 or x = 2 - √3',
        realWorldContext: 'Like calculating the golden ratio in architecture or nature\'s spiral patterns'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveStandardQuadraticRelatedProblems() {
    const problems = generateRelatedStandardQuadraticEquations();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Standard Quadratic Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedStandardQuadraticMathematicalWorkbook({
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
            const result = workbook.solveQuadraticProblem({
                equation: problem.problem.split(': ')[1] || problem.problem,
                scenario: problem.scenario,
                parameters: problem.parameters,
                problemType: problem.problemType,
                context: problem.context,
                method: problem.method
            });

            solvedProblems.push({
                problem: problem,
                workbook: workbook,
                result: result
            });

            console.log(`    ✓ Solution: ${result.solutionValues}`);
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

async function generateComprehensiveQuadraticDocument() {
    console.log('Generating Standard Quadratic Equations Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Standard Quadratic Equations Workbook',
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
            text: 'Factoring, Quadratic Formula, Completing the Square, and Square Root Method',
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
            text: 'Standard Quadratic Equations (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const quadraticProblems = generateRelatedStandardQuadraticEquations();
    quadraticProblems.forEach((problem, index) => {
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
            text: 'This workbook contains 5 carefully selected standard quadratic equation problems that progressively build your understanding of multiple solution methods. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions using the most appropriate method',
        '• Discriminant analysis to predict solution type',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Common mistakes specific to quadratic equations and error prevention',
        '• Self-check questions and metacognitive thinking prompts',
        '• Real-world applications from physics, business, and geometry',
        '• Alternative solution methods with comparison',
        '• Verification of solutions through substitution',
        '• Graph analysis and parabola interpretation',
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
            text: 'Key Concepts Covered:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const keyConcepts = [
        '✓ Factoring Method: Breaking quadratics into product form',
        '✓ Quadratic Formula: Universal method that works for all quadratics',
        '✓ Completing the Square: Algebraic method revealing vertex form',
        '✓ Square Root Method: Efficient solution for pure quadratics',
        '✓ Discriminant: Predicting solution count and type (Δ = b² - 4ac)',
        '✓ Zero Product Property: If ab = 0, then a = 0 or b = 0',
        '✓ Perfect Square Trinomials: Recognizing and factoring',
        '✓ Irrational and Rational Solutions: Understanding solution types'
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
    console.log('\nProcessing Standard Quadratic Equations Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Standard Quadratic Equations Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const quadraticSolved = solveStandardQuadraticRelatedProblems();
    
    quadraticSolved.forEach((solved, index) => {
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

        // Difficulty level and method
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
                        text: '  |  Method: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.method.replace(/_/g, ' ').toUpperCase(),
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
            text: 'Congratulations on completing these 5 standard quadratic equation problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered factoring simple quadratics and using Zero Product Property',
        'You\'ve learned the powerful quadratic formula that works for all quadratics',
        'You\'ve practiced completing the square to reveal vertex form',
        'You\'ve efficiently solved pure quadratics using the square root method',
        'You\'ve worked with both rational and irrational solutions',
        'You\'ve analyzed discriminants to predict solution types',
        'You\'ve seen how quadratics model real-world phenomena',
        'You\'ve learned to verify solutions and avoid common mistakes'
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
            text: 'Method Comparison Chart:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const methodComparison = [
        '1. Factoring: Fastest when equation factors nicely (small integer coefficients)',
        '2. Quadratic Formula: Universal method, works for all quadratics, reliable',
        '3. Completing the Square: Best for finding vertex, converting to vertex form',
        '4. Square Root Method: Most efficient for pure quadratics (no x term)',
        '5. Graphing: Visual understanding, approximate solutions'
    ];

    methodComparison.forEach(method => {
        documentChildren.push(
            new docx.Paragraph({
                text: method,
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
        'Practice word problems involving projectile motion and area',
        'Explore quadratics with complex solutions (when discriminant < 0)',
        'Study the relationship between quadratic equations and parabola graphs',
        'Learn about systems of equations involving quadratics',
        'Apply quadratics to optimization problems in business and engineering',
        'Investigate quadratic inequalities',
        'Study polynomial functions and higher-degree equations'
    ];

    nextSteps.forEach((step, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${step}`,
                spacing: { after: 100 }
            })
        );
    });

    // Additional resources
    documentChildren.push(
        new docx.Paragraph({
            text: 'Key Formulas to Remember:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const keyFormulas = [
        '• Standard Form: ax² + bx + c = 0',
        '• Quadratic Formula: x = (-b ± √(b² - 4ac)) / (2a)',
        '• Discriminant: Δ = b² - 4ac',
        '• Vertex: h = -b/(2a), k = f(h)',
        '• Sum of Roots: x₁ + x₂ = -b/a',
        '• Product of Roots: x₁ × x₂ = c/a',
        '• Vertex Form: y = a(x - h)² + k'
    ];

    keyFormulas.forEach(formula => {
        documentChildren.push(
            new docx.Paragraph({
                text: formula,
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
        const filename = 'standard_quadratic_equations_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Factoring Method: 1 problem');
        console.log('    - Quadratic Formula: 2 problems');
        console.log('    - Completing the Square: 1 problem');
        console.log('    - Square Root Method: 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 60-80 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level, method, and visual highlighting');
        console.log('  • Quick helper tips specific to the solution method');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Discriminant analysis predicting solution type');
        console.log('  • Complete step-by-step solution with enhanced explanations');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Verification of both solutions with detailed checking');
        console.log('  • Graph analysis and parabola interpretation');
        console.log('  • Key quadratic concepts and learning objectives');
        console.log('  • Common mistakes specific to quadratics and error prevention');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods with comparison');
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

generateComprehensiveQuadraticDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});
