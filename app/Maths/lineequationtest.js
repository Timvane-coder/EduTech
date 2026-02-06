import { EnhancedLineEquationsMathematicalWorkbook } from './line-equations-workbook.js';
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




// ============== LINE EQUATIONS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedLineEquations() {
    const relatedProblems = [];

    // Problem 1: Slope-Intercept Form from Slope and Y-Intercept
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Slope-Intercept Form from Slope and Y-Intercept',
        problem: 'Write the equation of a line with slope m = 3 and y-intercept b = -2',
        parameters: { m: 3, b: -2 },
        problemType: 'slope_intercept_from_slope_and_intercept',
        context: { 
            difficulty: 'beginner', 
            topic: 'Slope-Intercept Form',
            realWorld: 'Direct substitution into y = mx + b'
        },
        subparts: [
            'Given: slope m = 3, y-intercept b = -2',
            'Formula: y = mx + b',
            'Step 1: Identify the values',
            '  m = 3 (slope)',
            '  b = -2 (y-intercept)',
            'Step 2: Substitute into y = mx + b',
            '  y = 3x + (-2)',
            '  y = 3x - 2',
            'Final equation: y = 3x - 2',
            'Interpretation: Line rises 3 units for each 1 unit right, crosses y-axis at -2'
        ],
        helper: 'Simply substitute m and b directly into y = mx + b',
        solution: 'y = 3x - 2',
        realWorldContext: 'Like a phone plan: $3 per minute plus a $2 discount (or -$2 base fee)'
    });

    // Problem 2: Finding Slope from Two Points
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Finding Slope from Two Points',
        problem: 'Find the slope of the line passing through points (2, 5) and (6, 13)',
        parameters: { x1: 2, y1: 5, x2: 6, y2: 13 },
        problemType: 'find_slope_from_two_points',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Slope Calculation',
            realWorld: 'Calculating rate of change'
        },
        subparts: [
            'Given: Point 1 (2, 5), Point 2 (6, 13)',
            'Formula: m = (y₂ - y₁)/(x₂ - x₁)',
            'Step 1: Label the points',
            '  (x₁, y₁) = (2, 5)',
            '  (x₂, y₂) = (6, 13)',
            'Step 2: Substitute into slope formula',
            '  m = (13 - 5)/(6 - 2)',
            'Step 3: Calculate',
            '  m = 8/4',
            '  m = 2',
            'Final answer: slope m = 2',
            'Interpretation: Line rises 2 units for every 1 unit to the right'
        ],
        helper: 'Use m = (y₂ - y₁)/(x₂ - x₁) and keep subtraction order consistent',
        solution: 'm = 2',
        realWorldContext: 'Like calculating speed: if you travel from mile 5 to mile 13 in 4 hours (from hour 2 to hour 6), your speed is 2 mph'
    });

    // Problem 3: Slope-Intercept Form from Point and Slope
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Slope-Intercept Form from Point and Slope',
        problem: 'Find the equation in slope-intercept form for a line with slope 4 passing through point (3, 11)',
        parameters: { m: 4, x1: 3, y1: 11 },
        problemType: 'slope_intercept_from_point_and_slope',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Slope-Intercept Form',
            realWorld: 'Finding equation when given rate and one data point'
        },
        subparts: [
            'Given: slope m = 4, point (3, 11)',
            'Goal: Find y = mx + b',
            'Step 1: Use the point to find b',
            '  Formula: y = mx + b',
            '  Substitute: 11 = 4(3) + b',
            'Step 2: Solve for b',
            '  11 = 12 + b',
            '  b = 11 - 12',
            '  b = -1',
            'Step 3: Write final equation',
            '  y = 4x + (-1)',
            '  y = 4x - 1',
            'Check: 11 = 4(3) - 1 = 12 - 1 = 11 ✓'
        ],
        helper: 'Substitute the point into y = mx + b and solve for b',
        solution: 'y = 4x - 1',
        realWorldContext: 'Like a taxi: charges $4 per mile, and after 3 miles you\'ve paid $11. Work backwards to find the base fare (y-intercept)'
    });

    // Problem 4: Parallel Line Equation
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Finding Parallel Line',
        problem: 'Find the equation of a line parallel to y = 2x + 5 that passes through point (4, 3)',
        parameters: { m: 2, x1: 4, y1: 3 },
        problemType: 'parallel_line',
        context: { 
            difficulty: 'advanced', 
            topic: 'Parallel Lines',
            realWorld: 'Finding lines with same rate but different starting point'
        },
        subparts: [
            'Given: Original line y = 2x + 5, Point (4, 3)',
            'Key concept: Parallel lines have the same slope',
            'Step 1: Identify the slope of original line',
            '  From y = 2x + 5, slope m = 2',
            'Step 2: Use same slope for parallel line',
            '  Parallel line also has m = 2',
            'Step 3: Use point (4, 3) to find b',
            '  y = mx + b',
            '  3 = 2(4) + b',
            '  3 = 8 + b',
            '  b = -5',
            'Step 4: Write equation',
            '  y = 2x - 5',
            'Verification: Same slope (2), different y-intercept ✓'
        ],
        helper: 'Parallel lines have identical slopes - use the same m value',
        solution: 'y = 2x - 5',
        realWorldContext: 'Like two roads running parallel: same direction and steepness, but at different elevations'
    });

    // Problem 5: Slope-Intercept from Two Points
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Slope-Intercept Form from Two Points',
        problem: 'Find the equation in slope-intercept form for the line passing through points (1, 7) and (4, 16)',
        parameters: { x1: 1, y1: 7, x2: 4, y2: 16 },
        problemType: 'slope_intercept_from_two_points',
        context: { 
            difficulty: 'advanced', 
            topic: 'Complete Line Equation',
            realWorld: 'Finding equation from two data points'
        },
        subparts: [
            'Given: Point 1 (1, 7), Point 2 (4, 16)',
            'Goal: Find y = mx + b',
            'Step 1: Calculate slope',
            '  m = (y₂ - y₁)/(x₂ - x₁)',
            '  m = (16 - 7)/(4 - 1)',
            '  m = 9/3',
            '  m = 3',
            'Step 2: Use one point to find b',
            '  Using point (1, 7):',
            '  7 = 3(1) + b',
            '  7 = 3 + b',
            '  b = 4',
            'Step 3: Write equation',
            '  y = 3x + 4',
            'Verification with point (4, 16):',
            '  16 = 3(4) + 4 = 12 + 4 = 16 ✓'
        ],
        helper: 'First find slope from the two points, then use either point to find b',
        solution: 'y = 3x + 4',
        realWorldContext: 'Like plotting elevation vs distance on a hike: if you\'re at 7 ft after 1 mile and 16 ft after 4 miles, find the elevation equation'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveLineEquationsRelatedProblems() {
    const problems = generateRelatedLineEquations();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Line Equations Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedLineEquationsMathematicalWorkbook({
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
            const result = workbook.solveLineEquationProblem({
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

            console.log(`    ✓ Solution: ${result.equation || result.solution}`);
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

async function generateLineEquationsDocument() {
    console.log('Generating Line Equations Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Line Equations Workbook',
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
            text: 'Point-Slope and Slope-Intercept Forms',
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
            text: 'Line Equations (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const lineProblems = generateRelatedLineEquations();
    lineProblems.forEach((problem, index) => {
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
            text: 'This workbook contains 5 carefully selected line equation problems covering slope-intercept form, point-slope form, finding slopes, and parallel lines. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed explanations',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Slope interpretation and graphing guidance',
        '• Common mistakes and error prevention tips',
        '• Self-check questions and thinking prompts',
        '• Real-world applications and context',
        '• Alternative solution methods',
        '• Verification of solutions with point substitution',
        '• Pedagogical notes for deeper understanding',
        '• Graph information and key points'
    ];

    features.forEach(feature => {
        documentChildren.push(
            new docx.Paragraph({
                text: feature,
                spacing: { after: 100 }
            })
        );
    });

    // ============== KEY CONCEPTS ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Key Concepts Covered',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    const concepts = [
        {
            title: 'Slope-Intercept Form (y = mx + b)',
            description: 'The most common form showing slope (m) and y-intercept (b) directly'
        },
        {
            title: 'Finding Slope from Two Points',
            description: 'Using m = (y₂ - y₁)/(x₂ - x₁) to calculate rate of change'
        },
        {
            title: 'Point-Slope Form',
            description: 'Using a known point and slope: y - y₁ = m(x - x₁)'
        },
        {
            title: 'Parallel Lines',
            description: 'Lines with identical slopes that never intersect'
        },
        {
            title: 'Real-World Applications',
            description: 'Cost calculations, speed problems, and linear relationships'
        }
    ];

    concepts.forEach(concept => {
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
    console.log('\nProcessing Line Equations Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Line Equations Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const lineSolved = solveLineEquationsRelatedProblems();
    
    lineSolved.forEach((solved, index) => {
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
            text: 'Congratulations on completing these 5 line equation problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered writing equations in slope-intercept form (y = mx + b)',
        'You\'ve learned to calculate slope from two points using the slope formula',
        'You\'ve practiced finding equations given a point and slope',
        'You\'ve explored parallel lines and their same-slope property',
        'You\'ve seen real-world applications of linear equations',
        'You\'ve learned to interpret slope as rate of change',
        'You\'ve practiced verification by substituting points'
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
        'Practice perpendicular lines (negative reciprocal slopes)',
        'Learn to convert between different forms of linear equations',
        'Master graphing lines using slope and y-intercept',
        'Solve word problems involving linear relationships',
        'Explore systems of linear equations',
        'Apply line equations to real-world data analysis'
    ];

    nextSteps.forEach((step, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${step}`,
                spacing: { after: 100 }
            })
        );
    });

    // ============== FORMULA REFERENCE ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Quick Formula Reference',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    const formulas = [
        {
            name: 'Slope-Intercept Form',
            formula: 'y = mx + b',
            description: 'm is slope, b is y-intercept'
        },
        {
            name: 'Slope Formula',
            formula: 'm = (y₂ - y₁)/(x₂ - x₁)',
            description: 'Calculate slope from two points'
        },
        {
            name: 'Point-Slope Form',
            formula: 'y - y₁ = m(x - x₁)',
            description: 'Use when given point and slope'
        },
        {
            name: 'Parallel Lines',
            formula: 'm₁ = m₂',
            description: 'Same slope'
        },
        {
            name: 'Perpendicular Lines',
            formula: 'm₁ × m₂ = -1',
            description: 'Negative reciprocal slopes'
        }
    ];

    formulas.forEach(formula => {
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: `${formula.name}: `,
                        bold: true
                    }),
                    new docx.TextRun({
                        text: formula.formula,
                        italics: true
                    }),
                    new docx.TextRun({
                        text: ` (${formula.description})`
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
        const filename = 'line_equations_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Slope-Intercept Form: 2 problems');
        console.log('    - Finding Slope: 1 problem');
        console.log('    - Point and Slope: 1 problem');
        console.log('    - Parallel Lines: 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 45-55 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and visual highlighting');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Complete step-by-step solution with enhanced explanations');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Slope interpretation and meaning');
        console.log('  • Verification of solutions with point substitution');
        console.log('  • Graph information with key points');
        console.log('  • Key concepts and learning objectives');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary');
        console.log('  • Formula reference guide');
        console.log('='.repeat(80) + '\n');
    } catch (error) {
        console.error(`\n❌ Error saving document: ${error.message}`);
        console.error(error.stack);
    }
}

// ============== RUN THE DOCUMENT GENERATION ==============

generateLineEquationsDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});

