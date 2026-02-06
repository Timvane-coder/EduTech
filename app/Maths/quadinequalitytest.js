import { EnhancedQuadraticInequalitiesMathematicalWorkbook } from './quadratic-inequalities-workbook.js';
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




// ============== QUADRATIC INEQUALITIES - RELATED PROBLEMS GENERATOR ==============

function generateRelatedQuadraticInequalities() {
    const relatedProblems = [];

    // Problem 1: Simple Quadratic Inequality (Factored Form)
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Simple Factored Quadratic Inequality',
        problem: 'Solve: x² - 5x + 6 > 0',
        parameters: { a: 1, b: -5, c: 6, inequality: '>' },
        problemType: 'standard_greater',
        context: { 
            difficulty: 'beginner', 
            topic: 'Quadratic Inequalities',
            realWorld: 'Finding when a quadratic expression is positive'
        },
        subparts: [
            'Given: x² - 5x + 6 > 0',
            'Step 1: Factor the quadratic',
            '(x - 2)(x - 3) > 0',
            'Step 2: Find critical points (roots)',
            'x - 2 = 0 → x = 2',
            'x - 3 = 0 → x = 3',
            'Step 3: Test intervals',
            'Test x = 0: (0-2)(0-3) = (-2)(-3) = 6 > 0 ✓',
            'Test x = 2.5: (2.5-2)(2.5-3) = (0.5)(-0.5) = -0.25 not > 0',
            'Test x = 4: (4-2)(4-3) = (2)(1) = 2 > 0 ✓',
            'Step 4: Write solution in interval notation',
            'Solution: (-∞, 2) ∪ (3, ∞)'
        ],
        helper: 'Factor first, find roots, then test intervals between roots',
        solution: '(-∞, 2) ∪ (3, ∞)',
        realWorldContext: 'Like finding when profit (modeled by a quadratic) is positive - occurs outside the break-even points'
    });

    // Problem 2: Quadratic Inequality (Less Than)
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Quadratic Inequality Less Than Zero',
        problem: 'Solve: x² - 4 < 0',
        parameters: { a: 1, b: 0, c: -4, inequality: '<' },
        problemType: 'standard_less',
        context: { 
            difficulty: 'beginner', 
            topic: 'Quadratic Inequalities',
            realWorld: 'Finding when a quadratic is below a threshold'
        },
        subparts: [
            'Given: x² - 4 < 0',
            'Step 1: Rewrite as x² < 4',
            'Step 2: Factor as difference of squares',
            'x² - 4 = (x - 2)(x + 2) < 0',
            'Step 3: Find critical points',
            'x = -2 and x = 2',
            'Step 4: Determine where expression is negative',
            'Parabola opens upward (a = 1 > 0)',
            'Negative between the roots',
            'Step 5: Write solution',
            'Solution: (-2, 2)',
            'Check: x = 0 → 0² - 4 = -4 < 0 ✓'
        ],
        helper: 'When a > 0, the parabola is negative between the roots',
        solution: '(-2, 2)',
        realWorldContext: 'Like finding when altitude stays below 4 feet: |height| < 2 means -2 < height < 2'
    });

    // Problem 3: Quadratic Inequality with Negative Leading Coefficient
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Quadratic Inequality with Negative Leading Coefficient',
        problem: 'Solve: -x² + 6x - 5 ≤ 0',
        parameters: { a: -1, b: 6, c: -5, inequality: '<=' },
        problemType: 'standard_leq',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Quadratic Inequalities with Downward Parabola',
            realWorld: 'Modeling constraints with maximum values'
        },
        subparts: [
            'Given: -x² + 6x - 5 ≤ 0',
            'Step 1: Factor out -1',
            '-(x² - 6x + 5) ≤ 0',
            'Multiply both sides by -1 (reverse inequality)',
            'x² - 6x + 5 ≥ 0',
            'Step 2: Factor',
            '(x - 1)(x - 5) ≥ 0',
            'Step 3: Find critical points',
            'x = 1 and x = 5',
            'Step 4: Test intervals',
            'Parabola opens upward, positive outside roots',
            'Include endpoints (≥)',
            'Solution: (-∞, 1] ∪ [5, ∞)'
        ],
        helper: 'When multiplying/dividing inequality by negative, reverse the inequality sign',
        solution: '(-∞, 1] ∪ [5, ∞)',
        realWorldContext: 'Like finding when height of projectile is at or below ground level (≤ 0)'
    });

    // Problem 4: Quadratic Inequality Requiring Quadratic Formula
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Quadratic Inequality Using Quadratic Formula',
        problem: 'Solve: 2x² - 3x - 2 ≥ 0',
        parameters: { a: 2, b: -3, c: -2, inequality: '>=' },
        problemType: 'standard_geq',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Quadratic Inequalities with Non-Factorable Expressions',
            realWorld: 'Advanced optimization problems'
        },
        subparts: [
            'Given: 2x² - 3x - 2 ≥ 0',
            'Step 1: Check discriminant',
            'Δ = b² - 4ac = (-3)² - 4(2)(-2) = 9 + 16 = 25 > 0',
            'Two distinct real roots exist',
            'Step 2: Use quadratic formula (or factor)',
            'x = (3 ± √25)/(4) = (3 ± 5)/4',
            'x₁ = (3 - 5)/4 = -2/4 = -1/2',
            'x₂ = (3 + 5)/4 = 8/4 = 2',
            'Alternative: Factor as (2x + 1)(x - 2) ≥ 0',
            'Step 3: Determine solution',
            'Parabola opens upward (a = 2 > 0)',
            'Positive outside roots, include endpoints',
            'Solution: (-∞, -1/2] ∪ [2, ∞)'
        ],
        helper: 'Quadratic formula: x = (-b ± √(b² - 4ac))/(2a). For ≥, include critical points with brackets',
        solution: '(-∞, -1/2] ∪ [2, ∞)',
        realWorldContext: 'Like finding production levels where profit is non-negative (break-even or better)'
    });

    // Problem 5: Quadratic Inequality - Special Case (Always True)
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Quadratic Inequality - Special Case',
        problem: 'Solve: x² + 2x + 5 > 0',
        parameters: { a: 1, b: 2, c: 5, inequality: '>' },
        problemType: 'standard_greater',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Quadratic Inequalities - No Real Roots',
            realWorld: 'Understanding when expressions are always positive'
        },
        subparts: [
            'Given: x² + 2x + 5 > 0',
            'Step 1: Calculate discriminant',
            'Δ = b² - 4ac = (2)² - 4(1)(5) = 4 - 20 = -16 < 0',
            'No real roots (parabola doesn\'t cross x-axis)',
            'Step 2: Determine parabola direction',
            'a = 1 > 0, so parabola opens upward',
            'Step 3: Analyze sign',
            'Since parabola opens upward and never crosses x-axis,',
            'it is always above the x-axis',
            'Therefore, x² + 2x + 5 > 0 for all real x',
            'Step 4: Write solution',
            'Solution: (-∞, ∞) or all real numbers',
            'Verification: Complete the square: (x + 1)² + 4 > 0 always true'
        ],
        helper: 'When Δ < 0 and a > 0, the quadratic is always positive (all real numbers satisfy >)',
        solution: '(-∞, ∞)',
        realWorldContext: 'Like finding when cost (with fixed overhead) is positive - always, since there\'s a base cost plus variable costs'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveQuadraticInequalityRelatedProblems() {
    const problems = generateRelatedQuadraticInequalities();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Quadratic Inequality Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedQuadraticInequalitiesMathematicalWorkbook({
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
            const result = workbook.solveQuadraticInequalityProblem({
                inequality: problem.problem.split(': ')[1] || problem.problem,
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

            console.log(`    ✓ Solution: ${result.solutionInterval}`);
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

async function generateQuadraticInequalitiesDocument() {
    console.log('Generating Quadratic Inequalities Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Quadratic Inequalities Workbook',
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
            text: 'Standard Form, Factoring, Sign Analysis, and Special Cases',
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
            text: 'Quadratic Inequalities (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const quadraticProblems = generateRelatedQuadraticInequalities();
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
            text: 'This workbook contains 5 carefully selected quadratic inequality problems covering essential concepts and techniques. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with discriminant analysis',
        '• Sign analysis and interval testing methods',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Parabola direction and critical point identification',
        '• Interval notation mastery with proper bracket usage',
        '• Common mistakes and error prevention strategies',
        '• Self-check questions and thinking prompts',
        '• Real-world applications (projectile motion, profit analysis, optimization)',
        '• Alternative solution methods (factoring, quadratic formula, graphing)',
        '• Special cases (no real roots, always true/false conditions)',
        '• Verification of solutions with test points',
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

    // Key Concepts Section
    documentChildren.push(
        new docx.Paragraph({
            text: 'Key Concepts Covered',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 150 }
        })
    );

    const keyConcepts = [
        '📐 Quadratic inequality standard form: ax² + bx + c compared to 0',
        '🔍 Discriminant (Δ = b² - 4ac) reveals number of real roots',
        '📊 Parabola direction: a > 0 opens upward, a < 0 opens downward',
        '📍 Critical points: where parabola crosses or touches x-axis',
        '➕➖ Sign analysis: testing intervals between critical points',
        '📝 Interval notation: ( ) for strict, [ ] for inclusive inequalities',
        '🎯 Special cases: Δ < 0 means always positive or always negative',
        '✅ Solution verification: testing points in proposed solution intervals'
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
    console.log('\nProcessing Quadratic Inequalities Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Quadratic Inequalities Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const quadraticSolved = solveQuadraticInequalityRelatedProblems();
    
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

        // Difficulty level with color coding
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'Difficulty: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.difficulty.toUpperCase(),
                        color: solved.problem.difficulty === 'easy' ? '2E7D32' : '1976D2',
                        bold: true
                    })
                ],
                spacing: { after: 100 }
            })
        );

        // Problem type
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'Type: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.context.topic
                    })
                ],
                spacing: { after: 150 }
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

        // Visual representation guide
        documentChildren.push(
            new docx.Paragraph({
                text: '📊 Visual Representation Guide',
                heading: docx.HeadingLevel.HEADING_3,
                spacing: { before: 300, after: 150 }
            })
        );

        const visualGuide = [
            '1. Draw a number line',
            '2. Mark the critical points (roots)',
            '3. Sketch a parabola opening upward (a > 0) or downward (a < 0)',
            '4. Shade the regions where the inequality is satisfied',
            '5. Use open circles ( ) for strict inequalities, closed circles [ ] for inclusive'
        ];

        visualGuide.forEach(guide => {
            documentChildren.push(
                new docx.Paragraph({
                    text: guide,
                    spacing: { after: 80 }
                })
            );
        });

        documentChildren.push(
            new docx.Paragraph({
                text: '',
                spacing: { after: 200 }
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
            text: 'Congratulations on completing these 5 quadratic inequality problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered solving quadratic inequalities using factoring and the quadratic formula',
        'You\'ve learned sign analysis to determine solution intervals',
        'You\'ve practiced interval notation with proper bracket usage',
        'You\'ve understood how discriminant reveals the number of roots',
        'You\'ve explored special cases where inequalities are always true or never true',
        'You\'ve seen real-world applications in projectile motion, profit analysis, and optimization',
        'You\'ve learned to verify solutions by testing points in intervals'
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
        '• Discriminant: Δ = b² - 4ac',
        '• Quadratic Formula: x = (-b ± √Δ)/(2a)',
        '• Vertex: x = -b/(2a)',
        '• If Δ > 0: two distinct real roots',
        '• If Δ = 0: one repeated root',
        '• If Δ < 0: no real roots (always same sign)',
        '• Parabola opens up if a > 0, down if a < 0'
    ];

    keyFormulas.forEach(formula => {
        documentChildren.push(
            new docx.Paragraph({
                text: formula,
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
        'Practice rational inequalities (quotients of polynomials)',
        'Explore polynomial inequalities of higher degree',
        'Study absolute value inequalities with quadratics',
        'Apply to physics problems (projectile motion, optimization)',
        'Solve systems of quadratic inequalities',
        'Explore graphing calculators for visual verification'
    ];

    nextSteps.forEach((step, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${step}`,
                spacing: { after: 100 }
            })
        );
    });

    // Common mistakes reminder
    documentChildren.push(
        new docx.Paragraph({
            text: '⚠️ Common Mistakes to Avoid:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const commonMistakes = [
        '❌ Forgetting to reverse inequality when multiplying/dividing by negative',
        '❌ Using brackets with infinity: [5, ∞] instead of [5, ∞)',
        '❌ Testing AT critical points instead of BETWEEN them',
        '❌ Choosing wrong intervals (inside vs outside roots)',
        '❌ Forgetting to include endpoints for ≤ or ≥',
        '❌ Not checking discriminant for special cases',
        '❌ Confusing union (∪) with intersection (∩)'
    ];

    commonMistakes.forEach(mistake => {
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
        const filename = 'quadratic_inequalities_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Simple Factored Inequality: 1 problem');
        console.log('    - Less Than Inequality: 1 problem');
        console.log('    - Negative Leading Coefficient: 1 problem');
        console.log('    - Using Quadratic Formula: 1 problem');
        console.log('    - Special Case (No Real Roots): 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 50-60 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and visual highlighting');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Discriminant analysis and critical point identification');
        console.log('  • Complete step-by-step solution with sign analysis');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Interval notation with proper bracket usage');
        console.log('  • Parabola direction and behavior analysis');
        console.log('  • Verification of solutions with test points');
        console.log('  • Key concepts and learning objectives');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods (factoring, formula, graphing)');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Visual representation guide');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary');
        console.log('='.repeat(80) + '\n');
    } catch (error) {
        console.error(`\n❌ Error saving document: ${error.message}`);
        console.error(error.stack);
    }
}

// ============== RUN THE DOCUMENT GENERATION ==============

generateQuadraticInequalitiesDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});
