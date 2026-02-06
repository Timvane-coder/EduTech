// Enhanced Rational Exponents and Radicals Mathematical Workbook
import * as math from 'mathjs';

export class EnhancedRationalExponentsRadicalsWorkbook {
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
        this.initializeRadicalLessons();
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
            // Mathematical operators
            'sqrt': '√',
            'cbrt': '∛',
            'fourthrt': '∜',
            'leq': '≤',
            'geq': '≥',
            'neq': '≠',
            'approx': '≈',
            'infinity': '∞',
            'plusminus': '±',
            // Greek letters
            'alpha': 'α',
            'beta': 'β',
            'gamma': 'γ',
            'delta': 'Δ',
            'pi': 'π',
            'theta': 'θ',
            'lambda': 'λ',
            'mu': 'μ',
            // Special symbols
            'intersection': '∩',
            'union': '∪',
            'subset': '⊂',
            'element': '∈',
            'perpendicular': '⊥',
            'parallel': '∥'
        };
    }

    initializeRadicalLessons() {
        this.lessons = {
            radical_basics: {
                title: "Introduction to Radicals",
                concepts: [
                    "Radical notation: ⁿ√x represents the nth root of x",
                    "Square root (√) is the most common radical (n=2)",
                    "Cube root (∛) finds what number cubed gives x (n=3)",
                    "Index n indicates which root we're finding",
                    "Radicand is the value under the radical symbol"
                ],
                theory: "A radical ⁿ√x asks: 'What number raised to the nth power equals x?' Radicals are the inverse operation of exponentiation.",
                keyFormulas: {
                    "Square Root": "√x means what number squared equals x",
                    "Cube Root": "∛x means what number cubed equals x",
                    "nth Root": "ⁿ√x means what number to the nth power equals x",
                    "Perfect Powers": "If x = aⁿ, then ⁿ√x = a"
                },
                keyProperties: [
                    "√(a²) = |a| for even roots (absolute value needed)",
                    "∛(a³) = a for odd roots (no absolute value needed)",
                    "ⁿ√0 = 0 for all n",
                    "ⁿ√1 = 1 for all n",
                    "Even roots of negative numbers are not real"
                ],
                applications: [
                    "Geometry: finding side lengths from areas/volumes",
                    "Physics: velocity from kinetic energy",
                    "Engineering: calculating dimensions",
                    "Statistics: standard deviation calculations"
                ]
            },

            rational_exponents: {
                title: "Rational Exponents",
                concepts: [
                    "x^(1/n) = ⁿ√x (fractional exponent equals root)",
                    "x^(m/n) = (ⁿ√x)^m = ⁿ√(x^m)",
                    "Denominator of exponent is the root index",
                    "Numerator of exponent is the power",
                    "Can evaluate as root then power, or power then root"
                ],
                theory: "Rational exponents provide an alternative notation for radicals. They follow all exponent rules and allow us to use exponent properties with roots.",
                keyFormulas: {
                    "Root as Exponent": "ⁿ√x = x^(1/n)",
                    "General Form": "x^(m/n) = (ⁿ√x)^m",
                    "Alternative Form": "x^(m/n) = ⁿ√(x^m)",
                    "Negative Exponent": "x^(-m/n) = 1/(x^(m/n))"
                },
                exponentRules: {
                    "Product Rule": "x^(a/b) · x^(c/d) = x^(a/b + c/d)",
                    "Quotient Rule": "x^(a/b) / x^(c/d) = x^(a/b - c/d)",
                    "Power Rule": "(x^(a/b))^(c/d) = x^(ac/bd)",
                    "Power of Product": "(xy)^(a/b) = x^(a/b) · y^(a/b)"
                },
                evaluationStrategies: [
                    "For x^(m/n), evaluate root first if n makes a nice number",
                    "For large powers, compute power first then root",
                    "Simplify the fraction m/n before evaluating",
                    "Use calculator for non-perfect powers"
                ],
                applications: [
                    "Compound interest with continuous compounding",
                    "Growth and decay models",
                    "Scaling relationships in nature",
                    "Dimensional analysis"
                ]
            },

            simplifying_radicals: {
                title: "Simplifying Radical Expressions",
                concepts: [
                    "Factor radicand into perfect powers when possible",
                    "√(ab) = √a · √b (product property)",
                    "√(a/b) = √a / √b (quotient property)",
                    "Simplified form: no perfect power factors under radical",
                    "Rationalize denominators (no radicals in denominator)"
                ],
                theory: "Simplifying radicals means expressing them in simplest form with no perfect power factors under the radical and no radicals in denominators.",
                keyFormulas: {
                    "Product Property": "ⁿ√(ab) = ⁿ√a · ⁿ√b",
                    "Quotient Property": "ⁿ√(a/b) = ⁿ√a / ⁿ√b",
                    "Simplified Form": "ⁿ√(a^n · b) = a · ⁿ√b where b has no perfect nth powers",
                    "Rationalizing": "1/√a = √a/a"
                },
                simplificationSteps: [
                    "1. Factor radicand completely",
                    "2. Identify perfect nth power factors",
                    "3. Apply product property to separate factors",
                    "4. Simplify perfect power roots",
                    "5. Multiply simplified parts together",
                    "6. Rationalize denominator if needed"
                ],
                rationalizationTechniques: {
                    "Monomial": "Multiply by √a/√a to rationalize 1/√a",
                    "Binomial": "Multiply by conjugate (a+√b)(a-√b) = a² - b",
                    "Higher Roots": "Multiply to make perfect power in denominator"
                },
                applications: [
                    "Exact answers in geometry",
                    "Simplifying algebraic expressions",
                    "Preparing for further operations",
                    "Standard form in mathematics"
                ]
            },

            operations_with_radicals: {
                title: "Operations with Radicals",
                concepts: [
                    "Add/subtract only like radicals (same index and radicand)",
                    "Multiply radicals: multiply coefficients and radicands separately",
                    "Divide radicals: divide coefficients and radicands separately",
                    "Simplify first to identify like terms",
                    "Use product and quotient properties"
                ],
                theory: "Operations with radicals follow specific rules based on whether the radicals are like terms and the properties of radicals.",
                keyFormulas: {
                    "Addition": "a√x + b√x = (a+b)√x (like radicals only)",
                    "Multiplication": "(a√x)(b√y) = ab√(xy)",
                    "Division": "(a√x)/(b√y) = (a/b)√(x/y)",
                    "Conjugates": "(a+√b)(a-√b) = a² - b"
                },
                operationSteps: {
                    "Adding/Subtracting": [
                        "Simplify each radical completely",
                        "Identify like radicals",
                        "Combine coefficients of like radicals",
                        "Leave unlike radicals separate"
                    ],
                    "Multiplying": [
                        "Multiply coefficients together",
                        "Multiply radicands together",
                        "Simplify the resulting radical"
                    ],
                    "Dividing": [
                        "Divide coefficients",
                        "Divide radicands",
                        "Simplify the resulting radical",
                        "Rationalize if needed"
                    ]
                },
                applications: [
                    "Simplifying complex expressions",
                    "Solving radical equations",
                    "Geometric calculations",
                    "Physics formulas"
                ]
            },

            radical_equations: {
                title: "Solving Radical Equations",
                concepts: [
                    "Isolate the radical term on one side",
                    "Raise both sides to appropriate power to eliminate radical",
                    "Solve resulting equation",
                    "Check all solutions (extraneous solutions possible)",
                    "May need to square/cube multiple times for nested radicals"
                ],
                theory: "Radical equations contain variables under radical symbols. Solving requires eliminating radicals by raising to powers, which can introduce extraneous solutions.",
                keyFormulas: {
                    "Basic Strategy": "If ⁿ√f(x) = g(x), then f(x) = [g(x)]ⁿ",
                    "Square Root": "If √x = a, then x = a²",
                    "Cube Root": "If ∛x = a, then x = a³",
                    "Checking": "Always substitute back into original equation"
                },
                solvingSteps: [
                    "1. Isolate one radical term",
                    "2. Raise both sides to power equal to index",
                    "3. Simplify the equation",
                    "4. If radicals remain, repeat process",
                    "5. Solve resulting polynomial equation",
                    "6. Check all solutions in original equation",
                    "7. Reject extraneous solutions"
                ],
                extraneousSolutions: {
                    "Why They Occur": "Squaring both sides can introduce solutions that don't satisfy original",
                    "Example": "√x = -2 has no solution, but x = 4 solves x = (-2)²",
                    "Prevention": "Always check solutions in original equation"
                },
                applications: [
                    "Distance problems",
                    "Pendulum period calculations",
                    "Orbital mechanics",
                    "Signal processing"
                ]
            },

            complex_radicals: {
                title: "Complex Radical Expressions",
                concepts: [
                    "Nested radicals: radicals within radicals",
                    "Conjugate pairs: (a+√b)(a-√b)",
                    "Rationalizing complex denominators",
                    "Simplifying expressions with multiple radicals",
                    "Converting between radical and exponential form"
                ],
                theory: "Complex radical expressions involve multiple radicals, nesting, or combinations requiring advanced simplification techniques.",
                keyFormulas: {
                    "Conjugate Product": "(a+√b)(a-√b) = a² - b",
                    "Nested Radical": "√(a + √b) may simplify to √c + √d in special cases",
                    "Double Radical": "√√x = ⁴√x = x^(1/4)",
                    "Rationalization": "Multiply by conjugate to eliminate radical denominator"
                },
                techniques: [
                    "Denesting: converting √(a±√b) to simpler form when possible",
                    "Conjugate multiplication for binomial denominators",
                    "Combining like radicals after expansion",
                    "Converting to rational exponents for complex operations"
                ],
                applications: [
                    "Advanced algebra",
                    "Calculus preparations",
                    "Number theory",
                    "Complex analysis"
                ]
            },

            exponent_laws: {
                title: "Laws of Exponents with Radicals",
                concepts: [
                    "All exponent rules apply to rational exponents",
                    "Product rule: x^a · x^b = x^(a+b)",
                    "Quotient rule: x^a / x^b = x^(a-b)",
                    "Power rule: (x^a)^b = x^(ab)",
                    "Negative exponents: x^(-a) = 1/(x^a)"
                ],
                theory: "Rational exponents follow the same laws as integer exponents, allowing powerful manipulation of radical expressions.",
                keyFormulas: {
                    "Product of Powers": "x^(m/n) · x^(p/q) = x^(m/n + p/q)",
                    "Quotient of Powers": "x^(m/n) / x^(p/q) = x^(m/n - p/q)",
                    "Power of a Power": "(x^(m/n))^(p/q) = x^(mp/nq)",
                    "Power of a Product": "(xy)^(m/n) = x^(m/n) · y^(m/n)",
                    "Power of a Quotient": "(x/y)^(m/n) = x^(m/n) / y^(m/n)",
                    "Zero Exponent": "x^0 = 1 (x ≠ 0)",
                    "Negative Exponent": "x^(-m/n) = 1/(x^(m/n))"
                },
                commonApplications: [
                    "Simplifying expressions before calculation",
                    "Combining multiple radical terms",
                    "Converting between forms",
                    "Solving exponential equations"
                ],
                examples: [
                    "x^(1/2) · x^(1/3) = x^(3/6 + 2/6) = x^(5/6)",
                    "(x^(2/3))^(3/2) = x^(2/3 · 3/2) = x^1 = x",
                    "x^(-1/2) = 1/√x"
                ]
            },

            perfect_powers: {
                title: "Perfect Powers and Prime Factorization",
                concepts: [
                    "Perfect square: number that equals integer squared",
                    "Perfect cube: number that equals integer cubed",
                    "Perfect nth power: number that equals integer to nth power",
                    "Prime factorization helps identify perfect powers",
                    "Group factors by index to simplify radicals"
                ],
                theory: "Recognizing and working with perfect powers is essential for simplifying radicals efficiently.",
                perfectSquares: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400],
                perfectCubes: [1, 8, 27, 64, 125, 216, 343, 512, 729, 1000],
                perfectFourths: [1, 16, 81, 256, 625],
                keyFormulas: {
                    "Perfect Square Test": "If n = a², then √n = a",
                    "Perfect Cube Test": "If n = a³, then ∛n = a",
                    "Prime Factorization": "Express as product of primes to identify perfect powers",
                    "Grouping": "For ⁿ√(p₁^a · p₂^b · ...), group factors in sets of n"
                },
                factorizationSteps: [
                    "1. Find prime factorization of radicand",
                    "2. Group prime factors by index",
                    "3. Extract groups as coefficients",
                    "4. Leave ungrouped factors under radical"
                ],
                applications: [
                    "Mental math with radicals",
                    "Quick simplification",
                    "Pattern recognition",
                    "Number sense development"
                ]
            },

            domains_and_restrictions: {
                title: "Domain Restrictions with Radicals",
                concepts: [
                    "Even roots require non-negative radicands (real numbers)",
                    "Odd roots accept all real numbers",
                    "Domain affects which values are valid",
                    "Rational exponents inherit radical restrictions",
                    "Consider domain when solving equations"
                ],
                theory: "Domain restrictions ensure mathematical expressions remain in the real number system and avoid undefined operations.",
                keyFormulas: {
                    "Even Root": "For ²ⁿ√x to be real, x ≥ 0",
                    "Odd Root": "For ²ⁿ⁺¹√x, x can be any real number",
                    "Rational Exponent": "For x^(m/n), domain depends on whether n is even/odd",
                    "Denominator": "For expressions like 1/√x, also need x ≠ 0"
                },
                domainRules: [
                    "√x requires x ≥ 0",
                    "∛x allows all real x",
                    "⁴√x requires x ≥ 0",
                    "1/√x requires x > 0",
                    "√(f(x)) requires f(x) ≥ 0"
                ],
                applications: [
                    "Function domain determination",
                    "Equation solving validity",
                    "Graphing restrictions",
                    "Real-world constraints"
                ]
            },

            rationalizing_denominators: {
                title: "Rationalizing Denominators",
                concepts: [
                    "Standard form has no radicals in denominator",
                    "Multiply by form of 1 to eliminate radicals",
                    "For √a, multiply by √a/√a",
                    "For binomials, multiply by conjugate",
                    "Result should be in simplest form"
                ],
                theory: "Rationalizing makes expressions easier to compare, add, and use in further calculations by eliminating radicals from denominators.",
                keyFormulas: {
                    "Monomial": "1/√a = √a/a",
                    "Conjugate": "(a+√b)/(c+√d) multiply by (c-√d)/(c-√d)",
                    "Difference of Squares": "(a+√b)(a-√b) = a² - b",
                    "Higher Roots": "1/∛a = ∛(a²)/a or multiply to make perfect cube"
                },
                techniques: {
                    "Square Root Monomial": [
                        "Identify: 1/√a",
                        "Multiply: (1/√a) · (√a/√a)",
                        "Simplify: √a/a"
                    ],
                    "Cube Root Monomial": [
                        "Identify: 1/∛a",
                        "Multiply: (1/∛a) · (∛(a²)/∛(a²))",
                        "Simplify: ∛(a²)/a"
                    ],
                    "Binomial Denominator": [
                        "Identify: 1/(a+√b)",
                        "Find conjugate: a-√b",
                        "Multiply: (1/(a+√b)) · ((a-√b)/(a-√b))",
                        "Simplify: (a-√b)/(a²-b)"
                    ]
                },
                applications: [
                    "Standardizing mathematical expressions",
                    "Simplifying complex fractions",
                    "Comparing radical expressions",
                    "Calculus limit calculations"
                ]
            },

            pythagorean_applications: {
                title: "Pythagorean Theorem and Radicals",
                concepts: [
                    "a² + b² = c² relates sides of right triangle",
                    "Finding hypotenuse: c = √(a² + b²)",
                    "Finding leg: a = √(c² - b²)",
                    "Results often involve radicals",
                    "Distance formula extends Pythagorean theorem"
                ],
                theory: "The Pythagorean theorem frequently produces radical expressions when calculating exact distances and lengths.",
                keyFormulas: {
                    "Pythagorean Theorem": "a² + b² = c²",
                    "Hypotenuse": "c = √(a² + b²)",
                    "Leg": "a = √(c² - b²)",
                    "Distance Formula": "d = √((x₂-x₁)² + (y₂-y₁)²)",
                    "3D Distance": "d = √((x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²)"
                },
                commonTriples: [
                    "3-4-5 triangle",
                    "5-12-13 triangle",
                    "8-15-17 triangle",
                    "7-24-25 triangle"
                ],
                applications: [
                    "Construction and carpentry",
                    "Navigation and GPS",
                    "Computer graphics",
                    "Physics and engineering"
                ]
            }
        };
    }

    initializeRadicalSolvers() {
        this.radicalTypes = {
            // Simplifying square roots
            simplify_square_root: {
                patterns: [
                    /simplify.*√(\d+)/i,
                    /√(\d+)/,
                    /sqrt\((\d+)\)/i
                ],
                solver: this.simplifySquareRoot.bind(this),
                name: 'Simplify Square Root',
                category: 'simplifying_radicals',
                description: 'Simplifies √n to simplest radical form'
            },

            // Simplifying cube roots
            simplify_cube_root: {
                patterns: [
                    /simplify.*∛(\d+)/i,
                    /∛(\d+)/,
                    /cbrt\((\d+)\)/i,
                    /cube.*root.*(\d+)/i
                ],
                solver: this.simplifyCubeRoot.bind(this),
                name: 'Simplify Cube Root',
                category: 'simplifying_radicals',
                description: 'Simplifies ∛n to simplest radical form'
            },

            // Simplifying nth roots
            simplify_nth_root: {
                patterns: [
                    /simplify.*(\d+).*root.*(\d+)/i,
                    /\^root\((\d+),\s*(\d+)\)/i
                ],
                solver: this.simplifyNthRoot.bind(this),
                name: 'Simplify nth Root',
                category: 'simplifying_radicals',
                description: 'Simplifies ⁿ√x to simplest radical form'
            },

            // Rational exponents to radicals
            rational_exponent_to_radical: {
                patterns: [
                    /(\d+)\s*\^\s*\((\d+)\/(\d+)\)/,
                    /convert.*(\d+)\^(\d+)\/(\d+).*radical/i,
                    /x\^(\d+)\/(\d+)/
                ],
                solver: this.convertRationalExponentToRadical.bind(this),
                name: 'Rational Exponent to Radical',
                category: 'rational_exponents',
                description: 'Converts x^(m/n) to radical form'
            },

            // Radical to rational exponent
            radical_to_rational_exponent: {
                patterns: [
                    /convert.*√.*exponent/i,
                    /radical.*to.*exponent/i
                ],
                solver: this.convertRadicalToRationalExponent.bind(this),
                name: 'Radical to Rational Exponent',
                category: 'rational_exponents',
                description: 'Converts ⁿ√(x^m) to exponential form'
            },

            // Evaluating rational exponents
            evaluate_rational_exponent: {
                patterns: [
                    /evaluate.*(\d+)\^(\d+)\/(\d+)/i,
                    /calculate.*(\d+)\^\((\d+)\/(\d+)\)/i
                ],
                solver: this.evaluateRationalExponent.bind(this),
                name: 'Evaluate Rational Exponent',
                category: 'rational_exponents',
                description: 'Calculates numerical value of x^(m/n)'
            },

            // Adding radicals
            add_radicals: {
                patterns: [
                    /add.*√/i,
                    /√.*\+.*√/,
                    /sum.*radical/i
                ],
                solver: this.addRadicals.bind(this),
                name: 'Add Radical Expressions',
                category: 'operations_with_radicals',
                description: 'Adds like radical terms'
            },

            // Subtracting radicals
            subtract_radicals: {
                patterns: [
                    /subtract.*√/i,
                    /√.*-.*√/,
                    /difference.*radical/i
                ],
                solver: this.subtractRadicals.bind(this),
                name: 'Subtract Radical Expressions',
                category: 'operations_with_radicals',
                description: 'Subtracts like radical terms'
            },

            // Multiplying radicals
            multiply_radicals: {
                patterns: [
                    /multiply.*√/i,
                    /√.*\*.*√/,
                    /product.*radical/i,
                    /\(.*√.*\)\(.*√.*\)/
                ],
                solver: this.multiplyRadicals.bind(this),
                name: 'Multiply Radical Expressions',
                category: 'operations_with_radicals',
                description: 'Multiplies radical expressions'
            },

            // Dividing radicals
            divide_radicals: {
                patterns: [
                    /divide.*√/i,
                    /√.*\/.*√/,
                    /quotient.*radical/i
                ],
                solver: this.divideRadicals.bind(this),
                name: 'Divide Radical Expressions',
                category: 'operations_with_radicals',
                description: 'Divides radical expressions'
            },

            // Rationalizing denominators - monomial
            rationalize_monomial: {
                patterns: [
                    /rationalize.*\d\/√/i,
                    /\d+\/√\d+/,
                    /rationalize.*denominator/i
                ],
                solver: this.rationalizeMonomial.bind(this),
                name: 'Rationalize Monomial Denominator',
                category: 'rationalizing_denominators',
                description: 'Eliminates radical from denominator'
            },

            // Rationalizing denominators - binomial
            rationalize_binomial: {
                patterns: [
                    /rationalize.*\(.*√.*\+/i,
                    /rationalize.*\(.*√.*-/i,
                    /conjugate/i
                ],
                solver: this.rationalizeBinomial.bind(this),
                name: 'Rationalize Binomial Denominator',
                category: 'rationalizing_denominators',
                description: 'Uses conjugate to rationalize'
            },

            // Solving radical equations
            solve_radical_equation: {
                patterns: [
                    /solve.*√.*=.*/i,
                    /√.*x.*=/,
                    /radical.*equation/i
                ],
                solver: this.solveRadicalEquation.bind(this),
                name: 'Solve Radical Equation',
                category: 'radical_equations',
                description: 'Solves equations with radicals'
            },

            // Simplifying expressions with exponent laws
            apply_exponent_laws: {
                patterns: [
                    /simplify.*\^.*\*/i,
                    /exponent.*law/i,
                    /power.*rule/i
                ],
                solver: this.applyExponentLaws.bind(this),
                name: 'Apply Exponent Laws',
                category: 'exponent_laws',
                description: 'Simplifies using exponent properties'
            },

            // Pythagorean applications
            pythagorean_application: {
                patterns: [
                    /pythagorean/i,
                    /right.*triangle/i,
                    /hypotenuse/i,
                    /distance.*formula/i
                ],
                solver: this.solvePythagoreanProblem.bind(this),
                name: 'Pythagorean Application',
                category: 'pythagorean_applications',
                description: 'Applies Pythagorean theorem with radicals'
            },

            // Finding domain
            find_domain: {
                patterns: [
                    /domain.*√/i,
                    /restriction/i,
                    /valid.*values/i
                ],
                solver: this.findRadicalDomain.bind(this),
                name: 'Find Domain of Radical',
                category: 'domains_and_restrictions',
                description: 'Determines valid input values'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            simplifying_radicals: {
                'Factor radicand': [
                    'Not factoring completely into prime factors',
                    'Missing perfect square/cube factors',
                    'Incorrect factorization'
                ],
                'Extract perfect powers': [
                    'Forgetting to take square root of perfect square',
                    'Not extracting all possible perfect powers',
                    'Confusing which factors to extract'
                ],
                'Apply product property': [
                    'Incorrectly splitting the radical',
                    'Forgetting to simplify after splitting',
                    'Misapplying product rule'
                ]
            },
            rational_exponents: {
                'Convert to radical': [
                    'Confusing numerator and denominator roles',
                    'Forgetting that denominator is the root',
                    'Incorrect order of operations'
                ],
                'Evaluate': [
                    'Computing power before root when root first is easier',
                    'Arithmetic errors with large numbers',
                    'Not simplifying fractional exponent first'
                ],
                'Apply exponent laws': [
                    'Adding instead of multiplying exponents',
                    'Incorrect fraction arithmetic',
                    'Forgetting negative exponent rules'
                ]
            },
            operations_with_radicals: {
                'Adding unlike radicals': [
                    'Trying to add radicals with different radicands',
                    'Forgetting to simplify first',
                    'Adding radicands instead of coefficients'
                ],
                'Multiplying': [
                    'Forgetting to multiply coefficients',
                    'Not simplifying final answer',
                    'Misapplying product property'
                ],
                'Dividing': [
                    'Not rationalizing denominator',
                    'Incorrect simplification',
                    'Division errors'
                ]
            },
            rationalizing_denominators: {
                'Choose correct multiplier': [
                    'Using wrong conjugate',
                    'Not identifying what makes perfect power',
                    'Forgetting to multiply numerator too'
                ],
                'Simplify result': [
                    'Not fully simplifying',
                    'Arithmetic errors in expansion',
                    'Leaving radicals in final denominator'
                ]
            },
            radical_equations: {
                'Isolate radical': [
                    'Not isolating before squaring',
                    'Squaring too early',
                    'Incorrect isolation'
                ],
                'Square both sides': [
                    'Not squaring entire side correctly',
                    'Forgetting to expand binomial square',
                    'Sign errors'
                ],
                'Check solutions': [
                    'Not checking for extraneous solutions',
                    'Accepting negative solutions for even roots',
                    'Arithmetic errors in checking'
                ]
            }
        };

        this.errorPrevention = {
            perfect_powers: {
                reminder: 'Memorize common perfect squares and cubes',
                method: 'Create reference list: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100...'
            },
            prime_factorization: {
                reminder: 'Factor completely to find all perfect powers',
                method: 'Use factor tree and group by index'
            },
            even_roots: {
                reminder: 'Even roots require non-negative radicands',
                method: 'Check domain before and after solving'
            },
            extraneous_solutions: {
                reminder: 'Squaring can introduce invalid solutions',
                method: 'ALWAYS check solutions in original equation'
            },
            rationalize: {
                reminder: 'Multiply numerator and denominator by same expression',
                method: 'Use conjugate for binomials, matching radical for monomials'
            },
            like_radicals: {
                reminder: 'Can only add/subtract radicals with same index and radicand',
                method: 'Simplify all radicals first to identify like terms'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Understanding what radicals and rational exponents represent',
                language: 'intuitive explanations of root and power relationships'
            },
            procedural: {
                focus: 'Step-by-step process for calculations',
                language: 'clear instructions for each operation'
            },
            visual: {
                focus: 'Geometric and graphical representations',
                language: 'spatial relationships and visual models'
            },
            algebraic: {
                focus: 'Formal properties and algebraic manipulation',
                language: 'precise mathematical notation and rules'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple terms like "root" and "power"',
                detail: 'essential steps only',
                examples: 'perfect squares and cubes'
            },
            intermediate: {
                vocabulary: 'standard terms: radicand, index, rational exponent',
                detail: 'main steps with brief explanations',
                examples: 'mix of perfect and imperfect powers'
            },
            ELI5: {
                vocabulary: 'explain like I\'m 5 - simplest possible terms',
                detail: 'every tiny step with real-world analogies',
                examples: 'everyday situations and stories',
                analogies: true,
                visualization: 'simple drawings and models'
            },
            detailed: {
                vocabulary: 'full mathematical terminology',
                detail: 'comprehensive explanations with theory',
                examples: 'complex and abstract cases'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery with strategic questions',
                examples: 'carefully sequenced difficulty progression'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            pendulum_period: {
                scenario: "Calculating pendulum swing period",
                formula: "T = 2π√(L/g)",
                variables: {
                    T: "Period in seconds",
                    L: "Length in meters",
                    g: "Gravity (9.8 m/s²)"
                },
                examples: [
                    "A 1-meter pendulum has period T = 2π√(1/9.8) ≈ 2.01 seconds",
                    "For T = 2 seconds, find length: L = g(T/2π)²"
                ],
                context: "Used in clocks, physics experiments, and seismology"
            },

            geometric_mean: {
                scenario: "Finding geometric mean of two numbers",
                formula: "Geometric mean = √(ab)",
                examples: [
                    "Geometric mean of 4 and 9: √(4·9) = √36 = 6",
                    "Geometric mean of 2 and 8: √(2·8) = √16 = 4"
                ],
                context: "Used in finance, statistics, and growth rate calculations"
            },

            falling_object: {
                scenario: "Time for object to fall from height",
                formula: "t = √(2h/g)",
                variables: {
                    t: "Time in seconds",
                    h: "Height in meters",
                    g: "Gravity (9.8 m/s²)"
                },
                examples: [
                    "From 100m: t = √(200/9.8) ≈ 4.52 seconds",
                    "From 20m: t = √(40/9.8) ≈ 2.02 seconds"
                ],
                context: "Physics problems, safety calculations, amusement parks"
            },

            diagonal_length: {
                scenario: "Finding diagonal of rectangle",
                formula: "d = √(l² + w²)",
                examples: [
                    "Rectangle 3×4: d = √(9+16) = √25 = 5",
                    "Rectangle 5×12: d = √(25+144) = √169 = 13",
                    "Square with side 10: d = √(100+100) = 10√2"
                ],
                context: "Construction, screen sizes, packaging design"
            },

            compound_interest: {
                scenario: "Continuous compound interest",
                formula: "A = Pe^(rt) or using rational exponents",
                examples: [
                    "Find time to double: 2P = P(1+r)^t, solve for t",
                    "Half-life problems use similar exponential decay"
                ],
                context: "Banking, investment, population growth"
            },

            sphere_volume: {
                scenario: "Finding radius from volume",
                formula: "r = ∛(3V/4π)",
                examples: [
                    "Volume 36π: r = ∛(108π/4π) = ∛27 = 3",
                    "Given volume, find radius using cube root"
                ],
                context: "Engineering, manufacturing, planet sizes"
            },

            speed_from_energy: {
                scenario: "Speed from kinetic energy",
                formula: "v = √(2E/m)",
                variables: {
                    v: "Velocity",
                    E: "Kinetic energy",
                    m: "Mass"
                },
                examples: [
                    "Object with KE=100J and mass 2kg: v = √(200/2) = 10 m/s"
                ],
                context: "Physics, sports science, vehicle safety"
            },

            escape_velocity: {
                scenario: "Escape velocity from planet",
                formula: "v = √(2GM/r)",
                examples: [
                    "Earth escape velocity ≈ 11.2 km/s",
                    "Involves square root of gravitational parameters"
                ],
                context: "Space exploration, astrophysics"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            simplifying_radicals: {
                skills: [
                    'Prime factorization',
                    'Perfect squares recognition',
                    'Multiplication and division',
                    'Understanding of square roots'
                ],
                priorKnowledge: [
                    'What a square root represents',
                    'Perfect squares: 1, 4, 9, 16, 25...',
                    'Product and quotient properties'
                ],
                checkQuestions: [
                    "What is √16?",
                    "What is 6²?",
                    "Factor 72 into primes",
                    "Is 50 a perfect square?"
                ]
            },

            rational_exponents: {
                skills: [
                    'Exponent rules',
                    'Fraction operations',
                    'Understanding of roots',
                    'Order of operations'
                ],
                priorKnowledge: [
                    'x^(1/2) = √x',
                    'Exponent laws',
                    'Fraction arithmetic'
                ],
                checkQuestions: [
                    "What is 2³?",
                    "What is √8?",
                    "Simplify 2/3 + 1/4",
                    "What is x² · x³?"
                ]
            },

            operations_with_radicals: {
                skills: [
                    'Simplifying radicals',
                    'Identifying like terms',
                    'Distributive property',
                    'FOIL method'
                ],
                priorKnowledge: [
                    'Like radicals have same index and radicand',
                    'Product and quotient properties',
                    'Combining like terms'
                ],
                checkQuestions: [
                    "Simplify √8",
                    "Combine 3x + 5x",
                    "Expand (x+2)(x+3)",
                    "What are like radicals?"
                ]
            },

            rationalizing_denominators: {
                skills: [
                    'Simplifying radicals',
                    'Multiplying conjugates',
                    'Difference of squares pattern',
                    'Fraction multiplication'
                ],
                priorKnowledge: [
                    'Conjugates: (a+b)(a-b) = a²-b²',
                    'Multiplying fractions',
                    'Simplifying fractions'
                ],
                checkQuestions: [
                    "What is the conjugate of 3+√2?",
                    "Expand (x+5)(x-5)",
                    "Multiply 2/3 · 4/5",
                    "Simplify 6/8"
                ]
            },

            radical_equations: {
                skills: [
                    'Isolating terms',
                    'Squaring binomials',
                    'Solving quadratic equations',
                    'Checking solutions'
                ],
                priorKnowledge: [
                    'Squaring both sides',
                    '(a+b)² = a² + 2ab + b²',
                    'Extraneous solutions concept'
                ],
                checkQuestions: [
                    "Expand (x+3)²",
                    "Solve x² = 25",
                    "What does 'extraneous' mean?",
                    "Isolate x in: 2x + 5 = 13"
                ]
            },

            exponent_laws: {
                skills: [
                    'Basic exponent rules',
                    'Negative exponents',
                    'Zero exponent',
                    'Fraction arithmetic'
                ],
                priorKnowledge: [
                    'x^a · x^b = x^(a+b)',
                    'x^(-a) = 1/x^a',
                    'x^0 = 1'
                ],
                checkQuestions: [
                    "Simplify x³ · x²",
                    "What is 5^0?",
                    "Simplify 2^(-3)",
                    "What is (x²)³?"
                ]
            },

            pythagorean_applications: {
                skills: [
                    'Pythagorean theorem',
                    'Simplifying radicals',
                    'Squaring numbers',
                    'Basic geometry'
                ],
                priorKnowledge: [
                    'a² + b² = c²',
                    'Right triangle components',
                    'Distance formula'
                ],
                checkQuestions: [
                    "In a right triangle, what is the longest side called?",
                    "If a=3 and b=4, find c",
                    "What is 5²?",
                    "Simplify √(3²+4²)"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            area_model: {
                description: "Square root as side length of square",
                analogy: "If a square has area A, its side length is √A",
                visualization: "Draw square with labeled area and sides",
                suitableFor: ['simplifying_radicals', 'pythagorean_applications'],
                explanation: "Visual connection between squares and square roots"
            },

            cube_model: {
                description: "Cube root as edge length of cube",
                analogy: "If a cube has volume V, its edge length is ∛V",
                visualization: "Draw cube with labeled volume and edges",
                suitableFor: ['simplifying_radicals'],
                explanation: "Visual connection between cubes and cube roots"
            },

            number_line: {
                description: "Plotting radical values",
                analogy: "Radicals represent specific points between integers",
                visualization: "Mark approximate positions of radicals on line",
                suitableFor: ['all_topics'],
                explanation: "Helps estimate and compare radical values"
            },

            factor_tree: {
                description: "Prime factorization visualization",
                analogy: "Breaking number into building blocks",
                visualization: "Tree diagram showing factor pairs",
                suitableFor: ['simplifying_radicals'],
                explanation: "Shows how to find perfect power factors"
            },

            exponent_fraction_visual: {
                description: "Rational exponent as two operations",
                analogy: "Denominator is root, numerator is power",
                visualization: "x^(m/n) → [root n of x]^m",
                suitableFor: ['rational_exponents'],
                explanation: "Clarifies the dual role of numerator and denominator"
            },

            conjugate_pattern: {
                description: "Difference of squares pattern",
                analogy: "Two expressions that multiply to eliminate radicals",
                visualization: "(a+√b)(a-√b) = a² - b",
                suitableFor: ['rationalizing_denominators'],
                explanation: "Visual pattern for rationalizing"
            },

            pythagorean_right_triangle: {
                description: "Visual proof of Pythagorean theorem",
                analogy: "Squares on sides relate to areas",
                visualization: "Right triangle with squares on each side",
                suitableFor: ['pythagorean_applications'],
                explanation: "Geometric foundation of the theorem"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "Simplify √16",
                    solution: "4",
                    steps: ["Recognize 16 = 4²", "√16 = √(4²) = 4"],
                    difficulty: "easy"
                },
                {
                    problem: "Simplify √9",
                    solution: "3",
                    steps: ["Recognize 9 = 3²", "√9 = 3"],
                    difficulty: "easy"
                },
                {
                    problem: "Evaluate 8^(1/3)",
                    solution: "2",
                    steps: ["1/3 exponent means cube root", "∛8 = 2", "Check: 2³ = 8"],
                    difficulty: "easy"
                },
                {
                    problem: "Simplify 2√3 + 5√3",
                    solution: "7√3",
                    steps: ["Like radicals: same radicand", "Combine coefficients: 2+5=7", "Result: 7√3"],
                    difficulty: "easy"
                }
            ],

            intermediate: [
                {
                    problem: "Simplify √72",
                    solution: "6√2",
                    steps: [
                        "Factor: 72 = 36 × 2",
                        "36 is perfect square",
                        "√72 = √36 × √2",
                        "= 6√2"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "Evaluate 27^(2/3)",
                    solution: "9",
                    steps: [
                        "Denominator 3 means cube root",
                        "∛27 = 3",
                        "Numerator 2 means square",
                        "3² = 9"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "Rationalize 1/√5",
                    solution: "√5/5",
                    steps: [
                        "Multiply by √5/√5",
                        "Numerator: 1·√5 = √5",
                        "Denominator: √5·√5 = 5",
                        "Result: √5/5"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "Multiply (2√3)(5√6)",
                    solution: "30√2",
                    steps: [
                        "Multiply coefficients: 2·5 = 10",
                        "Multiply radicands: √3·√6 = √18",
                        "Simplify √18 = √(9·2) = 3√2",
                        "10·3√2 = 30√2"
                    ],
                    difficulty: "medium"
                }
            ],

            advanced: [
                {
                    problem: "Simplify √(50x³y⁴)",
                    solution: "5xy²√(2x)",
                    steps: [
                        "Factor: 50x³y⁴ = 25·2·x²·x·y⁴",
                        "Perfect squares: 25, x², y⁴",
                        "√(25x²y⁴·2x) = 5xy²√(2x)"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "Solve √(x+5) = 3",
                    solution: "x = 4",
                    steps: [
                        "Square both sides: x+5 = 9",
                        "Solve: x = 4",
                        "Check: √(4+5) = √9 = 3 ✓"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "Rationalize 3/(2-√5)",
                    solution: "(6+3√5)/(-1) = -6-3√5",
                    steps: [
                        "Conjugate: 2+√5",
                        "Multiply: [3(2+√5)]/[(2-√5)(2+√5)]",
                        "Numerator: 6+3√5",
                        "Denominator: 4-5 = -1",
                        "Result: -6-3√5"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "Simplify x^(2/3) · x^(4/3)",
                    solution: "x²",
                    steps: [
                        "Add exponents: 2/3 + 4/3",
                        "= 6/3",
                        "= 2",
                        "Result: x²"
                    ],
                    difficulty: "hard"
                }
            ],

            byMethod: {
                simplifying_square_roots: [
                    { problem: "√25", solution: "5" },
                    { problem: "√48", solution: "4√3" },
                    { problem: "√200", solution: "10√2" },
                    { problem: "√18", solution: "3√2" }
                ],
                rational_exponents: [
                    { problem: "16^(1/2)", solution: "4" },
                    { problem: "8^(2/3)", solution: "4" },
                    { problem: "32^(3/5)", solution: "8" },
                    { problem: "64^(1/3)", solution: "4" }
                ],
                adding_radicals: [
                    { problem: "√2 + 3√2", solution: "4√2" },
                    { problem: "5√7 - 2√7", solution: "3√7" },
                    { problem: "√12 + √27", solution: "5√3" }
                ],
                rationalizing: [
                    { problem: "1/√2", solution: "√2/2" },
                    { problem: "5/√10", solution: "√10/2" },
                    { problem: "2/(3-√5)", solution: "(3+√5)/2" }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            adding_radicals: {
                misconception: "√a + √b = √(a+b)",
                reality: "Can only add like radicals by adding coefficients",
                correctiveExample: "√4 + √9 = 2 + 3 = 5, NOT √13 ≈ 3.6",
                commonIn: ['operations_with_radicals']
            },

            multiplying_coefficients: {
                misconception: "Forgetting to multiply coefficients when multiplying radicals",
                reality: "(a√x)(b√y) = ab√(xy), must multiply coefficients",
                correctiveExample: "(2√3)(5√2) = 10√6, not 2·5·√(3·2)",
                commonIn: ['operations_with_radicals']
            },

            rational_exponent_confusion: {
                misconception: "Thinking x^(2/3) means x²/3 or confusing numerator/denominator roles",
                reality: "Denominator is root index, numerator is power",
                correctiveExample: "8^(2/3) = (∛8)² = 2² = 4, NOT 8²/3",
                commonIn: ['rational_exponents']
            },

            negative_under_even_root: {
                misconception: "√(-4) = -2 or thinking even roots of negatives are defined in reals",
                reality: "Even roots require non-negative radicands in real numbers",
                correctiveExample: "√(-4) is undefined in reals; ∛(-8) = -2 is valid (odd root)",
                commonIn: ['domains_and_restrictions']
            },

            extraneous_solutions: {
                misconception: "Not checking solutions after squaring",
                reality: "Squaring can introduce solutions that don't satisfy original equation",
                correctiveExample: "√x = -3 has no solution, but x=9 solves x=(-3)²",
                commonIn: ['radical_equations']
            },

            rationalizing_errors: {
                misconception: "Only multiplying numerator when rationalizing",
                reality: "Must multiply both numerator and denominator",
                correctiveExample: "1/√2 = (1·√2)/(√2·√2) = √2/2, not just √2",
                commonIn: ['rationalizing_denominators']
            },

            perfect_square_identification: {
                misconception: "Not recognizing all perfect square factors",
                reality: "Complete factorization reveals all perfect squares",
                correctiveExample: "√72 = √(36·2) = 6√2, not √(4·18) = 2√18",
                commonIn: ['simplifying_radicals']
            },

            exponent_law_misapplication: {
                misconception: "x^a · x^b = x^(ab) instead of x^(a+b)",
                reality: "Product rule ADDS exponents, power rule multiplies",
                correctiveExample: "x^(1/2) · x^(1/3) = x^(5/6), not x^(1/6)",
                commonIn: ['exponent_laws']
            },

            absolute_value_forgetting: {
                misconception: "√(x²) = x always",
                reality: "√(x²) = |x| because square root gives non-negative result",
                correctiveExample: "√((-3)²) = √9 = 3 = |-3|, not -3",
                commonIn: ['simplifying_radicals']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            radical_as_reverse: {
                analogy: "Radicals as reverse or undo operation",
                explanation: "Just like subtraction undoes addition, radicals undo exponents. If you square 5 to get 25, taking the square root of 25 undoes that and gets you back to 5.",
                suitableFor: ['radical_basics'],
                ELI5: "If squaring is like putting something in a box and locking it, the square root is like unlocking the box to get it back out!"
            },

            perfect_squares_as_packages: {
                analogy: "Perfect squares as complete packages",
                explanation: "A perfect square is like a package of items arranged in a perfect square grid. If you have 16 items, you can arrange them in a 4×4 square - that's why √16 = 4.",
                suitableFor: ['simplifying_radicals'],
                ELI5: "Imagine arranging marbles in a square. If you have 9 marbles, you can make a perfect 3×3 square. That's why √9 = 3!"
            },

            rationalizing_as_clearing: {
                analogy: "Rationalizing as cleaning up",
                explanation: "Rationalizing is like cleaning up your room - you don't want messy radicals in the denominator, so you 'clean them up' by moving them to the numerator.",
                suitableFor: ['rationalizing_denominators'],
                ELI5: "It's like if you had toys scattered on the floor (denominator). You pick them up and put them on the shelf (numerator) to clean the floor!"
            },

            conjugate_as_partner: {
                analogy: "Conjugates as dance partners",
                explanation: "Conjugates are like perfect dance partners that work together. When (a+√b) and (a-√b) multiply, they create something beautiful with no radicals - a²-b.",
                suitableFor: ['rationalizing_denominators'],
                ELI5: "Conjugates are like opposite twins. When they work together, their differences cancel out in a special way!"
            },

            rational_exponent_as_instruction: {
                analogy: "Rational exponent as a two-part instruction",
                explanation: "x^(2/3) is like getting two instructions: 'First take the cube root (bottom number), then square it (top number)' - or do them in reverse order.",
                suitableFor: ['rational_exponents'],
                ELI5: "It's like a recipe with two steps: if the fraction is 2/3, the bottom (3) says 'take cube root,' and the top (2) says 'square it.' You can do either step first!"
            },

            adding_radicals_as_fruit: {
                analogy: "Adding radicals like counting fruit",
                explanation: "You can't add 3 apples + 5 oranges to get '8 apples-and-oranges.' Similarly, √2 + √3 can't combine. But 3√2 + 5√2 = 8√2, just like 3 apples + 5 apples = 8 apples.",
                suitableFor: ['operations_with_radicals'],
                ELI5: "You can only add things that are the same! Three √2's plus five √2's equals eight √2's, just like 3 dogs plus 5 dogs equals 8 dogs!"
            },

            simplifying_as_unpacking: {
                analogy: "Simplifying radicals as unpacking nested boxes",
                explanation: "When you simplify √72, you're unpacking to find what can come out. √72 = √(36×2) - the 36 'unpacks' to 6, so you get 6√2.",
                suitableFor: ['simplifying_radicals'],
                ELI5: "Imagine √72 is a big box. Inside are smaller boxes. Some boxes (like 36) can be fully unpacked to become a 6 standing outside. The 2 stays in its box as √2."
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            simplifying_radicals: {
                level1: "Can you break the number into smaller factors?",
                level2: "Look for perfect square factors (4, 9, 16, 25, 36...)",
                level3: "Factor completely and group perfect squares",
                level4: "Factor {radicand} = {perfect_square} × {leftover}, then √{perfect_square} = {root}"
            },

            rational_exponents: {
                level1: "What do the numerator and denominator of the exponent tell you?",
                level2: "The denominator is the root index, the numerator is the power",
                level3: "Convert to radical form first: x^(m/n) = (ⁿ√x)^m",
                level4: "Compute the {index} root first: {base}^(1/{index}) = {root}, then raise to power {power}"
            },

            adding_radicals: {
                level1: "Are these radicals 'like terms'?",
                level2: "Check if they have the same radicand and index",
                level3: "Simplify each radical first to see if they become like radicals",
                level4: "After simplifying, {radical1} and {radical2} {are/are_not} like radicals"
            },

            rationalizing: {
                level1: "What's in the denominator that you want to eliminate?",
                level2: "What can you multiply by to create a perfect square/cube?",
                level3: "For monomial: multiply by the radical itself; for binomial: use conjugate",
                level4: "Multiply by {multiplier} / {multiplier} to rationalize"
            },

            radical_equations: {
                level1: "Is the radical isolated on one side?",
                level2: "What power do you need to raise both sides to?",
                level3: "Isolate radical, then raise to power equal to index",
                level4: "After squaring, you get {equation}. Don't forget to check for extraneous solutions!"
            },

            multiplying_radicals: {
                level1: "Can you multiply the parts separately?",
                level2: "Multiply coefficients together and radicands together",
                level3: "Use the product property: √a · √b = √(ab)",
                level4: "Multiply: {coeff1}×{coeff2} = {product_coeff}, and √{rad1}×√{rad2} = √{product_rad}"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Simplify: √36",
                    answer: 6,
                    assesses: "basic_square_roots",
                    difficulty: "basic"
                },
                {
                    question: "Simplify: √50",
                    answer: "5√2",
                    assesses: "simplifying_radicals",
                    difficulty: "basic"
                },
                {
                    question: "Evaluate: 16^(1/2)",
                    answer: 4,
                    assesses: "rational_exponents_basic",
                    difficulty: "intermediate"
                },
                {
                    question: "Evaluate: 27^(2/3)",
                    answer: 9,
                    assesses: "rational_exponents_advanced",
                    difficulty: "intermediate"
                },
                {
                    question: "Add: 3√5 + 7√5",
                    answer: "10√5",
                    assesses: "adding_like_radicals",
                    difficulty: "basic"
                },
                {
                    question: "Rationalize: 1/√3",
                    answer: "√3/3",
                    assesses: "rationalizing_monomial",
                    difficulty: "intermediate"
                }
            ],

            formative: [
                {
                    question: "Which is a perfect square factor of 48?",
                    options: ["4", "8", "16", "24"],
                    correct: "16",
                    explanation: "48 = 16 × 3, and 16 is a perfect square (4²)"
                },
                {
                    question: "What does 8^(1/3) equal?",
                    options: ["2", "3", "4", "8/3"],
                    correct: "2",
                    explanation: "The exponent 1/3 means cube root: ∛8 = 2"
                },
                {
                    question: "Can you add √2 + √3?",
                    options: ["Yes, equals √5", "Yes, equals √6", "No, unlike radicals", "Yes, equals 5"],
                    correct: "No, unlike radicals",
                    explanation: "Different radicands mean you cannot combine them"
                },
                {
                    question: "What is the conjugate of 3 - √2?",
                    options: ["3 + √2", "-3 + √2", "-3 - √2", "√2 - 3"],
                    correct: "3 + √2",
                    explanation: "Conjugate changes the sign between terms"
                }
            ],

            summative: [
                {
                    question: "Simplify completely: √(98x⁵y⁶)",
                    answer: "7x²y³√(2x)",
                    showsWork: true,
                    rubric: {
                        factor_radicand: 2,
                        identify_perfect_squares: 2,
                        simplify_correctly: 2,
                        final_form: 1
                    }
                },
                {
                    question: "Solve: √(2x + 5) = 7",
                    answer: "x = 22",
                    showsWork: true,
                    rubric: {
                        isolate_radical: 1,
                        square_both_sides: 1,
                        solve_equation: 1,
                        check_solution: 2
                    }
                },
                {
                    question: "Rationalize and simplify: 6/(2-√3)",
                    answer: "12 + 6√3",
                    showsWork: true,
                    rubric: {
                        identify_conjugate: 1,
                        multiply_correctly: 2,
                        simplify_numerator: 1,
                        simplify_denominator: 1
                    }
                }
            ],

            byDifficulty: {
                easy: [
                    "√4",
                    "√25",
                    "∛8",
                    "16^(1/2)",
                    "2√3 + 5√3",
                    "√2 · √8"
                ],
                medium: [
                    "√48",
                    "√75",
                    "8^(2/3)",
                    "Rationalize: 1/√5",
                    "√12 + √27",
                    "Multiply: (2√3)(4√6)"
                ],
                hard: [
                    "√(72x⁴y⁶)",
                    "Solve: √(x+3) = x-3",
                    "32^(3/5)",
                    "Rationalize: 5/(3-√7)",
                    "Simplify: (x^(2/3))^(3/4)",
                    "√(50) - √(18) + √(8)"
                ]
            },

            byObjective: {
                canSimplifySquareRoots: [
                    "√16", "√49", "√32", "√75", "√200"
                ],
                canEvaluateRationalExponents: [
                    "4^(1/2)", "27^(1/3)", "16^(3/2)", "8^(2/3)", "32^(2/5)"
                ],
                canAddSubtractRadicals: [
                    "√3 + √3",
                    "5√2 - 2√2",
                    "√8 + √18",
                    "√50 - √32"
                ],
                canMultiplyRadicals: [
                    "√2 · √3",
                    "(3√5)(2√7)",
                    "√6 · √24",
                    "(2√3)(5√3)"
                ],
                canRationalizeDenominators: [
                    "1/√2",
                    "5/√10",
                    "3/(2+√3)",
                    "4/(√5-1)"
                ],
                canSolveRadicalEquations: [
                    "√x = 5",
                    "√(x+2) = 4",
                    "√(2x-1) = x-2",
                    "√x + 3 = 7"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "simplifying_radical": "Factor radicand, identify perfect powers, extract and simplify",
                "rational_exponent": "Convert to radical form OR evaluate root then power",
                "adding_radicals": "Simplify each first, then combine like radicals only",
                "multiplying_radicals": "Multiply coefficients and radicands separately, then simplify",
                "rationalizing_monomial": "Multiply by radical/radical",
                "rationalizing_binomial": "Multiply by conjugate/conjugate",
                "solving_radical_equation": "Isolate radical, raise to power, solve, check for extraneous"
            },

            whenToUseWhat: {
                prime_factorization: "When simplifying radicals with large radicands",
                perfect_squares_list: "For quick recognition with smaller numbers",
                rational_exponent_form: "When using exponent laws or calculator",
                radical_form: "For mental math with small perfect powers",
                conjugate: "When denominator has binomial with radical",
                matching_index: "When denominator has monomial radical"
            },

            methodSelection: {
                factorsToConsider: [
                    "Size of radicand (small vs. large numbers)",
                    "Type of radical (square, cube, higher)",
                    "Presence of variables",
                    "Need for exact vs. approximate answer",
                    "Context (algebra vs. geometry vs. applications)"
                ],
                generalApproach: [
                    "1. Identify type of problem",
                    "2. Simplify individual radicals first",
                    "3. Apply appropriate operation or technique",
                    "4. Simplify result completely",
                    "5. Check answer makes sense"
                ]
            },

            optimizationTips: {
                "Memorize perfect squares to 20": "Speeds up simplification dramatically",
                "Memorize perfect cubes to 10": "Helpful for cube roots",
                "Learn to recognize patterns": "Like 2√3 in √12",
                "Use prime factorization for large numbers": "More systematic than guessing",
                "Check domain restrictions early": "Avoid wasted work on invalid problems"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Perfect Squares Sprint",
                    timeLimit: 60,
                    problems: [
                        "√1", "√4", "√9", "√16", "√25",
                        "√36", "√49", "√64", "√81", "√100"
                    ]
                },
                {
                    name: "Simplification Challenge",
                    timeLimit: 120,
                    problems: [
                        "√8", "√18", "√32", "√50", "√72",
                        "√98", "√128", "√200"
                    ]
                },
                {
                    name: "Rational Exponents Race",
                    timeLimit: 90,
                    problems: [
                        "4^(1/2)", "27^(1/3)", "16^(1/4)",
                        "8^(2/3)", "32^(2/5)", "64^(1/2)"
                    ]
                }
            ],

            puzzles: [
                {
                    name: "Mystery Radicand",
                    problem: "If √n is a whole number and 20 < n < 30, what is n?",
                    solution: "n = 25, since √25 = 5"
                },
                {
                    name: "Pattern Recognition",
                    problem: "√2, √8, √18, √32, ... What's the pattern and what comes next?",
                    solution: "Pattern: √(2·1²), √(2·2²), √(2·3²), √(2·4²)... Next: √(2·5²) = √50 = 5√2"
                },
                {
                    name: "Radical Builder",
                    challenge: "Create a radical expression that simplifies to 6√5",
                    sampleSolution: "√180, or 2√45, or 3√20, etc."
                },
                {
                    name: "Exponent Equation",
                    problem: "Find x: x^(2/3) = 16",
                    solution: "x = 64 (since 64^(2/3) = (∛64)² = 4² = 16)"
                }
            ],

            applications: [
                {
                    scenario: "Pendulum Length",
                    problem: "A pendulum has period 2 seconds. Using T = 2π√(L/9.8), find the length L in meters.",
                    setup: "2 = 2π√(L/9.8)",
                    solution: "L ≈ 0.99 meters"
                },
                {
                    scenario: "Geometric Mean",
                    problem: "The geometric mean of two numbers is 12. One number is 8. Find the other.",
                    equation: "√(8x) = 12",
                    solution: "x = 18"
                },
                {
                    scenario: "Screen Diagonal",
                    problem: "A TV screen is 40 inches wide and 30 inches tall. Find the diagonal.",
                    equation: "d = √(40² + 30²)",
                    solution: "d = 50 inches"
                },
                {
                    scenario: "Falling Time",
                    problem: "How long does it take an object to fall 80 meters? Use t = √(2h/g) with g=9.8.",
                    equation: "t = √(160/9.8)",
                    solution: "t ≈ 4.04 seconds"
                }
            ],

            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Simplify √48",
                        "= √(4 × 12)",
                        "= 2√12",  // ERROR: should continue simplifying
                        "= 2√12"   // Should be 4√3
                    ],
                    correctAnswer: "4√3",
                    errorType: "Didn't simplify completely; √12 = √(4×3) = 2√3"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Evaluate 27^(2/3)",
                        "= 27^2 / 3",  // ERROR: misinterpreted rational exponent
                        "= 729/3",
                        "= 243"
                    ],
                    correctAnswer: "9",
                    errorType: "Treated rational exponent as division; should be (∛27)² = 3² = 9"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "√2 + √3",
                        "= √(2+3)",  // ERROR: can't add radicands
                        "= √5"
                    ],
                    correctAnswer: "√2 + √3 (cannot simplify)",
                    errorType: "Incorrectly combined unlike radicals"
                },
                {
                    name: "Find the Error #4",
                    incorrectWork: [
                        "Rationalize 1/√2",
                        "= 1·√2 / √2",  // ERROR: only multiplied numerator
                        "= √2/√2",
                        "Still has radical in denominator!"
                    ],
                    correctAnswer: "√2/2",
                    errorType: "Forgot to multiply denominator: should be (1·√2)/(√2·√2) = √2/2"
                }
            ]
        };
    }

    // ==================== SOLVER METHODS ====================

    solveRadicalProblem(config) {
        const { expression, scenario, parameters, problemType, context } = config;

        try {
            this.currentProblem = this.parseRadicalProblem(expression, scenario, parameters, problemType, context);
            this.currentSolution = this.solveRadicalProblem_Internal(this.currentProblem);
            this.solutionSteps = this.generateRadicalSteps(this.currentProblem, this.currentSolution);
            this.generateRadicalGraphData();
            this.generateRadicalWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                solutionValue: this.currentSolution?.result,
                steps: this.solutionSteps
            };

        } catch (error) {
            throw new Error(`Failed to solve radical problem: ${error.message}`);
        }
    }

    parseRadicalProblem(expression, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = expression ? this.cleanMathExpression(expression) : '';

        if (problemType && this.radicalTypes[problemType]) {
            return {
                originalInput: expression || `${problemType} problem`,
                cleanInput: cleanInput,
                type: problemType,
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect problem type
        for (const [type, config] of Object.entries(this.radicalTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(scenario)) {
                    const match = cleanInput.match(pattern);
                    const extractedParams = this.extractRadicalParameters(match, type);

                    return {
                        originalInput: expression || scenario,
                        cleanInput: cleanInput,
                        type: type,
                        scenario: scenario,
                        parameters: { ...extractedParams, ...parameters },
                        context: { ...context },
                        match: match,
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        throw new Error(`Unable to recognize radical problem type from: ${expression || scenario}`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/√/g, 'sqrt')
            .replace(/∛/g, 'cbrt')
            .replace(/∜/g, 'fourthrt')
            .trim();
    }

    extractRadicalParameters(match, type) {
        const params = {};
        if (!match) return params;

        switch(type) {
            case 'simplify_square_root':
                params.radicand = parseInt(match[1]);
                params.index = 2;
                break;

            case 'simplify_cube_root':
                params.radicand = parseInt(match[1]);
                params.index = 3;
                break;

            case 'simplify_nth_root':
                params.index = parseInt(match[1]);
                params.radicand = parseInt(match[2]);
                break;

            case 'rational_exponent_to_radical':
            case 'evaluate_rational_exponent':
                params.base = parseFloat(match[1]);
                params.numerator = parseInt(match[2]);
                params.denominator = parseInt(match[3]);
                break;
        }

        return params;
    }

    solveRadicalProblem_Internal(problem) {
        const solver = this.radicalTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for problem type: ${problem.type}`);
        }
        return solver(problem);
    }

    // ==================== INDIVIDUAL SOLVERS ====================

    simplifySquareRoot(problem) {
        const { radicand } = problem.parameters;
        
        // Find prime factorization
        const factors = this.primeFactorization(radicand);
        
        // Group factors in pairs (for square root)
        let coefficient = 1;
        let remainingFactors = {};
        
        for (const [prime, count] of Object.entries(factors)) {
            const pairs = Math.floor(count / 2);
            const remainder = count % 2;
            
            coefficient *= Math.pow(parseInt(prime), pairs);
            if (remainder > 0) {
                remainingFactors[prime] = remainder;
            }
        }
        
        // Calculate remaining radicand
        let newRadicand = 1;
        for (const [prime, count] of Object.entries(remainingFactors)) {
            newRadicand *= Math.pow(parseInt(prime), count);
        }
        
        const simplified = coefficient === 1 && newRadicand === 1 ? 
            Math.sqrt(radicand) : 
            { coefficient, radicand: newRadicand };
        
        return {
            original: `√${radicand}`,
            result: newRadicand === 1 ? coefficient : `${coefficient}√${newRadicand}`,
            coefficient: coefficient,
            newRadicand: newRadicand,
            primeFactors: factors,
            type: 'Simplified Square Root',
            category: 'simplifying_radicals'
        };
    }

    simplifyCubeRoot(problem) {
        const { radicand } = problem.parameters;
        const factors = this.primeFactorization(radicand);
        
        let coefficient = 1;
        let remainingFactors = {};
        
        // Group factors in triples (for cube root)
        for (const [prime, count] of Object.entries(factors)) {
            const triples = Math.floor(count / 3);
            const remainder = count % 3;
            
            coefficient *= Math.pow(parseInt(prime), triples);
            if (remainder > 0) {
                remainingFactors[prime] = remainder;
            }
        }
        
        let newRadicand = 1;
        for (const [prime, count] of Object.entries(remainingFactors)) {
            newRadicand *= Math.pow(parseInt(prime), count);
        }
        
        return {
            original: `∛${radicand}`,
            result: newRadicand === 1 ? coefficient : `${coefficient}∛${newRadicand}`,
            coefficient: coefficient,
            newRadicand: newRadicand,
            primeFactors: factors,
            type: 'Simplified Cube Root',
            category: 'simplifying_radicals'
        };
    }

    simplifyNthRoot(problem) {
        const { radicand, index } = problem.parameters;
        const factors = this.primeFactorization(radicand);
        
        let coefficient = 1;
        let remainingFactors = {};
        
        for (const [prime, count] of Object.entries(factors)) {
            const groups = Math.floor(count / index);
            const remainder = count % index;
            
            coefficient *= Math.pow(parseInt(prime), groups);
            if (remainder > 0) {
                remainingFactors[prime] = remainder;
            }
        }
        
        let newRadicand = 1;
        for (const [prime, count] of Object.entries(remainingFactors)) {
            newRadicand *= Math.pow(parseInt(prime), count);
        }
        
        return {
            original: `${index}√${radicand}`,
            result: newRadicand === 1 ? coefficient : `${coefficient} ${index}√${newRadicand}`,
            coefficient: coefficient,
            newRadicand: newRadicand,
            index: index,
            type: `Simplified ${index}th Root`,
            category: 'simplifying_radicals'
        };
    }

    convertRationalExponentToRadical(problem) {
        const { base, numerator, denominator } = problem.parameters;
        
        const radicalForm = denominator === 2 ?
            `√(${base}^${numerator})` :
            `${denominator}√(${base}^${numerator})`;
        
        const alternateForm = denominator === 2 ?
            `(√${base})^${numerator}` :
            `(${denominator}√${base})^${numerator}`;
        
        return {
            original: `${base}^(${numerator}/${denominator})`,
            radicalForm: radicalForm,
            alternateForm: alternateForm,
            explanation: `Denominator ${denominator} becomes root index, numerator ${numerator} becomes power`,
            type: 'Rational Exponent to Radical Conversion',
            category: 'rational_exponents'
        };
    }

    convertRadicalToRationalExponent(problem) {
        // This would convert radical to exponent form
        return {
            type: 'Radical to Rational Exponent Conversion',
            category: 'rational_exponents'
        };
    }

    evaluateRationalExponent(problem) {
        const { base, numerator, denominator } = problem.parameters;
        
        // Method 1: Root first, then power
        const rootFirst = Math.pow(base, 1/denominator);
        const result1 = Math.pow(rootFirst, numerator);
        
        // Method 2: Power first, then root
        const powerFirst = Math.pow(base, numerator);
        const result2 = Math.pow(powerFirst, 1/denominator);
        
        return {
            original: `${base}^(${numerator}/${denominator})`,
            result: result1,
            method1: {
                description: 'Root first, then power',
                step1: `${denominator}√${base} = ${rootFirst}`,
                step2: `${rootFirst}^${numerator} = ${result1}`
            },
            method2: {
                description: 'Power first, then root',
                step1: `${base}^${numerator} = ${powerFirst}`,
                step2: `${denominator}√${powerFirst} = ${result2}`
            },
            type: 'Rational Exponent Evaluation',
            category: 'rational_exponents'
        };
    }

    addRadicals(problem) {
        return {
            type: 'Adding Radical Expressions',
            approach: 'Simplify each radical first, then combine like radicals',
            category: 'operations_with_radicals'
        };
    }

    subtractRadicals(problem) {
        return {
            type: 'Subtracting Radical Expressions',
            approach: 'Simplify each radical first, then combine like radicals',
            category: 'operations_with_radicals'
        };
    }

    multiplyRadicals(problem) {
        return {
            type: 'Multiplying Radical Expressions',
            approach: 'Multiply coefficients and radicands separately, then simplify',
            category: 'operations_with_radicals'
        };
    }

    divideRadicals(problem) {
        return {
            type: 'Dividing Radical Expressions',
            approach: 'Divide coefficients and radicands separately, rationalize if needed',
            category: 'operations_with_radicals'
        };
    }

    rationalizeMonomial(problem) {
        return {
            type: 'Rationalize Monomial Denominator',
            approach: 'Multiply by radical/radical to eliminate radical from denominator',
            category: 'rationalizing_denominators'
        };
    }

    rationalizeBinomial(problem) {
        return {
            type: 'Rationalize Binomial Denominator',
            approach: 'Multiply by conjugate to use difference of squares pattern',
            category: 'rationalizing_denominators'
        };
    }

    solveRadicalEquation(problem) {
        return {
            type: 'Solve Radical Equation',
            approach: 'Isolate radical, raise both sides to appropriate power, solve, check for extraneous solutions',
            category: 'radical_equations',
            warning: 'Always check solutions - squaring can introduce extraneous solutions'
        };
    }

    applyExponentLaws(problem) {
        return {
            type: 'Apply Exponent Laws',
            approach: 'Use product, quotient, and power rules with rational exponents',
            category: 'exponent_laws'
        };
    }

    solvePythagoreanProblem(problem) {
        return {
            type: 'Pythagorean Application',
            formula: 'a² + b² = c²',
            approach: 'Identify known sides, solve for unknown using radicals',
            category: 'pythagorean_applications'
        };
    }

    findRadicalDomain(problem) {
        return {
            type: 'Find Domain of Radical Expression',
            approach: 'For even roots, radicand must be ≥ 0; odd roots allow all real numbers',
            category: 'domains_and_restrictions'
        };
    }

    // ==================== HELPER METHODS ====================

    primeFactorization(n) {
        const factors = {};
        let num = Math.abs(n);
        
        // Check for factor of 2
        while (num % 2 === 0) {
            factors[2] = (factors[2] || 0) + 1;
            num = num / 2;
        }
        
        // Check odd factors
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            while (num % i === 0) {
                factors[i] = (factors[i] || 0) + 1;
                num = num / i;
            }
        }
        
        // If num is prime and greater than 2
        if (num > 2) {
            factors[num] = (factors[num] || 0) + 1;
        }
        
        return factors;
    }

    gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return Math.abs(a);
    }

    // ==================== STEP GENERATION ====================

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
            case 'simplifying_radicals':
                return this.generateSimplificationSteps(problem, solution);
            case 'rational_exponents':
                return this.generateRationalExponentSteps(problem, solution);
            case 'operations_with_radicals':
                return this.generateOperationSteps(problem, solution);
            case 'rationalizing_denominators':
                return this.generateRationalizingSteps(problem, solution);
            case 'radical_equations':
                return this.generateEquationSteps(problem, solution);
            default:
                return this.generateGenericRadicalSteps(problem, solution);
        }
    }

    generateSimplificationSteps(problem, solution) {
        const steps = [];
        const { radicand } = problem.parameters;
        const index = problem.parameters.index || 2;

        // Step 1: Original expression
        steps.push({
            stepNumber: 1,
            step: 'Given expression',
            description: `Simplify the radical expression`,
            expression: solution.original,
            reasoning: 'We need to simplify this radical to its simplest form',
            goalStatement: 'Find perfect power factors and extract them'
        });

        // Step 2: Prime factorization
        const factorString = Object.entries(solution.primeFactors)
            .map(([prime, count]) => `${prime}^${count}`)
            .join(' × ');
        
        steps.push({
            stepNumber: 2,
            step: 'Prime factorization',
            description: `Factor ${radicand} into prime factors`,
            expression: `${radicand} = ${factorString}`,
            reasoning: 'Prime factorization reveals all perfect power factors',
            algebraicRule: 'Fundamental Theorem of Arithmetic',
            primeFactors: solution.primeFactors
        });

        // Step 3: Identify perfect powers
        steps.push({
            stepNumber: 3,
            step: 'Identify perfect powers',
            description: `Group factors in sets of ${index}`,
            reasoning: `For ${index}th root, we need groups of ${index} identical factors`,
            visualHint: `Look for exponents divisible by ${index}`
        });

        // Step 4: Extract perfect powers
        if (solution.coefficient > 1) {
            steps.push({
                stepNumber: 4,
                step: 'Extract perfect powers',
                description: `Extract the ${index}th root of perfect ${index}th powers`,
                beforeExpression: solution.original,
                afterExpression: solution.result,
                reasoning: `Coefficient ${solution.coefficient} comes from extracting perfect powers`,
                algebraicRule: index === 2 ? 'Product Property: √(ab) = √a · √b' : `Product Property: ${index}√(ab) = ${index}√a · ${index}√b`
            });
        }

        // Step 5: Final simplified form
        steps.push({
            stepNumber: solution.coefficient > 1 ? 5 : 4,
            step: 'Simplified form',
            description: 'Write in simplest radical form',
            expression: solution.result,
            finalAnswer: true,
            reasoning: solution.newRadicand === 1 ? 
                'All factors were perfect powers' : 
                'No more perfect power factors remain under the radical'
        });

        return steps;
    }

    generateRationalExponentSteps(problem, solution) {
        const steps = [];

        if (problem.type === 'rational_exponent_to_radical') {
            // Conversion steps
            steps.push({
                stepNumber: 1,
                step: 'Identify exponent parts',
                description: 'Recognize numerator and denominator roles',
                expression: solution.original,
                reasoning: 'Denominator is the root index, numerator is the power'
            });

            steps.push({
                stepNumber: 2,
                step: 'Convert to radical form',
                description: 'Write as radical expression',
                expression: solution.radicalForm,
                reasoning: `Base ${problem.parameters.base} goes under ${problem.parameters.denominator}th root, raised to power ${problem.parameters.numerator}`
            });

            steps.push({
                stepNumber: 3,
                step: 'Alternative form',
                description: 'Can also write root first, then power',
                expression: solution.alternateForm,
                reasoning: 'Both forms are equivalent - choose based on which is easier to evaluate',
                finalAnswer: true
            });

        } else if (problem.type === 'evaluate_rational_exponent') {
            // Evaluation steps
            steps.push({
                stepNumber: 1,
                step: 'Given expression',
                description: 'Evaluate the rational exponent',
                expression: solution.original,
                goalStatement: 'Calculate the numerical value'
            });

            steps.push({
                stepNumber: 2,
                step: 'Choose evaluation method',
                description: solution.method1.description,
                reasoning: 'Taking root first often gives simpler numbers to work with'
            });

            steps.push({
                stepNumber: 3,
                step: 'Calculate root',
                description: solution.method1.step1,
                reasoning: `Find the ${problem.parameters.denominator}th root of ${problem.parameters.base}`
            });

            steps.push({
                stepNumber: 4,
                step: 'Apply power',
                description: solution.method1.step2,
                expression: solution.result,
                finalAnswer: true,
                reasoning: 'Raise the root to the power indicated by numerator'
            });
        }

        return steps;
    }

    generateOperationSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify operation',
            description: `Perform the ${solution.type.toLowerCase()}`,
            expression: solution.type,
            reasoning: solution.approach
        });

        steps.push({
            stepNumber: 2,
            step: 'Apply operation',
            description: 'Follow the appropriate rules for radical operations',
            reasoning: 'Use product/quotient properties as needed',
            finalAnswer: true
        });

        return steps;
    }

    generateRationalizingSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify denominator type',
            description: 'Determine rationalization strategy',
            reasoning: solution.approach
        });

        steps.push({
            stepNumber: 2,
            step: 'Choose multiplier',
            description: 'Select appropriate form to multiply by',
            reasoning: 'Multiply by form of 1 that eliminates radical'
        });

        steps.push({
            stepNumber: 3,
            step: 'Multiply and simplify',
            description: 'Complete the rationalization',
            reasoning: 'Denominator should now be rational',
            finalAnswer: true
        });

        return steps;
    }

    generateEquationSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Isolate radical',
            description: 'Get radical term by itself on one side',
            reasoning: 'Must isolate before eliminating radical',
            warning: 'Don\'t square both sides until radical is isolated'
        });

        steps.push({
            stepNumber: 2,
            step: 'Eliminate radical',
            description: 'Raise both sides to appropriate power',
            reasoning: 'This removes the radical but may introduce extraneous solutions'
        });

        steps.push({
            stepNumber: 3,
            step: 'Solve resulting equation',
            description: 'Solve the equation without radicals',
            reasoning: 'Standard algebraic solving techniques apply'
        });

        steps.push({
            stepNumber: 4,
            step: 'Check solutions',
            description: 'Verify each solution in original equation',
            reasoning: 'Squaring can introduce invalid solutions',
            warning: 'CRITICAL: Always check for extraneous solutions!',
            finalAnswer: true
        });

        return steps;
    }

    generateGenericRadicalSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Radical problem',
            description: solution.approach || 'Solve the radical expression',
            expression: solution.type,
            reasoning: 'Apply appropriate radical techniques'
        }];
    }

    // ==================== ENHANCED EXPLANATION METHODS ====================

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
            'Given expression': "We have a math puzzle with a radical symbol! We need to make it simpler and easier to understand.",
            'Prime factorization': "Let's break this number into its smallest building blocks - like breaking a LEGO tower into individual LEGO pieces!",
            'Identify perfect powers': "Now we look for sets of identical pieces. If we have 2 copies of the same piece (for square roots) or 3 copies (for cube roots), we can take them out!",
            'Extract perfect powers': "We're taking out the matching sets and putting them in front of the radical. It's like taking toys out of a toy box!",
            'Simplified form': "Now our radical is as simple as it can be - no more matching sets left inside!",
            'Calculate root': "We're finding what number, when multiplied by itself the right number of times, gives us this number.",
            'Apply power': "Now we multiply that number by itself a few times - like stacking blocks!",
            'Isolate radical': "We're moving things around so the square root is all by itself on one side - like putting one toy in its own special box.",
            'Eliminate radical': "We're going to make the radical disappear by doing the opposite operation - like unwrapping a present!",
            'Check solutions': "We need to make sure our answer actually works - like checking if puzzle pieces fit correctly!"
        };

        return ELI5Explanations[step.step] || "We're taking another step to solve our radical puzzle!";
    }

    findRelevantAnalogy(step, problem) {
        const category = this.radicalTypes[problem.type]?.category;
        
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(category) || analogy.suitableFor.includes('all_topics')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        
        return "Think of this like solving a puzzle - each step helps us see the answer more clearly!";
    }

    convertToSimpleLanguage(description) {
        if (!description) return '';

        const simplifications = {
            'radicand': 'the number under the radical',
            'coefficient': 'the number in front',
            'index': 'the small number showing what root',
            'perfect square': 'a number you get by multiplying a number by itself',
            'perfect cube': 'a number you get by multiplying a number by itself three times',
            'perfect power': 'a number that equals another number raised to a power',
            'prime factorization': 'breaking into smallest number pieces',
            'extract': 'take out',
            'simplify': 'make simpler',
            'rationalize': 'get rid of radicals in the bottom',
            'conjugate': 'partner expression that helps remove radicals',
            'extraneous': 'fake or invalid',
            'denominator': 'bottom of fraction',
            'numerator': 'top of fraction'
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
            'Given expression': 'Write the radical expression clearly, circling the parts',
            'Prime factorization': 'Draw a factor tree showing how the number breaks down',
            'Identify perfect powers': 'Circle groups of matching factors',
            'Extract perfect powers': 'Draw arrows showing factors moving outside the radical',
            'Simplified form': 'Show the final form with coefficient outside and simplified radical',
            'Calculate root': 'Show on number line or with area/volume model',
            'Apply power': 'Show repeated multiplication visually',
            'Isolate radical': 'Draw boxes around terms being moved',
            'Check solutions': 'Show substitution step-by-step with check marks'
        };

        return visualizations[step.step] || 'Draw a picture to represent what\'s happening';
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
        const category = this.radicalTypes[problemType]?.category || 'simplifying_radicals';
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

    // ==================== HELPER METHODS FOR ENHANCED EXPLANATIONS ====================

    getConceptualExplanation(step, problem) {
        const conceptualExplanations = {
            'Given expression': 'A radical expression asks: what number, raised to the index power, equals the radicand?',
            'Prime factorization': 'Breaking into primes reveals the fundamental building blocks, making perfect powers visible.',
            'Identify perfect powers': 'Perfect powers are sets of identical prime factors equal in number to the index.',
            'Extract perfect powers': 'We can separate perfect powers from the radical because of the product property.',
            'Calculate root': 'Finding the root is the inverse of raising to a power.',
            'Apply power': 'After finding the root, we raise it to the power indicated by the numerator.',
            'Isolate radical': 'The radical must be alone before we can eliminate it by raising to a power.',
            'Eliminate radical': 'Raising both sides to the index power removes the radical.',
            'Check solutions': 'Squaring can create false solutions, so verification is essential.'
        };

        return conceptualExplanations[step.step] || 'This step brings us closer to the simplified or solved form.';
    }

    getProceduralExplanation(step) {
        return `1. Identify what needs to be done
2. Apply the appropriate technique
3. Simplify the result
4. Verify the answer makes sense`;
    }

    getVisualExplanation(step, problem) {
        const category = this.radicalTypes[problem.type]?.category;
        const representation = this.representations.area_model;

        return representation?.explanation || 'Visualize the operation as transforming the expression.';
    }

    getAlgebraicExplanation(step) {
        const algebraicRules = {
            'Prime factorization': 'Fundamental Theorem of Arithmetic',
            'Extract perfect powers': 'Product Property of Radicals: ⁿ√(ab) = ⁿ√a · ⁿ√b',
            'Calculate root': 'Definition of nth root: if ⁿ√a = b, then b^n = a',
            'Apply power': 'Exponentiation',
            'Eliminate radical': 'Power Property: (ⁿ√a)^n = a'
        };

        return algebraicRules[step.step] || step.algebraicRule || 'Apply standard algebraic principles.';
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
                'radicand': 'number under the radical',
                'coefficient': 'number in front',
                'index': 'root number',
                'perfect square': 'number that\'s a square',
                'prime factorization': 'breaking into primes',
                'extract': 'take out',
                'rationalize': 'remove radical from bottom'
            },
            ELI5: {
                'radicand': 'the number hiding inside the radical symbol',
                'coefficient': 'the number standing in front',
                'index': 'the tiny number that tells us what kind of root',
                'perfect square': 'a number you get when you times a number by itself',
                'prime factorization': 'breaking the number into its tiniest pieces',
                'extract': 'pull out',
                'rationalize': 'clean up the bottom of the fraction'
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
            currentState: `We now have: ${currentStep.expression || currentStep.afterExpression || 'simplified form'}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary to continue simplifying/solving`,
            howItHelps: `This brings us closer to the final answer`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step}`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy is: ${nextStep.description?.toLowerCase()}`;
    }

    generatePreventionTips(step, problemType) {
        const tips = {
            'Prime factorization': [
                'Use a factor tree to avoid missing factors',
                'Check your work by multiplying factors back together',
                'Start with smallest prime (2) and work up'
            ],
            'Extract perfect powers': [
                'Count factor groups carefully',
                'Remember: index determines group size',
                'Don\'t forget to extract ALL perfect powers'
            ],
            'Check solutions': [
                'ALWAYS substitute back into ORIGINAL equation',
                'Check arithmetic carefully',
                'Reject solutions that make even roots negative'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Check your work'];
    }

    generateCheckPoints(step) {
        return [
            'Did I complete this step correctly?',
            'Does my answer make sense?',
            'Should I simplify further?',
            'Am I following the right process?'
        ];
    }

    identifyWarningFlags(step, problemType) {
        const warnings = {
            'Check solutions': ['Extraneous solutions possible!', 'Must verify in original equation'],
            'Eliminate radical': ['Squaring can introduce false solutions', 'Check domain restrictions'],
            'Extract perfect powers': ['Make sure all perfect powers are extracted', 'Don\'t leave perfect squares under radical']
        };

        return warnings[step.step] || [];
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'Prime factorization': 'Do my prime factors multiply back to the original number?',
            'Identify perfect powers': 'Have I found all groups of matching factors?',
            'Extract perfect powers': 'Did I extract all possible perfect powers?',
            'Calculate root': 'Does my answer, raised to the index, equal the radicand?',
            'Check solutions': 'Does my solution work in the original equation?'
        };

        return questions[step.step] || 'Does this step make sense?';
    }

    describeExpectedResult(step) {
        const expectations = {
            'Prime factorization': 'Product of prime numbers with exponents',
            'Extract perfect powers': 'Coefficient outside radical, leftover inside',
            'Simplified form': 'No perfect power factors under radical',
            'Check solutions': 'Verification that solution satisfies original equation'
        };

        return expectations[step.step] || 'Progress toward solution';
    }

    generateTroubleshootingTips(step) {
        return [
            'Review the previous step',
            'Check your arithmetic',
            'Consult the hint system if available',
            'Try a simpler example first',
            'Draw a picture or diagram'
        ];
    }

    generateGuidingQuestions(step, problem) {
        const questions = {
            'Prime factorization': [
                'What is the smallest prime factor?',
                'Can I divide by 2?',
                'What factors remain after dividing?'
            ],
            'Identify perfect powers': [
                'What is the index of this radical?',
                'Which factors appear in groups of that size?',
                'What can be extracted?'
            ],
            'Calculate root': [
                'What number raised to this power equals the radicand?',
                'Can I recognize this as a perfect power?',
                'Should I estimate first?'
            ]
        };

        return questions[step.step] || ['What is the goal?', 'What technique should I use?'];
    }

    generateProgressiveHints(step, problem) {
        const category = this.radicalTypes[problem.type]?.category || 'simplifying_radicals';
        const hintSet = this.hints[category] || this.hints.simplifying_radicals;

        return {
            level1: hintSet.level1 || 'Think about what you need to find.',
            level2: hintSet.level2 || 'Consider the properties of radicals.',
            level3: hintSet.level3 || 'Apply the appropriate technique.',
            level4: hintSet.level4 || 'Complete the operation.'
        };
    }

    breakIntoSubSteps(step) {
        if (step.step === 'Prime factorization') {
            return [
                'Start with smallest prime (2)',
                'Divide repeatedly while possible',
                'Move to next prime (3, 5, 7...)',
                'Continue until quotient is 1',
                'Write as product of primes'
            ];
        }

        return ['Understand the goal', 'Apply the technique', 'Simplify', 'Verify'];
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try with different numbers',
            practiceHint: 'Start with perfect squares/cubes to build confidence',
            extension: 'Try with variables or larger numbers'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What do I see in this expression?',
            goal: 'What am I trying to accomplish?',
            strategy: 'What technique should I use?',
            execute: 'How do I apply this technique?',
            verify: 'Does my result make sense?'
        };
    }

    identifyDecisionPoints(step) {
        return [
            'Which simplification technique to use?',
            'Should I convert between radical and exponential form?',
            'Which method is most efficient?'
        ];
    }

    suggestAlternativeMethods(step, problem) {
        const alternatives = {
            'Prime factorization': [
                'Could use factor tree',
                'Could use repeated division',
                'Could use calculator for large numbers'
            ],
            'Calculate root': [
                'Could estimate first',
                'Could use calculator',
                'Could recognize perfect power'
            ]
        };

        return alternatives[step.step] || ['The chosen method is appropriate'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex}`,
            progression: 'We are moving toward the final simplified form',
            relationship: 'Each step simplifies the expression further'
        };
    }

    identifyPrerequisites(step, problemType) {
        const category = this.radicalTypes[problemType]?.category || 'simplifying_radicals';
        const prereqs = this.prerequisites[category];
        
        return prereqs?.skills || ['Basic arithmetic'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Prime factorization': ['prime', 'factor', 'factorization', 'composite'],
            'Identify perfect powers': ['perfect square', 'perfect cube', 'index', 'exponent'],
            'Extract perfect powers': ['coefficient', 'radicand', 'extract', 'simplify'],
            'Calculate root': ['root', 'index', 'radicand', 'perfect power'],
            'Rationalize': ['rationalize', 'conjugate', 'denominator', 'numerator']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPrompts(step) {
        return {
            before: 'What do I need to identify before starting?',
            during: 'What should I be careful about?',
            after: 'How can I verify this is correct?'
        };
    }

    findRealWorldConnection(step, problem) {
        const category = this.radicalTypes[problem.type]?.category;
        
        const connections = {
            'simplifying_radicals': 'Like finding exact measurements in construction - you need the simplified form for precision.',
            'rational_exponents': 'Used in compound interest calculations and growth models in finance and biology.',
            'pythagorean_applications': 'Essential for navigation, construction, and any field involving distances.'
        };

        return connections[category] || 'Radicals appear in many real-world formulas and calculations.';
    }

    // ==================== GRAPH GENERATION ====================

    generateRadicalGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const category = this.radicalTypes[this.currentProblem.type]?.category;

        if (category === 'simplifying_radicals') {
            this.graphData = {
                type: 'number_line',
                description: 'Approximate location of radical on number line',
                visualization: 'Shows relative magnitude'
            };
        }
    }

    // ==================== WORKBOOK GENERATION ====================

    generateRadicalWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createEnhancedStepsSection(),
            this.createRadicalLessonSection(),
            this.createSolutionSection(),
            this.createAnalysisSection(),
            this.createVerificationSection(),
            this.createRealWorldApplicationSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection(),
            this.createPracticeProblemsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Rational Exponents and Radicals Mathematical Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            explanationLevel: this.explanationLevel,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSection() {
        if (!this.currentProblem) return null;

        const problemData = [
            ['Problem Type', this.radicalTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.radicalTypes[this.currentProblem.type]?.category || 'radicals'],
            ['Expression', this.currentSolution?.original || this.currentProblem.cleanInput],
            ['Description', this.currentProblem.scenario || 'Radical expression']
        ];

        if (this.currentProblem.parameters.radicand !== undefined) {
            problemData.push(['', '']);
            problemData.push(['Parameters', '']);
            problemData.push(['Radicand', this.currentProblem.parameters.radicand]);
            if (this.currentProblem.parameters.index !== undefined) {
                problemData.push(['Index', this.currentProblem.parameters.index]);
            }
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSection() {
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

            if (step.beforeExpression && step.afterExpression) {
                stepsData.push(['Before', step.beforeExpression]);
                stepsData.push(['After', step.afterExpression]);
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
            }

            if (step.warning) {
                stepsData.push(['⚠️ Warning', step.warning]);
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

    createRadicalLessonSection() {
        const { type } = this.currentProblem;
        const category = this.radicalTypes[type]?.category;
        const lesson = this.lessons[category];

        if (!lesson) return null;

        const lessonData = [
            ['Topic', lesson.title],
            ['', ''],
            ['Key Concepts', '']
        ];

        lesson.concepts.forEach(concept => {
            lessonData.push(['•', concept]);
        });

        lessonData.push(['', '']);
        lessonData.push(['Theory', lesson.theory]);

        if (lesson.keyFormulas) {
            lessonData.push(['', '']);
            lessonData.push(['Key Formulas', '']);
            Object.entries(lesson.keyFormulas).forEach(([name, formula]) => {
                lessonData.push([name, formula]);
            });
        }

        return {
            title: 'Key Concepts & Theory',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [
            ['Solution Type', this.currentSolution.type],
            ['Result', this.currentSolution.result || this.currentSolution.radicalForm || 'See steps']
        ];

        if (this.currentSolution.coefficient !== undefined) {
            solutionData.push(['Coefficient', this.currentSolution.coefficient]);
        }

        if (this.currentSolution.newRadicand !== undefined && this.currentSolution.newRadicand !== 1) {
            solutionData.push(['Remaining Radicand', this.currentSolution.newRadicand]);
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
            ['Solution Method', this.currentSolution.type],
            ['Category', this.currentSolution.category],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Difficulty Level', this.explanationLevel]
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
        if (!this.currentSolution) return null;

        const verificationData = [
            ['Verification Method', 'Direct evaluation'],
            ['', '']
        ];

        if (this.currentSolution.primeFactors) {
            const factorCheck = Object.entries(this.currentSolution.primeFactors)
                .map(([prime, count]) => `${prime}^${count}`)
                .join(' × ');
            verificationData.push(['Prime Factorization', factorCheck]);
            
            // Verify multiplication
            let product = 1;
            for (const [prime, count] of Object.entries(this.currentSolution.primeFactors)) {
                product *= Math.pow(parseInt(prime), count);
            }
            verificationData.push(['Product Check', `${factorCheck} = ${product}`]);
            verificationData.push(['Matches Original', product === this.currentProblem.parameters.radicand ? 'Yes ✓' : 'No']);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const applications = Object.values(this.realWorldProblems).slice(0, 3);

        const appData = [
            ['Real-World Applications', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Formula', app.formula || 'See description']);
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

    createPedagogicalNotesSection() {
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

    createAlternativeMethodsSection() {
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

    createPracticeProblemsSection() {
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

        problems.hard.slice(0, 3).forEach((p, i) => {
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
            simplifying_radicals: {
                objectives: [
                    'Simplify radical expressions using prime factorization',
                    'Identify and extract perfect powers',
                    'Express radicals in simplest form'
                ],
                keyConcepts: [
                    'Prime factorization reveals perfect powers',
                    'Product property allows separation',
                    'Simplified form has no perfect power factors under radical'
                ],
                prerequisites: [
                    'Prime factorization',
                    'Perfect squares and cubes',
                    'Multiplication and division'
                ],
                commonDifficulties: [
                    'Incomplete factorization',
                    'Not recognizing all perfect powers',
                    'Errors in extracting factors'
                ],
                teachingStrategies: [
                    'Use factor trees for visualization',
                    'Memorize perfect squares to 20',
                    'Practice grouping factors by index'
                ],
                extensions: [
                    'Radicals with variables',
                    'Higher index roots',
                    'Complex radical expressions'
                ]
            },

            rational_exponents: {
                objectives: [
                    'Convert between radical and exponential notation',
                    'Evaluate expressions with rational exponents',
                    'Apply exponent laws to rational exponents'
                ],
                keyConcepts: [
                    'Denominator is root index',
                    'Numerator is power',
                    'Can evaluate root-then-power or power-then-root'
                ],
                prerequisites: [
                    'Exponent rules',
                    'Radicals',
                    'Fraction arithmetic'
                ],
                commonDifficulties: [
                    'Confusing numerator and denominator roles',
                    'Order of operations errors',
                    'Exponent law misapplication'
                ],
                teachingStrategies: [
                    'Emphasize denominator = root, numerator = power',
                    'Practice both evaluation orders',
                    'Connect to radical notation'
                ],
                extensions: [
                    'Negative rational exponents',
                    'Simplifying complex expressions',
                    'Solving equations with rational exponents'
                ]
            },

            rationalizing_denominators: {
                objectives: [
                    'Rationalize denominators with monomial radicals',
                    'Use conjugates to rationalize binomial denominators',
                    'Express answers in standard form'
                ],
                keyConcepts: [
                    'Standard form has no radicals in denominator',
                    'Multiply by form of 1',
                    'Conjugates use difference of squares'
                ],
                prerequisites: [
                    'Simplifying radicals',
                    'Multiplying binomials',
                    'Difference of squares pattern'
                ],
                commonDifficulties: [
                    'Forgetting to multiply numerator',
                    'Incorrect conjugate identification',
                    'Arithmetic errors in expansion'
                ],
                teachingStrategies: [
                    'Practice conjugate recognition',
                    'Emphasize "form of 1" concept',
                    'Show why it\'s standard form'
                ],
                extensions: [
                    'Higher index roots',
                    'Multiple radicals',
                    'Complex fractions'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Work with radical expressions'],
            keyConcepts: ['Radical properties'],
            prerequisites: ['Basic algebra'],
            commonDifficulties: ['Various challenges'],
            teachingStrategies: ['Systematic instruction'],
            extensions: ['More complex problems']
        };
    }

    generateRadicalAlternativeMethods(problemType) {
        const category = this.radicalTypes[problemType]?.category;

        const alternativeDatabase = {
            simplifying_radicals: {
                primaryMethod: 'Prime Factorization',
                methods: [
                    {
                        name: 'Factor Tree',
                        description: 'Visual branching diagram showing factorization'
                    },
                    {
                        name: 'Repeated Division',
                        description: 'Systematically divide by primes starting from 2'
                    },
                    {
                        name: 'Perfect Power Recognition',
                        description: 'Recognize perfect squares/cubes directly'
                    }
                ],
                comparison: 'Prime factorization is most systematic; perfect power recognition is fastest for experienced students'
            },

            rational_exponents: {
                primaryMethod: 'Convert to Radical Form',
                methods: [
                    {
                        name: 'Root First, Then Power',
                        description: 'Evaluate denominator (root) before numerator (power)'
                    },
                    {
                        name: 'Power First, Then Root',
                        description: 'Evaluate numerator (power) before denominator (root)'
                    },
                    {
                        name: 'Direct Calculation',
                        description: 'Use calculator with fractional exponents'
                    }
                ],
                comparison: 'Root-first often gives smaller numbers; power-first works for small exponents'
            },

            rationalizing_denominators: {
                primaryMethod: 'Multiply by Conjugate',
                methods: [
                    {
                        name: 'Matching Radical Method',
                        description: 'For monomials, multiply by radical/radical'
                    },
                    {
                        name: 'Conjugate Method',
                        description: 'For binomials, use conjugate pairs'
                    },
                    {
                        name: 'Perfect Power Method',
                        description: 'For higher roots, multiply to create perfect power'
                    }
                ],
                comparison: 'Method depends on denominator structure; conjugates required for binomials'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard approach',
            methods: [{
                name: 'Alternative method',
                description: 'Other approaches may work depending on problem'
            }],
            comparison: 'Choose method based on problem structure'
        };
    }
}

// Export the class
export default EnhancedRationalExponentsRadicalsWorkbook;

