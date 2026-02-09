// Enhanced Point on Circle Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedPointOnCircleMathematicalWorkbook {
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
            point_on_circle_basic: {
                title: "Points on a Circle - Basic Concepts",
                concepts: [
                    "Circle equation: (x - h)² + (y - k)² = r²",
                    "Center of circle: (h, k)",
                    "Radius: r (distance from center to any point on circle)",
                    "Point (x, y) is ON the circle if it satisfies the equation"
                ],
                theory: "A circle is the set of all points at a fixed distance (radius) from a center point. Any point on the circle satisfies the circle equation.",
                keyFormulas: {
                    "Standard Form": "(x - h)² + (y - k)² = r²",
                    "Circle at Origin": "x² + y² = r²",
                    "Distance from Center": "d = √[(x - h)² + (y - k)²]",
                    "Point on Circle": "d = r"
                },
                applications: [
                    "GPS and location tracking",
                    "Circular motion in physics",
                    "Wheel and gear design",
                    "Satellite orbits"
                ]
            },

            finding_points_given_angle: {
                title: "Finding Points Using Angles",
                concepts: [
                    "Parametric form: x = h + r·cos(θ), y = k + r·sin(θ)",
                    "Angle θ measured from positive x-axis",
                    "θ in radians or degrees",
                    "Full circle: 0° to 360° or 0 to 2π radians"
                ],
                theory: "Points on a circle can be found using trigonometry. The angle determines the position along the circle.",
                keyFormulas: {
                    "X-coordinate": "x = h + r·cos(θ)",
                    "Y-coordinate": "y = k + r·sin(θ)",
                    "Angle Conversion": "radians = degrees × π/180",
                    "Degrees Conversion": "degrees = radians × 180/π"
                },
                applications: [
                    "Clock positions",
                    "Navigation and bearings",
                    "Circular motion physics",
                    "Computer graphics rotation"
                ]
            },

            finding_angle_given_point: {
                title: "Finding Angle from Point",
                concepts: [
                    "Use inverse trigonometry",
                    "tan(θ) = (y - k)/(x - h)",
                    "θ = atan2(y - k, x - h) for correct quadrant",
                    "Consider quadrant for correct angle"
                ],
                theory: "Given a point on a circle, we can find its angle using inverse trig functions, being careful about which quadrant the point is in.",
                keyFormulas: {
                    "Basic Angle": "θ = arctan[(y - k)/(x - h)]",
                    "Two-Argument Arctangent": "θ = atan2(y - k, x - h)",
                    "Range": "-π < θ ≤ π or -180° < θ ≤ 180°"
                },
                applications: [
                    "Finding bearing angles",
                    "Robot arm positioning",
                    "Game character rotation",
                    "Astronomical measurements"
                ]
            },

            verifying_point_on_circle: {
                title: "Verifying if Point is on Circle",
                concepts: [
                    "Substitute point coordinates into circle equation",
                    "Check if left side equals right side",
                    "Calculate distance from center",
                    "Compare distance to radius"
                ],
                theory: "To verify a point is on a circle, either substitute into the equation or calculate the distance from center and compare to radius.",
                keyFormulas: {
                    "Substitution Test": "(x - h)² + (y - k)² = r²",
                    "Distance Test": "√[(x - h)² + (y - k)²] = r",
                    "Tolerance": "Accept if |distance - radius| < ε"
                },
                applications: [
                    "Quality control in manufacturing",
                    "GPS accuracy verification",
                    "Computer graphics rendering",
                    "Engineering tolerance checks"
                ]
            },

            arc_length: {
                title: "Arc Length on Circle",
                concepts: [
                    "Arc is portion of circle circumference",
                    "Arc length depends on radius and angle",
                    "Angle must be in radians for formula",
                    "Full circle arc = circumference = 2πr"
                ],
                theory: "Arc length is the distance along the circle between two points. It's proportional to the central angle.",
                keyFormulas: {
                    "Arc Length": "s = r·θ (θ in radians)",
                    "Arc Length (degrees)": "s = (θ/360°)·2πr",
                    "Circumference": "C = 2πr",
                    "Angle from Arc": "θ = s/r"
                },
                applications: [
                    "Track and road design",
                    "Belt and pulley systems",
                    "Pendulum motion",
                    "Planetary orbit calculations"
                ]
            },

            sector_area: {
                title: "Sector Area",
                concepts: [
                    "Sector is wedge-shaped region",
                    "Area depends on radius and central angle",
                    "Fraction of total circle area",
                    "Full circle area = πr²"
                ],
                theory: "A sector's area is proportional to its central angle, like a slice of pie.",
                keyFormulas: {
                    "Sector Area": "A = (1/2)r²θ (θ in radians)",
                    "Sector Area (degrees)": "A = (θ/360°)·πr²",
                    "Circle Area": "A = πr²",
                    "Angle from Area": "θ = 2A/r²"
                },
                applications: [
                    "Pizza slices",
                    "Pie charts",
                    "Land surveying",
                    "Radar coverage areas"
                ]
            },

            chord_length: {
                title: "Chord Length",
                concepts: [
                    "Chord connects two points on circle",
                    "Chord length depends on radius and central angle",
                    "Perpendicular from center bisects chord",
                    "Diameter is longest chord"
                ],
                theory: "A chord is a line segment connecting two points on a circle. Its length can be found using the central angle.",
                keyFormulas: {
                    "Chord Length": "c = 2r·sin(θ/2)",
                    "From Two Points": "c = √[(x₂-x₁)² + (y₂-y₁)²]",
                    "Maximum Chord": "c_max = 2r (diameter)"
                },
                applications: [
                    "Bridge design",
                    "Architectural arches",
                    "String instruments",
                    "Structural engineering"
                ]
            },

            tangent_line: {
                title: "Tangent Lines to Circle",
                concepts: [
                    "Tangent touches circle at exactly one point",
                    "Tangent perpendicular to radius at point of tangency",
                    "Slope of tangent = negative reciprocal of radius slope",
                    "Two tangents from external point"
                ],
                theory: "A tangent line touches a circle at one point and is perpendicular to the radius at that point.",
                keyFormulas: {
                    "Tangent Slope": "m_tangent = -(x - h)/(y - k)",
                    "Tangent Equation": "y - y₁ = m(x - x₁)",
                    "Perpendicularity": "m_radius · m_tangent = -1"
                },
                applications: [
                    "Gear teeth design",
                    "Optics and reflection",
                    "Road and railway curves",
                    "Ball rolling paths"
                ]
            },

            distance_calculations: {
                title: "Distance Calculations",
                concepts: [
                    "Distance between two points on circle",
                    "Distance from point to center",
                    "Closest/farthest points on circle to external point",
                    "Point inside, on, or outside circle"
                ],
                theory: "Various distance measurements help determine relationships between points and circles.",
                keyFormulas: {
                    "Point to Center": "d = √[(x - h)² + (y - k)²]",
                    "Classification": "d < r (inside), d = r (on), d > r (outside)",
                    "Closest Point": "Distance = d - r",
                    "Farthest Point": "Distance = d + r"
                },
                applications: [
                    "Collision detection in games",
                    "Proximity alerts",
                    "Coverage area analysis",
                    "Security perimeter systems"
                ]
            },

            parametric_equations: {
                title: "Parametric Circle Equations",
                concepts: [
                    "Parameter t typically represents angle or time",
                    "x(t) and y(t) describe point position",
                    "Full circle: t from 0 to 2π",
                    "Direction: counterclockwise for standard form"
                ],
                theory: "Parametric equations express circle coordinates as functions of a parameter, useful for animation and motion.",
                keyFormulas: {
                    "Parametric X": "x(t) = h + r·cos(t)",
                    "Parametric Y": "y(t) = k + r·sin(t)",
                    "Velocity": "v = r·ω (ω = angular velocity)",
                    "Period": "T = 2π/ω"
                },
                applications: [
                    "Animation and motion graphics",
                    "Circular motion in physics",
                    "Robotics path planning",
                    "Computer-aided design (CAD)"
                ]
            },

            inscribed_angles: {
                title: "Inscribed Angles and Arcs",
                concepts: [
                    "Inscribed angle: vertex on circle, sides are chords",
                    "Inscribed angle = (1/2) × central angle",
                    "Angles inscribed in same arc are equal",
                    "Angle in semicircle is 90°"
                ],
                theory: "Inscribed angles have special relationships with central angles and arcs.",
                keyFormulas: {
                    "Inscribed Angle": "θ_inscribed = (1/2)θ_central",
                    "Arc Measure": "Arc = 2 × inscribed angle",
                    "Semicircle Angle": "θ = 90° always"
                },
                applications: [
                    "Navigation using landmarks",
                    "Optical instruments",
                    "Circular pool/fountain design",
                    "Clock angle problems"
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
            'omega': 'ω', 'phi': 'φ', 'tau': 'τ',
            // Special symbols
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'perpendicular': '⊥', 'parallel': '∥', 'degree': '°'
        };
    }

    initializeCircleSolvers() {
        this.circleTypes = {
            // Finding points given angle
            point_from_angle: {
                patterns: [
                    /find.*point.*angle/i,
                    /point.*at.*angle/i,
                    /coordinates.*angle/i,
                    /θ|theta/i
                ],
                solver: this.solvePointFromAngle.bind(this),
                name: 'Find Point from Angle',
                category: 'point_from_angle',
                description: 'Find coordinates of point on circle given angle'
            },

            // Finding angle given point
            angle_from_point: {
                patterns: [
                    /find.*angle.*point/i,
                    /angle.*at.*point/i,
                    /what.*angle/i
                ],
                solver: this.solveAngleFromPoint.bind(this),
                name: 'Find Angle from Point',
                category: 'angle_from_point',
                description: 'Find angle of point on circle'
            },

            // Verify point on circle
            verify_point: {
                patterns: [
                    /verify.*point/i,
                    /is.*point.*on.*circle/i,
                    /check.*point/i,
                    /point.*on.*circle/i
                ],
                solver: this.solveVerifyPoint.bind(this),
                name: 'Verify Point on Circle',
                category: 'verify_point',
                description: 'Check if point lies on circle'
            },

            // Arc length
            arc_length: {
                patterns: [
                    /arc.*length/i,
                    /length.*arc/i,
                    /distance.*along.*circle/i
                ],
                solver: this.solveArcLength.bind(this),
                name: 'Arc Length',
                category: 'arc_length',
                description: 'Calculate arc length between two points'
            },

            // Sector area
            sector_area: {
                patterns: [
                    /sector.*area/i,
                    /area.*sector/i,
                    /wedge.*area/i
                ],
                solver: this.solveSectorArea.bind(this),
                name: 'Sector Area',
                category: 'sector_area',
                description: 'Calculate area of circular sector'
            },

            // Chord length
            chord_length: {
                patterns: [
                    /chord.*length/i,
                    /length.*chord/i,
                    /distance.*between.*points.*circle/i
                ],
                solver: this.solveChordLength.bind(this),
                name: 'Chord Length',
                category: 'chord_length',
                description: 'Calculate length of chord'
            },

            // Tangent line
            tangent_line: {
                patterns: [
                    /tangent.*line/i,
                    /tangent.*circle/i,
                    /line.*tangent/i
                ],
                solver: this.solveTangentLine.bind(this),
                name: 'Tangent Line',
                category: 'tangent_line',
                description: 'Find equation of tangent line'
            },

            // Distance from point to circle
            distance_to_circle: {
                patterns: [
                    /distance.*to.*circle/i,
                    /distance.*from.*point/i,
                    /closest.*point/i
                ],
                solver: this.solveDistanceToCircle.bind(this),
                name: 'Distance to Circle',
                category: 'distance_to_circle',
                description: 'Find distance from point to circle'
            },

            // Multiple points on circle
            multiple_points: {
                patterns: [
                    /points.*equally.*spaced/i,
                    /divide.*circle/i,
                    /regular.*polygon/i
                ],
                solver: this.solveMultiplePoints.bind(this),
                name: 'Multiple Points on Circle',
                category: 'multiple_points',
                description: 'Find multiple equally-spaced points'
            },

            // Circle from points
            circle_from_points: {
                patterns: [
                    /circle.*through.*points/i,
                    /find.*circle/i,
                    /three.*points/i
                ],
                solver: this.solveCircleFromPoints.bind(this),
                name: 'Circle from Points',
                category: 'circle_from_points',
                description: 'Find circle passing through points'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            point_from_angle: {
                'Convert angle units': [
                    'Forgetting to convert degrees to radians',
                    'Using wrong conversion factor (π/180)',
                    'Mixing degrees and radians in calculation'
                ],
                'Apply trigonometric functions': [
                    'Confusing sin and cos',
                    'Forgetting to add center coordinates',
                    'Wrong sign for coordinates'
                ]
            },
            angle_from_point: {
                'Translate to origin': [
                    'Forgetting to subtract center coordinates',
                    'Subtracting in wrong order',
                    'Sign errors in translation'
                ],
                'Use inverse trig': [
                    'Using atan instead of atan2 (wrong quadrant)',
                    'Not checking quadrant',
                    'Forgetting to convert result to degrees if needed'
                ]
            },
            verify_point: {
                'Substitute coordinates': [
                    'Arithmetic errors in squaring',
                    'Sign errors with negative coordinates',
                    'Not simplifying completely'
                ],
                'Compare to radius': [
                    'Comparing distance to radius squared',
                    'Forgetting to take square root',
                    'Tolerance errors in floating point'
                ]
            },
            arc_length: {
                'Convert angle': [
                    'Using degrees instead of radians',
                    'Wrong conversion factor',
                    'Negative angles not handled'
                ],
                'Calculate arc': [
                    'Forgetting to multiply by radius',
                    'Using diameter instead of radius',
                    'Wrong formula (using area formula)'
                ]
            },
            chord_length: {
                'Calculate angle': [
                    'Using full angle instead of half',
                    'Angle in wrong units',
                    'Sign errors with angles'
                ],
                'Apply formula': [
                    'Forgetting factor of 2',
                    'Using cos instead of sin',
                    'Wrong angle in sin function'
                ]
            },
            tangent_line: {
                'Find slope': [
                    'Not using negative reciprocal',
                    'Division by zero not checked',
                    'Wrong point coordinates used'
                ],
                'Write equation': [
                    'Point-slope form errors',
                    'Arithmetic mistakes in simplification',
                    'Not converting to requested form'
                ]
            }
        };

        this.errorPrevention = {
            angle_units: {
                reminder: 'Always check if angle is in degrees or radians',
                method: 'Label angles with units (°) or (rad) throughout calculation'
            },
            center_translation: {
                reminder: 'Remember to subtract center coordinates when finding angles',
                method: 'Write out (x - h) and (y - k) explicitly before substituting'
            },
            quadrant_checking: {
                reminder: 'Use atan2 instead of atan to get correct quadrant',
                method: 'Verify angle makes sense for point position'
            },
            formula_selection: {
                reminder: 'Double-check which formula applies to your problem',
                method: 'Write out formula before substituting values'
            },
            verification: {
                reminder: 'Always verify answer makes geometric sense',
                method: 'Sketch circle and point to visualize solution'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Geometric meaning and visual understanding',
                language: 'intuitive and spatially-focused'
            },
            procedural: {
                focus: 'Step-by-step calculation process',
                language: 'clear sequential instructions'
            },
            visual: {
                focus: 'Diagrams, sketches, and spatial relationships',
                language: 'visual and coordinate-based'
            },
            algebraic: {
                focus: 'Formulas, equations, and mathematical rigor',
                language: 'precise mathematical notation'
            },
            trigonometric: {
                focus: 'Angle relationships and trig functions',
                language: 'trigonometric terminology'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple geometric terms',
                detail: 'essential steps only',
                examples: 'whole number coordinates and common angles'
            },
            intermediate: {
                vocabulary: 'standard geometric and trig terms',
                detail: 'main steps with brief explanations',
                examples: 'mix of simple and complex values'
            },
            ELI5: {
                vocabulary: 'everyday language - like explaining to a child',
                detail: 'every step with real-world analogies',
                examples: 'clock faces, wheels, and circular objects',
                analogies: true,
                visualization: 'simple drawings and familiar objects'
            },
            detailed: {
                vocabulary: 'full mathematical vocabulary',
                detail: 'comprehensive explanations with proofs',
                examples: 'general cases and edge cases'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to technical',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced difficulty'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            clock_positions: {
                scenario: "Finding positions of clock hands",
                equation: "x = r·cos(θ), y = r·sin(θ)",
                examples: [
                    "Where is the tip of the hour hand at 3 o'clock?",
                    "What are coordinates of minute hand at 15 minutes?"
                ],
                context: "Clock hands sweep circles, making this a perfect application of circular coordinates"
            },
            ferris_wheel: {
                scenario: "Position of passenger on Ferris wheel",
                equation: "Height = center_y + radius·sin(angle)",
                examples: [
                    "How high is a passenger when the wheel has rotated 45°?",
                    "At what angle is the passenger at maximum height?"
                ],
                context: "Ferris wheels demonstrate circular motion with vertical displacement"
            },
            satellite_orbit: {
                scenario: "Satellite position in circular orbit",
                equation: "Position = (center_x + r·cos(ωt), center_y + r·sin(ωt))",
                examples: [
                    "Where is satellite after orbiting for 1 hour?",
                    "When does satellite pass over a specific point?"
                ],
                context: "Satellites in circular orbits follow predictable circular paths"
            },
            wheel_rotation: {
                scenario: "Point on rotating wheel",
                equation: "Arc traveled = radius × angle (in radians)",
                examples: [
                    "How far has a point on a tire traveled after one rotation?",
                    "What arc length for 90° rotation of 2-foot radius wheel?"
                ],
                context: "Wheels and gears use arc length for distance calculations"
            },
            radar_coverage: {
                scenario: "Coverage area of radar with circular range",
                equation: "Coverage area = πr²",
                examples: [
                    "What area does a 50-mile radius radar cover?",
                    "Is a point 40 miles east, 30 miles north in coverage?"
                ],
                context: "Radar, sonar, and wireless signals have circular coverage patterns"
            },
            lighthouse_beam: {
                scenario: "Lighthouse beam rotating in circle",
                equation: "x = center + radius·cos(ωt + φ₀)",
                examples: [
                    "Where does beam hit shore after 5 seconds?",
                    "How fast is illuminated spot moving along shore?"
                ],
                context: "Rotating beams trace circular paths at distance"
            },
            circular_track: {
                scenario: "Runner position on circular track",
                equation: "Distance = arc length = rθ",
                examples: [
                    "How far has runner gone around 400m track at 90°?",
                    "What angle corresponds to 100m on the track?"
                ],
                context: "Running tracks and race courses often use circular arcs"
            },
            pizza_slice: {
                scenario: "Cutting pizza into equal slices",
                equation: "Angle per slice = 360°/n",
                examples: [
                    "What angle for cutting pizza into 8 equal slices?",
                    "Where to cut for 6 equal pieces?"
                ],
                context: "Dividing circles into equal sectors is a practical everyday task"
            },
            sprinkler_coverage: {
                scenario: "Lawn sprinkler with circular or sector coverage",
                equation: "Sector area = (θ/360°)·πr²",
                examples: [
                    "What area does 180° sprinkler with 20ft range cover?",
                    "Adjust sprinkler to water 100 sq ft with 15ft radius?"
                ],
                context: "Sprinklers and irrigation systems use sector calculations"
            },
            planetary_motion: {
                scenario: "Simplified circular planetary orbits",
                equation: "x = a·cos(2πt/T), y = a·sin(2πt/T)",
                examples: [
                    "Where is planet after 1/4 of its orbital period?",
                    "How far has planet traveled in its orbit?"
                ],
                context: "Circular approximation of planetary orbits (though actually elliptical)"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            point_from_angle: {
                skills: ['Trigonometry (sin, cos)', 'Angle measurement', 'Coordinate geometry'],
                priorKnowledge: ['Unit circle', 'Radians vs degrees', 'Pythagorean theorem'],
                checkQuestions: [
                    "What is sin(90°)?",
                    "How many radians in 180°?",
                    "What is cos(0°)?"
                ]
            },
            angle_from_point: {
                skills: ['Inverse trigonometry', 'atan2 function', 'Quadrant identification'],
                priorKnowledge: ['Inverse trig functions', 'Coordinate plane quadrants', 'Sign conventions'],
                checkQuestions: [
                    "What is arctan(1)?",
                    "Which quadrant has positive x, negative y?",
                    "What is atan2(1, 1)?"
                ]
            },
            verify_point: {
                skills: ['Circle equation', 'Distance formula', 'Algebraic substitution'],
                priorKnowledge: ['(x-h)²+(y-k)²=r²', 'Distance between points', 'Squaring numbers'],
                checkQuestions: [
                    "What is the distance formula?",
                    "What is 3² + 4²?",
                    "What is center and radius of x² + y² = 25?"
                ]
            },
            arc_length: {
                skills: ['Radian measure', 'Arc length formula', 'Angle conversion'],
                priorKnowledge: ['Circumference = 2πr', 's = rθ', 'Proportion reasoning'],
                checkQuestions: [
                    "What is circumference of circle with radius 5?",
                    "Convert 90° to radians",
                    "If full circle is 2π, what is quarter circle?"
                ]
            },
            sector_area: {
                skills: ['Area formulas', 'Fraction of circle', 'Radian angle measure'],
                priorKnowledge: ['Circle area = πr²', 'Sector as fraction', 'Angle in radians'],
                checkQuestions: [
                    "What is area of circle with radius 4?",
                    "What fraction of circle is 90° sector?",
                    "What is π/2 radians in degrees?"
                ]
            },
            chord_length: {
                skills: ['Trigonometry', 'Central angles', 'Distance formula'],
                priorKnowledge: ['sin function', 'Isosceles triangles', 'Bisector properties'],
                checkQuestions: [
                    "What is sin(30°)?",
                    "In isosceles triangle, what does perpendicular from vertex do?",
                    "What is 2·5·sin(45°)?"
                ]
            },
            tangent_line: {
                skills: ['Slope', 'Perpendicular lines', 'Point-slope form'],
                priorKnowledge: ['m₁·m₂ = -1 for perpendicular', 'y - y₁ = m(x - x₁)', 'Radius slope'],
                checkQuestions: [
                    "What is perpendicular slope to m = 2?",
                    "Write line through (3, 4) with slope 2",
                    "If radius has slope 3, what is tangent slope?"
                ]
            },
            distance_to_circle: {
                skills: ['Distance formula', 'Circle relationships', 'Minimum/maximum distance'],
                priorKnowledge: ['Point to point distance', 'd < r, d = r, d > r', 'Closest point concept'],
                checkQuestions: [
                    "Distance from (0,0) to (3,4)?",
                    "If d = 10 and r = 6, is point inside circle?",
                    "How to find closest point on line to external point?"
                ]
            },
            multiple_points: {
                skills: ['Equal angle division', 'Parametric equations', 'Rotation'],
                priorKnowledge: ['360°/n for n points', 'Successive angle addition', 'Regular polygons'],
                checkQuestions: [
                    "What angle between points for 8 equal divisions?",
                    "What are angles for 4 points starting at 0°?",
                    "How many points to divide circle into 30° segments?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            unit_circle: {
                description: "Unit circle with radius 1 centered at origin",
                analogy: "Like a clock face where 0° is 3 o'clock position",
                visualization: "Circle with marked angles and coordinates",
                suitableFor: ['point_from_angle', 'angle_from_point'],
                explanation: "The unit circle connects angles to coordinates using cos and sin"
            },
            coordinate_plane: {
                description: "Standard xy-plane with circle drawn",
                analogy: "Like a map with circular boundary",
                visualization: "Grid with circle, center, radius marked",
                suitableFor: ['all_types'],
                explanation: "Shows geometric relationship between circle and coordinates"
            },
            clock_face: {
                description: "Clock-like representation of angles",
                analogy: "Think of angles like times on a clock",
                visualization: "Clock with angles marked in degrees",
                suitableFor: ['point_from_angle', 'multiple_points'],
                explanation: "Makes angle positions intuitive using familiar clock positions"
            },
            wheel: {
                description: "Rotating wheel with marked point",
                analogy: "Like a wheel with a spot of paint that traces a circle",
                visualization: "Wheel showing rotation and point position",
                suitableFor: ['arc_length', 'point_from_angle'],
                explanation: "Physical model of circular motion and arc length"
            },
            pizza_pie: {
                description: "Pizza cut into sectors",
                analogy: "Dividing a pizza into equal slices",
                visualization: "Circular pizza with slice boundaries",
                suitableFor: ['sector_area', 'multiple_points', 'arc_length'],
                explanation: "Makes sector concepts concrete and relatable"
            },
            compass: {
                description: "Navigation compass with bearings",
                analogy: "Like using a compass for navigation",
                visualization: "Compass rose with degree markings",
                suitableFor: ['angle_from_point', 'point_from_angle'],
                explanation: "Relates angles to real-world navigation"
            },
            right_triangle: {
                description: "Right triangle formed by radius and coordinates",
                analogy: "The radius is the hypotenuse of a right triangle",
                visualization: "Triangle with radius, x-leg, y-leg labeled",
                suitableFor: ['point_from_angle', 'verify_point'],
                explanation: "Shows trigonometric relationships visually"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "Find point on circle x² + y² = 25 at angle 0°",
                    solution: { x: 5, y: 0 },
                    steps: ["Radius r = 5", "x = 5·cos(0°) = 5", "y = 5·sin(0°) = 0"],
                    difficulty: "easy"
                },
                {
                    problem: "Is (3, 4) on circle x² + y² = 25?",
                    solution: "Yes",
                    steps: ["3² + 4² = 9 + 16 = 25", "Equals r² = 25", "Point is on circle"],
                    difficulty: "easy"
                },
                {
                    problem: "Arc length for r = 10, θ = π/2",
                    solution: "5π ≈ 15.71",
                    steps: ["s = rθ", "s = 10·(π/2)", "s = 5π"],
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "Find point on (x-2)² + (y-3)² = 16 at 90°",
                    solution: { x: 2, y: 7 },
                    steps: ["Center (2,3), r = 4", "x = 2 + 4·cos(90°) = 2", "y = 3 + 4·sin(90°) = 7"],
                    difficulty: "medium"
                },
                {
                    problem: "Find angle of point (3, 3√3) on circle centered at origin",
                    solution: "60° or π/3",
                    steps: ["tan(θ) = (3√3)/3 = √3", "θ = arctan(√3) = 60°"],
                    difficulty: "medium"
                },
                {
                    problem: "Chord length for r = 8, central angle = 60°",
                    solution: "8",
                    steps: ["c = 2r·sin(θ/2)", "c = 2·8·sin(30°)", "c = 16·0.5 = 8"],
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "Find 6 equally spaced points on x² + y² = 9 starting at 30°",
                    solution: "Points at 30°, 90°, 150°, 210°, 270°, 330°",
                    steps: ["Angle increment = 360°/6 = 60°", "Calculate each point", "Starting angle 30°"],
                    difficulty: "hard"
                },
                {
                    problem: "Tangent line to x² + y² = 25 at point (3, 4)",
                    solution: "3x + 4y = 25",
                    steps: ["Radius slope = 4/3", "Tangent slope = -3/4", "Use point-slope form"],
                    difficulty: "hard"
                },
                {
                    problem: "Find circle through points (0,0), (4,0), (2,2)",
                    solution: "(x-2)² + (y-1)² = 5",
                    steps: ["Set up system of equations", "Solve for h, k, r", "Verify all three points"],
                    difficulty: "hard"
                }
            ],
            byMethod: {
                point_from_angle: [
                    { problem: "Point at 45° on x² + y² = 4", solution: "(√2, √2)" },
                    { problem: "Point at 180° on (x-1)² + y² = 9", solution: "(-2, 0)" },
                    { problem: "Point at 270° on x² + (y+2)² = 16", solution: "(0, -6)" }
                ],
                verify_point: [
                    { problem: "Is (0, 5) on x² + y² = 25?", solution: "Yes" },
                    { problem: "Is (3, 5) on x² + y² = 25?", solution: "No" },
                    { problem: "Is (1, 0) on (x-1)² + y² = 4?", solution: "No, on boundary" }
                ],
                arc_length: [
                    { problem: "Arc for r=6, θ=π/3", solution: "2π" },
                    { problem: "Arc for r=10, θ=90°", solution: "5π" },
                    { problem: "Arc for quarter circle r=8", solution: "4π" }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            angle_units: {
                misconception: "Mixing degrees and radians in calculations",
                reality: "Must use radians for standard formulas like s = rθ",
                correctiveExample: "For 90°: Convert to π/2 radians before using s = rθ",
                commonIn: ['arc_length', 'sector_area', 'point_from_angle']
            },
            center_coordinates: {
                misconception: "Forgetting circle may not be centered at origin",
                reality: "Must use (x - h) and (y - k) for circle centered at (h, k)",
                correctiveExample: "For (x-2)² + (y-3)² = 16: center is (2, 3), not (0, 0)",
                commonIn: ['point_from_angle', 'verify_point']
            },
            angle_reference: {
                misconception: "Measuring angle from wrong reference (like y-axis instead of x-axis)",
                reality: "Standard convention: 0° is positive x-axis, counterclockwise",
                correctiveExample: "90° points up (positive y), not to the right",
                commonIn: ['point_from_angle', 'angle_from_point']
            },
            quadrant_errors: {
                misconception: "Using arctan without considering quadrant",
                reality: "arctan only gives -90° to 90°; use atan2 for full range",
                correctiveExample: "Point (-1, -1): atan gives 45° but should be 225° (use atan2)",
                commonIn: ['angle_from_point']
            },
            radius_vs_diameter: {
                misconception: "Using diameter when formula needs radius",
                reality: "Most formulas use radius; diameter = 2r",
                correctiveExample: "For circle of diameter 10: r = 5, not r = 10",
                commonIn: ['all_types']
            },
            arc_vs_chord: {
                misconception: "Confusing arc length (curve) with chord length (straight line)",
                reality: "Arc follows circle; chord is straight line between points",
                correctiveExample: "For 90° on r=1 circle: arc = π/2 ≈ 1.57, chord = √2 ≈ 1.41",
                commonIn: ['arc_length', 'chord_length']
            },
            sector_vs_segment: {
                misconception: "Confusing sector (pie slice) with segment (region between chord and arc)",
                reality: "Sector includes center; segment doesn't",
                correctiveExample: "Sector area = (1/2)r²θ; segment area = sector - triangle",
                commonIn: ['sector_area']
            },
            tangent_perpendicular: {
                misconception: "Thinking tangent is parallel to radius",
                reality: "Tangent is perpendicular to radius at point of tangency",
                correctiveExample: "If radius slope = 2, tangent slope = -1/2 (negative reciprocal)",
                commonIn: ['tangent_line']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            circle_as_clock: {
                analogy: "Circle is like a clock face",
                explanation: "Just as 12 o'clock is at the top, 0° is to the right. Times around the clock correspond to angles",
                suitableFor: ['point_from_angle', 'angle_from_point'],
                ELI5: "Imagine a clock. 3 o'clock points to the right (0°), 12 o'clock points up (90°), 9 o'clock points left (180°), and 6 o'clock points down (270°)"
            },
            ferris_wheel: {
                analogy: "Riding a Ferris wheel",
                explanation: "As the wheel turns, your position traces a circle. The angle is how far you've rotated from the starting position",
                suitableFor: ['point_from_angle', 'arc_length', 'parametric'],
                ELI5: "You're on a Ferris wheel. When it spins halfway, you're at the opposite side. The angle tells you how far around you've gone"
            },
            pizza_slicing: {
                analogy: "Cutting a pizza",
                explanation: "Each slice is a sector. The angle determines the slice size, and the radius affects the crust length",
                suitableFor: ['sector_area', 'arc_length', 'multiple_points'],
                ELI5: "Cutting a pizza into 8 slices means each slice is 45° (360° ÷ 8). Bigger pizzas (larger radius) have longer crust on each slice"
            },
            walking_around_fountain: {
                analogy: "Walking around a circular fountain",
                explanation: "The distance you walk is the arc length. How far you've gone around is the angle",
                suitableFor: ['arc_length', 'point_from_angle'],
                ELI5: "If you walk around a fountain, the arc is your path along the edge. Going halfway around is 180°"
            },
            spotlight_on_wall: {
                analogy: "Rotating spotlight hitting a wall",
                explanation: "As the light rotates from the center, it hits different points on the circular wall",
                suitableFor: ['point_from_angle', 'tangent_line'],
                ELI5: "A spinning flashlight in the center lights up different spots on the circular wall as it turns"
            },
            wheel_and_spoke: {
                analogy: "Spoke on a wheel",
                explanation: "The spoke (radius) connects center to rim. A point on the rim moves in a circle as the wheel spins",
                suitableFor: ['point_from_angle', 'verify_point', 'distance'],
                ELI5: "Imagine a bicycle wheel. Put a sticker on the rim. As the wheel spins, the sticker goes around in a perfect circle"
            },
            compass_navigation: {
                analogy: "Using a compass for directions",
                explanation: "North is 0°, East is 90°, South is 180°, West is 270° - just like angles on a circle",
                suitableFor: ['angle_from_point', 'point_from_angle'],
                ELI5: "A compass shows directions in a circle. North is like 0°, East is like 90°, and so on around the circle"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            point_from_angle: {
                level1: "What information do you have about the circle?",
                level2: "You need to find x and y coordinates. Which trig functions relate angles to coordinates?",
                level3: "Use x = h + r·cos(θ) and y = k + r·sin(θ)",
                level4: "Make sure angle is in radians if using standard formulas, and don't forget to add center coordinates (h, k)"
            },
            angle_from_point: {
                level1: "What do you need to find? How are angles related to coordinates?",
                level2: "First translate the point relative to the circle's center",
                level3: "Use atan2(y - k, x - h) to find angle in correct quadrant",
                level4: "Remember atan2 gives angle in radians from -π to π; convert to degrees if needed"
            },
            verify_point: {
                level1: "What makes a point be ON a circle?",
                level2: "The distance from the point to the center should equal the radius",
                level3: "Substitute the point into (x - h)² + (y - k)² and see if it equals r²",
                level4: "Calculate (x - h)² + (y - k)² and compare to r²; if equal, point is on circle"
            },
            arc_length: {
                level1: "What determines the length of an arc on a circle?",
                level2: "Arc length depends on the radius and the central angle",
                level3: "Use the formula s = rθ, but make sure θ is in radians",
                level4: "If angle is in degrees, convert to radians first: θ_rad = θ_deg × π/180, then s = rθ_rad"
            },
            sector_area: {
                level1: "What is a sector? How is it related to the full circle?",
                level2: "A sector is a fraction of the circle; the angle determines what fraction",
                level3: "Use A = (1/2)r²θ with θ in radians, or A = (θ/360°)·πr² with θ in degrees",
                level4: "Choose the formula matching your angle units, then substitute r and θ carefully"
            },
            chord_length: {
                level1: "What is a chord? How does it relate to the central angle?",
                level2: "A chord is the straight-line distance between two points on the circle",
                level3: "Use the formula c = 2r·sin(θ/2) where θ is the central angle",
                level4: "Make sure to divide the angle by 2 before taking the sine, and multiply the result by 2r"
            },
            tangent_line: {
                level1: "What is special about a tangent line to a circle?",
                level2: "A tangent is perpendicular to the radius at the point of tangency",
                level3: "Find the slope of the radius, then use the negative reciprocal for tangent slope",
                level4: "Radius slope = (y-k)/(x-h); tangent slope = -(x-h)/(y-k); then use point-slope form"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "What is sin(90°)?",
                    answer: 1,
                    assesses: "basic_trigonometry",
                    difficulty: "basic"
                },
                {
                    question: "Convert 180° to radians",
                    answer: "π",
                    assesses: "angle_conversion",
                    difficulty: "basic"
                },
                {
                    question: "What is the distance from (0,0) to (3,4)?",
                    answer: 5,
                    assesses: "distance_formula",
                    difficulty: "basic"
                },
                {
                    question: "Find point on x² + y² = 1 at angle 0°",
                    answer: "(1, 0)",
                    assesses: "point_from_angle",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "To find a point on a circle given an angle, which formulas do you use?",
                    options: ["x = r·cos(θ), y = r·sin(θ)", "x = r·sin(θ), y = r·cos(θ)", "x = θ/r, y = r·θ"],
                    correct: "x = r·cos(θ), y = r·sin(θ)",
                    explanation: "Cosine gives x-coordinate, sine gives y-coordinate from angle"
                },
                {
                    question: "What function finds angle from point, accounting for all quadrants?",
                    options: ["arctan", "atan2", "arcsin", "arccos"],
                    correct: "atan2",
                    explanation: "atan2 considers signs of both x and y to determine correct quadrant"
                },
                {
                    question: "To verify point (x,y) is on circle (x-h)²+(y-k)²=r², you should:",
                    options: [
                        "Check if (x-h)²+(y-k)² = r²",
                        "Check if x² + y² = r²",
                        "Check if (x+h)²+(y+k)² = r²"
                    ],
                    correct: "Check if (x-h)²+(y-k)² = r²",
                    explanation: "Substitute point coordinates and verify equation is satisfied"
                }
            ],
            summative: [
                {
                    question: "Find all points on (x-2)²+(y-1)²=25 at angles 0°, 90°, 180°, 270°",
                    answer: [(7,1), (2,6), (-3,1), (2,-4)],
                    showsWork: true,
                    rubric: {
                        identify_center_radius: 1,
                        apply_formula_correctly: 2,
                        calculate_all_points: 2
                    }
                },
                {
                    question: "Find the arc length on a circle of radius 12 for a central angle of 135°",
                    answer: "9π",
                    showsWork: true,
                    rubric: {
                        convert_to_radians: 1,
                        apply_formula: 1,
                        simplify_answer: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "Find point on x² + y² = 1 at 0°",
                    "Is (0, 5) on x² + y² = 25?",
                    "Find arc length for r = 6, θ = π radians"
                ],
                medium: [
                    "Find point on (x-1)² + (y+2)² = 9 at 45°",
                    "Find angle of point (√3, 1) on circle x² + y² = 4",
                    "Find chord length for r = 10, central angle = 60°"
                ],
                hard: [
                    "Find 8 equally spaced points on (x-3)² + (y+1)² = 16",
                    "Find tangent line to x² + y² = 13 at point (2, 3)",
                    "Find circle passing through (1,1), (4,2), (3,5)"
                ]
            },
            byObjective: {
                canFindPointFromAngle: [
                    "Find point at 30° on x² + y² = 4",
                    "Find point at 120° on (x-2)² + y² = 9",
                    "Find point at π/4 on circle centered at (1, 1) with r = 5"
                ],
                canFindAngleFromPoint: [
                    "Find angle of (1, 1) on x² + y² = 2",
                    "Find angle of (3, 0) on (x-1)² + y² = 4",
                    "Find angle of (-1, √3) on x² + y² = 4"
                ],
                canVerifyPoint: [
                    "Is (3, 4) on x² + y² = 25?",
                    "Is (2, 3) on (x-1)² + (y-2)² = 4?",
                    "Is (0, 0) on (x+1)² + y² = 1?"
                ],
                canCalculateArcLength: [
                    "Arc length for r = 8, θ = π/2",
                    "Arc length for r = 15, θ = 60°",
                    "Arc for semicircle with radius 10"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "have_angle_need_point": "Use x = h + r·cos(θ), y = k + r·sin(θ)",
                "have_point_need_angle": "Use θ = atan2(y - k, x - h)",
                "verify_point_on_circle": "Check if (x-h)² + (y-k)² = r²",
                "find_arc_length": "Use s = rθ (θ in radians)",
                "find_sector_area": "Use A = (1/2)r²θ (θ in radians)",
                "find_chord_length": "Use c = 2r·sin(θ/2)",
                "find_tangent": "Use perpendicular slope to radius"
            },
            whenToUseWhat: {
                parametric_form: "When dealing with motion, animation, or multiple points",
                standard_form: "When verifying points or finding geometric properties",
                polar_form: "When angle is primary variable",
                distance_formula: "When verifying point on circle or finding relationships"
            },
            methodSelection: {
                factorsToConsider: [
                    "What is given (angle, point, or both)?",
                    "What needs to be found?",
                    "Are angles in degrees or radians?",
                    "Is circle centered at origin?",
                    "Are coordinates or measurements needed?"
                ],
                generalApproach: [
                    "1. Identify circle center (h, k) and radius r",
                    "2. Determine what is given and what to find",
                    "3. Select appropriate formula",
                    "4. Check angle units (convert if needed)",
                    "5. Calculate carefully",
                    "6. Verify answer makes geometric sense"
                ]
            },
            optimizationTips: {
                "Work in radians for most formulas": "Convert degrees to radians early",
                "Draw a diagram": "Sketch helps visualize problem",
                "Check quadrant": "Ensure angle matches point position",
                "Verify with substitution": "Plug answer back into equation",
                "Use atan2 not atan": "Avoids quadrant ambiguity"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Basic Points Sprint",
                    timeLimit: 60,
                    problems: [
                        "Point on x²+y²=1 at 0°",
                        "Point on x²+y²=1 at 90°",
                        "Point on x²+y²=1 at 180°",
                        "Point on x²+y²=1 at 270°",
                        "Point on x²+y²=4 at 45°",
                        "Point on x²+y²=9 at 60°"
                    ]
                },
                {
                    name: "Angle Finding Challenge",
                    timeLimit: 90,
                    problems: [
                        "Angle of (1, 0) on unit circle",
                        "Angle of (0, 1) on unit circle",
                        "Angle of (-1, 0) on unit circle",
                        "Angle of (1, 1) on x²+y²=2",
                        "Angle of (√3, 1) on x²+y²=4"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Angle",
                    problem: "A point on x² + y² = 25 has x-coordinate 3. What are possible y-coordinates and angles?",
                    solution: "y = ±4; angles ≈ 53.13° and 306.87°",
                    approach: "Use circle equation to find y, then find both angles"
                },
                {
                    name: "Equal Division",
                    problem: "Divide circle into n equal parts. What angle increment?",
                    solution: "Δθ = 360°/n or 2π/n radians",
                    application: "Used for regular polygons and equal spacing"
                },
                {
                    name: "Find the Circle",
                    problem: "Three points (0, 0), (4, 0), (0, 3) lie on a circle. Find its equation.",
                    solution: "(x - 2)² + (y - 1.5)² = 6.25",
                    approach: "Center is equidistant from all three points"
                }
            ],
            applications: [
                {
                    scenario: "Ferris Wheel Height",
                    problem: "Ferris wheel radius 50 ft, center 55 ft above ground. Height at 60° rotation?",
                    equation: "h = 55 + 50·sin(60°)",
                    solution: "≈ 98.3 ft"
                },
                {
                    scenario: "Satellite Position",
                    problem: "Satellite orbits Earth (radius 4000 mi) at altitude 200 mi. After 1/4 orbit from starting point (4200, 0), what's position?",
                    equation: "x = 0, y = 4200 (quarter circle)",
                    solution: "(0, 4200)"
                },
                {
                    scenario: "Sprinkler Coverage",
                    problem: "Sprinkler waters 120° sector with 15 ft radius. What area?",
                    equation: "A = (120°/360°)·π(15²)",
                    solution: "≈ 235.6 sq ft"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Find point on x² + y² = 25 at 90°",
                        "r = 5, θ = 90°",
                        "x = 5·cos(90°) = 5·1 = 5",  // ERROR: cos(90°) = 0, not 1
                        "y = 5·sin(90°) = 5·0 = 0",  // ERROR: sin(90°) = 1, not 0
                        "Point: (5, 0)"
                    ],
                    correctAnswer: "(0, 5)",
                    errorType: "Confused values of cos(90°) and sin(90°)"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Arc length for r = 6, θ = 90°",
                        "s = rθ = 6·90 = 540"  // ERROR: used degrees instead of radians
                    ],
                    correctAnswer: "s = 6·(π/2) = 3π ≈ 9.42",
                    errorType: "Used degrees in radian formula without converting"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "Find angle of point (3, 4) on circle",
                        "tan(θ) = 4/3",
                        "θ = arctan(4/3) ≈ 53.13°",  // Correct for this quadrant
                        "But used arctan(-3/-4) for point (-3, -4)",
                        "θ = arctan(3/4) ≈ 36.87°"  // ERROR: wrong quadrant
                    ],
                    correctAnswer: "θ ≈ 233.13° (third quadrant)",
                    errorType: "Didn't account for quadrant; should use atan2"
                }
            ]
        };
    }

    // MAIN SOLVER METHOD
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
                points: this.currentSolution?.points,
                angle: this.currentSolution?.angle
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
                    const extractedParams = this.extractCircleParameters(parameters, type);

                    return {
                        originalInput: equation || scenario,
                        cleanInput: cleanInput,
                        type: type,
                        scenario: scenario,
                        parameters: { ...extractedParams, ...parameters },
                        context: { ...context },
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        // Default to point from angle if basic parameters provided
        if (parameters.h !== undefined && parameters.k !== undefined && parameters.r !== undefined) {
            return {
                originalInput: equation || 'Circle problem with given parameters',
                cleanInput: cleanInput,
                type: 'point_from_angle',
                scenario: scenario,
                parameters: { 
                    h: parameters.h || 0,
                    k: parameters.k || 0,
                    r: parameters.r || 1,
                    ...parameters 
                },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize circle problem type from: ${equation || scenario}`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/≤/g, '<=')
            .replace(/≥/g, '>=')
            .replace(/≠/g, '!=')
            .replace(/π/g, 'pi')
            .replace(/°/g, 'deg')
            .trim();
    }

    extractCircleParameters(params, type) {
        const extracted = {
            h: params.h || 0,           // center x
            k: params.k || 0,           // center y
            r: params.r || 1,           // radius
            theta: params.theta || params.angle || 0,  // angle
            x: params.x,                // point x coordinate
            y: params.y,                // point y coordinate
            angleUnit: params.angleUnit || 'degrees'
        };

        return extracted;
    }

    solveCircleProblem_Internal(problem) {
        const solver = this.circleTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for circle problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // CIRCLE PROBLEM SOLVERS

    solvePointFromAngle(problem) {
        const { h, k, r, theta, angleUnit } = problem.parameters;

        // Convert angle to radians if needed
        const thetaRad = angleUnit === 'degrees' ? (theta * Math.PI / 180) : theta;

        // Calculate point coordinates
        const x = h + r * Math.cos(thetaRad);
        const y = k + r * Math.sin(thetaRad);

        return {
            type: 'Point from Angle',
            circle: {
                center: { h, k },
                radius: r,
                equation: `(x - ${h})² + (y - ${k})² = ${r}²`
            },
            angle: {
                degrees: angleUnit === 'degrees' ? theta : (theta * 180 / Math.PI),
                radians: thetaRad,
                inputUnit: angleUnit
            },
            point: { x, y },
            verification: this.verifyPointOnCircle(x, y, h, k, r),
            category: 'point_from_angle'
        };
    }

    solveAngleFromPoint(problem) {
        const { h, k, r, x, y, angleUnit } = problem.parameters;

        // Verify point is approximately on circle
        const verification = this.verifyPointOnCircle(x, y, h, k, r);

        // Calculate angle using atan2 (handles all quadrants correctly)
        const dx = x - h;
        const dy = y - k;
        const thetaRad = Math.atan2(dy, dx);
        const thetaDeg = thetaRad * 180 / Math.PI;

        // Normalize to 0-360 range if needed
        const normalizedDeg = thetaDeg < 0 ? thetaDeg + 360 : thetaDeg;

        return {
            type: 'Angle from Point',
            circle: {
                center: { h, k },
                radius: r,
                equation: `(x - ${h})² + (y - ${k})² = ${r}²`
            },
            point: { x, y },
            angle: {
                radians: thetaRad,
                degrees: thetaDeg,
                normalized: normalizedDeg,
                quadrant: this.identifyQuadrant(dx, dy)
            },
            verification: verification,
            onCircle: verification.isOnCircle,
            category: 'angle_from_point'
        };
    }

    solveVerifyPoint(problem) {
        const { h, k, r, x, y } = problem.parameters;

        const verification = this.verifyPointOnCircle(x, y, h, k, r);

        return {
            type: 'Verify Point on Circle',
            circle: {
                center: { h, k },
                radius: r,
                equation: `(x - ${h})² + (y - ${k})² = ${r}²`
            },
            point: { x, y },
            verification: verification,
            isOnCircle: verification.isOnCircle,
            relationship: verification.relationship,
            category: 'verify_point'
        };
    }

    solveArcLength(problem) {
        const { h, k, r, theta, angleUnit, theta1, theta2 } = problem.parameters;

        let angle, angle1, angle2;

        // Handle either single angle or two angles (arc between them)
        if (theta1 !== undefined && theta2 !== undefined) {
            angle1 = angleUnit === 'degrees' ? (theta1 * Math.PI / 180) : theta1;
            angle2 = angleUnit === 'degrees' ? (theta2 * Math.PI / 180) : theta2;
            angle = Math.abs(angle2 - angle1);
        } else {
            angle = angleUnit === 'degrees' ? (theta * Math.PI / 180) : theta;
        }

        // Arc length formula: s = rθ (θ in radians)
        const arcLength = r * angle;

        // Also calculate as fraction of circumference
        const circumference = 2 * Math.PI * r;
        const fraction = angle / (2 * Math.PI);

        return {
            type: 'Arc Length',
            circle: {
                center: { h, k },
                radius: r,
                circumference: circumference
            },
            angle: {
                radians: angle,
                degrees: angle * 180 / Math.PI
            },
            arcLength: arcLength,
            fractionOfCircle: fraction,
            percentOfCircle: fraction * 100,
            category: 'arc_length'
        };
    }

    solveSectorArea(problem) {
        const { h, k, r, theta, angleUnit } = problem.parameters;

        // Convert angle to radians
        const thetaRad = angleUnit === 'degrees' ? (theta * Math.PI / 180) : theta;

        // Sector area formula: A = (1/2)r²θ (θ in radians)
        const sectorArea = 0.5 * r * r * thetaRad;

        // Circle area for comparison
        const circleArea = Math.PI * r * r;
        const fraction = thetaRad / (2 * Math.PI);

        return {
            type: 'Sector Area',
            circle: {
                center: { h, k },
                radius: r,
                totalArea: circleArea
            },
            angle: {
                radians: thetaRad,
                degrees: theta
            },
            sectorArea: sectorArea,
            fractionOfCircle: fraction,
            percentOfCircle: fraction * 100,
            category: 'sector_area'
        };
    }

    solveChordLength(problem) {
        const { h, k, r, theta, angleUnit, x1, y1, x2, y2 } = problem.parameters;

        let chordLength;

        // Method 1: Using central angle
        if (theta !== undefined) {
            const thetaRad = angleUnit === 'degrees' ? (theta * Math.PI / 180) : theta;
            // Chord length formula: c = 2r·sin(θ/2)
            chordLength = 2 * r * Math.sin(thetaRad / 2);

            return {
                type: 'Chord Length',
                method: 'Using central angle',
                circle: {
                    center: { h, k },
                    radius: r
                },
                angle: {
                    radians: thetaRad,
                    degrees: theta
                },
                chordLength: chordLength,
                category: 'chord_length'
            };
        }

        // Method 2: Using two points
        if (x1 !== undefined && y1 !== undefined && x2 !== undefined && y2 !== undefined) {
            chordLength = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

            return {
                type: 'Chord Length',
                method: 'Using two points',
                circle: {
                    center: { h, k },
                    radius: r
                },
                point1: { x: x1, y: y1 },
                point2: { x: x2, y: y2 },
                chordLength: chordLength,
                category: 'chord_length'
            };
        }

        throw new Error('Insufficient information for chord length calculation');
    }

    solveTangentLine(problem) {
        const { h, k, r, x, y } = problem.parameters;

        // Verify point is on circle
        const verification = this.verifyPointOnCircle(x, y, h, k, r);

        if (!verification.isOnCircle) {
            return {
                type: 'Tangent Line',
                error: 'Point is not on the circle',
                verification: verification,
                category: 'tangent_line'
            };
        }

        // Radius slope
        const dx = x - h;
        const dy = y - k;

        let tangentSlope, tangentEquation;

        // Handle vertical and horizontal cases
        if (Math.abs(dx) < 1e-10) {
            // Vertical radius → horizontal tangent
            tangentSlope = 0;
            tangentEquation = `y = ${y}`;
        } else if (Math.abs(dy) < 1e-10) {
            // Horizontal radius → vertical tangent
            tangentSlope = undefined;
            tangentEquation = `x = ${x}`;
        } else {
            const radiusSlope = dy / dx;
            tangentSlope = -1 / radiusSlope; // Negative reciprocal

            // Point-slope form: y - y1 = m(x - x1)
            const b = y - tangentSlope * x;
            tangentEquation = `y = ${tangentSlope.toFixed(4)}x + ${b.toFixed(4)}`;
        }

        return {
            type: 'Tangent Line',
            circle: {
                center: { h, k },
                radius: r
            },
            pointOfTangency: { x, y },
            radiusSlope: dy / dx,
            tangentSlope: tangentSlope,
            tangentEquation: tangentEquation,
            verification: verification,
            category: 'tangent_line'
        };
    }

    solveDistanceToCircle(problem) {
        const { h, k, r, x, y } = problem.parameters;

        // Distance from point to center
        const distanceToCenter = Math.sqrt((x - h) ** 2 + (y - k) ** 2);

        // Distance from point to circle
        let distanceToCircle, relationship, closestPoint;

        if (distanceToCenter < r) {
            // Point inside circle
            relationship = 'inside';
            distanceToCircle = r - distanceToCenter;

            // Closest point is on the opposite side
            const angle = Math.atan2(y - k, x - h);
            closestPoint = {
                x: h + r * Math.cos(angle),
                y: k + r * Math.sin(angle)
            };

        } else if (Math.abs(distanceToCenter - r) < 1e-10) {
            // Point on circle
            relationship = 'on circle';
            distanceToCircle = 0;
            closestPoint = { x, y };

        } else {
            // Point outside circle
            relationship = 'outside';
            distanceToCircle = distanceToCenter - r;

            // Closest point is along the line from center to point
            const angle = Math.atan2(y - k, x - h);
            closestPoint = {
                x: h + r * Math.cos(angle),
                y: k + r * Math.sin(angle)
            };
        }

        // Farthest point (always on opposite side)
        const farAngle = Math.atan2(y - k, x - h) + Math.PI;
        const farthestPoint = {
            x: h + r * Math.cos(farAngle),
            y: k + r * Math.sin(farAngle)
        };
        const distanceToFarthest = Math.sqrt(
            (x - farthestPoint.x) ** 2 + (y - farthestPoint.y) ** 2
        );

        return {
            type: 'Distance to Circle',
            circle: {
                center: { h, k },
                radius: r
            },
            point: { x, y },
            distanceToCenter: distanceToCenter,
            relationship: relationship,
            distanceToCircle: distanceToCircle,
            closestPoint: closestPoint,
            farthestPoint: farthestPoint,
            distanceToFarthest: distanceToFarthest,
            category: 'distance_to_circle'
        };
    }

    solveMultiplePoints(problem) {
        const { h, k, r, n, startAngle = 0, angleUnit = 'degrees' } = problem.parameters;

        const startRad = angleUnit === 'degrees' ? (startAngle * Math.PI / 180) : startAngle;
        const angleIncrement = (2 * Math.PI) / n;

        const points = [];

        for (let i = 0; i < n; i++) {
            const angle = startRad + i * angleIncrement;
            const x = h + r * Math.cos(angle);
            const y = k + r * Math.sin(angle);

            points.push({
                index: i,
                angle: {
                    radians: angle,
                    degrees: angle * 180 / Math.PI
                },
                coordinates: { x, y }
            });
        }

        return {
            type: 'Multiple Points on Circle',
            circle: {
                center: { h, k },
                radius: r
            },
            numberOfPoints: n,
            angleIncrement: {
                radians: angleIncrement,
                degrees: angleIncrement * 180 / Math.PI
            },
            startAngle: {
                radians: startRad,
                degrees: startAngle
            },
            points: points,
            category: 'multiple_points'
        };
    }

    solveCircleFromPoints(problem) {
        // This is a complex problem - finding circle through 3 points
        const { x1, y1, x2, y2, x3, y3 } = problem.parameters;

        // Using determinant method to find center
        const A = x1 * (y2 - y3) - y1 * (x2 - x3) + x2 * y3 - x3 * y2;

        if (Math.abs(A) < 1e-10) {
            return {
                type: 'Circle from Points',
                error: 'Points are collinear - no unique circle',
                category: 'circle_from_points'
            };
        }

        const B = (x1 ** 2 + y1 ** 2) * (y3 - y2) +
                  (x2 ** 2 + y2 ** 2) * (y1 - y3) +
                  (x3 ** 2 + y3 ** 2) * (y2 - y1);

        const C = (x1 ** 2 + y1 ** 2) * (x2 - x3) +
                  (x2 ** 2 + y2 ** 2) * (x3 - x1) +
                  (x3 ** 2 + y3 ** 2) * (x1 - x2);

        const h = -B / (2 * A);
        const k = -C / (2 * A);

        const r = Math.sqrt((x1 - h) ** 2 + (y1 - k) ** 2);

        return {
            type: 'Circle from Points',
            inputPoints: [
                { x: x1, y: y1 },
                { x: x2, y: y2 },
                { x: x3, y: y3 }
            ],
            circle: {
                center: { h, k },
                radius: r,
                equation: `(x - ${h.toFixed(4)})² + (y - ${k.toFixed(4)})² = ${r.toFixed(4)}²`
            },
            verification: {
                point1: this.verifyPointOnCircle(x1, y1, h, k, r),
                point2: this.verifyPointOnCircle(x2, y2, h, k, r),
                point3: this.verifyPointOnCircle(x3, y3, h, k, r)
            },
            category: 'circle_from_points'
        };
    }

    // VERIFICATION METHODS

    verifyPointOnCircle(x, y, h, k, r) {
        const distanceSquared = (x - h) ** 2 + (y - k) ** 2;
        const radiusSquared = r ** 2;
        const difference = Math.abs(distanceSquared - radiusSquared);
        const tolerance = 1e-6;

        const isOnCircle = difference < tolerance;

        let relationship;
        if (isOnCircle) {
            relationship = 'on circle';
        } else if (distanceSquared < radiusSquared) {
            relationship = 'inside circle';
        } else {
            relationship = 'outside circle';
        }

        return {
            point: { x, y },
            distanceSquared: distanceSquared,
            radiusSquared: radiusSquared,
            difference: difference,
            isOnCircle: isOnCircle,
            relationship: relationship,
            distance: Math.sqrt(distanceSquared)
        };
    }

    identifyQuadrant(x, y) {
        if (x > 0 && y >= 0) return 'I (0° to 90°)';
        if (x <= 0 && y > 0) return 'II (90° to 180°)';
        if (x < 0 && y <= 0) return 'III (180° to 270°)';
        if (x >= 0 && y < 0) return 'IV (270° to 360°)';
        return 'On axis';
    }

    // STEP GENERATION

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
            case 'point_from_angle':
                return this.generatePointFromAngleSteps(problem, solution);
            case 'angle_from_point':
                return this.generateAngleFromPointSteps(problem, solution);
            case 'verify_point':
                return this.generateVerifyPointSteps(problem, solution);
            case 'arc_length':
                return this.generateArcLengthSteps(problem, solution);
            case 'sector_area':
                return this.generateSectorAreaSteps(problem, solution);
            case 'chord_length':
                return this.generateChordLengthSteps(problem, solution);
            case 'tangent_line':
                return this.generateTangentLineSteps(problem, solution);
            case 'distance_to_circle':
                return this.generateDistanceToCircleSteps(problem, solution);
            case 'multiple_points':
                return this.generateMultiplePointsSteps(problem, solution);
            default:
                return this.generateGenericCircleSteps(problem, solution);
        }
    }

    generatePointFromAngleSteps(problem, solution) {
        const steps = [];
        const { h, k, r, theta, angleUnit } = problem.parameters;

        // Step 1: Identify circle parameters
        steps.push({
            stepNumber: 1,
            step: 'Identify circle parameters',
            description: 'Extract center coordinates and radius from circle equation',
            circleInfo: `Center: (${h}, ${k}), Radius: ${r}`,
            equation: solution.circle.equation,
            reasoning: 'We need these to locate the point on the circle',
            goalStatement: 'Find the point at the specified angle on this circle'
        });

        // Step 2: Convert angle if needed
        if (angleUnit === 'degrees') {
            steps.push({
                stepNumber: 2,
                step: 'Convert angle to radians',
                description: `Convert ${theta}° to radians`,
                beforeExpression: `${theta}°`,
                operation: `× (π/180)`,
                afterExpression: `${solution.angle.radians.toFixed(6)} radians`,
                reasoning: 'Standard trigonometric functions use radians',
                algebraicRule: 'Radians = Degrees × π/180'
            });
        } else {
            steps.push({
                stepNumber: 2,
                step: 'Angle already in radians',
                description: `Angle is ${theta} radians`,
                expression: `θ = ${theta} rad`,
                reasoning: 'No conversion needed - angle is already in radians'
            });
        }

        // Step 3: Calculate x-coordinate
        steps.push({
            stepNumber: 3,
            step: 'Calculate x-coordinate',
            description: 'Use x = h + r·cos(θ)',
            formula: 'x = h + r·cos(θ)',
            beforeExpression: `x = ${h} + ${r}·cos(${solution.angle.radians.toFixed(4)})`,
            calculation: `x = ${h} + ${r}·${Math.cos(solution.angle.radians).toFixed(4)}`,
            afterExpression: `x = ${solution.point.x.toFixed(4)}`,
            reasoning: 'Cosine gives the horizontal displacement from center',
            visualHint: 'cos(θ) tells us how far left or right from the center'
        });

        // Step 4: Calculate y-coordinate
        steps.push({
            stepNumber: 4,
            step: 'Calculate y-coordinate',
            description: 'Use y = k + r·sin(θ)',
            formula: 'y = k + r·sin(θ)',
            beforeExpression: `y = ${k} + ${r}·sin(${solution.angle.radians.toFixed(4)})`,
            calculation: `y = ${k} + ${r}·${Math.sin(solution.angle.radians).toFixed(4)}`,
            afterExpression: `y = ${solution.point.y.toFixed(4)}`,
            reasoning: 'Sine gives the vertical displacement from center',
            visualHint: 'sin(θ) tells us how far up or down from the center'
        });

        // Step 5: State the answer
        steps.push({
            stepNumber: 5,
            step: 'Final answer',
            description: 'The point on the circle',
            expression: `Point: (${solution.point.x.toFixed(4)}, ${solution.point.y.toFixed(4)})`,
            finalAnswer: true,
            reasoning: 'This point lies on the circle at the specified angle'
        });

        return steps;
    }

    generateAngleFromPointSteps(problem, solution) {
        const steps = [];
        const { h, k, x, y } = problem.parameters;

        // Step 1: Identify given information
        steps.push({
            stepNumber: 1,
            step: 'Identify given information',
            description: 'List the circle center and point coordinates',
            circleInfo: `Center: (${h}, ${k})`,
            pointInfo: `Point: (${x}, ${y})`,
            reasoning: 'We need these to find the angle',
            goalStatement: 'Find the angle from center to this point'
        });

        // Step 2: Translate point relative to center
        const dx = x - h;
        const dy = y - k;

        steps.push({
            stepNumber: 2,
            step: 'Translate point relative to center',
            description: 'Calculate displacement from center',
            beforeExpression: `Point: (${x}, ${y}), Center: (${h}, ${k})`,
            operation: 'Subtract center coordinates',
            afterExpression: `Δx = ${x} - ${h} = ${dx}, Δy = ${y} - ${k} = ${dy}`,
            reasoning: 'We need coordinates relative to center to find angle',
            visualHint: 'This shifts the center to the origin for easier angle calculation'
        });

        // Step 3: Use atan2 to find angle
        steps.push({
            stepNumber: 3,
            step: 'Calculate angle using atan2',
            description: 'Use atan2 function for correct quadrant',
            formula: 'θ = atan2(Δy, Δx)',
            beforeExpression: `θ = atan2(${dy}, ${dx})`,
            afterExpression: `θ = ${solution.angle.radians.toFixed(6)} radians`,
            reasoning: 'atan2 accounts for all quadrants correctly',
            algebraicRule: 'atan2 gives angle in range [-π, π]',
            visualHint: `Point is in quadrant ${solution.angle.quadrant}`
        });

        // Step 4: Convert to degrees if needed
        steps.push({
            stepNumber: 4,
            step: 'Convert to degrees',
            description: 'Convert radians to degrees',
            formula: 'Degrees = Radians × 180/π',
            beforeExpression: `${solution.angle.radians.toFixed(6)} × (180/π)`,
            afterExpression: `${solution.angle.degrees.toFixed(4)}°`,
            reasoning: 'Degrees are often more intuitive for interpretation'
        });

        // Step 5: Normalize to 0-360 range
        steps.push({
            stepNumber: 5,
            step: 'Normalize angle',
            description: 'Express angle in 0° to 360° range',
            beforeExpression: `${solution.angle.degrees.toFixed(4)}°`,
            afterExpression: `${solution.angle.normalized.toFixed(4)}°`,
            finalAnswer: true,
            reasoning: 'Standard form for angles around a circle'
        });

        return steps;
    }

    generateVerifyPointSteps(problem, solution) {
        const steps = [];
        const { h, k, r, x, y } = problem.parameters;

        // Step 1: State the verification goal
        steps.push({
            stepNumber: 1,
            step: 'Verification goal',
            description: 'Check if point satisfies circle equation',
            circleEquation: solution.circle.equation,
            pointToCheck: `(${x}, ${y})`,
            reasoning: 'A point is on the circle if it satisfies the equation',
            goalStatement: 'Substitute and check if left side equals right side'
        });

        // Step 2: Substitute point coordinates
        steps.push({
            stepNumber: 2,
            step: 'Substitute coordinates',
            description: 'Replace x and y with point coordinates',
            beforeExpression: `(x - ${h})² + (y - ${k})² = ${r}²`,
            operation: `Substitute x = ${x}, y = ${y}`,
            afterExpression: `(${x} - ${h})² + (${y} - ${k})² = ${r}²`,
            reasoning: 'Check if this equation is true',
            algebraicRule: 'Direct substitution'
        });

        // Step 3: Simplify left side
        const dx = x - h;
        const dy = y - k;

        steps.push({
            stepNumber: 3,
            step: 'Simplify parentheses',
            description: 'Calculate differences',
            beforeExpression: `(${x} - ${h})² + (${y} - ${k})²`,
            afterExpression: `(${dx})² + (${dy})²`,
            reasoning: 'Simplify before squaring'
        });

        // Step 4: Calculate squares
        const dxSquared = dx * dx;
        const dySquared = dy * dy;

        steps.push({
            stepNumber: 4,
            step: 'Calculate squares',
            description: 'Square each term',
            beforeExpression: `(${dx})² + (${dy})²`,
            calculation: `${dxSquared} + ${dySquared}`,
            afterExpression: `${dxSquared + dySquared}`,
            reasoning: 'Compute the sum of squares'
        });

        // Step 5: Compare to r²
        const rSquared = r * r;

        steps.push({
            stepNumber: 5,
            step: 'Compare to r²',
            description: 'Check if left side equals right side',
            leftSide: solution.verification.distanceSquared.toFixed(6),
            rightSide: `${r}² = ${rSquared}`,
            difference: solution.verification.difference.toExponential(2),
            conclusion: solution.verification.isOnCircle ? 'Point IS on circle' : `Point is ${solution.verification.relationship}`,
            finalAnswer: true,
            reasoning: solution.verification.isOnCircle ? 'Values match within tolerance' : 'Values do not match'
        });

        return steps;
    }

    generateArcLengthSteps(problem, solution) {
        const steps = [];
        const { r, theta, angleUnit } = problem.parameters;

        // Step 1: Identify given information
        steps.push({
            stepNumber: 1,
            step: 'Identify given information',
            description: 'List radius and angle',
            radiusInfo: `Radius r = ${r}`,
            angleInfo: `Angle θ = ${theta} ${angleUnit}`,
            reasoning: 'Arc length depends on both radius and central angle',
            goalStatement: 'Find the arc length using s = rθ'
        });

        // Step 2: Convert angle to radians if needed
        if (angleUnit === 'degrees') {
            steps.push({
                stepNumber: 2,
                step: 'Convert angle to radians',
                description: 'Arc length formula requires radians',
                formula: 'θ_rad = θ_deg × π/180',
                beforeExpression: `${theta}°`,
                calculation: `${theta} × π/180`,
                afterExpression: `${solution.angle.radians.toFixed(6)} radians`,
                reasoning: 'Standard arc length formula uses radians',
                algebraicRule: 'Angle conversion'
            });
        }

        // Step 3: Apply arc length formula
        steps.push({
            stepNumber: angleUnit === 'degrees' ? 3 : 2,
            step: 'Apply arc length formula',
            description: 'Calculate s = rθ',
            formula: 's = rθ (θ in radians)',
            beforeExpression: `s = ${r} × ${solution.angle.radians.toFixed(6)}`,
            afterExpression: `s = ${solution.arcLength.toFixed(4)}`,
            reasoning: 'Arc length is proportional to angle',
            visualHint: 'Larger angle means longer arc for same radius'
        });

        // Step 4: Interpret as fraction of circumference
        steps.push({
            stepNumber: angleUnit === 'degrees' ? 4 : 3,
            step: 'Interpret result',
            description: 'Compare to full circumference',
            circumference: `Full circle: C = 2πr = ${solution.circle.circumference.toFixed(4)}`,
            fraction: `Arc is ${(solution.fractionOfCircle * 100).toFixed(2)}% of circle`,
            expression: `Arc length = ${solution.arcLength.toFixed(4)}`,
            finalAnswer: true,
            reasoning: 'This helps visualize the arc size'
        });

        return steps;
    }

    generateSectorAreaSteps(problem, solution) {
        const steps = [];
        const { r, theta, angleUnit } = problem.parameters;

        // Step 1: Identify given information
        steps.push({
            stepNumber: 1,
            step: 'Identify given information',
            description: 'List radius and central angle',
            radiusInfo: `Radius r = ${r}`,
            angleInfo: `Central angle θ = ${theta} ${angleUnit}`,
            reasoning: 'Sector area is like a slice of pie',
            goalStatement: 'Find the area of the sector'
        });

        // Step 2: Convert angle to radians if needed
        if (angleUnit === 'degrees') {
            steps.push({
                stepNumber: 2,
                step: 'Convert angle to radians',
                description: 'Sector area formula requires radians',
                formula: 'θ_rad = θ_deg × π/180',
                beforeExpression: `${theta}°`,
                afterExpression: `${solution.angle.radians.toFixed(6)} radians`,
                reasoning: 'Standard sector formula uses radians'
            });
        }

        // Step 3: Apply sector area formula
        steps.push({
            stepNumber: angleUnit === 'degrees' ? 3 : 2,
            step: 'Apply sector area formula',
            description: 'Calculate A = (1/2)r²θ',
            formula: 'A = (1/2)r²θ (θ in radians)',
            beforeExpression: `A = (1/2) × ${r}² × ${solution.angle.radians.toFixed(6)}`,
            calculation: `A = (1/2) × ${r * r} × ${solution.angle.radians.toFixed(6)}`,
            afterExpression: `A = ${solution.sectorArea.toFixed(4)}`,
            reasoning: 'Sector area is fraction of total circle area',
            visualHint: 'Think of it as a pizza slice'
        });

        // Step 4: Compare to full circle
        steps.push({
            stepNumber: angleUnit === 'degrees' ? 4 : 3,
            step: 'Interpret result',
            description: 'Compare to full circle area',
            circleArea: `Full circle: A = πr² = ${solution.circle.totalArea.toFixed(4)}`,
            fraction: `Sector is ${(solution.fractionOfCircle * 100).toFixed(2)}% of circle`,
            expression: `Sector area = ${solution.sectorArea.toFixed(4)}`,
            finalAnswer: true,
            reasoning: 'This shows what fraction of the circle the sector represents'
        });

        return steps;
    }

    generateChordLengthSteps(problem, solution) {
        const steps = [];

        if (solution.method === 'Using central angle') {
            const { r, theta, angleUnit } = problem.parameters;

            steps.push({
                stepNumber: 1,
                step: 'Identify given information',
                description: 'List radius and central angle',
                radiusInfo: `Radius r = ${r}`,
                angleInfo: `Central angle θ = ${theta} ${angleUnit}`,
                reasoning: 'Chord connects two points on circle',
                goalStatement: 'Find straight-line distance between the points'
            });

            if (angleUnit === 'degrees') {
                steps.push({
                    stepNumber: 2,
                    step: 'Convert angle to radians',
                    description: 'Convert for trigonometric functions',
                    formula: 'θ_rad = θ_deg × π/180',
                    afterExpression: `${solution.angle.radians.toFixed(6)} radians`,
                    reasoning: 'Trig functions use radians'
                });
            }

            steps.push({
                stepNumber: angleUnit === 'degrees' ? 3 : 2,
                step: 'Apply chord length formula',
                description: 'Calculate c = 2r·sin(θ/2)',
                formula: 'c = 2r·sin(θ/2)',
                beforeExpression: `c = 2 × ${r} × sin(${solution.angle.radians.toFixed(6)}/2)`,
                calculation: `c = ${2 * r} × sin(${(solution.angle.radians / 2).toFixed(6)})`,
                afterExpression: `c = ${solution.chordLength.toFixed(4)}`,
                reasoning: 'Chord forms isosceles triangle with two radii',
                visualHint: 'Draw radii to endpoints to see the triangle',
                finalAnswer: true
            });

        } else {
            // Using two points
            const { x1, y1, x2, y2 } = problem.parameters;

            steps.push({
                stepNumber: 1,
                step: 'Identify two points',
                description: 'List coordinates of chord endpoints',
                point1: `(${x1}, ${y1})`,
                point2: `(${x2}, ${y2})`,
                reasoning: 'Chord is straight line between these points',
                goalStatement: 'Use distance formula'
            });

            steps.push({
                stepNumber: 2,
                step: 'Apply distance formula',
                description: 'Calculate d = √[(x₂-x₁)² + (y₂-y₁)²]',
                formula: 'd = √[(x₂-x₁)² + (y₂-y₁)²]',
                beforeExpression: `d = √[(${x2}-${x1})² + (${y2}-${y1})²]`,
                calculation: `d = √[${(x2 - x1) ** 2} + ${(y2 - y1) ** 2}]`,
                afterExpression: `d = ${solution.chordLength.toFixed(4)}`,
                finalAnswer: true,
                reasoning: 'This is the straight-line distance'
            });
        }

        return steps;
    }

    generateTangentLineSteps(problem, solution) {
        const steps = [];
        const { h, k, x, y } = problem.parameters;

        if (solution.error) {
            steps.push({
                stepNumber: 1,
                step: 'Verification',
                description: 'Check if point is on circle',
                error: solution.error,
                verification: solution.verification,
                reasoning: 'Tangent only exists at points ON the circle'
            });
            return steps;
        }

        // Step 1: Verify point on circle
        steps.push({
            stepNumber: 1,
            step: 'Verify point on circle',
            description: 'Confirm point lies on circle',
            pointInfo: `Point: (${x}, ${y})`,
            verification: 'Point is on circle ✓',
            reasoning: 'Tangent line touches circle at exactly this point'
        });

        // Step 2: Find radius slope
        const dx = x - h;
        const dy = y - k;

        steps.push({
            stepNumber: 2,
            step: 'Find radius slope',
            description: 'Calculate slope from center to point',
            formula: 'm_radius = (y - k)/(x - h)',
            beforeExpression: `m_radius = (${y} - ${k})/(${x} - ${h})`,
            afterExpression: `m_radius = ${dy}/${dx} = ${solution.radiusSlope.toFixed(4)}`,
            reasoning: 'Tangent is perpendicular to this radius',
            visualHint: 'Draw radius from center to point of tangency'
        });

        // Step 3: Find tangent slope
        steps.push({
            stepNumber: 3,
            step: 'Find tangent slope',
            description: 'Use negative reciprocal of radius slope',
            formula: 'm_tangent = -1/m_radius',
            beforeExpression: `m_tangent = -1/${solution.radiusSlope.toFixed(4)}`,
            afterExpression: `m_tangent = ${solution.tangentSlope !== undefined ? solution.tangentSlope.toFixed(4) : 'undefined (vertical)'}`,
            reasoning: 'Perpendicular lines have slopes that are negative reciprocals',
            algebraicRule: 'm₁ × m₂ = -1 for perpendicular lines'
        });

        // Step 4: Write tangent equation
        steps.push({
            stepNumber: 4,
            step: 'Write tangent equation',
            description: 'Use point-slope form',
            formula: 'y - y₁ = m(x - x₁)',
            beforeExpression: `y - ${y} = ${solution.tangentSlope !== undefined ? solution.tangentSlope.toFixed(4) : 'undefined'}(x - ${x})`,
            afterExpression: solution.tangentEquation,
            finalAnswer: true,
            reasoning: 'This line passes through the point with the tangent slope'
        });

        return steps;
    }

    generateDistanceToCircleSteps(problem, solution) {
        const steps = [];
        const { h, k, r, x, y } = problem.parameters;

        // Step 1: Calculate distance to center
        steps.push({
            stepNumber: 1,
            step: 'Calculate distance to center',
            description: 'Find distance from point to circle center',
            formula: 'd = √[(x - h)² + (y - k)²]',
            beforeExpression: `d = √[(${x} - ${h})² + (${y} - ${k})²]`,
            calculation: `d = √[${(x - h) ** 2} + ${(y - k) ** 2}]`,
            afterExpression: `d = ${solution.distanceToCenter.toFixed(4)}`,
            reasoning: 'This tells us how far the point is from center'
        });

        // Step 2: Compare to radius
        steps.push({
            stepNumber: 2,
            step: 'Compare distance to radius',
            description: 'Determine point relationship to circle',
            distanceToCenter: solution.distanceToCenter.toFixed(4),
            radius: r,
            relationship: solution.relationship,
            reasoning: 'If d < r: inside; d = r: on circle; d > r: outside',
            conclusion: `Point is ${solution.relationship}`
        });

        // Step 3: Calculate distance to circle
        steps.push({
            stepNumber: 3,
            step: 'Calculate distance to circle',
            description: 'Find shortest distance to circle boundary',
            formula: solution.relationship === 'outside' ? 'distance = d - r' : 'distance = r - d',
            calculation: solution.relationship === 'outside' ?
                `${solution.distanceToCenter.toFixed(4)} - ${r}` :
                `${r} - ${solution.distanceToCenter.toFixed(4)}`,
            afterExpression: `distance = ${solution.distanceToCircle.toFixed(4)}`,
            reasoning: 'This is the shortest path to reach the circle'
        });

        // Step 4: Find closest point
        steps.push({
            stepNumber: 4,
            step: 'Find closest point on circle',
            description: 'Calculate coordinates of nearest point',
            closestPoint: `(${solution.closestPoint.x.toFixed(4)}, ${solution.closestPoint.y.toFixed(4)})`,
            distanceToClosest: solution.distanceToCircle.toFixed(4),
            finalAnswer: true,
            reasoning: 'This point on circle is closest to the given point'
        });

        return steps;
    }

    generateMultiplePointsSteps(problem, solution) {
        const steps = [];
        const { h, k, r, n, startAngle } = problem.parameters;

        // Step 1: Determine angle increment
        steps.push({
            stepNumber: 1,
            step: 'Calculate angle increment',
            description: `Divide circle into ${n} equal parts`,
            formula: 'Δθ = 360°/n',
            calculation: `Δθ = 360°/${n}`,
            afterExpression: `Δθ = ${solution.angleIncrement.degrees.toFixed(4)}°`,
            reasoning: 'Each point is separated by this angle',
            visualHint: `Think of ${n} equally-spaced marks on a clock`
        });

        // Step 2: List starting conditions
        steps.push({
            stepNumber: 2,
            step: 'Set starting conditions',
            description: 'Identify first point angle',
            circleInfo: `Center: (${h}, ${k}), Radius: ${r}`,
            startingAngle: `θ₀ = ${startAngle}°`,
            angleIncrement: `Δθ = ${solution.angleIncrement.degrees.toFixed(4)}°`,
            reasoning: 'All other points build from this starting angle'
        });

        // Step 3: Calculate each point
        const pointSteps = solution.points.slice(0, Math.min(4, n)).map((pt, i) => {
            return {
                pointIndex: i,
                angle: `θ${i} = ${startAngle}° + ${i} × ${solution.angleIncrement.degrees.toFixed(4)}° = ${pt.angle.degrees.toFixed(4)}°`,
                coordinates: `(${pt.coordinates.x.toFixed(4)}, ${pt.coordinates.y.toFixed(4)})`
            };
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate points',
            description: 'Find coordinates for each angle',
            formula: 'x = h + r·cos(θ), y = k + r·sin(θ)',
            samplePoints: pointSteps,
            totalPoints: n,
            reasoning: 'Apply parametric equations at each angle',
            finalAnswer: true
        });

        if (n > 4) {
            steps.push({
                stepNumber: 4,
                step: 'Continue pattern',
                description: `Calculate remaining ${n - 4} points`,
                pattern: 'Add Δθ to previous angle, then calculate coordinates',
                note: `All ${n} points shown in full solution`
            });
        }

        return steps;
    }

    generateGenericCircleSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Circle problem',
            description: 'Solve the circle problem',
            problemType: solution.type,
            solution: solution,
            reasoning: 'Apply appropriate circle geometry techniques'
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
                trigonometric: this.getTrigonometricExplanation(step)
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
            'Identify circle parameters': "A circle is like drawing around with a compass. The center is where you put the pointy part, and the radius is how far the pencil reaches!",
            'Convert angle to radians': "Imagine measuring angles in pizza slices instead of degrees. Radians are like counting how many pieces of the whole pie you've gone around!",
            'Calculate x-coordinate': "The x tells us how far left or right to go from the center. We use cosine (a special calculator button) to figure this out from the angle!",
            'Calculate y-coordinate': "The y tells us how far up or down to go. We use sine (another special button) to find this from the angle!",
            'Translate point relative to center': "Pretend the center of the circle is at your home. Now we measure how far the point is from your home in each direction!",
            'Calculate angle using atan2': "This is like using a compass to find which direction to walk from your house to reach the point!",
            'Substitute coordinates': "We're putting the point's numbers into the circle formula to see if it fits, like trying on a shoe to see if it's your size!",
            'Apply arc length formula': "An arc is like walking along the edge of the circle. This formula tells us how far we walk!",
            'Apply sector area formula': "A sector is like a slice of pie. This tells us how big the slice is!"
        };

        return ELI5Explanations[step.step] || "We're taking another step to solve our circle puzzle!";
    }

    findRelevantAnalogy(step, problem) {
        const category = this.circleTypes[problem.type]?.category;

        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(category) || analogy.suitableFor.includes('all_types')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }

        return "Think of a circle like a wheel or clock face - everything is the same distance from the center!";
    }

    convertToSimpleLanguage(description) {
        const simplifications = {
            'radius': 'distance from center to edge',
            'center': 'middle point of circle',
            'coordinate': 'location number',
            'angle': 'how far around you turn',
            'radian': 'special way to measure angles',
            'degree': 'regular way to measure angles (like on a protractor)',
            'tangent': 'line that just touches the circle',
            'chord': 'line connecting two points on circle',
            'arc': 'curved path along the circle',
            'sector': 'pie slice shape',
            'circumference': 'distance all the way around circle',
            'substitute': 'put numbers in place of letters',
            'calculate': 'figure out the answer',
            'formula': 'recipe for solving',
            'cosine': 'special function for horizontal distance',
            'sine': 'special function for vertical distance'
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
            'Identify circle parameters': 'Draw a circle with center marked and radius drawn',
            'Convert angle to radians': 'Draw protractor showing both degree and radian marks',
            'Calculate x-coordinate': 'Draw right triangle showing radius, x-distance, and angle',
            'Calculate y-coordinate': 'Draw right triangle showing radius, y-distance, and angle',
            'Translate point relative to center': 'Draw circle with center at origin, show point displacement',
            'Calculate angle using atan2': 'Draw angle from positive x-axis to line connecting center to point',
            'Substitute coordinates': 'Show point on circle, highlight if it\'s on, inside, or outside',
            'Apply arc length formula': 'Draw arc with angle marked, show it\'s part of circle',
            'Apply sector area formula': 'Draw sector like pizza slice with angle labeled',
            'Find radius slope': 'Draw line from center to point with slope shown',
            'Find tangent slope': 'Draw perpendicular tangent line'
        };

        return visualizations[step.step] || 'Sketch the circle and mark relevant information';
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
        const category = this.circleTypes[problemType]?.category || 'point_from_angle';
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

    // HELPER METHODS FOR ENHANCED EXPLANATIONS

    getConceptualExplanation(step, problem) {
        const conceptualExplanations = {
            'Identify circle parameters': 'A circle is defined by its center point and radius. All points on the circle are exactly radius distance from the center.',
            'Convert angle to radians': 'Radians are the natural unit for angles in mathematics. One full rotation (360°) equals 2π radians.',
            'Calculate x-coordinate': 'Cosine relates an angle to the horizontal displacement. It gives us how far left or right from center.',
            'Calculate y-coordinate': 'Sine relates an angle to the vertical displacement. It gives us how far up or down from center.',
            'Translate point relative to center': 'By subtracting center coordinates, we shift perspective to treat center as origin, simplifying angle calculations.',
            'Calculate angle using atan2': 'atan2 is superior to arctan because it considers both x and y signs, giving the correct quadrant automatically.',
            'Substitute coordinates': 'A point satisfies the circle equation if and only if it lies exactly on the circle.',
            'Apply arc length formula': 'Arc length is proportional to both radius and angle - larger circles or wider angles give longer arcs.',
            'Apply sector area formula': 'Sector area is a fraction of the total circle area, determined by what fraction of 360° the central angle represents.',
            'Find radius slope': 'The radius at any point is the line segment from center to that point. Its slope determines the tangent orientation.',
            'Find tangent slope': 'Tangent and radius are perpendicular at the point of tangency - this is a fundamental property of circles.'
        };

        return conceptualExplanations[step.step] || 'This step applies circle geometry principles.';
    }

    getProceduralExplanation(step) {
        if (step.formula) {
            return `1. Write the formula: ${step.formula}
2. Substitute known values
3. Calculate the result
4. Verify it makes geometric sense`;
        }
        return 'Follow the standard procedure for this type of calculation.';
    }

    getVisualExplanation(step, problem) {
        const category = this.circleTypes[problem.type]?.category;

        const visualExplanations = {
            'point_from_angle': 'Draw the circle, mark the center, draw a radius at the given angle, mark the endpoint.',
            'angle_from_point': 'Draw a line from center to the point, measure the angle this line makes with the positive x-axis.',
            'verify_point': 'Plot the point and see if it lands exactly on the circle boundary.',
            'arc_length': 'Highlight the arc along the circle corresponding to the angle.',
            'sector_area': 'Shade the pie-slice region between two radii.',
            'chord_length': 'Draw the straight line connecting two points on the circle.',
            'tangent_line': 'Draw a line that touches the circle at exactly one point, perpendicular to the radius there.',
            'distance_to_circle': 'Draw the shortest path from the external point to the circle boundary.'
        };

        return visualExplanations[category] || 'Sketch the problem to visualize the solution.';
    }

    getTrigonometricExplanation(step) {
        const trigExplanations = {
            'Calculate x-coordinate': 'cos(θ) represents the ratio of adjacent side to hypotenuse in a right triangle, giving horizontal component.',
            'Calculate y-coordinate': 'sin(θ) represents the ratio of opposite side to hypotenuse, giving vertical component.',
            'Calculate angle using atan2': 'atan2(y, x) finds the angle whose tangent is y/x, accounting for quadrant based on signs.',
            'Apply chord length formula': 'Using the inscribed angle and sin function leverages the isosceles triangle formed by two radii and the chord.'
        };

        return trigExplanations[step.step] || 'Trigonometry connects angles and distances on circles.';
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
                'radius': 'distance to edge',
                'center': 'middle',
                'coordinate': 'location',
                'angle': 'turn amount',
                'radian': 'radian (angle unit)',
                'calculate': 'find',
                'formula': 'equation',
                'substitute': 'replace'
            },
            intermediate: {
                'radius': 'radius',
                'center': 'center',
                'coordinate': 'coordinate',
                'angle': 'angle',
                'radian': 'radian',
                'calculate': 'calculate',
                'formula': 'formula',
                'substitute': 'substitute'
            },
            ELI5: {
                'radius': 'how far from middle to edge',
                'center': 'the very middle point',
                'coordinate': 'the numbers that tell where something is',
                'angle': 'how far you\'ve turned around',
                'radian': 'a different way to measure angles',
                'calculate': 'figure out',
                'formula': 'the math recipe',
                'substitute': 'put the numbers where the letters are'
            },
            detailed: {
                'radius': 'radius (constant distance from center)',
                'center': 'center point (h, k)',
                'coordinate': 'Cartesian coordinate',
                'angle': 'angular measure',
                'radian': 'radian measure (arc length / radius)',
                'calculate': 'compute',
                'formula': 'mathematical formula',
                'substitute': 'substitute values'
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
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression || 'completed this step'}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary to continue solving the problem`,
            howItHelps: `This brings us closer to the final answer`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue the solution`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
    }

    generatePreventionTips(step, problemType) {
        const tips = {
            'Convert angle to radians': [
                'Always multiply degrees by π/180',
                'Double-check the conversion',
                'Label your angle units'
            ],
            'Calculate x-coordinate': [
                'Use cosine for x-coordinate',
                'Don\'t forget to add center x-coordinate (h)',
                'Verify angle is in radians'
            ],
            'Calculate y-coordinate': [
                'Use sine for y-coordinate',
                'Don\'t forget to add center y-coordinate (k)',
                'Check calculator is in correct mode'
            ],
            'Calculate angle using atan2': [
                'Use atan2, not atan, to get correct quadrant',
                'Subtract center coordinates first',
                'Result is in radians'
            ]
        };

        return tips[step.step] || ['Check your work', 'Verify units', 'Draw a diagram'];
    }

    generateCheckPoints(step) {
        return [
            'Did I use the correct formula?',
            'Are my angle units consistent?',
            'Did I include center coordinates if needed?',
            'Does my answer make geometric sense?'
        ];
    }

    identifyWarningFlags(step, problemType) {
        const warnings = {
            point_from_angle: step.step === 'Convert angle to radians' ?
                ['Ensure conversion factor is π/180', 'Don\'t confuse with 180/π'] : [],
            angle_from_point: step.step === 'Calculate angle using atan2' ?
                ['Make sure to use atan2, not atan', 'Remember to subtract center coordinates'] : [],
            arc_length: step.step === 'Apply arc length formula' ?
                ['Angle MUST be in radians', 'Don\'t use degrees in formula'] : []
        };

        const category = this.circleTypes[problemType]?.category || 'point_from_angle';
        return warnings[category] || [];
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'Identify circle parameters': 'Do I know the center (h, k) and radius r?',
            'Convert angle to radians': 'Did I multiply by π/180 correctly?',
            'Calculate x-coordinate': 'Did I use cosine and add the center x-coordinate?',
            'Calculate y-coordinate': 'Did I use sine and add the center y-coordinate?',
            'Translate point relative to center': 'Did I subtract h from x and k from y?',
            'Calculate angle using atan2': 'Did I use atan2 instead of atan?',
            'Substitute coordinates': 'Did I substitute correctly and simplify?',
            'Apply arc length formula': 'Is my angle in radians?',
            'Apply sector area formula': 'Did I use (1/2)r²θ with θ in radians?'
        };

        return questions[step.step] || 'Does this step make sense?';
    }

    describeExpectedResult(step) {
        const expectations = {
            'Convert angle to radians': 'A number between 0 and 2π for 0° to 360°',
            'Calculate x-coordinate': 'A number representing horizontal position',
            'Calculate y-coordinate': 'A number representing vertical position',
            'Calculate angle using atan2': 'An angle in radians, typically between -π and π',
            'Substitute coordinates': 'Left and right sides should be equal if point is on circle',
            'Apply arc length formula': 'A positive distance value',
            'Apply sector area formula': 'A positive area value'
        };

        return expectations[step.step] || 'A meaningful result that makes geometric sense';
    }

    generateTroubleshootingTips(step) {
        return [
            'If answer seems wrong, check angle units',
            'Verify you\'re using correct trig function (sin vs cos)',
            'Make sure to add center coordinates where needed',
            'Draw a diagram to visualize',
            'Use calculator in correct mode (degree vs radian)'
        ];
    }

    generateGuidingQuestions(step, problem) {
        const questions = {
            'Identify circle parameters': [
                'Where is the center of this circle?',
                'What is the radius?',
                'How do I read these from the equation?'
            ],
            'Convert angle to radians': [
                'Why do we need radians?',
                'What is the conversion formula?',
                'How many radians in a full circle?'
            ],
            'Calculate x-coordinate': [
                'Which trig function gives horizontal distance?',
                'What do I add to the result?',
                'Why do we use the radius?'
            ],
            'Calculate y-coordinate': [
                'Which trig function gives vertical distance?',
                'What do I add to the result?',
                'How does this relate to the x-coordinate?'
            ],
            'Calculate angle using atan2': [
                'Why use atan2 instead of atan?',
                'What coordinates do I use?',
                'Which quadrant is the point in?'
            ]
        };

        return questions[step.step] || ['What is the goal?', 'What formula applies?', 'What values do I substitute?'];
    }

    generateProgressiveHints(step, problem) {
        const category = this.circleTypes[problem.type]?.category || 'point_from_angle';
        const hintSet = this.hints[category] || this.hints.point_from_angle;

        return {
            level1: hintSet.level1 || 'Think about what you\'re trying to find.',
            level2: hintSet.level2 || 'Consider which formula or method applies.',
            level3: hintSet.level3 || 'Write out the formula with your values.',
            level4: hintSet.level4 || 'Calculate the final answer.'
        };
    }

    breakIntoSubSteps(step) {
        if (step.formula) {
            return [
                `Write the formula: ${step.formula}`,
                'Identify the values to substitute',
                'Substitute the values',
                'Calculate the result',
                'Verify the answer'
            ];
        }

        return ['Understand the goal', 'Apply the technique', 'Check the result'];
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try the same type with different angles or radii',
            practiceHint: 'Start with nice angles like 0°, 90°, 180°, 270°',
            extension: 'Try angles like 30°, 45°, 60° once comfortable'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What information do I have?',
            goal: 'What am I trying to find?',
            strategy: 'Which formula or method should I use?',
            execute: 'How do I apply it correctly?',
            verify: 'Does my answer make sense geometrically?'
        };
    }

    identifyDecisionPoints(step) {
        return [
            'Which formula is appropriate?',
            'What units should I use?',
            'Do I need to convert anything first?',
            'How can I verify my answer?'
        ];
    }

    suggestAlternativeMethods(step, problem) {
        const alternatives = {
            'Calculate x-coordinate': [
                'Use parametric form directly',
                'Use unit circle ratios and scale by radius'
            ],
            'Calculate angle using atan2': [
                'Could use arctan with quadrant checking',
                'Could use arcsin or arccos (less reliable)'
            ]
        };

        return alternatives[step.step] || ['The chosen method is standard for this problem'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by using its result`,
            progression: 'We are systematically solving the problem',
            relationship: 'Each step brings us closer to the answer'
        };
    }

    identifyPrerequisites(step, problemType) {
        const category = this.circleTypes[problemType]?.category || 'point_from_angle';
        const prereqs = this.prerequisites[category];

        if (prereqs) {
            return prereqs.skills;
        }

        return ['Circle basics', 'Coordinate geometry'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Identify circle parameters': ['center', 'radius', 'circle equation'],
            'Convert angle to radians': ['degree', 'radian', 'conversion', 'pi'],
            'Calculate x-coordinate': ['cosine', 'horizontal', 'x-coordinate', 'radius'],
            'Calculate y-coordinate': ['sine', 'vertical', 'y-coordinate', 'radius'],
            'Translate point relative to center': ['translation', 'displacement', 'relative position'],
            'Calculate angle using atan2': ['inverse tangent', 'atan2', 'quadrant', 'arctangent'],
            'Substitute coordinates': ['substitution', 'verification', 'equation'],
            'Apply arc length formula': ['arc', 'arc length', 'radian', 'circumference'],
            'Apply sector area formula': ['sector', 'area', 'central angle', 'pie slice']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPrompts(step) {
        return {
            before: 'Before starting, what formula or concept do I need?',
            during: 'As I work, am I using the right units and functions?',
            after: 'Does my answer make sense when I visualize it on a circle?'
        };
    }

    findRealWorldConnection(step, problem) {
        const connections = {
            'point_from_angle': 'Like finding where a clock hand points at a specific time, or a Ferris wheel passenger\'s position.',
            'angle_from_point': 'Like determining compass bearing from one location to another.',
            'arc_length': 'Like measuring the distance a wheel travels during partial rotation.',
            'sector_area': 'Like calculating lawn area covered by a sprinkler or pizza slice size.',
            'chord_length': 'Like finding the straight-line distance across a circular track.',
            'tangent_line': 'Like a wheel touching the ground at exactly one point.'
        };

        const category = this.circleTypes[problem.type]?.category;
        return connections[category] || 'Circles appear in wheels, orbits, and countless real-world applications.';
    }

    // GRAPH GENERATION

    generateCircleGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;
        const category = this.circleTypes[type]?.category;

        if (category) {
            this.graphData = this.generateCircleGraph(this.currentProblem, this.currentSolution);
        }
    }

    generateCircleGraph(problem, solution) {
        const { h, k, r } = problem.parameters;

        // Generate circle points for plotting
        const numPoints = 100;
        const circlePoints = [];

        for (let i = 0; i <= numPoints; i++) {
            const angle = (2 * Math.PI * i) / numPoints;
            circlePoints.push({
                x: h + r * Math.cos(angle),
                y: k + r * Math.sin(angle)
            });
        }

        const graphData = {
            type: 'circle',
            circle: {
                center: { x: h, y: k },
                radius: r,
                points: circlePoints
            },
            category: problem.type
        };

        // Add specific elements based on problem type
        if (solution.point && solution.point.x !== undefined) {
            graphData.highlightedPoint = solution.point;
        }

        if (solution.points && Array.isArray(solution.points)) {
            graphData.highlightedPoints = solution.points.map(p => p.coordinates);
        }

        if (solution.angle) {
            graphData.angle = solution.angle;
        }

        if (solution.tangentEquation) {
            graphData.tangentLine = solution.tangentEquation;
        }

        if (solution.closestPoint) {
            graphData.closestPoint = solution.closestPoint;
        }

        return graphData;
    }

    // WORKBOOK GENERATION

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
            title: 'Enhanced Point on Circle Mathematical Workbook',
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
            ['Description', this.currentProblem.scenario || 'Point on circle problem']
        ];

        // Add circle parameters
        if (this.currentProblem.parameters.h !== undefined) {
            problemData.push(['', '']);
            problemData.push(['Circle Parameters', '']);
            problemData.push(['Center (h, k)', `(${this.currentProblem.parameters.h}, ${this.currentProblem.parameters.k})`]);
            problemData.push(['Radius r', this.currentProblem.parameters.r]);

            if (this.currentSolution?.circle?.equation) {
                problemData.push(['Equation', this.currentSolution.circle.equation]);
            }
        }

        // Add specific parameters based on type
        if (this.currentProblem.parameters.theta !== undefined) {
            problemData.push(['Angle', `${this.currentProblem.parameters.theta} ${this.currentProblem.parameters.angleUnit}`]);
        }

        if (this.currentProblem.parameters.x !== undefined && this.currentProblem.parameters.y !== undefined) {
            problemData.push(['Point', `(${this.currentProblem.parameters.x}, ${this.currentProblem.parameters.y})`]);
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

            if (step.formula) {
                stepsData.push(['Formula', step.formula]);
            }

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

            if (step.visualHint) {
                stepsData.push(['Visual Hint', step.visualHint]);
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
                stepsData.push(['Trigonometric', step.explanations.trigonometric]);
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

            stepsData.push(['', '']);
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
        const lesson = this.lessons.point_on_circle_basic;

        const lessonData = [
            ['Key Concepts', ''],
            ...lesson.concepts.map(c => ['', c]),
            ['', ''],
            ['Theory', lesson.theory],
            ['', ''],
            ['Key Formulas', '']
        ];

        Object.entries(lesson.keyFormulas).forEach(([name, formula]) => {
            lessonData.push([name, formula]);
        });

        lessonData.push(['', '']);
        lessonData.push(['Applications', '']);
        lesson.applications.forEach(app => {
            lessonData.push(['', app]);
        });

        return {
            title: 'Key Concepts',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        // Different output based on problem type
        if (this.currentSolution.point) {
            solutionData.push(['Solution Type', 'Point on Circle']);
            solutionData.push(['Point', `(${this.currentSolution.point.x.toFixed(4)}, ${this.currentSolution.point.y.toFixed(4)})`]);
        }

        if (this.currentSolution.angle) {
            solutionData.push(['Angle (degrees)', `${this.currentSolution.angle.degrees.toFixed(4)}°`]);
            solutionData.push(['Angle (radians)', this.currentSolution.angle.radians.toFixed(6)]);
        }

        if (this.currentSolution.isOnCircle !== undefined) {
            solutionData.push(['Point Location', this.currentSolution.isOnCircle ? 'ON circle' : this.currentSolution.relationship]);
        }

        if (this.currentSolution.arcLength !== undefined) {
            solutionData.push(['Arc Length', this.currentSolution.arcLength.toFixed(4)]);
        }

        if (this.currentSolution.sectorArea !== undefined) {
            solutionData.push(['Sector Area', this.currentSolution.sectorArea.toFixed(4)]);
        }

        if (this.currentSolution.chordLength !== undefined) {
            solutionData.push(['Chord Length', this.currentSolution.chordLength.toFixed(4)]);
        }

        if (this.currentSolution.tangentEquation) {
            solutionData.push(['Tangent Line', this.currentSolution.tangentEquation]);
        }

        if (this.currentSolution.distanceToCircle !== undefined) {
            solutionData.push(['Distance to Circle', this.currentSolution.distanceToCircle.toFixed(4)]);
        }

        if (this.currentSolution.points && Array.isArray(this.currentSolution.points)) {
            solutionData.push(['Number of Points', this.currentSolution.numberOfPoints]);
            solutionData.push(['', '']);
            solutionData.push(['Points', '']);
            this.currentSolution.points.forEach((pt, i) => {
                solutionData.push([
                    `Point ${i + 1}`,
                    `(${pt.coordinates.x.toFixed(4)}, ${pt.coordinates.y.toFixed(4)}) at ${pt.angle.degrees.toFixed(2)}°`
                ]);
            });
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
        if (!this.currentSolution) return null;

        const verificationData = [
            ['Verification Method', 'Geometric validation'],
            ['', '']
        ];

        const verification = this.currentSolution.verification;
        if (verification) {
            if (verification.point) {
                verificationData.push(['Point Checked', `(${verification.point.x}, ${verification.point.y})`]);
            }
            if (verification.distanceSquared !== undefined) {
                verificationData.push(['Distance² from Center', verification.distanceSquared.toFixed(6)]);
                verificationData.push(['Radius²', verification.radiusSquared.toFixed(6)]);
                verificationData.push(['Difference', verification.difference.toExponential(2)]);
                verificationData.push(['On Circle?', verification.isOnCircle ? 'Yes ✓' : 'No']);
            }
            if (verification.relationship) {
                verificationData.push(['Relationship', verification.relationship]);
            }
        }

        if (this.currentSolution.onCircle !== undefined) {
            verificationData.push(['Verification Result', this.currentSolution.onCircle ? 'Point is on circle' : 'Point is not on circle']);
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
            point_from_angle: {
                objectives: [
                    'Convert between angle measures',
                    'Apply parametric circle equations',
                    'Understand cos and sin in circle context'
                ],
                keyConcepts: [
                    'Cosine gives horizontal displacement',
                    'Sine gives vertical displacement',
                    'Angles measured from positive x-axis',
                    'Radians vs degrees'
                ],
                prerequisites: [
                    'Basic trigonometry',
                    'Unit circle',
                    'Coordinate geometry'
                ],
                commonDifficulties: [
                    'Confusing sin and cos',
                    'Forgetting to add center coordinates',
                    'Mixing degrees and radians',
                    'Wrong calculator mode'
                ],
                teachingStrategies: [
                    'Use clock face analogy',
                    'Practice with unit circle first',
                    'Emphasize checking calculator mode',
                    'Draw diagrams for each problem'
                ],
                extensions: [
                    'Parametric equations for motion',
                    'Multiple equally-spaced points',
                    'Applications to circular motion'
                ],
                assessment: [
                    'Can student convert angle units?',
                    'Does student use correct trig functions?',
                    'Can student verify answer geometrically?'
                ]
            },
            angle_from_point: {
                objectives: [
                    'Use inverse trig functions',
                    'Understand atan2 vs atan',
                    'Identify quadrants correctly'
                ],
                keyConcepts: [
                    'Inverse trig finds angle from ratio',
                    'atan2 handles all quadrants',
                    'Must translate relative to center',
                    'Result typically in radians'
                ],
                prerequisites: [
                    'Inverse trig functions',
                    'Quadrant system',
                    'Coordinate geometry'
                ],
                commonDifficulties: [
                    'Using atan instead of atan2',
                    'Forgetting to subtract center',
                    'Quadrant confusion',
                    'Unit confusion'
                ],
                teachingStrategies: [
                    'Teach quadrant identification first',
                    'Always use atan2 when available',
                    'Practice compass bearing problems',
                    'Use visual quadrant diagrams'
                ],
                extensions: [
                    'Navigation and bearing problems',
                    'Finding angles between vectors',
                    'Polar coordinates'
                ],
                assessment: [
                    'Does student use atan2?',
                    'Can student identify quadrant?',
                    'Does student translate correctly?'
                ]
            },
            arc_length: {
                objectives: [
                    'Calculate arc length',
                    'Understand s = rθ formula',
                    'Relate arc to circumference'
                ],
                keyConcepts: [
                    'Arc length proportional to angle',
                    'Must use radians in formula',
                    'Arc is fraction of circumference',
                    'Larger radius means longer arc'
                ],
                prerequisites: [
                    'Radian measure',
                    'Circumference formula',
                    'Proportion reasoning'
                ],
                commonDifficulties: [
                    'Using degrees instead of radians',
                    'Forgetting to convert units',
                    'Confusing arc with chord'
                ],
                teachingStrategies: [
                    'Use wheel rolling analogy',
                    'Practice unit conversions first',
                    'Compare arc to full circumference',
                    'Draw arc on circle diagrams'
                ],
                extensions: [
                    'Angular velocity problems',
                    'Pendulum arc calculations',
                    'Track and road design'
                ],
                assessment: [
                    'Does student use radians?',
                    'Can student relate to circumference?',
                    'Does student understand proportionality?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Understand circle geometry'],
            keyConcepts: ['Circle properties', 'Coordinate relationships'],
            prerequisites: ['Basic geometry', 'Coordinates'],
            commonDifficulties: ['Various geometric challenges'],
            teachingStrategies: ['Visual aids', 'Step-by-step instruction'],
            extensions: ['Advanced circle problems'],
            assessment: ['Verify understanding']
        };
    }

    generateCircleAlternativeMethods(problemType) {
        const category = this.circleTypes[problemType]?.category;

        const alternativeDatabase = {
            point_from_angle: {
                primaryMethod: 'Parametric Equations (x = h + r cos θ, y = k + r sin θ)',
                methods: [
                    {
                        name: 'Unit Circle Scaling',
                        description: 'Find point on unit circle, then scale by radius and translate to center'
                    },
                    {
                        name: 'Complex Numbers',
                        description: 'Use e^(iθ) for unit circle, then scale and translate'
                    },
                    {
                        name: 'Rotation Matrix',
                        description: 'Apply 2D rotation matrix to starting point (r, 0)'
                    }
                ],
                comparison: 'Parametric form is most direct; unit circle good for understanding; complex numbers elegant but advanced'
            },
            angle_from_point: {
                primaryMethod: 'atan2 Function',
                methods: [
                    {
                        name: 'arctan with Quadrant Logic',
                        description: 'Use arctan then adjust based on quadrant checks'
                    },
                    {
                        name: 'arccos or arcsin',
                        description: 'Use cos⁻¹(x/r) or sin⁻¹(y/r) with quadrant verification'
                    },
                    {
                        name: 'Vector Angle',
                        description: 'Treat as vector from origin and find its angle'
                    }
                ],
                comparison: 'atan2 most reliable; arctan requires careful quadrant logic; arccos/arcsin less intuitive'
            },
            arc_length: {
                primaryMethod: 'Direct Formula s = rθ',
                methods: [
                    {
                        name: 'Proportion Method',
                        description: 'Use (arc/circumference) = (θ/2π), solve for arc'
                    },
                    {
                        name: 'Integration',
                        description: 'Integrate √(dx²+dy²) along parametric path (advanced)'
                    }
                ],
                comparison: 'Direct formula fastest; proportion helps understanding; integration overkill for circles'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard geometric approach',
            methods: [{
                name: 'Alternative',
                description: 'Problem-specific alternatives may exist'
            }],
            comparison: 'Choose method based on given information and comfort level'
        };
    }
}

// Export the class
export default EnhancedPointOnCircleMathematicalWorkbook;
