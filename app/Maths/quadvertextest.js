import { EnhancedQuadraticVertexFormMathematicalWorkbook } from './quadratic-vertex-workbook.js';
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




// ============== QUADRATIC VERTEX FORM - RELATED PROBLEMS GENERATOR ==============

function generateRelatedQuadraticVertexFormProblems() {
    const relatedProblems = [];

    // Problem 1: Simple Vertex Identification (Easy)
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Basic Vertex Identification',
        problem: 'Find the vertex of y = (x - 3)² + 5',
        parameters: { a: 1, h: 3, k: 5 },
        problemType: 'identify_vertex',
        context: { 
            difficulty: 'beginner', 
            topic: 'Vertex Identification from Vertex Form',
            realWorld: 'Understanding the turning point of a parabola'
        },
        subparts: [
            'Given: y = (x - 3)² + 5',
            'Standard vertex form: y = a(x - h)² + k',
            'Identify: a = 1, h = 3, k = 5',
            'Vertex is point (h, k)',
            'Vertex = (3, 5)',
            'Note: (x - 3) means h = +3, not -3'
        ],
        helper: 'In vertex form y = a(x - h)² + k, the vertex is simply (h, k). Watch the sign of h!',
        solution: 'Vertex: (3, 5)',
        realWorldContext: 'Like finding the peak point of a hill or the bottom of a valley'
    });

    // Problem 2: Maximum/Minimum Value (Medium)
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Finding Maximum Value',
        problem: 'Find the maximum value of y = -2(x - 4)² + 12 and state when it occurs',
        parameters: { a: -2, h: 4, k: 12 },
        problemType: 'maximum_minimum',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Maximum and Minimum Values',
            realWorld: 'Optimization problems - finding peak performance or optimal conditions'
        },
        subparts: [
            'Given: y = -2(x - 4)² + 12',
            'Identify: a = -2, h = 4, k = 12',
            'Step 1: Check sign of a',
            'a = -2 < 0, so parabola opens downward',
            'Step 2: Opens down → vertex is MAXIMUM',
            'Step 3: Maximum value is k = 12',
            'Step 4: Occurs at x = h = 4',
            'Answer: Maximum value is 12, occurring at x = 4'
        ],
        helper: 'Opens down (a < 0) means vertex is the highest point (maximum). Opens up (a > 0) means lowest point (minimum).',
        solution: 'Maximum value: 12 at x = 4',
        realWorldContext: 'Like finding the maximum height a rocket reaches and when it happens'
    });

    // Problem 3: Range Determination (Medium)
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Determining Range',
        problem: 'Find the range of y = 3(x + 2)² - 7',
        parameters: { a: 3, h: -2, k: -7 },
        problemType: 'range',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Range of Quadratic Functions',
            realWorld: 'Understanding all possible output values'
        },
        subparts: [
            'Given: y = 3(x + 2)² - 7',
            'Identify: a = 3, h = -2, k = -7',
            'Note: (x + 2) means h = -2',
            'Step 1: Identify vertex k-value',
            'k = -7',
            'Step 2: Check opening direction',
            'a = 3 > 0, so opens upward',
            'Step 3: Opens up → minimum at vertex',
            'Minimum y-value is k = -7',
            'Step 4: Write range',
            'Range: y ≥ -7 or [-7, ∞)'
        ],
        helper: 'Range depends on opening: if opens up, y ≥ k; if opens down, y ≤ k',
        solution: 'Range: y ≥ -7 or [-7, ∞)',
        realWorldContext: 'Like determining all possible profits in a business model with minimum profit of -$7 (loss)'
    });

    // Problem 4: Finding Intercepts (Hard)
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Finding X-Intercepts',
        problem: 'Find the x-intercepts of y = -(x - 5)² + 16',
        parameters: { a: -1, h: 5, k: 16 },
        problemType: 'x_intercepts',
        context: { 
            difficulty: 'advanced', 
            topic: 'X-Intercepts from Vertex Form',
            realWorld: 'Finding where a parabola crosses the horizontal axis'
        },
        subparts: [
            'Given: y = -(x - 5)² + 16',
            'Identify: a = -1, h = 5, k = 16',
            'Step 1: Set y = 0',
            '0 = -(x - 5)² + 16',
            'Step 2: Isolate squared term',
            '(x - 5)² = 16',
            'Step 3: Check if solvable',
            '16 > 0 ✓ (can take square root)',
            'Step 4: Take square root of both sides',
            'x - 5 = ±4',
            'Step 5: Solve both cases',
            'x - 5 = 4  →  x = 9',
            'x - 5 = -4  →  x = 1',
            'X-intercepts: (1, 0) and (9, 0)'
        ],
        helper: 'Set y = 0, isolate (x - h)², check if you can take square root, then solve for both ± values',
        solution: 'X-intercepts: (1, 0) and (9, 0)',
        realWorldContext: 'Like finding when a ball hits the ground after being thrown'
    });

    // Problem 5: Complete Analysis with Word Problem (Hard)
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Projectile Motion - Complete Analysis',
        problem: 'A ball is thrown upward. Its height is h(t) = -16(t - 1.5)² + 36 feet, where t is time in seconds. Find: (a) maximum height, (b) when maximum occurs, (c) when ball hits ground',
        parameters: { a: -16, h: 1.5, k: 36 },
        problemType: 'word_problem_projectile',
        context: { 
            difficulty: 'advanced', 
            topic: 'Real-World Projectile Motion',
            realWorld: 'Physics application - trajectory of thrown objects'
        },
        subparts: [
            'Given: h(t) = -16(t - 1.5)² + 36',
            'Identify: a = -16, h = 1.5, k = 36',
            '',
            '(a) Maximum height:',
            'a = -16 < 0, so opens down → vertex is maximum',
            'Maximum height = k = 36 feet',
            '',
            '(b) When maximum occurs:',
            'Maximum occurs at t = h = 1.5 seconds',
            '',
            '(c) When ball hits ground (h = 0):',
            'Set h(t) = 0:',
            '0 = -16(t - 1.5)² + 36',
            '16(t - 1.5)² = 36',
            '(t - 1.5)² = 36/16 = 2.25',
            't - 1.5 = ±1.5',
            't = 1.5 + 1.5 = 3 seconds (after release)',
            't = 1.5 - 1.5 = 0 seconds (at release)',
            'Ball hits ground at t = 3 seconds',
            '',
            'Answers:',
            '(a) Maximum height: 36 feet',
            '(b) Time at maximum: 1.5 seconds',
            '(c) Hits ground: 3 seconds'
        ],
        helper: 'For projectile problems: vertex gives max height and when it occurs; setting h = 0 gives when object hits ground',
        solution: '(a) 36 feet, (b) 1.5 seconds, (c) 3 seconds',
        realWorldContext: 'Real physics problem - models actual ball trajectory with gravity constant of 16 ft/s²'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveQuadraticVertexFormRelatedProblems() {
    const problems = generateRelatedQuadraticVertexFormProblems();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Quadratic Vertex Form Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedQuadraticVertexFormMathematicalWorkbook({
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
            const result = workbook.solveVertexFormProblem({
                equation: problem.problem.includes('y =') ? problem.problem : `y = ${problem.problem}`,
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
    console.log('Generating Quadratic Vertex Form Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Quadratic Vertex Form Workbook',
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
            text: 'Vertex Identification, Extrema, Range, Intercepts, and Applications',
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
            text: 'Quadratic Vertex Form (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const vertexProblems = generateRelatedQuadraticVertexFormProblems();
    vertexProblems.forEach((problem, index) => {
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
            text: 'This workbook contains 5 carefully selected quadratic vertex form problems that progressively build your understanding of parabolas. The vertex form y = a(x - h)² + k immediately reveals key features of quadratic functions, making it essential for understanding optimization and real-world applications.',
            spacing: { after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Each problem includes:',
            spacing: { after: 100 },
            bold: true
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed explanations',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Vertex form pattern recognition and parameter identification',
        '• Opening direction and width analysis',
        '• Maximum/minimum value determination',
        '• Range and domain analysis',
        '• Intercept calculations with existence checks',
        '• Common mistakes and error prevention tips',
        '• Self-check questions and thinking prompts',
        '• Real-world applications (projectile motion, optimization, physics)',
        '• Alternative solution methods',
        '• Verification of solutions',
        '• Pedagogical notes for deeper understanding'
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

    // ============== KEY CONCEPTS SECTION ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Key Concepts Review',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Vertex Form Structure',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const vertexFormConcepts = [
        '• General form: y = a(x - h)² + k',
        '• Vertex: The point (h, k) - the turning point of the parabola',
        '• Parameter a: Controls opening direction and width',
        '  - If a > 0: opens upward (∪ shape), vertex is minimum',
        '  - If a < 0: opens downward (∩ shape), vertex is maximum',
        '  - If |a| > 1: narrower than y = x²',
        '  - If |a| < 1: wider than y = x²',
        '• Axis of Symmetry: The vertical line x = h',
        '• Range: Depends on opening and k-value',
        '  - Opens up: y ≥ k or [k, ∞)',
        '  - Opens down: y ≤ k or (-∞, k]',
        '• Domain: Always all real numbers (-∞, ∞)'
    ];

    vertexFormConcepts.forEach(concept => {
        documentChildren.push(
            new docx.Paragraph({
                text: concept,
                spacing: { after: 100 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: 'Critical Sign Convention',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: '⚠️ IMPORTANT: Watch the signs carefully!',
            spacing: { after: 100 },
            bold: true,
            shading: {
                fill: "FFE6E6",
                type: docx.ShadingType.CLEAR
            }
        })
    );

    const signConventions = [
        '• y = (x - 3)² + 5  →  Vertex is (3, 5), NOT (-3, 5)',
        '• y = (x + 3)² + 5  →  Vertex is (-3, 5), NOT (3, 5)',
        '• The sign of h is OPPOSITE to what appears in the parentheses',
        '• The sign of k is the SAME as what appears at the end'
    ];

    signConventions.forEach(convention => {
        documentChildren.push(
            new docx.Paragraph({
                text: convention,
                spacing: { after: 100 }
            })
        );
    });

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Quadratic Vertex Form Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Quadratic Vertex Form Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const vertexSolved = solveQuadraticVertexFormRelatedProblems();
    
    vertexSolved.forEach((solved, index) => {
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
                    fill: "E8F5E9",
                    type: docx.ShadingType.CLEAR
                }
            })
        );

        // Difficulty level with color coding
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
                        bold: true,
                        color: difficultyColors[solved.problem.difficulty]
                    })
                ],
                spacing: { after: 100 }
            })
        );

        // Topic
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'Topic: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.context.topic
                    })
                ],
                spacing: { after: 150 }
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
                    fill: "FFF9C4",
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
                spacing: { after: 300 },
                shading: {
                    fill: "E3F2FD",
                    type: docx.ShadingType.CLEAR
                }
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
            const isBold = subpart.includes('Answer:') || subpart.includes('(a)') || subpart.includes('(b)') || subpart.includes('(c)');
            const isHighlight = subpart.includes('✓') || subpart.startsWith('X-intercepts:') || subpart.startsWith('Vertex =') || subpart.startsWith('Range:');

            documentChildren.push(
                new docx.Paragraph({
                    text: subpart,
                    spacing: { after: subpart === '' ? 150 : 80 },
                    bold: isBold,
                    ...(isHighlight && {
                        shading: {
                            fill: "E8F5E9",
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
                        bold: true,
                        size: 24
                    }),
                    new docx.TextRun({
                        text: solved.problem.solution,
                        bold: true,
                        size: 24,
                        color: '1B5E20'
                    })
                ],
                spacing: { before: 300, after: 400 },
                shading: {
                    fill: "C8E6C9",
                    type: docx.ShadingType.CLEAR
                }
            })
        );

        // Add practice tip
        documentChildren.push(
            new docx.Paragraph({
                text: '📝 Practice Tip',
                heading: docx.HeadingLevel.HEADING_3,
                spacing: { before: 300, after: 100 }
            })
        );

        const practiceTips = {
            'identify_vertex': 'Practice identifying vertices from equations quickly. Remember: (x - h) means h is positive!',
            'maximum_minimum': 'Always check the sign of a first. Draw a quick U or ∩ to visualize.',
            'range': 'Range always depends on two things: opening direction and the k-value.',
            'x_intercepts': 'Before solving, always check if -k/a is non-negative. No square root of negatives!',
            'word_problem_projectile': 'For projectile problems, vertex gives max height. Setting h = 0 gives landing time.'
        };

        documentChildren.push(
            new docx.Paragraph({
                text: practiceTips[solved.problem.problemType] || 'Review the solution steps and try similar problems.',
                spacing: { after: 200 },
                italics: true
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
            text: 'Congratulations on completing these 5 quadratic vertex form problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered identifying vertices from vertex form equations',
        'You\'ve learned to determine maximum and minimum values',
        'You\'ve practiced finding range based on opening direction',
        'You\'ve calculated x-intercepts and checked for their existence',
        'You\'ve applied vertex form to real-world projectile motion',
        'You\'ve learned critical sign conventions for h and k',
        'You\'ve seen how parameter a affects shape and opening',
        'You\'ve practiced verification and error prevention techniques'
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
        'Vertex Form: y = a(x - h)² + k',
        'Vertex: (h, k)',
        'Axis of Symmetry: x = h',
        'Range (opens up): y ≥ k or [k, ∞)',
        'Range (opens down): y ≤ k or (-∞, k]',
        'Y-intercept: Set x = 0, calculate y = a(0 - h)² + k',
        'X-intercepts: Set y = 0, solve (x - h)² = -k/a (if -k/a ≥ 0)'
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
            text: 'Common Mistakes to Avoid:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const commonMistakes = [
        '❌ Forgetting to change the sign of h: (x - 3) means h = +3, not -3',
        '❌ Thinking a > 0 means maximum (it\'s minimum)',
        '❌ Writing y ≥ k when parabola opens down (should be y ≤ k)',
        '❌ Confusing which coordinate is the max/min value (it\'s k, not h)',
        '❌ Not checking if -k/a ≥ 0 before finding x-intercepts',
        '❌ Forgetting the ± when taking square roots',
        '❌ Thinking |a| > 1 makes parabola wider (it makes it narrower)'
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
            text: 'Next Steps:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const nextSteps = [
        'Convert between standard form (ax² + bx + c) and vertex form',
        'Practice graphing parabolas from vertex form',
        'Solve optimization word problems using vertex form',
        'Study transformations of the parent function y = x²',
        'Learn to write vertex form equations given specific conditions',
        'Explore completing the square to convert forms',
        'Apply to real-world physics and business problems',
        'Study systems of quadratic equations'
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
            text: 'Additional Practice Problems',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 400, after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Try these problems for extra practice:',
            spacing: { after: 100 },
            bold: true
        })
    );

    const additionalProblems = [
        'Easy: Find the vertex of y = (x + 5)² - 3',
        'Easy: Does y = -4(x - 2)² + 7 open up or down?',
        'Medium: Find the minimum value of y = 2(x - 6)² + 1',
        'Medium: What is the range of y = -(x + 1)² + 10?',
        'Medium: Find the axis of symmetry for y = 3(x - 4)² - 8',
        'Hard: Find all intercepts of y = 2(x - 3)² - 18',
        'Hard: A bridge arch follows y = -0.5(x - 20)² + 20. Find its width at ground level.',
        'Hard: Profit is P(x) = -3(x - 50)² + 7500. Find max profit and optimal quantity.'
    ];

    additionalProblems.forEach((prob, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${prob}`,
                spacing: { after: 100 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: 'Final Encouragement',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 400, after: 100 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Vertex form is one of the most powerful tools in algebra because it immediately reveals the most important features of a quadratic function. Master these concepts, and you\'ll have a strong foundation for calculus, physics, economics, and engineering. Keep practicing, stay curious, and remember: every parabola tells a story of optimization and balance!',
            spacing: { after: 200 },
            italics: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: '🎓 Happy Learning!',
            spacing: { after: 100 },
            bold: true,
            alignment: docx.AlignmentType.CENTER
        })
    );

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
        const filename = 'quadratic_vertex_form_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Vertex Identification: 1 problem');
        console.log('    - Maximum/Minimum: 1 problem');
        console.log('    - Range Determination: 1 problem');
        console.log('    - X-Intercepts: 1 problem');
        console.log('    - Projectile Motion (Complete Analysis): 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 45-55 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with color-coded difficulty level');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Complete step-by-step solution with enhanced explanations');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Vertex form pattern recognition and parameter identification');
        console.log('  • Opening direction, width, and transformation analysis');
        console.log('  • Maximum/minimum determination with location');
        console.log('  • Range and domain analysis with interval notation');
        console.log('  • Intercept calculations with existence verification');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Sign convention reminders (critical for h!)');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods and approaches');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Practice tips specific to each problem type');
        console.log('  • Verification of solutions with detailed checking');
        console.log('  • Quick reference solution summary with highlighting');
        console.log('\n📚 Additional Content:');
        console.log('  • Comprehensive key concepts review');
        console.log('  • Critical sign convention warnings');
        console.log('  • Key formulas reference sheet');
        console.log('  • Common mistakes checklist');
        console.log('  • Next steps and learning progression');
        console.log('  • 8 additional practice problems');
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

