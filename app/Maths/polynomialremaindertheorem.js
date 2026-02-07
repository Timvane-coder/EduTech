// Enhanced Polynomial Remainder Factor Mathematical Workbook
import * as math from 'mathjs';

export class EnhancedPolynomialRemainderFactorWorkbook {
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
        this.initializeRemainderFactorSolvers();
        this.initializeRemainderFactorLessons();
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
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±', 'sqrt': '√',
            // Greek letters
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            // Special symbols
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'perpendicular': '⊥', 'parallel': '∥', 'divides': '|'
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

    initializeRemainderFactorLessons() {
        this.lessons = {
            remainder_theorem: {
                title: "The Remainder Theorem",
                concepts: [
                    "When polynomial P(x) is divided by (x - c), remainder is P(c)",
                    "Links division and evaluation",
                    "Provides quick way to find remainders",
                    "Foundation for Factor Theorem"
                ],
                theory: "The Remainder Theorem states: If a polynomial P(x) is divided by (x - c), the remainder is P(c). This connects polynomial division to polynomial evaluation.",
                keyFormulas: {
                    "Remainder Theorem": "P(x) = (x - c)Q(x) + R, where R = P(c)",
                    "Division Identity": "Dividend = Divisor × Quotient + Remainder",
                    "Finding Remainder": "R = P(c) when dividing by (x - c)"
                },
                solvingSteps: [
                    "Identify the polynomial P(x)",
                    "Identify the divisor (x - c)",
                    "Find c by setting (x - c) = 0",
                    "Evaluate P(c)",
                    "P(c) is the remainder"
                ],
                applications: [
                    "Quickly finding remainders without long division",
                    "Checking polynomial division",
                    "Testing if binomial is a factor",
                    "Error detection in polynomial calculations"
                ],
                visualizations: [
                    "Division algorithm diagram",
                    "Polynomial evaluation graph",
                    "Remainder as y-intercept shift"
                ]
            },

            factor_theorem: {
                title: "The Factor Theorem",
                concepts: [
                    "(x - c) is a factor of P(x) if and only if P(c) = 0",
                    "Special case of Remainder Theorem where R = 0",
                    "c is a zero/root of P(x) means (x - c) divides P(x)",
                    "Connects roots and factors"
                ],
                theory: "The Factor Theorem states: (x - c) is a factor of P(x) if and only if P(c) = 0. This is the Remainder Theorem with remainder equal to zero.",
                keyFormulas: {
                    "Factor Theorem": "P(c) = 0 ⟺ (x - c) is a factor of P(x)",
                    "Factorization": "If P(c) = 0, then P(x) = (x - c)Q(x)",
                    "Finding Factors": "Test values c until P(c) = 0"
                },
                solvingSteps: [
                    "Evaluate P(c) for candidate value c",
                    "If P(c) = 0, then (x - c) is a factor",
                    "If P(c) ≠ 0, then (x - c) is not a factor",
                    "Use synthetic or long division to find Q(x)",
                    "Continue factoring Q(x) if possible"
                ],
                applications: [
                    "Finding factors of polynomials",
                    "Solving polynomial equations",
                    "Completely factoring polynomials",
                    "Finding all zeros/roots"
                ],
                connectionToRoots: "Zeros of P(x) ⟺ Factors (x - zero)"
            },

            synthetic_division: {
                title: "Synthetic Division",
                concepts: [
                    "Shortcut method for polynomial division by (x - c)",
                    "Only works for linear divisors",
                    "More efficient than long division",
                    "Produces quotient and remainder"
                ],
                theory: "Synthetic division is a simplified method of polynomial division when dividing by a linear factor (x - c). It uses only the coefficients.",
                keyFormulas: {
                    "Setup": "Use c (from x - c) and coefficients of P(x)",
                    "Process": "Bring down, multiply, add pattern",
                    "Result": "Bottom row gives quotient coefficients and remainder"
                },
                solvingSteps: [
                    "Write coefficients of P(x) in order (include 0 for missing terms)",
                    "Write c (from divisor x - c) to the left",
                    "Bring down first coefficient",
                    "Multiply by c, add to next coefficient",
                    "Repeat: multiply by c, add",
                    "Last number is remainder, others are quotient coefficients"
                ],
                applications: [
                    "Quick polynomial division",
                    "Finding remainders efficiently",
                    "Testing factors rapidly",
                    "Depressing polynomials (reducing degree)"
                ],
                advantages: [
                    "Faster than long division",
                    "Less writing required",
                    "Fewer arithmetic errors",
                    "Clear visual structure"
                ]
            },

            polynomial_division: {
                title: "Polynomial Long Division",
                concepts: [
                    "General method for any polynomial division",
                    "Works for divisors of any degree",
                    "Similar to numerical long division",
                    "Always produces quotient and remainder"
                ],
                theory: "Polynomial long division extends the idea of long division to polynomials. Division Algorithm: P(x) = D(x)Q(x) + R(x), where deg(R) < deg(D).",
                keyFormulas: {
                    "Division Algorithm": "P(x) = D(x)·Q(x) + R(x)",
                    "Degree Rule": "deg(R) < deg(D) or R = 0",
                    "Lead Term Division": "Divide leading terms to get next quotient term"
                },
                solvingSteps: [
                    "Arrange both polynomials in descending order",
                    "Divide leading term of dividend by leading term of divisor",
                    "Multiply entire divisor by this result",
                    "Subtract from dividend",
                    "Bring down next term",
                    "Repeat until degree of remainder < degree of divisor",
                    "Write result as quotient + remainder/divisor"
                ],
                applications: [
                    "Dividing by non-linear polynomials",
                    "Simplifying rational expressions",
                    "Partial fraction decomposition",
                    "Integration by polynomial division"
                ]
            },

            rational_root_theorem: {
                title: "Rational Root Theorem",
                concepts: [
                    "Provides possible rational zeros of polynomial",
                    "Limits testing to specific fractions",
                    "Based on leading and constant coefficients",
                    "Not all possibilities will be actual roots"
                ],
                theory: "If P(x) = aₙxⁿ + ... + a₁x + a₀ has integer coefficients and p/q is a rational zero (in lowest terms), then p divides a₀ and q divides aₙ.",
                keyFormulas: {
                    "Possible Rational Roots": "p/q where p|a₀ and q|aₙ",
                    "Testing": "Substitute each p/q into P(x) and check if P(p/q) = 0",
                    "Verification": "Use Factor Theorem to confirm"
                },
                solvingSteps: [
                    "Identify a₀ (constant term) and aₙ (leading coefficient)",
                    "List all factors of a₀ (these are possible p values)",
                    "List all factors of aₙ (these are possible q values)",
                    "Form all possible fractions ±p/q",
                    "Test each using Factor Theorem or synthetic division",
                    "Confirmed roots give factors (qx - p)"
                ],
                applications: [
                    "Finding rational zeros systematically",
                    "Starting point for complete factorization",
                    "Solving polynomial equations",
                    "Reducing search space for roots"
                ],
                limitations: [
                    "Only finds rational roots",
                    "Irrational and complex roots not detected",
                    "May have many candidates to test",
                    "Some polynomials have no rational roots"
                ]
            },

            complete_factorization: {
                title: "Complete Polynomial Factorization",
                concepts: [
                    "Expressing polynomial as product of irreducible factors",
                    "Combines multiple factoring techniques",
                    "Factor over integers, rationals, reals, or complex numbers",
                    "Completely factored form is unique (up to order and units)"
                ],
                theory: "Every polynomial can be factored into linear and irreducible quadratic factors over the reals. Over the complex numbers, every polynomial factors completely into linear factors (Fundamental Theorem of Algebra).",
                keyFormulas: {
                    "Linear Factors": "(x - r) for each root r",
                    "Quadratic Factors": "(x² + bx + c) with no real roots",
                    "Complete Form": "a(x - r₁)(x - r₂)...(x² + bx + c)...",
                    "Degree-Factors": "Degree n polynomial has n factors (counting multiplicity)"
                },
                solvingSteps: [
                    "Factor out GCF if any",
                    "Use Rational Root Theorem to find rational zeros",
                    "Use Factor Theorem and division to factor out (x - r)",
                    "Repeat on quotient polynomial",
                    "For irreducible quadratics, use quadratic formula to find complex roots",
                    "Write in completely factored form"
                ],
                applications: [
                    "Solving polynomial equations",
                    "Graphing polynomials (finding intercepts)",
                    "Simplifying rational functions",
                    "Partial fraction decomposition",
                    "Finding all zeros (real and complex)"
                ],
                strategies: [
                    "Start with Rational Root Theorem",
                    "Use synthetic division for efficiency",
                    "Look for patterns (difference of squares, sum/difference of cubes)",
                    "Group terms if appropriate",
                    "Use technology for higher-degree polynomials"
                ]
            },

            multiplicity: {
                title: "Multiplicity of Roots",
                concepts: [
                    "How many times a root appears",
                    "Affects graph behavior at x-intercept",
                    "Factor (x - r)ᵏ means root r has multiplicity k",
                    "Total of all multiplicities equals degree"
                ],
                theory: "A root r has multiplicity k if (x - r)ᵏ is a factor but (x - r)ᵏ⁺¹ is not. Multiplicity affects both algebra and graph behavior.",
                keyFormulas: {
                    "Multiplicity k": "P(x) = (x - r)ᵏQ(x) where Q(r) ≠ 0",
                    "Even Multiplicity": "Graph touches x-axis, doesn't cross",
                    "Odd Multiplicity": "Graph crosses x-axis",
                    "Derivative Test": "P(r) = P'(r) = ... = P⁽ᵏ⁻¹⁾(r) = 0, P⁽ᵏ⁾(r) ≠ 0"
                },
                graphicalBehavior: {
                    multiplicity1: "Crosses x-axis linearly",
                    multiplicity2: "Touches x-axis (parabolic)",
                    multiplicity3: "Crosses with flattening (cubic)",
                    evenMultiplicity: "Touches without crossing",
                    oddMultiplicity: "Crosses axis"
                },
                applications: [
                    "Sketching polynomial graphs",
                    "Understanding equation solutions",
                    "Optimization and calculus applications",
                    "Analyzing polynomial behavior near roots"
                ]
            },

            descartes_rule: {
                title: "Descartes' Rule of Signs",
                concepts: [
                    "Estimates number of positive and negative real roots",
                    "Based on sign changes in coefficients",
                    "Gives upper bound on number of roots",
                    "Actual number differs by even integers"
                ],
                theory: "Descartes' Rule: The number of positive real roots is either equal to the number of sign changes in P(x) or less by an even number. The number of negative real roots is determined by sign changes in P(-x).",
                keyFormulas: {
                    "Positive Roots": "Count sign changes in P(x)",
                    "Negative Roots": "Count sign changes in P(-x)",
                    "Possible Numbers": "Actual = counted - 2k for k = 0,1,2,..."
                },
                solvingSteps: [
                    "Write P(x) with all terms in standard form",
                    "Count sign changes in consecutive non-zero coefficients",
                    "This gives maximum positive roots (or 2 fewer, or 4 fewer, etc.)",
                    "Find P(-x) by replacing x with -x",
                    "Count sign changes in P(-x)",
                    "This gives maximum negative roots (or 2 fewer, or 4 fewer, etc.)"
                ],
                applications: [
                    "Narrowing down root search",
                    "Understanding polynomial structure",
                    "Guiding numerical methods",
                    "Theoretical analysis"
                ],
                limitations: [
                    "Doesn't identify specific roots",
                    "Doesn't count complex roots",
                    "Doesn't account for multiplicity precisely",
                    "Only provides possibilities, not certainties"
                ]
            },

            intermediate_value_theorem: {
                title: "Intermediate Value Theorem for Roots",
                concepts: [
                    "If P(a) and P(b) have opposite signs, root exists between a and b",
                    "Guarantees existence, not uniqueness",
                    "Works for continuous functions (all polynomials)",
                    "Used for root isolation and bracketing"
                ],
                theory: "For continuous function P(x), if P(a) < 0 and P(b) > 0 (or vice versa), then there exists c in (a,b) such that P(c) = 0.",
                keyFormulas: {
                    "Root Existence": "P(a)·P(b) < 0 ⟹ ∃c ∈ (a,b): P(c) = 0",
                    "Bracketing": "Find interval [a,b] where P(a) and P(b) differ in sign"
                },
                applications: [
                    "Locating roots on an interval",
                    "Bisection method for numerical root finding",
                    "Proving existence of solutions",
                    "Graphical analysis"
                ]
            }
        };
    }

