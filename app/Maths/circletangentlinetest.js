import { EnhancedCircleTangentMathematicalWorkbook } from './circle-tangent-workbook.js';
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




// ============== CIRCLE TANGENT LINE - RELATED PROBLEMS GENERATOR ==============

function generateRelatedCircleTangentProblems() {
    const relatedProblems = [];

    // Problem 1: Tangent at a Given Point on Circle (Easy)
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Tangent at Point on Circle',
        problem: 'Find the equation of the tangent line to the circle x² + y² = 25 at the point (3, 4)',
        circle: { h: 0, k: 0, r: 5 },
        point: [3, 4],
        problemType: 'tangent_at_point',
        context: { 
            difficulty: 'beginner', 
            topic: 'Tangent at Given Point',
            realWorld: 'Like finding the direction a wheel rolls when it touches the ground at a specific point'
        },
        subparts: [
            'Given: Circle x² + y² = 25 (center at origin, radius 5)',
            'Point of tangency: (3, 4)',
            'Step 1: Verify point is on circle: 3² + 4² = 9 + 16 = 25 ✓',
            'Step 2: Find slope of radius from (0,0) to (3,4): m_r = 4/3',
            'Step 3: Find perpendicular slope: m_t = -3/4',
            'Step 4: Use point-slope form: y - 4 = (-3/4)(x - 3)',
            'Step 5: Simplify: y = (-3/4)x + 25/4',
            'Or in standard form: 3x + 4y = 25'
        ],
        helper: 'The tangent line is always perpendicular to the radius at the point of contact',
        solution: 'y = (-3/4)x + 25/4 or 3x + 4y = 25',
        realWorldContext: 'When a bicycle wheel (circle) touches the ground at a point, the ground (tangent) is perpendicular to the spoke (radius) at that contact point'
    });

    // Problem 2: Horizontal Tangent Line (Easy)
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Horizontal Tangent to Circle',
        problem: 'Find the equations of the horizontal tangent lines to the circle (x - 2)² + (y - 3)² = 16',
        circle: { h: 2, k: 3, r: 4 },
        parameters: { horizontal: true },
        problemType: 'horizontal_vertical_tangent',
        context: { 
            difficulty: 'beginner', 
            topic: 'Horizontal and Vertical Tangents',
            realWorld: 'Finding the highest and lowest points on a circular path'
        },
        subparts: [
            'Given: Circle (x - 2)² + (y - 3)² = 16',
            'Center: (2, 3), Radius: 4',
            'Horizontal tangents have slope = 0',
            'They occur at the top and bottom of the circle',
            'Top tangent: y = k + r = 3 + 4 = 7',
            'Bottom tangent: y = k - r = 3 - 4 = -1',
            'Tangency points: (2, 7) and (2, -1)'
        ],
        helper: 'Horizontal tangents touch the circle at its highest and lowest points',
        solution: 'y = 7 and y = -1',
        realWorldContext: 'Like finding the highest and lowest points on a Ferris wheel (circular motion)'
    });

    // Problem 3: Tangent with Given Slope (Medium)
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Tangent with Given Slope',
        problem: 'Find the equations of the tangent lines to the circle x² + y² = 5 with slope m = 2',
        circle: { h: 0, k: 0, r: Math.sqrt(5) },
        slope: 2,
        problemType: 'tangent_with_slope',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Tangent Lines with Specified Slope',
            realWorld: 'Finding parallel paths that just touch a circular obstacle'
        },
        subparts: [
            'Given: Circle x² + y² = 5 (center at origin, r = √5)',
            'Required slope: m = 2',
            'Step 1: Write tangent as y = 2x + b',
            'Step 2: Convert to standard form: 2x - y + b = 0',
            'Step 3: Use distance formula: |2(0) - 1(0) + b| / √(4 + 1) = √5',
            'Step 4: Simplify: |b| / √5 = √5',
            'Step 5: Solve: |b| = 5, so b = 5 or b = -5',
            'Two tangent lines: y = 2x + 5 and y = 2x - 5'
        ],
        helper: 'Two parallel tangent lines exist with the same slope, one on each side of the circle',
        solution: 'y = 2x + 5 and y = 2x - 5',
        realWorldContext: 'Like two parallel roads that just touch the edge of a circular lake on opposite sides'
    });

    // Problem 4: Tangent Length from External Point (Medium)
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Tangent Length from External Point',
        problem: 'Find the length of the tangent segment from point (5, 0) to the circle x² + y² = 9',
        circle: { h: 0, k: 0, r: 3 },
        externalPoint: [5, 0],
        problemType: 'tangent_length',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Tangent Segment Length',
            realWorld: 'Calculating visibility distance to horizon from elevated position'
        },
        subparts: [
            'Given: Circle x² + y² = 9 (center at origin, radius 3)',
            'External point: (5, 0)',
            'Step 1: Calculate distance from point to center',
            'd = √[(5-0)² + (0-0)²] = √25 = 5',
            'Step 2: Verify point is external: d > r → 5 > 3 ✓',
            'Step 3: Use Pythagorean theorem: L² + r² = d²',
            'L² + 3² = 5²',
            'L² + 9 = 25',
            'L² = 16',
            'L = 4',
            'Check: 4² + 3² = 16 + 9 = 25 = 5² ✓'
        ],
        helper: 'Use the right triangle formed by the center, external point, and tangency point',
        solution: 'L = 4 units',
        realWorldContext: 'Like calculating how far you can see to the horizon from the top of a hill overlooking a circular island'
    });

    // Problem 5: Tangent at Point with Non-Origin Center (Medium)
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Tangent at Point (Shifted Circle)',
        problem: 'Find the equation of the tangent line to the circle (x - 1)² + (y + 2)² = 10 at point (4, -1)',
        circle: { h: 1, k: -2, r: Math.sqrt(10) },
        point: [4, -1],
        problemType: 'tangent_at_point',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Tangent with Shifted Circle',
            realWorld: 'Finding tangent direction at specific points on circular structures'
        },
        subparts: [
            'Given: Circle (x - 1)² + (y + 2)² = 10',
            'Center: (1, -2), Radius: √10',
            'Point of tangency: (4, -1)',
            'Step 1: Verify point on circle: (4-1)² + (-1-(-2))² = 9 + 1 = 10 ✓',
            'Step 2: Find slope of radius: m_r = (-1-(-2))/(4-1) = 1/3',
            'Step 3: Find perpendicular slope: m_t = -3',
            'Step 4: Use point-slope form: y - (-1) = -3(x - 4)',
            'Step 5: Simplify: y + 1 = -3x + 12',
            'y = -3x + 11',
            'Or in standard form: 3x + y = 11'
        ],
        helper: 'Always use the center coordinates (not the origin) when finding the radius slope',
        solution: 'y = -3x + 11 or 3x + y = 11',
        realWorldContext: 'Like determining the direction a ball will roll when it leaves a circular track at a specific exit point'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveCircleTangentRelatedProblems() {
    const problems = generateRelatedCircleTangentProblems();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Circle Tangent Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedCircleTangentMathematicalWorkbook({
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
            const result = workbook.solveTangentProblem({
                circle: problem.circle,
                point: problem.point,
                slope: problem.slope,
                externalPoint: problem.externalPoint,
                scenario: problem.scenario,
                parameters: problem.parameters || {},
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
    console.log('Generating Circle Tangent Lines Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Circle Tangent Lines Workbook',
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
            text: 'Tangent at Point, Tangent with Slope, and Tangent Length',
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
            text: 'Circle Tangent Line Problems (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const tangentProblems = generateRelatedCircleTangentProblems();
    tangentProblems.forEach((problem, index) => {
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
            text: 'This workbook contains 5 carefully selected circle tangent line problems that progressively build your understanding of this important geometric concept. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed geometric explanations',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Common mistakes and error prevention strategies',
        '• Self-check questions and geometric thinking prompts',
        '• Real-world applications and practical context',
        '• Alternative solution methods and approaches',
        '• Verification of tangent conditions',
        '• Pedagogical notes for deeper geometric understanding',
        '• Visual diagrams and geometric interpretations',
        '• Key theorems and properties of tangent lines'
    ];

    features.forEach(feature => {
        documentChildren.push(
            new docx.Paragraph({
                text: feature,
                spacing: { after: 100 }
            })
        );
    });

    // ============== KEY CONCEPTS ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Key Tangent Line Concepts',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    const keyConcepts = [
        '🔹 A tangent line touches a circle at exactly one point',
        '🔹 The tangent is always perpendicular to the radius at the point of tangency',
        '🔹 From an external point, exactly two tangent lines can be drawn to a circle',
        '🔹 Tangent segments from the same external point have equal length',
        '🔹 The perpendicular from the center to a tangent line has length equal to the radius',
        '🔹 Perpendicular slopes multiply to give -1 (negative reciprocal relationship)'
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
    console.log('\nProcessing Circle Tangent Line Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Circle Tangent Line Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const tangentSolved = solveCircleTangentRelatedProblems();
    
    tangentSolved.forEach((solved, index) => {
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
            text: 'Congratulations on completing these 5 circle tangent line problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered finding tangent lines at given points on a circle',
        'You\'ve learned to identify horizontal and vertical tangents',
        'You\'ve practiced finding tangent lines with specified slopes',
        'You\'ve calculated tangent segment lengths from external points',
        'You\'ve worked with circles centered at different positions',
        'You\'ve applied the perpendicularity property of tangents and radii',
        'You\'ve seen real-world applications in wheels, optics, and navigation'
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
        'Practice finding tangent lines from external points (full solution)',
        'Explore common tangents to two circles',
        'Study angles between tangent lines',
        'Apply tangent concepts to real-world engineering problems',
        'Learn about tangent circles and circles of Apollonius',
        'Investigate power of a point theorem',
        'Explore tangent lines to other conic sections (ellipses, parabolas, hyperbolas)'
    ];

    nextSteps.forEach((step, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${step}`,
                spacing: { after: 100 }
            })
        );
    });

    // ============== IMPORTANT FORMULAS REFERENCE ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Quick Reference: Important Formulas',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    const formulas = [
        '📐 Circle Equation (Standard Form): (x - h)² + (y - k)² = r²',
        '📐 Slope Formula: m = (y₂ - y₁) / (x₂ - x₁)',
        '📐 Perpendicular Slopes: m₁ × m₂ = -1',
        '📐 Point-Slope Form: y - y₁ = m(x - x₁)',
        '📐 Distance Formula: d = √[(x₂ - x₁)² + (y₂ - y₁)²]',
        '📐 Tangent Length: L = √(d² - r²) where d = distance from external point to center',
        '📐 Distance from Point to Line: d = |Ax₁ + By₁ + C| / √(A² + B²)',
        '📐 Tangent Condition: Distance from center to tangent line = radius'
    ];

    formulas.forEach(formula => {
        documentChildren.push(
            new docx.Paragraph({
                text: formula,
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
        const filename = 'circle_tangent_lines_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Tangent at Point: 2 problems');
        console.log('    - Horizontal Tangent: 1 problem');
        console.log('    - Tangent with Given Slope: 1 problem');
        console.log('    - Tangent Length: 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 50-60 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and visual highlighting');
        console.log('  • Quick helper tips for geometric insight');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Complete step-by-step solution with geometric reasoning');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Verification of tangent conditions with detailed checking');
        console.log('  • Key concepts and geometric theorems');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods (geometric, algebraic, calculus)');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary');
        console.log('  • Important formulas reference section');
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
