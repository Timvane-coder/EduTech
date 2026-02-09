// Enhanced Circle Equation Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedCircleEquationMathematicalWorkbook {
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
        this.initializeCircleSolvers();
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
        this.initializeCircleLessons();
    }

    initializeCircleLessons() {
        this.lessons = {
            standard_form: {
                title: "Standard Form of Circle Equation",
                concepts: [
                    "Standard form: (x - h)² + (y - k)² = r²",
                    "Center at point (h, k)",
                    "Radius r (must be positive)",
                    "Represents all points equidistant from center"
                ],
                theory: "The standard form directly reveals the circle's center and radius. It comes from the distance formula applied to all points on the circle.",
                keyFormulas: {
                    "Standard Form": "(x - h)² + (y - k)² = r²",
                    "Center": "(h, k)",
                    "Radius": "r = √(radius squared)",
                    "Distance Formula": "d = √[(x₂ - x₁)² + (y₂ - y₁)²]"
                },
                solvingSteps: [
                    "Identify h and k from the squared binomials",
                    "Find r² on the right side",
                    "Calculate r = √(r²)",
                    "State center (h, k) and radius r",
                    "Verify with a point if given"
                ],
                applications: [
                    "GPS location circles (signal range)",
                    "Broadcast tower coverage areas",
                    "Ripples in water",
                    "Planetary orbits (approximation)"
                ]
            },

            general_form: {
                title: "General Form of Circle Equation",
                concepts: [
                    "General form: x² + y² + Dx + Ey + F = 0",
                    "Expanded version of standard form",
                    "Contains linear terms in x and y",
                    "Must have x² and y² with coefficient 1"
                ],
                theory: "General form results from expanding the standard form. Converting between forms is essential for different applications.",
                keyFormulas: {
                    "General Form": "x² + y² + Dx + Ey + F = 0",
                    "Conversion to Standard": "Complete the square",
                    "Center from General": "h = -D/2, k = -E/2",
                    "Radius from General": "r = √(h² + k² - F)"
                },
                solvingSteps: [
                    "Group x terms and y terms",
                    "Complete the square for x",
                    "Complete the square for y",
                    "Simplify to standard form",
                    "Identify center and radius"
                ],
                applications: [
                    "Computer graphics calculations",
                    "Engineering drawings",
                    "Optimization problems",
                    "Coordinate geometry proofs"
                ]
            },

            finding_center_radius: {
                title: "Finding Center and Radius",
                concepts: [
                    "From standard form: direct reading",
                    "From general form: completing the square",
                    "From three points: system of equations",
                    "From graph: visual inspection"
                ],
                theory: "The center and radius completely define a circle. Different forms and given information require different extraction methods.",
                keyFormulas: {
                    "Center (Standard)": "(h, k) from (x - h)² + (y - k)²",
                    "Radius (Standard)": "r from r²",
                    "Center (General)": "(-D/2, -E/2)",
                    "Radius (General)": "√((D/2)² + (E/2)² - F)"
                },
                solvingSteps: [
                    "Identify the form of equation",
                    "Apply appropriate method",
                    "Calculate center coordinates",
                    "Calculate radius length",
                    "Verify circle exists (r > 0)"
                ],
                applications: [
                    "Locating center of circular objects",
                    "Calculating coverage radius",
                    "Finding wheel centers",
                    "Navigation and mapping"
                ]
            },

            converting_forms: {
                title: "Converting Between Forms",
                concepts: [
                    "Standard to general: expand and simplify",
                    "General to standard: complete the square",
                    "Each form has advantages",
                    "Conversion reveals different properties"
                ],
                theory: "Converting forms allows us to use the most convenient representation for a given task.",
                keyFormulas: {
                    "Expansion": "(x - h)² = x² - 2hx + h²",
                    "Completing Square": "x² + Dx = (x + D/2)² - (D/2)²",
                    "D coefficient": "D = -2h",
                    "E coefficient": "E = -2k"
                },
                solvingSteps: [
                    "Identify source form",
                    "Apply expansion or completing square",
                    "Simplify algebraically",
                    "Write in target form",
                    "Verify by conversion back"
                ],
                applications: [
                    "Solving circle-line intersections",
                    "Finding tangent lines",
                    "Computer algorithm implementation",
                    "Calculus applications"
                ]
            },

            finding_equation_from_properties: {
                title: "Writing Equation from Given Properties",
                concepts: [
                    "Given center and radius: direct substitution",
                    "Given diameter endpoints: midpoint and distance",
                    "Given three points: system of equations",
                    "Given center and point on circle: distance formula"
                ],
                theory: "Different given information requires different approaches to construct the circle equation.",
                keyFormulas: {
                    "Center-Radius": "(x - h)² + (y - k)² = r²",
                    "Midpoint": "((x₁ + x₂)/2, (y₁ + y₂)/2)",
                    "Distance": "d = √[(x₂ - x₁)² + (y₂ - y₁)²]",
                    "Three Points": "x² + y² + Dx + Ey + F = 0 (solve system)"
                },
                solvingSteps: [
                    "Identify what is given",
                    "Determine what needs to be found",
                    "Apply appropriate formulas",
                    "Construct the equation",
                    "Verify with given information"
                ],
                applications: [
                    "Engineering design specifications",
                    "GPS triangulation",
                    "Archaeological site mapping",
                    "Sports field layout"
                ]
            },

            circle_line_intersection: {
                title: "Circle and Line Intersection",
                concepts: [
                    "Substitute line equation into circle",
                    "Solve resulting quadratic",
                    "Two solutions: secant (crosses)",
                    "One solution: tangent (touches)",
                    "No real solutions: no intersection"
                ],
                theory: "The intersection of a circle and line is found algebraically by solving a system of equations.",
                keyFormulas: {
                    "Substitution": "Replace y in circle with line equation",
                    "Quadratic": "Ax² + Bx + C = 0",
                    "Discriminant": "Δ = B² - 4AC",
                    "Solutions": "x = (-B ± √Δ)/(2A)"
                },
                solvingSteps: [
                    "Express line as y = mx + b or x = c",
                    "Substitute into circle equation",
                    "Expand and collect like terms",
                    "Solve quadratic equation",
                    "Find corresponding y-values",
                    "Interpret number of solutions"
                ],
                applications: [
                    "Laser-beam target intersection",
                    "Shadow and circular object",
                    "Satellite path crossing coverage area",
                    "Structural engineering"
                ]
            },

            tangent_lines: {
                title: "Tangent Lines to Circles",
                concepts: [
                    "Tangent touches circle at exactly one point",
                    "Tangent perpendicular to radius at point",
                    "From external point: two tangents",
                    "From point on circle: one tangent"
                ],
                theory: "Tangent lines are perpendicular to the radius at the point of tangency. This property allows us to find their equations.",
                keyFormulas: {
                    "Perpendicular Slopes": "m₁ × m₂ = -1",
                    "Radius Slope": "m_r = (y - k)/(x - h)",
                    "Tangent Slope": "m_t = -(x - h)/(y - k)",
                    "Point-Slope Form": "y - y₁ = m(x - x₁)"
                },
                solvingSteps: [
                    "Find point of tangency (if not given)",
                    "Calculate radius slope to that point",
                    "Find perpendicular slope",
                    "Write line equation using point-slope form",
                    "Verify tangency (one intersection point)"
                ],
                applications: [
                    "Gear design and motion",
                    "Optics and light reflection",
                    "Road curves and transitions",
                    "Architectural arches"
                ]
            },

            circle_circle_intersection: {
                title: "Two Circles Intersection",
                concepts: [
                    "Two distinct points: circles intersect",
                    "One point: circles tangent (internal or external)",
                    "No points: circles separate or one inside other",
                    "Infinite points: coincident circles"
                ],
                theory: "Two circles can intersect, be tangent, be separate, or coincide, depending on their relative positions and radii.",
                keyFormulas: {
                    "Distance Between Centers": "d = √[(h₂ - h₁)² + (k₂ - k₁)²]",
                    "Intersect Condition": "|r₁ - r₂| < d < r₁ + r₂",
                    "External Tangent": "d = r₁ + r₂",
                    "Internal Tangent": "d = |r₁ - r₂|"
                },
                solvingSteps: [
                    "Find centers and radii of both circles",
                    "Calculate distance between centers",
                    "Compare with sum and difference of radii",
                    "Determine intersection type",
                    "If intersecting, solve system to find points"
                ],
                applications: [
                    "Overlapping broadcast zones",
                    "Gear meshing",
                    "Venn diagrams (set theory)",
                    "Collision detection in games"
                ]
            },

            area_circumference: {
                title: "Area and Circumference from Equation",
                concepts: [
                    "Area depends on radius: A = πr²",
                    "Circumference depends on radius: C = 2πr",
                    "Extract radius from equation first",
                    "Units squared for area, linear for circumference"
                ],
                theory: "Once the radius is known from the equation, standard formulas give area and circumference.",
                keyFormulas: {
                    "Area": "A = πr²",
                    "Circumference": "C = 2πr = πd",
                    "Diameter": "d = 2r",
                    "From Standard Form": "r² is directly given"
                },
                solvingSteps: [
                    "Convert to standard form if needed",
                    "Identify r² or calculate r",
                    "Apply A = πr²",
                    "Apply C = 2πr",
                    "Express with appropriate units"
                ],
                applications: [
                    "Calculating land area within radius",
                    "Fencing circular gardens",
                    "Pizza size comparisons",
                    "Wheel and tire specifications"
                ]
            },

            sector_arc_length: {
                title: "Sector Area and Arc Length",
                concepts: [
                    "Sector is pie-slice portion of circle",
                    "Arc is curved edge of sector",
                    "Both depend on central angle",
                    "Angle can be in degrees or radians"
                ],
                theory: "Sectors and arcs are portions of circles determined by central angles. Their measures are proportional to the angle.",
                keyFormulas: {
                    "Arc Length (radians)": "s = rθ",
                    "Arc Length (degrees)": "s = (θ/360°) × 2πr",
                    "Sector Area (radians)": "A = (1/2)r²θ",
                    "Sector Area (degrees)": "A = (θ/360°) × πr²"
                },
                solvingSteps: [
                    "Identify radius from circle equation",
                    "Determine central angle (convert if needed)",
                    "Apply arc length formula",
                    "Apply sector area formula",
                    "Include proper units"
                ],
                applications: [
                    "Pendulum swing paths",
                    "Windshield wiper coverage",
                    "Pie charts and data visualization",
                    "Circular saw blade angles"
                ]
            },

            parametric_form: {
                title: "Parametric Equations of Circle",
                concepts: [
                    "Parametric form uses parameter t",
                    "x = h + r cos(t)",
                    "y = k + r sin(t)",
                    "t ranges from 0 to 2π for full circle"
                ],
                theory: "Parametric equations express x and y separately as functions of a parameter, useful for tracing the circle.",
                keyFormulas: {
                    "Parametric x": "x = h + r cos(t)",
                    "Parametric y": "y = k + r sin(t)",
                    "Parameter Range": "0 ≤ t ≤ 2π",
                    "Conversion to Standard": "Eliminate t using cos²t + sin²t = 1"
                },
                solvingSteps: [
                    "Identify center (h, k) and radius r",
                    "Write x = h + r cos(t)",
                    "Write y = k + r sin(t)",
                    "Specify parameter range",
                    "Trace points for various t values"
                ],
                applications: [
                    "Computer graphics rendering",
                    "Animation and motion paths",
                    "Robotics circular trajectories",
                    "3D modeling"
                ]
            },

            polar_form: {
                title: "Polar Form of Circle Equation",
                concepts: [
                    "Polar coordinates: (r, θ)",
                    "Circle centered at origin: r = constant",
                    "Circle through origin: r = 2a cos(θ) or r = 2a sin(θ)",
                    "General circle: complex polar form"
                ],
                theory: "Polar coordinates provide an alternative representation, especially simple for circles centered at the origin.",
                keyFormulas: {
                    "Circle at Origin": "r = R (constant)",
                    "Through Origin (x-axis)": "r = 2a cos(θ)",
                    "Through Origin (y-axis)": "r = 2a sin(θ)",
                    "Conversion": "x = r cos(θ), y = r sin(θ)"
                },
                solvingSteps: [
                    "Identify circle position relative to origin",
                    "Apply appropriate polar form",
                    "Convert if needed using x = r cos(θ), y = r sin(θ)",
                    "Interpret in polar coordinates",
                    "Plot in polar grid if needed"
                ],
                applications: [
                    "Radar display systems",
                    "Navigation and bearings",
                    "Antenna radiation patterns",
                    "Mechanical linkages"
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
                circleBg: '#e8f4f8',
                circleText: '#1a5f7a'
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
                circleBg: '#dceefb',
                circleText: '#0c5460'
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
            // Circle-specific
            'radius': 'r', 'diameter': 'd', 'circumference': 'C', 'area': 'A'
        };
    }

    initializeCircleSolvers() {
        this.circleTypes = {
            // Standard form identification
            standard_form_identify: {
                patterns: [
                    /\(x\s*[-+]\s*\d+\.?\d*\)\s*\^?\s*2\s*\+\s*\(y\s*[-+]\s*\d+\.?\d*\)\s*\^?\s*2\s*=\s*\d+\.?\d*/,
                    /\(x\s*[-+]\s*\d+\.?\d*\)\²\s*\+\s*\(y\s*[-+]\s*\d+\.?\d*\)\²\s*=\s*\d+\.?\d*/,
                    /standard.*form/i
                ],
                solver: this.solveStandardFormIdentify.bind(this),
                name: 'Identify Center and Radius from Standard Form',
                category: 'standard_form',
                description: 'Extract center (h,k) and radius r from (x-h)² + (y-k)² = r²'
            },

            // General form identification
            general_form_identify: {
                patterns: [
                    /x\s*\^?\s*2\s*\+\s*y\s*\^?\s*2\s*[+-].*=\s*0/,
                    /x²\s*\+\s*y².*=\s*0/,
                    /general.*form/i
                ],
                solver: this.solveGeneralFormIdentify.bind(this),
                name: 'Identify Center and Radius from General Form',
                category: 'general_form',
                description: 'Convert x² + y² + Dx + Ey + F = 0 to standard form'
            },

            // Converting standard to general
            standard_to_general: {
                patterns: [
                    /convert.*standard.*general/i,
                    /expand.*circle/i,
                    /standard.*to.*general/i
                ],
                solver: this.solveStandardToGeneral.bind(this),
                name: 'Convert Standard Form to General Form',
                category: 'converting_forms',
                description: 'Expand (x-h)² + (y-k)² = r² to general form'
            },

            // Converting general to standard
            general_to_standard: {
                patterns: [
                    /convert.*general.*standard/i,
                    /complete.*square.*circle/i,
                    /general.*to.*standard/i
                ],
                solver: this.solveGeneralToStandard.bind(this),
                name: 'Convert General Form to Standard Form',
                category: 'converting_forms',
                description: 'Complete the square to get (x-h)² + (y-k)² = r²'
            },

            // Find equation from center and radius
            equation_from_center_radius: {
                patterns: [
                    /center.*radius/i,
                    /write.*equation.*circle/i,
                    /given.*center.*radius/i
                ],
                solver: this.solveEquationFromCenterRadius.bind(this),
                name: 'Write Equation Given Center and Radius',
                category: 'finding_equation_from_properties',
                description: 'Create (x-h)² + (y-k)² = r² from center (h,k) and radius r'
            },

            // Find equation from diameter endpoints
            equation_from_diameter: {
                patterns: [
                    /diameter.*endpoints/i,
                    /equation.*from.*diameter/i,
                    /endpoints.*diameter/i
                ],
                solver: this.solveEquationFromDiameter.bind(this),
                name: 'Write Equation Given Diameter Endpoints',
                category: 'finding_equation_from_properties',
                description: 'Find center (midpoint) and radius (half distance), then write equation'
            },

            // Find equation from three points
            equation_from_three_points: {
                patterns: [
                    /three.*points/i,
                    /equation.*three.*points/i,
                    /circle.*through.*three/i
                ],
                solver: this.solveEquationFromThreePoints.bind(this),
                name: 'Write Equation Given Three Points',
                category: 'finding_equation_from_properties',
                description: 'Solve system of three equations to find D, E, F'
            },

            // Find equation from center and point on circle
            equation_from_center_point: {
                patterns: [
                    /center.*point.*on.*circle/i,
                    /center.*passes.*through/i,
                    /circle.*center.*point/i
                ],
                solver: this.solveEquationFromCenterPoint.bind(this),
                name: 'Write Equation Given Center and Point on Circle',
                category: 'finding_equation_from_properties',
                description: 'Find radius using distance formula, then write equation'
            },

            // Circle-line intersection
            circle_line_intersection: {
                patterns: [
                    /circle.*line.*intersection/i,
                    /line.*intersect.*circle/i,
                    /where.*line.*meets.*circle/i
                ],
                solver: this.solveCircleLineIntersection.bind(this),
                name: 'Find Circle-Line Intersection Points',
                category: 'circle_line_intersection',
                description: 'Substitute line into circle equation and solve'
            },

            // Tangent line at point
            tangent_at_point: {
                patterns: [
                    /tangent.*at.*point/i,
                    /tangent.*line.*to.*circle/i,
                    /equation.*tangent/i
                ],
                solver: this.solveTangentAtPoint.bind(this),
                name: 'Find Tangent Line at Given Point',
                category: 'tangent_lines',
                description: 'Use perpendicular slope to radius at point'
            },

            // Tangent from external point
            tangent_from_point: {
                patterns: [
                    /tangent.*from.*external.*point/i,
                    /tangent.*from.*point/i,
                    /two.*tangents/i
                ],
                solver: this.solveTangentFromPoint.bind(this),
                name: 'Find Tangent Lines from External Point',
                category: 'tangent_lines',
                description: 'Find two tangent lines from point outside circle'
            },

            // Two circles intersection
            two_circles_intersection: {
                patterns: [
                    /two.*circles.*intersection/i,
                    /circles.*intersect/i,
                    /intersection.*circles/i
                ],
                solver: this.solveTwoCirclesIntersection.bind(this),
                name: 'Find Intersection of Two Circles',
                category: 'circle_circle_intersection',
                description: 'Solve system of two circle equations'
            },

            // Area and circumference
            area_circumference: {
                patterns: [
                    /area.*circumference/i,
                    /find.*area.*circle/i,
                    /circumference.*circle/i
                ],
                solver: this.solveAreaCircumference.bind(this),
                name: 'Calculate Area and Circumference',
                category: 'area_circumference',
                description: 'Use A = πr² and C = 2πr'
            },

            // Arc length
            arc_length: {
                patterns: [
                    /arc.*length/i,
                    /length.*arc/i,
                    /curved.*length/i
                ],
                solver: this.solveArcLength.bind(this),
                name: 'Calculate Arc Length',
                category: 'sector_arc_length',
                description: 'Use s = rθ (radians) or s = (θ/360)×2πr (degrees)'
            },

            // Sector area
            sector_area: {
                patterns: [
                    /sector.*area/i,
                    /area.*sector/i,
                    /pie.*slice/i
                ],
                solver: this.solveSectorArea.bind(this),
                name: 'Calculate Sector Area',
                category: 'sector_arc_length',
                description: 'Use A = (1/2)r²θ (radians) or A = (θ/360)×πr² (degrees)'
            },

            // Parametric form
            parametric_form: {
                patterns: [
                    /parametric.*equation/i,
                    /parametric.*form/i,
                    /circle.*parametric/i
                ],
                solver: this.solveParametricForm.bind(this),
                name: 'Write Parametric Equations',
                category: 'parametric_form',
                description: 'Express as x = h + r cos(t), y = k + r sin(t)'
            },

            // Polar form
            polar_form: {
                patterns: [
                    /polar.*form/i,
                    /polar.*equation/i,
                    /circle.*polar/i
                ],
                solver: this.solvePolarForm.bind(this),
                name: 'Write Polar Form Equation',
                category: 'polar_form',
                description: 'Convert to polar coordinates'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            standard_form: {
                'Identify center': [
                    'Forgetting to change sign: (x - 3) has center h = +3, not -3',
                    'Confusing (x + 2) with (x - (-2))',
                    'Reading (y - k) as k instead of -k'
                ],
                'Find radius': [
                    'Forgetting to take square root: r = √(r²), not just r²',
                    'Taking square root of negative number (not a circle)',
                    'Confusing radius with diameter'
                ]
            },
            general_form: {
                'Complete the square': [
                    'Forgetting to add (D/2)² to both sides',
                    'Sign errors when adding to both sides',
                    'Not factoring coefficient before completing square'
                ],
                'Identify coefficients': [
                    'Missing the coefficient of x² and y² must be 1',
                    'Incorrectly identifying D, E, F',
                    'Sign errors with D and E'
                ]
            },
            converting_forms: {
                'Standard to general': [
                    'Expansion errors in (x - h)²',
                    'Forgetting to combine like terms',
                    'Sign errors when expanding'
                ],
                'General to standard': [
                    'Completing square incorrectly',
                    'Not balancing both sides when completing square',
                    'Arithmetic errors in simplification'
                ]
            },
            tangent_lines: {
                'Finding slope': [
                    'Using same slope as radius instead of perpendicular',
                    'Calculating radius slope incorrectly',
                    'Forgetting negative reciprocal for perpendicular'
                ],
                'Writing equation': [
                    'Using wrong point in point-slope form',
                    'Arithmetic errors in slope-intercept conversion',
                    'Not verifying tangent touches at one point'
                ]
            }
        };

        this.errorPrevention = {
            sign_changes: {
                reminder: 'In (x - h), the center is at x = +h. The minus becomes plus!',
                method: 'Rewrite (x + 3) as (x - (-3)) to see h = -3 clearly'
            },
            radius_squared: {
                reminder: 'r² is on the right side; take square root to get radius r',
                method: 'Always write: r = √(value on right side)'
            },
            completing_square: {
                reminder: 'When completing the square, add (coefficient/2)² to BOTH sides',
                method: 'Keep track: if you add to left, add to right'
            },
            perpendicular_slopes: {
                reminder: 'Perpendicular slopes multiply to -1: m₁ × m₂ = -1',
                method: 'If radius slope is m, tangent slope is -1/m'
            },
            verify_circle: {
                reminder: 'After finding r², check if r² > 0. If not, not a circle!',
                method: 'Calculate r² = h² + k² - F and verify positive'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why this step works and its geometric meaning',
                language: 'intuitive and geometry-focused'
            },
            procedural: {
                focus: 'Exact sequence of operations to perform',
                language: 'step-by-step instructions'
            },
            visual: {
                focus: 'Graphical and spatial understanding of circles',
                language: 'visual and geometric metaphors'
            },
            algebraic: {
                focus: 'Formal algebraic rules and manipulations',
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
                vocabulary: 'explain like I\'m 5 years old - simplest possible terms',
                detail: 'every tiny step explained with analogies',
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
            gps_coverage: {
                scenario: "GPS satellite signal coverage area",
                equation: "x² + y² = r² where r is signal range",
                examples: [
                    "A GPS satellite at the origin covers a 500-mile radius. What's the equation?",
                    "If coverage is (x - 100)² + (y - 200)² = 10000, what's the center and range?"
                ],
                context: "GPS and cell towers have circular coverage zones determined by signal strength"
            },
            ripple_effect: {
                scenario: "Ripples spreading in water",
                equation: "Growing circles from disturbance point",
                examples: [
                    "A stone dropped at (3, 4) creates ripples. At time t, radius is 2t. Write equation.",
                    "Ripple equation is (x + 2)² + (y - 1)² = 25. What's the center and radius?"
                ],
                context: "Ripples in water, sound waves, and light waves spread in circular patterns"
            },
            broadcast_tower: {
                scenario: "Radio or TV broadcast tower coverage",
                equation: "Circular coverage area around tower",
                examples: [
                    "Tower at coordinates (50, 30) broadcasts 40 miles. Write coverage equation.",
                    "Two towers at (0,0) and (100,0) each cover 60-mile radius. Do they overlap?"
                ],
                context: "Broadcast towers, WiFi routers, and speakers have circular effective ranges"
            },
            ferris_wheel: {
                scenario: "Path of Ferris wheel car",
                equation: "Circular motion around center axis",
                examples: [
                    "Ferris wheel center at (0, 50), radius 40 feet. Write equation of car's path.",
                    "Car position follows x² + (y - 50)² = 1600. How high is center? What's radius?"
                ],
                context: "Circular motion in rides, wheels, gears, and rotating machinery"
            },
            pizza_size: {
                scenario: "Pizza size and pricing",
                equation: "Area comparison using A = πr²",
                examples: [
                    "12-inch diameter pizza vs 16-inch. Which has more area? How much more?",
                    "Pizza radius is 8 inches. What's area? What if radius increases to 10 inches?"
                ],
                context: "Understanding area helps compare sizes and prices effectively"
            },
            satellite_orbit: {
                scenario: "Circular satellite orbit around Earth",
                equation: "Orbit path as circle (simplified model)",
                examples: [
                    "Satellite orbits 300 miles above Earth's surface. Earth radius 4000 miles. Orbit equation?",
                    "Orbit equation: x² + y² = 4300². What's orbital radius? Height above Earth?"
                ],
                context: "Satellites and planets follow approximately circular orbits"
            },
            searchlight: {
                scenario: "Searchlight beam circular coverage on ground",
                equation: "Lighted area as circle on the ground",
                examples: [
                    "Searchlight at (100, 200) illuminates 50-foot radius. Write equation.",
                    "Lit area: (x - 20)² + (y + 10)² = 900. Center? How wide is lighted circle?"
                ],
                context: "Spotlights, stage lights, and searchlights create circular illumination patterns"
            },
            sprinkler_system: {
                scenario: "Lawn sprinkler coverage area",
                equation: "Circular watering pattern",
                examples: [
                    "Sprinkler at lawn center (0,0) reaches 15 feet. Write coverage equation.",
                    "Three sprinklers at corners of triangle. Do they cover entire lawn area?"
                ],
                context: "Irrigation design uses circular coverage patterns to ensure complete watering"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            standard_form: {
                skills: ['Reading squared binomials', 'Sign changes in binomials', 'Square roots', 'Coordinate plane'],
                priorKnowledge: ['Binomial expansion', 'Perfect squares', 'Distance formula'],
                checkQuestions: [
                    "What is (x - 3)²?",
                    "If (x - h)² is given, what is h for (x + 5)?",
                    "What is √25?",
                    "What are coordinates of a point?"
                ]
            },
            general_form: {
                skills: ['Completing the square', 'Combining like terms', 'Factoring', 'Algebraic manipulation'],
                priorKnowledge: ['Binomial squares', 'Balancing equations', 'Coefficient identification'],
                checkQuestions: [
                    "Complete the square: x² + 6x",
                    "What is (x + 3)² - 9?",
                    "Expand: (x - 2)² + (y + 1)²",
                    "What is the coefficient of x in 2x + 3y?"
                ]
            },
            converting_forms: {
                skills: ['Expansion', 'Completing the square', 'Simplification', 'Algebraic fluency'],
                priorKnowledge: ['Standard form', 'General form', 'Both forms of circle equations'],
                checkQuestions: [
                    "Expand: (x - 2)²",
                    "Complete the square: x² + 8x",
                    "Simplify: (x - 1)² + (y + 2)² = 9",
                    "What form is x² + y² - 4x + 6y + 3 = 0?"
                ]
            },
            finding_equation_from_properties: {
                skills: ['Distance formula', 'Midpoint formula', 'Substitution', 'System solving'],
                priorKnowledge: ['Standard form structure', 'Coordinate geometry'],
                checkQuestions: [
                    "Find distance between (1,2) and (4,6)",
                    "Find midpoint of (0,0) and (6,8)",
                    "If center is (3,4) and radius is 5, write r² =?",
                    "What's the distance formula?"
                ]
            },
            circle_line_intersection: {
                skills: ['Substitution method', 'Solving quadratics', 'Discriminant', 'Interpretation'],
                priorKnowledge: ['Quadratic formula', 'Line equations', 'Circle equations'],
                checkQuestions: [
                    "Solve: x² - 5x + 6 = 0",
                    "What is the discriminant of ax² + bx + c = 0?",
                    "What's slope-intercept form of a line?",
                    "How many solutions if discriminant = 0?"
                ]
            },
            tangent_lines: {
                skills: ['Slope calculation', 'Perpendicular slopes', 'Point-slope form', 'Geometric reasoning'],
                priorKnowledge: ['Slope formula', 'Perpendicular lines', 'Tangent concept'],
                checkQuestions: [
                    "What's slope of line through (1,2) and (3,8)?",
                    "If slope is 2, what's perpendicular slope?",
                    "What's point-slope form?",
                    "What does tangent mean?"
                ]
            },
            area_circumference: {
                skills: ['Using π in calculations', 'Squaring numbers', 'Formula application'],
                priorKnowledge: ['Circle formulas A = πr² and C = 2πr', 'Area vs circumference'],
                checkQuestions: [
                    "What is π approximately?",
                    "What's the area formula for a circle?",
                    "What's the circumference formula?",
                    "What are appropriate units for area?"
                ]
            },
            sector_arc_length: {
                skills: ['Angle conversion (degrees/radians)', 'Proportional reasoning', 'Arc vs sector'],
                priorKnowledge: ['Radians and degrees', 'Circle parts', 'Central angles'],
                checkQuestions: [
                    "How many degrees in a full circle?",
                    "How many radians in a full circle?",
                    "Convert 90° to radians",
                    "What's the difference between arc and sector?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            distance_from_center: {
                description: "Circle as all points equidistant from center",
                analogy: "Like a fence at equal distance all around a tree",
                visualization: "Draw center point and mark equal distances in all directions",
                suitableFor: ['standard_form', 'general_form', 'finding_center_radius'],
                explanation: "Every point on circle is exactly r units from center (h, k)"
            },
            completing_square_geometric: {
                description: "Completing the square as building a perfect square area",
                analogy: "Like adding a corner piece to make a square puzzle complete",
                visualization: "Draw square with missing corner, show what's needed to complete",
                suitableFor: ['general_form', 'converting_forms'],
                explanation: "We add the right amount to make a perfect square binomial"
            },
            tangent_perpendicular: {
                description: "Tangent line perpendicular to radius",
                analogy: "Like a ladder leaning against a round tower - touches at one point",
                visualization: "Draw radius to point, then perpendicular line through that point",
                suitableFor: ['tangent_lines'],
                explanation: "Tangent is always 90° to radius at point of contact"
            },
            circle_graph: {
                description: "Visual circle on coordinate plane",
                analogy: "Like drawing with a compass on graph paper",
                visualization: "Plot center, mark radius, draw smooth curve",
                suitableFor: ['all circle types'],
                explanation: "Graph shows all points satisfying circle equation"
            },
            sector_pie_slice: {
                description: "Sector as pie slice of circle",
                analogy: "Like cutting a pie - the slice is a sector",
                visualization: "Draw circle, mark center, shade wedge from center",
                suitableFor: ['sector_arc_length'],
                explanation: "Sector is region between two radii and the arc connecting them"
            },
            parametric_motion: {
                description: "Parametric form as tracing circle over time",
                analogy: "Like watching a point move around a circular track",
                visualization: "Show point moving around circle as t increases from 0 to 2π",
                suitableFor: ['parametric_form'],
                explanation: "Parameter t controls position on circle; full rotation at t = 2π"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "Find center and radius: (x - 2)² + (y + 3)² = 16",
                    solution: "Center: (2, -3), Radius: 4",
                    steps: ["Identify h = 2 from (x - 2)", "Identify k = -3 from (y + 3)", "r² = 16, so r = 4"],
                    difficulty: "easy"
                },
                {
                    problem: "Find center and radius: x² + y² = 25",
                    solution: "Center: (0, 0), Radius: 5",
                    steps: ["Center at origin (0, 0)", "r² = 25, so r = 5"],
                    difficulty: "easy"
                },
                {
                    problem: "Write equation: center (0,0), radius 7",
                    solution: "x² + y² = 49",
                    steps: ["Use (x - 0)² + (y - 0)² = 7²", "Simplify to x² + y² = 49"],
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "Convert to standard form: x² + y² - 6x + 4y - 12 = 0",
                    solution: "(x - 3)² + (y + 2)² = 25",
                    steps: [
                        "Group: (x² - 6x) + (y² + 4y) = 12",
                        "Complete square for x: (x² - 6x + 9) adds 9",
                        "Complete square for y: (y² + 4y + 4) adds 4",
                        "Add to both sides: (x - 3)² + (y + 2)² = 12 + 9 + 4 = 25"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "Write equation: center (4, -1), radius 6",
                    solution: "(x - 4)² + (y + 1)² = 36",
                    steps: ["Use (x - h)² + (y - k)² = r²", "Substitute h=4, k=-1, r=6", "Result: (x - 4)² + (y + 1)² = 36"],
                    difficulty: "medium"
                },
                {
                    problem: "Find equation: diameter endpoints (2, 3) and (8, 7)",
                    solution: "(x - 5)² + (y - 5)² = 13",
                    steps: [
                        "Midpoint (center): ((2+8)/2, (3+7)/2) = (5, 5)",
                        "Distance: √[(8-2)² + (7-3)²] = √[36 + 16] = √52",
                        "Radius: √52 / 2 = √13",
                        "Equation: (x - 5)² + (y - 5)² = 13"
                    ],
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "Find tangent line to x² + y² = 25 at point (3, 4)",
                    solution: "3x + 4y = 25",
                    steps: [
                        "Radius slope to (3,4): m_r = 4/3",
                        "Tangent slope (perpendicular): m_t = -3/4",
                        "Point-slope: y - 4 = (-3/4)(x - 3)",
                        "Simplify: 4y - 16 = -3x + 9",
                        "Standard form: 3x + 4y = 25"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "Find intersection: circle x² + y² = 25 and line y = x + 1",
                    solution: "(3, 4) and (-4, -3)",
                    steps: [
                        "Substitute y = x + 1 into circle",
                        "x² + (x + 1)² = 25",
                        "x² + x² + 2x + 1 = 25",
                        "2x² + 2x - 24 = 0",
                        "x² + x - 12 = 0",
                        "(x + 4)(x - 3) = 0",
                        "x = -4 or x = 3",
                        "Points: (-4, -3) and (3, 4)"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "Convert to general form: (x + 2)² + (y - 5)² = 9",
                    solution: "x² + y² + 4x - 10y + 20 = 0",
                    steps: [
                        "Expand: x² + 4x + 4 + y² - 10y + 25 = 9",
                        "Combine: x² + y² + 4x - 10y + 29 = 9",
                        "Move to standard form: x² + y² + 4x - 10y + 20 = 0"
                    ],
                    difficulty: "hard"
                }
            ],
            byMethod: {
                standard_form: [
                    { problem: "(x - 1)² + (y - 2)² = 9", center: "(1, 2)", radius: "3" },
                    { problem: "(x + 3)² + (y - 4)² = 16", center: "(-3, 4)", radius: "4" },
                    { problem: "x² + (y + 5)² = 1", center: "(0, -5)", radius: "1" }
                ],
                general_form: [
                    { problem: "x² + y² - 4x + 6y - 12 = 0", center: "(2, -3)", radius: "5" },
                    { problem: "x² + y² + 8x - 2y + 8 = 0", center: "(-4, 1)", radius: "3" }
                ],
                tangent: [
                    { problem: "Tangent to x² + y² = 13 at (2, 3)", solution: "2x + 3y = 13" },
                    { problem: "Tangent to (x-1)² + (y-1)² = 5 at (3, 2)", solution: "2x + y = 8" }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            sign_in_center: {
                misconception: "Thinking (x - 3) means center at x = -3",
                reality: "(x - 3) means center at x = +3; the sign flips",
                correctiveExample: "(x - 3)² means h = +3. Rewrite as (x - (+3))² to see clearly.",
                commonIn: ['standard_form', 'finding_center_radius']
            },
            radius_vs_radius_squared: {
                misconception: "Using r² as the radius instead of taking square root",
                reality: "Right side is r², not r. Must take square root to get radius.",
                correctiveExample: "If (x-1)² + (y-2)² = 16, then r² = 16, so r = √16 = 4",
                commonIn: ['standard_form', 'area_circumference']
            },
            completing_square_balance: {
                misconception: "Adding (D/2)² to only one side when completing square",
                reality: "Must add to BOTH sides to maintain equality",
                correctiveExample: "x² + 6x becomes (x + 3)² - 9. If you add 9 to make (x+3)², add 9 to other side too.",
                commonIn: ['general_form', 'converting_forms']
            },
            tangent_slope_confusion: {
                misconception: "Using same slope as radius for tangent line",
                reality: "Tangent is PERPENDICULAR to radius; slopes multiply to -1",
                correctiveExample: "If radius slope is 2, tangent slope is -1/2 (negative reciprocal)",
                commonIn: ['tangent_lines']
            },
            general_form_coefficients: {
                misconception: "Trying to complete square without coefficient 1 on x² and y²",
                reality: "Must have x² and y² with coefficient 1; factor out if needed",
                correctiveExample: "For 2x² + 2y² + 8x - 12y + 10 = 0, first divide everything by 2",
                commonIn: ['general_form']
            },
            diameter_vs_radius: {
                misconception: "Confusing diameter and radius in equations and calculations",
                reality: "Radius is half the diameter; equations use radius",
                correctiveExample: "If diameter is 10, radius is 5, so r² = 25 in equation",
                commonIn: ['finding_equation_from_properties', 'area_circumference']
            },
            intersection_count: {
                misconception: "Expecting circle and line to always intersect twice",
                reality: "Can be 0 (miss), 1 (tangent), or 2 (secant) intersection points",
                correctiveExample: "Check discriminant: Δ < 0 (no intersection), Δ = 0 (tangent), Δ > 0 (two points)",
                commonIn: ['circle_line_intersection']
            },
            negative_radius_squared: {
                misconception: "Not checking if r² is positive after completing square",
                reality: "If r² ≤ 0, the equation doesn't represent a real circle",
                correctiveExample: "After completing square, if you get r² = -4, this is NOT a circle (imaginary)",
                commonIn: ['general_form', 'converting_forms']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            circle_definition: {
                analogy: "Fence around a tree",
                explanation: "A circle is like a fence built at the same distance all around a tree. The tree is the center, and the fence distance is the radius.",
                suitableFor: ['standard_form', 'general_form'],
                ELI5: "Imagine you tie a string to a stick in the ground and walk around keeping the string tight. You trace a circle!"
            },
            completing_square: {
                analogy: "Completing a jigsaw puzzle",
                explanation: "Completing the square is like adding the missing corner piece to make a square puzzle complete.",
                suitableFor: ['general_form', 'converting_forms'],
                ELI5: "You have most of a square drawn, and you need to add the missing piece to make it a perfect square!"
            },
            tangent_line: {
                analogy: "Ladder against a round tower",
                explanation: "A tangent line is like a ladder leaning against a round tower - it touches at exactly one point and is perpendicular to the radius there.",
                suitableFor: ['tangent_lines'],
                ELI5: "It's like when you put your finger on a ball - your finger touches at just one spot!"
            },
            standard_vs_general: {
                analogy: "Folded vs unfolded map",
                explanation: "Standard form is like a neatly folded map (compact and organized). General form is like an unfolded map (expanded and spread out).",
                suitableFor: ['converting_forms'],
                ELI5: "Standard form is like a toy in its box (neat). General form is like the toy taken apart (all the pieces shown separately)."
            },
            radius_squared: {
                analogy: "Area of a square",
                explanation: "r² is like finding the area of a square with side r. To get the side back, you need the square root.",
                suitableFor: ['standard_form', 'finding_center_radius'],
                ELI5: "If you have a square with area 16, you need to find what number times itself equals 16. That's 4!"
            },
            sector: {
                analogy: "Slice of pie",
                explanation: "A sector is like a slice of pie - it includes the crust (arc) and the pointy end (center).",
                suitableFor: ['sector_arc_length'],
                ELI5: "When you cut a piece of pizza, the piece you take is a sector!"
            },
            arc_length: {
                analogy: "Running track curve",
                explanation: "Arc length is like measuring the curved part of a running track - how far you actually run along the curve.",
                suitableFor: ['sector_arc_length'],
                ELI5: "If you walk along the edge of a circle, the arc length is how far you walked on that curved path."
            },
            parametric_motion: {
                analogy: "Train on circular track",
                explanation: "Parametric equations are like describing where a train is on a circular track at any time t.",
                suitableFor: ['parametric_form'],
                ELI5: "Imagine a toy train going around a circular track. Parametric equations tell us exactly where the train is at each moment!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            standard_form: {
                level1: "Look at the equation (x - h)² + (y - k)² = r². What do you see?",
                level2: "The center is at (h, k). What are h and k in your equation?",
                level3: "Remember: (x - 3) means h = +3, not -3. Signs flip!",
                level4: "Center is ({h}, {k}). For radius, take square root of right side: r = √{rsquared}"
            },
            general_form: {
                level1: "What form is this equation in? Does it have x² + y² with other terms?",
                level2: "To find center and radius, you need to complete the square. Can you group x terms and y terms?",
                level3: "Complete the square: for x² + Dx, add (D/2)² to both sides to get (x + D/2)²",
                level4: "Complete square for both x and y, then read center and radius from standard form"
            },
            converting_standard_to_general: {
                level1: "How do you expand (x - h)²?",
                level2: "Expand both binomials: (x - h)² = x² - 2hx + h²",
                level3: "Expand, then move everything to left side and simplify",
                level4: "Expand to x² + y² + Dx + Ey + F = 0 where D = -2h, E = -2k"
            },
            converting_general_to_standard: {
                level1: "What technique converts general form to standard form?",
                level2: "You need to complete the square for both x and y terms",
                level3: "Group x terms: (x² + Dx), then add (D/2)² to both sides",
                level4: "Complete square for x and y separately, balance equation, get (x-h)² + (y-k)² = r²"
            },
            tangent_line: {
                level1: "What's special about a tangent line at a point on a circle?",
                level2: "Tangent is perpendicular to the radius at that point. How do you find perpendicular slope?",
                level3: "Find slope of radius to the point, then use negative reciprocal for tangent slope",
                level4: "Radius slope = (y-k)/(x-h). Tangent slope = -(x-h)/(y-k). Use point-slope form."
            },
            circle_line_intersection: {
                level1: "How can you combine a circle equation and a line equation?",
                level2: "Substitute the line equation (y = mx + b) into the circle equation",
                level3: "After substitution, you'll get a quadratic in x. Solve it.",
                level4: "Substitute y from line into circle, expand, solve quadratic, find y-values for each x"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Find center and radius: (x - 2)² + (y + 1)² = 9",
                    answer: "Center (2, -1), Radius 3",
                    assesses: "standard_form",
                    difficulty: "basic"
                },
                {
                    question: "Convert to standard form: x² + y² - 6x + 8y + 16 = 0",
                    answer: "(x - 3)² + (y + 4)² = 9",
                    assesses: "general_form",
                    difficulty: "intermediate"
                },
                {
                    question: "Write equation: center (3, -2), radius 5",
                    answer: "(x - 3)² + (y + 2)² = 25",
                    assesses: "equation_from_center_radius",
                    difficulty: "basic"
                },
                {
                    question: "Find area of circle: x² + y² = 16",
                    answer: "16π square units",
                    assesses: "area_circumference",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "In (x - 5)² + (y + 3)² = 25, what is the center?",
                    options: ["(5, 3)", "(5, -3)", "(-5, 3)", "(-5, -3)"],
                    correct: "(5, -3)",
                    explanation: "h = 5 from (x - 5), k = -3 from (y + 3). Signs flip!"
                },
                {
                    question: "In (x - 1)² + (y - 2)² = 16, what is the radius?",
                    options: ["16", "256", "4", "8"],
                    correct: "4",
                    explanation: "r² = 16, so r = √16 = 4"
                },
                {
                    question: "To complete the square for x² + 6x, what do you add?",
                    options: ["6", "3", "9", "36"],
                    correct: "9",
                    explanation: "(6/2)² = 3² = 9"
                },
                {
                    question: "If radius slope to point is 2, what's the tangent slope?",
                    options: ["2", "-2", "1/2", "-1/2"],
                    correct: "-1/2",
                    explanation: "Perpendicular slope is negative reciprocal: -1/2"
                }
            ],
            summative: [
                {
                    question: "Convert to standard form and find center and radius: x² + y² - 4x + 6y - 3 = 0",
                    answer: "(x - 2)² + (y + 3)² = 16; Center (2, -3), Radius 4",
                    showsWork: true,
                    rubric: {
                        group_terms: 1,
                        complete_square_x: 1,
                        complete_square_y: 1,
                        balance_equation: 1,
                        identify_center_radius: 1
                    }
                },
                {
                    question: "Find equation of circle with diameter endpoints (1, 2) and (7, 10)",
                    answer: "(x - 4)² + (y - 6)² = 25",
                    showsWork: true,
                    rubric: {
                        find_midpoint: 1,
                        find_distance: 1,
                        find_radius: 1,
                        write_equation: 1,
                        verify: 1
                    }
                },
                {
                    question: "Find intersection points of circle x² + y² = 25 and line y = x - 1",
                    answer: "(4, 3) and (-3, -4)",
                    showsWork: true,
                    rubric: {
                        substitute: 1,
                        form_quadratic: 1,
                        solve_quadratic: 2,
                        find_y_values: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "(x - 1)² + (y - 2)² = 9",
                    "x² + y² = 16",
                    "(x + 3)² + (y - 1)² = 4",
                    "Find center and radius"
                ],
                medium: [
                    "x² + y² - 6x + 4y + 9 = 0",
                    "Convert (x - 2)² + (y + 3)² = 25 to general form",
                    "Write equation: center (4, -1), radius 6",
                    "Find area and circumference of x² + y² = 49"
                ],
                hard: [
                    "x² + y² + 8x - 10y + 32 = 0 (find if it's a circle)",
                    "Find tangent to x² + y² = 13 at (2, 3)",
                    "Circle through points (0,0), (4,0), (0,3)",
                    "Intersection of x² + y² = 25 and y = 2x + 5"
                ]
            },
            byObjective: {
                canFindCenterRadius: [
                    "(x - 5)² + (y + 2)² = 36",
                    "x² + y² - 8x + 6y + 21 = 0",
                    "(x + 1)² + (y - 4)² = 49"
                ],
                canConvertForms: [
                    "Convert (x - 3)² + (y + 1)² = 16 to general form",
                    "Convert x² + y² - 10x + 4y + 4 = 0 to standard form",
                    "Express x² + y² = 25 in general form"
                ],
                canWriteEquation: [
                    "Center (2, 3), radius 7",
                    "Diameter endpoints (1, 1) and (5, 9)",
                    "Center (0, 0) passing through (3, 4)"
                ],
                canFindIntersections: [
                    "Circle x² + y² = 20 and line y = 2x",
                    "x² + y² = 25 and x = 3",
                    "(x - 1)² + (y - 1)² = 10 and y = x + 2"
                ],
                canFindTangents: [
                    "Tangent to x² + y² = 25 at (3, 4)",
                    "Tangent to (x - 1)² + (y - 2)² = 13 at (4, 5)",
                    "Tangent to x² + y² = 10 at (1, 3)"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "standard_form_given": "Read center (h,k) directly, take √(r²) for radius",
                "general_form_given": "Complete the square for both x and y to convert to standard form",
                "center_radius_given": "Plug into (x-h)² + (y-k)² = r² directly",
                "diameter_given": "Find midpoint (center) and half distance (radius)",
                "three_points_given": "Set up system of 3 equations with general form",
                "center_point_given": "Use distance formula to find radius",
                "find_intersection": "Substitute one equation into the other, solve system",
                "find_tangent": "Use perpendicular slope to radius at point of tangency",
                "convert_to_parametric": "Use x = h + r cos(t), y = k + r sin(t)"
            },
            whenToUseWhat: {
                standard_form: "When you need center and radius quickly",
                general_form: "When doing algebraic operations or intersections",
                completing_square: "To convert general form to standard form",
                distance_formula: "To find radius when center and point are known",
                midpoint_formula: "To find center when diameter endpoints are given",
                substitution: "To find circle-line or circle-circle intersections",
                perpendicular_slopes: "To find tangent line equations",
                parametric: "For computer graphics or describing motion on circle",
                polar: "For circles centered at origin or through origin"
            },
            methodSelection: {
                factorsToConsider: [
                    "What form is the equation in?",
                    "What information is given vs. what is asked?",
                    "Is geometric or algebraic approach better?",
                    "Will graph help visualize the problem?"
                ],
                generalApproach: [
                    "1. Identify what form equation is in (or what's given)",
                    "2. Determine what needs to be found",
                    "3. Choose conversion or formula as needed",
                    "4. Execute calculations carefully",
                    "5. Verify answer makes sense geometrically"
                ]
            },
            optimizationTips: {
                "Keep in standard form when possible": "Easier to read center and radius",
                "Complete square for both variables simultaneously": "More efficient than one at a time",
                "Check if r² > 0": "After completing square, verify it's actually a circle",
                "Visualize with sketch": "Quick graph helps avoid errors",
                "Use symmetry": "Circle symmetric about center; use this in calculations"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Standard Form Sprint",
                    timeLimit: 90,
                    problems: [
                        "(x - 1)² + (y - 2)² = 9",
                        "(x + 3)² + (y - 4)² = 16",
                        "x² + (y + 5)² = 25",
                        "(x - 2)² + y² = 36",
                        "(x + 1)² + (y + 1)² = 49"
                    ],
                    task: "Find center and radius for each"
                },
                {
                    name: "Equation Writing Challenge",
                    timeLimit: 120,
                    problems: [
                        "Center (2, 3), radius 4",
                        "Center (-1, 5), radius 7",
                        "Center (0, -2), radius 3",
                        "Diameter endpoints (0, 0) and (6, 8)",
                        "Center (3, 3) through point (6, 7)"
                    ],
                    task: "Write equation in standard form"
                }
            ],
            puzzles: [
                {
                    name: "Mystery Circle",
                    problem: "A circle passes through (3, 0), (0, 3), and (3, 6). Find its equation.",
                    hint: "Use general form and solve system of equations",
                    solution: "Center (3, 3), radius 3; equation: (x - 3)² + (y - 3)² = 9"
                },
                {
                    name: "Tangent Puzzle",
                    problem: "Find all circles with center on the x-axis, radius 5, tangent to line y = 3x + 4",
                    hint: "Distance from center to line must equal radius",
                    solution: "Use distance formula from point to line"
                },
                {
                    name: "Intersection Challenge",
                    problem: "How many circles have center (h, h) and pass through both (0, 0) and (6, 6)?",
                    challenge: "Find the relationship and count possibilities",
                    solution: "Infinitely many - all centers on y = x except midpoint"
                }
            ],
            applications: [
                {
                    scenario: "GPS Tower Coverage",
                    problem: "Two cell towers at (0, 0) and (10, 0) each cover 8-mile radius. Where is the coverage overlap?",
                    equation: "x² + y² = 64 and (x - 10)² + y² = 64",
                    solution: "Find intersection points of two circles"
                },
                {
                    scenario: "Pizza Comparison",
                    problem: "12-inch pizza costs $10. 16-inch costs $15. Which is better value per square inch?",
                    equation: "Compare area using A = πr² for each",
                    solution: "12-inch: ~36π sq in for $10; 16-inch: ~64π sq in for $15. 16-inch better deal!"
                },
                {
                    scenario: "Ferris Wheel",
                    problem: "Ferris wheel radius 50 feet, center 55 feet above ground. Car at angle 60° from horizontal. How high is car?",
                    equation: "Use y = k + r sin(θ)",
                    solution: "55 + 50 sin(60°) ≈ 55 + 43.3 = 98.3 feet"
                },
                {
                    scenario: "Irrigation System",
                    problem: "Square garden 40×40 feet. Sprinkler at center reaches 25 feet. What fraction is watered?",
                    equation: "Circle area πr² vs square area s²",
                    solution: "π(25)² / (40)² = 625π / 1600 ≈ 1.23, but circle fits in square, so ~122.7% meaning... wait, check if circle fits!"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Find center and radius: (x + 3)² + (y - 2)² = 16",
                        "Center: (-3, 2)",  // CORRECT
                        "Radius: 16"        // ERROR: should be 4
                    ],
                    correctAnswer: "Center (-3, 2), Radius 4",
                    errorType: "Forgot to take square root of r²"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Convert to standard form: x² + y² - 6x + 4y - 3 = 0",
                        "(x² - 6x) + (y² + 4y) = 3",
                        "(x² - 6x + 9) + (y² + 4y + 4) = 3",  // ERROR: didn't add to right side
                        "(x - 3)² + (y + 2)² = 3"  // Wrong!
                    ],
                    correctAnswer: "(x - 3)² + (y + 2)² = 16",
                    errorType: "Didn't add completing-square values to both sides"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "Find equation: center (4, -3), radius 5",
                        "(x - 4)² + (y - 3)² = 25"  // ERROR: should be (y + 3)²
                    ],
                    correctAnswer: "(x - 4)² + (y + 3)² = 25",
                    errorType: "Sign error in y-coordinate of center"
                }
            ]
        };
    }

    // ==================== MAIN SOLVER METHOD ====================

    solveCircleProblem(config) {
        const { equation, scenario, parameters, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseCircleProblem(equation, scenario, parameters, problemType, context);

            // Solve the problem
            this.currentSolution = this.solveCircleProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateCircleSteps(this.currentProblem, this.currentSolution);

            // Generate graph data
            this.generateCircleGraphData();

            // Generate workbook
            this.generateCircleWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                center: this.currentSolution?.center,
                radius: this.currentSolution?.radius
            };

        } catch (error) {
            throw new Error(`Failed to solve circle problem: ${error.message}`);
        }
    }

    parseCircleProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = equation ? this.cleanMathExpression(equation) : '';

        // If problem type is specified, use it directly
        if (problemType && this.circleTypes[problemType]) {
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

        // Auto-detect circle problem type
        for (const [type, config] of Object.entries(this.circleTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(scenario)) {
                    const match = cleanInput.match(pattern);
                    const extractedParams = this.extractCircleParameters(match, type, cleanInput);

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

        // Default to standard form identification if parameters provided
        if (parameters.h !== undefined || parameters.k !== undefined || parameters.r !== undefined) {
            return {
                originalInput: equation || 'Circle with given center and radius',
                cleanInput: cleanInput,
                type: 'equation_from_center_radius',
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize circle problem type from: ${equation || scenario}`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/²/g, '^2')
            .replace(/≤/g, '<=')
            .replace(/≥/g, '>=')
            .replace(/≠/g, '!=')
            .trim();
    }

    extractCircleParameters(match, type, fullExpression) {
        const params = {};

        // Try to extract from different patterns
        switch(type) {
            case 'standard_form_identify':
                params.extracted = this.extractFromStandardForm(fullExpression);
                break;

            case 'general_form_identify':
                params.extracted = this.extractFromGeneralForm(fullExpression);
                break;
        }

        return params;
    }

    extractFromStandardForm(expr) {
        // Pattern: (x - h)^2 + (y - k)^2 = r^2
        const pattern = /\(x\s*([-+])\s*(\d+\.?\d*)\)\s*\^?\s*2\s*\+\s*\(y\s*([-+])\s*(\d+\.?\d*)\)\s*\^?\s*2\s*=\s*(\d+\.?\d*)/;
        const match = expr.match(pattern);

        if (match) {
            const h = match[1] === '-' ? parseFloat(match[2]) : -parseFloat(match[2]);
            const k = match[3] === '-' ? parseFloat(match[4]) : -parseFloat(match[4]);
            const rsquared = parseFloat(match[5]);

            return { h, k, rsquared, r: Math.sqrt(rsquared) };
        }

        return {};
    }

    extractFromGeneralForm(expr) {
        // Pattern: x^2 + y^2 + Dx + Ey + F = 0
        const pattern = /x\s*\^?\s*2\s*\+\s*y\s*\^?\s*2\s*([-+]\s*\d+\.?\d*)?x?\s*([-+]\s*\d+\.?\d*)?y?\s*([-+]\s*\d+\.?\d*)?\s*=\s*0/;
        const match = expr.match(pattern);

        if (match) {
            const D = parseFloat(match[1]?.replace(/\s/g, '') || '0');
            const E = parseFloat(match[2]?.replace(/\s/g, '') || '0');
            const F = parseFloat(match[3]?.replace(/\s/g, '') || '0');

            return { D, E, F };
        }

        return {};
    }

    solveCircleProblem_Internal(problem) {
        const solver = this.circleTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for circle problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // ==================== CIRCLE EQUATION SOLVERS ====================

    solveStandardFormIdentify(problem) {
        const { h, k, r, rsquared } = problem.parameters.extracted || problem.parameters;

        const radius = r || (rsquared ? Math.sqrt(rsquared) : null);

        return {
            equation: problem.cleanInput || `(x - ${h})² + (y - ${k})² = ${rsquared || r*r}`,
            type: 'Standard Form',
            category: 'standard_form',
            center: { x: h, y: k },
            radius: radius,
            radiusSquared: rsquared || (radius * radius),
            method: 'Direct reading from standard form',
            interpretation: `Circle centered at (${h}, ${k}) with radius ${radius}`
        };
    }

    solveGeneralFormIdentify(problem) {
        const { D, E, F } = problem.parameters.extracted || problem.parameters;

        // Convert to standard form using completing the square
        const h = -D / 2;
        const k = -E / 2;
        const rsquared = h * h + k * k - F;

        if (rsquared <= 0) {
            return {
                equation: problem.cleanInput,
                type: 'General Form (Not a Circle)',
                category: 'general_form',
                result: 'Not a real circle',
                reason: rsquared === 0 ? 'Point circle (radius = 0)' : 'Imaginary circle (r² < 0)',
                rsquared: rsquared
            };
        }

        const r = Math.sqrt(rsquared);

        return {
            equation: problem.cleanInput,
            type: 'General Form',
            category: 'general_form',
            generalForm: `x² + y² + ${D}x + ${E}y + ${F} = 0`,
            standardForm: `(x - ${h})² + (y - ${k})² = ${rsquared}`,
            center: { x: h, y: k },
            radius: r,
            radiusSquared: rsquared,
            method: 'Completing the square',
            interpretation: `Circle centered at (${h}, ${k}) with radius ${r}`
        };
    }

    solveStandardToGeneral(problem) {
        const { h, k, r } = problem.parameters;
        const rsquared = r * r;

        // Expand (x - h)² + (y - k)² = r²
        // (x - h)² = x² - 2hx + h²
        // (y - k)² = y² - 2ky + k²
        // So: x² - 2hx + h² + y² - 2ky + k² = r²
        // Rearrange: x² + y² - 2hx - 2ky + (h² + k² - r²) = 0

        const D = -2 * h;
        const E = -2 * k;
        const F = h * h + k * k - rsquared;

        return {
            type: 'Convert Standard to General',
            category: 'converting_forms',
            standardForm: `(x - ${h})² + (y - ${k})² = ${rsquared}`,
            generalForm: `x² + y² ${D >= 0 ? '+' : ''}${D}x ${E >= 0 ? '+' : ''}${E}y ${F >= 0 ? '+' : ''}${F} = 0`,
            coefficients: { D, E, F },
            method: 'Expansion of binomials',
            steps: [
                `Expand (x - ${h})² = x² - ${2*h}x + ${h*h}`,
                `Expand (y - ${k})² = y² - ${2*k}y + ${k*k}`,
                `Combine and rearrange to get general form`
            ]
        };
    }

    solveGeneralToStandard(problem) {
        const { D, E, F } = problem.parameters;

        const h = -D / 2;
        const k = -E / 2;
        const rsquared = h * h + k * k - F;

        if (rsquared <= 0) {
            return {
                type: 'Convert General to Standard (Failed)',
                category: 'converting_forms',
                result: 'Not a valid circle',
                reason: rsquared === 0 ? 'Point' : 'Imaginary',
                rsquared: rsquared
            };
        }

        const r = Math.sqrt(rsquared);

        return {
            type: 'Convert General to Standard',
            category: 'converting_forms',
            generalForm: `x² + y² + ${D}x + ${E}y + ${F} = 0`,
            standardForm: `(x - ${h})² + (y - ${k})² = ${rsquared}`,
            center: { x: h, y: k },
            radius: r,
            radiusSquared: rsquared,
            method: 'Completing the square for both variables',
            steps: [
                `Group: (x² + ${D}x) + (y² + ${E}y) = ${-F}`,
                `Complete square for x: add (${D}/2)² = ${(D/2)**2}`,
                `Complete square for y: add (${E}/2)² = ${(E/2)**2}`,
                `Result: (x - ${h})² + (y - ${k})² = ${rsquared}`
            ]
        };
    }

    solveEquationFromCenterRadius(problem) {
        const { h, k, r } = problem.parameters;
        const rsquared = r * r;

        return {
            type: 'Equation from Center and Radius',
            category: 'finding_equation_from_properties',
            given: { center: `(${h}, ${k})`, radius: r },
            standardForm: `(x - ${h})² + (y - ${k})² = ${rsquared}`,
            center: { x: h, y: k },
            radius: r,
            radiusSquared: rsquared,
            method: 'Direct substitution into standard form (x - h)² + (y - k)² = r²'
        };
    }

    solveEquationFromDiameter(problem) {
        const { x1, y1, x2, y2 } = problem.parameters;

        // Center is midpoint
        const h = (x1 + x2) / 2;
        const k = (y1 + y2) / 2;

        // Radius is half the distance
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        const r = distance / 2;
        const rsquared = r * r;

        return {
            type: 'Equation from Diameter Endpoints',
            category: 'finding_equation_from_properties',
            given: { 
                endpoints: `(${x1}, ${y1}) and (${x2}, ${y2})`
            },
            center: { x: h, y: k },
            radius: r,
            radiusSquared: rsquared,
            standardForm: `(x - ${h})² + (y - ${k})² = ${rsquared}`,
            method: 'Midpoint formula for center, half distance for radius',
            steps: [
                `Center (midpoint): ((${x1}+${x2})/2, (${y1}+${y2})/2) = (${h}, ${k})`,
                `Distance: √[(${x2}-${x1})² + (${y2}-${y1})²] = ${distance}`,
                `Radius: ${distance}/2 = ${r}`,
                `Equation: (x - ${h})² + (y - ${k})² = ${rsquared}`
            ]
        };
    }

    solveEquationFromThreePoints(problem) {
        const { x1, y1, x2, y2, x3, y3 } = problem.parameters;

        // System of equations approach
        // Substitute each point into general form: x² + y² + Dx + Ey + F = 0
        // This gives 3 equations in 3 unknowns (D, E, F)

        return {
            type: 'Equation from Three Points',
            category: 'finding_equation_from_properties',
            given: {
                points: [`(${x1}, ${y1})`, `(${x2}, ${y2})`, `(${x3}, ${y3})`]
            },
            method: 'Solve system of equations using general form',
            approach: 'Substitute each point into x² + y² + Dx + Ey + F = 0 and solve for D, E, F',
            note: 'This requires solving a 3×3 linear system'
        };
    }

    solveEquationFromCenterPoint(problem) {
        const { h, k, px, py } = problem.parameters;

        // Use distance formula to find radius
        const r = Math.sqrt((px - h) ** 2 + (py - k) ** 2);
const rsquared = r * r;
return {
        type: 'Equation from Center and Point on Circle',
        category: 'finding_equation_from_properties',
        given: {
            center: `(${h}, ${k})`,
            pointOnCircle: `(${px}, ${py})`
        },
        center: { x: h, y: k },
        radius: r,
        radiusSquared: rsquared,
        standardForm: `(x - ${h})² + (y - ${k})² = ${rsquared}`,
        method: 'Distance formula to find radius',
        steps: [
            `Radius = distance from center to point`,
            `r = √[(${px} - ${h})² + (${py} - ${k})²]`,
            `r = √[${(px-h)**2} + ${(py-k)**2}] = ${r}`,
            `Equation: (x - ${h})² + (y - ${k})² = ${rsquared}`
        ]
    };
}

solveCircleLineIntersection(problem) {
    const { circleEq, lineEq } = problem.parameters;

    return {
        type: 'Circle-Line Intersection',
        category: 'circle_line_intersection',
        given: {
            circle: circleEq,
            line: lineEq
        },
        method: 'Substitution and solving quadratic',
        approach: [
            '1. Express line as y = mx + b (or x = c if vertical)',
            '2. Substitute into circle equation',
            '3. Expand and collect terms into quadratic form',
            '4. Solve quadratic using quadratic formula',
            '5. Find corresponding y-values',
            '6. Interpret: 2 solutions (secant), 1 solution (tangent), 0 solutions (no intersection)'
        ],
        discriminantInterpretation: {
            positive: 'Two intersection points (secant line)',
            zero: 'One intersection point (tangent line)',
            negative: 'No intersection (line misses circle)'
        }
    };
}

solveTangentAtPoint(problem) {
    const { h, k, px, py } = problem.parameters;

    // Radius slope
    const radiusSlope = (py - k) / (px - h);
    
    // Tangent slope (perpendicular)
    const tangentSlope = -1 / radiusSlope;

    // Point-slope form: y - py = tangentSlope(x - px)
    // Convert to y = mx + b
    const b = py - tangentSlope * px;

    return {
        type: 'Tangent Line at Point',
        category: 'tangent_lines',
        given: {
            center: `(${h}, ${k})`,
            pointOfTangency: `(${px}, ${py})`
        },
        radiusSlope: radiusSlope,
        tangentSlope: tangentSlope,
        tangentEquation: {
            pointSlope: `y - ${py} = ${tangentSlope}(x - ${px})`,
            slopeIntercept: `y = ${tangentSlope}x + ${b}`
        },
        method: 'Perpendicular slope to radius',
        steps: [
            `Radius slope: (${py} - ${k})/(${px} - ${h}) = ${radiusSlope}`,
            `Tangent slope (⊥): -1/${radiusSlope} = ${tangentSlope}`,
            `Point-slope form: y - ${py} = ${tangentSlope}(x - ${px})`,
            `Simplify to: y = ${tangentSlope}x + ${b}`
        ],
        verification: 'Tangent should touch circle at exactly one point'
    };
}

solveTangentFromPoint(problem) {
    const { h, k, px, py } = problem.parameters;

    return {
        type: 'Tangent Lines from External Point',
        category: 'tangent_lines',
        given: {
            center: `(${h}, ${k})`,
            externalPoint: `(${px}, ${py})`
        },
        method: 'Two tangent lines from external point',
        approach: [
            '1. Find distance from external point to center',
            '2. Use geometric relationships to find points of tangency',
            '3. Write equations of both tangent lines',
            '4. Alternative: Use discriminant method'
        ],
        note: 'This problem typically results in two tangent lines',
        complexity: 'Advanced - requires solving system or using geometric properties'
    };
}

solveTwoCirclesIntersection(problem) {
    const { circle1, circle2 } = problem.parameters;

    return {
        type: 'Two Circles Intersection',
        category: 'circle_circle_intersection',
        given: {
            circle1: circle1,
            circle2: circle2
        },
        method: 'Solve system of two circle equations',
        approach: [
            '1. Find centers and radii of both circles',
            '2. Calculate distance between centers: d',
            '3. Determine intersection type:',
            '   - d > r₁ + r₂: separate (no intersection)',
            '   - d = r₁ + r₂: external tangent (1 point)',
            '   - |r₁ - r₂| < d < r₁ + r₂: intersect (2 points)',
            '   - d = |r₁ - r₂|: internal tangent (1 point)',
            '   - d < |r₁ - r₂|: one inside other (no intersection)',
            '4. If intersecting, solve system algebraically'
        ],
        conditionInterpretation: {
            '|r₁ - r₂| < d < r₁ + r₂': 'Two intersection points',
            'd = r₁ + r₂': 'External tangent (one point)',
            'd = |r₁ - r₂|': 'Internal tangent (one point)',
            'd > r₁ + r₂': 'Separate circles (no intersection)',
            'd < |r₁ - r₂|': 'One circle inside the other (no intersection)'
        }
    };
}

solveAreaCircumference(problem) {
    const { h, k, r } = problem.parameters;

    const area = Math.PI * r * r;
    const circumference = 2 * Math.PI * r;

    return {
        type: 'Area and Circumference',
        category: 'area_circumference',
        given: {
            center: `(${h}, ${k})`,
            radius: r
        },
        area: area,
        areaExact: `${r * r}π`,
        areaApprox: area.toFixed(4),
        circumference: circumference,
        circumferenceExact: `${2 * r}π`,
        circumferenceApprox: circumference.toFixed(4),
        formulas: {
            area: `A = πr² = π(${r})² = ${r * r}π`,
            circumference: `C = 2πr = 2π(${r}) = ${2 * r}π`
        },
        units: 'Remember: area in square units, circumference in linear units'
    };
}

solveArcLength(problem) {
    const { r, theta, angleUnit } = problem.parameters;

    let arcLength;
    if (angleUnit === 'radians') {
        arcLength = r * theta;
    } else {
        // Convert degrees to radians first
        const thetaRadians = theta * Math.PI / 180;
        arcLength = r * thetaRadians;
    }

    return {
        type: 'Arc Length',
        category: 'sector_arc_length',
        given: {
            radius: r,
            angle: `${theta} ${angleUnit}`
        },
        arcLength: arcLength,
        formula: angleUnit === 'radians' ? 
            `s = rθ = ${r} × ${theta} = ${arcLength}` :
            `s = (θ/360°) × 2πr = (${theta}/360°) × 2π(${r}) = ${arcLength}`,
        method: angleUnit === 'radians' ? 'Direct formula s = rθ' : 'Proportion of circumference'
    };
}

solveSectorArea(problem) {
    const { r, theta, angleUnit } = problem.parameters;

    let sectorArea;
    if (angleUnit === 'radians') {
        sectorArea = 0.5 * r * r * theta;
    } else {
        // Proportion of total area
        sectorArea = (theta / 360) * Math.PI * r * r;
    }

    return {
        type: 'Sector Area',
        category: 'sector_arc_length',
        given: {
            radius: r,
            angle: `${theta} ${angleUnit}`
        },
        sectorArea: sectorArea,
        formula: angleUnit === 'radians' ?
            `A = (1/2)r²θ = (1/2)(${r})²(${theta}) = ${sectorArea}` :
            `A = (θ/360°) × πr² = (${theta}/360°) × π(${r})² = ${sectorArea}`,
        method: angleUnit === 'radians' ? 'Direct formula A = (1/2)r²θ' : 'Proportion of total area',
        comparison: `Full circle area: πr² = ${Math.PI * r * r}`
    };
}

solveParametricForm(problem) {
    const { h, k, r } = problem.parameters;

    return {
        type: 'Parametric Equations',
        category: 'parametric_form',
        given: {
            center: `(${h}, ${k})`,
            radius: r
        },
        parametricEquations: {
            x: `x = ${h} + ${r}cos(t)`,
            y: `y = ${k} + ${r}sin(t)`
        },
        parameterRange: '0 ≤ t ≤ 2π',
        specialValues: {
            't = 0': `(${h + r}, ${k})`,
            't = π/2': `(${h}, ${k + r})`,
            't = π': `(${h - r}, ${k})`,
            't = 3π/2': `(${h}, ${k - r})`
        },
        method: 'Use trigonometric parameterization',
        conversionToStandard: 'Use identity cos²(t) + sin²(t) = 1 to eliminate t'
    };
}

solvePolarForm(problem) {
    const { h, k, r } = problem.parameters;

    // Check if centered at origin
    if (h === 0 && k === 0) {
        return {
            type: 'Polar Form (Circle at Origin)',
            category: 'polar_form',
            given: { center: '(0, 0)', radius: r },
            polarEquation: `r = ${r}`,
            interpretation: 'Constant radius from origin',
            conversion: 'x² + y² = r² becomes r² = r² (trivial)'
        };
    }

    return {
        type: 'Polar Form (General Circle)',
        category: 'polar_form',
        given: {
            center: `(${h}, ${k})`,
            radius: r
        },
        method: 'Convert using x = r cos(θ), y = r sin(θ)',
        note: 'Polar form is complex for circles not centered at origin or not through origin',
        standardForm: `(x - ${h})² + (y - ${k})² = ${r * r}`,
        approach: 'Typically keep in Cartesian form unless circle has special polar symmetry'
    };
}

// ==================== STEP GENERATION ====================

generateCircleSteps(problem, solution) {
    let baseSteps = this.generateBaseCircleSteps(problem, solution);

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

generateBaseCircleSteps(problem, solution) {
    const { type } = problem;
    const category = this.circleTypes[type]?.category;

    switch(category) {
        case 'standard_form':
            return this.generateStandardFormSteps(problem, solution);
        case 'general_form':
            return this.generateGeneralFormSteps(problem, solution);
        case 'converting_forms':
            return this.generateConvertingFormsSteps(problem, solution);
        case 'finding_equation_from_properties':
            return this.generateFindEquationSteps(problem, solution);
        case 'tangent_lines':
            return this.generateTangentLineSteps(problem, solution);
        case 'area_circumference':
            return this.generateAreaCircumferenceSteps(problem, solution);
        default:
            return this.generateGenericCircleSteps(problem, solution);
    }
}

generateStandardFormSteps(problem, solution) {
    const steps = [];
    const { h, k, r, rsquared } = solution;

    // Step 1: Given equation
    steps.push({
        stepNumber: 1,
        step: 'Given equation in standard form',
        description: 'Identify the equation form',
        expression: solution.equation,
        reasoning: 'Standard form: (x - h)² + (y - k)² = r²',
        goalStatement: 'Extract center (h, k) and radius r'
    });

    // Step 2: Identify center
    steps.push({
        stepNumber: 2,
        step: 'Identify center coordinates',
        description: 'Read h and k from the equation',
        beforeExpression: solution.equation,
        explanation: `From (x - ${h}), the center x-coordinate is h = ${h}`,
        explanation2: `From (y - ${k}), the center y-coordinate is k = ${k}`,
        result: `Center: (${h}, ${k})`,
        reasoning: 'Sign change: (x - h) means center at +h',
        algebraicRule: 'Standard form structure',
        warningFlag: 'Remember the sign flip!'
    });

    // Step 3: Find radius
    steps.push({
        stepNumber: 3,
        step: 'Find radius',
        description: 'Take square root of right side',
        beforeExpression: `r² = ${rsquared}`,
        operation: `√`,
        afterExpression: `r = √${rsquared} = ${r}`,
        reasoning: 'Radius is the square root of r²',
        algebraicRule: 'Square root property'
    });

    // Step 4: Final answer
    steps.push({
        stepNumber: 4,
        step: 'Solution',
        description: 'State center and radius',
        expression: `Center: (${h}, ${k}), Radius: ${r}`,
        finalAnswer: true,
        reasoning: 'These completely define the circle',
        interpretation: solution.interpretation
    });

    return steps;
}

generateGeneralFormSteps(problem, solution) {
    const steps = [];
    const { D, E, F } = problem.parameters.extracted || problem.parameters;

    // Step 1: Given equation
    steps.push({
        stepNumber: 1,
        step: 'Given equation in general form',
        description: 'Identify coefficients D, E, F',
        expression: solution.generalForm || problem.cleanInput,
        reasoning: 'General form: x² + y² + Dx + Ey + F = 0',
        goalStatement: 'Convert to standard form by completing the square',
        coefficients: { D, E, F }
    });

    // Step 2: Group terms
    steps.push({
        stepNumber: 2,
        step: 'Group x and y terms',
        description: 'Rearrange to prepare for completing the square',
        beforeExpression: `x² + y² + ${D}x + ${E}y + ${F} = 0`,
        afterExpression: `(x² + ${D}x) + (y² + ${E}y) = ${-F}`,
        reasoning: 'Group like variables together and move constant to right',
        algebraicRule: 'Rearrangement property'
    });

    // Step 3: Complete square for x
    const hSquared = (D / 2) ** 2;
    const h = -D / 2;
    steps.push({
        stepNumber: 3,
        step: 'Complete the square for x',
        description: `Add (${D}/2)² = ${hSquared} to both sides`,
        beforeExpression: `x² + ${D}x`,
        operation: `+ ${hSquared}`,
        afterExpression: `(x - ${h})²`,
        reasoning: `To complete the square, add (coefficient/2)²`,
        algebraicRule: 'Completing the square formula',
        bothSides: `Add ${hSquared} to both sides to maintain equality`
    });

    // Step 4: Complete square for y
    const kSquared = (E / 2) ** 2;
    const k = -E / 2;
    steps.push({
        stepNumber: 4,
        step: 'Complete the square for y',
        description: `Add (${E}/2)² = ${kSquared} to both sides`,
        beforeExpression: `y² + ${E}y`,
        operation: `+ ${kSquared}`,
        afterExpression: `(y - ${k})²`,
        reasoning: `Complete the square for y terms`,
        algebraicRule: 'Completing the square formula',
        bothSides: `Add ${kSquared} to both sides`
    });

    // Step 5: Simplify right side
    const rsquared = solution.radiusSquared;
    steps.push({
        stepNumber: 5,
        step: 'Simplify right side',
        description: 'Combine constants on right side',
        expression: `${-F} + ${hSquared} + ${kSquared} = ${rsquared}`,
        reasoning: 'This gives r²',
        result: `r² = ${rsquared}`
    });

    // Step 6: Check if valid circle
    if (rsquared <= 0) {
        steps.push({
            stepNumber: 6,
            step: 'Check validity',
            description: 'Verify r² > 0',
            expression: `r² = ${rsquared}`,
            result: rsquared === 0 ? 'Point circle (radius = 0)' : 'Not a real circle (r² < 0)',
            finalAnswer: true,
            reasoning: 'Circle requires positive radius squared'
        });
    } else {
        const r = Math.sqrt(rsquared);
        
        // Step 6: Write standard form
        steps.push({
            stepNumber: 6,
            step: 'Write in standard form',
            description: 'Express as (x - h)² + (y - k)² = r²',
            expression: solution.standardForm,
            finalAnswer: false,
            reasoning: 'Standard form reveals center and radius clearly'
        });

        // Step 7: State center and radius
        steps.push({
            stepNumber: 7,
            step: 'Solution',
            description: 'Identify center and radius',
            expression: `Center: (${h}, ${k}), Radius: ${r}`,
            finalAnswer: true,
            reasoning: 'Read directly from standard form'
        });
    }

    return steps;
}

generateConvertingFormsSteps(problem, solution) {
    if (problem.type === 'standard_to_general') {
        return this.generateStandardToGeneralSteps(problem, solution);
    } else {
        return this.generateGeneralToStandardSteps(problem, solution);
    }
}

generateStandardToGeneralSteps(problem, solution) {
    const steps = [];
    const { h, k, r } = problem.parameters;
    const rsquared = r * r;

    // Step 1: Given
    steps.push({
        stepNumber: 1,
        step: 'Given equation in standard form',
        description: 'Starting equation',
        expression: solution.standardForm,
        reasoning: 'We need to expand this to general form',
        goalStatement: 'Expand and rearrange to x² + y² + Dx + Ey + F = 0'
    });

    // Step 2: Expand (x - h)²
    steps.push({
        stepNumber: 2,
        step: 'Expand (x - h)²',
        description: `Expand the x binomial`,
        beforeExpression: `(x - ${h})²`,
        formula: `(x - ${h})² = x² - 2(${h})x + ${h}²`,
        afterExpression: `x² - ${2*h}x + ${h*h}`,
        reasoning: 'Use binomial expansion formula',
        algebraicRule: '(a - b)² = a² - 2ab + b²'
    });

    // Step 3: Expand (y - k)²
    steps.push({
        stepNumber: 3,
        step: 'Expand (y - k)²',
        description: `Expand the y binomial`,
        beforeExpression: `(y - ${k})²`,
        formula: `(y - ${k})² = y² - 2(${k})y + ${k}²`,
        afterExpression: `y² - ${2*k}y + ${k*k}`,
        reasoning: 'Use binomial expansion formula',
        algebraicRule: '(a - b)² = a² - 2ab + b²'
    });

    // Step 4: Combine
    const D = -2 * h;
    const E = -2 * k;
    const F = h * h + k * k - rsquared;
    
    steps.push({
        stepNumber: 4,
        step: 'Combine all terms',
        description: 'Put everything together',
        expression: `x² - ${2*h}x + ${h*h} + y² - ${2*k}y + ${k*k} = ${rsquared}`,
        simplification: `x² + y² ${D >= 0 ? '+' : ''}${D}x ${E >= 0 ? '+' : ''}${E}y + ${h*h + k*k} = ${rsquared}`,
        reasoning: 'Combine like terms and constants'
    });

    // Step 5: Rearrange to standard general form
    steps.push({
        stepNumber: 5,
        step: 'Rearrange to general form',
        description: 'Move all terms to left side',
        expression: solution.generalForm,
        finalAnswer: true,
        reasoning: 'General form has all terms on left, zero on right',
        coefficients: {
            D: D,
            E: E,
            F: F
        }
    });

    return steps;
}

generateGeneralToStandardSteps(problem, solution) {
    // This is the same as generateGeneralFormSteps
    return this.generateGeneralFormSteps(problem, solution);
}

generateFindEquationSteps(problem, solution) {
    const steps = [];

    if (problem.type === 'equation_from_center_radius') {
        const { h, k, r } = problem.parameters;
        const rsquared = r * r;

        steps.push({
            stepNumber: 1,
            step: 'Given information',
            description: 'Identify what is given',
            given: {
                center: `(${h}, ${k})`,
                radius: r
            },
            reasoning: 'We have all information needed for standard form',
            goalStatement: 'Write equation using (x - h)² + (y - k)² = r²'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate r²',
            description: 'Square the radius',
            calculation: `r² = ${r}² = ${rsquared}`,
            reasoning: 'Standard form uses r², not r'
        });

        steps.push({
            stepNumber: 3,
            step: 'Substitute into standard form',
            description: 'Plug values into (x - h)² + (y - k)² = r²',
            expression: solution.standardForm,
            finalAnswer: true,
            reasoning: 'This is the equation of the circle',
            verification: 'Check: center at (h,k), radius r'
        });

    } else if (problem.type === 'equation_from_diameter') {
        return this.generateFromDiameterSteps(problem, solution);
    } else if (problem.type === 'equation_from_center_point') {
        return this.generateFromCenterPointSteps(problem, solution);
    }

    return steps;
}

generateFromDiameterSteps(problem, solution) {
    const steps = [];
    const { x1, y1, x2, y2 } = problem.parameters;
    const { h, k, r, rsquared } = solution.center ? { h: solution.center.x, k: solution.center.y, r: solution.radius, rsquared: solution.radiusSquared } : {};

    steps.push({
        stepNumber: 1,
        step: 'Given diameter endpoints',
        description: 'Identify the given points',
        given: {
            point1: `(${x1}, ${y1})`,
            point2: `(${x2}, ${y2})`
        },
        reasoning: 'Center is midpoint, radius is half the distance',
        goalStatement: 'Find center (midpoint) and radius (half distance)'
    });

    steps.push({
        stepNumber: 2,
        step: 'Find center using midpoint formula',
        description: 'Calculate midpoint of diameter',
        formula: 'Midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2)',
        calculation: `((${x1} + ${x2})/2, (${y1} + ${y2})/2) = (${h}, ${k})`,
        result: `Center: (${h}, ${k})`,
        reasoning: 'Diameter endpoints determine center',
        algebraicRule: 'Midpoint formula'
    });

    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    
    steps.push({
        stepNumber: 3,
        step: 'Find diameter length using distance formula',
        description: 'Calculate distance between endpoints',
        formula: 'd = √[(x₂ - x₁)² + (y₂ - y₁)²]',
        calculation: `d = √[(${x2} - ${x1})² + (${y2} - ${y1})²] = √[${(x2-x1)**2} + ${(y2-y1)**2}] = ${distance}`,
        result: `Diameter = ${distance}`,
        reasoning: 'Distance between endpoints is the diameter',
        algebraicRule: 'Distance formula'
    });

    steps.push({
        stepNumber: 4,
        step: 'Find radius',
        description: 'Radius is half the diameter',
        calculation: `r = ${distance}/2 = ${r}`,
        result: `Radius: ${r}`,
        reasoning: 'Radius = diameter ÷ 2'
    });

    steps.push({
        stepNumber: 5,
        step: 'Write equation',
        description: 'Substitute into standard form',
        expression: solution.standardForm,
        finalAnswer: true,
        reasoning: 'Use (x - h)² + (y - k)² = r² with found values',
        verification: `Center (${h}, ${k}), Radius ${r}`
    });

    return steps;
}

generateFromCenterPointSteps(problem, solution) {
    const steps = [];
    const { h, k, px, py } = problem.parameters;
    const { r, rsquared } = solution;

    steps.push({
        stepNumber: 1,
        step: 'Given information',
        description: 'Identify what is given',
        given: {
            center: `(${h}, ${k})`,
            pointOnCircle: `(${px}, ${py})`
        },
        reasoning: 'Need to find radius using distance formula',
        goalStatement: 'Find radius = distance from center to point'
    });

    steps.push({
        stepNumber: 2,
        step: 'Use distance formula to find radius',
        description: 'Calculate distance from center to point',
        formula: 'r = √[(x - h)² + (y - k)²]',
        calculation: `r = √[(${px} - ${h})² + (${py} - ${k})²]`,
        simplification: `r = √[${(px-h)**2} + ${(py-k)**2}] = √${rsquared} = ${r}`,
        result: `Radius: ${r}`,
        reasoning: 'All points on circle are distance r from center',
        algebraicRule: 'Distance formula'
    });

    steps.push({
        stepNumber: 3,
        step: 'Write equation',
        description: 'Substitute into standard form',
        expression: solution.standardForm,
        finalAnswer: true,
        reasoning: 'Use (x - h)² + (y - k)² = r²',
        verification: `Point (${px}, ${py}) should satisfy this equation`
    });

    return steps;
}

generateTangentLineSteps(problem, solution) {
    const steps = [];
    const { h, k, px, py } = problem.parameters;
    const { radiusSlope, tangentSlope } = solution;

    steps.push({
        stepNumber: 1,
        step: 'Given information',
        description: 'Identify circle center and point of tangency',
        given: {
            center: `(${h}, ${k})`,
            pointOfTangency: `(${px}, ${py})`
        },
        reasoning: 'Tangent line is perpendicular to radius at this point',
        goalStatement: 'Find tangent line equation using perpendicular slope'
    });

    steps.push({
        stepNumber: 2,
        step: 'Find slope of radius to point',
        description: 'Calculate slope from center to point',
        formula: 'm = (y₂ - y₁)/(x₂ - x₁)',
        calculation: `m_radius = (${py} - ${k})/(${px} - ${h}) = ${radiusSlope}`,
        result: `Radius slope: ${radiusSlope}`,
        reasoning: 'This is the slope of the line from center to tangency point',
        algebraicRule: 'Slope formula'
    });

    steps.push({
        stepNumber: 3,
        step: 'Find tangent slope (perpendicular)',
        description: 'Calculate perpendicular slope',
        formula: 'If m₁ × m₂ = -1, lines are perpendicular',
        calculation: `m_tangent = -1/(${radiusSlope}) = ${tangentSlope}`,
        result: `Tangent slope: ${tangentSlope}`,
        reasoning: 'Tangent is perpendicular to radius',
        algebraicRule: 'Perpendicular slopes are negative reciprocals',
        warningFlag: 'Don\'t use the same slope as radius!'
    });

    const b = py - tangentSlope * px;
    
    steps.push({
        stepNumber: 4,
        step: 'Write tangent equation using point-slope form',
        description: 'Use point-slope form with tangency point',
        formula: 'y - y₁ = m(x - x₁)',
        calculation: `y - ${py} = ${tangentSlope}(x - ${px})`,
        simplification: solution.tangentEquation.pointSlope,
        reasoning: 'Point-slope form uses the tangency point and tangent slope'
    });

    steps.push({
        stepNumber: 5,
        step: 'Simplify to slope-intercept form',
        description: 'Convert to y = mx + b form',
        expression: solution.tangentEquation.slopeIntercept,
        finalAnswer: true,
        reasoning: 'Slope-intercept form is standard for line equations',
        verification: 'This line should touch the circle at exactly one point'
    });

    return steps;
}

generateAreaCircumferenceSteps(problem, solution) {
    const steps = [];
    const { h, k, r } = problem.parameters;

    steps.push({
        stepNumber: 1,
        step: 'Given information',
        description: 'Identify radius from circle equation',
        given: {
            center: `(${h}, ${k})`,
            radius: r
        },
        reasoning: 'Area and circumference depend only on radius',
        goalStatement: 'Calculate A = πr² and C = 2πr'
    });

    steps.push({
        stepNumber: 2,
        step: 'Calculate area',
        description: 'Use area formula A = πr²',
        formula: 'A = πr²',
        calculation: `A = π(${r})² = ${r*r}π`,
        exactResult: solution.areaExact,
        approximateResult: solution.areaApprox,
        reasoning: 'Area measures space inside the circle',
        units: 'square units'
    });

    steps.push({
        stepNumber: 3,
        step: 'Calculate circumference',
        description: 'Use circumference formula C = 2πr',
        formula: 'C = 2πr',
        calculation: `C = 2π(${r}) = ${2*r}π`,
        exactResult: solution.circumferenceExact,
        approximateResult: solution.circumferenceApprox,
        reasoning: 'Circumference measures distance around the circle',
        units: 'linear units'
    });

    steps.push({
        stepNumber: 4,
        step: 'Final results',
        description: 'Summary of calculations',
        expression: `Area = ${solution.areaExact} ≈ ${solution.areaApprox} square units\nCircumference = ${solution.circumferenceExact} ≈ ${solution.circumferenceApprox} units`,
        finalAnswer: true,
        reasoning: 'Express in both exact and approximate forms'
    });

    return steps;
}

generateGenericCircleSteps(problem, solution) {
    return [{
        stepNumber: 1,
        step: 'Circle problem',
        description: 'Solve the given circle problem',
        expression: problem.equation || solution.type,
        reasoning: 'Apply appropriate circle geometry technique',
        solution: solution
    }];
}

// ==================== ENHANCED EXPLANATION METHODS ====================

enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
    const enhanced = {
        ...step,
        stepNumber: stepIndex + 1,
        totalSteps: totalSteps,

        // Multiple explanation formats
        explanations: {
            conceptual: this.getConceptualExplanation(step, problem),
            procedural: this.getProceduralExplanation(step),
            visual: this.getVisualExplanation(step, problem),
            algebraic: this.getAlgebraicExplanation(step)
        },

        // Difficulty-adapted explanations
        adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

        // Learning support
        learningSupport: {
            prerequisiteSkills: this.identifyPrerequisites(step, problem.type),
            keyVocabulary: this.identifyKeyVocabulary(step),
            connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
        }
    };

    // Add thinking prompts if enabled
    if (this.includeThinkingPrompts) {
        enhanced.thinkingPrompts = this.generateThinkingPrompts(step);
    }

    // Add self-check questions if enabled
    if (this.includeSelfCheckQuestions) {
        enhanced.selfCheck = this.generateSelfCheckQuestion(step);
    }

    // Add real-world connections if enabled
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
        'Given equation in standard form': "We're starting with a special way to write a circle. It tells us exactly where the middle is and how big it is!",
        'Identify center coordinates': "The center is like the bull's-eye of a target. We're finding where that middle point is located.",
        'Find radius': "The radius is like how long a string would need to be if you tied one end to the center and drew the circle with the other end!",
        'Complete the square for x': "We're rearranging the math puzzle to make a perfect square - like completing a jigsaw puzzle!",
        'Complete the square for y': "Same thing for the y numbers - we're making another perfect square piece!",
        'Find slope of radius to point': "Imagine a line from the center to the edge. We're measuring how steep that line is.",
        'Find tangent slope (perpendicular)': "The tangent line is like a ladder leaning on a ball - it touches at just one spot and makes a special L-shape with the radius!",
        'Calculate area': "Area is how much space is inside the circle - like how much pizza you get!",
        'Calculate circumference': "Circumference is the distance all the way around the circle - like walking around a circular track!"
    };

    return ELI5Explanations[step.step] || "We're taking another step to understand this circle better!";
}

findRelevantAnalogy(step, problem) {
    for (const [key, analogy] of Object.entries(this.analogies)) {
        if (analogy.suitableFor.includes(problem.type) || analogy.suitableFor.includes('all circle types')) {
            return analogy.ELI5 || analogy.explanation;
        }
    }
    return "Think of a circle like drawing around a nail with a string - the nail is the center and the string length is the radius!";
}

convertToSimpleLanguage(description) {
    const simplifications = {
        'coefficient': 'the number next to the letter',
        'binomial': 'expression with two parts',
        'standard form': 'the neat organized way',
        'general form': 'the expanded spread-out way',
        'perpendicular': 'makes an L-shape (90 degrees)',
        'radius': 'distance from center to edge',
        'diameter': 'distance across the whole circle',
        'center': 'the middle point',
        'tangent': 'line that just touches once',
        'arc': 'curved piece of the circle edge',
        'sector': 'pie slice of the circle',
        'circumference': 'distance around the circle',
        'midpoint': 'halfway point between two places'
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
        'Given equation in standard form': 'Draw a circle with a marked center point and a radius line',
        'Identify center coordinates': 'Plot the center point on a coordinate grid',
        'Find radius': 'Draw a line from center to edge and measure it',
        'Complete the square for x': 'Show the algebra tiles forming a perfect square',
        'Complete the square for y': 'Show another set of algebra tiles forming a perfect square',
        'Group x and y terms': 'Circle all the x terms in one color, y terms in another',
        'Find slope of radius to point': 'Draw the radius as an arrow and show rise over run',
        'Find tangent slope (perpendicular)': 'Draw the radius and tangent making a right angle (L-shape)',
        'Calculate area': 'Shade the entire inside of the circle',
        'Calculate circumference': 'Trace around the edge of the circle with a colored pen'
    };

    return visualizations[step.step] || 'Draw a picture showing this step on a circle diagram';
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
    const category = this.circleTypes[problemType]?.category || 'standard_form';
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

// ==================== HELPER METHODS FOR ENHANCED EXPLANATIONS ====================

getConceptualExplanation(step, problem) {
    const conceptualExplanations = {
        'Given equation in standard form': 'Standard form directly reveals the circle\'s center and radius because it\'s derived from the distance formula.',
        'Identify center coordinates': 'The center (h, k) represents the fixed point from which all points on the circle are equidistant.',
        'Find radius': 'The radius is the constant distance from the center to any point on the circle, defining the circle\'s size.',
        'Complete the square for x': 'Completing the square transforms the equation to reveal the center\'s x-coordinate geometrically.',
        'Complete the square for y': 'Similarly, completing the square for y reveals the center\'s y-coordinate.',
        'Find slope of radius to point': 'The radius slope shows the direction from center to the tangency point.',
        'Find tangent slope (perpendicular)': 'The tangent is perpendicular to the radius because it represents the instantaneous direction of the circle at that point.',
        'Calculate area': 'Area measures the two-dimensional space enclosed by the circle.',
        'Calculate circumference': 'Circumference measures the one-dimensional path around the circle\'s edge.'
    };

    return conceptualExplanations[step.step] || 'This step advances our understanding of the circle\'s properties.';
}

getProceduralExplanation(step) {
    if (step.formula) {
        return `1. Identify the formula: ${step.formula}
Substitute the known values
Perform the calculations
Simplify the result`;
}
return 'Follow the standard algebraic procedure for this operation.';
}
getVisualExplanation(step, problem) {
const category = this.circleTypes[problem.type]?.category;
const visualExplanations = {
     'standard_form': 'Visualize a circle on a coordinate plane with center marked and radius drawn.',
     'general_form': 'Picture rearranging algebraic tiles to form perfect squares - completing the puzzle.',
     'converting_forms': 'Imagine folding/unfolding the equation between compact and expanded forms.',
     'tangent_lines': 'Visualize a line touching the circle at exactly one point, perpendicular to the radius.',
     'area_circumference': 'See the filled circle for area, the edge for circumference.'
 };

 return visualExplanations[category] || 'Visualize this step on a circle diagram.';
}
getAlgebraicExplanation(step) {
const algebraicRules = {
'Given equation in standard form': 'Circle equation in form (x - h)² + (y - k)² = r²',
'Identify center coordinates': 'Center extraction from standard form binomials',
'Find radius': 'Square root property: if r² = k, then r = √k',
'Complete the square for x': 'Completing square: x² + bx becomes (x + b/2)² - (b/2)²',
'Complete the square for y': 'Completing square: y² + cy becomes (y + c/2)² - (c/2)²',
'Find slope of radius to point': 'Slope formula: m = (y₂ - y₁)/(x₂ - x₁)',
'Find tangent slope (perpendicular)': 'Perpendicular slopes: m₁ × m₂ = -1',
'Calculate area': 'Circle area formula: A = πr²',
'Calculate circumference': 'Circle circumference formula: C = 2πr'
};
return algebraicRules[step.step] || step.algebraicRule || 'Apply standard algebraic principles.';
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
         'binomial': 'expression with two parts',
         'perpendicular': 'at right angle',
         'tangent': 'touching line',
         'radius': 'distance from center',
         'diameter': 'distance across',
         'circumference': 'distance around'
     },
     intermediate: {
         'binomial': 'binomial',
         'perpendicular': 'perpendicular',
         'tangent': 'tangent',
         'radius': 'radius',
         'diameter': 'diameter',
         'circumference': 'circumference'
     },
     ELI5: {
         'binomial': 'math expression with two parts added or subtracted',
         'perpendicular': 'making an L-shape (90-degree angle)',
         'tangent': 'line that just barely touches the circle at one spot',
         'radius': 'the distance from the middle to the edge',
         'diameter': 'the distance all the way across through the middle',
         'circumference': 'the distance if you walk all the way around the circle',
         'center': 'the exact middle point',
         'standard form': 'the neat organized way to write it'
     },
     detailed: {
         'binomial': 'binomial expression (two-term polynomial)',
         'perpendicular': 'perpendicular (orthogonal)',
         'tangent': 'tangent line (touches at exactly one point)',
         'radius': 'radius (distance from center to circumference)',
         'diameter': 'diameter (longest chord passing through center)',
         'circumference': 'circumference (perimeter of circle)'
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
currentState: We now have: ${currentStep.afterExpression || currentStep.expression || 'completed this step'},
nextGoal: Next, we need to: ${nextStep.description},
why: This is necessary because: ${this.explainStepNecessity(currentStep, nextStep)},
howItHelps: This will help by: ${this.explainStepBenefit(nextStep)}
};
}
explainStepProgression(currentStep, nextStep) {
return After ${currentStep.step}, we proceed to ${nextStep.step} to continue solving for the circle properties;
}
explainStepStrategy(nextStep) {
return The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()};
}
explainStepNecessity(currentStep, nextStep) {
return we need to continue extracting circle information;
}
explainStepBenefit(nextStep) {
return bringing us closer to understanding the complete circle equation;
}
generatePreventionTips(step, problemType) {
const tips = {
'Identify center coordinates': [
'Remember: (x - 3) means center at x = +3, not -3',
'The sign flips!',
'Rewrite (x + 2) as (x - (-2)) to see clearly'
],
'Find radius': [
'Take square root of r²',
'Don't forget the square root step',
'Check that radius is positive'
],
'Complete the square for x': [
'Add (coefficient/2)² to BOTH sides',
'Don't forget to balance the equation',
'Calculate (D/2)² carefully'
],
'Find tangent slope (perpendicular)': [
'Use negative reciprocal of radius slope',
'Don't use the same slope as the radius',
'Check: slopes should multiply to -1'
]
};
return tips[step.step] || ['Work carefully', 'Double-check calculations'];
}
generateCheckPoints(step) {
return [
'Did I perform calculations correctly?',
'Does my answer make geometric sense?',
'Have I checked signs (especially in center coordinates)?',
'Is this step moving me toward the solution?'
];
}
identifyWarningFlags(step, problemType) {
const warnings = {
standard_form: step.step === 'Identify center coordinates' ?
['Watch for sign changes!', '(x - h) means center at +h'] : [],
general_form: step.step === 'Complete the square for x' || step.step === 'Complete the square for y' ?
['Add to BOTH sides', 'Balance the equation'] : [],
tangent_lines: step.step === 'Find tangent slope (perpendicular)' ?
['Use negative reciprocal', 'Don't use same slope as radius'] : []
};
const category = this.circleTypes[problemType]?.category || 'standard_form';
 return warnings[category] || [];
}
generateSelfCheckQuestion(step) {
const questions = {
'Given equation in standard form': 'Can I identify the pattern (x - h)² + (y - k)² = r²?',
'Identify center coordinates': 'Did I remember to flip the signs for h and k?',
'Find radius': 'Did I take the square root of r²?',
'Complete the square for x': 'Did I add (D/2)² to both sides?',
'Complete the square for y': 'Did I add (E/2)² to both sides?',
'Find slope of radius to point': 'Did I use the slope formula correctly?',
'Find tangent slope (perpendicular)': 'Is my tangent slope the negative reciprocal of the radius slope?',
'Calculate area': 'Did I square the radius before multiplying by π?',
'Calculate circumference': 'Did I multiply the radius by 2π (not just π)?'
};
return questions[step.step] || 'Does this step make sense and bring me closer to the answer?';
}
describeExpectedResult(step) {
const expectations = {
'Given equation in standard form': 'A circle equation in the form (x - h)² + (y - k)² = r²',
'Identify center coordinates': 'A point (h, k) representing the circle's center',
'Find radius': 'A positive number representing the circle's radius',
'Complete the square for x': 'A perfect square binomial (x - h)²',
'Complete the square for y': 'A perfect square binomial (y - k)²',
'Find slope of radius to point': 'A slope value (could be positive, negative, zero, or undefined)',
'Find tangent slope (perpendicular)': 'A slope perpendicular to the radius slope',
'Calculate area': 'A positive value in square units',
'Calculate circumference': 'A positive value in linear units'
};
return expectations[step.step] || 'Progress toward complete circle information';
}
generateTroubleshootingTips(step) {
return [
'If stuck, review the formula for this step',
'Check your arithmetic carefully',
'Verify you haven't made sign errors',
'Try working through a simpler example first',
'Draw a diagram to visualize the geometry'
];
}
generateGuidingQuestions(step, problem) {
const questions = {
'Given equation in standard form': [
'What form is this equation in?',
'What does (x - h)² represent?',
'Where is the radius information?'
],
'Identify center coordinates': [
'What does (x - 3) tell us about the center?',
'Does the sign flip?',
'What are h and k?'
],
'Find radius': [
'What is on the right side of the equation?',
'Is that r or r²?',
'What operation gets r from r²?'
],
'Complete the square for x': [
'What is the coefficient of x?',
'What is half of that coefficient?',
'What is (half the coefficient)²?',
'Did I add to both sides?'
],
'Find tangent slope (perpendicular)': [
'What is the radius slope?',
'What does perpendicular mean for slopes?',
'What is the negative reciprocal?'
]
};
return questions[step.step] || ['What is the goal of this step?', 'What formula applies here?'];
}
generateProgressiveHints(step, problem) {
const category = this.circleTypes[problem.type]?.category || 'standard_form';
const hintSet = this.hints[category] || this.hints.standard_form;
return {
     level1: hintSet.level1 || 'Think about what the equation tells you.',
     level2: hintSet.level2 || 'Consider the standard form (x - h)² + (y - k)² = r².',
     level3: hintSet.level3 || 'Identify the values of h, k, and r.',
     level4: hintSet.level4 || 'Apply the appropriate formula or procedure.'
 };
}
breakIntoSubSteps(step) {
if (step.formula) {
return [
'Identify the formula to use',
'Substitute the known values',
'Perform the calculations',
'Simplify the result',
'Verify the answer makes sense'
];
}
return ['Understand the goal', 'Apply the technique', 'Verify the result'];
}
generatePracticeVariation(step, problem) {
return {
similarProblem: 'Try the same type of problem with different numbers',
practiceHint: 'Start with simpler numbers to build confidence',
extension: 'Once comfortable, try problems with fractions or larger numbers'
};
}
explainThinkingProcess(step) {
return {
observe: 'What information do I have in this step?',
goal: 'What am I trying to find or accomplish?',
strategy: 'What method or formula should I use?',
execute: 'How do I carry out this method correctly?',
verify: 'Does my result make sense geometrically?'
};
}
identifyDecisionPoints(step) {
return [
'Which formula applies to this situation?',
'What values do I substitute?',
'How should I simplify the result?'
];
}
suggestAlternativeMethods(step, problem) {
const alternatives = {
'Find radius': [
'Could calculate from diameter if that's easier',
'Could use distance formula if center and point known'
],
'Complete the square for x': [
'Could use completing square formula directly',
'Could visualize with algebra tiles'
]
};
return alternatives[step.step] || ['The chosen method is appropriate for this problem'];
}
connectToPreviousStep(step, stepIndex) {
return {
connection: This step builds on step ${stepIndex} by continuing the solution process,
progression: 'We are getting closer to complete circle information',
relationship: 'Each step reveals more about the circle's properties'
};
}
identifyPrerequisites(step, problemType) {
const category = this.circleTypes[problemType]?.category || 'standard_form';
const prereqs = this.prerequisites[category];
if (prereqs) {
     return prereqs.skills;
 }

 return ['Basic algebra', 'Coordinate geometry'];
}
identifyKeyVocabulary(step) {
const vocabulary = {
'Given equation in standard form': ['standard form', 'center', 'radius', 'binomial'],
'Identify center coordinates': ['center', 'coordinates', 'ordered pair'],
'Find radius': ['radius', 'square root', 'distance'],
'Complete the square for x': ['complete the square', 'perfect square', 'binomial'],
'Find slope of radius to point': ['slope', 'radius', 'rise over run'],
'Find tangent slope (perpendicular)': ['tangent', 'perpendicular', 'slope', 'negative reciprocal'],
'Calculate area': ['area', 'pi', 'square units'],
'Calculate circumference': ['circumference', 'pi', 'diameter', 'linear units']
};
return vocabulary[step.step] || [];
}
generateThinkingPrompts(step) {
return {
before: 'Before I start, what information do I need to identify?',
during: 'As I work, what should I be careful about?',
after: 'After finishing, how can I verify this step is correct?'
};
}
findRealWorldConnection(step, problem) {
const connections = {
'standard_form': 'Like knowing a GPS tower is at coordinates (h,k) with r-mile coverage',
'general_form': 'Computer graphics often use general form for calculations',
'tangent_lines': 'Like a ladder leaning on a silo - touches at one point',
'area_circumference': 'Pizza size comparison, fencing circular gardens'
};
const category = this.circleTypes[problem.type]?.category;
 return connections[category] || 'Circles appear everywhere in nature and technology.';
}
// ==================== GRAPH GENERATION ====================
generateCircleGraphData() {
if (!this.currentSolution || !this.currentProblem) return;
const { center, radius } = this.currentSolution;

 if (center && radius) {
     this.graphData = this.generateCircleGraph(center, radius);
 }
}
generateCircleGraph(center, radius) {
return {
type: 'circle',
center: { x: center.x, y: center.y },
radius: radius,
equation: (x - ${center.x})² + (y - ${center.y})² = ${radius * radius},
description: Circle centered at (${center.x}, ${center.y}) with radius ${radius},
graphType: 'coordinate_plane',
visualization: 'Plot center point and draw circle of given radius'
};
}
// ==================== WORKBOOK GENERATION ====================
generateCircleWorkbook() {
if (!this.currentSolution || !this.currentProblem) return;
const workbook = this.createWorkbookStructure();

 workbook.sections = [
     this.createProblemSection(),
     this.createPrerequisiteSection(),
     this.createEnhancedStepsSection(),
     this.createCircleLessonSection(),
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
title: 'Enhanced Circle Equation Mathematical Workbook',
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
     ['Problem Type', this.circleTypes[this.currentProblem.type]?.name || this.currentProblem.type],
     ['Category', this.circleTypes[this.currentProblem.type]?.category || 'circle'],
     ['Equation', this.currentSolution?.equation || this.currentProblem.cleanInput],
     ['Description', this.currentProblem.scenario || 'Circle equation problem']
 ];

 // Add parameters if available
 if (Object.keys(this.currentProblem.parameters).length > 0) {
     problemData.push(['', '']);
     problemData.push(['Given Information', '']);
     for (const [key, value] of Object.entries(this.currentProblem.parameters)) {
         if (value !== undefined && typeof value !== 'object') {
             problemData.push([key, value]);
         }
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
const category = this.circleTypes[this.currentProblem.type]?.category;
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

     if (step.beforeExpression && step.afterExpression) {
         stepsData.push(['Before', step.beforeExpression]);
         if (step.operation) {
             stepsData.push(['Operation', step.operation]);
         }
         stepsData.push(['After', step.afterExpression]);
     } else if (step.expression) {
         stepsData.push(['Expression', step.expression]);
     }

     if (step.formula) {
         stepsData.push(['Formula', step.formula]);
     }

     if (step.reasoning) {
         stepsData.push(['Reasoning', step.reasoning]);
     }

     if (step.algebraicRule) {
         stepsData.push(['Rule Used', step.algebraicRule]);
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

     // Warning flags
     if (step.warningFlag) {
         stepsData.push(['⚠ Warning', step.warningFlag]);
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
createCircleLessonSection() {
const { type } = this.currentProblem;
const category = this.circleTypes[type]?.category;
const lesson = this.lessons[category];
if (!lesson) return null;

 const lessonData = [
     ['Key Concepts', ''],
     ...lesson.concepts.map(c => ['', c]),
     ['', ''],
     ['Theory', lesson.theory],
     ['', ''],
     ['Key Formulas', '']
 ];

 for (const [name, formula] of Object.entries(lesson.keyFormulas)) {
     lessonData.push([name, formula]);
 }

 lessonData.push(['', '']);
 lessonData.push(['Solving Steps', '']);
 lesson.solvingSteps.forEach((s, i) => {
     lessonData.push([`${i + 1}`, s]);
 });

 return {
     title: `Key Concepts: ${lesson.title}`,
     type: 'lesson',
     data: lessonData
 };
}
createSolutionSection() {
if (!this.currentSolution) return null;
const solutionData = [];

 if (this.currentSolution.center && this.currentSolution.radius) {
     solutionData.push(['Center', `(${this.currentSolution.center.x}, ${this.currentSolution.center.y})`]);
     solutionData.push(['Radius', this.currentSolution.radius]);

     if (this.currentSolution.standardForm) {
         solutionData.push(['Standard Form', this.currentSolution.standardForm]);
     }

     if (this.currentSolution.interpretation) {
         solutionData.push(['Interpretation', this.currentSolution.interpretation]);
     }
 } else if (this.currentSolution.result) {
     solutionData.push(['Result', this.currentSolution.result]);
     if (this.currentSolution.reason) {
         solutionData.push(['Reason', this.currentSolution.reason]);
     }
 } else if (this.currentSolution.type) {
     solutionData.push(['Solution Type', this.currentSolution.type]);
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
     ['Category', this.circleTypes[this.currentProblem.type]?.category]
 ];

 if (this.currentSolution.method) {
     analysisData.push(['Method', this.currentSolution.method]);
 }

 return {
     title: 'Solution Analysis',
     type: 'analysis',
     data: analysisData
 };
}
createVerificationSection() {
if (!this.currentSolution || !this.currentProblem) return null;
const verificationData = [
     ['Verification Method', 'Geometric and algebraic checks']
 ];

 if (this.currentSolution.center && this.currentSolution.radius) {
     verificationData.push(['', '']);
     verificationData.push(['Center Check', `Center at (${this.currentSolution.center.x}, ${this.currentSolution.center.y})`]);
     verificationData.push(['Radius Check', `Radius = ${this.currentSolution.radius} > 0 ✓`]);

     if (this.verificationDetail === 'detailed') {
         verificationData.push(['', '']);
         verificationData.push(['Geometric Validity', 'Circle is properly defined with positive radius']);
         verificationData.push(['Algebraic Form', 'Equation matches standard or general form']);
     }
 }

 return {
     title: 'Solution Verification',
     type: 'verification',
     data: verificationData
 };
}
createRealWorldApplicationSection() {
if (!this.includeRealWorldApplications) return null;
const category = this.circleTypes[this.currentProblem.type]?.category;
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
const notes = this.generateCirclePedagogicalNotes(this.currentProblem.type);

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
const alternatives = this.generateCircleAlternativeMethods(this.currentProblem.type);

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
const category = this.circleTypes[this.currentProblem.type]?.category;
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
generateCirclePedagogicalNotes(problemType) {
const category = this.circleTypes[problemType]?.category;
const pedagogicalDatabase = {
     standard_form: {
         objectives: [
             'Identify center and radius from standard form',
             'Understand the geometric meaning of (x - h)² + (y - k)² = r²',
             'Recognize sign changes in binomial expressions'
         ],
         keyConcepts: [
             'Circle as locus of points equidistant from center',
             'Standard form directly reveals center and radius',
             'Sign flip: (x - 3) has center at x = +3'
         ],
         prerequisites: [
             'Binomial expressions',
             'Square roots',
             'Coordinate plane',
             'Distance formula'
         ],
         commonDifficulties: [
             'Sign errors in identifying center',
             'Forgetting to take square root for radius',
             'Confusing radius with diameter'
         ],
         teachingStrategies: [
             'Emphasize sign flip with concrete examples',
             'Use compass analogy for circle construction',
             'Practice with circles at origin first',
             'Use color coding for h, k, and r'
         ],
         extensions: [
             'General form conversion',
             'Translated circles',
             'Circle-line intersections'
         ],
         assessment: [
             'Can student identify center correctly?',
             'Does student remember to take square root?',
             'Can student graph the circle?'
         ]
     },
     general_form: {
         objectives: [
             'Convert general form to standard form',
             'Complete the square for two variables',
             'Determine if equation represents a valid circle'
         ],
         keyConcepts: [
             'Completing the square reveals center',
             'Must have x² and y² with coefficient 1',
             'r² must be positive for real circle'
         ],
         prerequisites: [
             'Completing the square',
             'Standard form',
             'Algebraic manipulation'
         ],
         commonDifficulties: [
             'Forgetting to add to both sides when completing square',
             'Arithmetic errors in completing square',
             'Not checking if r² > 0'
         ],
         teachingStrategies: [
             'Review completing square for one variable first',
             'Use step-by-step checklist',
             'Emphasize "both sides" repeatedly',
             'Show examples where r² ≤ 0'
         ],
         extensions: [
             'Circles with large coefficients',
             'Deriving general from standard',
             'Applications in computer graphics'
         ],
         assessment: [
             'Can student complete square correctly?',
             'Does student verify r² > 0?',
             'Can student convert both directions?'
         ]
     },
     tangent_lines: {
         objectives: [
             'Find equation of tangent line at a point',
             'Understand perpendicular relationship',
             'Apply point-slope form correctly'
         ],
         keyConcepts: [
             'Tangent perpendicular to radius at point',
             'Perpendicular slopes multiply to -1',
             'Tangent touches at exactly one point'
         ],
         prerequisites: [
             'Slope calculation',
             'Perpendicular lines',
             'Point-slope form',
             'Line equations'
         ],
         commonDifficulties: [
             'Using same slope as radius',
             'Forgetting negative reciprocal',
             'Point-slope form errors'
         ],
         teachingStrategies: [
             'Use ladder-on-silo analogy',
             'Practice perpendicular slopes separately',
             'Verify with graphing',
             'Show tangent touches once'
         ],
         extensions: [
             'Tangents from external point',
             'Common tangents to two circles',
             'Tangent length calculations'
         ],
         assessment: [
             'Can student find perpendicular slope?',
             'Does student apply point-slope correctly?',
             'Can student verify tangency?'
         ]
     }
 };

 return pedagogicalDatabase[category] || {
     objectives: ['Solve circle equation problems'],
     keyConcepts: ['Circle geometry', 'Algebraic manipulation'],
     prerequisites: ['Coordinate geometry', 'Algebra'],
     commonDifficulties: ['Various computational challenges'],
     teachingStrategies: ['Step-by-step instruction'],
     extensions: ['More complex circle problems'],
     assessment: ['Verify understanding of process']
 };
}
generateCircleAlternativeMethods(problemType) {
const category = this.circleTypes[problemType]?.category;
const alternativeDatabase = {
     standard_form: {
         primaryMethod: 'Direct Reading',
         methods: [
             {
                 name: 'Pattern Matching',
                 description: 'Visually match to (x - h)² + (y - k)² = r² pattern'
             },
             {
                 name: 'Rewriting',
                 description: 'Rewrite (x + 3) as (x - (-3)) to see h clearly'
             }
         ],
         comparison: 'Direct reading is fastest; rewriting helps avoid sign errors'
     },
     general_form: {
         primaryMethod: 'Completing the Square',
         methods: [
             {
                 name: 'Formula Method',
                 description: 'Use h = -D/2, k = -E/2, r² = h² + k² - F directly'
             },
             {
                 name: 'Systematic Completing Square',
                 description: 'Group terms, complete square for x and y separately'
             }
         ],
         comparison: 'Formula faster but completing square teaches the concept better'
     },
     tangent_lines: {
         primaryMethod: 'Perpendicular Slope',
         methods: [
             {
                 name: 'Implicit Differentiation',
                 description: 'Use calculus to find derivative at point (gives slope)'
             },
             {
                 name: 'Geometric Construction',
                 description: 'Draw radius, construct perpendicular geometrically'
             }
         ],
         comparison: 'Perpendicular slope method is algebraic and generalizes well'
     }
 };

 return alternativeDatabase[category] || {
     primaryMethod: 'Standard approach',
     methods: [{
         name: 'Alternative approach',
         description: 'Other methods may apply depending on problem'
     }],
     comparison: 'Choose based on problem characteristics'
 };
}
}
// Export the class
export default EnhancedCircleEquationMathematicalWorkbook;
