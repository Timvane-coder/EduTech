// Enhanced Function Transformations Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedFunctionTransformationsWorkbook {
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
        this.initializeFunctionTransformationSolvers();
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
        this.initializeFunctionTransformationLessons();
    }

    initializeFunctionTransformationLessons() {
        this.lessons = {
            vertical_shifts: {
                title: "Vertical Shifts",
                concepts: [
                    "Form: f(x) + k where k is a constant",
                    "Adds k to every y-value",
                    "k > 0: shift up by k units",
                    "k < 0: shift down by |k| units",
                    "Does not change shape or orientation"
                ],
                theory: "Vertical shifts move the entire graph up or down without changing its shape. This is achieved by adding a constant to the function's output.",
                keyFormulas: {
                    "Vertical Shift Up": "g(x) = f(x) + k (k > 0)",
                    "Vertical Shift Down": "g(x) = f(x) - k (k > 0)",
                    "General Form": "g(x) = f(x) + k"
                },
                graphicalEffect: {
                    "Point Transformation": "(x, y) → (x, y + k)",
                    "Key Points": "Add k to all y-coordinates",
                    "Asymptotes": "Horizontal asymptotes shift by k units",
                    "Intercepts": "y-intercept changes, x-intercepts may change"
                },
                identifyingFeatures: [
                    "Addition/subtraction outside the function",
                    "Affects output values",
                    "Changes vertical position only"
                ],
                applications: [
                    "Temperature adjustments",
                    "Cost markups/markdowns",
                    "Sea level changes",
                    "Baseline shifts in data"
                ]
            },

            horizontal_shifts: {
                title: "Horizontal Shifts",
                concepts: [
                    "Form: f(x - h) where h is a constant",
                    "Shifts graph left or right",
                    "h > 0: shift right by h units",
                    "h < 0: shift left by |h| units",
                    "OPPOSITE of what you might expect!"
                ],
                theory: "Horizontal shifts move the graph left or right. The direction is opposite to the sign inside the parentheses: f(x - 3) shifts RIGHT 3 units.",
                keyFormulas: {
                    "Horizontal Shift Right": "g(x) = f(x - h) (h > 0)",
                    "Horizontal Shift Left": "g(x) = f(x + h) (h > 0)",
                    "General Form": "g(x) = f(x - h)"
                },
                graphicalEffect: {
                    "Point Transformation": "(x, y) → (x + h, y)",
                    "Key Points": "Add h to all x-coordinates",
                    "Asymptotes": "Vertical asymptotes shift by h units",
                    "Intercepts": "x-intercept changes, y-intercept may change"
                },
                identifyingFeatures: [
                    "Addition/subtraction inside the function argument",
                    "Affects input values",
                    "Changes horizontal position only"
                ],
                commonMistakes: [
                    "Confusing direction (f(x-3) shifts RIGHT, not left)",
                    "Applying to y-values instead of x-values",
                    "Forgetting to account for existing operations"
                ],
                applications: [
                    "Time delays in signals",
                    "Phase shifts in waves",
                    "Temporal offsets in data",
                    "Starting point adjustments"
                ]
            },

            vertical_stretches_compressions: {
                title: "Vertical Stretches and Compressions",
                concepts: [
                    "Form: a·f(x) where a is a constant, a ≠ 0",
                    "|a| > 1: vertical stretch (taller, narrower appearance)",
                    "0 < |a| < 1: vertical compression (shorter, wider appearance)",
                    "Multiplies all y-values by a",
                    "Does not change x-coordinates"
                ],
                theory: "Vertical stretches and compressions scale the function's output by a factor. They change how 'tall' or 'short' the graph appears.",
                keyFormulas: {
                    "Vertical Stretch": "g(x) = a·f(x) where |a| > 1",
                    "Vertical Compression": "g(x) = a·f(x) where 0 < |a| < 1",
                    "General Form": "g(x) = a·f(x)"
                },
                graphicalEffect: {
                    "Point Transformation": "(x, y) → (x, a·y)",
                    "Key Points": "Multiply all y-coordinates by a",
                    "Asymptotes": "Horizontal asymptotes may change or disappear",
                    "Maximum/Minimum": "Scaled by factor a"
                },
                identifyingFeatures: [
                    "Multiplication outside the function",
                    "Coefficient multiplying entire function",
                    "Changes vertical scale"
                ],
                specialCases: {
                    "a = 1": "No change (identity)",
                    "a = -1": "Reflection over x-axis only",
                    "a = 0": "Collapses to y = 0 (horizontal line)"
                },
                applications: [
                    "Amplitude changes in waves",
                    "Scaling measurements",
                    "Intensity adjustments",
                    "Volume/loudness modifications"
                ]
            },

            horizontal_stretches_compressions: {
                title: "Horizontal Stretches and Compressions",
                concepts: [
                    "Form: f(b·x) where b is a constant, b ≠ 0",
                    "|b| > 1: horizontal compression (thinner)",
                    "0 < |b| < 1: horizontal stretch (wider)",
                    "Divides all x-values by b",
                    "OPPOSITE effect to vertical stretches!"
                ],
                theory: "Horizontal stretches and compressions scale the function's input. They change how 'wide' or 'narrow' the graph appears. The effect is inverse: larger b compresses the graph.",
                keyFormulas: {
                    "Horizontal Compression": "g(x) = f(b·x) where |b| > 1",
                    "Horizontal Stretch": "g(x) = f(b·x) where 0 < |b| < 1",
                    "General Form": "g(x) = f(b·x)",
                    "Alternative Form": "g(x) = f(x/c) where c = 1/b"
                },
                graphicalEffect: {
                    "Point Transformation": "(x, y) → (x/b, y)",
                    "Key Points": "Divide all x-coordinates by b",
                    "Asymptotes": "Vertical asymptotes move closer (b>1) or farther (b<1)",
                    "Period": "For periodic functions, period becomes T/b"
                },
                identifyingFeatures: [
                    "Multiplication inside the function argument",
                    "Coefficient multiplying the variable",
                    "Changes horizontal scale"
                ],
                commonMistakes: [
                    "Confusing with vertical stretches",
                    "Forgetting the inverse relationship",
                    "Multiplying instead of dividing x-coordinates"
                ],
                applications: [
                    "Time compression in audio/video",
                    "Frequency changes",
                    "Rate adjustments",
                    "Spatial scaling"
                ]
            },

            reflections: {
                title: "Reflections",
                concepts: [
                    "Reflection over x-axis: -f(x)",
                    "Reflection over y-axis: f(-x)",
                    "Flips graph across specified axis",
                    "Preserves shape and size",
                    "Can combine with other transformations"
                ],
                theory: "Reflections flip the graph across an axis. They create mirror images while preserving distances and angles.",
                keyFormulas: {
                    "Reflection over x-axis": "g(x) = -f(x)",
                    "Reflection over y-axis": "g(x) = f(-x)",
                    "Reflection over both axes": "g(x) = -f(-x)",
                    "Reflection over y=x": "Swap x and y (inverse function)"
                },
                graphicalEffect: {
                    "Over x-axis": "(x, y) → (x, -y)",
                    "Over y-axis": "(x, y) → (-x, y)",
                    "Over both": "(x, y) → (-x, -y)",
                    "Over origin": "180° rotation"
                },
                identifyingFeatures: [
                    "Negative sign outside function (x-axis reflection)",
                    "Negative sign on variable (y-axis reflection)",
                    "Changes orientation"
                ],
                applications: [
                    "Mirror images",
                    "Opposite relationships",
                    "Inverse operations",
                    "Symmetry analysis"
                ]
            },

            combined_transformations: {
                title: "Combined Transformations",
                concepts: [
                    "Multiple transformations applied together",
                    "Order matters for correctness",
                    "General form: a·f(b(x - h)) + k",
                    "Standard order: horizontal shift, stretch/compress, vertical stretch/compress, vertical shift",
                    "Can include reflections at appropriate steps"
                ],
                theory: "Combined transformations apply multiple changes to a function. Understanding the order of operations is crucial for correct application.",
                keyFormulas: {
                    "General Combined Form": "g(x) = a·f(b(x - h)) + k",
                    "Full Transformation": "Includes all types of transformations",
                    "Parameter Meanings": "a = vertical scale, b = horizontal scale, h = horizontal shift, k = vertical shift"
                },
                orderOfOperations: [
                    "1. Horizontal shifts (inside parentheses with x)",
                    "2. Horizontal stretches/compressions (multiply x)",
                    "3. Reflections (negative signs)",
                    "4. Vertical stretches/compressions (multiply function)",
                    "5. Vertical shifts (add/subtract outside)"
                ],
                graphicalEffect: {
                    "Point Transformation": "(x, y) → ((x - h)/b · a, a·y + k)",
                    "Full Effect": "Combination of all individual transformations",
                    "Complex Changes": "Shape, position, size, orientation all affected"
                },
                identifyingFeatures: [
                    "Multiple parameters in function",
                    "Both inside and outside modifications",
                    "Requires careful step-by-step analysis"
                ],
                strategiesForSolving: [
                    "Work inside-out for function evaluation",
                    "Work outside-in for graphing transformations",
                    "Track one transformation at a time",
                    "Verify with key points"
                ],
                applications: [
                    "Complete signal processing",
                    "Complex physical models",
                    "Advanced data transformations",
                    "General function modifications"
                ]
            },

            absolute_value_transformations: {
                title: "Absolute Value Function Transformations",
                concepts: [
                    "Parent function: f(x) = |x| (V-shaped graph)",
                    "Vertex at origin for parent function",
                    "Transformations follow same rules as other functions",
                    "Vertex location: (h, k) for |x - h| + k"
                ],
                theory: "The absolute value function creates a distinctive V-shape. Transformations shift, stretch, compress, and reflect this V-shape.",
                keyFormulas: {
                    "Parent Function": "f(x) = |x|",
                    "General Form": "g(x) = a|b(x - h)| + k",
                    "Vertex Form": "Vertex at (h, k)"
                },
                graphicalEffect: {
                    "Vertex Movement": "Horizontal and vertical shifts move vertex",
                    "Slope Changes": "a and b affect steepness of V",
                    "Reflection": "Negative a creates ∧ shape instead of V"
                },
                applications: [
                    "Distance calculations",
                    "Error measurement",
                    "Optimization problems",
                    "Piecewise scenarios"
                ]
            },

            quadratic_transformations: {
                title: "Quadratic Function Transformations",
                concepts: [
                    "Parent function: f(x) = x² (parabola)",
                    "Vertex at origin for parent function",
                    "Transformations affect vertex location and width",
                    "Vertex form: a(x - h)² + k"
                ],
                theory: "Quadratic functions form parabolas. Transformations change the location, width, and orientation of these parabolas.",
                keyFormulas: {
                    "Parent Function": "f(x) = x²",
                    "Vertex Form": "g(x) = a(x - h)² + k",
                    "Standard Form": "g(x) = ax² + bx + c",
                    "Vertex Location": "(h, k)"
                },
                graphicalEffect: {
                    "Vertex Movement": "(0,0) → (h, k)",
                    "Width Change": "a affects how wide/narrow parabola is",
                    "Direction": "a > 0 opens up, a < 0 opens down"
                },
                relationshipToStandardForm: {
                    "h = -b/(2a)": "Horizontal shift from standard form",
                    "k = f(h)": "Vertical shift is function value at vertex"
                },
                applications: [
                    "Projectile motion",
                    "Optimization problems",
                    "Area/perimeter relationships",
                    "Revenue/profit models"
                ]
            },

            exponential_transformations: {
                title: "Exponential Function Transformations",
                concepts: [
                    "Parent functions: f(x) = aˣ or f(x) = eˣ",
                    "Horizontal asymptote at y = 0 for parent",
                    "Transformations shift asymptote vertically",
                    "Growth (a > 1) or decay (0 < a < 1)"
                ],
                theory: "Exponential functions model growth and decay. Transformations adjust rate, starting point, and long-term behavior.",
                keyFormulas: {
                    "Parent Function": "f(x) = aˣ or f(x) = eˣ",
                    "General Form": "g(x) = c·aᵇ⁽ˣ⁻ʰ⁾ + k",
                    "Natural Exponential": "g(x) = c·eᵇ⁽ˣ⁻ʰ⁾ + k"
                },
                graphicalEffect: {
                    "Asymptote": "y = k (shifted from y = 0)",
                    "Initial Value": "When x = h, g(h) = c + k",
                    "Growth Rate": "b affects steepness"
                },
                applications: [
                    "Population growth",
                    "Radioactive decay",
                    "Compound interest",
                    "Cooling/heating models"
                ]
            },

            logarithmic_transformations: {
                title: "Logarithmic Function Transformations",
                concepts: [
                    "Parent functions: f(x) = log(x) or f(x) = ln(x)",
                    "Vertical asymptote at x = 0 for parent",
                    "Transformations shift asymptote horizontally",
                    "Inverse of exponential functions"
                ],
                theory: "Logarithmic functions are inverses of exponential functions. Transformations adjust the asymptote location and growth rate.",
                keyFormulas: {
                    "Parent Function": "f(x) = log(x) or f(x) = ln(x)",
                    "General Form": "g(x) = a·log(b(x - h)) + k",
                    "Natural Log": "g(x) = a·ln(b(x - h)) + k"
                },
                graphicalEffect: {
                    "Asymptote": "x = h (shifted from x = 0)",
                    "Domain": "x > h",
                    "Steepness": "a and b affect rate of increase"
                },
                applications: [
                    "pH calculations",
                    "Richter scale",
                    "Decibel measurements",
                    "Order of magnitude comparisons"
                ]
            },

            trigonometric_transformations: {
                title: "Trigonometric Function Transformations",
                concepts: [
                    "Parent functions: sin(x), cos(x), tan(x)",
                    "Amplitude: |a| in a·sin(x)",
                    "Period: 2π/b in sin(bx)",
                    "Phase shift: h in sin(b(x - h))",
                    "Vertical shift: k in sin(x) + k"
                ],
                theory: "Trigonometric transformations modify periodic functions. They adjust amplitude, period, phase, and midline.",
                keyFormulas: {
                    "General Sine/Cosine": "g(x) = a·sin(b(x - h)) + k",
                    "Amplitude": "|a|",
                    "Period": "2π/|b|",
                    "Phase Shift": "h",
                    "Vertical Shift/Midline": "k"
                },
                graphicalEffect: {
                    "Amplitude": "Height from midline to max/min",
                    "Period": "Horizontal length of one complete cycle",
                    "Phase Shift": "Horizontal shift of entire wave",
                    "Midline": "Center line at y = k"
                },
                applications: [
                    "Sound waves",
                    "Light waves",
                    "Seasonal patterns",
                    "Harmonic motion"
                ]
            },

            rational_function_transformations: {
                title: "Rational Function Transformations",
                concepts: [
                    "Parent function: f(x) = 1/x (reciprocal)",
                    "Vertical asymptote at x = 0, horizontal at y = 0 for parent",
                    "Transformations shift both asymptotes",
                    "Form: a/(b(x-h)) + k"
                ],
                theory: "Rational functions have asymptotes that guide their behavior. Transformations relocate these asymptotes and adjust the function's shape.",
                keyFormulas: {
                    "Parent Function": "f(x) = 1/x",
                    "General Form": "g(x) = a/(b(x - h)) + k",
                    "Vertical Asymptote": "x = h",
                    "Horizontal Asymptote": "y = k"
                },
                graphicalEffect: {
                    "Asymptotes": "Both move with transformations",
                    "Branches": "Shape preserved, location changes",
                    "Orientation": "Negative a flips branches"
                },
                applications: [
                    "Inverse relationships",
                    "Dilution problems",
                    "Electrical resistance",
                    "Gravitational/electromagnetic forces"
                ]
            },

            piecewise_transformations: {
                title: "Piecewise Function Transformations",
                concepts: [
                    "Apply transformations to each piece separately",
                    "Boundary points transform according to x-transformations",
                    "Vertical transformations affect all pieces uniformly",
                    "Horizontal transformations shift boundary points"
                ],
                theory: "Piecewise functions require applying transformations to each piece while tracking how boundaries change.",
                keyFormulas: {
                    "Original Piecewise": "f(x) = {piece₁ if condition₁, piece₂ if condition₂, ...}",
                    "Transformed": "g(x) = a·f(b(x-h)) + k applied to each piece",
                    "Boundary Transformation": "Boundaries shift by h and scale by 1/b"
                },
                strategiesForSolving: [
                    "Transform each piece as a separate function",
                    "Adjust boundary conditions for horizontal changes",
                    "Verify continuity if needed",
                    "Check that domains don't overlap incorrectly"
                ],
                applications: [
                    "Tax brackets",
                    "Shipping rates",
                    "Conditional scenarios",
                    "Multi-stage processes"
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
                transformationBg: '#e6f3ff'
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
                transformationBg: '#d1ecf1'
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
            // Function notation
            'rightarrow': '→', 'mapsto': '↦', 'composition': '∘'
        };
    }

    initializeFunctionTransformationSolvers() {
        this.transformationTypes = {
            vertical_shift: {
                patterns: [
                    /f\(x\)\s*\+\s*([+-]?\d+\.?\d*)/,
                    /f\(x\)\s*-\s*(\d+\.?\d*)/,
                    /vertical.*shift/i,
                    /shift.*up|shift.*down/i
                ],
                solver: this.solveVerticalShift.bind(this),
                name: 'Vertical Shift',
                category: 'vertical_shifts',
                description: 'Shifts graph up or down by adding/subtracting constant to output'
            },

            horizontal_shift: {
                patterns: [
                    /f\(x\s*-\s*([+-]?\d+\.?\d*)\)/,
                    /f\(x\s*\+\s*(\d+\.?\d*)\)/,
                    /horizontal.*shift/i,
                    /shift.*left|shift.*right/i
                ],
                solver: this.solveHorizontalShift.bind(this),
                name: 'Horizontal Shift',
                category: 'horizontal_shifts',
                description: 'Shifts graph left or right by modifying input'
            },

            vertical_stretch: {
                patterns: [
                    /([+-]?\d+\.?\d*)\s*\*\s*f\(x\)/,
                    /([+-]?\d+\.?\d*)f\(x\)/,
                    /vertical.*stretch|vertical.*compression/i,
                    /stretch.*vertically|compress.*vertically/i
                ],
                solver: this.solveVerticalStretch.bind(this),
                name: 'Vertical Stretch/Compression',
                category: 'vertical_stretches_compressions',
                description: 'Stretches or compresses graph vertically by multiplying output'
            },

            horizontal_stretch: {
                patterns: [
                    /f\(([+-]?\d+\.?\d*)\s*\*\s*x\)/,
                    /f\(([+-]?\d+\.?\d*)x\)/,
                    /horizontal.*stretch|horizontal.*compression/i,
                    /stretch.*horizontally|compress.*horizontally/i
                ],
                solver: this.solveHorizontalStretch.bind(this),
                name: 'Horizontal Stretch/Compression',
                category: 'horizontal_stretches_compressions',
                description: 'Stretches or compresses graph horizontally by multiplying input'
            },

            reflection_x: {
                patterns: [
                    /-\s*f\(x\)/,
                    /reflect.*x-axis|reflection.*x-axis/i,
                    /flip.*horizontally/i
                ],
                solver: this.solveReflectionX.bind(this),
                name: 'Reflection over x-axis',
                category: 'reflections',
                description: 'Flips graph over x-axis by negating output'
            },

            reflection_y: {
                patterns: [
                    /f\(-\s*x\)/,
                    /reflect.*y-axis|reflection.*y-axis/i,
                    /flip.*vertically/i
                ],
                solver: this.solveReflectionY.bind(this),
                name: 'Reflection over y-axis',
                category: 'reflections',
                description: 'Flips graph over y-axis by negating input'
            },

            combined_transformation: {
                patterns: [
                    /([+-]?\d+\.?\d*)\s*\*\s*f\(([+-]?\d+\.?\d*)\s*\*\s*\(x\s*[+-]\s*\d+\.?\d*\)\)\s*[+-]\s*\d+\.?\d*/,
                    /combined|multiple.*transformation/i,
                    /a.*f.*b.*x.*h.*k/i
                ],
                solver: this.solveCombinedTransformation.bind(this),
                name: 'Combined Transformations',
                category: 'combined_transformations',
                description: 'Multiple transformations applied together: a·f(b(x-h)) + k'
            },

            absolute_value_transformation: {
                patterns: [
                    /\|.*\|/,
                    /abs\(/i,
                    /absolute.*value/i
                ],
                solver: this.solveAbsoluteValueTransformation.bind(this),
                name: 'Absolute Value Transformation',
                category: 'absolute_value_transformations',
                description: 'Transformations of |x| function'
            },

            quadratic_transformation: {
                patterns: [
                    /x\^2|x²/,
                    /quadratic/i,
                    /parabola/i
                ],
                solver: this.solveQuadraticTransformation.bind(this),
                name: 'Quadratic Transformation',
                category: 'quadratic_transformations',
                description: 'Transformations of x² function'
            },

            exponential_transformation: {
                patterns: [
                    /\^x|e\^|exp\(/i,
                    /exponential/i
                ],
                solver: this.solveExponentialTransformation.bind(this),
                name: 'Exponential Transformation',
                category: 'exponential_transformations',
                description: 'Transformations of exponential functions'
            },

            logarithmic_transformation: {
                patterns: [
                    /log\(|ln\(/i,
                    /logarithm/i
                ],
                solver: this.solveLogarithmicTransformation.bind(this),
                name: 'Logarithmic Transformation',
                category: 'logarithmic_transformations',
                description: 'Transformations of logarithmic functions'
            },

            trigonometric_transformation: {
                patterns: [
                    /sin\(|cos\(|tan\(/i,
                    /trigonometric|trig/i,
                    /amplitude|period|phase/i
                ],
                solver: this.solveTrigonometricTransformation.bind(this),
                name: 'Trigonometric Transformation',
                category: 'trigonometric_transformations',
                description: 'Transformations of sine, cosine, tangent functions'
            },

            rational_transformation: {
                patterns: [
                    /1\/x|reciprocal/i,
                    /rational.*function/i
                ],
                solver: this.solveRationalTransformation.bind(this),
                name: 'Rational Function Transformation',
                category: 'rational_function_transformations',
                description: 'Transformations of 1/x and other rational functions'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            vertical_shifts: {
                'Adding constant to output': [
                    'Confusing with horizontal shift',
                    'Forgetting to apply to all y-values',
                    'Sign errors when adding negative values'
                ],
                'Graphing transformed function': [
                    'Moving in wrong direction',
                    'Only shifting some points',
                    'Forgetting to shift asymptotes'
                ]
            },
            horizontal_shifts: {
                'Determining direction': [
                    'f(x-3) shifts RIGHT, not left (common confusion!)',
                    'Forgetting the "opposite" rule',
                    'Applying shift to y-values instead of x-values'
                ],
                'Transforming points': [
                    'Adding instead of subtracting (or vice versa)',
                    'Applying to wrong coordinate',
                    'Not adjusting asymptotes correctly'
                ]
            },
            vertical_stretches_compressions: {
                'Identifying stretch vs compression': [
                    'Confusing |a| > 1 with compression',
                    'Thinking "bigger number = wider" (actually opposite)',
                    'Forgetting absolute value for coefficient'
                ],
                'Applying to points': [
                    'Multiplying x-values instead of y-values',
                    'Forgetting to multiply all y-coordinates',
                    'Not preserving x-intercepts'
                ]
            },
            horizontal_stretches_compressions: {
                'Inverse relationship': [
                    'f(2x) compresses (not stretches) - dividing by 2',
                    'Confusing with vertical stretches',
                    'Multiplying x-values instead of dividing'
                ],
                'Transforming points': [
                    'Dividing by wrong value',
                    'Affecting y-values',
                    'Not adjusting period for trig functions'
                ]
            },
            reflections: {
                'Determining axis': [
                    'Confusing -f(x) with f(-x)',
                    'Reflecting over wrong axis',
                    'Forgetting which coordinate changes sign'
                ],
                'Combined with other transformations': [
                    'Applying in wrong order',
                    'Losing track of negative signs',
                    'Double-reflecting accidentally'
                ]
            },
            combined_transformations: {
                'Order of operations': [
                    'Applying transformations in wrong order',
                    'Confusing inside and outside operations',
                    'Not following standard transformation sequence'
                ],
                'Multiple parameters': [
                    'Mixing up a, b, h, k meanings',
                    'Forgetting some transformations',
                    'Sign errors with multiple negatives'
                ]
            }
        };

        this.errorPrevention = {
            horizontal_shift_direction: {
                reminder: 'f(x - h) shifts RIGHT by h units (opposite of what it looks like!)',
                method: 'Think: "What x-value gives me 0 inside?" That\'s the new center.'
            },
            stretch_vs_compression: {
                reminder: 'Vertical: multiply y-values. Horizontal: DIVIDE x-values.',
                method: 'For f(bx), think "b times faster" = compressed horizontally'
            },
            reflection_axis: {
                reminder: '-f(x) reflects over x-axis (negates y). f(-x) reflects over y-axis (negates x).',
                method: 'Check which variable gets negated'
            },
            combined_order: {
                reminder: 'Inside-out for evaluation. Horizontal before vertical for graphing.',
                method: 'Write out each transformation step separately'
            },
            key_points_method: {
                reminder: 'Transform key points of parent function, then connect',
                method: 'Use (0,0), (1,1), (-1,-1) or other characteristic points'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why transformation works and its geometric meaning',
                language: 'intuitive and visually descriptive'
            },
            procedural: {
                focus: 'Step-by-step process for applying transformation',
                language: 'clear instructions and algorithms'
            },
            visual: {
                focus: 'Graphical effects and spatial understanding',
                language: 'visual metaphors and geometric descriptions'
            },
            algebraic: {
                focus: 'Formal function notation and composition',
                language: 'precise mathematical terminology'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential transformations only',
                examples: 'concrete parent functions (x², |x|, 1/x)'
            },
            intermediate: {
                vocabulary: 'standard mathematical terms',
                detail: 'main transformations with brief explanations',
                examples: 'variety of function types'
            },
            ELI5: {
                vocabulary: 'explain like I\'m 5 - simplest possible terms',
                detail: 'every step explained with real-world analogies',
                examples: 'everyday situations and physical movements',
                analogies: true,
                visualization: 'simple drawings and animations'
            },
            detailed: {
                vocabulary: 'full mathematical vocabulary',
                detail: 'comprehensive analysis of all effects',
                examples: 'complex combinations and special cases'
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
            temperature_conversion: {
                scenario: "Converting temperature scales with shifts",
                transformation: "Vertical shift: C to F is F = C + 32 (after scaling)",
                examples: [
                    "Water freezes at 0°C = 32°F (shift up 32)",
                    "Room temperature ~20°C = 68°F"
                ],
                context: "Temperature conversions involve both scaling and shifting"
            },
            sound_waves: {
                scenario: "Audio volume and pitch adjustments",
                transformation: "Vertical stretch changes amplitude (volume), horizontal compression changes frequency (pitch)",
                examples: [
                    "Doubling volume: 2·sin(x)",
                    "Raising pitch an octave: sin(2x)"
                ],
                context: "Audio processing relies heavily on function transformations"
            },
            business_costs: {
                scenario: "Fixed costs and variable rates",
                transformation: "Vertical shift for fixed costs, vertical stretch for markup",
                examples: [
                    "Original cost C(x), selling price: 1.3·C(x) + 50 (30% markup plus $50 overhead)"
                ],
                context: "Business models use transformations to represent pricing strategies"
            },
            population_growth: {
                scenario: "Population models with different starting points",
                transformation: "Horizontal shift changes starting year, vertical stretch changes growth rate",
                examples: [
                    "P(t) = P₀·eʳᵗ shifted to start in 1950: P(t-1950)"
                ],
                context: "Population modeling uses exponential transformations"
            },
            projectile_motion: {
                scenario: "Throwing objects from different heights",
                transformation: "Vertical shift represents initial height",
                examples: [
                    "Ball dropped from ground: h(t) = -16t²",
                    "Ball dropped from 100ft: h(t) = -16t² + 100"
                ],
                context: "Physics problems involve parabolic transformations"
            },
            seasonal_patterns: {
                scenario: "Temperature, daylight, sales cycles",
                transformation: "Trigonometric transformations model periodic behavior",
                examples: [
                    "Temperature: T(t) = 15·sin((2π/12)(t - 3)) + 60",
                    "Amplitude 15°, period 12 months, phase shift 3, average 60°F"
                ],
                context: "Seasonal data uses sine/cosine transformations"
            },
            video_playback: {
                scenario: "Speed controls and time-lapse",
                transformation: "Horizontal compression for faster playback",
                examples: [
                    "2x speed: f(2t) compresses time by factor of 2",
                    "Slow motion 0.5x: f(0.5t) stretches time"
                ],
                context: "Media playback uses horizontal transformations"
            },
            spring_oscillation: {
                scenario: "Mass on spring with different starting points",
                transformation: "Harmonic motion with phase shifts",
                examples: [
                    "Standard: x(t) = A·cos(ωt)",
                    "Started from displaced position: x(t) = A·cos(ω(t - t₀))"
                ],
                context: "Physical systems exhibit transformed periodic functions"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            vertical_shifts: {
                skills: ['Function notation', 'Coordinate graphing', 'Addition/subtraction'],
                priorKnowledge: ['Understanding of y-values', 'Concept of output'],
                checkQuestions: [
                    "If f(3) = 7, what is f(3) + 4?",
                    "Does adding to a function affect x or y values?",
                    "If all y-values increase by 5, which direction does graph move?"
                ]
            },
            horizontal_shifts: {
                skills: ['Function notation', 'Substitution', 'Understanding of input'],
                priorKnowledge: ['Difference between f(x+2) and f(x)+2', 'Input vs output'],
                checkQuestions: [
                    "If f(5) = 10, what x-value in f(x-2) gives output 10?",
                    "Does f(x-3) shift left or right?",
                    "What happens to x-values in horizontal shift?"
                ]
            },
            vertical_stretches_compressions: {
                skills: ['Multiplication', 'Function notation', 'Proportional reasoning'],
                priorKnowledge: ['Scaling', 'Effect of multiplication on coordinates'],
                checkQuestions: [
                    "If f(2) = 6, what is 3·f(2)?",
                    "What happens to y-values when multiplying function by 2?",
                    "Is 2·f(x) wider or taller than f(x)?"
                ]
            },
            horizontal_stretches_compressions: {
                skills: ['Function composition', 'Inverse relationships', 'Division'],
                priorKnowledge: ['f(2x) vs 2·f(x)', 'Input scaling'],
                checkQuestions: [
                    "If f(4) = 10, what is f(2·2)?",
                    "Does f(2x) make graph wider or narrower?",
                    "How do x-values change in f(3x)?"
                ]
            },
            reflections: {
                skills: ['Negative numbers', 'Coordinate plane symmetry', 'Function notation'],
                priorKnowledge: ['Axis reflection', 'Sign changes'],
                checkQuestions: [
                    "If f(3) = 5, what is -f(3)?",
                    "If f(3) = 5, what is f(-3)?",
                    "Which reflection changes y-values to their opposites?"
                ]
            },
            combined_transformations: {
                skills: ['All individual transformations', 'Order of operations', 'Function composition'],
                priorKnowledge: ['Multiple transformation effects', 'Inside vs outside function'],
                checkQuestions: [
                    "In 2·f(x-3) + 1, which transformation happens first when graphing?",
                    "What does each parameter (a, b, h, k) represent?",
                    "Can you identify all transformations in -3·f(2(x+1)) - 5?"
                ]
            },
            absolute_value_transformations: {
                skills: ['Absolute value concept', 'Piecewise thinking', 'V-shaped graphs'],
                priorKnowledge: ['|x| parent function', 'Vertex location'],
                checkQuestions: [
                    "What is the vertex of |x|?",
                    "How does |x-2| move the vertex?",
                    "What shape does |x| create?"
                ]
            },
            quadratic_transformations: {
                skills: ['Parabola graphing', 'Vertex form', 'Quadratic functions'],
                priorKnowledge: ['x² parent function', 'Vertex concept', 'Axis of symmetry'],
                checkQuestions: [
                    "What is the vertex of x²?",
                    "How does (x-3)² move the parabola?",
                    "What does the 'a' in a(x-h)² + k control?"
                ]
            },
            exponential_transformations: {
                skills: ['Exponential functions', 'Asymptotes', 'Growth vs decay'],
                priorKnowledge: ['aˣ or eˣ behavior', 'Horizontal asymptote'],
                checkQuestions: [
                    "What is the horizontal asymptote of 2ˣ?",
                    "Is 2ˣ growth or decay?",
                    "How does 2ˣ + 3 move the asymptote?"
                ]
            },
            trigonometric_transformations: {
                skills: ['Sine/cosine graphs', 'Period', 'Amplitude'],
                priorKnowledge: ['Periodic functions', 'Trig function shapes'],
                checkQuestions: [
                    "What is the period of sin(x)?",
                    "What is the amplitude of sin(x)?",
                    "How does sin(2x) change the period?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            graphical: {
                description: "Visual graph transformations",
                analogy: "Moving, stretching, and flipping a picture",
                visualization: "Plot parent function, then show transformed version",
                suitableFor: ['all_transformations'],
                explanation: "See how the curve moves and changes shape"
            },
            key_points: {
                description: "Transform specific points, then connect",
                analogy: "Moving landmarks on a map",
                visualization: "Plot key points of parent, transform them, plot new curve",
                suitableFor: ['all_transformations'],
                explanation: "Track how important points (intercepts, vertices, etc.) move"
            },
            table_values: {
                description: "Table showing x, f(x), and transformed values",
                analogy: "Recipe with original and adjusted measurements",
                visualization: "Side-by-side columns showing transformation effects",
                suitableFor: ['vertical_shifts', 'vertical_stretches', 'horizontal_shifts'],
                explanation: "See numerical effect of transformation on output"
            },
            function_composition: {
                description: "Nested function notation",
                analogy: "Boxes within boxes",
                visualization: "Show transformation as composition: g(x) = T(f(x))",
                suitableFor: ['all_transformations'],
                explanation: "Formal function notation for transformations"
            },
            transformation_sequence: {
                description: "Step-by-step application of multiple transformations",
                analogy: "Assembly line - one change at a time",
                visualization: "Show intermediate graphs for each transformation",
                suitableFor: ['combined_transformations'],
                explanation: "Break complex transformations into simple steps"
            },
            mapping_notation: {
                description: "Point transformation rules",
                analogy: "Recipe for where each point goes",
                visualization: "(x,y) → (new_x, new_y) format",
                suitableFor: ['all_transformations'],
                explanation: "Explicit rule for how coordinates change"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "Describe the transformation: g(x) = f(x) + 3",
                    solution: "Vertical shift up 3 units",
                    steps: ["Identify +3 outside function", "This adds to all y-values", "Graph moves up 3"],
                    difficulty: "easy"
                },
                {
                    problem: "Describe: g(x) = f(x - 2)",
                    solution: "Horizontal shift right 2 units",
                    steps: ["Identify -2 inside function with x", "f(x-2) shifts opposite direction", "Graph moves right 2"],
                    difficulty: "easy"
                },
                {
                    problem: "Describe: g(x) = 2f(x)",
                    solution: "Vertical stretch by factor of 2",
                    steps: ["Identify 2 multiplying function", "This doubles all y-values", "Graph becomes taller"],
                    difficulty: "easy"
                },
                {
                    problem: "Describe: g(x) = -f(x)",
                    solution: "Reflection over x-axis",
                    steps: ["Identify negative outside function", "This negates y-values", "Graph flips over x-axis"],
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "Describe: g(x) = f(2x)",
                    solution: "Horizontal compression by factor of 2",
                    steps: ["Identify 2 multiplying x", "Divide x-values by 2", "Graph becomes narrower"],
                    difficulty: "medium"
                },
                {
                    problem: "Describe: g(x) = -2f(x) + 1",
                    solution: "Reflection over x-axis, vertical stretch by 2, shift up 1",
                    steps: ["Negative sign: reflect over x-axis", "Multiply y by 2: vertical stretch", "Add 1: shift up"],
                    difficulty: "medium"
                },
                {
                    problem: "Describe: g(x) = f(x + 3) - 4",
                    solution: "Shift left 3, shift down 4",
                    steps: ["x + 3: shift left 3", "- 4: shift down 4", "Final position: left 3, down 4"],
                    difficulty: "medium"
                },
                {
                    problem: "If f(2) = 5, find g(2) where g(x) = 3f(x) - 1",
                    solution: "g(2) = 14",
                    steps: ["f(2) = 5", "g(2) = 3(5) - 1", "g(2) = 15 - 1 = 14"],
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "Describe: g(x) = -2f(3(x - 1)) + 5",
                    solution: "Shift right 1, horizontal compression by 3, vertical stretch by 2, reflection over x-axis, shift up 5",
                    steps: [
                        "x - 1: shift right 1",
                        "3(x - 1): horizontal compression by 3",
                        "-2f(...): vertical stretch by 2 and reflect over x-axis",
                        "+ 5: shift up 5"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "Graph g(x) = |2x - 4| + 1 from f(x) = |x|",
                    solution: "Vertex at (2, 1), V-shape compressed horizontally by 2",
                    steps: [
                        "Rewrite: g(x) = |2(x - 2)| + 1",
                        "Shift right 2: vertex x-coordinate is 2",
                        "Horizontal compression by 2: steeper V",
                        "Shift up 1: vertex y-coordinate is 1"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "Write equation for parabola with vertex (3, -2), opening down, stretched by 2",
                    solution: "g(x) = -2(x - 3)² - 2",
                    steps: [
                        "Vertex form: a(x - h)² + k",
                        "Vertex (3, -2): h = 3, k = -2",
                        "Opens down: a < 0",
                        "Stretched by 2: a = -2"
                    ],
                    difficulty: "hard"
                }
            ],
            byTransformation: {
                vertical_shift: [
                    { problem: "g(x) = x² + 4", transformation: "up 4 units" },
                    { problem: "g(x) = |x| - 3", transformation: "down 3 units" },
                    { problem: "g(x) = sin(x) + 2", transformation: "up 2 units" }
                ],
                horizontal_shift: [
                    { problem: "g(x) = (x - 5)²", transformation: "right 5 units" },
                    { problem: "g(x) = |x + 2|", transformation: "left 2 units" },
                    { problem: "g(x) = sin(x - π/2)", transformation: "right π/2 units" }
                ],
                vertical_stretch: [
                    { problem: "g(x) = 3x²", transformation: "stretch by 3" },
                    { problem: "g(x) = 0.5|x|", transformation: "compression by 0.5" },
                    { problem: "g(x) = 2sin(x)", transformation: "amplitude 2" }
                ],
                horizontal_stretch: [
                    { problem: "g(x) = (2x)²", transformation: "compression by 2" },
                    { problem: "g(x) = |0.5x|", transformation: "stretch by 2" },
                    { problem: "g(x) = sin(3x)", transformation: "period 2π/3" }
                ],
                reflection: [
                    { problem: "g(x) = -x²", transformation: "reflect over x-axis" },
                    { problem: "g(x) = |-x|", transformation: "reflect over y-axis (no change for |x|)" },
                    { problem: "g(x) = -sin(x)", transformation: "reflect over x-axis" }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            horizontal_shift_direction: {
                misconception: "f(x - 3) shifts the graph left",
                reality: "f(x - 3) shifts the graph RIGHT 3 units (opposite direction)",
                correctiveExample: "Think: what x makes the inside zero? x - 3 = 0 when x = 3. The center moved to x = 3 (right).",
                commonIn: ['horizontal_shifts', 'combined_transformations']
            },
            horizontal_stretch_direction: {
                misconception: "f(2x) stretches the graph (makes it wider)",
                reality: "f(2x) COMPRESSES the graph horizontally (makes it narrower)",
                correctiveExample: "f(2x) means 'go twice as fast through x-values', so graph is narrower. Point at x=4 in f(x) is now at x=2.",
                commonIn: ['horizontal_stretches_compressions']
            },
            vertical_vs_horizontal: {
                misconception: "All transformations affect y-values",
                reality: "Outside changes affect y; inside changes affect x",
                correctiveExample: "2·f(x) doubles y-values (vertical). f(2x) halves x-values (horizontal).",
                commonIn: ['all_transformations']
            },
            reflection_confusion: {
                misconception: "Cannot distinguish -f(x) from f(-x)",
                reality: "-f(x) reflects over x-axis (negates output). f(-x) reflects over y-axis (negates input).",
                correctiveExample: "If f(3) = 5: -f(3) = -5 (x-axis reflection). f(-3) might be different (y-axis reflection).",
                commonIn: ['reflections']
            },
            order_of_operations: {
                misconception: "Can apply transformations in any order",
                reality: "Order matters! Must follow standard sequence or track carefully",
                correctiveExample: "2f(x) + 3 is different from 2(f(x) + 3) = 2f(x) + 6",
                commonIn: ['combined_transformations']
            },
            amplitude_vs_stretch: {
                misconception: "Amplitude and vertical stretch are different",
                reality: "For sin/cos, amplitude IS the vertical stretch factor",
                correctiveExample: "3sin(x) has amplitude 3 = vertical stretch by 3",
                commonIn: ['trigonometric_transformations']
            },
            period_calculation: {
                misconception: "Period of sin(bx) is b",
                reality: "Period is 2π/b (or 2π/|b|)",
                correctiveExample: "sin(2x) has period π, not 2. Goes through full cycle twice as fast.",
                commonIn: ['trigonometric_transformations']
            },
            asymptote_shifts: {
                misconception: "Asymptotes don't move with transformations",
                reality: "Asymptotes transform like any other feature",
                correctiveExample: "1/x has asymptotes x=0, y=0. 1/(x-2) + 3 has asymptotes x=2, y=3.",
                commonIn: ['rational_transformations', 'exponential_transformations']
            },
            vertex_form_errors: {
                misconception: "In a(x-h)²+k, if h is positive, shift is left",
                reality: "Positive h means shift RIGHT (same as horizontal shift rule)",
                correctiveExample: "(x-3)² has vertex at x=3 (right), not x=-3",
                commonIn: ['quadratic_transformations', 'absolute_value_transformations']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            vertical_shift: {
                analogy: "Elevator ride",
                explanation: "The whole graph rides an elevator up or down. Every point moves the same vertical distance.",
                suitableFor: ['vertical_shifts'],
                ELI5: "Imagine putting a picture on an elevator. When the elevator goes up, the whole picture goes up together!"
            },
            horizontal_shift: {
                analogy: "Sliding on a track",
                explanation: "The graph slides left or right along a track. Every point moves the same horizontal distance.",
                suitableFor: ['horizontal_shifts'],
                ELI5: "Like sliding a piece of paper left or right on your desk. The picture doesn't change, just its position!"
            },
            vertical_stretch: {
                analogy: "Stretching dough",
                explanation: "Pull the graph up and down like stretching dough. It gets taller (or squished) but keeps same width.",
                suitableFor: ['vertical_stretches_compressions'],
                ELI5: "Imagine grabbing the top and bottom of a rubber picture and pulling apart to make it taller!"
            },
            horizontal_stretch: {
                analogy: "Accordion",
                explanation: "Like an accordion, the graph squeezes together or spreads out horizontally.",
                suitableFor: ['horizontal_stretches_compressions'],
                ELI5: "Like squishing or stretching a spring or accordion sideways!"
            },
            reflection_x: {
                analogy: "Mirror on floor",
                explanation: "Flip the graph as if there's a mirror along the x-axis (floor). Up becomes down.",
                suitableFor: ['reflections'],
                ELI5: "Flip the picture upside down, like looking at its reflection in a puddle!"
            },
            reflection_y: {
                analogy: "Mirror on wall",
                explanation: "Flip the graph as if there's a mirror along the y-axis (wall). Left becomes right.",
                suitableFor: ['reflections'],
                ELI5: "Flip the picture left-to-right, like looking in a mirror on the wall!"
            },
            combined_transformations: {
                analogy: "Photo editing sequence",
                explanation: "Like editing a photo: crop, rotate, resize, adjust brightness - each change builds on the previous one.",
                suitableFor: ['combined_transformations'],
                ELI5: "Like playing with a toy: first slide it, then make it bigger, then flip it - one change at a time!"
            },
            parent_function: {
                analogy: "Cookie cutter shape",
                explanation: "The parent function is like a basic cookie cutter shape. Transformations are like moving, resizing, or flipping it.",
                suitableFor: ['all_transformations'],
                ELI5: "The basic shape is like a cookie cutter. We can move it around, make it bigger, or flip it over!"
            },
            trigonometric_amplitude: {
                analogy: "Volume knob",
                explanation: "Amplitude is like a volume knob - makes the wave taller (louder) or shorter (quieter).",
                suitableFor: ['trigonometric_transformations'],
                ELI5: "Like turning up the volume to make music louder - the wave gets taller!"
            },
            trigonometric_period: {
                analogy: "Speed control",
                explanation: "Changing period is like speeding up or slowing down a repeating pattern.",
                suitableFor: ['trigonometric_transformations'],
                ELI5: "Like a swing going faster or slower - it still swings back and forth, just quicker or slower!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            vertical_shift: {
                level1: "Where do you see addition or subtraction in the function?",
                level2: "Is it added OUTSIDE the function (to the whole function)?",
                level3: "Adding outside shifts the graph vertically",
                level4: "Add {k} to all y-values. Graph shifts {direction} {amount} units."
            },
            horizontal_shift: {
                level1: "Where do you see addition or subtraction with x?",
                level2: "Is it INSIDE the function with the x?",
                level3: "Remember: f(x - h) shifts OPPOSITE direction - RIGHT if subtracting",
                level4: "Replace x with x - {h}. Graph shifts {direction} {amount} units."
            },
            vertical_stretch: {
                level1: "Is there a number multiplying the entire function?",
                level2: "Numbers multiplying the function affect vertical size",
                level3: "If |a| > 1, it's a stretch (taller). If 0 < |a| < 1, it's a compression (shorter)",
                level4: "Multiply all y-values by {a}. Graph becomes {effect}."
            },
            horizontal_stretch: {
                level1: "Is there a number multiplying the x inside the function?",
                level2: "Numbers multiplying x affect horizontal size (opposite to vertical!)",
                level3: "If |b| > 1, it's a COMPRESSION (narrower). If 0 < |b| < 1, it's a STRETCH (wider)",
                level4: "Divide all x-values by {b}. Graph becomes {effect}."
            },
            reflection: {
                level1: "Do you see a negative sign?",
                level2: "Is the negative sign outside the function (-f(x)) or on the x inside (f(-x))?",
                level3: "-f(x) reflects over x-axis. f(-x) reflects over y-axis.",
                level4: "Negate {coordinate} values. Graph reflects over {axis}."
            },
            combined: {
                level1: "How many different changes do you see?",
                level2: "Can you identify each type: shifts, stretches, reflections?",
                level3: "Apply transformations in order: horizontal shifts, horizontal stretches, reflections, vertical stretches, vertical shifts",
                level4: "Step-by-step: {transformation_list}"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Describe the transformation: g(x) = f(x) + 5",
                    answer: "Vertical shift up 5 units",
                    assesses: "vertical_shift",
                    difficulty: "basic"
                },
                {
                    question: "Describe: g(x) = f(x - 3)",
                    answer: "Horizontal shift right 3 units",
                    assesses: "horizontal_shift",
                    difficulty: "basic"
                },
                {
                    question: "Describe: g(x) = 2f(x)",
                    answer: "Vertical stretch by factor of 2",
                    assesses: "vertical_stretch",
                    difficulty: "intermediate"
                },
                {
                    question: "Describe: g(x) = f(2x)",
                    answer: "Horizontal compression by factor of 2",
                    assesses: "horizontal_stretch",
                    difficulty: "intermediate"
                },
                {
                    question: "Describe: g(x) = -f(x + 1) + 2",
                    answer: "Shift left 1, reflect over x-axis, shift up 2",
                    assesses: "combined_transformations",
                    difficulty: "advanced"
                }
            ],
            formative: [
                {
                    question: "Which shifts the graph RIGHT?",
                    options: ["f(x + 2)", "f(x - 2)", "f(x) + 2", "f(x) - 2"],
                    correct: "f(x - 2)",
                    explanation: "f(x - h) shifts right by h units (opposite of the sign!)"
                },
                {
                    question: "Which makes the graph taller?",
                    options: ["0.5·f(x)", "2·f(x)", "f(2x)", "f(0.5x)"],
                    correct: "2·f(x)",
                    explanation: "Multiplying the function by a factor > 1 stretches it vertically"
                },
                {
                    question: "Which reflects over the x-axis?",
                    options: ["-f(x)", "f(-x)", "f(x) - 1", "-x"],
                    correct: "-f(x)",
                    explanation: "Negating the output reflects the graph over the x-axis"
                },
                {
                    question: "f(3x) makes the graph:",
                    options: ["Wider", "Narrower", "Taller", "Shorter"],
                    correct: "Narrower",
                    explanation: "f(bx) with b > 1 compresses the graph horizontally (narrower)"
                }
            ],
            summative: [
                {
                    question: "Fully describe all transformations: g(x) = -2f(3(x + 1)) - 4",
                    answer: "Shift left 1, horizontal compression by 3, vertical stretch by 2, reflection over x-axis, shift down 4",
                    showsWork: true,
                    rubric: {
                        identify_horizontal_shift: 1,
                        identify_horizontal_compression: 1,
                        identify_vertical_stretch: 1,
                        identify_reflection: 1,
                        identify_vertical_shift: 1,
                        correct_order: 1
                    }
                },
                {
                    question: "Given f(x) = x², write equation for parabola with vertex at (-2, 3), opening down",
                    answer: "g(x) = -(x + 2)² + 3",
                    showsWork: true,
                    rubric: {
                        vertex_form: 1,
                        horizontal_shift: 1,
                        vertical_shift: 1,
                        reflection: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "g(x) = f(x) + 3",
                    "g(x) = f(x - 2)",
                    "g(x) = 2f(x)",
                    "g(x) = -f(x)"
                ],
                medium: [
                    "g(x) = f(2x)",
                    "g(x) = 3f(x) - 1",
                    "g(x) = f(x + 2) + 4",
                    "g(x) = -f(x - 3)"
                ],
                hard: [
                    "g(x) = -2f(3(x - 1)) + 5",
                    "g(x) = 0.5f(-(x + 2)) - 3",
                    "Write g(x) for vertex (-3, 2), opens down, stretched by 4",
                    "Amplitude 3, period π, phase shift left π/4, midline y = 2"
                ]
            },
            byObjective: {
                canIdentifyVerticalShift: [
                    "g(x) = f(x) + 5",
                    "g(x) = f(x) - 3",
                    "g(x) = |x| + 2"
                ],
                canIdentifyHorizontalShift: [
                    "g(x) = f(x - 4)",
                    "g(x) = f(x + 2)",
                    "g(x) = (x - 3)²"
                ],
                canIdentifyVerticalStretch: [
                    "g(x) = 3f(x)",
                    "g(x) = 0.5f(x)",
                    "g(x) = 2|x|"
                ],
                canIdentifyHorizontalStretch: [
                    "g(x) = f(2x)",
                    "g(x) = f(0.5x)",
                    "g(x) = sin(3x)"
                ],
                canIdentifyReflections: [
                    "g(x) = -f(x)",
                    "g(x) = f(-x)",
                    "g(x) = -x²"
                ],
                canCombineTransformations: [
                    "g(x) = 2f(x - 1) + 3",
                    "g(x) = -f(2x) + 1",
                    "g(x) = 3f(-(x + 2)) - 4"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            identificationDecisionTree: {
                "addition/subtraction outside": "Vertical shift",
                "addition/subtraction with x inside": "Horizontal shift",
                "multiplication outside": "Vertical stretch/compression or reflection",
                "multiplication with x inside": "Horizontal stretch/compression or reflection",
                "negative outside": "Reflection over x-axis (may combine with stretch)",
                "negative on x inside": "Reflection over y-axis"
            },
            orderOfApplication: {
                forGraphing: [
                    "1. Horizontal shifts (x - h inside)",
                    "2. Horizontal stretches/compressions (multiply x)",
                    "3. Reflections (negatives)",
                    "4. Vertical stretches/compressions (multiply function)",
                    "5. Vertical shifts (add/subtract outside)"
                ],
                forEvaluation: [
                    "Work inside-out, following order of operations",
                    "Apply transformations to x first, then to output"
                ],
                mnemonic: "HHRVV: Horizontal shift, Horizontal stretch, Reflection, Vertical stretch, Vertical shift"
            },
            keyPointsMethod: {
                description: "Transform key points of parent function, then connect",
                steps: [
                    "Identify 3-5 key points of parent function",
                    "Apply transformation rules to each point",
                    "Plot transformed points",
                    "Connect with appropriate curve shape"
                ],
                parentFunctionKeyPoints: {
                    "x²": "(0,0), (1,1), (-1,1), (2,4), (-2,4)",
                    "|x|": "(0,0), (1,1), (-1,1), (2,2), (-2,2)",
                    "sin(x)": "(0,0), (π/2,1), (π,0), (3π/2,-1), (2π,0)",
                    "1/x": "(1,1), (-1,-1), (2,0.5), (-2,-0.5), (0.5,2)"
                }
            },
            transformationRules: {
                verticalShift: "(x, y) → (x, y + k)",
                horizontalShift: "(x, y) → (x + h, y)",
                verticalStretch: "(x, y) → (x, a·y)",
                horizontalStretch: "(x, y) → (x/b, y)",
                reflectionX: "(x, y) → (x, -y)",
                reflectionY: "(x, y) → (-x, y)",
                combined: "Apply transformations in sequence to coordinates"
            },
            writingEquations: {
                fromDescription: [
                    "1. Start with parent function",
                    "2. Apply horizontal changes (inside parentheses)",
                    "3. Apply vertical changes (outside)",
                    "4. Verify with test point if available"
                ],
                fromGraph: [
                    "1. Identify parent function shape",
                    "2. Locate key feature (vertex, asymptote, intercept)",
                    "3. Determine shifts from parent position",
                    "4. Check stretch/compression from shape",
                    "5. Write equation in transformation form"
                ]
            },
            commonFormulas: {
                absoluteValue: "g(x) = a|b(x - h)| + k",
                quadratic: "g(x) = a(x - h)² + k",
                exponential: "g(x) = a·bˣ⁻ʰ + k",
                logarithmic: "g(x) = a·log_b(x - h) + k",
                trigonometric: "g(x) = a·sin(b(x - h)) + k or a·cos(b(x - h)) + k",
                rational: "g(x) = a/(b(x - h)) + k"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Quick Identification",
                    timeLimit: 90,
                    problems: [
                        "g(x) = f(x) + 3",
                        "g(x) = f(x - 2)",
                        "g(x) = 2f(x)",
                        "g(x) = f(2x)",
                        "g(x) = -f(x)",
                        "g(x) = f(-x)",
                        "g(x) = f(x) - 4",
                        "g(x) = 0.5f(x)"
                    ],
                    task: "Identify the type of transformation for each"
                },
                {
                    name: "Combined Transformations Sprint",
                    timeLimit: 120,
                    problems: [
                        "g(x) = 2f(x - 1) + 3",
                        "g(x) = -f(x + 2) - 1",
                        "g(x) = 3f(2x) + 4",
                        "g(x) = 0.5f(x - 3) + 2"
                    ],
                    task: "List all transformations in order"
                }
            ],
            puzzles: [
                {
                    name: "Mystery Function",
                    problem: "A transformation takes (0,0) → (3, 5) and (1, 1) → (4, 8)",
                    challenge: "Determine the transformations applied",
                    solution: "Horizontal shift right 3, vertical stretch by 3, vertical shift up 5: g(x) = 3f(x-3) + 5",
                    hint: "Track where x=0 goes for horizontal shift, see how y-values scale"
                },
                {
                    name: "Reverse Engineering",
                    problem: "g(x) = -2f(3(x + 1)) - 4",
                    challenge: "If g(2) = 10, find f(9)",
                    solution: "f(9) = -7",
                    steps: [
                        "g(2) = -2f(3(2 + 1)) - 4 = 10",
                        "-2f(9) - 4 = 10",
                        "-2f(9) = 14",
                        "f(9) = -7"
                    ]
                },
                {
                    name: "Complete the Transformation",
                    problem: "g(x) = a·f(b(x - h)) + k takes (0, 2) → (3, 8) and has vertical stretch 2",
                    challenge: "Find h and k",
                    solution: "h = 3, k = 4",
                    reasoning: "Horizontal shift moves x=0 to x=3, so h=3. If original y=2 and stretch is 2, then 2(2) + k = 8, so k = 4"
                }
            ],
            applications: [
                {
                    scenario: "Temperature Throughout Day",
                    problem: "Temperature follows T(t) = 15sin((π/12)t) + 70, where t is hours after midnight. What do the transformations represent?",
                    solution: "Amplitude 15°F variation, period 24 hours, average temperature 70°F",
                    parameters: {
                        "15": "Temperature varies ±15°F from average",
                        "π/12": "Period = 2π/(π/12) = 24 hours",
                        "70": "Average temperature is 70°F"
                    }
                },
                {
                    scenario: "Projectile from Building",
                    problem: "Ball thrown from 100ft building: h(t) = -16(t - 1)² + 116. Interpret transformations.",
                    solution: "Reaches maximum height of 116ft at t=1 second, starts at 100ft",
                    interpretation: {
                        "Horizontal shift right 1": "Maximum height at t = 1 second",
                        "Vertical shift up 116": "Maximum height is 116 feet",
                        "Coefficient -16": "Standard gravity constant (ft/s²)"
                    }
                },
                {
                    scenario: "Population Growth",
                    problem: "Population P(t) = 5000·e^(0.03(t-2010)) + 1000. What does each part mean?",
                    solution: "Started at 6000 in 2010, growing at 3% per year, plus constant 1000",
                    interpretation: {
                        "5000": "Initial growth-affected population",
                        "e^0.03": "3% continuous growth rate",
                        "t - 2010": "Years since 2010",
                        "+ 1000": "Constant baseline population"
                    }
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Problem: Describe g(x) = f(x - 3)",
                        "Student answer: Shifts left 3 units",
                        "Actual answer: Shifts right 3 units"
                    ],
                    errorType: "Confusion about horizontal shift direction"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Problem: Transform (2, 5) using g(x) = 2f(x)",
                        "Student answer: (4, 5)",
                        "Actual answer: (2, 10)"
                    ],
                    errorType: "Applied vertical stretch to x-coordinate instead of y-coordinate"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "Problem: Describe g(x) = f(3x)",
                        "Student answer: Horizontal stretch by 3",
                        "Actual answer: Horizontal compression by 3"
                    ],
                    errorType: "Confused stretch with compression for horizontal transformations"
                },
                {
                    name: "Find the Error #4",
                    incorrectWork: [
                        "Problem: g(x) = 2f(x - 1) + 3, starting from (1, 4)",
                        "Student: Shift right 1: (2, 4). Then stretch: (2, 8). Then shift up: (2, 11)",
                        "Correct: (2, 11) ✓ - actually got it right!"
                    ],
                    errorType: "No error - student used correct order and got right answer"
                }
            ],
            graphingChallenges: [
                {
                    name: "Multi-Step Graphing",
                    task: "Graph g(x) = -2|x + 1| + 3 starting from f(x) = |x|",
                    steps: [
                        "Start with V-shape at origin",
                        "Shift left 1: vertex at (-1, 0)",
                        "Vertical stretch by 2: V becomes steeper",
                        "Reflect over x-axis: ∧ shape",
                        "Shift up 3: vertex at (-1, 3)"
                    ],
                    keyPoints: [
                        "Vertex: (-1, 3)",
                        "Y-intercept: (0, 1)",
                        "Opens downward with slope ±2"
                    ]
                },
                {
                    name: "Trigonometric Challenge",
                    task: "Graph g(x) = 3sin(2(x - π/4)) + 1",
                    analysis: {
                        amplitude: "3",
                        period: "2π/2 = π",
                        phaseShift: "Right π/4",
                        verticalShift: "Up 1 (midline at y = 1)"
                    },
                    keyPoints: [
                        "Starts at (π/4, 1)",
                        "Maximum at (π/4 + π/4, 4) = (π/2, 4)",
                        "Midline at (π/4 + π/2, 1) = (3π/4, 1)",
                        "Minimum at (π/4 + 3π/4, -2) = (π, -2)"
                    ]
                }
            ]
        };
    }

    // MAIN SOLVER METHOD
    solveFunctionTransformationProblem(config) {
        const { equation, transformation, parameters, problemType, context, parentFunction } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseFunctionTransformationProblem(
                equation, 
                transformation, 
                parameters, 
                problemType, 
                context,
                parentFunction
            );

            // Solve the problem
            this.currentSolution = this.solveFunctionTransformationProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateFunctionTransformationSteps(this.currentProblem, this.currentSolution);

            // Generate graph data if applicable
            this.generateFunctionTransformationGraphData();

            // Generate workbook
            this.generateFunctionTransformationWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                transformations: this.currentSolution?.transformations,
                graphData: this.graphData
            };

        } catch (error) {
            throw new Error(`Failed to solve function transformation problem: ${error.message}`);
        }
    }

    parseFunctionTransformationProblem(equation, transformation = '', parameters = {}, problemType = null, context = {}, parentFunction = null) {
        const cleanInput = equation ? this.cleanMathExpression(equation) : '';

        // If problem type is specified, use it directly
        if (problemType && this.transformationTypes[problemType]) {
            return {
                originalInput: equation || `${problemType} transformation`,
                cleanInput: cleanInput,
                type: problemType,
                transformation: transformation,
                parameters: { ...parameters },
                context: { ...context },
                parentFunction: parentFunction || 'f(x)',
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect transformation type
        for (const [type, config] of Object.entries(this.transformationTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(transformation)) {
                    const match = cleanInput.match(pattern);
                    const extractedParams = this.extractTransformationParameters(match, type);

                    return {
                        originalInput: equation || transformation,
                        cleanInput: cleanInput,
                        type: type,
                        transformation: transformation,
                        parameters: { ...extractedParams, ...parameters },
                        context: { ...context },
                        parentFunction: parentFunction || this.detectParentFunction(cleanInput),
                        match: match,
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        // Default to combined transformation if parameters are provided
        if (parameters.a !== undefined || parameters.b !== undefined || 
            parameters.h !== undefined || parameters.k !== undefined) {
            return {
                originalInput: equation || 'Function transformation with given parameters',
                cleanInput: cleanInput,
                type: 'combined_transformation',
                transformation: transformation,
                parameters: { 
                    a: parameters.a || 1, 
                    b: parameters.b || 1,
                    h: parameters.h || 0,
                    k: parameters.k || 0,
                    ...parameters 
                },
                context: { ...context },
                parentFunction: parentFunction || 'f(x)',
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize transformation type from: ${equation || transformation}`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/≤/g, '<=')
            .replace(/≥/g, '>=')
            .replace(/≠/g, '!=')
            .trim();
    }

    detectParentFunction(expression) {
        const parentFunctions = {
            'x²|x\\^2|quadratic': 'x²',
            '\\|x\\||abs\\(|absolute': '|x|',
            'sin\\(': 'sin(x)',
            'cos\\(': 'cos(x)',
            'tan\\(': 'tan(x)',
            'e\\^|exp\\(': 'eˣ',
            'log\\(|ln\\(': 'log(x)',
            '1/x|reciprocal': '1/x',
            '√|sqrt': '√x'
        };

        for (const [pattern, parent] of Object.entries(parentFunctions)) {
            if (new RegExp(pattern).test(expression)) {
                return parent;
            }
        }

        return 'f(x)';
    }

    extractTransformationParameters(match, type) {
        const params = {};

        if (!match) return params;

        switch(type) {
            case 'vertical_shift':
                params.k = this.parseCoefficient(match[1]);
                break;

            case 'horizontal_shift':
                params.h = this.parseCoefficient(match[1]);
                break;

            case 'vertical_stretch':
                params.a = this.parseCoefficient(match[1]) || 1;
                break;

            case 'horizontal_stretch':
                params.b = this.parseCoefficient(match[1]) || 1;
                break;

            case 'combined_transformation':
                // Extract a, b, h, k from complex patterns
                params.a = 1;
                params.b = 1;
                params.h = 0;
                params.k = 0;
                // More complex parsing would go here
                break;
        }

        return params;
    }

    parseCoefficient(coeff) {
        if (!coeff || coeff.trim() === '') return 0;

        let cleaned = coeff.replace(/\s+/g, '');
        if (cleaned === '+' || cleaned === '') return 1;
        if (cleaned === '-') return -1;

        // Handle fractions
        const fractionMatch = cleaned.match(/^([+-]?\d*\.?\d*)\/(\d*\.?\d*)$/);
        if (fractionMatch) {
            const numerator = parseFloat(fractionMatch[1]) || 1;
            const denominator = parseFloat(fractionMatch[2]) || 1;
            return denominator !== 0 ? numerator / denominator : 0;
        }

        // Handle regular numbers
        const num = parseFloat(cleaned);
        return isNaN(num) ? 0 : num;
    }

    solveFunctionTransformationProblem_Internal(problem) {
        const solver = this.transformationTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for transformation type: ${problem.type}`);
        }

        return solver(problem);
    }

    // TRANSFORMATION SOLVERS

    solveVerticalShift(problem) {
        const { k } = problem.parameters;
        const direction = k > 0 ? 'up' : 'down';
        const amount = Math.abs(k);

        return {
            transformationType: 'Vertical Shift',
            equation: `g(x) = f(x) ${k >= 0 ? '+' : '-'} ${amount}`,
            direction: direction,
            amount: amount,
            parameter: { k: k },
            pointTransformation: `(x, y) → (x, y ${k >= 0 ? '+' : '-'} ${amount})`,
            description: `Shifts the graph ${direction} by ${amount} unit${amount !== 1 ? 's' : ''}`,
            category: 'vertical_shifts',
            graphicalEffect: {
                affects: 'y-coordinates only',
                xCoordinates: 'unchanged',
                yCoordinates: `add ${k}`,
                asymptoteShift: `Horizontal asymptotes shift ${direction} by ${amount}`
            }
        };
    }

    solveHorizontalShift(problem) {
        const { h } = problem.parameters;
        // Remember: f(x - h) shifts RIGHT, f(x + h) shifts LEFT
        const direction = h > 0 ? 'right' : 'left';
        const amount = Math.abs(h);

        return {
            transformationType: 'Horizontal Shift',
            equation: `g(x) = f(x ${h >= 0 ? '-' : '+'} ${amount})`,
            direction: direction,
            amount: amount,
            parameter: { h: h },
            pointTransformation: `(x, y) → (x ${h >= 0 ? '+' : '-'} ${amount}, y)`,
            description: `Shifts the graph ${direction} by ${amount} unit${amount !== 1 ? 's' : ''}`,
            importantNote: `f(x - ${amount}) shifts RIGHT (opposite of the sign!)`,
            category: 'horizontal_shifts',
            graphicalEffect: {
                affects: 'x-coordinates only',
                xCoordinates: `add ${h}`,
                yCoordinates: 'unchanged',
                asymptoteShift: `Vertical asymptotes shift ${direction} by ${amount}`
            }
        };
    }

    solveVerticalStretch(problem) {
        const { a } = problem.parameters;
        const absA = Math.abs(a);
        const type = absA > 1 ? 'stretch' : absA < 1 ? 'compression' : 'no change';
        const hasReflection = a < 0;

        return {
            transformationType: 'Vertical Stretch/Compression',
            equation: `g(x) = ${a}·f(x)`,
            stretchType: type,
            factor: absA,
            hasReflection: hasReflection,
            parameter: { a: a },
            pointTransformation: `(x, y) → (x, ${a}·y)`,
            description: `${type === 'stretch' ? `Stretches vertically by factor ${absA}` : type === 'compression' ? `Compresses vertically by factor ${absA}` : 'No vertical change'}${hasReflection ? ' and reflects over x-axis' : ''}`,
            category: 'vertical_stretches_compressions',
            graphicalEffect: {
                affects: 'y-coordinates only',
                xCoordinates: 'unchanged',
                yCoordinates: `multiply by ${a}`,
                appearance: type === 'stretch' ? 'taller and narrower-looking' : 'shorter and wider-looking',
                maximaMinima: `scaled by factor ${absA}`
            }
        };
    }

    solveHorizontalStretch(problem) {
        const { b } = problem.parameters;
        const absB = Math.abs(b);
        // Remember: f(bx) with b > 1 COMPRESSES (opposite of vertical!)
        const type = absB > 1 ? 'compression' : absB < 1 ? 'stretch' : 'no change';
        const hasReflection = b < 0;

        return {
            transformationType: 'Horizontal Stretch/Compression',
            equation: `g(x) = f(${b}·x)`,
            stretchType: type,
            factor: absB,
            hasReflection: hasReflection,
            parameter: { b: b },
            pointTransformation: `(x, y) → (x/${b}, y)`,
            description: `${type === 'compression' ? `Compresses horizontally by factor ${absB}` : type === 'stretch' ? `Stretches horizontally by factor ${1/absB}` : 'No horizontal change'}${hasReflection ? ' and reflects over y-axis' : ''}`,
            importantNote: `f(${absB}x) ${type}s the graph (inverse relationship!)`,
            category: 'horizontal_stretches_compressions',
            graphicalEffect: {
                affects: 'x-coordinates only',
                xCoordinates: `divide by ${b}`,
                yCoordinates: 'unchanged',
                appearance: type === 'compression' ? 'narrower' : 'wider',
                periodEffect: `For periodic functions, period becomes T/${absB}`
            }
        };
    }

    solveReflectionX(problem) {
        return {
            transformationType: 'Reflection over x-axis',
            equation: `g(x) = -f(x)`,
            reflectionAxis: 'x-axis',
            pointTransformation: `(x, y) → (x, -y)`,
            description: 'Flips the graph over the x-axis (horizontal mirror line)',
            category: 'reflections',
            graphicalEffect: {
                affects: 'y-coordinates only',
                xCoordinates: 'unchanged',
                yCoordinates: 'negated',
                appearance: 'upside-down version of original',
                maximaMinima: 'maximums become minimums and vice versa'
            }
        };
    }

    solveReflectionY(problem) {
        return {
            transformationType: 'Reflection over y-axis',
            equation: `g(x) = f(-x)`,
            reflectionAxis: 'y-axis',
            pointTransformation: `(x, y) → (-x, y)`,
            description: 'Flips the graph over the y-axis (vertical mirror line)',
            category: 'reflections',
            graphicalEffect: {
                affects: 'x-coordinates only',
                xCoordinates: 'negated',
                yCoordinates: 'unchanged',
                appearance: 'left-right mirror image of original'
            }
        };
    }

    solveCombinedTransformation(problem) {
        const { a, b, h, k } = problem.parameters;
        
        const transformations = [];
        
        // Identify all transformations present
        if (h !== 0) {
            const direction = h > 0 ? 'right' : 'left';
            transformations.push({
                type: 'horizontal_shift',
                description: `Shift ${direction} ${Math.abs(h)} units`,
                parameter: h,
                order: 1
            });
        }
        
        if (b !== 1) {
            const absB = Math.abs(b);
            const type = absB > 1 ? 'compression' : 'stretch';
            transformations.push({
                type: 'horizontal_stretch',
                description: `Horizontal ${type} by factor ${absB}`,
                parameter: b,
                order: 2
            });
            
            if (b < 0) {
                transformations.push({
                    type: 'reflection_y',
                    description: 'Reflection over y-axis',
                    parameter: b,
                    order: 2.5
                });
            }
        }
        
        if (a !== 1 && a !== 0) {
            const absA = Math.abs(a);
            const type = absA > 1 ? 'stretch' : 'compression';
            transformations.push({
                type: 'vertical_stretch',
                description: `Vertical ${type} by factor ${absA}`,
                parameter: a,
                order: 3
            });
            
            if (a < 0) {
                transformations.push({
                    type: 'reflection_x',
                    description: 'Reflection over x-axis',
                    parameter: a,
                    order: 3.5
                });
            }
        }
        
        if (k !== 0) {
            const direction = k > 0 ? 'up' : 'down';
            transformations.push({
                type: 'vertical_shift',
                description: `Shift ${direction} ${Math.abs(k)} units`,
                parameter: k,
                order: 4
            });
        }

        return {
            transformationType: 'Combined Transformations',
            equation: `g(x) = ${a}·f(${b}(x - ${h})) + ${k}`,
            parameters: { a, b, h, k },
            transformations: transformations.sort((x, y) => x.order - y.order),
            transformationCount: transformations.length,
            category: 'combined_transformations',
            orderOfApplication: [
                'Horizontal shift',
                'Horizontal stretch/compression',
                'Reflections',
                'Vertical stretch/compression',
                'Vertical shift'
            ],
            pointTransformation: `(x, y) → ((x + ${h})/${b}, ${a}·y + ${k})`,
            description: `Multiple transformations applied: ${transformations.map(t => t.description).join(', ')}`
        };
    }

    solveAbsoluteValueTransformation(problem) {
        const { a, b, h, k } = problem.parameters;

        return {
            transformationType: 'Absolute Value Transformation',
            equation: `g(x) = ${a || 1}|${b || 1}(x - ${h || 0})| + ${k || 0}`,
            parentFunction: '|x|',
            vertexLocation: `(${h || 0}, ${k || 0})`,
            parameters: { a: a || 1, b: b || 1, h: h || 0, k: k || 0 },
            category: 'absolute_value_transformations',
            graphicalEffect: {
                vertex: `(${h || 0}, ${k || 0})`,
                slope: `±${Math.abs(a || 1) * Math.abs(b || 1)}`,
                opening: (a || 1) > 0 ? 'upward (V)' : 'downward (∧)',
                width: Math.abs(b || 1) > 1 ? 'narrower' : 'wider'
            }
        };
    }

    solveQuadraticTransformation(problem) {
        const { a, h, k } = problem.parameters;

        return {
            transformationType: 'Quadratic Transformation',
            equation: `g(x) = ${a || 1}(x - ${h || 0})² + ${k || 0}`,
            parentFunction: 'x²',
            vertexForm: true,
            vertexLocation: `(${h || 0}, ${k || 0})`,
            parameters: { a: a || 1, h: h || 0, k: k || 0 },
            category: 'quadratic_transformations',
            graphicalEffect: {
                vertex: `(${h || 0}, ${k || 0})`,
                axisOfSymmetry: `x = ${h || 0}`,
                opening: (a || 1) > 0 ? 'upward' : 'downward',
                width: Math.abs(a || 1) > 1 ? 'narrower' : Math.abs(a || 1) < 1 ? 'wider' : 'same'
            }
        };
    }

    solveExponentialTransformation(problem) {
        const { a, b, h, k } = problem.parameters;

        return {
            transformationType: 'Exponential Transformation',
            equation: `g(x) = ${a || 1}·e^(${b || 1}(x - ${h || 0})) + ${k || 0}`,
            parentFunction: 'eˣ',
            parameters: { a: a || 1, b: b || 1, h: h || 0, k: k || 0 },
            category: 'exponential_transformations',
            graphicalEffect: {
                horizontalAsymptote: `y = ${k || 0}`,
                growthRate: Math.abs(b || 1) > 1 ? 'faster' : 'slower',
                growthType: (b || 1) > 0 ? 'growth' : 'decay',
                verticalShift: k || 0
            }
        };
    }

    solveLogarithmicTransformation(problem) {
        const { a, b, h, k } = problem.parameters;

        return {
            transformationType: 'Logarithmic Transformation',
            equation: `g(x) = ${a || 1}·ln(${b || 1}(x - ${h || 0})) + ${k || 0}`,
            parentFunction: 'ln(x)',
            parameters: { a: a || 1, b: b || 1, h: h || 0, k: k || 0 },
            category: 'logarithmic_transformations',
            graphicalEffect: {
                verticalAsymptote: `x = ${h || 0}`,
                domain: `x > ${h || 0}`,
                verticalShift: k || 0
            }
        };
    }

    solveTrigonometricTransformation(problem) {
        const { a, b, h, k } = problem.parameters;
        const period = (2 * Math.PI) / Math.abs(b || 1);

        return {
            transformationType: 'Trigonometric Transformation',
            equation: `g(x) = ${a || 1}·sin(${b || 1}(x - ${h || 0})) + ${k || 0}`,
            parentFunction: 'sin(x)',
            parameters: { a: a || 1, b: b || 1, h: h || 0, k: k || 0 },
            category: 'trigonometric_transformations',
            graphicalEffect: {
                amplitude: Math.abs(a || 1),
                period: period,
                periodFormatted: this.formatPeriod(period),
                phaseShift: `${h > 0 ? 'right' : 'left'} ${Math.abs(h || 0)} units`,
                verticalShift: k || 0,
                midline: `y = ${k || 0}`
            }
        };
    }

    solveRationalTransformation(problem) {
        const { a, b, h, k } = problem.parameters;

        return {
            transformationType: 'Rational Function Transformation',
            equation: `g(x) = ${a || 1}/(${b || 1}(x - ${h || 0})) + ${k || 0}`,
            parentFunction: '1/x',
            parameters: { a: a || 1, b: b || 1, h: h || 0, k: k || 0 },
            category: 'rational_function_transformations',
            graphicalEffect: {
                verticalAsymptote: `x = ${h || 0}`,
                horizontalAsymptote: `y = ${k || 0}`,
                branches: 'Two branches separated by vertical asymptote'
            }
        };
    }

    formatPeriod(period) {
        const piMultiple = period / Math.PI;
        if (Math.abs(piMultiple - Math.round(piMultiple)) < 0.001) {
            const rounded = Math.round(piMultiple);
            if (rounded === 1) return 'π';
            if (rounded === 2) return '2π';
            return `${rounded}π`;
        }
        
        // Check for common fractions of pi
        const commonFractions = [
            [1, 2, 'π/2'],
            [1, 3, 'π/3'],
            [1, 4, 'π/4'],
            [1, 6, 'π/6'],
            [2, 3, '2π/3'],
            [3, 4, '3π/4']
        ];
        
        for (const [num, den, str] of commonFractions) {
            if (Math.abs(piMultiple - num/den) < 0.001) {
                return str;
            }
        }
        
        return period.toFixed(3);
    }

    // STEP GENERATION

    generateFunctionTransformationSteps(problem, solution) {
        let baseSteps = this.generateBaseFunctionTransformationSteps(problem, solution);

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

    generateBaseFunctionTransformationSteps(problem, solution) {
        const { type } = problem;
        const category = this.transformationTypes[type]?.category;

        switch(category) {
            case 'vertical_shifts':
                return this.generateVerticalShiftSteps(problem, solution);
            case 'horizontal_shifts':
                return this.generateHorizontalShiftSteps(problem, solution);
            case 'vertical_stretches_compressions':
                return this.generateVerticalStretchSteps(problem, solution);
            case 'horizontal_stretches_compressions':
                return this.generateHorizontalStretchSteps(problem, solution);
            case 'reflections':
                return this.generateReflectionSteps(problem, solution);
            case 'combined_transformations':
                return this.generateCombinedTransformationSteps(problem, solution);
            default:
                return this.generateGenericTransformationSteps(problem, solution);
        }
    }

    generateVerticalShiftSteps(problem, solution) {
        const steps = [];
        const { k } = solution.parameter;
        const { direction, amount } = solution;

        steps.push({
            stepNumber: 1,
            step: 'Identify transformation type',
            description: 'Determine what type of transformation is being applied',
            expression: solution.equation,
            reasoning: `The constant ${k} is added OUTSIDE the function, affecting the output`,
            goalStatement: 'Recognize this as a vertical shift'
        });

        steps.push({
            stepNumber: 2,
            step: 'Determine direction and amount',
            description: `Identify shift direction and magnitude`,
            beforeExpression: `f(x)`,
            operation: `${k >= 0 ? '+' : ''} ${k}`,
            afterExpression: `f(x) ${k >= 0 ? '+' : ''} ${k}`,
            reasoning: `Since ${k} is ${k >= 0 ? 'positive' : 'negative'}, the graph shifts ${direction}`,
            amount: `${amount} unit${amount !== 1 ? 's' : ''}`
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply to key points',
            description: 'Transform coordinates of key points',
            pointTransformation: solution.pointTransformation,
            reasoning: `Add ${k} to all y-coordinates; x-coordinates stay the same`,
            example: `If original point is (3, 5), new point is (3, ${5 + k})`
        });

        steps.push({
            stepNumber: 4,
            step: 'Describe graphical effect',
            description: 'Explain how the graph looks different',
            expression: `Graph moves ${direction} by ${amount} unit${amount !== 1 ? 's' : ''}`,
            finalAnswer: true,
            reasoning: 'Every point on the graph shifts vertically by the same amount'
        });

        return steps;
    }

    generateHorizontalShiftSteps(problem, solution) {
        const steps = [];
        const { h } = solution.parameter;
        const { direction, amount } = solution;

        steps.push({
            stepNumber: 1,
            step: 'Identify transformation type',
            description: 'Determine what type of transformation is being applied',
            expression: solution.equation,
            reasoning: `The value ${h} is subtracted/added INSIDE the function with x, affecting the input`,
            goalStatement: 'Recognize this as a horizontal shift',
            importantNote: 'Horizontal shifts work OPPOSITE to what you might expect!'
        });

        steps.push({
            stepNumber: 2,
            step: 'Determine direction (CAREFULLY!)',
            description: `Identify shift direction using the "opposite rule"`,
            beforeExpression: `f(x)`,
            operation: `Replace x with (x ${h >= 0 ? '-' : '+'} ${Math.abs(h)})`,
            afterExpression: `f(x ${h >= 0 ? '-' : '+'} ${Math.abs(h)})`,
            reasoning: `f(x - h) shifts RIGHT, f(x + h) shifts LEFT (opposite of the sign!)`,
            directionRule: `The graph shifts ${direction}`,
            amount: `${amount} unit${amount !== 1 ? 's' : ''}`
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply to key points',
            description: 'Transform coordinates of key points',
            pointTransformation: solution.pointTransformation,
            reasoning: `Add ${h} to all x-coordinates; y-coordinates stay the same`,
            example: `If original point is (2, 7), new point is (${2 + h}, 7)`,
            checkMethod: 'Ask: "What x-value makes the inside zero?" That\'s the new center.'
        });

        steps.push({
            stepNumber: 4,
            step: 'Describe graphical effect',
            description: 'Explain how the graph looks different',
            expression: `Graph moves ${direction} by ${amount} unit${amount !== 1 ? 's' : ''}`,
            finalAnswer: true,
            reasoning: 'Every point on the graph shifts horizontally by the same amount',
            reminder: `f(x - ${amount}) shifts RIGHT (don't forget the opposite rule!)`
        });

        return steps;
    }

    generateVerticalStretchSteps(problem, solution) {
        const steps = [];
        const { a } = solution.parameter;
        const { stretchType, factor, hasReflection } = solution;

        steps.push({
            stepNumber: 1,
            step: 'Identify transformation type',
            description: 'Determine what type of transformation is being applied',
            expression: solution.equation,
            reasoning: `The coefficient ${a} multiplies the ENTIRE function, affecting the output`,
            goalStatement: `Recognize this as a vertical ${stretchType}${hasReflection ? ' combined with reflection' : ''}`
        });

        steps.push({
            stepNumber: 2,
            step: 'Analyze the coefficient',
            description: 'Determine stretch/compression and reflection',
            coefficient: a,
            absoluteValue: Math.abs(a),
            stretchType: stretchType,
            reasoning: `|a| = ${Math.abs(a)}, which is ${Math.abs(a) > 1 ? 'greater than 1 (stretch)' : Math.abs(a) < 1 ? 'less than 1 (compression)' : 'equal to 1 (no change)'}`,
            reflection: hasReflection ? `Negative sign causes reflection over x-axis` : 'No reflection'
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply to key points',
            description: 'Transform coordinates of key points',
            pointTransformation: solution.pointTransformation,
            reasoning: `Multiply all y-coordinates by ${a}; x-coordinates stay the same`,
            example: `If original point is (4, 3), new point is (4, ${3 * a})`
        });

        steps.push({
            stepNumber: 4,
            step: 'Describe graphical effect',
            description: 'Explain how the graph looks different',
            expression: `Graph becomes ${stretchType === 'stretch' ? 'taller/steeper' : 'shorter/flatter'}${hasReflection ? ' and flips upside down' : ''}`,
            finalAnswer: true,
            reasoning: `All y-values are ${stretchType === 'stretch' ? 'multiplied by ' + factor : 'multiplied by ' + factor} (scale factor ${factor})`,
            appearance: solution.graphicalEffect.appearance
        });

        return steps;
    }

    generateHorizontalStretchSteps(problem, solution) {
        const steps = [];
        const { b } = solution.parameter;
        const { stretchType, factor, hasReflection } = solution;

        steps.push({
            stepNumber: 1,
            step: 'Identify transformation type',
            description: 'Determine what type of transformation is being applied',
            expression: solution.equation,
            reasoning: `The coefficient ${b} multiplies x INSIDE the function, affecting the input`,
            goalStatement: `Recognize this as a horizontal ${stretchType}${hasReflection ? ' combined with reflection' : ''}`,
            importantNote: 'Horizontal stretches work OPPOSITE to vertical stretches!'
        });

        steps.push({
            stepNumber: 2,
            step: 'Analyze the coefficient (INVERSE relationship)',
            description: 'Determine stretch/compression',
            coefficient: b,
            absoluteValue: Math.abs(b),
            stretchType: stretchType,
            reasoning: `|b| = ${Math.abs(b)}, which is ${Math.abs(b) > 1 ? 'greater than 1 → COMPRESSION (inverse!)' : Math.abs(b) < 1 ? 'less than 1 → STRETCH (inverse!)' : 'equal to 1 (no change)'}`,
            reflection: hasReflection ? `Negative sign causes reflection over y-axis` : 'No reflection',
            inverseRule: `Larger b means narrower graph (opposite of vertical!)`
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply to key points',
            description: 'Transform coordinates of key points',
            pointTransformation: solution.pointTransformation,
            reasoning: `Divide all x-coordinates by ${b}; y-coordinates stay the same`,
            example: `If original point is (6, 2), new point is (${6/b}, 2)`,
            methodNote: 'Remember to DIVIDE x-values, not multiply!'
        });

        steps.push({
            stepNumber: 4,
            step: 'Describe graphical effect',
            description: 'Explain how the graph looks different',
            expression: `Graph becomes ${stretchType === 'compression' ? 'narrower' : 'wider'}${hasReflection ? ' and flips left-right' : ''}`,
            finalAnswer: true,
            reasoning: `All x-values are divided by ${b}`,
            appearance: solution.graphicalEffect.appearance,
            reminder: `f(${Math.abs(b)}x) ${stretchType}s horizontally`
        });

        return steps;
    }

    generateReflectionSteps(problem, solution) {
        const steps = [];
        const { reflectionAxis } = solution;

        steps.push({
            stepNumber: 1,
            step: 'Identify transformation type',
            description: 'Determine the type of reflection',
            expression: solution.equation,
            reasoning: `Negative sign ${reflectionAxis === 'x-axis' ? 'outside function' : 'on x inside function'}`,
            goalStatement: `Recognize this as a reflection over the ${reflectionAxis}`
        });

        steps.push({
            stepNumber: 2,
            step: 'Determine which coordinate changes',
            description: 'Identify what gets negated',
            reflectionAxis: reflectionAxis,
            coordinateAffected: reflectionAxis === 'x-axis' ? 'y-coordinate' : 'x-coordinate',
            reasoning: reflectionAxis === 'x-axis' ? 
                'Negating the output (y-values) reflects over x-axis' : 
                'Negating the input (x-values) reflects over y-axis',
            rule: reflectionAxis === 'x-axis' ? '-f(x) → negate y' : 'f(-x) → negate x'
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply to key points',
            description: 'Transform coordinates of key points',
            pointTransformation: solution.pointTransformation,
            reasoning: reflectionAxis === 'x-axis' ?
                'Negate all y-coordinates; x-coordinates stay the same' :
                'Negate all x-coordinates; y-coordinates stay the same',
            example: reflectionAxis === 'x-axis' ?
                'If original point is (3, 4), new point is (3, -4)' :
                'If original point is (3, 4), new point is (-3, 4)'
        });

        steps.push({
            stepNumber: 4,
            step: 'Describe graphical effect',
            description: 'Explain the visual transformation',
            expression: `Graph flips across the ${reflectionAxis}`,
            finalAnswer: true,
            reasoning: `Creates a mirror image with ${reflectionAxis} as the mirror line`,
            appearance: reflectionAxis === 'x-axis' ? 
                'Upside-down version' : 
                'Left-right mirror image'
        });

        return steps;
    }

    generateCombinedTransformationSteps(problem, solution) {
        const steps = [];
        const { transformations } = solution;

        steps.push({
            stepNumber: 1,
            step: 'Identify all transformations',
            description: 'List all transformations present in the function',
            expression: solution.equation,
            transformationsList: transformations.map(t => t.description),
            transformationCount: transformations.length,
            reasoning: 'Multiple transformations are being applied together',
            goalStatement: 'Determine the correct order to apply them'
        });

        steps.push({
            stepNumber: 2,
            step: 'Determine order of application',
            description: 'Establish the sequence for applying transformations',
            standardOrder: solution.orderOfApplication,
            reasoning: 'For graphing, work from inside-out: horizontal changes first, then vertical',
            mnemonic: 'HHRVV: Horizontal shift, Horizontal stretch, Reflection, Vertical stretch, Vertical shift'
        });

        // Add steps for each transformation
        transformations.forEach((transform, index) => {
            steps.push({
                stepNumber: 3 + index,
                step: `Apply transformation ${index + 1}: ${transform.type.replace(/_/g, ' ')}`,
                description: transform.description,
                transformationType: transform.type,
                parameter: transform.parameter,
                reasoning: `This transformation ${this.getTransformationEffect(transform.type)}`,
                cumulativeEffect: `After ${index + 1} transformation${index !== 0 ? 's' : ''}`
            });
        });

        steps.push({
            stepNumber: 3 + transformations.length,
            step: 'Describe complete transformation',
            description: 'Summarize all effects on the graph',
            expression: solution.equation,
            pointTransformation: solution.pointTransformation,
            allTransformations: transformations.map(t => t.description).join('; '),
            finalAnswer: true,
            reasoning: 'The combination of all transformations produces the final graph'
        });

        return steps;
    }

    getTransformationEffect(transformType) {
        const effects = {
            horizontal_shift: 'moves the graph left or right',
            vertical_shift: 'moves the graph up or down',
            horizontal_stretch: 'changes the width of the graph',
            vertical_stretch: 'changes the height of the graph',
            reflection_x: 'flips the graph over the x-axis',
            reflection_y: 'flips the graph over the y-axis'
        };
        return effects[transformType] || 'modifies the graph';
    }

    generateGenericTransformationSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Function transformation',
            description: 'Apply the specified transformation',
            expression: solution.equation || problem.transformation,
            reasoning: 'Transform the parent function according to given parameters',
            solution: solution
        }];
    }

    // ENHANCED EXPLANATION METHODS (similar to linear workbook, adapted for transformations)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanationTransformation(step, problem),
                procedural: this.getProceduralExplanationTransformation(step),
                visual: this.getVisualExplanationTransformation(step, problem),
                algebraic: this.getAlgebraicExplanationTransformation(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisitesTransformation(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyTransformation(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPromptsTransformation(step);
        }

        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestionTransformation(step);
        }

        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findRealWorldConnectionTransformation(step, problem);
        }

        return enhanced;
    }

    getConceptualExplanationTransformation(step, problem) {
        const conceptualExplanations = {
            'Identify transformation type': 'Understanding transformation type helps us predict how the graph will change.',
            'Determine direction and amount': 'The magnitude and sign of the parameter determine the transformation effect.',
            'Apply to key points': 'Transforming individual points helps us see the overall graph transformation.',
            'Describe graphical effect': 'The visual change in the graph is the result of systematic coordinate changes.'
        };

        return conceptualExplanations[step.step] || 'This step helps us understand how the function transforms.';
    }

    getProceduralExplanationTransformation(step) {
        return `1. Identify the transformation parameter
2. Determine its effect on coordinates
3. Apply the transformation rule
4. Verify the result`;
    }

    getVisualExplanationTransformation(step, problem) {
        return 'Visualize the parent function graph, then see how each point moves according to the transformation rule.';
    }

    getAlgebraicExplanationTransformation(step) {
        return 'Transformations are function compositions: g(x) = T(f(x)) where T is the transformation operator.';
    }

    identifyPrerequisitesTransformation(step, problemType) {
        const category = this.transformationTypes[problemType]?.category;
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Function notation', 'Coordinate graphing'];
    }

    identifyKeyVocabularyTransformation(step) {
        const vocabulary = {
            'Identify transformation type': ['transformation', 'parent function', 'parameter'],
            'Determine direction': ['direction', 'magnitude', 'shift'],
            'Apply to key points': ['coordinates', 'transformation rule', 'mapping'],
            'Describe graphical effect': ['graph', 'visual effect', 'curve']
        };

        return vocabulary[step.step] || ['transformation', 'function'];
    }

    generateThinkingPromptsTransformation(step) {
        return {
            before: 'What transformation am I applying? How will it affect the coordinates?',
            during: 'Am I applying the transformation correctly? Which coordinates change?',
            after: 'Does the result make sense? Can I verify with a test point?'
        };
    }

    generateSelfCheckQuestionTransformation(step) {
        const questions = {
            'Identify transformation type': 'Can I identify where the transformation parameter appears (inside or outside the function)?',
            'Determine direction': 'Do I understand which direction the graph moves?',
            'Apply to key points': 'Did I transform the correct coordinate (x or y)?',
            'Describe graphical effect': 'Can I visualize how the graph looks different?'
        };

        return questions[step.step] || 'Does this transformation make sense?';
    }

    findRealWorldConnectionTransformation(step, problem) {
        const connections = {
            vertical_shifts: 'Like adding a fixed cost to a variable price, or adjusting temperature by a constant amount',
            horizontal_shifts: 'Like time delays in video/audio, or phase shifts in waves',
            vertical_stretches: 'Like adjusting volume or brightness, changing amplitude',
            horizontal_stretches: 'Like speeding up or slowing down playback speed'
        };

        const category = this.transformationTypes[problem.type]?.category;
        return connections[category] || 'Transformations model many real-world adjustments and modifications.';
    }

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateELI5ExplanationTransformation(step, problem),
                analogy: this.findRelevantAnalogyTransformation(step, problem),
                simpleLanguage: this.convertToSimpleLanguage(step.description),
                visualization: this.suggestVisualizationTransformation(step)
            }
        }));
    }

    generateELI5ExplanationTransformation(step, problem) {
        const ELI5Explanations = {
            'Identify transformation type': "We're figuring out what kind of change we're making to our graph - is it moving, stretching, or flipping?",
            'Determine direction and amount': "Now we find out which way the graph moves and how far!",
            'Apply to key points': "Let's move some important points on the graph to their new spots!",
            'Describe graphical effect': "Here's what the graph looks like after we make all the changes!"
        };

        return ELI5Explanations[step.step] || "We're making our graph transform and change!";
    }

    findRelevantAnalogyTransformation(step, problem) {
        const category = this.transformationTypes[problem.type]?.category;
        
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(category) || analogy.suitableFor.includes('all_transformations')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        
        return "Think of the graph as a picture you can move, stretch, and flip!";
    }

    suggestVisualizationTransformation(step) {
        const visualizations = {
            'Identify transformation type': 'Draw the parent function and prepare to see how it changes',
            'Determine direction and amount': 'Draw an arrow showing which way and how far the graph moves',
            'Apply to key points': 'Mark original points with dots, then show where they move to',
            'Describe graphical effect': 'Draw the final transformed graph alongside the original for comparison'
        };

        return visualizations[step.step] || 'Sketch both the original and transformed graphs';
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generateStepBridgeTransformation(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgressionTransformation(steps[i], steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateStepBridgeTransformation(currentStep, nextStep) {
        return {
            currentState: `We've identified: ${currentStep.description}`,
            nextGoal: `Next: ${nextStep.description}`,
            why: 'This helps us build a complete understanding of the transformation',
            howItHelps: 'Each step adds detail to our picture of how the graph changes'
        };
    }

    explainStepProgressionTransformation(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to fully describe the transformation`;
    }

    addErrorPrevention(step, problemType) {
        const category = this.transformationTypes[problemType]?.category;
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsTransformation(step, problemType),
                checkPoints: this.generateCheckPointsTransformation(step),
                warningFlags: this.identifyWarningFlagsTransformation(step, problemType)
            }
        };
    }

    generatePreventionTipsTransformation(step, problemType) {
        const tips = {
            'Determine direction': [
                'For horizontal shifts: remember f(x-h) shifts RIGHT (opposite rule!)',
                'For vertical shifts: positive is up, negative is down (normal)',
                'Draw arrows to show direction before graphing'
            ],
            'Analyze the coefficient': [
                'For vertical: |a| > 1 is stretch, |a| < 1 is compression',
                'For horizontal: OPPOSITE! |b| > 1 is compression, |b| < 1 is stretch',
                'Check for negative signs separately (reflections)'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Check coordinate changes'];
    }

    generateCheckPointsTransformation(step) {
        return [
            'Did I identify the transformation type correctly?',
            'Am I changing the right coordinate (x or y)?',
            'Does the direction make sense?',
            'Can I verify with a test point?'
        ];
    }

    identifyWarningFlagsTransformation(step, problemType) {
        const warnings = {
            horizontal_shifts: ['Remember: f(x-h) shifts OPPOSITE direction!'],
            horizontal_stretches_compressions: ['Remember: larger b makes graph NARROWER (inverse relationship)!'],
            combined_transformations: ['Apply in correct order: horizontal first, then vertical']
        };

        const category = this.transformationTypes[problemType]?.category;
        return warnings[category] || [];
    }

    addScaffolding(baseSteps, problem) {
        return baseSteps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsTransformation(step, problem),
                subSteps: this.breakIntoSubStepsTransformation(step),
                hints: this.generateProgressiveHintsTransformation(step, problem)
            }
        }));
    }

    generateGuidingQuestionsTransformation(step, problem) {
        const questions = {
            'Identify transformation type': [
                'Is the change inside or outside the function?',
                'Is it addition/subtraction or multiplication?',
                'Which coordinate (x or y) is affected?'
            ],
            'Determine direction': [
                'Is the parameter positive or negative?',
                'Is this a horizontal or vertical change?',
                'Do I need to apply the "opposite rule"?'
            ],
            'Apply to key points': [
                'Which coordinate changes?',
                'How much does it change?',
                'Can I verify with an example point?'
            ]
        };

        return questions[step.step] || ['What am I trying to accomplish?', 'How does this help?'];
    }

    breakIntoSubStepsTransformation(step) {
        if (step.pointTransformation) {
            return [
                'Identify which coordinate (x or y) changes',
                'Determine the transformation rule',
                'Apply the rule to test points',
                'Verify the transformation makes sense'
            ];
        }

        return ['Understand the goal', 'Apply the technique', 'Verify the result'];
    }

    generateProgressiveHintsTransformation(step, problem) {
        const category = this.transformationTypes[problem.type]?.category;
        const hintSet = this.hints[category] || {};

        return {
            level1: hintSet.level1 || 'Think about what type of transformation this is.',
            level2: hintSet.level2 || 'Consider where the parameter appears in the function.',
            level3: hintSet.level3 || 'Apply the transformation rule to coordinates.',
            level4: hintSet.level4 || 'Transform the specific points or graph.'
        };
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
                'transformation': 'change',
                'parameter': 'number',
                'coordinate': 'position',
                'magnitude': 'size',
                'coefficient': 'number',
                'horizontal': 'left-right',
                'vertical': 'up-down'
            },
            ELI5: {
                'transformation': 'change to our graph',
                'parameter': 'special number',
                'coordinate': 'where the point is',
                'magnitude': 'how much',
                'coefficient': 'the number multiplying',
                'horizontal': 'sideways (left or right)',
                'vertical': 'up and down',
                'stretch': 'pull apart',
                'compression': 'squish together',
                'reflection': 'flip like a mirror'
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

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by adding more detail`,
            progression: 'We are building a complete picture of the transformation',
            relationship: 'Each step reveals another aspect of how the graph changes'
        };
    }

    // GRAPH GENERATION

    generateFunctionTransformationGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        this.graphData = {
            parentFunction: this.currentProblem.parentFunction,
            transformationType: this.currentSolution.transformationType,
            transformedFunction: this.currentSolution.equation,
            category: this.currentSolution.category,
            keyFeatures: this.extractKeyFeatures(this.currentSolution),
            visualizationNotes: this.generateVisualizationNotes(this.currentSolution)
        };
    }

    extractKeyFeatures(solution) {
        const features = {};

        if (solution.vertexLocation) {
            features.vertex = solution.vertexLocation;
        }

        if (solution.graphicalEffect) {
            features.graphicalEffect = solution.graphicalEffect;
        }

        if (solution.transformations) {
            features.transformations = solution.transformations.map(t => ({
                type: t.type,
                description: t.description
            }));
        }

        return features;
    }

    generateVisualizationNotes(solution) {
        const notes = [];

        if (solution.pointTransformation) {
            notes.push(`Point transformation rule: ${solution.pointTransformation}`);
        }

        if (solution.direction) {
            notes.push(`Direction: ${solution.direction} by ${solution.amount} units`);
        }

        if (solution.graphicalEffect) {
            notes.push(`Graphical effect: ${JSON.stringify(solution.graphicalEffect)}`);
        }

        return notes;
    }

    // WORKBOOK GENERATION

    generateFunctionTransformationWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createTransformationConceptsSection(),
            this.createEnhancedStepsSection(),
            this.createSolutionSummarySection(),
            this.createGraphicalAnalysisSection(),
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
            title: 'Enhanced Function Transformations Mathematical Workbook',
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
            ['Problem Type', this.transformationTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.transformationTypes[this.currentProblem.type]?.category || 'transformation'],
            ['Parent Function', this.currentProblem.parentFunction || 'f(x)'],
            ['Transformation', this.currentSolution?.equation || this.currentProblem.transformation],
            ['Description', this.currentProblem.context?.description || 'Function transformation problem']
        ];

        if (this.currentProblem.parameters) {
            problemData.push(['', '']);
            problemData.push(['Parameters', '']);
            Object.entries(this.currentProblem.parameters).forEach(([key, value]) => {
                if (value !== undefined && value !== null) {
                    problemData.push([key, value]);
                }
            });
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSection() {
        if (!this.prerequisiteChecks) return null;

        const category = this.transformationTypes[this.currentProblem.type]?.category;
        const prereqs = this.prerequisites[category];

        if (!prereqs) return null;

        const prereqData = [
            ['Required Skills', prereqs.skills.join(', ')],
            ['Prior Knowledge', prereqs.priorKnowledge.join(', ')],
            ['', ''],
            ['Check Questions', '']
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

    createTransformationConceptsSection() {
        const category = this.transformationTypes[this.currentProblem.type]?.category;
        const lesson = this.lessons[category];

        if (!lesson) return null;

        const conceptData = [
            ['Lesson', lesson.title],
            ['', ''],
            ['Key Concepts', '']
        ];

        lesson.concepts.forEach(concept => {
            conceptData.push(['•', concept]);
        });

        conceptData.push(['', '']);
        conceptData.push(['Theory', lesson.theory]);

        if (lesson.keyFormulas) {
            conceptData.push(['', '']);
            conceptData.push(['Key Formulas', '']);
            Object.entries(lesson.keyFormulas).forEach(([name, formula]) => {
                conceptData.push([name, formula]);
            });
        }

        if (lesson.graphicalEffect) {
            conceptData.push(['', '']);
            conceptData.push(['Graphical Effects', '']);
            Object.entries(lesson.graphicalEffect).forEach(([aspect, effect]) => {
                conceptData.push([aspect, effect]);
            });
        }

        return {
            title: 'Transformation Concepts',
            type: 'concepts',
            data: conceptData
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

            stepsData.push([`Step ${step.stepNumber}`, step.description]);

            if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            if (step.pointTransformation) {
                stepsData.push(['Point Rule', step.pointTransformation]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.importantNote) {
                stepsData.push(['⚠️ Important', step.importantNote]);
            }

            if (step.ELI5 && this.explanationLevel === 'ELI5') {
                stepsData.push(['ELI5', step.ELI5.explanation]);
                if (step.ELI5.analogy) {
                    stepsData.push(['Analogy', step.ELI5.analogy]);
                }
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

            stepsData.push(['', '']);
        });

        return {
            title: `Enhanced Step-by-Step Solution (${this.explanationLevel} level)`,
            type: 'steps',
            data: stepsData
        };
    }

    createSolutionSummarySection() {
        if (!this.currentSolution) return null;

        const summaryData = [
            ['Transformation Type', this.currentSolution.transformationType],
            ['Equation', this.currentSolution.equation]
        ];

        if (this.currentSolution.direction) {
            summaryData.push(['Direction', this.currentSolution.direction]);
            summaryData.push(['Amount', `${this.currentSolution.amount} units`]);
        }

        if (this.currentSolution.stretchType) {
            summaryData.push(['Type', this.currentSolution.stretchType]);
            summaryData.push(['Factor', this.currentSolution.factor]);
        }

        if (this.currentSolution.transformations) {
            summaryData.push(['', '']);
            summaryData.push(['All Transformations', '']);
            this.currentSolution.transformations.forEach((t, i) => {
                summaryData.push([`${i + 1}`, t.description]);
            });
        }

        if (this.currentSolution.pointTransformation) {
            summaryData.push(['', '']);
            summaryData.push(['Point Rule', this.currentSolution.pointTransformation]);
        }

        return {
            title: 'Solution Summary',
            type: 'solution',
            data: summaryData
        };
    }

    createGraphicalAnalysisSection() {
        if (!this.currentSolution || !this.currentSolution.graphicalEffect) return null;

        const analysisData = [
            ['Graphical Analysis', ''],
            ['', '']
        ];

        Object.entries(this.currentSolution.graphicalEffect).forEach(([aspect, effect]) => {
            analysisData.push([aspect, effect]);
        });

        if (this.currentSolution.vertexLocation) {
            analysisData.push(['', '']);
            analysisData.push(['Vertex Location', this.currentSolution.vertexLocation]);
        }

        return {
            title: 'Graphical Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSection() {
        const verificationData = [
            ['Verification Method', 'Test point substitution'],
            ['', ''],
            ['Suggested Approach', ''],
            ['1', 'Choose a simple point from parent function (e.g., (0,0), (1,1))'],
            ['2', 'Apply transformation rule to the point'],
            ['3', 'Verify transformed point lies on transformed function'],
            ['4', 'Repeat with additional points for confidence']
        ];

        if (this.currentSolution.pointTransformation) {
            verificationData.push(['', '']);
            verificationData.push(['Transformation Rule', this.currentSolution.pointTransformation]);
            verificationData.push(['Example', 'Apply this rule to parent function points']);
        }

        return {
            title: 'Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const category = this.transformationTypes[this.currentProblem.type]?.category;
        const applications = Object.values(this.realWorldProblems).filter(app => {
            return true; // Show relevant applications
        }).slice(0, 3);

        if (applications.length === 0) return null;

        const appData = [
            ['Real-World Applications', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Context', app.context]);
            if (app.transformation) {
                appData.push(['Transformation', app.transformation]);
            }
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

        const notes = this.generateTransformationPedagogicalNotes(this.currentProblem.type);

        return {
            title: 'Teaching Notes',
            type: 'pedagogical',
            data: [
                ['Learning Objectives', notes.objectives.join('; ')],
                ['Key Concepts', notes.keyConcepts.join('; ')],
                ['Prerequisites', notes.prerequisites.join('; ')],
                ['Common Difficulties', notes.commonDifficulties.join('; ')],
                ['Teaching Strategies', notes.teachingStrategies.join('; ')],
                ['Extension Ideas', notes.extensions.join('; ')]
            ]
        };
    }

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const alternatives = this.generateTransformationAlternativeMethods(this.currentProblem.type);

        return {
            title: 'Alternative Solution Methods',
            type: 'alternatives',
            data: [
                ['Primary Method', alternatives.primaryMethod],
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
        const problemData = [
            ['Practice Problems', ''],
            ['', ''],
            ['Easy', '']
        ];

        this.questionBank.byDifficulty.easy.slice(0, 3).forEach((p, i) => {
            problemData.push([`${i + 1}`, p]);
        });

        problemData.push(['', '']);
        problemData.push(['Medium', '']);

        this.questionBank.byDifficulty.medium.slice(0, 3).forEach((p, i) => {
            problemData.push([`${i + 1}`, p]);
        });

        problemData.push(['', '']);
        problemData.push(['Hard', '']);

        this.questionBank.byDifficulty.hard.slice(0, 2).forEach((p, i) => {
            problemData.push([`${i + 1}`, p]);
        });

        return {
            title: 'Practice Problems',
            type: 'practice',
            data: problemData
        };
    }

    generateTransformationPedagogicalNotes(problemType) {
        const category = this.transformationTypes[problemType]?.category;

        const pedagogicalDatabase = {
            vertical_shifts: {
                objectives: [
                    'Identify and apply vertical shifts',
                    'Understand effect on y-coordinates',
                    'Recognize vertical shift in function notation'
                ],
                keyConcepts: [
                    'Adding to output shifts graph vertically',
                    'Positive shifts up, negative shifts down',
                    'All points move same vertical distance'
                ],
                prerequisites: [
                    'Function notation',
                    'Coordinate graphing',
                    'Understanding of y-values as outputs'
                ],
                commonDifficulties: [
                    'Confusing with horizontal shifts',
                    'Forgetting to apply to all points',
                    'Sign errors'
                ],
                teachingStrategies: [
                    'Use elevator analogy',
                    'Practice with concrete graphs',
                    'Emphasize "outside function" placement'
                ],
                extensions: [
                    'Combined with other transformations',
                    'Asymptote shifts',
                    'Multiple function transformations'
                ]
            },
            horizontal_shifts: {
                objectives: [
                    'Identify and apply horizontal shifts',
                    'Understand the "opposite direction" rule',
                    'Recognize horizontal shift in function notation'
                ],
                keyConcepts: [
                    'Modifying input shifts graph horizontally',
                    'f(x - h) shifts RIGHT (opposite of sign!)',
                    'All points move same horizontal distance'
                ],
                prerequisites: [
                    'Function notation',
                    'Understanding of x as input',
                    'Substitution'
                ],
                commonDifficulties: [
                    'The "opposite direction" confusion',
                    'Applying to wrong coordinate',
                    'Mixing up with vertical shifts'
                ],
                teachingStrategies: [
                    'Teach "what makes inside zero?" method',
                    'Use phase shift in trig as example',
                    'Repeated practice with direction',
                    'Visual animations'
                ],
                extensions: [
                    'Phase shifts in trigonometry',
                    'Time delays in real-world',
                    'Combined transformations'
                ]
            },
            vertical_stretches_compressions: {
                objectives: [
                    'Identify and apply vertical stretches and compressions',
                    'Understand effect of coefficient on y-values',
                    'Distinguish stretch from compression'
                ],
                keyConcepts: [
                    'Multiplying output scales graph vertically',
                    '|a| > 1 stretches, 0 < |a| < 1 compresses',
                    'Negative coefficient adds reflection'
                ],
                prerequisites: [
                    'Multiplication',
                    'Understanding of scale factors',
                    'Function notation'
                ],
                commonDifficulties: [
                    'Confusing stretch with compression',
                    'Applying to x instead of y',
                    'Forgetting about negative causing reflection'
                ],
                teachingStrategies: [
                    'Use rubber band or spring analogy',
                    'Practice identifying |a| > 1 vs < 1',
                    'Show amplitude in sine/cosine'
                ],
                extensions: [
                    'Amplitude in trigonometry',
                    'Scaling in physics',
                    'Combined with reflections'
                ]
            },
            horizontal_stretches_compressions: {
                objectives: [
                    'Identify and apply horizontal stretches and compressions',
                    'Understand inverse relationship',
                    'Distinguish from vertical stretches'
                ],
                keyConcepts: [
                    'Multiplying input scales graph horizontally',
                    '|b| > 1 COMPRESSES (inverse!)',
                    'Larger b means narrower graph'
                ],
                prerequisites: [
                    'Vertical stretches',
                    'Division',
                    'Inverse relationships'
                ],
                commonDifficulties: [
                    'The inverse relationship',
                    'Confusing with vertical stretches',
                    'Multiplying instead of dividing x-values'
                ],
                teachingStrategies: [
                    'Emphasize "b times faster" concept',
                    'Use accordion or spring analogy',
                    'Show period in trigonometry',
                    'Contrast with vertical stretches explicitly'
                ],
                extensions: [
                    'Period changes in trig functions',
                    'Frequency in waves',
                    'Time compression in media'
                ]
            },
            combined_transformations: {
                objectives: [
                    'Apply multiple transformations in correct order',
                    'Identify all transformations in complex function',
                    'Understand composition of transformations'
                ],
                keyConcepts: [
                    'Multiple transformations can combine',
                    'Order matters for correct result',
                    'Standard order: HHRVV'
                ],
                prerequisites: [
                    'All individual transformations',
                    'Order of operations',
                    'Function composition'
                ],
                commonDifficulties: [
                    'Applying in wrong order',
                    'Missing some transformations',
                    'Sign errors with multiple changes'
                ],
                teachingStrategies: [
                    'Teach mnemonic HHRVV',
                    'Build up complexity gradually',
                    'Use step-by-step graphing',
                    'Practice decomposing complex functions'
                ],
                extensions: [
                    'Function composition theory',
                    'Inverse transformations',
                    'Matrix transformations'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Understand and apply function transformations'],
            keyConcepts: ['Transformations modify function graphs systematically'],
            prerequisites: ['Function notation', 'Coordinate graphing'],
            commonDifficulties: ['Various transformation challenges'],
            teachingStrategies: ['Visual demonstrations', 'Guided practice'],
            extensions: ['More complex transformations']
        };
    }

    generateTransformationAlternativeMethods(problemType) {
        const category = this.transformationTypes[problemType]?.category;

        const alternativeDatabase = {
            vertical_shifts: {
                primaryMethod: 'Add constant to all y-values',
                methods: [
                    {
                        name: 'Table Method',
                        description: 'Create table of x and f(x), add k to all f(x) values'
                    },
                    {
                        name: 'Graph Tracing',
                        description: 'Trace original graph and shift each point up/down'
                    },
                    {
                        name: 'Key Points',
                        description: 'Transform only key points, sketch curve through them'
                    }
                ],
                comparison: 'All methods equivalent; table method best for precise values, graph tracing for visual learners'
            },
            horizontal_shifts: {
                primaryMethod: 'Replace x with (x - h)',
                methods: [
                    {
                        name: 'Shift Center Method',
                        description: 'Find what makes inside zero; that\'s the new center'
                    },
                    {
                        name: 'Point Translation',
                        description: 'Add h to all x-coordinates'
                    },
                    {
                        name: 'Graph Sliding',
                        description: 'Slide entire graph left or right'
                    }
                ],
                comparison: '"Shift center" method helps avoid direction confusion; point translation most systematic'
            },
            combined_transformations: {
                primaryMethod: 'Apply transformations in standard order',
                methods: [
                    {
                        name: 'Sequential Graphing',
                        description: 'Draw intermediate graph after each transformation'
                    },
                    {
                        name: 'Key Point Tracking',
                        description: 'Transform one point through all transformations, then others'
                    },
                    {
                        name: 'Algebraic Decomposition',
                        description: 'Write as composition of individual transformations'
                    }
                ],
                comparison: 'Sequential graphing best for visual learners; key point tracking efficient; algebraic most rigorous'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard transformation approach',
            methods: [{
                name: 'Alternative',
                description: 'Various methods available depending on context'
            }],
            comparison: 'Choose method based on problem and personal preference'
        };
    }
}

// Export the class
export default EnhancedFunctionTransformationsWorkbook;

