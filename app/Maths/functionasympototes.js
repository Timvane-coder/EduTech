// Enhanced Asymptotes Functions Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedAsymptotesFunctionsWorkbook {
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
        this.initializeAsymptoteSolvers();
        this.initializeAsymptoteLessons();
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
        this.initializeFunctionTypeDatabase();
        this.initializeAsymptoteBehaviorDatabase();
    }

    initializeMathSymbols() {
        return {
            // Mathematical operators
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±', 'sqrt': '√',
            'limit': 'lim', 'rightarrow': '→', 'leftarrow': '←',
            // Greek letters
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            'epsilon': 'ε',
            // Special symbols
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'perpendicular': '⊥', 'parallel': '∥',
            'partial': '∂', 'integral': '∫'
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
                asymptoteBg: '#e8f4f8',
                limitBg: '#f0e8f8'
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
                asymptoteBg: '#e0f2f7',
                limitBg: '#f3e5f5'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeAsymptoteSolvers() {
        this.asymptoteTypes = {
            // Rational Functions
            rational_simple: {
                patterns: [
                    /\(.*x.*\)\s*\/\s*\(.*x.*\)/,
                    /rational/i,
                    /\d*x?\s*\/\s*\(x.*\)/
                ],
                solver: this.solveRationalAsymptotes.bind(this),
                name: 'Rational Function Asymptotes',
                category: 'rational',
                description: 'Find asymptotes of rational functions f(x) = P(x)/Q(x)'
            },

            // Vertical Asymptotes
            vertical_asymptote: {
                patterns: [
                    /vertical.*asymptote/i,
                    /VA/i,
                    /denominator.*zero/i
                ],
                solver: this.findVerticalAsymptotes.bind(this),
                name: 'Vertical Asymptotes',
                category: 'vertical',
                description: 'Find vertical asymptotes where denominator = 0'
            },

            // Horizontal Asymptotes
            horizontal_asymptote: {
                patterns: [
                    /horizontal.*asymptote/i,
                    /HA/i,
                    /end.*behavior/i
                ],
                solver: this.findHorizontalAsymptotes.bind(this),
                name: 'Horizontal Asymptotes',
                category: 'horizontal',
                description: 'Find horizontal asymptotes using degree comparison'
            },

            // Slant/Oblique Asymptotes
            slant_asymptote: {
                patterns: [
                    /slant.*asymptote/i,
                    /oblique.*asymptote/i,
                    /slant/i,
                    /oblique/i
                ],
                solver: this.findSlantAsymptotes.bind(this),
                name: 'Slant (Oblique) Asymptotes',
                category: 'slant',
                description: 'Find slant asymptotes when degree(P) = degree(Q) + 1'
            },

            // Holes/Removable Discontinuities
            holes: {
                patterns: [
                    /hole/i,
                    /removable.*discontinuity/i,
                    /point.*discontinuity/i
                ],
                solver: this.findHoles.bind(this),
                name: 'Holes (Removable Discontinuities)',
                category: 'holes',
                description: 'Find holes where factors cancel'
            },

            // Exponential Asymptotes
            exponential_asymptote: {
                patterns: [
                    /e\^/i,
                    /exponential/i,
                    /\d+\^x/
                ],
                solver: this.findExponentialAsymptotes.bind(this),
                name: 'Exponential Function Asymptotes',
                category: 'exponential',
                description: 'Find asymptotes of exponential functions'
            },

            // Logarithmic Asymptotes
            logarithmic_asymptote: {
                patterns: [
                    /ln\(/i,
                    /log\(/i,
                    /logarithm/i
                ],
                solver: this.findLogarithmicAsymptotes.bind(this),
                name: 'Logarithmic Function Asymptotes',
                category: 'logarithmic',
                description: 'Find asymptotes of logarithmic functions'
            },

            // All Asymptotes (comprehensive analysis)
            all_asymptotes: {
                patterns: [
                    /find.*all.*asymptote/i,
                    /complete.*analysis/i,
                    /all.*asymptote/i
                ],
                solver: this.findAllAsymptotes.bind(this),
                name: 'Complete Asymptote Analysis',
                category: 'comprehensive',
                description: 'Find all asymptotes and discontinuities'
            },

            // Limits at Infinity
            limit_infinity: {
                patterns: [
                    /lim.*x.*infinity/i,
                    /limit.*infinity/i,
                    /end.*behavior/i
                ],
                solver: this.evaluateLimitAtInfinity.bind(this),
                name: 'Limits at Infinity',
                category: 'limits',
                description: 'Evaluate limits as x approaches ±∞'
            },

            // Limits at Point
            limit_point: {
                patterns: [
                    /lim.*x.*\d+/i,
                    /limit.*as.*x/i
                ],
                solver: this.evaluateLimitAtPoint.bind(this),
                name: 'Limits at a Point',
                category: 'limits',
                description: 'Evaluate limits as x approaches a specific value'
            },

            // Domain and Range
            domain_range: {
                patterns: [
                    /domain/i,
                    /range/i,
                    /domain.*range/i
                ],
                solver: this.findDomainRange.bind(this),
                name: 'Domain and Range',
                category: 'domain_range',
                description: 'Find domain and range considering asymptotes'
            }
        };
    }

    initializeAsymptoteLessons() {
        this.lessons = {
            vertical_asymptotes: {
                title: "Vertical Asymptotes",
                concepts: [
                    "Occur where denominator equals zero (and numerator doesn't)",
                    "Function approaches ±∞ near vertical asymptote",
                    "Graph never crosses a vertical asymptote",
                    "Represented as x = a (vertical line)",
                    "Indicate domain restrictions"
                ],
                theory: "A vertical asymptote at x = a means the function values grow without bound as x approaches a. This happens when the denominator of a rational function equals zero while the numerator does not.",
                keyFormulas: {
                    "Definition": "lim(x→a⁺) f(x) = ±∞ or lim(x→a⁻) f(x) = ±∞",
                    "For f(x) = P(x)/Q(x)": "VA at x = a if Q(a) = 0 and P(a) ≠ 0",
                    "Equation": "x = a (vertical line)"
                },
                findingSteps: [
                    "Factor numerator and denominator completely",
                    "Set denominator equal to zero",
                    "Solve for x values",
                    "Check if numerator is also zero (if yes, it's a hole, not VA)",
                    "Verify limit behavior on both sides"
                ],
                applications: [
                    "Cost functions (average cost as production → 0)",
                    "Concentration problems (dilution)",
                    "Physics: electric field near point charges",
                    "Economics: supply/demand discontinuities"
                ],
                graphBehavior: {
                    "Left side": "Function approaches +∞ or -∞",
                    "Right side": "Function approaches +∞ or -∞",
                    "Continuity": "Function is discontinuous at VA"
                }
            },

            horizontal_asymptotes: {
                title: "Horizontal Asymptotes",
                concepts: [
                    "Describe end behavior as x → ±∞",
                    "Function approaches a constant value y = b",
                    "Graph CAN cross horizontal asymptote (finite times)",
                    "Found by comparing degrees of P(x) and Q(x)",
                    "At most two horizontal asymptotes (one for +∞, one for -∞)"
                ],
                theory: "Horizontal asymptotes describe the limiting value a function approaches as x becomes very large (positive or negative). They're determined by the relative degrees and leading coefficients of numerator and denominator.",
                keyFormulas: {
                    "Definition": "lim(x→∞) f(x) = L or lim(x→-∞) f(x) = L",
                    "Degree Rules": "Three cases based on degree comparison",
                    "Equation": "y = b (horizontal line)"
                },
                degreeRules: {
                    "deg(P) < deg(Q)": "HA at y = 0 (x-axis)",
                    "deg(P) = deg(Q)": "HA at y = (leading coeff of P)/(leading coeff of Q)",
                    "deg(P) > deg(Q)": "No horizontal asymptote (slant asymptote possible)"
                },
                findingSteps: [
                    "Identify degree of numerator: n",
                    "Identify degree of denominator: m",
                    "Compare n and m",
                    "If n < m: HA is y = 0",
                    "If n = m: HA is y = a_n/b_m (ratio of leading coefficients)",
                    "If n > m: No HA (check for slant asymptote)"
                ],
                applications: [
                    "Population growth models (carrying capacity)",
                    "Chemical reactions (equilibrium concentration)",
                    "Learning curves (maximum performance)",
                    "Terminal velocity in physics"
                ],
                commonMistakes: [
                    "Thinking HA cannot be crossed (they can!)",
                    "Forgetting to check both +∞ and -∞",
                    "Miscounting degrees with missing terms"
                ]
            },

            slant_asymptotes: {
                title: "Slant (Oblique) Asymptotes",
                concepts: [
                    "Occur when degree(P) = degree(Q) + 1",
                    "Asymptote is a non-horizontal line y = mx + b",
                    "Found using polynomial long division or synthetic division",
                    "Function approaches this line as x → ±∞",
                    "Graph can cross slant asymptote"
                ],
                theory: "When the numerator's degree exceeds the denominator's degree by exactly one, the function approaches a slant (oblique) line rather than a horizontal line. This line is the quotient from dividing P(x) by Q(x).",
                keyFormulas: {
                    "Condition": "deg(P) = deg(Q) + 1",
                    "Method": "f(x) = quotient + remainder/Q(x)",
                    "Slant Asymptote": "y = quotient (linear function)"
                },
                findingSteps: [
                    "Verify deg(P) = deg(Q) + 1",
                    "Perform polynomial long division: P(x) ÷ Q(x)",
                    "Write result as quotient + remainder/divisor",
                    "Slant asymptote is y = quotient",
                    "As x → ±∞, remainder/Q(x) → 0"
                ],
                applications: [
                    "Projectile motion (asymptotic trajectory)",
                    "Economic profit functions",
                    "Circuit analysis (frequency response)",
                    "Fluid dynamics"
                ],
                verification: "Check: lim(x→±∞) [f(x) - (mx + b)] = 0"
            },

            holes: {
                title: "Holes (Removable Discontinuities)",
                concepts: [
                    "Occur when same factor cancels in numerator and denominator",
                    "Function undefined at hole, but limit exists",
                    "Represented as open circle on graph",
                    "Different from vertical asymptote (limit exists vs. infinite)",
                    "Can be 'removed' by defining function value at that point"
                ],
                theory: "A hole occurs when a factor (x - a) appears in both numerator and denominator. After cancellation, the function is defined everywhere except at x = a, where there's a 'missing point'.",
                keyFormulas: {
                    "Condition": "(x - a) is factor of both P(x) and Q(x)",
                    "Location": "x = a (where factor = 0)",
                    "y-coordinate": "Evaluate simplified function at x = a"
                },
                findingSteps: [
                    "Factor numerator P(x) completely",
                    "Factor denominator Q(x) completely",
                    "Identify common factors",
                    "Cancel common factors",
                    "x-values where factors canceled are holes",
                    "Find y-coordinate by evaluating simplified function"
                ],
                distinguishingFromVA: {
                    "Hole": "Factor cancels, limit exists (finite value)",
                    "Vertical Asymptote": "Factor doesn't cancel, limit = ±∞"
                },
                applications: [
                    "Engineering: transfer functions with pole-zero cancellation",
                    "Physics: removable singularities",
                    "Economics: correctable market imperfections"
                ]
            },

            rational_function_analysis: {
                title: "Complete Rational Function Analysis",
                concepts: [
                    "Rational function: f(x) = P(x)/Q(x) where P, Q are polynomials",
                    "Must analyze: domain, asymptotes, holes, intercepts, behavior",
                    "Systematic approach prevents missing features",
                    "Graph behavior near asymptotes is crucial",
                    "End behavior determined by degrees"
                ],
                theory: "A complete analysis of a rational function requires finding all key features: domain restrictions, all types of asymptotes, holes, intercepts, and analyzing behavior in each region.",
                completeAnalysisSteps: [
                    "1. Factor numerator and denominator completely",
                    "2. Find domain (exclude zeros of denominator)",
                    "3. Identify and cancel common factors (holes)",
                    "4. Find vertical asymptotes (remaining denominator zeros)",
                    "5. Find horizontal or slant asymptotes (degree comparison)",
                    "6. Find intercepts (x: set numerator = 0, y: evaluate at x = 0)",
                    "7. Analyze behavior near asymptotes and holes",
                    "8. Sketch graph using all information"
                ],
                domainFinding: "Domain = {x ∈ ℝ : Q(x) ≠ 0}",
                behaviorAnalysis: {
                    "Near VA": "Test values on both sides to determine ±∞",
                    "Near holes": "Evaluate limit using simplified function",
                    "Between features": "Test points to determine sign",
                    "At infinity": "Use horizontal/slant asymptote"
                }
            },

            exponential_asymptotes: {
                title: "Exponential Function Asymptotes",
                concepts: [
                    "Form: f(x) = a·bˣ + k or f(x) = a·eˣ + k",
                    "Horizontal asymptote at y = k (vertical shift)",
                    "No vertical asymptotes (defined for all real x)",
                    "Exponential growth (b > 1) or decay (0 < b < 1)",
                    "One-to-one function (passes horizontal line test)"
                ],
                theory: "Exponential functions approach a horizontal asymptote determined by the vertical shift. As x → -∞, bˣ → 0 for b > 1, and as x → +∞, bˣ → 0 for 0 < b < 1.",
                keyFormulas: {
                    "Standard form": "f(x) = a·bˣ + k",
                    "Natural exponential": "f(x) = a·eˣ + k",
                    "Horizontal asymptote": "y = k"
                },
                asymptoteBehavior: {
                    "If b > 1": "y = k is HA as x → -∞",
                    "If 0 < b < 1": "y = k is HA as x → +∞",
                    "Always": "Function approaches k but never equals k"
                },
                applications: [
                    "Population growth (carrying capacity k)",
                    "Radioactive decay (approaches 0)",
                    "Compound interest",
                    "Cooling/heating (Newton's Law)"
                ]
            },

            logarithmic_asymptotes: {
                title: "Logarithmic Function Asymptotes",
                concepts: [
                    "Form: f(x) = a·log_b(x - h) + k",
                    "Vertical asymptote at x = h (horizontal shift)",
                    "No horizontal asymptote (grows without bound)",
                    "Domain restricted to x > h",
                    "Inverse of exponential function"
                ],
                theory: "Logarithmic functions have a vertical asymptote at the value where the argument becomes zero. As x approaches this value from the right, f(x) → -∞.",
                keyFormulas: {
                    "Standard form": "f(x) = a·log_b(x - h) + k",
                    "Natural logarithm": "f(x) = a·ln(x - h) + k",
                    "Vertical asymptote": "x = h",
                    "Domain": "x > h"
                },
                findingSteps: [
                    "Identify the argument of logarithm",
                    "Set argument equal to zero",
                    "Solve for x to find VA",
                    "Domain is where argument > 0"
                ],
                applications: [
                    "pH scale (chemistry)",
                    "Richter scale (earthquakes)",
                    "Decibel scale (sound intensity)",
                    "Information theory (entropy)"
                ]
            },

            limits_and_asymptotes: {
                title: "Limits and Asymptotic Behavior",
                concepts: [
                    "Limits formalize asymptotic behavior",
                    "lim(x→a) f(x) = L means f approaches L as x approaches a",
                    "One-sided limits: left (x→a⁻) and right (x→a⁺)",
                    "Limits at infinity describe end behavior",
                    "Limit may exist even if function undefined at point"
                ],
                theory: "Limits provide the mathematical foundation for asymptotes. An asymptote exists when a limit is infinite or when the function approaches a specific line.",
                limitNotation: {
                    "Finite limit": "lim(x→a) f(x) = L",
                    "Infinite limit": "lim(x→a) f(x) = ±∞",
                    "Limit at infinity": "lim(x→±∞) f(x) = L",
                    "One-sided": "lim(x→a⁺) or lim(x→a⁻)"
                },
                connectionToAsymptotes: {
                    "Vertical asymptote": "lim(x→a) f(x) = ±∞",
                    "Horizontal asymptote": "lim(x→±∞) f(x) = L",
                    "Slant asymptote": "lim(x→±∞) [f(x) - (mx + b)] = 0"
                },
                evaluationMethods: [
                    "Direct substitution",
                    "Factoring and canceling",
                    "Rationalizing",
                    "L'Hôpital's Rule (for indeterminate forms)",
                    "Dominant term analysis (for limits at infinity)"
                ]
            },

            graphing_with_asymptotes: {
                title: "Graphing Functions with Asymptotes",
                concepts: [
                    "Asymptotes guide overall shape of graph",
                    "Graph approaches but doesn't touch VA",
                    "Graph may cross HA or slant asymptote",
                    "Holes shown as open circles",
                    "Behavior changes at asymptotes and intercepts"
                ],
                graphingSteps: [
                    "1. Find all asymptotes (vertical, horizontal, slant)",
                    "2. Find holes",
                    "3. Find intercepts (x and y)",
                    "4. Draw asymptotes as dashed lines",
                    "5. Plot intercepts and holes",
                    "6. Analyze behavior in each region",
                    "7. Test points between features",
                    "8. Sketch smooth curve following all constraints"
                ],
                behaviorChecking: {
                    "Near VA": "Determine if function → +∞ or -∞ on each side",
                    "Between VAs": "Check sign of function",
                    "At infinity": "Approach HA or slant asymptote",
                    "Near holes": "Graph continues smoothly with missing point"
                },
                sketchingTips: [
                    "Draw asymptotes first (dashed lines)",
                    "Mark intercepts and holes",
                    "Check end behavior",
                    "Ensure graph approaches asymptotes correctly",
                    "Verify continuity except at VAs and holes"
                ]
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            vertical_asymptotes: {
                'Finding zeros': [
                    'Forgetting to check if numerator also zero (hole vs VA)',
                    'Not factoring completely',
                    'Missing common factors'
                ],
                'Equation format': [
                    'Writing as y = a instead of x = a',
                    'Confusing with horizontal asymptote'
                ]
            },
            horizontal_asymptotes: {
                'Degree comparison': [
                    'Miscounting degrees',
                    'Forgetting about missing terms',
                    'Not considering leading coefficients when degrees equal'
                ],
                'Crossing': [
                    'Thinking HA cannot be crossed',
                    'Confusing with VA behavior'
                ]
            },
            slant_asymptotes: {
                'Long division': [
                    'Arithmetic errors in division',
                    'Stopping division too early',
                    'Not writing in descending powers'
                ],
                'Applicability': [
                    'Trying to find slant asymptote when deg(P) ≠ deg(Q) + 1',
                    'Confusing with horizontal asymptote'
                ]
            },
            holes: {
                'Identification': [
                    'Missing common factors',
                    'Confusing holes with vertical asymptotes',
                    'Not factoring completely'
                ],
                'Coordinates': [
                    'Finding x-coordinate only',
                    'Forgetting to evaluate y-coordinate',
                    'Using original function instead of simplified'
                ]
            },
            limits: {
                'Evaluation': [
                    'Direct substitution when undefined',
                    'Not recognizing indeterminate forms',
                    'Arithmetic errors'
                ],
                'One-sided limits': [
                    'Not checking both sides',
                    'Confusing left and right notation',
                    'Missing discontinuities'
                ]
            }
        };

        this.errorPrevention = {
            factor_completely: {
                reminder: 'Always factor numerator and denominator completely before canceling',
                method: 'Use factoring techniques systematically: GCF, grouping, special patterns'
            },
            check_both_num_den: {
                reminder: 'Check if both numerator and denominator are zero',
                method: 'If both zero → hole; if only denominator → VA'
            },
            degree_rules: {
                reminder: 'Use degree comparison rules for horizontal asymptotes',
                method: 'Count highest power in numerator and denominator'
            },
            verify_graphically: {
                reminder: 'Verify asymptotes by checking graph behavior',
                method: 'Use graphing technology to confirm analytical results'
            },
            one_sided_limits: {
                reminder: 'Always check limits from both sides for vertical asymptotes',
                method: 'Test values slightly less and slightly more than the point'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why asymptotes exist and their mathematical meaning',
                language: 'intuitive understanding of infinite behavior'
            },
            procedural: {
                focus: 'Step-by-step process to find asymptotes',
                language: 'algorithmic instructions'
            },
            visual: {
                focus: 'Graphical interpretation and visualization',
                language: 'spatial and visual descriptions'
            },
            algebraic: {
                focus: 'Formal limit definitions and algebraic techniques',
                language: 'precise mathematical notation'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple terms avoiding advanced calculus',
                detail: 'essential steps only',
                examples: 'simple rational functions'
            },
            intermediate: {
                vocabulary: 'standard calculus and precalculus terms',
                detail: 'main steps with explanations',
                examples: 'variety of function types'
            },
            ELI5: {
                vocabulary: 'explain asymptotes like approaching a boundary you never cross',
                detail: 'every concept explained with real-world analogies',
                examples: 'everyday situations',
                analogies: true,
                visualization: 'simple drawings and metaphors'
            },
            detailed: {
                vocabulary: 'full mathematical rigor with limit notation',
                detail: 'comprehensive analysis with proofs',
                examples: 'complex functions and special cases'
            },
            scaffolded: {
                vocabulary: 'progressive from basic to advanced',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced difficulty'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            average_cost: {
                scenario: "Average cost of production",
                function: "C(x) = (Fixed Cost + Variable Cost·x) / x",
                asymptote: "Vertical asymptote at x = 0 (can't produce 0 items), Horizontal asymptote at variable cost per unit",
                examples: [
                    "If fixed costs are $1000 and variable cost is $5/unit, C(x) = (1000 + 5x)/x",
                    "As production increases, average cost approaches $5 (HA at y = 5)",
                    "As production approaches 0, average cost explodes (VA at x = 0)"
                ],
                context: "Understanding asymptotes helps businesses optimize production levels"
            },
            concentration: {
                scenario: "Chemical concentration after dilution",
                function: "C(t) = initial amount / (initial volume + rate·t)",
                asymptote: "Horizontal asymptote at y = 0 (infinite dilution)",
                examples: [
                    "100g salt in 10L water, adding 2L/min: C(t) = 100/(10 + 2t)",
                    "As time increases, concentration approaches 0",
                    "Asymptote y = 0 represents complete dilution limit"
                ],
                context: "Asymptotes model equilibrium states in chemistry"
            },
            population_capacity: {
                scenario: "Population growth with carrying capacity",
                function: "P(t) = K / (1 + A·e^(-rt)) (logistic growth)",
                asymptote: "Horizontal asymptote at y = K (carrying capacity)",
                examples: [
                    "Island can support max 1000 rabbits: K = 1000",
                    "Population approaches but never exceeds 1000",
                    "HA at y = 1000 represents environmental limit"
                ],
                context: "Asymptotes model natural limits in biology and ecology"
            },
            radioactive_decay: {
                scenario: "Radioactive decay approaching zero",
                function: "N(t) = N₀·e^(-λt)",
                asymptote: "Horizontal asymptote at y = 0",
                examples: [
                    "Radioactive material decreases exponentially",
                    "Never reaches exactly zero, but approaches it",
                    "HA at y = 0 represents complete decay limit"
                ],
                context: "Exponential decay models in nuclear physics"
            },
            electrical_circuit: {
                scenario: "Current in RL circuit",
                function: "I(t) = V/R · (1 - e^(-Rt/L))",
                asymptote: "Horizontal asymptote at y = V/R (steady-state current)",
                examples: [
                    "Current approaches steady state exponentially",
                    "HA represents maximum current when transient dies out"
                ],
                context: "Asymptotes describe steady-state behavior in electrical engineering"
            },
            terminal_velocity: {
                scenario: "Falling object approaching terminal velocity",
                function: "v(t) = v_terminal · (1 - e^(-gt/v_terminal))",
                asymptote: "Horizontal asymptote at terminal velocity",
                examples: [
                    "Skydiver accelerates until air resistance balances gravity",
                    "Velocity approaches but never exceeds terminal velocity",
                    "HA represents force equilibrium"
                ],
                context: "Asymptotes model limiting speeds in physics"
            },
            enzyme_kinetics: {
                scenario: "Enzyme reaction rate (Michaelis-Menten)",
                function: "v = V_max·[S] / (K_m + [S])",
                asymptote: "Horizontal asymptote at y = V_max",
                examples: [
                    "As substrate concentration increases, reaction rate approaches maximum",
                    "HA at V_max represents enzyme saturation"
                ],
                context: "Asymptotes in biochemistry show saturation kinetics"
            },
            learning_curve: {
                scenario: "Learning/performance improvement",
                function: "P(t) = P_max · (1 - e^(-kt))",
                asymptote: "Horizontal asymptote at maximum performance",
                examples: [
                    "Skill improvement follows exponential growth to plateau",
                    "HA represents peak performance achievable"
                ],
                context: "Asymptotes model learning limits in education and psychology"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            vertical_asymptotes: {
                skills: ['Factoring polynomials', 'Solving equations', 'Understanding rational functions'],
                priorKnowledge: ['Function notation', 'Division by zero undefined', 'Polynomial zeros'],
                checkQuestions: [
                    "Factor: x² - 5x + 6",
                    "Solve: x² - 4 = 0",
                    "What happens when you divide by zero?"
                ]
            },
            horizontal_asymptotes: {
                skills: ['Polynomial degree', 'Leading coefficients', 'End behavior of polynomials'],
                priorKnowledge: ['Degree of polynomial', 'Limits at infinity concept', 'Dominant term'],
                checkQuestions: [
                    "What is the degree of 3x⁴ - 2x² + 7?",
                    "What is the leading coefficient of 5x³ + 2x - 1?",
                    "As x → ∞, which term dominates: x² or x³?"
                ]
            },
            slant_asymptotes: {
                skills: ['Polynomial long division', 'Degree comparison', 'Quotient and remainder'],
                priorKnowledge: ['Division algorithm', 'Polynomial division', 'Limits'],
                checkQuestions: [
                    "Divide: (x² + 3x + 2) ÷ (x + 1)",
                    "What is the quotient when dividing x³ by x²?",
                    "What is a remainder?"
                ]
            },
            holes: {
                skills: ['Factoring completely', 'Canceling common factors', 'Limits'],
                priorKnowledge: ['Common factors', 'Simplifying fractions', 'Continuity'],
                checkQuestions: [
                    "Factor completely: x² - 1",
                    "Simplify: (x² - 4)/(x - 2)",
                    "What is a common factor?"
                ]
            },
            limits: {
                skills: ['Limit notation', 'Substitution', 'Algebraic manipulation'],
                priorKnowledge: ['Function evaluation', 'Indeterminate forms', 'One-sided limits'],
                checkQuestions: [
                    "What does lim(x→2) f(x) mean?",
                    "Evaluate: lim(x→3) (x + 1)",
                    "What is 0/0 called?"
                ]
            },
            rational_functions: {
                skills: ['All asymptote types', 'Factoring', 'Graphing'],
                priorKnowledge: ['Domain restrictions', 'Function behavior', 'Intercepts'],
                checkQuestions: [
                    "What is the domain of f(x) = 1/(x - 2)?",
                    "Find y-intercept of f(x) = 3x/x²",
                    "How do you find x-intercepts?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            boundary_fence: {
                description: "Asymptote as an invisible fence",
                analogy: "Like a force field the graph can approach but never touch (VA) or can cross but tends toward (HA)",
                visualization: "Draw asymptote as dashed line, graph curves toward it",
                suitableFor: ['vertical', 'horizontal'],
                explanation: "The graph follows the asymptote's guidance like a magnetic pull"
            },
            limiting_behavior: {
                description: "Approaching a limit without reaching it",
                analogy: "Like walking toward a wall, getting closer and closer but never actually touching",
                visualization: "Show sequence of points getting arbitrarily close",
                suitableFor: ['all_types'],
                explanation: "Mathematically, we can get infinitely close without ever arriving"
            },
            end_behavior: {
                description: "What happens 'in the long run'",
                analogy: "Like a road that eventually levels out or becomes vertical",
                visualization: "Zoom out to see long-term trend",
                suitableFor: ['horizontal', 'slant'],
                explanation: "As x gets very large, the function settles into predictable behavior"
            },
            vertical_barrier: {
                description: "Vertical asymptote as impenetrable wall",
                analogy: "Like a cliff edge - the function shoots up or down as you approach",
                visualization: "Draw vertical line, show function values growing without bound",
                suitableFor: ['vertical'],
                explanation: "Function cannot cross VA; values become infinite"
            },
            hole_in_graph: {
                description: "Missing point in otherwise continuous graph",
                analogy: "Like a bridge with one plank missing - you could cross if it were there",
                visualization: "Open circle on graph where point should be",
                suitableFor: ['holes'],
                explanation: "Function defined everywhere except one missing point"
            },
            dominant_term: {
                description: "Highest power term dominates as x → ∞",
                analogy: "Like in a race, the fastest runner pulls ahead as distance increases",
                visualization: "Graph multiple terms, show highest power overtaking others",
                suitableFor: ['horizontal', 'limits'],
                explanation: "For large x, lower degree terms become negligible"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "Find vertical asymptotes: f(x) = 1/(x - 3)",
                    solution: "x = 3",
                    steps: ["Set denominator = 0", "x - 3 = 0", "x = 3"],
                    difficulty: "easy"
                },
                {
                    problem: "Find horizontal asymptote: f(x) = 2x/(x + 1)",
                    solution: "y = 2",
                    steps: ["deg(num) = deg(den) = 1", "HA is ratio of leading coefficients", "y = 2/1 = 2"],
                    difficulty: "easy"
                },
                {
                    problem: "Find HA: f(x) = 3/(x + 2)",
                    solution: "y = 0",
                    steps: ["deg(num) = 0 < deg(den) = 1", "HA is y = 0"],
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "Find all asymptotes: f(x) = (x² - 1)/(x - 1)",
                    solution: "Hole at (1, 2), no VA, no HA (slant asymptote y = x + 1)",
                    steps: [
                        "Factor: (x + 1)(x - 1)/(x - 1)",
                        "Cancel common factor: hole at x = 1",
                        "Find y: f(1) after canceling = 1 + 1 = 2",
                        "Simplified: f(x) = x + 1",
                        "No VA, no HA (degree 1 polynomial)",
                        "Slant asymptote y = x + 1"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "Find asymptotes: f(x) = (2x² + 1)/(x² - 4)",
                    solution: "VA at x = ±2, HA at y = 2",
                    steps: [
                        "Factor denominator: (x - 2)(x + 2)",
                        "Set = 0: x = 2, x = -2 (VA)",
                        "Degrees equal: 2 = 2",
                        "HA: y = 2/1 = 2"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "Find slant asymptote: f(x) = (x² + 2x - 1)/(x - 1)",
                    solution: "y = x + 3",
                    steps: [
                        "deg(num) = 2, deg(den) = 1",
                        "deg difference = 1, so slant asymptote exists",
                        "Divide: x² + 2x - 1 by x - 1",
                        "Quotient: x + 3",
                        "Slant asymptote: y = x + 3"
                    ],
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "Complete analysis: f(x) = (x³ - x)/(x² - 4)",
                    solution: "VA at x = ±2, hole at x = 0 would need factoring check, slant asymptote",
                    steps: [
                        "Factor num: x(x² - 1) = x(x - 1)(x + 1)",
                        "Factor den: (x - 2)(x + 2)",
                        "No common factors",
                        "VA at x = 2, x = -2",
                        "deg(num) = 3, deg(den) = 2",
                        "Slant asymptote exists",
                        "Divide to find y = x"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "Find all discontinuities: f(x) = (x² - 2x)/(x² - x - 2)",
                    solution: "Hole at (0, 0), VA at x = 2, HA at y = 1",
                    steps: [
                        "Factor num: x(x - 2)",
                        "Factor den: (x - 2)(x + 1)",
                        "Common factor x - 2: hole at x = 2",
                        "Simplify: x/(x + 1)",
                        "VA at x = -1",
                        "Equal degrees: HA y = 1/1 = 1",
                        "Hole y-value: 2/(2 + 1) = 2/3",
                        "Hole at (2, 2/3)"
                    ],
                    difficulty: "hard"
                }
            ],
            byType: {
                vertical: [
                    { problem: "f(x) = 1/(x - 5)", solution: "x = 5" },
                    { problem: "f(x) = (x + 1)/(x² - 9)", solution: "x = ±3" },
                    { problem: "f(x) = 2/(x² + 4)", solution: "None (no real zeros)" }
                ],
                horizontal: [
                    { problem: "f(x) = (3x + 2)/(x - 1)", solution: "y = 3" },
                    { problem: "f(x) = 5/(2x + 7)", solution: "y = 0" },
                    { problem: "f(x) = (4x² - 1)/(2x² + 3)", solution: "y = 2" }
                ],
                slant: [
                    { problem: "f(x) = (x² + 1)/x", solution: "y = x" },
                    { problem: "f(x) = (x² - 4)/(x + 1)", solution: "y = x - 1" }
                ],
                holes: [
                    { problem: "f(x) = (x² - 4)/(x - 2)", solution: "(2, 4)" },
                    { problem: "f(x) = (x² - x - 6)/(x - 3)", solution: "(3, 5)" }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            ha_crossing: {
                misconception: "Graph cannot cross horizontal asymptote",
                reality: "Graph CAN cross HA (finite times); it only approaches HA as x → ±∞",
                correctiveExample: "f(x) = x/(x² + 1) crosses its HA y = 0 at x = 0",
                commonIn: ['horizontal']
            },
            va_crossing: {
                misconception: "Graph might cross vertical asymptote",
                reality: "Graph NEVER crosses VA; function undefined there",
                correctiveExample: "f(x) = 1/x has VA at x = 0; graph split into two pieces",
                commonIn: ['vertical']
            },
            degree_rules_backwards: {
                misconception: "If deg(num) > deg(den), HA is y = 0",
                reality: "If deg(num) < deg(den), HA is y = 0. If deg(num) > deg(den), NO HA",
                correctiveExample: "f(x) = x²/x has no HA (degree 1 > 0 after simplifying)",
                commonIn: ['horizontal']
            },
            holes_vs_va: {
                misconception: "Every denominator zero is a vertical asymptote",
                reality: "If numerator also zero (factor cancels), it's a HOLE, not VA",
                correctiveExample: "f(x) = (x - 2)/(x - 2) has hole at x = 2, not VA",
                commonIn: ['holes', 'vertical']
            },
            slant_when: {
                misconception: "Slant asymptotes exist whenever deg(num) > deg(den)",
                reality: "Slant asymptotes only when deg(num) = deg(den) + 1 (exactly one more)",
                correctiveExample: "f(x) = x³/x has deg diff = 2, so no asymptote at all (parabola)",
                commonIn: ['slant']
            },
            limit_equals_value: {
                misconception: "lim(x→a) f(x) = f(a) always",
                reality: "Limit and function value can differ; limit may exist when f(a) doesn't",
                correctiveExample: "f(x) = (x² - 1)/(x - 1) undefined at x = 1, but lim(x→1) = 2",
                commonIn: ['holes', 'limits']
            },
            infinity_is_number: {
                misconception: "Infinity is a very large number",
                reality: "Infinity is a concept of unboundedness, not a number",
                correctiveExample: "∞ + 1 = ∞; can't do arithmetic with infinity like regular numbers",
                commonIn: ['limits', 'vertical']
            },
            missing_both_sides: {
                misconception: "Only need to check one side of vertical asymptote",
                reality: "Must check BOTH sides; behavior can be different (+ ∞ vs -∞)",
                correctiveExample: "f(x) = 1/x: as x→0⁺, f→+∞; as x→0⁻, f→-∞",
                commonIn: ['vertical', 'limits']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            vertical_asymptote: {
                analogy: "A cliff edge",
                explanation: "As you approach the edge, the ground drops away infinitely. You can't cross it - the function shoots up to infinity or down to negative infinity.",
                suitableFor: ['vertical'],
                ELI5: "Imagine walking toward the edge of a very tall cliff. The closer you get, the more dangerous it is. You can never walk past the edge because there's nothing there! The graph does the same - it goes up and up (or down and down) forever as it gets close to the vertical asymptote, but never crosses it."
            },
            horizontal_asymptote: {
                analogy: "A ceiling (that you can sometimes poke through)",
                explanation: "Like a soft ceiling that guides where you're heading in the long run. You might bump through it occasionally, but eventually you settle near it.",
                suitableFor: ['horizontal'],
                ELI5: "Think of a balloon floating up in a room. It rises and rises, but eventually it gets close to the ceiling and just stays there, barely touching it. That's like a horizontal asymptote - it shows where the graph is heading as x gets really big. Sometimes the graph can cross this line (unlike a vertical asymptote), but far out, it gets close to it and stays nearby."
            },
            slant_asymptote: {
                analogy: "A tilted runway",
                explanation: "Like a slanted path that the function follows more and more closely as you go further out, even though it might deviate nearby.",
                suitableFor: ['slant'],
                ELI5: "Imagine a toy car on a track. The track is slightly tilted. When the car is close to you, it might wobble around. But if you watch it drive far away down the track, it follows the tilt of the track more and more closely. A slant asymptote is like that tilted track - it shows the general direction the graph follows when x gets very large."
            },
            hole: {
                analogy: "A missing step on a staircase",
                explanation: "Everything works fine except for one missing point. You could easily fill it in, and the function would be continuous.",
                suitableFor: ['holes'],
                ELI5: "Imagine a connect-the-dots picture where someone forgot to draw one single dot, but you can see exactly where it should go. The line goes smoothly before and after the missing dot. A hole in a graph is like that - there's one point missing, but if you filled it in, the graph would be perfect and connected."
            },
            limit_approaching: {
                analogy: "Walking toward a destination but taking half-steps",
                explanation: "If you walk half the remaining distance each time, you get closer and closer but never quite arrive. That's approaching a limit.",
                suitableFor: ['limits'],
                ELI5: "Imagine you're walking to a door, but each step you take is only half the distance you have left. First step: you go halfway there. Second step: half of what's left. Third step: half again. You get closer and closer and CLOSER, but you never actually reach the door. That's what a limit is - getting as close as you want, but maybe never actually arriving."
            },
            end_behavior: {
                analogy: "A river eventually flowing to the ocean",
                explanation: "No matter how windy the river, it eventually flows toward the ocean (asymptote) in a predictable direction.",
                suitableFor: ['horizontal', 'slant'],
                ELI5: "Think of a river that twists and turns through mountains. Up close, it zigzags all over. But if you look from far away in an airplane, you see it's generally flowing in one direction toward the ocean. That's what horizontal and slant asymptotes show - where the graph is generally heading, even if it's doing wiggly things up close."
            },
            rational_function: {
                analogy: "A fraction that behaves based on top and bottom",
                explanation: "Like a fraction with variables - what happens depends on whether the numerator or denominator 'wins' (has higher degree).",
                suitableFor: ['rational'],
                ELI5: "Imagine you're sharing cookies. If you have 10 cookies (numerator) and 2 friends (denominator), everyone gets 5. But what if you have 10 cookies and 100 friends? Everyone gets almost nothing (approaches 0). What if you have 100 cookies and 2 friends? Everyone gets tons! Rational functions work the same way - what's on top and bottom determine what happens as x gets big."
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            vertical_asymptotes: {
                level1: "Where is the function undefined?",
                level2: "Set the denominator equal to zero and solve for x",
                level3: "But check if the numerator is also zero at that point!",
                level4: "If numerator also zero → hole. If only denominator → VA."
            },
            horizontal_asymptotes: {
                level1: "What happens as x gets very large?",
                level2: "Compare the degrees of the numerator and denominator",
                level3: "Three cases: deg(num) < deg(den), deg(num) = deg(den), deg(num) > deg(den)",
                level4: "Use degree rules: <→y=0, =→ratio of leading coeff, >→no HA"
            },
            slant_asymptotes: {
                level1: "Is the numerator's degree exactly one more than denominator's?",
                level2: "If deg(num) = deg(den) + 1, slant asymptote exists",
                level3: "Perform polynomial long division",
                level4: "The quotient (ignoring remainder) is the slant asymptote equation"
            },
            holes: {
                level1: "Are there any common factors you can cancel?",
                level2: "Factor both numerator and denominator completely",
                level3: "Look for factors that appear in both - these create holes",
                level4: "Hole x-coordinate where factor = 0; y-coordinate from simplified function"
            },
            limits: {
                level1: "Can you substitute the value directly?",
                level2: "If direct substitution works, that's your limit!",
                level3: "If you get 0/0 or ∞/∞, try factoring or dominant term",
                level4: "Factor and cancel, or for ∞, divide by highest power"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Find VA of f(x) = 1/(x - 3)",
                    answer: "x = 3",
                    assesses: "vertical_asymptotes",
                    difficulty: "basic"
                },
                {
                    question: "Find HA of f(x) = (2x + 1)/(x - 5)",
                    answer: "y = 2",
                    assesses: "horizontal_asymptotes",
                    difficulty: "basic"
                },
                {
                    question: "Does f(x) = (x² - 4)/(x - 2) have a VA at x = 2?",
                    answer: "No, it has a hole at x = 2",
                    assesses: "holes_vs_va",
                    difficulty: "intermediate"
                },
                {
                    question: "Find slant asymptote of f(x) = (x² + 1)/x",
                    answer: "y = x",
                    assesses: "slant_asymptotes",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "If deg(numerator) < deg(denominator), the horizontal asymptote is:",
                    options: ["y = 0", "y = 1", "No HA", "Cannot determine"],
                    correct: "y = 0",
                    explanation: "When numerator has lower degree, it grows slower than denominator, so ratio → 0"
                },
                {
                    question: "A vertical asymptote occurs when:",
                    options: [
                        "Numerator = 0",
                        "Denominator = 0 (and numerator ≠ 0)",
                        "Both numerator and denominator = 0",
                        "Degree of numerator > degree of denominator"
                    ],
                    correct: "Denominator = 0 (and numerator ≠ 0)",
                    explanation: "VA happens when denominator is zero but numerator isn't (division by zero)"
                },
                {
                    question: "Can a graph cross its horizontal asymptote?",
                    options: ["Never", "Yes, finite times", "Only once", "Yes, infinite times"],
                    correct: "Yes, finite times",
                    explanation: "HA describes end behavior; graph can cross it but eventually approaches it"
                }
            ],
            summative: [
                {
                    question: "Complete analysis of f(x) = (x² - 2x - 3)/(x² - 9)",
                    answer: "VA at x = -3, hole at (3, 2/3), HA at y = 1",
                    showsWork: true,
                    rubric: {
                        factor: 2,
                        identify_hole: 2,
                        find_va: 2,
                        find_ha: 2,
                        find_hole_y: 2
                    }
                },
                {
                    question: "Find all asymptotes of f(x) = (2x³ - x)/(x² - 4)",
                    answer: "VA at x = ±2, slant asymptote y = 2x",
                    showsWork: true,
                    rubric: {
                        factor: 1,
                        find_va: 2,
                        recognize_slant: 2,
                        perform_division: 3,
                        state_slant: 2
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "Find VA: f(x) = 1/(x + 5)",
                    "Find HA: f(x) = 3/x",
                    "Find HA: f(x) = (2x - 1)/(x + 3)",
                    "Does f(x) = (x - 1)/(x - 1) have VA at x = 1?"
                ],
                medium: [
                    "Find all asymptotes: f(x) = (x² + 1)/(x² - 1)",
                    "Find slant asymptote: f(x) = (x² - 2)/x",
                    "Identify hole location: f(x) = (x² - 1)/(x - 1)",
                    "Find HA: f(x) = (3x² + 2x)/(x² - 5)"
                ],
                hard: [
                    "Complete analysis: f(x) = (x³ - 8)/(x² - 4)",
                    "Find asymptotes: f(x) = (x⁴ - 1)/(x³ + x²)",
                    "Analyze: f(x) = (2x² - x - 1)/(x² + x - 6)",
                    "Find all features: f(x) = (x³ - x)/(x² - 2x - 3)"
                ]
            },
            byObjective: {
                canFindVerticalAsymptotes: [
                    "f(x) = 1/(x - 7)",
                    "f(x) = (x + 2)/(x² - 16)",
                    "f(x) = 3/(x² + 1)",
                    "f(x) = (x - 1)/(x² - 5x + 6)"
                ],
                canFindHorizontalAsymptotes: [
                    "f(x) = 2/x",
                    "f(x) = (3x + 1)/(x - 2)",
                    "f(x) = (x² + 1)/(2x² - 3)",
                    "f(x) = (5x³)/(x² + 1)"
                ],
                canFindSlantAsymptotes: [
                    "f(x) = (x² + 1)/x",
                    "f(x) = (x² - 3x + 2)/(x - 1) [after checking for holes]",
                    "f(x) = (2x² + x - 1)/(x + 2)"
                ],
                canIdentifyHoles: [
                    "f(x) = (x² - 9)/(x - 3)",
                    "f(x) = (x² + 3x + 2)/(x + 1)",
                    "f(x) = (x³ - x)/(x² - 1)"
                ],
                canCompleteAnalysis: [
                    "f(x) = (2x + 1)/(x² - 4)",
                    "f(x) = (x² - x - 2)/(x² - 1)",
                    "f(x) = (x³ + 1)/(x² + 2x + 1)"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "finding_asymptotes": "Start with factoring, then systematically check VA, holes, HA/slant",
                "vertical_asymptotes": "Set denominator = 0, check numerator",
                "horizontal_asymptotes": "Compare degrees of P(x) and Q(x)",
                "slant_asymptotes": "If deg(P) = deg(Q) + 1, divide",
                "holes": "Factor and cancel common factors",
                "limits_at_point": "Try direct substitution first",
                "limits_at_infinity": "Divide by highest power"
            },
            whenToUseWhat: {
                factoring: "Always start by factoring completely",
                degree_comparison: "For horizontal asymptotes",
                polynomial_division: "For slant asymptotes (when applicable)",
                limit_notation: "For formal analysis and verification",
                graphing: "To verify analytical results",
                test_points: "To determine behavior between asymptotes"
            },
            methodSelection: {
                factorsToConsider: [
                    "Degrees of numerator and denominator",
                    "Presence of common factors",
                    "Complexity of polynomials",
                    "Whether finding specific asymptote type or complete analysis"
                ],
                generalApproach: [
                    "1. Factor numerator and denominator completely",
                    "2. Identify and cancel common factors (holes)",
                    "3. Find vertical asymptotes (remaining denominator zeros)",
                    "4. Find horizontal or slant asymptotes (degree comparison)",
                    "5. Verify with limits and/or graphing",
                    "6. Check behavior near asymptotes"
                ]
            },
            optimizationTips: {
                "Factor first": "Always factor completely before finding any asymptotes",
                "Check for holes": "Don't miss common factors that create holes instead of VAs",
                "Use degree rules": "Memorize the three HA degree cases",
                "Verify graphically": "Use technology to confirm results",
                "Test behavior": "Check limits from both sides of VAs"
            },
            systematicAnalysis: {
                step1: "Write function, identify P(x) and Q(x)",
                step2: "Factor both completely",
                step3: "Cancel common factors, note holes",
                step4: "Set remaining denominator = 0 for VAs",
                step5: "Compare degrees for HA/slant",
                step6: "If slant, perform division",
                step7: "Find intercepts",
                step8: "Analyze behavior in each region",
                step9: "Sketch graph"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Vertical Asymptote Sprint",
                    timeLimit: 90,
                    problems: [
                        "f(x) = 1/(x - 2)",
                        "f(x) = 3/(x + 5)",
                        "f(x) = (x + 1)/(x² - 4)",
                        "f(x) = 2/(x² + 1)",
                        "f(x) = x/(x² - 9)"
                    ]
                },
                {
                    name: "Horizontal Asymptote Challenge",
                    timeLimit: 120,
                    problems: [
                        "f(x) = 5/x",
                        "f(x) = (3x + 2)/(x - 1)",
                        "f(x) = (x² + 1)/(x² - 4)",
                        "f(x) = (2x³)/(x² + 5)",
                        "f(x) = (x - 1)/(3x + 2)"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Asymptote Detective",
                    problem: "A function has VA at x = 2 and x = -3, and HA at y = 5. What could the function be?",
                    hint: "Think about what denominator creates those VAs and what degree ratio gives that HA",
                    sampleSolution: "f(x) = 5(x² + a)/[(x - 2)(x + 3)] for any constant a"
                },
                {
                    name: "Hole or VA?",
                    problem: "Create a function with a hole at x = 3 and VA at x = -2",
                    solution: "f(x) = (x - 3)/[(x - 3)(x + 2)] = 1/(x + 2) with hole at (3, 1/5)"
                },
                {
                    name: "Slant Designer",
                    problem: "Create a function with slant asymptote y = 2x + 1",
                    hint: "Use polynomial division backwards",
                    sampleSolution: "f(x) = (2x² + x + c)/(x + d) for appropriate constants"
                }
            ],
            applications: [
                {
                    scenario: "Average Cost Minimization",
                    problem: "C(x) = (1000 + 5x)/x represents average cost. Find asymptotes and interpret.",
                    equation: "C(x) = (1000 + 5x)/x",
                    solution: "VA at x = 0 (can't produce nothing), HA at y = 5 (variable cost per unit)",
                    interpretation: "As production increases, average cost approaches $5/unit"
                },
                {
                    scenario: "Drug Concentration",
                    problem: "Drug concentration C(t) = 10t/(t² + 4). Find peak concentration time and long-term behavior.",
                    analysis: "HA at y = 0 (drug eventually clears), no VA, find max by calculus",
                    solution: "Concentration approaches 0 as t → ∞"
                },
                {
                    scenario: "Population Model",
                    problem: "P(t) = 1000/(1 + 9e^(-0.5t)). What's the carrying capacity?",
                    solution: "HA at y = 1000 as t → ∞ (maximum population)"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "f(x) = (x² - 4)/(x - 2)",
                        "Set denominator = 0: x = 2",
                        "Therefore VA at x = 2" // ERROR: didn't check for cancellation
                    ],
                    correctAnswer: "Hole at (2, 4), no VA",
                    errorType: "Missed common factor; should have factored numerator"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "f(x) = (x³)/(x²)",
                        "deg(num) = 3, deg(den) = 2",
                        "deg(num) > deg(den) by 1",
                        "Therefore slant asymptote exists"
// ERROR: didn't simplify first
                    ],
                    correctAnswer: "Simplifies to f(x) = x (no asymptotes, just linear)",
                    errorType: "Should simplify before finding asymptotes"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "f(x) = (2x² + 3)/(x² - 1)",
                        "Degrees equal",
                        "HA at y = 2/1 = 2", // Actually correct!
                        "Graph cannot cross y = 2" // ERROR!
                    ],
                    correctAnswer: "HA is y = 2, but graph CAN cross it",
                    errorType: "Misconception that HA cannot be crossed"
                }
            ]
        };
    }

    initializeFunctionTypeDatabase() {
        this.functionTypes = {
            rational_polynomial: {
                form: "f(x) = P(x)/Q(x) where P, Q are polynomials",
                asymptoteTypes: ['vertical', 'horizontal', 'slant', 'holes'],
                characteristics: "Most versatile; asymptotes determined by degrees",
                examples: ["1/x", "x/(x² - 1)", "(x² + 1)/x"]
            },
            exponential: {
                form: "f(x) = a·bˣ + k",
                asymptoteTypes: ['horizontal'],
                characteristics: "Always has HA at y = k, no VA",
                examples: ["2ˣ", "3·e^x - 5", "4(0.5)ˣ + 2"]
            },
            logarithmic: {
                form: "f(x) = a·log_b(x - h) + k",
                asymptoteTypes: ['vertical'],
                characteristics: "Always has VA at x = h, no HA",
                examples: ["ln(x)", "log(x - 3)", "2log₂(x + 1) - 4"]
            },
            trigonometric: {
                form: "tan(x), cot(x), sec(x), csc(x)",
                asymptoteTypes: ['vertical'],
                characteristics: "Periodic VAs, no HA",
                examples: ["tan(x)", "csc(2x)", "sec(x - π/4)"]
            },
            piecewise_rational: {
                form: "Different rational expressions on different intervals",
                asymptoteTypes: ['vertical', 'horizontal', 'jump_discontinuities'],
                characteristics: "May have different asymptotes in different regions",
                examples: ["f(x) = {1/x if x < 0; x² if x ≥ 0}"]
            }
        };
    }

    initializeAsymptoteBehaviorDatabase() {
        this.asymptoteBehavior = {
            vertical_approach: {
                both_positive: "lim(x→a⁺) = +∞ and lim(x→a⁻) = +∞",
                both_negative: "lim(x→a⁺) = -∞ and lim(x→a⁻) = -∞",
                opposite_signs: "lim(x→a⁺) = +∞ and lim(x→a⁻) = -∞ (or vice versa)",
                determination: "Evaluate sign of f(x) on test points near asymptote"
            },
            horizontal_approach: {
                from_above: "f(x) > L as x → ±∞, approaches from above",
                from_below: "f(x) < L as x → ±∞, approaches from below",
                oscillating: "f(x) crosses HA multiple times while approaching it",
                determination: "Evaluate f(x) - L for large |x|"
            },
            slant_approach: {
                above_or_below: "Function approaches slant asymptote from above or below",
                determination: "Evaluate f(x) - (mx + b) for large |x|"
            },
            crossing_behavior: {
                vertical: "Never crosses (undefined at VA)",
                horizontal: "May cross finite times (approaches as x → ±∞)",
                slant: "May cross finite times (approaches as x → ±∞)"
            },
            multiplicity_effects: {
                simple_zero: "(x - a)¹ in denominator: opposite signs on sides of VA",
                even_multiplicity: "(x - a)² in denominator: same sign on both sides of VA",
                impact: "Higher multiplicity changes behavior near VA"
            }
        };
    }

    // MAIN SOLVER METHOD
    solveAsymptoteProblem(config) {
        const { equation, functionType, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseAsymptoteProblem(equation, functionType, problemType, context);

            // Solve the problem
            this.currentSolution = this.solveAsymptoteProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateAsymptoteSteps(this.currentProblem, this.currentSolution);

            // Generate graph data
            this.generateAsymptoteGraphData();

            // Generate workbook
            this.generateAsymptoteWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                asymptotes: this.currentSolution?.asymptotes,
                holes: this.currentSolution?.holes
            };

        } catch (error) {
            throw new Error(`Failed to solve asymptote problem: ${error.message}`);
        }
    }

    parseAsymptoteProblem(equation, functionType = null, problemType = null, context = {}) {
        const cleanInput = equation ? this.cleanMathExpression(equation) : '';

        // If problem type specified, use it
        if (problemType && this.asymptoteTypes[problemType]) {
            return {
                originalInput: equation,
                cleanInput: cleanInput,
                type: problemType,
                functionType: functionType,
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect asymptote problem type
        for (const [type, config] of Object.entries(this.asymptoteTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(equation)) {
                    return {
                        originalInput: equation,
                        cleanInput: cleanInput,
                        type: type,
                        functionType: functionType || 'rational',
                        context: { ...context },
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        // Default to comprehensive analysis for rational functions
        return {
            originalInput: equation,
            cleanInput: cleanInput,
            type: 'all_asymptotes',
            functionType: functionType || 'rational',
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
            .replace(/∞/g, 'infinity')
            .replace(/→/g, '->')
            .trim();
    }

    solveAsymptoteProblem_Internal(problem) {
        const solver = this.asymptoteTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for asymptote problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // ASYMPTOTE SOLVERS

    solveRationalAsymptotes(problem) {
        // This is for general rational function f(x) = P(x)/Q(x)
        // Parse numerator and denominator from input

        return {
            type: 'Rational Function',
            approach: 'Factor numerator and denominator, then find all asymptotes systematically',
            steps: [
                'Factor P(x) and Q(x) completely',
                'Cancel common factors (holes)',
                'Find vertical asymptotes (Q(x) = 0)',
                'Find horizontal/slant asymptotes (degree comparison)',
                'Analyze behavior'
            ],
            category: 'rational'
        };
    }

    findVerticalAsymptotes(problem) {
        return {
            type: 'Vertical Asymptotes',
            definition: 'x = a where Q(a) = 0 and P(a) ≠ 0',
            method: 'Set denominator equal to zero and solve',
            limitNotation: 'lim(x→a) f(x) = ±∞',
            warningCheck: 'Verify numerator ≠ 0 (else it\'s a hole)',
            category: 'vertical',
            graphBehavior: 'Function approaches ±∞ on either side'
        };
    }

    findHorizontalAsymptotes(problem) {
        return {
            type: 'Horizontal Asymptotes',
            definition: 'y = L where lim(x→±∞) f(x) = L',
            method: 'Compare degrees of numerator and denominator',
            degreeRules: {
                'deg(P) < deg(Q)': 'HA at y = 0',
                'deg(P) = deg(Q)': 'HA at y = (leading coeff P)/(leading coeff Q)',
                'deg(P) > deg(Q)': 'No horizontal asymptote'
            },
            category: 'horizontal',
            note: 'Graph can cross HA (unlike VA)'
        };
    }

    findSlantAsymptotes(problem) {
        return {
            type: 'Slant (Oblique) Asymptotes',
            definition: 'y = mx + b where deg(P) = deg(Q) + 1',
            method: 'Perform polynomial long division: f(x) = quotient + remainder/Q(x)',
            slantAsymptote: 'y = quotient',
            limitBehavior: 'lim(x→±∞) [f(x) - (mx + b)] = 0',
            category: 'slant',
            verification: 'As x → ±∞, remainder/Q(x) → 0, so f(x) → quotient'
        };
    }

    findHoles(problem) {
        return {
            type: 'Holes (Removable Discontinuities)',
            definition: 'Point where factor (x - a) cancels from numerator and denominator',
            method: 'Factor completely, identify common factors, cancel them',
            location: {
                xCoordinate: 'Where cancelled factor equals zero',
                yCoordinate: 'Evaluate simplified function at that x'
            },
            category: 'holes',
            limitBehavior: 'lim(x→a) f(x) exists (finite value) even though f(a) undefined',
            graphing: 'Show as open circle at (a, y-value)'
        };
    }

    findExponentialAsymptotes(problem) {
        return {
            type: 'Exponential Function Asymptotes',
            form: 'f(x) = a·bˣ + k',
            horizontalAsymptote: 'y = k',
            behavior: 'If b > 1: HA as x → -∞; If 0 < b < 1: HA as x → +∞',
            verticalAsymptote: 'None (exponential defined for all real x)',
            category: 'exponential',
            applications: 'Growth/decay models, population, radioactive decay'
        };
    }

    findLogarithmicAsymptotes(problem) {
        return {
            type: 'Logarithmic Function Asymptotes',
            form: 'f(x) = a·log_b(x - h) + k',
            verticalAsymptote: 'x = h (where argument = 0)',
            horizontalAsymptote: 'None (logarithm grows without bound)',
            domain: 'x > h',
            category: 'logarithmic',
            behavior: 'As x → h⁺, f(x) → -∞ (for a > 0)'
        };
    }

    findAllAsymptotes(problem) {
        return {
            type: 'Complete Asymptote Analysis',
            includes: [
                'Vertical asymptotes',
                'Horizontal or slant asymptotes',
                'Holes (removable discontinuities)',
                'Domain and range',
                'Intercepts',
                'Behavior analysis'
            ],
            systematicApproach: [
                '1. Factor completely',
                '2. Find holes (cancel common factors)',
                '3. Find vertical asymptotes',
                '4. Find horizontal or slant asymptotes',
                '5. Find intercepts',
                '6. Analyze behavior in each region',
                '7. Sketch graph'
            ],
            category: 'comprehensive'
        };
    }

    evaluateLimitAtInfinity(problem) {
        return {
            type: 'Limit at Infinity',
            notation: 'lim(x→∞) f(x) or lim(x→-∞) f(x)',
            method: 'Divide all terms by highest power of x',
            rationalFunctionRule: 'Compare degrees (same as HA rules)',
            exponentialRule: 'bˣ → 0 as x → -∞ (if b > 1), → ∞ as x → +∞',
            category: 'limits',
            connection: 'Limits at infinity determine horizontal asymptotes'
        };
    }

    evaluateLimitAtPoint(problem) {
        return {
            type: 'Limit at a Point',
            notation: 'lim(x→a) f(x)',
            methods: [
                'Direct substitution (if continuous)',
                'Factoring and canceling (if 0/0)',
                'Rationalizing',
                'L\'Hôpital\'s Rule (for indeterminate forms)'
            ],
            oneSidedLimits: {
                right: 'lim(x→a⁺) f(x)',
                left: 'lim(x→a⁻) f(x)',
                existence: 'Limit exists iff left limit = right limit'
            },
            category: 'limits'
        };
    }

    findDomainRange(problem) {
        return {
            type: 'Domain and Range with Asymptotes',
            domain: {
                definition: 'Set of all x-values where function is defined',
                forRational: 'Exclude values where denominator = 0',
                notation: '{x ∈ ℝ : Q(x) ≠ 0}'
            },
            range: {
                definition: 'Set of all possible y-values',
                method: 'Consider asymptotes, intercepts, and behavior',
                horizontalAsymptoteEffect: 'If HA at y = L, often L not in range'
            },
            category: 'domain_range'
        };
    }

    // STEP GENERATION

    generateAsymptoteSteps(problem, solution) {
        let baseSteps = this.generateBaseAsymptoteSteps(problem, solution);

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

    generateBaseAsymptoteSteps(problem, solution) {
        const category = this.asymptoteTypes[problem.type]?.category;

        switch(category) {
            case 'vertical':
                return this.generateVerticalAsymptoteSteps(problem, solution);
            case 'horizontal':
                return this.generateHorizontalAsymptoteSteps(problem, solution);
            case 'slant':
                return this.generateSlantAsymptoteSteps(problem, solution);
            case 'holes':
                return this.generateHoleSteps(problem, solution);
            case 'comprehensive':
                return this.generateComprehensiveAnalysisSteps(problem, solution);
            default:
                return this.generateGenericAsymptoteSteps(problem, solution);
        }
    }

    generateVerticalAsymptoteSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify denominator',
            description: 'Find the denominator Q(x) of the rational function',
            reasoning: 'Vertical asymptotes occur where denominator equals zero',
            goalStatement: 'We need to find where Q(x) = 0'
        });

        steps.push({
            stepNumber: 2,
            step: 'Factor denominator',
            description: 'Factor Q(x) completely',
            reasoning: 'Factoring helps identify all zeros clearly',
            algebraicRule: 'Use factoring techniques: GCF, grouping, formulas'
        });

        steps.push({
            stepNumber: 3,
            step: 'Set denominator equal to zero',
            description: 'Set each factor of Q(x) equal to zero',
            reasoning: 'Zeros of denominator are candidates for vertical asymptotes',
            warningFlag: 'Must check if numerator also zero!'
        });

        steps.push({
            stepNumber: 4,
            step: 'Check numerator',
            description: 'For each x where Q(x) = 0, check if P(x) = 0 also',
            reasoning: 'If both zero → hole. If only denominator zero → VA',
            criticalDecision: 'This determines hole vs vertical asymptote'
        });

        steps.push({
            stepNumber: 5,
            step: 'Write vertical asymptotes',
            description: 'List all vertical asymptotes as x = a',
            finalAnswer: true,
            format: 'Vertical line equations: x = value'
        });

        return steps;
    }

    generateHorizontalAsymptoteSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify degrees',
            description: 'Find degree of numerator P(x) and degree of denominator Q(x)',
            reasoning: 'Horizontal asymptote depends on degree comparison',
            goalStatement: 'Compare deg(P) with deg(Q)'
        });

        steps.push({
            stepNumber: 2,
            step: 'Apply degree rule',
            description: 'Use the three-case degree rule',
            degreeRules: {
                'Case 1': 'If deg(P) < deg(Q): HA is y = 0',
                'Case 2': 'If deg(P) = deg(Q): HA is y = (lead coeff P)/(lead coeff Q)',
                'Case 3': 'If deg(P) > deg(Q): No horizontal asymptote'
            },
            reasoning: 'Degree determines end behavior'
        });

        steps.push({
            stepNumber: 3,
            step: 'Determine which case applies',
            description: 'Compare the degrees found in Step 1',
            criticalDecision: 'This tells us which rule to use'
        });

        steps.push({
            stepNumber: 4,
            step: 'Find horizontal asymptote',
            description: 'Apply the appropriate case rule',
            finalAnswer: true,
            format: 'Horizontal line: y = value (or "No HA")',
            note: 'Graph may cross this line, unlike vertical asymptotes'
        });

        return steps;
    }

    generateSlantAsymptoteSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Check degree condition',
            description: 'Verify that deg(P) = deg(Q) + 1',
            reasoning: 'Slant asymptote only exists when numerator degree exceeds denominator by exactly 1',
            criticalCheck: 'If this condition not met, no slant asymptote exists'
        });

        steps.push({
            stepNumber: 2,
            step: 'Set up polynomial long division',
            description: 'Divide P(x) by Q(x) using long division',
            reasoning: 'Division gives quotient (asymptote) plus remainder',
            reminder: 'Write polynomials in descending order of powers'
        });

        steps.push({
            stepNumber: 3,
            step: 'Perform division',
            description: 'Execute the long division algorithm',
            process: 'Divide, multiply, subtract, bring down, repeat',
            visualHint: 'Careful with signs and alignment'
        });

        steps.push({
            stepNumber: 4,
            step: 'Identify quotient',
            description: 'The quotient (linear expression) is the slant asymptote',
            form: 'y = mx + b',
            reasoning: 'As x → ±∞, remainder/Q(x) → 0, so f(x) → quotient'
        });

        steps.push({
            stepNumber: 5,
            step: 'Write slant asymptote equation',
            description: 'Express the slant asymptote as y = mx + b',
            finalAnswer: true,
            verification: 'Can verify by checking lim(x→∞) [f(x) - (mx + b)] = 0',
            note: 'Graph approaches this line as x → ±∞'
        });

        return steps;
    }

    generateHoleSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Factor numerator completely',
            description: 'Factor P(x) into irreducible factors',
            reasoning: 'Need to see all factors to identify common ones',
            technique: 'Use all factoring methods: GCF, grouping, formulas'
        });

        steps.push({
            stepNumber: 2,
            step: 'Factor denominator completely',
            description: 'Factor Q(x) into irreducible factors',
            reasoning: 'Must have both factored to find common factors',
            parallelTask: 'Same techniques as for numerator'
        });

        steps.push({
            stepNumber: 3,
            step: 'Identify common factors',
            description: 'Find factors that appear in both numerator and denominator',
            reasoning: 'Common factors create holes when cancelled',
            visualHint: 'Circle matching factors in numerator and denominator'
        });

        steps.push({
            stepNumber: 4,
            step: 'Cancel common factors',
            description: 'Cancel the common factors to simplify',
            reasoning: 'This reveals the simplified function',
            warningFlag: 'Note where cancelled factors equal zero - these are holes'
        });

        steps.push({
            stepNumber: 5,
            step: 'Find x-coordinate of hole',
            description: 'Set cancelled factor equal to zero and solve',
            reasoning: 'This gives the x-value where hole occurs',
            example: 'If (x - 3) cancelled, hole at x = 3'
        });

        steps.push({
            stepNumber: 6,
            step: 'Find y-coordinate of hole',
            description: 'Evaluate the SIMPLIFIED function at the hole x-value',
            reasoning: 'This gives the y-value where the hole would be',
            criticalNote: 'Use simplified function, not original',
            finalAnswer: true,
            format: 'Hole at (x-value, y-value)'
        });

        return steps;
    }

    generateComprehensiveAnalysisSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Factor completely',
            description: 'Factor both numerator P(x) and denominator Q(x) completely',
            reasoning: 'Factoring is foundation for all subsequent analysis',
            goalStatement: 'Get P(x) and Q(x) in factored form'
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify and cancel common factors',
            description: 'Find factors common to numerator and denominator',
            reasoning: 'Common factors create holes (removable discontinuities)',
            output: 'List holes with coordinates, simplified function'
        });

        steps.push({
            stepNumber: 3,
            step: 'Find vertical asymptotes',
            description: 'Set remaining (uncancelled) denominator factors to zero',
            reasoning: 'These are the true vertical asymptotes',
            format: 'x = a, x = b, ...',
            verification: 'Numerator should not be zero at these x-values'
        });

        steps.push({
            stepNumber: 4,
            step: 'Determine horizontal or slant asymptote',
            description: 'Compare degrees of original P(x) and Q(x)',
            reasoning: 'Degree comparison determines end behavior',
            decisionTree: {
                'deg(P) < deg(Q)': 'HA at y = 0',
                'deg(P) = deg(Q)': 'HA at y = ratio of leading coefficients',
                'deg(P) = deg(Q) + 1': 'Slant asymptote (perform division)',
                'deg(P) > deg(Q) + 1': 'No asymptote'
            }
        });

        steps.push({
            stepNumber: 5,
            step: 'Find intercepts',
            description: 'Find x-intercepts (set numerator = 0) and y-intercept (evaluate at x = 0)',
            reasoning: 'Intercepts help with graphing',
            xIntercept: 'Zeros of simplified numerator (excluding holes)',
            yIntercept: 'f(0) if 0 in domain'
        });

        steps.push({
            stepNumber: 6,
            step: 'Analyze behavior near vertical asymptotes',
            description: 'Determine if function approaches +∞ or -∞ on each side of each VA',
            reasoning: 'Knowing behavior guides accurate graphing',
            method: 'Test points slightly to left and right of each VA'
        });

        steps.push({
            stepNumber: 7,
            step: 'Find domain',
            description: 'Domain excludes vertical asymptotes and holes',
            format: 'Set notation or interval notation',
            reasoning: 'Shows where function is defined'
        });

        steps.push({
            stepNumber: 8,
            step: 'Summarize all features',
            description: 'Compile complete list of asymptotes, holes, intercepts, domain',
            finalAnswer: true,
            comprehensiveOutput: {
                'Vertical Asymptotes': 'List all VAs',
                'Horizontal/Slant Asymptote': 'State HA or slant',
                'Holes': 'List coordinates',
                'Intercepts': 'x and y intercepts',
                'Domain': 'Set of valid x-values'
            }
        });

        return steps;
    }

    generateGenericAsymptoteSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Asymptote analysis',
            description: 'Analyze function for asymptotes',
            reasoning: 'Apply appropriate asymptote-finding technique',
            solution: solution
        }];
    }

    // ENHANCED EXPLANATION METHODS (adapted for asymptotes)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            // Multiple explanation formats
            explanations: {
                conceptual: this.getConceptualExplanationAsymptote(step, problem),
                procedural: this.getProceduralExplanationAsymptote(step),
                visual: this.getVisualExplanationAsymptote(step, problem),
                algebraic: this.getAlgebraicExplanationAsymptote(step)
            },

            // Difficulty-adapted explanations
            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            // Learning support
            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisitesAsymptote(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyAsymptote(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        // Add thinking prompts if enabled
        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPromptsAsymptote(step);
        }

        // Add self-check questions if enabled
        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestionAsymptote(step);
        }

        // Add real-world connections if enabled
        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findRealWorldConnectionAsymptote(step, problem);
        }

        return enhanced;
    }

    getConceptualExplanationAsymptote(step, problem) {
        const conceptualExplanations = {
            'Identify denominator': 'The denominator determines where the function is undefined, which leads to vertical asymptotes.',
            'Factor denominator': 'Factoring reveals the structure and helps us see all potential asymptotes clearly.',
            'Set denominator equal to zero': 'Where denominator equals zero, we have division by zero, causing infinite behavior.',
            'Check numerator': 'If both numerator and denominator are zero, the infinity is "removable" (hole), not a true asymptote.',
            'Identify degrees': 'The relative "power" of numerator vs denominator determines long-term behavior.',
            'Apply degree rule': 'As x gets huge, the highest power terms dominate, determining the horizontal asymptote.',
            'Perform division': 'Division separates the function into a slant line plus a vanishing remainder.',
            'Factor numerator completely': 'Complete factoring reveals all relationships between numerator and denominator.',
            'Identify common factors': 'Common factors represent values where both top and bottom are zero - these cancel out.',
            'Find x-coordinate of hole': 'Where the cancelled factor equals zero, there\'s a "missing point" in the graph.',
            'Find y-coordinate of hole': 'The y-value shows where the point WOULD be if the function were continuous there.'
        };

        return conceptualExplanations[step.step] || 'This step advances our understanding of the function\'s asymptotic behavior.';
    }

    getProceduralExplanationAsymptote(step) {
        const procedural = {
            'Factor denominator': '1. Look for GCF\n2. Try grouping\n3. Check for special patterns (difference of squares, etc.)\n4. Factor completely',
            'Set denominator equal to zero': '1. Take factored denominator\n2. Set each factor = 0\n3. Solve for x\n4. List all solutions',
            'Check numerator': '1. Evaluate numerator at each denominator zero\n2. If numerator also zero → hole\n3. If numerator non-zero → VA',
            'Apply degree rule': '1. Count highest power in numerator\n2. Count highest power in denominator\n3. Compare: <, =, or >\n4. Apply corresponding rule',
            'Perform division': '1. Write polynomials in standard form\n2. Divide leading terms\n3. Multiply back and subtract\n4. Bring down next term\n5. Repeat until done',
            'Identify common factors': '1. Write factored forms side by side\n2. Circle matching factors\n3. Note which factors appear in both\n4. These will be cancelled'
        };

        return procedural[step.step] || 'Follow the standard procedure for this type of step.';
    }

    getVisualExplanationAsymptote(step, problem) {
        const visual = {
            'Identify denominator': 'Picture the function as a fraction bar - the bottom determines where we can\'t go.',
            'Factor denominator': 'Think of breaking the denominator into building blocks to see its zeros clearly.',
            'Set denominator equal to zero': 'Visualize the graph shooting up or down to infinity at these x-values.',
            'Identify degrees': 'Imagine the highest power term as the "giant" that dominates when x is huge.',
            'Apply degree rule': 'Picture the graph flattening out toward a horizontal line, or continuing to climb/fall.',
            'Perform division': 'Visualize peeling away the slant line, leaving a remainder that vanishes at infinity.',
            'Find y-coordinate of hole': 'Picture an open circle on the graph - the point that\'s missing.',
            'Analyze behavior near vertical asymptotes': 'Imagine the graph splitting into branches that shoot toward infinity on each side.'
        };

        return visual[step.step] || 'Visualize how this step affects the graph\'s shape.';
    }

    getAlgebraicExplanationAsymptote(step) {
        const algebraic = {
            'Set denominator equal to zero': 'If Q(a) = 0, then lim(x→a) |f(x)| = ∞ (vertical asymptote)',
            'Apply degree rule': 'lim(x→∞) P(x)/Q(x) depends on lim(x→∞) (aₙxⁿ)/(bₘxᵐ)',
            'Perform division': 'f(x) = quotient + remainder/Q(x), where remainder has lower degree than Q',
            'Check numerator': 'If P(a) ≠ 0 and Q(a) = 0: VA. If P(a) = 0 and Q(a) = 0: removable discontinuity',
            'Find y-coordinate of hole': 'Evaluate lim(x→a) f(x) after canceling common factor (x - a)'
        };

        return algebraic[step.step] || 'Apply rigorous algebraic principles.';
    }

    identifyPrerequisitesAsymptote(step, problemType) {
        const prereqMap = {
            'Factor denominator': ['Factoring polynomials', 'GCF', 'Special patterns'],
            'Set denominator equal to zero': ['Solving polynomial equations', 'Zero product property'],
            'Identify degrees': ['Polynomial degree', 'Leading term'],
            'Perform division': ['Polynomial long division', 'Division algorithm'],
            'Check numerator': ['Function evaluation', 'Substitution'],
            'Apply degree rule': ['Understanding of infinity', 'Limit concept']
        };

        return prereqMap[step.step] || ['Basic algebra'];
    }

    identifyKeyVocabularyAsymptote(step) {
        const vocabMap = {
            'Identify denominator': ['denominator', 'rational function', 'undefined'],
            'Factor denominator': ['factor', 'irreducible', 'polynomial'],
            'Set denominator equal to zero': ['zero', 'root', 'solution'],
            'Check numerator': ['numerator', 'hole', 'removable discontinuity', 'vertical asymptote'],
            'Identify degrees': ['degree', 'leading term', 'coefficient'],
            'Apply degree rule': ['horizontal asymptote', 'end behavior', 'limit at infinity'],
            'Perform division': ['quotient', 'remainder', 'dividend', 'divisor'],
            'Analyze behavior near vertical asymptotes': ['limit', 'approaches', 'infinity', 'one-sided limit']
        };

        return vocabMap[step.step] || ['asymptote', 'function'];
    }

    generateThinkingPromptsAsymptote(step) {
        return {
            before: `Before ${step.step}, what information do I need?`,
            during: `As I ${step.step}, what should I be careful about?`,
            after: `After ${step.step}, how can I verify this is correct?`
        };
    }

    generateSelfCheckQuestionAsymptote(step) {
        const questions = {
            'Factor denominator': 'Did I factor completely? Are there any more common factors?',
            'Set denominator equal to zero': 'Did I find ALL zeros of the denominator?',
            'Check numerator': 'Did I verify whether the numerator is also zero at each denominator zero?',
            'Identify degrees': 'Did I count the degree correctly, accounting for all terms?',
            'Apply degree rule': 'Did I apply the correct case based on the degree comparison?',
            'Perform division': 'Did I check my division by multiplying back?',
            'Find y-coordinate of hole': 'Did I use the simplified function, not the original?',
            'Analyze behavior near vertical asymptotes': 'Did I check BOTH sides of each vertical asymptote?'
        };

        return questions[step.step] || 'Does this step make sense in the context of finding asymptotes?';
    }

    findRealWorldConnectionAsymptote(step, problem) {
        const connections = {
            'vertical_asymptotes': 'Like the capacity limit of a machine - as you approach maximum capacity (VA), costs or stresses approach infinity.',
            'horizontal_asymptotes': 'Like a drug concentration approaching equilibrium, or terminal velocity in falling - a long-term limit.',
            'slant_asymptotes': 'Like a trajectory that levels off toward a slanted path in the long run.',
            'holes': 'Like a small manufacturing defect that can be corrected - the function could be "repaired" at that point.'
        };

        const category = this.asymptoteTypes[problem.type]?.category;
        return connections[category] || 'Asymptotes model limiting behavior in many real-world systems.';
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting Steps',
                    explanation: this.generateStepBridgeAsymptote(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgressionAsymptote(steps[i], steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateStepBridgeAsymptote(currentStep, nextStep) {
        return {
            currentState: `We've completed: ${currentStep.step}`,
            nextGoal: `Next, we'll: ${nextStep.step}`,
            why: `This is necessary to continue building our understanding of the function's asymptotic behavior`,
            connection: `The information from ${currentStep.step} directly informs how we approach ${nextStep.step}`
        };
    }

    explainStepProgressionAsymptote(currentStep, nextStep) {
        return `Having completed ${currentStep.step}, we now proceed to ${nextStep.step} to further our asymptote analysis`;
    }

    addErrorPrevention(step, problemType) {
        const category = this.asymptoteTypes[problemType]?.category || 'rational';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsAsymptote(step, problemType),
                checkPoints: this.generateCheckPointsAsymptote(step),
                warningFlags: this.identifyWarningFlagsAsymptote(step, problemType)
            }
        };
    }

    generatePreventionTipsAsymptote(step, problemType) {
        const tips = {
            'Factor denominator': [
                'Factor completely - don\'t stop at first factorization',
                'Check each factor to ensure it\'s irreducible',
                'Look for GCF first'
            ],
            'Check numerator': [
                'ALWAYS check numerator at denominator zeros',
                'If both zero → hole, not VA',
                'Don\'t assume all denominator zeros are VAs'
            ],
            'Identify degrees': [
                'Count highest power carefully',
                'Don\'t forget about missing terms',
                'Degree of 3x² + 5 is 2 (not affected by constant)'
            ],
            'Perform division': [
                'Write in descending powers',
                'Align terms carefully',
                'Check work by multiplying back'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Check your work'];
    }

    generateCheckPointsAsymptote(step) {
        return [
            'Did I complete all parts of this step?',
            'Does my answer make sense?',
            'Can I verify this result?',
            'Did I avoid common mistakes?'
        ];
    }

    identifyWarningFlagsAsymptote(step, problemType) {
        const warnings = {
            'Check numerator': ['If you forget this, you\'ll confuse holes with vertical asymptotes!'],
            'Identify degrees': ['Missing terms don\'t change the degree!'],
            'Apply degree rule': ['Make sure you\'re comparing degrees of ORIGINAL function, not simplified'],
            'Perform division': ['Easy to make arithmetic errors - check by multiplying quotient × divisor']
        };

        return warnings[step.step] || [];
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsAsymptote(step, problem),
                subSteps: this.breakIntoSubStepsAsymptote(step),
                hints: this.generateProgressiveHintsAsymptote(step, problem)
            }
        }));
    }

    generateGuidingQuestionsAsymptote(step, problem) {
        const questions = {
            'Identify denominator': [
                'What is a rational function?',
                'Which part is the denominator?',
                'Why does the denominator matter for asymptotes?'
            ],
            'Factor denominator': [
                'What factoring techniques do I know?',
                'Is there a GCF?',
                'Are there special patterns (difference of squares, etc.)?'
            ],
            'Check numerator': [
                'What happens if both numerator and denominator are zero?',
                'How is a hole different from a vertical asymptote?',
                'Did I substitute the value into the numerator?'
            ],
            'Apply degree rule': [
                'What is the degree of the numerator?',
                'What is the degree of the denominator?',
                'Which degree rule case applies here?'
            ]
        };

        return questions[step.step] || ['What is this step asking me to find?', 'How do I approach this?'];
    }

    breakIntoSubStepsAsymptote(step) {
        const subSteps = {
            'Factor denominator': [
                'Look for greatest common factor',
                'Group terms if applicable',
                'Apply special formulas (a² - b², etc.)',
                'Verify factorization is complete'
            ],
            'Check numerator': [
                'List all x-values where denominator = 0',
                'For each x, substitute into numerator',
                'If numerator also 0 → mark as hole',
                'If numerator ≠ 0 → mark as VA'
            ],
            'Perform division': [
                'Set up division in standard form',
                'Divide leading terms',
                'Multiply and subtract',
                'Bring down next term',
                'Repeat until complete',
                'Write result as quotient + remainder/divisor'
            ]
        };

        return subSteps[step.step] || ['Execute the step', 'Verify the result'];
    }

    generateProgressiveHintsAsymptote(step, problem) {
        const category = this.asymptoteTypes[problem.type]?.category || 'rational';
        const hintSet = this.hints[category] || this.hints.vertical_asymptotes;

        return {
            level1: hintSet.level1 || 'Think about what this step requires.',
            level2: hintSet.level2 || 'Consider the definition of the asymptote type.',
            level3: hintSet.level3 || 'Apply the standard technique.',
            level4: hintSet.level4 || 'Execute the specific procedure.'
        };
    }

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateELI5ExplanationAsymptote(step, problem),
                analogy: this.findRelevantAnalogyAsymptote(step, problem),
                simpleLanguage: this.convertToSimpleLanguage(step.description || step.step),
                visualization: this.suggestVisualizationAsymptote(step)
            }
        }));
    }

    generateELI5ExplanationAsymptote(step, problem) {
        const ELI5 = {
            'Identify denominator': 'The bottom number of the fraction is super important because it tells us where the function might "break" or go crazy!',
            'Factor denominator': 'We\'re breaking the bottom number into smaller pieces, like breaking a LEGO build into individual blocks, so we can see it better.',
            'Set denominator equal to zero': 'We\'re finding where the bottom of the fraction equals zero. When you divide by zero, weird things happen - the answer shoots up to infinity!',
            'Check numerator': 'We need to check if the top is also zero. If BOTH top and bottom are zero at the same spot, it\'s different - it\'s just a missing dot, not an asymptote!',
            'Identify degrees': 'The degree is like the "power level" of the expression. We\'re checking which is more powerful - the top or the bottom.',
            'Apply degree rule': 'Based on which is more powerful, we can predict what happens when x gets really, really big - does the fraction approach a number, or does it keep growing?',
            'Perform division': 'We\'re dividing the polynomials like we divide numbers, but with x\'s and powers. This shows us the slanted line the graph follows far away.',
            'Identify common factors': 'We\'re looking for matching pieces in the top and bottom - like finding matching LEGO blocks that can be removed from both sides.',
            'Find x-coordinate of hole': 'This is where the matching pieces were. It\'s like finding where a puzzle piece is missing.',
            'Find y-coordinate of hole': 'We\'re figuring out where the missing dot WOULD be if it weren\'t missing - like where a puzzle piece would fit.'
        };

        return ELI5[step.step] || 'We\'re taking another step to understand where this function has asymptotes - those invisible boundary lines!';
    }

    findRelevantAnalogyAsymptote(step, problem) {
        const category = this.asymptoteTypes[problem.type]?.category;
        
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(category) || analogy.suitableFor.includes('all')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }

        return 'Think of asymptotes like invisible fences that guide where the graph can go!';
    }

    suggestVisualizationAsymptote(step) {
        const visualizations = {
            'Identify denominator': 'Draw a fraction bar and label the bottom part',
            'Set denominator equal to zero': 'Draw vertical dashed lines where denominator = 0',
            'Check numerator': 'Put a checkmark or X next to each zero to show if it\'s VA or hole',
            'Identify degrees': 'Write the highest power next to numerator and denominator',
            'Apply degree rule': 'Draw a horizontal dashed line if HA exists',
            'Perform division': 'Show the long division setup with polynomial terms',
            'Identify common factors': 'Circle matching factors in different colors',
            'Find y-coordinate of hole': 'Draw an open circle on the graph at the hole location'
        };

        return visualizations[step.step] || 'Draw a picture to help visualize what\'s happening';
    }

    // GRAPH GENERATION

    generateAsymptoteGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        this.graphData = {
            type: 'asymptote_function',
            verticalAsymptotes: this.currentSolution.verticalAsymptotes || [],
            horizontalAsymptote: this.currentSolution.horizontalAsymptote || null,
            slantAsymptote: this.currentSolution.slantAsymptote || null,
            holes: this.currentSolution.holes || [],
            domain: this.currentSolution.domain || 'All real numbers except VAs',
            graphingInstructions: this.generateGraphingInstructions()
        };
    }

    generateGraphingInstructions() {
        return [
            'Draw vertical asymptotes as vertical dashed lines',
            'Draw horizontal or slant asymptote as dashed line',
            'Mark holes with open circles',
            'Plot intercepts',
            'Analyze behavior in each region',
            'Sketch curve approaching asymptotes correctly',
            'Ensure graph doesn\'t cross vertical asymptotes'
        ];
    }

    // WORKBOOK GENERATION

    generateAsymptoteWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createAsymptoteLessonSection(),
            this.createEnhancedStepsSection(),
            this.createSolutionSummarySection(),
            this.createAsymptoteAnalysisSection(),
            this.createGraphingGuidanceSection(),
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
            title: 'Enhanced Asymptotes Functions Mathematical Workbook',
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
            ['Problem Type', this.asymptoteTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.asymptoteTypes[this.currentProblem.type]?.category || 'asymptote'],
            ['Function', this.currentProblem.originalInput],
            ['Function Type', this.currentProblem.functionType || 'rational']
        ];

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSection() {
        if (!this.prerequisiteChecks) return null;

        const category = this.asymptoteTypes[this.currentProblem.type]?.category;
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

    createAsymptoteLessonSection() {
        const category = this.asymptoteTypes[this.currentProblem.type]?.category;
        const lesson = this.lessons[category + '_asymptotes'] || this.lessons.rational_function_analysis;

        const lessonData = [
            ['Topic', lesson.title],
            ['', ''],
            ['Key Concepts', '']
        ];

        if (lesson.concepts) {
            lesson.concepts.forEach((concept, index) => {
                lessonData.push([`${index + 1}`, concept]);
            });
        }

        lessonData.push(['', '']);
        lessonData.push(['Theory', lesson.theory || 'Core theoretical understanding']);

        if (lesson.keyFormulas) {
            lessonData.push(['', '']);
            lessonData.push(['Key Formulas', '']);
            Object.entries(lesson.keyFormulas).forEach(([name, formula]) => {
                lessonData.push([name, formula]);
            });
        }

        return {
            title: 'Lesson: ' + lesson.title,
            type: 'lesson',
            data: lessonData
        };
    }

    createEnhancedStepsSection() {
        if (!this.solutionSteps || this.solutionSteps.length === 0) return null;

        const stepsData = [];

        this.solutionSteps.forEach((step, index) => {
            // Skip bridge steps in basic display
            if (step.stepType === 'bridge' && this.explanationLevel === 'basic') {
                return;
            }

            // Main step
            if (step.stepType === 'bridge') {
                stepsData.push(['→ Connection', step.title]);
                stepsData.push(['From', step.explanation.currentState]);
                stepsData.push(['To', step.explanation.nextGoal]);
                stepsData.push(['', '']);
                return;
            }

            stepsData.push([`Step ${step.stepNumber}`, step.step]);
            stepsData.push(['Description', step.description]);

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.goalStatement) {
                stepsData.push(['Goal', step.goalStatement]);
            }

            if (step.algebraicRule) {
                stepsData.push(['Algebraic Rule', step.algebraicRule]);
            }

            // ELI5 explanations
            if (step.ELI5 && this.explanationLevel === 'ELI5') {
                stepsData.push(['ELI5', step.ELI5.explanation]);
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
                stepsData.push(['Visual', step.explanations.visual]);
            }

            // Error prevention
            if (step.errorPrevention && this.includeErrorPrevention) {
                const mistakes = step.errorPrevention.commonMistakes;
                if (mistakes && mistakes.length > 0) {
                    stepsData.push(['Watch Out', mistakes.join('; ')]);
                }
            }

            // Scaffolding
            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                const questions = step.scaffolding.guidingQuestions;
                if (questions && questions.length > 0) {
                    stepsData.push(['Guiding Questions', questions.join(' | ')]);
                }
            }

            // Thinking prompts
            if (step.thinkingPrompts && this.includeThinkingPrompts) {
                stepsData.push(['Think Before', step.thinkingPrompts.before]);
                stepsData.push(['Think After', step.thinkingPrompts.after]);
            }

            // Self-check
            if (step.selfCheck && this.includeSelfCheckQuestions) {
                stepsData.push(['Self-Check', step.selfCheck]);
            }

            stepsData.push(['', '']); // Spacing
        });

        return {
            title: `Detailed Solution Steps (${this.explanationLevel} level)`,
            type: 'steps',
            data: stepsData
        };
    }

    createSolutionSummarySection() {
        if (!this.currentSolution) return null;

        const summaryData = [
            ['Solution Type', this.currentSolution.type || 'Asymptote Analysis']
        ];

        if (this.currentSolution.verticalAsymptotes) {
            summaryData.push(['Vertical Asymptotes', 
                Array.isArray(this.currentSolution.verticalAsymptotes) ?
                this.currentSolution.verticalAsymptotes.join(', ') :
                this.currentSolution.verticalAsymptotes
            ]);
        }

        if (this.currentSolution.horizontalAsymptote) {
            summaryData.push(['Horizontal Asymptote', this.currentSolution.horizontalAsymptote]);
        }

        if (this.currentSolution.slantAsymptote) {
            summaryData.push(['Slant Asymptote', this.currentSolution.slantAsymptote]);
        }

        if (this.currentSolution.holes) {
            summaryData.push(['Holes', 
                Array.isArray(this.currentSolution.holes) ?
                this.currentSolution.holes.join(', ') :
                this.currentSolution.holes
            ]);
        }

        if (this.currentSolution.domain) {
            summaryData.push(['Domain', this.currentSolution.domain]);
        }

        return {
            title: 'Solution Summary',
            type: 'solution',
            data: summaryData
        };
    }

    createAsymptoteAnalysisSection() {
        const analysisData = [
            ['Analysis Type', this.currentSolution?.type || 'Comprehensive'],
            ['Category', this.asymptoteTypes[this.currentProblem.type]?.category],
            ['Steps Performed', this.solutionSteps?.length || 0],
            ['Explanation Level', this.explanationLevel]
        ];

        if (this.currentSolution?.approach) {
            analysisData.push(['Approach', this.currentSolution.approach]);
        }

        if (this.currentSolution?.method) {
            analysisData.push(['Method', this.currentSolution.method]);
        }

        return {
            title: 'Analysis Details',
            type: 'analysis',
            data: analysisData
        };
    }

    createGraphingGuidanceSection() {
        if (!this.graphData) return null;

        const graphData = [
            ['Graphing Instructions', ''],
            ['', '']
        ];

        if (this.graphData.graphingInstructions) {
            this.graphData.graphingInstructions.forEach((instruction, index) => {
                graphData.push([`${index + 1}`, instruction]);
            });
        }

        graphData.push(['', '']);
        graphData.push(['Features to Plot', '']);

        if (this.graphData.verticalAsymptotes && this.graphData.verticalAsymptotes.length > 0) {
            graphData.push(['Vertical Asymptotes', this.graphData.verticalAsymptotes.join(', ')]);
        }

        if (this.graphData.horizontalAsymptote) {
            graphData.push(['Horizontal Asymptote', this.graphData.horizontalAsymptote]);
        }

        if (this.graphData.slantAsymptote) {
            graphData.push(['Slant Asymptote', this.graphData.slantAsymptote]);
        }

        if (this.graphData.holes && this.graphData.holes.length > 0) {
            graphData.push(['Holes', this.graphData.holes.join(', ')]);
        }

        return {
            title: 'Graphing Guidance',
            type: 'graphing',
            data: graphData
        };
    }

    createRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const applications = Object.values(this.realWorldProblems).slice(0, 3);

        const appData = [
            ['Real-World Applications of Asymptotes', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Function Type', app.function]);
            appData.push(['Asymptote', app.asymptote]);
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

        const notes = this.generateAsymptotePedagogicalNotes(this.currentProblem.type);

        const notesData = [
            ['Learning Objectives', notes.objectives.join('; ')],
            ['Key Concepts', notes.keyConcepts.join('; ')],
            ['Prerequisites', notes.prerequisites.join('; ')],
            ['Common Difficulties', notes.commonDifficulties.join('; ')],
            ['Teaching Strategies', notes.teachingStrategies.join('; ')],
            ['Extensions', notes.extensions.join('; ')]
        ];

        return {
            title: 'Teaching Notes',
            type: 'pedagogical',
            data: notesData
        };
    }

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const alternatives = this.generateAsymptoteAlternativeMethods(this.currentProblem.type);

        const altData = [
            ['Primary Method', alternatives.primaryMethod],
            ['', ''],
            ['Alternative Methods', '']
        ];

        alternatives.methods.forEach((method, index) => {
            altData.push([`Method ${index + 1}`, `${method.name}: ${method.description}`]);
        });

        altData.push(['', '']);
        altData.push(['Comparison', alternatives.comparison]);

        return {
            title: 'Alternative Methods',
            type: 'alternatives',
            data: altData
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

        problems.hard.slice(0, 2).forEach((p, i) => {
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
            ['Common Misconceptions and Mistakes', ''],
            ['', '']
        ];

        Object.entries(this.misconceptions).forEach(([key, misconception]) => {
            mistakesData.push(['Misconception', misconception.misconception]);
            mistakesData.push(['Reality', misconception.reality]);
            mistakesData.push(['Example', misconception.correctiveExample]);
            mistakesData.push(['', '']);
        });

        return {
            title: 'Common Mistakes to Avoid',
            type: 'mistakes',
            data: mistakesData
        };
    }

    generateAsymptotePedagogicalNotes(problemType) {
        const category = this.asymptoteTypes[problemType]?.category;

        const pedagogicalDatabase = {
            vertical: {
                objectives: [
                    'Find vertical asymptotes by setting denominator = 0',
                    'Distinguish between vertical asymptotes and holes',
                    'Analyze behavior on both sides of VA'
                ],
                keyConcepts: [
                    'Division by zero creates infinite behavior',
                    'VA occurs when denominator = 0 but numerator ≠ 0',
                    'Graph never crosses vertical asymptote'
                ],
                prerequisites: [
                    'Solving polynomial equations',
                    'Factoring',
                    'Understanding of infinity'
                ],
                commonDifficulties: [
                    'Confusing holes with vertical asymptotes',
                    'Forgetting to check if numerator also zero',
                    'Not checking behavior on both sides'
                ],
                teachingStrategies: [
                    'Use "cliff edge" analogy',
                    'Emphasize checking numerator',
                    'Graph examples showing both sides'
                ],
                extensions: [
                    'Rational functions with multiple VAs',
                    'Analyzing limit behavior',
                    'Real-world applications'
                ]
            },
            horizontal: {
                objectives: [
                    'Find horizontal asymptotes using degree rules',
                    'Understand end behavior of rational functions',
                    'Recognize that graphs can cross HA'
                ],
                keyConcepts: [
                    'HA describes behavior as x → ±∞',
                    'Determined by comparing degrees',
                    'Three cases: <, =, >'
                ],
                prerequisites: [
                    'Polynomial degree',
                    'Leading coefficients',
                    'Concept of infinity'
                ],
                commonDifficulties: [
                    'Miscounting degrees',
                    'Thinking HA cannot be crossed',
                    'Forgetting about missing terms'
                ],
                teachingStrategies: [
                    'Memorize three degree rules',
                    'Show examples of graphs crossing HA',
                    'Use dominant term analysis'
                ],
                extensions: [
                    'Limits at infinity',
                    'Comparison with slant asymptotes',
                    'Applications in science'
                ]
            },
            slant: {
                objectives: [
                    'Recognize when slant asymptote exists',
                    'Perform polynomial long division',
                    'Interpret quotient as asymptote'
                ],
                keyConcepts: [
                    'Slant asymptote when deg(P) = deg(Q) + 1',
                    'Found by polynomial division',
                    'Remainder vanishes at infinity'
                ],
                prerequisites: [
                    'Polynomial long division',
                    'Degree comparison',
                    'Understanding of limits'
                ],
                commonDifficulties: [
                    'Long division errors',
                    'Trying to find slant asymptote when condition not met',
                    'Confusing with horizontal asymptote'
                ],
                teachingStrategies: [
                    'Practice long division systematically',
                    'Emphasize degree condition',
                    'Show graphical interpretation'
                ],
                extensions: [
                    'Higher degree differences (no asymptote)',
                    'Polynomial end behavior',
                    'Applications in physics'
                ]
            },
            holes: {
                objectives: [
                    'Identify removable discontinuities',
                    'Find coordinates of holes',
                    'Distinguish holes from vertical asymptotes'
                ],
                keyConcepts: [
                    'Hole occurs when factor cancels',
                    'Limit exists but function undefined',
                    'Can be "removed" by redefining function'
                ],
                prerequisites: [
                    'Factoring completely',
                    'Simplifying rational expressions',
                    'Limit concept'
                ],
                commonDifficulties: [
                    'Missing common factors',
                    'Using wrong function for y-coordinate',
                    'Confusing with vertical asymptotes'
                ],
                teachingStrategies: [
                    'Emphasize complete factoring',
                    'Use simplified function for y-value',
                    'Compare/contrast with VA graphically'
                ],
                extensions: [
                    'Continuity and discontinuities',
                    'Piecewise functions to "fix" holes',
                    'Applications in engineering'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Analyze functions for asymptotic behavior'],
            keyConcepts: ['Asymptotes describe limiting behavior'],
            prerequisites: ['Algebra and function concepts'],
            commonDifficulties: ['Understanding infinite behavior'],
            teachingStrategies: ['Systematic approach'],
            extensions: ['Complex functions']
        };
    }

    generateAsymptoteAlternativeMethods(problemType) {
        const category = this.asymptoteTypes[problemType]?.category;

        const alternativeDatabase = {
            vertical: {
                primaryMethod: 'Set denominator = 0 and check numerator',
                methods: [
                    {
                        name: 'Factoring Method',
                        description: 'Factor completely first, cancel common factors, then find VAs from remaining denominator'
                    },
                    {
                        name: 'Graphical Method',
                        description: 'Use graphing technology to identify vertical asymptotes visually'
                    },
                    {
                        name: 'Limit Method',
                        description: 'Check one-sided limits: if lim(x→a±) = ±∞, then VA at x = a'
                    }
                ],
                comparison: 'Factoring method is most reliable; graphical confirms results; limit method is most rigorous'
            },
            horizontal: {
                primaryMethod: 'Degree comparison rules',
                methods: [
                    {
                        name: 'Degree Rule Method',
                        description: 'Compare degrees and apply three cases'
                    },
                    {
                        name: 'Dominant Term Method',
                        description: 'Divide numerator and denominator by highest power, evaluate limit'
                    },
                    {
                        name: 'Graphical Method',
                        description: 'Graph function and observe end behavior'
                    }
                ],
                comparison: 'Degree rules fastest; dominant term method shows why; graphical provides visual confirmation'
            },
            slant: {
                primaryMethod: 'Polynomial long division',
                methods: [
                    {
                        name: 'Long Division',
                        description: 'Divide P(x) by Q(x), quotient is asymptote'
                    },
                    {
                        name: 'Synthetic Division',
                        description: 'If Q(x) is linear, use synthetic division'
                    },
                    {
                        name: 'Limit Comparison',
                        description: 'Check lim(x→∞) [f(x) - (mx + b)] = 0 to verify'
                    }
                ],
                comparison: 'Long division most versatile; synthetic division faster for linear divisors; limit method verifies'
            },
            comprehensive: {
                primaryMethod: 'Systematic factoring and analysis',
                methods: [
                    {
                        name: 'Complete Factoring Approach',
                        description: 'Factor, cancel, then find all asymptote types systematically'
                    },
                    {
                        name: 'Limit-Based Approach',
                        description: 'Use limits to define and find all asymptotes rigorously'
                    },
                    {
                        name: 'Graphical Approach',
                        description: 'Use technology to graph, then verify analytically'
                    }
                ],
                comparison: 'Factoring approach most systematic; limit-based most rigorous; graphical provides intuition'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard analytical approach',
            methods: [{
                name: 'Alternative approach',
                description: 'Other methods available based on function type'
            }],
            comparison: 'Choose based on function complexity and personal preference'
        };
    }
}

// Export the class
export default EnhancedAsymptotesFunctionsWorkbook;
