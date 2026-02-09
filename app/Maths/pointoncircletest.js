import { EnhancedPointOnCircleMathematicalWorkbook } from './point-on-circle-workbook.js';
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




// ============== POINT ON CIRCLE - RELATED PROBLEMS GENERATOR ==============

function generateRelatedPointOnCircleProblems() {
    const relatedProblems = [];

    // Problem 1: Find Point from Angle (Easy - Unit Circle)
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Find Point on Unit Circle at 90°',
        problem: 'Find the coordinates of the point on the circle x² + y² = 1 at an angle of 90°',
        parameters: { 
            h: 0, 
            k: 0, 
            r: 1, 
            theta: 90, 
            angleUnit: 'degrees' 
        },
        problemType: 'point_from_angle',
        context: { 
            difficulty: 'beginner', 
            topic: 'Unit Circle and Angles',
            realWorld: 'Understanding positions on a circular path'
        },
        subparts: [
            'Given: Circle x² + y² = 1 (unit circle centered at origin)',
            'Angle: θ = 90° (pointing straight up)',
            'Step 1: Convert 90° to radians: 90° × π/180 = π/2 radians',
            'Step 2: Apply x = h + r·cos(θ) = 0 + 1·cos(π/2) = 0',
            'Step 3: Apply y = k + r·sin(θ) = 0 + 1·sin(π/2) = 1',
            'Point: (0, 1)',
            'Verification: 0² + 1² = 1 ✓'
        ],
        helper: 'On the unit circle, cos(90°) = 0 and sin(90°) = 1, giving the point at the top',
        solution: 'Point: (0, 1)',
        realWorldContext: 'Like finding where 12 o\'clock points on a clock face centered at origin'
    });

    // Problem 2: Find Point from Angle (Medium - Non-origin center)
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Find Point on Shifted Circle at 45°',
        problem: 'Find the coordinates of the point on the circle (x-2)² + (y-3)² = 16 at an angle of 45°',
        parameters: { 
            h: 2, 
            k: 3, 
            r: 4, 
            theta: 45, 
            angleUnit: 'degrees' 
        },
        problemType: 'point_from_angle',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Points on Circles with Translation',
            realWorld: 'Finding positions on circular paths not centered at origin'
        },
        subparts: [
            'Given: Circle (x-2)² + (y-3)² = 16',
            'Center: (2, 3), Radius: 4',
            'Angle: θ = 45°',
            'Step 1: Convert to radians: 45° × π/180 = π/4 radians',
            'Step 2: Calculate x = 2 + 4·cos(π/4) = 2 + 4·(√2/2) = 2 + 2√2 ≈ 4.828',
            'Step 3: Calculate y = 3 + 4·sin(π/4) = 3 + 4·(√2/2) = 3 + 2√2 ≈ 5.828',
            'Point: (2 + 2√2, 3 + 2√2) ≈ (4.828, 5.828)',
            'Verification: Substitute back into equation'
        ],
        helper: 'Remember to add the center coordinates (h, k) after calculating the displacement',
        solution: 'Point: (2 + 2√2, 3 + 2√2) ≈ (4.828, 5.828)',
        realWorldContext: 'Like finding a passenger position on a Ferris wheel that\'s not centered at ground level'
    });

    // Problem 3: Verify Point on Circle
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Verify if Point Lies on Circle',
        problem: 'Verify if the point (3, 4) lies on the circle x² + y² = 25',
        parameters: { 
            h: 0, 
            k: 0, 
            r: 5, 
            x: 3, 
            y: 4 
        },
        problemType: 'verify_point',
        context: { 
            difficulty: 'beginner', 
            topic: 'Circle Equation Verification',
            realWorld: 'Checking if a location is within a circular boundary'
        },
        subparts: [
            'Given: Circle x² + y² = 25 (center at origin, radius 5)',
            'Point to check: (3, 4)',
            'Step 1: Substitute into equation: 3² + 4² = r²',
            'Step 2: Calculate left side: 9 + 16 = 25',
            'Step 3: Compare to r²: 25 = 25 ✓',
            'Conclusion: Point (3, 4) IS on the circle',
            'Alternative: Distance = √(3² + 4²) = √25 = 5 = radius ✓'
        ],
        helper: 'A point is on the circle if substituting its coordinates makes the equation true',
        solution: 'Yes, point (3, 4) lies on the circle',
        realWorldContext: 'Like checking if a location is exactly on a circular fence boundary, not inside or outside'
    });

    // Problem 4: Calculate Arc Length
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Calculate Arc Length',
        problem: 'Find the arc length on a circle of radius 10 for a central angle of 60°',
        parameters: { 
            h: 0, 
            k: 0, 
            r: 10, 
            theta: 60, 
            angleUnit: 'degrees' 
        },
        problemType: 'arc_length',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Arc Length Formula',
            realWorld: 'Calculating distance traveled along a circular path'
        },
        subparts: [
            'Given: Radius r = 10, Central angle θ = 60°',
            'Step 1: Convert angle to radians',
            'θ_rad = 60° × π/180 = π/3 radians',
            'Step 2: Apply arc length formula s = rθ (θ must be in radians)',
            's = 10 × π/3',
            's = 10π/3 ≈ 10.472',
            'Step 3: Interpret as fraction of circumference',
            'Full circumference C = 2πr = 20π ≈ 62.832',
            'Arc is 60°/360° = 1/6 of the circle'
        ],
        helper: 'Always convert angle to radians before using s = rθ formula',
        solution: 'Arc length ≈ 10.472 units (or 10π/3 exactly)',
        realWorldContext: 'Like calculating how far a wheel of radius 10 inches travels when it rotates 60°'
    });

    // Problem 5: Find Angle from Point
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Find Angle from Point Coordinates',
        problem: 'Find the angle (in degrees) for the point (1, 1) on the circle x² + y² = 2',
        parameters: { 
            h: 0, 
            k: 0, 
            r: Math.sqrt(2), 
            x: 1, 
            y: 1 
        },
        problemType: 'angle_from_point',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Inverse Trigonometry and Angles',
            realWorld: 'Finding direction or bearing to a location'
        },
        subparts: [
            'Given: Point (1, 1) on circle x² + y² = 2',
            'Center: (0, 0), so we work with point as-is',
            'Step 1: Verify point is on circle: 1² + 1² = 2 ✓',
            'Step 2: Use atan2 to find angle',
            'θ = atan2(y, x) = atan2(1, 1)',
            'Step 3: Calculate: θ = π/4 radians',
            'Step 4: Convert to degrees: θ = π/4 × 180/π = 45°',
            'The point is in Quadrant I (both x and y positive)',
            'Angle: 45° from positive x-axis'
        ],
        helper: 'Use atan2(y, x) instead of atan(y/x) to get the correct quadrant automatically',
        solution: 'Angle: 45° (or π/4 radians)',
        realWorldContext: 'Like finding the compass bearing from center to a location on a circular boundary'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solvePointOnCircleRelatedProblems() {
    const problems = generateRelatedPointOnCircleProblems();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Point on Circle Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedPointOnCircleMathematicalWorkbook({
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
            const result = workbook.solveCircleProblem({
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

            // Log appropriate solution info based on problem type
            if (result.points) {
                console.log(`    ✓ Solution: Point at (${result.points.x?.toFixed(4)}, ${result.points.y?.toFixed(4)})`);
            } else if (result.angle) {
                console.log(`    ✓ Solution: Angle = ${result.angle.degrees?.toFixed(4)}°`);
            } else {
                console.log(`    ✓ Solution computed successfully`);
            }
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
    console.log('Generating Point on Circle Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Point on Circle Workbook',
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
            text: 'Finding Points, Angles, Arc Length, and Verification',
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
            text: 'Point on Circle Problems (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const circleProblems = generateRelatedPointOnCircleProblems();
    circleProblems.forEach((problem, index) => {
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
            text: 'This workbook contains 5 carefully selected point on circle problems covering fundamental circle geometry concepts. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed explanations',
        '• Multiple explanation styles (conceptual, procedural, visual, trigonometric)',
        '• Common mistakes and error prevention tips',
        '• Self-check questions and thinking prompts',
        '• Real-world applications (Ferris wheels, clocks, navigation)',
        '• Alternative solution methods',
        '• Geometric verification of solutions',
        '• Unit circle connections and trigonometry insights',
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
            text: 'Key Concepts You\'ll Master',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    const keyConcepts = [
        '🎯 Finding points on circles using angles (parametric equations)',
        '🎯 Converting between degrees and radians',
        '🎯 Using trigonometric functions (sin, cos) for coordinates',
        '🎯 Finding angles from point coordinates (inverse trig)',
        '🎯 Verifying if points lie on circles',
        '🎯 Calculating arc lengths along circles',
        '🎯 Understanding the relationship between radius, angle, and arc'
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
    console.log('\nProcessing Point on Circle Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Point on Circle Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const circleSolved = solvePointOnCircleRelatedProblems();
    
    circleSolved.forEach((solved, index) => {
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
                        color: solved.problem.difficulty === 'easy' ? '2E7D32' : '1976D2'
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
            text: 'Congratulations on completing these 5 point on circle problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve learned to find points on circles using angles and trigonometry',
        'You\'ve mastered converting between degrees and radians',
        'You\'ve practiced verifying if points lie on circles',
        'You\'ve calculated arc lengths for circular paths',
        'You\'ve found angles from point coordinates using inverse trigonometry',
        'You\'ve seen real-world applications like Ferris wheels and navigation'
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
        'Practice finding multiple equally-spaced points on circles',
        'Explore sector area calculations',
        'Study chord lengths and tangent lines',
        'Work with circles in different coordinate systems',
        'Apply circle concepts to circular motion problems',
        'Explore parametric equations for animation and motion'
    ];

    nextSteps.forEach((step, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${step}`,
                spacing: { after: 100 }
            })
        );
    });

    // ============== QUICK REFERENCE GUIDE ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Quick Reference Guide',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    const formulas = [
        {
            name: 'Point from Angle',
            formula: 'x = h + r·cos(θ), y = k + r·sin(θ)',
            note: 'θ must be in radians'
        },
        {
            name: 'Angle from Point',
            formula: 'θ = atan2(y - k, x - h)',
            note: 'Returns angle in radians, handles all quadrants'
        },
        {
            name: 'Circle Equation',
            formula: '(x - h)² + (y - k)² = r²',
            note: 'Center at (h, k), radius r'
        },
        {
            name: 'Arc Length',
            formula: 's = rθ',
            note: 'θ must be in radians'
        },
        {
            name: 'Angle Conversion',
            formula: 'radians = degrees × π/180',
            note: 'degrees = radians × 180/π'
        }
    ];

    formulas.forEach(item => {
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: `${item.name}: `,
                        bold: true
                    }),
                    new docx.TextRun({
                        text: item.formula,
                        italics: true
                    })
                ],
                spacing: { after: 50 }
            })
        );
        documentChildren.push(
            new docx.Paragraph({
                text: `   Note: ${item.note}`,
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
        const filename = 'point_on_circle_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Find Point from Angle: 2 problems');
        console.log('    - Verify Point on Circle: 1 problem');
        console.log('    - Calculate Arc Length: 1 problem');
        console.log('    - Find Angle from Point: 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 45-55 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and visual highlighting');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context (Ferris wheels, clocks, navigation)');
        console.log('  • Complete step-by-step solution with enhanced explanations');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, trigonometric)');
        console.log('  • Geometric verification and diagram suggestions');
        console.log('  • Key concepts and circle geometry principles');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary');
        console.log('  • Unit circle connections and trigonometry insights');
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
