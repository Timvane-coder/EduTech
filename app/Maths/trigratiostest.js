import { EnhancedBasicTrigonometricRatiosWorkbook } from './basic-trig-ratios-workbook.js';
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
                        // Multi-column row (like reference tables)
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




// ============== TRIGONOMETRIC RATIOS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedTrigonometricRatiosProblems() {
    const relatedProblems = [];

    // Problem 1: Find Sine Ratio (Special Angle)
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Calculate Sine of Special Angle',
        problem: 'Find sin(30°)',
        parameters: { 
            angle: 30,
            problemType: 'find_sine'
        },
        problemType: 'special_angle_30',
        context: { 
            difficulty: 'beginner', 
            topic: 'Special Angles - Sine Ratio',
            realWorld: 'Understanding basic trigonometric values'
        },
        subparts: [
            'Given: Find sin(30°)',
            'Recall: 30° is a special angle from 30-60-90 triangle',
            'In 30-60-90 triangle, sides are in ratio 1:√3:2',
            'For 30° angle: opposite = 1, hypotenuse = 2',
            'sin(30°) = opposite/hypotenuse',
            'sin(30°) = 1/2',
            'sin(30°) = 0.5'
        ],
        helper: 'Special angles (30°, 45°, 60°) have exact values you can memorize from special triangles',
        solution: 'sin(30°) = 1/2 = 0.5',
        exactAnswer: '1/2',
        decimalAnswer: 0.5,
        realWorldContext: 'The 30-60-90 triangle appears in architecture, like equilateral triangle supports'
    });

    // Problem 2: Find Side Using Sine
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Find Opposite Side Using Sine',
        problem: 'In a right triangle, the angle is 40° and the hypotenuse is 15 cm. Find the opposite side.',
        parameters: { 
            angle: 40,
            hypotenuse: 15,
            problemType: 'find_side_using_sine'
        },
        problemType: 'find_side_using_sine',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Finding Sides Using Trigonometric Ratios',
            realWorld: 'Calculating heights and vertical distances'
        },
        subparts: [
            'Given: angle = 40°, hypotenuse = 15 cm',
            'Find: opposite side',
            'Step 1: Choose appropriate ratio',
            'We have angle and hypotenuse, need opposite → use SINE',
            'Step 2: Set up equation',
            'sin(40°) = opposite/15',
            'Step 3: Calculate sin(40°)',
            'sin(40°) ≈ 0.6428',
            'Step 4: Solve for opposite',
            'opposite = 15 × sin(40°)',
            'opposite = 15 × 0.6428',
            'opposite ≈ 9.64 cm',
            'Check: Does 9.64/15 ≈ 0.6428? Yes ✓'
        ],
        helper: 'Use SOH-CAH-TOA: Sine uses Opposite and Hypotenuse',
        solution: 'opposite ≈ 9.64 cm',
        exactCalculation: '15 × sin(40°)',
        decimalAnswer: 9.64,
        realWorldContext: 'Like finding how high a ladder reaches when leaning at an angle'
    });

    // Problem 3: Find Angle Using Tangent
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Find Angle Using Inverse Tangent',
        problem: 'In a right triangle, the opposite side is 8 cm and the adjacent side is 6 cm. Find the angle.',
        parameters: { 
            opposite: 8,
            adjacent: 6,
            problemType: 'find_angle_using_tangent'
        },
        problemType: 'find_angle_using_tangent',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Finding Angles Using Inverse Trigonometric Functions',
            realWorld: 'Determining angles from measurements'
        },
        subparts: [
            'Given: opposite = 8 cm, adjacent = 6 cm',
            'Find: angle θ',
            'Step 1: Choose appropriate ratio',
            'We have opposite and adjacent → use TANGENT',
            'Step 2: Calculate the ratio',
            'tan(θ) = opposite/adjacent',
            'tan(θ) = 8/6',
            'tan(θ) = 1.3333',
            'Step 3: Apply inverse tangent',
            'θ = tan⁻¹(1.3333)',
            'θ ≈ 53.13°',
            'Step 4: Verify',
            'Check: tan(53.13°) ≈ 1.3333 ✓',
            'Angle should be between 0° and 90° ✓'
        ],
        helper: 'Use TOA from SOH-CAH-TOA, then apply inverse function (tan⁻¹) to find the angle',
        solution: 'θ ≈ 53.13°',
        exactCalculation: 'tan⁻¹(8/6)',
        decimalAnswer: 53.13,
        realWorldContext: 'Like finding the angle of a ramp when you know the rise and run'
    });

    // Problem 4: Find Cosine and Side (45° Special Angle)
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Find Adjacent Side Using Cosine (Special Angle)',
        problem: 'In a right triangle with a 45° angle and hypotenuse of 10 cm, find the adjacent side.',
        parameters: { 
            angle: 45,
            hypotenuse: 10,
            problemType: 'find_side_using_cosine'
        },
        problemType: 'special_angle_45',
        context: { 
            difficulty: 'beginner', 
            topic: 'Special Angles - Cosine Ratio',
            realWorld: 'Using special triangles for exact calculations'
        },
        subparts: [
            'Given: angle = 45°, hypotenuse = 10 cm',
            'Find: adjacent side',
            'Step 1: Recognize special angle',
            '45° is a special angle from 45-45-90 triangle',
            'Step 2: Recall cos(45°)',
            'cos(45°) = √2/2 ≈ 0.7071',
            'Step 3: Set up equation',
            'cos(45°) = adjacent/hypotenuse',
            '√2/2 = adjacent/10',
            'Step 4: Solve for adjacent',
            'adjacent = 10 × (√2/2)',
            'adjacent = 10 × 0.7071',
            'adjacent ≈ 7.07 cm',
            'Exact answer: adjacent = 5√2 cm'
        ],
        helper: 'For 45° angles, use CAH from SOH-CAH-TOA with the exact value √2/2',
        solution: 'adjacent = 5√2 ≈ 7.07 cm',
        exactAnswer: '5√2',
        decimalAnswer: 7.07,
        realWorldContext: 'The 45-45-90 triangle appears in square corners and diagonal bracing'
    });

    // Problem 5: Real-World Application - Angle of Elevation
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Angle of Elevation Application',
        problem: 'A person standing 50 meters from a building observes the top at an angle of elevation of 65°. How tall is the building?',
        parameters: { 
            angle: 65,
            adjacent: 50,
            problemType: 'angle_elevation'
        },
        problemType: 'angle_elevation',
        context: { 
            difficulty: 'advanced', 
            topic: 'Real-World Applications - Angles of Elevation',
            realWorld: 'Surveying and height measurement'
        },
        subparts: [
            'Given: distance from building = 50 m, angle of elevation = 65°',
            'Find: height of building',
            'Step 1: Draw diagram',
            'Draw right triangle: horizontal distance is adjacent, height is opposite',
            'Step 2: Identify triangle parts',
            'Adjacent = 50 m (horizontal distance)',
            'Opposite = height (what we\'re finding)',
            'Angle = 65°',
            'Step 3: Choose ratio',
            'We have adjacent, need opposite → use TANGENT',
            'Step 4: Set up equation',
            'tan(65°) = height/50',
            'Step 5: Calculate tan(65°)',
            'tan(65°) ≈ 2.1445',
            'Step 6: Solve for height',
            'height = 50 × tan(65°)',
            'height = 50 × 2.1445',
            'height ≈ 107.23 meters',
            'Step 7: Answer in context',
            'The building is approximately 107.23 meters tall'
        ],
        helper: 'Angle of elevation problems create right triangles where the horizontal is adjacent and the vertical is opposite',
        solution: 'height ≈ 107.23 meters',
        exactCalculation: '50 × tan(65°)',
        decimalAnswer: 107.23,
        realWorldContext: 'Surveyors, architects, and engineers use angles of elevation to measure building heights without climbing'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveTrigonometricRatiosRelatedProblems() {
    const problems = generateRelatedTrigonometricRatiosProblems();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Trigonometric Ratios Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedBasicTrigonometricRatiosWorkbook({
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
            angleMode: 'degrees'
        });

        try {
            // Solve the problem
            const result = workbook.solveTrigProblem({
                problemType: problem.problemType,
                angle: problem.parameters.angle,
                opposite: problem.parameters.opposite,
                adjacent: problem.parameters.adjacent,
                hypotenuse: problem.parameters.hypotenuse,
                scenario: problem.scenario,
                context: problem.context
            });

            solvedProblems.push({
                problem: problem,
                workbook: workbook,
                result: result
            });

            console.log(`    ✓ Solution: ${result.solutionValue || 'See detailed solution'}`);
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
    console.log('Generating Basic Trigonometric Ratios Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Basic Trigonometric Ratios Workbook',
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
            text: 'SOH-CAH-TOA: Sine, Cosine, and Tangent Ratios',
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
            text: 'Basic Trigonometric Ratios (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const trigProblems = generateRelatedTrigonometricRatiosProblems();
    trigProblems.forEach((problem, index) => {
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
            text: 'Introduction to Trigonometric Ratios',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Welcome to the world of trigonometry! This workbook contains 5 carefully selected problems that will help you master basic trigonometric ratios. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed explanations',
        '• SOH-CAH-TOA memory aids and visual triangle diagrams',
        '• Multiple explanation styles (conceptual, procedural, visual, computational)',
        '• Special angle exact values (30°, 45°, 60°)',
        '• Calculator usage tips and mode verification',
        '• Common mistakes and error prevention strategies',
        '• Self-check questions and thinking prompts',
        '• Real-world applications (ladders, buildings, angles of elevation)',
        '• Alternative solution methods',
        '• Verification techniques using Pythagorean theorem',
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

    // ============== SOH-CAH-TOA REFERENCE ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'SOH-CAH-TOA Quick Reference',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    const sohcahtoa = [
        'SOH: Sine = Opposite / Hypotenuse',
        'CAH: Cosine = Adjacent / Hypotenuse',
        'TOA: Tangent = Opposite / Adjacent'
    ];

    sohcahtoa.forEach(item => {
        documentChildren.push(
            new docx.Paragraph({
                text: `• ${item}`,
                spacing: { after: 100 },
                bold: true
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
            text: 'Remember: Always identify sides relative to the angle you\'re working with!',
            spacing: { after: 300 },
            italics: true,
            shading: {
                fill: "FFF9C4",
                type: docx.ShadingType.CLEAR
            }
        })
    );

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Trigonometric Ratios Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Trigonometric Ratios Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const trigSolved = solveTrigonometricRatiosRelatedProblems();
    
    trigSolved.forEach((solved, index) => {
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
                        color: '1565C0'
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

    // ============== SPECIAL ANGLES REFERENCE ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Special Angles Reference Table',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Memorize these exact values for common angles:',
            spacing: { after: 200 }
        })
    );

    const specialAngles = [
        'Angle | sin | cos | tan',
        '30° | 1/2 = 0.5 | √3/2 ≈ 0.866 | √3/3 ≈ 0.577',
        '45° | √2/2 ≈ 0.707 | √2/2 ≈ 0.707 | 1',
        '60° | √3/2 ≈ 0.866 | 1/2 = 0.5 | √3 ≈ 1.732',
        '',
        'Special Triangles:',
        '• 30-60-90 triangle: sides in ratio 1 : √3 : 2',
        '• 45-45-90 triangle: sides in ratio 1 : 1 : √2'
    ];

    specialAngles.forEach(line => {
        documentChildren.push(
            new docx.Paragraph({
                text: line,
                spacing: { after: 100 }
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
            text: 'Congratulations on completing these 5 trigonometric ratios problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered SOH-CAH-TOA and can identify which ratio to use',
        'You\'ve calculated exact values for special angles (30°, 45°, 60°)',
        'You\'ve learned to find unknown sides using trig ratios',
        'You\'ve practiced finding angles using inverse trig functions',
        'You\'ve applied trigonometry to real-world problems like angles of elevation',
        'You\'ve learned proper calculator usage and mode verification',
        'You\'ve seen common mistakes and how to avoid them'
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
        'Practice more angles of elevation and depression problems',
        'Learn about reciprocal ratios (cosecant, secant, cotangent)',
        'Explore the unit circle for all angle values',
        'Study trigonometric identities and equations',
        'Apply trig to real-world projects in surveying or navigation',
        'Move on to the Law of Sines and Law of Cosines for non-right triangles'
    ];

    nextSteps.forEach((step, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${step}`,
                spacing: { after: 100 }
            })
        );
    });

    // ============== CALCULATOR TIPS ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Important Calculator Tips',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    const calculatorTips = [
        '✓ Always check your calculator is in DEGREE mode (not radians) for degree problems',
        '✓ Test with sin(30°) = 0.5 to verify mode is correct',
        '✓ For inverse functions, use 2nd or SHIFT button then the trig button',
        '✓ sin⁻¹, cos⁻¹, tan⁻¹ are also written as arcsin, arccos, arctan',
        '✓ Round final answers to 2 decimal places unless specified otherwise',
        '✓ Keep intermediate calculations unrounded for accuracy'
    ];

    calculatorTips.forEach(tip => {
        documentChildren.push(
            new docx.Paragraph({
                text: tip,
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
        const filename = 'basic_trigonometric_ratios_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Special Angle Calculations: 2 problems');
        console.log('    - Finding Sides Using Trig: 2 problems');
        console.log('    - Finding Angles Using Inverse Trig: 1 problem');
        console.log('    - Real-World Applications: 1 problem (angle of elevation)');
        console.log('\n📄 ESTIMATED PAGES: 50-60 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and visual highlighting');
        console.log('  • SOH-CAH-TOA helper tips for immediate guidance');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Complete step-by-step solution with triangle diagrams');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, computational)');
        console.log('  • Special angle exact values and decimal approximations');
        console.log('  • Calculator usage tips and mode verification');
        console.log('  • Verification using alternative methods');
        console.log('  • Key trigonometric concepts and relationships');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods (unit circle, special triangles)');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary');
        console.log('  • Special angles reference table');
        console.log('  • Important calculator tips');
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
