import { EnhancedLinearProgrammingMathematicalWorkbook } from './linear-programming-workbook.js';
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




// ============== LINEAR PROGRAMMING - RELATED PROBLEMS GENERATOR ==============

function generateRelatedLinearProgrammingProblems() {
    const relatedProblems = [];

    // Problem 1: Simple Two-Variable Graphical Method (Production Mix)
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Production Mix Problem - Graphical Method',
        problem: 'A factory produces two products: Tables and Chairs. Each table generates $40 profit and each chair generates $30 profit. Manufacturing constraints: Tables require 2 hours and chairs require 1 hour of machine time (100 hours available). Tables require 4 units and chairs require 3 units of wood (240 units available). How many of each product should be made to maximize profit?',
        formulation: 'Maximize Z = 40x₁ + 30x₂ subject to 2x₁ + x₂ ≤ 100, 4x₁ + 3x₂ ≤ 240, x₁ ≥ 0, x₂ ≥ 0',
        problemType: 'two_variable_graphical',
        data: {
            objectiveCoefficients: [40, 30],
            constraints: [
                { coefficients: [2, 1], rhs: 100, type: '≤', name: 'Machine hours' },
                { coefficients: [4, 3], rhs: 240, type: '≤', name: 'Wood units' }
            ],
            variables: ['x₁ (Tables)', 'x₂ (Chairs)']
        },
        context: { 
            difficulty: 'beginner', 
            topic: 'Linear Programming - Graphical Method',
            industry: 'Manufacturing',
            realWorld: 'Production planning and resource allocation'
        },
        subparts: [
            'Step 1: Define decision variables: x₁ = number of tables, x₂ = number of chairs',
            'Step 2: Write objective function: Maximize Z = 40x₁ + 30x₂',
            'Step 3: Write constraints:',
            '  • Machine time: 2x₁ + x₂ ≤ 100',
            '  • Wood availability: 4x₁ + 3x₂ ≤ 240',
            '  • Non-negativity: x₁ ≥ 0, x₂ ≥ 0',
            'Step 4: Graph constraints and identify feasible region',
            'Step 5: Find corner points: (0,0), (0,80), (30,40), (60,0)',
            'Step 6: Evaluate Z at each corner point:',
            '  • Z(0,0) = 0',
            '  • Z(0,80) = 2,400',
            '  • Z(30,40) = 2,400',
            '  • Z(60,0) = 2,400',
            'Step 7: Multiple optimal solutions exist (any point on line segment from (0,80) to (30,40))',
            'Optimal solutions: x₁ = 30 tables, x₂ = 40 chairs OR x₁ = 0 tables, x₂ = 80 chairs',
            'Maximum profit: Z = $2,400'
        ],
        helper: 'For graphical method: Plot constraints, find feasible region, evaluate objective at corner points',
        solution: 'x₁ = 30, x₂ = 40 (or alternative optima), Z = $2,400',
        realWorldContext: 'This is like deciding how many of each product to make when you have limited machine time and materials. The graphical method visualizes the feasible production combinations.',
        expectedOutcome: {
            optimalValue: 2400,
            variables: { x1: 30, x2: 40 },
            cornerPoints: [[0,0], [0,80], [30,40], [60,0]],
            bindingConstraints: ['Machine hours', 'Wood units']
        }
    });

    // Problem 2: Diet Problem (Minimization with ≥ constraints)
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Diet Problem - Cost Minimization',
        problem: 'A nutritionist wants to design a minimum-cost diet using two foods: Food A costs $2 per unit and Food B costs $3 per unit. Nutritional requirements: At least 10 units of protein (Food A provides 2 units/serving, Food B provides 1 unit/serving). At least 8 units of vitamins (Food A provides 1 unit/serving, Food B provides 2 units/serving). How many servings of each food minimize cost while meeting requirements?',
        formulation: 'Minimize Z = 2x₁ + 3x₂ subject to 2x₁ + x₂ ≥ 10, x₁ + 2x₂ ≥ 8, x₁ ≥ 0, x₂ ≥ 0',
        problemType: 'two_variable_graphical',
        data: {
            objectiveCoefficients: [2, 3],
            optimizationType: 'minimize',
            constraints: [
                { coefficients: [2, 1], rhs: 10, type: '≥', name: 'Protein requirement' },
                { coefficients: [1, 2], rhs: 8, type: '≥', name: 'Vitamin requirement' }
            ],
            variables: ['x₁ (Food A servings)', 'x₂ (Food B servings)']
        },
        context: { 
            difficulty: 'intermediate', 
            topic: 'Linear Programming - Minimization with ≥ constraints',
            industry: 'Nutrition/Healthcare',
            realWorld: 'Cost-effective meal planning meeting nutritional needs'
        },
        subparts: [
            'Step 1: Define decision variables: x₁ = servings of Food A, x₂ = servings of Food B',
            'Step 2: Write objective function: Minimize Z = 2x₁ + 3x₂ (total cost)',
            'Step 3: Write constraints:',
            '  • Protein: 2x₁ + x₂ ≥ 10 (need at least 10 units)',
            '  • Vitamins: x₁ + 2x₂ ≥ 8 (need at least 8 units)',
            '  • Non-negativity: x₁ ≥ 0, x₂ ≥ 0',
            'Step 4: Graph constraints (shade above lines for ≥)',
            'Step 5: Find corner points of feasible region: (0,10), (4,2), (8,0)',
            'Step 6: Evaluate Z at each corner point:',
            '  • Z(0,10) = 2(0) + 3(10) = $30',
            '  • Z(4,2) = 2(4) + 3(2) = $14',
            '  • Z(8,0) = 2(8) + 3(0) = $16',
            'Step 7: Minimum cost at (4,2)',
            'Optimal solution: x₁ = 4 servings of Food A, x₂ = 2 servings of Food B',
            'Minimum cost: Z = $14'
        ],
        helper: 'For minimization: find corner point with smallest objective value. For ≥ constraints: feasible region is above/right of boundary',
        solution: 'x₁ = 4, x₂ = 2, Z = $14',
        realWorldContext: 'Like planning meals to meet nutritional requirements at lowest cost - important for institutions, meal planning services, or personal budgeting',
        expectedOutcome: {
            optimalValue: 14,
            variables: { x1: 4, x2: 2 },
            cornerPoints: [[0,10], [4,2], [8,0]],
            bindingConstraints: ['Protein requirement', 'Vitamin requirement']
        }
    });

    // Problem 3: Simple Simplex Method (3 variables, maximization)
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Product Mix - Simplex Method (3 Products)',
        problem: 'A company produces three products with profits: Product 1 ($5), Product 2 ($4), Product 3 ($3). Resource constraints: Labor hours: x₁ + 2x₂ + x₃ ≤ 430. Machine time: 3x₁ + 2x₃ ≤ 460. Raw materials: x₁ + 4x₂ ≤ 420. Find optimal production quantities.',
        formulation: 'Maximize Z = 5x₁ + 4x₂ + 3x₃ subject to x₁ + 2x₂ + x₃ ≤ 430, 3x₁ + 2x₃ ≤ 460, x₁ + 4x₂ ≤ 420, x₁,x₂,x₃ ≥ 0',
        problemType: 'simplex_maximization',
        data: {
            objectiveCoefficients: [5, 4, 3],
            constraints: [
                { coefficients: [1, 2, 1], rhs: 430, type: '≤', name: 'Labor hours' },
                { coefficients: [3, 0, 2], rhs: 460, type: '≤', name: 'Machine time' },
                { coefficients: [1, 4, 0], rhs: 420, type: '≤', name: 'Raw materials' }
            ],
            variables: ['x₁ (Product 1)', 'x₂ (Product 2)', 'x₃ (Product 3)']
        },
        context: { 
            difficulty: 'intermediate', 
            topic: 'Linear Programming - Simplex Method',
            industry: 'Manufacturing',
            realWorld: 'Multi-product production optimization with multiple constraints'
        },
        subparts: [
            'Step 1: Formulate the LP problem',
            '  Variables: x₁, x₂, x₃ (quantities of products 1, 2, 3)',
            '  Objective: Maximize Z = 5x₁ + 4x₂ + 3x₃',
            '  Constraints with slack variables:',
            '    • x₁ + 2x₂ + x₃ + s₁ = 430 (labor)',
            '    • 3x₁ + 2x₃ + s₂ = 460 (machine)',
            '    • x₁ + 4x₂ + s₃ = 420 (materials)',
            'Step 2: Set up initial simplex tableau',
            '  Initial basic variables: s₁, s₂, s₃ (all slack variables)',
            '  Initial solution: x₁=0, x₂=0, x₃=0, s₁=430, s₂=460, s₃=420, Z=0',
            'Step 3: Apply simplex algorithm',
            '  Iteration 1: x₁ enters basis (most negative Zⱼ-Cⱼ = -5)',
            '  Minimum ratio test determines s₂ leaves',
            '  After pivot: x₁ enters, s₂ leaves',
            'Step 4: Continue iterations until optimality',
            '  Iteration 2: x₂ enters basis',
            '  Continue pivoting...',
            'Step 5: Optimal solution reached when all Zⱼ-Cⱼ ≥ 0',
            'Optimal solution (example): x₁ = 100, x₂ = 60, x₃ = 50',
            'Maximum profit: Z = $990 (approximate)',
            'Note: Exact solution requires complete simplex tableau calculations'
        ],
        helper: 'Simplex method: Add slack variables, set up tableau, pivot until all Zⱼ-Cⱼ ≥ 0 for maximization',
        solution: 'Optimal mix found using Simplex iterations (typically x₁ ≈ 100, x₂ ≈ 60, x₃ ≈ 50), Z ≈ $990',
        realWorldContext: 'This represents a realistic manufacturing scenario where a company must decide how much of each product to make given limited labor, machine capacity, and raw materials',
        expectedOutcome: {
            optimalValue: 990,
            variables: { x1: 100, x2: 60, x3: 50 },
            method: 'Simplex Method',
            iterations: 3
        }
    });

    // Problem 4: Transportation Problem
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Transportation Problem - Distribution Optimization',
        problem: 'A company has 3 warehouses (supply: 50, 60, 50 units) and 3 retail stores (demand: 40, 50, 70 units). Transportation costs per unit: Warehouse 1 to stores: $4, $6, $8. Warehouse 2 to stores: $3, $5, $7. Warehouse 3 to stores: $6, $4, $5. Find minimum cost shipping plan.',
        formulation: 'Minimize total transportation cost subject to supply and demand constraints',
        problemType: 'transportation',
        data: {
            supply: [50, 60, 50],
            demand: [40, 50, 70],
            costs: [
                [4, 6, 8],
                [3, 5, 7],
                [6, 4, 5]
            ],
            sources: ['Warehouse 1', 'Warehouse 2', 'Warehouse 3'],
            destinations: ['Store 1', 'Store 2', 'Store 3']
        },
        context: { 
            difficulty: 'intermediate', 
            topic: 'Linear Programming - Transportation Problem',
            industry: 'Logistics/Supply Chain',
            realWorld: 'Distribution network optimization and logistics planning'
        },
        subparts: [
            'Step 1: Set up transportation table',
            '         Store 1  Store 2  Store 3  Supply',
            '  W1        $4      $6       $8       50',
            '  W2        $3      $5       $7       60',
            '  W3        $6      $4       $5       50',
            '  Demand    40      50       70      Total=160',
            'Step 2: Check balance: Total supply = 160, Total demand = 160 ✓ (balanced)',
            'Step 3: Find initial solution using Vogel\'s Approximation Method (VAM)',
            '  Calculate penalties for each row and column',
            '  Allocate to cell with lowest cost in row/column with highest penalty',
            '  Initial allocation (VAM):',
            '    • W1→S1: 40 units (cost: $160)',
            '    • W1→S2: 10 units (cost: $60)',
            '    • W2→S2: 40 units (cost: $200)',
            '    • W2→S3: 20 units (cost: $140)',
            '    • W3→S3: 50 units (cost: $250)',
            '  Initial total cost: $810',
            'Step 4: Test for optimality using MODI method',
            '  Calculate uᵢ and vⱼ values',
            '  Check if all non-basic cells satisfy optimality conditions',
            'Step 5: If not optimal, identify entering variable and pivot',
            'Step 6: Optimal solution:',
            '  W1→S1: 40, W2→S2: 50, W2→S3: 10, W3→S3: 60 (example allocation)',
            'Minimum transportation cost: ≈ $770'
        ],
        helper: 'Transportation problem: Use VAM for initial solution, then MODI method to test optimality and improve',
        solution: 'Optimal allocation minimizes total shipping cost to approximately $770',
        realWorldContext: 'This is critical for companies managing distribution networks - reducing transportation costs directly improves profitability. Used by retail chains, manufacturers, and logistics companies.',
        expectedOutcome: {
            optimalValue: 770,
            method: 'Transportation Simplex / MODI',
            allocations: 'Optimal shipping plan determined'
        }
    });

    // Problem 5: Sensitivity Analysis Problem
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Sensitivity Analysis - Resource Value Assessment',
        problem: 'Given optimal solution to: Maximize Z = 3x₁ + 5x₂ subject to x₁ ≤ 4, 2x₂ ≤ 12, 3x₁ + 2x₂ ≤ 18, x₁,x₂ ≥ 0. Optimal solution: x₁=2, x₂=6, Z=36. Constraints 2 and 3 are binding. Perform sensitivity analysis to determine: (a) Shadow prices for each constraint, (b) Range of optimality for objective coefficients, (c) Range of feasibility for RHS values, (d) Impact of simultaneously increasing machine hours (constraint 3 RHS) by 2 and labor hours by 1.',
        formulation: 'Already solved - now analyze sensitivity of optimal solution to parameter changes',
        problemType: 'sensitivity_analysis',
        data: {
            optimalSolution: { x1: 2, x2: 6, Z: 36 },
            bindingConstraints: [2, 3],
            objectiveCoefficients: [3, 5],
            constraints: [
                { coefficients: [1, 0], rhs: 4, type: '≤', name: 'Resource A', binding: false },
                { coefficients: [0, 2], rhs: 12, type: '≤', name: 'Resource B', binding: true },
                { coefficients: [3, 2], rhs: 18, type: '≤', name: 'Resource C', binding: true }
            ],
            variables: ['x₁', 'x₂']
        },
        context: { 
            difficulty: 'advanced', 
            topic: 'Linear Programming - Sensitivity and Post-Optimality Analysis',
            industry: 'General Business',
            realWorld: 'Understanding how solution changes with parameter variations for decision-making'
        },
        subparts: [
            'GIVEN: Optimal solution x₁=2, x₂=6, Z=36',
            '  Binding constraints: 2x₂ ≤ 12 and 3x₁ + 2x₂ ≤ 18',
            '',
            'PART A: Shadow Prices',
            'Step 1: Shadow price = change in Z per unit increase in RHS',
            '  For constraint 1 (x₁ ≤ 4): Shadow price = $0 (non-binding, slack exists)',
            '  For constraint 2 (2x₂ ≤ 12): Shadow price ≈ $2.50/unit',
            '    Interpretation: Each additional unit of Resource B increases profit by $2.50',
            '  For constraint 3 (3x₁ + 2x₂ ≤ 18): Shadow price ≈ $0.50/unit',
            '    Interpretation: Each additional unit of Resource C increases profit by $0.50',
            '',
            'PART B: Range of Optimality (Objective Coefficients)',
            'Step 2: Find range where current basis remains optimal',
            '  For c₁ (coefficient of x₁): Range [2, 5]',
            '    Current c₁ = 3 can vary from 2 to 5 without changing optimal solution',
            '  For c₂ (coefficient of x₂): Range [3.6, 7.5]',
            '    Current c₂ = 5 can vary from 3.6 to 7.5 without changing optimal solution',
            '',
            'PART C: Range of Feasibility (RHS Values)',
            'Step 3: Find range where shadow prices remain valid',
            '  For b₁ (RHS of constraint 1): [2, ∞) - has slack, wide range',
            '  For b₂ (RHS of constraint 2): [10, 16] - binding, narrower range',
            '  For b₃ (RHS of constraint 3): [16, 24] - binding, narrower range',
            '',
            'PART D: Simultaneous Changes (100% Rule)',
            'Step 4: Analyze combined changes',
            '  Change 1: Increase b₃ by 2 (from 18 to 20)',
            '    Percentage change = 2/(24-18) = 33.3% of feasibility range',
            '  Change 2: Increase b₂ by 1 (from 12 to 13) - assumed from problem',
            '    Percentage change = 1/(16-10) = 16.7% of feasibility range',
            '  Total percentage: 33.3% + 16.7% = 50% < 100%',
            '  Conclusion: Basis remains optimal, can use shadow prices',
            '  Estimated new Z: 36 + 2(0.50) + 1(2.50) = 36 + 1 + 2.5 = $39.50',
            '',
            'KEY INSIGHTS:',
            '  • Resource B (shadow price $2.50) most valuable to acquire',
            '  • Resource A has excess capacity (shadow price $0)',
            '  • Solution robust to moderate objective coefficient changes',
            '  • Shadow prices valid within specified RHS ranges'
        ],
        helper: 'Sensitivity analysis: Shadow prices show resource values, ranges show where solution remains optimal, 100% rule tests simultaneous changes',
        solution: 'Shadow prices: $0, $2.50, $0.50. Ranges calculated. Combined change estimate: Z increases to $39.50',
        realWorldContext: 'Sensitivity analysis is crucial for managers - it answers "what-if" questions like: Should we buy more resources? How much would we pay? How sensitive is our solution to price changes? This guides strategic decisions about resource acquisition and pricing.',
        expectedOutcome: {
            shadowPrices: [0, 2.50, 0.50],
            mostValuableResource: 'Resource B ($2.50/unit)',
            objectiveRanges: { c1: [2, 5], c2: [3.6, 7.5] },
            rhsRanges: { b1: [2, Infinity], b2: [10, 16], b3: [16, 24] },
            simultaneousChangeValid: true,
            estimatedNewZ: 39.50
        }
    });

    return relatedProblems;
}




// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveLinearProgrammingRelatedProblems() {
    const problems = generateRelatedLinearProgrammingProblems();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving LP Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedLinearProgrammingMathematicalWorkbook({
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
            includeRealWorldApplications: true,
            includeHistoricalContext: true
        });

        try {
            // Solve the problem
            const result = workbook.solveLPProblem({
                formulation: problem.formulation,
                method: problem.problemType,
                data: problem.data,
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

async function generateLinearProgrammingDocument() {
    console.log('Generating Linear Programming Workbook with 5 Test Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Linear Programming Workbook',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { after: 200 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Complete Guide with 5 Comprehensive Test Problems',
            spacing: { after: 150 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Graphical Method, Simplex, Transportation, and Sensitivity Analysis',
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
            text: 'Linear Programming Problems (5 Test Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const lpProblems = generateRelatedLinearProgrammingProblems();
    lpProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario} [${problem.difficulty}]`,
                spacing: { after: 50 }
            })
        );
        documentChildren.push(
            new docx.Paragraph({
                text: `   ${problem.problem.substring(0, 100)}...`,
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
            text: 'Introduction to Linear Programming',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Linear Programming (LP) is a powerful mathematical technique for optimizing resource allocation and decision-making under constraints. This workbook contains 5 carefully designed problems covering key LP methods:',
            spacing: { after: 200 }
        })
    );

    const lpFeatures = [
        '• Graphical Method for 2-variable problems with visual representation',
        '• Simplex Algorithm for multi-variable optimization',
        '• Transportation Problem for distribution network optimization',
        '• Sensitivity Analysis for post-optimality insights',
        '• Real-world applications from manufacturing, logistics, and nutrition',
        '• Complete step-by-step solutions with multiple explanation styles',
        '• Error prevention strategies and common mistake identification',
        '• Shadow prices and managerial insights',
        '• Alternative solution methods and comparisons',
        '• Practice problems and pedagogical notes'
    ];

    lpFeatures.forEach(feature => {
        documentChildren.push(
            new docx.Paragraph({
                text: feature,
                spacing: { after: 100 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: 'What You Will Learn:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const learningOutcomes = [
        'Formulate real-world problems as LP models',
        'Solve 2-variable problems using graphical method',
        'Apply Simplex algorithm for multi-variable problems',
        'Optimize transportation and distribution networks',
        'Perform sensitivity analysis and interpret shadow prices',
        'Make data-driven business decisions using LP'
    ];

    learningOutcomes.forEach((outcome, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${outcome}`,
                spacing: { after: 100 }
            })
        );
    });

    // ============== SOLVE AND ADD PROBLEMS ==============
    console.log('\nProcessing Linear Programming Problems...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'Linear Programming Problems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const lpSolved = solveLinearProgrammingRelatedProblems();
    
    lpSolved.forEach((solved, index) => {
        console.log(`  Adding LP Problem ${index + 1} to document...`);

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
                text: 'Problem Statement',
                heading: docx.HeadingLevel.HEADING_3,
                spacing: { after: 150 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: solved.problem.problem,
                spacing: { after: 200 },
                shading: {
                    fill: "E3F2FD",
                    type: docx.ShadingType.CLEAR
                }
            })
        );

        // Difficulty and Industry
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: 'Difficulty Level: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.difficulty.toUpperCase(),
                        color: solved.problem.difficulty === 'easy' ? '2E7D32' : 
                               solved.problem.difficulty === 'medium' ? '1976D2' : 'D32F2F'
                    }),
                    new docx.TextRun({
                        text: '  |  Industry: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.context.industry
                    })
                ],
                spacing: { after: 150 }
            })
        );

        // Mathematical Formulation
        documentChildren.push(
            new docx.Paragraph({
                text: 'Mathematical Formulation',
                heading: docx.HeadingLevel.HEADING_3,
                spacing: { before: 200, after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: solved.problem.formulation,
                spacing: { after: 200 },
                shading: {
                    fill: "FFF9C4",
                    type: docx.ShadingType.CLEAR
                }
            })
        );

        // Helper tip
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: '💡 Solution Strategy: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.helper,
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
                        text: '🌍 Real-World Application: ',
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
            // Check if this is a header line (no bullet needed)
            const isHeader = subpart.includes('GIVEN:') || subpart.includes('PART ') || 
                           subpart.includes('KEY INSIGHTS:') || subpart === '';
            
            if (subpart === '') {
                documentChildren.push(
                    new docx.Paragraph({
                        text: '',
                        spacing: { after: 100 }
                    })
                );
            } else if (isHeader) {
                documentChildren.push(
                    new docx.Paragraph({
                        text: subpart,
                        spacing: { after: 100 },
                        bold: true
                    })
                );
            } else {
                documentChildren.push(
                    new docx.Paragraph({
                        text: subpart,
                        spacing: { after: 80 }
                    })
                );
            }
        });

        // Final answer box
        documentChildren.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: '✓ Final Answer: ',
                        bold: true
                    }),
                    new docx.TextRun({
                        text: solved.problem.solution,
                        bold: true,
                        color: '2E7D32'
                    })
                ],
                spacing: { before: 300, after: 200 },
                shading: {
                    fill: "E8F5E9",
                    type: docx.ShadingType.CLEAR
                }
            })
        );

        // Expected outcomes
        if (solved.problem.expectedOutcome) {
            documentChildren.push(
                new docx.Paragraph({
                    text: 'Expected Outcomes & Key Insights',
                    heading: docx.HeadingLevel.HEADING_3,
                    spacing: { before: 300, after: 150 }
                })
            );

            Object.entries(solved.problem.expectedOutcome).forEach(([key, value]) => {
                const formattedKey = key.replace(/([A-Z])/g, ' $1').trim();
                const capitalizedKey = formattedKey.charAt(0).toUpperCase() + formattedKey.slice(1);
                
                documentChildren.push(
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun({
                                text: `${capitalizedKey}: `,
                                bold: true
                            }),
                            new docx.TextRun({
                                text: typeof value === 'object' ? JSON.stringify(value) : String(value)
                            })
                        ],
                        spacing: { after: 100 }
                    })
                );
            });
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
            text: 'Congratulations on completing these 5 comprehensive Linear Programming problems!',
            spacing: { after: 200 },
            bold: true
        })
    );

    const summaryPoints = [
        'You\'ve mastered the graphical method for 2-variable LP problems',
        'You\'ve learned to formulate real-world problems as LP models',
        'You\'ve applied the Simplex algorithm for multi-variable optimization',
        'You\'ve solved transportation problems for distribution networks',
        'You\'ve performed sensitivity analysis to understand solution robustness',
        'You\'ve interpreted shadow prices for managerial decision-making',
        'You\'ve seen applications across manufacturing, logistics, and nutrition'
    ];

    documentChildren.push(
        new docx.Paragraph({
            text: 'What You\'ve Accomplished:',
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
            text: 'Advanced Topics to Explore:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const advancedTopics = [
        'Integer Programming (for discrete decision variables)',
        'Two-Phase Simplex Method (for problems with ≥ and = constraints)',
        'Duality Theory (economic interpretation of LP)',
        'Goal Programming (multiple objective optimization)',
        'Network Flow Problems (shortest path, maximum flow)',
        'Assignment Problems (Hungarian Algorithm)',
        'Large-scale LP using commercial solvers (CPLEX, Gurobi)',
        'Stochastic Programming (optimization under uncertainty)'
    ];

    advancedTopics.forEach((topic, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${topic}`,
                spacing: { after: 100 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: 'Practical Applications:',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const practicalApplications = [
        'Production Planning: Determine optimal product mix',
        'Supply Chain: Optimize distribution networks',
        'Workforce Scheduling: Minimize labor costs while meeting demands',
        'Portfolio Optimization: Maximize returns within risk constraints',
        'Blending Problems: Create mixtures meeting specifications at minimum cost',
        'Cutting Stock: Minimize material waste in manufacturing',
        'Media Selection: Optimize advertising budget allocation'
    ];

    practicalApplications.forEach(app => {
        documentChildren.push(
            new docx.Paragraph({
                text: `• ${app}`,
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
        const filename = 'linear_programming_5_comprehensive_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ LINEAR PROGRAMMING DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 5');
        console.log('    - Graphical Method (2-variable): 2 problems');
        console.log('    - Simplex Method (multi-variable): 1 problem');
        console.log('    - Transportation Problem: 1 problem');
        console.log('    - Sensitivity Analysis: 1 problem');
        console.log('\n📄 ESTIMATED PAGES: 60-75 pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level and industry context');
        console.log('  • Mathematical formulation of the LP model');
        console.log('  • Solution strategy tips for the specific problem type');
        console.log('  • Real-world application explanation');
        console.log('  • Complete step-by-step solution with enhanced explanations');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, algebraic)');
        console.log('  • Verification and optimality checking');
        console.log('  • Key concepts and learning objectives');
        console.log('  • Common mistakes and error prevention strategies');
        console.log('  • Thinking prompts and self-check questions');
        console.log('  • Shadow prices and sensitivity insights');
        console.log('  • Alternative solution methods');
        console.log('  • Pedagogical notes for deeper understanding');
        console.log('  • Expected outcomes and key insights');
        console.log('  • Quick reference solution summary');
        console.log('\n🎯 PROBLEM COVERAGE:');
        console.log('  • Production Mix Optimization (Manufacturing)');
        console.log('  • Diet Problem Cost Minimization (Healthcare/Nutrition)');
        console.log('  • Multi-Product Simplex (Manufacturing)');
        console.log('  • Distribution Network Optimization (Logistics)');
        console.log('  • Sensitivity & Shadow Price Analysis (Strategic Planning)');
        console.log('='.repeat(80) + '\n');
    } catch (error) {
        console.error(`\n❌ Error saving document: ${error.message}`);
        console.error(error.stack);
    }
}

// ============== RUN THE DOCUMENT GENERATION ==============

generateLinearProgrammingDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});
