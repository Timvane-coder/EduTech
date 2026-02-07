// Enhanced Simplifying Rational Expressions Mathematical Workbook
import * as math from 'mathjs';

export class EnhancedSimplifyingRationalsWorkbook {
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
        this.initializeRationalTypes();
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
        this.initializeRationalLessons();
        this.initializeFactoringPatterns();
        this.initializeCommonFactors();
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

    initializeRationalLessons() {
        this.lessons = {
            basic_simplification: {
                title: "Basic Simplification of Rational Expressions",
                concepts: [
                    "Rational expression: ratio of two polynomials",
                    "Simplify by factoring and canceling common factors",
                    "Only cancel factors, never terms",
                    "Express answer in simplest form"
                ],
                theory: "A rational expression is simplified when numerator and denominator have no common factors other than 1 or -1.",
                keyFormulas: {
                    "Definition": "Rational expression = P(x)/Q(x) where P, Q are polynomials",
                    "Simplification": "Factor completely, then cancel common factors",
                    "Restriction": "Denominator ≠ 0"
                },
                simplificationSteps: [
                    "Factor numerator completely",
                    "Factor denominator completely",
                    "Identify common factors",
                    "Cancel common factors (write = 1)",
                    "State restrictions (values that make denominator = 0)",
                    "Write simplified form"
                ],
                applications: [
                    "Physics: velocity, acceleration formulas",
                    "Chemistry: concentration calculations",
                    "Economics: average cost functions",
                    "Engineering: efficiency ratios"
                ]
            },

            monomial_denominators: {
                title: "Rational Expressions with Monomial Denominators",
                concepts: [
                    "Monomial: single term (ax^n)",
                    "Simplify each term separately",
                    "Reduce coefficients and subtract exponents",
                    "Simplest rational expressions"
                ],
                theory: "When denominator is a monomial, divide each term of numerator by the denominator using laws of exponents.",
                keyFormulas: {
                    "Division Rule": "x^a / x^b = x^(a-b)",
                    "Coefficient Division": "(a/b) × (x^m/x^n) = (a/b)x^(m-n)",
                    "Multiple Terms": "(ax^m + bx^n) / (cx^p) = (a/c)x^(m-p) + (b/c)x^(n-p)"
                },
                simplificationSteps: [
                    "Identify monomial denominator",
                    "Divide each term of numerator by denominator",
                    "Simplify coefficients",
                    "Apply exponent rules (subtract exponents)",
                    "Express with positive exponents if requested"
                ],
                applications: [
                    "Simplifying area to perimeter ratios",
                    "Rate calculations",
                    "Unit conversions"
                ]
            },

            binomial_factors: {
                title: "Simplifying with Binomial Factors",
                concepts: [
                    "Binomial: two-term polynomial (ax + b)",
                    "Factor out GCF first",
                    "Look for common binomial factors",
                    "Cancel identical binomial factors"
                ],
                theory: "Binomial factors can appear in both numerator and denominator. Factor completely to identify them.",
                keyFormulas: {
                    "Common Binomial": "(ax + b) appears in both",
                    "Cancellation": "(ax + b)/(ax + b) = 1",
                    "GCF First": "Always factor out GCF before looking for other patterns"
                },
                simplificationSteps: [
                    "Factor out GCF from numerator",
                    "Factor out GCF from denominator",
                    "Identify remaining binomial factors",
                    "Cancel common binomial factors",
                    "State restrictions"
                ],
                examples: [
                    "(2x + 4)/(x + 2) = 2(x + 2)/(x + 2) = 2",
                    "(3x - 6)/(x - 2) = 3(x - 2)/(x - 2) = 3",
                    "(x² - 4)/(x - 2) = (x-2)(x+2)/(x-2) = x + 2"
                ]
            },

            trinomial_factoring: {
                title: "Simplifying with Trinomial Factoring",
                concepts: [
                    "Trinomial: three-term polynomial",
                    "Factor trinomials in numerator and denominator",
                    "Common patterns: x² + bx + c, ax² + bx + c",
                    "Look for difference of squares, perfect squares"
                ],
                theory: "Many rational expressions require factoring trinomials to reveal common factors that can be canceled.",
                keyFormulas: {
                    "Standard Form": "ax² + bx + c",
                    "Factored Form": "(mx + p)(nx + q)",
                    "Product-Sum Method": "Find two numbers that multiply to ac and add to b"
                },
                factoringPatterns: {
                    "Simple Trinomial": "x² + bx + c = (x + m)(x + n) where mn = c, m+n = b",
                    "General Trinomial": "ax² + bx + c → factor by grouping or AC method",
                    "Difference of Squares": "a² - b² = (a + b)(a - b)",
                    "Perfect Square": "a² + 2ab + b² = (a + b)²"
                },
                simplificationSteps: [
                    "Factor numerator trinomial",
                    "Factor denominator trinomial",
                    "Identify common factors",
                    "Cancel common factors",
                    "Check for further factoring",
                    "State restrictions"
                ],
                applications: [
                    "Projectile motion equations",
                    "Quadratic optimization problems",
                    "Area and perimeter relationships"
                ]
            },

            special_products: {
                title: "Special Products and Factoring Patterns",
                concepts: [
                    "Difference of squares: a² - b² = (a+b)(a-b)",
                    "Perfect square trinomial: a² ± 2ab + b² = (a ± b)²",
                    "Sum/difference of cubes: a³ ± b³",
                    "Recognizing patterns speeds simplification"
                ],
                theory: "Special products have recognizable patterns that allow quick factoring without trial and error.",
                keyFormulas: {
                    "Difference of Squares": "a² - b² = (a + b)(a - b)",
                    "Perfect Square Trinomial": "a² + 2ab + b² = (a + b)²",
                    "Sum of Cubes": "a³ + b³ = (a + b)(a² - ab + b²)",
                    "Difference of Cubes": "a³ - b³ = (a - b)(a² + ab + b²)"
                },
                recognitionTips: [
                    "Two squares with subtraction → difference of squares",
                    "Perfect square terms with middle term → check for perfect square trinomial",
                    "Two cubes with addition/subtraction → sum/difference of cubes",
                    "Always check if terms are perfect squares or cubes"
                ],
                simplificationSteps: [
                    "Identify special product pattern",
                    "Apply appropriate factoring formula",
                    "Check both numerator and denominator",
                    "Cancel common factors",
                    "State restrictions"
                ]
            },

            gcf_factoring: {
                title: "Greatest Common Factor (GCF) Method",
                concepts: [
                    "GCF: largest factor common to all terms",
                    "Always factor out GCF first",
                    "Includes both numerical and variable parts",
                    "Simplifies further factoring"
                ],
                theory: "Factoring out the GCF is the first step in factoring any polynomial. It reveals simpler expressions and common factors.",
                keyFormulas: {
                    "GCF": "Greatest Common Factor of all terms",
                    "Factoring Out": "ab + ac = a(b + c)",
                    "Variable GCF": "x^m + x^n = x^min(m,n)(x^(m-min) + x^(n-min))"
                },
                findingGCF: [
                    "Find GCF of coefficients",
                    "Find lowest power of each variable",
                    "Combine numerical and variable GCF",
                    "Factor out completely"
                ],
                simplificationSteps: [
                    "Find GCF of numerator terms",
                    "Factor out GCF from numerator",
                    "Find GCF of denominator terms",
                    "Factor out GCF from denominator",
                    "Cancel common GCF factors",
                    "Continue factoring if possible"
                ],
                examples: [
                    "6x² + 9x = 3x(2x + 3)",
                    "4x³ - 8x² + 12x = 4x(x² - 2x + 3)",
                    "(6x² + 9x)/(3x) = 3x(2x + 3)/(3x) = 2x + 3"
                ]
            },

            opposite_factors: {
                title: "Opposite Factors",
                concepts: [
                    "Opposite factors: differ only in sign",
                    "a - b and b - a are opposites",
                    "(a - b) = -(b - a)",
                    "Rewrite to reveal cancellation"
                ],
                theory: "Factors that are opposites can be made identical by factoring out -1, allowing cancellation.",
                keyFormulas: {
                    "Opposite Relationship": "a - b = -(b - a)",
                    "Factoring -1": "-(b - a) can be written as (-1)(b - a)",
                    "Cancellation": "(a - b)/(b - a) = -1"
                },
                recognitionTips: [
                    "Look for same terms in different order",
                    "Check if one factor is negative of another",
                    "Binomials with switched terms are opposites"
                ],
                simplificationSteps: [
                    "Identify opposite factors",
                    "Factor out -1 from one factor",
                    "Rewrite to show identical factors",
                    "Cancel common factors",
                    "Include the -1 in final answer"
                ],
                examples: [
                    "(x - 3)/(3 - x) = (x - 3)/(-(x - 3)) = -1",
                    "(2 - x)/(x - 2) = -(x - 2)/(x - 2) = -1",
                    "(x² - 9)/(3 - x) = (x-3)(x+3)/(-(x-3)) = -(x + 3) = -x - 3"
                ]
            },

            complex_rational_expressions: {
                title: "Complex Rational Expressions",
                concepts: [
                    "Complex rational: fraction within a fraction",
                    "Two main methods: combine then divide, or multiply by LCD",
                    "Simplify numerator and denominator separately first",
                    "Then divide (multiply by reciprocal)"
                ],
                theory: "Complex rational expressions have fractions in numerator or denominator. Simplify by combining into single fractions, then dividing.",
                keyFormulas: {
                    "Definition": "(a/b)/(c/d) = (a/b) × (d/c) = ad/bc",
                    "LCD Method": "Multiply top and bottom by LCD of all small fractions",
                    "Combine Method": "Get single fraction in numerator and denominator, then divide"
                },
                methods: {
                    "Method 1 - Multiply by LCD": [
                        "Find LCD of all small fractions",
                        "Multiply numerator by LCD",
                        "Multiply denominator by LCD",
                        "Simplify resulting expression"
                    ],
                    "Method 2 - Combine then Divide": [
                        "Combine numerator into single fraction",
                        "Combine denominator into single fraction",
                        "Divide: multiply by reciprocal of denominator",
                        "Simplify"
                    ]
                },
                simplificationSteps: [
                    "Identify all small fractions",
                    "Choose method (LCD or combine)",
                    "Apply method systematically",
                    "Simplify result",
                    "State restrictions"
                ]
            },

            restrictions: {
                title: "Domain Restrictions",
                concepts: [
                    "Restriction: value that makes denominator zero",
                    "Find by setting denominator = 0",
                    "State restrictions even after simplification",
                    "Domain: all real numbers except restrictions"
                ],
                theory: "Rational expressions are undefined when denominator equals zero. These restrictions persist even after simplification.",
                keyFormulas: {
                    "Finding Restrictions": "Set denominator = 0, solve for x",
                    "Domain Notation": "{x | x ≠ restricted values}",
                    "Interval Notation": "Use ∪ to combine intervals"
                },
                findingRestrictions: [
                    "Look at ORIGINAL denominator (before simplification)",
                    "Set denominator equal to zero",
                    "Solve for x",
                    "List all values that make denominator = 0",
                    "State these as restrictions"
                ],
                notation: [
                    "Verbal: 'x cannot equal 3'",
                    "Inequality: 'x ≠ 3'",
                    "Set: '{x | x ≠ 3}'",
                    "Interval: '(-∞, 3) ∪ (3, ∞)'"
                ],
                importance: [
                    "Prevents division by zero",
                    "Defines domain of expression",
                    "Important even after simplification",
                    "Affects graphs of rational functions"
                ]
            }
        };
    }

