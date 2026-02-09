// Enhanced Trigonometric Graphs Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedTrigonometricGraphsWorkbook {
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
        this.initializeTrigGraphSolvers();
        this.initializeTrigLessons();
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

    initializeTrigLessons() {
        this.lessons = {
            sine_graph: {
                title: "Sine Function Graph",
                concepts: [
                    "Standard form: y = A sin(B(x - C)) + D",
                    "Amplitude |A| affects vertical stretch",
                    "Period = 2π/|B|",
                    "Phase shift C moves graph horizontally",
                    "Vertical shift D moves graph up/down"
                ],
                theory: "The sine function creates a smooth wave starting at origin. It oscillates between -1 and 1 for standard form, with period 2π.",
                keyFormulas: {
                    "Standard Form": "y = sin(x)",
                    "General Form": "y = A sin(B(x - C)) + D",
                    "Amplitude": "|A|",
                    "Period": "2π/|B|",
                    "Phase Shift": "C (right if positive)",
                    "Vertical Shift": "D"
                },
                graphCharacteristics: {
                    "Domain": "All real numbers (-∞, ∞)",
                    "Range": "[-|A| + D, |A| + D]",
                    "x-intercepts": "x = nπ for standard sin(x)",
                    "y-intercept": "y = D for general form",
                    "Maximum points": "x = π/2 + 2πn",
                    "Minimum points": "x = 3π/2 + 2πn",
                    "Symmetry": "Odd function (origin symmetry)"
                },
                applications: [
                    "Sound waves and acoustics",
                    "Alternating current in electricity",
                    "Seasonal temperature variations",
                    "Tidal patterns",
                    "Pendulum motion"
                ]
            },

            cosine_graph: {
                title: "Cosine Function Graph",
                concepts: [
                    "Standard form: y = A cos(B(x - C)) + D",
                    "Starts at maximum (or minimum if A < 0)",
                    "Same amplitude and period rules as sine",
                    "Phase shift C moves graph horizontally",
                    "Related to sine: cos(x) = sin(x + π/2)"
                ],
                theory: "The cosine function creates a wave starting at a maximum. It oscillates between -1 and 1 for standard form, with period 2π.",
                keyFormulas: {
                    "Standard Form": "y = cos(x)",
                    "General Form": "y = A cos(B(x - C)) + D",
                    "Amplitude": "|A|",
                    "Period": "2π/|B|",
                    "Phase Shift": "C",
                    "Vertical Shift": "D",
                    "Relationship": "cos(x) = sin(x + π/2)"
                },
                graphCharacteristics: {
                    "Domain": "All real numbers",
                    "Range": "[-|A| + D, |A| + D]",
                    "x-intercepts": "x = π/2 + nπ for standard cos(x)",
                    "y-intercept": "y = A + D",
                    "Maximum points": "x = 2πn",
                    "Minimum points": "x = π + 2πn",
                    "Symmetry": "Even function (y-axis symmetry)"
                },
                applications: [
                    "Circular motion",
                    "Wave interference patterns",
                    "Seasonal daylight hours",
                    "Harmonic oscillators",
                    "Signal processing"
                ]
            },

            tangent_graph: {
                title: "Tangent Function Graph",
                concepts: [
                    "Standard form: y = A tan(B(x - C)) + D",
                    "Has vertical asymptotes",
                    "Period = π/|B| (half that of sine/cosine)",
                    "No amplitude (range is all real numbers)",
                    "Repeating pattern with asymptotes"
                ],
                theory: "Tangent equals sine/cosine, creating vertical asymptotes where cosine equals zero. It has an S-shaped curve between asymptotes.",
                keyFormulas: {
                    "Standard Form": "y = tan(x)",
                    "General Form": "y = A tan(B(x - C)) + D",
                    "Period": "π/|B|",
                    "Phase Shift": "C",
                    "Vertical Shift": "D",
                    "Definition": "tan(x) = sin(x)/cos(x)",
                    "Asymptotes": "x = π/2 + nπ (for standard)"
                },
                graphCharacteristics: {
                    "Domain": "x ≠ π/2 + nπ",
                    "Range": "All real numbers",
                    "x-intercepts": "x = nπ for standard tan(x)",
                    "y-intercept": "y = D",
                    "Asymptotes": "Vertical at x = π/2 + nπ",
                    "Symmetry": "Odd function",
                    "Increasing": "On each interval between asymptotes"
                },
                applications: [
                    "Slope calculations",
                    "Angle of elevation problems",
                    "Navigation and surveying",
                    "Optics and refraction",
                    "Engineering stress analysis"
                ]
            },

            cosecant_graph: {
                title: "Cosecant Function Graph",
                concepts: [
                    "Standard form: y = A csc(B(x - C)) + D",
                    "Reciprocal of sine: csc(x) = 1/sin(x)",
                    "Has vertical asymptotes where sin(x) = 0",
                    "U-shaped curves between asymptotes",
                    "Same period as sine: 2π/|B|"
                ],
                theory: "Cosecant is the reciprocal of sine, creating U-shaped branches between vertical asymptotes at sine's zeros.",
                keyFormulas: {
                    "Standard Form": "y = csc(x)",
                    "General Form": "y = A csc(B(x - C)) + D",
                    "Definition": "csc(x) = 1/sin(x)",
                    "Period": "2π/|B|",
                    "Phase Shift": "C",
                    "Vertical Shift": "D",
                    "Asymptotes": "x = nπ (where sin = 0)"
                },
                graphCharacteristics: {
                    "Domain": "x ≠ nπ",
                    "Range": "(-∞, -|A| + D] ∪ [|A| + D, ∞)",
                    "No x-intercepts": "Never crosses x-axis",
                    "y-intercept": "Undefined if 0 is asymptote",
                    "Asymptotes": "Vertical at x = nπ",
                    "Symmetry": "Odd function",
                    "Local extrema": "At sine's maxima/minima"
                },
                applications: [
                    "Wave analysis",
                    "Electrical engineering",
                    "Signal processing",
                    "Structural analysis"
                ]
            },

            secant_graph: {
                title: "Secant Function Graph",
                concepts: [
                    "Standard form: y = A sec(B(x - C)) + D",
                    "Reciprocal of cosine: sec(x) = 1/cos(x)",
                    "Has vertical asymptotes where cos(x) = 0",
                    "U-shaped curves between asymptotes",
                    "Same period as cosine: 2π/|B|"
                ],
                theory: "Secant is the reciprocal of cosine, creating U-shaped branches between vertical asymptotes at cosine's zeros.",
                keyFormulas: {
                    "Standard Form": "y = sec(x)",
                    "General Form": "y = A sec(B(x - C)) + D",
                    "Definition": "sec(x) = 1/cos(x)",
                    "Period": "2π/|B|",
                    "Phase Shift": "C",
                    "Vertical Shift": "D",
                    "Asymptotes": "x = π/2 + nπ (where cos = 0)"
                },
                graphCharacteristics: {
                    "Domain": "x ≠ π/2 + nπ",
                    "Range": "(-∞, -|A| + D] ∪ [|A| + D, ∞)",
                    "No x-intercepts": "Never crosses x-axis",
                    "y-intercept": "y = A + D",
                    "Asymptotes": "Vertical at x = π/2 + nπ",
                    "Symmetry": "Even function",
                    "Local extrema": "At cosine's maxima/minima"
                },
                applications: [
                    "Optics and lens calculations",
                    "Navigation",
                    "Astronomy",
                    "RF engineering"
                ]
            },

            cotangent_graph: {
                title: "Cotangent Function Graph",
                concepts: [
                    "Standard form: y = A cot(B(x - C)) + D",
                    "Reciprocal of tangent: cot(x) = 1/tan(x) = cos(x)/sin(x)",
                    "Has vertical asymptotes where sin(x) = 0",
                    "Decreasing function between asymptotes",
                    "Period = π/|B|"
                ],
                theory: "Cotangent equals cosine/sine, creating vertical asymptotes where sine equals zero. It decreases from ∞ to -∞ between asymptotes.",
                keyFormulas: {
                    "Standard Form": "y = cot(x)",
                    "General Form": "y = A cot(B(x - C)) + D",
                    "Definition": "cot(x) = cos(x)/sin(x)",
                    "Period": "π/|B|",
                    "Phase Shift": "C",
                    "Vertical Shift": "D",
                    "Asymptotes": "x = nπ (where sin = 0)"
                },
                graphCharacteristics: {
                    "Domain": "x ≠ nπ",
                    "Range": "All real numbers",
                    "x-intercepts": "x = π/2 + nπ for standard",
                    "y-intercept": "Undefined if 0 is asymptote",
                    "Asymptotes": "Vertical at x = nπ",
                    "Symmetry": "Odd function",
                    "Decreasing": "On each interval between asymptotes"
                },
                applications: [
                    "Complementary angle problems",
                    "Geometric calculations",
                    "Phase analysis"
                ]
            },

            transformations: {
                title: "Trigonometric Graph Transformations",
                concepts: [
                    "Vertical stretch/compression: factor A",
                    "Horizontal stretch/compression: factor 1/B",
                    "Horizontal shift (phase shift): C units",
                    "Vertical shift: D units",
                    "Reflections: A < 0 (vertical), B < 0 (horizontal)"
                ],
                theory: "Transformations modify the basic trig graphs systematically. Order matters: horizontal before vertical transformations.",
                transformationOrder: [
                    "1. Horizontal stretch/compression (affects period)",
                    "2. Horizontal shift (phase shift)",
                    "3. Vertical stretch/compression (affects amplitude)",
                    "4. Vertical shift",
                    "5. Reflections (sign of A or B)"
                ],
                keyFormulas: {
                    "General Form": "y = A·f(B(x - C)) + D",
                    "Amplitude": "|A| (for sin/cos)",
                    "Period": "original period / |B|",
                    "Phase Shift": "C (right if +, left if -)",
                    "Vertical Shift": "D (up if +, down if -)",
                    "Vertical Reflection": "A < 0",
                    "Horizontal Reflection": "B < 0"
                },
                applications: [
                    "Modeling periodic phenomena",
                    "Signal analysis",
                    "Vibration analysis",
                    "Data fitting"
                ]
            },

            inverse_trig_graphs: {
                title: "Inverse Trigonometric Function Graphs",
                concepts: [
                    "Inverse functions reverse the trig functions",
                    "Domain restrictions required for inverses",
                    "arcsin, arccos, arctan are the main inverses",
                    "Output is an angle measure",
                    "Graphs are reflections over y = x"
                ],
                theory: "Inverse trig functions return angle measures. Domain restrictions ensure they're functions (pass vertical line test).",
                keyFormulas: {
                    "Arcsine": "y = arcsin(x), domain [-1, 1], range [-π/2, π/2]",
                    "Arccosine": "y = arccos(x), domain [-1, 1], range [0, π]",
                    "Arctangent": "y = arctan(x), domain ℝ, range (-π/2, π/2)",
                    "Arccosecant": "y = arccsc(x), domain (-∞,-1]∪[1,∞)",
                    "Arcsecant": "y = arcsec(x), domain (-∞,-1]∪[1,∞)",
                    "Arccotangent": "y = arccot(x), domain ℝ, range (0, π)"
                },
                graphCharacteristics: {
                    "arcsin": "Increasing, passes through origin, S-curve",
                    "arccos": "Decreasing, y-intercept at π/2",
                    "arctan": "Increasing, horizontal asymptotes at ±π/2",
                    "Symmetry": "arcsin and arctan are odd functions"
                },
                applications: [
                    "Finding angles from ratios",
                    "Navigation calculations",
                    "Computer graphics rotations",
                    "Robotics and kinematics"
                ]
            },

            amplitude_period: {
                title: "Amplitude and Period Analysis",
                concepts: [
                    "Amplitude measures maximum displacement from midline",
                    "Period is horizontal distance for one complete cycle",
                    "Frequency = 1/period",
                    "Midline is the horizontal axis the graph oscillates around",
                    "These determine the size and spacing of the wave"
                ],
                theory: "Amplitude and period are key characteristics that define the shape and behavior of periodic functions.",
                keyFormulas: {
                    "Amplitude": "|A| (distance from midline to max/min)",
                    "Period": "2π/|B| for sin/cos, π/|B| for tan/cot",
                    "Frequency": "f = |B|/(2π) for sin/cos",
                    "Midline": "y = D",
                    "Maximum value": "D + |A|",
                    "Minimum value": "D - |A|"
                },
                analysisSteps: [
                    "Identify A (coefficient of function)",
                    "Identify B (coefficient of x)",
                    "Calculate amplitude = |A|",
                    "Calculate period = (2π or π)/|B|",
                    "Identify vertical shift D for midline"
                ],
                applications: [
                    "Sound wave analysis (amplitude = loudness)",
                    "Light wave analysis (amplitude = brightness)",
                    "Business cycles (period = cycle length)",
                    "Biological rhythms (circadian periods)"
                ]
            },

            phase_shift: {
                title: "Phase Shift and Vertical Shift",
                concepts: [
                    "Phase shift C moves graph horizontally",
                    "Positive C shifts right, negative shifts left",
                    "Vertical shift D moves entire graph up/down",
                    "These don't change shape, only position",
                    "Important for aligning waves in real applications"
                ],
                theory: "Shifts translate the graph without changing its shape. Phase shift is especially important in wave interference and signal timing.",
                keyFormulas: {
                    "Phase Shift": "C in y = A·f(B(x - C)) + D",
                    "Direction": "Right if C > 0, left if C < 0",
                    "Vertical Shift": "D (affects midline)",
                    "Starting point": "x = C for shifted function",
                    "Midline": "y = D"
                },
                determinationSteps: [
                    "Write in form y = A·f(B(x - C)) + D",
                    "Factor out B if needed: B(x - C/B)",
                    "Phase shift = C (or C/B if factored)",
                    "Vertical shift = D (constant term)",
                    "Mark new starting point on graph"
                ],
                applications: [
                    "Radio signal synchronization",
                    "Earthquake wave analysis",
                    "Musical tuning and beats",
                    "AC power phase relationships"
                ]
            },

            graphing_techniques: {
                title: "Graphing Trigonometric Functions",
                concepts: [
                    "Use key points from one period",
                    "Mark asymptotes for tan, cot, sec, csc",
                    "Apply transformations systematically",
                    "Use symmetry to extend the graph",
                    "Label important features (max, min, intercepts)"
                ],
                theory: "Systematic graphing uses transformations and key points to accurately sketch trig functions.",
                stepsForSineCosine: [
                    "1. Identify A, B, C, D from equation",
                    "2. Calculate amplitude, period, phase shift, vertical shift",
                    "3. Draw midline at y = D",
                    "4. Mark one period starting at x = C",
                    "5. Divide period into 4 equal parts",
                    "6. Plot 5 key points (start, max, middle, min, end)",
                    "7. Draw smooth curve through points",
                    "8. Extend pattern to additional periods"
                ],
                stepsForTangent: [
                    "1. Find period: π/|B|",
                    "2. Find phase shift C",
                    "3. Mark asymptotes at boundaries of period",
                    "4. Find x-intercept at middle of period",
                    "5. Plot point at midpoint between asymptote and x-intercept",
                    "6. Draw S-curve through points",
                    "7. Repeat pattern"
                ],
                keyPointsForCosine: [
                    "(C, A + D) - maximum",
                    "(C + period/4, D) - midline",
                    "(C + period/2, -A + D) - minimum",
                    "(C + 3·period/4, D) - midline",
                    "(C + period, A + D) - maximum"
                ],
                applications: [
                    "Visualizing periodic data",
                    "Predicting future values",
                    "Comparing multiple periodic functions",
                    "Engineering design and analysis"
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
            // Mathematical operators
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±', 'sqrt': '√',
            // Greek letters
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            'omega': 'ω', 'phi': 'φ',
            // Special symbols
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'perpendicular': '⊥', 'parallel': '∥', 'degree': '°'
        };
    }

    initializeTrigGraphSolvers() {
        this.trigGraphTypes = {
            // Basic trig functions
            sine_standard: {
                patterns: [
                    /sin\s*\(\s*x\s*\)/i,
                    /y\s*=\s*sin/i,
                    /graph.*sine/i
                ],
                solver: this.analyzeSineGraph.bind(this),
                name: 'Standard Sine Function',
                category: 'sine',
                description: 'Analyzes y = sin(x)'
            },

            sine_transformed: {
                patterns: [
                    /([+-]?\d*\.?\d*)\s*sin\s*\(\s*([+-]?\d*\.?\d*)\s*\(?x\s*([+-]\s*\d*\.?\d*)?\)?\s*\)\s*([+-]\s*\d*\.?\d*)?/i,
                    /A.*sin.*B.*x/i,
                    /amplitude.*sine/i
                ],
                solver: this.analyzeTransformedSine.bind(this),
                name: 'Transformed Sine Function',
                category: 'sine',
                description: 'Analyzes y = A sin(B(x - C)) + D'
            },

            cosine_standard: {
                patterns: [
                    /cos\s*\(\s*x\s*\)/i,
                    /y\s*=\s*cos/i,
                    /graph.*cosine/i
                ],
                solver: this.analyzeCosineGraph.bind(this),
                name: 'Standard Cosine Function',
                category: 'cosine',
                description: 'Analyzes y = cos(x)'
            },

            cosine_transformed: {
                patterns: [
                    /([+-]?\d*\.?\d*)\s*cos\s*\(\s*([+-]?\d*\.?\d*)\s*\(?x\s*([+-]\s*\d*\.?\d*)?\)?\s*\)\s*([+-]\s*\d*\.?\d*)?/i,
                    /A.*cos.*B.*x/i,
                    /amplitude.*cosine/i
                ],
                solver: this.analyzeTransformedCosine.bind(this),
                name: 'Transformed Cosine Function',
                category: 'cosine',
                description: 'Analyzes y = A cos(B(x - C)) + D'
            },

            tangent_standard: {
                patterns: [
                    /tan\s*\(\s*x\s*\)/i,
                    /y\s*=\s*tan/i,
                    /graph.*tangent/i
                ],
                solver: this.analyzeTangentGraph.bind(this),
                name: 'Standard Tangent Function',
                category: 'tangent',
                description: 'Analyzes y = tan(x)'
            },

            tangent_transformed: {
                patterns: [
                    /([+-]?\d*\.?\d*)\s*tan\s*\(\s*([+-]?\d*\.?\d*)\s*\(?x\s*([+-]\s*\d*\.?\d*)?\)?\s*\)\s*([+-]\s*\d*\.?\d*)?/i,
                    /A.*tan.*B.*x/i
                ],
                solver: this.analyzeTransformedTangent.bind(this),
                name: 'Transformed Tangent Function',
                category: 'tangent',
                description: 'Analyzes y = A tan(B(x - C)) + D'
            },

            cosecant_graph: {
                patterns: [
                    /csc\s*\(/i,
                    /cosec/i,
                    /graph.*cosecant/i
                ],
                solver: this.analyzeCosecantGraph.bind(this),
                name: 'Cosecant Function',
                category: 'reciprocal',
                description: 'Analyzes y = A csc(B(x - C)) + D'
            },

            secant_graph: {
                patterns: [
                    /sec\s*\(/i,
                    /graph.*secant/i
                ],
                solver: this.analyzeSecantGraph.bind(this),
                name: 'Secant Function',
                category: 'reciprocal',
                description: 'Analyzes y = A sec(B(x - C)) + D'
            },

            cotangent_graph: {
                patterns: [
                    /cot\s*\(/i,
                    /graph.*cotangent/i
                ],
                solver: this.analyzeCotangentGraph.bind(this),
                name: 'Cotangent Function',
                category: 'reciprocal',
                description: 'Analyzes y = A cot(B(x - C)) + D'
            },

            // Inverse trig functions
            arcsine_graph: {
                patterns: [
                    /arcsin/i,
                    /sin\^-1/i,
                    /asin/i,
                    /inverse.*sine/i
                ],
                solver: this.analyzeArcsineGraph.bind(this),
                name: 'Arcsine Function',
                category: 'inverse',
                description: 'Analyzes y = arcsin(x)'
            },

            arccosine_graph: {
                patterns: [
                    /arccos/i,
                    /cos\^-1/i,
                    /acos/i,
                    /inverse.*cosine/i
                ],
                solver: this.analyzeArccosineGraph.bind(this),
                name: 'Arccosine Function',
                category: 'inverse',
                description: 'Analyzes y = arccos(x)'
            },

            arctangent_graph: {
                patterns: [
                    /arctan/i,
                    /tan\^-1/i,
                    /atan/i,
                    /inverse.*tangent/i
                ],
                solver: this.analyzeArctangentGraph.bind(this),
                name: 'Arctangent Function',
                category: 'inverse',
                description: 'Analyzes y = arctan(x)'
            },

            // Analysis tasks
            find_amplitude: {
                patterns: [
                    /find.*amplitude/i,
                    /what.*amplitude/i,
                    /calculate.*amplitude/i
                ],
                solver: this.findAmplitude.bind(this),
                name: 'Find Amplitude',
                category: 'analysis',
                description: 'Determines amplitude from equation or graph'
            },

            find_period: {
                patterns: [
                    /find.*period/i,
                    /what.*period/i,
                    /calculate.*period/i
                ],
                solver: this.findPeriod.bind(this),
                name: 'Find Period',
                category: 'analysis',
                description: 'Determines period from equation or graph'
            },

            find_phase_shift: {
                patterns: [
                    /find.*phase.*shift/i,
                    /horizontal.*shift/i,
                    /what.*phase/i
                ],
                solver: this.findPhaseShift.bind(this),
                name: 'Find Phase Shift',
                category: 'analysis',
                description: 'Determines phase shift from equation or graph'
            },

            find_vertical_shift: {
                patterns: [
                    /find.*vertical.*shift/i,
                    /find.*midline/i,
                    /what.*vertical.*shift/i
                ],
                solver: this.findVerticalShift.bind(this),
                name: 'Find Vertical Shift',
                category: 'analysis',
                description: 'Determines vertical shift (midline) from equation or graph'
            },

            write_equation: {
                patterns: [
                    /write.*equation/i,
                    /find.*equation/i,
                    /equation.*from.*graph/i,
                    /determine.*function/i
                ],
                solver: this.writeEquationFromGraph.bind(this),
                name: 'Write Equation from Graph',
                category: 'analysis',
                description: 'Determines equation from graph characteristics'
            },

            compare_graphs: {
                patterns: [
                    /compare/i,
                    /difference.*between/i,
                    /versus/i,
                    /vs\./i
                ],
                solver: this.compareGraphs.bind(this),
                name: 'Compare Trig Graphs',
                category: 'analysis',
                description: 'Compares two or more trig functions'
            },

            transformations: {
                patterns: [
                    /transformation/i,
                    /transform/i,
                    /effect.*of/i,
                    /how.*change/i
                ],
                solver: this.analyzeTransformations.bind(this),
                name: 'Analyze Transformations',
                category: 'transformations',
                description: 'Analyzes effect of transformations on trig graphs'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            sine: {
                'Calculate amplitude': [
                    'Forgetting absolute value: amplitude is |A|, not A',
                    'Confusing amplitude with vertical shift',
                    'Thinking amplitude can be negative'
                ],
                'Find period': [
                    'Using wrong formula: period for sin is 2π/|B|, not π/|B|',
                    'Forgetting to take absolute value of B',
                    'Confusing period with frequency'
                ],
                'Identify phase shift': [
                    'Wrong sign: y = sin(x - C) shifts right by C',
                    'Not factoring out B: must write as B(x - C)',
                    'Confusing phase shift with vertical shift'
                ]
            },
            tangent: {
                'Find period': [
                    'Using 2π/B instead of π/B',
                    'Tangent has period π/|B|, not 2π/|B|',
                    'Forgetting tangent has different period than sine/cosine'
                ],
                'Locate asymptotes': [
                    'Using sine zeros instead of cosine zeros',
                    'Forgetting to account for phase shift',
                    'Not listing all asymptotes in given interval'
                ]
            },
            inverse: {
                'Domain restrictions': [
                    'Forgetting arcsin domain is [-1, 1]',
                    'Confusing domain and range of inverse functions',
                    'Not restricting to principal value range'
                ],
                'Range restrictions': [
                    'Arcsin range is [-π/2, π/2], not [0, π]',
                    'Arccos range is [0, π], not [-π/2, π/2]',
                    'Arctan range is (-π/2, π/2), not [0, π]'
                ]
            },
            transformations: {
                'Order of operations': [
                    'Applying vertical shift before calculating amplitude',
                    'Not doing horizontal transformations before vertical',
                    'Confusing order: should be horizontal first, then vertical'
                ],
                'Sign errors': [
                    'Thinking y = -sin(x) shifts down instead of reflecting',
                    'Confusing negative amplitude with vertical shift',
                    'Wrong direction for phase shift with negative values'
                ]
            }
        };

        this.errorPrevention = {
            amplitude_calculation: {
                reminder: 'Amplitude is always positive: |A|',
                method: 'Look at coefficient of the trig function and take absolute value'
            },
            period_formula: {
                reminder: 'Period depends on function: 2π/|B| for sin/cos, π/|B| for tan/cot',
                method: 'Identify the function type first, then apply correct formula'
            },
            phase_shift: {
                reminder: 'Must factor out B: write as B(x - C) to find shift C',
                method: 'Factor coefficient from (Bx - C) to get B(x - C/B)'
            },
            vertical_shift: {
                reminder: 'Vertical shift D is the constant added/subtracted at the end',
                method: 'Look for number outside the trig function'
            },
            inverse_domains: {
                reminder: 'Inverse trig functions have restricted domains and ranges',
                method: 'Memorize: arcsin/arccos domain [-1,1], arctan domain is all reals'
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
                focus: 'Step-by-step process to sketch or analyze the graph',
                language: 'step-by-step instructions'
            },
            visual: {
                focus: 'Graphical understanding and spatial patterns',
                language: 'visual and spatial descriptions'
            },
            algebraic: {
                focus: 'Formal mathematical properties and equations',
                language: 'precise mathematical terminology'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential features only',
                examples: 'standard functions like sin(x) and cos(x)'
            },
            intermediate: {
                vocabulary: 'standard mathematical terms',
                detail: 'main features with brief explanations',
                examples: 'transformations with numerical coefficients'
            },
            ELI5: {
                vocabulary: 'explain like I\'m 5 - simplest possible terms',
                detail: 'every feature explained with real-world analogies',
                examples: 'waves, circles, and repeating patterns',
                analogies: true,
                visualization: 'simple pictures and hand motions'
            },
            detailed: {
                vocabulary: 'full mathematical vocabulary',
                detail: 'comprehensive analysis with all properties',
                examples: 'complex transformations and applications'
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
            tides: {
                scenario: "Ocean tides follow sinusoidal patterns",
                equation: "h(t) = A cos(B(t - C)) + D",
                examples: [
                    "High tide is 8 feet, low tide is 2 feet, period is 12 hours. Model tide height.",
                    "Given tide data, predict when water depth will be 6 feet."
                ],
                context: "Tides are caused by gravitational pull and follow predictable sine/cosine patterns"
            },
            temperature: {
                scenario: "Daily temperature variations follow sine curves",
                equation: "T(t) = A sin(B(t - C)) + D",
                examples: [
                    "Temperature ranges from 45°F to 75°F, peaking at 3 PM. Model temperature.",
                    "Seasonal temperature variation over a year."
                ],
                context: "Temperature cycles daily and seasonally in predictable sinusoidal patterns"
            },
            sound_waves: {
                scenario: "Sound waves are sine waves with frequency and amplitude",
                equation: "y = A sin(2πft)",
                examples: [
                    "Middle C note has frequency 261.63 Hz. Write its wave equation.",
                    "Compare wavelengths of different musical notes."
                ],
                context: "Sound is compression waves that follow sine patterns; frequency determines pitch"
            },
            ferris_wheel: {
                scenario: "Height on Ferris wheel follows cosine pattern",
                equation: "h(t) = A cos(Bt) + D",
                examples: [
                    "Ferris wheel diameter 50 ft, center 30 ft above ground, rotation 2 min. Find height at time t.",
                    "Find when rider is at maximum/minimum height."
                ],
                context: "Circular motion creates sinusoidal position patterns"
            },
            ac_current: {
                scenario: "Alternating current voltage follows sine wave",
                equation: "V(t) = A sin(2πft + φ)",
                examples: [
                    "Standard US outlet: 120V, 60 Hz. Write voltage equation.",
                    "Find instantaneous voltage at t = 0.01 seconds."
                ],
                context: "AC electricity alternates direction following sine pattern; crucial for power distribution"
            },
            spring_motion: {
                scenario: "Mass on spring oscillates sinusoidally",
                equation: "x(t) = A cos(ωt + φ)",
                examples: [
                    "Spring stretched 5 cm, oscillates 2 times per second. Model position.",
                    "Find velocity and acceleration at any time."
                ],
                context: "Simple harmonic motion like springs and pendulums follows sine/cosine"
            },
            daylight_hours: {
                scenario: "Hours of daylight vary sinusoidally through year",
                equation: "D(t) = A sin(B(t - C)) + D",
                examples: [
                    "Maximum 15 hours (June 21), minimum 9 hours (Dec 21). Model daylight for any day.",
                    "Find when there are 12 hours of daylight (equinoxes)."
                ],
                context: "Earth's tilt creates seasonal daylight variation following sine pattern"
            },
            pendulum: {
                scenario: "Pendulum angle follows sinusoidal motion",
                equation: "θ(t) = θ₀ cos(ωt)",
                examples: [
                    "Pendulum swings ±10° with period 2 seconds. Model angle over time.",
                    "Find angular velocity at any time."
                ],
                context: "Small angle pendulum motion is simple harmonic (sinusoidal)"
            },
            radio_waves: {
                scenario: "Radio signals are electromagnetic sine waves",
                equation: "E(t) = A sin(2πft)",
                examples: [
                    "FM station at 101.1 MHz. Write its carrier wave equation.",
                    "Compare wavelengths of AM vs FM radio."
                ],
                context: "Radio uses high-frequency sine waves to carry information"
            },
            biorhythms: {
                scenario: "Biological cycles (circadian rhythms) follow sine patterns",
                equation: "B(t) = A sin(2π t/T) + D",
                examples: [
                    "Body temperature varies ±0.5°C over 24 hours, peaking at 5 PM.",
                    "Model hormone levels with 28-day cycle."
                ],
                context: "Many biological processes are periodic and follow sinusoidal patterns"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            sine: {
                skills: ['Unit circle', 'Radian measure', 'Basic trig ratios', 'Graphing basics'],
                priorKnowledge: ['Periodic functions', 'Amplitude concept', 'Period concept'],
                checkQuestions: [
                    "What is sin(0)?",
                    "What is sin(π/2)?",
                    "What is the period of sin(x)?",
                    "What is the range of sin(x)?"
                ]
            },
            cosine: {
                skills: ['Unit circle', 'Radian measure', 'Basic trig ratios', 'Even function concept'],
                priorKnowledge: ['Periodic functions', 'How cosine relates to sine'],
                checkQuestions: [
                    "What is cos(0)?",
                    "What is cos(π)?",
                    "What is the period of cos(x)?",
                    "How does cos(x) relate to sin(x)?"
                ]
            },
            tangent: {
                skills: ['Sin/cos ratio', 'Asymptotes', 'Undefined values', 'Domain restrictions'],
                priorKnowledge: ['Division by zero', 'Vertical asymptotes', 'Period π vs 2π'],
                checkQuestions: [
                    "What is tan(x) in terms of sin and cos?",
                    "When is tan(x) undefined?",
                    "What is the period of tan(x)?",
                    "Where are the asymptotes of tan(x)?"
                ]
            },
            reciprocal: {
                skills: ['Reciprocal functions', 'Asymptotes', 'Domain restrictions', 'Basic trig functions'],
                priorKnowledge: ['Where parent function equals zero', 'Reciprocal behavior near zero'],
                checkQuestions: [
                    "What is csc(x) defined as?",
                    "When is sec(x) undefined?",
                    "What is the relationship between csc and sin?"
                ]
            },
            inverse: {
                skills: ['Inverse function concept', 'Domain restrictions', 'Range restrictions', 'Function composition'],
                priorKnowledge: ['How to restrict domains', 'Principal values', 'Reflection over y=x'],
                checkQuestions: [
                    "What does arcsin(1/2) equal?",
                    "What is the range of arcsin?",
                    "Why must we restrict the domain of sin to define arcsin?",
                    "What is sin(arcsin(x))?"
                ]
            },
            transformations: {
                skills: ['Function transformations', 'Effect of parameters A, B, C, D', 'Transformation order'],
                priorKnowledge: ['Vertical/horizontal shifts', 'Stretches and compressions', 'Reflections'],
                checkQuestions: [
                    "How does A affect y = A sin(x)?",
                    "How does B affect the period?",
                    "What does C do in sin(x - C)?",
                    "What transformation does D represent?"
                ]
            },
            amplitude_period: {
                skills: ['Identifying amplitude', 'Calculating period', 'Reading from graph'],
                priorKnowledge: ['Max and min values', 'One complete cycle', 'Distance measurements'],
                checkQuestions: [
                    "How do you find amplitude from a graph?",
                    "How do you measure one period?",
                    "What is the amplitude of 3sin(x)?",
                    "What is the period of sin(2x)?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            unit_circle: {
                description: "Trig functions as coordinates on unit circle",
                analogy: "Walking around a circle, tracking height and horizontal position",
                visualization: "Circle with radius 1, showing sin as y-coordinate, cos as x-coordinate",
                suitableFor: ['sine', 'cosine', 'tangent', 'all_trig'],
                explanation: "As angle increases, point rotates around circle; coordinates give trig values"
            },
            wave_pattern: {
                description: "Sine/cosine as repeating wave",
                analogy: "Ocean waves, sound waves, or ripples in water",
                visualization: "Smooth curved wave oscillating above and below midline",
                suitableFor: ['sine', 'cosine'],
                explanation: "The wave repeats endlessly with same shape and spacing"
            },
            ferris_wheel: {
                description: "Height on Ferris wheel over time",
                analogy: "Riding a Ferris wheel and tracking your height",
                visualization: "Graph showing height going up and down as wheel rotates",
                suitableFor: ['sine', 'cosine', 'transformations'],
                explanation: "Your height changes sinusoidally as the wheel rotates at constant speed"
            },
            spring_motion: {
                description: "Mass bouncing on spring",
                analogy: "Weight bobbing up and down on a spring",
                visualization: "Position vs time graph showing oscillation",
                suitableFor: ['sine', 'cosine', 'amplitude_period'],
                explanation: "Position oscillates sinusoidally due to restoring force"
            },
            shadow_on_wall: {
                description: "Shadow of rotating object",
                analogy: "Shadow of ball on spinning wheel projected onto wall",
                visualization: "Shadow moving up and down as wheel spins",
                suitableFor: ['sine', 'cosine'],
                explanation: "Shadow height follows sine curve as wheel rotates"
            },
            asymptote_barriers: {
                description: "Vertical barriers where function can't go",
                analogy: "Invisible walls the graph approaches but never touches",
                visualization: "Vertical dashed lines with graph curving toward them",
                suitableFor: ['tangent', 'reciprocal'],
                explanation: "Function values approach ±∞ near asymptotes"
            },
            reciprocal_flip: {
                description: "Reciprocal as 'flipping' the function",
                analogy: "When parent is small, reciprocal is large; when parent is large, reciprocal is small",
                visualization: "U-shaped curves where parent function had max/min",
                suitableFor: ['reciprocal'],
                explanation: "Reciprocal 'flips' the behavior around asymptotes"
            },
            angle_from_ratio: {
                description: "Inverse trig as finding angle from ratio",
                analogy: "Given a slope, find the angle of the ramp",
                visualization: "Right triangle with known ratio, finding the angle",
                suitableFor: ['inverse'],
                explanation: "Inverse functions reverse the process: ratio → angle instead of angle → ratio"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "Graph y = sin(x) for one period",
                    solution: "Graph from 0 to 2π showing wave through (0,0), (π/2,1), (π,0), (3π/2,-1), (2π,0)",
                    steps: ["Mark x-axis in units of π/2", "Plot 5 key points", "Draw smooth curve"],
                    difficulty: "easy"
                },
                {
                    problem: "Find amplitude of y = 3cos(x)",
                    solution: "Amplitude = 3",
                    steps: ["Identify A in y = A cos(x)", "A = 3", "Amplitude = |A| = 3"],
                    difficulty: "easy"
                },
                {
                    problem: "Find period of y = sin(2x)",
                    solution: "Period = π",
                    steps: ["Identify B in sin(Bx)", "B = 2", "Period = 2π/B = 2π/2 = π"],
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "Graph y = 2sin(x - π/4) + 1",
                    solution: "Sine wave: amplitude 2, phase shift π/4 right, vertical shift 1 up",
                    steps: ["A=2, B=1, C=π/4, D=1", "Amplitude=2, Period=2π, Shift right π/4, up 1", "Midline y=1", "Plot key points", "Draw curve"],
                    difficulty: "medium"
                },
                {
                    problem: "Find all values in [0,2π] where cos(x) = 1/2",
                    solution: "x = π/3 and x = 5π/3",
                    steps: ["Recall cos(60°) = cos(π/3) = 1/2", "Cosine positive in quadrants I and IV", "x = π/3 (Q I) and x = 2π - π/3 = 5π/3 (Q IV)"],
                    difficulty: "medium"
                },
                {
                    problem: "Write equation for sine with amplitude 4, period π, phase shift π/2 left",
                    solution: "y = 4sin(2(x + π/2))",
                    steps: ["Amplitude 4 → A = 4", "Period π → 2π/B = π → B = 2", "Shift π/2 left → C = -π/2", "Equation: y = 4sin(2(x - (-π/2)))"],
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "Graph y = -2cos(3x + π) - 1",
                    solution: "Reflected cosine: amp 2, period 2π/3, phase shift -π/3, vertical shift -1",
                    steps: ["Rewrite: -2cos(3(x + π/3)) - 1", "A=-2 (reflected), B=3, C=-π/3, D=-1", "Period=2π/3", "Graph reflected cosine with transformations"],
                    difficulty: "hard"
                },
                {
                    problem: "Find equation from graph: max at (π/6, 5), min at (7π/6, -1), x-intercepts at (2π/3, 0) and (4π/3, 0)",
                    solution: "y = 3cos(x - π/6) + 2",
                    steps: ["Amplitude = (max-min)/2 = (5-(-1))/2 = 3", "Midline = (max+min)/2 = (5+(-1))/2 = 2", "Max at π/6 suggests cosine with shift", "Standard period 2π (max to next max would be π/6 + 2π)", "Equation: y = 3cos(x - π/6) + 2"],
                    difficulty: "hard"
                },
                {
                    problem: "Solve tan(x) = √3 for all solutions",
                    solution: "x = π/3 + nπ where n is any integer",
                    steps: ["tan(60°) = tan(π/3) = √3", "Tangent has period π", "General solution: x = π/3 + nπ"],
                    difficulty: "hard"
                }
            ],
            byMethod: {
                sine_basic: [
                    { problem: "Graph y = sin(x)", solution: "Standard sine wave, amplitude 1, period 2π" },
                    { problem: "Find amplitude of y = 5sin(x)", solution: "Amplitude = 5" },
                    { problem: "Find period of y = sin(4x)", solution: "Period = 2π/4 = π/2" }
                ],
                cosine_basic: [
                    { problem: "Graph y = cos(x)", solution: "Standard cosine wave, starts at max" },
                    { problem: "Find amplitude of y = 0.5cos(x)", solution: "Amplitude = 0.5" },
                    { problem: "Find period of y = cos(x/2)", solution: "Period = 2π/(1/2) = 4π" }
                ],
                transformations: [
                    { problem: "Graph y = 3sin(2x)", solution: "Amplitude 3, period π" },
                    { problem: "Graph y = cos(x - π/2)", solution: "Standard cosine shifted right π/2" },
                    { problem: "Graph y = sin(x) + 2", solution: "Standard sine shifted up 2" }
                ],
                inverse: [
                    { problem: "Evaluate arcsin(1/2)", solution: "π/6" },
                    { problem: "Evaluate arccos(0)", solution: "π/2" },
                    { problem: "Evaluate arctan(1)", solution: "π/4" }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            amplitude_sign: {
                misconception: "Amplitude can be negative",
                reality: "Amplitude is always positive: it's the absolute value |A|",
                correctiveExample: "For y = -3sin(x), amplitude is |-3| = 3, not -3. The negative reflects the graph.",
                commonIn: ['sine', 'cosine', 'transformations']
            },
            period_confusion: {
                misconception: "All trig functions have period 2π",
                reality: "Sin/cos have period 2π/|B|, but tan/cot have period π/|B|",
                correctiveExample: "sin(2x) has period 2π/2 = π, while tan(2x) has period π/2 = π/2",
                commonIn: ['tangent', 'cotangent']
            },
            phase_shift_direction: {
                misconception: "y = sin(x - C) shifts left by C",
                reality: "y = sin(x - C) shifts RIGHT by C (positive C means right)",
                correctiveExample: "y = sin(x - π/2) shifts right by π/2, not left",
                commonIn: ['transformations']
            },
            vertical_reflection: {
                misconception: "Negative A shifts the graph down",
                reality: "Negative A reflects the graph over x-axis (or midline if vertical shift present)",
                correctiveExample: "y = -sin(x) is an upside-down sine wave, not shifted down",
                commonIn: ['transformations']
            },
            asymptote_crossing: {
                misconception: "Graph can cross vertical asymptotes",
                reality: "Vertical asymptotes are boundaries the graph approaches but never crosses or touches",
                correctiveExample: "tan(x) approaches ±∞ near x = π/2 but never reaches or crosses it",
                commonIn: ['tangent', 'reciprocal']
            },
            inverse_domain: {
                misconception: "Inverse trig functions have same domain as regular trig functions",
                reality: "Inverse trig domains are restricted; arcsin and arccos domain is [-1, 1]",
                correctiveExample: "arcsin(2) is undefined because 2 > 1 (outside domain)",
                commonIn: ['inverse']
            },
            inverse_range: {
                misconception: "arcsin range is [0, π] like arccos",
                reality: "arcsin range is [-π/2, π/2], arccos range is [0, π]",
                correctiveExample: "arcsin(-1/2) = -π/6 (negative), but arccos(-1/2) = 2π/3 (positive)",
                commonIn: ['inverse']
            },
            midline_vs_amplitude: {
                misconception: "Maximum value of y = A sin(x) + D is A",
                reality: "Maximum is A + D (amplitude plus vertical shift)",
                correctiveExample: "For y = 3sin(x) + 2, max = 3 + 2 = 5, not 3",
                commonIn: ['transformations']
            },
            frequency_vs_period: {
                misconception: "Frequency and period are the same",
                reality: "Frequency = 1/period; they are reciprocals",
                correctiveExample: "If period = 2π, frequency = 1/(2π); if B = 2, frequency = 2/(2π) = 1/π",
                commonIn: ['sine', 'cosine', 'applications']
            },
            factoring_phase_shift: {
                misconception: "Phase shift in y = sin(2x - π) is -π",
                reality: "Must factor: 2x - π = 2(x - π/2), so phase shift is π/2",
                correctiveExample: "y = sin(2x - π) = sin(2(x - π/2)), shift is π/2 right, not π left",
                commonIn: ['transformations']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            sine_wave: {
                analogy: "Smooth ocean waves",
                explanation: "Sine graphs look like gentle ocean waves, rising and falling smoothly and endlessly repeating the same pattern",
                suitableFor: ['sine', 'cosine'],
                ELI5: "Imagine you're drawing the shape of ocean waves. They go up, then down, then up again, over and over in the same smooth pattern."
            },
            ferris_wheel_height: {
                analogy: "Riding a Ferris wheel",
                explanation: "Your height as you ride a Ferris wheel follows a cosine curve: starting high, going down, then back up",
                suitableFor: ['sine', 'cosine', 'transformations'],
                ELI5: "When you ride a Ferris wheel, you go up high, then down low, then back up high. If we draw your height over time, it makes a wave shape!"
            },
            pendulum_swing: {
                analogy: "Swinging pendulum",
                explanation: "A pendulum swings back and forth in a sine pattern, showing how position changes over time",
                suitableFor: ['sine', 'amplitude_period'],
                ELI5: "Think of a swing going back and forth. It goes high on one side, through the middle, high on the other side, and repeats forever."
            },
            amplitude_volume: {
                analogy: "Volume knob on radio",
                explanation: "Amplitude is like volume: larger amplitude means 'louder' (taller) wave, smaller means 'quieter' (shorter) wave",
                suitableFor: ['amplitude_period', 'transformations'],
                ELI5: "Amplitude is like how loud or quiet something is. A big amplitude makes a tall wave (loud), a small amplitude makes a short wave (quiet)."
            },
            period_repetition: {
                analogy: "How often something repeats",
                explanation: "Period is like the time between heartbeats or waves hitting the shore - how long until the pattern repeats",
                suitableFor: ['amplitude_period', 'transformations'],
                ELI5: "Period is like asking 'how long until this happens again?' Like waiting for your birthday to come around again each year."
            },
            asymptote_barriers: {
                analogy: "Invisible walls",
                explanation: "Asymptotes are like invisible walls the graph gets closer and closer to but can never touch or cross",
                suitableFor: ['tangent', 'reciprocal'],
                ELI5: "Imagine an invisible wall you can get really, really close to, but you can never touch it. That's an asymptote!"
            },
            inverse_undo: {
                analogy: "Undoing an action",
                explanation: "Inverse trig functions undo what trig functions do, like subtraction undoes addition",
                suitableFor: ['inverse'],
                ELI5: "If sin is like putting on your shoes, arcsin is like taking them off - it undoes what sin did!"
            },
            phase_shift_timing: {
                analogy: "Starting at a different time",
                explanation: "Phase shift is like two runners starting the same race but one starts 5 seconds later - same pattern, different timing",
                suitableFor: ['transformations'],
                ELI5: "Phase shift is like when your friend's birthday is the same season as yours, but a few weeks later. Same pattern, just shifted in time!"
            },
            vertical_shift_baseline: {
                analogy: "Changing the ground level",
                explanation: "Vertical shift moves the whole wave up or down, like measuring height from a hill instead of sea level",
                suitableFor: ['transformations'],
                ELI5: "Imagine jumping on a trampoline that's on the ground, versus jumping on one that's on a table. You're still jumping the same height, but you start from a different level!"
            },
            unit_circle_clock: {
                analogy: "Clock hands rotating",
                explanation: "Unit circle is like a clock: as the hand rotates, its height and horizontal position trace out sine and cosine",
                suitableFor: ['sine', 'cosine', 'unit_circle'],
                ELI5: "Think of a clock hand spinning around. If you track how high the tip is, that makes a wave shape - that's sine!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            find_amplitude: {
                level1: "What coefficient is in front of the trig function?",
                level2: "The amplitude is the absolute value of that coefficient",
                level3: "Look at |A| in y = A·trig(...)",
                level4: "For y = {A}·trig(...), amplitude = |{A}| = {amplitude}"
            },
            find_period: {
                level1: "What is multiplying x inside the trig function?",
                level2: "Period depends on the function type and the coefficient B",
                level3: "For sin/cos: period = 2π/|B|. For tan/cot: period = π/|B|",
                level4: "B = {B}, so period = {formula}/|{B}| = {period}"
            },
            find_phase_shift: {
                level1: "Look at what's inside the parentheses with x",
                level2: "You need to factor out any coefficient of x first",
                level3: "Write as B(x - C), then C is the phase shift",
                level4: "Rewrite {expression} as {B}(x - {C}), phase shift = {C}"
            },
            graph_sine: {
                level1: "Start by identifying amplitude, period, phase shift, and vertical shift",
                level2: "Draw the midline at y = D, then mark one period",
                level3: "Divide the period into 4 equal parts for key points",
                level4: "Plot points at: start (midline), max, midline, min, midline (end)"
            },
            graph_tangent: {
                level1: "Tangent has vertical asymptotes - where are they?",
                level2: "Find the period first: π/|B|",
                level3: "Asymptotes are at the boundaries of each period",
                level4: "Mark asymptotes, then plot x-intercept at middle of period and a few other points"
            },
            inverse_trig: {
                level1: "What is the restricted domain/range for this inverse function?",
                level2: "Remember: arcsin range is [-π/2, π/2], arccos is [0, π]",
                level3: "Find reference angle first, then determine which quadrant based on range",
                level4: "The answer must be in the range {range} for arc{function}"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "What is the amplitude of y = 4sin(x)?",
                    answer: 4,
                    assesses: "amplitude_understanding",
                    difficulty: "basic"
                },
                {
                    question: "What is the period of y = cos(2x)?",
                    answer: "π",
                    assesses: "period_calculation",
                    difficulty: "basic"
                },
                {
                    question: "Graph y = sin(x) for one period",
                    answer: "Graph from 0 to 2π",
                    assesses: "basic_graphing",
                    difficulty: "intermediate"
                },
                {
                    question: "Find the phase shift of y = sin(x - π/3)",
                    answer: "π/3 right",
                    assesses: "phase_shift",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "In y = A sin(B(x - C)) + D, which parameter affects the amplitude?",
                    options: ["A", "B", "C", "D"],
                    correct: "A",
                    explanation: "A is the amplitude (or |A| to be precise)"
                },
                {
                    question: "Which function has period π (not 2π)?",
                    options: ["sin(x)", "cos(x)", "tan(x)", "all of them"],
                    correct: "tan(x)",
                    explanation: "Tangent and cotangent have period π; sine and cosine have period 2π"
                },
                {
                    question: "What is the range of y = 3cos(x) - 1?",
                    options: ["[-3, 3]", "[-4, 2]", "[-1, 1]", "[-2, 4]"],
                    correct: "[-4, 2]",
                    explanation: "Range is [D - |A|, D + |A|] = [-1 - 3, -1 + 3] = [-4, 2]"
                }
            ],
            summative: [
                {
                    question: "Graph y = 2sin(3(x - π/4)) + 1 for two periods",
                    answer: "Complete graph with all transformations",
                    showsWork: true,
                    rubric: {
                        identify_transformations: 2,
                        calculate_values: 2,
                        accurate_graph: 3,
                        label_features: 2,
                        extend_periods: 1
                    }
                },
                {
                    question: "Write the equation of a cosine function with amplitude 5, period 4π, phase shift π/2 right, vertical shift 3 up",
                    answer: "y = 5cos((1/2)(x - π/2)) + 3",
                    showsWork: true,
                    rubric: {
                        amplitude: 1,
                        period_to_B: 2,
                        phase_shift: 1,
                        vertical_shift: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "Find amplitude of y = 6sin(x)",
                    "Find period of y = cos(x)",
                    "Graph y = sin(x) from 0 to 2π",
                    "What is cos(0)?"
                ],
                medium: [
                    "Find period of y = tan(3x)",
                    "Graph y = 2cos(x - π/2)",
                    "Find phase shift of y = sin(2x + π)",
                    "Write equation: amplitude 3, period π"
                ],
                hard: [
                    "Graph y = -3sin(2(x + π/4)) - 1",
                    "Find equation from graph with given max/min points",
                    "Solve sin(2x) = 1/2 for x ∈ [0, 2π]",
                    "Graph y = 2tan((1/2)x - π/4) + 1"
                ]
            },
            byObjective: {
                canFindAmplitude: [
                    "Find amplitude of y = 7cos(x)",
                    "Find amplitude of y = -3sin(2x)",
                    "What is amplitude of y = (1/2)sin(x) + 4?"
                ],
                canFindPeriod: [
                    "Find period of y = sin(4x)",
                    "Find period of y = tan(2x)",
                    "Find period of y = cos((1/3)x)"
                ],
                canIdentifyTransformations: [
                    "Identify all transformations in y = 3sin(2(x - π)) + 1",
                    "Describe how y = -cos(x) differs from y = cos(x)",
                    "What transformations map sin(x) to sin(x - π/2)?"
                ],
                canGraphTransformed: [
                    "Graph y = 2sin(x) + 1",
                    "Graph y = cos(2x)",
                    "Graph y = sin(x - π/4)"
                ],
                canWriteEquation: [
                    "Write sine equation with amplitude 4, period π",
                    "Write cosine equation from graph",
                    "Write tangent equation with period 2π, vertical shift -2"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "identify_function": "First identify which trig function (sin, cos, tan, etc.)",
                "find_transformations": "Identify A, B, C, D parameters",
                "calculate_features": "Compute amplitude, period, shifts",
                "sketch_graph": "Use key points and transformations to sketch",
                "verify": "Check key points and behavior"
            },
            whenToUseWhat: {
                unit_circle: "For finding exact trig values at special angles",
                key_points: "For graphing sine and cosine",
                asymptotes_first: "For graphing tangent, cotangent, and reciprocal functions",
                transformations: "When equation is in form y = A·f(B(x - C)) + D",
                inverse_thinking: "When finding angles from trig ratios"
            },
            methodSelection: {
                factorsToConsider: [
                    "Type of trig function (sin, cos, tan, etc.)",
                    "Presence and values of transformations",
                    "Whether graphing or analyzing",
                    "Level of precision required"
                ],
                generalApproach: [
                    "1. Identify the base function",
                    "2. Determine all transformation parameters",
                    "3. Calculate amplitude (if applicable), period, shifts",
                    "4. Mark key features (midline, asymptotes, intercepts)",
                    "5. Plot key points",
                    "6. Sketch smooth curve",
                    "7. Extend pattern as needed"
                ]
            },
            graphingOrder: {
                "For sine/cosine": [
                    "1. Draw midline at y = D",
                    "2. Mark amplitude distances above/below midline",
                    "3. Mark one period starting at x = C",
                    "4. Divide period into 4 parts",
                    "5. Plot 5 key points",
                    "6. Draw smooth curve"
                ],
                "For tangent": [
                    "1. Find period: π/|B|",
                    "2. Mark vertical asymptotes",
                    "3. Find x-intercept (middle of period)",
                    "4. Plot 2-3 points between asymptotes",
                    "5. Draw S-curves",
                    "6. Repeat pattern"
                ],
                "For reciprocal": [
                    "1. Graph parent function lightly",
                    "2. Mark asymptotes where parent = 0",
                    "3. Mark local extrema at parent's extrema",
                    "4. Draw U-shaped branches",
                    "5. Check: reciprocal large where parent small"
                ]
            },
            optimizationTips: {
                "Use symmetry": "Sine/cosine repeat every period; use symmetry to extend graph",
                "Reference angles": "Use unit circle and reference angles for exact values",
                "Factor first": "Always factor B from Bx + C to get B(x + C/B) for correct phase shift",
                "Check special points": "Verify max, min, zeros, asymptotes match expectations"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Amplitude Sprint",
                    timeLimit: 60,
                    problems: [
                        "Amplitude of y = 5sin(x)",
                        "Amplitude of y = -3cos(x)",
                        "Amplitude of y = (1/2)sin(x)",
                        "Amplitude of y = 4sin(2x) + 1",
                        "Amplitude of y = -7cos(x - π)"
                    ]
                },
                {
                    name: "Period Challenge",
                    timeLimit: 90,
                    problems: [
                        "Period of y = sin(2x)",
                        "Period of y = cos(x/2)",
                        "Period of y = tan(3x)",
                        "Period of y = sin(4x)",
                        "Period of y = cot(x/2)"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Function",
                    problem: "A trig function has amplitude 3, period π, starts at maximum at x = 0. What is it?",
                    solve: "Identify function type and write equation",
                    solution: "y = 3cos(2x) - Cosine starts at max, period π means B = 2"
                },
                {
                    name: "Transformation Detective",
                    problem: "f(x) transforms to g(x) = f(2(x - π/4)) + 3. Describe all transformations.",
                    solution: "Horizontal compression by 1/2, shift right π/4, shift up 3"
                },
                {
                    name: "Graph Match",
                    problem: "Match these equations to graphs (provide 4 equations, 4 graphs)",
                    solution: "Requires analyzing multiple characteristics"
                }
            ],
            applications: [
                {
                    scenario: "Tidal Motion",
                    problem: "High tide 8 ft at noon, low tide 2 ft at 6 PM. Write equation for height h(t) where t is hours after midnight.",
                    equation: "h(t) = 3cos(π/6(t - 12)) + 5",
                    solution: "Amplitude 3, period 12 hrs, max at t=12, midline at 5 ft"
                },
                {
                    scenario: "Ferris Wheel",
                    problem: "Ferris wheel diameter 50 ft, center 30 ft above ground, completes rotation every 2 minutes. Height at time t?",
                    equation: "h(t) = 25cos(πt) + 30",
                    solution: "Amplitude 25 ft (radius), period 2 min, starts at max"
                },
                {
                    scenario: "Sound Wave",
                    problem: "Musical note A has frequency 440 Hz. Write wave equation with amplitude 0.1.",
                    equation: "y = 0.1sin(880πt)",
                    solution: "ω = 2πf = 2π(440) = 880π"
                },
                {
                    scenario: "Temperature Variation",
                    problem: "Temperature varies from 45°F to 75°F, minimum at 4 AM, maximum at 4 PM. Write T(t).",
                    equation: "T(t) = 15sin(π/12(t - 10)) + 60",
                    solution: "Amplitude 15°, period 24 hrs, phase shift to position max at 16 (4 PM)"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Find amplitude of y = -5sin(x)",
                        "Amplitude = -5"  // ERROR: forgot absolute value
                    ],
                    correctAnswer: "Amplitude = 5",
                    errorType: "Amplitude is always positive: |A| = |-5| = 5"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Find period of y = tan(2x)",
                        "Period = 2π/2 = π"  // ERROR: used sine/cosine formula
                    ],
                    correctAnswer: "Period = π/2",
                    errorType: "Tangent period is π/|B|, not 2π/|B|"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "Find phase shift of y = sin(2x - π)",
                        "Phase shift = -π"  // ERROR: didn't factor out B
                    ],
                    correctAnswer: "Phase shift = π/2 right",
                    errorType: "Must factor: 2x - π = 2(x - π/2), so shift is π/2"
                }
            ]
        };
    }

    // MAIN SOLVER METHOD
    solveTrigGraphProblem(config) {
        const { equation, scenario, parameters, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseTrigGraphProblem(equation, scenario, parameters, problemType, context);

            // Solve the problem
            this.currentSolution = this.solveTrigGraphProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateTrigGraphSteps(this.currentProblem, this.currentSolution);

            // Generate graph data
            this.generateTrigGraphData();

            // Generate workbook
            this.generateTrigGraphWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                graphData: this.graphData
            };

        } catch (error) {
            throw new Error(`Failed to solve trigonometric graph problem: ${error.message}`);
        }
    }

    parseTrigGraphProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = equation ? this.cleanMathExpression(equation) : '';

        // If problem type is specified, use it directly
        if (problemType && this.trigGraphTypes[problemType]) {
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

        // Auto-detect trig graph problem type
        for (const [type, config] of Object.entries(this.trigGraphTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(scenario)) {
                    const match = cleanInput.match(pattern);
                    const extractedParams = this.extractTrigParameters(match, type);

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

        // Default to sine transformed if parameters are provided
        if (parameters.A !== undefined || parameters.B !== undefined) {
            return {
                originalInput: equation || 'Trigonometric function with given parameters',
                cleanInput: cleanInput,
                type: 'sine_transformed',
                scenario: scenario,
                parameters: {
                    A: parameters.A || 1,
                    B: parameters.B || 1,
                    C: parameters.C || 0,
                    D: parameters.D || 0,
                    ...parameters
                },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize trigonometric graph problem type from: ${equation || scenario}`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/π/g, 'pi')
            .replace(/≤/g, '<=')
            .replace(/≥/g, '>=')
            .trim();
    }

    extractTrigParameters(match, type) {
        const params = {};

        if (!match) return params;

        // Extract based on equation type
        // This is simplified - in practice would need robust parsing
        switch(type) {
            case 'sine_transformed':
            case 'cosine_transformed':
            case 'tangent_transformed':
                if (match[1]) params.A = this.parseCoefficient(match[1]);
                if (match[2]) params.B = this.parseCoefficient(match[2]);
                if (match[3]) params.C = this.parseCoefficient(match[3]);
                if (match[4]) params.D = this.parseCoefficient(match[4]);
                break;
        }

        return params;
    }

    parseCoefficient(coeff) {
        if (!coeff || coeff.trim() === '') return 1;

        let cleaned = coeff.replace(/\s+/g, '');
        if (cleaned === '+' || cleaned === '') return 1;
        if (cleaned === '-') return -1;

        // Handle pi
        if (cleaned.includes('pi') || cleaned.includes('π')) {
            cleaned = cleaned.replace(/pi|π/g, String(Math.PI));
        }

        // Handle fractions
        const fractionMatch = cleaned.match(/^([+-]?\d*\.?\d*)\/(\d*\.?\d*)$/);
        if (fractionMatch) {
            const numerator = parseFloat(fractionMatch[1]) || 1;
            const denominator = parseFloat(fractionMatch[2]) || 1;
            return denominator !== 0 ? numerator / denominator : 1;
        }

        const num = parseFloat(cleaned);
        return isNaN(num) ? 1 : num;
    }

    solveTrigGraphProblem_Internal(problem) {
        const solver = this.trigGraphTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for trig graph problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // TRIGONOMETRIC GRAPH ANALYZERS

    analyzeSineGraph(problem) {
        return {
            function: 'sine',
            equation: 'y = sin(x)',
            amplitude: 1,
            period: 2 * Math.PI,
            phaseShift: 0,
            verticalShift: 0,
            domain: 'All real numbers',
            range: '[-1, 1]',
            keyPoints: [
                { x: 0, y: 0, description: 'Origin' },
                { x: Math.PI/2, y: 1, description: 'Maximum' },
                { x: Math.PI, y: 0, description: 'x-intercept' },
                { x: 3*Math.PI/2, y: -1, description: 'Minimum' },
                { x: 2*Math.PI, y: 0, description: 'End of period' }
            ],
            characteristics: {
                symmetry: 'Odd function (origin symmetry)',
                increasing: '[0, π/2] and [3π/2, 2π]',
                decreasing: '[π/2, 3π/2]',
                maxima: 'x = π/2 + 2πn',
                minima: 'x = 3π/2 + 2πn',
                zeros: 'x = πn'
            },
            category: 'sine'
        };
    }

    analyzeTransformedSine(problem) {
        const { A = 1, B = 1, C = 0, D = 0 } = problem.parameters;
        const amplitude = Math.abs(A);
        const period = (2 * Math.PI) / Math.abs(B);
        const phaseShift = C;
        const verticalShift = D;

        return {
            function: 'sine',
            equation: `y = ${A}sin(${B}(x - ${C})) + ${D}`,
            amplitude: amplitude,
            period: period,
            phaseShift: phaseShift,
            phaseShiftDirection: phaseShift >= 0 ? 'right' : 'left',
            verticalShift: verticalShift,
            verticalShiftDirection: verticalShift >= 0 ? 'up' : 'down',
            midline: `y = ${D}`,
            domain: 'All real numbers',
            range: `[${D - amplitude}, ${D + amplitude}]`,
            transformations: {
                verticalStretch: A !== 1 ? `Factor of ${Math.abs(A)}` : 'None',
                verticalReflection: A < 0 ? 'Yes (reflected over x-axis)' : 'No',
                horizontalCompression: B !== 1 ? `Factor of ${Math.abs(B)}` : 'None',
                horizontalReflection: B < 0 ? 'Yes (reflected over y-axis)' : 'No',
                horizontalShift: C !== 0 ? `${Math.abs(C)} ${phaseShift >= 0 ? 'right' : 'left'}` : 'None',
                verticalShift: D !== 0 ? `${Math.abs(D)} ${verticalShift >= 0 ? 'up' : 'down'}` : 'None'
            },
            keyPoints: this.calculateSineKeyPoints(A, B, C, D),
            category: 'sine'
        };
    }

    calculateSineKeyPoints(A, B, C, D) {
        const period = (2 * Math.PI) / Math.abs(B);
        const points = [];

        for (let i = 0; i <= 4; i++) {
            const x = C + (i * period / 4);
            let y;

            switch(i) {
                case 0:
                    y = D;
                    points.push({ x, y, description: 'Start (on midline)' });
                    break;
                case 1:
                    y = A + D;
                    points.push({ x, y, description: 'Maximum' });
                    break;
                case 2:
                    y = D;
                    points.push({ x, y, description: 'Midline crossing' });
                    break;
                case 3:
                    y = -A + D;
                    points.push({ x, y, description: 'Minimum' });
                    break;
                case 4:
                    y = D;
                    points.push({ x, y, description: 'End of period (on midline)' });
                    break;
            }
        }

        return points;
    }

    analyzeCosineGraph(problem) {
        return {
            function: 'cosine',
            equation: 'y = cos(x)',
            amplitude: 1,
            period: 2 * Math.PI,
            phaseShift: 0,
            verticalShift: 0,
            domain: 'All real numbers',
            range: '[-1, 1]',
            keyPoints: [
                { x: 0, y: 1, description: 'Maximum at origin' },
                { x: Math.PI/2, y: 0, description: 'x-intercept' },
                { x: Math.PI, y: -1, description: 'Minimum' },
                { x: 3*Math.PI/2, y: 0, description: 'x-intercept' },
                { x: 2*Math.PI, y: 1, description: 'Maximum (end of period)' }
            ],
            characteristics: {
                symmetry: 'Even function (y-axis symmetry)',
                increasing: '[π, 2π]',
                decreasing: '[0, π]',
                maxima: 'x = 2πn',
                minima: 'x = π + 2πn',
                zeros: 'x = π/2 + πn'
            },
            category: 'cosine'
        };
    }

    analyzeTransformedCosine(problem) {
        const { A = 1, B = 1, C = 0, D = 0 } = problem.parameters;
        const amplitude = Math.abs(A);
        const period = (2 * Math.PI) / Math.abs(B);
        const phaseShift = C;
        const verticalShift = D;

        return {
            function: 'cosine',
            equation: `y = ${A}cos(${B}(x - ${C})) + ${D}`,
            amplitude: amplitude,
            period: period,
            phaseShift: phaseShift,
            phaseShiftDirection: phaseShift >= 0 ? 'right' : 'left',
            verticalShift: verticalShift,
            verticalShiftDirection: verticalShift >= 0 ? 'up' : 'down',
            midline: `y = ${D}`,
            domain: 'All real numbers',
            range: `[${D - amplitude}, ${D + amplitude}]`,
            transformations: {
                verticalStretch: A !== 1 ? `Factor of ${Math.abs(A)}` : 'None',
                verticalReflection: A < 0 ? 'Yes (reflected over x-axis)' : 'No',
                horizontalCompression: B !== 1 ? `Factor of ${Math.abs(B)}` : 'None',
                horizontalReflection: B < 0 ? 'Yes (reflected over y-axis)' : 'No',
                horizontalShift: C !== 0 ? `${Math.abs(C)} ${phaseShift >= 0 ? 'right' : 'left'}` : 'None',
                verticalShift: D !== 0 ? `${Math.abs(D)} ${verticalShift >= 0 ? 'up' : 'down'}` : 'None'
            },
            keyPoints: this.calculateCosineKeyPoints(A, B, C, D),
            category: 'cosine'
        };
    }

    calculateCosineKeyPoints(A, B, C, D) {
        const period = (2 * Math.PI) / Math.abs(B);
        const points = [];

        for (let i = 0; i <= 4; i++) {
            const x = C + (i * period / 4);
            let y;

            switch(i) {
                case 0:
                    y = A + D;
                    points.push({ x, y, description: 'Start (maximum)' });
                    break;
                case 1:
                    y = D;
                    points.push({ x, y, description: 'Midline crossing' });
                    break;
                case 2:
                    y = -A + D;
                    points.push({ x, y, description: 'Minimum' });
                    break;
                case 3:
                    y = D;
                    points.push({ x, y, description: 'Midline crossing' });
                    break;
                case 4:
                    y = A + D;
                    points.push({ x, y, description: 'End of period (maximum)' });
                    break;
            }
        }

        return points;
    }

    analyzeTangentGraph(problem) {
        return {
            function: 'tangent',
            equation: 'y = tan(x)',
            amplitude: 'N/A (no amplitude for tangent)',
            period: Math.PI,
            phaseShift: 0,
            verticalShift: 0,
            domain: 'x ≠ π/2 + πn',
            range: 'All real numbers',
            asymptotes: [
                { x: -Math.PI/2, description: 'Vertical asymptote' },
                { x: Math.PI/2, description: 'Vertical asymptote' },
                { x: 3*Math.PI/2, description: 'Vertical asymptote' }
            ],
            keyPoints: [
                { x: -Math.PI/4, y: -1, description: 'Point in period' },
                { x: 0, y: 0, description: 'x-intercept (origin)' },
                { x: Math.PI/4, y: 1, description: 'Point in period' }
            ],
            characteristics: {
                symmetry: 'Odd function (origin symmetry)',
                increasing: 'On each interval between asymptotes',
                decreasing: 'Never',
                asymptotePattern: 'x = π/2 + πn',
                zeros: 'x = πn'
            },
            category: 'tangent'
        };
    }

    analyzeTransformedTangent(problem) {
        const { A = 1, B = 1, C = 0, D = 0 } = problem.parameters;
        const period = Math.PI / Math.abs(B);
        const phaseShift = C;
        const verticalShift = D;

        // Calculate asymptote positions
        const asymptotes = [];
        const baseAsymptote = phaseShift - period/2;
        for (let i = -1; i <= 2; i++) {
            asymptotes.push({
                x: baseAsymptote + i * period,
                description: 'Vertical asymptote'
            });
        }

        return {
            function: 'tangent',
            equation: `y = ${A}tan(${B}(x - ${C})) + ${D}`,
            amplitude: 'N/A (tangent has no amplitude)',
            period: period,
            phaseShift: phaseShift,
            phaseShiftDirection: phaseShift >= 0 ? 'right' : 'left',
            verticalShift: verticalShift,
            verticalShiftDirection: verticalShift >= 0 ? 'up' : 'down',
            midline: `y = ${D}`,
            domain: `x ≠ ${phaseShift + Math.PI/(2*B)} + ${Math.PI/B}n`,
            range: 'All real numbers',
            asymptotes: asymptotes,
            transformations: {
                verticalStretch: A !== 1 ? `Factor of ${Math.abs(A)}` : 'None',
                verticalReflection: A < 0 ? 'Yes (reflected over x-axis)' : 'No',
                horizontalCompression: B !== 1 ? `Factor of ${Math.abs(B)}` : 'None',
                horizontalShift: C !== 0 ? `${Math.abs(C)} ${phaseShift >= 0 ? 'right' : 'left'}` : 'None',
                verticalShift: D !== 0 ? `${Math.abs(D)} ${verticalShift >= 0 ? 'up' : 'down'}` : 'None'
            },
            keyPoints: this.calculateTangentKeyPoints(A, B, C, D),
            category: 'tangent'
        };
    }

    calculateTangentKeyPoints(A, B, C, D) {
        const period = Math.PI / Math.abs(B);
        const points = [];

        // x-intercept at middle of period
        const xIntercept = C;
        points.push({ x: xIntercept, y: D, description: 'x-intercept' });

        // Points at 1/4 and 3/4 of period from start
        const quarterPoint = C - period/4;
        points.push({ x: quarterPoint, y: -A + D, description: 'Quarter period point' });

        const threeQuarterPoint = C + period/4;
        points.push({ x: threeQuarterPoint, y: A + D, description: 'Three-quarter period point' });

        return points;
    }

    analyzeCosecantGraph(problem) {
        const { A = 1, B = 1, C = 0, D = 0 } = problem.parameters;
        const amplitude = Math.abs(A);
        const period = (2 * Math.PI) / Math.abs(B);
        const phaseShift = C;
        const verticalShift = D;

        // Asymptotes where sin = 0
        const asymptotes = [];
        for (let i = -1; i <= 2; i++) {
            asymptotes.push({
                x: phaseShift + (i * Math.PI / B),
                description: 'Vertical asymptote (where sin = 0)'
            });
        }

        return {
            function: 'cosecant',
            equation: `y = ${A}csc(${B}(x - ${C})) + ${D}`,
            amplitude: 'N/A (reciprocal function)',
            period: period,
            phaseShift: phaseShift,
            verticalShift: verticalShift,
            midline: `y = ${D}`,
            domain: `x ≠ ${phaseShift} + ${Math.PI/B}n`,
            range: `(-∞, ${-amplitude + D}] ∪ [${amplitude + D}, ∞)`,
            asymptotes: asymptotes,
            characteristics: {
                symmetry: 'Odd function',
                branches: 'U-shaped branches between asymptotes',
                localExtrema: 'At sine maxima/minima',
                relationship: 'Reciprocal of sine'
            },
            category: 'reciprocal'
        };
    }

    analyzeSecantGraph(problem) {
        const { A = 1, B = 1, C = 0, D = 0 } = problem.parameters;
        const amplitude = Math.abs(A);
        const period = (2 * Math.PI) / Math.abs(B);
        const phaseShift = C;
        const verticalShift = D;

        // Asymptotes where cos = 0
        const asymptotes = [];
        for (let i = -1; i <= 2; i++) {
            asymptotes.push({
                x: phaseShift + (Math.PI/(2*B)) + (i * Math.PI / B),
                description: 'Vertical asymptote (where cos = 0)'
            });
        }

        return {
            function: 'secant',
            equation: `y = ${A}sec(${B}(x - ${C})) + ${D}`,
            amplitude: 'N/A (reciprocal function)',
            period: period,
            phaseShift: phaseShift,
            verticalShift: verticalShift,
            midline: `y = ${D}`,
            domain: `x ≠ ${phaseShift + Math.PI/(2*B)} + ${Math.PI/B}n`,
            range: `(-∞, ${-amplitude + D}] ∪ [${amplitude + D}, ∞)`,
            asymptotes: asymptotes,
            characteristics: {
                symmetry: 'Even function',
                branches: 'U-shaped branches between asymptotes',
                localExtrema: 'At cosine maxima/minima',
                relationship: 'Reciprocal of cosine'
            },
            category: 'reciprocal'
        };
    }

    analyzeCotangentGraph(problem) {
        const { A = 1, B = 1, C = 0, D = 0 } = problem.parameters;
        const period = Math.PI / Math.abs(B);
        const phaseShift = C;
        const verticalShift = D;

        // Asymptotes where sin = 0
        const asymptotes = [];
        for (let i = -1; i <= 2; i++) {
            asymptotes.push({
                x: phaseShift + (i * Math.PI / B),
                description: 'Vertical asymptote (where sin = 0)'
            });
        }

        return {
            function: 'cotangent',
            equation: `y = ${A}cot(${B}(x - ${C})) + ${D}`,
            amplitude: 'N/A (no amplitude for cotangent)',
            period: period,
            phaseShift: phaseShift,
            verticalShift: verticalShift,
            midline: `y = ${D}`,
            domain: `x ≠ ${phaseShift} + ${Math.PI/B}n`,
            range: 'All real numbers',
            asymptotes: asymptotes,
            characteristics: {
                symmetry: 'Odd function',
                decreasing: 'On each interval between asymptotes',
                zeros: `x = ${phaseShift + Math.PI/(2*B)} + ${Math.PI/B}n`,
                relationship: 'Reciprocal of tangent, or cos/sin'
            },
            category: 'reciprocal'
        };
    }

    analyzeArcsineGraph(problem) {
        return {
            function: 'arcsine',
            equation: 'y = arcsin(x)',
            domain: '[-1, 1]',
            range: '[-π/2, π/2]',
            keyPoints: [
                { x: -1, y: -Math.PI/2, description: 'Minimum output' },
                { x: -1/Math.sqrt(2), y: -Math.PI/4, description: 'Point' },
                { x: 0, y: 0, description: 'Origin' },
                { x: 1/Math.sqrt(2), y: Math.PI/4, description: 'Point' },
                { x: 1, y: Math.PI/2, description: 'Maximum output' }
            ],
            characteristics: {
                symmetry: 'Odd function (origin symmetry)',
                increasing: 'Entire domain',
                inverseOf: 'sin(x) restricted to [-π/2, π/2]',
                graphShape: 'S-curve passing through origin'
            },
            category: 'inverse'
        };
    }

    analyzeArccosineGraph(problem) {
        return {
            function: 'arccosine',
            equation: 'y = arccos(x)',
            domain: '[-1, 1]',
            range: '[0, π]',
            keyPoints: [
                { x: -1, y: Math.PI, description: 'Maximum output' },
                { x: -1/Math.sqrt(2), y: 3*Math.PI/4, description: 'Point' },
                { x: 0, y: Math.PI/2, description: 'Midpoint' },
                { x: 1/Math.sqrt(2), y: Math.PI/4, description: 'Point' },
                { x: 1, y: 0, description: 'Minimum output' }
            ],
            characteristics: {
                symmetry: 'No symmetry (neither even nor odd)',
                decreasing: 'Entire domain',
                inverseOf: 'cos(x) restricted to [0, π]',
                graphShape: 'Decreasing curve from (−1, π) to (1, 0)'
            },
            category: 'inverse'
        };
    }

    analyzeArctangentGraph(problem) {
        return {
            function: 'arctangent',
            equation: 'y = arctan(x)',
            domain: 'All real numbers',
            range: '(-π/2, π/2)',
            horizontalAsymptotes: [
                { y: -Math.PI/2, description: 'As x → -∞' },
                { y: Math.PI/2, description: 'As x → ∞' }
            ],
            keyPoints: [
                { x: -Math.sqrt(3), y: -Math.PI/3, description: 'Point' },
                { x: -1, y: -Math.PI/4, description: 'Point' },
                { x: 0, y: 0, description: 'Origin' },
                { x: 1, y: Math.PI/4, description: 'Point' },
                { x: Math.sqrt(3), y: Math.PI/3, description: 'Point' }
            ],
            characteristics: {
                symmetry: 'Odd function (origin symmetry)',
                increasing: 'Entire domain',
                inverseOf: 'tan(x) restricted to (-π/2, π/2)',
                graphShape: 'S-curve with horizontal asymptotes'
            },
            category: 'inverse'
        };
    }

    findAmplitude(problem) {
        const { A = 1 } = problem.parameters;
        const amplitude = Math.abs(A);

        return {
            task: 'Find Amplitude',
            givenEquation: problem.cleanInput || `y = ${A}·trig(...)`,
            amplitude: amplitude,
            explanation: `Amplitude is the absolute value of the coefficient A`,
            formula: 'Amplitude = |A|',
            calculation: `|${A}| = ${amplitude}`,
            category: 'analysis'
        };
    }

    findPeriod(problem) {
        const { B = 1, functionType = 'sine' } = problem.parameters;
        
        let basePeriod;
        let periodFormula;

        if (functionType === 'tangent' || functionType === 'cotangent') {
            basePeriod = Math.PI;
            periodFormula = 'π/|B|';
        } else {
            basePeriod = 2 * Math.PI;
            periodFormula = '2π/|B|';
        }

        const period = basePeriod / Math.abs(B);

        return {
            task: 'Find Period',
            functionType: functionType,
            givenEquation: problem.cleanInput,
            coefficientB: B,
            period: period,
            explanation: `For ${functionType}, period = ${periodFormula}`,
            formula: periodFormula,
            calculation: `${periodFormula.replace('|B|', `|${B}|`)} = ${period}`,
            category: 'analysis'
        };
    }

    findPhaseShift(problem) {
        const { B = 1, C = 0 } = problem.parameters;
        const phaseShift = C;
        const direction = phaseShift >= 0 ? 'right' : 'left';

        return {
            task: 'Find Phase Shift',
            givenEquation: problem.cleanInput,
            mustFactor: B !== 1,
            factoredForm: B !== 1 ? `${B}(x - ${C})` : `(x - ${C})`,
            phaseShift: Math.abs(phaseShift),
            direction: direction,
            explanation: `Phase shift C moves the graph horizontally`,
            note: B !== 1 ? `Must factor out B = ${B} to identify C correctly` : '',
            category: 'analysis'
        };
    }

    findVerticalShift(problem) {
        const { D = 0 } = problem.parameters;
        const direction = D >= 0 ? 'up' : 'down';

        return {
            task: 'Find Vertical Shift',
            givenEquation: problem.cleanInput,
            verticalShift: Math.abs(D),
            direction: direction,
            midline: `y = ${D}`,
            explanation: `Vertical shift D moves the entire graph up or down`,
            note: 'The midline is y = D',
            category: 'analysis'
        };
    }

    writeEquationFromGraph(problem) {
        const { 
            functionType = 'sine',
            amplitude = 1,
            period = 2 * Math.PI,
            phaseShift = 0,
            verticalShift = 0
        } = problem.parameters;

        // Calculate B from period
        let B;
        if (functionType === 'tangent' || functionType === 'cotangent') {
            B = Math.PI / period;
        } else {
            B = (2 * Math.PI) / period;
        }

        const A = amplitude;
        const C = phaseShift;
        const D = verticalShift;

        let equation;
        if (functionType === 'sine') {
            equation = `y = ${A}sin(${B}(x - ${C})) + ${D}`;
        } else if (functionType === 'cosine') {
            equation = `y = ${A}cos(${B}(x - ${C})) + ${D}`;
        } else if (functionType === 'tangent') {
            equation = `y = ${A}tan(${B}(x - ${C})) + ${D}`;
        }

        return {
            task: 'Write Equation from Graph',
            functionType: functionType,
            givenCharacteristics: {
                amplitude: amplitude,
                period: period,
                phaseShift: phaseShift,
                verticalShift: verticalShift
            },
            calculatedParameters: {
                A: A,
                B: B,
                C: C,
                D: D
            },
            equation: equation,
            explanation: `Equation written using form y = A·f(B(x - C)) + D`,
            category: 'analysis'
        };
    }

    compareGraphs(problem) {
        return {
            task: 'Compare Trigonometric Graphs',
            comparison: 'Detailed comparison of two or more trig functions',
            note: 'Specific comparison depends on which functions are being compared',
            category: 'analysis'
        };
    }

    analyzeTransformations(problem) {
        const { A = 1, B = 1, C = 0, D = 0 } = problem.parameters;

        const transformations = [];

        if (Math.abs(A) !== 1) {
            transformations.push({
                type: 'Vertical Stretch/Compression',
                factor: Math.abs(A),
                description: Math.abs(A) > 1 ? `Stretched by factor ${Math.abs(A)}` : `Compressed by factor ${Math.abs(A)}`
            });
        }

        if (A < 0) {
            transformations.push({
                type: 'Vertical Reflection',
                description: 'Reflected over x-axis (or midline)'
            });
        }

        if (Math.abs(B) !== 1) {
            transformations.push({
                type: 'Horizontal Compression/Stretch',
                factor: Math.abs(B),
                description: Math.abs(B) > 1 ? `Compressed by factor ${Math.abs(B)}` : `Stretched by factor ${1/Math.abs(B)}`
            });
        }

        if (B < 0) {
            transformations.push({
                type: 'Horizontal Reflection',
                description: 'Reflected over y-axis'
            });
        }

        if (C !== 0) {
            transformations.push({
                type: 'Horizontal Shift',
                amount: Math.abs(C),
                direction: C > 0 ? 'right' : 'left',
                description: `Shifted ${Math.abs(C)} units ${C > 0 ? 'right' : 'left'}`
            });
        }

        if (D !== 0) {
            transformations.push({
                type: 'Vertical Shift',
                amount: Math.abs(D),
                direction: D > 0 ? 'up' : 'down',
                description: `Shifted ${Math.abs(D)} units ${D > 0 ? 'up' : 'down'}`
            });
        }

        return {
            task: 'Analyze Transformations',
            equation: problem.cleanInput,
            parameters: { A, B, C, D },
            transformations: transformations,
            transformationOrder: 'Horizontal first (B, C), then vertical (A, D)',
            category: 'transformations'
        };
    }

    // STEP GENERATION

    generateTrigGraphSteps(problem, solution) {
        let baseSteps = this.generateBaseTrigGraphSteps(problem, solution);

        // Apply enhancements based on options
        if (this.explanationLevel !== 'basic') {
            baseSteps = baseSteps.map((step, index, array) =>
                this.enhanceTrigStepExplanation(step, problem, solution, index, array.length)
            );
        }

        if (this.includeConceptualConnections) {
            baseSteps = this.addStepBridges(baseSteps, problem);
        }

        if (this.includeErrorPrevention) {
            baseSteps = baseSteps.map(step =>
                this.addTrigErrorPrevention(step, problem.type)
            );
        }

        if (this.explanationLevel === 'scaffolded') {
            baseSteps = this.addTrigScaffolding(baseSteps, problem);
        }

        if (this.explanationLevel === 'ELI5') {
            baseSteps = this.addTrigELI5Explanations(baseSteps, problem);
        }

        return baseSteps;
    }

    generateBaseTrigGraphSteps(problem, solution) {
        const category = this.trigGraphTypes[problem.type]?.category;

        switch(category) {
            case 'sine':
            case 'cosine':
                return this.generateSineCosineSteps(problem, solution);
            case 'tangent':
                return this.generateTangentSteps(problem, solution);
            case 'reciprocal':
                return this.generateReciprocalSteps(problem, solution);
            case 'inverse':
                return this.generateInverseSteps(problem, solution);
            case 'analysis':
                return this.generateAnalysisSteps(problem, solution);
            case 'transformations':
                return this.generateTransformationSteps(problem, solution);
            default:
                return this.generateGenericTrigSteps(problem, solution);
        }
    }

    generateSineCosineSteps(problem, solution) {
        const steps = [];

        // Step 1: Identify the equation
        steps.push({
            stepNumber: 1,
            step: 'Identify the equation',
            description: `Given ${solution.function} function`,
            expression: solution.equation,
            reasoning: `This is a ${solution.function} function${solution.amplitude !== 1 || solution.phaseShift !== 0 || solution.verticalShift !== 0 ? ' with transformations' : ''}`,
            goalStatement: 'Analyze all characteristics of this trigonometric function'
        });

        // Step 2: Identify parameters
        if (solution.amplitude || solution.period) {
            steps.push({
                stepNumber: 2,
                step: 'Identify parameters A, B, C, D',
                description: 'Extract transformation parameters from equation',
                parameters: {
                    A: `${problem.parameters.A || 1} (affects amplitude and reflection)`,
                    B: `${problem.parameters.B || 1} (affects period)`,
                    C: `${problem.parameters.C || 0} (phase shift)`,
                    D: `${problem.parameters.D || 0} (vertical shift)`
                },
                reasoning: 'These parameters determine all transformations applied to the basic function'
            });
        }

        // Step 3: Calculate amplitude
        if (solution.amplitude !== undefined) {
            steps.push({
                stepNumber: 3,
                step: 'Calculate amplitude',
                description: 'Find the absolute value of A',
                formula: 'Amplitude = |A|',
                calculation: `|${problem.parameters.A || 1}| = ${solution.amplitude}`,
                result: `Amplitude = ${solution.amplitude}`,
                reasoning: 'Amplitude is the distance from midline to maximum (or minimum)',
                interpretation: `The graph oscillates ${solution.amplitude} units above and below the midline`
            });
        }

        // Step 4: Calculate period
        if (solution.period !== undefined) {
            steps.push({
                stepNumber: 4,
                step: 'Calculate period',
                description: 'Find how long one complete cycle takes',
                formula: `Period = 2π/|B| for ${solution.function}`,
                calculation: `2π/|${problem.parameters.B || 1}| = ${solution.period}`,
                result: `Period = ${solution.period}`,
                reasoning: 'Period is the horizontal distance for one complete wave cycle',
                interpretation: `The pattern repeats every ${solution.period} units`
            });
        }

        // Step 5: Identify phase shift
        if (solution.phaseShift !== 0) {
            steps.push({
                stepNumber: 5,
                step: 'Identify phase shift',
                description: 'Determine horizontal shift',
                value: `C = ${solution.phaseShift}`,
                direction: solution.phaseShiftDirection,
                result: `Phase shift: ${Math.abs(solution.phaseShift)} units ${solution.phaseShiftDirection}`,
                reasoning: 'Phase shift moves the entire graph left or right',
                note: problem.parameters.B !== 1 ? `Must factor out B to find true phase shift` : ''
            });
        }

        // Step 6: Identify vertical shift
        if (solution.verticalShift !== 0) {
            steps.push({
                stepNumber: 6,
                step: 'Identify vertical shift',
                description: 'Determine vertical translation',
                value: `D = ${solution.verticalShift}`,
                direction: solution.verticalShiftDirection,
                midline: solution.midline,
                result: `Vertical shift: ${Math.abs(solution.verticalShift)} units ${solution.verticalShiftDirection}`,
                reasoning: 'Vertical shift moves the midline up or down',
                interpretation: `The midline is at ${solution.midline}`
            });
        }

        // Step 7: Determine domain and range
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Determine domain and range',
            description: 'Find the set of valid inputs and outputs',
            domain: solution.domain,
            range: solution.range,
            reasoning: `${solution.function === 'sine' ? 'Sine' : 'Cosine'} functions are defined for all real numbers`,
            rangeExplanation: `Range is from minimum to maximum: [${solution.range}]`
        });

        // Step 8: Find key points
        if (solution.keyPoints) {
            steps.push({
                stepNumber: steps.length + 1,
                step: 'Identify key points',
                description: 'Find important points for one period',
                keyPoints: solution.keyPoints,
                reasoning: 'These points help sketch an accurate graph',
                method: 'Divide one period into 4 equal parts'
            });
        }

        // Step 9: Sketch the graph
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Sketch the graph',
            description: 'Draw the complete function',
            instructions: [
                `Draw midline at ${solution.midline || 'y = 0'}`,
                `Mark amplitude ${solution.amplitude} above and below midline`,
                `Mark one period starting at x = ${solution.phaseShift || 0}`,
                'Plot the key points',
                'Draw smooth wave through points',
                'Extend pattern to additional periods'
            ],
            reasoning: 'Following these steps ensures an accurate graph',
            finalAnswer: true
        });

        return steps;
    }

    generateTangentSteps(problem, solution) {
        const steps = [];

        // Step 1: Identify equation
        steps.push({
            stepNumber: 1,
            step: 'Identify the tangent function',
            description: 'Given tangent function',
            expression: solution.equation,
            reasoning: 'Tangent has vertical asymptotes and period π (not 2π)',
            goalStatement: 'Analyze this tangent function and its transformations'
        });

        // Step 2: Calculate period
        steps.push({
            stepNumber: 2,
            step: 'Calculate period',
            description: 'Find the distance between consecutive asymptotes',
            formula: 'Period = π/|B| for tangent',
            calculation: `π/|${problem.parameters.B || 1}| = ${solution.period}`,
            result: `Period = ${solution.period}`,
            reasoning: 'Tangent has period π (half that of sine/cosine)',
            interpretation: `The pattern repeats every ${solution.period} units`
        });

        // Step 3: Find asymptotes
        if (solution.asymptotes) {
            steps.push({
                stepNumber: 3,
                step: 'Locate vertical asymptotes',
                description: 'Find where the function is undefined',
                formula: `x = ${solution.phaseShift} + π/(2|B|) + (π/|B|)n`,
                asymptotes: solution.asymptotes.map(a => a.x),
                reasoning: 'Tangent has asymptotes where cosine equals zero',
                interpretation: 'Graph approaches ±∞ near these x-values'
            });
        }

        // Step 4: Find x-intercepts
        steps.push({
            stepNumber: 4,
            step: 'Find x-intercepts',
            description: 'Locate where tangent crosses x-axis',
            pattern: 'Midway between asymptotes',
            reasoning: 'Tangent equals zero where sine equals zero (but cosine ≠ 0)',
            interpretation: 'These are the zeros of the function'
        });

        // Step 5: Identify transformations
        if (solution.transformations) {
            steps.push({
                stepNumber: 5,
                step: 'Identify transformations',
                description: 'Analyze all transformations',
                transformations: solution.transformations,
                reasoning: 'Transformations modify the basic tangent graph systematically'
            });
        }

        // Step 6: Sketch graph
        steps.push({
            stepNumber: 6,
            step: 'Sketch the graph',
            description: 'Draw tangent with all features',
            instructions: [
                'Draw vertical asymptotes as dashed lines',
                'Mark x-intercepts',
                'Plot additional points between asymptotes',
                'Draw S-shaped curves between asymptotes',
                'Graph goes from -∞ to +∞ in each period',
                'Repeat pattern for multiple periods'
            ],
            reasoning: 'Tangent increases on each interval between asymptotes',
            finalAnswer: true
        });

        return steps;
    }

    generateReciprocalSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify reciprocal function',
            description: `Given ${solution.function} function`,
            expression: solution.equation,
            relationship: solution.characteristics.relationship,
            reasoning: 'Reciprocal trig functions have U-shaped branches and asymptotes',
            goalStatement: 'Analyze this reciprocal function'
        });

        steps.push({
            stepNumber: 2,
            step: 'Locate vertical asymptotes',
            description: 'Find where parent function equals zero',
            asymptotes: solution.asymptotes,
            reasoning: `Asymptotes occur where ${solution.characteristics.relationship.split('of ')[1]} equals zero`,
            interpretation: 'Function is undefined at these x-values'
        });

        steps.push({
            stepNumber: 3,
            step: 'Identify local extrema',
            description: 'Find U-shaped branch minimums/maximums',
            location: solution.characteristics.localExtrema,
            reasoning: 'Reciprocal reaches extrema at parent function extrema',
            interpretation: 'These are the closest points to the x-axis'
        });

        steps.push({
            stepNumber: 4,
            step: 'Determine range',
            description: 'Find possible output values',
            range: solution.range,
            reasoning: 'Reciprocal functions never cross certain y-values',
            interpretation: 'There is a gap in the range around y = 0'
        });

        steps.push({
            stepNumber: 5,
            step: 'Sketch the graph',
            description: 'Draw U-shaped branches',
            instructions: [
                'Lightly sketch parent function as reference',
                'Draw vertical asymptotes',
                'Mark local extrema',
                'Draw U-shaped branches opening away from x-axis',
                'Branches approach asymptotes',
                'Check: large reciprocal where parent is small'
            ],
            finalAnswer: true
        });

        return steps;
    }

    generateInverseSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify inverse function',
            description: `Given ${solution.function} function`,
            expression: solution.equation,
            inverseOf: solution.characteristics.inverseOf,
            reasoning: 'Inverse trig functions return angle measures',
            goalStatement: 'Understand domain, range, and graph of this inverse function'
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify domain restriction',
            description: 'Find valid input values',
            domain: solution.domain,
            reasoning: 'Domain comes from range of parent function',
            interpretation: `Can only input values in ${solution.domain}`
        });

        steps.push({
            stepNumber: 3,
            step: 'Identify range restriction',
            description: 'Find possible output angles',
            range: solution.range,
            reasoning: 'Range is restricted to principal values',
            interpretation: `Output angles are in ${solution.range}`,
            note: 'This restriction ensures the inverse is a function'
        });

        if (solution.keyPoints) {
            steps.push({
                stepNumber: 4,
                step: 'Identify key points',
                description: 'Find important points on the graph',
                keyPoints: solution.keyPoints,
                reasoning: 'These points help sketch the inverse function',
                relationship: 'Points are (y, x) swaps of parent function key points'
            });
        }

        steps.push({
            stepNumber: 5,
            step: 'Sketch the graph',
            description: 'Draw the inverse function',
            instructions: [
                'Mark domain on x-axis',
                'Mark range on y-axis',
                'Plot key points',
                `Draw ${solution.characteristics.graphShape}`,
                'Graph is reflection of parent over y = x'
            ],
            finalAnswer: true
        });

        return steps;
    }

    generateAnalysisSteps(problem, solution) {
        const steps = [];

        if (solution.task) {
            steps.push({
                stepNumber: 1,
                step: solution.task,
                description: `Analyzing ${solution.task.toLowerCase()}`,
                givenInformation: solution.givenEquation || solution.givenCharacteristics,
                reasoning: 'Extract the requested information from the equation'
            });
        }

        if (solution.amplitude !== undefined) {
            steps.push({
                stepNumber: 2,
                step: 'Calculate amplitude',
                formula: solution.formula,
                calculation: solution.calculation,
                result: `Amplitude = ${solution.amplitude}`,
                reasoning: solution.explanation
            });
        }

        if (solution.period !== undefined) {
            steps.push({
                stepNumber: 2,
                step: 'Calculate period',
                formula: solution.formula,
                calculation: solution.calculation,
                result: `Period = ${solution.period}`,
                reasoning: solution.explanation
            });
        }

        if (solution.phaseShift !== undefined) {
            steps.push({
                stepNumber: 2,
                step: 'Find phase shift',
                mustFactor: solution.mustFactor,
                factoredForm: solution.factoredForm,
                result: `Phase shift = ${solution.phaseShift} ${solution.direction}`,
                reasoning: solution.explanation,
                note: solution.note
            });
        }

        if (solution.verticalShift !== undefined) {
            steps.push({
                stepNumber: 2,
                step: 'Find vertical shift',
                result: `Vertical shift = ${solution.verticalShift} ${solution.direction}`,
                midline: solution.midline,
                reasoning: solution.explanation
            });
        }

        if (solution.equation && solution.task === 'Write Equation from Graph') {
            steps.push({
                stepNumber: 2,
                step: 'Determine parameter A',
                description: 'Use amplitude',
                calculation: `A = ${solution.calculatedParameters.A}`,
                reasoning: 'A equals the amplitude'
            });

            steps.push({
                stepNumber: 3,
                step: 'Determine parameter B',
                description: 'Use period',
                formula: solution.functionType === 'tangent' ? 'B = π/period' : 'B = 2π/period',
                calculation: `B = ${solution.calculatedParameters.B}`,
                reasoning: 'B is found from the period'
            });

            steps.push({
                stepNumber: 4,
                step: 'Identify parameters C and D',
                description: 'Use shifts',
                C: solution.calculatedParameters.C,
                D: solution.calculatedParameters.D,
                reasoning: 'C is phase shift, D is vertical shift'
            });

            steps.push({
                stepNumber: 5,
                step: 'Write the equation',
                description: 'Combine all parameters',
                equation: solution.equation,
                form: 'y = A·f(B(x - C)) + D',
                finalAnswer: true
            });
        }

        return steps;
    }

    generateTransformationSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify all transformations',
            description: 'Analyze how the basic function is transformed',
            equation: solution.equation,
            parameters: solution.parameters,
            reasoning: 'Transformations are encoded in parameters A, B, C, D'
        });

        if (solution.transformations && solution.transformations.length > 0) {
            solution.transformations.forEach((trans, index) => {
                steps.push({
                    stepNumber: index + 2,
                    step: trans.type,
                    description: trans.description,
                    factor: trans.factor,
                    amount: trans.amount,
                    direction: trans.direction,
                    reasoning: `This transformation modifies the graph's ${trans.type.toLowerCase()}`
                });
            });
        }

        steps.push({
            stepNumber: steps.length + 1,
            step: 'Apply transformations in order',
            description: 'Transform the basic graph step by step',
            order: solution.transformationOrder,
            reasoning: 'Order matters: horizontal transformations before vertical',
            finalAnswer: true
        });

        return steps;
    }

    generateGenericTrigSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Analyze trigonometric graph',
            description: 'Analyze the given trigonometric function',
            solution: solution,
            reasoning: 'Apply appropriate trigonometric graph analysis technique'
        }];
    }

    // ENHANCED EXPLANATION METHODS (adapted for trig graphs)

    enhanceTrigStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getTrigConceptualExplanation(step, problem),
                procedural: this.getTrigProceduralExplanation(step),
                visual: this.getTrigVisualExplanation(step, problem),
                algebraic: this.getTrigAlgebraicExplanation(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyTrigPrerequisites(step, problem.type),
                keyVocabulary: this.identifyTrigVocabulary(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateTrigThinkingPrompts(step);
        }

        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateTrigSelfCheckQuestion(step);
        }

        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findTrigRealWorldConnection(step, problem);
        }

        return enhanced;
    }

    addTrigELI5Explanations(baseSteps, problem) {
        return baseSteps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateTrigELI5Explanation(step, problem),
                analogy: this.findTrigRelevantAnalogy(step, problem),
                simpleLanguage: this.convertToSimpleLanguage(step.description),
                visualization: this.suggestTrigVisualization(step)
            }
        }));
    }

    generateTrigELI5Explanation(step, problem) {
        const ELI5Explanations = {
            'Identify the equation': "We have a wave equation! It's like describing how a wave in the ocean looks.",
            'Calculate amplitude': "Amplitude is how tall the wave is. It's like measuring from the middle of the ocean to the top of the wave!",
            'Calculate period': "Period is how far you have to walk along the beach to see the wave pattern repeat!",
            'Identify phase shift': "Phase shift is like starting your walk at a different spot on the beach - the wave looks the same, just shifted over!",
            'Identify vertical shift': "Vertical shift is like if the whole ocean rises or falls - the waves stay the same shape, just higher or lower!",
            'Locate vertical asymptotes': "Asymptotes are like invisible walls the graph gets super close to but can never touch!",
            'Sketch the graph': "Now we draw the wave! We use all the clues we found to make it look just right!"
        };

        return ELI5Explanations[step.step] || "We're taking another step to understand this wave pattern!";
    }

    findTrigRelevantAnalogy(step, problem) {
        const category = this.trigGraphTypes[problem.type]?.category;
        
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(category) || analogy.suitableFor.includes('all_trig')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }

        return "Think of this like a repeating pattern, like ocean waves or a heartbeat!";
    }

    suggestTrigVisualization(step) {
        const visualizations = {
            'Calculate amplitude': 'Draw a horizontal line for the midline, then show the distance up to the top of the wave',
            'Calculate period': 'Mark one complete wave cycle and measure the distance from start to end',
            'Identify phase shift': 'Draw two waves: one normal, one shifted left or right',
            'Identify vertical shift': 'Draw the wave, then show it moving up or down',
            'Locate vertical asymptotes': 'Draw vertical dashed lines that the graph approaches',
            'Sketch the graph': 'Draw a smooth wave connecting all the key points'
        };

        return visualizations[step.step] || 'Draw a picture to show what this step does to the graph';
    }

    addTrigErrorPrevention(step, problemType) {
        const category = this.trigGraphTypes[problemType]?.category || 'sine';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generateTrigPreventionTips(step, problemType),
                checkPoints: this.generateTrigCheckPoints(step),
                warningFlags: this.identifyTrigWarningFlags(step, problemType)
            },
            validation: {
                selfCheck: this.generateTrigSelfCheckQuestion(step),
                expectedResult: this.describeTrigExpectedResult(step),
                troubleshooting: this.generateTroubleshootingTips(step)
            }
        };
    }

    addTrigScaffolding(baseSteps, problem) {
        return baseSteps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateTrigGuidingQuestions(step, problem),
                subSteps: this.breakTrigIntoSubSteps(step),
                hints: this.generateTrigProgressiveHints(step, problem),
                practiceVariation: this.generateTrigPracticeVariation(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainTrigThinkingProcess(step),
                decisionPoints: this.identifyTrigDecisionPoints(step),
                alternativeApproaches: this.suggestTrigAlternativeMethods(step, problem)
            }
        }));
    }

    // Helper methods for trig-specific explanations

    getTrigConceptualExplanation(step, problem) {
        const explanations = {
            'Calculate amplitude': 'Amplitude represents the maximum displacement from the equilibrium (midline) position',
            'Calculate period': 'Period is the horizontal distance required for the function to complete one full cycle',
            'Identify phase shift': 'Phase shift represents a horizontal translation of the entire graph',
            'Identify vertical shift': 'Vertical shift moves the midline up or down from y = 0',
            'Locate vertical asymptotes': 'Asymptotes occur where the function is undefined and values approach infinity'
        };

        return explanations[step.step] || 'This step helps us understand a key feature of the trigonometric graph';
    }

    getTrigProceduralExplanation(step) {
        const procedures = {
            'Calculate amplitude': '1. Identify coefficient A\n2. Take absolute value |A|\n3. This is the amplitude',
            'Calculate period': '1. Identify coefficient B\n2. Use formula: 2π/|B| (or π/|B| for tan)\n3. Simplify',
            'Identify phase shift': '1. Look inside parentheses\n2. Factor out B if needed\n3. Identify C from (x - C)'
        };

        return procedures[step.step] || 'Follow the standard procedure for this type of analysis';
    }

    getTrigVisualExplanation(step, problem) {
        const category = this.trigGraphTypes[problem.type]?.category;
        const visualizations = {
            'sine': 'Visualize a smooth wave starting at origin, going up then down',
            'cosine': 'Visualize a smooth wave starting at maximum, going down then up',
            'tangent': 'Visualize S-shaped curves between vertical asymptotes',
            'reciprocal': 'Visualize U-shaped branches between asymptotes',
            'inverse': 'Visualize the parent function reflected over the line y = x'
        };

        return visualizations[category] || 'Visualize the standard trigonometric graph with transformations';
    }

    getTrigAlgebraicExplanation(step) {
        const algebraic = {
            'Calculate amplitude': 'Amplitude = |A| where A is the coefficient of the trig function',
            'Calculate period': 'Period = (base period) / |B| where B is the coefficient of x',
            'Identify phase shift': 'Phase shift = C in the form f(B(x - C))',
            'Identify vertical shift': 'Vertical shift = D, the constant term added/subtracted'
        };

        return algebraic[step.step] || 'Apply standard trigonometric identities and formulas';
    }

    generateTrigPreventionTips(step, problemType) {
        const tips = {
            'Calculate amplitude': [
                'Remember: amplitude is ALWAYS positive (take absolute value)',
                'Don\'t confuse amplitude with vertical shift',
                'For reciprocal functions, there is no amplitude'
            ],
            'Calculate period': [
                'Check function type: sin/cos use 2π/|B|, tan/cot use π/|B|',
                'Don\'t forget absolute value of B',
                'Period must be positive'
            ],
            'Identify phase shift': [
                'Must factor out B first: Bx + C = B(x + C/B)',
                'Sign matters: (x - C) shifts RIGHT, (x + C) shifts LEFT',
                'Phase shift is C, not C/B unless already factored'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Check your arithmetic', 'Verify with graph'];
    }

    generateTrigCheckPoints(step) {
        return [
            'Did I use the correct formula for this function type?',
            'Did I take absolute values where needed?',
            'Does my answer make sense in context?',
            'Can I verify this with a graph or table?'
        ];
    }

    identifyTrigWarningFlags(step, problemType) {
        const warnings = {
            'Calculate period': ['Watch for tan/cot: they have period π, not 2π'],
            'Identify phase shift': ['Must factor out B before identifying C'],
            'Locate vertical asymptotes': ['Different for each function: check where parent = 0 or undefined']
        };

        return warnings[step.step] || [];
    }

    generateTrigSelfCheckQuestion(step) {
        const questions = {
            'Calculate amplitude': 'Did I take the absolute value of A?',
            'Calculate period': 'Did I use the correct period formula for this function type?',
            'Identify phase shift': 'Did I factor out B correctly before finding C?',
            'Identify vertical shift': 'Is D the constant term outside the trig function?',
            'Sketch the graph': 'Does my graph show all the key features I identified?'
        };

        return questions[step.step] || 'Does this step make sense and move me toward the solution?';
    }

    describeTrigExpectedResult(step) {
        const expectations = {
            'Calculate amplitude': 'A positive number representing wave height',
            'Calculate period': 'A positive number representing cycle length',
            'Identify phase shift': 'A number with direction (left/right)',
            'Identify vertical shift': 'A number with direction (up/down)',
            'Sketch the graph': 'A complete, accurate graph showing all transformations'
        };

        return expectations[step.step] || 'Progress toward understanding the trigonometric function';
    }

    generateTrigGuidingQuestions(step, problem) {
        const questions = {
            'Calculate amplitude': [
                'What coefficient is in front of the trig function?',
                'Is amplitude always positive?',
                'How do I find |A|?'
            ],
            'Calculate period': [
                'What type of trig function is this?',
                'What coefficient is multiplying x?',
                'What formula should I use for this function type?'
            ],
            'Identify phase shift': [
                'What is inside the parentheses with x?',
                'Do I need to factor anything out?',
                'Which direction does this shift the graph?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'How does this help analyze the graph?'];
    }

    breakTrigIntoSubSteps(step) {
        if (step.step === 'Calculate amplitude') {
            return [
                'Locate the coefficient A in front of the trig function',
                'Determine if A is positive or negative',
                'Calculate |A| (absolute value)',
                'This is the amplitude'
            ];
        } else if (step.step === 'Calculate period') {
            return [
                'Identify the function type (sin/cos or tan/cot)',
                'Find the coefficient B multiplying x',
                'Use the appropriate period formula',
                'Calculate the period'
            ];
        }

        return ['Understand the goal', 'Apply the technique', 'Verify the result'];
    }

    generateTrigProgressiveHints(step, problem) {
        const category = this.trigGraphTypes[problem.type]?.category || 'sine';
        const hintSet = this.hints[`find_${step.step.toLowerCase().replace(' ', '_')}`] || this.hints.graph_sine;

        return {
            level1: hintSet?.level1 || 'Think about what feature of the graph this step analyzes.',
            level2: hintSet?.level2 || 'Consider the formula or rule for this feature.',
            level3: hintSet?.level3 || 'Apply the formula with the given parameters.',
            level4: hintSet?.level4 || 'Calculate the final numerical answer.'
        };
    }

    generateTrigPracticeVariation(step, problem) {
        return {
            similarProblem: 'Try the same analysis with a different trigonometric function',
            practiceHint: 'Practice with sin, cos, and tan to see how they differ',
            extension: 'Try functions with multiple transformations'
        };
    }

    explainTrigThinkingProcess(step) {
        return {
            observe: 'What do I see in this equation or graph?',
            goal: 'What am I trying to find or understand?',
            strategy: 'What formula or method should I use?',
            execute: 'How do I perform this calculation correctly?',
            verify: 'Does my result make sense graphically?'
        };
    }

    identifyTrigDecisionPoints(step) {
        return [
            'Which formula applies to this function type?',
            'Do I need to factor anything first?',
            'What transformations are present?',
            'Should I verify with a graph?'
        ];
    }

    suggestTrigAlternativeMethods(step, problem) {
        const alternatives = {
            'Calculate period': [
                'Could count distance between repeated features on graph',
                'Could use the relationship frequency = 1/period'
            ],
            'Identify transformations': [
                'Could analyze algebraically using parameters',
                'Could compare graph to parent function visually'
            ]
        };

        return alternatives[step.step] || ['The chosen method is appropriate for this problem'];
    }

    identifyTrigPrerequisites(step, problemType) {
        const category = this.trigGraphTypes[problemType]?.category || 'sine';
        const prereqs = this.prerequisites[category];

        if (prereqs) {
            return prereqs.skills;
        }

        return ['Basic trigonometry', 'Unit circle', 'Function transformations'];
    }

    identifyTrigVocabulary(step) {
        const vocabulary = {
            'Calculate amplitude': ['amplitude', 'coefficient', 'absolute value', 'displacement'],
            'Calculate period': ['period', 'cycle', 'frequency', 'coefficient'],
            'Identify phase shift': ['phase shift', 'horizontal shift', 'translation'],
            'Identify vertical shift': ['vertical shift', 'midline', 'translation'],
            'Locate vertical asymptotes': ['asymptote', 'undefined', 'infinity', 'discontinuity']
        };

        return vocabulary[step.step] || [];
    }

    generateTrigThinkingPrompts(step) {
        return {
            before: 'Before I start, what information do I need from the equation?',
            during: 'As I work, am I using the correct formula for this function type?',
            after: 'After calculating, does this value make sense for the graph?'
        };
    }

    findTrigRealWorldConnection(step, problem) {
        const connections = {
            'amplitude': 'Like the volume of a sound wave or brightness of a light wave',
            'period': 'Like the time between heartbeats or the length of a day',
            'phase shift': 'Like time zones shifting when the sun rises in different locations',
            'vertical shift': 'Like average temperature being higher in summer',
            'sine/cosine': 'Models ocean tides, pendulum motion, alternating current'
        };

        for (const [key, value] of Object.entries(connections)) {
            if (step.step.toLowerCase().includes(key)) {
                return value;
            }
        }

        return 'Trigonometric functions model many natural phenomena and waves';
    }

    // GRAPH DATA GENERATION

    generateTrigGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const category = this.trigGraphTypes[this.currentProblem.type]?.category;

        if (category) {
            this.graphData = this.createTrigGraphData(this.currentProblem, this.currentSolution, category);
        }
    }

    createTrigGraphData(problem, solution, category) {
        const graphPoints = [];
        const numPoints = 100;
        let xMin, xMax;

        // Determine x-range based on function type
        if (category === 'inverse') {
            xMin = -1.5;
            xMax = 1.5;
        } else {
            const periods = category === 'tangent' || category === 'reciprocal' ? 2 : 2;
            const period = solution.period || 2 * Math.PI;
            xMin = (solution.phaseShift || 0) - period;
            xMax = (solution.phaseShift || 0) + period * periods;
        }

        // Generate points
        for (let i = 0; i <= numPoints; i++) {
            const x = xMin + (i / numPoints) * (xMax - xMin);
            let y = null;

            // Calculate y based on function type
            try {
                const { A = 1, B = 1, C = 0, D = 0 } = problem.parameters;
                const angle = B * (x - C);

                switch(category) {
                    case 'sine':
                        y = A * Math.sin(angle) + D;
                        break;
                    case 'cosine':
                        y = A * Math.cos(angle) + D;
                        break;
                    case 'tangent':
                        // Check for asymptotes
                        if (Math.abs(Math.cos(angle)) > 0.01) {
                            y = A * Math.tan(angle) + D;
                            // Limit y values for graphing
                            if (Math.abs(y) > 10) y = null;
                        }
                        break;
                    case 'inverse':
                        if (solution.function === 'arcsine' && Math.abs(x) <= 1) {
                            y = Math.asin(x);
                        } else if (solution.function === 'arccosine' && Math.abs(x) <= 1) {
                            y = Math.acos(x);
                        } else if (solution.function === 'arctangent') {
                            y = Math.atan(x);
                        }
                        break;
                }

                if (y !== null && !isNaN(y) && isFinite(y)) {
                    graphPoints.push({ x, y });
                }
            } catch (error) {
                // Skip points that cause errors
            }
        }

        return {
            category: category,
            function: solution.function,
            points: graphPoints,
            keyFeatures: {
                amplitude: solution.amplitude,
                period: solution.period,
                phaseShift: solution.phaseShift,
                verticalShift: solution.verticalShift,
                midline: solution.midline,
                domain: solution.domain,
                range: solution.range,
                keyPoints: solution.keyPoints,
                asymptotes: solution.asymptotes
            },
            xRange: [xMin, xMax],
            description: `Graph of ${solution.equation}`
        };
    }

    // WORKBOOK GENERATION

    generateTrigGraphWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createEnhancedStepsSection(),
            this.createTrigLessonSection(),
            this.createSolutionSection(),
            this.createGraphCharacteristicsSection(),
            this.createKeyPointsSection(),
            this.createTransformationAnalysisSection(),
            this.createRealWorldApplicationSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection(),
            this.createPracticeProblemsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Trigonometric Graphs Mathematical Workbook',
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
            ['Problem Type', this.trigGraphTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.trigGraphTypes[this.currentProblem.type]?.category || 'trigonometric'],
            ['Function', this.currentSolution?.function || 'trigonometric function'],
            ['Equation', this.currentSolution?.equation || this.currentProblem.cleanInput],
            ['Description', this.currentProblem.scenario || 'Trigonometric graph analysis']
        ];

        // Add parameters if available
        if (this.currentProblem.parameters.A !== undefined) {
            problemData.push(['', '']);
            problemData.push(['Parameters', '']);
            if (this.currentProblem.parameters.A !== undefined) {
                problemData.push(['A (amplitude coefficient)', this.currentProblem.parameters.A]);
            }
            if (this.currentProblem.parameters.B !== undefined) {
                problemData.push(['B (period coefficient)', this.currentProblem.parameters.B]);
            }
            if (this.currentProblem.parameters.C !== undefined) {
                problemData.push(['C (phase shift)', this.currentProblem.parameters.C]);
            }
            if (this.currentProblem.parameters.D !== undefined) {
                problemData.push(['D (vertical shift)', this.currentProblem.parameters.D]);
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

        const category = this.trigGraphTypes[this.currentProblem.type]?.category;
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
            // Skip bridge steps in basic display
            if (step.stepType === 'bridge' && this.explanationLevel === 'basic') {
                return;
            }

            // Main step
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

            if (step.formula) {
                stepsData.push(['Formula', step.formula]);
            }

            if (step.calculation) {
                stepsData.push(['Calculation', step.calculation]);
            }

            if (step.result) {
                stepsData.push(['Result', step.result]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.interpretation) {
                stepsData.push(['Interpretation', step.interpretation]);
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

            stepsData.push(['', '']); // Spacing
        });

        return {
            title: `Enhanced Step-by-Step Solution (${this.explanationLevel} level)`,
            type: 'steps',
            data: stepsData
        };
    }

    createTrigLessonSection() {
        const { type } = this.currentProblem;
        const category = this.trigGraphTypes[type]?.category;
        const lesson = this.lessons[category] || this.lessons.sine_graph;

        const lessonData = [
            ['Key Concepts', ''],
            ...lesson.concepts.map(c => ['', c]),
            ['', ''],
            ['Theory', lesson.theory],
            ['', ''],
            ['Key Formulas', '']
        ];

        for (const [name, formula] of Object.entries(lesson.keyFormulas || {})) {
            lessonData.push([name, formula]);
        }

        if (lesson.graphCharacteristics) {
            lessonData.push(['', '']);
            lessonData.push(['Graph Characteristics', '']);
            for (const [characteristic, value] of Object.entries(lesson.graphCharacteristics)) {
                lessonData.push([characteristic, value]);
            }
        }

        return {
            title: 'Key Concepts',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [
            ['Function Type', this.currentSolution.function],
            ['Equation', this.currentSolution.equation]
        ];

        if (this.currentSolution.amplitude !== undefined && this.currentSolution.amplitude !== 'N/A') {
            solutionData.push(['Amplitude', this.currentSolution.amplitude]);
        }

        if (this.currentSolution.period !== undefined) {
            solutionData.push(['Period', this.currentSolution.period]);
        }

        if (this.currentSolution.phaseShift !== undefined && this.currentSolution.phaseShift !== 0) {
            solutionData.push(['Phase Shift', `${this.currentSolution.phaseShift} ${this.currentSolution.phaseShiftDirection}`]);
        }

        if (this.currentSolution.verticalShift !== undefined && this.currentSolution.verticalShift !== 0) {
            solutionData.push(['Vertical Shift', `${this.currentSolution.verticalShift} ${this.currentSolution.verticalShiftDirection}`]);
        }

        if (this.currentSolution.midline) {
            solutionData.push(['Midline', this.currentSolution.midline]);
        }

        solutionData.push(['Domain', this.currentSolution.domain]);
        solutionData.push(['Range', this.currentSolution.range]);

        return {
            title: 'Solution Summary',
            type: 'solution',
            data: solutionData
        };
    }

    createGraphCharacteristicsSection() {
        if (!this.currentSolution || !this.currentSolution.characteristics) return null;

        const charData = [];

        for (const [characteristic, value] of Object.entries(this.currentSolution.characteristics)) {
            charData.push([characteristic, value]);
        }

        return {
            title: 'Graph Characteristics',
            type: 'characteristics',
            data: charData
        };
    }

    createKeyPointsSection() {
        if (!this.currentSolution || !this.currentSolution.keyPoints) return null;

        const pointsData = [
            ['Key Points for Graphing', ''],
            ['', '']
        ];

        this.currentSolution.keyPoints.forEach((point, index) => {
            pointsData.push([`Point ${index + 1}`, `(${point.x.toFixed(3)}, ${point.y.toFixed(3)}) - ${point.description}`]);
        });

        if (this.currentSolution.asymptotes && this.currentSolution.asymptotes.length > 0) {
            pointsData.push(['', '']);
            pointsData.push(['Vertical Asymptotes', '']);
            this.currentSolution.asymptotes.forEach((asym, index) => {
                pointsData.push([`Asymptote ${index + 1}`, `x = ${asym.x.toFixed(3)}`]);
            });
        }

        return {
            title: 'Key Points and Features',
            type: 'keypoints',
            data: pointsData
        };
    }

    createTransformationAnalysisSection() {
        if (!this.currentSolution || !this.currentSolution.transformations) return null;

        const transData = [
            ['Transformations Applied', ''],
            ['', '']
        ];

        for (const [transType, transValue] of Object.entries(this.currentSolution.transformations)) {
            transData.push([transType, transValue]);
        }

        return {
            title: 'Transformation Analysis',
            type: 'transformations',
            data: transData
        };
    }

    createRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const category = this.trigGraphTypes[this.currentProblem.type]?.category;
        const applications = Object.values(this.realWorldProblems).filter(app => {
            // Match applications to function type
            return true; // Show all for now
        }).slice(0, 3);

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

        const notes = this.generateTrigPedagogicalNotes(this.currentProblem.type);

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

        const alternatives = this.generateTrigAlternativeMethods(this.currentProblem.type);

        return {
            title: 'Alternative Analysis Methods',
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
        const category = this.trigGraphTypes[this.currentProblem.type]?.category;
        const problems = this.questionBank.byDifficulty;

        const practiceData = [
            ['Practice Problems', ''],
            ['', ''],
            ['Easy Problems', '']
        ];

        problems.easy.slice(0, 2).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Medium Problems', '']);

        problems.medium.slice(0, 2).forEach((p, i) => {
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

    generateTrigPedagogicalNotes(problemType) {
        const category = this.trigGraphTypes[problemType]?.category;

        const pedagogicalDatabase = {
            sine: {
                objectives: [
                    'Graph sine functions with transformations',
                    'Identify amplitude, period, phase shift, vertical shift',
                    'Connect sine graphs to real-world periodic phenomena'
                ],
                keyConcepts: [
                    'Sine wave starts at origin and goes up first',
                    'Amplitude is height from midline',
                    'Period is length of one complete cycle',
                    'Transformations follow order: horizontal then vertical'
                ],
                prerequisites: [
                    'Unit circle values',
                    'Radian measure',
                    'Function transformations',
                    'Concept of periodic functions'
                ],
                commonDifficulties: [
                    'Confusing amplitude with vertical shift',
                    'Wrong period formula (using π instead of 2π)',
                    'Phase shift direction confusion',
                    'Not factoring B before finding phase shift'
                ],
                teachingStrategies: [
                    'Use wave analogies (ocean, sound)',
                    'Graph parent function first, then apply transformations',
                    'Use technology to visualize transformations dynamically',
                    'Connect to real-world periodic phenomena'
                ],
                extensions: [
                    'Combinations of sine and cosine',
                    'Solving trigonometric equations',
                    'Modeling real data with sine functions',
                    'Fourier series introduction'
                ],
                assessment: [
                    'Can student identify all four parameters A, B, C, D?',
                    'Can student graph accurately from equation?',
                    'Can student write equation from graph?',
                    'Can student explain transformations conceptually?'
                ]
            },
            tangent: {
                objectives: [
                    'Graph tangent functions with asymptotes',
                    'Identify period and phase shift',
                    'Understand why tangent has different period than sine/cosine'
                ],
                keyConcepts: [
                    'Tangent = sin/cos, undefined where cos = 0',
                    'Period is π, not 2π',
                    'Has vertical asymptotes',
                    'Range is all real numbers'
                ],
                prerequisites: [
                    'Sine and cosine graphs',
                    'Concept of undefined values',
                    'Asymptotic behavior',
                    'Ratio definition of tangent'
                ],
                commonDifficulties: [
                    'Using 2π/B instead of π/B for period',
                    'Incorrectly placing asymptotes',
                    'Confusion about where tan crosses x-axis',
                    'Not recognizing increasing behavior'
                ],
                teachingStrategies: [
                    'Build from sin/cos ratio',
                    'Use unit circle to show asymptotes',
                    'Emphasize period difference',
                    'Graph multiple periods to show pattern'
                ],
                extensions: [
                    'Cotangent function',
                    'Solving tangent equations',
                    'Applications in angle of elevation',
                    'Inverse tangent function'
                ],
                assessment: [
                    'Can student locate asymptotes correctly?',
                    'Does student use correct period formula?',
                    'Can student sketch tangent without calculator?'
                ]
            },
            inverse: {
                objectives: [
                    'Understand inverse trig function restrictions',
                    'Graph inverse trig functions',
                    'Apply inverse trig to find angles'
                ],
                keyConcepts: [
                    'Inverse undoes the trig function',
                    'Domain and range are swapped',
                    'Must restrict to principal values',
                    'Output is an angle measure'
                ],
                prerequisites: [
                    'Inverse function concept',
                    'Trig functions and unit circle',
                    'Domain and range',
                    'Function composition'
                ],
                commonDifficulties: [
                    'Confusing restricted domains/ranges',
                    'Mixing up arcsin and arccos ranges',
                    'Not recognizing principal value restrictions',
                    'Confusion about why restrictions are needed'
                ],
                teachingStrategies: [
                    'Start with inverse function concept',
                    'Show horizontal line test necessity',
                    'Use unit circle to motivate restrictions',
                    'Practice with compositions like sin(arcsin(x))'
                ],
                extensions: [
                    'Solving equations with inverse trig',
                    'Derivatives of inverse trig',
                    'Applications in triangle solving',
                    'Complex compositions'
                ],
                assessment: [
                    'Can student state correct domain/range?',
                    'Can student evaluate without calculator?',
                    'Does student understand why restrictions exist?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Analyze trigonometric graphs'],
            keyConcepts: ['Periodic functions', 'Transformations'],
            prerequisites: ['Basic trigonometry'],
            commonDifficulties: ['Various graphing challenges'],
            teachingStrategies: ['Step-by-step instruction'],
            extensions: ['More complex functions'],
            assessment: ['Verify understanding of concepts']
        };
    }

    generateTrigAlternativeMethods(problemType) {
        const category = this.trigGraphTypes[problemType]?.category;

        const alternativeDatabase = {
            sine: {
                primaryMethod: 'Transformation approach using A, B, C, D',
                methods: [
                    {
                        name: 'Key points method',
                        description: 'Plot 5 key points per period (start, max, mid, min, end) and connect smoothly'
                    },
                    {
                        name: 'Unit circle projection',
                        description: 'Track y-coordinate of point rotating on unit circle'
                    },
                    {
                        name: 'Technology-assisted',
                        description: 'Use graphing calculator or software to visualize, then verify key features'
                    }
                ],
                comparison: 'Transformation approach most systematic; key points faster for simple cases; unit circle best for understanding'
            },
            tangent: {
                primaryMethod: 'Asymptotes and key points',
                methods: [
                    {
                        name: 'Sin/Cos ratio method',
                        description: 'Graph sin and cos separately, then divide values to get tangent'
                    },
                    {
                        name: 'Pattern recognition',
                        description: 'Recognize S-curve pattern and period, then apply transformations'
                    },
                    {
                        name: 'Table of values',
                        description: 'Calculate specific values and plot, avoiding asymptotes'
                    }
                ],
                comparison: 'Asymptote method most reliable; ratio method builds understanding; table method good for verification'
            },
            inverse: {
                primaryMethod: 'Reflection over y = x from parent',
                methods: [
                    {
                        name: 'Direct plotting',
                        description: 'Use restricted trig function, swap x and y coordinates'
                    },
                    {
                        name: 'Unit circle approach',
                        description: 'For given ratio, find angle on appropriate quadrant'
                    },
                    {
                        name: 'Calculator verification',
                        description: 'Plot points using inverse trig calculator functions'
                    }
                ],
                comparison: 'Reflection method shows relationship; direct plotting most accurate; unit circle builds intuition'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard trigonometric graphing approach',
            methods: [{
                name: 'Alternative approach',
                description: 'Other methods may apply depending on specific function'
            }],
            comparison: 'Choose method based on function type and context'
        };
    }

    // Helper method implementations from earlier (shared between linear and trig)
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

    generateStepBridge(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.result || currentStep.expression || 'completed this step'}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary to continue our analysis`,
            howItHelps: `This will help by revealing another key feature of the function`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to build a complete understanding`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by adding more detail to our analysis`,
            progression: 'We are systematically uncovering all features of the function',
            relationship: 'Each step reveals a different aspect of the graph'
        };
    }

    convertToSimpleLanguage(description) {
        if (!description) return '';

        const simplifications = {
            'amplitude': 'wave height',
            'period': 'how far until it repeats',
            'phase shift': 'sliding left or right',
            'vertical shift': 'moving up or down',
            'asymptote': 'invisible barrier',
            'coefficient': 'number multiplying',
            'midline': 'middle horizontal line',
            'transformation': 'change to the graph',
            'reciprocal': 'flip the function',
            'inverse': 'undo the function'
        };

        let simple = description;
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp(term, 'gi');
            simple = simple.replace(regex, replacement);
        }

        return simple;
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

        // Use the convertToSimpleLanguage method for basic adaptations
        if (level.vocabulary === 'simple, everyday language' || level.vocabulary === 'explain like I\'m 5 - simplest possible terms') {
            return this.convertToSimpleLanguage(text);
        }

        return text; // Keep original for intermediate/detailed
    }

    generateTroubleshootingTips(step) {
        return [
            'If stuck, review the prerequisite concepts',
            'Check that you\'re using the correct formula',
            'Verify your arithmetic carefully',
            'Try sketching a rough graph to visualize',
            'Compare with a known example'
        ];
    }
}

// Export the class
export default EnhancedTrigonometricGraphsWorkbook;
