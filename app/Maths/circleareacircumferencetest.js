import { EnhancedCircleAreaCircumferenceMathematicalWorkbook } from './circle-area-circumference-workbook.js';
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




// ============== CIRCLE AREA AND CIRCUMFERENCE - RELATED PROBLEMS GENERATOR ==============

function generateRelatedCircleProblems() {
    const relatedProblems = [];

    // Problem 1: Find Circumference from Radius (Basic)
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Finding Circumference from Radius',
        problem: 'A circle has a radius of 7 cm. Find its circumference.',
        parameters: { radius: 7 },
        problemType: 'circumference_from_radius',
        context: { 
            difficulty: 'beginner', 
            topic: 'Circle Circumference',
            units: 'cm',
            realWorld: 'Measuring distance around circular objects'
        },
        subparts: [
            'Given: radius r = 7 cm',
            'Formula: C = 2πr',
            'Substitute: C = 2π(7)',
            'Calculate: C = 14π',
            'Approximate: C ≈ 14 × 3.14159 ≈ 43.98 cm',
            'Answer: C ≈ 43.98 cm or 14π cm (exact)'
        ],
        helper: 'Use the formula C = 2πr. Multiply the radius by 2π to find circumference.',
        solution: 'C ≈ 43.98 cm (or 14π cm exact)',
        realWorldContext: 'Like measuring around a pizza with 7 cm radius, or finding how far a wheel travels in one rotation',
        piNote: 'π (pi) ≈ 3.14159... Use this value for calculations or keep answer in terms of π for exact form'
    });

    // Problem 2: Find Area from Radius (Basic)
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Finding Area from Radius',
        problem: 'A circular garden has a radius of 5 meters. Find the area.',
        parameters: { radius: 5 },
        problemType: 'area_from_radius',
        context: { 
            difficulty: 'beginner', 
            topic: 'Circle Area',
            units: 'm',
            realWorld: 'Calculating space for planting or material coverage'
        },
        subparts: [
            'Given: radius r = 5 m',
            'Formula: A = πr²',
            'Step 1: Square the radius: 5² = 25',
            'Step 2: Multiply by π: A = π(25)',
            'Calculate: A = 25π',
            'Approximate: A ≈ 25 × 3.14159 ≈ 78.54 m²',
            'Answer: A ≈ 78.54 m² or 25π m² (exact)'
        ],
        helper: 'Use the formula A = πr². Remember to SQUARE the radius first, then multiply by π.',
        solution: 'A ≈ 78.54 m² (or 25π m² exact)',
        realWorldContext: 'Finding how much soil needed for a circular garden, or grass seed for a round lawn',
        commonMistake: 'Don\'t forget to square the radius! It\'s πr², not πr or 2πr'
    });

    // Problem 3: Find Radius from Circumference (Reverse)
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Finding Radius from Circumference',
        problem: 'A circular track has a circumference of 62.8 meters. Find the radius.',
        parameters: { circumference: 62.8 },
        problemType: 'radius_from_circumference',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Reverse Circle Calculations',
            units: 'm',
            realWorld: 'Finding dimensions from perimeter measurements'
        },
        subparts: [
            'Given: circumference C = 62.8 m',
            'Formula: C = 2πr, solve for r',
            'Rearrange: r = C/(2π)',
            'Substitute: r = 62.8/(2π)',
            'Calculate: r = 62.8/(2 × 3.14159)',
            'r = 62.8/6.28318',
            'r ≈ 10 m',
            'Check: C = 2π(10) = 20π ≈ 62.8 ✓'
        ],
        helper: 'To find radius from circumference, divide by 2π. Formula: r = C/(2π)',
        solution: 'r ≈ 10 m',
        realWorldContext: 'Like finding the radius of a circular running track when you know the distance around it',
        verificationTip: 'Always check your answer by calculating C = 2πr with your result'
    });

    // Problem 4: Find Radius from Area (Reverse with Square Root)
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Finding Radius from Area',
        problem: 'A circular pool has an area of 153.94 square feet. Find the radius.',
        parameters: { area: 153.94 },
        problemType: 'radius_from_area',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Reverse Circle Calculations with Square Roots',
            units: 'ft',
            realWorld: 'Determining pool dimensions from area specifications'
        },
        subparts: [
            'Given: area A = 153.94 ft²',
            'Formula: A = πr², solve for r',
            'Rearrange: r² = A/π',
            'Substitute: r² = 153.94/π',
            'Calculate: r² = 153.94/3.14159 ≈ 49',
            'Take square root: r = √49',
            'r = 7 ft',
            'Check: A = π(7²) = 49π ≈ 153.94 ✓'
        ],
        helper: 'To find radius from area: (1) Divide area by π, (2) Take square root. Formula: r = √(A/π)',
        solution: 'r = 7 ft',
        realWorldContext: 'Finding the radius of a circular pool when you know its surface area, or sizing a circular patio',
        keySteps: 'Remember: divide by π FIRST, then take square root. Two separate steps!'
    });

    // Problem 5: Semicircle Perimeter (Advanced Application)
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Semicircle Perimeter',
        problem: 'A semicircular window has a radius of 4 feet. Find the perimeter (total distance around the edge).',
        parameters: { radius: 4 },
        problemType: 'semicircle_perimeter',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Semicircle Calculations',
            units: 'ft',
            realWorld: 'Calculating trim or molding needed for semicircular shapes'
        },
        subparts: [
            'Given: semicircle with radius r = 4 ft',
            'Formula: P = πr + 2r (curved part + straight edge)',
            'Curved part (arc): πr = π(4) = 4π ≈ 12.57 ft',
            'Straight part (diameter): 2r = 2(4) = 8 ft',
            'Total perimeter: P = 4π + 8',
            'Calculate: P ≈ 12.57 + 8 = 20.57 ft',
            'Answer: P ≈ 20.57 ft or (4π + 8) ft exact'
        ],
        helper: 'Semicircle perimeter = curved part (πr) + straight diameter (2r). Don\'t forget the straight edge!',
        solution: 'P ≈ 20.57 ft (or 4π + 8 ft exact)',
        realWorldContext: 'Finding trim needed for a semicircular window, or fencing for a half-circle garden border',
        commonMistake: 'Many forget to add the diameter! Semicircle perimeter includes BOTH the arc AND the straight edge',
        visualTip: 'Draw the semicircle and trace around it - you go around the curve AND across the bottom'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED CIRCLE PROBLEMS USING WORKBOOKS ==============

