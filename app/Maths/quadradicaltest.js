import { EnhancedRadicalToQuadraticMathematicalWorkbook } from './radical-to-quadratic-workbook.js';
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




// ============== RADICAL TO QUADRATIC EQUATIONS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedRadicalToQuadraticEquations() {
    const relatedProblems = [];

    // Problem 1: Simple Radical Equation
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Simple Radical Equation',
        problem: 'Solve for x: √(x + 5) = 4',
        parameters: { a: 1, b: 5, c: 4 },
        problemType: 'simple_radical',
        context: { 
            difficulty: 'beginner', 
            topic: 'Simple Radical Equations',
            realWorld: 'Finding unknown values under square roots'
        },
        subparts: [
            'Given: √(x + 5) = 4',
            'Step 1: Square both sides to eliminate the radical',
            '(√(x + 5))² = 4²',
            'x + 5 = 16',
            'Step 2: Solve for x',
            'x + 5 - 5 = 16 - 5',
            'x = 11',
            'Step 3: VERIFY (critical for radical equations!)',
            'Check: √(11 + 5) = √16 = 4 ✓',
            'Solution is VALID'
        ],
        helper: 'To eliminate a square root, square both sides. ALWAYS verify your solution!',
        solution: 'x = 11',
        validSolutions: [11],
        extraneousSolutions: [],
        realWorldContext: 'Like finding the area of a square garden: if the side length (√area) is 4 feet, the area is 16 square feet. If area = x + 5, then x = 11.',
        criticalWarning: '⚠️ ALWAYS verify solutions in radical equations - squaring can create false solutions!'
    });

    // Problem 2: Radical with Constant Term
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Radical Equation with Constant',
        problem: 'Solve for x: √(2x - 1) + 3 = 6',
        parameters: { a: 2, b: -1, c: 6, d: 3 },
        problemType: 'radical_with_constant',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Radical Equations with Additional Terms',
            realWorld: 'Solving equations with radicals plus constants'
        },
        subparts: [
            'Given: √(2x - 1) + 3 = 6',
            'Step 1: Isolate the radical by subtracting 3 from both sides',
            '√(2x - 1) + 3 - 3 = 6 - 3',
            '√(2x - 1) = 3',
            'Step 2: Square both sides',
            '(√(2x - 1))² = 3²',
            '2x - 1 = 9',
            'Step 3: Solve for x',
            '2x = 10',
            'x = 5',
            'Step 4: VERIFY',
            'Check: √(2(5) - 1) + 3 = √(10 - 1) + 3 = √9 + 3 = 3 + 3 = 6 ✓',
            'Solution is VALID'
        ],
        helper: 'First isolate the radical, THEN square both sides. Don\'t forget to verify!',
        solution: 'x = 5',
        validSolutions: [5],
        extraneousSolutions: [],
        realWorldContext: 'Like solving physics equations: if velocity √(2x - 1) plus 3 equals 6 m/s, find the value of x.',
        criticalWarning: '⚠️ Isolate the radical BEFORE squaring to avoid complex expansion!'
    });

    // Problem 3: Radical Equals Linear Expression (Creates Quadratic)
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Radical Leading to Quadratic',
        problem: 'Solve for x: √(x + 5) = x - 1',
        parameters: { a: 1, b: 5, c: 1, d: -1 },
        problemType: 'radical_equals_linear',
        context: { 
            difficulty: 'advanced', 
            topic: 'Radical Equations Leading to Quadratics',
            realWorld: 'Complex problems where squaring creates quadratic equations'
        },
        subparts: [
            'Given: √(x + 5) = x - 1',
            'Step 1: Square both sides (this will create a quadratic)',
            '(√(x + 5))² = (x - 1)²',
            'x + 5 = x² - 2x + 1',
            'Step 2: Expand the right side using (a - b)² = a² - 2ab + b²',
            'x + 5 = x² - 2x + 1',
            'Step 3: Rearrange to standard quadratic form',
            '0 = x² - 2x + 1 - x - 5',
            '0 = x² - 3x - 4',
            'Step 4: Factor the quadratic',
            '0 = (x - 4)(x + 1)',
            'x = 4 or x = -1',
            'Step 5: VERIFY BOTH solutions (critical!)',
            'Check x = 4: √(4 + 5) = √9 = 3, and 4 - 1 = 3 ✓ VALID',
            'Check x = -1: √(-1 + 5) = √4 = 2, but -1 - 1 = -2 ✗ EXTRANEOUS',
            'Final Answer: x = 4 only'
        ],
        helper: 'When radical equals a variable expression, squaring creates a quadratic. ALWAYS verify - one solution is often extraneous!',
        solution: 'x = 4',
        validSolutions: [4],
        extraneousSolutions: [-1],
        realWorldContext: 'Like finding the height where √(height + 5) equals the height minus 1. Physical constraints eliminate the negative solution.',
        criticalWarning: '🚨 CRITICAL: This type ALWAYS creates extraneous solutions. Both solutions must be checked individually!'
    });

    // Problem 4: Another Radical to Quadratic
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Radical Equals Linear (Quadratic Result)',
        problem: 'Solve for x: √(3x + 1) = x - 1',
        parameters: { a: 3, b: 1, c: 1, d: -1 },
        problemType: 'radical_equals_linear',
        context: { 
            difficulty: 'advanced', 
            topic: 'Radical Equations Leading to Quadratics',
            realWorld: 'Engineering problems with radical equations'
        },
        subparts: [
            'Given: √(3x + 1) = x - 1',
            'Step 1: Note that x - 1 must be ≥ 0, so x ≥ 1',
            'Step 2: Square both sides',
            '(√(3x + 1))² = (x - 1)²',
            '3x + 1 = x² - 2x + 1',
            'Step 3: Rearrange to standard form',
            '0 = x² - 2x + 1 - 3x - 1',
            '0 = x² - 5x',
            'Step 4: Factor',
            '0 = x(x - 5)',
            'x = 0 or x = 5',
            'Step 5: VERIFY both solutions',
            'Check x = 0: √(3(0) + 1) = √1 = 1, but 0 - 1 = -1 ✗ EXTRANEOUS',
            'Check x = 5: √(3(5) + 1) = √16 = 4, and 5 - 1 = 4 ✓ VALID',
            'Final Answer: x = 5 only'
        ],
        helper: 'Remember: √x is always non-negative, so if the right side is negative, that solution is automatically extraneous!',
        solution: 'x = 5',
        validSolutions: [5],
        extraneousSolutions: [0],
        realWorldContext: 'In physics, this could represent finding when √(3 times acceleration + 1) equals velocity minus 1. The x = 0 solution is physically impossible.',
        criticalWarning: '🚨 Notice: x = 0 makes the right side negative (-1), but √(...) can\'t be negative!'
    });

    // Problem 5: Two Equal Radicals
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Two Radicals Equal',
        problem: 'Solve for x: √(x + 7) = √(2x + 1)',
        parameters: { a: 1, b: 7, c: 2, d: 1 },
        problemType: 'two_radicals_equal',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Equations with Two Radicals',
            realWorld: 'Comparing two radical expressions'
        },
        subparts: [
            'Given: √(x + 7) = √(2x + 1)',
            'Step 1: Since both sides are radicals, square both sides',
            '(√(x + 7))² = (√(2x + 1))²',
            'x + 7 = 2x + 1',
            'Step 2: Solve the linear equation',
            'x + 7 - 2x = 2x + 1 - 2x',
            '-x + 7 = 1',
            '-x = 1 - 7',
            '-x = -6',
            'x = 6',
            'Step 3: VERIFY',
            'Check: √(6 + 7) = √13, and √(2(6) + 1) = √(12 + 1) = √13 ✓',
            'Both radicands are positive, solution is VALID'
        ],
        helper: 'When both sides are radicals, squaring eliminates both at once. Still verify to ensure radicands are non-negative!',
        solution: 'x = 6',
        validSolutions: [6],
        extraneousSolutions: [],
        realWorldContext: 'Like finding when two different formulas give the same result: when does √(distance + 7) equal √(2×distance + 1)?',
        criticalWarning: '⚠️ Even though squaring two radicals is "safer," still verify that radicands are non-negative!'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveRadicalToQuadraticRelatedProblems() {
    const problems = generateRelatedRadicalToQuadraticEquations();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Radical to Quadratic Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedRadicalToQuadraticMathematicalWorkbook({
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
            const result = workbook.solveRadicalProblem({
                equation: problem.problem.split(': ')[1] || problem.problem,
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

            if (result.validSolutions && result.validSolutions.length > 0) {
                console.log(`    ✓ Valid Solution(s): ${result.validSolutions.join(', ')}`);
            } else {
                console.log(`    ✓ No valid solutions`);
            }
            
            if (result.extraneousSolutions && result.extraneousSolutions.length > 0) {
                console.log(`    ⚠ Extraneous Solution(s): ${result.extraneousSolutions.join(', ')}`);
            }
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
    console.log('Generating Radical to Quadratic Equations Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Radical to Quadratic Equations Workbook',
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
            text: 'Simple Radicals, Radical + Constants, and Radical = Linear',
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

    // ============== CRITICAL WARNING BOX ==============
    documentChildren.push(
        new docx.Paragraph({
            text: '🚨 CRITICAL: VERIFICATION IS MANDATORY FOR ALL RADICAL EQUATIONS 🚨',
            spacing: { after: 200 },
            alignment: docx.AlignmentType.CENTER,
            bold: true,
            shading: {
                fill: "FFE6E6",
                type: docx.ShadingType.CLEAR
            }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Squaring both sides can create extraneous (false) solutions. You MUST verify every solution by substituting it back into the ORIGINAL equation. This is not optional!',
            spacing: { after: 400 },
            alignment: docx.AlignmentType.CENTER,
            italics: true,
            shading: {
                fill: "FFF3E0",
                type: docx.ShadingType.CLEAR
            }
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
            text: 'Radical to Quadratic Equations (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const radicalProblems = generateRelatedRadicalToQuadraticEquations();
    radicalProblems.forEach((problem, index) => {
        const extraneousInfo = problem.extraneousSolutions.length > 0 ? 
            ` [⚠️ Contains extraneous solution(s)]` : '';
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario} [${problem.difficulty}]: ${problem.problem}${extraneousInfo}`,
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
            text: 'This workbook contains 5 carefully selected radical equation problems that progressively introduce you to solving radical equations, including those that lead to quadratic equations. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with MANDATORY verification',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Detailed explanation of extraneous solutions and why they occur',
        '• Common mistakes and error prevention strategies',
        '• Critical warnings about squaring both sides',
        '• Self-check questions and thinking prompts',
        '• Real-world applications and physical context',
        '• Alternative solution methods',
        '• Domain analysis and restrictions',
        '• Pedagogical notes emphasizing verification importance'
    ];

    features.forEach(feature => {
        documentChildren.push(
            new docx.Paragraph({
                text: feature,
                spacing: { after: 100 }
            })
        );
    });

    // ============== KEY CONCEPTS SECTION ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Key Concepts for Radical Equations',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    const keyConcepts = [
        '1. Squaring eliminates square roots: (√x)² = x',
        '2. Squaring both sides can introduce extraneous solutions',
        '3. √x is ALWAYS non-negative for real numbers (√x ≥ 0)',
        '4. If √(...) = negative number, there is NO solution',
        '5. VERIFICATION is MANDATORY - check every solution in the ORIGINAL equation',
        '6. When radical equals linear expression, expect quadratic after squaring',
        '7. Extraneous solutions are not mistakes - they are mathematically created by squaring'
    ];

    keyConcepts.forEach(concept => {
        documentChildren.push(
            new docx.Paragraph({
                text: concept,
                spacing: { after: 150 },
                bold: concept.includes('MANDATORY') || concept.includes('VERIFICATION')
            })
        );
    });

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Radical to Quadratic Equations Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Radical to Quadratic Equations Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const radicalSolved = solveRadicalToQuadraticRelatedProblems();
    
    radicalSolved.forEach((solved, index) => {
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
        const difficultyColor = {
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
                        color: difficultyColor[solved.problem.difficulty],
                        bold: true
                    })
                ],
                spacing: { after: 100 }
            })
        );

        // Critical warning if problem has extraneous solutions
        if (solved.problem.extraneousSolutions.length > 0) {
            documentChildren.push(
                new docx.Paragraph({
                    text: '🚨 ALERT: This problem will have EXTRANEOUS SOLUTION(S) - Verification is critical!',
                    spacing: { after: 200 },
                    bold: true,
                    color: 'C62828',
                    shading: {
                        fill: "FFEBEE",
                        type: docx.ShadingType.CLEAR
                    }
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

        // Critical warning
        if (solved.problem.criticalWarning) {
            documentChildren.push(
                new docx.Paragraph({
                    text: solved.problem.criticalWarning,
                    spacing: { after: 200 },
                    bold: true,
                    shading: {
                        fill: "FFE6E6",
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
            const isVerification = subpart.includes('VERIFY') || subpart.includes('Check:');
            const isExtraneous = subpart.includes('EXTRANEOUS') || subpart.includes('✗');
            const isValid = subpart.includes('VALID') || subpart.includes('✓');

            documentChildren.push(
                new docx.Paragraph({
                    text: subpart,
                    spacing: { after: 100 },
                    bold: isVerification || isExtraneous || isValid,
                    color: isExtraneous ? 'C62828' : (isValid ? '2E7D32' : undefined),
                    shading: isVerification ? {
                        fill: "FFF3E0",
                        type: docx.ShadingType.CLEAR
                    } : undefined,
                    bullet: {
                        level: 0
                    }
                })
            );
        });

        // Final answer box
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

        // Solution summary
        if (solved.problem.validSolutions.length > 0) {
            documentChildren.push(
                new docx.Paragraph({
                    text: `✓ Valid Solution(s): ${solved.problem.validSolutions.map(s => `x = ${s}`).join(', ')}`,
                    spacing: { after: 100 },
                    color: '2E7D32',
                    bold: true
                })
            );
        }

        if (solved.problem.extraneousSolutions.length > 0) {
            documentChildren.push(
                new docx.Paragraph({
                    text: `✗ Extraneous Solution(s) REJECTED: ${solved.problem.extraneousSolutions.map(s => `x = ${s}`).join(', ')}`,
                    spacing: { after: 400 },
                    color: 'C62828',
                    bold: true,
                    shading: {
                        fill: "FFEBEE",
                        type: docx.ShadingType.CLEAR
                    }
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
            text: 'Congratulations on completing these 5 radical equation problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered simple radical equations (√(ax + b) = c)',
        'You\'ve learned to isolate radicals before squaring',
        'You\'ve solved radical equations that lead to quadratic equations',
        'You\'ve learned to identify and reject extraneous solutions',
        'You\'ve practiced MANDATORY verification for every solution',
        'You\'ve understood why squaring creates extraneous solutions',
        'You\'ve seen real-world applications of radical equations'
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

    // Critical lessons learned
    documentChildren.push(
        new docx.Paragraph({
            text: 'Critical Lessons About Extraneous Solutions:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const criticalLessons = [
        'Extraneous solutions are NOT mistakes - they are mathematically created by squaring',
        'Squaring both sides is NOT a reversible operation',
        'If x = 3, then x² = 9, BUT if x² = 9, x could be 3 OR -3',
        '√x is ALWAYS non-negative, so √x = -5 has NO solution',
        'When √(...) = cx + d, often one solution will be extraneous',
        'NEVER skip verification - it is the ONLY way to identify extraneous solutions'
    ];

    criticalLessons.forEach(lesson => {
        documentChildren.push(
            new docx.Paragraph({
                text: `⚠️ ${lesson}`,
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
        'Practice equations with two radicals on the same side',
        'Try nested radical equations (radicals within radicals)',
        'Explore cube root equations (cubing doesn\'t create extraneous solutions!)',
        'Apply radical equations to word problems (physics, geometry)',
        'Study rational exponents as alternative to radicals',
        'Move on to systems of equations involving radicals'
    ];

    nextSteps.forEach((step, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${step}`,
                spacing: { after: 100 }
            })
        );
    });

    // Final reminder
    documentChildren.push(
        new docx.Paragraph({
            text: '🎯 FINAL REMINDER: Always verify, always verify, ALWAYS VERIFY!',
            spacing: { before: 400 },
            bold: true,
            alignment: docx.AlignmentType.CENTER,
            shading: {
                fill: "FFE6E6",
                type: docx.ShadingType.CLEAR
            }
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
        const filename = 'radical_to_quadratic_equations_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Simple Radical Equations: 1 problem');
        console.log('    - Radical with Constants: 1 problem');
        console.log('    - Radical Leading to Quadratic: 2 problems (with extraneous solutions)');
        console.log('    - Two Equal Radicals: 1 problem');
        console.log('\n  • Problems with Extraneous Solutions: 2');
        console.log('  • Total Extraneous Solutions Demonstrated: 2');
        console.log('\n📄 ESTIMATED PAGES: 50-60 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and visual highlighting');
        console.log('  • Critical warnings for problems with extraneous solutions');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Complete step-by-step solution with enhanced explanations');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • MANDATORY verification with detailed checking process');
        console.log('  • Explicit identification of extraneous solutions');
        console.log('  • Explanation of WHY extraneous solutions occur');
        console.log('  • Domain analysis and restrictions');
        console.log('  • Key concepts emphasizing verification importance');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary with color coding');
        console.log('\n🚨 SPECIAL FEATURES:');
        console.log('  • Color-coded solutions (Valid = Green, Extraneous = Red)');
        console.log('  • Critical warning boxes for verification reminders');
        console.log('  • Detailed explanation of extraneous solutions');
        console.log('  • Comparison between valid and extraneous solutions');
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

