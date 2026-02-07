import { EnhancedTriangleAreaMathematicalWorkbook } from './triangle-area-workbook.js';
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
                    } else if (row[0] && !row[1]) {
                        // Single item (like bullet points)
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


// ============== TRIANGLE AREA - RELATED PROBLEMS GENERATOR ==============

function generateRelatedTriangleAreaProblems() {
    const relatedProblems = [];

    // Problem 1: Basic Triangle Area (Whole Numbers)
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Basic Triangle Area Calculation',
        problem: 'Find the area of a triangle with base 8 cm and height 6 cm',
        parameters: { 
            base: 8, 
            height: 6, 
            unit: 'cm' 
        },
        problemType: 'base_height_given',
        context: { 
            difficulty: 'beginner', 
            topic: 'Triangle Area - Base and Height',
            realWorld: 'Calculating area for basic geometric shapes'
        },
        subparts: [
            'Given: Base = 8 cm, Height = 6 cm',
            'Formula: Area = (1/2) × base × height',
            'Substitute: A = (1/2) × 8 × 6',
            'Multiply base and height: 8 × 6 = 48',
            'Divide by 2: 48 ÷ 2 = 24',
            'Final Answer: Area = 24 cm²'
        ],
        helper: 'Remember: Triangle area is always HALF of base times height',
        solution: '24 cm²',
        realWorldContext: 'Like finding the area of a triangular garden bed to know how much soil or mulch to buy',
        visualTip: 'Imagine a rectangle with the same base and height - the triangle fills exactly half of it!'
    });

    // Problem 2: Triangle Area with Decimals
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Triangle Area with Decimal Measurements',
        problem: 'A triangular sail has base 12.5 meters and height 9.6 meters. Calculate its area.',
        parameters: { 
            base: 12.5, 
            height: 9.6, 
            unit: 'm' 
        },
        problemType: 'base_height_given',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Triangle Area with Decimals',
            realWorld: 'Real measurements often involve decimals'
        },
        subparts: [
            'Given: Base = 12.5 m, Height = 9.6 m',
            'Formula: Area = (1/2) × base × height',
            'Substitute: A = (1/2) × 12.5 × 9.6',
            'Multiply: 12.5 × 9.6 = 120',
            'Divide by 2: 120 ÷ 2 = 60',
            'Final Answer: Area = 60 m²',
            'Check: (0.5) × 12.5 × 9.6 = 60 ✓'
        ],
        helper: 'Work carefully with decimals - multiply first, then divide by 2',
        solution: '60 m²',
        realWorldContext: 'Boat builders need to calculate sail area to ensure proper performance',
        visualTip: 'Picture a triangular sail catching wind - its area determines how much wind force it can capture'
    });

    // Problem 3: Find Missing Base
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Finding the Base of a Triangle',
        problem: 'A triangle has an area of 45 cm² and a height of 9 cm. Find the base.',
        parameters: { 
            area: 45, 
            height: 9, 
            unit: 'cm' 
        },
        problemType: 'find_base',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Reverse Triangle Area Calculation',
            realWorld: 'Sometimes we know the area and need to find dimensions'
        },
        subparts: [
            'Given: Area = 45 cm², Height = 9 cm',
            'Formula: Area = (1/2) × base × height',
            'Substitute: 45 = (1/2) × base × 9',
            'Rearrange: base = (2 × Area) / height',
            'Substitute: base = (2 × 45) / 9',
            'Calculate: base = 90 / 9 = 10',
            'Final Answer: Base = 10 cm',
            'Check: (1/2) × 10 × 9 = 45 ✓'
        ],
        helper: 'To find base: multiply area by 2, then divide by height',
        solution: '10 cm',
        realWorldContext: 'Like figuring out how wide a triangular plot of land is when you know its area and depth',
        visualTip: 'Think backwards: if the triangle covers 45 cm², work backwards to find the base'
    });

    // Problem 4: Unit Conversion Challenge
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Triangle Area with Unit Conversion',
        problem: 'Calculate the area of a triangle with base 50 cm and height 1.5 m. Express answer in cm².',
        parameters: { 
            base: 50, 
            baseUnit: 'cm',
            height: 1.5, 
            heightUnit: 'm'
        },
        problemType: 'unit_conversion',
        context: { 
            difficulty: 'advanced', 
            topic: 'Triangle Area with Mixed Units',
            realWorld: 'Real-world measurements often come in different units'
        },
        subparts: [
            'Given: Base = 50 cm, Height = 1.5 m',
            '⚠️ Units are different! Must convert first.',
            'Convert height: 1.5 m = 150 cm',
            'Now: Base = 50 cm, Height = 150 cm',
            'Formula: Area = (1/2) × base × height',
            'Substitute: A = (1/2) × 50 × 150',
            'Multiply: 50 × 150 = 7,500',
            'Divide by 2: 7,500 ÷ 2 = 3,750',
            'Final Answer: Area = 3,750 cm²',
            'Alternative: 0.375 m² (if converted to meters)'
        ],
        helper: 'CRITICAL: Always convert to the same units before calculating!',
        solution: '3,750 cm² (or 0.375 m²)',
        realWorldContext: 'Construction plans might mix centimeters and meters - you must convert for accurate calculations',
        visualTip: 'Draw a conversion chart: 1 m = 100 cm, so 1.5 m = 150 cm'
    });

    // Problem 5: Finding Missing Height
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Finding the Height of a Triangle',
        problem: 'A triangular roof section has an area of 84 square feet and a base of 12 feet. What is its height?',
        parameters: { 
            area: 84, 
            base: 12, 
            unit: 'ft' 
        },
        problemType: 'find_height',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Reverse Triangle Area Calculation',
            realWorld: 'Carpenters and roofers often need to find missing dimensions'
        },
        subparts: [
            'Given: Area = 84 ft², Base = 12 ft',
            'Formula: Area = (1/2) × base × height',
            'Substitute: 84 = (1/2) × 12 × height',
            'Rearrange: height = (2 × Area) / base',
            'Substitute: height = (2 × 84) / 12',
            'Calculate: height = 168 / 12',
            'Simplify: height = 14',
            'Final Answer: Height = 14 ft',
            'Check: (1/2) × 12 × 14 = 84 ✓'
        ],
        helper: 'To find height: multiply area by 2, then divide by base',
        solution: '14 ft',
        realWorldContext: 'Roofers need to know the height of roof sections to calculate materials and ensure proper drainage',
        visualTip: 'Imagine the roof triangle - if you know its base and total area, you can work backwards to find how tall it is'
    });

    return relatedProblems;
}


// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveTriangleAreaRelatedProblems() {
    const problems = generateRelatedTriangleAreaProblems();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Triangle Area Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedTriangleAreaMathematicalWorkbook({
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
            const result = workbook.solveTriangleAreaProblem({
                base: problem.parameters.base,
                height: problem.parameters.height,
                area: problem.parameters.area,
                unit: problem.parameters.unit,
                baseUnit: problem.parameters.baseUnit,
                heightUnit: problem.parameters.heightUnit,
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

            const solutionDisplay = result.area !== undefined ? 
                `${result.area} ${result.solution?.areaUnit || 'units²'}` :
                result.base !== undefined ? 
                `base = ${result.base} ${result.solution?.unit || 'units'}` :
                `height = ${result.height} ${result.solution?.unit || 'units'}`;

            console.log(`    ✓ Solution: ${solutionDisplay}`);
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

async function generateTriangleAreaDocument() {
    console.log('Generating Triangle Area Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Triangle Area Calculations Workbook',
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
            text: 'Base × Height ÷ 2: From Basic Calculations to Unit Conversions',
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
            text: 'Triangle Area Problems (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const triangleProblems = generateRelatedTriangleAreaProblems();
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
            text: 'This workbook contains 5 carefully selected triangle area problems that progressively build your understanding of geometric area calculations. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with visual guidance',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Understanding of the formula: Area = (1/2) × base × height',
        '• Common mistakes and error prevention tips',
        '• Self-check questions and thinking prompts',
        '• Real-world applications from construction, sailing, and gardening',
        '• Alternative solution methods and verification techniques',
        '• Unit conversion strategies for mixed measurements',
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
            text: '',
            spacing: { after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Why Triangle Area Matters:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const whyMatters = [
        '🏗️ Construction: Calculating roof sections, support beams, and triangular structures',
        '⛵ Marine: Determining sail area for boats and ships',
        '🌱 Landscaping: Planning triangular garden beds and irrigation zones',
        '🎨 Design: Creating triangular elements in art and architecture',
        '📐 Engineering: Analyzing triangular components in bridges and trusses',
        '🗺️ Surveying: Measuring triangular plots of land'
    ];

    whyMatters.forEach(reason => {
        documentChildren.push(
            new docx.Paragraph({
                text: reason,
                spacing: { after: 100 }
            })
        );
    });

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Triangle Area Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Triangle Area Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const triangleSolved = solveTriangleAreaRelatedProblems();
    
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
                    fill: "E3F2FD",
                    type: docx.ShadingType.CLEAR
                }
            })
        );

        // Difficulty level with emoji
        const difficultyEmoji = {
            'easy': '🟢',
            'medium': '🟡',
            'hard': '🔴'
        };

        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: `${difficultyEmoji[solved.problem.difficulty]} Difficulty: `,
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
                spacing: { after: 150 },
                shading: {
                    fill: "FFF9C4",
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
                        fill: "E1F5FE",
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
                        text: '✓ Final Answer: ',
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
            text: 'Congratulations on completing these 5 triangle area problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered the fundamental formula: Area = (1/2) × base × height',
        'You\'ve practiced with whole numbers and decimal measurements',
        'You\'ve learned to find missing base or height when area is known',
        'You\'ve handled unit conversion challenges (cm to m)',
        'You\'ve seen real-world applications in construction, sailing, and landscaping',
        'You\'ve learned error prevention (like forgetting to divide by 2)',
        'You understand why triangles are half the area of rectangles'
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
        '📐 Area = (1/2) × base × height',
        '📐 Base = (2 × Area) / height',
        '📐 Height = (2 × Area) / base',
        '📐 Always use square units for area (cm², m², ft²)',
        '📐 Convert to same units before calculating!'
    ];

    keyFormulas.forEach(formula => {
        documentChildren.push(
            new docx.Paragraph({
                text: formula,
                spacing: { after: 100 },
                bold: true
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
        'Practice with right triangles and use legs as base and height',
        'Explore Heron\'s formula for triangles when you know all three sides',
        'Learn about trigonometric area formulas: A = (1/2)ab·sin(C)',
        'Calculate areas of composite shapes containing triangles',
        'Apply triangle area to real-world projects (build something!)',
        'Study similar triangles and area ratios',
        'Move on to areas of other polygons (quadrilaterals, pentagons, etc.)'
    ];

    nextSteps.forEach((step, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${step}`,
                spacing: { after: 100 }
            })
        );
    });

    // ============== QUICK REFERENCE GUIDE ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Quick Reference Guide',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Common Mistakes to Avoid:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const commonMistakes = [
        '❌ Forgetting to divide by 2 (using b × h instead of (1/2) × b × h)',
        '❌ Using slant height instead of perpendicular height',
        '❌ Forgetting square units in the answer',
        '❌ Mixing units without converting (e.g., base in cm, height in m)',
        '❌ When finding base/height: forgetting to multiply area by 2 first'
    ];

    commonMistakes.forEach(mistake => {
        documentChildren.push(
            new docx.Paragraph({
                text: mistake,
                spacing: { after: 100 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: 'Problem-Solving Checklist:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const checklist = [
        '□ Identify what you\'re looking for (area, base, or height)',
        '□ Check if units are consistent - convert if necessary',
        '□ Verify height is perpendicular to base',
        '□ Write the formula clearly',
        '□ Substitute values carefully',
        '□ Multiply base × height first',
        '□ Then divide by 2 (or multiply by 0.5)',
        '□ Include square units in your final answer',
        '□ Check your answer by substituting back'
    ];

    checklist.forEach(item => {
        documentChildren.push(
            new docx.Paragraph({
                text: item,
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
        const filename = 'triangle_area_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Basic Area Calculation: 1 problem');
        console.log('    - Area with Decimals: 1 problem');
        console.log('    - Finding Missing Base: 1 problem');
        console.log('    - Unit Conversion: 1 problem');
        console.log('    - Finding Missing Height: 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 45-55 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and visual highlighting');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Visual tips to aid geometric understanding');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Complete step-by-step solution with geometric reasoning');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Verification of solutions with detailed checking');
        console.log('  • Key concepts and formula derivations');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods');
        console.log('  • Visualization diagrams and suggestions');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary');
        console.log('  • Unit conversion strategies');
        console.log('='.repeat(80) + '\n');
    } catch (error) {
        console.error(`\n❌ Error saving document: ${error.message}`);
        console.error(error.stack);
    }
}

// ============== RUN THE DOCUMENT GENERATION ==============

generateTriangleAreaDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});