function solveCircleRelatedProblems() {
    const problems = generateRelatedCircleProblems();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Circle Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedCircleAreaCircumferenceMathematicalWorkbook({
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
            piApproximation: 'exact',
            visualizeCircle: true,
            includeDerivations: true,
            includeHistoricalContext: true
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

            console.log(`    ✓ Solution: ${result.solutionValue || result.solution?.solution || result.solution?.approximateAnswer}`);
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

async function generateCircleComprehensiveDocument() {
    console.log('Generating Circle Area and Circumference Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Circle Area and Circumference Workbook',
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
            text: 'Circumference, Area, and Advanced Circle Calculations',
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
            text: 'Circle Problems (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const circleProblems = generateRelatedCircleProblems();
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
            text: 'Introduction to Circle Calculations',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'This comprehensive workbook contains 5 carefully selected circle geometry problems that progressively build your understanding of circumference and area calculations. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed mathematical explanations',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Common mistakes and error prevention strategies specific to circles',
        '• Self-check questions and metacognitive thinking prompts',
        '• Real-world applications and practical context for each concept',
        '• Alternative solution methods and computational approaches',
        '• Rigorous verification of solutions with formula checking',
        '• Pedagogical notes for deeper geometric understanding',
        '• Historical context about π and circle geometry',
        '• Visual representations and circle diagrams',
        '• Exact answers (in terms of π) and decimal approximations'
    ];

    features.forEach(feature => {
        documentChildren.push(
            new docx.Paragraph({
                text: feature,
                spacing: { after: 100 }
            })
        );
    });

    // ============== KEY FORMULAS SECTION ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Essential Circle Formulas',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    const formulas = [
        'Circumference from radius: C = 2πr',
        'Circumference from diameter: C = πd',
        'Area from radius: A = πr²',
        'Radius from circumference: r = C/(2π)',
        'Radius from area: r = √(A/π)',
        'Diameter to radius: r = d/2 or d = 2r',
        'Semicircle perimeter: P = πr + 2r',
        'Semicircle area: A = πr²/2',
        'Remember: π ≈ 3.14159...'
    ];

    formulas.forEach(formula => {
        documentChildren.push(
            new docx.Paragraph({
                text: `• ${formula}`,
                spacing: { after: 100 },
                shading: {
                    fill: "FFF3E0",
                    type: docx.ShadingType.CLEAR
                }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: '',
            spacing: { after: 300 }
        })
    );

    // ============== IMPORTANT REMINDERS ==============
    documentChildren.push(
        new docx.Paragraph({
            text: '⚠️ Critical Reminders',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 150 }
        })
    );

    const reminders = [
        '✓ Always SQUARE the radius when finding area (A = πr², not πr)',
        '✓ Circumference uses LINEAR units (cm, m, ft). Area uses SQUARE units (cm², m², ft²)',
        '✓ Don\'t forget the "2" in C = 2πr (easy to miss!)',
        '✓ Radius is HALF the diameter (r = d/2)',
        '✓ When finding radius from area, divide by π FIRST, then take square root',
        '✓ Semicircle perimeter includes the curved arc AND the straight diameter',
        '✓ Keep exact answers in terms of π when possible, approximate with decimals when needed'
    ];

    reminders.forEach(reminder => {
        documentChildren.push(
            new docx.Paragraph({
                text: reminder,
                spacing: { after: 100 }
            })
        );
    });

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Circle Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Circle Area and Circumference Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const circleSolved = solveCircleRelatedProblems();
    
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
                    fill: "E1F5FE",
                    type: docx.ShadingType.CLEAR
                }
            })
        );

        // Difficulty level and topic
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'Difficulty: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.difficulty.toUpperCase(),
                        color: solved.problem.difficulty === 'easy' ? '2E7D32' : '1565C0'
                    }),
                    new docx.TextRun({
                        text: ' | Topic: ',
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
                    fill: "FFFDE7",
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

        // Additional notes (pi note, common mistake, etc.)
        if (solved.problem.piNote) {
            documentChildren.push(
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            text: '📐 About π: ',
                            bold: true
                        }),
                        new docx.TextRun({
                            text: solved.problem.piNote,
                            italics: true
                        })
                    ],
                    spacing: { after: 150 },
                    shading: {
                        fill: "F3E5F5",
                        type: docx.ShadingType.CLEAR
                    }
                })
            );
        }

        if (solved.problem.commonMistake) {
            documentChildren.push(
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            text: '⚠️ Common Mistake: ',
                            bold: true,
                            color: 'D32F2F'
                        }),
                        new docx.TextRun({
                            text: solved.problem.commonMistake
                        })
                    ],
                    spacing: { after: 150 }
                })
            );
        }

        if (solved.problem.verificationTip) {
            documentChildren.push(
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            text: '✓ Verification Tip: ',
                            bold: true,
                            color: '388E3C'
                        }),
                        new docx.TextRun({
                            text: solved.problem.verificationTip
                        })
                    ],
                    spacing: { after: 150 }
                })
            );
        }

        if (solved.problem.keySteps) {
            documentChildren.push(
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            text: '🔑 Key Steps: ',
                            bold: true
                        }),
                        new docx.TextRun({
                            text: solved.problem.keySteps
                        })
                    ],
                    spacing: { after: 150 }
                })
            );
        }

        if (solved.problem.visualTip) {
            documentChildren.push(
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            text: '👁️ Visual Tip: ',
                            bold: true
                        }),
                        new docx.TextRun({
                            text: solved.problem.visualTip
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
                spacing: { before: 400, after: 200 },
                shading: {
                    fill: "E8F5E9",
                    type: docx.ShadingType.CLEAR
                }
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
                        text: '✓ Final Answer: ',
                        bold: true,
                        color: '1B5E20'
                    }),
                    new docx.TextRun({
                        text: solved.problem.solution,
                        bold: true,
                        color: '2E7D32'
                    })
                ],
                spacing: { before: 200, after: 400 },
                shading: {
                    fill: "C8E6C9",
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
            text: 'Congratulations on completing these 5 circle geometry problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered finding circumference from radius using C = 2πr',
        'You\'ve learned to calculate area using A = πr² (remembering to square the radius!)',
        'You\'ve practiced reverse calculations: finding radius from circumference and area',
        'You\'ve tackled semicircle perimeter (curved part + straight edge)',
        'You\'ve seen real-world applications of circle calculations',
        'You\'ve learned the difference between exact (π) and approximate decimal answers',
        'You\'ve understood the importance of proper units (linear vs. square)'
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
            text: 'Key Takeaways:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const keyTakeaways = [
        '🔵 Circumference is the distance AROUND the circle (perimeter)',
        '🔵 Area is the space INSIDE the circle',
        '🔵 Always square the radius for area: A = πr²',
        '🔵 Circumference uses 2πr (or πd), area uses πr²',
        '🔵 π ≈ 3.14159... is the ratio of circumference to diameter',
        '🔵 Units matter! Circumference = linear units, Area = square units',
        '🔵 To reverse: divide by π and/or take square root as needed'
    ];

    keyTakeaways.forEach(takeaway => {
        documentChildren.push(
            new docx.Paragraph({
                text: takeaway,
                spacing: { after: 100 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: 'Next Steps in Circle Geometry:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const nextSteps = [
        'Practice finding circumference and area from diameter',
        'Explore sectors and arc length (parts of circles)',
        'Study annulus (ring) area calculations',
        'Learn about 3D circles: cylinders, cones, and spheres',
        'Apply circle concepts to word problems',
        'Investigate the relationship between area and circumference',
        'Study circle theorems and properties in geometry',
        'Explore radian measure and circle trigonometry'
    ];

    nextSteps.forEach((step, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${step}`,
                spacing: { after: 100 }
            })
        );
    });

    // ============== FORMULA REFERENCE CARD ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Quick Formula Reference Card',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 },
            pageBreakBefore: true
        })
    );

    const formulaReference = [
        '📏 BASIC FORMULAS:',
        '   • Circumference: C = 2πr or C = πd',
        '   • Area: A = πr²',
        '   • Diameter: d = 2r',
        '',
        '🔄 REVERSE FORMULAS:',
        '   • Radius from C: r = C/(2π)',
        '   • Diameter from C: d = C/π',
        '   • Radius from A: r = √(A/π)',
        '',
        '🌓 SEMICIRCLE:',
        '   • Perimeter: P = πr + 2r',
        '   • Area: A = πr²/2',
        '',
        '📊 SECTOR (angle θ in degrees):',
        '   • Arc length: L = (θ/360) × 2πr',
        '   • Sector area: A = (θ/360) × πr²',
        '',
        '💍 ANNULUS (ring):',
        '   • Area: A = π(R² - r²) where R = outer radius, r = inner radius',
        '',
        '🔢 REMEMBER:',
        '   • π ≈ 3.14159265...',
        '   • Keep exact form (with π) when possible',
        '   • Use calculator approximation when needed'
    ];

    formulaReference.forEach(line => {
        documentChildren.push(
            new docx.Paragraph({
                text: line,
                spacing: { after: 80 },
                shading: line.startsWith('📏') || line.startsWith('🔄') || line.startsWith('🌓') || 
                        line.startsWith('📊') || line.startsWith('💍') || line.startsWith('🔢') ? 
                        { fill: "E3F2FD", type: docx.ShadingType.CLEAR } : undefined
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
        const filename = 'circle_area_circumference_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Circumference from Radius: 1 problem');
        console.log('    - Area from Radius: 1 problem');
        console.log('    - Radius from Circumference: 1 problem');
        console.log('    - Radius from Area: 1 problem');
        console.log('    - Semicircle Perimeter: 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 45-55 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with visual highlighting and difficulty level');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Special notes about π, common mistakes, and verification tips');
        console.log('  • Complete step-by-step solution with enhanced explanations');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Verification of solutions with detailed checking');
        console.log('  • Circle-specific concepts and learning objectives');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Historical context about π and circle geometry');
        console.log('  • Visual representations and circle diagrams');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary with exact and approximate answers');
        console.log('\n📐 SPECIAL FEATURES:');
        console.log('  • Essential Circle Formulas reference section');
        console.log('  • Critical Reminders checklist');
        console.log('  • Comprehensive Quick Formula Reference Card');
        console.log('  • Exact (π) and approximate (decimal) answers for all problems');
        console.log('  • Visual tips for understanding circle geometry');
        console.log('='.repeat(80) + '\n');
    } catch (error) {
        console.error(`\n❌ Error saving document: ${error.message}`);
        console.error(error.stack);
    }
}

// ============== RUN THE DOCUMENT GENERATION ==============

generateCircleComprehensiveDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});
