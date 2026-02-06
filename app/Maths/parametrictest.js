import { EnhancedParametricLinearMathematicalWorkbook } from './parametric-linear-workbook.js';
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




// ============== PARAMETRIC LINEAR EQUATIONS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedParametricLinearEquations() {
    const relatedProblems = [];

    // Problem 1: Basic Parametric Evaluation
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Basic Parametric Evaluation',
        problem: 'Find the position at t = 3 for the parametric equations: x = 2 + 4t, y = 1 + 3t',
        parameters: { x0: 2, y0: 1, a: 4, b: 3, t_value: 3 },
        problemType: 'parametric_point',
        context: { 
            difficulty: 'beginner', 
            topic: 'Evaluating Parametric Equations',
            realWorld: 'Finding location of a moving object at a specific time'
        },
        subparts: [
            'Given: x = 2 + 4t, y = 1 + 3t',
            'Find position at t = 3',
            'Step 1: Substitute t = 3 into x equation',
            'x = 2 + 4(3) = 2 + 12 = 14',
            'Step 2: Substitute t = 3 into y equation',
            'y = 1 + 3(3) = 1 + 9 = 10',
            'Position at t = 3 is (14, 10)',
            'Interpretation: After 3 time units, the object is at point (14, 10)'
        ],
        helper: 'Substitute the parameter value into both equations to find the coordinates',
        solution: '(14, 10)',
        realWorldContext: 'Like tracking a robot\'s position: starting at (2, 1), moving 4 units/sec east and 3 units/sec north, where is it after 3 seconds?',
        vectorInterpretation: 'Initial position: ⟨2, 1⟩, Direction vector: ⟨4, 3⟩, Speed: 5 units/time'
    });

    // Problem 2: Parametric to Cartesian Conversion
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Converting Parametric to Cartesian Form',
        problem: 'Convert to Cartesian form: x = 3 + 2t, y = 5 + 4t',
        parameters: { x0: 3, y0: 5, a: 2, b: 4 },
        problemType: 'parametric_to_cartesian',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Parameter Elimination',
            realWorld: 'Finding the path equation from motion equations'
        },
        subparts: [
            'Given: x = 3 + 2t, y = 5 + 4t',
            'Step 1: Solve x equation for t',
            'x = 3 + 2t',
            '2t = x - 3',
            't = (x - 3)/2',
            'Step 2: Substitute into y equation',
            'y = 5 + 4t',
            'y = 5 + 4[(x - 3)/2]',
            'y = 5 + 2(x - 3)',
            'y = 5 + 2x - 6',
            'y = 2x - 1',
            'Cartesian form: y = 2x - 1',
            'Slope: m = 2 (same as b/a = 4/2)'
        ],
        helper: 'Solve one equation for t, then substitute into the other equation',
        solution: 'y = 2x - 1',
        realWorldContext: 'Like determining the actual path a plane flies along (the line equation) from its motion over time',
        vectorInterpretation: 'The slope 2 comes from the direction vector ⟨2, 4⟩: rise/run = 4/2 = 2'
    });

    // Problem 3: Direction Vector and Speed Calculation
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Direction Vector and Speed Analysis',
        problem: 'For x = 1 + 6t, y = 2 + 8t, find the direction vector and speed',
        parameters: { x0: 1, y0: 2, a: 6, b: 8 },
        problemType: 'parametric_speed',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Vector Analysis in Parametric Form',
            realWorld: 'Determining velocity and speed of a moving object'
        },
        subparts: [
            'Given: x = 1 + 6t, y = 2 + 8t',
            'Step 1: Identify direction vector',
            'Direction vector = ⟨a, b⟩ = ⟨6, 8⟩',
            'This means: 6 units/time in x-direction, 8 units/time in y-direction',
            'Step 2: Calculate speed (magnitude)',
            'Speed = ||⟨6, 8⟩|| = √(6² + 8²)',
            'Speed = √(36 + 64)',
            'Speed = √100',
            'Speed = 10 units per time',
            'Step 3: Find unit direction vector',
            'Unit vector = ⟨6/10, 8/10⟩ = ⟨0.6, 0.8⟩',
            'This shows pure direction without magnitude'
        ],
        helper: 'Direction vector is ⟨a, b⟩; speed is √(a² + b²) using the Pythagorean theorem',
        solution: 'Direction: ⟨6, 8⟩, Speed: 10 units/time',
        realWorldContext: 'Like analyzing a car\'s motion: it travels 6 km east and 8 km north each hour, so its actual speed is 10 km/hr',
        vectorInterpretation: 'This is a 3-4-5 right triangle scaled by 2: (6, 8, 10)'
    });

    // Problem 4: Intersection of Two Parametric Lines
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Finding Intersection of Parametric Lines',
        problem: 'Find where these lines intersect: Line 1: x = 1 + 2t, y = 3 + t; Line 2: x = 4 + s, y = 1 + 2s',
        parameters: { x1_0: 1, y1_0: 3, a1: 2, b1: 1, x2_0: 4, y2_0: 1, a2: 1, b2: 2 },
        problemType: 'parametric_intersection',
        context: { 
            difficulty: 'advanced', 
            topic: 'Intersection of Parametric Lines',
            realWorld: 'Finding where two paths cross'
        },
        subparts: [
            'Given: Line 1: x = 1 + 2t, y = 3 + t',
            '       Line 2: x = 4 + s, y = 1 + 2s',
            'Note: Using different parameters t and s!',
            'Step 1: Set x-coordinates equal',
            '1 + 2t = 4 + s',
            '2t - s = 3  ... (equation 1)',
            'Step 2: Set y-coordinates equal',
            '3 + t = 1 + 2s',
            't - 2s = -2  ... (equation 2)',
            'Step 3: Solve the system',
            'From equation 2: t = 2s - 2',
            'Substitute into equation 1:',
            '2(2s - 2) - s = 3',
            '4s - 4 - s = 3',
            '3s = 7',
            's = 7/3',
            'Then: t = 2(7/3) - 2 = 14/3 - 6/3 = 8/3',
            'Step 4: Find intersection point',
            'Using Line 1 with t = 8/3:',
            'x = 1 + 2(8/3) = 1 + 16/3 = 19/3',
            'y = 3 + 8/3 = 9/3 + 8/3 = 17/3',
            'Intersection: (19/3, 17/3) ≈ (6.33, 5.67)',
            'Verify with Line 2: x = 4 + 7/3 = 19/3 ✓, y = 1 + 2(7/3) = 1 + 14/3 = 17/3 ✓'
        ],
        helper: 'Use different parameters for each line! Set both coordinates equal to get a 2×2 system',
        solution: 'Intersection at (19/3, 17/3) or approximately (6.33, 5.67)',
        realWorldContext: 'Like finding where two drones flying different paths will cross - crucial for collision avoidance',
        vectorInterpretation: 'Line 1 direction: ⟨2, 1⟩, Line 2 direction: ⟨1, 2⟩ - not parallel, so they must intersect'
    });

    // Problem 5: Cartesian to Parametric Conversion
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Converting Cartesian to Parametric Form',
        problem: 'Convert y = 3x + 2 to parametric form',
        parameters: { slope: 3, yIntercept: 2, x0: 0, y0: 2 },
        problemType: 'cartesian_to_parametric',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Parametrization of Lines',
            realWorld: 'Creating motion equations from a path'
        },
        subparts: [
            'Given: y = 3x + 2',
            'Method 1: Simple parametrization',
            'Step 1: Let x = t',
            'Step 2: Substitute into equation',
            'y = 3(t) + 2',
            'y = 3t + 2',
            'Parametric form: x = t, y = 3t + 2',
            'Initial position (t=0): (0, 2)',
            'Direction vector: ⟨1, 3⟩',
            '',
            'Method 2: Point-direction form',
            'Choose starting point: (0, 2) [y-intercept]',
            'Slope = 3 means direction vector ⟨1, 3⟩',
            'x = 0 + 1·t = t',
            'y = 2 + 3·t = 2 + 3t',
            'Same result!',
            '',
            'Note: Many parametric forms represent the same line',
            'Alternative: x = 2t, y = 2 + 6t (same line, twice the speed)'
        ],
        helper: 'Simplest method: let x = t, then y becomes a function of t',
        solution: 'x = t, y = 3t + 2 (or any equivalent form)',
        realWorldContext: 'Like programming a robot to follow the path y = 3x + 2 by giving it motion instructions over time',
        vectorInterpretation: 'Direction vector ⟨1, 3⟩ means: for every 1 unit moved in x, move 3 units in y (slope!)'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveParametricLinearRelatedProblems() {
    const problems = generateRelatedParametricLinearEquations();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Parametric Linear Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedParametricLinearMathematicalWorkbook({
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
            includeParametricGraphs: true,
            includeVectorRepresentation: true,
            includeMotionAnalysis: true
        });

        try {
            // Solve the problem
            const result = workbook.solveParametricProblem({
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

            console.log(`    ✓ Solution: ${JSON.stringify(result.solutionValue)}`);
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

async function generateComprehensiveParametricDocument() {
    console.log('Generating Parametric Linear Equations Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Parametric Linear Equations Workbook',
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
            text: 'Evaluation, Conversion, Direction Vectors, and Intersections',
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
            text: 'Parametric Linear Equations (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const parametricProblems = generateRelatedParametricLinearEquations();
    parametricProblems.forEach((problem, index) => {
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
            text: 'Introduction to Parametric Linear Equations',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'This workbook contains 5 carefully selected parametric linear equation problems that progressively build your understanding of this powerful mathematical tool. Parametric equations are essential in physics, engineering, computer graphics, robotics, and many other fields.',
            spacing: { after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'What are Parametric Equations?',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Parametric equations express coordinates (x, y) as functions of a parameter, usually t (representing time). Instead of writing y = f(x), we write x = f(t) and y = g(t). For linear parametric equations: x = x₀ + at and y = y₀ + bt, where:',
            spacing: { after: 100 }
        })
    );

    const parametricConcepts = [
        '• (x₀, y₀) is the initial position (where we start at t = 0)',
        '• ⟨a, b⟩ is the direction vector (how we move per unit of t)',
        '• t is the parameter (often time, but can be any independent variable)',
        '• The path is a straight line with constant velocity'
    ];

    parametricConcepts.forEach(concept => {
        documentChildren.push(
            new docx.Paragraph({
                text: concept,
                spacing: { after: 100 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: 'Each problem includes:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed explanations',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic, kinematic)',
        '• Vector analysis and interpretation',
        '• Motion analysis (position, velocity, speed)',
        '• Common mistakes and error prevention tips',
        '• Self-check questions and thinking prompts',
        '• Real-world applications and context',
        '• Alternative solution methods',
        '• Verification of solutions',
        '• Pedagogical notes for deeper understanding',
        '• Graph analysis and visualization guidance'
    ];

    features.forEach(feature => {
        documentChildren.push(
            new docx.Paragraph({
                text: feature,
                spacing: { after: 100 }
            })
        );
    });

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Parametric Linear Equations Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Parametric Linear Equations Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const parametricSolved = solveParametricLinearRelatedProblems();
    
    parametricSolved.forEach((solved, index) => {
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
                    fill: "E8F4F8",
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
                               solved.problem.difficulty === 'medium' ? '1976D2' : 'C62828'
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
                spacing: { after: 200 }
            })
        );

        // Vector interpretation
        if (solved.problem.vectorInterpretation) {
            documentChildren.push(
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            text: '📐 Vector Interpretation: ',
                            bold: true
                        }),
                        new docx.TextRun({
                            text: solved.problem.vectorInterpretation
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
                    spacing: { after: 100 }
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
            text: 'Congratulations on completing these 5 parametric linear equation problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve learned to evaluate parametric equations at specific parameter values',
        'You\'ve mastered converting between parametric and Cartesian forms',
        'You\'ve analyzed direction vectors and calculated speeds',
        'You\'ve solved intersection problems with two parametric lines',
        'You\'ve understood the connection between parametric equations and motion'
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
            text: 'Key Concepts Mastered:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const keyConcepts = [
        '📍 Initial Position (x₀, y₀): The starting point at t = 0',
        '➡️ Direction Vector ⟨a, b⟩: Shows how position changes per unit of parameter',
        '⚡ Speed: The magnitude ||⟨a, b⟩|| = √(a² + b²)',
        '🎯 Parameter t: Often represents time, but can be any independent variable',
        '🔄 Conversion: Between parametric form and Cartesian form (y = mx + b)',
        '✖️ Intersection: Requires different parameters for different lines'
    ];

    keyConcepts.forEach(concept => {
        documentChildren.push(
            new docx.Paragraph({
                text: concept,
                spacing: { after: 100 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: 'Real-World Applications:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const applications = [
        '✈️ Navigation: Aircraft and ship position tracking',
        '🤖 Robotics: Path planning and motion control',
        '🎮 Computer Graphics: Object animation and movement',
        '⚛️ Physics: Projectile motion and particle kinematics',
        '🚗 Autonomous Vehicles: Trajectory planning and collision avoidance',
        '📡 Satellite Tracking: Orbital position calculations'
    ];

    applications.forEach(app => {
        documentChildren.push(
            new docx.Paragraph({
                text: app,
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
        'Explore non-linear parametric equations (circles, ellipses, parabolas)',
        'Study parametric equations in 3D space',
        'Learn about parametric calculus (derivatives, arc length)',
        'Apply parametric equations to physics problems (projectile motion)',
        'Practice collision detection and avoidance problems',
        'Investigate parametric surfaces and curves in advanced mathematics'
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
            text: 'Practice Tips:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const practiceTips = [
        '✏️ Always identify the initial position and direction vector first',
        '🎨 Draw diagrams to visualize the motion or path',
        '⏰ Remember: different objects need different parameters (t, s, etc.)',
        '✅ Verify your answers by substituting back into original equations',
        '🧮 Use the Pythagorean theorem to calculate speeds and distances',
        '🔍 Check if lines are parallel before solving intersection problems',
        '📝 Practice converting between forms to strengthen understanding'
    ];

    practiceTips.forEach(tip => {
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
        const filename = 'parametric_linear_equations_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Basic Evaluation: 1 problem');
        console.log('    - Parametric to Cartesian: 1 problem');
        console.log('    - Direction Vector & Speed: 1 problem');
        console.log('    - Intersection Problems: 1 problem');
        console.log('    - Cartesian to Parametric: 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 50-60 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and visual highlighting');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Vector interpretation for deeper understanding');
        console.log('  • Complete step-by-step solution with enhanced explanations');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic, kinematic)');
        console.log('  • Vector analysis (direction vectors, magnitude, unit vectors)');
        console.log('  • Motion analysis (position, velocity, speed)');
        console.log('  • Verification of solutions with detailed checking');
        console.log('  • Key parametric concepts and learning objectives');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods and parametrizations');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Graph analysis and visualization guidance');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary');
        console.log('='.repeat(80) + '\n');
    } catch (error) {
        console.error(`\n❌ Error saving document: ${error.message}`);
        console.error(error.stack);
    }
}

// ============== RUN THE DOCUMENT GENERATION ==============

generateComprehensiveParametricDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});
