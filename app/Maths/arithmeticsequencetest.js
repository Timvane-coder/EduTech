import { EnhancedArithmeticSequencesWorkbook } from './arithmetic-sequences-workbook.js';
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




// ============== ARITHMETIC SEQUENCES - RELATED PROBLEMS GENERATOR ==============

function generateRelatedArithmeticSequences() {
    const relatedProblems = [];

    // Problem 1: Identify Arithmetic Sequence and Find Common Difference
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Identifying Arithmetic Sequences',
        problem: 'Determine if the sequence 3, 7, 11, 15, 19 is arithmetic. If so, find the common difference.',
        sequence: '3, 7, 11, 15, 19',
        parameters: { terms: [3, 7, 11, 15, 19] },
        problemType: 'identify_arithmetic',
        context: { 
            difficulty: 'beginner', 
            topic: 'Arithmetic Sequence Identification',
            realWorld: 'Recognizing patterns in data'
        },
        subparts: [
            'Step 1: Calculate differences between consecutive terms',
            '7 - 3 = 4',
            '11 - 7 = 4',
            '15 - 11 = 4',
            '19 - 15 = 4',
            'Step 2: Check if all differences are equal',
            'All differences = 4',
            'Conclusion: Yes, it is arithmetic with d = 4'
        ],
        helper: 'Calculate the difference between each pair of consecutive terms. If all differences are equal, it\'s arithmetic!',
        solution: 'Arithmetic sequence with common difference d = 4',
        realWorldContext: 'Like checking if you save the same amount of money each month by comparing monthly balances'
    });

    // Problem 2: Finding the nth Term
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Finding the nth Term',
        problem: 'Find the 15th term of the arithmetic sequence where the first term is 5 and the common difference is 3.',
        parameters: { a1: 5, d: 3, n: 15 },
        problemType: 'find_nth_term',
        context: { 
            difficulty: 'intermediate', 
            topic: 'nth Term Formula',
            realWorld: 'Predicting future values in patterns'
        },
        subparts: [
            'Given: a₁ = 5, d = 3, n = 15',
            'Formula: aₙ = a₁ + (n-1)d',
            'Step 1: Substitute values',
            'a₁₅ = 5 + (15-1)×3',
            'Step 2: Calculate (n-1)',
            'a₁₅ = 5 + (14)×3',
            'Step 3: Multiply',
            'a₁₅ = 5 + 42',
            'Step 4: Add',
            'a₁₅ = 47',
            'Verification: The 15th term is 47'
        ],
        helper: 'Use the formula aₙ = a₁ + (n-1)d. Remember: (n-1) gives the number of steps from the first term',
        solution: 'a₁₅ = 47',
        realWorldContext: 'Like calculating your salary in year 15 if you start at $5,000/month with $300 raises each year'
    });

    // Problem 3: Finding Position of a Given Term
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Finding the Position',
        problem: 'In an arithmetic sequence where a₁ = 8 and d = 5, which term has the value 78?',
        parameters: { an: 78, a1: 8, d: 5 },
        problemType: 'find_position',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Finding Position (n)',
            realWorld: 'Determining when a goal will be reached'
        },
        subparts: [
            'Given: aₙ = 78, a₁ = 8, d = 5',
            'Formula: n = ((aₙ - a₁)/d) + 1',
            'Step 1: Subtract a₁ from aₙ',
            'n = ((78 - 8)/5) + 1',
            'n = (70/5) + 1',
            'Step 2: Divide by d',
            'n = 14 + 1',
            'Step 3: Add 1',
            'n = 15',
            'Verification: a₁₅ = 8 + (15-1)×5 = 8 + 70 = 78 ✓',
            'Answer: The 15th term equals 78'
        ],
        helper: 'Rearrange the nth term formula to solve for n. Make sure n is a positive integer!',
        solution: 'n = 15 (the 15th term)',
        realWorldContext: 'Like figuring out which payment number will bring your debt down to a specific amount'
    });

    // Problem 4: Sum of First n Terms
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Sum of Arithmetic Sequence',
        problem: 'Find the sum of the first 20 terms of the sequence: 4, 7, 10, 13, 16, ...',
        parameters: { n: 20, a1: 4, d: 3 },
        problemType: 'sum_of_sequence',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Sum of Arithmetic Sequences',
            realWorld: 'Calculating total accumulated value'
        },
        subparts: [
            'Given: a₁ = 4, d = 3, n = 20',
            'Formula: Sₙ = (n/2)(2a₁ + (n-1)d)',
            'Step 1: Substitute values',
            'S₂₀ = (20/2)(2(4) + (20-1)×3)',
            'Step 2: Simplify inside parentheses',
            'S₂₀ = 10(8 + 19×3)',
            'S₂₀ = 10(8 + 57)',
            'S₂₀ = 10(65)',
            'Step 3: Multiply',
            'S₂₀ = 650',
            'Interpretation: Sum of first 20 terms is 650'
        ],
        helper: 'Use the sum formula Sₙ = (n/2)(2a₁ + (n-1)d) when you know a₁ and d. The division by 2 is crucial!',
        solution: 'S₂₀ = 650',
        realWorldContext: 'Like calculating total savings after 20 months if you start saving $4 and increase by $3 each month'
    });

    // Problem 5: Finding Sequence from Two Non-Consecutive Terms
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Reconstructing the Sequence',
        problem: 'In an arithmetic sequence, the 4th term is 17 and the 9th term is 37. Find the first term and the common difference.',
        parameters: { an: 17, n: 4, am: 37, m: 9 },
        problemType: 'find_sequence_from_terms',
        context: { 
            difficulty: 'advanced', 
            topic: 'Sequence Reconstruction',
            realWorld: 'Working backwards from sample data points'
        },
        subparts: [
            'Given: a₄ = 17, a₉ = 37',
            'Step 1: Find common difference d',
            'Formula: d = (aₘ - aₙ)/(m - n)',
            'd = (37 - 17)/(9 - 4)',
            'd = 20/5',
            'd = 4',
            '',
            'Step 2: Find first term a₁',
            'Using a₄ = 17 and d = 4',
            'Formula: a₁ = aₙ - (n-1)d',
            'a₁ = 17 - (4-1)×4',
            'a₁ = 17 - 3×4',
            'a₁ = 17 - 12',
            'a₁ = 5',
            '',
            'Verification:',
            'a₄ = 5 + (4-1)×4 = 5 + 12 = 17 ✓',
            'a₉ = 5 + (9-1)×4 = 5 + 32 = 37 ✓',
            '',
            'General Formula: aₙ = 5 + (n-1)×4 = 4n + 1'
        ],
        helper: 'First find d using the two terms, then use d to work backwards to find a₁',
        solution: 'a₁ = 5, d = 4, formula: aₙ = 4n + 1',
        realWorldContext: 'Like determining your starting salary and annual raise from knowing your salaries in years 4 and 9'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveArithmeticSequenceRelatedProblems() {
    const problems = generateRelatedArithmeticSequences();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Arithmetic Sequence Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedArithmeticSequencesWorkbook({
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
            const result = workbook.solveArithmeticSequenceProblem({
                sequence: problem.sequence,
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

            console.log(`    ✓ Solution: ${result.solutionValue || result.solution?.result || 'Solved'}`);
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
    console.log('Generating Arithmetic Sequences Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Arithmetic Sequences Workbook',
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
            text: 'nth Term, Sum, Position, and Sequence Reconstruction',
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
            text: 'Arithmetic Sequences (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const sequenceProblems = generateRelatedArithmeticSequences();
    sequenceProblems.forEach((problem, index) => {
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
            text: 'This workbook contains 5 carefully selected arithmetic sequence problems that progressively build your understanding. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed explanations',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Pattern recognition and formula application',
        '• Common mistakes and error prevention tips',
        '• Self-check questions and thinking prompts',
        '• Real-world applications and context',
        '• Alternative solution methods',
        '• Verification of solutions',
        '• Pedagogical notes for deeper understanding',
        '• Visual representations and analogies'
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
            text: 'What is an Arithmetic Sequence?',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'An arithmetic sequence is a sequence of numbers where the difference between consecutive terms is constant. This constant is called the common difference (d).',
            spacing: { after: 100 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Example: 3, 7, 11, 15, 19, ... is arithmetic with d = 4',
            spacing: { after: 200 },
            italics: true
        })
    );

    const keyFormulas = [
        '• nth Term Formula: aₙ = a₁ + (n-1)d',
        '• Common Difference: d = aₙ₊₁ - aₙ',
        '• Sum of n terms: Sₙ = (n/2)(a₁ + aₙ) or Sₙ = (n/2)(2a₁ + (n-1)d)',
        '• Position Formula: n = ((aₙ - a₁)/d) + 1'
    ];

    documentChildren.push(
        new docx.Paragraph({
            text: 'Key Formulas:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    keyFormulas.forEach(formula => {
        documentChildren.push(
            new docx.Paragraph({
                text: formula,
                spacing: { after: 100 }
            })
        );
    });

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Arithmetic Sequence Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Arithmetic Sequence Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const sequenceSolved = solveArithmeticSequenceRelatedProblems();
    
    sequenceSolved.forEach((solved, index) => {
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
            if (subpart === '') {
                documentChildren.push(
                    new docx.Paragraph({
                        text: '',
                        spacing: { after: 100 }
                    })
                );
            } else {
                documentChildren.push(
                    new docx.Paragraph({
                        text: subpart,
                        spacing: { after: 100 },
                        bullet: subpart.startsWith('Step') || subpart.startsWith('Given') || 
                                subpart.startsWith('Formula') || subpart.startsWith('Using') || 
                                subpart.startsWith('Verification') || subpart.startsWith('General') ? 
                                undefined : { level: 0 }
                    })
                );
            }
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
                        color: '1B5E20'
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
            text: 'Congratulations on completing these 5 arithmetic sequence problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve learned to identify arithmetic sequences by checking for constant differences',
        'You\'ve mastered the nth term formula: aₙ = a₁ + (n-1)d',
        'You\'ve practiced finding which position a specific value occurs at',
        'You\'ve calculated sums of arithmetic sequences using the sum formula',
        'You\'ve reconstructed complete sequences from just two non-consecutive terms',
        'You\'ve seen real-world applications like salary progression and savings patterns'
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
            text: 'Key Concepts to Remember:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const keyConcepts = [
        'Common difference (d) is constant between all consecutive terms',
        'Use (n-1) not n when applying the nth term formula',
        'Position n must be a positive integer',
        'Sum formulas require division by 2',
        'Arithmetic sequences graph as points on a straight line',
        'Negative d means decreasing sequence, positive d means increasing'
    ];

    keyConcepts.forEach(concept => {
        documentChildren.push(
            new docx.Paragraph({
                text: `• ${concept}`,
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
        'Practice with arithmetic sequences containing fractions and decimals',
        'Explore arithmetic means (inserting terms between two values)',
        'Study geometric sequences (where ratio is constant instead of difference)',
        'Learn about arithmetic series and sigma notation',
        'Apply sequences to compound interest and financial planning',
        'Solve real-world word problems involving arithmetic patterns'
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
            text: 'Practice Tips:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const practiceTips = [
        '📝 Always write out the formula before substituting values',
        '🔍 Verify your answer by checking it satisfies the sequence pattern',
        '⚠️ Watch for sign errors, especially with negative common differences',
        '📊 Try visualizing sequences on a number line or graph',
        '🎯 Remember: (n-1) represents the number of steps from the first term',
        '✅ Check that position n is a positive integer when finding position'
    ];

    practiceTips.forEach(tip => {
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
        const filename = 'arithmetic_sequences_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Sequence Identification: 1 problem');
        console.log('    - Finding nth Term: 1 problem');
        console.log('    - Finding Position: 1 problem');
        console.log('    - Sum of Sequence: 1 problem');
        console.log('    - Sequence Reconstruction: 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 45-55 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and visual highlighting');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Complete step-by-step solution with enhanced explanations');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Pattern recognition and formula derivation');
        console.log('  • Verification of solutions with detailed checking');
        console.log('  • Key concepts and sequence theory');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Visual representations (number line, staircase analogies)');
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
