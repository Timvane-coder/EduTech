import { EnhancedAbsoluteValueLinearMathematicalWorkbook } from './absolute-value-workbook.js';
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




// ============== ABSOLUTE VALUE LINEAR EQUATIONS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedAbsoluteValueEquations() {
    const relatedProblems = [];

    // Problem 1: Simple Absolute Value Equation
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Simple Absolute Value Equation',
        problem: 'Solve for x: |x| = 6',
        parameters: { a: 1, b: 0, c: 6 },
        problemType: 'simple_absolute_value',
        context: { 
            difficulty: 'beginner', 
            topic: 'Simple Absolute Value Equations',
            realWorld: 'Finding values at equal distance from zero'
        },
        subparts: [
            'Given: |x| = 6',
            'Meaning: x is 6 units away from zero',
            'Check: Is 6 ≥ 0? Yes ✓ (equation is solvable)',
            'Distance can be achieved in two directions:',
            'Case 1 (positive direction): x = 6',
            'Case 2 (negative direction): x = -6',
            'Verify x = 6: |6| = 6 ✓',
            'Verify x = -6: |-6| = 6 ✓',
            'Solution: x = 6 or x = -6'
        ],
        helper: 'Absolute value represents distance from zero - it can be achieved by going in either direction',
        solution: 'x = 6 or x = -6',
        realWorldContext: 'Like finding two locations that are exactly 6 miles from your home - one to the north and one to the south'
    });

    // Problem 2: Linear Expression Inside Absolute Value
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Linear Absolute Value Equation',
        problem: 'Solve for x: |2x - 3| = 7',
        parameters: { a: 2, b: -3, c: 7 },
        problemType: 'linear_inside_absolute_value',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Linear Absolute Value Equations',
            realWorld: 'Finding values where an expression has a specific magnitude'
        },
        subparts: [
            'Given: |2x - 3| = 7',
            'Check: Is 7 ≥ 0? Yes ✓',
            'Split into two cases:',
            '',
            'Case 1 (positive): 2x - 3 = 7',
            '  2x - 3 + 3 = 7 + 3',
            '  2x = 10',
            '  x = 5',
            '',
            'Case 2 (negative): 2x - 3 = -7',
            '  2x - 3 + 3 = -7 + 3',
            '  2x = -4',
            '  x = -2',
            '',
            'Verify x = 5: |2(5) - 3| = |10 - 3| = |7| = 7 ✓',
            'Verify x = -2: |2(-2) - 3| = |-4 - 3| = |-7| = 7 ✓',
            'Solution: x = 5 or x = -2'
        ],
        helper: 'The expression inside can equal the positive value OR the negative value',
        solution: 'x = 5 or x = -2',
        realWorldContext: 'Like quality control: finding which measurements deviate exactly 7 units from a target of 3'
    });

    // Problem 3: Absolute Value with Coefficient Outside
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Absolute Value with Coefficient',
        problem: 'Solve for x: 3|x - 2| = 15',
        parameters: { coefficientOutside: 3, a: 1, b: -2, c: 15 },
        problemType: 'absolute_value_with_coefficient',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Absolute Value with Coefficients',
            realWorld: 'Scaled deviation or tolerance problems'
        },
        subparts: [
            'Given: 3|x - 2| = 15',
            'Step 1: Isolate the absolute value',
            '  Divide both sides by 3:',
            '  |x - 2| = 15/3',
            '  |x - 2| = 5',
            '',
            'Check: Is 5 ≥ 0? Yes ✓',
            'Step 2: Split into two cases',
            '',
            'Case 1 (positive): x - 2 = 5',
            '  x = 5 + 2',
            '  x = 7',
            '',
            'Case 2 (negative): x - 2 = -5',
            '  x = -5 + 2',
            '  x = -3',
            '',
            'Verify x = 7: 3|7 - 2| = 3|5| = 3(5) = 15 ✓',
            'Verify x = -3: 3|-3 - 2| = 3|-5| = 3(5) = 15 ✓',
            'Solution: x = 7 or x = -3'
        ],
        helper: 'First isolate the absolute value by dividing, then split into two cases',
        solution: 'x = 7 or x = -3',
        realWorldContext: 'Like a scale that measures 3 times the actual deviation: if reading is 15, the actual deviation is 5'
    });

    // Problem 4: Absolute Value with Added Constant
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Absolute Value with Constant Added',
        problem: 'Solve for x: |x + 3| + 2 = 9',
        parameters: { a: 1, b: 3, constantOutside: 2, c: 9 },
        problemType: 'absolute_value_with_constant',
        context: { 
            difficulty: 'advanced', 
            topic: 'Multi-Step Absolute Value Equations',
            realWorld: 'Complex tolerance problems with offset'
        },
        subparts: [
            'Given: |x + 3| + 2 = 9',
            'Step 1: Isolate the absolute value',
            '  Subtract 2 from both sides:',
            '  |x + 3| + 2 - 2 = 9 - 2',
            '  |x + 3| = 7',
            '',
            'Check: Is 7 ≥ 0? Yes ✓',
            'Step 2: Split into two cases',
            '',
            'Case 1 (positive): x + 3 = 7',
            '  x = 7 - 3',
            '  x = 4',
            '',
            'Case 2 (negative): x + 3 = -7',
            '  x = -7 - 3',
            '  x = -10',
            '',
            'Verify x = 4: |4 + 3| + 2 = |7| + 2 = 7 + 2 = 9 ✓',
            'Verify x = -10: |-10 + 3| + 2 = |-7| + 2 = 7 + 2 = 9 ✓',
            'Solution: x = 4 or x = -10'
        ],
        helper: 'Isolate the absolute value first by undoing operations outside it, then split into cases',
        solution: 'x = 4 or x = -10',
        realWorldContext: 'Like a measurement system with a 2-unit offset: the true deviation from -3 is 7 units'
    });

    // Problem 5: Absolute Value Equation with No Solution
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Absolute Value with No Solution',
        problem: 'Solve for x: |2x + 5| + 8 = 3',
        parameters: { a: 2, b: 5, constantOutside: 8, c: 3 },
        problemType: 'absolute_value_with_constant',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Recognizing Impossible Absolute Value Equations',
            realWorld: 'Identifying impossible specifications or constraints'
        },
        subparts: [
            'Given: |2x + 5| + 8 = 3',
            'Step 1: Try to isolate the absolute value',
            '  Subtract 8 from both sides:',
            '  |2x + 5| + 8 - 8 = 3 - 8',
            '  |2x + 5| = -5',
            '',
            'Step 2: Check feasibility',
            '  Question: Can absolute value equal -5?',
            '  Answer: NO! Absolute value is always ≥ 0',
            '  Remember: |anything| ≥ 0 for all real numbers',
            '',
            'Conclusion: No solution exists',
            'Why: Distance cannot be negative',
            'Solution set: ∅ (empty set)',
            '',
            'Key Insight: Always check if the isolated absolute value',
            'equals a non-negative number before proceeding!'
        ],
        helper: 'Always check: can absolute value equal the right side? If negative, STOP - no solution!',
        solution: 'No solution (∅)',
        realWorldContext: 'Like asking for a location that is negative 5 miles away - impossible! Distance cannot be negative.'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveAbsoluteValueRelatedProblems() {
    const problems = generateRelatedAbsoluteValueEquations();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Absolute Value Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedAbsoluteValueLinearMathematicalWorkbook({
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
            const result = workbook.solveAbsoluteValueProblem({
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

            // Format solution output
            let solutionDisplay;
            if (result.solutions && result.solutions.length > 0) {
                solutionDisplay = result.solutions.map(s => `x = ${s}`).join(' or ');
            } else if (result.solutionType === 'No solution') {
                solutionDisplay = 'No solution (∅)';
            } else {
                solutionDisplay = 'See detailed solution';
            }

            console.log(`    ✓ Solution: ${solutionDisplay}`);
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

async function generateAbsoluteValueDocument() {
    console.log('Generating Absolute Value Linear Equations Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Absolute Value Linear Equations Workbook',
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
            text: 'Simple, Linear, With Coefficients, and No Solution Cases',
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
            text: 'Absolute Value Linear Equations (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const absoluteValueProblems = generateRelatedAbsoluteValueEquations();
    absoluteValueProblems.forEach((problem, index) => {
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
            text: 'This workbook contains 5 carefully selected absolute value linear equation problems that progressively build your understanding from simple to complex cases. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed explanations',
        '• Understanding absolute value as distance from zero',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Case-splitting techniques (positive and negative cases)',
        '• Recognition of no-solution scenarios',
        '• Common mistakes and error prevention tips',
        '• Self-check questions and thinking prompts',
        '• Real-world applications and distance interpretations',
        '• Graphical representations on number lines',
        '• Alternative solution methods',
        '• Verification of all solutions',
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

    // ============== KEY CONCEPTS SECTION ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Key Concepts of Absolute Value',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    const keyConcepts = [
        {
            title: 'What is Absolute Value?',
            content: 'Absolute value |x| represents the distance of x from zero on the number line, always non-negative.'
        },
        {
            title: 'Why Two Solutions?',
            content: 'Since distance can be measured in both directions, |x| = 5 means x could be 5 or -5.'
        },
        {
            title: 'When No Solution?',
            content: 'If |expression| = negative number, there\'s no solution because distance cannot be negative.'
        },
        {
            title: 'The Two-Case Method',
            content: 'For |A| = c (c > 0), we solve: A = c (positive case) and A = -c (negative case).'
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
                        text: concept.content
                    })
                ],
                spacing: { after: 150 }
            })
        );
    });

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Absolute Value Equations Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Absolute Value Linear Equations Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const absoluteValueSolved = solveAbsoluteValueRelatedProblems();
    
    absoluteValueSolved.forEach((solved, index) => {
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

        // Problem statement box with absolute value highlighting
        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true,
                shading: {
                    fill: "E6F3FF",
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
                        color: solved.problem.difficulty === 'easy' ? '2E7D32' : 
                               solved.problem.difficulty === 'medium' ? '1976D2' : 'D32F2F'
                    })
                ],
                spacing: { after: 100 }
            })
        );

        // Helper tip with lightbulb icon
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

        // Real-world context with globe icon
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

        // Special note for no-solution problems
        if (solved.problem.solution === 'No solution (∅)') {
            documentChildren.push(
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            text: '⚠️ Important: ',
                            bold: true,
                            color: 'D32F2F'
                        }),
                        new docx.TextRun({
                            text: 'This problem demonstrates a case with NO SOLUTION - a critical concept in absolute value equations!',
                            color: 'D32F2F'
                        })
                    ],
                    spacing: { after: 300 },
                    shading: {
                        fill: "FFEBEE",
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

        // Final answer with special formatting
        const answerColor = solved.problem.solution === 'No solution (∅)' ? 'D32F2F' : '2E7D32';
        const answerBg = solved.problem.solution === 'No solution (∅)' ? 'FFEBEE' : 'E8F5E9';
        
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
                        color: answerColor
                    })
                ],
                spacing: { before: 200, after: 400 },
                shading: {
                    fill: answerBg,
                    type: docx.ShadingType.CLEAR
                }
            })
        );

        // Number line visualization note
        if (solved.problem.solution !== 'No solution (∅)') {
            documentChildren.push(
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            text: '📏 Number Line Tip: ',
                            bold: true
                        }),
                        new docx.TextRun({
                            text: 'Mark both solutions on a number line to visualize them as equal distances from a reference point.',
                            italics: true
                        })
                    ],
                    spacing: { after: 300 },
                    shading: {
                        fill: "F3E5F5",
                        type: docx.ShadingType.CLEAR
                    }
                })
            );
        }
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
            text: 'Congratulations on completing these 5 absolute value linear equation problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered simple absolute value equations like |x| = a',
        'You\'ve learned to solve linear expressions inside absolute value: |ax + b| = c',
        'You\'ve practiced isolating absolute value when coefficients or constants are outside',
        'You\'ve learned to recognize and handle no-solution cases',
        'You understand the distance interpretation and why there are typically two solutions',
        'You\'ve mastered the two-case method (positive and negative)',
        'You\'ve learned to verify all solutions',
        'You\'ve seen real-world applications of absolute value in tolerance and distance problems'
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
            text: 'Critical Reminders:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const criticalReminders = [
        '⚠️ Always check if right side is non-negative before solving',
        '⚠️ Always set up BOTH cases (positive and negative)',
        '⚠️ Always verify both solutions in the original equation',
        '⚠️ Remember: |anything| ≥ 0 always - cannot equal negative',
        '⚠️ For |A| = c, the cases are A = c and A = -c (not -(A) = c)'
    ];

    criticalReminders.forEach(reminder => {
        documentChildren.push(
            new docx.Paragraph({
                text: reminder,
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
        'Practice compound absolute value equations: |A| = |B|',
        'Move on to absolute value inequalities: |x| < a or |x| > a',
        'Explore graphing absolute value functions',
        'Try word problems involving distance, tolerance, and error',
        'Combine absolute value with other algebraic concepts',
        'Study piecewise functions and their connection to absolute value'
    ];

    nextSteps.forEach((step, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${step}`,
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
        const filename = 'absolute_value_linear_equations_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Simple Absolute Value: 1 problem');
        console.log('    - Linear Inside Absolute Value: 1 problem');
        console.log('    - With Coefficient Outside: 1 problem');
        console.log('    - With Constant Added: 1 problem');
        console.log('    - No Solution Case: 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 50-60 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and visual highlighting');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context explaining distance interpretations');
        console.log('  • Complete step-by-step solution with case splitting');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Detailed verification of ALL solutions');
        console.log('  • Key concepts including distance interpretation');
        console.log('  • Common mistakes specific to absolute value equations');
        console.log('  • Error prevention for case-splitting and feasibility checking');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Number line visualizations');
        console.log('  • Alternative solution methods');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary');
        console.log('  • Special emphasis on no-solution recognition');
        console.log('='.repeat(80) + '\n');
    } catch (error) {
        console.error(`\n❌ Error saving document: ${error.message}`);
        console.error(error.stack);
    }
}

// ============== RUN THE DOCUMENT GENERATION ==============

generateAbsoluteValueDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});
