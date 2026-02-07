import { EnhancedTrianglePerimeterMathematicalWorkbook } from './triangle-perimeter-workbook.js';
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




// ============== TRIANGLE PERIMETER - RELATED PROBLEMS GENERATOR ==============

function generateRelatedTrianglePerimeterProblems() {
    const relatedProblems = [];

    // Problem 1: Basic Triangle Perimeter (Three Sides Given)
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Basic Triangle Perimeter',
        problem: 'Find the perimeter of a triangle with sides 5 cm, 7 cm, and 9 cm',
        sides: [5, 7, 9],
        units: 'cm',
        problemType: 'three_sides_given',
        context: { 
            difficulty: 'beginner', 
            topic: 'Basic Triangle Perimeter',
            realWorld: 'Finding total distance around a triangular shape'
        },
        subparts: [
            'Given: Triangle with sides a = 5 cm, b = 7 cm, c = 9 cm',
            'Formula: Perimeter = a + b + c',
            'Substitute: P = 5 + 7 + 9',
            'Calculate: P = 21 cm',
            'Verify: 21 > 5, 21 > 7, 21 > 9 ✓',
            'Check triangle inequality: 5+7=12>9 ✓, 5+9=14>7 ✓, 7+9=16>5 ✓'
        ],
        helper: 'Simply add all three sides together to get the perimeter',
        solution: 'Perimeter = 21 cm',
        realWorldContext: 'Like measuring how much fencing you need for a triangular garden plot'
    });

    // Problem 2: Equilateral Triangle Perimeter
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Equilateral Triangle Perimeter',
        problem: 'Find the perimeter of an equilateral triangle with side length 8 m',
        sides: [8, 8, 8],
        units: 'm',
        problemType: 'equilateral',
        context: { 
            difficulty: 'beginner', 
            topic: 'Equilateral Triangle Perimeter',
            realWorld: 'Calculating borders for symmetric triangular shapes'
        },
        subparts: [
            'Given: Equilateral triangle with side s = 8 m',
            'Property: All three sides are equal in equilateral triangle',
            'Formula: P = 3s (shortcut for equal sides)',
            'Substitute: P = 3 × 8',
            'Calculate: P = 24 m',
            'Verify: Each side is 8 m, total = 8 + 8 + 8 = 24 m ✓'
        ],
        helper: 'For equilateral triangles, multiply one side by 3 since all sides are equal',
        solution: 'Perimeter = 24 m',
        realWorldContext: 'Like finding the border length for a triangular traffic sign with equal sides'
    });

    // Problem 3: Isosceles Triangle Perimeter
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Isosceles Triangle Perimeter',
        problem: 'Find the perimeter of an isosceles triangle with equal sides of 10 ft and base of 12 ft',
        sides: [10, 10, 12],
        units: 'ft',
        problemType: 'isosceles',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Isosceles Triangle Perimeter',
            realWorld: 'Calculating perimeter of symmetric triangular structures'
        },
        subparts: [
            'Given: Isosceles triangle with equal sides a = 10 ft, base b = 12 ft',
            'Property: Two sides are equal (legs), one is different (base)',
            'Formula: P = 2a + b',
            'Substitute: P = 2(10) + 12',
            'Calculate: P = 20 + 12 = 32 ft',
            'Verify: 10+10=20>12 ✓, 10+12=22>10 ✓ (triangle inequality satisfied)',
            'Check: 10 + 10 + 12 = 32 ft ✓'
        ],
        helper: 'Double the equal side and add the base: P = 2(equal side) + base',
        solution: 'Perimeter = 32 ft',
        realWorldContext: 'Like calculating trim needed for a triangular roof section with two equal sides'
    });

    // Problem 4: Right Triangle Perimeter (Given Legs)
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Right Triangle Perimeter',
        problem: 'Find the perimeter of a right triangle with legs 6 cm and 8 cm',
        legs: [6, 8],
        units: 'cm',
        problemType: 'right_triangle_legs',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Right Triangle Perimeter using Pythagorean Theorem',
            realWorld: 'Calculating perimeter when working with right angles'
        },
        subparts: [
            'Given: Right triangle with legs a = 6 cm, b = 8 cm',
            'Step 1: Find hypotenuse using Pythagorean theorem',
            'Formula: c² = a² + b²',
            'Calculate: c² = 6² + 8² = 36 + 64 = 100',
            'Take square root: c = √100 = 10 cm',
            'Step 2: Calculate perimeter',
            'P = a + b + c = 6 + 8 + 10',
            'P = 24 cm',
            'Verify: 6² + 8² = 36 + 64 = 100 = 10² ✓ (Pythagorean theorem holds)'
        ],
        helper: 'First use Pythagorean theorem (a² + b² = c²) to find hypotenuse, then add all three sides',
        solution: 'Perimeter = 24 cm',
        realWorldContext: 'Like finding total lumber needed for a right-angled corner brace in construction'
    });

    // Problem 5: Right Triangle with Leg and Hypotenuse
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Right Triangle (Leg and Hypotenuse Given)',
        problem: 'Find the perimeter of a right triangle with one leg 5 in and hypotenuse 13 in',
        leg: 5,
        hypotenuse: 13,
        units: 'in',
        problemType: 'right_triangle_leg_hypotenuse',
        context: { 
            difficulty: 'advanced', 
            topic: 'Right Triangle Perimeter with Missing Leg',
            realWorld: 'Solving real-world right triangle problems with partial information'
        },
        subparts: [
            'Given: Right triangle with leg a = 5 in, hypotenuse c = 13 in',
            'Find: Other leg b and perimeter',
            'Step 1: Find missing leg using Pythagorean theorem',
            'Formula: a² + b² = c²  →  b² = c² - a²',
            'Calculate: b² = 13² - 5² = 169 - 25 = 144',
            'Take square root: b = √144 = 12 in',
            'Step 2: Calculate perimeter',
            'P = a + b + c = 5 + 12 + 13',
            'P = 30 in',
            'Verify: 5² + 12² = 25 + 144 = 169 = 13² ✓',
            'Note: This is a 5-12-13 Pythagorean triple!'
        ],
        helper: 'Use b² = c² - a² to find the missing leg, then add all three sides for perimeter',
        solution: 'Perimeter = 30 in',
        realWorldContext: 'Like determining materials needed for a ladder setup where you know the ladder length and distance from wall'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveTrianglePerimeterRelatedProblems() {
    const problems = generateRelatedTrianglePerimeterProblems();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Triangle Perimeter Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedTrianglePerimeterMathematicalWorkbook({
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
            // Prepare config based on problem type
            const config = {
                description: problem.problem,
                triangleType: problem.problemType,
                units: problem.units,
                context: problem.context
            };

            // Add type-specific parameters
            if (problem.sides) {
                config.sides = problem.sides;
            }
            if (problem.legs) {
                const result = { legs: problem.legs };
                config.sides = problem.legs; // Add for initial parsing
            }
            if (problem.leg && problem.hypotenuse) {
                config.sides = [problem.leg]; // Will be enhanced by solver
            }

            // Solve the problem
            const result = workbook.solveTrianglePerimeterProblem(config);

            solvedProblems.push({
                problem: problem,
                workbook: workbook,
                result: result
            });

            console.log(`    ✓ Solution: ${result.perimeter} ${problem.units}`);
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
    console.log('Generating Triangle Perimeter Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Triangle Perimeter Calculations Workbook',
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
            text: 'Basic, Equilateral, Isosceles, and Right Triangles',
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
            text: 'Triangle Perimeter Problems (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const triangleProblems = generateRelatedTrianglePerimeterProblems();
    triangleProblems.forEach((problem, index) => {
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
            text: 'This workbook contains 5 carefully selected triangle perimeter problems that progressively build your understanding of different triangle types and calculation methods. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed geometric explanations',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Triangle type identification and properties',
        '• Common mistakes and error prevention strategies',
        '• Self-check questions and geometric thinking prompts',
        '• Real-world applications with practical contexts',
        '• Alternative solution methods and approaches',
        '• Pythagorean theorem applications for right triangles',
        '• Triangle inequality verification',
        '• Pedagogical notes for deeper geometric understanding'
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
        '✓ Basic triangle perimeter: P = a + b + c',
        '✓ Equilateral triangles: P = 3s (all sides equal)',
        '✓ Isosceles triangles: P = 2a + b (two sides equal)',
        '✓ Right triangles: Using Pythagorean theorem to find missing sides',
        '✓ Triangle inequality theorem and validation'
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
    console.log('\nProcessing Triangle Perimeter Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Triangle Perimeter Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const triangleSolved = solveTrianglePerimeterRelatedProblems();
    
    triangleSolved.forEach((solved, index) => {
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
        const difficultyColor = 
            solved.problem.difficulty === 'easy' ? '2E7D32' : 
            solved.problem.difficulty === 'medium' ? '1976D2' : 
            'D32F2F';

        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'Difficulty: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.difficulty.toUpperCase(),
                        color: difficultyColor,
                        bold: true
                    })
                ],
                spacing: { after: 100 }
            })
        );

        // Triangle type indicator
        if (solved.problem.problemType) {
            let triangleType = '';
            if (solved.problem.problemType === 'three_sides_given') triangleType = 'General Triangle (Scalene)';
            if (solved.problem.problemType === 'equilateral') triangleType = 'Equilateral Triangle (All sides equal)';
            if (solved.problem.problemType === 'isosceles') triangleType = 'Isosceles Triangle (Two sides equal)';
            if (solved.problem.problemType.includes('right_triangle')) triangleType = 'Right Triangle (90° angle)';

            documentChildren.push(
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            text: '📐 Triangle Type: ',
                            bold: true
                        }),
                        new docx.TextRun({
                            text: triangleType,
                            italics: true
                        })
                    ],
                    spacing: { after: 100 }
                })
            );
        }

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
            text: 'Congratulations on completing these 5 triangle perimeter problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered basic triangle perimeter calculations (sum of all three sides)',
        'You\'ve learned to work with equilateral triangles using the shortcut P = 3s',
        'You\'ve practiced isosceles triangle perimeters with the formula P = 2a + b',
        'You\'ve applied the Pythagorean theorem to find missing sides in right triangles',
        'You\'ve verified triangle inequality and learned when sides can form valid triangles',
        'You\'ve seen real-world applications from fencing to construction'
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
            text: 'Key Formulas Mastered:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const formulas = [
        'Basic Triangle: P = a + b + c',
        'Equilateral: P = 3s',
        'Isosceles: P = 2a + b',
        'Pythagorean Theorem: a² + b² = c²',
        'Triangle Inequality: a + b > c (for any two sides and third side)'
    ];

    formulas.forEach(formula => {
        documentChildren.push(
            new docx.Paragraph({
                text: `📐 ${formula}`,
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
        'Practice with coordinate geometry: find perimeter from vertex coordinates',
        'Work on problems with mixed units (converting cm, m, mm)',
        'Explore triangle area calculations using Heron\'s formula',
        'Study special right triangles (30-60-90, 45-45-90)',
        'Apply triangle concepts to real-world surveying and construction problems',
        'Advance to perimeters of other polygons (quadrilaterals, pentagons, etc.)',
        'Explore relationships between perimeter and area in similar triangles'
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
        '✏️ Always draw a diagram and label all known sides',
        '✏️ Check triangle inequality before calculating perimeter',
        '✏️ For right triangles, verify your answer with the Pythagorean theorem',
        '✏️ Include units in every step and in your final answer',
        '✏️ Double-check arithmetic, especially with decimals and square roots',
        '✏️ Recognize Pythagorean triples (3-4-5, 5-12-13, 8-15-17) for faster calculations'
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
        const filename = 'triangle_perimeter_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Basic Triangle (Scalene): 1 problem');
        console.log('    - Equilateral Triangle: 1 problem');
        console.log('    - Isosceles Triangle: 1 problem');
        console.log('    - Right Triangle (legs given): 1 problem');
        console.log('    - Right Triangle (leg + hypotenuse): 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 45-55 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and triangle type');
        console.log('  • Visual highlighting and real-world context');
        console.log('  • Quick helper tips for immediate geometric guidance');
        console.log('  • Complete step-by-step solution with enhanced explanations');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Triangle property identification and verification');
        console.log('  • Pythagorean theorem applications (for right triangles)');
        console.log('  • Triangle inequality verification');
        console.log('  • Key geometric concepts and learning objectives');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods and approaches');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary');
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

