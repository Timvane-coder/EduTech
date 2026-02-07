// Enhanced Polynomial Rational Root Theorem Mathematical Workbook
import * as math from 'mathjs';

export class EnhancedRationalRootTheoremWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2400;
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
        this.initializeRationalRootSolvers();
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
        this.initializeRationalRootLessons();
    }

    initializeRationalRootLessons() {
        this.lessons = {
            rational_root_theorem_basics: {
                title: "Rational Root Theorem Fundamentals",
                concepts: [
                    "If p/q is a rational root of polynomial a_n*x^n + ... + a_1*x + a_0, then p divides a_0 and q divides a_n",
                    "Provides list of possible rational roots to test",
                    "Does not guarantee roots exist, only what they could be if they exist",
                    "Integer roots are special case where q = 1"
                ],
                theory: "The Rational Root Theorem is a powerful tool that limits the search for rational zeros of a polynomial to a finite set of possibilities based on the leading coefficient and constant term.",
                keyFormulas: {
                    "Rational Root Form": "p/q where gcd(p,q) = 1",
                    "Possible Numerators": "p divides constant term a_0",
                    "Possible Denominators": "q divides leading coefficient a_n",
                    "Complete Set": "±(factors of a_0)/(factors of a_n)"
                },
                solvingSteps: [
                    "Identify polynomial in standard form",
                    "Find constant term (a_0) and leading coefficient (a_n)",
                    "List all factors of a_0 (possible values of p)",
                    "List all factors of a_n (possible values of q)",
                    "Form all possible ratios ±p/q",
                    "Simplify and remove duplicates",
                    "Test each candidate using synthetic division or substitution",
                    "Verify actual roots"
                ],
                applications: [
                    "Finding exact roots of polynomial equations",
                    "Engineering design optimization",
                    "Physics trajectory analysis",
                    "Economic modeling break-even points",
                    "Computer graphics curve fitting"
                ]
            },

            polynomial_fundamentals: {
                title: "Polynomial Fundamentals",
                concepts: [
                    "Polynomial: sum of terms with non-negative integer exponents",
                    "Degree: highest exponent in polynomial",
                    "Leading coefficient: coefficient of highest degree term",
                    "Constant term: term with no variable (degree 0)",
                    "Root/Zero: value that makes polynomial equal zero"
                ],
                theory: "Understanding polynomial structure is essential before applying the Rational Root Theorem. The theorem connects the coefficients to possible rational roots.",
                keyFormulas: {
                    "General Form": "a_n*x^n + a_(n-1)*x^(n-1) + ... + a_1*x + a_0",
                    "Evaluation": "P(r) = 0 if r is a root",
                    "Factor Theorem": "If P(r) = 0, then (x - r) is a factor"
                },
                importantFacts: [
                    "Polynomial of degree n has at most n roots",
                    "Complex roots come in conjugate pairs",
                    "Number of positive/negative roots limited by Descartes' Rule",
                    "Irrational roots come in conjugate pairs for rational coefficients"
                ]
            },

            factors_and_divisibility: {
                title: "Factors and Divisibility",
                concepts: [
                    "Factor: number that divides evenly into another",
                    "All factors come in pairs",
                    "1 and the number itself are always factors",
                    "Prime numbers have exactly two factors"
                ],
                theory: "Finding factors is crucial for the Rational Root Theorem. Systematic enumeration ensures no possibilities are missed.",
                techniques: {
                    "Factor Pairs": "Check divisors from 1 to √n",
                    "Prime Factorization": "Break down into prime factors",
                    "Divisibility Rules": "Quick tests for 2, 3, 5, etc."
                },
                examples: [
                    "Factors of 12: ±1, ±2, ±3, ±4, ±6, ±12",
                    "Factors of 15: ±1, ±3, ±5, ±15",
                    "Factors of 7: ±1, ±7 (prime)"
                ]
            },

            synthetic_division: {
                title: "Synthetic Division",
                concepts: [
                    "Efficient method to divide polynomial by (x - r)",
                    "Tests if r is a root",
                    "Provides quotient polynomial if r is a root",
                    "Faster than long division for linear divisors"
                ],
                theory: "Synthetic division is the preferred method for testing rational root candidates. Remainder of zero confirms the candidate is an actual root.",
                procedure: [
                    "Write coefficients in order (include 0 for missing terms)",
                    "Write candidate root to the left",
                    "Bring down first coefficient",
                    "Multiply by candidate, add to next coefficient",
                    "Repeat until done",
                    "Last number is remainder"
                ],
                interpretation: {
                    "Remainder = 0": "Candidate IS a root; quotient gives reduced polynomial",
                    "Remainder ≠ 0": "Candidate is NOT a root"
                }
            },

            factoring_methods: {
                title: "Polynomial Factoring Methods",
                concepts: [
                    "Complete factorization: product of irreducible factors",
                    "After finding one root, factor it out and repeat",
                    "Quadratic factors can be handled by quadratic formula",
                    "Some polynomials have no rational roots"
                ],
                methods: {
                    "Rational Root Theorem": "Find rational roots systematically",
                    "Synthetic Division": "Test candidates and factor",
                    "Grouping": "For certain polynomial structures",
                    "Special Patterns": "Difference of squares, sum/difference of cubes",
                    "Quadratic Formula": "For irreducible quadratic factors"
                },
                strategy: [
                    "Use Rational Root Theorem for initial roots",
                    "Factor out found roots using synthetic division",
                    "Reduce degree progressively",
                    "Switch to quadratic formula when degree reaches 2",
                    "Check for irrational or complex roots if needed"
                ]
            },

            descartes_rule_signs: {
                title: "Descartes' Rule of Signs",
                concepts: [
                    "Limits number of positive real roots",
                    "Limits number of negative real roots",
                    "Count sign changes in P(x) for positive roots",
                    "Count sign changes in P(-x) for negative roots"
                ],
                theory: "Descartes' Rule helps prioritize which rational root candidates to test first by indicating how many positive vs negative roots to expect.",
                application: {
                    "Positive Roots": "Number of sign changes in P(x), or less by even number",
                    "Negative Roots": "Number of sign changes in P(-x), or less by even number"
                },
                benefit: "Reduces wasted effort testing candidates unlikely to be roots"
            },

            multiplicity: {
                title: "Root Multiplicity",
                concepts: [
                    "Multiplicity: number of times a root appears",
                    "Simple root: multiplicity 1",
                    "Double root: multiplicity 2",
                    "Graph touches/crosses x-axis based on multiplicity"
                ],
                theory: "A root of multiplicity m appears m times in complete factorization. This affects the shape of the graph at that root.",
                graphBehavior: {
                    "Odd multiplicity": "Graph crosses x-axis",
                    "Even multiplicity": "Graph touches x-axis but doesn't cross"
                },
                finding: "After finding a root, continue testing it to see if it's also a root of the quotient polynomial"
            },

            upper_lower_bounds: {
                title: "Upper and Lower Bounds",
                concepts: [
                    "Upper bound: no roots larger than this value",
                    "Lower bound: no roots smaller than this value",
                    "Reduces number of candidates to test",
                    "Based on synthetic division patterns"
                ],
                theory: "Bounds testing can eliminate many candidates quickly, making the search more efficient.",
                rules: {
                    "Upper Bound": "If dividing by positive c gives all non-negative row",
                    "Lower Bound": "If dividing by negative c gives alternating signs in row"
                },
                application: "Test a few integer candidates to establish bounds, then focus search within those bounds"
            },

            integer_vs_rational_roots: {
                title: "Integer Roots vs Rational Roots",
                concepts: [
                    "Integer root: p/q where q = 1",
                    "Rational root: p/q where q ≠ 1",
                    "Integer roots easier to find and test",
                    "Leading coefficient of 1 means only integer possibilities"
                ],
                strategy: {
                    "Monic Polynomial (leading coeff = 1)": "Only test integer divisors of constant term",
                    "Non-monic Polynomial": "Must test all p/q combinations",
                    "Practical Approach": "Test integer candidates first, then fractions if needed"
                },
                simplification: "When leading coefficient is 1, the theorem simplifies significantly"
            },

            remainder_theorem: {
                title: "Remainder Theorem",
                concepts: [
                    "P(r) equals remainder when P(x) divided by (x - r)",
                    "P(r) = 0 if and only if r is a root",
                    "Can evaluate P(r) directly or use synthetic division",
                    "Provides two ways to test candidates"
                ],
                theory: "The Remainder Theorem connects polynomial evaluation to division, giving flexibility in testing methods.",
                methods: {
                    "Direct Evaluation": "Substitute r into P(x) and calculate",
                    "Synthetic Division": "Divide by (x - r), check remainder",
                    "Comparison": "Synthetic division also gives quotient for factoring"
                }
            },

            complex_irrational_roots: {
                title: "When Rational Root Theorem Isn't Enough",
                concepts: [
                    "Not all polynomials have rational roots",
                    "Irrational roots require other methods",
                    "Complex roots come in conjugate pairs",
                    "May need numerical or advanced techniques"
                ],
                theory: "Rational Root Theorem only finds rational roots. If none exist or after finding all rational roots, other methods are needed.",
                alternatives: {
                    "Quadratic Formula": "For degree 2 factors",
                    "Cubic Formula": "For degree 3 (complex)",
                    "Numerical Methods": "Newton's method, bisection",
                    "Graphing": "Approximate irrational roots visually"
                },
                recognition: "If all rational candidates fail, roots are irrational or complex"
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
                highlightBg: '#ffe6e6',
                rootHighlight: '#d4edda',
                candidateBg: '#e7f3ff'
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
                rootHighlight: '#c8e6c9',
                candidateBg: '#bbdefb'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeMathSymbols() {
        return {
            // Mathematical operators
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±', 'sqrt': '√',
            'divide': '÷', 'times': '×',
            // Greek letters
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            // Special symbols
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'perpendicular': '⊥', 'parallel': '∥',
            'rarrow': '→', 'therefore': '∴', 'because': '∵'
        };
    }

    initializeRationalRootSolvers() {
        this.rationalRootTypes = {
            basic_monic: {
                patterns: [
                    /x\^(\d+).*[+-]\s*(\d+)\s*=\s*0/,
                    /monic/i
                ],
                solver: this.solveMonicPolynomial.bind(this),
                name: 'Monic Polynomial (leading coefficient = 1)',
                category: 'monic',
                description: 'Polynomial where leading coefficient is 1, simplifying to integer root search',
                difficulty: 'basic'
            },

            standard_polynomial: {
                patterns: [
                    /(\d+)x\^(\d+)/,
                    /polynomial/i,
                    /rational.*root/i
                ],
                solver: this.solveStandardPolynomial.bind(this),
                name: 'Standard Polynomial with Rational Root Theorem',
                category: 'standard',
                description: 'General polynomial requiring full p/q candidate testing',
                difficulty: 'intermediate'
            },

            cubic_polynomial: {
                patterns: [
                    /x\^3/,
                    /cubic/i
                ],
                solver: this.solveCubicPolynomial.bind(this),
                name: 'Cubic Polynomial',
                category: 'cubic',
                description: 'Third-degree polynomial, often has at least one rational root',
                difficulty: 'intermediate'
            },

            quartic_polynomial: {
                patterns: [
                    /x\^4/,
                    /quartic/i
                ],
                solver: this.solveQuarticPolynomial.bind(this),
                name: 'Quartic Polynomial',
                category: 'quartic',
                description: 'Fourth-degree polynomial',
                difficulty: 'advanced'
            },

            integer_coefficients: {
                patterns: [
                    /integer.*coefficient/i
                ],
                solver: this.solveIntegerCoefficients.bind(this),
                name: 'Polynomial with Integer Coefficients',
                category: 'integer_coeffs',
                description: 'All coefficients are integers',
                difficulty: 'intermediate'
            },

            factored_form_verification: {
                patterns: [
                    /verify.*factor/i,
                    /check.*root/i
                ],
                solver: this.verifyFactorization.bind(this),
                name: 'Verify Factorization',
                category: 'verification',
                description: 'Check if given values are roots',
                difficulty: 'basic'
            },

            complete_factorization: {
                patterns: [
                    /factor.*completely/i,
                    /find.*all.*root/i
                ],
                solver: this.completelyFactorPolynomial.bind(this),
                name: 'Complete Factorization',
                category: 'complete',
                description: 'Find all roots and factor completely',
                difficulty: 'advanced'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            factor_finding: {
                'List factors of constant term': [
                    'Forgetting negative factors',
                    'Missing factor pairs',
                    'Including zero as a factor',
                    'Not including ±1'
                ],
                'List factors of leading coefficient': [
                    'Forgetting it could be 1',
                    'Missing negative factors',
                    'Confusing with constant term factors'
                ]
            },
            candidate_formation: {
                'Form p/q ratios': [
                    'Forgetting to include ±',
                    'Not simplifying fractions',
                    'Creating duplicate candidates',
                    'Wrong order (q/p instead of p/q)'
                ],
                'Simplify candidates': [
                    'Not reducing to lowest terms',
                    'Keeping duplicates like 2/2 and 1/1',
                    'Missing equivalent forms'
                ]
            },
            testing: {
                'Synthetic division': [
                    'Arithmetic errors in multiplication/addition',
                    'Forgetting to include 0 for missing terms',
                    'Misaligning columns',
                    'Sign errors with negative candidates'
                ],
                'Substitution': [
                    'Order of operations errors',
                    'Sign errors with negative values',
                    'Exponent calculation mistakes',
                    'Fraction arithmetic errors'
                ]
            },
            factoring: {
                'Factor out root': [
                    'Using wrong quotient polynomial',
                    'Forgetting to continue factoring',
                    'Sign error in factor (x - r) vs (x + r)'
                ],
                'Complete factorization': [
                    'Stopping too early',
                    'Missing repeated roots',
                    'Not checking for irrational/complex roots'
                ]
            },
            verification: {
                'Check solution': [
                    'Not verifying all roots',
                    'Arithmetic errors in verification',
                    'Forgetting to check multiplicity'
                ]
            }
        };

        this.errorPrevention = {
            systematic_listing: {
                reminder: 'List factors methodically in pairs to avoid missing any',
                method: 'Check divisors from 1 to √n, recording both divisor and quotient'
            },
            sign_tracking: {
                reminder: 'Every factor comes in ±pairs for polynomial roots',
                method: 'After listing positive factors, systematically add negative versions'
            },
            simplification: {
                reminder: 'Always reduce fractions to lowest terms to eliminate duplicates',
                method: 'Find GCD of numerator and denominator before adding to candidate list'
            },
            organized_testing: {
                reminder: 'Test candidates systematically, keeping track of results',
                method: 'Create table with candidate, test method, and result columns'
            },
            synthetic_division_care: {
                reminder: 'Include 0 coefficients for missing degree terms',
                method: 'Write polynomial in standard form with all powers before dividing'
            },
            degree_tracking: {
                reminder: 'After each root, degree decreases by 1',
                method: 'Track quotient polynomial degree to know how many more roots possible'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why the theorem works and mathematical meaning',
                language: 'intuitive and concept-focused'
            },
            procedural: {
                focus: 'Step-by-step process to apply the theorem',
                language: 'clear instructions and sequence'
            },
            visual: {
                focus: 'Graphical understanding and patterns',
                language: 'visual and spatial descriptions'
            },
            algebraic: {
                focus: 'Formal mathematical properties and rules',
                language: 'precise mathematical terminology'
            },
            computational: {
                focus: 'Efficient calculation and organization',
                language: 'algorithmic and systematic'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential steps only',
                examples: 'concrete numbers and simple cases',
                emphasis: 'what to do, basic why'
            },
            intermediate: {
                vocabulary: 'standard mathematical terms',
                detail: 'main steps with reasoning',
                examples: 'variety of cases',
                emphasis: 'how and why'
            },
            ELI5: {
                vocabulary: 'simplest possible terms with analogies',
                detail: 'every tiny step with stories',
                examples: 'real-world analogies',
                analogies: true,
                visualization: 'simple pictures and metaphors',
                emphasis: 'understanding through analogy'
            },
            detailed: {
                vocabulary: 'full mathematical vocabulary',
                detail: 'comprehensive with theory',
                examples: 'abstract and generalized',
                emphasis: 'deep understanding and connections'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced progression',
                emphasis: 'building understanding step-by-step'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            volume_optimization: {
                scenario: "Box design with volume constraints",
                equation: "V(x) = x(L-2x)(W-2x) for open-top box",
                examples: [
                    "Find dimensions that give specific volume",
                    "Maximize volume with material constraints"
                ],
                context: "Manufacturing and packaging design use polynomial equations to optimize dimensions",
                polynomialType: "cubic or quartic"
            },
            projectile_motion: {
                scenario: "Object trajectory under gravity",
                equation: "h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters)",
                examples: [
                    "When does projectile hit ground? (h = 0)",
                    "At what times is height equal to specific value?"
                ],
                context: "Physics and engineering for ballistics, sports, water fountains",
                polynomialType: "quadratic, but connects to higher degree for complex trajectories"
            },
            economics_breakeven: {
                scenario: "Revenue equals cost analysis",
                equation: "R(x) = C(x) where both are polynomials",
                examples: [
                    "At what production level does profit become positive?",
                    "Find break-even points for pricing strategies"
                ],
                context: "Business planning and economic analysis",
                polynomialType: "various degrees"
            },
            population_modeling: {
                scenario: "Population growth/decay models",
                equation: "P(t) = at³ + bt² + ct + d",
                examples: [
                    "When does population reach certain level?",
                    "When does growth rate change?"
                ],
                context: "Biology, ecology, demographics",
                polynomialType: "cubic or higher"
            },
            engineering_stress: {
                scenario: "Beam deflection under load",
                equation: "Deflection polynomial based on material and load",
                examples: [
                    "Find positions of zero deflection",
                    "Maximum stress points"
                ],
                context: "Civil and mechanical engineering",
                polynomialType: "quartic or higher"
            },
            chemical_reactions: {
                scenario: "Reaction rate equations",
                equation: "Rate polynomials in concentration",
                examples: [
                    "When does reaction rate equal specific value?",
                    "Equilibrium points"
                ],
                context: "Chemistry and chemical engineering",
                polynomialType: "various degrees"
            },
            computer_graphics: {
                scenario: "Bezier curves and interpolation",
                equation: "Polynomial curves for smooth graphics",
                examples: [
                    "Find intersection points",
                    "Curve-fitting data points"
                ],
                context: "Computer animation and CAD design",
                polynomialType: "cubic and higher"
            },
            finance_investment: {
                scenario: "Compound interest and present value",
                equation: "Future value polynomials",
                examples: [
                    "When does investment double?",
                    "Find required interest rate"
                ],
                context: "Financial planning and analysis",
                polynomialType: "various, often requiring rational roots"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            basic_monic: {
                skills: [
                    'Finding factors of integers',
                    'Basic polynomial evaluation',
                    'Synthetic division or substitution'
                ],
                priorKnowledge: [
                    'What a factor is',
                    'How to evaluate polynomials',
                    'Understanding of roots/zeros'
                ],
                checkQuestions: [
                    "List all factors of 12",
                    "Evaluate P(x) = x² - 3x + 2 at x = 1",
                    "What does it mean for r to be a root of P(x)?"
                ]
            },
            standard: {
                skills: [
                    'Finding factors of two numbers',
                    'Forming and simplifying fractions',
                    'Synthetic division',
                    'Polynomial evaluation with fractions'
                ],
                priorKnowledge: [
                    'Factor pairs and divisibility',
                    'Simplifying fractions to lowest terms',
                    'How to test polynomial roots',
                    'Rational number arithmetic'
                ],
                checkQuestions: [
                    "List factors of both 6 and 10",
                    "Simplify 6/10 to lowest terms",
                    "Evaluate P(x) = 2x² - x - 3 at x = 3/2",
                    "Perform synthetic division of x² + 2x - 3 by (x - 1)"
                ]
            },
            cubic: {
                skills: [
                    'All standard polynomial skills',
                    'Factoring after finding first root',
                    'Solving quadratic equations',
                    'Recognizing factoring patterns'
                ],
                priorKnowledge: [
                    'Rational Root Theorem',
                    'Synthetic division',
                    'Quadratic formula',
                    'Factor theorem'
                ],
                checkQuestions: [
                    "Factor x² - 5x + 6",
                    "Use quadratic formula on 2x² - 3x - 2 = 0",
                    "If x = 2 is a root of P(x), what is one factor?"
                ]
            },
            complete_factorization: {
                skills: [
                    'Systematic root finding',
                    'Repeated factoring',
                    'Recognizing when to switch methods',
                    'Identifying irreducible polynomials'
                ],
                priorKnowledge: [
                    'Full factoring toolkit',
                    'Complex and irrational roots concepts',
                    'Descartes Rule of Signs',
                    'Polynomial division'
                ],
                checkQuestions: [
                    "How many roots does a degree 4 polynomial have?",
                    "After finding one root of cubic, what's next?",
                    "Can a quadratic with integer coefficients have just one rational root?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            factor_tree: {
                description: "Visual tree showing factor pairs",
                analogy: "Like family tree showing how number breaks down",
                visualization: "Branch diagram with factor pairs at each level",
                suitableFor: ['all'],
                explanation: "Helps systematically find all factors without missing any"
            },
            candidate_table: {
                description: "Organized table of p/q candidates",
                analogy: "Like menu showing all possibilities to choose from",
                visualization: "Table with p values as rows, q values as columns",
                suitableFor: ['standard', 'quartic'],
                explanation: "Systematic organization prevents duplicates and missing candidates"
            },
            synthetic_division_layout: {
                description: "Structured layout for division process",
                analogy: "Like assembly line with specific stations",
                visualization: "Horizontal layout with clear steps",
                suitableFor: ['all'],
                explanation: "Organized format reduces errors and shows quotient clearly"
            },
            root_number_line: {
                description: "Roots marked on number line",
                analogy: "Like marking locations on a map",
                visualization: "Horizontal line with root positions marked",
                suitableFor: ['all'],
                explanation: "Visual representation of where polynomial equals zero"
            },
            graph_intersection: {
                description: "Graph of polynomial crossing x-axis",
                analogy: "Where the curve touches the ground",
                visualization: "Coordinate plane with polynomial curve",
                suitableFor: ['all'],
                explanation: "Roots are x-intercepts where y = 0"
            },
            factoring_progression: {
                description: "Step-by-step factorization display",
                analogy: "Like peeling layers of an onion",
                visualization: "Equations showing progressive factoring",
                suitableFor: ['complete_factorization'],
                explanation: "Shows how polynomial breaks down into irreducible factors"
            },
            descartes_sign_chart: {
                description: "Sign pattern analysis for positive/negative roots",
                analogy: "Like weather forecast showing possibilities",
                visualization: "Table showing sign changes",
                suitableFor: ['optimization'],
                explanation: "Predicts how many positive/negative roots to expect"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "x³ - 6x² + 11x - 6 = 0",
                    leadingCoeff: 1,
                    constantTerm: -6,
                    possibleRoots: "±1, ±2, ±3, ±6",
                    actualRoots: [1, 2, 3],
                    factorization: "(x - 1)(x - 2)(x - 3)",
                    difficulty: "easy",
                    note: "Monic cubic with all integer roots"
                },
                {
                    problem: "x³ - 4x² + x + 6 = 0",
                    leadingCoeff: 1,
                    constantTerm: 6,
                    possibleRoots: "±1, ±2, ±3, ±6",
                    actualRoots: [-1, 2, 3],
                    factorization: "(x + 1)(x - 2)(x - 3)",
                    difficulty: "easy",
                    note: "Monic with one negative root"
                },
                {
                    problem: "x² - 5x + 6 = 0",
                    leadingCoeff: 1,
                    constantTerm: 6,
                    possibleRoots: "±1, ±2, ±3, ±6",
                    actualRoots: [2, 3],
                    factorization: "(x - 2)(x - 3)",
                    difficulty: "easy",
                    note: "Quadratic for practice"
                }
            ],
            intermediate: [
                {
                    problem: "2x³ - 5x² - 4x + 3 = 0",
                    leadingCoeff: 2,
                    constantTerm: 3,
                    possibleRoots: "±1, ±3, ±1/2, ±3/2",
                    actualRoots: [3, 1, -1/2],
                    factorization: "(x - 3)(x - 1)(2x + 1)",
                    difficulty: "medium",
                    note: "Non-monic with fractional root"
                },
                {
                    problem: "3x³ - 10x² + 9x - 2 = 0",
                    leadingCoeff: 3,
                    constantTerm: -2,
                    possibleRoots: "±1, ±2, ±1/3, ±2/3",
                    actualRoots: [2, 1, 1/3],
                    factorization: "(x - 2)(x - 1)(3x - 1)",
                    difficulty: "medium",
                    note: "Requires testing fractional candidates"
                },
                {
                    problem: "6x³ - 11x² - 3x + 2 = 0",
                    leadingCoeff: 6,
                    constantTerm: 2,
                    possibleRoots: "±1, ±2, ±1/2, ±1/3, ±2/3, ±1/6",
                    actualRoots: [2, 1/2, -1/3],
                    factorization: "(x - 2)(2x - 1)(3x + 1)",
                    difficulty: "medium",
                    note: "Many candidates to test"
                }
            ],
            advanced: [
                {
                    problem: "x⁴ - 5x³ + 5x² + 5x - 6 = 0",
                    leadingCoeff: 1,
                    constantTerm: -6,
                    possibleRoots: "±1, ±2, ±3, ±6",
                    actualRoots: [1, 2, 3, -1],
                    factorization: "(x - 1)(x - 2)(x - 3)(x + 1)",
                    difficulty: "hard",
                    note: "Quartic with all integer roots"
                },
                {
                    problem: "2x⁴ - x³ - 8x² + x + 6 = 0",
                    leadingCoeff: 2,
                    constantTerm: 6,
                    possibleRoots: "±1, ±2, ±3, ±6, ±1/2, ±3/2",
                    actualRoots: [2, -1, -3/2, 1],
                    factorization: "(x - 2)(x + 1)(2x + 3)(x - 1)",
                    difficulty: "hard",
                    note: "Quartic with fractional root"
                },
                {
                    problem: "x³ - 7x + 6 = 0",
                    leadingCoeff: 1,
                    constantTerm: 6,
                    possibleRoots: "±1, ±2, ±3, ±6",
                    actualRoots: [1, 2, -3],
                    factorization: "(x - 1)(x - 2)(x + 3)",
                    difficulty: "hard",
                    note: "Missing x² term"
                }
            ],
            byDegree: {
                quadratic: [
                    "x² - 7x + 12 = 0",
                    "2x² - 5x - 3 = 0",
                    "3x² + 2x - 8 = 0"
                ],
                cubic: [
                    "x³ - 3x² - 4x + 12 = 0",
                    "2x³ + 3x² - 11x - 6 = 0",
                    "x³ + 2x² - x - 2 = 0"
                ],
                quartic: [
                    "x⁴ - 10x² + 9 = 0",
                    "x⁴ - 5x² + 4 = 0",
                    "2x⁴ - 3x³ - 3x² + 2x = 0"
                ]
            },
            byCoefficients: {
                monic: [
                    "x³ - x² - 10x - 8 = 0",
                    "x⁴ - 2x³ - 13x² + 14x + 24 = 0"
                ],
                nonMonic: [
                    "2x³ - x² - 18x + 9 = 0",
                    "3x⁴ - 5x³ - 16x² + 20x + 12 = 0"
                ],
                largeLeading: [
                    "6x³ - 7x² - 9x + 10 = 0",
                    "12x³ - 20x² - x + 3 = 0"
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            factor_confusion: {
                misconception: "Thinking only positive factors matter",
                reality: "Must include both positive and negative factors for possible roots",
                correctiveExample: "For constant term 6, factors are ±1, ±2, ±3, ±6, not just 1, 2, 3, 6",
                commonIn: ['all types']
            },
            ratio_order: {
                misconception: "Confusing p/q with q/p",
                reality: "p divides constant term (a₀), q divides leading coefficient (aₙ)",
                correctiveExample: "For 2x³ + 3x - 1 = 0: p divides 1, q divides 2, so ±1/1, ±1/2",
                commonIn: ['standard', 'non-monic']
            },
            duplicate_candidates: {
                misconception: "Including 2/2, 3/3, etc. as separate candidates",
                reality: "Always simplify fractions; 2/2 = 1 (already counted)",
                correctiveExample: "Don't list 2/2 separately; it reduces to 1/1 = 1",
                commonIn: ['candidate formation']
            },
            synthetic_division_signs: {
                misconception: "Confusion about signs in synthetic division with negative candidates",
                reality: "Testing candidate 'a' means dividing by (x - a), not (x + a)",
                correctiveExample: "To test x = -2, divide by (x - (-2)) = (x + 2), use -2 in synthetic division",
                commonIn: ['testing phase']
            },
            stopping_too_early: {
                misconception: "Stopping after finding one root",
                reality: "Continue factoring to find all roots",
                correctiveExample: "After finding x = 1, factor out (x - 1) and solve quotient",
                commonIn: ['factoring']
            },
            missing_terms: {
                misconception: "Forgetting to include 0 coefficients in synthetic division",
                reality: "Must include 0 for missing degree terms",
                correctiveExample: "x³ - 5x + 2 written as x³ + 0x² - 5x + 2 for division",
                commonIn: ['synthetic division']
            },
            theorem_guarantees: {
                misconception: "Thinking theorem guarantees rational roots exist",
                reality: "Theorem only tells what rational roots would be IF they exist",
                correctiveExample: "x² - 2 = 0 has possible rational roots ±1, ±2, but actual roots are ±√2 (irrational)",
                commonIn: ['understanding theorem']
            },
            all_roots_rational: {
                misconception: "Assuming all roots must be rational",
                reality: "Polynomials can have irrational or complex roots",
                correctiveExample: "x³ - 2 = 0 has one rational root approach but actual root is ∛2",
                commonIn: ['expectations']
            },
            factor_vs_root: {
                misconception: "Confusing (x - 2) with x = 2",
                reality: "If root is r, factor is (x - r); if root is 2, factor is (x - 2)",
                correctiveExample: "Root x = 3 gives factor (x - 3), not (x + 3)",
                commonIn: ['factorization']
            },
            multiplicity_blindness: {
                misconception: "Not recognizing repeated roots",
                reality: "A root can appear multiple times",
                correctiveExample: "x³ - 3x² + 3x - 1 = (x - 1)³ has root 1 with multiplicity 3",
                commonIn: ['complete factorization']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            rational_root_theorem: {
                analogy: "Guest list for a party",
                explanation: "The theorem gives you a list of who COULD show up (possible rational roots), but doesn't guarantee they'll all come (be actual roots). You still need to check attendance (test each candidate).",
                suitableFor: ['all types'],
                ELI5: "Imagine you're having a party and can only invite people from two families. The Rational Root Theorem is like making a list of everyone who COULD come, but you still have to call each person to see who actually shows up!"
            },
            factors: {
                analogy: "Building blocks that multiply to make a number",
                explanation: "Factors are like LEGO pieces that snap together to build a number. The number 12 can be built from 1×12, 2×6, or 3×4.",
                suitableFor: ['factor finding'],
                ELI5: "Factors are like the pieces of a puzzle. To make 12, you could use 3 pieces of 4, or 2 pieces of 6, or other combinations. We need to find all possible pieces!"
            },
            synthetic_division: {
                analogy: "Assembly line testing",
                explanation: "Synthetic division is like an assembly line where each station does a simple operation. If everything works smoothly and you get zero at the end, the candidate passes the test!",
                suitableFor: ['testing candidates'],
                ELI5: "Think of synthetic division like a game where you follow simple rules: multiply, then add, then multiply again. If you end with zero, you WIN - that number is a root!"
            },
            p_over_q: {
                analogy: "Pizza slices from two sources",
                explanation: "p/q is like taking p slices of pizza where each whole pizza was cut into q slices. p comes from one pile (constant term factors), q comes from another (leading coefficient factors).",
                suitableFor: ['candidate formation'],
                ELI5: "Imagine you have some whole pizzas and some pre-cut pizzas. The top number (p) says how many slices you take, and the bottom number (q) says how many slices each pizza was cut into. We try all combinations!"
            },
            progressive_factoring: {
                analogy: "Unpacking nested boxes",
                explanation: "Each root you find lets you remove one layer of the polynomial 'box'. Keep unpacking until you can't factor anymore.",
                suitableFor: ['complete factorization'],
                ELI5: "Finding roots is like opening a present wrapped in many boxes. Each root you find lets you take off one layer of wrapping. Keep going until you get to the smallest pieces inside!"
            },
            testing_efficiency: {
                analogy: "Trying keys on a keyring",
                explanation: "You have a ring with many possible keys (candidates). Some strategies help you try the most likely keys first, but you might need to try several before finding ones that work.",
                suitableFor: ['optimization'],
                ELI5: "You have a bunch of keys and need to find which ones open your door. Some keys look more likely to work (like integer keys), so you try those first. But you have to actually try each key to know for sure!"
            },
            root_multiplicity: {
                analogy: "Repeated guests at a party",
                explanation: "Sometimes the same person appears multiple times on your guest list. In polynomials, a root can appear multiple times (multiplicity).",
                suitableFor: ['advanced concepts'],
                ELI5: "Imagine if someone's name appeared twice on the party invitation list. That's like a root with multiplicity 2 - it counts twice!"
            },
            monic_simplification: {
                analogy: "Simpler shopping list",
                explanation: "When leading coefficient is 1 (monic), it's like shopping where everything costs $1. You only need to count items (integer factors), not worry about prices (denominators).",
                suitableFor: ['monic polynomials'],
                ELI5: "Imagine a store where everything costs exactly $1. That's a monic polynomial - much simpler! You only need to think about how many items (whole numbers), not fractions of dollars."
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            basic_monic: {
                level1: "What are the first and last terms of the polynomial?",
                level2: "The leading coefficient is 1, so what does that simplify to?",
                level3: "List all integer factors of the constant term (both positive and negative)",
                level4: "Test each factor using substitution or synthetic division. Factors of {constantTerm} are: {factors}"
            },
            standard: {
                level1: "What is the constant term and what is the leading coefficient?",
                level2: "What are all the factors of each of these numbers?",
                level3: "Form all ratios p/q where p divides constant, q divides leading coefficient",
                level4: "Your candidates are: {candidates}. Test each systematically starting with integers."
            },
            candidate_formation: {
                level1: "How do you form possible rational roots from two sets of factors?",
                level2: "Remember: p (numerator) divides constant term, q (denominator) divides leading coefficient",
                level3: "Create all combinations ±p/q, then simplify",
                level4: "Don't forget to include ±1 and reduce fractions to lowest terms"
            },
            testing: {
                level1: "How can you check if a number is a root?",
                level2: "You can substitute the value into the polynomial or use synthetic division",
                level3: "For synthetic division: write coefficients, test value on left, multiply and add across",
                level4: "If remainder is 0, the candidate IS a root. If non-zero, it's NOT a root."
            },
            factoring: {
                level1: "What do you do after finding a root?",
                level2: "Factor out (x - root) using the quotient from synthetic division",
                level3: "Continue finding roots of the quotient polynomial until fully factored",
                level4: "When quotient is quadratic, use quadratic formula if needed"
            },
            efficiency: {
                level1: "Do you have to test every single candidate?",
                level2: "Test integer candidates first - they're easier and more common",
                level3: "Use Descartes' Rule of Signs to predict positive/negative roots",
                level4: "Stop testing once you've found all roots (count = degree of polynomial)"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "List all factors of 18",
                    answer: "±1, ±2, ±3, ±6, ±9, ±18",
                    assesses: "factor_finding",
                    difficulty: "basic"
                },
                {
                    question: "For polynomial 3x² - 7x + 2, what are the possible rational roots?",
                    answer: "±1, ±2, ±1/3, ±2/3",
                    assesses: "rational_root_theorem_application",
                    difficulty: "intermediate"
                },
                {
                    question: "If P(2) = 0, what is one factor of P(x)?",
                    answer: "(x - 2)",
                    assesses: "factor_theorem",
                    difficulty: "basic"
                },
                {
                    question: "Use synthetic division to test if x = 3 is a root of x² - 5x + 6",
                    answer: "Yes, remainder is 0",
                    assesses: "synthetic_division",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "In the Rational Root Theorem, p divides what?",
                    options: ["Leading coefficient", "Constant term", "Middle term", "Any term"],
                    correct: "Constant term",
                    explanation: "p divides the constant term (a₀), while q divides the leading coefficient (aₙ)"
                },
                {
                    question: "For x³ - 8 = 0, what are the possible rational roots?",
                    options: ["±1, ±8", "±1, ±2, ±4, ±8", "±2", "±1"],
                    correct: "±1, ±2, ±4, ±8",
                    explanation: "Factors of constant term 8 are ±1, ±2, ±4, ±8; leading coefficient is 1"
                },
                {
                    question: "If a polynomial has degree 3, how many roots does it have (counting multiplicity)?",
                    options: ["At most 3", "Exactly 3", "At least 3", "Depends on coefficients"],
                    correct: "Exactly 3",
                    explanation: "Degree n polynomial has exactly n roots when counting multiplicity and complex roots"
                },
                {
                    question: "After finding root x = 2 in a cubic, what should you do next?",
                    options: ["Stop - you're done", "Find the other two roots", "Factor out (x - 2) and continue", "Graph it"],
                    correct: "Factor out (x - 2) and continue",
                    explanation: "Factor out the known root to get a quadratic, then solve that"
                }
            ],
            summative: [
                {
                    question: "Find all rational roots of 2x³ - 3x² - 11x + 6 = 0",
                    answer: {roots: [1/2, 3, -2], factorization: "(2x - 1)(x - 3)(x + 2)"},
                    showsWork: true,
                    rubric: {
                        list_factors: 1,
                        form_candidates: 1,
                        test_candidates: 2,
                        find_all_roots: 1,
                        verify: 1
                    }
                },
                {
                    question: "Completely factor x⁴ - 5x² + 4",
                    answer: {factorization: "(x - 1)(x + 1)(x - 2)(x + 2)", roots: [1, -1, 2, -2]},
                    showsWork: true,
                    rubric: {
                        recognize_pattern: 1,
                        factor_as_quadratic_in_x2: 2,
                        factor_completely: 2,
                        verify_roots: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "x² - 5x + 6 = 0",
                    "x³ - 7x + 6 = 0",
                    "x³ - 1 = 0",
                    "x² - 9 = 0"
                ],
                medium: [
                    "2x³ - x² - 8x + 4 = 0",
                    "3x³ - 7x + 2 = 0",
                    "x⁴ - 10x² + 9 = 0",
                    "6x³ + 7x² - 1 = 0"
                ],
                hard: [
                    "2x⁴ - 7x³ + 2x² + 7x - 4 = 0",
                    "12x³ - 20x² - x + 3 = 0",
                    "x⁵ - x⁴ - 5x³ + x² + 8x + 4 = 0",
                    "6x⁴ - 5x³ - 17x² + 5x + 3 = 0"
                ]
            },
            byObjective: {
                canListFactors: [
                    "List factors of 24",
                    "List factors of both 6 and 15",
                    "List factors of 100"
                ],
                canFormCandidates: [
                    "List possible rational roots of x² - 5x + 6",
                    "List possible rational roots of 2x² - 5x - 3",
                    "List possible rational roots of 6x³ - x - 2"
                ],
                canUseSyntheticDivision: [
                    "Test if x = 2 is root of x² - 3x + 2",
                    "Test if x = -1 is root of x³ + 2x² - x - 2",
                    "Test if x = 1/2 is root of 2x² - 3x + 1"
                ],
                canFactorCompletely: [
                    "Factor completely: x³ - 6x² + 11x - 6",
                    "Factor completely: 2x³ + x² - 13x + 6",
                    "Factor completely: x⁴ - 16"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "leading_coefficient_1": "Monic polynomial - only test integer factors of constant term",
                "leading_coefficient_not_1": "Non-monic - test all p/q combinations after simplifying",
                "small_constant_term": "Few factors - test all candidates quickly",
                "large_constant_term": "Many factors - use Descartes' Rule to prioritize",
                "missing_middle_terms": "May factor by substitution or special patterns",
                "all_positive_coefficients": "No positive roots by Descartes' Rule",
                "alternating_signs": "Possible multiple positive roots"
            },
            whenToUseWhat: {
                direct_substitution: "For simple candidates and low-degree polynomials",
                synthetic_division: "For all testing - also gives quotient for factoring",
                descartes_rule: "To predict number of positive/negative roots before testing",
                graphing: "To visualize approximate locations and verify rational roots",
                bounds_testing: "For polynomials with many candidates to eliminate possibilities",
                quadratic_formula: "After reducing to degree 2"
            },
            methodSelection: {
                factorsToConsider: [
                    "Is polynomial monic (leading coefficient = 1)?",
                    "How many possible candidates are there?",
                    "Are coefficients all integers?",
                    "What degree is the polynomial?",
                    "Are there missing terms?"
                ],
                generalApproach: [
                    "1. Identify constant term and leading coefficient",
                    "2. List all factors of each",
                    "3. Form and simplify all ±p/q candidates",
                    "4. Test candidates systematically (integers first)",
                    "5. Factor out each root found",
                    "6. Repeat on quotient until fully factored",
                    "7. Verify all roots"
                ]
            },
            optimizationTips: {
                "Test integers first": "Integer roots more common and easier to test than fractions",
                "Use Descartes' Rule": "Know how many positive/negative roots to expect",
                "Check ±1 early": "These are universal candidates and often roots",
                "Establish bounds": "Eliminate candidates outside bounds",
                "Track degree reduction": "After each root, quotient degree decreases by 1",
                "Watch for patterns": "Recognize special factoring patterns",
                "Organize results": "Keep table of candidates tested and results"
            },
            efficientTesting: {
                order: [
                    "Test ±1 first (always candidates)",
                    "Test other integer candidates",
                    "Test simple fractions (±1/2, ±1/3, etc.)",
                    "Test more complex fractions if needed"
                ],
                whenToStop: "Stop when you've found all roots (number = degree) or quotient is irreducible"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Quick Factor Finding",
                    timeLimit: 120,
                    problems: [
                        "List factors of 12",
                        "List factors of 18",
                        "List factors of 30",
                        "List factors of 24",
                        "List factors of 20"
                    ]
                },
                {
                    name: "Candidate Formation Sprint",
                    timeLimit: 180,
                    problems: [
                        "Possible roots of x² - 7x + 12",
                        "Possible roots of 2x² - 5x + 2",
                        "Possible roots of 3x² - 10x + 3",
                        "Possible roots of x³ - 8"
                    ]
                },
                {
                    name: "Monic Cubic Challenge",
                    timeLimit: 300,
                    problems: [
                        "x³ - 6x² + 11x - 6 = 0",
                        "x³ - 3x - 2 = 0",
                        "x³ - 7x + 6 = 0"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Reverse Engineering",
                    problem: "A cubic polynomial has roots 1, 2, and -3. Find the polynomial if the leading coefficient is 1.",
                    solution: "x³ - 7x + 6",
                    method: "Multiply factors: (x - 1)(x - 2)(x + 3)"
                },
                {
                    name: "Coefficient Detective",
                    problem: "Polynomial x³ + bx² + cx + 6 = 0 has roots 1, 2, and -3. Find b and c.",
                    solution: "b = 0, c = -7",
                    method: "Expand (x - 1)(x - 2)(x + 3) = x³ - 7x + 6"
                },
                {
                    name: "Minimal Candidates",
                    challenge: "What polynomial with integer coefficients has the fewest possible rational root candidates?",
                    answer: "Any monic with prime constant term, e.g., x² - 2 (candidates: ±1, ±2)",
                    insight: "Prime constant term minimizes factors"
                }
            ],
            applications: [
                {
                    scenario: "Box Volume",
                    problem: "Open box made from 12×12 sheet by cutting squares of size x from corners has volume V(x) = x(12-2x)². Find x values giving volume = 128 cubic inches.",
                    equation: "4x³ - 48x² + 144x - 128 = 0, simplified to x³ - 12x² + 36x - 32 = 0",
                    solution: "x = 2 inches",
                    realWorld: "Packaging design optimization"
                },
                {
                    scenario: "Projectile Height",
                    problem: "Object thrown from 6 ft at 64 ft/s: h(t) = -16t² + 64t + 6. When is height = 54 ft?",
                    equation: "-16t² + 64t + 6 = 54 → -16t² + 64t - 48 = 0 → t² - 4t + 3 = 0",
                    solution: "t = 1 sec and t = 3 sec",
                    realWorld: "Physics and sports trajectory analysis"
                },
                {
                    scenario: "Population Model",
                    problem: "Population P(t) = t³ - 9t² + 24t + 100 (thousands). When does population = 100,000?",
                    equation: "t³ - 9t² + 24t = 0",
                    solution: "t = 0, 3, 6 years",
                    realWorld: "Ecological and demographic modeling"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Polynomial: 2x³ - x² - 5x + 6",
                        "Constant term: 6, factors: 1, 2, 3, 6",
                        "Leading coefficient: 2, factors: 1, 2",
                        "Possible roots: 1, 2, 3, 6, 1/2, 2/2, 3/2, 6/2",
                        // ERROR: forgot ± and didn't simplify 2/2, 6/2
                    ],
                    correctAnswer: "±1, ±2, ±3, ±6, ±1/2, ±3/2",
                    errorType: "Forgot negative factors and didn't simplify fractions"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Testing x = 2 in x³ - 6x² + 11x - 6",
                        "Synthetic division:",
                        "2 | 1  -6  11  -6",
                        "  |    2  -8   6",
                        "  | 1  -4   3   0",  // Correct
                        "Quotient: x² - 4x + 3",
                        "Factor: (x - 3)(x - 1)", // Correct
                        "So roots are: 3, 1"  // ERROR: forgot the root they just tested (x = 2)!
                    ],
                    correctAnswer: "Roots are 1, 2, 3",
                    errorType: "Forgot to include the root being tested"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "Found root x = 3 for polynomial",
                        "So one factor is (x + 3)"  // ERROR: should be (x - 3)
                    ],
                    correctAnswer: "Factor is (x - 3)",
                    errorType: "Wrong sign in factor - if root is r, factor is (x - r)"
                }
            ],
            conceptualChallenges: [
                {
                    question: "Can a cubic polynomial with integer coefficients have exactly two rational roots?",
                    answer: "No - cubic has exactly 3 roots. If 2 are rational, the 3rd must also be rational (or complex roots come in pairs, but cubic has odd degree so must have at least one real root).",
                    concept: "Fundamental Theorem of Algebra and complex conjugates"
                },
                {
                    question: "Why does x² - 2 = 0 have no rational roots even though Rational Root Theorem gives candidates ±1, ±2?",
                    answer: "The theorem lists possible rational roots IF any exist. Testing shows none of ±1, ±2 work. Actual roots are ±√2 (irrational).",
                    concept: "Theorem provides candidates, not guarantees"
                },
                {
                    question: "What's the maximum number of possible rational root candidates for a cubic polynomial?",
                    answer: "Infinite if coefficients can be anything. But for practical integer coefficients, depends on factors of a₀ and a₃. Example: if a₀ = 60 (12 factors) and a₃ = 12 (6 factors), that's 12 × 6 = 72 positive candidates, doubled to 144 with negatives.",
                    concept: "Candidate count depends on factorizations"
                }
            ]
        };
    }

    // SOLVER METHODS

    solveRationalRootProblem(config) {
        const { polynomial, coefficients, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseRationalRootProblem(polynomial, coefficients, problemType, context);

            // Solve the problem
            this.currentSolution = this.solveRationalRootProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateRationalRootSteps(this.currentProblem, this.currentSolution);

            // Generate graph data if applicable
            this.generateRationalRootGraphData();

            // Generate workbook
            this.generateRationalRootWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                roots: this.currentSolution?.roots,
                factorization: this.currentSolution?.factorization
            };

        } catch (error) {
            throw new Error(`Failed to solve Rational Root problem: ${error.message}`);
        }
    }

    parseRationalRootProblem(polynomial, coefficients = null, problemType = null, context = {}) {
        let coeffs = coefficients;

        // If polynomial string provided, parse it
        if (polynomial && typeof polynomial === 'string') {
            coeffs = this.parsePolynomialString(polynomial);
        }

        if (!coeffs || coeffs.length === 0) {
            throw new Error("No polynomial coefficients provided");
        }

        // Auto-detect problem type if not specified
        if (!problemType) {
            problemType = this.detectRationalRootType(coeffs);
        }

        const degree = coeffs.length - 1;
        const leadingCoeff = coeffs[0];
        const constantTerm = coeffs[coeffs.length - 1];

        return {
            originalInput: polynomial || this.coefficientsToString(coeffs),
            coefficients: coeffs,
            degree: degree,
            leadingCoefficient: leadingCoeff,
            constantTerm: constantTerm,
            type: problemType,
            isMonic: Math.abs(leadingCoeff - 1) < 1e-10,
            context: { ...context },
            parsedAt: new Date().toISOString()
        };
    }

    parsePolynomialString(polyStr) {
        // Simple parser for polynomial strings like "x^3 - 6x^2 + 11x - 6"
        // Returns array of coefficients from highest to lowest degree
        
        // This is a simplified version - real implementation would be more robust
        const normalized = polyStr.toLowerCase().replace(/\s+/g, '');
        
        // For now, return placeholder - full implementation would parse the string
        // Example: "x^3 - 6x^2 + 11x - 6" -> [1, -6, 11, -6]
        
        return [1, -6, 11, -6]; // Placeholder
    }

    coefficientsToString(coeffs) {
        let terms = [];
        const degree = coeffs.length - 1;
        
        for (let i = 0; i < coeffs.length; i++) {
            const coeff = coeffs[i];
            const pow = degree - i;
            
            if (Math.abs(coeff) < 1e-10) continue; // Skip zero terms
            
            let term = '';
            const absCoeff = Math.abs(coeff);
            const sign = coeff >= 0 ? '+' : '-';
            
            if (i > 0) term += ` ${sign} `;
            else if (coeff < 0) term += '-';
            
            if (pow === 0) {
                term += absCoeff;
            } else if (pow === 1) {
                term += absCoeff === 1 ? 'x' : `${absCoeff}x`;
            } else {
                term += absCoeff === 1 ? `x^${pow}` : `${absCoeff}x^${pow}`;
            }
            
            terms.push(term);
        }
        
        return terms.join('') + ' = 0';
    }

    detectRationalRootType(coeffs) {
        const degree = coeffs.length - 1;
        const leadingCoeff = coeffs[0];
        const isMonic = Math.abs(leadingCoeff - 1) < 1e-10;
        
        if (isMonic) {
            return 'basic_monic';
        } else if (degree === 3) {
            return 'cubic_polynomial';
        } else if (degree === 4) {
            return 'quartic_polynomial';
        } else {
            return 'standard_polynomial';
        }
    }

    solveRationalRootProblem_Internal(problem) {
        const solver = this.rationalRootTypes[problem.type]?.solver;
        if (!solver) {
            return this.solveStandardPolynomial(problem);
        }

        return solver(problem);
    }

    solveMonicPolynomial(problem) {
        const { coefficients, constantTerm, degree } = problem;
        
        // For monic, only test integer factors of constant term
        const factors = this.findFactors(Math.abs(constantTerm));
        const candidates = this.createIntegerCandidates(factors);
        
        const results = this.testCandidates(coefficients, candidates);
        const roots = results.filter(r => r.isRoot).map(r => r.candidate);
        
        return {
            type: 'Monic Polynomial',
            degree: degree,
            leadingCoefficient: 1,
            constantTerm: constantTerm,
            candidates: candidates,
            candidateCount: candidates.length,
            roots: roots,
            rootCount: roots.length,
            factorization: this.createFactorization(coefficients, roots),
            testResults: results,
            category: 'monic'
        };
    }

    solveStandardPolynomial(problem) {
        const { coefficients, leadingCoefficient, constantTerm, degree } = problem;
        
        // Find factors of both constant and leading coefficient
        const pFactors = this.findFactors(Math.abs(constantTerm));
        const qFactors = this.findFactors(Math.abs(leadingCoefficient));
        
        // Form all p/q candidates
        const candidates = this.createRationalCandidates(pFactors, qFactors);
        
        const results = this.testCandidates(coefficients, candidates);
        const roots = results.filter(r => r.isRoot).map(r => r.candidate);
        
        return {
            type: 'Standard Polynomial',
            degree: degree,
            leadingCoefficient: leadingCoefficient,
            constantTerm: constantTerm,
            pFactors: pFactors,
            qFactors: qFactors,
            candidates: candidates,
            candidateCount: candidates.length,
            roots: roots,
            rootCount: roots.length,
            factorization: this.createFactorization(coefficients, roots),
            testResults: results,
            category: 'standard'
        };
    }

    solveCubicPolynomial(problem) {
        // Cubic-specific optimizations
        const result = this.solveStandardPolynomial(problem);
        result.type = 'Cubic Polynomial';
        result.category = 'cubic';
        result.note = 'Cubic polynomials always have at least one real root';
        
        return result;
    }

    solveQuarticPolynomial(problem) {
        const result = this.solveStandardPolynomial(problem);
        result.type = 'Quartic Polynomial';
        result.category = 'quartic';
        
        return result;
    }

    solveIntegerCoefficients(problem) {
        return this.solveStandardPolynomial(problem);
    }

    verifyFactorization(problem) {
        // Verify given roots
        const { coefficients } = problem;
        const givenRoots = problem.context.rootsToVerify || [];
        
        const results = givenRoots.map(root => ({
            root: root,
            isValid: this.verifyRoot(coefficients, root)
        }));
        
        return {
            type: 'Verification',
            verificationResults: results,
            category: 'verification'
        };
    }

    completelyFactorPolynomial(problem) {
        const { coefficients } = problem;
        let remainingCoeffs = [...coefficients];
        let allRoots = [];
        
        // Find rational roots iteratively
        while (remainingCoeffs.length > 2) {
            const tempProblem = {
                coefficients: remainingCoeffs,
                constantTerm: remainingCoeffs[remainingCoeffs.length - 1],
                leadingCoefficient: remainingCoeffs[0],
                degree: remainingCoeffs.length - 1,
                type: 'standard_polynomial'
            };
            
            const result = this.solveStandardPolynomial(tempProblem);
            
            if (result.roots.length === 0) break; // No more rational roots
            
            const root = result.roots[0];
            allRoots.push(root);
            
            // Factor out this root
            remainingCoeffs = this.syntheticDivision(remainingCoeffs, root).quotient;
        }
        
        // Handle remaining quadratic if any
        if (remainingCoeffs.length === 3) {
            const quadRoots = this.solveQuadratic(remainingCoeffs);
            allRoots.push(...quadRoots);
        }
        
        return {
            type: 'Complete Factorization',
            degree: problem.degree,
            roots: allRoots,
            factorization: this.createFactorization(coefficients, allRoots),
            category: 'complete'
        };
    }

    // HELPER METHODS

    findFactors(n) {
        if (n === 0) return [0];
        
        const factors = [];
        const absN = Math.abs(n);
        
        for (let i = 1; i <= Math.sqrt(absN); i++) {
            if (absN % i === 0) {
                factors.push(i);
                if (i !== absN / i) {
                    factors.push(absN / i);
                }
            }
        }
        
        return factors.sort((a, b) => a - b);
    }

    createIntegerCandidates(factors) {
        const candidates = [];
        
        factors.forEach(f => {
            candidates.push(f);
            if (f !== 0) candidates.push(-f);
        });
        
        return [...new Set(candidates)].sort((a, b) => a - b);
    }

    createRationalCandidates(pFactors, qFactors) {
        const candidates = new Set();
        
        pFactors.forEach(p => {
            qFactors.forEach(q => {
                if (q === 0) return;
                
                const ratio = p / q;
                const gcd = this.gcd(p, q);
                const simplified = (p / gcd) / (q / gcd);
                
                candidates.add(simplified);
                candidates.add(-simplified);
            });
        });
        
        return Array.from(candidates).sort((a, b) => a - b);
    }

    gcd(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    testCandidates(coefficients, candidates) {
        return candidates.map(candidate => {
            const result = this.syntheticDivision(coefficients, candidate);
            return {
                candidate: candidate,
                remainder: result.remainder,
                isRoot: Math.abs(result.remainder) < 1e-10,
                quotient: result.quotient
            };
        });
    }

    syntheticDivision(coefficients, root) {
        const quotient = [];
        let carry = 0;
        
        for (let i = 0; i < coefficients.length - 1; i++) {
            const value = coefficients[i] + carry;
            quotient.push(value);
            carry = value * root;
        }
        
        const remainder = coefficients[coefficients.length - 1] + carry;
        
        return {
            quotient: quotient,
            remainder: remainder
        };
    }

    verifyRoot(coefficients, root) {
        const result = this.evaluatePolynomial(coefficients, root);
        return Math.abs(result) < 1e-10;
    }

    evaluatePolynomial(coefficients, x) {
        let result = 0;
        const degree = coefficients.length - 1;
        
        for (let i = 0; i < coefficients.length; i++) {
            const power = degree - i;
            result += coefficients[i] * Math.pow(x, power);
        }
        
        return result;
    }

    createFactorization(coefficients, roots) {
        if (!roots || roots.length === 0) {
            return "No rational roots found";
        }
        
        let factors = roots.map(r => {
            if (r >= 0) {
                return `(x - ${r})`;
            } else {
                return `(x + ${Math.abs(r)})`;
            }
        });
        
        return factors.join('');
    }

    solveQuadratic(coeffs) {
        // coeffs = [a, b, c] for ax² + bx + c = 0
        const [a, b, c] = coeffs;
        
        const discriminant = b * b - 4 * a * c;
        
        if (discriminant < 0) {
            return []; // Complex roots - not handled here
        }
        
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        
        return [root1, root2];
    }

    // STEP GENERATION

    generateRationalRootSteps(problem, solution) {
        let baseSteps = this.generateBaseRationalRootSteps(problem, solution);

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

    generateBaseRationalRootSteps(problem, solution) {
        const steps = [];
        const { coefficients, leadingCoefficient, constantTerm, isMonic, degree } = problem;

        // Step 1: Identify polynomial
        steps.push({
            stepNumber: 1,
            step: 'Identify polynomial',
            description: 'Write polynomial in standard form',
            expression: problem.originalInput,
            details: {
                degree: degree,
                leadingCoefficient: leadingCoefficient,
                constantTerm: constantTerm,
                isMonic: isMonic
            },
            reasoning: 'Standard form allows us to identify the constant term and leading coefficient needed for the Rational Root Theorem',
            goalStatement: 'We need to find all values that make this polynomial equal to zero'
        });

        // Step 2: Identify key coefficients
        steps.push({
            stepNumber: 2,
            step: 'Identify key coefficients',
            description: 'Find constant term (a₀) and leading coefficient (aₙ)',
            details: {
                a0: `Constant term a₀ = ${constantTerm}`,
                an: `Leading coefficient aₙ = ${leadingCoefficient}`
            },
            reasoning: 'These two coefficients determine all possible rational roots',
            algebraicRule: 'Rational Root Theorem: If p/q is a rational root, then p divides a₀ and q divides aₙ'
        });

        // Step 3: Find factors of constant term
        const pFactors = solution.pFactors || this.findFactors(Math.abs(constantTerm));
        steps.push({
            stepNumber: 3,
            step: 'Find factors of constant term',
            description: `List all factors of |${constantTerm}|`,
            result: pFactors,
            withSigns: this.addPlusMinus(pFactors),
            reasoning: 'These are possible numerators (p values) for rational roots p/q',
            method: 'Find all integers that divide evenly into the constant term'
        });

        // Step 4: Find factors of leading coefficient (if not monic)
        if (!isMonic) {
            const qFactors = solution.qFactors || this.findFactors(Math.abs(leadingCoefficient));
            steps.push({
                stepNumber: 4,
                step: 'Find factors of leading coefficient',
                description: `List all factors of |${leadingCoefficient}|`,
                result: qFactors,
                withSigns: this.addPlusMinus(qFactors),
                reasoning: 'These are possible denominators (q values) for rational roots p/q',
                method: 'Find all integers that divide evenly into the leading coefficient'
            });
        } else {
            steps.push({
                stepNumber: 4,
                step: 'Note polynomial is monic',
                description: 'Leading coefficient is 1',
                simplification: 'Only need to test integer values (q = 1)',
                reasoning: 'For monic polynomials, all possible rational roots are integers',
                benefit: 'Significantly reduces the number of candidates to test'
            });
        }

        // Step 5: Form candidates
        steps.push({
            stepNumber: 5,
            step: 'Form possible rational roots',
            description: isMonic ? 
                'List all ±p values (since q = 1)' :
                'Form all ±p/q ratios and simplify',
            candidates: solution.candidates,
            candidateCount: solution.candidateCount,
            reasoning: 'These are ALL possible rational roots according to the Rational Root Theorem',
            important: 'Remember to include both positive and negative values',
            note: isMonic ? 
                'For monic polynomials, candidates are just ±(factors of constant term)' :
                'Form all combinations, then remove duplicates after simplifying'
        });

        // Step 6: Test candidates
        steps.push({
            stepNumber: 6,
            step: 'Test candidates',
            description: 'Use synthetic division or substitution to test each candidate',
            method: 'Synthetic division preferred - also gives quotient for factoring',
            testResults: solution.testResults,
            rootsFound: solution.roots,
            reasoning: 'Testing reveals which candidates are actual roots',
            strategy: 'Test integer candidates first (easier and more common)'
        });

        // Step 7-N: Show detailed testing (sample)
        if (solution.roots && solution.roots.length > 0) {
            const firstRoot = solution.roots[0];
            const testResult = solution.testResults.find(r => r.candidate === firstRoot);
            
            if (testResult) {
                steps.push({
                    stepNumber: 7,
                    step: `Test candidate x = ${firstRoot}`,
                    description: `Synthetic division by (x - ${firstRoot})`,
                    syntheticDivision: this.formatSyntheticDivision(coefficients, firstRoot),
                    quotient: testResult.quotient,
                    remainder: testResult.remainder,
                    conclusion: `x = ${firstRoot} IS a root (remainder = 0)`,
                    reasoning: 'Remainder of zero confirms this candidate is an actual root',
                    nextStep: 'Factor out this root and continue with quotient polynomial'
                });
            }
        }

        // Final step: State all roots and factorization
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Complete solution',
            description: 'List all rational roots found',
            roots: solution.roots,
            rootCount: solution.rootCount,
            factorization: solution.factorization,
            finalAnswer: true,
            verification: 'Each root can be verified by substitution into original polynomial'
        });

        return steps;
    }

    addPlusMinus(factors) {
        const result = [];
        factors.forEach(f => {
            result.push(`+${f}`, `-${f}`);
        });
        return result;
    }

    formatSyntheticDivision(coefficients, root) {
        const result = this.syntheticDivision(coefficients, root);
        
        return {
            setup: {
                root: root,
                coefficients: coefficients
            },
            process: 'Bring down first coefficient, multiply by root, add to next, repeat',
            result: {
                quotient: result.quotient,
                remainder: result.remainder
            }
        };
    }

    // Enhanced explanation methods (similar to linear workbook)
    
    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanationRRT(step, problem),
                procedural: this.getProceduralExplanationRRT(step),
                visual: this.getVisualExplanationRRT(step, problem),
                algebraic: this.getAlgebraicExplanationRRT(step),
                computational: this.getComputationalExplanationRRT(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisites(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyRRT(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPromptsRRT(step);
        }

        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestionRRT(step);
        }

        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findRealWorldConnectionRRT(step, problem);
        }

        return enhanced;
    }

    getConceptualExplanationRRT(step, problem) {
        const explanations = {
            'Identify polynomial': 'Understanding the structure of the polynomial helps us apply the Rational Root Theorem correctly. The theorem connects specific coefficients (first and last) to possible roots.',
            'Identify key coefficients': 'The constant term and leading coefficient are special - they determine ALL possible rational roots. This is the power of the Rational Root Theorem.',
            'Find factors of constant term': 'Every rational root must have a numerator that divides the constant term. Finding all factors ensures we don\'t miss any possibilities.',
            'Find factors of leading coefficient': 'Every rational root must have a denominator that divides the leading coefficient. This limits the denominators we need to consider.',
            'Form possible rational roots': 'By combining all possible numerators with all possible denominators, we create a complete list of candidates. The theorem guarantees that if a rational root exists, it\'s on this list.',
            'Test candidates': 'The theorem tells us what roots COULD be, not what they ARE. Testing reveals which candidates are actual roots.',
            'Complete solution': 'Found roots can be verified and used to factor the polynomial completely.'
        };

        return explanations[step.step] || 'This step brings us closer to finding all rational roots.';
    }

    getProceduralExplanationRRT(step) {
        const procedures = {
            'Find factors of constant term': '1. Start with 1\n2. Check each integer up to √|constant|\n3. If it divides evenly, it\'s a factor (and so is the quotient)\n4. Include both positive and negative',
            'Form possible rational roots': '1. Create fraction for each p (from constant factors) over each q (from leading coeff factors)\n2. Simplify each fraction\n3. Remove duplicates\n4. Include ± for each',
            'Test candidates': '1. Choose a candidate\n2. Set up synthetic division\n3. Perform the division\n4. If remainder = 0, it\'s a root; if not, try next candidate'
        };

        return procedures[step.step] || 'Follow the systematic procedure for this step.';
    }

    getVisualExplanationRRT(step, problem) {
        const visuals = {
            'Find factors of constant term': 'Picture a factor tree or make pairs: 1 and the number, 2 and half the number, etc.',
            'Form possible rational roots': 'Imagine a table with 'Form possible rational roots': 'Imagine a table with p values as rows and q values as columns. Each cell is a p/q candidate.',
            'Test candidates': 'Visualize testing as trying keys on a lock - some fit (remainder 0), some don\'t',
            'Synthetic division': 'Picture an assembly line: bring down, multiply, add, repeat until done'
        };

        return visuals[step.step] || 'Visualize this step as part of the systematic search for roots.';
    }

    getAlgebraicExplanationRRT(step) {
        const algebraic = {
            'Identify key coefficients': 'For polynomial aₙx^n + ... + a₁x + a₀, we need aₙ and a₀',
            'Rational Root Theorem': 'If p/q is a rational root (in lowest terms), then p|a₀ and q|aₙ',
            'Factor Theorem': 'If r is a root, then (x - r) is a factor',
            'Remainder Theorem': 'P(r) = remainder when P(x) is divided by (x - r)'
        };

        return algebraic[step.step] || 'Apply algebraic principles systematically.';
    }

    getComputationalExplanationRRT(step) {
        const computational = {
            'Find factors': 'Algorithm: for i = 1 to √n, if n mod i = 0, then i and n/i are factors',
            'Simplify fractions': 'Find GCD(p,q), then reduce: p/q → (p÷GCD)/(q÷GCD)',
            'Synthetic division': 'Iterative process: result[i] = coeff[i] + carry; carry = result[i] × root',
            'Test candidates': 'Iterate through candidate list, applying test to each until all roots found or list exhausted'
        };

        return computational[step.step] || 'Execute the computational steps efficiently.';
    }

    identifyKeyVocabularyRRT(step) {
        const vocabulary = {
            'Identify polynomial': ['polynomial', 'degree', 'coefficient', 'standard form', 'constant term', 'leading coefficient'],
            'Rational Root Theorem': ['rational number', 'numerator', 'denominator', 'divides', 'factor'],
            'Find factors': ['factor', 'divisor', 'divisibility', 'factor pairs'],
            'Form candidates': ['candidate', 'ratio', 'simplify', 'lowest terms', 'GCD'],
            'Test candidates': ['synthetic division', 'remainder', 'quotient', 'root', 'zero'],
            'Complete solution': ['factorization', 'irreducible', 'multiplicity']
        };

        return vocabulary[step.step] || ['polynomial', 'root', 'factor'];
    }

    generateThinkingPromptsRRT(step) {
        const prompts = {
            'Find factors of constant term': {
                before: 'What number am I finding factors of? Should I include negative factors?',
                during: 'Am I checking all numbers up to the square root? Am I recording both the divisor and quotient?',
                after: 'Did I include ±1? Did I include the number itself? Did I get all factor pairs?'
            },
            'Form possible rational roots': {
                before: 'Do I have all p values and all q values? Do I need to simplify?',
                during: 'Is this fraction in lowest terms? Have I already listed this value?',
                after: 'Did I include both positive and negative for each? Are there any duplicates?'
            },
            'Test candidates': {
                before: 'Which candidate should I test first? Do I have the coefficients in order?',
                during: 'Am I multiplying and adding correctly? Is my arithmetic accurate?',
                after: 'Is the remainder zero? If so, what do I do next? If not, move to next candidate?'
            }
        };

        return prompts[step.step] || {
            before: 'What is the goal of this step?',
            during: 'Am I following the procedure correctly?',
            after: 'Does my result make sense?'
        };
    }

    generateSelfCheckQuestionRRT(step) {
        const questions = {
            'Identify polynomial': 'Have I written the polynomial in standard form with decreasing powers?',
            'Identify key coefficients': 'Did I correctly identify the first and last coefficients?',
            'Find factors of constant term': 'Did I find ALL factors, including ±1 and the number itself?',
            'Find factors of leading coefficient': 'Did I include all factors of the leading coefficient?',
            'Form possible rational roots': 'Are all my fractions simplified? Did I include ± for each?',
            'Test candidates': 'Did the remainder equal zero? Did I perform synthetic division correctly?',
            'Complete solution': 'Have I found all roots? Does the number of roots match the degree?'
        };

        return questions[step.step] || 'Is this step correct and complete?';
    }

    findRealWorldConnectionRRT(step, problem) {
        const connections = {
            'systematic_search': 'Like checking all possible combinations on a lock - the Rational Root Theorem tells us which combinations to try',
            'optimization': 'Engineers use these techniques to find optimal dimensions that satisfy volume or cost constraints',
            'problem_solving': 'The systematic approach (list all possibilities, test each) is a general problem-solving strategy',
            'factoring': 'Breaking complex problems into simpler pieces is fundamental to engineering, computer science, and design'
        };

        if (step.step.includes('factor')) {
            return connections.factoring;
        } else if (step.step.includes('test')) {
            return connections.systematic_search;
        }

        return 'Polynomial equations model many real-world situations from physics to finance to engineering.';
    }

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateELI5ExplanationRRT(step, problem),
                analogy: this.findRelevantAnalogyRRT(step, problem),
                simpleLanguage: this.convertToSimpleLanguageRRT(step.description),
                visualization: this.suggestVisualizationRRT(step)
            }
        }));
    }

    generateELI5ExplanationRRT(step, problem) {
        const ELI5 = {
            'Identify polynomial': 'We have a math puzzle! It\'s like a recipe with different ingredients (the terms with x). We need to figure out what x should be to make the whole thing equal zero.',
            'Identify key coefficients': 'We\'re going to look at two special numbers: the very first number (with the biggest power of x) and the very last number (with no x at all). These two numbers are the magic keys!',
            'Find factors of constant term': 'Imagine the last number is like a LEGO tower. We need to find all the different ways we could build that tower using building blocks. Each way of building it is called a "factor".',
            'Find factors of leading coefficient': 'Now we do the same thing with the first number - find all the ways to build it with blocks!',
            'Form possible rational roots': 'Here\'s the cool part: we mix and match blocks from the two towers! Every combination we make could be an answer to our puzzle. It\'s like making all possible sandwiches from different breads and fillings.',
            'Test candidates': 'Now we have our list of possible answers. We need to try each one, like trying different keys to see which ones unlock the door. We use a special method called synthetic division - it\'s like a fun math game with simple rules.',
            'Complete solution': 'We found all the keys that work! These are our roots. They\'re the special numbers that make the polynomial equal to zero, just like the right key opens a lock.'
        };

        return ELI5[step.step] || 'We\'re taking another step to solve our polynomial puzzle!';
    }

    findRelevantAnalogyRRT(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (step.step.toLowerCase().includes(key.split('_')[0]) || 
                (analogy.suitableFor && analogy.suitableFor.includes('all types'))) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return 'Think of this like solving a mystery - each clue gets us closer to the answer!';
    }

    convertToSimpleLanguageRRT(description) {
        if (!description) return '';

        const simplifications = {
            'polynomial': 'math expression with x',
            'coefficient': 'the number next to x',
            'constant term': 'the number with no x',
            'leading coefficient': 'the first number',
            'rational root': 'a fraction or whole number that works',
            'factor': 'a number that divides evenly',
            'candidate': 'possible answer',
            'synthetic division': 'special testing method',
            'remainder': 'what\'s left over',
            'quotient': 'the result after dividing',
            'degree': 'the highest power of x',
            'simplify': 'make easier',
            'GCD': 'greatest common factor',
            'numerator': 'top number of fraction',
            'denominator': 'bottom number of fraction'
        };

        let simple = description;
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp('\\b' + term + '\\b', 'gi');
            simple = simple.replace(regex, replacement);
        }

        return simple;
    }

    suggestVisualizationRRT(step) {
        const visualizations = {
            'Identify polynomial': 'Write out the polynomial as a math sentence, underlining the first and last numbers',
            'Find factors of constant term': 'Draw pairs of numbers that multiply to give the constant term, like dominoes',
            'Form possible rational roots': 'Make a table showing all p/q combinations, then cross out duplicates',
            'Test candidates': 'Draw the synthetic division layout like a game board, following the rules step by step',
            'Complete solution': 'Draw a number line and mark all the roots you found'
        };

        return visualizations[step.step] || 'Draw a picture to help you understand this step';
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generateStepBridgeRRT(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgressionRRT(steps[i], steps[i + 1]),
                    strategicThinking: this.explainStepStrategyRRT(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateStepBridgeRRT(currentStep, nextStep) {
        return {
            currentState: `We now have: ${this.summarizeStepResult(currentStep)}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary because: ${this.explainStepNecessityRRT(currentStep, nextStep)}`,
            howItHelps: `This will help by: ${this.explainStepBenefitRRT(nextStep)}`
        };
    }

    summarizeStepResult(step) {
        if (step.result) return `Found ${step.result}`;
        if (step.candidates) return `${step.candidateCount} possible candidates`;
        if (step.roots) return `${step.roots.length} roots found`;
        return 'completed this step';
    }

    explainStepProgressionRRT(currentStep, nextStep) {
        return `Having completed "${currentStep.step}", we now proceed to "${nextStep.step}" to continue finding all rational roots`;
    }

    explainStepStrategyRRT(nextStep) {
        const strategies = {
            'Find factors': 'We systematically find all divisors to ensure we don\'t miss any possibilities',
            'Form possible rational roots': 'We create all combinations of p/q to build our complete candidate list',
            'Test candidates': 'We check each candidate methodically to identify actual roots',
            'Complete solution': 'We compile all findings into the final answer'
        };

        for (const [key, strategy] of Object.entries(strategies)) {
            if (nextStep.step.includes(key)) return strategy;
        }

        return `The strategy is to ${nextStep.description?.toLowerCase()}`;
    }

    explainStepNecessityRRT(currentStep, nextStep) {
        return 'we need to continue building our solution systematically';
    }

    explainStepBenefitRRT(nextStep) {
        return 'moving us closer to finding all rational roots of the polynomial';
    }

    addErrorPrevention(step, problemType) {
        const category = this.rationalRootTypes[problemType]?.category || 'standard';
        const stepKey = this.findMistakeCategory(step.step);
        const mistakes = this.commonMistakes[stepKey]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsRRT(step, problemType),
                checkPoints: this.generateCheckPointsRRT(step),
                warningFlags: this.identifyWarningFlagsRRT(step, problemType)
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestionRRT(step),
                expectedResult: this.describeExpectedResultRRT(step),
                troubleshooting: this.generateTroubleshootingTipsRRT(step)
            }
        };
    }

    findMistakeCategory(stepName) {
        if (stepName.includes('factor')) return 'factor_finding';
        if (stepName.includes('Form')) return 'candidate_formation';
        if (stepName.includes('Test')) return 'testing';
        if (stepName.includes('Factor out')) return 'factoring';
        if (stepName.includes('solution')) return 'verification';
        return 'factor_finding';
    }

    generatePreventionTipsRRT(step, problemType) {
        const tips = {
            'Find factors': [
                'Check all integers from 1 to √n systematically',
                'Don\'t forget to include both positive and negative factors',
                'Include 1 and the number itself',
                'Record factor pairs to avoid missing any'
            ],
            'Form possible rational roots': [
                'Always simplify fractions to lowest terms',
                'Check for duplicates after simplifying',
                'Include ± for every candidate',
                'Verify that GCD(p,q) = 1 for each simplified candidate'
            ],
            'Test candidates': [
                'Include 0 for missing degree terms in synthetic division',
                'Double-check arithmetic at each step',
                'Test integers before fractions (they\'re easier)',
                'Keep organized record of which candidates tested'
            ]
        };

        for (const [key, tipList] of Object.entries(tips)) {
            if (step.step.includes(key)) return tipList;
        }

        return ['Work carefully and systematically', 'Check your arithmetic'];
    }

    generateCheckPointsRRT(step) {
        return [
            'Did I complete this step correctly?',
            'Did I include all necessary values?',
            'Are there any duplicates or omissions?',
            'Does this result make sense for this step?'
        ];
    }

    identifyWarningFlagsRRT(step, problemType) {
        const warnings = {
            'Find factors': ['Missing ±1', 'Forgetting negative factors', 'Missing factor pairs'],
            'Form candidates': ['Not simplifying fractions', 'Duplicate values', 'Missing ± signs'],
            'Test candidates': ['Arithmetic errors', 'Missing zero coefficients', 'Wrong sign for candidate']
        };

        for (const [key, flagList] of Object.entries(warnings)) {
            if (step.step.includes(key)) return flagList;
        }

        return [];
    }

    describeExpectedResultRRT(step) {
        const expectations = {
            'Identify polynomial': 'Clear identification of degree, leading coefficient, and constant term',
            'Find factors': 'Complete list of factors including ±1 and the number itself',
            'Form possible rational roots': 'All p/q combinations simplified with no duplicates',
            'Test candidates': 'Clear indication of which candidates are roots (remainder = 0)',
            'Complete solution': 'All rational roots listed and verified'
        };

        for (const [key, expectation] of Object.entries(expectations)) {
            if (step.step.includes(key)) return expectation;
        }

        return 'Progress toward finding all rational roots';
    }

    generateTroubleshootingTipsRRT(step) {
        return [
            'If stuck, review the Rational Root Theorem statement',
            'Check your arithmetic carefully',
            'Verify you\'ve included all required values',
            'Make sure you\'ve simplified where needed',
            'Try a worked example to see the pattern'
        ];
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsRRT(step, problem),
                subSteps: this.breakIntoSubStepsRRT(step),
                hints: this.generateProgressiveHintsRRT(step, problem),
                practiceVariation: this.generatePracticeVariationRRT(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcessRRT(step),
                decisionPoints: this.identifyDecisionPointsRRT(step),
                alternativeApproaches: this.suggestAlternativeMethodsRRT(step, problem)
            }
        }));
    }

    generateGuidingQuestionsRRT(step, problem) {
        const questions = {
            'Identify polynomial': [
                'What is the degree of this polynomial?',
                'Which term has the highest power?',
                'Which term has no variable?'
            ],
            'Find factors': [
                'What number am I factoring?',
                'What\'s the largest factor I need to check?',
                'Have I checked all integers from 1 to √n?'
            ],
            'Form possible rational roots': [
                'What are my p values (numerators)?',
                'What are my q values (denominators)?',
                'How do I combine them?',
                'Are my fractions simplified?'
            ],
            'Test candidates': [
                'Which candidate should I test first?',
                'What method am I using to test?',
                'What does a remainder of 0 mean?',
                'What should I do if I find a root?'
            ]
        };

        for (const [key, questionList] of Object.entries(questions)) {
            if (step.step.includes(key)) return questionList;
        }

        return ['What is the goal?', 'How do I proceed?', 'How do I know I\'m done?'];
    }

    generateProgressiveHintsRRT(step, problem) {
        const category = this.rationalRootTypes[problem.type]?.category || 'standard';
        const hintSet = this.hints[category] || this.hints.standard;

        return {
            level1: hintSet.level1 || 'What is this step asking you to do?',
            level2: hintSet.level2 || 'Think about the Rational Root Theorem.',
            level3: hintSet.level3 || 'Apply the systematic procedure.',
            level4: hintSet.level4 || 'Follow the specific steps for this type of problem.'
        };
    }

    breakIntoSubStepsRRT(step) {
        const subSteps = {
            'Find factors of constant term': [
                'Identify the constant term',
                'Find √(constant term)',
                'Check each integer from 1 to √n for divisibility',
                'Record each factor and its pair',
                'Include negative versions of all factors'
            ],
            'Form possible rational roots': [
                'List all p values (factors of constant)',
                'List all q values (factors of leading coeff)',
                'Create each p/q combination',
                'Simplify each fraction to lowest terms',
                'Remove duplicates',
                'Add ± to each unique value'
            ],
            'Test candidates': [
                'Choose a candidate from the list',
                'Set up synthetic division',
                'Perform the division step by step',
                'Check if remainder is 0',
                'If yes, record as root; if no, try next candidate'
            ]
        };

        for (const [key, subStepList] of Object.entries(subSteps)) {
            if (step.step.includes(key)) return subStepList;
        }

        return ['Understand the goal', 'Apply the method', 'Verify the result'];
    }

    generatePracticeVariationRRT(step, problem) {
        return {
            similarProblem: 'Try a similar polynomial with different coefficients',
            practiceHint: 'Start with monic polynomials (leading coefficient = 1) for simpler practice',
            extension: 'Once comfortable, try non-monic polynomials with larger leading coefficients'
        };
    }

    explainThinkingProcessRRT(step) {
        return {
            observe: 'What information do I have?',
            goal: 'What am I trying to find?',
            strategy: 'What method should I use?',
            execute: 'How do I carry out this method?',
            verify: 'How can I check my answer?'
        };
    }

    identifyDecisionPointsRRT(step) {
        return [
            'Which method to use for testing (synthetic division vs substitution)?',
            'Which candidates to test first (integers vs fractions)?',
            'When to stop testing (found all roots vs exhausted candidates)?',
            'How to factor after finding a root?'
        ];
    }

    suggestAlternativeMethodsRRT(step, problem) {
        const alternatives = {
            'Test candidates': [
                'Direct substitution into polynomial (simpler but doesn\'t give quotient)',
                'Synthetic division (preferred - gives quotient for factoring)',
                'Graphing calculator to approximate first, then verify exact values'
            ],
            'Find factors': [
                'Factor pairs method (check 1 to √n)',
                'Prime factorization method',
                'Divisibility rules for quick checks'
            ]
        };

        for (const [key, methodList] of Object.entries(alternatives)) {
            if (step.step.includes(key)) return methodList;
        }

        return ['The standard method is appropriate for this step'];
    }

    // GRAPH GENERATION

    generateRationalRootGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { roots } = this.currentSolution;
        const { coefficients } = this.currentProblem;

        if (roots && roots.length > 0) {
            this.graphData = this.generatePolynomialGraph(coefficients, roots);
        }
    }

    generatePolynomialGraph(coefficients, roots) {
        // Generate points for polynomial curve
        const points = [];
        const xMin = Math.min(...roots) - 2;
        const xMax = Math.max(...roots) + 2;
        const step = (xMax - xMin) / 100;

        for (let x = xMin; x <= xMax; x += step) {
            const y = this.evaluatePolynomial(coefficients, x);
            points.push({ x, y });
        }

        return {
            type: 'polynomial',
            degree: coefficients.length - 1,
            roots: roots,
            points: points,
            xIntercepts: roots.map(r => ({ x: r, y: 0 })),
            description: `Graph of polynomial showing roots at x = ${roots.join(', ')}`,
            visualization: 'Polynomial curve crossing x-axis at each root'
        };
    }

    // WORKBOOK GENERATION

    generateRationalRootWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSectionRRT(),
            this.createPrerequisiteSectionRRT(),
            this.createTheoremStatementSection(),
            this.createEnhancedStepsSectionRRT(),
            this.createCandidateTableSection(),
            this.createTestingResultsSection(),
            this.createSolutionSectionRRT(),
            this.createFactorizationSection(),
            this.createVerificationSectionRRT(),
            this.createRationalRootLessonSection(),
            this.createRealWorldApplicationSectionRRT(),
            this.createPedagogicalNotesSectionRRT(),
            this.createAlternativeMethodsSectionRRT(),
            this.createPracticeProblemsSectionRRT()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createProblemSectionRRT() {
        if (!this.currentProblem) return null;

        const problemData = [
            ['Problem Type', this.rationalRootTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.rationalRootTypes[this.currentProblem.type]?.category || 'polynomial'],
            ['Polynomial', this.currentProblem.originalInput],
            ['', ''],
            ['Key Information', ''],
            ['Degree', this.currentProblem.degree],
            ['Leading Coefficient (aₙ)', this.currentProblem.leadingCoefficient],
            ['Constant Term (a₀)', this.currentProblem.constantTerm],
            ['Is Monic?', this.currentProblem.isMonic ? 'Yes (leading coeff = 1)' : 'No']
        ];

        if (this.currentProblem.coefficients) {
            problemData.push(['', '']);
            problemData.push(['All Coefficients', '']);
            this.currentProblem.coefficients.forEach((coeff, index) => {
                const power = this.currentProblem.degree - index;
                problemData.push([`x^${power} coefficient`, coeff]);
            });
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSectionRRT() {
        if (!this.prerequisiteChecks) return null;

        const category = this.rationalRootTypes[this.currentProblem.type]?.category;
        const prereqs = this.prerequisites[category] || this.prerequisites.standard;

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

    createTheoremStatementSection() {
        return {
            title: 'Rational Root Theorem',
            type: 'theorem',
            data: [
                ['Theorem Statement', 'If p/q is a rational root of polynomial aₙx^n + ... + a₁x + a₀ = 0 (with integer coefficients), where p/q is in lowest terms, then:'],
                ['', '• p divides the constant term a₀'],
                ['', '• q divides the leading coefficient aₙ'],
                ['', ''],
                ['What It Means', 'The theorem provides a finite list of ALL possible rational roots'],
                ['Important Note', 'The theorem does NOT guarantee roots exist, only what they would be if they do exist'],
                ['', ''],
                ['How to Use', ''],
                ['Step 1', 'Find all factors of |a₀| → these are possible values of p'],
                ['Step 2', 'Find all factors of |aₙ| → these are possible values of q'],
                ['Step 3', 'Form all ratios ±p/q and simplify'],
                ['Step 4', 'Test each candidate to find actual roots'],
                ['', ''],
                ['Special Case', 'If polynomial is monic (aₙ = 1), then all possible rational roots are integers: ±(factors of a₀)']
            ]
        };
    }

    createEnhancedStepsSectionRRT() {
        if (!this.solutionSteps || this.solutionSteps.length === 0) return null;

        const stepsData = [];

        this.solutionSteps.forEach((step, index) => {
            // Skip bridge steps in basic display
            if (step.stepType === 'bridge' && this.explanationLevel === 'basic') {
                return;
            }

            // Main step
            if (step.stepType === 'bridge') {
                stepsData.push(['→ Bridge', step.title]);
                stepsData.push(['Connection', step.explanation.currentState]);
                stepsData.push(['Next Goal', step.explanation.nextGoal]);
                stepsData.push(['', '']);
                return;
            }

            stepsData.push([`Step ${step.stepNumber}`, step.description]);

            if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            if (step.details) {
                Object.entries(step.details).forEach(([key, value]) => {
                    stepsData.push([key, typeof value === 'object' ? JSON.stringify(value) : value]);
                });
            }

            if (step.result) {
                stepsData.push(['Result', Array.isArray(step.result) ? step.result.join(', ') : step.result]);
            }

            if (step.candidates) {
                stepsData.push(['Candidates', `${step.candidateCount} total: ${step.candidates.slice(0, 10).join(', ')}${step.candidates.length > 10 ? '...' : ''}`]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            // ELI5 explanations
            if (step.ELI5 && this.explanationLevel === 'ELI5') {
                stepsData.push(['ELI5 Explanation', step.ELI5.explanation]);
                if (step.ELI5.analogy) {
                    stepsData.push(['Analogy', step.ELI5.analogy]);
                }
            }

            // Enhanced explanations
            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
                stepsData.push(['Procedural', step.explanations.procedural]);
            }

            // Error prevention
            if (step.errorPrevention && this.includeErrorPrevention) {
                const mistakes = step.errorPrevention.commonMistakes;
                if (mistakes && mistakes.length > 0) {
                    stepsData.push(['Common Mistakes', mistakes.join('; ')]);
                }
            }

            // Scaffolding
            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                const questions = step.scaffolding.guidingQuestions;
                if (questions && questions.length > 0) {
                    stepsData.push(['Guiding Questions', questions.join(' | ')]);
                }
            }

            stepsData.push(['', '']); // Spacing
        });

        return {
            title: `Enhanced Step-by-Step Solution (${this.explanationLevel} level)`,
            type: 'steps',
            data: stepsData
        };
    }

    createCandidateTableSection() {
        if (!this.currentSolution || !this.currentSolution.candidates) return null;

        const candidateData = [
            ['Total Candidates', this.currentSolution.candidateCount],
            ['', ''],
            ['Complete List of Possible Rational Roots', '']
        ];

        // Group candidates for better display
        const candidates = this.currentSolution.candidates;
        const integers = candidates.filter(c => Number.isInteger(c));
        const fractions = candidates.filter(c => !Number.isInteger(c));

        if (integers.length > 0) {
            candidateData.push(['Integer Candidates', integers.join(', ')]);
        }

        if (fractions.length > 0) {
            candidateData.push(['Fractional Candidates', fractions.map(f => this.formatFraction(f)).join(', ')]);
        }

        candidateData.push(['', '']);
        candidateData.push(['Testing Strategy', 'Test integers first (easier), then fractions if needed']);

        return {
            title: 'Candidate List',
            type: 'candidates',
            data: candidateData
        };
    }

    formatFraction(decimal) {
        // Simple fraction formatter
        const tolerance = 1.0E-6;
        let h1 = 1, h2 = 0, k1 = 0, k2 = 1;
        let b = decimal;
        
        do {
            let a = Math.floor(b);
            let aux = h1;
            h1 = a * h1 + h2;
            h2 = aux;
            aux = k1;
            k1 = a * k1 + k2;
            k2 = aux;
            b = 1 / (b - a);
        } while (Math.abs(decimal - h1 / k1) > decimal * tolerance);

        return `${h1}/${k1}`;
    }

    createTestingResultsSection() {
        if (!this.currentSolution || !this.currentSolution.testResults) return null;

        const resultsData = [
            ['Testing Results Summary', ''],
            ['Total Candidates Tested', this.currentSolution.testResults.length],
            ['Roots Found', this.currentSolution.rootCount],
            ['Non-roots', this.currentSolution.testResults.length - this.currentSolution.rootCount],
            ['', ''],
            ['Detailed Results', '']
        ];

        // Show results for each candidate (limit to reasonable number)
        const resultsToShow = this.currentSolution.testResults.slice(0, 15);
        
        resultsToShow.forEach(result => {
            const status = result.isRoot ? '✓ ROOT' : '✗ Not a root';
            resultsData.push([`x = ${result.candidate}`, `${status} (remainder: ${result.remainder.toFixed(6)})`]);
        });

        if (this.currentSolution.testResults.length > 15) {
            resultsData.push(['...', `(${this.currentSolution.testResults.length - 15} more candidates tested)`]);
        }

        return {
            title: 'Testing Results',
            type: 'testing',
            data: resultsData
        };
    }

    createSolutionSectionRRT() {
        if (!this.currentSolution) return null;

        const solutionData = [
            ['Solution Type', this.currentSolution.type],
            ['', '']
        ];

        if (this.currentSolution.roots && this.currentSolution.roots.length > 0) {
            solutionData.push(['Rational Roots Found', this.currentSolution.rootCount]);
            solutionData.push(['', '']);
            
            this.currentSolution.roots.forEach((root, index) => {
                solutionData.push([`Root ${index + 1}`, `x = ${root}`]);
            });
        } else {
            solutionData.push(['Result', 'No rational roots found']);
            solutionData.push(['Note', 'Polynomial may have irrational or complex roots']);
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createFactorizationSection() {
        if (!this.currentSolution || !this.currentSolution.factorization) return null;

        return {
            title: 'Factorization',
            type: 'factorization',
            data: [
                ['Complete Factorization', this.currentSolution.factorization],
                ['Number of Factors', this.currentSolution.rootCount],
                ['', ''],
                ['Verification', 'Each factor (x - r) corresponds to a root r'],
                ['Note', 'Multiply out the factors to verify you get the original polynomial']
            ]
        };
    }

    createVerificationSectionRRT() {
        if (!this.currentSolution || !this.currentSolution.roots) return null;

        const verificationData = [
            ['Verification Method', 'Direct Substitution'],
            ['', '']
        ];

        this.currentSolution.roots.forEach((root, index) => {
            const value = this.evaluatePolynomial(this.currentProblem.coefficients, root);
            const isValid = Math.abs(value) < 1e-10;
            
            verificationData.push([`Root ${index + 1}: x = ${root}`, '']);
            verificationData.push(['Substitution', `P(${root}) = ${value.toExponential(2)}`]);
            verificationData.push(['Valid?', isValid ? 'Yes ✓' : 'No ✗']);
            verificationData.push(['', '']);
        });

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createRationalRootLessonSection() {
        const lessonData = [
            ['The Rational Root Theorem', ''],
            ['', 'A powerful tool for finding rational zeros of polynomials with integer coefficients'],
            ['', ''],
            ['Key Ideas', ''],
            ['', '1. The theorem limits our search to a finite list of candidates'],
            ['', '2. Not all candidates will be roots - we must test each one'],
            ['', '3. The theorem only finds RATIONAL roots - irrational and complex roots require other methods'],
            ['', ''],
            ['When to Use', ''],
            ['', '• Finding exact rational roots of polynomials'],
            ['', '• Factoring polynomials completely'],
            ['', '• Solving polynomial equations'],
            ['', '• Initial step in finding all roots (rational + irrational + complex)'],
            ['', ''],
            ['Limitations', ''],
            ['', '• Only works for polynomials with integer coefficients'],
            ['', '• Only finds rational roots (not irrational like √2 or complex like 2+3i)'],
            ['', '• Can produce many candidates to test for polynomials with large coefficients'],
            ['', ''],
            ['Optimization Strategies', ''],
            ['', '• Test integers before fractions'],
            ['', '• Use Descartes\' Rule of Signs to predict number of positive/negative roots'],
            ['', '• Establish upper and lower bounds to eliminate candidates'],
            ['', '• For monic polynomials, only test integers']
        ];

        return {
            title: 'Lesson: Rational Root Theorem',
            type: 'lesson',
            data: lessonData
        };
    }

    createRealWorldApplicationSectionRRT() {
        if (!this.includeRealWorldApplications) return null;

        const applications = Object.values(this.realWorldProblems).slice(0, 3);

        const appData = [
            ['Real-World Applications of Polynomial Root Finding', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Equation Type', app.equation]);
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

    createPedagogicalNotesSectionRRT() {
        if (!this.includePedagogicalNotes) return null;

        const notes = this.generatePedagogicalNotes(this.currentProblem.type);

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

    generatePedagogicalNotes(problemType) {
        return {
            objectives: [
                'Apply the Rational Root Theorem to find possible rational roots',
                'Test candidates using synthetic division',
                'Factor polynomials completely using found roots',
                'Verify solutions through substitution'
            ],
            keyConcepts: [
                'Relationship between factors and divisibility',
                'Systematic candidate generation',
                'Synthetic division as testing method',
                'Progressive factorization',
                'Distinction between possible and actual roots'
            ],
            prerequisites: [
                'Finding factors of integers',
                'Simplifying fractions',
                'Polynomial evaluation',
                'Synthetic division',
                'Basic polynomial concepts'
            ],
            commonDifficulties: [
                'Forgetting to include negative factors',
                'Not simplifying candidate fractions',
                'Arithmetic errors in synthetic division',
                'Stopping after finding first root',
                'Confusing factor (x - r) with root r'
            ],
            teachingStrategies: [
                'Use factor tree analogy for finding factors',
                'Emphasize systematic listing to avoid omissions',
                'Practice synthetic division extensively',
                'Show connection to Factor Theorem',
                'Use real polynomial examples throughout'
            ],
            extensions: [
                'Descartes\' Rule of Signs',
                'Upper and lower bounds',
                'Finding irrational roots after exhausting rational candidates',
                'Complete factorization including complex roots',
                'Applications to graphing and modeling'
            ],
            assessment: [
                'Can student list all factors correctly?',
                'Does student form and simplify all p/q candidates?',
                'Can student perform synthetic division accurately?',
                'Does student continue factoring after finding first root?',
                'Can student verify roots and factorization?'
            ]
        };
    }

    createAlternativeMethodsSectionRRT() {
        if (!this.includeAlternativeMethods) return null;

        return {
            title: 'Alternative Solution Methods',
            type: 'alternatives',
            data: [
                ['Primary Method', 'Rational Root Theorem with Synthetic Division'],
                ['', ''],
                ['Alternative Testing Methods', ''],
                ['Method 1', 'Direct Substitution: Evaluate P(r) directly for each candidate'],
                ['Pro', 'Simpler conceptually'],
                ['Con', 'Doesn\'t provide quotient polynomial for factoring'],
                ['', ''],
                ['Method 2', 'Graphing Calculator: Graph polynomial to approximate roots'],
                ['Pro', 'Visual confirmation of root locations'],
                ['Con', 'Only approximations, need algebraic verification'],
                ['', ''],
                ['Method 3', 'Factoring by Grouping (when applicable)'],
                ['Pro', 'Can be faster for special patterns'],
                ['Con', 'Only works for specific polynomial forms'],
                ['', ''],
                ['When to Use Each', ''],
                ['Rational Root Theorem', 'Best systematic approach for finding all rational roots'],
                ['Graphing', 'Good for visualizing and approximating before exact methods'],
                ['Factoring Patterns', 'Use when recognized (difference of squares, etc.)'],
                ['', ''],
                ['Recommendation', 'Rational Root Theorem is most reliable and systematic for general polynomials']
            ]
        };
    }

    createPracticeProblemsSectionRRT() {
        const problems = this.questionBank.byDifficulty;

        const practiceData = [
            ['Practice Problems', ''],
            ['', ''],
            ['Easy Problems (Monic Polynomials)', '']
        ];

        problems.easy.slice(0, 3).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Medium Problems (Non-Monic)', '']);

        problems.medium.slice(0, 3).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Hard Problems (Higher Degree)', '']);

        problems.hard.slice(0, 2).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Practice Tips', '']);
        practiceData.push(['', '• Start with easy monic polynomials to build confidence']);
        practiceData.push(['', '• Check your answers by substitution']);
        practiceData.push(['', '• Keep track of your work systematically']);
        practiceData.push(['', '• Practice synthetic division until it becomes automatic']);

        return {
            title: 'Practice Problems',
            type: 'practice',
            data: practiceData
        };
    }
}

// Export the class
export default EnhancedRationalRootTheoremWorkbook;
