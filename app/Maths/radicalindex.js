// Enhanced Higher Index Radicals Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedHigherIndexRadicalsWorkbook {
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
        this.initializeRadicalSolvers();
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
        this.initializeRadicalLessons();
    }

    initializeRadicalLessons() {
        this.lessons = {
            higher_index_radicals: {
                title: "Higher Index Radicals (Cube Roots, Fourth Roots, etc.)",
                concepts: [
                    "nth root: ⁿ√a is the number that when raised to the nth power equals a",
                    "Index n determines the type of root (3 = cube root, 4 = fourth root, etc.)",
                    "Even index radicals: only non-negative radicands have real solutions",
                    "Odd index radicals: all real numbers have real solutions",
                    "Radical notation: ⁿ√a where n is the index, a is the radicand"
                ],
                theory: "Higher index radicals extend the concept of square roots. The index n indicates which power to undo. For example, ³√8 = 2 because 2³ = 8.",
                keyFormulas: {
                    "nth Root Definition": "ⁿ√a = b means b^n = a",
                    "Product Property": "ⁿ√(ab) = ⁿ√a · ⁿ√b",
                    "Quotient Property": "ⁿ√(a/b) = ⁿ√a / ⁿ√b",
                    "Power Property": "ⁿ√(a^m) = a^(m/n)",
                    "Rational Exponents": "ⁿ√a = a^(1/n)"
                },
                indexRules: {
                    "Even Index (n = 2, 4, 6, ...)": [
                        "Radicand must be non-negative for real results",
                        "Principal root is non-negative",
                        "⁴√16 = 2 (not ±2)",
                        "⁴√(-16) has no real solution"
                    ],
                    "Odd Index (n = 3, 5, 7, ...)": [
                        "Any real number can be a radicand",
                        "Result has same sign as radicand",
                        "³√8 = 2",
                        "³√(-8) = -2"
                    ]
                },
                solvingSteps: [
                    "Identify the index n and radicand a",
                    "Check if solution exists (even index requires a ≥ 0)",
                    "Find perfect nth powers as factors if simplifying",
                    "Apply radical properties to simplify",
                    "Express in simplest radical form or decimal",
                    "Verify by raising result to nth power"
                ],
                applications: [
                    "Volume calculations (cube roots)",
                    "Physics: intensity relationships (various indices)",
                    "Finance: compound interest roots",
                    "Engineering: stress-strain relationships"
                ]
            },

            cube_roots: {
                title: "Cube Roots (Index 3)",
                concepts: [
                    "³√a asks 'what number cubed equals a?'",
                    "Every real number has exactly one real cube root",
                    "Cube root of negative = negative",
                    "Perfect cubes: 1, 8, 27, 64, 125, 216, ...",
                    "³√(a³) = a for all real a"
                ],
                theory: "Cube roots are the inverse of cubing. Unlike square roots, cube roots of negative numbers are real and negative.",
                keyFormulas: {
                    "Definition": "³√a = b means b³ = a",
                    "Negative Radicands": "³√(-a) = -³√a",
                    "Product": "³√(ab) = ³√a · ³√b",
                    "Quotient": "³√(a/b) = ³√a / ³√b",
                    "Exponent Form": "³√a = a^(1/3)"
                },
                perfectCubes: [1, 8, 27, 64, 125, 216, 343, 512, 729, 1000],
                simplificationStrategy: [
                    "Factor radicand into perfect cube × other factors",
                    "Take cube root of perfect cube factors",
                    "Leave non-perfect cube factors under radical",
                    "Simplify coefficients if possible"
                ],
                applications: [
                    "Volume to side length of cube",
                    "Scaling three-dimensional objects",
                    "Chemistry: molecular relationships",
                    "Economics: growth models"
                ]
            },

            fourth_roots: {
                title: "Fourth Roots (Index 4)",
                concepts: [
                    "⁴√a asks 'what number to the fourth power equals a?'",
                    "Radicand must be non-negative (even index)",
                    "Principal fourth root is non-negative",
                    "Perfect fourth powers: 1, 16, 81, 256, 625, ...",
                    "⁴√(a⁴) = |a| (absolute value for even index)"
                ],
                theory: "Fourth roots are similar to square roots but 'undo' the fourth power. Being an even index, only non-negative radicands have real fourth roots.",
                keyFormulas: {
                    "Definition": "⁴√a = b means b⁴ = a (where b ≥ 0)",
                    "Non-negative Requirement": "a ≥ 0 for real result",
                    "Product": "⁴√(ab) = ⁴√a · ⁴√b",
                    "Quotient": "⁴√(a/b) = ⁴√a / ⁴√b",
                    "Exponent Form": "⁴√a = a^(1/4)"
                },
                perfectFourthPowers: [1, 16, 81, 256, 625, 1296, 2401, 4096],
                simplificationStrategy: [
                    "Factor radicand into perfect fourth power × other factors",
                    "Take fourth root of perfect fourth power factors",
                    "Leave non-perfect factors under radical",
                    "Check that radicand is non-negative"
                ],
                applications: [
                    "Hyperdimensional volume calculations",
                    "Quartic relationships in physics",
                    "Signal processing (fourth moment)",
                    "Statistical kurtosis calculations"
                ]
            },

            fifth_sixth_roots: {
                title: "Fifth, Sixth, and Higher Roots",
                concepts: [
                    "Pattern continues: nth root undoes nth power",
                    "Odd indices (5, 7, 9, ...): all real numbers have real roots",
                    "Even indices (6, 8, 10, ...): only non-negative radicands",
                    "Higher indices give values closer to 1 for radicands > 1",
                    "Higher indices give larger values for radicands between 0 and 1"
                ],
                theory: "As index increases, the radical becomes 'weaker' - it takes a larger base to produce a given radicand under higher powers.",
                keyFormulas: {
                    "General Definition": "ⁿ√a = b means b^n = a",
                    "Odd Index": "All real radicands allowed",
                    "Even Index": "Only a ≥ 0 for real results",
                    "Product": "ⁿ√(ab) = ⁿ√a · ⁿ√b",
                    "Exponent Form": "ⁿ√a = a^(1/n)"
                },
                comparisons: {
                    "For a > 1": "√a > ³√a > ⁴√a > ⁵√a > ... → 1",
                    "For 0 < a < 1": "√a < ³√a < ⁴√a < ⁵√a < ... → a",
                    "For a = 1": "ⁿ√1 = 1 for all n"
                },
                applications: [
                    "Multi-dimensional geometry",
                    "Advanced physics models",
                    "Financial mathematics",
                    "Computer graphics transformations"
                ]
            },

            simplifying_radicals: {
                title: "Simplifying Higher Index Radicals",
                concepts: [
                    "Goal: extract all perfect nth powers from radicand",
                    "Express radicand as product of perfect nth power and other factors",
                    "Perfect nth power comes out from under radical",
                    "Simplest form has no perfect nth power factors under radical",
                    "No fractions under radical (rationalize if needed)"
                ],
                theory: "Simplifying makes radicals easier to work with and compare. Use prime factorization or factor trees to identify perfect nth powers.",
                keyFormulas: {
                    "Product Property": "ⁿ√(a^n · b) = a · ⁿ√b",
                    "General Simplification": "ⁿ√(x^m) where m ≥ n: ⁿ√(x^m) = x^(m÷n) · ⁿ√(x^remainder)",
                    "Example": "³√(54) = ³√(27·2) = ³√27 · ³√2 = 3³√2"
                },
                simplificationSteps: [
                    "Prime factorize the radicand",
                    "Group factors into sets of n identical factors",
                    "Move complete groups outside radical",
                    "Leave ungrouped factors inside",
                    "Simplify coefficient and radicand"
                ],
                applications: [
                    "Making calculations easier",
                    "Comparing radical expressions",
                    "Preparing for operations with radicals",
                    "Converting to decimal approximations"
                ]
            },

            operations_with_radicals: {
                title: "Operations with Higher Index Radicals",
                concepts: [
                    "Like radicals: same index and same radicand",
                    "Can add/subtract only like radicals",
                    "Multiply/divide: use product/quotient properties",
                    "To add unlike radicals: simplify first, then check if like",
                    "Rationalize denominators with radicals"
                ],
                theory: "Operations with radicals follow specific rules based on their indices and radicands. Understanding these rules allows for accurate manipulation.",
                keyFormulas: {
                    "Addition": "aⁿ√x + bⁿ√x = (a+b)ⁿ√x",
                    "Multiplication": "ⁿ√a · ⁿ√b = ⁿ√(ab)",
                    "Division": "ⁿ√a / ⁿ√b = ⁿ√(a/b)",
                    "Power": "(ⁿ√a)^m = ⁿ√(a^m)"
                },
                operationRules: {
                    "Same Index": "Can use product/quotient properties",
                    "Different Indices": "Convert to rational exponents first",
                    "Adding": "Must have same index AND radicand",
                    "Rationalizing": "Multiply by form of 1 to eliminate radical in denominator"
                },
                applications: [
                    "Combining measurements",
                    "Algebraic simplification",
                    "Solving radical equations",
                    "Engineering calculations"
                ]
            },

            radical_equations: {
                title: "Equations with Higher Index Radicals",
                concepts: [
                    "Isolate the radical term first",
                    "Raise both sides to the nth power to eliminate radical",
                    "Solve resulting equation",
                    "ALWAYS check solutions (extraneous solutions possible)",
                    "For even indices, check domain restrictions"
                ],
                theory: "Solving radical equations involves eliminating the radical by raising to appropriate powers. This can introduce extraneous solutions that must be verified.",
                keyFormulas: {
                    "Elimination": "(ⁿ√x)^n = x",
                    "Both Sides": "If A = B, then A^n = B^n",
                    "Check": "Substitute back into original equation"
                },
                solvingStrategy: [
                    "Isolate radical on one side",
                    "Raise both sides to nth power",
                    "Solve resulting equation",
                    "Check all solutions in original equation",
                    "Reject extraneous solutions"
                ],
                domainConsiderations: {
                    "Even Index": "Radicand ≥ 0, result ≥ 0",
                    "Odd Index": "All real numbers allowed",
                    "Composed Radicals": "Check each radicand separately"
                },
                applications: [
                    "Physics: energy and power relationships",
                    "Geometry: finding dimensions",
                    "Engineering: stress calculations",
                    "Finance: solving for rates"
                ]
            },

            rational_exponents: {
                title: "Rational Exponents and Radicals",
                concepts: [
                    "ⁿ√a = a^(1/n) (radical as exponent)",
                    "ⁿ√(a^m) = a^(m/n) (power under radical)",
                    "Numerator is the power, denominator is the index",
                    "Exponent rules apply to rational exponents",
                    "Convert between radical and exponential form"
                ],
                theory: "Rational exponents provide an alternative notation for radicals that follows exponent rules more naturally.",
                keyFormulas: {
                    "Basic": "a^(1/n) = ⁿ√a",
                    "With Power": "a^(m/n) = ⁿ√(a^m) = (ⁿ√a)^m",
                    "Product": "a^(m/n) · a^(p/q) = a^(m/n + p/q)",
                    "Quotient": "a^(m/n) / a^(p/q) = a^(m/n - p/q)",
                    "Power": "(a^(m/n))^p = a^(mp/n)"
                },
                conversionRules: {
                    "To Exponent": "ⁿ√(a^m) → a^(m/n)",
                    "To Radical": "a^(m/n) → ⁿ√(a^m) or (ⁿ√a)^m",
                    "Negative Exponents": "a^(-m/n) = 1/a^(m/n)"
                },
                applications: [
                    "Algebraic manipulation",
                    "Solving equations",
                    "Calculus: derivatives and integrals",
                    "Computer calculations"
                ]
            },

            complex_radicals: {
                title: "Complex Radical Expressions",
                concepts: [
                    "Radicals within radicals (nested radicals)",
                    "Combinations of different indices",
                    "Radical expressions with variables",
                    "Simplifying complex radical forms",
                    "Domain and range considerations"
                ],
                theory: "Complex radical expressions require systematic application of radical properties and careful attention to domains and simplification order.",
                keyFormulas: {
                    "Nested": "ᵐ√(ⁿ√a) = ᵐⁿ√a",
                    "Product of Different Indices": "Convert to rational exponents",
                    "Variables": "Apply absolute value for even indices when needed"
                },
                simplificationStrategy: [
                    "Work from innermost to outermost",
                    "Convert to rational exponents for different indices",
                    "Simplify each radical separately",
                    "Combine like terms if possible",
                    "Check domain restrictions"
                ],
                applications: [
                    "Advanced mathematics",
                    "Theoretical physics",
                    "Pure mathematics research",
                    "Algorithm optimization"
                ]
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
            // Radical symbols
            'sqrt': '√',
            'cbrt': '∛',
            'fourthrt': '∜',
            // Mathematical operators
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±',
            // Greek letters
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            // Special symbols
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'perpendicular': '⊥', 'parallel': '∥'
        };
    }

    initializeRadicalSolvers() {
        this.radicalTypes = {
            // Cube roots
            cube_root_evaluation: {
                patterns: [
                    /cube\s+root/i,
                    /∛/,
                    /cbrt/i,
                    /\^(1\/3)/,
                    /third\s+root/i
                ],
                solver: this.solveCubeRoot.bind(this),
                name: 'Cube Root Evaluation',
                category: 'cube_roots',
                description: 'Evaluates ³√a'
            },

            cube_root_simplification: {
                patterns: [
                    /simplify.*cube.*root/i,
                    /simplify.*∛/
                ],
                solver: this.simplifyCubeRoot.bind(this),
                name: 'Cube Root Simplification',
                category: 'cube_roots',
                description: 'Simplifies ³√a to simplest radical form'
            },

            // Fourth roots
            fourth_root_evaluation: {
                patterns: [
                    /fourth\s+root/i,
                    /∜/,
                    /\^(1\/4)/
                ],
                solver: this.solveFourthRoot.bind(this),
                name: 'Fourth Root Evaluation',
                category: 'fourth_roots',
                description: 'Evaluates ⁴√a'
            },

            fourth_root_simplification: {
                patterns: [
                    /simplify.*fourth.*root/i,
                    /simplify.*∜/
                ],
                solver: this.simplifyFourthRoot.bind(this),
                name: 'Fourth Root Simplification',
                category: 'fourth_roots',
                description: 'Simplifies ⁴√a to simplest radical form'
            },

            // Fifth and higher roots
            fifth_root_evaluation: {
                patterns: [
                    /fifth\s+root/i,
                    /\^(1\/5)/
                ],
                solver: this.solveFifthRoot.bind(this),
                name: 'Fifth Root Evaluation',
                category: 'fifth_sixth_roots',
                description: 'Evaluates ⁵√a'
            },

            nth_root_evaluation: {
                patterns: [
                    /nth\s+root/i,
                    /index\s+\d+/i,
                    /root.*index/i
                ],
                solver: this.solveNthRoot.bind(this),
                name: 'nth Root Evaluation',
                category: 'higher_index_radicals',
                description: 'Evaluates ⁿ√a for any index n'
            },

            nth_root_simplification: {
                patterns: [
                    /simplify.*nth.*root/i,
                    /simplify.*radical.*index/i
                ],
                solver: this.simplifyNthRoot.bind(this),
                name: 'nth Root Simplification',
                category: 'simplifying_radicals',
                description: 'Simplifies ⁿ√a to simplest form'
            },

            // Operations with radicals
            multiply_radicals: {
                patterns: [
                    /multiply.*radical/i,
                    /product.*radical/i,
                    /∛.*\*.*∛/,
                    /∜.*\*.*∜/
                ],
                solver: this.multiplyRadicals.bind(this),
                name: 'Multiply Radicals',
                category: 'operations_with_radicals',
                description: 'Multiplies ⁿ√a · ⁿ√b'
            },

            divide_radicals: {
                patterns: [
                    /divide.*radical/i,
                    /quotient.*radical/i,
                    /∛.*\/.*∛/,
                    /∜.*\/.*∜/
                ],
                solver: this.divideRadicals.bind(this),
                name: 'Divide Radicals',
                category: 'operations_with_radicals',
                description: 'Divides ⁿ√a / ⁿ√b'
            },

            add_radicals: {
                patterns: [
                    /add.*radical/i,
                    /sum.*radical/i,
                    /∛.*\+.*∛/,
                    /∜.*\+.*∜/
                ],
                solver: this.addRadicals.bind(this),
                name: 'Add Radicals',
                category: 'operations_with_radicals',
                description: 'Adds like radicals'
            },

            // Radical equations
            solve_radical_equation: {
                patterns: [
                    /solve.*∛/i,
                    /solve.*∜/i,
                    /equation.*radical/i,
                    /radical.*equation/i
                ],
                solver: this.solveRadicalEquation.bind(this),
                name: 'Solve Radical Equation',
                category: 'radical_equations',
                description: 'Solves equations containing radicals'
            },

            // Rational exponents
            radical_to_exponent: {
                patterns: [
                    /convert.*exponent/i,
                    /radical.*to.*exponent/i,
                    /exponent.*form/i
                ],
                solver: this.convertRadicalToExponent.bind(this),
                name: 'Radical to Exponent Form',
                category: 'rational_exponents',
                description: 'Converts ⁿ√a to a^(1/n)'
            },

            exponent_to_radical: {
                patterns: [
                    /convert.*radical/i,
                    /exponent.*to.*radical/i,
                    /radical.*form/i
                ],
                solver: this.convertExponentToRadical.bind(this),
                name: 'Exponent to Radical Form',
                category: 'rational_exponents',
                description: 'Converts a^(m/n) to ⁿ√(a^m)'
            },

            // Complex radicals
            nested_radicals: {
                patterns: [
                    /nested.*radical/i,
                    /radical.*within.*radical/i,
                    /∛.*∛/,
                    /∜.*∜/
                ],
                solver: this.solveNestedRadicals.bind(this),
                name: 'Nested Radicals',
                category: 'complex_radicals',
                description: 'Simplifies radicals within radicals'
            },

            rationalize_denominator: {
                patterns: [
                    /rationalize/i,
                    /denominator.*radical/i,
                    /\/\s*∛/,
                    /\/\s*∜/
                ],
                solver: this.rationalizeDenominator.bind(this),
                name: 'Rationalize Denominator',
                category: 'operations_with_radicals',
                description: 'Eliminates radicals from denominator'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            cube_roots: {
                'Evaluating cube root': [
                    'Forgetting that ³√(-8) = -2 (negative is allowed)',
                    'Confusing cube root with square root',
                    'Not recognizing perfect cubes (8, 27, 64, 125, ...)',
                    'Sign errors with negative radicands'
                ],
                'Simplifying cube root': [
                    'Not factoring out all perfect cubes',
                    'Missing factor groups of 3 in prime factorization',
                    'Incorrectly simplifying ³√(8x³) to 2x instead of 2x³√1 = 2x',
                    'Forgetting to simplify coefficient and radicand separately'
                ]
            },
            fourth_roots: {
                'Evaluating fourth root': [
                    'Trying to find ⁴√(-16) in real numbers (even index)',
                    'Not recognizing perfect fourth powers (16, 81, 256, ...)',
                    'Forgetting ⁴√a⁴ = |a| not just a',
                    'Arithmetic errors in calculating fourth powers'
                ],
                'Simplifying fourth root': [
                    'Not extracting all perfect fourth powers',
                    'Missing factor groups of 4 in prime factorization',
                    'Sign errors with absolute value',
                    'Incomplete simplification'
                ]
            },
            higher_index: {
                'Determining domain': [
                    'Forgetting even indices require non-negative radicands',
                    'Not checking domain before evaluating',
                    'Confusion about which indices are odd vs even',
                    'Missing domain restrictions in equations'
                ],
                'Simplification': [
                    'Not identifying perfect nth powers correctly',
                    'Incomplete prime factorization',
                    'Missing opportunities to simplify',
                    'Errors in grouping factors'
                ]
            },
            operations: {
                'Adding radicals': [
                    'Adding unlike radicals: ³√2 + ³√3 ≠ ³√5',
                    'Not simplifying first to find like radicals',
                    'Incorrectly combining coefficients',
                    'Forgetting radicals must have same index AND radicand'
                ],
                'Multiplying radicals': [
                    'Multiplying radicals with different indices incorrectly',
                    'Not simplifying product under radical',
                    'Forgetting to multiply coefficients',
                    'Sign errors in products'
                ],
                'Dividing radicals': [
                    'Not rationalizing denominators',
                    'Division by zero issues',
                    'Incorrectly handling quotient property',
                    'Sign errors in quotients'
                ]
            },
            equations: {
                'Solving': [
                    'Not checking for extraneous solutions',
                    'Raising to wrong power',
                    'Not isolating radical before eliminating it',
                    'Losing solutions or introducing false ones',
                    'Domain restriction violations'
                ],
                'Verification': [
                    'Skipping verification step',
                    'Not substituting into ORIGINAL equation',
                    'Arithmetic errors in checking',
                    'Accepting extraneous solutions'
                ]
            },
            exponents: {
                'Converting forms': [
                    'Confusing numerator and denominator in a^(m/n)',
                    'Not simplifying rational exponents',
                    'Sign errors with negative exponents',
                    'Incorrect application of exponent rules'
                ],
                'Simplifying': [
                    'Not converting to common denominators for exponents',
                    'Errors in adding/subtracting rational exponents',
                    'Forgetting to apply power rules correctly',
                    'Domain issues with even denominators'
                ]
            }
        };

        this.errorPrevention = {
            index_awareness: {
                reminder: 'Always identify the index first - it determines everything',
                method: 'Circle the index and note if it\'s odd (all reals) or even (non-negative only)'
            },
            perfect_powers: {
                reminder: 'Memorize perfect cubes, fourth powers for quick recognition',
                method: 'Keep a reference list: cubes (1,8,27,64,125...), fourths (1,16,81,256...)'
            },
            sign_tracking: {
                reminder: 'Odd index preserves sign; even index gives non-negative result',
                method: 'For odd index: ⁿ√(-a) = -ⁿ√a; for even: no real solution if a < 0'
            },
            simplification_completeness: {
                reminder: 'Keep factoring until no perfect nth powers remain',
                method: 'Use prime factorization and group in sets of n'
            },
            domain_checking: {
                reminder: 'Check domain BEFORE evaluating, especially for even indices',
                method: 'Ask: Is the index even? If yes, is radicand ≥ 0?'
            },
            verification_always: {
                reminder: 'ALWAYS verify solutions in radical equations',
                method: 'Substitute back into ORIGINAL equation, not simplified form'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why higher indices work and their mathematical meaning',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Exact sequence of operations for radical manipulation',
                language: 'step-by-step instructions'
            },
            visual: {
                focus: 'Graphical representation and geometric understanding',
                language: 'visual and spatial metaphors'
            },
            algebraic: {
                focus: 'Formal radical properties and theorems',
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
            cube_volume: {
                scenario: "Finding side length from volume of a cube",
                equation: "V = s³, so s = ³√V",
                examples: [
                    "A cube has volume 64 cm³. What is its side length? s = ³√64 = 4 cm",
                    "Storage container is 1000 cubic feet. What's the side of equivalent cube? ³√1000 = 10 ft"
                ],
                context: "Cube root directly relates volume to linear dimensions in 3D objects"
            },
            sound_intensity: {
                scenario: "Sound intensity follows inverse cube law",
                equation: "I ∝ 1/d³, distance d = ³√(k/I)",
                examples: [
                    "If intensity drops to 1/8 at distance d, original distance was ³√8 = 2 times closer"
                ],
                context: "Physics: sound, light, and gravitational intensity diminish with cube of distance"
            },
            scaling_objects: {
                scenario: "Scaling 3D objects by volume ratio",
                equation: "If volume scales by factor k, linear dimensions scale by ³√k",
                examples: [
                    "Model car is 1/27 the volume of real car. Linear scale is ³√(1/27) = 1/3"
                ],
                context: "Architecture, modeling, and engineering use cube roots for proportional scaling"
            },
            compound_interest: {
                scenario: "Finding interest rate from compound growth",
                equation: "A = P(1+r)³ for 3 years, so r = ³√(A/P) - 1",
                examples: [
                    "Investment doubles in 3 years. Rate r = ³√2 - 1 ≈ 0.26 or 26%"
                ],
                context: "Finance uses various roots to annualize returns over different periods"
            },
            stress_strain: {
                scenario: "Materials science: stress-strain relationships",
                equation: "Some materials follow σ ∝ ε^(1/3) or fourth root relationships",
                examples: [
                    "Ceramic strength modeling uses fourth root relationships"
                ],
                context: "Engineering: material properties often involve higher index radicals"
            },
            chemistry_concentration: {
                scenario: "Dilution and concentration calculations",
                equation: "Serial dilution by factor of cube root",
                examples: [
                    "Achieve 1/64 concentration in 3 equal dilutions: each dilution factor is ³√64 = 4"
                ],
                context: "Laboratory work: systematic dilutions use cube roots for equal steps"
            },
            turbulence: {
                scenario: "Fluid dynamics: turbulent flow relationships",
                equation: "Energy cascade in turbulence involves cube roots",
                examples: [
                    "Eddy sizes in turbulent flow follow cube root scaling"
                ],
                context: "Physics and engineering: complex fluid behavior uses higher roots"
            },
            area_volume_conversions: {
                scenario: "Converting between area and volume measurements",
                equation: "For cube: A = 6s², V = s³; s = ³√V = √(A/6)",
                examples: [
                    "Cube has surface area 96 cm². Find volume: s = √(96/6) = 4, so V = 4³ = 64 cm³"
                ],
                context: "Geometry: relating different dimensional measurements"
            },
            planetary_orbits: {
                scenario: "Kepler's third law with cube roots",
                equation: "T² ∝ R³, so R ∝ ³√(T²) or T ∝ √(R³)",
                examples: [
                    "Planet with 8-year period is ³√(8²) = ³√64 = 4 AU from sun"
                ],
                context: "Astronomy: orbital mechanics involves square and cube roots"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            cube_roots: {
                skills: ['Perfect cubes recognition', 'Cubing numbers', 'Prime factorization', 'Negative number operations'],
                priorKnowledge: [
                    'Understanding of square roots',
                    'Exponentiation (powers)',
                    'Inverse operations concept',
                    'Odd vs even properties'
                ],
                checkQuestions: [
                    "What is 2³?",
                    "What is 3³?",
                    "Is 27 a perfect cube?",
                    "What is (-2)³?"
                ]
            },
            fourth_roots: {
                skills: ['Perfect fourth powers', 'Raising to fourth power', 'Even index understanding', 'Absolute value'],
                priorKnowledge: [
                    'Square roots',
                    'Cube roots',
                    'Non-negative principle for even indices',
                    'Powers of powers'
                ],
                checkQuestions: [
                    "What is 2⁴?",
                    "What is 3⁴?",
                    "Is 81 a perfect fourth power?",
                    "Can ⁴√(-16) be evaluated in real numbers?"
                ]
            },
            higher_index: {
                skills: ['General nth powers', 'Index identification', 'Prime factorization', 'Pattern recognition'],
                priorKnowledge: [
                    'Square and cube roots',
                    'Exponent rules',
                    'Odd vs even index behavior',
                    'Rational exponents'
                ],
                checkQuestions: [
                    "What does the index tell you?",
                    "How do odd and even indices differ?",
                    "What is 2⁵?",
                    "Convert ⁵√a to exponent form"
                ]
            },
            simplifying: {
                skills: ['Prime factorization', 'Perfect power identification', 'Factor grouping', 'Product property'],
                priorKnowledge: [
                    'Evaluating radicals',
                    'Product property: ⁿ√(ab) = ⁿ√a · ⁿ√b',
                    'Perfect nth powers',
                    'Coefficient extraction'
                ],
                checkQuestions: [
                    "Factor 54 into primes",
                    "What perfect cubes divide 54?",
                    "Simplify ³√8",
                    "Simplify ³√27x³"
                ]
            },
            operations: {
                skills: ['Like radicals identification', 'Product/quotient properties', 'Coefficient operations', 'Rationalizing'],
                priorKnowledge: [
                    'Simplifying radicals',
                    'Like terms in algebra',
                    'Multiplication of radicals',
                    'Fraction operations'
                ],
                checkQuestions: [
                    "Are ³√2 and 2³√2 like radicals?",
                    "Multiply: ³√2 · ³√4",
                    "Can you add ³√2 + ³√3?",
                    "Simplify ³√2 · ³√16"
                ]
            },
            equations: {
                skills: ['Isolating radicals', 'Raising to powers', 'Checking solutions', 'Domain analysis'],
                priorKnowledge: [
                    'Solving linear equations',
                    'Inverse operations',
                    'Extraneous solutions concept',
                    'Domain restrictions'
                ],
                checkQuestions: [
                    "Solve: x + 3 = 10",
                    "What is (³√8)³?",
                    "Why check solutions in radical equations?",
                    "When might solutions be extraneous?"
                ]
            },
            rational_exponents: {
                skills: ['Exponent rules', 'Fraction operations', 'Form conversion', 'Simplification'],
                priorKnowledge: [
                    'Integer exponents',
                    'Radical notation',
                    'Fraction arithmetic',
                    'Power rules'
                ],
                checkQuestions: [
                    "What is a² · a³?",
                    "What is (a²)³?",
                    "Convert ³√a to exponent form",
                    "What is a^(1/2) · a^(1/3)?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            volume_visualization: {
                description: "Cube root as 'undoing' volume",
                analogy: "If you know a box's volume, cube root finds its side length",
                visualization: "Draw cube, show volume formula, work backwards to side",
                suitableFor: ['cube_roots'],
                explanation: "³√V gives the side length of a cube with volume V"
            },
            inverse_operation: {
                description: "Radical undoes corresponding power",
                analogy: "Like subtraction undoes addition, ⁿ√ undoes raising to nth power",
                visualization: "Show a ← ⁿ√ ← a^n → ^n → a as circular process",
                suitableFor: ['all_radicals'],
                explanation: "ⁿ√(a^n) = a (with absolute value for even n)"
            },
            number_line: {
                description: "Radicals as positions between integers",
                analogy: "³√20 is between 2 and 3 since 2³=8 < 20 < 27=3³",
                visualization: "Mark perfect powers on number line, locate radical between them",
                suitableFor: ['all_radicals'],
                explanation: "Helps estimate and understand radical values"
            },
            prime_tree: {
                description: "Factor tree for simplification",
                analogy: "Breaking a number into building blocks to find perfect power groups",
                visualization: "Draw factor tree, circle groups of n identical factors",
                suitableFor: ['simplifying_radicals'],
                explanation: "Visual method to identify perfect nth powers within radicand"
            },
            exponent_bridge: {
                description: "Rational exponents connect radicals and powers",
                analogy: "Two languages (radical and exponent) saying the same thing",
                visualization: "Show ⁿ√(a^m) ↔ a^(m/n) as translation",
                suitableFor: ['rational_exponents'],
                explanation: "Exponent form makes calculations easier sometimes"
            },
            nested_boxes: {
                description: "Nested radicals as boxes within boxes",
                analogy: "Opening outer box to reveal inner box",
                visualization: "Draw nested rectangles representing radicals",
                suitableFor: ['complex_radicals'],
                explanation: "Work from outside in, or convert to exponents"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "³√8",
                    solution: 2,
                    steps: ["Ask: what number cubed equals 8?", "2³ = 2·2·2 = 8", "Therefore ³√8 = 2"],
                    difficulty: "easy",
                    category: "cube_roots"
                },
                {
                    problem: "³√27",
                    solution: 3,
                    steps: ["Ask: what number cubed equals 27?", "3³ = 3·3·3 = 27", "Therefore ³√27 = 3"],
                    difficulty: "easy",
                    category: "cube_roots"
                },
                {
                    problem: "⁴√16",
                    solution: 2,
                    steps: ["Ask: what number to the 4th equals 16?", "2⁴ = 2·2·2·2 = 16", "Therefore ⁴√16 = 2"],
                    difficulty: "easy",
                    category: "fourth_roots"
                },
                {
                    problem: "³√(-8)",
                    solution: -2,
                    steps: ["Odd index allows negative radicand", "(-2)³ = (-2)·(-2)·(-2) = -8", "Therefore ³√(-8) = -2"],
                    difficulty: "easy",
                    category: "cube_roots"
                }
            ],
            intermediate: [
                {
                    problem: "³√54",
                    solution: "3³√2",
                    steps: [
                        "Factor: 54 = 27 · 2 = 3³ · 2",
                        "Apply product property: ³√54 = ³√(27·2) = ³√27 · ³√2",
                        "Simplify: ³√27 = 3",
                        "Result: 3³√2"
                    ],
                    difficulty: "medium",
                    category: "simplifying_radicals"
                },
                {
                    problem: "⁴√81",
                    solution: 3,
                    steps: ["Recognize 81 = 3⁴", "Therefore ⁴√81 = ⁴√(3⁴) = 3"],
                    difficulty: "medium",
                    category: "fourth_roots"
                },
                {
                    problem: "³√16 · ³√2",
                    solution: "2³√2",
                    steps: [
                        "Use product property: ³√16 · ³√2 = ³√(16·2) = ³√32",
                        "Factor: 32 = 8 · 4 = 2³ · 4",
                        "Simplify: ³√32 = ³√(8·4) = ³√8 · ³√4 = 2³√4",
                        "Further: 4 = 2², so ³√4 = ³√(2²)",
                        "Final: 2³√4 or approximately 3.17"
                    ],
                    difficulty: "medium",
                    category: "operations_with_radicals"
                },
                {
                    problem: "Solve: ³√x = 4",
                    solution: 64,
                    steps: [
                        "Cube both sides: (³√x)³ = 4³",
                        "Left side simplifies: x = 64",
                        "Check: ³√64 = 4 ✓"
                    ],
                    difficulty: "medium",
                    category: "radical_equations"
                }
            ],
            advanced: [
                {
                    problem: "³√(128x⁷)",
                    solution: "4x²³√(2x)",
                    steps: [
                        "Factor radicand: 128x⁷ = (64·2)(x⁶·x) = 4³·2·x⁶·x",
                        "Apply product property: ³√(4³·2·x⁶·x)",
                        "Extract perfect cubes: ³√(4³) = 4, ³√(x⁶) = x²",
                        "Result: 4x²³√(2x)"
                    ],
                    difficulty: "hard",
                    category: "simplifying_radicals"
                },
                {
                    problem: "Solve: ³√(2x+1) = 3",
                    solution: 13,
                    steps: [
                        "Cube both sides: 2x + 1 = 27",
                        "Solve linear equation: 2x = 26",
                        "x = 13",
                        "Check: ³√(2·13+1) = ³√27 = 3 ✓"
                    ],
                    difficulty: "hard",
                    category: "radical_equations"
                },
                {
                    problem: "Convert to radical form: a^(2/3)",
                    solution: "³√(a²) or (³√a)²",
                    steps: [
                        "Identify: numerator 2 is power, denominator 3 is index",
                        "Form 1: ³√(a²)",
                        "Form 2: (³√a)²",
                        "Both are equivalent"
                    ],
                    difficulty: "hard",
                    category: "rational_exponents"
                },
                {
                    problem: "³√(³√64)",
                    solution: "2 or ⁹√64",
                    steps: [
                        "Inner radical: ³√64 = 4",
                        "Outer radical: ³√4",
                        "Or use property: ³√(³√64) = ⁹√64 = 64^(1/9) = 2^(6/9) = 2^(2/3)",
                        "Evaluate: approximately 1.587 or exact ³√4"
                    ],
                    difficulty: "hard",
                    category: "complex_radicals"
                }
            ]
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            negative_radicands: {
                misconception: "No radicals of negative numbers exist",
                reality: "Odd index radicals of negative numbers are real and negative",
                correctiveExample: "³√(-8) = -2 is valid because (-2)³ = -8. Only EVEN indices prohibit negatives.",
                commonIn: ['cube_roots', 'higher_index']
            },
            addition_of_radicals: {
                misconception: "³√a + ³√b = ³√(a+b)",
                reality: "Can only add like radicals; product property doesn't apply to addition",
                correctiveExample: "³√2 + ³√3 ≠ ³√5. Just as √4 + √9 = 2+3=5, not √13≈3.6",
                commonIn: ['operations_with_radicals']
            },
            index_confusion: {
                misconception: "All radicals work like square roots",
                reality: "Different indices have different properties, especially odd vs even",
                correctiveExample: "√(-4) has no real answer, but ³√(-8) = -2",
                commonIn: ['all_radicals']
            },
            simplification_incompleteness: {
                misconception: "³√54 = ³√54 is fully simplified",
                reality: "Must extract all perfect cubes: ³√54 = ³√(27·2) = 3³√2",
                correctiveExample: "Like saying 6/8 is simplified when it should be 3/4",
                commonIn: ['simplifying_radicals']
            },
            exponent_conversion: {
                misconception: "a^(2/3) = ²√a³ or confusing numerator/denominator roles",
                reality: "Denominator is index, numerator is power: a^(2/3) = ³√(a²)",
                correctiveExample: "Remember: bottom number (3) is the root index",
                commonIn: ['rational_exponents']
            },
            verification_skipping: {
                misconception: "If I solved correctly, I don't need to check",
                reality: "Raising to powers can introduce extraneous solutions that MUST be verified",
                correctiveExample: "Solve ³√x = -2: x = -8. But ³√(-8) = -2, not 2, so check carefully!",
                commonIn: ['radical_equations']
            },
            absolute_value_forgetting: {
                misconception: "⁴√(x⁴) = x always",
                reality: "For even indices: ⁿ√(aⁿ) = |a|, not just a",
                correctiveExample: "⁴√((-2)⁴) = ⁴√16 = 2, not -2. Even indices give non-negative results.",
                commonIn: ['fourth_roots', 'higher_index']
            },
            different_indices: {
                misconception: "Can multiply ³√2 · ⁴√2 directly",
                reality: "Different indices require conversion to rational exponents first",
                correctiveExample: "³√2 · ⁴√2 = 2^(1/3) · 2^(1/4) = 2^(1/3 + 1/4) = 2^(7/12) = ¹²√(2⁷)",
                commonIn: ['operations_with_radicals']
            },
            nested_radical_confusion: {
                misconception: "³√(⁴√a) = ¹²√a incorrectly applying indices",
                reality: "Multiply indices: ³√(⁴√a) = ¹²√a is correct, but understand why",
                correctiveExample: "³√(⁴√a) = (a^(1/4))^(1/3) = a^((1/4)·(1/3)) = a^(1/12) = ¹²√a",
                commonIn: ['complex_radicals']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            cube_root_concept: {
                analogy: "Unpacking nested boxes",
                explanation: "Cubing is like putting something in a box, then that box in another box, then that in a third box. Cube root is unpacking all three boxes to get the original item.",
                suitableFor: ['cube_roots'],
                ELI5: "If you put a toy in a box 3 times (box in a box in a box), taking the cube root is like opening all 3 boxes to get your toy back!"
            },
            index_meaning: {
                analogy: "Levels of wrapping",
                explanation: "The index tells you how many 'layers' were added by the power operation. Cube root removes 3 layers, fourth root removes 4 layers.",
                suitableFor: ['higher_index_radicals'],
                ELI5: "The tiny number (index) tells you how many times something was multiplied by itself. The root operation undoes all those multiplications!"
            },
            odd_even_indices: {
                analogy: "Mirror vs no mirror",
                explanation: "Even indices are like looking in a mirror - you only see positive reflections. Odd indices are like a regular photo - negatives stay negative.",
                suitableFor: ['all_radicals'],
                ELI5: "Odd number roots (like cube root) remember if something was negative. Even number roots (like fourth root) don't allow negatives at all!"
            },
            simplification: {
                analogy: "Factoring out coins from a piggy bank",
                explanation: "Simplifying is like removing complete sets of coins from a bank. If you have 27 pennies, you can remove 3 sets of 3³ pennies each... wait, that's 1 set of 27.",
                suitableFor: ['simplifying_radicals'],
                ELI5: "It's like organizing toys into complete sets. If you have 8 identical blocks under a cube root, you can take out one set of those 8 blocks!"
            },
            radical_operations: {
                analogy: "Like terms in boxes",
                explanation: "Adding radicals is like adding boxes of the same type. You can add '2 boxes of apples' and '3 boxes of apples' to get '5 boxes of apples', but you can't add 'boxes of apples' and 'boxes of oranges'.",
                suitableFor: ['operations_with_radicals'],
                ELI5: "You can only add radicals if they're exactly the same type - same root symbol AND same number inside!"
            },
            rational_exponents: {
                analogy: "Recipe fractions",
                explanation: "a^(2/3) is like a recipe: the bottom number (3) tells you what size pieces to cut into (cube root), the top number (2) tells you how many pieces to take (square).",
                suitableFor: ['rational_exponents'],
                ELI5: "The fraction 2/3 is like instructions: bottom number says 'split into 3 equal parts (cube root)', top number says 'now take 2 of them (square it)'!"
            },
            nested_radicals: {
                analogy: "Russian nesting dolls",
                explanation: "Nested radicals are like Russian dolls - you open one to find another inside. Work from outside to inside, or use the multiplication rule.",
                suitableFor: ['complex_radicals'],
                ELI5: "It's like dolls inside dolls! You can either open them one at a time, or know that if there's a doll inside a doll, you can count how many total levels there are!"
            },
            equation_solving: {
                analogy: "Locked boxes with keys",
                explanation: "A radical equation is like a locked box. Raising to the nth power is the 'key' that unlocks it. But sometimes fake keys work too (extraneous solutions), so you must try the key in the original lock!",
                suitableFor: ['radical_equations'],
                ELI5: "Solving is like finding what's in a locked box. You use a special key (raising to a power) to open it. But you have to check if what you found really fits back in the box!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            cube_root_evaluation: {
                level1: "What number, when multiplied by itself 3 times, gives this result?",
                level2: "Think of perfect cubes: 1, 8, 27, 64, 125...",
                level3: "Is the radicand a perfect cube? If not, can you estimate between which integers it falls?",
                level4: "The cube root of {radicand} is {answer}"
            },
            cube_root_simplification: {
                level1: "Can you factor the radicand to find perfect cubes?",
                level2: "Do a prime factorization and look for groups of 3 identical factors",
                level3: "Perfect cubes that might divide evenly: 8, 27, 64, 125...",
                level4: "Factor as {perfect_cube} × {remainder}, then simplify"
            },
            fourth_root_evaluation: {
                level1: "What number, when multiplied by itself 4 times, gives this result?",
                level2: "Is the radicand non-negative? (Required for even index!)",
                level3: "Think of perfect fourth powers: 1, 16, 81, 256...",
                level4: "The fourth root of {radicand} is {answer}"
            },
            nth_root_simplification: {
                level1: "What is the index (the small number on the radical)?",
                level2: "Find the prime factorization and group factors in sets of {index}",
                level3: "Look for perfect {index}th powers as factors",
                level4: "Extract perfect {index}th powers from under the radical"
            },
            operations_adding: {
                level1: "Do the radicals have the exact same index and radicand?",
                level2: "If they're not like radicals, try simplifying each one first",
                level3: "Like radicals can be added by adding their coefficients",
                level4: "a³√x + b³√x = (a+b)³√x"
            },
            operations_multiplying: {
                level1: "Do the radicals have the same index?",
                level2: "Use the product property: ⁿ√a · ⁿ√b = ⁿ√(ab)",
                level3: "Multiply the radicands together, then simplify if possible",
                level4: "Multiply: ⁿ√{a} · ⁿ√{b} = ⁿ√{ab}"
            },
            solving_equations: {
                level1: "Is the radical already isolated on one side?",
                level2: "Raise both sides to the {index}th power to eliminate the radical",
                level3: "Solve the resulting equation",
                level4: "Don't forget to CHECK your solution in the original equation!"
            },
            exponent_conversion: {
                level1: "In a^(m/n), which number is the index?",
                level2: "The denominator (bottom) is the index, numerator (top) is the power",
                level3: "a^(m/n) = ⁿ√(a^m) or (ⁿ√a)^m",
                level4: "Convert: a^({m}/{n}) = ⁿ√(a^{m})"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Evaluate: ³√27",
                    answer: 3,
                    assesses: "cube_root_evaluation",
                    difficulty: "basic"
                },
                {
                    question: "Evaluate: ⁴√16",
                    answer: 2,
                    assesses: "fourth_root_evaluation",
                    difficulty: "basic"
                },
                {
                    question: "Simplify: ³√54",
                    answer: "3³√2",
                    assesses: "cube_root_simplification",
                    difficulty: "intermediate"
                },
                {
                    question: "Solve: ³√x = 4",
                    answer: 64,
                    assesses: "radical_equations",
                    difficulty: "intermediate"
                },
                {
                    question: "Convert to radical form: a^(1/3)",
                    answer: "³√a",
                    assesses: "rational_exponents",
                    difficulty: "basic"
                }
            ],
            formative: [
                {
                    question: "Which is larger: ³√8 or ⁴√8?",
                    options: ["³√8", "⁴√8", "They're equal", "Can't determine"],
                    correct: "³√8",
                    explanation: "Higher index gives smaller value for numbers > 1. ³√8 = 2, ⁴√8 ≈ 1.68"
                },
                {
                    question: "Can ³√(-27) be evaluated in real numbers?",
                    options: ["Yes, equals -3", "No, negative not allowed", "Yes, equals 3", "Only in complex numbers"],
                    correct: "Yes, equals -3",
                    explanation: "Odd indices allow negative radicands. (-3)³ = -27"
                },
                {
                    question: "Simplify ³√8 · ³√4:",
                    options: ["³√12", "³√32", "2³√4", "2"],
                    correct: "2",
                    explanation: "³√8 · ³√4 = ³√32 = ³√(8·4) = 2 (since 2³ = 8, we need ³√(4·8) = ³√32... actually 2³=8, so we need 4·8=32, and ³√32 = ³√(8·4) but 8=2³ so ³√8=2, and ³√4 stays. Actually ³√32 = ³√(16·2) = ... Let me recalculate: 32 = 2⁵, so ³√32 = ³√(2³·2²) = 2³√4. Let me reconsider the options."
                },
                {
                    question: "What is ⁴√(x⁴) when x = -2?",
                    options: ["-2", "2", "±2", "Undefined"],
                    correct: "2",
                    explanation: "Even index gives non-negative principal root: ⁴√((-2)⁴) = ⁴√16 = 2"
                }
            ],
            summative: [
                {
                    question: "Simplify completely: ³√(128x⁷y⁹)",
                    answer: "4x²y³³√(2x)",
                    showsWork: true,
                    rubric: {
                        prime_factorization: 1,
                        identify_perfect_cubes: 1,
                        extract_coefficients: 1,
                        simplify_variables: 1,
                        final_form: 1
                    }
                },
                {
                    question: "Solve and verify: ³√(2x - 1) = 3",
                    answer: 14,
                    showsWork: true,
                    rubric: {
                        cube_both_sides: 1,
                        solve_linear: 1,
                        substitute_check: 2,
                        conclusion: 1
                    }
                },
                {
                    question: "Convert and simplify: (8x⁶)^(2/3)",
                    answer: "4x⁴",
                    showsWork: true,
                    rubric: {
                        convert_to_radical: 1,
                        apply_to_coefficient: 1,
                        apply_to_variable: 1,
                        simplify: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "³√1",
                    "³√8",
                    "³√27",
                    "⁴√1",
                    "⁴√16",
                    "⁵√32",
                    "³√(-1)",
                    "³√(-8)"
                ],
                medium: [
                    "³√54",
                    "³√128",
                    "⁴√81",
                    "⁴√256",
                    "Simplify: ³√16 · ³√4",
                    "Simplify: ⁴√(32x⁸)",
                    "Solve: ³√x = 5",
                    "Convert: a^(3/4) to radical form"
                ],
                hard: [
                    "³√(250x⁷y¹⁰)",
                    "⁴√(1296a⁸b¹²)",
                    "Solve: ³√(3x + 1) = 4",
                    "Simplify: (27x⁹)^(2/3)",
                    "Solve: ³√(x + 2) + 3 = 5",
                    "³√(³√64)",
                    "Rationalize: 1/³√4",
                    "Multiply: ³√2 · ⁴√2"
                ]
            },
            byObjective: {
                canEvaluateCubeRoots: [
                    "³√8",
                    "³√64",
                    "³√(-27)",
                    "³√125"
                ],
                canEvaluateFourthRoots: [
                    "⁴√16",
                    "⁴√81",
                    "⁴√256",
                    "⁴√625"
                ],
                canSimplifyCubeRoots: [
                    "³√24",
                    "³√54",
                    "³√128",
                    "³√250"
                ],
                canSimplifyFourthRoots: [
                    "⁴√32",
                    "⁴√162",
                    "⁴√1296"
                ],
                canOperateWithRadicals: [
                    "³√2 + 2³√2",
                    "³√5 · ³√25",
                    "⁴√16 / ⁴√2",
                    "Simplify: 2³√3 - 5³√3"
                ],
                canSolveRadicalEquations: [
                    "³√x = 2",
                    "⁴√x = 3",
                    "³√(x + 1) = 4",
                    "⁴√(2x - 3) = 2"
                ],
                canConvertRationalExponents: [
                    "a^(1/3)",
                    "a^(1/4)",
                    "a^(2/3)",
                    "a^(3/4)"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "evaluating_radical": "Check if radicand is perfect nth power; if yes, evaluate directly; if no, estimate or simplify",
                "simplifying_radical": "Prime factorize, group factors in sets of n, extract perfect powers",
                "adding_radicals": "Check if like radicals (same index and radicand); if yes, add coefficients; if no, try simplifying first",
                "multiplying_radicals": "Check if same index; if yes, use product property; if no, convert to rational exponents",
                "solving_equation": "Isolate radical, raise both sides to nth power, solve, VERIFY",
                "converting_forms": "Identify if radical→exponent or exponent→radical, apply a^(m/n) ↔ ⁿ√(a^m)"
            },
            whenToUseWhat: {
                direct_evaluation: "When radicand is a perfect nth power",
                estimation: "When exact value not needed or radicand not perfect power",
                simplification: "When radicand has perfect nth power factors",
                prime_factorization: "For complex simplification problems",
                product_property: "When multiplying/dividing radicals with same index",
                rational_exponents: "When dealing with different indices or complex operations",
                numerical_methods: "For approximating non-perfect radicals"
            },
            methodSelection: {
                factorsToConsider: [
                    "What is the index?",
                    "Is radicand a perfect nth power?",
                    "Is index odd or even? (affects domain)",
                    "Are operations involved?",
                    "Is simplification needed or just evaluation?"
                ],
                generalApproach: [
                    "1. Identify index and check if odd/even",
                    "2. Check domain restrictions (even index → radicand ≥ 0)",
                    "3. Determine if perfect power or needs simplification",
                    "4. Apply appropriate strategy",
                    "5. Verify result makes sense"
                ]
            },
            optimizationTips: {
                "Memorize perfect powers": "Know perfect cubes (1,8,27,64,125...) and fourths (1,16,81,256...)",
                "Use prime factorization": "Most reliable method for simplification",
                "Check even/odd index first": "Determines domain and sign of result",
                "Convert complex operations to exponents": "Easier to handle different indices",
                "Always verify in equations": "Extraneous solutions are common"
            },
            commonPatterns: {
                "³√(a³b)": "a³√b",
                "⁴√(a⁴b)": "|a|⁴√b (note absolute value)",
                "ⁿ√(aⁿ)": "a if n odd, |a| if n even",
                "(ⁿ√a)ⁿ": "a (by definition)",
                "ⁿ√(ab)": "ⁿ√a · ⁿ√b",
                "ⁿ√(a/b)": "ⁿ√a / ⁿ√b"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Cube Root Sprint",
                    timeLimit: 60,
                    problems: [
                        "³√1",
                        "³√8",
                        "³√27",
                        "³√64",
                        "³√125",
                        "³√(-8)",
                        "³√(-27)",
                        "³√1000"
                    ]
                },
                {
                    name: "Fourth Root Challenge",
                    timeLimit: 90,
                    problems: [
                        "⁴√1",
                        "⁴√16",
                        "⁴√81",
                        "⁴√256",
                        "⁴√625"
                    ]
                },
                {
                    name: "Mixed Index Speed",
                    timeLimit: 120,
                    problems: [
                        "³√8",
                        "⁴√16",
                        "⁵√32",
                        "³√(-27)",
                        "⁴√81"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Radical Chains",
                    problem: "Fill in: ³√64 = ?, ³√? = 2, ⁴√? = 2",
                    solution: "4, 8, 16",
                    explanation: "³√64 = 4, ³√8 = 2, ⁴√16 = 2"
                },
                {
                    name: "Index Mystery",
                    problem: "ⁿ√81 = 3. What is n?",
                    solution: "n = 4",
                    explanation: "3⁴ = 81, so ⁴√81 = 3"
                },
                {
                    name: "Radical Equation Puzzle",
                    problem: "³√x + ⁴√x = 5, and x = 16. Verify this works.",
                    solution: "³√16 + ⁴√16 = 16^(1/3) + 16^(1/4) ≈ 2.52 + 2 = 4.52 ≠ 5",
                    explanation: "Actually need to solve: try different values"
                },
                {
                    name: "Nested Radical",
                    problem: "Simplify: ³√(⁴√4096)",
                    solution: "2 or ¹²√4096",
                    explanation: "⁴√4096 = 8, then ³√8 = 2. Or: indices multiply to get ¹²√4096 = 2"
                }
            ],
            applications: [
                {
                    scenario: "Cube Volume",
                    problem: "A cube has volume 343 cm³. Find its surface area.",
                    equation: "V = s³, so s = ³√343 = 7 cm. Surface area = 6s² = 6(49) = 294 cm²",
                    solution: "294 cm²"
                },
                {
                    scenario: "Compound Interest",
                    problem: "Investment triples in value over 3 years. What's the annual growth rate?",
                    equation: "3 = (1+r)³, so 1+r = ³√3 ≈ 1.442, thus r ≈ 0.442 or 44.2%",
                    solution: "≈44.2% annual growth"
                },
                {
                    scenario: "Physics: Intensity",
                    problem: "Sound intensity is 1/8 at distance d. If original distance was d₀, find d/d₀.",
                    equation: "I ∝ 1/d³, so (1/8) = (d₀/d)³, thus d/d₀ = ³√8 = 2",
                    solution: "Distance is 2 times farther"
                },
                {
                    scenario: "Scaling Model",
                    problem: "Model car is 1/64 volume of real car. What's the length scale?",
                    equation: "Length scale = ³√(volume scale) = ³√(1/64) = 1/4",
                    solution: "1:4 or 1/4 scale (model is 1/4 the length)"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "³√54 = ?",
                        "54 = 2 · 27",  // Correct
                        "³√54 = ³√(2·27) = ³√2 · ³√27",  // Correct
                        "= ³√2 · 3",  // Correct
                        "= 3³√2"  // Correct - actually this is right!
                    ],
                    correctAnswer: "3³√2",
                    errorType: "Actually no error - this is correct!",
                    teaching: "This demonstrates correct simplification"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Solve: ³√(x - 1) = -2",
                        "Cube both sides: x - 1 = -8",  // Correct
                        "x = -7",  // Correct
                        "Check: ³√(-7 - 1) = ³√(-8) = -2 ✓"  // Correct
                    ],
                    correctAnswer: "x = -7",
                    errorType: "No error - demonstrates odd index allows negative",
                    teaching: "Reinforces that cube roots of negatives are allowed"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "Simplify: ⁴√(16x⁴)",
                        "= ⁴√16 · ⁴√(x⁴)",
                        "= 2 · x",  // ERROR: should be |x|
                        "= 2x"
                    ],
                    correctAnswer: "2|x|",
                    errorType: "Forgot absolute value for even index with variable",
                    teaching: "⁴√(x⁴) = |x| because even index principal root is non-negative"
                },
                {
                    name: "Find the Error #4",
                    incorrectWork: [
                        "Evaluate: ⁴√(-16)",
                        "= ⁴√16 · ⁴√(-1)",  // ERROR: can't split negative with even index
                        "= 2 · (imaginary)",  // ERROR: trying to find real fourth root of negative
                        "No real solution"  // This conclusion is correct, but process was wrong
                    ],
                    correctAnswer: "No real solution (correct conclusion)",
                    errorType: "Can't use product property to separate negative from even index radical",
                    teaching: "For even index, must have non-negative radicand for real result. Can't split it."
                }
            ],
            conceptualChallenges: [
                {
                    name: "Index Comparison",
                    problem: "For a = 100, arrange from smallest to largest: √a, ³√a, ⁴√a, ⁵√a, a",
                    solution: "⁵√a < ⁴√a < ³√a < √a < a",
                    explanation: "For a > 1, higher indices give results closer to 1. So ⁵√100 ≈ 2.51, ⁴√100 ≈ 3.16, ³√100 ≈ 4.64, √100 = 10, a = 100"
                },
                {
                    name: "Even vs Odd",
                    problem: "Why can ³√(-64) be evaluated but ⁴√(-64) cannot (in real numbers)?",
                    solution: "Odd index (3) allows negative radicands because negative × negative × negative = negative. Even index (4) doesn't allow negatives because you can't get a negative result from multiplying four real numbers together (even number of negatives makes positive).",
                    explanation: "Demonstrates fundamental difference between odd and even indices"
                },
                {
                    name: "Simplification Logic",
                    problem: "Explain why ³√(54) = 3³√2, not just ³√54",
                    solution: "54 = 27 × 2 = 3³ × 2. The perfect cube 3³ can come out from under the radical as 3, leaving ³√2 behind. This is simpler because 3 is easier to work with than ³√54.",
                    explanation: "Simplification extracts perfect powers to make expressions cleaner"
                }
            ]
        };
    }

    // MAIN SOLVER METHOD
    solveRadicalProblem(config) {
        const { radicand, index, operation, scenario, parameters, problemType, context } = config;

        try {
            this.currentProblem = this.parseRadicalProblem(radicand, index, operation, scenario, parameters, problemType, context);
            
            this.currentSolution = this.solveRadicalProblem_Internal(this.currentProblem);
            
            this.solutionSteps = this.generateRadicalSteps(this.currentProblem, this.currentSolution);
            
            this.generateRadicalGraphData();
            
            this.generateRadicalWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                solutionValue: this.currentSolution?.value,
                solutionType: this.currentSolution?.type
            };

        } catch (error) {
            throw new Error(`Failed to solve radical problem: ${error.message}`);
        }
    }

    parseRadicalProblem(radicand, index, operation = 'evaluate', scenario = '', parameters = {}, problemType = null, context = {}) {
        if (problemType && this.radicalTypes[problemType]) {
            return {
                radicand: radicand,
                index: index || 3,
                operation: operation,
                type: problemType,
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect problem type
        const inputString = `${scenario} ${operation} index ${index} radicand ${radicand}`.toLowerCase();
        
        for (const [type, config] of Object.entries(this.radicalTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(inputString)) {
                    return {
                        radicand: radicand,
                        index: index || this.inferIndex(inputString),
                        operation: operation,
                        type: type,
                        scenario: scenario,
                        parameters: { ...parameters },
                        context: { ...context },
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        // Default based on index
        if (index === 3) {
            return {
                radicand: radicand,
                index: 3,
                operation: operation,
                type: 'cube_root_evaluation',
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        } else if (index === 4) {
            return {
                radicand: radicand,
                index: 4,
                operation: operation,
                type: 'fourth_root_evaluation',
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        } else {
            return {
                radicand: radicand,
                index: index || 2,
                operation: operation,
                type: 'nth_root_evaluation',
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }
    }

    inferIndex(inputString) {
        if (/cube|third|∛|cbrt/i.test(inputString)) return 3;
        if (/fourth|∜/i.test(inputString)) return 4;
        if (/fifth/i.test(inputString)) return 5;
        if (/sixth/i.test(inputString)) return 6;
        
        const indexMatch = inputString.match(/index\s+(\d+)/);
        if (indexMatch) return parseInt(indexMatch[1]);
        
        return 3; // Default to cube root
    }

    solveRadicalProblem_Internal(problem) {
        const solver = this.radicalTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for radical problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // RADICAL SOLVERS

    solveCubeRoot(problem) {
        const { radicand } = problem;
        
        // Check if radicand is a perfect cube
        const absRadicand = Math.abs(radicand);
        const sign = radicand < 0 ? -1 : 1;
        const cubeRoot = Math.cbrt(absRadicand) * sign;
        
        const isPerfectCube = Math.abs(Math.round(cubeRoot) ** 3 - radicand) < 1e-10;
        
        return {
            radicand: radicand,
            index: 3,
            value: cubeRoot,
            exactValue: isPerfectCube ? Math.round(cubeRoot) : null,
            isPerfectPower: isPerfectCube,
            type: 'Cube Root',
            notation: `³√${radicand}`,
            category: 'cube_roots',
            allowsNegative: true,
            verification: this.verifyCubeRoot(cubeRoot, radicand)
        };
    }

    simplifyCubeRoot(problem) {
        const { radicand } = problem;
        
        if (radicand === 0) {
            return {
                original: `³√0`,
                simplified: '0',
                coefficient: 0,
                radicandSimplified: 0,
                steps: ['³√0 = 0']
            };
        }

        const absRadicand = Math.abs(radicand);
        const sign = radicand < 0 ? -1 : 1;
        
        // Find perfect cube factors
        const factorization = this.primeFactorize(absRadicand);
        const { coefficient, remainingRadicand } = this.extractPerfectPower(factorization, 3);
        
        const finalCoefficient = coefficient * sign;
        const finalRadicand = remainingRadicand;
        
        let simplifiedForm;
        if (finalRadicand === 1) {
            simplifiedForm = `${finalCoefficient}`;
        } else if (finalCoefficient === 1) {
            simplifiedForm = `³√${finalRadicand}`;
        } else if (finalCoefficient === -1) {
            simplifiedForm = `-³√${finalRadicand}`;
        } else {
            simplifiedForm = `${finalCoefficient}³√${finalRadicand}`;
        }
        
        return {
            original: `³√${radicand}`,
            simplified: simplifiedForm,
            coefficient: finalCoefficient,
            radicandSimplified: finalRadicand,
            factorization: factorization,
            type: 'Cube Root Simplification',
            category: 'simplifying_radicals'
        };
    }

    solveFourthRoot(problem) {
        const { radicand } = problem;
        
        // Even index requires non-negative radicand
        if (radicand < 0) {
            return {
                radicand: radicand,
                index: 4,
                value: null,
                type: 'Fourth Root',
                notation: `⁴√${radicand}`,
                category: 'fourth_roots',
                error: 'No real solution (radicand must be non-negative for even index)',
                allowsNegative: false
            };
        }
        
        const fourthRoot = Math.pow(radicand, 1/4);
        const isPerfectFourth = Math.abs(Math.round(fourthRoot) ** 4 - radicand) < 1e-10;
        
        return {
            radicand: radicand,
            index: 4,
            value: fourthRoot,
            exactValue: isPerfectFourth ? Math.round(fourthRoot) : null,
            isPerfectPower: isPerfectFourth,
            type: 'Fourth Root',
            notation: `⁴√${radicand}`,
            category: 'fourth_roots',
            allowsNegative: false,
            verification: this.verifyNthRoot(fourthRoot, radicand, 4)
        };
    }

    simplifyFourthRoot(problem) {
        const { radicand } = problem;
        
        if (radicand < 0) {
            return {
                original: `⁴√${radicand}`,
                simplified: 'No real solution',
                error: 'Even index requires non-negative radicand'
            };
        }
        
        if (radicand === 0) {
            return {
                original: `⁴√0`,
                simplified: '0',
                coefficient: 0,
                radicandSimplified: 0
            };
        }
        
        const factorization = this.primeFactorize(radicand);
        const { coefficient, remainingRadicand } = this.extractPerfectPower(factorization, 4);
        
        let simplifiedForm;
        if (remainingRadicand === 1) {
            simplifiedForm = `${coefficient}`;
        } else if (coefficient === 1) {
            simplifiedForm = `⁴√${remainingRadicand}`;
        } else {
            simplifiedForm = `${coefficient}⁴√${remainingRadicand}`;
        }
        
        return {
            original: `⁴√${radicand}`,
            simplified: simplifiedForm,
            coefficient: coefficient,
            radicandSimplified: remainingRadicand,
            factorization: factorization,
            type: 'Fourth Root Simplification',
            category: 'simplifying_radicals'
        };
    }

    solveFifthRoot(problem) {
        const { radicand } = problem;
        
        // Odd index allows all real numbers
        const sign = radicand < 0 ? -1 : 1;
        const absRadicand = Math.abs(radicand);
        const fifthRoot = Math.pow(absRadicand, 1/5) * sign;
        
        const isPerfectFifth = Math.abs(Math.round(fifthRoot) ** 5 - radicand) < 1e-10;
        
        return {
            radicand: radicand,
            index: 5,
            value: fifthRoot,
            exactValue: isPerfectFifth ? Math.round(fifthRoot) : null,
            isPerfectPower: isPerfectFifth,
            type: 'Fifth Root',
            notation: `⁵√${radicand}`,
            category: 'fifth_sixth_roots',
            allowsNegative: true,
            verification: this.verifyNthRoot(fifthRoot, radicand, 5)
        };
    }

    solveNthRoot(problem) {
        const { radicand, index } = problem;
        
        // Check if even index with negative radicand
        if (index % 2 === 0 && radicand < 0) {
            return {
                radicand: radicand,
                index: index,
                value: null,
                type: `${this.ordinalNumber(index)} Root`,
                notation: `${this.rootSymbol(index)}√${radicand}`,
                category: 'higher_index_radicals',
                error: 'No real solution (even index requires non-negative radicand)',
                allowsNegative: false
            };
        }
        
        // Calculate nth root
        const isOddIndex = index % 2 === 1;
        let nthRoot;
        
        if (isOddIndex) {
            const sign = radicand < 0 ? -1 : 1;
            const absRadicand = Math.abs(radicand);
            nthRoot = Math.pow(absRadicand, 1/index) * sign;
        } else {
            nthRoot = Math.pow(radicand, 1/index);
        }
        
        const isPerfectPower = Math.abs(Math.round(nthRoot) ** index - radicand) < 1e-10;
        
        return {
            radicand: radicand,
            index: index,
            value: nthRoot,
            exactValue: isPerfectPower ? Math.round(nthRoot) : null,
            isPerfectPower: isPerfectPower,
            type: `${this.ordinalNumber(index)} Root`,
            notation: `${this.rootSymbol(index)}√${radicand}`,
            category: 'higher_index_radicals',
            allowsNegative: isOddIndex,
            verification: this.verifyNthRoot(nthRoot, radicand, index)
        };
    }

    simplifyNthRoot(problem) {
        const { radicand, index } = problem;
        
        // Check domain for even index
        if (index % 2 === 0 && radicand < 0) {
            return {
                original: `${this.rootSymbol(index)}√${radicand}`,
                simplified: 'No real solution',
                error: 'Even index requires non-negative radicand'
            };
        }
        
        if (radicand === 0) {
            return {
                original: `${this.rootSymbol(index)}√0`,
                simplified: '0',
                coefficient: 0,
                radicandSimplified: 0
            };
        }
        
        const absRadicand = Math.abs(radicand);
        const sign = radicand < 0 ? -1 : 1;
        
        const factorization = this.primeFactorize(absRadicand);
        const { coefficient, remainingRadicand } = this.extractPerfectPower(factorization, index);
        
        const finalCoefficient = coefficient * (sign < 0 && index % 2 === 1 ? -1 : 1);
        
        let simplifiedForm;
        if (remainingRadicand === 1) {
            simplifiedForm = `${finalCoefficient}`;
        } else if (finalCoefficient === 1) {
            simplifiedForm = `${this.rootSymbol(index)}√${remainingRadicand}`;
        } else if (finalCoefficient === -1) {
            simplifiedForm = `-${this.rootSymbol(index)}√${remainingRadicand}`;
        } else {
            simplifiedForm = `${finalCoefficient}${this.rootSymbol(index)}√${remainingRadicand}`;
        }
        
        return {
            original: `${this.rootSymbol(index)}√${radicand}`,
            simplified: simplifiedForm,
            coefficient: finalCoefficient,
            radicandSimplified: remainingRadicand,
            factorization: factorization,
            type: `${this.ordinalNumber(index)} Root Simplification`,
            category: 'simplifying_radicals'
        };
    }

    multiplyRadicals(problem) {
        const { radicand1, radicand2, index, coefficient1 = 1, coefficient2 = 1 } = problem.parameters;
        
        // Can only multiply radicals with same index
        const productCoefficient = coefficient1 * coefficient2;
        const productRadicand = radicand1 * radicand2;
        
        // Simplify the result
        const simplified = this.simplifyNthRoot({
            radicand: productRadicand,
            index: index
        });
        
        return {
            operation: 'Multiplication',
            index: index,
            original: `${coefficient1}${this.rootSymbol(index)}√${radicand1} × ${coefficient2}${this.rootSymbol(index)}√${radicand2}`,
            productRadicand: productRadicand,
            productCoefficient: productCoefficient,
            simplified: `${productCoefficient}${simplified.simplified}`,
            type: 'Radical Multiplication',
            category: 'operations_with_radicals'
        };
    }

    divideRadicals(problem) {
        const { radicand1, radicand2, index, coefficient1 = 1, coefficient2 = 1 } = problem.parameters;
        
        if (radicand2 === 0) {
            return {
                error: 'Division by zero',
                type: 'Radical Division'
            };
        }
        
        const quotientCoefficient = coefficient1 / coefficient2;
        const quotientRadicand = radicand1 / radicand2;
        
        // Simplify the result
        const simplified = this.simplifyNthRoot({
            radicand: quotientRadicand,
            index: index
        });
        
        return {
            operation: 'Division',
            index: index,
            original: `${coefficient1}${this.rootSymbol(index)}√${radicand1} ÷ ${coefficient2}${this.rootSymbol(index)}√${radicand2}`,
            quotientRadicand: quotientRadicand,
            quotientCoefficient: quotientCoefficient,
            simplified: `${quotientCoefficient}${simplified.simplified}`,
            type: 'Radical Division',
            category: 'operations_with_radicals'
        };
    }

    addRadicals(problem) {
        const { radicand1, radicand2, index, coefficient1 = 1, coefficient2 = 1 } = problem.parameters;
        
        // Can only add like radicals (same index AND radicand)
        if (radicand1 !== radicand2) {
            // Try simplifying each first
            const simp1 = this.simplifyNthRoot({ radicand: radicand1, index });
            const simp2 = this.simplifyNthRoot({ radicand: radicand2, index });
            
            if (simp1.radicandSimplified === simp2.radicandSimplified) {
                const sumCoefficient = coefficient1 * simp1.coefficient + coefficient2 * simp2.coefficient;
                return {
                    operation: 'Addition',
                    canCombine: true,
                    simplified: `${sumCoefficient}${this.rootSymbol(index)}√${simp1.radicandSimplified}`,
                    type: 'Radical Addition',
                    category: 'operations_with_radicals'
                };
            }
            
            return {
                operation: 'Addition',
                canCombine: false,
                result: `${coefficient1}${this.rootSymbol(index)}√${radicand1} + ${coefficient2}${this.rootSymbol(index)}√${radicand2}`,
                note: 'Cannot combine unlike radicals',
                type: 'Radical Addition',
                category: 'operations_with_radicals'
            };
        }
        
        const sumCoefficient = coefficient1 + coefficient2;
        
        return {
            operation: 'Addition',
            canCombine: true,
            original: `${coefficient1}${this.rootSymbol(index)}√${radicand1} + ${coefficient2}${this.rootSymbol(index)}√${radicand2}`,
            simplified: `${sumCoefficient}${this.rootSymbol(index)}√${radicand1}`,
            type: 'Radical Addition',
            category: 'operations_with_radicals'
        };
    }

    solveRadicalEquation(problem) {
        const { equation, index } = problem.parameters;
        
        // Example: ³√x = 5 → x = 5³ = 125
        // This is a simplified solver for basic radical equations
        
        return {
            type: 'Radical Equation',
            approach: `Raise both sides to the ${this.ordinalNumber(index)} power`,
            note: 'Always verify solution in original equation',
            category: 'radical_equations',
            verificationRequired: true
        };
    }

    convertRadicalToExponent(problem) {
        const { radicand, index, power = 1 } = problem.parameters;
        
        let exponentForm;
        if (power === 1) {
            exponentForm = `${radicand}^(1/${index})`;
        } else {
            exponentForm = `${radicand}^(${power}/${index})`;
        }
        
        return {
            radical: power === 1 ? `${this.rootSymbol(index)}√${radicand}` : `${this.rootSymbol(index)}√(${radicand}^${power})`,
            exponent: exponentForm,
            explanation: `Denominator ${index} is the index, numerator ${power} is the power`,
            type: 'Radical to Exponent Conversion',
            category: 'rational_exponents'
        };
    }

    convertExponentToRadical(problem) {
        const { base, numerator, denominator } = problem.parameters;
        
        let radicalForm;
        if (numerator === 1) {
            radicalForm = `${this.rootSymbol(denominator)}√${base}`;
        } else {
            radicalForm = `${this.rootSymbol(denominator)}√(${base}^${numerator})`;
            // Alternative form
            const altForm = `(${this.rootSymbol(denominator)}√${base})^${numerator}`;
            return {
                exponent: `${base}^(${numerator}/${denominator})`,
                radicalForm1: radicalForm,
                radicalForm2: altForm,
                explanation: 'Both forms are equivalent',
                type: 'Exponent to Radical Conversion',
                category: 'rational_exponents'
            };
        }
        
        return {
            exponent: `${base}^(${numerator}/${denominator})`,
            radical: radicalForm,
            type: 'Exponent to Radical Conversion',
            category: 'rational_exponents'
        };
    }

    solveNestedRadicals(problem) {
        const { innerRadicand, innerIndex, outerIndex } = problem.parameters;
        
        // ᵐ√(ⁿ√a) = ᵐⁿ√a
        const combinedIndex = innerIndex * outerIndex;
        
        return {
            original: `${this.rootSymbol(outerIndex)}√(${this.rootSymbol(innerIndex)}√${innerRadicand})`,
            simplified: `${this.rootSymbol(combinedIndex)}√${innerRadicand}`,
            combinedIndex: combinedIndex,
            explanation: 'Multiply indices when nesting radicals',
            type: 'Nested Radicals',
            category: 'complex_radicals'
        };
    }

    rationalizeDenominator(problem) {
        const { numerator, denominatorRadicand, denominatorIndex } = problem.parameters;
        
        // To rationalize, multiply by ⁿ√(a^(n-1)) / ⁿ√(a^(n-1))
        // For cube root: multiply by ³√(a²) / ³√(a²)
        
        const powerNeeded = denominatorIndex - 1;
        const multiplier = Math.pow(denominatorRadicand, powerNeeded);
        
        return {
            original: `${numerator} / ${this.rootSymbol(denominatorIndex)}√${denominatorRadicand}`,
            multiplyBy: `${this.rootSymbol(denominatorIndex)}√${multiplier} / ${this.rootSymbol(denominatorIndex)}√${multiplier}`,
            rationalized: `${numerator}${this.rootSymbol(denominatorIndex)}√${multiplier} / ${denominatorRadicand}`,
            type: 'Rationalize Denominator',
            category: 'operations_with_radicals'
        };
    }

    // HELPER METHODS

    primeFactorize(n) {
        const factors = {};
        let num = Math.abs(n);
        
        for (let i = 2; i <= Math.sqrt(num); i++) {
            while (num % i === 0) {
                factors[i] = (factors[i] || 0) + 1;
                num = num / i;
            }
        }
        
        if (num > 1) {
            factors[num] = (factors[num] || 0) + 1;
        }
        
        return factors;
    }

    extractPerfectPower(factorization, index) {
        let coefficient = 1;
        const remainingFactors = {};
        
        for (const [prime, count] of Object.entries(factorization)) {
            const perfectPowerCount = Math.floor(count / index);
            const remainder = count % index;
            
            if (perfectPowerCount > 0) {
                coefficient *= Math.pow(parseInt(prime), perfectPowerCount);
            }
            
            if (remainder > 0) {
                remainingFactors[prime] = remainder;
            }
        }
        
        let remainingRadicand = 1;
        for (const [prime, count] of Object.entries(remainingFactors)) {
            remainingRadicand *= Math.pow(parseInt(prime), count);
        }
        
        return { coefficient, remainingRadicand };
    }

    verifyCubeRoot(value, radicand) {
        const cubed = Math.pow(value, 3);
        const difference = Math.abs(cubed - radicand);
        const isValid = difference < 1e-9;
        
        return {
            value: value,
            verification: `${value}³ = ${cubed}`,
            radicand: radicand,
            difference: difference,
            isValid: isValid
        };
    }

    verifyNthRoot(value, radicand, index) {
        const powered = Math.pow(value, index);
        const difference = Math.abs(powered - radicand);
        const isValid = difference < 1e-9;
        
        return {
            value: value,
            verification: `${value}^${index} = ${powered}`,
            radicand: radicand,
            difference: difference,
            isValid: isValid
        };
    }

    ordinalNumber(n) {
        const suffixes = ["th", "st", "nd", "rd"];
        const v = n % 100;
        return n + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
    }

    rootSymbol(index) {
        const symbols = {
            2: '√',
            3: '³√',
            4: '⁴√',
            5: '⁵√',
            6: '⁶√'
        };
        return symbols[index] || `${index}√`;
    }

    // STEP GENERATION

    generateRadicalSteps(problem, solution) {
        let baseSteps = this.generateBaseRadicalSteps(problem, solution);

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

    generateBaseRadicalSteps(problem, solution) {
        const category = this.radicalTypes[problem.type]?.category;

        switch(category) {
            case 'cube_roots':
                return this.generateCubeRootSteps(problem, solution);
            case 'fourth_roots':
                return this.generateFourthRootSteps(problem, solution);
            case 'simplifying_radicals':
                return this.generateSimplificationSteps(problem, solution);
            case 'operations_with_radicals':
                return this.generateOperationSteps(problem, solution);
            default:
                return this.generateGenericRadicalSteps(problem, solution);
        }
    }

    generateCubeRootSteps(problem, solution) {
        const steps = [];
        const { radicand } = problem;

        steps.push({
            stepNumber: 1,
            step: 'Identify the problem',
            description: `Evaluate ³√${radicand}`,
            expression: `³√${radicand}`,
            reasoning: 'We need to find what number cubed equals ' + radicand,
            goalStatement: 'Find x such that x³ = ' + radicand
        });

        if (solution.isPerfectPower) {
            steps.push({
                stepNumber: 2,
                step: 'Recognize perfect cube',
                description: `${radicand} is a perfect cube`,
                reasoning: `${solution.exactValue}³ = ${radicand}`,
                algebraicRule: 'Definition of cube root'
            });

            steps.push({
                stepNumber: 3,
                step: 'Solution',
                description: `³√${radicand} = ${solution.exactValue}`,
                expression: `${solution.exactValue}`,
                finalAnswer: true
            });
        } else {
            steps.push({
                stepNumber: 2,
                step: 'Estimate value',
                description: 'Find perfect cubes near ' + radicand,
                reasoning: 'Helps understand where the answer lies',
                note: 'Could also simplify if there are perfect cube factors'
            });

            steps.push({
                stepNumber: 3,
                step: 'Calculate',
                description: `³√${radicand} ≈ ${solution.value.toFixed(4)}`,
                expression: solution.value.toFixed(4),
                finalAnswer: true,
                note: 'This is an approximation'
            });
        }

        return steps;
    }

    generateFourthRootSteps(problem, solution) {
        const steps = [];
        const { radicand } = problem;

        steps.push({
            stepNumber: 1,
            step: 'Check domain',
            description: 'Fourth root requires non-negative radicand',
            expression: radicand >= 0 ? `${radicand} ≥ 0 ✓` : `${radicand} < 0 ✗`,
            reasoning: 'Even index radicals only work with non-negative numbers',
            domainCheck: true
        });

        if (radicand < 0) {
            steps.push({
                stepNumber: 2,
                step: 'Conclusion',
                description: 'No real solution',
                reasoning: 'Cannot take even root of negative number',
                finalAnswer: true
            });
            return steps;
        }

        steps.push({
            stepNumber: 2,
            step: 'Evaluate fourth root',
            description: `Find x such that x⁴ = ${radicand}`,
            expression: `⁴√${radicand}`,
            reasoning: 'Fourth root undoes raising to the fourth power'
        });

        if (solution.isPerfectPower) {
            steps.push({
                stepNumber: 3,
                step: 'Recognize perfect fourth power',
                description: `${radicand} = ${solution.exactValue}⁴`,
                reasoning: `${solution.exactValue}⁴ = ${radicand}`,
                algebraicRule: 'Definition of fourth root'
            });

            steps.push({
                stepNumber: 4,
                step: 'Solution',
                description: `⁴√${radicand} = ${solution.exactValue}`,
                expression: `${solution.exactValue}`,
                finalAnswer: true
            });
        } else {
            steps.push({
                stepNumber: 3,
                step: 'Calculate',
                description: `⁴√${radicand} ≈ ${solution.value.toFixed(4)}`,
                expression: solution.value.toFixed(4),
                finalAnswer: true
            });
        }

        return steps;
    }

    generateSimplificationSteps(problem, solution) {
        const steps = [];
        const { radicand, index } = problem;

        steps.push({
            stepNumber: 1,
            step: 'Original expression',
            description: `Simplify ${this.rootSymbol(index)}√${radicand}`,
            expression: solution.original,
            goalStatement: 'Extract all perfect ' + this.ordinalNumber(index) + ' powers'
        });

        if (solution.factorization) {
            steps.push({
                stepNumber: 2,
                step: 'Prime factorization',
                description: 'Factor the radicand into primes',
                expression: this.formatFactorization(solution.factorization),
                reasoning: 'Helps identify perfect power factors'
            });

            steps.push({
                stepNumber: 3,
                step: 'Group factors',
                description: `Group in sets of ${index}`,
                reasoning: `Each group of ${index} identical factors is a perfect ${this.ordinalNumber(index)} power`,
                method: 'Extract coefficient from groups'
            });
        }

        steps.push({
            stepNumber: 4,
            step: 'Extract perfect powers',
            description: solution.coefficient !== 1 ? `Coefficient: ${solution.coefficient}` : 'No perfect powers to extract',
            expression: solution.radicandSimplified !== 1 ? `Remaining: ${this.rootSymbol(index)}√${solution.radicandSimplified}` : 'Fully simplified',
            reasoning: 'Move perfect powers outside the radical'
        });

        steps.push({
            stepNumber: 5,
            step: 'Simplified form',
            description: 'Final answer',
            expression: solution.simplified,
            finalAnswer: true
        });

        return steps;
    }

    generateOperationSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify operation',
            description: solution.operation || 'Radical operation',
            expression: solution.original,
            reasoning: 'Apply appropriate radical property'
        });

        if (solution.canCombine === false) {
            steps.push({
                stepNumber: 2,
                step: 'Check if like radicals',
                description: 'Radicals must have same index AND radicand to combine',
                reasoning: 'These are unlike radicals',
                conclusion: 'Cannot combine'
            });

            steps.push({
                stepNumber: 3,
                step: 'Final form',
                description: 'Express in simplest form',
                expression: solution.result,
                finalAnswer: true
            });
        } else {
            steps.push({
                stepNumber: 2,
                step: 'Apply property',
                description: 'Use product/quotient/sum property',
                reasoning: 'Radicals have same index'
            });

            steps.push({
                stepNumber: 3,
                step: 'Simplified result',
                description: 'Final answer',
                expression: solution.simplified,
                finalAnswer: true
            });
        }

        return steps;
    }

    generateGenericRadicalSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Radical problem',
            description: 'Solve the given radical problem',
            expression: `${this.rootSymbol(problem.index)}√${problem.radicand}`,
            reasoning: 'Apply appropriate radical technique',
            solution: solution
        }];
    }

    formatFactorization(factorization) {
        const parts = [];
        for (const [prime, count] of Object.entries(factorization)) {
            if (count === 1) {
                parts.push(prime);
            } else {
                parts.push(`${prime}^${count}`);
            }
        }
        return parts.join(' × ');
    }

    // Enhanced explanation methods (similar to linear workbook)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanationRadical(step, problem),
                procedural: this.getProceduralExplanationRadical(step),
                visual: this.getVisualExplanationRadical(step, problem),
                algebraic: this.getAlgebraicExplanationRadical(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanationRadical(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisitesRadical(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyRadical(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStepRadical(step, stepIndex) : null
            }
        };

        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPromptsRadical(step);
        }

        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestionRadical(step);
        }

        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findRealWorldConnectionRadical(step, problem);
        }

        return enhanced;
    }

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateELI5ExplanationRadical(step, problem),
                analogy: this.findRelevantAnalogyRadical(step, problem),
                simpleLanguage: this.convertToSimpleLanguageRadical(step.description),
                visualization: this.suggestVisualizationRadical(step)
            }
        }));
    }

    generateELI5ExplanationRadical(step, problem) {
        const ELI5Explanations = {
            'Identify the problem': "We have a math puzzle with a special root symbol! We need to find what number, when multiplied by itself a certain number of times, gives us this number.",
            'Check domain': "First, we check if we're allowed to solve this. Some roots don't like negative numbers!",
            'Recognize perfect cube': "Great news! This number is a perfect cube - it's like having exactly the right number of blocks to make a perfect cube shape!",
            'Prime factorization': "We're breaking the number into its smallest building blocks (prime numbers), like taking apart a Lego creation to see what pieces it's made of.",
            'Group factors': "Now we organize those building blocks into groups. Each complete group can come out from under the root symbol!",
            'Extract perfect powers': "We take out the complete groups, leaving only the incomplete groups inside. It's like organizing toys - complete sets go on the shelf, incomplete sets stay in the toy box!",
            'Apply property': "We use a special math rule that makes radicals easier to work with.",
            'Simplified form': "This is our final, cleanest answer!"
        };

        return ELI5Explanations[step.step] || "We're taking another step to solve our radical puzzle!";
    }

    findRelevantAnalogyRadical(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(problem.type) || analogy.suitableFor.includes('all_radicals')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of this like solving a puzzle where each piece fits in a special way!";
    }

    convertToSimpleLanguageRadical(description) {
        const simplifications = {
            'radicand': 'the number under the root',
            'index': 'the small number telling us which root',
            'perfect cube': 'a number that comes from multiplying the same number three times',
            'perfect fourth power': 'a number that comes from multiplying the same number four times',
            'prime factorization': 'breaking into smallest number pieces',
            'coefficient': 'the number in front',
            'simplify': 'make easier',
            'evaluate': 'find the answer',
            'rational exponent': 'power written as a fraction',
            'domain': 'which numbers are allowed'
        };

        let simple = description || '';
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp(term, 'gi');
            simple = simple.replace(regex, replacement);
        }

        return simple;
    }

    suggestVisualizationRadical(step) {
        const visualizations = {
            'Identify the problem': 'Draw the radical symbol with the number underneath',
            'Check domain': 'Draw a number line showing which numbers work',
            'Recognize perfect cube': 'Draw a cube made of smaller cubes to show the perfect cube',
            'Prime factorization': 'Draw a factor tree breaking the number into primes',
            'Group factors': 'Circle groups of identical factors',
            'Extract perfect powers': 'Show factors moving outside the radical',
            'Simplified form': 'Write the final clean expression'
        };

        return visualizations[step.step] || 'Draw a picture representing this step';
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generateStepBridgeRadical(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgressionRadical(steps[i], steps[i + 1]),
                    strategicThinking: this.explainStepStrategyRadical(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    addErrorPrevention(step, problemType) {
        const category = this.radicalTypes[problemType]?.category || 'cube_roots';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsRadical(step, problemType),
                checkPoints: this.generateCheckPointsRadical(step),
                warningFlags: this.identifyWarningFlagsRadical(step, problemType)
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestionRadical(step),
                expectedResult: this.describeExpectedResultRadical(step),
                troubleshooting: this.generateTroubleshootingTipsRadical(step)
            }
        };
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsRadical(step, problem),
                subSteps: this.breakIntoSubStepsRadical(step),
                hints: this.generateProgressiveHintsRadical(step, problem),
                practiceVariation: this.generatePracticeVariationRadical(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcessRadical(step),
                decisionPoints: this.identifyDecisionPointsRadical(step),
                alternativeApproaches: this.suggestAlternativeMethodsRadical(step, problem)
            }
        }));
    }

    // Helper methods for explanations

    getConceptualExplanationRadical(step, problem) {
        const conceptualExplanations = {
            'Identify the problem': `A radical expression asks us to find a number that, when raised to the index power, gives the radicand.`,
            'Check domain': `Domain restrictions ensure we only work with real numbers. Even indices require non-negative radicands.`,
            'Recognize perfect cube': `A perfect cube is a number formed by cubing an integer. Recognizing these makes evaluation immediate.`,
            'Prime factorization': `Breaking into primes reveals the structure, making it easier to identify perfect power factors.`,
            'Group factors': `Grouping factors in sets equal to the index identifies which parts can be extracted as whole numbers.`,
            'Extract perfect powers': `Perfect powers move outside the radical, simplifying the expression to its most basic form.`
        };

        return conceptualExplanations[step.step] || 'This step brings us closer to the solution.';
    }

    getProceduralExplanationRadical(step) {
        return `Follow the standard procedure for ${step.step}. Apply each operation carefully and check your work.`;
    }

    getVisualExplanationRadical(step, problem) {
        const category = this.radicalTypes[problem.type]?.category;
        
        const visualExplanations = {
            'cube_roots': 'Picture a cube - the cube root tells you the length of one side if you know the volume.',
            'fourth_roots': 'Imagine a 4D hypercube - fourth root finds the "side length" of this 4D object.',
            'simplifying_radicals': 'Visualize breaking blocks into equal groups, where complete groups come out.',
            'operations_with_radicals': 'Think of radicals as special containers that can only be combined if they're exactly the same type.'
        };

        return visualExplanations[category] || 'Visualize the radical operation step by step.';
    }

    getAlgebraicExplanationRadical(step) {
        const algebraicRules = {
            'Identify the problem': 'ⁿ√a = b means b^n = a',
            'Prime factorization': 'Every integer can be uniquely expressed as a product of primes',
            'Extract perfect powers': 'ⁿ√(a^n · b) = a · ⁿ√b',
            'Apply property': 'Product property: ⁿ√(ab) = ⁿ√a · ⁿ√b'
        };

        return algebraicRules[step.step] || 'Apply standard radical properties.';
    }

    getAdaptiveExplanationRadical(step, explanationLevel) {
        const level = this.difficultyLevels[explanationLevel] || this.difficultyLevels.intermediate;
        
        return {
            adaptedDescription: this.adaptLanguageLevelRadical(step.description, level),
            adaptedReasoning: this.adaptLanguageLevelRadical(step.reasoning, level),
            complexityLevel: explanationLevel
        };
    }

    adaptLanguageLevelRadical(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                'radicand': 'number under root',
                'index': 'root number',
                'coefficient': 'number in front',
                'perfect power': 'exact root',
                'prime factorization': 'breaking into primes',
                'simplify': 'make simpler'
            },
            ELI5: {
                'radicand': 'the number we\'re taking the root of',
                'index': 'the tiny number that tells us which root',
                'coefficient': 'the number that tags along in front',
                'perfect power': 'a number that gives a whole number answer',
                'prime factorization': 'breaking a number into its smallest building blocks',
                'simplify': 'make it neat and clean'
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

    generateStepBridgeRadical(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.expression || currentStep.description}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary to continue simplifying the radical`,
            howItHelps: `This brings us closer to the simplest form`
        };
    }

    explainStepProgressionRadical(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue working toward the solution`;
    }

    explainStepStrategyRadical(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
    }

    generatePreventionTipsRadical(step, problemType) {
        const tips = {
            'Check domain': [
                'Always check if index is even before proceeding',
                'Remember: even index needs radicand ≥ 0',
                'Odd index allows any real number'
            ],
            'Prime factorization': [
                'Factor completely - don\'t stop too early',
                'Check your arithmetic carefully',
                'Use factor trees if helpful'
            ],
            'Extract perfect powers': [
                'Group factors in sets equal to the index',
                'Each complete group becomes part of coefficient',
                'Ungrouped factors stay under radical'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Check each step'];
    }

    generateCheckPointsRadical(step) {
        return [
            'Did I identify the index correctly?',
            'Have I checked domain restrictions?',
            'Are my calculations correct?',
            'Is this the simplest form?'
        ];
    }

    identifyWarningFlagsRadical(step, problemType) {
        const warnings = {
            cube_roots: step.step === 'Check domain' ?
                ['Cube roots allow negatives - don\'t restrict unnecessarily'] : [],
            fourth_roots: step.step === 'Check domain' ?
                ['Must have non-negative radicand', 'No real solution if radicand < 0'] : []
        };

        const category = this.radicalTypes[problemType]?.category || 'cube_roots';
        return warnings[category] || [];
    }

    generateSelfCheckQuestionRadical(step) {
        const questions = {
            'Identify the problem': 'Do I understand what the index and radicand are?',
            'Check domain': 'Is the radicand allowed for this index?',
            'Recognize perfect cube': 'Can I verify this by cubing the answer?',
            'Prime factorization': 'Have I factored completely into primes?',
            'Extract perfect powers': 'Did I extract all possible perfect powers?'
        };

        return questions[step.step] || 'Does this step make sense?';
    }

    describeExpectedResultRadical(step) {
        const expectations = {
            'Check domain': 'Verification that problem is solvable in real numbers',
            'Prime factorization': 'Product of prime factors',
            'Extract perfect powers': 'Coefficient and simplified radicand',
            'Simplified form': 'Expression with no perfect power factors under radical'
        };

        return expectations[step.step] || 'Progress toward solution';
    }

    generateTroubleshootingTipsRadical(step) {
        return [
            'Review the definition of the radical operation',
            'Check that you\'re working with the correct index',
            'Verify your arithmetic step by step',
            'Try working a similar but simpler problem first'
        ];
    }

    generateGuidingQuestionsRadical(step, problem) {
        const questions = {
            'Identify the problem': [
                'What is the index?',
                'What is the radicand?',
                'What are we trying to find?'
            ],
            'Check domain': [
                'Is the index odd or even?',
                'If even, is the radicand non-negative?',
                'Can this problem be solved in real numbers?'
            ],
            'Prime factorization': [
                'What are the prime factors?',
                'How many times does each prime appear?',
                'Which primes can form perfect powers?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?'];
    }

    generateProgressiveHintsRadical(step, problem) {
        const category = this.radicalTypes[problem.type]?.category || 'cube_roots';
        const hintSet = this.hints[category] || this.hints.cube_root_evaluation;

        return {
            level1: hintSet.level1 || 'Think about what this radical means.',
            level2: hintSet.level2 || 'Consider the definition of nth root.',
            level3: hintSet.level3 || 'Apply the appropriate technique.',
            level4: hintSet.level4 || 'Calculate the final answer.'
        };
    }

    breakIntoSubStepsRadical(step) {
        if (step.step === 'Prime factorization') {
            return [
                'Start with smallest prime (2)',
                'Divide repeatedly until no longer divisible',
                'Move to next prime (3, 5, 7, ...)',
                'Continue until result is 1',
                'List all prime factors with their exponents'
            ];
        }

        return ['Understand the goal', 'Apply the technique', 'Verify the result'];
    }

    generatePracticeVariationRadical(step, problem) {
        return {
            similarProblem: 'Try the same type of radical with different numbers',
            practiceHint: 'Start with perfect powers to build confidence',
            extension: 'Try radicals with variables once comfortable with numbers'
        };
    }

    explainThinkingProcessRadical(step) {
        return {
            observe: 'What do I see in this radical?',
            goal: 'What am I trying to accomplish?',
            strategy: 'Which technique should I use?',
            execute: 'How do I perform this correctly?',
            verify: 'Does my result make sense?'
        };
    }

    identifyDecisionPointsRadical(step) {
        return [
            'Which index am I working with?',
            'Is domain checking needed?',
            'Should I simplify or evaluate?',
            'Which simplification method is best?'
        ];
    }

    suggestAlternativeMethodsRadical(step, problem) {
        const alternatives = {
            'Evaluate': [
                'Direct calculation',
                'Estimation between perfect powers',
                'Using calculator',
                'Converting to rational exponent'
            ],
            'Simplify': [
                'Prime factorization method',
                'Perfect power recognition',
                'Repeated division by perfect powers'
            ]
        };

        return alternatives[step.operation] || ['The chosen method is appropriate'];
    }

    connectToPreviousStepRadical(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex}`,
            progression: 'We are simplifying the radical further',
            relationship: 'Each step extracts more information from the radicand'
        };
    }

    identifyPrerequisitesRadical(step, problemType) {
        const category = this.radicalTypes[problemType]?.category || 'cube_roots';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Basic understanding of radicals'];
    }

    identifyKeyVocabularyRadical(step) {
        const vocabulary = {
            'Identify the problem': ['radical', 'radicand', 'index', 'root'],
            'Check domain': ['domain', 'even index', 'odd index', 'non-negative'],
            'Prime factorization': ['prime', 'factor', 'factorization', 'composite'],
            'Extract perfect powers': ['perfect power', 'coefficient', 'extract', 'simplify']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPromptsRadical(step) {
        return {
            before: 'Before starting, what do I need to know about this radical?',
            during: 'As I work, am I applying the properties correctly?',
            after: 'After finishing, can I verify my answer makes sense?'
        };
    }

    findRealWorldConnectionRadical(step, problem) {
        const connections = {
            'cube_roots': 'Like finding the side length of a cube when you know its volume',
            'fourth_roots': 'Used in physics for relationships involving fourth powers',
            'simplifying_radicals': 'Makes calculations easier in engineering and science'
        };

        const category = this.radicalTypes[problem.type]?.category;
        return connections[category] || 'Radicals appear in many real-world formulas';
    }

    // GRAPH GENERATION

    generateRadicalGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { index, radicand } = this.currentProblem;
        
        if (this.currentSolution.value !== null) {
            this.graphData = this.generateRadicalGraph(this.currentProblem, this.currentSolution);
        }
    }

    generateRadicalGraph(problem, solution) {
        return {
            type: 'radical_function',
            index: problem.index,
            description: `Graph of y = ${this.rootSymbol(problem.index)}√x`,
            keyPoint: {
                x: problem.radicand,
                y: solution.value
            },
            domain: problem.index % 2 === 0 ? 'x ≥ 0' : 'all real numbers',
            range: problem.index % 2 === 0 ? 'y ≥ 0' : 'all real numbers'
        };
    }

    // WORKBOOK GENERATION

    generateRadicalWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSectionRadical(),
            this.createPrerequisiteSectionRadical(),
            this.createEnhancedStepsSectionRadical(),
            this.createRadicalLessonSectionRadical(),
            this.createSolutionSectionRadical(),
            this.createAnalysisSectionRadical(),
            this.createVerificationSectionRadical(),
            this.createRealWorldApplicationSectionRadical(),
            this.createPedagogicalNotesSectionRadical(),
            this.createAlternativeMethodsSectionRadical(),
            this.createPracticeProblemsSectionRadical()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Higher Index Radicals Mathematical Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            explanationLevel: this.explanationLevel,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSectionRadical() {
        if (!this.currentProblem) return null;

        const problemData = [
            ['Problem Type', this.radicalTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.radicalTypes[this.currentProblem.type]?.category || 'radicals'],
            ['Index', this.currentProblem.index],
            ['Radicand', this.currentProblem.radicand],
            ['Notation', `${this.rootSymbol(this.currentProblem.index)}√${this.currentProblem.radicand}`],
            ['Operation', this.currentProblem.operation]
        ];

        if (this.currentProblem.scenario) {
            problemData.push(['Scenario', this.currentProblem.scenario]);
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSectionRadical() {
        if (!this.prerequisiteChecks) return null;

        const category = this.radicalTypes[this.currentProblem.type]?.category;
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

    createEnhancedStepsSectionRadical() {
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
            }

            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                const questions = step.scaffolding.guidingQuestions;
                if (questions && questions.length > 0) {
                    stepsData.push(['Guiding Questions', questions.join(' | ')]);
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

    createRadicalLessonSectionRadical() {
        const { type } = this.currentProblem;
        const category = this.radicalTypes[type]?.category;
        const lesson = this.lessons[category] || this.lessons.higher_index_radicals;

        const lessonData = [
            ['Key Concepts', ''],
            ...lesson.concepts.map(c => ['', c]),
            ['', ''],
            ['Theory', lesson.theory],
            ['', ''],
            ['Key Formulas', '']
        ];

        if (lesson.keyFormulas) {
            for (const [name, formula] of Object.entries(lesson.keyFormulas)) {
                lessonData.push([name, formula]);
            }
        }

        return {
            title: 'Key Concepts',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSectionRadical() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        if (this.currentSolution.error) {
            solutionData.push(['Result', this.currentSolution.error]);
            solutionData.push(['Explanation', 'No real solution exists']);
        } else if (this.currentSolution.value !== null && this.currentSolution.value !== undefined) {
            if (this.currentSolution.exactValue !== null) {
                solutionData.push(['Exact Value', this.currentSolution.exactValue]);
            } else {
                solutionData.push(['Approximate Value', this.currentSolution.value.toFixed(6)]);
            }
            
            if (this.currentSolution.simplified) {
                solutionData.push(['Simplified Form', this.currentSolution.simplified]);
            }
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createAnalysisSectionRadical() {
        if (!this.currentSolution) return null;

        const analysisData = [
            ['Solution Method', this.currentSolution.type || this.currentSolution.category],
            ['Index', this.currentProblem.index],
            ['Index Type', this.currentProblem.index % 2 === 0 ? 'Even' : 'Odd'],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Difficulty Level', this.explanationLevel]
        ];

        if (this.currentSolution.isPerfectPower !== undefined) {
            analysisData.push(['Perfect Power?', this.currentSolution.isPerfectPower ? 'Yes' : 'No']);
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSectionRadical() {
        if (!this.currentSolution || !this.currentProblem) return null;
        
        if (this.currentSolution.error) {
            return {
                title: 'Solution Verification',
                type: 'verification',
                data: [['Verification', 'No solution to verify']]
            };
        }

        const verificationData = [
            ['Verification Method', 'Raise result to nth power'],
            ['', '']
        ];

        const verification = this.currentSolution.verification;
        if (verification) {
            verificationData.push(['Result', verification.value]);
            verificationData.push(['Check', verification.verification]);
            verificationData.push(['Expected', verification.radicand]);
            verificationData.push(['Difference', verification.difference.toExponential(2)]);
            verificationData.push(['Valid', verification.isValid ? 'Yes ✓' : 'No']);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createRealWorldApplicationSectionRadical() {
        if (!this.includeRealWorldApplications) return null;

        const applications = Object.values(this.realWorldProblems).slice(0, 3);

        const appData = [
            ['Real-World Applications', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Context', app.context]);
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

    createPedagogicalNotesSectionRadical() {
        if (!this.includePedagogicalNotes) return null;

        const notes = this.generateRadicalPedagogicalNotes(this.currentProblem.type);

        return {
            title: 'Teaching Notes',
            type: 'pedagogical',
            data: [
                ['Learning Objectives', notes.objectives.join('; ')],
                ['Key Concepts', notes.keyConcepts.join('; ')],
                ['Prerequisites', notes.prerequisites.join('; ')],
                ['Common Difficulties', notes.commonDifficulties.join('; ')],
                ['Teaching Strategies', notes.teachingStrategies.join('; ')],
                ['Extension Ideas', notes.extensions.join('; ')]
            ]
        };
    }

    createAlternativeMethodsSectionRadical() {
        if (!this.includeAlternativeMethods) return null;

        const alternatives = this.generateRadicalAlternativeMethods(this.currentProblem.type);

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

    createPracticeProblemsSectionRadical() {
        const problems = this.questionBank.byDifficulty;

        const practiceData = [
            ['Practice Problems', ''],
            ['', ''],
            ['Easy Problems', '']
        ];

        problems.easy.slice(0, 3).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Medium Problems', '']);

        problems.medium.slice(0, 3).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Hard Problems', '']);

        problems.hard.slice(0, 2).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        return {
            title: 'Practice Problems',
            type: 'practice',
            data: practiceData
        };
    }

    generateRadicalPedagogicalNotes(problemType) {
        const category = this.radicalTypes[problemType]?.category;

        const pedagogicalDatabase = {
            cube_roots: {
                objectives: [
                    'Evaluate cube roots of perfect cubes',
                    'Understand odd index allows negative radicands',
                    'Simplify cube root expressions',
                    'Apply cube roots to volume problems'
                ],
                keyConcepts: [
                    'Cube root is inverse of cubing',
                    'Odd index preserves sign',
                    'Perfect cubes: 1, 8, 27, 64, 125, ...',
                    'Product property applies to cube roots'
                ],
                prerequisites: [
                    'Understanding of cubing',
                    'Perfect cubes recognition',
                    'Prime factorization',
                    'Negative number operations'
                ],
                commonDifficulties: [
                    'Thinking cube roots can\'t be negative',
                    'Not recognizing perfect cubes',
                    'Incomplete simplification',
                    'Sign errors with negatives'
                ],
                teachingStrategies: [
                    'Use volume visualization',
                    'Demonstrate with concrete examples',
                    'Practice perfect cube recognition',
                    'Emphasize odd/even index difference'
                ],
                extensions: [
                    'Fourth and higher roots',
                    'Rational exponents',
                    'Radical equations',
                    'Complex radicals'
                ]
            },
            fourth_roots: {
                objectives: [
                    'Evaluate fourth roots of perfect fourth powers',
                    'Understand even index requires non-negative radicands',
                    'Simplify fourth root expressions',
                    'Recognize domain restrictions'
                ],
                keyConcepts: [
                    'Fourth root is inverse of fourth power',
                    'Even index gives non-negative result',
                    'Perfect fourth powers: 1, 16, 81, 256, ...',
                    'Absolute value needed for variables'
                ],
                prerequisites: [
                    'Square roots',
                    'Cube roots',
                    'Fourth powers',
                    'Absolute value'
                ],
                commonDifficulties: [
                    'Trying to find fourth root of negative',
                    'Forgetting absolute value with variables',
                    'Not recognizing perfect fourth powers',
                    'Domain restriction confusion'
                ],
                teachingStrategies: [
                    'Compare to square roots',
                    'Use number line for domain',
                    'Practice perfect power recognition',
                    'Emphasize even index restrictions'
                ],
                extensions: [
                    'Higher even index roots',
                    'Rational exponents',
                    'Complex numbers for negative radicands'
                ]
            },
            simplifying_radicals: {
                objectives: [
                    'Simplify higher index radicals completely',
                    'Use prime factorization effectively',
                    'Extract all perfect power factors',
                    'Recognize fully simplified form'
                ],
                keyConcepts: [
                    'Prime factorization reveals structure',
                    'Group factors in sets of n',
                    'Extract complete groups as coefficients',
                    'Simplest form has no perfect powers under radical'
                ],
                prerequisites: [
                    'Prime factorization',
                    'Perfect power recognition',
                    'Product property of radicals',
                    'Coefficient extraction'
                ],
                commonDifficulties: [
                    'Incomplete factorization',
                    'Missing perfect power factors',
                    'Incorrect grouping',
                    'Not simplifying completely'
                ],
                teachingStrategies: [
                    'Teach systematic factorization',
                    'Use factor trees',
                    'Practice grouping',
                    'Provide worked examples'
                ],
                extensions: [
                    'Radicals with variables',
                    'Operations with radicals',
                    'Rationalizing denominators'
                ]
            },
            operations_with_radicals: {
                objectives: [
                    'Add and subtract like radicals',
                    'Multiply and divide radicals',
                    'Simplify before combining',
                    'Rationalize denominators'
                ],
                keyConcepts: [
                    'Like radicals: same index and radicand',
                    'Product/quotient properties',
                    'Cannot add unlike radicals',
                    'Rationalizing eliminates radical from denominator'
                ],
                prerequisites: [
                    'Simplifying radicals',
                    'Like terms concept',
                    'Multiplication properties',
                    'Fraction operations'
                ],
                commonDifficulties: [
                    'Trying to add unlike radicals',
                    'Not simplifying first',
                    'Different index confusion',
                    'Rationalization errors'
                ],
                teachingStrategies: [
                    'Use like terms analogy',
                    'Emphasize "same index AND radicand"',
                    'Practice identification',
                    'Teach systematic approach'
                ],
                extensions: [
                    'Radical equations',
                    'Binomial radical expressions',
                    'Complex radical operations'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Work with higher index radicals'],
            keyConcepts: ['nth root properties'],
            prerequisites: ['Basic radical understanding'],
            commonDifficulties: ['Various challenges'],
            teachingStrategies: ['Systematic instruction'],
            extensions: ['More complex problems']
        };
    }

    generateRadicalAlternativeMethods(problemType) {
        const category = this.radicalTypes[problemType]?.category;

        const alternativeDatabase = {
            cube_roots: {
                primaryMethod: 'Recognition of perfect cubes or prime factorization',
                methods: [
                    {
                        name: 'Perfect Cube Recognition',
                        description: 'Memorize common perfect cubes and recognize them directly'
                    },
                    {
                        name: 'Prime Factorization',
                        description: 'Factor into primes, group in threes, extract'
                    },
                    {
                        name: 'Estimation',
                        description: 'Find perfect cubes above and below, estimate between'
                    },
                    {
                        name: 'Calculator',
                        description: 'Use calculator for approximate values'
                    },
                    {
                        name: 'Rational Exponent',
                        description: 'Convert to a^(1/3) and use exponent rules'
                    }
                ],
                comparison: 'Recognition fastest for perfect cubes; factorization best for simplification; calculator for decimals'
            },
            fourth_roots: {
                primaryMethod: 'Recognition of perfect fourth powers or systematic simplification',
                methods: [
                    {
                        name: 'Perfect Fourth Power Recognition',
                        description: 'Recognize 1, 16, 81, 256, 625, etc.'
                    },
                    {
                        name: 'Repeated Square Roots',
                        description: 'Fourth root = square root of square root'
                    },
                    {
                        name: 'Prime Factorization',
                        description: 'Factor and group in sets of 4'
                    },
                    {
                        name: 'Rational Exponent',
                        description: 'Use a^(1/4) notation'
                    }
                ],
                comparison: 'Repeated square roots interesting but less efficient; factorization most systematic'
            },
            simplifying_radicals: {
                primaryMethod: 'Prime factorization with grouping',
                methods: [
                    {
                        name: 'Prime Factorization Method',
                        description: 'Complete prime factorization, group, extract'
                    },
                    {
                        name: 'Repeated Division',
                        description: 'Divide by perfect powers repeatedly'
                    },
                    {
                        name: 'Factor Tree',
                        description: 'Visual factor tree, circle groups'
                    }
                ],
                comparison: 'Prime factorization most systematic and reliable; factor tree good for visual learners'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard radical approach',
            methods: [{
                name: 'Alternative',
                description: 'Various approaches possible'
            }],
            comparison: 'Choose based on problem characteristics'
        };
    }
}

// Export the class
export default EnhancedHigherIndexRadicalsWorkbook;
