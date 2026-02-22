Here is the complete graphs mathematical workbook code:
// Enhanced Graphs Workbook - Comprehensive Graphs System
import { createCanvas, loadImage } from '@napi-rs/canvas';
import { MathematicsSvgDiagrams } from '../svg-data.js';
import { MathematicsDiagramsRegistry } from '../registry.js';
import { MathematicsDiagramsRenderer } from '../renderer.js';
import * as math from 'mathjs';

export class EnhancedGraphsWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "graphs";
        this.cellWidth = 200;
        this.cellHeight = 28;
        this.headerHeight = 35;
        this.contentHeight = 40;
        this.rowLabelWidth = 60;
        this.fontSize = 12;
        this.contentFontSize = 14;

        this.currentProblem = null;
        this.currentContent = null;
        this.contentSteps = [];
        this.currentWorkbook = null;
        this.diagramRenderer = new MathematicsDiagramsRenderer();
        this.includeDiagramsInWorkbook = options.includeDiagrams !== false;
        this.diagramWidth = options.diagramWidth || 800;
        this.diagramHeight = options.diagramHeight || 600;
        this.renderedDiagrams = new Map();
        this.diagramsPromise = null;
        this.currentPractical = null;

        this.explanationLevel = options.explanationLevel || 'intermediate';
        this.includeVisualizations = options.includeVisualizations !== false;
        this.includeConceptualConnections = options.includeConceptualConnections !== false;
        this.includeExamples = options.includeExamples !== false;
        this.includeComparisons = options.includeComparisons !== false;
        this.includeCommonMisconceptions = options.includeCommonMisconceptions !== false;
        this.includePedagogicalNotes = options.includePedagogicalNotes !== false;
        this.includePracticals = options.includePracticals !== false;
        this.detailLevel = options.detailLevel || 'detailed';

        this.adaptiveDifficulty = options.adaptiveDifficulty !== false;
        this.metacognitiveSupport = options.metacognitiveSupport !== false;
        this.contextualLearning = options.contextualLearning !== false;
        this.assessmentFeedback = options.assessmentFeedback !== false;

        this.learnerProfile = {
            currentLevel: 'intermediate',
            masteredTopics: [],
            strugglingTopics: [],
            preferredLearningStyle: 'visual',
            progressHistory: []
        };

        this.mathematicsSymbols = this.initializeMathematicsSymbols();
        this.setThemeColors();
        this.initializeGraphsTopics();
        this.initializeGraphsLessons();
        this.initializeMathematicsPracticals();
        this.initializeMisconceptionDatabase();
        this.initializeMetacognitivePrompts();
        this.initializeContextualScenarios();
        this.initializeAssessmentRubrics();
    }

    setThemeColors() {
        const themes = {
            graphs: {
                background: '#ffffff',
                gridColor: '#b0c4de',
                headerBg: '#0d3b66',
                headerText: '#ffffff',
                sectionBg: '#d0e4f7',
                sectionText: '#0d3b66',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#e8f4fd',
                resultText: '#1565c0',
                definitionBg: '#fff8e1',
                definitionText: '#e65100',
                stepBg: '#e8eaf6',
                stepText: '#311b92',
                borderColor: '#4a90d9',
                contentBg: '#f3f8fe',
                contentText: '#0d3b66',
                diagramBg: '#e3f2fd',
                structureBg: '#e0f7fa',
                practicalBg: '#fff9c4',
                practicalText: '#f57f17',
                cartesianBg: '#e8f5e9',
                plottingBg: '#f3e5f5',
                gradientBg: '#fff8e1',
                linearBg: '#e3f2fd',
                exponentialBg: '#fce4ec',
                quadraticBg: '#f1f8e9',
                inequalityBg: '#fff3e0',
                interpretationBg: '#e0f2f1'
            },
            algebra: {
                background: '#fafafa',
                gridColor: '#9e9e9e',
                headerBg: '#4a148c',
                headerText: '#ffffff',
                sectionBg: '#e1bee7',
                sectionText: '#4a148c',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#f3e5f5',
                resultText: '#6a1b9a',
                definitionBg: '#fff8e1',
                definitionText: '#f57f17',
                stepBg: '#f1f8e9',
                stepText: '#33691e',
                borderColor: '#ab47bc',
                contentBg: '#e8eaf6',
                contentText: '#1a237e',
                diagramBg: '#fce4ec',
                structureBg: '#e8f5e9',
                practicalBg: '#fffde7',
                practicalText: '#f57f17',
                cartesianBg: '#e8f5e9',
                plottingBg: '#f3e5f5',
                gradientBg: '#fff8e1',
                linearBg: '#e3f2fd',
                exponentialBg: '#fce4ec',
                quadraticBg: '#f1f8e9',
                inequalityBg: '#fff3e0',
                interpretationBg: '#e0f2f1'
            }
        };

        this.colors = themes[this.theme] || themes.graphs;
    }

    initializeMathematicsSymbols() {
        return {
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'sigma': 'Σ', 'phi': 'φ',
            'arrow': '→', 'doubleArrow': '↔', 'implies': '⟹', 'iff': '⟺',
            'plus': '+', 'minus': '−', 'plusminus': '±', 'times': '×',
            'divide': '÷', 'approximately': '≈', 'notEqual': '≠',
            'leq': '≤', 'geq': '≥', 'infinity': '∞', 'sqrt': '√',
            'squared': '²', 'cubed': '³', 'superscript4': '⁴',
            'subscript0': '₀', 'subscript1': '₁', 'subscript2': '₂',
            'dot': '·', 'degree': '°', 'therefore': '∴', 'because': '∵',
            'forAll': '∀', 'exists': '∃', 'element': '∈', 'subset': '⊂',
            'union': '∪', 'intersection': '∩', 'emptySet': '∅',
            'integer': 'ℤ', 'rational': 'ℚ', 'real': 'ℝ',
            'complex': 'ℂ', 'natural': 'ℕ',
            'gradient': 'm', 'yIntercept': 'c', 'xAxis': 'x',
            'yAxis': 'y', 'origin': 'O', 'slope': '∆y/∆x',
            'function': 'f(x)', 'inverse': 'f⁻¹(x)',
            'asymptote': '→', 'vertex': 'V', 'focus': 'F',
            'discriminant': 'b²−4ac', 'riseOverRun': 'rise/run'
        };
    }

    initializeGraphsTopics() {
        this.mathematicsTopics = {
            cartesian_plane: {
                patterns: [
                    /cartesian.?plane|coordinate.?plane/i,
                    /x.?axis|y.?axis|origin/i,
                    /quadrant|ordered.?pair/i,
                    /coordinate.?system|rectangular.?coordinate/i
                ],
                handler: this.handleCartesianPlane.bind(this),
                name: 'Cartesian Plane',
                category: 'graphs',
                description: 'Understanding the two-dimensional coordinate system with x and y axes',
                difficulty: 'beginner',
                prerequisites: ['number_line', 'integers', 'directed_numbers']
            },

            plotting_points: {
                patterns: [
                    /plot.?point|plotting.?point/i,
                    /coordinate|ordered.?pair/i,
                    /locate.?point|mark.?point/i,
                    /\(\s*-?\d+\s*,\s*-?\d+\s*\)/
                ],
                handler: this.handlePlottingPoints.bind(this),
                name: 'Plotting Points',
                category: 'graphs',
                description: 'Locating and plotting ordered pairs (x, y) on the Cartesian plane',
                difficulty: 'beginner',
                prerequisites: ['cartesian_plane', 'integers', 'directed_numbers']
            },

            gradient: {
                patterns: [
                    /gradient|slope/i,
                    /rise.?over.?run|rise\/run/i,
                    /steepness|inclination/i,
                    /rate.?of.?change/i,
                    /\∆y\/\∆x|dy\/dx/i
                ],
                handler: this.handleGradient.bind(this),
                name: 'Gradient (Slope)',
                category: 'graphs',
                description: 'Calculating and interpreting the gradient (steepness) of a line',
                difficulty: 'beginner',
                prerequisites: ['plotting_points', 'cartesian_plane', 'fractions']
            },

            linear_graphs: {
                patterns: [
                    /linear.?graph|straight.?line/i,
                    /y\s*=\s*mx\s*\+\s*c|slope.?intercept/i,
                    /line.?equation|equation.?line/i,
                    /x.?intercept|y.?intercept/i
                ],
                handler: this.handleLinearGraphs.bind(this),
                name: 'Linear Graphs',
                category: 'graphs',
                description: 'Drawing and interpreting straight-line graphs of the form y = mx + c',
                difficulty: 'intermediate',
                prerequisites: ['gradient', 'plotting_points', 'substitution']
            },

            exponential_graphs: {
                patterns: [
                    /exponential.?graph|exponential.?function/i,
                    /y\s*=\s*a\s*\^\s*x|growth.?decay/i,
                    /exponential.?growth|exponential.?decay/i,
                    /asymptote|base.?function/i
                ],
                handler: this.handleExponentialGraphs.bind(this),
                name: 'Exponential Graphs',
                category: 'graphs',
                description: 'Drawing and interpreting graphs of exponential functions y = aˣ',
                difficulty: 'intermediate',
                prerequisites: ['linear_graphs', 'indices', 'substitution']
            },

            quadratic_graphs: {
                patterns: [
                    /quadratic.?graph|parabola/i,
                    /y\s*=\s*ax²|y\s*=\s*x²/i,
                    /turning.?point|vertex.?parabola/i,
                    /quadratic.?function|u.?shaped/i
                ],
                handler: this.handleQuadraticGraphs.bind(this),
                name: 'Quadratic Graphs',
                category: 'graphs',
                description: 'Drawing and interpreting parabolas of the form y = ax² + bx + c',
                difficulty: 'intermediate',
                prerequisites: ['linear_graphs', 'quadratic_expressions', 'substitution']
            },

            inequality_regions: {
                patterns: [
                    /inequality.?region|region.?inequality/i,
                    /shade.?region|shading.?inequality/i,
                    /y\s*[<>≤≥]|x\s*[<>≤≥]/i,
                    /linear.?inequality|graph.?inequality/i
                ],
                handler: this.handleInequalityRegions.bind(this),
                name: 'Inequality Regions',
                category: 'graphs',
                description: 'Representing and interpreting inequalities as shaded regions on the Cartesian plane',
                difficulty: 'intermediate',
                prerequisites: ['linear_graphs', 'inequalities', 'number_line']
            },

            graph_interpretation: {
                patterns: [
                    /graph.?interpret|interpret.?graph/i,
                    /read.?graph|analyse.?graph/i,
                    /real.?life.?graph|distance.?time/i,
                    /speed.?time|travel.?graph/i
                ],
                handler: this.handleGraphInterpretation.bind(this),
                name: 'Graph Interpretation',
                category: 'graphs',
                description: 'Reading and interpreting real-life graphs including distance-time and speed-time graphs',
                difficulty: 'intermediate',
                prerequisites: ['linear_graphs', 'gradient', 'quadratic_graphs']
            }
        };
    }

    initializeGraphsLessons() {
        this.lessons = {
            cartesian_plane: {
                title: "The Cartesian Plane: A Universal Map for Mathematics",
                concepts: [
                    "The Cartesian plane is formed by two perpendicular number lines: the horizontal x-axis and vertical y-axis",
                    "The point where axes intersect is called the origin, with coordinates (0, 0)",
                    "The plane is divided into four quadrants numbered I, II, III, IV anticlockwise from top-right",
                    "Every point in the plane is uniquely identified by an ordered pair (x, y)",
                    "The x-coordinate (abscissa) measures horizontal distance from the y-axis",
                    "The y-coordinate (ordinate) measures vertical distance from the x-axis"
                ],
                theory: "The Cartesian coordinate system, invented by René Descartes in the 17th century, unified algebra and geometry for the first time. It allows any geometric shape to be described by an equation and any equation to be visualised as a shape — a profound connection that underpins all of modern mathematics, science, and engineering.",
                keyDefinitions: {
                    "Cartesian Plane": "A two-dimensional surface defined by two perpendicular number lines (axes) intersecting at the origin",
                    "Origin": "The point (0, 0) where the x-axis and y-axis intersect",
                    "x-axis": "The horizontal number line; positive values extend right, negative values extend left",
                    "y-axis": "The vertical number line; positive values extend upward, negative values extend downward",
                    "Ordered Pair": "A pair of numbers (x, y) specifying the position of a point; order is critical: (3, 5) ≠ (5, 3)",
                    "Quadrant": "One of four regions of the Cartesian plane formed by the two axes",
                    "Abscissa": "The x-coordinate of a point; its horizontal position",
                    "Ordinate": "The y-coordinate of a point; its vertical position",
                    "Coordinates": "The numbers in an ordered pair that locate a point on the plane"
                },
                quadrantProperties: {
                    quadrantI: { xSign: "positive (+)", ySign: "positive (+)", example: "(3, 5)" },
                    quadrantII: { xSign: "negative (−)", ySign: "positive (+)", example: "(−3, 5)" },
                    quadrantIII: { xSign: "negative (−)", ySign: "negative (−)", example: "(−3, −5)" },
                    quadrantIV: { xSign: "positive (+)", ySign: "negative (−)", example: "(3, −5)" }
                },
                axisPoints: {
                    onXAxis: "Points on x-axis have y = 0: e.g., (4, 0), (−2, 0)",
                    onYAxis: "Points on y-axis have x = 0: e.g., (0, 3), (0, −7)",
                    origin: "The origin (0, 0) lies on both axes simultaneously"
                },
                scalingAndGrids: {
                    uniform: "Each axis should use uniform scale; intervals must be equal",
                    labelling: "Label axes with variable names (x, y) and mark regular scale values",
                    choosingScale: "Choose scale so all required points fit clearly on the grid",
                    negativeAxes: "Always extend axes to show negative regions unless problem specifies otherwise"
                },
                historicalContext: {
                    inventor: "René Descartes (1596–1650)",
                    year: "1637",
                    work: "La Géométrie, an appendix to Discourse on the Method",
                    significance: "First unified algebra and geometry; made it possible to solve geometric problems algebraically and vice versa",
                    legend: "According to legend, Descartes was inspired by watching a fly on his ceiling, wondering how to describe its position mathematically",
                    impact: "Enabled Newton and Leibniz to develop calculus; forms the basis of computer graphics, GPS, and engineering drawing"
                },
                workedExamples: [
                    {
                        task: "Identify the coordinates of points A(3, 4), B(−2, 5), C(−4, −3), D(5, −1)",
                        solution: "A(3,4): Quadrant I; B(−2,5): Quadrant II; C(−4,−3): Quadrant III; D(5,−1): Quadrant IV"
                    },
                    {
                        task: "Which quadrant contains the point (−7, 2)?",
                        solution: "x = −7 (negative), y = 2 (positive) → Quadrant II"
                    },
                    {
                        task: "A point lies on the x-axis at distance 6 units to the left of origin. State its coordinates.",
                        solution: "On x-axis: y = 0. Left of origin: x = −6. Point: (−6, 0)"
                    }
                ],
                applications: [
                    "Computer graphics and video game design: every pixel has Cartesian coordinates",
                    "GPS and mapping: latitude and longitude as a Cartesian-like system",
                    "Architecture and engineering drawings: precise positioning of structural elements",
                    "Data visualization: all charts and graphs use Cartesian coordinates",
                    "Robotics: robot arm positioning in Cartesian coordinate space"
                ]
            },

            plotting_points: {
                title: "Plotting Points: Translating Numbers into Positions",
                concepts: [
                    "Each ordered pair (x, y) corresponds to exactly one point on the Cartesian plane",
                    "To plot (x, y): start at origin, move x units horizontally, then y units vertically",
                    "Positive x moves right; negative x moves left",
                    "Positive y moves up; negative y moves down",
                    "A set of plotted points may reveal a pattern, line, or curve"
                ],
                theory: "Plotting points is the bridge between algebraic expressions and their geometric representations. By plotting multiple points that satisfy an equation, we can draw the graph of that equation and see its behaviour visually — an insight impossible from the equation alone.",
                plottingProcedure: {
                    steps: [
                        "Step 1: Locate the origin (0, 0)",
                        "Step 2: Read the x-coordinate and move that many units horizontally from the origin (right if positive, left if negative)",
                        "Step 3: From that horizontal position, move the y-coordinate units vertically (up if positive, down if negative)",
                        "Step 4: Mark the point with a dot and label it with its coordinates",
                        "Step 5: Double-check by counting grid squares back to origin"
                    ]
                },
                tableOfValues: {
                    purpose: "A table of values systematically generates coordinate pairs for drawing graphs",
                    method: "Choose x values, substitute into equation, calculate y, record (x, y) pairs",
                    example: {
                        equation: "y = 2x + 1",
                        table: [
                            ["x", "−2", "−1", "0", "1", "2"],
                            ["y = 2x+1", "−3", "−1", "1", "3", "5"],
                            ["(x, y)", "(−2,−3)", "(−1,−1)", "(0,1)", "(1,3)", "(2,5)"]
                        ]
                    }
                },
                workedExamples: [
                    {
                        task: "Plot the points P(2, 3), Q(−4, 1), R(0, −5), S(−3, −2), T(4, 0)",
                        solution: "P: move right 2, up 3. Q: move left 4, up 1. R: on y-axis, down 5. S: left 3, down 2. T: right 4, on x-axis",
                        note: "R lies on the y-axis; T lies on the x-axis"
                    },
                    {
                        task: "A graph passes through (0, 3) and (4, 0). Plot both points and join them.",
                        solution: "(0,3): y-intercept, 3 units above origin. (4,0): x-intercept, 4 units right of origin. Join with straight line."
                    }
                ],
                readingCoordinates: {
                    fromGraph: "To read coordinates: draw vertical line from point to x-axis (read x), then horizontal line from point to y-axis (read y)",
                    precision: "For non-integer coordinates, estimate the decimal value from the scale"
                },
                applications: [
                    "Scatter graphs: plotting experimental data as points to identify trends",
                    "Statistical charts: bar charts and histograms use plotted heights",
                    "Navigation: waypoints are plotted as coordinate pairs on maps",
                    "Computer animation: key frame positions plotted as coordinate pairs"
                ]
            },

            gradient: {
                title: "Gradient: Measuring the Steepness and Direction of Change",
                concepts: [
                    "Gradient measures how steeply a line rises or falls",
                    "Gradient = rise ÷ run = change in y ÷ change in x = Δy/Δx",
                    "Positive gradient: line slopes upward from left to right",
                    "Negative gradient: line slopes downward from left to right",
                    "Zero gradient: horizontal line (no vertical change)",
                    "Undefined gradient: vertical line (no horizontal change)",
                    "Larger magnitude of gradient means steeper line"
                ],
                theory: "Gradient is one of the most powerful concepts in mathematics because it quantifies rate of change — the fundamental idea behind calculus, physics, economics, and data science. The gradient of a straight line is constant throughout; the gradient of a curve varies and is found by calculus.",
                keyDefinitions: {
                    "Gradient": "The ratio of vertical change to horizontal change between two points on a line; also called slope",
                    "Rise": "The vertical change (Δy = y₂ − y₁) between two points",
                    "Run": "The horizontal change (Δx = x₂ − x₁) between two points",
                    "Positive Gradient": "Line rises from left to right; y increases as x increases",
                    "Negative Gradient": "Line falls from left to right; y decreases as x increases",
                    "Zero Gradient": "Horizontal line; y stays constant as x changes",
                    "Undefined Gradient": "Vertical line; x stays constant — division by zero occurs in Δy/Δx"
                },
                gradientFormula: {
                    formula: "m = (y₂ − y₁) / (x₂ − x₁)",
                    variables: "where (x₁, y₁) and (x₂, y₂) are any two points on the line",
                    riseOverRun: "m = rise / run = Δy / Δx",
                    fromGraph: "Count vertical squares (rise) then horizontal squares (run) between two clear grid points"
                },
                gradientTypes: {
                    steepPositive: "m > 1: steeper than 45°; line rises sharply",
                    gentle_positive: "0 < m < 1: shallower than 45°; line rises gently",
                    zero: "m = 0: horizontal line y = k",
                    gentle_negative: "−1 < m < 0: line falls gently",
                    steep_negative: "m < −1: line falls sharply",
                    undefined: "m undefined: vertical line x = k"
                },
                parallelAndPerpendicular: {
                    parallel: "Parallel lines have equal gradients: m₁ = m₂",
                    perpendicular: "Perpendicular lines have gradients whose product is −1: m₁ × m₂ = −1, or m₂ = −1/m₁",
                    example: "Line with m = 3; perpendicular line has m = −1/3"
                },
                workedExamples: [
                    {
                        task: "Find the gradient of the line through (1, 2) and (5, 10)",
                        solution: "m = (10 − 2)/(5 − 1) = 8/4 = 2. Positive gradient; line rises steeply."
                    },
                    {
                        task: "Find the gradient of the line through (3, 7) and (8, 2)",
                        solution: "m = (2 − 7)/(8 − 3) = −5/5 = −1. Negative gradient; line falls at 45°."
                    },
                    {
                        task: "A line has gradient 3. What is the gradient of a perpendicular line?",
                        solution: "m_perp = −1/3"
                    },
                    {
                        task: "From a graph, a line passes through (0, 1) and (4, 9). Find the gradient.",
                        solution: "rise = 9 − 1 = 8; run = 4 − 0 = 4; m = 8/4 = 2"
                    }
                ],
                realWorldMeaning: {
                    distanceTime: "Gradient on a distance-time graph = speed (distance per unit time)",
                    costRevenue: "Gradient on a cost-revenue graph = rate of cost/profit per unit",
                    temperature: "Gradient on a temperature-time graph = rate of heating or cooling",
                    hillRoads: "Road gradient expressed as percentage: 10% means rise of 10 m per 100 m run"
                },
                applications: [
                    "Engineering: calculating road, roof, and ramp gradients for safety standards",
                    "Physics: velocity as gradient of displacement-time graph",
                    "Economics: marginal cost as gradient of total cost curve",
                    "Geography: gradient of river bed determines water flow speed",
                    "Machine learning: gradient descent algorithm uses gradients to minimize error"
                ]
            },

            linear_graphs: {
                title: "Linear Graphs: Visualising Straight-Line Relationships",
                concepts: [
                    "A linear graph is a straight line representing the equation y = mx + c",
                    "m is the gradient (slope): controls steepness and direction",
                    "c is the y-intercept: where the line crosses the y-axis",
                    "Every point on the line satisfies the equation y = mx + c",
                    "Two points uniquely determine a straight line",
                    "The x-intercept is found by setting y = 0 and solving for x",
                    "Parallel lines have the same gradient; perpendicular lines have gradients multiplying to −1"
                ],
                theory: "Linear equations are the simplest and most widely used mathematical models. They describe any relationship where one quantity changes at a constant rate relative to another — from phone tariffs and taxi fares to temperature conversion and supply/demand in economics.",
                keyDefinitions: {
                    "Linear Equation": "An equation whose graph is a straight line; highest power of x is 1",
                    "y = mx + c": "Standard form of a linear equation; m = gradient, c = y-intercept",
                    "Gradient (m)": "Rate of change; rise per unit run; determines steepness and direction",
                    "y-intercept (c)": "Value of y when x = 0; where line crosses the y-axis",
                    "x-intercept": "Value of x when y = 0; where line crosses the x-axis",
                    "General Form": "ax + by = c; useful when line passes through awkward fractional intercepts",
                    "Collinear Points": "Three or more points lying on the same straight line"
                },
                drawingMethods: {
                    method1_tableOfValues: {
                        steps: [
                            "Choose at least 3 x-values spanning the graph range",
                            "Substitute each into y = mx + c to find y",
                            "Plot each (x, y) point",
                            "Join with a straight line extending beyond plotted points",
                            "Label the line with its equation"
                        ],
                        example: {
                            equation: "y = 2x − 1",
                            table: [["x", "−1", "0", "1", "2", "3"], ["y", "−3", "−1", "1", "3", "5"]]
                        }
                    },
                    method2_gradientIntercept: {
                        steps: [
                            "Plot the y-intercept (0, c) directly",
                            "From that point, apply the gradient: move 1 unit right, m units up/down",
                            "Plot the second point",
                            "Join the two points with a straight line",
                            "Extend and label"
                        ],
                        example: "y = 3x + 2: plot (0, 2); from there move right 1, up 3 to (1, 5); draw line"
                    },
                    method3_intercepts: {
                        steps: [
                            "Set x = 0 to find y-intercept: (0, c)",
                            "Set y = 0 to find x-intercept: solve mx + c = 0 → x = −c/m",
                            "Plot both intercepts",
                            "Join and extend"
                        ],
                        example: "2x + 3y = 12: y-intercept (0, 4); x-intercept (6, 0)"
                    }
                },
                specialLines: {
                    horizontal: "y = k: horizontal line with gradient 0, y-intercept k",
                    vertical: "x = k: vertical line with undefined gradient, x-intercept k",
                    throughOrigin: "y = mx: passes through origin (0, 0); c = 0",
                    yAxis: "x = 0 is the y-axis",
                    xAxis: "y = 0 is the x-axis"
                },
                findingEquation: {
                    from_m_and_point: "Use y − y₁ = m(x − x₁); rearrange to y = mx + c form",
                    from_two_points: "Calculate m = (y₂−y₁)/(x₂−x₁); substitute one point to find c",
                    from_graph: "Read y-intercept directly; calculate gradient from two clear points",
                    example: {
                        task: "Find equation through (2, 5) and (4, 11)",
                        step1: "m = (11−5)/(4−2) = 6/2 = 3",
                        step2: "y − 5 = 3(x − 2) → y = 3x − 1",
                        check: "At (4,11): y = 3(4)−1 = 11 ✓"
                    }
                },
                simultaneousGraphically: {
                    method: "Draw both lines on the same axes; the intersection point is the solution",
                    example: "y = 2x + 1 and y = −x + 7 intersect at (2, 5); solution: x = 2, y = 5"
                },
                workedExamples: [
                    {
                        task: "Draw y = −2x + 4 on a grid from x = −1 to x = 4",
                        solution: "y-intercept: (0, 4). Gradient −2: from (0,4) right 1, down 2 to (1,2). Points: (−1,6),(0,4),(1,2),(2,0),(3,−2),(4,−4)"
                    },
                    {
                        task: "Find the equation of the line with gradient 4 passing through (1, 7)",
                        solution: "y − 7 = 4(x − 1) → y = 4x + 3"
                    }
                ],
                applications: [
                    "Mobile phone tariffs: y = cost, x = minutes; flat rate + per-minute charge",
                    "Temperature conversion: C = 5/9(F − 32) is a linear equation",
                    "Taxi fares: total fare = fixed charge + charge per km",
                    "Depreciation: asset value decreases linearly with time",
                    "Currency exchange: straight-line graph through the origin"
                ]
            },

            exponential_graphs: {
                title: "Exponential Graphs: The Mathematics of Growth and Decay",
                concepts: [
                    "Exponential functions have the form y = aˣ where a > 0 and a ≠ 1",
                    "If a > 1: exponential growth — y increases rapidly as x increases",
                    "If 0 < a < 1: exponential decay — y decreases toward zero as x increases",
                    "The y-intercept is always (0, 1) for y = aˣ since a⁰ = 1",
                    "The x-axis (y = 0) is a horizontal asymptote — the curve approaches but never touches it",
                    "Exponential graphs are never negative (y > 0 always)",
                    "The graph passes through (1, a)"
                ],
                theory: "Exponential functions model the most important natural processes: population growth, radioactive decay, compound interest, bacterial growth, and viral spread. Their defining property — that the rate of growth is proportional to the current value — makes them fundamentally different from linear or quadratic growth.",
                keyDefinitions: {
                    "Exponential Function": "A function of the form y = aˣ where the variable is in the exponent",
                    "Base (a)": "The constant being raised to a power; determines growth or decay",
                    "Exponential Growth": "Rapid increase; occurs when base a > 1; y increases without bound as x → ∞",
                    "Exponential Decay": "Decrease towards zero; occurs when 0 < a < 1; y approaches 0 as x → ∞",
                    "Asymptote": "A line that a graph approaches infinitely closely but never reaches",
                    "Horizontal Asymptote": "For y = aˣ, the x-axis (y = 0) is a horizontal asymptote",
                    "Natural Exponential": "y = eˣ where e ≈ 2.718; the most important base in mathematics and science",
                    "Doubling Time": "Time taken for an exponentially growing quantity to double in size"
                },
                graphFeatures: {
                    yIntercept: "(0, 1) for all y = aˣ since a⁰ = 1",
                    passesThroughOneA: "(1, a) always lies on the graph",
                    domain: "All real numbers: x ∈ ℝ (any x value is valid)",
                    range: "y > 0: the graph is always above the x-axis",
                    asymptote: "y = 0 (x-axis) is the horizontal asymptote for all y = aˣ",
                    increasing: "If a > 1, graph is always increasing (growth)",
                    decreasing: "If 0 < a < 1, graph is always decreasing (decay)"
                },
                tableOfValues: {
                    growth_example: {
                        equation: "y = 2ˣ",
                        table: [
                            ["x", "−3", "−2", "−1", "0", "1", "2", "3"],
                            ["y = 2ˣ", "1/8", "1/4", "1/2", "1", "2", "4", "8"]
                        ],
                        observation: "y doubles for every 1-unit increase in x"
                    },
                    decay_example: {
                        equation: "y = (1/2)ˣ",
                        table: [
                            ["x", "−3", "−2", "−1", "0", "1", "2", "3"],
                            ["y = (1/2)ˣ", "8", "4", "2", "1", "1/2", "1/4", "1/8"]
                        ],
                        observation: "y halves for every 1-unit increase in x"
                    }
                },
                compoundGrowthDecay: {
                    formula: "y = P(1 ± r)ᵗ where P = initial value, r = rate, t = time",
                    growth: "y = P(1 + r)ᵗ: compound interest, population growth",
                    decay: "y = P(1 − r)ᵗ: depreciation, radioactive decay, drug concentration",
                    example: "£1000 invested at 5% per year for t years: y = 1000(1.05)ᵗ"
                },
                comparisonWithLinear: {
                    linear: "Constant absolute change per unit time (adding same amount)",
                    exponential: "Constant percentage change per unit time (multiplying by same factor)",
                    crossover: "Exponential growth always eventually exceeds linear growth, however slowly it starts"
                },
                workedExamples: [
                    {
                        task: "Draw y = 3ˣ for x from −2 to 3",
                        solution: "Table: (−2, 1/9), (−1, 1/3), (0, 1), (1, 3), (2, 9), (3, 27). Rapid increase; asymptote y = 0"
                    },
                    {
                        task: "A bacteria population doubles every hour. Starting from 500, model after t hours.",
                        solution: "P = 500 × 2ᵗ. After 5 hours: P = 500 × 32 = 16,000"
                    }
                ],
                applications: [
                    "Finance: compound interest calculations for savings and loans",
                    "Medicine: drug dosage — concentration follows exponential decay in the body",
                    "Nuclear physics: radioactive half-life decay follows y = N₀(0.5)^(t/T½)",
                    "Epidemiology: early-stage disease spread is exponential",
                    "Technology: Moore's Law — transistor count doubles every ~2 years"
                ]
            },

            quadratic_graphs: {
                title: "Quadratic Graphs: Parabolas and the Mathematics of Curves",
                concepts: [
                    "A quadratic graph has equation y = ax² + bx + c and forms a parabola",
                    "If a > 0, the parabola opens upward (U-shape); if a < 0, it opens downward (∩-shape)",
                    "The vertex is the turning point — minimum if a > 0, maximum if a < 0",
                    "The axis of symmetry is a vertical line through the vertex: x = −b/(2a)",
                    "The y-intercept is the value c (set x = 0)",
                    "x-intercepts (roots) are found by solving ax² + bx + c = 0",
                    "The discriminant b² − 4ac determines the number of x-intercepts"
                ],
                theory: "Parabolas are the paths of projectiles, the shapes of satellite dishes and car headlight reflectors, the cross-sections of suspension bridges, and the graphs of profit functions in economics. Their mathematical properties — particularly the focus-directrix relationship — make them practically indispensable in optics, engineering, and physics.",
                keyDefinitions: {
                    "Parabola": "The U-shaped or ∩-shaped curve formed by a quadratic function",
                    "Vertex": "The turning point of a parabola; the minimum (a > 0) or maximum (a < 0) point",
                    "Axis of Symmetry": "The vertical line x = −b/(2a) that divides the parabola into two mirror halves",
                    "y-intercept": "Where the parabola crosses the y-axis; always at (0, c)",
                    "x-intercepts (Roots)": "Where the parabola crosses the x-axis; found by solving y = 0",
                    "Discriminant": "b² − 4ac: positive → 2 roots; zero → 1 root; negative → no real roots",
                    "Leading Coefficient (a)": "Determines orientation (up/down) and width of parabola"
                },
                parabolaFeatures: {
                    orientation: "a > 0 → opens up (minimum vertex); a < 0 → opens down (maximum vertex)",
                    width: "|a| large → narrow parabola; |a| small → wide parabola",
                    vertex: {
                        x: "x_v = −b/(2a)",
                        y: "y_v = c − b²/(4a) = substitute x_v into equation",
                        alternative: "Complete the square to convert to y = a(x − h)² + k; vertex is (h, k)"
                    },
                    axisOfSymmetry: "x = −b/(2a); mirror axis of the parabola",
                    intercepts: {
                        y: "(0, c): set x = 0",
                        x: "Solve ax² + bx + c = 0 by factoring, completing the square, or quadratic formula"
                    }
                },
                discriminantAnalysis: {
                    positive: "b² − 4ac > 0: two distinct x-intercepts; parabola crosses x-axis twice",
                    zero: "b² − 4ac = 0: one repeated x-intercept; parabola is tangent to x-axis",
                    negative: "b² − 4ac < 0: no real x-intercepts; parabola entirely above or below x-axis"
                },
                drawingMethod: {
                    steps: [
                        "Step 1: Identify a, b, c from equation y = ax² + bx + c",
                        "Step 2: Find vertex: x_v = −b/(2a); y_v = substitute x_v",
                        "Step 3: Find axis of symmetry: x = x_v",
                        "Step 4: Find y-intercept: (0, c)",
                        "Step 5: Find x-intercepts if they exist: solve ax² + bx + c = 0",
                        "Step 6: Create table of values for at least 5 symmetric points",
                        "Step 7: Plot all points and draw smooth U-shaped (or ∩-shaped) curve",
                        "Step 8: Label vertex, intercepts, and axis of symmetry"
                    ]
                },
                transformations: {
                    vertical_shift: "y = x² + k: shifts parabola k units up (k > 0) or down (k < 0)",
                    horizontal_shift: "y = (x − h)²: shifts parabola h units right (h > 0) or left (h < 0)",
                    reflection: "y = −x²: reflects in x-axis; opens downward",
                    stretch_compression: "y = ax²: stretches (|a| > 1) or compresses (0 < |a| < 1) vertically",
                    combined: "y = a(x − h)² + k: vertex form; vertex at (h, k)"
                },
                workedExamples: [
                    {
                        task: "Sketch y = x² − 4x + 3",
                        solution: "a=1,b=−4,c=3. Vertex: x = 4/2 = 2; y = 4−8+3 = −1. Vertex (2,−1). y-int: (0,3). Roots: x²−4x+3=0 → (x−1)(x−3)=0 → (1,0) and (3,0). Opens up."
                    },
                    {
                        task: "Find the equation of a parabola with vertex (2, −3) passing through (0, 1)",
                        solution: "y = a(x−2)² − 3. At (0,1): 1 = 4a − 3 → a = 1. Equation: y = (x−2)² − 3 = x² − 4x + 1"
                    }
                ],
                applications: [
                    "Projectile motion: trajectory of a thrown ball, shell, or rocket",
                    "Bridge and arch design: parabolic arches distribute load efficiently",
                    "Satellite dishes: parabolic shape focuses incoming signals at the focal point",
                    "Car headlights: parabolic reflectors project light in a parallel beam",
                    "Revenue optimization: quadratic profit functions have a maximum point"
                ]
            },

            inequality_regions: {
                title: "Inequality Regions: Shading the Solution Space",
                concepts: [
                    "A linear inequality divides the plane into two half-planes",
                    "The boundary line is drawn solid (≤ or ≥) or dashed (< or >) ",
                    "To determine which side to shade, substitute a test point into the inequality",
                    "If the test point satisfies the inequality, shade the region containing it",
                    "The solution region contains all points satisfying the inequality",
                    "For multiple inequalities, the feasible region is the intersection of all regions",
                    "The origin (0, 0) is a convenient test point unless it lies on the boundary"
                ],
                theory: "Inequality regions are the graphical representation of constrained optimization problems — the foundation of linear programming used in business, manufacturing, transportation, and resource allocation. Every linear programming problem is solved by finding the feasible region formed by multiple inequalities.",
                keyDefinitions: {
                    "Half-Plane": "One of the two regions on either side of a straight line; defined by a linear inequality",
                    "Boundary Line": "The line corresponding to the equality form of the inequality",
                    "Solid Line": "Used when the boundary is included in the solution (≤ or ≥)",
                    "Dashed Line": "Used when the boundary is excluded from the solution (< or >)",
                    "Test Point": "A point substituted into the inequality to determine which side to shade",
                    "Feasible Region": "The intersection of all inequality regions; all points satisfying every inequality simultaneously",
                    "Vertex of Region": "A corner point of the feasible region; optimal values occur here in linear programming"
                },
                drawingProcedure: {
                    singleInequality: [
                        "Step 1: Replace inequality with = to get the boundary line equation",
                        "Step 2: Draw the boundary line (solid for ≤/≥; dashed for </>)",
                        "Step 3: Choose a test point NOT on the boundary line (use origin if possible)",
                        "Step 4: Substitute test point into original inequality",
                        "Step 5: If satisfied → shade the side containing the test point",
                        "Step 6: If not satisfied → shade the opposite side",
                        "Step 7: Label the shaded region as the solution region"
                    ],
                    multipleInequalities: [
                        "Draw each boundary line",
                        "Shade each inequality's region (use light hatching for clarity)",
                        "The feasible region is the area where ALL shadings overlap",
                        "Identify and mark the vertices of the feasible region",
                        "Vertices are found by solving pairs of boundary equations simultaneously"
                    ]
                },
                signRules: {
                    yGreaterThan: "y > mx + c: shade ABOVE the line",
                    yLessThan: "y < mx + c: shade BELOW the line",
                    xGreaterThan: "x > k: shade to the RIGHT of the vertical line",
                    xLessThan: "x < k: shade to the LEFT of the vertical line"
                },
                workedExamples: [
                    {
                        task: "Shade the region y ≤ 2x + 1",
                        solution: "Draw solid line y = 2x+1. Test (0,0): 0 ≤ 1 ✓. Shade below and on the line."
                    },
                    {
                        task: "Find the feasible region for: y ≥ x, y ≤ 4, x ≥ 0",
                        solution: "Three boundaries: y = x (solid), y = 4 (solid), x = 0 (solid). Feasible region: above y=x, below y=4, right of x=0. Vertices: (0,0), (0,4), (4,4)"
                    }
                ],
                linearProgramming: {
                    definition: "Finding maximum or minimum of an objective function within the feasible region",
                    theorem: "The optimal value always occurs at a vertex of the feasible region",
                    steps: [
                        "Define variables and objective function",
                        "Write constraints as inequalities",
                        "Draw feasible region",
                        "List all vertices",
                        "Evaluate objective function at each vertex",
                        "Select vertex giving maximum or minimum value"
                    ]
                },
                applications: [
                    "Business: maximising profit subject to resource constraints",
                    "Diet planning: meeting nutritional requirements at minimum cost",
                    "Manufacturing: optimal production mix given material and labour limits",
                    "Transport: minimising delivery cost with vehicle capacity constraints",
                    "Investment: portfolio optimization subject to risk constraints"
                ]
            },

            graph_interpretation: {
                title: "Graph Interpretation: Reading the Story in Every Graph",
                concepts: [
                    "Graphs communicate mathematical relationships visually",
                    "The gradient of a distance-time graph gives speed",
                    "The gradient of a speed-time graph gives acceleration",
                    "The area under a speed-time graph gives distance travelled",
                    "A horizontal section means zero rate of change (rest, constant speed, etc.)",
                    "Steeper gradient means faster rate of change",
                    "The shape of a graph reveals the nature of the relationship"
                ],
                theory: "Graph interpretation is the skill of translating visual patterns into mathematical meaning. Every graph tells a story — about motion, change, growth, or relationships. The ability to read graphs critically is fundamental to science, economics, data analysis, and everyday quantitative literacy.",
                keyDefinitions: {
                    "Distance-Time Graph": "Shows distance from a point against time; gradient = speed",
                    "Speed-Time Graph": "Shows speed against time; gradient = acceleration; area under graph = distance",
                    "Travel Graph": "A distance-time graph showing a journey; horizontal = stationary",
                    "Gradient on D-T Graph": "Speed = Δdistance / Δtime",
                    "Area Under Speed-Time": "Distance = area under speed-time graph (trapezium or triangle areas)",
                    "Positive Gradient": "Moving away from starting point; speed in positive direction",
                    "Negative Gradient on D-T": "Moving back toward starting point",
                    "Horizontal Gradient": "Stationary (distance not changing)"
                },
                distanceTimeGraphs: {
                    features: {
                        horizontal: "Stationary — not moving; distance stays constant",
                        straight_positive: "Moving at constant speed away from start",
                        straight_negative: "Returning to start at constant speed",
                        steeper: "Moving faster (greater speed)",
                        curved: "Acceleration or deceleration",
                        returningToZero: "Returning to the starting point"
                    },
                    calculatingSpeed: "Speed = gradient = Δdistance / Δtime = (d₂ − d₁)/(t₂ − t₁)"
                },
                speedTimeGraphs: {
                    features: {
                        horizontal: "Constant speed (zero acceleration)",
                        positive_slope: "Accelerating (speed increasing)",
                        negative_slope: "Decelerating (speed decreasing)",
                        reachingZero: "Coming to rest"
                    },
                    calculatingAcceleration: "Acceleration = gradient = Δspeed / Δtime",
                    calculatingDistance: "Distance = area under graph (use trapezium, rectangle, or triangle area formulas)"
                },
                generalInterpretation: {
                    intercepts: "Where a graph meets axes reveals starting values and zero-crossing values",
                    peaks_and_troughs: "Maximum and minimum values; turning points on a curve",
                    increasing_decreasing: "Whether the variable is growing or shrinking",
                    rate_of_change: "Steepness reveals how fast things are changing",
                    asymptotic_behaviour: "Approaching a limit without reaching it"
                },
                workedExamples: [
                    {
                        task: "A D-T graph shows: 0–2h at gradient 30km/h, 2–3h horizontal, 3–5h at gradient −15km/h. Describe the journey.",
                        solution: "0–2h: travelling at 30 km/h, covering 60 km. 2–3h: stationary for 1 hour. 3–5h: returning at 15 km/h, covering 30 km. Final position: 60 − 30 = 30 km from start."
                    },
                    {
                        task: "A speed-time graph shows a trapezium: speed rises from 0 to 20 m/s over 5s, stays at 20 m/s for 10s, then falls to 0 over 5s. Find distance.",
                        solution: "Area = ½(5)(20) + (10)(20) + ½(5)(20) = 50 + 200 + 50 = 300 m"
                    }
                ],
                realWorldGraphTypes: {
                    conversionGraphs: "Straight line through origin; used for currency, units, temperature conversion",
                    populationGraphs: "Often exponential; show growth over decades",
                    climateGraphs: "Combined bar and line graphs for rainfall and temperature",
                    stockMarket: "Jagged line graphs showing price variation over time",
                    cumulativeFrequency: "S-shaped curve used in statistics for median and quartile finding"
                },
                applications: [
                    "Transport planning: reading timetable graphs and journey time charts",
                    "Physics: interpreting motion graphs in mechanics",
                    "Economics: reading supply, demand, and market equilibrium graphs",
                    "Medicine: interpreting patient monitoring charts (heart rate, blood pressure over time)",
                    "Environmental science: reading climate change data from temperature-time graphs"
                ]
            }
        };
    }

    initializeMathematicsPracticals() {
        this.mathematicsPracticals = {

            // ========================================
            // PRACTICAL 1: CARTESIAN PLANE MAPPING
            // ========================================

            cartesian_plane_mapping: {
                name: "Cartesian Plane: Coordinate Treasure Hunt",
                relatedTopics: ['cartesian_plane', 'plotting_points'],
                category: 'graphs',
                historicalBackground: {
                    inventor: "René Descartes (1596–1650)",
                    year: "1637",
                    work: "La Géométrie",
                    development: "Descartes unified algebra and geometry by inventing a coordinate system. The story goes that he was lying in bed watching a fly on his ceiling and wondered how to describe its position mathematically — leading to the idea of two perpendicular axes.",
                    significance: "Before Descartes, algebra and geometry were entirely separate disciplines. His coordinate system allowed geometric problems to be solved algebraically and algebraic equations to be visualised geometrically.",
                    impact: "Enabled the development of calculus by Newton and Leibniz; underpins all computer graphics, GIS mapping, robotics, and engineering drawing",
                    modernUse: "Every digital map, video game, and engineering drawing uses Cartesian coordinates"
                },
                practicalMathematics: {
                    title: "Coordinate Treasure Hunt: Mapping the Cartesian Plane",
                    hypothesis: "If the Cartesian coordinate system provides a unique address for every point in the plane, then a set of ordered pairs can encode the shape of any figure or path",
                    purpose: "Develop fluency with Cartesian coordinates by encoding and decoding shapes, paths, and figures using ordered pairs",
                    materials: [
                        "Large squared grid paper (at least 20×20 squares)",
                        "Ruler and sharp pencil",
                        "Coloured pens (different colours for each quadrant)",
                        "Coordinate cards (sets of ordered pairs to plot)",
                        "Graph for teacher's hidden treasure map",
                        "Protractor (for extension angle work)"
                    ],
                    procedure: [
                        "PART A: Setting Up the Coordinate System",
                        "1. Draw x-axis and y-axis on large grid paper, extending from −10 to +10 on each axis",
                        "2. Label axes, mark scale at every 2 units, label origin O(0, 0)",
                        "3. Label Quadrants I, II, III, IV in their respective regions",
                        "4. Record the sign of x and y coordinates in each quadrant",
                        "",
                        "PART B: Coordinate Identification Challenge",
                        "5. Your teacher will mark 10 points on a shared grid. Record the coordinates of each.",
                        "6. Classify each point by quadrant or axis.",
                        "7. Compare results with a partner — discuss any disagreements.",
                        "",
                        "PART C: Plotting a Hidden Picture",
                        "8. Plot the following points in order and join with straight lines:",
                        "   (0,8) → (2,6) → (4,8) → (4,4) → (7,4) → (7,−4) → (4,−4) → (4,−8)",
                        "   → (−4,−8) → (−4,−4) → (−7,−4) → (−7,4) → (−4,4) → (−4,8) → (0,8)",
                        "   Then: (−2,6) → (0,8) → (2,6). Plot separately: (−3,2),(3,2),(0,−1)",
                        "9. What shape or picture did you reveal?",
                        "",
                        "PART D: Coordinate Treasure Hunt",
                        "10. You are given clues in words rather than numbers. Convert each clue to coordinates:",
                        "   Clue 1: 'Move 5 units right and 3 units up from the origin'",
                        "   Clue 2: 'Move 4 units left and 6 units down from the origin'",
                        "   Clue 3: 'You are 7 units from the y-axis in the negative x direction, on the x-axis'",
                        "   Clue 4: '3 units above the x-axis, on the y-axis'",
                        "11. Plot all treasure locations and find the midpoint of clues 1 and 2",
                        "",
                        "PART E: Creating Your Own Coordinate Picture",
                        "12. Design a simple picture using at least 15 plotted points joined by straight lines",
                        "13. Record all coordinate pairs in a table",
                        "14. Exchange your coordinate table (not your picture) with a partner",
                        "15. Your partner plots your coordinates and tries to recreate your picture",
                        "16. Compare the two pictures — discuss any discrepancies"
                    ],
                    dataTable: [
                        ["Point", "Coordinates", "Quadrant/Axis", "x positive/negative", "y positive/negative"],
                        ["A", "", "", "", ""],
                        ["B", "", "", "", ""],
                        ["C", "", "", "", ""],
                        ["D", "", "", "", ""],
                        ["E", "", "", "", ""]
                    ],
                    observations: {
                        uniqueness: "Every point corresponds to exactly one ordered pair (x, y) and vice versa",
                        orderMatters: "(3, 5) and (5, 3) plot in different locations — order is critical",
                        axisPoints: "Points on x-axis always have y = 0; points on y-axis always have x = 0",
                        originSpecial: "(0, 0) is the only point on both axes simultaneously",
                        quadrantPattern: "Sign pattern of coordinates uniquely identifies the quadrant"
                    },
                    conclusions: [
                        "The Cartesian plane gives every point in 2D space a unique numerical address",
                        "Ordered pairs encode position precisely — changing either number moves the point",
                        "Complex figures can be transmitted as a list of coordinate pairs",
                        "This is the basis of all digital image encoding, vector graphics, and computer-aided design"
                    ],
                    extensions: [
                        "Investigate: does rotating a figure by 90° about the origin map (x, y) to (−y, x)?",
                        "Extend to 3D coordinates (x, y, z) — where would you need a third axis?",
                        "Research how GPS systems use a spherical coordinate system analogous to Cartesian",
                        "Explore how pixels in a digital image use Cartesian coordinates"
                    ],
                    realWorldConnections: [
                        "Video games: every game object has Cartesian coordinates on screen",
                        "GIS mapping: locations are stored as (longitude, latitude) coordinate pairs",
                        "Computer graphics: vector images store shapes as lists of (x, y) coordinate pairs",
                        "Robotics: robot arm position is controlled by Cartesian coordinates in 3D space",
                        "Architecture: building drawings place every structural element using coordinates"
                    ],
                    pedagogicalNotes: {
                        commonError: "Students often confuse the order in (x, y) — emphasise 'x comes first, like the alphabet'",
                        visualAid: "Use the mnemonic 'x is across, y is up' or 'you go along the corridor before going up the stairs'",
                        differentiation: "Support: use different colours per quadrant. Extension: introduce midpoint and distance formulas",
                        assessment: "Ask students to explain why (3, 5) ≠ (5, 3) — tests conceptual understanding of ordered pairs"
                    }
                }
            },

            // ========================================
            // PRACTICAL 2: GRADIENT INVESTIGATION
            // ========================================

            gradient_investigation: {
                name: "Gradient Investigation: Ramps, Roads, and Rate of Change",
                relatedTopics: ['gradient', 'linear_graphs'],
                category: 'graphs',
                historicalBackground: {
                    mathematician: "Multiple contributors: Descartes (coordinates), Newton and Leibniz (calculus — instantaneous gradient)",
                    concept: "The concept of gradient as 'rise over run' predates calculus but was formalised through the development of differential calculus",
                    significance: "Gradient is the discrete (measurable) version of the derivative — the foundational concept of calculus",
                    engineeringUse: "Roman engineers designed aqueducts with precise gradients for water flow; modern road engineers specify gradient limits for safety",
                    modernApplication: "Machine learning uses gradient descent — updating model parameters in the direction of steepest descent on an error surface"
                },
                practicalMathematics: {
                    title: "Gradient Investigation: Measuring Steepness in the Real World",
                    hypothesis: "The gradient of a line can be calculated as rise/run regardless of which two points on the line are chosen, and this value encodes the rate of change of the relationship",
                    purpose: "Investigate gradient through physical measurement, calculate gradients of lines in different orientations, and connect gradient to real-world rates of change",
                    materials: [
                        "Metre ruler or measuring tape",
                        "Spirit level",
                        "Ramp made from a plank of wood or cardboard tube",
                        "Protractor",
                        "Graph paper",
                        "Pencil and ruler",
                        "Set of printed graphs with lines to measure"
                    ],
                    procedure: [
                        "PART A: Physical Gradient Measurement",
                        "1. Set up a ramp at three different angles (low, medium, steep)",
                        "2. For each angle, measure the vertical height (rise) and horizontal distance (run)",
                        "3. Calculate the gradient = rise/run for each ramp",
                        "4. Record whether the gradient is greater or less than 1",
                        "5. A road gradient of 10% means what in rise/run terms? (Answer: 0.10)",
                        "",
                        "PART B: Gradient from Two Points",
                        "6. On graph paper, draw lines through the following pairs of points and calculate gradients:",
                        "   Line A: (0, 1) and (4, 9)",
                        "   Line B: (−2, 8) and (3, −2)",
                        "   Line C: (1, 3) and (5, 3)",
                        "   Line D: (4, 0) and (4, 7)",
                        "7. Classify each as positive, negative, zero, or undefined",
                        "",
                        "PART C: Gradient is Constant Along a Line",
                        "8. For the line through (0, 2) and (6, 8):",
                        "   Calculate m using points (0,2) and (6,8)",
                        "   Calculate m using points (0,2) and (2,4)",
                        "   Calculate m using points (3,5) and (6,8)",
                        "9. Are all three gradients equal? What principle does this demonstrate?",
                        "",
                        "PART D: Parallel and Perpendicular Lines",
                        "10. Draw line L₁ through (0, 1) with gradient 2",
                        "11. Draw line L₂ through (0, 3) with gradient 2",
                        "12. Are L₁ and L₂ parallel? What is the relationship between their gradients?",
                        "13. Draw line L₃ through (0, 0) with gradient −1/2",
                        "14. Measure the angle between L₁ and L₃. Are they perpendicular?",
                        "15. Verify: m₁ × m₃ = 2 × (−1/2) = −1",
                        "",
                        "PART E: Gradient as Rate of Change",
                        "16. Given this data for a taxi journey:",
                        "    Time (min): 0, 5, 10, 15, 20",
                        "    Cost (£): 2.50, 4.00, 5.50, 7.00, 8.50",
                        "17. Plot the data and draw the best-fit straight line",
                        "18. Calculate the gradient. What does it mean in context?",
                        "19. What does the y-intercept represent in context?"
                    ],
                    dataTable: [
                        ["Line", "Point 1", "Point 2", "Rise (Δy)", "Run (Δx)", "Gradient m = Δy/Δx", "Classification"],
                        ["A", "(0,1)", "(4,9)", "8", "4", "2", "Positive, steep"],
                        ["B", "(−2,8)", "(3,−2)", "−10", "5", "−2", "Negative, steep"],
                        ["C", "(1,3)", "(5,3)", "0", "4", "0", "Zero (horizontal)"],
                        ["D", "(4,0)", "(4,7)", "7", "0", "undefined", "Vertical"]
                    ],
                    conclusions: [
                        "Gradient = rise/run = Δy/Δx measures steepness and direction of a line",
                        "Gradient is constant along any straight line — same value from any two points",
                        "Positive gradient: rising left to right; negative: falling; zero: horizontal; undefined: vertical",
                        "Parallel lines have equal gradients; perpendicular lines have gradients that multiply to −1",
                        "Gradient represents the rate of change: how much y changes per unit increase in x"
                    ],
                    extensions: [
                        "Investigate how gradient changes along a curve — how might you estimate gradient at one point on a curve?",
                        "Research how gradient descent works in machine learning as a mathematical optimisation technique",
                        "Calculate gradients of actual road signs (% gradient on hills) and verify with measurement"
                    ],
                    realWorldConnections: [
                        "Civil engineering: road and rail gradients are specified for vehicle safety and accessibility",
                        "Architecture: roof pitch is specified as a gradient ratio for drainage",
                        "Wheelchair ramps: legally required maximum gradient of 1:12 (≈ 0.083) for accessibility",
                        "Physics: gradient of a displacement-time graph gives velocity",
                        "Economics: gradient of a cost function gives marginal cost per unit"
                    ],
                    pedagogicalNotes: {
                        physicalFirst: "Physical ramp measurement before abstract graph work connects the concept to embodied experience",
                        commonError: "Students often calculate Δx/Δy (run/rise) instead of rise/run — emphasise vertical over horizontal",
                        perpendicular: "The product −1 rule for perpendicular gradients often surprises students; derive it geometrically",
                        realRate: "Emphasise that gradient is always a rate: units of y per unit of x"
                    }
                }
            },

            // ========================================
            // PRACTICAL 3: LINEAR GRAPH DISCOVERY
            // ========================================

            linear_graph_discovery: {
                name: "Linear Graph Discovery: From Tables to Equations",
                relatedTopics: ['linear_graphs', 'gradient', 'graph_interpretation'],
                category: 'graphs',
                historicalBackground: {
                    context: "Linear relationships are the oldest and most studied in mathematics, appearing in ancient Babylonian records of proportional reasoning",
                    modernFoundation: "The y = mx + c form was established through the work of Descartes, Fermat, and later formalised in 18th-century algebra texts",
                    universality: "Linear functions model any constant-rate process — from unit conversion to economic pricing to physical proportionality",
                    significance: "Linear graphs are the foundation of regression analysis, the most widely used statistical technique in science and industry"
                },
                practicalMathematics: {
                    title: "Linear Graph Discovery: Building Understanding from Real Data",
                    hypothesis: "If a relationship between two variables is linear, a table of values will produce a straight-line graph, and the gradient and y-intercept of that line reveal the mathematical equation of the relationship",
                    purpose: "Discover the properties of linear graphs by generating data, plotting graphs, and deriving equations from visual and numerical evidence",
                    materials: [
                        "Graph paper (several sheets per student)",
                        "Ruler (for straight lines)",
                        "Coloured pencils (for labelling multiple lines)",
                        "Calculator",
                        "Real-world data cards (phone tariffs, conversion tables, taxi fares)",
                        "Linear graph template worksheet"
                    ],
                    procedure: [
                        "PART A: From Table to Graph — Phone Tariff Comparison",
                        "1. Two mobile phone plans are offered:",
                        "   Plan A: £10 monthly charge + 5p per minute",
                        "   Plan B: £0 monthly charge + 12p per minute",
                        "2. Complete the table for both plans for 0–200 minutes:",
                        "   Minutes: 0, 50, 100, 150, 200",
                        "   Plan A cost = 10 + 0.05x; Plan B cost = 0.12x",
                        "3. Plot both lines on the same axes. Label gradient and y-intercept for each.",
                        "4. Find the intersection point — what does it represent?",
                        "5. Which plan is cheaper for someone who uses 80 minutes/month? 180 minutes?",
                        "",
                        "PART B: Gradient-Intercept Exploration",
                        "6. Draw the following lines on the SAME pair of axes and compare:",
                        "   y = x; y = 2x; y = 3x; y = 0.5x",
                        "7. What changes as the gradient increases? What stays the same?",
                        "8. Now draw: y = 2x; y = 2x + 3; y = 2x − 2; y = 2x + 5",
                        "9. What changes? What stays the same? What is the relationship between these lines?",
                        "",
                        "PART C: Finding the Equation from a Graph",
                        "10. Your teacher provides a printed graph of an unknown line.",
                        "11. Read two clear points from the graph.",
                        "12. Calculate the gradient using m = (y₂−y₁)/(x₂−x₁)",
                        "13. Read or calculate the y-intercept.",
                        "14. Write the equation in the form y = mx + c.",
                        "15. Verify: substitute a third point from the graph into your equation.",
                        "",
                        "PART D: Temperature Conversion Investigation",
                        "16. The relationship between Fahrenheit (F) and Celsius (C) is linear.",
                        "    Known points: (0°C, 32°F) and (100°C, 212°F)",
                        "17. Calculate the gradient: m = (212−32)/(100−0) = 180/100 = 1.8",
                        "18. Write the equation: F = 1.8C + 32",
                        "19. Use the graph to convert: 37°C to °F; 68°F to °C; −40°C to °F",
                        "20. What is significant about −40°C?"
                    ],
                    dataTable: [
                        ["Minutes (x)", "Plan A: y = 10 + 0.05x", "Plan B: y = 0.12x", "Difference (A−B)"],
                        ["0", "£10.00", "£0.00", "£10.00"],
                        ["50", "£12.50", "£6.00", "£6.50"],
                        ["100", "£15.00", "£12.00", "£3.00"],
                        ["143 (approx)", "≈£17.14", "≈£17.14", "£0 (break-even)"],
                        ["200", "£20.00", "£24.00", "−£4.00"]
                    ],
                    observations: {
                        gradient_effect: "Increasing gradient makes the line steeper without changing the y-intercept",
                        intercept_effect: "Changing y-intercept shifts the line up or down without changing steepness",
                        parallel_lines: "Lines with the same gradient are parallel — they never intersect",
                        intersection: "Two different linear lines intersect at exactly one point (unless parallel)"
                    },
                    conclusions: [
                        "Linear graphs are characterised by constant gradient throughout",
                        "y = mx + c encodes two key features: m (steepness) and c (starting value)",
                        "The gradient represents the rate of change: how much y increases per unit of x",
                        "The y-intercept represents the value of y when x = 0 — often the 'fixed' or 'initial' value",
                        "Two linear functions can be compared graphically; their intersection is the breakeven or solution point"
                    ],
                    extensions: [
                        "Investigate lines of the form ax + by = c — how does this relate to y = mx + c?",
                        "Explore the concept of regression: fitting a linear model to noisy real-world data",
                        "Derive the equation of a line through two points algebraically using point-slope form"
                    ],
                    realWorldConnections: [
                        "Mobile tariffs: fixed charge + variable rate = y = mx + c",
                        "Temperature conversion: a linear function connecting Celsius and Fahrenheit",
                        "Wages: weekly pay = (hourly rate × hours) + fixed bonus",
                        "Currency exchange: conversion graph is a straight line through the origin",
                        "Water fill rate: volume = rate × time (straight line through origin)"
                    ]
                }
            },

            // ========================================
            // PRACTICAL 4: EXPONENTIAL GROWTH DISCOVERY
            // ========================================

            exponential_growth_discovery: {
                name: "Exponential Growth Discovery: Bacteria, Money, and the Power of Doubling",
                relatedTopics: ['exponential_graphs', 'graph_interpretation'],
                category: 'graphs',
                historicalBackground: {
                    mathematician: "Leonhard Euler (1707–1783) developed the natural exponential function eˣ",
                    discovery: "Thomas Malthus (1798) first described population growth as exponential — sparking debates about resource limits that continue today",
                    bacteria: "Robert Koch and Louis Pasteur's 19th-century work on bacterial growth established exponential doubling as a measurable biological law",
                    finance: "Compound interest (exponential growth of money) was understood by Babylonian merchants but mathematically formalised in the 17th century",
                    modernRelevance: "COVID-19 pandemic (2020) brought exponential growth to global public attention — demonstrating why understanding exponential behaviour is a critical public health literacy skill"
                },
                practicalMathematics: {
                    title: "Exponential Growth Discovery: From Bacteria to Bank Accounts",
                    hypothesis: "Unlike linear growth (which adds a constant amount), exponential growth multiplies by a constant factor — producing a characteristic J-shaped curve that eventually overwhelms any linear comparison",
                    purpose: "Investigate exponential growth and decay through physical simulation, graphical analysis, and real-world data; discover how exponential graphs differ fundamentally from linear graphs",
                    materials: [
                        "100 coins or two-sided counters (for probability model of radioactive decay)",
                        "Graph paper",
                        "Coloured pens",
                        "Calculator (with exponent key)",
                        "Ruler (for comparing linear vs exponential)",
                        "Spreadsheet access (optional, for large data sets)"
                    ],
                    procedure: [
                        "PART A: The Doubling Demonstration — Folding Paper",
                        "1. Take a sheet of paper. Fold it in half (1 fold = 2 layers)",
                        "2. Fold again (2 folds = 4 layers). Fold again (3 folds = 8 layers).",
                        "3. Complete the table: number of folds n = 0,1,2,...,10 → layers = 2ⁿ",
                        "4. Attempt to fold the paper 7 times. Why does it become impossible?",
                        "5. Calculate: if paper is 0.1 mm thick, how thick would 50 folds be? (Answer: 2⁵⁰ × 0.1 mm ≈ 113 million km — nearly the distance from Earth to the Sun)",
                        "",
                        "PART B: Bacterial Growth Simulation",
                        "6. Model bacteria that double every 20 minutes. Start with 1 bacterium.",
                        "7. Complete the table for 0, 20, 40, 60, 80, 100, 120 minutes",
                        "   Population = 2^(t/20) where t is in minutes",
                        "8. Plot population against time on graph paper",
                        "9. Plot the same data on a SECOND graph using a linear scale up to 5 million",
                        "   Observe how quickly the graph goes off the scale",
                        "",
                        "PART C: Radioactive Decay Simulation",
                        "10. Place 100 coins heads-up on a tray. This represents 100 radioactive atoms.",
                        "11. Shake the tray and remove all coins that land tails-up (they have 'decayed').",
                        "12. Count remaining coins. Record as generation 1.",
                        "13. Repeat for 8 generations. Record counts each time.",
                        "14. Plot remaining atoms against generation number.",
                        "15. Fit the theoretical curve: N = 100 × (0.5)^n and compare with actual data.",
                        "",
                        "PART D: Compound Interest Comparison",
                        "16. £1000 invested in two accounts:",
                        "    Account A: Simple interest 10% per year (linear: A = 1000 + 100t)",
                        "    Account B: Compound interest 10% per year (exponential: A = 1000(1.1)ᵗ)",
                        "17. Complete the table for t = 0, 5, 10, 15, 20, 25, 30 years",
                        "18. Plot both on the same axes.",
                        "19. At what year does compound interest first exceed simple interest by more than £1000?",
                        "",
                        "PART E: Graph Feature Analysis",
                        "20. For y = 2ˣ: identify y-intercept, the horizontal asymptote, two additional points",
                        "21. For y = (0.5)ˣ: identify the same features. Compare shape with growth curve.",
                        "22. Describe in words how exponential growth and decay differ."
                    ],
                    dataTable: [
                        ["Time t (min)", "Bacteria = 2^(t/20)", "Account A (Simple)", "Account B (Compound)"],
                        ["0", "1", "£1000", "£1000"],
                        ["20", "2", "—", "—"],
                        ["40", "4", "—", "—"],
                        ["60", "8", "—", "—"],
                        ["80", "16", "—", "—"],
                        ["100", "32", "—", "—"],
                        ["120", "64", "—", "—"]
                    ],
                    observations: {
                        jShapedCurve: "Exponential growth produces a characteristic J-shaped curve — slow at first, then accelerating rapidly",
                        horizontalAsymptote: "Exponential decay approaches but never reaches zero — the x-axis is an asymptote",
                        yIntercept: "All y = aˣ graphs pass through (0, 1) since a⁰ = 1",
                        comparisonWithLinear: "Exponential growth eventually overtakes any linear growth, however large the linear rate",
                        doublingTime: "The doubling time for y = 2ᵗ is constant — always 1 unit of time per doubling"
                    },
                    conclusions: [
                        "Exponential functions multiply by a constant factor per unit time, unlike linear functions which add a constant",
                        "The result is a J-shaped growth curve or an asymptotic decay curve",
                        "All y = aˣ functions pass through (0, 1) and have y = 0 as a horizontal asymptote",
                        "Compound interest, bacterial growth, radioactive decay, and viral spread all follow exponential models",
                        "Exponential growth quickly becomes astronomically large — why pandemic early action matters"
                    ],
                    extensions: [
                        "Investigate the natural base e ≈ 2.718 and why it is special in calculus",
                        "Research logarithms as the inverse of exponential functions",
                        "Analyse real COVID-19 daily case data to identify the exponential phase",
                        "Derive the continuous compound interest formula A = Peʳᵗ"
                    ],
                    realWorldConnections: [
                        "Epidemiology: disease spread in early stages follows exponential growth",
                        "Finance: compound interest and investment growth",
                        "Nuclear physics: radioactive decay with precisely measured half-lives",
                        "Biology: population dynamics — bacterial colonies, locust swarms",
                        "Technology: Moore's Law — exponential growth in computing power"
                    ],
                    pedagogicalNotes: {
                        intuitionBuilding: "Begin with the paper folding demonstration — the physical impossibility of many folds makes exponential growth viscerally real",
                        comparison: "Always compare exponential with linear growth on the same graph to highlight the difference",
                        logarithmLink: "This practical prepares students for logarithms by establishing the exponential function thoroughly first"
                    }
                }
            },

            // ========================================
            // PRACTICAL 5: QUADRATIC GRAPH INVESTIGATION
            // ========================================

            quadratic_graph_investigation: {
                name: "Quadratic Graph Investigation: Parabolas in the Physical World",
                relatedTopics: ['quadratic_graphs', 'graph_interpretation', 'gradient'],
                category: 'graphs',
                historicalBackground: {
                    mathematician: "Apollonius of Perga (262–190 BCE) gave the parabola its name and studied its properties",
                    physicsConnection: "Galileo Galilei (1564–1642) proved that projectiles follow parabolic paths — a revolutionary result combining mathematics and physics",
                    modernApplications: "Parabolic reflectors (satellite dishes, car headlights, radio telescopes) rely on the focal property: all parallel rays reflect through the focus",
                    architecture: "The Gateway Arch in St Louis (1965) is designed as a catenary (similar in appearance to a parabola); the Sydney Harbour Bridge cables hang in a parabolic shape",
                    significance: "Quadratic functions model any situation where rate of change is not constant but itself changes linearly — from physics to economics to biology"
                },
                practicalMathematics: {
                    title: "Quadratic Graph Investigation: Discovering Parabola Properties",
                    hypothesis: "The graph of y = ax² + bx + c is a parabola whose orientation, width, vertex position, and x-intercepts are determined by the values of a, b, and c in systematic ways",
                    purpose: "Investigate how changing a, b, and c transforms a parabola; find the vertex, axis of symmetry, and roots; connect the graph to real-world projectile motion",
                    materials: [
                        "Graph paper (multiple sheets)",
                        "Ruler and sharp pencil",
                        "Coloured pens",
                        "Calculator",
                        "Ball for projectile demonstration (optional)",
                        "Quadratic function graphing investigation worksheet"
                    ],
                    procedure: [
                        "PART A: Effect of Changing 'a' — Orientation and Width",
                        "1. Draw all of the following on the same pair of axes:",
                        "   y = x², y = 2x², y = 4x², y = 0.5x², y = −x², y = −2x²",
                        "2. For each, complete a table of values for x = −3 to x = 3",
                        "3. Describe: how does increasing 'a' affect the shape? What does negative 'a' do?",
                        "4. Complete: As |a| increases, the parabola becomes _______",
                        "          As |a| decreases toward 0, the parabola becomes _______",
                        "          Negative 'a' causes the parabola to _______",
                        "",
                        "PART B: Effect of Changing 'c' — Vertical Shift",
                        "5. Draw on the same axes:",
                        "   y = x², y = x² + 3, y = x² − 2, y = x² + 5",
                        "6. Describe: how does changing 'c' affect the parabola?",
                        "7. What is the y-intercept of each? How does it relate to 'c'?",
                        "",
                        "PART C: Finding Vertex, Axis of Symmetry, and Intercepts",
                        "8. For y = x² − 4x + 3:",
                        "   (a) Complete table of values for x = 0 to x = 4",
                        "   (b) Plot the parabola",
                        "   (c) Find the axis of symmetry: x = −b/(2a) = 4/2 = 2",
                        "   (d) Find the vertex: substitute x = 2 → y = 4−8+3 = −1. Vertex: (2, −1)",
                        "   (e) Find x-intercepts: solve x²−4x+3=0 → (x−1)(x−3)=0 → (1,0) and (3,0)",
                        "   (f) y-intercept: x=0 → y = 3. Point: (0, 3)",
                        "   (g) Verify the axis of symmetry passes through the midpoint of (1,0) and (3,0)",
                        "",
                        "PART D: The Discriminant and Number of Roots",
                        "9. Calculate the discriminant b²−4ac for each and state number of x-intercepts:",
                        "   y = x² − 4x + 4",
                        "   y = x² − 4x + 3",
                        "   y = x² − 4x + 5",
                        "10. Plot all three and verify x-intercept count visually",
                        "",
                        "PART E: Projectile Motion Application",
                        "11. A ball is thrown upward. Height h = −5t² + 20t + 1 (h in metres, t in seconds)",
                        "12. Find: (a) initial height (t=0) (b) maximum height and when it occurs (c) when ball lands (h=0)",
                        "13. Plot h against t for t = 0 to t = 4.5",
                        "14. Identify vertex, y-intercept, and t-intercepts on the graph"
                    ],
                    dataTable: [
                        ["x", "y = x²", "y = 2x²", "y = −x²", "y = x²−4x+3"],
                        ["−3", "9", "18", "−9", "24"],
                        ["−2", "4", "8", "−4", "15"],
                        ["−1", "1", "2", "−1", "8"],
                        ["0", "0", "0", "0", "3"],
                        ["1", "1", "2", "−1", "0"],
                        ["2", "4", "8", "−4", "−1"],
                        ["3", "9", "18", "−9", "0"]
                    ],
                    observations: {
                        symmetry: "Every parabola is perfectly symmetrical about its axis of symmetry",
                        vertex: "The vertex is the unique minimum or maximum — the axis of symmetry passes through it",
                        discriminant: "The discriminant predicts exactly how many times the parabola crosses the x-axis",
                        aPositive: "a > 0 gives a U-shape with a minimum vertex",
                        aNegative: "a < 0 gives an ∩-shape with a maximum vertex",
                        width: "Larger |a| gives a narrower parabola; smaller |a| gives a wider parabola"
                    },
                    conclusions: [
                        "The parabola y = ax² + bx + c has vertex at x = −b/(2a) and is symmetrical about that vertical line",
                        "The sign of 'a' determines orientation; the magnitude of 'a' determines width",
                        "The discriminant b²−4ac determines whether the parabola has 2, 1, or 0 x-intercepts",
                        "Parabolas model projectile motion, reflecting the physical reality that gravity produces constant acceleration",
                        "Every quadratic can be written in vertex form y = a(x−h)² + k, directly revealing the vertex (h, k)"
                    ],
                    extensions: [
                        "Investigate completing the square to convert y = ax²+bx+c to vertex form",
                        "Research the focal property of parabolas: why do parabolic dishes focus signals?",
                        "Use a quadratic model to design a ramp with a specific maximum height and landing distance"
                    ],
                    realWorldConnections: [
                        "Projectile motion: trajectory of a ball, shell, fountain jet",
                        "Bridge cables: main cables of suspension bridges hang in parabolic shapes",
                        "Satellite dishes: parabolic reflectors focus signals at the focal point",
                        "Economics: quadratic profit functions with a maximum revenue point",
                        "Architecture: parabolic arches in bridges and doorways"
                    ]
                }
            },

            // ========================================
            // PRACTICAL 6: INEQUALITY REGION INVESTIGATION
            // ========================================

            inequality_region_investigation: {
                name: "Inequality Region Investigation: Linear Programming and Optimal Decisions",
                relatedTopics: ['inequality_regions', 'linear_graphs'],
                category: 'graphs',
                historicalBackground: {
                    mathematician: "George Dantzig (1914–2005) developed the Simplex algorithm for linear programming in 1947",
                    warOrigin: "Linear programming was developed during World War II to optimise military logistics — allocating limited resources (fuel, food, ammunition) most efficiently",
                    significance: "Linear programming is one of the most practically important mathematical techniques ever developed; it is used in virtually every large logistics and manufacturing operation worldwide",
                    nobelConnection: "The 1975 Nobel Prize in Economics was awarded to Kantorovich and Koopmans for contributions to the theory of optimum allocation of resources — based on linear programming",
                    modernUse: "Airlines use linear programming to optimise seat pricing; supermarkets use it for supply chain management; hospitals use it for staff scheduling"
                },
                practicalMathematics: {
                    title: "Inequality Region Investigation: Finding the Optimal Solution",
                    hypothesis: "A system of linear inequalities defines a feasible region on the Cartesian plane, and the optimal value of any linear objective function within that region occurs at one of its vertices",
                    purpose: "Represent systems of linear inequalities as shaded regions; identify feasible regions; apply the vertex theorem of linear programming to solve real optimisation problems",
                    materials: [
                        "Graph paper",
                        "Ruler",
                        "Coloured pencils (different colours for each inequality region)",
                        "Calculator",
                        "Linear programming problem cards",
                        "Transparency sheets (optional, for overlaying regions)"
                    ],
                    procedure: [
                        "PART A: Shading Single Inequalities",
                        "1. Draw the boundary line for y = 2x + 1 (solid, since ≥)",
                        "2. Test the origin (0,0): is 0 ≥ 2(0) + 1? → 0 ≥ 1 is FALSE",
                        "3. Therefore shade the side NOT containing the origin (above the line)",
                        "4. Repeat for each inequality:",
                        "   (a) y < 3x − 2 (dashed; test origin)",
                        "   (b) x + y ≤ 6 (solid; test origin)",
                        "   (c) x ≥ 2 (solid; test origin)",
                        "",
                        "PART B: Systems of Inequalities — Feasible Region",
                        "5. Draw the feasible region for the system:",
                        "   y ≤ x + 4",
                        "   y ≥ 2",
                        "   x ≥ 0",
                        "   x + y ≤ 8",
                        "6. Draw each boundary line; shade regions separately using light hatching",
                        "7. Identify and outline the feasible region (where all shadings overlap)",
                        "8. Find all vertices of the feasible region by solving pairs of boundary equations simultaneously",
                        "",
                        "PART C: Linear Programming — Biscuit Factory Problem",
                        "9. A biscuit factory makes two products: Choco (C) and Vanilla (V)",
                        "   Machine time: 3C + 2V ≤ 12 hours",
                        "   Labour: C + 2V ≤ 8 hours",
                        "   Demand: C ≥ 0, V ≥ 0",
                        "   Profit: P = 5C + 4V",
                        "10. Draw the feasible region for the constraints",
                        "11. Find all vertices of the feasible region",
                        "12. Evaluate the profit function P = 5C + 4V at each vertex",
                        "13. State the optimal production plan and maximum profit",
                        "",
                        "PART D: Verification",
                        "14. Verify that the optimal vertex does give a higher profit than any non-vertex point",
                        "15. Test: is the point (2, 3) in the feasible region? Check all inequalities.",
                        "16. What happens to the optimal solution if the profit per Choco increases to £7?"
                    ],
                    dataTable: [
                        ["Vertex", "C value", "V value", "P = 5C + 4V", "Feasible? (check all constraints)"],
                        ["(0, 0)", "0", "0", "0", "Yes"],
                        ["(4, 0)", "4", "0", "20", "Yes"],
                        ["(2, 3)", "2", "3", "22", "Yes"],
                        ["(0, 4)", "0", "4", "16", "Yes"]
                    ],
                    observations: {
                        halfPlanes: "Each linear inequality defines exactly half of the plane",
                        feasibleRegion: "The feasible region is a convex polygon formed by the intersection of all half-planes",
                        vertexTheorem: "The maximum and minimum of any linear objective function occur at vertices of the feasible region",
                        testPoint: "The origin (0,0) is a convenient test point unless it lies on a boundary line",
                        solidDashed: "The boundary line type (solid/dashed) depends on whether equality is included in the inequality"
                    },
                    conclusions: [
                        "Linear inequalities divide the plane into two regions; the solution is a half-plane",
                        "Systems of inequalities define a feasible region — the set of all points satisfying every constraint",
                        "In linear programming, the optimal value of a linear objective function always occurs at a vertex of the feasible region",
                        "This powerful theorem means we only need to check a finite number of points (the vertices) rather than all infinitely many feasible points",
                        "Real-world problems from logistics to finance can be modelled and solved using this technique"
                    ],
                    extensions: [
                        "Research the Simplex Algorithm — how does it navigate from vertex to vertex to find the optimum?",
                        "Investigate integer linear programming: what changes when variables must be whole numbers?",
                        "Model a real school timetabling or catering problem as a system of inequalities"
                    ],
                    realWorldConnections: [
                        "Manufacturing: optimising production mix subject to machine hours and material limits",
                        "Airline seating: maximising revenue by pricing different seat categories under capacity constraints",
                        "Diet planning: meeting nutritional requirements at minimum cost",
                        "Investment portfolio: maximising return subject to risk constraints",
                        "Hospital staffing: scheduling nurses under legal working hour limits while minimising cost"
                    ]
                }
            },

            // ========================================
            // PRACTICAL 7: GRAPH INTERPRETATION INVESTIGATION
            // ========================================

            graph_interpretation_investigation: {
                name: "Graph Interpretation Investigation: Reading Motion in Graphs",
                relatedTopics: ['graph_interpretation', 'gradient', 'linear_graphs', 'quadratic_graphs'],
                category: 'graphs',
                historicalBackground: {
                    physicist: "Galileo Galilei (1564–1642) was the first to systematically represent motion mathematically — leading to the development of motion graphs",
                    newton: "Isaac Newton (1643–1727) used the concept of instantaneous rate of change (gradient at a point on a curve) to develop differential calculus",
                    modernApplication: "Motion-capture technology, GPS tracking, accelerometers in smartphones, and autonomous vehicles all use mathematical graph interpretation in real time",
                    significance: "The distance-time and speed-time graph remains one of the most powerful tools in physics, engineering, and transport planning"
                },
                practicalMathematics: {
                    title: "Graph Interpretation Investigation: The Story Every Graph Tells",
                    hypothesis: "Every feature of a motion graph (gradient, area, intercepts, shape) carries precise physical meaning, and a complete description of a journey can be both read from and encoded into a distance-time or speed-time graph",
                    purpose: "Develop the skill of reading and creating motion graphs; connect gradient to speed, area to distance, and graph shape to the nature of motion",
                    materials: [
                        "Large graph paper",
                        "Ruler",
                        "Coloured pencils",
                        "Stopwatch",
                        "Measuring tape",
                        "Distance-time graph interpretation cards",
                        "Speed-time graph calculation worksheets"
                    ],
                    procedure: [
                        "PART A: Physical Walk — Creating a Real Distance-Time Graph",
                        "1. In pairs: one student walks a scripted journey; the other records time and distance",
                        "   Script: Stand still 10s; walk 12m in 8s; stand still 5s; walk back 6m in 4s; stand still 3s; walk 9m in 6s",
                        "2. Record all data in a table (time, distance from start)",
                        "3. Plot the distance-time graph",
                        "4. Calculate the speed during each moving section (gradient of each line segment)",
                        "5. Identify which section shows the fastest speed and explain why",
                        "",
                        "PART B: Reading Given Distance-Time Graphs",
                        "6. Given a distance-time graph of a car journey, answer:",
                        "   (a) When is the car stationary? How can you tell?",
                        "   (b) Calculate the speed during each moving section",
                        "   (c) What is the total distance travelled? What is the displacement?",
                        "   (d) During which section is the car moving fastest? How can you tell from the graph?",
                        "",
                        "PART C: Speed-Time Graph Analysis",
                        "7. Draw the speed-time graph for:",
                        "   0–5s: accelerates from 0 to 30 m/s",
                        "   5–15s: constant speed 30 m/s",
                        "   15–20s: decelerates from 30 m/s to 0",
                        "8. Calculate the acceleration during 0–5s (gradient = 30/5 = 6 m/s²)",
                        "9. Calculate distance for each section using area under graph:",
                        "   0–5s: triangle area = ½ × 5 × 30 = 75 m",
                        "   5–15s: rectangle = 10 × 30 = 300 m",
                        "   15–20s: triangle = ½ × 5 × 30 = 75 m",
                        "   Total: 450 m",
                        "",
                        "PART D: Real-World Graph Interpretation",
                        "10. Study graphs provided showing:",
                        "    (a) Population of a city 1900–2020",
                        "    (b) Oil price 1980–2020",
                        "    (c) Global average temperature 1850–2020",
                        "11. For each, identify: type of relationship, periods of rapid change, periods of stability, turning points",
                        "12. Write a 3–5 sentence interpretation for each graph describing key trends and anomalies"
                    ],
                    dataTable: [
                        ["Time (s)", "Distance (m)", "Section", "Gradient (speed)", "Interpretation"],
                        ["0", "0", "—", "—", "Starting position"],
                        ["10", "0", "Standing still", "0 m/s", "Stationary"],
                        ["18", "12", "Moving forward", "12/8 = 1.5 m/s", "Walking away"],
                        ["23", "12", "Standing still", "0 m/s", "Resting"],
                        ["27", "6", "Moving backward", "−6/4 = −1.5 m/s", "Walking back"],
                        ["30", "6", "Standing still", "0 m/s", "Resting"],
                        ["36", "15", "Moving forward", "9/6 = 1.5 m/s", "Walking away"]
                    ],
                    observations: {
                        horizontalMeansStationary: "Any horizontal section on a D-T graph means the object is not moving",
                        gradientMeansSpeed: "The gradient of a D-T graph directly gives the speed",
                        negativeGradient: "Negative gradient on D-T graph means returning toward the starting point",
                        areaUnderSpeedTime: "Area under a speed-time graph equals the distance travelled — not the displacement",
                        curvedDT: "A curved distance-time graph indicates changing speed (acceleration or deceleration)"
                    },
                    conclusions: [
                        "Every feature of a graph carries mathematical meaning: gradient, area, intercepts, and shape all encode specific information",
                        "Distance-time graphs: gradient = speed; horizontal = stationary; negative gradient = returning",
                        "Speed-time graphs: gradient = acceleration; area under graph = distance travelled",
                        "Graph reading is a reversible skill: a journey description can be drawn as a graph, and a graph can be narrated as a journey",
                        "This skill extends beyond motion to any changing quantity: interpreting economic, biological, or climate data"
                    ],
                    extensions: [
                        "Investigate velocity-time graphs and the distinction between speed (scalar) and velocity (vector)",
                        "Use a motion sensor connected to a graphing calculator to capture real-time D-T graphs",
                        "Research how black box flight recorders store speed-time and acceleration data"
                    ],
                    realWorldConnections: [
                        "Transport planning: distance-time graphs model bus and train timetables",
                        "Physics: kinematics equations are derived from area and gradient of motion graphs",
                        "Sports science: speed-time graphs analyse sprinters' acceleration profiles",
                        "Environmental science: temperature-time graphs reveal climate patterns",
                        "Finance: stock price graphs use identical interpretation techniques"
                    ]
                }
            }
        };

        this.linkPracticalsToTopics();
    }

    linkPracticalsToTopics() {
        Object.entries(this.mathematicsPracticals).forEach(([practicalId, practical]) => {
            practical.relatedTopics.forEach(topicId => {
                if (this.mathematicsTopics[topicId]) {
                    if (!this.mathematicsTopics[topicId].relatedPracticals) {
                        this.mathematicsTopics[topicId].relatedPracticals = [];
                    }
                    this.mathematicsTopics[topicId].relatedPracticals.push({
                        id: practicalId,
                        name: practical.name,
                        category: practical.category
                    });
                }
            });
        });
    }

    initializeMisconceptionDatabase() {
        this.commonMisconceptions = {
            cartesian_plane: {
                'Coordinate Order': [
                    'Reversing x and y: plotting (y, x) instead of (x, y) — x always comes first',
                    'Confusing which axis is x and which is y — x is horizontal (across), y is vertical (up)',
                    'Starting from the wrong position: beginning at a previous point rather than the origin',
                    'Forgetting to include the direction (sign) — negative x is left, not right'
                ],
                'Quadrant Identification': [
                    'Numbering quadrants clockwise (I top-left) instead of anticlockwise (I top-right)',
                    'Claiming a point on an axis is in a quadrant — axis points belong to no quadrant'
                ]
            },

            plotting_points: {
                'Order of Operations': [
                    'Moving vertically first, then horizontally (should always be horizontal first, then vertical)',
                    'Forgetting to start from the origin for each new point',
                    'Using relative movement (moving from last point) instead of absolute positioning from origin'
                ],
                'Signs and Direction': [
                    'Treating negative x as moving down rather than left',
                    'Plotting (−3, 5) in Quadrant I by ignoring the negative sign'
                ]
            },

            gradient: {
                'Formula Inversion': [
                    'Calculating run/rise instead of rise/run: using Δx/Δy instead of Δy/Δx',
                    'Inconsistent sign: subtracting coordinates in opposite orders for numerator and denominator'
                ],
                'Interpretation Errors': [
                    'Thinking a larger gradient always means steeper — must compare magnitudes, not signed values',
                    'Confusing gradient 0 (horizontal) with undefined gradient (vertical)',
                    'Thinking all negative gradients are steeper than positive gradients — ignores magnitude'
                ],
                'Perpendicular Lines': [
                    'Thinking perpendicular gradient is the negative gradient rather than the negative reciprocal',
                    'Applying the −1/m rule to parallel lines instead of perpendicular'
                ]
            },

            linear_graphs: {
                'y = mx + c Identification': [
                    'Confusing m and c: identifying the gradient as c and y-intercept as m',
                    'Reading y-intercept as x-intercept from a graph',
                    'Thinking the y-intercept is where the line starts — the y-intercept is where x = 0, which may not be the leftmost point'
                ],
                'Drawing Errors': [
                    'Using only two points without a third check — single arithmetic error will go undetected',
                    'Connecting points with a series of short straight segments rather than one smooth, extended straight line',
                    'Drawing the line only between plotted points instead of extending through and beyond them'
                ],
                'Special Lines': [
                    'Confusing y = 3 (horizontal line) with x = 3 (vertical line)',
                    'Thinking y = 0 is the y-axis — it is the x-axis',
                    'Incorrectly applying gradient formula to vertical lines (gradient is undefined, not zero)'
                ]
            },

            exponential_graphs: {
                'Curve Shape': [
                    'Drawing a J-curve that eventually dips below zero — exponential graphs never cross the x-axis',
                    'Confusing exponential growth with quadratic growth — they look similar at small x but diverge dramatically',
                    'Drawing a straight line for an exponential function from a rough table of values'
                ],
                'Asymptote': [
                    'Drawing the curve touching or crossing the x-axis instead of approaching it asymptotically',
                    'Not extending the curve far enough to show the asymptotic approach'
                ],
                'y-Intercept': [
                    'Calculating y at x=0 incorrectly — for y = aˣ, a⁰ = 1 always, not 0',
                    'For y = k·aˣ, confusing the y-intercept as 1 rather than k'
                ]
            },

            quadratic_graphs: {
                'Parabola Shape': [
                    'Drawing a V-shape instead of a smooth U-shaped curve',
                    'Connecting the vertex to the intercepts with straight lines instead of a curved parabola',
                    'Making the two arms asymmetric — parabolas are always symmetric about the axis of symmetry'
                ],
                'Vertex and Axis of Symmetry': [
                    'Using x = −b/2 instead of x = −b/(2a) for the axis of symmetry',
                    'Forgetting to substitute back to find the y-coordinate of the vertex',
                    'Confusing the vertex of y = a(x−h)²+k as (−h, k) rather than (h, k)'
                ],
                'Discriminant': [
                    'Using b² − 4c instead of b² − 4ac — forgetting to multiply by a',
                    'Thinking a negative discriminant means the parabola does not exist — it just has no x-intercepts',
                    'Confusing one repeated root (tangent) with two separate roots'
                ]
            },

            inequality_regions: {
                'Shading Direction': [
                    'Shading the wrong side without testing a point — always test a point before shading',
                    'Assuming y > mx + c always shades above — this is true but students must test to confirm with rearranged inequalities',
                    'Shading the line itself when inequality is strict (< or >)'
                ],
                'Boundary Line': [
                    'Drawing a solid line for strict inequalities (< or >) — must be dashed',
                    'Drawing a dashed line for ≤ or ≥ — boundary is included, must be solid'
                ],
                'Multiple Inequalities': [
                    'Shading everything and trying to read the feasible region — use hatching per inequality and find the overlap',
                    'Not checking vertices satisfy ALL constraints simultaneously'
                ]
            },

            graph_interpretation: {
                'Distance vs Displacement': [
                    'Confusing total distance travelled with displacement (final position from start)',
                    'Thinking area under a velocity-time graph gives distance when it actually gives displacement (directed)'
                ],
                'Gradient as Speed': [
                    'Forgetting that negative gradient on a D-T graph means returning, not impossible',
                    'Using the steepness visually without calculating the numerical gradient — steepness depends on axis scale'
                ],
                'Area Calculations': [
                    'Using length × height for triangular sections instead of ½ × base × height',
                    'Forgetting to add areas of all sections for total distance'
                ]
            }
        };

        this.clarificationStrategies = {
            physical_demonstration: {
                method: 'Use physical movement, ramps, or demonstrations to make abstract concepts tangible',
                effectiveness: 'Very high for gradient, distance-time, and Cartesian coordinates'
            },
            test_point_habit: {
                method: 'Always test a point when shading inequality regions — make it a non-negotiable routine',
                effectiveness: 'Essential for inequality region shading errors'
            },
            technology_check: {
                method: 'Use graphing software (Desmos, GeoGebra) to immediately verify hand-drawn graphs',
                effectiveness: 'High for all graph drawing; allows rapid feedback and exploration'
            },
            table_of_values: {
                method: 'Always generate at least 5 points (more for quadratic/exponential) before drawing',
                effectiveness: 'High for curve shape errors; prevents V-shape parabolas and straight exponentials'
            },
            axis_of_symmetry: {
                method: 'For parabolas, always find axis of symmetry first and use symmetry to generate symmetric point pairs',
                effectiveness: 'Very high for parabola asymmetry errors'
            },
            gradient_formula_drill: {
                method: 'Consistently use m = (y₂−y₁)/(x₂−x₁) written vertically (change in y over change in x)',
                effectiveness: 'High for rise/run inversion errors'
            }
        };
    }

    initializeMetacognitivePrompts() {
        this.metacognitivePrompts = {
            beforeLearning: [
                "What do you already know about {topic}?",
                "Can you sketch what you think the graph of {topic} looks like from memory?",
                "How does {topic} connect to graphs you have already studied?",
                "What real-world situation do you think {topic} might model?"
            ],
            duringLearning: [
                "Does this graph make sense? What should happen as x gets very large?",
                "How does the equation change connect to the change you see in the graph?",
                "Can you describe what the graph is doing in plain English?",
                "What would change on the graph if you changed the coefficient in the equation?",
                "Can you verify your graph by substituting a point back into the equation?"
            ],
            afterLearning: [
                "What are the key features of a {topic} graph and how do you find each one?",
                "What distinguishes a {topic} graph from other graph types you have studied?",
                "What mistakes are you most likely to make when drawing a {topic} graph?",
                "How would you explain the meaning of gradient/vertex/asymptote to a student who missed the lesson?",
                "What is the most important check you should always do after drawing any graph?"
            ],
            problemSolving: [
                "What type of graph does this equation produce? How do you know?",
                "Have you generated enough points in a table of values before drawing?",
                "Have you labelled all key features: intercepts, vertex, asymptote, gradient?",
                "Does your graph extend beyond the plotted points, or does it stop abruptly?",
                "Have you verified at least one point by substituting back into the equation?"
            ]
        };
    }

    initializeContextualScenarios() {
        this.contextualScenarios = {
            cartesian_plane: [
                {
                    scenario: "City Street Grid Navigation",
                    context: "A delivery driver navigates a city laid out in a perfect grid. The depot is at the intersection of Main Street (x-axis) and Central Avenue (y-axis). Each block is 100 metres.",
                    problem: "The driver must deliver to coordinates (3, −2), (−4, 1), (0, 5), and (−2, −3). Which deliveries are north of the depot? Which are east?",
                    application: "Positive y-coordinates are north of the x-axis (depot row). Positive x-coordinates are east. (3,−2): south-east; (−4,1): north-west; (0,5): due north; (−2,−3): south-west.",
                    question: "What is the total distance driven if the driver visits all four in order and returns to the depot, moving only along grid lines?",
                    answer: "Manhattaan distances: |3|+|−2|=5 + |−4|+|1|=5 + |0|+|5|=5 + |−2|+|−3|=5 + return to depot from (−2,−3): |2|+|3|=5. Total = 25 blocks = 2500 m",
                    extension: "The Cartesian coordinate system is the mathematical foundation of all mapping and navigation systems, including GPS."
                },
                {
                    scenario: "Video Game Level Design",
                    context: "A game designer places game objects on a 20×20 Cartesian grid. The player starts at the origin. Enemies are at (−5, 3), (7, −2), and (4, 6). A treasure chest is at (−8, −5).",
                    problem: "In which quadrant is each enemy? What ordered pair describes the treasure chest?",
                    application: "(−5,3): Quadrant II; (7,−2): Quadrant IV; (4,6): Quadrant I. Treasure: (−8,−5) in Quadrant III.",
                    question: "A portal connects (3, 4) to its reflection in the y-axis. Where does the portal exit?",
                    answer: "Reflection in y-axis: negate the x-coordinate → (−3, 4)",
                    extension: "Every sprite, tile, and collision box in a 2D video game is positioned using Cartesian coordinates updated many times per second."
                }
            ],

            plotting_points: [
                {
                    scenario: "Wildlife Tracking",
                    context: "A conservation ranger tracks a leopard using GPS coordinates recorded every hour. The coordinates are (in km from base camp): (2, 3), (5, 7), (8, 4), (6, 1), (3, 2).",
                    problem: "Plot the leopard's path and estimate the total distance travelled.",
                    application: "Plot each point and join with line segments. Estimate each segment length using Pythagoras: d = √((Δx)² + (Δy)²)",
                    question: "Which hour-to-hour journey was longest? Estimate the total path length.",
                    answer: "Segment 1→2: √(9+16)=5 km; 2→3: √(9+9)≈4.2 km; 3→4: √(4+9)≈3.6 km; 4→5: √(9+1)≈3.2 km. Total ≈ 16 km.",
                    extension: "Real GPS tracking systems plot animal movements as coordinate paths — exactly what was done here, but with thousands of points."
                }
            ],

            gradient: [
                {
                    scenario: "Accessibility Ramp Design",
                    context: "Building regulations specify that wheelchair ramps must have a maximum gradient of 1:12 (rise 1 cm for every 12 cm of run). A building entrance is 45 cm above street level.",
                    problem: "What is the minimum horizontal length of a ramp that meets building regulations?",
                    application: "Maximum gradient = 1/12. Required: 45/(run) ≤ 1/12. Minimum run = 45 × 12 = 540 cm = 5.4 m.",
                    question: "If the available space only allows 4 m of horizontal run, by how much does the ramp fail to meet regulations?",
                    answer: "Gradient with 4 m run: 0.45/4 = 0.1125 = 1:8.9. Maximum allowed: 1:12. The gradient is too steep — would need a landing platform to break the ramp into sections.",
                    extension: "This directly uses the gradient formula. Engineering standards worldwide are expressed as gradient ratios — mathematical language applied to safety design."
                },
                {
                    scenario: "Ski Slope Grading",
                    context: "Ski slopes are graded by gradient: green (<15% gradient), blue (15%–25%), red (25%–40%), black (>40%). A ski run descends 180 m vertically over 500 m horizontal distance.",
                    problem: "Calculate the gradient and identify the slope grade.",
                    application: "Gradient = 180/500 = 0.36 = 36%. This falls in the 25%–40% range → Red (difficult) slope.",
                    question: "A beginner needs a green slope. What is the maximum allowable vertical drop for a 400 m horizontal run?",
                    answer: "Maximum gradient = 15% = 0.15. Maximum drop = 0.15 × 400 = 60 m.",
                    extension: "Gradient (expressed as percentage) is how all ski slopes, road signs, and railway gradients are specified worldwide."
                }
            ],

            linear_graphs: [
                {
                    scenario: "Mobile Phone Tariff Decision",
                    context: "A student is choosing between two phone plans: Plan A costs £15/month plus £0.05 per minute. Plan B costs £5/month plus £0.12 per minute. She wants to make 120 minutes of calls per month.",
                    problem: "Model both plans as linear equations and determine which is cheaper for 120 minutes.",
                    application: "Plan A: y = 0.05x + 15. Plan B: y = 0.12x + 5. At x = 120: A = £21; B = £19.40. Plan B is cheaper.",
                    question: "Find the breakeven point where both plans cost the same. Below this usage, which plan is cheaper?",
                    answer: "0.05x + 15 = 0.12x + 5 → 10 = 0.07x → x ≈ 143 minutes. Below 143 min: Plan B cheaper; above: Plan A cheaper.",
                    extension: "Every pricing decision involving a fixed charge plus a variable rate is a linear equation — this applies to utilities, subscriptions, and financial products."
                },
                {
                    scenario: "Temperature Conversion",
                    context: "A UK student is visiting the USA and needs to understand Fahrenheit temperatures on weather forecasts.",
                    problem: "Given the conversion formula F = 1.8C + 32, draw the conversion graph and use it to convert key temperatures.",
                    application: "Plot the straight line. Key conversions: 0°C = 32°F (freezing); 100°C = 212°F (boiling); 37°C = 98.6°F (body temperature); −40°C = −40°F (the unique equal point).",
                    question: "What does the gradient 1.8 tell you about the relationship between the two scales?",
                    answer: "For every 1°C increase, temperature increases by 1.8°F. The scales change at different rates — Celsius degrees are larger than Fahrenheit degrees.",
                    extension: "The crossing point at −40° (where F = C) is found by solving F = C in the conversion equation: C = 1.8C + 32 → −0.8C = 32 → C = −40."
                }
            ],

            exponential_graphs: [
                {
                    scenario: "Compound Interest Investment",
                    context: "A grandparent invests £2000 in an account earning 6% compound interest per year for their grandchild. The grandchild wants to know when the investment will double.",
                    problem: "Model the investment as y = 2000 × (1.06)ᵗ and find the doubling time.",
                    application: "Plot the exponential curve. Doubling time: 2000 × (1.06)ᵗ = 4000 → (1.06)ᵗ = 2 → t = log(2)/log(1.06) ≈ 11.9 years.",
                    question: "Using the Rule of 72 (doubling time ≈ 72/interest rate%), estimate the doubling time and compare with the exact answer.",
                    answer: "Rule of 72: 72/6 = 12 years (approximate). Exact: 11.9 years. Very close — the Rule of 72 is a remarkably accurate mental arithmetic shortcut.",
                    extension: "The Rule of 72 is used by financial advisors and economists worldwide as a quick exponential growth estimator."
                },
                {
                    scenario: "Medicine Dosage and Half-Life",
                    context: "A patient takes 400 mg of a drug with a half-life of 4 hours (concentration halves every 4 hours). A doctor needs to know when the concentration falls below 25 mg to schedule the next dose.",
                    problem: "Model the concentration as C = 400 × (0.5)^(t/4) and find when C = 25 mg.",
                    application: "After 4h: 200 mg; 8h: 100 mg; 12h: 50 mg; 16h: 25 mg. The concentration falls to 25 mg after 16 hours.",
                    question: "Plot the concentration graph. What type of curve is it and what is the horizontal asymptote?",
                    answer: "Exponential decay curve. Horizontal asymptote: C = 0 (concentration approaches zero but never reaches it mathematically, though in practice it becomes negligible).",
                    extension: "Every drug dosage schedule is based on exponential decay modelling — this mathematics directly affects patient safety."
                }
            ],

            quadratic_graphs: [
                {
                    scenario: "Football Projectile Path",
                    context: "A footballer kicks a ball and its height is modelled by h = −0.05d² + 1.5d, where h is height in metres and d is horizontal distance in metres.",
                    problem: "Find the maximum height, where it occurs, and the total horizontal range of the kick.",
                    application: "Vertex: d = −1.5/(2 × −0.05) = 15 m. Max height = −0.05(225) + 1.5(15) = −11.25 + 22.5 = 11.25 m. Range: solve h=0 → d(−0.05d+1.5)=0 → d=0 or d=30 m.",
                    question: "A goalkeeper stands at d = 25 m. How high is the ball when it reaches them?",
                    answer: "h = −0.05(625) + 1.5(25) = −31.25 + 37.5 = 6.25 m. The ball is 6.25 m high — well above goalkeeper reach.",
                    extension: "All projectile paths follow parabolic trajectories due to constant gravitational acceleration — the mathematics behind ballistics, sports science, and space engineering."
                },
                {
                    scenario: "Profit Maximisation",
                    context: "A market stall sells handmade candles. Research shows that daily profit is P = −2x² + 40x − 100 pounds, where x is the selling price in pounds.",
                    problem: "Find the price that maximises profit and the maximum profit.",
                    application: "Vertex: x = −40/(2×−2) = 10. Max profit = −2(100) + 40(10) − 100 = −200 + 400 − 100 = £100.",
                    question: "For what range of prices is the stall making a profit (P > 0)?",
                    answer: "Solve −2x²+40x−100 = 0 → x²−20x+50 = 0 → x = (20 ± √200)/2 = 10 ± 5√2 ≈ 2.93 and 17.07. Profitable for £2.93 < x < £17.07.",
                    extension: "Profit maximisation using quadratic functions is standard practice in economics — the vertex gives the optimal price point."
                }
            ],

            inequality_regions: [
                {
                    scenario: "School Tuck Shop Budget",
                    context: "A school tuck shop sells sandwiches (s) for £2 and drinks (d) for £1. The tuck shop has constraints: at most 50 items in total (s + d ≤ 50), at most 30 sandwiches (s ≤ 30), and at least 10 drinks (d ≥ 10). They want to maximise revenue R = 2s + d.",
                    problem: "Draw the feasible region, find all vertices, and determine the optimal stock to maximise revenue.",
                    application: "Draw boundaries: s+d=50, s=30, d=10. Feasible region vertices: (30,10), (30,20), (20,30), (0,50) — check which satisfy all constraints. Evaluate R at each valid vertex.",
                    question: "At which vertex is revenue maximised? What is the maximum revenue?",
                    answer: "At (30,20): R = 60+20 = £80. At (20,30): R = 40+30 = £70. Maximum at (30,20): £80 — 30 sandwiches and 20 drinks.",
                    extension: "This is a small linear programming problem. Industrial versions of this with thousands of variables and constraints are solved daily by logistics companies."
                }
            ],

            graph_interpretation: [
                {
                    scenario: "Cycling Race Analysis",
                    context: "A cyclist completes a 60 km race. A distance-time graph shows: 0–1h: straight line to 20 km; 1–1.5h: horizontal; 1.5–3h: straight line to 60 km.",
                    problem: "Calculate the speed in each phase and describe the race in words.",
                    application: "Phase 1: 20 km in 1 h = 20 km/h. Phase 2: 0 km/h (stationary — probably a food stop). Phase 3: 40 km in 1.5 h ≈ 26.7 km/h.",
                    question: "What was the cyclist's average speed for the entire 60 km race (excluding the stop)?",
                    answer: "Total time moving = 1 + 1.5 = 2.5 h. Total distance = 60 km. Average speed = 60/2.5 = 24 km/h.",
                    extension: "Professional cycling analytics teams analyse race data using exactly these graph-reading techniques, identifying tactical moments from changes in gradient."
                },
                {
                    scenario: "Bus Journey Planning",
                    context: "A distance-time graph shows two buses on the same route: Bus A leaves town at 09:00; Bus B leaves 30 minutes later but travels faster. The graph shows them meeting at a specific point.",
                    problem: "From the graph, determine where and when the buses meet, and which arrives at the destination first.",
                    application: "Read intersection point of the two lines to find meeting time and distance. The steeper line (Bus B) reaches the destination first.",
                    question: "If Bus A travels at 40 km/h and Bus B at 60 km/h, write equations for each and find when Bus B overtakes Bus A.",
                    answer: "Bus A: d = 40t. Bus B starts 0.5h later: d = 60(t − 0.5). Setting equal: 40t = 60t − 30 → 20t = 30 → t = 1.5h after 09:00 = 10:30. Distance = 60 km.",
                    extension: "Transport planners use distance-time graphs to model timetabling and identify conflict points where faster services overtake slower ones."
                }
            ]
        };
    }

    initializeAssessmentRubrics() {
        this.assessmentRubrics = {
            knowledgeLevel: {
                remember: {
                    description: "Recall graph vocabulary, formulas, and feature names",
                    verbs: ["State", "Write", "Label", "Recall", "Name", "Identify"],
                    example: "State the formula for gradient and label the x-axis, y-axis, and origin on a blank grid"
                },
                understand: {
                    description: "Explain why graph features have their values; connect equation to graph behaviour",
                    verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect"],
                    example: "Explain why changing the gradient in y = mx + c does not affect the y-intercept"
                },
                apply: {
                    description: "Draw graphs, calculate gradients, identify features from equations or data",
                    verbs: ["Draw", "Plot", "Calculate", "Find", "Determine", "Shade"],
                    example: "Draw the graph of y = −2x + 5 for −2 ≤ x ≤ 4, labelling gradient and intercepts"
                },
                analyze: {
                    description: "Identify graph type from equation; analyse features; compare multiple graphs",
                    verbs: ["Identify", "Classify", "Compare", "Analyse", "Deduce"],
                    example: "Without drawing, determine the vertex, y-intercept, and number of x-intercepts for y = 2x² − 8x + 6"
                },
                evaluate: {
                    description: "Assess correctness of graphs; critique interpretations; verify using multiple methods",
                    verbs: ["Evaluate", "Critique", "Verify", "Justify", "Judge"],
                    example: "A student shades below the line for y > 3x − 2. Evaluate this and correct if wrong."
                },
                create: {
                    description: "Construct equations from graph features; design graphs with specified properties; model real situations",
                    verbs: ["Construct", "Design", "Model", "Formulate", "Derive"],
                    example: "Write the equation of a parabola with vertex (2, −3) that passes through (0, 5)"
                }
            },

            understandingLevels: {
                novice: {
                    characteristics: [
                        "Can plot given coordinate pairs with support",
                        "Recognises the Cartesian plane but confuses x and y axes",
                        "Cannot yet calculate gradient independently"
                    ],
                    support: [
                        "Use colour-coded axes and mnemonic for coordinate order",
                        "Provide completed tables of values to reduce cognitive load",
                        "Physical manipulation: walk on a life-size coordinate grid drawn on the floor"
                    ]
                },
                developing: {
                    characteristics: [
                        "Draws straight-line graphs from y = mx + c with occasional errors",
                        "Calculates gradient from two points but sometimes inverts rise and run",
                        "Recognises parabola shape but cannot locate vertex algebraically"
                    ],
                    support: [
                        "Reinforce gradient formula vertically (Δy over Δx) to prevent inversion",
                        "Introduce vertex formula and practise with multiple examples",
                        "Use technology (Desmos) to check hand-drawn graphs immediately"
                    ]
                },
                proficient: {
                    characteristics: [
                        "Draws all graph types accurately with all features labelled",
                        "Determines equation of a line or parabola from a graph",
                        "Shades inequality regions correctly using test points"
                    ],
                    support: [
                        "Multi-step problems requiring multiple graph types on same axes",
                        "Real-world modelling: write equations from contextual data",
                        "Introduce graph transformations systematically"
                    ]
                },
                expert: {
                    characteristics: [
                        "Connects graph features to roots, turning points, and behaviour of functions",
                        "Interprets complex real-world graphs (climate data, economic trends)",
                        "Applies linear programming using inequality regions"
                    ],
                    support: [
                        "Investigate calculus connections: gradient of tangent to a curve at a point",
                        "Research how machine learning uses gradient descent",
                        "Analyse real datasets and model with appropriate function types"
                    ]
                }
            }
        };

        this.assessmentQuestions = {
            cartesian_plane: {
                remember: "Label the x-axis, y-axis, origin, and four quadrants on a blank Cartesian plane",
                understand: "Explain why the order in an ordered pair (x, y) matters — why is (3, 5) ≠ (5, 3)?",
                apply: "Plot and label the points A(4, −2), B(−3, 5), C(0, −4), D(−6, −1) on the Cartesian plane",
                analyze: "Without plotting, state the quadrant of (−45, 12) and explain your reasoning",
                evaluate: "A student plots (−3, 4) in Quadrant IV. Identify and explain the error.",
                create: "Design a shape using exactly 6 points, one in each quadrant and one on each axis. State all coordinates."
            },
            plotting_points: {
                remember: "Describe in steps how to plot the point (−4, 3) on the Cartesian plane",
                understand: "Explain why generating a table of values before drawing a graph is essential",
                apply: "Generate a table of values for y = 3x − 2 for x = −2, −1, 0, 1, 2 and plot all five points",
                analyze: "Three students each plot (2, 5) at different positions on a grid. How can only one be correct?",
                evaluate: "A table of values for y = x² gives (−2, 4), (−1, 1), (0, 0), (1, 1), (2, 4). Verify each entry.",
                create: "Create a set of 8 coordinate pairs that, when plotted and joined in order, form a recognisable letter or shape"
            },
            gradient: {
                remember: "State the formula for gradient using rise, run, and coordinate notation",
                understand: "Explain what a negative gradient means in terms of the direction of the line",
                apply: "Calculate the gradient of the line through (−1, 6) and (4, −4)",
                analyze: "A line has gradient −3. Without drawing, determine the gradient of a parallel and a perpendicular line",
                evaluate: "A student calculates the gradient of a line through (2, 8) and (5, 2) as 2. Evaluate and correct.",
                create: "Write coordinates of two points that produce a gradient of exactly 3/4"
            },
            linear_graphs: {
                remember: "State the meaning of m and c in the equation y = mx + c",
                understand: "Explain why parallel lines have the same gradient but different y-intercepts",
                apply: "Draw the graph of y = −3x + 6 for −1 ≤ x ≤ 3, labelling the gradient, y-intercept, and x-intercept",
                analyze: "Without drawing, state the gradient, y-intercept, and x-intercept of 2x − 4y = 8",
                evaluate: "A student says the lines y = 2x + 3 and y = −2x + 3 are parallel. Evaluate this claim.",
                create: "Write the equation of a straight line through (1, 5) that is perpendicular to y = 2x + 7"
            },
            exponential_graphs: {
                remember: "State three key features of the graph y = 2ˣ",
                understand: "Explain why the graph of y = 2ˣ never crosses the x-axis",
                apply: "Complete a table of values for y = 3ˣ for x = −2 to x = 3 and draw the graph",
                analyze: "Compare the graphs of y = 2ˣ and y = (1/2)ˣ — how are they related geometrically?",
                evaluate: "A student says y = 2ˣ has a y-intercept of 0. Evaluate this claim and correct if needed.",
                create: "Write an exponential equation for a quantity that starts at 500 and doubles every 3 years"
            },
            quadratic_graphs: {
                remember: "State the coordinates of the y-intercept and the formula for the axis of symmetry of y = ax² + bx + c",
                understand: "Explain what the discriminant b² − 4ac tells you about the graph without calculating roots",
                apply: "Sketch y = x² − 6x + 8, showing the vertex, y-intercept, x-intercepts, and axis of symmetry",
                analyze: "Without drawing, determine whether y = −x² + 4x − 5 has any x-intercepts. Show your reasoning.",
                evaluate: "A student identifies the vertex of y = (x−3)² + 5 as (−3, 5). Evaluate and correct.",
                create: "Write the equation of a downward-opening parabola with vertex (2, 7) that passes through (0, 3)"
            },
            inequality_regions: {
                remember: "Explain the difference between a solid and dashed boundary line in an inequality graph",
                understand: "Explain why you need to test a point to determine which side of the line to shade",
                apply: "Draw and shade the region representing y ≤ −2x + 4, labelling the boundary line",
                analyze: "For the system x ≥ 0, y ≥ 0, x + y ≤ 5, identify all vertices of the feasible region",
                evaluate: "A student shades above the line for y ≤ 2x − 1. Evaluate this using the origin as a test point.",
                create: "Write a system of three inequalities whose feasible region is a triangle with vertices at (0,0), (4,0), (0,3)"
            },
            graph_interpretation: {
                remember: "State what the gradient of a distance-time graph represents",
                understand: "Explain what a horizontal section on a distance-time graph means about the journey",
                apply: "Calculate the speed during each section of a journey from a given distance-time graph",
                analyze: "A speed-time graph shows a straight line from (0,0) to (6, 30). Describe and quantify the motion.",
                evaluate: "A student says the area under a distance-time graph gives the speed. Evaluate this claim.",
                create: "Draw a distance-time graph for a journey: walk 6 km at 4 km/h, rest 30 min, cycle 12 km at 24 km/h"
            }
        };
    }

    // ========================================
    // TOPIC HANDLERS
    // ========================================

    handleCartesianPlane(problem) {
        const input = (problem || '').toString().toLowerCase();
        const content = {
            topic: "Cartesian Plane",
            category: 'graphs',
            summary: "The Cartesian plane is the foundational coordinate system for all graph work. Two perpendicular number lines (axes) create a grid where every point has a unique address — an ordered pair (x, y).",
            definitions: {
                cartesianPlane: {
                    definition: "A two-dimensional plane defined by a horizontal x-axis and vertical y-axis intersecting at the origin (0, 0)",
                    namedAfter: "René Descartes (Cartesius in Latin)"
                },
                orderedPair: {
                    definition: "A pair of numbers (x, y) where x gives horizontal position and y gives vertical position",
                    note: "Order is critical: (3, 5) ≠ (5, 3)"
                },
                quadrants: {
                    I: "x > 0, y > 0 (top right)",
                    II: "x < 0, y > 0 (top left)",
                    III: "x < 0, y < 0 (bottom left)",
                    IV: "x > 0, y < 0 (bottom right)"
                }
            },
            axisConventions: {
                xAxis: "Horizontal; positive values right, negative left; measures abscissa",
                yAxis: "Vertical; positive values up, negative down; measures ordinate",
                origin: "(0, 0); intersection of both axes",
                scale: "Each axis must be uniformly scaled; intervals must be equal"
            },
            examples: [
                { point: "(3, 5)", location: "Quadrant I", description: "Right 3, up 5" },
                { point: "(−4, 2)", location: "Quadrant II", description: "Left 4, up 2" },
                { point: "(−3, −6)", location: "Quadrant III", description: "Left 3, down 6" },
                { point: "(5, −1)", location: "Quadrant IV", description: "Right 5, down 1" },
                { point: "(0, 4)", location: "On y-axis", description: "No horizontal displacement" },
                { point: "(7, 0)", location: "On x-axis", description: "No vertical displacement" }
            ],
            commonErrors: [
                { error: "Reversing x and y: plotting (y, x)", fix: "x always first — 'go along the corridor before going up the stairs'" },
                { error: "Moving from previous point rather than origin", fix: "Always start from origin (0, 0) for each new point" },
                { error: "Ignoring signs: treating −3 as 3", fix: "Negative x is left; negative y is down — signs indicate direction" }
            ]
        };
        return content;
    }

    handlePlottingPoints(problem) {
        const input = (problem || '').toString().toLowerCase();
        const content = {
            topic: "Plotting Points",
            category: 'graphs',
            summary: "Plotting points is the process of locating ordered pairs (x, y) on the Cartesian plane. It is the bridge between algebraic equations and their visual graphs.",
            plottingSteps: [
                "1. Start at the origin (0, 0)",
                "2. Move x units horizontally (right if positive, left if negative)",
                "3. From that position, move y units vertically (up if positive, down if negative)",
                "4. Mark the point with a dot and label it"
            ],
            tableOfValues: {
                purpose: "Systematic generation of coordinate pairs before drawing a graph",
                method: "Choose x values, substitute into equation, calculate y, record (x, y)",
                recommendation: "Use at least 5 points; include negative x values; check for symmetry"
            },
            examples: [
                { point: "(2, 3)", steps: "Right 2, up 3" },
                { point: "(−4, 1)", steps: "Left 4, up 1" },
                { point: "(0, −5)", steps: "No horizontal move; down 5 — on y-axis" },
                { point: "(−3, −2)", steps: "Left 3, down 2 — Quadrant III" }
            ],
            commonErrors: [
                { error: "Moving vertically before horizontally", fix: "Always horizontal (x) first, then vertical (y)" },
                { error: "Not starting from origin for each point", fix: "Every point is located from the origin, not from the previous point" }
            ]
        };
        return content;
    }

    handleGradient(problem) {
        const input = (problem || '').toString().toLowerCase();
        const content = {
            topic: "Gradient (Slope)",
            category: 'graphs',
            summary: "Gradient measures the steepness and direction of a line. It is calculated as rise divided by run (Δy/Δx) and is constant along any straight line.",
            formula: {
                riseOverRun: "m = rise / run = Δy / Δx = (y₂ − y₁) / (x₂ − x₁)",
                twoPoints: "Given (x₁, y₁) and (x₂, y₂): m = (y₂ − y₁) / (x₂ − x₁)"
            },
            gradientTypes: {
                positive: "Line rises left to right; y increases as x increases",
                negative: "Line falls left to right; y decreases as x increases",
                zero: "Horizontal line; y stays constant",
                undefined: "Vertical line; x stays constant; division by zero"
            },
            parallelPerpendicular: {
                parallel: "Equal gradients: m₁ = m₂",
                perpendicular: "Product equals −1: m₁ × m₂ = −1; m₂ = −1/m₁"
            },
            workedExamples: [
                {
                    task: "Gradient through (1, 3) and (5, 11)",
                    solution: "m = (11−3)/(5−1) = 8/4 = 2"
                },
                {
                    task: "Gradient through (2, 8) and (7, 3)",
                    solution: "m = (3−8)/(7−2) = −5/5 = −1"
                },
                {
                    task: "Perpendicular to gradient 4",
                    solution: "m_perp = −1/4"
                }
            ],
            commonErrors: [
                { error: "Calculating Δx/Δy (run/rise) instead of Δy/Δx", fix: "Rise (vertical) always in numerator; run (horizontal) always in denominator" },
                { error: "Subtracting coordinates in opposite orders", fix: "Be consistent: (y₂−y₁) and (x₂−x₁) using same subscript order for both" }
            ]
        };
        return content;
    }

    handleLinearGraphs(problem) {
        const input = (problem || '').toString().toLowerCase();
        const content = {
            topic: "Linear Graphs",
            category: 'graphs',
            summary: "Linear graphs are straight lines representing equations of the form y = mx + c, where m is the gradient and c is the y-intercept.",
            standardForm: {
                equation: "y = mx + c",
                m: "Gradient — controls steepness and direction",
                c: "y-intercept — where the line crosses the y-axis (when x = 0)"
            },
            drawingMethods: {
                tableOfValues: "Generate (x, y) pairs by substitution; plot and join",
                gradientIntercept: "Plot y-intercept first; apply gradient to find second point",
                interceptMethod: "Find x-intercept (set y=0) and y-intercept (set x=0); join the two points"
            },
            findingEquation: {
                from_graph: "Read y-intercept; calculate gradient from two grid points",
                from_m_and_point: "y − y₁ = m(x − x₁); rearrange to y = mx + c",
                from_two_points: "Calculate m first; then substitute one point to find c"
            },
            specialLines: {
                horizontal: "y = k; gradient 0",
                vertical: "x = k; undefined gradient",
                throughOrigin: "y = mx; c = 0"
            },
            workedExamples: [
                {
                    task: "Draw y = 2x − 3 for x = −1 to x = 4",
                    solution: "Table: (−1,−5),(0,−3),(1,−1),(2,1),(3,3),(4,5). y-int: (0,−3). x-int: (1.5, 0)"
                },
                {
                    task: "Find equation through (2, 7) with gradient 3",
                    solution: "y − 7 = 3(x − 2) → y = 3x + 1"
                }
            ]
        };
        return content;
    }

    handleExponentialGraphs(problem) {
        const input = (problem || '').toString().toLowerCase();
        const content = {
            topic: "Exponential Graphs",
            category: 'graphs',
            summary: "Exponential graphs have the form y = aˣ. If a > 1, the graph shows growth. If 0 < a < 1, it shows decay. The graph always passes through (0, 1) and has the x-axis as a horizontal asymptote.",
            keyFeatures: {
                yIntercept: "(0, 1) for all y = aˣ since a⁰ = 1",
                asymptote: "y = 0 (x-axis) is the horizontal asymptote",
                domain: "All real numbers (x can be any value)",
                range: "y > 0 always (graph never below x-axis)",
                growth: "a > 1: increasing, J-shaped curve",
                decay: "0 < a < 1: decreasing, asymptotic curve"
            },
            comparison: {
                linear: "Adds constant amount each unit; constant absolute change",
                exponential: "Multiplies by constant factor each unit; constant percentage change"
            },
            workedExamples: [
                {
                    task: "Draw y = 2ˣ for x = −3 to x = 4",
                    solution: "Values: (−3,1/8),(−2,1/4),(−1,1/2),(0,1),(1,2),(2,4),(3,8),(4,16). J-shaped curve; asymptote y=0"
                },
                {
                    task: "Model: population starts at 1000 and grows by 20% per year",
                    solution: "P = 1000 × (1.2)ᵗ. After 5 years: 1000 × 1.2⁵ ≈ 2488"
                }
            ]
        };
        return content;
    }

    handleQuadraticGraphs(problem) {
        const input = (problem || '').toString().toLowerCase();
        const content = {
            topic: "Quadratic Graphs",
            category: 'graphs',
            summary: "Quadratic graphs (parabolas) have the form y = ax² + bx + c. The sign of a determines orientation; the vertex is the turning point; the discriminant determines the number of x-intercepts.",
            keyFeatures: {
                orientation: "a > 0: opens upward (U); a < 0: opens downward (∩)",
                vertex: { x: "x = −b/(2a)", y: "Substitute x_v back into equation", vertexForm: "y = a(x−h)² + k → vertex at (h, k)" },
                axisOfSymmetry: "x = −b/(2a): vertical line through vertex",
                yIntercept: "(0, c): set x = 0",
                xIntercepts: "Solve ax² + bx + c = 0; number given by discriminant"
            },
            discriminant: {
                formula: "Δ = b² − 4ac",
                positive: "Two distinct x-intercepts",
                zero: "One repeated x-intercept (tangent to x-axis)",
                negative: "No real x-intercepts (entirely above or below x-axis)"
            },
            workedExamples: [
                {
                    task: "Sketch y = x² − 4x + 3",
                    solution: "Vertex: x=2, y=−1. Axis: x=2. y-int: (0,3). Roots: (1,0) and (3,0). Opens upward."
                },
                {
                    task: "State number of x-intercepts for y = 2x² − 3x + 5",
                    solution: "Δ = 9 − 40 = −31 < 0. No x-intercepts — parabola entirely above x-axis."
                }
            ]
        };
        return content;
    }

    handleInequalityRegions(problem) {
        const input = (problem || '').toString().toLowerCase();
        const content = {
            topic: "Inequality Regions",
            category: 'graphs',
            summary: "Linear inequalities represent half-planes on the Cartesian plane. The boundary line divides the plane; a test point determines which side to shade. Systems of inequalities create a feasible region.",
            procedure: {
                step1: "Replace inequality with = to draw the boundary line",
                step2: "Solid line for ≤ or ≥; dashed line for < or >",
                step3: "Choose test point (origin if not on line)",
                step4: "If test point satisfies inequality: shade that side",
                step5: "If not: shade the opposite side"
            },
            signRules: {
                above: "y > mx + c: shade above the line",
                below: "y < mx + c: shade below the line"
            },
            multipleinequalities: "Feasible region = intersection of all individual half-planes; optimal LP values occur at vertices",
            workedExamples: [
                {
                    task: "Shade y ≥ x + 2",
                    solution: "Draw solid line y = x + 2. Test (0,0): 0 ≥ 2 is FALSE. Shade above the line."
                },
                {
                    task: "Find feasible region: x ≥ 0, y ≥ 0, x + y ≤ 6",
                    solution: "Triangle with vertices (0,0), (6,0), (0,6)"
                }
            ]
        };
        return content;
    }

    handleGraphInterpretation(problem) {
        const input = (problem || '').toString().toLowerCase();
        const content = {
            topic: "Graph Interpretation",
            category: 'graphs',
            summary: "Graph interpretation extracts meaning from visual representations. Every feature — gradient, area, intercepts, and shape — carries specific mathematical meaning depending on what the variables represent.",
            distanceTime: {
                gradient: "Speed = Δdistance / Δtime",
                horizontal: "Stationary (not moving)",
                negative_gradient: "Returning to starting point",
                steeper: "Moving faster",
                curved: "Accelerating or decelerating"
            },
            speedTime: {
                gradient: "Acceleration = Δspeed / Δtime",
                area: "Distance = area under speed-time graph",
                horizontal: "Constant speed (zero acceleration)",
                positiveSlope: "Accelerating",
                negativeSlope: "Decelerating"
            },
            areaCalculation: {
                rectangle: "length × height",
                triangle: "½ × base × height",
                trapezium: "½ × (parallel side 1 + parallel side 2) × height"
            },
            workedExamples: [
                {
                    task: "D-T graph: from (0,0) to (3, 90). Calculate speed.",
                    solution: "Speed = gradient = 90/3 = 30 km/h"
                },
                {
                    task: "Speed-time: trapezium with parallel sides 20s and 30s, height 15 m/s. Find distance.",
                    solution: "Area = ½(20+30)(15) = ½(50)(15) = 375 m"
                }
            ]
        };
        return content;
    }

    identifyTopic(input) {
        const inputStr = (input || '').toString();
        for (const [topicId, topic] of Object.entries(this.mathematicsTopics)) {
            for (const pattern of topic.patterns) {
                if (pattern.test(inputStr)) {
                    return { topicId, topic };
                }
            }
        }
        return null;
    }

    processQuery(input) {
        const identified = this.identifyTopic(input);
        if (!identified) {
            return { error: 'Topic not identified', input };
        }
        const { topicId, topic } = identified;
        const content = topic.handler(input);
        const lesson = this.lessons[topicId] || null;
        const misconceptions = this.commonMisconceptions[topicId] || null;
        const scenarios = this.contextualScenarios[topicId] || null;
        const assessmentQs = this.assessmentQuestions[topicId] || null;

        return {
            topicId,
            topicName: topic.name,
            content,
            lesson,
            misconceptions,
            scenarios,
            assessmentQuestions: assessmentQs,
            relatedPracticals: topic.relatedPracticals || []
        };
    }
}
