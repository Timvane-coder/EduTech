import { EnhancedSimplifyingRadicalsMathematicalWorkbook } from './simplifying-radicals-workbook.js';
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




// ============== SIMPLIFYING RADICALS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedSimplifyingRadicalsProblems() {
    const relatedProblems = [];

    // Problem 1: Perfect Square Root (Easy)
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Perfect Square Root',
        problem: 'Simplify: √49',
        parameters: { radicand: 49, index: 2 },
        problemType: 'square_root_integer',
        context: { 
            difficulty: 'beginner', 
            topic: 'Perfect Square Roots',
            realWorld: 'Finding side length of a square with area 49'
        },
        subparts: [
            'Given: √49',
            'Recognize that 49 is a perfect square',
            '49 = 7 × 7 = 7²',
            'Therefore: √49 = √(7²) = 7',
            'Check: 7² = 49 ✓'
        ],
        helper: 'A perfect square is a number that equals some whole number squared. Memorize perfect squares: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100...',
        solution: '7',
        realWorldContext: 'If you have a square garden with area 49 square feet, each side is 7 feet long'
    });

    // Problem 2: Simplifying Square Root with Prime Factorization (Medium)
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Simplifying Square Root Using Prime Factorization',
        problem: 'Simplify: √72',
        parameters: { radicand: 72, index: 2 },
        problemType: 'square_root_integer',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Simplifying Square Roots',
            realWorld: 'Calculating exact distances and measurements'
        },
        subparts: [
            'Given: √72',
            'Step 1: Find prime factorization of 72',
            '72 = 2 × 36 = 2 × 2 × 18 = 2 × 2 × 2 × 9 = 2³ × 3²',
            'Step 2: Group factors into pairs (for square roots)',
            '72 = (2²) × 2 × (3²) = 4 × 9 × 2',
            'Step 3: Extract perfect square factors',
            '√72 = √(2² × 3² × 2) = √(2²) × √(3²) × √2',
            '= 2 × 3 × √2',
            '= 6√2',
            'Check: (6√2)² = 36 × 2 = 72 ✓'
        ],
        helper: 'Break the number into prime factors, group identical factors into pairs, and extract each pair as a single factor outside the radical',
        solution: '6√2',
        realWorldContext: 'When using the Pythagorean theorem, you often need to simplify radicals to get exact answers (e.g., diagonal of a 6×6 square)'
    });

    // Problem 3: Cube Root (Medium)
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Simplifying Cube Root',
        problem: 'Simplify: ∛54',
        parameters: { radicand: 54, index: 3 },
        problemType: 'cube_root_integer',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Cube Roots',
            realWorld: 'Finding edge length of a cube given its volume'
        },
        subparts: [
            'Given: ∛54',
            'Step 1: Find prime factorization of 54',
            '54 = 2 × 27 = 2 × 3³',
            'Step 2: Group factors into triples (for cube roots)',
            '54 = (3³) × 2',
            'Step 3: Extract perfect cube factors',
            '∛54 = ∛(3³ × 2) = ∛(3³) × ∛2',
            '= 3∛2',
            'Check: (3∛2)³ = 27 × 2 = 54 ✓'
        ],
        helper: 'For cube roots, group identical prime factors into sets of THREE. Each complete triple comes out as one factor',
        solution: '3∛2',
        realWorldContext: 'If you have a cubic box with volume 54 cubic inches, you need to find the edge length for construction'
    });

    // Problem 4: Rationalizing Denominator (Medium-Hard)
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Rationalizing the Denominator',
        problem: 'Rationalize: 12/√3',
        parameters: { numerator: 12, denominator_radicand: 3 },
        problemType: 'rationalize_monomial',
        context: { 
            difficulty: 'intermediate', 
            topic: 'Rationalizing Denominators',
            realWorld: 'Converting to standard form in engineering and science'
        },
        subparts: [
            'Given: 12/√3',
            'Goal: Eliminate the radical from the denominator',
            'Step 1: Multiply by √3/√3 (which equals 1)',
            '12/√3 × √3/√3',
            'Step 2: Multiply numerators and denominators',
            '= (12 × √3)/(√3 × √3)',
            '= (12√3)/3',
            'Step 3: Simplify the fraction',
            '= 4√3',
            'Check: Denominator is now rational (no √ in denominator) ✓'
        ],
        helper: 'To rationalize a/√b, multiply both numerator and denominator by √b. This creates √b × √b = b in the denominator',
        solution: '4√3',
        realWorldContext: 'In electrical engineering, impedance calculations often require rationalizing denominators for standard form'
    });

    // Problem 5: Simplifying Large Square Root (Hard)
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Simplifying Complex Square Root',
        problem: 'Simplify: √200',
        parameters: { radicand: 200, index: 2 },
        problemType: 'square_root_integer',
        context: { 
            difficulty: 'advanced', 
            topic: 'Advanced Radical Simplification',
            realWorld: 'Precise calculations in physics and geometry'
        },
        subparts: [
            'Given: √200',
            'Step 1: Find prime factorization of 200',
            '200 = 2 × 100 = 2 × 10² = 2 × (2 × 5)²',
            '200 = 2 × 2² × 5² = 2³ × 5²',
            'Step 2: Identify perfect square factors',
            '200 = (2²) × (5²) × 2 = 4 × 25 × 2 = 100 × 2',
            'Step 3: Extract perfect squares',
            '√200 = √(100 × 2) = √100 × √2',
            '= 10√2',
            'Alternative approach:',
            '√200 = √(2² × 5² × 2) = 2 × 5 × √2 = 10√2',
            'Check: (10√2)² = 100 × 2 = 200 ✓'
        ],
        helper: 'Look for the largest perfect square factor. For 200, notice that 100 is a perfect square factor: 200 = 100 × 2',
        solution: '10√2',
        realWorldContext: 'When calculating the hypotenuse of a right triangle with legs 10 and 10√2, or in projectile motion calculations in physics'
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveSimplifyingRadicalsRelatedProblems() {
    const problems = generateRelatedSimplifyingRadicalsProblems();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Radical Simplification Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedSimplifyingRadicalsMathematicalWorkbook({
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

            console.log(`    ✓ Solution: ${result.simplifiedForm}`);
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

async function generateComprehensiveRadicalsDocument() {
    console.log('Generating Simplifying Radicals Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Simplifying Radicals Workbook',
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
            text: 'Square Roots, Cube Roots, and Rationalization',
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
            text: 'Simplifying Radicals (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const radicalProblems = generateRelatedSimplifyingRadicalsProblems();
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
            text: 'This workbook contains 5 carefully selected radical simplification problems that progressively build your understanding from perfect squares to complex simplifications and rationalization. Each problem includes:',
            spacing: { after: 200 }
        })
    );

    const features = [
        '• Complete step-by-step solutions with detailed prime factorization',
        '• Multiple explanation styles (conceptual, procedural, visual, algebraic)',
        '• Factor tree visualizations and grouping techniques',
        '• Common mistakes and error prevention strategies',
        '• Self-check questions and thinking prompts',
        '• Real-world applications in geometry, physics, and engineering',
        '• Alternative solution methods and optimization tips',
        '• Verification techniques to check your answers',
        '• Perfect squares and perfect cubes reference tables',
        '• Pedagogical notes for deeper mathematical understanding'
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
            text: 'Key Concepts Covered:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const concepts = [
        '✓ Perfect square recognition and extraction',
        '✓ Prime factorization technique for radical simplification',
        '✓ Grouping factors into pairs (square roots) and triples (cube roots)',
        '✓ Product property of radicals: √(ab) = √a × √b',
        '✓ Rationalizing denominators to eliminate radicals',
        '✓ Simplification verification and checking methods'
    ];

    concepts.forEach(concept => {
        documentChildren.push(
            new docx.Paragraph({
                text: concept,
                spacing: { after: 100 }
            })
        );
    });

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Simplifying Radicals Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Simplifying Radicals Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const radicalsSolved = solveSimplifyingRadicalsRelatedProblems();
    
    radicalsSolved.forEach((solved, index) => {
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
                    fill: "FFE6F0",
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
                        color: difficultyColors[solved.problem.difficulty] || '1976D2',
                        bold: true
                    })
                ],
                spacing: { after: 100 }
            })
        );

        // Helper tip with icon
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

        // Real-world context with icon
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
                        color: '6A1B9A',
                        size: 28
                    })
                ],
                spacing: { before: 200, after: 400 },
                shading: {
                    fill: "F3E5F5",
                    type: docx.ShadingType.CLEAR
                }
            })
        );
    });

    // ============== REFERENCE TABLES SECTION ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Quick Reference Tables',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    // Perfect Squares Table
    documentChildren.push(
        new docx.Paragraph({
            text: 'Perfect Squares (1² to 20²)',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 200, after: 100 }
        })
    );

    const perfectSquares = [
        '1² = 1, 2² = 4, 3² = 9, 4² = 16, 5² = 25',
        '6² = 36, 7² = 49, 8² = 64, 9² = 81, 10² = 100',
        '11² = 121, 12² = 144, 13² = 169, 14² = 196, 15² = 225',
        '16² = 256, 17² = 289, 18² = 324, 19² = 361, 20² = 400'
    ];

    perfectSquares.forEach(line => {
        documentChildren.push(
            new docx.Paragraph({
                text: line,
                spacing: { after: 100 }
            })
        );
    });

    // Perfect Cubes Table
    documentChildren.push(
        new docx.Paragraph({
            text: 'Perfect Cubes (1³ to 10³)',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 300, after: 100 }
        })
    );

    const perfectCubes = [
        '1³ = 1, 2³ = 8, 3³ = 27, 4³ = 64, 5³ = 125',
        '6³ = 216, 7³ = 343, 8³ = 512, 9³ = 729, 10³ = 1000'
    ];

    perfectCubes.forEach(line => {
        documentChildren.push(
            new docx.Paragraph({
                text: line,
                spacing: { after: 100 }
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
            text: 'Congratulations on completing these 5 radical simplification problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered recognizing and simplifying perfect square roots',
        'You\'ve learned prime factorization technique for complex radicals',
        'You\'ve practiced grouping factors into pairs and triples',
        'You\'ve learned to rationalize denominators',
        'You\'ve seen real-world applications in geometry, physics, and engineering',
        'You\'ve developed strategies to avoid common mistakes'
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
        'Practice simplifying radicals with variables (√(x²y³))',
        'Learn to add and subtract like radicals (2√3 + 5√3)',
        'Master multiplying radical expressions',
        'Explore rationalizing binomial denominators using conjugates',
        'Apply radical simplification to solving radical equations',
        'Use radicals in the Pythagorean theorem and distance formula'
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
            text: 'Pro Tips for Success:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const proTips = [
        '📝 Memorize perfect squares 1-20 and perfect cubes 1-10',
        '🌳 Always draw factor trees for visualization when stuck',
        '✓ Check your work by squaring or cubing your answer',
        '🎯 Look for the largest perfect square/cube factor to simplify quickly',
        '🔄 Practice, practice, practice - radical simplification gets easier with repetition'
    ];

    proTips.forEach(tip => {
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
        const filename = 'simplifying_radicals_5_test_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Perfect Square Roots: 1 problem');
        console.log('    - Simplifying with Prime Factorization: 2 problems');
        console.log('    - Cube Roots: 1 problem');
        console.log('    - Rationalizing Denominators: 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 45-55 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and visual highlighting');
        console.log('  • Quick helper tips for immediate guidance');
        console.log('  • Real-world context explaining practical applications');
        console.log('  • Complete step-by-step solution with prime factorization');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Factor tree visualizations and grouping strategies');
        console.log('  • Verification of solutions with detailed checking');
        console.log('  • Key concepts and radical properties');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Alternative solution methods');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Practice problems for reinforcement');
        console.log('  • Quick reference solution summary');
        console.log('  • Perfect squares and perfect cubes reference tables');
        console.log('='.repeat(80) + '\n');
    } catch (error) {
        console.error(`\n❌ Error saving document: ${error.message}`);
        console.error(error.stack);
    }
}

// ============== RUN THE DOCUMENT GENERATION ==============

generateComprehensiveRadicalsDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});
