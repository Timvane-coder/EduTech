// Enhanced Line Equations Mathematical Workbook - Point-Slope and Slope-Intercept Forms
import * as math from 'mathjs';

export class EnhancedLineEquationsMathematicalWorkbook {
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
        this.initializeLineEquationSolvers();
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
        this.initializeLineEquationLessons();
    }

    initializeLineEquationLessons() {
        this.lessons = {
            slope_intercept_form: {
                title: "Slope-Intercept Form",
                concepts: [
                    "Standard form: y = mx + b",
                    "m represents the slope (rate of change)",
                    "b represents the y-intercept (where line crosses y-axis)",
                    "Most common form for graphing and understanding linear relationships"
                ],
                theory: "The slope-intercept form directly reveals two key characteristics of a line: its steepness/direction (slope) and its starting position on the y-axis (y-intercept).",
                keyFormulas: {
                    "Standard Form": "y = mx + b",
                    "Slope": "m = (y₂ - y₁)/(x₂ - x₁)",
                    "Y-intercept": "b = y - mx (for any point on the line)",
                    "Parallel Lines": "Same slope, different y-intercepts",
                    "Perpendicular Lines": "Slopes are negative reciprocals (m₁ · m₂ = -1)"
                },
                components: {
                    "m (slope)": {
                        meaning: "Rate of change; rise over run",
                        interpretation: "For every 1 unit right, line goes up/down m units",
                        examples: "m=2 means up 2 for every 1 right; m=-3 means down 3 for every 1 right"
                    },
                    "b (y-intercept)": {
                        meaning: "Starting value when x = 0",
                        interpretation: "Point where line crosses y-axis: (0, b)",
                        examples: "b=5 means line crosses y-axis at (0,5)"
                    }
                },
                solvingSteps: [
                    "Identify or calculate the slope (m)",
                    "Identify or calculate the y-intercept (b)",
                    "Substitute m and b into y = mx + b",
                    "Simplify if needed",
                    "Verify using known points"
                ],
                applications: [
                    "Cost calculations (fixed cost + variable rate)",
                    "Distance-time graphs (speed as slope)",
                    "Temperature conversion (linear relationship)",
                    "Financial projections (base + growth rate)"
                ],
                graphingProcedure: [
                    "Start at y-intercept (0, b) on y-axis",
                    "Use slope to find next point: rise/run from y-intercept",
                    "Plot second point",
                    "Draw line through both points",
                    "Extend line in both directions"
                ]
            },

            point_slope_form: {
                title: "Point-Slope Form",
                concepts: [
                    "Standard form: y - y₁ = m(x - x₁)",
                    "Uses a known point (x₁, y₁) and slope m",
                    "Most useful when given a point and slope",
                    "Easily converts to slope-intercept form"
                ],
                theory: "Point-slope form captures the essence of a line: it passes through a specific point and has a certain slope. This form is particularly useful in calculus and when working with tangent lines.",
                keyFormulas: {
                    "Standard Form": "y - y₁ = m(x - x₁)",
                    "Finding Slope from Two Points": "m = (y₂ - y₁)/(x₂ - x₁)",
                    "Convert to Slope-Intercept": "Distribute m and solve for y",
                    "Point on Line Check": "Substitute point coordinates to verify"
                },
                components: {
                    "(x₁, y₁)": {
                        meaning: "A known point on the line",
                        interpretation: "Any point the line passes through",
                        examples: "If line passes through (3, 5), then x₁=3, y₁=5"
                    },
                    "m (slope)": {
                        meaning: "Rate of change of the line",
                        interpretation: "Same as in slope-intercept form",
                        examples: "m=2 means line rises 2 units for every 1 unit right"
                    }
                },
                solvingSteps: [
                    "Identify the point (x₁, y₁)",
                    "Identify or calculate the slope m",
                    "Substitute into y - y₁ = m(x - x₁)",
                    "Distribute m if converting to slope-intercept",
                    "Simplify and solve for y if needed"
                ],
                applications: [
                    "Finding equation from graph points",
                    "Tangent lines in calculus",
                    "Linear approximations",
                    "Regression analysis"
                ],
                whenToUse: [
                    "Given a point and slope directly",
                    "Found slope from two points",
                    "Need equation quickly without finding y-intercept",
                    "Working with calculus problems"
                ]
            },

            finding_slope: {
                title: "Finding Slope from Two Points",
                concepts: [
                    "Slope formula: m = (y₂ - y₁)/(x₂ - x₁)",
                    "Represents rise over run",
                    "Order of points doesn't matter (as long as consistent)",
                    "Undefined slope for vertical lines"
                ],
                theory: "Slope measures how steep a line is and in which direction it goes. It's the ratio of vertical change to horizontal change between any two points on the line.",
                keyFormulas: {
                    "Slope Formula": "m = (y₂ - y₁)/(x₂ - x₁) = Δy/Δx = rise/run",
                    "Alternative": "m = (y₁ - y₂)/(x₁ - x₂) (same result)"
                },
                slopeTypes: {
                    "Positive slope": {
                        value: "m > 0",
                        meaning: "Line rises from left to right",
                        visual: "Goes uphill /"
                    },
                    "Negative slope": {
                        value: "m < 0",
                        meaning: "Line falls from left to right",
                        visual: "Goes downhill \\"
                    },
                    "Zero slope": {
                        value: "m = 0",
                        meaning: "Horizontal line",
                        visual: "Flat line —"
                    },
                    "Undefined slope": {
                        value: "Division by zero",
                        meaning: "Vertical line",
                        visual: "Straight up |"
                    }
                },
                solvingSteps: [
                    "Label points as (x₁, y₁) and (x₂, y₂)",
                    "Calculate y₂ - y₁ (vertical change)",
                    "Calculate x₂ - x₁ (horizontal change)",
                    "Divide: m = (y₂ - y₁)/(x₂ - x₁)",
                    "Simplify fraction if possible",
                    "Interpret the result"
                ],
                applications: [
                    "Determining steepness of roads",
                    "Calculating rates of change",
                    "Physics: velocity from position-time graphs",
                    "Economics: marginal analysis"
                ]
            },

            converting_forms: {
                title: "Converting Between Forms",
                concepts: [
                    "Slope-intercept to point-slope: Choose any point on line",
                    "Point-slope to slope-intercept: Distribute and solve for y",
                    "Standard form (Ax + By = C) to either form",
                    "Each form has advantages for different situations"
                ],
                theory: "Different forms of linear equations emphasize different aspects of the line. Converting between forms allows you to use the most convenient representation for each problem.",
                conversionPaths: {
                    "Point-Slope → Slope-Intercept": {
                        start: "y - y₁ = m(x - x₁)",
                        steps: [
                            "Distribute m on right side",
                            "Add y₁ to both sides",
                            "Simplify to get y = mx + b"
                        ],
                        end: "y = mx + b"
                    },
                    "Slope-Intercept → Point-Slope": {
                        start: "y = mx + b",
                        steps: [
                            "Identify m (already have slope)",
                            "Choose any point (x₁, y₁), often use (0, b)",
                            "Substitute into y - y₁ = m(x - x₁)"
                        ],
                        end: "y - y₁ = m(x - x₁)"
                    },
                    "Standard Form → Slope-Intercept": {
                        start: "Ax + By = C",
                        steps: [
                            "Subtract Ax from both sides: By = -Ax + C",
                            "Divide everything by B: y = (-A/B)x + (C/B)",
                            "Identify m = -A/B and b = C/B"
                        ],
                        end: "y = mx + b"
                    }
                },
                applications: [
                    "Use slope-intercept for graphing",
                    "Use point-slope when given point and slope",
                    "Use standard form for integer coefficients",
                    "Convert to easiest form for the problem at hand"
                ]
            },

            parallel_perpendicular_lines: {
                title: "Parallel and Perpendicular Lines",
                concepts: [
                    "Parallel lines: same slope, never intersect",
                    "Perpendicular lines: slopes are negative reciprocals",
                    "Product of perpendicular slopes equals -1",
                    "Horizontal and vertical lines are perpendicular"
                ],
                theory: "The relationship between slopes determines whether lines are parallel, perpendicular, or neither. This is fundamental in coordinate geometry and has applications in construction, computer graphics, and physics.",
                keyFormulas: {
                    "Parallel Lines": "m₁ = m₂",
                    "Perpendicular Lines": "m₁ · m₂ = -1, or m₂ = -1/m₁",
                    "Finding Parallel Line": "Use same slope with new point",
                    "Finding Perpendicular Line": "Use negative reciprocal of slope with new point"
                },
                parallelLines: {
                    condition: "m₁ = m₂",
                    meaning: "Lines have same steepness and direction",
                    examples: [
                        "y = 2x + 3 and y = 2x - 5 are parallel (both have m=2)",
                        "y = -½x + 1 and y = -½x + 4 are parallel"
                    ],
                    process: "To find parallel line through point (x₁, y₁): use same slope in point-slope form"
                },
                perpendicularLines: {
                    condition: "m₁ · m₂ = -1",
                    meaning: "Lines intersect at right angles (90°)",
                    examples: [
                        "y = 2x + 1 and y = -½x + 3 are perpendicular (2 · -½ = -1)",
                        "y = ¾x - 2 and y = -⁴⁄₃x + 1 are perpendicular (¾ · -⁴⁄₃ = -1)"
                    ],
                    process: "To find perpendicular line: flip slope and change sign, then use point-slope form"
                },
                specialCases: {
                    "Horizontal lines": "All have m=0, all parallel to each other",
                    "Vertical lines": "All have undefined slope, all parallel to each other",
                    "Horizontal ⊥ Vertical": "Always perpendicular to each other"
                },
                applications: [
                    "Architecture: perpendicular walls",
                    "Computer graphics: normal vectors",
                    "Physics: force components",
                    "Engineering: parallel support beams"
                ]
            },

            graphing_lines: {
                title: "Graphing Linear Equations",
                concepts: [
                    "Multiple methods: slope-intercept, point-slope, two points, intercepts",
                    "Only need two points to determine a line",
                    "More points provide verification",
                    "Use appropriate scale for the data"
                ],
                theory: "Graphing reveals the visual representation of a linear relationship, making patterns and trends immediately apparent.",
                graphingMethods: {
                    "Slope-Intercept Method": {
                        form: "y = mx + b",
                        steps: [
                            "Plot y-intercept (0, b)",
                            "Use slope m to find second point (rise/run)",
                            "Draw line through points"
                        ],
                        bestFor: "When equation is in y = mx + b form"
                    },
                    "Point-Slope Method": {
                        form: "y - y₁ = m(x - x₁)",
                        steps: [
                            "Plot the given point (x₁, y₁)",
                            "Use slope to find second point",
                            "Draw line through points"
                        ],
                        bestFor: "When given a point and slope"
                    },
                    "Two-Point Method": {
                        given: "Two points (x₁, y₁) and (x₂, y₂)",
                        steps: [
                            "Plot both points",
                            "Draw line through them",
                            "(Optional: calculate slope for verification)"
                        ],
                        bestFor: "When two points are known"
                    },
                    "Intercepts Method": {
                        form: "Ax + By = C",
                        steps: [
                            "Find x-intercept: set y=0, solve for x",
                            "Find y-intercept: set x=0, solve for y",
                            "Plot both intercepts",
                            "Draw line through them"
                        ],
                        bestFor: "Standard form equations"
                    }
                },
                applications: [
                    "Data visualization",
                    "Trend analysis",
                    "Predictions and interpolation",
                    "Scientific data representation"
                ]
            },

            word_problems_lines: {
                title: "Word Problems with Linear Equations",
                concepts: [
                    "Identify slope as rate of change",
                    "Identify y-intercept as initial value",
                    "Set up equation from context",
                    "Interpret solution in context"
                ],
                theory: "Real-world linear relationships often involve a starting value and a constant rate of change, making them perfect for modeling with linear equations.",
                problemTypes: {
                    "Cost Problems": {
                        structure: "Total cost = fixed cost + (rate × quantity)",
                        form: "y = mx + b where b is fixed cost, m is rate",
                        example: "Phone bill = $30/month + $0.10/minute",
                        equation: "C = 0.10m + 30"
                    },
                    "Motion Problems": {
                        structure: "Distance = rate × time + initial position",
                        form: "y = mx + b where m is speed, b is starting position",
                        example: "Car travels at 60 mph, starting 20 miles from home",
                        equation: "d = 60t + 20"
                    },
                    "Temperature Conversion": {
                        structure: "Linear relationship between scales",
                        form: "y = mx + b",
                        example: "F = (9/5)C + 32",
                        equation: "Fahrenheit = 1.8 × Celsius + 32"
                    },
                    "Growth Problems": {
                        structure: "Amount = rate × time + initial amount",
                        form: "y = mx + b",
                        example: "Plant grows 2 cm/week, started at 5 cm",
                        equation: "h = 2w + 5"
                    }
                },
                solutionStrategy: [
                    "Identify what the variables represent",
                    "Determine the rate of change (slope)",
                    "Determine the initial value (y-intercept)",
                    "Write equation in appropriate form",
                    "Solve or use equation as needed",
                    "Interpret answer in context with units"
                ],
                keyPhrases: {
                    "starts at": "y-intercept (b)",
                    "initial value": "y-intercept (b)",
                    "per": "slope (m) - rate of change",
                    "each": "slope (m)",
                    "rate": "slope (m)",
                    "fixed cost": "y-intercept (b)",
                    "variable cost": "slope (m)"
                }
            },

            special_cases: {
                title: "Special Cases of Linear Equations",
                concepts: [
                    "Horizontal lines: y = b (slope = 0)",
                    "Vertical lines: x = a (undefined slope)",
                    "Lines through origin: y = mx (b = 0)",
                    "Identity line: y = x (slope = 1, b = 0)"
                ],
                theory: "Special cases of linear equations have unique properties that make them important in various applications.",
                horizontalLines: {
                    equation: "y = b",
                    slope: "m = 0",
                    meaning: "All points have same y-coordinate",
                    examples: ["y = 3", "y = -2", "y = 0 (x-axis)"],
                    applications: "Constant values, budget limits, maximum capacity"
                },
                verticalLines: {
                    equation: "x = a",
                    slope: "Undefined (division by zero)",
                    meaning: "All points have same x-coordinate",
                    examples: ["x = 5", "x = -1", "x = 0 (y-axis)"],
                    applications: "Fixed time, deadlines, boundaries",
                    note: "Not a function (fails vertical line test)"
                },
                originLines: {
                    equation: "y = mx",
                    yIntercept: "b = 0",
                    meaning: "Line passes through origin (0, 0)",
                    examples: ["y = 2x", "y = -3x", "y = ½x"],
                    applications: "Direct proportions, scaling, conversions without offset"
                },
                identityLine: {
                    equation: "y = x",
                    slope: "m = 1",
                    yIntercept: "b = 0",
                    meaning: "45° line through origin; y equals x",
                    applications: "Reference line for transformations, equality indicator"
                }
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
            'perpendicular': '⊥', 'parallel': '∥', 'degree': '°'
        };
    }

    initializeLineEquationSolvers() {
        this.lineEquationTypes = {
            slope_intercept_from_slope_and_intercept: {
                patterns: [
                    /slope.*intercept/i,
                    /y\s*=\s*mx\s*\+\s*b/i,
                    /given.*slope.*y-intercept/i
                ],
                solver: this.solveSlopeInterceptFromSlopeAndIntercept.bind(this),
                name: 'Slope-Intercept Form from Slope and Y-Intercept',
                category: 'slope_intercept',
                description: 'Find equation y = mx + b given m and b'
            },

            slope_intercept_from_point_and_slope: {
                patterns: [
                    /point.*slope/i,
                    /given.*point.*slope/i
                ],
                solver: this.solveSlopeInterceptFromPointAndSlope.bind(this),
                name: 'Slope-Intercept Form from Point and Slope',
                category: 'slope_intercept',
                description: 'Find y = mx + b given point (x₁, y₁) and slope m'
            },

            slope_intercept_from_two_points: {
                patterns: [
                    /two\s+points/i,
                    /given.*points/i,
                    /through.*and/i
                ],
                solver: this.solveSlopeInterceptFromTwoPoints.bind(this),
                name: 'Slope-Intercept Form from Two Points',
                category: 'slope_intercept',
                description: 'Find y = mx + b given two points'
            },

            point_slope_from_point_and_slope: {
                patterns: [
                    /point-slope.*form/i,
                    /y\s*-\s*y1.*=.*m.*x\s*-\s*x1/i
                ],
                solver: this.solvePointSlopeFromPointAndSlope.bind(this),
                name: 'Point-Slope Form from Point and Slope',
                category: 'point_slope',
                description: 'Find y - y₁ = m(x - x₁) given point and slope'
            },

            point_slope_from_two_points: {
                patterns: [
                    /point-slope.*two.*points/i
                ],
                solver: this.solvePointSlopeFromTwoPoints.bind(this),
                name: 'Point-Slope Form from Two Points',
                category: 'point_slope',
                description: 'Find point-slope form given two points'
            },

            find_slope_from_two_points: {
                patterns: [
                    /find.*slope/i,
                    /calculate.*slope/i,
                    /slope.*between/i
                ],
                solver: this.solveFindSlope.bind(this),
                name: 'Find Slope from Two Points',
                category: 'finding_slope',
                description: 'Calculate m = (y₂ - y₁)/(x₂ - x₁)'
            },

            convert_point_slope_to_slope_intercept: {
                patterns: [
                    /convert.*point-slope.*slope-intercept/i,
                    /rewrite.*slope-intercept/i
                ],
                solver: this.solveConvertPointSlopeToSlopeIntercept.bind(this),
                name: 'Convert Point-Slope to Slope-Intercept',
                category: 'converting_forms',
                description: 'Convert y - y₁ = m(x - x₁) to y = mx + b'
            },

            convert_slope_intercept_to_point_slope: {
                patterns: [
                    /convert.*slope-intercept.*point-slope/i,
                    /rewrite.*point-slope/i
                ],
                solver: this.solveConvertSlopeInterceptToPointSlope.bind(this),
                name: 'Convert Slope-Intercept to Point-Slope',
                category: 'converting_forms',
                description: 'Convert y = mx + b to y - y₁ = m(x - x₁)'
            },

            parallel_line: {
                patterns: [
                    /parallel/i,
                    /same.*slope/i
                ],
                solver: this.solveParallelLine.bind(this),
                name: 'Find Parallel Line',
                category: 'parallel_perpendicular',
                description: 'Find line parallel to given line through point'
            },

            perpendicular_line: {
                patterns: [
                    /perpendicular/i,
                    /normal/i,
                    /⊥/
                ],
                solver: this.solvePerpendicularLine.bind(this),
                name: 'Find Perpendicular Line',
                category: 'parallel_perpendicular',
                description: 'Find line perpendicular to given line through point'
            },

            graph_line_slope_intercept: {
                patterns: [
                    /graph.*y\s*=.*x/i,
                    /plot.*line/i
                ],
                solver: this.solveGraphLineSlopeIntercept.bind(this),
                name: 'Graph Line in Slope-Intercept Form',
                category: 'graphing',
                description: 'Graph y = mx + b'
            },

            word_problem_cost: {
                patterns: [
                    /cost/i,
                    /price/i,
                    /fee/i,
                    /charge/i
                ],
                solver: this.solveWordProblemCost.bind(this),
                name: 'Cost Word Problem',
                category: 'word_problems',
                description: 'Model cost as linear equation'
            },

            word_problem_motion: {
                patterns: [
                    /distance/i,
                    /speed/i,
                    /velocity/i,
                    /travel/i
                ],
                solver: this.solveWordProblemMotion.bind(this),
                name: 'Motion Word Problem',
                category: 'word_problems',
                description: 'Model distance-time relationship'
            },

            horizontal_line: {
                patterns: [
                    /horizontal/i,
                    /y\s*=\s*[+-]?\d+$/i
                ],
                solver: this.solveHorizontalLine.bind(this),
                name: 'Horizontal Line',
                category: 'special_cases',
                description: 'Line with slope = 0'
            },

            vertical_line: {
                patterns: [
                    /vertical/i,
                    /x\s*=\s*[+-]?\d+$/i
                ],
                solver: this.solveVerticalLine.bind(this),
                name: 'Vertical Line',
                category: 'special_cases',
                description: 'Line with undefined slope'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            slope_intercept: {
                'Identify slope and intercept': [
                    'Confusing m and b in y = mx + b',
                    'Thinking b is always positive',
                    'Not recognizing negative slope'
                ],
                'Substitute values': [
                    'Substituting x for y or vice versa',
                    'Sign errors when substituting negative values',
                    'Forgetting to distribute slope'
                ]
            },
            finding_slope: {
                'Calculate rise over run': [
                    'Subtracting in wrong order (inconsistent)',
                    'Dividing run by rise instead of rise by run',
                    'Not simplifying fraction',
                    'Sign errors with negative coordinates'
                ],
                'Interpret slope': [
                    'Not recognizing zero slope (horizontal)',
                    'Confusing undefined slope with zero slope',
                    'Misinterpreting negative slope direction'
                ]
            },
            point_slope: {
                'Substitute point coordinates': [
                    'Using (x, y) instead of (x₁, y₁)',
                    'Sign errors: y - y₁ vs y + y₁',
                    'Confusing x and x₁',
                    'Not putting parentheses around (x - x₁)'
                ],
                'Distribute slope': [
                    'Not distributing negative slope correctly',
                    'Forgetting to distribute to x₁',
                    'Sign errors when expanding'
                ]
            },
            parallel_perpendicular: {
                'Find parallel slope': [
                    'Changing the slope when it should stay same',
                    'Using negative reciprocal instead of same slope'
                ],
                'Find perpendicular slope': [
                    'Only taking reciprocal (forgetting negative)',
                    'Only negating (forgetting reciprocal)',
                    'Sign errors in negative reciprocal'
                ]
            },
            converting_forms: {
                'Distribute properly': [
                    'Not distributing to all terms',
                    'Sign errors when distributing negative slope',
                    'Forgetting to combine like terms'
                ],
                'Isolate y': [
                    'Not completely solving for y',
                    'Leaving equation in implicit form',
                    'Arithmetic errors in final simplification'
                ]
            }
        };

        this.errorPrevention = {
            slope_formula: {
                reminder: 'Subtract y-coordinates and x-coordinates in same order',
                method: 'Always write (y₂ - y₁)/(x₂ - x₁), not mixed'
            },
            negative_slope: {
                reminder: 'Negative slope means line goes down from left to right',
                method: 'Visualize or sketch quick graph to verify direction'
            },
            slope_intercept_form: {
                reminder: 'y = mx + b: m is slope, b is y-intercept',
                method: 'Label m and b clearly before substituting'
            },
            point_slope_signs: {
                reminder: 'Point-slope: y - y₁ = m(x - x₁) - watch the minus signs',
                method: 'Use parentheses: y - (y₁) = m[x - (x₁)]'
            },
            perpendicular_slopes: {
                reminder: 'Perpendicular slopes: flip AND negate (negative reciprocal)',
                method: 'Check: m₁ × m₂ should equal -1'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why this works and what it means',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Exact steps to follow',
                language: 'step-by-step instructions'
            },
            visual: {
                focus: 'Graphical understanding',
                language: 'visual and spatial metaphors'
            },
            algebraic: {
                focus: 'Formal mathematical rules',
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
                examples: 'carefully sequenced difficulty progression'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            phone_plan: {
                scenario: "Cell phone plans with monthly fee plus per-minute charges",
                equation: "C = 0.10m + 30",
                context: "Total cost = per-minute rate × minutes + monthly fee",
                slopeInterpretation: "$0.10 per minute (rate of change)",
                interceptInterpretation: "$30 monthly fee (starting cost)",
                examples: [
                    "Plan A: $25/month + $0.15/min. Find cost for 200 minutes.",
                    "If bill is $45 with $30 base fee and $0.10/min, how many minutes?"
                ]
            },
            taxi_fare: {
                scenario: "Taxi charges with base fare plus per-mile rate",
                equation: "F = 2.50m + 3.50",
                context: "Fare = per-mile rate × miles + base fare",
                slopeInterpretation: "$2.50 per mile",
                interceptInterpretation: "$3.50 pickup fee",
                examples: [
                    "Taxi charges $3 base + $2/mile. Write equation.",
                    "10-mile trip costs $23. Find per-mile rate if base is $3."
                ]
            },
            temperature_conversion: {
                scenario: "Converting between Celsius and Fahrenheit",
                equation: "F = (9/5)C + 32",
                context: "Linear relationship between temperature scales",
                slopeInterpretation: "9/5 or 1.8 (conversion factor)",
                interceptInterpretation: "32°F (freezing point of water in Fahrenheit)",
                examples: [
                    "Convert 25°C to Fahrenheit",
                    "At what temperature do both scales show same number?"
                ]
            },
            rental_car: {
                scenario: "Car rental with daily rate plus per-mile charge",
                equation: "C = 0.25m + 40",
                context: "Total cost = per-mile rate × miles + daily rate",
                slopeInterpretation: "$0.25 per mile",
                interceptInterpretation: "$40 per day base rate",
                examples: [
                    "Rental costs $50/day + $0.20/mile. Drive 150 miles in 2 days.",
                    "Budget is $100/day. How far can you drive if base is $60/day and miles cost $0.30?"
                ]
            },
            plant_growth: {
                scenario: "Plant height over time with constant growth rate",
                equation: "h = 2w + 5",
                context: "Height = growth rate × weeks + initial height",
                slopeInterpretation: "2 cm per week (growth rate)",
                interceptInterpretation: "5 cm (starting height)",
                examples: [
                    "Plant starts at 8 cm, grows 1.5 cm/week. Find height after 6 weeks.",
                    "After 4 weeks, plant is 17 cm tall. Started at 5 cm. Find growth rate."
                ]
            },
            savings_account: {
                scenario: "Savings account with initial deposit and monthly additions",
                equation: "S = 50m + 200",
                context: "Savings = monthly deposit × months + initial deposit",
                slopeInterpretation: "$50 per month saved",
                interceptInterpretation: "$200 initial deposit",
                examples: [
                    "Start with $500, add $75/month. How much after 1 year?",
                    "After 6 months have $800. Started with $350. How much saved per month?"
                ]
            },
            water_tank: {
                scenario: "Water tank filling/draining at constant rate",
                equation: "V = -3t + 150",
                context: "Volume = rate × time + initial volume",
                slopeInterpretation: "-3 gallons per minute (draining rate)",
                interceptInterpretation: "150 gallons (initial volume)",
                examples: [
                    "Tank has 200 gal, drains at 5 gal/min. When empty?",
                    "Tank with 100 gal fills at 8 gal/min. Volume after 15 min?"
                ]
            },
            elevation_hiking: {
                scenario: "Elevation change while hiking",
                equation: "E = 250h + 1000",
                context: "Elevation = climb rate × hours + starting elevation",
                slopeInterpretation: "250 feet per hour (climbing rate)",
                interceptInterpretation: "1000 feet (starting elevation)",
                examples: [
                    "Start at 500 ft elevation, climb 300 ft/hr. Elevation after 3 hours?",
                    "After 2 hrs at 200 ft/hr, reach 1600 ft. What was starting elevation?"
                ]
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            slope_intercept: {
                skills: ['Substitution', 'Order of operations', 'Working with fractions', 'Plotting points'],
                priorKnowledge: ['Coordinate plane', 'Linear relationships', 'Rate of change concept'],
                checkQuestions: [
                    "What is the y-coordinate when x = 0?",
                    "If y = 2x + 3, find y when x = 5",
                    "Simplify: 3(x - 2) + 5"
                ]
            },
            finding_slope: {
                skills: ['Subtraction', 'Division', 'Fraction simplification', 'Coordinate reading'],
                priorKnowledge: ['Coordinate plane', 'Ordered pairs', 'Rise over run concept'],
                checkQuestions: [
                    "What is 8 - 3?",
                    "What is -2 - 5?",
                    "Simplify: 6/9",
                    "What does (3, 5) mean on a graph?"
                ]
            },
            point_slope: {
                skills: ['Substitution', 'Distribution', 'Combining like terms', 'Solving for y'],
                priorKnowledge: ['Slope concept', 'Points on coordinate plane', 'Basic algebra'],
                checkQuestions: [
                    "Distribute: 3(x - 4)",
                    "Simplify: y - 5 + 5",
                    "If (3, 7) is a point, what are x and y?"
                ]
            },
            parallel_perpendicular: {
                skills: ['Finding slope', 'Negative reciprocals', 'Equation writing'],
                priorKnowledge: ['Slope-intercept form', 'Point-slope form', 'Slope meaning'],
                checkQuestions: [
                    "What is the negative reciprocal of 2?",
                    "What is the negative reciprocal of -3/4?",
                    "Are lines with slopes 2 and 2 parallel?"
                ]
            },
            converting_forms: {
                skills: ['Distribution', 'Combining terms', 'Solving for variables'],
                priorKnowledge: ['Both point-slope and slope-intercept forms', 'Algebraic manipulation'],
                checkQuestions: [
                    "Distribute: -2(x - 3)",
                    "Solve for y: y - 7 = 3x + 2",
                    "What is y = 2x + 5 in point-slope form using point (0, 5)?"
                ]
            },
            graphing: {
                skills: ['Plotting points', 'Drawing lines', 'Using slope', 'Finding intercepts'],
                priorKnowledge: ['Coordinate plane', 'Slope meaning', 'Y-intercept location'],
                checkQuestions: [
                    "Plot the point (3, -2)",
                    "Where is the y-intercept on a graph?",
                    "If slope is 2, and you start at (0,1), where is next point moving right 1?"
                ]
            },
            word_problems: {
                skills: ['Reading comprehension', 'Variable identification', 'Unit analysis'],
                priorKnowledge: ['Rate concepts', 'Initial value concepts', 'Equation writing'],
                checkQuestions: [
                    "In 'charges $5 per hour plus $10 fee', what is the rate?",
                    "What does 'starts at' usually represent?",
                    "If something costs $2 each plus $5 total, is the $5 the slope or y-intercept?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            slope_as_staircase: {
                description: "Slope as climbing stairs",
                analogy: "Rise over run is like steps: how many up for each step forward",
                visualization: "Draw staircase with rise and run labeled",
                suitableFor: ['finding_slope', 'slope_intercept', 'graphing'],
                explanation: "Slope tells you the steepness: for every 1 step right, go up/down m steps"
            },
            y_intercept_as_starting_point: {
                description: "Y-intercept as where you begin",
                analogy: "Like starting point in a race or initial balance in bank account",
                visualization: "Mark point (0, b) on y-axis as 'START'",
                suitableFor: ['slope_intercept', 'word_problems'],
                explanation: "When x is 0 (haven't gone anywhere yet), y = b (starting value)"
            },
            line_as_path: {
                description: "Line as a path you walk on",
                analogy: "Walking on straight path: slope is steepness, y-intercept is where path crosses reference line",
                visualization: "Draw line as walking path with direction arrows",
                suitableFor: ['all'],
                explanation: "Following the line shows all points that satisfy the relationship"
            },
            slope_triangle: {
                description: "Right triangle showing rise and run",
                analogy: "Triangle formed by rise (vertical) and run (horizontal)",
                visualization: "Draw right triangle between two points with legs labeled",
                suitableFor: ['finding_slope', 'graphing'],
                explanation: "Slope = rise/run = vertical leg / horizontal leg"
            },
            parallel_as_train_tracks: {
                description: "Parallel lines like railroad tracks",
                analogy: "Train tracks never meet, always same distance apart",
                visualization: "Draw two parallel lines like railroad tracks",
                suitableFor: ['parallel_perpendicular'],
                explanation: "Parallel lines have same slope so they maintain constant separation"
            },
            perpendicular_as_corners: {
                description: "Perpendicular lines like corner of room",
                analogy: "Two walls meeting at right angle (90°)",
                visualization: "Draw perpendicular lines with small square in corner",
                suitableFor: ['parallel_perpendicular'],
                explanation: "Perpendicular lines meet at right angles; slopes are negative reciprocals"
            },
            equation_forms_as_different_views: {
                description: "Different forms show different aspects",
                analogy: "Like describing same house from front view, side view, or blueprint",
                visualization: "Show same line written in multiple forms",
                suitableFor: ['converting_forms'],
                explanation: "Each form highlights different information: slope-intercept shows b, point-slope shows a point"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            slope_intercept: {
                beginner: [
                    {
                        problem: "Find equation with slope 2 and y-intercept 3",
                        solution: "y = 2x + 3",
                        steps: ["Identify m = 2", "Identify b = 3", "Substitute: y = mx + b", "y = 2x + 3"],
                        difficulty: "easy"
                    },
                    {
                        problem: "Find equation with slope -1 and y-intercept 5",
                        solution: "y = -x + 5",
                        steps: ["m = -1, b = 5", "y = mx + b", "y = -x + 5"],
                        difficulty: "easy"
                    }
                ],
                intermediate: [
                    {
                        problem: "Find y = mx + b through (2, 7) with slope 3",
                        solution: "y = 3x + 1",
                        steps: ["Use y₁ = mx₁ + b", "7 = 3(2) + b", "7 = 6 + b", "b = 1", "y = 3x + 1"],
                        difficulty: "medium"
                    },
                    {
                        problem: "Find y = mx + b through points (1, 5) and (3, 11)",
                        solution: "y = 3x + 2",
                        steps: ["m = (11-5)/(3-1) = 6/2 = 3", "Use (1,5): 5 = 3(1) + b", "b = 2", "y = 3x + 2"],
                        difficulty: "medium"
                    }
                ],
                advanced: [
                    {
                        problem: "Find equation parallel to y = 2x - 1 through (3, 5)",
                        solution: "y = 2x - 1",
                        steps: ["Parallel means same slope: m = 2", "Use (3, 5): 5 = 2(3) + b", "5 = 6 + b", "b = -1", "y = 2x - 1"],
                        difficulty: "hard"
                    }
                ]
            },
            finding_slope: {
                beginner: [
                    {
                        problem: "Find slope through (0, 0) and (1, 2)",
                        solution: "m = 2",
                        steps: ["m = (y₂-y₁)/(x₂-x₁)", "m = (2-0)/(1-0)", "m = 2/1 = 2"],
                        difficulty: "easy"
                    },
                    {
                        problem: "Find slope through (1, 3) and (2, 5)",
                        solution: "m = 2",
                        steps: ["m = (5-3)/(2-1)", "m = 2/1 = 2"],
                        difficulty: "easy"
                    }
                ],
                intermediate: [
                    {
                        problem: "Find slope through (-2, 4) and (3, -1)",
                        solution: "m = -1",
                        steps: ["m = (-1-4)/(3-(-2))", "m = -5/5", "m = -1"],
                        difficulty: "medium"
                    },
                    {
                        problem: "Find slope through (2, 5) and (2, 8)",
                        solution: "Undefined",
                        steps: ["m = (8-5)/(2-2)", "m = 3/0", "Undefined (vertical line)"],
                        difficulty: "medium"
                    }
                ],
                advanced: [
                    {
                        problem: "Find slope through (−3, ½) and (1, 5/2)",
                        solution: "m = 1/2",
                        steps: ["m = (5/2 - 1/2)/(1-(-3))", "m = (4/2)/4", "m = 2/4 = 1/2"],
                        difficulty: "hard"
                    }
                ]
            },
            point_slope: {
                beginner: [
                    {
                        problem: "Write point-slope form through (2, 3) with slope 4",
                        solution: "y - 3 = 4(x - 2)",
                        steps: ["Use y - y₁ = m(x - x₁)", "y₁ = 3, x₁ = 2, m = 4", "y - 3 = 4(x - 2)"],
                        difficulty: "easy"
                    }
                ],
                intermediate: [
                    {
                        problem: "Convert y - 5 = 2(x - 1) to slope-intercept",
                        solution: "y = 2x + 3",
                        steps: ["Distribute: y - 5 = 2x - 2", "Add 5: y = 2x - 2 + 5", "y = 2x + 3"],
                        difficulty: "medium"
                    }
                ],
                advanced: [
                    {
                        problem: "Write in point-slope form through (−2, 4) and (3, −1)",
                        solution: "y - 4 = -1(x + 2) or y + 1 = -1(x - 3)",
                        steps: ["Find m: (-1-4)/(3-(-2)) = -5/5 = -1", "Use either point", "y - 4 = -1(x - (-2))"],
                        difficulty: "hard"
                    }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            slope_is_always_positive: {
                misconception: "Slope is always a positive number",
                reality: "Slope can be positive, negative, zero, or undefined",
                correctiveExample: "Line going downhill (left to right) has negative slope",
                commonIn: ['finding_slope', 'graphing']
            },
            y_intercept_is_always_positive: {
                misconception: "Y-intercept (b) is always positive",
                reality: "Y-intercept can be any real number (positive, negative, or zero)",
                correctiveExample: "Line y = 2x - 3 crosses y-axis at -3",
                commonIn: ['slope_intercept']
            },
            confusing_m_and_b: {
                misconception: "m is the y-intercept and b is the slope",
                reality: "In y = mx + b, m is slope and b is y-intercept",
                correctiveExample: "In y = 3x + 2, slope is 3, y-intercept is 2",
                commonIn: ['slope_intercept']
            },
            slope_order_confusion: {
                misconception: "Slope is (x₂ - x₁)/(y₂ - y₁)",
                reality: "Slope is (y₂ - y₁)/(x₂ - x₁) - rise over run",
                correctiveExample: "For (1,2) and (3,6): m = (6-2)/(3-1) = 4/2 = 2",
                commonIn: ['finding_slope']
            },
            point_slope_sign_errors: {
                misconception: "In point-slope form, always add: y + y₁ = m(x + x₁)",
                reality: "Point-slope is y - y₁ = m(x - x₁) with minus signs",
                correctiveExample: "Through (3, 5) with m=2: y - 5 = 2(x - 3), not y + 5 = 2(x + 3)",
                commonIn: ['point_slope']
            },
            parallel_slopes_negative: {
                misconception: "Parallel lines have negative slopes",
                reality: "Parallel lines have the SAME slope (both positive, both negative, or both zero)",
                correctiveExample: "y = 2x + 1 and y = 2x - 3 are parallel (both have m=2)",
                commonIn: ['parallel_perpendicular']
            },
            perpendicular_just_negative: {
                misconception: "Perpendicular slope is just the negative of original",
                reality: "Perpendicular slope is the negative RECIPROCAL (flip and negate)",
                correctiveExample: "If m₁ = 2, then m₂ = -1/2 (not -2)",
                commonIn: ['parallel_perpendicular']
            },
            zero_vs_undefined_slope: {
                misconception: "Zero slope and undefined slope are the same",
                reality: "Zero slope is horizontal (y = constant), undefined is vertical (x = constant)",
                correctiveExample: "y = 3 has slope 0; x = 5 has undefined slope",
                commonIn: ['finding_slope', 'special_cases']
            },
            intercept_is_a_number: {
                misconception: "Y-intercept is just the number b",
                reality: "Y-intercept is the POINT (0, b), though we often refer to just b",
                correctiveExample: "For y = 2x + 3, y-intercept is the point (0, 3)",
                commonIn: ['slope_intercept', 'graphing']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            slope_as_steepness: {
                analogy: "Slope as steepness of a hill",
                explanation: "Just like hills, lines can be steep or gentle, uphill or downhill. Slope measures this steepness.",
                suitableFor: ['finding_slope', 'slope_intercept'],
                ELI5: "Imagine riding your bike. A big slope like 5 means a really steep uphill. A slope of 0.5 is gentle. Negative slope means going downhill!"
            },
            y_intercept_as_starting_point: {
                analogy: "Y-intercept as your starting position",
                explanation: "Like starting a race: the y-intercept is where you begin before you've moved any distance (x = 0).",
                suitableFor: ['slope_intercept', 'word_problems'],
                ELI5: "The y-intercept is like how much money you have before you start earning more. If you start with $5, that's your y-intercept!"
            },
            equation_as_recipe: {
                analogy: "Line equation as a recipe",
                explanation: "The equation tells you the recipe for making y from x: multiply x by m, then add b.",
                suitableFor: ['slope_intercept'],
                ELI5: "It's like a recipe: take your x (eggs), multiply by m (double them), then add b (add 3 cups of flour). That gives you y!"
            },
            parallel_as_teammates: {
                analogy: "Parallel lines as teammates running together",
                explanation: "Like two runners running at the same speed but starting at different positions - they never meet.",
                suitableFor: ['parallel_perpendicular'],
                ELI5: "Imagine two friends on bikes going the same speed but on different paths. They stay the same distance apart - that's parallel!"
            },
            perpendicular_as_cross_streets: {
                analogy: "Perpendicular lines as intersecting streets",
                explanation: "Like streets that cross at a perfect corner (90-degree angle), making an 'L' or '+' shape.",
                suitableFor: ['parallel_perpendicular'],
                ELI5: "Think of a plus sign '+' or the corner where a wall meets the floor. Those lines meet at a perfect right angle!"
            },
            negative_slope_as_downhill: {
                analogy: "Negative slope as going downhill",
                explanation: "When slope is negative, as you move right (increase x), you go down (decrease y), like descending a hill.",
                suitableFor: ['finding_slope', 'graphing'],
                ELI5: "Negative slope is like sledding down a snowy hill. As you go forward, you go down!"
            },
            slope_from_points_as_directions: {
                analogy: "Finding slope as getting directions between two places",
                explanation: "To get from one point to another, you need to know how far up/down and how far right/left - that's slope.",
                suitableFor: ['finding_slope'],
                ELI5: "If you want to walk from your house to your friend's house, slope tells you: for every step forward, how many steps up or down?"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            slope_intercept_from_slope_and_intercept: {
                level1: "What formula do we use when we know slope and y-intercept?",
                level2: "Slope-intercept form is y = mx + b. What are m and b?",
                level3: "Substitute your slope for m and your y-intercept for b",
                level4: "y = {m}x + {b}"
            },
            slope_intercept_from_point_and_slope: {
                level1: "You know m and a point. How can you find b?",
                level2: "Use the formula y = mx + b and substitute the point to solve for b",
                level3: "Substitute x={x1}, y={y1}, and m={m} into y = mx + b, then solve for b",
                level4: "{y1} = {m}({x1}) + b, so b = {b}"
            },
            finding_slope: {
                level1: "What formula finds slope from two points?",
                level2: "Use m = (y₂ - y₁)/(x₂ - x₁) - rise over run",
                level3: "Subtract y-coordinates, then x-coordinates (same order!), and divide",
                level4: "m = ({y2} - {y1})/({x2} - {x1}) = {slope}"
            },
            point_slope: {
                level1: "What formula uses a point and slope?",
                level2: "Point-slope form: y - y₁ = m(x - x₁)",
                level3: "Substitute your point (x₁, y₁) and slope m into the formula",
                level4: "y - {y1} = {m}(x - {x1})"
            },
            parallel_line: {
                level1: "What's special about parallel lines?",
                level2: "Parallel lines have the same slope",
                level3: "Use the same slope as the given line, with your new point",
                level4: "New line has m = {m}, through ({x1}, {y1})"
            },
            perpendicular_line: {
                level1: "What's special about perpendicular lines?",
                level2: "Perpendicular lines have negative reciprocal slopes",
                level3: "If original slope is m, perpendicular slope is -1/m",
                level4: "Original m = {m1}, so perpendicular m = {m2}"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Find the slope through (1, 2) and (3, 6)",
                    answer: 2,
                    assesses: "finding_slope",
                    difficulty: "basic"
                },
                {
                    question: "Write y = mx + b with slope 3 and y-intercept -2",
                    answer: "y = 3x - 2",
                    assesses: "slope_intercept",
                    difficulty: "basic"
                },
                {
                    question: "Write point-slope form through (2, 5) with slope 4",
                    answer: "y - 5 = 4(x - 2)",
                    assesses: "point_slope",
                    difficulty: "intermediate"
                },
                {
                    question: "Find equation parallel to y = 2x + 1 through (0, 3)",
                    answer: "y = 2x + 3",
                    assesses: "parallel_perpendicular",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "In y = mx + b, which letter represents the slope?",
                    options: ["m", "b", "x", "y"],
                    correct: "m",
                    explanation: "m is the coefficient of x, representing slope"
                },
                {
                    question: "What is the slope of a horizontal line?",
                    options: ["0", "1", "Undefined", "-1"],
                    correct: "0",
                    explanation: "Horizontal lines have no rise, so slope is 0"
                },
                {
                    question: "If two lines are perpendicular and one has slope 3, what's the other's slope?",
                    options: ["-3", "1/3", "-1/3", "3"],
                    correct: "-1/3",
                    explanation: "Perpendicular slopes are negative reciprocals: -1/3"
                }
            ],
            summative: [
                {
                    question: "Find the equation in slope-intercept form through (2, 5) and (4, 11)",
                    answer: "y = 3x - 1",
                    showsWork: true,
                    rubric: {
                        find_slope: 2,
                        find_intercept: 2,
                        write_equation: 1
                    }
                },
                {
                    question: "Find equation perpendicular to y = 2x - 3 through (4, 5)",
                    answer: "y = -½x + 7",
                    showsWork: true,
                    rubric: {
                        find_perpendicular_slope: 2,
                        find_intercept: 2,
                        write_equation: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "Find slope through (0, 0) and (2, 4)",
                    "Write y = mx + b with m=1, b=0",
                    "What is the y-intercept of y = 3x + 5?",
                    "Is y = 2 a horizontal or vertical line?"
                ],
                medium: [
                    "Find y = mx + b through (1, 3) with slope 2",
                    "Find slope through (-2, 5) and (3, -5)",
                    "Convert y - 3 = 2(x + 1) to slope-intercept form",
                    "Find equation parallel to y = -x + 4 through (2, 5)"
                ],
                hard: [
                    "Find equation through (-3, 2) and (5, -4)",
                    "Find equation perpendicular to 2x + 3y = 6 through (3, -1)",
                    "Find equation with x-intercept 4 and y-intercept -2",
                    "A line passes through (1, 5) and is perpendicular to a line through (0, 0) and (3, 2)"
                ]
            },
            byObjective: {
                canFindSlope: [
                    "(1, 2) and (3, 8)",
                    "(0, 5) and (4, 5)",
                    "(-2, 3) and (-2, 7)",
                    "(−1, −3) and (2, 6)"
                ],
                canWriteSlopeIntercept: [
                    "m=2, b=5",
                    "m=-3, b=0",
                    "through (0, 4) with m=1",
                    "through (2, 7) with m=3"
                ],
                canWritePointSlope: [
                    "(3, 5) with m=2",
                    "(-1, 4) with m=-3",
                    "(0, 2) with m=1/2",
                    "(4, -2) with m=0"
                ],
                canFindParallelPerpendicular: [
                    "Parallel to y=2x+1 through (3, 7)",
                    "Perpendicular to y=-x+2 through (0, 4)",
                    "Parallel to y=3x-2 through (1, 5)",
                    "Perpendicular to y=(1/2)x+3 through (2, 0)"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "given_slope_and_intercept": "Directly write y = mx + b",
                "given_point_and_slope": "Use point to find b, or write point-slope form",
                "given_two_points": "Find slope first, then find b or use point-slope",
                "parallel_line": "Use same slope as given line",
                "perpendicular_line": "Use negative reciprocal of given slope",
                "convert_forms": "Distribute and simplify (point-slope → slope-intercept) or substitute point (slope-intercept → point-slope)",
                "word_problem": "Identify rate (slope) and initial value (y-intercept)"
            },
            whenToUseWhat: {
                slope_intercept: "Best when you know slope and y-intercept, or for graphing",
                point_slope: "Best when you know a point and slope, or for quick equation writing",
                finding_slope_first: "When given two points - find slope, then proceed",
                graphing: "Slope-intercept form is easiest for graphing",
                word_problems: "Identify rate as slope, initial value as y-intercept"
            },
            methodSelection: {
                factorsToConsider: [
                    "What information is given?",
                    "What form is requested?",
                    "Is graphing required?",
                    "Does the problem involve rates and initial values?"
                ],
                generalApproach: [
                    "1. Identify what you know (slope, point(s), intercept)",
                    "2. Choose appropriate form or method",
                    "3. Find any missing values (slope or y-intercept)",
                    "4. Write equation",
                    "5. Convert to requested form if needed",
                    "6. Verify using a point"
                ]
            },
            optimizationTips: {
                "Use point-slope for speed": "When you have point and slope, point-slope is fastest",
                "Find slope carefully": "Always subtract coordinates in same order to avoid sign errors",
                "Check perpendicular slopes": "Multiply slopes together - should equal -1",
                "Verify with points": "Substitute known points to check equation"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Slope Sprint",
                    timeLimit: 120,
                    problems: [
                        "Find slope: (1,2) and (3,6)",
                        "Find slope: (0,5) and (4,1)",
                        "Find slope: (-2,3) and (2,-1)",
                        "Find slope: (1,1) and (4,10)",
                        "Find slope: (-3,-2) and (3,4)"
                    ]
                },
                {
                    name: "Quick Equations",
                    timeLimit: 180,
                    problems: [
                        "y = mx + b with m=2, b=3",
                        "y = mx + b with m=-1, b=5",
                        "Through (0,4) with m=3",
                        "Through (2,7) with m=-2",
                        "Parallel to y=3x+1 through (0,5)"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Slope",
                    problem: "A line passes through (2, 5) and (6, y). The slope is 3. Find y.",
                    solution: "y = 17",
                    explanation: "Use slope formula: 3 = (y-5)/(6-2), solve for y"
                },
                {
                    name: "Intercepting Lines",
                    problem: "Line 1: y = 2x + b. Line 2: y = -x + 6. They intersect at x=2. Find b.",
                    solution: "b = 2",
                    explanation: "At x=2, both equations give same y: 2(2)+b = -2+6"
                },
                {
                    name: "Parallel Puzzle",
                    problem: "Three parallel lines: y=2x+1, y=2x+5, y=2x+b. Second line is equidistant from the other two. Find b.",
                    solution: "b = 3 or b = 9",
                    explanation: "Distance between 1 and 5 is 4, so equidistant is at 3 or at 9 (other side)"
                }
            ],
            applications: [
                {
                    scenario: "Cell Phone Plans",
                    problem: "Plan A: $25/month + $0.10/min. Plan B: $40/month + $0.05/min. When do they cost the same?",
                    equation1: "C = 0.10m + 25",
                    equation2: "C = 0.05m + 40",
                    solution: "300 minutes, $55"
                },
                {
                    scenario: "Temperature Conversion",
                    problem: "At what temperature is Celsius equal to Fahrenheit?",
                    equation: "C = (5/9)(C - 32)",
                    solution: "-40 degrees"
                },
                {
                    scenario: "Meeting Point",
                    problem: "Car A starts 100 miles east, travels west at 50 mph. Car B starts at origin, travels east at 60 mph. When do they meet?",
                    equations: "A: d = -50t + 100, B: d = 60t",
                    solution: "0.909 hours (about 55 minutes), about 54.5 miles from origin"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Find equation through (2, 5) with slope 3",
                        "y = mx + b",
                        "5 = 3(2) + b",
                        "5 = 6 + b",
                        "b = -1",  // Correct so far
                        "y = 3x + 1"  // ERROR: should be y = 3x - 1
                    ],
                    correctAnswer: "y = 3x - 1",
                    errorType: "Sign error when writing final equation"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Find slope through (1, 4) and (5, 12)",
                        "m = (5 - 1)/(12 - 4)",  // ERROR: swapped coordinates
                        "m = 4/8 = 1/2"
                    ],
                    correctAnswer: "m = 2",
                    errorType: "Swapped x and y in slope formula"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "Find perpendicular to y = 2x + 3 through (4, 5)",
                        "Perpendicular slope = -2",  // ERROR: should be -1/2
                        "5 = -2(4) + b",
                        "b = 13",
                        "y = -2x + 13"
                    ],
                    correctAnswer: "y = -½x + 7",
                    errorType: "Took negative instead of negative reciprocal"
                }
            ]
        };
    }

    // MAIN SOLVER METHOD
    solveLineEquationProblem(config) {
        const { equation, scenario, parameters, problemType, context } = config;

        try {
            this.currentProblem = this.parseLineEquationProblem(equation, scenario, parameters, problemType, context);
            this.currentSolution = this.solveLineEquationProblem_Internal(this.currentProblem);
            this.solutionSteps = this.generateLineEquationSteps(this.currentProblem, this.currentSolution);
            this.generateLineEquationGraphData();
            this.generateLineEquationWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                equation: this.currentSolution?.equation,
                graphData: this.graphData
            };

        } catch (error) {
            throw new Error(`Failed to solve line equation problem: ${error.message}`);
        }
    }

    parseLineEquationProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = equation ? this.cleanMathExpression(equation) : '';

        if (problemType && this.lineEquationTypes[problemType]) {
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

        // Auto-detect problem type
        for (const [type, config] of Object.entries(this.lineEquationTypes)) {
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

        // Default based on provided parameters
        if (parameters.m !== undefined && parameters.b !== undefined) {
            return {
                originalInput: equation || 'Slope-intercept form with given m and b',
                cleanInput: cleanInput,
                type: 'slope_intercept_from_slope_and_intercept',
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        if (parameters.m !== undefined && (parameters.x1 !== undefined || parameters.y1 !== undefined)) {
            return {
                originalInput: equation || 'Point and slope given',
                cleanInput: cleanInput,
                type: 'slope_intercept_from_point_and_slope',
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize line equation problem type from: ${equation || scenario}`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/≤/g, '<=')
            .replace(/≥/g, '>=')
            .replace(/≠/g, '!=')
            .trim();
    }

    solveLineEquationProblem_Internal(problem) {
        const solver = this.lineEquationTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // LINE EQUATION SOLVERS

    solveSlopeInterceptFromSlopeAndIntercept(problem) {
        const { m, b } = problem.parameters;

        return {
            equation: `y = ${this.formatCoefficient(m)}x ${this.formatConstant(b)}`,
            type: 'Slope-Intercept Form',
            slope: m,
            yIntercept: b,
            slopeInterpretation: this.interpretSlope(m),
            interceptInterpretation: `Line crosses y-axis at (0, ${b})`,
            category: 'slope_intercept',
            graphingInstructions: [
                `Plot y-intercept at (0, ${b})`,
                `Use slope ${m} to find next point`,
                `Draw line through points`
            ]
        };
    }

    solveSlopeInterceptFromPointAndSlope(problem) {
        const { m, x1, y1 } = problem.parameters;

        // Find b using y1 = m * x1 + b
        const b = y1 - m * x1;

        return {
            equation: `y = ${this.formatCoefficient(m)}x ${this.formatConstant(b)}`,
            type: 'Slope-Intercept from Point and Slope',
            slope: m,
            yIntercept: b,
            givenPoint: `(${x1}, ${y1})`,
            slopeInterpretation: this.interpretSlope(m),
            interceptInterpretation: `Y-intercept is ${b}`,
            category: 'slope_intercept',
            verification: this.verifyPoint(x1, y1, m, b)
        };
    }

    solveSlopeInterceptFromTwoPoints(problem) {
        const { x1, y1, x2, y2 } = problem.parameters;

        // Calculate slope
        const m = (y2 - y1) / (x2 - x1);

        // Calculate y-intercept
        const b = y1 - m * x1;

        return {
            equation: `y = ${this.formatCoefficient(m)}x ${this.formatConstant(b)}`,
            type: 'Slope-Intercept from Two Points',
            slope: m,
            yIntercept: b,
            point1: `(${x1}, ${y1})`,
            point2: `(${x2}, ${y2})`,
            slopeCalculation: `m = (${y2} - ${y1})/(${x2} - ${x1}) = ${y2-y1}/${x2-x1} = ${m}`,
            category: 'slope_intercept',
            verification: {
                point1: this.verifyPoint(x1, y1, m, b),
                point2: this.verifyPoint(x2, y2, m, b)
            }
        };
    }

    solvePointSlopeFromPointAndSlope(problem) {
        const { m, x1, y1 } = problem.parameters;

        return {
            equation: `y - ${y1} = ${this.formatCoefficient(m)}(x - ${x1})`,
            type: 'Point-Slope Form',
            slope: m,
            point: `(${x1}, ${y1})`,
            slopeInterpretation: this.interpretSlope(m),
            category: 'point_slope',
            slopeInterceptEquivalent: this.convertPointSlopeToSlopeIntercept(m, x1, y1)
        };
    }

    solvePointSlopeFromTwoPoints(problem) {
        const { x1, y1, x2, y2 } = problem.parameters;

        const m = (y2 - y1) / (x2 - x1);

        return {
            equation: `y - ${y1} = ${this.formatCoefficient(m)}(x - ${x1})`,
            alternativeForm: `y - ${y2} = ${this.formatCoefficient(m)}(x - ${x2})`,
            type: 'Point-Slope from Two Points',
            slope: m,
            slopeCalculation: `m = (${y2} - ${y1})/(${x2} - ${x1}) = ${m}`,
            usedPoint: `(${x1}, ${y1})`,
            alternativePoint: `(${x2}, ${y2})`,
            category: 'point_slope',
            note: 'Either point can be used; both give equivalent equations'
        };
    }

    solveFindSlope(problem) {
        const { x1, y1, x2, y2 } = problem.parameters;

        if (x2 === x1) {
            return {
                slope: 'Undefined',
                type: 'Vertical Line',
                reason: 'Division by zero in slope formula',
                calculation: `m = (${y2} - ${y1})/(${x2} - ${x1}) = ${y2-y1}/0`,
                lineEquation: `x = ${x1}`,
                category: 'finding_slope'
            };
        }

        const m = (y2 - y1) / (x2 - x1);

        let slopeType;
        if (m > 0) slopeType = 'Positive (rising left to right)';
        else if (m < 0) slopeType = 'Negative (falling left to right)';
        else slopeType = 'Zero (horizontal line)';

        return {
            slope: m,
            type: 'Slope from Two Points',
            calculation: `m = (${y2} - ${y1})/(${x2} - ${x1}) = ${y2-y1}/${x2-x1} = ${m}`,
            slopeType: slopeType,
            interpretation: this.interpretSlope(m),
            category: 'finding_slope'
        };
    }

    solveConvertPointSlopeToSlopeIntercept(problem) {
        const { m, x1, y1 } = problem.parameters;

        const b = y1 - m * x1;

        return {
            originalForm: `y - ${y1} = ${this.formatCoefficient(m)}(x - ${x1})`,
            slopeInterceptForm: `y = ${this.formatCoefficient(m)}x ${this.formatConstant(b)}`,
            type: 'Conversion: Point-Slope to Slope-Intercept',
            steps: [
                `Start: y - ${y1} = ${m}(x - ${x1})`,
                `Distribute: y - ${y1} = ${m}x - ${m * x1}`,
                `Add ${y1}: y = ${m}x - ${m * x1} + ${y1}`,
                `Simplify: y = ${m}x ${this.formatConstant(b)}`
            ],
            category: 'converting_forms'
        };
    }

    solveConvertSlopeInterceptToPointSlope(problem) {
        const { m, b, x1, y1 } = problem.parameters;

        // If no specific point given, use y-intercept
        const useX = x1 !== undefined ? x1 : 0;
        const useY = y1 !== undefined ? y1 : b;

        return {
            originalForm: `y = ${this.formatCoefficient(m)}x ${this.formatConstant(b)}`,
            pointSlopeForm: `y - ${useY} = ${this.formatCoefficient(m)}(x - ${useX})`,
            type: 'Conversion: Slope-Intercept to Point-Slope',
            usedPoint: `(${useX}, ${useY})`,
            note: 'Any point on the line can be used; (0, b) is common choice',
            category: 'converting_forms'
        };
    }

    solveParallelLine(problem) {
        const { m, x1, y1 } = problem.parameters;

        // Parallel line has same slope
        const b = y1 - m * x1;

        return {
            equation: `y = ${this.formatCoefficient(m)}x ${this.formatConstant(b)}`,
            type: 'Parallel Line',
            slope: m,
            yIntercept: b,
            throughPoint: `(${x1}, ${y1})`,
            originalSlope: m,
            relationship: 'Parallel lines have identical slopes',
            category: 'parallel_perpendicular'
        };
    }

    solvePerpendicularLine(problem) {
        const { m, x1, y1 } = problem.parameters;

        // Perpendicular slope is negative reciprocal
        const perpSlope = -1 / m;
        const b = y1 - perpSlope * x1;

        return {
            equation: `y = ${this.formatCoefficient(perpSlope)}x ${this.formatConstant(b)}`,
            type: 'Perpendicular Line',
            slope: perpSlope,
            yIntercept: b,
            throughPoint: `(${x1}, ${y1})`,
            originalSlope: m,
            perpendicularSlope: perpSlope,
            relationship: `Perpendicular slopes are negative reciprocals: ${m} × ${perpSlope} = -1`,
            category: 'parallel_perpendicular',
            verification: `${m} × ${perpSlope} = ${m * perpSlope}`
        };
    }

    solveGraphLineSlopeIntercept(problem) {
        const { m, b } = problem.parameters;

        return {
            equation: `y = ${this.formatCoefficient(m)}x ${this.formatConstant(b)}`,
            type: 'Graph Line',
            slope: m,
            yIntercept: b,
            category: 'graphing',
            graphingSteps: [
                `1. Plot y-intercept: (0, ${b})`,
                `2. From y-intercept, use slope ${m}:`,
                `   - If slope is ${m}, move right 1, ${m > 0 ? 'up' : 'down'} ${Math.abs(m)}`,
                `3. Plot second point`,
                `4. Draw line through both points`
            ],
            keyPoints: [
                `(0, ${b})`,
                `(1, ${m + b})`,
                `(2, ${2*m + b})`
            ]
        };
    }

    solveWordProblemCost(problem) {
        const { rate, fixedCost, scenario } = problem.parameters;

        return {
            equation: `C = ${rate}x ${this.formatConstant(fixedCost)}`,
            type: 'Cost Word Problem',
            slope: rate,
            yIntercept: fixedCost,
            interpretation: {
                slope: `$${rate} per unit (variable cost)`,
                yIntercept: `$${fixedCost} (fixed cost)`,
                equation: 'Total Cost = (rate × quantity) + fixed cost'
            },
            scenario: scenario || 'Cost calculation',
            category: 'word_problems'
        };
    }

    solveWordProblemMotion(problem) {
        const { speed, initialPosition, scenario } = problem.parameters;

        return {
            equation: `d = ${speed}t ${this.formatConstant(initialPosition)}`,
            type: 'Motion Word Problem',
            slope: speed,
            yIntercept: initialPosition,
            interpretation: {
                slope: `${speed} units per time (speed/velocity)`,
                yIntercept: `${initialPosition} (starting position)`,
                equation: 'Distance = (speed × time) + initial position'
            },
            scenario: scenario || 'Distance-time relationship',
            category: 'word_problems'
        };
    }

    solveHorizontalLine(problem) {
        const { y } = problem.parameters;

        return {
            equation: `y = ${y}`,
            type: 'Horizontal Line',
            slope: 0,
            yIntercept: y,
            properties: [
                'Slope is 0',
                'All points have same y-coordinate',
                'Parallel to x-axis',
                `Passes through (0, ${y})`
            ],
            category: 'special_cases'
        };
    }

    solveVerticalLine(problem) {
        const { x } = problem.parameters;

        return {
            equation: `x = ${x}`,
            type: 'Vertical Line',
            slope: 'Undefined',
            properties: [
                'Slope is undefined (division by zero)',
                'All points have same x-coordinate',
                'Parallel to y-axis',
                'Not a function (fails vertical line test)'
            ],
            category: 'special_cases'
        };
    }

    // HELPER METHODS

    formatCoefficient(m) {
        if (m === 1) return '';
        if (m === -1) return '-';
        return m.toString();
    }

    formatConstant(b) {
        if (b === 0) return '';
        if (b > 0) return `+ ${b}`;
        return `- ${Math.abs(b)}`;
    }

    interpretSlope(m) {
        if (m === 0) return 'Horizontal line (no change in y)';
        if (m > 0) return `Line rises: for every 1 unit right, go up ${m} unit${Math.abs(m) !== 1 ? 's' : ''}`;
        return `Line falls: for every 1 unit right, go down ${Math.abs(m)} unit${Math.abs(m) !== 1 ? 's' : ''}`;
    }

    verifyPoint(x, y, m, b) {
        const calculatedY = m * x + b;
        const isValid = Math.abs(calculatedY - y) < 1e-9;

        return {
            point: `(${x}, ${y})`,
            substitution: `${y} = ${m}(${x}) ${this.formatConstant(b)}`,
            calculated: calculatedY,
            given: y,
            isValid: isValid
        };
    }

    convertPointSlopeToSlopeIntercept(m, x1, y1) {
        const b = y1 - m * x1;
        return `y = ${this.formatCoefficient(m)}x ${this.formatConstant(b)}`;
    }

    // STEP GENERATION

    generateLineEquationSteps(problem, solution) {
        let baseSteps = this.generateBaseLineEquationSteps(problem, solution);

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

    generateBaseLineEquationSteps(problem, solution) {
        const { type } = problem;
        const category = this.lineEquationTypes[type]?.category;

        switch(category) {
            case 'slope_intercept':
                return this.generateSlopeInterceptSteps(problem, solution);
            case 'point_slope':
                return this.generatePointSlopeSteps(problem, solution);
            case 'finding_slope':
                return this.generateFindingSlopeSteps(problem, solution);
            case 'parallel_perpendicular':
                return this.generateParallelPerpendicularSteps(problem, solution);
            case 'converting_forms':
                return this.generateConvertingFormsSteps(problem, solution);
            case 'graphing':
                return this.generateGraphingSteps(problem, solution);
            case 'word_problems':
                return this.generateWordProblemSteps(problem, solution);
            case 'special_cases':
                return this.generateSpecialCaseSteps(problem, solution);
            default:
                return this.generateGenericLineEquationSteps(problem, solution);
        }
    }

    generateSlopeInterceptSteps(problem, solution) {
        const steps = [];
        const { m, b, x1, y1, x2, y2 } = problem.parameters;

        if (problem.type === 'slope_intercept_from_slope_and_intercept') {
            // Direct substitution
            steps.push({
                stepNumber: 1,
                step: 'Identify given values',
                description: 'Identify slope (m) and y-intercept (b)',
                values: `m = ${m}, b = ${b}`,
                reasoning: 'We have both values needed for slope-intercept form',
                goalStatement: 'Write equation in form y = mx + b'
            });

            steps.push({
                stepNumber: 2,
                step: 'Substitute into y = mx + b',
                description: 'Replace m and b with their values',
                beforeExpression: 'y = mx + b',
                afterExpression: solution.equation,
                reasoning: 'Direct substitution gives us the line equation',
                algebraicRule: 'Substitution'
            });

            steps.push({
                stepNumber: 3,
                step: 'Final equation',
                description: 'The equation of the line',
                expression: solution.equation,
                finalAnswer: true,
                interpretation: {
                    slope: solution.slopeInterpretation,
                    yIntercept: solution.interceptInterpretation
                }
            });

        } else if (problem.type === 'slope_intercept_from_point_and_slope') {
            // Find b using point
            steps.push({
                stepNumber: 1,
                step: 'Identify given information',
                description: 'List what we know',
                values: `Point: (${x1}, ${y1}), Slope: m = ${m}`,
                reasoning: 'We need to find b (y-intercept)',
                goalStatement: 'Use point to find b, then write y = mx + b'
            });

            steps.push({
                stepNumber: 2,
                step: 'Use point to find y-intercept',
                description: 'Substitute point into y = mx + b and solve for b',
                beforeExpression: 'y = mx + b',
                substitution: `${y1} = ${m}(${x1}) + b`,
                calculation: `${y1} = ${m * x1} + b`,
                reasoning: 'The point (x₁, y₁) must satisfy the equation',
                algebraicRule: 'Substitution'
            });

            const b_value = y1 - m * x1;
            steps.push({
                stepNumber: 3,
                step: 'Solve for b',
                description: 'Isolate b',
                beforeExpression: `${y1} = ${m * x1} + b`,
                operation: `Subtract ${m * x1} from both sides`,
                afterExpression: `b = ${y1} - ${m * x1}`,
                result: `b = ${b_value}`,
                reasoning: 'This gives us the y-intercept'
            });

            steps.push({
                stepNumber: 4,
                step: 'Write final equation',
                description: 'Substitute m and b into y = mx + b',
                expression: solution.equation,
                finalAnswer: true,
                verification: `Check: ${y1} = ${m}(${x1}) ${this.formatConstant(b_value)} ✓`
            });

        } else if (problem.type === 'slope_intercept_from_two_points') {
            // Find slope, then find b
            steps.push({
                stepNumber: 1,
                step: 'Identify given points',
                description: 'List the two points',
                values: `Point 1: (${x1}, ${y1}), Point 2: (${x2}, ${y2})`,
                reasoning: 'Need to find slope first, then y-intercept',
                goalStatement: 'Calculate m, then find b, then write y = mx + b'
            });

            steps.push({
                stepNumber: 2,
                step: 'Calculate slope',
                description: 'Use slope formula: m = (y₂ - y₁)/(x₂ - x₁)',
                formula: 'm = (y₂ - y₁)/(x₂ - x₁)',
                substitution: `m = (${y2} - ${y1})/(${x2} - ${x1})`,
                calculation: `m = ${y2 - y1}/${x2 - x1}`,
                result: `m = ${solution.slope}`,
                reasoning: 'Slope measures rise over run between the two points',
                visualHint: 'Draw slope triangle between points'
            });

            const b_value = y1 - solution.slope * x1;
            steps.push({
                stepNumber: 3,
                step: 'Find y-intercept using one point',
                description: `Use point (${x1}, ${y1}) to find b`,
                formula: 'y₁ = mx₁ + b',
                substitution: `${y1} = ${solution.slope}(${x1}) + b`,
                calculation: `${y1} = ${solution.slope * x1} + b`,
                solve: `b = ${y1} - ${solution.slope * x1}`,
                result: `b = ${b_value}`,
                reasoning: 'Either point can be used; both give same b'
            });

            steps.push({
                stepNumber: 4,
                step: 'Write final equation',
                description: 'Substitute m and b into y = mx + b',
                expression: solution.equation,
                finalAnswer: true,
                verification: {
                    point1: `Check (${x1}, ${y1}): ${y1} = ${solution.slope}(${x1}) ${this.formatConstant(b_value)} ✓`,
                    point2: `Check (${x2}, ${y2}): ${y2} = ${solution.slope}(${x2}) ${this.formatConstant(b_value)} ✓`
                }
            });
        }

        return steps;
    }

    generatePointSlopeSteps(problem, solution) {
        const steps = [];
        const { m, x1, y1, x2, y2 } = problem.parameters;

        if (problem.type === 'point_slope_from_point_and_slope') {
            steps.push({
                stepNumber: 1,
                step: 'Identify given information',
                description: 'List what we know',
                values: `Point: (${x1}, ${y1}), Slope: m = ${m}`,
                reasoning: 'We have everything needed for point-slope form',
                goalStatement: 'Write equation in form y - y₁ = m(x - x₁)'
            });

            steps.push({
                stepNumber: 2,
                step: 'Substitute into point-slope formula',
                description: 'Replace (x₁, y₁) and m in y - y₁ = m(x - x₁)',
                formula: 'y - y₁ = m(x - x₁)',
                substitution: `y - ${y1} = ${m}(x - ${x1})`,
                reasoning: 'Direct substitution gives point-slope form',
                algebraicRule: 'Point-slope form definition'
            });

            steps.push({
                stepNumber: 3,
                step: 'Final equation',
                description: 'The equation in point-slope form',
                expression: solution.equation,
                finalAnswer: true,
                note: 'Can be converted to slope-intercept by distributing and solving for y',
                slopeInterceptForm: solution.slopeInterceptEquivalent
            });

        } else if (problem.type === 'point_slope_from_two_points') {
            steps.push({
                stepNumber: 1,
                step: 'Identify given points',
                description: 'List the two points',
                values: `Point 1: (${x1}, ${y1}), Point 2: (${x2}, ${y2})`,
                reasoning: 'Need to find slope first',
                goalStatement: 'Calculate m, then use one point for point-slope form'
            });

            steps.push({
                stepNumber: 2,
                step: 'Calculate slope',
                description: 'Use slope formula',
                formula: 'm = (y₂ - y₁)/(x₂ - x₁)',
                substitution: `m = (${y2} - ${y1})/(${x2} - ${x1})`,
                calculation: `m = ${y2 - y1}/${x2 - x1}`,
                result: `m = ${solution.slope}`,
                reasoning: 'This is the rate of change between the points'
            });

            steps.push({
                stepNumber: 3,
                step: 'Choose a point and substitute',
                description: `Using point (${x1}, ${y1})`,
                formula: 'y - y₁ = m(x - x₁)',
                substitution: `y - ${y1} = ${solution.slope}(x - ${x1})`,
                expression: solution.equation,
                note: `Could also use (${x2}, ${y2}): ${solution.alternativeForm}`,
                reasoning: 'Either point produces an equivalent equation'
            });

            steps.push({
                stepNumber: 4,
                step: 'Final equation',
                description: 'Point-slope form using first point',
                expression: solution.equation,
                finalAnswer: true,
                alternativeForm: solution.alternativeForm
            });
        }

        return steps;
    }

    generateFindingSlopeSteps(problem, solution) {
        const steps = [];
        const { x1, y1, x2, y2 } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Identify the two points',
            description: 'Label the points',
            values: `(x₁, y₁) = (${x1}, ${y1}), (x₂, y₂) = (${x2}, ${y2})`,
            reasoning: 'We need both points to calculate slope',
            goalStatement: 'Calculate m = (y₂ - y₁)/(x₂ - x₁)'
        });

        steps.push({
            stepNumber: 2,
            step: 'Write slope formula',
            description: 'Slope is rise over run',
            formula: 'm = (y₂ - y₁)/(x₂ - x₁)',
            reasoning: 'Slope measures vertical change per unit horizontal change',
            visualHint: 'Draw right triangle between points: vertical leg is rise, horizontal leg is run'
        });

        steps.push({
            stepNumber: 3,
            step: 'Substitute coordinates',
            description: 'Replace variables with actual values',
            substitution: `m = (${y2} - ${y1})/(${x2} - ${x1})`,
            reasoning: 'Use same order for both numerator and denominator',
            warningFlag: 'Keep subtraction order consistent!'
        });

        if (x2 === x1) {
            steps.push({
                stepNumber: 4,
                step: 'Identify vertical line',
                description: 'Denominator is zero',
                calculation: `m = ${y2 - y1}/0`,
                result: 'Slope is undefined',
                reasoning: 'Vertical lines have undefined slope (cannot divide by zero)',
                lineEquation: `x = ${x1}`,
                finalAnswer: true
            });
        } else {
            steps.push({
                stepNumber: 4,
                step: 'Calculate',
                description: 'Perform the subtraction and division',
                calculation: `m = ${y2 - y1}/${x2 - x1}`,
                result: `m = ${solution.slope}`,
                reasoning: 'Simplify the fraction if possible'
            });

            steps.push({
                stepNumber: 5,
                step: 'Interpret the slope',
                description: 'Understand what the slope means',
                slope: solution.slope,
                slopeType: solution.slopeType,
                interpretation: solution.interpretation,
                finalAnswer: true,
                visualDescription: solution.slope > 0 ? 'Line rises from left to right /' :
                                  solution.slope < 0 ? 'Line falls from left to right \\' :
                                  'Horizontal line —'
            });
        }

        return steps;
    }

    generateParallelPerpendicularSteps(problem, solution) {
        const steps = [];
        const { m, x1, y1 } = problem.parameters;

        if (problem.type === 'parallel_line') {
            steps.push({
                stepNumber: 1,
                step: 'Understand parallel lines',
                description: 'Parallel lines have the same slope',
                given: `Original slope: m = ${m}`,
                reasoning: 'Parallel lines never intersect because they have identical slopes',
                goalStatement: 'Use same slope with new point'
            });

            steps.push({
                stepNumber: 2,
                step: 'Use the same slope',
                description: 'Parallel line has identical slope',
                slope: `m = ${m}`,
                throughPoint: `(${x1}, ${y1})`,
                reasoning: 'This ensures the lines remain parallel'
            });

            const b = y1 - m * x1;
            steps.push({
                stepNumber: 3,
                step: 'Find y-intercept',
                description: 'Use the given point to find b',
                formula: 'y = mx + b',
                substitution: `${y1} = ${m}(${x1}) + b`,
                solve: `b = ${y1} - ${m * x1} = ${b}`,
                reasoning: 'This gives us the specific parallel line through our point'
            });

            steps.push({
                stepNumber: 4,
                step: 'Write final equation',
                description: 'Parallel line equation',
                expression: solution.equation,
                finalAnswer: true,
                verification: `Same slope as original: m = ${m} ✓`
            });

        } else if (problem.type === 'perpendicular_line') {
            steps.push({
                stepNumber: 1,
                step: 'Understand perpendicular lines',
                description: 'Perpendicular lines have negative reciprocal slopes',
                given: `Original slope: m₁ = ${m}`,
                rule: 'm₁ × m₂ = -1',
                reasoning: 'Perpendicular lines intersect at 90° angles',
                goalStatement: 'Find negative reciprocal slope, then use with point'
            });

            const perpSlope = -1 / m;
            steps.push({
                stepNumber: 2,
                step: 'Calculate perpendicular slope',
                description: 'Find negative reciprocal',
                formula: 'm₂ = -1/m₁',
                calculation: `m₂ = -1/${m}`,
                result: `m₂ = ${perpSlope}`,
                reasoning: 'Flip the fraction and change the sign',
                check: `Verify: ${m} × ${perpSlope} = ${m * perpSlope} = -1 ✓`
            });

            const b = y1 - perpSlope * x1;
            steps.push({
                stepNumber: 3,
                step: 'Find y-intercept',
                description: 'Use given point with perpendicular slope',
                formula: 'y = mx + b',
                substitution: `${y1} = ${perpSlope}(${x1}) + b`,
                solve: `b = ${y1} - ${perpSlope * x1} = ${b}`,
                reasoning: 'This gives the perpendicular line through our point'
            });

            steps.push({
                stepNumber: 4,
                step: 'Write final equation',
                description: 'Perpendicular line equation',
                expression: solution.equation,
                finalAnswer: true,
                verification: solution.verification
            });
        }

        return steps;
    }

    generateConvertingFormsSteps(problem, solution) {
        const steps = [];
        const { m, x1, y1, b } = problem.parameters;

        if (problem.type === 'convert_point_slope_to_slope_intercept') {
            steps.push({
                stepNumber: 1,
                step: 'Start with point-slope form',
                description: 'Given equation',
                expression: solution.originalForm,
                goalStatement: 'Convert to y = mx + b by distributing and solving for y'
            });

            steps.push({
                stepNumber: 2,
                step: 'Distribute the slope',
                description: `Distribute ${m} across (x - ${x1})`,
                beforeExpression: `y - ${y1} = ${m}(x - ${x1})`,
                afterExpression: `y - ${y1} = ${m}x - ${m * x1}`,
                reasoning: 'Apply distributive property: a(b - c) = ab - ac',
                algebraicRule: 'Distributive Property'
            });

            const b_value = y1 - m * x1;
            steps.push({
                stepNumber: 3,
                step: 'Solve for y',
                description: `Add ${y1} to both sides`,
                beforeExpression: `y - ${y1} = ${m}x - ${m * x1}`,
                operation: `+ ${y1}`,
                afterExpression: `y = ${m}x - ${m * x1} + ${y1}`,
                reasoning: 'Isolate y on the left side'
            });

            steps.push({
                stepNumber: 4,
                step: 'Simplify',
                description: 'Combine constant terms',
                calculation: `-${m * x1} + ${y1} = ${b_value}`,
                expression: solution.slopeInterceptForm,
                finalAnswer: true,
                reasoning: 'This is now in slope-intercept form y = mx + b'
            });

        } else if (problem.type === 'convert_slope_intercept_to_point_slope') {
            const useX = x1 !== undefined ? x1 : 0;
            const useY = y1 !== undefined ? y1 : b;

            steps.push({
                stepNumber: 1,
                step: 'Start with slope-intercept form',
                description: 'Given equation',
                expression: solution.originalForm,
                slope: `m = ${m}`,
                yIntercept: `b = ${b}`,
                goalStatement: 'Choose a point and write in point-slope form'
            });

            steps.push({
                stepNumber: 2,
                step: 'Choose a point on the line',
                description: `Select point (${useX}, ${useY})`,
                reasoning: useX === 0 ? 'Using y-intercept (0, b) is convenient' : 'Any point on the line works',
                note: 'Could verify point is on line by substitution'
            });

            steps.push({
                stepNumber: 3,
                step: 'Write in point-slope form',
                description: 'Substitute point and slope into y - y₁ = m(x - x₁)',
                formula: 'y - y₁ = m(x - x₁)',
                substitution: `y - ${useY} = ${m}(x - ${useX})`,
                expression: solution.pointSlopeForm,
                finalAnswer: true,
                note: solution.note
            });
        }

        return steps;
    }

    generateGraphingSteps(problem, solution) {
        const steps = [];
        const { m, b } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Identify slope and y-intercept',
            description: 'From y = mx + b',
            slope: `m = ${m}`,
            yIntercept: `b = ${b}`,
            reasoning: 'These tell us where to start and how steep the line is',
            goalStatement: 'Plot y-intercept, use slope to find second point, draw line'
        });

        steps.push({
            stepNumber: 2,
            step: 'Plot y-intercept',
            description: 'Mark the point where line crosses y-axis',
            point: `(0, ${b})`,
            reasoning: 'This is our starting point',
            visualHint: 'Find y-axis, go to y = ' + b
        });

        steps.push({
            stepNumber: 3,
            step: 'Use slope to find next point',
            description: `From (0, ${b}), use slope m = ${m}`,
            interpretation: solution.slope > 0 ? 
                `Move right 1, up ${m}` : 
                solution.slope < 0 ?
                `Move right 1, down ${Math.abs(m)}` :
                'Move right (y stays same)',
            nextPoint: `(1, ${m + b})`,
            reasoning: 'Slope tells us rise over run',
            visualHint: 'Think of slope as stairs: run right, then rise up/down'
        });

        steps.push({
            stepNumber: 4,
            step: 'Plot additional points (optional)',
            description: 'Find more points for accuracy',
            additionalPoints: solution.keyPoints.slice(2),
            reasoning: 'More points help ensure line is correct'
        });

        steps.push({
            stepNumber: 5,
            step: 'Draw the line',
            description: 'Connect points with straight line',
            instruction: 'Use ruler or straightedge to draw line through all points',
            reasoning: 'Line extends infinitely in both directions',
            finalAnswer: true,
            note: 'Add arrows on both ends to show line continues'
        });

        return steps;
    }

    generateWordProblemSteps(problem, solution) {
        const steps = [];

        if (problem.type === 'word_problem_cost') {
            const { rate, fixedCost, scenario } = problem.parameters;

            steps.push({
                stepNumber: 1,
                step: 'Identify the variables',
                description: 'Determine what the variables represent',
                scenario: scenario,
                variables: {
                    x: 'Quantity (items, units, etc.)',
                    C: 'Total cost'
                },
                reasoning: 'Clear variable definitions help set up the equation',
                goalStatement: 'Write equation in form: Total = (rate × quantity) + fixed cost'
            });

            steps.push({
                stepNumber: 2,
                step: 'Identify rate (slope)',
                description: 'Find the variable cost per unit',
                rate: `$${rate} per unit`,
                interpretation: 'This is the slope (m) of the equation',
                reasoning: 'The rate tells how cost changes with each additional unit'
            });

            steps.push({
                stepNumber: 3,
                step: 'Identify fixed cost (y-intercept)',
                description: 'Find the starting cost (when x = 0)',
                fixedCost: `$${fixedCost}`,
                interpretation: 'This is the y-intercept (b) of the equation',
                reasoning: 'Fixed cost is paid regardless of quantity'
            });

            steps.push({
                stepNumber: 4,
                step: 'Write the equation',
                description: 'Combine rate and fixed cost',
                equation: solution.equation,
                finalAnswer: true,
                interpretation: solution.interpretation
            });

        } else if (problem.type === 'word_problem_motion') {
            const { speed, initialPosition, scenario } = problem.parameters;

            steps.push({
                stepNumber: 1,
                step: 'Identify the variables',
                description: 'Determine what the variables represent',
                scenario: scenario,
                variables: {
                    t: 'Time',
                    d: 'Distance'
                },
                reasoning: 'Define variables clearly for the motion problem',
                goalStatement: 'Write equation: Distance = (speed × time) + initial position'
            });

            steps.push({
                stepNumber: 2,
                step: 'Identify speed (slope)',
                description: 'Find the rate of travel',
                speed: `${speed} units per time`,
                interpretation: 'This is the slope (m)',
                reasoning: 'Speed tells how distance changes over time'
            });

            steps.push({
                stepNumber: 3,
                step: 'Identify initial position (y-intercept)',
                description: 'Find starting distance (when t = 0)',
                initialPosition: `${initialPosition} units`,
                interpretation: 'This is the y-intercept (b)',
                reasoning: 'Starting position at time zero'
            });

            steps.push({
                stepNumber: 4,
                step: 'Write the equation',
                description: 'Combine speed and initial position',
                equation: solution.equation,
                finalAnswer: true,
                interpretation: solution.interpretation
            });
        }

        return steps;
    }

    generateSpecialCaseSteps(problem, solution) {
        const steps = [];

        if (problem.type === 'horizontal_line') {
            const { y } = problem.parameters;

            steps.push({
                stepNumber: 1,
                step: 'Recognize horizontal line',
                description: 'All points have the same y-coordinate',
                property: `y = ${y} for all x values`,
                reasoning: 'No matter what x is, y is always ' + y,
                goalStatement: 'Write equation y = constant'
            });

            steps.push({
                stepNumber: 2,
                step: 'Determine slope',
                description: 'Horizontal lines have zero slope',
                slope: 'm = 0',
                reasoning: 'No rise as you move horizontally (run)',
                calculation: 'Rise/Run = 0/any number = 0'
            });

            steps.push({
                stepNumber: 3,
                step: 'Write equation',
                description: 'Simple form for horizontal line',
                equation: solution.equation,
                finalAnswer: true,
                properties: solution.properties,
                visualDescription: 'Flat line parallel to x-axis at y = ' + y
            });

        } else if (problem.type === 'vertical_line') {
            const { x } = problem.parameters;

            steps.push({
                stepNumber: 1,
                step: 'Recognize vertical line',
                description: 'All points have the same x-coordinate',
                property: `x = ${x} for all y values`,
                reasoning: 'No matter what y is, x is always ' + x,
                goalStatement: 'Write equation x = constant'
            });

            steps.push({
                stepNumber: 2,
                step: 'Determine slope',
                description: 'Vertical lines have undefined slope',
                slope: 'Undefined',
                reasoning: 'Division by zero in slope formula',
                calculation: 'Rise/Run = any number/0 = undefined'
            });

            steps.push({
                stepNumber: 3,
                step: 'Write equation',
                description: 'Simple form for vertical line',
                equation: solution.equation,
                finalAnswer: true,
                properties: solution.properties,
                visualDescription: 'Straight up-and-down line parallel to y-axis at x = ' + x,
                note: 'Not a function (fails vertical line test)'
            });
        }

        return steps;
    }

    generateGenericLineEquationSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Line equation',
            description: 'Solve the given line equation problem',
            expression: solution.equation,
            reasoning: 'Apply appropriate line equation technique',
            solution: solution
        }];
    }

    // ENHANCED EXPLANATION METHODS (reuse from linear equations with adaptations)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanationLineEq(step, problem),
                procedural: this.getProceduralExplanationLineEq(step),
                visual: this.getVisualExplanationLineEq(step, problem),
                algebraic: this.getAlgebraicExplanationLineEq(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisitesLineEq(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyLineEq(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPromptsLineEq(step);
        }

        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestionLineEq(step);
        }

        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findRealWorldConnectionLineEq(step, problem);
        }

        return enhanced;
    }

    getConceptualExplanationLineEq(step, problem) {
        const conceptualExplanations = {
            'Identify given values': 'Understanding what information we have helps us choose the right form of equation.',
            'Calculate slope': 'Slope represents the rate of change - how much y changes for each unit change in x.',
            'Find y-intercept': 'The y-intercept is where the line crosses the y-axis, representing the starting value when x = 0.',
            'Substitute into y = mx + b': 'Slope-intercept form directly shows both the rate of change (m) and starting value (b).',
            'Write in point-slope form': 'Point-slope form captures the essence of a line: it passes through a specific point with a certain slope.',
            'Distribute the slope': 'Expanding the equation helps us see it in a more familiar form.',
            'Calculate perpendicular slope': 'Perpendicular lines meet at right angles, requiring slopes that are negative reciprocals.',
            'Use the same slope': 'Parallel lines maintain the same direction and steepness, so they share the same slope.',
            'Plot y-intercept': 'Starting at the y-intercept gives us a reference point to build the line from.'
        };

        return conceptualExplanations[step.step] || 'This step moves us closer to our equation.';
    }

    getProceduralExplanationLineEq(step) {
        if (step.formula) {
            return `1. Write the formula: ${step.formula}
2. Substitute known values
3. Perform calculations
4. Simplify the result`;
        }
        if (step.operation) {
            return `1. Perform the operation: ${step.operation}
2. Apply it to both sides
3. Simplify
4. Write the new form`;
        }
        return 'Follow the standard procedure for this type of step.';
    }

    getVisualExplanationLineEq(step, problem) {
        const category = this.lineEquationTypes[problem.type]?.category;
        
        const visualExplanations = {
            'slope_intercept': 'Picture the line on a graph: start at y-intercept (0,b), then use slope to climb/descend.',
            'finding_slope': 'Visualize a slope triangle between two points: vertical leg (rise) over horizontal leg (run).',
            'point_slope': 'Imagine a line passing through a specific point, tilted at an angle determined by the slope.',
            'parallel_perpendicular': 'Parallel lines run alongside each other like train tracks. Perpendicular lines meet like corner of a room.',
            'graphing': 'Start at y-intercept dot, use slope like a staircase pattern to find next dots, connect with straight line.'
        };

        return visualExplanations[category] || 'Visualize this step on a coordinate plane.';
    }

    getAlgebraicExplanationLineEq(step) {
        const algebraicRules = {
            'Identify given values': 'Given information forms the basis for algebraic substitution',
            'Calculate slope': 'Slope formula: m = Δy/Δx = (y₂-y₁)/(x₂-x₁)',
            'Find y-intercept': 'Substitution property: Replace variables with known values',
            'Substitute into y = mx + b': 'Definition of slope-intercept form',
            'Distribute the slope': 'Distributive Property: a(b - c) = ab - ac',
            'Calculate perpendicular slope': 'Perpendicular Slope Theorem: m₁ · m₂ = -1',
            'Use the same slope': 'Parallel Line Theorem: Parallel lines have equal slopes'
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
                'slope': 'steepness',
                'y-intercept': 'starting point on y-axis',
                'substitute': 'plug in',
                'distribute': 'multiply through',
                'coefficient': 'number with the variable',
                'perpendicular': 'at right angles',
                'parallel': 'same direction, never touching',
                'negative reciprocal': 'flip and change sign'
            },
            intermediate: {
                'slope': 'slope',
                'y-intercept': 'y-intercept',
                'substitute': 'substitute',
                'distribute': 'distribute',
                'coefficient': 'coefficient',
                'perpendicular': 'perpendicular',
                'parallel': 'parallel',
                'negative reciprocal': 'negative reciprocal'
            },
            ELI5: {
                'slope': 'how steep the line is',
                'y-intercept': 'where the line crosses the up-and-down axis',
                'substitute': 'replace the letter with the number',
                'distribute': 'give the number to everything inside the parentheses',
                'coefficient': 'the number next to the letter',
                'perpendicular': 'like a plus sign or the corner of a square',
                'parallel': 'like railroad tracks that never meet',
                'negative reciprocal': 'flip the fraction upside down and change plus to minus or minus to plus'
            },
            detailed: {
                'slope': 'slope (rate of change)',
                'y-intercept': 'y-intercept (initial value)',
                'substitute': 'substitute (replacement)',
                'distribute': 'distribute (apply multiplication)',
                'coefficient': 'coefficient (multiplicative constant)',
                'perpendicular': 'perpendicular (orthogonal)',
                'parallel': 'parallel (equidistant)',
                'negative reciprocal': 'negative reciprocal (multiplicative inverse with sign change)'
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
        const category = this.lineEquationTypes[problemType]?.category || 'slope_intercept';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsLineEq(step, problemType),
                checkPoints: this.generateCheckPointsLineEq(step),
                warningFlags: this.identifyWarningFlagsLineEq(step, problemType)
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestionLineEq(step),
                expectedResult: this.describeExpectedResultLineEq(step),
                troubleshooting: this.generateTroubleshootingTipsLineEq(step)
            }
        };
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsLineEq(step, problem),
                subSteps: this.breakIntoSubStepsLineEq(step),
                hints: this.generateProgressiveHintsLineEq(step, problem),
                practiceVariation: this.generatePracticeVariationLineEq(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcessLineEq(step),
                decisionPoints: this.identifyDecisionPointsLineEq(step),
                alternativeApproaches: this.suggestAlternativeMethodsLineEq(step, problem)
            }
        }));
    }

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateELI5ExplanationLineEq(step, problem),
                analogy: this.findRelevantAnalogyLineEq(step, problem),
                simpleLanguage: this.convertToSimpleLanguage(step.description),
                visualization: this.suggestVisualizationLineEq(step)
            }
        }));
    }

    generateELI5ExplanationLineEq(step, problem) {
        const ELI5Explanations = {
            'Identify given values': "We're looking at what we already know, like puzzle pieces we've been given!",
            'Calculate slope': "We're figuring out how steep our line is - like how steep a slide at the playground is!",
            'Find y-intercept': "We're finding where our line starts on the up-down axis - like finding your starting spot in a race!",
            'Substitute into y = mx + b': "We're putting our numbers into the special equation formula, like following a recipe!",
            'Distribute the slope': "We're spreading out the number to everything in the parentheses, like sharing cookies with friends!",
            'Use the same slope': "Parallel lines go the same direction, like two kids sliding down parallel slides!",
            'Calculate perpendicular slope': "Perpendicular lines make a corner, like the corner of your bedroom!",
            'Plot y-intercept': "We're putting a dot where the line starts on the graph!",
            'Use slope to find next point': "We're climbing stairs: go right, then up or down, just like slope tells us!"
        };

        return ELI5Explanations[step.step] || "We're taking another step to find our line's equation!";
    }

    findRelevantAnalogyLineEq(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(this.lineEquationTypes[problem.type]?.category) || 
                analogy.suitableFor.includes('all')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of this like solving a puzzle - each step gets us closer to the complete picture!";
    }

    suggestVisualizationLineEq(step) {
        const visualizations = {
            'Identify given values': 'Write down what you know in a list',
            'Calculate slope': 'Draw a right triangle between your two points - vertical leg over horizontal leg',
            'Find y-intercept': 'Draw the y-axis and mark where your line crosses it',
            'Substitute into y = mx + b': 'Show boxes for m and b, then fill them in with your numbers',
            'Plot y-intercept': 'Put a big dot on the y-axis at your b value',
            'Use slope to find next point': 'From your first dot, draw stairs: run right, then rise up or down',
            'Distribute the slope': 'Show arrows from the outside number to each part inside parentheses',
            'Calculate perpendicular slope': 'Draw a plus sign or letter L to show perpendicular lines',
            'Use the same slope': 'Draw two parallel arrows or lines going the same direction'
        };

        return visualizations[step.step] || 'Draw a picture to represent what\'s happening';
    }

    generateStepBridge(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.expression || currentStep.result || 'completed this step'}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary because: ${this.explainStepNecessity(currentStep, nextStep)}`,
            howItHelps: `This will help by: ${this.explainStepBenefit(nextStep)}`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue building our equation`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
    }

    explainStepNecessity(currentStep, nextStep) {
        return `we need to continue toward our final equation`;
    }

    explainStepBenefit(nextStep) {
        return `getting us closer to the complete line equation`;
    }

    generatePreventionTipsLineEq(step, problemType) {
        const tips = {
            'Calculate slope': [
                'Subtract coordinates in same order: (y₂-y₁)/(x₂-x₁)',
                'Watch for sign errors with negative coordinates',
                'Simplify fractions when possible'
            ],
            'Find y-intercept': [
                'Substitute point correctly: y₁ = mx₁ + b',
                'Solve for b carefully',
                'Check arithmetic'
            ],
            'Distribute the slope': [
                'Multiply slope by BOTH terms in parentheses',
                'Watch signs when distributing negatives',
                'Don\'t forget the negative in (x - x₁)'
            ],
            'Calculate perpendicular slope': [
                'Remember: flip AND negate',
                'Check by multiplying: m₁ × m₂ should equal -1',
                'If original is a/b, perpendicular is -b/a'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Check each calculation'];
    }

    generateCheckPointsLineEq(step) {
        return [
            'Did I substitute values correctly?',
            'Are my calculations accurate?',
            'Does this result make sense?',
            'Am I moving toward the goal?'
        ];
    }

    identifyWarningFlagsLineEq(step, problemType) {
        const warnings = {
            finding_slope: step.step === 'Calculate slope' ?
                ['Watch for vertical lines (x₂ = x₁)', 'Keep subtraction order consistent'] : [],
            perpendicular: step.step === 'Calculate perpendicular slope' ?
                ['Must flip AND negate', 'Verify by multiplying slopes'] : [],
            point_slope: step.step === 'Substitute into point-slope formula' ?
                ['Watch the minus signs: y - y₁ and x - x₁', 'Use parentheses'] : []
        };

        const category = this.lineEquationTypes[problemType]?.category || 'slope_intercept';
        return warnings[category] || [];
    }

    generateSelfCheckQuestionLineEq(step) {
        const questions = {
            'Identify given values': 'Do I understand what information I have and what I need to find?',
            'Calculate slope': 'Did I subtract in the same order for y and x coordinates?',
            'Find y-intercept': 'Did I substitute the point correctly into y = mx + b?',
            'Substitute into y = mx + b': 'Did I place m and b in the correct positions?',
            'Distribute the slope': 'Did I multiply by both terms inside the parentheses?',
            'Calculate perpendicular slope': 'Did I both flip the fraction AND change the sign?',
            'Use the same slope': 'Did I use the exact same slope as the original line?',
            'Plot y-intercept': 'Did I plot the point (0, b) on the y-axis?',
            'Use slope to find next point': 'Did I move right first, then up/down according to slope?'
        };

        return questions[step.step] || 'Does this step make sense and move me toward my goal?';
    }

    describeExpectedResultLineEq(step) {
        const expectations = {
            'Identify given values': 'Clear list of known information',
            'Calculate slope': 'A single number (positive, negative, zero, or undefined)',
            'Find y-intercept': 'The value of b',
            'Substitute into y = mx + b': 'Complete equation in form y = mx + b',
            'Distribute the slope': 'Equation with parentheses removed',
            'Calculate perpendicular slope': 'Slope that when multiplied by original equals -1',
            'Plot y-intercept': 'Point marked on y-axis',
            'Draw the line': 'Straight line through all points'
        };

        return expectations[step.step] || 'Progress toward final equation';
    }

    generateTroubleshootingTipsLineEq(step) {
        return [
            'If stuck, review what you know vs. what you need',
            'Check arithmetic carefully',
            'Verify formula is correct for this problem type',
            'Try visualizing on a graph',
            'Check that answer makes sense in context'
        ];
    }

    generateGuidingQuestionsLineEq(step, problem) {
        const questions = {
            'Identify given values': [
                'What information has been provided?',
                'What am I asked to find?',
                'What form should my answer be in?'
            ],
            'Calculate slope': [
                'Which formula do I use for slope?',
                'In what order should I subtract coordinates?',
                'What does the slope tell me about the line?'
            ],
            'Find y-intercept': [
                'What is the y-intercept?',
                'How can I use a point to find b?',
                'What equation should I use?'
            ],
            'Substitute into y = mx + b': [
                'Which value is m?',
                'Which value is b?',
                'How do I write the final equation?'
            ],
            'Calculate perpendicular slope': [
                'What does perpendicular mean?',
                'How do I find the negative reciprocal?',
                'How can I check my answer?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'How does this help?'];
    }

    breakIntoSubStepsLineEq(step) {
        if (step.formula) {
            return [
                'Write the formula',
                'Identify values to substitute',
                'Perform substitution',
                'Calculate the result',
                'Simplify if needed'
            ];
        }

        if (step.step === 'Calculate slope') {
            return [
                'Label points as (x₁, y₁) and (x₂, y₂)',
                'Write slope formula: m = (y₂ - y₁)/(x₂ - x₁)',
                'Substitute coordinates',
                'Subtract numerator and denominator',
                'Divide to get slope'
            ];
        }

        return ['Understand what to do', 'Apply the technique', 'Verify the result'];
    }

    generateProgressiveHintsLineEq(step, problem) {
        const category = this.lineEquationTypes[problem.type]?.category || 'slope_intercept';
        const hintSet = this.hints[problem.type] || this.hints.slope_intercept_from_slope_and_intercept;

        return {
            level1: hintSet.level1 || 'Think about what you know and what you need to find.',
            level2: hintSet.level2 || 'Consider which formula or method applies here.',
            level3: hintSet.level3 || 'Substitute your known values into the formula.',
            level4: hintSet.level4 || 'Complete the calculation to find the answer.'
        };
    }

    generatePracticeVariationLineEq(step, problem) {
        return {
            similarProblem: 'Try another problem with different numbers but same structure',
            practiceHint: 'Start with simpler numbers to build confidence',
            extension: 'Once comfortable, try with fractions or larger numbers'
        };
    }

    explainThinkingProcessLineEq(step) {
        return {
            observe: 'What information do I have?',
            goal: 'What am I trying to find?',
            strategy: 'Which formula or method should I use?',
            execute: 'How do I apply this correctly?',
            verify: 'Does my answer make sense?'
        };
    }

    identifyDecisionPointsLineEq(step) {
        return [
            'Which form of equation should I use?',
            'Which point should I choose (if multiple available)?',
            'Should I find slope first or y-intercept first?'
        ];
    }

    suggestAlternativeMethodsLineEq(step, problem) {
        const alternatives = {
            'Find y-intercept': [
                'Could use point-slope form instead',
                'Could graph and read y-intercept from graph',
                'Could use another point if available'
            ],
            'Substitute into y = mx + b': [
                'Could write in point-slope form instead',
                'Could use standard form Ax + By = C'
            ]
        };

        return alternatives[step.step] || ['The chosen method is appropriate'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by using the result to proceed`,
            progression: 'We are getting closer to our final equation',
            relationship: 'Each step provides information needed for the next'
        };
    }

    identifyPrerequisitesLineEq(step, problemType) {
        const category = this.lineEquationTypes[problemType]?.category || 'slope_intercept';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Basic algebra skills'];
    }

    identifyKeyVocabularyLineEq(step) {
        const vocabulary = {
            'Identify given values': ['slope', 'y-intercept', 'point', 'coordinates'],
            'Calculate slope': ['slope', 'rise', 'run', 'rate of change'],
            'Find y-intercept': ['y-intercept', 'substitute', 'solve'],
            'Substitute into y = mx + b': ['slope-intercept form', 'slope', 'y-intercept'],
            'Distribute the slope': ['distribute', 'distributive property', 'expand'],
            'Calculate perpendicular slope': ['perpendicular', 'negative reciprocal', 'right angle'],
            'Use the same slope': ['parallel', 'slope'],
            'Plot y-intercept': ['plot', 'coordinate', 'y-axis'],
            'Use slope to find next point': ['slope', 'rise', 'run']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPromptsLineEq(step) {
        return {
            before: 'Before starting, what information do I need?',
            during: 'As I work, what should I watch out for?',
            after: 'How can I verify this step is correct?'
        };
    }

    findRealWorldConnectionLineEq(step, problem) {
        const connections = {
            'slope_intercept': 'Like a phone bill: fixed monthly fee (b) plus cost per minute (m)',
            'finding_slope': 'Like calculating speed: distance traveled divided by time taken',
            'parallel_perpendicular': 'Like streets: parallel streets never meet, perpendicular streets cross at corners',
            'graphing': 'Like mapping elevation on a hike: starting point and climb rate'
        };

        const category = this.lineEquationTypes[problem.type]?.category;
        return connections[category] || 'Linear equations model many real-world relationships';
    }

    // GRAPH GENERATION

    generateLineEquationGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;
        const category = this.lineEquationTypes[type]?.category;

        if (['slope_intercept', 'point_slope', 'graphing'].includes(category)) {
            this.graphData = this.generateLineGraph(this.currentProblem, this.currentSolution);
        }
    }

    generateLineGraph(problem, solution) {
        const { m, b, x1, y1 } = problem.parameters;
        
        // Determine slope and y-intercept
        let slope, yIntercept;
        
        if (solution.slope !== undefined && solution.yIntercept !== undefined) {
            slope = solution.slope;
            yIntercept = solution.yIntercept;
        } else if (m !== undefined && b !== undefined) {
            slope = m;
            yIntercept = b;
        } else if (m !== undefined && x1 !== undefined && y1 !== undefined) {
            slope = m;
            yIntercept = y1 - m * x1;
        } else {
            return null;
        }

        // Generate points for graphing
        const points = [];
        for (let x = -5; x <= 5; x++) {
            const y = slope * x + yIntercept;
            points.push({ x, y });
        }

        return {
            type: 'line',
            equation: solution.equation,
            slope: slope,
            yIntercept: yIntercept,
            points: points,
            keyPoints: [
                { x: 0, y: yIntercept, label: `y-intercept (0, ${yIntercept})` },
                { x: 1, y: slope + yIntercept, label: `(1, ${slope + yIntercept})` },
                { x: -1, y: -slope + yIntercept, label: `(-1, ${-slope + yIntercept})` }
            ],
            graphingInstructions: solution.graphingInstructions || [
                `Plot y-intercept at (0, ${yIntercept})`,
                `Use slope ${slope} to find next points`,
                `Draw line through points`
            ]
        };
    }

    // WORKBOOK GENERATION

    generateLineEquationWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSectionLineEq(),
            this.createPrerequisiteSectionLineEq(),
            this.createEnhancedStepsSectionLineEq(),
            this.createLineEquationLessonSection(),
            this.createSolutionSectionLineEq(),
            this.createAnalysisSectionLineEq(),
            this.createVerificationSectionLineEq(),
            this.createGraphSectionLineEq(),
            this.createRealWorldApplicationSectionLineEq(),
            this.createPedagogicalNotesSectionLineEq(),
            this.createAlternativeMethodsSectionLineEq(),
            this.createPracticeProblemsSectionLineEq()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Line Equations Mathematical Workbook',
            subtitle: 'Point-Slope and Slope-Intercept Forms',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            explanationLevel: this.explanationLevel,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSectionLineEq() {
        if (!this.currentProblem) return null;

        const problemData = [
            ['Problem Type', this.lineEquationTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.lineEquationTypes[this.currentProblem.type]?.category || 'line_equations'],
            ['Description', this.currentProblem.scenario || 'Line equation problem']
        ];

        // Add parameters
        const params = this.currentProblem.parameters;
        if (Object.keys(params).length > 0) {
            problemData.push(['', '']);
            problemData.push(['Given Information', '']);
            
            if (params.m !== undefined) problemData.push(['Slope (m)', params.m]);
            if (params.b !== undefined) problemData.push(['Y-intercept (b)', params.b]);
            if (params.x1 !== undefined && params.y1 !== undefined) {
                problemData.push(['Point', `(${params.x1}, ${params.y1})`]);
            }
            if (params.x2 !== undefined && params.y2 !== undefined) {
                problemData.push(['Second Point', `(${params.x2}, ${params.y2})`]);
            }
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSectionLineEq() {
        if (!this.prerequisiteChecks) return null;

        const category = this.lineEquationTypes[this.currentProblem.type]?.category;
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

    createEnhancedStepsSectionLineEq() {
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

            if (step.values) {
                stepsData.push(['Values', step.values]);
            }

            if (step.formula) {
                stepsData.push(['Formula', step.formula]);
            }

            if (step.substitution) {
                stepsData.push(['Substitution', step.substitution]);
            }

            if (step.calculation) {
                stepsData.push(['Calculation', step.calculation]);
            }

            if (step.beforeExpression && step.afterExpression) {
                stepsData.push(['Before', step.beforeExpression]);
                if (step.operation) {
                    stepsData.push(['Operation', step.operation]);
                }
                stepsData.push(['After', step.afterExpression]);
            }

            if (step.expression && !step.beforeExpression) {
                stepsData.push(['Expression', step.expression]);
            }

            if (step.result) {
                stepsData.push(['Result', step.result]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.interpretation) {
                if (typeof step.interpretation === 'object') {
                    stepsData.push(['Interpretation', JSON.stringify(step.interpretation)]);
                } else {
                    stepsData.push(['Interpretation', step.interpretation]);
                }
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

            // Visual hints
            if (step.visualHint) {
                stepsData.push(['Visual Hint', step.visualHint]);
            }

            if (step.visualDescription) {
                stepsData.push(['Visual Description', step.visualDescription]);
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

            stepsData.push(['', '']); // Spacing
        });

        return {
            title: `Enhanced Step-by-Step Solution (${this.explanationLevel} level)`,
            type: 'steps',
            data: stepsData
        };
    }

    createLineEquationLessonSection() {
        const { type } = this.currentProblem;
        const category = this.lineEquationTypes[type]?.category;
        const lesson = this.lessons[category];

        if (!lesson) return null;

        const lessonData = [
            ['Topic', lesson.title],
            ['', ''],
            ['Key Concepts', ''],
            ...lesson.concepts.map(c => ['', c]),
            ['', ''],
            ['Theory', lesson.theory]
        ];

        if (lesson.keyFormulas) {
            lessonData.push(['', '']);
            lessonData.push(['Key Formulas', '']);
            Object.entries(lesson.keyFormulas).forEach(([name, formula]) => {
                lessonData.push([name, formula]);
            });
        }

        if (lesson.applications) {
            lessonData.push(['', '']);
            lessonData.push(['Applications', '']);
            lesson.applications.forEach(app => {
                lessonData.push(['', app]);
            });
        }

        return {
            title: 'Key Concepts',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSectionLineEq() {
        if (!this.currentSolution) return null;

        const solutionData = [
            ['Equation', this.currentSolution.equation],
            ['Type', this.currentSolution.type]
        ];

        if (this.currentSolution.slope !== undefined && this.currentSolution.slope !== 'Undefined') {
            solutionData.push(['Slope (m)', this.currentSolution.slope]);
        }

        if (this.currentSolution.yIntercept !== undefined) {
            solutionData.push(['Y-Intercept (b)', this.currentSolution.yIntercept]);
        }

        if (this.currentSolution.slopeInterpretation) {
            solutionData.push(['Slope Meaning', this.currentSolution.slopeInterpretation]);
        }

        if (this.currentSolution.interceptInterpretation) {
            solutionData.push(['Intercept Meaning', this.currentSolution.interceptInterpretation]);
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createAnalysisSectionLineEq() {
        if (!this.currentSolution) return null;

        const analysisData = [
            ['Solution Method', this.currentSolution.type],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Difficulty Level', this.explanationLevel],
            ['Category', this.lineEquationTypes[this.currentProblem.type]?.category]
        ];

        if (this.currentSolution.approach) {
            analysisData.push(['Approach', this.currentSolution.approach]);
        }

        if (this.currentSolution.slope !== undefined) {
            const slopeType = this.currentSolution.slope > 0 ? 'Positive (rising)' :
                             this.currentSolution.slope < 0 ? 'Negative (falling)' :
                             this.currentSolution.slope === 0 ? 'Zero (horizontal)' : 'Undefined (vertical)';
            analysisData.push(['Slope Type', slopeType]);
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSectionLineEq() {
        if (!this.currentSolution || !this.currentProblem) return null;

        const verificationData = [
            ['Verification Method', 'Point Substitution'],
            ['', '']
        ];

        // Verify with given points if available
        const { x1, y1, x2, y2, m, b } = this.currentProblem.parameters;
        
        if (this.currentSolution.verification) {
            const v = this.currentSolution.verification;
            if (v.point1) {
                verificationData.push(['Point 1 Check', v.point1.substitution || v.point1]);
                verificationData.push(['Valid', v.point1.isValid ? 'Yes ✓' : 'No']);
            }
            if (v.point2) {
                verificationData.push(['Point 2 Check', v.point2.substitution || v.point2]);
                verificationData.push(['Valid', v.point2.isValid ? 'Yes ✓' : 'No']);
            }
            if (!v.point1 && !v.point2 && v.point) {
                verificationData.push(['Point Check', v.substitution]);
                verificationData.push(['Valid', v.isValid ? 'Yes ✓' : 'No']);
            }
        } else if (x1 !== undefined && y1 !== undefined && this.currentSolution.slope !== undefined && 
                   this.currentSolution.yIntercept !== undefined) {
            const check = this.verifyPoint(x1, y1, this.currentSolution.slope, this.currentSolution.yIntercept);
            verificationData.push(['Point Check', check.substitution]);
            verificationData.push(['Calculated', check.calculated]);
            verificationData.push(['Given', check.given]);
            verificationData.push(['Valid', check.isValid ? 'Yes ✓' : 'No']);
        }

        if (this.verificationDetail === 'detailed') {
            verificationData.push(['', '']);
            verificationData.push(['Confidence Level', 'High']);
            verificationData.push(['Notes', 'Equation verified through point substitution']);
        }

        return {
            title: 'Equation Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createGraphSectionLineEq() {
        if (!this.graphData) return null;

        const graphData = [
            ['Graph Information', ''],
            ['Equation', this.graphData.equation],
            ['Slope', this.graphData.slope],
            ['Y-Intercept', this.graphData.yIntercept],
            ['', ''],
            ['Key Points', '']
        ];

        this.graphData.keyPoints.forEach(point => {
            graphData.push([point.label || `(${point.x}, ${point.y})`, '']);
        });

        graphData.push(['', '']);
        graphData.push(['Graphing Instructions', '']);
        this.graphData.graphingInstructions.forEach((instruction, index) => {
            graphData.push([`Step ${index + 1}`, instruction]);
        });

        return {
            title: 'Graph Information',
            type: 'graph',
            data: graphData
        };
    }

    createRealWorldApplicationSectionLineEq() {
        if (!this.includeRealWorldApplications) return null;

        const category = this.lineEquationTypes[this.currentProblem.type]?.category;
        const applications = Object.values(this.realWorldProblems).slice(0, 3);

        if (applications.length === 0) return null;

        const appData = [
            ['Real-World Applications', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Equation', app.equation]);
            appData.push(['Context', app.context]);
            appData.push(['Slope Means', app.slopeInterpretation]);
            appData.push(['Y-Intercept Means', app.interceptInterpretation]);
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

    createPedagogicalNotesSectionLineEq() {
        if (!this.includePedagogicalNotes) return null;

        const notes = this.generateLineEquationPedagogicalNotes(this.currentProblem.type);

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

    createAlternativeMethodsSectionLineEq() {
        if (!this.includeAlternativeMethods) return null;

        const alternatives = this.generateLineEquationAlternativeMethods(this.currentProblem.type);

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

    createPracticeProblemsSectionLineEq() {
        const category = this.lineEquationTypes[this.currentProblem.type]?.category;
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

    generateLineEquationPedagogicalNotes(problemType) {
        const category = this.lineEquationTypes[problemType]?.category;

        const pedagogicalDatabase = {
            slope_intercept: {
                objectives: [
                    'Write equations in slope-intercept form',
                    'Identify slope and y-intercept from equation or graph',
                    'Use slope and y-intercept to write equations',
                    'Graph lines using slope-intercept form'
                ],
                keyConcepts: [
                    'Slope represents rate of change',
                    'Y-intercept is starting value when x = 0',
                    'Form y = mx + b directly shows both key features',
                    'Can be graphed easily using y-intercept and slope'
                ],
                prerequisites: [
                    'Coordinate plane basics',
                    'Understanding of slope',
                    'Substitution skills',
                    'Plotting points'
                ],
                commonDifficulties: [
                    'Confusing m and b',
                    'Sign errors with negative slope or intercept',
                    'Not understanding what slope and y-intercept represent',
                    'Difficulty finding b from point and slope'
                ],
                teachingStrategies: [
                    'Use real-world examples (cost = rate × quantity + fixed cost)',
                    'Practice identifying m and b from equations',
                    'Connect to graphing: start at b, use m as stairs',
                    'Use color coding: slope in one color, intercept in another'
                ],
                extensions: [
                    'Parallel and perpendicular lines',
                    'Writing equations from two points',
                    'Converting between forms',
                    'Modeling real-world situations'
                ],
                assessment: [
                    'Can student identify m and b from equation?',
                    'Can student write equation given m and b?',
                    'Can student find b using a point?',
                    'Can student graph using slope-intercept?'
                ]
            },
            point_slope: {
                objectives: [
                    'Write equations in point-slope form',
                    'Convert between point-slope and slope-intercept',
                    'Use point-slope form when given point and slope',
                    'Understand when point-slope is most useful'
                ],
                keyConcepts: [
                    'Point-slope uses known point and slope',
                    'Form: y - y₁ = m(x - x₁)',
                    'Any point on line can be used',
                    'Easily converts to slope-intercept'
                ],
                prerequisites: [
                    'Slope concept',
                    'Slope-intercept form',
                    'Distribution',
                    'Solving for variables'
                ],
                commonDifficulties: [
                    'Sign errors with y - y₁ and x - x₁',
                    'Not using parentheses around (x - x₁)',
                    'Confusing which point to use',
                    'Distribution errors when converting'
                ],
                teachingStrategies: [
                    'Emphasize minus signs in formula',
                    'Practice with positive and negative coordinates',
                    'Show that any point works (equivalent equations)',
                    'Connect to slope-intercept by distributing'
                ],
                extensions: [
                    'Finding equations from two points',
                    'Tangent lines (calculus connection)',
                    'Linear regression applications'
                ],
                assessment: [
                    'Can student write point-slope correctly?',
                    'Does student handle signs properly?',
                    'Can student convert to slope-intercept?',
                    'Can student choose appropriate form?'
                ]
            },
            finding_slope: {
                objectives: [
                    'Calculate slope from two points',
                    'Interpret slope as rate of change',
                    'Recognize types of slope (positive, negative, zero, undefined)',
                    'Use slope in equations and graphs'
                ],
                keyConcepts: [
                    'Slope = rise/run = (y₂ - y₁)/(x₂ - x₁)',
                    'Positive slope: rising left to right',
                    'Negative slope: falling left to right',
                    'Zero slope: horizontal line',
                    'Undefined slope: vertical line'
                ],
                prerequisites: [
                    'Coordinate plane',
                    'Subtraction (including negatives)',
                    'Division',
                    'Fraction simplification'
                ],
                commonDifficulties: [
                    'Subtracting in wrong order',
                    'Inconsistent order (y then x differently)',
                    'Sign errors with negative coordinates',
                    'Confusing zero and undefined slope',
                    'Not simplifying fractions'
                ],
                teachingStrategies: [
                    'Use slope triangles on graphs',
                    'Practice consistent subtraction order',
                    'Connect to stairs/ramps (steepness)',
                    'Use real examples: speed, cost rates'
                ],
                extensions: [
                    'Slopes of parallel and perpendicular lines',
                    'Rate of change in science',
                    'Derivatives in calculus'
                ],
                assessment: [
                    'Can student calculate slope correctly?',
                    'Does student maintain consistent order?',
                    'Can student interpret slope meaning?',
                    'Can student identify slope type?'
                ]
            },
            parallel_perpendicular: {
                objectives: [
                    'Understand parallel and perpendicular line relationships',
                    'Find equations of parallel lines',
                    'Find equations of perpendicular lines',
                    'Identify parallel and perpendicular slopes'
                ],
                keyConcepts: [
                    'Parallel lines: same slope',
                    'Perpendicular lines: negative reciprocal slopes',
                    'Product of perpendicular slopes = -1',
                    'Horizontal and vertical lines are perpendicular'
                ],
                prerequisites: [
                    'Slope-intercept form',
                    'Point-slope form',
                    'Finding slope',
                    'Reciprocals and negatives'
                ],
                commonDifficulties: [
                    'Forgetting to negate when finding perpendicular slope',
                    'Only taking reciprocal (not negative reciprocal)',
                    'Confusing which is which',
                    'Arithmetic errors with fractions'
                ],
                teachingStrategies: [
                    'Use visual: train tracks (parallel), corners (perpendicular)',
                    'Practice product test: m₁ × m₂ = -1',
                    'Memorize: "flip and negate" for perpendicular',
                    'Draw examples on grid paper'
                ],
                extensions: [
                    'Distance from point to line',
                    'Vectors and dot products',
                    'Geometry proofs',
                    'Coordinate geometry'
                ],
                assessment: [
                    'Can student find parallel slope?',
                    'Can student find perpendicular slope?',
                    'Does student verify with product test?',
                    'Can student write complete equations?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Understand line equations'],
            keyConcepts: ['Slope and intercept'],
            prerequisites: ['Basic algebra'],
            commonDifficulties: ['Various computational challenges'],
            teachingStrategies: ['Step-by-step instruction'],
            extensions: ['More complex problems'],
            assessment: ['Verify understanding']
        };
    }

    generateLineEquationAlternativeMethods(problemType) {
        const category = this.lineEquationTypes[problemType]?.category;

        const alternativeDatabase = {
            slope_intercept: {
                primaryMethod: 'Direct Substitution into y = mx + b',
                methods: [
                    {
                        name: 'Point-Slope Then Convert',
                        description: 'Write in point-slope form first, then distribute to get slope-intercept'
                    },
                    {
                        name: 'Graphical Method',
                        description: 'Plot points, draw line, read slope and y-intercept from graph'
                    },
                    {
                        name: 'Table Method',
                        description: 'Create table of values, identify pattern to determine m and b'
                    }
                ],
                comparison: 'Direct substitution fastest; point-slope useful with given point; graphical gives visual confirmation'
            },
            finding_slope: {
                primaryMethod: 'Slope Formula: m = (y₂ - y₁)/(x₂ - x₁)',
                methods: [
                    {
                        name: 'Rise Over Run on Graph',
                        description: 'Plot points, count vertical change over horizontal change'
                    },
                    {
                        name: 'Slope Triangle',
                        description: 'Draw right triangle between points, measure legs'
                    },
                    {
                        name: 'Rate of Change',
                        description: 'Think of slope as rate: change in y per unit change in x'
                    }
                ],
                comparison: 'Formula most precise; graphical methods provide visual understanding; rate of change connects to applications'
            },
            parallel_perpendicular: {
                primaryMethod: 'Use Slope Relationships Directly',
                methods: [
                    {
                        name: 'Product Test',
                        description: 'For perpendicular: verify m₁ × m₂ = -1'
                    },
                    {
                        name: 'Graphical Verification',
                        description: 'Graph both lines to visually confirm relationship'
                    },
                    {
                        name: 'Vector Method',
                        description: 'Use direction vectors and dot product (advanced)'
                    }
                ],
                comparison: 'Direct slope method fastest; product test verifies perpendicular; graphical confirms visually'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard algebraic approach',
            methods: [{
                name: 'Alternative approach',
                description: 'Other methods may apply depending on problem'
            }],
            comparison: 'Choose method based on given information and required form'
        };
    }
}

// Export the class
export default EnhancedLineEquationsMathematicalWorkbook;
