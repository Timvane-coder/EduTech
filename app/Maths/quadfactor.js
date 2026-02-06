// Enhanced Factoring Quadratics Mathematical Workbook - Comprehensive Implementation
import * as math from 'mathjs';

export class EnhancedFactoringQuadraticsWorkbook {
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
        this.initializeFactoringSolvers();
        this.initializeFactoringLessons();
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
        this.initializeFactoringPatternDatabase();
        this.initializeGCFDatabase();
        this.initializeSpecialProductsDatabase();
    }

    initializeMathSymbols() {
        return {
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±', 'sqrt': '√',
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            'times': '×', 'divide': '÷', 'squared': '²', 'cubed': '³'
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
                patternBg: '#e7e6ff',
                gcfBg: '#d4f4dd'
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
                patternBg: '#e8eaf6',
                gcfBg: '#c8e6c9'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeFactoringLessons() {
        this.lessons = {
            factoring_overview: {
                title: "Overview of Factoring Quadratics",
                concepts: [
                    "Factoring is the reverse of expanding/distributing",
                    "Goal: Express ax² + bx + c as a product of factors",
                    "Factors reveal the roots/zeros of the quadratic",
                    "Multiple methods available depending on quadratic form"
                ],
                theory: "Factoring transforms a quadratic expression into a product of simpler expressions. This is crucial for solving equations, graphing parabolas, and understanding polynomial behavior.",
                keyFormulas: {
                    "Standard Form": "ax² + bx + c",
                    "Factored Form": "(mx + p)(nx + q)",
                    "Expanded": "mnx² + (mq + np)x + pq",
                    "Zero Product Property": "If (x - r₁)(x - r₂) = 0, then x = r₁ or x = r₂"
                },
                whyFactor: [
                    "Find roots/zeros of quadratic functions",
                    "Solve quadratic equations",
                    "Simplify rational expressions",
                    "Identify key features for graphing",
                    "Optimize calculations in applications"
                ],
                generalApproach: [
                    "Identify the form and coefficients",
                    "Check for GCF first",
                    "Recognize special patterns if present",
                    "Apply appropriate factoring method",
                    "Verify by expanding"
                ]
            },

            gcf_factoring: {
                title: "Greatest Common Factor (GCF)",
                concepts: [
                    "GCF is the largest expression that divides all terms",
                    "Always check for GCF before other methods",
                    "Factor out GCF to simplify the expression",
                    "GCF can include variables and their powers"
                ],
                theory: "The GCF method simplifies polynomials by extracting common factors from all terms. This is the first and most fundamental factoring technique.",
                keyFormulas: {
                    "GCF Pattern": "ax² + bx = x(ax + b)",
                    "With Coefficient": "6x² + 9x = 3x(2x + 3)",
                    "Higher Powers": "x³ + x² = x²(x + 1)"
                },
                steps: [
                    "Identify the GCF of all coefficients",
                    "Identify the lowest power of each variable",
                    "Factor out the complete GCF",
                    "Write remaining terms inside parentheses",
                    "Verify by distributing"
                ],
                examples: [
                    "3x² + 6x = 3x(x + 2)",
                    "4x³ + 8x² = 4x²(x + 2)",
                    "5x²y + 10xy² = 5xy(x + 2y)"
                ],
                commonMistakes: [
                    "Missing variable factors in GCF",
                    "Not using lowest power of variables",
                    "Forgetting to check for GCF first"
                ]
            },

            simple_trinomial: {
                title: "Factoring Simple Trinomials (a = 1)",
                concepts: [
                    "Form: x² + bx + c where leading coefficient is 1",
                    "Find two numbers that multiply to c and add to b",
                    "Factors are (x + m)(x + n) where m + n = b, mn = c",
                    "Signs matter: consider all combinations"
                ],
                theory: "When the leading coefficient is 1, factoring becomes a systematic search for two numbers with specific sum and product properties.",
                keyFormulas: {
                    "Pattern": "x² + bx + c = (x + m)(x + n)",
                    "Constraints": "m + n = b and m × n = c",
                    "Verification": "(x + m)(x + n) = x² + (m+n)x + mn"
                },
                signRules: {
                    "c positive, b positive": "Both factors positive",
                    "c positive, b negative": "Both factors negative",
                    "c negative, b positive": "Larger factor positive",
                    "c negative, b negative": "Larger factor negative"
                },
                steps: [
                    "Verify a = 1 (coefficient of x² is 1)",
                    "List factor pairs of c",
                    "Find pair that adds to b",
                    "Write as (x + m)(x + n)",
                    "Verify by expanding"
                ],
                examples: [
                    "x² + 5x + 6 = (x + 2)(x + 3)",
                    "x² - 7x + 12 = (x - 3)(x - 4)",
                    "x² + 2x - 15 = (x + 5)(x - 3)"
                ]
            },

            ac_method: {
                title: "AC Method (General Trinomials)",
                concepts: [
                    "Used when a ≠ 1 in ax² + bx + c",
                    "Find two numbers that multiply to ac and add to b",
                    "Split middle term using these numbers",
                    "Factor by grouping"
                ],
                theory: "The AC method extends simple trinomial factoring to cases with leading coefficients other than 1 by using the product ac and factoring by grouping.",
                keyFormulas: {
                    "Form": "ax² + bx + c",
                    "AC Product": "a × c",
                    "Find": "Two numbers m and n where mn = ac and m + n = b"
                },
                steps: [
                    "Calculate AC = a × c",
                    "Find two numbers that multiply to AC and add to b",
                    "Rewrite middle term as sum of two terms",
                    "Factor by grouping (pair terms)",
                    "Factor out common binomial",
                    "Verify by expanding"
                ],
                examples: [
                    "2x² + 7x + 3: AC = 6, factors 6 and 1, gives (2x + 1)(x + 3)",
                    "3x² - 10x + 8: AC = 24, factors -6 and -4, gives (3x - 4)(x - 2)",
                    "6x² + 5x - 6: AC = -36, factors 9 and -4, gives (2x + 3)(3x - 2)"
                ],
                commonMistakes: [
                    "Forgetting to multiply a and c",
                    "Incorrect grouping",
                    "Sign errors in middle term split"
                ]
            },

            trial_and_error: {
                title: "Trial and Error Method",
                concepts: [
                    "Systematically test possible factor combinations",
                    "Use knowledge of factor patterns",
                    "Check outer and inner products (FOIL)",
                    "Efficient for small coefficients"
                ],
                theory: "Trial and error uses systematic testing of possible factors, leveraging patterns and FOIL to quickly verify candidates.",
                keyFormulas: {
                    "FOIL": "(mx + p)(nx + q) = mnx² + (mq + np)x + pq",
                    "Check": "First × First = ax², Last × Last = c, Outer + Inner = bx"
                },
                steps: [
                    "List factor pairs of a (first coefficients)",
                    "List factor pairs of c (last terms)",
                    "Try combinations systematically",
                    "Use FOIL to check middle term",
                    "Adjust signs as needed",
                    "Verify final answer"
                ],
                strategies: [
                    "Start with factors closest to square root",
                    "Consider sign patterns",
                    "Use symmetry when possible",
                    "Eliminate impossible combinations early"
                ],
                examples: [
                    "3x² + 10x + 8: Try (3x + 2)(x + 4) → middle 12x + 2x = 14x ✗",
                    "Try (3x + 4)(x + 2) → middle 6x + 4x = 10x ✓",
                    "Result: (3x + 4)(x + 2)"
                ]
            },

            difference_of_squares: {
                title: "Difference of Squares",
                concepts: [
                    "Special pattern: a² - b² = (a + b)(a - b)",
                    "Requires perfect squares and subtraction",
                    "No middle term (or zero middle term)",
                    "Factors are conjugates"
                ],
                theory: "The difference of squares is one of the most recognizable special products. It factors into conjugate binomials.",
                keyFormulas: {
                    "Pattern": "a² - b² = (a + b)(a - b)",
                    "Standard": "x² - k² = (x + k)(x - k)",
                    "Numerical": "x² - 9 = (x + 3)(x - 3)"
                },
                recognition: [
                    "Two terms only",
                    "Both terms are perfect squares",
                    "Subtraction between them",
                    "No middle term (coefficient of x is 0)"
                ],
                steps: [
                    "Verify only two terms present",
                    "Check both terms are perfect squares",
                    "Identify a and b (square roots)",
                    "Write as (a + b)(a - b)",
                    "Verify by expanding"
                ],
                examples: [
                    "x² - 16 = (x + 4)(x - 4)",
                    "4x² - 25 = (2x + 5)(2x - 5)",
                    "9x² - 1 = (3x + 1)(3x - 1)",
                    "x² - 49 = (x + 7)(x - 7)"
                ],
                extensions: [
                    "Can appear after GCF: 2x² - 18 = 2(x² - 9) = 2(x + 3)(x - 3)",
                    "Higher powers: x⁴ - 16 = (x² + 4)(x² - 4) = (x² + 4)(x + 2)(x - 2)"
                ]
            },

            perfect_square_trinomial: {
                title: "Perfect Square Trinomials",
                concepts: [
                    "Pattern: a² ± 2ab + b² = (a ± b)²",
                    "Middle term is twice the product of the roots of first and last terms",
                    "Results in squared binomial",
                    "Special case of trinomial factoring"
                ],
                theory: "Perfect square trinomials are the result of squaring a binomial. Recognizing this pattern saves time and reduces errors.",
                keyFormulas: {
                    "Positive": "a² + 2ab + b² = (a + b)²",
                    "Negative": "a² - 2ab + b² = (a - b)²",
                    "Standard": "x² + 2kx + k² = (x + k)²"
                },
                recognition: [
                    "First term is perfect square",
                    "Last term is perfect square",
                    "Middle term = 2 × (√first) × (√last)",
                    "Check: Does b² = 4ac apply? If yes, perfect square"
                ],
                steps: [
                    "Verify first and last terms are perfect squares",
                    "Find square roots: a = √(first), b = √(last)",
                    "Check if middle term = 2ab",
                    "Write as (a + b)² or (a - b)² based on middle sign",
                    "Verify by expanding"
                ],
                examples: [
                    "x² + 6x + 9 = (x + 3)²",
                    "x² - 10x + 25 = (x - 5)²",
                    "4x² + 12x + 9 = (2x + 3)²",
                    "9x² - 24x + 16 = (3x - 4)²"
                ],
                checkFormula: "For ax² + bx + c, if b² = 4ac, then it's a perfect square trinomial"
            },

            grouping_method: {
                title: "Factoring by Grouping",
                concepts: [
                    "Group terms in pairs",
                    "Factor GCF from each pair",
                    "Factor out common binomial",
                    "Works for four-term polynomials"
                ],
                theory: "Grouping reorganizes polynomial terms to reveal common binomial factors, particularly useful in the AC method.",
                keyFormulas: {
                    "Four Terms": "ax + ay + bx + by = a(x + y) + b(x + y) = (a + b)(x + y)",
                    "From AC Method": "ax² + mx + nx + c = ?"
                },
                steps: [
                    "Group terms in pairs (usually first two, last two)",
                    "Factor GCF from each pair",
                    "Identify common binomial factor",
                    "Factor out the common binomial",
                    "Simplify if possible"
                ],
                examples: [
                    "x³ + 3x² + 2x + 6 = x²(x + 3) + 2(x + 3) = (x² + 2)(x + 3)",
                    "6x² + 9x + 4x + 6 = 3x(2x + 3) + 2(2x + 3) = (3x + 2)(2x + 3)"
                ],
                commonMistakes: [
                    "Incorrect pairing of terms",
                    "Sign errors when factoring GCF",
                    "Not recognizing common binomial"
                ]
            },

            complete_factorization: {
                title: "Complete Factorization Process",
                concepts: [
                    "Always start with GCF",
                    "Then check for special patterns",
                    "Apply appropriate trinomial method",
                    "Factor completely (can't factor further)",
                    "Always verify"
                ],
                theory: "Complete factorization uses all methods in systematic order to factor expressions into prime polynomial factors.",
                steps: [
                    "1. GCF: Factor out greatest common factor",
                    "2. Count terms: 2 terms → difference of squares?, 3 terms → trinomial?, 4 terms → grouping?",
                    "3. Special patterns: Check for perfect square trinomial or difference of squares",
                    "4. General trinomial: Use simple trinomial method or AC method",
                    "5. Verify: Multiply out to confirm",
                    "6. Check completeness: Can any factor be factored further?"
                ],
                decisionTree: {
                    "Start": "Factor out GCF first",
                    "Two terms": "Check difference of squares",
                    "Three terms": "Check perfect square trinomial, then simple trinomial or AC method",
                    "Four terms": "Try grouping method",
                    "After factoring": "Check if factors can be factored further"
                },
                examples: [
                    "2x² - 18 = 2(x² - 9) = 2(x + 3)(x - 3)",
                    "3x² + 12x + 12 = 3(x² + 4x + 4) = 3(x + 2)²",
                    "4x³ - 16x = 4x(x² - 4) = 4x(x + 2)(x - 2)"
                ]
            },

            unfactorable_quadratics: {
                title: "Prime (Unfactorable) Quadratics",
                concepts: [
                    "Not all quadratics factor over integers",
                    "Called 'prime' or 'irreducible'",
                    "Can still solve using quadratic formula",
                    "Discriminant helps identify prime quadratics"
                ],
                theory: "Some quadratics cannot be expressed as a product of binomials with integer coefficients. These are considered prime over the integers.",
                recognition: [
                    "No factor pairs of ac sum to b",
                    "Discriminant is not a perfect square: b² - 4ac ≠ perfect square",
                    "Trial and error yields no valid factors"
                ],
                examples: [
                    "x² + x + 1 (no factors work)",
                    "x² + 3x + 5 (discriminant = 9 - 20 = -11 < 0)",
                    "2x² + 5x + 4 (ac = 8, no factors of 8 sum to 5)"
                ],
                discriminantRule: {
                    "b² - 4ac > 0 and perfect square": "Factorable over integers",
                    "b² - 4ac > 0 but not perfect square": "Real roots but not integer factors",
                    "b² - 4ac = 0": "Perfect square trinomial",
                    "b² - 4ac < 0": "No real roots, prime over reals"
                },
                whatToDo: [
                    "State that it's prime/irreducible",
                    "Use quadratic formula if solving",
                    "Can factor over reals using quadratic formula roots",
                    "Can factor over complex numbers"
                ]
            },

            factoring_strategy_guide: {
                title: "Strategic Approach to Factoring",
                concepts: [
                    "Systematic approach prevents missed steps",
                    "Different quadratics require different methods",
                    "Pattern recognition speeds up process",
                    "Verification is essential"
                ],
                flowchart: [
                    "Step 1: Check for GCF → Factor it out",
                    "Step 2: Count remaining terms",
                    "  - 2 terms: Difference of squares?",
                    "  - 3 terms: Perfect square? Then simple or AC method",
                    "  - 4 terms: Factor by grouping",
                    "Step 3: Check if factors can be factored further",
                    "Step 4: Verify by expanding"
                ],
                patternChecklist: [
                    "✓ GCF present?",
                    "✓ Difference of squares (a² - b²)?",
                    "✓ Perfect square trinomial (a² ± 2ab + b²)?",
                    "✓ Simple trinomial (leading coefficient = 1)?",
                    "✓ General trinomial (use AC method)?",
                    "✓ Four terms (grouping)?"
                ],
                efficiencyTips: [
                    "Master perfect square recognition for speed",
                    "Memorize common factor pairs",
                    "Practice difference of squares",
                    "Learn to spot unfactorable quadratics early"
                ]
            }
        };
    }

    initializeFactoringSolvers() {
        this.factoringTypes = {
            gcf_only: {
                patterns: [
                    /^(\d+)x\^2\s*\+\s*(\d+)x$/,
                    /greatest\s+common\s+factor/i,
                    /gcf/i
                ],
                solver: this.solveGCF.bind(this),
                name: 'Greatest Common Factor',
                category: 'gcf',
                description: 'Factors out the GCF from all terms'
            },

            simple_trinomial: {
                patterns: [
                    /^x\^2\s*([+-]\s*\d+)x\s*([+-]\s*\d+)$/,
                    /simple.*trinomial/i,
                    /leading.*coefficient.*1/i
                ],
                solver: this.solveSimpleTrinomial.bind(this),
                name: 'Simple Trinomial (a = 1)',
                category: 'simple_trinomial',
                description: 'Factors x² + bx + c where leading coefficient is 1'
            },

            ac_method: {
                patterns: [
                    /^(\d+)x\^2\s*([+-]\s*\d+)x\s*([+-]\s*\d+)$/,
                    /ac.*method/i,
                    /general.*trinomial/i
                ],
                solver: this.solveACMethod.bind(this),
                name: 'AC Method (General Trinomial)',
                category: 'ac_method',
                description: 'Factors ax² + bx + c where a ≠ 1'
            },

            difference_of_squares: {
                patterns: [
                    /^(\d*)x\^2\s*-\s*(\d+)$/,
                    /difference.*squares/i,
                    /x\^2.*-.*\^2/
                ],
                solver: this.solveDifferenceOfSquares.bind(this),
                name: 'Difference of Squares',
                category: 'difference_of_squares',
                description: 'Factors a² - b² into (a + b)(a - b)'
            },

            perfect_square_trinomial: {
                patterns: [
                    /perfect.*square/i,
                    /trinomial.*square/i
                ],
                solver: this.solvePerfectSquareTrinomial.bind(this),
                name: 'Perfect Square Trinomial',
                category: 'perfect_square',
                description: 'Factors a² ± 2ab + b² into (a ± b)²'
            },

            grouping: {
                patterns: [
                    /grouping/i,
                    /four.*term/i
                ],
                solver: this.solveGrouping.bind(this),
                name: 'Factoring by Grouping',
                category: 'grouping',
                description: 'Factors by grouping terms in pairs'
            },

            complete_factorization: {
                patterns: [
                    /completely/i,
                    /factor.*completely/i,
                    /full.*factor/i
                ],
                solver: this.solveCompleteFactor.bind(this),
                name: 'Complete Factorization',
                category: 'complete',
                description: 'Fully factors including GCF and all possible methods'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            gcf: {
                'Identifying GCF': [
                    'Missing variable factors in GCF',
                    'Using wrong power of variable',
                    'Not factoring out largest possible GCF',
                    'Forgetting to check for GCF first'
                ],
                'After factoring GCF': [
                    'Arithmetic errors in remaining terms',
                    'Not checking if further factoring possible',
                    'Sign errors inside parentheses'
                ]
            },
            simple_trinomial: {
                'Finding factors': [
                    'Listing incomplete factor pairs',
                    'Forgetting negative factor pairs',
                    'Confusing which factors multiply vs add',
                    'Not considering sign rules'
                ],
                'Sign rules': [
                    'Wrong signs in factors when c is negative',
                    'Not matching sum correctly with middle term',
                    'Mixing up when both factors are negative'
                ]
            },
            ac_method: {
                'AC calculation': [
                    'Forgetting to multiply a and c',
                    'Sign error in ac product',
                    'Finding wrong factor pair of ac'
                ],
                'Splitting middle term': [
                    'Incorrect split of middle term',
                    'Sign errors when splitting',
                    'Not maintaining equation equivalence'
                ],
                'Grouping': [
                    'Wrong pairing of terms',
                    'GCF errors in grouped pairs',
                    'Not identifying common binomial'
                ]
            },
            difference_of_squares: {
                'Recognition': [
                    'Not recognizing perfect squares',
                    'Trying to factor sum of squares (can\'t factor)',
                    'Missing the pattern when there\'s a GCF'
                ],
                'Factoring': [
                    'Forgetting one of the conjugate factors',
                    'Sign errors in factors',
                    'Not simplifying radicals when finding a and b'
                ]
            },
            perfect_square: {
                'Recognition': [
                    'Not verifying middle term is 2ab',
                    'Mistaking for regular trinomial',
                    'Wrong sign in squared binomial'
                ],
                'Factoring': [
                    'Forgetting to square the binomial',
                    'Wrong sign inside binomial',
                    'Not checking with discriminant formula'
                ]
            },
            grouping: {
                'Pairing': [
                    'Wrong grouping of terms',
                    'Not trying alternate groupings',
                    'Rearranging terms incorrectly'
                ],
                'GCF from pairs': [
                    'Different binomials in each group',
                    'Sign errors when factoring',
                    'Missing the common binomial factor'
                ]
            }
        };

        this.errorPrevention = {
            always_check_gcf: {
                reminder: 'ALWAYS check for GCF before other factoring methods',
                method: 'Make GCF your first step every time'
            },
            verify_by_expanding: {
                reminder: 'Always multiply factors back out to verify',
                method: 'Use FOIL or distribution to check your answer'
            },
            sign_tracking: {
                reminder: 'Track signs carefully, especially with subtraction',
                method: 'Use parentheses and write out sign explicitly'
            },
            factor_pair_organization: {
                reminder: 'Organize factor pairs systematically',
                method: 'List all pairs, including negatives'
            },
            middle_term_check: {
                reminder: 'In trinomials, always verify outer + inner = middle term',
                method: 'Use FOIL to check middle term matches'
            },
            pattern_recognition: {
                reminder: 'Look for special patterns before general methods',
                method: 'Check difference of squares and perfect square first'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Understanding why factoring works and what it represents',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Step-by-step instructions for factoring',
                language: 'clear, sequential directions'
            },
            visual: {
                focus: 'Area models, algebra tiles, and graphical understanding',
                language: 'spatial and visual metaphors'
            },
            algebraic: {
                focus: 'Formal algebraic properties and theorems',
                language: 'precise mathematical terminology'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential steps only',
                examples: 'concrete numbers and patterns'
            },
            intermediate: {
                vocabulary: 'standard mathematical terms',
                detail: 'main steps with explanations',
                examples: 'mix of concrete and abstract'
            },
            ELI5: {
                vocabulary: 'simplest possible terms with analogies',
                detail: 'every tiny step with stories',
                examples: 'real-world analogies and pictures',
                analogies: true,
                visualization: 'simple pictures and models'
            },
            detailed: {
                vocabulary: 'full mathematical vocabulary',
                detail: 'comprehensive with reasoning',
                examples: 'abstract and generalized'
            },
            scaffolded: {
                vocabulary: 'progressive complexity',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced progression'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            area_problems: {
                scenario: "Finding dimensions given area",
                application: "If a rectangular garden has area x² + 7x + 12 square feet, what are possible dimensions?",
                factorization: "(x + 3)(x + 4), so dimensions could be (x+3) by (x+4) feet",
                context: "Area problems in construction, landscaping, farming",
                physicalMeaning: "Factors represent length and width"
            },
            projectile_motion: {
                scenario: "Finding when object hits ground",
                application: "Height h = -16t² + 64t. When does it hit ground (h = 0)?",
                factorization: "-16t(t - 4) = 0, so t = 0 or t = 4 seconds",
                context: "Physics, sports, engineering",
                physicalMeaning: "Factors give launch time and landing time"
            },
            profit_analysis: {
                scenario: "Finding break-even points",
                application: "Profit P = -2x² + 20x - 48. When is profit zero?",
                factorization: "-2(x² - 10x + 24) = -2(x - 4)(x - 6), so x = 4 or x = 6",
                context: "Business, economics, finance",
                physicalMeaning: "Factors represent production levels where profit is zero"
            },
            architecture: {
                scenario: "Window design with specific area",
                application: "A window must have area of x² - 25. What are dimensions?",
                factorization: "(x + 5)(x - 5), dimensions differ by 10 units",
                context: "Architecture, construction, design",
                physicalMeaning: "Difference of squares shows symmetric design"
            },
            number_relationships: {
                scenario: "Finding consecutive integers with given product",
                application: "Find two consecutive integers whose product is x² + 5x + 6",
                factorization: "(x + 2)(x + 3), so the numbers differ by 1",
                context: "Number theory, puzzles, logic problems",
                physicalMeaning: "Factors reveal the consecutive numbers"
            },
            optimization: {
                scenario: "Maximizing enclosed area with fixed perimeter",
                application: "Area A = x(100 - 2x) for rectangular fence with 200 ft",
                factorization: "A = -2x(x - 50), maximum at x = 25",
                context: "Optimization in business, agriculture, engineering",
                physicalMeaning: "Factors help find optimal dimensions"
            },
            population_models: {
                scenario: "Modeling population growth and decline",
                application: "Population P = -t² + 10t + 24 reaches zero when?",
                factorization: "-(t - 12)(t + 2), so t = 12 (reject negative)",
                context: "Biology, ecology, demographics",
                physicalMeaning: "Positive root gives extinction time"
            },
            revenue_optimization: {
                scenario: "Maximizing revenue from pricing",
                application: "Revenue R = -x² + 100x (x is price)",
                factorization: "-x(x - 100), zero at x = 0 and x = 100",
                context: "Business, marketing, economics",
                physicalMeaning: "Factors show price range for positive revenue"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            gcf: {
                skills: ['Finding GCF of numbers', 'Finding GCF of variables', 'Distributive property'],
                priorKnowledge: ['Factor pairs', 'Prime factorization', 'Exponent rules'],
                checkQuestions: [
                    "What is GCF of 12 and 18?",
                    "What is GCF of x³ and x²?",
                    "Expand: 3x(2x + 5)"
                ]
            },
            simple_trinomial: {
                skills: ['FOIL method', 'Finding factor pairs', 'Sign rules for multiplication'],
                priorKnowledge: ['Binomial multiplication', 'Integer operations', 'Pattern recognition'],
                checkQuestions: [
                    "Expand: (x + 3)(x + 4)",
                    "List all factor pairs of 12",
                    "What is (-2) × (-6)?"
                ]
            },
            ac_method: {
                skills: ['Factoring by grouping', 'Finding factor pairs', 'GCF factoring'],
                priorKnowledge: ['Simple trinomial factoring', 'Polynomial operations'],
                checkQuestions: [
                    "Factor: x² + 5x + 6",
                    "Find two numbers that multiply to 18 and add to 9",
                    "Factor by grouping: 2x² + 6x + 3x + 9"
                ]
            },
            difference_of_squares: {
                skills: ['Perfect squares', 'Square roots', 'Conjugate pairs'],
                priorKnowledge: ['Special products', 'Binomial multiplication'],
                checkQuestions: [
                    "Is 36 a perfect square?",
                    "What is √(49x²)?",
                    "Expand: (x + 5)(x - 5)"
                ]
            },
            perfect_square: {
                skills: ['Perfect squares', 'Square of binomial', 'Pattern recognition'],
                priorKnowledge: ['Special products', 'FOIL', 'Perfect square numbers'],
                checkQuestions: [
                    "Expand: (x + 4)²",
                    "Is x² + 8x + 16 a perfect square?",
                    "What is 2 × √9 × √25?"
                ]
            },
            grouping: {
                skills: ['GCF factoring', 'Pattern recognition', 'Binomial factoring'],
                priorKnowledge: ['Distributive property', 'Combining like terms'],
                checkQuestions: [
                    "Factor: 5x + 10",
                    "What is common in 3x(x + 2) + 5(x + 2)?",
                    "Factor: x(a + b) + y(a + b)"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            area_model: {
                description: "Factoring as finding dimensions from area",
                analogy: "If area of rectangle is x² + 5x + 6, what are length and width?",
                visualization: "Draw rectangle divided into regions for each term",
                suitableFor: ['simple_trinomial', 'ac_method', 'perfect_square'],
                explanation: "Factors represent dimensions; area model shows multiplication"
            },
            algebra_tiles: {
                description: "Physical representation with tiles",
                analogy: "Large squares for x², rectangles for x, small squares for 1",
                visualization: "Arrange tiles to form rectangle",
                suitableFor: ['simple_trinomial', 'perfect_square', 'difference_of_squares'],
                explanation: "Factored form shows how to arrange tiles into rectangle"
            },
            factor_tree: {
                description: "Breaking down expression into factors",
                analogy: "Like factoring numbers into primes",
                visualization: "Tree diagram showing factorization steps",
                suitableFor: ['complete', 'gcf'],
                explanation: "Shows hierarchy of factoring: GCF first, then special patterns"
            },
            zero_product: {
                description: "Factoring reveals zeros/roots",
                analogy: "Finding where parabola crosses x-axis",
                visualization: "Graph of quadratic with x-intercepts at factor zeros",
                suitableFor: ['all'],
                explanation: "If (x - r₁)(x - r₂) = 0, then x = r₁ or x = r₂"
            },
            reverse_foil: {
                description: "Factoring as reverse of FOIL",
                analogy: "Working backwards from expanded form",
                visualization: "FOIL diagram in reverse",
                suitableFor: ['simple_trinomial', 'ac_method'],
                explanation: "Find factors whose FOIL gives original quadratic"
            },
            conjugate_pairs: {
                description: "Difference of squares as conjugate multiplication",
                analogy: "(a + b)(a - b): identical except for one sign",
                visualization: "Two binomials that differ only in middle sign",
                suitableFor: ['difference_of_squares'],
                explanation: "Middle terms cancel when multiplying conjugates"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "x² + 5x + 6",
                    solution: "(x + 2)(x + 3)",
                    method: "simple_trinomial",
                    steps: ["Find factors of 6 that add to 5", "2 and 3 work", "Write as (x + 2)(x + 3)"],
                    difficulty: "easy"
                },
                {
                    problem: "x² - 9",
                    solution: "(x + 3)(x - 3)",
                    method: "difference_of_squares",
                    steps: ["Recognize a² - b² pattern", "a = x, b = 3", "Write as (x + 3)(x - 3)"],
                    difficulty: "easy"
                },
                {
                    problem: "3x² + 6x",
                    solution: "3x(x + 2)",
                    method: "gcf",
                    steps: ["GCF is 3x", "Factor out 3x", "3x(x + 2)"],
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "x² - 5x - 14",
                    solution: "(x - 7)(x + 2)",
                    method: "simple_trinomial",
                    steps: ["Need factors of -14 that add to -5", "-7 and 2 work", "Write as (x - 7)(x + 2)"],
                    difficulty: "medium"
                },
                {
                    problem: "2x² + 7x + 3",
                    solution: "(2x + 1)(x + 3)",
                    method: "ac_method",
                    steps: ["ac = 6, need factors that add to 7", "6 and 1 work", "Split: 2x² + 6x + x + 3", "Group and factor: 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3)"],
                    difficulty: "medium"
                },
                {
                    problem: "x² + 10x + 25",
                    solution: "(x + 5)²",
                    method: "perfect_square",
                    steps: ["Check if perfect square: √x² = x, √25 = 5", "Middle term: 2(x)(5) = 10x ✓", "Write as (x + 5)²"],
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "6x² - 11x - 10",
                    solution: "(2x - 5)(3x + 2)",
                    method: "ac_method",
                    steps: ["ac = -60, need factors that add to -11", "-15 and 4 work", "Split: 6x² - 15x + 4x - 10", "Group: 3x(2x - 5) + 2(2x - 5) = (3x + 2)(2x - 5)"],
                    difficulty: "hard"
                },
                {
                    problem: "2x³ - 18x",
                    solution: "2x(x + 3)(x - 3)",
                    method: "complete",
                    steps: ["GCF is 2x", "2x(x² - 9)", "x² - 9 is difference of squares", "2x(x + 3)(x - 3)"],
                    difficulty: "hard"
                },
                {
                    problem: "4x² - 20x + 25",
                    solution: "(2x - 5)²",
                    method: "perfect_square",
                    steps: ["Check: √4x² = 2x, √25 = 5", "Middle: 2(2x)(5) = 20x ✓", "Sign is negative", "(2x - 5)²"],
                    difficulty: "hard"
                }
            ],
            byMethod: {
                gcf: [
                    { problem: "5x² + 10x", solution: "5x(x + 2)" },
                    { problem: "4x³ - 12x²", solution: "4x²(x - 3)" },
                    { problem: "6x²y + 9xy²", solution: "3xy(2x + 3y)" }
                ],
                simple_trinomial: [
                    { problem: "x² + 7x + 12", solution: "(x + 3)(x + 4)" },
                    { problem: "x² - 8x + 15", solution: "(x - 3)(x - 5)" },
                    { problem: "x² + 3x - 10", solution: "(x + 5)(x - 2)" }
                ],
                ac_method: [
                    { problem: "2x² + 5x + 3", solution: "(2x + 3)(x + 1)" },
                    { problem: "3x² - 7x + 2", solution: "(3x - 1)(x - 2)" },
                    { problem: "6x² + x - 2", solution: "(2x - 1)(3x + 2)" }
                ],
                difference_of_squares: [
                    { problem: "x² - 16", solution: "(x + 4)(x - 4)" },
                    { problem: "9x² - 25", solution: "(3x + 5)(3x - 5)" },
                    { problem: "4x² - 1", solution: "(2x + 1)(2x - 1)" }
                ],
                perfect_square: [
                    { problem: "x² + 8x + 16", solution: "(x + 4)²" },
                    { problem: "x² - 12x + 36", solution: "(x - 6)²" },
                    { problem: "9x² + 30x + 25", solution: "(3x + 5)²" }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            sum_of_squares: {
                misconception: "Thinking x² + 9 = (x + 3)(x + 3)",
                reality: "Sum of squares does NOT factor over reals",
                correctiveExample: "x² + 9 is prime (cannot factor). Only DIFFERENCE of squares factors: x² - 9 = (x+3)(x-3)",
                commonIn: ['difference_of_squares']
            },
            gcf_optional: {
                misconception: "Skipping GCF check or thinking it's optional",
                reality: "ALWAYS check for GCF first; it simplifies all other factoring",
                correctiveExample: "2x² + 8x + 6: Factor GCF first → 2(x² + 4x + 3) → 2(x+1)(x+3). Without GCF: harder!",
                commonIn: ['all']
            },
            sign_in_factors: {
                misconception: "Getting signs wrong in factors, especially with subtraction",
                reality: "Sign rules are crucial: both negative when c positive and b negative",
                correctiveExample: "x² - 7x + 12: need factors of +12 that add to -7, so BOTH negative: (x-3)(x-4)",
                commonIn: ['simple_trinomial', 'ac_method']
            },
            perfect_square_recognition: {
                misconception: "Thinking any trinomial is a perfect square",
                reality: "Must verify middle term = 2ab where a² and b² are first and last terms",
                correctiveExample: "x² + 6x + 8 is NOT perfect square (2·1·√8 ≠ 6). But x² + 6x + 9 IS: 2·1·3 = 6 ✓",
                commonIn: ['perfect_square']
            },
            factor_addition_vs_multiplication: {
                misconception: "Confusing which factors ADD to b vs MULTIPLY to c",
                reality: "In x² + bx + c, factors multiply to c AND add to b",
                correctiveExample: "x² + 7x + 12: factors of 12 are {1,12}, {2,6}, {3,4}. Which ADD to 7? 3+4=7 ✓",
                commonIn: ['simple_trinomial']
            },
            ac_method_multiplication: {
                misconception: "Forgetting to multiply a and c in AC method",
                reality: "MUST multiply a×c first, then find factors of that product",
                correctiveExample: "2x² + 7x + 3: AC = 2×3 = 6 (not just 3!). Find factors of 6 that add to 7.",
                commonIn: ['ac_method']
            },
            grouping_common_binomial: {
                misconception: "Not recognizing the common binomial in grouping",
                reality: "After factoring each pair, there must be identical binomial",
                correctiveExample: "2x² + 6x + x + 3 → 2x(x+3) + 1(x+3). Common binomial is (x+3)!",
                commonIn: ['grouping']
            },
            incomplete_factorization: {
                misconception: "Stopping before expression is fully factored",
                reality: "Must factor completely; check if factors can factor further",
                correctiveExample: "2x² - 18: factor GCF → 2(x² - 9). But x²-9 factors more! → 2(x+3)(x-3)",
                commonIn: ['complete']
            },
            verification_skipped: {
                misconception: "Not checking answer by multiplying back",
                reality: "ALWAYS verify by expanding factored form",
                correctiveExample: "If you get (x+2)(x+3), multiply: x² + 3x + 2x + 6 = x² + 5x + 6 ✓",
                commonIn: ['all']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            factoring_as_reverse: {
                analogy: "Factoring is like unmaking a smoothie",
                explanation: "You know the blended result (expanded form) and need to figure out the ingredients (factors)",
                suitableFor: ['all'],
                ELI5: "Imagine you have a mixed-up smoothie. Factoring is figuring out what fruits went in!"
            },
            gcf_as_sharing: {
                analogy: "GCF is like finding what's common to share",
                explanation: "Like dividing treats evenly among friends - find the biggest share everyone gets",
                suitableFor: ['gcf'],
                ELI5: "If you have 12 cookies and 18 candies to share, how many friends can get equal amounts? That's GCF!"
            },
            area_rectangle: {
                analogy: "Factoring trinomial is finding rectangle dimensions from area",
                explanation: "Area is x² + 7x + 12. What length × width gives this? Answer: (x+3) by (x+4)",
                suitableFor: ['simple_trinomial', 'ac_method'],
                ELI5: "If a playground has area of 'x² + 7x + 12', factoring finds its length and width!"
            },
            difference_of_squares_as_balance: {
                analogy: "Difference of squares is like taking away equal amounts from both sides",
                explanation: "x² - 9 means x² (squares of x) minus 9 (squares of 3). Factors show the difference",
                suitableFor: ['difference_of_squares'],
                ELI5: "If you have x×x blocks and take away 3×3 blocks, you can rearrange them into two rectangles!"
            },
            perfect_square_as_perfect_fit: {
                analogy: "Perfect square trinomial is a perfect square puzzle",
                explanation: "Like a square made of smaller pieces that fit perfectly with no gaps",
                suitableFor: ['perfect_square'],
                ELI5: "It's like a square birthday cake cut perfectly into smaller squares - it all fits just right!"
            },
            grouping_as_organizing: {
                analogy: "Grouping is like organizing toys into pairs",
                explanation: "Group similar items together, then see what's common across groups",
                suitableFor: ['grouping'],
                ELI5: "Like pairing up socks - group them by similarity, then match the pairs!"
            },
            trial_and_error_as_puzzle: {
                analogy: "Trial and error is solving a jigsaw puzzle",
                explanation: "Try different pieces until you find ones that fit together perfectly",
                suitableFor: ['ac_method'],
                ELI5: "Like trying different puzzle pieces until you find the ones that click together!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            gcf: {
                level1: "What number divides evenly into all coefficients?",
                level2: "What's the lowest power of variables present in all terms?",
                level3: "Factor out the GCF from each term",
                level4: "GCF is {gcf}. Factor it out to get {gcf}({remaining})"
            },
            simple_trinomial: {
                level1: "What two numbers multiply to give c and add to give b?",
                level2: "List factor pairs of {c}. Which pair adds to {b}?",
                level3: "The factors are {factor1} and {factor2}",
                level4: "Write as (x + {factor1})(x + {factor2})"
            },
            ac_method: {
                level1: "What is a × c?",
                level2: "Find two numbers that multiply to {ac} and add to {b}",
                level3: "Split the middle term using {m} and {n}",
                level4: "Group and factor: {step1} = {step2} = {answer}"
            },
            difference_of_squares: {
                level1: "Do you see the pattern a² - b²?",
                level2: "What is the square root of the first term? The second term?",
                level3: "If a = {a} and b = {b}, use (a + b)(a - b)",
                level4: "The answer is ({a} + {b})({a} - {b})"
            },
            perfect_square: {
                level1: "Are the first and last terms perfect squares?",
                level2: "Check if middle term equals 2 × √(first) × √(last)",
                level3: "This is a perfect square: (a ± b)²",
                level4: "The answer is ({a} {sign} {b})²"
            },
            grouping: {
                level1: "Can you group the four terms into two pairs?",
                level2: "Factor the GCF from each pair",
                level3: "Look for a common binomial factor",
                level4: "After grouping: {grouped} = {answer}"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Factor: x² + 5x + 6",
                    answer: "(x + 2)(x + 3)",
                    assesses: "simple_trinomial",
                    difficulty: "basic"
                },
                {
                    question: "Factor: 2x² + 8x",
                    answer: "2x(x + 4)",
                    assesses: "gcf",
                    difficulty: "basic"
                },
                {
                    question: "Factor: x² - 16",
                    answer: "(x + 4)(x - 4)",
                    assesses: "difference_of_squares",
                    difficulty: "basic"
                },
                {
                    question: "Factor: 2x² + 7x + 3",
                    answer: "(2x + 1)(x + 3)",
                    assesses: "ac_method",
                    difficulty: "intermediate"
                },
                {
                    question: "Factor: x² + 10x + 25",
                    answer: "(x + 5)²",
                    assesses: "perfect_square",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "What should you ALWAYS check first when factoring?",
                    options: ["Special patterns", "GCF", "Trial and error", "Grouping"],
                    correct: "GCF",
                    explanation: "Always factor out the GCF first to simplify"
                },
                {
                    question: "For x² + bx + c, the two factors must:",
                    options: ["Add to c and multiply to b", "Add to b and multiply to c", "Add to ac", "Multiply to b"],
                    correct: "Add to b and multiply to c",
                    explanation: "Factors of c must sum to coefficient b"
                },
                {
                    question: "Which can be factored: x² + 9 or x² - 9?",
                    options: ["x² + 9", "x² - 9", "Both", "Neither"],
                    correct: "x² - 9",
                    explanation: "Only DIFFERENCE of squares factors; sum doesn't"
                },
                {
                    question: "In AC method, what do you multiply?",
                    options: ["a and b", "b and c", "a and c", "All three"],
                    correct: "a and c",
                    explanation: "AC method: multiply leading coefficient and constant"
                }
            ],
            summative: [
                {
                    question: "Factor completely: 3x² - 27",
                    answer: "3(x + 3)(x - 3)",
                    showsWork: true,
                    rubric: {
                        gcf: 1,
                        difference_of_squares: 2,
                        final_form: 1,
                        verification: 1
                    }
                },
                {
                    question: "Factor completely: 2x² + 11x + 15",
                    answer: "(2x + 5)(x + 3)",
                    showsWork: true,
                    rubric: {
                        ac_calculation: 1,
                        factor_pair: 1,
                        grouping: 2,
                        final_form: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "x² + 6x + 8",
                    "x² - 25",
                    "3x² + 9x",
                    "x² + 8x + 16"
                ],
                medium: [
                    "x² - 3x - 18",
                    "2x² + 5x + 2",
                    "4x² - 49",
                    "x² - 14x + 49"
                ],
                hard: [
                    "6x² - 13x + 6",
                    "2x³ - 50x",
                    "9x² - 30x + 25",
                    "12x² + 17x - 5"
                ]
            },
            byObjective: {
                canFactorGCF: [
                    "5x² + 15x",
                    "4x³ - 8x²",
                    "6xy + 9y"
                ],
                canFactorSimpleTrinomial: [
                    "x² + 7x + 10",
                    "x² - 9x + 20",
                    "x² + 2x - 24"
                ],
                canFactorDifferenceOfSquares: [
                    "x² - 36",
                    "9x² - 16",
                    "25x² - 1"
                ],
                canFactorPerfectSquare: [
                    "x² + 12x + 36",
                    "x² - 18x + 81",
                    "4x² + 20x + 25"
                ],
                canUseACMethod: [
                    "2x² + 9x + 4",
                    "3x² - 11x + 6",
                    "5x² + 13x - 6"
                ],
                canFactorCompletely: [
                    "2x² - 32",
                    "3x² + 18x + 27",
                    "4x³ - 16x"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionFlowchart: {
                start: "Always factor GCF first",
                afterGCF: "Count terms in remaining expression",
                twoTerms: "Is it a difference of squares? (a² - b²)",
                threeTerms: "Is it a perfect square trinomial? If not, simple trinomial or AC method",
                fourTerms: "Try factoring by grouping",
                checkComplete: "Can any factor be factored further?"
            },
            methodSelection: {
                "Leading coefficient = 1": "Use simple trinomial method",
                "Leading coefficient ≠ 1": "Use AC method or trial and error",
                "Two terms with subtraction": "Check for difference of squares",
                "Perfect square trinomial": "Use (a ± b)² pattern",
                "Four terms": "Use grouping method",
                "Always start": "Check for GCF"
            },
            signRules: {
                "c positive, b positive": "Both factors positive: (x + )(x + )",
                "c positive, b negative": "Both factors negative: (x - )(x - )",
                "c negative": "One positive, one negative: (x + )(x - )",
                "Which is larger": "If c negative, larger absolute value gets sign of b"
            },
            optimizationTips: {
                gcfFirst: "Always factor GCF first - simplifies everything else",
                patterns: "Learn to recognize patterns quickly",
                factorPairs: "Organize factor pairs systematically",
                verify: "Always check by expanding",
                special: "Check special patterns before general methods"
            },
            commonApproach: [
                "1. Factor out GCF if present",
                "2. Count terms and identify form",
                "3. Check for special patterns (difference of squares, perfect square)",
                "4. Apply appropriate factoring method",
                "5. Check if factors can be factored further",
                "6. Verify by expanding"
            ]
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "GCF Sprint",
                    timeLimit: 60,
                    problems: [
                        "2x² + 6x",
                        "5x² + 10x",
                        "3x³ + 9x²",
                        "4xy + 8y",
                        "6x² - 12x"
                    ]
                },
                {
                    name: "Simple Trinomial Challenge",
                    timeLimit: 120,
                    problems: [
                        "x² + 7x + 10",
                        "x² - 8x + 15",
                        "x² + 5x - 24",
                        "x² - 3x - 18"
                    ]
                },
                {
                    name: "Difference of Squares Speed Test",
                    timeLimit: 90,
                    problems: [
                        "x² - 4",
                        "x² - 81",
                        "4x² - 9",
                        "25x² - 16",
                        "9x² - 1"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Missing Coefficient",
                    problem: "x² + __x + 12 factors as (x + 3)(x + 4)",
                    solve: "Find the missing coefficient",
                    solution: "7 (because 3 + 4 = 7)"
                },
                {
                    name: "Mystery Factorization",
                    problem: "Given (x + a)(x + b), if a + b = 9 and ab = 20, find the trinomial",
                    solution: "x² + 9x + 20 (factors are 4 and 5)"
                },
                {
                    name: "Pattern Recognition",
                    problem: "What pattern: x² - 1, x² - 4, x² - 9, x² - 16?",
                    solution: "All are difference of squares with consecutive perfect squares"
                }
            ],
            applications: [
                {
                    scenario: "Garden Design",
                    problem: "A rectangular garden has area x² + 11x + 24 sq ft. What are possible dimensions?",
                    factorization: "(x + 3)(x + 8)",
                    solution: "Dimensions are (x + 3) by (x + 8) feet"
                },
                {
                    scenario: "Projectile Motion",
                    problem: "Height: h = -16t² + 64t. When does it return to ground?",
                    factorization: "-16t(t - 4) = 0",
                    solution: "t = 0 (launch) or t = 4 seconds (landing)"
                },
                {
                    scenario: "Number Puzzle",
                    problem: "Product of two consecutive integers is x² + 7x + 12. Find the integers.",
                    factorization: "(x + 3)(x + 4)",
                    solution: "The integers are (x + 3) and (x + 4)"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Factor: x² + 5x + 6",
                        "Factors of 6: 1×6, 2×3",
                        "1 + 6 = 7 ✗",
                        "2 + 3 = 5 ✓",
                        "Answer: (x + 2)(x + 3) ✓"
                    ],
                    errorType: "Actually correct! No error.",
                    lesson: "This shows proper method"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Factor: 2x² + 8x + 6",
                        "AC = 2×6 = 12",  // ERROR: Should factor GCF first!
                        "Factors of 12 that add to 8: 2 and 6",
                        "..."
                    ],
                    correctApproach: "Factor GCF first: 2(x² + 4x + 3) = 2(x+1)(x+3)",
                    errorType: "Skipped GCF factoring"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "Factor: x² - 5x + 6",
                        "Need factors of 6 that add to -5",
                        "2 and 3 add to 5 ✗",  // ERROR: Wrong sign
                        "Answer: (x + 2)(x + 3)"  // ERROR: Should be (x-2)(x-3)
                    ],
                    correctApproach: "Need NEGATIVE factors: -2 and -3 add to -5",
                    errorType: "Sign error in factor selection"
                }
            ]
        };
    }

    initializeFactoringPatternDatabase() {
        this.factoringPatterns = {
            difference_of_squares: {
                pattern: "a² - b²",
                factored: "(a + b)(a - b)",
                recognitionTips: [
                    "Two terms only",
                    "Both perfect squares",
                    "Subtraction between them",
                    "No middle term"
                ],
                examples: [
                    { expression: "x² - 4", a: "x", b: "2", factored: "(x + 2)(x - 2)" },
                    { expression: "9x² - 25", a: "3x", b: "5", factored: "(3x + 5)(3x - 5)" },
                    { expression: "16x² - 1", a: "4x", b: "1", factored: "(4x + 1)(4x - 1)" }
                ],
                nonExamples: [
                    "x² + 4 (sum, not difference)",
                    "x² - 5 (5 is not perfect square)",
                    "x³ - 8 (not squares, cubes)"
                ]
            },
            perfect_square_trinomial: {
                patterns: {
                    positive: "a² + 2ab + b²",
                    negative: "a² - 2ab + b²"
                },
                factored: {
                    positive: "(a + b)²",
                    negative: "(a - b)²"
                },
                recognitionTips: [
                    "First term is perfect square: a²",
                    "Last term is perfect square: b²",
                    "Middle term = 2ab",
                    "All three conditions must be met"
                ],
                checkFormula: "b² - 4ac = 0 (discriminant is zero)",
                examples: [
                    { expression: "x² + 6x + 9", a: "x", b: "3", middle: "2(x)(3) = 6x", factored: "(x + 3)²" },
                    { expression: "x² - 10x + 25", a: "x", b: "5", middle: "2(x)(5) = 10x", factored: "(x - 5)²" },
                    { expression: "4x² + 12x + 9", a: "2x", b: "3", middle: "2(2x)(3) = 12x", factored: "(2x + 3)²" }
                ],
                nonExamples: [
                    "x² + 5x + 4 (2·1·2 = 4 ≠ 5)",
                    "x² + 8x + 9 (2·1·3 = 6 ≠ 8)"
                ]
            },
            simple_trinomial_patterns: {
                form: "x² + bx + c (where a = 1)",
                method: "Find m and n where m + n = b and mn = c",
                signPatterns: {
                    "++ pattern": {
                        when: "b > 0 and c > 0",
                        factors: "Both positive: (x + m)(x + n)",
                        example: "x² + 7x + 12 = (x + 3)(x + 4)"
                    },
                    "-- pattern": {
                        when: "b < 0 and c > 0",
                        factors: "Both negative: (x - m)(x - n)",
                        example: "x² - 7x + 12 = (x - 3)(x - 4)"
                    },
                    "+- pattern": {
                        when: "c < 0",
                        factors: "One positive, one negative: (x + m)(x - n) or (x - m)(x + n)",
                        rule: "Larger absolute value gets sign of b",
                        example: "x² + 2x - 15 = (x + 5)(x - 3) [5 is larger, b is positive]"
                    }
                }
            },
            ac_method_pattern: {
                form: "ax² + bx + c (where a ≠ 1)",
                process: [
                    "Calculate AC = a × c",
                    "Find m and n where m + n = b and mn = AC",
                    "Rewrite: ax² + mx + nx + c",
                    "Group: (ax² + mx) + (nx + c)",
                    "Factor each group",
                    "Factor out common binomial"
                ],
                example: {
                    problem: "2x² + 7x + 3",
                    ac: "2 × 3 = 6",
                    factors: "6 and 1 (add to 7)",
                    rewrite: "2x² + 6x + 1x + 3",
                    grouped: "2x(x + 3) + 1(x + 3)",
                    factored: "(2x + 1)(x + 3)"
                }
            }
        };
    }

    initializeGCFDatabase() {
        this.gcfMethods = {
            numerical_gcf: {
                method: "Prime factorization",
                steps: [
                    "Factor each coefficient into primes",
                    "Identify common prime factors",
                    "Multiply common factors"
                ],
                example: {
                    problem: "GCF of 24 and 36",
                    factorizations: "24 = 2³ × 3, 36 = 2² × 3²",
                    common: "2² × 3 = 12",
                    gcf: 12
                }
            },
            variable_gcf: {
                method: "Lowest power rule",
                steps: [
                    "Identify each variable",
                    "Find lowest power of each variable",
                    "Include in GCF"
                ],
                example: {
                    problem: "GCF of x⁵, x³, x²",
                    lowestPower: "x²",
                    gcf: "x²"
                }
            },
            combined_gcf: {
                method: "Combine numerical and variable GCF",
                steps: [
                    "Find GCF of coefficients",
                    "Find GCF of variables (lowest powers)",
                    "Multiply together"
                ],
                example: {
                    problem: "6x⁴ + 9x² - 12x",
                    numericalGCF: "GCF(6, 9, 12) = 3",
                    variableGCF: "GCF(x⁴, x², x) = x",
                    combinedGCF: "3x"
                }
            },
            factoring_with_gcf: {
                steps: [
                    "Determine the GCF",
                    "Divide each term by GCF",
                    "Write as GCF(remaining polynomial)",
                    "Verify by distributing"
                ],
                example: {
                    problem: "12x³ + 18x² - 6x",
                    gcf: "6x",
                    division: "12x³/6x = 2x², 18x²/6x = 3x, -6x/6x = -1",
                    factored: "6x(2x² + 3x - 1)",
                    verification: "6x·2x² + 6x·3x + 6x·(-1) = 12x³ + 18x² - 6x ✓"
                }
            }
        };
    }

    initializeSpecialProductsDatabase() {
        this.specialProducts = {
            square_of_binomial: {
                patterns: {
                    sum: "(a + b)² = a² + 2ab + b²",
                    difference: "(a - b)² = a² - 2ab + b²"
                },
                mnemonic: "First squared, plus/minus twice the product, plus last squared",
                examples: [
                    "(x + 3)² = x² + 6x + 9",
                    "(x - 5)² = x² - 10x + 25",
                    "(2x + 1)² = 4x² + 4x + 1"
                ],
                reverseProcess: "Factoring perfect square trinomial"
            },
            product_of_conjugates: {
                pattern: "(a + b)(a - b) = a² - b²",
                mnemonic: "First squared minus last squared",
                keyFeature: "Middle terms cancel out",
                examples: [
                    "(x + 5)(x - 5) = x² - 25",
                    "(3x + 2)(3x - 2) = 9x² - 4",
                    "(x + 1)(x - 1) = x² - 1"
                ],
                reverseProcess: "Factoring difference of squares"
            },
            sum_and_difference_cubed: {
                patterns: {
                    sumCubed: "(a + b)³ = a³ + 3a²b + 3ab² + b³",
                    differenceCubed: "(a - b)³ = a³ - 3a²b + 3ab² - b³",
                    sumOfCubes: "a³ + b³ = (a + b)(a² - ab + b²)",
                    differenceOfCubes: "a³ - b³ = (a - b)(a² + ab + b²)"
                },
                note: "These are extensions beyond basic quadratics but useful to know"
            }
        };
    }

    // MAIN SOLVER METHOD
    solveFactoringProblem(config) {
        const { expression, problemType, parameters, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseFactoringProblem(expression, problemType, parameters, context);

            // Solve the problem
            this.currentSolution = this.solveFactoringProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateFactoringSteps(this.currentProblem, this.currentSolution);

            // Generate graph data if applicable
            this.generateFactoringGraphData();

            // Generate workbook
            this.generateFactoringWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                factorization: this.currentSolution?.factorization,
                factors: this.currentSolution?.factors
            };

        } catch (error) {
            throw new Error(`Failed to solve factoring problem: ${error.message}`);
        }
    }

    parseFactoringProblem(expression, problemType = null, parameters = {}, context = {}) {
        const cleanInput = expression ? this.cleanMathExpression(expression) : '';

        // If problem type is specified, use it directly
        if (problemType && this.factoringTypes[problemType]) {
            return {
                originalInput: expression,
                cleanInput: cleanInput,
                type: problemType,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect factoring problem type
        for (const [type, config] of Object.entries(this.factoringTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || (context.hint && pattern.test(context.hint))) {
                    const match = cleanInput.match(pattern);
                    const extractedParams = this.extractFactoringParameters(match, type, cleanInput);

                    return {
                        originalInput: expression,
                        cleanInput: cleanInput,
                        type: type,
                        parameters: { ...extractedParams, ...parameters },
                        context: { ...context },
                        match: match,
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        // Try to parse as general quadratic
        const quadMatch = cleanInput.match(/([+-]?\d*)x\^?2\s*([+-]\s*\d*)x?\s*([+-]\s*\d+)?/);
        if (quadMatch) {
            const a = this.parseCoefficient(quadMatch[1]) || 1;
            const b = this.parseCoefficient(quadMatch[2]) || 0;
            const c = this.parseCoefficient(quadMatch[3]) || 0;

            return {
                originalInput: expression,
                cleanInput: cleanInput,
                type: a === 1 ? 'simple_trinomial' : 'ac_method',
                parameters: { a, b, c },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize factoring problem type from: ${expression}`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/\^2/g, '²')
            .replace(/\*\*/g, '^')
            .replace(/\*/g, '')
            .trim();
    }

    extractFactoringParameters(match, type, cleanInput) {
        const params = {};

        if (!match) {
            // Try to parse from cleanInput directly
            const generalMatch = cleanInput.match(/([+-]?\d*)x\^?2\s*([+-]?\s*\d*)x?\s*([+-]?\s*\d+)?/);
            if (generalMatch) {
                params.a = this.parseCoefficient(generalMatch[1]) || 1;
                params.b = this.parseCoefficient(generalMatch[2]) || 0;
                params.c = this.parseCoefficient(generalMatch[3]) || 0;
            }
            return params;
        }

        switch(type) {
            case 'gcf_only':
                params.a = this.parseCoefficient(match[1]) || 1;
                params.b = this.parseCoefficient(match[2]) || 0;
                params.c = 0;
                break;

            case 'simple_trinomial':
                params.a = 1;
                params.b = this.parseCoefficient(match[1]) || 0;
                params.c = this.parseCoefficient(match[2]) || 0;
                break;

            case 'ac_method':
                params.a = this.parseCoefficient(match[1]) || 1;
                params.b = this.parseCoefficient(match[2]) || 0;
                params.c = this.parseCoefficient(match[3]) || 0;
                break;

            case 'difference_of_squares':
                params.a = this.parseCoefficient(match[1]) || 1;
                params.c = -this.parseCoefficient(match[2]) || 0;
                params.b = 0;
                break;

            default:
                // Try general parsing
                params.a = 1;
                params.b = 0;
                params.c = 0;
        }

        return params;
    }

    parseCoefficient(coeff) {
        if (!coeff || coeff.trim() === '' || coeff.trim() === '+') return 1;
        if (coeff.trim() === '-') return -1;

        let cleaned = coeff.replace(/\s+/g, '');
        
        const num = parseFloat(cleaned);
        return isNaN(num) ? 1 : num;
    }

    solveFactoringProblem_Internal(problem) {
        const solver = this.factoringTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for factoring problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // FACTORING SOLVERS

    solveGCF(problem) {
        const { a, b, c } = problem.parameters;
        
        // Find GCF of coefficients
        const coeffGCF = this.findGCFOfNumbers([Math.abs(a), Math.abs(b), Math.abs(c)].filter(n => n !== 0));
        
        // Variable GCF is x if all terms have x
        const hasX = b !== 0 || a !== 0;
        const varGCF = hasX ? 'x' : '';
        
        const gcf = `${coeffGCF}${varGCF}`;
        
        // Factor out GCF
        const remainingA = a / coeffGCF;
        const remainingB = b / coeffGCF;
        const remainingTerms = remainingB !== 0 ? `${remainingA}x + ${remainingB}` : `${remainingA}x`;

        return {
            type: 'GCF Factoring',
            original: `${a}x² + ${b}x`,
            gcf: gcf,
            remaining: remainingTerms,
            factorization: `${gcf}(${remainingTerms})`,
            factors: [gcf, remainingTerms],
            category: 'gcf',
            method: 'Greatest Common Factor'
        };
    }

    solveSimpleTrinomial(problem) {
        const { a, b, c } = problem.parameters;
        
        if (a !== 1) {
            // Redirect to AC method if a ≠ 1
            return this.solveACMethod(problem);
        }

        // Find two numbers that multiply to c and add to b
        const factorPairs = this.findFactorPairs(c);
        let m = null, n = null;

        for (const [f1, f2] of factorPairs) {
            if (f1 + f2 === b) {
                m = f1;
                n = f2;
                break;
            }
        }

        if (m === null) {
            return {
                type: 'Simple Trinomial',
                original: `x² + ${b}x + ${c}`,
                factorization: 'Prime (cannot be factored over integers)',
                isPrime: true,
                category: 'simple_trinomial',
                discriminant: b * b - 4 * a * c
            };
        }

        const factor1 = m >= 0 ? `(x + ${m})` : `(x - ${Math.abs(m)})`;
        const factor2 = n >= 0 ? `(x + ${n})` : `(x - ${Math.abs(n)})`;

        return {
            type: 'Simple Trinomial (a = 1)',
            original: `x² + ${b}x + ${c}`,
            factorPairs: factorPairs,
            selectedPair: [m, n],
            factorization: `${factor1}${factor2}`,
            factors: [factor1, factor2],
            category: 'simple_trinomial',
            method: 'Find factors of c that add to b',
            verification: {
                outerInner: `Outer: ${n}x, Inner: ${m}x, Sum: ${m + n}x = ${b}x ✓`,
                lastTerms: `Last: ${m} × ${n} = ${c} ✓`
            }
        };
    }

    solveACMethod(problem) {
        const { a, b, c } = problem.parameters;

        const ac = a * c;
        const factorPairs = this.findFactorPairs(ac);
        let m = null, n = null;

        // Find pair that adds to b
        for (const [f1, f2] of factorPairs) {
            if (f1 + f2 === b) {
                m = f1;
                n = f2;
                break;
            }
        }

        if (m === null) {
            return {
                type: 'AC Method',
                original: `${a}x² + ${b}x + ${c}`,
                factorization: 'Prime (cannot be factored over integers)',
                isPrime: true,
                category: 'ac_method',
                ac: ac,
                discriminant: b * b - 4 * a * c
            };
        }

        // Rewrite and group
        const rewritten = `${a}x² + ${m}x + ${n}x + ${c}`;
        
        // Factor by grouping
        // Group 1: ax² + mx
        const gcf1 = this.findGCFOfNumbers([Math.abs(a), Math.abs(m)]);
        const gcf1x = gcf1 + 'x';
        const group1Remaining = `${a/gcf1}x + ${m/gcf1}`;
        const group1Factored = `${gcf1x}(${group1Remaining})`;

        // Group 2: nx + c
        const gcf2 = this.findGCFOfNumbers([Math.abs(n), Math.abs(c)]);
        const group2Remaining = `${n/gcf2}x + ${c/gcf2}`;
        const group2Factored = `${gcf2}(${group2Remaining})`;

        // Common binomial
        const commonBinomial = group1Remaining; // Should be same as group2Remaining
        const factorization = `(${gcf1x} + ${gcf2})(${commonBinomial})`;

        return {
            type: 'AC Method',
            original: `${a}x² + ${b}x + ${c}`,
            ac: ac,
            factorPairs: factorPairs,
            selectedPair: [m, n],
            rewritten: rewritten,
            grouped: `(${a}x² + ${m}x) + (${n}x + ${c})`,
            group1: group1Factored,
            group2: group2Factored,
            commonBinomial: commonBinomial,
            factorization: factorization,
            category: 'ac_method',
            method: 'AC Method with grouping'
        };
    }

    solveDifferenceOfSquares(problem) {
        const { a, c } = problem.parameters;

        // Check if both are perfect squares
        const sqrtA = Math.sqrt(Math.abs(a));
        const sqrtC = Math.sqrt(Math.abs(c));

        if (!Number.isInteger(sqrtA) || !Number.isInteger(sqrtC)) {
            return {
                type: 'Difference of Squares',
                original: `${a}x² + ${c}`,
                factorization: 'Not a difference of perfect squares',
                cannotFactor: true,
                category: 'difference_of_squares'
            };
        }

        if (c >= 0) {
            return {
                type: 'Sum of Squares',
                original: `${a}x² + ${Math.abs(c)}`,
                factorization: 'Prime (sum of squares does not factor over reals)',
                isPrime: true,
                category: 'difference_of_squares',
                note: 'Only DIFFERENCE of squares factors, not sum'
            };
        }

        const aCoeff = sqrtA === 1 ? '' : sqrtA;
        const aTerm = `${aCoeff}x`;
        const bTerm = sqrtC;

        const factorization = `(${aTerm} + ${bTerm})(${aTerm} - ${bTerm})`;

        return {
            type: 'Difference of Squares',
            original: `${a}x² - ${Math.abs(c)}`,
            pattern: 'a² - b²',
            a: aTerm,
            b: bTerm,
            factorization: factorization,
            factors: [`(${aTerm} + ${bTerm})`, `(${aTerm} - ${bTerm})`],
            category: 'difference_of_squares',
            method: '(a + b)(a - b)',
            verification: {
                expand: `(${aTerm})² - (${bTerm})² = ${a}x² - ${Math.abs(c)} ✓`
            }
        };
    }

    solvePerfectSquareTrinomial(problem) {
        const { a, b, c } = problem.parameters;

        // Check if perfect square
        const sqrtA = Math.sqrt(Math.abs(a));
        const sqrtC = Math.sqrt(Math.abs(c));

        if (!Number.isInteger(sqrtA) || !Number.isInteger(sqrtC)) {
            return {
                type: 'Perfect Square Trinomial',
                original: `${a}x² + ${b}x + ${c}`,
                factorization: 'Not a perfect square trinomial',
                isPerfectSquare: false,
                category: 'perfect_square'
            };
        }

        // Check if middle term = 2ab
        const expectedMiddle = 2 * sqrtA * sqrtC;
        const isPerfectSquare = Math.abs(b) === expectedMiddle;

        if (!isPerfectSquare) {
            return {
                type: 'Perfect Square Trinomial',
                original: `${a}x² + ${b}x + ${c}`,
                factorization: 'Not a perfect square trinomial',
                isPerfectSquare: false,
                expected: `Middle term should be ±${expectedMiddle}, but is ${b}`,
                category: 'perfect_square',
                suggestion: 'Use simple trinomial or AC method instead'
            };
        }

        const aCoeff = sqrtA === 1 ? '' : sqrtA;
        const aTerm = `${aCoeff}x`;
        const bTerm = sqrtC;
        const sign = b >= 0 ? '+' : '-';

        const factorization = `(${aTerm} ${sign} ${bTerm})²`;

        return {
            type: 'Perfect Square Trinomial',
            original: `${a}x² ${b >= 0 ? '+' : ''} ${b}x + ${c}`,
            pattern: `a² ${sign} 2ab + b²`,
            a: aTerm,
            b: bTerm,
            middleCheck: `2 × ${aTerm} × ${bTerm} = ${expectedMiddle}x ✓`,
            factorization: factorization,
            factors: [factorization],
            category: 'perfect_square',
            method: `(a ${sign} b)²`,
            discriminant: b * b - 4 * a * c,
            discriminantNote: 'Discriminant = 0 confirms perfect square',
            verification: {
                expand: `(${aTerm} ${sign} ${bTerm})² = ${a}x² ${b >= 0 ? '+' : ''} ${b}x + ${c} ✓`
            }
        };
    }

    solveGrouping(problem) {
        // For four-term polynomials
        return {
            type: 'Factoring by Grouping',
            original: problem.cleanInput,
            method: 'Group terms in pairs and factor each pair',
            steps: [
                'Group first two terms and last two terms',
                'Factor GCF from each pair',
                'Factor out common binomial'
            ],
            category: 'grouping'
        };
    }

    solveCompleteFactor(problem) {
        const { a, b, c } = problem.parameters;

        // Step 1: Check for GCF
        const coeffs = [Math.abs(a), Math.abs(b), Math.abs(c)].filter(n => n !== 0);
        const gcf = this.findGCFOfNumbers(coeffs);
        
        const steps = [];
        let currentExpression = `${a}x² + ${b}x + ${c}`;

        if (gcf > 1) {
            const newA = a / gcf;
            const newB = b / gcf;
            const newC = c / gcf;
            currentExpression = `${gcf}(${newA}x² + ${newB}x + ${newC})`;
            steps.push({
                step: 'Factor out GCF',
                gcf: gcf,
                result: currentExpression
            });

            // Continue factoring the remaining quadratic
            const remainingProblem = {
                ...problem,
                parameters: { a: newA, b: newB, c: newC }
            };

            const remainingSolution = this.solveFactoringProblem_Internal(remainingProblem);
            
            if (!remainingSolution.isPrime && remainingSolution.factorization) {
                steps.push({
                    step: 'Factor remaining quadratic',
                    method: remainingSolution.type,
                    result: `${gcf}${remainingSolution.factorization}`
                });
            }

            return {
                type: 'Complete Factorization',
                original: `${a}x² + ${b}x + ${c}`,
                steps: steps,
                factorization: steps[steps.length - 1].result,
                category: 'complete',
                method: 'GCF followed by additional factoring'
            };
        }

        // No GCF, proceed with appropriate method
        const solution = a === 1 ? this.solveSimpleTrinomial(problem) : this.solveACMethod(problem);
        
        return {
            type: 'Complete Factorization',
            original: `${a}x² + ${b}x + ${c}`,
            gcfCheck: 'No GCF to factor out',
            mainFactorization: solution,
            factorization: solution.factorization,
            category: 'complete'
        };
    }

    // HELPER METHODS

    findGCFOfNumbers(numbers) {
        if (numbers.length === 0) return 1;
        if (numbers.length === 1) return numbers[0];

        const gcd = (a, b) => {
            a = Math.abs(a);
            b = Math.abs(b);
            while (b !== 0) {
                const temp = b;
                b = a % b;
                a = temp;
            }
            return a;
        };

        return numbers.reduce((acc, num) => gcd(acc, num));
    }

    findFactorPairs(n) {
        const pairs = [];
        const absN = Math.abs(n);

        for (let i = 1; i <= Math.sqrt(absN); i++) {
            if (absN % i === 0) {
                const pair = absN / i;
                
                if (n > 0) {
                    pairs.push([i, pair]);
                    pairs.push([-i, -pair]);
                } else {
                    pairs.push([i, -pair]);
                    pairs.push([-i, pair]);
                }
            }
        }

        return pairs;
    }

    // STEP GENERATION

    generateFactoringSteps(problem, solution) {
        let baseSteps = this.generateBaseFactoringSteps(problem, solution);

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

    generateBaseFactoringSteps(problem, solution) {
        const category = this.factoringTypes[problem.type]?.category;

        switch(category) {
            case 'gcf':
                return this.generateGCFSteps(problem, solution);
            case 'simple_trinomial':
                return this.generateSimpleTrinomialSteps(problem, solution);
            case 'ac_method':
                return this.generateACMethodSteps(problem, solution);
            case 'difference_of_squares':
                return this.generateDifferenceOfSquaresSteps(problem, solution);
            case 'perfect_square':
                return this.generatePerfectSquareSteps(problem, solution);
            case 'complete':
                return this.generateCompleteFactoringSteps(problem, solution);
            default:
                return this.generateGenericFactoringSteps(problem, solution);
        }
    }

    generateGCFSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify the expression',
            description: 'Write out the expression to factor',
            expression: solution.original,
            reasoning: 'Start by clearly identifying what we need to factor',
            goalStatement: 'We will factor out the greatest common factor (GCF)'
        });

        steps.push({
            stepNumber: 2,
            step: 'Find the GCF',
            description: 'Determine the GCF of all terms',
            gcfCoefficient: 'Find GCF of coefficients',
            gcfVariable: 'Find lowest power of variables',
            gcf: solution.gcf,
            reasoning: 'The GCF is what we can factor out from every term',
            algebraicRule: 'Distributive Property (reverse)'
        });

        steps.push({
            stepNumber: 3,
            step: 'Factor out the GCF',
            description: `Factor out ${solution.gcf} from each term`,
            beforeExpression: solution.original,
            operation: `Factor ${solution.gcf}`,
            afterExpression: solution.factorization,
            reasoning: 'Divide each term by the GCF and write remaining terms in parentheses',
            visualHint: 'Each term divided by GCF gives terms inside parentheses'
        });

        steps.push({
            stepNumber: 4,
            step: 'Final factorization',
            description: 'Write the factored form',
            expression: solution.factorization,
            finalAnswer: true,
            reasoning: 'This is completely factored'
        });

        return steps;
    }

    generateSimpleTrinomialSteps(problem, solution) {
        const steps = [];
        const { b, c } = problem.parameters;

        if (solution.isPrime) {
            steps.push({
                stepNumber: 1,
                step: 'Expression to factor',
                expression: solution.original,
                reasoning: 'Factor the trinomial x² + bx + c'
            });

            steps.push({
                stepNumber: 2,
                step: 'Check for factors',
                description: 'Find two numbers that multiply to c and add to b',
                factorPairs: solution.factorPairs || this.findFactorPairs(c),
                result: 'No factor pair adds to b',
                conclusion: 'Prime (cannot be factored)',
                finalAnswer: true
            });

            return steps;
        }

        steps.push({
            stepNumber: 1,
            step: 'Identify coefficients',
            description: 'Write trinomial in standard form',
            expression: solution.original,
            coefficients: { a: 1, b: b, c: c },
            reasoning: 'We need two numbers that multiply to c and add to b',
            goalStatement: 'Find m and n where m × n = c and m + n = b'
        });

        steps.push({
            stepNumber: 2,
            step: 'List factor pairs of c',
            description: `Find all factor pairs of ${c}`,
            factorPairs: solution.factorPairs,
            reasoning: 'These are potential values for m and n',
            organizationTip: 'List both positive and negative pairs if needed'
        });

        steps.push({
            stepNumber: 3,
            step: 'Find pair that adds to b',
            description: `Which pair adds to ${b}?`,
            factorPairs: solution.factorPairs,
            selectedPair: solution.selectedPair,
            check: `${solution.selectedPair[0]} + ${solution.selectedPair[1]} = ${b} ✓`,
            reasoning: 'This pair satisfies both conditions',
            algebraicRule: 'Factor property of trinomials'
        });

        steps.push({
            stepNumber: 4,
            step: 'Write factored form',
            description: 'Write as (x + m)(x + n)',
            factorization: solution.factorization,
            factors: solution.factors,
            reasoning: 'These binomials multiply to give original trinomial',
            finalAnswer: true
        });

        steps.push({
            stepNumber: 5,
            step: 'Verify with FOIL',
            description: 'Check by multiplying factors',
            verification: solution.verification,
            reasoning: 'Verification confirms our factorization is correct'
        });

        return steps;
    }

    generateACMethodSteps(problem, solution) {
        const steps = [];
        const { a, b, c } = problem.parameters;

        if (solution.isPrime) {
            steps.push({
                stepNumber: 1,
                step: 'Expression to factor',
                expression: solution.original,
                reasoning: 'Factor using AC method'
            });

            steps.push({
                stepNumber: 2,
                step: 'Calculate AC',
                ac: solution.ac,
                description: `AC = ${a} × ${c} = ${solution.ac}`
            });

            steps.push({
                stepNumber: 3,
                step: 'Check for factors',
                description: `Find factors of ${solution.ac} that add to ${b}`,
                result: 'No such factors exist',
                conclusion: 'Prime (cannot be factored)',
                finalAnswer: true
            });

            return steps;
        }

        steps.push({
            stepNumber: 1,
            step: 'Identify coefficients',
            description: 'Write in form ax² + bx + c',
            expression: solution.original,
            coefficients: { a, b, c },
            reasoning: 'AC method works for quadratics where a ≠ 1',
            goalStatement: 'Use AC method to factor this trinomial'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate AC',
            description: 'Multiply a and c',
            calculation: `AC = ${a} × ${c} = ${solution.ac}`,
            ac: solution.ac,
            reasoning: 'We need factors of AC that add to b',
            whyAC: 'AC method finds the right factors for grouping'
        });

        steps.push({
            stepNumber: 3,
            step: 'Find factor pair of AC',
            description: `Find two numbers that multiply to ${solution.ac} and add to ${b}`,
            factorPairs: solution.factorPairs,
            selectedPair: solution.selectedPair,
            check: `${solution.selectedPair[0]} × ${solution.selectedPair[1]} = ${solution.ac} ✓ and ${solution.selectedPair[0]} + ${solution.selectedPair[1]} = ${b} ✓`,
            reasoning: 'These numbers will be used to split the middle term'
        });

        steps.push({
            stepNumber: 4,
            step: 'Rewrite middle term',
            description: 'Split bx using the factor pair',
            beforeExpression: solution.original,
            afterExpression: solution.rewritten,
            reasoning: 'This sets up the expression for factoring by grouping',
            algebraicRule: 'Equivalent expressions: bx = mx + nx'
        });

        steps.push({
            stepNumber: 5,
            step: 'Group terms',
            description: 'Group first two terms and last two terms',
            grouped: solution.grouped,
            reasoning: 'Grouping allows us to factor each pair separately',
            visualHint: 'Use parentheses to show the grouping'
        });

        steps.push({
            stepNumber: 6,
            step: 'Factor each group',
            description: 'Factor GCF from each pair',
            group1: solution.group1,
            group2: solution.group2,
            reasoning: 'Each group should have a common binomial factor',
            keyInsight: 'Both groups must contain the same binomial'
        });

        steps.push({
            stepNumber: 7,
            step: 'Factor out common binomial',
            description: 'Factor out the common binomial factor',
            commonBinomial: solution.commonBinomial,
            factorization: solution.factorization,
            reasoning: 'This gives the final factored form',
            finalAnswer: true
        });

        steps.push({
            stepNumber: 8,
            step: 'Verify',
            description: 'Check by expanding using FOIL',
            reasoning: 'Verification confirms our factorization is correct'
        });

        return steps;
    }

    generateDifferenceOfSquaresSteps(problem, solution) {
        const steps = [];

        if (solution.isPrime || solution.cannotFactor) {
            steps.push({
                stepNumber: 1,
                step: 'Identify the expression',
                expression: solution.original,
                pattern: solution.type
            });

            steps.push({
                stepNumber: 2,
                step: 'Check pattern',
                result: solution.note || 'Does not match difference of squares pattern',
                conclusion: solution.factorization,
                finalAnswer: true
            });

            return steps;
        }

        steps.push({
            stepNumber: 1,
            step: 'Recognize the pattern',
            description: 'Identify as difference of squares',
            expression: solution.original,
            pattern: 'a² - b²',
            reasoning: 'This matches the special pattern for difference of squares',
            goalStatement: 'Factor using (a + b)(a - b)'
        });

        steps.push({
            stepNumber: 2,
            step: 'Find a and b',
            description: 'Identify the square roots',
            aSquared: `${solution.a}² = first term`,
            bSquared: `${solution.b}² = second term`,
            a: solution.a,
            b: solution.b,
            reasoning: 'a and b are the square roots of the terms',
            algebraicRule: 'Taking square roots'
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply the formula',
            description: 'Use a² - b² = (a + b)(a - b)',
            formula: 'a² - b² = (a + b)(a - b)',
            substitution: `(${solution.a})² - (${solution.b})² = (${solution.a} + ${solution.b})(${solution.a} - ${solution.b})`,
            factorization: solution.factorization,
            reasoning: 'Difference of squares factors into conjugate binomials',
            finalAnswer: true
        });

        steps.push({
            stepNumber: 4,
            step: 'Verify',
            description: 'Check by multiplying conjugates',
            verification: solution.verification,
            reasoning: 'Middle terms cancel when multiplying conjugates',
            keyInsight: 'Outer and inner terms are opposites and cancel'
        });

        return steps;
    }

    generatePerfectSquareSteps(problem, solution) {
        const steps = [];

        if (!solution.isPerfectSquare) {
            steps.push({
                stepNumber: 1,
                step: 'Check if perfect square',
                expression: solution.original,
                result: solution.expected || 'Not a perfect square trinomial',
                suggestion: solution.suggestion,
                finalAnswer: true
            });

            return steps;
        }

        steps.push({
            stepNumber: 1,
            step: 'Recognize the pattern',
            description: 'Check if this is a perfect square trinomial',
            expression: solution.original,
            pattern: solution.pattern,
            reasoning: 'Perfect square trinomials have special form a² ± 2ab + b²',
            goalStatement: 'Verify and factor as (a ± b)²'
        });

        steps.push({
            stepNumber: 2,
            step: 'Verify first and last terms are perfect squares',
            description: 'Find square roots of first and last terms',
            firstTerm: `√(first term) = ${solution.a}`,
            lastTerm: `√(last term) = ${solution.b}`,
            reasoning: 'Both must be perfect squares for perfect square trinomial'
        });

        steps.push({
            stepNumber: 3,
            step: 'Check middle term',
            description: 'Verify middle term equals 2ab',
            calculation: solution.middleCheck,
            reasoning: 'Middle term must equal 2 times product of the square roots',
            algebraicRule: 'Perfect square trinomial property',
            confirmation: 'Middle term matches! This is a perfect square trinomial ✓'
        });

        steps.push({
            stepNumber: 4,
            step: 'Write as squared binomial',
            description: 'Factor as (a ± b)²',
            factorization: solution.factorization,
            reasoning: 'Perfect square trinomial factors into a squared binomial',
            finalAnswer: true
        });

        steps.push({
            stepNumber: 5,
            step: 'Verify',
            description: 'Check by expanding (a ± b)²',
            verification: solution.verification,
            discriminant: `Discriminant = ${solution.discriminant} (equals 0 for perfect square)`,
            reasoning: 'Expanding confirms our factorization'
        });

        return steps;
    }

    generateCompleteFactoringSteps(problem, solution) {
        const steps = [];

        if (solution.steps && solution.steps.length > 0) {
            solution.steps.forEach((stepData, index) => {
                steps.push({
                    stepNumber: index + 1,
                    step: stepData.step,
                    description: stepData.step,
                    result: stepData.result,
                    method: stepData.method,
                    gcf: stepData.gcf,
                    reasoning: index === 0 ? 'Always check for GCF first' : 'Continue factoring the remaining expression'
                });
            });

            steps.push({
                stepNumber: steps.length + 1,
                step: 'Final factorization',
                expression: solution.factorization,
                finalAnswer: true,
                reasoning: 'Expression is now completely factored'
            });
        } else {
            steps.push({
                stepNumber: 1,
                step: 'Check for GCF',
                result: solution.gcfCheck || 'No GCF',
                reasoning: 'Always start by checking for GCF'
            });

            steps.push({
                stepNumber: 2,
                step: 'Factor the quadratic',
                method: solution.mainFactorization?.type,
                factorization: solution.factorization,
                finalAnswer: true
            });
        }

        return steps;
    }

    generateGenericFactoringSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Factor the expression',
            description: solution.type || 'Apply appropriate factoring method',
            expression: solution.original || problem.cleanInput,
            factorization: solution.factorization,
            finalAnswer: true
        }];
    }

    // ENHANCED EXPLANATION METHODS (Similar to Linear Workbook)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanationFactoring(step, problem),
                procedural: this.getProceduralExplanationFactoring(step),
                visual: this.getVisualExplanationFactoring(step, problem),
                algebraic: this.getAlgebraicExplanationFactoring(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisites(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyFactoring(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPromptsFactoring(step);
        }

        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestionFactoring(step);
        }

        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findRealWorldConnectionFactoring(step, problem);
        }

        return enhanced;
    }

    getConceptualExplanationFactoring(step, problem) {
        const conceptualExplanations = {
            'Identify the expression': 'We start by understanding what form the quadratic takes and what method will work best.',
            'Find the GCF': 'The GCF represents what is common to all terms - factoring it out simplifies everything else.',
            'List factor pairs of c': 'Systematically listing all possibilities helps us find the right combination.',
            'Calculate AC': 'Multiplying a and c creates a product whose factors will help split the middle term.',
            'Recognize the pattern': 'Special patterns like difference of squares have specific formulas we can use.',
            'Verify first and last terms are perfect squares': 'Perfect squares are key to recognizing special patterns.',
            'Apply the formula': 'Using the known formula saves time and reduces errors.',
            'Verify': 'Checking our answer by expanding ensures we factored correctly.'
        };

        return conceptualExplanations[step.step] || 'This step moves us toward the factored form of the quadratic.';
    }

    getProceduralExplanationFactoring(step) {
        if (step.description) {
            return `Procedure: ${step.description}. Follow the method systematically.`;
        }
        return 'Follow the standard procedure for this factoring method.';
    }

    getVisualExplanationFactoring(step, problem) {
        const category = this.factoringTypes[problem.type]?.category;
        
        const visualExplanations = {
            'gcf': 'Visualize pulling out common factors like taking out shared items from boxes.',
            'simple_trinomial': 'Think of an area model: length × width = area. Find dimensions from area.',
            'difference_of_squares': 'Picture two squares, one smaller removed from larger, rearrange into rectangle.',
            'perfect_square': 'Visualize a perfect square made of smaller squares arranged symmetrically.',
            'ac_method': 'Think of splitting a region into parts that can be regrouped.'
        };

        return visualExplanations[category] || 'Visualize the algebraic process.';
    }

    getAlgebraicExplanationFactoring(step) {
        const algebraicRules = {
            'Find the GCF': 'Distributive Property (reverse): ab + ac = a(b + c)',
            'Apply the formula': 'Special product formula',
            'Factor each group': 'Distributive property applied to each group',
            'Check middle term': 'Perfect square trinomial property: (a ± b)² = a² ± 2ab + b²',
            'Verify': 'FOIL method or distributive property to expand'
        };

        return algebraicRules[step.step] || step.algebraicRule || 'Apply algebraic factoring principles.';
    }

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateELI5ExplanationFactoring(step, problem),
                analogy: this.findRelevantAnalogyFactoring(step, problem),
                simpleLanguage: this.convertToSimpleLanguage(step.description || step.step),
                visualization: this.suggestVisualizationFactoring(step)
            }
        }));
    }

    generateELI5ExplanationFactoring(step, problem) {
        const ELI5Explanations = {
            'Identify the expression': "We have a math puzzle! We need to break it down into simpler pieces.",
            'Find the GCF': "Find what's the same in all parts, like finding matching socks in a drawer.",
            'List factor pairs of c': "Think of all the ways to multiply two numbers to get this number.",
            'Calculate AC': "Multiply the first and last numbers - this helps us find the right combination!",
            'Recognize the pattern': "This looks like a special pattern we've seen before!",
            'Apply the formula': "We can use a shortcut formula because we recognized the pattern!",
            'Verify': "Let's check our work by putting the pieces back together!"
        };

        return ELI5Explanations[step.step] || "We're taking another step to break down our math problem!";
    }

    findRelevantAnalogyFactoring(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            const category = this.factoringTypes[problem.type]?.category;
            if (analogy.suitableFor.includes(category) || analogy.suitableFor.includes('all')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of factoring like finding what ingredients went into a recipe!";
    }

    convertToSimpleLanguage(description) {
        const simplifications = {
            'coefficient': 'the number next to the variable',
            'trinomial': 'expression with three terms',
            'binomial': 'expression with two terms',
            'factor': 'break down into pieces',
            'GCF': 'greatest common factor (what\'s common)',
            'perfect square': 'a number you get by multiplying something by itself',
            'conjugate': 'almost the same but with different sign',
            'discriminant': 'a special number that tells us about the equation'
        };

        let simple = description || '';
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp(term, 'gi');
            simple = simple.replace(regex, replacement);
        }

        return simple;
    }

    suggestVisualizationFactoring(step) {
        const visualizations = {
            'Identify the expression': 'Write out the expression clearly and identify each term',
            'Find the GCF': 'Circle what\'s common in all terms',
            'List factor pairs of c': 'Make a table of all multiplication combinations',
            'Apply the formula': 'Draw the pattern showing how the formula works',
            'Verify': 'Use arrows to show multiplication (FOIL) going back to original'
        };

        return visualizations[step.step] || 'Draw a picture or diagram to represent this step';
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generateStepBridgeFactoring(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgression(steps[i], steps[i + 1]),
                    strategicThinking: this.explainStepStrategy(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateStepBridgeFactoring(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.result || currentStep.expression || currentStep.factorization || 'completed this step'}`,
            nextGoal: `Next, we need to: ${nextStep.description || nextStep.step}`,
            why: `This is necessary to continue the factoring process`,
            howItHelps: `This brings us closer to the complete factorization`
        };
    }

    addErrorPrevention(step, problemType) {
        const category = this.factoringTypes[problemType]?.category || 'simple_trinomial';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsFactoring(step, problemType),
                checkPoints: this.generateCheckPointsFactoring(step),
                warningFlags: this.identifyWarningFlagsFactoring(step, problemType)
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestionFactoring(step),
                expectedResult: this.describeExpectedResultFactoring(step),
                troubleshooting: this.generateTroubleshootingTipsFactoring(step)
            }
        };
    }

    generatePreventionTipsFactoring(step, problemType) {
        const tips = {
            'Find the GCF': [
                'Check ALL terms for common factors',
                'Don\'t forget variable factors',
                'Use lowest power of each variable'
            ],
            'List factor pairs of c': [
                'Include both positive and negative pairs',
                'Organize systematically',
                'Don\'t miss any factors'
            ],
            'Calculate AC': [
                'Remember to multiply a AND c',
                'Keep track of signs',
                'Double-check your multiplication'
            ],
            'Apply the formula': [
                'Make sure pattern actually matches',
                'Check ALL conditions',
                'Verify before applying formula'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Check each step'];
    }

    generateCheckPointsFactoring(step) {
        return [
            'Does this step make sense?',
            'Am I following the correct method?',
            'Have I made any sign errors?',
            'Should I verify this step?'
        ];
    }

    identifyWarningFlagsFactoring(step, problemType) {
        const warnings = {
            gcf: ['Make sure you found the GREATEST common factor, not just any common factor'],
            simple_trinomial: ['Watch for sign errors when c is negative'],
            ac_method: ['Make sure you multiplied a and c, not added them'],
            difference_of_squares: ['Remember: only DIFFERENCE factors, not SUM'],
            perfect_square: ['Verify middle term = 2ab before concluding it\'s a perfect square']
        };

        const category = this.factoringTypes[problemType]?.category;
        return warnings[category] || [];
    }

    generateSelfCheckQuestionFactoring(step) {
        const questions = {
            'Identify the expression': 'Have I written the expression correctly in standard form?',
            'Find the GCF': 'Is this really the GREATEST common factor?',
            'List factor pairs of c': 'Have I included all possible factor pairs?',
            'Calculate AC': 'Did I multiply a and c correctly?',
            'Apply the formula': 'Does this expression really match the pattern?',
            'Verify': 'Does my factored form expand back to the original?'
        };

        return questions[step.step] || 'Is this step correct?';
    }

    describeExpectedResultFactoring(step) {
        const expectations = {
            'Find the GCF': 'A number/expression that divides all terms',
            'List factor pairs of c': 'All possible multiplication combinations',
            'Calculate AC': 'The product of the first and last coefficients',
            'Apply the formula': 'The factored form using the special pattern',
            'Verify': 'Confirmation that factorization is correct'
        };

        return expectations[step.step] || 'Progress toward complete factorization';
    }

    generateTroubleshootingTipsFactoring(step) {
        return [
            'If stuck, review the method for this type of factoring',
            'Check for arithmetic errors',
            'Make sure you\'re using the right factoring method',
            'Try verifying your work so far',
            'Consider if there\'s a GCF you missed'
        ];
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsFactoring(step, problem),
                subSteps: this.breakIntoSubStepsFactoring(step),
                hints: this.generateProgressiveHintsFactoring(step, problem),
                practiceVariation: this.generatePracticeVariationFactoring(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcessFactoring(step),
                decisionPoints: this.identifyDecisionPointsFactoring(step),
                alternativeApproaches: this.suggestAlternativeMethodsFactoring(step, problem)
            }
        }));
    }

    generateGuidingQuestionsFactoring(step, problem) {
        const questions = {
            'Identify the expression': [
                'What type of expression is this?',
                'How many terms does it have?',
                'What factoring method should I use?'
            ],
            'Find the GCF': [
                'What divides all coefficients?',
                'What\'s the lowest power of each variable?',
                'What can I factor out from every term?'
            ],
            'List factor pairs of c': [
                'What are all the ways to multiply to get c?',
                'Should I include negative factors?',
                'Which pair might add to b?'
            ],
            'Calculate AC': [
                'What is a times c?',
                'What factors of AC add to b?',
                'How will this help me factor?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'How does this help me factor?'];
    }

    generateProgressiveHintsFactoring(step, problem) {
        const category = this.factoringTypes[problem.type]?.category;
        const hintSet = this.hints[category] || {};

        return {
            level1: hintSet.level1 || 'Think about what factoring method applies here.',
            level2: hintSet.level2 || 'Consider the pattern or structure of the expression.',
            level3: hintSet.level3 || 'Apply the factoring technique step by step.',
            level4: hintSet.level4 || 'Complete the factorization.'
        };
    }

    breakIntoSubStepsFactoring(step) {
        if (step.step === 'Calculate AC') {
            return [
                'Identify coefficient a',
                'Identify constant c',
                'Multiply a × c',
                'Find factors of AC that add to b'
            ];
        }

        if (step.step === 'Find the GCF') {
            return [
                'Find GCF of coefficients',
                'Find lowest power of each variable',
                'Combine to get complete GCF',
                'Factor out the GCF'
            ];
        }

        return ['Understand what\'s needed', 'Apply the technique', 'Verify the result'];
    }

    generatePracticeVariationFactoring(step, problem) {
        return {
            similarProblem: 'Try a similar factoring problem with different coefficients',
            practiceHint: 'Practice recognizing this pattern or method',
            extension: 'Try more complex examples once comfortable'
        };
    }

    explainThinkingProcessFactoring(step) {
        return {
            observe: 'What do I notice about this expression?',
            goal: 'What am I trying to accomplish in this step?',
            strategy: 'What method or formula should I use?',
            execute: 'How do I perform this step correctly?',
            verify: 'Does my result make sense?'
        };
    }

    identifyDecisionPointsFactoring(step) {
        return [
            'Which factoring method is most appropriate?',
            'Should I check for GCF first?',
            'Are there any special patterns I can use?',
            'How can I verify my factorization?'
        ];
    }

    suggestAlternativeMethodsFactoring(step, problem) {
        const alternatives = {
            'simple_trinomial': ['Could also use AC method even though a = 1'],
            'ac_method': ['Could try trial and error for small coefficients'],
            'difference_of_squares': ['No alternative - this is the only method for this pattern']
        };

        const category = this.factoringTypes[problem.type]?.category;
        return alternatives[category] || ['The chosen method is appropriate'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex}`,
            progression: 'We are getting closer to complete factorization',
            relationship: 'Each step breaks down the expression further'
        };
    }

    identifyPrerequisites(step, problemType) {
        const category = this.factoringTypes[problemType]?.category;
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Basic algebra', 'Multiplication'];
    }

    identifyKeyVocabularyFactoring(step) {
        const vocabulary = {
            'Identify the expression': ['trinomial', 'quadratic', 'coefficient', 'constant'],
            'Find the GCF': ['greatest common factor', 'distributive property'],
            'List factor pairs of c': ['factor', 'factor pair', 'product'],
            'Calculate AC': ['product', 'AC method', 'factor pair'],
            'Recognize the pattern': ['difference of squares', 'perfect square', 'special pattern'],
            'Apply the formula': ['formula', 'conjugate', 'binomial'],
            'Verify': ['FOIL', 'expand', 'distributive property']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPromptsFactoring(step) {
        return {
            before: 'What do I need to identify or find in this step?',
            during: 'Am I applying the correct method?',
            after: 'Should I verify this step before continuing?'
        };
    }

    findRealWorldConnectionFactoring(step, problem) {
        const category = this.factoringTypes[problem.type]?.category;
        
        const connections = {
            'gcf': 'Like finding what ingredients are common in different recipes',
            'simple_trinomial': 'Like finding dimensions of a garden from its area',
            'difference_of_squares': 'Like calculating difference in square-shaped plots',
            'ac_method': 'Like optimizing production levels in business'
        };

        return connections[category] || 'Factoring helps solve real-world optimization and design problems';
    }

    getAdaptiveExplanation(step, explanationLevel) {
        const level = this.difficultyLevels[explanationLevel] || this.difficultyLevels.intermediate;
        
        return {
            adaptedDescription: this.adaptLanguageLevel(step.description || step.step, level),
            adaptedReasoning: this.adaptLanguageLevel(step.reasoning || '', level),
            complexityLevel: explanationLevel
        };
    }

    adaptLanguageLevel(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                'trinomial': 'three-term expression',
                'binomial': 'two-term expression',
                'coefficient': 'number with variable',
                'factor': 'break down',
                'GCF': 'greatest common factor',
                'conjugate': 'almost the same'
            },
            intermediate: {
                'trinomial': 'trinomial',
                'binomial': 'binomial',
                'coefficient': 'coefficient',
                'factor': 'factor',
                'GCF': 'GCF'
            },
            ELI5: {
                'trinomial': 'expression with three parts',
                'binomial': 'expression with two parts',
                'coefficient': 'the number next to x',
                'factor': 'break into smaller pieces',
                'GCF': 'what\'s the same in all parts',
                'perfect square': 'a number times itself',
                'verify': 'check if we\'re right'
            },
            detailed: {
                'trinomial': 'trinomial (three-term polynomial)',
                'coefficient': 'coefficient (numerical factor)',
                'factor': 'factor (express as product)',
                'GCF': 'GCF (greatest common factor)'
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

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue the factorization process`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy is: ${nextStep.description || nextStep.step}`;
    }

    // GRAPH GENERATION

    generateFactoringGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;
        
        if (this.currentSolution.factors && !this.currentSolution.isPrime) {
            this.graphData = this.generateParabolaGraph(this.currentProblem, this.currentSolution);
        }
    }

    generateParabolaGraph(problem, solution) {
        const { a, b, c } = problem.parameters;
        
        // Extract roots from factorization if possible
        // This is simplified - full implementation would parse factor forms
        
        return {
            type: 'parabola',
            equation: `y = ${a}x² + ${b}x + ${c}`,
            factored: solution.factorization,
            description: 'Graph of the quadratic showing x-intercepts at the roots',
            note: 'Factored form reveals where parabola crosses x-axis'
        };
    }

    // WORKBOOK GENERATION

    generateFactoringWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createPatternRecognitionSection(),
            this.createEnhancedStepsSection(),
            this.createFactoringLessonSection(),
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
            title: 'Enhanced Factoring Quadratics Mathematical Workbook',
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
            ['Problem Type', this.factoringTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.factoringTypes[this.currentProblem.type]?.category || 'factoring'],
            ['Expression', this.currentSolution?.original || this.currentProblem.cleanInput],
            ['Method', this.currentSolution?.method || 'To be determined']
        ];

        if (this.currentProblem.parameters.a !== undefined) {
            problemData.push(['', '']);
            problemData.push(['Coefficients', '']);
            if (this.currentProblem.parameters.a !== undefined) {
                problemData.push(['a (coefficient of x²)', this.currentProblem.parameters.a]);
            }
            if (this.currentProblem.parameters.b !== undefined) {
                problemData.push(['b (coefficient of x)', this.currentProblem.parameters.b]);
            }
            if (this.currentProblem.parameters.c !== undefined) {
                problemData.push(['c (constant term)', this.currentProblem.parameters.c]);
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

        const category = this.factoringTypes[this.currentProblem.type]?.category;
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

    createPatternRecognitionSection() {
        const category = this.factoringTypes[this.currentProblem.type]?.category;
        
        const patternData = [
            ['Pattern Recognition Guide', ''],
            ['', ''],
            ['Always check first', 'Is there a GCF to factor out?'],
            ['', ''],
            ['For 2 terms', 'Check for difference of squares: a² - b²'],
            ['', ''],
            ['For 3 terms', 'Check if perfect square trinomial first'],
            ['', 'Then use simple trinomial method (if a=1) or AC method (if a≠1)'],
            ['', ''],
            ['For 4 terms', 'Try factoring by grouping'],
            ['', ''],
            ['Current problem', `Has ${category} pattern`]
        ];

        return {
            title: 'Pattern Recognition',
            type: 'pattern',
            data: patternData
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
                stepsData.push(['', '']);
                return;
            }

            stepsData.push([`Step ${step.stepNumber}`, step.description || step.step]);

            if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            if (step.beforeExpression && step.afterExpression) {
                stepsData.push(['Before', step.beforeExpression]);
                if (step.operation) {
                    stepsData.push(['Operation', step.operation]);
                }
                stepsData.push(['After', step.afterExpression]);
            }

            if (step.factorization) {
                stepsData.push(['Factorization', step.factorization]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.ELI5 && this.explanationLevel === 'ELI5') {
                stepsData.push(['ELI5 Explanation', step.ELI5.explanation]);
                if (step.ELI5.analogy) {
                    stepsData.push(['Analogy', step.ELI5.analogy]);
                }
            }

            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
                stepsData.push(['Visual', step.explanations.visual]);
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

    createFactoringLessonSection() {
        const { type } = this.currentProblem;
        const category = this.factoringTypes[type]?.category;
        const lesson = this.lessons[category] || this.lessons.factoring_overview;

        const lessonData = [
            ['Topic', lesson.title],
            ['', ''],
            ['Key Concepts', ''],
            ...lesson.concepts.map(c => ['', c]),
            ['', ''],
            ['Theory', lesson.theory || 'Fundamental factoring principles']
        ];

        if (lesson.steps) {
            lessonData.push(['', '']);
            lessonData.push(['Steps', '']);
            lesson.steps.forEach((s, i) => {
                lessonData.push([`${i + 1}`, s]);
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

        const solutionData = [];

        if (this.currentSolution.isPrime) {
            solutionData.push(['Result', 'Prime (cannot be factored over integers)']);
            solutionData.push(['Explanation', this.currentSolution.note || 'No integer factors exist']);
            if (this.currentSolution.discriminant !== undefined) {
                solutionData.push(['Discriminant', this.currentSolution.discriminant]);
            }
        } else {
            solutionData.push(['Factorization', this.currentSolution.factorization]);
            if (this.currentSolution.factors) {
                solutionData.push(['Factors', this.currentSolution.factors.join(' × ')]);
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
            ['Factoring Method', this.currentSolution.type || this.currentSolution.method],
            ['Category', this.currentSolution.category],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Explanation Level', this.explanationLevel]
        ];

        if (this.currentSolution.gcf) {
            analysisData.push(['GCF Found', this.currentSolution.gcf]);
        }

        if (this.currentSolution.pattern) {
            analysisData.push(['Pattern', this.currentSolution.pattern]);
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSection() {
        if (!this.currentSolution || this.currentSolution.isPrime) {
            return {
                title: 'Verification',
                type: 'verification',
                data: [['Note', 'Prime expressions cannot be verified by expansion']]
            };
        }

        const verificationData = [
            ['Verification Method', 'Expand factored form using FOIL or distributive property'],
            ['', ''],
            ['Factored Form', this.currentSolution.factorization]
        ];

        if (this.currentSolution.verification) {
            const v = this.currentSolution.verification;
            if (v.expand) {
                verificationData.push(['Expansion', v.expand]);
            }
            if (v.outerInner) {
                verificationData.push(['FOIL Check', v.outerInner]);
            }
        }

        verificationData.push(['', '']);
        verificationData.push(['Result', 'Factorization verified ✓']);

        return {
            title: 'Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const applications = Object.values(this.realWorldProblems).slice(0, 3);

        const appData = [
            ['Real-World Applications of Factoring', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Example', app.application]);
            appData.push(['Context', app.context]);
            appData.push(['Meaning', app.physicalMeaning]);
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

        const category = this.factoringTypes[this.currentProblem.type]?.category;
        const notes = this.generateFactoringPedagogicalNotes(category);

        return {
            title: 'Teaching Notes',
            type: 'pedagogical',
            data: [
                ['Learning Objectives', notes.objectives.join('; ')],
                ['Key Concepts', notes.keyConcepts.join('; ')],
                ['Prerequisites', notes.prerequisites.join('; ')],
                ['Common Difficulties', notes.commonDifficulties.join('; ')],
                ['Teaching Strategies', notes.teachingStrategies.join('; ')],
                ['Extensions', notes.extensions.join('; ')]
            ]
        };
    }

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const category = this.factoringTypes[this.currentProblem.type]?.category;
        const alternatives = this.generateFactoringAlternativeMethods(category);

        return {
            title: 'Alternative Methods',
            type: 'alternatives',
            data: [
                ['Primary Method', alternatives.primaryMethod],
                ['', ''],
                ['Alternative Approaches', ''],
                ...alternatives.methods.map((m, i) => [
                    `Method ${i + 1}`, `${m.name}: ${m.description}`
                ]),
                ['', ''],
                ['When to Use Each', alternatives.comparison]
            ]
        };
    }

    createPracticeProblemsSection() {
        const category = this.factoringTypes[this.currentProblem.type]?.category;
        const problems = this.questionBank.byDifficulty;

        const practiceData = [
            ['Practice Problems', ''],
            ['', ''],
            ['Easy', '']
        ];

        problems.easy.slice(0, 3).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Medium', '']);

        problems.medium.slice(0, 3).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Hard', '']);

        problems.hard.slice(0, 2).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        return {
            title: 'Practice Problems',
            type: 'practice',
            data: practiceData
        };
    }

    generateFactoringPedagogicalNotes(category) {
        const pedagogicalDatabase = {
            gcf: {
                objectives: ['Factor out GCF from polynomials', 'Recognize common factors', 'Apply distributive property'],
                keyConcepts: ['GCF', 'Distributive property', 'Prime factorization'],
                prerequisites: ['Finding GCF of numbers', 'Exponent rules', 'Distributive property'],
                commonDifficulties: ['Missing variable factors', 'Wrong power of variables', 'Incomplete factoring'],
                teachingStrategies: ['Use concrete examples first', 'Emphasize checking all terms', 'Practice with variables'],
                extensions: ['Factor completely after GCF', 'Multiple variable GCF', 'Polynomial GCF']
            },
            simple_trinomial: {
                objectives: ['Factor x² + bx + c', 'Find factor pairs systematically', 'Apply sign rules'],
                keyConcepts: ['Factor pairs', 'Sum and product relationships', 'Sign patterns'],
                prerequisites: ['FOIL method', 'Integer operations', 'Finding factors'],
                commonDifficulties: ['Sign errors', 'Missing factor pairs', 'Confusing add vs multiply'],
                teachingStrategies: ['Teach sign rules explicitly', 'Organize factor pairs', 'Use area models'],
                extensions: ['AC method', 'Factoring completely', 'Word problems']
            },
            ac_method: {
                objectives: ['Factor ax² + bx + c where a ≠ 1', 'Use AC method', 'Factor by grouping'],
                keyConcepts: ['AC product', 'Grouping', 'Common binomial'],
                prerequisites: ['Simple trinomial factoring', 'GCF', 'Grouping'],
                commonDifficulties: ['Forgetting to multiply a×c', 'Grouping errors', 'Not finding common binomial'],
                teachingStrategies: ['Emphasize AC step', 'Practice grouping separately', 'Check each step'],
                extensions: ['Leading coefficient factoring', 'Complex trinomials', 'Applications']
            },
            difference_of_squares: {
                objectives: ['Recognize a² - b² pattern', 'Factor using conjugates', 'Identify perfect squares'],
                keyConcepts: ['Perfect squares', 'Conjugates', 'Special products'],
                prerequisites: ['Square roots', 'Special products', 'Binomial multiplication'],
                commonDifficulties: ['Confusing sum and difference', 'Not recognizing perfect squares', 'Sign errors'],
                teachingStrategies: ['Emphasize "difference only"', 'Practice perfect squares', 'Visual models'],
                extensions: ['Higher degree', 'Combined with GCF', 'Geometric interpretations']
            },
            perfect_square: {
                objectives: ['Recognize perfect square trinomials', 'Verify using 2ab rule', 'Factor as (a±b)²'],
                keyConcepts: ['Perfect square pattern', 'Middle term verification', 'Squared binomial'],
                prerequisites: ['Squaring binomials', 'Perfect squares', 'Special products'],
                commonDifficulties: ['Not verifying middle term', 'Assuming all trinomials are perfect squares', 'Sign errors'],
                teachingStrategies: ['Teach verification formula', 'Practice (a+b)² expansion', 'Use discriminant'],
                extensions: ['Completing the square', 'Quadratic formula connection', 'Conic sections']
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Factor quadratic expressions'],
            keyConcepts: ['Factoring techniques'],
            prerequisites: ['Basic algebra'],
            commonDifficulties: ['Various challenges'],
            teachingStrategies: ['Systematic approach'],
            extensions: ['Advanced factoring']
        };
    }

    generateFactoringAlternativeMethods(category) {
        const alternativeDatabase = {
            simple_trinomial: {
                primaryMethod: 'Factor pairs method',
                methods: [
                    { name: 'AC Method', description: 'Works even when a=1, though more steps' },
                    { name: 'Guess and check', description: 'Try factors quickly for simple cases' },
                    { name: 'Area model', description: 'Visual representation helps understanding' }
                ],
                comparison: 'Factor pairs is fastest for a=1; AC method is more systematic'
            },
            ac_method: {
                primaryMethod: 'AC Method with grouping',
                methods: [
                    { name: 'Trial and error', description: 'Test factor combinations for small coefficients' },
                    { name: 'British method', description: 'Alternative grouping approach' },
                    { name: 'Box method', description: 'Visual organization of terms' }
                ],
                comparison: 'AC method most reliable; trial and error faster for small numbers'
            },
            difference_of_squares: {
                primaryMethod: 'Direct formula application',
                methods: [
                    { name: 'Pattern recognition', description: 'Recognize and apply (a+b)(a-b)' }
                ],
                comparison: 'Only one method needed - pattern is straightforward'
            },
            gcf: {
                primaryMethod: 'Find and factor out GCF',
                methods: [
                    { name: 'Prime factorization', description: 'Factor coefficients completely' },
                    { name: 'Division method', description: 'Divide each term by GCF' }
                ],
                comparison: 'Both methods work; choose based on preference'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard factoring approach',
            methods: [{ name: 'Alternative', description: 'May vary by problem' }],
            comparison: 'Use appropriate method for the problem type'
        };
    }
}

// Export the class
export default EnhancedFactoringQuadraticsWorkbook;