    initializeRemainderFactorSolvers() {
        this.remainderFactorTypes = {
            // Remainder Theorem Problems
            remainder_basic: {
                patterns: [
                    /remainder.*when.*divided/i,
                    /find.*remainder/i,
                    /P\(.*\).*divided.*by/i
                ],
                solver: this.solveRemainderBasic.bind(this),
                name: 'Basic Remainder Theorem',
                category: 'remainder_theorem',
                description: 'Find remainder when P(x) is divided by (x - c)'
            },

            remainder_synthetic: {
                patterns: [
                    /synthetic.*division/i,
                    /use.*synthetic/i
                ],
                solver: this.solveRemainderSynthetic.bind(this),
                name: 'Remainder via Synthetic Division',
                category: 'synthetic_division',
                description: 'Use synthetic division to find remainder'
            },

            // Factor Theorem Problems
            factor_test: {
                patterns: [
                    /is.*factor/i,
                    /factor.*theorem/i,
                    /test.*if.*factor/i
                ],
                solver: this.solveFactorTest.bind(this),
                name: 'Factor Theorem Test',
                category: 'factor_theorem',
                description: 'Test if (x - c) is a factor using P(c) = 0'
            },

            find_factors: {
                patterns: [
                    /find.*factors/i,
                    /factor.*completely/i,
                    /factorize/i
                ],
                solver: this.solveFindFactors.bind(this),
                name: 'Find All Factors',
                category: 'complete_factorization',
                description: 'Find all factors of polynomial'
            },

            find_zeros: {
                patterns: [
                    /find.*zeros/i,
                    /find.*roots/i,
                    /solve.*equation/i
                ],
                solver: this.solveFindZeros.bind(this),
                name: 'Find All Zeros',
                category: 'complete_factorization',
                description: 'Find all zeros/roots of polynomial'
            },

            // Rational Root Theorem
            rational_roots: {
                patterns: [
                    /rational.*root.*theorem/i,
                    /possible.*rational.*roots/i,
                    /list.*possible.*roots/i
                ],
                solver: this.solveRationalRoots.bind(this),
                name: 'Rational Root Theorem',
                category: 'rational_root_theorem',
                description: 'Find possible rational roots using p/q'
            },

            // Division Problems
            polynomial_division: {
                patterns: [
                    /divide.*by/i,
                    /quotient.*remainder/i,
                    /long.*division/i
                ],
                solver: this.solvePolynomialDivision.bind(this),
                name: 'Polynomial Division',
                category: 'polynomial_division',
                description: 'Divide polynomial by another polynomial'
            },

            // Factorization with given root
            factor_with_root: {
                patterns: [
                    /given.*root/i,
                    /x.*=.*is.*root/i,
                    /factor.*given/i
                ],
                solver: this.solveFactorWithRoot.bind(this),
                name: 'Factor Given a Root',
                category: 'factor_theorem',
                description: 'Factor polynomial given one root'
            },

            // Construct polynomial from roots
            construct_polynomial: {
                patterns: [
                    /polynomial.*with.*roots/i,
                    /find.*polynomial.*zeros/i,
                    /construct.*from.*roots/i
                ],
                solver: this.solveConstructPolynomial.bind(this),
                name: 'Construct Polynomial from Roots',
                category: 'complete_factorization',
                description: 'Build polynomial given its roots'
            },

            // Multiplicity problems
            multiplicity_analysis: {
                patterns: [
                    /multiplicity/i,
                    /repeated.*root/i,
                    /double.*root/i
                ],
                solver: this.solveMultiplicityAnalysis.bind(this),
                name: 'Multiplicity Analysis',
                category: 'multiplicity',
                description: 'Analyze root multiplicities'
            },

            // Descartes' Rule
            descartes_rule: {
                patterns: [
                    /descartes.*rule/i,
                    /sign.*changes/i,
                    /positive.*negative.*roots/i
                ],
                solver: this.solveDescartesRule.bind(this),
                name: "Descartes' Rule of Signs",
                category: 'descartes_rule',
                description: 'Estimate number of positive and negative real roots'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            remainder_theorem: {
                'Evaluating P(c)': [
                    'Using wrong value of c (forgetting to solve x - c = 0)',
                    'Arithmetic errors in substitution',
                    'Sign errors with negative c values',
                    'Forgetting to include all terms of polynomial'
                ],
                'Identifying divisor': [
                    'Confusing (x - c) with (x + c)',
                    'Not recognizing c from different forms like (2x - 3)',
                    'Using c instead of -c when divisor is (x + c)'
                ]
            },
            factor_theorem: {
                'Testing factors': [
                    'Testing P(c) when divisor is (x + c) instead of P(-c)',
                    'Concluding factor when P(c) ≠ 0',
                    'Arithmetic errors in evaluation',
                    'Not testing all candidates systematically'
                ],
                'Finding quotient': [
                    'Errors in polynomial division after confirming factor',
                    'Not reducing degree correctly',
                    'Sign errors in coefficients'
                ]
            },
            synthetic_division: {
                'Setup errors': [
                    'Using wrong value of c (not from x - c = 0)',
                    'Missing zero coefficients for missing degree terms',
                    'Writing coefficients in wrong order',
                    'Forgetting constant term'
                ],
                'Process errors': [
                    'Adding instead of multiplying in steps',
                    'Multiplying instead of adding',
                    'Not bringing down first coefficient',
                    'Arithmetic errors in multiplication/addition'
                ],
                'Interpretation': [
                    'Misidentifying remainder vs quotient coefficients',
                    'Wrong degree assignment to quotient',
                    'Not recognizing last value as remainder'
                ]
            },
            rational_root_theorem: {
                'Listing candidates': [
                    'Forgetting ± signs',
                    'Missing some factor combinations',
                    'Not reducing fractions to lowest terms',
                    'Including 0 when constant term is non-zero'
                ],
                'Testing roots': [
                    'Not testing all candidates',
                    'Arithmetic errors in substitution',
                    'Stopping after finding one root',
                    'Not using synthetic division efficiently'
                ]
            },
            polynomial_division: {
                'Long division process': [
                    'Dividing wrong terms',
                    'Not aligning terms correctly',
                    'Sign errors in subtraction',
                    'Not bringing down terms properly',
                    'Stopping too early or too late'
                ],
                'Quotient and remainder': [
                    'Incorrect degree of quotient',
                    'Misidentifying remainder',
                    'Not satisfying degree condition for remainder'
                ]
            },
            complete_factorization: {
                'Strategy errors': [
                    'Not exhausting all factors',
                    'Missing repeated factors (multiplicity)',
                    'Forgetting to include leading coefficient',
                    'Not factoring over correct number system'
                ],
                'Algebraic errors': [
                    'Errors in factoring quadratics',
                    'Sign errors in binomial factors',
                    'Incorrect use of special patterns'
                ]
            }
        };

        this.errorPrevention = {
            sign_tracking: {
                reminder: 'Carefully track + and - signs, especially with (x + c) vs (x - c)',
                method: 'When divisor is (x + c), use c = -value in Remainder/Factor Theorem'
            },
            systematic_testing: {
                reminder: 'Test rational root candidates systematically using synthetic division',
                method: 'Organize candidates by denominator, test smallest values first'
            },
            coefficient_alignment: {
                reminder: 'Include zero coefficients for missing degree terms',
                method: 'Write polynomial in standard form with all degrees present'
            },
            verification: {
                reminder: 'Always verify factorization by multiplying factors back',
                method: 'Check that product of factors equals original polynomial'
            },
            degree_check: {
                reminder: 'Degree of quotient + degree of divisor = degree of dividend',
                method: 'Use degree as error-checking tool'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why theorems work and their mathematical meaning',
                language: 'intuitive with connections to division concepts'
            },
            procedural: {
                focus: 'Step-by-step algorithm for each method',
                language: 'clear sequential instructions'
            },
            visual: {
                focus: 'Graphical interpretation of remainders and factors',
                language: 'spatial and visual descriptions'
            },
            algebraic: {
                focus: 'Formal algebraic proofs and identities',
                language: 'precise mathematical notation and terminology'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple terms avoiding heavy jargon',
                detail: 'essential steps only',
                examples: 'low-degree polynomials with integer coefficients'
            },
            intermediate: {
                vocabulary: 'standard mathematical terminology',
                detail: 'main steps with brief explanations',
                examples: 'cubic and quartic polynomials, some fractional coefficients'
            },
            ELI5: {
                vocabulary: 'everyday language with analogies',
                detail: 'every step explained with why it works',
                examples: 'simple polynomials with concrete analogies',
                analogies: true,
                visualization: 'hands-on representations'
            },
            detailed: {
                vocabulary: 'full mathematical vocabulary and notation',
                detail: 'comprehensive with justifications and theory',
                examples: 'general cases, higher-degree polynomials'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex terms',
                detail: 'guided discovery with questions and hints',
                examples: 'carefully sequenced from easy to challenging'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            geometry_volume: {
                scenario: "Volume of a box with variable dimensions",
                context: "A box has volume V(x) = x³ + 2x² - 5x - 6. If one dimension is (x + 2), what are the other dimensions?",
                equation: "V(x) = (x + 2) · other dimensions",
                solution_approach: "Factor V(x) using (x + 2) as a factor",
                real_world_meaning: "Finding dimensions helps in manufacturing and design"
            },
            
            population_modeling: {
                scenario: "Population growth model",
                context: "Population P(t) = 2t³ - 5t² + 3t reaches zero (extinction) at certain times. When?",
                equation: "P(t) = 0",
                solution_approach: "Factor P(t) to find all zeros",
                real_world_meaning: "Predicting critical time points in population dynamics"
            },

            economics_cost: {
                scenario: "Break-even analysis",
                context: "Profit function P(x) = -x³ + 10x² - 25x + 16. At what production levels is profit zero?",
                equation: "P(x) = 0",
                solution_approach: "Use Rational Root Theorem and factoring",
                real_world_meaning: "Finding break-even points for business decisions"
            },

            physics_trajectory: {
                scenario: "Projectile motion",
                context: "Height h(t) = -5t² + 20t. When does projectile hit ground?",
                equation: "h(t) = 0",
                solution_approach: "Factor to find zeros (landing times)",
                real_world_meaning: "Calculating flight time and impact"
            },

            engineering_design: {
                scenario: "Structural stability",
                context: "Deflection of a beam d(x) = x⁴ - 13x² + 36. Where is deflection zero (support points)?",
                equation: "d(x) = 0",
                solution_approach: "Factor completely to find all support positions",
                real_world_meaning: "Optimal placement of structural supports"
            },

            chemistry_concentration: {
                scenario: "Chemical reaction equilibrium",
                context: "Concentration C(t) = t³ - 6t² + 11t - 6. When does concentration reach zero?",
                equation: "C(t) = 0",
                solution_approach: "Factor to find reaction completion times",
                real_world_meaning: "Predicting when reactants are fully consumed"
            },

            computer_science: {
                scenario: "Algorithm complexity analysis",
                context: "Runtime T(n) = n³ - 2n² + n. For what input sizes is runtime zero (trivial cases)?",
                equation: "T(n) = 0",
                solution_approach: "Factor to identify trivial input cases",
                real_world_meaning: "Understanding algorithm behavior at boundary cases"
            },

            agriculture: {
                scenario: "Crop yield optimization",
                context: "Yield Y(x) = -x³ + 12x² - 36x + 32 where x is fertilizer amount. When is yield 32?",
                equation: "Y(x) = 32, so -x³ + 12x² - 36x = 0",
                solution_approach: "Factor to find optimal fertilizer amounts",
                real_world_meaning: "Maximizing agricultural output efficiently"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            remainder_theorem: {
                skills: [
                    'Polynomial evaluation',
                    'Substitution',
                    'Order of operations',
                    'Working with negative numbers'
                ],
                priorKnowledge: [
                    'What is a polynomial',
                    'Degree of polynomial',
                    'Division algorithm concept'
                ],
                checkQuestions: [
                    "Evaluate P(x) = 2x² + 3x - 5 at x = 2",
                    "What is the degree of 3x⁴ - 2x² + 7?",
                    "In division, what are dividend, divisor, quotient, and remainder?"
                ]
            },

            factor_theorem: {
                skills: [
                    'Polynomial evaluation',
                    'Understanding of factors',
                    'Zero product property',
                    'Remainder Theorem'
                ],
                priorKnowledge: [
                    'What makes something a factor',
                    'Relationship between roots and factors',
                    'Remainder Theorem'
                ],
                checkQuestions: [
                    "If P(3) = 0, what can you conclude?",
                    "What is a root/zero of a polynomial?",
                    "State the Remainder Theorem"
                ]
            },

            synthetic_division: {
                skills: [
                    'Arithmetic operations (multiply and add)',
                    'Following algorithmic procedures',
                    'Working with polynomial coefficients',
                    'Recognizing missing terms'
                ],
                priorKnowledge: [
                    'Polynomial standard form',
                    'Coefficients and degrees',
                    'Place value for polynomials'
                ],
                checkQuestions: [
                    "Write x³ - 5x + 2 with all terms shown",
                    "What is the coefficient of x² in x³ + 3x - 1?",
                    "Multiply: 6 × (-3) then add 10"
                ]
            },

            rational_root_theorem: {
                skills: [
                    'Finding factors of integers',
                    'Working with fractions',
                    'Systematic listing',
                    'Factor Theorem testing'
                ],
                priorKnowledge: [
                    'What is a rational number',
                    'Factors and divisors',
                    'Lowest terms for fractions'
                ],
                checkQuestions: [
                    "List all factors of 12",
                    "What is -15/3 in lowest terms?",
                    "Is 2/3 rational or irrational?"
                ]
            },

            polynomial_division: {
                skills: [
                    'Long division with numbers',
                    'Polynomial subtraction',
                    'Aligning like terms',
                    'Degree concepts'
                ],
                priorKnowledge: [
                    'Numerical long division',
                    'Polynomial arithmetic',
                    'Standard form'
                ],
                checkQuestions: [
                    "Divide 156 by 12 using long division",
                    "Subtract: (3x² + 2x - 5) - (x² - x + 3)",
                    "What is the degree of 5x⁴ - 2x + 8?"
                ]
            },

            complete_factorization: {
                skills: [
                    'All factoring techniques',
                    'Quadratic formula',
                    'Rational Root Theorem',
                    'Synthetic division',
                    'Factor Theorem'
                ],
                priorKnowledge: [
                    'Factoring quadratics',
                    'Difference of squares',
                    'Sum/difference of cubes',
                    'Grouping'
                ],
                checkQuestions: [
                    "Factor: x² + 5x + 6",
                    "Factor: x² - 9",
                    "Use quadratic formula on x² - 3x + 2 = 0"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            division_algorithm: {
                description: "Visual representation of polynomial division",
                analogy: "Like dividing cookies into groups with some left over",
                visualization: "Dividend = Divisor × Quotient + Remainder",
                suitableFor: ['remainder_theorem', 'polynomial_division'],
                explanation: "Shows how polynomial division works like numerical division"
            },

            graph_intersection: {
                description: "Remainder as vertical distance on graph",
                analogy: "How far the polynomial is from being divisible",
                visualization: "Graph of P(x) and horizontal line at y = P(c)",
                suitableFor: ['remainder_theorem', 'factor_theorem'],
                explanation: "When remainder is 0, graph crosses x-axis (factor exists)"
            },

            factor_tree: {
                description: "Breaking polynomial into factor components",
                analogy: "Like a family tree showing how polynomial is built from factors",
                visualization: "Tree diagram with polynomial at top, factors branching down",
                suitableFor: ['complete_factorization', 'factor_theorem'],
                explanation: "Shows complete factorization structure"
            },

            synthetic_division_table: {
                description: "Structured table for synthetic division",
                analogy: "Like an organized assembly line for division",
                visualization: "Row of coefficients with operations shown",
                suitableFor: ['synthetic_division'],
                explanation: "Visual pattern of bring-down, multiply, add"
            },

            root_number_line: {
                description: "Zeros marked on number line",
                analogy: "Points where polynomial touches or crosses zero",
                visualization: "Number line with roots marked",
                suitableFor: ['find_zeros', 'complete_factorization'],
                explanation: "Shows location and relationship of roots"
            },

            multiplicity_graph: {
                description: "Graph behavior at roots of different multiplicities",
                analogy: "How the curve behaves at crossing points",
                visualization: "Graph showing touch vs cross at different roots",
                suitableFor: ['multiplicity'],
                explanation: "Even multiplicity touches, odd multiplicity crosses"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "Find remainder when P(x) = x² + 3x - 4 is divided by (x - 2)",
                    solution: "P(2) = 2² + 3(2) - 4 = 4 + 6 - 4 = 6",
                    answer: 6,
                    category: 'remainder_theorem',
                    steps: ["Identify c = 2 from (x - 2)", "Evaluate P(2)", "Calculate: 4 + 6 - 4 = 6"],
                    difficulty: "easy"
                },
                {
                    problem: "Is (x - 1) a factor of P(x) = x² - 5x + 4?",
                    solution: "P(1) = 1² - 5(1) + 4 = 1 - 5 + 4 = 0, so yes",
                    answer: "Yes, (x - 1) is a factor",
                    category: 'factor_theorem',
                    steps: ["Evaluate P(1)", "P(1) = 0", "Therefore (x - 1) is a factor"],
                    difficulty: "easy"
                },
                {
                    problem: "Use synthetic division: (x² + 4x + 3) ÷ (x + 1)",
                    solution: "Using c = -1: coefficients 1, 4, 3 → quotient x + 3, remainder 0",
                    answer: "Quotient: x + 3, Remainder: 0",
                    category: 'synthetic_division',
                    difficulty: "easy"
                }
            ],

            intermediate: [
                {
                    problem: "Find remainder when P(x) = 2x³ - 3x² + x - 5 is divided by (x + 2)",
                    solution: "P(-2) = 2(-2)³ - 3(-2)² + (-2) - 5 = -16 - 12 - 2 - 5 = -35",
                    answer: -35,
                    category: 'remainder_theorem',
                    steps: ["c = -2 from (x + 2)", "Evaluate P(-2)", "Calculate carefully with signs"],
                    difficulty: "medium"
                },
                {
                    problem: "Factor completely: x³ - 6x² + 11x - 6",
                    solution: "P(1) = 0, so (x-1) is factor. Division gives x² - 5x + 6 = (x-2)(x-3)",
                    answer: "(x - 1)(x - 2)(x - 3)",
                    category: 'complete_factorization',
                    steps: ["Test x = 1: P(1) = 0", "Divide by (x-1)", "Factor quotient", "Write complete factorization"],
                    difficulty: "medium"
                },
                {
                    problem: "List possible rational roots of 2x³ + x² - 13x + 6",
                    solution: "p: ±1, ±2, ±3, ±6; q: ±1, ±2; Possible: ±1, ±2, ±3, ±6, ±1/2, ±3/2",
                    answer: "±1, ±2, ±3, ±6, ±1/2, ±3/2",
                    category: 'rational_root_theorem',
                    difficulty: "medium"
                }
            ],

            advanced: [
                {
                    problem: "Factor completely: x⁴ - 5x² + 4",
                    solution: "Let u = x²: u² - 5u + 4 = (u-1)(u-4) = (x²-1)(x²-4) = (x-1)(x+1)(x-2)(x+2)",
                    answer: "(x - 1)(x + 1)(x - 2)(x + 2)",
                    category: 'complete_factorization',
                    steps: ["Recognize quadratic form in x²", "Factor as quadratic in u", "Substitute back", "Factor further"],
                    difficulty: "hard"
                },
                {
                    problem: "Find all zeros of P(x) = x³ - 2x² - 5x + 6",
                    solution: "Rational Root Theorem: try ±1, ±2, ±3, ±6. P(1) = 0, P(-2) = 0, P(3) = 0",
                    answer: "x = 1, -2, 3",
                    category: 'find_zeros',
                    steps: ["List rational candidates", "Test systematically", "All three rational roots found"],
                    difficulty: "hard"
                },
                {
                    problem: "Divide 2x⁴ - 3x³ + x - 5 by x² - 2x + 1",
                    solution: "Use polynomial long division",
                    answer: "Quotient: 2x² + x + 2, Remainder: 4x - 7",
                    category: 'polynomial_division',
                    difficulty: "hard"
                }
            ],

            byMethod: {
                remainder_theorem: [
                    { problem: "P(x) = x² + 2x - 3 divided by (x - 1)", answer: "Remainder = 0" },
                    { problem: "P(x) = x³ - 1 divided by (x + 1)", answer: "Remainder = -2" },
                    { problem: "P(x) = 2x² - 5x + 1 divided by (x + 2)", answer: "Remainder = 19" }
                ],
                factor_theorem: [
                    { problem: "Is (x + 2) a factor of x² + x - 2?", answer: "No" },
                    { problem: "Is (x - 3) a factor of x³ - 27?", answer: "Yes" },
                    { problem: "Is (x + 1) a factor of x⁴ - 1?", answer: "Yes" }
                ],
                synthetic_division: [
                    { problem: "(x³ + 2x² - 5x - 6) ÷ (x - 2)", answer: "Q: x² + 4x + 3, R: 0" },
                    { problem: "(x³ - 3x + 2) ÷ (x + 2)", answer: "Q: x² - 2x + 1, R: 0" },
                    { problem: "(2x³ + x - 5) ÷ (x - 1)", answer: "Q: 2x² + 2x + 3, R: -2" }
                ],
                complete_factorization: [
                    { problem: "Factor: x³ - 8", answer: "(x - 2)(x² + 2x + 4)" },
                    { problem: "Factor: x³ + 3x² - 4x - 12", answer: "(x + 3)(x + 2)(x - 2)" },
                    { problem: "Factor: x⁴ - 16", answer: "(x - 2)(x + 2)(x² + 4)" }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            remainder_vs_quotient: {
                misconception: "Confusing remainder with quotient in division",
                reality: "Remainder is what's left over; quotient is how many times divisor goes into dividend",
                correctiveExample: "In 17 ÷ 5: quotient is 3, remainder is 2. Same principle for polynomials.",
                commonIn: ['remainder_theorem', 'polynomial_division']
            },

            factor_means_zero: {
                misconception: "Thinking (x - c) is a factor means c is the polynomial, not P(c) = 0",
                reality: "(x - c) is a factor if and only if P(c) = 0, meaning c is a zero of P(x)",
                correctiveExample: "(x - 2) is a factor of x² - 4 because P(2) = 2² - 4 = 0",
                commonIn: ['factor_theorem']
            },

            sign_in_divisor: {
                misconception: "Using c directly when divisor is (x + c) instead of -c",
                reality: "(x + c) = (x - (-c)), so use c = -value",
                correctiveExample: "For divisor (x + 3), use c = -3 in Remainder Theorem",
                commonIn: ['remainder_theorem', 'factor_theorem', 'synthetic_division']
            },

            rational_roots_are_all_roots: {
                misconception: "Rational Root Theorem finds ALL roots",
                reality: "It only finds POSSIBLE rational roots; actual roots may be irrational or complex",
                correctiveExample: "x² - 2 = 0 has roots ±√2, which are irrational (not found by RRT)",
                commonIn: ['rational_root_theorem']
            },

            multiplicity_confusion: {
                misconception: "Thinking multiplicity 2 means two different roots",
                reality: "Multiplicity is how many times the SAME root appears",
                correctiveExample: "(x - 3)² means root 3 with multiplicity 2, not two different roots",
                commonIn: ['multiplicity', 'complete_factorization']
            },

            degree_reduction: {
                misconception: "Quotient has same degree as dividend",
                reality: "Quotient degree = dividend degree - divisor degree",
                correctiveExample: "Dividing degree 5 by degree 2 gives quotient of degree 3",
                commonIn: ['polynomial_division']
            },

            zero_coefficient_omission: {
                misconception: "Skipping missing degree terms in synthetic division",
                reality: "Must include 0 as coefficient for missing terms",
                correctiveExample: "x³ + 2x - 1 is written as 1, 0, 2, -1 (with 0 for x² term)",
                commonIn: ['synthetic_division', 'polynomial_division']
            },

            factoring_over_wrong_set: {
                misconception: "Thinking polynomial is completely factored when factors are over integers but not irreducible",
                reality: "Complete factorization depends on number system (integers, reals, complex)",
                correctiveExample: "x² - 2 is irreducible over rationals but factors as (x - √2)(x + √2) over reals",
                commonIn: ['complete_factorization']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            remainder_theorem: {
                analogy: "Sharing cookies with friends",
                explanation: "If you divide 17 cookies among 5 friends (17 ÷ 5), each gets 3 and you have 2 left over. The remainder is what's left after fair sharing. For polynomials, P(c) is what's 'left over' when dividing by (x - c).",
                suitableFor: ['remainder_theorem', 'polynomial_division'],
                ELI5: "Imagine you have a bag of marbles (the polynomial). You want to put them in groups (divide by x - c). The remainder is how many marbles don't fit into perfect groups."
            },

            factor_theorem: {
                analogy: "Building blocks",
                explanation: "A factor is like a building block. If (x - 2) is a factor, it means (x - 2) is one of the pieces that multiply together to build the whole polynomial. For this to work, P(2) must equal 0.",
                suitableFor: ['factor_theorem', 'complete_factorization'],
                ELI5: "Factors are like LEGO pieces that click together to make something bigger. If (x - 3) is a factor, then 3 is a special number that makes the whole thing equal zero."
            },

            synthetic_division: {
                analogy: "Assembly line",
                explanation: "Synthetic division is like an assembly line where you bring down a number, multiply by c, add to next, and repeat. Each step builds on the previous one in a organized pattern.",
                suitableFor: ['synthetic_division'],
                ELI5: "It's like a game where you: (1) write down first number, (2) times it by a special number, (3) add to next number, (4) repeat until done!"
            },

            multiplicity: {
                analogy: "Bouncing ball",
                explanation: "A root with even multiplicity is like a ball that bounces off the x-axis (touches but doesn't cross). Odd multiplicity is like a ball that goes through the floor (crosses through).",
                suitableFor: ['multiplicity'],
                ELI5: "Even multiplicity: the graph gives the x-axis a high-five and bounces back. Odd multiplicity: the graph goes right through!"
            },

            rational_root_theorem: {
                analogy: "Detective's suspect list",
                explanation: "The Rational Root Theorem doesn't solve the crime, but it gives you a list of suspects (possible roots) to investigate. You still have to test each one.",
                suitableFor: ['rational_root_theorem'],
                ELI5: "It's like having a list of all possible birthday party guests (possible roots), but you still need to check who actually came (test which ones are real roots)."
            },

            polynomial_division: {
                analogy: "Long division of numbers",
                explanation: "Polynomial long division works just like dividing numbers, but with variables. Instead of 'how many times does 5 go into 17', it's 'how many times does (x + 2) go into (x² + 3x + 2)'.",
                suitableFor: ['polynomial_division'],
                ELI5: "Remember dividing big numbers in school? This is the same thing, but with x's mixed in!"
            },

            complete_factorization: {
                analogy: "Prime factorization",
                explanation: "Just like breaking 12 into 2 × 2 × 3, we break polynomials into their simplest factor pieces. We keep factoring until we can't anymore.",
                suitableFor: ['complete_factorization'],
                ELI5: "It's like taking apart a toy to see all the individual pieces it's made from. We keep taking it apart until we can't take it apart anymore!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            remainder_theorem: {
                level1: "What theorem relates division by (x - c) to evaluation?",
                level2: "The Remainder Theorem says remainder = P(c). What is c here?",
                level3: "Solve x - c = 0 to find c, then evaluate P(c)",
                level4: "For divisor (x - {c}), evaluate P({c}) = {full_evaluation}"
            },

            factor_theorem: {
                level1: "What makes something a factor?",
                level2: "If (x - c) is a factor, what does P(c) equal?",
                level3: "Evaluate P(c). If it equals 0, then (x - c) is a factor",
                level4: "Test: P({c}) = {evaluation}. Since this {is/is not} zero, (x - {c}) {is/is not} a factor"
            },

            synthetic_division: {
                level1: "What value goes in the synthetic division box?",
                level2: "Use c from (x - c) = 0, and list all coefficients in order",
                level3: "Bring down first coefficient, then repeatedly multiply by c and add",
                level4: "Setup: {c} | {coefficients}. Follow: bring down, multiply, add pattern"
            },

            rational_root_theorem: {
                level1: "What two numbers determine possible rational roots?",
                level2: "Find all factors of the constant term and all factors of the leading coefficient",
                level3: "Form all fractions ±(factor of constant)/(factor of leading coefficient)",
                level4: "Possible roots: ±{list of all p/q values}"
            },

            polynomial_division: {
                level1: "What term do you divide first?",
                level2: "Divide the leading term of the dividend by the leading term of the divisor",
                level3: "Multiply the entire divisor by this quotient term, then subtract",
                level4: "First step: {leading term dividend} ÷ {leading term divisor} = {quotient term}"
            },

            find_zeros: {
                level1: "What equation do you solve to find zeros?",
                level2: "Set P(x) = 0 and factor the polynomial",
                level3: "Use Rational Root Theorem, then factor using synthetic division",
                level4: "Test possible rational roots: {list}. Found: {actual roots}"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Find the remainder when x² + 3x - 2 is divided by (x - 1)",
                    answer: 2,
                    assesses: "remainder_theorem",
                    difficulty: "basic"
                },
                {
                    question: "Is (x + 2) a factor of x² + x - 2?",
                    answer: "No",
                    assesses: "factor_theorem",
                    difficulty: "basic"
                },
                {
                    question: "Use synthetic division: (x² - 5x + 6) ÷ (x - 2)",
                    answer: "Quotient: x - 3, Remainder: 0",
                    assesses: "synthetic_division",
                    difficulty: "intermediate"
                },
                {
                    question: "List possible rational roots of 2x³ - x² + 4x - 2",
                    answer: "±1, ±2, ±1/2",
                    assesses: "rational_root_theorem",
                    difficulty: "intermediate"
                }
            ],

            formative: [
                {
                    question: "If P(x) is divided by (x - 3) and remainder is 5, what is P(3)?",
                    options: ["0", "3", "5", "Cannot determine"],
                    correct: "5",
                    explanation: "By Remainder Theorem, remainder = P(3), so P(3) = 5"
                },
                {
                    question: "If P(2) = 0, what can you conclude?",
                    options: [
                        "(x - 2) is a factor",
                        "(x + 2) is a factor",
                        "2 is the remainder",
                        "The quotient is 2"
                    ],
                    correct: "(x - 2) is a factor",
                    explanation: "Factor Theorem: P(c) = 0 means (x - c) is a factor"
                },
                {
                    question: "In synthetic division, what value do you use for divisor (x + 3)?",
                    options: ["3", "-3", "x + 3", "0"],
                    correct: "-3",
                    explanation: "(x + 3) = (x - (-3)), so use c = -3"
                },
                {
                    question: "A polynomial of degree 4 divided by a polynomial of degree 2 gives a quotient of degree:",
                    options: ["2", "4", "6", "8"],
                    correct: "2",
                    explanation: "Quotient degree = 4 - 2 = 2"
                }
            ],

            summative: [
                {
                    question: "Factor completely: x³ - 4x² + x + 6",
                    answer: "(x - 3)(x - 2)(x + 1)",
                    showsWork: true,
                    rubric: {
                        rational_root_test: 1,
                        find_first_factor: 1,
                        synthetic_division: 1,
                        factor_quadratic: 1,
                        complete_factorization: 1
                    }
                },
                {
                    question: "Find all zeros of P(x) = 2x³ - x² - 13x - 6",
                    answer: "x = -1/2, -2, 3",
                    showsWork: true,
                    rubric: {
                        list_rational_roots: 1,
                        test_and_find_roots: 2,
                        verify_all_zeros: 1,
                        write_complete_answer: 1
                    }
                }
            ],

            byDifficulty: {
                easy: [
                    "Remainder when x² + 2x - 1 is divided by (x - 1)",
                    "Is (x - 2) a factor of x² - 4?",
                    "Evaluate P(x) = x² + 3x + 2 at x = -1",
                    "Factor: x² + 5x + 6"
                ],
                medium: [
                    "Find remainder: (x³ - 2x² + x - 3) ÷ (x + 1)",
                    "Factor completely: x³ - 3x² - 4x + 12",
                    "Use synthetic division: (2x³ + 3x² - 8x + 3) ÷ (x - 1)",
                    "List possible rational roots of 3x⁴ - 2x² + 6"
                ],
                hard: [
                    "Factor completely: x⁴ - 5x² + 4",
                    "Find all zeros: x³ - 6x² + 11x - 6",
                    "Divide: (x⁴ + 2x³ - x - 3) ÷ (x² - x + 1)",
                    "Construct polynomial with zeros 2, -3, and 1/2"
                ]
            },

            byObjective: {
                canUseRemainderTheorem: [
                    "Find remainder when x² + 4x + 1 is divided by (x - 2)",
                    "What is P(3) if P(x) = x³ - 2x + 5?",
                    "Find R when (x³ + 1) ÷ (x + 1) = Q(x) + R/(x+1)"
                ],
                canUseFactorTheorem: [
                    "Is (x - 1) a factor of x³ - 1?",
                    "Test if (x + 3) divides x² + 2x - 3",
                    "Which of (x-1), (x-2), (x-3) are factors of x³ - 6x² + 11x - 6?"
                ],
                canSyntheticDivision: [
                    "Use synthetic division: (x³ + 2x² - x - 2) ÷ (x - 1)",
                    "Divide x⁴ - 16 by (x - 2) using synthetic division",
                    "Find quotient and remainder: (3x³ - 2x + 1) ÷ (x + 2)"
                ],
                canFactorCompletely: [
                    "Factor: x³ + 2x² - 5x - 6",
                    "Factor: x⁴ - 10x² + 9",
                    "Factor: 2x³ - 3x² - 11x + 6"
                ],
                canFindAllZeros: [
                    "Find all zeros of x³ - 7x + 6",
                    "Solve: x⁴ - 13x² + 36 = 0",
                    "Find roots of 2x³ + x² - 13x + 6 = 0"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "find_remainder": "Use Remainder Theorem: evaluate P(c) where divisor is (x - c)",
                "test_factor": "Use Factor Theorem: evaluate P(c); if 0, then factor; if not, not a factor",
                "divide_by_linear": "Use synthetic division for efficiency",
                "divide_by_higher_degree": "Use polynomial long division",
                "find_zeros": "Combine Rational Root Theorem, Factor Theorem, and synthetic division",
                "factor_completely": "Find one factor, divide, repeat until fully factored",
                "no_rational_roots": "Use quadratic formula or numerical methods"
            },

            whenToUseWhat: {
                remainder_theorem: "Quick way to find remainder without full division",
                factor_theorem: "Test if specific binomial is a factor",
                synthetic_division: "Efficient division by linear factors (x - c)",
                polynomial_long_division: "Division by polynomials of degree ≥ 2",
                rational_root_theorem: "Generate list of possible rational zeros to test",
                quadratic_formula: "Find zeros of irreducible quadratics",
                grouping: "Factor by grouping when 4 terms present",
                special_patterns: "Recognize difference of squares, sum/difference of cubes"
            },

            methodSelection: {
                factorsToConsider: [
                    "Degree of polynomial",
                    "Degree of divisor",
                    "Type of coefficients (integers, fractions)",
                    "What information is sought (remainder, quotient, factors, zeros)"
                ],
                generalApproach: [
                    "1. Identify what's being asked",
                    "2. Choose appropriate theorem or method",
                    "3. Check for special patterns first",
                    "4. Use Rational Root Theorem for possible zeros",
                    "5. Test candidates systematically",
                    "6. Factor out found factors and repeat",
                    "7. Verify final answer"
                ]
            },

            optimizationTips: {
                "Test smart values first": "Try ±1, ±2 first as they're most common",
                "Use synthetic division": "Faster than long division for linear factors",
                "Look for patterns": "Sum/difference of cubes, difference of squares, grouping",
                "Verify as you go": "Check factors by multiplication to catch errors early",
                "Remember multiplicity": "If P'(c) = 0 too, root c has multiplicity ≥ 2"
            },

            efficientFactorization: {
                step1: "Remove GCF (greatest common factor)",
                step2: "Look for special patterns",
                step3: "Use Rational Root Theorem",
                step4: "Test candidates with synthetic division",
                step5: "Factor quotient polynomial",
                step6: "Continue until irreducible factors remain",
                step7: "Verify by expanding"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Remainder Speed Test",
                    timeLimit: 120,
                    problems: [
                        "P(x) = x² + 2x - 3 ÷ (x - 1)",
                        "P(x) = x² + 5x + 6 ÷ (x + 2)",
                        "P(x) = x³ - 1 ÷ (x - 1)",
                        "P(x) = x³ + 8 ÷ (x + 2)",
                        "P(x) = 2x² - 3x + 1 ÷ (x - 1)"
                    ]
                },
                {
                    name: "Factor Test Sprint",
                    timeLimit: 90,
                    problems: [
                        "Is (x - 1) a factor of x² - 1?",
                        "Is (x + 2) a factor of x² + x - 2?",
                        "Is (x - 3) a factor of x² - 9?",
                        "Is (x + 1) a factor of x³ + 1?",
                        "Is (x - 2) a factor of x³ - 8?"
                    ]
                },
                {
                    name: "Synthetic Division Challenge",
                    timeLimit: 180,
                    problems: [
                        "(x² + 3x + 2) ÷ (x + 1)",
                        "(x³ - 2x² + x - 2) ÷ (x - 2)",
                        "(x³ + 3x² - 4) ÷ (x + 2)",
                        "(2x³ - 5x + 3) ÷ (x - 1)"
                    ]
                }
            ],

            puzzles: [
                {
                    name: "Mystery Polynomial",
                    problem: "A cubic polynomial P(x) has zeros at x = 1, 2, and 3. P(0) = -12. Find P(x).",
                    hint: "Use factor form: P(x) = a(x-1)(x-2)(x-3), then find a",
                    solution: "P(x) = 2(x-1)(x-2)(x-3) = 2x³ - 12x² + 22x - 12"
                },
                {
                    name: "Factor Detective",
                    problem: "P(x) = x³ + ax² + bx + 6. If (x-1) and (x+2) are factors, find a and b.",
                    hint: "Use P(1) = 0 and P(-2) = 0 to create system of equations",
                    solution: "a = -1, b = -8"
                },
                {
                    name: "Remainder Riddle",
                    problem: "When P(x) is divided by (x-2), remainder is 7. When divided by (x+1), remainder is 4. Find P(2) + P(-1).",
                    hint: "Use Remainder Theorem directly",
                    solution: "P(2) + P(-1) = 7 + 4 = 11"
                }
            ],

            applications: [
                {
                    scenario: "Box Volume",
                    problem: "A box has volume V(x) = x³ + 6x² + 11x + 6. If length is (x+3), find other dimensions.",
                    equation: "V(x) = (x+3) · other dimensions",
                    solution: "Factor: V(x) = (x+1)(x+2)(x+3). Other dimensions: (x+1) and (x+2)"
                },
                {
                    scenario: "Profit Analysis",
                    problem: "Profit P(x) = -x³ + 9x² - 15x - 25. Find production levels where profit is zero.",
                    equation: "P(x) = 0",
                    solution: "Use Rational Root Theorem and factoring to find break-even points"
                },
                {
                    scenario: "Population Model",
                    problem: "Population P(t) = t³ - 6t² + 9t. When does population hit zero?",
                    equation: "P(t) = 0",
                    solution: "Factor: t(t-3)² = 0, so t = 0 or t = 3 (multiplicity 2)"
                }
            ],

            debugging: [
                {
                    name: "Synthetic Division Error",
                    incorrectWork: [
                        "Divide x³ - 3x² + 2x - 1 by (x - 2)",
                        "Setup: 2 | 1  -3   2  -1",
                        "         1   2  -1   0",  // ERROR: wrong multiplication/addition
                        "Quotient: x² + 2x - 1, Remainder: 0"
                    ],
                    correctAnswer: "Quotient: x² - x, Remainder: -1",
                    errorType: "Arithmetic error in synthetic division process"
                },
                {
                    name: "Factor Theorem Confusion",
                    incorrectWork: [
                        "Is (x + 3) a factor of x² - 9?",
                        "Test P(3):",  // ERROR: should test P(-3)
                        "P(3) = 3² - 9 = 0",
                        "Yes, (x + 3) is a factor"
                    ],
                    correctAnswer: "Yes, but test P(-3) not P(3)",
                    errorType: "Used wrong value for c from (x + c)"
                },
                {
                    name: "Missing Zero Coefficient",
                    incorrectWork: [
                        "Divide x³ + 2x - 1 by (x - 1) using synthetic",
                        "Setup: 1 | 1  2  -1",  // ERROR: missing 0 for x² term
                        "Result will be incorrect"
                    ],
                    correctAnswer: "Should be: 1 | 1  0  2  -1",
                    errorType: "Forgot zero coefficient for missing x² term"
                }
            ]
        };
    }

    // MAIN SOLVER METHOD
    solveRemainderFactorProblem(config) {
        const { polynomial, divisor, operation, parameters, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseRemainderFactorProblem(
                polynomial, divisor, operation, parameters, problemType, context
            );

            // Solve the problem
            this.currentSolution = this.solveRemainderFactorProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateRemainderFactorSteps(this.currentProblem, this.currentSolution);

            // Generate graph data if applicable
            this.generateRemainderFactorGraphData();

            // Generate workbook
            this.generateRemainderFactorWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                result: this.currentSolution?.result,
                type: this.currentSolution?.type
            };

        } catch (error) {
            throw new Error(`Failed to solve remainder/factor problem: ${error.message}`);
        }
    }

    parseRemainderFactorProblem(polynomial, divisor = '', operation = '', parameters = {}, problemType = null, context = {}) {
        const cleanPolynomial = polynomial ? this.cleanMathExpression(polynomial) : '';
        const cleanDivisor = divisor ? this.cleanMathExpression(divisor) : '';

        // If problem type is specified, use it directly
        if (problemType && this.remainderFactorTypes[problemType]) {
            return {
                originalPolynomial: polynomial,
                originalDivisor: divisor,
                cleanPolynomial: cleanPolynomial,
                cleanDivisor: cleanDivisor,
                type: problemType,
                operation: operation,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect problem type
        const combinedInput = `${polynomial} ${divisor} ${operation}`.toLowerCase();

        for (const [type, config] of Object.entries(this.remainderFactorTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(combinedInput)) {
                    const extractedParams = this.extractRemainderFactorParameters(
                        cleanPolynomial, cleanDivisor, type
                    );

                    return {
                        originalPolynomial: polynomial,
                        originalDivisor: divisor,
                        cleanPolynomial: cleanPolynomial,
                        cleanDivisor: cleanDivisor,
                        type: type,
                        operation: operation,
                        parameters: { ...extractedParams, ...parameters },
                        context: { ...context },
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        // Default to remainder_basic if polynomial and divisor provided
        if (cleanPolynomial && cleanDivisor) {
            return {
                originalPolynomial: polynomial,
                originalDivisor: divisor,
                cleanPolynomial: cleanPolynomial,
                cleanDivisor: cleanDivisor,
                type: 'remainder_basic',
                operation: operation || 'find remainder',
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize remainder/factor problem from input`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/\^/g, '**')
            .trim();
    }

    extractRemainderFactorParameters(polynomial, divisor, type) {
        const params = {};

        // Parse polynomial into coefficient array
        params.polynomialCoefficients = this.parsePolynomialCoefficients(polynomial);

        // Parse divisor to extract c
        if (divisor) {
            params.divisorC = this.extractCFromDivisor(divisor);
            params.divisor = divisor;
        }

        params.polynomial = polynomial;

        return params;
    }

    parsePolynomialCoefficients(polyString) {
        // This is a simplified parser - would need more robust implementation
        // For now, returns placeholder
        try {
            // Attempt to extract coefficients from string like "x^3 + 2x^2 - 5x + 3"
            // This would need full polynomial parsing logic
            return { raw: polyString, coefficients: [] };
        } catch {
            return { raw: polyString, coefficients: [] };
        }
    }

    extractCFromDivisor(divisor) {
        // Extract c from divisor like "(x - 3)" or "(x + 2)"
        // (x - c) means c = value
        // (x + c) means c = -value

        const match = divisor.match(/\(?\s*x\s*([+-])\s*(\d+\.?\d*)\s*\)?/);
        if (match) {
            const sign = match[1];
            const value = parseFloat(match[2]);
            return sign === '-' ? value : -value;
        }

        // Try matching just "x - c" format
        const simpleMatch = divisor.match(/x\s*([+-])\s*(\d+\.?\d*)/);
        if (simpleMatch) {
            const sign = simpleMatch[1];
            const value = parseFloat(simpleMatch[2]);
            return sign === '-' ? value : -value;
        }

        return 0;
    }

    solveRemainderFactorProblem_Internal(problem) {
        const solver = this.remainderFactorTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // REMAINDER/FACTOR THEOREM SOLVERS

    solveRemainderBasic(problem) {
        const { polynomial, divisorC } = problem.parameters;

        return {
            type: 'Remainder Theorem',
            method: 'Direct evaluation using P(c)',
            polynomial: polynomial || problem.cleanPolynomial,
            divisor: problem.cleanDivisor,
            c: divisorC,
            evaluation: `Evaluate P(${divisorC})`,
            result: `Remainder = P(${divisorC})`,
            category: 'remainder_theorem',
            note: 'Use Remainder Theorem: when P(x) is divided by (x - c), remainder is P(c)'
        };
    }

    solveRemainderSynthetic(problem) {
        const { polynomial, divisorC } = problem.parameters;

        return {
            type: 'Synthetic Division',
            method: 'Use synthetic division algorithm',
            polynomial: polynomial || problem.cleanPolynomial,
            divisor: problem.cleanDivisor,
            c: divisorC,
            process: [
                'Write coefficients in order',
                'Use c value from (x - c)',
                'Bring down, multiply, add pattern',
                'Last value is remainder'
            ],
            category: 'synthetic_division',
            note: 'Synthetic division efficiently finds both quotient and remainder'
        };
    }

    solveFactorTest(problem) {
        const { polynomial, divisorC } = problem.parameters;

        return {
            type: 'Factor Theorem Test',
            method: 'Evaluate P(c) and check if zero',
            polynomial: polynomial || problem.cleanPolynomial,
            divisor: problem.cleanDivisor,
            c: divisorC,
            test: `Evaluate P(${divisorC})`,
            criterion: 'If P(c) = 0, then (x - c) is a factor; otherwise it is not',
            category: 'factor_theorem',
            note: 'Factor Theorem: (x - c) is a factor ⟺ P(c) = 0'
        };
    }

    solveFindFactors(problem) {
        const { polynomial } = problem.parameters;

        return {
            type: 'Complete Factorization',
            method: 'Use Rational Root Theorem, then factor iteratively',
            polynomial: polynomial || problem.cleanPolynomial,
            approach: [
                'Find possible rational roots (RRT)',
                'Test candidates using Factor Theorem',
                'Use synthetic division when factor found',
                'Continue factoring quotient',
                'Factor remaining quadratics or recognize special patterns'
            ],
            category: 'complete_factorization',
            note: 'Combine multiple techniques for complete factorization'
        };
    }

    solveFindZeros(problem) {
        const { polynomial } = problem.parameters;

        return {
            type: 'Find All Zeros',
            method: 'Factor completely, then apply Zero Product Property',
            polynomial: polynomial || problem.cleanPolynomial,
            approach: [
                'Factor polynomial completely',
                'Set each factor equal to zero',
                'Solve for x in each factor',
                'List all zeros (including multiplicity)'
            ],
            category: 'complete_factorization',
            note: 'Zeros are values of x where P(x) = 0'
        };
    }

    solveRationalRoots(problem) {
        const { polynomial } = problem.parameters;

        return {
            type: 'Rational Root Theorem',
            method: 'List all possible rational roots p/q',
            polynomial: polynomial || problem.cleanPolynomial,
            process: [
                'Identify constant term a₀',
                'Identify leading coefficient aₙ',
                'List factors of a₀ (possible p values)',
                'List factors of aₙ (possible q values)',
                'Form all ±p/q combinations',
                'Reduce to lowest terms'
            ],
            category: 'rational_root_theorem',
            note: 'RRT gives POSSIBLE rational roots, not guaranteed actual roots'
        };
    }

    solvePolynomialDivision(problem) {
        const { polynomial, divisor } = problem.parameters;

        return {
            type: 'Polynomial Long Division',
            method: 'Use long division algorithm for polynomials',
            polynomial: polynomial || problem.cleanPolynomial,
            divisor: divisor || problem.cleanDivisor,
            process: [
                'Arrange polynomials in standard form',
                'Divide leading terms',
                'Multiply divisor by quotient term',
                'Subtract from dividend',
                'Bring down next term',
                'Repeat until degree of remainder < degree of divisor'
            ],
            category: 'polynomial_division',
            note: 'Division Algorithm: P(x) = D(x)Q(x) + R(x)'
        };
    }

    solveFactorWithRoot(problem) {
        const { polynomial, divisorC } = problem.parameters;

        return {
            type: 'Factor Given a Root',
            method: 'Use known root to find one factor, then divide',
            polynomial: polynomial || problem.cleanPolynomial,
            knownRoot: divisorC,
            process: [
                `Since x = ${divisorC} is a root, (x - ${divisorC}) is a factor`,
                'Use synthetic division to find quotient',
                'Factor the quotient polynomial',
                'Write complete factorization'
            ],
            category: 'factor_theorem',
            note: 'Given root provides immediate factor via Factor Theorem'
        };
    }

    solveConstructPolynomial(problem) {
        const { roots } = problem.parameters;

        return {
            type: 'Construct Polynomial from Roots',
            method: 'Build polynomial from its zeros using factor form',
            roots: roots,
            process: [
                'Write factor (x - r) for each root r',
                'Multiply all factors together',
                'Expand if needed',
                'Include leading coefficient if specified'
            ],
            category: 'complete_factorization',
            note: 'If r is a zero, then (x - r) is a factor'
        };
    }

    solveMultiplicityAnalysis(problem) {
        const { polynomial } = problem.parameters;

        return {
            type: 'Multiplicity Analysis',
            method: 'Determine how many times each root appears',
            polynomial: polynomial || problem.cleanPolynomial,
            process: [
                'Factor completely',
                'Count exponent on each factor (x - r)',
                'Exponent is multiplicity of root r',
                'Check graph behavior: even multiplicity touches, odd crosses'
            ],
            category: 'multiplicity',
            note: 'Multiplicity affects both algebra and graph behavior'
        };
    }

    solveDescartesRule(problem) {
        const { polynomial } = problem.parameters;

        return {
            type: "Descartes' Rule of Signs",
            method: 'Count sign changes to estimate number of positive/negative roots',
            polynomial: polynomial || problem.cleanPolynomial,
            process: [
                'For P(x): count sign changes in coefficients → max positive roots',
                'For P(-x): count sign changes → max negative roots',
                'Actual number is counted value or less by even integer'
            ],
            category: 'descartes_rule',
            note: 'Provides estimate, not exact count'
        };
    }

    // STEP GENERATION

    generateRemainderFactorSteps(problem, solution) {
        let baseSteps = this.generateBaseRemainderFactorSteps(problem, solution);

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

    generateBaseRemainderFactorSteps(problem, solution) {
        const category = this.remainderFactorTypes[problem.type]?.category;

        switch(category) {
            case 'remainder_theorem':
                return this.generateRemainderTheoremSteps(problem, solution);
            case 'factor_theorem':
                return this.generateFactorTheoremSteps(problem, solution);
            case 'synthetic_division':
                return this.generateSyntheticDivisionSteps(problem, solution);
            case 'rational_root_theorem':
                return this.generateRationalRootSteps(problem, solution);
            case 'polynomial_division':
                return this.generatePolynomialDivisionSteps(problem, solution);
            case 'complete_factorization':
                return this.generateCompleteFactorizationSteps(problem, solution);
            default:
                return this.generateGenericRemainderFactorSteps(problem, solution);
        }
    }

    generateRemainderTheoremSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'State the Remainder Theorem',
            description: 'When polynomial P(x) is divided by (x - c), the remainder is P(c)',
            reasoning: 'This theorem connects division to evaluation',
            theorem: 'Remainder Theorem',
            formula: 'P(x) = (x - c)Q(x) + R, where R = P(c)'
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify the divisor and find c',
            description: `Divisor is ${solution.divisor}`,
            detail: `Solve x - c = 0 to find c = ${solution.c}`,
            reasoning: 'We need c to evaluate P(c)',
            note: 'For (x + a), c = -a; for (x - a), c = a'
        });

        steps.push({
            stepNumber: 3,
            step: 'Evaluate P(c)',
            description: `Substitute x = ${solution.c} into P(x)`,
            expression: solution.evaluation,
            reasoning: 'By Remainder Theorem, P(c) equals the remainder',
            calculation: 'Perform the substitution and simplify'
        });

        steps.push({
            stepNumber: 4,
            step: 'State the remainder',
            description: `Remainder = P(${solution.c})`,
            result: solution.result,
            finalAnswer: true,
            verification: 'This can be verified by polynomial long division'
        });

        return steps;
    }

    generateFactorTheoremSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'State the Factor Theorem',
            description: '(x - c) is a factor of P(x) if and only if P(c) = 0',
            reasoning: 'Factor Theorem is special case of Remainder Theorem with R = 0',
            theorem: 'Factor Theorem',
            connection: 'If P(c) = 0, remainder is 0, so (x - c) divides evenly'
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify c from the proposed factor',
            description: `Test if ${solution.divisor} is a factor`,
            detail: `From ${solution.divisor}, we get c = ${solution.c}`,
            reasoning: 'Solve x - c = 0 to find c',
            reminder: 'Watch signs: (x + a) gives c = -a'
        });

        steps.push({
            stepNumber: 3,
            step: 'Evaluate P(c)',
            description: `Calculate P(${solution.c})`,
            expression: solution.test,
            reasoning: 'If P(c) = 0, then (x - c) is a factor',
            calculation: 'Substitute and simplify carefully'
        });

        steps.push({
            stepNumber: 4,
            step: 'Make conclusion',
            description: 'Check if P(c) equals zero',
            criterion: solution.criterion,
            finalAnswer: true,
            reasoning: 'P(c) = 0 ⟹ factor; P(c) ≠ 0 ⟹ not a factor'
        });

        return steps;
    }

    generateSyntheticDivisionSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Set up synthetic division',
            description: 'Write c and coefficients of polynomial',
            detail: `c = ${solution.c} from divisor ${solution.divisor}`,
            setup: 'List all coefficients in descending degree order (include 0 for missing terms)',
            reasoning: 'Synthetic division provides organized way to divide by (x - c)'
        });

        steps.push({
            stepNumber: 2,
            step: 'Begin synthetic division process',
            description: 'Bring down the first coefficient',
            process: solution.process[0],
            reasoning: 'First coefficient of quotient is same as first coefficient of dividend',
            visualNote: 'This starts the pattern of operations'
        });

        steps.push({
            stepNumber: 3,
            step: 'Continue the pattern',
            description: 'Multiply by c, add to next coefficient, repeat',
            process: solution.process.slice(1),
            reasoning: 'This pattern efficiently computes quotient coefficients and remainder',
            pattern: 'Bring down → Multiply by c → Add to next → Repeat',
            reminder: 'Be careful with signs, especially if c is negative'
        });

        steps.push({
            stepNumber: 4,
            step: 'Interpret the result',
            description: 'Bottom row shows quotient coefficients and remainder',
            detail: 'Last number is remainder, others form quotient polynomial',
            reasoning: 'Quotient has degree one less than dividend',
            finalAnswer: true,
            note: 'Remainder = 0 means divisor is a factor'
        });

        return steps;
    }

    generateRationalRootSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'State the Rational Root Theorem',
            description: 'If p/q is a rational root (in lowest terms), then p divides a₀ and q divides aₙ',
            theorem: 'Rational Root Theorem',
            formula: 'Possible rational roots = ±p/q where p|a₀ and q|aₙ',
            reasoning: 'This limits testing to specific rational numbers'
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify a₀ and aₙ',
            description: 'Find constant term and leading coefficient',
            detail: 'a₀ = constant term, aₙ = leading coefficient',
            reasoning: 'These determine which fractions to test',
            note: 'Make sure polynomial is in standard form first'
        });

        steps.push({
            stepNumber: 3,
            step: 'List factors of a₀ and aₙ',
            description: 'Find all positive factors of each',
            process: solution.process.slice(2, 4),
            reasoning: 'These give possible numerators (p) and denominators (q)',
            reminder: 'Include both positive and negative factors'
        });

        steps.push({
            stepNumber: 4,
            step: 'Form all possible fractions ±p/q',
            description: 'Create list of all rational candidates',
            process: solution.process[4],
            reasoning: 'These are ALL possible rational roots',
            note: 'Reduce fractions to lowest terms and eliminate duplicates'
        });

        steps.push({
            stepNumber: 5,
            step: 'Test candidates',
            description: 'Use Factor Theorem or synthetic division to test each',
            reasoning: 'Not all candidates will be actual roots - must test',
            finalAnswer: true,
            nextStep: 'Use found roots to factor polynomial completely'
        });

        return steps;
    }

    generatePolynomialDivisionSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Set up polynomial long division',
            description: 'Write dividend inside, divisor outside',
            detail: 'Arrange both in standard form with descending powers',
            reasoning: 'Organization prevents errors in long division',
            reminder: 'Include 0 coefficients for missing degree terms'
        });

        steps.push({
            stepNumber: 2,
            step: 'Divide leading terms',
            description: 'Divide first term of dividend by first term of divisor',
            process: solution.process[1],
            reasoning: 'This gives first term of quotient',
            rule: 'xᵃ ÷ xᵇ = xᵃ⁻ᵇ'
        });

        steps.push({
            stepNumber: 3,
            step: 'Multiply and subtract',
            description: 'Multiply entire divisor by quotient term, then subtract',
            process: solution.process[2, 3],
            reasoning: 'This eliminates the leading term of dividend',
            reminder: 'Subtract carefully - watch signs!',
            visualNote: 'Align terms by degree'
        });

        steps.push({
            stepNumber: 4,
            step: 'Bring down next term',
            description: 'Bring down next term from dividend',
            process: solution.process[4],
            reasoning: 'Continue division with new polynomial',
            pattern: 'Repeat steps 2-4 until done'
        });

        steps.push({
            stepNumber: 5,
            step: 'Continue until complete',
            description: 'Repeat divide-multiply-subtract-bring down',
            process: solution.process[5],
            reasoning: 'Stop when degree of remainder < degree of divisor',
            finalAnswer: true,
            result: 'Write as: P(x) = D(x)·Q(x) + R(x)'
        });

        return steps;
    }

    generateCompleteFactorizationSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Develop factorization strategy',
            description: 'Plan approach based on polynomial characteristics',
            considerations: [
                'Check for GCF first',
                'Look for special patterns',
                'Use Rational Root Theorem for zeros',
                'Factor iteratively'
            ],
            reasoning: 'Systematic approach prevents missing factors'
        });

        steps.push({
            stepNumber: 2,
            step: 'Find first factor',
            description: 'Use Rational Root Theorem and Factor Theorem',
            process: solution.approach[0, 1],
            reasoning: 'Finding one factor allows us to reduce degree',
            method: 'Test candidates until P(c) = 0'
        });

        steps.push({
            stepNumber: 3,
            step: 'Divide out the factor',
            description: 'Use synthetic division to find quotient',
            process: solution.approach[2],
            reasoning: 'Quotient is polynomial of lower degree',
            note: 'New polynomial is easier to factor'
        });

        steps.push({
            stepNumber: 4,
            step: 'Factor the quotient',
            description: 'Continue factoring the resulting polynomial',
            process: solution.approach[3],
            reasoning: 'Repeat process until all factors found',
            options: 'May need quadratic formula or special patterns'
        });

        steps.push({
            stepNumber: 5,
            step: 'Write complete factorization',
            description: 'Express as product of all factors',
            process: solution.approach[4],
            finalAnswer: true,
            verification: 'Multiply factors to verify they give original polynomial',
            form: 'P(x) = a(x - r₁)(x - r₂)...(irreducible factors)'
        });

        return steps;
    }

    generateGenericRemainderFactorSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Polynomial remainder/factor problem',
            description: solution.method || 'Apply appropriate remainder/factor technique',
            type: solution.type,
            category: solution.category,
            note: solution.note,
            approach: solution.process || solution.approach
        }];
    }

    // ENHANCED EXPLANATION METHODS (adapted from linear workbook)

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

    getConceptualExplanation(step, problem) {
        const conceptualExplanations = {
            'State the Remainder Theorem': 'The Remainder Theorem connects division (algebraic operation) with evaluation (substitution). It tells us we can find remainder without actually dividing!',
            'State the Factor Theorem': 'Factor Theorem is the special case where remainder is zero. It links zeros/roots of polynomial to its factors - a fundamental connection in algebra.',
            'Set up synthetic division': 'Synthetic division streamlines polynomial division using only coefficients. It\'s like a shorthand that makes division faster and clearer.',
            'Identify a₀ and aₙ': 'The Rational Root Theorem uses the boundary values (first and last coefficients) to limit our search for roots to specific fractions.',
            'Divide leading terms': 'In polynomial division, we always start with the highest degree terms, just like in regular long division we start with the leftmost digits.',
            'Find first factor': 'Finding one factor is like finding a key - it unlocks the polynomial and lets us break it down into simpler pieces.'
        };

        return conceptualExplanations[step.step] || 'This step applies a key polynomial theorem or technique to progress toward the solution.';
    }

    getProceduralExplanation(step) {
        if (step.process && Array.isArray(step.process)) {
            return `Follow these steps:\n${step.process.map((s, i) => `${i + 1}. ${s}`).join('\n')}`;
        }
        if (step.description) {
            return `Procedure: ${step.description}`;
        }
        return 'Execute the described operation carefully.';
    }

    getVisualExplanation(step, problem) {
        const category = this.remainderFactorTypes[problem.type]?.category;
        
        const visualExplanations = {
            'remainder_theorem': 'Visualize: P(c) is the y-value on the graph when x = c. This is the remainder!',
            'factor_theorem': 'On a graph: if (x - c) is a factor, the graph crosses the x-axis at x = c (because P(c) = 0).',
            'synthetic_division': 'Picture a table: top row has coefficients, c is on the left, and we follow a systematic pattern down.',
            'rational_root_theorem': 'Think of a detective\'s suspect list - we narrow down infinite possibilities to a finite list to test.',
            'polynomial_division': 'Like long division with numbers, but with variables. Align terms by degree (like place value).',
            'complete_factorization': 'Visualize breaking down the polynomial into a product tree, with each branch representing a factor.'
        };

        return visualExplanations[category] || 'Visualize the step as part of systematic algebraic process.';
    }

    getAlgebraicExplanation(step) {
        const algebraicRules = {
            'State the Remainder Theorem': 'Division Algorithm: P(x) = (x - c)Q(x) + R, where R = P(c)',
            'State the Factor Theorem': '(x - c) | P(x) ⟺ P(c) = 0',
            'Set up synthetic division': 'Algorithm based on repeated evaluation and synthetic computation',
            'Identify a₀ and aₙ': 'RRT: If p/q is root in lowest terms, then p | a₀ and q | aₙ',
            'Divide leading terms': 'Division of monomials: xᵃ/xᵇ = xᵃ⁻ᵇ',
            'Write complete factorization': 'Fundamental Theorem of Algebra: degree n polynomial has n roots (counting multiplicity)'
        };

        return algebraicRules[step.step] || step.formula || step.theorem || 'Apply algebraic principles systematically.';
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
                'polynomial': 'expression with x',
                'divisor': 'what we divide by',
                'quotient': 'answer to division',
                'remainder': 'what\'s left over',
                'factor': 'piece that multiplies',
                'coefficient': 'number with x',
                'degree': 'highest power',
                'evaluate': 'plug in and calculate',
                'synthetic division': 'shortcut division method',
                'rational root': 'fraction root'
            },
            intermediate: {
                'polynomial': 'polynomial',
                'divisor': 'divisor',
                'quotient': 'quotient',
                'remainder': 'remainder',
                'factor': 'factor',
                'coefficient': 'coefficient',
                'degree': 'degree',
                'evaluate': 'evaluate',
                'synthetic division': 'synthetic division',
                'rational root': 'rational root'
            },
            ELI5: {
                'polynomial': 'math expression with x and numbers',
                'divisor': 'the number we\'re dividing by',
                'quotient': 'how many times it goes in',
                'remainder': 'what\'s left over (like extra cookies)',
                'factor': 'a piece that multiplies to make the whole thing',
                'coefficient': 'the number next to x',
                'degree': 'the biggest power of x',
                'evaluate': 'plug in a number for x and calculate the answer',
                'synthetic division': 'a quick trick for dividing',
                'rational root': 'a fraction answer',
                'theorem': 'a math rule that always works'
            },
            detailed: {
                'polynomial': 'polynomial expression',
                'divisor': 'divisor polynomial',
                'quotient': 'quotient polynomial',
                'remainder': 'remainder (degree less than divisor)',
                'factor': 'factor (divides evenly)',
                'coefficient': 'coefficient',
                'degree': 'degree (highest exponent)',
                'evaluate': 'evaluate (substitute and compute)',
                'synthetic division': 'synthetic division algorithm',
                'rational root': 'rational zero'
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
            'State the Remainder Theorem': "There's a magic trick! Instead of doing hard division, we can just plug in a number to find what's left over.",
            'State the Factor Theorem': "If we plug in a number and get zero, that means we found a special building block (factor) of our polynomial!",
            'Set up synthetic division': "We're going to do division using a special pattern that's like a game with numbers.",
            'Identify a₀ and aₙ': "We look at the first and last numbers to make a list of fractions that MIGHT be answers.",
            'Divide leading terms': "We look at the biggest parts (the front numbers) and divide them first, like taking the biggest bites first.",
            'Find first factor': "We're looking for a number that makes our polynomial equal zero - like finding a secret password!",
            'Evaluate P(c)': "We're going to replace x with a number and calculate to see what we get.",
            'Test candidates': "We try different numbers like trying different keys to see which one opens the lock!"
        };

        return ELI5Explanations[step.step] || "We're taking another step to solve our polynomial puzzle!";
    }

    findRelevantAnalogy(step, problem) {
        const category = this.remainderFactorTypes[problem.type]?.category;
        
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (key === category || (analogy.suitableFor && analogy.suitableFor.includes(category))) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of this like solving a mystery - each step gives us more clues!";
    }

    convertToSimpleLanguage(description) {
        if (!description) return '';

        const simplifications = {
            'theorem': 'rule',
            'evaluate': 'plug in and calculate',
            'polynomial': 'expression with x',
            'coefficient': 'number with the x',
            'constant': 'plain number',
            'divisor': 'what we divide by',
            'quotient': 'answer',
            'remainder': 'leftover',
            'factor': 'piece that multiplies',
            'degree': 'highest power',
            'leading term': 'first term',
            'rational': 'fraction',
            'substitute': 'replace x with',
            'simplify': 'make easier',
            'identity': 'always true equation'
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
            'State the Remainder Theorem': 'Draw a division problem and show remainder equals P(c)',
            'State the Factor Theorem': 'Draw a graph showing polynomial crossing x-axis at root',
            'Set up synthetic division': 'Draw the synthetic division table with rows and columns',
            'Divide leading terms': 'Show the highest degree terms and how they divide',
            'Find first factor': 'Draw a factor tree starting to break down the polynomial',
            'Test candidates': 'Make a checklist of possible roots and test each one',
            'Write complete factorization': 'Show polynomial broken into all its factor pieces'
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
                    title: 'Connection to Next Step',
                    explanation: this.generateStepBridge(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgression(steps[i], steps[i + 1]),
                    strategicThinking: this.explainStepStrategy(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    addErrorPrevention(step, problemType) {
        const category = this.remainderFactorTypes[problemType]?.category || 'remainder_theorem';
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

    generateStepBridge(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.result || currentStep.description}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary because: ${this.explainStepNecessity(currentStep, nextStep)}`,
            howItHelps: `This will help by: ${this.explainStepBenefit(nextStep)}`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue our solution process`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
    }

    explainStepNecessity(currentStep, nextStep) {
        return `we need to build on the information from the previous step`;
    }

    explainStepBenefit(nextStep) {
        return `moving us closer to the complete solution`;
    }

    generatePreventionTips(step, problemType) {
        const category = this.remainderFactorTypes[problemType]?.category;
        
        const tips = {
            'Identify c from the divisor': [
                'Remember: (x - c) uses c, but (x + c) uses -c',
                'Solve x - c = 0 carefully',
                'Double-check sign of c'
            ],
            'Evaluate P(c)': [
                'Substitute carefully, using parentheses',
                'Watch signs with negative c values',
                'Follow order of operations',
                'Check arithmetic twice'
            ],
            'Set up synthetic division': [
                'Include 0 for missing degree terms',
                'Use correct value of c (watch signs)',
                'List coefficients in order'
            ],
            'List factors': [
                'Include both positive and negative',
                'Don\'t forget ±1',
                'Check you haven\'t missed any'
            ]
        };

        return tips[step.step] || ['Work carefully and check each calculation', 'Watch for sign errors'];
    }

    generateCheckPoints(step) {
        return [
            'Did I identify the correct value to use?',
            'Are my calculations accurate?',
            'Did I follow the procedure correctly?',
            'Does this result make sense?',
            'Should I verify this step?'
        ];
    }

    identifyWarningFlags(step, problemType) {
        const category = this.remainderFactorTypes[problemType]?.category;
        
        const warnings = {
            remainder_theorem: step.step.includes('Identify') ?
                ['Watch for (x + c) vs (x - c) confusion', 'Sign errors are common'] : [],
            factor_theorem: step.step.includes('Evaluate') ?
                ['Make sure you test P(c) not P(-c) unless divisor is (x + c)', 'Zero means factor; non-zero means not a factor'] : [],
            synthetic_division: step.step.includes('Set up') ?
                ['Missing zero coefficients cause major errors', 'Wrong c value ruins everything'] : [],
            rational_root_theorem: step.step.includes('List') ?
                ['Don\'t forget negative candidates', 'Reduce fractions to lowest terms'] : []
        };

        return warnings[category] || [];
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'State the Remainder Theorem': 'Can I explain why P(c) equals the remainder?',
            'Identify c from the divisor': 'Did I use the correct sign for c?',
            'Evaluate P(c)': 'Did I substitute correctly and follow order of operations?',
            'Set up synthetic division': 'Did I include all coefficients with zeros for missing terms?',
            'List factors': 'Did I include both positive and negative factors?',
            'Divide leading terms': 'Did I subtract exponents correctly?',
            'Test candidates': 'Am I systematically testing each possibility?'
        };

        return questions[step.step] || 'Does this step move me toward the solution correctly?';
    }

    describeExpectedResult(step) {
        const expectations = {
            'State the Remainder Theorem': 'Clear statement of the theorem',
            'Identify c': 'Correct value of c with proper sign',
            'Evaluate P(c)': 'Numerical value of P(c)',
            'Set up synthetic division': 'Organized table with c and all coefficients',
            'List factors': 'Complete list of ± factors',
            'Find quotient': 'Polynomial of degree one less than dividend',
            'Complete factorization': 'Product of irreducible factors'
        };

        return expectations[step.step] || 'Progress toward final answer';
    }

    generateTroubleshootingTips(step) {
        return [
            'If stuck, review the theorem or definition',
            'Check all arithmetic carefully',
            'Verify you\'re using the correct procedure',
            'Try a simpler example to understand the concept',
            'Make sure signs are correct throughout'
        ];
    }

    generateGuidingQuestions(step, problem) {
        const questions = {
            'State the Remainder Theorem': [
                'What does the Remainder Theorem tell us?',
                'How does it connect division and evaluation?',
                'Why is this useful?'
            ],
            'Identify c': [
                'What is the divisor?',
                'How do I find c from (x - c)?',
                'What if the divisor is (x + a)?'
            ],
            'Evaluate P(c)': [
                'What value am I substituting?',
                'Am I using parentheses for negative values?',
                'What is the order of operations?'
            ],
            'Set up synthetic division': [
                'What value goes in the box?',
                'Have I included zero coefficients?',
                'Are coefficients in descending order?'
            ],
            'List factors': [
                'What numbers divide the constant term?',
                'What numbers divide the leading coefficient?',
                'Did I include negatives?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'How do I accomplish it?', 'What should I watch out for?'];
    }

    generateProgressiveHints(step, problem) {
        const category = this.remainderFactorTypes[problem.type]?.category || 'remainder_theorem';
        const hintSet = this.hints[category] || this.hints.remainder_theorem;

        return {
            level1: hintSet.level1 || 'Think about which theorem or method applies.',
            level2: hintSet.level2 || 'Consider what information you have and what you need.',
            level3: hintSet.level3 || 'Follow the step-by-step procedure for this technique.',
            level4: hintSet.level4 || 'Here\'s the specific operation you need to perform.'
        };
    }

    breakIntoSubSteps(step) {
        if (step.process && Array.isArray(step.process)) {
            return step.process;
        }

        const genericSubSteps = [
            'Understand what this step requires',
            'Gather necessary information',
            'Apply the appropriate method',
            'Calculate or derive the result',
            'Verify the answer makes sense'
        ];

        return genericSubSteps;
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try a similar problem with different coefficients',
            practiceHint: 'Start with simpler polynomials to build confidence',
            extension: 'Try problems with higher degrees or fractional coefficients'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What information do I have?',
            goal: 'What am I trying to find?',
            strategy: 'Which method should I use?',
            execute: 'How do I carry out this method?',
            verify: 'Does my answer make sense?'
        };
    }

    identifyDecisionPoints(step) {
        return [
            'Which theorem or method to apply?',
            'What value to use or test?',
            'How to organize the work?',
            'When to stop the process?'
        ];
    }

    suggestAlternativeMethods(step, problem) {
        const category = this.remainderFactorTypes[problem.type]?.category;
        
        const alternatives = {
            'remainder_theorem': [
                'Could use polynomial long division instead',
                'Could use synthetic division',
                'Direct evaluation (Remainder Theorem) is usually fastest'
            ],
            'factor_theorem': [
                'Could check by division',
                'Could use synthetic division to verify',
                'Direct evaluation is most efficient'
            ],
            'synthetic_division': [
                'Could use polynomial long division',
                'For simple cases, mental math might work',
                'Synthetic division is fastest for linear divisors'
            ]
        };

        return alternatives[category] || ['The chosen method is appropriate'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by using its result`,
            progression: 'We are moving systematically toward the solution',
            relationship: 'Each step provides information needed for the next'
        };
    }

    identifyPrerequisites(step, problemType) {
        const category = this.remainderFactorTypes[problemType]?.category || 'remainder_theorem';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Basic polynomial operations'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'State the Remainder Theorem': ['remainder', 'theorem', 'divisor', 'polynomial', 'evaluate'],
            'State the Factor Theorem': ['factor', 'theorem', 'zero', 'root', 'divides'],
            'Set up synthetic division': ['synthetic division', 'coefficients', 'algorithm'],
            'Identify a₀ and aₙ': ['constant term', 'leading coefficient', 'factors'],
            'Divide leading terms': ['leading term', 'degree', 'quotient'],
            'Evaluate P(c)': ['evaluate', 'substitute', 'polynomial function']
        };

        return vocabulary[step.step] || ['polynomial', 'solution', 'method'];
    }

    generateThinkingPrompts(step) {
        return {
            before: 'Before starting, what do I need to identify or understand?',
            during: 'As I work, what should I be careful about?',
            after: 'After finishing, how can I verify this is correct?'
        };
    }

    findRealWorldConnection(step, problem) {
        const category = this.remainderFactorTypes[problem.type]?.category;
        
        const connections = {
            'remainder_theorem': 'Like checking if items divide evenly into groups, with remainder as leftovers',
            'factor_theorem': 'Finding factors helps solve real problems like finding dimensions of boxes given volume',
            'synthetic_division': 'Efficient calculation method used in engineering and computer science',
            'rational_root_theorem': 'Helps narrow down possibilities in optimization and design problems',
            'complete_factorization': 'Breaking down complex systems into component parts for analysis'
        };

        return connections[category] || 'Polynomial techniques solve real problems in science, engineering, and economics';
    }

    // GRAPH GENERATION

    generateRemainderFactorGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;
        const category = this.remainderFactorTypes[type]?.category;

        if (category === 'factor_theorem' || category === 'find_zeros' || category === 'complete_factorization') {
            this.graphData = this.generateFactorGraph(this.currentProblem, this.currentSolution);
        }
    }

    generateFactorGraph(problem, solution) {
        return {
            type: 'polynomial_graph',
            description: 'Graph showing polynomial and its zeros',
            features: {
                zeros: 'Points where graph crosses x-axis',
                factors: 'Each zero corresponds to a factor',
                multiplicity: 'Affects how graph behaves at zero'
            },
            visualization: 'Plot polynomial and mark roots/zeros'
        };
    }

    // WORKBOOK GENERATION

    generateRemainderFactorWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createTheoremSection(),
            this.createEnhancedStepsSection(),
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
            title: 'Enhanced Polynomial Remainder Factor Mathematical Workbook',
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
            ['Problem Type', this.remainderFactorTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.remainderFactorTypes[this.currentProblem.type]?.category || 'remainder_factor'],
            ['Polynomial', this.currentProblem.cleanPolynomial || this.currentProblem.originalPolynomial],
            ['Operation', this.currentProblem.operation || 'solve']
        ];

        if (this.currentProblem.cleanDivisor) {
            problemData.push(['Divisor', this.currentProblem.cleanDivisor]);
        }

        if (this.currentProblem.parameters.divisorC !== undefined) {
            problemData.push(['Value of c', this.currentProblem.parameters.divisorC]);
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSection() {
        if (!this.prerequisiteChecks) return null;

        const category = this.remainderFactorTypes[this.currentProblem.type]?.category;
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

    createTheoremSection() {
        const category = this.remainderFactorTypes[this.currentProblem.type]?.category;
        const lesson = this.lessons[category];

        if (!lesson) return null;

        const theoremData = [
            ['Topic', lesson.title],
            ['', ''],
            ['Key Concepts', '']
        ];

        lesson.concepts.forEach(concept => {
            theoremData.push(['•', concept]);
        });

        theoremData.push(['', '']);
        theoremData.push(['Theory', lesson.theory]);

        if (lesson.keyFormulas) {
            theoremData.push(['', '']);
            theoremData.push(['Key Formulas', '']);
            Object.entries(lesson.keyFormulas).forEach(([name, formula]) => {
                theoremData.push([name, formula]);
            });
        }

        return {
            title: 'Relevant Theorem/Concept',
            type: 'theorem',
            data: theoremData
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
                stepsData.push(['Connection', step.explanation.currentState]);
                stepsData.push(['Next Goal', step.explanation.nextGoal]);
                stepsData.push(['', '']);
                return;
            }

            stepsData.push([`Step ${step.stepNumber}`, step.step]);
            stepsData.push(['Description', step.description]);

            if (step.detail) {
                stepsData.push(['Detail', step.detail]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.formula) {
                stepsData.push(['Formula', step.formula]);
            }

            if (step.theorem) {
                stepsData.push(['Theorem', step.theorem]);
            }

            if (step.process && Array.isArray(step.process)) {
                stepsData.push(['Process', step.process.join(' → ')]);
            }

            if (step.ELI5 && this.explanationLevel === 'ELI5') {
                stepsData.push(['ELI5', step.ELI5.explanation]);
                if (step.ELI5.analogy) {
                    stepsData.push(['Analogy', step.ELI5.analogy]);
                }
            }

            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
                stepsData.push(['Algebraic', step.explanations.algebraic]);
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
                stepsData.push(['Before', step.thinkingPrompts.before]);
                stepsData.push(['During', step.thinkingPrompts.during]);
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

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [
            ['Solution Type', this.currentSolution.type],
            ['Method Used', this.currentSolution.method]
        ];

        if (this.currentSolution.result) {
            solutionData.push(['Result', this.currentSolution.result]);
        }

        if (this.currentSolution.note) {
            solutionData.push(['Note', this.currentSolution.note]);
        }

        return {
            title: 'Solution Summary',
            type: 'solution',
            data: solutionData
        };
    }

    createAnalysisSection() {
        if (!this.currentSolution) return null;

        const analysisData = [
            ['Method', this.currentSolution.type || this.currentSolution.category],
            ['Category', this.currentSolution.category],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Explanation Level', this.explanationLevel]
        ];

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSection() {
        return {
            title: 'Verification',
            type: 'verification',
            data: [
                ['Verification Method', 'Multiply factors or perform division to check'],
                ['Note', 'Always verify polynomial solutions by substitution or multiplication']
            ]
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
            appData.push(['Context', app.context]);
            appData.push(['Relevance', app.real_world_meaning]);
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

        const category = this.remainderFactorTypes[this.currentProblem.type]?.category;
        const lesson = this.lessons[category];

        if (!lesson) return null;

        const pedagogicalData = [
            ['Solving Steps', lesson.solvingSteps.join(' → ')],
            ['Applications', lesson.applications.join('; ')]
        ];

        if (lesson.visualizations) {
            pedagogicalData.push(['Visualizations', lesson.visualizations.join('; ')]);
        }

        return {
            title: 'Teaching Notes',
            type: 'pedagogical',
            data: pedagogicalData
        };
    }

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const category = this.remainderFactorTypes[this.currentProblem.type]?.category;
        
        const alternativesData = [
            ['Primary Method', this.currentSolution.method],
            ['', ''],
            ['Alternative Approaches', '']
        ];

        const alternatives = {
            'remainder_theorem': ['Polynomial long division', 'Synthetic division', 'Direct evaluation (fastest)'],
            'factor_theorem': ['Division to verify', 'Synthetic division', 'Direct evaluation (most efficient)'],
            'synthetic_division': ['Polynomial long division', 'Repeated evaluation'],
            'rational_root_theorem': ['Graphing to estimate roots', 'Numerical methods', 'Trial and error'],
            'complete_factorization': ['Grouping', 'Special patterns', 'Quadratic formula', 'Graphing']
        };

        const methods = alternatives[category] || ['Standard algebraic approach'];
        methods.forEach((method, i) => {
            alternativesData.push([`Method ${i + 1}`, method]);
        });

        return {
            title: 'Alternative Methods',
            type: 'alternatives',
            data: alternativesData
        };
    }

    createPracticeProblemsSection() {
        const category = this.remainderFactorTypes[this.currentProblem.type]?.category;
        const problems = this.questionBank.byDifficulty;

        const practiceData = [
            ['Practice Problems', ''],
            ['', ''],
            ['Easy', '']
        ];

        problems.easy.slice(0, 2).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Medium', '']);

        problems.medium.slice(0, 2).forEach((p, i) => {
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
}

// Export the class
export default EnhancedPolynomialRemainderFactorWorkbook;
