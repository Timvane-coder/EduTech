import { EnhancedTriangleCentersWorkbook } from './triangle-centers-workbook.js';
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




// ============== TRIANGLE CENTERS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedTriangleCenterProblems() {
    const relatedProblems = [];

    // Problem 1: Centroid (Easiest - Just averaging coordinates)
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Find the Centroid (Balance Point)',
        problem: 'Find the centroid of triangle ABC with vertices A(0,0), B(6,0), C(3,6)',
        vertices: [[0, 0], [6, 0], [3, 6]],
        centerType: 'centroid',
        context: { 
            difficulty: 'beginner', 
            topic: 'Triangle Centroid',
            geometricProperty: 'Balance point and center of mass'
        },
        subparts: [
            'Given vertices: A(0,0), B(6,0), C(3,6)',
            'The centroid formula: G = ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3)',
            'Calculate x-coordinate: Gₓ = (0+6+3)/3 = 9/3 = 3',
            'Calculate y-coordinate: Gᵧ = (0+0+6)/3 = 6/3 = 2',
            'Centroid G = (3, 2)',
            'Property: G divides each median in ratio 2:1 from vertex',
            'Check: Midpoint of BC = (4.5, 3), distance from A to G vs G to midpoint ✓'
        ],
        helper: 'The centroid is simply the average of the three vertex coordinates - like finding the center point',
        solution: 'G(3, 2)',
        realWorldContext: 'This is where you would place your finger to balance a triangular piece of cardboard',
        visualTip: 'Draw the three medians (lines from each vertex to the midpoint of the opposite side) - they all meet at the centroid',
        expectedAnswer: [3, 2]
    });

    // Problem 2: Circumcenter of Right Triangle (Medium - Using special case)
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Find the Circumcenter of a Right Triangle',
        problem: 'Find the circumcenter of right triangle ABC with vertices A(0,0), B(8,0), C(0,6)',
        vertices: [[0, 0], [8, 0], [0, 6]],
        centerType: 'circumcenter',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Triangle Circumcenter',
            geometricProperty: 'Center of circumscribed circle'
        },
        subparts: [
            'Given vertices: A(0,0), B(8,0), C(0,6)',
            'Check if right triangle:',
            '  AB = 8, AC = 6, BC = √(64+36) = 10',
            '  Check: 8² + 6² = 64 + 36 = 100 = 10² ✓ (Pythagorean theorem)',
            '  This is a right triangle with right angle at A',
            'Special property: For right triangles, circumcenter is at midpoint of hypotenuse',
            'Hypotenuse is BC (the longest side)',
            'Midpoint of BC: O = ((8+0)/2, (0+6)/2) = (4, 3)',
            'Circumcenter O = (4, 3)',
            'Circumradius R = 5 (half the hypotenuse)',
            'Verify: Distance from O to each vertex = 5 ✓'
        ],
        helper: 'For right triangles, there\'s a shortcut: the circumcenter is always at the midpoint of the hypotenuse!',
        solution: 'O(4, 3) with radius R = 5',
        realWorldContext: 'This is where you would place a cell tower to be equidistant from three towns at the vertices',
        visualTip: 'The circumcircle passes through all three vertices, and its center is on the hypotenuse',
        expectedAnswer: [4, 3]
    });

    // Problem 3: Incenter (Medium - Weighted average)
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Find the Incenter (Center of Inscribed Circle)',
        problem: 'Find the incenter of triangle ABC with vertices A(0,0), B(9,0), C(0,12)',
        vertices: [[0, 0], [9, 0], [0, 12]],
        centerType: 'incenter',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Triangle Incenter',
            geometricProperty: 'Center of inscribed circle'
        },
        subparts: [
            'Given vertices: A(0,0), B(9,0), C(0,12)',
            'Step 1: Calculate side lengths',
            '  a = BC = √((9-0)² + (0-12)²) = √(81+144) = √225 = 15',
            '  b = AC = 12',
            '  c = AB = 9',
            'Step 2: Apply incenter formula (weighted average)',
            '  I = (a·A + b·B + c·C)/(a+b+c)',
            '  Iₓ = (15·0 + 12·9 + 9·0)/(15+12+9) = 108/36 = 3',
            '  Iᵧ = (15·0 + 12·0 + 9·12)/(15+12+9) = 108/36 = 3',
            'Incenter I = (3, 3)',
            'Step 3: Calculate inradius',
            '  Semiperimeter s = (15+12+9)/2 = 18',
            '  Area = (1/2)·9·12 = 54',
            '  Inradius r = Area/s = 54/18 = 3',
            'The inscribed circle has center (3,3) and radius 3'
        ],
        helper: 'The incenter uses weighted averaging - longer sides have more influence on where the center is located',
        solution: 'I(3, 3) with inradius r = 3',
        realWorldContext: 'This is the center of the largest circular pool you could fit inside a triangular backyard',
        visualTip: 'Draw the angle bisectors from each vertex - they meet at the incenter, which touches all three sides',
        expectedAnswer: [3, 3]
    });

    // Problem 4: Orthocenter (Hard - General case requiring altitude intersections)
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Find the Orthocenter (Where Altitudes Meet)',
        problem: 'Find the orthocenter of triangle ABC with vertices A(0,0), B(6,0), C(3,4)',
        vertices: [[0, 0], [6, 0], [3, 4]],
        centerType: 'orthocenter',
        context: { 
            difficulty: 'advanced', 
            topic: 'Triangle Orthocenter',
            geometricProperty: 'Intersection of altitudes'
        },
        subparts: [
            'Given vertices: A(0,0), B(6,0), C(3,4)',
            'Step 1: Find altitude from A to BC',
            '  Slope of BC: m = (4-0)/(3-6) = 4/(-3) = -4/3',
            '  Perpendicular slope: -1/m = 3/4',
            '  Altitude from A: y = (3/4)x',
            'Step 2: Find altitude from B to AC',
            '  Slope of AC: m = (4-0)/(3-0) = 4/3',
            '  Perpendicular slope: -1/m = -3/4',
            '  Altitude from B(6,0): y - 0 = (-3/4)(x - 6)',
            '  Simplify: y = (-3/4)x + 9/2',
            'Step 3: Find intersection of altitudes',
            '  (3/4)x = (-3/4)x + 9/2',
            '  (3/4)x + (3/4)x = 9/2',
            '  (6/4)x = 9/2',
            '  x = (9/2)·(4/6) = 3',
            '  y = (3/4)·3 = 9/4 = 2.25',
            'Orthocenter H = (3, 2.25)',
            'This acute triangle has its orthocenter inside the triangle ✓'
        ],
        helper: 'To find the orthocenter, construct perpendiculars from vertices to opposite sides and find where they intersect',
        solution: 'H(3, 2.25)',
        realWorldContext: 'In structural engineering, the orthocenter appears when analyzing perpendicular force components',
        visualTip: 'Draw perpendicular lines from each vertex to the opposite side - they all meet at one point',
        expectedAnswer: [3, 2.25]
    });

    // Problem 5: Euler Line (Hard - Finding multiple centers and verifying collinearity)
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Verify the Euler Line (Remarkable Collinearity)',
        problem: 'Find the circumcenter, centroid, and orthocenter of triangle ABC with vertices A(0,0), B(6,0), C(3,6), then verify they lie on the Euler line',
        vertices: [[0, 0], [6, 0], [3, 6]],
        centerType: 'euler_line',
        context: { 
            difficulty: 'advanced', 
            topic: 'Euler Line Theorem',
            geometricProperty: 'Collinearity of major triangle centers'
        },
        subparts: [
            'Given vertices: A(0,0), B(6,0), C(3,6)',
            'Step 1: Find Centroid G',
            '  G = ((0+6+3)/3, (0+0+6)/3) = (3, 2)',
            'Step 2: Find Circumcenter O',
            '  Perpendicular bisector of AB: x = 3',
            '  Perpendicular bisector of BC: y - 3 = (3/6)(x - 4.5)',
            '  Solving: O = (3, 3)',
            'Step 3: Find Orthocenter H',
            '  Altitude from A: slope = -1, equation: y = -x',
            '  Altitude from B: slope through C, solve to get H = (3, 0)',
            'Step 4: Verify Euler Line',
            '  Check collinearity: all three points have x = 3 ✓',
            '  Points lie on vertical line x = 3',
            'Step 5: Verify ratio HG:GO',
            '  H = (3,0), G = (3,2), O = (3,3)',
            '  HG = |2-0| = 2',
            '  GO = |3-2| = 1',
            '  Ratio HG:GO = 2:1 ✓',
            'Step 6: Find Nine-Point Center N',
            '  N = (O + H)/2 = ((3+3)/2, (3+0)/2) = (3, 1.5)',
            '  N is midpoint of OH ✓',
            'All four centers lie on the Euler line x = 3!'
        ],
        helper: 'The Euler line is one of geometry\'s most beautiful theorems - four special centers all line up perfectly!',
        solution: 'O(3,3), G(3,2), H(3,0), N(3,1.5) all on line x=3 with HG:GO = 2:1',
        realWorldContext: 'This remarkable collinearity demonstrates the deep mathematical structure underlying triangles',
        visualTip: 'Plot all four centers and draw the line through them - they\'re perfectly aligned!',
        expectedAnswer: { exists: true, ratio: 2.0, collinear: true }
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveTriangleCenterRelatedProblems() {
    const problems = generateRelatedTriangleCenterProblems();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Triangle Center Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedTriangleCentersWorkbook({
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
            const result = workbook.solveTriangleCenterProblem({
                vertices: problem.vertices,
                centerType: problem.centerType,
                scenario: problem.scenario,
                parameters: {},
                context: problem.context
            });

            solvedProblems.push({
                problem: problem,
                workbook: workbook,
                result: result
            });

            console.log(`    ✓ Solution: ${JSON.stringify(result.center || result.coordinates)}`);
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
    console.log('Generating Triangle Centers Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Triangle Centers Workbook',
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
            text: 'Centroid, Circumcenter, Incenter, Orthocenter, and Euler Line',
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
            text: 'Triangle Centers (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const triangleProblems = generateRelatedTriangleCenterProblems();
    triangleProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario} [${problem.difficulty}]: ${problem.centerType}`,
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
            text: 'This workbook explores the fascinating world of triangle centers - special points that reveal the hidden symmetry and beauty of triangles. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed geometric explanations',
        '• Multiple explanation styles (conceptual, procedural, visual, geometric)',
        '• Classical compass-and-straightedge constructions',
        '• Modern coordinate geometry approaches',
        '• Common mistakes and error prevention in geometric reasoning',
        '• Self-check questions and geometric thinking prompts',
        '• Real-world applications from GPS to architecture',
        '• Historical context from ancient Greeks to Euler',
        '• Alternative solution methods and construction techniques',
        '• Verification using geometric properties',
        '• Visual tips for understanding spatial relationships',
        '• Pedagogical notes for deeper geometric insight'
    ];

    features.forEach(feature => {
        documentChildren.push(
            new docx.Paragraph({
                text: feature,
                spacing: { after: 100 }
            })
        );
    });

    // ============== GEOMETRIC FOUNDATIONS ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Triangle Centers: Overview',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    const centersOverview = [
        {
            name: 'Centroid (G)',
            description: 'The balance point where medians intersect. Divides each median 2:1 from vertex.',
            formula: 'G = ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3)',
            property: 'Always inside the triangle'
        },
        {
            name: 'Circumcenter (O)',
            description: 'Center of circle through all vertices. Where perpendicular bisectors meet.',
            formula: 'Equidistant from all three vertices',
            property: 'Can be inside, on, or outside triangle'
        },
        {
            name: 'Incenter (I)',
            description: 'Center of inscribed circle. Where angle bisectors intersect.',
            formula: 'I = (a·A + b·B + c·C)/(a+b+c)',
            property: 'Always inside the triangle'
        },
        {
            name: 'Orthocenter (H)',
            description: 'Where altitudes intersect. Related to perpendicular heights.',
            formula: 'Intersection of altitude lines',
            property: 'Position depends on triangle type'
        },
        {
            name: 'Euler Line',
            description: 'Remarkable line through O, G, H, and N with ratio HG:GO = 2:1',
            formula: 'Collinearity of four centers',
            property: 'Does not exist for equilateral triangles'
        }
    ];

    centersOverview.forEach(center => {
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: `${center.name}: `,
                        bold: true
                    }),
                    new docx.TextRun({
                        text: center.description
                    })
                ],
                spacing: { after: 100 }
            })
        );
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: '  Formula: ',
                        italics: true
                    }),
                    new docx.TextRun({
                        text: center.formula
                    })
                ],
                spacing: { after: 100 }
            })
        );
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: '  Property: ',
                        italics: true
                    }),
                    new docx.TextRun({
                        text: center.property
                    })
                ],
                spacing: { after: 200 }
            })
        );
    });

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Triangle Centers Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Triangle Centers Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const triangleSolved = solveTriangleCenterRelatedProblems();
    
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

        // Center type highlight
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: '📐 Center Type: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.centerType.replace(/_/g, ' ').toUpperCase(),
                        bold: true,
                        color: '7B1FA2'
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
                        fill: "F3E5F5",
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

        // Vertices display
        documentChildren.push(
            new docx.Paragraph({
                text: 'Triangle Vertices:',
                bold: true,
                spacing: { after: 100 }
            })
        );

        const vertexLabels = ['A', 'B', 'C'];
        solved.problem.vertices.forEach((vertex, i) => {
            documentChildren.push(
                new docx.Paragraph({
                    text: `  ${vertexLabels[i]}(${vertex[0]}, ${vertex[1]})`,
                    spacing: { after: 50 }
                })
            );
        });

        documentChildren.push(
            new docx.Paragraph({
                text: '',
                spacing: { after: 200 }
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
            text: 'Congratulations on exploring these 5 triangle center problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered the centroid - the balance point of any triangle',
        'You\'ve discovered the circumcenter and its special property for right triangles',
        'You\'ve learned about the incenter and how it creates the largest inscribed circle',
        'You\'ve constructed the orthocenter using perpendicular altitudes',
        'You\'ve verified the remarkable Euler line - one of geometry\'s most beautiful theorems',
        'You\'ve seen both coordinate geometry and classical construction methods',
        'You\'ve explored real-world applications from GPS to architecture'
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
            text: 'Key Geometric Insights:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const insights = [
        'The centroid always lies inside the triangle - it\'s the "average" of the vertices',
        'The circumcenter can be inside, on, or outside depending on whether the triangle is acute, right, or obtuse',
        'The incenter is always inside because angle bisectors always meet internally',
        'The orthocenter\'s position reveals the triangle\'s type: inside for acute, on for right, outside for obtuse',
        'The Euler line connects four major centers (O, G, H, N) with a perfect 2:1 ratio - except for equilateral triangles',
        'Different centers serve different geometric purposes: balance (G), equidistance from vertices (O), equidistance from sides (I), perpendicular heights (H)'
    ];

    insights.forEach(insight => {
        documentChildren.push(
            new docx.Paragraph({
                text: `• ${insight}`,
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
        'Explore the nine-point circle and Feuerbach\'s theorem',
        'Study the Fermat point (Torricelli point) for minimizing distances',
        'Investigate excircles and the Nagel point',
        'Learn about the symmedian point and other advanced centers',
        'Apply these concepts to coordinate geometry problems',
        'Use dynamic geometry software to visualize center movements',
        'Explore proofs of the Euler line theorem',
        'Study trilinear and barycentric coordinates'
    ];

    nextSteps.forEach((step, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${step}`,
                spacing: { after: 100 }
            })
        );
    });

    // ============== GLOSSARY ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Glossary of Terms',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    const glossary = [
        { term: 'Median', definition: 'A line segment from a vertex to the midpoint of the opposite side' },
        { term: 'Altitude', definition: 'A perpendicular line from a vertex to the opposite side' },
        { term: 'Perpendicular Bisector', definition: 'A line perpendicular to a side passing through its midpoint' },
        { term: 'Angle Bisector', definition: 'A ray that divides an angle into two equal parts' },
        { term: 'Circumradius (R)', definition: 'Radius of the circumscribed circle' },
        { term: 'Inradius (r)', definition: 'Radius of the inscribed circle' },
        { term: 'Semiperimeter (s)', definition: 'Half the perimeter: s = (a+b+c)/2' },
        { term: 'Collinear', definition: 'Points that lie on the same straight line' },
        { term: 'Concurrent', definition: 'Lines that intersect at a single point' }
    ];

    glossary.forEach(item => {
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: `${item.term}: `,
                        bold: true
                    }),
                    new docx.TextRun({
                        text: item.definition
                    })
                ],
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
        const filename = 'triangle_centers_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Centroid: 1 problem (Easy)');
        console.log('    - Circumcenter: 1 problem (Medium - Right Triangle)');
        console.log('    - Incenter: 1 problem (Medium)');
        console.log('    - Orthocenter: 1 problem (Hard)');
        console.log('    - Euler Line: 1 problem (Hard - Multiple Centers)');
        console.log('\n📄 ESTIMATED PAGES: 50-60 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and visual highlighting');
        console.log('  • Center type identification with color coding');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Visual tips for geometric understanding');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Triangle vertices clearly displayed');
        console.log('  • Complete step-by-step solution with enhanced explanations');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, geometric)');
        console.log('  • Classical compass-and-straightedge constructions');
        console.log('  • Modern coordinate geometry methods');
        console.log('  • Verification using geometric properties');
        console.log('  • Key concepts and theorems');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Historical context (Euler, Feuerbach, ancient Greeks)');
        console.log('  • Alternative solution methods');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary');
        console.log('  • Comprehensive glossary of geometric terms');
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