    initializeRationalTypes() {
        this.rationalTypes = {
            monomial_denominator: {
                patterns: [
                    /\(.*\)\/\d*x\^?\d*/,
                    /monomial.*denominator/i
                ],
                solver: this.simplifyMonomialDenominator.bind(this),
                name: 'Monomial Denominator Simplification',
                category: 'monomial',
                description: 'Simplifies rational expressions with single-term denominators',
                difficulty: 'easy'
            },

            common_monomial_factor: {
                patterns: [
                    /gcf/i,
                    /greatest.*common.*factor/i,
                    /common.*factor/i
                ],
                solver: this.simplifyCommonMonomialFactor.bind(this),
                name: 'Common Monomial Factor',
                category: 'gcf',
                description: 'Factor out GCF from numerator and denominator',
                difficulty: 'easy'
            },

            common_binomial_factor: {
                patterns: [
                    /binomial.*factor/i,
                    /common.*binomial/i
                ],
                solver: this.simplifyCommonBinomialFactor.bind(this),
                name: 'Common Binomial Factor',
                category: 'binomial',
                description: 'Cancel common binomial factors',
                difficulty: 'medium'
            },

            difference_of_squares: {
                patterns: [
                    /x\^2.*-.*\d+/,
                    /\d+.*-.*x\^2/,
                    /difference.*squares/i
                ],
                solver: this.simplifyDifferenceOfSquares.bind(this),
                name: 'Difference of Squares',
                category: 'special_products',
                description: 'Factor and simplify using a² - b² = (a+b)(a-b)',
                difficulty: 'medium'
            },

            trinomial_factoring: {
                patterns: [
                    /x\^2.*[+\-].*x.*[+\-]/,
                    /trinomial/i,
                    /quadratic/i
                ],
                solver: this.simplifyTrinomial.bind(this),
                name: 'Trinomial Factoring',
                category: 'trinomial',
                description: 'Factor and simplify trinomials',
                difficulty: 'medium'
            },

            perfect_square_trinomial: {
                patterns: [
                    /perfect.*square/i
                ],
                solver: this.simplifyPerfectSquare.bind(this),
                name: 'Perfect Square Trinomial',
                category: 'special_products',
                description: 'Factor and simplify perfect square trinomials',
                difficulty: 'medium'
            },

            opposite_factors: {
                patterns: [
                    /opposite/i,
                    /\-.*\(/
                ],
                solver: this.simplifyOppositeFactor.bind(this),
                name: 'Opposite Factors',
                category: 'opposite',
                description: 'Simplify expressions with opposite binomial factors',
                difficulty: 'medium'
            },

            complex_rational: {
                patterns: [
                    /complex.*rational/i,
                    /fraction.*fraction/i
                ],
                solver: this.simplifyComplexRational.bind(this),
                name: 'Complex Rational Expression',
                category: 'complex',
                description: 'Simplify fractions within fractions',
                difficulty: 'hard'
            },

            sum_difference_cubes: {
                patterns: [
                    /x\^3.*[+\-].*\d+/,
                    /cube/i
                ],
                solver: this.simplifyCubes.bind(this),
                name: 'Sum or Difference of Cubes',
                category: 'special_products',
                description: 'Factor and simplify cubic expressions',
                difficulty: 'hard'
            },

            multiple_factors: {
                patterns: [
                    /multiple.*factor/i,
                    /complex.*factor/i
                ],
                solver: this.simplifyMultipleFactors.bind(this),
                name: 'Multiple Common Factors',
                category: 'multiple',
                description: 'Expressions with multiple types of common factors',
                difficulty: 'hard'
            }
        };
    }

    initializeFactoringPatterns() {
        this.factoringPatterns = {
            gcf: {
                check: (expression) => {
                    // Check if terms have common factors
                    return true; // Always check GCF first
                },
                factor: (expression) => {
                    return this.factorGCF(expression);
                },
                description: "Factor out Greatest Common Factor"
            },

            difference_of_squares: {
                check: (expression) => {
                    // Check if expression matches a² - b²
                    return /^[a-z]\^2\s*-\s*\d+$/.test(expression) ||
                           /^\d+\s*-\s*[a-z]\^2$/.test(expression);
                },
                factor: (expression) => {
                    return this.factorDifferenceOfSquares(expression);
                },
                description: "a² - b² = (a + b)(a - b)"
            },

            perfect_square_trinomial: {
                check: (expression) => {
                    // Check if trinomial is perfect square
                    return this.isPerfectSquareTrinomial(expression);
                },
                factor: (expression) => {
                    return this.factorPerfectSquare(expression);
                },
                description: "a² + 2ab + b² = (a + b)²"
            },

            trinomial: {
                check: (expression) => {
                    // Check if expression is trinomial
                    return /[a-z]\^2.*[+\-].*[a-z].*[+\-]/.test(expression);
                },
                factor: (expression) => {
                    return this.factorTrinomial(expression);
                },
                description: "ax² + bx + c = (mx + p)(nx + q)"
            },

            grouping: {
                check: (expression) => {
                    // Check if expression has 4 terms
                    const terms = expression.split(/[+\-]/).length;
                    return terms === 4;
                },
                factor: (expression) => {
                    return this.factorByGrouping(expression);
                },
                description: "Group terms and factor out common factors"
            },

            sum_of_cubes: {
                check: (expression) => {
                    return /[a-z]\^3\s*\+\s*\d+/.test(expression);
                },
                factor: (expression) => {
                    return this.factorSumOfCubes(expression);
                },
                description: "a³ + b³ = (a + b)(a² - ab + b²)"
            },

            difference_of_cubes: {
                check: (expression) => {
                    return /[a-z]\^3\s*-\s*\d+/.test(expression);
                },
                factor: (expression) => {
                    return this.factorDifferenceOfCubes(expression);
                },
                description: "a³ - b³ = (a - b)(a² + ab + b²)"
            }
        };
    }

    initializeCommonFactors() {
        this.commonFactorExamples = {
            numerical: [
                { expression: "6x + 9", gcf: "3", factored: "3(2x + 3)" },
                { expression: "12x² - 18x", gcf: "6x", factored: "6x(2x - 3)" },
                { expression: "15x³ + 25x² - 10x", gcf: "5x", factored: "5x(3x² + 5x - 2)" }
            ],
            variable: [
                { expression: "x³ + x²", gcf: "x²", factored: "x²(x + 1)" },
                { expression: "4x⁵ - 8x³", gcf: "4x³", factored: "4x³(x² - 2)" },
                { expression: "x²y + xy²", gcf: "xy", factored: "xy(x + y)" }
            ],
            binomial: [
                { expression: "2(x + 3) + 5(x + 3)", gcf: "(x + 3)", factored: "(x + 3)(2 + 5) = 7(x + 3)" },
                { expression: "(x - 2)² + 3(x - 2)", gcf: "(x - 2)", factored: "(x - 2)(x - 2 + 3) = (x - 2)(x + 1)" }
            ]
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            monomial: {
                'Divide each term': [
                    'Forgetting to divide all terms in numerator',
                    'Not reducing coefficients completely',
                    'Incorrect exponent subtraction',
                    'Leaving negative exponents when positive required'
                ],
                'Simplify exponents': [
                    'Adding instead of subtracting exponents',
                    'Forgetting that x^a / x^b = x^(a-b)',
                    'Errors with x^0 = 1'
                ]
            },
            gcf: {
                'Find GCF': [
                    'Not finding the complete GCF',
                    'Missing variable factors in GCF',
                    'Finding GCF of only some terms',
                    'Incorrect GCF calculation'
                ],
                'Factor out GCF': [
                    'Factoring out less than the full GCF',
                    'Sign errors when factoring',
                    'Forgetting to factor from all terms'
                ]
            },
            binomial: {
                'Cancel common factors': [
                    'Canceling terms instead of factors (biggest mistake!)',
                    'Canceling only part of a factor',
                    'Forgetting that (x+2)/(x+2) = 1, not 0',
                    'Canceling before factoring completely'
                ],
                'Factor binomials': [
                    'Not recognizing common binomial factors',
                    'Sign errors in binomials',
                    'Incomplete factoring'
                ]
            },
            trinomial: {
                'Factor trinomial': [
                    'Incorrect factoring of trinomial',
                    'Sign errors in factors',
                    'Missing factoring patterns',
                    'Not checking factorization by multiplying'
                ],
                'Cancel factors': [
                    'Attempting to cancel before factoring',
                    'Canceling terms instead of factors',
                    'Missing common factors after trinomial factoring'
                ]
            },
            special_products: {
                'Recognize pattern': [
                    'Not recognizing difference of squares',
                    'Confusing sum of squares with difference',
                    'Missing perfect square trinomial pattern',
                    'Incorrectly identifying special products'
                ],
                'Apply formula': [
                    'Incorrect application of special product formula',
                    'Sign errors in factoring',
                    'Forgetting parts of the formula'
                ]
            },
            opposite: {
                'Identify opposites': [
                    'Not recognizing opposite factors',
                    'Forgetting that a-b = -(b-a)',
                    'Sign errors when dealing with opposites'
                ],
                'Factor out -1': [
                    'Incorrect factoring of -1',
                    'Losing the negative sign',
                    'Not simplifying completely'
                ]
            },
            restrictions: {
                'Find restrictions': [
                    'Forgetting to state restrictions',
                    'Finding restrictions from simplified form instead of original',
                    'Incorrect solution when setting denominator = 0',
                    'Missing some restrictions'
                ],
                'State domain': [
                    'Incorrect domain notation',
                    'Forgetting restrictions in final answer'
                ]
            },
            general: {
                'CRITICAL - Terms vs Factors': [
                    'NEVER cancel terms! Only cancel factors!',
                    'Example WRONG: (x+2)/(x+3) ≠ 2/3 (cannot cancel x\'s - they are terms!)',
                    'Example WRONG: (x²+3x)/(x) ≠ x+3 until you factor: x(x+3)/x = x+3 ✓',
                    'Must factor first to create factors that can cancel'
                ]
            }
        };

        this.errorPrevention = {
            terms_vs_factors: {
                reminder: 'CRITICAL: Only cancel FACTORS, never TERMS! If not multiplying, cannot cancel.',
                method: 'Factor completely first, then look for common factors to cancel',
                visualCheck: 'Draw parentheses around each factor before canceling'
            },
            complete_factoring: {
                reminder: 'Always factor completely before attempting to cancel',
                method: 'Check numerator and denominator separately for all factoring possibilities'
            },
            gcf_first: {
                reminder: 'Always look for and factor out GCF before other factoring methods',
                method: 'Check each term for common numerical and variable factors'
            },
            verify_factoring: {
                reminder: 'Multiply factors back together to verify factoring is correct',
                method: 'Use FOIL or distribution to check your factorization'
            },
            restrictions: {
                reminder: 'Find restrictions from ORIGINAL denominator before simplifying',
                method: 'Set original denominator = 0 and solve'
            },
            opposite_factors: {
                reminder: 'Check for opposite binomial factors that can be rewritten',
                method: 'Factor out -1 from one to make them identical'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Understanding why factoring reveals cancellable parts',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Exact steps to factor and cancel',
                language: 'step-by-step instructions'
            },
            visual: {
                focus: 'Seeing factors and cancellation visually',
                language: 'visual and spatial metaphors'
            },
            algebraic: {
                focus: 'Formal algebraic properties and rules',
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
                vocabulary: 'explain like I\'m 5 years old',
                detail: 'every tiny step with analogies',
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
                examples: 'carefully sequenced difficulty'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            average_speed: {
                scenario: "Calculating average speed with varying conditions",
                expression: "Total distance / Total time = (d₁ + d₂)/(t₁ + t₂)",
                examples: [
                    "If you drive 120 miles in 2 hours, then 90 miles in 3 hours, average speed = (120+90)/(2+3) = 210/5 = 42 mph",
                    "Simplifying speed ratios often involves rational expressions"
                ],
                context: "Average rate calculations require simplifying rational expressions"
            },
            
            work_rate: {
                scenario: "Combined work rates",
                expression: "1/(1/r₁ + 1/r₂) = combined rate",
                examples: [
                    "If person A takes 3 hours and person B takes 6 hours to complete a job alone",
                    "Combined rate = 1/(1/3 + 1/6) = 1/(3/6) = 2 hours"
                ],
                context: "Work problems involve complex rational expressions"
            },

            scale_models: {
                scenario: "Area and volume scaling",
                expression: "Area scale factor = (length scale)², Volume scale = (length scale)³",
                examples: [
                    "If model is 1/10 scale, area of surfaces = (1/10)² = 1/100 of original",
                    "Volume = (1/10)³ = 1/1000 of original"
                ],
                context: "Scaling involves rational expressions and simplification"
            },

            concentration: {
                scenario: "Chemical concentration calculations",
                expression: "Concentration = amount of solute / volume of solution",
                examples: [
                    "Mix 2L of 30% solution with 3L of 50% solution",
                    "New concentration = (0.3×2 + 0.5×3)/(2+3) = 1.65/5 = 0.33 = 33%"
                ],
                context: "Chemistry problems often require simplifying rational expressions"
            },

            lens_formula: {
                scenario: "Physics: thin lens equation",
                expression: "1/f = 1/dₒ + 1/dᵢ (focal length, object distance, image distance)",
                examples: [
                    "Solving for image distance involves complex rational expressions",
                    "Requires combining fractions and simplifying"
                ],
                context: "Physics formulas frequently involve rational expressions"
            },

            cost_analysis: {
                scenario: "Average cost per unit",
                expression: "Average cost = Total cost / Number of units = (Fixed + Variable×n)/n",
                examples: [
                    "If fixed cost is $1000 and variable cost is $5 per unit",
                    "Average cost for n units = (1000 + 5n)/n = 1000/n + 5",
                    "As n increases, average cost approaches $5"
                ],
                context: "Economics uses rational expressions for cost analysis"
            },

            electrical_resistance: {
                scenario: "Parallel resistors in circuits",
                expression: "1/R_total = 1/R₁ + 1/R₂ + ...",
                examples: [
                    "Two resistors in parallel: 1/R = 1/6 + 1/3 = 1/6 + 2/6 = 3/6",
                    "R = 6/3 = 2 ohms"
                ],
                context: "Electrical engineering uses complex rational expressions"
            },

            projectile_motion: {
                scenario: "Maximum height formula simplification",
                expression: "h = (v₀²sin²θ)/(2g)",
                examples: [
                    "Simplifying physics formulas often requires rational expression techniques"
                ],
                context: "Physics formulas need algebraic simplification"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            monomial: {
                skills: ['Exponent rules', 'Division', 'Coefficient reduction'],
                priorKnowledge: ['x^a / x^b = x^(a-b)', 'Dividing polynomials by monomials'],
                checkQuestions: [
                    "What is x⁵ / x²?",
                    "Simplify: 12/4",
                    "What is 6x³ / 2x?"
                ]
            },
            gcf: {
                skills: ['Finding GCF', 'Factoring out common factors', 'Prime factorization'],
                priorKnowledge: ['Greatest Common Factor concept', 'Distributive property'],
                checkQuestions: [
                    "What is the GCF of 12 and 18?",
                    "Factor: 6x + 9",
                    "What is the GCF of 4x² and 6x?"
                ]
            },
            binomial: {
                skills: ['Recognizing binomial factors', 'Canceling factors', 'GCF factoring'],
                priorKnowledge: ['Binomial multiplication', 'Common factors'],
                checkQuestions: [
                    "Expand: (x + 2)(x + 3)",
                    "Factor: 2x + 6",
                    "What factors does (x+1)/(x+1) cancel to?"
                ]
            },
            trinomial: {
                skills: ['Factoring trinomials', 'FOIL method', 'Finding factor pairs'],
                priorKnowledge: ['Trinomial structure', 'Product-sum method', 'AC method'],
                checkQuestions: [
                    "Factor: x² + 5x + 6",
                    "What two numbers multiply to 6 and add to 5?",
                    "Expand: (x + 2)(x + 3)"
                ]
            },
            special_products: {
                skills: ['Recognizing special patterns', 'Difference of squares', 'Perfect squares'],
                priorKnowledge: ['a² - b² = (a+b)(a-b)', 'Perfect square trinomials'],
                checkQuestions: [
                    "Factor: x² - 9",
                    "Is x² + 6x + 9 a perfect square?",
                    "What is (a + b)²?"
                ]
            },
            opposite: {
                skills: ['Recognizing opposites', 'Factoring -1', 'Sign manipulation'],
                priorKnowledge: ['a - b = -(b - a)', 'Negative factors'],
                checkQuestions: [
                    "Is x - 3 the same as 3 - x?",
                    "What is -(x - 5)?",
                    "Factor -1 from: 2 - x"
                ]
            },
            complex: {
                skills: ['Simplifying complex fractions', 'LCD method', 'Multiply and divide fractions'],
                priorKnowledge: ['Division of fractions', 'Finding LCD', 'Combining fractions'],
                checkQuestions: [
                    "What is (1/2) / (1/3)?",
                    "Find LCD of 1/2 and 1/3",
                    "Simplify: (2/3) / (4/5)"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            area_model: {
                description: "Visual representation using rectangles",
                analogy: "Factoring is like finding dimensions when you know area",
                visualization: "Draw rectangle divided into smaller rectangles",
                suitableFor: ['trinomial', 'binomial'],
                explanation: "Area of rectangle = product of dimensions"
            },
            
            fraction_circles: {
                description: "Circular diagrams showing parts",
                analogy: "Like slicing a pie into pieces",
                visualization: "Draw circles divided into sections",
                suitableFor: ['monomial', 'basic'],
                explanation: "Each piece represents a fraction of the whole"
            },

            factor_tree: {
                description: "Tree diagram showing factorization",
                analogy: "Like a family tree but for factors",
                visualization: "Branch diagram showing factor breakdown",
                suitableFor: ['gcf', 'multiple'],
                explanation: "Each branch shows factoring step"
            },

            cancellation_arrows: {
                description: "Arrows showing what cancels",
                analogy: "Cross out matching items on both sides",
                visualization: "Draw arrows connecting factors that cancel",
                suitableFor: ['all'],
                explanation: "Visual representation of algebraic cancellation"
            },

            box_method: {
                description: "Grid method for factoring",
                analogy: "Like multiplication table in reverse",
                visualization: "Draw grid with factors on edges",
                suitableFor: ['trinomial'],
                explanation: "Find numbers that go in boxes to match terms"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "(6x + 9)/(3)",
                    solution: "2x + 3",
                    steps: ["Factor numerator: 3(2x + 3)", "Cancel common factor 3", "Result: 2x + 3"],
                    difficulty: "easy",
                    type: "monomial"
                },
                {
                    problem: "(x + 2)/(x + 2)",
                    solution: "1",
                    steps: ["Identical numerator and denominator", "Cancel (x+2)/(x+2) = 1"],
                    difficulty: "easy",
                    type: "binomial"
                },
                {
                    problem: "(4x²)/(2x)",
                    solution: "2x",
                    steps: ["Divide coefficients: 4/2 = 2", "Subtract exponents: x²/x = x", "Result: 2x"],
                    difficulty: "easy",
                    type: "monomial"
                }
            ],
            
            intermediate: [
                {
                    problem: "(x² - 4)/(x - 2)",
                    solution: "x + 2",
                    steps: [
                        "Factor numerator: (x-2)(x+2)",
                        "Cancel (x-2) from numerator and denominator",
                        "Result: x + 2, where x ≠ 2"
                    ],
                    difficulty: "medium",
                    type: "difference_of_squares"
                },
                {
                    problem: "(x² + 5x + 6)/(x + 2)",
                    solution: "x + 3",
                    steps: [
                        "Factor numerator: (x+2)(x+3)",
                        "Cancel (x+2)",
                        "Result: x + 3, where x ≠ -2"
                    ],
                    difficulty: "medium",
                    type: "trinomial"
                },
                {
                    problem: "(2 - x)/(x - 2)",
                    solution: "-1",
                    steps: [
                        "Recognize opposite factors",
                        "2 - x = -(x - 2)",
                        "Result: -1, where x ≠ 2"
                    ],
                    difficulty: "medium",
                    type: "opposite"
                }
            ],
            
            advanced: [
                {
                    problem: "(x³ - 8)/(x² - 4)",
                    solution: "(x² + 2x + 4)/(x + 2)",
                    steps: [
                        "Factor numerator: (x-2)(x²+2x+4) [difference of cubes]",
                        "Factor denominator: (x-2)(x+2) [difference of squares]",
                        "Cancel (x-2)",
                        "Result: (x²+2x+4)/(x+2), where x ≠ 2, x ≠ -2"
                    ],
                    difficulty: "hard",
                    type: "cubes"
                },
                {
                    problem: "(2x² - 8)/(x² + 4x + 4)",
                    solution: "2(x-2)/(x+2)",
                    steps: [
                        "Factor numerator: 2(x²-4) = 2(x-2)(x+2)",
                        "Factor denominator: (x+2)²",
                        "Cancel one (x+2)",
                        "Result: 2(x-2)/(x+2), where x ≠ -2"
                    ],
                    difficulty: "hard",
                    type: "multiple"
                }
            ],
            
            byMethod: {
                monomial: [
                    { problem: "(8x³)/(2x)", solution: "4x²" },
                    { problem: "(15x⁴ - 10x²)/(5x²)", solution: "3x² - 2" }
                ],
                gcf: [
                    { problem: "(6x + 9)/(3)", solution: "2x + 3" },
                    { problem: "(4x² - 8x)/(4x)", solution: "x - 2" }
                ],
                difference_of_squares: [
                    { problem: "(x² - 9)/(x - 3)", solution: "x + 3" },
                    { problem: "(4x² - 25)/(2x - 5)", solution: "2x + 5" }
                ],
                trinomial: [
                    { problem: "(x² + 7x + 12)/(x + 3)", solution: "x + 4" },
                    { problem: "(x² - x - 6)/(x - 3)", solution: "x + 2" }
                ],
                opposite: [
                    { problem: "(3 - x)/(x - 3)", solution: "-1" },
                    { problem: "(x² - 4)/(2 - x)", solution: "-(x + 2)" }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            canceling_terms: {
                misconception: "Can cancel any matching expressions in numerator and denominator",
                reality: "Can ONLY cancel FACTORS, never terms (things that are added/subtracted)",
                correctiveExample: "WRONG: (x+2)/(x+3) ≠ 2/3. RIGHT: Must factor first to create factors.",
                commonIn: ['all_types'],
                emphasis: 'CRITICAL'
            },
            
            partial_cancellation: {
                misconception: "Can cancel part of a factor",
                reality: "Must cancel entire factor or nothing",
                correctiveExample: "WRONG: (2x+4)/(x+2) ≠ 2+4/2. RIGHT: Factor to get 2(x+2)/(x+2) = 2",
                commonIn: ['binomial', 'trinomial']
            },

            forgetting_gcf: {
                misconception: "Jump to advanced factoring without checking GCF",
                reality: "Always factor out GCF first",
                correctiveExample: "For 2x²-8, factor GCF: 2(x²-4), then difference of squares: 2(x-2)(x+2)",
                commonIn: ['all_types']
            },

            restrictions_from_simplified: {
                misconception: "Find restrictions from simplified form",
                reality: "Restrictions come from ORIGINAL denominator before simplification",
                correctiveExample: "(x²-4)/(x-2) simplifies to x+2, but x≠2 is still a restriction",
                commonIn: ['all_types']
            },

            difference_of_squares_direction: {
                misconception: "Confusion about order in difference of squares",
                reality: "a²-b² = (a+b)(a-b), order matters for signs",
                correctiveExample: "x²-9 = (x+3)(x-3), not (x-3)(x+3) though both are technically correct",
                commonIn: ['special_products']
            },

            opposite_factor_signs: {
                misconception: "Not recognizing that a-b and b-a are opposites",
                reality: "a-b = -(b-a), they differ by a factor of -1",
                correctiveExample: "(x-3)/(3-x) = (x-3)/(-(x-3)) = -1",
                commonIn: ['opposite']
            },

            trinomial_sign_errors: {
                misconception: "Getting signs wrong when factoring trinomials",
                reality: "Sign of constant term determines whether factors have same or different signs",
                correctiveExample: "x²+5x+6 has + product, + sum → both positive (x+2)(x+3). x²-5x+6 has + product, - sum → both negative (x-2)(x-3)",
                commonIn: ['trinomial']
            },

            complex_rational_confusion: {
                misconception: "Getting lost in complex fractions",
                reality: "Simplify numerator and denominator separately, then divide",
                correctiveExample: "(1/2)/(1/3) = (1/2)×(3/1) = 3/2",
                commonIn: ['complex']
            },

            zero_vs_one: {
                misconception: "Thinking (x+2)/(x+2) = 0",
                reality: "Identical numerator and denominator equals 1, not 0",
                correctiveExample: "(x+2)/(x+2) = 1 for all x ≠ -2",
                commonIn: ['all_types']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            factoring_as_reverse_multiplication: {
                analogy: "Factoring is like un-multiplying",
                explanation: "Just as division undoes multiplication, factoring undoes expanding",
                suitableFor: ['all_types'],
                ELI5: "If you have 12 cookies and want to split them into equal groups, you're factoring! 12 = 3 × 4 means 3 groups of 4 cookies"
            },

            simplifying_fractions: {
                analogy: "Like reducing 6/8 to 3/4",
                explanation: "Same process: find common factors and cancel them",
                suitableFor: ['all_types'],
                ELI5: "If you have 6 slices of pizza out of 8 total, that's the same as 3 out of 4 - we just made the numbers smaller but kept the same amount"
            },

            cancellation: {
                analogy: "Like crossing out identical items on both sides",
                explanation: "If numerator and denominator both have a factor, they cancel to 1",
                suitableFor: ['all_types'],
                ELI5: "Imagine you have 3 red blocks on top and 3 red blocks on bottom of a fraction. They're the same, so we can remove them and we're left with what's different"
            },

            difference_of_squares: {
                analogy: "Like cutting a square into rectangles",
                explanation: "When you have a²-b², you're finding two rectangles that fit together",
                suitableFor: ['special_products'],
                ELI5: "If you have a big square and cut out a smaller square from the corner, you can rearrange the leftover into two rectangles"
            },

            opposite_factors: {
                analogy: "Like having $5 and owing $5",
                explanation: "x-3 and 3-x are opposites, like positive and negative numbers",
                suitableFor: ['opposite'],
                ELI5: "If you take 5 steps forward (x-5) or 5 steps backward (5-x), you're going the same distance but in opposite directions"
            },

            gcf_factoring: {
                analogy: "Like finding what all friends have in common",
                explanation: "GCF is what every term shares",
                suitableFor: ['gcf'],
                ELI5: "If all your friends have bikes, we can say 'everyone has bikes' and then describe what else they have. That's like factoring out the GCF!"
            },

            complex_fractions: {
                analogy: "Like a Russian nesting doll - boxes within boxes",
                explanation: "Complex fractions have fractions inside fractions, work from inside out",
                suitableFor: ['complex'],
                ELI5: "It's like having a toy inside a box, inside another box. You have to open the boxes in the right order!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            monomial: {
                level1: "What type of expression is in the denominator?",
                level2: "It's a single term (monomial). Can you divide each term of the numerator by it?",
                level3: "Use exponent rules: x^a / x^b = x^(a-b) and divide coefficients",
                level4: "Divide coefficient by {coeff}, subtract exponents of like variables"
            },
            
            gcf: {
                level1: "Do the terms have anything in common?",
                level2: "Look for the Greatest Common Factor in both numerator and denominator",
                level3: "Factor out the GCF from both numerator and denominator",
                level4: "GCF is {gcf}. Factor it out and cancel common factors"
            },

            binomial: {
                level1: "Do you see any common binomial expressions?",
                level2: "Look for the same (x + a) or (x - a) in numerator and denominator",
                level3: "You may need to factor first to reveal common binomial factors",
                level4: "Common binomial factor is {factor}. Cancel it (= 1)"
            },

            difference_of_squares: {
                level1: "Do you see two perfect squares with subtraction?",
                level2: "Remember: a² - b² = (a + b)(a - b)",
                level3: "Factor using the difference of squares formula",
                level4: "This is ({a} + {b})({a} - {b})"
            },

            trinomial: {
                level1: "Can you factor the trinomial?",
                level2: "Look for two numbers that multiply to give the constant and add to give the middle coefficient",
                level3: "Factor the trinomial into two binomials",
                level4: "Trinomial factors as ({factor1})({factor2})"
            },

            opposite: {
                level1: "Do you see similar binomials with different order?",
                level2: "Remember that a - b = -(b - a). These are opposite factors",
                level3: "Factor out -1 from one factor to make them identical",
                level4: "These are opposites. Factor -1 to get -{new_factor}, then cancel"
            },

            complex: {
                level1: "What's the main fraction bar?",
                level2: "Simplify the numerator and denominator separately first",
                level3: "Then divide by multiplying by the reciprocal",
                level4: "Rewrite as (numerator) × 1/(denominator) and simplify"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Simplify: (8x²)/(4x)",
                    answer: "2x",
                    assesses: "monomial",
                    difficulty: "basic"
                },
                {
                    question: "Simplify: (x² - 9)/(x - 3)",
                    answer: "x + 3",
                    assesses: "difference_of_squares",
                    difficulty: "intermediate"
                },
                {
                    question: "Simplify: (x² + 5x + 6)/(x + 2)",
                    answer: "x + 3",
                    assesses: "trinomial",
                    difficulty: "intermediate"
                },
                {
                    question: "Simplify: (2 - x)/(x - 2)",
                    answer: "-1",
                    assesses: "opposite",
                    difficulty: "intermediate"
                }
            ],
            
            formative: [
                {
                    question: "What's the first step to simplify (6x + 9)/(3)?",
                    options: ["Cancel 3's", "Factor numerator", "Divide each term", "None"],
                    correct: "Factor numerator",
                    explanation: "Factor out GCF from numerator: 3(2x + 3), then cancel"
                },
                {
                    question: "Can you cancel the x's in (x + 2)/(x + 3)?",
                    options: ["Yes", "No"],
                    correct: "No",
                    explanation: "NO! Can only cancel FACTORS. The x's here are TERMS (being added), not factors"
                },
                {
                    question: "What is (x-2)/(x-2) equal to?",
                    options: ["0", "1", "2", "Undefined"],
                    correct: "1",
                    explanation: "Identical numerator and denominator equals 1 (not 0!)"
                },
                {
                    question: "To simplify (x² - 4)/(x + 2), first:",
                    options: ["Cancel x²", "Factor numerator", "Factor denominator", "Find GCF"],
                    correct: "Factor numerator",
                    explanation: "Factor x² - 4 as (x-2)(x+2), then cancel (x+2)"
                }
            ],
            
            summative: [
                {
                    question: "Simplify completely: (2x² - 8)/(x² - 4x + 4)",
                    answer: "2(x + 2)/(x - 2)",
                    showsWork: true,
                    rubric: {
                        factor_numerator_gcf: 1,
                        factor_numerator_fully: 1,
                        factor_denominator: 1,
                        cancel_common: 1,
                        state_restrictions: 1
                    }
                },
                {
                    question: "Simplify: (x³ - 27)/(x² - 9)",
                    answer: "(x² + 3x + 9)/(x + 3)",
                    showsWork: true,
                    rubric: {
                        recognize_cubes: 1,
                        factor_difference_cubes: 2,
                        factor_difference_squares: 1,
                        cancel_and_simplify: 1
                    }
                }
            ],
            
            byDifficulty: {
                easy: [
                    "(6x)/(3x)",
                    "(x + 5)/(x + 5)",
                    "(10x²)/(5x)",
                    "(4x + 8)/(4)"
                ],
                medium: [
                    "(x² - 16)/(x - 4)",
                    "(x² + 6x + 8)/(x + 2)",
                    "(3 - x)/(x - 3)",
                    "(2x² - 8)/(x - 2)"
                ],
                hard: [
                    "(x³ + 8)/(x² - 4)",
                    "(x² - 9)/(3 - x)",
                    "(2x² + 7x + 3)/(2x + 1)",
                    "((x+1)/(x-1)) / ((x²-1)/(x-1))"
                ]
            },
            
            byObjective: {
                canSimplifyMonomial: [
                    "(12x³)/(4x)",
                    "(15x⁴ - 10x²)/(5x)",
                    "(8x⁵)/(2x²)"
                ],
                canFactorAndCancel: [
                    "(6x + 12)/(6)",
                    "(x² - 25)/(x - 5)",
                    "(x² + 7x + 10)/(x + 2)"
                ],
                canRecognizeOpposites: [
                    "(5 - x)/(x - 5)",
                    "(x² - 9)/(3 - x)",
                    "(2 - x)/(x² - 4)"
                ],
                canFactorTrinomials: [
                    "(x² + 8x + 15)/(x + 3)",
                    "(2x² - x - 3)/(x + 1)",
                    "(x² - 5x + 6)/(x - 2)"
                ],
                canHandleComplexRationals: [
                    "((1/x) + 2) / ((1/x) - 3)",
                    "(1/(x+1)) / (1/(x-1))",
                    "((x + 1/x)) / (x - 1/x)"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "monomial_denominator": "Divide each term of numerator by denominator",
                "look_for_gcf": "ALWAYS check for GCF first in numerator and denominator",
                "two_squares_subtract": "Use difference of squares: a² - b² = (a+b)(a-b)",
                "trinomial": "Factor trinomial completely, look for common factors",
                "opposite_binomials": "Rewrite one as negative of other: a-b = -(b-a)",
                "complex_fraction": "Simplify top and bottom, then divide",
                "perfect_square": "Check if trinomial is (a±b)²"
            },
            
            whenToUseWhat: {
                gcf_first: "Always the first step for any factoring",
                difference_of_squares: "When you see two perfect squares with subtraction",
                trinomial_factoring: "When you have three terms in the form ax² + bx + c",
                opposite_factors: "When binomials are same terms in different order",
                grouping: "When you have four or more terms",
                special_products: "Before trying general methods, check for patterns"
            },
            
            factoringOrder: [
                "1. GCF - Always first!",
                "2. Number of terms:",
                "   - 2 terms: difference of squares, sum/difference of cubes",
                "   - 3 terms: trinomial (perfect square or general)",
                "   - 4+ terms: factor by grouping",
                "3. Check if fully factored (can any factor be factored further?)",
                "4. Verify by multiplying back"
            ],
            
            simplificationChecklist: [
                "✓ Factor numerator completely",
                "✓ Factor denominator completely",
                "✓ Identify ALL common factors",
                "✓ Cancel common factors (write = 1 to track)",
                "✓ Find restrictions from ORIGINAL denominator",
                "✓ Write final answer in simplest form",
                "✓ Verify by expanding or substituting test values"
            ],
            
            commonPatternRecognition: {
                "x² - a²": "Difference of squares → (x + a)(x - a)",
                "x² + 2ax + a²": "Perfect square → (x + a)²",
                "x² - 2ax + a²": "Perfect square → (x - a)²",
                "x³ + a³": "Sum of cubes → (x + a)(x² - ax + a²)",
                "x³ - a³": "Difference of cubes → (x - a)(x² + ax + a²)",
                "ax² + bx + c where a=1": "Find two numbers: product = c, sum = b"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Monomial Sprint",
                    timeLimit: 60,
                    problems: [
                        "(6x²)/(2x)",
                        "(15x⁴)/(3x²)",
                        "(8x³)/(4x)",
                        "(12x⁵)/(6x³)",
                        "(20x⁶)/(5x²)"
                    ]
                },
                {
                    name: "GCF Challenge",
                    timeLimit: 90,
                    problems: [
                        "(6x + 9)/(3)",
                        "(4x² - 8x)/(4x)",
                        "(12x³ + 18x²)/(6x²)",
                        "(15x⁴ - 10x² + 5x)/(5x)"
                    ]
                },
                {
                    name: "Factoring Frenzy",
                    timeLimit: 120,
                    problems: [
                        "(x² - 9)/(x - 3)",
                        "(x² + 7x + 12)/(x + 3)",
                        "(x² - 16)/(x + 4)",
                        "(x² - 5x + 6)/(x - 2)"
                    ]
                }
            ],
            
            puzzles: [
                {
                    name: "Find the Missing Factor",
                    problem: "(x² + __x + 12)/(x + 3) = x + 4",
                    solve: "Find the missing coefficient",
                    solution: "7 (because x² + 7x + 12 = (x+3)(x+4))"
                },
                {
                    name: "Create the Expression",
                    challenge: "Create a rational expression that simplifies to 'x + 5'",
                    constraints: "Must have x² term in numerator, binomial denominator",
                    sampleSolution: "(x² + 8x + 15)/(x + 3) = (x+3)(x+5)/(x+3) = x + 5"
                },
                {
                    name: "Error Detection",
                    incorrectWork: [
                        "(x + 3)/(x + 5) = 3/5  ← WRONG!"
                    ],
                    challenge: "Explain the error",
                    solution: "Cannot cancel terms! Can only cancel factors. These x's are terms (added), not factors (multiplied)"
                }
            ],
            
            applications: [
                {
                    scenario: "Average Speed Problem",
                    problem: "You drive (2x² + 4x) miles in (2x) hours. What's your average speed?",
                    expression: "(2x² + 4x)/(2x)",
                    solution: "Factor: 2x(x + 2)/(2x) = x + 2 mph",
                    interpretation: "Average speed is (x + 2) mph"
                },
                {
                    scenario: "Area to Side Ratio",
                    problem: "Rectangle has area (x² + 7x + 12) and width (x + 3). Find length.",
                    expression: "(x² + 7x + 12)/(x + 3)",
                    solution: "Factor: (x + 3)(x + 4)/(x + 3) = x + 4",
                    interpretation: "Length is (x + 4) units"
                }
            ],
            
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "(x² + 5x + 6)/(x + 2)",
                        "= x² + 5x + 6 - x - 2  ← ERROR: Can't subtract denominator!",
                        "= x² + 4x + 4"
                    ],
                    correctAnswer: "x + 3",
                    errorType: "Attempting to subtract instead of factor and cancel",
                    correction: "Factor numerator: (x+2)(x+3), then cancel (x+2) to get x+3"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "(2x + 6)/(x + 3)",
                        "= 2x/x + 6/3  ← ERROR: Can't split fraction this way!",
                        "= 2 + 2 = 4"
                    ],
                    correctAnswer: "2",
                    errorType: "Incorrectly splitting numerator",
                    correction: "Factor numerator: 2(x+3)/(x+3) = 2"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "(x² - 4)/(x - 2)",
                        "= x² - 4 - x + 2  ← ERROR!",
                        "= x² - x - 2"
                    ],
                    correctAnswer: "x + 2",
                    errorType: "Subtracting denominator instead of factoring",
                    correction: "Factor numerator as (x-2)(x+2), cancel (x-2), result is x+2"
                }
            ],
            
            patternRecognition: [
                {
                    name: "Spot the Pattern",
                    expressions: [
                        "x² - 9",
                        "4x² - 25",
                        "x² - 16",
                        "9x² - 49"
                    ],
                    pattern: "All are difference of squares",
                    challenge: "Factor each one"
                },
                {
                    name: "Perfect Square Hunt",
                    expressions: [
                        "x² + 6x + 9",
                        "x² + 10x + 25",
                        "4x² + 12x + 9"
                    ],
                    pattern: "All are perfect square trinomials",
                    challenge: "Express as (a + b)²"
                }
            ]
        };
    }

    // MAIN SOLVER METHOD
    solveRationalProblem(config) {
        const { expression, numerator, denominator, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseRationalProblem(expression, numerator, denominator, problemType, context);

            // Solve the problem
            this.currentSolution = this.solveRationalProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateRationalSteps(this.currentProblem, this.currentSolution);

            // Generate graph data if applicable
            this.generateRationalGraphData();

            // Generate workbook
            this.generateRationalWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                simplifiedForm: this.currentSolution?.simplified,
                restrictions: this.currentSolution?.restrictions
            };

        } catch (error) {
            throw new Error(`Failed to solve rational expression: ${error.message}`);
        }
    }

