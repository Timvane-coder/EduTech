// Enhanced Coordinate Geometry Mathematical Workbook - Multi-Layer Step-by-Step Explanations
import * as math from 'mathjs';

export class EnhancedCoordinateGeometryWorkbook {
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
        this.explanationLevel = options.explanationLevel || 'intermediate'; // 'basic', 'intermediate', 'detailed', 'scaffolded'
        this.includeVerificationInSteps = options.includeVerificationInSteps !== false;
        this.includeConceptualConnections = options.includeConceptualConnections !== false;
        this.includeAlternativeMethods = options.includeAlternativeMethods !== false;
        this.includeErrorPrevention = options.includeErrorPrevention !== false;
        this.includeCommonMistakes = options.includeCommonMistakes !== false;
        this.includePedagogicalNotes = options.includePedagogicalNotes !== false;
        this.verificationDetail = options.verificationDetail || 'detailed';

        this.mathSymbols = this.initializeMathSymbols();
        this.setThemeColors();
        this.initializeCoordinateGeometrySolvers();
        this.initializeErrorDatabase();
        this.initializeExplanationTemplates();
    }

    initializeCoordinateGeometryLessons() {
        this.lessons = {
            distance_formula: {
                title: "Distance Between Two Points",
                concepts: [
                    "Distance formula derived from Pythagorean theorem",
                    "d = √[(x₂-x₁)² + (y₂-y₁)²]",
                    "Always produces non-negative result",
                    "Represents straight-line distance in coordinate plane"
                ],
                theory: "The distance formula calculates the length of the line segment connecting two points in a coordinate plane. It's derived by treating the horizontal and vertical distances as legs of a right triangle.",
                keyFormulas: {
                    "Distance Formula": "d = √[(x₂-x₁)² + (y₂-y₁)²]",
                    "Distance Squared": "d² = (x₂-x₁)² + (y₂-y₁)²",
                    "3D Extension": "d = √[(x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²]"
                },
                solvingSteps: [
                    "Identify coordinates of both points (x₁,y₁) and (x₂,y₂)",
                    "Calculate horizontal distance: Δx = x₂ - x₁",
                    "Calculate vertical distance: Δy = y₂ - y₁",
                    "Square both differences",
                    "Add the squared differences",
                    "Take square root of the sum"
                ],
                applications: [
                    "Finding lengths in coordinate geometry",
                    "Navigation and GPS calculations",
                    "Computer graphics and game development",
                    "Physics motion problems"
                ]
            },

            midpoint_formula: {
                title: "Midpoint of a Line Segment",
                concepts: [
                    "Midpoint is the average of endpoint coordinates",
                    "M = ((x₁+x₂)/2, (y₁+y₂)/2)",
                    "Divides segment into two equal parts",
                    "Equidistant from both endpoints"
                ],
                theory: "The midpoint formula finds the exact center point of a line segment by averaging the x-coordinates and y-coordinates separately. This point divides the segment into two congruent segments.",
                keyFormulas: {
                    "Midpoint Formula": "M = ((x₁+x₂)/2, (y₁+y₂)/2)",
                    "Component Form": "Mₓ = (x₁+x₂)/2, Mᵧ = (y₁+y₂)/2",
                    "Distance Property": "d(P₁,M) = d(M,P₂) = ½d(P₁,P₂)"
                },
                solvingSteps: [
                    "Identify endpoint coordinates",
                    "Add x-coordinates and divide by 2",
                    "Add y-coordinates and divide by 2",
                    "Write midpoint as ordered pair",
                    "Verify using distance formula if needed"
                ],
                applications: [
                    "Finding centers of geometric figures",
                    "Bisecting line segments",
                    "Computer graphics interpolation",
                    "Construction and design"
                ]
            },

            slope_formula: {
                title: "Slope of a Line",
                concepts: [
                    "Slope measures steepness and direction",
                    "m = (y₂-y₁)/(x₂-x₁) = rise/run",
                    "Positive slope: line rises left to right",
                    "Negative slope: line falls left to right",
                    "Zero slope: horizontal line",
                    "Undefined slope: vertical line"
                ],
                theory: "Slope quantifies the rate of change in y with respect to x. It represents how much y changes for each unit change in x, expressing both the steepness and direction of a line.",
                keyFormulas: {
                    "Slope Formula": "m = (y₂-y₁)/(x₂-x₁)",
                    "Alternative Form": "m = Δy/Δx = rise/run",
                    "Parallel Lines": "m₁ = m₂",
                    "Perpendicular Lines": "m₁ · m₂ = -1"
                },
                solvingSteps: [
                    "Identify coordinates of two points",
                    "Calculate change in y: Δy = y₂ - y₁",
                    "Calculate change in x: Δx = x₂ - x₁",
                    "Divide Δy by Δx",
                    "Simplify the fraction if possible",
                    "Check for vertical line (undefined slope)"
                ],
                applications: [
                    "Rate of change problems",
                    "Linear regression analysis",
                    "Engineering grade calculations",
                    "Economics and business trends"
                ]
            },

            line_equations: {
                title: "Equations of Lines",
                concepts: [
                    "Multiple forms express same line relationship",
                    "Slope-intercept: y = mx + b",
                    "Point-slope: y - y₁ = m(x - x₁)",
                    "Standard form: Ax + By = C",
                    "Two-point form: derived from two points"
                ],
                theory: "Line equations represent all points satisfying a linear relationship. Different forms emphasize different properties, making certain calculations or interpretations easier.",
                keyFormulas: {
                    "Slope-Intercept": "y = mx + b",
                    "Point-Slope": "y - y₁ = m(x - x₁)",
                    "Standard Form": "Ax + By = C",
                    "Two-Point": "(y-y₁)/(y₂-y₁) = (x-x₁)/(x₂-x₁)",
                    "Intercept Form": "x/a + y/b = 1"
                },
                solvingSteps: [
                    "Determine what information is given",
                    "Choose appropriate form",
                    "Substitute known values",
                    "Simplify to desired form",
                    "Verify with test points"
                ],
                applications: [
                    "Modeling linear relationships",
                    "Curve fitting and regression",
                    "Computer graphics rendering",
                    "Engineering design calculations"
                ]
            },

            parallel_perpendicular: {
                title: "Parallel and Perpendicular Lines",
                concepts: [
                    "Parallel lines: same slope, never intersect",
                    "Perpendicular lines: negative reciprocal slopes",
                    "Perpendicular slopes multiply to -1",
                    "Vertical and horizontal lines are perpendicular"
                ],
                theory: "Line relationships are determined by slope comparisons. Parallel lines maintain constant separation while perpendicular lines intersect at right angles.",
                keyFormulas: {
                    "Parallel Condition": "m₁ = m₂",
                    "Perpendicular Condition": "m₁ · m₂ = -1",
                    "Perpendicular Slope": "m₂ = -1/m₁",
                    "Distance Between Parallel": "d = |c₁-c₂|/√(A²+B²)"
                },
                solvingSteps: [
                    "Find slope of given line",
                    "For parallel: use same slope",
                    "For perpendicular: use negative reciprocal",
                    "Apply point-slope formula with given point",
                    "Convert to desired form"
                ],
                applications: [
                    "Architecture and construction",
                    "Road and railway design",
                    "Geometric proofs",
                    "Computer-aided design (CAD)"
                ]
            },

            circle_equations: {
                title: "Circle Equations",
                concepts: [
                    "Standard form: (x-h)² + (y-k)² = r²",
                    "Center at (h,k), radius r",
                    "General form: x² + y² + Dx + Ey + F = 0",
                    "All points equidistant from center"
                ],
                theory: "A circle is the locus of all points at a fixed distance (radius) from a center point. The equation comes from the distance formula applied to all points on the circle.",
                keyFormulas: {
                    "Standard Form": "(x-h)² + (y-k)² = r²",
                    "General Form": "x² + y² + Dx + Ey + F = 0",
                    "Conversion": "h = -D/2, k = -E/2, r = √(h²+k²-F)",
                    "Diameter Form": "(x-x₁)(x-x₂) + (y-y₁)(y-y₂) = 0"
                },
                solvingSteps: [
                    "Identify center (h,k) and radius r",
                    "Substitute into standard form",
                    "Expand if general form needed",
                    "Complete the square to find center/radius",
                    "Verify points on circle satisfy equation"
                ],
                applications: [
                    "Circular motion analysis",
                    "Wireless signal coverage",
                    "Astronomy and orbital mechanics",
                    "Engineering design constraints"
                ]
            },

            section_formula: {
                title: "Section Formula (Internal/External Division)",
                concepts: [
                    "Divides line segment in given ratio",
                    "Internal division: point between endpoints",
                    "External division: point outside segment",
                    "Ratio m:n determines position"
                ],
                theory: "The section formula finds a point that divides a line segment in a specified ratio. Internal division places the point between endpoints, while external division extends beyond.",
                keyFormulas: {
                    "Internal Division": "P = ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))",
                    "External Division": "P = ((mx₂-nx₁)/(m-n), (my₂-ny₁)/(m-n))",
                    "Special Case (Midpoint)": "m:n = 1:1",
                    "Ratio Verification": "d(P₁,P)/d(P,P₂) = m/n"
                },
                solvingSteps: [
                    "Identify endpoints and ratio m:n",
                    "Determine internal or external division",
                    "Apply appropriate formula",
                    "Calculate x-coordinate",
                    "Calculate y-coordinate",
                    "Verify using distance formula"
                ],
                applications: [
                    "Dividing resources proportionally",
                    "Finding centers of mass",
                    "Computer graphics interpolation",
                    "Physics and engineering problems"
                ]
            },

            area_of_triangle: {
                title: "Area of Triangle from Coordinates",
                concepts: [
                    "Formula uses determinant method",
                    "A = ½|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|",
                    "Absolute value ensures positive area",
                    "Works for any triangle orientation"
                ],
                theory: "The coordinate formula for triangle area uses the determinant of a matrix formed by the vertices. It calculates the signed area, with absolute value giving the actual area.",
                keyFormulas: {
                    "Coordinate Formula": "A = ½|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|",
                    "Determinant Form": "A = ½|det([x₁ y₁ 1; x₂ y₂ 1; x₃ y₃ 1])|",
                    "Shoelace Formula": "A = ½|∑(xᵢyᵢ₊₁ - xᵢ₊₁yᵢ)|",
                    "Heron's Formula": "A = √[s(s-a)(s-b)(s-c)]"
                },
                solvingSteps: [
                    "Label vertices as (x₁,y₁), (x₂,y₂), (x₃,y₃)",
                    "Apply coordinate area formula",
                    "Calculate each term",
                    "Sum the terms",
                    "Take absolute value and multiply by ½",
                    "Verify using alternative method if needed"
                ],
                applications: [
                    "Land surveying and area calculation",
                    "Computer graphics rendering",
                    "Geographic information systems (GIS)",
                    "Engineering and construction"
                ]
            },

            collinearity: {
                title: "Collinearity of Points",
                concepts: [
                    "Three points are collinear if they lie on same line",
                    "Area method: triangle area = 0",
                    "Slope method: same slope between all pairs",
                    "Distance method: sum of two distances equals third"
                ],
                theory: "Collinearity tests determine if points lie on a single straight line. Multiple methods exist, each offering different computational advantages and geometric insights.",
                keyFormulas: {
                    "Area Method": "x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂) = 0",
                    "Slope Method": "(y₂-y₁)/(x₂-x₁) = (y₃-y₁)/(x₃-x₁)",
                    "Distance Method": "d(P₁,P₂) + d(P₂,P₃) = d(P₁,P₃)",
                    "Determinant Method": "det([x₁ y₁ 1; x₂ y₂ 1; x₃ y₃ 1]) = 0"
                },
                solvingSteps: [
                    "Choose appropriate test method",
                    "Apply formula to three points",
                    "Check if condition is satisfied",
                    "Consider numerical tolerance for floating-point",
                    "Verify with alternative method if unclear"
                ],
                applications: [
                    "Geometric proofs",
                    "Computer vision alignment",
                    "Quality control in manufacturing",
                    "Surveying and mapping"
                ]
            },

            distance_point_to_line: {
                title: "Distance from Point to Line",
                concepts: [
                    "Perpendicular distance is shortest",
                    "Formula uses line equation Ax + By + C = 0",
                    "d = |Ax₀ + By₀ + C|/√(A² + B²)",
                    "Numerator is substitution, denominator is normalization"
                ],
                theory: "The perpendicular distance from a point to a line represents the shortest path. This formula derives from projecting the point onto the line using perpendicular vectors.",
                keyFormulas: {
                    "Standard Formula": "d = |Ax₀ + By₀ + C|/√(A² + B²)",
                    "Two-Point Form": "d = |((y₂-y₁)x₀ - (x₂-x₁)y₀ + x₂y₁ - y₂x₁)|/√((y₂-y₁)² + (x₂-x₁)²)",
                    "Parametric Form": "d = ||v × (P-P₀)||/||v||",
                    "Foot of Perpendicular": "Find intersection of perpendicular line"
                },
                solvingSteps: [
                    "Convert line to standard form Ax + By + C = 0",
                    "Substitute point (x₀,y₀) into numerator",
                    "Calculate √(A² + B²) for denominator",
                    "Take absolute value of numerator",
                    "Divide and simplify",
                    "Verify units and reasonableness"
                ],
                applications: [
                    "Shortest path calculations",
                    "Computer graphics rendering",
                    "Quality control measurements",
                    "Collision detection algorithms"
                ]
            },

            parametric_equations: {
                title: "Parametric Equations of Lines",
                concepts: [
                    "Express coordinates as functions of parameter t",
                    "x = x₀ + at, y = y₀ + bt",
                    "Direction vector: (a,b)",
                    "Point on line: (x₀,y₀)",
                    "Parameter t represents position along line"
                ],
                theory: "Parametric equations describe a line as a point moving along a direction vector. As parameter t varies, the point traces the entire line, providing both position and direction information.",
                keyFormulas: {
                    "Parametric Form": "x = x₀ + at, y = y₀ + bt",
                    "Vector Form": "r = r₀ + tv",
                    "Symmetric Form": "(x-x₀)/a = (y-y₀)/b",
                    "Convert to Cartesian": "by - bx₀ = ax - ay₀"
                },
                solvingSteps: [
                    "Identify point (x₀,y₀) on line",
                    "Find direction vector (a,b)",
                    "Write parametric equations",
                    "Substitute parameter values for specific points",
                    "Convert between forms as needed"
                ],
                applications: [
                    "Computer graphics animation",
                    "Physics motion descriptions",
                    "Robotics path planning",
                    "3D modeling and CAD"
                ]
            },

            polar_coordinates: {
                title: "Polar Coordinates and Conversion",
                concepts: [
                    "Polar: (r,θ) where r is distance, θ is angle",
                    "Cartesian to Polar: r = √(x²+y²), θ = arctan(y/x)",
                    "Polar to Cartesian: x = r cos θ, y = r sin θ",
                    "Multiple representations for same point"
                ],
                theory: "Polar coordinates describe position using distance from origin and angle from positive x-axis. They're particularly useful for problems with circular or rotational symmetry.",
                keyFormulas: {
                    "Cartesian to Polar": "r = √(x²+y²), θ = arctan2(y,x)",
                    "Polar to Cartesian": "x = r cos θ, y = r sin θ",
                    "Distance Formula": "d = √(r₁² + r₂² - 2r₁r₂cos(θ₂-θ₁))",
                    "Polar Line": "r = p/cos(θ-α)"
                },
                solvingSteps: [
                    "Identify which conversion is needed",
                    "Apply appropriate formulas",
                    "Handle angle quadrants correctly",
                    "Express angle in desired units",
                    "Verify conversion accuracy"
                ],
                applications: [
                    "Navigation and GPS",
                    "Radar and sonar systems",
                    "Astronomy and orbital mechanics",
                    "Electrical engineering (phasors)"
                ]
            },

            angle_between_lines: {
                title: "Angle Between Two Lines",
                concepts: [
                    "Angle determined by slopes",
                    "tan θ = |(m₂-m₁)/(1+m₁m₂)|",
                    "Acute angle: 0° < θ < 90°",
                    "Formula gives smaller angle",
                    "Special cases: parallel, perpendicular"
                ],
                theory: "The angle between two lines is calculated from their slopes using the tangent difference formula. This gives the acute angle, which is always between 0° and 90°.",
                keyFormulas: {
                    "Slope Formula": "tan θ = |(m₂-m₁)/(1+m₁m₂)|",
                    "Vector Formula": "cos θ = (v₁·v₂)/(||v₁|| ||v₂||)",
                    "Parallel Case": "m₁ = m₂, θ = 0°",
                    "Perpendicular Case": "m₁m₂ = -1, θ = 90°"
                },
                solvingSteps: [
                    "Find slopes m₁ and m₂",
                    "Check for special cases",
                    "Apply angle formula",
                    "Calculate arctan to get angle",
                    "Express in degrees or radians as needed"
                ],
                applications: [
                    "Geometric constructions",
                    "Structural engineering",
                    "Computer graphics rotations",
                    "Physics vector problems"
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
                pointBg: '#ffe6e6'
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
                pointBg: '#ffe0e6'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeMathSymbols() {
        return {
            // Mathematical operators
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±', 'times': '×',
            // Greek letters
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            // Special symbols
            'sqrt': '√', 'perpendicular': '⊥', 'parallel': '∥', 
            'angle': '∠', 'degree': '°', 'prime': '′'
        };
    }

    initializeCoordinateGeometrySolvers() {
        this.coordinateGeometryTypes = {
            // Distance between two points
            distance_between_points: {
                patterns: [
                    /distance.*between.*points?/i,
                    /distance.*\(.*,.*\).*\(.*,.*\)/,
                    /length.*segment/i
                ],
                solver: this.solveDistanceBetweenPoints.bind(this),
                name: 'Distance Between Two Points',
                category: 'distance',
                description: 'Calculates distance using distance formula'
            },

            // Midpoint of line segment
            midpoint: {
                patterns: [
                    /midpoint/i,
                    /middle.*point/i,
                    /center.*segment/i
                ],
                solver: this.solveMidpoint.bind(this),
                name: 'Midpoint of Line Segment',
                category: 'midpoint',
                description: 'Finds center point between two endpoints'
            },

            // Slope of line
            slope: {
                patterns: [
                    /slope/i,
                    /gradient/i,
                    /steepness/i,
                    /rate.*change/i
                ],
                solver: this.solveSlope.bind(this),
                name: 'Slope of Line',
                category: 'slope',
                description: 'Calculates slope between two points'
            },

            // Equation of line (various forms)
            line_equation: {
                patterns: [
                    /equation.*line/i,
                    /line.*equation/i,
                    /slope.*intercept/i,
                    /point.*slope/i
                ],
                solver: this.solveLineEquation.bind(this),
                name: 'Equation of Line',
                category: 'line_equations',
                description: 'Finds line equation in various forms'
            },

            // Parallel line through point
            parallel_line: {
                patterns: [
                    /parallel.*line/i,
                    /line.*parallel/i
                ],
                solver: this.solveParallelLine.bind(this),
                name: 'Parallel Line',
                category: 'parallel_perpendicular',
                description: 'Finds equation of parallel line through point'
            },

            // Perpendicular line through point
            perpendicular_line: {
                patterns: [
                    /perpendicular.*line/i,
                    /line.*perpendicular/i,
                    /normal.*line/i
                ],
                solver: this.solvePerpendicularLine.bind(this),
                name: 'Perpendicular Line',
                category: 'parallel_perpendicular',
                description: 'Finds equation of perpendicular line through point'
            },

            // Circle equation
            circle_equation: {
                patterns: [
                    /circle.*equation/i,
                    /equation.*circle/i,
                    /center.*radius/i
                ],
                solver: this.solveCircleEquation.bind(this),
                name: 'Circle Equation',
                category: 'circle_equations',
                description: 'Finds equation of circle from center and radius'
            },

            // Section formula (internal/external division)
            section_formula: {
                patterns: [
                    /section.*formula/i,
                    /divid.*ratio/i,
                    /internal.*division/i,
                    /external.*division/i
                ],
                solver: this.solveSectionFormula.bind(this),
                name: 'Section Formula',
                category: 'section_formula',
                description: 'Divides line segment in given ratio'
            },

            // Area of triangle from coordinates
            triangle_area: {
                patterns: [
                    /area.*triangle/i,
                    /triangle.*area/i,
                    /area.*coordinates/i
                ],
                solver: this.solveTriangleArea.bind(this),
                name: 'Area of Triangle',
                category: 'area_of_triangle',
                description: 'Calculates triangle area from vertex coordinates'
            },

            // Collinearity test
            collinearity: {
                patterns: [
                    /collinear/i,
                    /same.*line/i,
                    /three.*points.*line/i
                ],
                solver: this.solveCollinearity.bind(this),
                name: 'Collinearity Test',
                category: 'collinearity',
                description: 'Tests if three points lie on same line'
            },

            // Distance from point to line
            point_to_line_distance: {
                patterns: [
                    /distance.*point.*line/i,
                    /perpendicular.*distance/i,
                    /shortest.*distance.*line/i
                ],
                solver: this.solvePointToLineDistance.bind(this),
                name: 'Distance from Point to Line',
                category: 'distance_point_to_line',
                description: 'Calculates perpendicular distance to line'
            },

            // Angle between two lines
            angle_between_lines: {
                patterns: [
                    /angle.*between.*lines/i,
                    /angle.*two.*lines/i,
                    /lines.*angle/i
                ],
                solver: this.solveAngleBetweenLines.bind(this),
                name: 'Angle Between Lines',
                category: 'angle_between_lines',
                description: 'Calculates angle between two lines'
            },

            // Centroid of triangle
            centroid: {
                patterns: [
                    /centroid/i,
                    /center.*mass/i,
                    /geometric.*center/i
                ],
                solver: this.solveCentroid.bind(this),
                name: 'Centroid of Triangle',
                category: 'triangle_properties',
                description: 'Finds centroid from three vertices'
            },

            // Circumcenter of triangle
            circumcenter: {
                patterns: [
                    /circumcenter/i,
                    /circumscribed.*circle/i
                ],
                solver: this.solveCircumcenter.bind(this),
                name: 'Circumcenter of Triangle',
                category: 'triangle_properties',
                description: 'Finds center of circumscribed circle'
            },

            // Incenter of triangle
            incenter: {
                patterns: [
                    /incenter/i,
                    /inscribed.*circle/i
                ],
                solver: this.solveIncenter.bind(this),
                name: 'Incenter of Triangle',
                category: 'triangle_properties',
                description: 'Finds center of inscribed circle'
            },

            // Orthocenter of triangle
            orthocenter: {
                patterns: [
                    /orthocenter/i,
                    /altitude.*intersection/i
                ],
                solver: this.solveOrthocenter.bind(this),
                name: 'Orthocenter of Triangle',
                category: 'triangle_properties',
                description: 'Finds intersection of altitudes'
            },

            // Reflection of point
            reflection: {
                patterns: [
                    /reflect.*point/i,
                    /reflection/i,
                    /mirror.*point/i
                ],
                solver: this.solveReflection.bind(this),
                name: 'Reflection of Point',
                category: 'transformations',
                description: 'Reflects point across line or axis'
            },

            // Polar coordinates conversion
            polar_conversion: {
                patterns: [
                    /polar.*cartesian/i,
                    /cartesian.*polar/i,
                    /polar.*coordinates/i
                ],
                solver: this.solvePolarConversion.bind(this),
                name: 'Polar Coordinate Conversion',
                category: 'polar_coordinates',
                description: 'Converts between polar and cartesian coordinates'
            },

            // Parametric line equations
            parametric_line: {
                patterns: [
                    /parametric.*line/i,
                    /parametric.*equation/i,
                    /vector.*form/i
                ],
                solver: this.solveParametricLine.bind(this),
                name: 'Parametric Line Equations',
                category: 'parametric_equations',
                description: 'Expresses line in parametric form'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            distance_between_points: {
                'Calculate differences': [
                    'Forgetting to subtract coordinates in correct order',
                    'Mixing up x and y coordinates',
                    'Sign errors in subtraction'
                ],
                'Square and sum': [
                    'Squaring the sum instead of summing the squares',
                    'Forgetting to square both differences',
                    'Arithmetic errors in squaring'
                ],
                'Take square root': [
                    'Forgetting the square root step',
                    'Taking square root of each term separately'
                ]
            },
            slope: {
                'Calculate rise over run': [
                    'Reversing numerator and denominator',
                    'Subtracting in wrong order',
                    'Dividing by zero for vertical lines'
                ],
                'Interpret result': [
                    'Confusing positive and negative slopes',
                    'Not recognizing undefined slope'
                ]
            },
            midpoint: {
                'Average coordinates': [
                    'Adding instead of averaging',
                    'Forgetting to divide by 2',
                    'Mixing up x and y calculations'
                ]
            },
            circle_equation: {
                'Apply standard form': [
                    'Forgetting to square the radius',
                    'Incorrect signs for h and k',
                    'Confusing center coordinates with point on circle'
                ]
            },
            triangle_area: {
                'Apply coordinate formula': [
                    'Incorrect arrangement of coordinates',
                    'Sign errors in calculation',
                    'Forgetting absolute value',
                    'Forgetting to multiply by 1/2'
                ]
            }
        };

        this.errorPrevention = {
            coordinate_labeling: {
                reminder: 'Always label points consistently as (x₁,y₁), (x₂,y₂)',
                method: 'Write out coordinates clearly before substituting'
            },
            order_matters: {
                reminder: 'Subtraction order affects sign but not final distance',
                method: 'Use consistent point order throughout calculation'
            },
            square_root_placement: {
                reminder: 'Square root covers entire sum, not individual terms',
                method: 'Use parentheses: √[(difference₁)² + (difference₂)²]'
            },
            vertical_line_check: {
                reminder: 'Check for vertical lines before calculating slope',
                method: 'If x₁ = x₂, slope is undefined'
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
                focus: 'Graphical representation and coordinate plane',
                language: 'spatial and visual metaphors'
            },
            algebraic: {
                focus: 'Formula application and algebraic manipulation',
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

    // Main solver method
    solveCoordinateGeometryProblem(config) {
        const { problemType, points, parameters, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseCoordinateGeometryProblem(problemType, points, parameters, context);

            // Solve the problem
            this.currentSolution = this.solveCoordinateGeometryProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateCoordinateGeometrySteps(this.currentProblem, this.currentSolution);

            // Generate graph data
            this.generateCoordinateGeometryGraphData();

            // Generate workbook
            this.generateCoordinateGeometryWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                graphData: this.graphData
            };

        } catch (error) {
            throw new Error(`Failed to solve coordinate geometry problem: ${error.message}`);
        }
    }

    parseCoordinateGeometryProblem(problemType, points = [], parameters = {}, context = {}) {
        // If problem type is specified, use it directly
        if (problemType && this.coordinateGeometryTypes[problemType]) {
            return {
                type: problemType,
                points: points,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect problem type from description if provided
        if (context.description) {
            for (const [type, config] of Object.entries(this.coordinateGeometryTypes)) {
                for (const pattern of config.patterns) {
                    if (pattern.test(context.description)) {
                        return {
                            type: type,
                            points: points,
                            parameters: { ...parameters },
                            context: { ...context },
                            parsedAt: new Date().toISOString()
                        };
                    }
                }
            }
        }

        throw new Error(`Unable to recognize coordinate geometry problem type`);
    }

    solveCoordinateGeometryProblem_Internal(problem) {
        const solver = this.coordinateGeometryTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // COORDINATE GEOMETRY SOLVERS

    solveDistanceBetweenPoints(problem) {
        const [p1, p2] = problem.points;
        
        if (!p1 || !p2) {
            throw new Error('Two points required for distance calculation');
        }

        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        return {
            point1: p1,
            point2: p2,
            deltaX: dx,
            deltaY: dy,
            distanceSquared: dx * dx + dy * dy,
            distance: distance,
            formula: 'd = √[(x₂-x₁)² + (y₂-y₁)²]',
            substitution: `d = √[(${p2.x}-${p1.x})² + (${p2.y}-${p1.y})²]`,
            calculation: `d = √[${dx}² + ${dy}²] = √${dx * dx + dy * dy} = ${distance}`,
            interpretation: this.interpretDistance(distance),
            category: 'distance_between_points'
        };
    }

    solveMidpoint(problem) {
        const [p1, p2] = problem.points;
        
        if (!p1 || !p2) {
            throw new Error('Two points required for midpoint calculation');
        }

        const mx = (p1.x + p2.x) / 2;
        const my = (p1.y + p2.y) / 2;

        return {
            point1: p1,
            point2: p2,
            midpoint: { x: mx, y: my },
            formula: 'M = ((x₁+x₂)/2, (y₁+y₂)/2)',
            xCalculation: `Mx = (${p1.x} + ${p2.x})/2 = ${mx}`,
            yCalculation: `My = (${p1.y} + ${p2.y})/2 = ${my}`,
            verification: this.verifyMidpoint(p1, p2, { x: mx, y: my }),
            category: 'midpoint'
        };
    }

    solveSlope(problem) {
        const [p1, p2] = problem.points;
        
        if (!p1 || !p2) {
            throw new Error('Two points required for slope calculation');
        }

        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;

        // Check for vertical line
        if (Math.abs(dx) < 1e-10) {
            return {
                point1: p1,
                point2: p2,
                deltaX: dx,
                deltaY: dy,
                slope: 'undefined',
                slopeType: 'vertical',
                formula: 'm = (y₂-y₁)/(x₂-x₁)',
                explanation: 'Vertical line has undefined slope (division by zero)',
                lineOrientation: 'vertical',
                category: 'slope'
            };
        }

        const slope = dy / dx;

        return {
            point1: p1,
            point2: p2,
            deltaX: dx,
            deltaY: dy,
            rise: dy,
            run: dx,
            slope: slope,
            slopeType: this.classifySlope(slope),
            formula: 'm = (y₂-y₁)/(x₂-x₁)',
            substitution: `m = (${p2.y}-${p1.y})/(${p2.x}-${p1.x})`,
            calculation: `m = ${dy}/${dx} = ${slope}`,
            interpretation: this.interpretSlope(slope),
            angle: Math.atan(slope) * (180 / Math.PI), // angle in degrees
            category: 'slope'
        };
    }

    solveLineEquation(problem) {
        const { points, parameters } = problem;
        let slope, point, yIntercept;

        // Case 1: Two points given
        if (points && points.length >= 2) {
            const slopeResult = this.solveSlope({ points: points.slice(0, 2) });
            if (slopeResult.slope === 'undefined') {
                // Vertical line: x = constant
                return {
                    lineType: 'vertical',
                    equation: `x = ${points[0].x}`,
                    point1: points[0],
                    point2: points[1],
                    forms: {
                        vertical: `x = ${points[0].x}`
                    },
                    category: 'line_equation'
                };
            }
            slope = slopeResult.slope;
            point = points[0];
            yIntercept = point.y - slope * point.x;
        }
        // Case 2: Slope and point given
        else if (parameters.slope !== undefined && points && points.length >= 1) {
            slope = parameters.slope;
            point = points[0];
            yIntercept = point.y - slope * point.x;
        }
        // Case 3: Slope and y-intercept given
        else if (parameters.slope !== undefined && parameters.yIntercept !== undefined) {
            slope = parameters.slope;
            yIntercept = parameters.yIntercept;
            point = { x: 0, y: yIntercept };
        }
        else {
            throw new Error('Insufficient information to determine line equation');
        }

        // Generate all forms
        const forms = this.generateLineEquationForms(slope, point, yIntercept);

        return {
            slope: slope,
            yIntercept: yIntercept,
            point: point,
            forms: forms,
            graphProperties: this.getLineGraphProperties(slope, yIntercept),
            category: 'line_equation'
        };
    }

    solveParallelLine(problem) {
        const { points, parameters } = problem;
        
        if (!points || points.length < 1) {
            throw new Error('Point required for parallel line');
        }

        let referenceSlope;
        
        // Get slope from reference line
        if (parameters.slope !== undefined) {
            referenceSlope = parameters.slope;
        } else if (parameters.lineEquation) {
            referenceSlope = this.extractSlopeFromEquation(parameters.lineEquation);
        } else {
            throw new Error('Reference line slope or equation required');
        }

        const point = points[0];
        const yIntercept = point.y - referenceSlope * point.x;

        return {
            referenceSlope: referenceSlope,
            parallelSlope: referenceSlope, // Same slope for parallel
            point: point,
            yIntercept: yIntercept,
            equation: `y = ${referenceSlope}x + ${yIntercept}`,
            forms: this.generateLineEquationForms(referenceSlope, point, yIntercept),
            relationship: 'parallel',
            condition: 'm₁ = m₂',
            category: 'parallel_line'
        };
    }

    solvePerpendicularLine(problem) {
        const { points, parameters } = problem;
        
        if (!points || points.length < 1) {
            throw new Error('Point required for perpendicular line');
        }

        let referenceSlope;
        
        // Get slope from reference line
        if (parameters.slope !== undefined) {
            referenceSlope = parameters.slope;
        } else if (parameters.lineEquation) {
            referenceSlope = this.extractSlopeFromEquation(parameters.lineEquation);
        } else {
            throw new Error('Reference line slope or equation required');
        }

        // Check for special cases
        if (Math.abs(referenceSlope) < 1e-10) {
            // Horizontal line -> perpendicular is vertical
            return {
                referenceSlope: referenceSlope,
                perpendicularSlope: 'undefined',
                equation: `x = ${points[0].x}`,
                lineType: 'vertical',
                relationship: 'perpendicular',
                category: 'perpendicular_line'
            };
        }

        const perpendicularSlope = -1 / referenceSlope;
        const point = points[0];
        const yIntercept = point.y - perpendicularSlope * point.x;

        return {
            referenceSlope: referenceSlope,
            perpendicularSlope: perpendicularSlope,
            point: point,
            yIntercept: yIntercept,
            equation: `y = ${perpendicularSlope}x + ${yIntercept}`,
            forms: this.generateLineEquationForms(perpendicularSlope, point, yIntercept),
            relationship: 'perpendicular',
            condition: 'm₁ · m₂ = -1',
            verification: `${referenceSlope} × ${perpendicularSlope} = ${referenceSlope * perpendicularSlope}`,
            category: 'perpendicular_line'
        };
    }

    solveCircleEquation(problem) {
        const { points, parameters } = problem;
        let center, radius;

        // Case 1: Center and radius given
        if (points && points.length >= 1 && parameters.radius !== undefined) {
            center = points[0];
            radius = parameters.radius;
        }
        // Case 2: Center and point on circle given
        else if (points && points.length >= 2) {
            center = points[0];
            const pointOnCircle = points[1];
            const distResult = this.solveDistanceBetweenPoints({ points: [center, pointOnCircle] });
            radius = distResult.distance;
        }
        // Case 3: Three points on circle (find center)
        else if (points && points.length >= 3) {
            const circumcenterResult = this.solveCircumcenter({ points: points.slice(0, 3) });
            center = circumcenterResult.circumcenter;
            const distResult = this.solveDistanceBetweenPoints({ points: [center, points[0]] });
            radius = distResult.distance;
        }
        else {
            throw new Error('Insufficient information for circle equation');
        }

        const h = center.x;
        const k = center.y;
        const r = radius;

        return {
            center: center,
            radius: radius,
            standardForm: `(x - ${h})² + (y - ${k})² = ${r}²`,
            expandedForm: this.expandCircleEquation(h, k, r),
            generalForm: this.convertToGeneralForm(h, k, r),
            diameter: 2 * radius,
            circumference: 2 * Math.PI * radius,
            area: Math.PI * radius * radius,
            category: 'circle_equation'
        };
    }

    solveSectionFormula(problem) {
        const { points, parameters } = problem;
        
        if (!points || points.length < 2) {
            throw new Error('Two points required for section formula');
        }

        const [p1, p2] = points;
        const { m, n, divisionType = 'internal' } = parameters;

        if (m === undefined || n === undefined) {
            throw new Error('Ratio m:n required for section formula');
        }

        let px, py;

        if (divisionType === 'internal') {
            // Internal division: P = ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))
            px = (m * p2.x + n * p1.x) / (m + n);
            py = (m * p2.y + n * p1.y) / (m + n);
        } else {
            // External division: P = ((mx₂-nx₁)/(m-n), (my₂-ny₁)/(m-n))
            if (Math.abs(m - n) < 1e-10) {
                throw new Error('Cannot divide externally with m = n (denominator would be zero)');
            }
            px = (m * p2.x - n * p1.x) / (m - n);
            py = (m * p2.y - n * p1.y) / (m - n);
        }

        const divisionPoint = { x: px, y: py };

        return {
            point1: p1,
            point2: p2,
            ratio: { m, n },
            ratioString: `${m}:${n}`,
            divisionType: divisionType,
            divisionPoint: divisionPoint,
            formula: divisionType === 'internal' ? 
                'P = ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))' :
                'P = ((mx₂-nx₁)/(m-n), (my₂-ny₁)/(m-n))',
            xCalculation: divisionType === 'internal' ?
                `x = (${m}×${p2.x} + ${n}×${p1.x})/(${m}+${n}) = ${px}` :
                `x = (${m}×${p2.x} - ${n}×${p1.x})/(${m}-${n}) = ${px}`,
            yCalculation: divisionType === 'internal' ?
                `y = (${m}×${p2.y} + ${n}×${p1.y})/(${m}+${n}) = ${py}` :
                `y = (${m}×${p2.y} - ${n}×${p1.y})/(${m}-${n}) = ${py}`,
            verification: this.verifySectionFormula(p1, p2, divisionPoint, m, n, divisionType),
            category: 'section_formula'
        };
    }

    solveTriangleArea(problem) {
        const points = problem.points;
        
        if (!points || points.length < 3) {
            throw new Error('Three vertices required for triangle area');
        }

        const [p1, p2, p3] = points;

        // Using coordinate formula: A = ½|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|
        const term1 = p1.x * (p2.y - p3.y);
        const term2 = p2.x * (p3.y - p1.y);
        const term3 = p3.x * (p1.y - p2.y);
        const sum = term1 + term2 + term3;
        const area = Math.abs(sum) / 2;

        return {
            vertex1: p1,
            vertex2: p2,
            vertex3: p3,
            formula: 'A = ½|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|',
            term1: { expression: `${p1.x}(${p2.y}-${p3.y})`, value: term1 },
            term2: { expression: `${p2.x}(${p3.y}-${p1.y})`, value: term2 },
            term3: { expression: `${p3.x}(${p1.y}-${p2.y})`, value: term3 },
            sum: sum,
            area: area,
            perimeter: this.calculateTrianglePerimeter(p1, p2, p3),
            sideLengths: this.calculateTriangleSides(p1, p2, p3),
            triangleType: this.classifyTriangle(p1, p2, p3),
            category: 'triangle_area'
        };
    }

    solveCollinearity(problem) {
        const points = problem.points;
        
        if (!points || points.length < 3) {
            throw new Error('Three points required for collinearity test');
        }

        const [p1, p2, p3] = points;

        // Method 1: Area method (if area = 0, points are collinear)
        const areaResult = this.solveTriangleArea({ points: [p1, p2, p3] });
        const areaTest = Math.abs(areaResult.area) < 1e-10;

        // Method 2: Slope method (if slopes are equal, points are collinear)
        let slopeTest = false;
        const slope12Result = this.solveSlope({ points: [p1, p2] });
        const slope23Result = this.solveSlope({ points: [p2, p3] });
        
        if (slope12Result.slope === 'undefined' && slope23Result.slope === 'undefined') {
            slopeTest = true; // Both vertical
        } else if (slope12Result.slope !== 'undefined' && slope23Result.slope !== 'undefined') {
            slopeTest = Math.abs(slope12Result.slope - slope23Result.slope) < 1e-10;
        }

        const areCollinear = areaTest && slopeTest;

        return {
            point1: p1,
            point2: p2,
            point3: p3,
            collinear: areCollinear,
            tests: {
                areaMethod: {
                    area: areaResult.area,
                    passed: areaTest,
                    explanation: 'Triangle area = 0 indicates collinearity'
                },
                slopeMethod: {
                    slope12: slope12Result.slope,
                    slope23: slope23Result.slope,
                    passed: slopeTest,
                    explanation: 'Equal slopes indicate collinearity'
                }
            },
            conclusion: areCollinear ? 'Points are collinear (lie on same line)' : 'Points are not collinear',
            category: 'collinearity'
        };
    }

    solvePointToLineDistance(problem) {
        const { points, parameters } = problem;
        
        if (!points || points.length < 1) {
            throw new Error('Point required for distance calculation');
        }

        const point = points[0];
        let A, B, C;

        // Extract line equation in form Ax + By + C = 0
        if (parameters.A !== undefined && parameters.B !== undefined && parameters.C !== undefined) {
            A = parameters.A;
            B = parameters.B;
            C = parameters.C;
        } else if (parameters.lineEquation) {
            ({ A, B, C } = this.convertToStandardForm(parameters.lineEquation));
        } else {
            throw new Error('Line equation required');
        }

        // Distance formula: d = |Ax₀ + By₀ + C| / √(A² + B²)
        const numerator = Math.abs(A * point.x + B * point.y + C);
        const denominator = Math.sqrt(A * A + B * B);
        const distance = numerator / denominator;

        // Find foot of perpendicular
        const footOfPerpendicular = this.findFootOfPerpendicular(point, A, B, C);

        return {
            point: point,
            lineEquation: `${A}x + ${B}y + ${C} = 0`,
            formula: 'd = |Ax₀ + By₀ + C| / √(A² + B²)',
            numerator: { expression: `|${A}×${point.x} + ${B}×${point.y} + ${C}|`, value: numerator },
            denominator: { expression: `√(${A}² + ${B}²)`, value: denominator },
            distance: distance,
            footOfPerpendicular: footOfPerpendicular,
            verification: this.verifyPointToLineDistance(point, footOfPerpendicular, distance),
            category: 'point_to_line_distance'
        };
    }

    solveAngleBetweenLines(problem) {
        const { parameters } = problem;
        let m1, m2;

        // Get slopes of both lines
        if (parameters.slope1 !== undefined && parameters.slope2 !== undefined) {
            m1 = parameters.slope1;
            m2 = parameters.slope2;
        } else if (parameters.line1 && parameters.line2) {
            m1 = this.extractSlopeFromEquation(parameters.line1);
            m2 = this.extractSlopeFromEquation(parameters.line2);
        } else {
            throw new Error('Two line slopes or equations required');
        }

        // Check for special cases
        if (m1 === 'undefined' || m2 === 'undefined') {
            return {
                slope1: m1,
                slope2: m2,
                angle: 90,
                angleType: 'perpendicular',
                explanation: 'One line is vertical, forming 90° angle',
                category: 'angle_between_lines'
            };
        }

        // Check if parallel
        if (Math.abs(m1 - m2) < 1e-10) {
            return {
                slope1: m1,
                slope2: m2,
                angle: 0,
                angleType: 'parallel',
                explanation: 'Lines are parallel (same slope)',
                category: 'angle_between_lines'
            };
        }

        // Check if perpendicular
        if (Math.abs(m1 * m2 + 1) < 1e-10) {
            return {
                slope1: m1,
                slope2: m2,
                angle: 90,
                angleType: 'perpendicular',
                explanation: 'Lines are perpendicular (m₁ × m₂ = -1)',
                verification: `${m1} × ${m2} = ${m1 * m2}`,
                category: 'angle_between_lines'
            };
        }

        // Calculate angle using tan θ = |(m₂-m₁)/(1+m₁m₂)|
        const tanTheta = Math.abs((m2 - m1) / (1 + m1 * m2));
        const angleRadians = Math.atan(tanTheta);
        const angleDegrees = angleRadians * (180 / Math.PI);

        return {
            slope1: m1,
            slope2: m2,
            formula: 'tan θ = |(m₂-m₁)/(1+m₁m₂)|',
            tanValue: tanTheta,
            angleRadians: angleRadians,
            angleDegrees: angleDegrees,
            angleType: 'acute',
            complementaryAngle: 180 - angleDegrees,
            category: 'angle_between_lines'
        };
    }

    solveCentroid(problem) {
        const points = problem.points;
        
        if (!points || points.length < 3) {
            throw new Error('Three vertices required for centroid');
        }

        const [p1, p2, p3] = points;

        // Centroid = ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3)
        const cx = (p1.x + p2.x + p3.x) / 3;
        const cy = (p1.y + p2.y + p3.y) / 3;

        return {
            vertex1: p1,
            vertex2: p2,
            vertex3: p3,
            centroid: { x: cx, y: cy },
            formula: 'G = ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3)',
            xCalculation: `Gₓ = (${p1.x}+${p2.x}+${p3.x})/3 = ${cx}`,
            yCalculation: `Gᵧ = (${p1.y}+${p2.y}+${p3.y})/3 = ${cy}`,
            properties: [
                'Centroid divides each median in ratio 2:1',
                'Center of mass for uniform triangle',
                'Always lies inside the triangle'
            ],
            verification: this.verifyCentroid(p1, p2, p3, { x: cx, y: cy }),
            category: 'centroid'
        };
    }

    solveCircumcenter(problem) {
        const points = problem.points;
        
        if (!points || points.length < 3) {
            throw new Error('Three vertices required for circumcenter');
        }

        const [p1, p2, p3] = points;

        // Find perpendicular bisectors of two sides
        const mid12 = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
        const mid23 = { x: (p2.x + p3.x) / 2, y: (p2.y + p3.y) / 2 };

        const slope12 = (p2.y - p1.y) / (p2.x - p1.x);
        const slope23 = (p3.y - p2.y) / (p3.x - p2.x);

        // Perpendicular slopes
        const perpSlope12 = -1 / slope12;
        const perpSlope23 = -1 / slope23;

        // Find intersection of perpendicular bisectors
        // Line 1: y - mid12.y = perpSlope12(x - mid12.x)
        // Line 2: y - mid23.y = perpSlope23(x - mid23.x)
        
        const cx = (perpSlope12 * mid12.x - perpSlope23 * mid23.x + mid23.y - mid12.y) / (perpSlope12 - perpSlope23);
        const cy = perpSlope12 * (cx - mid12.x) + mid12.y;

        const circumcenter = { x: cx, y: cy };

        // Calculate circumradius
        const circumradiusResult = this.solveDistanceBetweenPoints({ points: [circumcenter, p1] });
        const circumradius = circumradiusResult.distance;

        return {
            vertex1: p1,
            vertex2: p2,
            vertex3: p3,
            circumcenter: circumcenter,
            circumradius: circumradius,
            method: 'Intersection of perpendicular bisectors',
            properties: [
                'Equidistant from all three vertices',
                'Center of circumscribed circle',
                'May lie outside acute triangles'
            ],
            verification: this.verifyCircumcenter(p1, p2, p3, circumcenter, circumradius),
            category: 'circumcenter'
        };
    }

    solveIncenter(problem) {
        const points = problem.points;
        
        if (!points || points.length < 3) {
            throw new Error('Three vertices required for incenter');
        }

        const [p1, p2, p3] = points;

        // Calculate side lengths
        const a = this.solveDistanceBetweenPoints({ points: [p2, p3] }).distance; // opposite to p1
        const b = this.solveDistanceBetweenPoints({ points: [p1, p3] }).distance; // opposite to p2
        const c = this.solveDistanceBetweenPoints({ points: [p1, p2] }).distance; // opposite to p3

        // Incenter formula: I = (ax₁+bx₂+cx₃)/(a+b+c), (ay₁+by₂+cy₃)/(a+b+c)
        const ix = (a * p1.x + b * p2.x + c * p3.x) / (a + b + c);
        const iy = (a * p1.y + b * p2.y + c * p3.y) / (a + b + c);

        const incenter = { x: ix, y: iy };

        // Calculate inradius
        const s = (a + b + c) / 2; // semi-perimeter
        const areaResult = this.solveTriangleArea({ points: [p1, p2, p3] });
        const inradius = areaResult.area / s;

        return {
            vertex1: p1,
            vertex2: p2,
            vertex3: p3,
            sideLengths: { a, b, c },
            incenter: incenter,
            inradius: inradius,
            formula: 'I = (ax₁+bx₂+cx₃)/(a+b+c), (ay₁+by₂+cy₃)/(a+b+c)',
            xCalculation: `Iₓ = (${a}×${p1.x}+${b}×${p2.x}+${c}×${p3.x})/(${a}+${b}+${c}) = ${ix}`,
            yCalculation: `Iᵧ = (${a}×${p1.y}+${b}×${p2.y}+${c}×${p3.y})/(${a}+${b}+${c}) = ${iy}`,
            properties: [
                'Center of inscribed circle',
                'Equidistant from all three sides',
                'Always lies inside the triangle',
                'Intersection of angle bisectors'
            ],
            category: 'incenter'
        };
    }

    solveOrthocenter(problem) {
        const points = problem.points;
        
        if (!points || points.length < 3) {
            throw new Error('Three vertices required for orthocenter');
        }

        const [p1, p2, p3] = points;

        // Find slopes of sides
        const slope12 = (p2.y - p1.y) / (p2.x - p1.x);
        const slope13 = (p3.y - p1.y) / (p3.x - p1.x);

        // Perpendicular slopes for altitudes
        const altSlope1 = -1 / slope23(p2, p3); // altitude from p1
        const altSlope2 = -1 / slope13; // altitude from p2

        // Altitude from p1 perpendicular to side p2p3
        // Altitude from p2 perpendicular to side p1p3
        // Find intersection

        // Using determinant method for cleaner calculation
        const slope23Val = (p3.y - p2.y) / (p3.x - p2.x);
        const perpSlope1 = -1 / slope23Val;
        const perpSlope2 = -1 / slope13;

        // Altitude 1: y - p1.y = perpSlope1(x - p1.x)
        // Altitude 2: y - p2.y = perpSlope2(x - p2.x)

        const hx = (perpSlope1 * p1.x - perpSlope2 * p2.x + p2.y - p1.y) / (perpSlope1 - perpSlope2);
        const hy = perpSlope1 * (hx - p1.x) + p1.y;

        const orthocenter = { x: hx, y: hy };

        return {
            vertex1: p1,
            vertex2: p2,
            vertex3: p3,
            orthocenter: orthocenter,
            method: 'Intersection of altitudes',
            properties: [
                'Intersection point of all three altitudes',
                'Lies inside acute triangles',
                'Lies outside obtuse triangles',
                'Coincides with vertex in right triangles'
            ],
            triangleType: this.classifyTriangleByAngles(p1, p2, p3),
            category: 'orthocenter'
        };
    }

    solveReflection(problem) {
        const { points, parameters } = problem;
        
        if (!points || points.length < 1) {
            throw new Error('Point required for reflection');
        }

        const point = points[0];
        const { axis, lineEquation } = parameters;

        let reflectedPoint;

        if (axis === 'x') {
            // Reflect across x-axis: (x, y) → (x, -y)
            reflectedPoint = { x: point.x, y: -point.y };
            return {
                originalPoint: point,
                reflectedPoint: reflectedPoint,
                axis: 'x-axis',
                transformation: '(x, y) → (x, -y)',
                category: 'reflection'
            };
        } else if (axis === 'y') {
            // Reflect across y-axis: (x, y) → (-x, y)
            reflectedPoint = { x: -point.x, y: point.y };
            return {
                originalPoint: point,
                reflectedPoint: reflectedPoint,
                axis: 'y-axis',
                transformation: '(x, y) → (-x, y)',
                category: 'reflection'
            };
        } else if (axis === 'origin') {
            // Reflect through origin: (x, y) → (-x, -y)
            reflectedPoint = { x: -point.x, y: -point.y };
            return {
                originalPoint: point,
                reflectedPoint: reflectedPoint,
                axis: 'origin',
                transformation: '(x, y) → (-x, -y)',
                category: 'reflection'
            };
        } else if (lineEquation) {
            // Reflect across arbitrary line
            reflectedPoint = this.reflectAcrossLine(point, lineEquation);
            return {
                originalPoint: point,
                reflectedPoint: reflectedPoint,
                reflectionLine: lineEquation,
                method: 'Reflection across arbitrary line',
                category: 'reflection'
            };
        }

        throw new Error('Reflection axis or line must be specified');
    }

    solvePolarConversion(problem) {
        const { points, parameters } = problem;
        const { conversionType } = parameters;

        if (conversionType === 'cartesian_to_polar') {
            if (!points || points.length < 1) {
                throw new Error('Cartesian point required');
            }

            const { x, y } = points[0];
            const r = Math.sqrt(x * x + y * y);
            const theta = Math.atan2(y, x); // returns angle in radians
            const thetaDegrees = theta * (180 / Math.PI);

            return {
                cartesian: { x, y },
                polar: { r, theta, thetaDegrees },
                formulas: {
                    r: 'r = √(x² + y²)',
                    theta: 'θ = arctan(y/x)'
                },
                calculations: {
                    r: `r = √(${x}² + ${y}²) = ${r}`,
                    theta: `θ = arctan(${y}/${x}) = ${theta} rad = ${thetaDegrees}°`
                },
                category: 'polar_conversion'
            };
        } else if (conversionType === 'polar_to_cartesian') {
            const { r, theta } = parameters;
            
            if (r === undefined || theta === undefined) {
                throw new Error('Polar coordinates (r, θ) required');
            }

            const x = r * Math.cos(theta);
            const y = r * Math.sin(theta);

            return {
                polar: { r, theta },
                cartesian: { x, y },
                formulas: {
                    x: 'x = r cos θ',
                    y: 'y = r sin θ'
                },
                calculations: {
                    x: `x = ${r} × cos(${theta}) = ${x}`,
                    y: `y = ${r} × sin(${theta}) = ${y}`
                },
                category: 'polar_conversion'
            };
        }

        throw new Error('Conversion type must be specified');
    }

    solveParametricLine(problem) {
        const { points, parameters } = problem;
        let point, directionVector;

        // Case 1: Point and direction vector given
        if (points && points.length >= 1 && parameters.directionVector) {
            point = points[0];
            directionVector = parameters.directionVector;
        }
        // Case 2: Two points given (direction from p1 to p2)
        else if (points && points.length >= 2) {
            point = points[0];
            directionVector = {
                a: points[1].x - points[0].x,
                b: points[1].y - points[0].y
            };
        }
        else {
            throw new Error('Point and direction vector required');
        }

        const { a, b } = directionVector;

        return {
            point: point,
            directionVector: directionVector,
            parametricEquations: {
                x: `x = ${point.x} + ${a}t`,
                y: `y = ${point.y} + ${b}t`
            },
            vectorForm: `r = (${point.x}, ${point.y}) + t(${a}, ${b})`,
            symmetricForm: a !== 0 && b !== 0 ? 
                `(x - ${point.x})/${a} = (y - ${point.y})/${b}` : 
                'Not applicable (vertical or horizontal line)',
            cartesianForm: this.convertParametricToCartesian(point, directionVector),
            category: 'parametric_line'
        };
    }

    // HELPER METHODS

    interpretDistance(distance) {
        if (distance < 1e-10) {
            return 'Points are essentially the same (distance ≈ 0)';
        } else if (distance < 1) {
            return 'Points are very close together';
        } else if (distance < 10) {
            return 'Points are at moderate distance';
        } else {
            return 'Points are far apart';
        }
    }

    classifySlope(slope) {
        if (Math.abs(slope) < 1e-10) {
            return 'zero (horizontal)';
        } else if (slope > 0) {
            if (slope < 1) return 'positive (gentle rise)';
            if (slope === 1) return 'positive (45° rise)';
            return 'positive (steep rise)';
        } else {
            if (slope > -1) return 'negative (gentle fall)';
            if (slope === -1) return 'negative (45° fall)';
            return 'negative (steep fall)';
        }
    }

    interpretSlope(slope) {
        const classification = this.classifySlope(slope);
        const angle = Math.atan(Math.abs(slope)) * (180 / Math.PI);
        
        return {
            classification: classification,
            direction: slope > 0 ? 'rising left to right' : slope < 0 ? 'falling left to right' : 'horizontal',
            steepness: Math.abs(slope) > 1 ? 'steep' : Math.abs(slope) < 1 ? 'gentle' : 'moderate',
            angle: `${angle.toFixed(2)}° from horizontal`,
            rateOfChange: `y changes by ${Math.abs(slope).toFixed(2)} units for each unit change in x`
        };
    }

    generateLineEquationForms(slope, point, yIntercept) {
        const forms = {
            slopeIntercept: `y = ${slope}x + ${yIntercept}`,
            pointSlope: `y - ${point.y} = ${slope}(x - ${point.x})`,
        };

        // Standard form Ax + By = C
        // From y = mx + b → -mx + y = b → mx - y = -b
        const A = -slope;
        const B = 1;
        const C = yIntercept;
        
        // Multiply to get integer coefficients if possible
        const multiplier = this.findLCMDenominator([A, B, C]);
        forms.standard = `${A * multiplier}x + ${B * multiplier}y = ${C * multiplier}`;

        // General form: Ax + By + C = 0
        forms.general = `${A * multiplier}x + ${B * multiplier}y - ${C * multiplier} = 0`;

        return forms;
    }

    getLineGraphProperties(slope, yIntercept) {
        return {
            slope: slope,
            yIntercept: yIntercept,
            xIntercept: slope !== 0 ? -yIntercept / slope : 'none (parallel to x-axis)',
            isIncreasing: slope > 0,
            isDecreasing: slope < 0,
            isHorizontal: Math.abs(slope) < 1e-10,
            direction: slope > 0 ? 'upward' : slope < 0 ? 'downward' : 'horizontal'
        };
    }

    extractSlopeFromEquation(equation) {
        // Try to extract slope from various forms
        // Slope-intercept: y = mx + b
        let match = equation.match(/y\s*=\s*([+-]?\d*\.?\d*)\s*x/);
        if (match) {
            return parseFloat(match[1] || '1');
        }

        // Standard form: Ax + By = C → slope = -A/B
        match = equation.match(/([+-]?\d*\.?\d*)\s*x\s*([+-]\s*\d*\.?\d*)\s*y\s*=\s*([+-]?\d*\.?\d*)/);
        if (match) {
            const A = parseFloat(match[1] || '1');
            const B = parseFloat(match[2]);
            if (B !== 0) {
                return -A / B;
            }
        }

        throw new Error('Unable to extract slope from equation');
    }

    convertToStandardForm(equation) {
        // Convert equation to Ax + By + C = 0 form
        // This is a simplified parser - would need enhancement for complex cases
        
        // Remove spaces
        equation = equation.replace(/\s/g, '');
        
        // Try to extract coefficients
        // Format: ax+by+c=0 or ax+by=c
        const match = equation.match(/([+-]?\d*\.?\d*)x([+-]\d*\.?\d*)y([+-]\d*\.?\d*)=0/) ||
                     equation.match(/([+-]?\d*\.?\d*)x([+-]\d*\.?\d*)y=([+-]?\d*\.?\d*)/);
        
        if (match) {
            const A = parseFloat(match[1] || '1');
            const B = parseFloat(match[2] || '1');
            const C = match[3] ? (equation.includes('=0') ? parseFloat(match[3]) : -parseFloat(match[3])) : 0;
            return { A, B, C };
        }

        throw new Error('Unable to parse line equation');
    }

    expandCircleEquation(h, k, r) {
        // (x-h)² + (y-k)² = r²
        // Expand to: x² - 2hx + h² + y² - 2ky + k² = r²
        // x² + y² - 2hx - 2ky + (h² + k² - r²) = 0
        
        const D = -2 * h;
        const E = -2 * k;
        const F = h * h + k * k - r * r;

        return `x² + y² ${D >= 0 ? '+' : ''}${D}x ${E >= 0 ? '+' : ''}${E}y ${F >= 0 ? '+' : ''}${F} = 0`;
    }

    convertToGeneralForm(h, k, r) {
        const D = -2 * h;
        const E = -2 * k;
        const F = h * h + k * k - r * r;

        return {
            equation: `x² + y² + ${D}x + ${E}y + ${F} = 0`,
            coefficients: { D, E, F },
            note: 'General form: x² + y² + Dx + Ey + F = 0'
        };
    }

    calculateTrianglePerimeter(p1, p2, p3) {
        const side1 = this.solveDistanceBetweenPoints({ points: [p1, p2] }).distance;
        const side2 = this.solveDistanceBetweenPoints({ points: [p2, p3] }).distance;
        const side3 = this.solveDistanceBetweenPoints({ points: [p3, p1] }).distance;
        
        return side1 + side2 + side3;
    }

    calculateTriangleSides(p1, p2, p3) {
        return {
            side1: this.solveDistanceBetweenPoints({ points: [p1, p2] }).distance,
            side2: this.solveDistanceBetweenPoints({ points: [p2, p3] }).distance,
            side3: this.solveDistanceBetweenPoints({ points: [p3, p1] }).distance
        };
    }

    classifyTriangle(p1, p2, p3) {
        const sides = this.calculateTriangleSides(p1, p2, p3);
        const { side1, side2, side3 } = sides;
        const sorted = [side1, side2, side3].sort((a, b) => a - b);

        // Check by sides
        let bySides;
        if (Math.abs(side1 - side2) < 1e-10 && Math.abs(side2 - side3) < 1e-10) {
            bySides = 'equilateral';
        } else if (Math.abs(side1 - side2) < 1e-10 || Math.abs(side2 - side3) < 1e-10 || Math.abs(side1 - side3) < 1e-10) {
            bySides = 'isosceles';
        } else {
            bySides = 'scalene';
        }

        // Check by angles using Pythagorean theorem
        let byAngles;
        const [a, b, c] = sorted; // a ≤ b ≤ c
        const c2 = c * c;
        const ab2 = a * a + b * b;

        if (Math.abs(c2 - ab2) < 1e-10) {
            byAngles = 'right';
        } else if (c2 > ab2) {
            byAngles = 'obtuse';
        } else {
            byAngles = 'acute';
        }

        return { bySides, byAngles };
    }

    classifyTriangleByAngles(p1, p2, p3) {
        const sides = this.calculateTriangleSides(p1, p2, p3);
        const { side1, side2, side3 } = sides;
        const sorted = [side1, side2, side3].sort((a, b) => a - b);
        const [a, b, c] = sorted;

        const c2 = c * c;
        const ab2 = a * a + b * b;

        if (Math.abs(c2 - ab2) < 1e-10) {
            return 'right';
        } else if (c2 > ab2) {
            return 'obtuse';
        } else {
            return 'acute';
        }
    }

    findFootOfPerpendicular(point, A, B, C) {
        // Foot of perpendicular from (x₀, y₀) to line Ax + By + C = 0
        // is at: ((B(Bx₀ - Ay₀) - AC)/(A² + B²), (A(-Bx₀ + Ay₀) - BC)/(A² + B²))
        
        const denom = A * A + B * B;
        const fx = (B * (B * point.x - A * point.y) - A * C) / denom;
        const fy = (A * (-B * point.x + A * point.y) - B * C) / denom;

        return { x: fx, y: fy };
    }

    reflectAcrossLine(point, lineEquation) {
        // Reflect point across arbitrary line
        const { A, B, C } = this.convertToStandardForm(lineEquation);
        
        // Find foot of perpendicular
        const foot = this.findFootOfPerpendicular(point, A, B, C);
        
        // Reflected point is twice the foot minus original
        const rx = 2 * foot.x - point.x;
        const ry = 2 * foot.y - point.y;

        return { x: rx, y: ry };
    }

    convertParametricToCartesian(point, directionVector) {
        const { a, b } = directionVector;
        
        if (a === 0) {
            return `x = ${point.x} (vertical line)`;
        } else if (b === 0) {
            return `y = ${point.y} (horizontal line)`;
        } else {
            // From x = x₀ + at and y = y₀ + bt
            // t = (x - x₀)/a = (y - y₀)/b
            // b(x - x₀) = a(y - y₀)
            // bx - bx₀ = ay - ay₀
            // bx - ay = bx₀ - ay₀
            const slope = b / a;
            const yIntercept = point.y - slope * point.x;
            return `y = ${slope}x + ${yIntercept}`;
        }
    }

    findLCMDenominator(numbers) {
        // Helper to find multiplier for integer coefficients
        const denominators = numbers.map(n => {
            const str = n.toString();
            const decimalPos = str.indexOf('.');
            return decimalPos === -1 ? 1 : Math.pow(10, str.length - decimalPos - 1);
        });
        
        return Math.max(...denominators);
    }

    slope23(p2, p3) {
        return (p3.y - p2.y) / (p3.x - p2.x);
    }

    // VERIFICATION METHODS

    verifyMidpoint(p1, p2, midpoint) {
        // Verify that distances from midpoint to each endpoint are equal
        const dist1 = this.solveDistanceBetweenPoints({ points: [p1, midpoint] }).distance;
        const dist2 = this.solveDistanceBetweenPoints({ points: [p2, midpoint] }).distance;
        
        return {
            distanceToP1: dist1,
            distanceToP2: dist2,
            areEqual: Math.abs(dist1 - dist2) < 1e-10,
            property: 'Midpoint should be equidistant from both endpoints'
        };
    }

    verifySectionFormula(p1, p2, divisionPoint, m, n, divisionType) {
        // Verify the ratio
        const dist1 = this.solveDistanceBetweenPoints({ points: [p1, divisionPoint] }).distance;
        const dist2 = this.solveDistanceBetweenPoints({ points: [divisionPoint, p2] }).distance;
        
        const calculatedRatio = dist1 / dist2;
        const expectedRatio = m / n;

        return {
            distanceP1ToPoint: dist1,
            distancePointToP2: dist2,
            calculatedRatio: calculatedRatio,
            expectedRatio: expectedRatio,
            ratioMatches: Math.abs(calculatedRatio - expectedRatio) < 1e-6,
            divisionType: divisionType
        };
    }

    verifyCentroid(p1, p2, p3, centroid) {
        // Verify that centroid divides medians in 2:1 ratio
        const mid12 = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
        
        const distP3ToG = this.solveDistanceBetweenPoints({ points: [p3, centroid] }).distance;
        const distGToMid = this.solveDistanceBetweenPoints({ points: [centroid, mid12] }).distance;
        
        const ratio = distP3ToG / distGToMid;

        return {
            distanceVertexToCentroid: distP3ToG,
            distanceCentroidToMidpoint: distGToMid,
            ratio: ratio,
            expectedRatio: 2,
            ratioIsCorrect: Math.abs(ratio - 2) < 1e-6,
            property: 'Centroid divides median in 2:1 ratio'
        };
    }

    verifyCircumcenter(p1, p2, p3, circumcenter, circumradius) {
        // Verify all distances are equal
        const dist1 = this.solveDistanceBetweenPoints({ points: [circumcenter, p1] }).distance;
        const dist2 = this.solveDistanceBetweenPoints({ points: [circumcenter, p2] }).distance;
        const dist3 = this.solveDistanceBetweenPoints({ points: [circumcenter, p3] }).distance;

        return {
            distanceToV1: dist1,
            distanceToV2: dist2,
            distanceToV3: dist3,
            circumradius: circumradius,
            allEqual: Math.abs(dist1 - dist2) < 1e-6 && Math.abs(dist2 - dist3) < 1e-6,
            property: 'Circumcenter is equidistant from all vertices'
        };
    }

    verifyPointToLineDistance(point, footOfPerpendicular, distance) {
        // Verify that distance calculated matches actual distance to foot
        const actualDistance = this.solveDistanceBetweenPoints({ 
            points: [point, footOfPerpendicular] 
        }).distance;

        return {
            calculatedDistance: distance,
            actualDistance: actualDistance,
            matches: Math.abs(distance - actualDistance) < 1e-10,
            footOfPerpendicular: footOfPerpendicular
        };
    }

    // STEP GENERATION

    generateCoordinateGeometrySteps(problem, solution) {
        let baseSteps = this.generateBaseCoordinateGeometrySteps(problem, solution);

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

        return baseSteps;
    }

    generateBaseCoordinateGeometrySteps(problem, solution) {
        const { type } = problem;

        switch (type) {
            case 'distance_between_points':
                return this.generateDistanceSteps(problem, solution);
            case 'midpoint':
                return this.generateMidpointSteps(problem, solution);
            case 'slope':
                return this.generateSlopeSteps(problem, solution);
            case 'line_equation':
                return this.generateLineEquationSteps(problem, solution);
            case 'parallel_line':
                return this.generateParallelLineSteps(problem, solution);
            case 'perpendicular_line':
                return this.generatePerpendicularLineSteps(problem, solution);
            case 'circle_equation':
                return this.generateCircleEquationSteps(problem, solution);
            case 'section_formula':
                return this.generateSectionFormulaSteps(problem, solution);
            case 'triangle_area':
                return this.generateTriangleAreaSteps(problem, solution);
            case 'collinearity':
                return this.generateCollinearitySteps(problem, solution);
            case 'point_to_line_distance':
                return this.generatePointToLineDistanceSteps(problem, solution);
            case 'angle_between_lines':
                return this.generateAngleBetweenLinesSteps(problem, solution);
            case 'centroid':
                return this.generateCentroidSteps(problem, solution);
            case 'circumcenter':
                return this.generateCircumcenterSteps(problem, solution);
            case 'incenter':
                return this.generateIncenterSteps(problem, solution);
            case 'orthocenter':
                return this.generateOrthocenterSteps(problem, solution);
            default:
                return this.generateGenericCoordinateGeometrySteps(problem, solution);
        }
    }

    generateDistanceSteps(problem, solution) {
        const steps = [];
        const { point1, point2 } = solution;

        steps.push({
            stepNumber: 1,
            step: 'Identify the coordinates',
            description: 'Label the two points with their coordinates',
            expression: `P₁(${point1.x}, ${point1.y}) and P₂(${point2.x}, ${point2.y})`,
            reasoning: 'Clear labeling helps avoid confusion when substituting into the formula',
            visualHint: 'Plot both points on a coordinate plane to visualize the distance',
            goalStatement: 'We need to find the straight-line distance between these two points',
            category: 'distance_between_points'
        });

        steps.push({
            stepNumber: 2,
            step: 'Write the distance formula',
            description: 'State the distance formula derived from the Pythagorean theorem',
            formula: 'd = √[(x₂-x₁)² + (y₂-y₁)²]',
            reasoning: 'This formula calculates the hypotenuse of a right triangle formed by horizontal and vertical distances',
            visualHint: 'The horizontal distance is |x₂-x₁| and vertical distance is |y₂-y₁|',
            algebraicRule: 'Distance formula (Pythagorean theorem application)',
            category: 'distance_between_points'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate the differences',
            description: 'Find the horizontal and vertical distances between points',
            beforeExpression: `Δx = x₂ - x₁, Δy = y₂ - y₁`,
            calculation: `Δx = ${point2.x} - ${point1.x} = ${solution.deltaX}`,
            calculation2: `Δy = ${point2.y} - ${point1.y} = ${solution.deltaY}`,
            afterExpression: `Δx = ${solution.deltaX}, Δy = ${solution.deltaY}`,
            reasoning: 'These differences represent the legs of the right triangle',
            visualHint: 'Δx is the horizontal leg, Δy is the vertical leg',
            category: 'distance_between_points'
        });

        steps.push({
            stepNumber: 4,
            step: 'Square the differences',
            description: 'Square both the horizontal and vertical distances',
            beforeExpression: `(Δx)² + (Δy)²`,
            calculation: `(${solution.deltaX})² + (${solution.deltaY})² = ${solution.deltaX * solution.deltaX} + ${solution.deltaY * solution.deltaY}`,
            afterExpression: `${solution.distanceSquared}`,
            reasoning: 'Squaring eliminates negative signs and applies the Pythagorean theorem',
            algebraicRule: 'Pythagorean theorem: a² + b² = c²',
            category: 'distance_between_points'
        });

        steps.push({
            stepNumber: 5,
            step: 'Take the square root',
            description: 'Find the square root to get the final distance',
            beforeExpression: `d = √${solution.distanceSquared}`,
            afterExpression: `d = ${solution.distance}`,
            reasoning: 'The square root gives us the length of the hypotenuse, which is our distance',
            finalAnswer: true,
            interpretation: solution.interpretation,
            category: 'distance_between_points'
        });

        return steps;
    }

    generateMidpointSteps(problem, solution) {
        const steps = [];
        const { point1, point2, midpoint } = solution;

        steps.push({
            stepNumber: 1,
            step: 'Identify the endpoints',
            description: 'Label the two endpoints of the line segment',
            expression: `P₁(${point1.x}, ${point1.y}) and P₂(${point2.x}, ${point2.y})`,
            reasoning: 'We need both endpoints to find the point exactly halfway between them',
            visualHint: 'The midpoint will lie on the line segment connecting these points',
            goalStatement: 'Find the point that divides the segment into two equal parts',
            category: 'midpoint'
        });

        steps.push({
            stepNumber: 2,
            step: 'Write the midpoint formula',
            description: 'State the formula for finding the midpoint',
            formula: 'M = ((x₁+x₂)/2, (y₁+y₂)/2)',
            reasoning: 'The midpoint is found by averaging the x-coordinates and y-coordinates separately',
            visualHint: 'Think of it as finding the average position in both directions',
            algebraicRule: 'Midpoint formula (coordinate averaging)',
            category: 'midpoint'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate x-coordinate of midpoint',
            description: 'Average the x-coordinates of the endpoints',
            beforeExpression: `Mₓ = (x₁ + x₂)/2`,
            calculation: `Mₓ = (${point1.x} + ${point2.x})/2 = ${point1.x + point2.x}/2`,
            afterExpression: `Mₓ = ${midpoint.x}`,
            reasoning: 'This gives us the horizontal position of the midpoint',
            category: 'midpoint'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate y-coordinate of midpoint',
            description: 'Average the y-coordinates of the endpoints',
            beforeExpression: `Mᵧ = (y₁ + y₂)/2`,
            calculation: `Mᵧ = (${point1.y} + ${point2.y})/2 = ${point1.y + point2.y}/2`,
            afterExpression: `Mᵧ = ${midpoint.y}`,
            reasoning: 'This gives us the vertical position of the midpoint',
            category: 'midpoint'
        });

        steps.push({
            stepNumber: 5,
            step: 'Write the midpoint',
            description: 'Combine the coordinates to express the midpoint',
            expression: `M(${midpoint.x}, ${midpoint.y})`,
            reasoning: 'This point is equidistant from both endpoints',
            finalAnswer: true,
            verification: solution.verification,
            category: 'midpoint'
        });

        return steps;
    }

    generateSlopeSteps(problem, solution) {
        const steps = [];
        const { point1, point2 } = solution;

        steps.push({
            stepNumber: 1,
            step: 'Identify the points',
            description: 'Label the two points on the line',
            expression: `P₁(${point1.x}, ${point1.y}) and P₂(${point2.x}, ${point2.y})`,
            reasoning: 'We need two points to determine the slope (steepness) of the line',
            visualHint: 'The line passes through both these points',
            goalStatement: 'Find how much the line rises (or falls) for each unit of horizontal movement',
            category: 'slope'
        });

        steps.push({
            stepNumber: 2,
            step: 'Write the slope formula',
            description: 'State the formula for calculating slope',
            formula: 'm = (y₂-y₁)/(x₂-x₁) = rise/run',
            reasoning: 'Slope measures the ratio of vertical change to horizontal change',
            visualHint: 'Rise is the vertical change, run is the horizontal change',
            algebraicRule: 'Slope formula (rate of change)',
            category: 'slope'
        });

        if (solution.slope === 'undefined') {
            steps.push({
                stepNumber: 3,
                step: 'Check for vertical line',
                description: 'Calculate the denominator (run)',
                calculation: `x₂ - x₁ = ${point2.x} - ${point1.x} = ${solution.deltaX}`,
                reasoning: 'The denominator is zero, which means we cannot divide',
                conclusion: 'The slope is undefined because the line is vertical',
                finalAnswer: true,
                category: 'slope'
            });
        } else {
            steps.push({
                stepNumber: 3,
                step: 'Calculate the rise',
                description: 'Find the vertical change between the points',
                beforeExpression: `rise = y₂ - y₁`,
                calculation: `rise = ${point2.y} - ${point1.y}`,
                afterExpression: `rise = ${solution.rise}`,
                reasoning: 'This tells us how much the line goes up (positive) or down (negative)',
                category: 'slope'
            });

            steps.push({
                stepNumber: 4,
                step: 'Calculate the run',
                description: 'Find the horizontal change between the points',
                beforeExpression: `run = x₂ - x₁`,
                calculation: `run = ${point2.x} - ${point1.x}`,
                afterExpression: `run = ${solution.run}`,
                reasoning: 'This tells us the horizontal distance traveled',
                category: 'slope'
            });

            steps.push({
                stepNumber: 5,
                step: 'Calculate the slope',
                description: 'Divide rise by run',
                beforeExpression: `m = rise/run = ${solution.rise}/${solution.run}`,
                afterExpression: `m = ${solution.slope}`,
                reasoning: 'This ratio tells us the steepness and direction of the line',
                finalAnswer: true,
                interpretation: solution.interpretation,
                slopeType: solution.slopeType,
                angle: `${solution.angle.toFixed(2)}° from horizontal`,
                category: 'slope'
            });
        }

        return steps;
    }

    generateLineEquationSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify given information',
            description: 'Determine what information we have about the line',
            givenInfo: {
                slope: solution.slope,
                point: solution.point,
                yIntercept: solution.yIntercept
            },
            reasoning: 'Different forms of line equations require different starting information',
            category: 'line_equation'
        });

        if (solution.slope !== undefined && solution.yIntercept !== undefined) {
            steps.push({
                stepNumber: 2,
                step: 'Apply slope-intercept form',
                description: 'Use the form y = mx + b',
                formula: 'y = mx + b',
                substitution: `y = ${solution.slope}x + ${solution.yIntercept}`,
                reasoning: 'm is the slope, b is the y-intercept',
                finalAnswer: true,
                category: 'line_equation'
            });
        } else if (solution.slope !== undefined && solution.point) {
            steps.push({
                stepNumber: 2,
                step: 'Apply point-slope form',
                description: 'Use the form y - y₁ = m(x - x₁)',
                formula: 'y - y₁ = m(x - x₁)',
                substitution: `y - ${solution.point.y} = ${solution.slope}(x - ${solution.point.x})`,
                reasoning: 'This form uses a known point and the slope',
                category: 'line_equation'
            });

            steps.push({
                stepNumber: 3,
                step: 'Simplify to slope-intercept form',
                description: 'Expand and solve for y',
                calculation: solution.forms.slopeIntercept,
                finalAnswer: true,
                category: 'line_equation'
            });
        }

        return steps;
    }

    generateParallelLineSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify reference line slope',
            description: 'Find the slope of the line we want to be parallel to',
            expression: `m₁ = ${solution.referenceSlope}`,
            reasoning: 'Parallel lines have identical slopes',
            algebraicRule: 'Parallel condition: m₁ = m₂',
            category: 'parallel_line'
        });

        steps.push({
            stepNumber: 2,
            step: 'Use same slope',
            description: 'The parallel line has the same slope',
            expression: `m₂ = m₁ = ${solution.parallelSlope}`,
            reasoning: 'This ensures the lines will never intersect',
            visualHint: 'Both lines will have the same steepness and direction',
            category: 'parallel_line'
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply point-slope form',
            description: 'Use the given point and parallel slope',
            formula: 'y - y₁ = m(x - x₁)',
            substitution: `y - ${solution.point.y} = ${solution.parallelSlope}(x - ${solution.point.x})`,
            reasoning: 'This creates a line through the point with the correct slope',
            category: 'parallel_line'
        });

        steps.push({
            stepNumber: 4,
            step: 'Simplify to slope-intercept form',
            description: 'Express in y = mx + b form',
            expression: solution.equation,
            finalAnswer: true,
            verification: `Slopes are equal: ${solution.referenceSlope} = ${solution.parallelSlope}`,
            category: 'parallel_line'
        });

        return steps;
    }

    generatePerpendicularLineSteps(problem, solution) {
        const steps = [];

        if (solution.lineType === 'vertical') {
            steps.push({
                stepNumber: 1,
                step: 'Identify reference line',
                description: 'The reference line is horizontal (slope = 0)',
                expression: `m₁ = ${solution.referenceSlope}`,
                category: 'perpendicular_line'
            });

            steps.push({
                stepNumber: 2,
                step: 'Perpendicular to horizontal is vertical',
                description: 'A vertical line is perpendicular to horizontal',
                expression: solution.equation,
                reasoning: 'Vertical lines have undefined slope',
                finalAnswer: true,
                category: 'perpendicular_line'
            });
        } else {
            steps.push({
                stepNumber: 1,
                step: 'Identify reference line slope',
                description: 'Find the slope of the line we want to be perpendicular to',
                expression: `m₁ = ${solution.referenceSlope}`,
                reasoning: 'We need this to find the negative reciprocal',
                algebraicRule: 'Perpendicular condition: m₁ · m₂ = -1',
                category: 'perpendicular_line'
            });

            steps.push({
                stepNumber: 2,
                step: 'Calculate perpendicular slope',
                description: 'Find the negative reciprocal of the reference slope',
                formula: 'm₂ = -1/m₁',
                calculation: `m₂ = -1/${solution.referenceSlope} = ${solution.perpendicularSlope}`,
                reasoning: 'This ensures the lines meet at a 90° angle',
                verification: solution.verification,
                category: 'perpendicular_line'
            });

            steps.push({
                stepNumber: 3,
                step: 'Apply point-slope form',
                description: 'Use the given point and perpendicular slope',
                formula: 'y - y₁ = m(x - x₁)',
                substitution: `y - ${solution.point.y} = ${solution.perpendicularSlope}(x - ${solution.point.x})`,
                category: 'perpendicular_line'
            });

            steps.push({
                stepNumber: 4,
                step: 'Simplify to slope-intercept form',
                description: 'Express in y = mx + b form',
                expression: solution.equation,
                finalAnswer: true,
                category: 'perpendicular_line'
            });
        }

        return steps;
    }

    generateCircleEquationSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify center and radius',
            description: 'Determine the center coordinates and radius',
            center: `(${solution.center.x}, ${solution.center.y})`,
            radius: solution.radius,
            reasoning: 'These define the unique circle',
            visualHint: 'All points on the circle are at distance r from the center',
            category: 'circle_equation'
        });

        steps.push({
            stepNumber: 2,
            step: 'Write standard form',
            description: 'Apply the circle equation formula',
            formula: '(x - h)² + (y - k)² = r²',
            reasoning: 'h and k are center coordinates, r is radius',
            visualHint: 'This comes from the distance formula',
            category: 'circle_equation'
        });

        steps.push({
            stepNumber: 3,
            step: 'Substitute values',
            description: 'Replace h, k, and r with actual values',
            substitution: `(x - ${solution.center.x})² + (y - ${solution.center.y})² = ${solution.radius}²`,
            calculation: `(x - ${solution.center.x})² + (y - ${solution.center.y})² = ${solution.radius * solution.radius}`,
            finalAnswer: true,
            category: 'circle_equation'
        });

        if (solution.expandedForm) {
            steps.push({
                stepNumber: 4,
                step: 'Expand (optional)',
                description: 'Expand to general form if needed',
                expression: solution.expandedForm,
                note: 'This is the general form of the circle equation',
                category: 'circle_equation'
            });
        }

        return steps;
    }

    generateSectionFormulaSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify endpoints and ratio',
            description: 'Determine the points and the division ratio',
            point1: `P₁(${solution.point1.x}, ${solution.point1.y})`,
            point2: `P₂(${solution.point2.x}, ${solution.point2.y})`,
            ratio: solution.ratioString,
            divisionType: solution.divisionType,
            reasoning: 'The ratio tells us how the segment is divided',
            category: 'section_formula'
        });

        steps.push({
            stepNumber: 2,
            step: 'Write section formula',
            description: `Apply the ${solution.divisionType} division formula`,
            formula: solution.formula,
            reasoning: solution.divisionType === 'internal' ? 
                'For internal division, the point lies between the endpoints' :
                'For external division, the point lies outside the segment',
            category: 'section_formula'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate x-coordinate',
            description: 'Find the x-coordinate of the division point',
            calculation: solution.xCalculation,
            afterExpression: `x = ${solution.divisionPoint.x}`,
            category: 'section_formula'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate y-coordinate',
            description: 'Find the y-coordinate of the division point',
            calculation: solution.yCalculation,
            afterExpression: `y = ${solution.divisionPoint.y}`,
            category: 'section_formula'
        });

        steps.push({
            stepNumber: 5,
            step: 'Write division point',
            description: 'Express the point that divides the segment',
            expression: `P(${solution.divisionPoint.x}, ${solution.divisionPoint.y})`,
            finalAnswer: true,
            verification: solution.verification,
            category: 'section_formula'
        });

        return steps;
    }

    generateTriangleAreaSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify vertices',
            description: 'Label the three vertices of the triangle',
            vertex1: `A(${solution.vertex1.x}, ${solution.vertex1.y})`,
            vertex2: `B(${solution.vertex2.x}, ${solution.vertex2.y})`,
            vertex3: `C(${solution.vertex3.x}, ${solution.vertex3.y})`,
            reasoning: 'We need all three vertices to calculate the area',
            category: 'triangle_area'
        });

        steps.push({
            stepNumber: 2,
            step: 'Write coordinate area formula',
            description: 'State the determinant formula for triangle area',
            formula: solution.formula,
            reasoning: 'This formula uses only the coordinates of the vertices',
            visualHint: 'The formula is derived from the cross product',
            category: 'triangle_area'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate each term',
            description: 'Evaluate each part of the formula',
            term1: `${solution.term1.expression} = ${solution.term1.value}`,
            term2: `${solution.term2.expression} = ${solution.term2.value}`,
            term3: `${solution.term3.expression} = ${solution.term3.value}`,
            category: 'triangle_area'
        });

        steps.push({
            stepNumber: 4,
            step: 'Sum the terms',
            description: 'Add all three terms together',
            calculation: `${solution.term1.value} + ${solution.term2.value} + ${solution.term3.value} = ${solution.sum}`,
            category: 'triangle_area'
        });

        steps.push({
            stepNumber: 5,
            step: 'Apply absolute value and multiply by ½',
            description: 'Take absolute value and multiply by ½ to get final area',
            calculation: `Area = ½|${solution.sum}| = ½ × ${Math.abs(solution.sum)} = ${solution.area}`,
            finalAnswer: true,
            units: 'square units',
            additionalInfo: {
                perimeter: solution.perimeter,
                triangleType: solution.triangleType
            },
            category: 'triangle_area'
        });

        return steps;
    }

    generateCollinearitySteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify the three points',
            description: 'Label the points to test for collinearity',
            point1: `P₁(${solution.point1.x}, ${solution.point1.y})`,
            point2: `P₂(${solution.point2.x}, ${solution.point2.y})`,
            point3: `P₃(${solution.point3.x}, ${solution.point3.y})`,
            reasoning: 'Three points are collinear if they lie on the same straight line',
            category: 'collinearity'
        });

        steps.push({
            stepNumber: 2,
            step: 'Apply area method',
            description: 'Calculate the area of the triangle formed by the three points',
            method: solution.tests.areaMethod,
            reasoning: 'If area = 0, the points form a degenerate triangle (a line)',
            category: 'collinearity'
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply slope method',
            description: 'Check if slopes between point pairs are equal',
            method: solution.tests.slopeMethod,
            reasoning: 'Equal slopes indicate points lie on the same line',
            category: 'collinearity'
        });

        steps.push({
            stepNumber: 4,
            step: 'Conclusion',
            description: 'Determine if points are collinear',
            result: solution.collinear,
            conclusion: solution.conclusion,
            finalAnswer: true,
            category: 'collinearity'
        });

        return steps;
    }

    generatePointToLineDistanceSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify point and line',
            description: 'State the point and line equation',
            point: `P(${solution.point.x}, ${solution.point.y})`,
            line: solution.lineEquation,
            reasoning: 'We need both to calculate perpendicular distance',
            category: 'point_to_line_distance'
        });

        steps.push({
            stepNumber: 2,
            step: 'Write distance formula',
            description: 'State the perpendicular distance formula',
            formula: solution.formula,
            reasoning: 'This formula gives the shortest distance from point to line',
            visualHint: 'The perpendicular distance is always the shortest',
            category: 'point_to_line_distance'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate numerator',
            description: 'Substitute point coordinates and take absolute value',
            calculation: solution.numerator.expression,
            result: solution.numerator.value,
            category: 'point_to_line_distance'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate denominator',
            description: 'Find √(A² + B²)',
            calculation: solution.denominator.expression,
            result: solution.denominator.value,
            category: 'point_to_line_distance'
        });

        steps.push({
            stepNumber: 5,
            step: 'Calculate distance',
            description: 'Divide numerator by denominator',
            calculation: `d = ${solution.numerator.value}/${solution.denominator.value} = ${solution.distance}`,
            finalAnswer: true,
            units: 'units',
            footOfPerpendicular: solution.footOfPerpendicular,
            category: 'point_to_line_distance'
        });

        return steps;
    }

    generateAngleBetweenLinesSteps(problem, solution) {
        const steps = [];

        if (solution.angleType === 'parallel') {
            steps.push({
                stepNumber: 1,
                step: 'Check slopes',
                description: 'Compare the slopes of both lines',
                slope1: solution.slope1,
                slope2: solution.slope2,
                conclusion: 'Lines are parallel (angle = 0°)',
                finalAnswer: true,
                category: 'angle_between_lines'
            });
        } else if (solution.angleType === 'perpendicular') {
            steps.push({
                stepNumber: 1,
                step: 'Check perpendicularity',
                description: 'Verify if m₁ · m₂ = -1',
                verification: solution.verification || 'One line is vertical',
                conclusion: 'Lines are perpendicular (angle = 90°)',
                finalAnswer: true,
                category: 'angle_between_lines'
            });
        } else {
            steps.push({
                stepNumber: 1,
                step: 'Identify slopes',
                description: 'Find slopes of both lines',
                slope1: `m₁ = ${solution.slope1}`,
                slope2: `m₂ = ${solution.slope2}`,
                category: 'angle_between_lines'
            });

            steps.push({
                stepNumber: 2,
                step: 'Write angle formula',
                description: 'State the formula for angle between lines',
                formula: solution.formula,
                reasoning: 'This gives the acute angle between the lines',
                category: 'angle_between_lines'
            });

            steps.push({
                stepNumber: 3,
                step: 'Calculate tan θ',
                description: 'Substitute slopes into formula',
                calculation: `tan θ = |(${solution.slope2} - ${solution.slope1})/(1 + ${solution.slope1} × ${solution.slope2})|`,
                result: `tan θ = ${solution.tanValue}`,
                category: 'angle_between_lines'
            });

            steps.push({
                stepNumber: 4,
                step: 'Find angle',
                description: 'Calculate arctan to get the angle',
                calculation: `θ = arctan(${solution.tanValue})`,
                resultRadians: `${solution.angleRadians} radians`,
                resultDegrees: `${solution.angleDegrees}°`,
                finalAnswer: true,
                category: 'angle_between_lines'
            });
        }

        return steps;
    }

    generateCentroidSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify vertices',
            description: 'Label the three vertices of the triangle',
            vertex1: `A(${solution.vertex1.x}, ${solution.vertex1.y})`,
            vertex2: `B(${solution.vertex2.x}, ${solution.vertex2.y})`,
            vertex3: `C(${solution.vertex3.x}, ${solution.vertex3.y})`,
            category: 'centroid'
        });

        steps.push({
            stepNumber: 2,
            step: 'Write centroid formula',
            description: 'State the formula for centroid coordinates',
            formula: solution.formula,
            reasoning: 'Centroid is the average of the three vertex coordinates',
            category: 'centroid'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate x-coordinate',
            description: 'Average the x-coordinates',
            calculation: solution.xCalculation,
            category: 'centroid'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate y-coordinate',
            description: 'Average the y-coordinates',
            calculation: solution.yCalculation,
            category: 'centroid'
        });

        steps.push({
            stepNumber: 5,
            step: 'Write centroid',
            description: 'Express the centroid coordinates',
            expression: `G(${solution.centroid.x}, ${solution.centroid.y})`,
            finalAnswer: true,
            properties: solution.properties,
            verification: solution.verification,
            category: 'centroid'
        });

        return steps;
    }

    generateCircumcenterSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify triangle vertices',
            description: 'Label the three vertices',
            vertex1: `A(${solution.vertex1.x}, ${solution.vertex1.y})`,
            vertex2: `B(${solution.vertex2.x}, ${solution.vertex2.y})`,
            vertex3: `C(${solution.vertex3.x}, ${solution.vertex3.y})`,
            reasoning: 'Circumcenter is equidistant from all three vertices',
            category: 'circumcenter'
        });

        steps.push({
            stepNumber: 2,
            step: 'Find perpendicular bisectors',
            description: 'Calculate perpendicular bisectors of two sides',
            method: solution.method,
            reasoning: 'Circumcenter lies at the intersection of perpendicular bisectors',
            visualHint: 'Perpendicular bisectors pass through side midpoints at right angles',
            category: 'circumcenter'
        });

        steps.push({
            stepNumber: 3,
            step: 'Find intersection point',
            description: 'Solve system of perpendicular bisector equations',
            result: `Circumcenter O(${solution.circumcenter.x}, ${solution.circumcenter.y})`,
            category: 'circumcenter'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate circumradius',
            description: 'Find distance from circumcenter to any vertex',
            calculation: `R = distance from O to A = ${solution.circumradius}`,
            finalAnswer: true,
            properties: solution.properties,
            verification: solution.verification,
            category: 'circumcenter'
        });

        return steps;
    }

    generateIncenterSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify vertices and side lengths',
            description: 'Label vertices and calculate side lengths',
            vertex1: `A(${solution.vertex1.x}, ${solution.vertex1.y})`,
            vertex2: `B(${solution.vertex2.x}, ${solution.vertex2.y})`,
            vertex3: `C(${solution.vertex3.x}, ${solution.vertex3.y})`,
            sides: `a = ${solution.sideLengths.a}, b = ${solution.sideLengths.b}, c = ${solution.sideLengths.c}`,
            category: 'incenter'
        });

        steps.push({
            stepNumber: 2,
            step: 'Write incenter formula',
            description: 'State weighted average formula for incenter',
            formula: solution.formula,
            reasoning: 'Incenter coordinates are weighted by opposite side lengths',
            category: 'incenter'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate x-coordinate',
            description: 'Find x-coordinate using weighted average',
            calculation: solution.xCalculation,
            category: 'incenter'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate y-coordinate',
            description: 'Find y-coordinate using weighted average',
            calculation: solution.yCalculation,
            category: 'incenter'
        });

        steps.push({
            stepNumber: 5,
            step: 'Write incenter and inradius',
            description: 'Express incenter coordinates and calculate inradius',
            incenter: `I(${solution.incenter.x}, ${solution.incenter.y})`,
            inradius: `r = ${solution.inradius}`,
            finalAnswer: true,
            properties: solution.properties,
            category: 'incenter'
        });

        return steps;
    }

    generateOrthocenterSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify triangle vertices',
            description: 'Label the three vertices',
            vertex1: `A(${solution.vertex1.x}, ${solution.vertex1.y})`,
            vertex2: `B(${solution.vertex2.x}, ${solution.vertex2.y})`,
            vertex3: `C(${solution.vertex3.x}, ${solution.vertex3.y})`,
            triangleType: solution.triangleType,
            category: 'orthocenter'
        });

        steps.push({
            stepNumber: 2,
            step: 'Find altitudes',
            description: 'Calculate equations of altitudes from vertices',
            method: solution.method,
            reasoning: 'Orthocenter is where all three altitudes intersect',
            visualHint: 'Altitudes are perpendicular to opposite sides',
            category: 'orthocenter'
        });

        steps.push({
            stepNumber: 3,
            step: 'Find intersection point',
            description: 'Solve for intersection of two altitudes',
            result: `Orthocenter H(${solution.orthocenter.x}, ${solution.orthocenter.y})`,
            finalAnswer: true,
            properties: solution.properties,
            category: 'orthocenter'
        });

        return steps;
    }

    generateGenericCoordinateGeometrySteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Generic coordinate geometry problem',
            description: 'Solve using appropriate coordinate geometry techniques',
            solution: solution,
            category: problem.type
        }];
    }

    // ENHANCED EXPLANATION METHODS (reused from linear solver)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanationCoordGeom(step, problem),
                procedural: this.getProceduralExplanationCoordGeom(step),
                visual: this.getVisualExplanationCoordGeom(step, problem),
                algebraic: this.getAlgebraicExplanationCoordGeom(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisitesCoordGeom(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyCoordGeom(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        return enhanced;
    }

    getConceptualExplanationCoordGeom(step, problem) {
        const conceptualExplanations = {
            'Identify the coordinates': 'Points on a coordinate plane have two numbers: one for horizontal position (x) and one for vertical position (y).',
            'Write the distance formula': 'Distance is the straight-line length between two points, found using the Pythagorean theorem.',
            'Calculate the differences': 'We find how far apart the points are horizontally and vertically.',
            'Write the midpoint formula': 'The midpoint is the exact center point, found by averaging positions.',
            'Write the slope formula': 'Slope measures how steep a line is - how much it rises or falls per unit of horizontal movement.'
        };

        return conceptualExplanations[step.step] || 'This step progresses our solution using coordinate geometry principles.';
    }

    getProceduralExplanationCoordGeom(step) {
        if (step.calculation) {
            return `1. Set up the expression: ${step.beforeExpression || 'given'}
2. Substitute values: ${step.calculation}
3. Simplify: ${step.afterExpression || 'result'}
4. Verify the calculation is correct`;
        }
        return 'Follow the standard procedure for this coordinate geometry operation.';
    }

    getVisualExplanationCoordGeom(step, problem) {
        const visualExplanations = {
            'distance_between_points': 'Picture a right triangle where the points are opposite corners - the distance is the hypotenuse.',
            'midpoint': 'Imagine the line segment connecting the points - the midpoint is exactly halfway along.',
            'slope': 'Visualize climbing a hill - positive slope goes up, negative slope goes down, steeper means larger slope.',
            'circle_equation': 'Think of a circle as all points at the same distance from the center.',
            'triangle_area': 'Imagine the triangle drawn on graph paper - the formula counts the enclosed area.'
        };

        return visualExplanations[problem.type] || 'Visualize the geometric relationship in the coordinate plane.';
    }

    getAlgebraicExplanationCoordGeom(step) {
        const algebraicRules = {
            'Write the distance formula': 'Pythagorean theorem: d² = Δx² + Δy²',
            'Write the midpoint formula': 'Average of coordinates: M = ((x₁+x₂)/2, (y₁+y₂)/2)',
            'Write the slope formula': 'Rate of change: m = Δy/Δx',
            'Apply point-slope form': 'Linear equation form: y - y₁ = m(x - x₁)',
            'Write standard form': 'Circle equation: (x-h)² + (y-k)² = r²'
        };

        return algebraicRules[step.step] || 'Apply standard algebraic principles and coordinate geometry formulas.';
    }

    identifyPrerequisitesCoordGeom(step, problemType) {
        const prerequisites = {
            'distance_between_points': ['Pythagorean theorem', 'Coordinate system basics', 'Square roots'],
            'midpoint': ['Coordinate system', 'Averaging numbers', 'Ordered pairs'],
            'slope': ['Coordinate system', 'Division', 'Rise over run concept'],
            'circle_equation': ['Distance formula', 'Algebraic manipulation', 'Squaring'],
            'triangle_area': ['Determinants', 'Absolute value', 'Coordinate geometry basics']
        };

        return prerequisites[problemType] || ['Basic coordinate geometry', 'Algebraic operations'];
    }

    identifyKeyVocabularyCoordGeom(step) {
        const vocabulary = {
            'Identify the coordinates': ['coordinate', 'ordered pair', 'x-coordinate', 'y-coordinate', 'point'],
            'Write the distance formula': ['distance', 'Pythagorean theorem', 'hypotenuse', 'square root'],
            'Write the midpoint formula': ['midpoint', 'average', 'bisect', 'center'],
            'Write the slope formula': ['slope', 'rise', 'run', 'steepness', 'rate of change'],
            'Write standard form': ['standard form', 'center', 'radius', 'circle']
        };

        return vocabulary[step.step] || ['coordinate geometry', 'formula', 'calculation'];
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generateStepBridgeCoordGeom(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgression(steps[i], steps[i + 1]),
                    strategicThinking: this.explainStepStrategy(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateStepBridgeCoordGeom(currentStep, nextStep) {
        return {
            currentState: `We have: ${currentStep.afterExpression || currentStep.expression || 'current result'}`,
            nextGoal: `Next: ${nextStep.description}`,
            why: `This prepares us for: ${nextStep.step}`,
            howItHelps: `This will help us progress toward the final answer`
        };
    }

    addErrorPrevention(step, problemType) {
        const mistakes = this.commonMistakes[problemType]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsCoordGeom(step, problemType),
                checkPoints: this.generateCheckPointsCoordGeom(step),
                warningFlags: this.identifyWarningFlagsCoordGeom(step, problemType)
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestionCoordGeom(step),
                expectedResult: this.describeExpectedResultCoordGeom(step),
                troubleshooting: this.generateTroubleshootingTipsCoordGeom(step)
            }
        };
    }

    generatePreventionTipsCoordGeom(step, problemType) {
        const tips = {
            'Calculate differences': ['Keep track of which point is P₁ and which is P₂', 'Order matters for direction but not distance'],
            'Square the differences': ['Square each difference separately before adding', 'Don\'t square the sum'],
            'Average coordinates': ['Add first, then divide by 2', 'Do this separately for x and y']
        };

        return tips[step.step] || ['Double-check calculations', 'Verify formula application'];
    }

    generateCheckPointsCoordGeom(step) {
        return [
            'Are coordinates labeled correctly?',
            'Were values substituted properly?',
            'Is the arithmetic correct?',
            'Does the answer make geometric sense?'
        ];
    }

    identifyWarningFlagsCoordGeom(step, problemType) {
        const warnings = {
            'slope': step.calculation?.includes('/0') ? ['Division by zero indicates vertical line'] : [],
            'distance_between_points': ['Negative distance is impossible - check if you forgot square root'],
            'circle_equation': step.step === 'Substitute values' ? ['Don\'t forget to square the radius'] : []
        };

        return warnings[problemType] || [];
    }

    generateSelfCheckQuestionCoordGeom(step) {
        const questions = {
            'Identify the coordinates': 'Have I labeled my points correctly with (x, y) format?',
            'Calculate differences': 'Did I subtract in consistent order?',
            'Square the differences': 'Did I square each term before adding?',
            'Average coordinates': 'Did I divide by 2 after adding?'
        };

        return questions[step.step] || 'Does this step make sense geometrically?';
    }

    describeExpectedResultCoordGeom(step) {
        const expectations = {
            'Write the distance formula': 'A formula with square root and squared terms',
            'Calculate the differences': 'Two numbers representing horizontal and vertical distances',
            'Write the midpoint': 'A point with coordinates between the original points',
            'Calculate the slope': 'A number representing steepness (or "undefined" for vertical lines)'
        };

        return expectations[step.step] || 'Progress toward the solution';
    }

    generateTroubleshootingTipsCoordGeom(step) {
        return [
            'Check if you copied coordinates correctly',
            'Verify arithmetic operations',
            'Make sure you used the right formula',
            'Draw a diagram to visualize the problem'
        ];
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsCoordGeom(step, problem),
                subSteps: this.breakIntoSubStepsCoordGeom(step),
                hints: this.generateProgressiveHintsCoordGeom(step),
                practiceVariation: this.generatePracticeVariationCoordGeom(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcessCoordGeom(step),
                decisionPoints: this.identifyDecisionPointsCoordGeom(step),
                alternativeApproaches: this.suggestAlternativeMethodsCoordGeom(step, problem)
            }
        }));
    }

    generateGuidingQuestionsCoordGeom(step, problem) {
        const questions = {
            'Identify the coordinates': [
                'What are the x and y values for each point?',
                'How should I label these points?',
                'What information do I need from these coordinates?'
            ],
            'Calculate differences': [
                'Which point should be first?',
                'Am I finding horizontal or vertical distance?',
                'Does the sign matter for this calculation?'
            ],
            'Write the distance formula': [
                'Why do we use the Pythagorean theorem?',
                'What do the squared terms represent?',
                'Why do we take the square root at the end?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'How does this connect to the previous step?'];
    }

    breakIntoSubStepsCoordGeom(step) {
        if (step.calculation) {
            return [
                'Identify the values to substitute',
                'Write out the substitution',
                'Perform the arithmetic carefully',
                'Simplify the result',
                'Check that the answer is reasonable'
            ];
        }

        return ['Understand what is required', 'Apply the appropriate method', 'Verify the result'];
    }

    generateProgressiveHintsCoordGeom(step) {
        return {
            level1: 'Think about what this step is trying to accomplish.',
            level2: 'Consider which formula or technique applies here.',
            level3: 'Look at the pattern in how coordinates are used.',
            level4: step.formula ? `Use the formula: ${step.formula}` : 'Apply the standard method for this operation.'
        };
    }

    generatePracticeVariationCoordGeom(step, problem) {
        return {
            similarProblem: 'Try the same type of problem with different coordinates',
            practiceHint: 'Start with simpler numbers, like (0,0) and (3,4)',
            extension: 'Once comfortable, try with decimal or negative coordinates'
        };
    }

    explainThinkingProcessCoordGeom(step) {
        return {
            observe: 'What information do I have? (coordinates, formulas, etc.)',
            goal: 'What am I trying to find in this step?',
            strategy: 'Which formula or method will help me?',
            execute: 'How do I substitute and calculate correctly?',
            verify: 'Does my answer make geometric sense?'
        };
    }

    identifyDecisionPointsCoordGeom(step) {
        return [
            'Choosing which formula to apply',
            'Deciding the order of operations',
            'Determining if special cases apply (like vertical lines)',
            'Selecting between equivalent methods'
        ];
    }

    suggestAlternativeMethodsCoordGeom(step, problem) {
        const alternatives = {
            'distance_between_points': [
                'Graphical method: Plot points and measure',
                'Component method: Find Δx and Δy separately, then combine'
            ],
            'triangle_area': [
                'Shoelace formula',
                'Base times height method (if convenient)',
                'Heron\'s formula using side lengths'
            ],
            'collinearity': [
                'Area method (triangle area = 0)',
                'Slope method (equal slopes)',
                'Distance method (sum of distances)'
            ]
        };

        return alternatives[problem.type] || ['Standard method is most direct for this problem'];
    }

    // GRAPH DATA GENERATION

    generateCoordinateGeometryGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;

        switch(type) {
            case 'distance_between_points':
            case 'midpoint':
                this.graphData = this.generateTwoPointGraph(this.currentSolution);
                break;

            case 'slope':
            case 'line_equation':
            case 'parallel_line':
            case 'perpendicular_line':
                this.graphData = this.generateLineGraph(this.currentSolution);
                break;

            case 'circle_equation':
                this.graphData = this.generateCircleGraph(this.currentSolution);
                break;

            case 'triangle_area':
            case 'centroid':
            case 'circumcenter':
            case 'incenter':
            case 'orthocenter':
                this.graphData = this.generateTriangleGraph(this.currentSolution);
                break;

            case 'section_formula':
                this.graphData = this.generateSectionGraph(this.currentSolution);
                break;
        }
    }

    generateTwoPointGraph(solution) {
        return {
            type: 'two_points',
            points: [solution.point1, solution.point2],
            midpoint: solution.midpoint,
            distance: solution.distance,
            connectionLine: true
        };
    }

    generateLineGraph(solution) {
        const points = [];
        
        if (solution.slope !== 'undefined') {
            // Generate points along the line
            for (let x = -10; x <= 10; x += 0.5) {
                const y = solution.slope * x + (solution.yIntercept || 0);
                if (Math.abs(y) <= 15) { // Keep within reasonable bounds
                    points.push({ x, y });
                }
            }
        }

        return {
            type: 'line',
            slope: solution.slope,
            yIntercept: solution.yIntercept,
            points: points,
            equation: solution.equation || solution.forms?.slopeIntercept,
            isVertical: solution.slope === 'undefined',
            verticalX: solution.slope === 'undefined' ? solution.point?.x : null
        };
    }

    generateCircleGraph(solution) {
        const points = [];
        const { center, radius } = solution;

        // Generate points around the circle
        for (let angle = 0; angle <= 2 * Math.PI; angle += 0.1) {
            points.push({
                x: center.x + radius * Math.cos(angle),
                y: center.y + radius * Math.sin(angle)
            });
        }

        return {
            type: 'circle',
            center: center,
            radius: radius,
            points: points,
            equation: solution.standardForm
        };
    }

    generateTriangleGraph(solution) {
        return {
            type: 'triangle',
            vertices: [
                solution.vertex1,
                solution.vertex2,
                solution.vertex3
            ],
            specialPoint: solution.centroid || solution.circumcenter || solution.incenter || solution.orthocenter,
            specialPointType: solution.category,
            area: solution.area,
            closed: true
        };
    }

    generateSectionGraph(solution) {
        return {
            type: 'section',
            endpoints: [solution.point1, solution.point2],
            divisionPoint: solution.divisionPoint,
            ratio: solution.ratioString,
            divisionType: solution.divisionType
        };
    }

    // WORKBOOK GENERATION

    generateCoordinateGeometryWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createEnhancedStepsSection(),
            this.createLessonSectionCoordGeom(),
            this.createSolutionSection(),
            this.createAnalysisSection(),
            this.createVerificationSectionCoordGeom(),
            this.createPedagogicalNotesSectionCoordGeom(),
            this.createAlternativeMethodsSectionCoordGeom()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Coordinate Geometry Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSection() {
        if (!this.currentProblem) return null;

        const problemData = [
            ['Problem Type', this.coordinateGeometryTypes[this.currentProblem.type]?.name || this.currentProblem.type]
        ];

        if (this.currentProblem.points && this.currentProblem.points.length > 0) {
            this.currentProblem.points.forEach((point, index) => {
                problemData.push([`Point ${index + 1}`, `(${point.x}, ${point.y})`]);
            });
        }

        if (this.currentProblem.context?.description) {
            problemData.push(['Description', this.currentProblem.context.description]);
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createEnhancedStepsSection() {
        if (!this.solutionSteps || this.solutionSteps.length === 0) return null;

        const stepsData = [];

        this.solutionSteps.forEach((step, index) => {
            if (step.stepType === 'bridge') {
                stepsData.push(['', '']);
                stepsData.push(['→ Connection', step.explanation.nextGoal]);
                stepsData.push(['', '']);
                return;
            }

            stepsData.push([`Step ${step.stepNumber}`, step.step]);
            stepsData.push(['Description', step.description]);

            if (step.formula) {
                stepsData.push(['Formula', step.formula]);
            }

            if (step.calculation) {
                stepsData.push(['Calculation', step.calculation]);
            }

            if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.visualHint) {
                stepsData.push(['Visual Hint', step.visualHint]);
            }

            if (step.errorPrevention && this.includeErrorPrevention) {
                if (step.errorPrevention.commonMistakes.length > 0) {
                    stepsData.push(['Common Mistakes', step.errorPrevention.commonMistakes.join('; ')]);
                }
            }

            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                stepsData.push(['Guiding Questions', step.scaffolding.guidingQuestions.join(' ')]);
            }

            stepsData.push(['', '']); // Spacing
        });

        return {
            title: 'Enhanced Step-by-Step Solution',
            type: 'steps',
            data: stepsData
        };
    }

    createLessonSectionCoordGeom() {
        const lessonKey = this.getCurrentLessonKey();
        const lesson = this.lessons?.[lessonKey];

        if (!lesson) {
            return {
                title: 'Key Concepts',
                type: 'lesson',
                data: [
                    ['Concept', 'Coordinate geometry uses algebraic methods to solve geometric problems'],
                    ['Approach', 'Express geometric relationships using coordinates and equations']
                ]
            };
        }

        return {
            title: `Lesson: ${lesson.title}`,
            type: 'lesson',
            data: [
                ['Theory', lesson.theory],
                ['Key Concepts', lesson.concepts.join('; ')],
                ['Applications', lesson.applications.join('; ')]
            ]
        };
    }

    getCurrentLessonKey() {
        const { type } = this.currentProblem;
        
        const lessonMap = {
            'distance_between_points': 'distance_formula',
            'midpoint': 'midpoint_formula',
            'slope': 'slope_formula',
            'line_equation': 'line_equations',
            'parallel_line': 'parallel_perpendicular',
            'perpendicular_line': 'parallel_perpendicular',
            'circle_equation': 'circle_equations',
            'section_formula': 'section_formula',
            'triangle_area': 'area_of_triangle',
            'collinearity': 'collinearity',
            'point_to_line_distance': 'distance_point_to_line',
            'angle_between_lines': 'angle_between_lines',
            'parametric_line': 'parametric_equations',
            'polar_conversion': 'polar_coordinates'
        };

        return lessonMap[type] || type;
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        // Add final answer based on problem type
        if (this.currentSolution.distance !== undefined) {
            solutionData.push(['Distance', this.currentSolution.distance]);
        }
        if (this.currentSolution.midpoint) {
            solutionData.push(['Midpoint', `(${this.currentSolution.midpoint.x}, ${this.currentSolution.midpoint.y})`]);
        }
        if (this.currentSolution.slope !== undefined) {
            solutionData.push(['Slope', this.currentSolution.slope]);
        }
        if (this.currentSolution.equation) {
            solutionData.push(['Equation', this.currentSolution.equation]);
        }
        if (this.currentSolution.area !== undefined) {
            solutionData.push(['Area', `${this.currentSolution.area} square units`]);
        }
        if (this.currentSolution.centroid) {
            solutionData.push(['Centroid', `(${this.currentSolution.centroid.x}, ${this.currentSolution.centroid.y})`]);
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createAnalysisSection() {
        const analysisData = [
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Difficulty Level', this.explanationLevel],
            ['Problem Category', this.currentProblem.type]
        ];

        if (this.currentSolution.interpretation) {
            analysisData.push(['Interpretation', this.currentSolution.interpretation]);
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSectionCoordGeom() {
        if (!this.includeVerificationInSteps) return null;

        const verificationData = [['Verification', 'Result']];

        if (this.currentSolution.verification) {
            const verification = this.currentSolution.verification;
            
            Object.entries(verification).forEach(([key, value]) => {
                if (typeof value === 'object') {
                    verificationData.push([key, JSON.stringify(value)]);
                } else {
                    verificationData.push([key, value]);
                }
            });
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createPedagogicalNotesSectionCoordGeom() {
        if (!this.includePedagogicalNotes) return null;

        const lessonKey = this.getCurrentLessonKey();
        const lesson = this.lessons?.[lessonKey];

        if (!lesson) return null;

        return {
            title: 'Teaching Notes',
            type: 'pedagogical',
            data: [
                ['Topic', lesson.title],
                ['Key Concepts', lesson.concepts.join('; ')],
                ['Theory', lesson.theory],
                ['Solving Steps', lesson.solvingSteps?.join('; ') || 'See solution steps'],
                ['Applications', lesson.applications.join('; ')],
                ['Common Difficulties', 'See error prevention in steps']
            ]
        };
    }

    createAlternativeMethodsSectionCoordGeom() {
        if (!this.includeAlternativeMethods) return null;

        const alternativeMethods = this.getAlternativeMethodsForProblemType(this.currentProblem.type);

        return {
            title: 'Alternative Solution Methods',
            type: 'alternatives',
            data: alternativeMethods
        };
    }

    getAlternativeMethodsForProblemType(problemType) {
        const alternatives = {
            distance_between_points: [
                ['Primary Method', 'Distance formula using Pythagorean theorem'],
                ['Alternative 1', 'Graphical: Plot points and measure with ruler (less precise)'],
                ['Alternative 2', 'Component method: Calculate Δx and Δy separately, then combine'],
                ['Best For', 'Formula is most accurate; graphical helps with visualization']
            ],
            midpoint: [
                ['Primary Method', 'Average the coordinates'],
                ['Alternative 1', 'Graphical: Plot points, draw line, mark center'],
                ['Alternative 2', 'Section formula with ratio 1:1'],
                ['Best For', 'Averaging is fastest; graphical builds intuition']
            ],
            slope: [
                ['Primary Method', 'Rise over run formula'],
                ['Alternative 1', 'Graphical: Count squares on graph paper'],
                ['Alternative 2', 'Angle measurement: tan(angle) = slope'],
                ['Best For', 'Formula is most precise; graphical good for estimation']
            ],
            triangle_area: [
                ['Primary Method', 'Coordinate formula (determinant method)'],
                ['Alternative 1', 'Shoelace formula'],
                ['Alternative 2', 'Heron\'s formula using side lengths'],
                ['Alternative 3', 'Base × height ÷ 2 (if base is horizontal/vertical)'],
                ['Best For', 'Coordinate formula works for any orientation']
            ],
            collinearity: [
                ['Primary Method', 'Area method (triangle area = 0)'],
                ['Alternative 1', 'Slope method (equal slopes between pairs)'],
                ['Alternative 2', 'Distance method (AB + BC = AC)'],
                ['Best For', 'Area method is most reliable; slope method is intuitive']
            ],
            circle_equation: [
                ['Primary Method', 'Standard form using center and radius'],
                ['Alternative 1', 'General form expansion'],
                ['Alternative 2', 'Three-point method (find circumcenter)'],
                ['Best For', 'Standard form is clearest; three-point works when center unknown']
            ]
        };

        return alternatives[problemType] || [
            ['Primary Method', 'Standard coordinate geometry approach'],
            ['Note', 'Multiple methods may exist depending on given information']
        ];
    }

    // ADDITIONAL HELPER METHODS

    adaptLanguageLevel(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                replacements: {
                    'coordinate': 'position number',
                    'perpendicular': 'at right angles',
                    'collinear': 'on the same line',
                    'slope': 'steepness',
                    'midpoint': 'middle point',
                    'formula': 'math rule',
                    'substitute': 'put in',
                    'calculate': 'figure out'
                }
            },
            intermediate: {
                replacements: {
                    'coordinate': 'coordinate',
                    'perpendicular': 'perpendicular',
                    'collinear': 'collinear',
                    'slope': 'slope',
                    'midpoint': 'midpoint'
                }
            },
            detailed: {
                replacements: {
                    'coordinate': 'coordinate (ordered pair representing position)',
                    'perpendicular': 'perpendicular (meeting at 90° angle)',
                    'collinear': 'collinear (lying on the same straight line)',
                    'slope': 'slope (rate of change, rise over run)',
                    'midpoint': 'midpoint (point equidistant from endpoints)'
                }
            }
        };

        const levelAdaptation = adaptations[level.vocabulary] || adaptations.intermediate;
        let adaptedText = text;

        for (const [term, replacement] of Object.entries(levelAdaptation.replacements)) {
            const regex = new RegExp(`\\b${term}\\b`, 'gi');
            adaptedText = adaptedText.replace(regex, replacement);
        }

        return adaptedText;
    }

    gcd(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // Methods from linear solver that are reused
    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue solving`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is: ${nextStep.description}`;
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex}`,
            progression: 'We are making progress toward the solution',
            relationship: 'Each step brings us closer to the answer'
        };
    }

    generateStepBridge(currentStep, nextStep) {
        return {
            currentState: `Current: ${currentStep.afterExpression || currentStep.expression}`,
            nextGoal: `Next: ${nextStep.description}`,
            why: `Necessary to progress the solution`,
            howItHelps: `Moves us toward the final answer`
        };
    }

    getAdaptiveExplanation(step, explanationLevel) {
        const level = this.difficultyLevels[explanationLevel] || this.difficultyLevels.intermediate;
        
        return {
            adaptedDescription: this.adaptLanguageLevel(step.description, level),
            adaptedReasoning: step.reasoning ? this.adaptLanguageLevel(step.reasoning, level) : '',
            complexityLevel: explanationLevel
        };
    }
}

// Export the class
export default EnhancedCoordinateGeometryWorkbook;
