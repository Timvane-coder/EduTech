import { EnhancedCircleEquationMathematicalWorkbook } from './circle-equation-workbook.js';
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




// ============== CIRCLE EQUATIONS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedCircleEquations() {
    const relatedProblems = [];

    // Problem 1: Standard Form - Find Center and Radius
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Standard Form - Identify Center and Radius',
        problem: 'Find the center and radius of the circle: (x - 3)² + (y + 2)² = 25',
        parameters: { h: 3, k: -2, r: 5, rsquared: 25 },
        problemType: 'standard_form_identify',
        context: { 
            difficulty: 'beginner', 
            topic: 'Circle Equations in Standard Form',
            realWorld: 'Finding the location and coverage area of a GPS tower'
        },
        subparts: [
            'Given: (x - 3)² + (y + 2)² = 25',
            'Standard form: (x - h)² + (y - k)² = r²',
            'Step 1: Identify h from (x - 3)',
            '  Remember: (x - 3) means h = +3 (sign flips!)',
            '  Center x-coordinate: h = 3',
            'Step 2: Identify k from (y + 2)',
            '  Rewrite: (y + 2) = (y - (-2))',
            '  Center y-coordinate: k = -2',
            'Step 3: Find radius from r²',
            '  r² = 25',
            '  r = √25 = 5',
            'Answer: Center (3, -2), Radius 5'
        ],
        helper: 'Watch the signs! (x - h) has center at x = +h, and (y - k) has center at y = +k',
        solution: 'Center: (3, -2), Radius: 5',
        realWorldContext: 'Like a GPS tower at location (3, -2) with a 5-mile signal range'
    });

    // Problem 2: General Form - Convert to Standard Form
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'General Form - Complete the Square',
        problem: 'Convert to standard form and find center and radius: x² + y² - 6x + 4y - 3 = 0',
        parameters: { D: -6, E: 4, F: -3 },
        problemType: 'general_form_identify',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Converting General Form to Standard Form',
            realWorld: 'Analyzing circular coverage from raw sensor data'
        },
        subparts: [
            'Given: x² + y² - 6x + 4y - 3 = 0',
            'Step 1: Group x and y terms',
            '  (x² - 6x) + (y² + 4y) = 3',
            'Step 2: Complete the square for x',
            '  Take half of -6: (-6)/2 = -3',
            '  Square it: (-3)² = 9',
            '  Add 9 to both sides: (x² - 6x + 9) = (x - 3)²',
            'Step 3: Complete the square for y',
            '  Take half of 4: 4/2 = 2',
            '  Square it: 2² = 4',
            '  Add 4 to both sides: (y² + 4y + 4) = (y + 2)²',
            'Step 4: Simplify',
            '  (x - 3)² + (y + 2)² = 3 + 9 + 4',
            '  (x - 3)² + (y + 2)² = 16',
            'Step 5: Find center and radius',
            '  Center: (3, -2)',
            '  Radius: √16 = 4',
            'Answer: Center (3, -2), Radius 4'
        ],
        helper: 'When completing the square, add (coefficient/2)² to BOTH sides of the equation',
        solution: 'Standard form: (x - 3)² + (y + 2)² = 16; Center: (3, -2), Radius: 4',
        realWorldContext: 'Like converting raw GPS coordinates into a clear center point and coverage radius'
    });

    // Problem 3: Write Equation from Center and Radius
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Write Equation Given Center and Radius',
        problem: 'Write the equation of a circle with center (4, -1) and radius 6',
        parameters: { h: 4, k: -1, r: 6 },
        problemType: 'equation_from_center_radius',
        context: { 
            difficulty: 'beginner', 
            topic: 'Writing Circle Equations',
            realWorld: 'Designing a circular broadcast coverage area'
        },
        subparts: [
            'Given: Center (4, -1), Radius 6',
            'Formula: (x - h)² + (y - k)² = r²',
            'Step 1: Identify h = 4, k = -1, r = 6',
            'Step 2: Calculate r²',
            '  r² = 6² = 36',
            'Step 3: Substitute into formula',
            '  (x - 4)² + (y - (-1))² = 36',
            'Step 4: Simplify',
            '  (x - 4)² + (y + 1)² = 36',
            'Answer: (x - 4)² + (y + 1)² = 36'
        ],
        helper: 'Plug values directly into (x - h)² + (y - k)² = r²; remember to square the radius!',
        solution: '(x - 4)² + (y + 1)² = 36',
        realWorldContext: 'Like setting up a radio tower at (4, -1) that broadcasts 6 miles in all directions'
    });

    // Problem 4: Equation from Diameter Endpoints
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Write Equation Given Diameter Endpoints',
        problem: 'Find the equation of a circle whose diameter has endpoints (2, 3) and (8, 7)',
        parameters: { x1: 2, y1: 3, x2: 8, y2: 7 },
        problemType: 'equation_from_diameter',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Circle from Diameter',
            realWorld: 'Finding a circular path from two boundary points'
        },
        subparts: [
            'Given: Diameter endpoints (2, 3) and (8, 7)',
            'Step 1: Find center using midpoint formula',
            '  h = (x₁ + x₂)/2 = (2 + 8)/2 = 10/2 = 5',
            '  k = (y₁ + y₂)/2 = (3 + 7)/2 = 10/2 = 5',
            '  Center: (5, 5)',
            'Step 2: Find diameter using distance formula',
            '  d = √[(8-2)² + (7-3)²]',
            '  d = √[6² + 4²] = √[36 + 16] = √52',
            'Step 3: Find radius (half of diameter)',
            '  r = √52 / 2 = √13',
            '  r² = 13',
            'Step 4: Write equation',
            '  (x - 5)² + (y - 5)² = 13',
            'Answer: (x - 5)² + (y - 5)² = 13'
        ],
        helper: 'Center is the midpoint of diameter; radius is half the diameter length',
        solution: '(x - 5)² + (y - 5)² = 13',
        realWorldContext: 'Like finding the center and size of a circular pond given two opposite edge points'
    });

    // Problem 5: Area and Circumference from Equation
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Calculate Area and Circumference',
        problem: 'Find the area and circumference of the circle: (x + 2)² + (y - 3)² = 49',
        parameters: { h: -2, k: 3, r: 7 },
        problemType: 'area_circumference',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Circle Area and Circumference',
            realWorld: 'Calculating the size of a circular garden and fencing needed'
        },
        subparts: [
            'Given: (x + 2)² + (y - 3)² = 49',
            'Step 1: Find the radius',
            '  r² = 49',
            '  r = √49 = 7',
            'Step 2: Calculate area using A = πr²',
            '  A = π(7)²',
            '  A = 49π',
            '  A ≈ 49 × 3.14159 ≈ 153.94 square units',
            'Step 3: Calculate circumference using C = 2πr',
            '  C = 2π(7)',
            '  C = 14π',
            '  C ≈ 14 × 3.14159 ≈ 43.98 units',
            'Answer: Area = 49π ≈ 153.94 sq units',
            '        Circumference = 14π ≈ 43.98 units'
        ],
        helper: 'First find radius, then use A = πr² for area and C = 2πr for circumference',
        solution: 'Area: 49π ≈ 153.94 square units; Circumference: 14π ≈ 43.98 units',
        realWorldContext: 'Like calculating how much grass seed to buy (area) and how much fencing needed (circumference) for a circular garden'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveCircleRelatedProblems() {
    const problems = generateRelatedCircleEquations();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Circle Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedCircleEquationMathematicalWorkbook({
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

            console.log(`    ✓ Solution: ${problem.solution}`);
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
    console.log('Generating Circle Equations Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Circle Equations Workbook',
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
            text: 'Standard Form, General Form, and Applications',
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
            text: 'Circle Equations (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const circleProblems = generateRelatedCircleEquations();
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
            text: 'This workbook contains 5 carefully selected circle equation problems that progressively build your understanding of circle geometry. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed explanations',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Common mistakes and error prevention tips specific to circles',
        '• Self-check questions and thinking prompts',
        '• Real-world applications (GPS, broadcasting, design)',
        '• Alternative solution methods',
        '• Verification of solutions with geometric checks',
        '• Pedagogical notes for deeper understanding',
        '• Visual representations and graphing guidance'
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
            text: 'Key Concepts Covered:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const concepts = [
        '📐 Standard Form: (x - h)² + (y - k)² = r²',
        '📝 General Form: x² + y² + Dx + Ey + F = 0',
        '🔄 Converting between forms using completing the square',
        '📍 Finding center and radius from equations',
        '✏️ Writing equations from given information',
        '📊 Calculating area (A = πr²) and circumference (C = 2πr)',
        '⚠️ Common sign errors and how to avoid them',
        '🌍 Real-world applications of circle equations'
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
    console.log('\nProcessing Circle Equations Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Circle Equations Problems',
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
                        color: solved.problem.difficulty === 'easy' ? '2E7D32' : '1976D2'
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
            text: 'Congratulations on completing these 5 circle equation problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered identifying center and radius from standard form',
        'You\'ve learned to convert general form to standard form by completing the square',
        'You\'ve practiced writing circle equations from given information',
        'You\'ve calculated area and circumference from circle equations',
        'You\'ve seen real-world applications of circles (GPS, broadcasting, design)',
        'You\'ve learned to avoid common sign errors in circle equations'
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
            text: 'Key Formulas to Remember:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const formulas = [
        '• Standard Form: (x - h)² + (y - k)² = r² where center is (h, k) and radius is r',
        '• General Form: x² + y² + Dx + Ey + F = 0',
        '• Converting: h = -D/2, k = -E/2, r² = h² + k² - F',
        '• Area: A = πr²',
        '• Circumference: C = 2πr',
        '• Distance Formula: d = √[(x₂ - x₁)² + (y₂ - y₁)²]',
        '• Midpoint Formula: ((x₁ + x₂)/2, (y₁ + y₂)/2)'
    ];

    formulas.forEach(formula => {
        documentChildren.push(
            new docx.Paragraph({
                text: formula,
                spacing: { after: 100 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: 'Common Mistakes to Avoid:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const mistakes = [
        '❌ Sign errors: (x - 3) means h = +3, not -3 (the sign flips!)',
        '❌ Forgetting to take square root: r = √(r²), not just r²',
        '❌ Not adding to both sides when completing the square',
        '❌ Confusing radius with diameter (radius is half the diameter)',
        '❌ Using r instead of r² in the equation',
        '❌ Arithmetic errors in completing the square'
    ];

    mistakes.forEach(mistake => {
        documentChildren.push(
            new docx.Paragraph({
                text: mistake,
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
        'Practice more problems with circles not centered at the origin',
        'Explore circle-line intersections (tangents and secants)',
        'Learn about tangent lines to circles',
        'Study systems of circle equations (two circles intersecting)',
        'Apply circle equations to real-world geometry problems',
        'Investigate parametric and polar forms of circles',
        'Explore relationships between circles and other conic sections'
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

    const tips = [
        '🎯 Always sketch the circle when possible - visual understanding helps!',
        '📝 Write out the formulas before starting each problem',
        '✅ Check your answers by substituting points back into the equation',
        '🔄 Practice converting between forms until it becomes automatic',
        '⚠️ Pay special attention to signs - they are the most common source of errors',
        '📐 Remember the geometric meaning: circle is all points equidistant from center'
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
        const filename = 'circle_equations_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Standard Form Identification: 1 problem');
        console.log('    - General Form Conversion: 1 problem');
        console.log('    - Writing Equations from Properties: 2 problems');
        console.log('    - Area and Circumference: 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 45-55 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and visual highlighting');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Complete step-by-step solution with enhanced explanations');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Verification of solutions with geometric checking');
        console.log('  • Key concepts and circle-specific formulas');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary');
        console.log('  • Visual representations and graphing guidance');
        console.log('\n🎓 LEARNING OBJECTIVES COVERED:');
        console.log('  • Master standard form (x - h)² + (y - k)² = r²');
        console.log('  • Convert between standard and general forms');
        console.log('  • Complete the square for circle equations');
        console.log('  • Write equations from geometric properties');
        console.log('  • Calculate area and circumference from equations');
        console.log('  • Avoid common sign errors and mistakes');
        console.log('  • Apply circles to real-world problems');
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