    parseRationalProblem(expression, numerator = null, denominator = null, problemType = null, context = {}) {
        let num = numerator;
        let denom = denominator;

        // If full expression provided, try to parse it
        if (expression && !numerator && !denominator) {
            const parts = this.parseRationalExpression(expression);
            num = parts.numerator;
            denom = parts.denominator;
        }

        // If problem type is specified, use it directly
        if (problemType && this.rationalTypes[problemType]) {
            return {
                originalExpression: expression || `(${num})/(${denom})`,
                numerator: num,
                denominator: denom,
                type: problemType,
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect rational problem type
        for (const [type, config] of Object.entries(this.rationalTypes)) {
            const testExpression = expression || `${num} ${denom}`;
            for (const pattern of config.patterns) {
                if (pattern.test(testExpression)) {
                    return {
                        originalExpression: expression || `(${num})/(${denom})`,
                        numerator: num,
                        denominator: denom,
                        type: type,
                        context: { ...context },
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        // Default to common monomial factor
        return {
            originalExpression: expression || `(${num})/(${denom})`,
            numerator: num,
            denominator: denom,
            type: 'common_monomial_factor',
            context: { ...context },
            parsedAt: new Date().toISOString()
        };
    }

    parseRationalExpression(expression) {
        // Simple parser for expressions like "(x^2 - 4)/(x - 2)"
        const match = expression.match(/\((.*)\)\/\((.*)\)/);
        if (match) {
            return {
                numerator: match[1].trim(),
                denominator: match[2].trim()
            };
        }

        // Try without outer parentheses
        const parts = expression.split('/');
        if (parts.length === 2) {
            return {
                numerator: parts[0].trim().replace(/^\(|\)$/g, ''),
                denominator: parts[1].trim().replace(/^\(|\)$/g, '')
            };
        }

        throw new Error('Unable to parse rational expression');
    }

    solveRationalProblem_Internal(problem) {
        const solver = this.rationalTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for rational problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // RATIONAL EXPRESSION SOLVERS

    simplifyMonomialDenominator(problem) {
        const { numerator, denominator } = problem;

        return {
            original: `(${numerator})/(${denominator})`,
            type: 'Monomial Denominator',
            approach: 'Divide each term of numerator by monomial denominator',
            numeratorFactored: numerator,
            denominatorFactored: denominator,
            simplified: this.performMonomialDivision(numerator, denominator),
            restrictions: this.findRestrictions(denominator),
            category: 'monomial'
        };
    }

    simplifyCommonMonomialFactor(problem) {
        const { numerator, denominator } = problem;

        const numGCF = this.findGCF(numerator);
        const denomGCF = this.findGCF(denominator);
        const commonGCF = this.findCommonGCF(numGCF, denomGCF);

        return {
            original: `(${numerator})/(${denominator})`,
            type: 'Common Monomial Factor (GCF)',
            approach: 'Factor out GCF from numerator and denominator, then cancel',
            numeratorGCF: numGCF,
            denominatorGCF: denomGCF,
            commonGCF: commonGCF,
            numeratorFactored: `${numGCF}(...)`,
            denominatorFactored: `${denomGCF}(...)`,
            simplified: 'Simplified form after canceling GCF',
            restrictions: this.findRestrictions(denominator),
            category: 'gcf'
        };
    }

    simplifyCommonBinomialFactor(problem) {
        const { numerator, denominator } = problem;

        return {
            original: `(${numerator})/(${denominator})`,
            type: 'Common Binomial Factor',
            approach: 'Factor to reveal common binomial, then cancel',
            numeratorFactored: 'Factored form of numerator',
            denominatorFactored: 'Factored form of denominator',
            commonFactor: 'Common binomial factor',
            simplified: 'Result after canceling common binomial',
            restrictions: this.findRestrictions(denominator),
            category: 'binomial'
        };
    }

    simplifyDifferenceOfSquares(problem) {
        const { numerator, denominator } = problem;

        return {
            original: `(${numerator})/(${denominator})`,
            type: 'Difference of Squares',
            approach: 'Factor using a² - b² = (a + b)(a - b)',
            pattern: 'Difference of Squares',
            numeratorFactored: 'Factored using difference of squares',
            denominatorFactored: denominator,
            commonFactor: 'One factor from difference of squares',
            simplified: 'Remaining factor after cancellation',
            restrictions: this.findRestrictions(denominator),
            category: 'special_products'
        };
    }

    simplifyTrinomial(problem) {
        const { numerator, denominator } = problem;

        return {
            original: `(${numerator})/(${denominator})`,
            type: 'Trinomial Factoring',
            approach: 'Factor trinomial and cancel common factors',
            numeratorFactored: 'Trinomial factored into binomials',
            denominatorFactored: denominator,
            commonFactor: 'Common factor after trinomial factoring',
            simplified: 'Simplified expression',
            restrictions: this.findRestrictions(denominator),
            category: 'trinomial'
        };
    }

    simplifyPerfectSquare(problem) {
        const { numerator, denominator } = problem;

        return {
            original: `(${numerator})/(${denominator})`,
            type: 'Perfect Square Trinomial',
            approach: 'Recognize and factor perfect square: (a ± b)²',
            pattern: 'Perfect Square Trinomial',
            numeratorFactored: '(a ± b)²',
            denominatorFactored: denominator,
            simplified: 'Simplified form',
            restrictions: this.findRestrictions(denominator),
            category: 'special_products'
        };
    }

    simplifyOppositeFactor(problem) {
        const { numerator, denominator } = problem;

        return {
            original: `(${numerator})/(${denominator})`,
            type: 'Opposite Factors',
            approach: 'Recognize opposite binomials: a - b = -(b - a)',
            numeratorFactored: numerator,
            denominatorFactored: denominator,
            oppositePair: 'Identified opposite factors',
            rewritten: 'One factor rewritten with -1 factored out',
            simplified: 'Final form with -1 included',
            restrictions: this.findRestrictions(denominator),
            category: 'opposite'
        };
    }

    simplifyComplexRational(problem) {
        const { numerator, denominator } = problem;

        return {
            original: `(${numerator})/(${denominator})`,
            type: 'Complex Rational Expression',
            approach: 'Simplify numerator and denominator, then divide',
            method: 'Can use LCD method or combine-then-divide method',
            numeratorSimplified: 'Single fraction',
            denominatorSimplified: 'Single fraction',
            simplified: 'Final simplified form',
            restrictions: this.findRestrictions(denominator),
            category: 'complex'
        };
    }

    simplifyCubes(problem) {
        const { numerator, denominator } = problem;

        return {
            original: `(${numerator})/(${denominator})`,
            type: 'Sum or Difference of Cubes',
            approach: 'Factor using cube formulas',
            formula: 'a³ ± b³ = (a ± b)(a² ∓ ab + b²)',
            numeratorFactored: 'Factored using cube formula',
            denominatorFactored: denominator,
            simplified: 'Simplified form after canceling',
            restrictions: this.findRestrictions(denominator),
            category: 'special_products'
        };
    }

    simplifyMultipleFactors(problem) {
        const { numerator, denominator } = problem;

        return {
            original: `(${numerator})/(${denominator})`,
            type: 'Multiple Common Factors',
            approach: 'Factor completely using multiple methods, then cancel all common factors',
            numeratorFactored: 'Completely factored numerator',
            denominatorFactored: 'Completely factored denominator',
            commonFactors: ['List of all common factors'],
            simplified: 'Final simplified form',
            restrictions: this.findRestrictions(denominator),
            category: 'multiple'
        };
    }

    // HELPER METHODS

    performMonomialDivision(numerator, denominator) {
        // Simplified placeholder - in real implementation would parse and divide
        return `Each term of (${numerator}) divided by (${denominator})`;
    }

    findGCF(expression) {
        // Placeholder - would find actual GCF
        return 'GCF of expression';
    }

    findCommonGCF(gcf1, gcf2) {
        // Placeholder
        return 'Common GCF';
    }

    findRestrictions(denominator) {
        return [`Set ${denominator} = 0 and solve for restricted values`];
    }

    factorGCF(expression) {
        return { gcf: 'GCF', factored: 'Factored expression' };
    }

    factorDifferenceOfSquares(expression) {
        return { factors: ['(a + b)', '(a - b)'] };
    }

    isPerfectSquareTrinomial(expression) {
        // Check if expression is perfect square
        return false; // Placeholder
    }

    factorPerfectSquare(expression) {
        return { factored: '(a ± b)²' };
    }

    factorTrinomial(expression) {
        return { factors: ['Factor 1', 'Factor 2'] };
    }

    factorByGrouping(expression) {
        return { factored: 'Factored by grouping' };
    }

    factorSumOfCubes(expression) {
        return { factored: '(a + b)(a² - ab + b²)' };
    }

    factorDifferenceOfCubes(expression) {
        return { factored: '(a - b)(a² + ab + b²)' };
    }

    // STEP GENERATION

    generateRationalSteps(problem, solution) {
        let baseSteps = this.generateBaseRationalSteps(problem, solution);

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

    generateBaseRationalSteps(problem, solution) {
        const steps = [];
        const { type, numerator, denominator } = problem;
        const category = this.rationalTypes[type]?.category;

        // Step 1: Given expression
        steps.push({
            stepNumber: 1,
            step: 'Given expression',
            description: 'Start with the rational expression',
            expression: `(${numerator})/(${denominator})`,
            reasoning: `This is a ${solution.type}`,
            goalStatement: 'We need to simplify by factoring and canceling common factors'
        });

        // Generate category-specific steps
        switch(category) {
            case 'monomial':
                this.addMonomialSteps(steps, problem, solution);
                break;
            case 'gcf':
                this.addGCFSteps(steps, problem, solution);
                break;
            case 'binomial':
                this.addBinomialSteps(steps, problem, solution);
                break;
            case 'trinomial':
                this.addTrinomialSteps(steps, problem, solution);
                break;
            case 'special_products':
                this.addSpecialProductSteps(steps, problem, solution);
                break;
            case 'opposite':
                this.addOppositeSteps(steps, problem, solution);
                break;
            case 'complex':
                this.addComplexSteps(steps, problem, solution);
                break;
            case 'multiple':
                this.addMultipleFactorSteps(steps, problem, solution);
                break;
            default:
                this.addGenericSteps(steps, problem, solution);
        }

        // Final steps: simplification and restrictions
        this.addFinalSteps(steps, problem, solution);

        return steps;
    }

    addMonomialSteps(steps, problem, solution) {
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Divide each term',
            description: `Divide each term of numerator by the monomial denominator`,
            beforeExpression: `(${problem.numerator})/(${problem.denominator})`,
            operation: 'Divide each term',
            reasoning: 'Use division and exponent rules for each term',
            algebraicRule: 'x^a / x^b = x^(a-b)'
        });

        steps.push({
            stepNumber: steps.length + 1,
            step: 'Apply exponent rules',
            description: 'Subtract exponents of like variables',
            expression: 'Simplified form with reduced exponents',
            reasoning: 'Division of powers subtracts exponents',
            algebraicRule: 'Division Property of Exponents'
        });
    }

    addGCFSteps(steps, problem, solution) {
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Find GCF of numerator',
            description: `Identify the greatest common factor of all terms in numerator`,
            expression: `GCF = ${solution.numeratorGCF || 'GCF'}`,
            reasoning: 'GCF is the largest factor common to all terms',
            visualHint: 'List factors of each term and find common ones'
        });

        steps.push({
            stepNumber: steps.length + 1,
            step: 'Find GCF of denominator',
            description: `Identify the greatest common factor of all terms in denominator`,
            expression: `GCF = ${solution.denominatorGCF || 'GCF'}`,
            reasoning: 'Find GCF of denominator terms'
        });

        steps.push({
            stepNumber: steps.length + 1,
            step: 'Factor out GCF',
            description: 'Factor GCF from both numerator and denominator',
            beforeExpression: `(${problem.numerator})/(${problem.denominator})`,
            afterExpression: `(${solution.numeratorFactored})/(${solution.denominatorFactored})`,
            reasoning: 'Factoring reveals common factors that can cancel',
            algebraicRule: 'Distributive Property'
        });

        steps.push({
            stepNumber: steps.length + 1,
            step: 'Cancel common GCF',
            description: 'Cancel the common GCF from numerator and denominator',
            operation: `(${solution.commonGCF})/(${solution.commonGCF}) = 1`,
            reasoning: 'Identical factors cancel to 1',
            visualHint: 'Draw a line through canceled factors'
        });
    }

    addBinomialSteps(steps, problem, solution) {
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Factor to reveal binomial',
            description: 'Factor numerator and/or denominator to reveal common binomial factor',
            beforeExpression: `(${problem.numerator})/(${problem.denominator})`,
            afterExpression: `(${solution.numeratorFactored})/(${solution.denominatorFactored})`,
            reasoning: 'Factoring makes common binomial factors visible'
        });

        steps.push({
            stepNumber: steps.length + 1,
            step: 'Cancel common binomial',
            description: `Cancel the common binomial factor: ${solution.commonFactor || '(binomial)'}`,
            operation: `${solution.commonFactor}/${solution.commonFactor} = 1`,
            reasoning: 'Identical binomial factors cancel to 1',
            algebraicRule: 'Cancellation Property'
        });
    }

    addTrinomialSteps(steps, problem, solution) {
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Factor trinomial',
            description: 'Factor the trinomial into product of two binomials',
            beforeExpression: problem.numerator,
            afterExpression: solution.numeratorFactored,
            reasoning: 'Trinomial factoring reveals potential common factors',
            method: 'Find two numbers that multiply to ac and add to b'
        });

        steps.push({
            stepNumber: steps.length + 1,
            step: 'Identify common factors',
            description: 'Look for factors common to numerator and denominator',
            commonFactor: solution.commonFactor,
            reasoning: 'After factoring, common factors become visible'
        });

        steps.push({
            stepNumber: steps.length + 1,
            step: 'Cancel common factors',
            description: 'Cancel all common factors',
            operation: 'Cancel common factor = 1',
            reasoning: 'Canceling simplifies the expression'
        });
    }

