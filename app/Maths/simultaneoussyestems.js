// Enhanced Simultaneous Systems Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedSimultaneousSystemsWorkbook {
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
        this.initializeSystemSolvers();
        this.initializeSystemLessons();
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
        this.initializeHistoricalContext();
        this.initializeMethodComparisonDatabase();
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

    initializeSystemSolvers() {
        this.systemTypes = {
            system_2x2_substitution: {
                patterns: [
                    /substitution/i,
                    /solve.*by.*substitution/i,
                    /2.*equation.*2.*unknown/i
                ],
                solver: this.solve2x2Substitution.bind(this),
                name: '2×2 System - Substitution Method',
                category: 'system_2x2',
                description: 'Solve 2-equation, 2-unknown system using substitution'
            },

            system_2x2_elimination: {
                patterns: [
                    /elimination/i,
                    /solve.*by.*elimination/i,
                    /addition.*method/i
                ],
                solver: this.solve2x2Elimination.bind(this),
                name: '2×2 System - Elimination Method',
                category: 'system_2x2',
                description: 'Solve 2-equation, 2-unknown system using elimination'
            },

            system_2x2_graphical: {
                patterns: [
                    /graph/i,
                    /graphical.*method/i,
                    /intersection/i
                ],
                solver: this.solve2x2Graphical.bind(this),
                name: '2×2 System - Graphical Method',
                category: 'system_2x2',
                description: 'Solve by graphing both equations and finding intersection'
            },

            system_2x2_matrix: {
                patterns: [
                    /matrix/i,
                    /cramer/i,
                    /determinant/i
                ],
                solver: this.solve2x2Matrix.bind(this),
                name: '2×2 System - Matrix Method',
                category: 'system_2x2',
                description: 'Solve using matrices and Cramer\'s rule'
            },

            system_3x3_elimination: {
                patterns: [
                    /3.*equation.*3.*unknown/i,
                    /3x3.*elimination/i,
                    /three.*variable/i
                ],
                solver: this.solve3x3Elimination.bind(this),
                name: '3×3 System - Elimination Method',
                category: 'system_3x3',
                description: 'Solve 3-equation, 3-unknown system using elimination'
            },

            system_3x3_substitution: {
                patterns: [
                    /3x3.*substitution/i,
                    /three.*equation.*substitution/i
                ],
                solver: this.solve3x3Substitution.bind(this),
                name: '3×3 System - Substitution Method',
                category: 'system_3x3',
                description: 'Solve 3-equation, 3-unknown system using substitution'
            },

            system_3x3_matrix: {
                patterns: [
                    /3x3.*matrix/i,
                    /three.*variable.*matrix/i,
                    /3.*equation.*determinant/i
                ],
                solver: this.solve3x3Matrix.bind(this),
                name: '3×3 System - Matrix Method',
                category: 'system_3x3',
                description: 'Solve using 3×3 matrices and Cramer\'s rule'
            },

            word_problem_2var: {
                patterns: [
                    /two.*variable.*word/i,
                    /mixture.*problem/i,
                    /age.*two.*people/i,
                    /coin.*problem/i
                ],
                solver: this.solveWordProblem2Var.bind(this),
                name: '2-Variable Word Problems',
                category: 'word_problems',
                description: 'Real-world problems requiring 2 equations'
            },

            word_problem_3var: {
                patterns: [
                    /three.*variable.*word/i,
                    /three.*unknown/i
                ],
                solver: this.solveWordProblem3Var.bind(this),
                name: '3-Variable Word Problems',
                category: 'word_problems',
                description: 'Real-world problems requiring 3 equations'
            },

            special_cases_2x2: {
                patterns: [
                    /no.*solution.*2x2/i,
                    /infinite.*solution.*2x2/i,
                    /inconsistent/i,
                    /dependent/i
                ],
                solver: this.solveSpecialCases2x2.bind(this),
                name: 'Special Cases - 2×2 Systems',
                category: 'special_cases',
                description: 'Inconsistent or dependent 2×2 systems'
            },

            special_cases_3x3: {
                patterns: [
                    /no.*solution.*3x3/i,
                    /infinite.*solution.*3x3/i
                ],
                solver: this.solveSpecialCases3x3.bind(this),
                name: 'Special Cases - 3×3 Systems',
                category: 'special_cases',
                description: 'Inconsistent or dependent 3×3 systems'
            }
        };
    }

    initializeSystemLessons() {
        this.lessons = {
            system_2x2_basics: {
                title: "2×2 Systems of Linear Equations - Fundamentals",
                concepts: [
                    "A system is two or more equations with the same variables",
                    "Solution is an ordered pair (x, y) that satisfies both equations",
                    "Three possible outcomes: unique solution, no solution, infinite solutions",
                    "Geometrically: intersection of two lines"
                ],
                theory: "Systems of equations represent multiple constraints that must be satisfied simultaneously. The solution is the point(s) where all equations are true at the same time.",
                keyFormulas: {
                    "General 2×2 System": "a₁x + b₁y = c₁\na₂x + b₂y = c₂",
                    "Unique Solution": "Lines intersect at one point",
                    "No Solution": "Parallel lines (inconsistent system)",
                    "Infinite Solutions": "Same line (dependent system)"
                },
                solutionMethods: [
                    "Substitution: Solve one equation for one variable, substitute into other",
                    "Elimination: Add/subtract equations to eliminate one variable",
                    "Graphical: Graph both lines and find intersection",
                    "Matrix: Use matrices and determinants"
                ],
                applications: [
                    "Mixture problems",
                    "Rate and distance problems",
                    "Cost and revenue analysis",
                    "Age problems"
                ]
            },

            substitution_method: {
                title: "Substitution Method for Systems",
                concepts: [
                    "Solve one equation for one variable in terms of the other",
                    "Substitute this expression into the second equation",
                    "Solve the resulting single-variable equation",
                    "Back-substitute to find the other variable"
                ],
                theory: "Substitution reduces a system of equations to a single equation by expressing one variable in terms of another.",
                keyFormulas: {
                    "Step 1": "From equation 1: y = expression in x (or x = expression in y)",
                    "Step 2": "Substitute into equation 2",
                    "Step 3": "Solve for remaining variable",
                    "Step 4": "Back-substitute to find other variable"
                },
                bestUsedWhen: [
                    "One equation already solved for a variable",
                    "One variable has coefficient of 1 or -1",
                    "Coefficients are easy to work with",
                    "System has fractions (can avoid LCD)"
                ],
                advantages: [
                    "Natural and intuitive process",
                    "Works well when one variable is isolated",
                    "No need to find LCD with fractions"
                ],
                disadvantages: [
                    "Can lead to messy fractions",
                    "More steps than elimination sometimes",
                    "Substitution expression can be complex"
                ]
            },

            elimination_method: {
                title: "Elimination (Addition) Method for Systems",
                concepts: [
                    "Multiply equations to create opposite coefficients for one variable",
                    "Add equations to eliminate that variable",
                    "Solve the resulting single-variable equation",
                    "Back-substitute to find the other variable"
                ],
                theory: "Elimination uses the addition property of equality to combine equations in a way that eliminates one variable.",
                keyFormulas: {
                    "Step 1": "Multiply equations to get opposite coefficients",
                    "Step 2": "Add equations to eliminate one variable",
                    "Step 3": "Solve for remaining variable",
                    "Step 4": "Substitute back to find other variable"
                },
                bestUsedWhen: [
                    "Coefficients are already opposites or equal",
                    "Easy to create opposite coefficients",
                    "Both equations in standard form",
                    "Avoiding fractions is desired"
                ],
                advantages: [
                    "Often faster than substitution",
                    "Can avoid fractions",
                    "Systematic and algorithmic",
                    "Works well for larger systems"
                ],
                disadvantages: [
                    "Requires finding appropriate multipliers",
                    "Can create large numbers",
                    "More mechanical, less intuitive"
                ]
            },

            graphical_method: {
                title: "Graphical Method for Systems",
                concepts: [
                    "Write each equation in slope-intercept form (y = mx + b)",
                    "Graph both lines on the same coordinate plane",
                    "Identify the intersection point (if it exists)",
                    "The intersection is the solution"
                ],
                theory: "Graphically, a system of two linear equations represents two lines. The solution is where they intersect.",
                keyFormulas: {
                    "Slope-Intercept Form": "y = mx + b",
                    "Intersection Point": "(x, y) where both equations true",
                    "Parallel Lines": "Same slope, different y-intercepts → no solution",
                    "Same Line": "Same slope and y-intercept → infinite solutions"
                },
                bestUsedWhen: [
                    "Visual understanding desired",
                    "Approximate solution acceptable",
                    "Verifying algebraic solution",
                    "Understanding types of solutions"
                ],
                advantages: [
                    "Visual and intuitive",
                    "Shows all three solution types clearly",
                    "Good for conceptual understanding",
                    "Useful for verification"
                ],
                disadvantages: [
                    "Not precise unless intersection is at integers",
                    "Time-consuming to graph accurately",
                    "Difficult with large or fractional solutions",
                    "Limited to 2 variables"
                ]
            },

            matrix_method: {
                title: "Matrix Method (Cramer's Rule) for Systems",
                concepts: [
                    "Write system in matrix form: AX = B",
                    "Calculate determinant of coefficient matrix",
                    "Use Cramer's rule to find each variable",
                    "Check determinant for special cases"
                ],
                theory: "Matrix methods use determinants to solve systems systematically. Cramer's rule provides a formula for each variable.",
                keyFormulas: {
                    "Matrix Form": "[a₁ b₁][x] = [c₁]\n[a₂ b₂][y]   [c₂]",
                    "Determinant": "det(A) = a₁b₂ - a₂b₁",
                    "Cramer's Rule x": "x = det(Aₓ) / det(A)",
                    "Cramer's Rule y": "y = det(Aᵧ) / det(A)"
                },
                bestUsedWhen: [
                    "System is in standard form",
                    "Determinant is easy to calculate",
                    "Multiple systems with same coefficients",
                    "Programming or computational solving"
                ],
                advantages: [
                    "Systematic and algorithmic",
                    "Extends to larger systems",
                    "Easy to program",
                    "Determinant reveals solution type"
                ],
                disadvantages: [
                    "Requires matrix knowledge",
                    "More abstract than other methods",
                    "Can involve large calculations",
                    "Determinant of zero requires special handling"
                ]
            },

            system_3x3_basics: {
                title: "3×3 Systems of Linear Equations",
                concepts: [
                    "Three equations with three unknowns (x, y, z)",
                    "Solution is an ordered triple (x, y, z)",
                    "Three possible outcomes: unique solution, no solution, infinite solutions",
                    "Geometrically: intersection of three planes"
                ],
                theory: "3×3 systems represent three constraints in 3D space. The solution is the point where all three planes intersect.",
                keyFormulas: {
                    "General 3×3 System": "a₁x + b₁y + c₁z = d₁\na₂x + b₂y + c₂z = d₂\na₃x + b₃y + c₃z = d₃",
                    "Unique Solution": "Three planes intersect at one point",
                    "No Solution": "No common point (planes don't all intersect)",
                    "Infinite Solutions": "Planes intersect along a line or coincide"
                },
                solutionMethods: [
                    "Elimination: Reduce to 2×2 system, then solve",
                    "Substitution: Less common for 3×3",
                    "Matrix: Cramer's rule or row reduction",
                    "Technology: Calculator or computer software"
                ],
                applications: [
                    "3D geometry problems",
                    "Chemistry mixture problems",
                    "Engineering load balancing",
                    "Investment portfolio problems"
                ]
            },

            elimination_3x3: {
                title: "Elimination Method for 3×3 Systems",
                concepts: [
                    "Eliminate one variable from two pairs of equations",
                    "Results in 2×2 system with two variables",
                    "Solve the 2×2 system",
                    "Back-substitute to find third variable"
                ],
                theory: "Systematic elimination reduces 3×3 to 2×2, then to single variable equation.",
                keyFormulas: {
                    "Step 1": "Eliminate same variable from two pairs of equations",
                    "Step 2": "Solve resulting 2×2 system",
                    "Step 3": "Back-substitute to find third variable",
                    "Step 4": "Verify solution in all three original equations"
                },
                strategicApproach: [
                    "Choose variable with easiest coefficients to eliminate",
                    "Create two new equations without that variable",
                    "Solve the 2×2 system using any method",
                    "Substitute back to find eliminated variable",
                    "Always verify in all original equations"
                ],
                commonPitfalls: [
                    "Eliminating different variables from each pair",
                    "Arithmetic errors with larger numbers",
                    "Forgetting to back-substitute",
                    "Not verifying in all three equations"
                ]
            },

            special_cases: {
                title: "Special Cases in Systems of Equations",
                concepts: [
                    "Inconsistent systems: No solution (contradictory equations)",
                    "Dependent systems: Infinite solutions (equivalent equations)",
                    "Recognition through elimination or determinants",
                    "Graphical interpretation"
                ],
                theory: "Not all systems have unique solutions. Parallel lines or identical equations create special cases.",
                keyFormulas: {
                    "No Solution (2×2)": "0 = non-zero (contradiction)",
                    "Infinite Solutions (2×2)": "0 = 0 (identity)",
                    "Determinant Test": "det(A) = 0 → no unique solution"
                },
                recognition: {
                    "During Elimination": [
                        "If you get 0 = non-zero number → No solution",
                        "If you get 0 = 0 → Infinite solutions",
                        "Continue elimination to verify"
                    ],
                    "Graphically (2×2)": [
                        "Parallel lines → No solution",
                        "Same line → Infinite solutions",
                        "Intersecting lines → Unique solution"
                    ],
                    "Using Determinant": [
                        "det(A) ≠ 0 → Unique solution",
                        "det(A) = 0 → No solution or infinite solutions",
                        "Check further to distinguish"
                    ]
                },
                applications: [
                    "Identifying inconsistent constraints",
                    "Recognizing redundant information",
                    "Understanding geometric relationships"
                ]
            },

            word_problems_systems: {
                title: "Word Problems with Systems of Equations",
                concepts: [
                    "Identify unknowns and assign variables",
                    "Translate conditions into equations",
                    "Solve the resulting system",
                    "Interpret solution in context"
                ],
                theory: "Many real-world problems involve multiple constraints, requiring systems of equations.",
                problemTypes: {
                    "Mixture Problems": "Combine different concentrations or values",
                    "Rate Problems": "Distance, rate, time with multiple objects",
                    "Age Problems": "Relationships between ages at different times",
                    "Coin/Money Problems": "Different denominations with total value",
                    "Geometry Problems": "Perimeter, area with multiple unknowns",
                    "Investment Problems": "Multiple investments with different rates"
                },
                solutionStrategy: [
                    "Read problem carefully, identify what's asked",
                    "Define variables clearly (x = ..., y = ...)",
                    "Write equation for each piece of information",
                    "Solve system using appropriate method",
                    "Check solution makes sense in context",
                    "Answer question with units"
                ],
                commonPhrases: {
                    "together/combined": "addition",
                    "difference": "subtraction",
                    "ratio": "division or proportion",
                    "per/each": "multiplication",
                    "twice/double": "multiply by 2",
                    "more than": "addition",
                    "less than": "subtraction"
                }
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            substitution: {
                'Solve for variable': [
                    'Not fully isolating the variable',
                    'Sign errors when moving terms',
                    'Forgetting to distribute negative signs'
                ],
                'Substitute expression': [
                    'Substituting into wrong equation',
                    'Forgetting to use parentheses around substituted expression',
                    'Not substituting for all instances of variable'
                ],
                'Solve resulting equation': [
                    'Arithmetic errors with fractions',
                    'Sign errors when simplifying',
                    'Forgetting to distribute'
                ],
                'Back-substitute': [
                    'Substituting into wrong equation',
                    'Arithmetic errors in final calculation',
                    'Mixing up which variable is which'
                ]
            },
            elimination: {
                'Multiply equations': [
                    'Multiplying only one side of equation',
                    'Choosing wrong multipliers',
                    'Sign errors when multiplying by negative'
                ],
                'Add equations': [
                    'Adding when should subtract (or vice versa)',
                    'Not eliminating variable completely',
                    'Arithmetic errors in addition'
                ],
                'Solve for first variable': [
                    'Division errors',
                    'Sign mistakes',
                    'Not simplifying fully'
                ],
                'Back-substitute': [
                    'Using wrong equation',
                    'Substituting wrong value',
                    'Computational errors'
                ]
            },
            system_3x3: {
                'Eliminate first variable': [
                    'Eliminating different variables from different pairs',
                    'Complex arithmetic errors',
                    'Losing track of equations'
                ],
                'Solve 2×2 system': [
                    'All errors from 2×2 systems',
                    'Forgetting this is not the final answer',
                    'Not labeling which variables these are'
                ],
                'Back-substitute twice': [
                    'Substituting in wrong order',
                    'Using wrong pair of values',
                    'Arithmetic errors compound'
                ],
                'Verification': [
                    'Only checking one or two equations',
                    'Arithmetic errors in checking',
                    'Not checking at all'
                ]
            },
            word_problems: {
                'Define variables': [
                    'Unclear or ambiguous definitions',
                    'Mixing up which variable represents what',
                    'Not defining all needed variables'
                ],
                'Write equations': [
                    'Translating words to math incorrectly',
                    'Missing an equation (fewer equations than variables)',
                    'Writing equations that aren\'t independent'
                ],
                'Solve system': [
                    'All algebraic solving errors',
                    'Choosing inefficient method',
                    'Getting lost in calculations'
                ],
                'Interpret solution': [
                    'Forgetting units',
                    'Not answering the actual question asked',
                    'Solution doesn\'t make sense in context'
                ]
            },
            special_cases: {
                'Recognizing no solution': [
                    'Thinking 0 = 5 means x = 5',
                    'Not recognizing contradiction',
                    'Trying to continue solving'
                ],
                'Recognizing infinite solutions': [
                    'Not recognizing identity',
                    'Thinking 0 = 0 means x = 0',
                    'Not expressing solution set correctly'
                ]
            }
        };

        this.errorPrevention = {
            substitution_parentheses: {
                reminder: 'Always put the substituted expression in parentheses',
                method: 'If substituting (2x + 3) for y, write y = (2x + 3)',
                example: 'Wrong: 2·2x + 3 + 5 | Right: 2(2x + 3) + 5'
            },
            elimination_signs: {
                reminder: 'Track signs carefully when multiplying equations',
                method: 'Multiply EVERY term, including the constant',
                example: '2(3x - 4y = 5) becomes 6x - 8y = 10, not 6x - 8y = 5'
            },
            system_3x3_organization: {
                reminder: 'Label equations and keep track of which variable you eliminated',
                method: 'Number equations (1), (2), (3) and label combinations',
                example: 'From (1) and (2) eliminate z: Equation (4). From (2) and (3) eliminate z: Equation (5)'
            },
            back_substitution: {
                reminder: 'Substitute in the correct order and into simple equations',
                method: 'Find one variable, substitute to find next, substitute both to find third',
                example: 'If you found z = 2, substitute into equation with only y and z to find y'
            },
            verify_solutions: {
                reminder: 'Always substitute solution back into ALL original equations',
                method: 'Check each equation separately, show that both/all sides equal',
                example: 'For (2, -1): Check 3(2) + 2(-1) = 4 ✓ and 2(2) - (-1) = 5 ✓'
            },
            word_problem_variables: {
                reminder: 'Write clear variable definitions before setting up equations',
                method: 'Use descriptive letters and write full sentences',
                example: 'Let a = Alice\'s age now, Let b = Bob\'s age now'
            },
            determinant_zero: {
                reminder: 'If determinant is zero, system has no unique solution',
                method: 'Check further to determine if no solution or infinite solutions',
                example: 'det = 0 could mean parallel lines (no solution) or same line (infinite)'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why this method works and mathematical meaning',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Exact sequence of steps to perform',
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
            mixture_concentration: {
                scenario: "Mixing solutions of different concentrations",
                systemType: "2×2",
                example: "Mix 10% acid solution with 30% acid solution to get 15 liters of 20% solution. How much of each?",
                equations: "x + y = 15 (total volume)\n0.10x + 0.30y = 0.20(15) (acid amount)",
                variables: "x = liters of 10% solution, y = liters of 30% solution",
                context: "Chemistry, pharmacy, cooking, manufacturing"
            },
            coin_problem: {
                scenario: "Different denominations with given total value and count",
                systemType: "2×2",
                example: "Jar has 50 coins (dimes and quarters) worth $8.00. How many of each?",
                equations: "d + q = 50 (total coins)\n0.10d + 0.25q = 8.00 (total value)",
                variables: "d = number of dimes, q = number of quarters",
                context: "Money management, vending machines, banking"
            },
            rate_problem: {
                scenario: "Two objects traveling at different rates",
                systemType: "2×2",
                example: "Two cars leave cities 300 miles apart, driving toward each other. One goes 50 mph, other 60 mph. When do they meet?",
                equations: "50t + 60t = 300 (distances sum to total)\nt = t (same time)",
                variables: "t = time until meeting",
                context: "Travel planning, physics, logistics"
            },
            investment_problem: {
                scenario: "Money invested at different interest rates",
                systemType: "2×2",
                example: "$10,000 invested in two accounts. One pays 3%, other 5%. Total interest is $420. How much in each?",
                equations: "x + y = 10000 (total investment)\n0.03x + 0.05y = 420 (total interest)",
                variables: "x = amount at 3%, y = amount at 5%",
                context: "Finance, personal budgeting, banking"
            },
            age_problem: {
                scenario: "Relationships between ages at different times",
                systemType: "2×2",
                example: "Sarah is 3 times as old as Tom. In 5 years, she'll be twice as old. Find their ages.",
                equations: "s = 3t (current relationship)\ns + 5 = 2(t + 5) (future relationship)",
                variables: "s = Sarah's age, t = Tom's age",
                context: "Logic puzzles, family relationships"
            },
            work_rate: {
                scenario: "Workers or machines with different rates",
                systemType: "2×2",
                example: "Pipe A fills pool in 4 hours, Pipe B in 6 hours. How long together?",
                equations: "(1/4 + 1/6)t = 1 (combined rate times time)",
                variables: "t = time to fill together",
                context: "Manufacturing, construction, household tasks"
            },
            geometry_2var: {
                scenario: "Geometric shapes with unknown dimensions",
                systemType: "2×2",
                example: "Rectangle: perimeter 40, length 2 more than width. Find dimensions.",
                equations: "2l + 2w = 40 (perimeter)\nl = w + 2 (length-width relationship)",
                variables: "l = length, w = width",
                context: "Construction, design, land surveying"
            },
            diet_nutrition: {
                scenario: "Meeting nutritional requirements with different foods",
                systemType: "2×2 or 3×3",
                example: "Food A: 2g protein, 5g carbs per serving. Food B: 3g protein, 2g carbs. Need 15g protein, 20g carbs.",
                equations: "2x + 3y = 15 (protein)\n5x + 2y = 20 (carbs)",
                variables: "x = servings of A, y = servings of B",
                context: "Nutrition, health, diet planning"
            },
            chemistry_3var: {
                scenario: "Balancing chemical equations or mixing three substances",
                systemType: "3×3",
                example: "Mix three solutions: Solution A (10% chemical), B (20%), C (40%). Need 100L at 25% concentration.",
                equations: "a + b + c = 100 (total volume)\n0.10a + 0.20b + 0.40c = 0.25(100) (concentration)\nPlus one more constraint",
                variables: "a, b, c = liters of each solution",
                context: "Chemistry labs, industrial mixing"
            },
            ticket_sales: {
                scenario: "Different ticket prices with known revenue and attendance",
                systemType: "2×2",
                example: "Sold 500 tickets: adults $12, children $5. Total revenue $4750. How many of each?",
                equations: "a + c = 500 (total tickets)\n12a + 5c = 4750 (total revenue)",
                variables: "a = adult tickets, c = child tickets",
                context: "Event planning, business, entertainment"
            },
            load_balancing: {
                scenario: "Distributing loads or forces in engineering",
                systemType: "3×3",
                example: "Three cables support a load. Each has tension. Sum of vertical components equals weight.",
                equations: "System of force equilibrium equations",
                variables: "T₁, T₂, T₃ = tensions in cables",
                context: "Engineering, physics, construction"
            },
            inventory_management: {
                scenario: "Tracking items in inventory with different values",
                systemType: "2×2 or 3×3",
                example: "Store has laptops and tablets. Total 50 items worth $75,000. Laptops $2000, tablets $500 each.",
                equations: "l + t = 50 (total items)\n2000l + 500t = 75000 (total value)",
                variables: "l = laptops, t = tablets",
                context: "Business, retail, warehouse management"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            system_2x2: {
                skills: [
                    'Solving linear equations',
                    'Combining like terms',
                    'Working with fractions and decimals',
                    'Substitution',
                    'Distributive property'
                ],
                priorKnowledge: [
                    'Linear equations in two variables',
                    'Graphing lines',
                    'Ordered pairs',
                    'Concept of solution'
                ],
                checkQuestions: [
                    "Solve for x: 2x + 3 = 11",
                    "Solve for y in terms of x: 2x + y = 5",
                    "Simplify: 3(x + 2) - 2x",
                    "Is (2, 3) a solution to x + y = 5?"
                ]
            },
            substitution: {
                skills: [
                    'Isolating variables',
                    'Substituting expressions',
                    'Working with parentheses',
                    'Simplifying algebraic expressions'
                ],
                priorKnowledge: [
                    'Inverse operations',
                    'Combining like terms',
                    'Distributive property',
                    'Order of operations'
                ],
                checkQuestions: [
                    "Solve for y: 2x + y = 10",
                    "Simplify: 3(2x - 1) + 5",
                    "If y = 2x + 3, what is 4y in terms of x?",
                    "Substitute x = 2 into 3x - 5"
                ]
            },
            elimination: {
                skills: [
                    'Multiplying equations',
                    'Adding/subtracting equations',
                    'Finding least common multiple',
                    'Working with opposites'
                ],
                priorKnowledge: [
                    'Adding equations',
                    'Multiplication property of equality',
                    'Combining like terms',
                    'Recognizing opposites'
                ],
                checkQuestions: [
                    "What multiplier makes 3x and -6x opposites? (Multiply first by 2)",
                    "Add the equations: (2x + 3y) + (x - 3y)",
                    "Multiply both sides by 2: 3x + 4y = 10",
                    "What's the opposite of 5x?"
                ]
            },
            matrix_method: {
                skills: [
                    'Matrix notation',
                    'Calculating 2×2 determinants',
                    'Cramer\'s rule',
                    'Interpreting determinant = 0'
                ],
                priorKnowledge: [
                    'Matrix basics',
                    'Determinant concept',
                    'Fraction operations',
                    'Substitution into formulas'
                ],
                checkQuestions: [
                    "Find determinant: |2  3|\n                    |1  4|",
                    "What does determinant = 0 mean?",
                    "Calculate: (2×4) - (3×1)",
                    "Simplify: 10/5"
                ]
            },
            system_3x3: {
                skills: [
                    'All 2×2 system skills',
                    'Systematic elimination',
                    'Organization and tracking',
                    'Back-substitution with multiple variables'
                ],
                priorKnowledge: [
                    'Solving 2×2 systems fluently',
                    'Understanding of 3D space (helpful)',
                    'Advanced algebraic manipulation',
                    'Patience with longer calculations'
                ],
                checkQuestions: [
                    "Solve the 2×2 system: x + y = 5, 2x - y = 4",
                    "Substitute x = 2, y = 3 into 2x + 3y - z = 10 and solve for z",
                    "Simplify: 2(3x - y + 4z) - (x + 2y - z)",
                    "From equations (1) and (2), eliminate z to get equation (4)"
                ]
            },
            word_problems: {
                skills: [
                    'Reading comprehension',
                    'Translating words to equations',
                    'Defining variables',
                    'Interpreting solutions in context'
                ],
                priorKnowledge: [
                    'All algebraic solving skills',
                    'Unit awareness',
                    'Logical reasoning',
                    'Common problem types'
                ],
                checkQuestions: [
                    "If x represents apples and y represents oranges, write: total is 10 fruits",
                    "Write equation: twice a number plus 3 equals 11",
                    "If solution is (5, 3) in a coin problem, what does this mean?",
                    "Convert: 25% to decimal"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            geometric_2x2: {
                description: "System as intersection of two lines",
                analogy: "Finding where two roads cross on a map",
                visualization: "Graph both equations; solution is intersection point",
                suitableFor: ['system_2x2'],
                explanation: "Each equation is a line. Solution is the point on both lines."
            },
            geometric_3x3: {
                description: "System as intersection of three planes",
                analogy: "Finding where three walls meet in a corner of a room",
                visualization: "Three planes in 3D space intersecting at a point",
                suitableFor: ['system_3x3'],
                explanation: "Each equation is a plane in 3D. Solution is the point on all three planes."
            },
            balance_scale: {
                description: "Each equation as a balanced scale",
                analogy: "Two seesaws that must both be balanced",
                visualization: "Two balance scales, each representing an equation",
                suitableFor: ['system_2x2', 'system_3x3'],
                explanation: "Solution values balance both/all scales simultaneously"
            },
            constraint_satisfaction: {
                description: "Finding values satisfying all constraints",
                analogy: "Finding a gift that fits multiple requirements (budget, size, color)",
                visualization: "Venn diagram of overlapping constraints",
                suitableFor: ['all_systems'],
                explanation: "Solution must satisfy every constraint (equation) at once"
            },
            substitution_flowchart: {
                description: "Substitution as a step-by-step process",
                analogy: "Following a recipe where one step feeds into the next",
                visualization: "Flowchart: Solve → Substitute → Solve → Back-substitute",
                suitableFor: ['substitution'],
                explanation: "Each step uses results from previous step"
            },
            elimination_combination: {
                description: "Elimination as combining equations",
                analogy: "Mixing two drinks to create a new one with desired properties",
                visualization: "Adding equations like stacking blocks that cancel out",
                suitableFor: ['elimination'],
                explanation: "Strategic combination eliminates unwanted variable"
            },
            matrix_transform: {
                description: "Matrix method as transformation",
                analogy: "Using a machine that takes inputs and produces outputs",
                visualization: "Matrix operating on variable vector to produce constant vector",
                suitableFor: ['matrix_method'],
                explanation: "Determinants unlock the inverse transformation"
            },
            word_problem_translation: {
                description: "Word problem as translation between languages",
                analogy: "Translating English to mathematics, solving, translating back",
                visualization: "Flow: English → Math → Solution → English answer",
                suitableFor: ['word_problems'],
                explanation: "Each sentence becomes an equation; solution gets interpreted"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner_2x2: [
                {
                    problem: "x + y = 7\nx - y = 3",
                    solution: { x: 5, y: 2 },
                    method: 'elimination',
                    steps: [
                        "Add equations to eliminate y",
                        "2x = 10",
                        "x = 5",
                        "Substitute into first: 5 + y = 7",
                        "y = 2"
                    ],
                    difficulty: 'easy'
                },
                {
                    problem: "y = 2x\nx + y = 9",
                    solution: { x: 3, y: 6 },
                    method: 'substitution',
                    steps: [
                        "Substitute y = 2x into second equation",
                        "x + 2x = 9",
                        "3x = 9",
                        "x = 3",
                        "y = 2(3) = 6"
                    ],
                    difficulty: 'easy'
                },
                {
                    problem: "2x + y = 8\nx + y = 5",
                    solution: { x: 3, y: 2 },
                    method: 'elimination',
                    steps: [
                        "Subtract second from first",
                        "x = 3",
                        "Substitute: 3 + y = 5",
                        "y = 2"
                    ],
                    difficulty: 'easy'
                }
            ],
            intermediate_2x2: [
                {
                    problem: "3x + 2y = 12\n2x - y = 1",
                    solution: { x: 2, y: 3 },
                    method: 'elimination',
                    steps: [
                        "Multiply second by 2: 4x - 2y = 2",
                        "Add to first: 7x = 14",
                        "x = 2",
                        "Substitute: 3(2) + 2y = 12",
                        "6 + 2y = 12",
                        "y = 3"
                    ],
                    difficulty: 'medium'
                },
                {
                    problem: "4x - 3y = 6\n-2x + 5y = 10",
                    solution: { x: 6, y: 6 },
                    method: 'elimination',
                    steps: [
                        "Multiply second by 2: -4x + 10y = 20",
                        "Add to first: 7y = 26... [continues]"
                    ],
                    difficulty: 'medium'
                },
                {
                    problem: "x + 2y = 10\n3x - y = 1",
                    solution: { x: 2, y: 4 },
                    method: 'substitution',
                    steps: [
                        "From first: x = 10 - 2y",
                        "Substitute: 3(10 - 2y) - y = 1",
                        "30 - 6y - y = 1",
                        "30 - 7y = 1",
                        "y = 4, x = 2"
                    ],
                    difficulty: 'medium'
                }
            ],
            beginner_3x3: [
                {
                    problem: "x + y + z = 6\nx - y + z = 2\nx + y - z = 0",
                    solution: { x: 2, y: 2, z: 2 },
                    method: 'elimination',
                    steps: [
                        "Add (1) and (3): 2x + 2y = 6 → x + y = 3 ... (4)",
                        "Subtract (2) from (1): 2y = 4 → y = 2",
                        "Substitute into (4): x + 2 = 3 → x = 1",
                        "Substitute into (1): 1 + 2 + z = 6 → z = 3"
                    ],
                    difficulty: 'easy'
                }
            ],
            intermediate_3x3: [
                {
                    problem: "2x + y - z = 3\nx - y + 2z = 4\n3x + 2y + z = 10",
                    solution: { x: 2, y: 1, z: 2 },
                    method: 'elimination',
                    steps: [
                        "Eliminate z from (1) and (2)",
                        "Eliminate z from (2) and (3)",
                        "Solve resulting 2×2 system",
                        "Back-substitute for z"
                    ],
                    difficulty: 'medium'
                }
            ],
            word_problems: [
                {
                    problem: "Two numbers sum to 15. Their difference is 3. Find them.",
                    solution: { x: 9, y: 6 },
                    equations: "x + y = 15\nx - y = 3",
                    difficulty: 'easy'
                },
                {
                    problem: "Adult tickets $8, child $5. Sold 100 tickets for $650. How many of each?",
                    solution: { adults: 50, children: 50 },
                    equations: "a + c = 100\n8a + 5c = 650",
                    difficulty: 'medium'
                }
            ]
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            substitution_parentheses: {
                misconception: "When substituting an expression, don't need parentheses",
                reality: "ALWAYS use parentheses around substituted expressions",
                correctiveExample: "If y = 2x + 3 and equation is 4y = 20, write 4(2x + 3) = 20, not 4·2x + 3 = 20",
                commonIn: ['substitution']
            },
            elimination_one_side: {
                misconception: "When multiplying equation to set up elimination, only multiply one side",
                reality: "Must multiply BOTH sides of equation by the same number",
                correctiveExample: "2(3x + y = 5) becomes 6x + 2y = 10, not 6x + 2y = 5",
                commonIn: ['elimination']
            },
            solution_interpretation: {
                misconception: "Solution (3, 5) means x = 3 or x = 5",
                reality: "Ordered pair (3, 5) means x = 3 AND y = 5 simultaneously",
                correctiveExample: "(3, 5) means x = 3 and y = 5 at the same time",
                commonIn: ['all_systems']
            },
            no_solution_means_zero: {
                misconception: "When you get 0 = 5, this means x = 0",
                reality: "0 = 5 is a contradiction, meaning NO SOLUTION exists",
                correctiveExample: "0 = 5 is always false, so no (x, y) values work",
                commonIn: ['special_cases']
            },
            infinite_solutions_zero: {
                misconception: "When you get 0 = 0, this means x = 0",
                reality: "0 = 0 is an identity, meaning INFINITE SOLUTIONS exist",
                correctiveExample: "0 = 0 is always true, so infinitely many (x, y) values work",
                commonIn: ['special_cases']
            },
            three_equations_three_answers: {
                misconception: "In 3×3 system, solve each equation separately to get three answers",
                reality: "All three equations must be satisfied by the SAME (x, y, z) values",
                correctiveExample: "Solution (1, 2, 3) means x=1, y=2, z=3 in ALL equations",
                commonIn: ['system_3x3']
            },
            eliminate_different_variables: {
                misconception: "In 3×3, can eliminate x from one pair, y from another pair",
                reality: "Must eliminate the SAME variable from two pairs to create valid 2×2 system",
                correctiveExample: "Eliminate z from (1)&(2) and from (2)&(3) to get two equations in x and y",
                commonIn: ['system_3x3']
            },
            word_problem_equation_count: {
                misconception: "Can solve for 2 variables with only 1 equation",
                reality: "Need as many independent equations as variables",
                correctiveExample: "2 variables require 2 equations; 3 variables require 3 equations",
                commonIn: ['word_problems']
            },
            determinant_solution: {
                misconception: "The determinant IS the solution",
                reality: "Determinant is used to calculate the solution; it's not the answer itself",
                correctiveExample: "det(A) = -5 doesn't mean x = -5; use Cramer's rule formulas",
                commonIn: ['matrix_method']
            },
            back_substitute_wrong_equation: {
                misconception: "Can back-substitute into any equation",
                reality: "Choose simplest equation, or one with fewest variables",
                correctiveExample: "If you found x = 2, substitute into equation with only x and y (not all three variables)",
                commonIn: ['all_systems']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            system_concept: {
                analogy: "Finding a restaurant that satisfies everyone's requirements",
                explanation: "Just like a restaurant must satisfy multiple people's preferences (vegetarian, budget, location), a solution must satisfy multiple equations",
                suitableFor: ['all_systems'],
                ELI5: "Imagine you and your friend both want different things. The answer is something you BOTH like!"
            },
            substitution_method: {
                analogy: "Following a treasure map with clues",
                explanation: "First clue tells you where to look (solve for one variable). Use that to decode second clue (substitute). Final location is the treasure (solution).",
                suitableFor: ['substitution'],
                ELI5: "It's like when mom says 'get the toy from the red box', and you first have to find which box is red!"
            },
            elimination_method: {
                analogy: "Removing obstacles to clear a path",
                explanation: "Like clearing snow from a path - you combine efforts (equations) to eliminate the obstacle (variable) and make progress",
                suitableFor: ['elimination'],
                ELI5: "Imagine you have two piles of toys. You arrange them so that some toys disappear (cancel out), and you can count what's left!"
            },
            graphical_intersection: {
                analogy: "Finding where two roads cross",
                explanation: "Each equation is like a road. The solution is where both roads meet - the intersection point.",
                suitableFor: ['graphical'],
                ELI5: "It's like finding where two paths in a park meet. That's the special spot that's on BOTH paths!"
            },
            system_3x3: {
                analogy: "Juggling three balls that must land together",
                explanation: "Managing three variables is like juggling three balls - you need all three to come together at the right point",
                suitableFor: ['system_3x3'],
                ELI5: "It's like having three puzzles and finding the one piece that fits in ALL THREE puzzles at the same time!"
            },
            no_solution: {
                analogy: "Looking for a purple apple that doesn't exist",
                explanation: "Some things are impossible - like two parallel roads never meeting. That's a system with no solution.",
                suitableFor: ['special_cases'],
                ELI5: "It's like trying to be at home and at school at the same time - impossible! Some problems are like that."
            },
            infinite_solutions: {
                analogy: "Driving on the same road (one road with two names)",
                explanation: "If two equations represent the same line (like a road with two names), any point on that road is a solution",
                suitableFor: ['special_cases'],
                ELI5: "It's like when you and your friend both want ice cream - there are LOTS of flavors that would make you both happy!"
            },
            word_problem_translation: {
                analogy: "Being a translator between languages",
                explanation: "You translate English to math language, solve in math, then translate the answer back to English",
                suitableFor: ['word_problems'],
                ELI5: "It's like when someone speaks another language - you need to understand what they mean, think about it, then answer in their language!"
            },
            matrix_method: {
                analogy: "Using a combination lock with the right code",
                explanation: "The matrix and determinants are like a lock combination - use the right formula (code) to unlock the solution",
                suitableFor: ['matrix_method'],
                ELI5: "It's like a secret code machine! You put in the puzzle, the machine does magic math, and out comes the answer!"
            },
            back_substitution: {
                analogy: "Working backwards on a checklist",
                explanation: "Like finishing tasks in reverse order - found z, use it to find y, use both to find x",
                suitableFor: ['system_3x3'],
                ELI5: "It's like building blocks - you find one block first, use it to place the next block, then use both to place the last block!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            substitution: {
                level1: "Which equation would be easiest to solve for one variable?",
                level2: "Look for a variable with coefficient 1 or -1",
                level3: "Solve the simpler equation for that variable",
                level4: "Substitute that expression into the other equation"
            },
            elimination: {
                level1: "Look at the coefficients of x and y in both equations",
                level2: "Which variable would be easiest to eliminate?",
                level3: "What would you multiply each equation by to create opposite coefficients?",
                level4: "Multiply equation 1 by {m1} and equation 2 by {m2}, then add"
            },
            system_3x3: {
                level1: "You need to eliminate the same variable from two different pairs of equations",
                level2: "Choose the variable with simplest coefficients to eliminate first",
                level3: "Eliminate that variable from equations (1)&(2), then from equations (2)&(3)",
                level4: "This creates a 2×2 system - solve it, then back-substitute"
            },
            word_problem: {
                level1: "What quantities are unknown? These are your variables.",
                level2: "Read each piece of information - can you write an equation?",
                level3: "You need as many equations as variables. Do you have enough information?",
                level4: "Set up your equations, then solve using substitution or elimination"
            },
            special_case_recognition: {
                level1: "Continue solving normally - special cases reveal themselves",
                level2: "If you eliminate a variable and get a statement with no variables, what does it mean?",
                level3: "If the statement is false (like 0 = 5), there's no solution",
                level4: "If the statement is true (like 0 = 0), there are infinite solutions"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Solve: x + y = 10, x - y = 4",
                    answer: { x: 7, y: 3 },
                    assesses: "basic_2x2_elimination",
                    difficulty: "basic"
                },
                {
                    question: "Solve: y = 2x, x + y = 9",
                    answer: { x: 3, y: 6 },
                    assesses: "basic_2x2_substitution",
                    difficulty: "basic"
                },
                {
                    question: "Solve: 2x + y = 8, x - y = 1",
                    answer: { x: 3, y: 2 },
                    assesses: "intermediate_2x2",
                    difficulty: "intermediate"
                },
                {
                    question: "Solve: x + y + z = 6, x - y + z = 2, x + y - z = 0",
                    answer: { x: 2, y: 2, z: 2 },
                    assesses: "basic_3x3",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "For the system y = 3x and 2x + y = 10, what's the first step using substitution?",
                    options: [
                        "Solve first equation for x",
                        "Substitute 3x for y in second equation",
                        "Add the equations",
                        "Multiply first equation by 2"
                    ],
                    correct: "Substitute 3x for y in second equation",
                    explanation: "Since y is already isolated, substitute its value into the other equation"
                },
                {
                    question: "For x + 2y = 8 and 3x - 2y = 4, which method is most efficient?",
                    options: [
                        "Substitution",
                        "Elimination (y terms already opposite)",
                        "Graphing",
                        "Matrix method"
                    ],
                    correct: "Elimination (y terms already opposite)",
                    explanation: "The y coefficients are already opposites (+2y and -2y)"
                },
                {
                    question: "If elimination gives you 0 = 0, what does this mean?",
                    options: [
                        "x = 0",
                        "No solution",
                        "Infinite solutions",
                        "y = 0"
                    ],
                    correct: "Infinite solutions",
                    explanation: "0 = 0 is always true, indicating dependent equations"
                },
                {
                    question: "In a 3×3 system, after eliminating z, you have x + 2y = 7 and 3x - y = 5. What next?",
                    options: [
                        "Solve for z",
                        "Solve this 2×2 system for x and y",
                        "Start over with different variable",
                        "Graph the equations"
                    ],
                    correct: "Solve this 2×2 system for x and y",
                    explanation: "Solve the 2×2 system, then back-substitute to find z"
                }
            ],
            summative: [
                {
                    question: "Solve: 3x - 2y = 12, 2x + y = 11",
                    answer: { x: 5, y: 1.5 },
                    showsWork: true,
                    rubric: {
                        choose_method: 1,
                        eliminate_variable: 2,
                        solve_first_variable: 1,
                        back_substitute: 1,
                        verify: 1
                    }
                },
                {
                    question: "Solve: x + y + z = 9, 2x - y + z = 8, x + 2y - z = 5",
                    answer: { x: 4, y: 2, z: 3 },
                    showsWork: true,
                    rubric: {
                        eliminate_first_variable: 2,
                        solve_2x2_system: 2,
                        back_substitute: 2,
                        verify_all_three: 2
                    }
                }
            ],
            byDifficulty: {
                easy_2x2: [
                    "x + y = 5, x - y = 1",
                    "y = x, x + y = 8",
                    "x = 3, x + y = 7",
                    "2x + y = 9, x + y = 6"
                ],
                medium_2x2: [
                    "2x + 3y = 13, x - y = 1",
                    "3x - 2y = 4, 2x + y = 9",
                    "4x - y = 10, 2x + 3y = 14",
                    "x + 2y = 10, 3x - y = 1"
                ],
                hard_2x2: [
                    "3x - 4y = 2, 5x + 3y = 17",
                    "2x + 5y = 1, 3x - 2y = 12",
                    "0.5x + 0.3y = 2.3, 0.2x - 0.4y = -0.8"
                ],
                easy_3x3: [
                    "x + y + z = 6, x = 2, y = 1",
                    "x + y + z = 9, x - y = 1, z = 3",
                    "x + y = 5, y + z = 7, x + z = 6"
                ],
                medium_3x3: [
                    "x + 2y + z = 9, 2x - y + z = 3, x + y - z = 0",
                    "2x + y - z = 3, x - y + 2z = 4, 3x + 2y + z = 10"
                ],
                hard_3x3: [
                    "2x - 3y + z = 5, x + 2y - 3z = -8, 3x - y + 2z = 12",
                    "3x + 2y - z = 7, 2x - y + 3z = 5, x + 3y + 2z = 11"
                ]
            },
            byObjective: {
                canSolveBySubstitution: [
                    "y = 2x, x + y = 12",
                    "x = y + 3, 2x + y = 15",
                    "y = 3x - 1, 4x - y = 5"
                ],
                canSolveByElimination: [
                    "x + y = 10, x - y = 4",
                    "2x + 3y = 12, 2x - y = 4",
                    "3x + 2y = 14, 2x + 2y = 10"
                ],
                canSolve3x3: [
                    "x + y + z = 6, x - y + z = 2, x + y - z = 0",
                    "2x + y - z = 3, x - y + 2z = 4, 3x + 2y + z = 10"
                ],
                canRecognizeSpecialCases: [
                    "2x + y = 5, 4x + 2y = 10 (infinite)",
                    "x + y = 3, 2x + 2y = 8 (no solution)",
                    "3x - y = 7, 6x - 2y = 14 (infinite)"
                ],
                canSolveWordProblems: [
                    "Two numbers sum to 20 and differ by 4. Find them.",
                    "Adult tickets $10, child $6. Sold 50 tickets for $400. How many of each?",
                    "Three numbers sum to 15. First is twice the second. Third is 3. Find all three."
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            methodSelection: {
                "One variable isolated": "Use substitution - it's already set up!",
                "Coefficients are opposites": "Use elimination - they'll cancel immediately",
                "Coefficients are equal": "Use elimination - subtract equations",
                "Simple integer coefficients": "Either method works well",
                "Fractions or decimals": "Substitution may avoid finding LCD",
                "3×3 system": "Use elimination (or matrix if comfortable)",
                "Word problem": "Set up system, then choose best method",
                "Checking solution": "Graphing provides visual verification"
            },
            substitutionStrategy: {
                "Choose which variable": "Pick one already isolated, or one with coefficient ±1",
                "Solve for that variable": "Isolate it completely in terms of other variable(s)",
                "Substitute carefully": "Use parentheses around entire expression",
                "Simplify thoroughly": "Distribute and combine like terms",
                "Back-substitute correctly": "Use simple equation for back-substitution"
            },
            eliminationStrategy: {
                "Choose which variable": "Pick one with easiest coefficients to match",
                "Find multipliers": "Determine what to multiply each equation by",
                "Decide add or subtract": "Add if opposites, subtract if same",
                "Eliminate completely": "Variable should cancel to zero coefficient",
                "Solve for remaining": "Now a single-variable equation",
                "Back-substitute": "Use simplest original equation"
            },
            system3x3Strategy: {
                "Choose variable to eliminate": "Pick one with simplest coefficients across equations",
                "Eliminate from two pairs": "Use equations (1)&(2), then (1)&(3) or (2)&(3)",
                "Create 2×2 system": "Two new equations in same two variables",
                "Solve 2×2 system": "Use substitution or elimination",
                "Back-substitute twice": "Find third variable using any original equation",
                "Verify in all three": "Check solution in all original equations"
            },
            wordProblemStrategy: {
                "Read carefully": "Understand what's being asked",
                "Define variables clearly": "Write complete sentences: 'Let x = ...'",
                "Identify all constraints": "Each piece of info can become an equation",
                "Write equations": "Translate each constraint to math",
                "Check equation count": "Need as many equations as variables",
                "Solve system": "Use appropriate method",
                "Interpret solution": "Answer original question with units",
                "Verify reasonableness": "Does answer make sense in context?"
            },
            specialCaseStrategy: {
                "Continue solving normally": "Don't try to predict outcome",
                "Watch for contradictions": "0 = non-zero means no solution",
                "Watch for identities": "0 = 0 means infinite solutions",
                "Describe solution set": "For infinite, express relationship between variables",
                "Verify by graphing": "Parallel lines (no solution) or same line (infinite)"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "2×2 Substitution Sprint",
                    timeLimit: 180,
                    problems: [
                        "y = x, x + y = 10",
                        "y = 2x, x + y = 9",
                        "x = y + 1, x + y = 7",
                        "y = 3x - 2, 2x - y = 4",
                        "x = 2y, 3x - y = 10"
                    ]
                },
                {
                    name: "2×2 Elimination Sprint",
                    timeLimit: 240,
                    problems: [
                        "x + y = 8, x - y = 2",
                        "2x + y = 11, 2x - y = 5",
                        "3x + y = 14, x + y = 6",
                        "x + 2y = 12, x - y = 3",
                        "2x + 3y = 16, x + 3y = 10"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery System",
                    problem: "Two equations give solution (3, 5). One equation is x + y = 8. What could the other be?",
                    solution: "Many possibilities: x - y = -2, 2x - y = 1, 3x + 2y = 19, etc.",
                    extension: "Find three different possibilities"
                },
                {
                    name: "Fill in the Coefficients",
                    problem: "□x + △y = 12 and x + y = 5 have solution (2, 3). Find □ and △.",
                    solution: "□(2) + △(3) = 12 and 2 + 3 = 5, so test values: □ = 3, △ = 2 works",
                    method: "Substitute known solution into equations"
                },
                {
                    name: "Build Your Own",
                    challenge: "Create a system with solution (4, 1)",
                    constraints: "Both equations must be different, integer coefficients only",
                    sampleSolution: "x + y = 5 and 2x - y = 7"
                }
            ],
            applications: [
                {
                    scenario: "Concert Tickets",
                    problem: "Floor seats $50, balcony $30. Sold 200 tickets for $8000. How many of each?",
                    equations: "f + b = 200\n50f + 30b = 8000",
                    solution: "100 floor, 100 balcony",
                    context: "Event planning, revenue analysis"
                },
                {
                    scenario: "Mixture Problem",
                    problem: "Mix 20% acid with 50% acid to get 12L of 35% acid. How much of each?",
                    equations: "x + y = 12\n0.20x + 0.50y = 0.35(12)",
                    solution: "6L of each",
                    context: "Chemistry, manufacturing"
                },
                {
                    scenario: "Investment Portfolio",
                    problem: "$20,000 invested at 4% and 6%. Total interest $1000. How much at each rate?",
                    equations: "x + y = 20000\n0.04x + 0.06y = 1000",
                    solution: "$10,000 at each rate",
                    context: "Personal finance"
                }
            ],
            debugging: [
                {
                    name: "Find the Substitution Error",
                    incorrectWork: [
                        "Given: y = 2x + 1 and 3x + y = 16",
                        "Substitute: 3x + 2x + 1 = 16  [ERROR: forgot parentheses]",
                        "5x + 1 = 16",
                        "x = 3, y = 7"
                    ],
                    correctWork: "3x + (2x + 1) = 16 → 5x + 1 = 16 → x = 3, y = 7 (happens to be correct)",
                    errorType: "Missing parentheses (got lucky with correct answer anyway)"
                },
                {
                    name: "Find the Elimination Error",
                    incorrectWork: [
                        "Given: 2x + 3y = 12 and x - y = 2",
                        "Multiply second by 2: 2x - 2y = 2  [ERROR: should be 4]",
                        "Subtract from first: 5y = 10",
                        "y = 2, x = 4"
                    ],
                    correctAnswer: "y = 2, x = 4 (accidentally correct)",
                    errorType: "Didn't multiply constant term"
                },
                {
                    name: "Find the 3×3 Error",
                    incorrectWork: [
                        "Eliminated x from (1)&(2): 5y + 2z = 10",
                        "Eliminated y from (2)&(3): 4x + 3z = 12  [ERROR: wrong variable]",
                        "Now stuck with incompatible equations"
                    ],
                    correctApproach: "Eliminate same variable from both pairs",
                    errorType: "Eliminated different variables"
                }
            ]
        };
    }

    initializeHistoricalContext() {
        this.historicalContext = {
            ancient_origins: {
                period: "Ancient Babylon and Egypt (2000-1000 BCE)",
                contribution: "Solved systems of equations for practical problems like land measurement",
                context: "Used geometric methods and tables",
                significance: "First systematic approaches to multiple unknowns"
            },
            chinese_mathematics: {
                period: "Ancient China (200 BCE - 200 CE)",
                contribution: "The Nine Chapters on Mathematical Art - matrix methods",
                context: "Used counting rods in grid patterns (early matrix notation)",
                significance: "First documented matrix-like methods for solving systems"
            },
            diophantus: {
                period: "Greece (250 CE)",
                contribution: "Diophantus worked with systems of equations symbolically",
                context: "His 'Arithmetica' influenced algebra development",
                significance: "Early symbolic representation of unknowns"
            },
            islamic_golden_age: {
                period: "Islamic World (800-1200 CE)",
                contribution: "Al-Khwarizmi and others developed systematic algebraic methods",
                context: "'Algorithm' comes from Al-Khwarizmi's name",
                significance: "Formalized algebraic solving techniques"
            },
            renaissance: {
                period: "Europe (1500-1700)",
                contribution: "Descartes connected algebra with geometry",
                context: "Cartesian coordinates allowed geometric interpretation",
                significance: "Systems could be visualized as intersecting lines"
            },
            modern_development: {
                period: "18th-19th Century",
                contribution: "Cramer developed Cramer's rule using determinants",
                context: "Gauss developed systematic elimination (Gaussian elimination)",
                significance: "Modern matrix methods emerged"
            },
            applications: {
                engineering: "Systems essential for circuit analysis, structural engineering",
                economics: "Linear programming, supply-demand equilibrium",
                computer_science: "Computer graphics, machine learning, optimization",
                sciences: "Physics equations, chemistry balancing, biology modeling"
            }
        };
    }

    initializeMethodComparisonDatabase() {
        this.methodComparisons = {
            substitution_vs_elimination: {
                substitution_advantages: [
                    "More intuitive and natural",
                    "Works well when variable already isolated",
                    "Good with fractions (no LCD needed)",
                    "Shows direct cause-and-effect relationship"
                ],
                substitution_disadvantages: [
                    "Can create messy fractions",
                    "Substitution expression can be complex",
                    "More steps sometimes",
                    "Harder to program"
                ],
                elimination_advantages: [
                    "Often faster and cleaner",
                    "More systematic and algorithmic",
                    "Easier to avoid fractions",
                    "Extends better to larger systems"
                ],
                elimination_disadvantages: [
                    "Less intuitive initially",
                    "Requires finding multipliers",
                    "Can create large numbers",
                    "More mechanical"
                ],
                when_to_use_substitution: [
                    "Variable already isolated (y = ...)",
                    "Coefficient of 1 or -1 present",
                    "Avoiding LCD with fractions",
                    "Personal preference"
                ],
                when_to_use_elimination: [
                    "Coefficients already opposite or equal",
                    "Both equations in standard form",
                    "Want to avoid fractions",
                    "Larger systems (3×3 or more)"
                ]
            },
            graphical_vs_algebraic: {
                graphical_advantages: [
                    "Visual and intuitive",
                    "Shows all solution types clearly",
                    "Good for understanding",
                    "Useful for verification"
                ],
                graphical_disadvantages: [
                    "Not precise unless integer solutions",
                    "Time-consuming to graph",
                    "Limited to 2 variables",
                    "Difficult with large/small values"
                ],
                algebraic_advantages: [
                    "Exact and precise",
                    "Works for any numbers",
                    "Extends to any number of variables",
                    "Faster with practice"
                ],
                algebraic_disadvantages: [
                    "More abstract",
                    "Easier to make errors",
                    "Less visual understanding",
                    "Requires algebraic skill"
                ]
            },
            matrix_vs_other_methods: {
                matrix_advantages: [
                    "Systematic and programmatic",
                    "Extends to any size system",
                    "Determinant reveals solution type",
                    "Easy to program/compute"
                ],
                matrix_disadvantages: [
                    "More abstract concept",
                    "Requires matrix knowledge",
                    "Determinant = 0 needs special handling",
                    "Can involve large calculations"
                ],
                when_to_use_matrix: [
                    "Large systems (3×3 or bigger)",
                    "Multiple systems with same coefficients",
                    "Programming/computational context",
                    "After learning matrix algebra"
                ]
            }
        };
    }

    // MAIN SOLVER METHOD
    solveSystemProblem(config) {
        const { equations, scenario, parameters, problemType, context, method } = config;

        try {
            this.currentProblem = this.parseSystemProblem(equations, scenario, parameters, problemType, context, method);
            this.currentSolution = this.solveSystemProblem_Internal(this.currentProblem);
            this.solutionSteps = this.generateSystemSteps(this.currentProblem, this.currentSolution);
            this.generateSystemGraphData();
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
        const cleanEquations = Array.isArray(equations) ? equations.map(eq => this.cleanMathExpression(eq)) : [];

        if (problemType && this.systemTypes[problemType]) {
            return {
                originalInput: equations,
                cleanEquations: cleanEquations,
                type: problemType,
                method: method,
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect system type
        const numEquations = cleanEquations.length;
        const scenarioText = `${scenario} ${JSON.stringify(parameters)}`.toLowerCase();

        // Determine if 2×2 or 3×3
        let systemSize = numEquations >= 3 ? '3x3' : '2x2';

        // Try to detect method preference
        let detectedMethod = method;
        if (!detectedMethod) {
            for (const [type, config] of Object.entries(this.systemTypes)) {
                for (const pattern of config.patterns) {
                    if (pattern.test(scenarioText) || cleanEquations.some(eq => pattern.test(eq))) {
                        detectedMethod = type;
                        break;
                    }
                }
                if (detectedMethod) break;
            }
        }

        // Default method if not specified
        if (!detectedMethod) {
            if (systemSize === '3x3') {
                detectedMethod = 'system_3x3_elimination';
            } else {
                detectedMethod = 'system_2x2_elimination';
            }
        }

        // Extract coefficients
        const extractedParams = this.extractSystemCoefficients(cleanEquations, systemSize);

        return {
            originalInput: equations,
            cleanEquations: cleanEquations,
            type: detectedMethod,
            method: detectedMethod,
            scenario: scenario,
            parameters: { ...extractedParams, ...parameters, systemSize },
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
            .trim();
    }

    extractSystemCoefficients(equations, systemSize) {
        const params = { equations: [], systemSize };

        if (systemSize === '2x2' && equations.length >= 2) {
            // Try to parse 2×2 system
            const eq1 = this.parseLinearEquation2Var(equations[0]);
            const eq2 = this.parseLinearEquation2Var(equations[1]);

            params.equations = [eq1, eq2];
            params.a1 = eq1.a;
            params.b1 = eq1.b;
            params.c1 = eq1.c;
            params.a2 = eq2.a;
            params.b2 = eq2.b;
            params.c2 = eq2.c;

        } else if (systemSize === '3x3' && equations.length >= 3) {
            // Try to parse 3×3 system
            const eq1 = this.parseLinearEquation3Var(equations[0]);
            const eq2 = this.parseLinearEquation3Var(equations[1]);
            const eq3 = this.parseLinearEquation3Var(equations[2]);

            params.equations = [eq1, eq2, eq3];
            params.a1 = eq1.a;
            params.b1 = eq1.b;
            params.c1 = eq1.c;
            params.d1 = eq1.d;
            params.a2 = eq2.a;
            params.b2 = eq2.b;
            params.c2 = eq2.c;
            params.d2 = eq2.d;
            params.a3 = eq3.a;
            params.b3 = eq3.b;
            params.c3 = eq3.c;
            params.d3 = eq3.d;
        }

        return params;
    }

    parseLinearEquation2Var(equation) {
        // Parse equation of form: ax + by = c
        // Returns {a, b, c}

        const normalized = equation.replace(/\s/g, '');
        const parts = normalized.split('=');
        if (parts.length !== 2) {
            return { a: 0, b: 0, c: 0, raw: equation };
        }

        const leftSide = parts[0];
        const rightSide = parseFloat(parts[1]) || 0;

        // Extract coefficients (simplified parsing)
        let a = 0, b = 0;

        // Match x coefficient
        const xMatch = leftSide.match(/([+-]?\d*\.?\d*)x/);
        if (xMatch) {
            const coef = xMatch[1];
            if (coef === '' || coef === '+') a = 1;
            else if (coef === '-') a = -1;
            else a = parseFloat(coef);
        }

        // Match y coefficient
        const yMatch = leftSide.match(/([+-]?\d*\.?\d*)y/);
        if (yMatch) {
            const coef = yMatch[1];
            if (coef === '' || coef === '+') b = 1;
            else if (coef === '-') b = -1;
            else b = parseFloat(coef);
        }

        return { a, b, c: rightSide, raw: equation };
    }

    parseLinearEquation3Var(equation) {
        // Parse equation of form: ax + by + cz = d
        // Returns {a, b, c, d}

        const normalized = equation.replace(/\s/g, '');
        const parts = normalized.split('=');
        if (parts.length !== 2) {
            return { a: 0, b: 0, c: 0, d: 0, raw: equation };
        }

        const leftSide = parts[0];
        const rightSide = parseFloat(parts[1]) || 0;

        let a = 0, b = 0, c = 0;

        // Match x coefficient
        const xMatch = leftSide.match(/([+-]?\d*\.?\d*)x/);
        if (xMatch) {
            const coef = xMatch[1];
            if (coef === '' || coef === '+') a = 1;
            else if (coef === '-') a = -1;
            else a = parseFloat(coef);
        }

        // Match y coefficient
        const yMatch = leftSide.match(/([+-]?\d*\.?\d*)y/);
        if (yMatch) {
            const coef = yMatch[1];
            if (coef === '' || coef === '+') b = 1;
            else if (coef === '-') b = -1;
            else b = parseFloat(coef);
        }

        // Match z coefficient
        const zMatch = leftSide.match(/([+-]?\d*\.?\d*)z/);
        if (zMatch) {
            const coef = zMatch[1];
            if (coef === '' || coef === '+') c = 1;
            else if (coef === '-') c = -1;
            else c = parseFloat(coef);
        }

        return { a, b, c, d: rightSide, raw: equation };
    }

    solveSystemProblem_Internal(problem) {
        const solver = this.systemTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for system type: ${problem.type}`);
        }

        return solver(problem);
    }

    // SYSTEM SOLVERS - 2×2 METHODS

    solve2x2Substitution(problem) {
        const { parameters } = problem;
        const { a1, b1, c1, a2, b2, c2 } = parameters;

        // Solve first equation for x or y (choose simpler)
        // For demonstration, solve for y from equation 1: y = (c1 - a1*x) / b1

        if (Math.abs(b1) < 1e-10) {
            // Cannot solve for y from eq1, try x
            if (Math.abs(a1) < 1e-10) {
                return { solutionType: 'Special case', note: 'Degenerate equation' };
            }
            // Solve for x from eq1: x = c1 / a1
            const x = c1 / a1;
            // Substitute into eq2
            const y = (c2 - a2 * x) / b2;

            return {
                method: 'Substitution',
                systemSize: '2x2',
                equation1: `${a1}x + ${b1}y = ${c1}`,
                equation2: `${a2}x + ${b2}y = ${c2}`,
                isolatedVariable: 'x',
                isolatedEquation: `x = ${c1 / a1}`,
                solution: { x, y },
                solutionType: 'Unique solution',
                verification: this.verify2x2Solution({ x, y }, a1, b1, c1, a2, b2, c2)
            };
        }

        // Solve eq1 for y: y = (c1 - a1*x) / b1
        // Substitute into eq2: a2*x + b2*((c1 - a1*x)/b1) = c2
        // a2*x + b2*(c1 - a1*x)/b1 = c2
        // Multiply by b1: a2*b1*x + b2*(c1 - a1*x) = c2*b1
        // a2*b1*x + b2*c1 - b2*a1*x = c2*b1
        // (a2*b1 - b2*a1)*x = c2*b1 - b2*c1
        const xCoeff = a2 * b1 - b2 * a1;
        const xConst = c2 * b1 - b2 * c1;

        if (Math.abs(xCoeff) < 1e-10) {
            // No unique solution
            if (Math.abs(xConst) < 1e-10) {
                return {
                    method: 'Substitution',
                    systemSize: '2x2',
                    solutionType: 'Infinite solutions',
                    explanation: 'Equations are dependent (same line)'
                };
            } else {
                return {
                    method: 'Substitution',
                    systemSize: '2x2',
                    solutionType: 'No solution',
                    explanation: 'Equations are inconsistent (parallel lines)'
                };
            }
        }

        const x = xConst / xCoeff;
        const y = (c1 - a1 * x) / b1;

        return {
            method: 'Substitution',
            systemSize: '2x2',
            equation1: `${a1}x + ${b1}y = ${c1}`,
            equation2: `${a2}x + ${b2}y = ${c2}`,
            isolatedVariable: 'y',
            isolatedEquation: `y = (${c1} - ${a1}x) / ${b1}`,
            substitutedEquation: `${a2}x + ${b2}((${c1} - ${a1}x)/${b1}) = ${c2}`,
            solution: { x, y },
            solutionType: 'Unique solution',
            verification: this.verify2x2Solution({ x, y }, a1, b1, c1, a2, b2, c2)
        };
    }

    solve2x2Elimination(problem) {
        const { parameters } = problem;
        const { a1, b1, c1, a2, b2, c2 } = parameters;

        // Use elimination method
        // Multiply equations to eliminate one variable

        // Choose to eliminate x or y based on easier coefficients
        // For simplicity, eliminate x by multiplying eq1 by a2 and eq2 by -a1

        const mult1 = a2;
        const mult2 = -a1;

        // New equation 1: a2*(a1*x + b1*y) = a2*c1
        const newA1 = a1 * mult1;
        const newB1 = b1 * mult1;
        const newC1 = c1 * mult1;

        // New equation 2: -a1*(a2*x + b2*y) = -a1*c2
        const newA2 = a2 * mult2;
        const newB2 = b2 * mult2;
        const newC2 = c2 * mult2;

        // Add equations: (newA1 + newA2)x + (newB1 + newB2)y = newC1 + newC2
        const yCoeff = newB1 + newB2;
        const yConst = newC1 + newC2;

        if (Math.abs(yCoeff) < 1e-10) {
            // x was eliminated but y coefficient is also zero
            if (Math.abs(yConst) < 1e-10) {
                return {
                    method: 'Elimination',
                    systemSize: '2x2',
                    solutionType: 'Infinite solutions',
                    explanation: 'Equations are dependent (same line)'
                };
            } else {
                return {
                    method: 'Elimination',
                    systemSize: '2x2',
                    solutionType: 'No solution',
                    explanation: 'Equations are inconsistent (parallel lines)'
                };
            }
        }

        const y = yConst / yCoeff;
        const x = (c1 - b1 * y) / a1;

        return {
            method: 'Elimination',
            systemSize: '2x2',
            equation1: `${a1}x + ${b1}y = ${c1}`,
            equation2: `${a2}x + ${b2}y = ${c2}`,
            multiplier1: mult1,
            multiplier2: mult2,
            eliminatedVariable: 'x',
            newEquation1: `${newA1}x + ${newB1}y = ${newC1}`,
            newEquation2: `${newA2}x + ${newB2}y = ${newC2}`,
            combinedEquation: `${yCoeff}y = ${yConst}`,
            solution: { x, y },
            solutionType: 'Unique solution',
            verification: this.verify2x2Solution({ x, y }, a1, b1, c1, a2, b2, c2)
        };
    }

    solve2x2Graphical(problem) {
        const { parameters } = problem;
        const { a1, b1, c1, a2, b2, c2 } = parameters;

        // Convert to slope-intercept form: y = mx + b
        // From a*x + b*y = c, we get y = (-a/b)*x + (c/b)

        if (Math.abs(b1) < 1e-10 || Math.abs(b2) < 1e-10) {
            return {
                method: 'Graphical',
                systemSize: '2x2',
                note: 'One or both equations are vertical lines',
                solutionType: 'Special case'
            };
        }

        const m1 = -a1 / b1;
        const b1_intercept = c1 / b1;

        const m2 = -a2 / b2;
        const b2_intercept = c2 / b2;

        // Check if parallel (same slope, different intercept)
        if (Math.abs(m1 - m2) < 1e-10) {
            if (Math.abs(b1_intercept - b2_intercept) < 1e-10) {
                return {
                    method: 'Graphical',
                    systemSize: '2x2',
                    line1: `y = ${m1}x + ${b1_intercept}`,
                    line2: `y = ${m2}x + ${b2_intercept}`,
                    solutionType: 'Infinite solutions',
                    explanation: 'Lines are identical'
                };
            } else {
                return {
                    method: 'Graphical',
                    systemSize: '2x2',
                    line1: `y = ${m1}x + ${b1_intercept}`,
                    line2: `y = ${m2}x + ${b2_intercept}`,
                    solutionType: 'No solution',
                    explanation: 'Lines are parallel'
                };
            }
        }

        // Find intersection: m1*x + b1_intercept = m2*x + b2_intercept
        const x = (b2_intercept - b1_intercept) / (m1 - m2);
        const y = m1 * x + b1_intercept;

        return {
            method: 'Graphical',
            systemSize: '2x2',
            line1: `y = ${m1}x + ${b1_intercept}`,
            line2: `y = ${m2}x + ${b2_intercept}`,
            slope1: m1,
            yIntercept1: b1_intercept,
            slope2: m2,
            yIntercept2: b2_intercept,
            intersectionPoint: { x, y },
            solution: { x, y },
            solutionType: 'Unique solution',
            verification: this.verify2x2Solution({ x, y }, a1, b1, c1, a2, b2, c2)
        };
    }

    solve2x2Matrix(problem) {
        const { parameters } = problem;
        const { a1, b1, c1, a2, b2, c2 } = parameters;

        // Matrix form: [a1 b1][x] = [c1]
        //              [a2 b2][y]   [c2]

        // Determinant of coefficient matrix
        const det = a1 * b2 - a2 * b1;

        if (Math.abs(det) < 1e-10) {
            // Check if no solution or infinite solutions
            // If augmented matrix is also singular, infinite solutions
            return {
                method: 'Matrix (Cramer\'s Rule)',
                systemSize: '2x2',
                determinant: det,
                solutionType: det === 0 ? 'No unique solution' : 'Special case',
                explanation: 'Determinant is zero - either no solution or infinite solutions'
            };
        }

        // Cramer's rule
        // x = det([c1 b1]) / det(A)
        //        ([c2 b2])
        const detX = c1 * b2 - c2 * b1;
        const x = detX / det;

        // y = det([a1 c1]) / det(A)
        //        ([a2 c2])
        const detY = a1 * c2 - a2 * c1;
        const y = detY / det;

        return {
            method: 'Matrix (Cramer\'s Rule)',
            systemSize: '2x2',
            coefficientMatrix: `[${a1}  ${b1}]\n[${a2}  ${b2}]`,
            constantVector: `[${c1}]\n[${c2}]`,
            determinant: det,
            determinantX: detX,
            determinantY: detY,
            solution: { x, y },
            solutionType: 'Unique solution',
            cramersRuleX: `x = ${detX} / ${det} = ${x}`,
            cramersRuleY: `y = ${detY} / ${det} = ${y}`,
            verification: this.verify2x2Solution({ x, y }, a1, b1, c1, a2, b2, c2)
        };
    }

    // SYSTEM SOLVERS - 3×3 METHODS

    solve3x3Elimination(problem) {
        const { parameters } = problem;
        const { a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3 } = parameters;

        // Eliminate z from equations (1) and (2)
        // Multiply eq1 by c2 and eq2 by -c1, then add
        const mult1_for_12 = c2;
        const mult2_for_12 = -c1;

        const newA_12 = a1 * mult1_for_12 + a2 * mult2_for_12;
        const newB_12 = b1 * mult1_for_12 + b2 * mult2_for_12;
        const newD_12 = d1 * mult1_for_12 + d2 * mult2_for_12;

        // Eliminate z from equations (1) and (3)
        const mult1_for_13 = c3;
        const mult3_for_13 = -c1;

        const newA_13 = a1 * mult1_for_13 + a3 * mult3_for_13;
        const newB_13 = b1 * mult1_for_13 + b3 * mult3_for_13;
        const newD_13 = d1 * mult1_for_13 + d3 * mult3_for_13;

        // Now we have 2x2 system in x and y:
        // newA_12 * x + newB_12 * y = newD_12
        // newA_13 * x + newB_13 * y = newD_13

        // Solve this 2x2 system using elimination
        const det2x2 = newA_12 * newB_13 - newA_13 * newB_12;

        if (Math.abs(det2x2) < 1e-10) {
            return {
                method: 'Elimination',
                systemSize: '3x3',
                solutionType: 'No unique solution',
                explanation: '2×2 system has no unique solution'
            };
        }

        const y = (newD_12 * newA_13 - newD_13 * newA_12) / (newB_12 * newA_13 - newB_13 * newA_12);
        const x = (newD_12 - newB_12 * y) / newA_12;

        // Back-substitute to find z using equation 1
        const z = (d1 - a1 * x - b1 * y) / c1;

        return {
            method: 'Elimination',
            systemSize: '3x3',
            equation1: `${a1}x + ${b1}y + ${c1}z = ${d1}`,
            equation2: `${a2}x + ${b2}y + ${c2}z = ${d2}`,
            equation3: `${a3}x + ${b3}y + ${c3}z = ${d3}`,
            eliminatedVariable: 'z',
            equation4_from_1_2: `${newA_12}x + ${newB_12}y = ${newD_12}`,
            equation5_from_1_3: `${newA_13}x + ${newB_13}y = ${newD_13}`,
            solution: { x, y, z },
            solutionType: 'Unique solution',
            verification: this.verify3x3Solution({ x, y, z }, a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3)
        };
    }

    solve3x3Substitution(problem) {
        // Similar structure to elimination but using substitution
        // For brevity, using elimination internally
        return this.solve3x3Elimination(problem);
    }

    solve3x3Matrix(problem) {
        const { parameters } = problem;
        const { a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3 } = parameters;

        // Calculate determinant of coefficient matrix
        const det = a1 * (b2 * c3 - b3 * c2) - b1 * (a2 * c3 - a3 * c2) + c1 * (a2 * b3 - a3 * b2);

        if (Math.abs(det) < 1e-10) {
            return {
                method: 'Matrix (Cramer\'s Rule)',
                systemSize: '3x3',
                determinant: det,
                solutionType: 'No unique solution',
                explanation: 'Determinant is zero'
            };
        }

        // Cramer's rule for x
        const detX = d1 * (b2 * c3 - b3 * c2) - b1 * (d2 * c3 - d3 * c2) + c1 * (d2 * b3 - d3 * b2);
        const x = detX / det;

        // Cramer's rule for y
        const detY = a1 * (d2 * c3 - d3 * c2) - d1 * (a2 * c3 - a3 * c2) + c1 * (a2 * d3 - a3 * d2);
        const y = detY / det;

        // Cramer's rule for z
        const detZ = a1 * (b2 * d3 - b3 * d2) - b1 * (a2 * d3 - a3 * d2) + d1 * (a2 * b3 - a3 * b2);
        const z = detZ / det;

        return {
            method: 'Matrix (Cramer\'s Rule)',
            systemSize: '3x3',
            determinant: det,
            determinantX: detX,
            determinantY: detY,
            determinantZ: detZ,
            solution: { x, y, z },
            solutionType: 'Unique solution',
            verification: this.verify3x3Solution({ x, y, z }, a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3)
        };
    }

    // WORD PROBLEM SOLVERS

    solveWordProblem2Var(problem) {
        return {
            method: 'Word Problem Setup',
            systemSize: '2x2',
            approach: 'Define two variables, write two equations, solve system',
            note: 'Translate word problem to algebraic system',
            solutionType: 'Requires problem-specific setup'
        };
    }

    solveWordProblem3Var(problem) {
        return {
            method: 'Word Problem Setup',
            systemSize: '3x3',
            approach: 'Define three variables, write three equations, solve system',
            note: 'Translate word problem to algebraic system',
            solutionType: 'Requires problem-specific setup'
        };
    }

    // SPECIAL CASES SOLVERS

    solveSpecialCases2x2(problem) {
        return this.solve2x2Elimination(problem);
    }

    solveSpecialCases3x3(problem) {
        return this.solve3x3Elimination(problem);
    }

    // VERIFICATION METHODS

    verify2x2Solution(solution, a1, b1, c1, a2, b2, c2) {
        const { x, y } = solution;

        const eq1Left = a1 * x + b1 * y;
        const eq1Right = c1;
        const eq1Valid = Math.abs(eq1Left - eq1Right) < 1e-9;

        const eq2Left = a2 * x + b2 * y;
        const eq2Right = c2;
        const eq2Valid = Math.abs(eq2Left - eq2Right) < 1e-9;

        return {
            solution: { x, y },
            equation1Check: {
                left: eq1Left,
                right: eq1Right,
                difference: eq1Left - eq1Right,
                valid: eq1Valid
            },
            equation2Check: {
                left: eq2Left,
                right: eq2Right,
                difference: eq2Left - eq2Right,
                valid: eq2Valid
            },
            overallValid: eq1Valid && eq2Valid
        };
    }

    verify3x3Solution(solution, a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3) {
        const { x, y, z } = solution;

        const eq1Left = a1 * x + b1 * y + c1 * z;
        const eq1Right = d1;
        const eq1Valid = Math.abs(eq1Left - eq1Right) < 1e-9;

        const eq2Left = a2 * x + b2 * y + c2 * z;
        const eq2Right = d2;
        const eq2Valid = Math.abs(eq2Left - eq2Right) < 1e-9;

        const eq3Left = a3 * x + b3 * y + c3 * z;
        const eq3Right = d3;
        const eq3Valid = Math.abs(eq3Left - eq3Right) < 1e-9;

        return {
            solution: { x, y, z },
            equation1Check: {
                left: eq1Left,
                right: eq1Right,
                difference: eq1Left - eq1Right,
                valid: eq1Valid
            },
            equation2Check: {
                left: eq2Left,
                right: eq2Right,
                difference: eq2Left - eq2Right,
                valid: eq2Valid
            },
            equation3Check: {
                left: eq3Left,
                right: eq3Right,
                difference: eq3Left - eq3Right,
                valid: eq3Valid
            },
            overallValid: eq1Valid && eq2Valid && eq3Valid
        };
    }

    // STEP GENERATION

    generateSystemSteps(problem, solution) {
        let baseSteps = this.generateBaseSystemSteps(problem, solution);

        // Apply enhancements based on options
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
        const method = solution.method;

        if (method === 'Substitution' && solution.systemSize === '2x2') {
            return this.generateSubstitution2x2Steps(problem, solution);
        } else if (method === 'Elimination' && solution.systemSize === '2x2') {
            return this.generateElimination2x2Steps(problem, solution);
        } else if (method === 'Graphical') {
            return this.generateGraphical2x2Steps(problem, solution);
        } else if (method === 'Matrix (Cramer\'s Rule)' && solution.systemSize === '2x2') {
            return this.generateMatrix2x2Steps(problem, solution);
        } else if (method === 'Elimination' && solution.systemSize === '3x3') {
            return this.generateElimination3x3Steps(problem, solution);
        } else if (method === 'Matrix (Cramer\'s Rule)' && solution.systemSize === '3x3') {
            return this.generateMatrix3x3Steps(problem, solution);
        } else {
            return this.generateGenericSystemSteps(problem, solution);
        }
    }

    generateSubstitution2x2Steps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Write the system',
            description: 'Start with the given system of equations',
            expression: `${solution.equation1}\n${solution.equation2}`,
            reasoning: 'We have two equations with two unknowns (x and y)',
            goalStatement: 'Solve for both x and y using substitution method'
        });

        steps.push({
            stepNumber: 2,
            step: 'Isolate one variable',
            description: `Solve equation 1 for ${solution.isolatedVariable}`,
            beforeExpression: solution.equation1,
            afterExpression: solution.isolatedEquation,
            reasoning: 'This allows us to substitute this expression into the other equation',
            algebraicRule: 'Inverse operations to isolate variable'
        });

        steps.push({
            stepNumber: 3,
            step: 'Substitute',
            description: `Substitute the expression for ${solution.isolatedVariable} into equation 2`,
            beforeExpression: solution.equation2,
            operation: 'substitute',
            afterExpression: solution.substitutedEquation,
            reasoning: 'This creates an equation with only one variable',
            algebraicRule: 'Substitution property',
            visualHint: 'Replace the variable with its equivalent expression in parentheses'
        });

        steps.push({
            stepNumber: 4,
            step: 'Solve for remaining variable',
            description: 'Solve the single-variable equation',
            beforeExpression: solution.substitutedEquation,
            afterExpression: `x = ${solution.solution.x}` || `y = ${solution.solution.y}`,
            reasoning: 'Now we have only one variable to solve for',
            algebraicRule: 'Linear equation solving'
        });

        steps.push({
            stepNumber: 5,
            step: 'Back-substitute',
            description: `Substitute back to find ${solution.isolatedVariable}`,
            expression: solution.isolatedVariable === 'y' ? 
                `y = (${solution.solution.x}) → y = ${solution.solution.y}` :
                `x = (${solution.solution.y}) → x = ${solution.solution.x}`,
            reasoning: 'Use the value we found to calculate the other variable',
            algebraicRule: 'Substitution'
        });

        steps.push({
            stepNumber: 6,
            step: 'Solution',
            description: 'Write the complete solution',
            expression: `x = ${solution.solution.x}, y = ${solution.solution.y}`,
            finalAnswer: true,
            reasoning: 'This ordered pair satisfies both equations'
        });

        return steps;
    }

    generateElimination2x2Steps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Write the system',
            description: 'Start with the given system of equations',
            expression: `${solution.equation1}\n${solution.equation2}`,
            reasoning: 'We have two equations with two unknowns',
            goalStatement: 'Eliminate one variable by adding/subtracting equations'
        });

        steps.push({
            stepNumber: 2,
            step: 'Prepare for elimination',
            description: `Multiply equations to create opposite coefficients for ${solution.eliminatedVariable}`,
            beforeExpression: `Equation 1: ${solution.equation1}\nEquation 2: ${solution.equation2}`,
            operation: `Multiply eq1 by ${solution.multiplier1}, eq2 by ${solution.multiplier2}`,
            afterExpression: `${solution.newEquation1}\n${solution.newEquation2}`,
            reasoning: `This will make the ${solution.eliminatedVariable} terms cancel when we add`,
            algebraicRule: 'Multiplication property of equality'
        });

        steps.push({
            stepNumber: 3,
            step: 'Add equations',
            description: 'Add the modified equations',
            beforeExpression: `${solution.newEquation1}\n+ (${solution.newEquation2})`,
            afterExpression: solution.combinedEquation,
            reasoning: `The ${solution.eliminatedVariable} terms cancel out`,
            algebraicRule: 'Addition property of equality',
            visualHint: `Notice how ${solution.eliminatedVariable} disappears`
        });

        steps.push({
            stepNumber: 4,
            step: 'Solve for first variable',
            description: 'Solve the resulting equation',
            expression: solution.combinedEquation,
            solution: `y = ${solution.solution.y}` || `x = ${solution.solution.x}`,
            reasoning: 'We now have a single-variable equation',
            algebraicRule: 'Linear equation solving'
        });

        steps.push({
            stepNumber: 5,
            step: 'Back-substitute',
            description: `Substitute to find ${solution.eliminatedVariable}`,
            expression: `${solution.eliminatedVariable} = ${solution.solution[solution.eliminatedVariable]}`,
            reasoning: 'Use original equation and known value',
            algebraicRule: 'Substitution'
        });

        steps.push({
            stepNumber: 6,
            step: 'Solution',
            description: 'Write the complete solution',
            expression: `x = ${solution.solution.x}, y = ${solution.solution.y}`,
            finalAnswer: true,
            reasoning: 'This ordered pair satisfies both equations'
        });

        return steps;
    }

    generateGraphical2x2Steps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Write equations in slope-intercept form',
            description: 'Convert both equations to y = mx + b form',
            expression: `Line 1: ${solution.line1}\nLine 2: ${solution.line2}`,
            reasoning: 'This form is easiest to graph',
            goalStatement: 'Graph both lines and find intersection point'
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify slopes and intercepts',
            description: 'Extract slope and y-intercept from each equation',
            expression: `Line 1: m = ${solution.slope1}, b = ${solution.yIntercept1}\nLine 2: m = ${solution.slope2}, b = ${solution.yIntercept2}`,
            reasoning: 'These tell us how to draw each line'
        });

        steps.push({
            stepNumber: 3,
            step: 'Graph both lines',
            description: 'Plot both lines on the same coordinate plane',
            reasoning: 'The solution is where the lines cross',
            visualHint: 'Start at y-intercept, use slope to find more points'
        });

        steps.push({
            stepNumber: 4,
            step: 'Find intersection point',
            description: 'Identify where the two lines meet',
            expression: `Intersection: (${solution.solution.x}, ${solution.solution.y})`,
            finalAnswer: true,
            reasoning: 'This point lies on both lines, so it satisfies both equations'
        });

        return steps;
    }

    generateMatrix2x2Steps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Write in matrix form',
            description: 'Express the system as a matrix equation',
            expression: `${solution.coefficientMatrix} [x]   ${solution.constantVector}\n                [y] = `,
            reasoning: 'Matrix form allows us to use Cramer\'s rule',
            goalStatement: 'Use determinants to find x and y'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate main determinant',
            description: 'Find determinant of coefficient matrix',
            expression: `det(A) = ${solution.determinant}`,
            reasoning: 'If determinant ≠ 0, unique solution exists',
            algebraicRule: 'det = a₁b₂ - a₂b₁'
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply Cramer\'s rule for x',
            description: 'Replace first column with constants',
            expression: solution.cramersRuleX,
            reasoning: 'Cramer\'s rule: x = det(Aₓ) / det(A)',
            algebraicRule: 'Cramer\'s rule'
        });

        steps.push({
            stepNumber: 4,
            step: 'Apply Cramer\'s rule for y',
            description: 'Replace second column with constants',
            expression: solution.cramersRuleY,
            reasoning: 'Cramer\'s rule: y = det(Aᵧ) / det(A)',
            algebraicRule: 'Cramer\'s rule'
        });

        steps.push({
            stepNumber: 5,
            step: 'Solution',
            description: 'Write the complete solution',
            expression: `x = ${solution.solution.x}, y = ${solution.solution.y}`,
            finalAnswer: true
        });

        return steps;
    }

    generateElimination3x3Steps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Write the 3×3 system',
            description: 'Start with three equations and three unknowns',
            expression: `(1) ${solution.equation1}\n(2) ${solution.equation2}\n(3) ${solution.equation3}`,
            reasoning: 'We need to reduce this to a 2×2 system',
            goalStatement: 'Eliminate one variable from two pairs of equations'
        });

        steps.push({
            stepNumber: 2,
            step: `Eliminate ${solution.eliminatedVariable} from equations (1) and (2)`,
            description: `Create equation (4) without ${solution.eliminatedVariable}`,
            expression: solution.equation4_from_1_2,
            reasoning: `This gives us one equation in x and y only`,
            algebraicRule: 'Elimination method'
        });

        steps.push({
            stepNumber: 3,
            step: `Eliminate ${solution.eliminatedVariable} from equations (1) and (3)`,
            description: `Create equation (5) without ${solution.eliminatedVariable}`,
            expression: solution.equation5_from_1_3,
            reasoning: `This gives us a second equation in x and y only`,
            algebraicRule: 'Elimination method',
            visualHint: 'Must eliminate the SAME variable to create valid 2×2 system'
        });

        steps.push({
            stepNumber: 4,
            step: 'Solve the 2×2 system',
            description: 'Solve equations (4) and (5) for x and y',
            expression: `x = ${solution.solution.x}, y = ${solution.solution.y}`,
            reasoning: 'Use substitution or elimination on this smaller system',
            algebraicRule: '2×2 system methods'
        });

        steps.push({
            stepNumber: 5,
            step: 'Back-substitute for z',
            description: 'Use original equation to find z',
            expression: `z = ${solution.solution.z}`,
            reasoning: 'Substitute x and y values into any original equation',
            algebraicRule: 'Substitution'
        });

        steps.push({
            stepNumber: 6,
            step: 'Solution',
            description: 'Write the complete solution',
            expression: `x = ${solution.solution.x}, y = ${solution.solution.y}, z = ${solution.solution.z}`,
            finalAnswer: true,
            reasoning: 'This ordered triple satisfies all three equations'
        });

        return steps;
    }

    generateMatrix3x3Steps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Write in matrix form',
            description: 'Express as 3×3 matrix equation',
            reasoning: 'Allows use of Cramer\'s rule with 3×3 determinants'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate main determinant',
            description: 'Find det(A) using 3×3 formula',
            expression: `det(A) = ${solution.determinant}`,
            reasoning: 'If det ≠ 0, unique solution exists',
            algebraicRule: '3×3 determinant formula'
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply Cramer\'s rule for x',
            expression: `x = ${solution.determinantX} / ${solution.determinant} = ${solution.solution.x}`,
            reasoning: 'Replace first column with constants'
        });

        steps.push({
            stepNumber: 4,
            step: 'Apply Cramer\'s rule for y',
            expression: `y = ${solution.determinantY} / ${solution.determinant} = ${solution.solution.y}`,
            reasoning: 'Replace second column with constants'
        });

        steps.push({
            stepNumber: 5,
            step: 'Apply Cramer\'s rule for z',
            expression: `z = ${solution.determinantZ} / ${solution.determinant} = ${solution.solution.z}`,
            reasoning: 'Replace third column with constants'
        });

        steps.push({
            stepNumber: 6,
            step: 'Solution',
            expression: `x = ${solution.solution.x}, y = ${solution.solution.y}, z = ${solution.solution.z}`,
            finalAnswer: true
        });

        return steps;
    }

    generateGenericSystemSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'System of equations',
            description: 'Solve the given system',
            reasoning: 'Apply appropriate method for this system type',
            solution: solution
        }];
    }

    // ENHANCED EXPLANATION METHODS (similar to linear workbook)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const category = this.systemTypes[problem.type]?.category || 'system_2x2';
        
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanationSystem(step, problem, category),
                procedural: this.getProceduralExplanationSystem(step),
                visual: this.getVisualExplanationSystem(step, category),
                algebraic: this.getAlgebraicExplanationSystem(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisites(step, category),
                keyVocabulary: this.identifyKeyVocabularySystem(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPromptsSystem(step);
        }

        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestionSystem(step);
        }

        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findRealWorldConnectionSystem(step, problem);
        }

        return enhanced;
    }

    getConceptualExplanationSystem(step, problem, category) {
        const conceptualExplanations = {
            'Write the system': 'A system of equations represents multiple constraints that must all be satisfied simultaneously.',
            'Isolate one variable': 'Expressing one variable in terms of another allows us to reduce two variables to one.',
            'Substitute': 'Substitution transforms a system into a single equation by replacing a variable with its equivalent expression.',
            'Prepare for elimination': 'Creating opposite coefficients allows variables to cancel when equations are combined.',
            'Add equations': 'Adding equations with opposite coefficients eliminates one variable, simplifying the system.',
            'Solve for first variable': 'With one variable eliminated, we can solve for the remaining variable.',
            'Back-substitute': 'Using known values to find unknown variables by substituting into original equations.',
            'Eliminate z from equations': 'Systematic elimination reduces a 3×3 system to 2×2 by removing one variable.',
            'Solve the 2×2 system': 'The reduced system is solved like any 2×2 problem.'
        };

        return conceptualExplanations[step.step] || 'This step progresses toward finding the solution that satisfies all equations.';
    }

    getProceduralExplanationSystem(step) {
        return `1. Identify what operation is needed
2. Perform the operation carefully
3. Simplify the result
4. Write the new form of the equation(s)
5. Verify the step is correct`;
    }

    getVisualExplanationSystem(step, category) {
        const visualExplanations = {
            'system_2x2': 'Visualize two lines on a graph. The solution is where they intersect.',
            'system_3x3': 'Imagine three planes in 3D space. The solution is where all three meet.',
            'substitution': 'Think of plugging in a formula - you\'re replacing one variable with an expression.',
            'elimination': 'Picture stacking equations and canceling out terms that are opposites.'
        };

        return visualExplanations[category] || 'Visualize the equations as geometric objects that intersect at the solution.';
    }

    getAlgebraicExplanationSystem(step) {
        const algebraicRules = {
            'Write the system': 'System of linear equations in standard form',
            'Isolate one variable': 'Apply inverse operations to express variable in terms of others',
            'Substitute': 'Substitution property: If a = b, then a can replace b in any expression',
            'Prepare for elimination': 'Multiplication property of equality',
            'Add equations': 'Addition property of equality',
            'Back-substitute': 'Substitution to find remaining unknowns',
            'Calculate main determinant': 'Determinant formula for coefficient matrix'
        };

        return algebraicRules[step.step] || 'Apply standard algebraic properties and rules.';
    }

    identifyKeyVocabularySystem(step) {
        const vocabulary = {
            'Write the system': ['system', 'equations', 'unknowns', 'variables'],
            'Isolate one variable': ['isolate', 'express in terms of', 'solve for'],
            'Substitute': ['substitute', 'replace', 'expression'],
            'Prepare for elimination': ['opposite coefficients', 'multiply', 'elimination'],
            'Add equations': ['add', 'combine', 'cancel', 'eliminate'],
            'Back-substitute': ['back-substitute', 'substitute back', 'find remaining variable'],
            'Calculate main determinant': ['determinant', 'matrix', 'coefficient matrix']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPromptsSystem(step) {
        return {
            before: 'What am I trying to accomplish in this step?',
            during: 'Am I performing this operation correctly on all parts?',
            after: 'Does my result move me closer to the solution?'
        };
    }

    generateSelfCheckQuestionSystem(step) {
        const questions = {
            'Write the system': 'Have I written all equations correctly?',
            'Isolate one variable': 'Is the variable completely isolated?',
            'Substitute': 'Did I use parentheses around the substituted expression?',
            'Prepare for elimination': 'Will these coefficients cancel when I add/subtract?',
            'Add equations': 'Did the variable I wanted to eliminate actually cancel out?',
            'Back-substitute': 'Did I substitute into a simple equation?',
            'Eliminate z from equations': 'Did I eliminate the SAME variable from both pairs?'
        };

        return questions[step.step] || 'Is this step correct?';
    }

    findRealWorldConnectionSystem(step, problem) {
        return 'Systems of equations help us solve problems where multiple conditions must be met simultaneously, like balancing a budget with multiple constraints.';
    }

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateELI5ExplanationSystem(step, problem),
                analogy: this.findRelevantAnalogySystem(step, problem),
                simpleLanguage: this.convertToSimpleLanguage(step.description),
                visualization: this.suggestVisualizationSystem(step)
            }
        }));
    }

    generateELI5ExplanationSystem(step, problem) {
        const ELI5Explanations = {
            'Write the system': "We have a puzzle with multiple clues! Each equation is like a clue that helps us find the mystery numbers.",
            'Isolate one variable': "We're figuring out what one mystery number equals, like solving 'x = something'.",
            'Substitute': "Now we replace x everywhere with what we found. It's like following a treasure map where one clue leads to the next!",
            'Prepare for elimination': "We're making the equations line up so that when we add them, one mystery number disappears!",
            'Add equations': "When we add these special equations, the x's (or y's) magically cancel out like 5 + (-5) = 0!",
            'Back-substitute': "We found one number, now we use it to find the other - like using one puzzle piece to find where another fits!",
            'Eliminate z from equations': "We're working on making z disappear from two different pairs of clues. This helps us solve a smaller puzzle first!"
        };

        return ELI5Explanations[step.step] || "We're taking another step to solve our puzzle!";
    }

    findRelevantAnalogySystem(step, problem) {
        const category = this.systemTypes[problem.type]?.category || 'system_2x2';
        
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(category) || analogy.suitableFor.includes('all_systems')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        
        return "Think of it like a puzzle where all pieces must fit together perfectly!";
    }

    convertToSimpleLanguage(description) {
        if (!description) return '';

        const simplifications = {
            'coefficient': 'number next to variable',
            'variable': 'mystery letter (x, y, or z)',
            'equation': 'math sentence with equals sign',
            'system': 'group of equations working together',
            'solution': 'the answer that works for all equations',
            'substitute': 'replace one thing with another',
            'eliminate': 'make disappear or cancel out',
            'isolate': 'get by itself',
            'determinant': 'special number from a grid of numbers',
            'matrix': 'rectangle of numbers arranged in rows and columns'
        };

        let simple = description;
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp(term, 'gi');
            simple = simple.replace(regex, replacement);
        }

        return simple;
    }

    suggestVisualizationSystem(step) {
        const visualizations = {
            'Write the system': 'Draw two lines on graph paper - your solution is where they cross',
            'Isolate one variable': 'Draw a box around the variable you\'re isolating',
            'Substitute': 'Show the replacement by writing the new expression in a different color',
            'Prepare for elimination': 'Draw arrows showing which terms will cancel',
            'Add equations': 'Show the addition vertically, like adding numbers, and circle what cancels',
            'Back-substitute': 'Draw an arrow from the known value to where you\'re plugging it in',
            'Eliminate z from equations': 'Use three different colors for your three equations, show which pairs you\'re combining'
        };

        return visualizations[step.step] || 'Draw a picture to help visualize this step';
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
        const category = this.systemTypes[problemType]?.category || 'system_2x2';
        const method = problemType.includes('substitution') ? 'substitution' : 
                      problemType.includes('elimination') ? 'elimination' : 
                      problemType.includes('3x3') ? 'system_3x3' : 'system_2x2';
        
        const mistakes = this.commonMistakes[method]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsSystem(step, method),
                checkPoints: this.generateCheckPointsSystem(step),
                warningFlags: this.identifyWarningFlagsSystem(step, method)
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestionSystem(step),
                expectedResult: this.describeExpectedResultSystem(step),
                troubleshooting: this.generateTroubleshootingTipsSystem(step)
            }
        };
    }

    generatePreventionTipsSystem(step, method) {
        const tips = {
            'Substitute': [
                'ALWAYS use parentheses around substituted expressions',
                'Check you\'re substituting into correct equation',
                'Substitute for ALL instances of the variable'
            ],
            'Prepare for elimination': [
                'Multiply EVERY term in the equation, including constant',
                'Check your arithmetic carefully',
                'Make sure coefficients will actually be opposites'
            ],
            'Add equations': [
                'Line up like terms vertically',
                'Verify the targeted variable cancels completely',
                'Double-check arithmetic'
            ],
            'Back-substitute': [
                'Use the simplest original equation available',
                'Substitute the correct values',
                'Show all work to avoid errors'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Check each calculation'];
    }

    generateCheckPointsSystem(step) {
        return [
            'Did I perform operations correctly?',
            'Are all my arithmetic calculations correct?',
            'Am I progressing toward the solution?',
            'Can I verify this step?'
        ];
    }

    identifyWarningFlagsSystem(step, method) {
        const warnings = {
            substitution: step.step === 'Substitute' ?
                ['Forgetting parentheses around expression', 'Substituting into wrong equation'] : [],
            elimination: step.step === 'Prepare for elimination' ?
                ['Not multiplying all terms', 'Sign errors'] : [],
            system_3x3: step.step?.includes('Eliminate') ?
                ['Eliminating different variables from different pairs', 'Losing track of equations'] : []
        };

        return warnings[method] || [];
    }

    describeExpectedResultSystem(step) {
        const expectations = {
            'Write the system': 'All equations clearly written',
            'Isolate one variable': 'One variable expressed in terms of the other',
            'Substitute': 'Single equation with one variable',
            'Prepare for elimination': 'Equations with opposite coefficients for one variable',
            'Add equations': 'One variable eliminated, simpler equation remains',
            'Back-substitute': 'Value for second variable found',
            'Solution': 'Ordered pair or triple that satisfies all equations'
        };

        return expectations[step.step] || 'Progress toward solution';
    }

    generateTroubleshootingTipsSystem(step) {
        return [
            'Review the step before this one',
            'Check all arithmetic carefully',
            'Verify you followed the method correctly',
            'Try working the problem a different way',
            'Ask: does this result make sense?'
        ];
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsSystem(step, problem),
                subSteps: this.breakIntoSubStepsSystem(step),
                hints: this.generateProgressiveHintsSystem(step, problem),
                practiceVariation: this.generatePracticeVariationSystem(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcessSystem(step),
                decisionPoints: this.identifyDecisionPointsSystem(step),
                alternativeApproaches: this.suggestAlternativeMethodsSystem(step, problem)
            }
        }));
    }

    generateGuidingQuestionsSystem(step, problem) {
        const questions = {
            'Write the system': [
                'How many equations do I have?',
                'How many variables?',
                'Are the equations in standard form?'
            ],
            'Isolate one variable': [
                'Which variable is easiest to isolate?',
                'Which equation is simplest to work with?',
                'Do any variables have coefficient 1?'
            ],
            'Substitute': [
                'Where does this expression go?',
                'Did I use parentheses?',
                'Does this create a single-variable equation?'
            ],
            'Prepare for elimination': [
                'Which variable should I eliminate?',
                'What multipliers do I need?',
                'Will the coefficients be opposites after multiplying?'
            ],
            'Add equations': [
                'Do the terms I want cancel out?',
                'Did I add all corresponding terms?',
                'Is my arithmetic correct?'
            ]
        };

        return questions[step.step] || ['What is the goal?', 'How do I achieve it?'];
    }

    breakIntoSubStepsSystem(step) {
        const subSteps = {
            'Substitute': [
                'Identify what to substitute',
                'Put expression in parentheses',
                'Replace variable in second equation',
                'Distribute if needed',
                'Combine like terms',
                'Solve resulting equation'
            ],
            'Prepare for elimination': [
                'Choose variable to eliminate',
                'Identify coefficients',
                'Find multipliers (LCM method)',
                'Multiply first equation',
                'Multiply second equation',
                'Verify coefficients are opposites'
            ],
            'Add equations': [
                'Line up like terms',
                'Add x terms',
                'Add y terms',
                'Add constant terms',
                'Verify one variable cancelled',
                'Write new equation'
            ]
        };

        return subSteps[step.step] || ['Understand goal', 'Apply technique', 'Verify result'];
    }

    generateProgressiveHintsSystem(step, problem) {
        const category = this.systemTypes[problem.type]?.category || 'system_2x2';
        const hintSet = this.hints[category] || this.hints.substitution;

        return {
            level1: hintSet.level1 || 'What is the main goal of this step?',
            level2: hintSet.level2 || 'What technique should I use?',
            level3: hintSet.level3 || 'How do I apply this technique?',
            level4: hintSet.level4 || 'What are the specific operations to perform?'
        };
    }

    generatePracticeVariationSystem(step, problem) {
        return {
            similarProblem: 'Try a similar system with different coefficients',
            practiceHint: 'Start with simpler numbers to build confidence',
            extension: 'Try the same system with a different method'
        };
    }

    explainThinkingProcessSystem(step) {
        return {
            observe: 'What information do I have?',
            goal: 'What am I trying to find?',
            strategy: 'What method will I use?',
            execute: 'How do I carry out this method?',
            verify: 'Does my result make sense?'
        };
    }

    identifyDecisionPointsSystem(step) {
        return [
            'Which method to use (substitution vs elimination)?',
            'Which variable to eliminate or isolate first?',
            'Which equation to use for back-substitution?',
            'How to verify the solution?'
        ];
    }

    suggestAlternativeMethodsSystem(step, problem) {
        const alternatives = {
            'Substitution': [
                'Could use elimination instead',
                'Could graph to visualize solution',
                'Could use matrix method'
            ],
            'Elimination': [
                'Could use substitution instead',
                'Could use Cramer\'s rule',
                'Could graph to verify'
            ]
        };

        return alternatives[step.step] || ['The chosen method is appropriate'];
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
                'system of equations': 'group of equations',
                'coefficient': 'number with variable',
                'substitute': 'replace',
                'eliminate': 'cancel out',
                'determinant': 'special calculation',
                'matrix': 'grid of numbers'
            },
            intermediate: {
                // Standard mathematical terms
            },
            ELI5: {
                'system of equations': 'group of math puzzles that work together',
                'coefficient': 'the number next to the mystery letter',
                'substitute': 'swap one thing for another',
                'eliminate': 'make disappear by canceling',
                'determinant': 'a magic number from the grid',
                'matrix': 'a rectangle of numbers arranged nicely',
                'solution': 'the answer that makes all puzzles work'
            },
            detailed: {
                'coefficient': 'coefficient (multiplicative constant)',
                'substitute': 'substitute (replace variable with equivalent expression)',
                'eliminate': 'eliminate (remove variable through linear combination)'
            }
        };

        const levelAdaptation = adaptations[level.vocabulary] || {};
        let adaptedText = text;

        for (const [term, replacement] of Object.entries(levelAdaptation)) {
            const regex = new RegExp(`\\b${term}\\b`, 'gi');
            adaptedText = adaptedText.replace(regex, replacement);
        }

        return adaptedText;
    }

    generateStepBridge(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression || 'progress from current step'}`,
            nextGoal: `Next: ${nextStep.description}`,
            why: `This is necessary because we need to continue toward isolating variables`,
            howItHelps: `This will simplify the system further`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step}`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy is: ${nextStep.description}`;
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This builds on step ${stepIndex}`,
            progression: 'Moving closer to solution',
            relationship: 'Each step reduces complexity'
        };
    }

    identifyPrerequisites(step, category) {
        const prereqs = this.prerequisites[category];
        return prereqs?.skills || ['Basic algebra'];
    }

    // GRAPH GENERATION

    generateSystemGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const systemSize = this.currentProblem.parameters.systemSize;

        if (systemSize === '2x2' && this.currentSolution.solution) {
            this.graphData = this.generate2x2Graph(this.currentProblem, this.currentSolution);
        } else if (systemSize === '3x3' && this.currentSolution.solution) {
            this.graphData = this.generate3x3Graph(this.currentProblem, this.currentSolution);
        }
    }

    generate2x2Graph(problem, solution) {
        const { a1, b1, c1, a2, b2, c2 } = problem.parameters;

        // Convert to slope-intercept form for graphing
        const line1 = {
            slope: -a1 / b1,
            yIntercept: c1 / b1,
            equation: `y = ${-a1 / b1}x + ${c1 / b1}`
        };

        const line2 = {
            slope: -a2 / b2,
            yIntercept: c2 / b2,
            equation: `y = ${-a2 / b2}x + ${c2 / b2}`
        };

        return {
            type: '2x2_system',
            line1: line1,
            line2: line2,
            intersectionPoint: solution.solution,
            description: `Two lines intersecting at (${solution.solution.x}, ${solution.solution.y})`,
            graphType: 'cartesian_plane'
        };
    }

    generate3x3Graph(problem, solution) {
        return {
            type: '3x3_system',
            description: `Three planes intersecting at point (${solution.solution.x}, ${solution.solution.y}, ${solution.solution.z})`,
            note: '3D visualization recommended',
            graphType: '3d_space'
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
            this.createRealWorldApplicationSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection(),
            this.createHistoricalContextSection(),
            this.createPracticeProblemsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Simultaneous Systems Mathematical Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            explanationLevel: this.explanationLevel,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSection() {
        if (!this.currentProblem) return null;

        const systemSize = this.currentProblem.parameters.systemSize;
        const equations = this.currentProblem.parameters.equations || this.currentProblem.cleanEquations;

        const problemData = [
            ['Problem Type', this.systemTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['System Size', systemSize],
            ['Method', this.currentSolution?.method || 'Not specified'],
            ['', ''],
            ['Equations', '']
        ];

        if (Array.isArray(equations)) {
            equations.forEach((eq, index) => {
                const eqText = eq.raw || eq;
                problemData.push([`Equation ${index + 1}`, eqText]);
            });
        }

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

        const category = this.systemTypes[this.currentProblem.type]?.category || 'system_2x2';
        const prereqs = this.prerequisites[category];

        if (!prereqs) return null;

        const prereqData = [
            ['Required Skills', prereqs.skills.join(', ')],
            ['Prior Knowledge', prereqs.priorKnowledge.join(', ')],
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
        const systemSize = this.currentProblem.parameters.systemSize;
        const currentMethod = this.currentSolution?.method;

        const comparisonData = [
            ['Current Method', currentMethod || 'Not specified'],
            ['System Size', systemSize],
            ['', ''],
            ['Method Comparison', '']
        ];

        if (systemSize === '2x2') {
            comparisonData.push(['', '']);
            comparisonData.push(['Substitution vs Elimination', '']);
            comparisonData.push(['Substitution - Best when', 'Variable already isolated or coefficient of 1']);
            comparisonData.push(['Elimination - Best when', 'Coefficients are opposites or equal']);
            comparisonData.push(['Graphical - Best when', 'Visual understanding needed']);
            comparisonData.push(['Matrix - Best when', 'Using calculator or computer']);
        }

        return {
            title: 'Method Comparison',
            type: 'comparison',
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
                stepsData.push(['Current State', step.explanation.currentState]);
                stepsData.push(['Next Goal', step.explanation.nextGoal]);
                stepsData.push(['', '']);
                return;
            }

            stepsData.push([`Step ${step.stepNumber}`, step.description]);

            if (step.beforeExpression && step.afterExpression) {
                stepsData.push(['Before', step.beforeExpression]);
                if (step.operation) {
                    stepsData.push(['Operation', step.operation]);
                }
                stepsData.push(['After', step.afterExpression]);
            } else if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.algebraicRule) {
                stepsData.push(['Rule Used', step.algebraicRule]);
            }

            if (step.ELI5 && this.explanationLevel === 'ELI5') {
                stepsData.push(['ELI5', step.ELI5.explanation]);
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

            if (step.visualHint) {
                stepsData.push(['Visual Hint', step.visualHint]);
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
            }

            if (step.thinkingPrompts && this.includeThinkingPrompts) {
                stepsData.push(['Think Before', step.thinkingPrompts.before]);
                stepsData.push(['Think During', step.thinkingPrompts.during]);
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
        const systemSize = this.currentProblem.parameters.systemSize;
        const method = this.currentSolution?.method;

        const lessonData = [
            ['Key Concepts', ''],
            ['', 'Systems require ALL equations to be satisfied simultaneously'],
            ['', 'Solution is point (or set of points) satisfying every equation'],
            ['', 'Three possible outcomes: unique solution, no solution, infinite solutions'],
            ['', ''],
            ['Solution Methods', ''],
            ['', 'Substitution: Express one variable in terms of others'],
            ['', 'Elimination: Combine equations to eliminate variables'],
            ['', 'Graphical: Find intersection point(s)'],
            ['', 'Matrix: Use determinants and Cramer\'s rule']
        ];

        if (systemSize === '2x2') {
            lessonData.push(['', '']);
            lessonData.push(['Geometric Interpretation (2×2)', '']);
            lessonData.push(['', 'Each equation is a line in the xy-plane']);
            lessonData.push(['', 'Unique solution: lines intersect at one point']);
            lessonData.push(['', 'No solution: lines are parallel']);
            lessonData.push(['', 'Infinite solutions: lines coincide (same line)']);
        } else if (systemSize === '3x3') {
            lessonData.push(['', '']);
            lessonData.push(['Geometric Interpretation (3×3)', '']);
            lessonData.push(['', 'Each equation is a plane in 3D space']);
            lessonData.push(['', 'Unique solution: three planes meet at one point']);
            lessonData.push(['', 'No solution: no common intersection point']);
            lessonData.push(['', 'Infinite solutions: planes intersect along a line']);
        }

        return {
            title: 'Key Concepts',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [];
        const systemSize = this.currentProblem.parameters.systemSize;

        if (this.currentSolution.solutionType === 'Unique solution') {
            if (systemSize === '2x2') {
                solutionData.push(['Solution', `x = ${this.currentSolution.solution.x}, y = ${this.currentSolution.solution.y}`]);
                solutionData.push(['Ordered Pair', `(${this.currentSolution.solution.x}, ${this.currentSolution.solution.y})`]);
            } else if (systemSize === '3x3') {
                solutionData.push(['Solution', `x = ${this.currentSolution.solution.x}, y = ${this.currentSolution.solution.y}, z = ${this.currentSolution.solution.z}`]);
                solutionData.push(['Ordered Triple', `(${this.currentSolution.solution.x}, ${this.currentSolution.solution.y}, ${this.currentSolution.solution.z})`]);
            }
            solutionData.push(['Solution Type', this.currentSolution.solutionType]);
        } else {
            solutionData.push(['Solution Type', this.currentSolution.solutionType]);
            solutionData.push(['Explanation', this.currentSolution.explanation || 'Special case']);
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
            ['Method Used', this.currentSolution.method || 'Not specified'],
            ['System Size', this.currentProblem.parameters.systemSize],
            ['Number of Steps', this.solutionSteps?.length || 0],
            ['Difficulty Level', this.explanationLevel],
            ['Solution Type', this.currentSolution.solutionType]
        ];

        if (this.currentSolution.determinant !== undefined) {
            analysisData.push(['Determinant', this.currentSolution.determinant]);
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSection() {
        if (!this.currentSolution || !this.currentProblem) return null;

        if (this.currentSolution.solutionType !== 'Unique solution') {
            return {
                title: 'Solution Verification',
                type: 'verification',
                data: [
                    ['Verification', this.currentSolution.solutionType === 'No solution' ?
                        'No solution to verify' : 'Infinite solutions - any point on the line/plane works']
                ]
            };
        }

        const verification = this.currentSolution.verification;
        if (!verification) return null;

        const verificationData = [
            ['Verification Method', 'Substitution into all original equations'],
            ['', '']
        ];

        if (verification.equation1Check) {
            verificationData.push(['Equation 1 Check', '']);
            verificationData.push(['Left Side', verification.equation1Check.left]);
            verificationData.push(['Right Side', verification.equation1Check.right]);
            verificationData.push(['Valid', verification.equation1Check.valid ? 'Yes ✓' : 'No ✗']);
            verificationData.push(['', '']);
        }

        if (verification.equation2Check) {
            verificationData.push(['Equation 2 Check', '']);
            verificationData.push(['Left Side', verification.equation2Check.left]);
            verificationData.push(['Right Side', verification.equation2Check.right]);
            verificationData.push(['Valid', verification.equation2Check.valid ? 'Yes ✓' : 'No ✗']);
            verificationData.push(['', '']);
        }

        if (verification.equation3Check) {
            verificationData.push(['Equation 3 Check', '']);
            verificationData.push(['Left Side', verification.equation3Check.left]);
            verificationData.push(['Right Side', verification.equation3Check.right]);
            verificationData.push(['Valid', verification.equation3Check.valid ? 'Yes ✓' : 'No ✗']);
            verificationData.push(['', '']);
        }

        verificationData.push(['Overall Valid', verification.overallValid ? 'Yes ✓ Solution is correct!' : 'No ✗']);

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const systemSize = this.currentProblem.parameters.systemSize;
        const applications = Object.values(this.realWorldProblems).filter(app =>
            app.systemType === systemSize
        ).slice(0, 3);

        if (applications.length === 0) return null;

        const appData = [
            ['Real-World Applications', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Example', app.example]);
            appData.push(['Context', app.context]);
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

    createHistoricalContextSection() {
        if (!this.includeHistoricalContext) return null;

        const histData = [
            ['Historical Development', ''],
            ['', ''],
            ['Ancient Origins', this.historicalContext.ancient_origins.contribution],
            ['Chinese Mathematics', this.historicalContext.chinese_mathematics.contribution],
            ['Islamic Golden Age', this.historicalContext.islamic_golden_age.contribution],
            ['Modern Development', this.historicalContext.modern_development.contribution],
            ['', ''],
            ['Modern Applications', ''],
            ['Engineering', this.historicalContext.applications.engineering],
            ['Economics', this.historicalContext.applications.economics],
            ['Computer Science', this.historicalContext.applications.computer_science]
        ];

        return {
            title: 'Historical Context',
            type: 'historical',
            data: histData
        };
    }

    createPracticeProblemsSection() {
        const systemSize = this.currentProblem.parameters.systemSize;
        const problems = this.questionBank.byDifficulty;

        const practiceData = [
            ['Practice Problems', ''],
            ['', ''],
            ['Easy Problems', '']
        ];

        const easyKey = systemSize === '3x3' ? 'easy_3x3' : 'easy_2x2';
        const mediumKey = systemSize === '3x3' ? 'medium_3x3' : 'medium_2x2';
        const hardKey = systemSize === '3x3' ? 'hard_3x3' : 'hard_2x2';

        (problems[easyKey] || []).slice(0, 2).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Medium Problems', '']);

        (problems[mediumKey] || []).slice(0, 2).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Hard Problems', '']);

        (problems[hardKey] || []).slice(0, 2).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        return {
            title: 'Practice Problems',
            type: 'practice',
            data: practiceData
        };
    }

    generateSystemPedagogicalNotes(problemType) {
        const category = this.systemTypes[problemType]?.category;

        const pedagogicalDatabase = {
            system_2x2: {
                objectives: [
                    'Solve 2×2 systems using multiple methods',
                    'Choose appropriate solution method',
                    'Recognize and interpret solution types',
                    'Verify solutions algebraically'
                ],
                keyConcepts: [
                    'System represents simultaneous constraints',
                    'Solution satisfies all equations at once',
                    'Geometric interpretation: intersection of lines',
                    'Three solution types: unique, none, infinite'
                ],
                prerequisites: [
                    'Solving linear equations',
                    'Graphing linear equations',
                    'Understanding ordered pairs',
                    'Substitution and distribution'
                ],
                commonDifficulties: [
                    'Forgetting parentheses in substitution',
                    'Sign errors in elimination',
                    'Not recognizing special cases',
                    'Verification errors'
                ],
                teachingStrategies: [
                    'Start with graphical method for intuition',
                    'Practice both substitution and elimination',
                    'Use color coding for different equations',
                    'Emphasize checking solutions',
                    'Connect to real-world problems early'
                ],
                extensions: [
                    '3×3 systems',
                    'Systems with fractions/decimals',
                    'Word problems',
                    'Linear programming'
                ],
                assessment: [
                    'Can student choose appropriate method?',
                    'Does student verify solutions?',
                    'Can student recognize special cases?',
                    'Can student set up systems from word problems?'
                ]
            },
            system_3x3: {
                objectives: [
                    'Solve 3×3 systems using elimination',
                    'Organize work systematically',
                    'Perform multi-step back-substitution',
                    'Verify solutions in all three equations'
                ],
                keyConcepts: [
                    'Reduce 3×3 to 2×2 by elimination',
                    'Must eliminate same variable from two pairs',
                    'Geometric interpretation: intersection of planes',
                    'Solution is ordered triple (x, y, z)'
                ],
                prerequisites: [
                    'Mastery of 2×2 systems',
                    'Strong algebraic manipulation',
                    'Organizational skills',
                    'Patience with longer problems'
                ],
                commonDifficulties: [
                    'Eliminating different variables from different pairs',
                    'Losing track of equations',
                    'Arithmetic errors compounding',
                    'Not verifying in all three equations'
                ],
                teachingStrategies: [
                    'Teach systematic organization (labeling equations)',
                    'Emphasize the 3→2→1 reduction pattern',
                    'Use worksheets with clear structure',
                    'Practice back-substitution separately',
                    'Encourage use of technology for verification'
                ],
                extensions: [
                    'Larger systems (4×4)',
                    'Matrix methods',
                    'Applications in 3D geometry',
                    'Linear programming in 3D'
                ],
                assessment: [
                    'Can student organize work clearly?',
                    'Does student eliminate same variable consistently?',
                    'Can student track multiple equations?',
                    'Does student verify in all equations?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Solve systems of equations'],
            keyConcepts: ['Simultaneous solutions'],
            prerequisites: ['Basic algebra'],
            commonDifficulties: ['Various computational challenges'],
            teachingStrategies: ['Systematic instruction'],
            extensions: ['More complex systems'],
            assessment: ['Verify understanding']
        };
    }

    generateSystemAlternativeMethods(problemType) {
        const category = this.systemTypes[problemType]?.category;

        const alternativeDatabase = {
            system_2x2: {
                primaryMethod: 'Elimination or Substitution',
                methods: [
                    {
                        name: 'Substitution Method',
                        description: 'Solve one equation for one variable, substitute into other'
                    },
                    {
                        name: 'Elimination Method',
                        description: 'Multiply equations and add/subtract to eliminate variable'
                    },
                    {
                        name: 'Graphical Method',
                        description: 'Graph both equations and find intersection point'
                    },
                    {
                        name: 'Matrix Method',
                        description: 'Use Cramer\'s rule with determinants'
                    }
                ],
                comparison: 'Substitution best when variable isolated; Elimination best for standard form; Graphing for visualization; Matrix for computation'
            },
            system_3x3: {
                primaryMethod: 'Elimination',
                methods: [
                    {
                        name: 'Systematic Elimination',
                        description: 'Reduce to 2×2 by eliminating same variable from two pairs'
                    },
                    {
                        name: 'Matrix Method (Cramer\'s Rule)',
                        description: 'Use 3×3 determinants to find each variable'
                    },
                    {
                        name: 'Row Reduction (Gaussian Elimination)',
                        description: 'Use augmented matrix and row operations'
                    },
                    {
                        name: 'Technology',
                        description: 'Use calculator or computer software'
                    }
                ],
                comparison: 'Elimination most systematic by hand; Matrix/row reduction for larger systems; Technology for complex calculations'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard approach',
            methods: [{
                name: 'Alternative',
                description: 'Other methods may apply'
            }],
            comparison: 'Choose based on problem structure'
        };
    }
}

// Export the class
export default EnhancedSimultaneousSystemsWorkbook;
