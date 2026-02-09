import { EnhancedTrigonometricGraphsWorkbook } from './trig-graphs-workbook.js';
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




// ============== TRIGONOMETRIC GRAPHS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedTrigonometricGraphProblems() {
    const relatedProblems = [];

    // Problem 1: Standard Sine Function
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Standard Sine Function',
        problem: 'Analyze and graph: y = sin(x)',
        parameters: { A: 1, B: 1, C: 0, D: 0 },
        problemType: 'sine_standard',
        context: { 
            difficulty: 'beginner', 
            topic: 'Basic Sine Function',
            realWorld: 'Understanding the fundamental wave pattern'
        },
        subparts: [
            'Given: y = sin(x)',
            'Amplitude: |A| = |1| = 1',
            'Period: 2π/|B| = 2π/1 = 2π',
            'Phase Shift: None (C = 0)',
            'Vertical Shift: None (D = 0)',
            'Domain: All real numbers',
            'Range: [-1, 1]',
            'Key Points for one period:',
            '  (0, 0) - start at origin',
            '  (π/2, 1) - maximum',
            '  (π, 0) - midline',
            '  (3π/2, -1) - minimum',
            '  (2π, 0) - end of period'
        ],
        helper: 'Sine starts at the origin and goes up first. Divide the period into 4 equal parts to find key points.',
        solution: 'Standard sine wave with amplitude 1, period 2π',
        realWorldContext: 'Models simple harmonic motion like a pendulum or basic sound wave'
    });

    // Problem 2: Transformed Sine Function with Amplitude and Period
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Sine Function with Amplitude and Period Changes',
        problem: 'Analyze and graph: y = 3sin(2x)',
        parameters: { A: 3, B: 2, C: 0, D: 0 },
        problemType: 'sine_transformed',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Transformed Sine Functions',
            realWorld: 'Modeling waves with different heights and frequencies'
        },
        subparts: [
            'Given: y = 3sin(2x)',
            'Step 1: Identify parameters',
            '  A = 3 (amplitude coefficient)',
            '  B = 2 (period coefficient)',
            '  C = 0 (no phase shift)',
            '  D = 0 (no vertical shift)',
            '',
            'Step 2: Calculate amplitude',
            '  Amplitude = |A| = |3| = 3',
            '  Graph oscillates 3 units above and below x-axis',
            '',
            'Step 3: Calculate period',
            '  Period = 2π/|B| = 2π/2 = π',
            '  One complete cycle in π units (compressed horizontally)',
            '',
            'Step 4: Key characteristics',
            '  Domain: All real numbers',
            '  Range: [-3, 3]',
            '  Midline: y = 0',
            '',
            'Step 5: Key points for one period [0, π]:',
            '  (0, 0) - start',
            '  (π/4, 3) - maximum',
            '  (π/2, 0) - midline',
            '  (3π/4, -3) - minimum',
            '  (π, 0) - end'
        ],
        helper: 'Amplitude tells you wave height, period tells you how quickly it repeats',
        solution: 'Sine wave with amplitude 3, period π',
        realWorldContext: 'Like a louder sound (amplitude 3) with higher pitch (period π)'
    });

    // Problem 3: Cosine Function with All Transformations
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Fully Transformed Cosine Function',
        problem: 'Analyze and graph: y = 2cos(π(x - 1)) + 3',
        parameters: { A: 2, B: Math.PI, C: 1, D: 3 },
        problemType: 'cosine_transformed',
        context: { 
            difficulty: 'advanced', 
            topic: 'Complete Cosine Transformations',
            realWorld: 'Complex periodic phenomena with multiple changes'
        },
        subparts: [
            'Given: y = 2cos(π(x - 1)) + 3',
            '',
            'Step 1: Identify all parameters',
            '  A = 2 (amplitude coefficient)',
            '  B = π (period coefficient)',
            '  C = 1 (phase shift)',
            '  D = 3 (vertical shift)',
            '',
            'Step 2: Calculate amplitude',
            '  Amplitude = |A| = |2| = 2',
            '  Graph oscillates 2 units above and below midline',
            '',
            'Step 3: Calculate period',
            '  Period = 2π/|B| = 2π/π = 2',
            '  One complete cycle every 2 units',
            '',
            'Step 4: Identify phase shift',
            '  Phase shift = C = 1',
            '  Graph shifts 1 unit RIGHT',
            '  (Note: already factored as π(x - 1))',
            '',
            'Step 5: Identify vertical shift',
            '  Vertical shift = D = 3',
            '  Midline: y = 3',
            '  Graph shifts 3 units UP',
            '',
            'Step 6: Determine range',
            '  Minimum = D - |A| = 3 - 2 = 1',
            '  Maximum = D + |A| = 3 + 2 = 5',
            '  Range: [1, 5]',
            '',
            'Step 7: Key points (starting at x = 1):',
            '  (1, 5) - maximum (cosine starts at max)',
            '  (1.5, 3) - midline',
            '  (2, 1) - minimum',
            '  (2.5, 3) - midline',
            '  (3, 5) - maximum (end of period)'
        ],
        helper: 'Apply transformations systematically: amplitude and period affect size, shifts move the graph',
        solution: 'Cosine wave: amplitude 2, period 2, shifted right 1 and up 3',
        realWorldContext: 'Like tidal patterns with 2-foot variation, 12-hour cycle, high tide at 1 PM, average depth 3 feet'
    });

    // Problem 4: Tangent Function with Transformations
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Transformed Tangent Function',
        problem: 'Analyze and graph: y = tan(2x)',
        parameters: { A: 1, B: 2, C: 0, D: 0 },
        problemType: 'tangent_transformed',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Tangent Function Transformations',
            realWorld: 'Functions with vertical asymptotes and different periods'
        },
        subparts: [
            'Given: y = tan(2x)',
            '',
            'Step 1: Identify parameters',
            '  A = 1 (vertical stretch factor)',
            '  B = 2 (period coefficient)',
            '  C = 0 (no phase shift)',
            '  D = 0 (no vertical shift)',
            '',
            'Step 2: Calculate period',
            '  Period = π/|B| = π/2',
            '  Note: Tangent has period π (not 2π)',
            '  Graph completes cycle every π/2 units',
            '',
            'Step 3: Locate vertical asymptotes',
            '  Asymptotes at x = ±π/4, ±3π/4, ±5π/4, ...',
            '  General form: x = π/4 + nπ/2, where n is any integer',
            '  (At these points, cosine = 0, making tan undefined)',
            '',
            'Step 4: Find x-intercepts',
            '  x-intercepts (zeros) at x = 0, ±π/2, ±π, ...',
            '  General form: x = nπ/2, where n is any integer',
            '  (Midway between asymptotes)',
            '',
            'Step 5: Domain and range',
            '  Domain: x ≠ π/4 + nπ/2',
            '  Range: All real numbers',
            '',
            'Step 6: Key characteristics',
            '  - Increasing on each interval between asymptotes',
            '  - S-shaped curves repeating every π/2',
            '  - No amplitude (range is unbounded)',
            '',
            'Step 7: Sample points for one period [-π/4, π/4]:',
            '  x = -π/8: y = tan(-π/4) = -1',
            '  x = 0: y = 0 (x-intercept)',
            '  x = π/8: y = tan(π/4) = 1'
        ],
        helper: 'Tangent has vertical asymptotes and period π/B (not 2π/B). It increases between asymptotes.',
        solution: 'Tangent function with period π/2, asymptotes at x = π/4 + nπ/2',
        realWorldContext: 'Models slope or angle relationships, like the angle of a ramp versus its steepness'
    });

    // Problem 5: Finding Equation from Graph Characteristics
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Write Equation from Graph Characteristics',
        problem: 'Write the equation of a sine function with: amplitude 4, period π, phase shift π/2 right, vertical shift 2 up',
        parameters: { 
            functionType: 'sine',
            amplitude: 4, 
            period: Math.PI, 
            phaseShift: Math.PI/2, 
            verticalShift: 2 
        },
        problemType: 'write_equation',
        context: { 
            difficulty: 'advanced', 
            topic: 'Writing Equations from Characteristics',
            realWorld: 'Reverse engineering wave patterns from observations'
        },
        subparts: [
            'Given characteristics:',
            '  Amplitude = 4',
            '  Period = π',
            '  Phase shift = π/2 right',
            '  Vertical shift = 2 up',
            '  Function type: sine',
            '',
            'Step 1: Determine parameter A (amplitude)',
            '  Amplitude = |A| = 4',
            '  Assuming positive: A = 4',
            '',
            'Step 2: Determine parameter B (from period)',
            '  Period = 2π/|B|',
            '  π = 2π/|B|',
            '  |B| = 2π/π = 2',
            '  So B = 2',
            '',
            'Step 3: Determine parameter C (phase shift)',
            '  Phase shift RIGHT by π/2',
            '  C = π/2',
            '  (Positive C means right shift)',
            '',
            'Step 4: Determine parameter D (vertical shift)',
            '  Vertical shift UP by 2',
            '  D = 2',
            '',
            'Step 5: Write the equation',
            '  General form: y = A sin(B(x - C)) + D',
            '  Substitute: y = 4 sin(2(x - π/2)) + 2',
            '',
            'Step 6: Verify the characteristics',
            '  ✓ Amplitude: |4| = 4',
            '  ✓ Period: 2π/2 = π',
            '  ✓ Phase shift: π/2 right',
            '  ✓ Vertical shift: 2 up',
            '  ✓ Range: [2-4, 2+4] = [-2, 6]',
            '  ✓ Midline: y = 2',
            '',
            'Alternative form (expanded):',
            '  y = 4 sin(2x - π) + 2',
            '  (Both forms are correct)'
        ],
        helper: 'Use the formula y = A sin(B(x - C)) + D. Find B from period using 2π/B, C is the phase shift value.',
        solution: 'y = 4sin(2(x - π/2)) + 2  or  y = 4sin(2x - π) + 2',
        realWorldContext: 'Like describing ocean wave patterns: 4-meter waves, 3.14-second period, delayed by 1.57 seconds, 2-meter average depth'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveTrigonometricGraphRelatedProblems() {
    const problems = generateRelatedTrigonometricGraphProblems();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Trigonometric Graph Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedTrigonometricGraphsWorkbook({
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
            const result = workbook.solveTrigGraphProblem({
                equation: problem.problem.includes(':') ? problem.problem.split(': ')[1] : problem.problem,
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
    console.log('Generating Trigonometric Graphs Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Trigonometric Graphs Workbook',
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
            text: 'Sine, Cosine, Tangent Functions and Transformations',
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
            text: 'Trigonometric Graph Problems (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const trigProblems = generateRelatedTrigonometricGraphProblems();
    trigProblems.forEach((problem, index) => {
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
            text: 'This workbook contains 5 carefully selected trigonometric graph problems that progressively build your understanding of periodic functions. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step analysis with detailed explanations',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Amplitude, period, phase shift, and vertical shift calculations',
        '• Common mistakes and error prevention tips specific to trig graphs',
        '• Self-check questions and thinking prompts',
        '• Real-world applications (waves, sound, tides, temperature)',
        '• Alternative graphing methods',
        '• Domain, range, and key point identification',
        '• Pedagogical notes for deeper understanding',
        '• Graph characteristic summaries'
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
        '📊 Standard sine and cosine functions',
        '📈 Amplitude and period transformations',
        '↔️ Phase shifts (horizontal translations)',
        '↕️ Vertical shifts and midlines',
        '📐 Tangent functions with asymptotes',
        '✏️ Writing equations from graph characteristics',
        '🌊 Real-world periodic phenomena modeling'
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
    console.log('\nProcessing Trigonometric Graph Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Trigonometric Graph Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const trigSolved = solveTrigonometricGraphRelatedProblems();
    
    trigSolved.forEach((solved, index) => {
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

        // Function type indicator
        const functionType = solved.problem.parameters.functionType || 
                           (solved.problem.problemType.includes('sine') ? 'Sine' :
                            solved.problem.problemType.includes('cosine') ? 'Cosine' :
                            solved.problem.problemType.includes('tangent') ? 'Tangent' : 'Trigonometric');
        
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: '📈 Function Type: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: functionType,
                        color: '1565C0'
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
            const isBlank = subpart === '';
            documentChildren.push(
                new docx.Paragraph({
                    text: subpart,
                    spacing: { after: isBlank ? 150 : 80 },
                    bullet: subpart && !subpart.startsWith('Step') && !subpart.startsWith('Given') ? {
                        level: 0
                    } : undefined
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
                        color: '1565C0'
                    })
                ],
                spacing: { before: 200, after: 400 },
                shading: {
                    fill: "E3F2FD",
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
            text: 'Congratulations on completing these 5 trigonometric graph problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        '📊 You\'ve mastered standard sine and cosine graphs',
        '📈 You\'ve learned to identify and calculate amplitude and period',
        '↔️ You\'ve practiced analyzing phase shifts (horizontal translations)',
        '↕️ You\'ve understood vertical shifts and midline concepts',
        '📐 You\'ve explored tangent functions with vertical asymptotes',
        '✏️ You\'ve learned to write equations from graph characteristics',
        '🌊 You\'ve connected trig graphs to real-world periodic phenomena'
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
        '• General form: y = A·f(B(x - C)) + D',
        '• Amplitude: |A| (for sine and cosine)',
        '• Period: 2π/|B| for sine/cosine, π/|B| for tangent',
        '• Phase shift: C (positive = right, negative = left)',
        '• Vertical shift: D (positive = up, negative = down)',
        '• Midline: y = D',
        '• Range for sine/cosine: [D - |A|, D + |A|]'
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
        'Practice graphing reciprocal functions (csc, sec, cot)',
        'Explore inverse trigonometric functions and their graphs',
        'Learn to solve trigonometric equations using graphs',
        'Study combinations of trig functions (e.g., y = sin(x) + cos(x))',
        'Apply trig graphs to real-world data modeling',
        'Practice identifying equations from given graphs',
        'Explore applications in physics (waves, oscillations, AC circuits)'
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
            text: '',
            spacing: { after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Common Mistakes to Avoid:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const commonMistakes = [
        '❌ Forgetting that amplitude is always positive: |A|',
        '❌ Using 2π/B for tangent period (correct is π/B)',
        '❌ Not factoring out B before identifying phase shift C',
        '❌ Confusing phase shift with vertical shift',
        '❌ Thinking negative A shifts the graph down (it reflects it)',
        '❌ Forgetting to check domain restrictions for tangent',
        '❌ Mixing up the ranges of different inverse trig functions'
    ];

    commonMistakes.forEach(mistake => {
        documentChildren.push(
            new docx.Paragraph({
                text: mistake,
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
        const filename = 'trigonometric_graphs_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Standard Sine Function: 1 problem');
        console.log('    - Transformed Sine (Amplitude & Period): 1 problem');
        console.log('    - Fully Transformed Cosine: 1 problem');
        console.log('    - Tangent Function: 1 problem');
        console.log('    - Write Equation from Characteristics: 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 50-60 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and function type');
        console.log('  • Visual highlighting for easy identification');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Complete step-by-step analysis with enhanced explanations');
        console.log('  • Amplitude, period, phase shift, and vertical shift calculations');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Domain and range analysis');
        console.log('  • Key point identification for graphing');
        console.log('  • Asymptote locations (for tangent)');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative graphing methods');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary with key formulas');
        console.log('  • Graph characteristic verification');
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