    addSpecialProductSteps(steps, problem, solution) {
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Recognize special product pattern',
            description: `Identify the pattern: ${solution.pattern}`,
            pattern: solution.pattern,
            formula: solution.formula,
            reasoning: 'Special product patterns allow quick factoring',
            visualHint: 'Check if terms are perfect squares or cubes'
        });

        steps.push({
            stepNumber: steps.length + 1,
            step: 'Apply special product formula',
            description: `Factor using the ${solution.pattern} formula`,
            beforeExpression: problem.numerator,
            afterExpression: solution.numeratorFactored,
            reasoning: 'Special product formulas give factored form directly',
            algebraicRule: solution.formula
        });

        steps.push({
            stepNumber: steps.length + 1,
            step: 'Cancel common factors',
            description: 'Identify and cancel factors common to numerator and denominator',
            commonFactor: solution.commonFactor,
            operation: 'Cancel common factor',
            reasoning: 'After factoring, common factors can be canceled'
        });
    }

    addOppositeSteps(steps, problem, solution) {
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Identify opposite factors',
            description: 'Recognize that binomials are opposites (differ only in sign)',
            oppositePair: solution.oppositePair,
            reasoning: 'a - b and b - a are opposites: a - b = -(b - a)',
            keyInsight: 'Opposite binomials can be made identical by factoring out -1'
        });

        steps.push({
            stepNumber: steps.length + 1,
            step: 'Factor out -1',
            description: 'Factor -1 from one of the opposite factors',
            beforeExpression: `(${problem.numerator})/(${problem.denominator})`,
            afterExpression: solution.rewritten,
            reasoning: 'Factoring -1 makes the factors identical',
            algebraicRule: 'a - b = -(b - a)'
        });

        steps.push({
            stepNumber: steps.length + 1,
            step: 'Cancel identical factors',
            description: 'Cancel the now-identical factors',
            operation: 'Identical factors cancel to 1',
            reasoning: 'After rewriting, factors are identical and cancel',
            result: 'Don\'t forget the -1 that was factored out!'
        });
    }

    addComplexSteps(steps, problem, solution) {
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Simplify numerator',
            description: 'Combine fractions in the numerator into a single fraction',
            beforeExpression: problem.numerator,
            afterExpression: solution.numeratorSimplified,
            reasoning: 'Complex fractions need single fraction in numerator',
            method: solution.method
        });

        steps.push({
            stepNumber: steps.length + 1,
            step: 'Simplify denominator',
            description: 'Combine fractions in the denominator into a single fraction',
            beforeExpression: problem.denominator,
            afterExpression: solution.denominatorSimplified,
            reasoning: 'Need single fraction in denominator'
        });

        steps.push({
            stepNumber: steps.length + 1,
            step: 'Divide fractions',
            description: 'Divide by multiplying by reciprocal of denominator',
            operation: '(a/b) / (c/d) = (a/b) × (d/c)',
            reasoning: 'Division of fractions uses multiplication by reciprocal',
            algebraicRule: 'Division Property of Fractions'
        });

        steps.push({
            stepNumber: steps.length + 1,
            step: 'Simplify result',
            description: 'Simplify the resulting fraction',
            expression: solution.simplified,
            reasoning: 'Final simplification after division'
        });
    }

    addMultipleFactorSteps(steps, problem, solution) {
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Factor numerator completely - GCF first',
            description: 'Always start by factoring out GCF',
            reasoning: 'GCF should always be first factoring step',
            visualHint: 'Look for common numerical and variable factors'
        });

        steps.push({
            stepNumber: steps.length + 1,
            step: 'Factor numerator - additional patterns',
            description: 'Look for additional factoring patterns (difference of squares, trinomials, etc.)',
            beforeExpression: problem.numerator,
            afterExpression: solution.numeratorFactored,
            reasoning: 'Complete factoring reveals all possible common factors',
            method: 'Check for special products, trinomials, or grouping'
        });

        steps.push({
            stepNumber: steps.length + 1,
            step: 'Factor denominator completely',
            description: 'Factor denominator using all applicable methods',
            beforeExpression: problem.denominator,
            afterExpression: solution.denominatorFactored,
            reasoning: 'Both numerator and denominator must be completely factored'
        });

        steps.push({
            stepNumber: steps.length + 1,
            step: 'Identify ALL common factors',
            description: 'List all factors that appear in both numerator and denominator',
            commonFactors: solution.commonFactors,
            reasoning: 'Only factors (not terms) can be canceled',
            criticalWarning: 'Can only cancel FACTORS, never TERMS!'
        });

        steps.push({
            stepNumber: steps.length + 1,
            step: 'Cancel all common factors',
            description: 'Cancel each common factor (each equals 1)',
            operation: 'Cancel all common factors',
            reasoning: 'All common factors can be canceled simultaneously',
            visualHint: 'Cross out each pair of common factors'
        });
    }

    addGenericSteps(steps, problem, solution) {
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Factor and simplify',
            description: 'Factor numerator and denominator, then cancel common factors',
            expression: solution.simplified,
            reasoning: 'Standard simplification process'
        });
    }

    addFinalSteps(steps, problem, solution) {
        // Simplified expression
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Simplified form',
            description: 'Write the expression in simplest form',
            expression: solution.simplified,
            finalAnswer: true,
            reasoning: 'This is the simplest form with all common factors canceled'
        });

        // Restrictions
        if (solution.restrictions && solution.restrictions.length > 0) {
            steps.push({
                stepNumber: steps.length + 1,
                step: 'State restrictions',
                description: 'Identify values that make the ORIGINAL denominator equal to zero',
                restrictions: solution.restrictions,
                reasoning: 'These values must be excluded from the domain',
                criticalNote: 'Restrictions come from ORIGINAL denominator, not simplified form!',
                notation: `x ≠ ${solution.restrictions.join(', ')}`
            });
        }

        // Verification if enabled
        if (this.includeVerificationInSteps) {
            steps.push({
                stepNumber: steps.length + 1,
                step: 'Verify simplification',
                description: 'Check by substituting a test value or expanding factors',
                method: 'Substitute a test value into both original and simplified forms',
                reasoning: 'Both should give the same result for allowed values',
                verificationNote: 'Choose a value not in the restrictions'
            });
        }
    }

    // ENHANCED EXPLANATION METHODS (similar structure to linear workbook)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanationRational(step, problem),
                procedural: this.getProceduralExplanationRational(step),
                visual: this.getVisualExplanationRational(step, problem),
                algebraic: this.getAlgebraicExplanationRational(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisites(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyRational(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPromptsRational(step);
        }

        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestionRational(step);
        }

        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findRealWorldConnectionRational(step, problem);
        }

        return enhanced;
    }

    getConceptualExplanationRational(step, problem) {
        const conceptualExplanations = {
            'Given expression': 'A rational expression is a fraction with polynomials. Our goal is to factor and cancel to find the simplest form.',
            'Find GCF of numerator': 'The GCF is the largest factor shared by all terms. Finding it is the first step in factoring.',
            'Factor out GCF': 'Factoring out the GCF groups common factors together, making them easier to cancel.',
            'Factor trinomial': 'Factoring a trinomial breaks it into simpler binomial factors that might cancel with the denominator.',
            'Recognize special product pattern': 'Special patterns like difference of squares have known factoring formulas that save time.',
            'Cancel common factors': 'When the same factor appears in both numerator and denominator, they divide to equal 1.',
            'Identify opposite factors': 'Opposite factors like (a-b) and (b-a) are negatives of each other and can be rewritten to cancel.',
            'State restrictions': 'Values that make the denominator zero are excluded from the domain, even after simplification.'
        };

        return conceptualExplanations[step.step] || 'This step continues the simplification process by factoring or canceling.';
    }

    getProceduralExplanationRational(step) {
        if (step.operation) {
            return `1. Identify what to do: ${step.operation}
2. Perform the operation carefully
3. Simplify the result
4. Write the new expression`;
        }
        return 'Follow the standard procedure for this factoring or canceling step.';
    }

    getVisualExplanationRational(step, problem) {
        const category = this.rationalTypes[problem.type]?.category;
        
        const visualExplanations = {
            'monomial': 'Picture dividing each piece of the numerator by the whole denominator.',
            'gcf': 'Visualize pulling out the common parts from both top and bottom, like finding what all items share.',
            'binomial': 'See the same binomial group in both numerator and denominator - they cancel like identical weights on a scale.',
            'trinomial': 'Imagine breaking the trinomial into smaller rectangular pieces (factoring) to see what matches the denominator.',
            'special_products': 'Recognize the pattern visually - perfect squares look symmetric, difference of squares has two perfect squares.',
            'opposite': 'Picture one factor as the mirror image (opposite) of another - flip it by factoring out -1.',
            'complex': 'Like Russian dolls - simplify inner fractions first, then the outer division.'
        };

        return visualExplanations[category] || 'Visualize the factoring and canceling process.';
    }

    getAlgebraicExplanationRational(step) {
        const algebraicRules = {
            'Given expression': 'Rational expression in standard form: P(x)/Q(x)',
            'Find GCF': 'Greatest Common Factor property',
            'Factor out GCF': 'Distributive Property: ab + ac = a(b + c)',
            'Factor trinomial': 'Trinomial factoring: ax² + bx + c = (mx + p)(nx + q)',
            'Recognize special product pattern': 'Special Product Formulas',
            'Apply special product formula': 'Difference of Squares: a² - b² = (a + b)(a - b)',
            'Cancel common factors': 'Cancellation Property: (a·b)/(a·c) = b/c when a ≠ 0',
            'Factor out -1': 'Factoring Property: a - b = -(b - a)',
            'State restrictions': 'Domain restrictions: Q(x) ≠ 0'
        };

        return algebraicRules[step.step] || step.algebraicRule || 'Apply standard algebraic principles.';
    }

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateELI5ExplanationRational(step, problem),
                analogy: this.findRelevantAnalogyRational(step, problem),
                simpleLanguage: this.convertToSimpleLanguage(step.description),
                visualization: this.suggestVisualizationRational(step)
            }
        }));
    }

    generateELI5ExplanationRational(step, problem) {
        const ELI5Explanations = {
            'Given expression': "We have a fraction with algebra! Like 6/8, but with x's and other letters. We want to make it simpler.",
            'Find GCF of numerator': "We're looking for what's the same in all the pieces on top. It's like finding what all your toys have in common - maybe they're all red!",
            'Factor out GCF': "We're pulling out the common stuff, like saying 'all my toys are red cars' instead of listing 'red car, red car, red car.'",
            'Factor trinomial': "We're breaking the big expression into smaller pieces, like breaking a chocolate bar into squares so we can see what we have.",
            'Recognize special product pattern': "Some patterns we see a lot! It's like recognizing a friend's face - once you know it, you spot it fast!",
            'Cancel common factors': "When the same thing is on top and bottom, they cancel out! Like if you have 3 cookies on top and 3 cookies on bottom - they're equal, so they cancel to make 1.",
            'Identify opposite factors': "These are like twins but opposites - one goes forward, one goes backward. We can flip one to make them match!",
            'State restrictions': "Some numbers break our fraction! Like you can't divide by zero - that's against the rules. We write down which numbers are not allowed."
        };

        return ELI5Explanations[step.step] || "We're taking another step to make our fraction simpler and easier to work with!";
    }

    findRelevantAnalogyRational(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(problem.type) || analogy.suitableFor.includes('all_types')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of this like cleaning your room - we're organizing and simplifying!";
    }

    suggestVisualizationRational(step) {
        const visualizations = {
            'Given expression': 'Draw a fraction bar with the numerator on top and denominator on bottom',
            'Find GCF': 'Circle or highlight the common parts in each term',
            'Factor out GCF': 'Draw parentheses around what\'s left after pulling out the common part',
            'Factor trinomial': 'Use the box method or area model to show factoring visually',
            'Cancel common factors': 'Draw a line through factors that are the same on top and bottom',
            'Identify opposite factors': 'Draw arrows showing how one is the flip of the other',
            'Apply special product formula': 'Draw the pattern (like two squares for difference of squares)'
        };

        return visualizations[step.step] || 'Draw a picture to help you see what\'s happening in this step';
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generateStepBridgeRational(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgression(steps[i], steps[i + 1]),
                    strategicThinking: this.explainStepStrategyRational(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateStepBridgeRational(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary because we need to continue factoring or simplifying`,
            howItHelps: `This will reveal more common factors or give us the final simplified form`
        };
    }

    explainStepStrategyRational(nextStep) {
        return `For "${nextStep.step}", we ${nextStep.description?.toLowerCase()}`;
    }

    addErrorPrevention(step, problemType) {
        const category = this.rationalTypes[problemType]?.category || 'monomial';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];
        const generalMistakes = this.commonMistakes.general?.['CRITICAL - Terms vs Factors'] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: [...mistakes, ...generalMistakes],
                preventionTips: this.generatePreventionTipsRational(step, problemType),
                checkPoints: this.generateCheckPointsRational(step),
                warningFlags: this.identifyWarningFlagsRational(step, problemType),
                criticalReminder: step.step === 'Cancel common factors' ? 
                    'CRITICAL: Only cancel FACTORS (things multiplied), NEVER cancel TERMS (things added/subtracted)!' : null
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestionRational(step),
                expectedResult: this.describeExpectedResultRational(step),
                troubleshooting: this.generateTroubleshootingTipsRational(step)
            }
        };
    }

    generatePreventionTipsRational(step, problemType) {
        const tips = {
            'Find GCF': [
                'Check both numerical and variable factors',
                'Include the smallest exponent of each variable',
                'Don\'t forget to check all terms'
            ],
            'Factor trinomial': [
                'Verify factoring by multiplying back (FOIL)',
                'Watch signs - positive product means same signs',
                'Check if GCF should be factored first'
            ],
            'Cancel common factors': [
                'ONLY cancel factors, NEVER terms!',
                'Make sure entire factor cancels, not just part',
                'Write "= 1" when canceling to track what happened',
                'Factor completely BEFORE attempting to cancel'
            ],
            'State restrictions': [
                'Use ORIGINAL denominator, not simplified',
                'Set denominator = 0 and solve',
                'List ALL values that cause division by zero'
            ]
        };

        return tips[step.step] || ['Work carefully and check each step'];
    }

    generateCheckPointsRational(step) {
        return [
            'Did I factor completely before canceling?',
            'Am I canceling factors, not terms?',
            'Have I checked my factoring by multiplying?',
            'Did I find restrictions from the original denominator?',
            'Is this the simplest form possible?'
        ];
    }

    identifyWarningFlagsRational(step, problemType) {
        const warnings = {
            'Cancel common factors': [
                'DANGER: Do not cancel unless both are factors (multiplied)',
                'Cannot cancel x in (x+2) and (x+3) - these are terms!',
                'Must factor first to create factors'
            ],
            'Factor trinomial': [
                'Check answer by multiplying back',
                'Watch for sign errors'
            ],
            'State restrictions': [
                'Use original denominator before simplification',
                'Don\'t forget any factors'
            ]
        };

        return warnings[step.step] || [];
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsRational(step, problem),
                subSteps: this.breakIntoSubStepsRational(step),
                hints: this.generateProgressiveHintsRational(step, problem),
                practiceVariation: this.generatePracticeVariationRational(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcessRational(step),
                decisionPoints: this.identifyDecisionPointsRational(step),
                alternativeApproaches: this.suggestAlternativeMethodsRational(step, problem)
            }
        }));
    }

    generateGuidingQuestionsRational(step, problem) {
        const questions = {
            'Given expression': [
                'What type of rational expression is this?',
                'What factoring methods might apply?',
                'Do I see any patterns I recognize?'
            ],
            'Find GCF': [
                'What factors do all terms share?',
                'What is the GCF of the coefficients?',
                'What is the smallest power of each variable?'
            ],
            'Factor trinomial': [
                'What two numbers multiply to ac and add to b?',
                'Should I factor out GCF first?',
                'Is this a special product pattern?'
            ],
            'Cancel common factors': [
                'Are these really factors (multiplied) or just terms (added)?',
                'Have I factored completely first?',
                'What factors appear in both numerator and denominator?'
            ],
            'Identify opposite factors': [
                'Are these binomials the same terms in different order?',
                'Can I factor out -1 to make them identical?',
                'What happens when I factor -1 from one of them?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'How does this help simplify the expression?'];
    }

    breakIntoSubStepsRational(step) {
        const subSteps = {
            'Factor trinomial': [
                'Write the trinomial in standard form',
                'Find two numbers that multiply to ac and add to b',
                'Write as product of two binomials',
                'Verify by multiplying (FOIL)'
            ],
            'Cancel common factors': [
                'Make sure both numerator and denominator are completely factored',
                'Identify each factor in numerator',
                'Identify each factor in denominator',
                'Match up common factors',
                'Cancel each pair (write = 1)',
                'Write remaining factors'
            ],
            'Find GCF': [
                'List factors of each coefficient',
                'Find common coefficient factors',
                'Identify variables in all terms',
                'Take lowest exponent of each variable',
                'Combine numerical and variable GCF'
            ]
        };

        return subSteps[step.step] || ['Understand the goal', 'Apply the technique', 'Verify the result'];
    }

    generateProgressiveHintsRational(step, problem) {
        const category = this.rationalTypes[problem.type]?.category || 'monomial';
        const hintSet = this.hints[category] || this.hints.monomial;

        return {
            level1: hintSet.level1 || 'What type of problem is this?',
            level2: hintSet.level2 || 'What method should you use?',
            level3: hintSet.level3 || 'Apply the appropriate factoring or simplification technique.',
            level4: hintSet.level4 || 'Here are the specific steps for this problem.'
        };
    }

    generatePracticeVariationRational(step, problem) {
        return {
            similarProblem: 'Try a similar problem with different numbers',
            practiceHint: 'Start with simpler coefficients to build confidence',
            extension: 'Try problems with higher degree terms or more complex factoring'
        };
    }

    explainThinkingProcessRational(step) {
        return {
            observe: 'What do I see in this expression?',
            goal: 'What am I trying to factor or cancel?',
            strategy: 'Which factoring method should I use?',
            execute: 'How do I perform this step correctly?',
            verify: 'How can I check if my factoring is correct?'
        };
    }

    identifyDecisionPointsRational(step) {
        return [
            'Which factoring pattern applies?',
            'Should I factor GCF first?',
            'Are there common factors to cancel?',
            'Have I factored completely?',
            'Are there opposite factors I can rewrite?'
        ];
    }

    suggestAlternativeMethodsRational(step, problem) {
        const alternatives = {
            'Factor trinomial': [
                'AC method (product-sum)',
                'Trial and error with factor pairs',
                'Box method / area model',
                'Completing the square'
            ],
            'Complex rational': [
                'LCD method - multiply by LCD of all small fractions',
                'Combine then divide - get single fractions top and bottom'
            ],
            'Factor completely': [
                'Start with GCF, then look for patterns',
                'Check for special products first',
                'Use factoring by grouping for 4+ terms'
            ]
        };

        return alternatives[step.step] || ['The chosen method is appropriate for this problem'];
    }

    identifyKeyVocabularyRational(step) {
        const vocabulary = {
            'Given expression': ['rational expression', 'numerator', 'denominator', 'polynomial'],
            'Find GCF': ['greatest common factor', 'GCF', 'factor', 'common factor'],
            'Factor out GCF': ['factor', 'distributive property', 'factored form'],
            'Factor trinomial': ['trinomial', 'binomial', 'factor', 'FOIL', 'product', 'sum'],
            'Recognize special product pattern': ['difference of squares', 'perfect square trinomial', 'special product'],
            'Cancel common factors': ['cancel', 'factor', 'simplify', 'reduce'],
            'Identify opposite factors': ['opposite', 'negative', 'factor out -1'],
            'State restrictions': ['restriction', 'domain', 'excluded value', 'undefined']
        };

        return vocabulary[step.step] || ['factor', 'simplify'];
    }

    generateThinkingPromptsRational(step) {
        return {
            before: 'What factoring patterns or methods might apply here?',
            during: 'Am I factoring completely? Am I only canceling factors, not terms?',
            after: 'Can I verify this by multiplying back or substituting a value?'
        };
    }

    generateSelfCheckQuestionRational(step) {
        const questions = {
            'Find GCF': 'Did I find the complete GCF including both numbers and variables?',
            'Factor trinomial': 'Can I multiply my factors back to get the original trinomial?',
            'Cancel common factors': 'Am I canceling factors (multiplied) and NOT terms (added/subtracted)?',
            'State restrictions': 'Did I use the ORIGINAL denominator to find restrictions?',
            'Identify opposite factors': 'Did I correctly factor out -1 to show they are opposites?'
        };

        return questions[step.step] || 'Does this step make sense and move me toward the simplified form?';
    }

    describeExpectedResultRational(step) {
        const expectations = {
            'Find GCF': 'The largest factor common to all terms',
            'Factor trinomial': 'Product of two binomials',
            'Cancel common factors': 'Simpler expression with common factors removed',
            'State restrictions': 'List of values that make denominator zero',
            'Recognize special product pattern': 'Identified pattern (e.g., difference of squares)',
            'Simplified form': 'Expression in lowest terms with no common factors'
        };

        return expectations[step.step] || 'Progress toward simplified form';
    }

    generateTroubleshootingTipsRational(step) {
        return [
            'If stuck, review factoring patterns and formulas',
            'Check that you factored completely before canceling',
            'Verify factoring by multiplying back',
            'Remember: only cancel FACTORS, never TERMS',
            'For trinomials, check your factor pairs carefully',
            'Draw a picture or diagram if it helps visualize'
        ];
    }

    findRealWorldConnectionRational(step, problem) {
        const connections = {
            'monomial': 'Like calculating rate: distance/time = rate. Simplifying helps find the actual rate.',
            'gcf': 'Like finding what ingredients all recipes share, so you can factor them out.',
            'trinomial': 'Like finding dimensions of a rectangular area - area formula involves multiplication (factoring reverses this).',
            'special_products': 'Appears in physics formulas (velocity, acceleration) that need simplification.',
            'complex': 'Like calculating combined rates in work problems or parallel resistances in circuits.'
        };

        const category = this.rationalTypes[problem.type]?.category;
        return connections[category] || 'Rational expressions appear in rate problems, physics formulas, and engineering calculations.';
    }

    // GRAPH GENERATION

    generateRationalGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        // Rational expressions can be graphed as rational functions
        this.graphData = {
            type: 'rational_function',
            original: this.currentProblem.originalExpression,
            simplified: this.currentSolution.simplified,
            restrictions: this.currentSolution.restrictions,
            description: 'Graph of the rational function with asymptotes at restrictions',
            graphNote: 'Vertical asymptotes at x-values that make denominator zero'
        };
    }

    // WORKBOOK GENERATION

    generateRationalWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createEnhancedStepsSection(),
            this.createRationalLessonSection(),
            this.createFactoringReferenceSection(),
            this.createSolutionSection(),
            this.createAnalysisSection(),
            this.createVerificationSection(),
            this.createRestrictionSection(),
            this.createRealWorldApplicationSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection(),
            this.createPracticeProblemsSection(),
            this.createCommonMistakesSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Simplifying Rational Expressions Mathematical Workbook',
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
            ['Problem Type', this.rationalTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.rationalTypes[this.currentProblem.type]?.category || 'rational'],
            ['Difficulty', this.rationalTypes[this.currentProblem.type]?.difficulty || 'medium'],
            ['Expression', this.currentProblem.originalExpression],
            ['', ''],
            ['Numerator', this.currentProblem.numerator],
            ['Denominator', this.currentProblem.denominator]
        ];

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSection() {
        if (!this.prerequisiteChecks) return null;

        const category = this.rationalTypes[this.currentProblem.type]?.category;
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
                stepsData.push(['Current State', step.explanation.currentState]);
                stepsData.push(['Next Goal', step.explanation.nextGoal]);
                stepsData.push(['Why', step.explanation.why]);
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
                stepsData.push(['Algebraic Rule', step.algebraicRule]);
            }

            if (step.method) {
                stepsData.push(['Method', step.method]);
            }

            if (step.pattern) {
                stepsData.push(['Pattern', step.pattern]);
            }

            if (step.formula) {
                stepsData.push(['Formula', step.formula]);
            }

            if (step.criticalNote) {
                stepsData.push(['⚠ CRITICAL', step.criticalNote]);
            }

            if (step.criticalWarning) {
                stepsData.push(['⚠ WARNING', step.criticalWarning]);
            }

            // ELI5 explanations
            if (step.ELI5 && this.explanationLevel === 'ELI5') {
                stepsData.push(['ELI5 Explanation', step.ELI5.explanation]);
                if (step.ELI5.analogy) {
                    stepsData.push(['Analogy', step.ELI5.analogy]);
                }
                if (step.ELI5.visualization) {
                    stepsData.push(['Visualize', step.ELI5.visualization]);
                }
            }

            // Enhanced explanations
            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
                stepsData.push(['Procedural', step.explanations.procedural]);
                stepsData.push(['Visual', step.explanations.visual]);
            }

            // Error prevention
            if (step.errorPrevention && this.includeErrorPrevention) {
                const mistakes = step.errorPrevention.commonMistakes;
                if (mistakes && mistakes.length > 0) {
                    stepsData.push(['Common Mistakes', mistakes.slice(0, 3).join('; ')]);
                }
                const tips = step.errorPrevention.preventionTips;
                if (tips && tips.length > 0) {
                    stepsData.push(['Prevention Tips', tips.join('; ')]);
                }
                if (step.errorPrevention.criticalReminder) {
                    stepsData.push(['⚠ CRITICAL', step.errorPrevention.criticalReminder]);
                }
            }

            // Scaffolding
            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                const questions = step.scaffolding.guidingQuestions;
                if (questions && questions.length > 0) {
                    stepsData.push(['Guiding Questions', questions.join(' | ')]);
                }
            }

            // Self-check
            if (step.selfCheck && this.includeSelfCheckQuestions) {
                stepsData.push(['Self-Check', step.selfCheck]);
            }

            // Real-world connection
            if (step.realWorldConnection && this.includeRealWorldApplications) {
                stepsData.push(['Real-World', step.realWorldConnection]);
            }

            stepsData.push(['', '']);
        });

        return {
            title: `Enhanced Step-by-Step Solution (${this.explanationLevel} level)`,
            type: 'steps',
            data: stepsData
        };
    }

    createRationalLessonSection() {
        const lessonData = [
            ['What is a Rational Expression?', ''],
            ['', 'A rational expression is a ratio (fraction) of two polynomials'],
            ['', 'Form: P(x)/Q(x) where P and Q are polynomials and Q ≠ 0'],
            ['', ''],
            ['Key Simplification Concepts', ''],
            ['', 'Goal: Reduce to simplest form by factoring and canceling common factors'],
            ['', 'Only FACTORS (multiplied) can cancel, never TERMS (added/subtracted)'],
            ['', 'Always factor completely before attempting to cancel'],
            ['', 'Restrictions come from original denominator'],
            ['', ''],
            ['Factoring Priority Order', ''],
            ['', '1. GCF - Always first!'],
            ['', '2. Special products (difference of squares, perfect squares, cubes)'],
            ['', '3. Trinomials'],
            ['', '4. Factor by grouping (4+ terms)'],
            ['', '5. Check if fully factored'],
            ['', ''],
            ['Critical Rules', ''],
            ['', '⚠ Can ONLY cancel FACTORS, not TERMS'],
            ['', '⚠ Factor COMPLETELY before canceling'],
            ['', '⚠ Restrictions from ORIGINAL denominator'],
            ['', '⚠ Verify factoring by multiplying back']
        ];

        return {
            title: 'Key Concepts: Simplifying Rational Expressions',
            type: 'lesson',
            data: lessonData
        };
    }

    createFactoringReferenceSection() {
        const factoringData = [
            ['Factoring Reference Guide', ''],
            ['', ''],
            ['GCF (Greatest Common Factor)', ''],
            ['', 'Always factor GCF first'],
            ['', 'Example: 6x² + 9x = 3x(2x + 3)'],
            ['', ''],
            ['Difference of Squares', ''],
            ['', 'Formula: a² - b² = (a + b)(a - b)'],
            ['', 'Example: x² - 9 = (x + 3)(x - 3)'],
            ['', ''],
            ['Perfect Square Trinomial', ''],
            ['', 'Formula: a² + 2ab + b² = (a + b)²'],
            ['', 'Example: x² + 6x + 9 = (x + 3)²'],
            ['', ''],
            ['General Trinomial', ''],
            ['', 'Form: ax² + bx + c'],
            ['', 'Find two numbers that multiply to ac and add to b'],
            ['', 'Example: x² + 5x + 6 = (x + 2)(x + 3)'],
            ['', ''],
            ['Sum of Cubes', ''],
            ['', 'Formula: a³ + b³ = (a + b)(a² - ab + b²)'],
            ['', 'Example: x³ + 8 = (x + 2)(x² - 2x + 4)'],
            ['', ''],
            ['Difference of Cubes', ''],
            ['', 'Formula: a³ - b³ = (a - b)(a² + ab + b²)'],
            ['', 'Example: x³ - 27 = (x - 3)(x² + 3x + 9)'],
            ['', ''],
            ['Opposite Factors', ''],
            ['', 'Formula: a - b = -(b - a)'],
            ['', 'Example: (x - 2)/(2 - x) = (x - 2)/(-(x - 2)) = -1']
        ];

        return {
            title: 'Factoring Reference Guide',
            type: 'reference',
            data: factoringData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [
            ['Simplified Form', this.currentSolution.simplified || 'Simplified expression'],
            ['Original Expression', this.currentSolution.original]
        ];

        if (this.currentSolution.numeratorFactored) {
            solutionData.push(['Numerator Factored', this.currentSolution.numeratorFactored]);
        }

        if (this.currentSolution.denominatorFactored) {
            solutionData.push(['Denominator Factored', this.currentSolution.denominatorFactored]);
        }

        if (this.currentSolution.commonFactor) {
            solutionData.push(['Common Factor Canceled', this.currentSolution.commonFactor]);
        }

        return {
            title: 'Final Simplified Form',
            type: 'solution',
            data: solutionData
        };
    }

    createAnalysisSection() {
        if (!this.currentSolution) return null;

        const analysisData = [
            ['Expression Type', this.currentSolution.type],
            ['Approach', this.currentSolution.approach],
            ['Category', this.currentSolution.category],
            ['Steps Used', this.solutionSteps?.length || 0]
        ];

        if (this.currentSolution.pattern) {
            analysisData.push(['Pattern Recognized', this.currentSolution.pattern]);
        }

        if (this.currentSolution.method) {
            analysisData.push(['Method', this.currentSolution.method]);
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
            ['Verification Method', 'Expand factored form or substitute test value'],
            ['', ''],
            ['How to Verify', ''],
            ['Method 1', 'Multiply factored forms back to check factoring'],
            ['Method 2', 'Substitute a test value (not a restriction) into both original and simplified'],
            ['Method 3', 'Check that all common factors were canceled'],
            ['', ''],
            ['Verification Checklist', ''],
            ['✓', 'Factoring verified by expansion'],
            ['✓', 'All common factors canceled'],
            ['✓', 'Restrictions identified from original denominator'],
            ['✓', 'Expression in simplest form (no more common factors)']
        ];

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createRestrictionSection() {
        if (!this.currentSolution || !this.currentSolution.restrictions) return null;

        const restrictionData = [
            ['Domain Restrictions', ''],
            ['', 'Values that make the denominator equal zero must be excluded'],
            ['', ''],
            ['How to Find Restrictions', ''],
            ['Step 1', 'Look at ORIGINAL denominator (before simplification)'],
            ['Step 2', 'Set denominator equal to zero'],
            ['Step 3', 'Solve for x'],
            ['Step 4', 'List all values that make denominator = 0'],
            ['', ''],
            ['Restrictions for This Problem', '']
        ];

        this.currentSolution.restrictions.forEach((restriction, index) => {
            restrictionData.push([`Restriction ${index + 1}`, restriction]);
        });

        restrictionData.push(['', '']);
        restrictionData.push(['Why This Matters', 'Division by zero is undefined']);
        restrictionData.push(['', 'These restrictions persist even after simplification']);

        return {
            title: 'Domain Restrictions',
            type: 'restrictions',
            data: restrictionData
        };
    }

    createRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const applications = Object.values(this.realWorldProblems).slice(0, 3);

        if (applications.length === 0) return null;

        const appData = [
            ['Real-World Applications of Rational Expressions', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Expression', app.expression]);
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

        const notes = this.generateRationalPedagogicalNotes(this.currentProblem.type);

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

        const alternatives = this.generateRationalAlternativeMethods(this.currentProblem.type);

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

    createCommonMistakesSection() {
        if (!this.includeCommonMistakes) return null;

        const mistakesData = [
            ['Common Mistakes to Avoid', ''],
            ['', ''],
            ['⚠ CRITICAL MISTAKE #1: Canceling Terms Instead of Factors', ''],
            ['', 'WRONG: (x+2)/(x+3) ≠ 2/3'],
            ['', 'WHY: The x\'s are TERMS (added), not FACTORS (multiplied)'],
            ['', 'REMEMBER: Can only cancel when multiplying, not when adding!'],
            ['', ''],
            ['⚠ MISTAKE #2: Not Factoring Completely First', ''],
            ['', 'Must factor both numerator and denominator completely before canceling'],
            ['', 'Check for GCF, special products, and trinomials'],
            ['', ''],
            ['⚠ MISTAKE #3: Finding Restrictions from Simplified Form', ''],
            ['', 'Restrictions come from ORIGINAL denominator'],
            ['', 'Even if factor cancels, restriction remains'],
            ['', ''],
            ['⚠ MISTAKE #4: Partial Cancellation', ''],
            ['', 'WRONG: (2x+4)/(x+2) ≠ 2+4/2'],
            ['', 'RIGHT: Factor first: 2(x+2)/(x+2) = 2'],
            ['', ''],
            ['⚠ MISTAKE #5: Sign Errors with Opposite Factors', ''],
            ['', 'Remember: (a-b)/(b-a) = -1'],
            ['', 'Factor out -1 to make factors identical'],
            ['', ''],
            ['⚠ MISTAKE #6: Forgetting to Verify Factoring', ''],
            ['', 'Always multiply factors back to check'],
            ['', 'Use FOIL or distribution to verify']
        ];

        return {
            title: 'Common Mistakes Reference',
            type: 'mistakes',
            data: mistakesData
        };
    }

    generateRationalPedagogicalNotes(problemType) {
        const category = this.rationalTypes[problemType]?.category;

        const pedagogicalDatabase = {
            monomial: {
                objectives: [
                    'Simplify rational expressions with monomial denominators',
                    'Apply exponent rules correctly',
                    'Divide polynomials by monomials'
                ],
                keyConcepts: [
                    'Each term divided separately',
                    'Exponent subtraction: x^a / x^b = x^(a-b)',
                    'Coefficient division'
                ],
                prerequisites: [
                    'Exponent rules',
                    'Division',
                    'Polynomial structure'
                ],
                commonDifficulties: [
                    'Forgetting to divide all terms',
                    'Exponent errors (adding instead of subtracting)',
                    'Sign errors'
                ],
                teachingStrategies: [
                    'Emphasize dividing each term',
                    'Practice exponent rules separately first',
                    'Use color coding for different terms'
                ],
                extensions: [
                    'Polynomials divided by binomials',
                    'Negative exponents',
                    'Rational exponents'
                ],
                assessment: [
                    'Can student divide each term correctly?',
                    'Does student apply exponent rules properly?',
                    'Can student handle negative coefficients?'
                ]
            },
            
            gcf: {
                objectives: [
                    'Find GCF of polynomial expressions',
                    'Factor out GCF from numerator and denominator',
                    'Cancel common GCF factors'
                ],
                keyConcepts: [
                    'GCF is always first factoring step',
                    'Include numerical and variable parts',
                    'Smallest exponent of each variable'
                ],
                prerequisites: [
                    'Finding GCF of numbers',
                    'Distributive property',
                    'Variable exponents'
                ],
                commonDifficulties: [
                    'Finding incomplete GCF',
                    'Missing variable factors',
                    'Not factoring from all terms'
                ],
                teachingStrategies: [
                    'Teach systematic GCF finding',
                    'Practice with numbers first, then variables',
                    'Emphasize "always factor GCF first"'
                ],
                extensions: [
                    'Expressions with multiple variables',
                    'Combined with other factoring',
                    'Negative GCF'
                ],
                assessment: [
                    'Can student find complete GCF?',
                    'Does student factor all terms?',
                    'Can student verify by distributing back?'
                ]
            },
            
            trinomial: {
                objectives: [
                    'Factor trinomials completely',
                    'Use factored form to simplify rational expressions',
                    'Verify factoring by multiplication'
                ],
                keyConcepts: [
                    'Product-sum method for factoring',
                    'Sign patterns in trinomials',
                    'Factoring as reverse of FOIL'
                ],
                prerequisites: [
                    'FOIL method',
                    'Factor pairs',
                    'Integer operations'
                ],
                commonDifficulties: [
                    'Finding correct factor pairs',
                    'Sign errors',
                    'Not checking factorization'
                ],
                teachingStrategies: [
                    'Teach product-sum method systematically',
                    'Use area models for visual learners',
                    'Emphasize verification by FOIL'
                ],
                extensions: [
                    'Leading coefficient ≠ 1',
                    'Factor by grouping',
                    'Trinomials with multiple variables'
                ],
                assessment: [
                    'Can student find factor pairs?',
                    'Does student verify by multiplying?',
                    'Can student handle different sign patterns?'
                ]
            },
            
            special_products: {
                objectives: [
                    'Recognize special product patterns',
                    'Apply special product formulas',
                    'Use patterns to simplify efficiently'
                ],
                keyConcepts: [
                    'Difference of squares: a² - b² = (a+b)(a-b)',
                    'Perfect square trinomial: a² ± 2ab + b² = (a±b)²',
                    'Sum/difference of cubes formulas'
                ],
                prerequisites: [
                    'Perfect squares recognition',
                    'Perfect cubes recognition',
                    'Binomial multiplication'
                ],
                commonDifficulties: [
                    'Not recognizing patterns',
                    'Formula errors',
                    'Confusing similar patterns'
                ],
                teachingStrategies: [
                    'Create pattern recognition practice',
                    'Memorize formulas with visual aids',
                    'Practice identifying before factoring'
                ],
                extensions: [
                    'Higher degree differences',
                    'Combined patterns',
                    'Applications in graphing'
                ],
                assessment: [
                    'Can student recognize patterns quickly?',
                    'Does student apply formulas correctly?',
                    'Can student explain why formula works?'
                ]
            },
            
            opposite: {
                objectives: [
                    'Recognize opposite binomial factors',
                    'Factor -1 to create identical factors',
                    'Simplify expressions with opposite factors'
                ],
                keyConcepts: [
                    'a - b = -(b - a)',
                    'Opposite factors differ only in sign',
                    'Result includes the factored -1'
                ],
                prerequisites: [
                    'Factoring -1',
                    'Sign manipulation',
                    'Binomial structure'
                ],
                commonDifficulties: [
                    'Not recognizing opposites',
                    'Losing the negative sign',
                    'Sign errors when factoring -1'
                ],
                teachingStrategies: [
                    'Highlight opposite factor pairs',
                    'Practice factoring -1 separately',
                    'Use color coding for sign tracking'
                ],
                extensions: [
                    'Multiple opposite factors',
                    'Combined with other simplification',
                    'Applications in equations'
                ],
                assessment: [
                    'Can student identify opposites?',
                    'Does student factor -1 correctly?',
                    'Can student include -1 in final answer?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Simplify rational expressions'],
            keyConcepts: ['Factoring and canceling'],
            prerequisites: ['Basic algebra'],
            commonDifficulties: ['Various computational challenges'],
            teachingStrategies: ['Step-by-step instruction'],
            extensions: ['More complex expressions'],
            assessment: ['Verify understanding of process']
        };
    }

    generateRationalAlternativeMethods(problemType) {
        const category = this.rationalTypes[problemType]?.category;

        const alternativeDatabase = {
            monomial: {
                primaryMethod: 'Divide each term separately',
                methods: [
                    {
                        name: 'Factor out denominator',
                        description: 'Rewrite as numerator × (1/denominator), then distribute'
                    },
                    {
                        name: 'Long division',
                        description: 'Use polynomial long division (more formal)'
                    }
                ],
                comparison: 'Dividing each term is fastest and most direct for monomials'
            },
            
            gcf: {
                primaryMethod: 'Factor out GCF, then cancel',
                methods: [
                    {
                        name: 'Divide term-by-term',
                        description: 'Divide each term individually then simplify'
                    },
                    {
                        name: 'List all factors',
                        description: 'List all factors, identify common ones, cancel'
                    }
                ],
                comparison: 'Factoring GCF is most systematic and prevents errors'
            },
            
            trinomial: {
                primaryMethod: 'Product-sum (AC) method',
                methods: [
                    {
                        name: 'Trial and error',
                        description: 'Try factor pairs until finding the right one'
                    },
                    {
                        name: 'Box method',
                        description: 'Use area model grid to factor'
                    },
                    {
                        name: 'Grouping',
                        description: 'Split middle term and factor by grouping'
                    }
                ],
                comparison: 'Product-sum is most reliable; box method good for visual learners'
            },
            
            complex: {
                primaryMethod: 'LCD method',
                methods: [
                    {
                        name: 'Combine then divide',
                        description: 'Get single fraction top and bottom, then divide'
                    },
                    {
                        name: 'Multiply by LCD',
                        description: 'Multiply numerator and denominator by LCD of all small fractions'
                    }
                ],
                comparison: 'LCD method often cleaner; combine-divide shows structure better'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard factoring and canceling',
            methods: [{
                name: 'Alternative approach',
                description: 'Other methods may apply depending on expression'
            }],
            comparison: 'Choose method based on expression structure'
        };
    }
}

// Export the class
export default EnhancedSimplifyingRationalsWorkbook;
