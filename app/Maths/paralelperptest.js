import { EnhancedParallelPerpendicularLinesWorkbook } from './parallel-perpendicular-workbook.js';
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




// ============== PARALLEL AND PERPENDICULAR LINES - RELATED PROBLEMS GENERATOR ==============

function generateRelatedParallelPerpendicularProblems() {
    const relatedProblems = [];

    // Problem 1: Find Slope from Two Points
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Finding Slope from Two Points',
        problem: 'Find the slope of the line passing through points (2, 5) and (6, 13)',
        parameters: { 
            point1: { x: 2, y: 5 }, 
            point2: { x: 6, y: 13 } 
        },
        problemType: 'slope_from_points',
        context: { 
            difficulty: 'beginner', 
            topic: 'Slope Calculation',
            realWorld: 'Measuring steepness and rate of change'
        },
        subparts: [
            'Given: Point 1 (2, 5) and Point 2 (6, 13)',
            'Formula: m = (y₂ - y₁)/(x₂ - x₁)',
            'Substitute: m = (13 - 5)/(6 - 2)',
            'Calculate rise: 13 - 5 = 8',
            'Calculate run: 6 - 2 = 4',
            'Divide: m = 8/4 = 2',
            'The slope is 2 (line rises 2 units for every 1 unit to the right)'
        ],
        helper: 'Remember: slope = rise/run. Subtract y-coordinates for rise, x-coordinates for run',
        solution: 'm = 2',
        realWorldContext: 'Like measuring the steepness of a hill: if you go up 8 feet while moving forward 4 feet, the slope is 8/4 = 2'
    });

    // Problem 2: Write Equation of Parallel Line
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Equation of Parallel Line',
        problem: 'Write the equation of a line parallel to y = 3x - 4 that passes through point (2, 5)',
        parameters: { 
            slope: 3, 
            yIntercept: -4,
            point1: { x: 2, y: 5 } 
        },
        problemType: 'parallel_line_equation',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Parallel Lines',
            realWorld: 'Finding lines that never intersect'
        },
        subparts: [
            'Given: Original line y = 3x - 4, Point (2, 5)',
            'Step 1: Identify slope of given line: m₁ = 3',
            'Step 2: Parallel lines have equal slopes: m₂ = 3',
            'Step 3: Use point-slope form: y - y₁ = m(x - x₁)',
            'Step 4: Substitute: y - 5 = 3(x - 2)',
            'Step 5: Distribute: y - 5 = 3x - 6',
            'Step 6: Solve for y: y = 3x - 6 + 5',
            'Final equation: y = 3x - 1',
            'Check: Slope is 3 ✓, passes through (2, 5): 5 = 3(2) - 1 = 5 ✓'
        ],
        helper: 'Parallel lines have the SAME slope. Use the same m value with your new point',
        solution: 'y = 3x - 1',
        realWorldContext: 'Like railroad tracks - they have the same steepness (slope) but different positions'
    });

    // Problem 3: Write Equation of Perpendicular Line
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Equation of Perpendicular Line',
        problem: 'Write the equation of a line perpendicular to y = (2/3)x + 1 that passes through point (6, 4)',
        parameters: { 
            slope: 2/3, 
            yIntercept: 1,
            point1: { x: 6, y: 4 } 
        },
        problemType: 'perpendicular_line_equation',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Perpendicular Lines',
            realWorld: 'Finding lines that meet at right angles'
        },
        subparts: [
            'Given: Original line y = (2/3)x + 1, Point (6, 4)',
            'Step 1: Identify slope of given line: m₁ = 2/3',
            'Step 2: Find negative reciprocal: m₂ = -1/(2/3) = -3/2',
            'Step 3: Verify perpendicular: (2/3) × (-3/2) = -1 ✓',
            'Step 4: Use point-slope form: y - 4 = (-3/2)(x - 6)',
            'Step 5: Distribute: y - 4 = (-3/2)x + 9',
            'Step 6: Solve for y: y = (-3/2)x + 9 + 4',
            'Final equation: y = (-3/2)x + 13',
            'Check: Slope is -3/2 ✓, passes through (6, 4): 4 = (-3/2)(6) + 13 = 4 ✓'
        ],
        helper: 'Perpendicular slopes are negative reciprocals: flip the fraction AND change the sign',
        solution: 'y = (-3/2)x + 13',
        realWorldContext: 'Like streets at a corner forming a perfect 90-degree intersection'
    });

    // Problem 4: Determine Line Relationship
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Determining Line Relationship',
        problem: 'Determine if the lines y = 4x + 2 and y = -1/4x - 3 are parallel, perpendicular, or neither',
        parameters: { 
            slope1: 4, 
            slope2: -1/4 
        },
        problemType: 'determine_relationship',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Line Relationships',
            realWorld: 'Analyzing how lines relate to each other'
        },
        subparts: [
            'Given: Line 1: y = 4x + 2, Line 2: y = -1/4x - 3',
            'Step 1: Identify slopes',
            '  m₁ = 4 (from first equation)',
            '  m₂ = -1/4 (from second equation)',
            'Step 2: Check if parallel (slopes equal)',
            '  4 ≠ -1/4, so NOT parallel',
            'Step 3: Check if perpendicular (product = -1)',
            '  m₁ × m₂ = 4 × (-1/4) = -1 ✓',
            'Conclusion: The lines are PERPENDICULAR',
            'They intersect at a 90-degree angle'
        ],
        helper: 'Check two conditions: equal slopes = parallel, product of slopes = -1 means perpendicular',
        solution: 'Perpendicular',
        realWorldContext: 'Like determining if two roads will never cross (parallel) or meet at a right angle (perpendicular)'
    });

    // Problem 5: Verify Parallelogram
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Verifying a Parallelogram',
        problem: 'Verify if quadrilateral ABCD with vertices A(1, 2), B(5, 4), C(7, 8), and D(3, 6) is a parallelogram',
        parameters: { 
            point1: { x: 1, y: 2 },  // A
            point2: { x: 5, y: 4 },  // B
            point3: { x: 7, y: 8 },  // C
            point4: { x: 3, y: 6 }   // D
        },
        problemType: 'verify_parallelogram',
        context: { 
            difficulty: 'advanced', 
            topic: 'Geometric Verification',
            realWorld: 'Verifying properties of geometric shapes'
        },
        subparts: [
            'Given: A(1, 2), B(5, 4), C(7, 8), D(3, 6)',
            'Strategy: Show opposite sides are parallel (equal slopes)',
            'Step 1: Find slope of AB',
            '  m_AB = (4 - 2)/(5 - 1) = 2/4 = 1/2',
            'Step 2: Find slope of CD (opposite side)',
            '  m_CD = (6 - 8)/(3 - 7) = -2/-4 = 1/2',
            'Step 3: Check if AB ∥ CD',
            '  1/2 = 1/2 ✓ YES, AB is parallel to CD',
            'Step 4: Find slope of BC',
            '  m_BC = (8 - 4)/(7 - 5) = 4/2 = 2',
            'Step 5: Find slope of DA (opposite side)',
            '  m_DA = (2 - 6)/(1 - 3) = -4/-2 = 2',
            'Step 6: Check if BC ∥ DA',
            '  2 = 2 ✓ YES, BC is parallel to DA',
            'Conclusion: Both pairs of opposite sides are parallel',
            'Therefore, ABCD IS a parallelogram ✓'
        ],
        helper: 'For parallelogram: show both pairs of opposite sides have equal slopes (are parallel)',
        solution: 'Yes, ABCD is a parallelogram',
        realWorldContext: 'Like verifying a four-sided field has opposite sides that are parallel, ensuring it\'s a proper parallelogram shape'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveParallelPerpendicularRelatedProblems() {
    const problems = generateRelatedParallelPerpendicularProblems();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Parallel/Perpendicular Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedParallelPerpendicularLinesWorkbook({
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
            const result = workbook.solveParallelPerpendicularProblem({
                equation: problem.problem,
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

            console.log(`    ✓ Solution: ${result.solutionValue || result.solution?.result || 'See workbook'}`);
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
    console.log('Generating Parallel and Perpendicular Lines Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Parallel and Perpendicular Lines Workbook',
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
            text: 'Slope, Parallel Lines, Perpendicular Lines, and Geometric Applications',
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
            text: 'Parallel and Perpendicular Lines (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const parallelProblems = generateRelatedParallelPerpendicularProblems();
    parallelProblems.forEach((problem, index) => {
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
            text: 'This workbook contains 5 carefully selected parallel and perpendicular lines problems that progressively build your understanding of slope and line relationships. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed explanations',
        '• Visual understanding of slope as "rise over run"',
        '• Clear explanations of parallel lines (equal slopes)',
        '• Thorough coverage of perpendicular lines (negative reciprocals)',
        '• Common mistakes and error prevention strategies',
        '• Self-check questions and thinking prompts',
        '• Real-world applications (ramps, roads, buildings)',
        '• Alternative solution methods',
        '• Geometric verification techniques',
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
            spacing: { after: 300 }
        })
    );

    // Key concepts section
    documentChildren.push(
        new docx.Paragraph({
            text: 'Key Concepts You\'ll Master:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const keyConcepts = [
        '📐 Slope Calculation: Using the formula m = (y₂ - y₁)/(x₂ - x₁) to find steepness',
        '∥ Parallel Lines: Lines with equal slopes that never intersect',
        '⊥ Perpendicular Lines: Lines with negative reciprocal slopes that meet at 90°',
        '🔍 Line Relationships: Determining if lines are parallel, perpendicular, or neither',
        '📊 Geometric Verification: Using slope to verify properties of shapes'
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
    console.log('\nProcessing Parallel and Perpendicular Lines Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Parallel and Perpendicular Lines Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const parallelSolved = solveParallelPerpendicularRelatedProblems();
    
    parallelSolved.forEach((solved, index) => {
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
                    fill: "E3F2FD",
                    type: docx.ShadingType.CLEAR
                }
            })
        );

        // Difficulty level with color coding
        const difficultyColor = 
            solved.problem.difficulty === 'easy' ? '2E7D32' : 
            solved.problem.difficulty === 'medium' ? '1976D2' : 
            'D32F2F';

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

        // Helper tip with lightbulb
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
                    fill: "FFF9C4",
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
                        color: '1976D2'
                    })
                ],
                spacing: { before: 200, after: 400 },
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
            text: 'Congratulations on completing these 5 parallel and perpendicular lines problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        '✓ You\'ve mastered calculating slope from two points using rise over run',
        '✓ You can write equations of parallel lines (same slope)',
        '✓ You can write equations of perpendicular lines (negative reciprocal slopes)',
        '✓ You can determine relationships between lines by comparing slopes',
        '✓ You can verify geometric shapes using slope calculations',
        '✓ You understand real-world applications of parallel and perpendicular lines'
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
                text: point,
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
        '📐 Slope Formula: m = (y₂ - y₁)/(x₂ - x₁)',
        '∥ Parallel Lines: m₁ = m₂ (equal slopes)',
        '⊥ Perpendicular Lines: m₁ · m₂ = -1 (or m₂ = -1/m₁)',
        '📝 Point-Slope Form: y - y₁ = m(x - x₁)',
        '📊 Slope-Intercept Form: y = mx + b'
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
        'Practice finding slopes from equations in different forms (standard form, point-slope form)',
        'Explore distance between parallel lines',
        'Work with altitudes in triangles (perpendicular to base)',
        'Verify rectangles using perpendicular adjacent sides',
        'Apply slope concepts to real-world problems (wheelchair ramps, roof pitch, road grades)',
        'Study systems of linear equations and their graphical solutions'
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
            spacing: { after: 300 }
        })
    );

    // Common mistakes reminder
    documentChildren.push(
        new docx.Paragraph({
            text: '⚠️ Common Mistakes to Avoid:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const commonMistakes = [
        '❌ Mixing up x and y coordinates when calculating slope',
        '❌ Forgetting to find the negative reciprocal for perpendicular lines (must flip AND negate)',
        '❌ Using the negative reciprocal for parallel lines (should use same slope)',
        '❌ Division by zero when finding slope of vertical lines',
        '❌ Not simplifying slopes to lowest terms',
        '❌ Forgetting to verify your answer by substitution'
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
        const filename = 'parallel_perpendicular_lines_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Slope Calculation: 1 problem');
        console.log('    - Parallel Lines: 1 problem');
        console.log('    - Perpendicular Lines: 1 problem');
        console.log('    - Line Relationships: 1 problem');
        console.log('    - Geometric Verification: 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 45-55 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and visual highlighting');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Complete step-by-step solution with enhanced explanations');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Slope calculations with rise/run visualization');
        console.log('  • Parallel and perpendicular conditions clearly explained');
        console.log('  • Verification of solutions with detailed checking');
        console.log('  • Key concepts and formulas');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary');
        console.log('\n🔑 KEY CONCEPTS COVERED:');
        console.log('  • Slope as rate of change (rise/run)');
        console.log('  • Parallel lines: equal slopes (m₁ = m₂)');
        console.log('  • Perpendicular lines: negative reciprocal slopes (m₁ · m₂ = -1)');
        console.log('  • Line relationships and comparisons');
        console.log('  • Geometric applications and verifications');
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
