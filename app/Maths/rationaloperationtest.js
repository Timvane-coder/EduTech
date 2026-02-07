import { EnhancedRadicalOperationsMathematicalWorkbook } from './radical-operations-workbook.js';
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




// ============== RADICAL OPERATIONS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedRadicalOperations() {
    const relatedProblems = [];

    // Problem 1: Simplifying Square Root
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Simplifying Square Roots',
        problem: 'Simplify: √48',
        parameters: { radicand: 48 },
        problemType: 'simplify_square_root',
        context: { 
            difficulty: 'beginner', 
            topic: 'Simplifying Radicals',
            realWorld: 'Finding exact lengths in geometry'
        },
        subparts: [
            'Given: √48',
            'Step 1: Find perfect square factors',
            '48 = 16 × 3',
            'Step 2: Apply product property',
            '√48 = √(16 × 3) = √16 × √3',
            'Step 3: Simplify perfect square',
            '√16 = 4',
            'Final Answer: 4√3',
            'Approximate: 4√3 ≈ 6.928'
        ],
        helper: 'Look for the largest perfect square factor (1, 4, 9, 16, 25, 36, 49, 64, 81, 100...)',
        solution: '4√3',
        realWorldContext: 'Like finding the exact diagonal length of a rectangle with area 48 square units',
        visualTip: 'Think of √48 as finding the side of a square with area 48. We can break it into a 4×4 square (16) times 3.'
    });

    // Problem 2: Adding Radicals
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Adding Radicals',
        problem: 'Simplify: √12 + √27',
        parameters: { coef1: 1, rad1: 12, coef2: 1, rad2: 27 },
        problemType: 'add_radicals',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Adding and Subtracting Radicals',
            realWorld: 'Combining measurements in construction'
        },
        subparts: [
            'Given: √12 + √27',
            'Step 1: Simplify each radical',
            '√12 = √(4 × 3) = 2√3',
            '√27 = √(9 × 3) = 3√3',
            'Step 2: Check if like radicals',
            'Both have radicand 3, so they are like radicals',
            'Step 3: Add coefficients',
            '2√3 + 3√3 = (2 + 3)√3 = 5√3',
            'Final Answer: 5√3',
            'Approximate: 5√3 ≈ 8.660'
        ],
        helper: 'Always simplify each radical first, then combine only if they have the same radicand',
        solution: '5√3',
        realWorldContext: 'Like combining two pieces of wood of lengths 2√3 feet and 3√3 feet',
        visualTip: 'Think of √3 as a unit (like apples). You have 2 units plus 3 units = 5 units.'
    });

    // Problem 3: Multiplying Radicals
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Multiplying Radicals',
        problem: 'Simplify: (2√6)(3√2)',
        parameters: { coef1: 2, rad1: 6, coef2: 3, rad2: 2 },
        problemType: 'multiply_radicals',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Multiplying Radicals',
            realWorld: 'Calculating areas with radical dimensions'
        },
        subparts: [
            'Given: (2√6)(3√2)',
            'Step 1: Multiply coefficients',
            '2 × 3 = 6',
            'Step 2: Multiply radicands using product property',
            '√6 × √2 = √(6 × 2) = √12',
            'Step 3: Combine results',
            '6√12',
            'Step 4: Simplify √12',
            '√12 = √(4 × 3) = 2√3',
            'Step 5: Final multiplication',
            '6 × 2√3 = 12√3',
            'Final Answer: 12√3',
            'Approximate: 12√3 ≈ 20.785'
        ],
        helper: 'Multiply coefficients together AND radicands together, then simplify',
        solution: '12√3',
        realWorldContext: 'Like finding the area of a rectangle with sides 2√6 and 3√2 units',
        visualTip: 'Multiply outside numbers (coefficients) and inside numbers (radicands) separately.'
    });

    // Problem 4: Dividing and Rationalizing
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Rationalizing Denominators',
        problem: 'Rationalize: 12/√3',
        parameters: { numerator: 12, denominator_rad: 3 },
        problemType: 'rationalize_monomial',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Rationalizing Denominators',
            realWorld: 'Standardizing measurements and calculations'
        },
        subparts: [
            'Given: 12/√3',
            'Step 1: Identify the radical in denominator',
            'We have √3 in the denominator',
            'Step 2: Multiply by √3/√3 (which equals 1)',
            '(12/√3) × (√3/√3)',
            'Step 3: Multiply numerator',
            '12 × √3 = 12√3',
            'Step 4: Multiply denominator',
            '√3 × √3 = 3',
            'Step 5: Simplify the fraction',
            '12√3 / 3 = 4√3',
            'Final Answer: 4√3',
            'Approximate: 4√3 ≈ 6.928'
        ],
        helper: 'To rationalize, multiply top and bottom by the radical in the denominator',
        solution: '4√3',
        realWorldContext: 'Like converting a rate with √3 in denominator to standard form for easier calculations',
        visualTip: 'Multiplying by √3/√3 is multiplying by 1, so it doesn\'t change the value—just the form.'
    });

    // Problem 5: Subtracting Radicals with Simplification
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Subtracting Radicals (Advanced)',
        problem: 'Simplify: 3√20 - 2√45',
        parameters: { coef1: 3, rad1: 20, coef2: 2, rad2: 45 },
        problemType: 'subtract_radicals',
        context: { 
            difficulty: 'advanced', 
            topic: 'Operations with Radicals',
            realWorld: 'Finding differences in measurements'
        },
        subparts: [
            'Given: 3√20 - 2√45',
            'Step 1: Simplify first radical',
            '√20 = √(4 × 5) = 2√5',
            'So 3√20 = 3 × 2√5 = 6√5',
            'Step 2: Simplify second radical',
            '√45 = √(9 × 5) = 3√5',
            'So 2√45 = 2 × 3√5 = 6√5',
            'Step 3: Rewrite expression with simplified radicals',
            '6√5 - 6√5',
            'Step 4: Subtract coefficients (like radicals)',
            '(6 - 6)√5 = 0√5 = 0',
            'Final Answer: 0',
            'Note: The radicals completely cancel out!'
        ],
        helper: 'Simplify each radical completely first, then subtract coefficients if radicands match',
        solution: '0',
        realWorldContext: 'Like calculating net change when two equal but opposite radical quantities cancel',
        visualTip: 'Both terms simplify to 6√5, so subtracting them gives zero—they\'re equal and opposite!'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveRadicalRelatedProblems() {
    const problems = generateRelatedRadicalOperations();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Radical Operations Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedRadicalOperationsMathematicalWorkbook({
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
                expression: problem.problem.split(': ')[1] || problem.problem,
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

            console.log(`    ✓ Solution: ${result.simplifiedForm || result.exactValue || 'Solved'}`);
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

async function generateComprehensiveRadicalDocument() {
    console.log('Generating Radical Operations Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Radical Operations Workbook',
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
            text: 'Simplifying, Adding, Subtracting, Multiplying, and Rationalizing',
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
            text: 'Radical Operations (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const radicalProblems = generateRelatedRadicalOperations();
    radicalProblems.forEach((problem, index) => {
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
            text: 'This workbook contains 5 carefully selected radical operations problems that progressively build your understanding of working with square roots and radicals. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed explanations',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Common mistakes and error prevention tips for radical operations',
        '• Self-check questions and thinking prompts',
        '• Real-world applications of radicals in geometry and calculations',
        '• Alternative solution methods and approaches',
        '• Verification of solutions with exact and approximate values',
        '• Pedagogical notes for deeper understanding of radical properties',
        '• Visual tips to help understand radical operations intuitively'
    ];

    features.forEach(feature => {
        documentChildren.push(
            new docx.Paragraph({
                text: feature,
                spacing: { after: 100 }
            })
        );
    });

    // Add key radical concepts
    documentChildren.push(
        new docx.Paragraph({
            text: 'Key Radical Concepts Covered:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const keyConcepts = [
        '✓ Simplifying radicals by extracting perfect square factors',
        '✓ Adding and subtracting like radicals',
        '✓ Multiplying radicals using the product property',
        '✓ Rationalizing denominators to remove radicals from the bottom',
        '✓ Understanding when radicals can and cannot be combined',
        '✓ Product property: √a × √b = √(ab)',
        '✓ Quotient property: √a / √b = √(a/b)',
        '✓ Perfect squares: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100...'
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
    console.log('\nProcessing Radical Operations Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Radical Operations Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const radicalSolved = solveRadicalRelatedProblems();
    
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
                    fill: "E0F2F7",
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
                spacing: { after: 150 },
                shading: {
                    fill: "FFF9E6",
                    type: docx.ShadingType.CLEAR
                }
            })
        );

        // Visual tip (special for radicals)
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
            text: 'Congratulations on completing these 5 radical operations problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve learned to simplify radicals by extracting perfect square factors',
        'You\'ve practiced adding and subtracting like radicals',
        'You\'ve mastered multiplying radicals using the product property',
        'You\'ve learned to rationalize denominators to remove radicals',
        'You\'ve seen how different radical operations connect to real-world geometry and calculations',
        'You understand why some radicals can be combined and others cannot'
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
            text: 'Key Radical Properties to Remember:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const keyProperties = [
        '√(ab) = √a × √b (Product Property)',
        '√(a/b) = √a / √b (Quotient Property)',
        'a√c + b√c = (a+b)√c (Adding Like Radicals)',
        '√a × √a = a (Square Root Cancels)',
        'Cannot simplify: √(a+b) ≠ √a + √b',
        'Perfect squares: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144...'
    ];

    keyProperties.forEach(property => {
        documentChildren.push(
            new docx.Paragraph({
                text: `• ${property}`,
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
        'Practice more complex radical simplifications with larger numbers',
        'Learn to work with cube roots and higher-index radicals',
        'Master FOIL with radicals (multiplying binomials)',
        'Apply radicals to solve the Pythagorean theorem problems',
        'Explore radical equations and solving for variables',
        'Study distance formula applications with radicals',
        'Practice rationalizing binomial denominators using conjugates'
    ];

    nextSteps.forEach((step, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${step}`,
                spacing: { after: 100 }
            })
        );
    });

    // Common mistakes reminder
    documentChildren.push(
        new docx.Paragraph({
            text: 'Common Mistakes to Avoid:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const commonMistakes = [
        '❌ √(a+b) ≠ √a + √b (radicals do NOT distribute over addition)',
        '❌ Don\'t add radicands when adding radicals (add coefficients only)',
        '❌ Don\'t forget to simplify radicals before trying to combine them',
        '❌ When rationalizing, multiply BOTH numerator and denominator',
        '❌ When multiplying radicals, multiply radicands (don\'t add them)',
        '❌ Don\'t leave perfect square factors under the radical'
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
        const filename = 'radical_operations_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Simplifying Radicals: 1 problem');
        console.log('    - Adding Radicals: 1 problem');
        console.log('    - Multiplying Radicals: 1 problem');
        console.log('    - Rationalizing Denominators: 1 problem');
        console.log('    - Subtracting Radicals (Advanced): 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 45-55 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and visual highlighting');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Visual tips to build intuition about radical operations');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Complete step-by-step solution with enhanced explanations');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Verification with exact and approximate decimal values');
        console.log('  • Key concepts and radical properties');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary');
        console.log('  • Summary of key radical properties and common mistakes');
        console.log('='.repeat(80) + '\n');
    } catch (error) {
        console.error(`\n❌ Error saving document: ${error.message}`);
        console.error(error.stack);
    }
}

// ============== RUN THE DOCUMENT GENERATION ==============

generateComprehensiveRadicalDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});
