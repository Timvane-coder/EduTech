import { EnhancedTrigonometricEquationsWorkbook } from './trigonometric-equations-workbook.js';
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




// ============== TRIGONOMETRIC EQUATIONS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedTrigonometricEquations() {
    const relatedProblems = [];

    // Problem 1: Basic Sine Equation
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Basic Sine Equation',
        problem: 'Solve for x in [0, 2π): sin(x) = 1/2',
        parameters: { k: 0.5 },
        problemType: 'basic_sine',
        context: { 
            difficulty: 'beginner', 
            topic: 'Basic Trigonometric Equations',
            realWorld: 'Finding angles with specific sine values',
            interval: [0, 2 * Math.PI]
        },
        subparts: [
            'Given: sin(x) = 1/2',
            'Step 1: Find reference angle using arcsin',
            'Reference angle = arcsin(1/2) = π/6',
            'Step 2: Determine quadrants where sine is positive',
            'Sine is positive in Quadrants I and II',
            'Step 3: Find angles in both quadrants',
            'Quadrant I: x = π/6 ≈ 0.5236 rad (30°)',
            'Quadrant II: x = π - π/6 = 5π/6 ≈ 2.6180 rad (150°)',
            'Check: sin(π/6) = 1/2 ✓ and sin(5π/6) = 1/2 ✓'
        ],
        helper: 'Use the unit circle: sine is the y-coordinate. Find where y = 1/2 on the circle.',
        solution: 'x = π/6, 5π/6 (or 30°, 150°)',
        realWorldContext: 'Like finding when a Ferris wheel passenger is at a specific height - happens twice per rotation',
        visualTip: 'Draw the unit circle and mark the horizontal line at y = 1/2. It intersects the circle at two points.'
    });

    // Problem 2: Basic Cosine Equation
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Basic Cosine Equation',
        problem: 'Solve for x in [0, 2π): cos(x) = -√2/2',
        parameters: { k: -Math.sqrt(2) / 2 },
        problemType: 'basic_cosine',
        context: { 
            difficulty: 'beginner', 
            topic: 'Basic Trigonometric Equations',
            realWorld: 'Finding angles with specific cosine values',
            interval: [0, 2 * Math.PI]
        },
        subparts: [
            'Given: cos(x) = -√2/2',
            'Step 1: Find reference angle using arccos',
            'Reference angle = arccos(√2/2) = π/4',
            'Step 2: Determine quadrants where cosine is negative',
            'Cosine is negative in Quadrants II and III',
            'Step 3: Find angles in both quadrants',
            'Quadrant II: x = π - π/4 = 3π/4 ≈ 2.3562 rad (135°)',
            'Quadrant III: x = π + π/4 = 5π/4 ≈ 3.9270 rad (225°)',
            'Check: cos(3π/4) = -√2/2 ✓ and cos(5π/4) = -√2/2 ✓'
        ],
        helper: 'Cosine is the x-coordinate on the unit circle. Find where x = -√2/2 (negative means left side).',
        solution: 'x = 3π/4, 5π/4 (or 135°, 225°)',
        realWorldContext: 'Like finding specific positions in circular motion where horizontal displacement is -√2/2',
        visualTip: 'On the unit circle, cosine is negative in quadrants II and III (left side of y-axis).'
    });

    // Problem 3: Linear Sine Equation
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Linear Sine Equation',
        problem: 'Solve for x in [0, 2π): 2sin(x) - 1 = 0',
        parameters: { a: 2, b: 1, c: 0, d: -1, k: 0 },
        problemType: 'linear_sine',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Linear Trigonometric Equations',
            realWorld: 'Solving equations with coefficients and constants',
            interval: [0, 2 * Math.PI]
        },
        subparts: [
            'Given: 2sin(x) - 1 = 0',
            'Step 1: Isolate sin(x) algebraically',
            'Add 1 to both sides: 2sin(x) = 1',
            'Divide by 2: sin(x) = 1/2',
            'Step 2: Solve basic sine equation',
            'Reference angle = arcsin(1/2) = π/6',
            'Sine is positive in Quadrants I and II',
            'Step 3: Find all solutions',
            'x = π/6 ≈ 0.5236 rad (30°)',
            'x = 5π/6 ≈ 2.6180 rad (150°)',
            'Check: 2sin(π/6) - 1 = 2(1/2) - 1 = 0 ✓'
        ],
        helper: 'First use algebra to isolate sin(x), then solve the basic trig equation.',
        solution: 'x = π/6, 5π/6 (or 30°, 150°)',
        realWorldContext: 'Like solving when a wave amplitude reaches a specific value after scaling and shifting',
        visualTip: 'This is a two-step process: algebra first, then trigonometry.'
    });

    // Problem 4: Quadratic Sine Equation
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Quadratic Sine Equation',
        problem: 'Solve for x in [0, 2π): 2sin²(x) - sin(x) - 1 = 0',
        parameters: { a: 2, b: -1, c: -1 },
        problemType: 'quadratic_sine',
        context: { 
            difficulty: 'advanced', 
            topic: 'Quadratic Trigonometric Equations',
            realWorld: 'Solving equations with squared trig functions',
            interval: [0, 2 * Math.PI]
        },
        subparts: [
            'Given: 2sin²(x) - sin(x) - 1 = 0',
            'Step 1: Substitute u = sin(x)',
            '2u² - u - 1 = 0',
            'Step 2: Factor the quadratic',
            '(2u + 1)(u - 1) = 0',
            'Step 3: Solve for u',
            '2u + 1 = 0  →  u = -1/2',
            'u - 1 = 0  →  u = 1',
            'Step 4: Check validity (both are in [-1, 1] ✓)',
            'Step 5: Solve sin(x) = -1/2',
            'Quadrants III and IV: x = 7π/6, 11π/6',
            'Step 6: Solve sin(x) = 1',
            'x = π/2',
            'Final solutions: x = π/2, 7π/6, 11π/6'
        ],
        helper: 'Treat sin(x) as a variable (u), solve the quadratic, then solve the basic trig equations.',
        solution: 'x = π/2, 7π/6, 11π/6 (or 90°, 210°, 330°)',
        realWorldContext: 'Like finding when a vibrating system reaches specific amplitudes - quadratic relationship',
        visualTip: 'This gives THREE solutions because we\'re solving two different sine equations.'
    });

    // Problem 5: Double Angle Equation
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Double Angle Equation',
        problem: 'Solve for x in [0, 2π): cos(2x) = 1/2',
        parameters: { k: 0.5 },
        problemType: 'double_angle',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Multiple Angle Equations',
            realWorld: 'Solving equations with frequency multiplication',
            interval: [0, 2 * Math.PI]
        },
        subparts: [
            'Given: cos(2x) = 1/2',
            'Step 1: Let u = 2x (substitution)',
            'Then cos(u) = 1/2',
            'Step 2: Determine interval for u',
            'If x ∈ [0, 2π), then u = 2x ∈ [0, 4π)',
            'Step 3: Solve cos(u) = 1/2 in [0, 4π)',
            'Reference angle = π/3',
            'Cosine is positive in Quadrants I and IV',
            'In [0, 4π): u = π/3, 5π/3, 7π/3, 11π/3',
            'Step 4: Solve for x by dividing u by 2',
            'x = π/6, 5π/6, 7π/6, 11π/6',
            'Check: cos(2·π/6) = cos(π/3) = 1/2 ✓'
        ],
        helper: 'Solve for the double angle first (extend interval), then divide by 2 to get x.',
        solution: 'x = π/6, 5π/6, 7π/6, 11π/6 (or 30°, 150°, 210°, 330°)',
        realWorldContext: 'Like analyzing a wave oscillating at twice the fundamental frequency',
        visualTip: 'Double angle means the function completes two full cycles in [0, 2π), so expect more solutions.'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveTrigonometricRelatedProblems() {
    const problems = generateRelatedTrigonometricEquations();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Trigonometric Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedTrigonometricEquationsWorkbook({
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
            angleMode: 'radians'
        });

        try {
            // Solve the problem
            const result = workbook.solveTrigProblem({
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

            // Format solutions for display
            if (result.solutions && Array.isArray(result.solutions)) {
                const solutionsStr = result.solutions.map(s => s.toFixed(4)).join(', ');
                console.log(`    ✓ Solutions: ${solutionsStr} rad`);
            } else {
                console.log(`    ✓ Solution type: ${result.solutionType}`);
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
    console.log('Generating Trigonometric Equations Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Trigonometric Equations Workbook',
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
            text: 'Basic, Linear, Quadratic, and Multiple Angle Equations',
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
            text: 'Trigonometric Equations (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const trigProblems = generateRelatedTrigonometricEquations();
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
            text: 'Introduction',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'This workbook contains 5 carefully selected trigonometric equation problems that progressively build your understanding of solving trig equations. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed explanations',
        '• Unit circle visualizations and quadrant analysis',
        '• Reference angle calculations and applications',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Common mistakes and error prevention tips specific to trig equations',
        '• Self-check questions and thinking prompts',
        '• Real-world applications (waves, circular motion, oscillations)',
        '• Alternative solution methods',
        '• Detailed verification of all solutions',
        '• Trigonometric identities reference',
        '• Special angles and unit circle reference',
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
            spacing: { after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Important Notes:',
            bold: true,
            spacing: { after: 100 }
        })
    );

    const notes = [
        '• All angles are in radians (degrees shown in parentheses for reference)',
        '• Solutions are given in the interval [0, 2π) unless otherwise specified',
        '• Always verify your calculator is in the correct mode (radians vs degrees)',
        '• Use the unit circle as your primary visualization tool',
        '• Remember: sin is y-coordinate, cos is x-coordinate on the unit circle'
    ];

    notes.forEach(note => {
        documentChildren.push(
            new docx.Paragraph({
                text: note,
                spacing: { after: 100 }
            })
        );
    });

    // ============== UNIT CIRCLE QUICK REFERENCE ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Unit Circle Quick Reference',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'CAST Rule (Quadrant Signs):',
            bold: true,
            spacing: { after: 100 }
        })
    );

    const castRules = [
        'Quadrant I: All functions positive',
        'Quadrant II: Sine positive, Cosine and Tangent negative',
        'Quadrant III: Tangent positive, Sine and Cosine negative',
        'Quadrant IV: Cosine positive, Sine and Tangent negative',
        'Memory aid: "All Students Take Calculus" (counterclockwise from Quadrant I)'
    ];

    castRules.forEach(rule => {
        documentChildren.push(
            new docx.Paragraph({
                text: `• ${rule}`,
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

    documentChildren.push(
        new docx.Paragraph({
            text: 'Special Angles (30-60-90 and 45-45-90):',
            bold: true,
            spacing: { after: 100 }
        })
    );

    const specialAngles = [
        '0° (0 rad): sin = 0, cos = 1, tan = 0',
        '30° (π/6): sin = 1/2, cos = √3/2, tan = √3/3',
        '45° (π/4): sin = √2/2, cos = √2/2, tan = 1',
        '60° (π/3): sin = √3/2, cos = 1/2, tan = √3',
        '90° (π/2): sin = 1, cos = 0, tan = undefined'
    ];

    specialAngles.forEach(angle => {
        documentChildren.push(
            new docx.Paragraph({
                text: `• ${angle}`,
                spacing: { after: 100 }
            })
        );
    });

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Trigonometric Equations Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Trigonometric Equations Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const trigSolved = solveTrigonometricRelatedProblems();
    
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
                    fill: "E6F3FF",
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
                spacing: { after: 150 },
                shading: {
                    fill: "FFFEF0",
                    type: docx.ShadingType.CLEAR
                }
            })
        );

        // Visual tip
        if (solved.problem.visualTip) {
            documentChildren.push(
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            text: '👁️ Visual Tip: ',
                            bold: true
                        }),
                        new docx.TextRun({
                            text: solved.problem.visualTip,
                            italics: true
                        })
                    ],
                    spacing: { after: 200 },
                    shading: {
                        fill: "F0F8FF",
                        type: docx.ShadingType.CLEAR
                    }
                })
            );
        }

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
            text: 'Congratulations on completing these 5 trigonometric equation problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered basic sine and cosine equations using the unit circle',
        'You\'ve learned to use reference angles and quadrant analysis',
        'You\'ve practiced linear trigonometric equations (combining algebra and trig)',
        'You\'ve solved quadratic trigonometric equations using substitution',
        'You\'ve tackled multiple angle equations (double angle)',
        'You\'ve learned to find ALL solutions in a given interval',
        'You\'ve seen real-world applications of trigonometric equations'
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
            text: 'Key Skills Acquired:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const keySkills = [
        'Using inverse trigonometric functions correctly',
        'Applying the CAST rule for quadrant determination',
        'Working with reference angles',
        'Checking domain restrictions for trig functions',
        'Verifying solutions by substitution',
        'Extending intervals for multiple angle equations',
        'Using substitution for quadratic trig equations'
    ];

    keySkills.forEach((skill, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${skill}`,
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
        'Practice with tangent equations and their unique period (π instead of 2π)',
        'Explore equations using trigonometric identities (Pythagorean, double angle, etc.)',
        'Try solving systems of trigonometric equations',
        'Work with inverse trigonometric equations (arcsin, arccos, arctan)',
        'Apply trig equations to real-world problems (waves, oscillations, circular motion)',
        'Study half-angle and triple-angle equations',
        'Explore sum-to-product and product-to-sum identities'
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
            text: 'Common Pitfalls to Avoid:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const pitfalls = [
        '❌ Calculator mode confusion (degrees vs radians)',
        '❌ Finding only one solution when there are two',
        '❌ Using arcsin/arccos without considering all quadrants',
        '❌ Forgetting to check domain restrictions (|sin| ≤ 1, |cos| ≤ 1)',
        '❌ Not extending the interval for multiple angle equations',
        '❌ Accepting invalid solutions from quadratic equations'
    ];

    pitfalls.forEach(pitfall => {
        documentChildren.push(
            new docx.Paragraph({
                text: pitfall,
                spacing: { after: 100 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: 'Tips for Success:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const tips = [
        '✓ Always draw the unit circle for visualization',
        '✓ Memorize special angles (30°, 45°, 60° and their radian equivalents)',
        '✓ Use the CAST rule religiously for quadrant determination',
        '✓ Verify every solution by substitution',
        '✓ Check your calculator mode before starting',
        '✓ Label your angles clearly (radians or degrees)',
        '✓ Practice, practice, practice with different types of equations'
    ];

    tips.forEach(tip => {
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
        const filename = 'trigonometric_equations_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Basic Sine Equation: 1 problem');
        console.log('    - Basic Cosine Equation: 1 problem');
        console.log('    - Linear Sine Equation: 1 problem');
        console.log('    - Quadratic Sine Equation: 1 problem');
        console.log('    - Double Angle Equation: 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 60-75 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and visual highlighting');
        console.log('  • Quick helper tips and visual tips for unit circle work');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Unit circle reference and quadrant analysis');
        console.log('  • Complete step-by-step solution with enhanced explanations');
        console.log('  • Reference angle calculations with detailed reasoning');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Verification of ALL solutions with detailed checking');
        console.log('  • Key concepts and trigonometric identities');
        console.log('  • Common mistakes specific to trig equations');
        console.log('  • CAST rule application and quadrant determination');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods');
        console.log('  • Special angles and unit circle reference');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary with all angles');
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
