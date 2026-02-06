import { EnhancedQuadraticSystemsMathematicalWorkbook } from './quadratic-systems-workbook.js';
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




// ============== QUADRATIC SYSTEMS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedQuadraticSystems() {
    const relatedProblems = [];

    // Problem 1: Simple Line-Parabola System
   /** relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Line Intersecting Parabola',
        problem: 'Find the intersection points of the line y = x + 1 and the parabola y = x²',
        equation1: 'y = x + 1',
        equation2: 'y = x²',
        parameters: { 
            linear: { m: 1, b: 1 },
            quadratic: { a: 1, b: 0, c: 0 }
        },
        problemType: 'line_parabola',
        context: { 
            difficulty: 'beginner', 
            topic: 'Linear-Quadratic Systems',
            geometricMeaning: 'Where a straight line crosses a parabola',
            realWorld: 'Finding where a straight path intersects a curved trajectory'
        },
        subparts: [
            'Given: y = x + 1 and y = x²',
            'Step 1: Since both equations are solved for y, set them equal',
            'x + 1 = x²',
            'Step 2: Rearrange to standard form',
            'x² - x - 1 = 0',
            'Step 3: This doesn\'t factor nicely, so we can\'t factor it easily',
            'Actually, let me recalculate: x² - x - 1 = 0',
            'Wait, let me try different values: if we check x = -1 and x = 2',
            'For x = -1: y = -1 + 1 = 0, and y = (-1)² = 1 (doesn\'t match)',
            'Let me factor correctly: x² = x + 1, so x² - x - 1 = 0',
            'Actually, try x = 2: 2² = 4 and 2 + 1 = 3 (no)',
            'Try x = -1: (-1)² = 1 and -1 + 1 = 0 (no)',
            'Let me solve properly with factoring a simpler version',
            'Actually for this problem, let\'s solve: when does x² = x + 1?',
            'Rearranging: x² - x - 1 = 0',
            'This requires quadratic formula but let me try integer values first',
            'Actually, let me correct this to use a factorable example'
        ],
        helper: 'For line-parabola systems, substitute the linear equation into the quadratic equation',
        solution: 'Let me recalculate with correct example',
        solutionPoints: [],
        realWorldContext: 'Like finding when a ball thrown upward reaches the same height as a ramp',
        methodUsed: 'Substitution method'
    });
    */
    // Let me fix Problem 1 with a factorable example
    relatedProblems[0] = {
        difficulty: 'easy',
        scenario: 'Line Intersecting Parabola',
        problem: 'Find the intersection points of the line y = x + 2 and the parabola y = x²',
        equation1: 'y = x + 2',
        equation2: 'y = x²',
        parameters: { 
            linear: { m: 1, b: 2 },
            quadratic: { a: 1, b: 0, c: 0 }
        },
        problemType: 'line_parabola',
        context: { 
            difficulty: 'beginner', 
            topic: 'Linear-Quadratic Systems',
            geometricMeaning: 'Where a straight line crosses a parabola',
            realWorld: 'Finding where a straight path intersects a curved trajectory'
        },
        subparts: [
            'Given: y = x + 2 and y = x²',
            'Step 1: Set the equations equal (since both equal y)',
            'x + 2 = x²',
            'Step 2: Rearrange to standard form',
            'x² - x - 2 = 0',
            'Step 3: Factor the quadratic',
            '(x - 2)(x + 1) = 0',
            'Step 4: Solve for x',
            'x = 2 or x = -1',
            'Step 5: Find corresponding y-values',
            'For x = 2: y = 2 + 2 = 4',
            'For x = -1: y = -1 + 2 = 1',
            'Solutions: (2, 4) and (-1, 1)',
            'Check: At (2,4): 4 = 2² ✓ and 4 = 2 + 2 ✓',
            'Check: At (-1,1): 1 = (-1)² ✓ and 1 = -1 + 2 ✓'
        ],
        helper: 'For line-parabola systems, set the equations equal since both are solved for y',
        solution: 'Intersection points: (2, 4) and (-1, 1)',
        solutionPoints: [{x: 2, y: 4}, {x: -1, y: 1}],
        realWorldContext: 'Like finding when a ball thrown upward reaches the same height as a ramp',
        methodUsed: 'Substitution method'
    };

    // Problem 2: Line-Circle System
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Line Intersecting Circle',
        problem: 'Find where the line y = x intersects the circle x² + y² = 8',
        equation1: 'y = x',
        equation2: 'x² + y² = 8',
        parameters: { 
            linear: { m: 1, b: 0 },
            circle: { h: 0, k: 0, r: Math.sqrt(8) }
        },
        problemType: 'line_circle',
        context: { 
            difficulty: 'beginner', 
            topic: 'Line-Circle Systems',
            geometricMeaning: 'Where a line passes through a circle',
            realWorld: 'Finding where a straight road crosses a circular track'
        },
        subparts: [
            'Given: y = x and x² + y² = 8',
            'Step 1: Substitute y = x into the circle equation',
            'x² + (x)² = 8',
            'Step 2: Simplify',
            'x² + x² = 8',
            '2x² = 8',
            'Step 3: Solve for x',
            'x² = 4',
            'x = ±2',
            'Step 4: Find corresponding y-values using y = x',
            'For x = 2: y = 2',
            'For x = -2: y = -2',
            'Solutions: (2, 2) and (-2, -2)',
            'Check: At (2,2): 2² + 2² = 4 + 4 = 8 ✓',
            'Check: At (-2,-2): (-2)² + (-2)² = 4 + 4 = 8 ✓'
        ],
        helper: 'Substitute the linear equation directly into the circle equation',
        solution: 'Intersection points: (2, 2) and (-2, -2)',
        solutionPoints: [{x: 2, y: 2}, {x: -2, y: -2}],
        realWorldContext: 'Like finding where a diagonal road crosses through a circular park',
        methodUsed: 'Substitution method'
    });

    // Problem 3: Two Circles System
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Two Intersecting Circles',
        problem: 'Find where the circles x² + y² = 25 and (x-6)² + y² = 25 intersect',
        equation1: 'x² + y² = 25',
        equation2: '(x-6)² + y² = 25',
        parameters: { 
            circle1: { h: 0, k: 0, r: 5 },
            circle2: { h: 6, k: 0, r: 5 }
        },
        problemType: 'two_circles',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Circle-Circle Systems',
            geometricMeaning: 'Where two circles overlap',
            realWorld: 'Finding overlap area of two radar ranges or wifi coverage zones'
        },
        subparts: [
            'Given: x² + y² = 25 and (x-6)² + y² = 25',
            'Step 1: Expand the second equation',
            'x² - 12x + 36 + y² = 25',
            'Step 2: Subtract the first equation from the expanded second',
            '(x² - 12x + 36 + y²) - (x² + y²) = 25 - 25',
            '-12x + 36 = 0',
            'Step 3: Solve for x',
            '-12x = -36',
            'x = 3',
            'Step 4: Substitute x = 3 into first equation',
            '3² + y² = 25',
            '9 + y² = 25',
            'y² = 16',
            'y = ±4',
            'Solutions: (3, 4) and (3, -4)',
            'Check: At (3,4): 3² + 4² = 9 + 16 = 25 ✓',
            'And: (3-6)² + 4² = 9 + 16 = 25 ✓'
        ],
        helper: 'For two circles, subtract equations to eliminate x² and y² terms',
        solution: 'Intersection points: (3, 4) and (3, -4)',
        solutionPoints: [{x: 3, y: 4}, {x: 3, y: -4}],
        realWorldContext: 'Like finding the overlap points of two cell phone tower coverage areas',
        methodUsed: 'Elimination method'
    });

    // Problem 4: Two Parabolas System
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Two Parabolas Intersecting',
        problem: 'Find where the parabolas y = x² and y = -x² + 8 intersect',
        equation1: 'y = x²',
        equation2: 'y = -x² + 8',
        parameters: { 
            parabola1: { a: 1, b: 0, c: 0 },
            parabola2: { a: -1, b: 0, c: 8 }
        },
        problemType: 'two_parabolas',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Parabola-Parabola Systems',
            geometricMeaning: 'Where an upward and downward opening parabola meet',
            realWorld: 'Finding where two curved paths cross, like bridge arches'
        },
        subparts: [
            'Given: y = x² and y = -x² + 8',
            'Step 1: Set the equations equal',
            'x² = -x² + 8',
            'Step 2: Collect x² terms',
            'x² + x² = 8',
            '2x² = 8',
            'Step 3: Solve for x',
            'x² = 4',
            'x = ±2',
            'Step 4: Find corresponding y-values using y = x²',
            'For x = 2: y = 2² = 4',
            'For x = -2: y = (-2)² = 4',
            'Solutions: (2, 4) and (-2, 4)',
            'Check: At (2,4): 4 = 2² ✓ and 4 = -(2²) + 8 = -4 + 8 ✓',
            'Check: At (-2,4): 4 = (-2)² ✓ and 4 = -(-2)² + 8 ✓'
        ],
        helper: 'When both equations are solved for y, set them equal and solve',
        solution: 'Intersection points: (2, 4) and (-2, 4)',
        solutionPoints: [{x: 2, y: 4}, {x: -2, y: 4}],
        realWorldContext: 'Like finding where two fountain water arcs cross each other',
        methodUsed: 'Setting equations equal'
    });

    // Problem 5: Word Problem - Area and Perimeter
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Rectangle Area and Perimeter Problem',
        problem: 'A rectangle has an area of 24 square units and a perimeter of 20 units. Find its dimensions.',
        equation1: 'xy = 24 (area)',
        equation2: '2x + 2y = 20 (perimeter)',
        parameters: { 
            area: 24,
            perimeter: 20
        },
        problemType: 'word_area_perimeter',
        context: { 
            difficulty: 'advanced', 
            topic: 'Quadratic Systems Word Problems',
            geometricMeaning: 'Finding length and width given area and perimeter',
            realWorld: 'Designing a room or garden with specific area and fencing requirements'
        },
        subparts: [
            'Given: Area = 24 and Perimeter = 20',
            'Let x = length and y = width',
            'Equation 1: xy = 24',
            'Equation 2: 2x + 2y = 20',
            'Step 1: Simplify equation 2',
            '2x + 2y = 20',
            'x + y = 10',
            'y = 10 - x',
            'Step 2: Substitute into equation 1',
            'x(10 - x) = 24',
            '10x - x² = 24',
            'Step 3: Rearrange to standard form',
            '-x² + 10x - 24 = 0',
            'x² - 10x + 24 = 0',
            'Step 4: Factor',
            '(x - 6)(x - 4) = 0',
            'x = 6 or x = 4',
            'Step 5: Find corresponding y-values',
            'If x = 6: y = 10 - 6 = 4',
            'If x = 4: y = 10 - 4 = 6',
            'Solutions: (6, 4) or (4, 6) - same rectangle',
            'The rectangle is 6 units by 4 units',
            'Check: Area = 6 × 4 = 24 ✓',
            'Check: Perimeter = 2(6) + 2(4) = 12 + 8 = 20 ✓'
        ],
        helper: 'Solve the simpler (linear) equation for one variable, then substitute',
        solution: 'Rectangle dimensions: 6 units × 4 units (or 4 units × 6 units)',
        solutionPoints: [{x: 6, y: 4}, {x: 4, y: 6}],
        realWorldContext: 'Like planning a garden with 24 sq ft area using exactly 20 ft of fencing',
        methodUsed: 'Substitution method with word problem setup'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveQuadraticSystemsRelatedProblems() {
    const problems = generateRelatedQuadraticSystems();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Quadratic System Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedQuadraticSystemsMathematicalWorkbook({
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
            const result = workbook.solveQuadraticSystemProblem({
                equation1: problem.equation1,
                equation2: problem.equation2,
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

            console.log(`    ✓ Solution method: ${result.solution?.method || 'Completed'}`);
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
    console.log('Generating Quadratic Systems Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Quadratic Systems Workbook',
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
            text: 'Line-Parabola, Line-Circle, Circle-Circle, Parabola-Parabola, and Word Problems',
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
            text: 'Quadratic Systems (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const quadraticProblems = generateRelatedQuadraticSystems();
    quadraticProblems.forEach((problem, index) => {
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
            text: 'This workbook contains 5 carefully selected quadratic system problems that progressively build your understanding of how curves intersect. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed explanations',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Geometric interpretations showing what solutions mean graphically',
        '• Common mistakes and error prevention tips specific to quadratic systems',
        '• Self-check questions and thinking prompts',
        '• Real-world applications and context',
        '• Alternative solution methods (substitution, elimination, graphical)',
        '• Verification of solutions in both original equations',
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
            text: 'What Makes Quadratic Systems Special:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const specialFeatures = [
        '• Unlike linear equations, quadratic systems can have 0, 1, 2, or even more solutions',
        '• Solutions represent intersection points of curves (circles, parabolas, etc.)',
        '• Visual/geometric understanding is crucial for these problems',
        '• Different methods work better for different types of systems',
        '• Real-world applications include projectile motion, circular coverage areas, and optimization'
    ];

    specialFeatures.forEach(feature => {
        documentChildren.push(
            new docx.Paragraph({
                text: feature,
                spacing: { after: 100 }
            })
        );
    });

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Quadratic Systems Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Quadratic Systems Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const quadraticSolved = solveQuadraticSystemsRelatedProblems();
    
    quadraticSolved.forEach((solved, index) => {
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

        // System of equations
        documentChildren.push(
            new docx.Paragraph({
                text: 'System of Equations:',
                spacing: { after: 100 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `  ${solved.problem.equation1}`,
                spacing: { after: 50 },
                shading: {
                    fill: "F5F5F5",
                    type: docx.ShadingType.CLEAR
                }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `  ${solved.problem.equation2}`,
                spacing: { after: 200 },
                shading: {
                    fill: "F5F5F5",
                    type: docx.ShadingType.CLEAR
                }
            })
        );

        // Difficulty level
        const difficultyColors = {
            'easy': '2E7D32',
            'medium': 'F57C00',
            'hard': 'C62828'
        };

        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'Difficulty: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.difficulty.toUpperCase(),
                        color: difficultyColors[solved.problem.difficulty],
                        bold: true
                    })
                ],
                spacing: { after: 100 }
            })
        );

        // System type
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'System Type: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.context.topic
                    })
                ],
                spacing: { after: 100 }
            })
        );

        // Method used
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: '🔧 Method: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.methodUsed,
                        italics: true
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

        // Geometric meaning
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: '📐 Geometric Meaning: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.context.geometricMeaning
                    })
                ],
                spacing: { after: 100 }
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
                spacing: { before: 200, after: 200 },
                shading: {
                    fill: "E8F5E9",
                    type: docx.ShadingType.CLEAR
                }
            })
        );

        // Solution points visualization
        if (solved.problem.solutionPoints && solved.problem.solutionPoints.length > 0) {
            documentChildren.push(
                new docx.Paragraph({
                    text: 'Intersection Points:',
                    bold: true,
                    spacing: { before: 100, after: 100 }
                })
            );

            solved.problem.solutionPoints.forEach((point, idx) => {
                documentChildren.push(
                    new docx.Paragraph({
                        text: `  Point ${idx + 1}: (${point.x}, ${point.y})`,
                        spacing: { after: 50 },
                        shading: {
                            fill: "E3F2FD",
                            type: docx.ShadingType.CLEAR
                        }
                    })
                );
            });

            documentChildren.push(
                new docx.Paragraph({
                    text: '',
                    spacing: { after: 400 }
                })
            );
        }
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
            text: 'Congratulations on completing these 5 quadratic system problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered line-parabola systems (where straight lines cross curves)',
        'You\'ve learned to solve line-circle systems (straight paths through circular regions)',
        'You\'ve conquered circle-circle systems using the elimination method',
        'You\'ve solved parabola-parabola systems (where two curves intersect)',
        'You\'ve applied quadratic systems to real-world word problems (area and perimeter)',
        'You\'ve seen how different methods (substitution, elimination) work for different system types',
        'You\'ve learned to verify solutions by checking in both original equations'
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
            text: 'Key Concepts Mastered:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const keyConcepts = [
        '🎯 Substitution Method: Best for linear-quadratic systems',
        '🎯 Elimination Method: Powerful for circle-circle systems',
        '🎯 Geometric Interpretation: Solutions are intersection points',
        '🎯 Multiple Solutions: Quadratic systems can have 0, 1, 2, or more solutions',
        '🎯 Verification: Always check solutions in both original equations'
    ];

    keyConcepts.forEach(concept => {
        documentChildren.push(
            new docx.Paragraph({
                text: concept,
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
        'Practice more complex systems with ellipses and hyperbolas',
        'Explore three-dimensional analogs (spheres, planes, etc.)',
        'Study systems with three or more equations',
        'Apply to advanced physics problems (projectile motion, orbital mechanics)',
        'Investigate optimization problems using quadratic systems',
        'Learn about parametric equations and their intersections',
        'Explore numerical methods for systems without algebraic solutions'
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
            text: 'Study Tips for Success:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const studyTips = [
        '📚 Always sketch a quick graph to visualize the problem',
        '📚 Choose your method based on the system type (substitution vs elimination)',
        '📚 Be extra careful with signs when substituting expressions',
        '📚 Remember the ± sign when taking square roots',
        '📚 Find ALL solutions - quadratic systems often have multiple answers',
        '📚 Verify every solution in BOTH original equations',
        '📚 Check if your solutions make sense geometrically and in context'
    ];

    studyTips.forEach(tip => {
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
        const filename = 'quadratic_systems_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Line-Parabola System: 1 problem');
        console.log('    - Line-Circle System: 1 problem');
        console.log('    - Circle-Circle System: 1 problem');
        console.log('    - Parabola-Parabola System: 1 problem');
        console.log('    - Word Problem (Area-Perimeter): 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 50-60 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with visual highlighting and system type identification');
        console.log('  • Both equations displayed clearly');
        console.log('  • Difficulty level with color coding');
        console.log('  • Solution method recommendation');
        console.log('  • Quick helper tips for the specific system type');
        console.log('  • Geometric interpretation (what the solution means visually)');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Complete step-by-step solution with enhanced explanations');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Verification of ALL solutions in both original equations');
        console.log('  • Key concepts for the system type');
        console.log('  • Common mistakes specific to quadratic systems');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods comparison');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary with all intersection points');
        console.log('  • Visual representation of solution points');
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

