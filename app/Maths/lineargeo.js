// Enhanced Linear Geometry Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedLinearGeometryMathematicalWorkbook {
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
        this.diagramData = null;

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

        // Geometry-specific options
        this.includeDiagrams = options.includeDiagrams !== false;
        this.includeConstructionSteps = options.includeConstructionSteps !== false;
        this.includeProofStrategies = options.includeProofStrategies !== false;
        this.visualizationDetail = options.visualizationDetail || 'detailed';

        this.mathSymbols = this.initializeMathSymbols();
        this.setThemeColors();
        this.initializeGeometrySolvers();
        this.initializeGeometryLessons();
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
        this.initializeGeometricConstructionDatabase();
        this.initializeProofTemplatesDatabase();
        this.initializeVisualizationDatabase();
        this.initializeTheoremsDatabase();
        this.initializePostulatesDatabase();
    }

    initializeGeometryLessons() {
        this.lessons = {
            points_lines_planes: {
                title: "Points, Lines, and Planes",
                concepts: [
                    "Point: exact location with no dimension",
                    "Line: infinite length, no width, extends in both directions",
                    "Plane: flat surface extending infinitely in all directions",
                    "Collinear points: points on the same line",
                    "Coplanar points: points on the same plane"
                ],
                theory: "Points, lines, and planes are the building blocks of geometry. They are undefined terms that form the foundation for all geometric concepts.",
                keyFormulas: {
                    "Distance between points": "d = √[(x₂-x₁)² + (y₂-y₁)²]",
                    "Midpoint formula": "M = ((x₁+x₂)/2, (y₁+y₂)/2)",
                    "Slope of line": "m = (y₂-y₁)/(x₂-x₁)"
                },
                notation: {
                    "Point": "Capital letter (A, B, C)",
                    "Line": "Two points or lowercase letter (AB or ℓ)",
                    "Plane": "Three non-collinear points or script letter",
                    "Ray": "AB with arrow",
                    "Segment": "AB with bar"
                },
                applications: [
                    "Computer graphics and CAD",
                    "Navigation systems",
                    "Architecture and construction",
                    "Geographic mapping"
                ]
            },

            distance_midpoint: {
                title: "Distance and Midpoint",
                concepts: [
                    "Distance formula derives from Pythagorean theorem",
                    "Midpoint is average of coordinates",
                    "Distance is always positive",
                    "Midpoint divides segment into two equal parts"
                ],
                theory: "The distance formula calculates the straight-line distance between two points. The midpoint formula finds the point exactly halfway between two endpoints.",
                keyFormulas: {
                    "Distance (2D)": "d = √[(x₂-x₁)² + (y₂-y₁)²]",
                    "Distance (3D)": "d = √[(x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²]",
                    "Midpoint (2D)": "M = ((x₁+x₂)/2, (y₁+y₂)/2)",
                    "Midpoint (3D)": "M = ((x₁+x₂)/2, (y₁+y₂)/2, (z₁+z₂)/2)"
                },
                derivations: {
                    "Distance formula": "Apply Pythagorean theorem to right triangle formed by points"
                },
                applications: [
                    "GPS and navigation",
                    "Construction layout",
                    "Computer graphics",
                    "Physics and engineering"
                ]
            },

            slope_equations: {
                title: "Slope and Linear Equations",
                concepts: [
                    "Slope measures steepness and direction",
                    "Positive slope: rises left to right",
                    "Negative slope: falls left to right",
                    "Zero slope: horizontal line",
                    "Undefined slope: vertical line"
                ],
                theory: "Slope represents the rate of change between two points. Linear equations describe relationships with constant rate of change.",
                keyFormulas: {
                    "Slope": "m = (y₂-y₁)/(x₂-x₁) = rise/run",
                    "Point-slope form": "y - y₁ = m(x - x₁)",
                    "Slope-intercept form": "y = mx + b",
                    "Standard form": "Ax + By = C",
                    "Two-point form": "(y-y₁)/(y₂-y₁) = (x-x₁)/(x₂-x₁)"
                },
                relationships: {
                    "Parallel lines": "Same slope (m₁ = m₂)",
                    "Perpendicular lines": "Negative reciprocal slopes (m₁ · m₂ = -1)"
                },
                applications: [
                    "Road grade calculations",
                    "Economic trend analysis",
                    "Physics: velocity and acceleration",
                    "Engineering: stress-strain relationships"
                ]
            },

            angles: {
                title: "Angles and Angle Relationships",
                concepts: [
                    "Angle: two rays sharing a common endpoint",
                    "Measured in degrees (°) or radians",
                    "Acute: 0° < θ < 90°",
                    "Right: θ = 90°",
                    "Obtuse: 90° < θ < 180°",
                    "Straight: θ = 180°",
                    "Reflex: 180° < θ < 360°"
                ],
                theory: "Angles measure rotation between two rays. Understanding angle relationships is fundamental to geometric reasoning.",
                keyFormulas: {
                    "Complementary angles": "α + β = 90°",
                    "Supplementary angles": "α + β = 180°",
                    "Vertical angles": "Equal in measure",
                    "Linear pair": "Sum to 180°"
                },
                angleRelationships: {
                    "Adjacent angles": "Share a common side and vertex",
                    "Vertical angles": "Opposite angles formed by intersecting lines",
                    "Complementary": "Two angles summing to 90°",
                    "Supplementary": "Two angles summing to 180°"
                },
                applications: [
                    "Carpentry and construction",
                    "Astronomy: celestial measurements",
                    "Optics: light refraction",
                    "Robotics: joint angles"
                ]
            },

            parallel_perpendicular: {
                title: "Parallel and Perpendicular Lines",
                concepts: [
                    "Parallel lines never intersect",
                    "Perpendicular lines intersect at 90°",
                    "Parallel lines have equal slopes",
                    "Perpendicular lines have negative reciprocal slopes",
                    "Transversal creates angle pairs"
                ],
                theory: "Parallel and perpendicular relationships are fundamental to geometry. They create predictable angle patterns and are essential in construction and design.",
                keyFormulas: {
                    "Parallel test": "m₁ = m₂",
                    "Perpendicular test": "m₁ · m₂ = -1",
                    "Distance from point to line": "d = |Ax₀ + By₀ + C|/√(A² + B²)"
                },
                anglePatterns: {
                    "Corresponding angles": "Equal (parallel lines)",
                    "Alternate interior": "Equal (parallel lines)",
                    "Alternate exterior": "Equal (parallel lines)",
                    "Consecutive interior": "Supplementary (parallel lines)"
                },
                applications: [
                    "Architecture: level floors and plumb walls",
                    "Railroad track design",
                    "Computer graphics: parallel projection",
                    "Woodworking: square corners"
                ]
            },

            triangles_basics: {
                title: "Triangle Fundamentals",
                concepts: [
                    "Three sides and three angles",
                    "Sum of angles = 180°",
                    "Triangle inequality: sum of two sides > third side",
                    "Classified by sides: equilateral, isosceles, scalene",
                    "Classified by angles: acute, right, obtuse"
                ],
                theory: "Triangles are the most basic polygon. Their properties form the foundation for much of geometry.",
                keyFormulas: {
                    "Angle sum": "α + β + γ = 180°",
                    "Perimeter": "P = a + b + c",
                    "Area (base-height)": "A = ½bh",
                    "Area (Heron's)": "A = √[s(s-a)(s-b)(s-c)] where s = (a+b+c)/2",
                    "Pythagorean theorem": "a² + b² = c² (right triangles)"
                },
                classifications: {
                    "By sides": "Equilateral (3 equal), Isosceles (2 equal), Scalene (none equal)",
                    "By angles": "Acute (all < 90°), Right (one = 90°), Obtuse (one > 90°)"
                },
                applications: [
                    "Structural engineering: trusses",
                    "Surveying: triangulation",
                    "Navigation: position finding",
                    "Computer graphics: mesh modeling"
                ]
            },

            pythagorean_theorem: {
                title: "Pythagorean Theorem",
                concepts: [
                    "Applies only to right triangles",
                    "Relates three sides: a² + b² = c²",
                    "c is the hypotenuse (longest side)",
                    "a and b are legs (sides forming right angle)",
                    "Can find any side if two are known"
                ],
                theory: "The Pythagorean theorem states that in a right triangle, the square of the hypotenuse equals the sum of squares of the other two sides.",
                keyFormulas: {
                    "Standard form": "a² + b² = c²",
                    "Solve for c": "c = √(a² + b²)",
                    "Solve for a": "a = √(c² - b²)",
                    "Solve for b": "b = √(c² - a²)"
                },
                pythagoreanTriples: [
                    "3-4-5 (and multiples: 6-8-10, 9-12-15, etc.)",
                    "5-12-13 (and multiples)",
                    "8-15-17 (and multiples)",
                    "7-24-25"
                ],
                converse: "If a² + b² = c², then triangle is right triangle",
                applications: [
                    "Construction: checking square corners",
                    "Navigation: distance calculations",
                    "Physics: vector components",
                    "Computer graphics: distance calculations"
                ]
            },

            perimeter_area: {
                title: "Perimeter and Area",
                concepts: [
                    "Perimeter: distance around a figure",
                    "Area: space enclosed by a figure",
                    "Perimeter measured in linear units",
                    "Area measured in square units",
                    "Different formulas for different shapes"
                ],
                theory: "Perimeter and area are fundamental measurements. Perimeter relates to boundary length; area relates to surface coverage.",
                keyFormulas: {
                    "Rectangle perimeter": "P = 2l + 2w",
                    "Rectangle area": "A = lw",
                    "Square perimeter": "P = 4s",
                    "Square area": "A = s²",
                    "Triangle perimeter": "P = a + b + c",
                    "Triangle area": "A = ½bh",
                    "Circle circumference": "C = 2πr = πd",
                    "Circle area": "A = πr²",
                    "Parallelogram perimeter": "P = 2a + 2b",
                    "Parallelogram area": "A = bh",
                    "Trapezoid perimeter": "P = a + b₁ + b₂ + c",
                    "Trapezoid area": "A = ½h(b₁ + b₂)"
                },
                applications: [
                    "Fencing: perimeter calculations",
                    "Flooring and carpeting: area calculations",
                    "Painting: surface area coverage",
                    "Farming: field measurements"
                ]
            },

            polygons: {
                title: "Polygons",
                concepts: [
                    "Polygon: closed figure with straight sides",
                    "Regular polygon: all sides and angles equal",
                    "Convex: no interior angle > 180°",
                    "Concave: at least one interior angle > 180°",
                    "Named by number of sides"
                ],
                theory: "Polygons are fundamental shapes in geometry. Their properties depend on the number of sides and regularity.",
                keyFormulas: {
                    "Sum of interior angles": "S = (n - 2) × 180°",
                    "Each interior angle (regular)": "I = [(n - 2) × 180°]/n",
                    "Sum of exterior angles": "Always 360°",
                    "Each exterior angle (regular)": "E = 360°/n",
                    "Number of diagonals": "d = n(n - 3)/2"
                },
                polygonNames: {
                    "3 sides": "Triangle",
                    "4 sides": "Quadrilateral",
                    "5 sides": "Pentagon",
                    "6 sides": "Hexagon",
                    "7 sides": "Heptagon",
                    "8 sides": "Octagon",
                    "9 sides": "Nonagon",
                    "10 sides": "Decagon",
                    "12 sides": "Dodecagon",
                    "n sides": "n-gon"
                },
                applications: [
                    "Architecture: floor plans",
                    "Tiling and tessellations",
                    "Computer graphics: polygon meshes",
                    "Crystallography: molecular structures"
                ]
            },

            quadrilaterals: {
                title: "Quadrilaterals",
                concepts: [
                    "Four-sided polygons",
                    "Sum of angles = 360°",
                    "Special types: parallelogram, rectangle, square, rhombus, trapezoid, kite",
                    "Properties vary by type",
                    "Diagonals have special properties"
                ],
                theory: "Quadrilaterals are four-sided polygons with diverse properties based on their specific characteristics.",
                keyFormulas: {
                    "Angle sum": "α + β + γ + δ = 360°",
                    "Parallelogram area": "A = bh",
                    "Rectangle area": "A = lw",
                    "Square area": "A = s²",
                    "Rhombus area": "A = ½d₁d₂",
                    "Trapezoid area": "A = ½h(b₁ + b₂)",
                    "Kite area": "A = ½d₁d₂"
                },
                properties: {
                    "Parallelogram": "Opposite sides parallel and equal; opposite angles equal",
                    "Rectangle": "Parallelogram with four right angles",
                    "Square": "Rectangle with all sides equal",
                    "Rhombus": "Parallelogram with all sides equal",
                    "Trapezoid": "One pair of parallel sides",
                    "Kite": "Two pairs of adjacent sides equal"
                },
                applications: [
                    "Architecture: window and door frames",
                    "Engineering: linkages and mechanisms",
                    "Art and design: patterns",
                    "Land surveying: plot measurements"
                ]
            },

            circles: {
                title: "Circles",
                concepts: [
                    "Set of points equidistant from center",
                    "Radius: distance from center to circle",
                    "Diameter: longest chord, twice radius",
                    "Chord: segment with endpoints on circle",
                    "Secant: line intersecting circle twice",
                    "Tangent: line touching circle once"
                ],
                theory: "A circle is defined by its center and radius. All radii of a circle are equal, creating perfect symmetry.",
                keyFormulas: {
                    "Circumference": "C = 2πr = πd",
                    "Area": "A = πr²",
                    "Arc length": "s = rθ (θ in radians) or s = (θ/360°) × 2πr",
                    "Sector area": "A = ½r²θ (θ in radians) or A = (θ/360°) × πr²",
                    "Chord length": "c = 2r sin(θ/2)"
                },
                circleTheorems: {
                    "Tangent perpendicular to radius": "At point of tangency",
                    "Inscribed angle": "Half of central angle",
                    "Angle in semicircle": "Always 90°",
                    "Tangent segments": "Equal from external point"
                },
                applications: [
                    "Wheel and gear design",
                    "Astronomy: planetary orbits",
                    "Architecture: arches and domes",
                    "Sports: field layouts"
                ]
            },

            coordinate_geometry: {
                title: "Coordinate Geometry",
                concepts: [
                    "Combines algebra with geometry",
                    "Points located by ordered pairs (x, y)",
                    "Distance and midpoint use coordinates",
                    "Slope describes line orientation",
                    "Equations describe geometric figures"
                ],
                theory: "Coordinate geometry allows geometric problems to be solved using algebraic methods by placing figures on a coordinate plane.",
                keyFormulas: {
                    "Distance": "d = √[(x₂-x₁)² + (y₂-y₁)²]",
                    "Midpoint": "M = ((x₁+x₂)/2, (y₁+y₂)/2)",
                    "Slope": "m = (y₂-y₁)/(x₂-x₁)",
                    "Point-slope": "y - y₁ = m(x - x₁)",
                    "Slope-intercept": "y = mx + b",
                    "Circle": "(x - h)² + (y - k)² = r²"
                },
                transformations: {
                    "Translation": "Slide without rotation",
                    "Reflection": "Flip over line",
                    "Rotation": "Turn about point",
                    "Dilation": "Enlarge or reduce"
                },
                applications: [
                    "Computer graphics and animation",
                    "GPS and mapping",
                    "Engineering design",
                    "Physics: motion analysis"
                ]
            },

            similarity_congruence: {
                title: "Similarity and Congruence",
                concepts: [
                    "Congruent: same size and shape (≅)",
                    "Similar: same shape, proportional size (~)",
                    "Corresponding parts match in order",
                    "Scale factor relates similar figures",
                    "Congruence tests: SSS, SAS, ASA, AAS, HL"
                ],
                theory: "Congruence means figures are identical. Similarity means figures have the same shape but different sizes.",
                keyFormulas: {
                    "Scale factor": "k = (new length)/(original length)",
                    "Similar triangle ratio": "a₁/a₂ = b₁/b₂ = c₁/c₂",
                    "Area ratio": "A₁/A₂ = k²",
                    "Volume ratio": "V₁/V₂ = k³"
                },
                congruencePostulates: {
                    "SSS": "Three sides equal",
                    "SAS": "Two sides and included angle equal",
                    "ASA": "Two angles and included side equal",
                    "AAS": "Two angles and non-included side equal",
                    "HL": "Hypotenuse-leg (right triangles only)"
                },
                similarityTheorems: {
                    "AA": "Two angles equal",
                    "SAS": "Two sides proportional, included angle equal",
                    "SSS": "Three sides proportional"
                },
                applications: [
                    "Scale models and maps",
                    "Photography: enlargements",
                    "Architecture: scaled drawings",
                    "Indirect measurement"
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
                diagramBg: '#e8f4f8',
                geometryColor: '#2e86ab'
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
                diagramBg: '#e0f2f1',
                geometryColor: '#00796b'
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
            // Geometric symbols
            'angle': '∠', 'triangle': '△', 'circle': '○',
            'parallel': '∥', 'perpendicular': '⊥',
            'congruent': '≅', 'similar': '~',
            'therefore': '∴', 'because': '∵',
            'degree': '°', 'prime': '′', 'doubleprime': '″'
        };
    }

    initializeGeometrySolvers() {
        this.geometryTypes = {
            // Distance and Midpoint
            distance_2d: {
                patterns: [
                    /distance.*between.*points?/i,
                    /find.*distance/i,
                    /how.*far/i
                ],
                solver: this.solveDistance2D.bind(this),
                name: 'Distance Between Two Points (2D)',
                category: 'distance_midpoint',
                description: 'Calculates distance using distance formula'
            },

            midpoint_2d: {
                patterns: [
                    /midpoint/i,
                    /middle.*point/i,
                    /halfway/i
                ],
                solver: this.solveMidpoint2D.bind(this),
                name: 'Midpoint Between Two Points (2D)',
                category: 'distance_midpoint',
                description: 'Finds midpoint using midpoint formula'
            },

            // Slope and Lines
            slope: {
                patterns: [
                    /slope/i,
                    /rate.*change/i,
                    /steepness/i
                ],
                solver: this.solveSlope.bind(this),
                name: 'Slope of a Line',
                category: 'slope_equations',
                description: 'Calculates slope from two points'
            },

            line_equation_point_slope: {
                patterns: [
                    /equation.*line.*point.*slope/i,
                    /point.*slope.*form/i
                ],
                solver: this.solveLineEquationPointSlope.bind(this),
                name: 'Line Equation (Point-Slope Form)',
                category: 'slope_equations',
                description: 'Creates equation using point and slope'
            },

            line_equation_two_points: {
                patterns: [
                    /equation.*line.*two.*points/i,
                    /line.*through.*points/i
                ],
                solver: this.solveLineEquationTwoPoints.bind(this),
                name: 'Line Equation (Two Points)',
                category: 'slope_equations',
                description: 'Creates equation from two points'
            },

            parallel_line: {
                patterns: [
                    /parallel.*line/i,
                    /same.*slope/i
                ],
                solver: this.solveParallelLine.bind(this),
                name: 'Parallel Line Equation',
                category: 'parallel_perpendicular',
                description: 'Finds line parallel to given line'
            },

            perpendicular_line: {
                patterns: [
                    /perpendicular.*line/i,
                    /normal.*line/i,
                    /right.*angle/i
                ],
                solver: this.solvePerpendicularLine.bind(this),
                name: 'Perpendicular Line Equation',
                category: 'parallel_perpendicular',
                description: 'Finds line perpendicular to given line'
            },

            // Angles
            angle_sum: {
                patterns: [
                    /sum.*angles/i,
                    /total.*angles/i,
                    /add.*angles/i
                ],
                solver: this.solveAngleSum.bind(this),
                name: 'Sum of Angles',
                category: 'angles',
                description: 'Calculates sum of given angles'
            },

            complementary_angle: {
                patterns: [
                    /complementary/i,
                    /complement/i,
                    /90.*degrees/i
                ],
                solver: this.solveComplementaryAngle.bind(this),
                name: 'Complementary Angle',
                category: 'angles',
                description: 'Finds angle that sums to 90°'
            },

            supplementary_angle: {
                patterns: [
                    /supplementary/i,
                    /supplement/i,
                    /180.*degrees/i,
                    /linear.*pair/i
                ],
                solver: this.solveSupplementaryAngle.bind(this),
                name: 'Supplementary Angle',
                category: 'angles',
                description: 'Finds angle that sums to 180°'
            },

            // Triangles
            triangle_angle_sum: {
                patterns: [
                    /triangle.*angle/i,
                    /missing.*angle.*triangle/i,
                    /third.*angle/i
                ],
                solver: this.solveTriangleAngleSum.bind(this),
                name: 'Triangle Angle Sum',
                category: 'triangles_basics',
                description: 'Uses angle sum = 180° to find missing angle'
            },

            pythagorean: {
                patterns: [
                    /pythagorean/i,
                    /right.*triangle/i,
                    /a.*b.*c/i,
                    /hypotenuse/i
                ],
                solver: this.solvePythagorean.bind(this),
                name: 'Pythagorean Theorem',
                category: 'pythagorean_theorem',
                description: 'Solves a² + b² = c²'
            },

            triangle_perimeter: {
                patterns: [
                    /triangle.*perimeter/i,
                    /perimeter.*triangle/i
                ],
                solver: this.solveTrianglePerimeter.bind(this),
                name: 'Triangle Perimeter',
                category: 'perimeter_area',
                description: 'Calculates P = a + b + c'
            },

            triangle_area: {
                patterns: [
                    /triangle.*area/i,
                    /area.*triangle/i
                ],
                solver: this.solveTriangleArea.bind(this),
                name: 'Triangle Area',
                category: 'perimeter_area',
                description: 'Calculates A = ½bh or Heron\'s formula'
            },

            // Quadrilaterals
            rectangle_perimeter: {
                patterns: [
                    /rectangle.*perimeter/i,
                    /perimeter.*rectangle/i
                ],
                solver: this.solveRectanglePerimeter.bind(this),
                name: 'Rectangle Perimeter',
                category: 'perimeter_area',
                description: 'Calculates P = 2l + 2w'
            },

            rectangle_area: {
                patterns: [
                    /rectangle.*area/i,
                    /area.*rectangle/i
                ],
                solver: this.solveRectangleArea.bind(this),
                name: 'Rectangle Area',
                category: 'perimeter_area',
                description: 'Calculates A = lw'
            },

            square_perimeter: {
                patterns: [
                    /square.*perimeter/i,
                    /perimeter.*square/i
                ],
                solver: this.solveSquarePerimeter.bind(this),
                name: 'Square Perimeter',
                category: 'perimeter_area',
                description: 'Calculates P = 4s'
            },

            square_area: {
                patterns: [
                    /square.*area/i,
                    /area.*square/i
                ],
                solver: this.solveSquareArea.bind(this),
                name: 'Square Area',
                category: 'perimeter_area',
                description: 'Calculates A = s²'
            },

            parallelogram_area: {
                patterns: [
                    /parallelogram.*area/i,
                    /area.*parallelogram/i
                ],
                solver: this.solveParallelogramArea.bind(this),
                name: 'Parallelogram Area',
                category: 'perimeter_area',
                description: 'Calculates A = bh'
            },

            trapezoid_area: {
                patterns: [
                    /trapezoid.*area/i,
                    /area.*trapezoid/i
                ],
                solver: this.solveTrapezoidArea.bind(this),
                name: 'Trapezoid Area',
                category: 'perimeter_area',
                description: 'Calculates A = ½h(b₁ + b₂)'
            },

            // Polygons
            polygon_angle_sum: {
                patterns: [
                    /polygon.*angle.*sum/i,
                    /interior.*angle.*sum/i
                ],
                solver: this.solvePolygonAngleSum.bind(this),
                name: 'Polygon Interior Angle Sum',
                category: 'polygons',
                description: 'Calculates (n-2) × 180°'
            },

            regular_polygon_angle: {
                patterns: [
                    /regular.*polygon.*angle/i,
                    /interior.*angle.*regular/i
                ],
                solver: this.solveRegularPolygonAngle.bind(this),
                name: 'Regular Polygon Interior Angle',
                category: 'polygons',
                description: 'Calculates [(n-2) × 180°]/n'
            },

            // Circles
            circle_circumference: {
                patterns: [
                    /circle.*circumference/i,
                    /circumference.*circle/i,
                    /perimeter.*circle/i
                ],
                solver: this.solveCircleCircumference.bind(this),
                name: 'Circle Circumference',
                category: 'circles',
                description: 'Calculates C = 2πr'
            },

            circle_area: {
                patterns: [
                    /circle.*area/i,
                    /area.*circle/i
                ],
                solver: this.solveCircleArea.bind(this),
                name: 'Circle Area',
                category: 'circles',
                description: 'Calculates A = πr²'
            },

            arc_length: {
                patterns: [
                    /arc.*length/i,
                    /length.*arc/i
                ],
                solver: this.solveArcLength.bind(this),
                name: 'Arc Length',
                category: 'circles',
                description: 'Calculates arc length from radius and angle'
            },

            sector_area: {
                patterns: [
                    /sector.*area/i,
                    /area.*sector/i
                ],
                solver: this.solveSectorArea.bind(this),
                name: 'Sector Area',
                category: 'circles',
                description: 'Calculates area of circular sector'
            },

            // Similarity and Congruence
            similar_triangles: {
                patterns: [
                    /similar.*triangles/i,
                    /proportion.*sides/i
                ],
                solver: this.solveSimilarTriangles.bind(this),
                name: 'Similar Triangles',
                category: 'similarity_congruence',
                description: 'Solves using proportional sides'
            },

            scale_factor: {
                patterns: [
                    /scale.*factor/i,
                    /enlargement/i,
                    /reduction/i
                ],
                solver: this.solveScaleFactor.bind(this),
                name: 'Scale Factor',
                category: 'similarity_congruence',
                description: 'Calculates scale factor between similar figures'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            distance_midpoint: {
                'Apply distance formula': [
                    'Forgetting to square the differences',
                    'Not taking square root at the end',
                    'Mixing up x and y coordinates',
                    'Sign errors when subtracting coordinates'
                ],
                'Apply midpoint formula': [
                    'Forgetting to divide by 2',
                    'Adding instead of averaging',
                    'Mixing up coordinates'
                ]
            },
            slope_equations: {
                'Calculate slope': [
                    'Using (x₂ - x₁)/(y₂ - y₁) instead of (y₂ - y₁)/(x₂ - x₁)',
                    'Inconsistent point ordering',
                    'Division by zero for vertical lines',
                    'Sign errors'
                ],
                'Write equation': [
                    'Incorrect substitution into point-slope form',
                    'Algebraic errors when converting forms',
                    'Sign errors with negative slopes'
                ]
            },
            angles: {
                'Find complement': [
                    'Using 180° instead of 90°',
                    'Adding instead of subtracting',
                    'Not checking if angle is acute'
                ],
                'Find supplement': [
                    'Using 90° instead of 180°',
                    'Adding instead of subtracting',
                    'Not checking if angle is less than 180°'
                ]
            },
            triangles_basics: {
                'Apply angle sum': [
                    'Using 360° instead of 180°',
                    'Arithmetic errors in addition/subtraction',
                    'Not setting up equation correctly'
                ]
            },
            pythagorean_theorem: {
                'Identify hypotenuse': [
                    'Using leg length as hypotenuse',
                    'Not identifying which side is c',
                    'Confusing legs with hypotenuse'
                ],
                'Apply formula': [
                    'Forgetting to square the sides',
                    'Not taking square root when solving for side',
                    'Adding instead of subtracting when solving for leg',
                    'Calculator errors with square roots'
                ]
            },
            perimeter_area: {
                'Calculate perimeter': [
                    'Using area formula instead',
                    'Forgetting to add all sides',
                    'Not doubling length and width for rectangles'
                ],
                'Calculate area': [
                    'Using perimeter formula instead',
                    'Forgetting to multiply by ½ for triangles',
                    'Using wrong base or height',
                    'Unit errors (linear vs. square)'
                ]
            },
            circles: {
                'Use π': [
                    'Using 3.14 when exact answer needed',
                    'Rounding too early',
                    'Forgetting π entirely'
                ],
                'Radius vs diameter': [
                    'Using diameter when radius needed',
                    'Using radius when diameter needed',
                    'Not dividing/multiplying by 2'
                ]
            }
        };

        this.errorPrevention = {
            coordinate_confusion: {
                reminder: 'Always write coordinates as (x, y) and keep order consistent',
                method: 'Label points clearly: (x₁, y₁) and (x₂, y₂)'
            },
            formula_selection: {
                reminder: 'Choose the correct formula for the specific shape',
                method: 'Make a formula reference chart'
            },
            unit_tracking: {
                reminder: 'Perimeter uses linear units, area uses square units',
                method: 'Write units with every calculation'
            },
            right_triangle_verification: {
                reminder: 'Pythagorean theorem only works for right triangles',
                method: 'Check for right angle symbol or 90° angle'
            },
            diagram_accuracy: {
                reminder: 'Draw diagrams to scale when possible, label all given information',
                method: 'Use graph paper or geometry software'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Understanding why the formula works and geometric meaning',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Step-by-step instructions for solving',
                language: 'clear sequential directions'
            },
            visual: {
                focus: 'Diagrams, drawings, and spatial reasoning',
                language: 'visual and spatial descriptions'
            },
            algebraic: {
                focus: 'Algebraic manipulation and formulas',
                language: 'precise mathematical notation'
            },
            geometric: {
                focus: 'Geometric properties and relationships',
                language: 'geometric terminology and theorems'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential steps only',
                examples: 'concrete measurements and simple cases',
                diagrams: 'simple, clearly labeled'
            },
            intermediate: {
                vocabulary: 'standard geometric terms',
                detail: 'main steps with brief explanations',
                examples: 'mix of concrete and abstract',
                diagrams: 'standard geometric notation'
            },
            ELI5: {
                vocabulary: 'explain like I\'m 5 - simplest possible terms',
                detail: 'every tiny step explained with analogies',
                examples: 'real-world analogies and stories',
                analogies: true,
                visualization: 'simple pictures and drawings',
                diagrams: 'very simple with everyday comparisons'
            },
            detailed: {
                vocabulary: 'full geometric vocabulary',
                detail: 'comprehensive explanations with proofs',
                examples: 'abstract and generalized cases',
                diagrams: 'precise with all properties labeled'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced difficulty progression',
                diagrams: 'built up step-by-step'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            construction: {
                scenario: "Building layouts and right angles",
                equation: "Pythagorean theorem for checking square corners",
                examples: [
                    "3-4-5 triangle to ensure corner is square",
                    "Calculating diagonal of rectangular foundation"
                ],
                context: "Builders use geometry to ensure structures are level and square"
            },
            navigation: {
                scenario: "GPS and distance calculations",
                equation: "Distance formula for finding straight-line distance",
                examples: [
                    "Distance between two cities on a map",
                    "Shortest path calculation"
                ],
                context: "Navigation systems use coordinate geometry for routing"
            },
            sports_fields: {
                scenario: "Laying out athletic fields and courts",
                equation: "Perimeter and area formulas",
                examples: [
                    "Soccer field dimensions",
                    "Running track design (circles and rectangles)"
                ],
                context: "Sports facilities require precise geometric measurements"
            },
            architecture: {
                scenario: "Building design and aesthetics",
                equation: "Similarity, proportion, and angle relationships",
                examples: [
                    "Golden ratio in facade design",
                    "Roof pitch angles"
                ],
                context: "Architects use geometry for both function and beauty"
            },
            art_design: {
                scenario: "Creating patterns and tessellations",
                equation: "Polygon angles and transformations",
                examples: [
                    "Islamic tile patterns",
                    "M.C. Escher tessellations"
                ],
                context: "Artists use geometric principles to create repeating patterns"
            },
            surveying: {
                scenario: "Land measurement and mapping",
                equation: "Triangulation and distance formulas",
                examples: [
                    "Property boundary determination",
                    "Elevation mapping"
                ],
                context: "Surveyors use geometry to measure land accurately"
            },
            astronomy: {
                scenario: "Measuring distances to celestial objects",
                equation: "Similar triangles and parallax",
                examples: [
                    "Distance to moon using parallax",
                    "Star distances from Earth"
                ],
                context: "Astronomers use geometry to measure cosmic distances"
            },
            optics: {
                scenario: "Light reflection and refraction",
                equation: "Angle of incidence equals angle of reflection",
                examples: [
                    "Mirror placement for periscopes",
                    "Lens design for cameras"
                ],
                context: "Optical systems depend on geometric principles"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            distance_midpoint: {
                skills: ['Pythagorean theorem', 'Square roots', 'Coordinate plane'],
                priorKnowledge: ['Ordered pairs', 'Distance on number line', 'Averaging'],
                checkQuestions: [
                    "What is √(9 + 16)?",
                    "What is the average of 4 and 10?",
                    "Plot the point (3, -2)"
                ]
            },
            slope_equations: {
                skills: ['Slope concept', 'Linear equations', 'Coordinate plane'],
                priorKnowledge: ['Rise over run', 'Graphing points', 'Solving for y'],
                checkQuestions: [
                    "What is the slope of a line rising 6 units over 3 units?",
                    "Solve for y: 2x + y = 8",
                    "What is a y-intercept?"
                ]
            },
            angles: {
                skills: ['Angle measurement', 'Addition/subtraction', 'Angle types'],
                priorKnowledge: ['Degrees', 'Protractor use', 'Angle classification'],
                checkQuestions: [
                    "What is 90° - 35°?",
                    "What is an acute angle?",
                    "What is 180° - 120°?"
                ]
            },
            triangles_basics: {
                skills: ['Angle sum property', 'Triangle classification', 'Basic algebra'],
                priorKnowledge: ['Types of triangles', 'Sum of angles = 180°'],
                checkQuestions: [
                    "What is 180° - 60° - 70°?",
                    "What is an isosceles triangle?",
                    "Solve: x + 45 + 90 = 180"
                ]
            },
            pythagorean_theorem: {
                skills: ['Squaring numbers', 'Square roots', 'Right triangle identification'],
                priorKnowledge: ['What is hypotenuse', 'Perfect squares', 'Radical simplification'],
                checkQuestions: [
                    "What is 5²?",
                    "What is √25?",
                    "Which side is the hypotenuse in a right triangle?"
                ]
            },
            perimeter_area: {
                skills: ['Addition/multiplication', 'Formula application', 'Unit awareness'],
                priorKnowledge: ['Perimeter vs. area', 'Shape identification', 'Linear vs. square units'],
                checkQuestions: [
                    "What is 2(5) + 2(3)?",
                    "What is 6 × 4?",
                    "What unit for area: meters or square meters?"
                ]
            },
            polygons: {
                skills: ['Angle sum formulas', 'Polygon classification', 'Pattern recognition'],
                priorKnowledge: ['Polygon names', 'Interior/exterior angles', 'Regular vs. irregular'],
                checkQuestions: [
                    "How many sides does a hexagon have?",
                    "What is (6-2) × 180°?",
                    "What is 360°/6?"
                ]
            },
            circles: {
                skills: ['Using π', 'Radius vs. diameter', 'Circle formulas'],
                priorKnowledge: ['What is π', 'Circle parts', 'Squaring'],
                checkQuestions: [
                    "If diameter is 10, what is radius?",
                    "What is π approximately?",
                    "What is 4²?"
                ]
            },
            similarity_congruence: {
                skills: ['Proportions', 'Corresponding parts', 'Scale factor'],
                priorKnowledge: ['Ratios', 'Similarity vs. congruence', 'Cross multiplication'],
                checkQuestions: [
                    "Solve: 3/6 = x/12",
                    "What does ~ mean in geometry?",
                    "If sides are in ratio 1:2, what is scale factor?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            coordinate_plane: {
                description: "Graph with x and y axes",
                analogy: "Like a map with grid coordinates",
                visualization: "Draw axes, plot points, connect dots",
                suitableFor: ['distance_midpoint', 'slope_equations', 'coordinate_geometry'],
                explanation: "The coordinate plane allows us to represent geometric figures algebraically"
            },
            number_line: {
                description: "Line with marked intervals",
                analogy: "Like a ruler showing distances",
                visualization: "Draw horizontal line with evenly spaced marks",
                suitableFor: ['distance_midpoint', 'angles'],
                explanation: "Number line shows position and distance in one dimension"
            },
            geometric_diagram: {
                description: "Labeled drawing of shapes",
                analogy: "Like a blueprint showing measurements",
                visualization: "Draw shape with all sides, angles, and measurements labeled",
                suitableFor: ['all_geometry'],
                explanation: "Diagrams help visualize relationships between parts"
            },
            right_triangle_model: {
                description: "Triangle with square on each side",
                analogy: "Visual proof of Pythagorean theorem",
                visualization: "Draw right triangle with squares on all three sides",
                suitableFor: ['pythagorean_theorem'],
                explanation: "Shows that area of squares on legs equals area of square on hypotenuse"
            },
            angle_diagram: {
                description: "Rays from common vertex",
                analogy: "Like hands of a clock at different times",
                visualization: "Draw vertex with two rays forming angle, mark degree measure",
                suitableFor: ['angles'],
                explanation: "Angles measure rotation between two rays"
            },
            parallel_lines_transversal: {
                description: "Parallel lines cut by transversal",
                analogy: "Like railroad tracks crossed by a road",
                visualization: "Draw two parallel lines crossed by diagonal line",
                suitableFor: ['parallel_perpendicular', 'angles'],
                explanation: "Creates predictable angle relationships"
            },
            circle_with_parts: {
                description: "Circle showing radius, diameter, chord, etc.",
                analogy: "Like a pizza with different cuts and measurements",
                visualization: "Draw circle with center, radii, diameter, chords labeled",
                suitableFor: ['circles'],
                explanation: "Shows relationships between circle parts"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "Find distance between (0,0) and (3,4)",
                    solution: 5,
                    steps: ["Use distance formula", "d = √[(3-0)² + (4-0)²]", "d = √[9 + 16]", "d = √25 = 5"],
                    difficulty: "easy",
                    category: "distance_midpoint"
                },
                {
                    problem: "Find slope of line through (1,2) and (3,8)",
                    solution: 3,
                    steps: ["m = (y₂-y₁)/(x₂-x₁)", "m = (8-2)/(3-1)", "m = 6/2 = 3"],
                    difficulty: "easy",
                    category: "slope_equations"
                },
                {
                    problem: "Find complement of 35°",
                    solution: 55,
                    steps: ["Complement = 90° - angle", "90° - 35° = 55°"],
                    difficulty: "easy",
                    category: "angles"
                },
                {
                    problem: "Find missing angle in triangle with 60° and 80°",
                    solution: 40,
                    steps: ["Sum of angles = 180°", "60° + 80° + x = 180°", "x = 180° - 140° = 40°"],
                    difficulty: "easy",
                    category: "triangles_basics"
                }
            ],
            intermediate: [
                {
                    problem: "Find hypotenuse of right triangle with legs 5 and 12",
                    solution: 13,
                    steps: ["a² + b² = c²", "5² + 12² = c²", "25 + 144 = c²", "c² = 169", "c = 13"],
                    difficulty: "medium",
                    category: "pythagorean_theorem"
                },
                {
                    problem: "Find equation of line with slope 2 through (3,5)",
                    solution: "y = 2x - 1",
                    steps: ["Use point-slope: y - y₁ = m(x - x₁)", "y - 5 = 2(x - 3)", "y - 5 = 2x - 6", "y = 2x - 1"],
                    difficulty: "medium",
                    category: "slope_equations"
                },
                {
                    problem: "Find area of triangle with base 8 and height 5",
                    solution: 20,
                    steps: ["A = ½bh", "A = ½(8)(5)", "A = ½(40)", "A = 20"],
                    difficulty: "medium",
                    category: "perimeter_area"
                },
                {
                    problem: "Find each interior angle of regular hexagon",
                    solution: 120,
                    steps: ["Formula: [(n-2)×180°]/n", "[(6-2)×180°]/6", "[4×180°]/6", "720°/6 = 120°"],
                    difficulty: "medium",
                    category: "polygons"
                }
            ],
            advanced: [
                {
                    problem: "Find area of circle with radius 7",
                    solution: "49π or ≈153.94",
                    steps: ["A = πr²", "A = π(7²)", "A = 49π", "A ≈ 153.94"],
                    difficulty: "hard",
                    category: "circles"
                },
                {
                    problem: "Triangles ABC and DEF are similar with AB=6, DE=9. If BC=8, find EF",
                    solution: 12,
                    steps: ["Set up proportion", "AB/DE = BC/EF", "6/9 = 8/EF", "6·EF = 72", "EF = 12"],
                    difficulty: "hard",
                    category: "similarity_congruence"
                },
                {
                    problem: "Find perpendicular line to y=2x+3 through (4,5)",
                    solution: "y = -½x + 7",
                    steps: ["Perpendicular slope = -1/2", "Use point-slope: y-5 = -½(x-4)", "y-5 = -½x+2", "y = -½x+7"],
                    difficulty: "hard",
                    category: "parallel_perpendicular"
                }
            ],
            byMethod: {
                distance_midpoint: [
                    { problem: "Distance from (1,1) to (4,5)", solution: 5 },
                    { problem: "Midpoint of (2,3) and (8,7)", solution: "(5,5)" }
                ],
                pythagorean: [
                    { problem: "Legs 3 and 4, find hypotenuse", solution: 5 },
                    { problem: "Hypotenuse 10, leg 6, find other leg", solution: 8 },
                    { problem: "Legs 5 and 12, find hypotenuse", solution: 13 }
                ],
                angles: [
                    { problem: "Complement of 40°", solution: 50 },
                    { problem: "Supplement of 110°", solution: 70 },
                    { problem: "Third angle if two are 50° and 60°", solution: 70 }
                ],
                area_perimeter: [
                    { problem: "Rectangle 5×8: area", solution: 40 },
                    { problem: "Rectangle 5×8: perimeter", solution: 26 },
                    { problem: "Triangle base 10, height 6: area", solution: 30 }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            distance_confusion: {
                misconception: "Distance can be negative",
                reality: "Distance is always non-negative (absolute value)",
                correctiveExample: "Distance from (0,0) to (-3,-4) is still 5, not -5",
                commonIn: ['distance_midpoint']
            },
            slope_order: {
                misconception: "Slope is (x₂-x₁)/(y₂-y₁)",
                reality: "Slope is (y₂-y₁)/(x₂-x₁) - rise over run",
                correctiveExample: "For (1,2) to (3,8): m = (8-2)/(3-1) = 6/2 = 3, not 2/6",
                commonIn: ['slope_equations']
            },
            complement_supplement_confusion: {
                misconception: "Complement and supplement both use 90°",
                reality: "Complement uses 90°, supplement uses 180°",
                correctiveExample: "Complement of 30° is 60° (sum to 90°), supplement is 150° (sum to 180°)",
                commonIn: ['angles']
            },
            pythagorean_misuse: {
                misconception: "Pythagorean theorem works for any triangle",
                reality: "Only works for right triangles",
                correctiveExample: "Triangle with sides 3,4,6 is NOT a right triangle (3²+4²≠6²)",
                commonIn: ['pythagorean_theorem']
            },
            hypotenuse_identification: {
                misconception: "Hypotenuse is any side of right triangle",
                reality: "Hypotenuse is the longest side, opposite the right angle",
                correctiveExample: "In right triangle with legs 3,4, hypotenuse is 5 (not 3 or 4)",
                commonIn: ['pythagorean_theorem']
            },
            area_perimeter_confusion: {
                misconception: "Area and perimeter use the same formula",
                reality: "Perimeter adds sides (linear), area multiplies dimensions (square)",
                correctiveExample: "Rectangle 4×6: P=20 units, A=24 square units",
                commonIn: ['perimeter_area']
            },
            radius_diameter_confusion: {
                misconception: "Radius and diameter are the same",
                reality: "Diameter = 2 × radius",
                correctiveExample: "If radius is 5, diameter is 10 (not 5)",
                commonIn: ['circles']
            },
            similar_congruent_confusion: {
                misconception: "Similar and congruent mean the same thing",
                reality: "Congruent = same size and shape; Similar = same shape, proportional size",
                correctiveExample: "Triangles with sides 3-4-5 and 6-8-10 are similar but not congruent",
                commonIn: ['similarity_congruence']
            },
            angle_sum_error: {
                misconception: "All polygons have angle sum of 180°",
                reality: "Triangle = 180°, Quadrilateral = 360°, Pentagon = 540°, etc.",
                correctiveExample: "Hexagon interior angles sum to 720°, not 180°",
                commonIn: ['polygons']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            distance_formula: {
                analogy: "Walking on a city grid",
                explanation: "Distance formula finds straight-line distance, like cutting diagonally across city blocks instead of walking along streets",
                suitableFor: ['distance_midpoint'],
                ELI5: "Imagine you want to walk from one corner to another. You could walk along the streets (go right then up), or you could cut straight across through the park. The distance formula tells you how far it is to cut straight across!"
            },
            midpoint: {
                analogy: "Meeting halfway",
                explanation: "Midpoint is like meeting a friend halfway between your houses",
                suitableFor: ['distance_midpoint'],
                ELI5: "If you live at house number 2 and your friend lives at house number 8, you'd meet at house number 5 - right in the middle!"
            },
            slope: {
                analogy: "Steepness of a hill",
                explanation: "Slope measures how steep something is, like comparing a gentle ramp to a steep mountain road",
                suitableFor: ['slope_equations'],
                ELI5: "Slope is like how steep a slide is. A big number means a super steep slide that you zoom down fast. A small number means a gentle slide."
            },
            pythagorean_theorem: {
                analogy: "Shortcut across rectangular field",
                explanation: "The hypotenuse is a shortcut. If you walk 3 blocks east and 4 blocks north, cutting diagonally saves you distance",
                suitableFor: ['pythagorean_theorem'],
                ELI5: "Imagine walking around a rectangular field - you go 3 steps one way, then 4 steps another way. But if you cut straight across the field, you only walk 5 steps! That's what the Pythagorean theorem tells us."
            },
            complementary_angles: {
                analogy: "Puzzle pieces making a corner",
                explanation: "Complementary angles fit together like two puzzle pieces that make a perfect 90° corner",
                suitableFor: ['angles'],
                ELI5: "Think of a square corner, like the corner of a book. If you break it into two pieces, those two pieces are complementary - they fit back together to make the corner!"
            },
            parallel_lines: {
                analogy: "Railroad tracks",
                explanation: "Parallel lines are like railroad tracks - they go in the same direction and never meet, no matter how far you extend them",
                suitableFor: ['parallel_perpendicular'],
                ELI5: "Parallel lines are like train tracks - they always stay the same distance apart and never cross each other, even if they go on forever!"
            },
            perpendicular_lines: {
                analogy: "Plus sign or crossroads",
                explanation: "Perpendicular lines meet like two roads crossing at a perfect right angle, forming a + shape",
                suitableFor: ['parallel_perpendicular'],
                ELI5: "Perpendicular lines are like when two roads cross making a perfect plus sign +. They meet at a square corner."
            },
            circle: {
                analogy: "Points equally far from center",
                explanation: "A circle is like all the places you can reach walking the exact same distance from your house",
                suitableFor: ['circles'],
                ELI5: "Imagine you're holding a string with a pencil tied to the end. If you hold the string still and move the pencil all the way around, you draw a circle. Every point is exactly one string-length away from your hand!"
            },
            area: {
                analogy: "Paint or carpet coverage",
                explanation: "Area is like how much paint you need to cover a surface or how much carpet to cover a floor",
                suitableFor: ['perimeter_area'],
                ELI5: "Area is like counting how many square tiles you need to cover a floor. If your floor is 3 tiles wide and 4 tiles long, you need 3×4=12 tiles total!"
            },
            perimeter: {
                analogy: "Fence around yard",
                explanation: "Perimeter is like the length of fence needed to go all the way around your yard",
                suitableFor: ['perimeter_area'],
                ELI5: "Perimeter is like walking all the way around something. If you walk around a rectangle that's 5 steps wide and 3 steps long, you walk 5+3+5+3=16 steps total!"
            },
            similar_triangles: {
                analogy: "Different sized photos",
                explanation: "Similar triangles are like a small photo and a blown-up version - same shape, different size, everything stays in proportion",
                suitableFor: ['similarity_congruence'],
                ELI5: "Similar triangles are like a small toy car and a real car - they have the same shape, but one is just a bigger version of the other. Everything gets bigger by the same amount!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            distance_2d: {
                level1: "What formula calculates distance between two points?",
                level2: "The distance formula comes from the Pythagorean theorem",
                level3: "Use d = √[(x₂-x₁)² + (y₂-y₁)²]",
                level4: "Subtract coordinates, square each difference, add, then take square root"
            },
            midpoint_2d: {
                level1: "How do you find the middle point between two locations?",
                level2: "Average the x-coordinates, then average the y-coordinates",
                level3: "Use M = ((x₁+x₂)/2, (y₁+y₂)/2)",
                level4: "Add the x's and divide by 2, add the y's and divide by 2"
            },
            slope: {
                level1: "What does slope measure?",
                level2: "Slope is rise over run: vertical change ÷ horizontal change",
                level3: "Use m = (y₂-y₁)/(x₂-x₁)",
                level4: "Subtract y-coordinates (numerator), subtract x-coordinates (denominator)"
            },
            pythagorean: {
                level1: "What theorem relates the sides of a right triangle?",
                level2: "The sum of squares of legs equals square of hypotenuse",
                level3: "Use a² + b² = c² where c is the hypotenuse",
                level4: "Square the two legs, add them, take square root for hypotenuse"
            },
            complementary_angle: {
                level1: "What do complementary angles add up to?",
                level2: "Complementary angles sum to 90°",
                level3: "Subtract the given angle from 90°",
                level4: "Complement = 90° - given angle"
            },
            supplementary_angle: {
                level1: "What do supplementary angles add up to?",
                level2: "Supplementary angles sum to 180°",
                level3: "Subtract the given angle from 180°",
                level4: "Supplement = 180° - given angle"
            },
            triangle_angle: {
                level1: "What is the sum of angles in a triangle?",
                level2: "Triangle angles always sum to 180°",
                level3: "Add the two known angles and subtract from 180°",
                level4: "Missing angle = 180° - (angle1 + angle2)"
            },
            circle_area: {
                level1: "What formula gives the area of a circle?",
                level2: "Area depends on radius squared",
                level3: "Use A = πr²",
                level4: "Square the radius and multiply by π"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Find distance between (0,0) and (3,4)",
                    answer: 5,
                    assesses: "distance_2d",
                    difficulty: "basic"
                },
                {
                    question: "Find slope of line through (1,2) and (3,6)",
                    answer: 2,
                    assesses: "slope",
                    difficulty: "basic"
                },
                {
                    question: "Find complement of 35°",
                    answer: 55,
                    assesses: "complementary_angle",
                    difficulty: "basic"
                },
                {
                    question: "In right triangle, if legs are 6 and 8, find hypotenuse",
                    answer: 10,
                    assesses: "pythagorean",
                    difficulty: "intermediate"
                },
                {
                    question: "Find area of rectangle 5 by 7",
                    answer: 35,
                    assesses: "rectangle_area",
                    difficulty: "basic"
                }
            ],
            formative: [
                {
                    question: "Which formula finds distance between points?",
                    options: ["(x₂-x₁)+(y₂-y₁)", "√[(x₂-x₁)²+(y₂-y₁)²]", "(x₂+x₁)²+(y₂+y₁)²", "x₂-x₁/y₂-y₁"],
                    correct: "√[(x₂-x₁)²+(y₂-y₁)²]",
                    explanation: "Distance formula comes from Pythagorean theorem"
                },
                {
                    question: "Slope formula is:",
                    options: ["(x₂-x₁)/(y₂-y₁)", "(y₂-y₁)/(x₂-x₁)", "(x₂+x₁)/(y₂+y₁)", "y₂-x₂/y₁-x₁"],
                    correct: "(y₂-y₁)/(x₂-x₁)",
                    explanation: "Slope is rise over run: vertical change ÷ horizontal change"
                },
                {
                    question: "Complementary angles sum to:",
                    options: ["45°", "90°", "180°", "360°"],
                    correct: "90°",
                    explanation: "Complementary angles form a right angle"
                },
                {
                    question: "Triangle angles sum to:",
                    options: ["90°", "180°", "270°", "360°"],
                    correct: "180°",
                    explanation: "This is the triangle angle sum property"
                }
            ],
            summative: [
                {
                    question: "Find equation of line through (2,3) and (6,11)",
                    answer: "y = 2x - 1",
                    showsWork: true,
                    rubric: {
                        find_slope: 2,
                        use_point_slope: 2,
                        simplify_to_slope_intercept: 1
                    }
                },
                {
                    question: "Right triangle has legs 9 and 12. Find hypotenuse and area.",
                    answer: "hypotenuse: 15, area: 54",
                    showsWork: true,
                    rubric: {
                        apply_pythagorean: 2,
                        simplify_correctly: 1,
                        find_area: 2
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "Distance from (0,0) to (5,12)",
                    "Midpoint of (2,4) and (8,10)",
                    "Slope through (1,3) and (4,9)",
                    "Supplement of 65°",
                    "Missing angle: 50°, 60°, ?"
                ],
                medium: [
                    "Equation of line through (3,7) with slope -2",
                    "Hypotenuse when legs are 7 and 24",
                    "Area of trapezoid: bases 6,10, height 8",
                    "Each angle of regular pentagon",
                    "Circumference of circle with radius 9"
                ],
                hard: [
                    "Perpendicular to y=3x-2 through (6,5)",
                    "Area of triangle with vertices (0,0), (6,0), (3,8)",
                    "Prove triangles similar: sides 4-6-8 and 6-9-12",
                    "Arc length: radius 10, angle 72°",
                    "Interior angle sum of 15-gon"
                ]
            },
            byObjective: {
                canFindDistance: [
                    "Distance from (1,2) to (4,6)",
                    "Distance from (-3,1) to (2,13)",
                    "Is triangle with vertices (0,0), (3,0), (0,4) a right triangle?"
                ],
                canFindSlope: [
                    "Slope through (2,5) and (7,15)",
                    "Slope of line perpendicular to m=4",
                    "Are lines with slopes 2 and -1/2 perpendicular?"
                ],
                canSolveRightTriangles: [
                    "Legs 5 and 12, find hypotenuse",
                    "Hypotenuse 13, leg 5, find other leg",
                    "Is triangle 7-24-25 a right triangle?"
                ],
                canFindArea: [
                    "Area of rectangle 8×15",
                    "Area of triangle: base 12, height 9",
                    "Area of circle: radius 6"
                ],
                canWorkWithAngles: [
                    "Complement of 48°",
                    "Supplement of 127°",
                    "Third angle if two are 35° and 75°"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "two_points_given": "Use distance formula or midpoint formula or slope formula",
                "right_triangle": "Use Pythagorean theorem",
                "angle_sum_needed": "Use triangle (180°) or polygon formula",
                "parallel_or_perpendicular": "Compare slopes: equal for parallel, negative reciprocal for perpendicular",
                "area_or_perimeter": "Identify shape and use appropriate formula",
                "circle_involved": "Use formulas with π (C=2πr, A=πr²)"
            },
            whenToUseWhat: {
                distance_formula: "When finding straight-line distance between two points",
                midpoint_formula: "When finding point exactly halfway between two points",
                slope_formula: "When finding steepness or direction of line",
                pythagorean_theorem: "When working with right triangles",
                angle_sum: "When finding missing angles in triangles or polygons",
                area_formulas: "When finding space enclosed by a shape",
                perimeter_formulas: "When finding distance around a shape"
            },
            problemSolvingApproach: {
                read_carefully: "Understand what is given and what is asked",
                draw_diagram: "Sketch and label the figure",
                identify_type: "Determine what kind of problem (distance, angle, area, etc.)",
                choose_formula: "Select appropriate formula or theorem",
                substitute_values: "Plug in given values carefully",
                solve_step_by_step: "Work through calculation systematically",
                check_reasonableness: "Does answer make sense?",
                include_units: "State answer with proper units"
            },
            diagramStrategy: {
                always_draw: "Visual representation clarifies relationships",
                label_everything: "Mark all given information on diagram",
                use_proper_notation: "Follow standard geometric notation",
                draw_to_scale: "When possible, approximate actual proportions",
                highlight_what_you_seek: "Mark unknown with different color or symbol"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Distance & Midpoint Sprint",
                    timeLimit: 90,
                    problems: [
                        "Distance: (0,0) to (6,8)",
                        "Midpoint: (1,3) and (7,11)",
                        "Distance: (2,5) to (5,9)",
                        "Midpoint: (-2,4) and (6,10)"
                    ]
                },
                {
                    name: "Angle Challenge",
                    timeLimit: 60,
                    problems: [
                        "Complement of 42°",
                        "Supplement of 105°",
                        "Missing angle: 55°, 70°, ?",
                        "Vertical angle to 38°"
                    ]
                },
                {
                    name: "Pythagorean Speed Test",
                    timeLimit: 120,
                    problems: [
                        "Legs 3,4: hypotenuse?",
                        "Legs 5,12: hypotenuse?",
                        "Legs 8,15: hypotenuse?",
                        "Hyp 10, leg 6: other leg?"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Triangle",
                    problem: "Triangle has angles x°, 2x°, 3x°",
                    question: "Find each angle",
                    solution: "x=30°, so angles are 30°, 60°, 90°"
                },
                {
                    name: "Golden Rectangle",
                    problem: "Rectangle perimeter is 30, area is 50",
                    question: "Find dimensions",
                    solution: "5 and 10 (solve system: 2l+2w=30, lw=50)"
                },
                {
                    name: "Coordinate Challenge",
                    problem: "Point P is equidistant from (0,0), (6,0), and (0,8)",
                    question: "Find coordinates of P",
                    solution: "(3,4) - circumcenter of triangle"
                }
            ],
            applications: [
                {
                    scenario: "Navigation",
                    problem: "Ship at (2,5), lighthouse at (8,13). How far?",
                    formula: "Distance formula",
                    solution: "10 nautical miles"
                },
                {
                    scenario: "Construction",
                    problem: "Room 12 ft by 16 ft. Diagonal must be how long to ensure corners are square?",
                    formula: "Pythagorean theorem",
                    solution: "20 feet"
                },
                {
                    scenario: "Farming",
                    problem: "Rectangular field 80m by 120m. How much fencing?",
                    formula: "Perimeter",
                    solution: "400 meters"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Find distance from (1,2) to (4,6)",
                        "d = (4-1) + (6-2)",  // ERROR: should use distance formula
                        "d = 3 + 4",
                        "d = 7"
                    ],
                    correctAnswer: "5",
                    errorType: "Used addition instead of distance formula"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Find slope through (2,3) and (5,9)",
                        "m = (5-2)/(9-3)",  // ERROR: x and y switched
                        "m = 3/6",
                        "m = 1/2"
                    ],
                    correctAnswer: "m = 2",
                    errorType: "Used (x₂-x₁)/(y₂-y₁) instead of (y₂-y₁)/(x₂-x₁)"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "Right triangle legs 6 and 8",
                        "a + b = c",  // ERROR: should be a² + b² = c²
                        "6 + 8 = 14"
                    ],
                    correctAnswer: "10",
                    errorType: "Forgot to square the sides in Pythagorean theorem"
                }
            ]
        };
    }

    initializeGeometricConstructionDatabase() {
        this.constructions = {
            perpendicular_bisector: {
                name: "Perpendicular Bisector of a Segment",
                tools: "Compass and straightedge",
                steps: [
                    "Draw segment AB",
                    "Set compass to more than half AB",
                    "Draw arc from A above and below AB",
                    "Keep same compass setting, draw arc from B",
                    "Mark intersections of arcs as C and D",
                    "Draw line through C and D"
                ],
                result: "Line CD is perpendicular bisector of AB",
                applications: ["Finding equidistant points", "Circumcenter of triangle"]
            },
            angle_bisector: {
                name: "Angle Bisector",
                tools: "Compass and straightedge",
                steps: [
                    "Draw angle BAC",
                    "Place compass at A, draw arc intersecting both rays",
                    "Mark intersections as D and E",
                    "Place compass at D, draw arc inside angle",
                    "Keep same setting, draw arc from E to intersect previous arc",
                    "Mark intersection as F",
                    "Draw ray from A through F"
                ],
                result: "Ray AF bisects angle BAC",
                applications: ["Finding angle center", "Incenter of triangle"]
            },
            parallel_line: {
                name: "Parallel Line Through a Point",
                tools: "Compass and straightedge",
                steps: [
                    "Given line ℓ and point P not on ℓ",
                    "Draw any transversal through P intersecting ℓ at Q",
                    "Copy angle at Q to point P",
                    "Draw line through P with copied angle"
                ],
                result: "New line is parallel to ℓ",
                applications: ["Creating parallelograms", "Parallel projection"]
            },
            perpendicular_line: {
                name: "Perpendicular Line Through a Point",
                tools: "Compass and straightedge",
                steps: [
                    "Given line ℓ and point P",
                    "Place compass at P, draw arc intersecting ℓ twice",
                    "Mark intersections as A and B",
                    "Draw arcs from A and B on opposite side of ℓ from P",
                    "Mark intersection of these arcs as Q",
                    "Draw line PQ"
                ],
                result: "Line PQ is perpendicular to ℓ",
                applications: ["Altitude of triangle", "Right angle construction"]
            }
        };
    }

    initializeProofTemplatesDatabase() {
        this.proofTemplates = {
            two_column: {
                name: "Two-Column Proof",
                structure: "Statements in left column, reasons in right column",
                format: [
                    "Given information",
                    "Properties and definitions",
                    "Theorems and postulates",
                    "Logical deductions",
                    "Conclusion"
                ],
                example: {
                    theorem: "Vertical angles are congruent",
                    proof: [
                        { statement: "∠1 and ∠2 are vertical angles", reason: "Given" },
                        { statement: "∠1 and ∠3 form linear pair", reason: "Definition of linear pair" },
                        { statement: "∠1 + ∠3 = 180°", reason: "Linear pair theorem" },
                        { statement: "∠2 and ∠3 form linear pair", reason: "Definition of linear pair" },
                        { statement: "∠2 + ∠3 = 180°", reason: "Linear pair theorem" },
                        { statement: "∠1 + ∠3 = ∠2 + ∠3", reason: "Transitive property" },
                        { statement: "∠1 = ∠2", reason: "Subtraction property" }
                    ]
                }
            },
            paragraph: {
                name: "Paragraph Proof",
                structure: "Written in prose form with logical flow",
                format: "State given, explain reasoning with theorems, reach conclusion",
                tips: [
                    "Use transition words (therefore, since, because)",
                    "Cite theorems and definitions",
                    "Maintain logical sequence",
                    "End with clear conclusion"
                ]
            },
            flowchart: {
                name: "Flowchart Proof",
                structure: "Boxes with arrows showing logical flow",
                format: "Each box contains statement with reason below",
                advantages: [
                    "Visual representation of logic",
                    "Easy to follow dependencies",
                    "Flexible structure"
                ]
            }
        };
    }

    initializeVisualizationDatabase() {
        this.visualizations = {
            distance_formula_derivation: {
                description: "Show how distance formula comes from Pythagorean theorem",
                steps: [
                    "Plot points A(x₁,y₁) and B(x₂,y₂)",
                    "Draw horizontal line from A: length |x₂-x₁|",
                    "Draw vertical line to B: length |y₂-y₁|",
                    "These form legs of right triangle",
                    "AB is hypotenuse, use Pythagorean theorem"
                ],
                visualization: "Right triangle on coordinate plane"
            },
            slope_visualization: {
                description: "Visual representation of slope as rise over run",
                steps: [
                    "Plot two points",
                    "Draw vertical line (rise): Δy = y₂-y₁",
                    "Draw horizontal line (run): Δx = x₂-x₁",
                    "Slope = rise/run = Δy/Δx"
                ],
                visualization: "Staircase or ramp showing rise and run"
            },
            pythagorean_visual_proof: {
                description: "Area-based proof of Pythagorean theorem",
                steps: [
                    "Draw right triangle with squares on each side",
                    "Area of square on side a: a²",
                    "Area of square on side b: b²",
                    "Area of square on hypotenuse c: c²",
                    "Rearrange to show a² + b² = c²"
                ],
                visualization: "Triangle with three squares attached"
            },
            angle_relationships: {
                description: "Visual guide to angle pairs",
                types: {
                    "Complementary": "Two angles forming 90° (L-shape)",
                    "Supplementary": "Two angles forming 180° (straight line)",
                    "Vertical": "Opposite angles at intersection (X-shape)",
                    "Adjacent": "Side-by-side angles sharing a ray"
                },
                visualization: "Diagrams showing each angle relationship"
            },
            circle_parts: {
                description: "Labeled diagram of circle components",
                parts: [
                    "Center: point equidistant from all points on circle",
                    "Radius: segment from center to circle",
                    "Diameter: longest chord through center",
                    "Chord: segment with endpoints on circle",
                    "Secant: line intersecting circle twice",
                    "Tangent: line touching circle once"
                ],
                visualization: "Circle with all parts labeled"
            }
        };
    }

    initializeTheoremsDatabase() {
        this.theorems = {
            pythagorean: {
                statement: "In a right triangle, a² + b² = c²",
                conditions: "Must be a right triangle, c is hypotenuse",
                converse: "If a² + b² = c², then triangle is right triangle",
                applications: ["Finding missing side", "Checking if triangle is right", "Distance formula"]
            },
            triangle_angle_sum: {
                statement: "Sum of angles in a triangle = 180°",
                proof: "Based on parallel lines and transversal",
                applications: ["Finding missing angle", "Proving angle relationships"]
            },
            vertical_angles: {
                statement: "Vertical angles are congruent",
                proof: "Both supplementary to same angle",
                applications: ["Finding unknown angles", "Proving congruence"]
            },
            corresponding_angles: {
                statement: "If parallel lines cut by transversal, corresponding angles are congruent",
                converse: "If corresponding angles congruent, lines are parallel",
                applications: ["Proving lines parallel", "Finding angles"]
            },
            alternate_interior: {
                statement: "If parallel lines cut by transversal, alternate interior angles are congruent",
                converse: "If alternate interior angles congruent, lines are parallel",
                applications: ["Proving lines parallel", "Finding angles"]
            },
            triangle_inequality: {
                statement: "Sum of any two sides > third side",
                applications: ["Determining if three lengths can form triangle"]
            },
            isosceles_triangle: {
                statement: "If two sides congruent, then base angles congruent",
                converse: "If two angles congruent, then opposite sides congruent",
                applications: ["Finding angles in isosceles triangles"]
            }
        };
    }

    initializePostulatesDatabase() {
        this.postulates = {
            ruler: {
                statement: "Points on a line can be matched with real numbers (coordinates)",
                implications: "Allows measurement of distance"
            },
            segment_addition: {
                statement: "If B is between A and C, then AB + BC = AC",
                applications: ["Finding lengths of segments"]
            },
            angle_addition: {
                statement: "If point D is in interior of ∠ABC, then m∠ABD + m∠DBC = m∠ABC",
                applications: ["Finding measures of angles"]
            },
            protractor: {
                statement: "Angles can be measured in degrees from 0 to 180",
                implications: "Allows measurement of angles"
            },
            parallel: {
                statement: "Through point not on line, exactly one parallel line exists",
                implications: "Basis for Euclidean geometry"
            },
            sss: {
                statement: "If three sides of one triangle congruent to three sides of another, triangles are congruent",
                type: "Congruence postulate"
            },
            sas: {
                statement: "If two sides and included angle congruent, triangles are congruent",
                type: "Congruence postulate"
            },
            asa: {
                statement: "If two angles and included side congruent, triangles are congruent",
                type: "Congruence postulate"
            }
        };
    }

    // GEOMETRY SOLVERS

    solveDistance2D(problem) {
        const { x1, y1, x2, y2 } = problem.parameters;
        
        const dx = x2 - x1;
        const dy = y2 - y1;
        const distance = Math.sqrt(dx*dx + dy*dy);

        return {
            type: 'Distance Between Two Points',
            points: [`(${x1}, ${y1})`, `(${x2}, ${y2})`],
            formula: 'd = √[(x₂-x₁)² + (y₂-y₁)²]',
            calculation: {
                dx: dx,
                dy: dy,
                dx_squared: dx*dx,
                dy_squared: dy*dy,
                sum: dx*dx + dy*dy,
                distance: distance
            },
            solution: distance,
            exact: this.formatExactDistance(dx*dx + dy*dy),
            decimal: Number(distance.toFixed(4)),
            category: 'distance_midpoint'
        };
    }

    solveMidpoint2D(problem) {
        const { x1, y1, x2, y2 } = problem.parameters;
        
        const mx = (x1 + x2) / 2;
        const my = (y1 + y2) / 2;

        return {
            type: 'Midpoint Between Two Points',
            points: [`(${x1}, ${y1})`, `(${x2}, ${y2})`],
            formula: 'M = ((x₁+x₂)/2, (y₁+y₂)/2)',
            calculation: {
                x_sum: x1 + x2,
                y_sum: y1 + y2,
                x_midpoint: mx,
                y_midpoint: my
            },
            solution: `(${mx}, ${my})`,
            coordinates: { x: mx, y: my },
            category: 'distance_midpoint'
        };
    }

    solveSlope(problem) {
        const { x1, y1, x2, y2 } = problem.parameters;
        
        const dx = x2 - x1;
        const dy = y2 - y1;

        if (Math.abs(dx) < 1e-10) {
            return {
                type: 'Slope of a Line',
                points: [`(${x1}, ${y1})`, `(${x2}, ${y2})`],
                formula: 'm = (y₂-y₁)/(x₂-x₁)',
                solution: 'undefined',
                slopeType: 'Vertical line',
                explanation: 'Vertical lines have undefined slope',
                category: 'slope_equations'
            };
        }

        const slope = dy / dx;

        return {
            type: 'Slope of a Line',
            points: [`(${x1}, ${y1})`, `(${x2}, ${y2})`],
            formula: 'm = (y₂-y₁)/(x₂-x₁)',
            calculation: {
                dy: dy,
                dx: dx,
                slope: slope
            },
            solution: slope,
            fraction: this.simplifyFraction(dy, dx),
            decimal: Number(slope.toFixed(4)),
            slopeType: this.classifySlope(slope),
            category: 'slope_equations'
        };
    }

    solveLineEquationPointSlope(problem) {
        const { x1, y1, m } = problem.parameters;

        // Point-slope form: y - y₁ = m(x - x₁)
        // Convert to slope-intercept: y = mx + b
        const b = y1 - m * x1;

        return {
            type: 'Line Equation (Point-Slope Form)',
            point: `(${x1}, ${y1})`,
            slope: m,
            pointSlopeForm: `y - ${y1} = ${m}(x - ${x1})`,
            slopeInterceptForm: `y = ${m}x + ${b}`,
            standardForm: this.convertToStandardForm(m, b),
            yIntercept: b,
            solution: `y = ${m}x + ${b}`,
            category: 'slope_equations'
        };
    }

    solveLineEquationTwoPoints(problem) {
        const { x1, y1, x2, y2 } = problem.parameters;

        // First find slope
        const dx = x2 - x1;
        const dy = y2 - y1;

        if (Math.abs(dx) < 1e-10) {
            return {
                type: 'Line Equation (Two Points)',
                points: [`(${x1}, ${y1})`, `(${x2}, ${y2})`],
                solution: `x = ${x1}`,
                lineType: 'Vertical line',
                category: 'slope_equations'
            };
        }

        const m = dy / dx;
        const b = y1 - m * x1;

        return {
            type: 'Line Equation (Two Points)',
            points: [`(${x1}, ${y1})`, `(${x2}, ${y2})`],
            slope: m,
            calculation: {
                dy: dy,
                dx: dx,
                slope: m,
                yIntercept: b
            },
            solution: `y = ${m}x + ${b}`,
            slopeInterceptForm: `y = ${m}x + ${b}`,
            standardForm: this.convertToStandardForm(m, b),
            category: 'slope_equations'
        };
    }

    solveParallelLine(problem) {
        const { m, x1, y1 } = problem.parameters;

        // Parallel lines have same slope
        const b = y1 - m * x1;

        return {
            type: 'Parallel Line Equation',
            givenSlope: m,
            parallelSlope: m,
            point: `(${x1}, ${y1})`,
            reasoning: 'Parallel lines have equal slopes',
            solution: `y = ${m}x + ${b}`,
            category: 'parallel_perpendicular'
        };
    }

    solvePerpendicularLine(problem) {
        const { m, x1, y1 } = problem.parameters;

        // Perpendicular slope is negative reciprocal
        if (Math.abs(m) < 1e-10) {
            // Original line is horizontal, perpendicular is vertical
            return {
                type: 'Perpendicular Line Equation',
                givenSlope: m,
                solution: `x = ${x1}`,
                lineType: 'Vertical line',
                category: 'parallel_perpendicular'
            };
        }

        const perpSlope = -1 / m;
        const b = y1 - perpSlope * x1;

        return {
            type: 'Perpendicular Line Equation',
            givenSlope: m,
            perpendicularSlope: perpSlope,
            point: `(${x1}, ${y1})`,
            reasoning: 'Perpendicular slopes are negative reciprocals (m₁ · m₂ = -1)',
            solution: `y = ${perpSlope}x + ${b}`,
            category: 'parallel_perpendicular'
        };
    }

    solveAngleSum(problem) {
        const { angles } = problem.parameters;
        const sum = angles.reduce((acc, angle) => acc + angle, 0);

        return {
            type: 'Sum of Angles',
            angles: angles,
            solution: sum,
            unit: 'degrees',
            category: 'angles'
        };
    }

    solveComplementaryAngle(problem) {
        const { angle } = problem.parameters;

        if (angle < 0 || angle >= 90) {
            return {
                type: 'Complementary Angle',
                givenAngle: angle,
                solution: null,
                note: 'Angle must be between 0° and 90° to have a complement',
                category: 'angles'
            };
        }

        const complement = 90 - angle;

        return {
            type: 'Complementary Angle',
            givenAngle: angle,
            formula: 'Complement = 90° - angle',
            solution: complement,
            verification: `${angle}° + ${complement}° = 90°`,
            category: 'angles'
        };
    }

    solveSupplementaryAngle(problem) {
        const { angle } = problem.parameters;

        if (angle < 0 || angle >= 180) {
            return {
                type: 'Supplementary Angle',
                givenAngle: angle,
                solution: null,
                note: 'Angle must be between 0° and 180° to have a supplement',
                category: 'angles'
            };
        }

        const supplement = 180 - angle;

        return {
            type: 'Supplementary Angle',
            givenAngle: angle,
            formula: 'Supplement = 180° - angle',
            solution: supplement,
            verification: `${angle}° + ${supplement}° = 180°`,
            category: 'angles'
        };
    }

    solveTriangleAngleSum(problem) {
        const { angle1, angle2, angle3 } = problem.parameters;

        // Find missing angle if one is unknown (passed as null or undefined)
        let missingAngle = null;
        let knownSum = 0;
        let knownAngles = [];

        if (angle1 !== null && angle1 !== undefined) {
            knownAngles.push(angle1);
            knownSum += angle1;
        }
        if (angle2 !== null && angle2 !== undefined) {
            knownAngles.push(angle2);
            knownSum += angle2;
        }
        if (angle3 !== null && angle3 !== undefined) {
            knownAngles.push(angle3);
            knownSum += angle3;
        }

        if (knownAngles.length === 2) {
            missingAngle = 180 - knownSum;
        }

        return {
            type: 'Triangle Angle Sum',
            theorem: 'Sum of angles in triangle = 180°',
            givenAngles: knownAngles,
            solution: missingAngle,
            verification: knownAngles.length === 3 ? `${knownAngles.join('° + ')}° = ${knownSum}°` : null,
            category: 'triangles_basics'
        };
    }

    solvePythagorean(problem) {
        const { a, b, c, findSide } = problem.parameters;

        // Determine which side to find
        if (findSide === 'c' || (c === null && a !== null && b !== null)) {
            // Finding hypotenuse
            const hypotenuse = Math.sqrt(a*a + b*b);
            
            return {
                type: 'Pythagorean Theorem',
                formula: 'a² + b² = c²',
                given: { a, b },
                finding: 'hypotenuse (c)',
                calculation: {
                    a_squared: a*a,
                    b_squared: b*b,
                    sum: a*a + b*b,
                    c: hypotenuse
                },
                solution: hypotenuse,
                exact: this.formatExactSquareRoot(a*a + b*b),
                decimal: Number(hypotenuse.toFixed(4)),
                category: 'pythagorean_theorem'
            };
        } else if (findSide === 'a' || (a === null && b !== null && c !== null)) {
            // Finding leg a
            const leg = Math.sqrt(c*c - b*b);
            
            return {
                type: 'Pythagorean Theorem',
                formula: 'a² + b² = c²',
                given: { b, c },
                finding: 'leg (a)',
                calculation: {
                    c_squared: c*c,
                    b_squared: b*b,
                    difference: c*c - b*b,
                    a: leg
                },
                solution: leg,
                exact: this.formatExactSquareRoot(c*c - b*b),
                decimal: Number(leg.toFixed(4)),
                category: 'pythagorean_theorem'
            };
        } else if (findSide === 'b' || (b === null && a !== null && c !== null)) {
            // Finding leg b
            const leg = Math.sqrt(c*c - a*a);
            
            return {
                type: 'Pythagorean Theorem',
                formula: 'a² + b² = c²',
                given: { a, c },
                finding: 'leg (b)',
                calculation: {
                    c_squared: c*c,
                    a_squared: a*a,
                    difference: c*c - a*a,
                    b: leg
                },
                solution: leg,
                exact: this.formatExactSquareRoot(c*c - a*a),
                decimal: Number(leg.toFixed(4)),
                category: 'pythagorean_theorem'
            };
        }

        return {
            type: 'Pythagorean Theorem',
            error: 'Insufficient information to solve',
            category: 'pythagorean_theorem'
        };
    }

    solveTrianglePerimeter(problem) {
        const { a, b, c } = problem.parameters;
        const perimeter = a + b + c;

        return {
            type: 'Triangle Perimeter',
            formula: 'P = a + b + c',
            sides: { a, b, c },
            solution: perimeter,
            unit: 'linear units',
            category: 'perimeter_area'
        };
    }

    solveTriangleArea(problem) {
        const { base, height, a, b, c, method } = problem.parameters;

        if (method === 'base-height' || (base && height)) {
            const area = 0.5 * base * height;
            
            return {
                type: 'Triangle Area',
                formula: 'A = ½bh',
                given: { base, height },
                solution: area,
                unit: 'square units',
                category: 'perimeter_area'
            };
        } else if (method === 'heron' || (a && b && c)) {
            // Heron's formula
            const s = (a + b + c) / 2;
            const area = Math.sqrt(s * (s-a) * (s-b) * (s-c));
            
            return {
                type: 'Triangle Area (Heron\'s Formula)',
                formula: 'A = √[s(s-a)(s-b)(s-c)]',
                sides: { a, b, c },
                semiperimeter: s,
                solution: area,
                decimal: Number(area.toFixed(4)),
                unit: 'square units',
                category: 'perimeter_area'
            };
        }

        return {
            type: 'Triangle Area',
            error: 'Insufficient information',
            category: 'perimeter_area'
        };
    }

    solveRectanglePerimeter(problem) {
        const { length, width } = problem.parameters;
        const perimeter = 2 * length + 2 * width;

        return {
            type: 'Rectangle Perimeter',
            formula: 'P = 2l + 2w',
            dimensions: { length, width },
            calculation: `2(${length}) + 2(${width})`,
            solution: perimeter,
            unit: 'linear units',
            category: 'perimeter_area'
        };
    }

    solveRectangleArea(problem) {
        const { length, width } = problem.parameters;
        const area = length * width;

        return {
            type: 'Rectangle Area',
            formula: 'A = lw',
            dimensions: { length, width },
            calculation: `${length} × ${width}`,
            solution: area,
            unit: 'square units',
            category: 'perimeter_area'
        };
    }

    solveSquarePerimeter(problem) {
        const { side } = problem.parameters;
        const perimeter = 4 * side;

        return {
            type: 'Square Perimeter',
            formula: 'P = 4s',
            side: side,
            calculation: `4 × ${side}`,
            solution: perimeter,
            unit: 'linear units',
            category: 'perimeter_area'
        };
    }

    solveSquareArea(problem) {
        const { side } = problem.parameters;
        const area = side * side;

        return {
            type: 'Square Area',
            formula: 'A = s²',
            side: side,
            calculation: `${side}²`,
            solution: area,
            unit: 'square units',
            category: 'perimeter_area'
        };
    }

    solveParallelogramArea(problem) {
        const { base, height } = problem.parameters;
        const area = base * height;

        return {
            type: 'Parallelogram Area',
            formula: 'A = bh',
            given: { base, height },
            calculation: `${base} × ${height}`,
            solution: area,
            unit: 'square units',
            note: 'Height must be perpendicular to base',
            category: 'perimeter_area'
        };
    }

    solveTrapezoidArea(problem) {
        const { base1, base2, height } = problem.parameters;
        const area = 0.5 * height * (base1 + base2);

        return {
            type: 'Trapezoid Area',
            formula: 'A = ½h(b₁ + b₂)',
            given: { base1, base2, height },
            calculation: `½(${height})(${base1} + ${base2})`,
            solution: area,
            unit: 'square units',
            category: 'perimeter_area'
        };
    }

    solvePolygonAngleSum(problem) {
        const { n } = problem.parameters;
        const sum = (n - 2) * 180;

        return {
            type: 'Polygon Interior Angle Sum',
            formula: 'S = (n - 2) × 180°',
            sides: n,
            calculation: `(${n} - 2) × 180°`,
            solution: sum,
            unit: 'degrees',
            category: 'polygons'
        };
    }

    solveRegularPolygonAngle(problem) {
        const { n } = problem.parameters;
        const sum = (n - 2) * 180;
        const eachAngle = sum / n;

        return {
            type: 'Regular Polygon Interior Angle',
            formula: '[(n - 2) × 180°] / n',
            sides: n,
            angleSum: sum,
            calculation: `${sum}° / ${n}`,
            solution: eachAngle,
            unit: 'degrees',
            category: 'polygons'
        };
    }

    solveCircleCircumference(problem) {
        const { radius, diameter } = problem.parameters;
        const r = radius || diameter / 2;
        const circumference = 2 * Math.PI * r;

        return {
            type: 'Circle Circumference',
            formula: 'C = 2πr',
            radius: r,
            exactForm: `${2 * r}π`,
            solution: circumference,
            decimal: Number(circumference.toFixed(4)),
            unit: 'linear units',
            category: 'circles'
        };
    }

    solveCircleArea(problem) {
        const { radius, diameter } = problem.parameters;
        const r = radius || diameter / 2;
        const area = Math.PI * r * r;

        return {
            type: 'Circle Area',
            formula: 'A = πr²',
            radius: r,
            exactForm: `${r * r}π`,
            solution: area,
            decimal: Number(area.toFixed(4)),
            unit: 'square units',
            category: 'circles'
        };
    }

    solveArcLength(problem) {
        const { radius, angle, angleUnit } = problem.parameters;
        
        let arcLength;
        if (angleUnit === 'radians') {
            arcLength = radius * angle;
        } else {
            // Convert degrees to radians
            const radians = angle * Math.PI / 180;
            arcLength = radius * radians;
        }

        return {
            type: 'Arc Length',
            formula: angleUnit === 'radians' ? 's = rθ' : 's = (θ/360°) × 2πr',
            radius: radius,
            angle: angle,
            angleUnit: angleUnit,
            solution: arcLength,
            decimal: Number(arcLength.toFixed(4)),
            unit: 'linear units',
            category: 'circles'
        };
    }

    solveSectorArea(problem) {
        const { radius, angle, angleUnit } = problem.parameters;
        
        let sectorArea;
        if (angleUnit === 'radians') {
            sectorArea = 0.5 * radius * radius * angle;
        } else {
            // Use fraction of total area
            sectorArea = (angle / 360) * Math.PI * radius * radius;
        }

        return {
            type: 'Sector Area',
            formula: angleUnit === 'radians' ? 'A = ½r²θ' : 'A = (θ/360°) × πr²',
            radius: radius,
            angle: angle,
            angleUnit: angleUnit,
            solution: sectorArea,
            decimal: Number(sectorArea.toFixed(4)),
            unit: 'square units',
            category: 'circles'
        };
    }

    solveSimilarTriangles(problem) {
        const { side1_triangle1, side2_triangle1, unknown_side_triangle1,
                side1_triangle2, side2_triangle2, unknown_side_triangle2 } = problem.parameters;

        // Set up proportion
        let knownRatio, unknownSide, result;

        if (unknown_side_triangle1) {
            knownRatio = side1_triangle2 / side1_triangle1;
            result = side2_triangle1 * knownRatio;
            unknownSide = 'triangle 1';
        } else {
            knownRatio = side1_triangle1 / side1_triangle2;
            result = side2_triangle2 * knownRatio;
            unknownSide = 'triangle 2';
        }

        return {
            type: 'Similar Triangles',
            principle: 'Corresponding sides are proportional',
            scaleFactor: knownRatio,
            proportion: 'a₁/a₂ = b₁/b₂',
            solution: result,
            category: 'similarity_congruence'
        };
    }

    solveScaleFactor(problem) {
        const { originalLength, newLength } = problem.parameters;
        const scaleFactor = newLength / originalLength;

        return {
            type: 'Scale Factor',
            formula: 'k = new length / original length',
            originalLength: originalLength,
            newLength: newLength,
            solution: scaleFactor,
            decimal: Number(scaleFactor.toFixed(4)),
            enlargement: scaleFactor > 1,
            reduction: scaleFactor < 1,
            category: 'similarity_congruence'
        };
    }

    // HELPER METHODS

    formatExactDistance(sumOfSquares) {
        // Check for perfect square
        const sqrt = Math.sqrt(sumOfSquares);
        if (Math.abs(sqrt - Math.round(sqrt)) < 1e-10) {
            return `${Math.round(sqrt)}`;
        }
        
        // Simplify radical if possible
        return `√${sumOfSquares}`;
    }

    formatExactSquareRoot(value) {
        const sqrt = Math.sqrt(value);
        if (Math.abs(sqrt - Math.round(sqrt)) < 1e-10) {
            return `${Math.round(sqrt)}`;
        }
        return `√${value}`;
    }

    simplifyFraction(numerator, denominator) {
        const gcd = this.findGCD(Math.abs(numerator), Math.abs(denominator));
        const num = numerator / gcd;
        const den = denominator / gcd;
        
        if (den === 1) return `${num}`;
        return `${num}/${den}`;
    }

    findGCD(a, b) {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    classifySlope(m) {
        if (m > 0) return 'Positive (rises left to right)';
        if (m < 0) return 'Negative (falls left to right)';
        if (m === 0) return 'Zero (horizontal line)';
        return 'Undefined (vertical line)';
    }

    convertToStandardForm(m, b) {
        // y = mx + b  →  -mx + y = b  →  mx - y = -b
        // Or: Ax + By = C where A, B, C are integers
        
        // Try to make coefficients integers
        const factor = this.findLCMForStandardForm(m, b);
        const A = -m * factor;
        const B = factor;
        const C = b * factor;
        
        return `${A}x + ${B}y = ${C}`;
    }

    findLCMForStandardForm(m, b) {
        // Simple approach: if m is fraction, use denominator
        // For now, just use 1
        return 1;
    }

    // MAIN SOLVER METHOD

    solveGeometryProblem(config) {
        const { equation, scenario, parameters, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseGeometryProblem(equation, scenario, parameters, problemType, context);

            // Solve the problem
            this.currentSolution = this.solveGeometryProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateGeometrySteps(this.currentProblem, this.currentSolution);

            // Generate diagrams if applicable
            this.generateGeometryDiagrams();

            // Generate workbook
            this.generateGeometryWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                solutionValue: this.currentSolution?.solution,
                diagram: this.diagramData
            };

        } catch (error) {
            throw new Error(`Failed to solve geometry problem: ${error.message}`);
        }
    }

    parseGeometryProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = equation ? this.cleanMathExpression(equation) : '';

        // If problem type is specified, use it directly
        if (problemType && this.geometryTypes[problemType]) {
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

        // Auto-detect geometry problem type
        for (const [type, config] of Object.entries(this.geometryTypes)) {
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

        throw new Error(`Unable to recognize geometry problem type from: ${equation || scenario}`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/≤/g, '<=')
            .replace(/≥/g, '>=')
            .replace(/≠/g, '!=')
            .replace(/∠/g, 'angle')
            .replace(/△/g, 'triangle')
            .replace(/°/g, '')
            .trim();
    }

    solveGeometryProblem_Internal(problem) {
        const solver = this.geometryTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for geometry problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // STEP GENERATION

    generateGeometrySteps(problem, solution) {
        let baseSteps = this.generateBaseGeometrySteps(problem, solution);

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

    generateBaseGeometrySteps(problem, solution) {
        const { type } = problem;
        const category = this.geometryTypes[type]?.category;

        switch(category) {
            case 'distance_midpoint':
                return this.generateDistanceMidpointSteps(problem, solution);
            case 'slope_equations':
                return this.generateSlopeSteps(problem, solution);
            case 'angles':
                return this.generateAngleSteps(problem, solution);
            case 'pythagorean_theorem':
                return this.generatePythagoreanSteps(problem, solution);
            case 'perimeter_area':
                return this.generatePerimeterAreaSteps(problem, solution);
            case 'circles':
                return this.generateCircleSteps(problem, solution);
            case 'polygons':
                return this.generatePolygonSteps(problem, solution);
            default:
                return this.generateGenericGeometrySteps(problem, solution);
        }
    }

    generateDistanceMidpointSteps(problem, solution) {
        const steps = [];
        const { type } = problem;

        if (type === 'distance_2d') {
            const { x1, y1, x2, y2 } = problem.parameters;
            
            steps.push({
                stepNumber: 1,
                step: 'Identify the points',
                description: 'Write down the coordinates of both points',
                expression: `Point 1: (${x1}, ${y1}), Point 2: (${x2}, ${y2})`,
                reasoning: 'We need both points to calculate distance',
                visualHint: 'Plot these points on a coordinate plane'
            });

            steps.push({
                stepNumber: 2,
                step: 'Write the distance formula',
                description: 'The distance formula comes from the Pythagorean theorem',
                expression: 'd = √[(x₂-x₁)² + (y₂-y₁)²]',
                reasoning: 'This formula finds the straight-line distance between two points',
                geometricMeaning: 'Distance is the length of the hypotenuse of a right triangle'
            });

            steps.push({
                stepNumber: 3,
                step: 'Calculate the differences',
                description: 'Find the horizontal and vertical distances',
                calculation: {
                    horizontal: `x₂ - x₁ = ${x2} - ${x1} = ${solution.calculation.dx}`,
                    vertical: `y₂ - y₁ = ${y2} - ${y1} = ${solution.calculation.dy}`
                },
                reasoning: 'These represent the legs of our right triangle'
            });

            steps.push({
                stepNumber: 4,
                step: 'Square the differences',
                description: 'Square both the horizontal and vertical distances',
                calculation: {
                    dx_squared: `(${solution.calculation.dx})² = ${solution.calculation.dx_squared}`,
                    dy_squared: `(${solution.calculation.dy})² = ${solution.calculation.dy_squared}`
                },
                reasoning: 'This is part of the Pythagorean theorem: a² + b²'
            });

            steps.push({
                stepNumber: 5,
                step: 'Add the squares',
                description: 'Add the squared differences together',
                expression: `${solution.calculation.dx_squared} + ${solution.calculation.dy_squared} = ${solution.calculation.sum}`,
                reasoning: 'This gives us c² in the Pythagorean theorem'
            });

            steps.push({
                stepNumber: 6,
                step: 'Take the square root',
                description: 'Find the square root to get the distance',
                expression: `d = √${solution.calculation.sum} = ${solution.solution}`,
                finalAnswer: true,
                reasoning: 'The square root gives us the actual distance'
            });

        } else if (type === 'midpoint_2d') {
            const { x1, y1, x2, y2 } = problem.parameters;
            
            steps.push({
                stepNumber: 1,
                step: 'Identify the points',
                description: 'Write down the coordinates of both endpoints',
                expression: `Point 1: (${x1}, ${y1}), Point 2: (${x2}, ${y2})`,
                reasoning: 'We need both endpoints to find the midpoint',
                visualHint: 'The midpoint is exactly halfway between these points'
            });

            steps.push({
                stepNumber: 2,
                step: 'Write the midpoint formula',
                description: 'The midpoint formula averages the coordinates',
                expression: 'M = ((x₁+x₂)/2, (y₁+y₂)/2)',
                reasoning: 'Averaging finds the middle value'
            });

            steps.push({
                stepNumber: 3,
                step: 'Calculate the x-coordinate',
                description: 'Add the x-coordinates and divide by 2',
                calculation: `(${x1} + ${x2})/2 = ${solution.calculation.x_sum}/2 = ${solution.coordinates.x}`,
                reasoning: 'This gives the x-coordinate of the midpoint'
            });

            steps.push({
                stepNumber: 4,
                step: 'Calculate the y-coordinate',
                description: 'Add the y-coordinates and divide by 2',
                calculation: `(${y1} + ${y2})/2 = ${solution.calculation.y_sum}/2 = ${solution.coordinates.y}`,
                reasoning: 'This gives the y-coordinate of the midpoint'
            });

            steps.push({
                stepNumber: 5,
                step: 'Write the midpoint',
                description: 'Combine the coordinates',
                expression: `M = (${solution.coordinates.x}, ${solution.coordinates.y})`,
                finalAnswer: true,
                reasoning: 'This point is exactly halfway between the two endpoints'
            });
        }

        return steps;
    }

    generateSlopeSteps(problem, solution) {
        const steps = [];
        const { type } = problem;

        if (type === 'slope') {
            const { x1, y1, x2, y2 } = problem.parameters;
            
            steps.push({
                stepNumber: 1,
                step: 'Identify the points',
                description: 'Write down both points',
                expression: `Point 1: (${x1}, ${y1}), Point 2: (${x2}, ${y2})`,
                reasoning: 'We need two points to find slope',
                visualHint: 'Slope measures how steep the line is between these points'
            });

            steps.push({
                stepNumber: 2,
                step: 'Write the slope formula',
                description: 'Slope is rise over run',
                expression: 'm = (y₂-y₁)/(x₂-x₁)',
                reasoning: 'Slope measures vertical change divided by horizontal change',
                geometricMeaning: 'This tells us how much y changes for each unit of x'
            });

            if (solution.slopeType === 'Vertical line') {
                steps.push({
                    stepNumber: 3,
                    step: 'Check for vertical line',
                    description: 'The x-coordinates are the same',
                    expression: `x₂ - x₁ = ${x2} - ${x1} = 0`,
                    reasoning: 'Division by zero means the slope is undefined',
                    finalAnswer: true,
                    note: 'Vertical lines have undefined slope'
                });
            } else {
                steps.push({
                    stepNumber: 3,
                    step: 'Calculate the rise',
                    description: 'Find the vertical change',
                    calculation: `y₂ - y₁ = ${y2} - ${y1} = ${solution.calculation.dy}`,
                    reasoning: 'This is how much y changes'
                });

                steps.push({
                    stepNumber: 4,
                    step: 'Calculate the run',
                    description: 'Find the horizontal change',
                    calculation: `x₂ - x₁ = ${x2} - ${x1} = ${solution.calculation.dx}`,
                    reasoning: 'This is how much x changes'
                });

                steps.push({
                    stepNumber: 5,
                    step: 'Divide rise by run',
                    description: 'Calculate the slope',
                    expression: `m = ${solution.calculation.dy}/${solution.calculation.dx} = ${solution.solution}`,
                    finalAnswer: true,
                    reasoning: `This is a ${solution.slopeType}`
                });
            }
        }

        return steps;
    }

    generateAngleSteps(problem, solution) {
        const steps = [];
        const { type } = problem;

        if (type === 'complementary_angle') {
            const { angle } = problem.parameters;
            
            steps.push({
                stepNumber: 1,
                step: 'Understand complementary angles',
                description: 'Complementary angles sum to 90°',
                reasoning: 'They form a right angle together',
                visualHint: 'Think of a square corner split into two pieces'
            });

            steps.push({
                stepNumber: 2,
                step: 'Write the equation',
                description: 'Set up the complement relationship',
                expression: `${angle}° + complement = 90°`,
                reasoning: 'The complement is what we need to add to reach 90°'
            });

            steps.push({
                stepNumber: 3,
                step: 'Solve for complement',
                description: 'Subtract the given angle from 90°',
                calculation: `complement = 90° - ${angle}° = ${solution.solution}°`,
                finalAnswer: true,
                reasoning: 'This angle combines with the given angle to make 90°'
            });

        } else if (type === 'supplementary_angle') {
            const { angle } = problem.parameters;
            
            steps.push({
                stepNumber: 1,
                step: 'Understand supplementary angles',
                description: 'Supplementary angles sum to 180°',
                reasoning: 'They form a straight line together',
                visualHint: 'Think of a straight line split into two angles'
            });

            steps.push({
                stepNumber: 2,
                step: 'Write the equation',
                description: 'Set up the supplement relationship',
                expression: `${angle}° + supplement = 180°`,
                reasoning: 'The supplement is what we need to add to reach 180°'
            });

            steps.push({
                stepNumber: 3,
                step: 'Solve for supplement',
                description: 'Subtract the given angle from 180°',
                calculation: `supplement = 180° - ${angle}° = ${solution.solution}°`,
                finalAnswer: true,
                reasoning: 'This angle combines with the given angle to make 180°'
            });
        }

        return steps;
    }

    generatePythagoreanSteps(problem, solution) {
        const steps = [];
        
        steps.push({
            stepNumber: 1,
            step: 'Identify the right triangle',
            description: 'Verify we have a right triangle and identify the sides',
            reasoning: 'The Pythagorean theorem only works for right triangles',
            visualHint: 'Look for the 90° angle; the hypotenuse is opposite it'
        });

        steps.push({
            stepNumber: 2,
            step: 'Write the Pythagorean theorem',
            description: 'The relationship between the sides',
            expression: 'a² + b² = c²',
            reasoning: 'In a right triangle, the sum of squares of legs equals square of hypotenuse',
            geometricMeaning: 'The area of squares on the legs equals the area of square on hypotenuse'
        });

        if (solution.finding === 'hypotenuse (c)') {
            const { a, b } = solution.given;
            
            steps.push({
                stepNumber: 3,
                step: 'Substitute known values',
                description: 'Plug in the leg lengths',
                expression: `${a}² + ${b}² = c²`,
                reasoning: 'We know both legs, solving for hypotenuse'
            });

            steps.push({
                stepNumber: 4,
                step: 'Square the legs',
                description: 'Calculate a² and b²',
                calculation: {
                    a_squared: `${a}² = ${solution.calculation.a_squared}`,
                    b_squared: `${b}² = ${solution.calculation.b_squared}`
                },
                reasoning: 'Squaring gives us the areas of squares on the legs'
            });

            steps.push({
                stepNumber: 5,
                step: 'Add the squares',
                description: 'Find c²',
                expression: `c² = ${solution.calculation.a_squared} + ${solution.calculation.b_squared} = ${solution.calculation.sum}`,
                reasoning: 'This is the area of the square on the hypotenuse'
            });

            steps.push({
                stepNumber: 6,
                step: 'Take the square root',
                description: 'Solve for c',
                expression: `c = √${solution.calculation.sum} = ${solution.solution}`,
                finalAnswer: true,
                reasoning: 'The square root gives us the length of the hypotenuse'
            });

        } else {
            // Finding a leg
            const given = solution.given;
            const givenLeg = given.a || given.b;
            const hyp = given.c;
            
            steps.push({
                stepNumber: 3,
                step: 'Substitute known values',
                description: 'Plug in the known leg and hypotenuse',
                expression: solution.finding === 'leg (a)' ? 
                    `a² + ${given.b}² = ${hyp}²` : 
                    `${given.a}² + b² = ${hyp}²`,
                reasoning: 'We know one leg and the hypotenuse'
            });

            steps.push({
                stepNumber: 4,
                step: 'Square the known values',
                description: 'Calculate the squares',
                reasoning: 'Squaring prepares for solving'
            });

            steps.push({
                stepNumber: 5,
                step: 'Subtract to isolate unknown',
                description: 'Rearrange to solve for missing leg',
                expression: solution.finding === 'leg (a)' ?
                    `a² = ${hyp}² - ${given.b}²` :
                    `b² = ${hyp}² - ${given.a}²`,
                reasoning: 'Isolating the unknown squared value'
            });

            steps.push({
                stepNumber: 6,
                step: 'Take the square root',
                description: 'Solve for the missing leg',
                expression: `${solution.finding.charAt(4)} = √${solution.calculation.difference} = ${solution.solution}`,
                finalAnswer: true,
                reasoning: 'The square root gives us the length of the missing leg'
            });
        }

        return steps;
    }

    generatePerimeterAreaSteps(problem, solution) {
        const steps = [];
        const { type } = problem;

        steps.push({
            stepNumber: 1,
            step: 'Identify the shape and what to find',
            description: `Finding ${solution.type}`,
            reasoning: `Different shapes use different formulas for ${type.includes('perimeter') ? 'perimeter' : 'area'}`
        });

        steps.push({
            stepNumber: 2,
            step: 'Write the formula',
            description: `Use the ${solution.type} formula`,
            expression: solution.formula,
            reasoning: solution.unit.includes('square') ? 
                'Area measures space enclosed (square units)' : 
                'Perimeter measures distance around (linear units)'
        });

        steps.push({
            stepNumber: 3,
            step: 'Substitute values',
            description: 'Plug in the given measurements',
            expression: solution.calculation || `Calculation step`,
            reasoning: 'Replace variables with actual numbers'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate',
            description: 'Perform the arithmetic',
            expression: `${solution.type.split(' ')[0]} = ${solution.solution} ${solution.unit}`,
            finalAnswer: true,
            reasoning: `This is the ${solution.type.toLowerCase()}`
        });

        return steps;
    }

    generateCircleSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify what to find',
            description: `Finding ${solution.type}`,
            reasoning: 'Circle formulas involve π and the radius'
        });

        steps.push({
            stepNumber: 2,
            step: 'Write the formula',
            description: `Use the ${solution.type} formula`,
            expression: solution.formula,
            reasoning: `This formula relates ${solution.type.toLowerCase()} to radius`
        });

        steps.push({
            stepNumber: 3,
            step: 'Substitute the radius',
            description: `Plug in r = ${solution.radius}`,
            reasoning: 'Replace r with the actual radius value'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate',
            description: 'Compute the result',
            expression: `Exact: ${solution.exactForm}, Decimal: ${solution.decimal}`,
            finalAnswer: true,
            reasoning: `Exact form keeps π; decimal uses π ≈ 3.14159`
        });

        return steps;
    }

    generatePolygonSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify the polygon',
            description: `This is a ${solution.sides || problem.parameters.n}-sided polygon`,
            reasoning: 'The number of sides determines angle measures'
        });

        steps.push({
            stepNumber: 2,
            step: 'Write the formula',
            description: solution.type,
            expression: solution.formula,
            reasoning: 'This formula works for any polygon'
        });

        steps.push({
            stepNumber: 3,
            step: 'Substitute n',
            description: `Plug in n = ${solution.sides || problem.parameters.n}`,
            calculation: solution.calculation,
            reasoning: 'Replace n with the number of sides'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate the result',
            description: 'Perform the arithmetic',
            expression: `${solution.solution}${solution.unit || ''}`,
            finalAnswer: true
        });

        return steps;
    }

    generateGenericGeometrySteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Geometry problem',
            description: 'Solve the given geometry problem',
            expression: problem.scenario || 'Geometric calculation',
            reasoning: 'Apply appropriate geometric principles',
            solution: solution
        }];
    }

    // Continue with diagram generation and workbook creation methods...
    // (These would follow the same pattern as the linear workbook)

    generateGeometryDiagrams() {
        if (!this.includeDiagrams) return;

        const { type } = this.currentProblem;
        const category = this.geometryTypes[type]?.category;

        this.diagramData = {
            type: category,
            coordinates: this.extractCoordinates(),
            labels: this.generateLabels(),
            measurements: this.extractMeasurements(),
            visualizationHints: this.visualizations[`${category}_visualization`] || {}
        };
    }

    extractCoordinates() {
        const params = this.currentProblem.parameters;
        const coords = [];

        if (params.x1 !== undefined) coords.push({ x: params.x1, y: params.y1, label: 'A' });
        if (params.x2 !== undefined) coords.push({ x: params.x2, y: params.y2, label: 'B' });

        return coords;
    }

    generateLabels() {
        return {
            points: this.extractCoordinates().map(c => c.label),
            angles: [],
            sides: []
        };
    }

    extractMeasurements() {
        const params = this.currentProblem.parameters;
        const measurements = {};

        if (params.a) measurements.a = params.a;
        if (params.b) measurements.b = params.b;
        if (params.c) measurements.c = params.c;
        if (params.angle) measurements.angle = params.angle;
        if (params.radius) measurements.radius = params.radius;

        return measurements;
    }

    generateGeometryWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createDiagramSection(),
            this.createEnhancedStepsSection(),
            this.createGeometryLessonSection(),
            this.createSolutionSection(),
            this.createVerificationSection(),
            this.createTheoremSection(),
            this.createRealWorldApplicationSection(),
            this.createConstructionSection(),
            this.createPracticeProblemsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Linear Geometry Mathematical Workbook',
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
            ['Problem Type', this.geometryTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.geometryTypes[this.currentProblem.type]?.category || 'geometry'],
            ['Description', this.currentProblem.scenario || 'Geometry problem']
        ];

        // Add parameters
        if (Object.keys(this.currentProblem.parameters).length > 0) {
            problemData.push(['', '']);
            problemData.push(['Given Information', '']);
            
            for (const [key, value] of Object.entries(this.currentProblem.parameters)) {
                if (value !== null && value !== undefined) {
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

    createDiagramSection() {
        if (!this.includeDiagrams || !this.diagramData) return null;

        const diagramData = [
            ['Diagram Type', this.diagramData.type],
            ['', ''],
            ['Coordinates', '']
        ];

        this.diagramData.coordinates.forEach(coord => {
            diagramData.push([coord.label, `(${coord.x}, ${coord.y})`]);
        });

        if (Object.keys(this.diagramData.measurements).length > 0) {
            diagramData.push(['', '']);
            diagramData.push(['Measurements', '']);
            
            for (const [key, value] of Object.entries(this.diagramData.measurements)) {
                diagramData.push([key, value]);
            }
        }

        return {
            title: 'Geometric Diagram',
            type: 'diagram',
            data: diagramData
        };
    }

    createGeometryLessonSection() {
        const { type } = this.currentProblem;
        const category = this.geometryTypes[type]?.category;
        const lesson = this.lessons[category];

        if (!lesson) return null;

        const lessonData = [
            ['Topic', lesson.title],
            ['', ''],
            ['Key Concepts', '']
        ];

        lesson.concepts.forEach(concept => {
            lessonData.push(['•', concept]);
        });

        lessonData.push(['', '']);
        lessonData.push(['Theory', lesson.theory]);

        if (lesson.keyFormulas) {
            lessonData.push(['', '']);
            lessonData.push(['Key Formulas', '']);
            
            for (const [name, formula] of Object.entries(lesson.keyFormulas)) {
                lessonData.push([name, formula]);
            }
        }

        return {
            title: 'Geometric Concepts',
            type: 'lesson',
            data: lessonData
        };
    }

    createTheoremSection() {
        const { type } = this.currentProblem;
        const category = this.geometryTypes[type]?.category;

        // Find relevant theorems
        const relevantTheorems = [];
        if (category === 'pythagorean_theorem') {
            relevantTheorems.push(this.theorems.pythagorean);
        } else if (category === 'triangles_basics') {
            relevantTheorems.push(this.theorems.triangle_angle_sum);
        } else if (category === 'angles') {
            relevantTheorems.push(this.theorems.vertical_angles);
        }

        if (relevantTheorems.length === 0) return null;

        const theoremData = [['Related Theorems', ''], ['', '']];

        relevantTheorems.forEach((theorem, index) => {
            theoremData.push([`Theorem ${index + 1}`, theorem.statement]);
            if (theorem.conditions) {
                theoremData.push(['Conditions', theorem.conditions]);
            }
            if (theorem.applications) {
                theoremData.push(['Applications', theorem.applications.join('; ')]);
            }
            theoremData.push(['', '']);
        });

        return {
            title: 'Theorems and Principles',
            type: 'theorems',
            data: theoremData
        };
    }

    createConstructionSection() {
        if (!this.includeConstructionSteps) return null;

        const { type } = this.currentProblem;
        const category = this.geometryTypes[type]?.category;

        let construction = null;
        if (category === 'parallel_perpendicular') {
            construction = type.includes('perpendicular') ? 
                this.constructions.perpendicular_line : 
                this.constructions.parallel_line;
        }

        if (!construction) return null;

        const constructionData = [
            ['Construction', construction.name],
            ['Tools Needed', construction.tools],
            ['', ''],
            ['Steps', '']
        ];

        construction.steps.forEach((step, index) => {
            constructionData.push([`${index + 1}`, step]);
        });

        constructionData.push(['', '']);
        constructionData.push(['Result', construction.result]);

        return {
            title: 'Geometric Construction',
            type: 'construction',
            data: constructionData
        };
    }

    // Reuse enhanced explanation methods from linear workbook
    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        // Same implementation as linear workbook
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,
            
            explanations: {
                conceptual: this.getConceptualExplanation(step, problem),
                procedural: this.getProceduralExplanation(step),
                visual: this.getVisualExplanation(step, problem),
                geometric: this.getGeometricExplanation(step, problem)
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

    getGeometricExplanation(step, problem) {
        const geometricExplanations = {
            'Identify the points': 'Points are exact locations in space, represented by coordinates',
            'Write the distance formula': 'Distance formula calculates straight-line distance using coordinate differences',
            'Calculate the differences': 'These differences form the legs of a right triangle',
            'Square the differences': 'Squaring relates to areas of squares built on triangle sides',
            'Take the square root': 'Square root reverses the squaring to find actual length',
            'Write the Pythagorean theorem': 'In right triangles, leg squares sum to hypotenuse square',
            'Identify the right triangle': 'Right triangles have one 90° angle',
            'Calculate the slope': 'Slope measures the rate of vertical change per horizontal unit'
        };

        return geometricExplanations[step.step] || 'Apply geometric principles to solve';
    }

    // Additional helper methods matching linear workbook structure
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
            'Identify the points': "We're finding two spots on our map!",
            'Write the distance formula': "This special math sentence tells us how far apart two places are!",
            'Calculate the differences': "Let's see how many steps right and how many steps up we need to go!",
            'Square the differences': "We multiply each number by itself - it's like making a square!",
            'Add the squares': "Now we add our two squares together!",
            'Take the square root': "This is like un-squaring - we find what number times itself gives us our answer!",
            'Write the Pythagorean theorem': "This is a super cool rule that works for every right triangle - the one with a square corner!",
            'Identify the right triangle': "Let's find our triangle that has a perfect square corner like the corner of a book!",
            'Calculate the slope': "Slope tells us if our line is going uphill or downhill, and how steep it is!"
        };

        return ELI5Explanations[step.step] || "Let's take another step to solve our geometry puzzle!";
    }

    convertToSimpleLanguage(description) {
        if (!description) return '';

        const simplifications = {
            'coordinate': 'location on the graph',
            'perpendicular': 'at a right angle (like a plus sign +)',
            'parallel': 'going the same direction and never meeting (like train tracks)',
            'hypotenuse': 'the longest side of a right triangle',
            'theorem': 'rule that always works',
            'formula': 'math recipe',
            'calculate': 'figure out',
            'substitute': 'replace with',
            'vertices': 'corners',
            'congruent': 'exactly the same size and shape',
            'similar': 'same shape but different size',
            'circumference': 'distance around a circle',
            'radius': 'distance from center to edge of circle',
            'diameter': 'distance across the whole circle through the center'
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
            'Identify the points': 'Draw two dots on graph paper and label them',
            'Write the distance formula': 'Draw a right triangle connecting the two points',
            'Calculate the differences': 'Draw horizontal and vertical lines showing the distances',
            'Square the differences': 'Draw actual squares with those side lengths',
            'Write the Pythagorean theorem': 'Draw a right triangle with squares on all three sides',
            'Calculate the slope': 'Draw a staircase showing rise and run',
            'Identify complementary angles': 'Draw a square corner and split it into two pieces',
            'Identify supplementary angles': 'Draw a straight line and split it into two angles'
        };

        return visualizations[step.step] || 'Draw a diagram to see what\'s happening';
    }

    // Reuse other helper methods from linear workbook
    addStepBridges(steps, problem) {
        // Same implementation as linear workbook
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generateStepBridge(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgression(steps[i], steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateStepBridge(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.expression || currentStep.description}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: 'This continues our solution process',
            howItHelps: 'This brings us closer to the final answer'
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step}`;
    }

    addErrorPrevention(step, problemType) {
        const category = this.geometryTypes[problemType]?.category || 'distance_midpoint';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTips(step, problemType),
                checkPoints: this.generateCheckPoints(step)
            }
        };
    }

    generatePreventionTips(step, problemType) {
        return [
            'Double-check your arithmetic',
            'Make sure you\'re using the correct formula',
            'Verify your diagram matches the problem'
        ];
    }

    generateCheckPoints(step) {
        return [
            'Did I label everything correctly?',
            'Are my calculations accurate?',
            'Does my answer make sense?'
        ];
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestions(step, problem),
                hints: this.generateProgressiveHints(step, problem)
            }
        }));
    }

    generateGuidingQuestions(step, problem) {
        return [
            'What information do I have?',
            'What am I trying to find?',
            'What formula or theorem should I use?'
        ];
    }

    generateProgressiveHints(step, problem) {
        const category = this.geometryTypes[problem.type]?.category || 'distance_midpoint';
        const hintSet = this.hints[category] || this.hints.distance_2d;

        return {
            level1: hintSet.level1 || 'Think about what you know',
            level2: hintSet.level2 || 'Consider which formula applies',
            level3: hintSet.level3 || 'Try the calculation step',
            level4: hintSet.level4 || 'Here\'s the specific approach'
        };
    }

    getConceptualExplanation(step, problem) {
        return 'Understanding the geometric meaning behind this step';
    }

    getProceduralExplanation(step) {
        return 'Step-by-step procedure for this calculation';
    }

    getVisualExplanation(step, problem) {
        return 'Visual representation of this step';
    }

    getAdaptiveExplanation(step, explanationLevel) {
        return {
            adaptedDescription: step.description,
            adaptedReasoning: step.reasoning,
            complexityLevel: explanationLevel
        };
    }

    identifyPrerequisites(step, problemType) {
        const category = this.geometryTypes[problemType]?.category;
        const prereqs = this.prerequisites[category];
        return prereqs?.skills || ['Basic geometry'];
    }

    identifyKeyVocabulary(step) {
        return ['point', 'distance', 'formula', 'coordinate'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex}`,
            progression: 'We are getting closer to the solution'
        };
    }

    generateThinkingPrompts(step) {
        return {
            before: 'What do I need to know before starting?',
            during: 'What should I be careful about?',
            after: 'How can I check if this is correct?'
        };
    }

    generateSelfCheckQuestion(step) {
        return 'Does this step make sense and bring me closer to the answer?';
    }

    findRealWorldConnection(step, problem) {
        return 'This concept applies to real-world situations like navigation and construction';
    }

    createPrerequisiteSection() {
        if (!this.prerequisiteChecks) return null;

        const category = this.geometryTypes[this.currentProblem.type]?.category;
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

            if (step.geometricMeaning) {
                stepsData.push(['Geometric Meaning', step.geometricMeaning]);
            }

            if (step.visualHint) {
                stepsData.push(['Visual Hint', step.visualHint]);
            }

            if (step.ELI5 && this.explanationLevel === 'ELI5') {
                stepsData.push(['ELI5', step.ELI5.explanation]);
                if (step.ELI5.visualization) {
                    stepsData.push(['How to Visualize', step.ELI5.visualization]);
                }
            }

            if (step.errorPrevention && this.includeErrorPrevention) {
                const mistakes = step.errorPrevention.commonMistakes;
                if (mistakes && mistakes.length > 0) {
                    stepsData.push(['Common Mistakes', mistakes.join('; ')]);
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

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [
            ['Solution Type', this.currentSolution.type],
            ['Solution', String(this.currentSolution.solution)]
        ];

        if (this.currentSolution.exact) {
            solutionData.push(['Exact Form', this.currentSolution.exact]);
        }

        if (this.currentSolution.decimal) {
            solutionData.push(['Decimal Form', this.currentSolution.decimal]);
        }

        if (this.currentSolution.unit) {
            solutionData.push(['Units', this.currentSolution.unit]);
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createVerificationSection() {
        if (!this.includeVerificationInSteps) return null;

        const verificationData = [
            ['Verification', 'Check the solution makes sense'],
            ['', '']
        ];

        if (this.currentSolution.verification) {
            verificationData.push(['Check', this.currentSolution.verification]);
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
}

// Export the class
export default EnhancedLinearGeometryMathematicalWorkbook;
