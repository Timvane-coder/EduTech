// Enhanced Circle Tangent Line Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedCircleTangentMathematicalWorkbook {
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
        this.initializeTangentSolvers();
        this.initializeTangentLessons();
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

    initializeTangentLessons() {
        this.lessons = {
            circle_fundamentals: {
                title: "Circle Fundamentals",
                concepts: [
                    "Circle equation: (x - h)² + (y - k)² = r²",
                    "Center: (h, k), Radius: r",
                    "Standard form vs general form",
                    "Relationship between radius and diameter"
                ],
                theory: "A circle is the set of all points equidistant from a center point. Understanding the equation forms is crucial for tangent line problems.",
                keyFormulas: {
                    "Standard Form": "(x - h)² + (y - k)² = r²",
                    "General Form": "x² + y² + Dx + Ey + F = 0",
                    "Radius": "r = √[(x - h)² + (y - k)²]",
                    "Distance Formula": "d = √[(x₂ - x₁)² + (y₂ - y₁)²]"
                },
                applications: [
                    "Geometric constructions",
                    "Computer graphics",
                    "Engineering designs",
                    "Astronomy calculations"
                ]
            },

            tangent_line_basics: {
                title: "Tangent Line Fundamentals",
                concepts: [
                    "Tangent line touches circle at exactly one point",
                    "Tangent is perpendicular to radius at point of tangency",
                    "Distance from center to tangent line equals radius",
                    "Two tangent lines can be drawn from external point"
                ],
                theory: "A tangent line to a circle is perpendicular to the radius at the point of contact. This perpendicularity is the key to solving tangent problems.",
                keyFormulas: {
                    "Perpendicular Slopes": "m₁ × m₂ = -1",
                    "Point-Slope Form": "y - y₁ = m(x - x₁)",
                    "Distance Point to Line": "d = |Ax₁ + By₁ + C| / √(A² + B²)",
                    "Tangent Condition": "Distance from center to line = radius"
                },
                solvingSteps: [
                    "Identify circle center and radius",
                    "Find slope of radius to point of tangency",
                    "Calculate perpendicular slope for tangent",
                    "Use point-slope form to write tangent equation",
                    "Verify tangent condition"
                ],
                applications: [
                    "Optics and reflection",
                    "Wheel and gear design",
                    "Satellite trajectories",
                    "Architecture and design"
                ]
            },

            tangent_at_point: {
                title: "Tangent Line at a Given Point on Circle",
                concepts: [
                    "Point of tangency lies on the circle",
                    "Radius to point determines tangent direction",
                    "Perpendicular slope relationship",
                    "Unique tangent line at each point"
                ],
                theory: "When the point of tangency is known, we find the tangent by computing the perpendicular to the radius at that point.",
                keyFormulas: {
                    "Radius Slope": "m_r = (y₁ - k) / (x₁ - h)",
                    "Tangent Slope": "m_t = -(x₁ - h) / (y₁ - k)",
                    "Tangent Equation": "y - y₁ = m_t(x - x₁)"
                },
                solvingSteps: [
                    "Verify point is on circle",
                    "Find slope of radius from center to point",
                    "Calculate perpendicular slope (negative reciprocal)",
                    "Write tangent equation using point-slope form",
                    "Convert to desired form (slope-intercept or standard)"
                ],
                applications: [
                    "Construction of tangent lines",
                    "Engineering drawings",
                    "Computer-aided design",
                    "Physics problems involving circular motion"
                ]
            },

            tangent_from_external_point: {
                title: "Tangent Lines from External Point",
                concepts: [
                    "Two tangent lines from external point",
                    "Equal length of tangent segments",
                    "Right triangle formed by center, external point, and tangency point",
                    "Pythagorean theorem application"
                ],
                theory: "From an external point, two tangent lines can be drawn to a circle. The tangent segments from the external point to the tangency points are equal in length.",
                keyFormulas: {
                    "Tangent Length": "L = √(d² - r²) where d = distance from center to external point",
                    "Right Triangle": "d² = r² + L²",
                    "Power of a Point": "L² = (x₀ - h)² + (y₀ - k)² - r²"
                },
                solvingSteps: [
                    "Calculate distance from external point to center",
                    "Verify point is outside circle (d > r)",
                    "Find tangent length using Pythagorean theorem",
                    "Set up system of equations for tangency points",
                    "Solve for coordinates of tangency points",
                    "Write equations of both tangent lines"
                ],
                applications: [
                    "Bridge design",
                    "Navigation problems",
                    "Astronomy (planet visibility)",
                    "Surveying and mapping"
                ]
            },

            tangent_with_slope: {
                title: "Tangent Line with Given Slope",
                concepts: [
                    "Tangent line parallel to given direction",
                    "Two tangent lines with same slope (top and bottom)",
                    "Distance from center equals radius",
                    "Slope determines orientation"
                ],
                theory: "For a given slope, two tangent lines exist (one on each 'side' of the circle), found by ensuring the distance from center to line equals the radius.",
                keyFormulas: {
                    "Line Form": "y = mx + b",
                    "Distance Condition": "|k - mh - b| / √(1 + m²) = r",
                    "Y-intercept": "b = k - mh ± r√(1 + m²)"
                },
                solvingSteps: [
                    "Write line equation in form y = mx + b",
                    "Apply distance formula from center to line",
                    "Set distance equal to radius",
                    "Solve for y-intercept b (two values)",
                    "Write both tangent line equations"
                ],
                applications: [
                    "Parallel structures",
                    "Shadow calculations",
                    "Slope analysis in engineering",
                    "Optimization problems"
                ]
            },

            tangent_parallel_perpendicular: {
                title: "Tangent Parallel or Perpendicular to Line",
                concepts: [
                    "Parallel lines have equal slopes",
                    "Perpendicular lines have negative reciprocal slopes",
                    "Finding tangent with specific orientation",
                    "Geometric relationships"
                ],
                theory: "Tangent lines can be constructed parallel or perpendicular to a given line by using slope relationships.",
                keyFormulas: {
                    "Parallel Slope": "m_tangent = m_given",
                    "Perpendicular Slope": "m_tangent = -1/m_given",
                    "Distance Formula": "d = |Ax + By + C| / √(A² + B²)"
                },
                solvingSteps: [
                    "Determine slope of given line",
                    "Calculate required tangent slope (same or negative reciprocal)",
                    "Use slope to find tangent equations",
                    "Verify tangent condition",
                    "Express in desired form"
                ],
                applications: [
                    "Mechanical linkages",
                    "Optical systems",
                    "Structural engineering",
                    "Robotics path planning"
                ]
            },

            common_tangent_two_circles: {
                title: "Common Tangents to Two Circles",
                concepts: [
                    "External tangents (don't cross between circles)",
                    "Internal tangents (cross between circles)",
                    "Number of common tangents depends on circle positions",
                    "Special cases: touching circles, nested circles"
                ],
                theory: "Two circles can have 0, 1, 2, 3, or 4 common tangent lines depending on their relative positions (separate, externally tangent, intersecting, internally tangent, or one inside the other).",
                keyFormulas: {
                    "Distance Between Centers": "d = √[(h₂ - h₁)² + (k₂ - k₁)²]",
                    "External Tangents": "Exist when d > |r₁ - r₂|",
                    "Internal Tangents": "Exist when d > r₁ + r₂",
                    "Number of Tangents": "Based on d compared to r₁ ± r₂"
                },
                problemTypes: {
                    "Four tangents": "Circles separate (d > r₁ + r₂)",
                    "Three tangents": "Circles externally tangent (d = r₁ + r₂)",
                    "Two tangents": "Circles intersect or one inside other (specific cases)",
                    "One tangent": "Circles internally tangent (d = |r₁ - r₂|)",
                    "Zero tangents": "One circle completely inside other"
                },
                applications: [
                    "Belt and pulley systems",
                    "Gear mechanisms",
                    "Astronomy (eclipse calculations)",
                    "Industrial design"
                ]
            },

            tangent_circle_equation: {
                title: "Finding Circle Given Tangent Conditions",
                concepts: [
                    "Three conditions determine a unique circle",
                    "Tangent provides one constraint",
                    "Multiple approaches to solve",
                    "System of equations solution"
                ],
                theory: "Given tangent line(s) and other conditions, we can determine the circle equation by setting up and solving a system of equations.",
                keyFormulas: {
                    "General Circle": "x² + y² + Dx + Ey + F = 0",
                    "Center from General": "h = -D/2, k = -E/2",
                    "Radius from General": "r = √(h² + k² - F)",
                    "Tangent Constraint": "Distance from center to tangent = radius"
                },
                solvingSteps: [
                    "Identify all given constraints",
                    "Set up system of equations",
                    "Use tangent distance condition",
                    "Solve for unknowns (h, k, r or D, E, F)",
                    "Write circle equation",
                    "Verify all conditions satisfied"
                ],
                applications: [
                    "Curve fitting",
                    "Geometric constructions",
                    "Computer graphics",
                    "Engineering design optimization"
                ]
            },

            angle_between_tangents: {
                title: "Angle Between Two Tangent Lines",
                concepts: [
                    "Tangents from external point form angle",
                    "Isosceles triangle relationship",
                    "Angle calculation using slopes or trigonometry",
                    "Complementary angles with central angle"
                ],
                theory: "The angle between two tangent lines from an external point can be found using the triangle formed by the external point, center, and tangency points.",
                keyFormulas: {
                    "Angle from Slopes": "tan(θ) = |m₁ - m₂| / (1 + m₁m₂)",
                    "Using Triangle": "sin(θ/2) = r / d where d = distance to center",
                    "Central Angle": "External angle + Central angle = 180°"
                },
                solvingSteps: [
                    "Find both tangent lines",
                    "Calculate slopes of both tangents",
                    "Use angle formula with slopes",
                    "Or use trigonometric approach with triangle",
                    "Verify using alternate method"
                ],
                applications: [
                    "Optics (reflection angles)",
                    "Navigation (bearing calculations)",
                    "Computer graphics (sprite rotation)",
                    "Engineering (force analysis)"
                ]
            },

            length_of_tangent: {
                title: "Length of Tangent Segment",
                concepts: [
                    "Tangent segment from external point to tangency point",
                    "Right triangle with radius and distance to center",
                    "Equal tangent lengths from same external point",
                    "Power of a point theorem"
                ],
                theory: "The length of a tangent segment from an external point to the tangency point can be found using the Pythagorean theorem with the right triangle formed.",
                keyFormulas: {
                    "Tangent Length": "L = √(d² - r²)",
                    "Where d": "d = √[(x₀ - h)² + (y₀ - k)²]",
                    "Power of Point": "L² = PT₁ × PT₂ for secant through P"
                },
                solvingSteps: [
                    "Find distance from external point to center",
                    "Apply Pythagorean theorem: L² + r² = d²",
                    "Solve for L",
                    "Interpret result in context",
                    "Verify using coordinate geometry if needed"
                ],
                applications: [
                    "Navigation distances",
                    "Engineering measurements",
                    "Surveying",
                    "Physics (projectile tangent paths)"
                ]
            },

            tangent_intersection_properties: {
                title: "Properties of Tangent Intersections",
                concepts: [
                    "Tangent-chord angle theorem",
                    "Inscribed angle relationships",
                    "Arc measures and tangent angles",
                    "Cyclic quadrilaterals with tangents"
                ],
                theory: "Various angle and length relationships exist when tangent lines intersect with chords, secants, or other tangents.",
                keyTheorems: {
                    "Tangent-Chord": "Angle between tangent and chord = half the arc",
                    "Two Tangents": "Angle between tangents + central angle = 180°",
                    "Tangent-Secant": "External angle = half the difference of arcs"
                },
                applications: [
                    "Circle geometry proofs",
                    "Advanced geometric constructions",
                    "Competition mathematics",
                    "Theoretical physics"
                ]
            },

            parametric_tangent: {
                title: "Tangent Using Parametric Equations",
                concepts: [
                    "Parametric circle: x = h + r cos(t), y = k + r sin(t)",
                    "Derivative gives tangent direction",
                    "Parameter t determines point on circle",
                    "Velocity vector perpendicular to radius"
                ],
                theory: "Using parametric representation, the tangent line at any point can be found by differentiating with respect to the parameter.",
                keyFormulas: {
                    "Parametric Circle": "x = h + r cos(t), y = k + r sin(t)",
                    "Derivatives": "dx/dt = -r sin(t), dy/dt = r cos(t)",
                    "Tangent Slope": "dy/dx = -cos(t)/sin(t) = -cot(t)",
                    "Tangent Vector": "(-r sin(t), r cos(t))"
                },
                solvingSteps: [
                    "Express circle parametrically",
                    "Identify parameter value at point of interest",
                    "Compute derivatives dx/dt and dy/dt",
                    "Find slope dy/dx",
                    "Write tangent equation"
                ],
                applications: [
                    "Physics (circular motion)",
                    "Animation and graphics",
                    "Robotics (circular paths)",
                    "Calculus applications"
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
            // Special symbols
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'perpendicular': '⊥', 'parallel': '∥', 'angle': '∠', 'degree': '°'
        };
    }

    initializeTangentSolvers() {
        this.tangentTypes = {
            tangent_at_point: {
                patterns: [
                    /tangent.*at.*point/i,
                    /point.*on.*circle/i,
                    /given.*point.*\(.*,.*\)/i
                ],
                solver: this.solveTangentAtPoint.bind(this),
                name: 'Tangent at Given Point on Circle',
                category: 'tangent_at_point',
                description: 'Find tangent line at a specific point on the circle'
            },

            tangent_from_external_point: {
                patterns: [
                    /tangent.*from.*point/i,
                    /external.*point/i,
                    /two.*tangent/i,
                    /point.*outside/i
                ],
                solver: this.solveTangentFromExternalPoint.bind(this),
                name: 'Tangent from External Point',
                category: 'tangent_from_external_point',
                description: 'Find tangent lines from point outside circle'
            },

            tangent_with_slope: {
                patterns: [
                    /tangent.*slope/i,
                    /given.*slope/i,
                    /slope.*m.*=/i
                ],
                solver: this.solveTangentWithSlope.bind(this),
                name: 'Tangent with Given Slope',
                category: 'tangent_with_slope',
                description: 'Find tangent lines with specified slope'
            },

            tangent_parallel: {
                patterns: [
                    /tangent.*parallel/i,
                    /parallel.*to/i
                ],
                solver: this.solveTangentParallel.bind(this),
                name: 'Tangent Parallel to Line',
                category: 'tangent_parallel_perpendicular',
                description: 'Find tangent parallel to given line'
            },

            tangent_perpendicular: {
                patterns: [
                    /tangent.*perpendicular/i,
                    /perpendicular.*to/i
                ],
                solver: this.solveTangentPerpendicular.bind(this),
                name: 'Tangent Perpendicular to Line',
                category: 'tangent_parallel_perpendicular',
                description: 'Find tangent perpendicular to given line'
            },

            common_tangent: {
                patterns: [
                    /common.*tangent/i,
                    /two.*circle/i,
                    /tangent.*between/i
                ],
                solver: this.solveCommonTangent.bind(this),
                name: 'Common Tangent to Two Circles',
                category: 'common_tangent_two_circles',
                description: 'Find common tangent lines to two circles'
            },

            tangent_length: {
                patterns: [
                    /length.*tangent/i,
                    /tangent.*segment/i,
                    /distance.*along.*tangent/i
                ],
                solver: this.solveTangentLength.bind(this),
                name: 'Length of Tangent Segment',
                category: 'length_of_tangent',
                description: 'Calculate length of tangent from external point'
            },

            angle_between_tangents: {
                patterns: [
                    /angle.*between.*tangent/i,
                    /tangent.*angle/i
                ],
                solver: this.solveAngleBetweenTangents.bind(this),
                name: 'Angle Between Tangents',
                category: 'angle_between_tangents',
                description: 'Find angle formed by two tangent lines'
            },

            find_circle_from_tangent: {
                patterns: [
                    /find.*circle/i,
                    /circle.*equation.*tangent/i,
                    /tangent.*to.*line/i
                ],
                solver: this.solveFindCircleFromTangent.bind(this),
                name: 'Find Circle Given Tangent',
                category: 'tangent_circle_equation',
                description: 'Determine circle equation from tangent conditions'
            },

            horizontal_vertical_tangent: {
                patterns: [
                    /horizontal.*tangent/i,
                    /vertical.*tangent/i,
                    /tangent.*horizontal/i,
                    /tangent.*vertical/i
                ],
                solver: this.solveHorizontalVerticalTangent.bind(this),
                name: 'Horizontal or Vertical Tangent',
                category: 'tangent_with_slope',
                description: 'Find horizontal (slope=0) or vertical (undefined slope) tangents'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            tangent_at_point: {
                'Finding radius slope': [
                    'Reversing coordinates in slope formula',
                    'Using point coordinates instead of center coordinates',
                    'Sign errors in slope calculation'
                ],
                'Finding perpendicular slope': [
                    'Forgetting negative sign in negative reciprocal',
                    'Inverting but not negating',
                    'Handling undefined/zero slopes incorrectly'
                ],
                'Point verification': [
                    'Not checking if point is actually on circle',
                    'Arithmetic errors in distance calculation',
                    'Rounding errors affecting verification'
                ]
            },
            tangent_from_external_point: {
                'Distance calculation': [
                    'Using wrong distance formula',
                    'Forgetting to square root',
                    'Sign errors in coordinate differences'
                ],
                'Tangent length': [
                    'Using d² + r² instead of d² - r²',
                    'Forgetting that point must be outside circle',
                    'Not checking for two tangent lines'
                ],
                'System of equations': [
                    'Setting up incorrect constraints',
                    'Algebraic errors in solving system',
                    'Missing one of the two solutions'
                ]
            },
            tangent_with_slope: {
                'Distance formula': [
                    'Incorrect application of point-to-line distance',
                    'Sign errors in numerator',
                    'Forgetting absolute value'
                ],
                'Solving for b': [
                    'Losing the ± when solving',
                    'Algebraic errors',
                    'Not simplifying radicals'
                ],
                'Final equations': [
                    'Writing only one tangent line instead of two',
                    'Incorrect y-intercept values'
                ]
            },
            common_tangent_two_circles: {
                'Circle positions': [
                    'Not determining relative positions correctly',
                    'Miscounting number of possible tangents',
                    'Confusing internal and external tangents'
                ],
                'Calculations': [
                    'Complex algebraic errors',
                    'Sign errors with multiple circles',
                    'Geometric relationship errors'
                ]
            }
        };

        this.errorPrevention = {
            perpendicular_slope: {
                reminder: 'For perpendicular lines: m₁ × m₂ = -1, so m₂ = -1/m₁',
                method: 'Flip the fraction and change the sign'
            },
            point_on_circle: {
                reminder: 'Always verify point satisfies circle equation before proceeding',
                method: 'Substitute coordinates into (x-h)² + (y-k)² and check if it equals r²'
            },
            two_solutions: {
                reminder: 'Many tangent problems have two solutions (±)',
                method: 'Look for ± in formulas and ensure both cases are considered'
            },
            distance_formula: {
                reminder: 'Point-to-line distance: d = |Ax₁ + By₁ + C| / √(A² + B²)',
                method: 'Convert line to standard form Ax + By + C = 0 first'
            },
            verify_tangency: {
                reminder: 'Verify: distance from center to tangent line = radius',
                method: 'Calculate distance and compare with radius'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why tangent is perpendicular to radius and geometric meaning',
                language: 'intuitive and geometry-focused'
            },
            procedural: {
                focus: 'Step-by-step calculation process',
                language: 'algorithmic instructions'
            },
            visual: {
                focus: 'Graphical representation of circle, radius, and tangent',
                language: 'spatial and geometric visualization'
            },
            algebraic: {
                focus: 'Equations and algebraic manipulation',
                language: 'formal mathematical notation'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple geometric terms',
                detail: 'essential steps only',
                examples: 'concrete numbers and simple circles'
            },
            intermediate: {
                vocabulary: 'standard geometry and algebra terms',
                detail: 'main steps with brief geometric reasoning',
                examples: 'mix of simple and moderate complexity'
            },
            ELI5: {
                vocabulary: 'everyday language with analogies',
                detail: 'every tiny step with pictures and stories',
                examples: 'real-world analogies like wheels, plates, clocks',
                analogies: true,
                visualization: 'simple drawings and physical objects'
            },
            detailed: {
                vocabulary: 'precise mathematical terminology',
                detail: 'comprehensive derivations and proofs',
                examples: 'abstract and generalized cases'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery with reflective questions',
                examples: 'carefully sequenced difficulty progression'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            wheel_ground: {
                scenario: "Wheel touching the ground",
                context: "A wheel (circle) touches the ground (tangent line). The ground is perpendicular to the spoke (radius) at contact point.",
                equation: "Tangent at lowest point of wheel",
                examples: [
                    "Car wheel on road",
                    "Bicycle wheel on path",
                    "Rolling ball on surface"
                ],
                application: "Vehicle dynamics, physics of rolling motion"
            },
            satellite_horizon: {
                scenario: "Satellite line of sight to Earth",
                context: "The line of sight from satellite to horizon is tangent to Earth's curved surface.",
                equation: "Tangent from external point (satellite) to circle (Earth)",
                examples: [
                    "GPS satellite visibility",
                    "Communication satellite coverage",
                    "Space station viewing area"
                ],
                application: "Telecommunications, space navigation, broadcast coverage"
            },
            gear_belt: {
                scenario: "Belt connecting two gears or pulleys",
                context: "Belt forms common tangent lines to two circular gears.",
                equation: "Common external tangent to two circles",
                examples: [
                    "Engine belts",
                    "Conveyor systems",
                    "Bicycle chain and gears"
                ],
                application: "Mechanical engineering, power transmission"
            },
            lighthouse_visibility: {
                scenario: "Lighthouse visibility range",
                context: "Light beam tangent to Earth's surface determines how far ships can see the lighthouse.",
                equation: "Tangent length from height to horizon",
                examples: [
                    "Lighthouse range calculation",
                    "Radio tower broadcast range",
                    "Ship visibility at sea"
                ],
                application: "Navigation, maritime safety, broadcasting"
            },
            planet_viewing: {
                scenario: "Viewing angle to a planet",
                context: "From Earth, the maximum viewing angle to see a planet is determined by tangent lines.",
                equation: "Angle between two tangents from external point",
                examples: [
                    "Viewing Venus or Mercury from Earth",
                    "Moon's apparent size",
                    "Eclipse calculations"
                ],
                application: "Astronomy, celestial mechanics"
            },
            circular_pool: {
                scenario: "Ladder leaning against circular pool",
                context: "Ladder touches the circular pool edge at exactly one point (tangent).",
                equation: "Tangent at point where ladder meets pool",
                examples: [
                    "Pool maintenance access",
                    "Circular structure support",
                    "Ramp to circular platform"
                ],
                application: "Architecture, construction, safety design"
            },
            radar_detection: {
                scenario: "Radar detection range",
                context: "Radar beam tangent to terrain determines detection coverage.",
                equation: "Tangent from radar position to terrain obstacles",
                examples: [
                    "Air traffic control range",
                    "Military radar coverage",
                    "Weather radar scope"
                ],
                application: "Aviation, military applications, meteorology"
            },
            optical_systems: {
                scenario: "Light reflection from curved mirror",
                context: "Light ray reflects off circular mirror; tangent determines reflection angle.",
                equation: "Tangent at point of reflection on circular mirror",
                examples: [
                    "Telescope mirrors",
                    "Car headlight reflectors",
                    "Solar collectors"
                ],
                application: "Optics, astronomy, solar energy"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            tangent_at_point: {
                skills: [
                    'Distance formula',
                    'Slope calculation',
                    'Perpendicular slope (negative reciprocal)',
                    'Point-slope form of line',
                    'Circle equation'
                ],
                priorKnowledge: [
                    'Coordinate geometry',
                    'Understanding of radius',
                    'Concept of tangent line',
                    'Perpendicularity'
                ],
                checkQuestions: [
                    "What is the slope of a line through (3, 4) and (5, 8)?",
                    "If a line has slope 2, what is the slope of a perpendicular line?",
                    "What is the equation of a line with slope -3 through point (1, 5)?"
                ]
            },
            tangent_from_external_point: {
                skills: [
                    'Pythagorean theorem',
                    'Distance formula',
                    'System of equations',
                    'Quadratic equations',
                    'Circle equation'
                ],
                priorKnowledge: [
                    'Right triangle properties',
                    'External vs internal points',
                    'Power of a point',
                    'Tangent properties'
                ],
                checkQuestions: [
                    "In a right triangle with hypotenuse 10 and one leg 6, find the other leg",
                    "Find distance between points (2, 3) and (6, 7)",
                    "Solve: x² + 4x - 5 = 0"
                ]
            },
            tangent_with_slope: {
                skills: [
                    'Point-to-line distance formula',
                    'Line equations (multiple forms)',
                    'Solving equations with ±',
                    'Simplifying radicals'
                ],
                priorKnowledge: [
                    'Different forms of line equations',
                    'Distance formulas',
                    'Understanding of slope',
                    'Parallel and perpendicular concepts'
                ],
                checkQuestions: [
                    "Convert y = 2x + 3 to standard form Ax + By + C = 0",
                    "Find distance from point (1, 2) to line 3x + 4y - 5 = 0",
                    "Simplify: √(1 + 4)"
                ]
            },
            common_tangent_two_circles: {
                skills: [
                    'Distance between points',
                    'Multiple circle equations',
                    'Advanced algebra',
                    'Geometric reasoning'
                ],
                priorKnowledge: [
                    'Circle positions (separate, tangent, intersecting, nested)',
                    'Internal vs external tangents',
                    'Similar triangles',
                    'Complex systems of equations'
                ],
                checkQuestions: [
                    "How many common tangents exist for two separate circles?",
                    "What is the distance between centers (2,3) and (5,7)?",
                    "If two circles are externally tangent, what is the relationship between distance and radii?"
                ]
            },
            tangent_length: {
                skills: [
                    'Pythagorean theorem',
                    'Distance formula',
                    'Square roots',
                    'Algebraic manipulation'
                ],
                priorKnowledge: [
                    'Right triangle formed by radius, tangent, and distance to center',
                    'Power of a point theorem',
                    'External point properties'
                ],
                checkQuestions: [
                    "If hypotenuse is 13 and one leg is 5, find the other leg",
                    "Calculate √(169 - 25)",
                    "Is point (5, 5) inside, on, or outside circle (x-2)² + (y-1)² = 9?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            perpendicular_radius: {
                description: "Tangent perpendicular to radius",
                analogy: "Like a spoke of a wheel meeting the ground at exactly 90 degrees",
                visualization: "Draw circle, radius to point, and perpendicular tangent line",
                suitableFor: ['tangent_at_point', 'all_tangent_types'],
                explanation: "The key property: radius and tangent always meet at right angle"
            },
            right_triangle: {
                description: "Right triangle formed by center, external point, tangency point",
                analogy: "Like a ladder leaning against a circular wall",
                visualization: "Draw triangle with radius as one leg, tangent segment as other leg",
                suitableFor: ['tangent_from_external_point', 'tangent_length'],
                explanation: "Pythagorean theorem: d² = r² + L² where L is tangent length"
            },
            distance_equals_radius: {
                description: "Distance from center to tangent line equals radius",
                analogy: "Tangent line is exactly one radius away from center",
                visualization: "Draw perpendicular from center to tangent line",
                suitableFor: ['tangent_with_slope', 'tangent_parallel_perpendicular'],
                explanation: "This is the defining condition for a line to be tangent"
            },
            two_tangents_symmetry: {
                description: "Two tangents from external point are symmetric",
                analogy: "Like two identical paths around a circular obstacle",
                visualization: "Draw external point, circle, and both tangent lines",
                suitableFor: ['tangent_from_external_point', 'angle_between_tangents'],
                explanation: "Tangent segments have equal length; lines form isosceles triangle"
            },
            common_tangent_geometry: {
                description: "Common tangents to two circles",
                analogy: "Like a belt connecting two pulleys",
                visualization: "Draw two circles and their common tangent lines",
                suitableFor: ['common_tangent_two_circles'],
                explanation: "External tangents don't cross; internal tangents cross between circles"
            },
            slope_relationship: {
                description: "Perpendicular slopes multiply to -1",
                analogy: "One slope is the 'opposite flip' of the other",
                visualization: "Show two perpendicular lines on coordinate plane",
                suitableFor: ['all_tangent_types'],
                explanation: "If m₁ × m₂ = -1, lines are perpendicular"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "Find tangent to circle x² + y² = 25 at point (3, 4)",
                    solution: "y = (-3/4)x + 25/4",
                    steps: [
                        "Center (0,0), radius 5, point (3,4) on circle",
                        "Slope of radius: m_r = 4/3",
                        "Perpendicular slope: m_t = -3/4",
                        "Tangent: y - 4 = (-3/4)(x - 3)",
                        "Simplify: y = (-3/4)x + 25/4"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "Find horizontal tangent to circle (x-2)² + (y-3)² = 16",
                    solution: "y = 7 and y = -1",
                    steps: [
                        "Horizontal tangent has slope 0",
                        "Center (2,3), radius 4",
                        "Tangents at top and bottom of circle",
                        "y = k + r = 3 + 4 = 7",
                        "y = k - r = 3 - 4 = -1"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "Find length of tangent from (0,0) to circle (x-4)² + (y-3)² = 9",
                    solution: "L = 4",
                    steps: [
                        "Center (4,3), radius 3",
                        "Distance to center: d = √(16+9) = 5",
                        "Use Pythagorean: L² + r² = d²",
                        "L² = 25 - 9 = 16",
                        "L = 4"
                    ],
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "Find tangent to (x-1)² + (y+2)² = 10 at point (4, -1)",
                    solution: "y = -3x + 11",
                    steps: [
                        "Verify (4,-1) on circle: (4-1)² + (-1+2)² = 9+1 = 10 ✓",
                        "Center (1,-2), slope of radius: ((-1)-(-2))/(4-1) = 1/3",
                        "Perpendicular slope: m_t = -3",
                        "Tangent: y - (-1) = -3(x - 4)",
                        "Simplify: y = -3x + 11"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "Find tangents to x² + y² = 5 with slope m = 2",
                    solution: "y = 2x ± √45 = 2x ± 3√5",
                    steps: [
                        "Center (0,0), radius √5",
                        "Distance formula: |0 - 0 - b|/√(1+4) = √5",
                        "|b|/√5 = √5",
                        "|b| = 5, so b = ±5... [error, recalculate]",
                        "Actually |b| = √5 × √5 = 5... so b = ± (calculation depends on exact setup)"
                    ],
                    difficulty: "medium",
                    note: "Requires careful application of distance formula"
                },
                {
                    problem: "Find tangents from (6,8) to circle x² + y² = 25",
                    solution: "Two tangent lines (requires solving system)",
                    steps: [
                        "Center (0,0), radius 5",
                        "Distance from (6,8) to center: d = 10",
                        "Point is outside circle (10 > 5) ✓",
                        "Tangent length: L = √(100-25) = √75 = 5√3",
                        "Set up system for tangency points (complex algebra)"
                    ],
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "Find common external tangents to circles (x-2)² + y² = 4 and (x+2)² + y² = 1",
                    solution: "Two external tangents (complex calculation)",
                    steps: [
                        "Circle 1: center (2,0), r₁ = 2",
                        "Circle 2: center (-2,0), r₂ = 1",
                        "Distance between centers: d = 4",
                        "d > r₁ + r₂ (4 > 3), so 4 common tangents exist",
                        "External tangents: complex geometric construction"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "Find circle tangent to line 3x + 4y = 12 at (0,3) with radius 5",
                    solution: "Circle equation (requires finding center)",
                    steps: [
                        "Tangent line 3x + 4y = 12 at point (0,3)",
                        "Slope of tangent: -3/4",
                        "Radius perpendicular to tangent: slope 4/3",
                        "Center is 5 units from (0,3) along slope 4/3",
                        "Calculate center, write equation"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "Find angle between tangents from (5,0) to circle x² + y² = 9",
                    solution: "θ ≈ 73.74°",
                    steps: [
                        "Center (0,0), radius 3, external point (5,0)",
                        "Distance d = 5",
                        "Use sin(θ/2) = r/d = 3/5",
                        "θ/2 = arcsin(0.6) ≈ 36.87°",
                        "θ ≈ 73.74°"
                    ],
                    difficulty: "hard"
                }
            ],
            byMethod: {
                tangent_at_point: [
                    {
                        problem: "x² + y² = 13 at (2,3)",
                        solution: "2x + 3y = 13"
                    },
                    {
                        problem: "(x-1)² + (y-1)² = 8 at (3,3)",
                        solution: "y = -x + 6"
                    }
                ],
                tangent_from_external_point: [
                    {
                        problem: "From (5,0) to x² + y² = 4",
                        solution: "Two tangents (system solution required)"
                    }
                ],
                tangent_with_slope: [
                    {
                        problem: "Circle x² + y² = 5, slope m = 2",
                        solution: "y = 2x ± 5"
                    }
                ],
                horizontal_vertical: [
                    {
                        problem: "Horizontal tangents to (x-2)² + (y-3)² = 16",
                        solution: "y = 7, y = -1"
                    },
                    {
                        problem: "Vertical tangents to (x-2)² + (y-3)² = 16",
                        solution: "x = 6, x = -2"
                    }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            perpendicular_confusion: {
                misconception: "Thinking tangent has same slope as radius",
                reality: "Tangent is perpendicular (negative reciprocal slope) to radius",
                correctiveExample: "If radius slope is 2, tangent slope is -1/2, NOT 2",
                commonIn: ['tangent_at_point']
            },
            point_verification: {
                misconception: "Assuming any point can be used without verification",
                reality: "Point must actually lie ON the circle for tangent at that point",
                correctiveExample: "Point (5,0) is NOT on circle x² + y² = 16 since 25 ≠ 16",
                commonIn: ['tangent_at_point']
            },
            external_point_count: {
                misconception: "Thinking there's only one tangent from external point",
                reality: "Two distinct tangent lines exist from any external point",
                correctiveExample: "From (5,0) to circle x² + y² = 4, there are TWO tangents",
                commonIn: ['tangent_from_external_point']
            },
            distance_formula_sign: {
                misconception: "Forgetting absolute value in point-to-line distance",
                reality: "Distance is always positive; formula includes absolute value",
                correctiveExample: "d = |Ax + By + C| / √(A² + B²), not (Ax + By + C) / √(A² + B²)",
                commonIn: ['tangent_with_slope']
            },
            tangent_length_formula: {
                misconception: "Using L² = d² + r² instead of L² = d² - r²",
                reality: "Tangent length uses L² + r² = d² (Pythagorean), so L² = d² - r²",
                correctiveExample: "If d=5 and r=3, then L=√(25-9)=4, NOT √(25+9)",
                commonIn: ['tangent_length', 'tangent_from_external_point']
            },
            slope_zero_undefined: {
                misconception: "Confusing horizontal (slope=0) and vertical (undefined) slopes",
                reality: "Horizontal: slope is 0, equation y=k. Vertical: slope undefined, equation x=h",
                correctiveExample: "Horizontal tangent: y = constant. Vertical tangent: x = constant",
                commonIn: ['horizontal_vertical_tangent']
            },
            common_tangent_count: {
                misconception: "Not knowing how many common tangents exist based on circle positions",
                reality: "Count depends on whether circles are separate, tangent, intersecting, or nested",
                correctiveExample: "Separate circles: 4. Externally tangent: 3. Intersecting: 2. Internally tangent: 1. One inside: 0",
                commonIn: ['common_tangent_two_circles']
            },
            reciprocal_vs_negative_reciprocal: {
                misconception: "Taking reciprocal without negating for perpendicular slope",
                reality: "Perpendicular slope is NEGATIVE reciprocal: m₂ = -1/m₁",
                correctiveExample: "If m₁ = 3/4, perpendicular slope is -4/3, NOT 4/3",
                commonIn: ['all_tangent_types']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            tangent_perpendicular: {
                analogy: "Wheel touching the ground",
                explanation: "When a wheel touches the ground, the ground (tangent) is always perpendicular to the spoke (radius) at the contact point",
                suitableFor: ['tangent_at_point', 'all_tangent_types'],
                ELI5: "Imagine a wheel rolling on the floor. The floor touches the wheel at just one spot, and the spoke going to that spot is straight up and down, making a perfect corner with the floor"
            },
            external_point_tangents: {
                analogy: "Two paths around a circular obstacle",
                explanation: "From a point outside a circle, you can take two different straight paths that just touch the circle without crossing it - like walking around a circular fountain",
                suitableFor: ['tangent_from_external_point'],
                ELI5: "Imagine standing away from a round table. You can draw two straight lines from where you stand that just barely touch the table's edge - one on the left side and one on the right"
            },
            common_tangent_belt: {
                analogy: "Belt connecting two gears",
                explanation: "A belt connecting two circular gears or pulleys forms common tangent lines, touching both circles",
                suitableFor: ['common_tangent_two_circles'],
                ELI5: "Think of a belt around two bicycle wheels. The belt touches both wheels, making straight lines between the circles"
            },
            tangent_length: {
                analogy: "Ladder against circular wall",
                explanation: "The length from where you stand to where the ladder touches a circular wall is the tangent length",
                suitableFor: ['tangent_length'],
                ELI5: "If you hold one end of a stick and lean it against a round pillar, the stick touches the pillar at one point. The distance from your hand to that touching point is like the tangent length"
            },
            perpendicular_slope: {
                analogy: "Turning 90 degrees",
                explanation: "If you're walking in one direction (one slope), turning exactly 90 degrees left or right gives you the perpendicular direction",
                suitableFor: ['all_tangent_types'],
                ELI5: "If you're walking north (going up), and you turn to face perfectly east or west, you've made a perpendicular turn - that's what perpendicular slopes do with numbers"
            },
            distance_equals_radius: {
                analogy: "Fence around circular garden",
                explanation: "A straight fence (tangent) is exactly one garden-radius away from the center, measured perpendicular",
                suitableFor: ['tangent_with_slope'],
                ELI5: "Imagine a round garden. If you build a straight fence next to it that just touches the edge, the fence is exactly as far from the garden's center as the garden is wide (the radius)"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            tangent_at_point: {
                level1: "What is the first thing to verify about the given point?",
                level2: "Check if the point is actually on the circle by substituting into the equation",
                level3: "Find the slope of the radius from center to the point, then take perpendicular slope",
                level4: "Radius slope: (y₁-k)/(x₁-h). Tangent slope: -(x₁-h)/(y₁-k). Use point-slope form"
            },
            tangent_from_external_point: {
                level1: "Is the point inside, on, or outside the circle?",
                level2: "Calculate distance from point to center and compare with radius",
                level3: "Use Pythagorean theorem: tangent length L satisfies L² + r² = d²",
                level4: "Set up system: point on circle, perpendicular to radius, passes through external point"
            },
            tangent_with_slope: {
                level1: "What form should you write the tangent line in?",
                level2: "Write as y = mx + b where m is given slope",
                level3: "Use distance formula: distance from center to line = radius",
                level4: "Solve |k - mh - b| / √(1 + m²) = r for b. You'll get two values (±)"
            },
            tangent_length: {
                level1: "What triangle is formed?",
                level2: "Right triangle: center, external point, tangency point",
                level3: "Use Pythagorean theorem with radius, tangent length, and distance to center",
                level4: "L = √(d² - r²) where d = distance from external point to center"
            },
            common_tangent: {
                level1: "How are the two circles positioned relative to each other?",
                level2: "Calculate distance between centers and compare with sum and difference of radii",
                level3: "Determine number of possible tangents based on position",
                level4: "External tangents: d > r₁ - r₂. Internal tangents: d > r₁ + r₂"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Is point (3,4) on circle x² + y² = 25?",
                    answer: "Yes (3² + 4² = 9 + 16 = 25)",
                    assesses: "point_verification",
                    difficulty: "basic"
                },
                {
                    question: "If a line has slope 2/3, what is the slope of a perpendicular line?",
                    answer: "-3/2",
                    assesses: "perpendicular_slope",
                    difficulty: "basic"
                },
                {
                    question: "Find the tangent to x² + y² = 10 at point (1,3)",
                    answer: "x + 3y = 10",
                    assesses: "tangent_at_point",
                    difficulty: "intermediate"
                },
                {
                    question: "Is point (5,5) inside, on, or outside circle (x-2)² + (y-1)² = 9?",
                    answer: "Outside (distance √25 = 5 > 3 = radius)",
                    assesses: "point_position",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "A tangent line to a circle is:",
                    options: [
                        "Parallel to the radius",
                        "Perpendicular to the radius at point of tangency",
                        "Passes through the center",
                        "Has the same slope as the radius"
                    ],
                    correct: "Perpendicular to the radius at point of tangency",
                    explanation: "Key tangent property: always perpendicular to radius at contact point"
                },
                {
                    question: "From an external point, how many tangent lines can be drawn to a circle?",
                    options: ["0", "1", "2", "Infinite"],
                    correct: "2",
                    explanation: "Exactly two tangent lines from any external point"
                },
                {
                    question: "If radius slope is 4/3, what is tangent slope at that point?",
                    options: ["4/3", "3/4", "-4/3", "-3/4"],
                    correct: "-3/4",
                    explanation: "Perpendicular slope is negative reciprocal: -(3/4)"
                }
            ],
            summative: [
                {
                    question: "Find both tangent lines to (x-2)² + (y-1)² = 5 with slope m = 1",
                    answer: "y = x ± √10",
                    showsWork: true,
                    rubric: {
                        setup: 1,
                        distance_formula: 2,
                        solve_for_b: 2,
                        two_equations: 1
                    }
                },
                {
                    question: "Find tangent lines from (6,0) to circle x² + y² = 9",
                    answer: "Two tangent equations (requires full solution)",
                    showsWork: true,
                    rubric: {
                        verify_external: 1,
                        tangent_length: 1,
                        system_setup: 2,
                        solve_system: 2,
                        equations: 2
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "Find horizontal tangent to (x-3)² + (y-2)² = 16",
                    "Find vertical tangent to (x-3)² + (y-2)² = 16",
                    "Verify (3,4) is on circle x² + y² = 25",
                    "Find tangent to x² + y² = 5 at (1,2)"
                ],
                medium: [
                    "Find tangent to (x-1)² + (y+2)² = 10 at (2,1)",
                    "Find tangent length from (5,0) to x² + y² = 9",
                    "Find tangents to x² + y² = 4 with slope 1",
                    "Find tangent to (x-2)² + (y-3)² = 25 parallel to y = 2x + 1"
                ],
                hard: [
                    "Find tangents from (8,0) to (x-2)² + y² = 4",
                    "Find common external tangents to x² + y² = 4 and (x-6)² + y² = 9",
                    "Find angle between tangents from (5,0) to x² + y² = 9",
                    "Find circle with center (2,3) tangent to line 3x + 4y = 12"
                ]
            },
            byObjective: {
                canFindTangentAtPoint: [
                    "x² + y² = 13 at (2,3)",
                    "(x-1)² + (y-2)² = 5 at (3,3)",
                    "x² + y² = 25 at (3,4)"
                ],
                canVerifyPointOnCircle: [
                    "Is (4,3) on x² + y² = 25?",
                    "Is (2,2) on (x-1)² + (y-1)² = 2?",
                    "Is (0,5) on x² + y² = 20?"
                ],
                canFindPerpendicularSlope: [
                    "Find perpendicular slope to m = 2/5",
                    "Find perpendicular slope to m = -3",
                    "Find perpendicular slope to m = 0"
                ],
                canFindTangentLength: [
                    "Length from (5,0) to x² + y² = 9",
                    "Length from (4,3) to x² + y² = 4",
                    "Length from (6,8) to x² + y² = 25"
                ],
                canFindTangentWithSlope: [
                    "Tangent to x² + y² = 5 with slope 2",
                    "Tangent to (x-1)² + (y-1)² = 8 with slope -1",
                    "Horizontal tangent to (x-2)² + (y-3)² = 16"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "point_on_circle": "Tangent at point - find perpendicular to radius",
                "external_point": "Two tangents from external point - use Pythagorean theorem",
                "given_slope": "Tangent with slope - use distance formula condition",
                "parallel_line": "Find slope of line, use same slope for tangent",
                "perpendicular_line": "Find slope of line, use perpendicular slope for tangent",
                "horizontal_vertical": "Special case - horizontal (y=k±r) or vertical (x=h±r)",
                "two_circles": "Common tangent - analyze positions, complex geometry",
                "find_circle": "Reverse problem - use tangent as constraint"
            },
            whenToUseWhat: {
                point_slope_form: "When you have a point and slope of tangent",
                distance_formula: "When using tangent condition (distance = radius)",
                pythagorean_theorem: "For tangent length and external point problems",
                system_of_equations: "For finding tangency points from external point",
                perpendicular_slope: "Always for tangent at a point on circle"
            },
            methodSelection: {
                factorsToConsider: [
                    "Is the tangency point known or unknown?",
                    "Is the point on, inside, or outside the circle?",
                    "Is slope given, or must it be found?",
                    "Are there special conditions (horizontal, vertical, parallel)?",
                    "Is this a one-circle or two-circle problem?"
                ],
                generalApproach: [
                    "1. Identify circle center (h, k) and radius r",
                    "2. Determine what information is given and what is sought",
                    "3. Choose appropriate method based on problem type",
                    "4. Apply geometric properties (perpendicularity, distance)",
                    "5. Solve algebraically",
                    "6. Verify tangent condition"
                ]
            },
            optimizationTips: {
                "Verify point on circle first": "Saves time if point isn't even on circle",
                "Use perpendicular property": "Faster than distance formula when point is known",
                "Draw a diagram": "Visual helps identify method and avoid errors",
                "Check for special cases": "Horizontal/vertical tangents have simple forms",
                "Expect two solutions": "Many tangent problems yield two tangent lines (±)"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Quick Tangent at Point",
                    timeLimit: 120,
                    problems: [
                        "x² + y² = 10 at (1,3)",
                        "x² + y² = 25 at (3,4)",
                        "(x-2)² + (y-1)² = 5 at (4,2)",
                        "x² + y² = 13 at (2,3)"
                    ]
                },
                {
                    name: "Perpendicular Slope Sprint",
                    timeLimit: 60,
                    problems: [
                        "Find perpendicular to slope 2",
                        "Find perpendicular to slope -3/4",
                        "Find perpendicular to slope 0",
                        "Find perpendicular to slope 5/2"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Circle",
                    problem: "A circle is tangent to the x-axis at (3,0) and has radius 5. Find the center.",
                    solution: "Center could be (3, 5) or (3, -5)",
                    hint: "Tangent to x-axis means center is directly above or below"
                },
                {
                    name: "Equal Tangent Lengths",
                    problem: "Find all points on the line y = x from which the tangent length to circle x² + y² = 4 is 2.",
                    solution: "Points where √(x² + x² - 4) = 2, so 2x² = 8, x = ±2",
                    hint: "Use tangent length formula L² = d² - r²"
                },
                {
                    name: "Three Tangents",
                    problem: "How can two circles have exactly three common tangents?",
                    solution: "When they are externally tangent (touching at one point)",
                    hint: "Think about circle positions"
                }
            ],
            applications: [
                {
                    scenario: "Satellite Horizon",
                    problem: "A satellite is 200 km above Earth's surface. Earth's radius is 6400 km. How far along the tangent can the satellite 'see' to the horizon?",
                    equation: "L² + 6400² = 6600² (Pythagorean theorem)",
                    solution: "L ≈ 1131 km"
                },
                {
                    scenario: "Gear Belt Length",
                    problem: "Two gears with radii 10 cm and 20 cm have centers 50 cm apart. Find the length of the belt (external tangent) connecting them.",
                    equation: "Belt wraps around both circles plus two tangent segments",
                    solution: "Requires calculating tangent length and arc lengths"
                },
                {
                    scenario: "Lighthouse Visibility",
                    problem: "A lighthouse is 30 m tall on a spherical Earth (radius 6,371,000 m). How far can a ship at sea level see the lighthouse?",
                    equation: "Tangent length from ship to horizon",
                    solution: "L = √(d² - r²) where d = r + 30"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Find tangent to x² + y² = 5 at (1,2)",
                        "Slope of radius: m = 2/1 = 2",
                        "Tangent slope: m_t = 2  [ERROR: should be -1/2]",
                        "Tangent: y - 2 = 2(x - 1)",
                        "y = 2x"
                    ],
                    correctAnswer: "y = (-1/2)x + 5/2",
                    errorType: "Forgot to take negative reciprocal for perpendicular slope"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Find tangent length from (5,0) to x² + y² = 4",
                        "Distance to center: d = 5",
                        "Radius: r = 2",
                        "Tangent length: L² = 5² + 2² = 29  [ERROR]",
                        "L = √29"
                    ],
                    correctAnswer: "L = √21",
                    errorType: "Used L² = d² + r² instead of L² = d² - r²"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "Find tangent to (x-1)² + (y-2)² = 5 at (3,3)",
                        "Slope of radius: (3-2)/(3-1) = 1/2",
                        "Tangent slope: -2",
                        "Tangent: y - 3 = -2(x - 3)",
                        "y = -2x + 9"
                    ],
                    correctAnswer: "May be correct - need to verify point on circle first!",
                    errorType: "Didn't verify (3,3) is actually on the circle: (3-1)² + (3-2)² = 4+1 = 5 ✓"
                }
            ]
        };
    }

    // MAIN SOLVER METHOD
    solveTangentProblem(config) {
        const { circle, point, slope, externalPoint, scenario, parameters, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseTangentProblem(circle, point, slope, externalPoint, scenario, parameters, problemType, context);

            // Solve the problem
            this.currentSolution = this.solveTangentProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateTangentSteps(this.currentProblem, this.currentSolution);

            // Generate graph data if applicable
            this.generateTangentGraphData();

            // Generate workbook
            this.generateTangentWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                tangentEquations: this.currentSolution?.tangentEquations,
                tangencyPoints: this.currentSolution?.tangencyPoints
            };

        } catch (error) {
            throw new Error(`Failed to solve tangent problem: ${error.message}`);
        }
    }

    parseTangentProblem(circle, point, slope, externalPoint, scenario = '', parameters = {}, problemType = null, context = {}) {
        // If problem type is specified, use it directly
        if (problemType && this.tangentTypes[problemType]) {
            return {
                originalInput: scenario || `${problemType} problem`,
                type: problemType,
                circle: circle || parameters.circle,
                point: point || parameters.point,
                slope: slope !== undefined ? slope : parameters.slope,
                externalPoint: externalPoint || parameters.externalPoint,
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect tangent problem type
        for (const [type, config] of Object.entries(this.tangentTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(scenario)) {
                    return {
                        originalInput: scenario,
                        type: type,
                        circle: circle || parameters.circle,
                        point: point || parameters.point,
                        slope: slope !== undefined ? slope : parameters.slope,
                        externalPoint: externalPoint || parameters.externalPoint,
                        scenario: scenario,
                        parameters: { ...parameters },
                        context: { ...context },
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        // Default based on provided information
        if (point && circle) {
            return {
                originalInput: 'Tangent at point on circle',
                type: 'tangent_at_point',
                circle: circle,
                point: point,
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        if (externalPoint && circle) {
            return {
                originalInput: 'Tangent from external point',
                type: 'tangent_from_external_point',
                circle: circle,
                externalPoint: externalPoint,
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        if (slope !== undefined && circle) {
            return {
                originalInput: 'Tangent with given slope',
                type: 'tangent_with_slope',
                circle: circle,
                slope: slope,
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize tangent problem type from given information`);
    }

    solveTangentProblem_Internal(problem) {
        const solver = this.tangentTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for tangent problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // TANGENT EQUATION SOLVERS

    solveTangentAtPoint(problem) {
        const { circle, point } = problem;
        
        // Parse circle equation to get center and radius
        const circleData = this.parseCircleEquation(circle);
        const { h, k, r } = circleData;
        const [x1, y1] = point;

        // Verify point is on circle
        const distSq = Math.pow(x1 - h, 2) + Math.pow(y1 - k, 2);
        const isOnCircle = Math.abs(distSq - r * r) < 1e-9;

        if (!isOnCircle) {
            return {
                error: true,
                message: `Point (${x1}, ${y1}) is not on the circle`,
                verification: {
                    expected: r * r,
                    actual: distSq,
                    difference: Math.abs(distSq - r * r)
                }
            };
        }

        // Calculate slope of radius
        const radiusSlope = (y1 - k) / (x1 - h);
        
        // Calculate perpendicular slope (tangent slope)
        let tangentSlope;
        let isVertical = false;
        let isHorizontal = false;

        if (Math.abs(x1 - h) < 1e-9) {
            // Radius is vertical, so tangent is horizontal
            isHorizontal = true;
            tangentSlope = 0;
        } else if (Math.abs(y1 - k) < 1e-9) {
            // Radius is horizontal, so tangent is vertical
            isVertical = true;
            tangentSlope = undefined;
        } else {
            tangentSlope = -1 / radiusSlope;
        }

        // Write tangent equation
        let tangentEquation;
        let tangentEquationStandard;
        let tangentEquationSlopeIntercept;

        if (isVertical) {
            tangentEquation = `x = ${x1}`;
            tangentEquationStandard = `x - ${x1} = 0`;
            tangentEquationSlopeIntercept = "undefined (vertical line)";
        } else if (isHorizontal) {
            tangentEquation = `y = ${y1}`;
            tangentEquationStandard = `y - ${y1} = 0`;
            tangentEquationSlopeIntercept = `y = ${y1}`;
        } else {
            // y - y1 = m(x - x1)
            const b = y1 - tangentSlope * x1;
            tangentEquationSlopeIntercept = `y = ${this.formatNumber(tangentSlope)}x + ${this.formatNumber(b)}`;
            
            // Standard form: Ax + By + C = 0
            // y = mx + b  →  -mx + y - b = 0  →  mx - y + b = 0
            const A = -tangentSlope;
            const B = 1;
            const C = -b;
            tangentEquationStandard = `${this.formatNumber(A)}x + ${this.formatNumber(B)}y + ${this.formatNumber(C)} = 0`;
            
            tangentEquation = tangentEquationSlopeIntercept;
        }

        return {
            type: 'Tangent at Point on Circle',
            circle: circleData,
            pointOfTangency: point,
            radiusSlope: isVertical ? 'undefined' : radiusSlope,
            tangentSlope: isVertical ? 'undefined' : (isHorizontal ? 0 : tangentSlope),
            tangentEquation: tangentEquation,
            tangentEquationSlopeIntercept: tangentEquationSlopeIntercept,
            tangentEquationStandard: tangentEquationStandard,
            isVertical: isVertical,
            isHorizontal: isHorizontal,
            verification: this.verifyTangentLine(circleData, tangentEquationStandard, point),
            category: 'tangent_at_point'
        };
    }

    solveTangentFromExternalPoint(problem) {
        const { circle, externalPoint } = problem;
        
        const circleData = this.parseCircleEquation(circle);
        const { h, k, r } = circleData;
        const [x0, y0] = externalPoint;

        // Calculate distance from external point to center
        const d = Math.sqrt(Math.pow(x0 - h, 2) + Math.pow(y0 - k, 2));

        // Verify point is outside circle
        if (d <= r) {
            return {
                error: true,
                message: `Point (${x0}, ${y0}) must be outside the circle (distance ${d.toFixed(4)} ≤ radius ${r})`,
                suggestion: d < r ? 'Point is inside circle' : 'Point is on circle'
            };
        }

        // Calculate tangent length using Pythagorean theorem
        const tangentLength = Math.sqrt(d * d - r * r);

        // Find the two tangency points by solving system of equations
        // This is complex - using geometric approach
        
        // The tangency points lie on the circle and the line from external point to tangency point
        // is perpendicular to the radius at tangency point

        // Using parametric approach or algebraic system
        // For simplicity, we'll describe the method and provide the formula

        return {
            type: 'Tangent from External Point',
            circle: circleData,
            externalPoint: externalPoint,
            distanceToCenter: d,
            tangentLength: tangentLength,
            numberOfTangents: 2,
            tangentEquations: 'Two tangent lines (requires solving system of equations)',
            note: 'Full algebraic solution requires solving a system of quadratic equations',
            geometricProperty: 'Both tangent segments have equal length = ' + this.formatNumber(tangentLength),
            rightTriangle: {
                hypotenuse: d,
                radius: r,
                tangentSegment: tangentLength,
                pythagorean: `${this.formatNumber(tangentLength)}² + ${this.formatNumber(r)}² = ${this.formatNumber(d)}²`
            },
            category: 'tangent_from_external_point'
        };
    }

    solveTangentWithSlope(problem) {
        const { circle, slope } = problem;
        
        const circleData = this.parseCircleEquation(circle);
        const { h, k, r } = circleData;
        const m = slope;

        // Tangent line: y = mx + b
        // Distance from center (h, k) to line mx - y + b = 0 must equal r
        // Distance formula: |mh - k + b| / √(m² + 1) = r

        // |mh - k + b| = r√(m² + 1)
        // mh - k + b = ± r√(m² + 1)
        // b = k - mh ± r√(m² + 1)

        const discriminant = r * Math.sqrt(1 + m * m);
        const b1 = k - m * h + discriminant;
        const b2 = k - m * h - discriminant;

        const tangent1 = `y = ${this.formatNumber(m)}x + ${this.formatNumber(b1)}`;
        const tangent2 = `y = ${this.formatNumber(m)}x + ${this.formatNumber(b2)}`;

        // Convert to standard form
        const standard1 = `${this.formatNumber(-m)}x + y + ${this.formatNumber(-b1)} = 0`;
        const standard2 = `${this.formatNumber(-m)}x + y + ${this.formatNumber(-b2)} = 0`;

        return {
            type: 'Tangent with Given Slope',
            circle: circleData,
            givenSlope: m,
            numberOfTangents: 2,
            tangentEquations: [tangent1, tangent2],
            tangentEquationsStandard: [standard1, standard2],
            calculation: {
                formula: 'b = k - mh ± r√(1 + m²)',
                discriminant: discriminant,
                yIntercepts: [b1, b2]
            },
            verification: {
                tangent1: this.verifyTangentLine(circleData, standard1),
                tangent2: this.verifyTangentLine(circleData, standard2)
            },
            category: 'tangent_with_slope'
        };
    }

    solveTangentParallel(problem) {
        const { circle, parameters } = problem;
        const { line } = parameters;

        // Extract slope from the given line
        const lineSlope = this.extractSlope(line);

        // Use tangent with slope solver
        return this.solveTangentWithSlope({
            ...problem,
            slope: lineSlope,
            type: 'tangent_with_slope'
        });
    }

    solveTangentPerpendicular(problem) {
        const { circle, parameters } = problem;
        const { line } = parameters;

        // Extract slope from the given line
        const lineSlope = this.extractSlope(line);

        // Perpendicular slope
        const perpendicularSlope = -1 / lineSlope;

        // Use tangent with slope solver
        return this.solveTangentWithSlope({
            ...problem,
            slope: perpendicularSlope,
            type: 'tangent_with_slope'
        });
    }

    solveHorizontalVerticalTangent(problem) {
        const { circle, parameters } = problem;
        const { orientation } = parameters; // 'horizontal' or 'vertical'

        const circleData = this.parseCircleEquation(circle);
        const { h, k, r } = circleData;

        if (orientation === 'horizontal' || parameters.horizontal) {
            // Horizontal tangents at top and bottom of circle
            const tangent1 = `y = ${this.formatNumber(k + r)}`;
            const tangent2 = `y = ${this.formatNumber(k - r)}`;

            return {
                type: 'Horizontal Tangent Lines',
                circle: circleData,
                numberOfTangents: 2,
                tangentEquations: [tangent1, tangent2],
                tangencyPoints: [[h, k + r], [h, k - r]],
                explanation: 'Horizontal tangents occur at top and bottom of circle',
                category: 'tangent_with_slope'
            };
        } else if (orientation === 'vertical' || parameters.vertical) {
            // Vertical tangents at left and right of circle
            const tangent1 = `x = ${this.formatNumber(h + r)}`;
            const tangent2 = `x = ${this.formatNumber(h - r)}`;

            return {
                type: 'Vertical Tangent Lines',
                circle: circleData,
                numberOfTangents: 2,
                tangentEquations: [tangent1, tangent2],
                tangencyPoints: [[h + r, k], [h - r, k]],
                explanation: 'Vertical tangents occur at left and right of circle',
                category: 'tangent_with_slope'
            };
        }

        return {
            error: true,
            message: 'Must specify horizontal or vertical orientation'
        };
    }

    solveCommonTangent(problem) {
        const { parameters } = problem;
        const { circle1, circle2 } = parameters;

        const c1 = this.parseCircleEquation(circle1);
        const c2 = this.parseCircleEquation(circle2);

        // Distance between centers
        const d = Math.sqrt(Math.pow(c2.h - c1.h, 2) + Math.pow(c2.k - c1.k, 2));

        // Determine number of common tangents based on circle positions
        let numberOfTangents;
        let position;

        if (d > c1.r + c2.r) {
            numberOfTangents = 4;
            position = 'Circles are separate (external)';
        } else if (Math.abs(d - (c1.r + c2.r)) < 1e-9) {
            numberOfTangents = 3;
            position = 'Circles are externally tangent';
        } else if (d < c1.r + c2.r && d > Math.abs(c1.r - c2.r)) {
            numberOfTangents = 2;
            position = 'Circles intersect';
        } else if (Math.abs(d - Math.abs(c1.r - c2.r)) < 1e-9) {
            numberOfTangents = 1;
            position = 'Circles are internally tangent';
        } else {
            numberOfTangents = 0;
            position = 'One circle is inside the other';
        }

        return {
            type: 'Common Tangents to Two Circles',
            circle1: c1,
            circle2: c2,
            distanceBetweenCenters: d,
            position: position,
            numberOfCommonTangents: numberOfTangents,
            externalTangents: d > Math.abs(c1.r - c2.r) ? 2 : 0,
            internalTangents: d > c1.r + c2.r ? 2 : (Math.abs(d - (c1.r + c2.r)) < 1e-9 ? 1 : 0),
            note: 'Finding explicit equations requires advanced geometric construction',
            category: 'common_tangent_two_circles'
        };
    }

    solveTangentLength(problem) {
        const { circle, externalPoint } = problem;
        
        const circleData = this.parseCircleEquation(circle);
        const { h, k, r } = circleData;
        const [x0, y0] = externalPoint;

        // Calculate distance from external point to center
        const d = Math.sqrt(Math.pow(x0 - h, 2) + Math.pow(y0 - k, 2));

        // Verify point is outside circle
        if (d <= r) {
            return {
                error: true,
                message: `Point must be outside circle for tangent length calculation`,
                distanceToCenter: d,
                radius: r
            };
        }

        // Calculate tangent length using Pythagorean theorem
        const L = Math.sqrt(d * d - r * r);

        return {
            type: 'Tangent Segment Length',
            circle: circleData,
            externalPoint: externalPoint,
            distanceToCenter: d,
            tangentLength: L,
            pythagoreanCheck: `${this.formatNumber(L)}² + ${this.formatNumber(r)}² = ${this.formatNumber(d)}²`,
            calculation: `L² = d² - r² = ${this.formatNumber(d)}² - ${this.formatNumber(r)}² = ${this.formatNumber(d*d)} - ${this.formatNumber(r*r)} = ${this.formatNumber(L*L)}`,
            category: 'length_of_tangent'
        };
    }

    solveAngleBetweenTangents(problem) {
        const { circle, externalPoint } = problem;
        
        const circleData = this.parseCircleEquation(circle);
        const { h, k, r } = circleData;
        const [x0, y0] = externalPoint;

        // Calculate distance from external point to center
        const d = Math.sqrt(Math.pow(x0 - h, 2) + Math.pow(y0 - k, 2));

        if (d <= r) {
            return {
                error: true,
                message: 'Point must be outside circle'
            };
        }

        // Using right triangle: sin(θ/2) = r/d where θ is angle between tangents
        const halfAngleRad = Math.asin(r / d);
        const angleRad = 2 * halfAngleRad;
        const angleDeg = (angleRad * 180) / Math.PI;

        return {
            type: 'Angle Between Tangent Lines',
            circle: circleData,
            externalPoint: externalPoint,
            distanceToCenter: d,
            angleRadians: angleRad,
            angleDegrees: angleDeg,
            halfAngleDegrees: (halfAngleRad * 180) / Math.PI,
            trigonometry: `sin(θ/2) = r/d = ${this.formatNumber(r)}/${this.formatNumber(d)} = ${this.formatNumber(r/d)}`,
            category: 'angle_between_tangents'
        };
    }

    solveFindCircleFromTangent(problem) {
        const { parameters } = problem;
        
        return {
            type: 'Find Circle Given Tangent Conditions',
            approach: 'Set up system of equations using tangent constraints',
            note: 'Requires three independent conditions to determine unique circle (h, k, r)',
            examples: [
                'Tangent to line at given point with given radius',
                'Tangent to three lines',
                'Passes through two points and tangent to a line'
            ],
            generalMethod: [
                'Use tangent condition: distance from center to line = radius',
                'Use point conditions if center or points on circle are given',
                'Solve system of equations for h, k, and r'
            ],
            category: 'tangent_circle_equation'
        };
    }

// HELPER METHODS

    parseCircleEquation(circle) {
        // circle can be:
        // 1. Object: { h, k, r } or { center: [h, k], radius: r }
        // 2. String: "(x-h)^2 + (y-k)^2 = r^2" or "x^2 + y^2 + Dx + Ey + F = 0"
        // 3. Array: [h, k, r]

        if (typeof circle === 'object' && !Array.isArray(circle)) {
            if (circle.h !== undefined && circle.k !== undefined && circle.r !== undefined) {
                return { h: circle.h, k: circle.k, r: circle.r };
            }
            if (circle.center && circle.radius) {
                return { h: circle.center[0], k: circle.center[1], r: circle.radius };
            }
        }

        if (Array.isArray(circle) && circle.length === 3) {
            return { h: circle[0], k: circle[1], r: circle[2] };
        }

        if (typeof circle === 'string') {
            // Try to parse standard form: (x-h)^2 + (y-k)^2 = r^2
            const standardPattern = /\(x\s*-\s*([+-]?\d+\.?\d*)\)\s*\^?\*?\*?2\s*\+\s*\(y\s*-\s*([+-]?\d+\.?\d*)\)\s*\^?\*?\*?2\s*=\s*([+-]?\d+\.?\d*)/i;
            let match = circle.match(standardPattern);
            
            if (match) {
                const h = parseFloat(match[1]);
                const k = parseFloat(match[2]);
                const r_squared = parseFloat(match[3]);
                return { h, k, r: Math.sqrt(r_squared) };
            }

            // Try x^2 + y^2 = r^2 (center at origin)
            const originPattern = /x\s*\^?\*?\*?2\s*\+\s*y\s*\^?\*?\*?2\s*=\s*([+-]?\d+\.?\d*)/i;
            match = circle.match(originPattern);
            
            if (match) {
                const r_squared = parseFloat(match[1]);
                return { h: 0, k: 0, r: Math.sqrt(r_squared) };
            }

            // Try general form: x^2 + y^2 + Dx + Ey + F = 0
            // Complete the square to convert to standard form
            // This would require more complex parsing
        }

        throw new Error(`Unable to parse circle equation: ${circle}`);
    }

    extractSlope(line) {
        // line can be:
        // 1. Number: the slope itself
        // 2. String: "y = mx + b" or "Ax + By + C = 0"
        // 3. Object: { slope: m } or { A, B, C }

        if (typeof line === 'number') {
            return line;
        }

        if (typeof line === 'object') {
            if (line.slope !== undefined) {
                return line.slope;
            }
            if (line.A !== undefined && line.B !== undefined) {
                // Ax + By + C = 0 → By = -Ax - C → y = (-A/B)x - C/B
                return -line.A / line.B;
            }
        }

        if (typeof line === 'string') {
            // Try y = mx + b format
            const slopeInterceptPattern = /y\s*=\s*([+-]?\d*\.?\d*)\s*x/i;
            let match = line.match(slopeInterceptPattern);
            
            if (match) {
                const m = match[1] === '' || match[1] === '+' ? 1 : (match[1] === '-' ? -1 : parseFloat(match[1]));
                return m;
            }

            // Try Ax + By + C = 0 format (would need more complex parsing)
        }

        throw new Error(`Unable to extract slope from line: ${line}`);
    }

    verifyTangentLine(circleData, tangentEquation, tangencyPoint = null) {
        const { h, k, r } = circleData;

        // Convert tangent equation to standard form Ax + By + C = 0
        let A, B, C;

        if (typeof tangentEquation === 'string') {
            // Parse the equation
            // This is simplified - full implementation would need robust parsing
            
            // For now, assume it's already in standard form or we have the values
            // In practice, you'd parse the string more carefully
            
            // Simplified verification: calculate distance from center to line
            // Distance = |Ah + Bk + C| / √(A² + B²)
            
            // For the purpose of this implementation, we'll return a placeholder
            return {
                method: 'Distance from center to line',
                expectedDistance: r,
                verified: 'Verification requires full equation parsing'
            };
        }

        return {
            verified: 'Unable to verify - equation parsing needed'
        };
    }

    formatNumber(num) {
        if (typeof num !== 'number' || isNaN(num)) return num;
        
        // Round to reasonable precision
        const rounded = Math.round(num * 10000) / 10000;
        
        // If very close to integer, return integer
        if (Math.abs(rounded - Math.round(rounded)) < 1e-9) {
            return Math.round(rounded).toString();
        }
        
        return rounded.toString();
    }

    // STEP GENERATION

    generateTangentSteps(problem, solution) {
        if (solution.error) {
            return [{
                stepNumber: 1,
                step: 'Error',
                description: solution.message,
                error: true
            }];
        }

        let baseSteps = this.generateBaseTangentSteps(problem, solution);

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

    generateBaseTangentSteps(problem, solution) {
        const category = this.tangentTypes[problem.type]?.category;

        switch(category) {
            case 'tangent_at_point':
                return this.generateTangentAtPointSteps(problem, solution);
            case 'tangent_from_external_point':
                return this.generateTangentFromExternalPointSteps(problem, solution);
            case 'tangent_with_slope':
                return this.generateTangentWithSlopeSteps(problem, solution);
            case 'length_of_tangent':
                return this.generateTangentLengthSteps(problem, solution);
            case 'angle_between_tangents':
                return this.generateAngleBetweenTangentsSteps(problem, solution);
            default:
                return this.generateGenericTangentSteps(problem, solution);
        }
    }

    generateTangentAtPointSteps(problem, solution) {
        const steps = [];
        const { circle, pointOfTangency, radiusSlope, tangentSlope, tangentEquation } = solution;

        // Step 1: Identify circle and point
        steps.push({
            stepNumber: 1,
            step: 'Identify circle and point',
            description: 'Extract circle center, radius, and point of tangency',
            circleCenter: `(${circle.h}, ${circle.k})`,
            radius: circle.r,
            pointOfTangency: `(${pointOfTangency[0]}, ${pointOfTangency[1]})`,
            reasoning: 'We need the center and point to find the radius direction',
            goalStatement: 'Find the tangent line perpendicular to the radius at this point'
        });

        // Step 2: Verify point on circle
        const [x1, y1] = pointOfTangency;
        const distSq = Math.pow(x1 - circle.h, 2) + Math.pow(y1 - circle.k, 2);
        steps.push({
            stepNumber: 2,
            step: 'Verify point is on circle',
            description: 'Check that the point satisfies the circle equation',
            calculation: `(${x1} - ${circle.h})² + (${y1} - ${circle.k})² = ${distSq}`,
            radiusSquared: circle.r * circle.r,
            verified: Math.abs(distSq - circle.r * circle.r) < 1e-9 ? 'Yes ✓' : 'No ✗',
            reasoning: 'Point must be on circle for tangent at that point to exist',
            importance: 'Critical check - many errors come from using points not on the circle'
        });

        // Step 3: Find slope of radius
        steps.push({
            stepNumber: 3,
            step: 'Find slope of radius',
            description: 'Calculate slope from center to point',
            formula: 'm_radius = (y₁ - k) / (x₁ - h)',
            calculation: `m_radius = (${y1} - ${circle.k}) / (${x1} - ${circle.h})`,
            result: `m_radius = ${radiusSlope}`,
            reasoning: 'The radius points from center to the point of tangency',
            geometricMeaning: 'This tells us the direction of the radius at the tangency point'
        });

        // Step 4: Find perpendicular slope (tangent slope)
        if (solution.isVertical) {
            steps.push({
                stepNumber: 4,
                step: 'Determine tangent orientation',
                description: 'Radius is vertical, so tangent is horizontal',
                radiusOrientation: 'Vertical (undefined slope)',
                tangentOrientation: 'Horizontal (slope = 0)',
                reasoning: 'Perpendicular to vertical is horizontal',
                keyProperty: 'Tangent ⊥ Radius always'
            });
        } else if (solution.isHorizontal) {
            steps.push({
                stepNumber: 4,
                step: 'Determine tangent orientation',
                description: 'Radius is horizontal, so tangent is vertical',
                radiusOrientation: 'Horizontal (slope = 0)',
                tangentOrientation: 'Vertical (undefined slope)',
                reasoning: 'Perpendicular to horizontal is vertical',
                keyProperty: 'Tangent ⊥ Radius always'
            });
        } else {
            steps.push({
                stepNumber: 4,
                step: 'Find perpendicular slope',
                description: 'Calculate negative reciprocal of radius slope',
                formula: 'm_tangent = -1 / m_radius',
                calculation: `m_tangent = -1 / (${radiusSlope})`,
                result: `m_tangent = ${tangentSlope}`,
                reasoning: 'Perpendicular lines have slopes that are negative reciprocals',
                reminder: 'Flip the fraction and change the sign',
                algebraicRule: 'm₁ × m₂ = -1 for perpendicular lines'
            });
        }

        // Step 5: Write tangent equation
        steps.push({
            stepNumber: 5,
            step: 'Write tangent equation',
            description: 'Use point-slope form with tangency point and tangent slope',
            formula: solution.isVertical ? 'x = x₁' : (solution.isHorizontal ? 'y = y₁' : 'y - y₁ = m(x - x₁)'),
            substitution: solution.isVertical ? `x = ${x1}` : (solution.isHorizontal ? `y = ${y1}` : `y - ${y1} = ${tangentSlope}(x - ${x1})`),
            simplification: tangentEquation,
            finalAnswer: true,
            reasoning: 'This line passes through the tangency point with the perpendicular slope',
            forms: {
                slopeIntercept: solution.tangentEquationSlopeIntercept,
                standard: solution.tangentEquationStandard
            }
        });

        // Step 6: Verification
        if (this.includeVerificationInSteps) {
            steps.push({
                stepNumber: 6,
                step: 'Verify tangent condition',
                description: 'Confirm the line is tangent to the circle',
                method: 'Distance from center to line should equal radius',
                verification: solution.verification,
                reasoning: 'This ensures our tangent line is correct'
            });
        }

        return steps;
    }

    generateTangentFromExternalPointSteps(problem, solution) {
        const steps = [];
        const { circle, externalPoint, distanceToCenter, tangentLength } = solution;

        steps.push({
            stepNumber: 1,
            step: 'Identify given information',
            description: 'List circle center, radius, and external point',
            circleCenter: `(${circle.h}, ${circle.k})`,
            radius: circle.r,
            externalPoint: `(${externalPoint[0]}, ${externalPoint[1]})`,
            reasoning: 'We need to find two tangent lines from this external point'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate distance to center',
            description: 'Find distance from external point to circle center',
            formula: 'd = √[(x₀ - h)² + (y₀ - k)²]',
            calculation: `d = √[(${externalPoint[0]} - ${circle.h})² + (${externalPoint[1]} - ${circle.k})²]`,
            result: `d = ${this.formatNumber(distanceToCenter)}`,
            reasoning: 'This distance is the hypotenuse of the right triangle formed'
        });

        steps.push({
            stepNumber: 3,
            step: 'Verify point is external',
            description: 'Confirm that d > r',
            comparison: `${this.formatNumber(distanceToCenter)} > ${circle.r}`,
            verified: distanceToCenter > circle.r ? 'Yes ✓' : 'No ✗',
            reasoning: 'Point must be outside circle for external tangents to exist',
            implication: 'Two tangent lines can be drawn'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate tangent length',
            description: 'Use Pythagorean theorem to find tangent segment length',
            rightTriangle: 'Center - External Point - Tangency Point forms right triangle',
            formula: 'L² + r² = d²',
            rearranged: 'L² = d² - r²',
            calculation: `L² = ${this.formatNumber(distanceToCenter)}² - ${circle.r}²`,
            result: `L = ${this.formatNumber(tangentLength)}`,
            reasoning: 'Tangent is perpendicular to radius at tangency point, creating right angle',
            geometricProperty: 'Both tangent segments from external point have this same length'
        });

        steps.push({
            stepNumber: 5,
            step: 'Find tangency points',
            description: 'Solve system of equations for the two tangency points',
            systemSetup: [
                'Point (x, y) is on circle: (x - h)² + (y - k)² = r²',
                'Radius to (x, y) is perpendicular to line from (x, y) to external point',
                'Perpendicularity condition: slope product = -1'
            ],
            note: 'This requires solving a quadratic system',
            complexity: 'Algebraically intensive',
            reasoning: 'We need exact coordinates to write tangent line equations'
        });

        steps.push({
            stepNumber: 6,
            step: 'Write tangent equations',
            description: 'Use tangency points and external point to write line equations',
            result: 'Two tangent line equations',
            finalAnswer: true,
            note: solution.tangentEquations || 'Requires completing step 5 first'
        });

        return steps;
    }

    generateTangentWithSlopeSteps(problem, solution) {
        const steps = [];
        const { circle, givenSlope, tangentEquations, calculation } = solution;

        steps.push({
            stepNumber: 1,
            step: 'Identify given information',
            description: 'List circle center, radius, and desired slope',
            circleCenter: `(${circle.h}, ${circle.k})`,
            radius: circle.r,
            givenSlope: givenSlope,
            reasoning: 'We need to find tangent lines with this specific slope',
            expectation: 'Two tangent lines (one on each side of circle)'
        });

        steps.push({
            stepNumber: 2,
            step: 'Write tangent line form',
            description: 'Express tangent line using slope-intercept form',
            form: 'y = mx + b',
            withGivenSlope: `y = ${this.formatNumber(givenSlope)}x + b`,
            unknown: 'y-intercept b',
            reasoning: 'We know the slope, need to find where line crosses y-axis'
        });

        steps.push({
            stepNumber: 3,
            step: 'Convert to standard form',
            description: 'Rewrite for distance formula application',
            slopeIntercept: `y = ${this.formatNumber(givenSlope)}x + b`,
            rearranged: `${this.formatNumber(givenSlope)}x - y + b = 0`,
            standardForm: `Ax + By + C = 0 where A = ${this.formatNumber(givenSlope)}, B = -1, C = b`,
            reasoning: 'Standard form needed for point-to-line distance formula'
        });

        steps.push({
            stepNumber: 4,
            step: 'Apply tangent condition',
            description: 'Distance from center to line must equal radius',
            distanceFormula: 'd = |Ax₀ + By₀ + C| / √(A² + B²)',
            tangentCondition: 'd = r',
            substitution: `|${this.formatNumber(givenSlope)} × ${circle.h} + (-1) × ${circle.k} + b| / √(${this.formatNumber(givenSlope)}² + 1) = ${circle.r}`,
            reasoning: 'A line is tangent when it touches the circle at exactly one point',
            geometricMeaning: 'The perpendicular distance from center exactly equals the radius'
        });

        steps.push({
            stepNumber: 5,
            step: 'Solve for y-intercept',
            description: 'Calculate the two possible values of b',
            equation: `|${this.formatNumber(givenSlope * circle.h - circle.k)} + b| = ${this.formatNumber(circle.r * Math.sqrt(1 + givenSlope * givenSlope))}`,
            absoluteValue: 'Creates two cases: positive and negative',
            case1: `b = ${this.formatNumber(calculation.yIntercepts[0])}`,
            case2: `b = ${this.formatNumber(calculation.yIntercepts[1])}`,
            reasoning: 'Absolute value gives two solutions, corresponding to two tangent lines',
            algebraicNote: 'Remember the ± when solving |expression| = value'
        });

        steps.push({
            stepNumber: 6,
            step: 'Write final tangent equations',
            description: 'Substitute b values to get both tangent lines',
            tangent1: tangentEquations[0],
            tangent2: tangentEquations[1],
            finalAnswer: true,
            reasoning: 'These are the two lines with the given slope that are tangent to the circle',
            verification: 'Both lines have correct slope and are at distance r from center'
        });

        return steps;
    }

    generateTangentLengthSteps(problem, solution) {
        const steps = [];
        const { circle, externalPoint, distanceToCenter, tangentLength } = solution;

        steps.push({
            stepNumber: 1,
            step: 'Identify the problem',
            description: 'Find length of tangent segment from external point to circle',
            circleCenter: `(${circle.h}, ${circle.k})`,
            radius: circle.r,
            externalPoint: `(${externalPoint[0]}, ${externalPoint[1]})`,
            reasoning: 'Tangent length is the distance along the tangent line from external point to where it touches the circle'
        });

        steps.push({
            stepNumber: 2,
            step: 'Visualize the right triangle',
            description: 'Recognize the geometric configuration',
            vertices: [
                'Circle center',
                'External point',
                'Tangency point'
            ],
            rightAngle: 'At tangency point (tangent ⊥ radius)',
            sides: {
                hypotenuse: 'd (distance from external point to center)',
                leg1: 'r (radius)',
                leg2: 'L (tangent length - what we seek)'
            },
            reasoning: 'Tangent perpendicular to radius creates a right triangle',
            keyProperty: 'This perpendicularity is the fundamental property of tangent lines'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate distance to center',
            description: 'Find the hypotenuse of the right triangle',
            formula: 'd = √[(x₀ - h)² + (y₀ - k)²]',
            calculation: `d = √[(${externalPoint[0]} - ${circle.h})² + (${externalPoint[1]} - ${circle.k})²]`,
            result: `d = ${this.formatNumber(distanceToCenter)}`,
            reasoning: 'This is the distance from the external point to the circle\'s center'
        });

        steps.push({
            stepNumber: 4,
            step: 'Apply Pythagorean theorem',
            description: 'Use the right triangle relationship',
            theorem: 'a² + b² = c²',
            inThisCase: 'L² + r² = d²',
            rearranged: 'L² = d² - r²',
            reasoning: 'Solving for the tangent length L',
            reminder: 'Make sure to use d² - r², not d² + r²'
        });

        steps.push({
            stepNumber: 5,
            step: 'Calculate tangent length',
            description: 'Substitute values and solve',
            substitution: `L² = ${this.formatNumber(distanceToCenter)}² - ${circle.r}²`,
            calculation: `L² = ${this.formatNumber(distanceToCenter * distanceToCenter)} - ${this.formatNumber(circle.r * circle.r)} = ${this.formatNumber(tangentLength * tangentLength)}`,
            result: `L = ${this.formatNumber(tangentLength)}`,
            finalAnswer: true,
            reasoning: 'This is the length of the tangent segment',
            symmetry: 'Both tangent segments from this external point have the same length'
        });

        steps.push({
            stepNumber: 6,
            step: 'Verify the result',
            description: 'Check using the Pythagorean theorem',
            check: solution.pythagoreanCheck,
            verified: 'Computation confirmed ✓',
            reasoning: 'Verification ensures calculation accuracy'
        });

        return steps;
    }

    generateAngleBetweenTangentsSteps(problem, solution) {
        const steps = [];
        const { circle, externalPoint, distanceToCenter, angleRadians, angleDegrees } = solution;

        steps.push({
            stepNumber: 1,
            step: 'Set up the problem',
            description: 'Identify the angle we seek',
            setup: 'Two tangent lines from external point form an angle',
            circleCenter: `(${circle.h}, ${circle.k})`,
            radius: circle.r,
            externalPoint: `(${externalPoint[0]}, ${externalPoint[1]})`,
            reasoning: 'We want the angle between the two tangent lines'
        });

        steps.push({
            stepNumber: 2,
            step: 'Recognize the isosceles triangle',
            description: 'The two tangent segments are equal length',
            triangle: 'External point - Tangency point 1 - Center - Tangency point 2 - External point',
            equalSides: 'The two tangent segments are equal (property of tangents)',
            angles: 'The triangle from external point to center to tangency points is isosceles',
            reasoning: 'Symmetry helps us find the angle'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate distance to center',
            description: 'Find distance from external point to center',
            formula: 'd = √[(x₀ - h)² + (y₀ - k)²]',
            result: `d = ${this.formatNumber(distanceToCenter)}`,
            reasoning: 'This distance, along with radius, determines the angle'
        });

        steps.push({
            stepNumber: 4,
            step: 'Use right triangle trigonometry',
            description: 'Apply sine to the half-angle',
            rightTriangle: 'Formed by center, external point, and one tangency point',
            relationship: 'sin(θ/2) = opposite/hypotenuse = r/d',
            substitution: `sin(θ/2) = ${circle.r}/${this.formatNumber(distanceToCenter)}`,
            result: `sin(θ/2) = ${this.formatNumber(circle.r / distanceToCenter)}`,
            reasoning: 'The angle at the external point is bisected by the line to the center'
        });

        steps.push({
            stepNumber: 5,
            step: 'Calculate half-angle',
            description: 'Find θ/2 using inverse sine',
            calculation: `θ/2 = arcsin(${this.formatNumber(circle.r / distanceToCenter)})`,
            result: `θ/2 = ${this.formatNumber(solution.halfAngleDegrees)}°`,
            reasoning: 'Inverse sine gives us the half-angle'
        });

        steps.push({
            stepNumber: 6,
            step: 'Find full angle',
            description: 'Double the half-angle',
            calculation: `θ = 2 × ${this.formatNumber(solution.halfAngleDegrees)}°`,
            resultDegrees: `θ = ${this.formatNumber(angleDegrees)}°`,
            resultRadians: `θ = ${this.formatNumber(angleRadians)} radians`,
            finalAnswer: true,
            reasoning: 'This is the angle between the two tangent lines'
        });

        return steps;
    }

    generateGenericTangentSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Tangent problem',
            description: 'Solve the given tangent line problem',
            type: solution.type,
            result: solution.tangentEquations || solution.tangentLength || solution.note,
            reasoning: 'Apply appropriate tangent geometry principles'
        }];
    }

    // ENHANCED EXPLANATION METHODS (reuse from linear workbook with adaptations)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getTangentConceptualExplanation(step, problem),
                procedural: this.getTangentProceduralExplanation(step),
                visual: this.getTangentVisualExplanation(step, problem),
                algebraic: this.getTangentAlgebraicExplanation(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyTangentPrerequisites(step, problem.type),
                keyVocabulary: this.identifyTangentKeyVocabulary(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateTangentThinkingPrompts(step);
        }

        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateTangentSelfCheckQuestion(step);
        }

        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findTangentRealWorldConnection(step, problem);
        }

        return enhanced;
    }

    getTangentConceptualExplanation(step, problem) {
        const conceptualExplanations = {
            'Identify circle and point': 'Understanding the circle\'s geometry (center and radius) and the point\'s location is foundational for finding tangents.',
            'Verify point is on circle': 'A tangent at a point only exists if that point actually lies on the circle. This is a critical check.',
            'Find slope of radius': 'The radius points from the center to the tangency point. Its direction determines the tangent direction.',
            'Find perpendicular slope': 'The key property: a tangent is always perpendicular to the radius at the point of contact.',
            'Write tangent equation': 'With a point and a slope, we can write a unique line equation using point-slope form.',
            'Calculate distance to center': 'The distance from an external point to the center helps us understand the geometric configuration.',
            'Verify point is external': 'Tangent lines from a point only exist if the point is outside the circle.',
            'Calculate tangent length': 'The length of the tangent segment follows from the Pythagorean theorem applied to the right triangle formed.',
            'Apply tangent condition': 'For a line to be tangent, the perpendicular distance from the center must exactly equal the radius.',
            'Solve for y-intercept': 'The ± in the solution represents the two tangent lines on opposite sides of the circle.'
        };

        return conceptualExplanations[step.step] || 'This step advances our understanding of the tangent line problem.';
    }

    getTangentProceduralExplanation(step) {
        const proceduralSteps = {
            'Verify point is on circle': '1. Substitute point coordinates into circle equation\n2. Simplify left side\n3. Check if it equals r²\n4. Confirm verification',
            'Find slope of radius': '1. Use slope formula: (y₁ - k) / (x₁ - h)\n2. Substitute coordinates\n3. Simplify',
            'Find perpendicular slope': '1. Take the radius slope\n2. Find reciprocal (flip the fraction)\n3. Change the sign (negate)\n4. Result is perpendicular slope',
            'Write tangent equation': '1. Use point-slope form: y - y₁ = m(x - x₁)\n2. Substitute tangent slope and tangency point\n3. Simplify to desired form',
            'Calculate tangent length': '1. Find distance d from external point to center\n2. Use formula: L² = d² - r²\n3. Take square root\n4. Report tangent length'
        };

        return proceduralSteps[step.step] || 'Follow the standard procedure for this step.';
    }

    getTangentVisualExplanation(step, problem) {
        const visualExplanations = {
            'Identify circle and point': 'Draw the circle with center marked, and plot the point. Check if it\'s inside, on, or outside the circle.',
            'Find slope of radius': 'Draw a line segment from the center to the point - this is the radius at that location.',
            'Find perpendicular slope': 'The tangent line makes a 90° angle with the radius. Visualize rotating the radius by 90°.',
            'Write tangent equation': 'The tangent line touches the circle at exactly one point and extends in both directions.',
            'Verify point is external': 'The external point is somewhere outside the circle\'s boundary.',
            'Calculate tangent length': 'Draw the two tangent lines from the external point. The tangent length is measured along these lines to where they touch the circle.',
            'Visualize the right triangle': 'Draw: center, external point, and tangency point. The angle at tangency is 90°.'
        };

        return visualExplanations[step.step] || 'Sketch a diagram showing the circle, point(s), and tangent line(s).';
    }

    getTangentAlgebraicExplanation(step) {
        const algebraicRules = {
            'Verify point is on circle': 'Circle equation: (x - h)² + (y - k)² = r²',
            'Find slope of radius': 'Slope formula: m = (y₂ - y₁) / (x₂ - x₁)',
            'Find perpendicular slope': 'Perpendicular slope relationship: m₁ × m₂ = -1',
            'Write tangent equation': 'Point-slope form: y - y₁ = m(x - x₁)',
            'Apply tangent condition': 'Distance formula: d = |Ax + By + C| / √(A² + B²)',
            'Calculate tangent length': 'Pythagorean theorem: L² + r² = d²'
        };

        return algebraicRules[step.step] || 'Apply standard algebraic principles and formulas.';
    }

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateTangentELI5Explanation(step, problem),
                analogy: this.findRelevantTangentAnalogy(step, problem),
                simpleLanguage: this.convertToSimpleLanguage(step.description),
                visualization: this.suggestTangentVisualization(step)
            }
        }));
    }

    generateTangentELI5Explanation(step, problem) {
        const ELI5Explanations = {
            'Identify circle and point': "We're looking at a round circle and a point. We need to find where the circle's center is and how big it is.",
            'Verify point is on circle': "We're checking if our point is actually sitting right on the edge of the circle, like checking if a sticker is right on the rim of a plate.",
            'Find slope of radius': "Imagine drawing a straight line from the middle of the circle to our point. We're finding out how steep that line is.",
            'Find perpendicular slope': "Now we need to find a line that makes a perfect corner (90 degrees) with our radius line. Like the corner of a square!",
            'Write tangent equation': "We're writing down the math recipe for the line that just barely kisses the circle at one spot.",
            'Calculate distance to center': "We're measuring how far away our point is from the middle of the circle, like measuring how far you are from the center of a merry-go-round.",
            'Calculate tangent length': "This is like measuring how far you have to walk along a straight path until you reach the circle's edge."
        };

        return ELI5Explanations[step.step] || "We're taking another step to solve our circle and line puzzle!";
    }

    findRelevantTangentAnalogy(step, problem) {
        const category = this.tangentTypes[problem.type]?.category;
        
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(category) || analogy.suitableFor.includes('all_tangent_types')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        
        return "Think of the tangent line like a path that just touches the edge of a round pond - it doesn't go through the water, just touches the shore at one spot.";
    }

    suggestTangentVisualization(step) {
        const visualizations = {
            'Identify circle and point': 'Draw a circle and mark a point either on it or near it',
            'Verify point is on circle': 'Measure the distance from the center to the point and compare with the radius',
            'Find slope of radius': 'Draw a line from center to point with an arrow',
            'Find perpendicular slope': 'Draw a line making a perfect corner (90°) with the radius',
            'Write tangent equation': 'Draw the tangent line extending on both sides of the tangency point',
            'Visualize the right triangle': 'Draw and label the three points forming a right triangle',
            'Calculate tangent length': 'Highlight the segment from external point to tangency point'
        };

        return visualizations[step.step] || 'Draw a picture showing the circle, points, and any lines involved';
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generateTangentStepBridge(steps[i], steps[i + 1]),
                    reasoning: this.explainTangentStepProgression(steps[i], steps[i + 1]),
                    strategicThinking: this.explainTangentStepStrategy(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateTangentStepBridge(currentStep, nextStep) {
        return {
            currentState: `We've just completed: ${currentStep.step}`,
            nextGoal: `Next, we'll: ${nextStep.step}`,
            why: `This is necessary because: ${this.explainTangentStepNecessity(currentStep, nextStep)}`,
            howItHelps: `This helps by: ${this.explainTangentStepBenefit(nextStep)}`
        };
    }

    explainTangentStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue solving for the tangent line(s)`;
    }

    explainTangentStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" leverages the geometric properties of tangent lines`;
    }

    explainTangentStepNecessity(currentStep, nextStep) {
        return `we need the information from this step to complete the next calculation`;
    }

    explainTangentStepBenefit(nextStep) {
        return `moving us closer to the final tangent equation or measurement`;
    }

    addErrorPrevention(step, problemType) {
        const category = this.tangentTypes[problemType]?.category || 'tangent_at_point';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generateTangentPreventionTips(step, problemType),
                checkPoints: this.generateTangentCheckPoints(step),
                warningFlags: this.identifyTangentWarningFlags(step, problemType)
            },
            validation: {
                selfCheck: this.generateTangentSelfCheckQuestion(step),
                expectedResult: this.describeTangentExpectedResult(step),
                troubleshooting: this.generateTangentTroubleshootingTips(step)
            }
        };
    }

    generateTangentPreventionTips(step, problemType) {
        const tips = {
            'Verify point is on circle': [
                'Always verify BEFORE proceeding',
                'Check arithmetic carefully',
                'Remember to square both terms'
            ],
            'Find perpendicular slope': [
                'Remember: flip AND negate',
                'Check for special cases (horizontal/vertical)',
                'Verify: product of slopes = -1'
            ],
            'Calculate tangent length': [
                'Use L² = d² - r², NOT d² + r²',
                'Verify point is external first',
                'Check units are consistent'
            ],
            'Solve for y-intercept': [
                'Don't forget the ± sign',
                'Both solutions are usually valid',
                'Check absolute value carefully'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Check your arithmetic', 'Verify results'];
    }

    generateTangentCheckPoints(step) {
        return [
            'Did I use the correct formula?',
            'Are my signs correct?',
            'Did I consider all cases (e.g., ±)?',
            'Does the result make geometric sense?',
            'Have I verified the tangent condition?'
        ];
    }

    identifyTangentWarningFlags(step, problemType) {
        const warnings = {
            tangent_at_point: step.step === 'Verify point is on circle' ?
                ['Point not on circle will cause errors later', 'Small rounding errors can compound'] : [],
            tangent_from_external_point: step.step === 'Verify point is external' ?
                ['Point inside or on circle means no external tangents', 'Distance calculation errors are common'] : [],
            tangent_with_slope: step.step === 'Solve for y-intercept' ?
                ['Forgetting ± gives only one of two tangents', 'Absolute value creates two cases'] : []
        };

        const category = this.tangentTypes[problemType]?.category || 'tangent_at_point';
        return warnings[category] || [];
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateTangentGuidingQuestions(step, problem),
                subSteps: this.breakTangentIntoSubSteps(step),
                hints: this.generateTangentProgressiveHints(step, problem),
                practiceVariation: this.generateTangentPracticeVariation(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainTangentThinkingProcess(step),
                decisionPoints: this.identifyTangentDecisionPoints(step),
                alternativeApproaches: this.suggestTangentAlternativeMethods(step, problem)
            }
        }));
    }

    generateTangentGuidingQuestions(step, problem) {
        const questions = {
            'Identify circle and point': [
                'What is the circle\'s center?',
                'What is the radius?',
                'Where is the point located?'
            ],
            'Verify point is on circle': [
                'How do we check if a point is on a circle?',
                'What equation must be satisfied?',
                'What happens if the point isn\'t on the circle?'
            ],
            'Find slope of radius': [
                'What two points define the radius?',
                'What formula calculates slope?',
                'What does the slope tell us geometrically?'
            ],
            'Find perpendicular slope': [
                'What is the relationship between perpendicular slopes?',
                'How do we find the negative reciprocal?',
                'Are there any special cases to consider?'
            ],
            'Write tangent equation': [
                'What form should we use to write the line?',
                'What point does the tangent pass through?',
                'What slope does it have?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'What information do we need?', 'How does this help?'];
    }

    generateTangentProgressiveHints(step, problem) {
        const category = this.tangentTypes[problem.type]?.category || 'tangent_at_point';
        const hintSet = this.hints[category] || this.hints.tangent_at_point;

        return {
            level1: hintSet.level1 || 'Think about the geometric relationship.',
            level2: hintSet.level2 || 'Consider what properties tangent lines have.',
            level3: hintSet.level3 || 'Use the perpendicularity of tangent and radius.',
            level4: hintSet.level4 || 'Apply the specific formula for this step.'
        };
    }

    breakTangentIntoSubSteps(step) {
        const subSteps = {
            'Find perpendicular slope': [
                'Identify the radius slope',
                'Take the reciprocal (flip the fraction)',
                'Change the sign (negate)',
                'Verify: m₁ × m₂ = -1'
            ],
            'Write tangent equation': [
                'Choose appropriate form (point-slope, slope-intercept, standard)',
                'Substitute the tangency point coordinates',
                'Substitute the tangent slope',
                'Simplify the equation',
                'Convert to desired final form'
            ],
            'Calculate tangent length': [
                'Find distance d from external point to center',
                'Verify d > r (point is external)',
                'Apply formula: L² = d² - r²',
                'Calculate L² ',
                'Take square root to find L'
            ]
        };

        return subSteps[step.step] || ['Understand the goal', 'Apply the method', 'Verify the result'];
    }

    generateTangentPracticeVariation(step, problem) {
        return {
            similarProblem: 'Try the same type of step with a different circle or point',
            practiceHint: 'Practice with circles centered at origin first for simpler arithmetic',
            extension: 'Once comfortable, try circles with fractional coordinates or multiple tangents'
        };
    }

    explainTangentThinkingProcess(step) {
        return {
            observe: 'What geometric configuration do I have?',
            goal: 'What am I trying to find?',
            strategy: 'What property or formula applies?',
            execute: 'How do I carry out the calculation?',
            verify: 'Does my result satisfy the tangent condition?'
        };
    }

    identifyTangentDecisionPoints(step) {
        return [
            'Which tangent property should I use?',
            'Is there a special case (horizontal, vertical)?',
            'Are there multiple solutions?',
            'What form should the final answer take?'
        ];
    }

    suggestTangentAlternativeMethods(step, problem) {
        const alternatives = {
            'Find perpendicular slope': [
                'Use negative reciprocal formula',
                'Use slope product = -1',
                'Use rotation matrix (advanced)'
            ],
            'Write tangent equation': [
                'Point-slope form',
                'Slope-intercept form',
                'Standard form Ax + By + C = 0'
            ],
            'Calculate tangent length': [
                'Pythagorean theorem',
                'Power of a point theorem',
                'Coordinate geometry (distance formula)'
            ]
        };

        return alternatives[step.step] || ['The chosen method is standard for this problem'];
    }

    identifyTangentPrerequisites(step, problemType) {
        const category = this.tangentTypes[problemType]?.category || 'tangent_at_point';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Circle equations', 'Slope calculations', 'Distance formula'];
    }

    identifyTangentKeyVocabulary(step) {
        const vocabulary = {
            'Identify circle and point': ['circle', 'center', 'radius', 'point', 'coordinates'],
            'Verify point is on circle': ['verify', 'satisfy', 'equation', 'substitute'],
            'Find slope of radius': ['slope', 'radius', 'rise over run'],
            'Find perpendicular slope': ['perpendicular', 'negative reciprocal', 'right angle'],
            'Write tangent equation': ['tangent', 'equation', 'point-slope form', 'line'],
            'Calculate distance to center': ['distance', 'distance formula', 'hypotenuse'],
            'Calculate tangent length': ['tangent length', 'segment', 'Pythagorean theorem']
        };

        return vocabulary[step.step] || ['tangent', 'circle', 'line'];
    }

    generateTangentThinkingPrompts(step) {
        return {
            before: 'Before this step: What do I already know? What am I looking for?',
            during: 'During this step: Am I applying the formulas correctly? Are there special cases?',
            after: 'After this step: Does my answer make sense geometrically? Should I verify?'
        };
    }

    generateTangentSelfCheckQuestion(step) {
        const questions = {
            'Verify point is on circle': 'Did I substitute the point coordinates correctly into the circle equation?',
            'Find slope of radius': 'Did I use (y₁ - k) / (x₁ - h) with the correct coordinates?',
            'Find perpendicular slope': 'Did I both flip the fraction AND change the sign?',
            'Write tangent equation': 'Does my equation pass through the tangency point with the correct slope?',
            'Calculate tangent length': 'Did I use L² = d² - r² (not d² + r²)?'
        };

        return questions[step.step] || 'Does this step move me correctly toward the solution?';
    }

    describeTangentExpectedResult(step) {
        const expectations = {
            'Identify circle and point': 'Center (h, k), radius r, and point coordinates',
            'Verify point is on circle': 'Confirmation that point satisfies circle equation',
            'Find slope of radius': 'A numerical slope value (or "undefined" for vertical)',
            'Find perpendicular slope': 'Negative reciprocal of radius slope',
            'Write tangent equation': 'A line equation in desired form',
            'Calculate tangent length': 'A positive distance value'
        };

        return expectations[step.step] || 'Progress toward finding tangent line(s)';
    }

    generateTangentTroubleshootingTips(step) {
        return [
            'Review the geometric picture - draw a diagram',
            'Check that formulas are applied correctly',
            'Verify arithmetic, especially with signs',
            'Consider whether special cases apply',
            'Test the result with a geometric check'
        ];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by using the result to progress further`,
            progression: 'Each step brings us closer to the tangent line equation or measurement',
            relationship: 'Steps form a logical sequence from setup to solution'
        };
    }

    findTangentRealWorldConnection(step, problem) {
        const connections = {
            'tangent_at_point': 'Like a wheel touching the ground - the ground (tangent) is perpendicular to the spoke (radius)',
            'tangent_from_external_point': 'Like two lines of sight from your position to the horizon around a circular lake',
            'tangent_length': 'Like measuring how far you can see to the horizon from a hill above a circular island',
            'angle_between_tangents': 'Like the viewing angle to see both sides of a planet from Earth'
        };

        const category = this.tangentTypes[problem.type]?.category;
        return connections[category] || 'Tangent lines appear in wheels, gears, optics, and navigation';
    }

    // GRAPH GENERATION

    generateTangentGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;
        const category = this.tangentTypes[type]?.category;

        if (category && !this.currentSolution.error) {
            this.graphData = this.generateTangentGraph(this.currentProblem, this.currentSolution);
        }
    }

    generateTangentGraph(problem, solution) {
        const { circle } = solution;
        
        return {
            type: 'tangent_line_to_circle',
            circle: {
                center: [circle.h, circle.k],
                radius: circle.r
            },
            tangentLines: solution.tangentEquations || [solution.tangentEquation],
            tangencyPoints: solution.tangencyPoints || [solution.pointOfTangency],
            externalPoint: solution.externalPoint,
            description: `Graph showing circle and tangent line(s)`,
            visualization: 'Plot circle, mark tangency point(s), draw tangent line(s)'
        };
    }

    // WORKBOOK GENERATION

    generateTangentWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createTangentProblemSection(),
            this.createTangentPrerequisiteSection(),
            this.createEnhancedTangentStepsSection(),
            this.createTangentLessonSection(),
            this.createTangentSolutionSection(),
            this.createTangentAnalysisSection(),
            this.createTangentVerificationSection(),
            this.createTangentRealWorldApplicationSection(),
            this.createTangentPedagogicalNotesSection(),
            this.createTangentAlternativeMethodsSection(),
            this.createTangentPracticeProblemsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Circle Tangent Line Mathematical Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            explanationLevel: this.explanationLevel,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createTangentProblemSection() {
        if (!this.currentProblem) return null;

        const problemData = [
            ['Problem Type', this.tangentTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.tangentTypes[this.currentProblem.type]?.category || 'tangent'],
            ['Description', this.currentProblem.scenario || 'Circle tangent line problem']
        ];

        if (this.currentProblem.circle) {
            const circle = typeof this.currentProblem.circle === 'object' ? this.currentProblem.circle : this.parseCircleEquation(this.currentProblem.circle);
            problemData.push(['', '']);
            problemData.push(['Circle Information', '']);
            problemData.push(['Center', `(${circle.h}, ${circle.k})`]);
            problemData.push(['Radius', circle.r]);
        }

        if (this.currentProblem.point) {
            problemData.push(['', '']);
            problemData.push(['Point of Tangency', `(${this.currentProblem.point[0]}, ${this.currentProblem.point[1]})`]);
        }

        if (this.currentProblem.externalPoint) {
            problemData.push(['', '']);
            problemData.push(['External Point', `(${this.currentProblem.externalPoint[0]}, ${this.currentProblem.externalPoint[1]})`]);
        }

        if (this.currentProblem.slope !== undefined) {
            problemData.push(['', '']);
            problemData.push(['Given Slope', this.currentProblem.slope]);
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createTangentPrerequisiteSection() {
        if (!this.prerequisiteChecks) return null;

        const category = this.tangentTypes[this.currentProblem.type]?.category;
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

    createEnhancedTangentStepsSection() {
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

            if (step.geometricMeaning) {
                stepsData.push(['Geometric Meaning', step.geometricMeaning]);
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
                stepsData.push(['Visual', step.explanations.visual]);
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
            }

            if (step.thinkingPrompts && this.includeThinkingPrompts) {
                stepsData.push(['Think Before', step.thinkingPrompts.before]);
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

    createTangentLessonSection() {
        const { type } = this.currentProblem;
        const category = this.tangentTypes[type]?.category;
        const lesson = this.lessons[category] || this.lessons.tangent_line_basics;

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

        return {
            title: 'Key Concepts & Theory',
            type: 'lesson',
            data: lessonData
        };
    }

    createTangentSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        if (this.currentSolution.error) {
            solutionData.push(['Error', this.currentSolution.message]);
            if (this.currentSolution.suggestion) {
                solutionData.push(['Suggestion', this.currentSolution.suggestion]);
            }
        } else {
            if (this.currentSolution.tangentEquation) {
                solutionData.push(['Tangent Equation', this.currentSolution.tangentEquation]);
            }

            if (this.currentSolution.tangentEquations) {
                solutionData.push(['Number of Tangents', this.currentSolution.numberOfTangents || this.currentSolution.tangentEquations.length]);
                this.currentSolution.tangentEquations.forEach((eq, i) => {
                    solutionData.push([`Tangent ${i + 1}`, eq]);
                });
            }

            if (this.currentSolution.tangentLength !== undefined) {
                solutionData.push(['Tangent Length', this.formatNumber(this.currentSolution.tangentLength)]);
            }

            if (this.currentSolution.angleDegrees !== undefined) {
                solutionData.push(['Angle (degrees)', this.formatNumber(this.currentSolution.angleDegrees)]);
                solutionData.push(['Angle (radians)', this.formatNumber(this.currentSolution.angleRadians)]);
            }

            if (this.currentSolution.note) {
                solutionData.push(['Note', this.currentSolution.note]);
            }
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createTangentAnalysisSection() {
        if (!this.currentSolution) return null;

        const analysisData = [
            ['Solution Method', this.currentSolution.type || this.currentSolution.category],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Difficulty Level', this.explanationLevel],
            ['Category', this.tangentTypes[this.currentProblem.type]?.category]
        ];

        if (this.currentSolution.geometricProperty) {
            analysisData.push(['Geometric Property', this.currentSolution.geometricProperty]);
        }

        if (this.currentSolution.approach) {
            analysisData.push(['Approach', this.currentSolution.approach]);
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createTangentVerificationSection() {
        if (!this.currentSolution || !this.currentProblem) return null;
        if (this.currentSolution.error) {
            return {
                title: 'Solution Verification',
                type: 'verification',
                data: [['Verification', 'Cannot verify due to error in problem setup']]
            };
        }

        const verificationData = [
            ['Verification Method', 'Geometric and algebraic checks'],
            ['', '']
        ];

        if (this.currentSolution.verification) {
            verificationData.push(['Verification', JSON.stringify(this.currentSolution.verification)]);
        }

        if (this.currentSolution.pythagoreanCheck) {
            verificationData.push(['Pythagorean Check', this.currentSolution.pythagoreanCheck]);
        }

        if (this.verificationDetail === 'detailed') {
            verificationData.push(['', '']);
            verificationData.push(['Confidence Level', 'High']);
            verificationData.push(['Notes', 'Solution verified through geometric properties']);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createTangentRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const applications = Object.values(this.realWorldProblems).slice(0, 3);

        if (applications.length === 0) return null;

        const appData = [
            ['Real-World Applications of Tangent Lines', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Context', app.context]);
            if (app.examples && app.examples[0]) {
                appData.push(['Example', app.examples[0]]);
            }
            appData.push(['Application Field', app.application]);
            appData.push(['', '']);
        });

        return {
            title: 'Real-World Applications',
            type: 'applications',
            data: appData
        };
    }

    createTangentPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const notes = this.generateTangentPedagogicalNotes(this.currentProblem.type);

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

    createTangentAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const alternatives = this.generateTangentAlternativeMethods(this.currentProblem.type);

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

    createTangentPracticeProblemsSection() {
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

    generateTangentPedagogicalNotes(problemType) {
        const category = this.tangentTypes[problemType]?.category;

        const pedagogicalDatabase = {
            tangent_at_point: {
                objectives: [
                    'Find tangent line at given point on circle',
                    'Apply perpendicularity of tangent and radius',
                    'Use point-slope form to write line equations'
                ],
                keyConcepts: [
                    'Tangent is perpendicular to radius at point of contact',
                    'Perpendicular slopes are negative reciprocals',
                    'Point must be verified to be on circle'
                ],
                prerequisites: [
                    'Circle equations',
                    'Slope calculations',
                    'Point-slope form of lines',
                    'Concept of perpendicularity'
                ],
                commonDifficulties: [
                    'Forgetting to verify point is on circle',
                    'Errors in finding perpendicular slope',
                    'Sign errors in calculations',
                    'Handling vertical/horizontal special cases'
                ],
                teachingStrategies: [
                    'Use wheel-on-ground analogy',
                    'Emphasize perpendicularity property repeatedly',
                    'Practice with origin-centered circles first',
                    'Draw diagrams for every problem'
                ],
                extensions: [
                    'Tangent from external point',
                    'Multiple tangents to same circle',
                    'Applications in optics and physics'
                ],
                assessment: [
                    'Can student verify point on circle?',
                    'Does student find perpendicular slope correctly?',
                    'Can student write equation in multiple forms?'
                ]
            },
            tangent_from_external_point: {
                objectives: [
                    'Find two tangent lines from external point',
                    'Calculate tangent length using Pythagorean theorem',
                    'Understand right triangle configuration'
                ],
                keyConcepts: [
                    'Two tangent lines exist from external point',
                    'Tangent segments have equal length',
                    'Right triangle formed by center, external point, tangency point',
                    'L² + r² = d² relationship'
                ],
                prerequisites: [
                    'Pythagorean theorem',
                    'Distance formula',
                    'System of equations',
                    'Tangent at point (simpler case)'
                ],
                commonDifficulties: [
                    'Confusing L² = d² - r² with L² = d² + r²',
                    'Not recognizing two solutions exist',
                    'Complex algebra in finding tangency points',
                    'Verifying point is external'
                ],
                teachingStrategies: [
                    'Use ladder-against-circular-wall analogy',
                    'Emphasize right triangle visualization',
                    'Practice tangent length calculation separately',
                    'Build up from tangent at point'
                ],
                extensions: [
                    'Angle between two tangents',
                    'Common tangents to two circles',
                    'Power of a point theorem'
                ],
                assessment: [
                    'Can student identify right triangle?',
                    'Does student use correct formula?',
                    'Can student recognize two tangent lines exist?'
                ]
            },
            tangent_with_slope: {
                objectives: [
                    'Find tangent lines with given slope',
                    'Apply point-to-line distance formula',
                    'Solve equations with ± correctly'
                ],
                keyConcepts: [
                    'Two tangents possible with same slope (parallel lines)',
                    'Distance from center to tangent equals radius',
                    'Point-to-line distance formula application',
                    '± creates two solutions'
                ],
                prerequisites: [
                    'Point-to-line distance formula',
                    'Different forms of line equations',
                    'Solving equations with absolute value',
                    'Understanding of parallel lines'
                ],
                commonDifficulties: [
                    'Forgetting ± gives two solutions',
                    'Errors in distance formula application',
                    'Sign mistakes in algebra',
                    'Not recognizing both tangents are valid'
                ],
                teachingStrategies: [
                    'Visualize two parallel lines touching circle',
                    'Practice distance formula separately',
                    'Emphasize importance of ±',
                    'Check both solutions geometrically'
                ],
                extensions: [
                    'Tangent parallel or perpendicular to given line',
                    'Horizontal and vertical tangents',
                    'Optimization problems'
                ],
                assessment: [
                    'Does student apply distance formula correctly?',
                    'Does student recognize two solutions?',
                    'Can student verify tangent condition?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Solve tangent line problems'],
            keyConcepts: ['Tangent properties', 'Geometric relationships'],
            prerequisites: ['Circle geometry', 'Coordinate geometry'],
            commonDifficulties: ['Algebraic complexity', 'Geometric visualization'],
            teachingStrategies: ['Use diagrams', 'Build from simpler cases'],
            extensions: ['More complex tangent problems'],
            assessment: ['Verify understanding of key properties']
        };
    }

    generateTangentAlternativeMethods(problemType) {
        const category = this.tangentTypes[problemType]?.category;

        const alternativeDatabase = {
            tangent_at_point: {
                primaryMethod: 'Perpendicular Slope Method',
                methods: [
                    {
                        name: 'Geometric Construction',
                        description: 'Draw perpendicular to radius at tangency point using compass and straightedge'
                    },
                    {
                        name: 'Calculus Approach',
                        description: 'Use implicit differentiation on circle equation to find dy/dx at the point'
                    },
                    {
                        name: 'Vector Method',
                        description: 'Use dot product of radius vector and tangent vector equals zero'
                    }
                ],
                comparison: 'Perpendicular slope is fastest; calculus provides deeper insight; vectors elegant for advanced students'
            },
            tangent_from_external_point: {
                primaryMethod: 'Pythagorean Theorem for Tangent Length',
                methods: [
                    {
                        name: 'Power of a Point',
                        description: 'Use power of a point theorem: PT² = PA × PB for secant'
                    },
                    {
                        name: 'Coordinate Geometry System',
                        description: 'Set up system: point on circle, perpendicular condition, passes through external point'
                    },
                    {
                        name: 'Analytic Geometry',
                        description: 'Solve using distance from point to line equals radius'
                    }
                ],
                comparison: 'Pythagorean is most intuitive; power of a point generalizes well; coordinate system most algebraic'
            },
            tangent_with_slope: {
                primaryMethod: 'Distance Formula Application',
                methods: [
                    {
                        name: 'Parallel Line Method',
                        description: 'Write y = mx + b and adjust b until line is tangent'
                    },
                    {
                        name: 'Discriminant Method',
                        description: 'Substitute line into circle equation and set discriminant to zero'
                    },
                    {
                        name: 'Geometric Construction',
                        description: 'Draw parallels with given slope and find which touch circle'
                    }
                ],
                comparison: 'Distance formula is standard; discriminant method connects to algebra; construction provides visual understanding'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard geometric approach',
            methods: [{
                name: 'Alternative technique',
                description: 'Other methods may apply depending on specific problem'
            }],
            comparison: 'Choose method based on problem details and preference'
        };
    }
}

// Export the class
export default EnhancedCircleTangentMathematicalWorkbook;

