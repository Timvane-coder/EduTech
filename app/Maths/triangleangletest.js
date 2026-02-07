import { EnhancedTriangleAnglesWorkbook } from './triangle-angles-workbook.js';
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




// ============== TRIANGLE ANGLES - RELATED PROBLEMS GENERATOR ==============

function generateRelatedTriangleAnglesProblems() {
    const relatedProblems = [];

    // Problem 1: Finding Third Angle (Two Angles Given)
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Finding the Third Angle',
        problem: 'Two angles of a triangle measure 45° and 60°. Find the third angle.',
        parameters: { angle1: 45, angle2: 60 },
        problemType: 'two_angles_given',
        context: { 
            difficulty: 'beginner', 
            topic: 'Triangle Angle Sum Theorem',
            realWorld: 'Used in construction and architecture to ensure structural integrity'
        },
        subparts: [
            'Given: ∠A = 45°, ∠B = 60°',
            'Goal: Find ∠C using the triangle angle sum theorem',
            'Apply theorem: ∠A + ∠B + ∠C = 180°',
            'Substitute: 45° + 60° + ∠C = 180°',
            'Add known angles: 105° + ∠C = 180°',
            'Solve: ∠C = 180° - 105°',
            '∠C = 75°',
            'Check: 45° + 60° + 75° = 180° ✓'
        ],
        helper: 'Remember: all three angles in ANY triangle always sum to exactly 180°',
        solution: '∠C = 75°',
        realWorldContext: 'Like calculating the angle of a triangular roof support beam when two angles are already determined by the design',
        triangleType: 'Acute (all angles less than 90°)'
    });

    // Problem 2: Equilateral Triangle
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Equilateral Triangle Angles',
        problem: 'Find all three angles in an equilateral triangle.',
        parameters: {},
        problemType: 'equilateral',
        context: { 
            difficulty: 'beginner', 
            topic: 'Special Triangles - Equilateral',
            realWorld: 'Used in bridge trusses and structural engineering for maximum strength'
        },
        subparts: [
            'Given: Equilateral triangle (all sides equal)',
            'Property: In equilateral triangles, all angles are equal',
            'Let each angle = x',
            'Apply angle sum: x + x + x = 180°',
            'Simplify: 3x = 180°',
            'Divide by 3: x = 60°',
            'Therefore: All three angles = 60°',
            'Check: 60° + 60° + 60° = 180° ✓'
        ],
        helper: 'In an equilateral triangle, equal sides create equal angles. Divide 180° by 3 to get each angle.',
        solution: 'Each angle = 60°',
        realWorldContext: 'Equilateral triangles with 60° angles are used in bridge trusses because they distribute force evenly and provide maximum stability',
        triangleType: 'Equilateral (also equiangular)'
    });

    // Problem 3: Isosceles Triangle
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Isosceles Triangle with Vertex Angle',
        problem: 'An isosceles triangle has a vertex angle of 100°. Find each base angle.',
        parameters: { vertexAngle: 100 },
        problemType: 'isosceles',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Special Triangles - Isosceles',
            realWorld: 'Used in symmetric roof designs and architectural elements'
        },
        subparts: [
            'Given: Isosceles triangle with vertex angle = 100°',
            'Property: Base angles in isosceles triangle are equal',
            'Let each base angle = x',
            'Apply angle sum: 100° + x + x = 180°',
            'Simplify: 100° + 2x = 180°',
            'Subtract 100°: 2x = 80°',
            'Divide by 2: x = 40°',
            'Therefore: Each base angle = 40°',
            'Check: 100° + 40° + 40° = 180° ✓'
        ],
        helper: 'In isosceles triangles, the TWO BASE angles are equal (not all three). The vertex angle is different.',
        solution: 'Each base angle = 40°',
        realWorldContext: 'Like calculating the angles at the base of a symmetric roof where the peak angle is 100° - each side meets the wall at 40°',
        triangleType: 'Isosceles Obtuse (one angle > 90°)'
    });

    // Problem 4: Right Triangle
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Right Triangle with One Acute Angle',
        problem: 'In a right triangle, one acute angle measures 35°. Find the other acute angle.',
        parameters: { givenAcuteAngle: 35 },
        problemType: 'right_triangle',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Special Triangles - Right Triangle',
            realWorld: 'Essential for ramp design, ladder safety, and accessibility standards'
        },
        subparts: [
            'Given: Right triangle with one acute angle = 35°',
            'Property: Right triangle has one 90° angle',
            'Let the other acute angle = x',
            'Apply angle sum: 90° + 35° + x = 180°',
            'Add known angles: 125° + x = 180°',
            'Solve: x = 180° - 125°',
            'x = 55°',
            'Alternative: In right triangles, acute angles are complementary',
            'x = 90° - 35° = 55°',
            'Check: 90° + 35° + 55° = 180° ✓'
        ],
        helper: 'In a right triangle, the two acute angles are complementary - they add up to 90°. This is a helpful shortcut!',
        solution: 'Other acute angle = 55°',
        realWorldContext: 'Like calculating the angle of a wheelchair ramp - if the ramp makes 35° with the ground, it makes 55° with the vertical wall',
        triangleType: 'Right (one 90° angle)'
    });

    // Problem 5: Angles in Ratio
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Triangle Angles in Given Ratio',
        problem: 'The angles of a triangle are in the ratio 2:3:4. Find each angle.',
        parameters: { ratio: [2, 3, 4] },
        problemType: 'angle_ratio',
        context: { 
            difficulty: 'advanced', 
            topic: 'Algebraic Triangle Problems - Ratios',
            realWorld: 'Used in design and optimization problems with proportional constraints'
        },
        subparts: [
            'Given: Angles in ratio 2:3:4',
            'Let angles be 2x, 3x, and 4x',
            'Apply angle sum: 2x + 3x + 4x = 180°',
            'Combine like terms: 9x = 180°',
            'Divide by 9: x = 20°',
            'Calculate each angle:',
            '  First angle: 2x = 2(20°) = 40°',
            '  Second angle: 3x = 3(20°) = 60°',
            '  Third angle: 4x = 4(20°) = 80°',
            'Check: 40° + 60° + 80° = 180° ✓',
            'Verify ratio: 40:60:80 = 2:3:4 ✓'
        ],
        helper: 'When angles are in a ratio, use a variable (like x) multiplied by each ratio number. The sum of all terms equals 180°.',
        solution: 'Angles are 40°, 60°, and 80°',
        realWorldContext: 'Like designing a triangular garden plot where the angles must be in a specific proportion for aesthetic or functional reasons',
        triangleType: 'Acute Scalene (all angles different, all less than 90°)'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveTriangleAnglesRelatedProblems() {
    const problems = generateRelatedTriangleAnglesProblems();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Triangle Angles Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedTriangleAnglesWorkbook({
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
            includeHistoricalContext: true
        });

        try {
            // Solve the problem
            const result = workbook.solveTriangleProblem({
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

async function generateComprehensiveTriangleDocument() {
    console.log('Generating Triangle Angles Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Triangle Angles Workbook',
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
            text: 'Angle Sum Theorem, Special Triangles, and Ratio Problems',
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
            text: 'Triangle Angles Problems (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const triangleProblems = generateRelatedTriangleAnglesProblems();
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
            text: 'This workbook contains 5 carefully selected triangle angle problems that progressively build your understanding of triangle geometry. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed geometric explanations',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Triangle angle sum theorem applications and proofs',
        '• Special triangle properties (equilateral, isosceles, right)',
        '• Common mistakes and error prevention tips',
        '• Self-check questions and thinking prompts',
        '• Real-world applications in architecture, engineering, and navigation',
        '• Alternative solution methods and verification',
        '• Historical context of triangle mathematics',
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
            spacing: { after: 300 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Key Theorem: Triangle Angle Sum',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'The sum of the interior angles of any triangle is always 180°. This fundamental property holds true for all triangles - acute, right, obtuse, equilateral, isosceles, or scalene. It is one of the most important theorems in geometry.',
            spacing: { after: 200 },
            shading: {
                fill: "FFF9E6",
                type: docx.ShadingType.CLEAR
            }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Formula: ∠A + ∠B + ∠C = 180°',
            spacing: { after: 300 },
            bold: true,
            alignment: docx.AlignmentType.CENTER,
            shading: {
                fill: "E3F2FD",
                type: docx.ShadingType.CLEAR
            }
        })
    );

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Triangle Angles Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Triangle Angles Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const triangleSolved = solveTriangleAnglesRelatedProblems();
    
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

        // Triangle type
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'Triangle Type: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.triangleType
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
            text: 'Congratulations on completing these 5 triangle angle problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered the Triangle Angle Sum Theorem (angles sum to 180°)',
        'You\'ve learned properties of special triangles (equilateral, isosceles, right)',
        'You\'ve practiced finding missing angles with different given information',
        'You\'ve solved algebraic problems with angles in ratios',
        'You\'ve seen real-world applications in architecture, engineering, and design',
        'You\'ve learned to classify triangles by their angles (acute, right, obtuse)'
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
        'Triangle Angle Sum: ∠A + ∠B + ∠C = 180°',
        'Equilateral Triangle: All angles = 60°',
        'Isosceles Triangle: Two base angles are equal',
        'Right Triangle: One angle = 90°, other two are complementary (sum to 90°)',
        'Exterior Angle Theorem: Exterior angle = sum of two remote interior angles',
        'Ratio Problems: Let angles be ratio terms × variable, sum = 180°'
    ];

    keyFormulas.forEach(formula => {
        documentChildren.push(
            new docx.Paragraph({
                text: `• ${formula}`,
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
        'Practice exterior angle theorem problems',
        'Explore angles in polygons (quadrilaterals, pentagons, etc.)',
        'Learn about similar triangles and corresponding angles',
        'Study triangle congruence and angle-side relationships',
        'Apply triangle angles to trigonometry (sine, cosine, tangent)',
        'Solve real-world problems involving triangulation and navigation'
    ];

    nextSteps.forEach((step, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${step}`,
                spacing: { after: 100 }
            })
        );
    });

    // ============== ADDITIONAL RESOURCES ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Additional Resources',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const resources = [
        'Practice with different triangle types to reinforce concepts',
        'Draw diagrams for every problem - visualization is key',
        'Check your answers by verifying the sum equals 180°',
        'Look for triangle angles in real-world structures around you',
        'Use online interactive geometry tools to explore triangles',
        'Study the historical development of geometry from ancient Greece to modern applications'
    ];

    resources.forEach(resource => {
        documentChildren.push(
            new docx.Paragraph({
                text: `• ${resource}`,
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
        const filename = 'triangle_angles_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Two Angles Given: 1 problem');
        console.log('    - Equilateral Triangle: 1 problem');
        console.log('    - Isosceles Triangle: 1 problem');
        console.log('    - Right Triangle: 1 problem');
        console.log('    - Angles in Ratio: 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 45-55 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and triangle type');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Complete step-by-step solution with geometric explanations');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Verification of solutions with angle sum checking');
        console.log('  • Key concepts and triangle properties');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Historical context of triangle mathematics');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary');
        console.log('='.repeat(80) + '\n');
    } catch (error) {
        console.error(`\n❌ Error saving document: ${error.message}`);
        console.error(error.stack);
    }
}

// ============== RUN THE DOCUMENT GENERATION ==============

generateComprehensiveTriangleDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});
