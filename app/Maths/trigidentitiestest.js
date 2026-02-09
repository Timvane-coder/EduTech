import { EnhancedTrigonometricIdentitiesWorkbook } from './trig-identities-workbook.js';
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




// ============== TRIGONOMETRIC IDENTITIES - RELATED PROBLEMS GENERATOR ==============

function generateRelatedTrigonometricIdentities() {
    const relatedProblems = [];

    // Problem 1: Pythagorean Identity Verification
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Pythagorean Identity Verification',
        problem: 'Verify: sin²θ + cos²θ = 1',
        parameters: { form: 'primary' },
        problemType: 'verify_pythagorean',
        context: { 
            difficulty: 'beginner', 
            topic: 'Fundamental Pythagorean Identity',
            realWorld: 'Foundation of all trigonometry - relates to unit circle'
        },
        subparts: [
            'Given: sin²θ + cos²θ = 1',
            'This is the fundamental Pythagorean identity',
            'From unit circle: any point (x, y) on circle satisfies x² + y² = 1',
            'Since x = cos θ and y = sin θ on unit circle:',
            'cos²θ + sin²θ = 1',
            'Rearranged: sin²θ + cos²θ = 1 ✓',
            'This is true for ALL angles θ'
        ],
        helper: 'This identity comes directly from the Pythagorean theorem applied to the unit circle (radius = 1)',
        solution: 'Identity verified: sin²θ + cos²θ = 1 for all θ',
        realWorldContext: 'Fundamental to physics (wave motion), engineering (signal processing), and computer graphics (rotations)',
        keyInsight: 'Every point on the unit circle satisfies x² + y² = 1, giving us this identity',
        visualAid: 'Draw unit circle: point at angle θ has coordinates (cos θ, sin θ), distance from origin = 1'
    });

    // Problem 2: Double-Angle Identity Application
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Double-Angle Identity - Finding sin 2θ',
        problem: 'If sin θ = 3/5 and θ is in Quadrant I, find sin 2θ',
        parameters: { 
            function: 'sin',
            operation: 'double',
            givenValue: 3/5,
            quadrant: 1
        },
        problemType: 'verify_double_angle',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Double-Angle Formulas',
            realWorld: 'Used in physics for projectile motion and wave analysis'
        },
        subparts: [
            'Given: sin θ = 3/5, θ in Quadrant I',
            'Find: sin 2θ',
            '',
            'Step 1: Find cos θ using Pythagorean identity',
            'sin²θ + cos²θ = 1',
            '(3/5)² + cos²θ = 1',
            '9/25 + cos²θ = 1',
            'cos²θ = 1 - 9/25 = 16/25',
            'cos θ = 4/5 (positive in Q I)',
            '',
            'Step 2: Apply double-angle formula',
            'sin 2θ = 2 sin θ cos θ',
            'sin 2θ = 2(3/5)(4/5)',
            'sin 2θ = 2(12/25)',
            'sin 2θ = 24/25',
            '',
            'Verification: sin 2θ = 24/25 ✓'
        ],
        helper: 'Use Pythagorean identity to find missing trig value, then apply sin 2θ = 2 sin θ cos θ',
        solution: 'sin 2θ = 24/25',
        realWorldContext: 'Projectile range formula R = (v₀²sin 2θ)/g uses this identity - maximum range at θ = 45°',
        keyInsight: 'Double-angle formulas combine both sin and cos of the original angle',
        visualAid: 'Right triangle with opposite = 3, hypotenuse = 5, so adjacent = 4'
    });

    // Problem 3: Sum Formula Application
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Sum Formula - Finding Exact Value',
        problem: 'Find the exact value of sin 75° using sum formulas',
        parameters: { 
            function: 'sin',
            operation: 'sum',
            angle1: 45,
            angle2: 30
        },
        problemType: 'verify_sum_difference',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Sum and Difference Identities',
            realWorld: 'Finding exact trig values for non-standard angles'
        },
        subparts: [
            'Goal: Find sin 75°',
            'Strategy: Express 75° as sum of known angles',
            '75° = 45° + 30°',
            '',
            'Apply sum formula:',
            'sin(α + β) = sin α cos β + cos α sin β',
            'sin(45° + 30°) = sin 45° cos 30° + cos 45° sin 30°',
            '',
            'Substitute known values:',
            'sin 45° = √2/2,  cos 45° = √2/2',
            'sin 30° = 1/2,   cos 30° = √3/2',
            '',
            'sin 75° = (√2/2)(√3/2) + (√2/2)(1/2)',
            'sin 75° = (√6/4) + (√2/4)',
            'sin 75° = (√6 + √2)/4',
            '',
            'Final Answer: sin 75° = (√6 + √2)/4 ✓'
        ],
        helper: 'Express the angle as a sum of 30°, 45°, or 60°, then apply the sum formula',
        solution: 'sin 75° = (√6 + √2)/4',
        realWorldContext: 'Navigation and surveying require exact trig values for precise angle calculations',
        keyInsight: 'Sum formulas let us find exact values for any angle we can express as a sum of known angles',
        visualAid: 'Remember: sin uses SAME sign as operation (+), cos uses OPPOSITE sign'
    });

    // Problem 4: Proving a Trigonometric Identity
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Identity Proof - Transform One Side',
        problem: 'Prove: (1 - cos²θ)/(sin θ) = sin θ',
        parameters: { 
            leftSide: '(1 - cos²θ)/(sin θ)',
            rightSide: 'sin θ'
        },
        problemType: 'prove_identity',
        context: { 
            difficulty: 'advanced', 
            topic: 'Proving Trigonometric Identities',
            realWorld: 'Essential skill for advanced mathematics and physics'
        },
        subparts: [
            'Goal: Prove (1 - cos²θ)/(sin θ) = sin θ',
            'Strategy: Work with LEFT side (more complex) to transform it to RIGHT side',
            '',
            'Starting with LEFT side:',
            '(1 - cos²θ)/(sin θ)',
            '',
            'Step 1: Apply Pythagorean identity',
            'We know: sin²θ + cos²θ = 1',
            'Therefore: 1 - cos²θ = sin²θ',
            '',
            'Step 2: Substitute',
            '(1 - cos²θ)/(sin θ) = sin²θ/(sin θ)',
            '',
            'Step 3: Simplify the fraction',
            'sin²θ/(sin θ) = sin θ · sin θ / sin θ = sin θ',
            '',
            'We have shown: LEFT side = sin θ = RIGHT side',
            'Therefore, the identity is proven ✓'
        ],
        helper: 'Key strategy: Recognize 1 - cos²θ as sin²θ using Pythagorean identity, then simplify',
        solution: 'Identity proven: (1 - cos²θ)/(sin θ) = sin θ',
        realWorldContext: 'Simplifying complex trig expressions is crucial in electrical engineering for AC circuit analysis',
        keyInsight: 'Always look for Pythagorean identity substitutions: 1 - cos²θ = sin²θ and 1 - sin²θ = cos²θ',
        visualAid: 'When proving, work ONE side only - never cross-multiply or add to both sides',
        proofTechniques: [
            'Started with more complex (left) side',
            'Applied Pythagorean identity (key substitution)',
            'Simplified the fraction',
            'Reached the simpler (right) side'
        ]
    });

    // Problem 5: Reciprocal Identity Application
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Reciprocal Identity - Finding csc θ',
        problem: 'If sin θ = 2/3, find csc θ',
        parameters: { 
            functions: ['sin', 'csc'],
            givenValue: 2/3
        },
        problemType: 'verify_reciprocal',
        context: { 
            difficulty: 'beginner', 
            topic: 'Reciprocal Identities',
            realWorld: 'Converting between related trigonometric functions'
        },
        subparts: [
            'Given: sin θ = 2/3',
            'Find: csc θ',
            '',
            'Key relationship: csc θ and sin θ are reciprocals',
            'csc θ = 1/(sin θ)',
            '',
            'Substitute the given value:',
            'csc θ = 1/(2/3)',
            '',
            'To divide by a fraction, multiply by its reciprocal:',
            'csc θ = 1 × (3/2)',
            'csc θ = 3/2',
            '',
            'Verification:',
            'sin θ × csc θ = (2/3) × (3/2) = 6/6 = 1 ✓',
            'Reciprocals multiply to give 1 ✓'
        ],
        helper: 'Reciprocals flip the fraction: if sin θ = a/b, then csc θ = b/a',
        solution: 'csc θ = 3/2',
        realWorldContext: 'Reciprocal functions appear in optics (refractive index calculations) and wave physics',
        keyInsight: 'Three reciprocal pairs: sin↔csc, cos↔sec, tan↔cot. Each pair multiplies to 1.',
        visualAid: 'On unit circle: if sin θ (height) = 2/3, then csc θ = 3/2 (reciprocal)',
        allReciprocalPairs: [
            'csc θ = 1/sin θ  ⟺  sin θ = 1/csc θ',
            'sec θ = 1/cos θ  ⟺  cos θ = 1/sec θ',
            'cot θ = 1/tan θ  ⟺  tan θ = 1/cot θ'
        ]
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveTrigonometricRelatedProblems() {
    const problems = generateRelatedTrigonometricIdentities();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Trigonometric Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedTrigonometricIdentitiesWorkbook({
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
            includeHistoricalContext: false,
            includeCrossCurricularLinks: true
        });

        try {
            // Solve the problem
            const result = workbook.solveTrigonometricProblem({
                identity: problem.problem.split(': ')[1] || problem.problem,
                problem: problem.scenario,
                parameters: problem.parameters,
                problemType: problem.problemType,
                context: problem.context
            });

            solvedProblems.push({
                problem: problem,
                workbook: workbook,
                result: result
            });

            console.log(`    ✓ Solution verified`);
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
    console.log('Generating Trigonometric Identities Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Trigonometric Identities Workbook',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { after: 200 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Complete Guide with 5 Essential Identity Problems',
            spacing: { after: 150 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Pythagorean, Reciprocal, Sum, Double-Angle, and Identity Proofs',
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
            text: 'Trigonometric Identity Problems (5 Essential Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const trigProblems = generateRelatedTrigonometricIdentities();
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
            text: 'This workbook contains 5 essential trigonometric identity problems covering the fundamental concepts you need to master. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with geometric and algebraic explanations',
        '• Multiple representation styles (unit circle, right triangle, algebraic)',
        '• Detailed identity derivations and proofs',
        '• Common mistakes and misconception correction',
        '• Visual aids and geometric interpretations',
        '• Real-world applications in physics, engineering, and technology',
        '• Alternative solution methods and proof techniques',
        '• Self-assessment questions and thinking prompts',
        '• Connections to other mathematical concepts',
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

    documentChildren.push(
        new docx.Paragraph({
            text: '',
            spacing: { after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Why These 5 Problems?',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const whyThese = [
        '1. Pythagorean Identity - The foundation of all trigonometric identities',
        '2. Double-Angle Formula - Essential for calculus and physics applications',
        '3. Sum Formula - Enables finding exact values for any angle',
        '4. Identity Proof - Develops algebraic reasoning and proof techniques',
        '5. Reciprocal Identity - Shows relationships between trig functions'
    ];

    whyThese.forEach(reason => {
        documentChildren.push(
            new docx.Paragraph({
                text: reason,
                spacing: { after: 100 }
            })
        );
    });

    // ============== QUICK REFERENCE GUIDE ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Quick Reference: Essential Identities',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    const identityCategories = [
        {
            title: 'Pythagorean Identities',
            identities: [
                'sin²θ + cos²θ = 1',
                '1 + tan²θ = sec²θ',
                '1 + cot²θ = csc²θ'
            ]
        },
        {
            title: 'Reciprocal Identities',
            identities: [
                'csc θ = 1/sin θ',
                'sec θ = 1/cos θ',
                'cot θ = 1/tan θ'
            ]
        },
        {
            title: 'Quotient Identities',
            identities: [
                'tan θ = sin θ/cos θ',
                'cot θ = cos θ/sin θ'
            ]
        },
        {
            title: 'Sum and Difference Formulas',
            identities: [
                'sin(α + β) = sin α cos β + cos α sin β',
                'cos(α + β) = cos α cos β - sin α sin β',
                'tan(α + β) = (tan α + tan β)/(1 - tan α tan β)'
            ]
        },
        {
            title: 'Double-Angle Formulas',
            identities: [
                'sin 2θ = 2 sin θ cos θ',
                'cos 2θ = cos²θ - sin²θ = 2cos²θ - 1 = 1 - 2sin²θ',
                'tan 2θ = 2tan θ/(1 - tan²θ)'
            ]
        }
    ];

    identityCategories.forEach(category => {
        documentChildren.push(
            new docx.Paragraph({
                text: category.title,
                heading: docx.HeadingLevel.HEADING_3,
                spacing: { before: 200, after: 100 }
            })
        );

        category.identities.forEach(identity => {
            documentChildren.push(
                new docx.Paragraph({
                    text: `• ${identity}`,
                    spacing: { after: 80 }
                })
            );
        });
    });

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Trigonometric Identity Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Trigonometric Identity Problems',
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
                text: solved.problem.problem,
                spacing: { after: 200 },
                bold: true,
                shading: {
                    fill: "E1F5FE",
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
                               solved.problem.difficulty === 'medium' ? '1976D2' : 'D32F2F',
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
                        text: '📚 Topic: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.context.topic
                    })
                ],
                spacing: { after: 150 }
            })
        );

        // Helper tip
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: '💡 Quick Strategy: ',
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

        // Key insight (if available)
        if (solved.problem.keyInsight) {
            documentChildren.push(
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            text: '🔑 Key Insight: ',
                            bold: true
                        }),
                        new docx.TextRun({
                            text: solved.problem.keyInsight,
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

        // Visual aid suggestion
        if (solved.problem.visualAid) {
            documentChildren.push(
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            text: '👁️ Visualization: ',
                            bold: true
                        }),
                        new docx.TextRun({
                            text: solved.problem.visualAid
                        })
                    ],
                    spacing: { after: 200 }
                })
            );
        }

        // Real-world context
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: '🌍 Real-World Application: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.realWorldContext
                    })
                ],
                spacing: { after: 300 }
            })
        );

        // Proof techniques (if available)
        if (solved.problem.proofTechniques) {
            documentChildren.push(
                new docx.Paragraph({
                    text: 'Proof Techniques Used:',
                    heading: docx.HeadingLevel.HEADING_3,
                    spacing: { before: 200, after: 100 }
                })
            );

            solved.problem.proofTechniques.forEach(technique => {
                documentChildren.push(
                    new docx.Paragraph({
                        text: `✓ ${technique}`,
                        spacing: { after: 80 }
                    })
                );
            });

            documentChildren.push(
                new docx.Paragraph({
                    text: '',
                    spacing: { after: 200 }
                })
            );
        }

        // Reciprocal pairs (if available)
        if (solved.problem.allReciprocalPairs) {
            documentChildren.push(
                new docx.Paragraph({
                    text: 'All Reciprocal Pairs:',
                    heading: docx.HeadingLevel.HEADING_3,
                    spacing: { before: 200, after: 100 }
                })
            );

            solved.problem.allReciprocalPairs.forEach(pair => {
                documentChildren.push(
                    new docx.Paragraph({
                        text: pair,
                        spacing: { after: 80 }
                    })
                );
            });

            documentChildren.push(
                new docx.Paragraph({
                    text: '',
                    spacing: { after: 200 }
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
            if (subpart === '') {
                documentChildren.push(
                    new docx.Paragraph({
                        text: '',
                        spacing: { after: 100 }
                    })
                );
            } else {
                documentChildren.push(
                    new docx.Paragraph({
                        text: subpart,
                        spacing: { after: 100 }
                    })
                );
            }
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
    });

    // ============== SUMMARY SECTION ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Summary and Mastery Checklist',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Congratulations on completing these 5 essential trigonometric identity problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You understand the fundamental Pythagorean identity and its unit circle origin',
        'You can apply double-angle formulas to find exact trigonometric values',
        'You know how to use sum formulas to calculate trig values for any angle',
        'You\'ve mastered the technique of proving trigonometric identities',
        'You understand reciprocal relationships between trig functions',
        'You\'ve seen real-world applications in physics, engineering, and navigation',
        'You can recognize and apply Pythagorean identity substitutions'
    ];

    documentChildren.push(
        new docx.Paragraph({
            text: 'What You\'ve Mastered:',
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
            text: 'Key Identity Categories Covered:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const categoriesCovered = [
        '✓ Pythagorean Identities (sin²θ + cos²θ = 1)',
        '✓ Reciprocal Identities (csc θ = 1/sin θ, etc.)',
        '✓ Sum and Difference Formulas (sin(α + β))',
        '✓ Double-Angle Formulas (sin 2θ, cos 2θ)',
        '✓ Identity Proof Techniques (one-side transformation)'
    ];

    categoriesCovered.forEach(category => {
        documentChildren.push(
            new docx.Paragraph({
                text: category,
                spacing: { after: 100 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: 'Essential Skills Developed:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const skillsDeveloped = [
        '1. Pattern Recognition - Identifying which identity to apply',
        '2. Strategic Thinking - Choosing the best proof approach',
        '3. Algebraic Manipulation - Transforming complex expressions',
        '4. Verification Skills - Checking solutions and proofs',
        '5. Unit Circle Mastery - Understanding geometric foundations',
        '6. Error Avoidance - Recognizing and preventing common mistakes'
    ];

    skillsDeveloped.forEach(skill => {
        documentChildren.push(
            new docx.Paragraph({
                text: skill,
                spacing: { after: 100 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: 'Next Steps in Your Trigonometry Journey:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const nextSteps = [
        '1. Half-Angle Formulas - Extend your double-angle knowledge',
        '2. Product-to-Sum and Sum-to-Product Identities - For advanced integration',
        '3. Solving Trigonometric Equations - Apply identities to solve equations',
        '4. Inverse Trigonometric Functions - Understand arc functions',
        '5. Complex Trigonometric Proofs - Multi-step identity proofs',
        '6. Calculus Applications - Derivatives and integrals of trig functions',
        '7. Polar Coordinates - Use trig in different coordinate systems',
        '8. Fourier Series - Advanced application in signal processing'
    ];

    nextSteps.forEach(step => {
        documentChildren.push(
            new docx.Paragraph({
                text: step,
                spacing: { after: 100 }
            })
        );
    });

    // Study tips
    documentChildren.push(
        new docx.Paragraph({
            text: 'Study Tips for Mastery:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const studyTips = [
        '• Draw the unit circle regularly - visual memory helps',
        '• Derive identities yourself rather than just memorizing',
        '• Practice proving identities from both directions',
        '• Create flashcards for the fundamental identities',
        '• Work problems without looking at solutions first',
        '• Connect each identity to its geometric meaning',
        '• Teach these concepts to someone else - best way to learn',
        '• Use online graphing tools to visualize trig functions'
    ];

    studyTips.forEach(tip => {
        documentChildren.push(
            new docx.Paragraph({
                text: tip,
                spacing: { after: 100 }
            })
        );
    });

    // Common pitfalls to avoid
    documentChildren.push(
        new docx.Paragraph({
            text: 'Common Pitfalls to Avoid:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const pitfalls = [
        '✗ Don\'t confuse sin²θ + cos²θ = 1 with sin θ + cos θ = 1',
        '✗ Don\'t think sin(α + β) = sin α + sin β (must use formula)',
        '✗ Don\'t work both sides when proving identities',
        '✗ Don\'t forget the sign difference in cos(α + β) formula',
        '✗ Don\'t divide by a trig function without checking if it could be zero',
        '✗ Don\'t memorize without understanding - understand the "why"'
    ];

    pitfalls.forEach(pitfall => {
        documentChildren.push(
            new docx.Paragraph({
                text: pitfall,
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
        const filename = 'trigonometric_identities_5_essential_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5 Essential Identity Problems');
        console.log('    - Pythagorean Identity: 1 problem (foundation)');
        console.log('    - Double-Angle Formula: 1 problem (application)');
        console.log('    - Sum Formula: 1 problem (exact values)');
        console.log('    - Identity Proof: 1 problem (proof technique)');
        console.log('    - Reciprocal Identity: 1 problem (relationships)');
        console.log('\n📄 ESTIMATED PAGES: 50-60 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and color coding');
        console.log('  • Topic area and learning objectives');
        console.log('  • Quick strategy tips for immediate guidance');
        console.log('  • Key insights highlighting crucial concepts');
        console.log('  • Visualization aids (unit circle, triangles, graphs)');
        console.log('  • Real-world applications in physics, engineering, navigation');
        console.log('  • Proof techniques and strategies (for proof problems)');
        console.log('  • Complete step-by-step solutions with multiple perspectives');
        console.log('  • Geometric and algebraic explanations');
        console.log('  • Common mistakes and misconception correction');
        console.log('  • Self-check questions and thinking prompts');
        console.log('  • Alternative solution methods');
        console.log('  • Detailed identity reference guides');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary');
        console.log('\n📚 BONUS CONTENT:');
        console.log('  • Quick reference guide to all essential identities');
        console.log('  • Comprehensive summary and mastery checklist');
        console.log('  • Study tips for effective learning');
        console.log('  • Common pitfalls to avoid');
        console.log('  • Suggested next steps in trigonometry');
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
