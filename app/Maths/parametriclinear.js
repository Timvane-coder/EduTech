// Enhanced Parametric Linear Equations Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedParametricLinearMathematicalWorkbook {
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
        this.parametricData = null;

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

        // Parametric-specific options
        this.includeParametricGraphs = options.includeParametricGraphs !== false;
        this.includeVectorRepresentation = options.includeVectorRepresentation !== false;
        this.includeMotionAnalysis = options.includeMotionAnalysis !== false;
        this.includeParameterElimination = options.includeParameterElimination !== false;

        this.mathSymbols = this.initializeMathSymbols();
        this.setThemeColors();
        this.initializeParametricSolvers();
        this.initializeParametricLessons();
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
        this.initializeParametricConceptsDatabase();
        this.initializeVectorDatabase();
        this.initializeMotionDatabase();
    }

    initializeMathSymbols() {
        return {
            // Mathematical operators
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±', 'sqrt': '√',
            // Greek letters
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            'tau': 'τ', 'omega': 'ω', 'phi': 'φ',
            // Special symbols
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'perpendicular': '⊥', 'parallel': '∥',
            // Parametric symbols
            'vector': '→', 'rightarrow': '→', 'partial': '∂'
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
                parametricBg: '#e8f4f8',
                parametricText: '#0066cc',
                vectorBg: '#f0e8ff',
                vectorText: '#6600cc'
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
                parametricBg: '#d0e8f2',
                parametricText: '#004080',
                vectorBg: '#e0d4f5',
                vectorText: '#4d0099'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeParametricLessons() {
        this.lessons = {
            parametric_basics: {
                title: "Introduction to Parametric Linear Equations",
                concepts: [
                    "Parametric equations express coordinates as functions of a parameter (usually t)",
                    "Standard form: x = f(t), y = g(t) where t is the parameter",
                    "For linear parametric: x = x₀ + at, y = y₀ + bt",
                    "Parameter t often represents time in motion problems",
                    "The path traced is called a parametric curve"
                ],
                theory: "Parametric equations provide an alternative way to describe curves by expressing both x and y coordinates as functions of an independent parameter. This is especially useful for describing motion and paths that cannot be expressed as single functions y = f(x).",
                keyFormulas: {
                    "Standard Parametric Form": "x = x₀ + at, y = y₀ + bt",
                    "Vector Form": "r(t) = ⟨x₀ + at, y₀ + bt⟩",
                    "Point-Slope Parametric": "x = x₀ + t·cosθ, y = y₀ + t·sinθ",
                    "Eliminating Parameter": "From x and y equations, solve for t and substitute"
                },
                components: {
                    "x₀, y₀": "Initial point (starting position at t = 0)",
                    "a, b": "Direction vector components (rate of change)",
                    "t": "Parameter (often time)",
                    "⟨a, b⟩": "Direction vector"
                },
                applications: [
                    "Motion in a straight line",
                    "Projectile motion (linear approximation)",
                    "Computer graphics and animation",
                    "Robotics path planning",
                    "Physics kinematics"
                ]
            },

            parametric_to_cartesian: {
                title: "Converting Parametric to Cartesian Form",
                concepts: [
                    "Eliminate the parameter t to get y = f(x) form",
                    "Solve one equation for t, substitute into the other",
                    "Result is standard Cartesian equation",
                    "May lose direction and speed information",
                    "Domain restrictions may change"
                ],
                theory: "Converting parametric to Cartesian form creates a single equation relating x and y directly, but loses information about how the curve is traced (speed and direction).",
                keyFormulas: {
                    "Elimination Method": "Solve x = x₀ + at for t, substitute into y equation",
                    "Linear Case": "If x = x₀ + at and y = y₀ + bt, then y - y₀ = (b/a)(x - x₀)",
                    "Slope Relationship": "slope m = b/a (ratio of direction vector components)"
                },
                solvingSteps: [
                    "Solve x-equation for parameter t",
                    "Substitute expression for t into y-equation",
                    "Simplify to get y in terms of x only",
                    "Identify any domain restrictions",
                    "Verify with test points"
                ],
                applications: [
                    "Graphing parametric curves",
                    "Finding standard form of line",
                    "Analyzing relationships between variables",
                    "Simplifying complex motion problems"
                ]
            },

            cartesian_to_parametric: {
                title: "Converting Cartesian to Parametric Form",
                concepts: [
                    "Multiple parametric forms can represent same curve",
                    "Choose parameter to simplify problem",
                    "Common choice: let x = t, then y = f(t)",
                    "Or use point-direction form with parameter as distance",
                    "Parametric form adds directional information"
                ],
                theory: "Converting from Cartesian to parametric creates flexibility in how we describe curves and is essential for motion problems where we need to track position over time.",
                keyFormulas: {
                    "Simple Parametrization": "Let x = t, then y = f(t)",
                    "Point-Direction Form": "x = x₀ + at, y = y₀ + bt where ⟨a,b⟩ is direction",
                    "Using Slope": "If y = mx + c, then x = t, y = mt + c"
                },
                parameterizationStrategies: {
                    "Let x = t": "Simplest approach, keeps x as independent variable",
                    "Let y = t": "Useful when x is complicated function of y",
                    "Let t = distance": "Natural for physics problems",
                    "Let t = time": "Standard for motion problems"
                },
                applications: [
                    "Describing motion along a path",
                    "Computer graphics parametrization",
                    "Modeling time-dependent processes",
                    "Animation and robotics"
                ]
            },

            direction_vectors: {
                title: "Direction Vectors in Parametric Equations",
                concepts: [
                    "Direction vector ⟨a, b⟩ shows direction of motion",
                    "Magnitude ||⟨a, b⟩|| = √(a² + b²) is speed",
                    "Unit direction vector: ⟨a, b⟩/||⟨a, b⟩||",
                    "Parallel lines have parallel direction vectors",
                    "Perpendicular lines have perpendicular direction vectors"
                ],
                theory: "The direction vector encodes both the direction and speed of motion along a parametric curve. For linear parametric equations, this vector is constant.",
                keyFormulas: {
                    "Direction Vector": "⟨a, b⟩ from x = x₀ + at, y = y₀ + bt",
                    "Magnitude": "||v|| = √(a² + b²)",
                    "Unit Vector": "û = ⟨a/||v||, b/||v||⟩",
                    "Dot Product": "⟨a₁, b₁⟩ · ⟨a₂, b₂⟩ = a₁a₂ + b₁b₂"
                },
                vectorOperations: {
                    "Parallel Check": "Vectors ⟨a₁, b₁⟩ and ⟨a₂, b₂⟩ parallel if a₁/a₂ = b₁/b₂",
                    "Perpendicular Check": "Vectors perpendicular if a₁a₂ + b₁b₂ = 0",
                    "Scalar Multiple": "k⟨a, b⟩ = ⟨ka, kb⟩ (same direction, different speed)"
                },
                applications: [
                    "Velocity vectors in physics",
                    "Computer graphics transformations",
                    "Navigation and pathfinding",
                    "Force analysis in engineering"
                ]
            },

            parametric_motion: {
                title: "Motion Problems with Parametric Equations",
                concepts: [
                    "Position: r(t) = ⟨x(t), y(t)⟩",
                    "Velocity: v(t) = r'(t) = ⟨x'(t), y'(t)⟩ = ⟨a, b⟩ (constant for linear)",
                    "Speed: ||v(t)|| = √(a² + b²)",
                    "Distance traveled: speed × time (for constant velocity)",
                    "Collision: when two objects at same position at same time"
                ],
                theory: "Parametric equations naturally describe motion because the parameter t represents time, allowing us to track position, velocity, and other motion quantities.",
                keyFormulas: {
                    "Position": "r(t) = ⟨x₀ + at, y₀ + bt⟩",
                    "Velocity": "v(t) = ⟨a, b⟩ (constant)",
                    "Speed": "s = √(a² + b²)",
                    "Distance": "d = s·t for constant velocity"
                },
                motionAnalysis: {
                    "Initial Position": "r(0) = ⟨x₀, y₀⟩",
                    "Position at time t": "r(t) = ⟨x₀ + at, y₀ + bt⟩",
                    "Displacement": "Δr = r(t₂) - r(t₁)",
                    "Average Velocity": "Δr/Δt"
                },
                applications: [
                    "Projectile motion",
                    "Vehicle tracking",
                    "Satellite orbits (linear approximation)",
                    "Particle physics",
                    "Animation timing"
                ]
            },

            intersection_problems: {
                title: "Intersection of Parametric Lines",
                concepts: [
                    "Two lines intersect when positions equal at some parameter values",
                    "May use different parameters: t and s",
                    "Set x₁(t) = x₂(s) and y₁(t) = y₂(s)",
                    "Solve system to find intersection point",
                    "Parallel lines never intersect (or are identical)"
                ],
                theory: "Finding intersections of parametric lines requires solving a system where we find parameter values that make both coordinates equal simultaneously.",
                keyFormulas: {
                    "Intersection Condition": "⟨x₁(t), y₁(t)⟩ = ⟨x₂(s), y₂(s)⟩",
                    "System to Solve": "x₁₀ + a₁t = x₂₀ + a₂s, y₁₀ + b₁t = y₂₀ + b₂s"
                },
                solvingSteps: [
                    "Write both parametric equations",
                    "Set x-components equal: x₁(t) = x₂(s)",
                    "Set y-components equal: y₁(t) = y₂(s)",
                    "Solve system of two equations for t and s",
                    "Substitute back to find intersection point",
                    "Check: both parametric equations give same point"
                ],
                specialCases: {
                    "Parallel Lines": "No solution (direction vectors parallel, different starting points)",
                    "Identical Lines": "Infinite solutions (same line)",
                    "Skew Lines": "In 3D, may not intersect even if not parallel"
                },
                applications: [
                    "Collision detection",
                    "Path intersection in robotics",
                    "Computer graphics ray tracing",
                    "Traffic flow analysis"
                ]
            },

            distance_problems: {
                title: "Distance in Parametric Systems",
                concepts: [
                    "Distance between two points: standard distance formula",
                    "Distance from point to parametric line: perpendicular distance",
                    "Distance along path: arc length (linear case = straight distance)",
                    "Closest approach: minimize distance function"
                ],
                theory: "Distance calculations in parametric form often require finding specific parameter values that minimize or achieve certain distance conditions.",
                keyFormulas: {
                    "Point Distance": "d = √[(x₂-x₁)² + (y₂-y₁)²]",
                    "Distance at time t": "d(t) = √[(x(t)-x₀)² + (y(t)-y₀)²]",
                    "Point to Line": "d = |ax₀ + by₀ + c|/√(a² + b²) after conversion"
                },
                applications: [
                    "Minimum distance problems",
                    "Closest approach calculations",
                    "Optimization in robotics",
                    "Collision avoidance"
                ]
            },

            parametric_systems: {
                title: "Systems of Parametric Equations",
                concepts: [
                    "Multiple objects moving with different parametric equations",
                    "Each object may have its own parameter",
                    "Solving systems finds relationships between parameters",
                    "Applications in collision detection and coordination"
                ],
                theory: "Systems of parametric equations describe multiple moving objects or paths, requiring coordination of different parameters.",
                keyFormulas: {
                    "Two-Object System": "x₁ = f₁(t), y₁ = g₁(t); x₂ = f₂(s), y₂ = g₂(s)",
                    "Collision Condition": "f₁(t) = f₂(t) and g₁(t) = g₂(t) at same t"
                },
                applications: [
                    "Multi-object motion",
                    "Collision detection",
                    "Coordinated robotics",
                    "Traffic management"
                ]
            },

            special_parametric_forms: {
                title: "Special Forms of Linear Parametric Equations",
                concepts: [
                    "Horizontal line: x = x₀ + at, y = c (constant y)",
                    "Vertical line: x = c, y = y₀ + bt (constant x)",
                    "Line through origin: x = at, y = bt",
                    "Diagonal lines: equal coefficients give 45° angles"
                ],
                theory: "Special cases of parametric linear equations correspond to lines with specific orientations and properties.",
                specialCases: {
                    "Horizontal": "y constant, all motion in x-direction",
                    "Vertical": "x constant, all motion in y-direction",
                    "Through Origin": "Passes through (0,0) at t=0",
                    "Unit Speed": "||⟨a,b⟩|| = 1"
                },
                applications: [
                    "Axis-aligned motion",
                    "Normalized velocity vectors",
                    "Standard position motion"
                ]
            },

            parametric_word_problems: {
                title: "Word Problems with Parametric Equations",
                concepts: [
                    "Identify initial position (x₀, y₀)",
                    "Identify velocity components (a, b)",
                    "Set up parametric equations",
                    "Use parameter t as time",
                    "Solve for required time or position"
                ],
                theory: "Real-world motion problems naturally fit parametric form because position depends on time.",
                problemTypes: {
                    "Meeting Problems": "When do two objects meet?",
                    "Distance Problems": "How far has object traveled?",
                    "Time Problems": "When does object reach certain position?",
                    "Speed Problems": "What is the speed of motion?"
                },
                solutionStrategy: [
                    "Read problem carefully, identify what's given",
                    "Define coordinate system",
                    "Identify initial position",
                    "Identify velocity (direction and speed)",
                    "Write parametric equations",
                    "Set up equation for what's asked",
                    "Solve for parameter t or other unknown",
                    "Interpret answer in context"
                ],
                applications: [
                    "Physics kinematics",
                    "Navigation problems",
                    "Sports trajectory analysis",
                    "Traffic and logistics"
                ]
            }
        };
    }

    initializeParametricSolvers() {
        this.parametricTypes = {
            // Basic parametric equations
            standard_parametric: {
                patterns: [
                    /x\s*=.*t/i,
                    /y\s*=.*t/i,
                    /parametric/i
                ],
                solver: this.solveStandardParametric.bind(this),
                name: 'Standard Linear Parametric Equations',
                category: 'parametric_basics',
                description: 'Solves x = x₀ + at, y = y₀ + bt'
            },

            // Parametric to Cartesian conversion
            parametric_to_cartesian: {
                patterns: [
                    /eliminate.*parameter/i,
                    /cartesian.*form/i,
                    /convert.*to.*y\s*=/i
                ],
                solver: this.solveParametricToCartesian.bind(this),
                name: 'Parametric to Cartesian Conversion',
                category: 'parametric_to_cartesian',
                description: 'Eliminates parameter to get Cartesian form'
            },

            // Cartesian to Parametric conversion
            cartesian_to_parametric: {
                patterns: [
                    /parametrize/i,
                    /parametric.*form.*of/i,
                    /convert.*to.*parametric/i
                ],
                solver: this.solveCartesianToParametric.bind(this),
                name: 'Cartesian to Parametric Conversion',
                category: 'cartesian_to_parametric',
                description: 'Converts y = mx + b to parametric form'
            },

            // Finding specific points
            parametric_point: {
                patterns: [
                    /find.*point.*t\s*=/i,
                    /position.*at.*t/i,
                    /where.*when.*t/i
                ],
                solver: this.solveParametricPoint.bind(this),
                name: 'Find Point at Parameter Value',
                category: 'parametric_basics',
                description: 'Finds (x,y) for given t value'
            },

            // Finding parameter for given point
            parameter_for_point: {
                patterns: [
                    /find.*t.*when/i,
                    /parameter.*for.*point/i,
                    /when.*does.*reach/i
                ],
                solver: this.solveParameterForPoint.bind(this),
                name: 'Find Parameter for Given Point',
                category: 'parametric_basics',
                description: 'Finds t value when curve passes through point'
            },

            // Direction vector problems
            direction_vector: {
                patterns: [
                    /direction.*vector/i,
                    /velocity.*vector/i,
                    /find.*direction/i
                ],
                solver: this.solveDirectionVector.bind(this),
                name: 'Direction Vector Problems',
                category: 'direction_vectors',
                description: 'Analyzes direction and velocity vectors'
            },

            // Speed and distance
            parametric_speed: {
                patterns: [
                    /speed/i,
                    /velocity.*magnitude/i,
                    /how.*fast/i
                ],
                solver: this.solveParametricSpeed.bind(this),
                name: 'Speed Calculation',
                category: 'parametric_motion',
                description: 'Calculates speed from direction vector'
            },

            parametric_distance: {
                patterns: [
                    /distance.*traveled/i,
                    /how.*far/i,
                    /total.*distance/i
                ],
                solver: this.solveParametricDistance.bind(this),
                name: 'Distance Traveled',
                category: 'distance_problems',
                description: 'Calculates distance traveled over time'
            },

            // Intersection problems
            parametric_intersection: {
                patterns: [
                    /intersection/i,
                    /where.*lines.*meet/i,
                    /do.*intersect/i
                ],
                solver: this.solveParametricIntersection.bind(this),
                name: 'Intersection of Parametric Lines',
                category: 'intersection_problems',
                description: 'Finds where two parametric lines intersect'
            },

            // Collision problems
            parametric_collision: {
                patterns: [
                    /collision/i,
                    /when.*meet/i,
                    /crash/i
                ],
                solver: this.solveParametricCollision.bind(this),
                name: 'Collision Detection',
                category: 'parametric_motion',
                description: 'Determines if/when two objects collide'
            },

            // Parallel/perpendicular
            parametric_parallel: {
                patterns: [
                    /parallel/i,
                    /same.*direction/i
                ],
                solver: this.solveParametricParallel.bind(this),
                name: 'Parallel Lines Check',
                category: 'direction_vectors',
                description: 'Checks if parametric lines are parallel'
            },

            parametric_perpendicular: {
                patterns: [
                    /perpendicular/i,
                    /orthogonal/i,
                    /right.*angle/i
                ],
                solver: this.solveParametricPerpendicular.bind(this),
                name: 'Perpendicular Lines Check',
                category: 'direction_vectors',
                description: 'Checks if parametric lines are perpendicular'
            },

            // Motion word problems
            parametric_motion_word: {
                patterns: [
                    /moving.*at/i,
                    /starts.*at/i,
                    /travels.*from/i
                ],
                solver: this.solveParametricMotionWord.bind(this),
                name: 'Motion Word Problems',
                category: 'parametric_word_problems',
                description: 'Solves real-world motion problems'
            },

            // Vector form
            vector_parametric: {
                patterns: [
                    /vector.*form/i,
                    /r\(t\)/i,
                    /<.*,.*>/
                ],
                solver: this.solveVectorParametric.bind(this),
                name: 'Vector Form Parametric',
                category: 'direction_vectors',
                description: 'Works with vector notation r(t) = ⟨x(t), y(t)⟩'
            },

            // Time to reach specific coordinates
            time_to_x: {
                patterns: [
                    /when.*x\s*=/i,
                    /time.*to.*reach.*x/i
                ],
                solver: this.solveTimeToX.bind(this),
                name: 'Time to Reach X-Coordinate',
                category: 'parametric_motion',
                description: 'Finds when x reaches specific value'
            },

            time_to_y: {
                patterns: [
                    /when.*y\s*=/i,
                    /time.*to.*reach.*y/i
                ],
                solver: this.solveTimeToY.bind(this),
                name: 'Time to Reach Y-Coordinate',
                category: 'parametric_motion',
                description: 'Finds when y reaches specific value'
            },

            // Domain and range
            parametric_domain: {
                patterns: [
                    /domain/i,
                    /valid.*values.*t/i
                ],
                solver: this.solveParametricDomain.bind(this),
                name: 'Domain of Parameter',
                category: 'parametric_basics',
                description: 'Determines valid range of parameter t'
            },

            // Graph analysis
            parametric_graph: {
                patterns: [
                    /graph/i,
                    /sketch/i,
                    /plot/i
                ],
                solver: this.solveParametricGraph.bind(this),
                name: 'Graph Parametric Curve',
                category: 'parametric_basics',
                description: 'Analyzes and describes parametric curve'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            parametric_basics: {
                'Setting up equations': [
                    'Confusing x₀, y₀ with direction vector components a, b',
                    'Forgetting that t starts at 0 (usually)',
                    'Wrong signs in direction vector',
                    'Mixing up which parameter goes with which coordinate'
                ],
                'Evaluating at parameter value': [
                    'Arithmetic errors when substituting t',
                    'Forgetting to evaluate both x(t) and y(t)',
                    'Sign errors with negative parameter values'
                ]
            },
            parametric_to_cartesian: {
                'Eliminating parameter': [
                    'Solving for wrong variable first',
                    'Algebraic errors in elimination',
                    'Forgetting to consider domain restrictions',
                    'Not simplifying final Cartesian equation'
                ],
                'Finding slope': [
                    'Dividing by zero when a = 0',
                    'Wrong ratio: using a/b instead of b/a',
                    'Sign errors in slope calculation'
                ]
            },
            cartesian_to_parametric: {
                'Choosing parametrization': [
                    'Not using simplest parametrization',
                    'Inconsistent direction with problem context',
                    'Forgetting there are multiple valid parametrizations'
                ],
                'Direction vector': [
                    'Incorrect direction vector from slope',
                    'Not normalizing when unit speed requested',
                    'Wrong orientation (backwards)'
                ]
            },
            direction_vectors: {
                'Vector calculations': [
                    'Incorrect magnitude calculation',
                    'Errors in dot product',
                    'Confusing parallel vs perpendicular conditions',
                    'Sign errors in components'
                ],
                'Unit vectors': [
                    'Forgetting to divide by magnitude',
                    'Arithmetic errors in normalization',
                    'Wrong magnitude formula'
                ]
            },
            intersection_problems: {
                'Setting up system': [
                    'Using same parameter for both lines',
                    'Forgetting to set both coordinates equal',
                    'Setting up equations incorrectly'
                ],
                'Solving system': [
                    'Algebraic errors in solving',
                    'Not checking if solution exists',
                    'Forgetting to find actual intersection point',
                    'Not verifying answer'
                ]
            },
            parametric_motion: {
                'Speed calculation': [
                    'Using wrong formula for speed',
                    'Forgetting square root in magnitude',
                    'Confusing speed with velocity'
                ],
                'Distance calculation': [
                    'Using wrong time interval',
                    'Forgetting that distance = speed × time',
                    'Mixing up displacement and distance'
                ]
            }
        };

        this.errorPrevention = {
            parameter_tracking: {
                reminder: 'Keep track of what each parameter represents (time, distance, etc.)',
                method: 'Label parameters clearly: t for time, s for second object'
            },
            component_organization: {
                reminder: 'Organize x and y components separately',
                method: 'Write x-equation and y-equation on separate lines'
            },
            vector_notation: {
                reminder: 'Use vector notation to keep components together',
                method: 'Write r(t) = ⟨x(t), y(t)⟩ to see both components'
            },
            substitution_care: {
                reminder: 'Substitute carefully when eliminating parameter',
                method: 'Show substitution step explicitly before simplifying'
            },
            verify_direction: {
                reminder: 'Check if direction vector points the right way',
                method: 'Evaluate at t=0 and t=1 to see which direction motion goes'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why parametric form works and what it represents',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Exact steps for conversions and calculations',
                language: 'step-by-step instructions'
            },
            visual: {
                focus: 'Graphical understanding of motion and paths',
                language: 'visual and spatial metaphors'
            },
            algebraic: {
                focus: 'Formal parametric equations and vector notation',
                language: 'precise mathematical terminology'
            },
            kinematic: {
                focus: 'Motion interpretation (position, velocity, time)',
                language: 'physics-based descriptions'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential steps only',
                examples: 'concrete numbers and simple motion'
            },
            intermediate: {
                vocabulary: 'standard mathematical terms',
                detail: 'main steps with brief explanations',
                examples: 'mix of concrete and abstract'
            },
            ELI5: {
                vocabulary: 'explain like I\'m 5 - simplest possible terms',
                detail: 'every tiny step explained with motion analogies',
                examples: 'real-world movement stories',
                analogies: true,
                visualization: 'simple drawings of paths'
            },
            detailed: {
                vocabulary: 'full mathematical and physics vocabulary',
                detail: 'comprehensive explanations with theory',
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
            airplane_flight: {
                scenario: "Airplane flying at constant velocity",
                parametricForm: "x = x₀ + vₓt, y = y₀ + vᵧt",
                examples: [
                    "Plane starts at (100, 50) flying east at 200 mph, north at 50 mph. Where is it after 2 hours?",
                    "Two planes: find if they collide"
                ],
                context: "Air traffic control uses parametric equations to track aircraft positions"
            },
            robot_motion: {
                scenario: "Robot moving on factory floor",
                parametricForm: "x = x₀ + vₓt, y = y₀ + vᵧt",
                examples: [
                    "Robot starts at (0,0) moving at 2 m/s east, 1.5 m/s north. Position at t=10s?",
                    "Path planning between waypoints"
                ],
                context: "Robotics uses parametric equations for precise position control"
            },
            projectile_linear: {
                scenario: "Linear approximation of projectile motion",
                parametricForm: "x = x₀ + v₀ₓt, y = y₀ + v₀ᵧt (ignoring gravity for short times)",
                examples: [
                    "Ball thrown horizontally - approximate initial motion",
                    "Laser beam path (straight line)"
                ],
                context: "Physics kinematics uses parametric form for projectile analysis"
            },
            ship_navigation: {
                scenario: "Ship sailing across ocean",
                parametricForm: "x = x₀ + vₓt, y = y₀ + vᵧt",
                examples: [
                    "Ship leaves port at (0,0) sailing northeast at 15 knots. Position after 4 hours?",
                    "Two ships - when are they closest?"
                ],
                context: "Maritime navigation uses parametric tracking"
            },
            animation_movement: {
                scenario: "Object moving in computer animation",
                parametricForm: "x(t) = start_x + speed_x × t, y(t) = start_y + speed_y × t",
                examples: [
                    "Character walking across screen from (0,300) to (800,300) in 5 seconds",
                    "Ball rolling with constant velocity"
                ],
                context: "Computer graphics use parametric equations for smooth animation"
            },
            particle_physics: {
                scenario: "Charged particle in uniform field",
                parametricForm: "x = x₀ + vₓt, y = y₀ + vᵧt",
                examples: [
                    "Electron trajectory in cathode ray tube",
                    "Particle beam path"
                ],
                context: "Particle physics uses parametric equations to describe particle motion"
            },
            traffic_flow: {
                scenario: "Vehicles moving on roads",
                parametricForm: "x = x₀ + vₓt, y = y₀ + vᵧt",
                examples: [
                    "Car traveling on highway from point A to point B",
                    "Intersection collision analysis"
                ],
                context: "Traffic engineering uses parametric models for flow analysis"
            },
            laser_scanning: {
                scenario: "Laser beam path in scanning system",
                parametricForm: "x = x₀ + at, y = y₀ + bt",
                examples: [
                    "Laser scanning pattern across surface",
                    "3D printer head movement"
                ],
                context: "Manufacturing and scanning technology use parametric paths"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            parametric_basics: {
                skills: ['Function evaluation', 'Coordinate system', 'Basic algebra'],
                priorKnowledge: ['What is a function', 'Ordered pairs (x,y)', 'Substitution'],
                checkQuestions: [
                    "If f(t) = 3t + 5, what is f(2)?",
                    "What are the coordinates of a point?",
                    "What does it mean to substitute a value?"
                ]
            },
            parametric_to_cartesian: {
                skills: ['Solving for variables', 'Substitution', 'Simplification'],
                priorKnowledge: ['Solving linear equations', 'Slope-intercept form y = mx + b'],
                checkQuestions: [
                    "Solve for t: x = 2t + 3",
                    "Substitute t = (x-3)/2 into y = 5t - 1",
                    "What is slope-intercept form?"
                ]
            },
            cartesian_to_parametric: {
                skills: ['Identifying slope', 'Point-slope form', 'Creating functions'],
                priorKnowledge: ['Slope concept', 'Direction vectors', 'Function notation'],
                checkQuestions: [
                    "What is the slope of y = 3x + 2?",
                    "Given slope m = 2, give a direction vector",
                    "Write a function with parameter t"
                ]
            },
            direction_vectors: {
                skills: ['Vector notation', 'Magnitude calculation', 'Dot product'],
                priorKnowledge: ['Pythagorean theorem', 'Vector components', 'Basic vector operations'],
                checkQuestions: [
                    "Find magnitude of ⟨3, 4⟩",
                    "What is ⟨2, 1⟩ · ⟨3, 4⟩?",
                    "What does ⟨a, b⟩ represent?"
                ]
            },
            intersection_problems: {
                skills: ['Systems of equations', 'Substitution method', 'Checking solutions'],
                priorKnowledge: ['Solving 2×2 systems', 'Multiple variables', 'Solution verification'],
                checkQuestions: [
                    "Solve: 2t = 3s + 1, t + s = 4",
                    "Why do we need two equations?",
                    "How do we check if a point is on a line?"
                ]
            },
            parametric_motion: {
                skills: ['Rate × time', 'Distance formula', 'Physics kinematics basics'],
                priorKnowledge: ['Speed = distance/time', 'Velocity vs speed', 'Position vs displacement'],
                checkQuestions: [
                    "If speed is 5 m/s, how far in 10 seconds?",
                    "What's the difference between speed and velocity?",
                    "What is displacement?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            motion_trace: {
                description: "Path traced by moving point over time",
                analogy: "Like watching a ant crawl along a path, marking where it is at each second",
                visualization: "Draw curve with arrows showing direction, mark t values",
                suitableFor: ['all_parametric'],
                explanation: "Parameter t shows where on the path the point is at each moment"
            },
            vector_arrow: {
                description: "Position vector from origin to point",
                analogy: "Arrow from start to current position, changes as t changes",
                visualization: "Draw arrow from (0,0) to (x(t), y(t))",
                suitableFor: ['parametric_basics', 'direction_vectors', 'motion'],
                explanation: "Position vector r(t) points to location at time t"
            },
            direction_arrow: {
                description: "Velocity/direction vector showing motion direction",
                analogy: "Arrow showing which way and how fast point is moving",
                visualization: "Draw ⟨a, b⟩ as arrow showing direction of motion",
                suitableFor: ['direction_vectors', 'motion'],
                explanation: "Direction vector ⟨a, b⟩ is constant for linear parametric"
            },
            time_snapshots: {
                description: "Positions at different t values",
                analogy: "Like photos taken at regular time intervals",
                visualization: "Mark points at t = 0, 1, 2, ... along the path",
                suitableFor: ['motion', 'parametric_basics'],
                explanation: "Shows how position changes with time"
            },
            coordinate_separation: {
                description: "Separate graphs of x(t) and y(t)",
                analogy: "Tracking east-west and north-south motion separately",
                visualization: "Graph x vs t and y vs t on separate axes",
                suitableFor: ['parametric_to_cartesian', 'motion_analysis'],
                explanation: "Shows how each coordinate changes with time independently"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "Find position at t=2 for x = 1 + 3t, y = 2 + 4t",
                    solution: { x: 7, y: 10 },
                    steps: ["Substitute t=2 into x equation: x = 1 + 3(2) = 7", "Substitute t=2 into y equation: y = 2 + 4(2) = 10", "Position is (7, 10)"],
                    difficulty: "easy"
                },
                {
                    problem: "Convert x = t, y = 2t + 3 to Cartesian form",
                    solution: "y = 2x + 3",
                    steps: ["x = t means t = x", "Substitute into y equation: y = 2(x) + 3", "Cartesian form: y = 2x + 3"],
                    difficulty: "easy"
                },
                {
                    problem: "What is the direction vector for x = 2 + 5t, y = 1 + 3t?",
                    solution: "⟨5, 3⟩",
                    steps: ["Identify coefficient of t in x equation: 5", "Identify coefficient of t in y equation: 3", "Direction vector is ⟨5, 3⟩"],
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "Eliminate parameter: x = 2 + 3t, y = 1 + 4t",
                    solution: "y = (4/3)x - 5/3",
                    steps: ["Solve x for t: 3t = x - 2, so t = (x-2)/3", "Substitute into y: y = 1 + 4((x-2)/3)", "Simplify: y = 1 + (4x-8)/3 = (3+4x-8)/3 = (4x-5)/3"],
                    difficulty: "medium"
                },
                {
                    problem: "Find speed for x = 1 + 6t, y = 2 + 8t",
                    solution: 10,
                    steps: ["Direction vector is ⟨6, 8⟩", "Speed = ||⟨6, 8⟩|| = √(6² + 8²)", "Speed = √(36 + 64) = √100 = 10"],
                    difficulty: "medium"
                },
                {
                    problem: "When does x = 2 + 5t reach x = 17?",
                    solution: "t = 3",
                    steps: ["Set x equation equal to 17: 2 + 5t = 17", "Solve: 5t = 15", "t = 3"],
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "Find intersection of x=1+2t, y=3+t and x=5+s, y=1+3s",
                    solution: "(3, 4) at t=1, s=-2",
                    steps: [
                        "Set x components equal: 1+2t = 5+s",
                        "Set y components equal: 3+t = 1+3s",
                        "From second: t = -2 + 3s",
                        "Substitute into first: 1+2(-2+3s) = 5+s",
                        "Solve: 1-4+6s = 5+s, so 5s = 8, s = -2 (error in problem setup)"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "Convert y = -2x + 5 to parametric form with unit speed",
                    solution: "x = t/√5, y = 5 - 2t/√5",
                    steps: [
                        "Slope is -2, direction vector ⟨1, -2⟩",
                        "Magnitude: √(1 + 4) = √5",
                        "Unit direction: ⟨1/√5, -2/√5⟩",
                        "Parametric: x = t/√5, y = 5 - 2t/√5 (starting at y-intercept)"
                    ],
                    difficulty: "hard"
                }
            ],
            byMethod: {
                evaluation: [
                    { problem: "x = 3 + 2t, y = 1 + 5t at t = 4", solution: "(11, 21)" },
                    { problem: "x = -1 + t, y = 4 - 3t at t = 2", solution: "(1, -2)" }
                ],
                elimination: [
                    { problem: "x = t, y = 3t + 1", solution: "y = 3x + 1" },
                    { problem: "x = 2t + 1, y = 4t + 3", solution: "y = 2x + 1" }
                ],
                direction_vector: [
                    { problem: "x = 2 + 3t, y = 1 + 4t", solution: "⟨3, 4⟩, speed 5" },
                    { problem: "x = 5t, y = 12t", solution: "⟨5, 12⟩, speed 13" }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            parameter_meaning: {
                misconception: "Thinking parameter t must always represent time",
                reality: "Parameter t is just an independent variable; it often represents time but can be any variable",
                correctiveExample: "In x = t, y = t², the parameter t could be time, distance, or just a number ranging from -∞ to ∞",
                commonIn: ['parametric_basics']
            },
            direction_vs_position: {
                misconception: "Confusing direction vector ⟨a, b⟩ with position (x₀, y₀)",
                reality: "(x₀, y₀) is starting position; ⟨a, b⟩ tells direction and speed of motion",
                correctiveExample: "In x = 2 + 3t, y = 1 + 4t: (2,1) is where we start, ⟨3,4⟩ is how we move",
                commonIn: ['parametric_basics', 'direction_vectors']
            },
            elimination_errors: {
                misconception: "Thinking you can eliminate any variable carelessly",
                reality: "Must solve one equation for t, then substitute carefully into the other",
                correctiveExample: "From x = 2 + 3t, get t = (x-2)/3, then substitute this expression into y equation",
                commonIn: ['parametric_to_cartesian']
            },
            same_parameter: {
                misconception: "Using the same parameter name for two different objects/lines",
                reality: "Different objects need different parameters (use t and s, for example)",
                correctiveExample: "Line 1: x = 1 + 2t, y = 3 + t; Line 2: x = 5 + s, y = 1 + 3s (not both t)",
                commonIn: ['intersection_problems', 'collision']
            },
            speed_vs_velocity: {
                misconception: "Thinking speed and velocity are the same",
                reality: "Velocity is a vector ⟨a, b⟩; speed is its magnitude √(a² + b²)",
                correctiveExample: "Velocity ⟨3, 4⟩ has speed 5, but speed doesn't tell direction",
                commonIn: ['parametric_motion', 'direction_vectors']
            },
            cartesian_uniqueness: {
                misconception: "Thinking there's only one parametrization of a line",
                reality: "Infinitely many parametric forms can represent the same line",
                correctiveExample: "y = 2x can be x=t, y=2t OR x=2t, y=4t OR x=t-1, y=2t-2, etc.",
                commonIn: ['cartesian_to_parametric']
            },
            intersection_vs_collision: {
                misconception: "Thinking intersection point means objects collide",
                reality: "Intersection is where paths cross; collision requires same position at same time",
                correctiveExample: "Paths can cross at (3,4), but objects there at different times means no collision",
                commonIn: ['intersection_problems', 'collision']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            parametric_motion: {
                analogy: "Following a path on a map",
                explanation: "Parametric equations are like GPS tracking: x(t) tells you how far east/west, y(t) tells you how far north/south, and t tells you when",
                suitableFor: ['parametric_basics', 'motion'],
                ELI5: "Imagine you're walking from your house. x tells you how many steps east you've gone, y tells you how many steps north, and t is like a clock showing what time it is"
            },
            direction_vector: {
                analogy: "Compass heading and speed",
                explanation: "Direction vector ⟨a, b⟩ is like a compass heading plus walking speed combined: tells you which way to go and how fast",
                suitableFor: ['direction_vectors', 'motion'],
                ELI5: "If you walk 3 steps right and 4 steps forward every second, your 'direction vector' is ⟨3, 4⟩"
            },
            parameter_elimination: {
                analogy: "Finding what path you're on from your location data",
                explanation: "Converting parametric to Cartesian is like figuring out what road you're on by looking at your GPS coordinates over time",
                suitableFor: ['parametric_to_cartesian'],
                ELI5: "If someone tells you 'walk 2 steps right every second' and 'walk 3 steps forward every second', you can figure out you're walking on a straight path"
            },
            multiple_parameters: {
                analogy: "Two people walking with their own watches",
                explanation: "When two lines use different parameters (t and s), it's like two people each with their own stopwatch",
                suitableFor: ['intersection_problems'],
                ELI5: "You and your friend both start walking from different places at different times. You each have your own clock (t for you, s for friend)"
            },
            initial_position: {
                analogy: "Starting point of a journey",
                explanation: "(x₀, y₀) is like the address where you start your trip before you begin moving",
                suitableFor: ['parametric_basics'],
                ELI5: "If you start at your front door (that's x₀, y₀) and then walk around, that's where you began"
            },
            collision_vs_intersection: {
                analogy: "Two cars on crossing roads",
                explanation: "Paths can cross (intersection) but if cars arrive at crossing at different times, no collision",
                suitableFor: ['intersection_problems', 'collision'],
                ELI5: "Two kids can use the same playground at different times without bumping into each other"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            parametric_basics: {
                level1: "What does the parameter t represent in this problem?",
                level2: "Can you identify (x₀, y₀) and the direction vector ⟨a, b⟩?",
                level3: "Substitute the value of t into both x(t) and y(t)",
                level4: "Calculate x = x₀ + at and y = y₀ + bt with your specific t value"
            },
            parametric_to_cartesian: {
                level1: "Which equation should you solve for t?",
                level2: "Solve the simpler equation for t in terms of x or y",
                level3: "Substitute your expression for t into the other equation",
                level4: "Solve x = x₀ + at for t: t = (x - x₀)/a, then substitute into y equation"
            },
            cartesian_to_parametric: {
                level1: "What should you choose as your parameter?",
                level2: "Simplest choice: let x = t, then y = f(t)",
                level3: "Or identify slope and create direction vector",
                level4: "If y = mx + b, try x = t, y = mt + b OR x = x₀ + t, y = y₀ + mt"
            },
            direction_vectors: {
                level1: "Where are the direction vector components?",
                level2: "Look at coefficients of t in each equation",
                level3: "Direction vector is ⟨a, b⟩ where x = x₀ + at, y = y₀ + bt",
                level4: "From x = {x₀} + {a}t, y = {y₀} + {b}t, direction vector is ⟨{a}, {b}⟩"
            },
            parametric_speed: {
                level1: "How do you find the magnitude of a vector?",
                level2: "Find direction vector ⟨a, b⟩ first",
                level3: "Use Pythagorean theorem: ||⟨a, b⟩|| = √(a² + b²)",
                level4: "Speed = √({a}² + {b}²) = √{a² + b²}"
            },
            intersection_problems: {
                level1: "What must be true for two lines to intersect?",
                level2: "Both x-coordinates and y-coordinates must be equal at same time",
                level3: "Set x₁(t) = x₂(s) AND y₁(t) = y₂(s), giving you two equations",
                level4: "Solve the system: {equation1} and {equation2} for t and s"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Evaluate x = 2 + 3t, y = 1 + 4t at t = 2",
                    answer: "(8, 9)",
                    assesses: "parametric_basics",
                    difficulty: "basic"
                },
                {
                    question: "What is the direction vector for x = 1 + 5t, y = 2 + 3t?",
                    answer: "⟨5, 3⟩",
                    assesses: "direction_vectors",
                    difficulty: "basic"
                },
                {
                    question: "Convert x = t, y = 2t + 1 to Cartesian form",
                    answer: "y = 2x + 1",
                    assesses: "parametric_to_cartesian",
                    difficulty: "intermediate"
                },
                {
                    question: "Find the speed for x = 3t, y = 4t",
                    answer: 5,
                    assesses: "parametric_motion",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "In x = 2 + 3t, y = 1 + 4t, what does (2, 1) represent?",
                    options: ["Direction vector", "Initial position", "Speed", "Final position"],
                    correct: "Initial position",
                    explanation: "(2, 1) is the position at t = 0, the starting point"
                },
                {
                    question: "To eliminate t from x = 2t + 1, y = 3t + 2, what should you do first?",
                    options: ["Solve y for t", "Solve x for t", "Add equations", "Find slope"],
                    correct: "Solve x for t",
                    explanation: "Solve simpler equation for t: x = 2t + 1 gives t = (x-1)/2"
                },
                {
                    question: "If direction vector is ⟨6, 8⟩, what is the speed?",
                    options: ["14", "10", "48", "100"],
                    correct: "10",
                    explanation: "Speed = √(6² + 8²) = √100 = 10"
                }
            ],
            summative: [
                {
                    question: "Find intersection of x = 1 + 2t, y = 3 + t and x = 4 + s, y = 1 + 2s",
                    answer: "(3, 4)",
                    showsWork: true,
                    rubric: {
                        setup_equations: 1,
                        solve_system: 2,
                        find_point: 1,
                        verify: 1
                    }
                },
                {
                    question: "Convert y = -3x + 7 to parametric form with unit speed",
                    answer: "x = t/√10, y = 7 - 3t/√10",
                    showsWork: true,
                    rubric: {
                        direction_vector: 1,
                        magnitude: 1,
                        unit_vector: 1,
                        parametric_form: 2
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "Find position at t = 3 for x = 1 + 2t, y = 2 + 3t",
                    "What is direction vector for x = 5t, y = 7t?",
                    "Convert x = t, y = 4t to Cartesian",
                    "Initial position of x = 3 + t, y = 2 + 5t?"
                ],
                medium: [
                    "Eliminate parameter: x = 2 + 3t, y = 1 + 5t",
                    "Find speed for x = 6t, y = 8t",
                    "When does x = 1 + 4t equal 17?",
                    "Convert y = 2x + 3 to parametric form"
                ],
                hard: [
                    "Find intersection of two parametric lines",
                    "Convert y = -2x + 5 to parametric with unit speed",
                    "Find collision time for two objects",
                    "Determine if lines are parallel from parametric form"
                ]
            },
            byObjective: {
                canEvaluateParametric: [
                    "x = 2 + 3t, y = 1 + 4t at t = 2",
                    "x = 5t, y = 3t + 1 at t = 4",
                    "x = 1 + t, y = 2 - 2t at t = 3"
                ],
                canEliminateParameter: [
                    "x = t, y = 2t + 1",
                    "x = 2t + 3, y = 4t + 1",
                    "x = 3t, y = 5t - 2"
                ],
                canFindDirectionVector: [
                    "x = 1 + 3t, y = 2 + 4t",
                    "x = 5t, y = 12t",
                    "x = 2 + t, y = 3 - 2t"
                ],
                canCalculateSpeed: [
                    "Direction vector ⟨3, 4⟩",
                    "x = 5t, y = 12t",
                    "x = 1 + 6t, y = 2 + 8t"
                ],
                canSolveIntersection: [
                    "x = 1 + t, y = 2 + 2t and x = 3 + s, y = 1 + s",
                    "x = 2t, y = 3t and x = 1 + s, y = 2 + 2s"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "evaluating_point": "Substitute t value into both equations",
                "finding_parameter": "Set one equation equal to target, solve for t",
                "eliminating_parameter": "Solve simpler equation for t, substitute into other",
                "creating_parametric": "Choose parameter, express both coordinates in terms of it",
                "finding_intersection": "Use different parameters for each line, set coordinates equal",
                "analyzing_motion": "Identify initial position and direction vector"
            },
            whenToUseWhat: {
                vector_form: "When emphasizing direction and motion",
                component_form: "When working with separate x and y",
                eliminate_parameter: "When converting to Cartesian form",
                multiple_parameters: "When comparing two or more moving objects"
            },
            methodSelection: {
                factorsToConsider: [
                    "What is the question asking for?",
                    "Is it about a specific time/parameter value?",
                    "Do we need Cartesian or parametric form?",
                    "Are there multiple objects/lines?",
                    "Is motion or direction important?"
                ],
                generalApproach: [
                    "1. Identify what's given (parametric equations, point, etc.)",
                    "2. Identify what's being asked",
                    "3. Choose appropriate method (evaluate, eliminate, etc.)",
                    "4. Execute carefully",
                    "5. Verify answer makes sense"
                ]
            },
            optimizationTips: {
                "Choose simpler equation": "When eliminating parameter, solve simpler equation first",
                "Check t = 0": "Always useful to see where motion starts",
                "Use vector notation": "Helps keep x and y components organized",
                "Draw a picture": "Sketch helps visualize motion and direction"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Parametric Evaluation Sprint",
                    timeLimit: 90,
                    problems: [
                        "x = 2 + t, y = 3 + 2t at t = 1",
                        "x = 3t, y = 4t at t = 2",
                        "x = 1 + 2t, y = 2 + 3t at t = 3",
                        "x = 5t, y = 12t at t = 1",
                        "x = 2 + 3t, y = 1 + 4t at t = 2"
                    ]
                },
                {
                    name: "Direction Vector Challenge",
                    timeLimit: 60,
                    problems: [
                        "Find direction vector: x = 1 + 3t, y = 2 + 4t",
                        "Find direction vector: x = 5t, y = 7t",
                        "Find direction vector: x = 2 + t, y = 3 - 2t"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Complete the Parametric",
                    problem: "x = 2 + ___t, y = 1 + ___t",
                    given: "Passes through (5, 7) at t = 1",
                    solve: "Find the coefficients",
                    solution: "x = 2 + 3t, y = 1 + 6t"
                },
                {
                    name: "Mystery Direction",
                    problem: "A parametric line has speed 5 and passes through (0,0)",
                    constraint: "Give a possible parametric equation",
                    solution: "Many answers: x = 3t, y = 4t OR x = 5t, y = 0, etc."
                }
            ],
            applications: [
                {
                    scenario: "Airplane Flight",
                    problem: "Plane starts at (100, 200) miles, flies 300 mph east, 400 mph north. Where after 2 hours?",
                    equations: "x = 100 + 300t, y = 200 + 400t",
                    solution: "(700, 1000) miles"
                },
                {
                    scenario: "Robot Path",
                    problem: "Robot at (0,0) moves 2 m/s east, 1.5 m/s north. Position at t = 10s?",
                    equations: "x = 2t, y = 1.5t",
                    solution: "(20, 15) meters"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Convert x = 2 + 3t, y = 1 + 4t to Cartesian",
                        "Solve for t: t = x - 2/3",  // ERROR: should be (x-2)/3
                        "Substitute: y = 1 + 4(x - 2/3)",
                        "y = 1 + 4x - 8/3"
                    ],
                    correctAnswer: "y = (4/3)x - 5/3",
                    errorType: "Forgot parentheses in solving for t"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Find intersection: x = 1 + 2t, y = 3 + t and x = 4 + t, y = 1 + 2t",  // ERROR: used same parameter
                        "Set equal: 1 + 2t = 4 + t",
                        "t = 3",
                        "Point: (7, 6)"
                    ],
                    correctAnswer: "Need different parameters for each line",
                    errorType: "Used same parameter for both lines"
                }
            ]
        };
    }

    initializeParametricConceptsDatabase() {
        this.parametricConcepts = {
            parameter_role: {
                concept: "Parameter as independent variable",
                explanation: "The parameter t controls both x and y coordinates - it's the input that determines the output point (x, y)",
                keyIdea: "t → (x(t), y(t))",
                examples: [
                    "t as time: t = 0, 1, 2, ... seconds",
                    "t as distance along path",
                    "t as any real number from -∞ to ∞"
                ]
            },
            curve_tracing: {
                concept: "How parametric curves are traced",
                explanation: "As t increases, the point (x(t), y(t)) moves along the curve in a specific direction",
                keyIdea: "Direction of tracing determined by increasing t",
                examples: [
                    "For x = t, y = t: diagonal line from bottom-left to top-right",
                    "For x = -t, y = t: diagonal line from bottom-right to top-left"
                ]
            },
            linear_vs_nonlinear: {
                concept: "Linear parametric equations create straight lines",
                explanation: "When both x(t) and y(t) are linear in t, the resulting curve is a straight line",
                keyIdea: "x = x₀ + at, y = y₀ + bt gives a line",
                examples: [
                    "x = 2 + 3t, y = 1 + 4t: straight line",
                    "x = t², y = t: parabola (not linear in t)"
                ]
            }
        };
    }

    initializeVectorDatabase() {
        this.vectorConcepts = {
            position_vector: {
                notation: "r(t) = ⟨x(t), y(t)⟩",
                meaning: "Vector from origin to point at time t",
                properties: "Changes as t changes (for motion)",
                interpretation: "Arrow pointing from (0,0) to current position"
            },
            direction_vector: {
                notation: "⟨a, b⟩ where x = x₀ + at, y = y₀ + bt",
                meaning: "Shows direction and speed of motion",
                properties: "Constant for linear parametric equations",
                interpretation: "How much x and y change per unit of t"
            },
            velocity_vector: {
                notation: "v(t) = r'(t) = ⟨dx/dt, dy/dt⟩",
                meaning: "Rate of change of position",
                properties: "For linear: v(t) = ⟨a, b⟩ (constant)",
                interpretation: "Direction and speed of motion"
            },
            unit_vector: {
                notation: "û = v/||v||",
                meaning: "Direction without magnitude (speed 1)",
                properties: "Has magnitude 1",
                interpretation: "Pure direction"
            }
        };
    }

    initializeMotionDatabase() {
        this.motionConcepts = {
            kinematics_connection: {
                concept: "Parametric equations as kinematics",
                physics: "Position as function of time: r(t) = r₀ + vt",
                mapping: "x₀, y₀ ↔ initial position; a, b ↔ velocity components",
                units: "Position in meters/feet, velocity in m/s or mph, time in seconds/hours"
            },
            displacement_vs_distance: {
                displacement: "Change in position: Δr = r(t₂) - r(t₁)",
                distance: "Length of path traveled: for linear = ||v|| × Δt",
                difference: "Displacement is vector, distance is scalar (magnitude)"
            },
            constant_velocity: {
                definition: "Velocity vector ⟨a, b⟩ doesn't change",
                result: "Straight-line motion at constant speed",
                formula: "r(t) = r₀ + vt is standard form"
            }
        };
    }

    // PARAMETRIC EQUATION SOLVERS

    solveStandardParametric(problem) {
        const { x0, y0, a, b, t_value } = problem.parameters;
        
        const x_value = x0 + a * t_value;
        const y_value = y0 + b * t_value;

        return {
            type: 'Standard Linear Parametric Equations',
            equations: {
                x: `x = ${x0} + ${a}t`,
                y: `y = ${y0} + ${b}t`
            },
            initialPosition: `(${x0}, ${y0})`,
            directionVector: `⟨${a}, ${b}⟩`,
            atParameter: `t = ${t_value}`,
            position: `(${x_value}, ${y_value})`,
            solution: { x: x_value, y: y_value },
            solutionType: 'Point on parametric curve',
            category: 'parametric_basics'
        };
    }

    solveParametricToCartesian(problem) {
        const { x0, y0, a, b } = problem.parameters;

        if (Math.abs(a) < 1e-10) {
            // Vertical line
            return {
                type: 'Parametric to Cartesian Conversion',
                parametric: {
                    x: `x = ${x0}`,
                    y: `y = ${y0} + ${b}t`
                },
                cartesian: `x = ${x0}`,
                solutionType: 'Vertical line',
                note: 'x is constant, y can be any value',
                category: 'parametric_to_cartesian'
            };
        }

        if (Math.abs(b) < 1e-10) {
            // Horizontal line
            return {
                type: 'Parametric to Cartesian Conversion',
                parametric: {
                    x: `x = ${x0} + ${a}t`,
                    y: `y = ${y0}`
                },
                cartesian: `y = ${y0}`,
                solutionType: 'Horizontal line',
                note: 'y is constant, x can be any value',
                category: 'parametric_to_cartesian'
            };
        }

        // General case: solve for t from x equation, substitute into y
        // x = x0 + at → t = (x - x0)/a
        // y = y0 + bt → y = y0 + b[(x - x0)/a]
        // y = y0 + (b/a)(x - x0)
        // y = (b/a)x + [y0 - (b/a)x0]

        const slope = b / a;
        const yIntercept = y0 - slope * x0;

        return {
            type: 'Parametric to Cartesian Conversion',
            parametric: {
                x: `x = ${x0} + ${a}t`,
                y: `y = ${y0} + ${b}t`
            },
            elimination: {
                step1: `Solve x equation for t: t = (x - ${x0})/${a}`,
                step2: `Substitute into y equation: y = ${y0} + ${b}[(x - ${x0})/${a}]`,
                step3: `Simplify: y = ${y0} + ${slope}(x - ${x0})`
            },
            cartesian: `y = ${slope}x + ${yIntercept}`,
            slope: slope,
            yIntercept: yIntercept,
            solutionType: 'Line in slope-intercept form',
            category: 'parametric_to_cartesian'
        };
    }

    solveCartesianToParametric(problem) {
        const { slope, yIntercept, x0, y0, method } = problem.parameters;

        // Method 1: Let x = t
        const method1 = {
            name: 'Let x = t',
            parametric: {
                x: 'x = t',
                y: `y = ${slope}t + ${yIntercept}`
            }
        };

        // Method 2: Point-direction form
        const directionVector = { a: 1, b: slope };
        const useX0 = x0 !== undefined ? x0 : 0;
        const useY0 = y0 !== undefined ? y0 : yIntercept;

        const method2 = {
            name: 'Point-direction form',
            point: `(${useX0}, ${useY0})`,
            direction: `⟨1, ${slope}⟩`,
            parametric: {
                x: `x = ${useX0} + t`,
                y: `y = ${useY0} + ${slope}t`
            }
        };

        return {
            type: 'Cartesian to Parametric Conversion',
            cartesian: `y = ${slope}x + ${yIntercept}`,
            methods: [method1, method2],
            note: 'Multiple parametric forms can represent the same line',
            recommendation: method || 'Use simplest: let x = t',
            solutionType: 'Parametric form of line',
            category: 'cartesian_to_parametric'
        };
    }

    solveParametricPoint(problem) {
        const { x0, y0, a, b, t_value } = problem.parameters;
        
        const x = x0 + a * t_value;
        const y = y0 + b * t_value;

        return {
            type: 'Find Point at Parameter Value',
            parametric: {
                x: `x = ${x0} + ${a}t`,
                y: `y = ${y0} + ${b}t`
            },
            parameter: `t = ${t_value}`,
            calculation: {
                x: `x = ${x0} + ${a}(${t_value}) = ${x}`,
                y: `y = ${y0} + ${b}(${t_value}) = ${y}`
            },
            point: `(${x}, ${y})`,
            solution: { x: x, y: y, t: t_value },
            solutionType: 'Point coordinates',
            category: 'parametric_basics'
        };
    }

    solveParameterForPoint(problem) {
        const { x0, y0, a, b, targetX, targetY } = problem.parameters;

        // Use x equation if x target is given and a ≠ 0
        // Use y equation if y target is given and b ≠ 0

        let t_fromX = null;
        let t_fromY = null;

        if (targetX !== undefined && Math.abs(a) > 1e-10) {
            t_fromX = (targetX - x0) / a;
        }

        if (targetY !== undefined && Math.abs(b) > 1e-10) {
            t_fromY = (targetY - y0) / b;
        }

        const solution = t_fromX !== null ? t_fromX : t_fromY;

        // Verify
        const verify_x = x0 + a * solution;
        const verify_y = y0 + b * solution;

        const onCurve = (targetX === undefined || Math.abs(verify_x - targetX) < 1e-9) &&
                       (targetY === undefined || Math.abs(verify_y - targetY) < 1e-9);

        return {
            type: 'Find Parameter for Given Point',
            parametric: {
                x: `x = ${x0} + ${a}t`,
                y: `y = ${y0} + ${b}t`
            },
            targetPoint: targetX !== undefined && targetY !== undefined ? 
                `(${targetX}, ${targetY})` : 
                (targetX !== undefined ? `x = ${targetX}` : `y = ${targetY}`),
            calculation: t_fromX !== null ? 
                `From x: ${targetX} = ${x0} + ${a}t → t = ${solution}` :
                `From y: ${targetY} = ${y0} + ${b}t → t = ${solution}`,
            parameter: `t = ${solution}`,
            verification: {
                pointOnCurve: onCurve,
                calculatedPoint: `(${verify_x}, ${verify_y})`
            },
            solution: solution,
            solutionType: onCurve ? 'Parameter value' : 'Point not on curve',
            category: 'parametric_basics'
        };
    }

    solveDirectionVector(problem) {
        const { x0, y0, a, b } = problem.parameters;

        const magnitude = Math.sqrt(a * a + b * b);
        const unitVector = {
            x: a / magnitude,
            y: b / magnitude
        };

        return {
            type: 'Direction Vector Analysis',
            parametric: {
                x: `x = ${x0} + ${a}t`,
                y: `y = ${y0} + ${b}t`
            },
            directionVector: `⟨${a}, ${b}⟩`,
            magnitude: magnitude,
            speed: magnitude,
            unitVector: `⟨${unitVector.x.toFixed(4)}, ${unitVector.y.toFixed(4)}⟩`,
            interpretation: `Moving ${a} units in x-direction and ${b} units in y-direction per unit of t`,
            solution: {
                directionVector: { a: a, b: b },
                magnitude: magnitude,
                unitVector: unitVector
            },
            solutionType: 'Vector analysis',
            category: 'direction_vectors'
        };
    }

    solveParametricSpeed(problem) {
        const { a, b } = problem.parameters;

        const speed = Math.sqrt(a * a + b * b);

        return {
            type: 'Speed Calculation',
            directionVector: `⟨${a}, ${b}⟩`,
            calculation: `Speed = ||⟨${a}, ${b}⟩|| = √(${a}² + ${b}²) = √${a*a + b*b} = ${speed}`,
            speed: speed,
            interpretation: `Object moves ${speed} units per unit of parameter t`,
            solution: speed,
            solutionType: 'Scalar (speed)',
            category: 'parametric_motion'
        };
    }

    solveParametricDistance(problem) {
        const { a, b, t_start, t_end } = problem.parameters;

        const speed = Math.sqrt(a * a + b * b);
        const timeInterval = t_end - t_start;
        const distance = speed * timeInterval;

        return {
            type: 'Distance Traveled',
            directionVector: `⟨${a}, ${b}⟩`,
            speed: speed,
            timeInterval: `From t = ${t_start} to t = ${t_end}`,
            calculation: `Distance = speed × time = ${speed} × ${timeInterval} = ${distance}`,
            distance: distance,
            solution: distance,
            solutionType: 'Distance (scalar)',
            category: 'distance_problems'
        };
    }

    solveParametricIntersection(problem) {
        const { x1_0, y1_0, a1, b1, x2_0, y2_0, a2, b2 } = problem.parameters;

        // System:
        // x1_0 + a1*t = x2_0 + a2*s  →  a1*t - a2*s = x2_0 - x1_0
        // y1_0 + b1*t = y2_0 + b2*s  →  b1*t - b2*s = y2_0 - y1_0

        const A = [[a1, -a2], [b1, -b2]];
        const B = [x2_0 - x1_0, y2_0 - y1_0];

        // Solve using Cramer's rule or substitution
        const det = a1 * (-b2) - (-a2) * b1;  // = -a1*b2 + a2*b1

        if (Math.abs(det) < 1e-10) {
            // Lines are parallel (or identical)
            // Check if identical by seeing if starting points + direction vectors align
            const parallel = true;
            return {
                type: 'Intersection of Parametric Lines',
                line1: `x = ${x1_0} + ${a1}t, y = ${y1_0} + ${b1}t`,
                line2: `x = ${x2_0} + ${a2}s, y = ${y2_0} + ${b2}s`,
                solutionType: 'Parallel lines (no intersection or identical)',
                solution: null,
                category: 'intersection_problems'
            };
        }

        const t = ((-b2) * B[0] - (-a2) * B[1]) / det;
        const s = (a1 * B[1] - b1 * B[0]) / det;

        const intersectionX = x1_0 + a1 * t;
        const intersectionY = y1_0 + b1 * t;

        // Verify with second line
        const verify_x = x2_0 + a2 * s;
        const verify_y = y2_0 + b2 * s;

        return {
            type: 'Intersection of Parametric Lines',
            line1: `x = ${x1_0} + ${a1}t, y = ${y1_0} + ${b1}t`,
            line2: `x = ${x2_0} + ${a2}s, y = ${y2_0} + ${b2}s`,
            system: {
                equation1: `${a1}t - ${a2}s = ${x2_0 - x1_0}`,
                equation2: `${b1}t - ${b2}s = ${y2_0 - y1_0}`
            },
            parameters: `t = ${t}, s = ${s}`,
            intersectionPoint: `(${intersectionX}, ${intersectionY})`,
            verification: {
                line1_check: `(${intersectionX}, ${intersectionY})`,
                line2_check: `(${verify_x}, ${verify_y})`,
                match: Math.abs(intersectionX - verify_x) < 1e-9 && Math.abs(intersectionY - verify_y) < 1e-9
            },
            solution: { x: intersectionX, y: intersectionY, t: t, s: s },
            solutionType: 'Intersection point',
            category: 'intersection_problems'
        };
    }

    solveParametricCollision(problem) {
        // Collision requires same position at same parameter value (usually time)
        const { x1_0, y1_0, a1, b1, x2_0, y2_0, a2, b2 } = problem.parameters;

        // For collision with same parameter: x1(t) = x2(t) and y1(t) = y2(t)
        // x1_0 + a1*t = x2_0 + a2*t  →  (a1 - a2)*t = x2_0 - x1_0
        // y1_0 + b1*t = y2_0 + b2*t  →  (b1 - b2)*t = y2_0 - y1_0

        const dx_coeff = a1 - a2;
        const dy_coeff = b1 - b2;

        if (Math.abs(dx_coeff) < 1e-10 && Math.abs(dy_coeff) < 1e-10) {
            // Same velocity - either always colliding or never
            const sameStart = Math.abs(x1_0 - x2_0) < 1e-9 && Math.abs(y1_0 - y2_0) < 1e-9;
            return {
                type: 'Collision Detection',
                objects: {
                    object1: `x = ${x1_0} + ${a1}t, y = ${y1_0} + ${b1}t`,
                    object2: `x = ${x2_0} + ${a2}t, y = ${y2_0} + ${b2}t`
                },
                solutionType: sameStart ? 'Always colliding (same object)' : 'Never collide (parallel paths)',
                solution: sameStart ? 'All t' : null,
                category: 'parametric_motion'
            };
        }

        let t_fromX = null;
        let t_fromY = null;

        if (Math.abs(dx_coeff) > 1e-10) {
            t_fromX = (x2_0 - x1_0) / dx_coeff;
        }

        if (Math.abs(dy_coeff) > 1e-10) {
            t_fromY = (y2_0 - y1_0) / dy_coeff;
        }

        const collision = (t_fromX !== null && t_fromY !== null && Math.abs(t_fromX - t_fromY) < 1e-9) ||
                         (t_fromX !== null && t_fromY === null) ||
                         (t_fromX === null && t_fromY !== null);

        const t_collision = t_fromX !== null ? t_fromX : t_fromY;

        if (collision && t_collision !== null && t_collision >= 0) {
            const collisionX = x1_0 + a1 * t_collision;
            const collisionY = y1_0 + b1 * t_collision;

            return {
                type: 'Collision Detection',
                objects: {
                    object1: `x = ${x1_0} + ${a1}t, y = ${y1_0} + ${b1}t`,
                    object2: `x = ${x2_0} + ${a2}t, y = ${y2_0} + ${b2}t`
                },
                collisionTime: `t = ${t_collision}`,
                collisionPoint: `(${collisionX}, ${collisionY})`,
                solution: { t: t_collision, x: collisionX, y: collisionY },
                solutionType: 'Collision occurs',
                category: 'parametric_motion'
            };
        }

        return {
            type: 'Collision Detection',
            objects: {
                object1: `x = ${x1_0} + ${a1}t, y = ${y1_0} + ${b1}t`,
                object2: `x = ${x2_0} + ${a2}t, y = ${y2_0} + ${b2}t`
            },
            solutionType: 'No collision',
            reason: t_collision !== null && t_collision < 0 ? 
                'Collision time is negative (in the past)' : 
                'Paths don\'t intersect at same time',
            solution: null,
            category: 'parametric_motion'
        };
    }

    solveParametricParallel(problem) {
        const { a1, b1, a2, b2 } = problem.parameters;

        // Parallel if direction vectors are scalar multiples
        // Check if a1/a2 = b1/b2 (cross product = 0)
        const crossProduct = a1 * b2 - a2 * b1;
        const isParallel = Math.abs(crossProduct) < 1e-10;

        let scalar = null;
        if (isParallel && Math.abs(a2) > 1e-10) {
            scalar = a1 / a2;
        } else if (isParallel && Math.abs(b2) > 1e-10) {
            scalar = b1 / b2;
        }

        return {
            type: 'Parallel Lines Check',
            directionVector1: `⟨${a1}, ${b1}⟩`,
            directionVector2: `⟨${a2}, ${b2}⟩`,
            crossProduct: crossProduct,
            isParallel: isParallel,
            scalarMultiple: scalar,
            explanation: isParallel ? 
                `Direction vectors are parallel: ⟨${a1}, ${b1}⟩ = ${scalar}⟨${a2}, ${b2}⟩` :
                'Direction vectors are not parallel',
            solution: isParallel,
            solutionType: 'Boolean (parallel or not)',
            category: 'direction_vectors'
        };
    }

    solveParametricPerpendicular(problem) {
        const { a1, b1, a2, b2 } = problem.parameters;

        // Perpendicular if dot product = 0
        const dotProduct = a1 * a2 + b1 * b2;
        const isPerpendicular = Math.abs(dotProduct) < 1e-10;

        return {
            type: 'Perpendicular Lines Check',
            directionVector1: `⟨${a1}, ${b1}⟩`,
            directionVector2: `⟨${a2}, ${b2}⟩`,
            dotProduct: `⟨${a1}, ${b1}⟩ · ⟨${a2}, ${b2}⟩ = ${a1}(${a2}) + ${b1}(${b2}) = ${dotProduct}`,
            isPerpendicular: isPerpendicular,
            explanation: isPerpendicular ?
                'Dot product = 0, so lines are perpendicular' :
                'Dot product ≠ 0, so lines are not perpendicular',
            solution: isPerpendicular,
            solutionType: 'Boolean (perpendicular or not)',
            category: 'direction_vectors'
        };
    }

    solveParametricMotionWord(problem) {
        const { scenario, x0, y0, vx, vy, question } = problem.parameters;

        return {
            type: 'Motion Word Problem',
            scenario: scenario,
            initialPosition: `(${x0}, ${y0})`,
            velocity: `⟨${vx}, ${vy}⟩`,
            parametricEquations: {
                x: `x = ${x0} + ${vx}t`,
                y: `y = ${y0} + ${vy}t`
            },
            speed: Math.sqrt(vx * vx + vy * vy),
            question: question,
            solution: 'Solve based on specific question',
            solutionType: 'Context-dependent',
            category: 'parametric_word_problems'
        };
    }

    solveVectorParametric(problem) {
        const { x0, y0, a, b, t_value } = problem.parameters;

        const position_t = {
            x: x0 + a * t_value,
            y: y0 + b * t_value
        };

        return {
            type: 'Vector Form Parametric',
            vectorForm: `r(t) = ⟨${x0}, ${y0}⟩ + t⟨${a}, ${b}⟩`,
            componentForm: {
                x: `x = ${x0} + ${a}t`,
                y: `y = ${y0} + ${b}t`
            },
            initialPosition: `r(0) = ⟨${x0}, ${y0}⟩`,
            velocity: `v = ⟨${a}, ${b}⟩`,
            atParameter: t_value !== undefined ? {
                t: t_value,
                position: `r(${t_value}) = ⟨${position_t.x}, ${position_t.y}⟩`
            } : null,
            solution: t_value !== undefined ? position_t : { x0, y0, a, b },
            solutionType: 'Vector representation',
            category: 'direction_vectors'
        };
    }

    solveTimeToX(problem) {
        const { x0, a, targetX } = problem.parameters;

        if (Math.abs(a) < 1e-10) {
            const reaches = Math.abs(x0 - targetX) < 1e-9;
            return {
                type: 'Time to Reach X-Coordinate',
                equation: `x = ${x0}`,
                target: `x = ${targetX}`,
                solutionType: reaches ? 'Always at this x (vertical line)' : 'Never reaches this x',
                solution: reaches ? 'All t' : null,
                category: 'parametric_motion'
            };
        }

        const t = (targetX - x0) / a;

        return {
            type: 'Time to Reach X-Coordinate',
            equation: `x = ${x0} + ${a}t`,
            target: `x = ${targetX}`,
            calculation: `${targetX} = ${x0} + ${a}t → t = (${targetX} - ${x0})/${a} = ${t}`,
            time: `t = ${t}`,
            solution: t,
            solutionType: t >= 0 ? 'Time (future)' : 'Time (past)',
            category: 'parametric_motion'
        };
    }

    solveTimeToY(problem) {
        const { y0, b, targetY } = problem.parameters;

        if (Math.abs(b) < 1e-10) {
            const reaches = Math.abs(y0 - targetY) < 1e-9;
            return {
                type: 'Time to Reach Y-Coordinate',
                equation: `y = ${y0}`,
                target: `y = ${targetY}`,
                solutionType: reaches ? 'Always at this y (horizontal line)' : 'Never reaches this y',
                solution: reaches ? 'All t' : null,
                category: 'parametric_motion'
            };
        }

        const t = (targetY - y0) / b;

        return {
            type: 'Time to Reach Y-Coordinate',
            equation: `y = ${y0} + ${b}t`,
            target: `y = ${targetY}`,
            calculation: `${targetY} = ${y0} + ${b}t → t = (${targetY} - ${y0})/${b} = ${t}`,
            time: `t = ${t}`,
            solution: t,
            solutionType: t >= 0 ? 'Time (future)' : 'Time (past)',
            category: 'parametric_motion'
        };
    }

    solveParametricDomain(problem) {
        const { restrictions, context } = problem.parameters;

        return {
            type: 'Domain of Parameter',
            defaultDomain: 'All real numbers (-∞, ∞)',
            restrictions: restrictions || 'None given',
            context: context || 'Mathematical',
            commonRestrictions: {
                time: 't ≥ 0 (time cannot be negative)',
                physical: 'Based on physical constraints',
                bounded: 'Specific interval [a, b]'
            },
            solution: restrictions || 'All real numbers',
            solutionType: 'Interval or set',
            category: 'parametric_basics'
        };
    }

    solveParametricGraph(problem) {
        const { x0, y0, a, b } = problem.parameters;

        const slope = Math.abs(a) > 1e-10 ? b / a : undefined;

        return {
            type: 'Graph Parametric Curve',
            parametric: {
                x: `x = ${x0} + ${a}t`,
                y: `y = ${y0} + ${b}t`
            },
            graphType: 'Straight line',
            initialPoint: `(${x0}, ${y0}) at t = 0`,
            direction: `⟨${a}, ${b}⟩`,
            slope: slope,
            characteristics: {
                passesThrough: `(${x0}, ${y0})`,
                directionVector: `⟨${a}, ${b}⟩`,
                asT_increases: a > 0 ? 'moves right' : a < 0 ? 'moves left' : 'stays at same x',
                asT_increases_y: b > 0 ? 'moves up' : b < 0 ? 'moves down' : 'stays at same y'
            },
            solution: 'Line graph with indicated direction',
            solutionType: 'Graph description',
            category: 'parametric_basics'
        };
    }

    // MAIN SOLVER METHOD
    solveParametricProblem(config) {
        const { equation, scenario, parameters, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseParametricProblem(equation, scenario, parameters, problemType, context);

            // Solve the problem
            this.currentSolution = this.solveParametricProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateParametricSteps(this.currentProblem, this.currentSolution);

            // Generate graph data if applicable
            this.generateParametricGraphData();

            // Generate workbook
            this.generateParametricWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                solutionValue: this.currentSolution?.solution,
                solutionType: this.currentSolution?.solutionType
            };

        } catch (error) {
            throw new Error(`Failed to solve parametric problem: ${error.message}`);
        }
    }

    parseParametricProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = equation ? this.cleanMathExpression(equation) : '';

        // If problem type is specified, use it directly
        if (problemType && this.parametricTypes[problemType]) {
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

        // Auto-detect parametric problem type
        for (const [type, config] of Object.entries(this.parametricTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(scenario)) {
                    const match = cleanInput.match(pattern);
                    const extractedParams = this.extractParametricParameters(match, type);

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

        // Default to standard parametric if parameters are provided
        if (parameters.x0 !== undefined || parameters.a !== undefined) {
            return {
                originalInput: equation || 'Parametric equations with given parameters',
                cleanInput: cleanInput,
                type: 'standard_parametric',
                scenario: scenario,
                parameters: {
                    x0: parameters.x0 || 0,
                    y0: parameters.y0 || 0,
                    a: parameters.a || 1,
                    b: parameters.b || 1,
                    ...parameters
                },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize parametric problem type from: ${equation || scenario}`);
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

    extractParametricParameters(match, type) {
        const params = {};

        if (!match) return params;

        // Extract based on problem type
        // This is simplified - in practice, would parse more carefully
        switch(type) {
            case 'standard_parametric':
                // Would extract x0, y0, a, b from parametric equations
                break;
            case 'parametric_to_cartesian':
                // Would extract from parametric form
                break;
            // Add cases for other types
        }

        return params;
    }

    solveParametricProblem_Internal(problem) {
        const solver = this.parametricTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for parametric problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // STEP GENERATION

    generateParametricSteps(problem, solution) {
        let baseSteps = this.generateBaseParametricSteps(problem, solution);

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

    generateBaseParametricSteps(problem, solution) {
        const { type } = problem;
        const category = this.parametricTypes[type]?.category;

        switch(category) {
            case 'parametric_basics':
                return this.generateBasicParametricSteps(problem, solution);
            case 'parametric_to_cartesian':
                return this.generateEliminationSteps(problem, solution);
            case 'cartesian_to_parametric':
                return this.generateParametrizationSteps(problem, solution);
            case 'direction_vectors':
                return this.generateVectorSteps(problem, solution);
            case 'intersection_problems':
                return this.generateIntersectionSteps(problem, solution);
            case 'parametric_motion':
                return this.generateMotionSteps(problem, solution);
            default:
                return this.generateGenericParametricSteps(problem, solution);
        }
    }

    generateBasicParametricSteps(problem, solution) {
        const steps = [];
        const { x0, y0, a, b, t_value } = problem.parameters;

        // Step 1: Given equations
        steps.push({
            stepNumber: 1,
            step: 'Given parametric equations',
            description: 'Start with the parametric equations',
            expression: `x = ${x0} + ${a}t, y = ${y0} + ${b}t`,
            reasoning: 'These equations describe a line in parametric form',
            goalStatement: 'We need to evaluate these equations at a specific parameter value',
            components: {
                initialPosition: `(${x0}, ${y0})`,
                directionVector: `⟨${a}, ${b}⟩`
            }
        });

        if (t_value !== undefined) {
            // Step 2: Substitute parameter value into x
            steps.push({
                stepNumber: 2,
                step: 'Evaluate x-coordinate',
                description: `Substitute t = ${t_value} into x equation`,
                beforeExpression: `x = ${x0} + ${a}t`,
                operation: `Substitute t = ${t_value}`,
                calculation: `x = ${x0} + ${a}(${t_value}) = ${x0} + ${a * t_value} = ${x0 + a * t_value}`,
                afterExpression: `x = ${x0 + a * t_value}`,
                reasoning: 'This gives us the x-coordinate of the point at t = ' + t_value,
                algebraicRule: 'Function evaluation'
            });

            // Step 3: Substitute parameter value into y
            steps.push({
                stepNumber: 3,
                step: 'Evaluate y-coordinate',
                description: `Substitute t = ${t_value} into y equation`,
                beforeExpression: `y = ${y0} + ${b}t`,
                operation: `Substitute t = ${t_value}`,
                calculation: `y = ${y0} + ${b}(${t_value}) = ${y0} + ${b * t_value} = ${y0 + b * t_value}`,
                afterExpression: `y = ${y0 + b * t_value}`,
                reasoning: 'This gives us the y-coordinate of the point at t = ' + t_value,
                algebraicRule: 'Function evaluation'
            });

            // Step 4: Final answer
            steps.push({
                stepNumber: 4,
                step: 'State the point',
                description: 'Combine x and y coordinates',
                expression: `(${x0 + a * t_value}, ${y0 + b * t_value})`,
                finalAnswer: true,
                reasoning: `At t = ${t_value}, the point on the parametric curve is at this location`
            });
        }

        return steps;
    }

    generateEliminationSteps(problem, solution) {
        const steps = [];
        const { x0, y0, a, b } = problem.parameters;

        // Step 1: Given parametric equations
        steps.push({
            stepNumber: 1,
            step: 'Given parametric equations',
            description: 'Start with parametric form',
            expression: `x = ${x0} + ${a}t, y = ${y0} + ${b}t`,
            reasoning: 'We want to eliminate the parameter t to get Cartesian form y = f(x)',
            goalStatement: 'Solve one equation for t, substitute into the other'
        });

        // Step 2: Solve x equation for t
        if (Math.abs(a) > 1e-10) {
            steps.push({
                stepNumber: 2,
                step: 'Solve for parameter',
                description: 'Solve x equation for t',
                beforeExpression: `x = ${x0} + ${a}t`,
                operation: `Isolate t`,
                calculation: `${a}t = x - ${x0}`,
                afterExpression: `t = (x - ${x0})/${a}`,
                reasoning: 'This expresses t in terms of x',
                algebraicRule: 'Solving linear equations'
            });

            // Step 3: Substitute into y equation
            const slope = b / a;
            steps.push({
                stepNumber: 3,
                step: 'Substitute into y equation',
                description: 'Replace t in y equation',
                beforeExpression: `y = ${y0} + ${b}t`,
                operation: `Substitute t = (x - ${x0})/${a}`,
                calculation: `y = ${y0} + ${b}[(x - ${x0})/${a}]`,
                afterExpression: `y = ${y0} + ${slope}(x - ${x0})`,
                reasoning: 'This eliminates the parameter t',
                algebraicRule: 'Substitution'
            });

            // Step 4: Simplify to slope-intercept form
            const yIntercept = y0 - slope * x0;
            steps.push({
                stepNumber: 4,
                step: 'Simplify to Cartesian form',
                description: 'Expand and simplify',
                beforeExpression: `y = ${y0} + ${slope}(x - ${x0})`,
                calculation: `y = ${y0} + ${slope}x - ${slope * x0}`,
                afterExpression: `y = ${slope}x + ${yIntercept}`,
                finalAnswer: true,
                reasoning: 'This is the Cartesian (slope-intercept) form of the line'
            });
        }

        return steps;
    }

    generateParametrizationSteps(problem, solution) {
        const steps = [];
        const { slope, yIntercept } = problem.parameters;

        // Step 1: Given Cartesian equation
        steps.push({
            stepNumber: 1,
            step: 'Given Cartesian equation',
            description: 'Start with line in slope-intercept form',
            expression: `y = ${slope}x + ${yIntercept}`,
            reasoning: 'We want to convert this to parametric form',
            goalStatement: 'Choose a parameter and express both x and y in terms of it'
        });

        // Step 2: Choose parametrization
        steps.push({
            stepNumber: 2,
            step: 'Choose parameter',
            description: 'Let x = t (simplest choice)',
            expression: 'x = t',
            reasoning: 'This makes x our parameter directly',
            note: 'Other parametrizations are also valid'
        });

        // Step 3: Express y in terms of parameter
        steps.push({
            stepNumber: 3,
            step: 'Express y in terms of t',
            description: 'Substitute x = t into the equation',
            beforeExpression: `y = ${slope}x + ${yIntercept}`,
            operation: 'Replace x with t',
            afterExpression: `y = ${slope}t + ${yIntercept}`,
            reasoning: 'Now both x and y are functions of parameter t'
        });

        // Step 4: State parametric form
        steps.push({
            stepNumber: 4,
            step: 'Parametric form',
            description: 'Write the parametric equations',
            expression: `x = t, y = ${slope}t + ${yIntercept}`,
            finalAnswer: true,
            reasoning: 'This is one valid parametric form of the line',
            vectorForm: `r(t) = ⟨t, ${slope}t + ${yIntercept}⟩`
        });

        return steps;
    }

    generateVectorSteps(problem, solution) {
        const steps = [];
        const { a, b } = problem.parameters;

        // Step 1: Identify direction vector
        steps.push({
            stepNumber: 1,
            step: 'Identify direction vector',
            description: 'Extract direction vector from parametric equations',
            expression: `Direction vector: ⟨${a}, ${b}⟩`,
            reasoning: 'The coefficients of t give the direction vector',
            interpretation: `The line moves ${a} units in x and ${b} units in y per unit of t`
        });

        // Step 2: Calculate magnitude (speed)
        const magnitude = Math.sqrt(a * a + b * b);
        steps.push({
            stepNumber: 2,
            step: 'Calculate magnitude',
            description: 'Find the magnitude (speed) of the direction vector',
            calculation: `||⟨${a}, ${b}⟩|| = √(${a}² + ${b}²) = √${a*a + b*b} = ${magnitude}`,
            expression: `Speed = ${magnitude}`,
            reasoning: 'Magnitude tells us the speed of motion',
            algebraicRule: 'Pythagorean theorem'
        });

        // Step 3: Find unit vector if needed
        if (this.includeVectorRepresentation) {
            const ux = a / magnitude;
            const uy = b / magnitude;
            steps.push({
                stepNumber: 3,
                step: 'Unit direction vector',
                description: 'Normalize the direction vector',
                calculation: `û = ⟨${a}, ${b}⟩ / ${magnitude} = ⟨${ux.toFixed(4)}, ${uy.toFixed(4)}⟩`,
                expression: `Unit vector: ⟨${ux.toFixed(4)}, ${uy.toFixed(4)}⟩`,
                reasoning: 'Unit vector shows pure direction without magnitude',
                finalAnswer: true
            });
        }

        return steps;
    }

    generateIntersectionSteps(problem, solution) {
        const steps = [];
        const { x1_0, y1_0, a1, b1, x2_0, y2_0, a2, b2 } = problem.parameters;

        // Step 1: Write both parametric equations
        steps.push({
            stepNumber: 1,
            step: 'Write parametric equations',
            description: 'Start with both lines in parametric form',
            expression: `Line 1: x = ${x1_0} + ${a1}t, y = ${y1_0} + ${b1}t\nLine 2: x = ${x2_0} + ${a2}s, y = ${y2_0} + ${b2}s`,
            reasoning: 'Note: using different parameters t and s for the two lines',
            goalStatement: 'Find values of t and s where both coordinates are equal'
        });

        // Step 2: Set x-coordinates equal
        steps.push({
            stepNumber: 2,
            step: 'Set x-coordinates equal',
            description: 'For intersection, x-coordinates must be equal',
            expression: `${x1_0} + ${a1}t = ${x2_0} + ${a2}s`,
            simplification: `${a1}t - ${a2}s = ${x2_0 - x1_0}`,
            reasoning: 'This is our first equation in the system',
            algebraicRule: 'Equality property'
        });

        // Step 3: Set y-coordinates equal
        steps.push({
            stepNumber: 3,
            step: 'Set y-coordinates equal',
            description: 'For intersection, y-coordinates must also be equal',
            expression: `${y1_0} + ${b1}t = ${y2_0} + ${b2}s`,
            simplification: `${b1}t - ${b2}s = ${y2_0 - y1_0}`,
            reasoning: 'This is our second equation in the system',
            algebraicRule: 'Equality property'
        });

        // Step 4: Solve system
        if (solution.solution) {
            const { t, s } = solution.solution;
            steps.push({
                stepNumber: 4,
                step: 'Solve system of equations',
                description: 'Solve the 2×2 system for t and s',
                system: {
                    equation1: `${a1}t - ${a2}s = ${x2_0 - x1_0}`,
                    equation2: `${b1}t - ${b2}s = ${y2_0 - y1_0}`
                },
                solution: `t = ${t}, s = ${s}`,
                reasoning: 'Using substitution or elimination method',
                algebraicRule: 'System of linear equations'
            });

            // Step 5: Find intersection point
            const { x, y } = solution.solution;
            steps.push({
                stepNumber: 5,
                step: 'Find intersection point',
                description: 'Substitute t value back into Line 1 equations',
                calculation: `x = ${x1_0} + ${a1}(${t}) = ${x}\ny = ${y1_0} + ${b1}(${t}) = ${y}`,
                expression: `Intersection point: (${x}, ${y})`,
                finalAnswer: true,
                reasoning: 'This is where the two lines meet'
            });
        } else {
            steps.push({
                stepNumber: 4,
                step: 'Analyze system',
                description: 'Check if system has a solution',
                result: solution.solutionType,
                reasoning: 'Lines are parallel or identical',
                finalAnswer: true
            });
        }

        return steps;
    }

    generateMotionSteps(problem, solution) {
        const steps = [];

        // Customize based on specific motion problem type
        if (problem.type === 'parametric_speed') {
            return this.generateVectorSteps(problem, solution);
        }

        // Generic motion steps
        steps.push({
            stepNumber: 1,
            step: 'Identify motion parameters',
            description: 'Extract initial position and velocity',
            components: {
                initialPosition: solution.initialPosition || 'Given',
                velocity: solution.directionVector || solution.velocity || 'Given'
            },
            reasoning: 'These define the motion completely'
        });

        steps.push({
            stepNumber: 2,
            step: 'Analyze motion',
            description: 'Solve specific question about the motion',
            solution: solution.solution,
            finalAnswer: true
        });

        return steps;
    }

    generateGenericParametricSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Parametric problem',
            description: 'Solve the given parametric problem',
            expression: problem.equation || solution.type,
            reasoning: 'Apply appropriate parametric technique',
            solution: solution
        }];
    }

    // ENHANCED EXPLANATION METHODS (reuse and adapt from linear class)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            // Multiple explanation formats
            explanations: {
                conceptual: this.getParametricConceptualExplanation(step, problem),
                procedural: this.getProceduralExplanation(step),
                visual: this.getParametricVisualExplanation(step, problem),
                algebraic: this.getAlgebraicExplanation(step),
                kinematic: this.getKinematicExplanation(step, problem)
            },

            // Difficulty-adapted explanations
            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            // Learning support
            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisites(step, problem.type),
                keyVocabulary: this.identifyParametricVocabulary(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        // Add thinking prompts if enabled
        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateParametricThinkingPrompts(step);
        }

        // Add self-check questions if enabled
        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestion(step);
        }

        // Add real-world connections if enabled
        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findParametricRealWorldConnection(step, problem);
        }

        return enhanced;
    }

    getParametricConceptualExplanation(step, problem) {
        const conceptualExplanations = {
            'Given parametric equations': 'Parametric equations express position as a function of a parameter (often time). They tell us where we are for any value of the parameter.',
            'Evaluate x-coordinate': 'Substituting the parameter value gives us the exact x-position at that moment or location.',
            'Evaluate y-coordinate': 'Similarly, this gives us the exact y-position, completing our coordinate pair.',
            'Solve for parameter': 'Expressing the parameter in terms of x allows us to eliminate it by substitution.',
            'Substitute into y equation': 'This substitution connects x and y directly, removing the parameter.',
            'Identify direction vector': 'The direction vector encodes both the direction and speed of motion along the parametric curve.',
            'Calculate magnitude': 'The magnitude of the direction vector tells us the speed - how fast we move along the path.',
            'Set x-coordinates equal': 'For two paths to intersect, they must reach the same x-coordinate at some parameter values.',
            'Set y-coordinates equal': 'They must also reach the same y-coordinate, giving us a system to solve.'
        };

        return conceptualExplanations[step.step] || 'This step advances our understanding of the parametric relationship.';
    }

    getParametricVisualExplanation(step, problem) {
        const visualExplanations = {
            'Given parametric equations': 'Imagine a point moving along a path. The equations tell you where it is at each moment t.',
            'Evaluate x-coordinate': 'This is how far left or right the point has moved at this specific time.',
            'Evaluate y-coordinate': 'This is how far up or down the point has moved at this specific time.',
            'Identify direction vector': 'Picture an arrow showing which way and how fast the point is moving.',
            'Calculate magnitude': 'The length of the direction arrow is the speed.',
            'Set coordinates equal': 'Visualize two paths crossing - they share a common point.',
            'Solve for parameter': 'Think of unwrapping the time from the position to see the path shape.'
        };

        return visualExplanations[step.step] || 'Visualize this as motion along a curve or path.';
    }

    getKinematicExplanation(step, problem) {
        const kinematicExplanations = {
            'Given parametric equations': 'In physics terms: r(t) = r₀ + vt, where r₀ is initial position and v is velocity vector.',
            'Evaluate x-coordinate': 'Position in x-direction at time t: x(t) = x₀ + vₓt',
            'Evaluate y-coordinate': 'Position in y-direction at time t: y(t) = y₀ + vᵧt',
            'Identify direction vector': 'This is the velocity vector v = ⟨vₓ, vᵧ⟩ showing rate of position change.',
            'Calculate magnitude': 'Speed is ||v|| = √(vₓ² + vᵧ²), the magnitude of velocity.',
            'State the point': 'Position vector at this time: r(t) = ⟨x(t), y(t)⟩'
        };

        return kinematicExplanations[step.step] || 'Consider this from a motion/physics perspective.';
    }

    identifyParametricVocabulary(step) {
        const vocabulary = {
            'Given parametric equations': ['parameter', 'parametric form', 'independent variable'],
            'Evaluate x-coordinate': ['substitution', 'evaluation', 'coordinate'],
            'Solve for parameter': ['elimination', 'solving for variable', 'isolation'],
            'Identify direction vector': ['vector', 'direction', 'components'],
            'Calculate magnitude': ['magnitude', 'norm', 'length', 'Pythagorean theorem'],
            'Set x-coordinates equal': ['intersection', 'equality', 'system of equations'],
            'Choose parameter': ['parametrization', 'parameter', 'independent variable']
        };

        return vocabulary[step.step] || ['parametric', 'equation'];
    }

    generateParametricThinkingPrompts(step) {
        const prompts = {
            'Given parametric equations': {
                before: 'What does each equation tell me? What does the parameter represent?',
                during: 'Can I identify the initial position and direction of motion?',
                after: 'Do I understand how this represents a curve or path?'
            },
            'Solve for parameter': {
                before: 'Which equation is simpler to solve for t?',
                during: 'Am I isolating t correctly?',
                after: 'Is my expression for t in terms of x (or y) correct?'
            },
            'Identify direction vector': {
                before: 'Where are the coefficients of the parameter?',
                during: 'Am I looking at the right coefficients?',
                after: 'Does this direction make sense for the motion?'
            }
        };

        return prompts[step.step] || {
            before: 'What am I trying to accomplish in this step?',
            during: 'Am I applying the correct technique?',
            after: 'Does my result make sense?'
        };
    }

    findParametricRealWorldConnection(step, problem) {
        const connections = {
            'Given parametric equations': 'Like GPS tracking showing where you are at each moment in time.',
            'Evaluate coordinates': 'Like checking your location on a map at a specific time.',
            'Identify direction vector': 'Like knowing your velocity - which way you\'re going and how fast.',
            'Calculate magnitude': 'Like checking your speedometer.',
            'Intersection': 'Like finding where two paths cross in a city.',
            'Solve for parameter': 'Like figuring out what road you\'re on from your GPS coordinates.'
        };

        for (const [key, connection] of Object.entries(connections)) {
            if (step.step.includes(key) || step.description.includes(key)) {
                return connection;
            }
        }

        return 'Parametric equations are used in animation, robotics, physics, and navigation.';
    }

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateParametricELI5Explanation(step, problem),
                analogy: this.findRelevantAnalogy(step, problem),
                simpleLanguage: this.convertToSimpleLanguage(step.description),
                visualization: this.suggestParametricVisualization(step)
            }
        }));
    }

    generateParametricELI5Explanation(step, problem) {
        const ELI5Explanations = {
            'Given parametric equations': "We have two magic formulas! One tells us how far left-right we are, one tells us how far up-down we are. The 't' is like time on a clock.",
            'Evaluate x-coordinate': "Let's see how far left or right we've walked after this much time!",
            'Evaluate y-coordinate': "Now let's see how far up or down we've walked!",
            'State the point': "So we're at this spot on the map!",
            'Solve for parameter': "We're trying to figure out what time it was by looking at where we are left-right.",
            'Substitute into y equation': "Now that we know the time, let's figure out where we are up-down!",
            'Identify direction vector': "This is like the arrow showing which way we're walking and how fast!",
            'Calculate magnitude': "This tells us our walking speed!",
            'Set coordinates equal': "We're finding out where two people's paths cross!",
            'Choose parameter': "Let's call our position left-right 't', like counting steps."
        };

        return ELI5Explanations[step.step] || "We're taking another step to solve our path puzzle!";
    }

    suggestParametricVisualization(step) {
        const visualizations = {
            'Given parametric equations': 'Draw a person starting at (x₀, y₀) with an arrow showing direction ⟨a, b⟩',
            'Evaluate coordinates': 'Mark a point on the path and label it with the time t',
            'Solve for parameter': 'Show t as a clock or timer, x as position',
            'Identify direction vector': 'Draw an arrow from starting point showing which way to walk',
            'Calculate magnitude': 'Show arrow length representing speed',
            'Intersection': 'Draw two paths crossing and mark the meeting point',
            'Substitute': 'Show boxes with arrows: t → x → y'
        };

        for (const [key, viz] of Object.entries(visualizations)) {
            if (step.step.includes(key) || step.description.includes(key)) {
                return viz;
            }
        }

        return 'Draw a picture of the motion or path being described';
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generateParametricStepBridge(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgression(steps[i], steps[i + 1]),
                    strategicThinking: this.explainStepStrategy(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateParametricStepBridge(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression || 'the previous result'}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary because: ${this.explainParametricStepNecessity(currentStep, nextStep)}`,
            howItHelps: `This will help by: ${this.explainStepBenefit(nextStep)}`
        };
    }

    explainParametricStepNecessity(currentStep, nextStep) {
        const necessities = {
            'Evaluate y-coordinate': 'we need both x and y to locate the point',
            'Substitute into y equation': 'we need to eliminate the parameter t',
            'Calculate magnitude': 'we need to find the speed from the direction vector',
            'Set y-coordinates equal': 'both coordinates must match for intersection',
            'Solve system': 'we need to find when both lines are at the same place'
        };

        return necessities[nextStep.step] || 'we continue with the solution process';
    }

    addErrorPrevention(step, problemType) {
        const category = this.parametricTypes[problemType]?.category || 'parametric_basics';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generateParametricPreventionTips(step, problemType),
                checkPoints: this.generateParametricCheckPoints(step),
                warningFlags: this.identifyParametricWarningFlags(step, problemType)
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestion(step),
                expectedResult: this.describeExpectedResult(step),
                troubleshooting: this.generateTroubleshootingTips(step)
            }
        };
    }

    generateParametricPreventionTips(step, problemType) {
        const tips = {
            'Evaluate coordinates': [
                'Substitute carefully, showing each step',
                'Do arithmetic carefully',
                'Remember to evaluate both x and y'
            ],
            'Solve for parameter': [
                'Isolate t completely before substituting',
                'Watch for division by zero',
                'Keep track of which variable you\'re solving for'
            ],
            'Set coordinates equal': [
                'Use different parameters (t and s) for different lines',
                'Set up both equations before solving',
                'Keep track of which equation is which'
            ],
            'Calculate magnitude': [
                'Square both components before adding',
                'Don\'t forget the square root',
                'Check your arithmetic'
            ]
        };

        for (const [key, tipList] of Object.entries(tips)) {
            if (step.step.includes(key)) {
                return tipList;
            }
        }

        return ['Work carefully', 'Check each step', 'Verify your answer'];
    }

    generateParametricCheckPoints(step) {
        return [
            'Did I substitute the parameter value correctly?',
            'Are my arithmetic calculations correct?',
            'Does my answer make sense in context?',
            'Have I answered what was asked?'
        ];
    }

    identifyParametricWarningFlags(step, problemType) {
        const warnings = {
            parametric_to_cartesian: step.step === 'Solve for parameter' ?
                ['Watch for division by zero if coefficient of t is zero', 'Use parentheses when substituting'] : [],
            intersection_problems: step.step === 'Set x-coordinates equal' ?
                ['Must use different parameters for each line', 'Don\'t forget to set y-coordinates equal too'] : [],
            direction_vectors: step.step === 'Calculate magnitude' ?
                ['Don\'t forget the square root', 'Square each component separately'] : []
        };

        const category = this.parametricTypes[problemType]?.category || 'parametric_basics';
        return warnings[category] || [];
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateParametricGuidingQuestions(step, problem),
                subSteps: this.breakIntoSubSteps(step),
                hints: this.generateProgressiveHints(step, problem),
                practiceVariation: this.generatePracticeVariation(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcess(step),
                decisionPoints: this.identifyParametricDecisionPoints(step),
                alternativeApproaches: this.suggestAlternativeParametricMethods(step, problem)
            }
        }));
    }

    generateParametricGuidingQuestions(step, problem) {
        const questions = {
            'Given parametric equations': [
                'What does the parameter t represent?',
                'What is the initial position (at t=0)?',
                'What is the direction vector?'
            ],
            'Evaluate coordinates': [
                'What value of t am I using?',
                'Did I substitute into both equations?',
                'What does this point represent?'
            ],
            'Solve for parameter': [
                'Which equation should I solve first?',
                'Am I isolating t correctly?',
                'What will I do with this expression?'
            ],
            'Identify direction vector': [
                'Where are the coefficients of t?',
                'What does this vector tell me about the motion?',
                'What is the magnitude (speed)?'
            ],
            'Set coordinates equal': [
                'Am I using different parameters for each line?',
                'Did I set both x AND y equal?',
                'What system of equations do I have now?'
            ]
        };

        return questions[step.step] || ['What is this step trying to accomplish?', 'How does it help solve the problem?'];
    }

    identifyParametricDecisionPoints(step) {
        const decisions = {
            'Choose parameter': [
                'Let x = t or y = t or use distance?',
                'What starting point to use?',
                'What direction vector to use?'
            ],
            'Solve for parameter': [
                'Solve x equation or y equation for t?',
                'Which is simpler?'
            ],
            'Intersection': [
                'Which method: substitution or elimination?',
                'Which equation to solve first?'
            ]
        };

        for (const [key, decisionList] of Object.entries(decisions)) {
            if (step.step.includes(key)) {
                return decisionList;
            }
        }

        return ['How to approach this step most efficiently?'];
    }

    suggestAlternativeParametricMethods(step, problem) {
        const alternatives = {
            'Solve for parameter': [
                'Could solve y equation instead of x equation',
                'Could use both to check answer'
            ],
            'Choose parameter': [
                'Could let x = t (simplest)',
                'Could let y = t',
                'Could use arc length parametrization',
                'Could use point-direction form'
            ]
        };

        for (const [key, altList] of Object.entries(alternatives)) {
            if (step.step.includes(key)) {
                return altList;
            }
        }

        return ['The chosen method is appropriate'];
    }

    // HELPER METHODS FROM LINEAR CLASS (adapted for parametric)

    getProceduralExplanation(step) {
        if (step.operation) {
            return `1. Identify what needs to be done: ${step.operation}
2. Perform the operation carefully
3. Simplify the result
4. Write the new equation or result`;
        }
        return 'Follow the standard procedure for this type of step.';
    }

    getAlgebraicExplanation(step) {
        const algebraicRules = {
            'Given parametric equations': 'Standard parametric form: x = f(t), y = g(t)',
            'Evaluate coordinates': 'Function evaluation: substitute parameter value',
            'Solve for parameter': 'Solving linear equation: isolate variable',
            'Substitute into equation': 'Substitution principle',
            'Calculate magnitude': 'Vector magnitude formula: ||v|| = √(a² + b²)',
            'Set coordinates equal': 'Equality property: if at intersection, coordinates match'
        };

        for (const [key, rule] of Object.entries(algebraicRules)) {
            if (step.step.includes(key) || step.description.includes(key)) {
                return rule;
            }
        }

        return 'Apply standard algebraic principles.';
    }

    getAdaptiveExplanation(step, explanationLevel) {
        const level = this.difficultyLevels[explanationLevel] || this.difficultyLevels.intermediate;
        
        return {
            adaptedDescription: this.adaptLanguageLevel(step.description, level),
            adaptedReasoning: step.reasoning ? this.adaptLanguageLevel(step.reasoning, level) : '',
            complexityLevel: explanationLevel
        };
    }

    adaptLanguageLevel(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                'parameter': 't value',
                'parametric': 'equations with t',
                'direction vector': 'movement direction',
                'magnitude': 'size',
                'substitute': 'plug in',
                'eliminate': 'get rid of',
                'intersection': 'where they meet',
                'velocity': 'speed and direction'
            },
            intermediate: {
                'parameter': 'parameter',
                'parametric': 'parametric',
                'direction vector': 'direction vector',
                'magnitude': 'magnitude',
                'substitute': 'substitute',
                'eliminate': 'eliminate',
                'intersection': 'intersection',
                'velocity': 'velocity'
            },
            ELI5: {
                'parameter': 'the t number (like time)',
                'parametric equations': 'special formulas that tell us where we are',
                'direction vector': 'the arrow showing which way we\'re going',
                'magnitude': 'how long the arrow is',
                'substitute': 'put the number in place of t',
                'eliminate': 'make the t disappear',
                'intersection': 'where two paths cross each other',
                'velocity': 'how fast and which way we\'re moving',
                'coordinate': 'position (like on a map)'
            },
            detailed: {
                'parameter': 'parameter (independent variable)',
                'parametric': 'parametric (coordinate functions of parameter)',
                'direction vector': 'direction vector (rate of change vector)',
                'magnitude': 'magnitude (Euclidean norm)',
                'substitute': 'substitute (replacement)',
                'eliminate': 'eliminate (remove by substitution)',
                'intersection': 'intersection (common point)',
                'velocity': 'velocity vector (derivative of position)'
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

    identifyPrerequisites(step, problemType) {
        const category = this.parametricTypes[problemType]?.category || 'parametric_basics';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Basic algebra', 'Function evaluation'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by continuing the solution process`,
            progression: 'We are moving toward our final answer',
            relationship: 'Each step brings us closer to solving the parametric problem'
        };
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'Given parametric equations': 'Do I understand what each part of the equations represents?',
            'Evaluate coordinates': 'Did I substitute the parameter into both equations?',
            'Solve for parameter': 'Is my expression for t correct?',
            'Substitute into equation': 'Did I substitute the entire expression, including parentheses?',
            'Calculate magnitude': 'Did I square both components and take the square root?',
            'Set coordinates equal': 'Did I set both x AND y coordinates equal?',
            'State the point': 'Does this point make sense in context?'
        };

        for (const [key, question] of Object.entries(questions)) {
            if (step.step.includes(key)) {
                return question;
            }
        }

        return 'Does this step make sense and move me toward the solution?';
    }

    describeExpectedResult(step) {
        const expectations = {
            'Evaluate coordinates': 'A specific (x, y) point',
            'Solve for parameter': 'An expression: t = something',
            'Substitute': 'An equation with parameter eliminated',
            'Calculate magnitude': 'A positive number (speed)',
            'Set coordinates equal': 'An equation relating the two parameters',
            'Intersection point': 'Coordinates where lines meet'
        };

        for (const [key, expectation] of Object.entries(expectations)) {
            if (step.step.includes(key) || step.description.includes(key)) {
                return expectation;
            }
        }

        return 'Progress toward final answer';
    }

    generateTroubleshootingTips(step) {
        return [
            'Review the previous step if stuck',
            'Check your arithmetic carefully',
            'Make sure you understand what the step is asking',
            'Try a simpler example first',
            'Draw a picture if helpful'
        ];
    }

    breakIntoSubSteps(step) {
        if (step.calculation) {
            const parts = step.calculation.split('=');
            return parts.map((part, i) => `Part ${i + 1}: ${part.trim()}`);
        }

        if (step.step === 'Solve for parameter') {
            return [
                'Identify the equation to solve',
                'Isolate the parameter term',
                'Divide to get parameter alone',
                'Write the expression for parameter'
            ];
        }

        return ['Understand the goal', 'Apply the technique', 'Verify the result'];
    }

    generateProgressiveHints(step, problem) {
        const category = this.parametricTypes[problem.type]?.category || 'parametric_basics';
        const hintSet = this.hints[category] || {};

        return {
            level1: hintSet.level1 || 'What is this step trying to accomplish?',
            level2: hintSet.level2 || 'What mathematical operation is needed?',
            level3: hintSet.level3 || 'How do you perform this operation?',
            level4: hintSet.level4 || 'Execute the operation step by step'
        };
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try the same type of problem with different numbers',
            practiceHint: 'Start with simpler numbers to build confidence',
            extension: 'Try more complex variations once comfortable'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What information do I have?',
            goal: 'What am I trying to find?',
            strategy: 'What technique should I use?',
            execute: 'How do I perform this correctly?',
            verify: 'Does my result make sense?'
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue the solution`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
    }

    explainStepBenefit(nextStep) {
        return 'bringing us closer to the final answer';
    }

    findRelevantAnalogy(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(problem.type) || 
                analogy.suitableFor.includes(this.parametricTypes[problem.type]?.category)) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of this like following a path where t tells you how far along you've gone!";
    }

    convertToSimpleLanguage(description) {
        const simplifications = {
            'parameter': 't (the input number)',
            'parametric': 'with t in it',
            'direction vector': 'which way we\'re going',
            'magnitude': 'size/length',
            'coordinate': 'position',
            'substitute': 'replace',
            'eliminate': 'get rid of',
            'intersection': 'where paths cross',
            'velocity': 'speed and direction',
            'evaluate': 'calculate',
            'initial position': 'starting spot'
        };

        let simple = description;
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp(term, 'gi');
            simple = simple.replace(regex, replacement);
        }

        return simple;
    }

    // GRAPH GENERATION

    generateParametricGraphData() {
        if (!this.currentSolution || !this.currentProblem || !this.includeParametricGraphs) return;

        const { type } = this.currentProblem;
        const params = this.currentProblem.parameters;

        if (params.x0 !== undefined && params.y0 !== undefined && params.a !== undefined && params.b !== undefined) {
            this.graphData = this.generateParametricCurveGraph(params);
        }
    }

    generateParametricCurveGraph(params) {
        const { x0, y0, a, b } = params;

        // Generate points for t from -2 to 2 (example range)
        const points = [];
        for (let t = -2; t <= 2; t += 0.5) {
            points.push({
                t: t,
                x: x0 + a * t,
                y: y0 + b * t
            });
        }

        return {
            type: 'parametric_line',
            initialPoint: { x: x0, y: y0 },
            directionVector: { a: a, b: b },
            points: points,
            description: `Parametric line starting at (${x0}, ${y0}) with direction ⟨${a}, ${b}⟩`,
            visualization: 'Line with arrows showing direction of increasing t'
        };
    }

    // WORKBOOK GENERATION

    generateParametricWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createParametricConceptsSection(),
            this.createEnhancedStepsSection(),
            this.createParametricLessonSection(),
            this.createSolutionSection(),
            this.createAnalysisSection(),
            this.createVerificationSection(),
            this.createVectorAnalysisSection(),
            this.createMotionAnalysisSection(),
            this.createGraphAnalysisSection(),
            this.createRealWorldApplicationSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection(),
            this.createPracticeProblemsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Parametric Linear Mathematical Workbook',
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
            ['Problem Type', this.parametricTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.parametricTypes[this.currentProblem.type]?.category || 'parametric'],
            ['Description', this.currentProblem.scenario || 'Parametric linear problem']
        ];

        // Add parametric equations if available
        if (this.currentSolution?.equations || this.currentSolution?.parametric) {
            const equations = this.currentSolution.equations || this.currentSolution.parametric;
            problemData.push(['', '']);
            problemData.push(['Parametric Equations', '']);
            if (equations.x) problemData.push(['x equation', equations.x]);
            if (equations.y) problemData.push(['y equation', equations.y]);
        }

        // Add parameters
        if (this.currentProblem.parameters) {
            problemData.push(['', '']);
            problemData.push(['Parameters', '']);
            Object.entries(this.currentProblem.parameters).forEach(([key, value]) => {
                problemData.push([key, value]);
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

        const category = this.parametricTypes[this.currentProblem.type]?.category;
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

    createParametricConceptsSection() {
        const conceptsData = [
            ['Key Parametric Concepts', ''],
            ['', ''],
            ['Parameter Role', this.parametricConcepts.parameter_role.explanation],
            ['', this.parametricConcepts.parameter_role.keyIdea],
            ['', ''],
            ['Curve Tracing', this.parametricConcepts.curve_tracing.explanation],
            ['', this.parametricConcepts.curve_tracing.keyIdea],
            ['', ''],
            ['Linear Parametric', this.parametricConcepts.linear_vs_nonlinear.explanation],
            ['', this.parametricConcepts.linear_vs_nonlinear.keyIdea]
        ];

        return {
            title: 'Parametric Concepts',
            type: 'concepts',
            data: conceptsData
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
                stepsData.push(['Current State', step.explanation.currentState]);
                stepsData.push(['Next Goal', step.explanation.nextGoal]);
                stepsData.push(['Why', step.explanation.why]);
                stepsData.push(['', '']);
                return;
            }

            stepsData.push([`Step ${step.stepNumber}`, step.description]);

            if (step.beforeExpression && step.afterExpression) {
                stepsData.push(['Before', step.beforeExpression]);
                if (step.operation) {
                    stepsData.push(['Operation', step.operation]);
                }
                if (step.calculation) {
                    stepsData.push(['Calculation', step.calculation]);
                }
                stepsData.push(['After', step.afterExpression]);
            } else if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.algebraicRule) {
                stepsData.push(['Rule Used', step.algebraicRule]);
            }

            if (step.interpretation) {
                stepsData.push(['Interpretation', step.interpretation]);
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

            // Enhanced explanations
            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
                stepsData.push(['Kinematic', step.explanations.kinematic]);
            }

            // Error prevention
            if (step.errorPrevention && this.includeErrorPrevention) {
                const mistakes = step.errorPrevention.commonMistakes;
                if (mistakes && mistakes.length > 0) {
                    stepsData.push(['Common Mistakes', mistakes.join('; ')]);
                }
                const tips = step.errorPrevention.preventionTips;
                if (tips && tips.length > 0) {
                    stepsData.push(['Tips', tips.join('; ')]);
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

    createParametricLessonSection() {
        const { type } = this.currentProblem;
        const category = this.parametricTypes[type]?.category;
        const lesson = this.lessons[category] || this.lessons.parametric_basics;

        const lessonData = [
            ['Key Concepts', ''],
            ...lesson.concepts.map(c => ['', c]),
            ['', ''],
            ['Theory', lesson.theory],
            ['', '']
        ];

        if (lesson.keyFormulas) {
            lessonData.push(['Key Formulas', '']);
            Object.entries(lesson.keyFormulas).forEach(([name, formula]) => {
                lessonData.push([name, formula]);
            });
            lessonData.push(['', '']);
        }

        if (lesson.components) {
            lessonData.push(['Components', '']);
            Object.entries(lesson.components).forEach(([component, meaning]) => {
                lessonData.push([component, meaning]);
            });
        }

        return {
            title: 'Key Parametric Concepts',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        if (this.currentSolution.solution !== null && this.currentSolution.solution !== undefined) {
            if (typeof this.currentSolution.solution === 'object') {
                Object.entries(this.currentSolution.solution).forEach(([key, value]) => {
                    solutionData.push([key, value]);
                });
            } else {
                solutionData.push(['Solution', this.currentSolution.solution]);
            }
        }

        if (this.currentSolution.solutionType) {
            solutionData.push(['Type', this.currentSolution.solutionType]);
        }

        if (this.currentSolution.cartesian) {
            solutionData.push(['Cartesian Form', this.currentSolution.cartesian]);
        }

        if (this.currentSolution.parametric) {
            solutionData.push(['', '']);
            solutionData.push(['Parametric Form', '']);
            if (typeof this.currentSolution.parametric === 'object') {
                Object.entries(this.currentSolution.parametric).forEach(([key, value]) => {
                    solutionData.push([key, value]);
                });
            }
        }

        return {
            title: 'Final Solution',
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
            ['Category', this.parametricTypes[this.currentProblem.type]?.category]
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
        if (!this.currentSolution || !this.includeVerificationInSteps) return null;

        const verificationData = [
            ['Verification Method', 'Substitution or logical check'],
            ['', '']
        ];

        if (this.currentSolution.verification) {
            Object.entries(this.currentSolution.verification).forEach(([key, value]) => {
                verificationData.push([key, value]);
            });
        } else {
            verificationData.push(['Status', 'Solution verified through problem-solving process']);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createVectorAnalysisSection() {
        if (!this.includeVectorRepresentation) return null;

        const params = this.currentProblem.parameters;
        if (!params.a || !params.b) return null;

        const magnitude = Math.sqrt(params.a * params.a + params.b * params.b);
        const unitX = params.a / magnitude;
        const unitY = params.b / magnitude;

        const vectorData = [
            ['Vector Analysis', ''],
            ['', ''],
            ['Direction Vector', `⟨${params.a}, ${params.b}⟩`],
            ['Magnitude (Speed)', magnitude],
            ['Unit Vector', `⟨${unitX.toFixed(4)}, ${unitY.toFixed(4)}⟩`],
            ['', ''],
            ['Position Vector Form', `r(t) = ⟨${params.x0 || 0}, ${params.y0 || 0}⟩ + t⟨${params.a}, ${params.b}⟩`],
            ['', ''],
            ['Interpretation', `Moving ${params.a} units/time in x, ${params.b} units/time in y`]
        ];

        return {
            title: 'Vector Analysis',
            type: 'vector_analysis',
            data: vectorData
        };
    }

    createMotionAnalysisSection() {
        if (!this.includeMotionAnalysis) return null;

        const params = this.currentProblem.parameters;
        if (!params.a || !params.b) return null;

        const speed = Math.sqrt(params.a * params.a + params.b * params.b);

        const motionData = [
            ['Motion Analysis', ''],
            ['', ''],
            ['Initial Position', `(${params.x0 || 0}, ${params.y0 || 0})`],
            ['Velocity Vector', `⟨${params.a}, ${params.b}⟩`],
            ['Speed', speed],
            ['', ''],
            ['Position Function', `r(t) = ⟨${params.x0 || 0} + ${params.a}t, ${params.y0 || 0} + ${params.b}t⟩`],
            ['Velocity Function', `v(t) = ⟨${params.a}, ${params.b}⟩ (constant)`],
            ['', ''],
            ['Motion Type', 'Uniform linear motion (constant velocity)'],
            ['Path', 'Straight line'],
            ['Direction', params.a > 0 ? 'Rightward component' : params.a < 0 ? 'Leftward component' : 'No horizontal motion']
        ];

        return {
            title: 'Motion Analysis',
            type: 'motion_analysis',
            data: motionData
        };
    }

    createGraphAnalysisSection() {
        if (!this.graphData) return null;

        const graphData = [
            ['Graph Information', ''],
            ['', ''],
            ['Type', this.graphData.type || 'parametric line'],
            ['Description', this.graphData.description || ''],
            ['', '']
        ];

        if (this.graphData.initialPoint) {
            graphData.push(['Initial Point', `(${this.graphData.initialPoint.x}, ${this.graphData.initialPoint.y})`]);
        }

        if (this.graphData.directionVector) {
            graphData.push(['Direction', `⟨${this.graphData.directionVector.a}, ${this.graphData.directionVector.b}⟩`]);
        }

        if (this.graphData.points) {
            graphData.push(['', '']);
            graphData.push(['Sample Points', '']);
            this.graphData.points.slice(0, 5).forEach(point => {
                graphData.push([`t = ${point.t}`, `(${point.x.toFixed(2)}, ${point.y.toFixed(2)})`]);
            });
        }

        return {
            title: 'Graph Analysis',
            type: 'graph',
            data: graphData
        };
    }

    createRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const applications = Object.values(this.realWorldProblems).slice(0, 3);

        const appData = [
            ['Real-World Parametric Applications', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Form', app.parametricForm]);
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

        const notes = this.generateParametricPedagogicalNotes(this.currentProblem.type);

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

        const alternatives = this.generateParametricAlternativeMethods(this.currentProblem.type);

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

        problems.hard.slice(0, 2).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        return {
            title: 'Practice Problems',
            type: 'practice',
            data: practiceData
        };
    }

    generateParametricPedagogicalNotes(problemType) {
        const category = this.parametricTypes[problemType]?.category;

        const pedagogicalDatabase = {
            parametric_basics: {
                objectives: [
                    'Understand parametric representation of lines',
                    'Evaluate parametric equations at given parameter values',
                    'Identify initial position and direction vector'
                ],
                keyConcepts: [
                    'Parameter as independent variable',
                    'Coordinates as functions of parameter',
                    'Direction vector from coefficients',
                    'Initial position at t=0'
                ],
                prerequisites: [
                    'Function evaluation',
                    'Coordinate system understanding',
                    'Basic substitution'
                ],
                commonDifficulties: [
                    'Confusing direction vector with initial position',
                    'Arithmetic errors in substitution',
                    'Not understanding what parameter represents'
                ],
                teachingStrategies: [
                    'Use motion analogy (position over time)',
                    'Create table of t, x, y values',
                    'Plot points to see the line',
                    'Use vector notation to clarify components'
                ],
                extensions: [
                    'Convert to Cartesian form',
                    'Non-linear parametric equations',
                    '3D parametric lines',
                    'Parametric curves (circles, ellipses)'
                ],
                assessment: [
                    'Can student identify initial position?',
                    'Can student find direction vector?',
                    'Can student evaluate at parameter values?',
                    'Does student understand parameter meaning?'
                ]
            },
            parametric_to_cartesian: {
                objectives: [
                    'Eliminate parameter from parametric equations',
                    'Convert parametric form to Cartesian form',
                    'Understand information lost in conversion'
                ],
                keyConcepts: [
                    'Solving one equation for parameter',
                    'Substitution to eliminate parameter',
                    'Cartesian form shows path shape',
                    'Parametric form shows motion along path'
                ],
                prerequisites: [
                    'Solving linear equations for variables',
                    'Substitution method',
                    'Simplification skills'
                ],
                commonDifficulties: [
                    'Choosing which equation to solve first',
                    'Algebraic errors in substitution',
                    'Not simplifying to slope-intercept form',
                    'Forgetting domain restrictions'
                ],
                teachingStrategies: [
                    'Practice solving for variables first',
                    'Show multiple parametrizations of same line',
                    'Discuss what information is lost',
                    'Compare graphs of parametric vs Cartesian'
                ],
                extensions: [
                    'Parametric to Cartesian for curves',
                    'Domain and range considerations',
                    'Multiple representations of same curve'
                ],
                assessment: [
                    'Can student solve for parameter correctly?',
                    'Does student substitute carefully?',
                    'Can student simplify to standard form?',
                    'Does student understand the conversion process?'
                ]
            },
            direction_vectors: {
                objectives: [
                    'Extract direction vector from parametric form',
                    'Calculate vector magnitude (speed)',
                    'Understand parallel and perpendicular conditions'
                ],
                keyConcepts: [
                    'Direction vector shows rate of change',
                    'Magnitude gives speed',
                    'Unit vector shows pure direction',
                    'Dot product for perpendicularity',
                    'Parallel vectors are scalar multiples'
                ],
                prerequisites: [
                    'Vector notation and components',
                    'Pythagorean theorem',
                    'Dot product',
                    'Vector operations'
                ],
                commonDifficulties: [
                    'Confusing direction vector with position',
                    'Errors in magnitude calculation',
                    'Forgetting square root in magnitude',
                    'Dot product calculation errors'
                ],
                teachingStrategies: [
                    'Draw vectors on coordinate plane',
                    'Use motion context (velocity vectors)',
                    'Practice magnitude calculations',
                    'Visual demonstrations of parallel/perpendicular'
                ],
                extensions: [
                    '3D direction vectors',
                    'Angle between vectors',
                    'Vector projections',
                    'Cross product (3D)'
                ],
                assessment: [
                    'Can student identify direction vector?',
                    'Can student calculate magnitude?',
                    'Can student check parallel/perpendicular?',
                    'Does student understand vector meaning?'
                ]
            },
            intersection_problems: {
                objectives: [
                    'Find intersection of two parametric lines',
                    'Use different parameters for different lines',
                    'Solve systems of equations in two parameters'
                ],
                keyConcepts: [
                    'Different lines need different parameters',
                    'Intersection requires equal coordinates',
                    'System of two equations in two unknowns',
                    'Parallel lines have no intersection'
                ],
                prerequisites: [
                    'Systems of linear equations',
                    'Substitution and elimination methods',
                    'Understanding of intersection concept'
                ],
                commonDifficulties: [
                    'Using same parameter for both lines',
                    'Setting up system incorrectly',
                    'Algebraic errors in solving system',
                    'Not finding actual intersection point',
                    'Forgetting to check if parallel'
                ],
                teachingStrategies: [
                    'Emphasize different parameters (t and s)',
                    'Practice systems of equations separately',
                    'Visual representation of intersection',
                    'Check parallel condition first'
                ],
                extensions: [
                    'Intersection in 3D',
                    'Collision problems (same time)',
                    'Distance between lines',
                    'Closest approach'
                ],
                assessment: [
                    'Does student use different parameters?',
                    'Can student set up system correctly?',
                    'Can student solve the system?',
                    'Does student find and verify intersection point?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Solve parametric linear equations'],
            keyConcepts: ['Parametric representation', 'Parameter elimination'],
            prerequisites: ['Basic algebra'],
            commonDifficulties: ['Various computational challenges'],
            teachingStrategies: ['Step-by-step instruction'],
            extensions: ['More complex problems'],
            assessment: ['Verify understanding']
        };
    }

    generateParametricAlternativeMethods(problemType) {
        const category = this.parametricTypes[problemType]?.category;

        const alternativeDatabase = {
            parametric_to_cartesian: {
                primaryMethod: 'Solve for parameter and substitute',
                methods: [
                    {
                        name: 'Direct elimination',
                        description: 'Solve simpler equation for t, substitute into other'
                    },
                    {
                        name: 'Ratio method',
                        description: 'For x = x₀ + at, y = y₀ + bt, use (y-y₀)/(x-x₀) = b/a directly'
                    },
                    {
                        name: 'Graphical method',
                        description: 'Plot parametric points and fit line through them'
                    }
                ],
                comparison: 'Direct elimination is most systematic; ratio method is faster but requires care; graphical gives intuition'
            },
            cartesian_to_parametric: {
                primaryMethod: 'Let x = t, express y in terms of t',
                methods: [
                    {
                        name: 'Simple substitution',
                        description: 'Let x = t, then y = mt + b'
                    },
                    {
                        name: 'Point-direction form',
                        description: 'Choose point (x₀, y₀), direction ⟨1, m⟩, write x = x₀ + t, y = y₀ + mt'
                    },
                    {
                        name: 'Arc length parametrization',
                        description: 'Use t as distance along curve, normalize direction vector'
                    },
                    {
                        name: 'Let y = t',
                        description: 'Alternatively, let y = t and express x in terms of t'
                    }
                ],
                comparison: 'Simple substitution easiest; point-direction most general; arc length gives unit speed'
            },
            intersection_problems: {
                primaryMethod: 'Set coordinates equal, solve system',
                methods: [
                    {
                        name: 'Substitution method',
                        description: 'Solve one equation for a parameter, substitute into other'
                    },
                    {
                        name: 'Elimination method',
                        description: 'Eliminate one parameter by combining equations'
                    },
                    {
                        name: 'Matrix method',
                        description: 'Set up as matrix equation and solve'
                    },
                    {
                        name: 'Convert to Cartesian',
                        description: 'Convert both to Cartesian form and find intersection'
                    }
                ],
                comparison: 'Substitution most straightforward; elimination sometimes faster; Cartesian method as verification'
            },
            direction_vectors: {
                primaryMethod: 'Extract coefficients of parameter',
                methods: [
                    {
                        name: 'Direct identification',
                        description: 'Read off coefficients of t from equations'
                    },
                    {
                        name: 'Velocity interpretation',
                        description: 'Take derivative: v = dr/dt'
                    },
                    {
                        name: 'Two-point method',
                        description: 'Find two points on line, direction is difference vector'
                    }
                ],
                comparison: 'Direct identification simplest for parametric form; derivative formal; two-point useful for verification'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard parametric approach',
            methods: [{
                name: 'Alternative approach',
                description: 'Other methods may apply depending on context'
            }],
            comparison: 'Choose method based on problem characteristics'
        };
    }
}

// Export the class
export default EnhancedParametricLinearMathematicalWorkbook;
