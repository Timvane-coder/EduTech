// Enhanced Function Graphs Mathematical Workbook - Comprehensive Graphing System
import * as math from 'mathjs';

export class EnhancedFunctionGraphsMathematicalWorkbook {
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

        // Graph-specific options
        this.graphResolution = options.graphResolution || 100; // Number of points to plot
        this.domainStart = options.domainStart || -10;
        this.domainEnd = options.domainEnd || 10;
        this.rangeStart = options.rangeStart || -10;
        this.rangeEnd = options.rangeEnd || 10;
        this.showGrid = options.showGrid !== false;
        this.showAxes = options.showAxes !== false;
        this.showIntercepts = options.showIntercepts !== false;
        this.showAsymptotes = options.showAsymptotes !== false;
        this.showCriticalPoints = options.showCriticalPoints !== false;

        this.mathSymbols = this.initializeMathSymbols();
        this.setThemeColors();
        this.initializeFunctionSolvers();
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
        this.initializeFunctionLessons();
        this.initializeGraphFeatureDatabase();
        this.initializeTransformationDatabase();
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
            // Function symbols
            'compose': '∘', 'rightarrow': '→', 'mapsto': '↦'
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
                graphLine: '#2563eb',
                asymptoteLine: '#dc2626',
                interceptPoint: '#16a34a'
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
                graphLine: '#1e40af',
                asymptoteLine: '#b91c1c',
                interceptPoint: '#15803d'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeFunctionLessons() {
        this.lessons = {
            linear_functions: {
                title: "Linear Functions",
                concepts: [
                    "General form: f(x) = mx + b",
                    "Graph is a straight line",
                    "m is slope (rate of change)",
                    "b is y-intercept (starting value)",
                    "Domain and range are all real numbers"
                ],
                theory: "Linear functions represent constant rate relationships. The slope determines steepness and direction, while the y-intercept shows where the line crosses the y-axis.",
                keyFormulas: {
                    "Slope-Intercept Form": "y = mx + b",
                    "Point-Slope Form": "y - y₁ = m(x - x₁)",
                    "Standard Form": "Ax + By = C",
                    "Slope Formula": "m = (y₂ - y₁)/(x₂ - x₁)"
                },
                graphingSteps: [
                    "Identify slope m and y-intercept b",
                    "Plot y-intercept (0, b)",
                    "Use slope to find another point",
                    "Draw line through points",
                    "Extend in both directions"
                ],
                applications: [
                    "Distance vs time graphs",
                    "Cost calculations",
                    "Temperature conversion",
                    "Salary with commission"
                ]
            },

            quadratic_functions: {
                title: "Quadratic Functions",
                concepts: [
                    "General form: f(x) = ax² + bx + c",
                    "Graph is a parabola (U-shape)",
                    "a determines opening direction and width",
                    "Vertex is maximum or minimum point",
                    "Axis of symmetry: x = -b/(2a)"
                ],
                theory: "Quadratic functions model situations with constant acceleration or deceleration. The graph is symmetric about a vertical line through the vertex.",
                keyFormulas: {
                    "Standard Form": "f(x) = ax² + bx + c",
                    "Vertex Form": "f(x) = a(x - h)² + k",
                    "Factored Form": "f(x) = a(x - r₁)(x - r₂)",
                    "Vertex": "(h, k) where h = -b/(2a)",
                    "Discriminant": "Δ = b² - 4ac"
                },
                graphingSteps: [
                    "Find vertex using h = -b/(2a)",
                    "Determine if parabola opens up (a > 0) or down (a < 0)",
                    "Find y-intercept (0, c)",
                    "Find x-intercepts by solving ax² + bx + c = 0",
                    "Plot additional points for shape",
                    "Draw smooth parabola"
                ],
                applications: [
                    "Projectile motion",
                    "Profit maximization",
                    "Area optimization",
                    "Bridge arch design"
                ]
            },

            polynomial_functions: {
                title: "Polynomial Functions",
                concepts: [
                    "General form: f(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀",
                    "Degree n determines number of turning points (at most n-1)",
                    "Leading coefficient determines end behavior",
                    "Continuous and smooth curves",
                    "Can have up to n zeros"
                ],
                theory: "Polynomial functions are built from power functions. Their behavior is determined by degree and leading coefficient.",
                keyFormulas: {
                    "General Form": "f(x) = aₙxⁿ + ... + a₁x + a₀",
                    "Factored Form": "f(x) = a(x - r₁)(x - r₂)...(x - rₙ)",
                    "End Behavior": "Determined by leading term aₙxⁿ"
                },
                graphingSteps: [
                    "Find zeros by factoring or using formulas",
                    "Determine end behavior from leading term",
                    "Find y-intercept (0, a₀)",
                    "Identify multiplicity of zeros",
                    "Plot test points between zeros",
                    "Sketch smooth curve"
                ],
                applications: [
                    "Population modeling",
                    "Economic trends",
                    "Engineering stress-strain curves",
                    "Scientific data fitting"
                ]
            },

            rational_functions: {
                title: "Rational Functions",
                concepts: [
                    "General form: f(x) = P(x)/Q(x) where P, Q are polynomials",
                    "Vertical asymptotes where Q(x) = 0",
                    "Horizontal asymptote from degree comparison",
                    "Holes occur where both P(x) and Q(x) = 0",
                    "Domain excludes zeros of denominator"
                ],
                theory: "Rational functions represent ratios of polynomials. They can model rates, proportions, and inverse relationships.",
                keyFormulas: {
                    "General Form": "f(x) = P(x)/Q(x)",
                    "Vertical Asymptote": "Q(x) = 0 (if not canceled)",
                    "Horizontal Asymptote": "Compare degrees of P and Q",
                    "Slant Asymptote": "When deg(P) = deg(Q) + 1"
                },
                graphingSteps: [
                    "Factor numerator and denominator",
                    "Find domain (exclude Q(x) = 0)",
                    "Find vertical asymptotes and holes",
                    "Find horizontal or slant asymptote",
                    "Find intercepts",
                    "Plot test points in each region",
                    "Sketch curve approaching asymptotes"
                ],
                applications: [
                    "Concentration in mixtures",
                    "Average cost functions",
                    "Lens equations in optics",
                    "Electrical resistance"
                ]
            },

            exponential_functions: {
                title: "Exponential Functions",
                concepts: [
                    "General form: f(x) = abˣ where b > 0, b ≠ 1",
                    "Continuous growth (b > 1) or decay (0 < b < 1)",
                    "Horizontal asymptote at y = 0",
                    "y-intercept at (0, a)",
                    "Never touches x-axis"
                ],
                theory: "Exponential functions model growth and decay processes where the rate of change is proportional to the current amount.",
                keyFormulas: {
                    "General Form": "f(x) = abˣ",
                    "Natural Exponential": "f(x) = aeᵏˣ",
                    "Compound Interest": "A = P(1 + r/n)^(nt)",
                    "Continuous Growth": "A = Pe^(rt)"
                },
                graphingSteps: [
                    "Identify a (initial value) and b (base)",
                    "Determine if growth (b > 1) or decay (0 < b < 1)",
                    "Plot y-intercept (0, a)",
                    "Draw horizontal asymptote y = 0",
                    "Plot additional points",
                    "Sketch smooth curve"
                ],
                applications: [
                    "Population growth",
                    "Radioactive decay",
                    "Compound interest",
                    "Epidemic spread",
                    "Carbon dating"
                ]
            },

            logarithmic_functions: {
                title: "Logarithmic Functions",
                concepts: [
                    "General form: f(x) = logₐ(x) where a > 0, a ≠ 1",
                    "Inverse of exponential function",
                    "Vertical asymptote at x = 0",
                    "Domain: x > 0",
                    "x-intercept at (1, 0)"
                ],
                theory: "Logarithmic functions are inverses of exponential functions. They measure the power to which a base must be raised.",
                keyFormulas: {
                    "General Form": "y = logₐ(x)",
                    "Natural Logarithm": "y = ln(x) = logₑ(x)",
                    "Common Logarithm": "y = log(x) = log₁₀(x)",
                    "Inverse Relationship": "y = logₐ(x) ⟺ x = aʸ",
                    "Change of Base": "logₐ(x) = ln(x)/ln(a)"
                },
                graphingSteps: [
                    "Identify base a",
                    "Draw vertical asymptote x = 0",
                    "Plot x-intercept (1, 0)",
                    "Plot point (a, 1)",
                    "Plot additional points",
                    "Sketch smooth curve"
                ],
                applications: [
                    "pH in chemistry",
                    "Richter scale (earthquakes)",
                    "Decibel scale (sound)",
                    "Information theory",
                    "Solving exponential equations"
                ]
            },

            absolute_value_functions: {
                title: "Absolute Value Functions",
                concepts: [
                    "General form: f(x) = a|x - h| + k",
                    "V-shaped graph",
                    "Vertex at (h, k)",
                    "Piecewise linear function",
                    "Symmetric about vertical line x = h"
                ],
                theory: "Absolute value functions measure distance from zero. They create V-shaped graphs that reflect negative inputs.",
                keyFormulas: {
                    "General Form": "f(x) = a|x - h| + k",
                    "Piecewise Definition": "f(x) = {x if x ≥ 0; -x if x < 0}",
                    "Vertex": "(h, k)"
                },
                graphingSteps: [
                    "Find vertex (h, k)",
                    "Determine if opening up (a > 0) or down (a < 0)",
                    "Plot vertex",
                    "Find x-intercepts if they exist",
                    "Plot points on both sides of vertex",
                    "Draw V-shape with vertex at corner"
                ],
                applications: [
                    "Error measurement",
                    "Distance calculations",
                    "Tolerance in manufacturing",
                    "Optimization problems"
                ]
            },

            piecewise_functions: {
                title: "Piecewise Functions",
                concepts: [
                    "Different formulas for different intervals",
                    "May or may not be continuous",
                    "Defined by multiple rules",
                    "Important to check continuity at boundaries",
                    "Domain is union of all pieces"
                ],
                theory: "Piecewise functions allow different behaviors in different regions, useful for modeling real-world situations with changing rules.",
                keyFormulas: {
                    "General Form": "f(x) = {f₁(x) if condition₁; f₂(x) if condition₂; ...}",
                    "Continuity at x=a": "lim(x→a⁻) f(x) = lim(x→a⁺) f(x) = f(a)"
                },
                graphingSteps: [
                    "Identify all pieces and their domains",
                    "Graph each piece separately",
                    "Check endpoints (open or closed circles)",
                    "Verify continuity at boundaries",
                    "Combine all pieces on one graph"
                ],
                applications: [
                    "Tax brackets",
                    "Shipping costs",
                    "Parking fees",
                    "Utility billing"
                ]
            },

            trigonometric_functions: {
                title: "Trigonometric Functions",
                concepts: [
                    "Basic functions: sin(x), cos(x), tan(x)",
                    "Periodic behavior",
                    "Amplitude, period, phase shift",
                    "Range depends on function type",
                    "Reciprocal functions: csc, sec, cot"
                ],
                theory: "Trigonometric functions model periodic phenomena. They arise from the unit circle and right triangle ratios.",
                keyFormulas: {
                    "Sine": "f(x) = A sin(B(x - C)) + D",
                    "Cosine": "f(x) = A cos(B(x - C)) + D",
                    "Tangent": "f(x) = A tan(B(x - C)) + D",
                    "Amplitude": "|A|",
                    "Period": "2π/|B| (for sin, cos); π/|B| (for tan)",
                    "Phase Shift": "C",
                    "Vertical Shift": "D"
                },
                graphingSteps: [
                    "Identify A, B, C, D parameters",
                    "Calculate amplitude, period, phase shift",
                    "Draw midline at y = D",
                    "Mark one complete period",
                    "Plot key points (max, min, zeros)",
                    "Sketch smooth wave"
                ],
                applications: [
                    "Sound waves",
                    "Tides and ocean waves",
                    "Seasonal temperatures",
                    "Electrical currents",
                    "Planetary motion"
                ]
            },

            square_root_functions: {
                title: "Square Root and Radical Functions",
                concepts: [
                    "General form: f(x) = a√(x - h) + k",
                    "Domain: x ≥ h (for square root)",
                    "Starting point at (h, k)",
                    "Increasing if a > 0, decreasing if a < 0",
                    "Half of a parabola on its side"
                ],
                theory: "Square root functions are inverses of quadratic functions (restricted domain). They grow slower than linear functions.",
                keyFormulas: {
                    "General Form": "f(x) = a√(x - h) + k",
                    "Domain": "x ≥ h",
                    "Range": "y ≥ k (if a > 0); y ≤ k (if a < 0)",
                    "Starting Point": "(h, k)"
                },
                graphingSteps: [
                    "Find starting point (h, k)",
                    "Determine domain x ≥ h",
                    "Plot starting point",
                    "Calculate several points to the right",
                    "Sketch smooth curve",
                    "Show it continues indefinitely to right"
                ],
                applications: [
                    "Physics: pendulum period",
                    "Geometry: area to side length",
                    "Finance: diminishing returns",
                    "Statistics: standard deviation"
                ]
            },

            function_transformations: {
                title: "Function Transformations",
                concepts: [
                    "Vertical shifts: f(x) + k",
                    "Horizontal shifts: f(x - h)",
                    "Vertical stretch/compression: a·f(x)",
                    "Horizontal stretch/compression: f(bx)",
                    "Reflections: -f(x) and f(-x)"
                ],
                theory: "Transformations modify parent functions systematically. Understanding transformations helps graph function families efficiently.",
                keyFormulas: {
                    "Vertical Shift": "f(x) + k (up if k > 0, down if k < 0)",
                    "Horizontal Shift": "f(x - h) (right if h > 0, left if h < 0)",
                    "Vertical Stretch": "a·f(x) where |a| > 1",
                    "Vertical Compression": "a·f(x) where 0 < |a| < 1",
                    "Reflection over x-axis": "-f(x)",
                    "Reflection over y-axis": "f(-x)"
                },
                graphingSteps: [
                    "Start with parent function",
                    "Apply horizontal shifts",
                    "Apply horizontal stretches/compressions",
                    "Apply reflections",
                    "Apply vertical stretches/compressions",
                    "Apply vertical shifts"
                ],
                applications: [
                    "Signal processing",
                    "Image transformations",
                    "Physics: changing reference frames",
                    "Engineering: scaling designs"
                ]
            }
        };
    }

