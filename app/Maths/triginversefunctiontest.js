import { EnhancedInverseTrigMathematicalWorkbook } from './inverse-trig-workbook.js';
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
                        // Multi-column row (like tables)
                        sections.push(
                            new docx.Paragraph({
                                text: row.join(' | '),
                                spacing: { after: 100 }
                            })
                        );
                    } else if (row[0] && !row[1]) {
                        // Single column (like bullet points or section headers)
                        sections.push(
                            new docx.Paragraph({
                                text: row[0],
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




// ============== INVERSE TRIGONOMETRIC FUNCTIONS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedInverseTrigProblems() {
    const relatedProblems = [];

    // Problem 1: Basic Arcsine with Special Angle
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Basic Arcsine - Special Angle',
        problem: 'Evaluate: arcsin(1/2)',
        parameters: { value: 0.5 },
        problemType: 'arcsin_basic',
        context: { 
            difficulty: 'beginner', 
            topic: 'Inverse Sine Function',
            realWorld: 'Finding angles from sine ratios in right triangles'
        },
        subparts: [
            'Given: arcsin(1/2)',
            'Question: What angle has sine equal to 1/2?',
            'Recall: sin(30°) = 1/2',
            'Since arcsin range is [-90°, 90°], we choose 30°',
            'Answer in degrees: 30°',
            'Answer in radians: π/6',
            'Verification: sin(30°) = 1/2 ✓'
        ],
        helper: 'Remember special angles! sin(30°) = 1/2, sin(45°) = √2/2, sin(60°) = √3/2',
        solution: '30° or π/6 radians',
        realWorldContext: 'Like finding the angle of a ramp where the height is half the length of the ramp'
    });

    // Problem 2: Basic Arctan with Calculation
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Basic Arctangent - Numerical Value',
        problem: 'Evaluate: arctan(1)',
        parameters: { value: 1 },
        problemType: 'arctan_basic',
        context: { 
            difficulty: 'beginner', 
            topic: 'Inverse Tangent Function',
            realWorld: 'Converting slopes to angles'
        },
        subparts: [
            'Given: arctan(1)',
            'Question: What angle has tangent equal to 1?',
            'Recall: tan(45°) = 1',
            'Since arctan range is (-90°, 90°), we have 45°',
            'Answer in degrees: 45°',
            'Answer in radians: π/4',
            'Verification: tan(45°) = 1 ✓',
            'Note: This represents a 45° angle or slope of 1:1'
        ],
        helper: 'Tangent = rise/run (slope). When tan = 1, the angle is 45° (equal rise and run)',
        solution: '45° or π/4 radians',
        realWorldContext: 'Like finding the angle of a hill where you go up 1 meter for every 1 meter forward'
    });

    // Problem 3: Arccos with Negative Value
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Arccosine - Negative Input',
        problem: 'Evaluate: arccos(-1/2)',
        parameters: { value: -0.5 },
        problemType: 'arccos_basic',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Inverse Cosine Function',
            realWorld: 'Finding angles from cosine values, including obtuse angles'
        },
        subparts: [
            'Given: arccos(-1/2)',
            'Question: What angle has cosine equal to -1/2?',
            'Recall: cos(60°) = 1/2, so cos(120°) = -1/2',
            'Since arccos range is [0°, 180°], we can have angles in Quadrant II',
            'The angle in [0°, 180°] with cosine -1/2 is 120°',
            'Answer in degrees: 120°',
            'Answer in radians: 2π/3',
            'Verification: cos(120°) = -1/2 ✓',
            'Note: arccos always returns non-negative angles (0° to 180°)'
        ],
        helper: 'Negative cosine means the angle is in Quadrant II (90° to 180°). arccos(-1/2) = 180° - 60° = 120°',
        solution: '120° or 2π/3 radians',
        realWorldContext: 'Like finding the angle between two vectors when they point in generally opposite directions'
    });

    // Problem 4: Arcsin Equation Solving
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Solving Equation with Arcsin',
        problem: 'Solve for x: sin(x) = √3/2, where x ∈ [-90°, 90°]',
        parameters: { value: Math.sqrt(3)/2 },
        problemType: 'arcsin_equation',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Solving Trigonometric Equations',
            realWorld: 'Finding specific angles that satisfy trigonometric conditions'
        },
        subparts: [
            'Given: sin(x) = √3/2, where x ∈ [-90°, 90°]',
            'To solve, apply arcsin to both sides:',
            'arcsin(sin(x)) = arcsin(√3/2)',
            'x = arcsin(√3/2)',
            'Recognize special angle: sin(60°) = √3/2',
            'x = 60°',
            'Answer in degrees: 60°',
            'Answer in radians: π/3',
            'Verification: sin(60°) = √3/2 ✓',
            'Note: Other angles like 120° also have sin = √3/2, but only 60° is in [-90°, 90°]'
        ],
        helper: 'Use arcsin to "undo" sine. Remember: arcsin only returns angles in [-90°, 90°]',
        solution: 'x = 60° or π/3 radians',
        realWorldContext: 'Like finding the launch angle needed for a projectile to reach a specific height ratio'
    });

    // Problem 5: Composition Problem (Advanced)
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Composition - sin(arccos(x))',
        problem: 'Simplify: sin(arccos(3/5))',
        parameters: { value: 0.6, compositionType: 'sin_of_arccos' },
        problemType: 'composition',
        context: { 
            difficulty: 'advanced', 
            topic: 'Composition of Trigonometric Functions',
            realWorld: 'Converting between different trigonometric ratios'
        },
        subparts: [
            'Given: sin(arccos(3/5))',
            'Step 1: Let θ = arccos(3/5)',
            'This means: cos(θ) = 3/5',
            'Step 2: Draw a right triangle where cos(θ) = adjacent/hypotenuse = 3/5',
            'Label: adjacent = 3, hypotenuse = 5',
            'Step 3: Find opposite side using Pythagorean theorem',
            'opposite² + 3² = 5²',
            'opposite² + 9 = 25',
            'opposite² = 16',
            'opposite = 4',
            'Step 4: Find sin(θ)',
            'sin(θ) = opposite/hypotenuse = 4/5',
            'Therefore: sin(arccos(3/5)) = 4/5',
            'Verification: Using 3-4-5 right triangle ✓'
        ],
        helper: 'Use the right triangle method: draw a triangle, label sides based on the inner function, then find the outer function',
        solution: '4/5',
        realWorldContext: 'Like finding one component of motion when you know another - if horizontal component is 3/5 of total, vertical is 4/5',
        visualAid: 'Draw right triangle with adjacent=3, hypotenuse=5, opposite=4',
        formula: 'General formula: sin(arccos(x)) = √(1 - x²) for -1 ≤ x ≤ 1'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveInverseTrigRelatedProblems() {
    const problems = generateRelatedInverseTrigProblems();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Inverse Trig Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedInverseTrigMathematicalWorkbook({
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
            angleMode: 'radians',
            showBothUnits: true
        });

        try {
            // Solve the problem
            const result = workbook.solveInverseTrigProblem({
                expression: problem.problem.includes('Evaluate:') ? 
                    problem.problem.split('Evaluate: ')[1] : 
                    problem.problem.split('Simplify: ')[1] || problem.problem,
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

            console.log(`    ✓ Solution: ${result.degrees ? result.degrees.toFixed(2) + '°' : result.solutionValue}`);
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

async function generateInverseTrigDocument() {
    console.log('Generating Inverse Trigonometric Functions Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Inverse Trigonometric Functions Workbook',
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
            text: 'arcsin, arccos, arctan, Equations, and Compositions',
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
            text: 'Inverse Trigonometric Functions (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const inverseTrigProblems = generateRelatedInverseTrigProblems();
    inverseTrigProblems.forEach((problem, index) => {
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
            text: 'This workbook contains 5 carefully selected inverse trigonometric function problems that progressively build your understanding from basic evaluations to advanced compositions. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed explanations in both degrees and radians',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Domain and range awareness with error prevention',
        '• Special angle recognition and unit circle connections',
        '• Self-check questions and thinking prompts',
        '• Real-world applications showing practical uses',
        '• Alternative solution methods and strategies',
        '• Comprehensive verification of all solutions',
        '• Pedagogical notes for deeper mathematical understanding',
        '• Right triangle method for composition problems'
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
            spacing: { after: 200 }
        })
    );

    // Key Concepts Section
    documentChildren.push(
        new docx.Paragraph({
            text: 'Key Concepts to Master:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const keyConcepts = [
        '📐 Understanding inverse trig functions as "angle finders"',
        '📊 Recognizing domain and range restrictions for each function',
        '⭐ Memorizing special angle values (0°, 30°, 45°, 60°, 90°)',
        '🔄 Using the unit circle to visualize inverse trig functions',
        '🧮 Applying the right triangle method for compositions',
        '✓ Verifying solutions by computing the original trig function',
        '🌍 Connecting to real-world applications (angles of elevation, slopes, navigation)'
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
    console.log('\nProcessing Inverse Trigonometric Functions Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Inverse Trigonometric Functions Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const inverseTrigSolved = solveInverseTrigRelatedProblems();
    
    inverseTrigSolved.forEach((solved, index) => {
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
                    fill: "FFF9E6",
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

        // Visual aid if present (for composition problems)
        if (solved.problem.visualAid) {
            documentChildren.push(
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            text: '📐 Visual Aid: ',
                            bold: true
                        }),
                        new docx.TextRun({
                            text: solved.problem.visualAid,
                            italics: true
                        })
                    ],
                    spacing: { after: 200 },
                    shading: {
                        fill: "F3E5F5",
                        type: docx.ShadingType.CLEAR
                    }
                })
            );
        }

        // Formula if present
        if (solved.problem.formula) {
            documentChildren.push(
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            text: '📝 General Formula: ',
                            bold: true
                        }),
                        new docx.TextRun({
                            text: solved.problem.formula
                        })
                    ],
                    spacing: { after: 300 }
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

    // ============== REFERENCE TABLES ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Quick Reference Tables',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    // Special Angles Table
    documentChildren.push(
        new docx.Paragraph({
            text: 'Special Angles Reference',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 200, after: 200 }
        })
    );

    const specialAngles = [
        '┌─────────────┬──────────┬──────────┬──────────┐',
        '│ Angle       │   sin    │   cos    │   tan    │',
        '├─────────────┼──────────┼──────────┼──────────┤',
        '│ 0° (0)      │    0     │    1     │    0     │',
        '│ 30° (π/6)   │   1/2    │  √3/2    │  √3/3    │',
        '│ 45° (π/4)   │  √2/2    │  √2/2    │    1     │',
        '│ 60° (π/3)   │  √3/2    │   1/2    │   √3     │',
        '│ 90° (π/2)   │    1     │    0     │  undef   │',
        '└─────────────┴──────────┴──────────┴──────────┘'
    ];

    specialAngles.forEach(line => {
        documentChildren.push(
            new docx.Paragraph({
                text: line,
                spacing: { after: 50 },
                font: 'Courier New'
            })
        );
    });

    // Domain and Range Table
    documentChildren.push(
        new docx.Paragraph({
            text: 'Domain and Range of Inverse Trig Functions',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    const domainRange = [
        '┌──────────┬────────────────┬────────────────────┐',
        '│ Function │    Domain      │       Range        │',
        '├──────────┼────────────────┼────────────────────┤',
        '│ arcsin   │   [-1, 1]      │  [-90°, 90°]       │',
        '│          │                │  [-π/2, π/2]       │',
        '├──────────┼────────────────┼────────────────────┤',
        '│ arccos   │   [-1, 1]      │  [0°, 180°]        │',
        '│          │                │  [0, π]            │',
        '├──────────┼────────────────┼────────────────────┤',
        '│ arctan   │  All reals     │  (-90°, 90°)       │',
        '│          │                │  (-π/2, π/2)       │',
        '└──────────┴────────────────┴────────────────────┘'
    ];

    domainRange.forEach(line => {
        documentChildren.push(
            new docx.Paragraph({
                text: line,
                spacing: { after: 50 },
                font: 'Courier New'
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
            text: 'Congratulations on completing these 5 inverse trigonometric function problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered basic inverse trig evaluations (arcsin, arccos, arctan)',
        'You\'ve learned to handle special angles and their exact values',
        'You\'ve practiced working with negative inputs and understanding ranges',
        'You\'ve solved trigonometric equations using inverse functions',
        'You\'ve mastered the right triangle method for composition problems',
        'You\'ve connected inverse trig to real-world applications',
        'You\'ve developed domain and range awareness to avoid errors'
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
        'Practice more composition problems: cos(arctan(x)), tan(arcsin(x)), etc.',
        'Explore inverse secant, cosecant, and cotangent',
        'Apply to word problems: angles of elevation, depression, navigation',
        'Study inverse trig identities and relationships',
        'Use inverse trig in calculus: derivatives and integrals',
        'Solve more complex trigonometric equations',
        'Apply to physics problems: projectile motion, wave mechanics'
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
            spacing: { after: 200 }
        })
    );

    // Study Tips
    documentChildren.push(
        new docx.Paragraph({
            text: 'Study Tips:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const studyTips = [
        '📝 Create flashcards for special angle values',
        '🎨 Draw and label the unit circle repeatedly until memorized',
        '✏️ Practice drawing right triangles for composition problems',
        '🔄 Always verify your answers by computing the forward trig function',
        '📐 Use a calculator to check non-special angle values',
        '🤔 Ask yourself: "Is this answer in the correct range?"',
        '💭 Think about what the inverse function means conceptually',
        '🌟 Connect each problem to a real-world situation'
    ];

    studyTips.forEach(tip => {
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
        const filename = 'inverse_trig_functions_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Basic arcsin: 1 problem');
        console.log('    - Basic arctan: 1 problem');
        console.log('    - arccos with negatives: 1 problem');
        console.log('    - Equation solving: 1 problem');
        console.log('    - Composition (advanced): 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 45-55 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and visual highlighting');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Complete step-by-step solution in both degrees and radians');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Domain and range verification');
        console.log('  • Special angle recognition and unit circle connections');
        console.log('  • Right triangle method for composition problems');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Quick reference solution summary');
        console.log('  • Special angles reference table');
        console.log('  • Domain and range reference table');
        console.log('='.repeat(80) + '\n');
    } catch (error) {
        console.error(`\n❌ Error saving document: ${error.message}`);
        console.error(error.stack);
    }
}

// ============== RUN THE DOCUMENT GENERATION ==============

generateInverseTrigDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});

