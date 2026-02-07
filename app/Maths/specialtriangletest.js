import { EnhancedSpecialRightTrianglesMathematicalWorkbook } from './special-triangles-workbook.js';
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


// ============== SPECIAL RIGHT TRIANGLES - RELATED PROBLEMS GENERATOR ==============

function generateRelatedSpecialRightTriangles() {
    const relatedProblems = [];

    // Problem 1: 45-45-90 Triangle - Given Leg, Find Hypotenuse
    relatedProblems.push({
        difficulty: 'easy',
        scenario: '45-45-90 Triangle: Given Leg',
        problem: 'A 45-45-90 triangle has a leg of length 8. Find the hypotenuse.',
        triangleType: '45-45-90',
        givenSide: 'leg',
        givenValue: 8,
        findWhat: 'hypotenuse',
        problemType: 'triangle_45_45_90_given_leg',
        context: { 
            difficulty: 'beginner', 
            topic: '45-45-90 Triangles',
            realWorld: 'Finding diagonal distances in squares'
        },
        subparts: [
            'Given: 45-45-90 triangle with leg = 8',
            'Recall ratio: leg : leg : hypotenuse = 1 : 1 : √2',
            'Since both legs are equal in 45-45-90 triangle: leg₁ = leg₂ = 8',
            'Hypotenuse = leg × √2',
            'Hypotenuse = 8√2',
            'Decimal approximation: 8√2 ≈ 11.31',
            'Verify: 8² + 8² = 64 + 64 = 128 = (8√2)² ✓'
        ],
        helper: 'In a 45-45-90 triangle, multiply the leg by √2 to get the hypotenuse',
        solution: '8√2 (or approximately 11.31)',
        realWorldContext: 'Like finding the diagonal of a square with 8-inch sides - perfect for cutting materials or measuring across square spaces'
    });

    // Problem 2: 30-60-90 Triangle - Given Short Leg, Find All Sides
    relatedProblems.push({
        difficulty: 'easy',
        scenario: '30-60-90 Triangle: Given Short Leg',
        problem: 'In a 30-60-90 triangle, the short leg is 5. Find the long leg and hypotenuse.',
        triangleType: '30-60-90',
        givenSide: 'short_leg',
        givenValue: 5,
        findWhat: 'all_sides',
        problemType: 'triangle_30_60_90_given_short_leg',
        context: { 
            difficulty: 'beginner', 
            topic: '30-60-90 Triangles',
            realWorld: 'Finding heights and dimensions in equilateral triangles'
        },
        subparts: [
            'Given: 30-60-90 triangle with short leg = 5',
            'Recall ratio: short : long : hypotenuse = 1 : √3 : 2',
            'Short leg (opposite 30°) = 5',
            'Long leg (opposite 60°) = short leg × √3 = 5√3',
            'Hypotenuse (opposite 90°) = 2 × short leg = 2 × 5 = 10',
            'Decimal approximation: 5√3 ≈ 8.66',
            'Verify: 5² + (5√3)² = 25 + 75 = 100 = 10² ✓'
        ],
        helper: 'In 30-60-90 triangle: hypotenuse = 2 × short leg, long leg = short leg × √3',
        solution: 'Long leg = 5√3 ≈ 8.66, Hypotenuse = 10',
        realWorldContext: 'Like finding the height of an equilateral triangle sign with 10-inch sides - essential for construction and design'
    });

    // Problem 3: 45-45-90 Triangle - Given Hypotenuse, Find Legs
    relatedProblems.push({
        difficulty: 'medium',
        scenario: '45-45-90 Triangle: Given Hypotenuse',
        problem: 'A 45-45-90 triangle has hypotenuse 12√2. Find the length of each leg.',
        triangleType: '45-45-90',
        givenSide: 'hypotenuse',
        givenValue: 12 * Math.sqrt(2),
        findWhat: 'legs',
        problemType: 'triangle_45_45_90_given_hypotenuse',
        context: { 
            difficulty: 'intermediate', 
            topic: '45-45-90 Triangles - Working Backwards',
            realWorld: 'Finding side lengths when diagonal is known'
        },
        subparts: [
            'Given: 45-45-90 triangle with hypotenuse = 12√2',
            'Recall ratio: leg : leg : hypotenuse = 1 : 1 : √2',
            'We have: hypotenuse = leg × √2',
            'Therefore: 12√2 = leg × √2',
            'Divide both sides by √2:',
            'leg = 12√2 / √2 = 12',
            'Rationalized form: leg = (12√2 × √2) / (√2 × √2) = 24/2 = 12',
            'Both legs = 12',
            'Verify: 12² + 12² = 144 + 144 = 288 = (12√2)² ✓'
        ],
        helper: 'To find leg from hypotenuse in 45-45-90, divide by √2 and rationalize',
        solution: 'Each leg = 12',
        realWorldContext: 'Like determining the dimensions of a square room when you know the diagonal measurement - useful in flooring and carpentry'
    });

    // Problem 4: 30-60-90 Triangle - Given Hypotenuse, Find Both Legs
    relatedProblems.push({
        difficulty: 'medium',
        scenario: '30-60-90 Triangle: Given Hypotenuse',
        problem: 'A 30-60-90 triangle has hypotenuse 20. Find both legs.',
        triangleType: '30-60-90',
        givenSide: 'hypotenuse',
        givenValue: 20,
        findWhat: 'all_sides',
        problemType: 'triangle_30_60_90_given_hypotenuse',
        context: { 
            difficulty: 'intermediate', 
            topic: '30-60-90 Triangles - Working from Hypotenuse',
            realWorld: 'Finding dimensions when longest side is known'
        },
        subparts: [
            'Given: 30-60-90 triangle with hypotenuse = 20',
            'Recall ratio: short : long : hypotenuse = 1 : √3 : 2',
            'Key insight: Hypotenuse = 2 × short leg',
            'Therefore: 20 = 2 × short leg',
            'Short leg = 20/2 = 10',
            'Long leg = short leg × √3 = 10√3',
            'Decimal approximation: 10√3 ≈ 17.32',
            'Summary: short leg = 10, long leg = 10√3, hypotenuse = 20',
            'Verify: 10² + (10√3)² = 100 + 300 = 400 = 20² ✓'
        ],
        helper: 'In 30-60-90 triangle, short leg is always half the hypotenuse',
        solution: 'Short leg = 10, Long leg = 10√3 ≈ 17.32',
        realWorldContext: 'Like calculating ladder placement: if a 20-foot ladder leans at 60°, how far up the wall does it reach and how far from the wall is the base?'
    });

    // Problem 5: 30-60-90 Triangle - Given Long Leg, Find Other Sides
    relatedProblems.push({
        difficulty: 'hard',
        scenario: '30-60-90 Triangle: Given Long Leg',
        problem: 'In a 30-60-90 triangle, the long leg measures 9√3. Find the short leg and hypotenuse.',
        triangleType: '30-60-90',
        givenSide: 'long_leg',
        givenValue: 9 * Math.sqrt(3),
        findWhat: 'all_sides',
        problemType: 'triangle_30_60_90_given_long_leg',
        context: { 
            difficulty: 'advanced', 
            topic: '30-60-90 Triangles - Rationalization Practice',
            realWorld: 'Working with height measurements to find base dimensions'
        },
        subparts: [
            'Given: 30-60-90 triangle with long leg = 9√3',
            'Recall ratio: short : long : hypotenuse = 1 : √3 : 2',
            'We have: long leg = short leg × √3',
            'Therefore: 9√3 = short leg × √3',
            'Divide both sides by √3:',
            'short leg = 9√3 / √3 = 9',
            'Alternative (rationalize): (9√3 / √3) × (√3 / √3) = (9 × 3) / 3 = 27/3 = 9',
            'Hypotenuse = 2 × short leg = 2 × 9 = 18',
            'Summary: short leg = 9, long leg = 9√3, hypotenuse = 18',
            'Verify: 9² + (9√3)² = 81 + 243 = 324 = 18² ✓'
        ],
        helper: 'When given long leg, divide by √3 (or multiply by √3/3) to get short leg, then double for hypotenuse',
        solution: 'Short leg = 9, Hypotenuse = 18',
        realWorldContext: 'Like finding the base width of an equilateral triangle when you know the height - important for structural engineering and architecture'
    });

    return relatedProblems;
}


// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveSpecialTrianglesRelatedProblems() {
    const problems = generateRelatedSpecialRightTriangles();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Special Triangle Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedSpecialRightTrianglesMathematicalWorkbook({
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
            const result = workbook.solveSpecialTrianglesProblem({
                triangleType: problem.triangleType,
                givenSide: problem.givenSide,
                givenValue: problem.givenValue,
                findWhat: problem.findWhat,
                scenario: problem.scenario,
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


// ============== GENERATE COMPREHENSIVE DOCUMENT ==============

async function generateSpecialTrianglesDocument() {
    console.log('Generating Special Right Triangles Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Special Right Triangles Workbook',
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
            text: '45-45-90 and 30-60-90 Triangles',
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
            text: 'Special Right Triangles (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const triangleProblems = generateRelatedSpecialRightTriangles();
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
            text: 'This workbook contains 5 carefully selected special right triangle problems covering both 45-45-90 and 30-60-90 triangles. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed geometric explanations',
        '• Ratio applications (1:1:√2 and 1:√3:2)',
        '• Rationalization techniques for radical expressions',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Common mistakes and error prevention tips (ratio confusion, side identification)',
        '• Self-check questions and thinking prompts',
        '• Real-world applications (construction, architecture, design)',
        '• Pythagorean theorem verification',
        '• Alternative solution methods',
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

    documentChildren.push(
        new docx.Paragraph({
            text: '',
            spacing: { after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Key Concepts Covered:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const keyConcepts = [
        '▸ 45-45-90 Triangle Ratio: 1 : 1 : √2 (leg : leg : hypotenuse)',
        '▸ 30-60-90 Triangle Ratio: 1 : √3 : 2 (short leg : long leg : hypotenuse)',
        '▸ Given leg in 45-45-90 → multiply by √2 for hypotenuse',
        '▸ Given hypotenuse in 45-45-90 → divide by √2 for leg',
        '▸ Given short leg in 30-60-90 → multiply by √3 for long leg, by 2 for hypotenuse',
        '▸ Given hypotenuse in 30-60-90 → divide by 2 for short leg',
        '▸ Given long leg in 30-60-90 → divide by √3 for short leg (requires rationalization)',
        '▸ Rationalizing denominators with √2 and √3',
        '▸ Identifying which leg is which in 30-60-90 triangles'
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
    console.log('\nProcessing Special Right Triangles Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Special Right Triangles Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const trianglesSolved = solveSpecialTrianglesRelatedProblems();
    
    trianglesSolved.forEach((solved, index) => {
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

        // Triangle type and difficulty
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'Triangle Type: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.triangleType,
                        color: solved.problem.triangleType === '45-45-90' ? '1976D2' : '7B1FA2'
                    }),
                    new docx.TextRun({
                        text: '  |  Difficulty: ',
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

        // Triangle ratio reminder
        const ratioText = solved.problem.triangleType === '45-45-90' 
            ? 'Ratio: 1 : 1 : √2 (leg : leg : hypotenuse)'
            : 'Ratio: 1 : √3 : 2 (short leg : long leg : hypotenuse)';
        
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: '📐 ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: ratioText,
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
            text: 'Congratulations on completing these 5 special right triangle problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered the 45-45-90 triangle ratio (1:1:√2)',
        'You\'ve mastered the 30-60-90 triangle ratio (1:√3:2)',
        'You\'ve practiced finding sides given different starting information',
        'You\'ve learned rationalization techniques with √2 and √3',
        'You\'ve learned to identify short leg vs. long leg in 30-60-90 triangles',
        'You\'ve seen real-world applications in construction and design',
        'You\'ve verified solutions using the Pythagorean theorem'
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

    const keyFormulas = [
        '45-45-90 Triangle:',
        '  • Hypotenuse = leg × √2',
        '  • Leg = hypotenuse ÷ √2 = (hypotenuse × √2) ÷ 2',
        '',
        '30-60-90 Triangle:',
        '  • Hypotenuse = 2 × short leg',
        '  • Long leg = short leg × √3',
        '  • Short leg = hypotenuse ÷ 2',
        '  • Short leg = long leg ÷ √3 = (long leg × √3) ÷ 3'
    ];

    keyFormulas.forEach(formula => {
        documentChildren.push(
            new docx.Paragraph({
                text: formula,
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
        'Practice finding area and perimeter of special triangles',
        'Explore composite figures made of multiple special triangles (hexagons, octagons)',
        'Apply special triangles to trigonometry (exact values of sin, cos, tan)',
        'Solve word problems involving ladders, roofs, and architectural elements',
        'Study the unit circle using special triangle values',
        'Practice with 3D geometry problems involving special triangles'
    ];

    nextSteps.forEach((step, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${step}`,
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
        const filename = 'special_right_triangles_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - 45-45-90 Triangles: 2 problems');
        console.log('    - 30-60-90 Triangles: 3 problems');
        console.log('    - Easy: 2 problems');
        console.log('    - Medium: 2 problems');
        console.log('    - Hard: 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 45-55 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with triangle type and difficulty highlighting');
        console.log('  • Triangle ratio reminder for quick reference');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Complete step-by-step solution with geometric explanations');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Pythagorean theorem verification of solutions');
        console.log('  • Key concepts and triangle properties');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Rationalization techniques explained');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods (Pythagorean, trigonometry)');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary');
        console.log('\n📐 Special Features:');
        console.log('  • Visual triangle type identification (45-45-90 vs 30-60-90)');
        console.log('  • Side identification guidance (short leg, long leg, hypotenuse)');
        console.log('  • Ratio application strategies');
        console.log('  • Decimal approximations for practical use');
        console.log('  • Real-world applications in construction, design, and architecture');
        console.log('='.repeat(80) + '\n');
    } catch (error) {
        console.error(`\n❌ Error saving document: ${error.message}`);
        console.error(error.stack);
    }
}


// ============== RUN THE DOCUMENT GENERATION ==============

generateSpecialTrianglesDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});