    initializeFunctionSolvers() {
        this.functionTypes = {
            linear: {
                patterns: [
                    /f\(x\)\s*=\s*([+-]?\d*\.?\d*)\s*x\s*([+-]\s*\d+\.?\d*)/,
                    /y\s*=\s*([+-]?\d*\.?\d*)\s*x\s*([+-]\s*\d+\.?\d*)/,
                    /linear/i
                ],
                solver: this.solveLinearFunction.bind(this),
                name: 'Linear Function',
                category: 'linear',
                description: 'f(x) = mx + b'
            },

            quadratic: {
                patterns: [
                    /f\(x\)\s*=\s*([+-]?\d*\.?\d*)\s*x\^2/,
                    /y\s*=\s*([+-]?\d*\.?\d*)\s*x\^2/,
                    /quadratic/i,
                    /parabola/i
                ],
                solver: this.solveQuadraticFunction.bind(this),
                name: 'Quadratic Function',
                category: 'quadratic',
                description: 'f(x) = ax² + bx + c'
            },

            polynomial: {
                patterns: [
                    /f\(x\)\s*=.*x\^[3-9]/,
                    /polynomial/i,
                    /cubic/i
                ],
                solver: this.solvePolynomialFunction.bind(this),
                name: 'Polynomial Function',
                category: 'polynomial',
                description: 'f(x) = aₙxⁿ + ... + a₁x + a₀'
            },

            rational: {
                patterns: [
                    /f\(x\)\s*=.*\/.*x/,
                    /rational/i,
                    /hyperbola/i
                ],
                solver: this.solveRationalFunction.bind(this),
                name: 'Rational Function',
                category: 'rational',
                description: 'f(x) = P(x)/Q(x)'
            },

            exponential: {
                patterns: [
                    /f\(x\)\s*=.*\^\s*x/,
                    /exponential/i,
                    /e\^x/,
                    /growth|decay/i
                ],
                solver: this.solveExponentialFunction.bind(this),
                name: 'Exponential Function',
                category: 'exponential',
                description: 'f(x) = abˣ'
            },

            logarithmic: {
                patterns: [
                    /f\(x\)\s*=.*log/,
                    /logarithm/i,
                    /ln\(/
                ],
                solver: this.solveLogarithmicFunction.bind(this),
                name: 'Logarithmic Function',
                category: 'logarithmic',
                description: 'f(x) = logₐ(x)'
            },

            absolute_value: {
                patterns: [
                    /f\(x\)\s*=.*\|.*\|/,
                    /abs\(/i,
                    /absolute.*value/i
                ],
                solver: this.solveAbsoluteValueFunction.bind(this),
                name: 'Absolute Value Function',
                category: 'absolute_value',
                description: 'f(x) = a|x - h| + k'
            },

            piecewise: {
                patterns: [
                    /piecewise/i,
                    /\{.*if.*\}/
                ],
                solver: this.solvePiecewiseFunction.bind(this),
                name: 'Piecewise Function',
                category: 'piecewise',
                description: 'f(x) = {different formulas for different intervals}'
            },

            trigonometric: {
                patterns: [
                    /sin\(/i,
                    /cos\(/i,
                    /tan\(/i,
                    /trig/i
                ],
                solver: this.solveTrigonometricFunction.bind(this),
                name: 'Trigonometric Function',
                category: 'trigonometric',
                description: 'f(x) = A sin(B(x - C)) + D'
            },

            square_root: {
                patterns: [
                    /sqrt\(/i,
                    /√/,
                    /\^0\.5/,
                    /radical/i
                ],
                solver: this.solveSquareRootFunction.bind(this),
                name: 'Square Root Function',
                category: 'square_root',
                description: 'f(x) = a√(x - h) + k'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            linear: {
                'Identifying slope': [
                    'Confusing rise and run',
                    'Sign errors in slope calculation',
                    'Not simplifying slope fraction'
                ],
                'Plotting y-intercept': [
                    'Plotting x-intercept instead',
                    'Wrong sign on b value',
                    'Not starting at correct point'
                ],
                'Using slope': [
                    'Moving wrong direction',
                    'Not maintaining consistent rise/run',
                    'Mixing up horizontal and vertical movement'
                ]
            },
            quadratic: {
                'Finding vertex': [
                    'Arithmetic error in -b/(2a)',
                    'Forgetting to find y-coordinate',
                    'Using wrong formula'
                ],
                'Determining direction': [
                    'Thinking parabola always opens up',
                    'Not checking sign of a',
                    'Confusing width with direction'
                ],
                'Finding intercepts': [
                    'Factoring errors',
                    'Quadratic formula mistakes',
                    'Not checking discriminant first'
                ]
            },
            rational: {
                'Finding asymptotes': [
                    'Not factoring first',
                    'Confusing vertical and horizontal',
                    'Missing holes vs asymptotes',
                    'Wrong horizontal asymptote rule'
                ],
                'Determining domain': [
                    'Including asymptote values',
                    'Not factoring to find all restrictions',
                    'Confusing domain with range'
                ]
            },
            exponential: {
                'Identifying growth vs decay': [
                    'Not checking if base > 1 or 0 < base < 1',
                    'Confusing with linear functions',
                    'Wrong asymptote'
                ],
                'Finding asymptote': [
                    'Thinking exponential crosses x-axis',
                    'Wrong horizontal asymptote',
                    'Not considering vertical shift'
                ]
            },
            transformations: {
                'Horizontal vs vertical shifts': [
                    'Confusing f(x-h) with f(x)+k',
                    'Getting direction backwards',
                    'Wrong sign interpretation'
                ],
                'Reflections': [
                    'Confusing -f(x) with f(-x)',
                    'Not applying to all points',
                    'Order of operations errors'
                ]
            }
        };

        this.errorPrevention = {
            slope_calculation: {
                reminder: 'slope = rise/run = (y₂-y₁)/(x₂-x₁)',
                method: 'Always subtract in same order'
            },
            vertex_formula: {
                reminder: 'h = -b/(2a), then find k = f(h)',
                method: 'Check: vertex should be on axis of symmetry'
            },
            asymptote_rules: {
                reminder: 'Vertical: set denominator = 0; Horizontal: compare degrees',
                method: 'Factor first to identify holes vs asymptotes'
            },
            transformation_order: {
                reminder: 'Inside parentheses affects x (horizontal), outside affects y (vertical)',
                method: 'Remember: f(x-h)+k means right h, up k'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why the graph has this shape and what it represents',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Step-by-step process to graph the function',
                language: 'precise instructions'
            },
            visual: {
                focus: 'Visual patterns and transformations',
                language: 'spatial and graphical'
            },
            algebraic: {
                focus: 'Algebraic properties and calculations',
                language: 'formal mathematical notation'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple terms',
                detail: 'key features only',
                examples: 'simple numeric cases'
            },
            intermediate: {
                vocabulary: 'standard math terms',
                detail: 'main features with brief explanations',
                examples: 'variety of cases'
            },
            ELI5: {
                vocabulary: 'everyday language with analogies',
                detail: 'every step explained simply',
                examples: 'real-world stories',
                analogies: true
            },
            detailed: {
                vocabulary: 'full mathematical vocabulary',
                detail: 'comprehensive analysis of all features',
                examples: 'general and abstract'
            },
            scaffolded: {
                vocabulary: 'progressive complexity',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            linear_motion: {
                scenario: "Distance traveled at constant speed",
                function: "d(t) = vt + d₀",
                examples: [
                    "Car traveling at 60 mph starting 100 miles from home",
                    "Runner at 8 mph pace"
                ],
                context: "Linear functions model constant rate motion"
            },
            projectile: {
                scenario: "Height of thrown object",
                function: "h(t) = -16t² + v₀t + h₀",
                examples: [
                    "Ball thrown upward from 6 feet at 32 ft/s",
                    "Rocket launch trajectory"
                ],
                context: "Quadratic functions model gravity effects"
            },
            population_growth: {
                scenario: "Population with constant growth rate",
                function: "P(t) = P₀e^(rt)",
                examples: [
                    "Bacteria doubling every hour",
                    "City population growing 3% per year"
                ],
                context: "Exponential functions model compound growth"
            },
            radioactive_decay: {
                scenario: "Remaining radioactive material",
                function: "A(t) = A₀e^(-kt)",
                examples: [
                    "Carbon-14 with half-life 5730 years",
                    "Medical isotope decay"
                ],
                context: "Exponential decay models disintegration"
            },
            temperature: {
                scenario: "Oscillating temperature over day",
                function: "T(t) = A sin(B(t - C)) + D",
                examples: [
                    "Daily temperature variation",
                    "Seasonal temperature patterns"
                ],
                context: "Sinusoidal functions model periodic phenomena"
            },
            mixture: {
                scenario: "Concentration in dilution",
                function: "C(V) = (C₀V₀)/(V₀ + V)",
                examples: [
                    "Salt concentration after adding water",
                    "Medication dosage in bloodstream"
                ],
                context: "Rational functions model dilution and rates"
            },
            earthquake: {
                scenario: "Earthquake magnitude measurement",
                function: "M = log(I/I₀)",
                examples: [
                    "Richter scale measurements",
                    "Comparing earthquake intensities"
                ],
                context: "Logarithmic scales compress large ranges"
            },
            profit: {
                scenario: "Business profit function",
                function: "P(x) = R(x) - C(x)",
                examples: [
                    "Maximum profit production level",
                    "Break-even analysis"
                ],
                context: "Quadratic functions find optimal values"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            linear: {
                skills: ['Plotting points', 'Understanding slope', 'Y-intercept concept'],
                priorKnowledge: ['Coordinate plane', 'Rise over run', 'Linear relationships'],
                checkQuestions: [
                    "What does slope tell us?",
                    "Where does y-intercept appear on graph?",
                    "How do you plot the point (3, -2)?"
                ]
            },
            quadratic: {
                skills: ['Vertex identification', 'Axis of symmetry', 'Factoring'],
                priorKnowledge: ['Parabola shape', 'Quadratic formula', 'Completing the square'],
                checkQuestions: [
                    "What is the vertex of a parabola?",
                    "When does a parabola open downward?",
                    "How do you find x-intercepts?"
                ]
            },
            rational: {
                skills: ['Polynomial division', 'Factoring', 'Asymptote concepts'],
                priorKnowledge: ['Undefined expressions', 'Limits', 'End behavior'],
                checkQuestions: [
                    "When is a rational expression undefined?",
                    "What is a vertical asymptote?",
                    "How do you find horizontal asymptotes?"
                ]
            },
            exponential: {
                skills: ['Exponent rules', 'Growth vs decay recognition', 'Asymptote identification'],
                priorKnowledge: ['Exponential notation', 'Base understanding', 'Continuous growth'],
                checkQuestions: [
                    "What is 2³?",
                    "Is 0.5ˣ growth or decay?",
                    "What is the asymptote of y = 2ˣ?"
                ]
            },
            logarithmic: {
                skills: ['Log definition', 'Inverse functions', 'Change of base'],
                priorKnowledge: ['Exponents', 'Inverse operations', 'Domain restrictions'],
                checkQuestions: [
                    "What does log₂(8) mean?",
                    "What is the domain of log(x)?",
                    "How are logs and exponents related?"
                ]
            },
            trigonometric: {
                skills: ['Unit circle', 'Periodic behavior', 'Amplitude and period'],
                priorKnowledge: ['Radian vs degree', 'Sine and cosine', 'Transformations'],
                checkQuestions: [
                    "What is sin(0)?",
                    "What is the period of sin(x)?",
                    "What is amplitude?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            table_of_values: {
                description: "Organize x and f(x) pairs in table",
                analogy: "Like a two-column list showing input-output pairs",
                visualization: "Create table with x values and corresponding y values",
                suitableFor: ['all_functions'],
                explanation: "Systematic way to generate points before plotting"
            },
            transformation_diagram: {
                description: "Show parent function and transformations",
                analogy: "Like watching a shape shift step by step",
                visualization: "Draw original, then each transformation stage",
                suitableFor: ['all_functions'],
                explanation: "Visual guide to how function changes from parent"
            },
            key_features: {
                description: "Identify and mark special points",
                analogy: "Like landmarks on a map",
                visualization: "Label intercepts, vertices, asymptotes, etc.",
                suitableFor: ['all_functions'],
                explanation: "Critical points that define the graph"
            },
            end_behavior: {
                description: "Describe what happens as x → ±∞",
                analogy: "Like predicting where a road leads",
                visualization: "Arrows showing direction graph heads",
                suitableFor: ['polynomial', 'rational', 'exponential', 'logarithmic'],
                explanation: "Long-term behavior of function"
            },
            symmetry: {
                description: "Identify even, odd, or no symmetry",
                analogy: "Like mirror reflections or rotational patterns",
                visualization: "Show line or point of symmetry",
                suitableFor: ['polynomial', 'absolute_value', 'trigonometric'],
                explanation: "Symmetry reduces graphing work by half"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "Graph f(x) = 2x + 3",
                    solution: "Line with slope 2, y-intercept 3",
                    steps: ["Plot (0, 3)", "From (0,3) go up 2, right 1", "Draw line"],
                    difficulty: "easy"
                },
                {
                    problem: "Graph f(x) = x²",
                    solution: "Standard parabola opening up",
                    steps: ["Vertex at (0,0)", "Plot points x = -2,-1,0,1,2", "Draw U-shape"],
                    difficulty: "easy"
                },
                {
                    problem: "Graph f(x) = 2ˣ",
                    solution: "Exponential growth curve",
                    steps: ["Mark asymptote y=0", "Plot (0,1)", "Plot (1,2), (2,4)", "Draw curve"],
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "Graph f(x) = (x-2)² + 1",
                    solution: "Parabola with vertex (2,1)",
                    steps: ["Find vertex (2,1)", "Opens up (a=1)", "Plot vertex and symmetric points", "Draw parabola"],
                    difficulty: "medium"
                },
                {
                    problem: "Graph f(x) = 1/(x-2)",
                    solution: "Hyperbola with vertical asymptote x=2",
                    steps: ["Vertical asymptote x=2", "Horizontal asymptote y=0", "Plot test points", "Draw two branches"],
                    difficulty: "medium"
                },
                {
                    problem: "Graph f(x) = |x-3| - 2",
                    solution: "V-shape with vertex (3,-2)",
                    steps: ["Vertex (3,-2)", "Opens up", "Plot symmetric points", "Draw V"],
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "Graph f(x) = -2(x+1)² + 3",
                    solution: "Downward parabola, vertex (-1,3)",
                    steps: ["Vertex (-1,3)", "Opens down (a=-2)", "Find intercepts", "Draw parabola"],
                    difficulty: "hard"
                },
                {
                    problem: "Graph f(x) = 3sin(2x - π/2) + 1",
                    solution: "Sine wave with transformations",
                    steps: ["Amplitude 3", "Period π", "Phase shift π/4 right", "Midline y=1", "Draw wave"],
                    difficulty: "hard"
                },
                {
                    problem: "Graph f(x) = (x²-4)/(x-2)",
                    solution: "Line with hole at x=2",
                    steps: ["Factor: (x+2)(x-2)/(x-2)", "Cancel: x+2 with hole at x=2", "Graph y=x+2 with open circle at (2,4)"],
                    difficulty: "hard"
                }
            ]
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            slope_sign: {
                misconception: "Positive slope means line goes down",
                reality: "Positive slope means line rises left to right",
                correctiveExample: "m=2 means up 2, right 1 → rising line",
                commonIn: ['linear']
            },
            parabola_width: {
                misconception: "|a| only affects opening direction",
                reality: "|a| affects both direction and width",
                correctiveExample: "y=2x² is narrower than y=x²; y=0.5x² is wider",
                commonIn: ['quadratic']
            },
            asymptote_crossing: {
                misconception: "Graph can never cross asymptote",
                reality: "Horizontal asymptotes can be crossed (not vertical)",
                correctiveExample: "Rational functions can cross horizontal asymptotes in middle",
                commonIn: ['rational']
            },
            exponential_base: {
                misconception: "All exponentials look the same",
                reality: "Base determines steepness; 0<b<1 is decay",
                correctiveExample: "y=3ˣ steeper than y=2ˣ; y=(1/2)ˣ decreases",
                commonIn: ['exponential']
            },
            log_domain: {
                misconception: "Can take log of any number",
                reality: "Only positive numbers have real logarithms",
                correctiveExample: "log(-5) is undefined; log(0) is undefined",
                commonIn: ['logarithmic']
            },
            transformation_direction: {
                misconception: "f(x-2) shifts left 2",
                reality: "f(x-2) shifts RIGHT 2 (opposite sign)",
                correctiveExample: "Think: when does x-2=0? At x=2, so shifts to x=2",
                commonIn: ['transformations']
            },
            absolute_value_range: {
                misconception: "Absolute value always positive",
                reality: "Can shift absolute value graph down",
                correctiveExample: "y=|x|-3 has range y≥-3, including negative values",
                commonIn: ['absolute_value']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            linear_function: {
                analogy: "Constant speed car trip",
                explanation: "Like driving at steady 60mph - same distance each hour (constant rate)",
                suitableFor: ['linear'],
                ELI5: "Imagine walking at the same speed the whole time - you cover the same distance every minute"
            },
            quadratic_function: {
                analogy: "Throwing a ball",
                explanation: "Ball goes up then comes down in U-shape, gravity pulls it down (parabola)",
                suitableFor: ['quadratic'],
                ELI5: "When you toss a ball up, it makes a rainbow curve as it goes up and falls back down"
            },
            exponential_growth: {
                analogy: "Viral video spreading",
                explanation: "Each person shares with 2 friends, who each share with 2 more - doubles each time",
                suitableFor: ['exponential'],
                ELI5: "Like a rumor that spreads super fast because each person tells two people, who each tell two more"
            },
            exponential_decay: {
                analogy: "Ice melting",
                explanation: "Melts fast at first when big, slower as it gets smaller - always some left",
                suitableFor: ['exponential'],
                ELI5: "Like eating half your candy each day - you always have some left but it gets smaller and smaller"
            },
            logarithmic: {
                analogy: "Diminishing returns",
                explanation: "First hour of study helps a lot, next hour helps less, then even less",
                suitableFor: ['logarithmic'],
                ELI5: "Like leveling up in a video game - early levels are quick, but it takes longer and longer for each new level"
            },
            rational_asymptote: {
                analogy: "Getting closer but never touching",
                explanation: "Like walking halfway to wall each time - get very close but never reach it",
                suitableFor: ['rational'],
                ELI5: "Imagine trying to walk to a wall by always going halfway - you get super close but never quite touch it"
            },
            trigonometric: {
                analogy: "Ferris wheel ride",
                explanation: "Height goes up and down repeatedly in same pattern - periodic motion",
                suitableFor: ['trigonometric'],
                ELI5: "Like riding a Ferris wheel - you go up, then down, then up again, over and over in the same pattern"
            },
            piecewise: {
                analogy: "Tax brackets",
                explanation: "Different rules apply to different income ranges - rates change at thresholds",
                suitableFor: ['piecewise'],
                ELI5: "Like playground rules: walk inside the school, jog in hallway, run outside - different rules for different places"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            linear: {
                level1: "What information do you need to graph a line?",
                level2: "You need slope (m) and y-intercept (b). Can you identify them?",
                level3: "Plot the y-intercept first, then use slope to find another point",
                level4: "Y-intercept at (0,{b}), slope {m} means from there go up {rise} and right {run}"
            },
            quadratic: {
                level1: "What key features help graph a parabola?",
                level2: "Find the vertex and determine if it opens up or down",
                level3: "Vertex is at x = -b/(2a), then find y-coordinate. Check sign of a",
                level4: "Vertex at ({h}, {k}), opens {direction}, plot symmetric points around vertex"
            },
            rational: {
                level1: "What makes rational functions different from polynomials?",
                level2: "Look for values that make the denominator zero - these create asymptotes",
                level3: "Set denominator = 0 for vertical asymptotes. Compare degrees for horizontal",
                level4: "Vertical asymptote at x = {va}, horizontal asymptote at y = {ha}"
            },
            exponential: {
                level1: "How can you tell if this is growth or decay?",
                level2: "Look at the base: if b > 1 it's growth, if 0 < b < 1 it's decay",
                level3: "Find the y-intercept (starting value) and horizontal asymptote",
                level4: "Starts at (0, {a}), {type}, approaches y = {asymptote}"
            },
            transformations: {
                level1: "How does this function compare to the parent function?",
                level2: "Look for shifts, stretches, and reflections",
                level3: "Inside parentheses affects x (horizontal), outside affects y (vertical)",
                level4: "Start with parent, then apply: {transformations}"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Graph y = 2x - 3",
                    answer: "Line with slope 2, y-intercept -3",
                    assesses: "linear",
                    difficulty: "basic"
                },
                {
                    question: "Graph y = x² - 4",
                    answer: "Parabola with vertex (0,-4)",
                    assesses: "quadratic",
                    difficulty: "intermediate"
                },
                {
                    question: "Graph y = 2ˣ",
                    answer: "Exponential growth curve through (0,1)",
                    assesses: "exponential",
                    difficulty: "intermediate"
                },
                {
                    question: "Graph y = 1/x",
                    answer: "Hyperbola with asymptotes at x=0 and y=0",
                    assesses: "rational",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "What is the vertex of y = (x-3)² + 2?",
                    options: ["(3, 2)", "(-3, 2)", "(3, -2)", "(-3, -2)"],
                    correct: "(3, 2)",
                    explanation: "Vertex form is y = (x-h)²+k where vertex is (h,k)"
                },
                {
                    question: "Does y = 0.5ˣ represent growth or decay?",
                    options: ["Growth", "Decay", "Neither", "Both"],
                    correct: "Decay",
                    explanation: "Base 0.5 is between 0 and 1, so exponential decay"
                },
                {
                    question: "What is the horizontal asymptote of y = 3/x + 2?",
                    options: ["y = 0", "y = 2", "y = 3", "x = 0"],
                    correct: "y = 2",
                    explanation: "Horizontal shift doesn't affect asymptote; +2 moves it to y=2"
                }
            ],
            byDifficulty: {
                easy: [
                    "Graph y = x + 2",
                    "Graph y = -x",
                    "Graph y = x²",
                    "Graph y = |x|"
                ],
                medium: [
                    "Graph y = -2x + 5",
                    "Graph y = (x-1)² + 3",
                    "Graph y = 1/(x+2)",
                    "Graph y = 2|x-3| - 1"
                ],
                hard: [
                    "Graph y = -3(x+2)² - 4",
                    "Graph y = (x²-9)/(x-3)",
                    "Graph y = 2sin(3x - π/2) + 1",
                    "Graph piecewise: y = {x² if x<0; 2x if x≥0}"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "straight_line": "Linear function - find slope and y-intercept",
                "parabola_shape": "Quadratic - find vertex and direction",
                "exponential_curve": "Exponential - identify growth/decay and asymptote",
                "has_asymptotes": "Rational - find vertical and horizontal asymptotes",
                "v_shape": "Absolute value - find vertex",
                "wave_pattern": "Trigonometric - find amplitude, period, shifts",
                "curved_corner": "Square root - find starting point and direction"
            },
            graphingApproach: {
                "1. Identify function type": "What family does this belong to?",
                "2. Find key features": "What are the critical points and characteristics?",
                "3. Determine domain/range": "What x and y values are possible?",
                "4. Plot key points": "Mark intercepts, vertices, asymptotes, etc.",
                "5. Sketch curve": "Connect points following function behavior",
                "6. Verify": "Check points satisfy equation and graph makes sense"
            },
            featurePriority: {
                linear: ["y-intercept", "slope", "additional point"],
                quadratic: ["vertex", "direction", "x-intercepts", "y-intercept"],
                rational: ["vertical asymptotes", "horizontal asymptote", "intercepts", "holes"],
                exponential: ["y-intercept", "growth/decay", "horizontal asymptote", "additional points"],
                absolute_value: ["vertex", "direction", "x-intercepts", "slope of pieces"]
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            matchingGame: [
                {
                    name: "Function to Graph Matching",
                    functions: ["y = 2x + 1", "y = x²", "y = 2ˣ", "y = |x|"],
                    graphs: ["Line with slope 2", "U-shaped parabola", "Exponential curve", "V-shape"],
                    solution: "Match each function to its graph shape"
                }
            ],
            transformationChallenge: [
                {
                    name: "Parent Function Transformations",
                    parent: "y = x²",
                    target: "y = -2(x-3)² + 5",
                    steps: ["Right 3", "Vertical stretch by 2", "Reflect over x-axis", "Up 5"],
                    description: "Identify all transformations from parent to target"
                }
            ],
            errorDetection: [
                {
                    name: "Find the Graphing Error",
                    function: "y = (x-2)² + 1",
                    incorrectGraph: "Parabola with vertex at (-2, 1)",
                    error: "Vertex should be at (2, 1), not (-2, 1)",
                    correction: "Remember: y = (x-h)²+k has vertex at (h, k)"
                }
            ],
            applications: [
                {
                    scenario: "Projectile Motion",
                    problem: "Ball thrown from 6 ft at 32 ft/s. Graph height vs time",
                    function: "h(t) = -16t² + 32t + 6",
                    keyQuestions: ["Maximum height?", "When does it land?", "Initial height?"]
                },
                {
                    scenario: "Population Growth",
                    problem: "Bacteria population doubles every hour starting at 100",
                    function: "P(t) = 100·2^t",
                    keyQuestions: ["Population after 3 hours?", "When does it reach 1000?"]
                }
            ]
        };
    }

    initializeGraphFeatureDatabase() {
        this.graphFeatures = {
            intercepts: {
                xIntercept: {
                    definition: "Point where graph crosses x-axis",
                    findBy: "Set y = 0 and solve for x",
                    notation: "(x, 0)",
                    interpretation: "Input that gives output of zero"
                },
                yIntercept: {
                    definition: "Point where graph crosses y-axis",
                    findBy: "Evaluate f(0)",
                    notation: "(0, y)",
                    interpretation: "Output when input is zero"
                }
            },
            extrema: {
                maximum: {
                    definition: "Highest point in a region",
                    types: ["local maximum", "absolute maximum"],
                    identification: "Peak or top of curve",
                    calculus: "f'(x) = 0 and f''(x) < 0"
                },
                minimum: {
                    definition: "Lowest point in a region",
                    types: ["local minimum", "absolute minimum"],
                    identification: "Valley or bottom of curve",
                    calculus: "f'(x) = 0 and f''(x) > 0"
                }
            },
            asymptotes: {
                vertical: {
                    definition: "Vertical line graph approaches but never crosses",
                    findBy: "Values where function is undefined",
                    notation: "x = a",
                    behavior: "Function approaches ±∞"
                },
                horizontal: {
                    definition: "Horizontal line graph approaches as x → ±∞",
                    findBy: "Limit as x approaches infinity",
                    notation: "y = b",
                    behavior: "Function levels off"
                },
                slant: {
                    definition: "Diagonal line graph approaches",
                    findBy: "Long division when numerator degree = denominator degree + 1",
                    notation: "y = mx + b",
                    behavior: "Function approaches line"
                }
            },
            symmetry: {
                even: {
                    definition: "f(-x) = f(x)",
                    visualPattern: "Symmetric about y-axis",
                    examples: ["x²", "cos(x)", "|x|"]
                },
                odd: {
                    definition: "f(-x) = -f(x)",
                    visualPattern: "Symmetric about origin (180° rotation)",
                    examples: ["x³", "sin(x)", "1/x"]
                }
            },
            increasing_decreasing: {
                increasing: {
                    definition: "y values rise as x increases",
                    notation: "f(x₁) < f(x₂) when x₁ < x₂",
                    visualCue: "Graph goes up left to right"
                },
                decreasing: {
                    definition: "y values fall as x increases",
                    notation: "f(x₁) > f(x₂) when x₁ < x₂",
                    visualCue: "Graph goes down left to right"
                }
            },
            concavity: {
                concaveUp: {
                    definition: "Curve bends upward (holds water)",
                    calculus: "f''(x) > 0",
                    visualPattern: "U-shape or smile"
                },
                concaveDown: {
                    definition: "Curve bends downward (spills water)",
                    calculus: "f''(x) < 0",
                    visualPattern: "∩-shape or frown"
                },
                inflectionPoint: {
                    definition: "Point where concavity changes",
                    calculus: "f''(x) = 0 and changes sign",
                    visualPattern: "S-curve transition"
                }
            }
        };
    }

    initializeTransformationDatabase() {
        this.transformations = {
            verticalShift: {
                form: "f(x) + k",
                effect: "Shifts graph up k units (if k > 0) or down |k| units (if k < 0)",
                unchangedFeatures: ["shape", "x-values"],
                changedFeatures: ["y-values", "y-intercept", "horizontal asymptote"],
                examples: [
                    { from: "x²", to: "x² + 3", description: "Shift parabola up 3" },
                    { from: "sin(x)", to: "sin(x) - 2", description: "Shift sine wave down 2" }
                ]
            },
            horizontalShift: {
                form: "f(x - h)",
                effect: "Shifts graph right h units (if h > 0) or left |h| units (if h < 0)",
                unchangedFeatures: ["shape", "y-values"],
                changedFeatures: ["x-values", "x-intercepts", "vertical asymptotes"],
                caveat: "Sign is opposite: x-h means shift RIGHT",
                examples: [
                    { from: "x²", to: "(x-2)²", description: "Shift parabola right 2" },
                    { from: "|x|", to: "|x+3|", description: "Shift V-graph left 3" }
                ]
            },
            verticalStretch: {
                form: "a·f(x) where |a| > 1",
                effect: "Stretches graph away from x-axis by factor |a|",
                unchangedFeatures: ["x-values", "x-intercepts"],
                changedFeatures: ["y-values", "y-intercept", "steepness"],
                examples: [
                    { from: "x²", to: "3x²", description: "Parabola 3× narrower" },
                    { from: "sin(x)", to: "2sin(x)", description: "Amplitude doubles" }
                ]
            },
            verticalCompression: {
                form: "a·f(x) where 0 < |a| < 1",
                effect: "Compresses graph toward x-axis by factor |a|",
                unchangedFeatures: ["x-values", "x-intercepts"],
                changedFeatures: ["y-values", "y-intercept", "steepness"],
                examples: [
                    { from: "x²", to: "0.5x²", description: "Parabola 2× wider" },
                    { from: "cos(x)", to: "0.3cos(x)", description: "Amplitude reduced" }
                ]
            },
            horizontalStretch: {
                form: "f(b·x) where 0 < |b| < 1",
                effect: "Stretches graph away from y-axis by factor 1/|b|",
                unchangedFeatures: ["y-values", "y-intercept"],
                changedFeatures: ["x-values", "period (for periodic functions)"],
                examples: [
                    { from: "sin(x)", to: "sin(0.5x)", description: "Period doubles" }
                ]
            },
            horizontalCompression: {
                form: "f(b·x) where |b| > 1",
                effect: "Compresses graph toward y-axis by factor 1/|b|",
                unchangedFeatures: ["y-values", "y-intercept"],
                changedFeatures: ["x-values", "period (for periodic functions)"],
                examples: [
                    { from: "sin(x)", to: "sin(2x)", description: "Period halves" }
                ]
            },
            reflectionX: {
                form: "-f(x)",
                effect: "Reflects graph over x-axis (flips upside down)",
                unchangedFeatures: ["x-values", "x-intercepts"],
                changedFeatures: ["y-values flip sign", "maxima ↔ minima"],
                examples: [
                    { from: "x²", to: "-x²", description: "Parabola opens down" },
                    { from: "2ˣ", to: "-2ˣ", description: "Exponential flipped" }
                ]
            },
            reflectionY: {
                form: "f(-x)",
                effect: "Reflects graph over y-axis (mirror image)",
                unchangedFeatures: ["y-values", "y-intercept"],
                changedFeatures: ["x-values flip sign", "left ↔ right"],
                examples: [
                    { from: "2ˣ", to: "2⁻ˣ", description: "Growth → decay" },
                    { from: "√x", to: "√(-x)", description: "Reflected square root" }
                ]
            },
            orderOfOperations: {
                rule: "Apply transformations in this order: Horizontal shift → Horizontal stretch/compression → Reflections → Vertical stretch/compression → Vertical shift",
                mnemonic: "Inside changes affect x (horizontal), outside changes affect y (vertical)",
                commonError: "Applying transformations in wrong order changes final result"
            }
        };
    }

    // MAIN SOLVER METHOD
    solveFunctionProblem(config) {
        const { equation, functionType, parameters, context, domain, range } = config;

        try {
            this.currentProblem = this.parseFunctionProblem(equation, functionType, parameters, context, domain, range);
            this.currentSolution = this.solveFunctionProblem_Internal(this.currentProblem);
            this.solutionSteps = this.generateFunctionSteps(this.currentProblem, this.currentSolution);
            this.generateFunctionGraphData();
            this.generateFunctionWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                graphData: this.graphData
            };

        } catch (error) {
            throw new Error(`Failed to solve function problem: ${error.message}`);
        }
    }

    parseFunctionProblem(equation, functionType = null, parameters = {}, context = {}, domain = null, range = null) {
        const cleanInput = equation ? this.cleanMathExpression(equation) : '';

        if (functionType && this.functionTypes[functionType]) {
            return {
                originalInput: equation || `${functionType} function`,
                cleanInput: cleanInput,
                type: functionType,
                parameters: { ...parameters },
                context: { ...context },
                domain: domain || { start: this.domainStart, end: this.domainEnd },
                range: range || { start: this.rangeStart, end: this.rangeEnd },
                parsedAt: new Date().toISOString()
            };
        }

        for (const [type, config] of Object.entries(this.functionTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput)) {
                    return {
                        originalInput: equation,
                        cleanInput: cleanInput,
                        type: type,
                        parameters: { ...parameters },
                        context: { ...context },
                        domain: domain || { start: this.domainStart, end: this.domainEnd },
                        range: range || { start: this.rangeStart, end: this.rangeEnd },
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        return {
            originalInput: equation,
            cleanInput: cleanInput,
            type: 'linear',
            parameters: { m: parameters.m || 1, b: parameters.b || 0, ...parameters },
            context: { ...context },
            domain: domain || { start: this.domainStart, end: this.domainEnd },
            range: range || { start: this.rangeStart, end: this.rangeEnd },
            parsedAt: new Date().toISOString()
        };
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .trim();
    }

    solveFunctionProblem_Internal(problem) {
        const solver = this.functionTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver for function type: ${problem.type}`);
        }
        return solver(problem);
    }

    // FUNCTION SOLVERS
    solveLinearFunction(problem) {
        const { m, b } = problem.parameters;
        const slope = m !== undefined ? m : 1;
        const yIntercept = b !== undefined ? b : 0;

        return {
            type: 'Linear Function',
            equation: `f(x) = ${slope}x + ${yIntercept}`,
            slope: slope,
            yIntercept: yIntercept,
            xIntercept: slope !== 0 ? -yIntercept / slope : null,
            domain: "All real numbers",
            range: "All real numbers",
            category: 'linear',
            keyFeatures: {
                slope: slope,
                yIntercept: { x: 0, y: yIntercept },
                xIntercept: slope !== 0 ? { x: -yIntercept / slope, y: 0 } : null,
                increasing: slope > 0,
                decreasing: slope < 0
            }
        };
    }

    solveQuadraticFunction(problem) {
        const { a, b, c } = problem.parameters;
        const coefA = a !== undefined ? a : 1;
        const coefB = b !== undefined ? b : 0;
        const coefC = c !== undefined ? c : 0;

        const vertexX = -coefB / (2 * coefA);
        const vertexY = coefA * vertexX * vertexX + coefB * vertexX + coefC;

        const discriminant = coefB * coefB - 4 * coefA * coefC;
        let xIntercepts = [];
        if (discriminant > 0) {
            const x1 = (-coefB + Math.sqrt(discriminant)) / (2 * coefA);
            const x2 = (-coefB - Math.sqrt(discriminant)) / (2 * coefA);
            xIntercepts = [{ x: x1, y: 0 }, { x: x2, y: 0 }];
        } else if (discriminant === 0) {
            const x = -coefB / (2 * coefA);
            xIntercepts = [{ x: x, y: 0 }];
        }

        return {
            type: 'Quadratic Function',
            equation: `f(x) = ${coefA}x² + ${coefB}x + ${coefC}`,
            category: 'quadratic',
            vertex: { x: vertexX, y: vertexY },
            axisOfSymmetry: `x = ${vertexX}`,
            opensUpward: coefA > 0,
            yIntercept: { x: 0, y: coefC },
            xIntercepts: xIntercepts,
            discriminant: discriminant,
            domain: "All real numbers",
            range: coefA > 0 ? `y ≥ ${vertexY}` : `y ≤ ${vertexY}`,
            keyFeatures: {
                vertex: { x: vertexX, y: vertexY },
                direction: coefA > 0 ? 'up' : 'down',
                width: Math.abs(1 / coefA)
            }
        };
    }

    solvePolynomialFunction(problem) {
        return {
            type: 'Polynomial Function',
            category: 'polynomial',
            note: 'Higher-degree polynomial - analyze degree and leading coefficient for end behavior'
        };
    }

    solveRationalFunction(problem) {
        return {
            type: 'Rational Function',
            category: 'rational',
            note: 'Find vertical asymptotes (denominator = 0), horizontal asymptote (degree comparison), and intercepts'
        };
    }

    solveExponentialFunction(problem) {
        const { a, b } = problem.parameters;
        const initialValue = a !== undefined ? a : 1;
        const base = b !== undefined ? b : 2;

        return {
            type: 'Exponential Function',
            equation: `f(x) = ${initialValue}·${base}^x`,
            category: 'exponential',
            base: base,
            initialValue: initialValue,
            growthOrDecay: base > 1 ? 'growth' : 'decay',
            yIntercept: { x: 0, y: initialValue },
            horizontalAsymptote: 'y = 0',
            domain: "All real numbers",
            range: initialValue > 0 ? "y > 0" : "y < 0"
        };
    }

    solveLogarithmicFunction(problem) {
        const { a, b } = problem.parameters;
        const base = b !== undefined ? b : 10;

        return {
            type: 'Logarithmic Function',
            equation: `f(x) = log_${base}(x)`,
            category: 'logarithmic',
            base: base,
            verticalAsymptote: 'x = 0',
            xIntercept: { x: 1, y: 0 },
            domain: "x > 0",
            range: "All real numbers"
        };
    }

    solveAbsoluteValueFunction(problem) {
        const { a, h, k } = problem.parameters;
        const coefA = a !== undefined ? a : 1;
        const vertexX = h !== undefined ? h : 0;
        const vertexY = k !== undefined ? k : 0;

        return {
            type: 'Absolute Value Function',
            equation: `f(x) = ${coefA}|x - ${vertexX}| + ${vertexY}`,
            category: 'absolute_value',
            vertex: { x: vertexX, y: vertexY },
            opensUpward: coefA > 0,
            domain: "All real numbers",
            range: coefA > 0 ? `y ≥ ${vertexY}` : `y ≤ ${vertexY}`
        };
    }

    solvePiecewiseFunction(problem) {
        return {
            type: 'Piecewise Function',
            category: 'piecewise',
            note: 'Graph each piece in its own domain, check continuity at boundaries'
        };
    }

    solveTrigonometricFunction(problem) {
        const { A, B, C, D } = problem.parameters;
        const amplitude = A !== undefined ? A : 1;
        const frequency = B !== undefined ? B : 1;
        const phaseShift = C !== undefined ? C : 0;
        const verticalShift = D !== undefined ? D : 0;

        return {
            type: 'Trigonometric Function',
            equation: `f(x) = ${amplitude}sin(${frequency}(x - ${phaseShift})) + ${verticalShift}`,
            category: 'trigonometric',
            amplitude: Math.abs(amplitude),
            period: 2 * Math.PI / Math.abs(frequency),
            phaseShift: phaseShift,
            verticalShift: verticalShift,
            domain: "All real numbers",
            range: `[${verticalShift - Math.abs(amplitude)}, ${verticalShift + Math.abs(amplitude)}]`
        };
    }

    solveSquareRootFunction(problem) {
        const { a, h, k } = problem.parameters;
        const coefA = a !== undefined ? a : 1;
        const startX = h !== undefined ? h : 0;
        const startY = k !== undefined ? k : 0;

        return {
            type: 'Square Root Function',
            equation: `f(x) = ${coefA}√(x - ${startX}) + ${startY}`,
            category: 'square_root',
            startingPoint: { x: startX, y: startY },
            domain: `x ≥ ${startX}`,
            range: coefA > 0 ? `y ≥ ${startY}` : `y ≤ ${startY}`
        };
    }

    // STEP GENERATION
    generateFunctionSteps(problem, solution) {
        let baseSteps = this.generateBaseFunctionSteps(problem, solution);

        if (this.explanationLevel !== 'basic') {
            baseSteps = baseSteps.map((step, index, array) =>
                this.enhanceStepExplanation(step, problem, solution, index, array.length)
            );
        }

        if (this.includeConceptualConnections) {
            baseSteps = this.addStepBridges(baseSteps, problem);
        }

        if (this.explanationLevel === 'ELI5') {
            baseSteps = this.addELI5Explanations(baseSteps, problem);
        }

        return baseSteps;
    }

    generateBaseFunctionSteps(problem, solution) {
        const category = solution.category;

        switch(category) {
            case 'linear':
                return this.generateLinearSteps(problem, solution);
            case 'quadratic':
                return this.generateQuadraticSteps(problem, solution);
            case 'exponential':
                return this.generateExponentialSteps(problem, solution);
            case 'rational':
                return this.generateRationalSteps(problem, solution);
            default:
                return this.generateGenericFunctionSteps(problem, solution);
        }
    }

    generateLinearSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify function type',
            description: 'Recognize this as a linear function',
            expression: solution.equation,
            reasoning: 'Form f(x) = mx + b indicates linear function',
            goalStatement: 'Graph the line using slope and y-intercept'
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify slope and y-intercept',
            description: `Slope m = ${solution.slope}, y-intercept b = ${solution.yIntercept}`,
            reasoning: 'These two values completely determine the line',
            algebraicRule: 'Slope-intercept form: y = mx + b'
        });

        steps.push({
            stepNumber: 3,
            step: 'Plot y-intercept',
            description: `Plot point (0, ${solution.yIntercept})`,
            reasoning: 'Starting point where line crosses y-axis',
            visualHint: 'Mark this point on the y-axis'
        });

        steps.push({
            stepNumber: 4,
            step: 'Use slope to find next point',
            description: `From (0, ${solution.yIntercept}), move using slope ${solution.slope}`,
            reasoning: 'Slope = rise/run tells us how to move to next point',
            visualHint: solution.slope > 0 ? 'Line rises left to right' : 'Line falls left to right'
        });

        steps.push({
            stepNumber: 5,
            step: 'Draw the line',
            description: 'Connect points and extend in both directions',
            reasoning: 'Linear functions continue infinitely',
            finalAnswer: true
        });

        return steps;
    }

    generateQuadraticSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify function type',
            description: 'Recognize this as a quadratic function (parabola)',
            expression: solution.equation,
            reasoning: 'Highest power is x², creating U-shaped curve'
        });

        steps.push({
            stepNumber: 2,
            step: 'Find vertex',
            description: `Vertex at (${solution.vertex.x}, ${solution.vertex.y})`,
            calculation: `x = -b/(2a), then find y`,
            reasoning: 'Vertex is turning point of parabola',
            algebraicRule: 'Vertex formula for ax² + bx + c'
        });

        steps.push({
            stepNumber: 3,
            step: 'Determine direction',
            description: `Parabola opens ${solution.opensUpward ? 'upward' : 'downward'}`,
            reasoning: `Coefficient a ${solution.opensUpward ? '> 0' : '< 0'}`,
            visualHint: solution.opensUpward ? 'U-shape' : 'Inverted U-shape'
        });

        steps.push({
            stepNumber: 4,
            step: 'Find intercepts',
            description: `Y-intercept: (0, ${solution.yIntercept.y})`,
            additionalInfo: solution.xIntercepts.length > 0 ? `X-intercepts: ${solution.xIntercepts.length} point(s)` : 'No x-intercepts',
            reasoning: 'Intercepts show where parabola crosses axes'
        });

        steps.push({
            stepNumber: 5,
            step: 'Plot points and sketch',
            description: 'Plot vertex, intercepts, and symmetric points',
            reasoning: 'Parabola is symmetric about vertical line through vertex',
            finalAnswer: true
        });

        return steps;
    }

    generateExponentialSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify function type',
            description: 'Recognize exponential function',
            expression: solution.equation,
            reasoning: 'Variable in exponent creates exponential curve'
        });

        steps.push({
            stepNumber: 2,
            step: 'Determine growth or decay',
            description: `This is exponential ${solution.growthOrDecay}`,
            reasoning: `Base ${solution.base} ${solution.base > 1 ? '> 1' : '< 1'}`,
            visualHint: solution.growthOrDecay === 'growth' ? 'Curve rises rapidly' : 'Curve decreases rapidly then levels'
        });

        steps.push({
            stepNumber: 3,
            step: 'Find y-intercept',
            description: `Y-intercept at (0, ${solution.yIntercept.y})`,
            reasoning: 'Starting value when x = 0',
            calculation: `f(0) = ${solution.initialValue} · ${solution.base}^0 = ${solution.initialValue}`
        });

        steps.push({
            stepNumber: 4,
            step: 'Identify asymptote',
            description: `Horizontal asymptote: ${solution.horizontalAsymptote}`,
            reasoning: 'Graph approaches but never reaches x-axis',
            visualHint: 'Draw dashed line at y = 0'
        });

        steps.push({
            stepNumber: 5,
            step: 'Plot points and sketch curve',
            description: 'Calculate and plot several points, then draw smooth curve',
            reasoning: 'Exponential curves are smooth and continuous',
            finalAnswer: true
        });

        return steps;
    }

    generateRationalSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify function type',
            description: 'Recognize rational function (ratio of polynomials)',
            reasoning: 'Denominator can be zero, creating asymptotes'
        });

        steps.push({
            stepNumber: 2,
            step: 'Find vertical asymptotes',
            description: 'Set denominator equal to zero',
            reasoning: 'Function undefined where denominator is zero',
            algebraicRule: 'Factor and solve Q(x) = 0'
        });

        steps.push({
            stepNumber: 3,
            step: 'Find horizontal asymptote',
            description: 'Compare degrees of numerator and denominator',
            reasoning: 'Determines end behavior as x → ±∞',
            algebraicRule: 'If deg(num) < deg(den): y=0; if equal: y=ratio of leading coefficients'
        });

        steps.push({
            stepNumber: 4,
            step: 'Find intercepts',
            description: 'Set numerator = 0 for x-intercepts, evaluate f(0) for y-intercept',
            reasoning: 'Shows where graph crosses axes'
        });

        steps.push({
            stepNumber: 5,
            step: 'Sketch graph',
            description: 'Plot asymptotes, intercepts, and test points in each region',
            reasoning: 'Graph approaches asymptotes but never touches vertical ones',
            finalAnswer: true
        });

        return steps;
    }

    generateGenericFunctionSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Function analysis',
            description: 'Analyze and graph the function',
            expression: solution.equation || problem.cleanInput,
            reasoning: 'Apply appropriate graphing technique for this function type'
        }];
    }

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,
            explanations: {
                conceptual: this.getConceptualExplanation(step, problem),
                procedural: this.getProceduralExplanation(step),
                visual: this.getVisualExplanation(step, problem)
            },
            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel)
        };

        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPrompts(step);
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
                simpleLanguage: this.convertToSimpleLanguage(step.description)
            }
        }));
    }

    generateELI5Explanation(step, problem) {
        const ELI5Map = {
            'Identify function type': "We're figuring out what kind of math curve this is - like identifying if an animal is a cat, dog, or bird!",
            'Identify slope and y-intercept': "The slope tells us if the line goes uphill or downhill, and how steep. The y-intercept is where it starts on the side of the graph.",
            'Find vertex': "The vertex is the tippy-top or bottom point of the U-shape, like the highest point on a hill or lowest point in a valley.",
            'Determine direction': "We're checking if our U-shape opens like a smile (happy face) or a frown (sad face).",
            'Determine growth or decay': "Is this growing bigger and bigger like a snowball rolling downhill, or getting smaller like ice melting?",
            'Find vertical asymptotes': "Finding the invisible walls the graph can never cross - like a force field!",
            'Plot points and sketch': "Now we connect the dots to make our picture, like connect-the-dots puzzles!"
        };

        return ELI5Map[step.step] || "We're taking another step to draw our graph correctly!";
    }

    findRelevantAnalogy(step, problem) {
        const category = problem.type;
        const analogy = this.analogies[category + '_function'];
        return analogy ? analogy.ELI5 || analogy.explanation : '';
    }

    convertToSimpleLanguage(description) {
        const simplifications = {
            'vertex': 'turning point',
            'asymptote': 'line the graph gets close to but never touches',
            'intercept': 'where the curve crosses the line',
            'domain': 'which x numbers we can use',
            'range': 'which y numbers we can get',
            'slope': 'steepness',
            'coefficient': 'number in front',
            'parabola': 'U-shape',
            'exponential': 'super-fast growing',
            'rational': 'fraction with x'
        };

        let simple = description;
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp(`\\b${term}\\b`, 'gi');
            simple = simple.replace(regex, replacement);
        }
        return simple;
    }

    addStepBridges(steps, problem) {
        const enhanced = [];
        for (let i = 0; i < steps.length; i++) {
            enhanced.push(steps[i]);
            if (i < steps.length - 1) {
                enhanced.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: {
                        currentState: `We've completed: ${steps[i].step}`,
                        nextGoal: `Next: ${steps[i + 1].step}`,
                        why: 'This builds toward complete graph'
                    }
                });
            }
        }
        return enhanced;
    }

    getConceptualExplanation(step, problem) {
        // Conceptual explanations for understanding WHY
        return `This step helps us understand the shape and behavior of the ${problem.type} function.`;
    }

    getProceduralExplanation(step) {
        // Step-by-step instructions for HOW
        return `Follow the standard procedure for ${step.step}.`;
    }

    getVisualExplanation(step, problem) {
        // Visual/spatial explanation
        return `Visualize how this affects the graph's appearance.`;
    }

    getAdaptiveExplanation(step, level) {
        return {
            adaptedDescription: step.description,
            complexityLevel: level
        };
    }

    generateThinkingPrompts(step) {
        return {
            before: `What information do I need for ${step.step}?`,
            during: `Am I applying the technique correctly?`,
            after: `Does this result make sense for the function type?`
        };
    }

    findRealWorldConnection(step, problem) {
        const category = problem.type;
        const rwp = this.realWorldProblems;
        for (const [key, value] of Object.entries(rwp)) {
            if (key.includes(category)) {
                return value.context;
            }
        }
        return 'Function graphs model real-world relationships.';
    }

    // GRAPH DATA GENERATION
    generateFunctionGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { domain } = this.currentProblem;
        const points = this.calculateGraphPoints(domain.start, domain.end, this.graphResolution);

        this.graphData = {
            type: this.currentSolution.category,
            points: points,
            keyFeatures: this.extractKeyFeatures(this.currentSolution),
            domain: this.currentProblem.domain,
            range: this.currentProblem.range
        };
    }

    calculateGraphPoints(xStart, xEnd, resolution) {
        const points = [];
        const step = (xEnd - xStart) / resolution;

        for (let i = 0; i <= resolution; i++) {
            const x = xStart + i * step;
            const y = this.evaluateFunction(x);
            if (y !== null && !isNaN(y) && isFinite(y)) {
                points.push({ x, y });
            }
        }

        return points;
    }

    evaluateFunction(x) {
        try {
            const { type, parameters } = this.currentProblem;

            switch(type) {
                case 'linear':
                    return parameters.m * x + parameters.b;
                case 'quadratic':
                    return parameters.a * x * x + parameters.b * x + parameters.c;
                case 'exponential':
                    return parameters.a * Math.pow(parameters.b, x);
                default:
                    return null;
            }
        } catch (e) {
            return null;
        }
    }

    extractKeyFeatures(solution) {
        const features = {
            intercepts: [],
            extrema: [],
            asymptotes: [],
            specialPoints: []
        };

        // Extract based on function type
        if (solution.yIntercept) {
            features.intercepts.push({
                type: 'y-intercept',
                point: solution.yIntercept,
                label: `(0, ${solution.yIntercept.y})`
            });
        }

        if (solution.xIntercept) {
            features.intercepts.push({
                type: 'x-intercept',
                point: solution.xIntercept,
                label: `(${solution.xIntercept.x}, 0)`
            });
        }

        if (solution.xIntercepts && solution.xIntercepts.length > 0) {
            solution.xIntercepts.forEach(intercept => {
                features.intercepts.push({
                    type: 'x-intercept',
                    point: intercept,
                    label: `(${intercept.x.toFixed(2)}, 0)`
                });
            });
        }

        if (solution.vertex) {
            features.extrema.push({
                type: solution.opensUpward ? 'minimum' : 'maximum',
                point: solution.vertex,
                label: `Vertex: (${solution.vertex.x}, ${solution.vertex.y})`
            });
        }

        if (solution.horizontalAsymptote) {
            features.asymptotes.push({
                type: 'horizontal',
                equation: solution.horizontalAsymptote,
                label: solution.horizontalAsymptote
            });
        }

        if (solution.verticalAsymptote) {
            features.asymptotes.push({
                type: 'vertical',
                equation: solution.verticalAsymptote,
                label: solution.verticalAsymptote
            });
        }

        return features;
    }

    // WORKBOOK GENERATION
    generateFunctionWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createFunctionLessonSection(),
            this.createEnhancedStepsSection(),
            this.createKeyFeaturesSection(),
            this.createGraphAnalysisSection(),
            this.createTransformationSection(),
            this.createRealWorldApplicationSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection(),
            this.createPracticeProblemsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Function Graphs Mathematical Workbook',
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
            ['Function Type', this.functionTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.functionTypes[this.currentProblem.type]?.category || 'function'],
            ['Equation', this.currentSolution?.equation || this.currentProblem.cleanInput],
            ['Task', 'Analyze and graph the function']
        ];

        if (this.currentProblem.domain) {
            problemData.push(['Domain to Graph', `[${this.currentProblem.domain.start}, ${this.currentProblem.domain.end}]`]);
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSection() {
        if (!this.prerequisiteChecks) return null;

        const category = this.currentProblem.type;
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

    createFunctionLessonSection() {
        const { type } = this.currentProblem;
        const category = this.functionTypes[type]?.category;
        const lesson = this.lessons[category + '_functions'] || this.lessons.linear_functions;

        const lessonData = [
            ['Function Family', lesson.title],
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
        lessonData.push(['Graphing Steps', '']);

        lesson.graphingSteps.forEach((step, index) => {
            lessonData.push([`Step ${index + 1}`, step]);
        });

        return {
            title: 'Function Theory & Concepts',
            type: 'lesson',
            data: lessonData
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
                stepsData.push(['', '']);
                return;
            }

            stepsData.push([`Step ${step.stepNumber}`, step.description]);

            if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            if (step.calculation) {
                stepsData.push(['Calculation', step.calculation]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.algebraicRule) {
                stepsData.push(['Rule', step.algebraicRule]);
            }

            if (step.visualHint) {
                stepsData.push(['Visual Hint', step.visualHint]);
            }

            if (step.ELI5 && this.explanationLevel === 'ELI5') {
                stepsData.push(['ELI5', step.ELI5.explanation]);
                if (step.ELI5.analogy) {
                    stepsData.push(['Analogy', step.ELI5.analogy]);
                }
            }

            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
                stepsData.push(['Procedural', step.explanations.procedural]);
                stepsData.push(['Visual', step.explanations.visual]);
            }

            if (step.thinkingPrompts && this.includeThinkingPrompts) {
                stepsData.push(['Think Before', step.thinkingPrompts.before]);
                stepsData.push(['Think After', step.thinkingPrompts.after]);
            }

            if (step.realWorldConnection && this.includeRealWorldApplications) {
                stepsData.push(['Real-World', step.realWorldConnection]);
            }

            stepsData.push(['', '']);
        });

        return {
            title: `Enhanced Graphing Steps (${this.explanationLevel} level)`,
            type: 'steps',
            data: stepsData
        };
    }

    createKeyFeaturesSection() {
        if (!this.currentSolution) return null;

        const featuresData = [
            ['Key Features Summary', ''],
            ['', '']
        ];

        if (this.currentSolution.domain) {
            featuresData.push(['Domain', this.currentSolution.domain]);
        }

        if (this.currentSolution.range) {
            featuresData.push(['Range', this.currentSolution.range]);
        }

        if (this.currentSolution.yIntercept) {
            featuresData.push(['Y-Intercept', `(${this.currentSolution.yIntercept.x}, ${this.currentSolution.yIntercept.y})`]);
        }

        if (this.currentSolution.xIntercept) {
            featuresData.push(['X-Intercept', `(${this.currentSolution.xIntercept.x}, ${this.currentSolution.xIntercept.y})`]);
        }

        if (this.currentSolution.xIntercepts && this.currentSolution.xIntercepts.length > 0) {
            this.currentSolution.xIntercepts.forEach((intercept, i) => {
                featuresData.push([`X-Intercept ${i + 1}`, `(${intercept.x.toFixed(3)}, ${intercept.y})`]);
            });
        }

        if (this.currentSolution.vertex) {
            featuresData.push(['Vertex', `(${this.currentSolution.vertex.x}, ${this.currentSolution.vertex.y})`]);
        }

        if (this.currentSolution.axisOfSymmetry) {
            featuresData.push(['Axis of Symmetry', this.currentSolution.axisOfSymmetry]);
        }

        if (this.currentSolution.horizontalAsymptote) {
            featuresData.push(['Horizontal Asymptote', this.currentSolution.horizontalAsymptote]);
        }

        if (this.currentSolution.verticalAsymptote) {
            featuresData.push(['Vertical Asymptote', this.currentSolution.verticalAsymptote]);
        }

        if (this.currentSolution.slope !== undefined) {
            featuresData.push(['Slope', this.currentSolution.slope]);
            featuresData.push(['Behavior', this.currentSolution.slope > 0 ? 'Increasing' : this.currentSolution.slope < 0 ? 'Decreasing' : 'Horizontal']);
        }

        if (this.currentSolution.opensUpward !== undefined) {
            featuresData.push(['Opens', this.currentSolution.opensUpward ? 'Upward' : 'Downward']);
        }

        if (this.currentSolution.growthOrDecay) {
            featuresData.push(['Type', this.currentSolution.growthOrDecay]);
        }

        return {
            title: 'Key Features of the Function',
            type: 'features',
            data: featuresData
        };
    }

    createGraphAnalysisSection() {
        if (!this.graphData) return null;

        const analysisData = [
            ['Graph Analysis', ''],
            ['', ''],
            ['Function Type', this.currentSolution.type],
            ['Number of Key Points', this.graphData.keyFeatures.intercepts.length + this.graphData.keyFeatures.extrema.length]
        ];

        if (this.graphData.keyFeatures.intercepts.length > 0) {
            analysisData.push(['', '']);
            analysisData.push(['Intercepts', '']);
            this.graphData.keyFeatures.intercepts.forEach(intercept => {
                analysisData.push([intercept.type, intercept.label]);
            });
        }

        if (this.graphData.keyFeatures.extrema.length > 0) {
            analysisData.push(['', '']);
            analysisData.push(['Extrema', '']);
            this.graphData.keyFeatures.extrema.forEach(extremum => {
                analysisData.push([extremum.type, extremum.label]);
            });
        }

        if (this.graphData.keyFeatures.asymptotes.length > 0) {
            analysisData.push(['', '']);
            analysisData.push(['Asymptotes', '']);
            this.graphData.keyFeatures.asymptotes.forEach(asymptote => {
                analysisData.push([asymptote.type, asymptote.label]);
            });
        }

        analysisData.push(['', '']);
        analysisData.push(['Continuity', this.analyzeGraphContinuity()]);
        analysisData.push(['Symmetry', this.analyzeGraphSymmetry()]);
        analysisData.push(['End Behavior', this.analyzeEndBehavior()]);

        return {
            title: 'Graph Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    analyzeGraphContinuity() {
        const category = this.currentSolution.category;
        const continuityMap = {
            'linear': 'Continuous everywhere',
            'quadratic': 'Continuous everywhere',
            'polynomial': 'Continuous everywhere',
            'rational': 'Discontinuous at vertical asymptotes',
            'exponential': 'Continuous everywhere',
            'logarithmic': 'Continuous on domain (x > 0)',
            'absolute_value': 'Continuous everywhere',
            'piecewise': 'Check at boundaries',
            'trigonometric': 'Continuous everywhere (except tan at odd multiples of π/2)'
        };

        return continuityMap[category] || 'Analyze for discontinuities';
    }

    analyzeGraphSymmetry() {
        const category = this.currentSolution.category;

        if (category === 'linear') {
            return this.currentSolution.slope === 0 ? 'Horizontal line (even symmetry)' : 'No symmetry';
        }

        if (category === 'quadratic') {
            return `Symmetric about ${this.currentSolution.axisOfSymmetry}`;
        }

        if (category === 'absolute_value') {
            return `Symmetric about x = ${this.currentSolution.vertex.x}`;
        }

        return 'Check for even or odd symmetry';
    }

    analyzeEndBehavior() {
        const category = this.currentSolution.category;

        if (category === 'linear') {
            if (this.currentSolution.slope > 0) {
                return 'As x → ∞, y → ∞; As x → -∞, y → -∞';
            } else if (this.currentSolution.slope < 0) {
                return 'As x → ∞, y → -∞; As x → -∞, y → ∞';
            } else {
                return 'Horizontal line, constant y-value';
            }
        }

        if (category === 'quadratic') {
            if (this.currentSolution.opensUpward) {
                return 'As x → ±∞, y → ∞';
            } else {
                return 'As x → ±∞, y → -∞';
            }
        }

        if (category === 'exponential') {
            if (this.currentSolution.growthOrDecay === 'growth') {
                return 'As x → ∞, y → ∞; As x → -∞, y → 0';
            } else {
                return 'As x → ∞, y → 0; As x → -∞, y → ∞';
            }
        }

        if (category === 'logarithmic') {
            return 'As x → ∞, y → ∞; As x → 0⁺, y → -∞';
        }

        return 'Analyze limiting behavior';
    }

    createTransformationSection() {
        if (!this.includeAlternativeMethods) return null;

        const transformData = [
            ['Transformations from Parent Function', ''],
            ['', ''],
            ['Parent Function', this.identifyParentFunction()],
            ['', ''],
            ['Applied Transformations', '']
        ];

        const transformations = this.identifyTransformations();
        transformations.forEach((transform, index) => {
            transformData.push([`${index + 1}`, transform]);
        });

        transformData.push(['', '']);
        transformData.push(['Transformation Summary', '']);

        for (const [type, details] of Object.entries(this.transformations)) {
            if (type !== 'orderOfOperations') {
                transformData.push([details.form, details.effect]);
            }
        }

        return {
            title: 'Function Transformations',
            type: 'transformations',
            data: transformData
        };
    }

    identifyParentFunction() {
        const category = this.currentSolution.category;
        const parentMap = {
            'linear': 'f(x) = x',
            'quadratic': 'f(x) = x²',
            'polynomial': 'f(x) = xⁿ',
            'rational': 'f(x) = 1/x',
            'exponential': 'f(x) = bˣ',
            'logarithmic': 'f(x) = log(x)',
            'absolute_value': 'f(x) = |x|',
            'square_root': 'f(x) = √x',
            'trigonometric': 'f(x) = sin(x) or cos(x)'
        };

        return parentMap[category] || 'Base function';
    }

    identifyTransformations() {
        const transformations = [];
        const { type, parameters } = this.currentProblem;

        // Linear transformations
        if (type === 'linear') {
            if (parameters.m && parameters.m !== 1) {
                transformations.push(`Vertical stretch by factor ${Math.abs(parameters.m)}`);
                if (parameters.m < 0) {
                    transformations.push('Reflection over x-axis');
                }
            }
            if (parameters.b && parameters.b !== 0) {
                transformations.push(`Vertical shift ${parameters.b > 0 ? 'up' : 'down'} ${Math.abs(parameters.b)} units`);
            }
        }

        // Quadratic transformations
        if (type === 'quadratic' && this.currentSolution.vertex) {
            const { x: h, y: k } = this.currentSolution.vertex;
            if (h !== 0) {
                transformations.push(`Horizontal shift ${h > 0 ? 'right' : 'left'} ${Math.abs(h)} units`);
            }
            if (k !== 0) {
                transformations.push(`Vertical shift ${k > 0 ? 'up' : 'down'} ${Math.abs(k)} units`);
            }
            if (parameters.a && parameters.a !== 1) {
                transformations.push(`Vertical stretch by factor ${Math.abs(parameters.a)}`);
                if (parameters.a < 0) {
                    transformations.push('Reflection over x-axis');
                }
            }
        }

        if (transformations.length === 0) {
            transformations.push('No transformations (parent function)');
        }

        return transformations;
    }

    createRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const category = this.currentSolution.category;
        const applications = [];

        for (const [key, app] of Object.entries(this.realWorldProblems)) {
            if (key.includes(category) || this.isRelevantApplication(category, key)) {
                applications.push(app);
            }
        }

        if (applications.length === 0) return null;

        const appData = [
            ['Real-World Applications', ''],
            ['', '']
        ];

        applications.slice(0, 3).forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Function Model', app.function]);
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

    isRelevantApplication(category, appKey) {
        const relevanceMap = {
            'linear': ['linear_motion', 'temperature'],
            'quadratic': ['projectile', 'profit'],
            'exponential': ['population_growth', 'radioactive_decay'],
            'logarithmic': ['earthquake'],
            'rational': ['mixture'],
            'trigonometric': ['temperature']
        };

        return relevanceMap[category]?.some(key => appKey.includes(key)) || false;
    }

    createPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const notes = this.generateFunctionPedagogicalNotes(this.currentProblem.type);

        const notesData = [
            ['Teaching Notes', ''],
            ['', ''],
            ['Learning Objectives', notes.objectives.join('; ')],
            ['', ''],
            ['Key Concepts', notes.keyConcepts.join('; ')],
            ['', ''],
            ['Prerequisites', notes.prerequisites.join('; ')],
            ['', ''],
            ['Common Difficulties', notes.commonDifficulties.join('; ')],
            ['', ''],
            ['Teaching Strategies', notes.teachingStrategies.join('; ')],
            ['', ''],
            ['Extension Ideas', notes.extensions.join('; ')],
            ['', ''],
            ['Assessment Tips', notes.assessment.join('; ')]
        ];

        return {
            title: 'Pedagogical Notes',
            type: 'pedagogical',
            data: notesData
        };
    }

    generateFunctionPedagogicalNotes(functionType) {
        const category = this.functionTypes[functionType]?.category || functionType;

        const pedagogicalDatabase = {
            linear: {
                objectives: [
                    'Graph linear functions using slope-intercept form',
                    'Identify slope and y-intercept from equation and graph',
                    'Understand slope as rate of change'
                ],
                keyConcepts: [
                    'Slope represents constant rate of change',
                    'Y-intercept is starting value',
                    'Graph is a straight line'
                ],
                prerequisites: [
                    'Plotting points on coordinate plane',
                    'Understanding rise over run',
                    'Basic arithmetic'
                ],
                commonDifficulties: [
                    'Confusing positive and negative slope',
                    'Plotting y-intercept incorrectly',
                    'Not extending line in both directions'
                ],
                teachingStrategies: [
                    'Use real-world examples (distance, cost)',
                    'Practice with multiple representations (table, graph, equation)',
                    'Emphasize slope as steepness and direction'
                ],
                extensions: [
                    'Parallel and perpendicular lines',
                    'Writing equations from graphs',
                    'Linear inequalities'
                ],
                assessment: [
                    'Can student identify slope and intercept?',
                    'Can student graph from equation?',
                    'Can student interpret slope in context?'
                ]
            },
            quadratic: {
                objectives: [
                    'Graph quadratic functions and identify vertex',
                    'Determine direction and width of parabola',
                    'Find intercepts and axis of symmetry'
                ],
                keyConcepts: [
                    'Parabola shape (U or inverted U)',
                    'Vertex as max/min point',
                    'Symmetry about vertical line'
                ],
                prerequisites: [
                    'Factoring quadratics',
                    'Quadratic formula',
                    'Completing the square'
                ],
                commonDifficulties: [
                    'Finding vertex coordinates',
                    'Understanding effect of coefficient a',
                    'Sketching symmetric shape'
                ],
                teachingStrategies: [
                    'Use projectile motion examples',
                    'Connect to vertex form',
                    'Practice with graphing technology for verification'
                ],
                extensions: [
                    'Quadratic inequalities',
                    'Optimization problems',
                    'Transformations of y=x²'
                ],
                assessment: [
                    'Can student find and plot vertex?',
                    'Can student determine opening direction?',
                    'Can student use symmetry effectively?'
                ]
            },
            exponential: {
                objectives: [
                    'Distinguish exponential growth from decay',
                    'Graph exponential functions with asymptote',
                    'Identify base and initial value'
                ],
                keyConcepts: [
                    'Rapid increase or decrease',
                    'Horizontal asymptote',
                    'Never reaches zero (for decay)'
                ],
                prerequisites: [
                    'Exponent rules',
                    'Understanding of asymptotes',
                    'Percentage growth/decay'
                ],
                commonDifficulties: [
                    'Recognizing growth vs decay',
                    'Understanding asymptotic behavior',
                    'Calculating many points'
                ],
                teachingStrategies: [
                    'Use population and half-life examples',
                    'Compare to linear growth visually',
                    'Emphasize that graph never touches asymptote'
                ],
                extensions: [
                    'Logarithmic functions as inverses',
                    'Compound interest applications',
                    'Exponential modeling'
                ],
                assessment: [
                    'Can student identify growth vs decay?',
                    'Can student sketch asymptote?',
                    'Can student apply to real situations?'
                ]
            },
            rational: {
                objectives: [
                    'Find and graph vertical asymptotes',
                    'Determine horizontal asymptotes',
                    'Identify domain restrictions'
                ],
                keyConcepts: [
                    'Undefined at certain x-values',
                    'Asymptotic behavior',
                    'Multiple branches'
                ],
                prerequisites: [
                    'Polynomial division',
                    'Factoring',
                    'Understanding of limits (informal)'
                ],
                commonDifficulties: [
                    'Finding all asymptotes',
                    'Distinguishing holes from asymptotes',
                    'Sketching correct end behavior'
                ],
                teachingStrategies: [
                    'Start with simple 1/x',
                    'Use tables to show behavior near asymptotes',
                    'Practice factoring first'
                ],
                extensions: [
                    'Slant asymptotes',
                    'Rational inequalities',
                    'Partial fractions'
                ],
                assessment: [
                    'Can student find vertical asymptotes?',
                    'Can student determine horizontal asymptote?',
                    'Can student sketch overall shape?'
                ]
            },
            logarithmic: {
                objectives: [
                    'Graph logarithmic functions',
                    'Identify vertical asymptote and domain',
                    'Understand as inverse of exponential'
                ],
                keyConcepts: [
                    'Inverse of exponential',
                    'Vertical asymptote at x=0',
                    'Domain restricted to positive x'
                ],
                prerequisites: [
                    'Exponential functions',
                    'Inverse function concept',
                    'Log properties'
                ],
                commonDifficulties: [
                    'Domain restrictions',
                    'Slow growth rate',
                    'Connecting to exponents'
                ],
                teachingStrategies: [
                    'Graph exponential and log together',
                    'Use real-world scales (Richter, pH)',
                    'Emphasize inverse relationship'
                ],
                extensions: [
                    'Change of base formula',
                    'Logarithmic equations',
                    'Log scales in science'
                ],
                assessment: [
                    'Can student state domain?',
                    'Can student identify asymptote?',
                    'Can student relate to exponential?'
                ]
            },
            absolute_value: {
                objectives: [
                    'Graph V-shaped absolute value functions',
                    'Find vertex of absolute value graph',
                    'Understand piecewise nature'
                ],
                keyConcepts: [
                    'V-shape with corner at vertex',
                    'Symmetric about vertical line',
                    'Piecewise linear function'
                ],
                prerequisites: [
                    'Absolute value definition',
                    'Linear functions',
                    'Piecewise functions'
                ],
                commonDifficulties: [
                    'Finding vertex from equation',
                    'Determining opening direction',
                    'Drawing sharp corner'
                ],
                teachingStrategies: [
                    'Connect to distance concept',
                    'Show as parent |x| with transformations',
                    'Practice with multiple forms'
                ],
                extensions: [
                    'Absolute value equations',
                    'Absolute value inequalities',
                    'Combined with other functions'
                ],
                assessment: [
                    'Can student locate vertex?',
                    'Can student sketch V-shape?',
                    'Can student write piecewise form?'
                ]
            },
            trigonometric: {
                objectives: [
                    'Graph sine and cosine waves',
                    'Identify amplitude, period, phase shift',
                    'Apply transformations to trig functions'
                ],
                keyConcepts: [
                    'Periodic behavior',
                    'Amplitude and period',
                    'Phase shift and vertical shift'
                ],
                prerequisites: [
                    'Unit circle',
                    'Radian measure',
                    'Basic trig values'
                ],
                commonDifficulties: [
                    'Calculating period from coefficient',
                    'Determining phase shift direction',
                    'Sketching smooth wave'
                ],
                teachingStrategies: [
                    'Use wave motion examples',
                    'Practice with unit circle first',
                    'Mark key points (max, min, zeros)'
                ],
                extensions: [
                    'Tangent and other trig functions',
                    'Inverse trig functions',
                    'Harmonic motion applications'
                ],
                assessment: [
                    'Can student find amplitude and period?',
                    'Can student identify shifts?',
                    'Can student sketch one complete cycle?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Graph the function accurately'],
            keyConcepts: ['Identify key features'],
            prerequisites: ['Basic graphing skills'],
            commonDifficulties: ['Various graphing challenges'],
            teachingStrategies: ['Step-by-step instruction'],
            extensions: ['More complex functions'],
            assessment: ['Verify understanding of process']
        };
    }

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const alternatives = this.generateFunctionAlternativeMethods(this.currentProblem.type);

        const altData = [
            ['Alternative Graphing Methods', ''],
            ['', ''],
            ['Primary Method Used', alternatives.primaryMethod],
            ['', ''],
            ['Alternative Approaches', '']
        ];

        alternatives.methods.forEach((method, index) => {
            altData.push([`Method ${index + 1}`, method.name]);
            altData.push(['Description', method.description]);
            altData.push(['When to Use', method.whenToUse]);
            altData.push(['', '']);
        });

        altData.push(['Method Comparison', alternatives.comparison]);

        return {
            title: 'Alternative Graphing Methods',
            type: 'alternatives',
            data: altData
        };
    }

    generateFunctionAlternativeMethods(functionType) {
        const category = this.functionTypes[functionType]?.category || functionType;

        const methodDatabase = {
            linear: {
                primaryMethod: 'Slope-Intercept Method',
                methods: [
                    {
                        name: 'Two-Point Method',
                        description: 'Plot any two points, then draw line through them',
                        whenToUse: 'When slope and intercept not immediately clear'
                    },
                    {
                        name: 'Table of Values',
                        description: 'Create table of x and y values, plot all points',
                        whenToUse: 'For careful verification or with students new to graphing'
                    },
                    {
                        name: 'Intercept Method',
                        description: 'Find x and y intercepts, connect them',
                        whenToUse: 'When both intercepts are easy to calculate'
                    }
                ],
                comparison: 'Slope-intercept fastest for standard form; two-point reliable; table most thorough'
            },
            quadratic: {
                primaryMethod: 'Vertex and Intercepts Method',
                methods: [
                    {
                        name: 'Table of Values',
                        description: 'Calculate many points, plot and connect smoothly',
                        whenToUse: 'For precise graph or when vertex formula challenging'
                    },
                    {
                        name: 'Transformation Method',
                        description: 'Start with y=x², apply transformations',
                        whenToUse: 'When equation is in vertex form'
                    },
                    {
                        name: 'Factored Form Method',
                        description: 'Plot x-intercepts from factors, find vertex between them',
                        whenToUse: 'When equation is factored or easily factorable'
                    }
                ],
                comparison: 'Vertex method most systematic; transformation method good for understanding; table method most accurate'
            },
            exponential: {
                primaryMethod: 'Key Points and Asymptote Method',
                methods: [
                    {
                        name: 'Table Method',
                        description: 'Calculate several points, sketch curve through them',
                        whenToUse: 'When precise curve needed'
                    },
                    {
                        name: 'Transformation Method',
                        description: 'Start with y=bˣ, apply shifts and stretches',
                        whenToUse: 'When function involves transformations'
                    },
                    {
                        name: 'Technology-Assisted',
                        description: 'Use calculator/software to verify sketch',
                        whenToUse: 'For complex exponentials or verification'
                    }
                ],
                comparison: 'Key points method balances speed and accuracy; table thorough; transformation builds understanding'
            },
            rational: {
                primaryMethod: 'Asymptotes and Test Points Method',
                methods: [
                    {
                        name: 'Sign Analysis Method',
                        description: 'Determine sign in each region between asymptotes',
                        whenToUse: 'For understanding behavior in each branch'
                    },
                    {
                        name: 'Limit Approach Method',
                        description: 'Analyze behavior as x approaches asymptotes',
                        whenToUse: 'For more advanced students with limit knowledge'
                    },
                    {
                        name: 'Technology Method',
                        description: 'Graph with calculator, verify key features by hand',
                        whenToUse: 'For complex rationals'
                    }
                ],
                comparison: 'Asymptotes method most systematic; sign analysis thorough; limits more rigorous'
            }
        };

        return methodDatabase[category] || {
            primaryMethod: 'Standard analytical approach',
            methods: [{
                name: 'Alternative method',
                description: 'Other approaches may apply',
                whenToUse: 'Based on problem characteristics'
            }],
            comparison: 'Choose method based on equation form and context'
        };
    }

    createPracticeProblemsSection() {
        const category = this.currentProblem.type;
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
}

// Export the class
export default EnhancedFunctionGraphsMathematicalWorkbook;
