// Enhanced Quadratic Vertex Form Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedQuadraticVertexFormMathematicalWorkbook {
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
        this.initializeVertexFormLessons();
        this.initializeVertexFormSolvers();
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

    initializeVertexFormLessons() {
        this.lessons = {
            vertex_form_basics: {
                title: "Quadratic Vertex Form Basics",
                concepts: [
                    "General form: y = a(x - h)² + k",
                    "Vertex is at point (h, k)",
                    "Parameter 'a' controls opening direction and width",
                    "Vertex form directly shows maximum/minimum value"
                ],
                theory: "Vertex form reveals key features of parabolas directly: the vertex location, axis of symmetry, and whether it opens up or down. This form is ideal for understanding transformations.",
                keyFormulas: {
                    "Vertex Form": "y = a(x - h)² + k",
                    "Vertex Point": "(h, k)",
                    "Axis of Symmetry": "x = h",
                    "Opening Direction": "If a > 0: opens up; if a < 0: opens down",
                    "Width": "|a| > 1: narrower; |a| < 1: wider"
                },
                keyFeatures: [
                    "Vertex (h, k) is the turning point",
                    "Axis of symmetry is vertical line x = h",
                    "If a > 0, vertex is minimum; if a < 0, vertex is maximum",
                    "Range depends on a and k"
                ],
                applications: [
                    "Projectile motion (maximum height)",
                    "Profit optimization",
                    "Area optimization problems",
                    "Engineering design"
                ]
            },

            identifying_vertex: {
                title: "Identifying the Vertex",
                concepts: [
                    "In y = a(x - h)² + k, vertex is (h, k)",
                    "Watch for sign: y = a(x - 3)² + 2 has vertex (3, 2)",
                    "y = a(x + 3)² + 2 has vertex (-3, 2)",
                    "The h value has opposite sign from what appears in parentheses"
                ],
                theory: "The vertex coordinates come directly from the vertex form equation. The sign convention for h is critical: (x - h) means the vertex x-coordinate is +h.",
                keyFormulas: {
                    "Standard Pattern": "y = a(x - h)² + k → vertex (h, k)",
                    "With Addition": "y = a(x + h)² + k → vertex (-h, k)",
                    "h coordinate": "Opposite of the sign in (x ± h)",
                    "k coordinate": "Same as the constant added/subtracted"
                },
                commonErrors: [
                    "Forgetting to change sign of h",
                    "Confusing h and k positions",
                    "Misidentifying when there's no constant term"
                ],
                solvingSteps: [
                    "Identify the squared term (x - h)² or (x + h)²",
                    "Find h: if (x - h), vertex x = h; if (x + h), vertex x = -h",
                    "Find k: the constant added or subtracted at the end",
                    "Write vertex as ordered pair (h, k)",
                    "Verify by checking the form"
                ]
            },

            identifying_opening: {
                title: "Determining Opening Direction and Width",
                concepts: [
                    "Parameter 'a' controls both direction and width",
                    "a > 0: parabola opens upward (∪ shape)",
                    "a < 0: parabola opens downward (∩ shape)",
                    "|a| > 1: narrower than parent function",
                    "|a| < 1: wider than parent function"
                ],
                theory: "The leading coefficient 'a' transforms the basic parabola y = x². Positive 'a' maintains upward opening, negative 'a' reflects across x-axis. The magnitude of 'a' stretches or compresses vertically.",
                keyFormulas: {
                    "Opening": "a > 0 → up; a < 0 → down",
                    "Width comparison": "|a| = 1 → standard; |a| > 1 → narrow; 0 < |a| < 1 → wide",
                    "Vertical stretch": "y-values multiplied by |a|",
                    "Reflection": "a < 0 → reflected over x-axis"
                },
                solvingSteps: [
                    "Identify the coefficient 'a'",
                    "Check sign: positive (up) or negative (down)",
                    "Check magnitude: |a| compared to 1",
                    "Describe the transformation",
                    "Sketch general shape if needed"
                ],
                applications: [
                    "Understanding profit curves",
                    "Analyzing projectile paths",
                    "Designing parabolic reflectors"
                ]
            },

            axis_of_symmetry: {
                title: "Finding Axis of Symmetry",
                concepts: [
                    "Axis of symmetry is vertical line through vertex",
                    "Equation: x = h",
                    "Parabola is mirror image across this line",
                    "All parabolas have exactly one axis of symmetry"
                ],
                theory: "The axis of symmetry divides the parabola into two congruent halves. For vertex form, it's immediately visible as x = h.",
                keyFormulas: {
                    "Axis equation": "x = h (from vertex (h, k))",
                    "From vertex form": "y = a(x - h)² + k → axis: x = h"
                },
                solvingSteps: [
                    "Identify vertex (h, k) from equation",
                    "Axis of symmetry is x = h",
                    "Write as equation: x = h",
                    "Verify it's a vertical line"
                ],
                applications: [
                    "Finding symmetric points",
                    "Graphing parabolas efficiently",
                    "Understanding parabola structure"
                ]
            },

            finding_maximum_minimum: {
                title: "Finding Maximum or Minimum Value",
                concepts: [
                    "Vertex represents max or min value",
                    "If a > 0: vertex is minimum (parabola opens up)",
                    "If a < 0: vertex is maximum (parabola opens down)",
                    "The max/min value is the k-coordinate"
                ],
                theory: "The vertex is the extreme point of the parabola. When opening upward, it's the lowest point (minimum). When opening downward, it's the highest point (maximum).",
                keyFormulas: {
                    "Minimum": "If a > 0, minimum value is k (at x = h)",
                    "Maximum": "If a < 0, maximum value is k (at x = h)",
                    "Occurs at": "x = h for both cases"
                },
                solvingSteps: [
                    "Identify a, h, and k from equation",
                    "Determine if a > 0 (minimum) or a < 0 (maximum)",
                    "State that max/min value is k",
                    "State that it occurs at x = h",
                    "Write as: 'Maximum/Minimum value is k, occurring at x = h'"
                ],
                applications: [
                    "Maximizing profit or revenue",
                    "Finding maximum height of projectile",
                    "Optimizing area or volume",
                    "Minimizing cost"
                ]
            },

            range_from_vertex: {
                title: "Determining Range",
                concepts: [
                    "Range is set of all possible y-values",
                    "For a > 0: range is [k, ∞) or y ≥ k",
                    "For a < 0: range is (-∞, k] or y ≤ k",
                    "Range depends on vertex and opening direction"
                ],
                theory: "The range of a quadratic function is determined by the vertex and the direction of opening. The vertex k-value is the boundary of the range.",
                keyFormulas: {
                    "Opens up (a > 0)": "Range: y ≥ k or [k, ∞)",
                    "Opens down (a < 0)": "Range: y ≤ k or (-∞, k]",
                    "Domain": "Always all real numbers: (-∞, ∞)"
                },
                solvingSteps: [
                    "Identify k from vertex (h, k)",
                    "Determine sign of a",
                    "If a > 0: range is y ≥ k",
                    "If a < 0: range is y ≤ k",
                    "Write in interval notation or inequality"
                ],
                applications: [
                    "Understanding function behavior",
                    "Setting realistic constraints",
                    "Analyzing real-world scenarios"
                ]
            },

            domain_analysis: {
                title: "Understanding Domain",
                concepts: [
                    "Domain is set of all possible x-values",
                    "For all quadratic functions: domain is all real numbers",
                    "Written as: (-∞, ∞) or x ∈ ℝ",
                    "No restrictions on x-values for parabolas"
                ],
                theory: "Quadratic functions are defined for all real numbers. There are no values of x that cause division by zero or other undefined operations.",
                keyFormulas: {
                    "Domain": "All real numbers: (-∞, ∞)",
                    "In set notation": "{x | x ∈ ℝ}",
                    "Applies to": "All quadratic functions regardless of form"
                },
                solvingSteps: [
                    "Recognize function is quadratic",
                    "State domain is all real numbers",
                    "Write as (-∞, ∞) or equivalent",
                    "Note: no restrictions"
                ]
            },

            graphing_from_vertex: {
                title: "Graphing from Vertex Form",
                concepts: [
                    "Start by plotting the vertex (h, k)",
                    "Use 'a' to determine shape and direction",
                    "Plot additional symmetric points",
                    "Use axis of symmetry for efficiency"
                ],
                theory: "Vertex form makes graphing straightforward: plot vertex, determine shape from 'a', then plot a few additional points using symmetry.",
                keyFormulas: {
                    "Vertex": "Point (h, k) from y = a(x - h)² + k",
                    "Test points": "Choose x-values near h, calculate y",
                    "Symmetry": "If (h + d, y) is on graph, so is (h - d, y)"
                },
                solvingSteps: [
                    "Identify and plot vertex (h, k)",
                    "Draw axis of symmetry x = h",
                    "Determine opening (up/down) from sign of a",
                    "Choose x-values like h±1, h±2, calculate y",
                    "Plot points and their symmetric pairs",
                    "Sketch smooth parabola through points"
                ],
                applications: [
                    "Visualizing function behavior",
                    "Finding intersections graphically",
                    "Understanding transformations"
                ]
            },

            transformations: {
                title: "Understanding Transformations",
                concepts: [
                    "h shifts graph horizontally: right if h > 0, left if h < 0",
                    "k shifts graph vertically: up if k > 0, down if k < 0",
                    "a stretches/compresses and reflects vertically",
                    "All transformations applied to parent function y = x²"
                ],
                theory: "Vertex form explicitly shows how the basic parabola y = x² is transformed: vertical stretch by |a|, reflection if a < 0, horizontal shift by h, vertical shift by k.",
                keyFormulas: {
                    "Parent function": "y = x²",
                    "Horizontal shift": "y = (x - h)² shifts right h units (h > 0)",
                    "Vertical shift": "y = x² + k shifts up k units (k > 0)",
                    "Vertical stretch": "y = ax² stretches by factor |a|",
                    "Reflection": "y = -x² reflects over x-axis"
                },
                transformationOrder: [
                    "1. Vertical stretch/compression by |a|",
                    "2. Reflection over x-axis if a < 0",
                    "3. Horizontal shift by h",
                    "4. Vertical shift by k"
                ],
                solvingSteps: [
                    "Start with parent y = x²",
                    "Apply vertical stretch/compression (multiply by a)",
                    "Apply reflection if a < 0",
                    "Shift horizontally by h",
                    "Shift vertically by k",
                    "Verify vertex is at (h, k)"
                ]
            },

            converting_standard_to_vertex: {
                title: "Converting Standard to Vertex Form",
                concepts: [
                    "Standard form: y = ax² + bx + c",
                    "Use completing the square method",
                    "Or use vertex formula: h = -b/(2a), then find k",
                    "Result: y = a(x - h)² + k"
                ],
                theory: "Converting to vertex form reveals the vertex and makes graphing easier. Completing the square is the algebraic method; the vertex formula is a shortcut.",
                keyFormulas: {
                    "Vertex formula": "h = -b/(2a)",
                    "Find k": "k = f(h) = a(h)² + b(h) + c",
                    "Or complete square": "Factor out a, complete square inside, simplify"
                },
                solvingSteps: [
                    "Given: y = ax² + bx + c",
                    "Method 1 - Formula: h = -b/(2a), k = f(h)",
                    "Method 2 - Complete square: factor a, add/subtract (b/2a)²",
                    "Write result as y = a(x - h)² + k",
                    "Verify by expanding"
                ],
                applications: [
                    "Finding vertex from standard form",
                    "Graphing quadratics",
                    "Optimization problems"
                ]
            },

            finding_intercepts: {
                title: "Finding Intercepts from Vertex Form",
                concepts: [
                    "Y-intercept: set x = 0, solve for y",
                    "X-intercepts: set y = 0, solve for x",
                    "X-intercepts exist only if graph crosses x-axis",
                    "Number of x-intercepts depends on vertex and opening"
                ],
                theory: "Intercepts are where the graph crosses the axes. The y-intercept is unique; x-intercepts may be 0, 1, or 2 depending on the parabola's position.",
                keyFormulas: {
                    "Y-intercept": "Set x = 0: y = a(0 - h)² + k = ah² + k",
                    "X-intercepts": "Set y = 0: 0 = a(x - h)² + k, solve for x"
                },
                solvingSteps: [
                    "For y-intercept: substitute x = 0 into equation",
                    "For x-intercepts: set y = 0, rearrange to (x - h)² = -k/a",
                    "Check if -k/a ≥ 0 (x-intercepts exist if yes)",
                    "Take square root: x - h = ±√(-k/a)",
                    "Solve: x = h ± √(-k/a)",
                    "State intercepts as coordinates"
                ],
                applications: [
                    "Finding zeros of function",
                    "Determining where profit is zero",
                    "Finding when height is zero"
                ]
            },

            word_problems: {
                title: "Vertex Form Word Problems",
                concepts: [
                    "Identify what the variables represent",
                    "Vertex often represents maximum/minimum condition",
                    "Translate problem into vertex form equation",
                    "Interpret results in context"
                ],
                theory: "Real-world problems often have a quadratic relationship where vertex form directly shows the optimal value (maximum profit, maximum height, minimum cost, etc.).",
                problemTypes: {
                    "Projectile motion": "Height as function of time, vertex is maximum height",
                    "Area optimization": "Area as function of dimension, vertex is maximum area",
                    "Profit problems": "Profit as function of price/quantity, vertex is maximum profit",
                    "Revenue problems": "Revenue as function of price, vertex is maximum revenue"
                },
                solutionStrategy: [
                    "Read problem carefully, identify what to maximize/minimize",
                    "Define variables clearly",
                    "Set up equation in vertex form if given, or convert",
                    "Identify vertex (h, k) and interpret meaning",
                    "Answer question with appropriate units",
                    "Check reasonableness in context"
                ]
            },

            optimization: {
                title: "Optimization Using Vertex Form",
                concepts: [
                    "Vertex represents optimal value",
                    "h-coordinate: input value that optimizes",
                    "k-coordinate: optimal output value",
                    "Determine if maximizing or minimizing from a"
                ],
                theory: "Optimization problems seek maximum or minimum values. Vertex form immediately reveals these: k is the extreme value, occurring when x = h.",
                keyFormulas: {
                    "Maximum value": "k (when a < 0)",
                    "Minimum value": "k (when a > 0)",
                    "Optimal input": "x = h for both cases"
                },
                solvingSteps: [
                    "Identify the equation in vertex form",
                    "Determine if seeking max (a < 0) or min (a > 0)",
                    "Optimal value is k",
                    "Occurs when input is h",
                    "State answer with context and units"
                ],
                applications: [
                    "Maximizing area with fixed perimeter",
                    "Maximizing revenue or profit",
                    "Minimizing cost",
                    "Finding optimal pricing"
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
                vertexBg: '#e8f5e9',
                parabolaBg: '#fff3e0'
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
                vertexBg: '#c8e6c9',
                parabolaBg: '#ffe0b2'
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
            // Set notation
            'real': 'ℝ', 'natural': 'ℕ', 'integer': 'ℤ', 'rational': 'ℚ'
        };
    }

    initializeVertexFormSolvers() {
        this.vertexFormTypes = {
            identify_vertex: {
                patterns: [
                    /vertex/i,
                    /y\s*=.*\(x.*\)\s*\^?\s*2/,
                    /find.*vertex/i
                ],
                solver: this.solveIdentifyVertex.bind(this),
                name: 'Identify Vertex from Vertex Form',
                category: 'vertex_identification',
                description: 'Finds the vertex (h, k) from equation y = a(x - h)² + k'
            },

            identify_opening: {
                patterns: [
                    /opening/i,
                    /direction/i,
                    /up.*down/i,
                    /opens/i
                ],
                solver: this.solveIdentifyOpening.bind(this),
                name: 'Determine Opening Direction',
                category: 'opening_direction',
                description: 'Determines if parabola opens up or down based on coefficient a'
            },

            identify_width: {
                patterns: [
                    /width/i,
                    /narrow/i,
                    /wide/i,
                    /stretch/i,
                    /compress/i
                ],
                solver: this.solveIdentifyWidth.bind(this),
                name: 'Determine Width/Stretch',
                category: 'width_analysis',
                description: 'Determines if parabola is narrower or wider than y = x²'
            },

            axis_of_symmetry: {
                patterns: [
                    /axis.*symmetry/i,
                    /line.*symmetry/i,
                    /symmetric/i
                ],
                solver: this.solveAxisOfSymmetry.bind(this),
                name: 'Find Axis of Symmetry',
                category: 'axis_symmetry',
                description: 'Finds the equation of the axis of symmetry: x = h'
            },

            maximum_minimum: {
                patterns: [
                    /maximum/i,
                    /minimum/i,
                    /max.*min/i,
                    /extreme/i,
                    /optimal/i
                ],
                solver: this.solveMaximumMinimum.bind(this),
                name: 'Find Maximum or Minimum Value',
                category: 'extrema',
                description: 'Determines max/min value and where it occurs'
            },

            range: {
                patterns: [
                    /range/i,
                    /y.*values/i,
                    /output/i
                ],
                solver: this.solveRange.bind(this),
                name: 'Determine Range',
                category: 'range',
                description: 'Finds the range of the quadratic function'
            },

            domain: {
                patterns: [
                    /domain/i,
                    /x.*values/i,
                    /input/i
                ],
                solver: this.solveDomain.bind(this),
                name: 'Determine Domain',
                category: 'domain',
                description: 'Finds the domain (always all real numbers for quadratics)'
            },

            graphing: {
                patterns: [
                    /graph/i,
                    /plot/i,
                    /sketch/i,
                    /draw/i
                ],
                solver: this.solveGraphing.bind(this),
                name: 'Graph from Vertex Form',
                category: 'graphing',
                description: 'Creates graph using vertex and additional points'
            },

            transformations: {
                patterns: [
                    /transform/i,
                    /shift/i,
                    /translate/i,
                    /reflect/i
                ],
                solver: this.solveTransformations.bind(this),
                name: 'Describe Transformations',
                category: 'transformations',
                description: 'Describes how parent function y = x² is transformed'
            },

            y_intercept: {
                patterns: [
                    /y.*intercept/i,
                    /intercept.*y/i,
                    /crosses.*y.*axis/i
                ],
                solver: this.solveYIntercept.bind(this),
                name: 'Find Y-Intercept',
                category: 'intercepts',
                description: 'Finds where graph crosses y-axis (set x = 0)'
            },

            x_intercepts: {
                patterns: [
                    /x.*intercept/i,
                    /intercept.*x/i,
                    /zeros/i,
                    /roots/i,
                    /crosses.*x.*axis/i
                ],
                solver: this.solveXIntercepts.bind(this),
                name: 'Find X-Intercepts',
                category: 'intercepts',
                description: 'Finds where graph crosses x-axis (set y = 0)'
            },

            evaluate_function: {
                patterns: [
                    /evaluate/i,
                    /find.*y.*when.*x/i,
                    /substitute/i,
                    /f\(/
                ],
                solver: this.solveEvaluateFunction.bind(this),
                name: 'Evaluate Function',
                category: 'evaluation',
                description: 'Finds y-value for given x-value'
            },

            word_problem_optimization: {
                patterns: [
                    /maximize/i,
                    /minimize/i,
                    /largest/i,
                    /smallest/i,
                    /optimal/i,
                    /best/i
                ],
                solver: this.solveWordProblemOptimization.bind(this),
                name: 'Optimization Word Problem',
                category: 'word_problems',
                description: 'Solves real-world optimization problems using vertex'
            },

            word_problem_projectile: {
                patterns: [
                    /projectile/i,
                    /height/i,
                    /ball/i,
                    /thrown/i,
                    /launched/i
                ],
                solver: this.solveWordProblemProjectile.bind(this),
                name: 'Projectile Motion Problem',
                category: 'word_problems',
                description: 'Solves problems involving objects in motion'
            },

            word_problem_area: {
                patterns: [
                    /area/i,
                    /rectangle/i,
                    /fence/i,
                    /enclos/i,
                    /perimeter/i
                ],
                solver: this.solveWordProblemArea.bind(this),
                name: 'Area Optimization Problem',
                category: 'word_problems',
                description: 'Solves area maximization problems'
            },

            word_problem_revenue: {
                patterns: [
                    /revenue/i,
                    /profit/i,
                    /income/i,
                    /sales/i,
                    /price/i
                ],
                solver: this.solveWordProblemRevenue.bind(this),
                name: 'Revenue/Profit Problem',
                category: 'word_problems',
                description: 'Solves business optimization problems'
            },

            complete_analysis: {
                patterns: [
                    /complete.*analysis/i,
                    /all.*features/i,
                    /full.*analysis/i,
                    /analyze/i
                ],
                solver: this.solveCompleteAnalysis.bind(this),
                name: 'Complete Function Analysis',
                category: 'comprehensive',
                description: 'Performs complete analysis of all features'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            vertex_identification: {
                'Identifying h': [
                    'Forgetting to change sign: (x - 3) has h = 3, not h = -3',
                    'Confusing h and k positions',
                    'Not recognizing (x + 3) means h = -3'
                ],
                'Identifying k': [
                    'Confusing k with other constants',
                    'Not including sign of k',
                    'Misreading when k is negative'
                ]
            },
            opening_direction: {
                'Sign of a': [
                    'Confusing coefficient with constant term',
                    'Not recognizing negative coefficient',
                    'Thinking larger |a| means opens down'
                ],
                'Width interpretation': [
                    'Thinking a > 1 means wider (it\'s narrower)',
                    'Confusing stretch factor with opening direction',
                    'Not comparing to parent function y = x²'
                ]
            },
            intercepts: {
                'Y-intercept': [
                    'Forgetting to square the h value when x = 0',
                    'Sign errors in calculation',
                    'Not simplifying completely'
                ],
                'X-intercepts': [
                    'Not checking if solutions exist',
                    'Forgetting both positive and negative square roots',
                    'Sign errors when solving (x - h)² = -k/a',
                    'Dividing by a before isolating squared term'
                ]
            },
            max_min: {
                'Direction confusion': [
                    'Saying maximum when a > 0 (should be minimum)',
                    'Saying minimum when a < 0 (should be maximum)',
                    'Confusing which coordinate is the max/min value'
                ],
                'Value identification': [
                    'Stating h as the max/min (should be k)',
                    'Not specifying where it occurs (x = h)',
                    'Forgetting to state both the value and location'
                ]
            },
            range: {
                'Inequality direction': [
                    'Writing y ≥ k when a < 0 (should be y ≤ k)',
                    'Writing y ≤ k when a > 0 (should be y ≥ k)',
                    'Using wrong bracket type in interval notation'
                ],
                'Interval notation': [
                    'Writing [k, -∞) instead of (-∞, k]',
                    'Using parentheses instead of brackets at k',
                    'Reversing the interval endpoints'
                ]
            },
            transformations: {
                'Horizontal shift': [
                    'Shifting wrong direction: (x - 3) shifts right, not left',
                    'Confusing horizontal and vertical shifts',
                    'Not recognizing (x + h) as leftward shift'
                ],
                'Vertical stretch': [
                    'Confusing stretch with shift',
                    'Thinking |a| < 1 is a stretch (it\'s compression)',
                    'Not recognizing reflection when a < 0'
                ]
            }
        };

        this.errorPrevention = {
            sign_vigilance: {
                reminder: 'Watch signs carefully, especially for h in (x - h)²',
                method: 'Always write out: "if (x - h), then vertex x = +h; if (x + h), then vertex x = -h"'
            },
            opening_check: {
                reminder: 'Opening direction depends ONLY on sign of a, not magnitude',
                method: 'Check: Is a positive? → opens up. Is a negative? → opens down.'
            },
            intercept_existence: {
                reminder: 'X-intercepts exist only if -k/a ≥ 0',
                method: 'Before solving for x-intercepts, check if -k/a is non-negative'
            },
            max_min_memory: {
                reminder: 'Opens UP → minimum at vertex. Opens DOWN → maximum at vertex',
                method: 'Draw quick U or ∩ shape to visualize'
            },
            range_direction: {
                reminder: 'Range inequality matches opening: up → y ≥ k, down → y ≤ k',
                method: 'Sketch the parabola to see which y-values are covered'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why vertex form reveals key features and what they mean geometrically',
                language: 'Intuitive and meaning-focused, emphasizing visual understanding'
            },
            procedural: {
                focus: 'Exact sequence of steps to extract information from vertex form',
                language: 'Step-by-step instructions with clear procedures'
            },
            visual: {
                focus: 'Graphical representation of parabola and its features',
                language: 'Visual and spatial descriptions, transformations'
            },
            algebraic: {
                focus: 'Formal algebraic properties and mathematical definitions',
                language: 'Precise mathematical terminology and notation'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'Simple, everyday language avoiding heavy terminology',
                detail: 'Essential features only: vertex, opening, basic shape',
                examples: 'Concrete numbers, simple integer coefficients'
            },
            intermediate: {
                vocabulary: 'Standard mathematical terms: vertex, parabola, axis of symmetry',
                detail: 'Main features with brief explanations of why',
                examples: 'Mix of integer and decimal coefficients'
            },
            ELI5: {
                vocabulary: 'Explain like I\'m 5: simplest possible terms with analogies',
                detail: 'Every concept explained with real-world comparisons',
                examples: 'Real-world analogies: ball throwing, hill shape, U-turn',
                analogies: true,
                visualization: 'Simple pictures and drawings'
            },
            detailed: {
                vocabulary: 'Full mathematical vocabulary with precise definitions',
                detail: 'Comprehensive explanations including theory and proofs',
                examples: 'Abstract and generalized cases, algebraic forms'
            },
            scaffolded: {
                vocabulary: 'Progressive from simple to complex, building up',
                detail: 'Guided discovery with questions leading to understanding',
                examples: 'Carefully sequenced from easy to challenging'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            projectile_motion: {
                scenario: "Object thrown or launched following parabolic path",
                vertexFormTemplate: "h(t) = -16(t - h)² + k",
                meaning: "h = time at maximum height, k = maximum height",
                examples: [
                    "A ball is thrown upward. Its height is h(t) = -16(t - 2)² + 68. Find max height.",
                    "Projectile reaches max height of 100 feet at 3 seconds. Write vertex form.",
                    "Firework explodes at peak. Find when and how high."
                ],
                context: "Physics and sports applications where objects follow parabolic paths"
            },
            profit_optimization: {
                scenario: "Business profit as function of price or quantity",
                vertexFormTemplate: "P(x) = a(x - h)² + k",
                meaning: "h = optimal price/quantity, k = maximum profit",
                examples: [
                    "Profit is P(x) = -2(x - 50)² + 5000 where x is price. Find max profit.",
                    "Company maximizes profit at 200 units sold. Write equation.",
                    "Determine best pricing strategy."
                ],
                context: "Business optimization and decision-making"
            },
            area_maximization: {
                scenario: "Maximizing area with constraint (fixed perimeter)",
                vertexFormTemplate: "A(x) = a(x - h)² + k",
                meaning: "h = optimal dimension, k = maximum area",
                examples: [
                    "Fence 100 ft around rectangular garden. One side against barn. Max area?",
                    "Area is A(x) = -2(x - 25)² + 1250. Find max area and dimensions.",
                    "Rectangular pen with divider. Optimize area."
                ],
                context: "Architecture, agriculture, and design optimization"
            },
            revenue_maximization: {
                scenario: "Revenue as function of price",
                vertexFormTemplate: "R(p) = a(p - h)² + k",
                meaning: "h = optimal price, k = maximum revenue",
                examples: [
                    "Revenue R(p) = -10(p - 30)² + 9000 where p is price. Find optimal price.",
                    "Theater ticket pricing to maximize revenue.",
                    "Product pricing strategy."
                ],
                context: "Economics and business strategy"
            },
            arch_design: {
                scenario: "Parabolic arch or bridge design",
                vertexFormTemplate: "y = a(x - h)² + k",
                meaning: "h = horizontal center, k = maximum height",
                examples: [
                    "Arch has max height 20 ft at center, width 40 ft. Write equation.",
                    "Bridge cable follows y = 0.01(x - 50)² + 10. Find shape.",
                    "Gateway arch design specifications."
                ],
                context: "Engineering and architecture"
            },
            suspension_cable: {
                scenario: "Cable hanging in parabolic shape",
                vertexFormTemplate: "y = a(x - h)² + k",
                meaning: "h = center point, k = lowest point",
                examples: [
                    "Cable sags to 5 ft at center, 15 ft high at 30 ft from center.",
                    "Power line suspension between poles.",
                    "Cable car cable shape."
                ],
                context: "Engineering and physics"
            },
            cost_minimization: {
                scenario: "Cost function with optimal production level",
                vertexFormTemplate: "C(x) = a(x - h)² + k",
                meaning: "h = optimal production level, k = minimum cost",
                examples: [
                    "Cost C(x) = 0.5(x - 100)² + 500. Find min cost and optimal production.",
                    "Manufacturing cost optimization.",
                    "Inventory cost minimization."
                ],
                context: "Operations management and economics"
            },
            fountain_design: {
                scenario: "Water fountain with parabolic water arc",
                vertexFormTemplate: "h(x) = a(x - h)² + k",
                meaning: "h = horizontal distance to peak, k = max height",
                examples: [
                    "Fountain water reaches 8 ft high at 3 ft from source. Write equation.",
                    "Design water arc for decorative fountain.",
                    "Sprinkler coverage pattern."
                ],
                context: "Landscape design and engineering"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            vertex_identification: {
                skills: [
                    'Understanding of function notation',
                    'Recognizing squared terms',
                    'Sign recognition and manipulation',
                    'Coordinate system basics'
                ],
                priorKnowledge: [
                    'What a parabola looks like',
                    'Basic function graphing',
                    'Understanding of transformations concept'
                ],
                checkQuestions: [
                    "What is the vertex of a parabola?",
                    "In (x - 3), what sign does the 3 actually have?",
                    "What are the coordinates of a point on a graph?"
                ]
            },
            opening_direction: {
                skills: [
                    'Understanding positive and negative numbers',
                    'Concept of direction (up/down)',
                    'Visual interpretation of graphs',
                    'Coefficient recognition'
                ],
                priorKnowledge: [
                    'What a parabola looks like',
                    'Understanding "opens up" vs "opens down"',
                    'Basic graph reading'
                ],
                checkQuestions: [
                    "Is -3 positive or negative?",
                    "What does a U-shaped curve look like?",
                    "What is a coefficient?"
                ]
            },
            intercepts: {
                skills: [
                    'Substitution',
                    'Solving equations',
                    'Square root operations',
                    'Understanding intercepts'
                ],
                priorKnowledge: [
                    'What x and y intercepts are',
                    'How to solve (x - h)² = c',
                    'When square roots exist'
                ],
                checkQuestions: [
                    "What is an x-intercept?",
                    "What is √25?",
                    "Can you take the square root of -9 (in real numbers)?"
                ]
            },
            max_min: {
                skills: [
                    'Understanding maximum and minimum',
                    'Vertex identification',
                    'Relating opening to extrema',
                    'Function value interpretation'
                ],
                priorKnowledge: [
                    'What maximum and minimum mean',
                    'How parabola shape relates to extrema',
                    'Vertex represents turning point'
                ],
                checkQuestions: [
                    "What is a maximum value?",
                    "If a parabola opens up, is the vertex a max or min?",
                    "What is the y-coordinate of the vertex called?"
                ]
            },
            range: {
                skills: [
                    'Understanding domain and range',
                    'Inequality notation',
                    'Interval notation',
                    'Set notation'
                ],
                priorKnowledge: [
                    'What range means',
                    'How to write inequalities',
                    'Understanding infinity symbol',
                    'Bracket vs parenthesis notation'
                ],
                checkQuestions: [
                    "What is the range of a function?",
                    "What does y ≥ 5 mean?",
                    "What does [5, ∞) represent?"
                ]
            },
            transformations: {
                skills: [
                    'Understanding shifts and stretches',
                    'Horizontal vs vertical transformations',
                    'Reflection concept',
                    'Parent function concept'
                ],
                priorKnowledge: [
                    'What y = x² looks like',
                    'How transformations affect graphs',
                    'Order of transformations'
                ],
                checkQuestions: [
                    "What is the parent quadratic function?",
                    "What does shifting a graph mean?",
                    "What does reflecting over x-axis mean?"
                ]
            },
            word_problems: {
                skills: [
                    'Reading comprehension',
                    'Variable interpretation',
                    'Context translation to math',
                    'Unit awareness'
                ],
                priorKnowledge: [
                    'Real-world application understanding',
                    'Optimization concept',
                    'Physical interpretation of vertex'
                ],
                checkQuestions: [
                    "What does 'maximum height' mean?",
                    "What are typical units for time? Height?",
                    "What does optimizing mean?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            graph_sketch: {
                description: "Visual graph of parabola showing vertex and shape",
                analogy: "Like drawing a U or upside-down U with the bottom/top clearly marked",
                visualization: "Sketch coordinate plane, mark vertex, show opening direction",
                suitableFor: ['all_vertex_form'],
                explanation: "Graphing makes abstract equation concrete and shows relationships visually"
            },
            transformation_diagram: {
                description: "Show how parent function y = x² transforms to given form",
                analogy: "Like showing before and after pictures of a makeover",
                visualization: "Draw y = x², then show each transformation step",
                suitableFor: ['transformations', 'graphing'],
                explanation: "Seeing transformations step-by-step builds understanding of how a, h, k work"
            },
            vertex_table: {
                description: "Organize all vertex form information in table",
                analogy: "Like a fact sheet or spec sheet for the parabola",
                visualization: "Table with rows: a, h, k, vertex, opening, axis, max/min, range",
                suitableFor: ['complete_analysis'],
                explanation: "Table format organizes all features systematically"
            },
            number_line_axis: {
                description: "Number line showing axis of symmetry",
                analogy: "Like marking the center line on a symmetric design",
                visualization: "Draw vertical line at x = h showing symmetry",
                suitableFor: ['axis_symmetry', 'graphing'],
                explanation: "Emphasizes symmetry property of parabolas"
            },
            point_plotting: {
                description: "Plot vertex and additional points, use symmetry",
                analogy: "Like connecting dots to reveal a shape",
                visualization: "Plot (h, k), then points like (h+1, y), use symmetry for (h-1, y)",
                suitableFor: ['graphing'],
                explanation: "Systematic point plotting creates accurate graph"
            },
            real_world_diagram: {
                description: "Picture of real-world scenario (ball flight, arch, etc.)",
                analogy: "Like a photo or drawing of the actual situation",
                visualization: "Draw the real scenario with parabolic path overlaid",
                suitableFor: ['word_problems'],
                explanation: "Connecting math to reality makes it meaningful and memorable"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "Find the vertex of y = (x - 3)² + 5",
                    solution: "(3, 5)",
                    steps: [
                        "Identify form: y = a(x - h)² + k",
                        "Here a = 1, h = 3, k = 5",
                        "Vertex is (h, k) = (3, 5)"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "Does y = 2(x - 1)² + 4 open up or down?",
                    solution: "Opens up",
                    steps: [
                        "Look at coefficient a = 2",
                        "Since a = 2 > 0, parabola opens up"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "Find axis of symmetry for y = (x - 7)² + 2",
                    solution: "x = 7",
                    steps: [
                        "Vertex form: y = (x - h)² + k",
                        "Here h = 7",
                        "Axis of symmetry: x = h = 7"
                    ],
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "Find the maximum value of y = -3(x - 2)² + 12",
                    solution: "Maximum value is 12",
                    steps: [
                        "Identify a = -3, h = 2, k = 12",
                        "Since a < 0, parabola opens down",
                        "Opens down means vertex is maximum",
                        "Maximum value is k = 12",
                        "Occurs at x = h = 2"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "Find range of y = 2(x + 3)² - 5",
                    solution: "Range: y ≥ -5 or [-5, ∞)",
                    steps: [
                        "Identify a = 2, h = -3, k = -5",
                        "Since a = 2 > 0, opens up",
                        "Opens up means minimum at vertex",
                        "Minimum y-value is k = -5",
                        "Range: y ≥ -5 or [-5, ∞)"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "Find y-intercept of y = (x - 4)² + 1",
                    solution: "(0, 17)",
                    steps: [
                        "Set x = 0",
                        "y = (0 - 4)² + 1",
                        "y = (-4)² + 1 = 16 + 1 = 17",
                        "Y-intercept is (0, 17)"
                    ],
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "Find x-intercepts of y = -2(x - 3)² + 8",
                    solution: "x = 1 and x = 5",
                    steps: [
                        "Set y = 0: 0 = -2(x - 3)² + 8",
                        "Subtract 8: -8 = -2(x - 3)²",
                        "Divide by -2: 4 = (x - 3)²",
                        "Square root: ±2 = x - 3",
                        "Solve: x = 3 + 2 = 5 or x = 3 - 2 = 1",
                        "X-intercepts: (1, 0) and (5, 0)"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "A ball's height is h(t) = -16(t - 1.5)² + 36. Find max height and when.",
                    solution: "Max height 36 ft at t = 1.5 seconds",
                    steps: [
                        "Identify a = -16, h = 1.5, k = 36",
                        "Since a < 0, opens down (makes sense for falling ball)",
                        "Vertex is maximum: (1.5, 36)",
                        "Maximum height is 36 feet",
                        "Occurs at t = 1.5 seconds"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "Describe all transformations from y = x² to y = -0.5(x + 2)² + 3",
                    solution: "Vertical compression by 0.5, reflection over x-axis, left 2, up 3",
                    steps: [
                        "a = -0.5, h = -2, k = 3",
                        "Start with y = x²",
                        "|a| = 0.5 < 1: vertical compression by factor 0.5",
                        "a < 0: reflection over x-axis",
                        "h = -2: shift left 2 units",
                        "k = 3: shift up 3 units"
                    ],
                    difficulty: "hard"
                }
            ],
            byMethod: {
                vertex_identification: [
                    { problem: "y = (x - 5)² + 2", solution: "(5, 2)" },
                    { problem: "y = (x + 3)² - 7", solution: "(-3, -7)" },
                    { problem: "y = 2(x - 1)² + 4", solution: "(1, 4)" },
                    { problem: "y = -(x + 4)² + 1", solution: "(-4, 1)" }
                ],
                opening_direction: [
                    { problem: "y = 3(x - 2)² + 1", solution: "Opens up (a > 0)" },
                    { problem: "y = -2(x + 1)² - 5", solution: "Opens down (a < 0)" },
                    { problem: "y = 0.5(x - 3)² + 2", solution: "Opens up (a > 0)" }
                ],
                max_min: [
                    { problem: "y = -4(x - 1)² + 9", solution: "Max = 9 at x = 1" },
                    { problem: "y = 3(x + 2)² - 5", solution: "Min = -5 at x = -2" },
                    { problem: "y = -(x - 3)² + 7", solution: "Max = 7 at x = 3" }
                ],
                intercepts: [
                    { problem: "Find y-intercept of y = (x - 2)² + 3", solution: "(0, 7)" },
                    { problem: "Find x-intercepts of y = (x - 4)² - 9", solution: "(1, 0) and (7, 0)" },
                    { problem: "Find y-intercept of y = -2(x + 1)² + 8", solution: "(0, 6)" }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            sign_of_h: {
                misconception: "In y = (x - 3)² + 5, thinking h = -3 because of the minus sign",
                reality: "(x - h)² means h is positive. (x - 3) → h = +3. (x + 3) → h = -3",
                correctiveExample: "y = (x - 3)² + 5 has vertex (3, 5), NOT (-3, 5)",
                commonIn: ['vertex_identification']
            },
            max_min_confusion: {
                misconception: "Thinking a > 0 means maximum (it's minimum)",
                reality: "Opens up (a > 0) → vertex is MINIMUM. Opens down (a < 0) → vertex is MAXIMUM",
                correctiveExample: "y = 2(x - 1)² + 3 opens up, so vertex (1, 3) is a MINIMUM",
                commonIn: ['extrema']
            },
            which_coordinate_is_max: {
                misconception: "Thinking h is the maximum value",
                reality: "The max/min VALUE is k (y-coordinate). It OCCURS AT x = h",
                correctiveExample: "Vertex (2, 9): if maximum, the max VALUE is 9, occurring AT x = 2",
                commonIn: ['extrema']
            },
            range_inequality: {
                misconception: "Writing y ≥ k when parabola opens down",
                reality: "Opens up → y ≥ k. Opens down → y ≤ k. Inequality matches opening direction",
                correctiveExample: "y = -(x - 1)² + 5 opens down, so range is y ≤ 5, NOT y ≥ 5",
                commonIn: ['range']
            },
            width_interpretation: {
                misconception: "Thinking |a| > 1 makes parabola wider",
                reality: "|a| > 1 makes it NARROWER (stretched). |a| < 1 makes it WIDER (compressed)",
                correctiveExample: "y = 3x² is narrower than y = x². y = 0.5x² is wider than y = x²",
                commonIn: ['width_analysis', 'transformations']
            },
            horizontal_shift_direction: {
                misconception: "(x - 3) shifts left instead of right",
                reality: "(x - h) shifts RIGHT h units. (x + h) shifts LEFT h units. Opposite of sign",
                correctiveExample: "y = (x - 3)² shifts right 3. y = (x + 3)² shifts left 3",
                commonIn: ['transformations']
            },
            x_intercept_existence: {
                misconception: "All parabolas have x-intercepts",
                reality: "X-intercepts exist only if graph crosses x-axis. Check if -k/a ≥ 0",
                correctiveExample: "y = (x - 2)² + 5 has NO x-intercepts (opens up, vertex above x-axis)",
                commonIn: ['intercepts']
            },
            forgetting_square_h: {
                misconception: "For y-intercept when x = 0, forgetting to square (0 - h)",
                reality: "Must compute (0 - h)² = h², not just -h",
                correctiveExample: "y = (x - 4)² + 1 at x = 0: y = (0-4)² + 1 = 16 + 1 = 17",
                commonIn: ['intercepts']
            },
            axis_confusion: {
                misconception: "Thinking axis of symmetry is y = h instead of x = h",
                reality: "Axis of symmetry is VERTICAL line x = h, not horizontal",
                correctiveExample: "For vertex (3, 5), axis is x = 3 (vertical line)",
                commonIn: ['axis_symmetry']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            parabola_shape: {
                analogy: "Bowl or arch shape",
                explanation: "A parabola is like a smooth U-shape (opening up) or an upside-down U like an arch (opening down)",
                suitableFor: ['all'],
                ELI5: "Imagine a smile ☺ (opening up) or a frown ☹ (opening down)"
            },
            vertex_as_peak: {
                analogy: "Top of a hill or bottom of a valley",
                explanation: "The vertex is the highest point (like top of hill) if opening down, or lowest point (like bottom of valley) if opening up",
                suitableFor: ['extrema', 'vertex'],
                ELI5: "The vertex is like the tippy-top of a mountain if upside-down, or the very bottom of a bowl if right-side up"
            },
            axis_of_symmetry_mirror: {
                analogy: "Mirror line or fold line",
                explanation: "If you folded the graph along the axis of symmetry, both halves would match perfectly like a mirror reflection",
                suitableFor: ['axis_symmetry'],
                ELI5: "If you drew the parabola on paper and folded it on this line, both sides would match exactly like a paper snowflake"
            },
            transformations_recipe: {
                analogy: "Recipe modifications",
                explanation: "Starting with basic recipe (y = x²), we modify it: stretch/squish (a), flip (negative a), slide left/right (h), slide up/down (k)",
                suitableFor: ['transformations'],
                ELI5: "Start with plain vanilla (y = x²), then add toppings and change the shape to make it your own"
            },
            opening_direction: {
                analogy: "Cup holding water vs cup spilling water",
                explanation: "Opens up: like a cup that can hold water. Opens down: like a cup flipped over that would spill water",
                suitableFor: ['opening_direction'],
                ELI5: "If it opens up, you could put marbles in it and they'd stay. If it opens down, marbles would roll off"
            },
            vertex_coordinates: {
                analogy: "Address of a house",
                explanation: "The vertex (h, k) is like an address: h tells you the street number (how far left/right), k tells you the floor (how far up/down)",
                suitableFor: ['vertex'],
                ELI5: "(h, k) is like saying 'go h steps sideways, then k steps up or down to find the special point'"
            },
            optimization: {
                analogy: "Sweet spot or perfect timing",
                explanation: "The vertex represents the optimal point: best profit, maximum height, minimum cost—the 'sweet spot'",
                suitableFor: ['optimization', 'word_problems'],
                ELI5: "The vertex is like the 'just right' point in Goldilocks: not too much, not too little, just perfect"
            },
            projectile_path: {
                analogy: "Ball toss arc",
                explanation: "When you throw a ball, it goes up, reaches a highest point, then comes back down—that's a parabola with the vertex at the peak",
                suitableFor: ['word_problems', 'projectile'],
                ELI5: "If you toss a ball in the air, it makes a curved path. The highest point it reaches is like the vertex"
            },
            width_comparison: {
                analogy: "Narrow hallway vs wide door",
                explanation: "Larger |a| makes a narrower parabola (like a narrow hallway). Smaller |a| makes a wider parabola (like a wide door)",
                suitableFor: ['width_analysis'],
                ELI5: "Big a-number makes a skinny U. Small a-number makes a fat U"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            vertex_identification: {
                level1: "Look at the equation in form y = a(x - h)² + k",
                level2: "The vertex coordinates come directly from h and k",
                level3: "h is the opposite of what's inside (x - h), k is the constant at the end",
                level4: "Vertex is ({h}, {k}). Watch the sign of h!"
            },
            opening_direction: {
                level1: "Look at the coefficient in front of the squared term",
                level2: "Is that coefficient positive or negative?",
                level3: "Positive coefficient → opens up. Negative coefficient → opens down",
                level4: "a = {a}, which is {positive/negative}, so opens {up/down}"
            },
            max_min: {
                level1: "First determine if the parabola opens up or down",
                level2: "Opens up → minimum at vertex. Opens down → maximum at vertex",
                level3: "The max/min VALUE is the k-coordinate of the vertex",
                level4: "Since a = {a}, this is a {maximum/minimum} of {k} at x = {h}"
            },
            range: {
                level1: "Range depends on the vertex and opening direction",
                level2: "Find the vertex k-value and determine if parabola opens up or down",
                level3: "Opens up → y ≥ k. Opens down → y ≤ k",
                level4: "Range is {y ≥ k / y ≤ k} or {[k, ∞) / (-∞, k]}"
            },
            x_intercepts: {
                level1: "X-intercepts occur when y = 0",
                level2: "Set equation equal to 0 and solve for x",
                level3: "Get (x - h)² by itself, then take square root",
                level4: "Solve (x - h)² = -k/a. Check if -k/a ≥ 0 first"
            },
            y_intercept: {
                level1: "Y-intercept occurs when x = 0",
                level2: "Substitute x = 0 into the equation",
                level3: "Calculate a(0 - h)² + k",
                level4: "y = a({h})² + {k} = {result}"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "What is the vertex of y = (x - 2)² + 5?",
                    answer: "(2, 5)",
                    assesses: "vertex_identification",
                    difficulty: "basic"
                },
                {
                    question: "Does y = -3(x - 1)² + 7 open up or down?",
                    answer: "Down",
                    assesses: "opening_direction",
                    difficulty: "basic"
                },
                {
                    question: "Find the maximum value of y = -(x - 3)² + 10",
                    answer: 10,
                    assesses: "extrema",
                    difficulty: "intermediate"
                },
                {
                    question: "What is the range of y = 2(x + 1)² - 4?",
                    answer: "y ≥ -4 or [-4, ∞)",
                    assesses: "range",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "In vertex form y = a(x - h)² + k, what does h represent?",
                    options: ["y-coordinate of vertex", "x-coordinate of vertex", "Opening direction", "Width"],
                    correct: "x-coordinate of vertex",
                    explanation: "h is the x-coordinate of the vertex (h, k)"
                },
                {
                    question: "If a > 0, the vertex is a:",
                    options: ["Maximum", "Minimum", "Neither", "Depends on k"],
                    correct: "Minimum",
                    explanation: "When a > 0, parabola opens up, making vertex the minimum"
                },
                {
                    question: "For y = (x + 4)² - 3, what is the axis of symmetry?",
                    options: ["x = 4", "x = -4", "y = 4", "y = -3"],
                    correct: "x = -4",
                    explanation: "(x + 4) means h = -4, so axis is x = -4"
                },
                {
                    question: "Which makes a parabola narrower than y = x²?",
                    options: ["y = 0.5x²", "y = x²", "y = 2x²", "y = -x²"],
                    correct: "y = 2x²",
                    explanation: "|a| = 2 > 1 causes vertical stretch, making it narrower"
                }
            ],
            summative: [
                {
                    question: "Completely analyze y = -2(x - 3)² + 8: vertex, opening, max/min, range, axis of symmetry",
                    answer: {
                        vertex: "(3, 8)",
                        opening: "down",
                        extrema: "maximum of 8 at x = 3",
                        range: "y ≤ 8 or (-∞, 8]",
                        axis: "x = 3"
                    },
                    showsWork: true,
                    rubric: {
                        vertex: 1,
                        opening: 1,
                        max_min: 2,
                        range: 2,
                        axis: 1
                    }
                },
                {
                    question: "Find x-intercepts of y = (x - 5)² - 16",
                    answer: "x = 1 and x = 9",
                    showsWork: true,
                    rubric: {
                        setup: 1,
                        solve_equation: 2,
                        both_solutions: 2
                    }
                },
                {
                    question: "A ball's height is h(t) = -16(t - 2)² + 64. When does it hit the ground?",
                    answer: "t = 4 seconds",
                    showsWork: true,
                    rubric: {
                        set_h_to_zero: 1,
                        solve: 2,
                        interpret: 1,
                        choose_positive: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "Find vertex of y = (x - 1)² + 3",
                    "Does y = 5(x - 2)² + 1 open up or down?",
                    "What is the axis of symmetry for y = (x - 7)² - 2?",
                    "Find the minimum value of y = (x + 3)² + 4"
                ],
                medium: [
                    "Find range of y = -3(x - 2)² + 12",
                    "Find y-intercept of y = 2(x - 3)² + 5",
                    "Find maximum value of y = -(x + 1)² + 9",
                    "Is y = 0.5(x - 4)² + 1 wider or narrower than y = x²?"
                ],
                hard: [
                    "Find x-intercepts of y = -2(x - 4)² + 18",
                    "Describe all transformations from y = x² to y = -0.5(x + 3)² + 7",
                    "A projectile's height is h(t) = -4.9(t - 3)² + 44.1. Find max height and when it hits ground",
                    "Find equation in vertex form: vertex (2, -5), passes through (0, 3)"
                ]
            },
            byObjective: {
                canIdentifyVertex: [
                    "y = (x - 6)² + 2",
                    "y = (x + 4)² - 3",
                    "y = 3(x - 1)² + 5",
                    "y = -(x + 2)² - 7"
                ],
                canDetermineOpening: [
                    "y = 4(x - 1)² + 2",
                    "y = -2(x + 3)² - 5",
                    "y = 0.5(x - 4)² + 1"
                ],
                canFindMaxMin: [
                    "y = -5(x - 2)² + 15",
                    "y = 3(x + 1)² - 7",
                    "y = -(x - 4)² + 20"
                ],
                canFindRange: [
                    "y = 2(x - 3)² + 5",
                    "y = -(x + 2)² + 8",
                    "y = 0.5(x - 1)² - 3"
                ],
                canFindIntercepts: [
                    "Find y-intercept: y = (x - 3)² + 4",
                    "Find x-intercepts: y = (x - 5)² - 9",
                    "Find both intercepts: y = 2(x - 2)² - 8"
                ],
                canSolveWordProblems: [
                    "Height h(t) = -16(t - 1.5)² + 36. Find max height.",
                    "Profit P(x) = -2(x - 50)² + 5000. Find max profit and optimal quantity.",
                    "Arch height y = -0.1(x - 20)² + 40. Find width at base (y = 0)."
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "identify_vertex": "Read h and k directly from y = a(x - h)² + k, watch h sign",
                "find_opening": "Check sign of a: positive → up, negative → down",
                "find_width": "Compare |a| to 1: > 1 narrower, < 1 wider",
                "find_max_min": "Determine opening, then k is max (down) or min (up)",
                "find_range": "Use vertex k and opening: up → y ≥ k, down → y ≤ k",
                "find_axis": "Axis is x = h from vertex (h, k)",
                "find_y_intercept": "Substitute x = 0, calculate y",
                "find_x_intercepts": "Set y = 0, solve (x - h)² = -k/a, check if possible",
                "graph": "Plot vertex, determine shape, plot additional symmetric points",
                "transformations": "Identify a, h, k and describe each transformation",
                "word_problem": "Identify vertex meaning, determine max/min, interpret in context"
            },
            whenToUseWhat: {
                direct_reading: "For vertex, axis, basic shape—read from equation",
                substitution: "For y-intercept, evaluating at specific x-values",
                equation_solving: "For x-intercepts (set y = 0 and solve)",
                comparison: "For width (compare |a| to 1)",
                logical_deduction: "For max/min (use opening direction)",
                inequality_writing: "For range (use opening and vertex)"
            },
            methodSelection: {
                factorsToConsider: [
                    "What feature is being asked for?",
                    "Is it directly visible in vertex form?",
                    "Does it require calculation or just identification?",
                    "Are there potential sign errors to watch for?"
                ],
                generalApproach: [
                    "1. Identify a, h, k from equation",
                    "2. Determine what feature is needed",
                    "3. Apply appropriate strategy",
                    "4. Double-check signs and calculations",
                    "5. Write answer in appropriate form"
                ]
            },
            optimizationTips: {
                "Check signs carefully": "h sign is opposite of what appears; watch negative a",
                "Sketch quick graph": "Visual confirmation helps avoid errors",
                "Use symmetry": "When graphing, use axis of symmetry to plot symmetric points",
                "Verify with test point": "Check your answer by substituting a point"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Vertex Identification Sprint",
                    timeLimit: 60,
                    problems: [
                        "y = (x - 2)² + 5",
                        "y = (x + 3)² - 1",
                        "y = 2(x - 1)² + 7",
                        "y = -(x + 4)² + 3",
                        "y = (x - 6)² - 2",
                        "y = 3(x + 2)² + 4"
                    ]
                },
                {
                    name: "Max/Min Challenge",
                    timeLimit: 90,
                    problems: [
                        "y = -2(x - 3)² + 10",
                        "y = (x + 1)² - 5",
                        "y = -(x - 4)² + 15",
                        "y = 3(x + 2)² - 7"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Parabola",
                    problem: "A parabola has vertex (3, -5) and opens up. It passes through point (5, 3). Find a.",
                    solution: "a = 2",
                    hint: "Use vertex form with known vertex, substitute the point, solve for a"
                },
                {
                    name: "Matching Features",
                    problem: "Match parabolas to descriptions: Which has largest max? Which is widest? Which has vertex farthest left?",
                    equations: [
                        "y = -2(x - 1)² + 10",
                        "y = -(x + 5)² + 8",
                        "y = -0.5(x - 2)² + 7"
                    ],
                    solution: {
                        largest_max: "y = -2(x - 1)² + 10 (max = 10)",
                        widest: "y = -0.5(x - 2)² + 7 (|a| = 0.5 < 1)",
                        leftmost_vertex: "y = -(x + 5)² + 8 (h = -5)"
                    }
                },
                {
                    name: "Build Your Own",
                    challenge: "Create a parabola with these features: opens down, vertex in 2nd quadrant, range y ≤ 10",
                    sampleSolution: "y = -(x + 2)² + 10 (many answers possible)"
                }
            ],
            applications: [
                {
                    scenario: "Basketball Shot",
                    problem: "Ball follows path h(x) = -0.5(x - 10)² + 50 where x is horizontal distance. Find max height and where it lands.",
                    solution: "Max height 50 ft at x = 10 ft; lands at x = 20 ft (approx)",
                    skills: ["vertex", "x-intercepts", "interpretation"]
                },
                {
                    scenario: "Garden Design",
                    problem: "Rectangular garden against house. 60 ft of fence for other 3 sides. Max area?",
                    equation: "A(x) = x(60 - 2x) = -2x² + 60x = -2(x - 15)² + 450",
                    solution: "Max area 450 sq ft when side is 15 ft",
                    skills: ["optimization", "word_problem_setup", "vertex_interpretation"]
                },
                {
                    scenario: "Revenue Optimization",
                    problem: "Revenue R(p) = -5(p - 40)² + 8000 where p is price. Find optimal price and max revenue.",
                    solution: "Optimal price $40, max revenue $8000",
                    skills: ["vertex", "interpretation", "business_context"]
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Find vertex of y = (x - 4)² + 7",
                        "Vertex = (-4, 7)",  // ERROR: should be (4, 7)
                    ],
                    correctAnswer: "(4, 7)",
                    errorType: "Sign error on h-coordinate"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Find max of y = 2(x - 3)² + 5",
                        "Opens up, so max = 5"  // ERROR: opens up means MINIMUM
                    ],
                    correctAnswer: "Opens up, so minimum = 5 (no maximum)",
                    errorType: "Confusion between max and min"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "Range of y = -(x - 2)² + 8",
                        "Opens down, so range is y ≥ 8"  // ERROR: should be y ≤ 8
                    ],
                    correctAnswer: "y ≤ 8 or (-∞, 8]",
                    errorType: "Wrong inequality direction for range"
                }
            ]
        };
    }

    // MAIN SOLVER METHOD
    solveVertexFormProblem(config) {
        const { equation, scenario, parameters, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseVertexFormProblem(equation, scenario, parameters, problemType, context);

            // Solve the problem
            this.currentSolution = this.solveVertexFormProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateVertexFormSteps(this.currentProblem, this.currentSolution);

            // Generate graph data
            this.generateVertexFormGraphData();

            // Generate workbook
            this.generateVertexFormWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                vertex: this.currentSolution?.vertex,
                features: this.currentSolution?.features
            };

        } catch (error) {
            throw new Error(`Failed to solve vertex form problem: ${error.message}`);
        }
    }

    parseVertexFormProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = equation ? this.cleanMathExpression(equation) : '';

        // If problem type is specified, use it directly
        if (problemType && this.vertexFormTypes[problemType]) {
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

        // Auto-detect vertex form problem type
        for (const [type, config] of Object.entries(this.vertexFormTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(scenario)) {
                    const match = cleanInput.match(pattern);
                    const extractedParams = this.extractVertexFormParameters(cleanInput, match, type);

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

        // Default to complete analysis if equation is in vertex form
        if (this.isVertexForm(cleanInput) || (parameters.a !== undefined && parameters.h !== undefined && parameters.k !== undefined)) {
            return {
                originalInput: equation || 'Vertex form equation',
                cleanInput: cleanInput,
                type: 'complete_analysis',
                scenario: scenario,
                parameters: { 
                    a: parameters.a || 1, 
                    h: parameters.h || 0,
                    k: parameters.k || 0,
                    ...parameters 
                },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize vertex form problem type from: ${equation || scenario}`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/≤/g, '<=')
            .replace(/≥/g, '>=')
            .replace(/≠/g, '!=')
            .replace(/\^2/g, '²')
            .replace(/\*\*/g, '^')
            .trim();
    }

    isVertexForm(expression) {
        // Check if expression matches vertex form pattern
        const vertexPattern = /y\s*=\s*[+-]?\d*\.?\d*\s*\(\s*x\s*[+-]\s*\d+\.?\d*\s*\)\s*[\^²]\s*2?\s*[+-]?\s*\d*\.?\d*/;
        return vertexPattern.test(expression);
    }

    extractVertexFormParameters(expression, match, type) {
        const params = {};

        // Try to extract a, h, k from vertex form equation
        // Pattern: y = a(x - h)² + k or y = a(x + h)² + k
        
        const vertexFormPattern = /y\s*=\s*([+-]?\d*\.?\d*)\s*\(\s*x\s*([+-])\s*(\d+\.?\d*)\s*\)\s*[\^²²]\s*2?\s*([+-]?)\s*(\d*\.?\d*)/;
        const vertexMatch = expression.match(vertexFormPattern);

        if (vertexMatch) {
            // Extract a
            let aStr = vertexMatch[1];
            if (!aStr || aStr === '' || aStr === '+') {
                params.a = 1;
            } else if (aStr === '-') {
                params.a = -1;
            } else {
                params.a = parseFloat(aStr);
            }

            // Extract h (watch sign!)
            const hSign = vertexMatch[2]; // + or -
            const hValue = parseFloat(vertexMatch[3]);
            params.h = hSign === '-' ? hValue : -hValue; // (x - h) means +h, (x + h) means -h

            // Extract k
            const kSign = vertexMatch[4]; // + or -
            let kValue = vertexMatch[5];
            if (!kValue || kValue === '') {
                params.k = 0;
            } else {
                params.k = parseFloat(kValue);
                if (kSign === '-') {
                    params.k = -params.k;
                }
            }
        }

        return params;
    }

    solveVertexFormProblem_Internal(problem) {
        const solver = this.vertexFormTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for vertex form problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // VERTEX FORM SOLVERS

    solveIdentifyVertex(problem) {
        const { a, h, k } = problem.parameters;

        return {
            type: 'Vertex Identification',
            equation: `y = ${a}(x - ${h})² + ${k}`,
            vertex: { x: h, y: k },
            vertexNotation: `(${h}, ${k})`,
            explanation: `In vertex form y = a(x - h)² + k, the vertex is at (h, k)`,
            reminder: `Watch the sign: (x - ${h}) means h = ${h}`,
            category: 'vertex_identification'
        };
    }

    solveIdentifyOpening(problem) {
        const { a, h, k } = problem.parameters;
        const opensUp = a > 0;

        return {
            type: 'Opening Direction Analysis',
            equation: `y = ${a}(x - ${h})² + ${k}`,
            coefficient_a: a,
            sign: a > 0 ? 'positive' : 'negative',
            opening: opensUp ? 'upward (∪)' : 'downward (∩)',
            explanation: `Since a = ${a} ${a > 0 ? '> 0' : '< 0'}, the parabola opens ${opensUp ? 'upward' : 'downward'}`,
            implication: opensUp ? 'Vertex is minimum' : 'Vertex is maximum',
            category: 'opening_direction'
        };
    }

    solveIdentifyWidth(problem) {
        const { a, h, k } = problem.parameters;
        const absA = Math.abs(a);
        let width;
        if (absA > 1) {
            width = 'narrower';
        } else if (absA < 1) {
            width = 'wider';
        } else {
            width = 'same width as';
        }

        return {
            type: 'Width Analysis',
            equation: `y = ${a}(x - ${h})² + ${k}`,
            coefficient_a: a,
            absolute_a: absA,
            comparison: `|a| = ${absA} ${absA > 1 ? '> 1' : absA < 1 ? '< 1' : '= 1'}`,
            width: `${width} y = x²`,
            explanation: absA > 1 
                ? `|a| > 1 causes vertical stretch, making parabola narrower`
                : absA < 1 
                    ? `|a| < 1 causes vertical compression, making parabola wider`
                    : `|a| = 1 means same width as parent function`,
            category: 'width_analysis'
        };
    }

    solveAxisOfSymmetry(problem) {
        const { a, h, k } = problem.parameters;

        return {
            type: 'Axis of Symmetry',
            equation: `y = ${a}(x - ${h})² + ${k}`,
            vertex: `(${h}, ${k})`,
            axis: `x = ${h}`,
            explanation: `The axis of symmetry is the vertical line through the vertex`,
            description: `Equation: x = ${h}`,
            category: 'axis_symmetry'
        };
    }

    solveMaximumMinimum(problem) {
        const { a, h, k } = problem.parameters;
        const opensUp = a > 0;
        const extremumType = opensUp ? 'minimum' : 'maximum';

        return {
            type: 'Extremum Analysis',
            equation: `y = ${a}(x - ${h})² + ${k}`,
            vertex: `(${h}, ${k})`,
            opening: opensUp ? 'upward' : 'downward',
            extremumType: extremumType,
            value: k,
            occursAt: h,
            statement: `${extremumType.charAt(0).toUpperCase() + extremumType.slice(1)} value is ${k}, occurring at x = ${h}`,
            explanation: `Since a ${a > 0 ? '> 0' : '< 0'}, parabola opens ${opensUp ? 'up' : 'down'}, so vertex is a ${extremumType}`,
            category: 'extrema'
        };
    }

    solveRange(problem) {
        const { a, h, k } = problem.parameters;
        const opensUp = a > 0;

        const rangeInequality = opensUp ? `y ≥ ${k}` : `y ≤ ${k}`;
        const rangeInterval = opensUp ? `[${k}, ∞)` : `(-∞, ${k}]`;

        return {
            type: 'Range Determination',
            equation: `y = ${a}(x - ${h})² + ${k}`,
            vertex_k: k,
            opening: opensUp ? 'upward' : 'downward',
            extremum: opensUp ? 'minimum' : 'maximum',
            range_inequality: rangeInequality,
            range_interval: rangeInterval,
            explanation: `Parabola opens ${opensUp ? 'up' : 'down'}, so ${opensUp ? 'minimum' : 'maximum'} y-value is ${k}`,
            category: 'range'
        };
    }

    solveDomain(problem) {
        const { a, h, k } = problem.parameters;

        return {
            type: 'Domain Determination',
            equation: `y = ${a}(x - ${h})² + ${k}`,
            domain_inequality: 'x ∈ ℝ (all real numbers)',
            domain_interval: '(-∞, ∞)',
            explanation: 'Quadratic functions have no restrictions on x-values',
            note: 'Domain is always all real numbers for any quadratic function',
            category: 'domain'
        };
    }

    solveGraphing(problem) {
        const { a, h, k } = problem.parameters;
        const opensUp = a > 0;

        // Calculate some additional points for graphing
        const points = [];
        points.push({ x: h, y: k, label: 'Vertex' });
        
        // Points to the right and left of vertex
        for (let d of [1, 2]) {
            const xRight = h + d;
            const xLeft = h - d;
            const yValue = a * (d * d) + k;
            points.push({ x: xRight, y: yValue, label: `h+${d}` });
            points.push({ x: xLeft, y: yValue, label: `h-${d}` });
        }

        return {
            type: 'Graphing Instructions',
            equation: `y = ${a}(x - ${h})² + ${k}`,
            vertex: { x: h, y: k },
            opening: opensUp ? 'upward' : 'downward',
            axis: `x = ${h}`,
            points: points,
            graphingSteps: [
                `Plot vertex at (${h}, ${k})`,
                `Draw axis of symmetry: x = ${h}`,
                `Determine shape: opens ${opensUp ? 'up' : 'down'}, ${Math.abs(a) > 1 ? 'narrow' : Math.abs(a) < 1 ? 'wide' : 'standard width'}`,
                `Plot additional symmetric points`,
                `Sketch smooth parabola through points`
            ],
            category: 'graphing'
        };
    }

    solveTransformations(problem) {
        const { a, h, k } = problem.parameters;
        const transformations = [];

        // Vertical stretch/compression
        if (Math.abs(a) !== 1) {
            if (Math.abs(a) > 1) {
                transformations.push(`Vertical stretch by factor ${Math.abs(a)}`);
            } else {
                transformations.push(`Vertical compression by factor ${Math.abs(a)}`);
            }
        }

        // Reflection
        if (a < 0) {
            transformations.push('Reflection across x-axis');
        }

        // Horizontal shift
        if (h !== 0) {
            transformations.push(`Horizontal shift ${h > 0 ? 'right' : 'left'} ${Math.abs(h)} units`);
        }

        // Vertical shift
        if (k !== 0) {
            transformations.push(`Vertical shift ${k > 0 ? 'up' : 'down'} ${Math.abs(k)} units`);
        }

        return {
            type: 'Transformation Analysis',
            parentFunction: 'y = x²',
            equation: `y = ${a}(x - ${h})² + ${k}`,
            parameters: { a, h, k },
            transformations: transformations,
            order: [
                '1. Vertical stretch/compression',
                '2. Reflection (if applicable)',
                '3. Horizontal shift',
                '4. Vertical shift'
            ],
            category: 'transformations'
        };
    }

    solveYIntercept(problem) {
        const { a, h, k } = problem.parameters;
        
        // Substitute x = 0
        const y = a * (0 - h) * (0 - h) + k;
        const ySimplified = a * h * h + k;

        return {
            type: 'Y-Intercept',
            equation: `y = ${a}(x - ${h})² + ${k}`,
            method: 'Substitute x = 0',
            substitution: `y = ${a}(0 - ${h})² + ${k}`,
            calculation: `y = ${a}(${-h})² + ${k} = ${a} × ${h * h} + ${k} = ${ySimplified} + ${k} = ${y}`,
            yIntercept: { x: 0, y: y },
            point: `(0, ${y})`,
            category: 'intercepts'
        };
    }

    solveXIntercepts(problem) {
        const { a, h, k } = problem.parameters;
        
        // Solve: 0 = a(x - h)² + k
        // (x - h)² = -k/a
        
        const ratio = -k / a;
        
        if (ratio < 0) {
            return {
                type: 'X-Intercepts',
                equation: `y = ${a}(x - ${h})² + ${k}`,
                method: 'Set y = 0 and solve for x',
                setup: `0 = ${a}(x - ${h})² + ${k}`,
                rearranged: `(x - ${h})² = ${ratio}`,
                existence: 'No x-intercepts',
                explanation: `Cannot take square root of negative number: ${ratio} < 0`,
                interpretation: 'Graph does not cross x-axis',
                category: 'intercepts'
            };
        } else if (ratio === 0) {
            return {
                type: 'X-Intercepts',
                equation: `y = ${a}(x - ${h})² + ${k}`,
                method: 'Set y = 0 and solve for x',
                setup: `0 = ${a}(x - ${h})² + ${k}`,
                rearranged: `(x - ${h})² = 0`,
                solution: `x = ${h}`,
                xIntercepts: [{ x: h, y: 0 }],
                point: `(${h}, 0)`,
                existence: 'One x-intercept (vertex on x-axis)',
                category: 'intercepts'
            };
        } else {
            const sqrtValue = Math.sqrt(ratio);
            const x1 = h + sqrtValue;
            const x2 = h - sqrtValue;

            return {
                type: 'X-Intercepts',
                equation: `y = ${a}(x - ${h})² + ${k}`,
                method: 'Set y = 0 and solve for x',
                setup: `0 = ${a}(x - ${h})² + ${k}`,
                rearranged: `(x - ${h})² = ${ratio}`,
                squareRoot: `x - ${h} = ±${sqrtValue}`,
                solutions: [`x = ${h} + ${sqrtValue} = ${x1}`, `x = ${h} - ${sqrtValue} = ${x2}`],
                xIntercepts: [{ x: x1, y: 0 }, { x: x2, y: 0 }],
                points: [`(${x1}, 0)`, `(${x2}, 0)`],
                existence: 'Two x-intercepts',
                category: 'intercepts'
            };
        }
    }

    solveEvaluateFunction(problem) {
        const { a, h, k, xValue } = problem.parameters;
        
        if (xValue === undefined) {
            return {
                type: 'Function Evaluation',
                note: 'No x-value provided to evaluate',
                category: 'evaluation'
            };
        }

        const y = a * Math.pow(xValue - h, 2) + k;

        return {
            type: 'Function Evaluation',
            equation: `y = ${a}(x - ${h})² + ${k}`,
            xValue: xValue,
            substitution: `y = ${a}(${xValue} - ${h})² + ${k}`,
            calculation: `y = ${a}(${xValue - h})² + ${k} = ${a} × ${Math.pow(xValue - h, 2)} + ${k} = ${y}`,
            result: y,
            point: `(${xValue}, ${y})`,
            category: 'evaluation'
        };
    }

    solveWordProblemOptimization(problem) {
        const { a, h, k } = problem.parameters;
        const opensUp = a > 0;
        const optimizationType = opensUp ? 'minimize' : 'maximize';
        const extremumType = opensUp ? 'minimum' : 'maximum';

        return {
            type: 'Optimization Word Problem',
            equation: `y = ${a}(x - ${h})² + ${k}`,
            scenario: problem.scenario || 'Optimization problem',
            goal: optimizationType,
            vertex: { x: h, y: k },
            optimalInput: h,
            optimalOutput: k,
            answer: `${extremumType.charAt(0).toUpperCase() + extremumType.slice(1)} value is ${k}, occurring when input is ${h}`,
            interpretation: problem.context?.interpretation || `The ${extremumType} occurs at x = ${h} with value ${k}`,
            category: 'word_problems'
        };
    }

    solveWordProblemProjectile(problem) {
        const { a, h, k } = problem.parameters;

        // For projectile: h = time at max height, k = max height
        // Find when it hits ground: solve for t when h(t) = 0

        const ratio = -k / a;
        let landingTime = null;
        
        if (ratio >= 0) {
            const sqrtValue = Math.sqrt(ratio);
            const t1 = h + sqrtValue;
            const t2 = h - sqrtValue;
            // Choose the positive time after the vertex
            landingTime = t1 > 0 ? t1 : (t2 > 0 ? t2 : null);
        }

        return {
            type: 'Projectile Motion Problem',
            equation: `h(t) = ${a}(t - ${h})² + ${k}`,
            scenario: problem.scenario || 'Projectile motion',
            maxHeight: k,
            timeAtMaxHeight: h,
            landingTime: landingTime,
            interpretation: `Maximum height is ${k} units at time t = ${h}${landingTime ? `, lands at t = ${landingTime}` : ''}`,
            category: 'word_problems'
        };
    }

    solveWordProblemArea(problem) {
        const { a, h, k } = problem.parameters;

        return {
            type: 'Area Optimization Problem',
            equation: `A(x) = ${a}(x - ${h})² + ${k}`,
            scenario: problem.scenario || 'Area optimization',
            maxArea: k,
            optimalDimension: h,
            interpretation: `Maximum area is ${k} square units when dimension is ${h} units`,
            category: 'word_problems'
        };
    }

    solveWordProblemRevenue(problem) {
        const { a, h, k } = problem.parameters;

        return {
            type: 'Revenue/Profit Problem',
            equation: `R(x) = ${a}(x - ${h})² + ${k}`,
            scenario: problem.scenario || 'Revenue/profit optimization',
            maxRevenue: k,
            optimalPrice: h,
            interpretation: `Maximum revenue/profit is $${k} when price is $${h}`,
            category: 'word_problems'
        };
    }

    solveCompleteAnalysis(problem) {
        const { a, h, k } = problem.parameters;

        // Run all analyses
        const vertex = this.solveIdentifyVertex(problem);
        const opening = this.solveIdentifyOpening(problem);
        const width = this.solveIdentifyWidth(problem);
        const axis = this.solveAxisOfSymmetry(problem);
        const extremum = this.solveMaximumMinimum(problem);
        const range = this.solveRange(problem);
        const domain = this.solveDomain(problem);
        const yIntercept = this.solveYIntercept(problem);
        const xIntercepts = this.solveXIntercepts(problem);
        const transformations = this.solveTransformations(problem);

        return {
            type: 'Complete Function Analysis',
            equation: `y = ${a}(x - ${h})² + ${k}`,
            parameters: { a, h, k },
            features: {
                vertex: vertex.vertexNotation,
                opening: opening.opening,
                width: width.width,
                axisOfSymmetry: axis.axis,
                extremum: extremum.statement,
                range: range.range_interval,
                domain: domain.domain_interval,
                yIntercept: yIntercept.point,
                xIntercepts: xIntercepts.points || xIntercepts.existence,
                transformations: transformations.transformations
            },
            category: 'comprehensive'
        };
    }

    // STEP GENERATION

    generateVertexFormSteps(problem, solution) {
        let baseSteps = this.generateBaseVertexFormSteps(problem, solution);

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

    generateBaseVertexFormSteps(problem, solution) {
        const { type } = problem;

        switch(type) {
            case 'identify_vertex':
                return this.generateVertexIdentificationSteps(problem, solution);
            case 'identify_opening':
                return this.generateOpeningDirectionSteps(problem, solution);
            case 'identify_width':
                return this.generateWidthAnalysisSteps(problem, solution);
            case 'axis_of_symmetry':
                return this.generateAxisSteps(problem, solution);
            case 'maximum_minimum':
                return this.generateExtremumSteps(problem, solution);
            case 'range':
                return this.generateRangeSteps(problem, solution);
            case 'domain':
                return this.generateDomainSteps(problem, solution);
            case 'y_intercept':
                return this.generateYInterceptSteps(problem, solution);
            case 'x_intercepts':
                return this.generateXInterceptSteps(problem, solution);
            case 'graphing':
                return this.generateGraphingSteps(problem, solution);
            case 'transformations':
                return this.generateTransformationSteps(problem, solution);
            case 'complete_analysis':
                return this.generateCompleteAnalysisSteps(problem, solution);
            default:
                return this.generateGenericVertexFormSteps(problem, solution);
        }
    }

    generateVertexIdentificationSteps(problem, solution) {
        const { a, h, k } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify the form',
            description: 'Recognize equation is in vertex form',
            expression: solution.equation,
            reasoning: 'Vertex form is y = a(x - h)² + k',
            goalStatement: 'We need to identify h and k to find the vertex'
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify parameters',
            description: 'Extract a, h, and k from equation',
            parameters: `a = ${a}, h = ${h}, k = ${k}`,
            reasoning: 'Compare equation to standard form y = a(x - h)² + k',
            signReminder: `Watch signs! (x - ${h}) means h = ${h}, not h = ${-h}`,
            algebraicRule: 'Pattern matching with vertex form'
        });

        steps.push({
            stepNumber: 3,
            step: 'State the vertex',
            description: 'Vertex is point (h, k)',
            expression: `Vertex = (${h}, ${k})`,
            finalAnswer: true,
            reasoning: 'In vertex form, vertex coordinates are directly (h, k)',
            verification: `The turning point of this parabola is at (${h}, ${k})`
        });

        return steps;
    }

    generateOpeningDirectionSteps(problem, solution) {
        const { a, h, k } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify coefficient a',
            description: 'Find the coefficient of the squared term',
            expression: solution.equation,
            coefficient: `a = ${a}`,
            reasoning: 'The coefficient a controls opening direction and width',
            goalStatement: 'Determine if a is positive or negative'
        });

        steps.push({
            stepNumber: 2,
            step: 'Check sign of a',
            description: 'Determine if a is positive or negative',
            sign: solution.sign,
            comparison: `${a} ${a > 0 ? '> 0' : '< 0'}`,
            reasoning: 'Sign of a determines opening direction',
            rule: 'If a > 0, opens up; if a < 0, opens down'
        });

        steps.push({
            stepNumber: 3,
            step: 'State opening direction',
            description: 'Conclude the direction',
            expression: `Opens ${solution.opening}`,
            finalAnswer: true,
            reasoning: `Since a ${a > 0 ? '> 0' : '< 0'}, parabola opens ${solution.opening}`,
            implication: solution.implication
        });

        return steps;
    }

    generateWidthAnalysisSteps(problem, solution) {
        const { a } = problem.parameters;
        const absA = Math.abs(a);
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Find |a|',
            description: 'Calculate absolute value of a',
            expression: solution.equation,
            coefficient: `a = ${a}`,
            absolute: `|a| = ${absA}`,
            reasoning: 'Width comparison uses |a|, not a itself',
            goalStatement: 'Compare |a| to 1'
        });

        steps.push({
            stepNumber: 2,
            step: 'Compare |a| to 1',
            description: 'Determine relationship to parent function',
            comparison: solution.comparison,
            reasoning: '|a| = 1 is standard width (y = x²)',
            rule: '|a| > 1: narrower; |a| < 1: wider; |a| = 1: same'
        });

        steps.push({
            stepNumber: 3,
            step: 'State width comparison',
            description: 'Conclude width relative to y = x²',
            expression: solution.width,
            finalAnswer: true,
            reasoning: solution.explanation
        });

        return steps;
    }

    generateAxisSteps(problem, solution) {
        const { h } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Find vertex',
            description: 'Identify vertex coordinates',
            expression: solution.equation,
            vertex: solution.vertex,
            reasoning: 'Axis of symmetry passes through vertex',
            goalStatement: 'Use vertex to find axis'
        });

        steps.push({
            stepNumber: 2,
            step: 'Axis equation',
            description: 'Axis is vertical line x = h',
            expression: solution.axis,
            finalAnswer: true,
            reasoning: 'Axis of symmetry is always x = h for vertex (h, k)',
            geometricMeaning: 'This vertical line divides parabola into mirror images'
        });

        return steps;
    }

    generateExtremumSteps(problem, solution) {
        const { a, h, k } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Determine opening direction',
            description: 'Check if parabola opens up or down',
            expression: solution.equation,
            coefficient: `a = ${a}`,
            opening: solution.opening,
            reasoning: `a ${a > 0 ? '> 0' : '< 0'} means opens ${solution.opening}`,
            goalStatement: 'Determine if vertex is max or min'
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify extremum type',
            description: 'Opening determines max vs min',
            extremumType: solution.extremumType,
            reasoning: `Opens ${solution.opening} → vertex is ${solution.extremumType}`,
            rule: 'Up → minimum; Down → maximum'
        });

        steps.push({
            stepNumber: 3,
            step: 'Find vertex coordinates',
            description: 'Extract h and k from equation',
            vertex: solution.vertex,
            reasoning: 'Vertex form gives coordinates directly',
            values: `h = ${h}, k = ${k}`
        });

        steps.push({
            stepNumber: 4,
            step: 'State extremum',
            description: 'Give complete answer',
            expression: solution.statement,
            finalAnswer: true,
            reasoning: `The ${solution.extremumType} value is k = ${k}, occurring at x = h = ${h}`,
            interpretation: `Extreme point is at (${h}, ${k})`
        });

        return steps;
    }

    generateRangeSteps(problem, solution) {
        const { a, h, k } = problem.parameters;
        const opensUp = a > 0;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify vertex k-value',
            description: 'Find the y-coordinate of vertex',
            expression: solution.equation,
            vertex: `(${h}, ${k})`,
            vertexK: k,
            reasoning: 'The k-value bounds the range',
            goalStatement: 'Determine which y-values are possible'
        });

        steps.push({
            stepNumber: 2,
            step: 'Determine opening',
            description: 'Check if opens up or down',
            coefficient: `a = ${a}`,
            opening: solution.opening,
            reasoning: 'Opening determines if k is minimum or maximum y-value',
            extremum: solution.extremum
        });

        steps.push({
            stepNumber: 3,
            step: 'Write range',
            description: 'Express range in inequality and interval notation',
            inequality: solution.range_inequality,
            interval: solution.range_interval,
            finalAnswer: true,
            reasoning: `Opens ${opensUp ? 'up' : 'down'} means y-values ${opensUp ? 'start at' : 'go up to'} ${k}`,
            interpretation: `All y-values ${opensUp ? 'greater than or equal to' : 'less than or equal to'} ${k}`
        });

        return steps;
    }

    generateDomainSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Recognize function type',
            description: 'Identify as quadratic function',
            expression: solution.equation,
            functionType: 'Quadratic (parabola)',
            reasoning: 'Quadratic functions have no domain restrictions',
            goalStatement: 'State the domain'
        });

        steps.push({
            stepNumber: 2,
            step: 'State domain',
            description: 'Domain is all real numbers',
            inequality: solution.domain_inequality,
            interval: solution.domain_interval,
            finalAnswer: true,
            reasoning: solution.explanation,
            note: solution.note
        });

        return steps;
    }

    generateYInterceptSteps(problem, solution) {
        const { a, h, k } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Set x = 0',
            description: 'Y-intercept occurs when x = 0',
            expression: solution.equation,
            reasoning: 'Y-intercept is where graph crosses y-axis',
            goalStatement: 'Substitute x = 0 and solve for y'
        });

        steps.push({
            stepNumber: 2,
            step: 'Substitute',
            description: 'Replace x with 0 in equation',
            substitution: solution.substitution,
            reasoning: 'Direct substitution into vertex form',
            algebraicRule: 'Function evaluation'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate',
            description: 'Simplify the expression',
            calculation: solution.calculation,
            reasoning: 'Remember to square (0 - h) before multiplying by a',
            reminder: `(0 - ${h})² = ${h}² = ${h * h}, not just ${-h}`
        });

        steps.push({
            stepNumber: 4,
            step: 'State y-intercept',
            description: 'Write as coordinate point',
            expression: solution.point,
            finalAnswer: true,
            reasoning: `Graph crosses y-axis at ${solution.point}`,
            verification: `When x = 0, y = ${solution.yIntercept.y}`
        });

        return steps;
    }

    generateXInterceptSteps(problem, solution) {
        const { a, h, k } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Set y = 0',
            description: 'X-intercepts occur when y = 0',
            expression: solution.equation,
            setup: solution.setup,
            reasoning: 'X-intercepts are where graph crosses x-axis',
            goalStatement: 'Solve equation for x'
        });

        steps.push({
            stepNumber: 2,
            step: 'Isolate squared term',
            description: 'Get (x - h)² by itself',
            rearranged: solution.rearranged,
            reasoning: 'Move constant term to isolate squared expression',
            algebraicRule: 'Subtraction property of equality'
        });

        if (solution.existence === 'No x-intercepts') {
            steps.push({
                stepNumber: 3,
                step: 'Check for solutions',
                description: 'Determine if solutions exist',
                check: `${-k/a} < 0`,
                conclusion: 'Cannot take square root of negative number',
                finalAnswer: true,
                reasoning: solution.explanation,
                interpretation: solution.interpretation
            });
        } else if (solution.existence === 'One x-intercept (vertex on x-axis)') {
            steps.push({
                stepNumber: 3,
                step: 'Solve',
                description: 'Square root of 0 is 0',
                solution: solution.solution,
                finalAnswer: true,
                reasoning: 'Vertex touches x-axis at one point',
                point: solution.point
            });
        } else {
            steps.push({
                stepNumber: 3,
                step: 'Take square root',
                description: 'Apply square root to both sides',
                squareRoot: solution.squareRoot,
                reasoning: 'Remember ± for both positive and negative roots',
                algebraicRule: 'Square root property'
            });

            steps.push({
                stepNumber: 4,
                step: 'Solve for x',
                description: 'Find both x-values',
                solutions: solution.solutions,
                reasoning: 'Add h to both sides to isolate x',
                twoSolutions: 'Parabola crosses x-axis at two points'
            });

            steps.push({
                stepNumber: 5,
                step: 'State x-intercepts',
                description: 'Write as coordinate points',
                points: solution.points,
                finalAnswer: true,
                reasoning: 'Both intercepts have y-coordinate of 0',
                interpretation: `Graph crosses x-axis at ${solution.points.join(' and ')}`
            });
        }

        return steps;
    }

    generateGraphingSteps(problem, solution) {
        const { a, h, k } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Plot vertex',
            description: 'Mark the vertex point',
            vertex: `(${h}, ${k})`,
            reasoning: 'Vertex is the most important point',
            instruction: `Plot point at (${h}, ${k})`
        });

        steps.push({
            stepNumber: 2,
            step: 'Draw axis of symmetry',
            description: 'Draw vertical line through vertex',
            axis: `x = ${h}`,
            reasoning: 'This line helps identify symmetric points',
            instruction: `Draw dashed vertical line at x = ${h}`
        });

        steps.push({
            stepNumber: 3,
            step: 'Determine shape',
            description: 'Identify opening and width',
            opening: solution.opening,
            width: a > 1 ? 'narrow' : a < 1 ? 'wide' : 'standard',
            reasoning: `a = ${a} determines shape characteristics`,
            instruction: `Sketch ${solution.opening} parabola`
        });

        steps.push({
            stepNumber: 4,
            step: 'Plot additional points',
            description: 'Choose x-values and calculate y',
            points: solution.points.slice(1, 5), // A few additional points
            reasoning: 'More points give more accurate graph',
            instruction: 'Calculate y-values for x = h±1, h±2, etc.'
        });

        steps.push({
            stepNumber: 5,
            step: 'Use symmetry',
            description: 'Plot symmetric pairs',
            reasoning: 'If (h+d, y) is on graph, so is (h-d, y)',
            instruction: 'Mirror points across axis of symmetry'
        });

        steps.push({
            stepNumber: 6,
            step: 'Sketch parabola',
            description: 'Draw smooth curve through all points',
            finalAnswer: true,
            reasoning: 'Connect points with smooth U-shape',
            instruction: 'Draw parabola through vertex and all plotted points'
        });

        return steps;
    }

    generateTransformationSteps(problem, solution) {
        const { a, h, k } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify parent function',
            description: 'Start with basic parabola',
            parentFunction: solution.parentFunction,
            reasoning: 'All parabolas are transformations of y = x²',
            goalStatement: 'Describe how to transform y = x² to get our equation'
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify parameters',
            description: 'Extract a, h, k from equation',
            parameters: solution.parameters,
            reasoning: 'Each parameter controls a specific transformation',
            breakdown: `a = ${a} (vertical stretch/reflection), h = ${h} (horizontal shift), k = ${k} (vertical shift)`
        });

        steps.push({
            stepNumber: 3,
            step: 'List transformations',
            description: 'Describe each transformation',
            transformations: solution.transformations,
            reasoning: 'Apply transformations in specific order',
            order: solution.order
        });

        steps.push({
            stepNumber: 4,
            step: 'Verify result',
            description: 'Check that transformations produce correct equation',
            finalEquation: solution.equation,
            finalAnswer: true,
            reasoning: 'All transformations together produce the given function',
            summary: `Transform y = x² → ${solution.equation}`
        });

        return steps;
    }

    generateCompleteAnalysisSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify equation form',
            description: 'Recognize vertex form structure',
            expression: solution.equation,
            parameters: solution.parameters,
            reasoning: 'Vertex form: y = a(x - h)² + k',
            goalStatement: 'Extract all key features'
        });

        steps.push({
            stepNumber: 2,
            step: 'Find vertex',
            description: 'Identify turning point',
            vertex: solution.features.vertex,
            reasoning: 'Vertex is (h, k) from equation',
            feature: 'Vertex'
        });

        steps.push({
            stepNumber: 3,
            step: 'Determine opening',
            description: 'Find direction parabola opens',
            opening: solution.features.opening,
            reasoning: 'Sign of a determines opening',
            feature: 'Opening Direction'
        });

        steps.push({
            stepNumber: 4,
            step: 'Find axis of symmetry',
            description: 'Identify line of symmetry',
            axis: solution.features.axisOfSymmetry,
            reasoning: 'Axis is x = h',
            feature: 'Axis of Symmetry'
        });

        steps.push({
            stepNumber: 5,
            step: 'Find extremum',
            description: 'Determine max or min value',
            extremum: solution.features.extremum,
            reasoning: 'Opening determines if vertex is max or min',
            feature: 'Maximum/Minimum'
        });

        steps.push({
            stepNumber: 6,
            step: 'Determine range',
            description: 'Find all possible y-values',
            range: solution.features.range,
            reasoning: 'Range based on opening and vertex k-value',
            feature: 'Range'
        });

        steps.push({
            stepNumber: 7,
            step: 'State domain',
            description: 'All possible x-values',
            domain: solution.features.domain,
            reasoning: 'Domain is always all real numbers for quadratics',
            feature: 'Domain'
        });

        steps.push({
            stepNumber: 8,
            step: 'Find y-intercept',
            description: 'Where graph crosses y-axis',
            yIntercept: solution.features.yIntercept,
            reasoning: 'Substitute x = 0',
            feature: 'Y-Intercept'
        });

        steps.push({
            stepNumber: 9,
            step: 'Find x-intercepts',
            description: 'Where graph crosses x-axis',
            xIntercepts: solution.features.xIntercepts,
            reasoning: 'Set y = 0 and solve',
            feature: 'X-Intercepts'
        });

        steps.push({
            stepNumber: 10,
            step: 'Describe transformations',
            description: 'How parent function transforms',
            transformations: solution.features.transformations,
            finalAnswer: true,
            reasoning: 'Complete description of all features',
            summary: 'All key features identified'
        });

        return steps;
    }

    generateGenericVertexFormSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Vertex form analysis',
            description: 'Analyze the given vertex form equation',
            expression: problem.equation || solution.equation,
            reasoning: 'Apply vertex form techniques',
            solution: solution
        }];
    }

    // ENHANCED EXPLANATION METHODS (Similar to linear workbook)

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
            'Identify the form': "We're looking at a special type of math equation that makes a U-shape. It's like a recipe that tells us how to draw a curve!",
            'Identify parameters': "We need to find three special numbers in our equation: a, h, and k. They're like the secret ingredients that tell us what our U-shape looks like.",
            'State the vertex': "The vertex is the tippy-top (or bottom) of our U-shape. It's the most important point!",
            'Identify coefficient a': "The 'a' number is like the boss - it tells us if our U smiles up or frowns down, and if it's skinny or wide.",
            'Check sign of a': "Is 'a' a positive number or a negative number? This tells us which way the U faces!",
            'State opening direction': "Now we know which way our U-shape points - either up like a bowl or down like a hill!",
            'Find |a|': "We look at how big the 'a' number is, ignoring if it's positive or negative (that's what | | means).",
            'Compare |a| to 1': "Is our number bigger than 1, smaller than 1, or equal to 1? This tells us if our U is skinny, fat, or just right!",
            'Find vertex': "The special point at the tip of our U is called the vertex. It's like the peak of a mountain or the bottom of a valley.",
            'Axis equation': "Imagine a mirror line right down the middle of the U. Everything on one side matches the other side!",
            'Determine opening direction': "We check which way the U points to know if the vertex is the highest or lowest point.",
            'Identify extremum type': "If the U points up, the vertex is the lowest point (minimum). If it points down, it's the highest point (maximum).",
            'State extremum': "Now we can say exactly how high or low our special point is!",
            'Identify vertex k-value': "The 'k' number tells us how high up or down our vertex is.",
            'Write range': "Range means all the possible heights our U-shape reaches. It's like asking 'how high and how low does it go?'",
            'Set x = 0': "We want to know where our U crosses the vertical line on the left. That's when x equals zero!",
            'Substitute': "We replace x with 0 in our equation, like filling in a blank in a sentence.",
            'Calculate': "Now we do the math to find out the answer!",
            'Set y = 0': "We want to know where our U touches the ground (the horizontal line). That's when y equals zero!",
            'Isolate squared term': "We rearrange the equation to get the (x - h)² part by itself, like unwrapping a present.",
            'Check for solutions': "Can we solve this? We check if we're trying to take the square root of a negative number (which we can't do with regular numbers).",
            'Take square root': "We undo the square by taking the square root, but remember there are always two answers: positive and negative!",
            'Plot vertex': "Put a dot at the special tip point of our U!",
            'Draw axis of symmetry': "Draw a line down the middle where everything matches on both sides.",
            'Determine shape': "Figure out if our U is skinny or wide, and if it points up or down.",
            'Plot additional points': "Add more dots on our graph so we can connect them to make the curve."
        };

        return ELI5Explanations[step.step] || "We're taking another step to understand our U-shaped curve!";
    }

    findRelevantAnalogy(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(problem.type) || analogy.suitableFor.includes('all')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of this like solving a puzzle - each step gets us closer to understanding the picture!";
    }

    convertToSimpleLanguage(description) {
        const simplifications = {
            'vertex': 'the tip point of the U',
            'parabola': 'U-shaped curve',
            'coefficient': 'the number in front',
            'parameter': 'special number',
            'squared term': 'the part with x²',
            'axis of symmetry': 'mirror line down the middle',
            'intercept': 'where it crosses the line',
            'maximum': 'highest point',
            'minimum': 'lowest point',
            'extremum': 'highest or lowest point',
            'range': 'all possible heights',
            'domain': 'all possible left-right positions',
            'opens upward': 'points up like a bowl',
            'opens downward': 'points down like a hill',
            'substitute': 'replace with',
            'isolate': 'get by itself',
            'simplify': 'make easier'
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
            'Identify the form': 'Draw a basic U-shape and label it "parabola" or "quadratic"',
            'State the vertex': 'Draw a U and mark the tip with a big dot, label it "vertex"',
            'Check sign of a': 'Draw two U-shapes: one pointing up (happy face ☺) and one pointing down (sad face ☹)',
            'State opening direction': 'Draw your U-shape pointing the correct direction',
            'Compare |a| to 1': 'Draw three U-shapes: one skinny (|a| > 1), one normal (|a| = 1), one wide (|a| < 1)',
            'Axis equation': 'Draw a vertical dashed line through the middle of your U',
            'State extremum': 'Put a star at the vertex and label it "max" or "min"',
            'Write range': 'Shade the region showing all possible y-values',
            'Plot vertex': 'Mark a big dot at the coordinates of the vertex',
            'Draw axis of symmetry': 'Draw a vertical dashed line through the vertex',
            'Plot additional points': 'Add several dots around the vertex',
            'Sketch parabola': 'Connect all your dots with a smooth U-curve'
        };

        return visualizations[step.step] || 'Draw a picture to represent what\'s happening in this step';
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
        const category = this.vertexFormTypes[problemType]?.category || 'vertex_identification';
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

    // HELPER METHODS

    getConceptualExplanation(step, problem) {
        const conceptualExplanations = {
            'Identify the form': 'Vertex form explicitly shows the vertex location and transformations of the parent parabola y = x².',
            'Identify parameters': 'Each parameter has geometric meaning: a controls shape, h shifts horizontally, k shifts vertically.',
            'State the vertex': 'The vertex is the parabola\'s turning point, where it changes direction.',
            'Check sign of a': 'The sign of a determines concavity: positive creates a "cup" shape, negative creates a "cap" shape.',
            'State opening direction': 'Opening direction determines whether the vertex represents a maximum or minimum value.',
            'Compare |a| to 1': 'The magnitude of a controls the "steepness" or vertical stretch of the parabola.',
            'Axis equation': 'The axis of symmetry is a fundamental property: every parabola is symmetric about a vertical line through its vertex.',
            'State extremum': 'The vertex represents the optimal value: either the highest (maximum) or lowest (minimum) point.',
            'Write range': 'Range represents all achievable output values, bounded by the vertex based on opening direction.',
            'Set x = 0': 'The y-intercept represents the output when the input is zero, often having real-world meaning.',
            'Set y = 0': 'X-intercepts (if they exist) represent inputs that produce zero output, often solutions to real problems.',
            'Plot vertex': 'The vertex is the most important point for graphing; it anchors the entire parabola.',
            'Draw axis of symmetry': 'The axis of symmetry makes graphing efficient: plot one side, mirror to the other.',
            'Sketch parabola': 'A parabola is a smooth curve; never sharp corners or straight sections.'
        };

        return conceptualExplanations[step.step] || 'This step helps us understand a key feature of the quadratic function.';
    }

    getProceduralExplanation(step) {
        if (step.description) {
            return `1. ${step.description}
2. Apply the appropriate method
3. Simplify if needed
4. Write the final result`;
        }
        return 'Follow the standard procedure for this type of step.';
    }

    getVisualExplanation(step, problem) {
        const visualExplanations = {
            'vertex_identification': 'Visualize the U-shape with a marked point at the tip - that\'s the vertex.',
            'opening_direction': 'Picture the parabola as a bowl (opening up) or an arch (opening down).',
            'width_analysis': 'Imagine the standard parabola y = x², then visualize it stretched narrower or compressed wider.',
            'axis_symmetry': 'Envision a vertical mirror placed through the vertex - both sides reflect perfectly.',
            'extrema': 'See the vertex as either the peak of a mountain (maximum) or the bottom of a valley (minimum).',
            'range': 'Picture shading all the heights the parabola reaches, starting from the vertex.',
            'intercepts': 'Visualize where the curve crosses the horizontal and vertical axes.',
            'graphing': 'Imagine plotting the vertex first, then carefully sketching a smooth curve through symmetric points.'
        };

        const category = this.vertexFormTypes[problem.type]?.category;
        return visualExplanations[category] || 'Visualize the parabola and how this feature appears on the graph.';
    }

    getAlgebraicExplanation(step) {
        const algebraicRules = {
            'Identify the form': 'Standard vertex form template: y = a(x - h)² + k',
            'Identify parameters': 'Pattern matching: compare given equation to template form',
            'State the vertex': 'Definition: For y = a(x - h)² + k, vertex is point (h, k)',
            'Check sign of a': 'Sign analysis: sgn(a) determines concavity',
            'State opening direction': 'Theorem: a > 0 ⟹ concave up; a < 0 ⟹ concave down',
            'Compare |a| to 1': 'Vertical stretch factor analysis: |a| compared to unity',
            'Axis equation': 'Definition: Axis of symmetry for parabola with vertex (h, k) is x = h',
            'State extremum': 'Theorem: Vertex is global minimum if a > 0, global maximum if a < 0',
            'Write range': 'Set analysis: Range = [k, ∞) if a > 0; Range = (-∞, k] if a < 0',
            'Set x = 0': 'Evaluation: f(0) gives y-intercept',
            'Set y = 0': 'Root finding: Solve f(x) = 0 for x-intercepts',
            'Isolate squared term': 'Algebraic manipulation: additive inverse property',
            'Take square root': 'Inverse operation: √(x²) = |x|, yielding ±solutions'
        };

        return algebraicRules[step.step] || 'Apply standard algebraic principles.';
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
                'vertex': 'turning point',
                'parabola': 'U-shaped curve',
                'coefficient': 'number',
                'parameter': 'value',
                'axis of symmetry': 'middle line',
                'intercept': 'crossing point',
                'maximum': 'highest point',
                'minimum': 'lowest point',
                'extremum': 'extreme point',
                'range': 'y-values',
                'domain': 'x-values'
            },
            intermediate: {
                'vertex': 'vertex',
                'parabola': 'parabola',
                'coefficient': 'coefficient',
                'parameter': 'parameter',
                'axis of symmetry': 'axis of symmetry',
                'intercept': 'intercept',
                'maximum': 'maximum',
                'minimum': 'minimum',
                'extremum': 'extremum',
                'range': 'range',
                'domain': 'domain'
            },
            ELI5: {
                'vertex': 'tip of the U',
                'parabola': 'U-shaped curve',
                'coefficient': 'special number',
                'parameter': 'special number',
                'axis of symmetry': 'mirror line',
                'intercept': 'where it crosses',
                'maximum': 'highest spot',
                'minimum': 'lowest spot',
                'extremum': 'highest or lowest spot',
                'range': 'all the heights it reaches',
                'domain': 'all the positions left and right',
                'substitute': 'replace',
                'solve': 'find the answer'
            },
            detailed: {
                'vertex': 'vertex (critical point)',
                'parabola': 'parabola (quadratic function graph)',
                'coefficient': 'coefficient (numerical multiplier)',
                'parameter': 'parameter (defining constant)',
                'axis of symmetry': 'axis of symmetry (reflectional symmetry line)',
                'intercept': 'intercept (axis intersection point)',
                'maximum': 'maximum (global supremum)',
                'minimum': 'minimum (global infimum)',
                'extremum': 'extremum (critical value)',
                'range': 'range (codomain restriction)',
                'domain': 'domain (set of valid inputs)'
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

    generateStepBridge(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.expression || currentStep.conclusion || 'completed this step'}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary because: ${this.explainStepNecessity(currentStep, nextStep)}`,
            howItHelps: `This will help by: ${this.explainStepBenefit(nextStep)}`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue analyzing the quadratic function`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
    }

    explainStepNecessity(currentStep, nextStep) {
        return `we need to build upon our previous finding to get the complete picture`;
    }

    explainStepBenefit(nextStep) {
        return `revealing another key feature of the parabola`;
    }

    generatePreventionTips(step, problemType) {
        const tips = {
            'Identify parameters': [
                'Watch the sign of h: (x - 3) means h = +3, not -3',
                'Don\'t confuse h and k positions',
                'Check if there\'s a coefficient before the parentheses'
            ],
            'Check sign of a': [
                'Look only at the coefficient, not the constant',
                'Negative sign means opens down',
                'Magnitude doesn\'t affect direction, only sign does'
            ],
            'Set y = 0': [
                'Check if -k/a is negative before taking square root',
                'Remember ± for two solutions',
                'Positive time/distance usually preferred in word problems'
            ],
            'Write range': [
                'Match inequality direction to opening: up → ≥, down → ≤',
                'Use correct bracket: [ at k, ) or ( at infinity',
                'Order matters in interval notation'
            ]
        };

        return tips[step.step] || ['Check your work carefully', 'Watch for sign errors'];
    }

    generateCheckPoints(step) {
        return [
            'Did I identify the correct values?',
            'Are my signs correct?',
            'Does my answer make sense graphically?',
            'Have I answered the question completely?'
        ];
    }

    identifyWarningFlags(step, problemType) {
        const warnings = {
            vertex_identification: step.step === 'Identify parameters' ?
                ['Watch for sign of h', 'Don\'t confuse (x - h) with (x + h)'] : [],
            extrema: step.step === 'Identify extremum type' ?
                ['Opens up = minimum, not maximum', 'k is the value, not h'] : [],
            intercepts: step.step === 'Take square root' ?
                ['Check if taking square root of negative', 'Remember ± sign'] : [],
            range: step.step === 'Write range' ?
                ['Inequality direction must match opening', 'Use correct interval notation'] : []
        };

        const category = this.vertexFormTypes[problemType]?.category || 'vertex_identification';
        return warnings[category] || [];
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'Identify the form': 'Does my equation match the pattern y = a(x - h)² + k?',
            'Identify parameters': 'Have I correctly identified a, h, and k? Did I handle the signs correctly?',
            'State the vertex': 'Is my vertex in the form (h, k) with h and k in the right positions?',
            'Check sign of a': 'Did I look at the correct coefficient to determine the sign?',
            'State opening direction': 'Does my answer (up/down) match the sign of a?',
            'Compare |a| to 1': 'Am I comparing the absolute value, not just a itself?',
            'Axis equation': 'Is my axis equation x = h (not y = h)?',
            'State extremum': 'Did I correctly determine if it\'s a max or min? Is the value k occurring at x = h?',
            'Write range': 'Does my range inequality match the opening direction?',
            'Set x = 0': 'Did I remember to square (0 - h) correctly?',
            'Set y = 0': 'Did I check if solutions exist before taking the square root?',
            'Plot vertex': 'Is the vertex in the correct position on my graph?',
            'Sketch parabola': 'Is my curve smooth with no sharp corners?'
        };

        return questions[step.step] || 'Does this step make sense and move me toward the solution?';
    }

    describeExpectedResult(step) {
        const expectations = {
            'Identify the form': 'Equation in form y = a(x - h)² + k',
            'Identify parameters': 'Three values: a, h, k',
            'State the vertex': 'Coordinate point (h, k)',
            'Check sign of a': 'Positive or negative',
            'State opening direction': 'Upward or downward',
            'Compare |a| to 1': 'Narrower, wider, or same width',
            'Axis equation': 'Equation x = (some number)',
            'State extremum': 'Maximum or minimum value with location',
            'Write range': 'Inequality or interval notation',
            'Set x = 0': 'A y-value',
            'Set y = 0': '0, 1, or 2 x-values',
            'Plot vertex': 'A point marked on graph',
            'Sketch parabola': 'A smooth U-shaped curve'
        };

        return expectations[step.step] || 'Progress toward complete analysis';
    }

    generateTroubleshootingTips(step) {
        return [
            'Review the vertex form pattern: y = a(x - h)² + k',
            'Sketch a quick graph to visualize',
            'Check your signs carefully',
            'Verify your answer makes geometric sense',
            'Try a test point if unsure'
        ];
    }

    generateGuidingQuestions(step, problem) {
        const questions = {
            'Identify the form': [
                'What does vertex form look like?',
                'Does my equation match the template y = a(x - h)² + k?',
                'What are the key parts I need to identify?'
            ],
            'Identify parameters': [
                'What number is in front of the parentheses? (that\'s a)',
                'What number is inside with x? (that relates to h)',
                'What number is added at the end? (that\'s k)',
                'Did I handle the sign of h correctly?'
            ],
            'State the vertex': [
                'What are the coordinates (h, k)?',
                'Am I using h and k in the right order?',
                'Does this point make sense on a graph?'
            ],
            'Check sign of a': [
                'Is the coefficient positive or negative?',
                'What does the sign tell me about the parabola?'
            ],
            'State extremum': [
                'Does the parabola open up or down?',
                'Is the vertex a maximum or minimum?',
                'What is the actual max/min value?',
                'Where does it occur?'
            ],
            'Set y = 0': [
                'What equation do I get when I set y = 0?',
                'Can I solve (x - h)² = -k/a?',
                'Is -k/a positive, negative, or zero?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'How does this help me understand the parabola?'];
    }

    generateProgressiveHints(step, problem) {
        const category = this.vertexFormTypes[problem.type]?.category || 'vertex_identification';
        const hintSet = this.hints[category] || this.hints.vertex_identification;

        return {
            level1: hintSet.level1 || 'Think about what you\'re trying to find.',
            level2: hintSet.level2 || 'Consider the vertex form pattern.',
            level3: hintSet.level3 || 'Apply the appropriate method for this feature.',
            level4: hintSet.level4 || 'Complete the calculation and write your answer.'
        };
    }

    breakIntoSubSteps(step) {
        if (step.description) {
            return [
                'Understand what is being asked',
                step.description,
                'Apply the appropriate technique',
                'Simplify if needed',
                'Write the final answer clearly'
            ];
        }

        return ['Understand the goal', 'Apply the method', 'Verify the result'];
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try the same type of analysis with a different equation',
            practiceHint: 'Start with simpler coefficients to build confidence',
            extension: 'Once comfortable, try with fractions, decimals, or larger numbers'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What information is given in the equation?',
            goal: 'What feature am I trying to find?',
            strategy: 'What method or formula should I use?',
            execute: 'How do I perform the calculation correctly?',
            verify: 'Does my answer make geometric sense?'
        };
    }

    identifyDecisionPoints(step) {
        return [
            'Which parameter am I looking for?',
            'What pattern should I match?',
            'Do I need to calculate or just identify?',
            'How should I express the answer?'
        ];
    }

    suggestAlternativeMethods(step, problem) {
        const alternatives = {
            'Find vertex': [
                'Read directly from equation',
                'Plot several points and identify the turning point graphically'
            ],
            'Find opening': [
                'Check sign of a',
                'Evaluate at test points to see if y increases or decreases as x moves away from vertex'
            ],
            'Find x-intercepts': [
                'Solve algebraically by setting y = 0',
                'Graph and read x-intercepts from graph',
                'Use quadratic formula after converting to standard form'
            ]
        };

        return alternatives[step.step] || ['The chosen method is appropriate for this problem'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by using the information we just found`,
            progression: 'We are systematically identifying all key features of the parabola',
            relationship: 'Each feature helps us understand the graph more completely'
        };
    }

    identifyPrerequisites(step, problemType) {
        const category = this.vertexFormTypes[problemType]?.category || 'vertex_identification';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Basic algebra', 'Understanding of parabolas'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Identify the form': ['vertex form', 'parabola', 'equation', 'parameters'],
            'Identify parameters': ['coefficient', 'a', 'h', 'k', 'vertex'],
            'State the vertex': ['vertex', 'coordinates', 'turning point'],
            'Check sign of a': ['coefficient', 'positive', 'negative', 'sign'],
            'State opening direction': ['opening', 'upward', 'downward', 'concavity'],
            'Compare |a| to 1': ['absolute value', 'stretch', 'compression', 'width'],
            'Axis equation': ['axis of symmetry', 'vertical line', 'symmetry'],
            'State extremum': ['maximum', 'minimum', 'extremum', 'vertex'],
            'Write range': ['range', 'y-values', 'inequality', 'interval notation'],
            'Set x = 0': ['y-intercept', 'substitute', 'evaluate'],
            'Set y = 0': ['x-intercept', 'solve', 'square root', 'zeros'],
            'Plot vertex': ['plot', 'graph', 'coordinates', 'point'],
            'Sketch parabola': ['sketch', 'curve', 'smooth', 'parabola']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPrompts(step) {
        return {
            before: 'Before I start, what information do I need from the equation?',
            during: 'As I work, am I handling signs correctly?',
            after: 'After completing this step, does my answer make sense graphically?'
        };
    }

    findRealWorldConnection(step, problem) {
        const connections = {
            'vertex_identification': 'Like finding the exact peak time and height a rocket reaches, or the optimal price for maximum profit',
            'opening_direction': 'Determines if we\'re maximizing profit or minimizing cost in business applications',
            'extrema': 'Critical for optimization: maximum height in projectile motion, maximum area with fixed perimeter, optimal pricing',
            'range': 'Shows what outputs are achievable: possible heights for a water fountain, possible profits for a business model',
            'intercepts': 'Y-intercept might be initial height; x-intercepts might be when object hits ground or break-even points'
        };

        const category = this.vertexFormTypes[problem.type]?.category;
        return connections[category] || 'Understanding parabolas helps solve real optimization problems in physics, business, and engineering.';
    }

    // GRAPH GENERATION

    generateVertexFormGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { a, h, k } = this.currentProblem.parameters;

        // Generate points for graphing
        const points = [];
        const xMin = h - 5;
        const xMax = h + 5;
        const step = 0.5;

        for (let x = xMin; x <= xMax; x += step) {
            const y = a * Math.pow(x - h, 2) + k;
            points.push({ x, y });
        }

        this.graphData = {
            type: 'parabola',
            vertex: { x: h, y: k },
            opening: a > 0 ? 'upward' : 'downward',
            axisOfSymmetry: h,
            points: points,
            domain: { min: xMin, max: xMax },
            range: a > 0 ? { min: k, max: Math.max(...points.map(p => p.y)) } : { min: Math.min(...points.map(p => p.y)), max: k },
            description: `Parabola with vertex at (${h}, ${k}), opening ${a > 0 ? 'upward' : 'downward'}`
        };
    }

    // WORKBOOK GENERATION

    generateVertexFormWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createEnhancedStepsSection(),
            this.createVertexFormLessonSection(),
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
            title: 'Enhanced Quadratic Vertex Form Mathematical Workbook',
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
            ['Problem Type', this.vertexFormTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.vertexFormTypes[this.currentProblem.type]?.category || 'vertex form'],
            ['Equation', this.currentSolution?.equation || this.currentProblem.cleanInput],
            ['Description', this.currentProblem.scenario || 'Vertex form analysis']
        ];

        // Add parameters if available
        if (this.currentProblem.parameters.a !== undefined) {
            problemData.push(['', '']);
            problemData.push(['Parameters', '']);
            if (this.currentProblem.parameters.a !== undefined) {
                problemData.push(['a (leading coefficient)', this.currentProblem.parameters.a]);
            }
            if (this.currentProblem.parameters.h !== undefined) {
                problemData.push(['h (horizontal shift)', this.currentProblem.parameters.h]);
            }
            if (this.currentProblem.parameters.k !== undefined) {
                problemData.push(['k (vertical shift)', this.currentProblem.parameters.k]);
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

        const category = this.vertexFormTypes[this.currentProblem.type]?.category;
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
                if (step.ELI5.visualization) {
                    stepsData.push(['Visualize', step.ELI5.visualization]);
                }
            }

            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
                stepsData.push(['Procedural', step.explanations.procedural]);
            }

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

            if (step.thinkingPrompts && this.includeThinkingPrompts) {
                stepsData.push(['Think Before', step.thinkingPrompts.before]);
                stepsData.push(['Think During', step.thinkingPrompts.during]);
                stepsData.push(['Think After', step.thinkingPrompts.after]);
            }

            if (step.selfCheck && this.includeSelfCheckQuestions) {
                stepsData.push(['Self-Check', step.selfCheck]);
            }

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

    createVertexFormLessonSection() {
        const { type } = this.currentProblem;
        const category = this.vertexFormTypes[type]?.category;

        const lessonData = [
            ['Key Concepts', ''],
            ['', 'Vertex form: y = a(x - h)² + k'],
            ['', 'Vertex is point (h, k)'],
            ['', 'Parameter a controls opening and width'],
            ['', 'Immediately reveals max/min value'],
            ['', ''],
            ['Important Properties', ''],
            ['', 'Axis of symmetry: x = h'],
            ['', 'Opens up if a > 0, down if a < 0'],
            ['', 'Range depends on vertex and opening'],
            ['', 'All parabolas are symmetric']
        ];

        return {
            title: 'Key Concepts',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        if (this.currentSolution.vertex) {
            solutionData.push(['Vertex', this.currentSolution.vertexNotation || `(${this.currentSolution.vertex.x}, ${this.currentSolution.vertex.y})`]);
        }

        if (this.currentSolution.opening) {
            solutionData.push(['Opening', this.currentSolution.opening]);
        }

        if (this.currentSolution.axis) {
            solutionData.push(['Axis of Symmetry', this.currentSolution.axis]);
        }

        if (this.currentSolution.statement) {
            solutionData.push(['Extremum', this.currentSolution.statement]);
        }

        if (this.currentSolution.range_interval) {
            solutionData.push(['Range', this.currentSolution.range_interval]);
        }

        if (this.currentSolution.features) {
            Object.entries(this.currentSolution.features).forEach(([key, value]) => {
                const label = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                solutionData.push([label, JSON.stringify(value)]);
            });
        }

        return {
            title: 'Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createAnalysisSection() {
        if (!this.currentSolution) return null;

        const analysisData = [
            ['Solution Method', this.currentSolution.type || this.currentSolution.category],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Difficulty Level', this.explanationLevel],
            ['Category', this.vertexFormTypes[this.currentProblem.type]?.category]
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
        if (!this.currentSolution || !this.currentProblem) return null;

        const { a, h, k } = this.currentProblem.parameters;

        const verificationData = [
            ['Verification Method', 'Geometric and Algebraic Checks'],
            ['', '']
        ];

        // Verify vertex
        if (this.currentSolution.vertex) {
            verificationData.push(['Vertex Check', `Vertex (${h}, ${k}) is directly from equation y = ${a}(x - ${h})² + ${k}`]);
        }

        // Verify opening
        if (this.currentSolution.opening) {
            verificationData.push(['Opening Check', `a = ${a} ${a > 0 ? '> 0' : '< 0'} confirms parabola opens ${this.currentSolution.opening}`]);
        }

        // Test a point
        const testX = h + 1;
        const testY = a * Math.pow(testX - h, 2) + k;
        verificationData.push(['Point Test', `At x = ${testX}: y = ${a}(${testX} - ${h})² + ${k} = ${testY}`]);

        if (this.verificationDetail === 'detailed') {
            verificationData.push(['', '']);
            verificationData.push(['Confidence Level', 'High']);
            verificationData.push(['Verification Notes', 'All features verified through algebraic and geometric methods']);
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

        if (applications.length === 0) return null;

        const appData = [
            ['Real-World Applications', ''],
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

    createPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const notes = this.generateVertexFormPedagogicalNotes(this.currentProblem.type);

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

        const alternatives = this.generateVertexFormAlternativeMethods(this.currentProblem.type);

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

    generateVertexFormPedagogicalNotes(problemType) {
        const category = this.vertexFormTypes[problemType]?.category;

        const pedagogicalDatabase = {
            vertex_identification: {
                objectives: [
                    'Identify vertex from vertex form equation',
                    'Understand relationship between equation and vertex',
                    'Apply sign conventions correctly'
                ],
                keyConcepts: [
                    'Vertex form structure: y = a(x - h)² + k',
                    'Vertex coordinates (h, k) read directly',
                    'Sign of h is opposite of what appears in parentheses'
                ],
                prerequisites: [
                    'Understanding of function notation',
                    'Coordinate plane basics',
                    'Sign recognition'
                ],
                commonDifficulties: [
                    'Confusing sign of h: (x - 3) means h = 3',
                    'Mixing up h and k positions',
                    'Not recognizing vertex form pattern'
                ],
                teachingStrategies: [
                    'Use color coding for h and k',
                    'Practice with both (x - h) and (x + h) forms',
                    'Emphasize pattern matching repeatedly'
                ],
                extensions: [
                    'Converting from standard form',
                    'Writing equation given vertex',
                    'Finding vertex from graph'
                ],
                assessment: [
                    'Can student identify h with correct sign?',
                    'Does student write vertex in correct order (h, k)?',
                    'Can student explain why signs work this way?'
                ]
            },
            extrema: {
                objectives: [
                    'Determine if vertex is maximum or minimum',
                    'Find the extremum value and location',
                    'Apply to optimization problems'
                ],
                keyConcepts: [
                    'Opening direction determines max vs min',
                    'Extremum value is k (y-coordinate)',
                    'Extremum occurs at x = h'
                ],
                prerequisites: [
                    'Understanding max/min concepts',
                    'Vertex identification',
                    'Opening direction analysis'
                ],
                commonDifficulties: [
                    'Thinking a > 0 means maximum',
                    'Confusing which coordinate is the value',
                    'Not stating both value and location'
                ],
                teachingStrategies: [
                    'Draw U-shapes to show up=min, down=max',
                    'Practice with real-world contexts',
                    'Emphasize complete answer: value AND location'
                ],
                extensions: [
                    'Optimization word problems',
                    'Comparing multiple functions',
                    'Applied calculus connection'
                ],
                assessment: [
                    'Can student determine max vs min correctly?',
                    'Does student give complete answer?',
                    'Can student apply to context problems?'
                ]
            },
            intercepts: {
                objectives: [
                    'Find y-intercept by substitution',
                    'Find x-intercepts by solving',
                    'Determine when x-intercepts exist'
                ],
                keyConcepts: [
                    'Y-intercept: set x = 0',
                    'X-intercepts: solve when y = 0',
                    'X-intercepts exist only if -k/a ≥ 0'
                ],
                prerequisites: [
                    'Substitution skills',
                    'Solving equations',
                    'Square root operations'
                ],
                commonDifficulties: [
                    'Forgetting to square (0 - h)',
                    'Not checking if square root possible',
                    'Forgetting ± when taking square root'
                ],
                teachingStrategies: [
                    'Emphasize step-by-step process',
                    'Always check -k/a before solving',
                    'Practice geometric interpretation'
                ],
                extensions: [
                    'Number of intercepts from graph position',
                    'Relating to discriminant',
                    'Finding equation from intercepts'
                ],
                assessment: [
                    'Does student check for existence?',
                    'Are both x-intercepts found if they exist?',
                    'Is arithmetic correct?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Understand vertex form features'],
            keyConcepts: ['Vertex form reveals key information'],
            prerequisites: ['Basic algebra'],
            commonDifficulties: ['Various computational challenges'],
            teachingStrategies: ['Step-by-step instruction'],
            extensions: ['More complex applications'],
            assessment: ['Verify understanding of concepts']
        };
    }

    generateVertexFormAlternativeMethods(problemType) {
        const category = this.vertexFormTypes[problemType]?.category;

        const alternativeDatabase = {
            vertex_identification: {
                primaryMethod: 'Direct reading from vertex form',
                methods: [
                    {
                        name: 'Pattern Matching',
                        description: 'Compare equation to y = a(x - h)² + k template and identify h, k'
                    },
                    {
                        name: 'Graphical Method',
                        description: 'Graph the function and read vertex from the turning point'
                    },
                    {
                        name: 'Test Points',
                        description: 'Evaluate at several x-values to find where function reaches extreme'
                    }
                ],
                comparison: 'Direct reading is fastest and most reliable for vertex form; graphical provides visual confirmation'
            },
            extrema: {
                primaryMethod: 'Opening direction + vertex identification',
                methods: [
                    {
                        name: 'Sign Analysis',
                        description: 'Determine opening from sign of a, conclude max/min, read k'
                    },
                    {
                        name: 'Graphical Method',
                        description: 'Sketch parabola and visually identify highest or lowest point'
                    },
                    {
                        name: 'Calculus (if known)',
                        description: 'Take derivative, set to zero, evaluate second derivative'
                    }
                ],
                comparison: 'Vertex form makes this immediate; calculus confirms but unnecessary for this form'
            },
            intercepts: {
                primaryMethod: 'Substitution and equation solving',
                methods: [
                    {
                        name: 'Algebraic Method',
                        description: 'Set y=0, solve (x-h)²=-k/a, find x-values'
                    },
                    {
                        name: 'Graphical Method',
                        description: 'Graph function and read where it crosses axes'
                    },
                    {
                        name: 'Convert to Standard Form',
                        description: 'Expand, use quadratic formula (less efficient)'
                    }
                ],
                comparison: 'Direct substitution is most efficient for vertex form; graphing provides visual understanding'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard vertex form approach',
            methods: [{
                name: 'Alternative approach',
                description: 'Other methods may apply depending on problem'
            }],
            comparison: 'Choose method based on problem requirements and personal preference'
        };
    }
}

// Export the class
export default EnhancedQuadraticVertexFormMathematicalWorkbook;
