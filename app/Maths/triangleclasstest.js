import { EnhancedTriangleClassificationMathematicalWorkbook } from './triangle-classification-workbook.js';
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
                        // Multi-column row
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




// ============== TRIANGLE CLASSIFICATION - RELATED PROBLEMS GENERATOR ==============

function generateRelatedTriangleClassificationProblems() {
    const relatedProblems = [];

    // Problem 1: Equilateral Triangle by Sides
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Equilateral Triangle Classification',
        problem: 'Classify a triangle with sides 5, 5, 5',
        sides: [5, 5, 5],
        angles: null,
        method: 'by_sides',
        context: { 
            difficulty: 'beginner', 
            topic: 'Triangle Classification by Sides',
            realWorld: 'Identifying symmetrical structures in architecture'
        },
        subparts: [
            'Given: Triangle with sides 5, 5, 5',
            'Step 1: Compare all three sides',
            'Side 1 vs Side 2: 5 = 5 ✓',
            'Side 2 vs Side 3: 5 = 5 ✓',
            'Side 1 vs Side 3: 5 = 5 ✓',
            'Step 2: All three sides are equal',
            'Classification by sides: Equilateral',
            'Additional property: All angles are also 60° (equiangular)',
            'Final classification: Equilateral Triangle'
        ],
        helper: 'If all three sides are equal, the triangle is equilateral and automatically has all 60° angles',
        solution: 'Equilateral Triangle',
        realWorldContext: 'Like a perfectly symmetrical road sign or the faces of a pyramid - equilateral triangles provide maximum stability and symmetry'
    });

    // Problem 2: Right Triangle using Pythagorean Theorem
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Right Triangle Classification (3-4-5)',
        problem: 'Classify a triangle with sides 6, 8, 10 using the Pythagorean theorem',
        sides: [6, 8, 10],
        angles: null,
        method: 'pythagorean',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Pythagorean Theorem Classification',
            realWorld: 'Checking if corners are square in construction'
        },
        subparts: [
            'Given: Triangle with sides 6, 8, 10',
            'Step 1: Identify longest side (potential hypotenuse)',
            'Longest side c = 10',
            'Step 2: Square all sides',
            'a² = 6² = 36',
            'b² = 8² = 64',
            'c² = 10² = 100',
            'Step 3: Calculate a² + b²',
            'a² + b² = 36 + 64 = 100',
            'Step 4: Compare a² + b² to c²',
            '100 = 100 (Equal!)',
            'Since a² + b² = c², this is a RIGHT triangle',
            'Step 5: Check sides for additional classification',
            'All sides different: Scalene',
            'Final classification: Right Scalene Triangle'
        ],
        helper: 'This is a scaled version of the famous 3-4-5 Pythagorean triple (multiplied by 2). When a² + b² = c², the triangle has a 90° angle',
        solution: 'Right Scalene Triangle',
        realWorldContext: 'Carpenters use 3-4-5 triangles to ensure corners are perfectly square when building - this is a larger version (6-8-10)'
    });

    // Problem 3: Obtuse Triangle Classification
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Obtuse Triangle by Angles',
        problem: 'Classify a triangle with angles 30°, 50°, 100°',
        sides: null,
        angles: [30, 50, 100],
        method: 'by_angles',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Triangle Classification by Angles',
            realWorld: 'Analyzing roof angles and slopes'
        },
        subparts: [
            'Given: Triangle with angles 30°, 50°, 100°',
            'Step 1: Verify angle sum property',
            '30° + 50° + 100° = 180° ✓ (Valid triangle)',
            'Step 2: Identify the largest angle',
            'Largest angle = 100°',
            'Step 3: Compare largest angle to 90°',
            '100° > 90°',
            'Step 4: Apply classification rule',
            'Since one angle > 90°, this is an OBTUSE triangle',
            'Additional info: Two angles (30°, 50°) are acute',
            'Final classification: Obtuse Triangle'
        ],
        helper: 'A triangle needs only ONE angle greater than 90° to be obtuse. The other two angles must be acute (since the sum is 180°)',
        solution: 'Obtuse Triangle',
        realWorldContext: 'Like a steep roof with one wide angle - obtuse triangles create unique architectural designs and varied interior spaces'
    });

    // Problem 4: Triangle Inequality Check
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Triangle Inequality Validation',
        problem: 'Can sides 3, 4, 10 form a valid triangle?',
        sides: [3, 4, 10],
        angles: null,
        method: 'inequality',
        context: { 
            difficulty: 'beginner', 
            topic: 'Triangle Inequality Theorem',
            realWorld: 'Determining if construction materials can connect'
        },
        subparts: [
            'Given: Potential triangle sides 3, 4, 10',
            'Triangle Inequality Theorem: Sum of any two sides > third side',
            'Step 1: Check first inequality',
            '3 + 4 > 10?',
            '7 > 10? NO ✗',
            'Step 2: Since first check failed, triangle is INVALID',
            'Verification: Check why this fails geometrically',
            'The two shorter sides (3 + 4 = 7) cannot reach across',
            'the longest side (10)',
            'It would form a straight line or gap, not close into a triangle',
            'Final answer: CANNOT form a valid triangle'
        ],
        helper: 'Quick check: If the sum of the two smallest sides is not greater than the largest side, you cannot form a triangle',
        solution: 'Invalid Triangle (violates triangle inequality)',
        realWorldContext: 'Like trying to build a triangular frame with sticks - if one stick is too long, the other two cannot reach to close the triangle'
    });

    // Problem 5: Complete Classification (Both Sides and Angles)
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Complete Triangle Classification',
        problem: 'Completely classify a triangle with sides 5, 12, 13',
        sides: [5, 12, 13],
        angles: null,
        method: 'complete',
        context: { 
            difficulty: 'advanced', 
            topic: 'Complete Triangle Classification',
            realWorld: 'Comprehensive structural analysis'
        },
        subparts: [
            'Given: Triangle with sides 5, 12, 13',
            '',
            '=== PART 1: Validity Check ===',
            'Check triangle inequality:',
            '5 + 12 = 17 > 13 ✓',
            '12 + 13 = 25 > 5 ✓',
            '5 + 13 = 18 > 12 ✓',
            'Triangle is VALID',
            '',
            '=== PART 2: Classification by Sides ===',
            'Compare sides:',
            '5 ≠ 12 ≠ 13 (all different)',
            'Classification by sides: SCALENE',
            '',
            '=== PART 3: Classification by Angles (Pythagorean Test) ===',
            'Identify longest side: c = 13',
            'Calculate squares:',
            'a² = 5² = 25',
            'b² = 12² = 144',
            'c² = 13² = 169',
            'Calculate a² + b²:',
            '25 + 144 = 169',
            'Compare: a² + b² = c² (169 = 169)',
            'Since they are EQUAL, this is a RIGHT triangle',
            '',
            '=== FINAL CLASSIFICATION ===',
            'Right Scalene Triangle',
            'This is a 5-12-13 Pythagorean triple!'
        ],
        helper: 'This is the 5-12-13 Pythagorean triple - a scaled version of 3-4-5. Complete classification requires checking both side relationships AND angle type',
        solution: 'Right Scalene Triangle (5-12-13 Pythagorean triple)',
        realWorldContext: 'The 5-12-13 triangle is commonly used in construction and engineering for creating precise right angles in larger structures'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveTriangleClassificationRelatedProblems() {
    const problems = generateRelatedTriangleClassificationProblems();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Triangle Classification Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedTriangleClassificationMathematicalWorkbook({
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
            // Classify the triangle
            const result = workbook.classifyTriangle({
                sides: problem.sides,
                angles: problem.angles,
                method: problem.method,
                parameters: {},
                context: problem.context
            });

            solvedProblems.push({
                problem: problem,
                workbook: workbook,
                result: result
            });

            console.log(`    ✓ Classification: ${result.classification}`);
        } catch (error) {
            console.error(`    ✗ Error classifying triangle: ${error.message}`);
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
    console.log('Generating Triangle Classification Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Triangle Classification Workbook',
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
            text: 'Classification by Sides, Angles, and Pythagorean Theorem',
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
            text: 'Triangle Classification Problems (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const triangleProblems = generateRelatedTriangleClassificationProblems();
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
            text: 'This workbook contains 5 carefully selected triangle classification problems covering all major classification methods. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step classification with detailed geometric reasoning',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Common mistakes and error prevention for triangle classification',
        '• Self-check questions and geometric thinking prompts',
        '• Real-world applications in architecture, engineering, and construction',
        '• Alternative classification methods and verification techniques',
        '• Pythagorean theorem applications and special triangle identification',
        '• Pedagogical notes with teaching strategies',
        '• Historical context of triangle geometry',
        '• Triangle inequality validation and geometric properties'
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
            text: 'Problem Coverage:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const coverage = [
        '1. Classification by Sides (Equilateral, Isosceles, Scalene)',
        '2. Classification by Angles (Acute, Right, Obtuse)',
        '3. Pythagorean Theorem Classification',
        '4. Triangle Inequality Validation',
        '5. Complete Classification (Sides + Angles)'
    ];

    coverage.forEach(item => {
        documentChildren.push(
            new docx.Paragraph({
                text: item,
                spacing: { after: 100 }
            })
        );
    });

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Triangle Classification Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Triangle Classification Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const triangleSolved = solveTriangleClassificationRelatedProblems();
    
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

        // Given information
        if (solved.problem.sides) {
            documentChildren.push(
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            text: '📐 Given Sides: ',
                            bold: true
                        }),
                        new docx.TextRun({
                            text: solved.problem.sides.join(', ')
                        })
                    ],
                    spacing: { after: 100 }
                })
            );
        }

        if (solved.problem.angles) {
            documentChildren.push(
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            text: '📐 Given Angles: ',
                            bold: true
                        }),
                        new docx.TextRun({
                            text: solved.problem.angles.map(a => `${a}°`).join(', ')
                        })
                    ],
                    spacing: { after: 100 }
                })
            );
        }

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

        // Classification method
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'Classification Method: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.method.replace(/_/g, ' ').toUpperCase()
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
            // Check if it's a section header (contains ===)
            if (subpart.includes('===')) {
                documentChildren.push(
                    new docx.Paragraph({
                        text: subpart.replace(/===/g, '').trim(),
                        spacing: { before: 200, after: 100 },
                        bold: true,
                        color: '1976D2'
                    })
                );
            } else if (subpart.trim() === '') {
                // Empty line for spacing
                documentChildren.push(
                    new docx.Paragraph({
                        text: '',
                        spacing: { after: 100 }
                    })
                );
            } else {
                // Regular step
                documentChildren.push(
                    new docx.Paragraph({
                        text: subpart,
                        spacing: { after: 80 },
                        bullet: {
                            level: 0
                        }
                    })
                );
            }
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
            text: 'Congratulations on completing these 5 triangle classification problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered classification by side lengths (equilateral, isosceles, scalene)',
        'You\'ve learned classification by angles (acute, right, obtuse)',
        'You\'ve applied the Pythagorean theorem to determine angle types',
        'You\'ve validated triangles using the triangle inequality theorem',
        'You\'ve performed complete classifications combining multiple criteria',
        'You\'ve recognized special triangles like Pythagorean triples (3-4-5, 5-12-13)'
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
            text: 'Key Triangle Classification Rules:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const keyRules = [
        'By Sides: Equilateral (all equal) → Isosceles (2 equal) → Scalene (all different)',
        'By Angles: Acute (all < 90°) → Right (one = 90°) → Obtuse (one > 90°)',
        'Pythagorean Test: a² + b² = c² (right), > c² (acute), < c² (obtuse)',
        'Triangle Inequality: Sum of any two sides must be greater than the third',
        'Special: Equilateral triangles are always acute with 60° angles',
        'Special: Only one angle can be ≥ 90° (right or obtuse)'
    ];

    keyRules.forEach(rule => {
        documentChildren.push(
            new docx.Paragraph({
                text: `• ${rule}`,
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
        'Explore triangle congruence (SSS, SAS, ASA, AAS theorems)',
        'Study triangle similarity and proportions',
        'Learn about special segments (medians, altitudes, angle bisectors)',
        'Investigate triangle centers (centroid, orthocenter, circumcenter, incenter)',
        'Apply trigonometry to solve for unknown sides and angles',
        'Practice with coordinate geometry and distance formula',
        'Explore advanced topics like the Law of Sines and Law of Cosines'
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
            text: 'Triangle Fun Facts:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const funFacts = [
        '🔺 Triangles are the only rigid polygon - they cannot be deformed without changing side lengths',
        '🏛️ Ancient Egyptians used the 3-4-5 triangle to build the pyramids with perfect right angles',
        '📐 The Pythagorean theorem was known to Babylonians 1000 years before Pythagoras',
        '🌍 GPS technology uses triangulation with three satellites to pinpoint your location',
        '🏗️ Triangular bracing is essential in bridges, towers, and buildings for structural stability',
        '⚠️ Triangle warning signs are used globally because the shape naturally draws attention'
    ];

    funFacts.forEach(fact => {
        documentChildren.push(
            new docx.Paragraph({
                text: fact,
                spacing: { after: 150 }
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
        const filename = 'triangle_classification_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Classification by Sides: 1 problem (Equilateral)');
        console.log('    - Classification by Angles: 1 problem (Obtuse)');
        console.log('    - Pythagorean Classification: 1 problem (Right Triangle)');
        console.log('    - Triangle Inequality: 1 problem (Invalid Triangle)');
        console.log('    - Complete Classification: 1 problem (Both Methods)');
        console.log('\n📄 ESTIMATED PAGES: 45-55 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and visual highlighting');
        console.log('  • Given sides/angles clearly displayed');
        console.log('  • Classification method identification');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Complete step-by-step classification with geometric reasoning');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Pythagorean theorem applications and calculations');
        console.log('  • Triangle inequality validation');
        console.log('  • Key geometric concepts and properties');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative classification methods');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Historical context of triangle geometry');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary with organized steps');
        console.log('  • Special triangle identification (Pythagorean triples)');
        console.log('\n🎓 LEARNING OUTCOMES:');
        console.log('  • Master all triangle classification methods');
        console.log('  • Apply Pythagorean theorem for angle determination');
        console.log('  • Validate triangles using inequality theorem');
        console.log('  • Recognize special triangles and patterns');
        console.log('  • Understand real-world applications in construction and engineering');
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
