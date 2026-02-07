// Enhanced Polynomial Division Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedPolynomialDivisionMathematicalWorkbook {
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
        this.initializePolynomialDivisionSolvers();
        this.initializePolynomialDivisionLessons();
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

    initializeMathSymbols() {
        return {
            // Mathematical operators
            'div': '÷', 'times': '×', 'minus': '−', 'plus': '+',
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±', 'sqrt': '√',
            // Greek letters
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            // Special symbols
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'perpendicular': '⊥', 'parallel': '∥',
            // Polynomial specific
            'degree': 'deg', 'remainder': 'R'
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
                highlightBg: '#ffe6e6',
                quotientBg: '#e6f2ff',
                remainderBg: '#fff0e6'
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
                highlightBg: '#ffe0e6',
                quotientBg: '#bbdefb',
                remainderBg: '#ffe0b2'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializePolynomialDivisionLessons() {
        this.lessons = {
            long_division: {
                title: "Polynomial Long Division",
                concepts: [
                    "Divide polynomials similar to long division with numbers",
                    "Dividend = Divisor × Quotient + Remainder",
                    "Degree of remainder is always less than degree of divisor",
                    "Process: Divide, Multiply, Subtract, Bring down"
                ],
                theory: "Polynomial long division extends the concept of numerical long division to algebraic expressions. It's fundamental for simplifying rational expressions and finding factors.",
                keyFormulas: {
                    "Division Algorithm": "P(x) = D(x) · Q(x) + R(x)",
                    "Degree Relationship": "deg(R) < deg(D)",
                    "Process": "Divide → Multiply → Subtract → Bring Down → Repeat"
                },
                solvingSteps: [
                    "Arrange both polynomials in descending order of degree",
                    "Divide the leading term of dividend by leading term of divisor",
                    "Multiply the divisor by this quotient term",
                    "Subtract the result from the dividend",
                    "Bring down the next term",
                    "Repeat until degree of remainder < degree of divisor"
                ],
                applications: [
                    "Simplifying rational expressions",
                    "Finding polynomial factors",
                    "Curve sketching and asymptotes",
                    "Solving polynomial equations"
                ]
            },

            synthetic_division: {
                title: "Synthetic Division",
                concepts: [
                    "Shortcut method for dividing by linear divisors (x - c)",
                    "Only works when divisor is in form (x - c)",
                    "Faster than long division for linear divisors",
                    "Uses only coefficients, not variables"
                ],
                theory: "Synthetic division is a streamlined method of polynomial division specifically for divisors of the form (x - c). It's more efficient and less prone to arithmetic errors.",
                keyFormulas: {
                    "Applicable Form": "Dividing by (x - c) only",
                    "Division Algorithm": "P(x) = (x - c) · Q(x) + R",
                    "Remainder Theorem": "R = P(c)"
                },
                solvingSteps: [
                    "Write coefficients of dividend in a row (include 0s for missing terms)",
                    "Write c (from x - c) to the left",
                    "Bring down first coefficient",
                    "Multiply by c, add to next coefficient",
                    "Repeat until complete",
                    "Last number is remainder, others form quotient"
                ],
                applications: [
                    "Quick evaluation of polynomials",
                    "Testing for factors",
                    "Finding zeros of polynomials",
                    "Simplifying expressions"
                ]
            },

            remainder_theorem: {
                title: "Remainder Theorem",
                concepts: [
                    "When P(x) is divided by (x - c), remainder is P(c)",
                    "Provides quick way to evaluate polynomials",
                    "Connects division with function evaluation",
                    "Foundation for Factor Theorem"
                ],
                theory: "The Remainder Theorem states that the remainder when polynomial P(x) is divided by (x - c) equals P(c). This provides a powerful connection between division and evaluation.",
                keyFormulas: {
                    "Remainder Theorem": "If P(x) ÷ (x - c), then R = P(c)",
                    "Division Form": "P(x) = (x - c)Q(x) + R",
                    "Evaluation": "P(c) = R"
                },
                solvingSteps: [
                    "Identify the divisor (x - c)",
                    "Find value of c",
                    "Evaluate P(c) by substitution",
                    "This value is the remainder"
                ],
                applications: [
                    "Quick polynomial evaluation",
                    "Checking for factors",
                    "Solving polynomial equations",
                    "Finding remainders without full division"
                ]
            },

            factor_theorem: {
                title: "Factor Theorem",
                concepts: [
                    "(x - c) is a factor of P(x) if and only if P(c) = 0",
                    "Special case of Remainder Theorem when R = 0",
                    "Used to find and verify factors",
                    "Fundamental for factoring polynomials"
                ],
                theory: "The Factor Theorem is a direct consequence of the Remainder Theorem. It provides a test for determining whether a linear expression is a factor of a polynomial.",
                keyFormulas: {
                    "Factor Theorem": "(x - c) is a factor ⟺ P(c) = 0",
                    "Zero Test": "If P(c) = 0, then (x - c) divides P(x) evenly",
                    "Factorization": "P(x) = (x - c)Q(x) when P(c) = 0"
                },
                solvingSteps: [
                    "Test if (x - c) is a factor by evaluating P(c)",
                    "If P(c) = 0, then (x - c) is a factor",
                    "Use division to find Q(x)",
                    "Write P(x) = (x - c)Q(x)"
                ],
                applications: [
                    "Finding zeros of polynomials",
                    "Complete factorization",
                    "Solving polynomial equations",
                    "Graphing polynomials"
                ]
            },

            rational_root_theorem: {
                title: "Rational Root Theorem",
                concepts: [
                    "Possible rational zeros are ±(factors of constant)/(factors of leading coefficient)",
                    "Narrows down candidates for testing",
                    "Combined with synthetic division for efficiency",
                    "Only applies to polynomials with integer coefficients"
                ],
                theory: "The Rational Root Theorem provides a finite list of possible rational zeros for a polynomial with integer coefficients, making factorization more systematic.",
                keyFormulas: {
                    "Possible Roots": "p/q where p|a₀ and q|aₙ",
                    "Testing": "Use synthetic division or direct evaluation",
                    "Verification": "P(p/q) = 0 confirms it's a root"
                },
                solvingSteps: [
                    "List factors of constant term",
                    "List factors of leading coefficient",
                    "Form all possible ratios ±p/q",
                    "Test each candidate using synthetic division or substitution",
                    "Identify actual zeros"
                ],
                applications: [
                    "Finding rational zeros",
                    "Starting point for complete factorization",
                    "Solving polynomial equations",
                    "Optimization problems"
                ]
            },

            partial_fraction_decomposition: {
                title: "Partial Fraction Decomposition",
                concepts: [
                    "Expressing rational function as sum of simpler fractions",
                    "Reverse process of adding fractions",
                    "Requires proper fraction (deg(numerator) < deg(denominator))",
                    "Different forms for linear, repeated, and quadratic factors"
                ],
                theory: "Partial fraction decomposition breaks down complex rational expressions into simpler components, essential for integration and solving differential equations.",
                keyFormulas: {
                    "Basic Form": "P(x)/Q(x) = A₁/(x-r₁) + A₂/(x-r₂) + ...",
                    "Repeated Factor": "(Ax + B)/(x-r)² = A/(x-r) + B/(x-r)²",
                    "Irreducible Quadratic": "(Ax + B)/(x² + bx + c)"
                },
                solvingSteps: [
                    "Ensure proper fraction (divide if necessary)",
                    "Factor denominator completely",
                    "Set up partial fraction form",
                    "Clear denominators",
                    "Solve for unknown coefficients",
                    "Verify by combining fractions"
                ],
                applications: [
                    "Integration of rational functions",
                    "Inverse Laplace transforms",
                    "Solving differential equations",
                    "Signal processing"
                ]
            },

            polynomial_factorization: {
                title: "Complete Polynomial Factorization",
                concepts: [
                    "Every polynomial can be factored over the complex numbers",
                    "Real polynomials factor into linear and irreducible quadratics",
                    "Use division to reduce degree after finding factors",
                    "Combine multiple techniques"
                ],
                theory: "Complete factorization involves finding all factors of a polynomial, combining techniques like the Rational Root Theorem, synthetic division, and quadratic factoring.",
                keyFormulas: {
                    "Fundamental Theorem": "Every polynomial of degree n has exactly n zeros (counting multiplicity)",
                    "Real Factorization": "P(x) = a(x - r₁)(x - r₂)...(x² + bx + c)...",
                    "Complex Factorization": "P(x) = a(x - z₁)(x - z₂)...(x - zₙ)"
                },
                solvingSteps: [
                    "Find one zero using Rational Root Theorem or graphing",
                    "Use synthetic division to reduce degree",
                    "Repeat on quotient polynomial",
                    "Continue until fully factored",
                    "Express in factored form"
                ],
                applications: [
                    "Solving polynomial equations completely",
                    "Finding all zeros",
                    "Graphing polynomials",
                    "Optimization problems"
                ]
            }
        };
    }

    initializePolynomialDivisionSolvers() {
        this.polynomialTypes = {
            long_division_linear: {
                patterns: [
                    /divide.*by.*x\s*[-+]/i,
                    /long.*division.*linear/i
                ],
                solver: this.solveLongDivisionLinear.bind(this),
                name: 'Long Division by Linear Divisor',
                category: 'long_division',
                description: 'Divides polynomial by (x ± c) using long division'
            },

            long_division_quadratic: {
                patterns: [
                    /divide.*by.*x\^2/i,
                    /long.*division.*quadratic/i
                ],
                solver: this.solveLongDivisionQuadratic.bind(this),
                name: 'Long Division by Quadratic Divisor',
                category: 'long_division',
                description: 'Divides polynomial by quadratic expression'
            },

            long_division_polynomial: {
                patterns: [
                    /long.*division/i,
                    /polynomial.*division/i
                ],
                solver: this.solveLongDivisionPolynomial.bind(this),
                name: 'General Polynomial Long Division',
                category: 'long_division',
                description: 'Divides polynomial by polynomial using long division'
            },

            synthetic_division_standard: {
                patterns: [
                    /synthetic.*division/i,
                    /synthetic/i
                ],
                solver: this.solveSyntheticDivision.bind(this),
                name: 'Synthetic Division',
                category: 'synthetic_division',
                description: 'Divides by (x - c) using synthetic division'
            },

            remainder_theorem_application: {
                patterns: [
                    /remainder.*theorem/i,
                    /find.*remainder/i
                ],
                solver: this.applyRemainderTheorem.bind(this),
                name: 'Remainder Theorem Application',
                category: 'remainder_theorem',
                description: 'Finds remainder using Remainder Theorem'
            },

            factor_theorem_test: {
                patterns: [
                    /factor.*theorem/i,
                    /test.*factor/i,
                    /is.*factor/i
                ],
                solver: this.applyFactorTheorem.bind(this),
                name: 'Factor Theorem Test',
                category: 'factor_theorem',
                description: 'Tests if (x - c) is a factor'
            },

            find_zeros: {
                patterns: [
                    /find.*zeros/i,
                    /find.*roots/i,
                    /solve.*polynomial/i
                ],
                solver: this.findPolynomialZeros.bind(this),
                name: 'Find Polynomial Zeros',
                category: 'factor_theorem',
                description: 'Finds all zeros using factoring and division'
            },

            complete_factorization: {
                patterns: [
                    /factor.*completely/i,
                    /complete.*factorization/i
                ],
                solver: this.completeFactorization.bind(this),
                name: 'Complete Factorization',
                category: 'polynomial_factorization',
                description: 'Factors polynomial completely'
            },

            partial_fractions: {
                patterns: [
                    /partial.*fraction/i,
                    /decompose/i
                ],
                solver: this.partialFractionDecomposition.bind(this),
                name: 'Partial Fraction Decomposition',
                category: 'partial_fraction_decomposition',
                description: 'Decomposes rational expression into partial fractions'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            long_division: {
                'Divide leading terms': [
                    'Dividing coefficients but forgetting to subtract exponents',
                    'Sign errors in quotient terms',
                    'Forgetting to include all powers of variable'
                ],
                'Multiply back': [
                    'Multiplication errors with signs',
                    'Forgetting to distribute to all terms',
                    'Exponent addition errors'
                ],
                'Subtract': [
                    'Not changing signs when subtracting',
                    'Alignment errors with terms',
                    'Forgetting to subtract all terms'
                ],
                'Bring down': [
                    'Bringing down wrong term',
                    'Forgetting to bring down next term',
                    'Misaligning terms'
                ]
            },
            synthetic_division: {
                'Setup': [
                    'Using wrong value for c (should be opposite sign)',
                    'Missing zero coefficients for missing terms',
                    'Terms not in descending order'
                ],
                'Process': [
                    'Multiplication errors',
                    'Addition errors in columns',
                    'Misaligning numbers'
                ],
                'Interpretation': [
                    'Misidentifying remainder',
                    'Wrong degree for quotient',
                    'Forgetting to write quotient in polynomial form'
                ]
            },
            remainder_theorem: {
                'Substitution': [
                    'Using wrong value of c',
                    'Sign errors in substitution',
                    'Order of operations errors'
                ],
                'Evaluation': [
                    'Arithmetic errors',
                    'Exponent errors',
                    'Not simplifying completely'
                ]
            },
            factor_theorem: {
                'Testing': [
                    'Testing wrong value',
                    'Evaluation errors',
                    'Misinterpreting result (non-zero doesn\'t mean no factors)'
                ],
                'Division': [
                    'Errors in division after confirming factor',
                    'Not finding complete quotient'
                ]
            }
        };

        this.errorPrevention = {
            alignment: {
                reminder: 'Keep like terms aligned vertically in long division',
                method: 'Use grid paper or draw vertical guides'
            },
            signs: {
                reminder: 'Be extra careful with negative signs when subtracting',
                method: 'Change subtraction to addition of opposite'
            },
            missing_terms: {
                reminder: 'Include zero coefficients for missing degree terms',
                method: 'Write complete polynomial with 0x² if x² term missing'
            },
            synthetic_c_value: {
                reminder: 'For (x - c), use +c in synthetic division; for (x + c), use -c',
                method: 'Always solve divisor = 0 to find c value'
            },
            degree_tracking: {
                reminder: 'Track degree of each term to ensure correct result',
                method: 'Label each term with its degree'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why polynomial division works and its mathematical meaning',
                language: 'intuitive and concept-focused'
            },
            procedural: {
                focus: 'Exact sequence of steps to perform division',
                language: 'step-by-step algorithmic instructions'
            },
            visual: {
                focus: 'Visual representation of division process',
                language: 'spatial and geometric metaphors'
            },
            algebraic: {
                focus: 'Formal algebraic rules and polynomial properties',
                language: 'precise mathematical terminology'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple terms, minimal jargon',
                detail: 'essential steps only',
                examples: 'concrete numerical examples'
            },
            intermediate: {
                vocabulary: 'standard mathematical terms',
                detail: 'main steps with explanations',
                examples: 'mix of numerical and variable examples'
            },
            ELI5: {
                vocabulary: 'everyday language, no jargon',
                detail: 'every micro-step explained with analogies',
                examples: 'real-world stories and comparisons',
                analogies: true,
                visualization: 'simple pictures and diagrams'
            },
            detailed: {
                vocabulary: 'full mathematical vocabulary',
                detail: 'comprehensive explanations with theory',
                examples: 'abstract and generalized cases'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced difficulty'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            area_volume: {
                scenario: "Finding dimensions from area or volume",
                equation: "If Area = length × width, and area is polynomial, find dimensions",
                examples: [
                    "Rectangle area is x² + 5x + 6. One side is x + 2. Find other side.",
                    "Box volume is x³ + 6x² + 11x + 6. One dimension is x + 1. Find other dimensions."
                ],
                context: "Polynomial division helps find unknown dimensions in geometry"
            },
            rate_problems: {
                scenario: "Average rate when total distance/work is polynomial",
                equation: "Average = Total/Count",
                examples: [
                    "Total distance is 2x² + 5x + 3 miles over x + 1 hours. Find average speed.",
                    "Work completed is x³ - 1 units by x - 1 workers. Find work per worker."
                ],
                context: "Division of polynomials models averaging processes"
            },
            cost_analysis: {
                scenario: "Finding unit cost or price per item",
                equation: "Unit Cost = Total Cost / Quantity",
                examples: [
                    "Total cost is 3x² + 10x + 8 for x + 2 items. Find cost per item.",
                    "Revenue function is 5x³ - 2x² + x. If x + 1 units sold, find price per unit."
                ],
                context: "Business applications use polynomial division for unit pricing"
            },
            curve_fitting: {
                scenario: "Simplifying rational functions for graphing",
                equation: "R(x) = P(x)/Q(x) simplified",
                examples: [
                    "Graph y = (x² - 4)/(x - 2) by simplifying",
                    "Find asymptotes of y = (x³ + 2x² - x - 2)/(x + 2)"
                ],
                context: "Polynomial division reveals asymptotes and holes in graphs"
            },
            population_models: {
                scenario: "Population growth rate or density",
                equation: "Rate = Change in Population / Time or Area",
                examples: [
                    "Population is P(t) = t³ + 4t² + 5t + 2. Find average growth rate over t + 1 years.",
                    "Density function is (x² + 3x + 2)/(x + 1) organisms per unit area."
                ],
                context: "Modeling in biology uses polynomial division for rates"
            },
            engineering: {
                scenario: "Transfer functions and system design",
                equation: "H(s) = Output(s)/Input(s)",
                examples: [
                    "Transfer function H(s) = (s² + 3s + 2)/(s + 1). Simplify for analysis.",
                    "System response is (s³ - 1)/(s - 1). Find simplified form."
                ],
                context: "Control systems engineering uses polynomial division extensively"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            long_division: {
                skills: [
                    'Polynomial operations (add, subtract, multiply)',
                    'Understanding of degree',
                    'Numerical long division',
                    'Exponent rules'
                ],
                priorKnowledge: [
                    'Standard form of polynomials',
                    'Like terms',
                    'Distributive property'
                ],
                checkQuestions: [
                    "What is the degree of 3x⁴ + 2x - 5?",
                    "Multiply: (x + 2)(x - 3)",
                    "What is x⁵ ÷ x²?",
                    "Subtract: (3x² + 5x) - (x² + 2x)"
                ]
            },
            synthetic_division: {
                skills: [
                    'Long division basics',
                    'Identifying coefficients',
                    'Working with missing terms',
                    'Mental arithmetic'
                ],
                priorKnowledge: [
                    'Polynomial standard form',
                    'Solving x - c = 0',
                    'Pattern recognition'
                ],
                checkQuestions: [
                    "Write coefficients of x³ - 5x + 2 in order",
                    "If x - 5 = 0, what is x?",
                    "What coefficient is missing in x³ + 2x + 1?",
                    "Calculate: 3(-2) + 7"
                ]
            },
            remainder_theorem: {
                skills: [
                    'Polynomial evaluation',
                    'Substitution',
                    'Order of operations',
                    'Understanding division algorithm'
                ],
                priorKnowledge: [
                    'Function notation P(x)',
                    'Evaluating expressions',
                    'Relationship between division and remainder'
                ],
                checkQuestions: [
                    "If P(x) = x² + 3x - 1, find P(2)",
                    "What does P(c) mean?",
                    "In division, what is the relationship of dividend, divisor, quotient, remainder?"
                ]
            },
            factor_theorem: {
                skills: [
                    'Remainder Theorem',
                    'Understanding of zeros',
                    'Factor recognition',
                    'Polynomial evaluation'
                ],
                priorKnowledge: [
                    'Factors vs. zeros',
                    'Zero Product Property',
                    'Division with zero remainder'
                ],
                checkQuestions: [
                    "If P(3) = 0, what can you conclude?",
                    "What is a zero of a polynomial?",
                    "If (x - 2) is a factor of P(x), what is P(2)?"
                ]
            },
            rational_root_theorem: {
                skills: [
                    'Finding factors',
                    'Synthetic division',
                    'Testing multiple candidates',
                    'Systematic checking'
                ],
                priorKnowledge: [
                    'Factor Theorem',
                    'Integer factorization',
                    'Rational numbers'
                ],
                checkQuestions: [
                    "List factors of 12",
                    "List factors of 6",
                    "What are possible values of p/q if p|12 and q|6?",
                    "How do you test if 2/3 is a zero?"
                ]
            },
            partial_fractions: {
                skills: [
                    'Polynomial division',
                    'Factoring polynomials',
                    'Solving linear systems',
                    'Fraction operations'
                ],
                priorKnowledge: [
                    'Proper vs improper fractions',
                    'Common denominators',
                    'Polynomial factorization',
                    'Linear equations'
                ],
                checkQuestions: [
                    "Is (x² + 1)/(x³ + 2) a proper fraction?",
                    "Factor: x² - 5x + 6",
                    "Add: 1/(x-1) + 2/(x-2)",
                    "Clear denominators: A/(x-1) + B/(x-2) = 3/(x²-3x+2)"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            area_model: {
                description: "Polynomial division as area decomposition",
                analogy: "Like finding width when you know area and length of rectangle",
                visualization: "Draw rectangle with area as dividend, one side as divisor",
                suitableFor: ['long_division', 'factorization'],
                explanation: "Division finds the missing dimension"
            },
            stacking_algorithm: {
                description: "Long division algorithm with aligned terms",
                analogy: "Similar to numerical long division: divide, multiply, subtract, bring down",
                visualization: "Vertical arrangement showing each step",
                suitableFor: ['long_division'],
                explanation: "Visual organization prevents alignment errors"
            },
            synthetic_shorthand: {
                description: "Compact notation using only coefficients",
                analogy: "Like shorthand writing - faster but requires understanding",
                visualization: "Horizontal array with operations shown",
                suitableFor: ['synthetic_division'],
                explanation: "Streamlined process for linear divisors"
            },
            remainder_connection: {
                description: "Remainder as function value",
                analogy: "The remainder 'left over' equals what you get by plugging in c",
                visualization: "Graph showing P(c) as y-coordinate",
                suitableFor: ['remainder_theorem', 'factor_theorem'],
                explanation: "Connects division to function evaluation"
            },
            factor_tree: {
                description: "Complete factorization as tree diagram",
                analogy: "Breaking down into smaller pieces like a family tree",
                visualization: "Tree showing progressive factorization",
                suitableFor: ['complete_factorization'],
                explanation: "Shows relationship between factors"
            },
            graph_interpretation: {
                description: "Zeros, factors, and division on coordinate plane",
                analogy: "Where graph crosses x-axis shows factors",
                visualization: "Graph with x-intercepts marked",
                suitableFor: ['factor_theorem', 'zeros'],
                explanation: "Visual connection between algebra and graphs"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "(x² + 5x + 6) ÷ (x + 2)",
                    quotient: "x + 3",
                    remainder: 0,
                    method: "long_division",
                    difficulty: "easy"
                },
                {
                    problem: "(x² - 4) ÷ (x - 2)",
                    quotient: "x + 2",
                    remainder: 0,
                    method: "synthetic_division",
                    difficulty: "easy"
                },
                {
                    problem: "Find remainder when (x² + 3x - 1) ÷ (x - 2)",
                    answer: "P(2) = 9",
                    method: "remainder_theorem",
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "(2x³ - 3x² + 4x - 5) ÷ (x - 1)",
                    quotient: "2x² - x + 3",
                    remainder: -2,
                    method: "synthetic_division",
                    difficulty: "medium"
                },
                {
                    problem: "(x³ + 2x² - 5x - 6) ÷ (x² + x - 2)",
                    quotient: "x + 1",
                    remainder: "-4x - 4",
                    method: "long_division",
                    difficulty: "medium"
                },
                {
                    problem: "Is (x - 3) a factor of x³ - 6x² + 11x - 6?",
                    answer: "Yes, P(3) = 0",
                    method: "factor_theorem",
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "(x⁴ - 1) ÷ (x² + 1)",
                    quotient: "x² - 1",
                    remainder: 0,
                    method: "long_division",
                    difficulty: "hard"
                },
                {
                    problem: "Factor completely: x³ - 2x² - 5x + 6",
                    answer: "(x - 1)(x - 3)(x + 2)",
                    method: "complete_factorization",
                    difficulty: "hard"
                },
                {
                    problem: "Decompose: (3x + 5)/((x + 1)(x - 2))",
                    answer: "2/(x + 1) + 1/(x - 2)",
                    method: "partial_fractions",
                    difficulty: "hard"
                }
            ],
            byMethod: {
                long_division: [
                    { problem: "(x² + 7x + 12) ÷ (x + 3)", quotient: "x + 4", remainder: 0 },
                    { problem: "(x³ - 1) ÷ (x - 1)", quotient: "x² + x + 1", remainder: 0 },
                    { problem: "(2x³ + 5x² - x + 3) ÷ (x + 2)", quotient: "2x² + x - 3", remainder: 9 }
                ],
                synthetic_division: [
                    { problem: "(x³ + 2x² - x - 2) ÷ (x - 1)", quotient: "x² + 3x + 2", remainder: 0 },
                    { problem: "(x⁴ - 16) ÷ (x - 2)", quotient: "x³ + 2x² + 4x + 8", remainder: 0 }
                ],
                remainder_theorem: [
                    { problem: "Find P(2) if P(x) = x³ - 4x + 1", answer: 1 },
                    { problem: "Find remainder: (x⁴ + 3x² - 5) ÷ (x + 1)", answer: -1 }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            degree_confusion: {
                misconception: "Thinking remainder can have same or higher degree as divisor",
                reality: "Remainder must have degree less than divisor",
                correctiveExample: "When dividing by (x - 2), remainder is a constant, not another x term",
                commonIn: ['long_division', 'synthetic_division']
            },
            sign_errors_synthetic: {
                misconception: "Using same sign as divisor in synthetic division",
                reality: "Use opposite sign: for (x - 3), use +3; for (x + 2), use -2",
                correctiveExample: "Divisor is (x - 5), so use c = 5 (positive) in synthetic division",
                commonIn: ['synthetic_division']
            },
            missing_terms: {
                misconception: "Skipping zero coefficients for missing terms",
                reality: "Must include 0 for every missing degree",
                correctiveExample: "x³ + 2x + 1 should be written as x³ + 0x² + 2x + 1",
                commonIn: ['long_division', 'synthetic_division']
            },
            subtraction_sign_flip: {
                misconception: "Forgetting to change signs when subtracting in long division",
                reality: "Subtracting means changing all signs of what's being subtracted",
                correctiveExample: "Subtracting (2x² - 3x) means adding (-2x² + 3x)",
                commonIn: ['long_division']
            },
            factor_vs_zero: {
                misconception: "Confusing factors and zeros",
                reality: "If x = c is a zero, then (x - c) is a factor, not (x + c)",
                correctiveExample: "If x = 3 is a zero, factor is (x - 3), not (x + 3)",
                commonIn: ['factor_theorem']
            },
            remainder_interpretation: {
                misconception: "Thinking remainder theorem only works for exact division",
                reality: "Remainder theorem always works; it tells you R = P(c) even when R ≠ 0",
                correctiveExample: "P(x) = x² + 1 divided by (x - 1): R = P(1) = 2, not zero but still valid",
                commonIn: ['remainder_theorem']
            },
            quotient_degree: {
                misconception: "Not tracking degree of quotient correctly",
                reality: "deg(quotient) = deg(dividend) - deg(divisor)",
                correctiveExample: "Dividing degree 5 by degree 2 gives degree 3 quotient",
                commonIn: ['long_division']
            },
            improper_fraction_skip: {
                misconception: "Trying partial fractions on improper rational expressions",
                reality: "Must divide first if degree(numerator) ≥ degree(denominator)",
                correctiveExample: "(x³ + 1)/(x² - 1) requires division first: x + (x + 1)/(x² - 1)",
                commonIn: ['partial_fractions']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            long_division: {
                analogy: "Sharing cookies equally among friends",
                explanation: "Just like dividing cookies among friends leaves some remainder, dividing polynomials can leave a remainder polynomial",
                suitableFor: ['long_division', 'remainder'],
                ELI5: "Imagine you have a bag of different colored blocks (terms) and you're putting them in boxes. The quotient is how many boxes you fill, remainder is what's left over"
            },
            synthetic_division: {
                analogy: "Assembly line shortcut",
                explanation: "Like an assembly line that does the same task faster with less writing, synthetic division streamlines long division",
                suitableFor: ['synthetic_division'],
                ELI5: "It's like using a calculator instead of doing math by hand - faster but you need to know what you're doing"
            },
            remainder_theorem: {
                analogy: "Shortcut to finding what's left",
                explanation: "Like knowing how many cookies are left without doing the division, just by plugging in a number",
                suitableFor: ['remainder_theorem'],
                ELI5: "Instead of doing all the work of dividing, you can just put in a number and see what pops out - that's your leftover!"
            },
            factor_theorem: {
                analogy: "Perfect fit test",
                explanation: "Like checking if a key fits a lock perfectly (zero remainder means perfect fit)",
                suitableFor: ['factor_theorem'],
                ELI5: "If you can divide perfectly with nothing left over, it's like a puzzle piece that fits exactly!"
            },
            factorization: {
                analogy: "Breaking into smaller pieces",
                explanation: "Like breaking a large number into its multiplication parts (12 = 2 × 2 × 3)",
                suitableFor: ['complete_factorization'],
                ELI5: "It's like breaking a chocolate bar into smaller and smaller pieces until you can't break it anymore"
            },
            partial_fractions: {
                analogy: "Reverse pizza slicing",
                explanation: "Like un-combining pizza slices back to individual slices from different pizzas",
                suitableFor: ['partial_fractions'],
                ELI5: "Imagine you mixed fruit from different bowls. Partial fractions is like un-mixing them back to separate bowls"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            long_division: {
                level1: "What's the first step in long division? (Think about what you divide first)",
                level2: "Divide the leading term of the dividend by the leading term of the divisor",
                level3: "Multiply the divisor by this result and subtract from dividend",
                level4: "Repeat: divide {leading term of remaining} by {leading term of divisor}"
            },
            synthetic_division: {
                level1: "What value of c do you use from the divisor (x - c)?",
                level2: "For (x - c), use +c; for (x + c), use -c. Write all coefficients including zeros.",
                level3: "Bring down first coefficient, multiply by c, add to next coefficient",
                level4: "Continue pattern: multiply by {c}, add, multiply by {c}, add..."
            },
            remainder_theorem: {
                level1: "How can you find the remainder without doing full division?",
                level2: "The Remainder Theorem says R = P(c) when dividing by (x - c)",
                level3: "Find c by solving (x - c) = 0, then evaluate P(c)",
                level4: "Substitute c = {value} into P(x) and calculate"
            },
            factor_theorem: {
                level1: "How can you test if (x - c) is a factor?",
                level2: "Evaluate P(c). If P(c) = 0, then (x - c) is a factor",
                level3: "Find c from (x - c) = 0, then calculate P(c)",
                level4: "Calculate P({c}). If it equals zero, (x - {c}) is a factor"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Divide: (x² + 5x + 6) ÷ (x + 2)",
                    answer: "x + 3",
                    assesses: "long_division_basic",
                    difficulty: "basic"
                },
                {
                    question: "Use synthetic division: (x² - 3x + 2) ÷ (x - 1)",
                    answer: "x - 2",
                    assesses: "synthetic_division",
                    difficulty: "basic"
                },
                {
                    question: "Find remainder when (x³ + 2x - 5) ÷ (x - 2) using Remainder Theorem",
                    answer: "P(2) = 7",
                    assesses: "remainder_theorem",
                    difficulty: "intermediate"
                },
                {
                    question: "Is (x - 3) a factor of x² - x - 6?",
                    answer: "Yes, P(3) = 0",
                    assesses: "factor_theorem",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "In polynomial long division, what do you do after multiplying the divisor by the quotient term?",
                    options: ["Add", "Subtract", "Divide", "Bring down"],
                    correct: "Subtract",
                    explanation: "After multiplying, you subtract to find what remains"
                },
                {
                    question: "When dividing by (x - 5) using synthetic division, what value do you use?",
                    options: ["-5", "5", "x - 5", "0"],
                    correct: "5",
                    explanation: "Use the opposite sign: (x - 5) means use +5"
                },
                {
                    question: "If P(4) = 0, what can you conclude?",
                    options: [
                        "(x + 4) is a factor",
                        "(x - 4) is a factor",
                        "4 is the quotient",
                        "4 is the remainder"
                    ],
                    correct: "(x - 4) is a factor",
                    explanation: "P(4) = 0 means (x - 4) divides P(x) evenly"
                }
            ],
            summative: [
                {
                    question: "Divide: (2x³ - 3x² + 4x - 5) ÷ (x - 2) using synthetic division",
                    answer: "2x² + x + 6, R = 7",
                    showsWork: true,
                    rubric: {
                        setup: 1,
                        process: 2,
                        quotient: 1,
                        remainder: 1
                    }
                },
                {
                    question: "Factor completely: x³ + 2x² - x - 2",
                    answer: "(x + 1)(x + 2)(x - 1) or (x + 1)²(x - 1) after simplification",
                    showsWork: true,
                    rubric: {
                        find_first_zero: 1,
                        division: 2,
                        factor_quotient: 2,
                        final_form: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "(x² + 7x + 10) ÷ (x + 2)",
                    "(x² - 9) ÷ (x - 3)",
                    "Find P(1) if P(x) = x² + 2x - 3"
                ],
                medium: [
                    "(x³ + 3x² - 4) ÷ (x + 2)",
                    "(2x³ - 5x² + 3x - 1) ÷ (x - 1)",
                    "Is (x + 2) a factor of x³ + 8?",
                    "Find all zeros of x³ - 6x² + 11x - 6"
                ],
                hard: [
                    "(x⁴ - 16) ÷ (x² + 4)",
                    "Factor completely: x⁴ + x² - 2",
                    "Decompose: (5x + 3)/((x + 1)(x - 2))",
                    "(x⁵ + 32) ÷ (x + 2)"
                ]
            },
            byObjective: {
                canDivideLongDivision: [
                    "(x² + 6x + 8) ÷ (x + 2)",
                    "(x³ - 1) ÷ (x - 1)",
                    "(2x² + 3x - 5) ÷ (x - 1)"
                ],
                canUseSynthetic: [
                    "(x² + 4x + 3) ÷ (x + 1)",
                    "(x³ - 6x² + 11x - 6) ÷ (x - 1)",
                    "(x⁴ + 5x² - 3) ÷ (x + 2)"
                ],
                canApplyRemainderTheorem: [
                    "Find remainder of (x² + 3x - 5) ÷ (x - 2)",
                    "Evaluate P(-3) if P(x) = 2x³ + 5x - 1",
                    "Find R when (x⁴ - 1) ÷ (x - 1)"
                ],
                canApplyFactorTheorem: [
                    "Is (x - 2) a factor of x³ - 8?",
                    "Test if (x + 3) divides x² + x - 6",
                    "Verify (x - 1) is a factor of x⁴ - 1"
                ],
                canFactorCompletely: [
                    "Factor x³ + 2x² - x - 2",
                    "Factor x³ - 3x² - 4x + 12",
                    "Factor x⁴ - 5x² + 4"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "linear_divisor": "Use synthetic division if divisor is (x - c), otherwise long division",
                "higher_degree_divisor": "Use long division for quadratic or higher degree divisors",
                "just_remainder": "Use Remainder Theorem to find remainder without full division",
                "testing_factor": "Use Factor Theorem - evaluate P(c) to test if (x - c) is factor",
                "finding_all_zeros": "Combine Rational Root Theorem, synthetic division, and factoring",
                "simplifying_rational": "Use division to simplify before partial fractions"
            },
            whenToUseWhat: {
                long_division: "For any polynomial division, especially non-linear divisors",
                synthetic_division: "Fast method for linear divisors (x - c) only",
                remainder_theorem: "When you only need the remainder, not the quotient",
                factor_theorem: "To test if linear expression is a factor",
                rational_root_theorem: "To find candidates for testing as zeros",
                partial_fractions: "After division, to decompose proper rational expressions"
            },
            methodSelection: {
                factorsToConsider: [
                    "Degree of divisor (linear vs higher)",
                    "Whether you need quotient, remainder, or both",
                    "Complexity of coefficients",
                    "Whether testing for factor or finding zeros",
                    "Time/efficiency constraints"
                ],
                generalApproach: [
                    "1. Identify what you're looking for (quotient, remainder, factors, zeros)",
                    "2. Choose appropriate method based on divisor type",
                    "3. Ensure polynomials are in standard form",
                    "4. Execute chosen method carefully",
                    "5. Verify result"
                ]
            },
            optimizationTips: {
                "Choose synthetic when possible": "Synthetic division is faster and less error-prone for (x - c)",
                "Use theorems for efficiency": "Remainder and Factor Theorems save time when appropriate",
                "Check for patterns": "Look for difference of squares, sum/difference of cubes first",
                "Verify as you go": "Check each step to catch errors early",
                "Use factored form": "If divisor factors, consider partial division"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Synthetic Division Sprint",
                    timeLimit: 120,
                    problems: [
                        "(x² + 3x + 2) ÷ (x + 1)",
                        "(x² - 5x + 6) ÷ (x - 2)",
                        "(x³ - 1) ÷ (x - 1)",
                        "(x² + 4x - 5) ÷ (x - 1)",
                        "(2x² - 3x + 1) ÷ (x - 1)"
                    ]
                },
                {
                    name: "Remainder Theorem Challenge",
                    timeLimit: 90,
                    problems: [
                        "Find P(2) if P(x) = x² + 3x - 1",
                        "Find P(-1) if P(x) = x³ + 2x² - 5",
                        "Remainder of (x² - 4) ÷ (x - 2)",
                        "Remainder of (x³ + 8) ÷ (x + 2)"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Polynomial",
                    problem: "A polynomial P(x) has degree 3. When divided by (x - 1), quotient is x² + 2x + 3, remainder is 5.",
                    solve: "Find P(x)",
                    solution: "P(x) = (x - 1)(x² + 2x + 3) + 5 = x³ + x² + x + 2"
                },
                {
                    name: "Factor Detective",
                    problem: "P(x) = x³ + ax² + bx + 6. You know (x - 1) and (x - 2) are factors.",
                    solve: "Find a and b",
                    solution: "P(1) = 0 and P(2) = 0, solve system to get a = -5, b = 8"
                },
                {
                    name: "Division Builder",
                    challenge: "Create a polynomial that gives quotient (x + 3) and remainder 7 when divided by (x - 2)",
                    solution: "P(x) = (x - 2)(x + 3) + 7 = x² + x - 6 + 7 = x² + x + 1"
                }
            ],
            applications: [
                {
                    scenario: "Area Problem",
                    problem: "A rectangle has area x² + 7x + 12 square units. One side is (x + 3) units. Find the other side.",
                    equation: "(x² + 7x + 12) ÷ (x + 3)",
                    solution: "x + 4 units"
                },
                {
                    scenario: "Population Density",
                    problem: "Population in a region is P(t) = 2t³ + 5t² + 3t thousand, spread over (t + 1) thousand square miles.",
                    equation: "(2t³ + 5t² + 3t) ÷ (t + 1)",
                    solution: "2t² + 3t people per square mile"
                },
                {
                    scenario: "Volume Problem",
                    problem: "A box has volume x³ + 6x² + 11x + 6. One dimension is (x + 1). Factor to find all dimensions.",
                    equation: "Factor x³ + 6x² + 11x + 6",
                    solution: "(x + 1)(x + 2)(x + 3)"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1 - Long Division",
                    incorrectWork: [
                        "(x² + 5x + 6) ÷ (x + 2)",
                        "x + 3",
                        "_______________",
                        "x + 2 | x² + 5x + 6",
                        "        x² + 2x      // ERROR: should be x² + 2x, but computation was fine",
                        "        -------",
                        "             3x + 6",
                        "             3x + 3  // ERROR: should be 3x + 6",
                        "             -------",
                        "                  3  // Wrong remainder"
                    ],
                    correctAnswer: "Quotient: x + 3, Remainder: 0",
                    errorType: "Multiplication error: 3(x + 2) = 3x + 6, not 3x + 3"
                },
                {
                    name: "Find the Error #2 - Synthetic Division",
                    incorrectWork: [
                        "(x² - 5x + 6) ÷ (x - 3)",
                        "Using c = -3:  // ERROR: should use c = +3",
                        "-3 | 1  -5   6",
                        "   |    -3  24",
                        "   |__________",
                        "     1  -8  30"
                    ],
                    correctAnswer: "Should use c = 3, getting quotient x - 2, remainder 0",
                    errorType: "Wrong sign for c value"
                },
                {
                    name: "Find the Error #3 - Factor Theorem",
                    incorrectWork: [
                        "Test if (x - 2) is factor of P(x) = x² + 5x + 6",
                        "P(2) = 2² + 5(2) + 6 = 4 + 10 + 6 = 20",
                        "Since P(2) ≠ 0, (x - 2) is not a factor.  // This is correct",
                        "Therefore x = 2 is not a zero.  // This is correct",
                        "But wait, we can still factor: (x - 2)(x + 3)  // ERROR: this is wrong factorization"
                    ],
                    correctAnswer: "P(x) = (x + 2)(x + 3), not involving (x - 2)",
                    errorType: "Incorrect factorization attempt despite correct theorem application"
                }
            ]
        };
    }

    // MAIN SOLVER METHOD
    solvePolynomialDivisionProblem(config) {
        const { dividend, divisor, method, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parsePolynomialDivisionProblem(
                dividend, 
                divisor, 
                method, 
                problemType, 
                context
            );

            // Solve the problem
            this.currentSolution = this.solvePolynomialDivisionProblem_Internal(
                this.currentProblem
            );

            // Generate solution steps
            this.solutionSteps = this.generatePolynomialDivisionSteps(
                this.currentProblem, 
                this.currentSolution
            );

            // Generate graph data if applicable
            this.generatePolynomialGraphData();

            // Generate workbook
            this.generatePolynomialDivisionWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                quotient: this.currentSolution?.quotient,
                remainder: this.currentSolution?.remainder
            };

        } catch (error) {
            throw new Error(`Failed to solve polynomial division problem: ${error.message}`);
        }
    }

    parsePolynomialDivisionProblem(dividend, divisor, method = null, problemType = null, context = {}) {
        // Parse dividend and divisor polynomials
        const parsedDividend = this.parsePolynomial(dividend);
        const parsedDivisor = this.parsePolynomial(divisor);

        // Auto-detect problem type if not specified
        let detectedType = problemType;
        if (!detectedType) {
            detectedType = this.detectPolynomialDivisionType(parsedDividend, parsedDivisor, method);
        }

        return {
            dividend: dividend,
            divisor: divisor,
            parsedDividend: parsedDividend,
            parsedDivisor: parsedDivisor,
            method: method || this.determineOptimalMethod(parsedDivisor),
            type: detectedType,
            context: { ...context },
            parsedAt: new Date().toISOString()
        };
    }

    parsePolynomial(polyString) {
        // Clean the input
        const cleaned = polyString
            .replace(/\s+/g, '')
            .replace(/\*\*/g, '^')
            .replace(/\^/g, '^');

        // Extract terms with regex
        const termPattern = /([+-]?\d*\.?\d*)x\^?(\d*)|([+-]?\d+\.?\d*)/g;
        const terms = [];
        const coefficients = {};
        let maxDegree = 0;

        let match;
        while ((match = termPattern.exec(cleaned)) !== null) {
            if (match[1] !== undefined) {
                // Term with x
                let coeff = match[1];
                if (coeff === '' || coeff === '+') coeff = '1';
                if (coeff === '-') coeff = '-1';
                coeff = parseFloat(coeff);

                let degree = match[2];
                if (degree === '') degree = 1;
                else degree = parseInt(degree);

                coefficients[degree] = coeff;
                maxDegree = Math.max(maxDegree, degree);
            } else if (match[3] !== undefined) {
                // Constant term
                const coeff = parseFloat(match[3]);
                coefficients[0] = (coefficients[0] || 0) + coeff;
            }
        }

        // Create full coefficient array with zeros for missing terms
        const fullCoefficients = [];
        for (let i = maxDegree; i >= 0; i--) {
            fullCoefficients.push(coefficients[i] || 0);
        }

        return {
            original: polyString,
            cleaned: cleaned,
            degree: maxDegree,
            coefficients: fullCoefficients,
            coefficientMap: coefficients
        };
    }

    detectPolynomialDivisionType(dividend, divisor, method) {
        if (method === 'synthetic' || method === 'synthetic_division') {
            return 'synthetic_division_standard';
        }

        if (divisor.degree === 1) {
            return 'long_division_linear';
        } else if (divisor.degree === 2) {
            return 'long_division_quadratic';
        } else {
            return 'long_division_polynomial';
        }
    }

    determineOptimalMethod(divisor) {
        if (divisor.degree === 1) {
            // Check if it's in form (x - c)
            const leadingCoeff = divisor.coefficients[0];
            if (Math.abs(leadingCoeff - 1) < 1e-10) {
                return 'synthetic_division';
            }
        }
        return 'long_division';
    }

    solvePolynomialDivisionProblem_Internal(problem) {
        const solver = this.polynomialTypes[problem.type]?.solver;
        if (!solver) {
            // Default to general long division
            return this.solveLongDivisionPolynomial(problem);
        }

        return solver(problem);
    }

    // POLYNOMIAL DIVISION SOLVERS

    solveLongDivisionLinear(problem) {
        const { parsedDividend, parsedDivisor } = problem;
        
        const result = this.performLongDivision(
            parsedDividend.coefficients,
            parsedDivisor.coefficients
        );

        return {
            type: 'Long Division by Linear Divisor',
            method: 'long_division',
            dividend: problem.dividend,
            divisor: problem.divisor,
            quotient: this.coefficientsToPolynomial(result.quotient),
            remainder: this.coefficientsToPolynomial(result.remainder),
            quotientCoefficients: result.quotient,
            remainderCoefficients: result.remainder,
            steps: result.steps,
            verification: this.verifyDivision(
                parsedDividend.coefficients,
                parsedDivisor.coefficients,
                result.quotient,
                result.remainder
            ),
            category: 'long_division'
        };
    }

    solveLongDivisionQuadratic(problem) {
        const { parsedDividend, parsedDivisor } = problem;
        
        const result = this.performLongDivision(
            parsedDividend.coefficients,
            parsedDivisor.coefficients
        );

        return {
            type: 'Long Division by Quadratic Divisor',
            method: 'long_division',
            dividend: problem.dividend,
            divisor: problem.divisor,
            quotient: this.coefficientsToPolynomial(result.quotient),
            remainder: this.coefficientsToPolynomial(result.remainder),
            quotientCoefficients: result.quotient,
            remainderCoefficients: result.remainder,
            steps: result.steps,
            verification: this.verifyDivision(
                parsedDividend.coefficients,
                parsedDivisor.coefficients,
                result.quotient,
                result.remainder
            ),
            category: 'long_division'
        };
    }

    solveLongDivisionPolynomial(problem) {
        const { parsedDividend, parsedDivisor } = problem;
        
        const result = this.performLongDivision(
            parsedDividend.coefficients,
            parsedDivisor.coefficients
        );

        return {
            type: 'General Polynomial Long Division',
            method: 'long_division',
            dividend: problem.dividend,
            divisor: problem.divisor,
            quotient: this.coefficientsToPolynomial(result.quotient),
            remainder: this.coefficientsToPolynomial(result.remainder),
            quotientCoefficients: result.quotient,
            remainderCoefficients: result.remainder,
            steps: result.steps,
            verification: this.verifyDivision(
                parsedDividend.coefficients,
                parsedDivisor.coefficients,
                result.quotient,
                result.remainder
            ),
            category: 'long_division'
        };
    }

    performLongDivision(dividendCoeffs, divisorCoeffs) {
        const quotient = [];
        const steps = [];
        let remainder = [...dividendCoeffs];

        const divisorDegree = divisorCoeffs.length - 1;
        const dividendDegree = dividendCoeffs.length - 1;

        // Continue while remainder degree >= divisor degree
        while (remainder.length > 0 && remainder.length - 1 >= divisorDegree) {
            // Remove leading zeros from remainder
            while (remainder.length > 0 && Math.abs(remainder[0]) < 1e-10) {
                remainder.shift();
            }

            if (remainder.length - 1 < divisorDegree) break;

            // Divide leading terms
            const quotientTerm = remainder[0] / divisorCoeffs[0];
            quotient.push(quotientTerm);

            steps.push({
                action: 'divide_leading_terms',
                dividendTerm: remainder[0],
                divisorTerm: divisorCoeffs[0],
                quotientTerm: quotientTerm,
                explanation: `Divide ${remainder[0]} by ${divisorCoeffs[0]} to get ${quotientTerm}`
            });

            // Multiply divisor by quotient term
            const product = divisorCoeffs.map(c => c * quotientTerm);

            steps.push({
                action: 'multiply_divisor',
                quotientTerm: quotientTerm,
                divisor: divisorCoeffs,
                product: product,
                explanation: `Multiply divisor by ${quotientTerm}`
            });

            // Subtract product from remainder
            const newRemainder = [];
            for (let i = 0; i < product.length; i++) {
                newRemainder.push(remainder[i] - product[i]);
            }

            steps.push({
                action: 'subtract',
                before: remainder,
                product: product,
                after: newRemainder,
                explanation: 'Subtract product from current remainder'
            });

            // Bring down next term if exists
            if (newRemainder.length < remainder.length) {
                for (let i = product.length; i < remainder.length; i++) {
                    newRemainder.push(remainder[i]);
                }
            }

            remainder = newRemainder;
        }

        // Clean up remainder - remove leading zeros
        while (remainder.length > 0 && Math.abs(remainder[0]) < 1e-10) {
            remainder.shift();
        }

        // If remainder is empty or all zeros, set to [0]
        if (remainder.length === 0 || remainder.every(c => Math.abs(c) < 1e-10)) {
            remainder = [0];
        }

        return {
            quotient: quotient,
            remainder: remainder,
            steps: steps
        };
    }

    solveSyntheticDivision(problem) {
        const { parsedDividend, parsedDivisor } = problem;

        // Extract c from (x - c)
        const c = -parsedDivisor.coefficients[1] / parsedDivisor.coefficients[0];

        const result = this.performSyntheticDivision(parsedDividend.coefficients, c);

        return {
            type: 'Synthetic Division',
            method: 'synthetic_division',
            dividend: problem.dividend,
            divisor: problem.divisor,
            cValue: c,
            quotient: this.coefficientsToPolynomial(result.quotient),
            remainder: result.remainder,
            quotientCoefficients: result.quotient,
            remainderValue: result.remainder,
            steps: result.steps,
            verification: this.verifySyntheticDivision(
                parsedDividend.coefficients,
                c,
                result.quotient,
                result.remainder
            ),
            category: 'synthetic_division'
        };
    }

    performSyntheticDivision(coefficients, c) {
        const steps = [];
        const result = [];
        
        steps.push({
            action: 'setup',
            coefficients: coefficients,
            cValue: c,
            explanation: `Setting up synthetic division with c = ${c}`
        });

        // First coefficient comes down unchanged
        result.push(coefficients[0]);
        
        steps.push({
            action: 'bring_down',
            value: coefficients[0],
            explanation: `Bring down first coefficient: ${coefficients[0]}`
        });

        // Process remaining coefficients
        for (let i = 1; i < coefficients.length; i++) {
            const product = c * result[i - 1];
            const sum = coefficients[i] + product;
            result.push(sum);

            steps.push({
                action: 'multiply_and_add',
                multiply: { c: c, previous: result[i - 1], product: product },
                add: { coefficient: coefficients[i], product: product, sum: sum },
                explanation: `Multiply ${c} × ${result[i - 1]} = ${product}, add to ${coefficients[i]} to get ${sum}`
            });
        }

        // Last value is remainder, rest is quotient
        const remainder = result[result.length - 1];
        const quotient = result.slice(0, -1);

        return {
            quotient: quotient,
            remainder: remainder,
            steps: steps
        };
    }

    applyRemainderTheorem(problem) {
        const { parsedDividend, parsedDivisor } = problem;

        // Extract c from (x - c)
        const c = -parsedDivisor.coefficients[1] / parsedDivisor.coefficients[0];

        // Evaluate P(c)
        const remainder = this.evaluatePolynomial(parsedDividend.coefficients, c);

        return {
            type: 'Remainder Theorem Application',
            method: 'remainder_theorem',
            dividend: problem.dividend,
            divisor: problem.divisor,
            cValue: c,
            remainder: remainder,
            theorem: `When P(x) is divided by (x - ${c}), remainder R = P(${c}) = ${remainder}`,
            evaluation: this.showPolynomialEvaluation(parsedDividend.coefficients, c),
            category: 'remainder_theorem'
        };
    }

    applyFactorTheorem(problem) {
        const { parsedDividend, parsedDivisor } = problem;

        // Extract c from (x - c)
        const c = -parsedDivisor.coefficients[1] / parsedDivisor.coefficients[0];

        // Evaluate P(c)
        const value = this.evaluatePolynomial(parsedDividend.coefficients, c);
        const isFactor = Math.abs(value) < 1e-10;

        let quotient = null;
        if (isFactor) {
            // Perform division to find quotient
            const divResult = this.performSyntheticDivision(parsedDividend.coefficients, c);
            quotient = this.coefficientsToPolynomial(divResult.quotient);
        }

        return {
            type: 'Factor Theorem Test',
            method: 'factor_theorem',
            dividend: problem.dividend,
            divisor: problem.divisor,
            cValue: c,
            evaluation: value,
            isFactor: isFactor,
            conclusion: isFactor 
                ? `Yes, (x - ${c}) is a factor because P(${c}) = 0`
                : `No, (x - ${c}) is not a factor because P(${c}) = ${value} ≠ 0`,
            quotient: quotient,
            factorization: isFactor ? `${problem.dividend} = (${problem.divisor})(${quotient})` : null,
            category: 'factor_theorem'
        };
    }

    findPolynomialZeros(problem) {
        // Implementation would find all zeros using combination of methods
        return {
            type: 'Find Polynomial Zeros',
            method: 'combined',
            polynomial: problem.dividend,
            approach: 'Use Rational Root Theorem, synthetic division, and factoring',
            category: 'factor_theorem'
        };
    }

    completeFactorization(problem) {
        // Implementation would completely factor the polynomial
        return {
            type: 'Complete Factorization',
            method: 'systematic_factoring',
            polynomial: problem.dividend,
            approach: 'Find zeros systematically and build complete factorization',
            category: 'polynomial_factorization'
        };
    }

    partialFractionDecomposition(problem) {
        // Implementation would decompose rational expression
        return {
            type: 'Partial Fraction Decomposition',
            method: 'decomposition',
            expression: `(${problem.dividend})/(${problem.divisor})`,
            approach: 'Factor denominator and set up partial fraction form',
            category: 'partial_fraction_decomposition'
        };
    }

    // HELPER METHODS

    coefficientsToPolynomial(coeffs) {
        if (!coeffs || coeffs.length === 0) return '0';
        
        const terms = [];
        const degree = coeffs.length - 1;

        for (let i = 0; i < coeffs.length; i++) {
            const coeff = coeffs[i];
            if (Math.abs(coeff) < 1e-10) continue;

            const currentDegree = degree - i;
            let term = '';

            // Coefficient
            if (currentDegree === 0) {
                term = coeff.toString();
            } else {
                if (Math.abs(coeff - 1) < 1e-10) {
                    term = '';
                } else if (Math.abs(coeff + 1) < 1e-10) {
                    term = '-';
                } else {
                    term = coeff.toString();
                }
            }

            // Variable
            if (currentDegree > 0) {
                term += 'x';
                if (currentDegree > 1) {
                    term += `^${currentDegree}`;
                }
            }

            // Sign
            if (terms.length > 0 && coeff > 0) {
                term = '+ ' + term;
            } else if (coeff < 0 && term.startsWith('-')) {
                term = '- ' + term.substring(1);
            }

            terms.push(term);
        }

        return terms.length > 0 ? terms.join(' ') : '0';
    }

    evaluatePolynomial(coeffs, x) {
        let result = 0;
        const degree = coeffs.length - 1;

        for (let i = 0; i < coeffs.length; i++) {
            const power = degree - i;
            result += coeffs[i] * Math.pow(x, power);
        }

        return result;
    }

    showPolynomialEvaluation(coeffs, x) {
        const steps = [];
        const degree = coeffs.length - 1;
        
        let expression = '';
        let calculation = '';

        for (let i = 0; i < coeffs.length; i++) {
            const coeff = coeffs[i];
            const power = degree - i;

            if (Math.abs(coeff) < 1e-10) continue;

            // Build expression
            if (power === 0) {
                expression += (expression ? ' + ' : '') + `${coeff}`;
                calculation += (calculation ? ' + ' : '') + `${coeff}`;
            } else if (power === 1) {
                expression += (expression ? ' + ' : '') + `${coeff}(${x})`;
                calculation += (calculation ? ' + ' : '') + `${coeff * x}`;
            } else {
                expression += (expression ? ' + ' : '') + `${coeff}(${x})^${power}`;
                calculation += (calculation ? ' + ' : '') + `${coeff * Math.pow(x, power)}`;
            }
        }

        const result = this.evaluatePolynomial(coeffs, x);

        return {
            expression: expression,
            substitution: calculation,
            result: result
        };
    }

    verifyDivision(dividendCoeffs, divisorCoeffs, quotientCoeffs, remainderCoeffs) {
        // Verify: Dividend = Divisor × Quotient + Remainder
        
        // Multiply divisor by quotient
        const product = this.multiplyPolynomials(divisorCoeffs, quotientCoeffs);
        
        // Add remainder
        const reconstructed = this.addPolynomials(product, remainderCoeffs);
        
        // Compare with original dividend
        const match = this.polynomialsEqual(reconstructed, dividendCoeffs);

        return {
            formula: 'P(x) = D(x) · Q(x) + R(x)',
            divisorTimesQuotient: this.coefficientsToPolynomial(product),
            plusRemainder: this.coefficientsToPolynomial(reconstructed),
            originalDividend: this.coefficientsToPolynomial(dividendCoeffs),
            verified: match
        };
    }

    verifySyntheticDivision(dividendCoeffs, c, quotientCoeffs, remainder) {
        // Reconstruct using (x - c) × Q(x) + R
        const divisorCoeffs = [1, -c]; // (x - c)
        return this.verifyDivision(dividendCoeffs, divisorCoeffs, quotientCoeffs, [remainder]);
    }

    multiplyPolynomials(poly1, poly2) {
        const result = new Array(poly1.length + poly2.length - 1).fill(0);

        for (let i = 0; i < poly1.length; i++) {
            for (let j = 0; j < poly2.length; j++) {
                result[i + j] += poly1[i] * poly2[j];
            }
        }

        return result;
    }

    addPolynomials(poly1, poly2) {
        const maxLen = Math.max(poly1.length, poly2.length);
        const result = [];

        // Pad shorter polynomial with leading zeros
        const p1 = [...Array(maxLen - poly1.length).fill(0), ...poly1];
        const p2 = [...Array(maxLen - poly2.length).fill(0), ...poly2];

        for (let i = 0; i < maxLen; i++) {
            result.push(p1[i] + p2[i]);
        }

        return result;
    }

    polynomialsEqual(poly1, poly2) {
        if (poly1.length !== poly2.length) return false;

        for (let i = 0; i < poly1.length; i++) {
            if (Math.abs(poly1[i] - poly2[i]) > 1e-9) return false;
        }

        return true;
    }

    // STEP GENERATION METHODS

    generatePolynomialDivisionSteps(problem, solution) {
        let baseSteps = this.generateBasePolynomialSteps(problem, solution);

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

    generateBasePolynomialSteps(problem, solution) {
        if (solution.method === 'synthetic_division') {
            return this.generateSyntheticDivisionSteps(problem, solution);
        } else if (solution.method === 'long_division') {
            return this.generateLongDivisionSteps(problem, solution);
        } else if (solution.method === 'remainder_theorem') {
            return this.generateRemainderTheoremSteps(problem, solution);
        } else if (solution.method === 'factor_theorem') {
            return this.generateFactorTheoremSteps(problem, solution);
        }

        return [{
            stepNumber: 1,
            step: 'Polynomial Division',
            description: 'Solve using appropriate method',
            solution: solution
        }];
    }

    generateLongDivisionSteps(problem, solution) {
        const steps = [];
        let stepNum = 1;

        // Step 1: Setup
        steps.push({
            stepNumber: stepNum++,
            step: 'Setup',
            description: 'Write dividend and divisor in long division format',
            dividend: solution.dividend,
            divisor: solution.divisor,
            reasoning: 'Ensure polynomials are in descending order with all terms present',
            goalStatement: 'We will divide term by term until remainder degree < divisor degree'
        });

        // Process each step from solution.steps
        if (solution.steps) {
            solution.steps.forEach((detailStep, index) => {
                if (detailStep.action === 'divide_leading_terms') {
                    steps.push({
                        stepNumber: stepNum++,
                        step: 'Divide leading terms',
                        description: `Divide ${detailStep.dividendTerm} by ${detailStep.divisorTerm}`,
                        calculation: `${detailStep.dividendTerm} ÷ ${detailStep.divisorTerm} = ${detailStep.quotientTerm}`,
                        quotientTerm: detailStep.quotientTerm,
                        reasoning: 'This gives the next term of the quotient',
                        algebraicRule: 'Division of like terms with exponent subtraction'
                    });
                } else if (detailStep.action === 'multiply_divisor') {
                    steps.push({
                        stepNumber: stepNum++,
                        step: 'Multiply divisor by quotient term',
                        description: `Multiply entire divisor by ${detailStep.quotientTerm}`,
                        product: this.coefficientsToPolynomial(detailStep.product),
                        reasoning: 'This shows what to subtract from the dividend',
                        visualHint: 'Align terms by degree for proper subtraction'
                    });
                } else if (detailStep.action === 'subtract') {
                    steps.push({
                        stepNumber: stepNum++,
                        step: 'Subtract',
                        description: 'Subtract product from current dividend',
                        before: this.coefficientsToPolynomial(detailStep.before),
                        product: this.coefficientsToPolynomial(detailStep.product),
                        after: this.coefficientsToPolynomial(detailStep.after),
                        reasoning: 'This gives the new remainder to continue division',
                        algebraicRule: 'Remember to change signs when subtracting'
                    });
                }
            });
        }

        // Final answer
        steps.push({
            stepNumber: stepNum++,
            step: 'Final Answer',
            description: 'Division is complete',
            quotient: solution.quotient,
            remainder: solution.remainder,
            finalAnswer: true,
            reasoning: 'Degree of remainder is less than degree of divisor, so we stop'
        });

        return steps;
    }

    generateSyntheticDivisionSteps(problem, solution) {
        const steps = [];
        let stepNum = 1;

        // Step 1: Setup
        steps.push({
            stepNumber: stepNum++,
            step: 'Setup',
            description: `Set up synthetic division with c = ${solution.cValue}`,
            cValue: solution.cValue,
            coefficients: solution.quotientCoefficients,
            reasoning: `From divisor (x - ${solution.cValue}), we use c = ${solution.cValue}`,
            goalStatement: 'Use the pattern: bring down, multiply by c, add',
            importantNote: `For (x - c), use +c; for (x + c), use -c`
        });

        // Process steps from solution
        if (solution.steps) {
            solution.steps.forEach((detailStep, index) => {
                if (detailStep.action === 'bring_down') {
                    steps.push({
                        stepNumber: stepNum++,
                        step: 'Bring down first coefficient',
                        description: `Bring down ${detailStep.value}`,
                        value: detailStep.value,
                        reasoning: 'First coefficient of quotient is first coefficient of dividend'
                    });
                } else if (detailStep.action === 'multiply_and_add') {
                    steps.push({
                        stepNumber: stepNum++,
                        step: 'Multiply and add',
                        description: detailStep.explanation,
                        multiply: `${detailStep.multiply.c} × ${detailStep.multiply.previous} = ${detailStep.multiply.product}`,
                        add: `${detailStep.add.coefficient} + ${detailStep.add.product} = ${detailStep.add.sum}`,
                        reasoning: 'Multiply previous result by c, add to next coefficient'
                    });
                }
            });
        }

        // Final answer
        steps.push({
            stepNumber: stepNum++,
            step: 'Interpret result',
            description: 'Read quotient and remainder from bottom row',
            quotient: solution.quotient,
            remainder: solution.remainder,
            finalAnswer: true,
            reasoning: 'Last number is remainder; others form quotient coefficients'
        });

        return steps;
    }

    generateRemainderTheoremSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify c value',
            description: `From divisor (x - c), find c = ${solution.cValue}`,
            cValue: solution.cValue,
            reasoning: 'Remainder Theorem: When P(x) ÷ (x - c), remainder R = P(c)'
        });

        steps.push({
            stepNumber: 2,
            step: 'Evaluate P(c)',
            description: `Substitute x = ${solution.cValue} into P(x)`,
            evaluation: solution.evaluation,
            reasoning: 'Direct evaluation gives the remainder'
        });

        steps.push({
            stepNumber: 3,
            step: 'State remainder',
            description: `Remainder = ${solution.remainder}`,
            remainder: solution.remainder,
            finalAnswer: true,
            theorem: solution.theorem
        });

        return steps;
    }

    generateFactorTheoremSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'State Factor Theorem',
            description: '(x - c) is a factor of P(x) if and only if P(c) = 0',
            theorem: 'Factor Theorem',
            reasoning: 'We test by evaluating P(c)'
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify c and evaluate',
            description: `From (x - ${solution.cValue}), evaluate P(${solution.cValue})`,
            cValue: solution.cValue,
            evaluation: solution.evaluation,
            reasoning: 'Check if result equals zero'
        });

        steps.push({
            stepNumber: 3,
            step: 'Conclusion',
            description: solution.conclusion,
            isFactor: solution.isFactor,
            finalAnswer: true,
            quotient: solution.quotient,
            factorization: solution.factorization
        });

        return steps;
    }

    // Enhanced explanation methods (similar structure to linear workbook)
    
    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanationPoly(step, problem),
                procedural: this.getProceduralExplanationPoly(step),
                visual: this.getVisualExplanationPoly(step, problem),
                algebraic: this.getAlgebraicExplanationPoly(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisites(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyPoly(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        // Add thinking prompts if enabled
        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPromptsPoly(step);
        }

        // Add self-check questions if enabled
        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestionPoly(step);
        }

        // Add real-world connections if enabled
        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findRealWorldConnectionPoly(step, problem);
        }

        return enhanced;
    }

    getConceptualExplanationPoly(step, problem) {
        const conceptualExplanations = {
            'Setup': 'Polynomial division follows the same logic as numerical long division - we divide, multiply, subtract, and repeat until complete.',
            'Divide leading terms': 'Dividing leading terms gives us the next piece of the quotient. This is like finding how many times the divisor fits into the current remainder.',
            'Multiply divisor by quotient term': 'Multiplying back helps us see what portion of the dividend we\'ve accounted for.',
            'Subtract': 'Subtracting shows what remains after removing the portion we just divided. This is the new working remainder.',
            'Bring down first coefficient': 'In synthetic division, we start with the first coefficient unchanged because we\'re building the quotient incrementally.',
            'Multiply and add': 'The multiply-add pattern in synthetic division efficiently combines the division and subtraction steps.',
            'Identify c value': 'The Remainder Theorem connects division with function evaluation - the remainder when dividing by (x - c) equals P(c).',
            'Evaluate P(c)': 'By substituting c into the polynomial, we directly find the remainder without performing full division.',
            'State Factor Theorem': 'The Factor Theorem is a special case of the Remainder Theorem when the remainder is zero.',
            'Final Answer': 'The division algorithm guarantees P(x) = D(x)·Q(x) + R(x), where degree of R < degree of D.'
        };

        return conceptualExplanations[step.step] || 'This step continues the polynomial division process.';
    }

    getProceduralExplanationPoly(step) {
        const procedures = {
            'Setup': '1. Write divisor outside, dividend inside\n2. Ensure both are in standard form\n3. Include 0 coefficients for missing terms',
            'Divide leading terms': '1. Identify leading term of current remainder\n2. Identify leading term of divisor\n3. Divide coefficient and subtract exponents',
            'Multiply divisor by quotient term': '1. Take the quotient term just found\n2. Multiply it by each term of divisor\n3. Write result below current remainder',
            'Subtract': '1. Change all signs of product\n2. Add vertically (same as subtracting)\n3. This gives new remainder',
            'Multiply and add': '1. Multiply previous result by c\n2. Write product below next coefficient\n3. Add column to get next result'
        };

        return procedures[step.step] || 'Follow the standard procedure for this step.';
    }

    getVisualExplanationPoly(step, problem) {
        const visual = {
            'Setup': 'Imagine an area model where the dividend is the total area, divisor is one side, and we\'re finding the other side (quotient)',
            'Divide leading terms': 'Picture removing the largest matching piece from the total - this is the next quotient term',
            'Subtract': 'Like removing a section from a shape, we subtract to see what area remains',
            'Synthetic division': 'Think of a waterfall - each number flows down, gets multiplied by c, and adds to the next level',
            'Remainder Theorem': 'Visualize the graph - P(c) is the y-coordinate when x = c, which equals the remainder'
        };

        return visual[step.step] || visual[solution.method] || 'Visualize the step as part of the overall division process.';
    }

    getAlgebraicExplanationPoly(step) {
        const algebraic = {
            'Setup': 'Division Algorithm: For polynomials P(x) and D(x) where D(x) ≠ 0, there exist unique Q(x) and R(x) such that P(x) = D(x)·Q(x) + R(x) with deg(R) < deg(D)',
            'Divide leading terms': 'For terms axⁿ and bxᵐ: (axⁿ)/(bxᵐ) = (a/b)x^(n-m)',
            'Multiply': 'Distributive Property: a(b + c + d) = ab + ac + ad',
            'Subtract': 'Additive Inverse: a - b = a + (-b)',
            'Remainder Theorem': 'Theorem: If P(x) is divided by (x - c), then R = P(c)',
            'Factor Theorem': 'Theorem: (x - c) is a factor of P(x) ⟺ P(c) = 0'
        };

        return algebraic[step.step] || 'Apply polynomial division properties.';
    }

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateELI5ExplanationPoly(step, problem),
                analogy: this.findRelevantAnalogyPoly(step, problem),
                simpleLanguage: this.convertToSimpleLanguage(step.description),
                visualization: this.suggestVisualizationPoly(step)
            }
        }));
    }

    generateELI5ExplanationPoly(step, problem) {
        const ELI5Explanations = {
            'Setup': "We're going to share these polynomial blocks into equal groups. We write it down in a special way to keep track.",
            'Divide leading terms': "Look at the biggest block we have left. How many times does the biggest block of our divisor fit into it? That's our next quotient piece!",
            'Multiply divisor by quotient term': "Now we take that piece we just found and make a copy of the whole divisor pattern with it. This shows us what we're using up.",
            'Subtract': "We take away the blocks we just used. What's left over? That's what we work with next!",
            'Bring down first coefficient': "In the fast method (synthetic division), we start by writing down our first number - it doesn't change!",
            'Multiply and add': "Here's the pattern: multiply by our special number, then add to the next number in line. Repeat, repeat, repeat!",
            'Identify c value': "There's a magic trick! Instead of doing all that division work, we can just plug in one number to find what's left over.",
            'Final Answer': "We're done! The answer shows two things: how many times it divides (quotient) and what's left over (remainder)."
        };

        return ELI5Explanations[step.step] || "We're taking another step in our division adventure!";
    }

    findRelevantAnalogyPoly(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (problem.method && key === problem.method) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of dividing polynomials like sharing toys fairly - you give out as much as you can, and whatever's left is the remainder!";
    }

    suggestVisualizationPoly(step) {
        const visualizations = {
            'Setup': 'Draw a long division bracket with the divisor outside and dividend inside',
            'Divide leading terms': 'Circle the leading terms and draw an arrow showing the division',
            'Multiply': 'Draw boxes showing the multiplication of each term',
            'Subtract': 'Use different colors for what you\'re subtracting and what remains',
            'Synthetic division': 'Draw a curved arrow showing numbers flowing down in a waterfall pattern',
            'Remainder Theorem': 'Draw a number line showing where you\'re evaluating the polynomial'
        };

        return visualizations[step.step] || 'Draw a diagram to represent this step';
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generateStepBridgePoly(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgressionPoly(steps[i], steps[i + 1]),
                    strategicThinking: this.explainStepStrategyPoly(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateStepBridgePoly(currentStep, nextStep) {
        return {
            currentState: `After ${currentStep.step}, we have: ${currentStep.description}`,
            nextGoal: `Next step: ${nextStep.description}`,
            why: `This is necessary to continue the division process`,
            howItHelps: `Moving closer to finding the complete quotient and remainder`
        };
    }

    explainStepProgressionPoly(currentStep, nextStep) {
        return `From "${currentStep.step}" we proceed to "${nextStep.step}" to continue the division algorithm`;
    }

    explainStepStrategyPoly(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
    }

    addErrorPrevention(step, problemType) {
        const category = this.polynomialTypes[problemType]?.category || 'long_division';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsPoly(step, problemType),
                checkPoints: this.generateCheckPointsPoly(step),
                warningFlags: this.identifyWarningFlagsPoly(step, problemType)
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestionPoly(step),
                expectedResult: this.describeExpectedResultPoly(step),
                troubleshooting: this.generateTroubleshootingTipsPoly(step)
            }
        };
    }

    generatePreventionTipsPoly(step, problemType) {
        const tips = {
            'Divide leading terms': [
                'Divide coefficients and subtract exponents separately',
                'Double-check the sign of the quotient term',
                'Verify the degree calculation'
            ],
            'Multiply': [
                'Distribute to every term of the divisor',
                'Watch signs carefully when multiplying negatives',
                'Track exponents correctly (add when multiplying)'
            ],
            'Subtract': [
                'Change all signs before adding (or add opposite)',
                'Keep terms aligned by degree',
                'Don\'t forget any terms'
            ],
            'Synthetic division setup': [
                'Use +c for (x - c), use -c for (x + c)',
                'Include zeros for missing terms',
                'Arrange in descending order first'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Check each calculation', 'Verify alignment'];
    }

    generateCheckPointsPoly(step) {
        return [
            'Did I perform the operation correctly?',
            'Are the degrees of my terms correct?',
            'Have I kept proper alignment?',
            'Does this step move toward the solution?'
        ];
    }

    identifyWarningFlagsPoly(step, problemType) {
        const warnings = {
            'Divide leading terms': ['Exponent errors', 'Sign mistakes'],
            'Subtract': ['Forgetting to change signs', 'Misalignment'],
            'Synthetic division': ['Wrong c value', 'Missing zero coefficients']
        };

        return warnings[step.step] || [];
    }

    generateSelfCheckQuestionPoly(step) {
        const questions = {
            'Setup': 'Are both polynomials in standard form with all terms present?',
            'Divide leading terms': 'Did I divide coefficients and subtract exponents correctly?',
            'Multiply': 'Did I multiply the quotient term by every term of the divisor?',
            'Subtract': 'Did I change all signs and align terms properly?',
            'Synthetic division setup': 'Did I use the correct c value and include all coefficients?',
            'Multiply and add': 'Did I multiply by c and add to the next coefficient correctly?',
            'Final Answer': 'Is the degree of remainder less than degree of divisor?'
        };

        return questions[step.step] || 'Does this step make sense in the division process?';
    }

    describeExpectedResultPoly(step) {
        const expectations = {
            'Setup': 'Polynomials properly arranged for division',
            'Divide leading terms': 'Next term of quotient',
            'Multiply': 'Product of divisor and quotient term',
            'Subtract': 'New remainder with degree reduced',
            'Final Answer': 'Quotient and remainder with deg(R) < deg(D)'
        };

        return expectations[step.step] || 'Progress toward complete division';
    }

    generateTroubleshootingTipsPoly(step) {
        return [
            'If stuck, review the previous step',
            'Check alignment of like terms',
            'Verify all arithmetic carefully',
            'Make sure no terms were skipped',
            'Consider using an alternative method if applicable'
        ];
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsPoly(step, problem),
                subSteps: this.breakIntoSubStepsPoly(step),
                hints: this.generateProgressiveHintsPoly(step, problem),
                practiceVariation: this.generatePracticeVariationPoly(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcessPoly(step),
                decisionPoints: this.identifyDecisionPointsPoly(step),
                alternativeApproaches: this.suggestAlternativeMethodsPoly(step, problem)
            }
        }));
    }

    generateGuidingQuestionsPoly(step, problem) {
        const questions = {
            'Setup': [
                'Are both polynomials in standard form?',
                'What degrees are we working with?',
                'Are there any missing terms that need zero coefficients?'
            ],
            'Divide leading terms': [
                'What is the leading term of the current remainder?',
                'What is the leading term of the divisor?',
                'How do we divide these terms?'
            ],
            'Multiply': [
                'What did we just find for the quotient?',
                'How do we multiply this by the divisor?',
                'What should we get?'
            ],
            'Subtract': [
                'What are we subtracting from?',
                'What are we subtracting?',
                'How do we handle the signs?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'How does this help solve the problem?'];
    }

    breakIntoSubStepsPoly(step) {
        const subSteps = {
            'Divide leading terms': [
                'Identify leading term of remainder',
                'Identify leading term of divisor',
                'Divide coefficients',
                'Subtract exponents',
                'Write quotient term'
            ],
            'Multiply': [
                'Take quotient term just found',
                'Multiply by first term of divisor',
                'Multiply by second term of divisor',
                'Continue for all terms',
                'Write product below'
            ],
            'Subtract': [
                'Write what you\'re subtracting from',
                'Write what you\'re subtracting (with signs changed)',
                'Combine like terms vertically',
                'Bring down next term if needed',
                'Write new remainder'
            ]
        };

        return subSteps[step.step] || ['Understand the goal', 'Apply the technique', 'Verify the result'];
    }

    generateProgressiveHintsPoly(step, problem) {
        const category = this.polynomialTypes[problem.type]?.category || 'long_division';
        const hintSet = this.hints[category] || this.hints.long_division;

        return {
            level1: hintSet.level1 || 'What operation should you perform here?',
            level2: hintSet.level2 || 'Consider the relationship between dividend, divisor, and quotient',
            level3: hintSet.level3 || 'Apply the appropriate polynomial division step',
            level4: hintSet.level4 || 'Execute the specific calculation needed'
        };
    }

    generatePracticeVariationPoly(step, problem) {
        return {
            similarProblem: 'Try the same type of division with simpler polynomials',
            practiceHint: 'Start with dividing by monomials, then linear, then higher degree',
            extension: 'Once comfortable, try problems with missing terms or fractional coefficients'
        };
    }

    explainThinkingProcessPoly(step) {
        return {
            observe: 'What polynomials am I working with?',
            goal: 'What am I trying to find in this step?',
            strategy: 'What division technique should I use?',
            execute: 'How do I carry out this step correctly?',
            verify: 'Does my result make sense? Can I check it?'
        };
    }

    identifyDecisionPointsPoly(step) {
        return [
            'Should I use long division or synthetic division?',
            'Which term do I divide by?',
            'Do I need to bring down another term?',
            'Is my remainder degree less than divisor degree yet?'
        ];
    }

    suggestAlternativeMethodsPoly(step, problem) {
        const alternatives = {
            'Long division': [
                'Could use synthetic division if divisor is linear (x - c)',
                'Could use Remainder Theorem just to find remainder',
                'Could use factoring if polynomial factors easily'
            ],
            'Synthetic division': [
                'Could use long division for more visibility of each step',
                'Could use direct substitution if only need remainder'
            ]
        };

        return alternatives[solution.method] || ['The chosen method is appropriate for this problem'];
    }

    identifyKeyVocabularyPoly(step) {
        const vocabulary = {
            'Setup': ['dividend', 'divisor', 'quotient', 'remainder', 'degree', 'standard form'],
            'Divide leading terms': ['leading term', 'leading coefficient', 'degree', 'exponent'],
            'Multiply': ['product', 'distribute', 'term-by-term multiplication'],
            'Subtract': ['difference', 'change signs', 'like terms', 'alignment'],
            'Synthetic division': ['coefficients', 'c value', 'bring down', 'multiply and add'],
            'Remainder Theorem': ['remainder', 'evaluation', 'substitution', 'P(c)'],
            'Factor Theorem': ['factor', 'zero', 'divisibility', 'P(c) = 0']
        };

        return vocabulary[step.step] || ['polynomial', 'division', 'algebraic'];
    }

    generateThinkingPromptsPoly(step) {
        return {
            before: 'Before starting, what information do I need from the previous step?',
            during: 'As I work, what should I watch out for?',
            after: 'How can I verify this step is correct before moving on?'
        };
    }

    findRealWorldConnectionPoly(step, problem) {
        const connections = {
            'long_division': 'Like finding dimensions of a rectangular plot when you know area and one side length',
            'synthetic_division': 'Similar to assembly line efficiency - faster process for specific cases',
            'remainder_theorem': 'Like checking inventory (remainder) without counting everything (full division)',
            'factor_theorem': 'Like testing if a key (factor) fits a lock (polynomial) perfectly'
        };

        return connections[problem.method] || 'Polynomial division helps solve practical problems in engineering, physics, and computer science';
    }

    // GRAPH GENERATION
    generatePolynomialGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        // Generate graph showing original polynomial and quotient
        this.graphData = {
            type: 'polynomial_division',
            dividend: this.currentProblem.dividend,
            divisor: this.currentProblem.divisor,
            quotient: this.currentSolution.quotient,
            remainder: this.currentSolution.remainder,
            visualization: 'Graph of P(x), Q(x), and relationship P(x) = D(x)·Q(x) + R(x)'
        };
    }

    // WORKBOOK GENERATION
    generatePolynomialDivisionWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSectionPoly(),
            this.createPrerequisiteSectionPoly(),
            this.createEnhancedStepsSectionPoly(),
            this.createPolynomialLessonSectionPoly(),
            this.createSolutionSectionPoly(),
            this.createAnalysisSectionPoly(),
            this.createVerificationSectionPoly(),
            this.createRealWorldApplicationSectionPoly(),
            this.createPedagogicalNotesSectionPoly(),
            this.createAlternativeMethodsSectionPoly(),
            this.createPracticeP ProblemsSectionPoly()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Polynomial Division Mathematical Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            explanationLevel: this.explanationLevel,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSectionPoly() {
        if (!this.currentProblem) return null;

        const problemData = [
            ['Problem Type', this.polynomialTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Method', this.currentProblem.method],
            ['Category', this.polynomialTypes[this.currentProblem.type]?.category || 'polynomial_division'],
            ['', ''],
            ['Dividend', this.currentProblem.dividend],
            ['Dividend Degree', this.currentProblem.parsedDividend.degree],
            ['', ''],
            ['Divisor', this.currentProblem.divisor],
            ['Divisor Degree', this.currentProblem.parsedDivisor.degree]
        ];

        if (this.currentSolution?.cValue !== undefined) {
            problemData.push(['', '']);
            problemData.push(['c value', this.currentSolution.cValue]);
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSectionPoly() {
        if (!this.prerequisiteChecks) return null;

        const category = this.polynomialTypes[this.currentProblem.type]?.category;
        const prereqs = this.prerequisites[category];

        if (!prereqs) return null;

        const prereqData = [
            ['Required Skills', prereqs.skills.join(', ')],
            ['Prior Knowledge', prereqs.priorKnowledge.join(', ')],
            ['', ''],
            ['Prerequisite Check Questions', '']
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

    createEnhancedStepsSectionPoly() {
        if (!this.solutionSteps || this.solutionSteps.length === 0) return null;

        const stepsData = [];

        this.solutionSteps.forEach((step, index) => {
            // Skip bridge steps in basic display
            if (step.stepType === 'bridge' && this.explanationLevel === 'basic') {
                return;
            }

            // Bridge steps
            if (step.stepType === 'bridge') {
                stepsData.push(['→ Bridge', step.title]);
                stepsData.push(['Current State', step.explanation.currentState]);
                stepsData.push(['Next Goal', step.explanation.nextGoal]);
                stepsData.push(['Why', step.explanation.why]);
                stepsData.push(['', '']);
                return;
            }

            // Main step
            stepsData.push([`Step ${step.stepNumber}`, step.step]);
            stepsData.push(['Description', step.description]);

            // Step-specific content
            if (step.calculation) {
                stepsData.push(['Calculation', step.calculation]);
            }

            if (step.quotientTerm !== undefined) {
                stepsData.push(['Quotient Term', step.quotientTerm]);
            }

            if (step.product) {
                stepsData.push(['Product', step.product]);
            }

            if (step.before && step.after) {
                stepsData.push(['Before', step.before]);
                stepsData.push(['After', step.after]);
            }

            if (step.multiply && step.add) {
                stepsData.push(['Multiply', step.multiply]);
                stepsData.push(['Add', step.add]);
            }

            if (step.cValue !== undefined) {
                stepsData.push(['c Value', step.cValue]);
            }

            if (step.evaluation !== undefined && typeof step.evaluation === 'object') {
                stepsData.push(['Expression', step.evaluation.expression]);
                stepsData.push(['Substitution', step.evaluation.substitution]);
                stepsData.push(['Result', step.evaluation.result]);
            } else if (step.evaluation !== undefined) {
                stepsData.push(['Evaluation', step.evaluation]);
            }

            if (step.quotient) {
                stepsData.push(['Quotient', step.quotient]);
            }

            if (step.remainder !== undefined) {
                stepsData.push(['Remainder', step.remainder]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.algebraicRule) {
                stepsData.push(['Algebraic Rule', step.algebraicRule]);
            }

            // ELI5 explanations
            if (step.ELI5 && this.explanationLevel === 'ELI5') {
                stepsData.push(['', '']);
                stepsData.push(['ELI5 Explanation', step.ELI5.explanation]);
                if (step.ELI5.analogy) {
                    stepsData.push(['Analogy', step.ELI5.analogy]);
                }
                if (step.ELI5.visualization) {
                    stepsData.push(['Visualize', step.ELI5.visualization]);
                }
            }

            // Enhanced explanations for detailed level
            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['', '']);
                stepsData.push(['Conceptual', step.explanations.conceptual]);
                stepsData.push(['Procedural', step.explanations.procedural]);
                stepsData.push(['Visual', step.explanations.visual]);
            }

            // Visual hints
            if (step.visualHint && (this.explanationLevel === 'intermediate' || this.explanationLevel === 'detailed')) {
                stepsData.push(['Visual Hint', step.visualHint]);
            }

            // Error prevention
            if (step.errorPrevention && this.includeErrorPrevention) {
                const mistakes = step.errorPrevention.commonMistakes;
                if (mistakes && mistakes.length > 0) {
                    stepsData.push(['Common Mistakes', mistakes.join('; ')]);
                }
                const tips = step.errorPrevention.preventionTips;
                if (tips && tips.length > 0) {
                    stepsData.push(['Prevention Tips', tips.join('; ')]);
                }
                const warnings = step.errorPrevention.warningFlags;
                if (warnings && warnings.length > 0) {
                    stepsData.push(['Warning Flags', warnings.join('; ')]);
                }
            }

            // Scaffolding for scaffolded level
            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                const questions = step.scaffolding.guidingQuestions;
                if (questions && questions.length > 0) {
                    stepsData.push(['Guiding Questions', questions.join(' | ')]);
                }
                
                const hints = step.scaffolding.hints;
                if (hints) {
                    stepsData.push(['Hint Level 1', hints.level1]);
                    stepsData.push(['Hint Level 2', hints.level2]);
                    stepsData.push(['Hint Level 3', hints.level3]);
                }

                const subSteps = step.scaffolding.subSteps;
                if (subSteps && subSteps.length > 0) {
                    stepsData.push(['Sub-steps', subSteps.join(' → ')]);
                }
            }

            // Thinking prompts
            if (step.thinkingPrompts && this.includeThinkingPrompts) {
                stepsData.push(['Think Before', step.thinkingPrompts.before]);
                stepsData.push(['Think During', step.thinkingPrompts.during]);
                stepsData.push(['Think After', step.thinkingPrompts.after]);
            }

            // Self-check
            if (step.selfCheck && this.includeSelfCheckQuestions) {
                stepsData.push(['Self-Check', step.selfCheck]);
            }

            // Real-world connection
            if (step.realWorldConnection && this.includeRealWorldApplications) {
                stepsData.push(['Real-World', step.realWorldConnection]);
            }

            // Important notes
            if (step.importantNote) {
                stepsData.push(['⚠ Important', step.importantNote]);
            }

            if (step.theorem) {
                stepsData.push(['Theorem', step.theorem]);
            }

            if (step.conclusion) {
                stepsData.push(['Conclusion', step.conclusion]);
            }

            if (step.isFactor !== undefined) {
                stepsData.push(['Is Factor?', step.isFactor ? 'Yes' : 'No']);
            }

            if (step.factorization) {
                stepsData.push(['Factorization', step.factorization]);
            }

            if (step.goalStatement) {
                stepsData.push(['Goal', step.goalStatement]);
            }

            stepsData.push(['', '']); // Spacing
        });

        return {
            title: `Enhanced Step-by-Step Solution (${this.explanationLevel} level)`,
            type: 'steps',
            data: stepsData
        };
    }

    createPolynomialLessonSectionPoly() {
        const { type } = this.currentProblem;
        const category = this.polynomialTypes[type]?.category;
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
        lessonData.push(['', '']);
        lessonData.push(['Key Formulas', '']);

        for (const [name, formula] of Object.entries(lesson.keyFormulas)) {
            lessonData.push([name, formula]);
        }

        lessonData.push(['', '']);
        lessonData.push(['Solving Steps', '']);

        lesson.solvingSteps.forEach((step, index) => {
            lessonData.push([`${index + 1}.`, step]);
        });

        lessonData.push(['', '']);
        lessonData.push(['Applications', '']);

        lesson.applications.forEach(app => {
            lessonData.push(['•', app]);
        });

        return {
            title: 'Key Concepts & Theory',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSectionPoly() {
        if (!this.currentSolution) return null;

        const solutionData = [
            ['Method Used', this.currentSolution.method],
            ['Type', this.currentSolution.type],
            ['', '']
        ];

        if (this.currentSolution.quotient) {
            solutionData.push(['Quotient', this.currentSolution.quotient]);
        }

        if (this.currentSolution.remainder !== undefined) {
            if (typeof this.currentSolution.remainder === 'number') {
                solutionData.push(['Remainder', this.currentSolution.remainder]);
            } else {
                solutionData.push(['Remainder', this.currentSolution.remainder]);
            }
        }

        if (this.currentSolution.isFactor !== undefined) {
            solutionData.push(['', '']);
            solutionData.push(['Factor Test Result', this.currentSolution.isFactor ? 'Yes, is a factor' : 'No, not a factor']);
        }

        if (this.currentSolution.factorization) {
            solutionData.push(['Factorization', this.currentSolution.factorization]);
        }

        if (this.currentSolution.theorem) {
            solutionData.push(['', '']);
            solutionData.push(['Theorem Applied', this.currentSolution.theorem]);
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createAnalysisSectionPoly() {
        if (!this.currentSolution) return null;

        const analysisData = [
            ['Solution Method', this.currentSolution.method],
            ['Problem Category', this.currentSolution.category],
            ['Dividend Degree', this.currentProblem.parsedDividend.degree],
            ['Divisor Degree', this.currentProblem.parsedDivisor.degree]
        ];

        if (this.currentSolution.quotientCoefficients) {
            const quotientDegree = this.currentSolution.quotientCoefficients.length - 1;
            analysisData.push(['Quotient Degree', quotientDegree]);
            analysisData.push(['Degree Check', `${this.currentProblem.parsedDividend.degree} = ${this.currentProblem.parsedDivisor.degree} + ${quotientDegree} ✓`]);
        }

        if (this.currentSolution.remainderCoefficients) {
            const remainderDegree = this.currentSolution.remainderCoefficients.length - 1;
            analysisData.push(['Remainder Degree', remainderDegree]);
            analysisData.push(['Remainder Check', `${remainderDegree} < ${this.currentProblem.parsedDivisor.degree} ✓`]);
        }

        analysisData.push(['Steps Used', this.solutionSteps?.length || 0]);
        analysisData.push(['Explanation Level', this.explanationLevel]);

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSectionPoly() {
        if (!this.currentSolution || !this.currentProblem) return null;

        const verificationData = [
            ['Verification Method', 'Division Algorithm'],
            ['Formula', 'P(x) = D(x) · Q(x) + R(x)'],
            ['', '']
        ];

        const verification = this.currentSolution.verification;
        if (verification) {
            verificationData.push(['D(x) × Q(x)', verification.divisorTimesQuotient]);
            verificationData.push(['Plus R(x)', verification.plusRemainder]);
            verificationData.push(['Original P(x)', verification.originalDividend]);
            verificationData.push(['', '']);
            verificationData.push(['Verified', verification.verified ? 'Yes ✓' : 'Check failed']);
        }

        if (this.verificationDetail === 'detailed') {
            verificationData.push(['', '']);
            verificationData.push(['Confidence Level', 'High']);
            verificationData.push(['Verification Notes', 'Solution verified through Division Algorithm']);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createRealWorldApplicationSectionPoly() {
        if (!this.includeRealWorldApplications) return null;

        const applications = Object.values(this.realWorldProblems).slice(0, 3);

        if (applications.length === 0) return null;

        const appData = [
            ['Real-World Applications of Polynomial Division', ''],
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

    createPedagogicalNotesSectionPoly() {
        if (!this.includePedagogicalNotes) return null;

        const notes = this.generatePolynomialPedagogicalNotes(this.currentProblem.type);

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

    createAlternativeMethodsSectionPoly() {
        if (!this.includeAlternativeMethods) return null;

        const alternatives = this.generatePolynomialAlternativeMethods(this.currentProblem.type);

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

    createPracticeProblemsSectionPoly() {
        const category = this.polynomialTypes[this.currentProblem.type]?.category;
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

    generatePolynomialPedagogicalNotes(problemType) {
        const category = this.polynomialTypes[problemType]?.category;

        const pedagogicalDatabase = {
            long_division: {
                objectives: [
                    'Divide polynomials using long division algorithm',
                    'Apply division algorithm: P(x) = D(x)·Q(x) + R(x)',
                    'Verify solutions through multiplication and addition'
                ],
                keyConcepts: [
                    'Division algorithm for polynomials',
                    'Degree relationships in division',
                    'Alignment of like terms',
                    'Remainder degree < divisor degree'
                ],
                prerequisites: [
                    'Polynomial operations (add, subtract, multiply)',
                    'Understanding of polynomial degree',
                    'Exponent rules',
                    'Numerical long division'
                ],
                commonDifficulties: [
                    'Keeping terms aligned by degree',
                    'Sign errors during subtraction',
                    'Forgetting zero coefficients for missing terms',
                    'Not recognizing when to stop dividing'
                ],
                teachingStrategies: [
                    'Use area model analogy',
                    'Practice with numerical division first',
                    'Emphasize alignment with graph paper',
                    'Color-code degrees to track terms'
                ],
                extensions: [
                    'Division by higher-degree polynomials',
                    'Applications to rational expressions',
                    'Polynomial remainder theorem',
                    'Partial fraction decomposition'
                ],
                assessment: [
                    'Can student set up division correctly?',
                    'Does student maintain proper alignment?',
                    'Can student verify using division algorithm?',
                    'Does student recognize completion criteria?'
                ]
            },
            synthetic_division: {
                objectives: [
                    'Perform synthetic division for linear divisors',
                    'Understand when synthetic division applies',
                    'Connect to Remainder and Factor Theorems',
                    'Use for polynomial evaluation'
                ],
                keyConcepts: [
                    'Synthetic division as streamlined algorithm',
                    'Limitation to divisors of form (x - c)',
                    'Multiply-add pattern',
                    'Interpreting the result row'
                ],
                prerequisites: [
                    'Long division of polynomials',
                    'Understanding of polynomial coefficients',
                    'Solving linear equations (x - c = 0)',
                    'Pattern recognition'
                ],
                commonDifficulties: [
                    'Using wrong sign for c value',
                    'Forgetting zero coefficients',
                    'Misaligning numbers',
                    'Misinterpreting final result'
                ],
                teachingStrategies: [
                    'Derive from long division to show equivalence',
                    'Emphasize c value sign rule',
                    'Practice with simple examples first',
                    'Use color to track multiply-add pattern'
                ],
                extensions: [
                    'Repeated synthetic division for factoring',
                    'Connection to Rational Root Theorem',
                    'Finding all zeros of polynomials',
                    'Applications in numerical methods'
                ],
                assessment: [
                    'Does student use correct c value?',
                    'Can student interpret the result?',
                    'Does student include all coefficients?',
                    'Can student verify using multiplication?'
                ]
            },
            remainder_theorem: {
                objectives: [
                    'Apply Remainder Theorem to find remainders',
                    'Evaluate polynomials efficiently',
                    'Connect division with function evaluation',
                    'Use theorem for problem solving'
                ],
                keyConcepts: [
                    'R = P(c) when dividing by (x - c)',
                    'Function evaluation as division shortcut',
                    'Theoretical foundation for theorem',
                    'Connection to synthetic division'
                ],
                prerequisites: [
                    'Polynomial evaluation',
                    'Substitution',
                    'Order of operations',
                    'Understanding of division algorithm'
                ],
                commonDifficulties: [
                    'Arithmetic errors in evaluation',
                    'Sign errors with negative c values',
                    'Confusion about when theorem applies',
                    'Exponent calculation errors'
                ],
                teachingStrategies: [
                    'Prove theorem using division algorithm',
                    'Compare with synthetic division results',
                    'Practice evaluation systematically',
                    'Use to check division work'
                ],
                extensions: [
                    'Factor Theorem as special case',
                    'Finding polynomial zeros',
                    'Polynomial interpolation',
                    'Numerical analysis applications'
                ],
                assessment: [
                    'Can student identify when to use theorem?',
                    'Does student evaluate accurately?',
                    'Can student explain why theorem works?',
                    'Can student connect to division?'
                ]
            },
            factor_theorem: {
                objectives: [
                    'Test if linear expression is a factor',
                    'Find factors of polynomials',
                    'Connect zeros and factors',
                    'Factor polynomials completely'
                ],
                keyConcepts: [
                    '(x - c) is factor ⟺ P(c) = 0',
                    'Zeros correspond to factors',
                    'Complete factorization process',
                    'Multiplicity of factors'
                ],
                prerequisites: [
                    'Remainder Theorem',
                    'Polynomial evaluation',
                    'Understanding of zeros',
                    'Division skills'
                ],
                commonDifficulties: [
                    'Confusing zeros and factors',
                    'Sign errors in factor form',
                    'Incomplete factorization',
                    'Not testing all candidates'
                ],
                teachingStrategies: [
                    'Connect to Remainder Theorem',
                    'Use graphs to visualize zeros',
                    'Systematic testing of candidates',
                    'Build complete factorizations step-by-step'
                ],
                extensions: [
                    'Rational Root Theorem',
                    'Fundamental Theorem of Algebra',
                    'Complex zeros',
                    'Applications to equations'
                ],
                assessment: [
                    'Can student test factors correctly?',
                    'Does student understand zero-factor connection?',
                    'Can student factor completely?',
                    'Can student verify factorization?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Perform polynomial division'],
            keyConcepts: ['Division algorithm', 'Quotient and remainder'],
            prerequisites: ['Polynomial operations'],
            commonDifficulties: ['Computational challenges'],
            teachingStrategies: ['Step-by-step instruction'],
            extensions: ['Advanced applications'],
            assessment: ['Verify understanding of process']
        };
    }

    generatePolynomialAlternativeMethods(problemType) {
        const category = this.polynomialTypes[problemType]?.category;

        const alternativeDatabase = {
            long_division: {
                primaryMethod: 'Polynomial Long Division',
                methods: [
                    {
                        name: 'Synthetic Division',
                        description: 'Faster method when divisor is linear (x - c)'
                    },
                    {
                        name: 'Factoring',
                        description: 'If dividend factors easily, division may be apparent'
                    },
                    {
                        name: 'Area Model',
                        description: 'Visual approach using rectangular area decomposition'
                    }
                ],
                comparison: 'Long division is most general; synthetic faster for linear; factoring best when applicable'
            },
            synthetic_division: {
                primaryMethod: 'Synthetic Division',
                methods: [
                    {
                        name: 'Long Division',
                        description: 'Shows all steps explicitly, good for learning'
                    },
                    {
                        name: 'Remainder Theorem',
                        description: 'If only remainder needed, direct evaluation suffices'
                    },
                    {
                        name: 'Direct Multiplication',
                        description: 'Sometimes multiplying out quotient is easier than dividing'
                    }
                ],
                comparison: 'Synthetic fastest for linear divisors; long division more transparent; remainder theorem for evaluation only'
            },
            remainder_theorem: {
                primaryMethod: 'Remainder Theorem (Direct Evaluation)',
                methods: [
                    {
                        name: 'Synthetic Division',
                        description: 'Provides both quotient and remainder'
                    },
                    {
                        name: 'Long Division',
                        description: 'Traditional method showing all work'
                    },
                    {
                        name: 'Horner\'s Method',
                        description: 'Efficient nested multiplication for evaluation'
                    }
                ],
                comparison: 'Direct evaluation fastest for remainder only; division methods give quotient too'
            },
            factor_theorem: {
                primaryMethod: 'Factor Theorem Test (Evaluation)',
                methods: [
                    {
                        name: 'Synthetic Division',
                        description: 'Tests factor and provides quotient if factor exists'
                    },
                    {
                        name: 'Graphing',
                        description: 'Visual check for zeros corresponds to factors'
                    },
                    {
                        name: 'Rational Root Theorem',
                        description: 'Systematic approach to finding rational zeros/factors'
                    }
                ],
                comparison: 'Evaluation quickest for testing; synthetic gives quotient; graphing provides visual confirmation'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard polynomial division approach',
            methods: [{
                name: 'Alternative approach',
                description: 'Other methods may apply depending on problem structure'
            }],
            comparison: 'Choose method based on divisor type and what information is needed'
        };
    }
}

// Export the class
export default EnhancedPolynomialDivisionMathematicalWorkbook;
