import { EnhancedLinearGeometryMathematicalWorkbook } from './linear-geometry-workbook.js';
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




// ============== LINEAR GEOMETRY - RELATED PROBLEMS GENERATOR ==============

function generateRelatedLinearGeometryProblems() {
    const relatedProblems = [];

    // Problem 1: Distance Between Two Points
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Distance Between Two Points',
        problem: 'Find the distance between points A(1, 2) and B(4, 6)',
        parameters: { x1: 1, y1: 2, x2: 4, y2: 6 },
        problemType: 'distance_2d',
        context: { 
            difficulty: 'beginner', 
            topic: 'Distance Formula',
            realWorld: 'Navigation and mapping applications'
        },
        subparts: [
            'Given: Point A(1, 2) and Point B(4, 6)',
            'Use distance formula: d = √[(x₂-x₁)² + (y₂-y₁)²]',
            'Step 1: Find the differences',
            '  x₂ - x₁ = 4 - 1 = 3',
            '  y₂ - y₁ = 6 - 2 = 4',
            'Step 2: Square the differences',
            '  (3)² = 9',
            '  (4)² = 16',
            'Step 3: Add the squares',
            '  9 + 16 = 25',
            'Step 4: Take the square root',
            '  d = √25 = 5',
            'Check: This is a 3-4-5 Pythagorean triple ✓'
        ],
        helper: 'The distance formula comes from the Pythagorean theorem - the differences form a right triangle',
        solution: '5 units',
        realWorldContext: 'Like finding the straight-line distance between two cities on a map (as the crow flies)'
    });

    // Problem 2: Pythagorean Theorem
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Pythagorean Theorem',
        problem: 'A right triangle has legs of length 5 and 12. Find the hypotenuse.',
        parameters: { a: 5, b: 12, findSide: 'c' },
        problemType: 'pythagorean',
        context: { 
            difficulty: 'beginner', 
            topic: 'Pythagorean Theorem',
            realWorld: 'Construction and carpentry'
        },
        subparts: [
            'Given: Right triangle with legs a = 5 and b = 12',
            'Find: Hypotenuse c',
            'Use Pythagorean theorem: a² + b² = c²',
            'Step 1: Square the legs',
            '  5² = 25',
            '  12² = 144',
            'Step 2: Add the squares',
            '  25 + 144 = 169',
            'Step 3: Take the square root',
            '  c = √169 = 13',
            'Check: This is the famous 5-12-13 Pythagorean triple ✓'
        ],
        helper: 'The hypotenuse is always the longest side, opposite the right angle',
        solution: 'c = 13 units',
        realWorldContext: 'Builders use the 5-12-13 triangle to ensure corners are perfectly square'
    });

    // Problem 3: Slope of a Line
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Slope of a Line',
        problem: 'Find the slope of the line passing through points P(2, 3) and Q(6, 11)',
        parameters: { x1: 2, y1: 3, x2: 6, y2: 11 },
        problemType: 'slope',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Slope and Linear Equations',
            realWorld: 'Road grade and steepness calculations'
        },
        subparts: [
            'Given: Point P(2, 3) and Point Q(6, 11)',
            'Use slope formula: m = (y₂-y₁)/(x₂-x₁)',
            'Step 1: Calculate rise (vertical change)',
            '  y₂ - y₁ = 11 - 3 = 8',
            'Step 2: Calculate run (horizontal change)',
            '  x₂ - x₁ = 6 - 2 = 4',
            'Step 3: Divide rise by run',
            '  m = 8/4 = 2',
            'Interpretation: For every 1 unit right, the line goes up 2 units',
            'Check: Positive slope means the line rises from left to right ✓'
        ],
        helper: 'Slope = rise/run. Remember to subtract y-coordinates first (numerator), then x-coordinates (denominator)',
        solution: 'm = 2',
        realWorldContext: 'A road with slope 2 rises 2 feet for every 1 foot of horizontal distance - that\'s quite steep!'
    });

    // Problem 4: Triangle Angle Sum
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Triangle Angle Sum',
        problem: 'In triangle ABC, angle A = 45° and angle B = 70°. Find angle C.',
        parameters: { angle1: 45, angle2: 70, angle3: null },
        problemType: 'triangle_angle_sum',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Triangle Properties',
            realWorld: 'Architecture and structural design'
        },
        subparts: [
            'Given: Triangle ABC with ∠A = 45° and ∠B = 70°',
            'Find: ∠C',
            'Use angle sum theorem: Sum of angles in a triangle = 180°',
            'Step 1: Write the equation',
            '  ∠A + ∠B + ∠C = 180°',
            'Step 2: Substitute known values',
            '  45° + 70° + ∠C = 180°',
            'Step 3: Add the known angles',
            '  115° + ∠C = 180°',
            'Step 4: Solve for ∠C',
            '  ∠C = 180° - 115° = 65°',
            'Check: 45° + 70° + 65° = 180° ✓'
        ],
        helper: 'The angles in any triangle always sum to exactly 180° - this is one of the most important facts in geometry',
        solution: '∠C = 65°',
        realWorldContext: 'Architects use this principle to design triangular roof trusses and ensure structural stability'
    });

    // Problem 5: Rectangle Area and Perimeter
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Rectangle Area and Perimeter',
        problem: 'A rectangle has length 8 cm and width 5 cm. Find both the area and perimeter.',
        parameters: { length: 8, width: 5 },
        problemType: 'rectangle_area',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Area and Perimeter',
            realWorld: 'Flooring, carpeting, and fencing'
        },
        subparts: [
            'Given: Rectangle with length = 8 cm and width = 5 cm',
            'Find: Area and Perimeter',
            '',
            'PART A: Area',
            'Use formula: A = length × width',
            'A = 8 × 5 = 40 cm²',
            '',
            'PART B: Perimeter',
            'Use formula: P = 2(length + width)',
            'P = 2(8 + 5)',
            'P = 2(13)',
            'P = 26 cm',
            '',
            'Check: Area uses square units (cm²), perimeter uses linear units (cm) ✓'
        ],
        helper: 'Area measures the space inside (square units), perimeter measures the distance around (linear units)',
        solution: 'Area = 40 cm², Perimeter = 26 cm',
        realWorldContext: 'When buying carpet, you need area (40 cm² of carpet). When buying trim for the edges, you need perimeter (26 cm of trim).'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveLinearGeometryRelatedProblems() {
    const problems = generateRelatedLinearGeometryProblems();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Linear Geometry Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedLinearGeometryMathematicalWorkbook({
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
            includeDiagrams: true,
            includeConstructionSteps: true,
            visualizationDetail: 'detailed'
        });

        try {
            // Solve the problem
            const result = workbook.solveGeometryProblem({
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

            console.log(`    ✓ Solution: ${result.solutionValue || problem.solution}`);
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

async function generateComprehensiveGeometryDocument() {
    console.log('Generating Linear Geometry Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Linear Geometry Workbook',
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
            text: 'Distance, Pythagorean Theorem, Slope, Angles, and Area/Perimeter',
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
            text: 'Linear Geometry Problems (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const geometryProblems = generateRelatedLinearGeometryProblems();
    geometryProblems.forEach((problem, index) => {
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
            text: 'This workbook contains 5 carefully selected linear geometry problems covering fundamental concepts. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with geometric visualizations',
        '• Multiple explanation styles (conceptual, procedural, visual, geometric)',
        '• Detailed diagrams and coordinate plane representations',
        '• Common mistakes and error prevention strategies',
        '• Self-check questions and thinking prompts',
        '• Real-world applications and practical contexts',
        '• Alternative solution methods and approaches',
        '• Geometric theorems and principles explained',
        '• Verification of solutions with detailed checking',
        '• Construction notes where applicable',
        '• Pedagogical notes for deeper understanding',
        '• Practice problems for skill reinforcement'
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
            text: 'Key Topics Covered:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const topics = [
        '📐 Distance Formula - Finding distances between points on coordinate plane',
        '📏 Pythagorean Theorem - Calculating sides of right triangles',
        '📈 Slope - Understanding rate of change and line steepness',
        '∠ Angle Relationships - Triangle angle sum theorem',
        '□ Area & Perimeter - Rectangle measurements and applications'
    ];

    topics.forEach(topic => {
        documentChildren.push(
            new docx.Paragraph({
                text: topic,
                spacing: { after: 100 }
            })
        );
    });

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Linear Geometry Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Linear Geometry Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const geometrySolved = solveLinearGeometryRelatedProblems();
    
    geometrySolved.forEach((solved, index) => {
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
                    fill: "E0F2F1",
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
                    fill: "FFF9C4",
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

        // Visual representation note (for geometry problems)
        if (['distance_2d', 'pythagorean', 'slope'].includes(solved.problem.problemType)) {
            documentChildren.push(
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            text: '📊 Visualization: ',
                            bold: true
                        }),
                        new docx.TextRun({
                            text: solved.problem.problemType === 'distance_2d' ? 
                                'Plot both points on a coordinate plane and draw a right triangle to see the distance.' :
                                solved.problem.problemType === 'pythagorean' ?
                                'Draw the right triangle with squares on each side to visualize the theorem.' :
                                'Graph the line and draw a slope triangle showing rise and run.',
                            italics: true
                        })
                    ],
                    spacing: { after: 300 },
                    shading: {
                        fill: "E3F2FD",
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
            const isMainStep = subpart.startsWith('Step') || subpart.startsWith('PART') || subpart.startsWith('Given') || subpart.startsWith('Find') || subpart.startsWith('Use');
            
            documentChildren.push(
                new docx.Paragraph({
                    text: subpart,
                    spacing: { after: 80 },
                    indent: isMainStep ? { left: 0 } : { left: 360 },
                    bold: isMainStep
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
                        color: '1B5E20',
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

        // Key takeaway for each problem
        const keyTakeaways = {
            0: 'The distance formula is just the Pythagorean theorem applied to the coordinate plane. The horizontal and vertical distances form the legs of a right triangle.',
            1: 'The Pythagorean theorem only works for right triangles. Always check for the right angle (90°) before using a² + b² = c².',
            2: 'Slope measures steepness. A larger slope means a steeper line. Positive slopes rise left to right; negative slopes fall left to right.',
            3: 'The angle sum theorem (angles in a triangle sum to 180°) is one of the most fundamental facts in geometry and is used constantly.',
            4: 'Area and perimeter measure different things: area is the space inside (square units), perimeter is the distance around (linear units).'
        };

        if (keyTakeaways[index]) {
            documentChildren.push(
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            text: '🔑 Key Takeaway: ',
                            bold: true
                        }),
                        new docx.TextRun({
                            text: keyTakeaways[index],
                            italics: true
                        })
                    ],
                    spacing: { before: 200, after: 400 },
                    shading: {
                        fill: "FFF3E0",
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
            text: 'Congratulations on completing these 5 linear geometry problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered the distance formula and its connection to the Pythagorean theorem',
        'You\'ve learned to apply the Pythagorean theorem to find missing sides of right triangles',
        'You\'ve calculated slope and understand what it represents geometrically',
        'You\'ve used the triangle angle sum theorem to find missing angles',
        'You\'ve distinguished between area (space inside) and perimeter (distance around)',
        'You\'ve seen how geometry applies to real-world situations like navigation, construction, and design'
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
            text: 'Core Geometric Formulas to Remember:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const formulas = [
        '📐 Distance Formula: d = √[(x₂-x₁)² + (y₂-y₁)²]',
        '📏 Pythagorean Theorem: a² + b² = c²',
        '📈 Slope: m = (y₂-y₁)/(x₂-x₁) = rise/run',
        '∠ Triangle Angle Sum: α + β + γ = 180°',
        '□ Rectangle Area: A = length × width',
        '□ Rectangle Perimeter: P = 2(length + width)'
    ];

    formulas.forEach(formula => {
        documentChildren.push(
            new docx.Paragraph({
                text: formula,
                spacing: { after: 100 },
                shading: {
                    fill: "F5F5F5",
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
        'Practice finding midpoints between two points',
        'Learn about perpendicular and parallel lines',
        'Explore circle geometry (circumference, area, arc length)',
        'Study similar triangles and proportions',
        'Advance to coordinate geometry proofs',
        'Apply these skills to more complex real-world problems'
    ];

    nextSteps.forEach((step, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${step}`,
                spacing: { after: 100 }
            })
        );
    });

    // Common mistakes to avoid
    documentChildren.push(
        new docx.Paragraph({
            text: 'Common Mistakes to Avoid:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const commonMistakes = [
        '❌ Confusing distance with midpoint - distance is a number, midpoint is a point',
        '❌ Using Pythagorean theorem on non-right triangles',
        '❌ Mixing up rise and run in slope formula - it\'s (y₂-y₁)/(x₂-x₁), NOT the other way',
        '❌ Forgetting that triangle angles sum to 180°, not 360°',
        '❌ Confusing area (square units) with perimeter (linear units)',
        '❌ Not labeling diagrams clearly - always mark given information'
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
        const filename = 'linear_geometry_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Distance Formula: 1 problem');
        console.log('    - Pythagorean Theorem: 1 problem');
        console.log('    - Slope: 1 problem');
        console.log('    - Triangle Angles: 1 problem');
        console.log('    - Area & Perimeter: 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 45-55 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and visual highlighting');
        console.log('  • Topic classification and learning objectives');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Visualization notes for geometric understanding');
        console.log('  • Complete step-by-step solution with enhanced explanations');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, geometric)');
        console.log('  • Geometric diagrams and coordinate representations');
        console.log('  • Verification of solutions with detailed checking');
        console.log('  • Key geometric concepts and theorems');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary');
        console.log('  • Key takeaway highlighting the main concept');
        console.log('\n📐 BONUS FEATURES:');
        console.log('  • Summary of all core geometric formulas');
        console.log('  • Common mistakes to avoid with explanations');
        console.log('  • Next steps for continued learning');
        console.log('  • Comprehensive coverage of fundamental linear geometry');
        console.log('='.repeat(80) + '\n');
    } catch (error) {
        console.error(`\n❌ Error saving document: ${error.message}`);
        console.error(error.stack);
    }
}

// ============== RUN THE DOCUMENT GENERATION ==============

generateComprehensiveGeometryDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});
