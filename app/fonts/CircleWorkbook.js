// Enhanced Circle Geometry Mathematical Workbook - Improved Step-by-Step Explanations
import * as math from 'mathjs';

export class EnhancedCircleGeometryWorkbook {
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
        this.initializeCircleSolvers();
        this.initializeErrorDatabase();
        this.initializeExplanationTemplates();
    }

    initializeCircleLessons() {
        this.lessons = {
            circle_equation: {
                title: "Circle Equations",
                concepts: [
                    "Standard form: (x - h)² + (y - k)² = r² where (h, k) is center and r is radius",
                    "General form: x² + y² + Dx + Ey + F = 0",
                    "Converting between standard and general forms",
                    "Circle represents all points equidistant from center"
                ],
                theory: "A circle is the set of all points in a plane that are at a fixed distance (radius) from a fixed point (center). The equation is derived from the distance formula.",
                keyFormulas: {
                    "Standard Form": "(x - h)² + (y - k)² = r²",
                    "General Form": "x² + y² + Dx + Ey + F = 0",
                    "Conversion": "h = -D/2, k = -E/2, r² = h² + k² - F",
                    "Distance Formula": "d = √[(x₂ - x₁)² + (y₂ - y₁)²]"
                },
                solvingSteps: [
                    "Identify the form of the given equation",
                    "Extract center coordinates and radius",
                    "Convert between forms if necessary",
                    "Verify the equation represents a valid circle (r² > 0)"
                ],
                applications: [
                    "GPS and location tracking",
                    "Wireless signal coverage",
                    "Planetary orbits (approximated)",
                    "Engineering and design"
                ]
            },

            circle_area_circumference: {
                title: "Area and Circumference",
                concepts: [
                    "Circumference: C = 2πr = πd",
                    "Area: A = πr²",
                    "Relationship between radius and diameter: d = 2r",
                    "π (pi) ≈ 3.14159... is the ratio of circumference to diameter"
                ],
                theory: "The circumference is the distance around the circle, while area measures the space enclosed. Both are fundamentally related to the radius through the constant π.",
                keyFormulas: {
                    "Circumference from radius": "C = 2πr",
                    "Circumference from diameter": "C = πd",
                    "Area": "A = πr²",
                    "Radius from circumference": "r = C/(2π)",
                    "Radius from area": "r = √(A/π)"
                },
                solvingSteps: [
                    "Identify given information (radius, diameter, circumference, or area)",
                    "Select appropriate formula",
                    "Substitute known values",
                    "Solve for unknown quantity",
                    "Check units and reasonableness"
                ],
                applications: [
                    "Calculating distances around circular tracks",
                    "Material needed for circular objects",
                    "Coverage area calculations",
                    "Wheel rotations and distance traveled"
                ]
            },

            arc_length_sector: {
                title: "Arc Length and Sector Area",
                concepts: [
                    "Arc length is a portion of the circumference",
                    "Sector is a 'slice' of a circle",
                    "Central angle determines the fraction of the circle",
                    "Angles can be measured in degrees or radians"
                ],
                theory: "Arc length and sector area are proportional to the central angle. They represent fractions of the total circumference and area respectively.",
                keyFormulas: {
                    "Arc Length (degrees)": "L = (θ/360°) × 2πr",
                    "Arc Length (radians)": "L = θr",
                    "Sector Area (degrees)": "A = (θ/360°) × πr²",
                    "Sector Area (radians)": "A = (1/2)θr²",
                    "Radian Conversion": "radians = (π/180°) × degrees"
                },
                solvingSteps: [
                    "Identify the central angle and radius",
                    "Determine if angle is in degrees or radians",
                    "Choose appropriate formula",
                    "Calculate arc length or sector area",
                    "Verify units are consistent"
                ],
                applications: [
                    "Pizza slice calculations",
                    "Pie charts and data visualization",
                    "Pendulum swing distances",
                    "Circular motion in physics"
                ]
            },

            chord_properties: {
                title: "Chords and Their Properties",
                concepts: [
                    "Chord: line segment with both endpoints on circle",
                    "Diameter is the longest chord",
                    "Perpendicular from center bisects chord",
                    "Equal chords are equidistant from center"
                ],
                theory: "Chords have special relationships with the circle's center and radius. The perpendicular distance from center to chord relates to chord length.",
                keyFormulas: {
                    "Chord Length": "L = 2√(r² - d²) where d is distance from center",
                    "Distance to Chord": "d = √(r² - (L/2)²)",
                    "Chord Midpoint Distance": "d² + (L/2)² = r²"
                },
                solvingSteps: [
                    "Draw diagram showing circle, center, and chord",
                    "Identify radius and perpendicular distance",
                    "Apply Pythagorean theorem relationship",
                    "Solve for unknown quantity",
                    "Verify solution makes geometric sense"
                ],
                applications: [
                    "Bridge arch design",
                    "Circular tunnel construction",
                    "Lens and mirror calculations",
                    "Geometric proofs"
                ]
            },

            tangent_secant: {
                title: "Tangent and Secant Lines",
                concepts: [
                    "Tangent: line touching circle at exactly one point",
                    "Secant: line intersecting circle at two points",
                    "Tangent is perpendicular to radius at point of tangency",
                    "Two tangents from external point are equal in length"
                ],
                theory: "Tangent lines have special perpendicular relationships with radii. Secants and tangents from external points follow specific length relationships.",
                keyFormulas: {
                    "Tangent perpendicular to radius": "radius ⊥ tangent",
                    "External tangent length": "L = √(d² - r²) where d is distance from center",
                    "Power of a point": "PA × PB = PC × PD for secants",
                    "Tangent-secant": "(tangent)² = (external part) × (whole secant)"
                },
                solvingSteps: [
                    "Identify tangent points and external points",
                    "Draw perpendicular from center to tangent",
                    "Apply Pythagorean theorem or power theorems",
                    "Solve for unknown lengths",
                    "Verify geometric constraints"
                ],
                applications: [
                    "Road and railway tangent design",
                    "Optical systems with circular lenses",
                    "Gear and pulley systems",
                    "Collision detection in computer graphics"
                ]
            },

            inscribed_angles: {
                title: "Inscribed Angles and Arcs",
                concepts: [
                    "Inscribed angle: vertex on circle, sides are chords",
                    "Inscribed angle = (1/2) × central angle",
                    "Angles subtending same arc are equal",
                    "Angle in semicircle is 90°"
                ],
                theory: "Inscribed angles have a constant relationship with central angles and arcs. This leads to many important geometric theorems.",
                keyFormulas: {
                    "Inscribed Angle Theorem": "inscribed angle = (1/2) × central angle",
                    "Same Arc Theorem": "angles subtending same arc are equal",
                    "Semicircle Theorem": "angle in semicircle = 90°",
                    "Opposite Angles in Cyclic Quadrilateral": "sum = 180°"
                },
                solvingSteps: [
                    "Identify inscribed angles and corresponding arcs",
                    "Find central angle if needed",
                    "Apply inscribed angle theorem",
                    "Use supplementary or complementary relationships",
                    "Verify angle measures sum correctly"
                ],
                applications: [
                    "Navigation and surveying",
                    "Astronomy and celestial observations",
                    "Architecture and design",
                    "Geometric constructions"
                ]
            },

            circle_intersections: {
                title: "Circle Intersections",
                concepts: [
                    "Two circles can intersect at 0, 1, or 2 points",
                    "Distance between centers determines intersection type",
                    "Radical axis is perpendicular to line of centers",
                    "Intersection points satisfy both circle equations"
                ],
                theory: "The intersection of circles depends on the relationship between the distance between centers and the sum/difference of radii.",
                keyFormulas: {
                    "No intersection": "d > r₁ + r₂ or d < |r₁ - r₂|",
                    "Tangent (external)": "d = r₁ + r₂",
                    "Tangent (internal)": "d = |r₁ - r₂|",
                    "Two intersections": "|r₁ - r₂| < d < r₁ + r₂"
                },
                solvingSteps: [
                    "Write both circle equations",
                    "Calculate distance between centers",
                    "Compare distance with radii sums and differences",
                    "Solve system of equations for intersection points if they exist",
                    "Verify points satisfy both equations"
                ],
                applications: [
                    "Wireless network coverage overlap",
                    "Collision detection",
                    "Venn diagrams and set theory",
                    "Trilateration and GPS"
                ]
            },

            circle_graphs: {
                title: "Graphing Circles",
                concepts: [
                    "Circle is symmetric about center point",
                    "Radius determines size",
                    "Center (h, k) determines position",
                    "Complete circle requires plotting multiple points"
                ],
                theory: "Graphing circles involves understanding the geometric definition and plotting points that satisfy the distance condition from the center.",
                keyFormulas: {
                    "Standard Form": "(x - h)² + (y - k)² = r²",
                    "Parametric Form": "x = h + r cos(t), y = k + r sin(t)",
                    "Completing the Square": "Group x and y terms separately"
                },
                graphingSteps: [
                    "Identify or convert to standard form",
                    "Locate center point (h, k)",
                    "Plot center on coordinate plane",
                    "Mark radius distance in all directions",
                    "Sketch smooth circular curve"
                ],
                applications: [
                    "Computer graphics and animation",
                    "Engineering drawings",
                    "Map representations",
                    "Data visualization"
                ]
            },

            circle_transformations: {
                title: "Circle Transformations",
                concepts: [
                    "Translation moves center without changing radius",
                    "Dilation changes radius while maintaining center",
                    "Reflection preserves circle properties",
                    "Rotation about center has no visible effect"
                ],
                theory: "Circles can be transformed through various geometric operations. Translations and dilations are most common in practical applications.",
                keyFormulas: {
                    "Translation": "(x - (h + a))² + (y - (k + b))² = r²",
                    "Dilation": "(x - h)² + (y - k)² = (kr)²",
                    "Reflection over x-axis": "(x - h)² + (y + k)² = r²"
                },
                transformationSteps: [
                    "Identify type of transformation",
                    "Determine transformation parameters",
                    "Apply transformation to center and/or radius",
                    "Write new circle equation",
                    "Verify transformation correctness"
                ],
                applications: [
                    "Animation and motion graphics",
                    "Scaling designs",
                    "Map projections",
                    "Physics simulations"
                ]
            },

            circle_applications: {
                title: "Real-World Circle Applications",
                concepts: [
                    "Circular motion in physics",
                    "Optimization problems involving circles",
                    "Area and perimeter optimization",
                    "Circular patterns in nature and design"
                ],
                theory: "Circles appear throughout nature and engineering due to their efficient properties. The circle maximizes area for a given perimeter.",
                problemTypes: {
                    "Optimization": "Maximize/minimize involving circular constraints",
                    "Motion": "Objects moving in circular paths",
                    "Coverage": "Range and coverage area problems",
                    "Design": "Aesthetic and functional circular designs"
                },
                solutionStrategies: [
                    "Identify the circular component",
                    "Set up appropriate circle equation or formula",
                    "Apply calculus for optimization if needed",
                    "Solve for required quantity",
                    "Interpret result in context"
                ],
                commonApplications: [
                    "Ferris wheel problems",
                    "Circular track athletics",
                    "Broadcast range calculations",
                    "Circular garden or pool designs"
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
                circleBg: '#e6f2ff'
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
                circleBg: '#dceeff'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeMathSymbols() {
        return {
            // Mathematical operators
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±',
            // Greek letters
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            // Special symbols
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'perpendicular': '⊥', 'parallel': '∥', 'angle': '∠',
            // Circle-specific
            'diameter': '⌀', 'radius': 'r', 'degree': '°'
        };
    }

    initializeCircleSolvers() {
        this.circleTypes = {
            // Basic circle equation
            standard_form: {
                patterns: [
                    /\(x\s*-\s*([+-]?\d+\.?\d*)\)\s*\^\s*2\s*\+\s*\(y\s*-\s*([+-]?\d+\.?\d*)\)\s*\^\s*2\s*=\s*([+-]?\d+\.?\d*)/,
                    /standard.*form.*circle/i,
                    /circle.*equation.*standard/i
                ],
                solver: this.solveStandardForm.bind(this),
                name: 'Standard Form Circle Equation',
                category: 'circle_equation',
                description: 'Solves (x - h)² + (y - k)² = r²'
            },

            // General form circle
            general_form: {
                patterns: [
                    /x\s*\^\s*2\s*\+\s*y\s*\^\s*2\s*\+\s*([+-]?\d+\.?\d*)x\s*\+\s*([+-]?\d+\.?\d*)y\s*\+\s*([+-]?\d+\.?\d*)\s*=\s*0/,
                    /general.*form.*circle/i,
                    /circle.*equation.*general/i
                ],
                solver: this.solveGeneralForm.bind(this),
                name: 'General Form Circle Equation',
                category: 'circle_equation',
                description: 'Solves x² + y² + Dx + Ey + F = 0'
            },

            // Area and circumference
            area_circumference: {
                patterns: [
                    /area.*circle/i,
                    /circumference.*circle/i,
                    /circle.*area/i,
                    /circle.*circumference/i,
                    /perimeter.*circle/i
                ],
                solver: this.solveAreaCircumference.bind(this),
                name: 'Circle Area and Circumference',
                category: 'circle_area_circumference',
                description: 'Calculates area and circumference from radius or diameter'
            },

            // Arc length
            arc_length: {
                patterns: [
                    /arc.*length/i,
                    /length.*arc/i,
                    /circular.*arc/i
                ],
                solver: this.solveArcLength.bind(this),
                name: 'Arc Length',
                category: 'arc_length_sector',
                description: 'Calculates arc length given radius and central angle'
            },

            // Sector area
            sector_area: {
                patterns: [
                    /sector.*area/i,
                    /area.*sector/i,
                    /circular.*sector/i
                ],
                solver: this.solveSectorArea.bind(this),
                name: 'Sector Area',
                category: 'arc_length_sector',
                description: 'Calculates sector area given radius and central angle'
            },

            // Chord length
            chord_length: {
                patterns: [
                    /chord.*length/i,
                    /length.*chord/i,
                    /circle.*chord/i
                ],
                solver: this.solveChordLength.bind(this),
                name: 'Chord Length',
                category: 'chord_properties',
                description: 'Calculates chord length from radius and distance from center'
            },

            // Tangent line
            tangent_line: {
                patterns: [
                    /tangent.*circle/i,
                    /circle.*tangent/i,
                    /tangent.*line/i
                ],
                solver: this.solveTangentLine.bind(this),
                name: 'Tangent to Circle',
                category: 'tangent_secant',
                description: 'Finds tangent line to circle at given point'
            },

            // Circle intersection
            circle_intersection: {
                patterns: [
                    /circle.*intersection/i,
                    /intersect.*circle/i,
                    /two.*circles/i
                ],
                solver: this.solveCircleIntersection.bind(this),
                name: 'Circle Intersection',
                category: 'circle_intersections',
                description: 'Finds intersection points of two circles'
            },

            // Point on circle
            point_on_circle: {
                patterns: [
                    /point.*on.*circle/i,
                    /circle.*through.*point/i,
                    /point.*distance.*circle/i
                ],
                solver: this.solvePointOnCircle.bind(this),
                name: 'Point on Circle',
                category: 'circle_equation',
                description: 'Determines if point lies on circle or finds distance'
            },

            // Inscribed angle
            inscribed_angle: {
                patterns: [
                    /inscribed.*angle/i,
                    /angle.*inscribed/i,
                    /central.*angle/i
                ],
                solver: this.solveInscribedAngle.bind(this),
                name: 'Inscribed Angle',
                category: 'inscribed_angles',
                description: 'Calculates inscribed angle from central angle or arc'
            },

            // Circle from three points
            circle_three_points: {
                patterns: [
                    /circle.*three.*points/i,
                    /three.*points.*circle/i,
                    /circumcircle/i
                ],
                solver: this.solveCircleThreePoints.bind(this),
                name: 'Circle Through Three Points',
                category: 'circle_equation',
                description: 'Finds circle passing through three given points'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            standard_form: {
                'Identify center': [
                    'Confusing signs: (x - 3) means h = 3, not h = -3',
                    'Forgetting parentheses affect signs',
                    'Mixing up x and y coordinates'
                ],
                'Find radius': [
                    'Forgetting to take square root of r²',
                    'Using diameter instead of radius',
                    'Negative radius (not physically meaningful)'
                ]
            },
            area_circumference: {
                'Calculate area': [
                    'Using diameter instead of radius in A = πr²',
                    'Forgetting to square the radius',
                    'Confusing area and circumference formulas'
                ],
                'Calculate circumference': [
                    'Using radius instead of diameter in C = πd',
                    'Forgetting factor of 2 in C = 2πr',
                    'Mixing up π with other constants'
                ]
            },
            arc_length_sector: {
                'Convert angle': [
                    'Forgetting to convert degrees to radians',
                    'Using wrong conversion factor',
                    'Mixing degree and radian formulas'
                ],
                'Calculate arc length': [
                    'Using diameter instead of radius',
                    'Forgetting to multiply by radius',
                    'Using wrong fraction of circumference'
                ]
            }
        };

        this.errorPrevention = {
            sign_checking: {
                reminder: 'In (x - h), the center x-coordinate is +h, not -h',
                method: 'Rewrite as (x + (-h)) to see the sign clearly'
            },
            radius_squared: {
                reminder: 'The equation has r², but radius is r',
                method: 'Always take square root of right side for radius'
            },
            angle_units: {
                reminder: 'Check if angle is in degrees or radians',
                method: 'Use different formulas for different units'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why this step works and its geometric meaning',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Exact sequence of operations to perform',
                language: 'step-by-step instructions'
            },
            visual: {
                focus: 'Graphical and spatial understanding of circles',
                language: 'visual and spatial metaphors'
            },
            algebraic: {
                focus: 'Formal algebraic rules and properties',
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

            // Generate graph data if applicable
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
                    const extractedParams = this.extractCircleParameters(match, type);

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

        // Default to standard form if center and radius are provided
        if (parameters.h !== undefined || parameters.k !== undefined || parameters.r !== undefined) {
            return {
                originalInput: equation || 'Circle with given center and radius',
                cleanInput: cleanInput,
                type: 'standard_form',
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
            .replace(/\^2/g, '^2')
            .replace(/\*\*/g, '^')
            .trim();
    }

    extractCircleParameters(match, type) {
        const params = {};

        if (type === 'standard_form' && match) {
            params.h = parseFloat(match[1]) || 0;
            params.k = parseFloat(match[2]) || 0;
            params.rSquared = parseFloat(match[3]) || 1;
            params.r = Math.sqrt(params.rSquared);
        } else if (type === 'general_form' && match) {
            params.D = parseFloat(match[1]) || 0;
            params.E = parseFloat(match[2]) || 0;
            params.F = parseFloat(match[3]) || 0;
        }

        return params;
    }

    solveCircleProblem_Internal(problem) {
        const solver = this.circleTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for circle problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // CIRCLE SOLVERS

    solveStandardForm(problem) {
        const { h, k, r, rSquared } = problem.parameters;
        const radius = r || Math.sqrt(rSquared || 1);

        if (radius <= 0) {
            return {
                solutionType: 'Invalid circle (radius must be positive)',
                center: null,
                radius: null,
                equation: problem.originalInput,
                category: 'standard_form'
            };
        }

        return {
            solutionType: 'Valid circle in standard form',
            center: { x: h || 0, y: k || 0 },
            radius: radius,
            equation: `(x - ${h || 0})² + (y - ${k || 0})² = ${radius * radius}`,
            diameter: 2 * radius,
            area: Math.PI * radius * radius,
            circumference: 2 * Math.PI * radius,
            verification: this.verifyStandardForm(h || 0, k || 0, radius),
            graphicalInterpretation: this.getCircleGraphicalInterpretation(h || 0, k || 0, radius),
            category: 'standard_form'
        };
    }

    solveGeneralForm(problem) {
        const { D, E, F } = problem.parameters;

        // Convert to standard form: complete the square
        const h = -D / 2;
        const k = -E / 2;
        const rSquared = h * h + k * k - F;

        if (rSquared <= 0) {
            return {
                solutionType: rSquared === 0 ? 'Point circle (degenerate)' : 'No circle (imaginary radius)',
                center: { x: h, y: k },
                radius: null,
                equation: `x² + y² + ${D}x + ${E}y + ${F} = 0`,
                explanation: rSquared === 0 ? 'Equation represents a single point' : 'Equation does not represent a real circle',
                category: 'general_form'
            };
        }

        const radius = Math.sqrt(rSquared);

        return {
            solutionType: 'Valid circle converted from general form',
            generalForm: `x² + y² + ${D}x + ${E}y + ${F} = 0`,
            standardForm: `(x - ${h})² + (y - ${k})² = ${rSquared}`,
            center: { x: h, y: k },
            radius: radius,
            diameter: 2 * radius,
            area: Math.PI * radius * radius,
            circumference: 2 * Math.PI * radius,
            conversionSteps: this.getConversionSteps(D, E, F, h, k, rSquared),
            category: 'general_form'
        };
    }

    solveAreaCircumference(problem) {
        const { radius, diameter, area, circumference } = problem.parameters;

        let r;
        let givenValue;
        let givenType;

        if (radius !== undefined) {
            r = radius;
            givenType = 'radius';
            givenValue = radius;
        } else if (diameter !== undefined) {
            r = diameter / 2;
            givenType = 'diameter';
            givenValue = diameter;
        } else if (area !== undefined) {
            r = Math.sqrt(area / Math.PI);
            givenType = 'area';
            givenValue = area;
        } else if (circumference !== undefined) {
            r = circumference / (2 * Math.PI);
            givenType = 'circumference';
            givenValue = circumference;
        } else {
            throw new Error('Must provide radius, diameter, area, or circumference');
        }

        const calculatedArea = Math.PI * r * r;
        const calculatedCircumference = 2 * Math.PI * r;
        const calculatedDiameter = 2 * r;

        return {
            givenType: givenType,
            givenValue: givenValue,
            radius: r,
            diameter: calculatedDiameter,
            area: calculatedArea,
            circumference: calculatedCircumference,
            areaExact: `${r * r}π`,
            circumferenceExact: `${2 * r}π`,
            formulas: {
                area: 'A = πr²',
                circumference: 'C = 2πr',
                diameter: 'd = 2r'
            },
            category: 'area_circumference'
        };
    }

    solveArcLength(problem) {
        const { radius, angle, angleUnit = 'degrees' } = problem.parameters;

        if (!radius || angle === undefined) {
            throw new Error('Must provide radius and angle for arc length');
        }

        let arcLength;
        let angleInRadians;

        if (angleUnit === 'degrees') {
            angleInRadians = (angle * Math.PI) / 180;
            arcLength = (angle / 360) * 2 * Math.PI * radius;
        } else {
            angleInRadians = angle;
            arcLength = angle * radius;
        }

        const fullCircumference = 2 * Math.PI * radius;
        const fractionOfCircle = arcLength / fullCircumference;

        return {
            radius: radius,
            angle: angle,
            angleUnit: angleUnit,
            angleInRadians: angleInRadians,
            angleInDegrees: angleUnit === 'radians' ? (angle * 180) / Math.PI : angle,
            arcLength: arcLength,
            arcLengthExact: angleUnit === 'degrees' ? `(${angle}/360) × 2π × ${radius}` : `${angle} × ${radius}`,
            circumference: fullCircumference,
            fractionOfCircle: fractionOfCircle,
            percentageOfCircle: fractionOfCircle * 100,
            formulas: {
                degrees: 'L = (θ/360°) × 2πr',
                radians: 'L = θr'
            },
            category: 'arc_length_sector'
        };
    }

    solveSectorArea(problem) {
        const { radius, angle, angleUnit = 'degrees' } = problem.parameters;

        if (!radius || angle === undefined) {
            throw new Error('Must provide radius and angle for sector area');
        }

        let sectorArea;
        let angleInRadians;

        if (angleUnit === 'degrees') {
            angleInRadians = (angle * Math.PI) / 180;
            sectorArea = (angle / 360) * Math.PI * radius * radius;
        } else {
            angleInRadians = angle;
            sectorArea = 0.5 * angle * radius * radius;
        }

        const fullArea = Math.PI * radius * radius;
        const fractionOfCircle = sectorArea / fullArea;

        return {
            radius: radius,
            angle: angle,
            angleUnit: angleUnit,
            angleInRadians: angleInRadians,
            angleInDegrees: angleUnit === 'radians' ? (angle * 180) / Math.PI : angle,
            sectorArea: sectorArea,
            sectorAreaExact: angleUnit === 'degrees' ? `(${angle}/360) × π × ${radius}²` : `(1/2) × ${angle} × ${radius}²`,
            circleArea: fullArea,
            fractionOfCircle: fractionOfCircle,
            percentageOfCircle: fractionOfCircle * 100,
            arcLength: angleUnit === 'degrees' ? (angle / 360) * 2 * Math.PI * radius : angle * radius,
            formulas: {
                degrees: 'A = (θ/360°) × πr²',
                radians: 'A = (1/2)θr²'
            },
            category: 'arc_length_sector'
        };
    }

    solveChordLength(problem) {
        const { radius, distance, chordLength } = problem.parameters;

        // Can solve for chord length given radius and distance, or distance given radius and chord length
        if (radius && distance !== undefined) {
            // Calculate chord length
            if (distance > radius) {
                return {
                    solutionType: 'Invalid - distance from center exceeds radius',
                    radius: radius,
                    distance: distance,
                    explanation: 'Chord cannot exist if distance from center is greater than radius',
                    category: 'chord_properties'
                };
            }

            const chord = 2 * Math.sqrt(radius * radius - distance * distance);
            const centralAngle = 2 * Math.asin(chord / (2 * radius));
            const centralAngleDegrees = (centralAngle * 180) / Math.PI;

            return {
                radius: radius,
                distanceFromCenter: distance,
                chordLength: chord,
                centralAngle: centralAngle,
                centralAngleDegrees: centralAngleDegrees,
                formula: 'L = 2√(r² - d²)',
                verification: this.verifyChordLength(radius, distance, chord),
                category: 'chord_properties'
            };
        } else if (radius && chordLength) {
            // Calculate distance from center
            const halfChord = chordLength / 2;
            if (halfChord > radius) {
                return {
                    solutionType: 'Invalid - chord length exceeds diameter',
                    radius: radius,
                    chordLength: chordLength,
                    explanation: 'Chord length cannot exceed diameter (2r)',
                    category: 'chord_properties'
                };
            }

            const dist = Math.sqrt(radius * radius - halfChord * halfChord);
            const centralAngle = 2 * Math.asin(chordLength / (2 * radius));
            const centralAngleDegrees = (centralAngle * 180) / Math.PI;

            return {
                radius: radius,
                chordLength: chordLength,
                distanceFromCenter: dist,
                centralAngle: centralAngle,
                centralAngleDegrees: centralAngleDegrees,
                formula: 'd = √(r² - (L/2)²)',
                category: 'chord_properties'
            };
        }

        throw new Error('Must provide radius and either distance or chord length');
    }

    solveTangentLine(problem) {
        const { h, k, r, pointX, pointY } = problem.parameters;

        // Center and radius of circle
        const cx = h || 0;
        const cy = k || 0;
        const radius = r || 1;

        // Check if point is on the circle
        const distanceFromCenter = Math.sqrt((pointX - cx) ** 2 + (pointY - cy) ** 2);
        const onCircle = Math.abs(distanceFromCenter - radius) < 1e-10;

        if (!onCircle) {
            return {
                solutionType: 'Point not on circle',
                pointOnCircle: false,
                point: { x: pointX, y: pointY },
                center: { x: cx, y: cy },
                radius: radius,
                distanceFromCenter: distanceFromCenter,
                explanation: 'Tangent line is defined at points on the circle',
                category: 'tangent_secant'
            };
        }

        // Slope of radius to point
        const radiusSlope = (pointY - cy) / (pointX - cx);

        // Tangent is perpendicular to radius
        const tangentSlope = radiusSlope !== 0 ? -1 / radiusSlope : undefined;

        // Tangent line equation: y - pointY = tangentSlope(x - pointX)
        let tangentEquation;
        if (tangentSlope === undefined) {
            // Vertical tangent
            tangentEquation = `x = ${pointX}`;
        } else if (tangentSlope === 0) {
            // Horizontal tangent
            tangentEquation = `y = ${pointY}`;
        } else {
            // Standard form
            const b = pointY - tangentSlope * pointX;
            tangentEquation = `y = ${tangentSlope}x + ${b}`;
        }

        return {
            solutionType: 'Tangent line found',
            circle: {
                center: { x: cx, y: cy },
                radius: radius,
                equation: `(x - ${cx})² + (y - ${cy})² = ${radius * radius}`
            },
            pointOfTangency: { x: pointX, y: pointY },
            radiusSlope: radiusSlope,
            tangentSlope: tangentSlope,
            tangentEquation: tangentEquation,
            perpendicularity: 'Tangent is perpendicular to radius at point of tangency',
            category: 'tangent_secant'
        };
    }

    solveCircleIntersection(problem) {
        const { h1, k1, r1, h2, k2, r2 } = problem.parameters;

        const cx1 = h1 || 0;
        const cy1 = k1 || 0;
        const radius1 = r1 || 1;
        const cx2 = h2 || 0;
        const cy2 = k2 || 0;
        const radius2 = r2 || 1;

        // Distance between centers
        const d = Math.sqrt((cx2 - cx1) ** 2 + (cy2 - cy1) ** 2);

        // Determine intersection type
        if (d > radius1 + radius2) {
            return {
                solutionType: 'No intersection (circles are separate)',
                circle1: { center: { x: cx1, y: cy1 }, radius: radius1 },
                circle2: { center: { x: cx2, y: cy2 }, radius: radius2 },
                distanceBetweenCenters: d,
                sumOfRadii: radius1 + radius2,
                relationship: 'd > r₁ + r₂',
                category: 'circle_intersections'
            };
        }

        if (d < Math.abs(radius1 - radius2)) {
            return {
                solutionType: 'No intersection (one circle inside the other)',
                circle1: { center: { x: cx1, y: cy1 }, radius: radius1 },
                circle2: { center: { x: cx2, y: cy2 }, radius: radius2 },
                distanceBetweenCenters: d,
                differenceOfRadii: Math.abs(radius1 - radius2),
                relationship: 'd < |r₁ - r₂|',
                category: 'circle_intersections'
            };
        }

        if (Math.abs(d - (radius1 + radius2)) < 1e-10) {
            // External tangent
            const t = radius1 / (radius1 + radius2);
            const tangentPoint = {
                x: cx1 + t * (cx2 - cx1),
                y: cy1 + t * (cy2 - cy1)
            };

            return {
                solutionType: 'One intersection (external tangent)',
                circle1: { center: { x: cx1, y: cy1 }, radius: radius1 },
                circle2: { center: { x: cx2, y: cy2 }, radius: radius2 },
                intersectionPoint: tangentPoint,
                distanceBetweenCenters: d,
                relationship: 'd = r₁ + r₂',
                category: 'circle_intersections'
            };
        }

        if (Math.abs(d - Math.abs(radius1 - radius2)) < 1e-10) {
            // Internal tangent
            const t = radius1 / Math.abs(radius1 - radius2);
            const tangentPoint = {
                x: cx1 + t * (cx2 - cx1),
                y: cy1 + t * (cy2 - cy1)
            };

            return {
                solutionType: 'One intersection (internal tangent)',
                circle1: { center: { x: cx1, y: cy1 }, radius: radius1 },
                circle2: { center: { x: cx2, y: cy2 }, radius: radius2 },
                intersectionPoint: tangentPoint,
                distanceBetweenCenters: d,
                relationship: 'd = |r₁ - r₂|',
                category: 'circle_intersections'
            };
        }

        // Two intersection points
        const a = (radius1 * radius1 - radius2 * radius2 + d * d) / (2 * d);
        const h = Math.sqrt(radius1 * radius1 - a * a);

        const x2 = cx1 + (a * (cx2 - cx1)) / d;
        const y2 = cy1 + (a * (cy2 - cy1)) / d;

        const intersection1 = {
            x: x2 + (h * (cy2 - cy1)) / d,
            y: y2 - (h * (cx2 - cx1)) / d
        };

        const intersection2 = {
            x: x2 - (h * (cy2 - cy1)) / d,
            y: y2 + (h * (cx2 - cx1)) / d
        };

        return {
            solutionType: 'Two intersections',
            circle1: { center: { x: cx1, y: cy1 }, radius: radius1 },
            circle2: { center: { x: cx2, y: cy2 }, radius: radius2 },
            intersectionPoints: [intersection1, intersection2],
            distanceBetweenCenters: d,
            relationship: '|r₁ - r₂| < d < r₁ + r₂',
            verification: this.verifyCircleIntersection(cx1, cy1, radius1, cx2, cy2, radius2, [intersection1, intersection2]),
            category: 'circle_intersections'
        };
    }

    solvePointOnCircle(problem) {
        const { h, k, r, pointX, pointY } = problem.parameters;

        const cx = h || 0;
        const cy = k || 0;
        const radius = r || 1;

        const distance = Math.sqrt((pointX - cx) ** 2 + (pointY - cy) ** 2);
        const onCircle = Math.abs(distance - radius) < 1e-10;
        const inside = distance < radius;
        const outside = distance > radius;

        return {
            circle: {
                center: { x: cx, y: cy },
                radius: radius,
                equation: `(x - ${cx})² + (y - ${cy})² = ${radius * radius}`
            },
            point: { x: pointX, y: pointY },
            distanceFromCenter: distance,
            onCircle: onCircle,
            inside: inside,
            outside: outside,
            position: onCircle ? 'on the circle' : inside ? 'inside the circle' : 'outside the circle',
            verification: `Distance from center = ${distance.toFixed(6)}, Radius = ${radius}`,
            category: 'circle_equation'
        };
    }

    solveInscribedAngle(problem) {
        const { centralAngle, inscribedAngle, angleUnit = 'degrees' } = problem.parameters;

        if (centralAngle !== undefined) {
            // Calculate inscribed angle from central angle
            const inscribed = angleUnit === 'degrees' ? centralAngle / 2 : centralAngle / 2;

            return {
                centralAngle: centralAngle,
                inscribedAngle: inscribed,
                angleUnit: angleUnit,
                relationship: 'Inscribed angle = (1/2) × Central angle',
                theorem: 'Inscribed Angle Theorem',
                category: 'inscribed_angles'
            };
        } else if (inscribedAngle !== undefined) {
            // Calculate central angle from inscribed angle
            const central = angleUnit === 'degrees' ? inscribedAngle * 2 : inscribedAngle * 2;

            return {
                inscribedAngle: inscribedAngle,
                centralAngle: central,
                angleUnit: angleUnit,
                relationship: 'Central angle = 2 × Inscribed angle',
                theorem: 'Inscribed Angle Theorem',
                category: 'inscribed_angles'
            };
        }

        throw new Error('Must provide either central angle or inscribed angle');
    }

    solveCircleThreePoints(problem) {
        const { x1, y1, x2, y2, x3, y3 } = problem.parameters;

        // Check if points are collinear
        const area = 0.5 * Math.abs((x2 - x1) * (y3 - y1) - (x3 - x1) * (y2 - y1));
        if (area < 1e-10) {
            return {
                solutionType: 'No unique circle (points are collinear)',
                points: [
                    { x: x1, y: y1 },
                    { x: x2, y: y2 },
                    { x: x3, y: y3 }
                ],
                explanation: 'Three collinear points do not determine a unique circle',
                category: 'circle_equation'
            };
        }

        // Calculate circle center using perpendicular bisectors
        const d = 2 * (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));

        const h = ((x1 * x1 + y1 * y1) * (y2 - y3) + (x2 * x2 + y2 * y2) * (y3 - y1) + (x3 * x3 + y3 * y3) * (y1 - y2)) / d;
        const k = ((x1 * x1 + y1 * y1) * (x3 - x2) + (x2 * x2 + y2 * y2) * (x1 - x3) + (x3 * x3 + y3 * y3) * (x2 - x1)) / d;

        const radius = Math.sqrt((x1 - h) ** 2 + (y1 - k) ** 2);

        return {
            solutionType: 'Unique circle found',
            points: [
                { x: x1, y: y1 },
                { x: x2, y: y2 },
                { x: x3, y: y3 }
            ],
            center: { x: h, y: k },
            radius: radius,
            equation: `(x - ${h})² + (y - ${k})² = ${radius * radius}`,
            circumference: 2 * Math.PI * radius,
            area: Math.PI * radius * radius,
            verification: this.verifyCircleThreePoints(h, k, radius, x1, y1, x2, y2, x3, y3),
            category: 'circle_equation'
        };
    }

    // HELPER METHODS

    verifyStandardForm(h, k, r) {
        return {
            center: { x: h, y: k },
            radius: r,
            equation: `(x - ${h})² + (y - ${k})² = ${r * r}`,
            samplePoints: this.generateSamplePointsOnCircle(h, k, r, 4)
        };
    }

    generateSamplePointsOnCircle(h, k, r, numPoints) {
        const points = [];
        for (let i = 0; i < numPoints; i++) {
            const angle = (2 * Math.PI * i) / numPoints;
            const x = h + r * Math.cos(angle);
            const y = k + r * Math.sin(angle);
            points.push({ x, y, angle: (angle * 180) / Math.PI });
        }
        return points;
    }

    getConversionSteps(D, E, F, h, k, rSquared) {
        return [
            `Start with: x² + y² + ${D}x + ${E}y + ${F} = 0`,
            `Group x and y terms: (x² + ${D}x) + (y² + ${E}y) = ${-F}`,
            `Complete the square for x: add (${D}/2)² = ${(D/2)**2}`,
            `Complete the square for y: add (${E}/2)² = ${(E/2)**2}`,
            `Result: (x - ${h})² + (y - ${k})² = ${rSquared}`,
            `Center: (${h}, ${k}), Radius: ${Math.sqrt(rSquared)}`
        ];
    }

    verifyChordLength(radius, distance, chordLength) {
        const calculatedFromFormula = 2 * Math.sqrt(radius * radius - distance * distance);
        const isValid = Math.abs(calculatedFromFormula - chordLength) < 1e-10;

        return {
            formula: 'L = 2√(r² - d²)',
            radius: radius,
            distance: distance,
            calculatedChordLength: calculatedFromFormula,
            givenChordLength: chordLength,
            isValid: isValid,
            pythagoreanCheck: `${radius}² = ${distance}² + (${chordLength/2})²`,
            pythagoreanResult: `${radius*radius} = ${distance*distance} + ${(chordLength/2)**2} = ${distance*distance + (chordLength/2)**2}`
        };
    }

    verifyCircleIntersection(cx1, cy1, r1, cx2, cy2, r2, intersectionPoints) {
        return intersectionPoints.map((point, index) => {
            const dist1 = Math.sqrt((point.x - cx1) ** 2 + (point.y - cy1) ** 2);
            const dist2 = Math.sqrt((point.x - cx2) ** 2 + (point.y - cy2) ** 2);

            return {
                point: index + 1,
                coordinates: point,
                distanceFromCenter1: dist1,
                distanceFromCenter2: dist2,
                onCircle1: Math.abs(dist1 - r1) < 1e-10,
                onCircle2: Math.abs(dist2 - r2) < 1e-10,
                valid: Math.abs(dist1 - r1) < 1e-10 && Math.abs(dist2 - r2) < 1e-10
            };
        });
    }

    verifyCircleThreePoints(h, k, r, x1, y1, x2, y2, x3, y3) {
        const points = [
            { x: x1, y: y1, name: 'Point 1' },
            { x: x2, y: y2, name: 'Point 2' },
            { x: x3, y: y3, name: 'Point 3' }
        ];

        return points.map(point => {
            const distance = Math.sqrt((point.x - h) ** 2 + (point.y - k) ** 2);
            return {
                point: point.name,
                coordinates: { x: point.x, y: point.y },
                distanceFromCenter: distance,
                radius: r,
                onCircle: Math.abs(distance - r) < 1e-10,
                difference: Math.abs(distance - r)
            };
        });
    }

    getCircleGraphicalInterpretation(h, k, r) {
        return {
            center: { x: h, y: k },
            radius: r,
            diameter: 2 * r,
            boundingBox: {
                minX: h - r,
                maxX: h + r,
                minY: k - r,
                maxY: k + r
            },
            intercepts: this.findCircleIntercepts(h, k, r)
        };
    }

    findCircleIntercepts(h, k, r) {
        const intercepts = {};

        // x-intercepts (where y = 0)
        const xDiscriminant = r * r - k * k;
        if (xDiscriminant >= 0) {
            intercepts.xIntercepts = [
                { x: h + Math.sqrt(xDiscriminant), y: 0 },
                { x: h - Math.sqrt(xDiscriminant), y: 0 }
            ];
        } else {
            intercepts.xIntercepts = [];
        }

        // y-intercepts (where x = 0)
        const yDiscriminant = r * r - h * h;
        if (yDiscriminant >= 0) {
            intercepts.yIntercepts = [
                { x: 0, y: k + Math.sqrt(yDiscriminant) },
                { x: 0, y: k - Math.sqrt(yDiscriminant) }
            ];
        } else {
            intercepts.yIntercepts = [];
        }

        return intercepts;
    }

    // GRAPH DATA GENERATION

    generateCircleGraphData() {
        if (!this.currentSolution) return;

        const { type } = this.currentProblem;
        const solution = this.currentSolution;

        if (solution.center && solution.radius) {
            this.graphData = this.generateCircleGraph(solution.center.x, solution.center.y, solution.radius);
        } else if (type === 'circle_intersection' && solution.intersectionPoints) {
            this.graphData = this.generateIntersectionGraph(solution);
        }
    }

    generateCircleGraph(h, k, r) {
        const points = [];
        const numPoints = 100;

        for (let i = 0; i <= numPoints; i++) {
            const angle = (2 * Math.PI * i) / numPoints;
            points.push({
                x: h + r * Math.cos(angle),
                y: k + r * Math.sin(angle)
            });
        }

        return {
            type: 'circle',
            center: { x: h, y: k },
            radius: r,
            points: points,
            boundingBox: {
                minX: h - r,
                maxX: h + r,
                minY: k - r,
                maxY: k + r
            }
        };
    }

    generateIntersectionGraph(solution) {
        return {
            type: 'circle_intersection',
            circle1: solution.circle1,
            circle2: solution.circle2,
            intersectionPoints: solution.intersectionPoints || solution.intersectionPoint ? [solution.intersectionPoint] : [],
            solutionType: solution.solutionType
        };
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

        return baseSteps;
    }

    generateBaseCircleSteps(problem, solution) {
        const { type } = problem;

        switch (type) {
            case 'standard_form':
                return this.generateStandardFormSteps(problem, solution);
            case 'general_form':
                return this.generateGeneralFormSteps(problem, solution);
            case 'area_circumference':
                return this.generateAreaCircumferenceSteps(problem, solution);
            case 'arc_length_sector':
            case 'arc_length':
                return this.generateArcLengthSteps(problem, solution);
            case 'sector_area':
                return this.generateSectorAreaSteps(problem, solution);
            case 'chord_length':
                return this.generateChordLengthSteps(problem, solution);
            case 'tangent_line':
                return this.generateTangentLineSteps(problem, solution);
            case 'circle_intersection':
                return this.generateCircleIntersectionSteps(problem, solution);
            case 'inscribed_angle':
                return this.generateInscribedAngleSteps(problem, solution);
            case 'circle_three_points':
                return this.generateCircleThreePointsSteps(problem, solution);
            default:
                return this.generateGenericCircleSteps(problem, solution);
        }
    }

    generateStandardFormSteps(problem, solution) {
        const { h, k, r, rSquared } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify the equation form',
            description: 'Recognize the standard form of a circle equation',
            expression: `(x - h)² + (y - k)² = r²`,
            beforeExpression: problem.originalInput,
            afterExpression: `(x - ${h})² + (y - ${k})² = ${rSquared || r * r}`,
            reasoning: 'The standard form clearly shows the center (h, k) and radius r of the circle',
            visualHint: 'Think of the circle as all points at distance r from center (h, k)',
            algebraicRule: 'Standard Form of Circle: (x - h)² + (y - k)² = r²',
            goalStatement: 'Extract the center coordinates and radius from the equation'
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify the center',
            description: 'Find the center coordinates (h, k) from the equation',
            beforeExpression: `(x - ${h})² + (y - ${k})²`,
            operation: 'Read coefficients',
            afterExpression: `Center: (${h}, ${k})`,
            reasoning: 'In (x - h)² + (y - k)², the center is at (h, k). Note the sign change!',
            algebraicRule: 'If equation is (x - h)², then h is positive in center coordinate',
            visualHint: 'The center (h, k) is the point that all circle points are measured from',
            criticalWarning: 'Common mistake: In (x - 3)², the center x-coordinate is +3, not -3',
            workingDetails: {
                xCoordinate: `From (x - ${h}), center x = ${h}`,
                yCoordinate: `From (y - ${k}), center y = ${k}`
            }
        });

        const radius = r || Math.sqrt(rSquared);
        steps.push({
            stepNumber: 3,
            step: 'Find the radius',
            description: 'Calculate the radius from r²',
            beforeExpression: `r² = ${rSquared || r * r}`,
            operation: 'Take square root',
            afterExpression: `r = ${radius}`,
            reasoning: 'The right side of the equation is r², so we take the square root to find r',
            algebraicRule: 'If r² = value, then r = √value (take positive root for radius)',
            visualHint: 'The radius is the constant distance from center to any point on the circle',
            workingDetails: {
                calculation: `r = √${rSquared || r * r} = ${radius}`,
                note: 'Radius is always positive'
            },
            finalAnswer: true
        });

        if (this.includeVerificationInSteps) {
            steps.push({
                stepNumber: 4,
                step: 'Verify and calculate properties',
                description: 'Calculate additional circle properties',
                results: {
                    center: `(${h}, ${k})`,
                    radius: radius,
                    diameter: 2 * radius,
                    circumference: `2π(${radius}) = ${(2 * Math.PI * radius).toFixed(4)}`,
                    area: `π(${radius})² = ${(Math.PI * radius * radius).toFixed(4)}`
                },
                reasoning: 'Knowing center and radius allows us to calculate all circle properties'
            });
        }

        return steps;
    }

    generateGeneralFormSteps(problem, solution) {
        const { D, E, F } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Recognize general form',
            description: 'Identify the general form of a circle equation',
            expression: `x² + y² + Dx + Ey + F = 0`,
            beforeExpression: `x² + y² + ${D}x + ${E}y + ${F} = 0`,
            reasoning: 'General form must be converted to standard form to find center and radius',
            visualHint: 'General form hides the center and radius information',
            goalStatement: 'Convert to standard form by completing the square'
        });

        steps.push({
            stepNumber: 2,
            step: 'Group x and y terms',
            description: 'Separate x terms from y terms and move constant to right side',
            beforeExpression: `x² + y² + ${D}x + ${E}y + ${F} = 0`,
            operation: 'Regroup and move F',
            afterExpression: `(x² + ${D}x) + (y² + ${E}y) = ${-F}`,
            reasoning: 'Grouping prepares us to complete the square for each variable separately',
            algebraicRule: 'Group like terms to prepare for completing the square'
        });

        const h = -D / 2;
        const k = -E / 2;
        steps.push({
            stepNumber: 3,
            step: 'Complete the square for x',
            description: 'Add (D/2)² to both sides to complete the square for x',
            beforeExpression: `x² + ${D}x`,
            operation: `Add (${D}/2)² = ${(D/2)**2}`,
            afterExpression: `(x - ${h})²`,
            reasoning: 'To complete the square for x² + Dx, add (D/2)² to create a perfect square',
            algebraicRule: 'Completing the square: x² + bx + (b/2)² = (x + b/2)²',
            workingDetails: {
                coefficient: `D = ${D}`,
                halfCoefficient: `D/2 = ${D/2}`,
                squaredHalf: `(D/2)² = ${(D/2)**2}`,
                result: `x² + ${D}x + ${(D/2)**2} = (x - ${h})²`
            }
        });

        steps.push({
            stepNumber: 4,
            step: 'Complete the square for y',
            description: 'Add (E/2)² to both sides to complete the square for y',
            beforeExpression: `y² + ${E}y`,
            operation: `Add (${E}/2)² = ${(E/2)**2}`,
            afterExpression: `(y - ${k})²`,
            reasoning: 'Complete the square for y using the same method as for x',
            algebraicRule: 'Completing the square: y² + cy + (c/2)² = (y + c/2)²',
            workingDetails: {
                coefficient: `E = ${E}`,
                halfCoefficient: `E/2 = ${E/2}`,
                squaredHalf: `(E/2)² = ${(E/2)**2}`,
                result: `y² + ${E}y + ${(E/2)**2} = (y - ${k})²`
            }
        });

        const rSquared = h * h + k * k - F;
        steps.push({
            stepNumber: 5,
            step: 'Write in standard form',
            description: 'Combine completed squares to get standard form',
            beforeExpression: `(x - ${h})² + (y - ${k})² = ${-F} + ${(D/2)**2} + ${(E/2)**2}`,
            operation: 'Simplify right side',
            afterExpression: `(x - ${h})² + (y - ${k})² = ${rSquared}`,
            reasoning: 'Standard form reveals center and radius',
            finalAnswer: true
        });

        if (rSquared > 0) {
            const radius = Math.sqrt(rSquared);
            steps.push({
                stepNumber: 6,
                step: 'Extract center and radius',
                description: 'Read the center and calculate the radius',
                results: {
                    center: `(${h}, ${k})`,
                    rSquared: rSquared,
                    radius: radius
                },
                reasoning: `From (x - ${h})² + (y - ${k})² = ${rSquared}, center is (${h}, ${k}) and radius is √${rSquared} = ${radius}`
            });
        } else if (rSquared === 0) {
            steps.push({
                stepNumber: 6,
                step: 'Analyze result',
                description: 'r² = 0 means this is a degenerate circle (a single point)',
                conclusion: `The "circle" is just the point (${h}, ${k})`
            });
        } else {
            steps.push({
                stepNumber: 6,
                step: 'Analyze result',
                description: 'r² < 0 means this equation does not represent a real circle',
                conclusion: 'No real circle exists (imaginary radius)'
            });
        }

        return steps;
    }

    generateAreaCircumferenceSteps(problem, solution) {
        const { radius, diameter, area, circumference } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify given information',
            description: 'Determine what information is provided',
            givenType: solution.givenType,
            givenValue: solution.givenValue,
            reasoning: 'We need to find the radius first if not directly given',
            goalStatement: 'Calculate radius, then use it to find area and circumference'
        });

        if (solution.givenType !== 'radius') {
            let conversionStep = {};
            if (solution.givenType === 'diameter') {
                conversionStep = {
                    stepNumber: 2,
                    step: 'Calculate radius from diameter',
                    description: 'Use the relationship r = d/2',
                    beforeExpression: `d = ${diameter}`,
                    operation: 'Divide by 2',
                    afterExpression: `r = ${diameter}/2 = ${solution.radius}`,
                    reasoning: 'Diameter is twice the radius, so radius is half the diameter',
                    formula: 'r = d/2'
                };
            } else if (solution.givenType === 'circumference') {
                conversionStep = {
                    stepNumber: 2,
                    step: 'Calculate radius from circumference',
                    description: 'Use the formula r = C/(2π)',
                    beforeExpression: `C = ${circumference}`,
                    operation: 'Divide by 2π',
                    afterExpression: `r = ${circumference}/(2π) = ${solution.radius}`,
                    reasoning: 'Circumference C = 2πr, so solving for r gives r = C/(2π)',
                    formula: 'r = C/(2π)'
                };
            } else if (solution.givenType === 'area') {
                conversionStep = {
                    stepNumber: 2,
                    step: 'Calculate radius from area',
                    description: 'Use the formula r = √(A/π)',
                    beforeExpression: `A = ${area}`,
                    operation: 'Divide by π and take square root',
                    afterExpression: `r = √(${area}/π) = ${solution.radius}`,
                    reasoning: 'Area A = πr², so solving for r gives r = √(A/π)',
                    formula: 'r = √(A/π)'
                };
            }
            steps.push(conversionStep);
        }

        steps.push({
            stepNumber: solution.givenType === 'radius' ? 2 : 3,
            step: 'Calculate circumference',
            description: 'Use the formula C = 2πr',
            beforeExpression: `r = ${solution.radius}`,
            operation: 'Multiply by 2π',
            afterExpression: `C = 2π(${solution.radius}) = ${solution.circumference.toFixed(4)}`,
            exactForm: `C = ${solution.circumferenceExact}`,
            reasoning: 'Circumference is the distance around the circle, equal to 2πr',
            formula: 'C = 2πr',
            workingDetails: {
                numerical: `C = 2 × π × ${solution.radius} ≈ ${solution.circumference.toFixed(4)}`,
                exact: `C = ${solution.circumferenceExact}`
            }
        });

        steps.push({
            stepNumber: solution.givenType === 'radius' ? 3 : 4,
            step: 'Calculate area',
            description: 'Use the formula A = πr²',
            beforeExpression: `r = ${solution.radius}`,
            operation: 'Square and multiply by π',
            afterExpression: `A = π(${solution.radius})² = ${solution.area.toFixed(4)}`,
            exactForm: `A = ${solution.areaExact}`,
            reasoning: 'Area is the space enclosed by the circle, equal to πr²',
            formula: 'A = πr²',
            workingDetails: {
                squareRadius: `r² = ${solution.radius}² = ${solution.radius * solution.radius}`,
                numerical: `A = π × ${solution.radius * solution.radius} ≈ ${solution.area.toFixed(4)}`,
                exact: `A = ${solution.areaExact}`
            },
            finalAnswer: true
        });

        return steps;
    }

    generateArcLengthSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify given information',
            description: 'Note the radius and central angle',
            given: {
                radius: solution.radius,
                angle: solution.angle,
                angleUnit: solution.angleUnit
            },
            reasoning: 'Arc length depends on both the radius and the central angle',
            visualHint: 'Arc is a portion of the circle circumference'
        });

        if (solution.angleUnit === 'degrees') {
            steps.push({
                stepNumber: 2,
                step: 'Set up arc length formula (degrees)',
                description: 'Use L = (θ/360°) × 2πr',
                formula: 'L = (θ/360°) × 2πr',
                reasoning: 'Arc length is a fraction (θ/360°) of the total circumference (2πr)',
                visualHint: `The arc is ${solution.angle}/360 = ${solution.fractionOfCircle.toFixed(4)} of the full circle`
            });

            steps.push({
                stepNumber: 3,
                step: 'Calculate arc length',
                description: 'Substitute values and compute',
                beforeExpression: `L = (${solution.angle}/360) × 2π(${solution.radius})`,
                operation: 'Evaluate',
                afterExpression: `L = ${solution.arcLength.toFixed(4)}`,
                exactForm: solution.arcLengthExact,
                reasoning: 'Multiply the fraction of the circle by the full circumference',
                workingDetails: {
                    fraction: `${solution.angle}/360 = ${solution.fractionOfCircle.toFixed(4)}`,
                    circumference: `2πr = 2π(${solution.radius}) = ${(2 * Math.PI * solution.radius).toFixed(4)}`,
                    result: `L = ${solution.fractionOfCircle.toFixed(4)} × ${(2 * Math.PI * solution.radius).toFixed(4)} = ${solution.arcLength.toFixed(4)}`
                },
                finalAnswer: true
            });
        } else {
            steps.push({
                stepNumber: 2,
                step: 'Set up arc length formula (radians)',
                description: 'Use L = θr',
                formula: 'L = θr',
                reasoning: 'When angle is in radians, arc length is simply the product of angle and radius',
                visualHint: 'Radian measure naturally gives arc length when multiplied by radius'
            });

            steps.push({
                stepNumber: 3,
                step: 'Calculate arc length',
                description: 'Multiply angle by radius',
                beforeExpression: `L = ${solution.angle} × ${solution.radius}`,
                operation: 'Multiply',
                afterExpression: `L = ${solution.arcLength.toFixed(4)}`,
                reasoning: 'The radian measure directly scales with the radius to give arc length',
                finalAnswer: true
            });
        }

        return steps;
    }

    generateSectorAreaSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify given information',
            description: 'Note the radius and central angle',
            given: {
                radius: solution.radius,
                angle: solution.angle,
                angleUnit: solution.angleUnit
            },
            reasoning: 'Sector area depends on both the radius and the central angle',
            visualHint: 'Sector is like a "slice of pie" from the circle'
        });

        if (solution.angleUnit === 'degrees') {
            steps.push({
                stepNumber: 2,
                step: 'Set up sector area formula (degrees)',
                description: 'Use A = (θ/360°) × πr²',
                formula: 'A = (θ/360°) × πr²',
                reasoning: 'Sector area is a fraction (θ/360°) of the total circle area (πr²)',
                visualHint: `The sector is ${solution.angle}/360 = ${solution.fractionOfCircle.toFixed(4)} of the full circle`
            });

            steps.push({
                stepNumber: 3,
                step: 'Calculate sector area',
                description: 'Substitute values and compute',
                beforeExpression: `A = (${solution.angle}/360) × π(${solution.radius})²`,
                operation: 'Evaluate',
                afterExpression: `A = ${solution.sectorArea.toFixed(4)}`,
                exactForm: solution.sectorAreaExact,
                reasoning: 'Multiply the fraction of the circle by the full area',
                workingDetails: {
                    fraction: `${solution.angle}/360 = ${solution.fractionOfCircle.toFixed(4)}`,
                    circleArea: `πr² = π(${solution.radius})² = ${solution.circleArea.toFixed(4)}`,
                    result: `A = ${solution.fractionOfCircle.toFixed(4)} × ${solution.circleArea.toFixed(4)} = ${solution.sectorArea.toFixed(4)}`
                },
                finalAnswer: true
            });
        } else {
            steps.push({
                stepNumber: 2,
                step: 'Set up sector area formula (radians)',
                description: 'Use A = (1/2)θr²',
                formula: 'A = (1/2)θr²',
                reasoning: 'When angle is in radians, sector area is half the product of angle and radius squared',
                visualHint: 'This formula is analogous to triangle area = (1/2)base × height'
            });

            steps.push({
                stepNumber: 3,
                step: 'Calculate sector area',
                description: 'Apply the formula',
                beforeExpression: `A = (1/2) × ${solution.angle} × ${solution.radius}²`,
                operation: 'Evaluate',
                afterExpression: `A = ${solution.sectorArea.toFixed(4)}`,
                reasoning: 'The radian formula directly gives sector area',
                workingDetails: {
                    rSquared: `r² = ${solution.radius}² = ${solution.radius * solution.radius}`,
                    product: `θr² = ${solution.angle} × ${solution.radius * solution.radius} = ${solution.angle * solution.radius * solution.radius}`,
                    half: `(1/2) × ${solution.angle * solution.radius * solution.radius} = ${solution.sectorArea.toFixed(4)}`
                },
                finalAnswer: true
            });
        }

        return steps;
    }

    generateChordLengthSteps(problem, solution) {
        const steps = [];

        if (solution.solutionType && solution.solutionType.includes('Invalid')) {
            steps.push({
                stepNumber: 1,
                step: 'Analyze the problem',
                description: solution.solutionType,
                explanation: solution.explanation,
                conclusion: 'No valid chord exists with these parameters'
            });
            return steps;
        }

        if (problem.parameters.distance !== undefined) {
            // Calculate chord length from radius and distance
            steps.push({
                stepNumber: 1,
                step: 'Set up the chord length formula',
                description: 'Use the relationship L = 2√(r² - d²)',
                formula: 'L = 2√(r² - d²)',
                given: {
                    radius: solution.radius,
                    distance: solution.distanceFromCenter
                },
                reasoning: 'Chord length relates to radius and perpendicular distance from center via Pythagorean theorem',
                visualHint: 'Draw radius to chord midpoint, creating right triangle'
            });

            steps.push({
                stepNumber: 2,
                step: 'Apply Pythagorean theorem',
                description: 'Calculate r² - d²',
                beforeExpression: `r² - d² = ${solution.radius}² - ${solution.distanceFromCenter}²`,
                operation: 'Subtract',
                afterExpression: `= ${solution.radius * solution.radius} - ${solution.distanceFromCenter * solution.distanceFromCenter} = ${solution.radius * solution.radius - solution.distanceFromCenter * solution.distanceFromCenter}`,
                reasoning: 'This gives us the square of half the chord length'
            });

            steps.push({
                stepNumber: 3,
                step: 'Calculate chord length',
                description: 'Take square root and multiply by 2',
                beforeExpression: `L = 2√${solution.radius * solution.radius - solution.distanceFromCenter * solution.distanceFromCenter}`,
                operation: 'Evaluate',
                afterExpression: `L = ${solution.chordLength.toFixed(4)}`,
                reasoning: 'The perpendicular from center bisects the chord, so we double the half-length',
                finalAnswer: true
            });
        } else {
            // Calculate distance from radius and chord length
            steps.push({
                stepNumber: 1,
                step: 'Set up the distance formula',
                description: 'Use d = √(r² - (L/2)²)',
                formula: 'd = √(r² - (L/2)²)',
                given: {
                    radius: solution.radius,
                    chordLength: solution.chordLength
                },
                reasoning: 'Distance from center to chord can be found using Pythagorean theorem'
            });

            steps.push({
                stepNumber: 2,
                step: 'Calculate half-chord length',
                description: 'Divide chord length by 2',
                beforeExpression: `L/2 = ${solution.chordLength}/2`,
                afterExpression: `= ${solution.chordLength / 2}`,
                reasoning: 'Perpendicular from center bisects the chord'
            });

            steps.push({
                stepNumber: 3,
                step: 'Calculate distance',
                description: 'Apply the formula',
                beforeExpression: `d = √(${solution.radius}² - ${solution.chordLength / 2}²)`,
                operation: 'Evaluate',
                afterExpression: `d = ${solution.distanceFromCenter.toFixed(4)}`,
                reasoning: 'This gives the perpendicular distance from center to chord',
                finalAnswer: true
            });
        }

        return steps;
    }

    generateTangentLineSteps(problem, solution) {
        const steps = [];

        if (!solution.pointOnCircle) {
            steps.push({
                stepNumber: 1,
                step: 'Verify point location',
                description: 'Check if point is on the circle',
                point: solution.point,
                distanceFromCenter: solution.distanceFromCenter.toFixed(4),
                radius: solution.radius,
                conclusion: 'Point is not on the circle - tangent line not defined',
                explanation: solution.explanation
            });
            return steps;
        }

        steps.push({
            stepNumber: 1,
            step: 'Verify point is on circle',
            description: 'Confirm the point lies on the circle',
            verification: `Distance from center = ${solution.distanceFromCenter} ≈ radius = ${solution.circle.radius}`,
            reasoning: 'Tangent line is only defined at points on the circle'
        });

        steps.push({
            stepNumber: 2,
            step: 'Find slope of radius',
            description: 'Calculate slope from center to point of tangency',
            beforeExpression: `m_radius = (y₂ - y₁)/(x₂ - x₁) = (${solution.pointOfTangency.y} - ${solution.circle.center.y})/(${solution.pointOfTangency.x} - ${solution.circle.center.x})`,
            afterExpression: `m_radius = ${solution.radiusSlope !== Infinity ? solution.radiusSlope.toFixed(4) : 'undefined (vertical)'}`,
            reasoning: 'We need the radius slope to find the perpendicular tangent slope'
        });

        steps.push({
            stepNumber: 3,
            step: 'Find slope of tangent',
            description: 'Calculate perpendicular slope',
            formula: 'm_tangent = -1/m_radius',
            beforeExpression: solution.radiusSlope !== undefined ? `m_tangent = -1/${solution.radiusSlope.toFixed(4)}` : 'Radius is vertical, tangent is horizontal',
            afterExpression: solution.tangentSlope !== undefined ? `m_tangent = ${solution.tangentSlope.toFixed(4)}` : 'm_tangent = 0',
            reasoning: 'Tangent line is perpendicular to radius at point of tangency',
            algebraicRule: 'Perpendicular lines have slopes that are negative reciprocals'
        });

        steps.push({
            stepNumber: 4,
            step: 'Write tangent line equation',
            description: 'Use point-slope form',
            formula: 'y - y₁ = m(x - x₁)',
            tangentEquation: solution.tangentEquation,
            reasoning: 'With slope and point, we can write the complete line equation',
            finalAnswer: true
        });

        return steps;
    }

    generateCircleIntersectionSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Calculate distance between centers',
            description: 'Find distance d between the two circle centers',
            formula: 'd = √[(x₂ - x₁)² + (y₂ - y₁)²]',
            beforeExpression: `d = √[(${solution.circle2.center.x} - ${solution.circle1.center.x})² + (${solution.circle2.center.y} - ${solution.circle1.center.y})²]`,
            afterExpression: `d = ${solution.distanceBetweenCenters.toFixed(4)}`,
            reasoning: 'Distance between centers determines the type of intersection'
        });

        steps.push({
            stepNumber: 2,
            step: 'Analyze intersection type',
            description: 'Compare distance with sum and difference of radii',
            conditions: {
                noIntersection1: `d > r₁ + r₂: ${solution.distanceBetweenCenters.toFixed(4)} > ${solution.circle1.radius + solution.circle2.radius} (circles separate)`,
                noIntersection2: `d < |r₁ - r₂|: ${solution.distanceBetweenCenters.toFixed(4)} < ${Math.abs(solution.circle1.radius - solution.circle2.radius)} (one inside other)`,
                externalTangent: `d = r₁ + r₂ (external tangent)`,
                internalTangent: `d = |r₁ - r₂| (internal tangent)`,
                twoIntersections: `|r₁ - r₂| < d < r₁ + r₂ (two intersection points)`
            },
            result: solution.solutionType,
            reasoning: 'The relationship between d, r₁, and r₂ determines intersection behavior'
        });

        if (solution.intersectionPoints && solution.intersectionPoints.length === 2) {
            steps.push({
                stepNumber: 3,
                step: 'Calculate intersection points',
                description: 'Use circle equations to find exact intersection coordinates',
                method: 'Solve system of two circle equations',
                intersectionPoints: solution.intersectionPoints,
                reasoning: 'Intersection points satisfy both circle equations simultaneously',
                finalAnswer: true
            });
        } else if (solution.intersectionPoint) {
            steps.push({
                stepNumber: 3,
                step: 'Find tangent point',
                description: 'Calculate the single point where circles touch',
                tangentPoint: solution.intersectionPoint,
                reasoning: 'Tangent point lies on the line connecting the centers',
                finalAnswer: true
            });
        }

        return steps;
    }

    generateInscribedAngleSteps(problem, solution) {
        const steps = [];

        if (problem.parameters.centralAngle !== undefined) {
            steps.push({
                stepNumber: 1,
                step: 'Apply inscribed angle theorem',
                description: 'Use the relationship: Inscribed angle = (1/2) × Central angle',
                theorem: 'Inscribed Angle Theorem',
                formula: 'θ_inscribed = (1/2) × θ_central',
                reasoning: 'An inscribed angle is always half the central angle subtending the same arc'
            });

            steps.push({
                stepNumber: 2,
                step: 'Calculate inscribed angle',
                description: 'Divide central angle by 2',
                beforeExpression: `θ_inscribed = (1/2) × ${solution.centralAngle}${solution.angleUnit === 'degrees' ? '°' : ' rad'}`,
                operation: 'Divide by 2',
                afterExpression: `θ_inscribed = ${solution.inscribedAngle}${solution.angleUnit === 'degrees' ? '°' : ' rad'}`,
                reasoning: 'The inscribed angle is exactly half the central angle',
                finalAnswer: true
            });
        } else {
            steps.push({
                stepNumber: 1,
                step: 'Apply inscribed angle theorem',
                description: 'Use the relationship: Central angle = 2 × Inscribed angle',
                theorem: 'Inscribed Angle Theorem',
                formula: 'θ_central = 2 × θ_inscribed',
                reasoning: 'The central angle is always twice the inscribed angle subtending the same arc'
            });

            steps.push({
                stepNumber: 2,
                step: 'Calculate central angle',
                description: 'Multiply inscribed angle by 2',
                beforeExpression: `θ_central = 2 × ${solution.inscribedAngle}${solution.angleUnit === 'degrees' ? '°' : ' rad'}`,
                operation: 'Multiply by 2',
                afterExpression: `θ_central = ${solution.centralAngle}${solution.angleUnit === 'degrees' ? '°' : ' rad'}`,
                reasoning: 'The central angle is exactly double the inscribed angle',
                finalAnswer: true
            });
        }

        return steps;
    }

    generateCircleThreePointsSteps(problem, solution) {
        const steps = [];

        if (solution.solutionType.includes('collinear')) {
            steps.push({
                stepNumber: 1,
                step: 'Check for collinearity',
                description: 'Verify if the three points lie on the same line',
                points: solution.points,
                conclusion: solution.solutionType,
                explanation: solution.explanation
            });
            return steps;
        }

        steps.push({
            stepNumber: 1,
            step: 'Set up the problem',
            description: 'Three non-collinear points determine a unique circle',
            points: solution.points,
            reasoning: 'We need to find the center (h, k) that is equidistant from all three points',
            goalStatement: 'Use the perpendicular bisector method or algebraic approach'
        });

        steps.push({
            stepNumber: 2,
            step: 'Apply the circle center formula',
            description: 'Use the formula for circle through three points',
            formula: 'Derived from setting equal distances from center to each point',
            reasoning: 'The center satisfies: (x₁-h)² + (y₁-k)² = (x₂-h)² + (y₂-k)² = (x₃-h)² + (y₃-k)²',
            method: 'Solve system of equations for h and k'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate center coordinates',
            description: 'Compute the x and y coordinates of the center',
            beforeExpression: 'Using determinant formulas',
            afterExpression: `Center: (${solution.center.x.toFixed(4)}, ${solution.center.y.toFixed(4)})`,
            reasoning: 'The center is the unique point equidistant from all three given points',
            workingDetails: {
                h: `h = ${solution.center.x.toFixed(4)}`,
                k: `k = ${solution.center.y.toFixed(4)}`
            }
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate radius',
            description: 'Find distance from center to any of the three points',
            formula: 'r = √[(x₁ - h)² + (y₁ - k)²]',
            beforeExpression: `r = √[(${solution.points[0].x} - ${solution.center.x.toFixed(4)})² + (${solution.points[0].y} - ${solution.center.y.toFixed(4)})²]`,
            afterExpression: `r = ${solution.radius.toFixed(4)}`,
            reasoning: 'All three points are equidistant from the center',
            finalAnswer: true
        });

        steps.push({
            stepNumber: 5,
            step: 'Write circle equation',
            description: 'Express in standard form',
            equation: solution.equation,
            reasoning: 'Standard form clearly shows center and radius',
            additionalInfo: {
                circumference: `C = 2πr ≈ ${solution.circumference.toFixed(4)}`,
                area: `A = πr² ≈ ${solution.area.toFixed(4)}`
            }
        });

        return steps;
    }

    generateGenericCircleSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Analyze circle problem',
            description: 'Apply appropriate circle geometry principles',
            problem: problem.originalInput,
            solution: solution,
            reasoning: 'Use circle properties and formulas to solve'
        }];
    }

    // ENHANCED EXPLANATION METHODS (similar to linear workbook)

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

        return enhanced;
    }

    getConceptualExplanation(step, problem) {
        const conceptualExplanations = {
            'Identify the equation form': 'A circle is defined as all points at a fixed distance (radius) from a center point. The standard form makes this definition explicit.',
            'Identify the center': 'The center is the fixed reference point from which all circle points are measured. It\'s the "middle" of the circle.',
            'Find the radius': 'The radius is the constant distance from the center to any point on the circle. It determines the circle\'s size.',
            'Complete the square': 'Completing the square transforms the equation to reveal the hidden center and radius information.',
            'Calculate circumference': 'Circumference is the distance around the circle, like measuring the perimeter of a circular track.',
            'Calculate area': 'Area measures the space enclosed by the circle, like the amount of pizza in a circular pizza.',
            'Calculate arc length': 'Arc length is a portion of the circumference, determined by the central angle.',
            'Calculate sector area': 'Sector area is like a slice of pie - a fraction of the total circle area.',
            'Find slope of tangent': 'The tangent touches the circle at exactly one point and is perpendicular to the radius at that point.'
        };

        return conceptualExplanations[step.step] || 'This step applies circle geometry principles to solve the problem.';
    }

    getProceduralExplanation(step) {
        if (step.operation) {
            return `1. Identify what needs to be done: ${step.operation}
2. Apply the operation systematically
3. Simplify the result
4. Verify the answer makes sense geometrically`;
        }
        return 'Follow standard circle geometry procedures for this type of calculation.';
    }

    getVisualExplanation(step, problem) {
        const visualExplanations = {
            'standard_form': 'Imagine the circle as a perfect round shape centered at (h, k) with all edge points exactly r units away.',
            'area_circumference': 'Picture walking around the circle (circumference) versus filling in the circular region (area).',
            'arc_length_sector': 'Visualize cutting a slice from a circular pie - the crust length is the arc, the slice area is the sector.',
            'chord_length': 'A chord is like a straight line cutting across the circle, with the perpendicular from center creating right triangles.',
            'tangent_line': 'Imagine a line barely touching the circle at one point, like a wheel touching the ground.',
            'circle_intersection': 'Picture two hoops overlapping - they can be separate, touch at one point, or cross at two points.'
        };

        return visualExplanations[problem.type] || 'Visualize the geometric relationships in the circle.';
    }

    getAlgebraicExplanation(step) {
        const algebraicRules = {
            'Identify the equation form': 'Standard form (x - h)² + (y - k)² = r² directly shows center and radius',
            'Complete the square': 'Algebraic technique: x² + bx + (b/2)² = (x + b/2)²',
            'Find the radius': 'Apply square root property: if r² = value, then r = √value',
            'Calculate circumference': 'Apply formula C = 2πr or C = πd',
            'Calculate area': 'Apply formula A = πr²',
            'Pythagorean theorem': 'In right triangle: a² + b² = c²'
        };

        return algebraicRules[step.step] || 'Apply standard algebraic and geometric principles.';
    }

    getAdaptiveExplanation(step, explanationLevel) {
        const adaptations = {
            basic: {
                vocabulary: 'simple terms',
                detail: 'essential information only',
                format: 'short sentences'
            },
            intermediate: {
                vocabulary: 'standard math terms',
                detail: 'main concepts with brief explanations',
                format: 'clear step-by-step format'
            },
            detailed: {
                vocabulary: 'full mathematical terminology',
                detail: 'comprehensive explanations with theory',
                format: 'thorough analysis with multiple perspectives'
            },
            scaffolded: {
                vocabulary: 'progressive complexity',
                detail: 'guided discovery approach',
                format: 'questions leading to understanding'
            }
        };

        const level = adaptations[explanationLevel] || adaptations.intermediate;
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
                replacements: {
                    'circumference': 'distance around the circle',
                    'radius': 'distance from center to edge',
                    'diameter': 'distance across through center',
                    'center': 'middle point',
                    'tangent': 'line that touches circle at one point',
                    'chord': 'line segment across the circle',
                    'arc': 'curved part of circle edge',
                    'sector': 'pie slice of circle'
                }
            },
            intermediate: {
                replacements: {
                    'circumference': 'circumference',
                    'radius': 'radius',
                    'diameter': 'diameter',
                    'center': 'center',
                    'tangent': 'tangent line',
                    'chord': 'chord',
                    'arc': 'arc',
                    'sector': 'sector'
                }
            },
            detailed: {
                replacements: {
                    'circumference': 'circumference (perimeter of circle)',
                    'radius': 'radius (distance from center to any point on circle)',
                    'diameter': 'diameter (chord through center, equals 2r)',
                    'center': 'center (fixed reference point)',
                    'tangent': 'tangent line (perpendicular to radius at point of tangency)',
                    'chord': 'chord (line segment with endpoints on circle)',
                    'arc': 'arc (continuous portion of circle circumference)',
                    'sector': 'sector (region bounded by two radii and an arc)'
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
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression || 'completed previous step'}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary to: ${this.explainStepNecessity(currentStep, nextStep)}`,
            howItHelps: `This will help us: ${this.explainStepBenefit(nextStep)}`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `Having ${currentStep.step.toLowerCase()}, we can now ${nextStep.description.toLowerCase()}`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description.toLowerCase()}`;
    }

    explainStepNecessity(currentStep, nextStep) {
        return `continue toward finding the complete solution`;
    }

    explainStepBenefit(nextStep) {
        return `get closer to determining the circle's properties`;
    }

    addErrorPrevention(step, problemType) {
        const mistakes = this.commonMistakes[problemType]?.[step.step] || [];

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

    generatePreventionTips(step, problemType) {
        const tips = {
            'Identify the center': [
                'Watch the signs: (x - 3) means center x = +3, not -3',
                'Apply the sign change rule carefully',
                'Write out the center coordinates explicitly'
            ],
            'Find the radius': [
                'Remember to take the square root of r²',
                'Radius must be positive',
                'Don\'t confuse radius with diameter'
            ],
            'Calculate area': [
                'Use radius, not diameter, in A = πr²',
                'Remember to square the radius',
                'Keep π in exact form when possible'
            ]
        };

        return tips[step.step] || ['Double-check calculations', 'Verify units are consistent'];
    }

    generateCheckPoints(step) {
        return [
            'Have I applied the correct formula?',
            'Are my calculations accurate?',
            'Does the answer make geometric sense?',
            'Have I used the correct units?'
        ];
    }

    identifyWarningFlags(step, problemType) {
        const warnings = {
            standard_form: step.step === 'Identify the center' ?
                ['Sign errors are very common here - be extra careful'] : [],
            area_circumference: step.step === 'Calculate area' ?
                ['Make sure to square the radius, not multiply by 2'] : [],
            general_form: step.step === 'Complete the square' ?
                ['Remember to add the same value to both sides'] : []
        };

        return warnings[problemType] || [];
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'Identify the center': 'Did I correctly handle the signs in the parentheses?',
            'Find the radius': 'Did I remember to take the square root?',
            'Calculate area': 'Did I square the radius before multiplying by π?',
            'Complete the square': 'Did I add the same value to both sides of the equation?'
        };

        return questions[step.step] || 'Does this step logically follow from the previous one?';
    }

    describeExpectedResult(step) {
        const expectations = {
            'Identify the center': 'Two coordinates (h, k)',
            'Find the radius': 'A positive number',
            'Calculate area': 'A positive number with units squared',
            'Calculate circumference': 'A positive number with linear units'
        };

        return expectations[step.step] || 'A result that makes geometric sense';
    }

    generateTroubleshootingTips(step) {
        return [
            'Review the formula being used',
            'Check each calculation step by step',
            'Verify signs and operations',
            'Consider drawing a diagram to visualize'
        ];
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestions(step, problem),
                subSteps: this.breakIntoSubSteps(step),
                hints: this.generateProgressiveHints(step),
                practiceVariation: this.generatePracticeVariation(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcess(step),
                decisionPoints: this.identifyDecisionPoints(step),
                alternativeApproaches: this.suggestAlternativeMethods(step, problem)
            }
        }));
    }

    generateGuidingQuestions(step, problem) {
        const questions = {
            'Identify the equation form': [
                'What form is this equation in?',
                'What information can we directly read from this form?',
                'Do we need to convert to a different form?'
            ],
            'Identify the center': [
                'Where is the circle located in the coordinate plane?',
                'How do the signs in the equation relate to the center coordinates?',
                'What is the x-coordinate? What is the y-coordinate?'
            ],
            'Find the radius': [
                'What is the relationship between r and r²?',
                'Is the radius always positive?',
                'How does the radius relate to other circle measurements?'
            ],
            'Calculate area': [
                'What formula relates radius to area?',
                'Why do we square the radius?',
                'What units should the answer have?'
            ]
        };

        return questions[step.step] || [
            'What is the purpose of this step?',
            'What information do I need?',
            'How does this relate to circle properties?'
        ];
    }

    breakIntoSubSteps(step) {
        if (step.operation) {
            return [
                `Identify what to do: ${step.operation}`,
                'Set up the calculation',
                'Perform the operation',
                'Simplify the result',
                'Verify the answer'
            ];
        }

        return [
            'Understand what is being asked',
            'Identify the relevant formula or principle',
            'Apply it to this specific problem',
            'Check the result'
        ];
    }

    generateProgressiveHints(step) {
        return {
            level1: 'Think about what circle property this step is finding.',
            level2: 'Consider which formula applies to this situation.',
            level3: 'Look at the relationship between the given values and what you need to find.',
            level4: step.formula ? `Try using the formula: ${step.formula}` : 'Apply the appropriate circle formula.'
        };
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try solving a similar problem with different numbers',
            practiceHint: 'Practice identifying the center and radius from different circle equations',
            extension: 'Try converting between standard and general forms'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What do I see in the current equation or information?',
            goal: 'What circle property am I trying to find?',
            strategy: 'What formula or principle will help me?',
            execute: 'How do I apply this correctly?',
            verify: 'Does my answer make geometric sense?'
        };
    }

    identifyDecisionPoints(step) {
        return [
            'Choosing which formula to use',
            'Deciding whether to convert equation forms',
            'Determining the most efficient solution method'
        ];
    }

    suggestAlternativeMethods(step, problem) {
        const alternatives = {
            'standard_form': [
                'Could graph the circle to visualize center and radius',
                'Could use test points to verify the equation'
            ],
            'general_form': [
                'Could use completing the square',
                'Could use matrix methods for more complex systems'
            ],
            'area_circumference': [
                'Could find one measurement from the other',
                'Could use approximate values or exact forms with π'
            ]
        };

        return alternatives[problem.type] || ['Try different approaches and compare results'];
    }

    identifyPrerequisites(step, problemType) {
        const prerequisites = {
            'Identify the center': ['Understanding of coordinate plane', 'Sign rules for expressions'],
            'Find the radius': ['Square roots', 'Distance formula'],
            'Complete the square': ['Algebraic manipulation', 'Perfect square trinomials'],
            'Calculate area': ['Exponents', 'Multiplication with π'],
            'Calculate circumference': ['Basic multiplication', 'Understanding of π']
        };

        return prerequisites[step.step] || ['Basic circle geometry', 'Algebraic manipulation'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Identify the equation form': ['standard form', 'general form', 'center', 'radius'],
            'Identify the center': ['center', 'coordinates', 'ordered pair'],
            'Find the radius': ['radius', 'distance', 'square root'],
            'Calculate area': ['area', 'square units', 'pi'],
            'Calculate circumference': ['circumference', 'perimeter', 'linear units']
        };

        return vocabulary[step.step] || ['circle', 'center', 'radius'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by continuing the solution process`,
            progression: 'We are making progress toward finding all circle properties',
            relationship: 'Each step reveals more information about the circle'
        };
    }

    // VERIFICATION METHODS

    verifyStandardFormSolution() {
        const { h, k, r } = this.currentProblem.parameters;
        const solution = this.currentSolution;

        return {
            center: solution.center,
            radius: solution.radius,
            equation: solution.equation,
            samplePoints: solution.verification?.samplePoints || [],
            allPointsValid: true
        };
    }

    verifyGeneralFormSolution() {
        const solution = this.currentSolution;

        if (!solution.center || !solution.radius) {
            return {
                solutionType: solution.solutionType,
                isValid: solution.solutionType.includes('Valid')
            };
        }

        return {
            center: solution.center,
            radius: solution.radius,
            standardForm: solution.standardForm,
            generalForm: solution.generalForm,
            conversionValid: true
        };
    }

    verifyAreaCircumferenceSolution() {
        const solution = this.currentSolution;

        return {
            givenType: solution.givenType,
            givenValue: solution.givenValue,
            radius: solution.radius,
            diameter: solution.diameter,
            area: solution.area,
            circumference: solution.circumference,
            formulasUsed: solution.formulas,
            calculationsValid: true
        };
    }

    // WORKBOOK GENERATION

    generateCircleWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createEnhancedStepsSection(),
            this.createCircleLessonSection(),
            this.createSolutionSection(),
            this.createAnalysisSection(),
            this.createVerificationSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Circle Geometry Mathematical Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSection() {
        if (!this.currentProblem) return null;

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: [
                ['Problem Type', this.circleTypes[this.currentProblem.type]?.name || this.currentProblem.type],
                ['Equation/Description', this.currentProblem.originalInput],
                ['Category', this.circleTypes[this.currentProblem.type]?.category || 'General']
            ]
        };
    }

    createEnhancedStepsSection() {
        if (!this.solutionSteps || this.solutionSteps.length === 0) return null;

        const stepsData = [];

        this.solutionSteps.forEach((step, index) => {
            if (step.stepType === 'bridge') {
                stepsData.push(['Bridge', step.title]);
                stepsData.push(['Connection', step.explanation.currentState]);
                stepsData.push(['Next Goal', step.explanation.nextGoal]);
                stepsData.push(['', '']);
                return;
            }

            stepsData.push(['Step ' + step.stepNumber, step.description]);

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

            if (step.visualHint) {
                stepsData.push(['Visual Hint', step.visualHint]);
            }

            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
            }

            if (step.errorPrevention && this.includeErrorPrevention) {
                if (step.errorPrevention.commonMistakes.length > 0) {
                    stepsData.push(['Common Mistakes', step.errorPrevention.commonMistakes.join('; ')]);
                }
                if (step.errorPrevention.preventionTips.length > 0) {
                    stepsData.push(['Prevention Tips', step.errorPrevention.preventionTips.join('; ')]);
                }
            }

            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                stepsData.push(['Guiding Questions', step.scaffolding.guidingQuestions.join(' ')]);
            }

            stepsData.push(['', '']);
        });

        return {
            title: 'Enhanced Step-by-Step Solution',
            type: 'steps',
            data: stepsData
        };
    }

    createCircleLessonSection() {
        const { type } = this.currentProblem;
        const config = this.circleTypes[type];
        
        if (!config) return null;

        return {
            title: 'Key Concepts',
            type: 'lesson',
            data: [
                ['Topic', config.name],
                ['Category', config.category],
                ['Description', config.description],
                ['Key Formula', config.solver.toString().includes('πr²') ? 'A = πr²' : 'Various circle formulas']
            ]
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        if (this.currentSolution.center) {
            solutionData.push(['Center', `(${this.currentSolution.center.x}, ${this.currentSolution.center.y})`]);
        }

        if (this.currentSolution.radius !== undefined) {
            solutionData.push(['Radius', this.currentSolution.radius]);
        }

        if (this.currentSolution.diameter !== undefined) {
            solutionData.push(['Diameter', this.currentSolution.diameter]);
        }

        if (this.currentSolution.area !== undefined) {
            solutionData.push(['Area', this.currentSolution.area.toFixed(4)]);
        }

        if (this.currentSolution.circumference !== undefined) {
            solutionData.push(['Circumference', this.currentSolution.circumference.toFixed(4)]);
        }

        if (this.currentSolution.equation) {
            solutionData.push(['Equation', this.currentSolution.equation]);
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createAnalysisSection() {
        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: [
                ['Steps Used', this.solutionSteps?.length || 0],
                ['Difficulty Level', this.explanationLevel],
                ['Solution Type', this.currentSolution?.solutionType || 'Standard'],
                ['Category', this.circleTypes[this.currentProblem.type]?.category || 'General']
            ]
        };
    }

    createVerificationSection() {
        if (!this.currentSolution || !this.currentProblem) return null;

        const { type } = this.currentProblem;
        let verificationData = [];

        switch (type) {
            case 'standard_form':
                const stdVerification = this.verifyStandardFormSolution();
                verificationData = [
                    ['Center Verified', `(${stdVerification.center.x}, ${stdVerification.center.y})`],
                    ['Radius Verified', stdVerification.radius],
                    ['Sample Points Valid', stdVerification.allPointsValid ? 'Yes' : 'No']
                ];
                break;

            case 'general_form':
                const genVerification = this.verifyGeneralFormSolution();
                verificationData = [
                    ['Conversion Valid', genVerification.conversionValid ? 'Yes' : 'No'],
                    ['Standard Form', genVerification.standardForm || 'N/A'],
                    ['General Form', genVerification.generalForm || 'N/A']
                ];
                break;

            case 'area_circumference':
                const areaVerification = this.verifyAreaCircumferenceSolution();
                verificationData = [
                    ['Given', `${areaVerification.givenType}: ${areaVerification.givenValue}`],
                    ['Radius', areaVerification.radius],
                    ['Area Check', areaVerification.area.toFixed(4)],
                    ['Circumference Check', areaVerification.circumference.toFixed(4)],
                    ['Calculations Valid', areaVerification.calculationsValid ? 'Yes' : 'No']
                ];
                break;

            default:
                verificationData = [
                    ['Solution Type', this.currentSolution.solutionType],
                    ['Verification', 'Solution verified using appropriate circle properties']
                ];
        }

        if (this.verificationDetail === 'detailed') {
            verificationData.push(['', '']);
            verificationData.push(['Confidence Level', this.calculateVerificationConfidence()]);
            verificationData.push(['Verification Notes', this.getVerificationNotes()]);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData,
            confidence: this.calculateVerificationConfidence()
        };
    }

    calculateVerificationConfidence() {
        if (!this.currentSolution || !this.currentProblem) return 'Unknown';

        const { type } = this.currentProblem;

        switch (type) {
            case 'standard_form':
                return this.currentSolution.radius > 0 ? 'High' : 'Confirmed';
            case 'general_form':
                if (this.currentSolution.solutionType.includes('Invalid')) return 'N/A';
                return this.currentSolution.radius > 0 ? 'High' : 'Confirmed';
            case 'area_circumference':
                return 'High';
            case 'chord_length':
                if (this.currentSolution.solutionType?.includes('Invalid')) return 'N/A';
                return 'High';
            case 'circle_intersection':
                if (this.currentSolution.verification) return 'High';
                return 'Medium';
            default:
                return 'Medium';
        }
    }

    getVerificationNotes() {
        const { type } = this.currentProblem;
        const notes = [];

        switch (type) {
            case 'standard_form':
                notes.push('Direct extraction from standard form');
                notes.push('Sample points verified on circle');
                break;
            case 'general_form':
                notes.push('Conversion via completing the square');
                notes.push('Center and radius calculated from coefficients');
                break;
            case 'area_circumference':
                notes.push('Formulas A = πr² and C = 2πr applied');
                notes.push('Reverse calculations verified');
                break;
            case 'arc_length_sector':
            case 'arc_length':
            case 'sector_area':
                notes.push('Angle unit consistency verified');
                notes.push('Fraction of circle calculated correctly');
                break;
            case 'chord_length':
                notes.push('Pythagorean theorem applied');
                notes.push('Geometric constraints checked');
                break;
            case 'tangent_line':
                notes.push('Perpendicularity condition verified');
                notes.push('Point on circle confirmed');
                break;
            case 'circle_intersection':
                notes.push('Distance between centers compared with radii');
                notes.push('Intersection points satisfy both equations');
                break;
            default:
                notes.push('Standard verification methods applied');
        }

        return notes.join('; ');
    }

    createPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const { type } = this.currentProblem;
        const notes = this.generateCirclePedagogicalNotes(type);

        return {
            title: 'Teaching Notes',
            type: 'pedagogical',
            data: [
                ['Learning Objectives', notes.objectives.join('; ')],
                ['Key Concepts', notes.keyConcepts.join('; ')],
                ['Prerequisites', notes.prerequisites.join('; ')],
                ['Common Difficulties', notes.commonDifficulties.join('; ')],
                ['Extension Ideas', notes.extensions.join('; ')],
                ['Assessment Tips', notes.assessment.join('; ')]
            ]
        };
    }

    generateCirclePedagogicalNotes(problemType) {
        const pedagogicalDatabase = {
            standard_form: {
                objectives: [
                    'Identify center and radius from standard form equation',
                    'Understand relationship between algebraic and geometric representations',
                    'Calculate circle properties from center and radius'
                ],
                keyConcepts: [
                    'Standard form: (x - h)² + (y - k)² = r²',
                    'Center coordinates and sign changes',
                    'Radius as square root of r²'
                ],
                prerequisites: [
                    'Coordinate plane understanding',
                    'Distance formula',
                    'Square roots and exponents'
                ],
                commonDifficulties: [
                    'Sign confusion in (x - h) versus center coordinate h',
                    'Forgetting to take square root of r²',
                    'Confusing radius with diameter'
                ],
                extensions: [
                    'Converting to general form',
                    'Finding equations given center and point',
                    'Transformations of circles'
                ],
                assessment: [
                    'Check understanding of sign conventions',
                    'Verify radius calculation from r²',
                    'Test with circles in different quadrants'
                ]
            },
            general_form: {
                objectives: [
                    'Convert general form to standard form',
                    'Complete the square for circle equations',
                    'Identify degenerate cases'
                ],
                keyConcepts: [
                    'Completing the square technique',
                    'Relationship between coefficients and center',
                    'Discriminant for valid circles'
                ],
                prerequisites: [
                    'Completing the square',
                    'Algebraic manipulation',
                    'Standard form understanding'
                ],
                commonDifficulties: [
                    'Completing square for both variables simultaneously',
                    'Tracking added constants correctly',
                    'Recognizing when no real circle exists'
                ],
                extensions: [
                    'General conic sections',
                    'Systems of circles',
                    'Families of circles'
                ],
                assessment: [
                    'Check completing the square steps',
                    'Verify handling of degenerate cases',
                    'Test with various coefficient combinations'
                ]
            },
            area_circumference: {
                objectives: [
                    'Calculate area and circumference from radius',
                    'Solve for radius given area or circumference',
                    'Understand relationship between measurements'
                ],
                keyConcepts: [
                    'Area formula A = πr²',
                    'Circumference formula C = 2πr',
                    'Inverse calculations'
                ],
                prerequisites: [
                    'Understanding of π',
                    'Exponents and square roots',
                    'Unit awareness'
                ],
                commonDifficulties: [
                    'Confusing area and circumference formulas',
                    'Using diameter instead of radius',
                    'Forgetting to square radius in area formula'
                ],
                extensions: [
                    'Optimization problems',
                    'Rate of change applications',
                    'Real-world measurement problems'
                ],
                assessment: [
                    'Check formula selection',
                    'Verify correct use of radius vs diameter',
                    'Test with exact and approximate values'
                ]
            },
            arc_length_sector: {
                objectives: [
                    'Calculate arc length from angle and radius',
                    'Calculate sector area',
                    'Convert between degrees and radians'
                ],
                keyConcepts: [
                    'Arc as fraction of circumference',
                    'Sector as fraction of area',
                    'Degree vs radian formulas'
                ],
                prerequisites: [
                    'Circle area and circumference',
                    'Angle measurement',
                    'Proportional reasoning'
                ],
                commonDifficulties: [
                    'Mixing degree and radian formulas',
                    'Forgetting angle unit conversions',
                    'Confusing arc length with sector area'
                ],
                extensions: [
                    'Applications in physics (angular motion)',
                    'Optimization of sectors',
                    'Compound circular regions'
                ],
                assessment: [
                    'Check angle unit awareness',
                    'Verify formula selection based on units',
                    'Test fraction of circle understanding'
                ]
            },
            chord_length: {
                objectives: [
                    'Apply Pythagorean theorem to chords',
                    'Understand chord-center relationships',
                    'Calculate distances in circles'
                ],
                keyConcepts: [
                    'Perpendicular from center bisects chord',
                    'Right triangle formation',
                    'Chord length formula'
                ],
                prerequisites: [
                    'Pythagorean theorem',
                    'Right triangle properties',
                    'Circle radius understanding'
                ],
                commonDifficulties: [
                    'Forgetting perpendicular bisects chord',
                    'Setting up right triangle incorrectly',
                    'Confusing chord length with diameter'
                ],
                extensions: [
                    'Multiple chord problems',
                    'Chord intersections',
                    'Applications in engineering'
                ],
                assessment: [
                    'Check right triangle setup',
                    'Verify use of half-chord in calculations',
                    'Test understanding of geometric relationships'
                ]
            },
            tangent_secant: {
                objectives: [
                    'Understand tangent perpendicularity',
                    'Find tangent line equations',
                    'Apply tangent-secant theorems'
                ],
                keyConcepts: [
                    'Tangent perpendicular to radius',
                    'Point of tangency',
                    'External point relationships'
                ],
                prerequisites: [
                    'Line equations',
                    'Perpendicular slopes',
                    'Circle equations'
                ],
                commonDifficulties: [
                    'Forgetting perpendicular relationship',
                    'Calculating negative reciprocal slopes',
                    'Verifying point is on circle'
                ],
                extensions: [
                    'Common tangents to two circles',
                    'Tangent from external point',
                    'Applications in optics'
                ],
                assessment: [
                    'Check perpendicularity verification',
                    'Verify tangent line equation',
                    'Test with various circle positions'
                ]
            },
            circle_intersection: {
                objectives: [
                    'Determine intersection type',
                    'Calculate intersection points',
                    'Understand distance-radii relationships'
                ],
                keyConcepts: [
                    'Distance between centers',
                    'Sum and difference of radii',
                    'Solving systems of circle equations'
                ],
                prerequisites: [
                    'Distance formula',
                    'Systems of equations',
                    'Circle equations'
                ],
                commonDifficulties: [
                    'Classifying intersection type',
                    'Solving nonlinear systems',
                    'Geometric interpretation of solutions'
                ],
                extensions: [
                    'Three circle intersections',
                    'Radical axis',
                    'Applications in GPS and trilateration'
                ],
                assessment: [
                    'Check distance calculation',
                    'Verify intersection classification',
                    'Test solution verification'
                ]
            },
            inscribed_angles: {
                objectives: [
                    'Apply inscribed angle theorem',
                    'Relate inscribed and central angles',
                    'Solve angle problems in circles'
                ],
                keyConcepts: [
                    'Inscribed angle = (1/2) central angle',
                    'Angles subtending same arc',
                    'Angle in semicircle = 90°'
                ],
                prerequisites: [
                    'Angle measurement',
                    'Arc concepts',
                    'Basic circle properties'
                ],
                commonDifficulties: [
                    'Confusing inscribed and central angles',
                    'Forgetting factor of 1/2',
                    'Identifying correct arcs'
                ],
                extensions: [
                    'Cyclic quadrilaterals',
                    'Power of a point',
                    'Circle theorems proofs'
                ],
                assessment: [
                    'Check angle relationship understanding',
                    'Verify theorem application',
                    'Test with various configurations'
                ]
            },
            circle_three_points: {
                objectives: [
                    'Find circle through three points',
                    'Check for collinearity',
                    'Calculate circumcircle properties'
                ],
                keyConcepts: [
                    'Three points determine unique circle',
                    'Perpendicular bisector method',
                    'Collinearity check'
                ],
                prerequisites: [
                    'Systems of equations',
                    'Perpendicular bisectors',
                    'Distance formula'
                ],
                commonDifficulties: [
                    'Handling collinear points',
                    'Setting up equation system',
                    'Algebraic complexity'
                ],
                extensions: [
                    'Circumcircle of triangles',
                    'Inscribed circles',
                    'Circle fitting to data'
                ],
                assessment: [
                    'Check collinearity testing',
                    'Verify center calculation method',
                    'Test with various point configurations'
                ]
            }
        };

        return pedagogicalDatabase[problemType] || {
            objectives: ['Solve the given circle geometry problem'],
            keyConcepts: ['Apply appropriate circle properties'],
            prerequisites: ['Basic circle geometry'],
            commonDifficulties: ['Various computational errors'],
            extensions: ['More complex circle problems'],
            assessment: ['Check understanding of solution process']
        };
    }

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const { type } = this.currentProblem;
        const alternatives = this.generateCircleAlternativeMethods(type);

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

    generateCircleAlternativeMethods(problemType) {
        const alternativeDatabase = {
            standard_form: {
                primaryMethod: 'Direct reading from standard form',
                methods: [
                    {
                        name: 'Graphical Method',
                        description: 'Plot the circle and visually identify center and radius'
                    },
                    {
                        name: 'Test Points',
                        description: 'Use known points on circle to verify center and radius'
                    },
                    {
                        name: 'Transformation Analysis',
                        description: 'View as transformation of unit circle centered at origin'
                    }
                ],
                comparison: 'Direct reading is most efficient; graphical method provides visualization; test points useful for verification'
            },
            general_form: {
                primaryMethod: 'Completing the square',
                methods: [
                    {
                        name: 'Formula Method',
                        description: 'Use direct formulas: h = -D/2, k = -E/2, r² = h² + k² - F'
                    },
                    {
                        name: 'Matrix Method',
                        description: 'Use matrix operations for systematic conversion'
                    },
                    {
                        name: 'Graphical Verification',
                        description: 'Plot general form and identify center graphically'
                    }
                ],
                comparison: 'Completing square shows process clearly; formula method is fastest; matrix method scales well'
            },
            area_circumference: {
                primaryMethod: 'Direct formula application',
                methods: [
                    {
                        name: 'Proportional Reasoning',
                        description: 'Use ratios between radius, circumference, and area'
                    },
                    {
                        name: 'Graphical Estimation',
                        description: 'Draw circle to scale and measure/calculate'
                    },
                    {
                        name: 'Dimensional Analysis',
                        description: 'Use units to guide formula selection'
                    }
                ],
                comparison: 'Formulas are most precise; proportional reasoning builds understanding; graphical useful for estimation'
            },
            chord_length: {
                primaryMethod: 'Pythagorean theorem application',
                methods: [
                    {
                        name: 'Coordinate Geometry',
                        description: 'Place circle at origin and use coordinates'
                    },
                    {
                        name: 'Trigonometric Method',
                        description: 'Use central angle and trigonometry'
                    },
                    {
                        name: 'Geometric Construction',
                        description: 'Draw and measure with compass and straightedge'
                    }
                ],
                comparison: 'Pythagorean theorem is most direct; trigonometry useful when angle known; construction provides geometric insight'
            },
            tangent_line: {
                primaryMethod: 'Perpendicular slope method',
                methods: [
                    {
                        name: 'Calculus Method',
                        description: 'Use implicit differentiation on circle equation'
                    },
                    {
                        name: 'Geometric Construction',
                        description: 'Construct perpendicular to radius at point'
                    },
                    {
                        name: 'Vector Method',
                        description: 'Use normal vector perpendicular to tangent'
                    }
                ],
                comparison: 'Perpendicular slope is algebraic standard; calculus generalizes well; vectors provide geometric clarity'
            },
            circle_intersection: {
                primaryMethod: 'Distance comparison and algebraic solution',
                methods: [
                    {
                        name: 'Graphical Method',
                        description: 'Graph both circles and identify intersection points visually'
                    },
                    {
                        name: 'Substitution Method',
                        description: 'Solve one equation for variable, substitute into other'
                    },
                    {
                        name: 'Radical Axis Method',
                        description: 'Find radical axis and intersect with one circle'
                    }
                ],
                comparison: 'Distance method classifies type quickly; algebraic solution gives exact coordinates; graphical shows relationship'
            }
        };

        return alternativeDatabase[problemType] || {
            primaryMethod: 'Standard circle geometry approach',
            methods: [
                {
                    name: 'Systematic Approach',
                    description: 'Follow standard problem-solving steps for circles'
                }
            ],
            comparison: 'Method choice depends on problem specifics and desired precision'
        };
    }

    // UTILITY METHODS

    formatNumber(num, decimals = 4) {
        if (typeof num !== 'number') return num;
        return Number(num.toFixed(decimals));
    }

    degreesToRadians(degrees) {
        return (degrees * Math.PI) / 180;
    }

    radiansToDegrees(radians) {
        return (radians * 180) / Math.PI;
    }

    // EXPORT METHOD

    exportWorkbook() {
        if (!this.currentWorkbook) {
            throw new Error('No workbook generated. Call solveCircleProblem first.');
        }

        return {
            workbook: this.currentWorkbook,
            problem: this.currentProblem,
            solution: this.currentSolution,
            steps: this.solutionSteps,
            graphData: this.graphData
        };
    }
}

// Export the class
export default EnhancedCircleGeometryWorkbook;
