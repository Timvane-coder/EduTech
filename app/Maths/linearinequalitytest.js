import { EnhancedLinearInequalityMathematicalWorkbook } from './linear-inequality-workbook.js';
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




// ============== SIMPLE LINEAR INEQUALITIES - RELATED PROBLEMS GENERATOR ==============

function generateRelatedSimpleLinearInequalities() {
    const relatedProblems = [];

    // Problem 1: One-Step Addition Inequality
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'One-Step Addition Inequality',
        problem: 'Solve for x: x + 5 < 12',
        parameters: { a: 1, b: 5, c: 12, inequality: '<' },
        problemType: 'one_step_addition_less',
        context: { 
            difficulty: 'beginner', 
            topic: 'One-Step Linear Inequalities',
            realWorld: 'Finding acceptable ranges in simple constraints'
        },
        subparts: [
            'Given: x + 5 < 12',
            'Goal: Isolate x by undoing the addition',
            'Subtract 5 from both sides:',
            'x + 5 - 5 < 12 - 5',
            'x < 7',
            'Inequality sign stays the same (no reversal for addition/subtraction)',
            'Interval notation: (-∞, 7)',
            'Graph: Open circle at 7, arrow pointing left',
            'Check: Try x = 6: 6 + 5 = 11 < 12 ✓'
        ],
        helper: 'To undo addition, subtract the same number from both sides. The inequality sign does NOT change.',
        solution: 'x < 7 or (-∞, 7)',
        realWorldContext: 'Like finding how much money you can spend if adding $5 for tax must be less than $12 total',
        criticalNote: '⚠ Remember: Inequality sign ONLY reverses when multiplying or dividing by a negative number!'
    });

    // Problem 2: One-Step Multiplication Inequality with Sign Reversal
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'One-Step Multiplication Inequality with Negative Coefficient',
        problem: 'Solve for x: -3x > 12',
        parameters: { a: -3, b: 0, c: 12, inequality: '>' },
        problemType: 'one_step_multiplication_greater',
        context: { 
            difficulty: 'intermediate', 
            topic: 'One-Step Inequalities with Sign Reversal',
            realWorld: 'Understanding negative rates and their constraints'
        },
        subparts: [
            'Given: -3x > 12',
            'Goal: Isolate x by dividing by the coefficient',
            'Divide both sides by -3:',
            '-3x / -3 ? 12 / -3',
            '⚠ CRITICAL: Since we\'re dividing by NEGATIVE, reverse the inequality sign!',
            'x < -4  (sign reversed from > to <)',
            'Interval notation: (-∞, -4)',
            'Graph: Open circle at -4, arrow pointing left',
            'Check: Try x = -5: -3(-5) = 15 > 12 ✓'
        ],
        helper: '⚠ CRITICAL: When dividing by a NEGATIVE number, REVERSE the inequality sign!',
        solution: 'x < -4 or (-∞, -4)',
        realWorldContext: 'Like finding temperature ranges when multiplying by a negative conversion factor',
        criticalNote: '🔴 SIGN REVERSAL OCCURRED! The inequality flipped from > to < because we divided by -3.'
    });

    // Problem 3: Two-Step Inequality with Positive Coefficient
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Two-Step Inequality',
        problem: 'Solve for x: 2x + 7 ≤ 15',
        parameters: { a: 2, b: 7, c: 15, inequality: '≤' },
        problemType: 'two_step_leq',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Two-Step Linear Inequalities',
            realWorld: 'Budget constraints with fixed and variable costs'
        },
        subparts: [
            'Given: 2x + 7 ≤ 15',
            'Step 1: Subtract 7 from both sides',
            '2x + 7 - 7 ≤ 15 - 7',
            '2x ≤ 8',
            'Inequality sign stays the same (subtraction does not cause reversal)',
            'Step 2: Divide both sides by 2',
            '2x / 2 ≤ 8 / 2',
            'x ≤ 4',
            'Inequality sign stays the same (dividing by POSITIVE does not cause reversal)',
            'Interval notation: (-∞, 4]',
            'Graph: Closed circle at 4, arrow pointing left',
            'Check: Try x = 4: 2(4) + 7 = 8 + 7 = 15 ≤ 15 ✓'
        ],
        helper: 'Undo operations in reverse order. Sign stays same because we divide by POSITIVE 2.',
        solution: 'x ≤ 4 or (-∞, 4]',
        realWorldContext: 'Like finding how many items you can buy if each costs $2 plus $7 shipping, with a budget of at most $15',
        criticalNote: '✅ No sign reversal needed - coefficient is positive!'
    });

    // Problem 4: Two-Step Inequality with Negative Coefficient (Sign Reversal)
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Two-Step Inequality with Sign Reversal',
        problem: 'Solve for x: -4x + 3 ≥ 11',
        parameters: { a: -4, b: 3, c: 11, inequality: '≥' },
        problemType: 'two_step_geq',
        context: { 
            difficulty: 'advanced', 
            topic: 'Two-Step Inequalities with Negative Coefficients',
            realWorld: 'Solving constraints with negative rates or decreasing quantities'
        },
        subparts: [
            'Given: -4x + 3 ≥ 11',
            'Step 1: Subtract 3 from both sides',
            '-4x + 3 - 3 ≥ 11 - 3',
            '-4x ≥ 8',
            'Inequality sign stays the same (subtraction does not cause reversal)',
            'Step 2: Divide both sides by -4',
            '-4x / -4 ? 8 / -4',
            '⚠ CRITICAL: Dividing by NEGATIVE -4, so REVERSE the inequality sign!',
            'x ≤ -2  (sign reversed from ≥ to ≤)',
            'Interval notation: (-∞, -2]',
            'Graph: Closed circle at -2, arrow pointing left',
            'Check: Try x = -2: -4(-2) + 3 = 8 + 3 = 11 ≥ 11 ✓'
        ],
        helper: '⚠ CRITICAL: Coefficient is -4 (negative), so inequality REVERSES when dividing!',
        solution: 'x ≤ -2 or (-∞, -2]',
        realWorldContext: 'Like finding acceptable values when dealing with negative growth rates or decreasing quantities',
        criticalNote: '🔴 SIGN REVERSAL OCCURRED! The inequality flipped from ≥ to ≤ because we divided by -4.'
    });

    // Problem 5: Variables on Both Sides Inequality
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Variables on Both Sides Inequality',
        problem: 'Solve for x: 5x - 2 > 3x + 8',
        parameters: { a: 5, b: -2, c: 3, d: 8, inequality: '>' },
        problemType: 'variables_both_sides_greater',
        context: { 
            difficulty: 'advanced', 
            topic: 'Inequalities with Variables on Both Sides',
            realWorld: 'Comparing two different scenarios or plans'
        },
        subparts: [
            'Given: 5x - 2 > 3x + 8',
            'Step 1: Subtract 3x from both sides to collect variables',
            '5x - 3x - 2 > 3x - 3x + 8',
            '2x - 2 > 8',
            'Inequality sign stays the same (subtraction does not cause reversal)',
            'Step 2: Add 2 to both sides',
            '2x - 2 + 2 > 8 + 2',
            '2x > 10',
            'Inequality sign stays the same',
            'Step 3: Divide both sides by 2',
            '2x / 2 > 10 / 2',
            'x > 5',
            'Inequality sign stays the same (dividing by POSITIVE 2)',
            'Interval notation: (5, ∞)',
            'Graph: Open circle at 5, arrow pointing right',
            'Check: Try x = 6: 5(6) - 2 = 28, and 3(6) + 8 = 26, 28 > 26 ✓'
        ],
        helper: 'First collect all x terms on one side, then solve like a regular two-step inequality. Final coefficient is positive, so no reversal!',
        solution: 'x > 5 or (5, ∞)',
        realWorldContext: 'Like finding when Plan A (5x - 2) is better than Plan B (3x + 8) - when does one option exceed the other?',
        criticalNote: '✅ No sign reversal - we strategically kept coefficient positive by subtracting smaller term!'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveLinearInequalityRelatedProblems() {
    const problems = generateRelatedSimpleLinearInequalities();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Linear Inequality Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedLinearInequalityMathematicalWorkbook({
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
            const result = workbook.solveInequalityProblem({
                inequality: problem.problem.split(': ')[1] || problem.problem,
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

            console.log(`    ✓ Solution: ${result.solutionInterval}`);
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
    console.log('Generating Linear Inequalities Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Linear Inequalities Workbook',
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
            spacing: { after: 150 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: '⚠ Special Focus: Sign Reversal Rule for Negative Coefficients',
            spacing: { after: 300 },
            alignment: docx.AlignmentType.CENTER,
            bold: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: `Generated: ${new Date().toLocaleString()}`,
            spacing: { after: 600 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    // ============== CRITICAL RULE HIGHLIGHT ==============
    documentChildren.push(
        new docx.Paragraph({
            text: '⚠ CRITICAL SIGN REVERSAL RULE ⚠',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 },
            alignment: docx.AlignmentType.CENTER,
            shading: {
                fill: "FFE6E6",
                type: docx.ShadingType.CLEAR
            }
        })
    );

    const criticalRules = [
        '🔴 REVERSE the inequality sign when:',
        '   • Multiplying both sides by a NEGATIVE number',
        '   • Dividing both sides by a NEGATIVE number',
        '',
        '✅ DO NOT reverse the inequality sign when:',
        '   • Adding any number (positive or negative)',
        '   • Subtracting any number (positive or negative)',
        '   • Multiplying by a POSITIVE number',
        '   • Dividing by a POSITIVE number',
        '',
        '💡 Memory Aid: "Negative operation = flip the sign!"'
    ];

    criticalRules.forEach(rule => {
        documentChildren.push(
            new docx.Paragraph({
                text: rule,
                spacing: { after: 100 },
                bold: rule.includes('🔴') || rule.includes('✅') || rule.includes('💡')
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: '',
            spacing: { after: 400 }
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
            text: 'Linear Inequalities (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const inequalityProblems = generateRelatedSimpleLinearInequalities();
    inequalityProblems.forEach((problem, index) => {
        const signReversalIndicator = problem.criticalNote?.includes('SIGN REVERSAL OCCURRED') ? ' 🔴 [SIGN REVERSAL]' : '';
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario} [${problem.difficulty}]: ${problem.problem}${signReversalIndicator}`,
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
            text: 'This workbook contains 5 carefully selected linear inequality problems that progressively build your understanding. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with sign reversal warnings',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Interval notation and number line graphing',
        '• Sign reversal rule explanations and checkpoints',
        '• Common mistakes and error prevention tips (especially for sign reversal)',
        '• Self-check questions and thinking prompts',
        '• Real-world applications and context',
        '• Alternative solution methods',
        '• Verification of solutions with test values',
        '• Pedagogical notes for deeper understanding',
        '• Open vs. closed circle graphing conventions',
        '• Parentheses vs. brackets in interval notation'
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

    // ============== KEY CONCEPTS ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Key Concepts for Linear Inequalities',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    const keyConcepts = [
        'Solution is an interval (range of values), not a single number',
        'Inequality symbols: < (less than), > (greater than), ≤ (less than or equal), ≥ (greater than or equal)',
        'Open circle (○) for < and > (value NOT included)',
        'Closed circle (●) for ≤ and ≥ (value IS included)',
        'Interval notation: ( ) for open endpoints, [ ] for closed endpoints',
        'Always use ( ) with infinity symbols: (-∞, 5) or (3, ∞)',
        'Verify solutions by testing a value from the solution interval'
    ];

    keyConcepts.forEach(concept => {
        documentChildren.push(
            new docx.Paragraph({
                text: `• ${concept}`,
                spacing: { after: 100 }
            })
        );
    });

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Linear Inequalities Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Linear Inequalities Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const inequalitiesSolved = solveLinearInequalityRelatedProblems();
    
    inequalitiesSolved.forEach((solved, index) => {
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
        const difficultyColor = 
            solved.problem.difficulty === 'easy' ? '2E7D32' : 
            solved.problem.difficulty === 'medium' ? '1976D2' : 'C62828';

        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'Difficulty: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.difficulty.toUpperCase(),
                        color: difficultyColor,
                        bold: true
                    })
                ],
                spacing: { after: 100 }
            })
        );

        // Critical note (sign reversal warning if applicable)
        if (solved.problem.criticalNote) {
            documentChildren.push(
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            text: solved.problem.criticalNote,
                            bold: true
                        })
                    ],
                    spacing: { after: 200 },
                    shading: {
                        fill: solved.problem.criticalNote.includes('SIGN REVERSAL OCCURRED') ? "FFE6E6" : "E8F5E9",
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
            const isWarning = subpart.includes('⚠') || subpart.includes('CRITICAL');
            documentChildren.push(
                new docx.Paragraph({
                    text: subpart,
                    spacing: { after: 100 },
                    bullet: {
                        level: 0
                    },
                    bold: isWarning,
                    shading: isWarning ? {
                        fill: "FFE6E6",
                        type: docx.ShadingType.CLEAR
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
            text: 'Congratulations on completing these 5 linear inequality problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve practiced one-step inequalities with and without sign reversal',
        'You\'ve mastered two-step inequalities with positive and negative coefficients',
        'You\'ve learned the CRITICAL sign reversal rule for negative multipliers/divisors',
        'You\'ve learned to handle variables on both sides of inequalities',
        'You\'ve practiced interval notation and number line graphing',
        'You\'ve seen real-world applications of inequality constraints',
        'You\'ve learned error prevention strategies specific to inequalities'
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
            text: 'Master These Key Skills:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const masterSkills = [
        '🔴 Sign Reversal: Always check if multiplying/dividing by negative',
        '○ ● Circle Types: Open for < >, closed for ≤ ≥',
        '( ) [ ] Brackets: Parentheses for open, brackets for closed',
        '∞ Infinity: Always use parentheses with infinity symbols',
        '✓ Verification: Test values from solution interval to confirm'
    ];

    masterSkills.forEach(skill => {
        documentChildren.push(
            new docx.Paragraph({
                text: skill,
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
        'Practice more inequalities with fractions and decimals',
        'Move on to compound inequalities (AND/OR)',
        'Explore absolute value inequalities',
        'Try systems of inequalities',
        'Apply these skills to word problems with constraints',
        'Graph inequalities on coordinate planes (two variables)'
    ];

    nextSteps.forEach((step, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${step}`,
                spacing: { after: 100 }
            })
        );
    });

    // ============== FINAL REMINDER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: '⚠ Final Reminder: The Sign Reversal Rule',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 400, after: 200 },
            shading: {
                fill: "FFE6E6",
                type: docx.ShadingType.CLEAR
            }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'This is the #1 mistake students make with inequalities. Remember:',
            spacing: { after: 100 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: '• REVERSE inequality sign when multiplying/dividing by NEGATIVE',
            spacing: { after: 100 },
            bold: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: '• DO NOT reverse for addition, subtraction, or multiplying/dividing by POSITIVE',
            spacing: { after: 100 },
            bold: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Always ask yourself: "Am I multiplying or dividing by a negative number?" If yes, flip the sign!',
            spacing: { after: 200 },
            italics: true
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
        const filename = 'linear_inequalities_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - One-Step Inequalities: 2 problems (1 with sign reversal)');
        console.log('    - Two-Step Inequalities: 2 problems (1 with sign reversal)');
        console.log('    - Variables on Both Sides: 1 problem');
        console.log('  • Sign Reversal Examples: 2 problems');
        console.log('  • No Sign Reversal Examples: 3 problems');
        console.log('\n📄 ESTIMATED PAGES: 50-60 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and visual highlighting');
        console.log('  • 🔴 Sign reversal warnings where applicable');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Complete step-by-step solution with sign reversal checkpoints');
        console.log('  • Interval notation and graphing instructions');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Verification with test values from solution interval');
        console.log('  • Key concepts and learning objectives');
        console.log('  • Common mistakes and error prevention (especially sign reversal)');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary with warnings');
        console.log('  • Sign reversal quick reference section');
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
