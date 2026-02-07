// Enhanced Graphing Rational Functions Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedGraphingRationalFunctionsWorkbook {
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

        // Graph settings
        this.graphResolution = options.graphResolution || 100;
        this.xMin = options.xMin || -10;
        this.xMax = options.xMax || 10;
        this.yMin = options.yMin || -10;
        this.yMax = options.yMax || 10;

        this.mathSymbols = this.initializeMathSymbols();
        this.setThemeColors();
        this.initializeRationalSolvers();
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
    }

    initializeRationalLessons() {
        this.lessons = {
            basic_rational: {
                title: "Introduction to Rational Functions",
                concepts: [
                    "Rational function: f(x) = P(x)/Q(x) where P and Q are polynomials",
                    "Domain: all real numbers except where Q(x) = 0",
                    "Vertical asymptotes occur where denominator = 0",
                    "Horizontal asymptotes determined by degree comparison"
                ],
                theory: "Rational functions model many real-world phenomena including rates, concentrations, and optical properties. Understanding their behavior requires analyzing numerator and denominator separately.",
                keyFormulas: {
                    "General Form": "f(x) = P(x)/Q(x)",
                    "Simple Rational": "f(x) = a/(x - h) + k",
                    "Domain": "All x where Q(x) ≠ 0"
                },
                graphingSteps: [
                    "Find domain (exclude zeros of denominator)",
                    "Find vertical asymptotes (zeros of denominator)",
                    "Find horizontal/oblique asymptotes (degree comparison)",
                    "Find intercepts (x-intercepts from numerator, y-intercept at f(0))",
                    "Identify holes (common factors)",
                    "Test signs in intervals",
                    "Sketch the graph"
                ],
                applications: [
                    "Average cost functions in economics",
                    "Drug concentration over time",
                    "Electrical resistance in parallel circuits",
                    "Optical lens formulas"
                ]
            },

            simple_reciprocal: {
                title: "Simple Reciprocal Function",
                concepts: [
                    "Form: f(x) = 1/x or f(x) = a/x",
                    "Vertical asymptote at x = 0",
                    "Horizontal asymptote at y = 0",
                    "Two branches in opposite quadrants",
                    "Odd function (symmetric about origin)"
                ],
                theory: "The reciprocal function is the parent function for rational functions. It has a characteristic hyperbolic shape.",
                keyFormulas: {
                    "Basic Form": "f(x) = 1/x",
                    "Scaled Form": "f(x) = a/x",
                    "Domain": "(-∞, 0) ∪ (0, ∞)",
                    "Range": "(-∞, 0) ∪ (0, ∞)"
                },
                graphCharacteristics: [
                    "Decreasing on each branch",
                    "Approaches but never touches axes",
                    "Symmetric about origin when a = 1",
                    "Reflection about x-axis when a < 0"
                ],
                applications: [
                    "Inverse proportionality",
                    "Ohm's Law in electronics",
                    "Boyle's Law (pressure-volume)"
                ]
            },

            transformed_reciprocal: {
                title: "Transformed Reciprocal Functions",
                concepts: [
                    "Form: f(x) = a/(x - h) + k",
                    "Vertical asymptote at x = h",
                    "Horizontal asymptote at y = k",
                    "Shifted hyperbola",
                    "Parameters a, h, k control transformations"
                ],
                theory: "Transformations shift the basic reciprocal function. Understanding these helps graph any simple rational function.",
                keyFormulas: {
                    "Transformed Form": "f(x) = a/(x - h) + k",
                    "Vertical Asymptote": "x = h",
                    "Horizontal Asymptote": "y = k",
                    "Domain": "(-∞, h) ∪ (h, ∞)"
                },
                transformations: {
                    "a": "Vertical stretch/compression and reflection",
                    "h": "Horizontal shift",
                    "k": "Vertical shift"
                },
                graphingSteps: [
                    "Identify h and k for asymptotes",
                    "Plot asymptotes x = h and y = k",
                    "Determine orientation from sign of a",
                    "Plot key points",
                    "Sketch branches approaching asymptotes"
                ],
                applications: [
                    "Temperature conversion with offset",
                    "Modified inverse relationships",
                    "Shifted concentration models"
                ]
            },

            vertical_asymptotes: {
                title: "Vertical Asymptotes",
                concepts: [
                    "Occur where denominator = 0 (and numerator ≠ 0)",
                    "Function approaches ±∞ near vertical asymptotes",
                    "Graph has discontinuity at vertical asymptote",
                    "Different behavior on left vs right side possible"
                ],
                theory: "Vertical asymptotes represent values excluded from the domain where the function grows without bound.",
                keyFormulas: {
                    "Finding VAs": "Solve Q(x) = 0",
                    "Behavior": "lim[x→a⁻] f(x) and lim[x→a⁺] f(x)",
                    "Notation": "x = a is a VA"
                },
                identificationSteps: [
                    "Factor denominator completely",
                    "Set denominator = 0 and solve",
                    "Check if numerator is also 0 (might be hole instead)",
                    "Determine behavior (±∞) on each side"
                ],
                behaviorPatterns: {
                    "Simple VA": "(x - a) in denominator → VA at x = a",
                    "Multiple VA": "Several factors → multiple VAs",
                    "Even multiplicity": "Same direction on both sides",
                    "Odd multiplicity": "Opposite directions on both sides"
                },
                applications: [
                    "Division by zero in formulas",
                    "Singularities in physics",
                    "Undefined ratios"
                ]
            },

            horizontal_asymptotes: {
                title: "Horizontal Asymptotes",
                concepts: [
                    "Describe end behavior as x → ±∞",
                    "At most one horizontal asymptote",
                    "Determined by comparing degrees of P(x) and Q(x)",
                    "Graph can cross horizontal asymptote"
                ],
                theory: "Horizontal asymptotes show the limiting value of the function as x becomes very large or very small.",
                keyFormulas: {
                    "deg(P) < deg(Q)": "y = 0",
                    "deg(P) = deg(Q)": "y = leading coefficient of P / leading coefficient of Q",
                    "deg(P) > deg(Q)": "No horizontal asymptote (oblique or none)"
                },
                degreeComparison: [
                    "Bottom heavy (deg Q > deg P): HA is y = 0",
                    "Equal degrees: HA is ratio of leading coefficients",
                    "Top heavy (deg P > deg Q): No HA, check for oblique"
                ],
                graphingImplications: [
                    "Function approaches HA as x → ±∞",
                    "Function may cross HA in middle",
                    "HA shows long-term behavior"
                ],
                applications: [
                    "Limiting concentrations",
                    "Terminal velocity",
                    "Long-run averages"
                ]
            },

            oblique_asymptotes: {
                title: "Oblique (Slant) Asymptotes",
                concepts: [
                    "Occur when deg(P) = deg(Q) + 1",
                    "Form: y = mx + b (linear)",
                    "Found by polynomial long division",
                    "Graph approaches this line as x → ±∞"
                ],
                theory: "When the numerator's degree exceeds the denominator's by exactly 1, the function approaches a slant line rather than a horizontal line.",
                keyFormulas: {
                    "Condition": "deg(P) = deg(Q) + 1",
                    "Finding OA": "Divide P(x) by Q(x), quotient is asymptote",
                    "Form": "y = mx + b"
                },
                findingMethod: [
                    "Perform polynomial long division: P(x) ÷ Q(x)",
                    "Quotient (ignore remainder) is the oblique asymptote",
                    "Write as y = quotient"
                ],
                graphingSteps: [
                    "Find oblique asymptote by division",
                    "Draw the slant line as asymptote",
                    "Graph approaches this line for large |x|",
                    "Graph may cross oblique asymptote"
                ],
                applications: [
                    "Growth models with linear limit",
                    "Economic cost functions",
                    "Physics trajectories with resistance"
                ]
            },

            holes: {
                title: "Holes (Removable Discontinuities)",
                concepts: [
                    "Occur when numerator and denominator share common factor",
                    "Point is missing from graph",
                    "Factor cancels, leaving a 'hole'",
                    "Different from vertical asymptote"
                ],
                theory: "Holes represent removable discontinuities where a factor cancels. The function is undefined at that point but could be 'fixed' by defining the value.",
                keyFormulas: {
                    "Identification": "(x - a) is common factor",
                    "Location": "x = a (from cancelled factor)",
                    "y-coordinate": "Evaluate simplified function at x = a"
                },
                identificationSteps: [
                    "Factor numerator and denominator completely",
                    "Identify common factors",
                    "Cancel common factors",
                    "x-values from cancelled factors are holes",
                    "Find y-coordinate by evaluating reduced function"
                ],
                graphingSteps: [
                    "Simplify function by canceling common factors",
                    "Graph the simplified function",
                    "Mark hole with open circle at (a, f(a)) where simplified"
                ],
                difference: {
                    "Hole": "Common factor cancels",
                    "Vertical Asymptote": "Denominator zero, numerator non-zero"
                },
                applications: [
                    "Removable singularities in physics",
                    "Cancelled terms in formulas",
                    "Limit definitions"
                ]
            },

            intercepts: {
                title: "Finding Intercepts",
                concepts: [
                    "x-intercepts: where graph crosses x-axis (y = 0)",
                    "y-intercept: where graph crosses y-axis (x = 0)",
                    "x-intercepts from numerator zeros",
                    "May have no intercepts"
                ],
                theory: "Intercepts are key reference points for graphing rational functions.",
                keyFormulas: {
                    "x-intercepts": "Set P(x) = 0, solve for x",
                    "y-intercept": "Evaluate f(0) = P(0)/Q(0)",
                    "Existence": "y-intercept exists if 0 in domain"
                },
                findingSteps: {
                    "x-intercepts": [
                        "Set numerator = 0",
                        "Solve P(x) = 0",
                        "Verify x is in domain (Q(x) ≠ 0)",
                        "Points are (x, 0)"
                    ],
                    "y-intercept": [
                        "Substitute x = 0",
                        "Calculate f(0) = P(0)/Q(0)",
                        "Check Q(0) ≠ 0",
                        "Point is (0, y)"
                    ]
                },
                specialCases: [
                    "No y-intercept if 0 not in domain",
                    "No x-intercepts if numerator never zero",
                    "Multiple x-intercepts possible"
                ],
                applications: [
                    "Starting values (y-intercept)",
                    "Zero points of ratios",
                    "Break-even points"
                ]
            },

            sign_analysis: {
                title: "Sign Analysis and Intervals",
                concepts: [
                    "Determine where function is positive/negative",
                    "Test points in intervals between critical values",
                    "Critical values: zeros and vertical asymptotes",
                    "Sign helps sketch accurate graph"
                ],
                theory: "Sign analysis reveals where the graph is above or below the x-axis, essential for accurate sketching.",
                keyFormulas: {
                    "Critical Values": "Zeros of P(x) and Q(x)",
                    "Test Point Method": "Evaluate f(x) at point in each interval",
                    "Sign Chart": "Table showing sign in each interval"
                },
                process: [
                    "Find all zeros of numerator (x-intercepts)",
                    "Find all zeros of denominator (VAs and holes)",
                    "Mark these on number line",
                    "Test a point in each interval",
                    "Record sign (+ or -) in each interval"
                ],
                graphingImplications: [
                    "Positive intervals: graph above x-axis",
                    "Negative intervals: graph below x-axis",
                    "Sign changes at x-intercepts and VAs"
                ],
                applications: [
                    "Determining profit vs loss regions",
                    "Concentration above/below threshold",
                    "Feasible vs infeasible regions"
                ]
            },

            complete_graphing: {
                title: "Complete Graphing Procedure",
                concepts: [
                    "Systematic approach to graphing any rational function",
                    "Combine all features: asymptotes, intercepts, holes, sign",
                    "Sketch smooth curves",
                    "Verify behavior matches analysis"
                ],
                theory: "Graphing rational functions requires synthesizing multiple features into a coherent visual representation.",
                completeSteps: [
                    "1. Find domain (exclude denominator zeros)",
                    "2. Simplify (cancel common factors, identify holes)",
                    "3. Find vertical asymptotes (remaining denominator zeros)",
                    "4. Find horizontal/oblique asymptotes (degree comparison)",
                    "5. Find x-intercepts (numerator zeros in domain)",
                    "6. Find y-intercept (f(0) if defined)",
                    "7. Perform sign analysis (test intervals)",
                    "8. Plot asymptotes, intercepts, holes",
                    "9. Sketch curve through points, approaching asymptotes",
                    "10. Verify behavior matches analysis"
                ],
                checkList: [
                    "Domain excludes vertical asymptote x-values",
                    "Graph approaches VAs correctly (±∞)",
                    "Graph approaches HAs/OAs as x → ±∞",
                    "Graph passes through intercepts",
                    "Holes marked with open circles",
                    "Sign analysis matches graph",
                    "Smooth curves (no sharp corners)"
                ],
                applications: [
                    "Visualizing rational relationships",
                    "Engineering design analysis",
                    "Economic supply-demand curves"
                ]
            },

            polynomial_division: {
                title: "Polynomial Long Division",
                concepts: [
                    "Method for dividing polynomials",
                    "Used to find oblique asymptotes",
                    "Can rewrite rational functions",
                    "Quotient + remainder/divisor"
                ],
                theory: "Polynomial division allows us to rewrite rational functions in forms that reveal asymptotic behavior.",
                keyFormulas: {
                    "Division Algorithm": "P(x)/Q(x) = quotient + remainder/Q(x)",
                    "Oblique Asymptote": "y = quotient (when deg P = deg Q + 1)",
                    "Remainder Theorem": "P(a) = remainder when dividing by (x - a)"
                },
                process: [
                    "Arrange terms in descending degree order",
                    "Divide leading term of P by leading term of Q",
                    "Multiply Q by this term, subtract from P",
                    "Repeat with new polynomial",
                    "Continue until degree of remainder < degree of Q"
                ],
                applications: [
                    "Finding oblique asymptotes",
                    "Rewriting improper rational functions",
                    "Partial fraction decomposition"
                ]
            },

            end_behavior: {
                title: "End Behavior Analysis",
                concepts: [
                    "Behavior as x → ∞ and x → -∞",
                    "Determined by horizontal/oblique asymptotes",
                    "Leading terms dominate for large |x|",
                    "Describes long-term trend"
                ],
                theory: "End behavior characterizes how the function behaves for very large positive or negative x-values.",
                keyFormulas: {
                    "Notation": "lim[x→∞] f(x) and lim[x→-∞] f(x)",
                    "HA case": "Limits equal horizontal asymptote value",
                    "OA case": "Function approaches oblique asymptote",
                    "No asymptote": "Function increases/decreases without bound"
                },
                determinationMethod: [
                    "Compare degrees of P and Q",
                    "If deg P < deg Q: approaches 0",
                    "If deg P = deg Q: approaches ratio of leading coefficients",
                    "If deg P = deg Q + 1: approaches oblique asymptote",
                    "If deg P > deg Q + 1: increases/decreases without bound"
                ],
                applications: [
                    "Long-term predictions",
                    "Stability analysis",
                    "Asymptotic approximations"
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
                highlightBg: '#ffe6e6',
                asymptoteBg: '#e6f3ff',
                interceptBg: '#e6ffe6',
                holeBg: '#ffe6f0'
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
                asymptoteBg: '#d0e8ff',
                interceptBg: '#d0ffd0',
                holeBg: '#ffd0e8'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
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
            'perpendicular': '⊥', 'parallel': '∥',
            'limit': 'lim', 'rightarrow': '→', 'leftarrow': '←'
        };
    }

    initializeRationalSolvers() {
        this.rationalTypes = {
            simple_reciprocal: {
                patterns: [
                    /f\(x\)\s*=\s*1\/x/,
                    /f\(x\)\s*=\s*([+-]?\d+\.?\d*)\/x/,
                    /reciprocal/i
                ],
                solver: this.graphSimpleReciprocal.bind(this),
                name: 'Simple Reciprocal Function',
                category: 'simple_reciprocal',
                description: 'Graphs f(x) = a/x'
            },

            transformed_reciprocal: {
                patterns: [
                    /f\(x\)\s*=\s*([+-]?\d+\.?\d*)\/(x\s*[+-]\s*\d+\.?\d*)\s*[+-]\s*\d+\.?\d*/,
                    /transformed.*reciprocal/i
                ],
                solver: this.graphTransformedReciprocal.bind(this),
                name: 'Transformed Reciprocal Function',
                category: 'transformed_reciprocal',
                description: 'Graphs f(x) = a/(x - h) + k'
            },

            general_rational: {
                patterns: [
                    /f\(x\)\s*=\s*\(.+\)\/\(.+\)/,
                    /rational.*function/i
                ],
                solver: this.graphGeneralRational.bind(this),
                name: 'General Rational Function',
                category: 'general_rational',
                description: 'Graphs f(x) = P(x)/Q(x)'
            },

            vertical_asymptote_focus: {
                patterns: [
                    /vertical.*asymptote/i,
                    /VA/
                ],
                solver: this.analyzeVerticalAsymptotes.bind(this),
                name: 'Vertical Asymptote Analysis',
                category: 'vertical_asymptotes',
                description: 'Analyzes vertical asymptotes'
            },

            horizontal_asymptote_focus: {
                patterns: [
                    /horizontal.*asymptote/i,
                    /HA/,
                    /end.*behavior/i
                ],
                solver: this.analyzeHorizontalAsymptotes.bind(this),
                name: 'Horizontal Asymptote Analysis',
                category: 'horizontal_asymptotes',
                description: 'Analyzes horizontal asymptotes and end behavior'
            },

            oblique_asymptote_focus: {
                patterns: [
                    /oblique.*asymptote/i,
                    /slant.*asymptote/i,
                    /OA/
                ],
                solver: this.analyzeObliqueAsymptotes.bind(this),
                name: 'Oblique Asymptote Analysis',
                category: 'oblique_asymptotes',
                description: 'Analyzes oblique/slant asymptotes'
            },

            hole_analysis: {
                patterns: [
                    /hole/i,
                    /removable.*discontinuity/i
                ],
                solver: this.analyzeHoles.bind(this),
                name: 'Hole Analysis',
                category: 'holes',
                description: 'Identifies holes (removable discontinuities)'
            },

            intercept_analysis: {
                patterns: [
                    /intercept/i,
                    /x-intercept/i,
                    /y-intercept/i,
                    /zeros/i
                ],
                solver: this.analyzeIntercepts.bind(this),
                name: 'Intercept Analysis',
                category: 'intercepts',
                description: 'Finds x and y intercepts'
            },

            complete_graph: {
                patterns: [
                    /graph/i,
                    /sketch/i,
                    /plot/i
                ],
                solver: this.graphCompleteRational.bind(this),
                name: 'Complete Rational Function Graph',
                category: 'complete_graphing',
                description: 'Complete analysis and graphing'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            vertical_asymptotes: {
                'Finding VAs': [
                    'Setting numerator = 0 instead of denominator',
                    'Forgetting to check if factor cancels (might be hole)',
                    'Including x-values where both num and denom are zero'
                ],
                'Behavior at VAs': [
                    'Not checking left vs right side behavior',
                    'Assuming both sides go to +∞',
                    'Confusing VA with hole'
                ]
            },
            horizontal_asymptotes: {
                'Degree comparison': [
                    'Comparing wrong degrees',
                    'Using coefficients instead of degrees when deg P > deg Q',
                    'Forgetting HA is y = 0 when deg Q > deg P'
                ],
                'Finding HA': [
                    'Using wrong coefficient ratio',
                    'Thinking HA can\'t be crossed',
                    'Confusing HA with VA'
                ]
            },
            holes: {
                'Identification': [
                    'Not factoring completely first',
                    'Missing common factors',
                    'Treating holes as vertical asymptotes'
                ],
                'Finding coordinates': [
                    'Using original function instead of simplified',
                    'Forgetting to find y-coordinate',
                    'Including hole in domain'
                ]
            },
            intercepts: {
                'x-intercepts': [
                    'Setting denominator = 0 instead of numerator',
                    'Including x-values not in domain',
                    'Forgetting to solve equation completely'
                ],
                'y-intercept': [
                    'Not checking if x = 0 is in domain',
                    'Arithmetic errors in calculating f(0)',
                    'Confusing with x-intercept'
                ]
            },
            graphing: {
                'Overall graph': [
                    'Not checking sign in all intervals',
                    'Drawing graph through asymptotes',
                    'Wrong curve direction near asymptotes',
                    'Not making graph smooth',
                    'Forgetting to mark holes with open circles'
                ],
                'Asymptotic behavior': [
                    'Graph not approaching asymptotes',
                    'Wrong infinity direction at VAs',
                    'Not matching HA for large |x|'
                ]
            }
        };

        this.errorPrevention = {
            factor_completely: {
                reminder: 'Always factor numerator and denominator completely first',
                method: 'Factor out GCF, then factor quadratics or higher'
            },
            check_cancellation: {
                reminder: 'Check for common factors - they indicate holes, not VAs',
                method: 'Cancel common factors and note x-values as holes'
            },
            degree_comparison: {
                reminder: 'Compare degrees carefully for horizontal/oblique asymptotes',
                method: 'Count highest power in numerator and denominator'
            },
            test_points: {
                reminder: 'Always test points in each interval for sign analysis',
                method: 'Choose simple x-values between critical points'
            },
            verify_domain: {
                reminder: 'Check that intercepts and test points are in the domain',
                method: 'Ensure denominator ≠ 0 at those x-values'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why asymptotes and holes exist, what they mean',
                language: 'intuitive understanding of behavior'
            },
            procedural: {
                focus: 'Step-by-step process to find features and graph',
                language: 'sequential instructions'
            },
            visual: {
                focus: 'How the graph looks, approaching asymptotes',
                language: 'visual descriptions and spatial reasoning'
            },
            algebraic: {
                focus: 'Formal algebraic rules, limit notation',
                language: 'precise mathematical terminology'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple terms: "the graph gets very close to this line"',
                detail: 'main features only',
                examples: 'simple functions like f(x) = 1/x'
            },
            intermediate: {
                vocabulary: 'standard terms: asymptote, intercept, hole',
                detail: 'all key features with brief explanations',
                examples: 'transformed reciprocals and basic rationals'
            },
            ELI5: {
                vocabulary: 'explain like I\'m 5: "lines the graph never touches"',
                detail: 'every step explained with analogies',
                examples: 'everyday situations and stories',
                analogies: true,
                visualization: 'simple pictures and gestures'
            },
            detailed: {
                vocabulary: 'full mathematical vocabulary, limit notation',
                detail: 'comprehensive analysis with reasoning',
                examples: 'complex rational functions'
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
            average_cost: {
                scenario: "Average cost per item in manufacturing",
                equation: "C(x) = (Fixed costs + Variable costs)/x",
                example: "C(x) = (5000 + 20x)/x for making x items",
                context: "Fixed costs spread over more items reduces average cost",
                features: {
                    "Horizontal Asymptote": "Approaches variable cost per item as production increases",
                    "Vertical Asymptote": "At x = 0 (can't divide by zero items)",
                    "Practical domain": "x > 0 (must produce positive number of items)"
                }
            },
            drug_concentration: {
                scenario: "Drug concentration in bloodstream over time",
                equation: "C(t) = (at)/(t² + b)",
                example: "C(t) = 5t/(t² + 4) mg/L after t hours",
                context: "Concentration rises then falls as drug is metabolized",
                features: {
                    "Horizontal Asymptote": "Approaches 0 as drug is eliminated",
                    "Maximum": "Peak concentration at specific time",
                    "Practical domain": "t ≥ 0 (time after dose)"
                }
            },
            electrical_resistance: {
                scenario: "Total resistance of parallel resistors",
                equation: "1/R_total = 1/R₁ + 1/R₂",
                example: "R_total = R₁R₂/(R₁ + R₂)",
                context: "Parallel circuits have less total resistance than individual resistors",
                features: {
                    "Reciprocal relationship": "Sum of reciprocals",
                    "Domain restrictions": "R₁, R₂ > 0 (positive resistance)",
                    "Behavior": "R_total always less than smaller resistor"
                }
            },
            lens_formula: {
                scenario: "Focal length in optics (thin lens equation)",
                equation: "1/f = 1/d_o + 1/d_i",
                example: "d_i = (f·d_o)/(d_o - f) for image distance",
                context: "Relates object distance, image distance, and focal length",
                features: {
                    "Vertical Asymptote": "At d_o = f (focal point)",
                    "Horizontal Asymptote": "Approaches f as d_o → ∞",
                    "Practical meaning": "Image formation in lenses and mirrors"
                }
            },
            pollution_dilution: {
                scenario: "Pollutant concentration after dilution",
                equation: "C(V) = (initial amount)/(initial volume + V)",
                example: "C(V) = 1000/(100 + V) mg/L with V liters added",
                context: "Adding clean water dilutes pollutant concentration",
                features: {
                    "Horizontal Asymptote": "Approaches 0 as infinite water added",
                    "Decreasing function": "More dilution = less concentration",
                    "Practical domain": "V ≥ 0"
                }
            },
            work_rate: {
                scenario: "Time to complete job working together",
                equation: "1/T_together = 1/T₁ + 1/T₂",
                example: "T_together = (T₁·T₂)/(T₁ + T₂)",
                context: "Combined work rate equals sum of individual rates",
                features: {
                    "Reciprocal rates": "Rate = 1/time",
                    "Faster together": "T_together < min(T₁, T₂)",
                    "Practical domain": "T₁, T₂ > 0"
                }
            },
            supply_demand: {
                scenario: "Market equilibrium in economics",
                equation: "P(q) = (a·q + b)/(c·q + d)",
                example: "Price as function of quantity",
                context: "Rational functions model supply and demand curves",
                features: {
                    "Equilibrium": "Where supply = demand",
                    "Asymptotic behavior": "Long-run price trends",
                    "Practical interpretation": "Market dynamics"
                }
            },
            intensity_distance: {
                scenario: "Light intensity vs distance from source",
                equation: "I(d) = k/d²",
                example: "I(d) = 100/d² lumens at distance d meters",
                context: "Inverse square law for radiation intensity",
                features: {
                    "Vertical Asymptote": "At d = 0 (at the source)",
                    "Horizontal Asymptote": "Approaches 0 as d → ∞",
                    "Rapid decrease": "Intensity drops quickly with distance"
                }
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            simple_reciprocal: {
                skills: ['Understanding of fractions', 'Basic graphing', 'Coordinate plane'],
                priorKnowledge: ['Division', 'Undefined values', 'Basic function notation'],
                checkQuestions: [
                    "What is 1/2? What is 1/0?",
                    "What happens to 1/x as x gets very large?",
                    "Can you plot points on a coordinate plane?"
                ]
            },
            transformed_reciprocal: {
                skills: ['Function transformations', 'Simple reciprocal function', 'Asymptote concept'],
                priorKnowledge: ['Shifts and stretches', 'Parent functions', 'Graph translations'],
                checkQuestions: [
                    "How does f(x - 2) shift the graph of f(x)?",
                    "What does f(x) + 3 do to the graph?",
                    "What is the graph of f(x) = 1/x?"
                ]
            },
            vertical_asymptotes: {
                skills: ['Factoring polynomials', 'Solving equations', 'Limit concept (informal)'],
                priorKnowledge: ['Division by zero is undefined', 'Infinity concept', 'Factoring'],
                checkQuestions: [
                    "Factor x² - 5x + 6",
                    "What values make (x - 3)(x + 2) = 0?",
                    "What happens to 1/x as x approaches 0?"
                ]
            },
            horizontal_asymptotes: {
                skills: ['Polynomial degree', 'End behavior', 'Limit concept'],
                priorKnowledge: ['Leading terms', 'Infinity behavior', 'Degree of polynomial'],
                checkQuestions: [
                    "What is the degree of 3x² + 2x - 1?",
                    "What happens to x²/x³ as x → ∞?",
                    "What is the leading coefficient of 5x³ - 2x + 1?"
                ]
            },
            holes: {
                skills: ['Factoring completely', 'Simplifying rational expressions', 'Canceling factors'],
                priorKnowledge: ['Common factors', 'Difference from VAs', 'Function simplification'],
                checkQuestions: [
                    "Simplify (x² - 4)/(x - 2)",
                    "What factors do numerator and denominator share in (x - 1)(x + 2)/(x - 1)?",
                    "What is undefined vs what cancels?"
                ]
            },
            oblique_asymptotes: {
                skills: ['Polynomial long division', 'Degree comparison', 'Division algorithm'],
                priorKnowledge: ['Long division of numbers', 'Polynomial arithmetic', 'Quotient and remainder'],
                checkQuestions: [
                    "Divide 125 by 7 (quotient and remainder)",
                    "What is the degree of x³ + 2x²?",
                    "Can you divide x² + 3x + 2 by x + 1?"
                ]
            },
            complete_graphing: {
                skills: ['All asymptote types', 'Intercepts', 'Sign analysis', 'Curve sketching'],
                priorKnowledge: ['Domain', 'Range', 'Continuity', 'All prerequisite topics'],
                checkQuestions: [
                    "Can you find VAs, HAs, and holes?",
                    "Can you determine sign intervals?",
                    "Can you sketch smooth curves?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            graph_sketch: {
                description: "Visual graph on coordinate plane",
                analogy: "Picture of function behavior",
                visualization: "Smooth curves approaching asymptotes",
                suitableFor: ['all_types'],
                explanation: "Graph shows overall behavior, asymptotes, intercepts, and holes"
            },
            table_values: {
                description: "Table of x and f(x) values",
                analogy: "List of input-output pairs",
                visualization: "Two-column table",
                suitableFor: ['all_types'],
                explanation: "Shows specific function values, helps identify patterns"
            },
            asymptote_diagram: {
                description: "Emphasis on asymptotic lines",
                analogy: "Boundary lines the graph approaches",
                visualization: "Dashed lines for asymptotes",
                suitableFor: ['all_types'],
                explanation: "Highlights limiting behavior"
            },
            interval_analysis: {
                description: "Number line showing sign changes",
                analogy: "Map of positive/negative regions",
                visualization: "Number line with + and - marked",
                suitableFor: ['sign_analysis'],
                explanation: "Shows where function is above/below x-axis"
            },
            factored_form: {
                description: "Function in completely factored form",
                analogy: "Breaking down into building blocks",
                visualization: "f(x) = [factors]/[factors]",
                suitableFor: ['general_rational'],
                explanation: "Reveals zeros, VAs, and holes clearly"
            },
            limit_notation: {
                description: "Formal limit statements",
                analogy: "Mathematical description of behavior near points",
                visualization: "lim notation",
                suitableFor: ['asymptotes', 'end_behavior'],
                explanation: "Precise mathematical language for behavior"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "f(x) = 1/x",
                    type: "simple_reciprocal",
                    features: {
                        VA: "x = 0",
                        HA: "y = 0",
                        intercepts: "None",
                        holes: "None"
                    },
                    difficulty: "easy"
                },
                {
                    problem: "f(x) = 1/(x - 2)",
                    type: "transformed_reciprocal",
                    features: {
                        VA: "x = 2",
                        HA: "y = 0",
                        intercepts: "y-intercept at (0, -1/2)",
                        holes: "None"
                    },
                    difficulty: "easy"
                },
                {
                    problem: "f(x) = 2/(x + 1) - 3",
                    type: "transformed_reciprocal",
                    features: {
                        VA: "x = -1",
                        HA: "y = -3",
                        intercepts: "x-intercept at (1/3, 0), y-intercept at (0, -1)",
                        holes: "None"
                    },
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "f(x) = (x + 2)/(x - 3)",
                    type: "general_rational",
                    features: {
                        VA: "x = 3",
                        HA: "y = 1",
                        intercepts: "x-intercept at (-2, 0), y-intercept at (0, -2/3)",
                        holes: "None"
                    },
                    difficulty: "medium"
                },
                {
                    problem: "f(x) = (x² - 4)/(x - 2)",
                    type: "general_rational",
                    features: {
                        VA: "None",
                        HA: "None (oblique)",
                        intercepts: "x-intercept at (-2, 0), y-intercept at (0, 2)",
                        holes: "Hole at (2, 4)"
                    },
                    difficulty: "medium"
                },
                {
                    problem: "f(x) = (2x² + 3x - 2)/(x² - 1)",
                    type: "general_rational",
                    features: {
                        VA: "x = 1, x = -1",
                        HA: "y = 2",
                        intercepts: "x-intercepts at roots of numerator",
                        holes: "Check for common factors"
                    },
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "f(x) = (x³ - 8)/(x² - 4)",
                    type: "general_rational",
                    features: {
                        VA: "x = -2 (x = 2 is hole)",
                        HA: "None",
                        OA: "y = x",
                        intercepts: "x-intercept at (2, 0) if not hole",
                        holes: "Check (x - 2) factor"
                    },
                    difficulty: "hard"
                },
                {
                    problem: "f(x) = (x² + x - 6)/(x² - x - 2)",
                    type: "general_rational",
                    features: {
                        VA: "Find by factoring denominator",
                        HA: "y = 1 (same degree)",
                        intercepts: "Factor to find",
                        holes: "Check common factors"
                    },
                    difficulty: "hard"
                },
                {
                    problem: "f(x) = (2x³ - x² - 1)/(x² + 1)",
                    type: "general_rational",
                    features: {
                        VA: "None (denominator never zero)",
                        HA: "None",
                        OA: "y = 2x - 1 (by division)",
                        intercepts: "Complex to find",
                        holes: "None"
                    },
                    difficulty: "hard"
                }
            ],
            byMethod: {
                simple_reciprocal: [
                    { problem: "f(x) = 1/x", features: "Standard hyperbola" },
                    { problem: "f(x) = -2/x", features: "Reflected and stretched" },
                    { problem: "f(x) = 3/x", features: "Stretched vertically" }
                ],
                transformed_reciprocal: [
                    { problem: "f(x) = 1/(x - 4)", features: "Shifted right 4" },
                    { problem: "f(x) = 1/(x + 2) + 3", features: "Shifted left 2, up 3" },
                    { problem: "f(x) = -2/(x - 1) - 1", features: "Reflected, stretched, shifted" }
                ],
                with_holes: [
                    { problem: "f(x) = (x - 3)/(x - 3)", features: "Hole at x = 3" },
                    { problem: "f(x) = (x² - 9)/(x - 3)", features: "Hole at x = 3" },
                    { problem: "f(x) = (x² - 1)/(x² - 2x + 1)", features: "Multiple features" }
                ],
                oblique_asymptotes: [
                    { problem: "f(x) = (x² + 1)/x", features: "OA: y = x" },
                    { problem: "f(x) = (x² - 4x + 3)/(x - 1)", features: "OA and hole" },
                    { problem: "f(x) = (2x² + 3x - 1)/(x + 2)", features: "OA: y = 2x - 1" }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            va_vs_hole: {
                misconception: "All denominator zeros are vertical asymptotes",
                reality: "If numerator and denominator share a factor, it's a hole, not a VA",
                correctiveExample: "f(x) = (x-2)/(x-2) has a hole at x=2, not a VA",
                commonIn: ['holes', 'vertical_asymptotes']
            },
            crossing_asymptotes: {
                misconception: "Graphs can never cross asymptotes",
                reality: "Graphs can cross horizontal/oblique asymptotes, just not vertical ones",
                correctiveExample: "f(x) = x/(x²+1) crosses its HA y=0 at the origin",
                commonIn: ['horizontal_asymptotes']
            },
            ha_finding: {
                misconception: "Horizontal asymptote is always y = 0",
                reality: "HA depends on degree comparison; y = 0 only when deg(Q) > deg(P)",
                correctiveExample: "f(x) = (2x²+1)/(x²-1) has HA y = 2, not y = 0",
                commonIn: ['horizontal_asymptotes']
            },
            degree_confusion: {
                misconception: "Using coefficients instead of degrees for HA",
                reality: "Compare highest powers, not leading coefficients (except when degrees equal)",
                correctiveExample: "f(x) = (5x²)/(2x³) → deg P < deg Q, so HA is y = 0, not y = 5/2",
                commonIn: ['horizontal_asymptotes']
            },
            intercepts_domain: {
                misconception: "Setting denominator = 0 to find x-intercepts",
                reality: "x-intercepts come from numerator = 0 (and must be in domain)",
                correctiveExample: "For f(x) = (x-3)/(x+1), x-intercept is at x = 3, not x = -1",
                commonIn: ['intercepts']
            },
            simplification_error: {
                misconception: "Simplifying without noting holes",
                reality: "Cancelled factors indicate holes that must be marked",
                correctiveExample: "(x²-4)/(x-2) = x+2 with hole at x = 2, not just x+2",
                commonIn: ['holes']
            },
            sign_analysis: {
                misconception: "Assuming sign based on one side of asymptote",
                reality: "Must test each interval separately; sign can differ",
                correctiveExample: "f(x) = (x-1)/(x+2) changes sign at x = -2 and x = 1",
                commonIn: ['sign_analysis']
            },
            end_behavior: {
                misconception: "End behavior is same as behavior near vertical asymptotes",
                reality: "End behavior is about x → ±∞, determined by horizontal/oblique asymptotes",
                correctiveExample: "As x → ∞, f(x) → HA, not ±∞",
                commonIn: ['end_behavior']
            },
            factoring_incomplete: {
                misconception: "Not factoring completely before analyzing",
                reality: "Must factor completely to find all zeros, holes, and asymptotes",
                correctiveExample: "x²-4 = (x-2)(x+2), don't leave as x²-4",
                commonIn: ['all_types']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            vertical_asymptote: {
                analogy: "Forbidden door",
                explanation: "A vertical asymptote is like a door you can never go through. You can get very close, but you'll never reach it. The function values shoot up to infinity or down to negative infinity as you approach.",
                suitableFor: ['vertical_asymptotes'],
                ELI5: "Imagine a magic wall you can't touch. The closer you get, the stronger it pushes you away - either way up high or way down low!"
            },
            horizontal_asymptote: {
                analogy: "Distant horizon",
                explanation: "A horizontal asymptote is like the horizon - no matter how far you walk toward it, it stays the same distance away. The function approaches this y-value but may never quite reach it (though it can cross it).",
                suitableFor: ['horizontal_asymptotes'],
                ELI5: "Think of the horizon when you're on a flat road. No matter how far you drive, the horizon line stays at the same height in the distance."
            },
            hole: {
                analogy: "Missing puzzle piece",
                explanation: "A hole is like a missing piece in a puzzle. The picture looks complete around it, but there's one point that's just not there. It's removable - we could fill it in if we wanted.",
                suitableFor: ['holes'],
                ELI5: "Imagine a dot-to-dot drawing where you forgot to make one dot. The lines around it look fine, but that one spot is missing!"
            },
            rational_function: {
                analogy: "Fraction of two machines",
                explanation: "A rational function is like having two machines - one making the numerator, one making the denominator - and dividing their outputs. When the denominator makes zero, we can't divide!",
                suitableFor: ['general_rational'],
                ELI5: "Pretend you're sharing cookies (top number) among friends (bottom number). If you have zero friends, you can't share!"
            },
            end_behavior: {
                analogy: "Long road trip destination",
                explanation: "End behavior is like asking 'where am I headed on this very long road trip?' Even if the road curves and turns, where does it eventually go?",
                suitableFor: ['end_behavior'],
                ELI5: "If you keep walking in one direction forever, where do you end up? Maybe you get closer and closer to a certain place."
            },
            sign_analysis: {
                analogy: "Temperature zones",
                explanation: "Sign analysis is like mapping out hot zones (positive) and cold zones (negative) along a road. The temperature changes as you cross certain points.",
                suitableFor: ['sign_analysis'],
                ELI5: "Imagine walking down a street with some warm sunny spots and some cool shady spots. We're figuring out where it's warm (above ground) and where it's cool (below ground)."
            },
            oblique_asymptote: {
                analogy: "Tilted horizon",
                explanation: "An oblique asymptote is like a tilted or slanted horizon. Instead of approaching a flat line, the function approaches a slanted line as you go far out.",
                suitableFor: ['oblique_asymptotes'],
                ELI5: "Instead of the horizon being flat, imagine it's tilted like a ramp. The further you go, the more your path follows that tilted line."
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            vertical_asymptotes: {
                level1: "What makes a fraction undefined?",
                level2: "A fraction is undefined when its denominator equals zero. Where does the denominator of this function equal zero?",
                level3: "Set the denominator equal to zero and solve for x",
                level4: "The denominator is {denominator}. Solve {denominator} = 0 to find x = {values}"
            },
            horizontal_asymptotes: {
                level1: "What happens when x gets very large (positive or negative)?",
                level2: "Compare the degree (highest power) of the numerator to the degree of the denominator",
                level3: "If degrees are equal, HA is the ratio of leading coefficients. If bottom degree is larger, HA is y = 0",
                level4: "Degree of numerator: {deg_num}, Degree of denominator: {deg_den}. Therefore HA is {ha_value}"
            },
            holes: {
                level1: "Can any factors be cancelled from the numerator and denominator?",
                level2: "Factor both the numerator and denominator completely. Do they share any common factors?",
                level3: "Common factors that cancel indicate holes, not vertical asymptotes",
                level4: "The common factor is {factor}. This creates a hole at x = {hole_x}"
            },
            intercepts: {
                level1: "Where does the graph cross the axes?",
                level2: "For x-intercepts, set the numerator = 0. For y-intercept, evaluate f(0)",
                level3: "x-intercepts: solve numerator = 0. y-intercept: substitute x = 0 (if in domain)",
                level4: "x-intercepts at {x_values}, y-intercept at {y_value}"
            },
            oblique_asymptotes: {
                level1: "What happens when the degree of the top is exactly one more than the degree of the bottom?",
                level2: "When deg(numerator) = deg(denominator) + 1, there's an oblique (slant) asymptote",
                level3: "Use polynomial long division to divide numerator by denominator. The quotient (without remainder) is the oblique asymptote",
                level4: "Divide {numerator} by {denominator}. The quotient is {oblique_equation}"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "What is the vertical asymptote of f(x) = 1/(x - 3)?",
                    answer: "x = 3",
                    assesses: "vertical_asymptotes",
                    difficulty: "basic"
                },
                {
                    question: "What is the horizontal asymptote of f(x) = (2x + 1)/(x - 4)?",
                    answer: "y = 2",
                    assesses: "horizontal_asymptotes",
                    difficulty: "basic"
                },
                {
                    question: "Where is the hole in f(x) = (x² - 9)/(x - 3)?",
                    answer: "x = 3",
                    assesses: "holes",
                    difficulty: "intermediate"
                },
                {
                    question: "Find the x-intercept of f(x) = (x - 5)/(x + 2)",
                    answer: "x = 5",
                    assesses: "intercepts",
                    difficulty: "basic"
                }
            ],
            formative: [
                {
                    question: "To find vertical asymptotes, you should:",
                    options: ["Set numerator = 0", "Set denominator = 0", "Set whole function = 0", "Use degree comparison"],
                    correct: "Set denominator = 0",
                    explanation: "Vertical asymptotes occur where denominator is zero (and numerator is not)"
                },
                {
                    question: "If deg(numerator) = deg(denominator), the horizontal asymptote is:",
                    options: ["y = 0", "No HA", "Ratio of leading coefficients", "The x-axis"],
                    correct: "Ratio of leading coefficients",
                    explanation: "When degrees are equal, HA equals ratio of leading coefficients"
                },
                {
                    question: "A hole occurs when:",
                    options: ["Denominator = 0", "Numerator = 0", "Common factor cancels", "Degrees are equal"],
                    correct: "Common factor cancels",
                    explanation: "Holes are removable discontinuities from cancelled factors"
                }
            ],
            summative: [
                {
                    question: "Graph f(x) = (x² - 4)/(x - 2) completely. Identify all features.",
                    requirements: ["Simplify and identify hole", "Find intercepts", "Find asymptotes", "Sketch graph"],
                    rubric: {
                        simplification: 2,
                        hole_identification: 2,
                        intercepts: 2,
                        asymptotes: 2,
                        graph: 2
                    }
                },
                {
                    question: "Analyze f(x) = (2x² + 3x - 2)/(x² - 1). Find all asymptotes, holes, and intercepts.",
                    requirements: ["Factor completely", "Identify features", "Determine behavior"],
                    rubric: {
                        factoring: 2,
                        vertical_asymptotes: 2,
                        horizontal_asymptote: 2,
                        holes: 2,
                        intercepts: 2
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "f(x) = 1/(x + 2)",
                    "f(x) = 3/(x - 1)",
                    "f(x) = x/(x - 4)",
                    "f(x) = (x + 1)/(x - 2)"
                ],
                medium: [
                    "f(x) = (x² - 1)/(x - 1)",
                    "f(x) = (2x + 3)/(x² - 4)",
                    "f(x) = (x² + 2x)/(x + 2)",
                    "f(x) = (x² - 5x + 6)/(x - 2)"
                ],
                hard: [
                    "f(x) = (x³ - 8)/(x² - 4)",
                    "f(x) = (2x² - x - 3)/(x² - 2x - 3)",
                    "f(x) = (x² + 3x + 2)/(x² - x - 6)",
                    "f(x) = (x³ - 1)/(x² + x + 1)"
                ]
            },
            byObjective: {
                canFindVerticalAsymptotes: [
                    "f(x) = 1/(x - 5)",
                    "f(x) = (x + 2)/(x² - 9)",
                    "f(x) = 3/(x² + 4x + 3)"
                ],
                canFindHorizontalAsymptotes: [
                    "f(x) = (3x + 1)/(x - 2)",
                    "f(x) = (x² + 1)/(2x² - 3)",
                    "f(x) = (5x)/(x² + 1)"
                ],
                canIdentifyHoles: [
                    "f(x) = (x - 3)/(x - 3)",
                    "f(x) = (x² - 16)/(x + 4)",
                    "f(x) = (x² - 2x - 3)/(x - 3)"
                ],
                canFindIntercepts: [
                    "f(x) = (x - 4)/(x + 1)",
                    "f(x) = (x² - 9)/(x - 2)",
                    "f(x) = (2x + 6)/(x² - 1)"
                ],
                canGraphCompletely: [
                    "f(x) = (x - 1)/(x + 2)",
                    "f(x) = (x² - 4)/(x - 2)",
                    "f(x) = (x + 3)/(x² - x - 6)"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "simple_1/x": "Use basic reciprocal template",
                "transformed_1/(x-h)+k": "Identify transformations, plot asymptotes, sketch",
                "factorable": "Factor completely first, check for holes",
                "unfactorable_denominator": "Find roots numerically if needed",
                "equal_degrees": "Find HA as ratio of leading coefficients",
                "top_degree_larger_by_1": "Perform long division for oblique asymptote",
                "top_degree_much_larger": "No horizontal or oblique asymptote"
            },
            whenToUseWhat: {
                factoring: "Always factor both numerator and denominator completely first",
                long_division: "When deg(P) ≥ deg(Q) and you need oblique asymptote or rewriting",
                test_points: "To determine sign in each interval",
                limit_notation: "For formal analysis of behavior at asymptotes",
                graphing_technology: "To verify your sketch, especially for complex functions"
            },
            methodSelection: {
                factorsToConsider: [
                    "Are numerator and denominator factorable?",
                    "Are there common factors (holes)?",
                    "What are the degrees (for asymptote type)?",
                    "How many vertical asymptotes?",
                    "Is there symmetry?"
                ],
                generalApproach: [
                    "1. Factor numerator and denominator completely",
                    "2. Simplify and identify holes",
                    "3. Find vertical asymptotes (remaining denominator zeros)",
                    "4. Find horizontal/oblique asymptotes (degree comparison)",
                    "5. Find intercepts",
                    "6. Perform sign analysis",
                    "7. Sketch graph with all features"
                ]
            },
            optimizationTips: {
                "Factor first": "Factoring reveals holes and simplifies finding all features",
                "Organize work": "List domain, VAs, HAs, holes, intercepts before graphing",
                "Check your work": "Verify graph behavior matches asymptote analysis",
                "Use symmetry": "Check if function is even, odd, or has other symmetry to simplify"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Asymptote Sprint",
                    timeLimit: 120,
                    problems: [
                        { function: "f(x) = 1/(x - 2)", find: "VAs and HAs" },
                        { function: "f(x) = (x + 1)/(x - 3)", find: "VAs and HAs" },
                        { function: "f(x) = (3x + 2)/(2x - 1)", find: "VAs and HAs" },
                        { function: "f(x) = x/(x² - 4)", find: "VAs and HAs" },
                        { function: "f(x) = (x² + 1)/(x² - 9)", find: "VAs and HAs" }
                    ]
                },
                {
                    name: "Hole Hunt",
                    timeLimit: 90,
                    problems: [
                        "f(x) = (x - 5)/(x - 5)",
                        "f(x) = (x² - 9)/(x - 3)",
                        "f(x) = (x² - 1)/(x² - 2x + 1)",
                        "f(x) = (x² + 3x + 2)/(x + 1)"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Function",
                    given: "A rational function has VA at x = 2, HA at y = 3, and passes through (0, 1)",
                    solve: "Find a possible function",
                    solution: "f(x) = (3x - 2)/(x - 2) is one possibility"
                },
                {
                    name: "Feature Matching",
                    challenge: "Create a rational function with exactly these features:",
                    requirements: "VAs at x = -1 and x = 3, HA at y = 2, x-intercept at x = 4",
                    sampleSolution: "f(x) = 2(x - 4)/[(x + 1)(x - 3)]"
                },
                {
                    name: "Hole vs. Asymptote",
                    problem: "Why does f(x) = (x² - 4)/(x - 2) have a hole but g(x) = (x + 2)/(x - 2) has an asymptote?",
                    solution: "f(x) has common factor (x - 2) that cancels; g(x) does not"
                }
            ],
            applications: [
                {
                    scenario: "Average Cost Minimization",
                    problem: "Company has cost C(x) = (5000 + 20x)/x. Find optimal production level.",
                    analysis: "Graph reveals HA at y = 20, meaning cost approaches $20/item for large production",
                    economics: "Fixed costs spread over more units"
                },
                {
                    scenario: "Drug Concentration Peak",
                    problem: "C(t) = 5t/(t² + 1). When is concentration maximum?",
                    analysis: "Graph or calculus shows maximum at t = 1 hour",
                    medical: "Timing for peak effectiveness"
                },
                {
                    scenario: "Lens Focus",
                    problem: "For lens with focal length 10cm, graph image distance vs object distance",
                    equation: "d_i = 10·d_o/(d_o - 10)",
                    physics: "VA at d_o = 10 (focal point)"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "f(x) = (x² - 9)/(x - 3)",
                        "Vertical asymptote at x = 3",  // ERROR: this is a hole
                        "Horizontal asymptote at y = 0"  // ERROR: should be no HA (oblique)
                    ],
                    correctAnalysis: "Hole at x = 3 (factor cancels), oblique asymptote y = x + 3",
                    errorType: "Confused hole with VA, wrong HA analysis"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "f(x) = (3x² + 2)/(x² - 1)",
                        "HA at y = 0 because denominator degree larger"  // ERROR: degrees equal
                    ],
                    correctAnalysis: "Degrees equal, so HA is y = 3/1 = 3",
                    errorType: "Degree comparison error"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "f(x) = (x - 2)/(x + 3)",
                        "x-intercept: set denominator = 0, so x = -3"  // ERROR: should use numerator
                    ],
                    correctAnalysis: "x-intercept from numerator = 0, so x = 2 (and it's in domain)",
                    errorType: "Used denominator instead of numerator for x-intercept"
                }
            ]
        };
    }

    // MAIN SOLVER METHOD
    solveRationalProblem(config) {
        const { equation, scenario, parameters, problemType, context } = config;

        try {
            this.currentProblem = this.parseRationalProblem(equation, scenario, parameters, problemType, context);
            this.currentSolution = this.solveRationalProblem_Internal(this.currentProblem);
            this.solutionSteps = this.generateRationalSteps(this.currentProblem, this.currentSolution);
            this.generateRationalGraphData();
            this.generateRationalWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                features: this.currentSolution?.features,
                graphData: this.graphData
            };

        } catch (error) {
            throw new Error(`Failed to solve rational function problem: ${error.message}`);
        }
    }

    parseRationalProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = equation ? this.cleanMathExpression(equation) : '';

        if (problemType && this.rationalTypes[problemType]) {
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

        // Auto-detect rational function type
        for (const [type, config] of Object.entries(this.rationalTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(scenario)) {
                    const match = cleanInput.match(pattern);
                    const extractedParams = this.extractRationalParameters(match, type);

                    return {
                        originalInput: equation || scenario,
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

        // Default to complete graphing
        return {
            originalInput: equation || 'Rational function',
            cleanInput: cleanInput,
            type: 'complete_graph',
            scenario: scenario,
            parameters: { ...parameters },
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
            .replace(/\*\*/g, '^')
            .trim();
    }

    extractRationalParameters(match, type) {
        const params = {};
        if (!match) return params;

        switch(type) {
            case 'simple_reciprocal':
                if (match[1]) {
                    params.a = this.parseCoefficient(match[1]);
                } else {
                    params.a = 1;
                }
                break;

            case 'transformed_reciprocal':
                // Extract a, h, k from a/(x - h) + k
                if (match[1]) params.a = this.parseCoefficient(match[1]);
                // Further parsing would extract h and k
                break;

            // Add more extraction logic as needed
        }

        return params;
    }

    parseCoefficient(coeff) {
        if (!coeff || coeff.trim() === '') return 0;
        let cleaned = coeff.replace(/\s+/g, '');
        if (cleaned === '+' || cleaned === '') return 1;
        if (cleaned === '-') return -1;

        const fractionMatch = cleaned.match(/^([+-]?\d*\.?\d*)\/(\d*\.?\d*)$/);
        if (fractionMatch) {
            const numerator = parseFloat(fractionMatch[1]) || 1;
            const denominator = parseFloat(fractionMatch[2]) || 1;
            return denominator !== 0 ? numerator / denominator : 0;
        }

        const num = parseFloat(cleaned);
        return isNaN(num) ? 0 : num;
    }

    solveRationalProblem_Internal(problem) {
        const solver = this.rationalTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for rational problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // RATIONAL FUNCTION SOLVERS

    graphSimpleReciprocal(problem) {
        const { a } = problem.parameters;
        const aVal = a || 1;

        return {
            equation: `f(x) = ${aVal}/x`,
            type: 'Simple Reciprocal Function',
            features: {
                domain: '(-∞, 0) ∪ (0, ∞)',
                range: '(-∞, 0) ∪ (0, ∞)',
                verticalAsymptotes: ['x = 0'],
                horizontalAsymptotes: ['y = 0'],
                obliqueAsymptotes: [],
                holes: [],
                xIntercepts: [],
                yIntercept: null,
                symmetry: aVal === 1 ? 'Odd (origin symmetry)' : 'Origin symmetry if a > 0'
            },
            graphDescription: 'Two-branch hyperbola in opposite quadrants',
            category: 'simple_reciprocal'
        };
    }

    graphTransformedReciprocal(problem) {
        const { a, h, k } = problem.parameters;
        const aVal = a || 1;
        const hVal = h || 0;
        const kVal = k || 0;

        const yIntercept = hVal !== 0 ? (aVal / (0 - hVal)) + kVal : null;

        return {
            equation: `f(x) = ${aVal}/(x - ${hVal}) + ${kVal}`,
            type: 'Transformed Reciprocal Function',
            features: {
                domain: `(-∞, ${hVal}) ∪ (${hVal}, ∞)`,
                range: `(-∞, ${kVal}) ∪ (${kVal}, ∞)`,
                verticalAsymptotes: [`x = ${hVal}`],
                horizontalAsymptotes: [`y = ${kVal}`],
                obliqueAsymptotes: [],
                holes: [],
                xIntercepts: kVal !== 0 ? [`x = ${hVal - aVal/kVal}`] : [],
                yIntercept: yIntercept,
                transformations: {
                    horizontalShift: hVal,
                    verticalShift: kVal,
                    verticalStretch: Math.abs(aVal),
                    reflection: aVal < 0 ? 'Reflected over x-axis' : 'None'
                }
            },
            graphDescription: 'Hyperbola shifted and transformed',
            category: 'transformed_reciprocal'
        };
    }

    graphGeneralRational(problem) {
        // Placeholder for general rational function analysis
        return {
            equation: problem.cleanInput,
            type: 'General Rational Function',
            features: {
                note: 'Complete factoring and analysis required',
                steps: [
                    'Factor numerator and denominator',
                    'Identify and cancel common factors (holes)',
                    'Find vertical asymptotes',
                    'Find horizontal/oblique asymptotes',
                    'Find intercepts',
                    'Perform sign analysis',
                    'Sketch graph'
                ]
            },
            category: 'general_rational'
        };
    }

    analyzeVerticalAsymptotes(problem) {
        return {
            focus: 'Vertical Asymptotes',
            process: [
                'Set denominator equal to zero',
                'Solve for x',
                'Verify numerator is not also zero (would be hole)',
                'Determine behavior on each side (test points or sign analysis)'
            ],
            interpretation: 'Vertical asymptotes are x-values excluded from domain where function approaches ±∞',
            category: 'vertical_asymptotes'
        };
    }

    analyzeHorizontalAsymptotes(problem) {
        return {
            focus: 'Horizontal Asymptotes',
            process: [
                'Compare degree of numerator (n) to degree of denominator (m)',
                'If n < m: HA is y = 0',
                'If n = m: HA is y = (leading coeff of num)/(leading coeff of denom)',
                'If n > m: No horizontal asymptote (check for oblique)'
            ],
            interpretation: 'Horizontal asymptotes show end behavior as x → ±∞',
            category: 'horizontal_asymptotes'
        };
    }

    analyzeObliqueAsymptotes(problem) {
        return {
            focus: 'Oblique (Slant) Asymptotes',
            process: [
                'Check if degree of numerator = degree of denominator + 1',
                'If yes, perform polynomial long division',
                'Quotient (ignore remainder) is the oblique asymptote',
                'Write as y = mx + b'
            ],
            interpretation: 'Oblique asymptotes show end behavior when function grows linearly',
            category: 'oblique_asymptotes'
        };
    }

    analyzeHoles(problem) {
        return {
            focus: 'Holes (Removable Discontinuities)',
            process: [
                'Factor numerator and denominator completely',
                'Identify common factors',
                'Cancel common factors',
                'x-values from cancelled factors are holes',
                'Find y-coordinate by evaluating simplified function at hole x-value'
            ],
            interpretation: 'Holes are points missing from graph due to cancelled factors',
            category: 'holes'
        };
    }

    analyzeIntercepts(problem) {
        return {
            focus: 'Intercepts',
            process: {
                xIntercepts: [
                    'Set numerator = 0',
                    'Solve for x',
                    'Verify x is in domain (denominator ≠ 0)',
                    'Points are (x, 0)'
                ],
                yIntercept: [
                    'Substitute x = 0',
                    'Calculate f(0) if 0 is in domain',
                    'Point is (0, f(0))'
                ]
            },
            interpretation: 'Intercepts are where graph crosses axes',
            category: 'intercepts'
        };
    }

    graphCompleteRational(problem) {
        return {
            type: 'Complete Rational Function Analysis and Graphing',
            systematicApproach: [
                '1. Factor completely and simplify',
                '2. Find domain',
                '3. Identify holes',
                '4. Find vertical asymptotes',
                '5. Find horizontal/oblique asymptotes',
                '6. Find intercepts',
                '7. Perform sign analysis',
                '8. Sketch graph with all features'
            ],
            category: 'complete_graphing'
        };
    }

    // STEP GENERATION

    generateRationalSteps(problem, solution) {
        let baseSteps = this.generateBaseRationalSteps(problem, solution);

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
        const { type } = problem;
        const category = this.rationalTypes[type]?.category;

        switch(category) {
            case 'simple_reciprocal':
                return this.generateSimpleReciprocalSteps(problem, solution);
            case 'transformed_reciprocal':
                return this.generateTransformedReciprocalSteps(problem, solution);
            case 'vertical_asymptotes':
                return this.generateVerticalAsymptoteSteps(problem, solution);
            case 'horizontal_asymptotes':
                return this.generateHorizontalAsymptoteSteps(problem, solution);
            case 'holes':
                return this.generateHoleSteps(problem, solution);
            case 'intercepts':
                return this.generateInterceptSteps(problem, solution);
            case 'complete_graphing':
                return this.generateCompleteGraphingSteps(problem, solution);
            default:
                return this.generateGenericRationalSteps(problem, solution);
        }
    }

    generateSimpleReciprocalSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify function type',
            description: 'This is a simple reciprocal function',
            expression: solution.equation,
            reasoning: 'Form is f(x) = a/x, a basic rational function',
            goalStatement: 'Graph the hyperbola with two branches'
        });

        steps.push({
            stepNumber: 2,
            step: 'Find vertical asymptote',
            description: 'Denominator = 0 when x = 0',
            expression: 'VA: x = 0',
            reasoning: 'Function is undefined at x = 0',
            algebraicRule: 'Vertical asymptotes occur where denominator = 0'
        });

        steps.push({
            stepNumber: 3,
            step: 'Find horizontal asymptote',
            description: 'As x → ±∞, f(x) → 0',
            expression: 'HA: y = 0',
            reasoning: 'Degree of denominator > degree of numerator',
            algebraicRule: 'When deg(denominator) > deg(numerator), HA is y = 0'
        });

        steps.push({
            stepNumber: 4,
            step: 'Identify intercepts',
            description: 'No x-intercepts (numerator never zero), no y-intercept (0 not in domain)',
            expression: 'No intercepts',
            reasoning: 'Numerator is constant; x = 0 excluded from domain'
        });

        steps.push({
            stepNumber: 5,
            step: 'Sketch graph',
            description: 'Draw two branches in opposite quadrants approaching the asymptotes',
            graphFeatures: {
                branches: 'Two branches',
                quadrants: solution.parameters?.a >= 0 ? 'I and III' : 'II and IV',
                behavior: 'Approaches but never touches axes'
            },
            finalAnswer: true
        });

        return steps;
    }

    generateTransformedReciprocalSteps(problem, solution) {
        const { h, k } = solution.features.transformations || {};
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify transformations',
            description: `This is f(x) = a/(x - h) + k with transformations`,
            expression: solution.equation,
            reasoning: 'Transformed reciprocal function',
            transformations: solution.features.transformations
        });

        steps.push({
            stepNumber: 2,
            step: 'Find vertical asymptote',
            description: `VA at x = h`,
            expression: `VA: ${solution.features.verticalAsymptotes[0]}`,
            reasoning: 'Denominator zero when x = h'
        });

        steps.push({
            stepNumber: 3,
            step: 'Find horizontal asymptote',
            description: `HA at y = k`,
            expression: `HA: ${solution.features.horizontalAsymptotes[0]}`,
            reasoning: 'Function approaches k as x → ±∞'
        });

        steps.push({
            stepNumber: 4,
            step: 'Find intercepts',
            description: 'Calculate x and y intercepts if they exist',
            xIntercepts: solution.features.xIntercepts,
            yIntercept: solution.features.yIntercept
        });

        steps.push({
            stepNumber: 5,
            step: 'Sketch graph',
            description: 'Plot asymptotes, intercepts, then sketch branches',
            graphFeatures: {
                asymptotes: 'Draw dashed lines for asymptotes',
                intercepts: 'Mark intercept points',
                branches: 'Sketch hyperbola approaching asymptotes'
            },
            finalAnswer: true
        });

        return steps;
    }

    generateVerticalAsymptoteSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Finding Vertical Asymptotes',
            description: 'Set denominator = 0 and solve',
            process: solution.process,
            reasoning: 'VAs occur where function is undefined and approaches ±∞',
            finalAnswer: true
        }];
    }

    generateHorizontalAsymptoteSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Finding Horizontal Asymptotes',
            description: 'Compare degrees of numerator and denominator',
            process: solution.process,
            reasoning: 'HA shows end behavior as x → ±∞',
            finalAnswer: true
        }];
    }

    generateHoleSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Finding Holes',
            description: 'Factor and identify common factors that cancel',
            process: solution.process,
            reasoning: 'Holes are removable discontinuities from cancelled factors',
            finalAnswer: true
        }];
    }

    generateInterceptSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Finding Intercepts',
            description: 'Set numerator = 0 for x-intercepts, evaluate f(0) for y-intercept',
            process: solution.process,
            reasoning: 'Intercepts show where graph crosses axes',
            finalAnswer: true
        }];
    }

    generateCompleteGraphingSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Factor completely',
            description: 'Factor numerator and denominator to reveal structure',
            reasoning: 'Factoring reveals zeros, holes, and asymptotes'
        });

        steps.push({
            stepNumber: 2,
            step: 'Simplify and identify holes',
            description: 'Cancel common factors and note holes',
            reasoning: 'Cancelled factors create removable discontinuities'
        });

        steps.push({
            stepNumber: 3,
            step: 'Find vertical asymptotes',
            description: 'Remaining denominator zeros are VAs',
            reasoning: 'VAs are where function approaches ±∞'
        });

        steps.push({
            stepNumber: 4,
            step: 'Find horizontal/oblique asymptotes',
            description: 'Compare degrees for HA, or use division for oblique',
            reasoning: 'Asymptotes show end behavior'
        });

        steps.push({
            stepNumber: 5,
            step: 'Find intercepts',
            description: 'Numerator zeros (in domain) for x-intercepts, f(0) for y-intercept',
            reasoning: 'Intercepts are reference points'
        });

        steps.push({
            stepNumber: 6,
            step: 'Sign analysis',
            description: 'Test points in intervals to determine where function is positive/negative',
            reasoning: 'Sign shows if graph is above or below x-axis'
        });

        steps.push({
            stepNumber: 7,
            step: 'Sketch graph',
            description: 'Combine all features into complete graph',
            reasoning: 'Synthesize asymptotes, intercepts, holes, and sign into smooth curve',
            finalAnswer: true
        });

        return steps;
    }

    generateGenericRationalSteps(problem, solution) {
        return [{
            step
