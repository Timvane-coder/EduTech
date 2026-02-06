// Enhanced Systems with Quadratics Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedQuadraticSystemsMathematicalWorkbook {
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
        this.initializeQuadraticSystemsSolvers();
        this.initializeQuadraticSystemsLessons();
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
            'perpendicular': '⊥', 'parallel': '∥'
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

    initializeQuadraticSystemsLessons() {
        this.lessons = {
            linear_quadratic_systems: {
                title: "Linear-Quadratic Systems",
                concepts: [
                    "System of one linear and one quadratic equation",
                    "Can have 0, 1, or 2 solutions",
                    "Solutions are intersection points of line and parabola/circle",
                    "Solved by substitution or graphing"
                ],
                theory: "A linear-quadratic system consists of one linear equation and one quadratic equation. The solutions represent points where a straight line intersects a curve (parabola, circle, ellipse, or hyperbola).",
                keyFormulas: {
                    "Linear Equation": "y = mx + b or ax + by = c",
                    "Quadratic in Standard Form": "y = ax² + bx + c",
                    "Circle": "x² + y² = r² or (x-h)² + (y-k)² = r²",
                    "Parabola": "y = ax² + bx + c or x = ay² + by + c"
                },
                solvingMethods: [
                    "Substitution method (most common)",
                    "Graphical method",
                    "Elimination (in special cases)"
                ],
                solvingSteps: [
                    "Solve linear equation for one variable",
                    "Substitute into quadratic equation",
                    "Solve resulting quadratic equation",
                    "Find corresponding values of other variable",
                    "Verify all solutions in both original equations"
                ],
                applications: [
                    "Projectile motion intersecting a barrier",
                    "Optimal pricing and revenue",
                    "Collision detection in physics",
                    "Engineering design constraints"
                ],
                geometricInterpretation: "Finding where a line crosses a parabola or circle"
            },

            quadratic_quadratic_systems: {
                title: "Quadratic-Quadratic Systems",
                concepts: [
                    "System of two quadratic equations",
                    "Can have 0, 1, 2, 3, or 4 solutions",
                    "Solutions are intersection points of two curves",
                    "More complex algebraic manipulation required"
                ],
                theory: "A quadratic-quadratic system consists of two quadratic equations. The solutions represent points where two curves intersect, such as two parabolas, two circles, a circle and a parabola, etc.",
                keyFormulas: {
                    "Circle-Circle": "x² + y² = r₁² and x² + y² = r₂²",
                    "Parabola-Parabola": "y = a₁x² + b₁x + c₁ and y = a₂x² + b₂x + c₂",
                    "Circle-Parabola": "x² + y² = r² and y = ax² + bx + c",
                    "General Quadratic": "Ax² + Bxy + Cy² + Dx + Ey + F = 0"
                },
                solvingMethods: [
                    "Substitution method",
                    "Elimination method",
                    "Graphical analysis",
                    "Algebraic manipulation to eliminate one variable"
                ],
                solvingSteps: [
                    "Analyze the system to choose best method",
                    "If possible, solve one equation for a variable",
                    "Substitute into the other equation",
                    "Solve the resulting equation (may be quadratic or quartic)",
                    "Find all corresponding values",
                    "Verify all solutions"
                ],
                applications: [
                    "Intersection of circular orbits",
                    "Radar range overlaps",
                    "Optical lens design",
                    "Satellite dish positioning"
                ],
                geometricInterpretation: "Finding where two curves intersect"
            },

            systems_with_circles: {
                title: "Systems Involving Circles",
                concepts: [
                    "Circle equation: (x-h)² + (y-k)² = r²",
                    "Circle-line: 0, 1 (tangent), or 2 solutions",
                    "Circle-circle: 0, 1 (tangent), 2, or infinite (same circle) solutions",
                    "Distance from center determines number of solutions"
                ],
                theory: "Systems with circles represent geometric relationships. A line can miss, touch (tangent), or cross a circle. Two circles can be separate, tangent (externally or internally), intersecting, or coincident.",
                keyFormulas: {
                    "Standard Form": "(x-h)² + (y-k)² = r²",
                    "General Form": "x² + y² + Dx + Ey + F = 0",
                    "Distance Formula": "d = √[(x₂-x₁)² + (y₂-y₁)²]",
                    "Radius": "r = √[(x-h)² + (y-k)²]"
                },
                solvingStrategies: [
                    "For circle-line: substitute linear equation into circle",
                    "For circle-circle: subtract equations to get linear equation",
                    "Use distance from center to classify solutions",
                    "Check discriminant to determine number of solutions"
                ],
                specialCases: {
                    "Tangent Line": "Discriminant = 0, exactly 1 solution",
                    "Tangent Circles": "Distance between centers = sum or difference of radii",
                    "No Intersection": "Line too far from center, or circles too far apart",
                    "Same Circle": "Identical equations, infinite solutions"
                },
                applications: [
                    "Radio tower coverage areas",
                    "GPS positioning",
                    "Wheel and gear design",
                    "Planetary orbits (approximations)"
                ]
            },

            systems_with_parabolas: {
                title: "Systems Involving Parabolas",
                concepts: [
                    "Parabola opens up/down: y = ax² + bx + c",
                    "Parabola opens left/right: x = ay² + by + c",
                    "Line-parabola: 0, 1 (tangent), or 2 solutions",
                    "Parabola-parabola: 0, 1, 2, or more solutions"
                ],
                theory: "Parabolic systems model projectile motion, satellite dishes, bridges, and many natural phenomena. The number of solutions depends on the relative positions and orientations of the curves.",
                keyFormulas: {
                    "Vertex Form": "y = a(x-h)² + k",
                    "Standard Form": "y = ax² + bx + c",
                    "Focus-Directrix": "Relates to distance from focus and directrix",
                    "Axis of Symmetry": "x = -b/(2a)"
                },
                solvingStrategies: [
                    "For line-parabola: substitute linear into quadratic",
                    "For two parabolas with same orientation: set equal and solve",
                    "For different orientations: solve one for linear term, substitute",
                    "Use graphing to visualize and verify"
                ],
                applications: [
                    "Projectile trajectory intersecting ground/obstacle",
                    "Bridge arch meeting support cable",
                    "Satellite dish and signal path",
                    "Fountain water arc design"
                ]
            },

            substitution_method: {
                title: "Substitution Method for Quadratic Systems",
                concepts: [
                    "Solve simpler equation for one variable",
                    "Substitute expression into other equation",
                    "Results in single-variable equation (often quadratic or higher)",
                    "Back-substitute to find other coordinate"
                ],
                theory: "Substitution reduces a system of two equations in two variables to a single equation in one variable. For quadratic systems, this often results in a quadratic equation.",
                procedure: [
                    "Identify the simpler equation (usually linear)",
                    "Solve it for one variable (x or y)",
                    "Substitute this expression into the other equation",
                    "Simplify to get equation in one variable",
                    "Solve (use quadratic formula if needed)",
                    "Substitute solutions back to find other variable",
                    "Verify all solution pairs"
                ],
                advantages: [
                    "Works for all types of quadratic systems",
                    "Systematic and reliable",
                    "Good for systems where one equation is linear"
                ],
                disadvantages: [
                    "Can lead to complex algebra",
                    "May result in higher-degree equations",
                    "More algebraic manipulation than graphing"
                ],
                whenToUse: "Best when one equation is linear or easily solved for a variable"
            },

            elimination_method: {
                title: "Elimination Method for Quadratic Systems",
                concepts: [
                    "Add or subtract equations to eliminate a variable",
                    "Works well when coefficients align",
                    "May require multiplication to align coefficients",
                    "Special cases with quadratic terms"
                ],
                theory: "Elimination works by combining equations to eliminate one variable. For quadratic systems, this can be tricky but is powerful in specific cases.",
                procedure: [
                    "Arrange equations in standard form",
                    "Identify variable to eliminate",
                    "Multiply equations if needed to align coefficients",
                    "Add or subtract to eliminate variable",
                    "Solve resulting equation",
                    "Back-substitute to find other variable",
                    "Verify solutions"
                ],
                specialTechniques: {
                    "Circle-Circle": "Subtract to eliminate x² and y² terms",
                    "Same Quadratic Terms": "Subtract to get linear equation",
                    "Linear Combination": "Create equation with one variable eliminated"
                },
                whenToUse: "Best for circle-circle systems or when quadratic terms can be eliminated"
            },

            graphical_method: {
                title: "Graphical Solution Method",
                concepts: [
                    "Graph both equations on same coordinate plane",
                    "Intersection points are solutions",
                    "Number of intersections = number of solutions",
                    "Provides visual understanding"
                ],
                theory: "The graphical method provides geometric insight and visual confirmation. While not always exact, it helps understand the relationship between equations.",
                procedure: [
                    "Graph first equation",
                    "Graph second equation on same axes",
                    "Identify intersection points",
                    "Read coordinates from graph",
                    "Verify algebraically for precision"
                ],
                advantages: [
                    "Visual understanding of solutions",
                    "Reveals number of solutions immediately",
                    "Helps check algebraic work",
                    "Good for understanding geometric relationships"
                ],
                limitations: [
                    "May not be exact without technology",
                    "Difficult for non-integer solutions",
                    "Scale and precision issues"
                ],
                applications: "Excellent for initial analysis and verification"
            },

            solution_classification: {
                title: "Classifying Solutions of Quadratic Systems",
                concepts: [
                    "Number of solutions depends on discriminant",
                    "Geometric interpretation: how curves relate",
                    "No solution: curves don't intersect",
                    "One solution: curves are tangent",
                    "Two solutions: curves intersect twice",
                    "Infinite solutions: same curve (rare)"
                ],
                analysis: {
                    "Line-Parabola": {
                        "0 solutions": "Line doesn't intersect parabola",
                        "1 solution": "Line is tangent to parabola",
                        "2 solutions": "Line crosses parabola twice"
                    },
                    "Line-Circle": {
                        "0 solutions": "Line is too far from circle center",
                        "1 solution": "Line is tangent to circle",
                        "2 solutions": "Line passes through circle"
                    },
                    "Circle-Circle": {
                        "0 solutions": "Circles are separate",
                        "1 solution": "Circles are externally or internally tangent",
                        "2 solutions": "Circles intersect",
                        "Infinite solutions": "Same circle"
                    },
                    "Parabola-Parabola": {
                        "Varies": "Can have 0, 1, 2, 3, or 4 solutions depending on orientation and position"
                    }
                },
                discriminantAnalysis: "Use discriminant of resulting quadratic to determine number of real solutions"
            },

            word_problems: {
                title: "Word Problems with Quadratic Systems",
                concepts: [
                    "Translate real situations into equations",
                    "Identify variables and relationships",
                    "One equation often represents constraint",
                    "Other equation represents optimization or condition"
                ],
                problemTypes: {
                    "Area and Perimeter": "Rectangle with area = x·y and perimeter = 2x + 2y",
                    "Number Problems": "Two numbers with sum and product relationships",
                    "Projectile Motion": "Path of object with constraints",
                    "Revenue/Profit": "Quadratic revenue model with linear cost",
                    "Geometry": "Shapes with multiple constraints",
                    "Rate Problems": "Distance, rate, time with quadratic relationships"
                },
                strategySteps: [
                    "Read carefully and identify unknowns",
                    "Define variables",
                    "Write equation for each constraint/condition",
                    "Solve the system",
                    "Interpret solutions in context",
                    "Check reasonableness and units"
                ],
                commonSetups: {
                    "Rectangle": "Length × Width = Area, 2Length + 2Width = Perimeter",
                    "Projectile": "y = -16t² + v₀t + h₀ (vertical) and horizontal constraint",
                    "Revenue": "R = p·q (price × quantity) with demand equation q = a - bp"
                }
            },

            special_cases: {
                title: "Special Cases and Edge Conditions",
                concepts: [
                    "No real solutions (complex solutions only)",
                    "Infinite solutions (identical curves)",
                    "One solution (tangency)",
                    "Degenerate cases (equations reduce to simpler forms)"
                ],
                specialSituations: {
                    "Discriminant < 0": "No real solutions, curves don't intersect in real plane",
                    "Discriminant = 0": "Exactly one solution, curves are tangent",
                    "Identical Equations": "Infinite solutions, same curve",
                    "Parallel Lines": "Special case if reduced to linear system with no solution",
                    "Degenerate Quadratics": "Quadratic reduces to linear or point"
                },
                handling: "Always check for special cases; interpret geometrically when possible"
            }
        };
    }

    initializeQuadraticSystemsSolvers() {
        this.quadraticSystemTypes = {
            // Linear-Quadratic Systems
            line_parabola: {
                patterns: [
                    /linear.*parabola/i,
                    /line.*quadratic/i,
                    /y\s*=\s*[^x]*x[^x]*\s*and\s*y\s*=.*x\^2/i
                ],
                solver: this.solveLineParabola.bind(this),
                name: 'Line-Parabola System',
                category: 'linear_quadratic',
                description: 'System with one linear and one quadratic equation',
                expectedSolutions: '0, 1, or 2 solutions'
            },

            line_circle: {
                patterns: [
                    /line.*circle/i,
                    /linear.*circle/i,
                    /x\^2\s*\+\s*y\^2.*and.*y\s*=/i
                ],
                solver: this.solveLineCircle.bind(this),
                name: 'Line-Circle System',
                category: 'linear_quadratic',
                description: 'System with a line and a circle',
                expectedSolutions: '0, 1 (tangent), or 2 solutions'
            },

            // Quadratic-Quadratic Systems
            two_parabolas: {
                patterns: [
                    /two.*parabola/i,
                    /parabola.*parabola/i,
                    /y\s*=.*x\^2.*and.*y\s*=.*x\^2/i
                ],
                solver: this.solveTwoParabolas.bind(this),
                name: 'Two Parabolas System',
                category: 'quadratic_quadratic',
                description: 'System with two parabolic equations',
                expectedSolutions: '0, 1, 2, 3, or 4 solutions'
            },

            two_circles: {
                patterns: [
                    /two.*circle/i,
                    /circle.*circle/i,
                    /x\^2\s*\+\s*y\^2.*and.*x\^2\s*\+\s*y\^2/i
                ],
                solver: this.solveTwoCircles.bind(this),
                name: 'Two Circles System',
                category: 'quadratic_quadratic',
                description: 'System with two circle equations',
                expectedSolutions: '0, 1 (tangent), 2, or infinite (same circle) solutions'
            },

            circle_parabola: {
                patterns: [
                    /circle.*parabola/i,
                    /parabola.*circle/i
                ],
                solver: this.solveCircleParabola.bind(this),
                name: 'Circle-Parabola System',
                category: 'quadratic_quadratic',
                description: 'System with a circle and a parabola',
                expectedSolutions: '0, 1, 2, 3, or 4 solutions'
            },

            // By Method
            substitution_quadratic: {
                patterns: [
                    /substitution/i,
                    /substitute/i
                ],
                solver: this.solveBySubstitution.bind(this),
                name: 'Substitution Method',
                category: 'method_based',
                description: 'Solve using substitution technique'
            },

            elimination_quadratic: {
                patterns: [
                    /elimination/i,
                    /eliminate/i
                ],
                solver: this.solveByElimination.bind(this),
                name: 'Elimination Method',
                category: 'method_based',
                description: 'Solve using elimination technique'
            },

            graphical_quadratic: {
                patterns: [
                    /graph/i,
                    /graphical/i,
                    /plot/i
                ],
                solver: this.solveGraphically.bind(this),
                name: 'Graphical Method',
                category: 'method_based',
                description: 'Solve by graphing both equations'
            },

            // Word Problems
            word_area_perimeter: {
                patterns: [
                    /area.*perimeter/i,
                    /rectangle.*area/i,
                    /dimensions/i
                ],
                solver: this.solveWordAreaPerimeter.bind(this),
                name: 'Area-Perimeter Problems',
                category: 'word_problems',
                description: 'Problems involving area and perimeter constraints'
            },

            word_projectile: {
                patterns: [
                    /projectile/i,
                    /trajectory/i,
                    /throw/i,
                    /launch/i
                ],
                solver: this.solveWordProjectile.bind(this),
                name: 'Projectile Motion Problems',
                category: 'word_problems',
                description: 'Problems involving parabolic paths'
            },

            word_number: {
                patterns: [
                    /two.*number/i,
                    /sum.*product/i,
                    /number.*relationship/i
                ],
                solver: this.solveWordNumber.bind(this),
                name: 'Number Problems',
                category: 'word_problems',
                description: 'Problems about number relationships'
            },

            word_revenue: {
                patterns: [
                    /revenue/i,
                    /profit/i,
                    /price.*quantity/i,
                    /demand/i
                ],
                solver: this.solveWordRevenue.bind(this),
                name: 'Revenue/Profit Problems',
                category: 'word_problems',
                description: 'Business optimization problems'
            },

            // General quadratic system
            general_quadratic_system: {
                patterns: [
                    /system/i,
                    /quadratic.*system/i
                ],
                solver: this.solveGeneralQuadraticSystem.bind(this),
                name: 'General Quadratic System',
                category: 'general',
                description: 'General system with quadratic equations'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            linear_quadratic: {
                'Substitution': [
                    'Forgetting to substitute into both equations for verification',
                    'Arithmetic errors when substituting expression',
                    'Not simplifying before substituting'
                ],
                'Solving quadratic': [
                    'Errors in quadratic formula',
                    'Forgetting ± sign in solutions',
                    'Not checking discriminant first'
                ],
                'Back-substitution': [
                    'Using wrong equation for back-substitution',
                    'Sign errors when substituting negative values',
                    'Not finding both y-values for both x-values'
                ]
            },
            quadratic_quadratic: {
                'Variable elimination': [
                    'Incorrectly subtracting equations',
                    'Forgetting to distribute negative sign',
                    'Not recognizing when elimination is possible'
                ],
                'Complex algebra': [
                    'Errors in expanding squared terms',
                    'Combining unlike terms',
                    'Lost solutions due to division by variable'
                ],
                'Multiple solutions': [
                    'Missing some solutions',
                    'Not checking all possibilities',
                    'Arithmetic errors with multiple substitutions'
                ]
            },
            circles: {
                'Circle equations': [
                    'Confusing (x-h)² with (x+h)²',
                    'Errors in completing the square',
                    'Forgetting that r² must be positive'
                ],
                'Distance interpretation': [
                    'Wrong distance formula',
                    'Misinterpreting tangency conditions',
                    'Not using center coordinates correctly'
                ]
            },
            word_problems: {
                'Setup': [
                    'Incorrect variable definitions',
                    'Wrong equation setup',
                    'Missing constraints'
                ],
                'Interpretation': [
                    'Not checking if solutions make sense in context',
                    'Forgetting units',
                    'Accepting negative values when not physical'
                ]
            }
        };

        this.errorPrevention = {
            substitution_errors: {
                reminder: 'Substitute carefully, keeping track of parentheses',
                method: 'Use parentheses around entire expression when substituting'
            },
            quadratic_formula: {
                reminder: 'Remember ± gives two solutions; check discriminant first',
                method: 'Write out a, b, c values clearly before plugging into formula'
            },
            sign_errors: {
                reminder: 'Be extra careful with negative signs in quadratic systems',
                method: 'Circle all negative signs before starting work'
            },
            verification: {
                reminder: 'Always check solutions in BOTH original equations',
                method: 'Substitute each solution pair into both equations'
            },
            extraneous_solutions: {
                reminder: 'Squaring can introduce extraneous solutions',
                method: 'Always verify solutions after squaring both sides'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Geometric meaning of intersection points',
                language: 'Visual and spatial understanding'
            },
            procedural: {
                focus: 'Step-by-step algebraic manipulation',
                language: 'Precise algorithmic instructions'
            },
            visual: {
                focus: 'Graphical representation and curve relationships',
                language: 'Visual metaphors and sketches'
            },
            algebraic: {
                focus: 'Formal algebraic techniques and properties',
                language: 'Mathematical rigor and notation'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple terms, avoid technical jargon',
                detail: 'main steps only',
                examples: 'concrete numerical examples'
            },
            intermediate: {
                vocabulary: 'standard mathematical terminology',
                detail: 'key steps with brief explanations',
                examples: 'mix of specific and general cases'
            },
            ELI5: {
                vocabulary: 'extremely simple, everyday language',
                detail: 'every tiny step with analogies',
                examples: 'real-world stories and pictures',
                analogies: true,
                visualization: 'simple drawings and metaphors'
            },
            detailed: {
                vocabulary: 'full mathematical vocabulary',
                detail: 'comprehensive with all reasoning',
                examples: 'general and abstract cases'
            },
            scaffolded: {
                vocabulary: 'progressive complexity',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced progression'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            projectile_motion: {
                scenario: "Projectile intersecting a barrier or ground",
                equations: "Height: y = -16t² + v₀t + h₀, Barrier: y = mx + b",
                examples: [
                    "A ball is thrown from 6 feet high with initial velocity 64 ft/s. When does it hit ground (y = 0)?",
                    "Firework launched at 80 ft/s from ground. At what time and height does it pass through smoke at y = 50 + 2t?"
                ],
                context: "Understanding projectile paths helps in sports, military applications, and safety engineering"
            },
            revenue_optimization: {
                scenario: "Revenue and cost intersection for break-even or profit maximization",
                equations: "Revenue: R = p·q where q = a - bp (demand), Cost: C = mx + b",
                examples: [
                    "Revenue R = 100q - q² where q is quantity. Cost C = 20q + 500. Find break-even points.",
                    "Price p and quantity q related by p = 50 - 0.5q. Total revenue R = pq. When does R = 600?"
                ],
                context: "Business decisions require understanding where revenue equals cost or reaches maximum"
            },
            area_perimeter: {
                scenario: "Finding dimensions given area and perimeter",
                equations: "Area: A = xy, Perimeter: P = 2x + 2y",
                examples: [
                    "Rectangle has area 48 sq ft and perimeter 28 ft. Find dimensions.",
                    "Garden is 60 sq meters with 32-meter fence. What are length and width?"
                ],
                context: "Construction, gardening, and design require optimizing space and materials"
            },
            satellite_coverage: {
                scenario: "Circular coverage areas intersecting",
                equations: "Circle 1: (x-h₁)² + (y-k₁)² = r₁², Circle 2: (x-h₂)² + (y-k₂)² = r₂²",
                examples: [
                    "Two cell towers at (0,0) and (10,0) each cover radius 8 miles. Where do coverage areas overlap?",
                    "GPS satellites at (-5, 0) range 10 km and at (5, 0) range 10 km. Find intersection points."
                ],
                context: "Communications, GPS, and radar systems need to understand coverage overlaps"
            },
            bridge_arch: {
                scenario: "Parabolic arch meeting roadway or support",
                equations: "Arch: y = -ax² + c, Road: y = mx + b",
                examples: [
                    "Bridge arch is y = -0.01x² + 20. Flat road is y = 0. Find width of bridge at road level.",
                    "Suspension cable is y = 0.02x² - 2x + 52. Support beam is y = 2. Where do they meet?"
                ],
                context: "Civil engineering requires precise calculations for structural support"
            },
            number_relationships: {
                scenario: "Two numbers with given sum and product",
                equations: "Sum: x + y = S, Product: xy = P",
                examples: [
                    "Two numbers sum to 12 and multiply to 35. Find the numbers.",
                    "Difference is 4 and product is 45. What are the numbers?"
                ],
                context: "Problem-solving and algebraic thinking development"
            },
            circular_motion: {
                scenario: "Objects moving in circular paths",
                equations: "Path 1: x² + y² = r₁², Path 2: (x-a)² + (y-b)² = r₂²",
                examples: [
                    "Two gears centered at (0,0) and (5,0) with radii 3 and 2. Where do they touch?",
                    "Ferris wheel at origin radius 50 ft. Person walks path x² + (y-40)² = 100. Intersection?"
                ],
                context: "Mechanical engineering and amusement park design"
            },
            optimal_design: {
                scenario: "Maximizing area with constraint",
                equations: "Area to maximize: A = xy, Constraint: material or perimeter limit",
                examples: [
                    "Fence along river (one side free). 200 ft of fence. Maximize area.",
                    "Box with square base, open top, volume 500 cm³. Minimize surface area."
                ],
                context: "Engineering design seeks to optimize with limited resources"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            linear_quadratic: {
                skills: [
                    'Solving linear equations',
                    'Solving quadratic equations',
                    'Substitution method',
                    'Quadratic formula',
                    'Graphing lines and parabolas'
                ],
                priorKnowledge: [
                    'Linear equation forms',
                    'Quadratic equation forms',
                    'Factoring quadratics',
                    'Completing the square',
                    'Understanding discriminant'
                ],
                checkQuestions: [
                    "Solve for y: 2x + 3y = 12",
                    "Solve: x² - 5x + 6 = 0",
                    "Use quadratic formula on: 2x² + 3x - 5 = 0",
                    "What does discriminant tell you?"
                ]
            },
            quadratic_quadratic: {
                skills: [
                    'All linear-quadratic skills',
                    'Advanced factoring',
                    'Elimination method',
                    'Working with higher-degree equations',
                    'Graphing circles and parabolas'
                ],
                priorKnowledge: [
                    'Circle equation forms',
                    'Parabola transformations',
                    'Completing the square for circles',
                    'Distance formula',
                    'Understanding multiple solutions'
                ],
                checkQuestions: [
                    "Complete the square: x² + 6x + y² - 4y = 12",
                    "Find center and radius: x² + y² - 8x + 6y = 0",
                    "Distance between (3,4) and (-1,2)?",
                    "Solve: x⁴ - 5x² + 4 = 0"
                ]
            },
            circles: {
                skills: [
                    'Circle equation forms',
                    'Distance formula',
                    'Completing the square',
                    'Pythagorean theorem',
                    'Understanding radius and center'
                ],
                priorKnowledge: [
                    'Standard form: (x-h)² + (y-k)² = r²',
                    'General form: x² + y² + Dx + Ey + F = 0',
                    'Converting between forms',
                    'Geometric properties of circles'
                ],
                checkQuestions: [
                    "Find center and radius of (x-3)² + (y+2)² = 25",
                    "Convert to standard form: x² + y² - 6x + 4y - 12 = 0",
                    "Are (5,0) and (-5,0) on circle x² + y² = 25?"
                ]
            },
            parabolas: {
                skills: [
                    'Parabola forms and transformations',
                    'Finding vertex',
                    'Axis of symmetry',
                    'Solving quadratics',
                    'Understanding parabola properties'
                ],
                priorKnowledge: [
                    'Vertex form: y = a(x-h)² + k',
                    'Standard form: y = ax² + bx + c',
                    'Direction of opening (a > 0 or a < 0)',
                    'Vertex at x = -b/(2a)'
                ],
                checkQuestions: [
                    "Find vertex of y = 2x² - 8x + 5",
                    "Does parabola y = -3x² + 6x open up or down?",
                    "Write y = x² - 4x + 1 in vertex form"
                ]
            },
            word_problems: {
                skills: [
                    'Reading comprehension',
                    'Variable definition',
                    'Equation setup from verbal description',
                    'All solving skills above',
                    'Solution interpretation'
                ],
                priorKnowledge: [
                    'Translating words to math',
                    'Understanding constraints',
                    'Unit analysis',
                    'Reasonableness checks'
                ],
                checkQuestions: [
                    "If length is 3 more than width, write equation",
                    "Area = length × width. If area is 50 and length is x, write equation",
                    "Revenue = price × quantity. If price is p and quantity is 100-2p, write R(p)"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            intersection_points: {
                description: "Solutions as geometric intersections",
                analogy: "Where two paths cross on a map",
                visualization: "Graph both curves and mark intersection points",
                suitableFor: ['all_systems'],
                explanation: "Each solution is a point (x, y) where both equations are satisfied simultaneously"
            },
            substitution_visual: {
                description: "Substitution as replacing y with expression",
                analogy: "Like replacing a variable in a formula with its value",
                visualization: "Show algebraic substitution step-by-step",
                suitableFor: ['linear_quadratic', 'substitution_method'],
                explanation: "Solve simpler equation for y, then replace every y in other equation"
            },
            elimination_blocks: {
                description: "Elimination as canceling matching terms",
                analogy: "Subtracting identical items from both sides of a balance",
                visualization: "Show terms canceling when equations are subtracted",
                suitableFor: ['quadratic_quadratic', 'circles'],
                explanation: "Add or subtract equations to eliminate one variable"
            },
            discriminant_check: {
                description: "Discriminant predicts number of solutions",
                analogy: "Like checking weather forecast before planning",
                visualization: "Show b² - 4ac > 0 (2 solutions), = 0 (1), < 0 (0)",
                suitableFor: ['all_systems'],
                explanation: "Check discriminant to know how many real solutions exist"
            },
            circle_line_distance: {
                description: "Line-circle solutions by distance from center",
                analogy: "How many times does a straight road cross a circular track?",
                visualization: "Draw circle with center, show line at various distances",
                suitableFor: ['line_circle'],
                explanation: "If distance < radius: 2 intersections; = radius: tangent; > radius: none"
            },
            parabola_motion: {
                description: "Parabola as projectile path",
                analogy: "Ball thrown in the air follows parabolic arc",
                visualization: "Draw trajectory arc showing height vs. time or distance",
                suitableFor: ['parabolas', 'word_problems'],
                explanation: "Quadratic equation models how height changes with time or distance"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "y = x + 1 and y = x²",
                    type: "line-parabola",
                    solution: [{x: -1, y: 0}, {x: 1, y: 2}],
                    steps: [
                        "Substitute y = x + 1 into y = x²",
                        "x + 1 = x²",
                        "x² - x - 1 = 0 (rearrange)",
                        "(x - 1)(x + 1) = 0 (factor)",
                        "x = 1 or x = -1",
                        "For x = 1: y = 1 + 1 = 2",
                        "For x = -1: y = -1 + 1 = 0",
                        "Solutions: (1, 2) and (-1, 0)"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "y = 2x and x² + y² = 20",
                    type: "line-circle",
                    solution: [{x: 2, y: 4}, {x: -2, y: -4}],
                    steps: [
                        "Substitute y = 2x into x² + y² = 20",
                        "x² + (2x)² = 20",
                        "x² + 4x² = 20",
                        "5x² = 20",
                        "x² = 4",
                        "x = ±2",
                        "For x = 2: y = 2(2) = 4",
                        "For x = -2: y = 2(-2) = -4",
                        "Solutions: (2, 4) and (-2, -4)"
                    ],
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "y = x² and y = -x² + 8",
                    type: "two-parabolas",
                    solution: [{x: 2, y: 4}, {x: -2, y: 4}],
                    steps: [
                        "Set equations equal: x² = -x² + 8",
                        "2x² = 8",
                        "x² = 4",
                        "x = ±2",
                        "For x = 2: y = 2² = 4",
                        "For x = -2: y = (-2)² = 4",
                        "Solutions: (2, 4) and (-2, 4)"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "x² + y² = 25 and (x-3)² + y² = 16",
                    type: "two-circles",
                    solution: [{x: 3.6, y: 4.8}, {x: 3.6, y: -4.8}],
                    steps: [
                        "Subtract second from first",
                        "x² - (x-3)² = 25 - 16",
                        "x² - (x² - 6x + 9) = 9",
                        "6x - 9 = 9",
                        "6x = 18",
                        "x = 3",
                        "Substitute into first: 9 + y² = 25",
                        "y² = 16, y = ±4",
                        "Solutions: (3, 4) and (3, -4)"
                    ],
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "y = x² - 4x + 3 and x² + y² = 9",
                    type: "circle-parabola",
                    solution: "Multiple solutions requiring quadratic formula",
                    steps: [
                        "Substitute y = x² - 4x + 3 into circle",
                        "x² + (x² - 4x + 3)² = 9",
                        "x² + x⁴ - 8x³ + 22x² - 24x + 9 = 9",
                        "x⁴ - 8x³ + 23x² - 24x = 0",
                        "x(x³ - 8x² + 23x - 24) = 0",
                        "One solution x = 0, others require numerical methods"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "Word problem: Two numbers sum to 10 and product is 21",
                    type: "number-word-problem",
                    solution: [{x: 7, y: 3}, {x: 3, y: 7}],
                    steps: [
                        "Define: x and y are the two numbers",
                        "Write equations: x + y = 10 and xy = 21",
                        "From first: y = 10 - x",
                        "Substitute: x(10 - x) = 21",
                        "10x - x² = 21",
                        "x² - 10x + 21 = 0",
                        "(x - 7)(x - 3) = 0",
                        "x = 7 or x = 3",
                        "If x = 7, then y = 3; if x = 3, then y = 7",
                        "Numbers are 7 and 3"
                    ],
                    difficulty: "hard"
                }
            ],
            byType: {
                line_parabola: [
                    {problem: "y = x and y = x² - 2", solution: "x = 2 or x = -1"},
                    {problem: "y = -x + 6 and y = x²", solution: "x = 2 or x = -3"}
                ],
                line_circle: [
                    {problem: "y = x and x² + y² = 8", solution: "(2, 2) and (-2, -2)"},
                    {problem: "y = 0 and x² + y² = 16", solution: "(4, 0) and (-4, 0)"}
                ],
                two_circles: [
                    {problem: "x² + y² = 9 and (x-4)² + y² = 9", solution: "tangent at (2, ±√5)"},
                    {problem: "x² + y² = 25 and (x-6)² + y² = 25", solution: "(3, ±4)"}
                ],
                word_problems: [
                    {problem: "Rectangle area 24, perimeter 20", solution: "6×4 or 4×6"},
                    {problem: "Two numbers differ by 2, product 15", solution: "5 and 3"}
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            forgetting_two_solutions: {
                misconception: "Forgetting that quadratic systems can have 2 solutions",
                reality: "After finding x-values, must find corresponding y for each",
                correctiveExample: "If x = 2 or x = -2, find y for BOTH x-values",
                commonIn: ['all_quadratic_systems']
            },
            substitution_parentheses: {
                misconception: "Not using parentheses when substituting expressions",
                reality: "Must put entire expression in parentheses, especially when squaring",
                correctiveExample: "y = x + 1 into y² becomes (x + 1)², not x + 1²",
                commonIn: ['substitution_method']
            },
            discriminant_misuse: {
                misconception: "Not checking discriminant before solving",
                reality: "Discriminant tells how many real solutions exist",
                correctiveExample: "If b² - 4ac < 0, no real solutions (curves don't intersect)",
                commonIn: ['all_systems']
            },
            extraneous_solutions: {
                misconception: "Not verifying solutions in original equations",
                reality: "Squaring or other operations can introduce invalid solutions",
                correctiveExample: "Always substitute back into BOTH original equations to verify",
                commonIn: ['all_systems']
            },
            circle_center_sign: {
                misconception: "Confusing signs in (x - h)² + (y - k)² = r²",
                reality: "Center is (h, k), not (-h, -k)",
                correctiveExample: "(x - 3)² + (y + 2)² = 16 has center (3, -2), not (-3, 2)",
                commonIn: ['circles']
            },
            elimination_errors: {
                misconception: "Incorrectly subtracting equations",
                reality: "Must distribute negative to all terms when subtracting",
                correctiveExample: "(x² + y²) - (x² - 2x + y²) = 2x, not -2x",
                commonIn: ['elimination_method']
            },
            word_problem_setup: {
                misconception: "Setting up wrong equations from word problems",
                reality: "Carefully translate each condition into an equation",
                correctiveExample: "'Sum is 10' means x + y = 10, not xy = 10",
                commonIn: ['word_problems']
            },
            geometric_interpretation: {
                misconception: "Not understanding what solutions represent geometrically",
                reality: "Solutions are intersection points of the graphs",
                correctiveExample: "No real solutions means curves don't intersect in the plane",
                commonIn: ['all_systems']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            intersection_points: {
                analogy: "Finding where two roads cross",
                explanation: "Solutions to a system are like finding exact GPS coordinates where two roads intersect",
                suitableFor: ['all_systems'],
                ELI5: "Imagine you're driving on one road and your friend is on another. The place where you meet is the solution!"
            },
            substitution_method: {
                analogy: "Replacing ingredients in a recipe",
                explanation: "Just like substituting honey for sugar in a recipe, we replace y with its equivalent expression",
                suitableFor: ['substitution_method'],
                ELI5: "If you know that 'apples' means 'red fruits', you can replace 'apples' with 'red fruits' anywhere!"
            },
            circle_line_intersections: {
                analogy: "Rope crossing a hula hoop",
                explanation: "A straight rope can miss a hoop, touch it once (tangent), or pass through it twice",
                suitableFor: ['line_circle'],
                ELI5: "Hold a hula hoop and a stick. The stick can miss the hoop, touch it at one spot, or poke through at two spots!"
            },
            two_circles: {
                analogy: "Two overlapping wheels or rings",
                explanation: "Two circular rings can be separate, touch at one point, or overlap at two points",
                suitableFor: ['two_circles'],
                ELI5: "Think of two rubber bands on a table. They might not touch, touch at one point like a kiss, or cross through each other!"
            },
            parabola: {
                analogy: "Throwing a ball in the air",
                explanation: "A parabola is the path a ball follows when you throw it - it goes up, then comes down",
                suitableFor: ['parabolas'],
                ELI5: "When you throw a ball, it makes a curved path up and down. That curve is a parabola!"
            },
            quadratic_formula: {
                analogy: "A recipe that always works",
                explanation: "The quadratic formula is like a reliable recipe - put in the ingredients (a, b, c) and get the solutions",
                suitableFor: ['all_quadratic'],
                ELI5: "It's like a magic formula: you put in three numbers and it tells you the answers!"
            },
            discriminant: {
                analogy: "Weather forecast before a trip",
                explanation: "The discriminant tells you what to expect before you solve, like checking weather before a trip",
                suitableFor: ['all_systems'],
                ELI5: "The discriminant is like peeking ahead to see how many solutions you'll find!"
            },
            area_perimeter: {
                analogy: "Building a fence around a garden",
                explanation: "Perimeter is the fence around the outside; area is the space inside you can plant",
                suitableFor: ['word_problems'],
                ELI5: "Imagine your garden: perimeter is walking around the edge, area is all the ground inside!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            line_parabola: {
                level1: "What is the simpler equation - the line or the parabola?",
                level2: "Solve the linear equation for y, then substitute into the quadratic",
                level3: "This will give you a quadratic equation in x only",
                level4: "Solve using factoring or quadratic formula, then find corresponding y-values"
            },
            line_circle: {
                level1: "Which equation is easier to solve for y?",
                level2: "Substitute the linear expression into the circle equation",
                level3: "Simplify to get a quadratic in one variable",
                level4: "Solve for x, then use linear equation to find y for each x"
            },
            two_circles: {
                level1: "What happens if you subtract one circle equation from the other?",
                level2: "Subtracting eliminates the x² and y² terms!",
                level3: "You get a linear equation - solve it for one variable",
                level4: "Substitute this into either circle to find the other variable"
            },
            two_parabolas: {
                level1: "Can you set the two equations equal to each other?",
                level2: "This gives you one equation in x",
                level3: "Solve for x, then substitute back to find y",
                level4: "Remember there might be multiple solutions!"
            },
            substitution_method: {
                level1: "Which equation is simpler to solve for one variable?",
                level2: "Solve that equation for x or y",
                level3: "Substitute this expression into the other equation",
                level4: "Solve the resulting equation, then back-substitute"
            },
            word_problems: {
                level1: "What are you trying to find? Define variables clearly.",
                level2: "Write one equation for each condition in the problem",
                level3: "Use substitution or elimination to solve the system",
                level4: "Check if your answer makes sense in the context"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Solve: y = x + 2 and y = x²",
                    type: "line-parabola",
                    answer: [{x: 2, y: 4}, {x: -1, y: 1}],
                    assesses: "basic_substitution",
                    difficulty: "basic"
                },
                {
                    question: "Solve: y = 0 and x² + y² = 9",
                    type: "line-circle",
                    answer: [{x: 3, y: 0}, {x: -3, y: 0}],
                    assesses: "simple_circle_intersection",
                    difficulty: "basic"
                },
                {
                    question: "Solve: y = x² and y = -x² + 4",
                    type: "two-parabolas",
                    answer: [{x: Math.sqrt(2), y: 2}, {x: -Math.sqrt(2), y: 2}],
                    assesses: "setting_equations_equal",
                    difficulty: "intermediate"
                },
                {
                    question: "Solve: x² + y² = 10 and x² + y² - 4x = 6",
                    type: "two-circles",
                    answer: "Tests elimination method",
                    assesses: "elimination_circles",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "To solve y = 2x and y = x² - 3, what should you do first?",
                    options: [
                        "Graph both equations",
                        "Substitute 2x for y in second equation",
                        "Square both sides",
                        "Add the equations"
                    ],
                    correct: "Substitute 2x for y in second equation",
                    explanation: "Substitution is most efficient since linear equation is already solved for y"
                },
                {
                    question: "How many solutions can a line-circle system have?",
                    options: ["0 or 1", "1 or 2", "0, 1, or 2", "Always 2"],
                    correct: "0, 1, or 2",
                    explanation: "Line can miss circle (0), be tangent (1), or cross through (2)"
                },
                {
                    question: "For two circles, what does subtracting equations eliminate?",
                    options: ["x terms", "y terms", "Both x² and y² terms", "Constant"],
                    correct: "Both x² and y² terms",
                    explanation: "Subtracting makes x² - x² = 0 and y² - y² = 0, leaving linear equation"
                }
            ],
            summative: [
                {
                    question: "Solve completely: y = 2x - 1 and x² + y² = 10",
                    requiresWork: true,
                    rubric: {
                        setup: 1,
                        substitution: 2,
                        solving_quadratic: 2,
                        both_solutions: 2,
                        verification: 1
                    }
                },
                {
                    question: "Two numbers sum to 8 and their product is 15. Find the numbers.",
                    requiresWork: true,
                    rubric: {
                        variable_definition: 1,
                        equation_setup: 2,
                        solving: 2,
                        interpretation: 1,
                        verification: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "y = x and y = x²",
                    "y = 0 and x² + y² = 16",
                    "y = 2x and y = x² - 2x",
                    "y = 4 and y = x²"
                ],
                medium: [
                    "y = x + 3 and y = x² - 2x",
                    "y = 2x - 1 and x² + y² = 5",
                    "y = x² and y = -x² + 6",
                    "x² + y² = 13 and x² + y² - 6x = 4"
                ],
                hard: [
                    "y = x² - 4x + 3 and x² + y² = 9",
                    "y = 2x² - 1 and y = -x² + 5",
                    "(x-1)² + (y-2)² = 5 and (x+1)² + (y-2)² = 5",
                    "Rectangle area 36, perimeter 26"
                ]
            },
            byObjective: {
                canSolveLineParabola: [
                    "y = x + 1 and y = x²",
                    "y = 2x and y = x² - 3",
                    "y = -x + 4 and y = x² - 2"
                ],
                canSolveLineCircle: [
                    "y = x and x² + y² = 8",
                    "y = 0 and x² + y² = 25",
                    "x = 3 and x² + y² = 18"
                ],
                canSolveTwoCircles: [
                    "x² + y² = 25 and (x-6)² + y² = 25",
                    "x² + y² = 10 and x² + y² - 4x = 6"
                ],
                canSolveWordProblems: [
                    "Two numbers sum to 10, product 21",
                    "Rectangle area 20, perimeter 18",
                    "Ball thrown from 5 ft at 40 ft/s, when hits ground?"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            methodSelection: {
                "Line + Quadratic": "Use substitution - solve linear for y, substitute",
                "Two circles": "Use elimination - subtract to get linear equation",
                "Two parabolas (same orientation)": "Set equal if both solved for y",
                "Complex system": "Analyze structure, try substitution first",
                "Word problem": "Define variables, write equations, then solve"
            },
            decisionTree: {
                "Is one equation linear?": {
                    yes: "Use substitution method",
                    no: "Check if quadratic terms can be eliminated"
                },
                "Can you eliminate x² and y² terms?": {
                    yes: "Use elimination (subtract equations)",
                    no: "Use substitution on simpler equation"
                },
                "Are curves easy to graph?": {
                    yes: "Consider graphical method for visualization",
                    no: "Stick with algebraic methods"
                }
            },
            solvingPriorities: [
                "1. Identify system type (linear-quadratic, quadratic-quadratic, etc.)",
                "2. Choose method (substitution usually best if one linear)",
                "3. Execute method carefully with algebra",
                "4. Solve resulting equation (quadratic formula if needed)",
                "5. Find all solution pairs",
                "6. Verify in both original equations"
            ],
            optimizationTips: {
                "Choose simpler equation": "Solve the linear or simpler equation first",
                "Check discriminant early": "Predict number of solutions before full solving",
                "Graph for insight": "Quick sketch helps visualize number and location of solutions",
                "Verify immediately": "Check solutions as you find them to catch errors early"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Line-Parabola Sprint",
                    timeLimit: 300,
                    problems: [
                        "y = x and y = x²",
                        "y = 2x and y = x² - 1",
                        "y = -x + 2 and y = x²",
                        "y = x + 3 and y = x² - x"
                    ]
                },
                {
                    name: "Circle Challenge",
                    timeLimit: 400,
                    problems: [
                        "y = 0 and x² + y² = 9",
                        "x = 4 and x² + y² = 25",
                        "y = x and x² + y² = 8"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Intersection",
                    problem: "A line and parabola intersect at (2, 5) and (?, ?). Line has slope 3.",
                    challenge: "Find the parabola equation and the other intersection point"
                },
                {
                    name: "Circle Design",
                    problem: "Two circles each have radius 5. Their centers are 6 units apart.",
                    challenge: "Find equations and intersection points"
                },
                {
                    name: "Optimal Rectangle",
                    problem: "Rectangle has area 50 sq ft and perimeter 30 ft",
                    challenge: "Find the dimensions. Is this a square? Why or why not?"
                }
            ],
            applications: [
                {
                    scenario: "Satellite Coverage",
                    problem: "Two satellites at (-10, 0) and (10, 0) each have range 15 km. Find overlap area.",
                    systems: "Two circles: (x+10)² + y² = 225 and (x-10)² + y² = 225"
                },
                {
                    scenario: "Projectile and Wall",
                    problem: "Ball follows y = -0.05x² + 2x. Wall is at y = 10. Where does ball hit wall?",
                    systems: "Parabola and horizontal line"
                },
                {
                    scenario: "Bridge Design",
                    problem: "Arch is y = -0.01x² + 10. Road is y = 2. Find width at road level.",
                    systems: "Parabola and horizontal line"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    problem: "Solve y = x + 2 and y = x²",
                    incorrectWork: [
                        "Substitute: x + 2 = x²",
                        "x² - x + 2 = 0",  // ERROR: should be x² - x - 2 = 0
                        "Using quadratic formula... (complex solutions)",
                        "No real solutions"
                    ],
                    correctAnswer: "x = 2 and x = -1",
                    errorType: "Sign error when rearranging"
                },
                {
                    name: "Find the Error #2",
                    problem: "Solve y = 2x and y = x² - 4",
                    incorrectWork: [
                        "2x = x² - 4",
                        "x² - 2x - 4 = 0",
                        "x = (2 ± √(4 + 16))/2 = (2 ± √20)/2",
                        "x ≈ 3.236",  // ERROR: forgot there are two x-values
                        "y = 2(3.236) = 6.472",
                        "Solution: (3.236, 6.472)"
                    ],
                    correctAnswer: "Two solutions needed",
                    errorType: "Forgot second solution from ±"
                }
            ]
        };
    }

    // MAIN SOLVER METHOD
    solveQuadraticSystemProblem(config) {
        const { equation1, equation2, scenario, parameters, problemType, context } = config;

        try {
            this.currentProblem = this.parseQuadraticSystemProblem(
                equation1, equation2, scenario, parameters, problemType, context
            );

            this.currentSolution = this.solveQuadraticSystemInternal(this.currentProblem);

            this.solutionSteps = this.generateQuadraticSystemSteps(
                this.currentProblem, this.currentSolution
            );

            this.generateQuadraticSystemGraphData();

            this.generateQuadraticSystemWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                solutions: this.currentSolution?.solutions,
                solutionType: this.currentSolution?.solutionType
            };

        } catch (error) {
            throw new Error(`Failed to solve quadratic system: ${error.message}`);
        }
    }

    parseQuadraticSystemProblem(equation1, equation2, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanEq1 = equation1 ? this.cleanMathExpression(equation1) : '';
        const cleanEq2 = equation2 ? this.cleanMathExpression(equation2) : '';

        if (problemType && this.quadraticSystemTypes[problemType]) {
            return {
                originalInput: { equation1, equation2 },
                cleanInput: { equation1: cleanEq1, equation2: cleanEq2 },
                type: problemType,
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect type
        for (const [type, config] of Object.entries(this.quadraticSystemTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanEq1) || pattern.test(cleanEq2) || pattern.test(scenario)) {
                    return {
                        originalInput: { equation1, equation2 },
                        cleanInput: { equation1: cleanEq1, equation2: cleanEq2 },
                        type: type,
                        scenario: scenario,
                        parameters: { ...parameters },
                        context: { ...context },
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        return {
            originalInput: { equation1, equation2 },
            cleanInput: { equation1: cleanEq1, equation2: cleanEq2 },
            type: 'general_quadratic_system',
            scenario: scenario,
            parameters: { ...parameters },
            context: { ...context },
            parsedAt: new Date().toISOString()
        };
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/\^/g, '**')
            .trim();
    }

    solveQuadraticSystemInternal(problem) {
        const solver = this.quadraticSystemTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver for type: ${problem.type}`);
        }
        return solver(problem);
    }

    // QUADRATIC SYSTEM SOLVERS

    solveLineParabola(problem) {
        return {
            systemType: 'Line-Parabola',
            method: 'Substitution',
            approach: 'Solve linear equation for y, substitute into parabola equation',
            category: 'linear_quadratic',
            expectedSolutions: '0, 1, or 2 solutions',
            solutions: [], // Would be calculated
            solutionType: 'Intersection points'
        };
    }

    solveLineCircle(problem) {
        return {
            systemType: 'Line-Circle',
            method: 'Substitution',
            approach: 'Substitute linear expression into circle equation',
            category: 'linear_quadratic',
            expectedSolutions: '0 (miss), 1 (tangent), or 2 (intersect) solutions',
            geometricMeaning: 'Points where line crosses circle',
            solutions: [],
            solutionType: 'Intersection points'
        };
    }

    solveTwoParabolas(problem) {
        return {
            systemType: 'Two Parabolas',
            method: 'Set equations equal or substitution',
            approach: 'If both solved for y, set equal; otherwise use substitution',
            category: 'quadratic_quadratic',
            expectedSolutions: '0, 1, 2, 3, or 4 solutions',
            solutions: [],
            solutionType: 'Intersection points'
        };
    }

    solveTwoCircles(problem) {
        return {
            systemType: 'Two Circles',
            method: 'Elimination by subtraction',
            approach: 'Subtract equations to eliminate x² and y² terms, get linear equation',
            category: 'quadratic_quadratic',
            expectedSolutions: '0 (separate), 1 (tangent), 2 (intersect), or infinite (same circle)',
            geometricMeaning: 'Points where circles intersect',
            solutions: [],
            solutionType: 'Intersection points'
        };
    }

    solveCircleParabola(problem) {
        return {
            systemType: 'Circle-Parabola',
            method: 'Substitution',
            approach: 'Solve parabola for y (or x), substitute into circle',
            category: 'quadratic_quadratic',
            expectedSolutions: '0, 1, 2, 3, or 4 solutions',
            complexity: 'May result in quartic equation',
            solutions: [],
            solutionType: 'Intersection points'
        };
    }

    solveBySubstitution(problem) {
        return {
            systemType: 'General System',
            method: 'Substitution Method',
            procedure: [
                'Solve simpler equation for one variable',
                'Substitute into other equation',
                'Solve resulting single-variable equation',
                'Back-substitute to find other coordinate',
                'Verify all solutions'
            ],
            category: 'method_based',
            solutions: [],
            solutionType: 'By substitution'
        };
    }

    solveByElimination(problem) {
        return {
            systemType: 'General System',
            method: 'Elimination Method',
            procedure: [
                'Arrange equations in standard form',
                'Add or subtract to eliminate a variable',
                'Solve resulting equation',
                'Back-substitute',
                'Verify'
            ],
            category: 'method_based',
            whenBest: 'When quadratic terms can be eliminated (e.g., two circles)',
            solutions: [],
            solutionType: 'By elimination'
        };
    }

    solveGraphically(problem) {
        return {
            systemType: 'General System',
            method: 'Graphical Method',
            procedure: [
                'Graph both equations',
                'Identify intersection points',
                'Read coordinates',
                'Verify algebraically'
            ],
            category: 'method_based',
            advantages: 'Visual understanding, see number of solutions',
            limitations: 'May not be exact',
            solutions: [],
            solutionType: 'From graph'
        };
    }

    solveWordAreaPerimeter(problem) {
        return {
            systemType: 'Area-Perimeter Word Problem',
            method: 'Set up system then solve',
            equations: ['Area: xy = A', 'Perimeter: 2x + 2y = P'],
            approach: 'Solve perimeter for y, substitute into area equation',
            category: 'word_problems',
            solutions: [],
            solutionType: 'Dimensions'
        };
    }

    solveWordProjectile(problem) {
        return {
            systemType: 'Projectile Motion',
            method: 'Substitute constraint into trajectory',
            equations: ['Height: y = -16t² + v₀t + h₀', 'Constraint: varies'],
            category: 'word_problems',
            solutions: [],
            solutionType: 'Time and position'
        };
    }

    solveWordNumber(problem) {
        return {
            systemType: 'Number Relationships',
            method: 'Set up sum and product equations',
            equations: ['Sum: x + y = S', 'Product: xy = P'],
            category: 'word_problems',
            solutions: [],
            solutionType: 'The two numbers'
        };
    }

    solveWordRevenue(problem) {
        return {
            systemType: 'Revenue/Profit Optimization',
            method: 'Set up revenue and cost/constraint equations',
            category: 'word_problems',
            solutions: [],
            solutionType: 'Optimal price and quantity'
        };
    }

    solveGeneralQuadraticSystem(problem) {
        return {
            systemType: 'General Quadratic System',
            method: 'Analyze then choose substitution or elimination',
            category: 'general',
            solutions: [],
            solutionType: 'Intersection points'
        };
    }

    // STEP GENERATION
    generateQuadraticSystemSteps(problem, solution) {
        let baseSteps = this.generateBaseQuadraticSystemSteps(problem, solution);

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

    generateBaseQuadraticSystemSteps(problem, solution) {
        const category = this.quadraticSystemTypes[problem.type]?.category;

        switch(category) {
            case 'linear_quadratic':
                return this.generateLinearQuadraticSteps(problem, solution);
            case 'quadratic_quadratic':
                return this.generateQuadraticQuadraticSteps(problem, solution);
            case 'word_problems':
                return this.generateWordProblemSteps(problem, solution);
            default:
                return this.generateGenericSystemSteps(problem, solution);
        }
    }

    generateLinearQuadraticSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given system',
            description: 'Start with the system of equations',
            expression: `${problem.cleanInput.equation1} and ${problem.cleanInput.equation2}`,
            reasoning: 'One equation is linear, one is quadratic',
            goalStatement: 'Find intersection points using substitution method'
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify method',
            description: 'Substitution is best for linear-quadratic systems',
            reasoning: 'Linear equation is easy to solve for one variable',
            methodChoice: 'Substitution'
        });

        steps.push({
            stepNumber: 3,
            step: 'Solve linear equation',
            description: 'Solve the linear equation for y (or x)',
            reasoning: 'This gives us an expression to substitute',
            algebraicRule: 'Isolation of variables'
        });

        steps.push({
            stepNumber: 4,
            step: 'Substitute',
            description: 'Substitute the expression into the quadratic equation',
            reasoning: 'This creates a single equation in one variable',
            warning: 'Use parentheses around entire expression'
        });

        steps.push({
            stepNumber: 5,
            step: 'Simplify and solve',
            description: 'Expand, combine like terms, and solve the quadratic',
            reasoning: 'Quadratic formula or factoring gives x-values',
            techniques: ['Expanding', 'Combining like terms', 'Quadratic formula']
        });

        steps.push({
            stepNumber: 6,
            step: 'Find y-values',
            description: 'Substitute each x-value back to find corresponding y',
            reasoning: 'Each x gives a y, forming solution pairs (x, y)',
            reminder: 'Find y for EACH x-value'
        });

        steps.push({
            stepNumber: 7,
            step: 'Verify solutions',
            description: 'Check each solution pair in both original equations',
            reasoning: 'Ensures solutions are correct and not extraneous',
            finalAnswer: true
        });

        return steps;
    }

    generateQuadraticQuadraticSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given system',
            description: 'System of two quadratic equations',
            expression: `${problem.cleanInput.equation1} and ${problem.cleanInput.equation2}`,
            reasoning: 'Both equations are quadratic',
            complexity: 'More complex than linear-quadratic'
        });

        steps.push({
            stepNumber: 2,
            step: 'Analyze structure',
            description: 'Determine if elimination or substitution is better',
            reasoning: 'For circles, elimination works well; otherwise substitution',
            decision: 'Method choice depends on equation forms'
        });

        if (problem.type === 'two_circles') {
            steps.push({
                stepNumber: 3,
                step: 'Subtract equations',
                description: 'Subtract one circle equation from the other',
                reasoning: 'This eliminates x² and y² terms, leaving linear equation',
                technique: 'Elimination by subtraction'
            });
        } else {
            steps.push({
                stepNumber: 3,
                step: 'Solve one equation',
                description: 'Solve one equation for a variable if possible',
                reasoning: 'Allows substitution into other equation',
                technique: 'Substitution preparation'
            });
        }

        steps.push({
            stepNumber: 4,
            step: 'Substitute or eliminate',
            description: 'Use chosen method to reduce to one variable',
            reasoning: 'Creates solvable equation in one variable'
        });

        steps.push({
            stepNumber: 5,
            step: 'Solve resulting equation',
            description: 'Solve the equation (may be quadratic or higher degree)',
            reasoning: 'Gives values for one variable',
            warning: 'May have multiple solutions'
        });

        steps.push({
            stepNumber: 6,
            step: 'Find other variable',
            description: 'Back-substitute to find corresponding values',
            reasoning: 'Completes all solution pairs'
        });

        steps.push({
            stepNumber: 7,
            step: 'Verify all solutions',
            description: 'Check every solution pair in both original equations',
            reasoning: 'Quadratic systems can have extraneous solutions',
            finalAnswer: true
        });

        return steps;
    }

    generateWordProblemSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Read and understand',
            description: 'Carefully read the problem and identify what is asked',
            reasoning: 'Understanding the problem is the first step',
            strategy: 'Highlight key information and what you need to find'
        });

        steps.push({
            stepNumber: 2,
            step: 'Define variables',
            description: 'Clearly define variables for unknowns',
            reasoning: 'Variables represent the quantities we want to find',
            example: 'Let x = length, y = width'
        });

        steps.push({
            stepNumber: 3,
            step: 'Write equations',
            description: 'Translate each condition into a mathematical equation',
            reasoning: 'Each constraint or relationship becomes an equation',
            technique: 'Word-to-math translation'
        });

        steps.push({
            stepNumber: 4,
            step: 'Solve the system',
            description: 'Use substitution or elimination to solve',
            reasoning: 'Standard algebraic techniques apply',
            referBack: 'Use methods from earlier lessons'
        });

        steps.push({
            stepNumber: 5,
            step: 'Interpret solutions',
            description: 'Relate algebraic solutions to the problem context',
            reasoning: 'Solutions must make sense in real-world context',
            checks: ['Positive values where needed', 'Correct units', 'Reasonable magnitude']
        });

        steps.push({
            stepNumber: 6,
            step: 'Answer the question',
            description: 'State the answer with proper units and context',
            reasoning: 'Complete answer addresses original question',
            finalAnswer: true
        });

        return steps;
    }

    generateGenericSystemSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Quadratic system',
            description: 'Solve the system of quadratic equations',
            expression: `${problem.cleanInput.equation1} and ${problem.cleanInput.equation2}`,
            reasoning: 'Apply appropriate quadratic system technique',
            method: solution.method
        }];
    }

    // ENHANCED EXPLANATION METHODS (similar structure to linear workbook)
    
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

    // Implement all helper methods similar to linear workbook...
    // (getConceptualExplanation, getProceduralExplanation, addELI5Explanations, etc.)

    getConceptualExplanation(step, problem) {
        const conceptualExplanations = {
            'Given system': 'A system of equations represents two relationships that must both be true. Solutions are points satisfying both.',
            'Identify method': 'Choosing the right method makes solving easier and less error-prone.',
            'Solve linear equation': 'Linear equations are easier to manipulate, so we use them first.',
            'Substitute': 'Substitution replaces one variable with an equivalent expression, reducing variables.',
            'Simplify and solve': 'After substitution, we have one equation in one variable that we can solve.',
            'Find y-values': 'Each x-value corresponds to a y-value on the curves.',
            'Verify solutions': 'Algebraic manipulations can introduce errors; verification confirms correctness.',
            'Subtract equations': 'Subtraction eliminates matching terms, simplifying the system.',
            'Read and understand': 'Word problems require translating English to math.',
            'Define variables': 'Clear variable definitions prevent confusion.',
            'Write equations': 'Each fact or constraint becomes an equation.',
            'Interpret solutions': 'Math solutions must make sense in the real world.'
        };

        return conceptualExplanations[step.step] || 'This step progresses toward finding the solution.';
    }

    getProceduralExplanation(step) {
        return `Execute the step: ${step.description}. Follow standard algebraic procedures.`;
    }

    getVisualExplanation(step, problem) {
        const visualExplanations = {
            'linear_quadratic': 'Visualize a line crossing a parabola or circle',
            'quadratic_quadratic': 'Two curves intersecting at multiple points',
            'Substitute': 'Replace y with the expression everywhere it appears',
            'Verify solutions': 'Plot points on both graphs to see if they lie on both curves'
        };

        const category = this.quadraticSystemTypes[problem.type]?.category;
        return visualExplanations[category] || visualExplanations[step.step] || 'Visualize the algebraic manipulation.';
    }

    getAlgebraicExplanation(step) {
        return step.algebraicRule || 'Apply standard algebraic principles.';
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
                'substitute': 'replace',
                'discriminant': 'formula part that tells number of solutions',
                'quadratic': 'squared equation',
                'coefficient': 'number with variable'
            },
            ELI5: {
                'substitute': 'swap out for',
                'quadratic': 'equation with x²',
                'solution': 'answer',
                'system': 'two equations together',
                'intersection': 'where the lines cross'
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
            'Given system': "We have two math sentences (equations) and need to find the answers that make both true at the same time!",
            'Substitute': "We're going to take what y equals from one equation and put it into the other equation everywhere we see y.",
            'Solve linear equation': "The simpler equation (straight line) is easier to work with, so we solve it first.",
            'Simplify and solve': "Now we have one equation with only x's. We can solve it like a puzzle!",
            'Find y-values': "For each x we found, we need to find its matching y, like finding pairs of socks!",
            'Verify solutions': "Let's check our answers to make sure they really work in both equations!"
        };

        return ELI5Explanations[step.step] || "We're solving our math puzzle one step at a time!";
    }

    findRelevantAnalogy(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(problem.type) || analogy.suitableFor.includes('all_systems')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of this like solving a puzzle - each step gets us closer to the answer!";
    }

    convertToSimpleLanguage(description) {
        const simplifications = {
            'substitute': 'replace',
            'equation': 'math sentence',
            'variable': 'letter (like x or y)',
            'solution': 'answer',
            'quadratic': 'equation with squared terms',
            'linear': 'straight line equation',
            'parabola': 'u-shaped curve',
            'circle': 'round shape',
            'intersection': 'where curves cross',
            'coefficient': 'number with the letter',
            'discriminant': 'special formula part',
            'verify': 'check',
            'simplify': 'make easier',
            'system': 'two equations together'
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
            'Given system': 'Draw both curves on the same graph',
            'Substitute': 'Show the expression being plugged in with different colors',
            'Solve linear equation': 'Isolate y on one side with arrows showing steps',
            'Simplify and solve': 'Show combining like terms with boxes around similar terms',
            'Find y-values': 'Draw arrows from x-values to their corresponding y-values',
            'Verify solutions': 'Plot the solution points and check they lie on both curves',
            'Subtract equations': 'Line up the equations vertically and show terms canceling'
        };

        return visualizations[step.step] || 'Draw a picture to represent this step';
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
        const category = this.quadraticSystemTypes[problemType]?.category || 'linear_quadratic';
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

    generateStepBridge(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.expression || 'progress made'}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary because we're working toward finding all intersection points`,
            howItHelps: `This brings us closer to the final solution`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue solving the system`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
    }

    generatePreventionTips(step, problemType) {
        const tips = {
            'Substitute': [
                'Use parentheses around entire expression',
                'Be careful with negative signs',
                'Don\'t forget to substitute in all occurrences'
            ],
            'Simplify and solve': [
                'Expand carefully, especially squared binomials',
                'Combine like terms before solving',
                'Check discriminant before using quadratic formula'
            ],
            'Find y-values': [
                'Find y for EACH x-value found',
                'Use the original linear equation for back-substitution',
                'Keep track of which y goes with which x'
            ],
            'Verify solutions': [
                'Check BOTH equations with each solution',
                'Watch for arithmetic errors',
                'Extraneous solutions can occur'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Check your work'];
    }

    generateCheckPoints(step) {
        return [
            'Did I perform the operation correctly?',
            'Are my algebraic manipulations accurate?',
            'Does this step move me toward the solution?',
            'Have I made any sign errors?'
        ];
    }

    identifyWarningFlags(step, problemType) {
        const warnings = {
            'Substitute': ['Watch parentheses when substituting', 'Don\'t lose negative signs'],
            'Simplify and solve': ['Quadratic formula requires careful arithmetic', 'Remember ± gives two solutions'],
            'Find y-values': ['Need y for each x - don\'t forget second solution'],
            'Subtract equations': ['Distribute negative sign to all terms']
        };

        return warnings[step.step] || [];
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'Given system': 'Do I understand what type of system this is?',
            'Substitute': 'Did I use parentheses around the entire expression?',
            'Simplify and solve': 'Did I correctly expand and combine like terms?',
            'Find y-values': 'Did I find y for every x-value?',
            'Verify solutions': 'Does each solution satisfy both original equations?'
        };

        return questions[step.step] || 'Does this step make sense?';
    }

    describeExpectedResult(step) {
        const expectations = {
            'Given system': 'Two equations clearly identified',
            'Substitute': 'One equation in one variable',
            'Simplify and solve': 'Values for x (could be 0, 1, or 2 values)',
            'Find y-values': 'Complete solution pairs (x, y)',
            'Verify solutions': 'Confirmation that solutions work'
        };

        return expectations[step.step] || 'Progress toward solution';
    }

    generateTroubleshootingTips(step) {
        return [
            'If stuck, review the previous step',
            'Check your algebra carefully',
            'Try a simpler similar problem first',
            'Draw a graph to visualize',
            'Ask: does this make geometric sense?'
        ];
    }

    generateGuidingQuestions(step, problem) {
        const questions = {
            'Given system': [
                'What type of system is this?',
                'What shapes do these equations represent?',
                'How many solutions might we expect?'
            ],
            'Identify method': [
                'Is one equation linear?',
                'Can I easily solve one equation for a variable?',
                'Would elimination work here?'
            ],
            'Substitute': [
                'What am I substituting for?',
                'Where does it go?',
                'Did I use parentheses?'
            ],
            'Simplify and solve': [
                'What do I need to expand?',
                'What terms can I combine?',
                'Is this equation solvable by factoring or do I need the quadratic formula?'
            ],
            'Find y-values': [
                'How many x-values did I find?',
                'Which equation should I use to find y?',
                'Did I find y for each x?'
            ]
        };

        return questions[step.step] || ['What is the goal?', 'How do I achieve it?'];
    }

    breakIntoSubSteps(step) {
        const subSteps = {
            'Substitute': [
                'Identify what to substitute',
                'Identify where to substitute it',
                'Put expression in parentheses',
                'Replace all occurrences',
                'Verify substitution is complete'
            ],
            'Simplify and solve': [
                'Expand all parentheses',
                'Collect all terms on one side',
                'Combine like terms',
                'Identify a, b, c for quadratic formula',
                'Calculate discriminant',
                'Apply quadratic formula or factor',
                'Simplify solutions'
            ],
            'Verify solutions': [
                'Take first solution pair',
                'Substitute into equation 1',
                'Check if both sides equal',
                'Substitute into equation 2',
                'Check if both sides equal',
                'Repeat for all solution pairs'
            ]
        };

        return subSteps[step.step] || ['Execute the step', 'Check the result'];
    }

    generateProgressiveHints(step, problem) {
        const category = this.quadraticSystemTypes[problem.type]?.category || 'linear_quadratic';
        const hintSet = this.hints[category] || this.hints.line_parabola;

        return {
            level1: hintSet.level1 || 'Think about what type of system this is.',
            level2: hintSet.level2 || 'Consider which method is most appropriate.',
            level3: hintSet.level3 || 'Execute the method step by step.',
            level4: hintSet.level4 || 'Solve and verify all solutions.'
        };
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try a similar system with different numbers',
            practiceHint: 'Start with simpler numbers to build confidence',
            extension: 'Once comfortable, try systems with fractions or radicals'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What do I see in this system?',
            goal: 'What am I trying to accomplish?',
            strategy: 'What method should I use?',
            execute: 'How do I carry out this method?',
            verify: 'Does my result make sense?'
        };
    }

    identifyDecisionPoints(step) {
        return [
            'Which method to use (substitution vs elimination)?',
            'Which equation to solve first?',
            'Which variable to solve for?',
            'How to verify solutions?'
        ];
    }

    suggestAlternativeMethods(step, problem) {
        const alternatives = {
            'Substitute': [
                'Could use elimination if equations allow',
                'Could graph to visualize solutions first'
            ],
            'Solve linear equation': [
                'Could solve for x instead of y',
                'Could rearrange differently if more convenient'
            ]
        };

        return alternatives[step.step] || ['The chosen method is appropriate'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by continuing the solution process`,
            progression: 'We are systematically reducing the system to find solutions',
            relationship: 'Each step simplifies the problem or gets us closer to the answer'
        };
    }

    identifyPrerequisites(step, problemType) {
        const category = this.quadraticSystemTypes[problemType]?.category || 'linear_quadratic';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Solving quadratic equations', 'Substitution method'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Given system': ['system', 'equations', 'linear', 'quadratic', 'intersection'],
            'Substitute': ['substitute', 'expression', 'variable', 'replace'],
            'Simplify and solve': ['expand', 'combine like terms', 'quadratic formula', 'discriminant'],
            'Find y-values': ['back-substitute', 'solution pair', 'coordinates'],
            'Verify solutions': ['verify', 'check', 'satisfy', 'extraneous']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPrompts(step) {
        return {
            before: 'Before starting, what do I need to identify or prepare?',
            during: 'As I work, what should I be careful about?',
            after: 'After completing, how can I check if this is correct?'
        };
    }

    findRealWorldConnection(step, problem) {
        const connections = {
            'linear_quadratic': 'Like finding where a straight road crosses a circular track or parabolic bridge',
            'quadratic_quadratic': 'Like finding where two circular orbits intersect, or two parabolic arches meet',
            'word_problems': 'Solving real problems about area, revenue, projectile motion, etc.'
        };

        const category = this.quadraticSystemTypes[problem.type]?.category;
        return connections[category] || 'Quadratic systems model many real-world intersection problems';
    }

    // GRAPH GENERATION
    generateQuadraticSystemGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;
        const category = this.quadraticSystemTypes[type]?.category;

        if (category) {
            this.graphData = this.generateSystemGraph(this.currentProblem, this.currentSolution);
        }
    }

    generateSystemGraph(problem, solution) {
        return {
            type: 'quadratic_system',
            curve1: this.describeCurve(problem.cleanInput.equation1),
            curve2: this.describeCurve(problem.cleanInput.equation2),
            solutionPoints: solution.solutions || [],
            description: `Solutions are intersection points of the two curves`,
            graphType: 'two_curve_intersection',
            visualization: 'Graph both equations and mark intersection points'
        };
    }

    describeCurve(equation) {
        if (/x\^2.*y\^2/.test(equation)) {
            return { type: 'circle', equation: equation };
        } else if (/x\^2/.test(equation) || /y\^2/.test(equation)) {
            return { type: 'parabola', equation: equation };
        } else {
            return { type: 'line', equation: equation };
        }
    }

    // WORKBOOK GENERATION
    generateQuadraticSystemWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createEnhancedStepsSection(),
            this.createQuadraticSystemLessonSection(),
            this.createSolutionSection(),
            this.createAnalysisSection(),
            this.createVerificationSection(),
            this.createGeometricInterpretationSection(),
            this.createRealWorldApplicationSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection(),
            this.createPracticeProblemsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Systems with Quadratics Mathematical Workbook',
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
            ['System Type', this.quadraticSystemTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.quadraticSystemTypes[this.currentProblem.type]?.category || 'quadratic_system'],
            ['Equation 1', this.currentProblem.cleanInput.equation1],
            ['Equation 2', this.currentProblem.cleanInput.equation2],
            ['Description', this.currentProblem.scenario || 'System of quadratic equations'],
            ['', ''],
            ['Expected Solutions', this.quadraticSystemTypes[this.currentProblem.type]?.expectedSolutions || 'Varies']
        ];

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSection() {
        if (!this.prerequisiteChecks) return null;

        const category = this.quadraticSystemTypes[this.currentProblem.type]?.category;
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

            if (step.methodChoice) {
                stepsData.push(['Method', step.methodChoice]);
            }

            if (step.warning) {
                stepsData.push(['⚠️ Warning', step.warning]);
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

    createQuadraticSystemLessonSection() {
        const { type } = this.currentProblem;
        const category = this.quadraticSystemTypes[type]?.category;

        const lessonData = [
            ['Key Concepts', ''],
            ['', 'Systems of quadratic equations represent intersections of curves'],
            ['', 'Solutions are points where both equations are satisfied'],
            ['', 'Number of solutions depends on how curves intersect'],
            ['', 'Use substitution for linear-quadratic systems'],
            ['', 'Use elimination when quadratic terms cancel'],
            ['', ''],
            ['Geometric Interpretation', ''],
            ['', 'Solutions are intersection points of the graphs'],
            ['', 'No solution means curves don\'t intersect'],
            ['', 'One solution often means curves are tangent'],
            ['', 'Two or more solutions mean curves cross multiple times']
        ];

        return {
            title: 'Key Concepts',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [
            ['Solution Method', this.currentSolution.method || 'Standard approach'],
            ['System Type', this.currentSolution.systemType || 'Quadratic system']
        ];

        if (this.currentSolution.solutions && this.currentSolution.solutions.length > 0) {
            solutionData.push(['', '']);
            solutionData.push(['Solutions', '']);
            this.currentSolution.solutions.forEach((sol, index) => {
                solutionData.push([`Solution ${index + 1}`, `(${sol.x}, ${sol.y})`]);
            });
        } else if (this.currentSolution.solutionType) {
            solutionData.push(['Solution Type', this.currentSolution.solutionType]);
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
            ['System Type', this.currentSolution.systemType || 'Quadratic'],
            ['Solution Method', this.currentSolution.method || 'Standard'],
            ['Category', this.quadraticSystemTypes[this.currentProblem.type]?.category],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Difficulty Level', this.explanationLevel]
        ];

        if (this.currentSolution.approach) {
            analysisData.push(['Approach', this.currentSolution.approach]);
        }

        if (this.currentSolution.expectedSolutions) {
            analysisData.push(['Expected Solutions', this.currentSolution.expectedSolutions]);
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSection() {
        if (!this.currentSolution) return null;

        const verificationData = [
            ['Verification Method', 'Substitution into both original equations'],
            ['', '']
        ];

        if (this.currentSolution.solutions && this.currentSolution.solutions.length > 0) {
            this.currentSolution.solutions.forEach((sol, index) => {
                verificationData.push([`Solution ${index + 1}`, `(${sol.x}, ${sol.y})`]);
                verificationData.push(['Check Equation 1', 'Substitute and verify']);
                verificationData.push(['Check Equation 2', 'Substitute and verify']);
                verificationData.push(['', '']);
            });
        } else {
            verificationData.push(['Note', 'No solutions to verify or verification not applicable']);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createGeometricInterpretationSection() {
        const geoData = [
            ['Geometric Meaning', ''],
            ['', 'Solutions represent intersection points of two curves'],
            ['', ''],
            ['Curve 1', this.describeCurve(this.currentProblem.cleanInput.equation1).type],
            ['Curve 2', this.describeCurve(this.currentProblem.cleanInput.equation2).type],
            ['', ''],
            ['Interpretation', this.getGeometricInterpretation(this.currentProblem.type)]
        ];

        return {
            title: 'Geometric Interpretation',
            type: 'geometric',
            data: geoData
        };
    }

    getGeometricInterpretation(problemType) {
        const interpretations = {
            'line_parabola': 'A straight line crossing a parabola (U-shaped curve)',
            'line_circle': 'A straight line intersecting a circle',
            'two_parabolas': 'Two parabolas (U-shaped curves) intersecting',
            'two_circles': 'Two circles overlapping or touching',
            'circle_parabola': 'A circle and a parabola intersecting'
        };

        return interpretations[problemType] || 'Two curves intersecting in the coordinate plane';
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

        const notes = this.generateQuadraticSystemPedagogicalNotes(this.currentProblem.type);

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

    generateQuadraticSystemPedagogicalNotes(problemType) {
        const category = this.quadraticSystemTypes[problemType]?.category;

        const pedagogicalDatabase = {
            linear_quadratic: {
                objectives: [
                    'Solve linear-quadratic systems using substitution',
                    'Understand intersection of line and curve',
                    'Interpret solutions geometrically'
                ],
                keyConcepts: [
                    'Substitution method for systems',
                    'Quadratic formula application',
                    'Geometric meaning of solutions',
                    'Discriminant predicts number of solutions'
                ],
                prerequisites: [
                    'Solving linear equations',
                    'Solving quadratic equations',
                    'Quadratic formula',
                    'Graphing lines and parabolas/circles'
                ],
                commonDifficulties: [
                    'Forgetting to find y for both x-values',
                    'Parentheses errors when substituting',
                    'Arithmetic errors in quadratic formula',
                    'Not verifying solutions'
                ],
                teachingStrategies: [
                    'Always graph first for visualization',
                    'Emphasize need for parentheses in substitution',
                    'Practice quadratic formula separately',
                    'Use color coding for substitution steps'
                ],
                extensions: [
                    'Quadratic-quadratic systems',
                    'Systems with three equations',
                    'Applied word problems'
                ],
                assessment: [
                    'Can student choose appropriate method?',
                    'Does student find all solutions?',
                    'Can student verify solutions?',
                    'Can student interpret geometrically?'
                ]
            },
            quadratic_quadratic: {
                objectives: [
                    'Solve systems of two quadratic equations',
                    'Use elimination when appropriate',
                    'Handle multiple solutions systematically'
                ],
                keyConcepts: [
                    'Elimination for circle-circle systems',
                    'Substitution for complex systems',
                    'Multiple intersection points',
                    'Special cases (tangency, no intersection)'
                ],
                prerequisites: [
                    'All linear-quadratic skills',
                    'Circle equations and properties',
                    'Advanced algebraic manipulation',
                    'Completing the square'
                ],
                commonDifficulties: [
                    'Complex algebra when substituting',
                    'Losing solutions in multi-step process',
                    'Sign errors in elimination',
                    'Not recognizing special cases'
                ],
                teachingStrategies: [
                    'Teach circle-circle systems first (elimination is clearer)',
                    'Use graphing technology to visualize',
                    'Break complex problems into manageable steps',
                    'Emphasize systematic organization'
                ],
                extensions: [
                    'Systems with ellipses or hyperbolas',
                    'Three-dimensional analogs',
                    'Optimization problems'
                ],
                assessment: [
                    'Can student choose efficient method?',
                    'Does student handle all solutions?',
                    'Can student work with complex algebra?',
                    'Can student recognize geometric relationships?'
                ]
            },
            word_problems: {
                objectives: [
                    'Translate word problems to systems',
                    'Set up appropriate equations',
                    'Interpret solutions in context'
                ],
                keyConcepts: [
                    'Variable definition',
                    'Equation setup from constraints',
                    'Solution interpretation',
                    'Reasonableness checks'
                ],
                prerequisites: [
                    'All system-solving skills',
                    'Reading comprehension',
                    'Unit analysis',
                    'Contextual understanding'
                ],
                commonDifficulties: [
                    'Incorrect equation setup',
                    'Wrong variable definitions',
                    'Not checking if solutions make sense',
                    'Unit errors'
                ],
                teachingStrategies: [
                    'Teach systematic problem-solving process',
                    'Use graphic organizers for setup',
                    'Emphasize verification in context',
                    'Start with simpler number problems'
                ],
                extensions: [
                    'Multi-constraint optimization',
                    'Real-world modeling projects',
                    'Cross-curricular applications'
                ],
                assessment: [
                    'Can student set up equations correctly?',
                    'Does student interpret solutions properly?',
                    'Can student check reasonableness?',
                    'Can student communicate solution clearly?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Solve quadratic systems'],
            keyConcepts: ['System solving techniques'],
            prerequisites: ['Quadratic equations'],
            commonDifficulties: ['Complex algebra'],
            teachingStrategies: ['Step-by-step instruction'],
            extensions: ['More complex systems'],
            assessment: ['Verify understanding']
        };
    }

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const alternatives = this.generateQuadraticSystemAlternativeMethods(this.currentProblem.type);

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

    generateQuadraticSystemAlternativeMethods(problemType) {
        const category = this.quadraticSystemTypes[problemType]?.category;

        const alternativeDatabase = {
            linear_quadratic: {
                primaryMethod: 'Substitution',
                methods: [
                    {
                        name: 'Graphical Method',
                        description: 'Graph both equations and identify intersection points visually'
                    },
                    {
                        name: 'Technology-Assisted',
                        description: 'Use graphing calculator or computer algebra system'
                    },
                    {
                        name: 'Elimination (special cases)',
                        description: 'If linear equation can eliminate a quadratic term'
                    }
                ],
                comparison: 'Substitution is most systematic; graphical provides visualization; technology fastest for verification'
            },
            quadratic_quadratic: {
                primaryMethod: 'Substitution or Elimination (depends on structure)',
                methods: [
                    {
                        name: 'Elimination Method',
                        description: 'Best for circle-circle systems where x² and y² cancel'
                    },
                    {
                        name: 'Substitution Method',
                        description: 'General approach when elimination doesn\'t simplify'
                    },
                    {
                        name: 'Graphical Analysis',
                        description: 'Graph to predict number and location of solutions'
                    },
                    {
                        name: 'Parametric Approach',
                        description: 'Advanced technique using parameters for certain curve types'
                    }
                ],
                comparison: 'Choose elimination for circles; substitution for mixed types; graphing for insight and verification'
            },
            word_problems: {
                primaryMethod: 'Setup equations then solve algebraically',
                methods: [
                    {
                        name: 'Algebraic Setup',
                        description: 'Standard approach: define variables, write equations, solve'
                    },
                    {
                        name: 'Graphical Modeling',
                        description: 'Graph the constraint curves and find intersections'
                    },
                    {
                        name: 'Numerical Methods',
                        description: 'Approximate solutions using iterative techniques'
                    },
                    {
                        name: 'Guess and Check (simple problems)',
                        description: 'For problems with integer solutions, systematic testing'
                    }
                ],
                comparison: 'Algebraic is most reliable; graphical aids understanding; numerical useful for complex cases'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard algebraic approach',
            methods: [{
                name: 'Alternative approach',
                description: 'Other methods depending on problem structure'
            }],
            comparison: 'Choose method based on equation types and personal preference'
        };
    }

    createPracticeProblemsSection() {
        const category = this.quadraticSystemTypes[this.currentProblem.type]?.category;
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
}

// Export the class
export default EnhancedQuadraticSystemsMathematicalWorkbook;

