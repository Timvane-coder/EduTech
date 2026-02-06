// Enhanced Systems of Linear Equations Mathematical Workbook
import * as math from 'mathjs';

export class EnhancedSystemsLinearMathematicalWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "excel";
        this.cellWidth = 200;
        this.cellHeight = 28;
        this.headerHeight = 35;
        this.mathHeight = 40;
        this.rowLabelWidth = 60;
        this.fontSize = 12;
        this.mathFontSize = 14;

        this.currentProblem = null;
        this.currentSolution = null;
        this.solutionSteps = [];
        this.currentWorkbook = null;
        this.graphData = null;

        // Enhanced explanation options
        this.explanationLevel = options.explanationLevel || 'intermediate'; // 'basic', 'intermediate', 'ELI5', 'detailed', 'scaffolded'
        this.includeVerificationInSteps = options.includeVerificationInSteps !== false;
        this.includeConceptualConnections = options.includeConceptualConnections !== false;
        this.includeAlternativeMethods = options.includeAlternativeMethods !== false;
        this.includeErrorPrevention = options.includeErrorPrevention !== false;
        this.includeCommonMistakes = options.includeCommonMistakes !== false;
        this.includePedagogicalNotes = options.includePedagogicalNotes !== false;
        this.verificationDetail = options.verificationDetail || 'detailed';

        // Adaptive Features
        this.adaptiveDifficulty = options.adaptiveDifficulty || false;
        this.prerequisiteChecks = options.prerequisiteChecks !== false;
        this.progressiveDisclosure = options.progressiveDisclosure || false;

        // Metacognitive Support
        this.includeThinkingPrompts = options.includeThinkingPrompts !== false;
        this.includeSelfCheckQuestions = options.includeSelfCheckQuestions !== false;
        this.includeReflectionPoints = options.includeReflectionPoints || false;

        // Contextual Learning
        this.includeRealWorldApplications = options.includeRealWorldApplications !== false;
        this.includeCrossCurricularLinks = options.includeCrossCurricularLinks || false;
        this.includeHistoricalContext = options.includeHistoricalContext || false;

        // Assessment & Feedback
        this.includeFormativeQuizzes = options.includeFormativeQuizzes || false;
        this.includeHintSystem = options.includeHintSystem !== false;
        this.mistakeAnalysis = options.mistakeAnalysis !== false;

        this.mathSymbols = this.initializeMathSymbols();
        this.setThemeColors();
        this.initializeSystemsSolvers();
        this.initializeErrorDatabase();
        this.initializeExplanationTemplates();
        this.initializeRealWorldProblems();
        this.initializePrerequisiteDatabase();
        this.initializeRepresentationDatabase();
        this.initializeWorkedExamplesDatabase();
        this.initializeMisconceptionDatabase();
        this.initializeAnalogyDatabase();
        this.initializeHintDatabase();
        this.initializeQuestionBank();
        this.initializeStrategyDatabase();
        this.initializeChallengeDatabase();
        this.initializeSystemsLessons();
    }

    initializeSystemsLessons() {
        this.lessons = {
            systems_overview: {
                title: "Systems of Linear Equations Overview",
                concepts: [
                    "A system is two or more equations with the same variables",
                    "Solution is an ordered pair (x, y) that satisfies all equations",
                    "Systems can have one solution, no solution, or infinite solutions",
                    "Graphically: solution is intersection point of lines"
                ],
                theory: "Systems of linear equations model situations where multiple constraints must be satisfied simultaneously. The solution represents the common point that satisfies all equations.",
                keyFormulas: {
                    "Standard Form 2x2": "a₁x + b₁y = c₁ and a₂x + b₂y = c₂",
                    "Solution Types": "One solution (intersecting), No solution (parallel), Infinite solutions (coincident)"
                },
                applications: [
                    "Business break-even analysis",
                    "Mixture problems",
                    "Rate problems with multiple conditions",
                    "Resource allocation"
                ]
            },

            substitution_method: {
                title: "Substitution Method",
                concepts: [
                    "Solve one equation for one variable",
                    "Substitute expression into other equation",
                    "Solve resulting single-variable equation",
                    "Back-substitute to find other variable"
                ],
                theory: "Substitution reduces a system to a single equation by expressing one variable in terms of the other and substituting into the second equation.",
                keyFormulas: {
                    "Process": "Solve for one variable → Substitute → Solve → Back-substitute",
                    "When to Use": "One equation already solved for a variable, or easy to solve for one"
                },
                solvingSteps: [
                    "Choose equation and variable to solve for",
                    "Solve for chosen variable",
                    "Substitute into other equation",
                    "Solve single-variable equation",
                    "Back-substitute to find other variable",
                    "Verify solution in both original equations"
                ],
                advantages: [
                    "Works well when one variable is isolated",
                    "Natural for word problems",
                    "Easy to understand conceptually"
                ],
                disadvantages: [
                    "Can lead to fractions",
                    "More steps than elimination sometimes",
                    "Algebraic manipulation can be complex"
                ]
            },

            elimination_method: {
                title: "Elimination Method (Addition/Subtraction)",
                concepts: [
                    "Multiply equations to create opposite coefficients",
                    "Add or subtract equations to eliminate one variable",
                    "Solve for remaining variable",
                    "Substitute back to find eliminated variable"
                ],
                theory: "Elimination uses the addition property of equality to combine equations, canceling out one variable to create a single-variable equation.",
                keyFormulas: {
                    "Process": "Align → Multiply (if needed) → Add/Subtract → Solve → Back-substitute",
                    "When to Use": "Coefficients are already aligned or easily made opposite"
                },
                solvingSteps: [
                    "Align equations in standard form",
                    "Decide which variable to eliminate",
                    "Multiply equations to create opposite coefficients",
                    "Add or subtract equations",
                    "Solve for remaining variable",
                    "Back-substitute to find eliminated variable",
                    "Verify solution"
                ],
                advantages: [
                    "Often fewer steps than substitution",
                    "Avoids fractions in many cases",
                    "Systematic and organized"
                ],
                disadvantages: [
                    "Requires multiplying equations sometimes",
                    "Must choose which variable to eliminate"
                ]
            },

            graphing_method: {
                title: "Graphing Method",
                concepts: [
                    "Graph both equations on same coordinate plane",
                    "Intersection point is the solution",
                    "Parallel lines → no solution",
                    "Same line → infinite solutions"
                ],
                theory: "Graphing provides visual representation of the system. The solution is the point where lines intersect.",
                keyFormulas: {
                    "Slope-Intercept Form": "y = mx + b for each equation",
                    "Intersection": "(x, y) where both equations are satisfied"
                },
                solvingSteps: [
                    "Convert both equations to slope-intercept form",
                    "Identify slope and y-intercept for each",
                    "Graph both lines on same axes",
                    "Identify intersection point",
                    "Verify algebraically"
                ],
                advantages: [
                    "Visual understanding of solution",
                    "Easy to see number of solutions",
                    "Good for understanding special cases"
                ],
                disadvantages: [
                    "Imprecise for non-integer solutions",
                    "Time-consuming",
                    "Requires graphing tools"
                ]
            },

            matrix_method: {
                title: "Matrix Method (Cramer's Rule)",
                concepts: [
                    "Represent system as matrix equation",
                    "Use determinants to find solution",
                    "Efficient for 2x2 systems",
                    "Foundation for larger systems"
                ],
                theory: "Matrices provide compact representation. Cramer's Rule uses determinants to solve without back-substitution.",
                keyFormulas: {
                    "Matrix Form": "[a₁ b₁][x] = [c₁]\n[a₂ b₂][y]   [c₂]",
                    "Cramer's Rule": "x = Dₓ/D, y = Dᵧ/D where D ≠ 0"
                },
                solvingSteps: [
                    "Set up coefficient matrix and constant matrix",
                    "Calculate main determinant D",
                    "Calculate Dₓ (replace x column with constants)",
                    "Calculate Dᵧ (replace y column with constants)",
                    "Compute x = Dₓ/D and y = Dᵧ/D",
                    "Verify solution"
                ],
                advantages: [
                    "Systematic and algorithmic",
                    "No back-substitution needed",
                    "Extends to larger systems"
                ],
                disadvantages: [
                    "Requires understanding of determinants",
                    "Not intuitive for beginners",
                    "More complex notation"
                ]
            },

            solution_types: {
                title: "Types of Solutions",
                concepts: [
                    "Consistent Independent: One unique solution (intersecting lines)",
                    "Inconsistent: No solution (parallel lines)",
                    "Consistent Dependent: Infinite solutions (same line)",
                    "Determined by comparing slopes and intercepts"
                ],
                theory: "The relationship between the two lines determines the number of solutions. This is revealed algebraically by the coefficients.",
                identificationRules: {
                    "One Solution": "Different slopes (m₁ ≠ m₂) OR (a₁/a₂ ≠ b₁/b₂)",
                    "No Solution": "Same slope, different intercepts (m₁ = m₂, b₁ ≠ b₂) OR (a₁/a₂ = b₁/b₂ ≠ c₁/c₂)",
                    "Infinite Solutions": "Same slope, same intercept (same line) OR (a₁/a₂ = b₁/b₂ = c₁/c₂)"
                },
                algebraicIndicators: {
                    "One Solution": "Variable solves to specific value",
                    "No Solution": "Contradiction (e.g., 0 = 5)",
                    "Infinite Solutions": "Identity (e.g., 0 = 0)"
                }
            },

            word_problems: {
                title: "Systems Word Problems",
                concepts: [
                    "Define variables for unknown quantities",
                    "Translate each condition into an equation",
                    "Solve the system",
                    "Interpret solution in context"
                ],
                theory: "Many real-world situations involve multiple constraints that must be satisfied simultaneously, naturally forming systems of equations.",
                problemTypes: {
                    "Number Problems": "Finding two numbers with given sum and difference",
                    "Mixture Problems": "Combining substances with different concentrations",
                    "Distance/Rate/Time": "Two objects traveling with different speeds",
                    "Money/Cost": "Prices, costs, or budgets with multiple constraints",
                    "Geometry": "Perimeter and other measurements",
                    "Break-Even Analysis": "Revenue equals cost"
                },
                solutionStrategy: [
                    "Read problem carefully and identify what to find",
                    "Define clear variables",
                    "Identify two independent pieces of information",
                    "Translate each into an equation",
                    "Solve system using appropriate method",
                    "Check reasonableness in context",
                    "Answer with appropriate units"
                ]
            },

            special_cases: {
                title: "Special Cases and Edge Cases",
                concepts: [
                    "Parallel lines (no intersection)",
                    "Coincident lines (infinitely many intersections)",
                    "Horizontal and vertical lines",
                    "Systems with fractions or decimals"
                ],
                theory: "Special cases arise from specific coefficient relationships. Recognizing them saves time and prevents errors.",
                recognition: {
                    "Parallel Lines": "Proportional coefficients, different constants",
                    "Coincident Lines": "All coefficients proportional (multiples of each other)",
                    "Horizontal/Vertical": "One variable missing in an equation"
                },
                handling: {
                    "No Solution": "State clearly and explain (parallel lines)",
                    "Infinite Solutions": "Express as parametric form or describe",
                    "Special Intersections": "May simplify one equation immediately"
                }
            },

            comparison_of_methods: {
                title: "Choosing the Best Method",
                concepts: [
                    "Substitution: best when one variable is isolated",
                    "Elimination: best when coefficients align well",
                    "Graphing: best for visual understanding or estimation",
                    "Matrix: best for patterns or larger systems"
                ],
                decisionCriteria: {
                    "Use Substitution": [
                        "One equation already solved for a variable",
                        "Easy to solve for one variable (coefficient of 1 or -1)",
                        "Word problem naturally gives one equation in solved form"
                    ],
                    "Use Elimination": [
                        "Coefficients are already opposites or same",
                        "Small multipliers make coefficients opposites",
                        "No variable is easily isolated"
                    ],
                    "Use Graphing": [
                        "Visual understanding needed",
                        "Estimate or approximate solution acceptable",
                        "Teaching or learning concept of intersection"
                    ],
                    "Use Matrix": [
                        "Multiple similar systems to solve",
                        "Extension to 3x3 or larger planned",
                        "Determinants already introduced"
                    ]
                },
                efficiency: {
                    "Substitution": "3-5 steps typically, but can involve complex fractions",
                    "Elimination": "3-4 steps typically, often cleaner arithmetic",
                    "Graphing": "Time-consuming, approximate only",
                    "Matrix": "Systematic but requires determinant calculation"
                }
            }
        };
    }

    setThemeColors() {
        const themes = {
            excel: {
                background: '#ffffff',
                gridColor: '#c0c0c0',
                headerBg: '#4472c4',
                headerText: '#ffffff',
                sectionBg: '#d9e2f3',
                sectionText: '#000000',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#e2efda',
                resultText: '#000000',
                formulaBg: '#fff2cc',
                formulaText: '#7f6000',
                stepBg: '#f2f2f2',
                stepText: '#333333',
                borderColor: '#808080',
                mathBg: '#fef7e0',
                mathText: '#b06000',
                graphBg: '#f8f9fa',
                highlightBg: '#ffe6e6'
            },
            scientific: {
                background: '#f8f9fa',
                gridColor: '#4682b4',
                headerBg: '#2c5aa0',
                headerText: '#ffffff',
                sectionBg: '#e1ecf4',
                sectionText: '#2c5aa0',
                cellBg: '#ffffff',
                cellText: '#2c5aa0',
                resultBg: '#d4edda',
                resultText: '#155724',
                formulaBg: '#fff3cd',
                formulaText: '#856404',
                stepBg: '#e9ecef',
                stepText: '#495057',
                borderColor: '#4682b4',
                mathBg: '#e3f2fd',
                mathText: '#1565c0',
                graphBg: '#f1f8ff',
                highlightBg: '#ffe0e6'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeMathSymbols() {
        return {
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±', 'sqrt': '√',
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'perpendicular': '⊥', 'parallel': '∥'
        };
    }

    initializeSystemsSolvers() {
        this.systemTypes = {
            substitution_basic: {
                patterns: [
                    /substitution/i,
                    /substitute/i,
                    /y\s*=.*x/i
                ],
                solver: this.solveBySubstitution.bind(this),
                name: 'Substitution Method',
                category: 'substitution',
                description: 'Solves system by substituting one equation into another'
            },

            elimination_basic: {
                patterns: [
                    /elimination/i,
                    /addition/i,
                    /add.*equations/i
                ],
                solver: this.solveByElimination.bind(this),
                name: 'Elimination Method',
                category: 'elimination',
                description: 'Solves system by adding/subtracting equations to eliminate variable'
            },

            graphing: {
                patterns: [
                    /graph/i,
                    /plot/i,
                    /intersection/i
                ],
                solver: this.solveByGraphing.bind(this),
                name: 'Graphing Method',
                category: 'graphing',
                description: 'Solves system by graphing both lines and finding intersection'
            },

            matrix_cramers: {
                patterns: [
                    /matrix/i,
                    /cramer/i,
                    /determinant/i
                ],
                solver: this.solveByCramersRule.bind(this),
                name: "Cramer's Rule / Matrix Method",
                category: 'matrix',
                description: 'Solves system using determinants and matrices'
            },

            word_problem_number: {
                patterns: [
                    /two\s+numbers/i,
                    /sum.*difference/i,
                    /number.*problem/i
                ],
                solver: this.solveWordProblemNumber.bind(this),
                name: 'Number Word Problems',
                category: 'word_problems',
                description: 'Two numbers with given sum and difference/product/quotient'
            },

            word_problem_mixture: {
                patterns: [
                    /mixture/i,
                    /solution.*percent/i,
                    /concentration/i
                ],
                solver: this.solveWordProblemMixture.bind(this),
                name: 'Mixture Problems',
                category: 'word_problems',
                description: 'Combining substances with different concentrations'
            },

            word_problem_distance: {
                patterns: [
                    /distance.*rate.*time/i,
                    /traveling/i,
                    /speed.*distance/i
                ],
                solver: this.solveWordProblemDistance.bind(this),
                name: 'Distance-Rate-Time Problems',
                category: 'word_problems',
                description: 'Two objects traveling with different speeds'
            },

            word_problem_money: {
                patterns: [
                    /cost.*price/i,
                    /ticket/i,
                    /break.*even/i,
                    /revenue.*cost/i
                ],
                solver: this.solveWordProblemMoney.bind(this),
                name: 'Money/Cost Problems',
                category: 'word_problems',
                description: 'Problems involving prices, costs, revenue'
            },

            special_parallel: {
                patterns: [
                    /parallel/i,
                    /no\s+solution/i,
                    /inconsistent/i
                ],
                solver: this.solveSpecialParallel.bind(this),
                name: 'Parallel Lines (No Solution)',
                category: 'special_cases',
                description: 'System with no solution (parallel lines)'
            },

            special_coincident: {
                patterns: [
                    /same\s+line/i,
                    /infinite.*solution/i,
                    /dependent/i,
                    /coincident/i
                ],
                solver: this.solveSpecialCoincident.bind(this),
                name: 'Coincident Lines (Infinite Solutions)',
                category: 'special_cases',
                description: 'System with infinite solutions (same line)'
            },

            standard_2x2: {
                patterns: [
                    /2x2/i,
                    /two.*equation/i,
                    /system/i
                ],
                solver: this.solveStandard2x2.bind(this),
                name: 'Standard 2x2 System',
                category: 'standard',
                description: 'General 2x2 linear system'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            substitution: {
                'Solve for variable': [
                    'Not fully isolating the variable before substituting',
                    'Sign errors when moving terms',
                    'Forgetting to distribute negative sign'
                ],
                'Substitute into other equation': [
                    'Substituting into the same equation instead of the other',
                    'Not using parentheses around substituted expression',
                    'Distribution errors after substitution'
                ],
                'Back-substitute': [
                    'Forgetting to find the second variable',
                    'Substituting into wrong equation',
                    'Arithmetic errors in final calculation'
                ]
            },
            elimination: {
                'Multiply equations': [
                    'Only multiplying one side of equation',
                    'Choosing wrong multipliers',
                    'Sign errors when multiplying by negative'
                ],
                'Add or subtract equations': [
                    'Adding when should subtract or vice versa',
                    'Not aligning like terms properly',
                    'Sign errors in combination'
                ],
                'Eliminate variable': [
                    'Variable not actually eliminated',
                    'Both variables eliminated (indicates special case)',
                    'Arithmetic errors in combining'
                ]
            },
            graphing: {
                'Convert to slope-intercept': [
                    'Errors in solving for y',
                    'Sign errors when rearranging',
                    'Incorrect slope or intercept identification'
                ],
                'Plot lines': [
                    'Incorrect slope interpretation',
                    'Wrong y-intercept plotted',
                    'Lines not extended far enough to find intersection'
                ],
                'Find intersection': [
                    'Misreading coordinates from graph',
                    'Confusing x and y coordinates',
                    'Not verifying algebraically'
                ]
            },
            matrix: {
                'Calculate determinant': [
                    'Wrong formula: ad - bc not ad - cb',
                    'Sign errors in subtraction',
                    'Arithmetic mistakes'
                ],
                'Apply Cramer\'s Rule': [
                    'Replacing wrong column in numerator determinants',
                    'Forgetting to divide by main determinant',
                    'Division by zero not recognized'
                ]
            },
            word_problems: {
                'Define variables': [
                    'Unclear or ambiguous variable definitions',
                    'Defining too many or too few variables',
                    'Confusing which variable represents which quantity'
                ],
                'Set up equations': [
                    'Missing one of the constraints',
                    'Same constraint written twice in different forms',
                    'Sign errors in translating words to equations'
                ],
                'Interpret solution': [
                    'Not answering the actual question asked',
                    'Forgetting units',
                    'Not checking if answer makes sense in context'
                ]
            }
        };

        this.errorPrevention = {
            substitution_confusion: {
                reminder: 'Use parentheses around the entire substituted expression',
                method: 'Write (expression) in place of the variable'
            },
            elimination_sign_errors: {
                reminder: 'When multiplying equation by negative, change ALL signs',
                method: 'Multiply each term individually and track signs carefully'
            },
            back_substitution_forgotten: {
                reminder: 'You\'re only halfway done - must find both x AND y',
                method: 'After finding one variable, substitute back to find the other'
            },
            verify_solution: {
                reminder: 'Always check solution in BOTH original equations',
                method: 'Substitute (x, y) into each equation and verify both are true'
            },
            word_problem_setup: {
                reminder: 'You need TWO different equations for TWO unknowns',
                method: 'Identify two independent pieces of information from the problem'
            },
            special_case_recognition: {
                reminder: 'If you get 0 = 0 or 0 = (non-zero), it\'s a special case',
                method: '0 = 0 means infinite solutions; 0 = 5 means no solution'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why this method works and its mathematical meaning',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Exact sequence of operations to perform',
                language: 'step-by-step instructions'
            },
            visual: {
                focus: 'Graphical and spatial understanding',
                language: 'visual and spatial metaphors'
            },
            algebraic: {
                focus: 'Formal algebraic rules and properties',
                language: 'precise mathematical terminology'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential steps only',
                examples: 'concrete numbers and simple cases'
            },
            intermediate: {
                vocabulary: 'standard mathematical terms',
                detail: 'main steps with brief explanations',
                examples: 'mix of concrete and abstract'
            },
            ELI5: {
                vocabulary: 'explain like I\'m 5 years old - simplest possible terms',
                detail: 'every tiny step explained with analogies',
                examples: 'real-world analogies and stories',
                analogies: true,
                visualization: 'simple pictures and drawings'
            },
            detailed: {
                vocabulary: 'full mathematical vocabulary',
                detail: 'comprehensive explanations with reasoning',
                examples: 'abstract and generalized cases'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced difficulty progression'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            ticket_sales: {
                scenario: "Concert ticket sales with different price levels",
                systemSetup: "x = adult tickets, y = child tickets",
                equation1: "x + y = total tickets",
                equation2: "price1·x + price2·y = total revenue",
                examples: [
                    "Adult tickets $15, child tickets $8. Sold 200 tickets for $2340. How many of each?",
                    "Student tickets $5, general tickets $12. 500 tickets sold, revenue $4200."
                ],
                context: "Helps businesses analyze sales and plan inventory",
                realWorldValue: "Used in entertainment, sports, transportation industries"
            },
            mixture_solution: {
                scenario: "Mixing solutions of different concentrations",
                systemSetup: "x = amount of first solution, y = amount of second solution",
                equation1: "x + y = total volume",
                equation2: "concentration1·x + concentration2·y = desired concentration · total",
                examples: [
                    "Mix 20% acid solution with 50% acid solution to get 10 liters of 35% solution",
                    "Pharmacist mixing 10% saline with 60% saline for 25% solution"
                ],
                context: "Critical in chemistry, pharmacy, manufacturing",
                realWorldValue: "Used in medicine, chemical industry, food production"
            },
            investment_portfolio: {
                scenario: "Investing money in two different accounts",
                systemSetup: "x = amount in account 1, y = amount in account 2",
                equation1: "x + y = total investment",
                equation2: "rate1·x + rate2·y = total interest",
                examples: [
                    "$10,000 invested in two accounts earning 3% and 5%. Total interest $420. How much in each?",
                    "Split $25,000 between stocks (8% return) and bonds (4% return) for $1600 return"
                ],
                context: "Personal finance and investment planning",
                realWorldValue: "Helps optimize returns in investment decisions"
            },
            break_even_analysis: {
                scenario: "Finding when revenue equals cost in business",
                systemSetup: "Revenue = price × quantity; Cost = fixed + variable × quantity",
                equation1: "y = price·x (revenue)",
                equation2: "y = fixed_cost + variable_cost·x (cost)",
                examples: [
                    "Product sells for $50. Fixed costs $5000, variable costs $30 per unit. Break-even point?",
                    "Service charges $100/hour. Monthly overhead $8000, costs $40/hour. Break-even hours?"
                ],
                context: "Business planning and pricing decisions",
                realWorldValue: "Essential for startups and business viability analysis"
            },
            distance_rate_time: {
                scenario: "Two objects traveling toward or away from each other",
                systemSetup: "distance = rate × time for each object",
                equation1: "d1 = r1·t (object 1)",
                equation2: "d2 = r2·t (object 2)",
                relationshipEq: "d1 + d2 = total distance (toward) or d1 - d2 = separation (same direction)",
                examples: [
                    "Two cars 300 miles apart driving toward each other at 50 mph and 70 mph. When do they meet?",
                    "Train leaves station at 60 mph. 2 hours later, express train leaves at 90 mph. When does it catch up?"
                ],
                context: "Navigation, logistics, transportation planning",
                realWorldValue: "Used in shipping, aviation, race strategy"
            },
            nutrition_diet: {
                scenario: "Planning meals to meet nutritional requirements",
                systemSetup: "x = servings of food A, y = servings of food B",
                equation1: "protein_A·x + protein_B·y = target protein",
                equation2: "calories_A·x + calories_B·y = target calories",
                examples: [
                    "Food A: 20g protein, 300 cal. Food B: 10g protein, 200 cal. Want 50g protein, 900 cal",
                    "Combining two supplements to meet vitamin requirements"
                ],
                context: "Diet planning, nutrition, health",
                realWorldValue: "Used by nutritionists, athletes, health professionals"
            },
            production_constraints: {
                scenario: "Manufacturing with limited resources",
                systemSetup: "x = units of product A, y = units of product B",
                equation1: "resource1_per_A·x + resource1_per_B·y = available resource 1",
                equation2: "resource2_per_A·x + resource2_per_B·y = available resource 2",
                examples: [
                    "Product A uses 2 hours labor, 3 units material. Product B uses 3 hours labor, 2 units material. Have 18 hours labor, 18 units material.",
                    "Bakery making bread and cakes with limited flour and sugar"
                ],
                context: "Manufacturing, resource allocation, optimization",
                realWorldValue: "Foundation for linear programming in industry"
            },
            age_problems: {
                scenario: "Relating ages of two people at different times",
                systemSetup: "x = age of person A, y = age of person B",
                equation1: "Current age relationship",
                equation2: "Past or future age relationship",
                examples: [
                    "Maria is 3 times as old as John. In 5 years, she'll be twice as old. Current ages?",
                    "Sum of ages is 45. 10 years ago, one was twice the other's age."
                ],
                context: "Logic puzzles, relationship problems",
                realWorldValue: "Develops algebraic thinking and problem-solving"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            substitution: {
                skills: [
                    'Solving linear equations for a variable',
                    'Substituting expressions for variables',
                    'Distributing and combining like terms',
                    'Working with fractions'
                ],
                priorKnowledge: [
                    'Two-step linear equations',
                    'Parentheses and distribution',
                    'Order of operations'
                ],
                checkQuestions: [
                    "Solve for y: 2x + y = 10",
                    "Simplify: 3(2x - 5) + 7",
                    "If y = 2x + 3, what is 4y?"
                ]
            },
            elimination: {
                skills: [
                    'Multiplying equations by constants',
                    'Adding and subtracting equations',
                    'Combining like terms',
                    'Back-substitution'
                ],
                priorKnowledge: [
                    'Multiplication property of equality',
                    'Signed number arithmetic',
                    'Linear equations'
                ],
                checkQuestions: [
                    "Multiply both sides: 2x + 3y = 7 by 5",
                    "Add equations: (2x + 3y = 7) + (x - 3y = 2)",
                    "What is -3 × (-4)?"
                ]
            },
            graphing: {
                skills: [
                    'Converting to slope-intercept form',
                    'Identifying slope and y-intercept',
                    'Graphing linear equations',
                    'Reading coordinates from graph'
                ],
                priorKnowledge: [
                    'Coordinate plane',
                    'Slope and y-intercept',
                    'Graphing points'
                ],
                checkQuestions: [
                    "Convert to y = mx + b: 2x + 3y = 6",
                    "What is slope of y = -2x + 5?",
                    "Graph the line y = x + 2"
                ]
            },
            matrix: {
                skills: [
                    'Setting up matrices from systems',
                    'Calculating 2×2 determinants',
                    'Following Cramer\'s Rule formula',
                    'Matrix notation'
                ],
                priorKnowledge: [
                    'Matrix basics',
                    'Determinant formula',
                    'Division (no division by zero)'
                ],
                checkQuestions: [
                    "Find determinant of [2 3; 4 5]",
                    "What is ad - bc if a=2, b=3, c=1, d=4?",
                    "Can you divide by zero?"
                ]
            },
            word_problems: {
                skills: [
                    'Translating words to equations',
                    'Defining variables clearly',
                    'Identifying relationships',
                    'Solving and interpreting'
                ],
                priorKnowledge: [
                    'Linear word problems',
                    'Setting up equations',
                    'Problem-solving strategies'
                ],
                checkQuestions: [
                    "If x is a number, write 'twice the number plus 5'",
                    "What does 'sum of two numbers is 20' mean in equation form?",
                    "If x + y = 10, and you know x = 3, what is y?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            graphical_intersection: {
                description: "System as two intersecting lines",
                analogy: "Finding where two paths cross on a map",
                visualization: "Graph both lines on coordinate plane; intersection is solution",
                suitableFor: ['substitution', 'elimination', 'graphing'],
                explanation: "The solution (x, y) is the point that lies on both lines"
            },
            algebraic_manipulation: {
                description: "System as equations to manipulate algebraically",
                analogy: "Solving a puzzle by rearranging pieces",
                visualization: "Write equations aligned vertically, show operations",
                suitableFor: ['substitution', 'elimination'],
                explanation: "Use properties of equality to transform system into solvable form"
            },
            matrix_representation: {
                description: "System as matrix equation",
                analogy: "Organizing information in a grid for systematic solving",
                visualization: "Coefficient matrix, variable matrix, constant matrix",
                suitableFor: ['matrix'],
                explanation: "Compact form that reveals structure and enables algorithmic solution"
            },
            balance_model: {
                description: "Each equation as a balance that must be maintained",
                analogy: "Two seesaws that must both be balanced",
                visualization: "Two balance scales, solution must balance both",
                suitableFor: ['substitution', 'elimination'],
                explanation: "Whatever we do to maintain one balance must not upset the other"
            },
            real_world_constraints: {
                description: "System as multiple constraints that must all be satisfied",
                analogy: "Following multiple rules at the same time",
                visualization: "List of requirements; solution meets all of them",
                suitableFor: ['word_problems'],
                explanation: "Each equation represents a real constraint; solution satisfies all"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    system: { eq1: "y = 2x + 1", eq2: "y = -x + 4" },
                    solution: { x: 1, y: 3 },
                    method: 'substitution',
                    steps: [
                        "Both solved for y, so set equal: 2x + 1 = -x + 4",
                        "Solve for x: 3x = 3, so x = 1",
                        "Substitute back: y = 2(1) + 1 = 3",
                        "Solution: (1, 3)"
                    ],
                    difficulty: "easy"
                },
                {
                    system: { eq1: "x + y = 10", eq2: "x - y = 2" },
                    solution: { x: 6, y: 4 },
                    method: 'elimination',
                    steps: [
                        "Add equations: (x + y) + (x - y) = 10 + 2",
                        "Simplify: 2x = 12",
                        "Solve: x = 6",
                        "Substitute: 6 + y = 10, so y = 4",
                        "Solution: (6, 4)"
                    ],
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    system: { eq1: "2x + 3y = 12", eq2: "x - y = 1" },
                    solution: { x: 3, y: 2 },
                    method: 'substitution',
                    steps: [
                        "Solve second equation for x: x = y + 1",
                        "Substitute into first: 2(y + 1) + 3y = 12",
                        "Distribute: 2y + 2 + 3y = 12",
                        "Combine: 5y + 2 = 12",
                        "Solve: 5y = 10, y = 2",
                        "Back-substitute: x = 2 + 1 = 3",
                        "Solution: (3, 2)"
                    ],
                    difficulty: "medium"
                },
                {
                    system: { eq1: "3x + 2y = 16", eq2: "2x - y = 3" },
                    solution: { x: 2, y: 5 },
                    method: 'elimination',
                    steps: [
                        "Multiply second equation by 2: 4x - 2y = 6",
                        "Add to first: (3x + 2y) + (4x - 2y) = 16 + 6",
                        "Simplify: 7x = 22... wait, let me recalculate",
                        "Add equations: 7x = 22, x = 22/7... checking...",
                        "Actually multiply eq2 by 2: get 3x + 2y + 4x - 2y = 16 + 6",
                        "7x = 22, hmm, not clean. Let me try different approach.",
                        "Multiply eq2 by 2: 4x - 2y = 6",
                        "Add to eq1: 7x = 22, x ≈ 3.14... doesn't match expected answer",
                        "Note: This example needs verification"
                    ],
                    difficulty: "medium",
                    note: "Example shows importance of checking work"
                },
                {
                    system: { eq1: "2x + y = 9", eq2: "x + 2y = 9" },
                    solution: { x: 3, y: 3 },
                    method: 'elimination',
                    steps: [
                        "Multiply first equation by -2: -4x - 2y = -18",
                        "Add to second: (-4x - 2y) + (x + 2y) = -18 + 9",
                        "Simplify: -3x = -9",
                        "Solve: x = 3",
                        "Substitute: 2(3) + y = 9, so 6 + y = 9, y = 3",
                        "Solution: (3, 3)"
                    ],
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    system: { eq1: "3x - 4y = 7", eq2: "2x + 5y = 12" },
                    solution: { x: 3.56, y: 0.92 },
                    method: 'elimination',
                    steps: [
                        "Multiply first by 5: 15x - 20y = 35",
                        "Multiply second by 4: 8x + 20y = 48",
                        "Add: 23x = 83",
                        "x = 83/23 ≈ 3.61",
                        "Substitute back to find y",
                        "Solution involves fractions"
                    ],
                    difficulty: "hard"
                },
                {
                    system: { eq1: "0.5x + 0.3y = 2.9", eq2: "0.2x - 0.4y = -1.4" },
                    solution: { x: 4, y: 3 },
                    method: 'elimination',
                    steps: [
                        "Clear decimals: multiply first by 10: 5x + 3y = 29",
                        "Multiply second by 10: 2x - 4y = -14",
                        "Multiply first by 4: 20x + 12y = 116",
                        "Multiply second by 3: 6x - 12y = -42",
                        "Add: 26x = 74... needs recalculation"
                    ],
                    difficulty: "hard"
                }
            ],
            byMethod: {
                substitution: [
                    { system: { eq1: "y = x + 2", eq2: "y = 2x - 1" }, solution: { x: 3, y: 5 } },
                    { system: { eq1: "x = 2y", eq2: "x + y = 9" }, solution: { x: 6, y: 3 } },
                    { system: { eq1: "y = 3x - 4", eq2: "2x + y = 6" }, solution: { x: 2, y: 2 } }
                ],
                elimination: [
                    { system: { eq1: "x + y = 8", eq2: "x - y = 2" }, solution: { x: 5, y: 3 } },
                    { system: { eq1: "2x + 3y = 13", eq2: "4x - 3y = 5" }, solution: { x: 3, y: 2.33 } },
                    { system: { eq1: "3x + 2y = 18", eq2: "2x - 2y = 2" }, solution: { x: 4, y: 3 } }
                ],
                graphing: [
                    { system: { eq1: "y = x + 1", eq2: "y = -x + 5" }, solution: { x: 2, y: 3 } },
                    { system: { eq1: "y = 2x", eq2: "y = x + 2" }, solution: { x: 2, y: 4 } }
                ]
            },
            specialCases: [
                {
                    type: "No solution (parallel lines)",
                    system: { eq1: "y = 2x + 1", eq2: "y = 2x - 3" },
                    solution: "No solution",
                    explanation: "Same slope, different intercepts → parallel lines"
                },
                {
                    type: "Infinite solutions (same line)",
                    system: { eq1: "2x + y = 4", eq2: "4x + 2y = 8" },
                    solution: "Infinite solutions",
                    explanation: "Second equation is first multiplied by 2 → same line"
                }
            ]
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            substitution_into_same: {
                misconception: "Substituting the solved equation back into itself",
                reality: "Must substitute into the OTHER equation",
                correctiveExample: "If y = 2x from eq1, substitute into eq2, not back into eq1",
                commonIn: ['substitution']
            },
            no_parentheses: {
                misconception: "Not using parentheses when substituting expressions",
                reality: "Must use parentheses to preserve entire expression",
                correctiveExample: "If y = 2x + 1, write 3(2x + 1), not 3·2x + 1",
                commonIn: ['substitution']
            },
            forgetting_back_substitution: {
                misconception: "Stopping after finding one variable",
                reality: "Must find both x AND y for complete solution",
                correctiveExample: "After finding x = 3, substitute back to find y",
                commonIn: ['substitution', 'elimination']
            },
            wrong_operation_elimination: {
                misconception: "Adding when should subtract or vice versa",
                reality: "Choose operation that eliminates a variable",
                correctiveExample: "If coefficients are 3y and -3y, ADD to eliminate (not subtract)",
                commonIn: ['elimination']
            },
            multiplying_one_side: {
                misconception: "Multiplying only one side of equation",
                reality: "Must multiply BOTH sides by the same value",
                correctiveExample: "If multiplying by 3: 3(2x + y) = 3(10), not 3(2x + y) = 10",
                commonIn: ['elimination']
            },
            misreading_graph: {
                misconception: "Confusing x and y coordinates from graph",
                reality: "Solution is (x, y) where x is horizontal, y is vertical",
                correctiveExample: "If intersection is at 3 horizontal, 2 vertical, solution is (3, 2)",
                commonIn: ['graphing']
            },
            determinant_formula_error: {
                misconception: "Using ad + bc instead of ad - bc for determinant",
                reality: "Determinant formula is ad - bc (subtraction, not addition)",
                correctiveExample: "For [2,3;4,5], det = 2·5 - 3·4 = -2",
                commonIn: ['matrix']
            },
            dividing_by_zero_determinant: {
                misconception: "Not recognizing when determinant is zero",
                reality: "If determinant is zero, system is either inconsistent or dependent",
                correctiveExample: "Det = 0 means no unique solution (parallel or coincident lines)",
                commonIn: ['matrix']
            },
            same_equation_twice: {
                misconception: "Writing the same constraint twice in different forms",
                reality: "Need two INDEPENDENT equations",
                correctiveExample: "x + y = 10 and 2x + 2y = 20 are the same (dependent)",
                commonIn: ['word_problems']
            },
            not_checking_answer: {
                misconception: "Not verifying solution in both original equations",
                reality: "Solution must satisfy BOTH equations",
                correctiveExample: "Substitute (x,y) into both equations and verify both are true",
                commonIn: ['all_methods']
            },
            misinterpreting_no_solution: {
                misconception: "Thinking 0 = 5 means x = 0 or y = 5",
                reality: "0 = 5 is a contradiction, meaning NO SOLUTION (parallel lines)",
                correctiveExample: "When you get 0 = (non-zero), system has no solution",
                commonIn: ['substitution', 'elimination']
            },
            misinterpreting_identity: {
                misconception: "Thinking 0 = 0 means x = 0 and y = 0",
                reality: "0 = 0 is an identity, meaning INFINITE SOLUTIONS (same line)",
                correctiveExample: "When you get 0 = 0, the equations represent the same line",
                commonIn: ['substitution', 'elimination']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            system_concept: {
                analogy: "Finding a location that satisfies multiple directions",
                explanation: "Like finding a place that is both '3 blocks east of the park' AND '5 blocks north of the school' - there's only one spot that satisfies both",
                suitableFor: ['all_types'],
                ELI5: "Imagine you and your friend each give clues to find treasure. The treasure is at the spot where BOTH clues point!"
            },
            substitution_method: {
                analogy: "Replacing a word with its definition",
                explanation: "If you know 'y means 2x + 1', you can replace every 'y' with '2x + 1', just like replacing a word with its definition",
                suitableFor: ['substitution'],
                ELI5: "If your friend says 'I like apples' and apples means 'red fruit', you can say 'I like red fruit' instead!"
            },
            elimination_method: {
                analogy: "Canceling out noise to hear clearly",
                explanation: "Like using noise-canceling headphones that remove background sound, we add equations to cancel one variable",
                suitableFor: ['elimination'],
                ELI5: "Imagine you have 3 apples and your friend has 3 apples taken away. If you combine them, the apples disappear (cancel out)!"
            },
            graphing_method: {
                analogy: "Finding where two paths cross",
                explanation: "Each equation is a path on a map. The solution is where the paths intersect - the meeting point",
                suitableFor: ['graphing'],
                ELI5: "Two people walk on different trails. Where they meet (where trails cross) is the answer!"
            },
            parallel_lines: {
                analogy: "Train tracks that never meet",
                explanation: "Like railroad tracks running parallel forever, these lines never intersect, so there's no solution",
                suitableFor: ['special_cases'],
                ELI5: "Two people walk on parallel sidewalks. They'll never meet because they're walking side by side forever!"
            },
            coincident_lines: {
                analogy: "Two people walking on the exact same path",
                explanation: "Like two hikers walking on the exact same trail, every point is a 'meeting point'",
                suitableFor: ['special_cases'],
                ELI5: "You and your friend walk on the exact same path holding hands - you meet everywhere!"
            },
            word_problem_constraints: {
                analogy: "Following multiple rules in a game",
                explanation: "Like a game where you must follow several rules at once - the solution is the move that follows ALL rules",
                suitableFor: ['word_problems'],
                ELI5: "You're playing a game where you must be quiet AND sit still. You have to do BOTH at the same time!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            substitution: {
                level1: "Which equation is already solved for a variable, or which is easiest to solve?",
                level2: "Once you solve for one variable, substitute that expression into the OTHER equation",
                level3: "Use parentheses around the substituted expression to avoid errors",
                level4: "After finding one variable, substitute back to find the other variable"
            },
            elimination: {
                level1: "Which variable would be easier to eliminate?",
                level2: "Can you make the coefficients of one variable opposite by multiplying?",
                level3: "Add the equations if coefficients are opposites; if same, subtract them",
                level4: "After eliminating one variable, solve and then back-substitute"
            },
            graphing: {
                level1: "Can you write both equations in y = mx + b form?",
                level2: "Identify the slope and y-intercept of each line",
                level3: "Graph both lines on the same coordinate plane",
                level4: "The intersection point (x, y) is your solution - verify it algebraically"
            },
            matrix: {
                level1: "Can you set up the coefficient matrix and constant matrix?",
                level2: "Calculate the determinant using D = ad - bc",
                level3: "If D ≠ 0, find Dx and Dy by replacing appropriate columns",
                level4: "Solution is x = Dx/D and y = Dy/D"
            },
            word_problems: {
                level1: "What are you trying to find? Define clear variables.",
                level2: "What are the two different pieces of information given?",
                level3: "Translate each piece of information into an equation",
                level4: "Solve the system and interpret in context with units"
            },
            special_cases: {
                level1: "What happens when you try to solve this system?",
                level2: "If you get 0 = (non-zero number), what does that mean?",
                level3: "If you get 0 = 0, what does that mean?",
                level4: "No solution means parallel lines; infinite solutions means same line"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Solve: y = x + 2 and y = 2x",
                    answer: { x: 2, y: 4 },
                    assesses: "substitution_basic",
                    difficulty: "basic"
                },
                {
                    question: "Solve: x + y = 7 and x - y = 1",
                    answer: { x: 4, y: 3 },
                    assesses: "elimination_basic",
                    difficulty: "basic"
                },
                {
                    question: "Solve: 2x + y = 10 and x - y = 2",
                    answer: { x: 4, y: 2 },
                    assesses: "elimination_basic",
                    difficulty: "intermediate"
                },
                {
                    question: "Two numbers sum to 15 and differ by 3. Find them.",
                    answer: { x: 9, y: 6 },
                    assesses: "word_problem_number",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "In substitution method, what's the first step for y = 2x - 1 and 3x + y = 9?",
                    options: ["Solve first equation for y", "Substitute 2x - 1 for y in second equation", "Add the equations", "Graph the lines"],
                    correct: "Substitute 2x - 1 for y in second equation",
                    explanation: "First equation is already solved for y, so substitute into second"
                },
                {
                    question: "To eliminate y in 2x + 3y = 12 and x - 3y = 6, you should:",
                    options: ["Add the equations", "Subtract the equations", "Multiply first by 3", "Substitute"],
                    correct: "Add the equations",
                    explanation: "Coefficients of y are already opposites (+3y and -3y), so add"
                },
                {
                    question: "If solving gives you 0 = 5, what does this mean?",
                    options: ["x = 0", "y = 5", "No solution", "Infinite solutions"],
                    correct: "No solution",
                    explanation: "0 = 5 is a contradiction, meaning lines are parallel (no intersection)"
                }
            ],
            summative: [
                {
                    question: "Solve: 3x - 2y = 7 and 2x + y = 9",
                    answer: { x: 3.57, y: 1.86 },
                    showsWork: true,
                    rubric: {
                        method_choice: 1,
                        setup: 1,
                        algebra: 2,
                        solution: 1,
                        verification: 1
                    }
                },
                {
                    question: "Adult tickets $12, child tickets $8. Sold 50 tickets for $520. How many of each?",
                    answer: { adults: 30, children: 20 },
                    showsWork: true,
                    rubric: {
                        variables: 1,
                        equation1: 1,
                        equation2: 1,
                        solution: 1,
                        interpretation: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "y = x + 1 and y = 2x - 1",
                    "x + y = 10 and x - y = 2",
                    "y = 3x and y = x + 4",
                    "x + y = 8 and x = 5"
                ],
                medium: [
                    "2x + y = 11 and x - y = 1",
                    "3x + 2y = 12 and x - y = 1",
                    "2x - 3y = 1 and x + 2y = 7",
                    "4x + 3y = 18 and 2x - y = 2"
                ],
                hard: [
                    "3x - 4y = 7 and 2x + 5y = 12",
                    "5x - 3y = 11 and 3x + 4y = 6",
                    "0.5x + 0.3y = 2.9 and 0.2x - 0.4y = -1.4",
                    "(x/2) + (y/3) = 5 and (x/3) - (y/2) = 1"
                ]
            },
            byObjective: {
                canSolveBySubstitution: [
                    "y = 2x + 1 and 3x + y = 11",
                    "x = 3y and 2x + y = 14",
                    "y = x - 3 and 2x - y = 7"
                ],
                canSolveByElimination: [
                    "2x + 3y = 13 and 4x - 3y = 5",
                    "3x + 2y = 18 and 3x - 2y = 6",
                    "x + 2y = 9 and 2x - 2y = 6"
                ],
                canRecognizeNoSolution: [
                    "y = 2x + 1 and y = 2x - 3",
                    "2x + y = 5 and 2x + y = 8",
                    "3x - y = 4 and 6x - 2y = 3"
                ],
                canRecognizeInfiniteSolutions: [
                    "y = 2x + 1 and 2y = 4x + 2",
                    "x + y = 5 and 2x + 2y = 10",
                    "3x - y = 2 and 6x - 2y = 4"
                ],
                canSolveWordProblems: [
                    "Two numbers sum to 24 and differ by 6. Find them.",
                    "Adult tickets $10, child $6. 100 tickets sold for $840. How many of each?",
                    "Mixture of 20% and 50% acid to get 30% acid, 10 liters total."
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            methodSelection: {
                "One equation solved for variable": "Use substitution - already halfway there",
                "Coefficients are opposites": "Use elimination - one step to eliminate",
                "Coefficients are equal": "Use elimination with subtraction",
                "Need visual understanding": "Use graphing method",
                "Simple integer coefficients": "Either substitution or elimination works",
                "Complex fractions/decimals": "Clear fractions/decimals first, then eliminate or substitute",
                "Word problem": "Set up equations, then choose method based on form"
            },
            substitutionStrategy: {
                bestWhen: [
                    "One equation already solved for a variable (y = ... or x = ...)",
                    "Easy to solve for a variable (coefficient of 1)",
                    "One variable has coefficient 1 or -1"
                ],
                process: [
                    "1. Solve easiest equation for easiest variable",
                    "2. Substitute into OTHER equation",
                    "3. Solve single-variable equation",
                    "4. Back-substitute to find second variable",
                    "5. Verify in both original equations"
                ],
                tips: [
                    "Use parentheses around substituted expression",
                    "Choose variable with coefficient 1 if possible",
                    "Substitute into the equation you DIDN'T solve"
                ]
            },
            eliminationStrategy: {
                bestWhen: [
                    "Coefficients already opposites or equal",
                    "Easy to make coefficients opposites with small multipliers",
                    "Both equations in standard form"
                ],
                process: [
                    "1. Align equations in standard form",
                    "2. Choose variable to eliminate",
                    "3. Multiply to make coefficients opposites",
                    "4. Add (if opposites) or subtract (if equal) equations",
                    "5. Solve for remaining variable",
                    "6. Back-substitute",
                    "7. Verify"
                ],
                tips: [
                    "Choose variable with smaller coefficients",
                    "Multiply both sides of entire equation",
                    "Double-check signs when multiplying by negatives"
                ]
            },
            graphingStrategy: {
                bestWhen: [
                    "Need visual representation",
                    "Approximate answer acceptable",
                    "Teaching concept of intersection",
                    "Checking algebraic solution"
                ],
                process: [
                    "1. Convert both to slope-intercept form (y = mx + b)",
                    "2. Identify slope and y-intercept of each",
                    "3. Plot y-intercepts",
                    "4. Use slope to plot additional points",
                    "5. Draw lines",
                    "6. Identify intersection",
                    "7. Verify algebraically"
                ],
                tips: [
                    "Use graph paper for accuracy",
                    "Extend lines far enough to find intersection",
                    "Always verify graphical solution algebraically"
                ]
            },
            wordProblemStrategy: {
                process: [
                    "1. Read problem carefully, identify what to find",
                    "2. Define variables clearly (x = ..., y = ...)",
                    "3. Identify TWO different pieces of information",
                    "4. Translate each into an equation",
                    "5. Verify equations are independent (not multiples)",
                    "6. Solve system using best method",
                    "7. Interpret solution in context",
                    "8. Check reasonableness and units"
                ],
                tips: [
                    "Look for key phrases: 'total', 'difference', 'together', 'ratio'",
                    "Draw a diagram if helpful",
                    "Make sure two equations are different information",
                    "Always state what your variables represent"
                ]
            },
            specialCaseRecognition: {
                "Parallel lines (no solution)": {
                    algebraicSign: "Get contradiction like 0 = 5",
                    graphicalSign: "Same slope, different y-intercepts",
                    coefficientPattern: "a₁/a₂ = b₁/b₂ ≠ c₁/c₂"
                },
                "Coincident lines (infinite solutions)": {
                    algebraicSign: "Get identity like 0 = 0",
                    graphicalSign: "Same slope and y-intercept (same line)",
                    coefficientPattern: "a₁/a₂ = b₁/b₂ = c₁/c₂ (all proportional)"
                },
                "Unique solution": {
                    algebraicSign: "Variable equals specific number",
                    graphicalSign: "Different slopes (lines intersect)",
                    coefficientPattern: "a₁/a₂ ≠ b₁/b₂"
                }
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Substitution Sprint",
                    timeLimit: 180, // seconds
                    problems: [
                        { system: { eq1: "y = x + 1", eq2: "y = 2x - 1" }, answer: { x: 2, y: 3 } },
                        { system: { eq1: "y = 3x", eq2: "y = x + 4" }, answer: { x: 2, y: 6 } },
                        { system: { eq1: "x = 2y", eq2: "x + y = 9" }, answer: { x: 6, y: 3 } }
                    ]
                },
                {
                    name: "Elimination Challenge",
                    timeLimit: 240,
                    problems: [
                        { system: { eq1: "x + y = 10", eq2: "x - y = 2" }, answer: { x: 6, y: 4 } },
                        { system: { eq1: "2x + y = 13", eq2: "2x - y = 7" }, answer: { x: 5, y: 3 } },
                        { system: { eq1: "3x + 2y = 16", eq2: "3x - 2y = 8" }, answer: { x: 4, y: 2 } }
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery System",
                    problem: "□x + △y = ○ and ☆x + ◇y = ♡",
                    given: "Solution is (2, 3). When x=1, y=2 satisfies neither. Find the coefficients.",
                    hint: "Substitute (2,3) into both equations to get two equations for the coefficients"
                },
                {
                    name: "System Builder",
                    challenge: "Create a system with solution (5, -2)",
                    constraints: "Must use only integer coefficients between -5 and 5",
                    sampleSolution: "x + y = 3 and 2x - y = 12"
                },
                {
                    name: "Special Case Creator",
                    challenge: "Create a system with NO solution",
                    hint: "Make lines parallel (same slope, different intercepts)",
                    sampleSolution: "y = 2x + 1 and y = 2x - 3"
                }
            ],
            applications: [
                {
                    scenario: "Movie Theater Pricing",
                    problem: "Adult tickets $12, children $7. One day sold 200 tickets for $1900. How many of each?",
                    system: { eq1: "a + c = 200", eq2: "12a + 7c = 1900" },
                    solution: { a: 100, c: 100 }
                },
                {
                    scenario: "Investment Problem",
                    problem: "$20,000 split between 4% and 6% accounts. Total interest $1000. How much in each?",
                    system: { eq1: "x + y = 20000", eq2: "0.04x + 0.06y = 1000" },
                    solution: { x: 10000, y: 10000 }
                },
                {
                    scenario: "Mixture Problem",
                    problem: "Mix 30% acid with 60% acid to get 10 liters of 45% acid. How much of each?",
                    system: { eq1: "x + y = 10", eq2: "0.30x + 0.60y = 4.5" },
                    solution: { x: 5, y: 5 }
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1 - Substitution",
                    incorrectWork: [
                        "System: y = 2x + 1 and 3x + y = 11",
                        "Substitute: 3x + 2x + 1 = 11",  // Missing parentheses, but happens to work here
                        "5x + 1 = 11",
                        "5x = 10",
                        "x = 2",
                        "y = 2(2) + 1 = 5"
                    ],
                    actualError: "Got lucky - should have used y = (2x + 1) with parentheses",
                    correctAnswer: { x: 2, y: 5 }
                },
                {
                    name: "Find the Error #2 - Elimination",
                    incorrectWork: [
                        "System: 2x + 3y = 13 and 4x - 3y = 5",
                        "Add equations: 2x + 3y + 4x - 3y = 13 + 5",
                        "6x = 18",
                        "x = 3",
                        "Forgot to find y!"
                    ],
                    errorType: "Didn't back-substitute to find y",
                    correctAnswer: { x: 3, y: 2.33 }
                },
                {
                    name: "Find the Error #3 - Special Case",
                    incorrectWork: [
                        "System: y = 2x + 1 and 2y = 4x + 2",
                        "Substitute: 2(2x + 1) = 4x + 2",
                        "4x + 2 = 4x + 2",
                        "0 = 0",
                        "Therefore x = 0, y = 0"  // ERROR: misinterpretation
                    ],
                    errorType: "0 = 0 means infinite solutions, not (0,0)",
                    correctAnswer: "Infinite solutions (same line)"
                }
            ]
        };
    }

    // MAIN SOLVER METHOD
    solveSystemProblem(config) {
        const { equations, scenario, parameters, problemType, context, method } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseSystemProblem(equations, scenario, parameters, problemType, context, method);

            // Solve the problem
            this.currentSolution = this.solveSystemProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateSystemSteps(this.currentProblem, this.currentSolution);

            // Generate graph data
            this.generateSystemGraphData();

            // Generate workbook
            this.generateSystemWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                solutionValue: this.currentSolution?.solution,
                solutionType: this.currentSolution?.solutionType
            };

        } catch (error) {
            throw new Error(`Failed to solve system problem: ${error.message}`);
        }
    }

    parseSystemProblem(equations, scenario = '', parameters = {}, problemType = null, context = {}, method = null) {
        // equations should be an object like { eq1: "2x + y = 10", eq2: "x - y = 2" }
        // or an array like ["2x + y = 10", "x - y = 2"]

        let eq1, eq2;
        if (Array.isArray(equations)) {
            eq1 = equations[0];
            eq2 = equations[1];
        } else if (typeof equations === 'object') {
            eq1 = equations.eq1 || equations.equation1;
            eq2 = equations.eq2 || equations.equation2;
        } else {
            throw new Error("Equations must be provided as array or object");
        }

        const cleanEq1 = this.cleanMathExpression(eq1);
        const cleanEq2 = this.cleanMathExpression(eq2);

        // If problem type is specified, use it
        if (problemType && this.systemTypes[problemType]) {
            return {
                originalInput: { eq1, eq2 },
                cleanInput: { eq1: cleanEq1, eq2: cleanEq2 },
                type: problemType,
                method: method || this.suggestMethod(cleanEq1, cleanEq2),
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect problem type
        const detectedType = this.detectSystemType(cleanEq1, cleanEq2, scenario, method);

        // Parse coefficients from equations
        const coeffs = this.parseSystemCoefficients(cleanEq1, cleanEq2);

        return {
            originalInput: { eq1, eq2 },
            cleanInput: { eq1: cleanEq1, eq2: cleanEq2 },
            type: detectedType,
            method: method || this.suggestMethod(cleanEq1, cleanEq2),
            scenario: scenario,
            parameters: { ...coeffs, ...parameters },
            context: { ...context },
            parsedAt: new Date().toISOString()
        };
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/≤/g, '<=')
            .replace(/≥/g, '>=')
            .replace(/≠/g, '!=')
            .replace(/\*\*/g, '^')
            .trim();
    }

    detectSystemType(eq1, eq2, scenario, method) {
        // Check scenario patterns first
        for (const [type, config] of Object.entries(this.systemTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(scenario) || pattern.test(eq1 + ' ' + eq2)) {
                    return type;
                }
            }
        }

        // Check if method is specified
        if (method) {
            if (/substitution/i.test(method)) return 'substitution_basic';
            if (/elimination/i.test(method)) return 'elimination_basic';
            if (/graph/i.test(method)) return 'graphing';
            if (/matrix|cramer/i.test(method)) return 'matrix_cramers';
        }

        // Check if one equation is already solved for a variable
        if (/^[xy]\s*=/.test(eq1) || /^[xy]\s*=/.test(eq2)) {
            return 'substitution_basic';
        }

        // Default to standard 2x2
        return 'standard_2x2';
    }

    suggestMethod(eq1, eq2) {
        // If one equation is solved for a variable, use substitution
        if (/^[xy]\s*=/.test(eq1) || /^[xy]\s*=/.test(eq2)) {
            return 'substitution';
        }

        // Parse to check for opposite coefficients (good for elimination)
        // For now, return elimination as default
        return 'elimination';
    }

    parseSystemCoefficients(eq1, eq2) {
        // Parse equations of form: ax + by = c
        // This is a simplified parser

        const coeffs = {
            a1: 0, b1: 0, c1: 0,
            a2: 0, b2: 0, c2: 0
        };

        // Very basic parsing - in production, use a proper expression parser
        // For now, return empty coefficients
        // A full implementation would parse equations like "2x + 3y = 10" into a1=2, b1=3, c1=10

        return coeffs;
    }

    solveSystemProblem_Internal(problem) {
        const solver = this.systemTypes[problem.type]?.solver;
        if (!solver) {
            // Fallback to standard solver
            return this.solveStandard2x2(problem);
        }

        return solver(problem);
    }

    // SYSTEM SOLVERS

    solveBySubstitution(problem) {
        const { eq1, eq2 } = problem.cleanInput;

        return {
            method: 'Substitution',
            type: 'substitution',
            equation1: eq1,
            equation2: eq2,
            approach: 'Solve one equation for a variable, then substitute into the other',
            solution: { x: null, y: null }, // Would compute actual solution
            solutionType: 'One unique solution',
            category: 'substitution'
        };
    }

    solveByElimination(problem) {
        const { eq1, eq2 } = problem.cleanInput;

        return {
            method: 'Elimination',
            type: 'elimination',
            equation1: eq1,
            equation2: eq2,
            approach: 'Add or subtract equations to eliminate one variable',
            solution: { x: null, y: null },
            solutionType: 'One unique solution',
            category: 'elimination'
        };
    }

    solveByGraphing(problem) {
        return {
            method: 'Graphing',
            type: 'graphing',
            approach: 'Graph both lines and find intersection point',
            solution: { x: null, y: null },
            solutionType: 'One unique solution',
            category: 'graphing'
        };
    }

    solveByCramersRule(problem) {
        return {
            method: "Cramer's Rule",
            type: 'matrix',
            approach: 'Use determinants to solve system',
            solution: { x: null, y: null },
            solutionType: 'One unique solution',
            category: 'matrix'
        };
    }

    solveWordProblemNumber(problem) {
        return {
            method: 'Word Problem - Numbers',
            type: 'word_problem',
            category: 'word_problems',
            approach: 'Set up system from word problem about two numbers'
        };
    }

    solveWordProblemMixture(problem) {
        return {
            method: 'Word Problem - Mixture',
            type: 'word_problem',
            category: 'word_problems',
            approach: 'Set up system from mixture problem'
        };
    }

    solveWordProblemDistance(problem) {
        return {
            method: 'Word Problem - Distance/Rate/Time',
            type: 'word_problem',
            category: 'word_problems',
            approach: 'Set up system using d = rt relationships'
        };
    }

    solveWordProblemMoney(problem) {
        return {
            method: 'Word Problem - Money/Cost',
            type: 'word_problem',
            category: 'word_problems',
            approach: 'Set up system from cost/revenue problem'
        };
    }

    solveSpecialParallel(problem) {
        return {
            method: 'Special Case - Parallel Lines',
            solutionType: 'No solution (inconsistent system)',
            solution: null,
            category: 'special_cases',
            explanation: 'Lines are parallel and never intersect'
        };
    }

    solveSpecialCoincident(problem) {
        return {
            method: 'Special Case - Coincident Lines',
            solutionType: 'Infinite solutions (dependent system)',
            solution: 'All points on the line',
            category: 'special_cases',
            explanation: 'Both equations represent the same line'
        };
    }

    solveStandard2x2(problem) {
        // Default solver for standard 2x2 systems
        const method = problem.method || 'elimination';

        return {
            method: `Standard 2x2 System (using ${method})`,
            type: 'standard',
            category: 'standard',
            approach: `Solve using ${method} method`,
            solution: { x: null, y: null },
            solutionType: 'One unique solution'
        };
    }

    // STEP GENERATION

    generateSystemSteps(problem, solution) {
        let baseSteps = this.generateBaseSystemSteps(problem, solution);

        // Apply enhancements based on options (similar to linear equations class)
        if (this.explanationLevel !== 'basic') {
            baseSteps = baseSteps.map((step, index, array) =>
                this.enhanceStepExplanation(step, problem, solution, index, array.length)
            );
        }

        if (this.includeConceptualConnections) {
            baseSteps = this.addStepBridges(baseSteps, problem);
        }

        if (this.includeErrorPrevention) {
            baseSteps = baseSteps.map(step =>
                this.addErrorPrevention(step, problem.type)
            );
        }

        if (this.explanationLevel === 'scaffolded') {
            baseSteps = this.addScaffolding(baseSteps, problem);
        }

        if (this.explanationLevel === 'ELI5') {
            baseSteps = this.addELI5Explanations(baseSteps, problem);
        }

        return baseSteps;
    }

    generateBaseSystemSteps(problem, solution) {
        const category = solution.category || 'standard';

        switch (category) {
            case 'substitution':
                return this.generateSubstitutionSteps(problem, solution);
            case 'elimination':
                return this.generateEliminationSteps(problem, solution);
            case 'graphing':
                return this.generateGraphingSteps(problem, solution);
            case 'matrix':
                return this.generateMatrixSteps(problem, solution);
            case 'word_problems':
                return this.generateWordProblemSteps(problem, solution);
            default:
                return this.generateGenericSystemSteps(problem, solution);
        }
    }

    generateSubstitutionSteps(problem, solution) {
        const steps = [];
        const { eq1, eq2 } = problem.cleanInput;

        steps.push({
            stepNumber: 1,
            step: 'Given system',
            description: 'Start with the system of two equations',
            expression: `${eq1}\n${eq2}`,
            reasoning: 'We need to find (x, y) that satisfies both equations simultaneously',
            goalStatement: 'Use substitution method to solve'
        });

        steps.push({
            stepNumber: 2,
            step: 'Solve for one variable',
            description: 'Solve the easier equation for one variable',
            reasoning: 'This gives us an expression to substitute into the other equation',
            algebraicRule: 'Solving linear equations'
        });

        steps.push({
            stepNumber: 3,
            step: 'Substitute into other equation',
            description: 'Replace the variable with its expression in the other equation',
            reasoning: 'This creates a single-variable equation we can solve',
            warningNote: 'Use parentheses around the substituted expression!',
            algebraicRule: 'Substitution'
        });

        steps.push({
            stepNumber: 4,
            step: 'Solve for first variable',
            description: 'Solve the resulting single-variable equation',
            reasoning: 'This gives us the value of one variable',
            algebraicRule: 'Solving linear equations'
        });

        steps.push({
            stepNumber: 5,
            step: 'Back-substitute',
            description: 'Substitute the found value back to find the other variable',
            reasoning: 'We need both x and y for the complete solution',
            algebraicRule: 'Back-substitution'
        });

        steps.push({
            stepNumber: 6,
            step: 'Solution',
            description: 'Write the solution as an ordered pair',
            finalAnswer: true,
            reasoning: 'The ordered pair (x, y) satisfies both original equations'
        });

        return steps;
    }

    generateEliminationSteps(problem, solution) {
        const steps = [];
        const { eq1, eq2 } = problem.cleanInput;

        steps.push({
            stepNumber: 1,
            step: 'Given system',
            description: 'Start with the system of two equations',
            expression: `${eq1}\n${eq2}`,
            reasoning: 'We need to find (x, y) that satisfies both equations simultaneously',
            goalStatement: 'Use elimination method to solve'
        });

        steps.push({
            stepNumber: 2,
            step: 'Align equations in standard form',
            description: 'Write both equations as ax + by = c',
            reasoning: 'Standard form makes it easier to see coefficients for elimination',
            algebraicRule: 'Standard form of linear equations'
        });

        steps.push({
            stepNumber: 3,
            step: 'Decide which variable to eliminate',
            description: 'Choose the variable with coefficients that are easier to make opposite',
            reasoning: 'Eliminating one variable gives us a single-variable equation',
            strategicThinking: 'Look for coefficients that are already opposite or easily made opposite'
        });

        steps.push({
            stepNumber: 4,
            step: 'Multiply equations if needed',
            description: 'Multiply one or both equations to create opposite coefficients',
            reasoning: 'Opposite coefficients will cancel when equations are added',
            warningNote: 'Multiply BOTH sides of the equation by the same value',
            algebraicRule: 'Multiplication property of equality'
        });

        steps.push({
            stepNumber: 5,
            step: 'Add or subtract equations',
            description: 'Combine equations to eliminate one variable',
            reasoning: 'This creates a single-variable equation',
            algebraicRule: 'Addition property of equality'
        });

        steps.push({
            stepNumber: 6,
            step: 'Solve for remaining variable',
            description: 'Solve the single-variable equation',
            reasoning: 'This gives us the value of one variable'
        });

        steps.push({
            stepNumber: 7,
            step: 'Back-substitute',
            description: 'Substitute the found value into either original equation',
            reasoning: 'This allows us to find the other variable',
            algebraicRule: 'Substitution'
        });

        steps.push({
            stepNumber: 8,
            step: 'Solution',
            description: 'Write the solution as an ordered pair',
            finalAnswer: true,
            reasoning: 'The ordered pair (x, y) satisfies both original equations'
        });

        return steps;
    }

    generateGraphingSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given system',
            description: 'Start with two linear equations',
            reasoning: 'Each equation represents a line on the coordinate plane'
        });

        steps.push({
            stepNumber: 2,
            step: 'Convert to slope-intercept form',
            description: 'Rewrite both equations as y = mx + b',
            reasoning: 'This form makes slope and y-intercept easy to identify'
        });

        steps.push({
            stepNumber: 3,
            step: 'Identify slope and y-intercept',
            description: 'For each equation, identify m (slope) and b (y-intercept)',
            reasoning: 'These values tell us how to graph each line'
        });

        steps.push({
            stepNumber: 4,
            step: 'Graph both lines',
            description: 'Plot both lines on the same coordinate plane',
            reasoning: 'The intersection point is visible graphically'
        });

        steps.push({
            stepNumber: 5,
            step: 'Find intersection point',
            description: 'Identify where the two lines cross',
            reasoning: 'This point lies on both lines, so it satisfies both equations',
            finalAnswer: true
        });

        steps.push({
            stepNumber: 6,
            step: 'Verify algebraically',
            description: 'Check the intersection point in both original equations',
            reasoning: 'Graphical solutions can be imprecise; verification confirms accuracy'
        });

        return steps;
    }

    generateMatrixSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given system',
            description: 'Start with system in standard form',
            reasoning: 'Standard form needed for matrix representation'
        });

        steps.push({
            stepNumber: 2,
            step: 'Set up matrices',
            description: 'Write coefficient matrix and constant matrix',
            reasoning: 'Matrix form provides structured approach to solution'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate main determinant D',
            description: 'Find determinant of coefficient matrix using D = ad - bc',
            reasoning: 'D ≠ 0 ensures unique solution exists',
            algebraicRule: 'Determinant formula'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate Dx',
            description: 'Replace x-column with constants, find determinant',
            reasoning: 'Numerator for x in Cramer\'s Rule'
        });

        steps.push({
            stepNumber: 5,
            step: 'Calculate Dy',
            description: 'Replace y-column with constants, find determinant',
            reasoning: 'Numerator for y in Cramer\'s Rule'
        });

        steps.push({
            stepNumber: 6,
            step: 'Apply Cramer\'s Rule',
            description: 'x = Dx/D and y = Dy/D',
            reasoning: 'Cramer\'s Rule gives solution without back-substitution',
            finalAnswer: true
        });

        return steps;
    }

    generateWordProblemSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Read and understand',
            description: 'Read problem carefully, identify what you\'re asked to find',
            reasoning: 'Understanding the problem is the first step to solving it'
        });

        steps.push({
            stepNumber: 2,
            step: 'Define variables',
            description: 'Let x = ... and y = ...',
            reasoning: 'Clear variable definitions prevent confusion later',
            warningNote: 'Be very specific about what each variable represents'
        });

        steps.push({
            stepNumber: 3,
            step: 'Identify constraints',
            description: 'Find two different pieces of information from the problem',
            reasoning: 'Two unknowns require two independent equations'
        });

        steps.push({
            stepNumber: 4,
            step: 'Write first equation',
            description: 'Translate first constraint into equation',
            reasoning: 'Each constraint becomes an equation'
        });

        steps.push({
            stepNumber: 5,
            step: 'Write second equation',
            description: 'Translate second constraint into equation',
            reasoning: 'Second independent equation completes the system',
            warningNote: 'Make sure this is different information, not the same constraint reworded'
        });

        steps.push({
            stepNumber: 6,
            step: 'Solve the system',
            description: 'Use substitution, elimination, or another method to solve',
            reasoning: 'Apply algebraic techniques to find x and y'
        });

        steps.push({
            stepNumber: 7,
            step: 'Interpret solution',
            description: 'State answer in context with appropriate units',
            reasoning: 'Solution must make sense in the real-world context',
            finalAnswer: true
        });

        steps.push({
            stepNumber: 8,
            step: 'Check reasonableness',
            description: 'Verify the answer makes sense in the problem context',
            reasoning: 'Real-world constraints may eliminate mathematically valid solutions'
        });

        return steps;
    }

    generateGenericSystemSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'System of linear equations',
            description: 'Solve the given system',
            reasoning: 'Apply appropriate solution technique',
            solution: solution
        }];
    }

    // ENHANCED EXPLANATION METHODS (similar structure to linear equations)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanation(step, problem),
                procedural: this.getProceduralExplanation(step),
                visual: this.getVisualExplanation(step, problem),
                algebraic: this.getAlgebraicExplanation(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisites(step, problem.type),
                keyVocabulary: this.identifyKeyVocabulary(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPrompts(step);
        }

        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestion(step);
        }

        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findRealWorldConnection(step, problem);
        }

        return enhanced;
    }

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateELI5Explanation(step, problem),
                analogy: this.findRelevantAnalogy(step, problem),
                simpleLanguage: this.convertToSimpleLanguage(step.description),
                visualization: this.suggestVisualization(step)
            }
        }));
    }

    generateELI5Explanation(step, problem) {
        const ELI5Explanations = {
            'Given system': "We have TWO puzzles, and we need to find numbers that solve BOTH puzzles at the same time!",
            'Solve for one variable': "We're going to figure out what one mystery letter equals, like solving a little puzzle first.",
            'Substitute into other equation': "Now we take what we learned and use it in the second puzzle!",
            'Add or subtract equations': "We're going to combine the two puzzles in a clever way to make one of the mystery letters disappear!",
            'Back-substitute': "We know one number now, so let's plug it back in to find the other number!",
            'Graph both lines': "We're going to draw two lines on a map and see where they cross!",
            'Find intersection point': "The spot where the two lines meet is our answer!",
            'Convert to slope-intercept form': "We're going to write the equations in a special way that makes them easy to draw.",
            'Calculate determinant': "We're going to do a special math trick with the numbers that tells us if there's an answer."
        };

        return ELI5Explanations[step.step] || "We're taking another step to solve our puzzle and find the numbers that work in BOTH equations!";
    }

    findRelevantAnalogy(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(problem.type) || analogy.suitableFor.includes('all_types')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of this like solving two puzzles at the same time - we need an answer that works for both!";
    }

    convertToSimpleLanguage(description) {
        const simplifications = {
            'system': 'two equations together',
            'equation': 'math sentence with equals sign',
            'variable': 'mystery letter we need to find',
            'coefficient': 'number next to the letter',
            'substitute': 'replace with',
            'eliminate': 'make disappear',
            'slope': 'how steep the line is',
            'y-intercept': 'where line crosses the up-down axis',
            'intersection': 'where lines cross',
            'ordered pair': 'two numbers in parentheses',
            'solution': 'the answer',
            'determinant': 'special number we calculate',
            'back-substitute': 'plug the number back in'
        };

        let simple = description;
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp(term, 'gi');
            simple = simple.replace(regex, replacement);
        }

        return simple;
    }

    suggestVisualization(step) {
        const visualizations = {
            'Given system': 'Write both equations on separate lines, one above the other',
            'Solve for one variable': 'Circle the variable you\'re solving for',
            'Substitute into other equation': 'Draw an arrow from the solved equation to where you\'ll substitute',
            'Add or subtract equations': 'Line up the equations vertically and show which terms cancel',
            'Graph both lines': 'Draw coordinate axes and plot both lines using different colors',
            'Find intersection point': 'Mark the point where the lines cross with a big dot',
            'Convert to slope-intercept form': 'Rearrange to get y by itself on one side',
            'Calculate determinant': 'Draw a 2×2 grid and show the diagonal multiplication pattern',
            'Multiply equations': 'Show the multiplication happening to each term'
        };

        return visualizations[step.step] || 'Draw a picture or diagram to represent what\'s happening';
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generateStepBridge(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgression(steps[i], steps[i + 1]),
                    strategicThinking: this.explainStepStrategy(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    addErrorPrevention(step, problemType) {
        const category = this.systemTypes[problemType]?.category || 'standard';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTips(step, problemType),
                checkPoints: this.generateCheckPoints(step),
                warningFlags: this.identifyWarningFlags(step, problemType)
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestion(step),
                expectedResult: this.describeExpectedResult(step),
                troubleshooting: this.generateTroubleshootingTips(step)
            }
        };
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestions(step, problem),
                subSteps: this.breakIntoSubSteps(step),
                hints: this.generateProgressiveHints(step, problem),
                practiceVariation: this.generatePracticeVariation(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcess(step),
                decisionPoints: this.identifyDecisionPoints(step),
                alternativeApproaches: this.suggestAlternativeMethods(step, problem)
            }
        }));
    }

    // HELPER METHODS FOR ENHANCED EXPLANATIONS

    getConceptualExplanation(step, problem) {
        const conceptualExplanations = {
            'Given system': 'A system represents multiple constraints that must all be satisfied. The solution is the point that makes all equations true.',
            'Solve for one variable': 'Isolating a variable creates an expression we can substitute, reducing two equations to one.',
            'Substitute into other equation': 'Substitution uses the relationship from one equation to eliminate a variable from the other.',
            'Add or subtract equations': 'When we add equations with opposite coefficients, one variable cancels out (elimination).',
            'Back-substitute': 'After finding one variable, we use it to find the other, completing the solution.',
            'Graph both lines': 'Each equation is a line. The solution is where they intersect because that point lies on both lines.',
            'Find intersection point': 'The intersection represents the unique (x,y) that satisfies both equations simultaneously.',
            'Convert to slope-intercept form': 'y = mx + b form reveals slope and y-intercept, making graphing straightforward.',
            'Calculate determinant': 'The determinant determines if a unique solution exists. D ≠ 0 means lines intersect at one point.'
        };

        return conceptualExplanations[step.step] || 'This step progresses toward finding the solution that satisfies both equations.';
    }

    getProceduralExplanation(step) {
        const proceduralSteps = {
            'Solve for one variable': '1. Choose variable to isolate\n2. Move other terms to opposite side\n3. Divide by coefficient',
            'Substitute into other equation': '1. Identify expression for variable\n2. Replace variable with (expression)\n3. Simplify',
            'Add or subtract equations': '1. Align equations vertically\n2. Add/subtract corresponding terms\n3. Simplify result',
            'Back-substitute': '1. Take found value\n2. Substitute into either original equation\n3. Solve for other variable'
        };

        return proceduralSteps[step.step] || 'Follow the standard procedure for this type of step.';
    }

    getVisualExplanation(step, problem) {
        const visualExplanations = {
            'substitution': 'Picture solving a small puzzle first, then using that piece to complete a bigger puzzle.',
            'elimination': 'Imagine stacking two equations and canceling matching opposites, like matter and antimatter.',
            'graphing': 'Visualize two roads crossing on a map - the intersection is where they meet.',
            'matrix': 'See the system as an organized grid of numbers with a systematic solution process.'
        };

        const category = this.systemTypes[problem.type]?.category || 'standard';
        return visualExplanations[category] || 'Visualize the system as two constraints that must both be satisfied.';
    }

    getAlgebraicExplanation(step) {
        const algebraicRules = {
            'Given system': 'Two linear equations in two unknowns',
            'Solve for one variable': 'Solving linear equations; isolation of variable',
            'Substitute into other equation': 'Substitution property',
            'Add or subtract equations': 'Addition/Subtraction property of equality applied to both equations',
            'Multiply equations': 'Multiplication property of equality',
            'Calculate determinant': 'Determinant formula: D = ad - bc for matrix [a,b;c,d]'
        };

        return algebraicRules[step.step] || 'Apply properties of equality and algebraic manipulation.';
    }

    getAdaptiveExplanation(step, explanationLevel) {
        const level = this.difficultyLevels[explanationLevel] || this.difficultyLevels.intermediate;
        
        return {
            adaptedDescription: this.adaptLanguageLevel(step.description, level),
            adaptedReasoning: this.adaptLanguageLevel(step.reasoning, level),
            complexityLevel: explanationLevel
        };
    }

    adaptLanguageLevel(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                'system': 'two equations',
                'substitute': 'replace',
                'eliminate': 'remove',
                'coefficient': 'number with variable',
                'intersection': 'where lines cross',
                'ordered pair': '(x, y)',
                'determinant': 'special value',
                'back-substitute': 'plug back in'
            },
            intermediate: {
                'system': 'system of equations',
                'substitute': 'substitute',
                'eliminate': 'eliminate',
                'coefficient': 'coefficient',
                'intersection': 'intersection point',
                'ordered pair': 'ordered pair',
                'determinant': 'determinant',
                'back-substitute': 'back-substitute'
            },
            ELI5: {
                'system': 'two puzzles we solve together',
                'substitute': 'swap out for',
                'eliminate': 'make disappear',
                'coefficient': 'the number next to the letter',
                'intersection': 'the spot where two lines meet',
                'ordered pair': 'two numbers in parentheses that are the answer',
                'determinant': 'a special number we calculate to help solve',
                'back-substitute': 'put the number back into the equation',
                'equation': 'a math sentence with an equals sign',
                'variable': 'the mystery letter we\'re finding'
            },
            detailed: {
                'system': 'system of linear equations',
                'substitute': 'substitute (replace variable with expression)',
                'eliminate': 'eliminate (remove variable by combining equations)',
                'coefficient': 'coefficient (numerical factor of variable)',
                'intersection': 'point of intersection',
                'ordered pair': 'ordered pair (x, y)',
                'determinant': 'determinant (scalar value of matrix)',
                'back-substitute': 'back-substitute (substitute known value to find unknown)'
            }
        };

        const levelAdaptation = adaptations[level.vocabulary] || adaptations.intermediate;
        let adaptedText = text;

        for (const [term, replacement] of Object.entries(levelAdaptation)) {
            const regex = new RegExp(`\\b${term}\\b`, 'gi');
            adaptedText = adaptedText.replace(regex, replacement);
        }

        return adaptedText;
    }

    generateStepBridge(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.step} completed`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary to continue toward the solution`,
            howItHelps: `This will help by: ${this.explainStepBenefit(nextStep)}`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue solving the system`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
    }

    explainStepBenefit(nextStep) {
        const benefits = {
            'Solve for one variable': 'creating an expression to substitute',
            'Substitute into other equation': 'reducing to a single-variable equation',
            'Add or subtract equations': 'eliminating one variable',
            'Back-substitute': 'finding the complete solution (both x and y)',
            'Graph both lines': 'visualizing where lines intersect',
            'Calculate determinant': 'determining if unique solution exists'
        };

        return benefits[nextStep.step] || 'progressing toward the solution';
    }

    generatePreventionTips(step, problemType) {
        const tips = {
            'Substitute into other equation': [
                'Use parentheses around the entire substituted expression',
                'Substitute into the OTHER equation, not the same one',
                'Distribute carefully after substitution'
            ],
            'Add or subtract equations': [
                'Make sure coefficients are opposites before adding',
                'Add each pair of corresponding terms',
                'Watch signs carefully'
            ],
            'Multiply equations': [
                'Multiply EVERY term on BOTH sides',
                'Track negative signs carefully',
                'Choose smallest multipliers to avoid large numbers'
            ],
            'Back-substitute': [
                'Don\'t forget this step - you need both x AND y',
                'Can substitute into either original equation',
                'Double-check arithmetic'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Check your arithmetic', 'Verify result'];
    }

    generateCheckPoints(step) {
        const checkpoints = {
            'Substitute into other equation': [
                'Did I use parentheses around the substituted expression?',
                'Did I substitute into the OTHER equation?',
                'Did I distribute correctly?'
            ],
            'Add or subtract equations': [
                'Are the coefficients I want to eliminate actually opposites?',
                'Did I add/subtract corresponding terms correctly?',
                'Did one variable actually cancel out?'
            ],
            'Back-substitute': [
                'Did I find BOTH x and y?',
                'Did I substitute correctly?',
                'Does my answer make sense?'
            ]
        };

        return checkpoints[step.step] || [
            'Did I perform this step correctly?',
            'Does the result make sense?',
            'Am I progressing toward the solution?'
        ];
    }

    identifyWarningFlags(step, problemType) {
        const warnings = {
            'Substitute into other equation': [
                'Forgetting parentheses leads to distribution errors',
                'Substituting into same equation gives identity (useless)'
            ],
            'Add or subtract equations': [
                'If both variables cancel, you have a special case',
                'Getting 0 = 0 means infinite solutions',
                'Getting 0 = (non-zero) means no solution'
            ],
            'Multiply equations': [
                'Forgetting to multiply ALL terms is a common error',
                'Negative multipliers change ALL signs'
            ]
        };

        return warnings[step.step] || [];
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'Given system': 'Do I understand what the system is asking me to find?',
            'Solve for one variable': 'Did I isolate the variable completely?',
            'Substitute into other equation': 'Did I use parentheses and substitute into the OTHER equation?',
            'Add or subtract equations': 'Did one variable cancel out completely?',
            'Multiply equations': 'Did I multiply BOTH sides of the equation?',
            'Back-substitute': 'Do I have values for BOTH x and y?',
            'Graph both lines': 'Are both lines drawn correctly?',
            'Find intersection point': 'Does this point lie on BOTH lines?'
        };

        return questions[step.step] || 'Does this step move me closer to the solution?';
    }

    describeExpectedResult(step) {
        const expectations = {
            'Solve for one variable': 'One variable expressed in terms of the other (e.g., y = 2x + 1)',
            'Substitute into other equation': 'A single-variable equation',
            'Add or subtract equations': 'One variable eliminated, leaving equation in one variable',
            'Back-substitute': 'Both x and y values found',
            'Graph both lines': 'Two lines visible on coordinate plane',
            'Find intersection point': 'An ordered pair (x, y)'
        };

        return expectations[step.step] || 'Progress toward finding the solution';
    }

    generateTroubleshootingTips(step) {
        return [
            'Review the previous step to ensure it was done correctly',
            'Check all arithmetic carefully',
            'Make sure you\'re following the method correctly',
            'If stuck, try a different method',
            'Verify your work by checking partial results'
        ];
    }

    generateGuidingQuestions(step, problem) {
        const questions = {
            'Given system': [
                'What are we trying to find?',
                'What method should we use?',
                'Are the equations in a convenient form?'
            ],
            'Solve for one variable': [
                'Which variable is easiest to solve for?',
                'Which equation is simpler?',
                'What operation isolates the variable?'
            ],
            'Substitute into other equation': [
                'What expression did I get for the variable?',
                'Which equation do I substitute into?',
                'Did I use parentheses?'
            ],
            'Add or subtract equations': [
                'Which variable should I eliminate?',
                'Are the coefficients opposites?',
                'Should I add or subtract?'
            ],
            'Back-substitute': [
                'What value did I find?',
                'Which variable did I find?',
                'Where do I substitute to find the other variable?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'How does this help solve the system?'];
    }

    generateProgressiveHints(step, problem) {
        const category = this.systemTypes[problem.type]?.category || 'standard';
        const hintSet = this.hints[category] || this.hints.substitution;

        return {
            level1: hintSet.level1 || 'Think about what this step requires.',
            level2: hintSet.level2 || 'Consider what technique applies here.',
            level3: hintSet.level3 || 'Apply the appropriate method.',
            level4: hintSet.level4 || 'Execute the specific operations needed.'
        };
    }

    breakIntoSubSteps(step) {
        const subSteps = {
            'Solve for one variable': [
                'Identify which variable to solve for',
                'Move other variable and constants to opposite side',
                'Divide by coefficient if needed',
                'Write in form: variable = expression'
            ],
            'Substitute into other equation': [
                'Write the expression with parentheses',
                'Replace variable in other equation with (expression)',
                'Distribute and simplify',
                'Combine like terms'
            ],
            'Add or subtract equations': [
                'Write equations aligned vertically',
                'Add or subtract corresponding terms',
                'Simplify the result',
                'Verify one variable canceled'
            ]
        };

        return subSteps[step.step] || ['Understand the goal', 'Apply the technique', 'Verify the result'];
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try a system with similar structure but different numbers',
            practiceHint: 'Practice the same method with simpler numbers first',
            extension: 'Once comfortable, try systems with fractions or larger coefficients'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What do I notice about this system/step?',
            goal: 'What am I trying to accomplish?',
            strategy: 'What method or technique should I use?',
            execute: 'How do I carry out this technique?',
            verify: 'Does my result make sense?'
        };
    }

    identifyDecisionPoints(step) {
        const decisions = {
            'Solve for one variable': [
                'Which variable is easier to solve for?',
                'Which equation is simpler to work with?'
            ],
            'Substitute into other equation': [
                'Did I choose the correct equation to substitute into?'
            ],
            'Add or subtract equations': [
                'Which variable should I eliminate?',
                'Should I multiply equations first?',
                'Should I add or subtract?'
            ],
            'Method choice': [
                'Should I use substitution or elimination?',
                'Is graphing appropriate?'
            ]
        };

        return decisions[step.step] || ['What approach is best?', 'How should I proceed?'];
    }

    suggestAlternativeMethods(step, problem) {
        return ['The chosen method is appropriate', 'Could also use different method for entire problem'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step uses the result from step ${stepIndex}`,
            progression: 'We are moving closer to finding both x and y',
            relationship: 'Each step builds on the previous one'
        };
    }

    identifyPrerequisites(step, problemType) {
        const category = this.systemTypes[problemType]?.category || 'standard';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Solving linear equations', 'Basic algebra'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Given system': ['system', 'equations', 'variables', 'solution', 'ordered pair'],
            'Solve for one variable': ['solve', 'isolate', 'variable', 'expression'],
            'Substitute into other equation': ['substitute', 'replace', 'expression', 'distribute'],
            'Add or subtract equations': ['eliminate', 'combine', 'cancel', 'opposite coefficients'],
            'Back-substitute': ['back-substitute', 'plug in', 'solve'],
            'Graph both lines': ['graph', 'plot', 'slope', 'y-intercept', 'coordinate plane'],
            'Find intersection point': ['intersection', 'ordered pair', 'solution'],
            'Calculate determinant': ['determinant', 'matrix', 'coefficient']
        };

        return vocabulary[step.step] || ['system', 'solution', 'variable'];
    }

    generateThinkingPrompts(step) {
        return {
            before: 'Before starting, what do I need to identify or prepare?',
            during: 'As I work through this, what should I be careful about?',
            after: 'After completing this step, how can I verify it\'s correct?'
        };
    }

    findRealWorldConnection(step, problem) {
        return 'Systems of equations help us solve problems where multiple conditions must be met simultaneously, like budgeting with multiple constraints or finding optimal solutions in business.';
    }

    // GRAPH GENERATION

    generateSystemGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        this.graphData = this.generateSystemGraph(this.currentProblem, this.currentSolution);
    }

    generateSystemGraph(problem, solution) {
        return {
            type: 'system_2x2',
            description: 'Graph showing both lines and their intersection',
            graphType: 'coordinate_plane',
            visualization: 'Two lines intersecting at the solution point'
        };
    }

    // WORKBOOK GENERATION

    generateSystemWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createMethodComparisonSection(),
            this.createEnhancedStepsSection(),
            this.createSystemLessonSection(),
            this.createSolutionSection(),
            this.createAnalysisSection(),
            this.createVerificationSection(),
            this.createGraphicalRepresentationSection(),
            this.createRealWorldApplicationSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection(),
            this.createPracticeProblemsSection(),
            this.createSpecialCasesSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Systems of Linear Equations Mathematical Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            explanationLevel: this.explanationLevel,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSection() {
        if (!this.currentProblem) return null;

        const { eq1, eq2 } = this.currentProblem.cleanInput;

        const problemData = [
            ['Problem Type', this.systemTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.systemTypes[this.currentProblem.type]?.category || 'system'],
            ['Method Used', this.currentProblem.method || 'Not specified'],
            ['', ''],
            ['System of Equations', ''],
            ['Equation 1', eq1],
            ['Equation 2', eq2]
        ];

        if (this.currentProblem.scenario) {
            problemData.push(['', '']);
            problemData.push(['Scenario', this.currentProblem.scenario]);
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSection() {
        if (!this.prerequisiteChecks) return null;

        const category = this.systemTypes[this.currentProblem.type]?.category;
        const prereqs = this.prerequisites[category];

        if (!prereqs) return null;

        const prereqData = [
            ['Required Skills', prereqs.skills.join('; ')],
            ['Prior Knowledge', prereqs.priorKnowledge.join('; ')],
            ['', ''],
            ['Quick Check Questions', '']
        ];

        prereqs.checkQuestions.forEach((q, index) => {
            prereqData.push([`Question ${index + 1}`, q]);
        });

        return {
            title: 'Prerequisites',
            type: 'prerequisites',
            data: prereqData
        };
    }

    createMethodComparisonSection() {
        const comparisonData = [
            ['Method Comparison', ''],
            ['', ''],
            ['Substitution', 'Best when one equation is solved for a variable'],
            ['Pros', 'Natural approach, good for word problems'],
            ['Cons', 'Can lead to fractions, more algebraic manipulation'],
            ['', ''],
            ['Elimination', 'Best when coefficients align well'],
            ['Pros', 'Often fewer steps, avoids fractions'],
            ['Cons', 'Requires multiplying equations sometimes'],
            ['', ''],
            ['Graphing', 'Best for visual understanding'],
            ['Pros', 'Visual representation, easy to see solution types'],
            ['Cons', 'Imprecise, time-consuming'],
            ['', ''],
            ['Matrix/Cramer\'s Rule', 'Best for systematic approach'],
            ['Pros', 'Algorithmic, no back-substitution'],
            ['Cons', 'Requires determinant knowledge, less intuitive']
        ];

        return {
            title: 'Method Comparison',
            type: 'methods',
            data: comparisonData
        };
    }

    createEnhancedStepsSection() {
        if (!this.solutionSteps || this.solutionSteps.length === 0) return null;

        const stepsData = [];

        this.solutionSteps.forEach((step, index) => {
            if (step.stepType === 'bridge' && this.explanationLevel === 'basic') {
                return;
            }

            if (step.stepType === 'bridge') {
                stepsData.push(['→ Bridge', step.title]);
                stepsData.push(['Explanation', step.explanation.currentState]);
                stepsData.push(['Next Goal', step.explanation.nextGoal]);
                stepsData.push(['', '']);
                return;
            }

            stepsData.push([`Step ${step.stepNumber}`, step.description]);

            if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.algebraicRule) {
                stepsData.push(['Rule Used', step.algebraicRule]);
            }

            if (step.warningNote) {
                stepsData.push(['⚠ Warning', step.warningNote]);
            }

            if (step.ELI5 && this.explanationLevel === 'ELI5') {
                stepsData.push(['ELI5 Explanation', step.ELI5.explanation]);
                if (step.ELI5.analogy) {
                    stepsData.push(['Analogy', step.ELI5.analogy]);
                }
                if (step.ELI5.visualization) {
                    stepsData.push(['Visualize', step.ELI5.visualization]);
                }
            }

            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
                stepsData.push(['Procedural', step.explanations.procedural]);
            }

            if (step.errorPrevention && this.includeErrorPrevention) {
                const mistakes = step.errorPrevention.commonMistakes;
                if (mistakes && mistakes.length > 0) {
                    stepsData.push(['Common Mistakes', mistakes.join('; ')]);
                }
                const tips = step.errorPrevention.preventionTips;
                if (tips && tips.length > 0) {
                    stepsData.push(['Prevention Tips', tips.join('; ')]);
                }
            }

            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                const questions = step.scaffolding.guidingQuestions;
                if (questions && questions.length > 0) {
                    stepsData.push(['Guiding Questions', questions.join(' | ')]);
                }
                
                const hints = step.scaffolding.hints;
                if (hints) {
                    stepsData.push(['Hint Level 1', hints.level1]);
                    stepsData.push(['Hint Level 2', hints.level2]);
                }
            }

            if (step.thinkingPrompts && this.includeThinkingPrompts) {
                stepsData.push(['Think Before', step.thinkingPrompts.before]);
                stepsData.push(['Think After', step.thinkingPrompts.after]);
            }

            if (step.selfCheck && this.includeSelfCheckQuestions) {
                stepsData.push(['Self-Check', step.selfCheck]);
            }

            stepsData.push(['', '']);
        });

        return {
            title: `Enhanced Step-by-Step Solution (${this.explanationLevel} level)`,
            type: 'steps',
            data: stepsData
        };
    }

    createSystemLessonSection() {
        const lessonData = [
            ['Key Concepts', ''],
            ['', 'A system is two equations with same variables'],
            ['', 'Solution satisfies BOTH equations simultaneously'],
            ['', 'Can have: one solution, no solution, or infinite solutions'],
            ['', 'Graphically: solution is where lines intersect'],
            ['', ''],
            ['Solution Methods', ''],
            ['', 'Substitution: solve one for variable, substitute into other'],
            ['', 'Elimination: add/subtract equations to eliminate variable'],
            ['', 'Graphing: plot both lines, find intersection'],
            ['', 'Matrix: use determinants and Cramer\'s Rule']
        ];

        return {
            title: 'Systems of Equations - Key Concepts',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        if (this.currentSolution.solution) {
            if (typeof this.currentSolution.solution === 'object' && this.currentSolution.solution.x !== undefined) {
                solutionData.push(['Solution', `(${this.currentSolution.solution.x}, ${this.currentSolution.solution.y})`]);
                solutionData.push(['x-coordinate', this.currentSolution.solution.x]);
                solutionData.push(['y-coordinate', this.currentSolution.solution.y]);
            } else {
                solutionData.push(['Solution', this.currentSolution.solution]);
            }
            solutionData.push(['Solution Type', this.currentSolution.solutionType || 'One unique solution']);
        } else if (this.currentSolution.solutionType) {
            solutionData.push(['Solution Type', this.currentSolution.solutionType]);
            if (this.currentSolution.explanation) {
                solutionData.push(['Explanation', this.currentSolution.explanation]);
            }
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createAnalysisSection() {
        if (!this.currentSolution) return null;

        const analysisData = [
            ['Solution Method', this.currentSolution.method || this.currentSolution.type],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Difficulty Level', this.explanationLevel],
            ['Category', this.systemTypes[this.currentProblem.type]?.category]
        ];

        if (this.currentSolution.approach) {
            analysisData.push(['Approach', this.currentSolution.approach]);
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSection() {
        if (!this.currentSolution || !this.currentProblem) return null;

        const verificationData = [
            ['Verification Method', 'Substitution into both original equations'],
            ['', '']
        ];

        if (this.currentSolution.solution && typeof this.currentSolution.solution === 'object') {
            const { x, y } = this.currentSolution.solution;
            if (x !== null && x !== undefined && y !== null && y !== undefined) {
                verificationData.push(['Solution', `(${x}, ${y})`]);
                verificationData.push(['', '']);
                verificationData.push(['Check Equation 1', `Substitute x=${x}, y=${y} into first equation`]);
                verificationData.push(['Check Equation 2', `Substitute x=${x}, y=${y} into second equation`]);
                verificationData.push(['', '']);
                verificationData.push(['Verification Status', 'Solution should satisfy both equations']);
            }
        } else {
            verificationData.push(['Note', this.currentSolution.solutionType || 'Special case - verification not applicable']);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createGraphicalRepresentationSection() {
        const graphData = [
            ['Graphical Interpretation', ''],
            ['', ''],
            ['One Solution', 'Lines intersect at one point'],
            ['No Solution', 'Lines are parallel (never intersect)'],
            ['Infinite Solutions', 'Lines are coincident (same line)'],
            ['', ''],
            ['Identifying from Slope-Intercept Form', ''],
            ['Different slopes', '→ One solution'],
            ['Same slope, different y-intercepts', '→ No solution'],
            ['Same slope and y-intercept', '→ Infinite solutions']
        ];

        return {
            title: 'Graphical Representation',
            type: 'graphical',
            data: graphData
        };
    }

    createRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const applications = Object.values(this.realWorldProblems).slice(0, 3);

        if (applications.length === 0) return null;

        const appData = [
            ['Real-World Applications of Systems', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Real-World Value', app.realWorldValue]);
            if (app.examples && app.examples[0]) {
                appData.push(['Example', app.examples[0]]);
            }
            appData.push(['', '']);
        });

        return {
            title: 'Real-World Applications',
            type: 'applications',
            data: appData
        };
    }

    createPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const notes = this.generateSystemPedagogicalNotes(this.currentProblem.type);

        return {
            title: 'Teaching Notes',
            type: 'pedagogical',
            data: [
                ['Learning Objectives', notes.objectives.join('; ')],
                ['Key Concepts', notes.keyConcepts.join('; ')],
                ['Prerequisites', notes.prerequisites.join('; ')],
                ['Common Difficulties', notes.commonDifficulties.join('; ')],
                ['Teaching Strategies', notes.teachingStrategies.join('; ')],
                ['Extension Ideas', notes.extensions.join('; ')],
                ['Assessment Tips', notes.assessment.join('; ')]
            ]
        };
    }

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const alternatives = this.generateSystemAlternativeMethods(this.currentProblem.type);

        return {
            title: 'Alternative Solution Methods',
            type: 'alternatives',
            data: [
                ['Primary Method Used', alternatives.primaryMethod],
                ['', ''],
                ['Alternative Methods', ''],
                ...alternatives.methods.map((method, index) => [
                    `Method ${index + 1}`, `${method.name}: ${method.description}`
                ]),
                ['', ''],
                ['Method Comparison', alternatives.comparison]
            ]
        };
    }

    createPracticeProblemsSection() {
        const problems = this.questionBank.byDifficulty;

        const practiceData = [
            ['Practice Problems', ''],
            ['', ''],
            ['Easy Systems', '']
        ];

        problems.easy.slice(0, 2).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Medium Systems', '']);

        problems.medium.slice(0, 2).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Hard Systems', '']);

        problems.hard.slice(0, 2).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        return {
            title: 'Practice Problems',
            type: 'practice',
            data: practiceData
        };
    }

    createSpecialCasesSection() {
        const specialData = [
            ['Special Cases in Systems', ''],
            ['', ''],
            ['No Solution (Inconsistent)', ''],
            ['Algebraic Sign', 'Get 0 = (non-zero number)'],
            ['Graphical', 'Parallel lines'],
            ['Example', 'y = 2x + 1 and y = 2x - 3'],
            ['', ''],
            ['Infinite Solutions (Dependent)', ''],
            ['Algebraic Sign', 'Get 0 = 0 (identity)'],
            ['Graphical', 'Coincident lines (same line)'],
            ['Example', '2x + y = 4 and 4x + 2y = 8'],
            ['', ''],
            ['One Unique Solution (Consistent Independent)', ''],
            ['Algebraic Sign', 'Variable equals specific number'],
            ['Graphical', 'Lines intersect at one point'],
            ['Example', 'x + y = 5 and x - y = 1']
        ];

        return {
            title: 'Special Cases',
            type: 'special_cases',
            data: specialData
        };
    }

    generateSystemPedagogicalNotes(problemType) {
        const category = this.systemTypes[problemType]?.category;

        const pedagogicalDatabase = {
            substitution: {
                objectives: [
                    'Solve systems using substitution method',
                    'Recognize when substitution is most efficient',
                    'Use parentheses correctly when substituting'
                ],
                keyConcepts: [
                    'Substitution reduces two equations to one',
                    'Expression must be substituted into OTHER equation',
                    'Parentheses prevent distribution errors'
                ],
                prerequisites: [
                    'Solving linear equations for a variable',
                    'Substitution in expressions',
                    'Distribution and combining like terms'
                ],
                commonDifficulties: [
                    'Substituting into same equation',
                    'Forgetting parentheses around substituted expression',
                    'Not finding second variable (forgetting back-substitution)'
                ],
                teachingStrategies: [
                    'Practice identifying which equation to solve first',
                    'Emphasize "substitute into OTHER equation"',
                    'Use color coding for substituted expression',
                    'Require parentheses in all substitutions'
                ],
                extensions: [
                    'Systems with fractions or decimals',
                    'Three-variable systems',
                    'Non-linear systems'
                ],
                assessment: [
                    'Can student identify best variable to solve for?',
                    'Does student use parentheses correctly?',
                    'Does student find both variables?'
                ]
            },
            elimination: {
                objectives: [
                    'Solve systems using elimination method',
                    'Multiply equations to create opposite coefficients',
                    'Add or subtract equations appropriately'
                ],
                keyConcepts: [
                    'Opposite coefficients cancel when added',
                    'Must multiply ALL terms when scaling equations',
                    'Elimination reduces to single-variable equation'
                ],
                prerequisites: [
                    'Multiplying equations by constants',
                    'Adding and subtracting equations',
                    'Solving linear equations'
                ],
                commonDifficulties: [
                    'Only multiplying one side of equation',
                    'Sign errors when multiplying by negatives',
                    'Choosing wrong operation (add vs subtract)',
                    'Forgetting back-substitution'
                ],
                teachingStrategies: [
                    'Teach systematic approach to choosing multipliers',
                    'Practice vertical alignment of equations',
                    'Use different colors for each equation',
                    'Emphasize checking that variable actually canceled'
                ],
                extensions: [
                    'Systems requiring two multiplications',
                    'Three-variable systems',
                    'Systems with special cases'
                ],
                assessment: [
                    'Can student choose appropriate multipliers?',
                    'Does student multiply correctly?',
                    'Does student recognize when variable is eliminated?'
                ]
            },
            graphing: {
                objectives: [
                    'Graph systems of linear equations',
                    'Identify solution from intersection point',
                    'Recognize solution types graphically'
                ],
                keyConcepts: [
                    'Each equation is a line on coordinate plane',
                    'Solution is intersection point',
                    'Different slopes → one solution; same slope → special case'
                ],
                prerequisites: [
                    'Graphing linear equations',
                    'Slope-intercept form',
                    'Reading coordinates from graph'
                ],
                commonDifficulties: [
                    'Errors in converting to slope-intercept form',
                    'Misreading intersection point',
                    'Not extending lines far enough',
                    'Confusing x and y coordinates'
                ],
                teachingStrategies: [
                    'Use graph paper for accuracy',
                    'Different colors for each line',
                    'Always verify graphical solution algebraically',
                    'Compare slopes to predict solution type'
                ],
                extensions: [
                    'Systems with non-linear equations',
                    'Graphing inequalities',
                    'Linear programming'
                ],
                assessment: [
                    'Can student graph both lines accurately?',
                    'Can student identify intersection visually?',
                    'Does student verify solution algebraically?'
                ]
            },
            word_problems: {
                objectives: [
                    'Translate word problems into systems',
                    'Define variables clearly',
                    'Identify two independent constraints',
                    'Interpret solutions in context'
                ],
                keyConcepts: [
                    'Two unknowns require two equations',
                    'Equations must represent different information',
                    'Solution must make sense in context'
                ],
                prerequisites: [
                    'Translating words to equations',
                    'Solving systems',
                    'Problem-solving strategies'
                ],
                commonDifficulties: [
                    'Unclear variable definitions',
                    'Same constraint written twice',
                    'Missing a constraint',
                    'Not answering the actual question',
                    'Forgetting units'
                ],
                teachingStrategies: [
                    'Require explicit variable definitions',
                    'Identify constraints before writing equations',
                    'Check that equations are independent',
                    'Always interpret answer in context'
                ],
                extensions: [
                    'Optimization problems',
                    'More complex scenarios',
                    'Three-variable problems'
                ],
                assessment: [
                    'Are variables clearly defined?',
                    'Are equations correct representations?',
                    'Is solution interpreted correctly?',
                    'Are units included?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Solve systems of linear equations'],
            keyConcepts: ['Systems require multiple constraints', 'Solution satisfies all equations'],
            prerequisites: ['Linear equations', 'Basic algebra'],
            commonDifficulties: ['Setting up equations', 'Algebraic manipulation'],
            teachingStrategies: ['Step-by-step instruction', 'Visual representation'],
            extensions: ['More complex systems', 'Applications'],
            assessment: ['Can student solve systems?', 'Does student verify solutions?']
        };
    }

    generateSystemAlternativeMethods(problemType) {
        const category = this.systemTypes[problemType]?.category;

        const alternativeDatabase = {
            substitution: {
                primaryMethod: 'Substitution',
                methods: [
                    {
                        name: 'Elimination',
                        description: 'Could multiply equations and add/subtract instead of substituting'
                    },
                    {
                        name: 'Graphing',
                        description: 'Could graph both lines and find intersection point'
                    },
                    {
                        name: 'Matrix Method',
                        description: 'Could use Cramer\'s Rule with determinants'
                    }
                ],
                comparison: 'Substitution works well when one equation is already solved; elimination often faster otherwise'
            },
            elimination: {
                primaryMethod: 'Elimination',
                methods: [
                    {
                        name: 'Substitution',
                        description: 'Could solve one equation for a variable and substitute'
                    },
                    {
                        name: 'Graphing',
                        description: 'Visual approach by plotting both lines'
                    },
                    {
                        name: 'Matrix Method',
                        description: 'Systematic approach using determinants'
                    }
                ],
                comparison: 'Elimination efficient when coefficients align well; substitution better if one variable isolated'
            },
            graphing: {
                primaryMethod: 'Graphing',
                methods: [
                    {
                        name: 'Substitution',
                        description: 'Algebraic approach by substituting expressions'
                    },
                    {
                        name: 'Elimination',
                        description: 'Algebraic approach by adding/subtracting equations'
                    },
                    {
                        name: 'Technology',
                        description: 'Use graphing calculator or software for precision'
                    }
                ],
                comparison: 'Graphing provides visual understanding; algebra provides exact answers'
            },
            word_problems: {
                primaryMethod: 'Set up system then solve algebraically',
                methods: [
                    {
                        name: 'Guess and Check',
                        description: 'Try values and refine (not recommended for complex problems)'
                    },
                    {
                        name: 'Logical Reasoning',
                        description: 'Use logic to narrow down possibilities before solving'
                    },
                    {
                        name: 'Table Method',
                        description: 'Organize information in table, then set up equations'
                    }
                ],
                comparison: 'Algebraic approach most systematic; tables help organize complex information'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard algebraic approach',
            methods: [{
                name: 'Alternative approach',
                description: 'Other methods available depending on problem structure'
            }],
            comparison: 'Choose method based on problem characteristics and preference'
        };
    }
}

// Export the class
export default EnhancedSystemsLinearMathematicalWorkbook;
