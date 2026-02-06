import { EnhancedSimpleLinearMathematicalWorkbook } from './simplelinearworkbook.js';
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




// ============== SIMPLE LINEAR EQUATIONS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedSimpleLinearEquations() {
    const relatedProblems = [];

    // Problem 1: One-Step Addition Equation
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'One-Step Addition Equation',
        problem: 'Solve for x: x + 7 = 15',
        parameters: { a: 1, b: 7, c: 15 },
        problemType: 'one_step_addition',
        context: { 
            difficulty: 'beginner', 
            topic: 'One-Step Linear Equations',
            realWorld: 'Finding unknown values in simple situations'
        },
        subparts: [
            'Given: x + 7 = 15',
            'Goal: Isolate x by undoing the addition',
            'Subtract 7 from both sides:',
            'x + 7 - 7 = 15 - 7',
            'x = 8',
            'Check: 8 + 7 = 15 ✓'
        ],
        helper: 'To undo addition, subtract the same number from both sides',
        solution: 'x = 8',
        realWorldContext: 'Like finding how much money you had before spending $7 if you now have $15'
    });

    // Problem 2: Two-Step Equation with Multiplication and Addition
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Two-Step Equation',
        problem: 'Solve for x: 3x + 5 = 20',
        parameters: { a: 3, b: 5, c: 20 },
        problemType: 'two_step_standard',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Two-Step Linear Equations',
            realWorld: 'Solving problems with multiple operations'
        },
        subparts: [
            'Given: 3x + 5 = 20',
            'Step 1: Subtract 5 from both sides',
            '3x + 5 - 5 = 20 - 5',
            '3x = 15',
            'Step 2: Divide both sides by 3',
            '3x/3 = 15/3',
            'x = 5',
            'Check: 3(5) + 5 = 15 + 5 = 20 ✓'
        ],
        helper: 'Undo operations in reverse order: first undo addition/subtraction, then undo multiplication/division',
        solution: 'x = 5',
        realWorldContext: 'Like calculating cost per item: if 3 items plus $5 shipping costs $20 total'
    });

    // Problem 3: Equation with Variables on Both Sides
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Variables on Both Sides',
        problem: 'Solve for x: 5x - 3 = 3x + 9',
        parameters: { a: 5, b: -3, c: 3, d: 9 },
        problemType: 'variables_both_sides',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Equations with Variables on Both Sides',
            realWorld: 'Comparing two different scenarios'
        },
        subparts: [
            'Given: 5x - 3 = 3x + 9',
            'Step 1: Subtract 3x from both sides to collect variables',
            '5x - 3x - 3 = 3x - 3x + 9',
            '2x - 3 = 9',
            'Step 2: Add 3 to both sides',
            '2x - 3 + 3 = 9 + 3',
            '2x = 12',
            'Step 3: Divide both sides by 2',
            'x = 6',
            'Check: 5(6) - 3 = 30 - 3 = 27, and 3(6) + 9 = 18 + 9 = 27 ✓'
        ],
        helper: 'First collect all x terms on one side, then solve like a regular two-step equation',
        solution: 'x = 6',
        realWorldContext: 'Like finding when two payment plans cost the same amount'
    });

    // Problem 4: One-Step Multiplication Equation
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'One-Step Multiplication Equation',
        problem: 'Solve for x: 4x = 28',
        parameters: { a: 4, b: 0, c: 28 },
        problemType: 'one_step_multiplication',
        context: { 
            difficulty: 'beginner', 
            topic: 'One-Step Linear Equations',
            realWorld: 'Finding unit values from totals'
        },
        subparts: [
            'Given: 4x = 28',
            'Goal: Isolate x by undoing the multiplication',
            'Divide both sides by 4:',
            '4x/4 = 28/4',
            'x = 7',
            'Check: 4(7) = 28 ✓'
        ],
        helper: 'To undo multiplication, divide both sides by the coefficient',
        solution: 'x = 7',
        realWorldContext: 'Like finding the price of one item when 4 items cost $28'
    });

    // Problem 5: Two-Step Equation with Negative Coefficient
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Two-Step Equation with Negative Coefficient',
        problem: 'Solve for x: -2x + 8 = 2',
        parameters: { a: -2, b: 8, c: 2 },
        problemType: 'two_step_standard',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Two-Step Linear Equations with Negatives',
            realWorld: 'Solving problems with negative rates or decreases'
        },
        subparts: [
            'Given: -2x + 8 = 2',
            'Step 1: Subtract 8 from both sides',
            '-2x + 8 - 8 = 2 - 8',
            '-2x = -6',
            'Step 2: Divide both sides by -2',
            '-2x/(-2) = -6/(-2)',
            'x = 3',
            'Check: -2(3) + 8 = -6 + 8 = 2 ✓'
        ],
        helper: 'Be careful with signs! When dividing by a negative, the result changes sign',
        solution: 'x = 3',
        realWorldContext: 'Like finding how many items you bought if spending $2 each decreased your balance by $6 from an initial $8'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveSimpleLinearRelatedProblems() {
    const problems = generateRelatedSimpleLinearEquations();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Simple Linear Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedSimpleLinearMathematicalWorkbook({
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
            const result = workbook.solveLinearProblem({
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

            console.log(`    ✓ Solution: ${result.solutionValue}`);
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
    console.log('Generating Simple Linear Equations Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Simple Linear Equations Workbook',
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
            text: 'One-Step, Two-Step, and Variables on Both Sides',
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
            text: 'Simple Linear Equations (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const linearProblems = generateRelatedSimpleLinearEquations();
    linearProblems.forEach((problem, index) => {
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
            text: 'This workbook contains 5 carefully selected simple linear equation problems that progressively build your understanding. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed explanations',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Common mistakes and error prevention tips',
        '• Self-check questions and thinking prompts',
        '• Real-world applications and context',
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

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Simple Linear Equations Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Simple Linear Equations Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const linearSolved = solveSimpleLinearRelatedProblems();
    
    linearSolved.forEach((solved, index) => {
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
            text: 'Congratulations on completing these 5 simple linear equation problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve practiced one-step equations (addition and multiplication)',
        'You\'ve mastered two-step equations with positive and negative coefficients',
        'You\'ve learned to handle variables on both sides of equations',
        'You\'ve seen real-world applications of linear equations',
        'You\'ve learned error prevention and common mistake avoidance'
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
        'Practice more problems with fractions and decimals',
        'Move on to linear inequalities',
        'Explore absolute value equations',
        'Try systems of linear equations',
        'Apply these skills to word problems'
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
        const filename = 'simple_linear_equations_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - One-Step Equations: 2 problems');
        console.log('    - Two-Step Equations: 2 problems');
        console.log('    - Variables on Both Sides: 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 40-50 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and visual highlighting');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Complete step-by-step solution with enhanced explanations');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Verification of solutions with detailed checking');
        console.log('  • Key concepts and learning objectives');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary');
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
