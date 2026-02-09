import { EnhancedCircleChordLengthMathematicalWorkbook } from './chord-length-workbook.js';
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




// ============== CHORD LENGTH - RELATED PROBLEMS GENERATOR ==============

function generateRelatedChordLengthProblems() {
    const relatedProblems = [];

    // Problem 1: Basic Chord from Radius and Distance
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Chord Length from Radius and Distance',
        problem: 'A circle has radius 10 cm. A chord is 6 cm from the center. Find the chord length.',
        parameters: { r: 10, d: 6 },
        problemType: 'chord_from_radius_distance',
        context: { 
            difficulty: 'beginner', 
            topic: 'Basic Chord Calculations',
            units: 'cm',
            realWorld: 'Finding width of circular tunnel at given height'
        },
        subparts: [
            'Given: Radius r = 10 cm, Distance from center d = 6 cm',
            'Formula: c = 2√(r² - d²)',
            'Step 1: Calculate r² = 10² = 100',
            'Step 2: Calculate d² = 6² = 36',
            'Step 3: Subtract: 100 - 36 = 64',
            'Step 4: Take square root: √64 = 8',
            'Step 5: Multiply by 2: c = 2 × 8 = 16 cm',
            'Verification: Check using Pythagorean theorem',
            'r² = d² + (c/2)² → 100 = 36 + 64 ✓'
        ],
        helper: 'Remember: Always use HALF the chord (c/2) in the Pythagorean theorem calculation',
        solution: 'c = 16 cm',
        realWorldContext: 'Like finding the width of a circular tunnel 6 meters below the center when the tunnel has a 10-meter radius',
        diagram: 'Circle with radius 10, perpendicular distance 6, and chord forming right triangle',
        keyFormula: 'c = 2√(r² - d²)'
    });

    // Problem 2: Chord from Radius and Central Angle
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Chord Length from Central Angle',
        problem: 'In a circle of radius 12 cm, find the chord length subtended by a central angle of 60°.',
        parameters: { r: 12, angle: 60, angleUnit: 'degrees' },
        problemType: 'chord_from_radius_angle',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Angle-Based Chord Calculations',
            units: 'cm',
            realWorld: 'Calculating straight-line distance in circular paths'
        },
        subparts: [
            'Given: Radius r = 12 cm, Central angle θ = 60°',
            'Formula: c = 2r × sin(θ/2)',
            '⚠️ CRITICAL: Ensure calculator is in DEGREE mode!',
            'Step 1: Divide angle by 2: θ/2 = 60°/2 = 30°',
            'Step 2: Calculate sin(30°) = 0.5',
            'Step 3: Multiply by 2r: c = 2(12) × 0.5',
            'Step 4: Calculate: c = 24 × 0.5 = 12 cm',
            'Note: This creates an equilateral triangle (chord = radius)',
            'Verification: For 60° central angle, chord equals radius ✓'
        ],
        helper: 'Use sin(θ/2), NOT sin(θ)! The perpendicular from center bisects the angle.',
        solution: 'c = 12 cm',
        realWorldContext: 'Like finding the straight-line distance between two points on a circular track separated by 60 degrees',
        diagram: 'Circle showing central angle 60°, two radii, and chord forming isosceles triangle',
        keyFormula: 'c = 2r × sin(θ/2)',
        specialNote: 'For 60° central angle, the chord equals the radius, forming an equilateral triangle!'
    });

    // Problem 3: Finding Distance from Chord and Radius (Reverse Calculation)
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Distance from Center to Chord',
        problem: 'A circle has radius 13 cm. A chord has length 24 cm. How far is the chord from the center?',
        parameters: { r: 13, c: 24 },
        problemType: 'distance_from_chord_radius',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Reverse Chord Calculations',
            units: 'cm',
            realWorld: 'Finding height of water in circular pipe given surface width'
        },
        subparts: [
            'Given: Radius r = 13 cm, Chord length c = 24 cm',
            'Formula: d = √(r² - (c/2)²)',
            'Step 1: Divide chord by 2: c/2 = 24/2 = 12 cm',
            'Step 2: Calculate r² = 13² = 169',
            'Step 3: Calculate (c/2)² = 12² = 144',
            'Step 4: Subtract: 169 - 144 = 25',
            'Step 5: Take square root: d = √25 = 5 cm',
            'Verification: Check 13² = 5² + 12² → 169 = 25 + 144 ✓',
            'Note: This is a 5-12-13 Pythagorean triple!'
        ],
        helper: 'This is rearranging the basic formula. Remember to use (c/2)², not c²!',
        solution: 'd = 5 cm',
        realWorldContext: 'Like finding how deep water is in a circular pipe when the water surface is 24 cm wide and the pipe radius is 13 cm',
        diagram: 'Circle with chord 24 cm, radius 13 cm, perpendicular distance showing 5-12-13 triangle',
        keyFormula: 'd = √(r² - (c/2)²)',
        specialNote: 'This problem uses the famous 5-12-13 Pythagorean triple!'
    });

    // Problem 4: Arch Bridge with Sagitta (Segment Height)
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Arch Bridge Radius Calculation',
        problem: 'An arch bridge has a span of 30 meters and rises 5 meters at the center. Find the radius of the circular arch.',
        parameters: { c: 30, h: 5 },
        problemType: 'chord_sagitta',
        context: { 
            difficulty: 'advanced', 
            topic: 'Circular Segment Applications',
            units: 'meters',
            realWorld: 'Bridge and dome design calculations'
        },
        subparts: [
            'Given: Span (chord) c = 30 m, Height (sagitta) h = 5 m',
            'Formula: r = (c²/(8h)) + (h/2)',
            'Step 1: Calculate c² = 30² = 900',
            'Step 2: Calculate 8h = 8 × 5 = 40',
            'Step 3: Divide: c²/(8h) = 900/40 = 22.5',
            'Step 4: Calculate h/2 = 5/2 = 2.5',
            'Step 5: Add: r = 22.5 + 2.5 = 25 meters',
            'Verification: Distance from center d = r - h = 25 - 5 = 20 m',
            'Check: c = 2√(r² - d²) = 2√(625 - 400) = 2√225 = 2(15) = 30 ✓'
        ],
        helper: 'The sagitta formula combines two parts: (chord contribution)/(8×height) + (height/2)',
        solution: 'r = 25 meters',
        realWorldContext: 'Essential for designing arch bridges - the radius determines the curvature and structural properties of the arch',
        diagram: 'Arch showing 30m span at base, 5m height at center, radius of 25m',
        keyFormula: 'r = (c²/(8h)) + (h/2)',
        applicationNote: 'Used by architects and civil engineers in bridge, dome, and arch design'
    });

    // Problem 5: Finding Radius from Chord and Distance
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Finding Circle Radius',
        problem: 'A chord of length 16 cm is 6 cm from the center of a circle. Find the radius.',
        parameters: { c: 16, d: 6 },
        problemType: 'radius_from_chord_distance',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Reverse Chord Calculations',
            units: 'cm',
            realWorld: 'Determining circle size from partial measurements'
        },
        subparts: [
            'Given: Chord length c = 16 cm, Distance from center d = 6 cm',
            'Formula: r = √((c/2)² + d²)',
            'Step 1: Divide chord by 2: c/2 = 16/2 = 8 cm',
            'Step 2: Calculate (c/2)² = 8² = 64',
            'Step 3: Calculate d² = 6² = 36',
            'Step 4: Add: 64 + 36 = 100',
            'Step 5: Take square root: r = √100 = 10 cm',
            'Verification: Check c = 2√(r² - d²) = 2√(100 - 36) = 2√64 = 16 ✓',
            'Note: This is a 6-8-10 right triangle (scaled 3-4-5 triple)'
        ],
        helper: 'This formula comes directly from the Pythagorean theorem: r² = d² + (c/2)²',
        solution: 'r = 10 cm',
        realWorldContext: 'Like finding the full size of a circular object when you can only measure a chord and its distance from center',
        diagram: 'Circle construction showing chord 16 cm, distance 6 cm, radius 10 cm with 6-8-10 triangle',
        keyFormula: 'r = √((c/2)² + d²)',
        specialNote: 'Another Pythagorean triple: 6-8-10 is the 3-4-5 triple doubled!'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveChordLengthRelatedProblems() {
    const problems = generateRelatedChordLengthProblems();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Chord Length Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedCircleChordLengthMathematicalWorkbook({
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
            includeHistoricalContext: true,
            includeCrossCurricularLinks: true
        });

        try {
            // Solve the problem
            const result = workbook.solveChordProblem({
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

            console.log(`    ✓ Solution: ${result.solutionValue} ${problem.context.units}`);
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

async function generateChordLengthDocument() {
    console.log('Generating Circle Chord Length Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Circle Chord Length Workbook',
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
            text: 'Basic Chords, Angle-Based, Reverse Calculations, and Sagitta',
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
            text: 'Circle Chord Length Problems (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const chordProblems = generateRelatedChordLengthProblems();
    chordProblems.forEach((problem, index) => {
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
            text: 'This workbook contains 5 carefully selected circle chord length problems that progressively build your understanding of chord geometry. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed geometric explanations',
        '• Geometric diagrams showing right triangles and circle relationships',
        '• Multiple explanation styles (conceptual, procedural, visual, geometric, algebraic)',
        '• Common mistakes specific to chord calculations and error prevention tips',
        '• Self-check questions and thinking prompts for deeper understanding',
        '• Real-world applications in engineering, architecture, and design',
        '• Alternative solution methods (Pythagorean, trigonometric, coordinate geometry)',
        '• Verification using multiple methods',
        '• Historical context of chord geometry development',
        '• Cross-curricular connections to physics, engineering, and architecture',
        '• Pedagogical notes with teaching strategies',
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

    // ============== KEY CONCEPTS SECTION ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Key Concepts You\'ll Learn',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    const keyConcepts = [
        {
            concept: 'Pythagorean Relationship',
            description: 'Understanding r² = d² + (c/2)² and its variations'
        },
        {
            concept: 'Perpendicular Bisector Theorem',
            description: 'A perpendicular from center bisects the chord'
        },
        {
            concept: 'Trigonometric Approach',
            description: 'Using c = 2r sin(θ/2) for angle-based problems'
        },
        {
            concept: 'Sagitta (Segment Height)',
            description: 'Calculating arch heights and radii using r = (c²/(8h)) + (h/2)'
        },
        {
            concept: 'Reverse Calculations',
            description: 'Finding radius or distance when other values are known'
        }
    ];

    keyConcepts.forEach(item => {
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: `${item.concept}: `,
                        bold: true
                    }),
                    new docx.TextRun({
                        text: item.description
                    })
                ],
                spacing: { after: 150 }
            })
        );
    });

    // ============== IMPORTANT REMINDERS ==============
    documentChildren.push(
        new docx.Paragraph({
            text: '⚠️ Critical Reminders',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    const reminders = [
        'Always use HALF the chord (c/2) in Pythagorean calculations, not the full chord',
        'For angle problems, use sin(θ/2), NOT sin(θ) - divide the angle by 2 first',
        'Check your calculator mode (DEG vs RAD) before trigonometric calculations',
        'Verify physical constraints: chord length must be ≤ diameter (c ≤ 2r)',
        'Verify distance from center must be < radius (d < r)',
        'Draw a diagram for every problem showing the right triangle',
        'Label radius, distance, and half-chord clearly on your diagram'
    ];

    reminders.forEach((reminder, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${reminder}`,
                spacing: { after: 100 },
                shading: {
                    fill: "FFF3E0",
                    type: docx.ShadingType.CLEAR
                }
            })
        );
    });

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Circle Chord Length Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Circle Chord Length Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const chordSolved = solveChordLengthRelatedProblems();
    
    chordSolved.forEach((solved, index) => {
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

        // Key formula
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: '📐 Key Formula: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.keyFormula,
                        italics: true,
                        color: '1565C0'
                    })
                ],
                spacing: { after: 150 },
                shading: {
                    fill: "F3E5F5",
                    type: docx.ShadingType.CLEAR
                }
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
                        text: '🌍 Real-World Application: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.realWorldContext
                    })
                ],
                spacing: { after: 200 }
            })
        );

        // Diagram description
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: '📊 Diagram to Draw: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.diagram,
                        italics: true
                    })
                ],
                spacing: { after: 300 },
                shading: {
                    fill: "E8F5E9",
                    type: docx.ShadingType.CLEAR
                }
            })
        );

        // Special note if exists
        if (solved.problem.specialNote) {
            documentChildren.push(
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            text: '⭐ Special Note: ',
                            bold: true,
                            color: 'F57C00'
                        }),
                        new docx.TextRun({
                            text: solved.problem.specialNote,
                            color: 'F57C00'
                        })
                    ],
                    spacing: { after: 300 },
                    shading: {
                        fill: "FFF8E1",
                        type: docx.ShadingType.CLEAR
                    }
                })
            );
        }

        // Application note if exists
        if (solved.problem.applicationNote) {
            documentChildren.push(
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            text: '🏗️ Professional Application: ',
                            bold: true
                        }),
                        new docx.TextRun({
                            text: solved.problem.applicationNote
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
            // Check if this is a warning line
            const isWarning = subpart.includes('⚠️') || subpart.includes('CRITICAL');
            
            documentChildren.push(
                new docx.Paragraph({
                    text: subpart,
                    spacing: { after: 100 },
                    bullet: {
                        level: 0
                    },
                    ...(isWarning && {
                        shading: {
                            fill: "FFEBEE",
                            type: docx.ShadingType.CLEAR
                        }
                    })
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
                        color: '2E7D32',
                        size: 28
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

    // ============== FORMULA REFERENCE SECTION ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Formula Reference Guide',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const formulas = [
        {
            name: 'Chord from Radius and Distance',
            formula: 'c = 2√(r² - d²)',
            when: 'When you know the radius and perpendicular distance from center to chord',
            remember: 'Use HALF the chord in the Pythagorean theorem'
        },
        {
            name: 'Distance from Chord and Radius',
            formula: 'd = √(r² - (c/2)²)',
            when: 'When you know the radius and chord length, finding distance from center',
            remember: 'Rearrangement of the basic Pythagorean relationship'
        },
        {
            name: 'Radius from Chord and Distance',
            formula: 'r = √((c/2)² + d²)',
            when: 'When you know the chord length and distance from center',
            remember: 'Direct application of Pythagorean theorem'
        },
        {
            name: 'Chord from Angle',
            formula: 'c = 2r × sin(θ/2)',
            when: 'When you know the radius and central angle',
            remember: 'Use HALF the angle! Check calculator mode (DEG/RAD)'
        },
        {
            name: 'Radius from Chord and Sagitta',
            formula: 'r = (c²/(8h)) + (h/2)',
            when: 'When you know the chord (span) and sagitta (height)',
            remember: 'Essential for arch and dome design. Two terms: chord contribution + height contribution'
        },
        {
            name: 'Chord from Radius and Sagitta',
            formula: 'c = 2√(h(2r - h))',
            when: 'When you know the radius and sagitta',
            remember: 'Derived from combining sagitta definition with Pythagorean theorem'
        }
    ];

    formulas.forEach((item, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${item.name}`,
                heading: docx.HeadingLevel.HEADING_3,
                spacing: { before: 300, after: 150 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'Formula: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: item.formula,
                        italics: true,
                        color: '1565C0',
                        size: 26
                    })
                ],
                spacing: { after: 100 },
                shading: {
                    fill: "E3F2FD",
                    type: docx.ShadingType.CLEAR
                }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'When to use: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: item.when
                    })
                ],
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'Remember: ',
                        bold: true,
                        color: 'F57C00'
                    }),
                    new docx.TextRun({
                        text: item.remember,
                        color: 'F57C00'
                    })
                ],
                spacing: { after: 200 },
                shading: {
                    fill: "FFF8E1",
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
            text: 'Congratulations on completing these 5 circle chord length problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered the basic Pythagorean approach to chord calculations',
        'You\'ve learned trigonometric methods using central angles',
        'You\'ve practiced reverse calculations (finding radius or distance)',
        'You\'ve applied sagitta formulas to practical arch and bridge problems',
        'You\'ve seen real-world applications in engineering and architecture',
        'You\'ve learned to avoid common mistakes (using c instead of c/2, wrong angle)',
        'You\'ve understood the geometric relationships through diagrams and proofs'
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
        'Practice more problems with different radius and distance combinations',
        'Explore intersecting chords theorem and power of a point',
        'Study circular segments and sector area calculations',
        'Apply chord geometry to navigation and astronomy problems',
        'Learn about inscribed angles and their relationship to chords',
        'Investigate 3D applications: spherical chords and great circles',
        'Design your own arch bridge or dome using sagitta calculations'
    ];

    nextSteps.forEach((step, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${step}`,
                spacing: { after: 100 }
            })
        );
    });

    // ============== PRACTICE TIPS ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Practice Tips for Mastery',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    const practiceTips = [
        'Always draw a diagram first - visualization is key to understanding',
        'Label all known values clearly: r, d, c, θ, h',
        'Check physical constraints before solving (d < r, c < 2r)',
        'Write (c/2) explicitly in your work to avoid the most common mistake',
        'For angle problems, verify calculator mode before every calculation',
        'Use Pythagorean triples (3-4-5, 5-12-13, 8-15-17) to check answers',
        'Verify your answer using an alternative method when possible',
        'Connect each problem to a real-world scenario for better retention'
    ];

    practiceTips.forEach((tip, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${tip}`,
                spacing: { after: 120 }
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
        const filename = 'circle_chord_length_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Basic Chord (Pythagorean): 1 problem');
        console.log('    - Angle-Based (Trigonometric): 1 problem');
        console.log('    - Reverse Calculations: 2 problems');
        console.log('    - Sagitta (Arch/Segment): 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 50-60 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with visual highlighting and difficulty level');
        console.log('  • Key formula prominently displayed');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context with engineering/architecture applications');
        console.log('  • Diagram description for geometric visualization');
        console.log('  • Complete step-by-step solution with enhanced explanations');
        console.log('  • Multiple explanation styles (conceptual, geometric, visual, algebraic)');
        console.log('  • Verification using Pythagorean theorem and physical checks');
        console.log('  • Key geometric concepts and theorems');
        console.log('  • Common mistakes specific to chord calculations');
        console.log('  • Error prevention strategies (c/2 usage, calculator mode, etc.)');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods (coordinate geometry, trig, etc.)');
        console.log('  • Historical context of chord geometry');
        console.log('  • Cross-curricular connections (physics, engineering, architecture)');
        console.log('  • Pedagogical notes with teaching strategies');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary');
        console.log('\n📐 BONUS SECTIONS:');
        console.log('  • Comprehensive formula reference guide with 6 key formulas');
        console.log('  • When to use each formula and critical reminders');
        console.log('  • Practice tips for mastery');
        console.log('  • Summary of learning outcomes');
        console.log('  • Next steps for continued learning');
        console.log('='.repeat(80) + '\n');
    } catch (error) {
        console.error(`\n❌ Error saving document: ${error.message}`);
        console.error(error.stack);
    }
}

// ============== RUN THE DOCUMENT GENERATION ==============

generateChordLengthDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});
