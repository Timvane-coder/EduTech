import { EnhancedCircleIntersectionMathematicalWorkbook } from './circle-intersection-workbook.js';
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


// ============== CIRCLE INTERSECTION - RELATED PROBLEMS GENERATOR ==============

function generateRelatedCircleIntersectionProblems() {
    const relatedProblems = [];

    // Problem 1: Basic Intersection Check - Two Circles Too Far Apart
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Intersection Check: Circles Too Far Apart',
        problem: 'Do two circles intersect? Circle 1: center (0, 0), radius 5. Circle 2: center (15, 0), radius 4.',
        circles: [
            { center: { x: 0, y: 0 }, radius: 5 },
            { center: { x: 15, y: 0 }, radius: 4 }
        ],
        parameters: {
            x1: 0, y1: 0, r1: 5,
            x2: 15, y2: 0, r2: 4
        },
        problemType: 'intersection_check',
        context: {
            difficulty: 'beginner',
            topic: 'Circle Intersection Check',
            realWorld: 'Determining if two WiFi coverage areas overlap'
        },
        subparts: [
            'Given: Circle 1 at (0,0) with r₁ = 5, Circle 2 at (15,0) with r₂ = 4',
            'Step 1: Calculate distance between centers',
            'd = √[(15-0)² + (0-0)²] = √[225] = 15',
            'Step 2: Calculate r₁ + r₂',
            'r₁ + r₂ = 5 + 4 = 9',
            'Step 3: Compare d with r₁ + r₂',
            'd = 15 > 9 = r₁ + r₂',
            'Conclusion: Circles do NOT intersect (too far apart)',
            'Gap between circles: 15 - 9 = 6 units'
        ],
        helper: 'If the distance between centers is greater than the sum of radii, circles don\'t touch',
        solution: 'No intersection - circles are too far apart (gap of 6 units)',
        realWorldContext: 'Like two WiFi routers that are too far apart - their coverage areas don\'t overlap',
        expectedAnswer: {
            intersects: false,
            type: 'No intersection (too far apart)',
            distance: 15,
            radiusSum: 9,
            gap: 6
        }
    });

    // Problem 2: External Tangent - Circles Touch at One Point
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'External Tangent: Circles Touching at One Point',
        problem: 'Find the intersection of two circles: Circle 1: center (0, 0), radius 5. Circle 2: center (8, 0), radius 3.',
        circles: [
            { center: { x: 0, y: 0 }, radius: 5 },
            { center: { x: 8, y: 0 }, radius: 3 }
        ],
        parameters: {
            x1: 0, y1: 0, r1: 5,
            x2: 8, y2: 0, r2: 3
        },
        problemType: 'two_circle_intersection',
        context: {
            difficulty: 'beginner',
            topic: 'Tangent Circles',
            realWorld: 'Finding the exact point where two coverage areas just touch'
        },
        subparts: [
            'Given: Circle 1 at (0,0) with r₁ = 5, Circle 2 at (8,0) with r₂ = 3',
            'Step 1: Calculate distance between centers',
            'd = √[(8-0)² + (0-0)²] = 8',
            'Step 2: Check intersection condition',
            'r₁ + r₂ = 5 + 3 = 8',
            'd = 8 = r₁ + r₂',
            'This means external tangent (one point of contact)',
            'Step 3: Find the tangent point',
            'Ratio: r₁/(r₁+r₂) = 5/8 = 0.625',
            'Point: (0 + 0.625×8, 0 + 0.625×0) = (5, 0)',
            'Verification: Distance from (5,0) to (0,0) = 5 ✓',
            'Distance from (5,0) to (8,0) = 3 ✓'
        ],
        helper: 'When d = r₁ + r₂, circles touch at exactly one point (external tangent)',
        solution: 'One intersection point at (5, 0)',
        realWorldContext: 'Like two circular spotlights whose edges just touch - they meet at one point',
        expectedAnswer: {
            intersects: true,
            type: 'External tangent',
            points: [{ x: 5, y: 0 }],
            distance: 8,
            radiusSum: 8
        }
    });

    // Problem 3: Two Intersection Points - Standard Case
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Two Intersection Points: Standard Overlapping Circles',
        problem: 'Find the intersection points of two circles: Circle 1: x² + y² = 25, Circle 2: (x-6)² + y² = 25',
        circles: [
            { center: { x: 0, y: 0 }, radius: 5 },
            { center: { x: 6, y: 0 }, radius: 5 }
        ],
        parameters: {
            x1: 0, y1: 0, r1: 5,
            x2: 6, y2: 0, r2: 5
        },
        problemType: 'two_circle_intersection',
        context: {
            difficulty: 'intermediate',
            topic: 'Finding Exact Intersection Points',
            realWorld: 'Finding where two overlapping coverage areas meet'
        },
        subparts: [
            'Given: x² + y² = 25 and (x-6)² + y² = 25',
            'Both circles have radius 5, centers at (0,0) and (6,0)',
            'Step 1: Check intersection condition',
            'd = 6, r₁ + r₂ = 10, |r₁ - r₂| = 0',
            '0 < 6 < 10, so two intersection points exist',
            'Step 2: Subtract equations to find radical axis',
            'x² + y² = 25',
            '-(x² - 12x + 36 + y² = 25)',
            'Result: 12x - 36 = 0, so x = 3',
            'Step 3: Substitute x = 3 into first circle',
            '9 + y² = 25',
            'y² = 16',
            'y = ±4',
            'Intersection points: (3, 4) and (3, -4)',
            'Verification: Both points are distance 5 from both centers ✓'
        ],
        helper: 'Subtract circle equations to eliminate y² and get a linear equation for x',
        solution: 'Two intersection points: (3, 4) and (3, -4)',
        realWorldContext: 'Like finding the exact boundary between two overlapping WiFi networks',
        expectedAnswer: {
            intersects: true,
            type: 'Two intersection points',
            points: [{ x: 3, y: 4 }, { x: 3, y: -4 }],
            distance: 6,
            radiusSum: 10
        }
    });

    // Problem 4: Different Radii with Two Intersection Points
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Two Circles with Different Radii Intersecting',
        problem: 'Find the intersection points: Circle 1: center (0, 0), radius 5. Circle 2: center (5, 0), radius 3.',
        circles: [
            { center: { x: 0, y: 0 }, radius: 5 },
            { center: { x: 5, y: 0 }, radius: 3 }
        ],
        parameters: {
            x1: 0, y1: 0, r1: 5,
            x2: 5, y2: 0, r2: 3
        },
        problemType: 'two_circle_intersection',
        context: {
            difficulty: 'intermediate',
            topic: 'Circles with Different Radii',
            realWorld: 'Finding overlap between coverage areas of different sizes'
        },
        subparts: [
            'Given: Circle 1 at (0,0) with r₁ = 5, Circle 2 at (5,0) with r₂ = 3',
            'Step 1: Check intersection condition',
            'd = 5, r₁ + r₂ = 8, |r₁ - r₂| = 2',
            '2 < 5 < 8, so two intersection points exist',
            'Step 2: Set up circle equations',
            'x² + y² = 25',
            '(x-5)² + y² = 9',
            'Step 3: Expand second equation',
            'x² - 10x + 25 + y² = 9',
            'Step 4: Subtract first from second',
            '-10x + 25 = 9 - 25',
            '-10x = -41',
            'x = 4.1',
            'Step 5: Substitute into first circle',
            '(4.1)² + y² = 25',
            '16.81 + y² = 25',
            'y² = 8.19',
            'y ≈ ±2.86',
            'Intersection points: (4.1, 2.86) and (4.1, -2.86)'
        ],
        helper: 'Even with different radii, the method is the same: subtract equations to find x, then substitute',
        solution: 'Two intersection points: (4.1, 2.86) and (4.1, -2.86)',
        realWorldContext: 'Like a large cell tower coverage overlapping with a smaller hotspot area',
        expectedAnswer: {
            intersects: true,
            type: 'Two intersection points',
            points: [{ x: 4.1, y: 2.86 }, { x: 4.1, y: -2.86 }],
            distance: 5,
            radiusSum: 8
        }
    });

    // Problem 5: Word Problem - WiFi Coverage Overlap
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Real-World Application: WiFi Coverage Analysis',
        problem: 'Two WiFi routers are placed 100 meters apart. Router A has a range of 60 meters, Router B has a range of 50 meters. Do their coverage areas overlap? If so, where do they intersect?',
        circles: [
            { center: { x: 0, y: 0 }, radius: 60 },
            { center: { x: 100, y: 0 }, radius: 50 }
        ],
        parameters: {
            x1: 0, y1: 0, r1: 60,
            x2: 100, y2: 0, r2: 50
        },
        problemType: 'two_circle_intersection',
        context: {
            difficulty: 'intermediate',
            topic: 'Real-World Coverage Problem',
            realWorld: 'WiFi network planning and coverage optimization'
        },
        subparts: [
            'Given: Router A at (0, 0) with range 60m, Router B at (100, 0) with range 50m',
            'Step 1: Model as circles',
            'Circle A: center (0, 0), radius 60',
            'Circle B: center (100, 0), radius 50',
            'Step 2: Check if coverage overlaps',
            'd = 100 meters (distance between routers)',
            'r₁ + r₂ = 60 + 50 = 110 meters',
            '|r₁ - r₂| = |60 - 50| = 10 meters',
            '10 < 100 < 110 ✓',
            'YES, coverage areas overlap!',
            'Step 3: Find intersection points',
            'Set up equations: x² + y² = 3600 and (x-100)² + y² = 2500',
            'Expand: x² - 200x + 10000 + y² = 2500',
            'Subtract: -200x + 10000 = 2500 - 3600',
            '-200x = -8100',
            'x = 40.5 meters from Router A',
            'Substitute: (40.5)² + y² = 3600',
            'y² = 1959.75',
            'y ≈ ±44.27 meters',
            'Overlap zone boundary points: (40.5, 44.27) and (40.5, -44.27)',
            'Overlap length: 88.54 meters wide at maximum'
        ],
        helper: 'Real-world problems are just circle intersections in disguise - identify centers and radii first',
        solution: 'Yes, coverage overlaps. Intersection boundary at 40.5m from Router A, extending ±44.27m perpendicular',
        realWorldContext: 'This helps network engineers plan router placement for optimal coverage without gaps',
        expectedAnswer: {
            intersects: true,
            type: 'Two intersection points',
            points: [{ x: 40.5, y: 44.27 }, { x: 40.5, y: -44.27 }],
            distance: 100,
            radiusSum: 110,
            overlapWidth: 88.54
        }
    });

    return relatedProblems;
}


// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveCircleIntersectionRelatedProblems() {
    const problems = generateRelatedCircleIntersectionProblems();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Circle Intersection Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedCircleIntersectionMathematicalWorkbook({
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
            const result = workbook.solveCircleIntersectionProblem({
                circles: problem.circles,
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

            console.log(`    ✓ Solution: ${result.solution?.intersectionType || 'Solved'}`);
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


// ============== GENERATE COMPREHENSIVE DOCUMENT ==============

async function generateComprehensiveCircleIntersectionDocument() {
    console.log('Generating Circle Intersection Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Circle Intersection Workbook',
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
            text: 'From Basic Checks to Real-World Applications',
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
            text: 'Circle Intersection Problems (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const circleProblems = generateRelatedCircleIntersectionProblems();
    circleProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario} [${problem.difficulty}]`,
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
            text: 'This workbook contains 5 carefully selected circle intersection problems that progressively build your understanding from basic intersection checks to real-world applications. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with geometric and algebraic approaches',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Distance calculations and intersection type determination',
        '• Exact coordinate calculations for intersection points',
        '• Common mistakes and error prevention strategies',
        '• Self-check questions and geometric thinking prompts',
        '• Real-world applications (WiFi, GPS, radar coverage)',
        '• Alternative solution methods (algebraic, geometric, numerical)',
        '• Comprehensive verification of solutions',
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
            text: '',
            spacing: { after: 300 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Key Concepts Covered:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const concepts = [
        '✓ Distance formula and its geometric meaning',
        '✓ Four intersection types: no intersection (far), external tangent, two points, internal tangent',
        '✓ Comparing d with r₁ + r₂ and |r₁ - r₂|',
        '✓ Algebraic method: subtracting circle equations',
        '✓ Finding exact intersection coordinates',
        '✓ Verification through distance checking',
        '✓ Real-world modeling and interpretation'
    ];

    concepts.forEach(concept => {
        documentChildren.push(
            new docx.Paragraph({
                text: concept,
                spacing: { after: 100 }
            })
        );
    });

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Circle Intersection Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Circle Intersection Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const circleSolved = solveCircleIntersectionRelatedProblems();
    
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
                        color: solved.problem.difficulty === 'easy' ? '2E7D32' : '1976D2'
                    })
                ],
                spacing: { after: 100 }
            })
        );

        // Circle parameters display
        documentChildren.push(
            new docx.Paragraph({
                text: '📊 Circle Parameters:',
                bold: true,
                spacing: { before: 200, after: 100 }
            })
        );

        solved.problem.circles.forEach((circle, idx) => {
            documentChildren.push(
                new docx.Paragraph({
                    text: `   Circle ${idx + 1}: Center (${circle.center.x}, ${circle.center.y}), Radius ${circle.radius}`,
                    spacing: { after: 50 }
                })
            );
        });

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
                spacing: { before: 200, after: 200 },
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

        // Expected answer details
        if (solved.problem.expectedAnswer) {
            documentChildren.push(
                new docx.Paragraph({
                    text: 'Key Results:',
                    bold: true,
                    spacing: { before: 200, after: 100 }
                })
            );

            const expected = solved.problem.expectedAnswer;
            const resultDetails = [
                `• Intersection Type: ${expected.type}`,
                `• Distance Between Centers: ${expected.distance}`,
                `• Radius Sum (r₁ + r₂): ${expected.radiusSum}`
            ];

            if (expected.points) {
                resultDetails.push(`• Intersection Points: ${expected.points.length}`);
                expected.points.forEach((pt, idx) => {
                    resultDetails.push(`  - Point ${idx + 1}: (${pt.x}, ${pt.y})`);
                });
            }

            if (expected.gap !== undefined) {
                resultDetails.push(`• Gap Between Circles: ${expected.gap} units`);
            }

            if (expected.overlapWidth !== undefined) {
                resultDetails.push(`• Overlap Width: ${expected.overlapWidth.toFixed(2)} units`);
            }

            resultDetails.forEach(detail => {
                documentChildren.push(
                    new docx.Paragraph({
                        text: detail,
                        spacing: { after: 80 }
                    })
                );
            });

            documentChildren.push(
                new docx.Paragraph({
                    text: '',
                    spacing: { after: 300 }
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
            text: 'Congratulations on completing these 5 circle intersection problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered checking if circles intersect using distance comparisons',
        'You\'ve learned to identify all four intersection types',
        'You\'ve calculated exact intersection coordinates using algebraic methods',
        'You\'ve understood the geometric meaning of circle intersections',
        'You\'ve applied circle intersection to real-world coverage problems',
        'You\'ve practiced verification techniques for ensuring accuracy'
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
        'Practice with circles at non-axis-aligned positions',
        'Explore three-circle intersection (trilateration for GPS)',
        'Calculate areas of intersection regions',
        'Study circle-line intersection problems',
        'Apply to optimization problems (minimize coverage gaps)',
        'Extend to 3D sphere intersections',
        'Implement numerical algorithms for complex cases'
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

    documentChildren.push(
        new docx.Paragraph({
            text: 'Applications You Can Tackle Now:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const applications = [
        '📡 WiFi and cellular network coverage planning',
        '🛰️ GPS positioning and trilateration',
        '📊 Radar and sonar overlap analysis',
        '🏗️ Construction zone planning and clearance checking',
        '🌐 Broadcast range calculations',
        '🎯 Target detection in overlapping sensor ranges',
        '💧 Irrigation coverage optimization',
        '🔦 Lighting design and coverage analysis'
    ];

    applications.forEach(app => {
        documentChildren.push(
            new docx.Paragraph({
                text: app,
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
        const filename = 'circle_intersection_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Intersection Check (No Overlap): 1 problem');
        console.log('    - External Tangent: 1 problem');
        console.log('    - Two Intersection Points (Equal Radii): 1 problem');
        console.log('    - Two Intersection Points (Different Radii): 1 problem');
        console.log('    - Real-World Application (WiFi Coverage): 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 45-55 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with circle parameters clearly displayed');
        console.log('  • Difficulty level with color-coded indicators');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Complete step-by-step solution with geometric reasoning');
        console.log('  • Multiple explanation approaches (algebraic and geometric)');
        console.log('  • Distance calculations and intersection type determination');
        console.log('  • Exact coordinate calculations for intersection points');
        console.log('  • Comprehensive verification with distance checking');
        console.log('  • Key concepts about circle geometry');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Visual thinking prompts and self-check questions');
        console.log('  • Alternative solution methods (algebraic, geometric, numerical)');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary');
        console.log('  • Expected answer breakdown with all key measurements');
        console.log('='.repeat(80) + '\n');
    } catch (error) {
        console.error(`\n❌ Error saving document: ${error.message}`);
        console.error(error.stack);
    }
}


// ============== RUN THE DOCUMENT GENERATION ==============

generateComprehensiveCircleIntersectionDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});
