import { EnhancedSystemsLinearMathematicalWorkbook } from './systems-linear-workbook.js';
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




// ============== SYSTEMS OF LINEAR EQUATIONS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedSystemsLinearEquations() {
    const relatedProblems = [];

    // Problem 1: Simple System - Already Solved for Variable (Substitution)
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Simple System with Substitution',
        problem: 'Solve the system:\ny = 2x + 1\ny = -x + 7',
        equations: {
            eq1: 'y = 2x + 1',
            eq2: 'y = -x + 7'
        },
        parameters: {},
        problemType: 'substitution_basic',
        method: 'substitution',
        context: { 
            difficulty: 'beginner', 
            topic: 'Systems of Linear Equations - Substitution Method',
            realWorld: 'Finding where two scenarios meet'
        },
        subparts: [
            'Given: y = 2x + 1 and y = -x + 7',
            'Both equations are solved for y, so set them equal:',
            '2x + 1 = -x + 7',
            'Add x to both sides: 3x + 1 = 7',
            'Subtract 1 from both sides: 3x = 6',
            'Divide by 3: x = 2',
            'Substitute x = 2 into first equation:',
            'y = 2(2) + 1 = 4 + 1 = 5',
            'Solution: (2, 5)',
            'Check in equation 1: 5 = 2(2) + 1 = 5 ✓',
            'Check in equation 2: 5 = -(2) + 7 = 5 ✓'
        ],
        helper: 'When both equations are solved for the same variable, set them equal to each other',
        solution: '(2, 5)',
        realWorldContext: 'Like finding when two different pricing plans cost the same amount'
    });

    // Problem 2: Elimination Method - Opposite Coefficients
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Elimination with Opposite Coefficients',
        problem: 'Solve the system:\nx + y = 10\nx - y = 4',
        equations: {
            eq1: 'x + y = 10',
            eq2: 'x - y = 4'
        },
        parameters: {},
        problemType: 'elimination_basic',
        method: 'elimination',
        context: { 
            difficulty: 'beginner', 
            topic: 'Systems of Linear Equations - Elimination Method',
            realWorld: 'Finding two unknown quantities given their sum and difference'
        },
        subparts: [
            'Given: x + y = 10 and x - y = 4',
            'Notice the y coefficients are opposites (+y and -y)',
            'Add the equations to eliminate y:',
            '(x + y) + (x - y) = 10 + 4',
            'x + y + x - y = 14',
            '2x = 14',
            'Divide by 2: x = 7',
            'Substitute x = 7 into first equation:',
            '7 + y = 10',
            'y = 3',
            'Solution: (7, 3)',
            'Check in equation 1: 7 + 3 = 10 ✓',
            'Check in equation 2: 7 - 3 = 4 ✓'
        ],
        helper: 'When coefficients are already opposites, add the equations to eliminate that variable',
        solution: '(7, 3)',
        realWorldContext: 'Like finding two numbers when you know their sum is 10 and their difference is 4'
    });

    // Problem 3: Elimination with Multiplication
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Elimination Requiring Multiplication',
        problem: 'Solve the system:\n2x + 3y = 12\nx - y = 1',
        equations: {
            eq1: '2x + 3y = 12',
            eq2: 'x - y = 1'
        },
        parameters: {},
        problemType: 'elimination_basic',
        method: 'elimination',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Systems of Linear Equations - Elimination with Scaling',
            realWorld: 'Solving problems with multiple constraints'
        },
        subparts: [
            'Given: 2x + 3y = 12 and x - y = 1',
            'Goal: Eliminate one variable by making coefficients opposites',
            'Multiply second equation by -2:',
            '-2(x - y) = -2(1)',
            '-2x + 2y = -2',
            'Now we have: 2x + 3y = 12 and -2x + 2y = -2',
            'Add the equations to eliminate x:',
            '(2x + 3y) + (-2x + 2y) = 12 + (-2)',
            '5y = 10',
            'y = 2',
            'Substitute y = 2 into second original equation:',
            'x - 2 = 1',
            'x = 3',
            'Solution: (3, 2)',
            'Check in equation 1: 2(3) + 3(2) = 6 + 6 = 12 ✓',
            'Check in equation 2: 3 - 2 = 1 ✓'
        ],
        helper: 'Multiply one or both equations to create opposite coefficients, then add to eliminate',
        solution: '(3, 2)',
        realWorldContext: 'Like planning a purchase: 2 shirts and 3 hats cost $12, while 1 shirt costs $1 more than 1 hat'
    });

    // Problem 4: Word Problem - Ticket Sales
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Word Problem - Concert Tickets',
        problem: 'Adult tickets cost $12 and child tickets cost $8. A total of 50 tickets were sold for $520. How many adult tickets and how many child tickets were sold?',
        equations: {
            eq1: 'a + c = 50',
            eq2: '12a + 8c = 520'
        },
        parameters: {},
        problemType: 'word_problem_money',
        method: 'elimination',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Systems Word Problems - Money and Tickets',
            realWorld: 'Real business scenario - ticket sales analysis'
        },
        subparts: [
            'Let a = number of adult tickets, c = number of child tickets',
            'Equation 1 (total tickets): a + c = 50',
            'Equation 2 (total revenue): 12a + 8c = 520',
            'Solve using elimination:',
            'Multiply equation 1 by -8: -8a - 8c = -400',
            'Add to equation 2: 12a + 8c + (-8a - 8c) = 520 + (-400)',
            '4a = 120',
            'a = 30 adult tickets',
            'Substitute back: 30 + c = 50',
            'c = 20 child tickets',
            'Solution: 30 adult tickets, 20 child tickets',
            'Check total tickets: 30 + 20 = 50 ✓',
            'Check revenue: 12(30) + 8(20) = 360 + 160 = 520 ✓'
        ],
        helper: 'Define variables clearly, write equations for each constraint, then solve the system',
        solution: '30 adult tickets, 20 child tickets',
        realWorldContext: 'This is exactly how businesses analyze sales data to understand customer composition'
    });

    // Problem 5: Substitution Method - Standard Form
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Substitution from Standard Form',
        problem: 'Solve the system:\n2x + y = 11\nx - y = 1',
        equations: {
            eq1: '2x + y = 11',
            eq2: 'x - y = 1'
        },
        parameters: {},
        problemType: 'substitution_basic',
        method: 'substitution',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Systems of Linear Equations - Substitution Method',
            realWorld: 'Finding two unknowns with given relationships'
        },
        subparts: [
            'Given: 2x + y = 11 and x - y = 1',
            'Step 1: Solve second equation for x:',
            'x - y = 1',
            'x = y + 1',
            'Step 2: Substitute (y + 1) for x in first equation:',
            '2(y + 1) + y = 11',
            'Distribute: 2y + 2 + y = 11',
            'Combine like terms: 3y + 2 = 11',
            'Subtract 2: 3y = 9',
            'y = 3',
            'Step 3: Substitute y = 3 back into x = y + 1:',
            'x = 3 + 1 = 4',
            'Solution: (4, 3)',
            'Check in equation 1: 2(4) + 3 = 8 + 3 = 11 ✓',
            'Check in equation 2: 4 - 3 = 1 ✓'
        ],
        helper: 'Solve one equation for one variable, substitute that expression into the other equation',
        solution: '(4, 3)',
        realWorldContext: 'Like figuring out prices: twice item A plus item B costs $11, while A costs $1 more than B'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveSystemsLinearRelatedProblems() {
    const problems = generateRelatedSystemsLinearEquations();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Systems Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedSystemsLinearMathematicalWorkbook({
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
            const result = workbook.solveSystemProblem({
                equations: problem.equations,
                scenario: problem.scenario,
                parameters: problem.parameters,
                problemType: problem.problemType,
                context: problem.context,
                method: problem.method
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
    console.log('Generating Systems of Linear Equations Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Systems of Linear Equations Workbook',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { after: 200 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Complete Guide with 5 Test Problems (2x2 Systems)',
            spacing: { after: 150 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Substitution, Elimination, and Word Problems',
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
            text: 'Systems of Linear Equations (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const systemsProblems = generateRelatedSystemsLinearEquations();
    systemsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario} [${problem.difficulty}]`,
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
            text: 'This workbook contains 5 carefully selected systems of linear equations problems that progressively build your understanding of solving 2x2 systems. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed explanations',
        '• Multiple solution methods (substitution, elimination, graphing)',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Common mistakes and error prevention tips',
        '• Self-check questions and thinking prompts',
        '• Real-world applications and context',
        '• Alternative solution methods and comparisons',
        '• Verification of solutions in both equations',
        '• Pedagogical notes for deeper understanding',
        '• Graphical interpretation of solutions'
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
            text: 'What are Systems of Linear Equations?',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'A system of linear equations is a set of two or more equations with the same variables. A 2x2 system has two equations with two unknowns (usually x and y). The solution is an ordered pair (x, y) that satisfies BOTH equations simultaneously. Graphically, this represents the point where two lines intersect.',
            spacing: { after: 200 }
        })
    );

    const systemTypes = [
        '• One unique solution: Lines intersect at one point (most common)',
        '• No solution: Lines are parallel and never intersect',
        '• Infinite solutions: Lines are coincident (same line)'
    ];

    documentChildren.push(
        new docx.Paragraph({
            text: 'Types of Solutions:',
            bold: true,
            spacing: { after: 100 }
        })
    );

    systemTypes.forEach(type => {
        documentChildren.push(
            new docx.Paragraph({
                text: type,
                spacing: { after: 100 }
            })
        );
    });

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Systems of Linear Equations Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Systems of Linear Equations Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const systemsSolved = solveSystemsLinearRelatedProblems();
    
    systemsSolved.forEach((solved, index) => {
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
        const problemLines = solved.problem.problem.split('\n');
        problemLines.forEach((line, lineIndex) => {
            documentChildren.push(
                new docx.Paragraph({
                    text: line,
                    spacing: { after: lineIndex === problemLines.length - 1 ? 200 : 50 },
                    bold: true,
                    shading: {
                        fill: "E7F3FF",
                        type: docx.ShadingType.CLEAR
                    }
                })
            );
        });

        // Difficulty level and method
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
                    }),
                    new docx.TextRun({
                        text: '  |  Method: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.method.toUpperCase(),
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
            text: 'Congratulations on completing these 5 systems of linear equations problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve practiced the substitution method for systems where one equation is already solved',
        'You\'ve mastered the elimination method with both simple and complex cases',
        'You\'ve learned to multiply equations to create opposite coefficients',
        'You\'ve solved real-world word problems using systems',
        'You\'ve verified solutions by checking them in both original equations',
        'You\'ve learned when to use each method based on the problem structure'
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
            text: 'Key Takeaways:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const keyTakeaways = [
        'Substitution Method: Best when one equation is already solved for a variable',
        'Elimination Method: Best when coefficients can easily be made opposites',
        'Always verify your solution in BOTH original equations',
        'The solution is an ordered pair (x, y) that must work in both equations',
        'Word problems require clear variable definitions and two independent equations'
    ];

    keyTakeaways.forEach(takeaway => {
        documentChildren.push(
            new docx.Paragraph({
                text: `• ${takeaway}`,
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
        'Practice more systems with fractions and decimals',
        'Explore special cases (no solution and infinite solutions)',
        'Learn graphing method for visual understanding',
        'Study 3x3 systems of equations',
        'Apply to more complex word problems (mixture, investment, distance)',
        'Learn matrix methods and Cramer\'s Rule',
        'Explore systems of inequalities and linear programming'
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
        const filename = 'systems_linear_equations_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Substitution Method: 2 problems');
        console.log('    - Elimination Method: 2 problems');
        console.log('    - Word Problems: 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 50-60 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and method');
        console.log('  • Visual highlighting for easy identification');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Complete step-by-step solution with enhanced explanations');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Verification of solutions in both equations');
        console.log('  • Key concepts and learning objectives');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Method comparison (when to use substitution vs elimination)');
        console.log('  • Alternative solution methods');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Graphical interpretation of solutions');
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
