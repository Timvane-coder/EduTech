// Enhanced Trigonometric Equations Mathematical Workbook - Comprehensive Implementation
import * as math from 'mathjs';

export class EnhancedTrigonometricEquationsWorkbook {
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

        // Angle mode preference
        this.angleMode = options.angleMode || 'radians'; // 'radians' or 'degrees'

        this.mathSymbols = this.initializeMathSymbols();
        this.setThemeColors();
        this.initializeTrigonometricSolvers();
        this.initializeTrigonometricLessons();
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
        this.initializeTrigIdentitiesDatabase();
        this.initializeUnitCircleDatabase();
        this.initializeSpecialAnglesDatabase();
    }

    initializeMathSymbols() {
        return {
            // Mathematical operators
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±', 'sqrt': '√',
            // Greek letters
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            'omega': 'ω', 'phi': 'φ', 'tau': 'τ',
            // Trigonometric symbols
            'sin': 'sin', 'cos': 'cos', 'tan': 'tan',
            'csc': 'csc', 'sec': 'sec', 'cot': 'cot',
            'arcsin': 'arcsin', 'arccos': 'arccos', 'arctan': 'arctan',
            // Special symbols
            'degrees': '°', 'radians': 'rad',
            'intersection': '∩', 'union': '∪', 'element': '∈'
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
                trigBg: '#e6f3ff',
                trigText: '#0066cc'
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
                trigBg: '#e8f4f8',
                trigText: '#0277bd'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeTrigonometricLessons() {
        this.lessons = {
            basic_trig_equations: {
                title: "Basic Trigonometric Equations",
                concepts: [
                    "Equations involving sin(x), cos(x), or tan(x)",
                    "Solutions exist within intervals (typically [0, 2π) or [0°, 360°))",
                    "Periodic nature means infinite solutions exist",
                    "Reference angles help find all solutions"
                ],
                theory: "Trigonometric equations use the periodic nature of trig functions. A basic equation like sin(x) = k has solutions that repeat every 2π radians (360°).",
                keyFormulas: {
                    "Basic Sine": "sin(θ) = k, where -1 ≤ k ≤ 1",
                    "Basic Cosine": "cos(θ) = k, where -1 ≤ k ≤ 1",
                    "Basic Tangent": "tan(θ) = k, where k is any real number",
                    "Period of sin/cos": "2π radians (360°)",
                    "Period of tan": "π radians (180°)"
                },
                solvingSteps: [
                    "Isolate the trigonometric function",
                    "Find the reference angle using inverse trig functions",
                    "Determine all angles in the specified interval",
                    "Use periodicity to find additional solutions if needed",
                    "Verify solutions"
                ],
                applications: [
                    "Wave motion and oscillations",
                    "AC circuit analysis",
                    "Harmonic motion",
                    "Signal processing"
                ]
            },

            linear_trig_equations: {
                title: "Linear Trigonometric Equations",
                concepts: [
                    "Form: a·sin(bx + c) + d = k or similar with cos/tan",
                    "Combine algebra and trigonometry",
                    "First solve algebraically, then trigonometrically",
                    "Pay attention to amplitude, period, and phase shift"
                ],
                theory: "Linear trigonometric equations combine linear algebraic manipulation with trigonometric solving. We first isolate the trig function, then solve the trig equation.",
                keyFormulas: {
                    "Standard Form": "a·sin(bx + c) + d = k",
                    "Amplitude": "|a|",
                    "Period": "2π/|b| for sin/cos, π/|b| for tan",
                    "Phase Shift": "-c/b",
                    "Vertical Shift": "d"
                },
                solvingSteps: [
                    "Isolate the trigonometric expression algebraically",
                    "Solve for the angle inside the trig function",
                    "Account for the coefficient of x",
                    "Find all solutions in the interval",
                    "Check domain restrictions"
                ],
                applications: [
                    "Modeling periodic phenomena",
                    "Sound waves",
                    "Tides and ocean levels",
                    "Seasonal temperature variations"
                ]
            },

            quadratic_trig_equations: {
                title: "Quadratic Trigonometric Equations",
                concepts: [
                    "Form: a·sin²(x) + b·sin(x) + c = 0 (or with cos, tan)",
                    "Treat as quadratic in sin(x), cos(x), or tan(x)",
                    "Use substitution: let u = sin(x), solve for u, then solve for x",
                    "May have 0, 1, 2, or more solutions"
                ],
                theory: "Quadratic trigonometric equations are solved by substitution and the quadratic formula or factoring, then solving the resulting basic trig equations.",
                keyFormulas: {
                    "Substitution Form": "au² + bu + c = 0, where u = sin(x) or cos(x) or tan(x)",
                    "Quadratic Formula": "u = [-b ± √(b² - 4ac)] / (2a)",
                    "Factored Form": "(u - r₁)(u - r₂) = 0"
                },
                solvingSteps: [
                    "Substitute u for the trig function",
                    "Solve the quadratic equation for u",
                    "Check if solutions are valid (e.g., |u| ≤ 1 for sin/cos)",
                    "Solve basic trig equations for each valid u",
                    "Find all solutions in the interval"
                ],
                applications: [
                    "Vibration analysis",
                    "Resonance problems",
                    "Power calculations in AC circuits",
                    "Fourier analysis"
                ]
            },

            trig_identities_equations: {
                title: "Equations Using Trigonometric Identities",
                concepts: [
                    "Use identities to transform equations",
                    "Common identities: Pythagorean, double angle, half angle",
                    "Convert to single trig function when possible",
                    "Simplify before solving"
                ],
                theory: "Many trigonometric equations require identities to transform them into solvable forms. Recognizing which identity to use is key.",
                keyIdentities: {
                    "Pythagorean": "sin²(x) + cos²(x) = 1",
                    "Pythagorean Alt 1": "1 + tan²(x) = sec²(x)",
                    "Pythagorean Alt 2": "1 + cot²(x) = csc²(x)",
                    "Double Angle (sin)": "sin(2x) = 2sin(x)cos(x)",
                    "Double Angle (cos)": "cos(2x) = cos²(x) - sin²(x) = 2cos²(x) - 1 = 1 - 2sin²(x)",
                    "Half Angle (sin)": "sin²(x) = (1 - cos(2x))/2",
                    "Half Angle (cos)": "cos²(x) = (1 + cos(2x))/2",
                    "Sum/Difference": "sin(A ± B) = sin(A)cos(B) ± cos(A)sin(B)"
                },
                solvingSteps: [
                    "Identify what identities could simplify the equation",
                    "Apply appropriate identities",
                    "Reduce to equation in one trig function",
                    "Solve the resulting equation",
                    "Verify all solutions"
                ],
                applications: [
                    "Simplifying complex wave interactions",
                    "Proving other identities",
                    "Integration in calculus",
                    "Physics applications"
                ]
            },

            multiple_angle_equations: {
                title: "Multiple Angle Equations",
                concepts: [
                    "Equations with sin(2x), cos(3x), tan(x/2), etc.",
                    "Solve for the multiple angle first",
                    "Then solve for x by dividing/multiplying",
                    "Be careful with the period - may have more solutions"
                ],
                theory: "When solving equations with multiple angles, solve for the entire angle expression first, then isolate x. The period changes based on the coefficient.",
                keyFormulas: {
                    "General Form": "f(nx) = k, solve for nx first",
                    "Period Relationship": "Period of f(nx) is (period of f)/n",
                    "Solution Count": "Typically n times as many solutions in [0, 2π)"
                },
                solvingSteps: [
                    "Let u = nx (or whatever the angle expression is)",
                    "Solve for u as a basic trig equation",
                    "Determine the appropriate interval for u",
                    "Divide by n to get solutions for x",
                    "Check all solutions are in required interval"
                ],
                applications: [
                    "Frequency modulation",
                    "Harmonic analysis",
                    "Multiple wave interference",
                    "Gear ratio calculations"
                ]
            },

            inverse_trig_equations: {
                title: "Equations with Inverse Trigonometric Functions",
                concepts: [
                    "Equations involving arcsin, arccos, arctan",
                    "Apply trig function to both sides",
                    "Remember restricted domains of inverse functions",
                    "arcsin and arctan: domain restrictions apply"
                ],
                theory: "Inverse trigonometric functions have restricted ranges. When solving, we apply the corresponding trig function to both sides.",
                keyFormulas: {
                    "arcsin": "arcsin(x) domain: [-1, 1], range: [-π/2, π/2]",
                    "arccos": "arccos(x) domain: [-1, 1], range: [0, π]",
                    "arctan": "arctan(x) domain: all reals, range: (-π/2, π/2)",
                    "Composition": "sin(arcsin(x)) = x for x in [-1, 1]"
                },
                solvingSteps: [
                    "Isolate the inverse trig function",
                    "Apply the corresponding trig function to both sides",
                    "Solve the resulting equation",
                    "Check solutions are in the range of the inverse function",
                    "Verify solutions"
                ],
                applications: [
                    "Angle calculations from ratios",
                    "Navigation and surveying",
                    "Computer graphics",
                    "Robotics kinematics"
                ]
            },

            systems_trig_equations: {
                title: "Systems of Trigonometric Equations",
                concepts: [
                    "Two or more trig equations with same variables",
                    "Use substitution or elimination",
                    "Identities can help reduce the system",
                    "Solutions must satisfy all equations"
                ],
                theory: "Systems of trigonometric equations require finding values that satisfy all equations simultaneously. Strategies include substitution and using identities.",
                solvingSteps: [
                    "Express one variable in terms of others if possible",
                    "Substitute into other equations",
                    "Solve the resulting equation",
                    "Back-substitute to find all variables",
                    "Verify in all original equations"
                ],
                applications: [
                    "AC circuit analysis with multiple components",
                    "Multi-dimensional wave problems",
                    "Coupled oscillators",
                    "Parametric equations"
                ]
            },

            rational_trig_equations: {
                title: "Rational Trigonometric Equations",
                concepts: [
                    "Equations with trig functions in numerator/denominator",
                    "Clear denominators carefully",
                    "Check for extraneous solutions",
                    "Watch for values that make denominators zero"
                ],
                theory: "Rational equations with trig functions require careful handling of denominators and domain restrictions.",
                keyFormulas: {
                    "General Form": "P(trig)/Q(trig) = k",
                    "Cross Multiply": "If a/b = c/d, then ad = bc (b, d ≠ 0)"
                },
                solvingSteps: [
                    "Identify values that make denominators zero (restrictions)",
                    "Clear denominators by multiplying both sides",
                    "Solve the resulting equation",
                    "Eliminate solutions that violate restrictions",
                    "Verify all solutions"
                ],
                applications: [
                    "Impedance calculations",
                    "Lens equations in optics",
                    "Projectile motion analysis",
                    "Wave refraction"
                ]
            },

            absolute_value_trig_equations: {
                title: "Absolute Value Trigonometric Equations",
                concepts: [
                    "Equations with |sin(x)|, |cos(x)|, etc.",
                    "Split into two cases: positive and negative",
                    "Consider where the trig function changes sign",
                    "More solutions than basic equations"
                ],
                theory: "Absolute value creates piecewise definitions, requiring us to consider cases where the expression is positive or negative.",
                solvingSteps: [
                    "Write two cases: f(x) = k and f(x) = -k",
                    "Solve both equations separately",
                    "Combine all solutions",
                    "Check each solution in original equation",
                    "Order solutions"
                ],
                applications: [
                    "Rectification in electronics",
                    "Amplitude modulation",
                    "Distance and displacement problems",
                    "Signal analysis"
                ]
            },

            parametric_trig_equations: {
                title: "Parametric Trigonometric Equations",
                concepts: [
                    "x = f(t), y = g(t) where f, g involve trig functions",
                    "Eliminate parameter to get Cartesian form",
                    "Use identities to connect x and y",
                    "Recognize conic sections and other curves"
                ],
                theory: "Parametric equations with trig functions often describe circles, ellipses, and other curves. Eliminating the parameter reveals the relationship.",
                solvingSteps: [
                    "Solve one equation for the parameter",
                    "Substitute into the other equation",
                    "Or use identities like sin²(t) + cos²(t) = 1",
                    "Simplify to Cartesian form",
                    "Verify the curve"
                ],
                applications: [
                    "Circular and elliptical motion",
                    "Projectile paths",
                    "Computer animation",
                    "Robotics paths"
                ]
            }
        };
    }

    initializeTrigonometricSolvers() {
        this.trigTypes = {
            // Basic trigonometric equations
            basic_sine: {
                patterns: [
                    /sin\s*\(\s*x\s*\)\s*=\s*([+-]?\d*\.?\d+)/,
                    /sin\s*\(\s*θ\s*\)\s*=\s*([+-]?\d*\.?\d+)/,
                    /sin\s*x\s*=\s*([+-]?\d*\.?\d+)/
                ],
                solver: this.solveBasicSine.bind(this),
                name: 'Basic Sine Equation',
                category: 'basic_trig',
                description: 'Solves sin(x) = k'
            },

            basic_cosine: {
                patterns: [
                    /cos\s*\(\s*x\s*\)\s*=\s*([+-]?\d*\.?\d+)/,
                    /cos\s*\(\s*θ\s*\)\s*=\s*([+-]?\d*\.?\d+)/,
                    /cos\s*x\s*=\s*([+-]?\d*\.?\d+)/
                ],
                solver: this.solveBasicCosine.bind(this),
                name: 'Basic Cosine Equation',
                category: 'basic_trig',
                description: 'Solves cos(x) = k'
            },

            basic_tangent: {
                patterns: [
                    /tan\s*\(\s*x\s*\)\s*=\s*([+-]?\d*\.?\d+)/,
                    /tan\s*\(\s*θ\s*\)\s*=\s*([+-]?\d*\.?\d+)/,
                    /tan\s*x\s*=\s*([+-]?\d*\.?\d+)/
                ],
                solver: this.solveBasicTangent.bind(this),
                name: 'Basic Tangent Equation',
                category: 'basic_trig',
                description: 'Solves tan(x) = k'
            },

            // Linear trigonometric equations
            linear_sine: {
                patterns: [
                    /([+-]?\d*\.?\d*)\s*sin\s*\(\s*([+-]?\d*\.?\d*)x\s*([+-]\s*\d*\.?\d*)?\s*\)\s*([+-]\s*\d*\.?\d*)?\s*=\s*([+-]?\d*\.?\d+)/
                ],
                solver: this.solveLinearSine.bind(this),
                name: 'Linear Sine Equation',
                category: 'linear_trig',
                description: 'Solves a·sin(bx + c) + d = k'
            },

            linear_cosine: {
                patterns: [
                    /([+-]?\d*\.?\d*)\s*cos\s*\(\s*([+-]?\d*\.?\d*)x\s*([+-]\s*\d*\.?\d*)?\s*\)\s*([+-]\s*\d*\.?\d*)?\s*=\s*([+-]?\d*\.?\d+)/
                ],
                solver: this.solveLinearCosine.bind(this),
                name: 'Linear Cosine Equation',
                category: 'linear_trig',
                description: 'Solves a·cos(bx + c) + d = k'
            },

            linear_tangent: {
                patterns: [
                    /([+-]?\d*\.?\d*)\s*tan\s*\(\s*([+-]?\d*\.?\d*)x\s*([+-]\s*\d*\.?\d*)?\s*\)\s*([+-]\s*\d*\.?\d*)?\s*=\s*([+-]?\d*\.?\d+)/
                ],
                solver: this.solveLinearTangent.bind(this),
                name: 'Linear Tangent Equation',
                category: 'linear_trig',
                description: 'Solves a·tan(bx + c) + d = k'
            },

            // Quadratic trigonometric equations
            quadratic_sine: {
                patterns: [
                    /sin\^2|sin.*squared/i,
                    /\(\s*sin\s*x\s*\)\^2/
                ],
                solver: this.solveQuadraticSine.bind(this),
                name: 'Quadratic Sine Equation',
                category: 'quadratic_trig',
                description: 'Solves equations with sin²(x)'
            },

            quadratic_cosine: {
                patterns: [
                    /cos\^2|cos.*squared/i,
                    /\(\s*cos\s*x\s*\)\^2/
                ],
                solver: this.solveQuadraticCosine.bind(this),
                name: 'Quadratic Cosine Equation',
                category: 'quadratic_trig',
                description: 'Solves equations with cos²(x)'
            },

            quadratic_tangent: {
                patterns: [
                    /tan\^2|tan.*squared/i,
                    /\(\s*tan\s*x\s*\)\^2/
                ],
                solver: this.solveQuadraticTangent.bind(this),
                name: 'Quadratic Tangent Equation',
                category: 'quadratic_trig',
                description: 'Solves equations with tan²(x)'
            },

            // Equations using identities
            pythagorean_identity: {
                patterns: [
                    /sin.*cos|cos.*sin/i,
                    /sin\^2.*cos\^2|cos\^2.*sin\^2/
                ],
                solver: this.solvePythagoreanIdentity.bind(this),
                name: 'Pythagorean Identity Equation',
                category: 'identity_based',
                description: 'Uses sin²(x) + cos²(x) = 1'
            },

            double_angle: {
                patterns: [
                    /sin\s*\(\s*2x\s*\)|cos\s*\(\s*2x\s*\)|tan\s*\(\s*2x\s*\)/,
                    /double.*angle/i
                ],
                solver: this.solveDoubleAngle.bind(this),
                name: 'Double Angle Equation',
                category: 'multiple_angle',
                description: 'Equations with sin(2x), cos(2x), or tan(2x)'
            },

            half_angle: {
                patterns: [
                    /sin\s*\(\s*x\/2\s*\)|cos\s*\(\s*x\/2\s*\)|tan\s*\(\s*x\/2\s*\)/,
                    /half.*angle/i
                ],
                solver: this.solveHalfAngle.bind(this),
                name: 'Half Angle Equation',
                category: 'multiple_angle',
                description: 'Equations with sin(x/2), cos(x/2), or tan(x/2)'
            },

            // Multiple angle equations
            triple_angle: {
                patterns: [
                    /sin\s*\(\s*3x\s*\)|cos\s*\(\s*3x\s*\)|tan\s*\(\s*3x\s*\)/,
                    /triple.*angle/i
                ],
                solver: this.solveTripleAngle.bind(this),
                name: 'Triple Angle Equation',
                category: 'multiple_angle',
                description: 'Equations with sin(3x), cos(3x), or tan(3x)'
            },

            // Inverse trigonometric equations
            inverse_sine: {
                patterns: [
                    /arcsin|asin|sin\^-1|sin\^{-1}/i
                ],
                solver: this.solveInverseSine.bind(this),
                name: 'Inverse Sine Equation',
                category: 'inverse_trig',
                description: 'Equations with arcsin(x)'
            },

            inverse_cosine: {
                patterns: [
                    /arccos|acos|cos\^-1|cos\^{-1}/i
                ],
                solver: this.solveInverseCosine.bind(this),
                name: 'Inverse Cosine Equation',
                category: 'inverse_trig',
                description: 'Equations with arccos(x)'
            },

            inverse_tangent: {
                patterns: [
                    /arctan|atan|tan\^-1|tan\^{-1}/i
                ],
                solver: this.solveInverseTangent.bind(this),
                name: 'Inverse Tangent Equation',
                category: 'inverse_trig',
                description: 'Equations with arctan(x)'
            },

            // Systems and combinations
            trig_system: {
                patterns: [
                    /system/i,
                    /simultaneous/i
                ],
                solver: this.solveTrigSystem.bind(this),
                name: 'System of Trigonometric Equations',
                category: 'systems',
                description: 'Multiple equations to solve together'
            },

            // Rational trigonometric equations
            rational_trig: {
                patterns: [
                    /\(.*sin.*\)\/\(.*cos.*\)/,
                    /fraction.*trig/i
                ],
                solver: this.solveRationalTrig.bind(this),
                name: 'Rational Trigonometric Equation',
                category: 'rational_trig',
                description: 'Equations with trig functions in fractions'
            },

            // Absolute value trigonometric equations
            absolute_value_trig: {
                patterns: [
                    /\|.*sin.*\||abs.*sin/i,
                    /\|.*cos.*\||abs.*cos/i,
                    /\|.*tan.*\||abs.*tan/i
                ],
                solver: this.solveAbsoluteValueTrig.bind(this),
                name: 'Absolute Value Trigonometric Equation',
                category: 'absolute_value_trig',
                description: 'Equations with |sin(x)|, |cos(x)|, etc.'
            },

            // Sum and product identities
            sum_to_product: {
                patterns: [
                    /sin.*\+.*sin|cos.*\+.*cos/i,
                    /sum.*product/i
                ],
                solver: this.solveSumToProduct.bind(this),
                name: 'Sum to Product Equation',
                category: 'identity_based',
                description: 'Uses sum-to-product identities'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            basic_trig: {
                'Find reference angle': [
                    'Using degrees when working in radians (or vice versa)',
                    'Not considering all quadrants where solution exists',
                    'Forgetting that sin is positive in quadrants I and II',
                    'Calculator not in correct mode (degrees vs radians)'
                ],
                'Use inverse trig function': [
                    'Assuming arcsin returns all solutions (it only returns principal value)',
                    'Not checking if value is in domain of inverse function',
                    'Sign errors with negative values'
                ],
                'Find all solutions': [
                    'Only finding solutions in first quadrant',
                    'Missing the second solution in [0, 2π)',
                    'Not using symmetry of unit circle',
                    'Forgetting to add 2πn for general solution'
                ]
            },
            quadratic_trig: {
                'Substitute and solve': [
                    'Not checking if u values are valid (e.g., |sin(x)| ≤ 1)',
                    'Arithmetic errors in quadratic formula',
                    'Forgetting both ± solutions',
                    'Not simplifying radical expressions'
                ],
                'Solve for each case': [
                    'Solving only one of the two u values',
                    'Not finding all angles for each valid u value',
                    'Mixing up which quadrants apply to each solution'
                ]
            },
            identity_based: {
                'Apply identity': [
                    'Using wrong form of identity',
                    'Sign errors when substituting',
                    'Not simplifying fully before proceeding',
                    'Choosing inefficient identity'
                ],
                'Simplify': [
                    'Algebraic errors after substitution',
                    'Not combining like terms',
                    'Missing opportunities to factor'
                ]
            },
            multiple_angle: {
                'Solve for multiple angle': [
                    'Forgetting to extend interval (e.g., [0, 4π) for 2x)',
                    'Not accounting for increased number of solutions',
                    'Period confusion'
                ],
                'Divide to get x': [
                    'Division errors',
                    'Not checking all solutions are in required interval for x',
                    'Rounding errors accumulating'
                ]
            }
        };

        this.errorPrevention = {
            angle_mode: {
                reminder: 'Always check if working in degrees or radians',
                method: 'Label all angles with ° or rad, set calculator correctly'
            },
            domain_check: {
                reminder: 'Check that values are in valid domain (|sin/cos| ≤ 1)',
                method: 'After solving algebraically, verify each solution is valid'
            },
            all_solutions: {
                reminder: 'Trig equations usually have multiple solutions in interval',
                method: 'Use unit circle symmetry to find all solutions systematically'
            },
            quadrant_analysis: {
                reminder: 'Determine which quadrants based on sign of trig function',
                method: 'Use CAST rule or unit circle to identify correct quadrants'
            },
            verify_solutions: {
                reminder: 'Always substitute solutions back into original equation',
                method: 'Check each solution, especially after using identities'
            },
            period_awareness: {
                reminder: 'Know the period of each trig function',
                method: 'sin/cos: 2π, tan: π, understand how multiple angles affect period'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why this works and geometric/unit circle meaning',
                language: 'intuitive, visual, connecting to circle'
            },
            procedural: {
                focus: 'Step-by-step algorithmic process',
                language: 'clear instructions, systematic approach'
            },
            visual: {
                focus: 'Unit circle, graphs, and geometric representations',
                language: 'spatial, graphical, pictorial'
            },
            algebraic: {
                focus: 'Formal manipulation using identities and properties',
                language: 'precise mathematical terminology'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple terms, avoid excessive jargon',
                detail: 'essential steps only',
                examples: 'concrete angles like 30°, 45°, 60°'
            },
            intermediate: {
                vocabulary: 'standard mathematical terms',
                detail: 'main steps with brief explanations',
                examples: 'mix of special angles and general values'
            },
            ELI5: {
                vocabulary: 'explain like I\'m 5 - simplest possible terms',
                detail: 'every tiny step with real-world analogies',
                examples: 'clock hands, wheels, circles',
                analogies: true,
                visualization: 'simple pictures and unit circle'
            },
            detailed: {
                vocabulary: 'full mathematical vocabulary',
                detail: 'comprehensive explanations with all reasoning',
                examples: 'general angles, multiple cases'
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
            ferris_wheel: {
                scenario: "Height on a Ferris wheel over time",
                equation: "h(t) = a·sin(bt + c) + d or h(t) = a·cos(bt + c) + d",
                examples: [
                    "A Ferris wheel with radius 20m, center 25m high, rotating once per 60 seconds. When is rider at 35m?",
                    "At what times is the rider at maximum height?"
                ],
                context: "Circular motion creates sinusoidal height variation. Useful for amusement park ride design."
            },
            tide_levels: {
                scenario: "Ocean tide height throughout the day",
                equation: "h(t) = A·cos(Bt) + C, where t is hours after high tide",
                examples: [
                    "High tide is 12ft, low tide is 4ft, period is 12 hours. When is depth 8ft?",
                    "When can a boat requiring 6ft depth enter the harbor?"
                ],
                context: "Tides follow approximately sinusoidal patterns. Critical for navigation and fishing."
            },
            daylight_hours: {
                scenario: "Hours of daylight throughout the year",
                equation: "D(t) = A·sin(B(t - C)) + D, where t is day of year",
                examples: [
                    "Location has max 15hrs daylight (summer), min 9hrs (winter). When are there 12 hours?",
                    "On which days are there more than 14 hours of daylight?"
                ],
                context: "Seasonal variation in daylight is sinusoidal. Important for solar energy and agriculture."
            },
            sound_waves: {
                scenario: "Sound pressure variation over time",
                equation: "P(t) = A·sin(2πft), where f is frequency",
                examples: [
                    "A 440 Hz tone (A note): when is pressure at maximum?",
                    "When does the wave cross zero pressure?"
                ],
                context: "Sound is a pressure wave. Understanding this helps in audio engineering and acoustics."
            },
            ac_circuits: {
                scenario: "Alternating current voltage over time",
                equation: "V(t) = V₀·sin(ωt + φ), where ω = 2πf",
                examples: [
                    "120V AC at 60 Hz: when is voltage 100V?",
                    "When is voltage at peak?"
                ],
                context: "AC electricity follows sinusoidal patterns. Essential for electrical engineering."
            },
            simple_harmonic_motion: {
                scenario: "Spring oscillation or pendulum motion",
                equation: "x(t) = A·cos(ωt + φ), where ω = √(k/m) for spring",
                examples: [
                    "Mass on spring oscillates with amplitude 10cm, period 2s. When is it at 5cm?",
                    "When does it pass through equilibrium?"
                ],
                context: "Many oscillating systems follow SHM. Used in mechanics and engineering."
            },
            temperature_variation: {
                scenario: "Daily or seasonal temperature cycles",
                equation: "T(t) = A·sin(B(t - C)) + D",
                examples: [
                    "Daily temp: high 80°F at 3pm, low 60°F at 3am. When is it 70°F?",
                    "Seasonal: annual high 85°F in July, low 35°F in January. When is it 60°F?"
                ],
                context: "Temperature cycles are approximately sinusoidal. Important for HVAC and climate studies."
            },
            projectile_motion: {
                scenario: "Angle for projectile to hit target",
                equation: "R = (v₀²·sin(2θ))/g, where R is range",
                examples: [
                    "To hit target 100m away with initial velocity 30 m/s, what angle?",
                    "What are the two possible launch angles?"
                ],
                context: "Ballistics and sports involve trigonometric optimization. Used in physics and engineering."
            },
            biorhythms: {
                scenario: "Biological cycles (circadian rhythms, menstrual cycles)",
                equation: "B(t) = A·sin(2πt/T) + B, where T is period",
                examples: [
                    "28-day cycle, when is next peak if last peak was day 0?",
                    "When does the cycle cross the average level?"
                ],
                context: "Many biological processes are periodic. Relevant to medicine and chronobiology."
            },
            satellite_position: {
                scenario: "Position of satellite in circular orbit",
                equation: "θ(t) = ωt, where ω = 2π/T and T is orbital period",
                examples: [
                    "Satellite completes orbit in 90 minutes. When is it at specific longitude?",
                    "When does it cross the equator?"
                ],
                context: "Orbital mechanics uses extensive trigonometry. Critical for space missions and GPS."
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            basic_trig: {
                skills: [
                    'Unit circle understanding',
                    'Inverse trigonometric functions',
                    'Reference angles',
                    'CAST rule or All Students Take Calculus'
                ],
                priorKnowledge: [
                    'Definitions of sin, cos, tan',
                    'Special angles: 30°, 45°, 60°',
                    'Quadrant analysis',
                    'Periodicity of trig functions'
                ],
                checkQuestions: [
                    "What is sin(π/6)?",
                    "In which quadrants is cosine positive?",
                    "What is the period of sine?",
                    "If sin(θ) = 0.5, what is the reference angle?"
                ]
            },
            linear_trig: {
                skills: [
                    'Basic trig equation solving',
                    'Linear equation solving',
                    'Understanding amplitude, period, phase shift',
                    'Function transformations'
                ],
                priorKnowledge: [
                    'How to isolate trig function',
                    'Effects of coefficients on graphs',
                    'How to adjust for phase shift'
                ],
                checkQuestions: [
                    "Solve: sin(x) = 0.5",
                    "What is the period of sin(2x)?",
                    "How does 3sin(x) differ from sin(x)?",
                    "What does the +2 do in sin(x) + 2?"
                ]
            },
            quadratic_trig: {
                skills: [
                    'Quadratic equation solving (factoring, formula)',
                    'Substitution method',
                    'Basic trig equations',
                    'Domain restrictions'
                ],
                priorKnowledge: [
                    'Quadratic formula',
                    'Factoring techniques',
                    'Valid ranges for sin, cos'
                ],
                checkQuestions: [
                    "Solve: x² - 3x + 2 = 0",
                    "What values can sin(θ) take?",
                    "If u² = 0.25, what is u?",
                    "Factor: x² - 1"
                ]
            },
            identity_based: {
                skills: [
                    'Pythagorean identities',
                    'Double and half angle formulas',
                    'Sum and difference formulas',
                    'Identity recognition'
                ],
                priorKnowledge: [
                    'sin²(x) + cos²(x) = 1',
                    'Double angle formulas',
                    'When to use which identity'
                ],
                checkQuestions: [
                    "Express sin²(x) in terms of cos(x)",
                    "What is sin(2x) in terms of sin(x) and cos(x)?",
                    "What is 1 - cos(2x) equal to?",
                    "Simplify: sin²(x) + cos²(x)"
                ]
            },
            multiple_angle: {
                skills: [
                    'Basic trig equations',
                    'Understanding of period changes',
                    'Interval adjustment',
                    'Substitution'
                ],
                priorKnowledge: [
                    'How multiple angles affect period',
                    'Solving for expressions, then dividing',
                    'Number of solutions increases with multiple'
                ],
                checkQuestions: [
                    "If sin(2x) = 0.5, what is the period?",
                    "How many solutions does sin(2x) = 0.5 have in [0, 2π)?",
                    "If u = 2x and u = π/6, what is x?",
                    "What interval should u be in if x ∈ [0, 2π) and u = 3x?"
                ]
            },
            inverse_trig: {
                skills: [
                    'Understanding inverse function domains and ranges',
                    'Composition of function and inverse',
                    'Restricted range awareness',
                    'Applying trig functions to both sides'
                ],
                priorKnowledge: [
                    'arcsin range: [-π/2, π/2]',
                    'arccos range: [0, π]',
                    'arctan range: (-π/2, π/2)',
                    'sin(arcsin(x)) = x for |x| ≤ 1'
                ],
                checkQuestions: [
                    "What is the range of arcsin?",
                    "If arcsin(x) = π/6, what is x?",
                    "Can arcsin(2) exist?",
                    "What is sin(arcsin(0.5))?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            unit_circle: {
                description: "Solutions as points on unit circle",
                analogy: "Walking around a circle - same height at multiple positions",
                visualization: "Draw unit circle, mark where sin/cos equals given value",
                suitableFor: ['basic_trig', 'linear_trig', 'multiple_angle'],
                explanation: "The unit circle shows all angles with the same trig value. Symmetry helps find all solutions."
            },
            graph_intersection: {
                description: "Solution as intersection of y = trig function and y = constant",
                analogy: "Where the wave crosses a horizontal line",
                visualization: "Graph the trig function and horizontal line, intersections are solutions",
                suitableFor: ['basic_trig', 'linear_trig', 'quadratic_trig'],
                explanation: "Graphing reveals all solutions visually and shows periodicity clearly."
            },
            reference_angle: {
                description: "Using acute angle to find all solutions",
                analogy: "Finding mirror images in different quadrants",
                visualization: "Draw reference angle in quadrant I, reflect to other quadrants",
                suitableFor: ['basic_trig'],
                explanation: "Reference angle is the acute angle to x-axis. Use it with quadrant analysis."
            },
            number_line: {
                description: "Solutions marked on number line (angle axis)",
                analogy: "Points along a timeline where condition is met",
                visualization: "Mark solutions on horizontal axis, show period",
                suitableFor: ['all_types'],
                explanation: "Shows solution set and illustrates periodicity through repeated patterns."
            },
            right_triangle: {
                description: "Using right triangle ratios",
                analogy: "Sides of a triangle determining angles",
                visualization: "Draw right triangle with appropriate ratio",
                suitableFor: ['basic_trig', 'inverse_trig'],
                explanation: "For positive values, can construct right triangle and find angle."
            },
            parametric_circle: {
                description: "Tracing circular motion over time",
                analogy: "Point moving around a circle at constant speed",
                visualization: "Animated point on circle, projections show sin and cos",
                suitableFor: ['basic_trig', 'multiple_angle', 'parametric'],
                explanation: "Shows how angle relates to position on circle and time."
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "sin(x) = 0.5, x ∈ [0, 2π)",
                    solution: [Math.PI / 6, 5 * Math.PI / 6],
                    steps: [
                        "Reference angle: arcsin(0.5) = π/6",
                        "Sin is positive in quadrants I and II",
                        "Quadrant I: x = π/6",
                        "Quadrant II: x = π - π/6 = 5π/6"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "cos(x) = 0, x ∈ [0, 2π)",
                    solution: [Math.PI / 2, 3 * Math.PI / 2],
                    steps: [
                        "Cosine is 0 on the y-axis",
                        "x = π/2 (90°)",
                        "x = 3π/2 (270°)"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "tan(x) = 1, x ∈ [0, 2π)",
                    solution: [Math.PI / 4, 5 * Math.PI / 4],
                    steps: [
                        "Reference angle: arctan(1) = π/4",
                        "Tan is positive in quadrants I and III",
                        "Quadrant I: x = π/4",
                        "Quadrant III: x = π + π/4 = 5π/4"
                    ],
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "2sin(x) - 1 = 0, x ∈ [0, 2π)",
                    solution: [Math.PI / 6, 5 * Math.PI / 6],
                    steps: [
                        "Add 1: 2sin(x) = 1",
                        "Divide by 2: sin(x) = 1/2",
                        "Reference angle: π/6",
                        "Solutions: π/6, 5π/6"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "sin²(x) = 1/4, x ∈ [0, 2π)",
                    solution: [Math.PI / 6, 5 * Math.PI / 6, 7 * Math.PI / 6, 11 * Math.PI / 6],
                    steps: [
                        "Take square root: sin(x) = ±1/2",
                        "Case 1: sin(x) = 1/2 → x = π/6, 5π/6",
                        "Case 2: sin(x) = -1/2 → x = 7π/6, 11π/6",
                        "Four solutions total"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "cos(2x) = 1/2, x ∈ [0, 2π)",
                    solution: [Math.PI / 6, 5 * Math.PI / 6, 13 * Math.PI / 6, 17 * Math.PI / 6],
                    steps: [
                        "Let u = 2x, u ∈ [0, 4π)",
                        "cos(u) = 1/2",
                        "u = π/3, 5π/3, 7π/3, 11π/3",
                        "Divide by 2: x = π/6, 5π/6, 7π/6, 11π/6"
                    ],
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "2sin²(x) - 3sin(x) + 1 = 0, x ∈ [0, 2π)",
                    solution: [Math.PI / 6, Math.PI / 2, 5 * Math.PI / 6],
                    steps: [
                        "Let u = sin(x)",
                        "2u² - 3u + 1 = 0",
                        "Factor: (2u - 1)(u - 1) = 0",
                        "u = 1/2 or u = 1",
                        "sin(x) = 1/2: x = π/6, 5π/6",
                        "sin(x) = 1: x = π/2"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "sin(2x) = cos(x), x ∈ [0, 2π)",
                    solution: [Math.PI / 6, Math.PI / 2, 5 * Math.PI / 6, 3 * Math.PI / 2],
                    steps: [
                        "Use identity: sin(2x) = 2sin(x)cos(x)",
                        "2sin(x)cos(x) = cos(x)",
                        "2sin(x)cos(x) - cos(x) = 0",
                        "cos(x)(2sin(x) - 1) = 0",
                        "cos(x) = 0: x = π/2, 3π/2",
                        "sin(x) = 1/2: x = π/6, 5π/6"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "tan(x) + sec(x) = 1, x ∈ [0, 2π)",
                    solution: [0, Math.PI],
                    steps: [
                        "sec(x) = 1 - tan(x)",
                        "1/cos(x) = 1 - sin(x)/cos(x)",
                        "1 = cos(x) - sin(x)",
                        "sin(x) + cos(x) = 1",
                        "Square both sides and use identity",
                        "Solve: x = 0, π"
                    ],
                    difficulty: "hard"
                }
            ],
            byMethod: {
                basic_sine: [
                    { problem: "sin(x) = √3/2", solutions: "π/3, 2π/3" },
                    { problem: "sin(x) = -1/2", solutions: "7π/6, 11π/6" },
                    { problem: "sin(x) = 1", solutions: "π/2" }
                ],
                basic_cosine: [
                    { problem: "cos(x) = 1/2", solutions: "π/3, 5π/3" },
                    { problem: "cos(x) = -√2/2", solutions: "3π/4, 5π/4" },
                    { problem: "cos(x) = -1", solutions: "π" }
                ],
                basic_tangent: [
                    { problem: "tan(x) = √3", solutions: "π/3, 4π/3" },
                    { problem: "tan(x) = -1", solutions: "3π/4, 7π/4" },
                    { problem: "tan(x) = 0", solutions: "0, π" }
                ],
                quadratic: [
                    { problem: "sin²(x) = 3/4", solutions: "π/3, 2π/3, 4π/3, 5π/3" },
                    { problem: "2cos²(x) - cos(x) = 0", solutions: "π/3, π/2, 3π/2, 5π/3" },
                    { problem: "tan²(x) = 3", solutions: "π/3, 2π/3, 4π/3, 5π/3" }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            inverse_only_one_solution: {
                misconception: "arcsin(0.5) gives all solutions to sin(x) = 0.5",
                reality: "arcsin gives only the principal value; must find all angles",
                correctiveExample: "arcsin(0.5) = π/6, but sin(5π/6) = 0.5 too",
                commonIn: ['basic_trig', 'inverse_trig']
            },
            forgetting_periodicity: {
                misconception: "Only looking for solutions in [0, π] instead of [0, 2π)",
                reality: "Must check the full specified interval",
                correctiveExample: "sin(x) = -1/2 has solutions 7π/6 and 11π/6, not just in first two quadrants",
                commonIn: ['basic_trig', 'multiple_angle']
            },
            quadrant_errors: {
                misconception: "Thinking sin is positive only in quadrant I",
                reality: "Sin is positive in quadrants I and II",
                correctiveExample: "sin(π/6) = sin(5π/6) = 1/2",
                commonIn: ['basic_trig']
            },
            domain_violations: {
                misconception: "Accepting sin(x) = 1.5 as a valid solution",
                reality: "sin and cos are bounded by -1 and 1",
                correctiveExample: "If you get sin(x) = 1.5, there is no solution",
                commonIn: ['quadratic_trig']
            },
            identity_misuse: {
                misconception: "Using cos(2x) = 2cos(x)",
                reality: "Double angle formula: cos(2x) = cos²(x) - sin²(x) = 2cos²(x) - 1",
                correctiveExample: "cos(2·30°) = cos(60°) = 1/2 ≠ 2·cos(30°) = √3",
                commonIn: ['identity_based', 'multiple_angle']
            },
            extraneous_solutions: {
                misconception: "All solutions from algebraic steps are valid",
                reality: "Squaring or clearing denominators can introduce extraneous solutions",
                correctiveExample: "After squaring, always check solutions in original equation",
                commonIn: ['rational_trig', 'identity_based']
            },
            angle_mode_confusion: {
                misconception: "Mixing degrees and radians",
                reality: "Must be consistent throughout problem",
                correctiveExample: "If using calculator, ensure mode matches the problem",
                commonIn: ['all_types']
            },
            reference_angle_sign: {
                misconception: "Using reference angle without considering quadrant sign",
                reality: "Reference angle magnitude is same, but sign depends on quadrant",
                correctiveExample: "sin(7π/6) = -sin(π/6) = -1/2, not +1/2",
                commonIn: ['basic_trig']
            },
            period_of_multiple_angles: {
                misconception: "Thinking sin(2x) has same period as sin(x)",
                reality: "Period of sin(bx) is 2π/|b|",
                correctiveExample: "sin(2x) has period π, so more solutions in [0, 2π)",
                commonIn: ['multiple_angle']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            unit_circle_as_clock: {
                analogy: "Unit circle is like a clock face",
                explanation: "Just as 3 o'clock and 9 o'clock are at same height but different sides, angles in different quadrants can have same sin value (same height) but different positions.",
                suitableFor: ['basic_trig'],
                ELI5: "Imagine walking around a circle. You can be at the same height above the ground at two different spots - once going up, once going down."
            },
            ferris_wheel: {
                analogy: "Riding a Ferris wheel",
                explanation: "Your height goes up and down in a smooth wave pattern - that's exactly what sine and cosine describe. You reach the same height twice each rotation.",
                suitableFor: ['basic_trig', 'linear_trig', 'real_world'],
                ELI5: "When you're on a Ferris wheel, you go up and down smoothly. Sine is like tracking how high you are over time."
            },
            swinging_pendulum: {
                analogy: "Pendulum swinging back and forth",
                explanation: "The pendulum's position over time follows a cosine curve. It swings to one side, back through center, to the other side, and repeats.",
                suitableFor: ['linear_trig', 'simple_harmonic_motion'],
                ELI5: "Watch a swing go back and forth. It speeds up in the middle and slows down at the ends, over and over."
            },
            wave_on_beach: {
                analogy: "Ocean waves reaching shore",
                explanation: "Waves come in regular patterns - that's periodicity. The height of water at the shore goes up and down like a sine wave.",
                suitableFor: ['basic_trig', 'periodicity'],
                ELI5: "Waves come to the beach again and again in the same pattern. That's like how sine repeats."
            },
            reference_angle_mirror: {
                analogy: "Mirror reflections",
                explanation: "Reference angle is like looking at the same angle in a mirror. The angles look the same size but might be in different quadrants (different mirror positions).",
                suitableFor: ['basic_trig'],
                ELI5: "If you stand at different places around a circle but at the same 'height', you're at angles that are reflections of each other."
            },
            quadratic_trig_two_heights: {
                analogy: "Two people at same height on different Ferris wheel seats",
                explanation: "If two different angles give the same sin value, it's like two seats on a Ferris wheel at the same height - one on the way up, one on the way down.",
                suitableFor: ['quadratic_trig'],
                ELI5: "When you square sin(x), you're asking 'at what angles am I this high OR this far below center?' So you get more answers."
            },
            multiple_angle_faster_rotation: {
                analogy: "Spinning wheel at different speeds",
                explanation: "sin(2x) is like a point going around twice as fast. In the same time period, it completes two full circles, so you see the pattern twice.",
                suitableFor: ['multiple_angle'],
                ELI5: "If a merry-go-round spins twice as fast, the horse goes up and down twice in the same time."
            },
            identities_as_recipes: {
                analogy: "Different recipes for the same dish",
                explanation: "Trig identities are like different ways to make the same thing. sin(2x) = 2sin(x)cos(x) is one 'recipe', cos²(x) - sin²(x) is another, but they make the same result.",
                suitableFor: ['identity_based'],
                ELI5: "You can make a cake from scratch or use a mix - different methods, same cake. Identities are different ways to write the same math."
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            basic_sine: {
                level1: "What is the reference angle for this sine value?",
                level2: "In which quadrants is sine positive? Negative?",
                level3: "Use arcsin to find reference angle, then determine quadrants",
                level4: "Reference angle is arcsin(|k|). If k > 0: quadrants I, II. If k < 0: quadrants III, IV"
            },
            basic_cosine: {
                level1: "What is the reference angle for this cosine value?",
                level2: "In which quadrants is cosine positive? Negative?",
                level3: "Use arccos to find reference angle, then determine quadrants",
                level4: "Reference angle is arccos(|k|). If k > 0: quadrants I, IV. If k < 0: quadrants II, III"
            },
            basic_tangent: {
                level1: "What is the reference angle for this tangent value?",
                level2: "In which quadrants is tangent positive? Negative?",
                level3: "Use arctan to find reference angle, then determine quadrants",
                level4: "Reference angle is arctan(|k|). If k > 0: quadrants I, III. If k < 0: quadrants II, IV"
            },
            linear_trig: {
                level1: "Can you isolate the trigonometric function first?",
                level2: "Solve for sin(bx + c) or cos(bx + c) as if it were sin(u) or cos(u)",
                level3: "First solve algebraically for the trig function, then solve the trig equation",
                level4: "Isolate trig function: get a·f(bx+c) = k. Divide by a. Then solve f(bx+c) = k/a"
            },
            quadratic_trig: {
                level1: "Does this look like a quadratic equation?",
                level2: "Can you substitute u = sin(x) (or cos(x) or tan(x))?",
                level3: "After substitution, use quadratic formula or factoring for u, then solve for x",
                level4: "Let u = trig function. Solve au² + bu + c = 0. Check |u| ≤ 1 for sin/cos. Then solve trig equations for each valid u"
            },
            identity_based: {
                level1: "Do you see terms that match a trig identity?",
                level2: "Can you use sin²(x) + cos²(x) = 1 or a double angle formula?",
                level3: "Replace one trig function using an identity to get equation in one function",
                level4: "Identify the identity (Pythagorean, double angle, etc.), substitute, and simplify to equation in single trig function"
            },
            multiple_angle: {
                level1: "What is the angle expression inside the trig function?",
                level2: "Can you solve for the entire angle expression first?",
                level3: "Let u = the angle expression, solve for u, then divide to get x",
                level4: "Let u = bx + c (or 2x, etc.). Solve trig equation for u in extended interval. Then solve u = ... for x"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Solve: sin(x) = 1/2, x ∈ [0, 2π)",
                    answer: [Math.PI / 6, 5 * Math.PI / 6],
                    assesses: "basic_sine",
                    difficulty: "basic"
                },
                {
                    question: "Solve: cos(x) = -√3/2, x ∈ [0, 2π)",
                    answer: [5 * Math.PI / 6, 7 * Math.PI / 6],
                    assesses: "basic_cosine",
                    difficulty: "basic"
                },
                {
                    question: "Solve: 2sin(x) + 1 = 0, x ∈ [0, 2π)",
                    answer: [7 * Math.PI / 6, 11 * Math.PI / 6],
                    assesses: "linear_trig",
                    difficulty: "intermediate"
                },
                {
                    question: "Solve: sin²(x) - sin(x) = 0, x ∈ [0, 2π)",
                    answer: [0, Math.PI / 2, Math.PI],
                    assesses: "quadratic_trig",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "If sin(x) = 0.6 and x is in quadrant II, which is correct?",
                    options: ["x = arcsin(0.6)", "x = π - arcsin(0.6)", "x = π + arcsin(0.6)", "x = 2π - arcsin(0.6)"],
                    correct: "x = π - arcsin(0.6)",
                    explanation: "In quadrant II, x = π - (reference angle)"
                },
                {
                    question: "How many solutions does sin(2x) = 0 have in [0, 2π)?",
                    options: ["1", "2", "3", "4"],
                    correct: "4",
                    explanation: "Let u = 2x, u ∈ [0, 4π). sin(u) = 0 has 4 solutions: 0, π, 2π, 3π. So x = 0, π/2, π, 3π/2"
                },
                {
                    question: "To solve 2sin²(x) - sin(x) - 1 = 0, you should:",
                    options: [
                        "Use arcsin directly",
                        "Let u = sin(x) and solve quadratic",
                        "Use double angle formula",
                        "Graph both sides"
                    ],
                    correct: "Let u = sin(x) and solve quadratic",
                    explanation: "This is quadratic in sin(x), so substitution is appropriate"
                }
            ],
            summative: [
                {
                    question: "Solve: sin(2x) = cos(x), x ∈ [0, 2π)",
                    answer: [Math.PI / 6, Math.PI / 2, 5 * Math.PI / 6, 3 * Math.PI / 2],
                    showsWork: true,
                    rubric: {
                        use_identity: 2,
                        factor_correctly: 2,
                        find_all_solutions: 3,
                        verify: 1
                    }
                },
                {
                    question: "Solve: 2cos²(x) + cos(x) - 1 = 0, x ∈ [0, 2π)",
                    answer: [Math.PI / 3, Math.PI, 5 * Math.PI / 3],
                    showsWork: true,
                    rubric: {
                        substitution: 1,
                        solve_quadratic: 2,
                        check_validity: 1,
                        solve_basic_trig: 2,
                        verify: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "sin(x) = 0",
                    "cos(x) = 1",
                    "tan(x) = 0",
                    "sin(x) = 1",
                    "cos(x) = √2/2"
                ],
                medium: [
                    "2sin(x) - √3 = 0",
                    "cos(2x) = 1/2",
                    "sin²(x) = 1/4",
                    "tan(x) + 1 = 0",
                    "3cos(x) + 2 = 1"
                ],
                hard: [
                    "2sin²(x) - 3sin(x) + 1 = 0",
                    "sin(2x) = sin(x)",
                    "cos(2x) + sin²(x) = 1",
                    "tan²(x) - 3 = 0",
                    "sin(x)cos(x) = 1/4"
                ]
            },
            byObjective: {
                canSolveBasicTrig: [
                    "sin(x) = √3/2",
                    "cos(x) = -1/2",
                    "tan(x) = 1",
                    "sin(x) = -√2/2"
                ],
                canSolveLinearTrig: [
                    "2sin(x) + 1 = 0",
                    "3cos(x) - 2 = 1",
                    "4tan(x) - 4 = 0",
                    "5sin(x) + 3 = 1"
                ],
                canSolveQuadraticTrig: [
                    "sin²(x) = 3/4",
                    "2cos²(x) - 1 = 0",
                    "tan²(x) - 1 = 0",
                    "sin²(x) - sin(x) = 0"
                ],
                canUseIdentities: [
                    "sin²(x) + cos²(x) = 1 (verify)",
                    "cos(2x) = 2cos²(x) - 1",
                    "sin(2x) = 2sin(x)cos(x)",
                    "1 + tan²(x) = sec²(x)"
                ],
                canSolveMultipleAngle: [
                    "sin(2x) = 1/2",
                    "cos(3x) = 0",
                    "tan(x/2) = 1",
                    "sin(4x) = -1"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "basic_sin_cos_tan": "Isolate function, find reference angle, determine quadrants",
                "linear_combination": "Algebraically isolate trig function first, then solve trig equation",
                "quadratic_form": "Substitute u for trig function, solve quadratic, then solve basic trig",
                "contains_identity": "Use identities to convert to single trig function",
                "multiple_angle": "Solve for the multiple angle first, adjust interval, then divide",
                "inverse_trig_present": "Apply corresponding trig function to both sides",
                "rational_form": "Clear denominators, check restrictions, solve, eliminate invalid solutions"
            },
            whenToUseWhat: {
                reference_angle: "For basic trig equations sin(x) = k, cos(x) = k, tan(x) = k",
                substitution: "For quadratic equations in trig functions",
                identities: "When equation has mixed trig functions or can be simplified",
                multiple_angle_technique: "When angle is 2x, 3x, x/2, etc.",
                graphical: "To visualize solutions and verify algebraic results",
                unit_circle: "For special angles and understanding solution symmetry"
            },
            methodSelection: {
                factorsToConsider: [
                    "Is it a basic trig equation (single function)?",
                    "Does it involve multiple trig functions?",
                    "Is it quadratic in a trig function?",
                    "Are there multiple angles?",
                    "Can an identity simplify it?",
                    "What is the specified interval?"
                ],
                generalApproach: [
                    "1. Simplify using identities if helpful",
                    "2. Isolate or reduce to single trig function if possible",
                    "3. Solve resulting equation (basic, quadratic, etc.)",
                    "4. Find all solutions in the given interval",
                    "5. Verify solutions in original equation"
                ]
            },
            optimizationTips: {
                "Use special angles when possible": "Recognize √3/2, 1/2, √2/2, etc. immediately",
                "Know your unit circle": "Memorize common angle values to speed solving",
                "Check interval carefully": "Make sure you find ALL solutions in specified range",
                "Verify solutions": "Especially after using identities or squaring",
                "Use symmetry": "Unit circle symmetry helps find multiple solutions quickly"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Basic Trig Sprint",
                    timeLimit: 90,
                    problems: [
                        "sin(x) = 1/2",
                        "cos(x) = 0",
                        "tan(x) = 1",
                        "sin(x) = -1",
                        "cos(x) = -√2/2",
                        "tan(x) = √3",
                        "sin(x) = √3/2",
                        "cos(x) = 1/2"
                    ]
                },
                {
                    name: "Quadratic Trig Challenge",
                    timeLimit: 180,
                    problems: [
                        "sin²(x) = 1/4",
                        "2cos²(x) = 1",
                        "tan²(x) = 3",
                        "sin²(x) - sin(x) = 0",
                        "cos²(x) + cos(x) - 2 = 0"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Angle",
                    problem: "An angle θ satisfies: sin(θ) = cos(θ)",
                    challenge: "Find all solutions in [0, 2π)",
                    solution: "θ = π/4, 5π/4 (where sine and cosine are equal)"
                },
                {
                    name: "Identity Hunt",
                    problem: "Simplify: sin(x)cos(x) = ?",
                    hint: "Think about double angle formulas",
                    solution: "(1/2)sin(2x)"
                },
                {
                    name: "Maximum Detective",
                    problem: "Find all x in [0, 2π) where sin(x) + cos(x) is maximum",
                    solution: "x = π/4 (maximum value is √2)"
                }
            ],
            applications: [
                {
                    scenario: "Ferris Wheel Height",
                    problem: "Height h(t) = 15sin(πt/30) + 20 meters, where t is in seconds. When is height 27.5m?",
                    equation: "15sin(πt/30) + 20 = 27.5",
                    solution: "t = 10s, 50s, 70s, ... (every 60 seconds)"
                },
                {
                    scenario: "Sound Wave Interference",
                    problem: "Two sound waves: y₁ = sin(x), y₂ = cos(x). When is their sum maximum?",
                    equation: "sin(x) + cos(x) = √2sin(x + π/4)",
                    solution: "Maximum when x + π/4 = π/2, so x = π/4"
                },
                {
                    scenario: "Projectile Range",
                    problem: "Range R = (v₀²sin(2θ))/g. For v₀ = 20 m/s, g = 10 m/s², find θ for R = 40m",
                    equation: "sin(2θ) = 1",
                    solution: "2θ = π/2, so θ = π/4 (45°)"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "sin(2x) = 1/2",
                        "2x = arcsin(1/2) = π/6",  // ERROR: forgot other solutions for 2x
                        "x = π/12"                  // Only found one solution
                    ],
                    correctAnswer: "x = π/12, 5π/12, 13π/12, 17π/12",
                    errorType: "Forgot that 2x ∈ [0, 4π) has more solutions"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "sin²(x) = 1/4",
                        "sin(x) = 1/2",             // ERROR: forgot negative square root
                        "x = π/6, 5π/6"             // Missing half the solutions
                    ],
                    correctAnswer: "x = π/6, 5π/6, 7π/6, 11π/6",
                    errorType: "Forgot sin(x) = -1/2 case"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "2sin(x) - 3 = 0",
                        "sin(x) = 3/2",             // ERROR: invalid (|sin| ≤ 1)
                        "x = arcsin(3/2) = undefined"
                    ],
                    correctAnswer: "No solution",
                    errorType: "Didn't recognize domain violation"
                }
            ]
        };
    }

    initializeTrigIdentitiesDatabase() {
        this.trigIdentities = {
            pythagorean: {
                fundamental: "sin²(x) + cos²(x) = 1",
                derived1: "1 + tan²(x) = sec²(x)",
                derived2: "1 + cot²(x) = csc²(x)",
                applications: "Converting between sin and cos, simplifying expressions"
            },
            reciprocal: {
                csc: "csc(x) = 1/sin(x)",
                sec: "sec(x) = 1/cos(x)",
                cot: "cot(x) = 1/tan(x)",
                applications: "Expressing equations in terms of sin, cos, tan"
            },
            quotient: {
                tan: "tan(x) = sin(x)/cos(x)",
                cot: "cot(x) = cos(x)/sin(x)",
                applications: "Simplifying tan/cot equations"
            },
            cofunction: {
                sin_cos: "sin(π/2 - x) = cos(x)",
                cos_sin: "cos(π/2 - x) = sin(x)",
                tan_cot: "tan(π/2 - x) = cot(x)",
                applications: "Complementary angle problems"
            },
            even_odd: {
                cos_even: "cos(-x) = cos(x)",
                sin_odd: "sin(-x) = -sin(x)",
                tan_odd: "tan(-x) = -tan(x)",
                applications: "Negative angle conversions"
            },
            double_angle: {
                sin: "sin(2x) = 2sin(x)cos(x)",
                cos1: "cos(2x) = cos²(x) - sin²(x)",
                cos2: "cos(2x) = 2cos²(x) - 1",
                cos3: "cos(2x) = 1 - 2sin²(x)",
                tan: "tan(2x) = 2tan(x)/(1 - tan²(x))",
                applications: "Double angle equations, integration"
            },
            half_angle: {
                sin: "sin²(x) = (1 - cos(2x))/2",
                cos: "cos²(x) = (1 + cos(2x))/2",
                tan: "tan(x/2) = sin(x)/(1 + cos(x)) = (1 - cos(x))/sin(x)",
                applications: "Half angle problems, power reduction"
            },
            sum_difference: {
                sin_sum: "sin(A + B) = sin(A)cos(B) + cos(A)sin(B)",
                sin_diff: "sin(A - B) = sin(A)cos(B) - cos(A)sin(B)",
                cos_sum: "cos(A + B) = cos(A)cos(B) - sin(A)sin(B)",
                cos_diff: "cos(A - B) = cos(A)cos(B) + sin(A)sin(B)",
                tan_sum: "tan(A + B) = (tan(A) + tan(B))/(1 - tan(A)tan(B))",
                applications: "Angle addition/subtraction problems"
            },
            product_to_sum: {
                sin_sin: "sin(A)sin(B) = (1/2)[cos(A - B) - cos(A + B)]",
                cos_cos: "cos(A)cos(B) = (1/2)[cos(A - B) + cos(A + B)]",
                sin_cos: "sin(A)cos(B) = (1/2)[sin(A + B) + sin(A - B)]",
                applications: "Simplifying products of trig functions"
            },
            sum_to_product: {
                sin_sum: "sin(A) + sin(B) = 2sin((A + B)/2)cos((A - B)/2)",
                sin_diff: "sin(A) - sin(B) = 2cos((A + B)/2)sin((A - B)/2)",
                cos_sum: "cos(A) + cos(B) = 2cos((A + B)/2)cos((A - B)/2)",
                cos_diff: "cos(A) - cos(B) = -2sin((A + B)/2)sin((A - B)/2)",
                applications: "Simplifying sums of trig functions"
            }
        };
    }

    initializeUnitCircleDatabase() {
        this.unitCircle = {
            quadrant_I: {
                angles_deg: [0, 30, 45, 60, 90],
                angles_rad: [0, 'π/6', 'π/4', 'π/3', 'π/2'],
                sin_values: [0, '1/2', '√2/2', '√3/2', 1],
                cos_values: [1, '√3/2', '√2/2', '1/2', 0],
                tan_values: [0, '√3/3', 1, '√3', 'undefined'],
                signs: { sin: '+', cos: '+', tan: '+' }
            },
            quadrant_II: {
                angles_deg: [90, 120, 135, 150, 180],
                angles_rad: ['π/2', '2π/3', '3π/4', '5π/6', 'π'],
                sin_values: [1, '√3/2', '√2/2', '1/2', 0],
                cos_values: [0, '-1/2', '-√2/2', '-√3/2', -1],
                tan_values: ['undefined', '-√3', -1, '-√3/3', 0],
                signs: { sin: '+', cos: '-', tan: '-' }
            },
            quadrant_III: {
                angles_deg: [180, 210, 225, 240, 270],
                angles_rad: ['π', '7π/6', '5π/4', '4π/3', '3π/2'],
                sin_values: [0, '-1/2', '-√2/2', '-√3/2', -1],
                cos_values: [-1, '-√3/2', '-√2/2', '-1/2', 0],
                tan_values: [0, '√3/3', 1, '√3', 'undefined'],
                signs: { sin: '-', cos: '-', tan: '+' }
            },
            quadrant_IV: {
                angles_deg: [270, 300, 315, 330, 360],
                angles_rad: ['3π/2', '5π/3', '7π/4', '11π/6', '2π'],
                sin_values: [-1, '-√3/2', '-√2/2', '-1/2', 0],
                cos_values: [0, '1/2', '√2/2', '√3/2', 1],
                tan_values: ['undefined', '-√3', -1, '-√3/3', 0],
                signs: { sin: '-', cos: '+', tan: '-' }
            },
            CAST_rule: {
                description: "All Students Take Calculus - remembering which functions are positive in which quadrants",
                quadrant_I: "All functions positive",
                quadrant_II: "Sine positive",
                quadrant_III: "Tangent positive",
                quadrant_IV: "Cosine positive"
            }
        };
    }

    initializeSpecialAnglesDatabase() {
        this.specialAngles = {
            degrees: {
                0: { sin: 0, cos: 1, tan: 0 },
                30: { sin: 0.5, cos: Math.sqrt(3) / 2, tan: 1 / Math.sqrt(3) },
                45: { sin: Math.sqrt(2) / 2, cos: Math.sqrt(2) / 2, tan: 1 },
                60: { sin: Math.sqrt(3) / 2, cos: 0.5, tan: Math.sqrt(3) },
                90: { sin: 1, cos: 0, tan: Infinity },
                120: { sin: Math.sqrt(3) / 2, cos: -0.5, tan: -Math.sqrt(3) },
                135: { sin: Math.sqrt(2) / 2, cos: -Math.sqrt(2) / 2, tan: -1 },
                150: { sin: 0.5, cos: -Math.sqrt(3) / 2, tan: -1 / Math.sqrt(3) },
                180: { sin: 0, cos: -1, tan: 0 },
                210: { sin: -0.5, cos: -Math.sqrt(3) / 2, tan: 1 / Math.sqrt(3) },
                225: { sin: -Math.sqrt(2) / 2, cos: -Math.sqrt(2) / 2, tan: 1 },
                240: { sin: -Math.sqrt(3) / 2, cos: -0.5, tan: Math.sqrt(3) },
                270: { sin: -1, cos: 0, tan: Infinity },
                300: { sin: -Math.sqrt(3) / 2, cos: 0.5, tan: -Math.sqrt(3) },
                315: { sin: -Math.sqrt(2) / 2, cos: Math.sqrt(2) / 2, tan: -1 },
                330: { sin: -0.5, cos: Math.sqrt(3) / 2, tan: -1 / Math.sqrt(3) },
                360: { sin: 0, cos: 1, tan: 0 }
            },
            radians: {
                0: { sin: 0, cos: 1, tan: 0 },
                'π/6': { sin: 0.5, cos: Math.sqrt(3) / 2, tan: 1 / Math.sqrt(3) },
                'π/4': { sin: Math.sqrt(2) / 2, cos: Math.sqrt(2) / 2, tan: 1 },
                'π/3': { sin: Math.sqrt(3) / 2, cos: 0.5, tan: Math.sqrt(3) },
                'π/2': { sin: 1, cos: 0, tan: Infinity },
                '2π/3': { sin: Math.sqrt(3) / 2, cos: -0.5, tan: -Math.sqrt(3) },
                '3π/4': { sin: Math.sqrt(2) / 2, cos: -Math.sqrt(2) / 2, tan: -1 },
                '5π/6': { sin: 0.5, cos: -Math.sqrt(3) / 2, tan: -1 / Math.sqrt(3) },
                'π': { sin: 0, cos: -1, tan: 0 },
                '7π/6': { sin: -0.5, cos: -Math.sqrt(3) / 2, tan: 1 / Math.sqrt(3) },
                '5π/4': { sin: -Math.sqrt(2) / 2, cos: -Math.sqrt(2) / 2, tan: 1 },
                '4π/3': { sin: -Math.sqrt(3) / 2, cos: -0.5, tan: Math.sqrt(3) },
                '3π/2': { sin: -1, cos: 0, tan: Infinity },
                '5π/3': { sin: -Math.sqrt(3) / 2, cos: 0.5, tan: -Math.sqrt(3) },
                '7π/4': { sin: -Math.sqrt(2) / 2, cos: Math.sqrt(2) / 2, tan: -1 },
                '11π/6': { sin: -0.5, cos: Math.sqrt(3) / 2, tan: -1 / Math.sqrt(3) },
                '2π': { sin: 0, cos: 1, tan: 0 }
            }
        };
    }

    // ===== MAIN SOLVER METHOD =====

    solveTrigProblem(config) {
        const { equation, scenario, parameters, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseTrigProblem(equation, scenario, parameters, problemType, context);

            // Solve the problem
            this.currentSolution = this.solveTrigProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateTrigSteps(this.currentProblem, this.currentSolution);

            // Generate graph data if applicable
            this.generateTrigGraphData();

            // Generate workbook
            this.generateTrigWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                solutions: this.currentSolution?.solutions,
                solutionType: this.currentSolution?.solutionType
            };

        } catch (error) {
            throw new Error(`Failed to solve trigonometric problem: ${error.message}`);
        }
    }

    parseTrigProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = equation ? this.cleanMathExpression(equation) : '';

        // If problem type is specified, use it directly
        if (problemType && this.trigTypes[problemType]) {
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

        // Auto-detect trigonometric problem type
        for (const [type, config] of Object.entries(this.trigTypes)) {
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

        // Default to basic sine if parameters are provided
        if (parameters.k !== undefined) {
            return {
                originalInput: equation || 'Trigonometric equation with given parameters',
                cleanInput: cleanInput,
                type: 'basic_sine',
                scenario: scenario,
                parameters: { k: parameters.k, ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize trigonometric problem type from: ${equation || scenario}`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/≤/g, '<=')
            .replace(/≥/g, '>=')
            .replace(/≠/g, '!=')
            .replace(/π/g, 'pi')
            .replace(/\*\*/g, '^')
            .trim();
    }

    extractTrigParameters(match, type) {
        const params = {};

        if (!match) return params;

        switch(type) {
            case 'basic_sine':
            case 'basic_cosine':
            case 'basic_tangent':
                params.k = this.parseCoefficient(match[1]);
                break;

            case 'linear_sine':
            case 'linear_cosine':
            case 'linear_tangent':
                params.a = this.parseCoefficient(match[1]) || 1;
                params.b = this.parseCoefficient(match[2]) || 1;
                params.c = this.parseCoefficient(match[3]) || 0;
                params.d = this.parseCoefficient(match[4]) || 0;
                params.k = this.parseCoefficient(match[5]) || 0;
                break;
        }

        return params;
    }

    parseCoefficient(coeff) {
        if (!coeff || coeff.trim() === '') return 0;

        let cleaned = coeff.replace(/\s+/g, '');
        if (cleaned === '+' || cleaned === '') return 1;
        if (cleaned === '-') return -1;

        // Handle pi
        if (cleaned.includes('pi')) {
            cleaned = cleaned.replace(/pi/g, String(Math.PI));
        }

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

    solveTrigProblem_Internal(problem) {
        const solver = this.trigTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for trigonometric problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // ===== TRIGONOMETRIC EQUATION SOLVERS =====

    solveBasicSine(problem) {
        const k = problem.parameters.k;
        const interval = problem.context.interval || [0, 2 * Math.PI];

        // Check if k is in valid range
        if (Math.abs(k) > 1) {
            return {
                equation: `sin(x) = ${k}`,
                type: 'Basic Sine Equation',
                solutionType: 'No solution',
                solutions: [],
                reason: `sin(x) must be in [-1, 1], but ${k} is outside this range`,
                category: 'basic_trig'
            };
        }

        // Special cases
        if (Math.abs(k - 1) < 1e-10) {
            return {
                equation: `sin(x) = 1`,
                type: 'Basic Sine Equation',
                solutions: [Math.PI / 2],
                solutionType: 'Single solution in [0, 2π)',
                referenceAngle: Math.PI / 2,
                quadrants: ['I'],
                category: 'basic_trig'
            };
        }

        if (Math.abs(k + 1) < 1e-10) {
            return {
                equation: `sin(x) = -1`,
                type: 'Basic Sine Equation',
                solutions: [3 * Math.PI / 2],
                solutionType: 'Single solution in [0, 2π)',
                referenceAngle: Math.PI / 2,
                quadrants: ['III'],
                category: 'basic_trig'
            };
        }

        if (Math.abs(k) < 1e-10) {
            return {
                equation: `sin(x) = 0`,
                type: 'Basic Sine Equation',
                solutions: [0, Math.PI],
                solutionType: 'Multiple solutions in [0, 2π)',
                referenceAngle: 0,
                quadrants: ['I', 'III'],
                category: 'basic_trig'
            };
        }

        // General case
        const referenceAngle = Math.asin(Math.abs(k));
        let solutions = [];

        if (k > 0) {
            // Quadrants I and II
            solutions.push(referenceAngle);
            solutions.push(Math.PI - referenceAngle);
        } else {
            // Quadrants III and IV
            solutions.push(Math.PI + referenceAngle);
            solutions.push(2 * Math.PI - referenceAngle);
        }

        return {
            equation: `sin(x) = ${k}`,
            type: 'Basic Sine Equation',
            solutions: solutions,
            solutionType: 'Two solutions in [0, 2π)',
            referenceAngle: referenceAngle,
            quadrants: k > 0 ? ['I', 'II'] : ['III', 'IV'],
            verification: solutions.map(sol => this.verifyTrigSolution(sol, 'sin', k)),
            category: 'basic_trig'
        };
    }

    solveBasicCosine(problem) {
        const k = problem.parameters.k;

        // Check if k is in valid range
        if (Math.abs(k) > 1) {
            return {
                equation: `cos(x) = ${k}`,
                type: 'Basic Cosine Equation',
                solutionType: 'No solution',
                solutions: [],
                reason: `cos(x) must be in [-1, 1], but ${k} is outside this range`,
                category: 'basic_trig'
            };
        }

        // Special cases
        if (Math.abs(k - 1) < 1e-10) {
            return {
                equation: `cos(x) = 1`,
                type: 'Basic Cosine Equation',
                solutions: [0],
                solutionType: 'Single solution in [0, 2π)',
                referenceAngle: 0,
                quadrants: ['I'],
                category: 'basic_trig'
            };
        }

        if (Math.abs(k + 1) < 1e-10) {
            return {
                equation: `cos(x) = -1`,
                type: 'Basic Cosine Equation',
                solutions: [Math.PI],
                solutionType: 'Single solution in [0, 2π)',
                referenceAngle: Math.PI,
                quadrants: ['II'],
                category: 'basic_trig'
            };
        }

        if (Math.abs(k) < 1e-10) {
            return {
                equation: `cos(x) = 0`,
                type: 'Basic Cosine Equation',
                solutions: [Math.PI / 2, 3 * Math.PI / 2],
                solutionType: 'Multiple solutions in [0, 2π)',
                referenceAngle: Math.PI / 2,
                quadrants: ['I-II boundary', 'III-IV boundary'],
                category: 'basic_trig'
            };
        }

        // General case
        const referenceAngle = Math.acos(Math.abs(k));
        let solutions = [];

        if (k > 0) {
            // Quadrants I and IV
            solutions.push(referenceAngle);
            solutions.push(2 * Math.PI - referenceAngle);
        } else {
            // Quadrants II and III
            solutions.push(Math.PI - referenceAngle);
            solutions.push(Math.PI + referenceAngle);
        }

        return {
            equation: `cos(x) = ${k}`,
            type: 'Basic Cosine Equation',
            solutions: solutions,
            solutionType: 'Two solutions in [0, 2π)',
            referenceAngle: referenceAngle,
            quadrants: k > 0 ? ['I', 'IV'] : ['II', 'III'],
            verification: solutions.map(sol => this.verifyTrigSolution(sol, 'cos', k)),
            category: 'basic_trig'
        };
    }

    solveBasicTangent(problem) {
        const k = problem.parameters.k;

        // Tangent has no domain restrictions
        const referenceAngle = Math.atan(Math.abs(k));
        let solutions = [];

        if (k >= 0) {
            // Quadrants I and III
            solutions.push(referenceAngle);
            solutions.push(Math.PI + referenceAngle);
        } else {
            // Quadrants II and IV
            solutions.push(Math.PI - referenceAngle);
            solutions.push(2 * Math.PI - referenceAngle);
        }

        return {
            equation: `tan(x) = ${k}`,
            type: 'Basic Tangent Equation',
            solutions: solutions,
            solutionType: 'Two solutions in [0, 2π)',
            referenceAngle: referenceAngle,
            quadrants: k >= 0 ? ['I', 'III'] : ['II', 'IV'],
            period: Math.PI,
            verification: solutions.map(sol => this.verifyTrigSolution(sol, 'tan', k)),
            category: 'basic_trig'
        };
    }

    solveLinearSine(problem) {
        const { a, b, c, d, k } = problem.parameters;
        
        // a*sin(bx + c) + d = k
        // sin(bx + c) = (k - d)/a

        const sinValue = (k - d) / a;

        if (Math.abs(sinValue) > 1) {
            return {
                equation: `${a}sin(${b}x + ${c}) + ${d} = ${k}`,
                type: 'Linear Sine Equation',
                solutionType: 'No solution',
                solutions: [],
                reason: `After isolating sin, got sin = ${sinValue}, which is outside [-1, 1]`,
                category: 'linear_trig'
            };
        }

        // Solve sin(u) = sinValue where u = bx + c
        const basicSolution = this.solveBasicSine({
            parameters: { k: sinValue },
            context: { interval: [0, 2 * Math.PI] }
        });

        // Convert solutions from u to x
        const solutions = basicSolution.solutions.map(u => (u - c) / b);

        return {
            equation: `${a}sin(${b}x + ${c}) + ${d} = ${k}`,
            type: 'Linear Sine Equation',
            isolatedForm: `sin(${b}x + ${c}) = ${sinValue}`,
            solutions: solutions,
            solutionType: basicSolution.solutionType,
            amplitude: Math.abs(a),
            period: 2 * Math.PI / Math.abs(b),
            phaseShift: -c / b,
            verticalShift: d,
            category: 'linear_trig'
        };
    }

    solveLinearCosine(problem) {
        const { a, b, c, d, k } = problem.parameters;
        
        const cosValue = (k - d) / a;

        if (Math.abs(cosValue) > 1) {
            return {
                equation: `${a}cos(${b}x + ${c}) + ${d} = ${k}`,
                type: 'Linear Cosine Equation',
                solutionType: 'No solution',
                solutions: [],
                reason: `After isolating cos, got cos = ${cosValue}, which is outside [-1, 1]`,
                category: 'linear_trig'
            };
        }

        const basicSolution = this.solveBasicCosine({
            parameters: { k: cosValue },
            context: { interval: [0, 2 * Math.PI] }
        });

        const solutions = basicSolution.solutions.map(u => (u - c) / b);

        return {
            equation: `${a}cos(${b}x + ${c}) + ${d} = ${k}`,
            type: 'Linear Cosine Equation',
            isolatedForm: `cos(${b}x + ${c}) = ${cosValue}`,
            solutions: solutions,
            solutionType: basicSolution.solutionType,
            amplitude: Math.abs(a),
            period: 2 * Math.PI / Math.abs(b),
            phaseShift: -c / b,
            verticalShift: d,
            category: 'linear_trig'
        };
    }

    solveLinearTangent(problem) {
        const { a, b, c, d, k } = problem.parameters;
        
        const tanValue = (k - d) / a;

        const basicSolution = this.solveBasicTangent({
            parameters: { k: tanValue },
            context: { interval: [0, 2 * Math.PI] }
        });

        const solutions = basicSolution.solutions.map(u => (u - c) / b);

        return {
            equation: `${a}tan(${b}x + ${c}) + ${d} = ${k}`,
            type: 'Linear Tangent Equation',
            isolatedForm: `tan(${b}x + ${c}) = ${tanValue}`,
            solutions: solutions,
            solutionType: basicSolution.solutionType,
            period: Math.PI / Math.abs(b),
            phaseShift: -c / b,
            verticalShift: d,
            category: 'linear_trig'
        };
    }

    solveQuadraticSine(problem) {
        // General form: a*sin²(x) + b*sin(x) + c = 0
        const { a, b, c } = problem.parameters;

        // Use quadratic formula: u = [-b ± √(b² - 4ac)] / (2a)
        const discriminant = b * b - 4 * a * c;

        if (discriminant < 0) {
            return {
                equation: `${a}sin²(x) + ${b}sin(x) + ${c} = 0`,
                type: 'Quadratic Sine Equation',
                solutionType: 'No real solutions',
                solutions: [],
                reason: 'Discriminant is negative',
                category: 'quadratic_trig'
            };
        }

        const u1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const u2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        let allSolutions = [];
        let validU = [];

        // Check if u1 is valid for sin
        if (Math.abs(u1) <= 1) {
            validU.push(u1);
            const sol1 = this.solveBasicSine({
                parameters: { k: u1 },
                context: { interval: [0, 2 * Math.PI] }
            });
            allSolutions.push(...sol1.solutions);
        }

        // Check if u2 is valid and different from u1
        if (Math.abs(u2) <= 1 && Math.abs(u2 - u1) > 1e-10) {
            validU.push(u2);
            const sol2 = this.solveBasicSine({
                parameters: { k: u2 },
                context: { interval: [0, 2 * Math.PI] }
            });
            allSolutions.push(...sol2.solutions);
        }

        return {
            equation: `${a}sin²(x) + ${b}sin(x) + ${c} = 0`,
            type: 'Quadratic Sine Equation',
            substitution: 'Let u = sin(x)',
            quadraticSolutions: validU,
            solutions: allSolutions.sort((a, b) => a - b),
            solutionType: allSolutions.length > 0 ? `${allSolutions.length} solutions in [0, 2π)` : 'No solution',
            category: 'quadratic_trig'
        };
    }

    solveQuadraticCosine(problem) {
        const { a, b, c } = problem.parameters;

        const discriminant = b * b - 4 * a * c;

        if (discriminant < 0) {
            return {
                equation: `${a}cos²(x) + ${b}cos(x) + ${c} = 0`,
                type: 'Quadratic Cosine Equation',
                solutionType: 'No real solutions',
                solutions: [],
                reason: 'Discriminant is negative',
                category: 'quadratic_trig'
            };
        }

        const u1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const u2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        let allSolutions = [];
        let validU = [];

        if (Math.abs(u1) <= 1) {
            validU.push(u1);
            const sol1 = this.solveBasicCosine({
                parameters: { k: u1 },
                context: { interval: [0, 2 * Math.PI] }
            });
            allSolutions.push(...sol1.solutions);
        }

        if (Math.abs(u2) <= 1 && Math.abs(u2 - u1) > 1e-10) {
            validU.push(u2);
            const sol2 = this.solveBasicCosine({
                parameters: { k: u2 },
                context: { interval: [0, 2 * Math.PI] }
            });
            allSolutions.push(...sol2.solutions);
        }

        return {
            equation: `${a}cos²(x) + ${b}cos(x) + ${c} = 0`,
            type: 'Quadratic Cosine Equation',
            substitution: 'Let u = cos(x)',
            quadraticSolutions: validU,
            solutions: allSolutions.sort((a, b) => a - b),
            solutionType: allSolutions.length > 0 ? `${allSolutions.length} solutions in [0, 2π)` : 'No solution',
            category: 'quadratic_trig'
        };
    }

    solveQuadraticTangent(problem) {
        const { a, b, c } = problem.parameters;

        const discriminant = b * b - 4 * a * c;

        if (discriminant < 0) {
            return {
                equation: `${a}tan²(x) + ${b}tan(x) + ${c} = 0`,
                type: 'Quadratic Tangent Equation',
                solutionType: 'No real solutions',
                solutions: [],
                reason: 'Discriminant is negative',
                category: 'quadratic_trig'
            };
        }

        const u1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const u2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        let allSolutions = [];

        const sol1 = this.solveBasicTangent({
            parameters: { k: u1 },
            context: { interval: [0, 2 * Math.PI] }
        });
        allSolutions.push(...sol1.solutions);

        if (Math.abs(u2 - u1) > 1e-10) {
            const sol2 = this.solveBasicTangent({
                parameters: { k: u2 },
                context: { interval: [0, 2 * Math.PI] }
            });
            allSolutions.push(...sol2.solutions);
        }

        return {
            equation: `${a}tan²(x) + ${b}tan(x) + ${c} = 0`,
            type: 'Quadratic Tangent Equation',
            substitution: 'Let u = tan(x)',
            quadraticSolutions: [u1, u2],
            solutions: allSolutions.sort((a, b) => a - b),
            solutionType: `${allSolutions.length} solutions in [0, 2π)`,
            category: 'quadratic_trig'
        };
    }

    solvePythagoreanIdentity(problem) {
        return {
            type: 'Pythagorean Identity Equation',
            approach: 'Use sin²(x) + cos²(x) = 1 to convert to single trig function',
            identityUsed: 'sin²(x) + cos²(x) = 1',
            note: 'Convert all terms to sin or all to cos, then solve',
            category: 'identity_based'
        };
    }

    solveDoubleAngle(problem) {
        return {
            type: 'Double Angle Equation',
            approach: 'Solve for 2x first, then divide by 2',
            identities: {
                sin: 'sin(2x) = 2sin(x)cos(x)',
                cos: 'cos(2x) = cos²(x) - sin²(x) = 2cos²(x) - 1 = 1 - 2sin²(x)',
                tan: 'tan(2x) = 2tan(x)/(1 - tan²(x))'
            },
            note: 'Extend interval to [0, 4π) for 2x since x ∈ [0, 2π)',
            category: 'multiple_angle'
        };
    }

    solveHalfAngle(problem) {
        return {
            type: 'Half Angle Equation',
            approach: 'Solve for x/2 first, then multiply by 2',
            identities: {
                sin: 'sin²(x/2) = (1 - cos(x))/2',
                cos: 'cos²(x/2) = (1 + cos(x))/2',
                tan: 'tan(x/2) = sin(x)/(1 + cos(x)) = (1 - cos(x))/sin(x)'
            },
            note: 'If x ∈ [0, 2π), then x/2 ∈ [0, π)',
            category: 'multiple_angle'
        };
    }

    solveTripleAngle(problem) {
        return {
            type: 'Triple Angle Equation',
            approach: 'Solve for 3x first, then divide by 3',
            note: 'Extend interval to [0, 6π) for 3x since x ∈ [0, 2π), giving 6 solutions typically',
            category: 'multiple_angle'
        };
    }

    solveInverseSine(problem) {
        return {
            type: 'Inverse Sine Equation',
            approach: 'Apply sine to both sides',
            domainNote: 'arcsin(x) is defined for x ∈ [-1, 1]',
            rangeNote: 'arcsin(x) returns values in [-π/2, π/2]',
            category: 'inverse_trig'
        };
    }

    solveInverseCosine(problem) {
        return {
            type: 'Inverse Cosine Equation',
            approach: 'Apply cosine to both sides',
            domainNote: 'arccos(x) is defined for x ∈ [-1, 1]',
            rangeNote: 'arccos(x) returns values in [0, π]',
            category: 'inverse_trig'
        };
    }

    solveInverseTangent(problem) {
        return {
            type: 'Inverse Tangent Equation',
            approach: 'Apply tangent to both sides',
            domainNote: 'arctan(x) is defined for all real x',
            rangeNote: 'arctan(x) returns values in (-π/2, π/2)',
            category: 'inverse_trig'
        };
    }

    solveTrigSystem(problem) {
        return {
            type: 'System of Trigonometric Equations',
            approach: 'Use substitution or elimination with identities',
            note: 'Solutions must satisfy all equations simultaneously',
            category: 'systems'
        };
    }

    solveRationalTrig(problem) {
        return {
            type: 'Rational Trigonometric Equation',
            approach: 'Clear denominators, note restrictions, solve, check validity',
            warning: 'Values making denominator zero are not solutions',
            category: 'rational_trig'
        };
    }

    solveAbsoluteValueTrig(problem) {
        return {
            type: 'Absolute Value Trigonometric Equation',
            approach: 'Split into two cases: positive and negative',
            note: 'Results in more solutions than basic trig equations',
            category: 'absolute_value_trig'
        };
    }

    solveSumToProduct(problem) {
        return {
            type: 'Sum to Product Equation',
            approach: 'Use sum-to-product identities to convert',
            identities: {
                sinSum: 'sin(A) + sin(B) = 2sin((A+B)/2)cos((A-B)/2)',
                cosSum: 'cos(A) + cos(B) = 2cos((A+B)/2)cos((A-B)/2)'
            },
            category: 'identity_based'
        };
    }

    // ===== VERIFICATION METHODS =====

    verifyTrigSolution(x, trigFunction, expectedValue) {
        let actualValue;
        
        switch(trigFunction.toLowerCase()) {
            case 'sin':
                actualValue = Math.sin(x);
                break;
            case 'cos':
                actualValue = Math.cos(x);
                break;
            case 'tan':
                actualValue = Math.tan(x);
                break;
            default:
                return { isValid: false, error: 'Unknown function' };
        }

        const difference = Math.abs(actualValue - expectedValue);
        const isValid = difference < 1e-9;

        return {
            solution: x,
            function: trigFunction,
            expectedValue: expectedValue,
            actualValue: actualValue,
            difference: difference,
            isValid: isValid
        };
    }

    // ===== STEP GENERATION =====

    generateTrigSteps(problem, solution) {
        let baseSteps = this.generateBaseTrigSteps(problem, solution);

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
            baseSteps = this.addELI5Explanations(baseSteps, problem);
        }

        return baseSteps;
    }

    generateBaseTrigSteps(problem, solution) {
        const { type } = problem;
        const category = this.trigTypes[type]?.category;

        switch(category) {
            case 'basic_trig':
                return this.generateBasicTrigSteps(problem, solution);
            case 'linear_trig':
                return this.generateLinearTrigSteps(problem, solution);
            case 'quadratic_trig':
                return this.generateQuadraticTrigSteps(problem, solution);
            case 'multiple_angle':
                return this.generateMultipleAngleSteps(problem, solution);
            default:
                return this.generateGenericTrigSteps(problem, solution);
        }
    }

    generateBasicTrigSteps(problem, solution) {
        const steps = [];
        const { k } = problem.parameters;
        const trigFunc = solution.type.includes('Sine') ? 'sin' : 
                        solution.type.includes('Cosine') ? 'cos' : 'tan';

        // Step 1: Given equation
        steps.push({
            stepNumber: 1,
            step: 'Given equation',
            description: `Start with the basic trigonometric equation`,
            expression: solution.equation,
            reasoning: `This is a basic ${trigFunc} equation. We need to find all angles x in [0, 2π) where ${trigFunc}(x) equals ${k}`,
            goalStatement: `Find all x such that ${trigFunc}(x) = ${k}`,
            unitCircleNote: `On the unit circle, we're looking for points where the ${trigFunc === 'sin' ? 'y-coordinate' : trigFunc === 'cos' ? 'x-coordinate' : 'slope of radius'} equals ${k}`
        });

        // Step 2: Check domain
        if (solution.solutionType === 'No solution') {
            steps.push({
                stepNumber: 2,
                step: 'Check domain',
                description: `Verify that ${k} is in the valid range`,
                reasoning: `${trigFunc === 'tan' ? 'Tangent can equal any real number' : `${trigFunc.charAt(0).toUpperCase() + trigFunc.slice(1)} must be between -1 and 1`}`,
                conclusion: solution.reason,
                finalAnswer: true
            });
            return steps;
        }

        // Step 3: Find reference angle
        steps.push({
            stepNumber: 2,
            step: 'Find reference angle',
            description: `Use inverse ${trigFunc} function`,
            beforeExpression: `${trigFunc}(x) = ${k}`,
            operation: `arc${trigFunc}`,
            afterExpression: `Reference angle = arc${trigFunc}(|${k}|) = ${solution.referenceAngle.toFixed(4)} rad`,
            reasoning: `The reference angle is the acute angle (in quadrant I) with the same ${trigFunc} value magnitude`,
            visualNote: `Draw the reference angle in quadrant I on the unit circle`
        });

        // Step 4: Determine quadrants
        steps.push({
            stepNumber: 3,
            step: 'Determine quadrants',
            description: `Identify which quadrants have ${trigFunc}(x) = ${k}`,
            quadrants: solution.quadrants,
            reasoning: this.getQuadrantReasoning(trigFunc, k),
            CASTrule: `Remember: ${this.getCastRule()}`,
            visualNote: `Mark the quadrants where ${trigFunc} has the correct sign`
        });

        // Step 5: Find all solutions
        steps.push({
            stepNumber: 4,
            step: 'Find all solutions',
            description: `Calculate angles in identified quadrants`,
            solutions: solution.solutions,
            solutionsFormatted: solution.solutions.map(s => `x = ${s.toFixed(4)} rad`),
            reasoning: this.getSolutionFormulas(trigFunc, k, solution.referenceAngle),
            finalAnswer: true
        });

        // Step 6: Verify
        if (this.includeVerificationInSteps && solution.verification) {
            steps.push({
                stepNumber: 5,
                step: 'Verify solutions',
                description: `Check each solution in original equation`,
                verifications: solution.verification,
                reasoning: `Substitute each solution back to confirm it satisfies ${trigFunc}(x) = ${k}`
            });
        }

        return steps;
    }

    generateLinearTrigSteps(problem, solution) {
        const steps = [];

        // Step 1: Given equation
        steps.push({
            stepNumber: 1,
            step: 'Given equation',
            description: 'Start with the linear trigonometric equation',
            expression: solution.equation,
            reasoning: 'This combines algebraic and trigonometric solving',
            goalStatement: 'Isolate the trig function, then solve the trig equation'
        });

        // Step 2: Isolate trig function
        steps.push({
            stepNumber: 2,
            step: 'Isolate trigonometric function',
            description: 'Use algebraic operations to isolate the trig term',
            beforeExpression: solution.equation,
            afterExpression: solution.isolatedForm,
            reasoning: 'Treat the trig function as a single variable temporarily',
            algebraicSteps: this.getAlgebraicIsolationSteps(problem.parameters)
        });

        // Step 3: Solve basic trig equation
        steps.push({
            stepNumber: 3,
            step: 'Solve trigonometric equation',
            description: 'Solve the basic trig equation',
            expression: solution.isolatedForm,
            reasoning: 'Now we have a basic trig equation to solve',
            referToMethod: 'Use same method as basic trig equations'
        });

        // Step 4: Account for transformation
        if (problem.parameters.b !== 1 || problem.parameters.c !== 0) {
            steps.push({
                stepNumber: 4,
                step: 'Account for transformations',
                description: 'Solve for x from the angle expression',
                reasoning: 'The angle inside the trig function is not just x',
                transformations: {
                    coefficient: problem.parameters.b,
                    phaseShift: problem.parameters.c
                }
            });
        }

        // Step 5: Final solutions
        steps.push({
            stepNumber: 5,
            step: 'Final solutions',
            description: 'List all solutions in the interval',
            solutions: solution.solutions,
            finalAnswer: true
        });

        return steps;
    }

    generateQuadraticTrigSteps(problem, solution) {
        const steps = [];

        // Step 1: Given equation
        steps.push({
            stepNumber: 1,
            step: 'Given equation',
            description: 'Start with quadratic trigonometric equation',
            expression: solution.equation,
            reasoning: 'This is quadratic in sin(x), cos(x), or tan(x)',
            goalStatement: 'Use substitution to convert to quadratic, solve, then find angles'
        });

        // Step 2: Substitution
        steps.push({
            stepNumber: 2,
            step: 'Substitution',
            description: solution.substitution,
            reasoning: 'This converts the trig equation into a standard quadratic',
            visualNote: 'We temporarily replace the trig function with u'
        });

        // Step 3: Solve quadratic
        steps.push({
            stepNumber: 3,
            step: 'Solve quadratic equation',
            description: 'Use quadratic formula or factoring',
            quadraticSolutions: solution.quadraticSolutions,
            reasoning: 'Standard quadratic solving techniques apply',
            method: 'Quadratic formula: u = [-b ± √(b² - 4ac)] / (2a)'
        });

        // Step 4: Check validity
        steps.push({
            stepNumber: 4,
            step: 'Check validity of solutions',
            description: 'Verify u values are in valid range for trig function',
            validSolutions: solution.quadraticSolutions.filter(u => Math.abs(u) <= 1),
            reasoning: 'sin and cos must be in [-1, 1]; tan has no restriction',
            rejected: solution.quadraticSolutions.filter(u => Math.abs(u) > 1)
        });

        // Step 5: Solve basic trig equations
        steps.push({
            stepNumber: 5,
            step: 'Solve basic trigonometric equations',
            description: 'For each valid u, solve the basic trig equation',
            reasoning: 'Each valid u gives a basic trig equation to solve'
        });

        // Step 6: Combine solutions
        steps.push({
            stepNumber: 6,
            step: 'Combine all solutions',
            description: 'List all solutions from all cases',
            solutions: solution.solutions,
            finalAnswer: true
        });

        return steps;
    }

    generateMultipleAngleSteps(problem, solution) {
        const steps = [];

        // Step 1: Identify multiple angle
        steps.push({
            stepNumber: 1,
            step: 'Identify multiple angle',
            description: 'Recognize the angle expression',
            reasoning: 'The trig function contains a multiple or fraction of x',
            note: 'This affects the period and number of solutions'
        });

        // Step 2: Substitution
        steps.push({
            stepNumber: 2,
            step: 'Substitution',
            description: 'Let u = (angle expression)',
            reasoning: 'Simplifies the equation temporarily',
            intervalNote: 'Determine the interval for u based on interval for x'
        });

        // Step 3: Solve for u
        steps.push({
            stepNumber: 3,
            step: 'Solve for u',
            description: 'Solve the basic trig equation in u',
            reasoning: 'Standard trig solving in extended or reduced interval'
        });

        // Step 4: Solve for x
        steps.push({
            stepNumber: 4,
            step: 'Solve for x',
            description: 'Convert u solutions back to x',
            reasoning: 'Divide or multiply to get x from u',
            finalAnswer: true
        });

        return steps;
    }

    generateGenericTrigSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Trigonometric equation',
            description: 'Solve the given trigonometric equation',
            expression: problem.equation || solution.equation,
            reasoning: 'Apply appropriate trigonometric solution technique',
            solution: solution
        }];
    }

    // ===== HELPER METHODS FOR STEP GENERATION =====

    getQuadrantReasoning(trigFunc, k) {
        const reasonings = {
            sin: k > 0 ? 'Sin is positive in quadrants I and II (above x-axis)' :
                         'Sin is negative in quadrants III and IV (below x-axis)',
            cos: k > 0 ? 'Cos is positive in quadrants I and IV (right of y-axis)' :
                         'Cos is negative in quadrants II and III (left of y-axis)',
            tan: k > 0 ? 'Tan is positive in quadrants I and III (sin and cos have same sign)' :
                         'Tan is negative in quadrants II and IV (sin and cos have opposite signs)'
        };

        return reasonings[trigFunc] || 'Determine quadrants based on sign';
    }

    getCastRule() {
        return 'CAST: All-Sin-Tan-Cos going counterclockwise from quadrant I';
    }

    getSolutionFormulas(trigFunc, k, refAngle) {
        if (trigFunc === 'sin') {
            if (k > 0) {
                return `Quadrant I: x = ${refAngle.toFixed(4)}, Quadrant II: x = π - ${refAngle.toFixed(4)}`;
            } else {
                return `Quadrant III: x = π + ${refAngle.toFixed(4)}, Quadrant IV: x = 2π - ${refAngle.toFixed(4)}`;
            }
        } else if (trigFunc === 'cos') {
            if (k > 0) {
                return `Quadrant I: x = ${refAngle.toFixed(4)}, Quadrant IV: x = 2π - ${refAngle.toFixed(4)}`;
            } else {
                return `Quadrant II: x = π - ${refAngle.toFixed(4)}, Quadrant III: x = π + ${refAngle.toFixed(4)}`;
            }
        } else {
            if (k >= 0) {
                return `Quadrant I: x = ${refAngle.toFixed(4)}, Quadrant III: x = π + ${refAngle.toFixed(4)}`;
            } else {
                return `Quadrant II: x = π - ${refAngle.toFixed(4)}, Quadrant IV: x = 2π - ${refAngle.toFixed(4)}`;
            }
        }
    }

    getAlgebraicIsolationSteps(params) {
        const steps = [];
        if (params.d !== 0) {
            steps.push(`Subtract ${params.d} from both sides`);
        }
        if (params.a !== 1) {
            steps.push(`Divide both sides by ${params.a}`);
        }
        return steps;
    }

    // ===== ENHANCED EXPLANATION METHODS =====

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
                keyVocabulary: this.identifyTrigKeyVocabulary(step),
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

    getTrigConceptualExplanation(step, problem) {
        const explanations = {
            'Given equation': 'Trigonometric equations ask: at what angles does this trig function equal this value? The unit circle helps us visualize all solutions.',
            'Find reference angle': 'The reference angle is the smallest positive angle with the same trig value magnitude. It\'s always in quadrant I.',
            'Determine quadrants': 'The sign of the trig value tells us which quadrants contain solutions. The unit circle makes this pattern clear.',
            'Find all solutions': 'Using symmetry of the unit circle, we find all angles in [0, 2π) with the same trig value.',
            'Isolate trigonometric function': 'We use algebra to get the trig function by itself, treating it like a variable.',
            'Substitution': 'Replacing the trig function with u converts the problem to familiar algebra.',
            'Check validity of solutions': 'Not all algebraic solutions are valid for trig functions due to domain restrictions.'
        };

        return explanations[step.step] || 'This step progresses toward finding all angle solutions.';
    }

    getTrigProceduralExplanation(step) {
        if (step.operation) {
            return `1. Identify what operation to perform: ${step.operation}
2. Apply it carefully
3. Simplify the result
4. Proceed to next step`;
        }
        return 'Follow the standard procedure for this type of step.';
    }

    getTrigVisualExplanation(step, problem) {
        const visualExplanations = {
            'Find reference angle': 'Draw the angle in quadrant I. This is your reference for finding angles in other quadrants.',
            'Determine quadrants': 'Shade the quadrants where the trig function has the correct sign using the unit circle.',
            'Find all solutions': 'Mark the solution angles on the unit circle. They should be symmetric about an axis.',
            'Isolate trigonometric function': 'Picture the trig function as a height or distance you\'re trying to match.'
        };

        return visualExplanations[step.step] || 'Visualize this step on the unit circle or trig graph.';
    }

    getTrigAlgebraicExplanation(step) {
        const algebraicRules = {
            'Find reference angle': 'Definition: arcsin, arccos, arctan return principal values',
            'Determine quadrants': 'CAST rule or unit circle sign analysis',
            'Isolate trigonometric function': 'Properties of equality: same operations on both sides',
            'Substitution': 'Variable substitution: let u = f(x)',
            'Solve quadratic equation': 'Quadratic formula: x = [-b ± √(b² - 4ac)] / (2a)'
        };

        return algebraicRules[step.step] || 'Apply standard mathematical principles.';
    }

    addTrigErrorPrevention(step, problemType) {
        const category = this.trigTypes[problemType]?.category || 'basic_trig';
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
                troubleshooting: this.generateTrigTroubleshootingTips(step)
            }
        };
    }

    generateTrigPreventionTips(step, problemType) {
        const tips = {
            'Find reference angle': [
                'Make sure calculator is in correct mode (radians or degrees)',
                'Reference angle is always positive and in quadrant I',
                'Check that input to inverse function is in valid domain'
            ],
            'Determine quadrants': [
                'Use CAST rule or unit circle',
                'Check sign of trig value matches quadrant',
                'Remember sin: y-coord, cos: x-coord on unit circle'
            ],
            'Find all solutions': [
                'Look for TWO solutions in [0, 2π) for most equations',
                'Use unit circle symmetry',
                'Don\'t forget second quadrant solution for positive sin'
            ],
            'Check validity of solutions': [
                'Sin and cos must be in [-1, 1]',
                'Reject any quadratic solutions outside this range',
                'Tan can be any value'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Check your work'];
    }

    generateTrigCheckPoints(step) {
        return [
            'Is my calculator in the correct mode?',
            'Did I find ALL solutions in the interval?',
            'Did I check the domain restrictions?',
            'Are my quadrants correct based on the sign?',
            'Did I verify my solutions?'
        ];
    }

    identifyTrigWarningFlags(step, problemType) {
        const warnings = {
            basic_trig: step.step === 'Find reference angle' ?
                ['Calculator mode must match problem', 'arcsin only gives one value, not all solutions'] : [],
            quadratic_trig: step.step === 'Check validity of solutions' ?
                ['|sin| ≤ 1 and |cos| ≤ 1', 'Reject invalid u values before solving for x'] : [],
            multiple_angle: step.step === 'Solve for u' ?
                ['Extend interval for u appropriately', 'More solutions than basic equations'] : []
        };

        const category = this.trigTypes[problemType]?.category || 'basic_trig';
        return warnings[category] || [];
    }

    addTrigScaffolding(steps, problem) {
        return steps.map((step, index) => ({
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

    generateTrigGuidingQuestions(step, problem) {
        const questions = {
            'Given equation': [
                'What trigonometric function is involved?',
                'What value does it equal?',
                'What interval am I looking in?'
            ],
            'Find reference angle': [
                'What is the principal value from the inverse function?',
                'Is my calculator in the right mode?',
                'What angle in quadrant I has this trig value?'
            ],
            'Determine quadrants': [
                'Is the trig value positive or negative?',
                'Which quadrants have that sign for this function?',
                'Can I use the CAST rule or unit circle?'
            ],
            'Find all solutions': [
                'How do I find the angle in the second quadrant?',
                'What is the symmetric pattern on the unit circle?',
                'Have I found all solutions in [0, 2π)?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'How does this help solve the equation?'];
    }

    generateTrigProgressiveHints(step, problem) {
        const category = this.trigTypes[problem.type]?.category || 'basic_trig';
        const hintSet = this.hints[category] || this.hints.basic_sine;

        return {
            level1: hintSet.level1 || 'Think about what this step requires.',
            level2: hintSet.level2 || 'Consider the unit circle and quadrants.',
            level3: hintSet.level3 || 'Use inverse trig functions and symmetry.',
            level4: hintSet.level4 || 'Apply the specific formulas for this case.'
        };
    }

    breakTrigIntoSubSteps(step) {
        if (step.step === 'Find reference angle') {
            return [
                'Take absolute value of k',
                'Apply inverse trig function to |k|',
                'Result is reference angle in quadrant I',
                'Write in radians or degrees as required'
            ];
        }

        if (step.step === 'Determine quadrants') {
            return [
                'Check sign of k (positive or negative)',
                'Recall which quadrants have that sign for this function',
                'List the quadrants',
                'Prepare to find angle in each quadrant'
            ];
        }

        return ['Understand the goal', 'Apply the technique', 'Verify the result'];
    }

    generateTrigPracticeVariation(step, problem) {
        return {
            similarProblem: 'Try the same type with special angles first (30°, 45°, 60°)',
            practiceHint: 'Draw the unit circle for visual practice',
            extension: 'Once comfortable, try with decimal values or multiple angles'
        };
    }

    explainTrigThinkingProcess(step) {
        return {
            observe: 'What trig function and value am I working with?',
            goal: 'What am I trying to find or determine?',
            strategy: 'What method applies here (inverse function, quadrant analysis, etc.)?',
            execute: 'How do I perform this step accurately?',
            verify: 'Does my result make sense on the unit circle?'
        };
    }

    identifyTrigDecisionPoints(step) {
        return [
            'Which inverse trig function to use?',
            'Which quadrants to check?',
            'How to handle multiple angle coefficients?',
            'When to use identities?'
        ];
    }

    suggestTrigAlternativeMethods(step, problem) {
        const alternatives = {
            'Find all solutions': [
                'Can use unit circle graphically',
                'Can use formulas for each quadrant',
                'Can graph the function and find intersections'
            ],
            'Solve quadratic equation': [
                'Factor if possible instead of quadratic formula',
                'Complete the square as alternative',
                'Graph to visualize solutions'
            ]
        };

        return alternatives[step.step] || ['The chosen method is appropriate for this problem'];
    }

    identifyTrigPrerequisites(step, problemType) {
        const category = this.trigTypes[problemType]?.category || 'basic_trig';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Basic trigonometry', 'Unit circle'];
    }

    identifyTrigKeyVocabulary(step) {
        const vocabulary = {
            'Given equation': ['trigonometric equation', 'interval', 'solution'],
            'Find reference angle': ['reference angle', 'inverse function', 'principal value', 'arcsin/arccos/arctan'],
            'Determine quadrants': ['quadrant', 'CAST rule', 'unit circle', 'sign'],
            'Find all solutions': ['symmetry', 'periodic', 'general solution'],
            'Substitution': ['substitution', 'variable', 'quadratic'],
            'Solve quadratic equation': ['quadratic formula', 'discriminant', 'factoring']
        };

        return vocabulary[step.step] || [];
    }

    generateTrigThinkingPrompts(step) {
        return {
            before: 'Before this step: What information do I have? What do I need to find?',
            during: 'During this step: Am I using the correct quadrants? Is my calculator set right?',
            after: 'After this step: Do my solutions make sense on the unit circle?'
        };
    }

    generateTrigSelfCheckQuestion(step) {
        const questions = {
            'Find reference angle': 'Is my reference angle between 0 and π/2?',
            'Determine quadrants': 'Do these quadrants match the sign of my trig value?',
            'Find all solutions': 'Are all my solutions in the required interval?',
            'Check validity of solutions': 'Are my u values in the valid range for this trig function?'
        };

        return questions[step.step] || 'Does this step make sense and progress toward the solution?';
    }

    describeTrigExpectedResult(step) {
        const expectations = {
            'Find reference angle': 'An angle between 0 and π/2 (or 0° and 90°)',
            'Determine quadrants': 'List of 1 or 2 quadrants',
            'Find all solutions': 'Typically 2 solutions in [0, 2π)',
            'Substitution': 'A quadratic equation in u',
            'Solve quadratic equation': '0, 1, or 2 values for u'
        };

        return expectations[step.step] || 'Progress toward finding angle solutions';
    }

    generateTrigTroubleshootingTips(step) {
        return [
            'Check calculator mode (radians vs degrees)',
            'Verify you\'re using the correct quadrants',
            'Draw the unit circle if confused',
            'Check domain restrictions for inverse functions',
            'Verify final solutions by substitution'
        ];
    }

    findTrigRealWorldConnection(step, problem) {
        const connections = {
            'basic_trig': 'Like finding when a Ferris wheel passenger is at a certain height - same height occurs at two different times in one rotation.',
            'quadratic_trig': 'Like finding when a pendulum reaches a specific speed - the relationship is quadratic in sine.',
            'multiple_angle': 'Like analyzing a vibration that oscillates faster than the fundamental frequency.'
        };

        const category = this.trigTypes[problem.type]?.category;
        return connections[category] || 'Trigonometry models periodic phenomena in nature and engineering.';
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

    generateStepBridge(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression || 'completed this step'}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary because: we continue toward finding all angle solutions`,
            howItHelps: `This will help by: ${this.explainStepBenefit(nextStep)}`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue solving`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
    }

    explainStepBenefit(nextStep) {
        return `bringing us closer to finding all solutions`;
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
                'trigonometric': 'trig',
                'reference angle': 'base angle',
                'quadrant': 'section of circle',
                'inverse function': 'reverse function',
                'principal value': 'main answer',
                'substitution': 'replacing'
            },
            intermediate: {
                // Keep standard terms
            },
            ELI5: {
                'trigonometric': 'triangle ratio',
                'reference angle': 'the helper angle',
                'quadrant': 'one of the four parts of the circle',
                'inverse function': 'working backwards',
                'principal value': 'the first answer the calculator gives',
                'substitution': 'swapping in a simpler letter',
                'equation': 'math puzzle'
            },
            detailed: {
                'trigonometric': 'trigonometric',
                'reference angle': 'reference angle (acute angle with same trig value)',
                'quadrant': 'quadrant (coordinate plane region)',
                'inverse function': 'inverse trigonometric function'
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

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateTrigELI5Explanation(step, problem),
                analogy: this.findRelevantTrigAnalogy(step, problem),
                simpleLanguage: this.convertToSimpleLanguage(step.description),
                visualization: this.suggestTrigVisualization(step)
            }
        }));
    }

    generateTrigELI5Explanation(step, problem) {
        const ELI5Explanations = {
            'Given equation': "We're looking for where on a circle the height (or position) matches a specific number. Imagine walking around a circular track - at which points are you at a certain height?",
            'Find reference angle': "First, we find the 'helper angle' - the simplest angle that has this trig value. It's like finding the first time you reach a height while walking around the circle.",
            'Determine quadrants': "Now we figure out which parts of the circle have the right height. It's like asking 'in which sections of the track am I this high up?'",
            'Find all solutions': "We mark all the spots on the circle where we're at the right height. Usually there are two spots in one full circle.",
            'Isolate trigonometric function': "We use regular math (add, subtract, multiply, divide) to get the trig part by itself, like solving a regular equation.",
            'Substitution': "We give the trig function a simple name like 'u' so we can solve it like a regular algebra problem first.",
            'Check validity of solutions': "We check if our answers make sense. For sine and cosine, the answer must be between -1 and 1, like checking if a height is possible."
        };

        return ELI5Explanations[step.step] || "We're taking another step to find where on the circle our equation is true!";
    }

    findRelevantTrigAnalogy(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(problem.type) || analogy.suitableFor.includes('basic_trig') || analogy.suitableFor.includes('all_types')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of walking around a circle and marking where you reach certain heights!";
    }

    convertToSimpleLanguage(description) {
        if (!description) return '';

        const simplifications = {
            'trigonometric': 'triangle',
            'reference angle': 'helper angle',
            'quadrant': 'section',
            'inverse function': 'working backwards',
            'principal value': 'first answer',
            'substitution': 'swapping',
            'equation': 'math puzzle',
            'solution': 'answer',
            'verify': 'check',
            'isolate': 'get by itself'
        };

        let simple = description;
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp(term, 'gi');
            simple = simple.replace(regex, replacement);
        }

        return simple;
    }

    suggestTrigVisualization(step) {
        const visualizations = {
            'Given equation': 'Draw a unit circle with center at origin',
            'Find reference angle': 'Draw the reference angle in the first quadrant (top right)',
            'Determine quadrants': 'Shade the quadrants where the trig function has the right sign',
            'Find all solutions': 'Mark dots on the circle where your answers are located',
            'Substitution': 'Write u = trig function to simplify thinking',
            'Solve quadratic equation': 'List the two values of u you found'
        };

        return visualizations[step.step] || 'Draw the unit circle to visualize this step';
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by continuing the solution process`,
            progression: 'We are getting closer to finding all angle solutions',
            relationship: 'Each step narrows down or identifies solution angles'
        };
    }

    // ===== GRAPH GENERATION =====

    generateTrigGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;
        const category = this.trigTypes[type]?.category;

        if (category && this.currentSolution.solutions && this.currentSolution.solutions.length > 0) {
            this.graphData = this.generateTrigGraph(this.currentProblem, this.currentSolution);
        }
    }

    generateTrigGraph(problem, solution) {
        const trigFunc = solution.type.includes('Sine') ? 'sin' :
                        solution.type.includes('Cosine') ? 'cos' : 'tan';
        
        return {
            type: 'trigonometric',
            function: trigFunc,
            solutions: solution.solutions,
            interval: [0, 2 * Math.PI],
            description: `Graph of y = ${trigFunc}(x) and y = ${problem.parameters.k}, showing solutions as intersections`,
            graphType: 'function_and_horizontal_line',
            visualization: 'Plot the trig function and horizontal line, mark intersections'
        };
    }

    // ===== WORKBOOK GENERATION =====

    generateTrigWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createUnitCircleSection(),
            this.createEnhancedStepsSection(),
            this.createTrigLessonSection(),
            this.createSolutionSection(),
            this.createAnalysisSection(),
            this.createVerificationSection(),
            this.createIdentitiesSection(),
            this.createRealWorldApplicationSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection(),
            this.createPracticeProblemsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Trigonometric Equations Mathematical Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            explanationLevel: this.explanationLevel,
            angleMode: this.angleMode,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSection() {
        if (!this.currentProblem) return null;

        const problemData = [
            ['Problem Type', this.trigTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.trigTypes[this.currentProblem.type]?.category || 'trigonometric'],
            ['Equation', this.currentSolution?.equation || this.currentProblem.cleanInput],
            ['Interval', '[0, 2π) radians or [0°, 360°)'],
            ['Description', this.currentProblem.scenario || 'Trigonometric equation']
        ];

        if (this.currentProblem.parameters.k !== undefined) {
            problemData.push(['', '']);
            problemData.push(['Parameters', '']);
            problemData.push(['k (target value)', this.currentProblem.parameters.k]);
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSection() {
        if (!this.prerequisiteChecks) return null;

        const category = this.trigTypes[this.currentProblem.type]?.category;
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

    createUnitCircleSection() {
        const circleData = [
            ['Unit Circle Reference', ''],
            ['', ''],
            ['Quadrant I (0 to π/2)', 'All functions positive'],
            ['Quadrant II (π/2 to π)', 'Sine positive, Cosine negative, Tangent negative'],
            ['Quadrant III (π to 3π/2)', 'Tangent positive, Sine negative, Cosine negative'],
            ['Quadrant IV (3π/2 to 2π)', 'Cosine positive, Sine negative, Tangent negative'],
            ['', ''],
            ['CAST Rule', 'All Students Take Calculus (counterclockwise from Quad I)'],
            ['', ''],
            ['Special Angles', ''],
            ['0°/0 rad', 'sin=0, cos=1, tan=0'],
            ['30°/π/6', 'sin=1/2, cos=√3/2, tan=√3/3'],
            ['45°/π/4', 'sin=√2/2, cos=√2/2, tan=1'],
            ['60°/π/3', 'sin=√3/2, cos=1/2, tan=√3'],
            ['90°/π/2', 'sin=1, cos=0, tan=undefined']
        ];

        return {
            title: 'Unit Circle Reference',
            type: 'reference',
            data: circleData
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

            if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            if (step.beforeExpression && step.afterExpression) {
                stepsData.push(['Before', step.beforeExpression]);
                if (step.operation) {
                    stepsData.push(['Operation', step.operation]);
                }
                stepsData.push(['After', step.afterExpression]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.unitCircleNote) {
                stepsData.push(['Unit Circle', step.unitCircleNote]);
            }

            if (step.quadrants) {
                stepsData.push(['Quadrants', step.quadrants.join(', ')]);
            }

            if (step.solutions && step.finalAnswer) {
                stepsData.push(['Solutions', step.solutions.map(s => s.toFixed(4) + ' rad').join(', ')]);
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

            // Enhanced explanations
            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
                stepsData.push(['Visual', step.explanations.visual]);
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
                stepsData.push(['Think During', step.thinkingPrompts.during]);
            }

            // Self-check
            if (step.selfCheck && this.includeSelfCheckQuestions) {
                stepsData.push(['Self-Check', step.selfCheck]);
            }

            stepsData.push(['', '']);
        });

        return {
            title: `Enhanced Step-by-Step Solution (${this.explanationLevel} level)`,
            type: 'steps',
            data: stepsData
        };
    }

    createTrigLessonSection() {
        const { type } = this.currentProblem;
        const category = this.trigTypes[type]?.category;

        const lessonData = [
            ['Key Concepts', ''],
            ['', 'Trig functions are periodic - they repeat in patterns'],
            ['', 'Unit circle shows all angle relationships visually'],
            ['', 'Reference angles help find all solutions'],
            ['', 'CAST rule: All-Sin-Tan-Cos for quadrant signs'],
            ['', ''],
            ['Important Identities', ''],
            ['', 'sin²(x) + cos²(x) = 1 (Pythagorean)'],
            ['', '1 + tan²(x) = sec²(x)'],
            ['', 'sin(x) has period 2π, tan(x) has period π'],
            ['', ''],
            ['Inverse Functions', ''],
            ['', 'arcsin returns values in [-π/2, π/2]'],
            ['', 'arccos returns values in [0, π]'],
            ['', 'arctan returns values in (-π/2, π/2)']
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

        if (this.currentSolution.solutionType === 'No solution') {
            solutionData.push(['Solution Type', this.currentSolution.solutionType]);
            solutionData.push(['Reason', this.currentSolution.reason]);
        } else if (this.currentSolution.solutions && this.currentSolution.solutions.length > 0) {
            solutionData.push(['Solution Type', this.currentSolution.solutionType]);
            solutionData.push(['Number of Solutions', this.currentSolution.solutions.length]);
            solutionData.push(['', '']);
            
            this.currentSolution.solutions.forEach((sol, index) => {
                const radians = sol.toFixed(4);
                const degrees = (sol * 180 / Math.PI).toFixed(2);
                solutionData.push([`Solution ${index + 1}`, `${radians} rad (${degrees}°)`]);
            });

            if (this.currentSolution.quadrants) {
                solutionData.push(['', '']);
                solutionData.push(['Quadrants', this.currentSolution.quadrants.join(', ')]);
            }
        }

        return {
            title: 'Final Solutions',
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
            ['Category', this.trigTypes[this.currentProblem.type]?.category]
        ];

        if (this.currentSolution.referenceAngle !== undefined) {
            analysisData.push(['Reference Angle', `${this.currentSolution.referenceAngle.toFixed(4)} rad`]);
        }

        if (this.currentSolution.period) {
            analysisData.push(['Period', `${this.currentSolution.period.toFixed(4)} rad`]);
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSection() {
        if (!this.currentSolution || !this.currentProblem) return null;

        if (this.currentSolution.solutionType === 'No solution') {
            return {
                title: 'Solution Verification',
                type: 'verification',
                data: [['Verification', 'No solution to verify']]
            };
        }

        const verificationData = [
            ['Verification Method', 'Direct substitution into original equation'],
            ['', '']
        ];

        if (this.currentSolution.verification && this.currentSolution.verification.length > 0) {
            this.currentSolution.verification.forEach((v, index) => {
                verificationData.push([`Solution ${index + 1}`, `x = ${v.solution.toFixed(4)}`]);
                verificationData.push(['Expected', v.expectedValue.toFixed(6)]);
                verificationData.push(['Actual', v.actualValue.toFixed(6)]);
                verificationData.push(['Valid', v.isValid ? 'Yes ✓' : 'No']);
                verificationData.push(['', '']);
            });
        } else {
            verificationData.push(['Note', 'Substitute each solution into original equation to verify']);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createIdentitiesSection() {
        const identityData = [
            ['Pythagorean Identities', ''],
            ['Fundamental', 'sin²(x) + cos²(x) = 1'],
            ['Tangent', '1 + tan²(x) = sec²(x)'],
            ['Cotangent', '1 + cot²(x) = csc²(x)'],
            ['', ''],
            ['Double Angle Formulas', ''],
            ['Sine', 'sin(2x) = 2sin(x)cos(x)'],
            ['Cosine', 'cos(2x) = cos²(x) - sin²(x) = 2cos²(x) - 1 = 1 - 2sin²(x)'],
            ['Tangent', 'tan(2x) = 2tan(x)/(1 - tan²(x))'],
            ['', ''],
            ['Half Angle Formulas', ''],
            ['Sine', 'sin²(x/2) = (1 - cos(x))/2'],
            ['Cosine', 'cos²(x/2) = (1 + cos(x))/2'],
            ['', ''],
            ['Sum/Difference Formulas', ''],
            ['Sin Sum', 'sin(A + B) = sin(A)cos(B) + cos(A)sin(B)'],
            ['Cos Sum', 'cos(A + B) = cos(A)cos(B) - sin(A)sin(B)']
        ];

        return {
            title: 'Trigonometric Identities Reference',
            type: 'identities',
            data: identityData
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
        const category = this.trigTypes[problemType]?.category;

        const pedagogicalDatabase = {
            basic_trig: {
                objectives: [
                    'Solve basic trigonometric equations',
                    'Use the unit circle to find solutions',
                    'Apply reference angles and quadrant analysis',
                    'Verify solutions'
                ],
                keyConcepts: [
                    'Unit circle and its coordinates',
                    'Reference angles',
                    'CAST rule for quadrant signs',
                    'Periodicity of trig functions',
                    'Domain restrictions for inverse functions'
                ],
                prerequisites: [
                    'Definition of sin, cos, tan',
                    'Unit circle familiarity',
                    'Inverse trig functions',
                    'Quadrant identification'
                ],
                commonDifficulties: [
                    'Calculator mode confusion (degrees vs radians)',
                    'Finding only one solution instead of all',
                    'Incorrect quadrant determination',
                    'Misunderstanding inverse function range'
                ],
                teachingStrategies: [
                    'Always draw unit circle first',
                    'Emphasize checking calculator mode',
                    'Practice CAST rule repeatedly',
                    'Use color coding for different quadrants',
                    'Verify solutions by substitution'
                ],
                extensions: [
                    'Linear trigonometric equations',
                    'Multiple angle equations',
                    'Trigonometric identities'
                ],
                assessment: [
                    'Can student find reference angle correctly?',
                    'Does student identify correct quadrants?',
                    'Does student find all solutions in interval?',
                    'Can student verify solutions?'
                ]
            },
            linear_trig: {
                objectives: [
                    'Combine algebraic and trigonometric solving',
                    'Isolate trigonometric functions',
                    'Account for transformations',
                    'Understand amplitude, period, phase shift'
                ],
                keyConcepts: [
                    'Algebraic isolation',
                    'Amplitude and vertical shift',
                    'Period and frequency',
                    'Phase shift',
                    'Transformations of trig graphs'
                ],
                prerequisites: [
                    'Basic trig equation solving',
                    'Linear equation solving',
                    'Understanding of function transformations'
                ],
                commonDifficulties: [
                    'Forgetting to account for coefficient of x',
                    'Errors in algebraic manipulation',
                    'Not checking domain after isolation'
                ],
                teachingStrategies: [
                    'Teach two-stage process: algebra first, then trig',
                    'Use graphing to visualize transformations',
                    'Practice identifying amplitude, period, shift'
                ],
                extensions: [
                    'Modeling real-world periodic phenomena',
                    'Composite trig functions',
                    'Optimization problems'
                ],
                assessment: [
                    'Can student isolate trig function?',
                    'Does student handle transformations correctly?',
                    'Can student interpret solutions in context?'
                ]
            },
            quadratic_trig: {
                objectives: [
                    'Use substitution method',
                    'Solve quadratic equations',
                    'Check validity of solutions',
                    'Combine quadratic and trig solving'
                ],
                keyConcepts: [
                    'Substitution technique',
                    'Quadratic formula and factoring',
                    'Domain restrictions',
                    'Multiple solutions'
                ],
                prerequisites: [
                    'Basic trig equations',
                    'Quadratic equation solving',
                    'Understanding of valid ranges for trig functions'
                ],
                commonDifficulties: [
                    'Not checking if u values are valid',
                    'Errors in quadratic formula',
                    'Forgetting to solve for x after finding u'
                ],
                teachingStrategies: [
                    'Emphasize domain check after quadratic step',
                    'Practice substitution with simple cases first',
                    'Use color coding: u in one color, x in another'
                ],
                extensions: [
                    'Higher-degree polynomial trig equations',
                    'Systems involving quadratic trig equations'
                ],
                assessment: [
                    'Does student substitute correctly?',
                    'Can student solve quadratic accurately?',
                    'Does student check validity?',
                    'Can student complete the process back to x?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Solve trigonometric equations'],
            keyConcepts: ['Trig functions', 'Unit circle'],
            prerequisites: ['Basic trigonometry'],
            commonDifficulties: ['Various computational challenges'],
            teachingStrategies: ['Step-by-step instruction'],
            extensions: ['More complex equations'],
            assessment: ['Verify understanding of process']
        };
    }

    generateTrigAlternativeMethods(problemType) {
        const category = this.trigTypes[problemType]?.category;

        const alternativeDatabase = {
            basic_trig: {
                primaryMethod: 'Reference Angle and Quadrant Analysis',
                methods: [
                    {
                        name: 'Unit Circle Direct Method',
                        description: 'Mark the trig value on unit circle and read off angles directly'
                    },
                    {
                        name: 'Graphical Intersection',
                        description: 'Graph y = trig function and y = k, find intersection x-coordinates'
                    },
                    {
                        name: 'Special Angles Memorization',
                        description: 'For common values, recall special angles without calculation'
                    }
                ],
                comparison: 'Reference angle method is most systematic; unit circle is most visual; graphing provides confirmation'
            },
            linear_trig: {
                primaryMethod: 'Algebraic Isolation then Trig Solving',
                methods: [
                    {
                        name: 'Graphical Method',
                        description: 'Graph both sides of equation and find intersection points'
                    },
                    {
                        name: 'Direct Substitution',
                        description: 'Let u = bx + c immediately, solve in extended interval, then back-substitute'
                    },
                    {
                        name: 'Technology-Assisted',
                        description: 'Use graphing calculator or software to find solutions numerically'
                    }
                ],
                comparison: 'Algebraic isolation most reliable; graphical method provides visual understanding; technology useful for verification'
            },
            quadratic_trig: {
                primaryMethod: 'Substitution and Quadratic Formula',
                methods: [
                    {
                        name: 'Factoring Method',
                        description: 'If quadratic factors nicely, use factoring instead of formula'
                    },
                    {
                        name: 'Completing the Square',
                        description: 'Alternative to quadratic formula, useful for understanding'
                    },
                    {
                        name: 'Graphical Approach',
                        description: 'Graph the quadratic in u, find u-intercepts, then solve for x'
                    }
                ],
                comparison: 'Quadratic formula always works; factoring is faster when applicable; completing square builds understanding'
            },
            multiple_angle: {
                primaryMethod: 'Substitution for Multiple Angle then Division',
                methods: [
                    {
                        name: 'Identity Expansion',
                        description: 'Use double/triple angle formulas to expand, then solve'
                    },
                    {
                        name: 'Direct Interval Extension',
                        description: 'Solve directly with awareness of extended solution count'
                    }
                ],
                comparison: 'Substitution is clearest; identity expansion can be complex; direct method requires careful interval tracking'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard trigonometric approach',
            methods: [{
                name: 'Alternative approach',
                description: 'Other methods depend on specific equation structure'
            }],
            comparison: 'Choose method based on equation characteristics and personal preference'
        };
    }
}

// Export the class
export default EnhancedTrigonometricEquationsWorkbook;

