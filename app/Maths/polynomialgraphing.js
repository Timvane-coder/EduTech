// Enhanced Graphing Polynomial Functions Mathematical Workbook
import * as math from 'mathjs';

export class EnhancedPolynomialGraphingWorkbook {
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
        this.initializePolynomialGraphingLessons();
        this.initializePolynomialSolvers();
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
        this.initializeGraphingTechniquesDatabase();
        this.initializeEndBehaviorDatabase();
        this.initializeTurningPointsDatabase();
    }

    initializePolynomialGraphingLessons() {
        this.lessons = {
            polynomial_basics: {
                title: "Polynomial Function Basics",
                concepts: [
                    "General form: P(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀",
                    "Degree: highest power of x (n)",
                    "Leading coefficient: coefficient of highest degree term (aₙ)",
                    "Constant term: a₀",
                    "Polynomial functions are continuous and smooth"
                ],
                theory: "Polynomial functions are algebraic expressions with non-negative integer exponents. The degree and leading coefficient determine the overall shape and behavior.",
                keyFormulas: {
                    "Standard Form": "P(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀",
                    "Factored Form": "P(x) = a(x - r₁)(x - r₂)...(x - rₙ)",
                    "Degree": "n = highest power of x"
                },
                degreeClassification: {
                    "Constant (degree 0)": "P(x) = a₀",
                    "Linear (degree 1)": "P(x) = a₁x + a₀",
                    "Quadratic (degree 2)": "P(x) = a₂x² + a₁x + a₀",
                    "Cubic (degree 3)": "P(x) = a₃x³ + a₂x² + a₁x + a₀",
                    "Quartic (degree 4)": "P(x) = a₄x⁴ + ...",
                    "Quintic (degree 5)": "P(x) = a₅x⁵ + ..."
                },
                applications: [
                    "Physics: projectile motion, falling objects",
                    "Economics: cost, revenue, profit functions",
                    "Engineering: stress-strain relationships",
                    "Biology: population growth models"
                ]
            },

            end_behavior: {
                title: "End Behavior of Polynomial Functions",
                concepts: [
                    "End behavior: what happens to y as x → ±∞",
                    "Determined by degree (n) and leading coefficient (aₙ)",
                    "Even degree: both ends go same direction",
                    "Odd degree: ends go opposite directions",
                    "Positive leading coefficient: right end goes up",
                    "Negative leading coefficient: right end goes down"
                ],
                theory: "The end behavior of a polynomial is dominated by its highest-degree term. As x becomes very large or very small, the leading term overwhelms all others.",
                keyFormulas: {
                    "Dominant Term": "For large |x|, P(x) ≈ aₙxⁿ",
                    "End Behavior Notation": "As x → ∞, P(x) → ? and as x → -∞, P(x) → ?"
                },
                endBehaviorRules: {
                    "Even degree, positive aₙ": "Both ends up: ↗ ... ↗",
                    "Even degree, negative aₙ": "Both ends down: ↘ ... ↘",
                    "Odd degree, positive aₙ": "Left down, right up: ↘ ... ↗",
                    "Odd degree, negative aₙ": "Left up, right down: ↗ ... ↘"
                },
                graphicalAnalysis: [
                    "Sketch rough end behavior first",
                    "Determines overall orientation of graph",
                    "Helps predict number of turning points",
                    "Validates graph shape"
                ]
            },

            zeros_and_multiplicity: {
                title: "Zeros and Multiplicity",
                concepts: [
                    "Zero/root: value where P(x) = 0",
                    "x-intercepts are zeros of the polynomial",
                    "Multiplicity: number of times a factor appears",
                    "Odd multiplicity: graph crosses x-axis",
                    "Even multiplicity: graph touches and turns around",
                    "Higher multiplicity: flatter approach to x-axis"
                ],
                theory: "Zeros reveal where the graph crosses or touches the x-axis. Multiplicity determines the behavior at each zero.",
                keyFormulas: {
                    "Factor Form": "P(x) = a(x - r₁)^m₁(x - r₂)^m₂...",
                    "Multiplicity": "mᵢ = exponent on factor (x - rᵢ)",
                    "Sum of Multiplicities": "m₁ + m₂ + ... = degree of polynomial"
                },
                multiplicityBehavior: {
                    "Multiplicity 1": "Crosses x-axis linearly",
                    "Multiplicity 2": "Touches and turns (parabolic)",
                    "Multiplicity 3": "Crosses with inflection (cubic-like)",
                    "Multiplicity 4": "Touches with flat approach (quartic-like)"
                },
                findingZeros: [
                    "Factor if possible",
                    "Use Rational Root Theorem",
                    "Synthetic division",
                    "Quadratic formula for degree 2 factors",
                    "Numerical methods for higher degrees"
                ]
            },

            turning_points: {
                title: "Turning Points and Local Extrema",
                concepts: [
                    "Turning point: where graph changes from increasing to decreasing or vice versa",
                    "Local maximum: peak in a region",
                    "Local minimum: valley in a region",
                    "Maximum number of turning points: n - 1 (where n is degree)",
                    "May have fewer than maximum",
                    "Found using calculus (derivative = 0)"
                ],
                theory: "Turning points occur where the derivative equals zero. A polynomial of degree n has at most n - 1 turning points.",
                keyFormulas: {
                    "Max Turning Points": "n - 1 for degree n polynomial",
                    "Finding Turning Points": "Solve P'(x) = 0",
                    "Second Derivative Test": "P''(x) > 0 → local min, P''(x) < 0 → local max"
                },
                turningPointRules: {
                    "Degree 2": "At most 1 turning point (vertex)",
                    "Degree 3": "At most 2 turning points",
                    "Degree 4": "At most 3 turning points",
                    "General": "Degree n has at most n - 1 turning points"
                },
                identificationMethods: [
                    "Calculus: find critical points",
                    "Graph analysis: identify peaks and valleys",
                    "Sign chart of derivative",
                    "Technology: graphing calculator"
                ]
            },

            symmetry: {
                title: "Symmetry in Polynomial Functions",
                concepts: [
                    "Even function: f(-x) = f(x), symmetric about y-axis",
                    "Odd function: f(-x) = -f(x), symmetric about origin",
                    "Even functions have only even-powered terms",
                    "Odd functions have only odd-powered terms",
                    "Most polynomials have no symmetry"
                ],
                theory: "Symmetry simplifies graphing and analysis. Even/odd functions have special properties that can be exploited.",
                keyFormulas: {
                    "Even Function Test": "P(-x) = P(x)",
                    "Odd Function Test": "P(-x) = -P(x)",
                    "Even Powers": "x², x⁴, x⁶, ...",
                    "Odd Powers": "x, x³, x⁵, ..."
                },
                symmetryTypes: {
                    "Y-axis symmetry (even)": "Graph mirrors across y-axis",
                    "Origin symmetry (odd)": "Rotating 180° gives same graph",
                    "No symmetry": "Most general polynomials"
                },
                examples: [
                    "Even: f(x) = x⁴ - 3x² + 2",
                    "Odd: f(x) = x⁵ - 2x³ + x",
                    "Neither: f(x) = x³ + x² + 1"
                ]
            },

            graphing_process: {
                title: "Complete Graphing Process",
                concepts: [
                    "Systematic approach to graphing polynomials",
                    "Analyze before plotting",
                    "Use key features to guide sketch",
                    "Verify with technology when available",
                    "Connect smooth, continuous curve"
                ],
                theory: "Graphing polynomials requires synthesizing multiple pieces of information: degree, leading coefficient, zeros, turning points, and end behavior.",
                graphingSteps: [
                    "1. Determine degree and leading coefficient",
                    "2. Find end behavior",
                    "3. Find zeros and their multiplicities",
                    "4. Determine maximum turning points",
                    "5. Find y-intercept (evaluate P(0))",
                    "6. Plot key points",
                    "7. Sketch smooth curve through points",
                    "8. Verify graph matches all characteristics"
                ],
                keyChecks: {
                    "End behavior matches degree/leading coefficient": "✓",
                    "Correct number and location of zeros": "✓",
                    "Graph crosses/touches appropriately at zeros": "✓",
                    "Number of turning points ≤ n - 1": "✓",
                    "Smooth and continuous": "✓",
                    "Passes through y-intercept": "✓"
                },
                commonErrors: [
                    "Forgetting to check multiplicity behavior",
                    "Drawing too many turning points",
                    "Incorrect end behavior",
                    "Sharp corners (polynomials are smooth)",
                    "Forgetting y-intercept"
                ]
            },

            factored_form_graphing: {
                title: "Graphing from Factored Form",
                concepts: [
                    "Factored form directly reveals zeros",
                    "P(x) = a(x - r₁)^m₁(x - r₂)^m₂...(x - rₙ)^mₙ",
                    "Zeros are r₁, r₂, ..., rₙ",
                    "Multiplicities are m₁, m₂, ..., mₙ",
                    "Leading coefficient is a"
                ],
                theory: "Factored form is ideal for graphing because it explicitly shows zeros and multiplicities, which are the most important graphing features.",
                keyFormulas: {
                    "Factored Form": "P(x) = a(x - r₁)^m₁(x - r₂)^m₂...",
                    "Degree": "n = m₁ + m₂ + ... + mₙ",
                    "Zeros": "x = r₁, r₂, ..., rₙ",
                    "Y-intercept": "P(0) = a(-r₁)^m₁(-r₂)^m₂..."
                },
                graphingFromFactored: [
                    "Identify all zeros from factors",
                    "Determine multiplicity of each zero",
                    "Find degree by summing multiplicities",
                    "Identify leading coefficient a",
                    "Determine end behavior",
                    "Plot zeros and y-intercept",
                    "Sketch using multiplicity behavior"
                ],
                advantages: [
                    "Zeros immediately visible",
                    "Multiplicity explicitly shown",
                    "Easy to identify degree",
                    "Simpler to analyze behavior at zeros"
                ]
            },

            standard_form_graphing: {
                title: "Graphing from Standard Form",
                concepts: [
                    "Standard form: P(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀",
                    "Degree and leading coefficient visible",
                    "Y-intercept is a₀",
                    "May need to factor to find zeros",
                    "Can use synthetic division and other techniques"
                ],
                theory: "Standard form shows the polynomial's structure but requires additional work to find zeros for graphing.",
                keyFormulas: {
                    "Standard Form": "P(x) = aₙxⁿ + ... + a₁x + a₀",
                    "Degree": "n",
                    "Leading Coefficient": "aₙ",
                    "Y-intercept": "a₀"
                },
                graphingFromStandard: [
                    "Identify degree n and leading coefficient aₙ",
                    "Determine end behavior",
                    "Find y-intercept a₀",
                    "Find zeros (factor, rational root theorem, etc.)",
                    "Determine multiplicities",
                    "Find turning points if needed",
                    "Sketch graph"
                ],
                challenges: [
                    "Zeros not immediately visible",
                    "May be difficult to factor",
                    "Multiplicities require factoring",
                    "May need technology for higher degrees"
                ]
            },

            polynomial_transformations: {
                title: "Transformations of Polynomial Functions",
                concepts: [
                    "Vertical shifts: f(x) + k",
                    "Horizontal shifts: f(x - h)",
                    "Vertical stretch/compression: a·f(x)",
                    "Horizontal stretch/compression: f(bx)",
                    "Reflections: -f(x) or f(-x)"
                ],
                theory: "Transformations allow us to generate new polynomial graphs from parent functions by applying systematic shifts, stretches, and reflections.",
                keyFormulas: {
                    "Vertical Shift": "f(x) ± k",
                    "Horizontal Shift": "f(x ∓ h)",
                    "Vertical Stretch": "a·f(x), |a| > 1",
                    "Vertical Compression": "a·f(x), 0 < |a| < 1",
                    "Reflection over x-axis": "-f(x)",
                    "Reflection over y-axis": "f(-x)"
                },
                transformationRules: {
                    "f(x) + k": "Shift up k units (k > 0)",
                    "f(x) - k": "Shift down k units (k > 0)",
                    "f(x - h)": "Shift right h units (h > 0)",
                    "f(x + h)": "Shift left h units (h > 0)",
                    "a·f(x), a > 1": "Vertical stretch by factor a",
                    "a·f(x), 0 < a < 1": "Vertical compression by factor a",
                    "-f(x)": "Reflect over x-axis",
                    "f(-x)": "Reflect over y-axis"
                },
                applications: [
                    "Modeling real-world scenarios with adjustments",
                    "Understanding function families",
                    "Simplifying graphing complex functions"
                ]
            },

            rational_root_theorem: {
                title: "Rational Root Theorem for Finding Zeros",
                concepts: [
                    "Rational Root Theorem helps find potential rational zeros",
                    "Possible rational zeros: ±(factors of a₀)/(factors of aₙ)",
                    "Test candidates using synthetic division or substitution",
                    "Once one zero found, reduce degree",
                    "Continue until fully factored or reduced to quadratic"
                ],
                theory: "The Rational Root Theorem provides a finite list of candidates for rational zeros, making it possible to systematically find zeros of polynomials.",
                keyFormulas: {
                    "Rational Root Theorem": "If p/q is a rational zero, then p|a₀ and q|aₙ",
                    "Possible Zeros": "±{factors of a₀}/{factors of aₙ}"
                },
                process: [
                    "List factors of constant term a₀",
                    "List factors of leading coefficient aₙ",
                    "Form all ratios ±p/q",
                    "Test each candidate",
                    "Use synthetic division when zero found",
                    "Repeat on reduced polynomial"
                ],
                example: "For P(x) = 2x³ - 3x² - 11x + 6: a₀ = 6, aₙ = 2. Possible zeros: ±1, ±2, ±3, ±6, ±1/2, ±3/2"
            },

            descartes_rule_of_signs: {
                title: "Descartes' Rule of Signs",
                concepts: [
                    "Predicts number of positive and negative real zeros",
                    "Count sign changes in P(x) for positive zeros",
                    "Count sign changes in P(-x) for negative zeros",
                    "Actual number of zeros is this count or less by even number",
                    "Helps narrow down search for zeros"
                ],
                theory: "Descartes' Rule of Signs provides bounds on the number of positive and negative real zeros based on coefficient signs.",
                keyFormulas: {
                    "Positive Zeros": "# of sign changes in P(x), or that minus an even number",
                    "Negative Zeros": "# of sign changes in P(-x), or that minus an even number"
                },
                process: [
                    "Write polynomial in standard form",
                    "Count sign changes in P(x)",
                    "Find P(-x) and count sign changes",
                    "Apply rule to predict zero counts"
                ],
                example: "P(x) = x³ - 2x² + 3x - 4 has 3 sign changes → 3 or 1 positive zeros"
            },

            intermediate_value_theorem: {
                title: "Intermediate Value Theorem",
                concepts: [
                    "If P is continuous and P(a) and P(b) have opposite signs, there's a zero between a and b",
                    "Polynomials are continuous everywhere",
                    "Used to locate zeros in intervals",
                    "Basis for numerical root-finding methods"
                ],
                theory: "The Intermediate Value Theorem guarantees the existence of zeros in intervals where the function changes sign.",
                keyFormulas: {
                    "IVT": "If P(a) · P(b) < 0, then ∃c ∈ (a,b) such that P(c) = 0"
                },
                applications: [
                    "Verify zeros exist in intervals",
                    "Guide numerical methods",
                    "Confirm graphing accuracy",
                    "Bound zero locations"
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
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±', 'sqrt': '√',
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'perpendicular': '⊥', 'parallel': '∥',
            'rightarrow': '→', 'leftarrow': '←', 'uparrow': '↑', 'downarrow': '↓'
        };
    }

    initializePolynomialSolvers() {
        this.polynomialTypes = {
            general_polynomial: {
                patterns: [/polynomial/i, /graph.*polynomial/i],
                solver: this.solveGeneralPolynomial.bind(this),
                name: 'General Polynomial Graphing',
                category: 'polynomial_graphing',
                description: 'Graph any polynomial function'
            },

            factored_form: {
                patterns: [/factor/i, /\(x\s*[-+]\s*\d+\)/],
                solver: this.solveFactoredPolynomial.bind(this),
                name: 'Factored Form Polynomial',
                category: 'factored_graphing',
                description: 'Graph polynomial given in factored form'
            },

            standard_form: {
                patterns: [/x\^\d+/, /standard.*form/i],
                solver: this.solveStandardFormPolynomial.bind(this),
                name: 'Standard Form Polynomial',
                category: 'standard_graphing',
                description: 'Graph polynomial in standard form'
            },

            cubic: {
                patterns: [/cubic/i, /x\^3/, /degree.*3/i],
                solver: this.solveCubicPolynomial.bind(this),
                name: 'Cubic Polynomial',
                category: 'cubic_graphing',
                description: 'Graph cubic (degree 3) polynomial'
            },

            quartic: {
                patterns: [/quartic/i, /x\^4/, /degree.*4/i],
                solver: this.solveQuarticPolynomial.bind(this),
                name: 'Quartic Polynomial',
                category: 'quartic_graphing',
                description: 'Graph quartic (degree 4) polynomial'
            },

            end_behavior_analysis: {
                patterns: [/end.*behavior/i, /as.*x.*infinity/i],
                solver: this.analyzeEndBehavior.bind(this),
                name: 'End Behavior Analysis',
                category: 'end_behavior',
                description: 'Analyze end behavior of polynomial'
            },

            zeros_multiplicity: {
                patterns: [/zero/i, /multiplicity/i, /root/i],
                solver: this.analyzeZerosMultiplicity.bind(this),
                name: 'Zeros and Multiplicity Analysis',
                category: 'zeros_analysis',
                description: 'Find and analyze zeros with multiplicities'
            },

            turning_points_analysis: {
                patterns: [/turning.*point/i, /local.*max/i, /local.*min/i],
                solver: this.analyzeTurningPoints.bind(this),
                name: 'Turning Points Analysis',
                category: 'turning_points',
                description: 'Find and classify turning points'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            end_behavior: {
                'Determine end behavior': [
                    'Confusing even/odd degree rules',
                    'Forgetting to check leading coefficient sign',
                    'Reversing left and right behavior',
                    'Thinking all polynomials go up on right'
                ],
                'Apply end behavior rules': [
                    'Not matching degree parity with behavior',
                    'Ignoring leading coefficient',
                    'Drawing both ends same way for odd degree'
                ]
            },
            zeros_multiplicity: {
                'Find zeros': [
                    'Missing repeated zeros',
                    'Forgetting to set polynomial equal to zero',
                    'Arithmetic errors in factoring',
                    'Not testing all rational root candidates'
                ],
                'Determine multiplicity': [
                    'Counting multiplicity incorrectly',
                    'Confusing even/odd multiplicity behavior',
                    'Thinking all zeros cross the x-axis',
                    'Not recognizing repeated factors'
                ],
                'Graph behavior at zeros': [
                    'Drawing sharp corners at zeros',
                    'Crossing when should touch (even multiplicity)',
                    'Touching when should cross (odd multiplicity)',
                    'Not showing flatter approach for higher multiplicity'
                ]
            },
            turning_points: {
                'Count turning points': [
                    'Drawing more than n-1 turning points',
                    'Thinking must have exactly n-1 turning points',
                    'Not counting local extrema correctly'
                ],
                'Locate turning points': [
                    'Placing turning points at zeros',
                    'Guessing locations without calculation',
                    'Forgetting turning points occur between zeros'
                ]
            },
            graphing: {
                'Sketch smooth curve': [
                    'Drawing sharp corners or cusps',
                    'Making graph discontinuous',
                    'Not connecting points smoothly',
                    'Forgetting polynomials are continuous'
                ],
                'Match all features': [
                    'Graph not matching end behavior',
                    'Wrong number of x-intercepts',
                    'Incorrect behavior at zeros',
                    'Too many or too few turning points',
                    'Missing y-intercept'
                ],
                'Verify graph': [
                    'Not checking against original equation',
                    'Skipping verification steps',
                    'Ignoring contradictions in features'
                ]
            },
            factoring: {
                'Factor completely': [
                    'Stopping before fully factored',
                    'Missing common factors',
                    'Errors in grouping',
                    'Arithmetic mistakes'
                ],
                'Apply Rational Root Theorem': [
                    'Listing candidates incorrectly',
                    'Not testing negative candidates',
                    'Arithmetic errors in testing',
                    'Giving up too soon'
                ]
            }
        };

        this.errorPrevention = {
            end_behavior_check: {
                reminder: 'Always check both degree (even/odd) AND leading coefficient (positive/negative)',
                method: 'Use the four-case rule: even-pos, even-neg, odd-pos, odd-neg'
            },
            multiplicity_behavior: {
                reminder: 'Odd multiplicity = cross, Even multiplicity = touch and turn',
                method: 'Write multiplicity next to each zero and check parity'
            },
            turning_points_limit: {
                reminder: 'Maximum turning points = degree - 1',
                method: 'Count turning points as you sketch to avoid exceeding limit'
            },
            smooth_curve: {
                reminder: 'Polynomials are smooth and continuous everywhere',
                method: 'No sharp corners, breaks, or jumps allowed'
            },
            verify_all_features: {
                reminder: 'Check end behavior, zeros, multiplicities, turning points, and y-intercept',
                method: 'Use a checklist before finalizing graph'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why the graph has this shape and what it means',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Step-by-step process to construct the graph',
                language: 'clear instructions'
            },
            visual: {
                focus: 'How the graph looks and visual patterns',
                language: 'descriptive and spatial'
            },
            algebraic: {
                focus: 'Mathematical relationships and formulas',
                language: 'precise notation'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple everyday language',
                detail: 'essential features only',
                examples: 'low-degree polynomials'
            },
            intermediate: {
                vocabulary: 'standard mathematical terms',
                detail: 'main features with brief explanations',
                examples: 'typical textbook polynomials'
            },
            ELI5: {
                vocabulary: 'explain like I\'m 5 - simplest possible terms',
                detail: 'every feature explained with analogies',
                examples: 'real-world stories and pictures',
                analogies: true,
                visualization: 'simple drawings'
            },
            detailed: {
                vocabulary: 'full mathematical vocabulary',
                detail: 'comprehensive analysis of all features',
                examples: 'complex and abstract cases'
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
            projectile_motion: {
                scenario: "Height of projectile over time",
                polynomial: "h(t) = -16t² + v₀t + h₀",
                examples: [
                    "Ball thrown upward: find maximum height",
                    "Determine when object hits ground"
                ],
                context: "Quadratic models for objects under gravity",
                degree: 2
            },
            revenue_optimization: {
                scenario: "Business revenue as function of price",
                polynomial: "R(p) = p·(a - bp) = ap - bp²",
                examples: [
                    "Find price that maximizes revenue",
                    "Determine break-even points"
                ],
                context: "Quadratic revenue functions in economics",
                degree: 2
            },
            volume_optimization: {
                scenario: "Volume of box formed by cutting corners",
                polynomial: "V(x) = x(L - 2x)(W - 2x)",
                examples: [
                    "Maximize box volume by choosing cut size",
                    "Constraints on cut dimensions"
                ],
                context: "Cubic optimization in manufacturing",
                degree: 3
            },
            population_growth: {
                scenario: "Population growth with limiting factors",
                polynomial: "P(t) = at³ + bt² + ct + d",
                examples: [
                    "Model bacterial growth",
                    "Predict population changes"
                ],
                context: "Polynomial models in biology",
                degree: 3
            },
            engineering_stress: {
                scenario: "Stress-strain relationships in materials",
                polynomial: "σ = E·ε + aε² + bε³",
                examples: [
                    "Material deformation under load",
                    "Elastic and plastic regions"
                ],
                context: "Higher-degree polynomials in engineering",
                degree: 3
            },
            roller_coaster: {
                scenario: "Height profile of roller coaster track",
                polynomial: "h(x) = polynomial of degree 4-6",
                examples: [
                    "Design smooth curves",
                    "Find hills and valleys"
                ],
                context: "Polynomial splines in design",
                degree: 4
            },
            chemical_reaction: {
                scenario: "Reaction rate vs. concentration",
                polynomial: "r(c) = kc(a-c)(b-c)",
                examples: [
                    "Optimize reaction conditions",
                    "Find equilibrium points"
                ],
                context: "Polynomial rate laws in chemistry",
                degree: 3
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            polynomial_graphing: {
                skills: [
                    'Understanding of functions',
                    'Plotting points on coordinate plane',
                    'Recognizing basic function shapes',
                    'Factoring polynomials',
                    'Solving polynomial equations'
                ],
                priorKnowledge: [
                    'Exponent rules',
                    'Order of operations',
                    'Coordinate geometry',
                    'Function notation',
                    'End behavior concepts'
                ],
                checkQuestions: [
                    "What is the degree of 3x⁴ - 2x² + 1?",
                    "What is the leading coefficient?",
                    "How do you find the y-intercept?",
                    "Factor: x² - 5x + 6",
                    "Solve: x(x-2)(x+3) = 0"
                ]
            },
            end_behavior: {
                skills: [
                    'Understanding infinity notation',
                    'Even vs odd functions',
                    'Dominant term analysis'
                ],
                priorKnowledge: [
                    'Limit concepts',
                    'Arrow notation',
                    'Degree of polynomial'
                ],
                checkQuestions: [
                    "Is x⁴ + 2x² even or odd degree?",
                    "As x → ∞, what happens to -x³?",
                    "If leading coefficient is negative, which way does right end go?"
                ]
            },
            zeros_multiplicity: {
                skills: [
                    'Factoring techniques',
                    'Solving equations',
                    'Understanding repeated roots'
                ],
                priorKnowledge: [
                    'Zero Product Property',
                    'Factor theorem',
                    'Multiplicity concept'
                ],
                checkQuestions: [
                    "What are zeros of (x-2)(x+1)?",
                    "What is multiplicity in (x-3)²?",
                    "Does graph cross or touch at multiplicity 2?"
                ]
            },
            turning_points: {
                skills: [
                    'Counting extrema',
                    'Understanding local max/min',
                    'Basic calculus (if available)'
                ],
                priorKnowledge: [
                    'Increasing/decreasing functions',
                    'Maximum/minimum concepts',
                    'Derivative basics (optional)'
                ],
                checkQuestions: [
                    "What's max number of turning points for degree 5?",
                    "What is a local maximum?",
                    "Can a cubic have 3 turning points?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            end_behavior_arrows: {
                description: "Use arrows to show long-run behavior",
                analogy: "Like the tails of a kite flying in the wind",
                visualization: "Draw arrows at left and right ends of graph",
                suitableFor: ['all_polynomials'],
                explanation: "Arrows show direction graph goes as x approaches ±∞"
            },
            zero_behavior_sketch: {
                description: "Show how graph behaves at each zero",
                analogy: "Like a ball bouncing (touch) vs. passing through (cross)",
                visualization: "Draw small curve at each x-intercept showing behavior",
                suitableFor: ['factored_polynomials'],
                explanation: "Odd multiplicity crosses, even multiplicity touches"
            },
            sign_chart: {
                description: "Chart showing where function is positive/negative",
                analogy: "Like a map showing regions above and below ground",
                visualization: "Number line with +/- signs in intervals",
                suitableFor: ['all_polynomials'],
                explanation: "Helps determine graph position relative to x-axis"
            },
            feature_checklist: {
                description: "Systematic list of all graph features",
                analogy: "Like a pilot's pre-flight checklist",
                visualization: "Written list with checkboxes",
                suitableFor: ['all_polynomials'],
                explanation: "Ensures no features forgotten when graphing"
            },
            transformation_overlay: {
                description: "Compare to parent function with transformations",
                analogy: "Like seeing original and edited photo side-by-side",
                visualization: "Dashed parent function with solid transformed",
                suitableFor: ['transformed_polynomials'],
                explanation: "Shows how transformations affect graph shape"
            },
            table_of_values: {
                description: "Strategic point plotting",
                analogy: "Like plotting destinations on a road map",
                visualization: "Table with x and f(x) values, then plotted",
                suitableFor: ['all_polynomials'],
                explanation: "Gives specific points to guide curve drawing"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "Graph f(x) = x² - 4",
                    degree: 2,
                    features: {
                        zeros: [-2, 2],
                        endBehavior: "both up",
                        turningPoints: 1,
                        yIntercept: -4
                    },
                    difficulty: "easy"
                },
                {
                    problem: "Graph f(x) = -x³",
                    degree: 3,
                    features: {
                        zeros: [0],
                        endBehavior: "left up, right down",
                        turningPoints: 0,
                        yIntercept: 0
                    },
                    difficulty: "easy"
                },
                {
                    problem: "Graph f(x) = (x-1)(x+2)",
                    degree: 2,
                    features: {
                        zeros: [1, -2],
                        endBehavior: "both up",
                        turningPoints: 1,
                        yIntercept: -2
                    },
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "Graph f(x) = x³ - 4x",
                    degree: 3,
                    factored: "x(x-2)(x+2)",
                    features: {
                        zeros: [0, 2, -2],
                        multiplicities: [1, 1, 1],
                        endBehavior: "left down, right up",
                        turningPoints: 2,
                        yIntercept: 0
                    },
                    difficulty: "medium"
                },
                {
                    problem: "Graph f(x) = -(x-1)²(x+2)",
                    degree: 3,
                    features: {
                        zeros: [1, -2],
                        multiplicities: [2, 1],
                        endBehavior: "left up, right down",
                        turningPoints: 2,
                        yIntercept: -2
                    },
                    difficulty: "medium"
                },
                {
                    problem: "Graph f(x) = x⁴ - 5x² + 4",
                    degree: 4,
                    factored: "(x-1)(x+1)(x-2)(x+2)",
                    features: {
                        zeros: [1, -1, 2, -2],
                        multiplicities: [1, 1, 1, 1],
                        endBehavior: "both up",
                        turningPoints: 3,
                        yIntercept: 4
                    },
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "Graph f(x) = x⁴ - 2x³ - 3x² + 4x + 4",
                    degree: 4,
                    features: {
                        requiresFactoring: true,
                        endBehavior: "both up",
                        maxTurningPoints: 3
                    },
                    difficulty: "hard"
                },
                {
                    problem: "Graph f(x) = -2(x+1)³(x-2)²",
                    degree: 5,
                    features: {
                        zeros: [-1, 2],
                        multiplicities: [3, 2],
                        endBehavior: "left up, right down",
                        maxTurningPoints: 4,
                        yIntercept: -8
                    },
                    difficulty: "hard"
                },
                {
                    problem: "Graph f(x) = x⁵ - 5x³ + 4x",
                    degree: 5,
                    factored: "x(x²-1)(x²-4) = x(x-1)(x+1)(x-2)(x+2)",
                    features: {
                        zeros: [0, 1, -1, 2, -2],
                        multiplicities: [1, 1, 1, 1, 1],
                        endBehavior: "left down, right up",
                        maxTurningPoints: 4
                    },
                    difficulty: "hard"
                }
            ]
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            end_behavior_confusion: {
                misconception: "All polynomial graphs go up on the right side",
                reality: "Right end behavior depends on both degree parity and leading coefficient sign",
                correctiveExample: "f(x) = -x² goes down on both ends; f(x) = -x³ goes down on right",
                commonIn: ['all_graphing']
            },
            multiplicity_crossing: {
                misconception: "All zeros make the graph cross the x-axis",
                reality: "Only odd multiplicity zeros cross; even multiplicity zeros touch and turn",
                correctiveExample: "f(x) = (x-2)² touches at x=2; f(x) = (x-2)³ crosses at x=2",
                commonIn: ['factored_graphing']
            },
            turning_points_required: {
                misconception: "Degree n polynomial must have exactly n-1 turning points",
                reality: "Maximum is n-1, but can have fewer",
                correctiveExample: "f(x) = x³ has degree 3 but only 0 turning points",
                commonIn: ['all_graphing']
            },
            sharp_corners: {
                misconception: "Polynomial graphs can have sharp corners or cusps",
                reality: "Polynomial graphs are smooth everywhere - no sharp points",
                correctiveExample: "Even at high multiplicity zeros, curve is smooth (just flatter)",
                commonIn: ['sketching']
            },
            y_intercept_confusion: {
                misconception: "Y-intercept is where graph crosses y-axis at y=1",
                reality: "Y-intercept is f(0), can be any value",
                correctiveExample: "f(x) = x² - 4 has y-intercept at (0,-4), not (0,1)",
                commonIn: ['all_graphing']
            },
            symmetry_assumption: {
                misconception: "All polynomials are symmetric",
                reality: "Only all-even or all-odd term polynomials have symmetry",
                correctiveExample: "f(x) = x³ + x is symmetric; f(x) = x³ + x² is not",
                commonIn: ['graphing']
            },
            leading_coefficient_only: {
                misconception: "End behavior depends only on leading coefficient",
                reality: "Both degree and leading coefficient determine end behavior",
                correctiveExample: "x² and -x³ both have negative leading coeff but different end behavior",
                commonIn: ['end_behavior']
            },
            zero_at_maximum: {
                misconception: "Turning points always occur at zeros",
                reality: "Turning points occur between zeros (usually)",
                correctiveExample: "f(x) = x² has turning point at x=0, but f(x) = x²-1 has turning point at x=0, zeros at ±1",
                commonIn: ['turning_points']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            end_behavior: {
                analogy: "Kite tails in the wind",
                explanation: "Like a kite's tails that extend far in certain directions, polynomial ends extend toward infinity following specific patterns",
                suitableFor: ['end_behavior'],
                ELI5: "Imagine the graph is like a kite. The ends are like the kite's tails - they go in certain directions based on how the kite is shaped"
            },
            multiplicity_crossing: {
                analogy: "Bouncing ball vs. thrown ball",
                explanation: "Even multiplicity is like a ball bouncing off ground (touches and returns). Odd multiplicity is like a ball passing through water (crosses through)",
                suitableFor: ['zeros_multiplicity'],
                ELI5: "When a ball bounces, it touches the ground and goes back up (even). When you throw a ball through a hoop, it goes through to the other side (odd)"
            },
            smooth_curves: {
                analogy: "Ribbon or rope",
                explanation: "Polynomial graphs are smooth like a ribbon - no sharp bends, breaks, or kinks",
                suitableFor: ['all_graphing'],
                ELI5: "The graph is like a smooth piece of ribbon. It bends gently, never makes sharp corners"
            },
            turning_points: {
                analogy: "Hills and valleys on a road trip",
                explanation: "Turning points are like hilltops and valley bottoms - places where direction changes from up to down or down to up",
                suitableFor: ['turning_points'],
                ELI5: "Think of driving over hills. At the top of a hill or bottom of a valley, you change from going up to going down (or vice versa)"
            },
            degree_and_complexity: {
                analogy: "Complexity like story plot twists",
                explanation: "Higher degree is like a story with more plot twists - more potential changes in direction",
                suitableFor: ['polynomial_degree'],
                ELI5: "A simple story might have one twist. A complex story has many twists. Higher degree polynomials can have more twists in their graphs"
            },
            factored_form: {
                analogy: "Recipe ingredients list",
                explanation: "Factored form lists all the 'ingredients' (zeros) explicitly, like a recipe lists ingredients",
                suitableFor: ['factored_form'],
                ELI5: "Factored form is like a recipe that tells you exactly what's in it. You can see all the zeros (ingredients) right away"
            },
            leading_coefficient: {
                analogy: "Steering wheel direction",
                explanation: "Leading coefficient is like which way you turn the steering wheel - determines which direction you go",
                suitableFor: ['end_behavior'],
                ELI5: "The leading coefficient is like the driver deciding which way to turn. Positive goes one way, negative goes the opposite"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            end_behavior: {
                level1: "What is the degree of the polynomial? Is it even or odd?",
                level2: "What is the sign of the leading coefficient?",
                level3: "Use the four-case rule: even-positive, even-negative, odd-positive, odd-negative",
                level4: "Even degree with positive leading coefficient: both ends up ↗...↗"
            },
            find_zeros: {
                level1: "Where does the graph cross or touch the x-axis?",
                level2: "Set the polynomial equal to zero and solve, or factor if possible",
                level3: "If factored as (x-a)(x-b), zeros are x=a and x=b",
                level4: "Factor completely: f(x) = {factored form}, zeros are {list}"
            },
            multiplicity: {
                level1: "How many times does each factor appear?",
                level2: "Count the exponent on each factor",
                level3: "Even multiplicity = touch x-axis, Odd multiplicity = cross x-axis",
                level4: "Factor (x-a)² has multiplicity 2 (even) → graph touches at x=a"
            },
            turning_points: {
                level1: "How many hills and valleys can this graph have?",
                level2: "Maximum turning points = degree - 1",
                level3: "Count local maximums and local minimums",
                level4: "Degree {n} polynomial can have at most {n-1} turning points"
            },
            y_intercept: {
                level1: "Where does the graph cross the y-axis?",
                level2: "Evaluate f(0)",
                level3: "Substitute x=0 into the polynomial",
                level4: "f(0) = {constant term} = {value}"
            },
            graphing_process: {
                level1: "What features do you need to identify before graphing?",
                level2: "Find: degree, leading coefficient, end behavior, zeros, multiplicities, y-intercept",
                level3: "Plot key points, then connect with smooth curve matching all features",
                level4: "Follow systematic process: analyze → plot points → sketch → verify"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "What is the degree of f(x) = 3x⁴ - 2x² + 1?",
                    answer: 4,
                    assesses: "degree_identification",
                    difficulty: "basic"
                },
                {
                    question: "What is the leading coefficient of f(x) = -5x³ + 2x - 7?",
                    answer: -5,
                    assesses: "leading_coefficient",
                    difficulty: "basic"
                },
                {
                    question: "What are the zeros of f(x) = (x-2)(x+3)?",
                    answer: "x = 2, x = -3",
                    assesses: "finding_zeros",
                    difficulty: "basic"
                },
                {
                    question: "What is the multiplicity of x=1 in f(x) = (x-1)³?",
                    answer: 3,
                    assesses: "multiplicity",
                    difficulty: "intermediate"
                },
                {
                    question: "Describe end behavior of f(x) = -x⁴ + 3x²",
                    answer: "both ends down",
                    assesses: "end_behavior",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "If a polynomial has even degree and positive leading coefficient, what is its end behavior?",
                    options: ["Both up", "Both down", "Left down, right up", "Left up, right down"],
                    correct: "Both up",
                    explanation: "Even degree + positive leading coefficient → both ends go up"
                },
                {
                    question: "At a zero with multiplicity 2, does the graph cross or touch the x-axis?",
                    options: ["Cross", "Touch", "Depends on other factors"],
                    correct: "Touch",
                    explanation: "Even multiplicity means the graph touches and turns around"
                },
                {
                    question: "What is the maximum number of turning points for a degree 5 polynomial?",
                    options: ["3", "4", "5", "6"],
                    correct: "4",
                    explanation: "Maximum turning points = degree - 1 = 5 - 1 = 4"
                },
                {
                    question: "Where is the y-intercept of f(x) = x³ - 2x + 5?",
                    options: ["(0,0)", "(0,5)", "(5,0)", "(0,-2)"],
                    correct: "(0,5)",
                    explanation: "Y-intercept is f(0) = 0³ - 2(0) + 5 = 5"
                }
            ],
            summative: [
                {
                    question: "Graph f(x) = -x³ + 4x showing all key features",
                    requiresGraph: true,
                    rubric: {
                        end_behavior: 2,
                        zeros_identified: 2,
                        multiplicities_correct: 2,
                        turning_points: 2,
                        smooth_curve: 2
                    }
                },
                {
                    question: "Analyze and graph f(x) = (x+2)²(x-1)(x-3)",
                    requiresGraph: true,
                    rubric: {
                        degree_identified: 1,
                        end_behavior: 2,
                        zeros_and_multiplicities: 3,
                        behavior_at_zeros: 2,
                        graph_accuracy: 2
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "Graph f(x) = x²",
                    "Graph f(x) = -x³",
                    "Graph f(x) = (x-1)(x+2)",
                    "Find zeros of f(x) = x(x-3)"
                ],
                medium: [
                    "Graph f(x) = x³ - 4x",
                    "Graph f(x) = -(x-1)²(x+2)",
                    "Graph f(x) = x⁴ - 5x² + 4",
                    "Analyze end behavior of f(x) = -2x⁵ + 3x³"
                ],
                hard: [
                    "Graph f(x) = x⁴ - 2x³ - 3x² + 4x + 4",
                    "Graph f(x) = -2(x+1)³(x-2)²",
                    "Graph f(x) = x⁵ - 5x³ + 4x",
                    "Find all features of f(x) = 2x⁶ - 7x⁴ + 2x²"
                ]
            },
            byObjective: {
                canDetermineEndBehavior: [
                    "State end behavior of f(x) = 3x⁴ - 2x + 1",
                    "State end behavior of f(x) = -2x⁵ + x³",
                    "State end behavior of f(x) = -x⁶ + 4x⁴"
                ],
                canFindZeros: [
                    "Find zeros of f(x) = x² - 9",
                    "Find zeros of f(x) = x(x-2)(x+3)",
                    "Find zeros of f(x) = x³ - 4x"
                ],
                canDetermineMultiplicity: [
                    "Find multiplicity of each zero: f(x) = (x-1)²(x+2)",
                    "Find multiplicity of each zero: f(x) = x³(x-3)²",
                    "Does f(x) = (x+1)³ cross or touch at x=-1?"
                ],
                canGraphPolynomials: [
                    "Graph f(x) = x³ - x",
                    "Graph f(x) = -x⁴ + 4x²",
                    "Graph f(x) = (x-1)(x+1)(x-2)"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            graphingDecisionTree: {
                "factored_form_given": "Extract zeros and multiplicities directly",
                "standard_form_given": "Factor if possible, or use numerical methods",
                "low_degree_2_or_3": "Can solve exactly, graph precisely",
                "high_degree_4_plus": "Focus on overall shape, use technology to refine",
                "simple_coefficients": "Plot several points for accuracy",
                "complex_coefficients": "Use technology, verify key features"
            },
            whenToUseWhat: {
                factoring: "When polynomial factors nicely",
                rational_root_theorem: "When polynomial doesn't factor obviously",
                graphing_technology: "For high-degree or complex polynomials",
                calculus: "To find exact turning points",
                sign_chart: "To determine where graph is above/below x-axis",
                table_of_values: "For simple polynomials or verification"
            },
            methodSelection: {
                factorsToConsider: [
                    "Degree of polynomial",
                    "Whether factored or standard form",
                    "Complexity of coefficients",
                    "Required accuracy",
                    "Available tools/technology"
                ],
                generalApproach: [
                    "1. Identify degree and leading coefficient",
                    "2. Determine end behavior",
                    "3. Find all zeros (factor or use methods)",
                    "4. Determine multiplicity of each zero",
                    "5. Find y-intercept",
                    "6. Estimate turning points",
                    "7. Plot key points",
                    "8. Sketch smooth curve",
                    "9. Verify all features match"
                ]
            },
            optimizationTips: {
                "Start with end behavior": "Sets overall orientation",
                "Factor completely when possible": "Reveals all zeros and multiplicities",
                "Use symmetry if present": "Reduces work by half",
                "Technology for verification": "Check work but understand by hand first",
                "Sign chart for intervals": "Helps determine graph position"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Quick End Behavior",
                    timeLimit: 60,
                    problems: [
                        "End behavior of f(x) = x⁴",
                        "End behavior of f(x) = -x³",
                        "End behavior of f(x) = 2x⁵",
                        "End behavior of f(x) = -3x⁶"
                    ]
                },
                {
                    name: "Zeros Sprint",
                    timeLimit: 90,
                    problems: [
                        "Zeros of f(x) = x² - 4",
                        "Zeros of f(x) = x(x-3)(x+2)",
                        "Zeros of f(x) = x³ - 9x",
                        "Zeros of f(x) = (x-1)²(x+3)"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Polynomial",
                    clues: [
                        "Degree 3",
                        "Positive leading coefficient",
                        "Zeros at x = -1, 0, 2",
                        "All multiplicities are 1"
                    ],
                    solve: "Determine a possible polynomial and sketch its graph",
                    solution: "One answer: f(x) = x(x+1)(x-2) = x³ - x² - 2x"
                },
                {
                    name: "Feature Match",
                    challenge: "Create a degree 4 polynomial with exactly 2 zeros and 3 turning points",
                    solution: "f(x) = (x-a)²(x-b)² where a ≠ b"
                },
                {
                    name: "Behavior Detective",
                    problem: "Graph has both ends going up, crosses x-axis at x=-1 and x=3, touches at x=1",
                    solve: "Find a polynomial with these features",
                    solution: "f(x) = (x+1)(x-1)²(x-3)"
                }
            ],
            applications: [
                {
                    scenario: "Roller Coaster Design",
                    problem: "Design a roller coaster section modeled by a degree 4 polynomial with 3 hills/valleys",
                    requirements: "Smooth curve, realistic heights, starts and ends at ground level",
                    sampleSolution: "f(x) = -x(x-10)(x-20)(x-30)/1000"
                },
                {
                    scenario: "Profit Modeling",
                    problem: "Company profit P(x) = -x³ + 15x² - 50x + 100. When is profit positive?",
                    solution: "Find zeros, use sign chart to determine intervals where P(x) > 0"
                },
                {
                    scenario: "Population Biology",
                    problem: "Population P(t) = -t³ + 12t² + 20t. Find when population is maximum.",
                    solution: "Find turning points using derivative or graphing"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectGraph: "Student drew f(x) = -x⁴ with both ends going up",
                    error: "Wrong end behavior for negative leading coefficient",
                    correction: "Even degree with negative leading coefficient → both ends down"
                },
                {
                    name: "Find the Error #2",
                    incorrectGraph: "Student drew f(x) = (x-2)² crossing x-axis at x=2",
                    error: "Even multiplicity should touch, not cross",
                    correction: "Multiplicity 2 is even → graph touches and turns at x=2"
                },
                {
                    name: "Find the Error #3",
                    incorrectGraph: "Student drew degree 3 polynomial with 3 turning points",
                    error: "Too many turning points",
                    correction: "Degree 3 can have at most 2 turning points"
                }
            ]
        };
    }

    initializeGraphingTechniquesDatabase() {
        this.graphingTechniques = {
            systematic_approach: {
                name: "Systematic Graphing Method",
                steps: [
                    "Identify degree and leading coefficient",
                    "Determine end behavior",
                    "Find all zeros (factor if possible)",
                    "Determine multiplicity of each zero",
                    "Find y-intercept (evaluate f(0))",
                    "Estimate number of turning points",
                    "Create sign chart for intervals",
                    "Plot key points",
                    "Sketch smooth curve connecting points",
                    "Verify all features"
                ],
                advantages: "Comprehensive and reliable",
                disadvantages: "Time-consuming for complex polynomials"
            },
            quick_sketch: {
                name: "Quick Sketch Method",
                steps: [
                    "End behavior arrows",
                    "Mark zeros (factor or estimate)",
                    "Rough placement of turning points",
                    "Connect with smooth curve"
                ],
                advantages: "Fast for rough graphs",
                disadvantages: "Less accurate, misses details"
            },
            technology_assisted: {
                name: "Technology-Assisted Method",
                steps: [
                    "Graph on calculator/computer",
                    "Identify key features from graph",
                    "Verify features algebraically",
                    "Sketch by hand using technology as guide"
                ],
                advantages: "Accurate, handles complex polynomials",
                disadvantages: "Requires technology, less conceptual understanding"
            },
            transformation_method: {
                name: "Transformation from Parent Function",
                steps: [
                    "Identify parent function (x², x³, etc.)",
                    "Determine transformations",
                    "Apply transformations systematically",
                    "Sketch transformed graph"
                ],
                advantages: "Good for simple transformations",
                disadvantages: "Limited to transformable cases"
            }
        };
    }

    initializeEndBehaviorDatabase() {
        this.endBehaviorRules = {
            even_positive: {
                rule: "Even degree, positive leading coefficient",
                behavior: "Both ends up",
                notation: "As x → -∞, f(x) → +∞ and as x → +∞, f(x) → +∞",
                symbol: "↗ ... ↗",
                examples: ["f(x) = x²", "f(x) = 2x⁴ - 3x + 1"],
                visualization: "Like a parabola opening upward, but may have more curves in middle"
            },
            even_negative: {
                rule: "Even degree, negative leading coefficient",
                behavior: "Both ends down",
                notation: "As x → -∞, f(x) → -∞ and as x → +∞, f(x) → -∞",
                symbol: "↘ ... ↘",
                examples: ["f(x) = -x²", "f(x) = -x⁴ + 2x²"],
                visualization: "Like an upside-down parabola, but may have more curves in middle"
            },
            odd_positive: {
                rule: "Odd degree, positive leading coefficient",
                behavior: "Left end down, right end up",
                notation: "As x → -∞, f(x) → -∞ and as x → +∞, f(x) → +∞",
                symbol: "↘ ... ↗",
                examples: ["f(x) = x³", "f(x) = x⁵ - 2x³"],
                visualization: "Like a cubic, extends from bottom-left to top-right"
            },
            odd_negative: {
                rule: "Odd degree, negative leading coefficient",
                behavior: "Left end up, right end down",
                notation: "As x → -∞, f(x) → +∞ and as x → +∞, f(x) → -∞",
                symbol: "↗ ... ↘",
                examples: ["f(x) = -x³", "f(x) = -2x⁵ + x"],
                visualization: "Like a flipped cubic, extends from top-left to bottom-right"
            }
        };

        this.endBehaviorDetermination = {
            step1: "Find the degree n of the polynomial",
            step2: "Determine if degree is even or odd",
            step3: "Find the leading coefficient aₙ",
            step4: "Determine if leading coefficient is positive or negative",
            step5: "Apply the appropriate rule from the four cases",
            quickMethod: "For large |x|, polynomial behaves like aₙxⁿ"
        };
    }

    initializeTurningPointsDatabase() {
        this.turningPointsInfo = {
            definition: "A turning point is a point where the graph changes from increasing to decreasing or vice versa",
            types: {
                local_maximum: "A point higher than nearby points (peak)",
                local_minimum: "A point lower than nearby points (valley)"
            },
            maximumRule: {
                formula: "Maximum turning points = degree - 1",
                explanation: "A polynomial of degree n can have at most n-1 turning points",
                examples: {
                    "Degree 2": "At most 1 turning point",
                    "Degree 3": "At most 2 turning points",
                    "Degree 4": "At most 3 turning points",
                    "Degree 5": "At most 4 turning points"
                }
            },
            findingMethods: {
                calculus: "Find where derivative f'(x) = 0",
                graphical: "Identify peaks and valleys on graph",
                estimation: "Turning points typically lie between zeros",
                technology: "Use graphing calculator or software"
            },
            relationship_to_zeros: "Turning points usually (but not always) occur between consecutive zeros",
            special_cases: {
                "f(x) = xⁿ": "One turning point at origin for even n, zero turning points for odd n",
                "All same sign zeros": "May have turning points between and outside zeros"
            }
        };
    }

    // POLYNOMIAL SOLVER METHODS

    solveGeneralPolynomial(problem) {
        const { coefficients, degree, factored, zeros, multiplicities } = problem.parameters;

        return {
            type: 'General Polynomial Graphing',
            degree: degree,
            approach: 'Systematic analysis of all features',
            category: 'polynomial_graphing'
        };
    }

    solveFactoredPolynomial(problem) {
        const { factored, leadingCoeff, zeros, multiplicities } = problem.parameters;

        return {
            type: 'Factored Form Polynomial',
            factored: factored,
            zeros: zeros,
            multiplicities: multiplicities,
            leadingCoeff: leadingCoeff || 1,
            approach: 'Extract features directly from factored form',
            category: 'factored_graphing'
        };
    }

    solveStandardFormPolynomial(problem) {
        const { coefficients, degree } = problem.parameters;

        return {
            type: 'Standard Form Polynomial',
            degree: degree,
            coefficients: coefficients,
            approach: 'Factor or use numerical methods to find zeros',
            category: 'standard_graphing'
        };
    }

    solveCubicPolynomial(problem) {
        const { coefficients, factored } = problem.parameters;

        return {
            type: 'Cubic Polynomial (Degree 3)',
            degree: 3,
            maxTurningPoints: 2,
            approach: 'Factor if possible, analyze end behavior and zeros',
            category: 'cubic_graphing'
        };
    }

    solveQuarticPolynomial(problem) {
        const { coefficients, factored } = problem.parameters;

        return {
            type: 'Quartic Polynomial (Degree 4)',
            degree: 4,
            maxTurningPoints: 3,
            approach: 'Factor if possible, may have complex features',
            category: 'quartic_graphing'
        };
    }

    analyzeEndBehavior(problem) {
        const { degree, leadingCoeff } = problem.parameters;
        
        let behaviorType;
        if (degree % 2 === 0) {
            behaviorType = leadingCoeff > 0 ? 'even_positive' : 'even_negative';
        } else {
            behaviorType = leadingCoeff > 0 ? 'odd_positive' : 'odd_negative';
        }

        const behavior = this.endBehaviorRules[behaviorType];

        return {
            type: 'End Behavior Analysis',
            degree: degree,
            leadingCoeff: leadingCoeff,
            degreeType: degree % 2 === 0 ? 'even' : 'odd',
            coeffType: leadingCoeff > 0 ? 'positive' : 'negative',
            behavior: behavior.behavior,
            notation: behavior.notation,
            symbol: behavior.symbol,
            rule: behavior.rule,
            category: 'end_behavior'
        };
    }

    analyzeZerosMultiplicity(problem) {
        const { zeros, multiplicities, factored } = problem.parameters;

        const analysis = zeros.map((zero, index) => {
            const mult = multiplicities[index];
            const behavior = mult % 2 === 1 ? 'crosses' : 'touches and turns';
            const multType = mult % 2 === 1 ? 'odd' : 'even';

            return {
                zero: zero,
                multiplicity: mult,
                multiplicityType: multType,
                behavior: behavior,
                description: `At x = ${zero}, multiplicity ${mult} (${multType}) → graph ${behavior}`
            };
        });

        return {
            type: 'Zeros and Multiplicity Analysis',
            zeros: zeros,
            multiplicities: multiplicities,
            analysis: analysis,
            totalDegree: multiplicities.reduce((sum, m) => sum + m, 0),
            category: 'zeros_analysis'
        };
    }

    analyzeTurningPoints(problem) {
        const { degree } = problem.parameters;
        const maxTurningPoints = degree - 1;

        return {
            type: 'Turning Points Analysis',
            degree: degree,
            maxTurningPoints: maxTurningPoints,
            rule: `Maximum turning points = degree - 1 = ${degree} - 1 = ${maxTurningPoints}`,
            note: 'Actual number may be less than maximum',
            findingMethod: 'Typically found using calculus (f\'(x) = 0) or graphing technology',
            category: 'turning_points'
        };
    }

    // MAIN SOLVER METHOD

    solvePolynomialProblem(config) {
        const { equation, scenario, parameters, problemType, context } = config;

        try {
            this.currentProblem = this.parsePolynomialProblem(equation, scenario, parameters, problemType, context);
            this.currentSolution = this.solvePolynomialProblem_Internal(this.currentProblem);
            this.solutionSteps = this.generatePolynomialSteps(this.currentProblem, this.currentSolution);
            this.generatePolynomialGraphData();
            this.generatePolynomialWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                graphData: this.graphData
            };

        } catch (error) {
            throw new Error(`Failed to solve polynomial problem: ${error.message}`);
        }
    }

    parsePolynomialProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = equation ? this.cleanMathExpression(equation) : '';

        if (problemType && this.polynomialTypes[problemType]) {
            return {
                originalInput: equation || `${problemType} problem`,
                cleanInput: cleanInput,
                type: problemType,
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        for (const [type, config] of Object.entries(this.polynomialTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(scenario)) {
                    return {
                        originalInput: equation || scenario,
                        cleanInput: cleanInput,
                        type: type,
                        scenario: scenario,
                        parameters: { ...parameters },
                        context: { ...context },
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        return {
            originalInput: equation || 'Polynomial graphing problem',
            cleanInput: cleanInput,
            type: 'general_polynomial',
            scenario: scenario,
            parameters: { ...parameters },
            context: { ...context },
            parsedAt: new Date().toISOString()
        };
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/\^/g, '^')
            .trim();
    }

    solvePolynomialProblem_Internal(problem) {
        const solver = this.polynomialTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for polynomial problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    generatePolynomialSteps(problem, solution) {
        let baseSteps = this.generateBasePolynomialSteps(problem, solution);

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
        const steps = [];

        // Step 1: Identify degree and leading coefficient
        steps.push({
            stepNumber: 1,
            step: 'Identify degree and leading coefficient',
            description: `Determine the degree and leading coefficient of the polynomial`,
            degree: solution.degree || problem.parameters.degree,
            leadingCoeff: solution.leadingCoeff || problem.parameters.leadingCoeff,
            reasoning: 'These determine the overall shape and end behavior',
            goalStatement: 'Foundation for analyzing the graph'
        });

        // Step 2: Determine end behavior
        if (solution.degree !== undefined && solution.leadingCoeff !== undefined) {
            const endBehaviorAnalysis = this.analyzeEndBehavior({
                parameters: {
                    degree: solution.degree,
                    leadingCoeff: solution.leadingCoeff
                }
            });

            steps.push({
                stepNumber: 2,
                step: 'Determine end behavior',
                description: 'Analyze what happens to the graph as x approaches ±∞',
                degreeType: endBehaviorAnalysis.degreeType,
                coeffType: endBehaviorAnalysis.coeffType,
                behavior: endBehaviorAnalysis.behavior,
                notation: endBehaviorAnalysis.notation,
                symbol: endBehaviorAnalysis.symbol,
                reasoning: 'End behavior is determined by degree parity and leading coefficient sign',
                rule: endBehaviorAnalysis.rule
            });
        }

        // Step 3: Find zeros
        if (solution.zeros || problem.parameters.zeros) {
            const zeros = solution.zeros || problem.parameters.zeros;
            steps.push({
                stepNumber: 3,
                step: 'Find zeros (x-intercepts)',
                description: 'Determine where the graph crosses or touches the x-axis',
                zeros: zeros,
                method: solution.factored ? 'From factored form' : 'By factoring or using methods',
                reasoning: 'Zeros show where the function equals zero',
                xIntercepts: zeros.map(z => `(${z}, 0)`)
            });
        }

        // Step 4: Determine multiplicities
        if (solution.multiplicities || problem.parameters.multiplicities) {
            const zeros = solution.zeros || problem.parameters.zeros;
            const multiplicities = solution.multiplicities || problem.parameters.multiplicities;
            
            const multAnalysis = zeros.map((z, i) => ({
                zero: z,
                multiplicity: multiplicities[i],
                type: multiplicities[i] % 2 === 1 ? 'odd' : 'even',
                behavior: multiplicities[i] % 2 === 1 ? 'crosses' : 'touches and turns'
            }));

            steps.push({
                stepNumber: 4,
                step: 'Determine multiplicity behavior',
                description: 'Analyze how the graph behaves at each zero',
                analysis: multAnalysis,
                reasoning: 'Odd multiplicity = cross, Even multiplicity = touch and turn',
                rule: 'Multiplicity determines crossing or touching behavior'
            });
        }

        // Step 5: Find y-intercept
        steps.push({
            stepNumber: 5,
            step: 'Find y-intercept',
            description: 'Evaluate f(0) to find where graph crosses y-axis',
            method: 'Substitute x = 0',
            reasoning: 'Y-intercept is always at x = 0',
            note: 'This gives one definite point on the graph'
        });

        // Step 6: Determine turning points
        if (solution.degree !== undefined) {
            const maxTurning = solution.degree - 1;
            steps.push({
                stepNumber: 6,
                step: 'Determine possible turning points',
                description: 'Calculate maximum number of hills and valleys',
                maxTurningPoints: maxTurning,
                formula: `degree - 1 = ${solution.degree} - 1 = ${maxTurning}`,
                reasoning: 'Turning points are local maximums and minimums',
                note: 'Actual number may be less than maximum'
            });
        }

        // Step 7: Sketch graph
        steps.push({
            stepNumber: 7,
            step: 'Sketch the graph',
            description: 'Plot key points and connect with smooth curve',
            keyPoints: 'Zeros, y-intercept, estimated turning points',
            technique: 'Draw smooth, continuous curve matching all features',
            reasoning: 'Polynomial graphs are always smooth and continuous',
            requirements: [
                'Match end behavior',
                'Pass through all zeros with correct behavior',
                'Be smooth (no sharp corners)',
                'Have appropriate number of turning points',
                'Pass through y-intercept'
            ]
        });

        // Step 8: Verify
        steps.push({
            stepNumber: 8,
            step: 'Verify graph features',
            description: 'Check that graph matches all characteristics',
            checklist: [
                'End behavior correct?',
                'All zeros marked and behavior correct?',
                'Y-intercept correct?',
                'Smooth curve?',
                'Turning points ≤ degree - 1?'
            ],
            reasoning: 'Verification catches errors before finalizing',
            finalAnswer: true
        });

        return steps;
    }

    generatePolynomialGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { degree, zeros, multiplicities, leadingCoeff } = this.currentSolution;

        this.graphData = {
            type: 'polynomial',
            degree: degree,
            zeros: zeros || [],
            multiplicities: multiplicities || [],
            leadingCoeff: leadingCoeff,
            endBehavior: this.determineEndBehavior(degree, leadingCoeff),
            yIntercept: this.calculateYIntercept(),
            maxTurningPoints: degree ? degree - 1 : null,
            graphPoints: this.generateGraphPoints(),
            features: this.summarizeGraphFeatures()
        };
    }

    determineEndBehavior(degree, leadingCoeff) {
        if (degree === undefined || leadingCoeff === undefined) return null;

        const isEven = degree % 2 === 0;
        const isPositive = leadingCoeff > 0;

        if (isEven && isPositive) return 'both up';
        if (isEven && !isPositive) return 'both down';
        if (!isEven && isPositive) return 'left down, right up';
        return 'left up, right down';
    }

    calculateYIntercept() {
        // This would evaluate f(0) based on the polynomial
        return null; // Placeholder
    }

    generateGraphPoints() {
        // Generate points for plotting
        return []; // Placeholder
    }

    summarizeGraphFeatures() {
        return {
            continuous: true,
            smooth: true,
            domain: 'All real numbers',
            range: 'Depends on degree and leading coefficient'
        };
    }

    generatePolynomialWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createPolynomialBasicsSection(),
            this.createEndBehaviorSection(),
            this.createZerosSection(),
            this.createTurningPointsSection(),
            this.createEnhancedStepsSection(),
            this.createGraphingGuideSection(),
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
            title: 'Enhanced Polynomial Graphing Mathematical Workbook',
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
            ['Problem Type', this.polynomialTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.polynomialTypes[this.currentProblem.type]?.category || 'polynomial_graphing'],
            ['Polynomial', this.currentProblem.cleanInput || 'Polynomial function'],
            ['Description', this.currentProblem.scenario || 'Graph the polynomial function']
        ];

        if (this.currentProblem.parameters.degree !== undefined) {
            problemData.push(['', '']);
            problemData.push(['Key Parameters', '']);
            problemData.push(['Degree', this.currentProblem.parameters.degree]);
            if (this.currentProblem.parameters.leadingCoeff !== undefined) {
                problemData.push(['Leading Coefficient', this.currentProblem.parameters.leadingCoeff]);
            }
            if (this.currentProblem.parameters.zeros) {
                problemData.push(['Zeros', this.currentProblem.parameters.zeros.join(', ')]);
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

        const category = 'polynomial_graphing';
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

    createPolynomialBasicsSection() {
        const lesson = this.lessons.polynomial_basics;

        const data = [
            ['Polynomial Basics', ''],
            ['', ''],
            ['Key Concepts', lesson.concepts.join('; ')],
            ['', ''],
            ['Theory', lesson.theory],
            ['', ''],
            ['Degree Classification', '']
        ];

        Object.entries(lesson.degreeClassification).forEach(([name, form]) => {
            data.push([name, form]);
        });

        return {
            title: 'Polynomial Function Basics',
            type: 'lesson',
            data: data
        };
    }

    createEndBehaviorSection() {
        const lesson = this.lessons.end_behavior;

        const data = [
            ['End Behavior', ''],
            ['', ''],
            ['Key Concepts', lesson.concepts.join('; ')],
            ['', ''],
            ['Theory', lesson.theory],
            ['', ''],
            ['End Behavior Rules', '']
        ];

        Object.entries(lesson.endBehaviorRules).forEach(([rule, behavior]) => {
            data.push([rule, behavior]);
        });

        return {
            title: 'End Behavior Analysis',
            type: 'lesson',
            data: data
        };
    }

    createZerosSection() {
        const lesson = this.lessons.zeros_and_multiplicity;

        const data = [
            ['Zeros and Multiplicity', ''],
            ['', ''],
            ['Key Concepts', lesson.concepts.join('; ')],
            ['', ''],
            ['Theory', lesson.theory],
            ['', ''],
            ['Multiplicity Behavior', '']
        ];

        Object.entries(lesson.multiplicityBehavior).forEach(([mult, behavior]) => {
            data.push([mult, behavior]);
        });

        return {
            title: 'Zeros and Multiplicity',
            type: 'lesson',
            data: data
        };
    }

    createTurningPointsSection() {
        const lesson = this.lessons.turning_points;

        const data = [
            ['Turning Points', ''],
            ['', ''],
            ['Key Concepts', lesson.concepts.join('; ')],
            ['', ''],
            ['Theory', lesson.theory],
            ['', ''],
            ['Turning Point Rules', '']
        ];

        Object.entries(lesson.turningPointRules).forEach(([degree, rule]) => {
            data.push([degree, rule]);
        });

        return {
            title: 'Turning Points and Local Extrema',
            type: 'lesson',
            data: data
        };
    }

    createEnhancedStepsSection() {
        if (!this.solutionSteps || this.solutionSteps.length === 0) return null;

        const stepsData = [];

        this.solutionSteps.forEach((step) => {
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

            if (step.degree !== undefined) {
                stepsData.push(['Degree', step.degree]);
            }
            if (step.leadingCoeff !== undefined) {
                stepsData.push(['Leading Coefficient', step.leadingCoeff]);
            }
            if (step.behavior) {
                stepsData.push(['End Behavior', step.behavior]);
            }
            if (step.symbol) {
                stepsData.push(['Symbol', step.symbol]);
            }
            if (step.zeros) {
                stepsData.push(['Zeros', step.zeros.join(', ')]);
            }
            if (step.analysis) {
                step.analysis.forEach((a, i) => {
                    stepsData.push([`Zero ${i + 1}`, `x = ${a.zero}, multiplicity ${a.multiplicity} (${a.type}) → ${a.behavior}`]);
                });
            }
            if (step.maxTurningPoints !== undefined) {
                stepsData.push(['Max Turning Points', step.maxTurningPoints]);
            }
            if (step.formula) {
                stepsData.push(['Formula', step.formula]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.rule) {
                stepsData.push(['Rule', step.rule]);
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

            // Enhanced explanations for detailed level
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
                const tips = step.errorPrevention.preventionTips;
                if (tips && tips.length > 0) {
                    stepsData.push(['Prevention Tips', tips.join('; ')]);
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

            // Checklist for verification step
            if (step.checklist) {
                stepsData.push(['Verification Checklist', '']);
                step.checklist.forEach((item, idx) => {
                    stepsData.push([`  ${idx + 1}`, item]);
                });
            }

            // Requirements for sketching step
            if (step.requirements) {
                stepsData.push(['Requirements', '']);
                step.requirements.forEach((req, idx) => {
                    stepsData.push([`  ${idx + 1}`, req]);
                });
            }

            stepsData.push(['', '']); // Spacing
        });

        return {
            title: `Enhanced Step-by-Step Solution (${this.explanationLevel} level)`,
            type: 'steps',
            data: stepsData
        };
    }

    createGraphingGuideSection() {
        const lesson = this.lessons.graphing_process;

        const data = [
            ['Complete Graphing Process', ''],
            ['', ''],
            ['Systematic Steps', '']
        ];

        lesson.graphingSteps.forEach((step, index) => {
            data.push([`Step ${index + 1}`, step]);
        });

        data.push(['', '']);
        data.push(['Key Checks', '']);

        Object.entries(lesson.keyChecks).forEach(([check, mark]) => {
            data.push([check, mark]);
        });

        data.push(['', '']);
        data.push(['Common Errors to Avoid', lesson.commonErrors.join('; ')]);

        return {
            title: 'Graphing Process Guide',
            type: 'guide',
            data: data
        };
    }

    createVerificationSection() {
        if (!this.currentSolution || !this.currentProblem) return null;

        const verificationData = [
            ['Verification Checklist', ''],
            ['', ''],
            ['Feature Verification', '']
        ];

        if (this.graphData) {
            verificationData.push(['Degree', this.graphData.degree || 'Not specified']);
            verificationData.push(['End Behavior', this.graphData.endBehavior || 'Not specified']);
            if (this.graphData.zeros) {
                verificationData.push(['Number of Zeros', this.graphData.zeros.length]);
                verificationData.push(['Zeros', this.graphData.zeros.join(', ')]);
            }
            if (this.graphData.maxTurningPoints !== null) {
                verificationData.push(['Max Turning Points', this.graphData.maxTurningPoints]);
            }
            verificationData.push(['Continuous', this.graphData.features?.continuous ? 'Yes ✓' : 'No']);
            verificationData.push(['Smooth', this.graphData.features?.smooth ? 'Yes ✓' : 'No']);
        }

        verificationData.push(['', '']);
        verificationData.push(['Graph Quality Checks', '']);
        verificationData.push(['No sharp corners', '✓']);
        verificationData.push(['No breaks or jumps', '✓']);
        verificationData.push(['Matches end behavior', 'Verify visually']);
        verificationData.push(['Correct zero behavior', 'Check crossing/touching']);
        verificationData.push(['Appropriate turning points', 'Count ≤ degree - 1']);

        return {
            title: 'Graph Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const applications = Object.values(this.realWorldProblems).slice(0, 4);

        if (applications.length === 0) return null;

        const appData = [
            ['Real-World Applications of Polynomial Graphing', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Polynomial Model', app.polynomial]);
            appData.push(['Context', app.context]);
            appData.push(['Degree', app.degree]);
            if (app.examples && app.examples[0]) {
                appData.push(['Example Use', app.examples[0]]);
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

        const notes = this.generatePolynomialPedagogicalNotes();

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

        const alternatives = this.generatePolynomialAlternativeMethods();

        const data = [
            ['Primary Method Used', alternatives.primaryMethod],
            ['', ''],
            ['Alternative Methods', '']
        ];

        alternatives.methods.forEach((method, index) => {
            data.push([`Method ${index + 1}`, method.name]);
            data.push(['Description', method.description]);
            data.push(['Advantages', method.advantages]);
            data.push(['Disadvantages', method.disadvantages]);
            data.push(['', '']);
        });

        data.push(['Method Comparison', alternatives.comparison]);

        return {
            title: 'Alternative Graphing Methods',
            type: 'alternatives',
            data: data
        };
    }

    createPracticeProblemsSection() {
        const problems = this.questionBank.byDifficulty;

        const practiceData = [
            ['Practice Problems', ''],
            ['', ''],
            ['Easy Problems', '']
        ];

        problems.easy.forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Medium Problems', '']);

        problems.medium.forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Hard Problems', '']);

        problems.hard.forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        return {
            title: 'Practice Problems',
            type: 'practice',
            data: practiceData
        };
    }

    generatePolynomialPedagogicalNotes() {
        return {
            objectives: [
                'Graph polynomial functions accurately',
                'Analyze end behavior from degree and leading coefficient',
                'Identify zeros and their multiplicities',
                'Determine behavior at each zero (cross vs touch)',
                'Count and estimate turning points',
                'Sketch smooth, continuous curves'
            ],
            keyConcepts: [
                'End behavior determined by degree parity and leading coefficient',
                'Odd multiplicity zeros cross x-axis',
                'Even multiplicity zeros touch and turn',
                'Maximum turning points = degree - 1',
                'Polynomial graphs are smooth and continuous',
                'Factored form reveals zeros directly'
            ],
            prerequisites: [
                'Understanding of functions and function notation',
                'Coordinate plane and graphing basics',
                'Factoring polynomials',
                'Solving polynomial equations',
                'Exponent rules',
                'Basic algebra skills'
            ],
            commonDifficulties: [
                'Confusing end behavior rules',
                'Forgetting to check multiplicity',
                'Drawing too many turning points',
                'Creating sharp corners instead of smooth curves',
                'Misunderstanding cross vs touch behavior',
                'Incorrect end behavior direction',
                'Forgetting y-intercept'
            ],
            teachingStrategies: [
                'Use four-case end behavior chart as reference',
                'Practice identifying degree parity separately from coefficient sign',
                'Use physical analogies (kite tails, bouncing ball)',
                'Color-code different features (zeros, turning points)',
                'Build from simple to complex (quadratic → cubic → higher)',
                'Emphasize verification checklist',
                'Use graphing technology to confirm hand sketches',
                'Connect to real-world polynomial models'
            ],
            extensions: [
                'Polynomial division and remainder theorem',
                'Complex zeros and fundamental theorem of algebra',
                'Optimization problems using polynomials',
                'Calculus: using derivatives to find exact turning points',
                'Polynomial approximations (Taylor series)',
                'Systems involving polynomial equations'
            ],
            assessment: [
                'Can student determine end behavior correctly?',
                'Does student identify all zeros?',
                'Does student apply multiplicity rules correctly?',
                'Is graph smooth and continuous?',
                'Are turning points within maximum limit?',
                'Does final graph match all analyzed features?'
            ]
        };
    }

    generatePolynomialAlternativeMethods() {
        return {
            primaryMethod: 'Systematic Feature Analysis',
            methods: [
                {
                    name: 'Systematic Feature Analysis',
                    description: 'Analyze degree, leading coefficient, end behavior, zeros, multiplicities, then sketch',
                    advantages: 'Comprehensive, reliable, teaches understanding',
                    disadvantages: 'Time-consuming for complex polynomials'
                },
                {
                    name: 'Technology-Assisted Graphing',
                    description: 'Use graphing calculator or software to generate graph, then analyze features',
                    advantages: 'Fast, accurate, handles complex polynomials',
                    disadvantages: 'Reduces conceptual understanding if used alone'
                },
                {
                    name: 'Table of Values Method',
                    description: 'Calculate y-values for many x-values, plot points, connect',
                    advantages: 'Straightforward, no advanced knowledge needed',
                    disadvantages: 'Tedious, may miss important features between points'
                },
                {
                    name: 'Transformation Method',
                    description: 'Start with parent function (x², x³), apply transformations',
                    advantages: 'Builds on prior knowledge, works well for simple cases',
                    disadvantages: 'Limited to transformable polynomials'
                },
                {
                    name: 'Calculus-Based Method',
                    description: 'Use derivatives to find exact critical points and inflection points',
                    advantages: 'Precise, reveals all turning points exactly',
                    disadvantages: 'Requires calculus knowledge'
                },
                {
                    name: 'Quick Sketch Method',
                    description: 'End behavior + zeros + rough turning points',
                    advantages: 'Very fast for rough graphs',
                    disadvantages: 'Less accurate, may miss details'
                }
            ],
            comparison: 'Systematic analysis is best for learning and understanding. Technology is best for complex polynomials or verification. Calculus methods provide exact results. Choose based on context, required accuracy, and available tools.'
        };
    }

    // ENHANCED EXPLANATION METHODS (similar structure to linear workbook)

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
            'Identify degree and leading coefficient': "We need to find the biggest power of x (that's the degree) and the number in front of it (leading coefficient). These tell us the overall shape!",
            'Determine end behavior': "This tells us what happens to the graph when we go really, really far to the left and right - does it go up or down?",
            'Find zeros (x-intercepts)': "Zeros are where the graph touches or crosses the bottom line (x-axis). These are super important spots!",
            'Determine multiplicity behavior': "Multiplicity tells us if the graph crosses through the x-axis or just bounces off it like a ball!",
            'Find y-intercept': "This is where the graph crosses the tall line on the left (y-axis). It's always at x = 0.",
            'Determine possible turning points': "Turning points are like hilltops and valley bottoms - places where the graph changes direction!",
            'Sketch the graph': "Now we connect all our important points with a smooth, curvy line - like drawing with a crayon, no sharp corners!",
            'Verify graph features': "Let's check our work like checking if we colored inside the lines!"
        };

        return ELI5Explanations[step.step] || "We're taking another step to understand our graph better!";
    }

    findRelevantAnalogy(step, problem) {
        const analogyMap = {
            'Determine end behavior': this.analogies.end_behavior?.ELI5,
            'Determine multiplicity behavior': this.analogies.multiplicity_crossing?.ELI5,
            'Sketch the graph': this.analogies.smooth_curves?.ELI5,
            'Determine possible turning points': this.analogies.turning_points?.ELI5
        };

        return analogyMap[step.step] || "Think of this like solving a puzzle - each step gives us another piece!";
    }

    convertToSimpleLanguage(description) {
        const simplifications = {
            'polynomial': 'math equation with x to different powers',
            'degree': 'highest power of x',
            'leading coefficient': 'the number in front of the biggest power',
            'end behavior': 'what happens at the far ends',
            'zeros': 'where the graph touches the bottom line',
            'x-intercepts': 'where graph crosses the x-axis',
            'y-intercept': 'where graph crosses the y-axis',
            'multiplicity': 'how many times a zero appears',
            'turning points': 'hills and valleys',
            'local maximum': 'hilltop',
            'local minimum': 'valley bottom',
            'smooth': 'no sharp corners',
            'continuous': 'no breaks or jumps',
            'factor': 'break into pieces that multiply',
            'evaluate': 'plug in and calculate'
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
            'Identify degree and leading coefficient': 'Circle the biggest power and the number in front of it',
            'Determine end behavior': 'Draw arrows at the ends showing which direction they go (up or down)',
            'Find zeros (x-intercepts)': 'Mark dots on the x-axis where the graph touches or crosses',
            'Determine multiplicity behavior': 'Draw a small curve at each zero - crossing through or bouncing off',
            'Find y-intercept': 'Mark a dot where the graph crosses the y-axis',
            'Determine possible turning points': 'Estimate where hills and valleys might be',
            'Sketch the graph': 'Connect all points with a smooth, flowing curve',
            'Verify graph features': 'Use a checklist and mark off each feature as you verify it'
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
        const category = this.polynomialTypes[problemType]?.category || 'polynomial_graphing';
        const mistakes = this.getCommonMistakesForStep(step.step, category);

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

    getCommonMistakesForStep(stepName, category) {
        // Map step names to error categories
        if (stepName.includes('end behavior')) {
            return this.commonMistakes.end_behavior?.['Determine end behavior'] || [];
        }
        if (stepName.includes('zeros')) {
            return this.commonMistakes.zeros_multiplicity?.['Find zeros'] || [];
        }
        if (stepName.includes('multiplicity')) {
            return this.commonMistakes.zeros_multiplicity?.['Determine multiplicity'] || [];
        }
        if (stepName.includes('turning')) {
            return this.commonMistakes.turning_points?.['Count turning points'] || [];
        }
        if (stepName.includes('sketch') || stepName.includes('graph')) {
            return this.commonMistakes.graphing?.['Sketch smooth curve'] || [];
        }

        return [];
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

    // HELPER METHODS

    getConceptualExplanation(step, problem) {
        const conceptualExplanations = {
            'Identify degree and leading coefficient': 'The degree tells us the maximum complexity of the graph, while the leading coefficient affects its orientation.',
            'Determine end behavior': 'End behavior is the long-run tendency of the graph, determined by its dominant term.',
            'Find zeros (x-intercepts)': 'Zeros are solutions to P(x) = 0, showing where the function value is zero.',
            'Determine multiplicity behavior': 'Multiplicity reveals the nature of contact between the graph and x-axis.',
            'Find y-intercept': 'The y-intercept is the starting height when x = 0.',
            'Determine possible turning points': 'Turning points are local extrema where the function changes direction.',
            'Sketch the graph': 'We synthesize all features into a continuous, smooth visual representation.',
            'Verify graph features': 'Verification ensures our graph accurately represents the polynomial.'
        };

        return conceptualExplanations[step.step] || 'This step contributes to our understanding of the polynomial\'s graph.';
    }

    getProceduralExplanation(step) {
        const proceduralExplanations = {
            'Identify degree and leading coefficient': '1. Find highest power of x\n2. Identify its coefficient',
            'Determine end behavior': '1. Check if degree is even or odd\n2. Check if leading coefficient is positive or negative\n3. Apply the four-case rule',
            'Find zeros (x-intercepts)': '1. Set P(x) = 0\n2. Factor if possible\n3. Solve for x',
            'Determine multiplicity behavior': '1. Count exponent on each factor\n2. Check if even or odd\n3. Apply cross/touch rule',
            'Find y-intercept': '1. Substitute x = 0\n2. Calculate P(0)',
            'Sketch the graph': '1. Plot all key points\n2. Follow end behavior\n3. Apply zero behavior\n4. Connect smoothly'
        };

        return proceduralExplanations[step.step] || 'Follow standard graphing procedures.';
    }

    getVisualExplanation(step, problem) {
        const visualExplanations = {
            'Determine end behavior': 'Draw arrows at far left and right showing direction',
            'Find zeros (x-intercepts)': 'Mark dots on x-axis at each zero',
            'Determine multiplicity behavior': 'Show crossing (odd) or touching (even) at each zero',
            'Sketch the graph': 'Draw smooth, flowing curve through all points'
        };

        return visualExplanations[step.step] || 'Visualize the mathematical relationships.';
    }

    getAlgebraicExplanation(step) {
        const algebraicExplanations = {
            'Identify degree and leading coefficient': 'For P(x) = aₙxⁿ + ... + a₁x + a₀, degree is n and leading coefficient is aₙ',
            'Determine end behavior': 'As |x| → ∞, P(x) ≈ aₙxⁿ dominates',
            'Find zeros (x-intercepts)': 'Solve P(x) = 0 using factoring or other algebraic methods',
            'Determine multiplicity behavior': 'Zero r with multiplicity m comes from factor (x - r)^m'
        };

        return algebraicExplanations[step.step] || 'Apply standard algebraic principles.';
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
                'polynomial': 'function',
                'degree': 'highest power',
                'leading coefficient': 'front number',
                'end behavior': 'far ends',
                'zeros': 'x-intercepts',
                'multiplicity': 'repetition',
                'turning points': 'direction changes'
            },
            ELI5: {
                'polynomial': 'math equation with x to different powers',
                'degree': 'biggest power of x',
                'leading coefficient': 'the number in front of the biggest power',
                'end behavior': 'what happens way out at the edges',
                'zeros': 'where graph touches bottom line',
                'multiplicity': 'how many times zero appears',
                'turning points': 'hilltops and valley bottoms'
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
            currentState: `We have completed: ${currentStep.step}`,
            nextGoal: `Next, we will: ${nextStep.description}`,
            why: `This is necessary to continue building our graph systematically`,
            howItHelps: `This brings us closer to the complete graph`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue our systematic analysis`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
    }

    generatePreventionTips(step, problemType) {
        const tips = {
            'Determine end behavior': [
                'Check BOTH degree parity AND leading coefficient sign',
                'Use the four-case chart as reference',
                'Draw arrows to visualize'
            ],
            'Determine multiplicity behavior': [
                'Count exponents carefully',
                'Remember: odd = cross, even = touch',
                'Visualize ball bouncing vs passing through'
            ],
            'Sketch the graph': [
                'No sharp corners - polynomials are smooth',
                'Stay continuous - no breaks',
                'Don\'t exceed maximum turning points'
            ]
        };

        return tips[step.step] || ['Work carefully and check your work'];
    }

    generateCheckPoints(step) {
        return [
            'Does this step make sense?',
            'Have I applied the rules correctly?',
            'Does this match what I know about polynomials?',
            'Should I verify this step?'
        ];
    }

    identifyWarningFlags(step, problemType) {
        const warnings = {
            'Determine end behavior': ['Both degree AND leading coefficient matter'],
            'Determine multiplicity behavior': ['Even ≠ cross, Odd ≠ touch'],
            'Sketch the graph': ['No sharp corners allowed', 'Must be continuous'],
            'Determine possible turning points': ['Cannot exceed degree - 1']
        };

        return warnings[step.step] || [];
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'Identify degree and leading coefficient': 'What is the highest power of x?',
            'Determine end behavior': 'Are the ends going the right directions?',
            'Find zeros (x-intercepts)': 'Did I find all zeros?',
            'Determine multiplicity behavior': 'Is this zero odd or even multiplicity?',
            'Sketch the graph': 'Is my curve smooth and continuous?',
            'Verify graph features': 'Does everything check out?'
        };

        return questions[step.step] || 'Does this step look correct?';
    }

    describeExpectedResult(step) {
        const expectations = {
            'Identify degree and leading coefficient': 'A number for degree and a number for leading coefficient',
            'Determine end behavior': 'Description like "both up" or "left down, right up"',
            'Find zeros (x-intercepts)': 'List of x-values where graph crosses or touches x-axis',
            'Determine multiplicity behavior': 'Each zero labeled as cross or touch',
            'Sketch the graph': 'Smooth, continuous curve matching all features'
        };

        return expectations[step.step] || 'Progress toward complete graph';
    }

    generateTroubleshootingTips(step) {
        return [
            'Review the relevant lesson section',
            'Check examples of similar problems',
            'Verify each sub-step',
            'Use graphing technology to check',
            'Ask: does this make sense?'
        ];
    }

    generateGuidingQuestions(step, problem) {
        const questions = {
            'Identify degree and leading coefficient': [
                'What powers of x appear?',
                'Which power is largest?',
                'What number multiplies the largest power?'
            ],
            'Determine end behavior': [
                'Is the degree even or odd?',
                'Is the leading coefficient positive or negative?',
                'Which of the four cases applies?'
            ],
            'Find zeros (x-intercepts)': [
                'Can I factor this polynomial?',
                'What values make P(x) = 0?',
                'Are there any obvious zeros?'
            ],
            'Sketch the graph': [
                'Where are all my key points?',
                'How should I connect them?',
                'Am I following all the rules?'
            ]
        };

        return questions[step.step] || ['What is the goal?', 'How do I achieve it?'];
    }

    generateProgressiveHints(step, problem) {
        const category = this.polynomialTypes[problem.type]?.category || 'polynomial_graphing';
        const stepKey = step.step.toLowerCase().replace(/\s+/g, '_').replace(/[()]/g, '');
        
        // Map step to hint category
        let hintCategory = 'graphing_process';
        if (stepKey.includes('end_behavior')) hintCategory = 'end_behavior';
        if (stepKey.includes('zeros') || stepKey.includes('intercept')) hintCategory = 'find_zeros';
        if (stepKey.includes('multiplicity')) hintCategory = 'multiplicity';
        if (stepKey.includes('turning')) hintCategory = 'turning_points';
        if (stepKey.includes('y_intercept')) hintCategory = 'y_intercept';

        const hintSet = this.hints[hintCategory] || this.hints.graphing_process;

        return {
            level1: hintSet.level1 || 'Think about what this step requires.',
            level2: hintSet.level2 || 'Consider the polynomial\'s properties.',
            level3: hintSet.level3 || 'Apply the appropriate rule or method.',
            level4: hintSet.level4 || 'Follow the systematic procedure.'
        };
    }

    breakIntoSubSteps(step) {
        const subSteps = {
            'Identify degree and leading coefficient': [
                'Write polynomial in standard form',
                'Identify highest power term',
                'Extract the degree',
                'Extract the coefficient'
            ],
            'Determine end behavior': [
                'Determine if degree is even or odd',
                'Determine if leading coefficient is positive or negative',
                'Match to one of four cases',
                'State the end behavior'
            ],
            'Find zeros (x-intercepts)': [
                'Set P(x) = 0',
                'Factor if possible',
                'Solve for x',
                'List all zeros'
            ],
            'Sketch the graph': [
                'Mark end behavior with arrows',
                'Plot all zeros',
                'Plot y-intercept',
                'Estimate turning points',
                'Connect with smooth curve'
            ]
        };

        return subSteps[step.step] || ['Understand', 'Apply', 'Verify'];
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try with a different polynomial of the same degree',
            practiceHint: 'Start with simpler examples to build confidence',
            extension: 'Try higher degree polynomials once comfortable'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What information do I have?',
            goal: 'What feature am I trying to determine?',
            strategy: 'Which method or rule applies?',
            execute: 'How do I carry out this step?',
            verify: 'Does my result make sense?'
        };
    }

    identifyDecisionPoints(step) {
        return [
            'Which method to use for finding zeros?',
            'How to handle complex polynomials?',
            'When to use technology vs hand calculations?'
        ];
    }

    suggestAlternativeMethods(step, problem) {
        return ['The chosen method is appropriate for this problem'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex}`,
            progression: 'We are systematically building the complete graph',
            relationship: 'Each step adds another feature'
        };
    }

    identifyPrerequisites(step, problemType) {
        const category = this.polynomialTypes[problemType]?.category || 'polynomial_graphing';
        const prereqs = this.prerequisites[category] || this.prerequisites.polynomial_graphing;
        
        return prereqs.skills;
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Identify degree and leading coefficient': ['degree', 'leading coefficient', 'polynomial', 'term'],
            'Determine end behavior': ['end behavior', 'infinity', 'limit', 'dominant term'],
            'Find zeros (x-intercepts)': ['zero', 'root', 'x-intercept', 'factor'],
            'Determine multiplicity behavior': ['multiplicity', 'even', 'odd', 'cross', 'touch'],
            'Find y-intercept': ['y-intercept', 'evaluate', 'substitute'],
            'Determine possible turning points': ['turning point', 'local maximum', 'local minimum', 'extrema'],
            'Sketch the graph': ['continuous', 'smooth', 'curve', 'sketch'],
            'Verify graph features': ['verify', 'check', 'validate']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPrompts(step) {
        return {
            before: `Before ${step.step}, what do I need to know?`,
            during: `While ${step.step}, what should I watch for?`,
            after: `After ${step.step}, how can I verify?`
        };
    }

    findRealWorldConnection(step, problem) {
        return 'Polynomial graphs model many real phenomena: projectile paths, business revenue, population growth, and engineering curves.';
    }
}

// Export the class
export default EnhancedPolynomialGraphingWorkbook;
