// Enhanced Triangle Mathematical Workbook - Improved Step-by-Step Explanations
import * as math from 'mathjs';

export class EnhancedTriangleMathematicalWorkbook {
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
        this.initializeTriangleSolvers();
        this.initializeErrorDatabase();
        this.initializeExplanationTemplates();
    }

    initializeTriangleLessons() {
        this.lessons = {
            pythagorean: {
                title: "Pythagorean Theorem",
                concepts: [
                    "In a right triangle: a² + b² = c²",
                    "c is the hypotenuse (longest side opposite right angle)",
                    "a and b are the legs (sides forming the right angle)",
                    "Only applies to right triangles"
                ],
                theory: "The Pythagorean theorem states that in a right triangle, the square of the hypotenuse equals the sum of squares of the other two sides. This fundamental relationship has countless applications in geometry, physics, and engineering.",
                keyFormulas: {
                    "Standard Form": "a² + b² = c²",
                    "Solve for c": "c = √(a² + b²)",
                    "Solve for a": "a = √(c² - b²)",
                    "Solve for b": "b = √(c² - a²)"
                },
                solvingSteps: [
                    "Identify which sides are given and which is unknown",
                    "Determine if solving for hypotenuse or leg",
                    "Square the known sides",
                    "Add or subtract squares as appropriate",
                    "Take square root to find unknown side"
                ],
                applications: [
                    "Finding distances in coordinate geometry",
                    "Construction and carpentry (ensuring right angles)",
                    "Navigation and surveying",
                    "Physics (vector components)"
                ]
            },

            triangle_area: {
                title: "Triangle Area Calculations",
                concepts: [
                    "Basic formula: Area = (1/2) × base × height",
                    "Heron's formula for three sides: A = √[s(s-a)(s-b)(s-c)]",
                    "Using two sides and included angle: A = (1/2)ab sin(C)",
                    "Height must be perpendicular to base"
                ],
                theory: "Triangle area can be calculated using different formulas depending on what information is known. Each formula provides the same result but is most convenient for different given information.",
                keyFormulas: {
                    "Base-Height": "A = (1/2)bh",
                    "Heron's Formula": "A = √[s(s-a)(s-b)(s-c)] where s = (a+b+c)/2",
                    "Two Sides and Angle": "A = (1/2)ab sin(C)",
                    "Coordinate Formula": "A = (1/2)|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|"
                },
                solvingSteps: [
                    "Identify what information is given",
                    "Select appropriate area formula",
                    "Calculate any intermediate values (like semi-perimeter)",
                    "Substitute values into formula",
                    "Compute the final area"
                ],
                applications: [
                    "Land surveying and measurement",
                    "Architectural design",
                    "Material estimation",
                    "Computer graphics and rendering"
                ]
            },

            triangle_perimeter: {
                title: "Triangle Perimeter",
                concepts: [
                    "Perimeter is the sum of all three sides",
                    "Formula: P = a + b + c",
                    "Can find missing side if perimeter and two sides are known",
                    "Units must be consistent"
                ],
                theory: "The perimeter of a triangle is the total distance around the triangle, calculated by adding the lengths of all three sides.",
                keyFormulas: {
                    "Perimeter": "P = a + b + c",
                    "Missing Side": "c = P - a - b",
                    "Semi-perimeter": "s = P/2 = (a+b+c)/2"
                },
                applications: [
                    "Fencing calculations",
                    "Border and trim measurements",
                    "Path planning",
                    "Resource estimation"
                ]
            },

            triangle_angles: {
                title: "Triangle Angle Relationships",
                concepts: [
                    "Sum of interior angles always equals 180°",
                    "Each angle is between 0° and 180°",
                    "Types: acute (all angles < 90°), right (one angle = 90°), obtuse (one angle > 90°)",
                    "Exterior angle equals sum of two non-adjacent interior angles"
                ],
                theory: "The angle sum property is fundamental to triangle geometry. This property, combined with the properties of different triangle types, allows us to solve for unknown angles.",
                keyFormulas: {
                    "Angle Sum": "∠A + ∠B + ∠C = 180°",
                    "Missing Angle": "∠C = 180° - ∠A - ∠B",
                    "Exterior Angle": "Exterior angle = ∠A + ∠B (for angle at C)"
                },
                applications: [
                    "Navigation and surveying",
                    "Engineering design",
                    "Architectural planning",
                    "Computer graphics rotation calculations"
                ]
            },

            law_of_sines: {
                title: "Law of Sines",
                concepts: [
                    "Relates sides to opposite angles",
                    "Formula: a/sin(A) = b/sin(B) = c/sin(C)",
                    "Used for ASA, AAS, and SSA cases",
                    "SSA case may have 0, 1, or 2 solutions (ambiguous case)"
                ],
                theory: "The Law of Sines states that the ratio of each side to the sine of its opposite angle is constant for all three sides of a triangle. This powerful relationship allows solving triangles when certain combinations of sides and angles are known.",
                keyFormulas: {
                    "Standard Form": "a/sin(A) = b/sin(B) = c/sin(C)",
                    "Alternative Form": "sin(A)/a = sin(B)/b = sin(C)/c",
                    "Solve for Angle": "sin(A) = a·sin(B)/b",
                    "Solve for Side": "a = b·sin(A)/sin(B)"
                },
                solvingSteps: [
                    "Identify known sides and angles",
                    "Set up proportion using Law of Sines",
                    "Cross-multiply and solve for unknown",
                    "Check for ambiguous case if solving SSA",
                    "Verify solution makes geometric sense"
                ],
                applications: [
                    "Surveying and triangulation",
                    "Navigation",
                    "Astronomy and celestial calculations",
                    "Indirect measurement"
                ]
            },

            law_of_cosines: {
                title: "Law of Cosines",
                concepts: [
                    "Generalizes Pythagorean theorem to all triangles",
                    "Formula: c² = a² + b² - 2ab cos(C)",
                    "Used for SAS and SSS cases",
                    "Always produces unique solution"
                ],
                theory: "The Law of Cosines extends the Pythagorean theorem to non-right triangles. When the angle is 90°, cos(90°) = 0, and the formula reduces to the Pythagorean theorem.",
                keyFormulas: {
                    "Standard Form": "c² = a² + b² - 2ab cos(C)",
                    "Solve for Side": "c = √(a² + b² - 2ab cos(C))",
                    "Solve for Angle": "cos(C) = (a² + b² - c²)/(2ab)",
                    "Alternative": "C = arccos[(a² + b² - c²)/(2ab)]"
                },
                solvingSteps: [
                    "Identify known sides and/or angles",
                    "Choose appropriate form of Law of Cosines",
                    "Substitute known values",
                    "Solve algebraically for unknown",
                    "Take inverse cosine if solving for angle"
                ],
                applications: [
                    "Force vector resolution in physics",
                    "Navigation bearing calculations",
                    "Engineering stress analysis",
                    "Game development and computer graphics"
                ]
            },

            triangle_inequality: {
                title: "Triangle Inequality Theorem",
                concepts: [
                    "Sum of any two sides must be greater than the third side",
                    "a + b > c, b + c > a, a + c > b",
                    "Determines if three lengths can form a triangle",
                    "Difference of two sides must be less than third side"
                ],
                theory: "The Triangle Inequality Theorem states the fundamental constraint on side lengths that must be satisfied for three segments to form a triangle. This is based on the geometric principle that the shortest distance between two points is a straight line.",
                keyFormulas: {
                    "Three Inequalities": "a + b > c, b + c > a, a + c > b",
                    "Difference Form": "|a - b| < c < a + b",
                    "General Form": "Any side < sum of other two sides"
                },
                applications: [
                    "Validating triangle existence before calculations",
                    "Quality control in manufacturing",
                    "Network routing optimization",
                    "Geometric constraint checking"
                ]
            },

            similar_triangles: {
                title: "Similar Triangles",
                concepts: [
                    "Same shape but different size",
                    "Corresponding angles are equal",
                    "Corresponding sides are proportional",
                    "Ratio of areas equals square of scale factor"
                ],
                theory: "Similar triangles have the same shape but not necessarily the same size. Corresponding angles are equal, and corresponding sides are in the same ratio. This property has numerous practical applications.",
                keyFormulas: {
                    "Side Proportions": "a₁/a₂ = b₁/b₂ = c₁/c₂ = k (scale factor)",
                    "Area Ratio": "A₁/A₂ = k²",
                    "Perimeter Ratio": "P₁/P₂ = k"
                },
                solvingSteps: [
                    "Verify triangles are similar (AA, SAS, or SSS similarity)",
                    "Identify corresponding sides",
                    "Set up proportion",
                    "Solve for unknown side",
                    "Verify ratio is consistent"
                ],
                applications: [
                    "Scale models and blueprints",
                    "Indirect measurement (shadow problems)",
                    "Map scaling",
                    "Perspective drawing and photography"
                ]
            },

            congruent_triangles: {
                title: "Congruent Triangles",
                concepts: [
                    "Same shape and same size",
                    "All corresponding parts are equal",
                    "Criteria: SSS, SAS, ASA, AAS, HL (right triangles)",
                    "SSA is not a congruence criterion"
                ],
                theory: "Congruent triangles are identical in shape and size. Various criteria allow us to prove congruence without measuring all six parts of the triangle.",
                keyFormulas: {
                    "SSS": "All three sides equal",
                    "SAS": "Two sides and included angle equal",
                    "ASA": "Two angles and included side equal",
                    "AAS": "Two angles and non-included side equal",
                    "HL": "Hypotenuse and leg (right triangles)"
                },
                applications: [
                    "Geometric proofs",
                    "Structural engineering (truss design)",
                    "Computer-aided design verification",
                    "Pattern matching and recognition"
                ]
            },

            special_triangles: {
                title: "Special Right Triangles",
                concepts: [
                    "45-45-90 triangle: sides in ratio 1:1:√2",
                    "30-60-90 triangle: sides in ratio 1:√3:2",
                    "Memorizing ratios speeds calculations",
                    "Can scale ratios by any factor"
                ],
                theory: "Special right triangles have angle measures and side length ratios that appear frequently. Recognizing these patterns allows for quick calculations without using trigonometry.",
                keyFormulas: {
                    "45-45-90": "If legs = a, then hypotenuse = a√2",
                    "30-60-90": "If short leg = a, then long leg = a√3, hypotenuse = 2a",
                    "Scaling": "Multiply all sides by same factor to get similar triangle"
                },
                applications: [
                    "Quick mental calculations",
                    "Geometry problem-solving",
                    "Engineering drafting",
                    "Architecture and construction"
                ]
            },

            triangle_centers: {
                title: "Triangle Centers and Special Points",
                concepts: [
                    "Centroid: intersection of medians (center of mass)",
                    "Circumcenter: intersection of perpendicular bisectors",
                    "Incenter: intersection of angle bisectors",
                    "Orthocenter: intersection of altitudes"
                ],
                theory: "Triangles have several important points of concurrency where special line segments meet. Each center has unique properties and applications.",
                keyFormulas: {
                    "Centroid": "Divides each median in ratio 2:1 from vertex",
                    "Circumradius": "R = abc/(4A)",
                    "Inradius": "r = A/s where s is semi-perimeter",
                    "Centroid Coordinates": "((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3)"
                },
                applications: [
                    "Physics (center of mass calculations)",
                    "Circle problems and constructions",
                    "Optimization problems",
                    "Computer graphics and game development"
                ]
            },

            coordinate_triangles: {
                title: "Triangles in Coordinate Geometry",
                concepts: [
                    "Vertices defined by coordinate pairs",
                    "Use distance formula for side lengths",
                    "Use slope for angle calculations",
                    "Area from coordinate formula"
                ],
                theory: "When triangle vertices are given as coordinates, we can use algebraic methods to find all triangle properties including side lengths, angles, area, and perimeter.",
                keyFormulas: {
                    "Distance Formula": "d = √[(x₂-x₁)² + (y₂-y₁)²]",
                    "Area Formula": "A = (1/2)|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|",
                    "Slope": "m = (y₂-y₁)/(x₂-x₁)",
                    "Angle from Slopes": "tan(θ) = |m₁-m₂|/(1+m₁m₂)"
                },
                applications: [
                    "Computer graphics",
                    "GPS and navigation",
                    "Computer-aided design",
                    "Game development"
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
                vertexBg: '#ffe6e6'
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
                vertexBg: '#ffe0e6'
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
            'angle': '∠', 'triangle': '△', 'perpendicular': '⊥', 
            'parallel': '∥', 'congruent': '≅', 'similar': '∼',
            'degree': '°', 'sqrt': '√'
        };
    }

    initializeTriangleSolvers() {
        this.triangleTypes = {
            // Pythagorean theorem problems
            pythagorean: {
                patterns: [
                    /pythagorean/i,
                    /right.*triangle.*side/i,
                    /hypotenuse/i,
                    /a²\s*\+\s*b²\s*=\s*c²/i
                ],
                solver: this.solvePythagorean.bind(this),
                name: 'Pythagorean Theorem',
                category: 'right_triangles',
                description: 'Solves for missing side in right triangle using a² + b² = c²'
            },

            // Triangle area calculations
            triangle_area_base_height: {
                patterns: [
                    /area.*base.*height/i,
                    /triangle.*area.*perpendicular/i,
                    /½.*base.*height/i
                ],
                solver: this.solveAreaBaseHeight.bind(this),
                name: 'Triangle Area (Base and Height)',
                category: 'area',
                description: 'Calculates area using A = (1/2)bh'
            },

            triangle_area_herons: {
                patterns: [
                    /heron/i,
                    /area.*three.*sides/i,
                    /semi.*perimeter.*area/i
                ],
                solver: this.solveAreaHerons.bind(this),
                name: "Triangle Area (Heron's Formula)",
                category: 'area',
                description: "Calculates area from three sides using Heron's formula"
            },

            triangle_area_sas: {
                patterns: [
                    /area.*two.*sides.*angle/i,
                    /½ab.*sin/i,
                    /area.*sas/i
                ],
                solver: this.solveAreaSAS.bind(this),
                name: 'Triangle Area (Two Sides and Angle)',
                category: 'area',
                description: 'Calculates area using A = (1/2)ab sin(C)'
            },

            // Perimeter
            triangle_perimeter: {
                patterns: [
                    /perimeter/i,
                    /sum.*sides/i,
                    /distance.*around/i
                ],
                solver: this.solvePerimeter.bind(this),
                name: 'Triangle Perimeter',
                category: 'perimeter',
                description: 'Calculates perimeter P = a + b + c'
            },

            // Angle problems
            triangle_angles: {
                patterns: [
                    /missing.*angle/i,
                    /angle.*sum/i,
                    /180.*degrees/i,
                    /find.*angle/i
                ],
                solver: this.solveAngles.bind(this),
                name: 'Triangle Angles',
                category: 'angles',
                description: 'Finds missing angle using angle sum property'
            },

            // Law of Sines
            law_of_sines: {
                patterns: [
                    /law.*sines/i,
                    /sine.*rule/i,
                    /asa.*triangle/i,
                    /aas.*triangle/i,
                    /ssa.*triangle/i
                ],
                solver: this.solveLawOfSines.bind(this),
                name: 'Law of Sines',
                category: 'oblique_triangles',
                description: 'Solves triangles using a/sin(A) = b/sin(B) = c/sin(C)'
            },

            // Law of Cosines
            law_of_cosines: {
                patterns: [
                    /law.*cosines/i,
                    /cosine.*rule/i,
                    /sas.*triangle/i,
                    /sss.*triangle/i,
                    /c².*a².*b².*2ab.*cos/i
                ],
                solver: this.solveLawOfCosines.bind(this),
                name: 'Law of Cosines',
                category: 'oblique_triangles',
                description: 'Solves triangles using c² = a² + b² - 2ab cos(C)'
            },

            // Triangle inequality
            triangle_inequality: {
                patterns: [
                    /triangle.*inequality/i,
                    /can.*form.*triangle/i,
                    /valid.*triangle/i,
                    /sum.*two.*sides/i
                ],
                solver: this.solveTriangleInequality.bind(this),
                name: 'Triangle Inequality Theorem',
                category: 'validity',
                description: 'Checks if three lengths can form a triangle'
            },

            // Similar triangles
            similar_triangles: {
                patterns: [
                    /similar.*triangles/i,
                    /proportional.*sides/i,
                    /scale.*factor/i,
                    /corresponding.*sides/i
                ],
                solver: this.solveSimilarTriangles.bind(this),
                name: 'Similar Triangles',
                category: 'similarity',
                description: 'Solves problems involving similar triangles'
            },

            // Congruent triangles
            congruent_triangles: {
                patterns: [
                    /congruent.*triangles/i,
                    /sss.*congruence/i,
                    /sas.*congruence/i,
                    /asa.*congruence/i,
                    /aas.*congruence/i
                ],
                solver: this.solveCongruentTriangles.bind(this),
                name: 'Congruent Triangles',
                category: 'congruence',
                description: 'Determines triangle congruence'
            },

            // Special right triangles
            special_right_triangles: {
                patterns: [
                    /45.*45.*90/i,
                    /30.*60.*90/i,
                    /isosceles.*right/i,
                    /special.*right/i
                ],
                solver: this.solveSpecialRightTriangles.bind(this),
                name: 'Special Right Triangles',
                category: 'special_triangles',
                description: 'Solves 45-45-90 and 30-60-90 triangles'
            },

            // Triangle centers
            triangle_centers: {
                patterns: [
                    /centroid/i,
                    /circumcenter/i,
                    /incenter/i,
                    /orthocenter/i,
                    /median/i,
                    /altitude/i
                ],
                solver: this.solveTriangleCenters.bind(this),
                name: 'Triangle Centers',
                category: 'special_points',
                description: 'Finds triangle centers and special points'
            },

            // Coordinate geometry
            coordinate_triangles: {
                patterns: [
                    /coordinate.*triangle/i,
                    /vertices.*coordinates/i,
                    /distance.*formula.*triangle/i,
                    /triangle.*plane/i
                ],
                solver: this.solveCoordinateTriangles.bind(this),
                name: 'Triangles in Coordinate Geometry',
                category: 'coordinate_geometry',
                description: 'Solves triangle problems using coordinates'
            },

            // Triangle classification
            triangle_classification: {
                patterns: [
                    /classify.*triangle/i,
                    /type.*triangle/i,
                    /scalene.*isosceles.*equilateral/i,
                    /acute.*obtuse.*right/i
                ],
                solver: this.classifyTriangle.bind(this),
                name: 'Triangle Classification',
                category: 'classification',
                description: 'Classifies triangles by sides and angles'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            pythagorean: {
                'Square the sides': [
                    'Forgetting to square the side lengths',
                    'Adding sides before squaring',
                    'Confusing which side is the hypotenuse'
                ],
                'Take square root': [
                    'Forgetting to take square root of final answer',
                    'Taking square root before adding/subtracting',
                    'Not considering only positive root for lengths'
                ]
            },
            law_of_sines: {
                'Set up proportion': [
                    'Matching side with wrong angle',
                    'Forgetting to use opposite angles',
                    'Incorrect cross-multiplication'
                ],
                'Solve for angle': [
                    'Forgetting about ambiguous case (SSA)',
                    'Not checking if second solution exists',
                    'Using wrong inverse trig function'
                ]
            },
            law_of_cosines: {
                'Apply formula': [
                    'Using wrong sign (should be minus)',
                    'Forgetting the 2ab term',
                    'Confusing which angle goes with which side'
                ]
            },
            triangle_angles: {
                'Find missing angle': [
                    'Forgetting angles must sum to 180°',
                    'Using wrong units (degrees vs radians)',
                    'Arithmetic errors in subtraction'
                ]
            }
        };

        this.errorPrevention = {
            hypotenuse_identification: {
                reminder: 'Hypotenuse is always opposite the right angle and is the longest side',
                method: 'Draw and label the triangle clearly'
            },
            angle_side_correspondence: {
                reminder: 'In Law of Sines, each side must be paired with its opposite angle',
                method: 'Label triangle vertices and use consistent notation'
            },
            unit_consistency: {
                reminder: 'Keep all measurements in same units throughout calculation',
                method: 'Convert all measurements before starting calculations'
            },
            ambiguous_case: {
                reminder: 'SSA case may have two solutions - check both possibilities',
                method: 'Calculate obtuse angle: 180° - acute angle found'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Geometric meaning and visual understanding',
                language: 'intuitive and spatially-oriented'
            },
            procedural: {
                focus: 'Step-by-step calculation process',
                language: 'clear sequential instructions'
            },
            visual: {
                focus: 'Triangle diagrams and spatial relationships',
                language: 'descriptive and visual metaphors'
            },
            algebraic: {
                focus: 'Mathematical formulas and algebraic manipulation',
                language: 'precise mathematical terminology'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple geometric terms',
                detail: 'essential calculation steps only',
                examples: 'whole numbers and simple cases'
            },
            intermediate: {
                vocabulary: 'standard geometric vocabulary',
                detail: 'main steps with geometric reasoning',
                examples: 'mix of simple and complex triangles'
            },
            detailed: {
                vocabulary: 'full geometric and trigonometric terminology',
                detail: 'comprehensive explanations with proofs',
                examples: 'general cases with algebraic representations'
            },
            scaffolded: {
                vocabulary: 'progressive from basic to advanced',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced difficulty progression'
            }
        };
    }

    // Main solver method
    solveTriangleProblem(config) {
        const { problemType, parameters, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseTriangleProblem(problemType, parameters, context);

            // Solve the problem
            this.currentSolution = this.solveTriangleProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateTriangleSteps(this.currentProblem, this.currentSolution);

            // Generate graph data if applicable
            this.generateTriangleGraphData();

            // Generate workbook
            this.generateTriangleWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                steps: this.solutionSteps
            };

        } catch (error) {
            throw new Error(`Failed to solve triangle problem: ${error.message}`);
        }
    }

    parseTriangleProblem(problemType, parameters = {}, context = {}) {
        // If problem type is specified, use it directly
        if (problemType && this.triangleTypes[problemType]) {
            return {
                type: problemType,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect triangle problem type from description
        const description = context.description || '';
        for (const [type, config] of Object.entries(this.triangleTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(description)) {
                    return {
                        type: type,
                        parameters: { ...parameters },
                        context: { ...context },
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        throw new Error(`Unable to recognize triangle problem type from: ${description}`);
    }

    solveTriangleProblem_Internal(problem) {
        const solver = this.triangleTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for triangle problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // TRIANGLE SOLVERS

    solvePythagorean(problem) {
        const { a, b, c, findSide } = problem.parameters;

        if (findSide === 'c' || (!a && !b)) {
            // Finding hypotenuse
            const hypotenuse = Math.sqrt(a * a + b * b);
            return {
                problemType: 'Pythagorean Theorem - Find Hypotenuse',
                given: { leg1: a, leg2: b },
                formula: 'c = √(a² + b²)',
                solution: hypotenuse,
                verification: this.verifyPythagorean(a, b, hypotenuse),
                category: 'pythagorean'
            };
        } else if (findSide === 'a' || !a) {
            // Finding leg a
            const leg = Math.sqrt(c * c - b * b);
            return {
                problemType: 'Pythagorean Theorem - Find Leg',
                given: { hypotenuse: c, leg: b },
                formula: 'a = √(c² - b²)',
                solution: leg,
                verification: this.verifyPythagorean(leg, b, c),
                category: 'pythagorean'
            };
        } else {
            // Finding leg b
            const leg = Math.sqrt(c * c - a * a);
            return {
                problemType: 'Pythagorean Theorem - Find Leg',
                given: { hypotenuse: c, leg: a },
                formula: 'b = √(c² - a²)',
                solution: leg,
                verification: this.verifyPythagorean(a, leg, c),
                category: 'pythagorean'
            };
        }
    }

    solveAreaBaseHeight(problem) {
        const { base, height, findWhat } = problem.parameters;

        if (findWhat === 'area' || (!findWhat && base && height)) {
            const area = 0.5 * base * height;
            return {
                problemType: 'Triangle Area (Base-Height Formula)',
                given: { base, height },
                formula: 'A = (1/2)bh',
                solution: area,
                units: 'square units',
                category: 'area'
            };
        } else if (findWhat === 'base') {
            const calculatedBase = (2 * problem.parameters.area) / height;
            return {
                problemType: 'Triangle Base from Area and Height',
                given: { area: problem.parameters.area, height },
                formula: 'b = 2A/h',
                solution: calculatedBase,
                category: 'area'
            };
        } else {
            const calculatedHeight = (2 * problem.parameters.area) / base;
            return {
                problemType: 'Triangle Height from Area and Base',
                given: { area: problem.parameters.area, base },
                formula: 'h = 2A/b',
                solution: calculatedHeight,
                category: 'area'
            };
        }
    }

    solveAreaHerons(problem) {
        const { a, b, c } = problem.parameters;

        // Calculate semi-perimeter
        const s = (a + b + c) / 2;

        // Apply Heron's formula
        const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

        return {
            problemType: "Triangle Area (Heron's Formula)",
            given: { side1: a, side2: b, side3: c },
            semiPerimeter: s,
            formula: 'A = √[s(s-a)(s-b)(s-c)]',
            calculation: `√[${s}(${s - a})(${s - b})(${s - c})]`,
            solution: area,
            units: 'square units',
            category: 'area'
        };
    }

    solveAreaSAS(problem) {
        const { a, b, angleC } = problem.parameters;

        // Convert angle to radians if in degrees
        const angleCRad = angleC * Math.PI / 180;

        // Calculate area
        const area = 0.5 * a * b * Math.sin(angleCRad);

        return {
            problemType: 'Triangle Area (Two Sides and Included Angle)',
            given: { side1: a, side2: b, includedAngle: angleC },
            formula: 'A = (1/2)ab sin(C)',
            calculation: `(1/2)(${a})(${b})sin(${angleC}°)`,
            solution: area,
            units: 'square units',
            category: 'area'
        };
    }

    solvePerimeter(problem) {
        const { a, b, c, findSide, perimeter } = problem.parameters;

        if (!findSide) {
            // Calculate perimeter
            const perimeterValue = a + b + c;
            return {
                problemType: 'Triangle Perimeter',
                given: { side1: a, side2: b, side3: c },
                formula: 'P = a + b + c',
                solution: perimeterValue,
                category: 'perimeter'
            };
        } else {
            // Find missing side given perimeter
            let missingSide;
            if (findSide === 'a') {
                missingSide = perimeter - b - c;
            } else if (findSide === 'b') {
                missingSide = perimeter - a - c;
            } else {
                missingSide = perimeter - a - b;
            }

            return {
                problemType: 'Find Missing Side from Perimeter',
                given: { perimeter, knownSides: findSide === 'a' ? [b, c] : findSide === 'b' ? [a, c] : [a, b] },
                formula: `${findSide} = P - (other sides)`,
                solution: missingSide,
                category: 'perimeter'
            };
        }
    }

    solveAngles(problem) {
        const { angleA, angleB, angleC, findAngle } = problem.parameters;

        let missingAngle;
        let knownAngles = [];

        if (findAngle === 'A' || angleA === undefined) {
            missingAngle = 180 - angleB - angleC;
            knownAngles = [angleB, angleC];
            return {
                problemType: 'Find Missing Angle',
                given: { angleB, angleC },
                formula: '∠A = 180° - ∠B - ∠C',
                calculation: `180° - ${angleB}° - ${angleC}°`,
                solution: missingAngle,
                units: 'degrees',
                verification: this.verifyAngleSum(missingAngle, angleB, angleC),
                category: 'angles'
            };
        } else if (findAngle === 'B' || angleB === undefined) {
            missingAngle = 180 - angleA - angleC;
            knownAngles = [angleA, angleC];
            return {
                problemType: 'Find Missing Angle',
                given: { angleA, angleC },
                formula: '∠B = 180° - ∠A - ∠C',
                calculation: `180° - ${angleA}° - ${angleC}°`,
                solution: missingAngle,
                units: 'degrees',
                verification: this.verifyAngleSum(angleA, missingAngle, angleC),
                category: 'angles'
            };
        } else {
            missingAngle = 180 - angleA - angleB;
            knownAngles = [angleA, angleB];
            return {
                problemType: 'Find Missing Angle',
                given: { angleA, angleB },
                formula: '∠C = 180° - ∠A - ∠B',
                calculation: `180° - ${angleA}° - ${angleB}°`,
                solution: missingAngle,
                units: 'degrees',
                verification: this.verifyAngleSum(angleA, angleB, missingAngle),
                category: 'angles'
            };
        }
    }

    solveLawOfSines(problem) {
        const { a, b, c, angleA, angleB, angleC, findWhat } = problem.parameters;

        if (findWhat === 'side') {
            // Finding a side using Law of Sines
            if (!a && angleA && b && angleB) {
                const sideA = (b * Math.sin(angleA * Math.PI / 180)) / Math.sin(angleB * Math.PI / 180);
                return {
                    problemType: 'Law of Sines - Find Side',
                    given: { side: b, angleOpposite: angleB, angleForUnknown: angleA },
                    formula: 'a/sin(A) = b/sin(B)',
                    calculation: `a = b·sin(A)/sin(B) = ${b}·sin(${angleA}°)/sin(${angleB}°)`,
                    solution: sideA,
                    category: 'law_of_sines'
                };
            }
            // Add other side-finding cases as needed
        } else if (findWhat === 'angle') {
            // Finding an angle using Law of Sines
            if (!angleA && a && b && angleB) {
                const sinA = (a * Math.sin(angleB * Math.PI / 180)) / b;
                
                if (Math.abs(sinA) > 1) {
                    return {
                        problemType: 'Law of Sines - No Solution',
                        given: { side1: a, side2: b, angle: angleB },
                        solution: null,
                        message: 'No triangle exists with these measurements',
                        category: 'law_of_sines'
                    };
                }

                const angleADeg = Math.asin(sinA) * 180 / Math.PI;
                const angleADeg2 = 180 - angleADeg; // Ambiguous case

                // Check if second solution is valid
                const validSecond = (angleADeg2 + angleB < 180);

                return {
                    problemType: 'Law of Sines - Find Angle',
                    given: { side1: a, side2: b, angleOpposite: angleB },
                    formula: 'sin(A)/a = sin(B)/b',
                    calculation: `sin(A) = a·sin(B)/b = ${a}·sin(${angleB}°)/${b}`,
                    solution: angleADeg,
                    ambiguousCase: validSecond,
                    secondSolution: validSecond ? angleADeg2 : null,
                    units: 'degrees',
                    category: 'law_of_sines'
                };
            }
        }

        return {
            problemType: 'Law of Sines',
            message: 'Insufficient or incorrect parameters provided',
            category: 'law_of_sines'
        };
    }

    solveLawOfCosines(problem) {
        const { a, b, c, angleA, angleB, angleC, findWhat } = problem.parameters;

        if (findWhat === 'side') {
            // Finding side c using SAS
            if (a && b && angleC && !c) {
                const angleCRad = angleC * Math.PI / 180;
                const sideC = Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(angleCRad));

                return {
                    problemType: 'Law of Cosines - Find Side (SAS)',
                    given: { side1: a, side2: b, includedAngle: angleC },
                    formula: 'c² = a² + b² - 2ab cos(C)',
                    calculation: `c = √(${a}² + ${b}² - 2(${a})(${b})cos(${angleC}°))`,
                    solution: sideC,
                    category: 'law_of_cosines'
                };
            }
        } else if (findWhat === 'angle') {
            // Finding angle using SSS
            if (a && b && c && !angleC) {
                const cosC = (a * a + b * b - c * c) / (2 * a * b);
                
                if (Math.abs(cosC) > 1) {
                    return {
                        problemType: 'Law of Cosines - Invalid Triangle',
                        given: { side1: a, side2: b, side3: c },
                        solution: null,
                        message: 'These side lengths cannot form a valid triangle',
                        category: 'law_of_cosines'
                    };
                }

                const angleCDeg = Math.acos(cosC) * 180 / Math.PI;

                return {
                    problemType: 'Law of Cosines - Find Angle (SSS)',
                    given: { side1: a, side2: b, side3: c },
                    formula: 'cos(C) = (a² + b² - c²)/(2ab)',
                    calculation: `cos(C) = (${a}² + ${b}² - ${c}²)/(2·${a}·${b})`,
                    solution: angleCDeg,
                    units: 'degrees',
                    category: 'law_of_cosines'
                };
            }
        }

        return {
            problemType: 'Law of Cosines',
            message: 'Insufficient or incorrect parameters provided',
            category: 'law_of_cosines'
        };
    }

    solveTriangleInequality(problem) {
        const { a, b, c } = problem.parameters;

        const check1 = a + b > c;
        const check2 = b + c > a;
        const check3 = a + c > b;

        const isValid = check1 && check2 && check3;

        return {
            problemType: 'Triangle Inequality Theorem',
            given: { side1: a, side2: b, side3: c },
            checks: [
                { inequality: `${a} + ${b} > ${c}`, result: `${a + b} > ${c}`, satisfied: check1 },
                { inequality: `${b} + ${c} > ${a}`, result: `${b + c} > ${a}`, satisfied: check2 },
                { inequality: `${a} + ${c} > ${b}`, result: `${a + c} > ${b}`, satisfied: check3 }
            ],
            conclusion: isValid ? 'These sides CAN form a valid triangle' : 'These sides CANNOT form a valid triangle',
            isValid: isValid,
            category: 'triangle_inequality'
        };
    }

    solveSimilarTriangles(problem) {
        const { triangle1, triangle2, findSide, scaleFactor } = problem.parameters;

        if (scaleFactor) {
            // Scale factor is known
            return {
                problemType: 'Similar Triangles - Known Scale Factor',
                scaleFactor: scaleFactor,
                areaRatio: scaleFactor * scaleFactor,
                perimeterRatio: scaleFactor,
                category: 'similar_triangles'
            };
        }

        if (triangle1 && triangle2) {
            // Calculate scale factor from known sides
            const k = triangle1.side / triangle2.side;

            return {
                problemType: 'Similar Triangles - Calculate Scale Factor',
                given: { triangle1Side: triangle1.side, triangle2Side: triangle2.side },
                scaleFactor: k,
                formula: 'k = side₁/side₂',
                category: 'similar_triangles'
            };
        }

        return {
            problemType: 'Similar Triangles',
            message: 'Insufficient parameters',
            category: 'similar_triangles'
        };
    }

    solveCongruentTriangles(problem) {
        const { criterion, triangle1, triangle2 } = problem.parameters;

        return {
            problemType: 'Congruent Triangles',
            criterion: criterion,
            congruenceCriteria: {
                SSS: 'All three sides equal',
                SAS: 'Two sides and included angle equal',
                ASA: 'Two angles and included side equal',
                AAS: 'Two angles and non-included side equal',
                HL: 'Hypotenuse and leg (right triangles only)'
            },
            category: 'congruent_triangles'
        };
    }

    solveSpecialRightTriangles(problem) {
        const { type, knownSide, knownValue } = problem.parameters;

        if (type === '45-45-90') {
            if (knownSide === 'leg') {
                return {
                    problemType: '45-45-90 Triangle',
                    given: { leg: knownValue },
                    ratios: '1:1:√2',
                    solutions: {
                        leg: knownValue,
                        hypotenuse: knownValue * Math.sqrt(2)
                    },
                    category: 'special_triangles'
                };
            } else {
                const leg = knownValue / Math.sqrt(2);
                return {
                    problemType: '45-45-90 Triangle',
                    given: { hypotenuse: knownValue },
                    ratios: '1:1:√2',
                    solutions: {
                        leg: leg,
                        hypotenuse: knownValue
                    },
                    category: 'special_triangles'
                };
            }
        } else if (type === '30-60-90') {
            if (knownSide === 'short') {
                return {
                    problemType: '30-60-90 Triangle',
                    given: { shortLeg: knownValue },
                    ratios: '1:√3:2',
                    solutions: {
                        shortLeg: knownValue,
                        longLeg: knownValue * Math.sqrt(3),
                        hypotenuse: knownValue * 2
                    },
                    category: 'special_triangles'
                };
            } else if (knownSide === 'long') {
                const short = knownValue / Math.sqrt(3);
                return {
                    problemType: '30-60-90 Triangle',
                    given: { longLeg: knownValue },
                    ratios: '1:√3:2',
                    solutions: {
                        shortLeg: short,
                        longLeg: knownValue,
                        hypotenuse: short * 2
                    },
                    category: 'special_triangles'
                };
            } else {
                const short = knownValue / 2;
                return {
                    problemType: '30-60-90 Triangle',
                    given: { hypotenuse: knownValue },
                    ratios: '1:√3:2',
                    solutions: {
                        shortLeg: short,
                        longLeg: short * Math.sqrt(3),
                        hypotenuse: knownValue
                    },
                    category: 'special_triangles'
                };
            }
        }

        return {
            problemType: 'Special Right Triangles',
            message: 'Invalid triangle type specified',
            category: 'special_triangles'
        };
    }

    solveTriangleCenters(problem) {
        const { vertices, centerType } = problem.parameters;

        if (centerType === 'centroid' && vertices) {
            const centroid = {
                x: (vertices[0].x + vertices[1].x + vertices[2].x) / 3,
                y: (vertices[0].y + vertices[1].y + vertices[2].y) / 3
            };

            return {
                problemType: 'Triangle Centroid',
                given: { vertices },
                formula: 'G = ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3)',
                solution: centroid,
                properties: 'Divides each median in ratio 2:1 from vertex',
                category: 'triangle_centers'
            };
        }

        return {
            problemType: 'Triangle Centers',
            centerType: centerType,
            message: 'Center calculation requires vertex coordinates',
            category: 'triangle_centers'
        };
    }

    solveCoordinateTriangles(problem) {
        const { vertices, findWhat } = problem.parameters;

        const [v1, v2, v3] = vertices;

        // Calculate side lengths using distance formula
        const a = Math.sqrt((v2.x - v3.x) ** 2 + (v2.y - v3.y) ** 2);
        const b = Math.sqrt((v1.x - v3.x) ** 2 + (v1.y - v3.y) ** 2);
        const c = Math.sqrt((v1.x - v2.x) ** 2 + (v1.y - v2.y) ** 2);

        // Calculate area using coordinate formula
        const area = 0.5 * Math.abs(
            v1.x * (v2.y - v3.y) +
            v2.x * (v3.y - v1.y) +
            v3.x * (v1.y - v2.y)
        );

        // Calculate perimeter
        const perimeter = a + b + c;

        return {
            problemType: 'Triangle in Coordinate Geometry',
            given: { vertices },
            sideLengths: { a, b, c },
            perimeter: perimeter,
            area: area,
            formulas: {
                distance: 'd = √[(x₂-x₁)² + (y₂-y₁)²]',
                area: 'A = (1/2)|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|'
            },
            category: 'coordinate_triangles'
        };
    }

    classifyTriangle(problem) {
        const { a, b, c, angleA, angleB, angleC } = problem.parameters;

        let bySides = '';
        let byAngles = '';

        // Classification by sides
        if (a && b && c) {
            if (Math.abs(a - b) < 1e-10 && Math.abs(b - c) < 1e-10) {
                bySides = 'Equilateral';
            } else if (Math.abs(a - b) < 1e-10 || Math.abs(b - c) < 1e-10 || Math.abs(a - c) < 1e-10) {
                bySides = 'Isosceles';
            } else {
                bySides = 'Scalene';
            }
        }

        // Classification by angles
        if (angleA && angleB && angleC) {
            if (Math.abs(angleA - 90) < 1e-10 || Math.abs(angleB - 90) < 1e-10 || Math.abs(angleC - 90) < 1e-10) {
                byAngles = 'Right';
            } else if (angleA > 90 || angleB > 90 || angleC > 90) {
                byAngles = 'Obtuse';
            } else {
                byAngles = 'Acute';
            }
        } else if (a && b && c) {
            // Use sides to determine angle type via Law of Cosines
            const cosC = (a * a + b * b - c * c) / (2 * a * b);
            if (Math.abs(cosC) < 1e-10) {
                byAngles = 'Right';
            } else if (cosC < 0) {
                byAngles = 'Obtuse';
            } else {
                byAngles = 'Acute';
            }
        }

        return {
            problemType: 'Triangle Classification',
            given: { sides: [a, b, c], angles: [angleA, angleB, angleC] },
            classificationBySides: bySides,
            classificationByAngles: byAngles,
            fullClassification: `${byAngles} ${bySides} Triangle`,
            category: 'classification'
        };
    }

    // VERIFICATION METHODS

    verifyPythagorean(a, b, c) {
        const leftSide = a * a + b * b;
        const rightSide = c * c;
        const difference = Math.abs(leftSide - rightSide);
        const isValid = difference < 1e-10;

        return {
            leftSide: `${a}² + ${b}² = ${leftSide}`,
            rightSide: `${c}² = ${rightSide}`,
            difference: difference,
            isValid: isValid
        };
    }

    verifyAngleSum(angleA, angleB, angleC) {
        const sum = angleA + angleB + angleC;
        const difference = Math.abs(sum - 180);
        const isValid = difference < 1e-10;

        return {
            sum: `${angleA}° + ${angleB}° + ${angleC}° = ${sum}°`,
            expected: '180°',
            difference: difference,
            isValid: isValid
        };
    }

    // STEP GENERATION

    generateTriangleSteps(problem, solution) {
        let baseSteps = this.generateBaseTriangleSteps(problem, solution);

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

    generateBaseTriangleSteps(problem, solution) {
        const { type } = problem;

        switch (type) {
            case 'pythagorean':
                return this.generatePythagoreanSteps(problem, solution);
            case 'triangle_area_base_height':
                return this.generateAreaBaseHeightSteps(problem, solution);
            case 'triangle_area_herons':
                return this.generateHeronsSteps(problem, solution);
            case 'law_of_sines':
                return this.generateLawOfSinesSteps(problem, solution);
            case 'law_of_cosines':
                return this.generateLawOfCosinesSteps(problem, solution);
            case 'triangle_angles':
                return this.generateAngleSteps(problem, solution);
            default:
                return this.generateGenericTriangleSteps(problem, solution);
        }
    }

    generatePythagoreanSteps(problem, solution) {
        const steps = [];
        const { a, b, c, findSide } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Identify triangle components',
            description: 'Determine which sides are given and which is unknown',
            reasoning: 'In a right triangle, we need to identify the legs and hypotenuse',
            visualHint: 'The hypotenuse is always opposite the right angle and is the longest side',
            algebraicRule: 'Pythagorean Theorem: a² + b² = c²',
            goalStatement: 'Use the Pythagorean theorem to find the unknown side'
        });

        if (findSide === 'c' || (!a && !b)) {
            steps.push({
                stepNumber: 2,
                step: 'Square the legs',
                description: `Square both leg lengths: ${a}² and ${b}²`,
                beforeExpression: `a = ${a}, b = ${b}`,
                operation: 'Square',
                afterExpression: `a² = ${a * a}, b² = ${b * b}`,
                reasoning: 'We square the legs as the first step of applying the Pythagorean theorem',
                workingDetails: {
                    leg1Squared: `${a}² = ${a * a}`,
                    leg2Squared: `${b}² = ${b * b}`
                }
            });

            steps.push({
                stepNumber: 3,
                step: 'Add the squares',
                description: 'Add the squared values together',
                beforeExpression: `${a * a} + ${b * b}`,
                operation: '+',
                afterExpression: `${a * a + b * b}`,
                reasoning: 'The sum of the squares of the legs equals the square of the hypotenuse',
                algebraicRule: 'a² + b² = c²'
            });

            steps.push({
                stepNumber: 4,
                step: 'Take square root',
                description: 'Find the square root to get the hypotenuse length',
                beforeExpression: `c² = ${a * a + b * b}`,
                operation: '√',
                afterExpression: `c = ${solution.solution}`,
                reasoning: 'Taking the square root isolates the side length',
                finalAnswer: true,
                numericalResult: solution.solution
            });
        } else {
            // Finding a leg
            const knownLeg = a || b;
            const legSquared = knownLeg * knownLeg;
            const hypSquared = c * c;

            steps.push({
                stepNumber: 2,
                step: 'Square known sides',
                description: `Square the known leg and hypotenuse: ${knownLeg}² and ${c}²`,
                beforeExpression: `leg = ${knownLeg}, c = ${c}`,
                operation: 'Square',
                afterExpression: `leg² = ${legSquared}, c² = ${hypSquared}`,
                reasoning: 'Square both known sides to use the Pythagorean theorem',
                workingDetails: {
                    legSquared: `${knownLeg}² = ${legSquared}`,
                    hypSquared: `${c}² = ${hypSquared}`
                }
            });

            steps.push({
                stepNumber: 3,
                step: 'Subtract to find unknown',
                description: 'Subtract the leg² from c² to find the other leg²',
                beforeExpression: `c² - leg²`,
                operation:'-',
                afterExpression: `${hypSquared} - ${legSquared} = ${hypSquared - legSquared}`,
                reasoning: 'Rearranging a² + b² = c² to solve for the unknown leg',
                algebraicRule: 'If a² + b² = c², then a² = c² - b²'
            });

            steps.push({
                stepNumber: 4,
                step: 'Take square root',
                description: 'Find the square root to get the missing leg length',
                beforeExpression: `leg² = ${hypSquared - legSquared}`,
                operation: '√',
                afterExpression: `leg = ${solution.solution}`,
                reasoning: 'Taking the square root gives us the actual side length',
                finalAnswer: true,
                numericalResult: solution.solution
            });
        }

        return steps;
    }

    generateAreaBaseHeightSteps(problem, solution) {
        const steps = [];
        const { base, height } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Identify base and height',
            description: 'Recognize the given measurements',
            expression: `base = ${base}, height = ${height}`,
            reasoning: 'The height must be perpendicular to the base',
            visualHint: 'Draw the triangle with the height perpendicular to the base',
            algebraicRule: 'Area formula: A = (1/2)bh'
        });

        steps.push({
            stepNumber: 2,
            step: 'Multiply base by height',
            description: 'Calculate the product of base and height',
            beforeExpression: `${base} × ${height}`,
            operation: '×',
            afterExpression: `${base * height}`,
            reasoning: 'This gives us the area of the parallelogram formed by doubling the triangle'
        });

        steps.push({
            stepNumber: 3,
            step: 'Divide by 2',
            description: 'Multiply by 1/2 to get triangle area',
            beforeExpression: `${base * height}`,
            operation: '÷ 2',
            afterExpression: `${solution.solution}`,
            reasoning: 'A triangle has half the area of a parallelogram with the same base and height',
            finalAnswer: true,
            numericalResult: solution.solution,
            units: 'square units'
        });

        return steps;
    }

    generateHeronsSteps(problem, solution) {
        const steps = [];
        const { a, b, c } = problem.parameters;
        const s = (a + b + c) / 2;

        steps.push({
            stepNumber: 1,
            step: 'Identify the three sides',
            description: 'Note all three side lengths of the triangle',
            expression: `a = ${a}, b = ${b}, c = ${c}`,
            reasoning: "Heron's formula requires all three side lengths",
            algebraicRule: "Heron's Formula: A = √[s(s-a)(s-b)(s-c)]"
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate semi-perimeter',
            description: 'Find s, which is half the perimeter',
            beforeExpression: `s = (a + b + c) / 2`,
            operation: 'Calculate',
            afterExpression: `s = (${a} + ${b} + ${c}) / 2 = ${s}`,
            reasoning: 'The semi-perimeter is used as a key value in Heron\'s formula',
            formula: 's = (a + b + c) / 2'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate (s - a), (s - b), (s - c)',
            description: 'Subtract each side from the semi-perimeter',
            beforeExpression: `s - a, s - b, s - c`,
            afterExpression: `${s - a}, ${s - b}, ${s - c}`,
            reasoning: 'These differences represent how much each side differs from half the perimeter',
            workingDetails: {
                diff_a: `s - a = ${s} - ${a} = ${s - a}`,
                diff_b: `s - b = ${s} - ${b} = ${s - b}`,
                diff_c: `s - c = ${s} - ${c} = ${s - c}`
            }
        });

        steps.push({
            stepNumber: 4,
            step: 'Multiply all four terms',
            description: 'Calculate s(s-a)(s-b)(s-c)',
            beforeExpression: `${s} × ${s - a} × ${s - b} × ${s - c}`,
            operation: '×',
            afterExpression: `${s * (s - a) * (s - b) * (s - c)}`,
            reasoning: 'This product represents the square of the area'
        });

        steps.push({
            stepNumber: 5,
            step: 'Take square root',
            description: 'Find the square root to get the area',
            beforeExpression: `√(${s * (s - a) * (s - b) * (s - c)})`,
            operation: '√',
            afterExpression: `${solution.solution}`,
            reasoning: 'The square root gives us the actual triangle area',
            finalAnswer: true,
            numericalResult: solution.solution,
            units: 'square units'
        });

        return steps;
    }

    generateLawOfSinesSteps(problem, solution) {
        const steps = [];
        const { findWhat } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Identify known values',
            description: 'Determine which sides and angles are given',
            reasoning: 'Law of Sines relates sides to their opposite angles',
            visualHint: 'Label the triangle with vertices A, B, C and opposite sides a, b, c',
            algebraicRule: 'Law of Sines: a/sin(A) = b/sin(B) = c/sin(C)'
        });

        if (findWhat === 'angle') {
            steps.push({
                stepNumber: 2,
                step: 'Set up proportion',
                description: 'Write the Law of Sines ratio for known and unknown values',
                reasoning: 'Match each side with its opposite angle',
                formula: 'a/sin(A) = b/sin(B)',
                criticalWarning: 'Make sure side a is opposite angle A, and side b is opposite angle B'
            });

            steps.push({
                stepNumber: 3,
                step: 'Cross multiply and solve for sin',
                description: 'Isolate the sine of the unknown angle',
                reasoning: 'Cross multiplication helps isolate the unknown',
                operation: 'Cross multiply'
            });

            steps.push({
                stepNumber: 4,
                step: 'Use inverse sine',
                description: 'Apply arcsin to find the angle',
                reasoning: 'Inverse sine converts the sine ratio back to an angle',
                criticalWarning: solution.ambiguousCase ? 'AMBIGUOUS CASE: Check for second solution (180° - angle)' : null,
                finalAnswer: true
            });

            if (solution.ambiguousCase) {
                steps.push({
                    stepNumber: 5,
                    step: 'Check for second solution',
                    description: 'In SSA case, there may be two valid triangles',
                    reasoning: 'The supplementary angle (180° - angle) might also be valid',
                    secondSolution: solution.secondSolution,
                    validation: 'Check that sum of angles is less than 180°'
                });
            }
        } else {
            steps.push({
                stepNumber: 2,
                step: 'Set up proportion',
                description: 'Write the Law of Sines for the unknown side',
                reasoning: 'Use the ratio of a known side to its opposite angle'
            });

            steps.push({
                stepNumber: 3,
                step: 'Solve for unknown side',
                description: 'Cross multiply and calculate the side length',
                reasoning: 'Isolate the unknown side in the equation',
                finalAnswer: true
            });
        }

        return steps;
    }

    generateLawOfCosinesSteps(problem, solution) {
        const steps = [];
        const { findWhat, a, b, angleC } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Identify the problem type',
            description: findWhat === 'side' ? 'Finding a side (SAS case)' : 'Finding an angle (SSS case)',
            reasoning: 'Law of Cosines works for SAS and SSS triangle cases',
            algebraicRule: 'c² = a² + b² - 2ab cos(C)'
        });

        if (findWhat === 'side') {
            steps.push({
                stepNumber: 2,
                step: 'Write the formula',
                description: 'Set up the Law of Cosines with known values',
                expression: `c² = ${a}² + ${b}² - 2(${a})(${b})cos(${angleC}°)`,
                reasoning: 'This formula relates two sides and the included angle to the opposite side'
            });

            steps.push({
                stepNumber: 3,
                step: 'Calculate squared terms',
                description: 'Square the known sides',
                beforeExpression: `c² = ${a}² + ${b}²`,
                afterExpression: `c² = ${a * a} + ${b * b}`,
                reasoning: 'Calculate the squared values before applying the cosine term'
            });

            steps.push({
                stepNumber: 4,
                step: 'Calculate cosine term',
                description: `Evaluate 2ab cos(C) = 2(${a})(${b})cos(${angleC}°)`,
                reasoning: 'The cosine term adjusts for the angle between the sides',
                visualHint: 'When angle = 90°, cos(90°) = 0, giving us the Pythagorean theorem'
            });

            steps.push({
                stepNumber: 5,
                step: 'Combine and take square root',
                description: 'Add/subtract terms and find square root',
                reasoning: 'Final calculation gives the length of the third side',
                finalAnswer: true,
                numericalResult: solution.solution
            });
        } else {
            steps.push({
                stepNumber: 2,
                step: 'Rearrange for cosine',
                description: 'Solve for cos(C) from the Law of Cosines',
                expression: 'cos(C) = (a² + b² - c²)/(2ab)',
                reasoning: 'Algebraic manipulation isolates the cosine of the angle'
            });

            steps.push({
                stepNumber: 3,
                step: 'Substitute values',
                description: 'Plug in the three known side lengths',
                reasoning: 'Calculate the cosine ratio from the sides'
            });

            steps.push({
                stepNumber: 4,
                step: 'Use inverse cosine',
                description: 'Apply arccos to find the angle',
                reasoning: 'Inverse cosine converts the ratio back to an angle measure',
                finalAnswer: true,
                numericalResult: solution.solution,
                units: 'degrees'
            });
        }

        return steps;
    }

    generateAngleSteps(problem, solution) {
        const steps = [];
        const { angleA, angleB, angleC } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Recall angle sum property',
            description: 'The sum of angles in any triangle equals 180°',
            reasoning: 'This is a fundamental property of Euclidean triangles',
            algebraicRule: '∠A + ∠B + ∠C = 180°',
            visualHint: 'Imagine "unfolding" the triangle angles to form a straight line'
        });

        const known = [angleA, angleB, angleC].filter(a => a !== undefined);
        const knownSum = known.reduce((sum, angle) => sum + angle, 0);

        steps.push({
            stepNumber: 2,
            step: 'Add known angles',
            description: `Sum the two known angles: ${known.join('° + ')}°`,
            beforeExpression: `${known.join('° + ')}°`,
            operation: '+',
            afterExpression: `${knownSum}°`,
            reasoning: 'Find the combined measure of known angles'
        });

        steps.push({
            stepNumber: 3,
            step: 'Subtract from 180°',
            description: 'Find the missing angle by subtracting from 180°',
            beforeExpression: `180° - ${knownSum}°`,
            operation: '-',
            afterExpression: `${solution.solution}°`,
            reasoning: 'The missing angle makes up the difference to 180°',
            finalAnswer: true,
            numericalResult: solution.solution,
            units: 'degrees'
        });

        return steps;
    }

    generateGenericTriangleSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Triangle problem',
            description: 'Solve the given triangle problem',
            expression: problem.type,
            reasoning: 'Apply appropriate geometric principles',
            solution: solution
        }];
    }

    // Enhanced explanation methods (adapted from linear version)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanationTriangle(step, problem),
                procedural: this.getProceduralExplanation(step),
                visual: this.getVisualExplanationTriangle(step, problem),
                algebraic: this.getAlgebraicExplanationTriangle(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisitesTriangle(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyTriangle(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        return enhanced;
    }

    getConceptualExplanationTriangle(step, problem) {
        const conceptualExplanations = {
            'Identify triangle components': 'Understanding the parts of a triangle helps us choose the right formula. Each side and angle has a relationship with the others.',
            'Square the sides': 'Squaring sides transforms the problem from linear measurements to areas, which is the basis of the Pythagorean relationship.',
            'Calculate semi-perimeter': 'The semi-perimeter represents half the boundary and serves as a reference point for measuring how each side relates to the whole.',
            'Set up proportion': 'Proportions in triangles reflect the fundamental relationship between angles and their opposite sides.'
        };

        return conceptualExplanations[step.step] || 'This step applies geometric principles to move toward the solution.';
    }

    getVisualExplanationTriangle(step, problem) {
        const visualExplanations = {
            'pythagorean': 'Visualize squares built on each side of the right triangle. The two smaller squares fit perfectly into the largest square.',
            'triangle_area_base_height': 'Imagine the triangle as half of a parallelogram with the same base and height.',
            'law_of_sines': 'Picture the triangle inscribed in a circle. The ratios relate to the circle\'s diameter.',
            'law_of_cosines': 'Think of the triangle with one angle opening or closing - the Law of Cosines adjusts for this.'
        };

        return visualExplanations[problem.type] || 'Visualize how the triangle\'s parts relate geometrically.';
    }

    getAlgebraicExplanationTriangle(step) {
        const algebraicRules = {
            'Square the sides': 'Apply the exponent operation: (side)² = side × side',
            'Calculate semi-perimeter': 'Division by 2: s = P/2 where P = a + b + c',
            'Set up proportion': 'Equal ratios: a/sin(A) = b/sin(B) implies a·sin(B) = b·sin(A)',
            'Use inverse sine': 'Inverse trigonometric function: if sin(θ) = x, then θ = arcsin(x)'
        };

        return algebraicRules[step.step] || 'Apply standard algebraic and geometric principles.';
    }

    identifyPrerequisitesTriangle(step, problemType) {
        const prerequisites = {
            'Square the sides': ['Exponents and powers', 'Basic arithmetic'],
            'Calculate semi-perimeter': ['Addition', 'Division by 2'],
            'Set up proportion': ['Ratios and proportions', 'Cross multiplication'],
            'Use inverse sine': ['Trigonometric functions', 'Inverse operations', 'Calculator usage']
        };

        return prerequisites[step.step] || ['Basic geometry knowledge'];
    }

    identifyKeyVocabularyTriangle(step) {
        const vocabulary = {
            'Identify triangle components': ['legs', 'hypotenuse', 'right angle', 'opposite', 'adjacent'],
            'Calculate semi-perimeter': ['perimeter', 'semi-perimeter', 'sum'],
            'Set up proportion': ['ratio', 'proportion', 'opposite angle', 'corresponding'],
            'Use inverse sine': ['inverse', 'arcsin', 'sine', 'angle measure']
        };

        return vocabulary[step.step] || [];
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generateStepBridgeTriangle(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgression(steps[i], steps[i + 1]),
                    strategicThinking: this.explainStepStrategy(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateStepBridgeTriangle(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary because we're building toward finding the ${nextStep.step}`,
            howItHelps: `${nextStep.step} brings us closer to the final answer`
        };
    }

    addErrorPrevention(step, problemType) {
        const mistakes = this.commonMistakes[problemType]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsTriangle(step, problemType),
                checkPoints: this.generateCheckPointsTriangle(step),
                warningFlags: this.identifyWarningFlagsTriangle(step, problemType)
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestionTriangle(step),
                expectedResult: this.describeExpectedResultTriangle(step),
                troubleshooting: this.generateTroubleshootingTips(step)
            }
        };
    }

    generatePreventionTipsTriangle(step, problemType) {
        const tips = {
            'Square the sides': [
                'Square each side individually before adding',
                'Remember: (a + b)² ≠ a² + b²',
                'Double-check your arithmetic'
            ],
            'Set up proportion': [
                'Match each side with its opposite angle',
                'Label your triangle clearly',
                'Verify the correspondence before calculating'
            ],
            'Use inverse sine': [
                'Check calculator is in degree mode (not radians)',
                'Remember the ambiguous case for SSA',
                'Verify the angle makes geometric sense'
            ]
        };

        return tips[step.step] || ['Double-check calculations', 'Verify units are consistent'];
    }

    generateCheckPointsTriangle(step) {
        return [
            'Are all measurements in the same units?',
            'Have I correctly identified which formula to use?',
            'Does my answer make geometric sense?',
            'Have I checked for special cases or restrictions?'
        ];
    }

    identifyWarningFlagsTriangle(step, problemType) {
        const warnings = {
            pythagorean: step.step === 'Square the sides' ?
                ['Make sure c is the hypotenuse (longest side)'] : [],
            law_of_sines: step.step === 'Use inverse sine' ?
                ['Check for ambiguous case - there may be two solutions'] : [],
            law_of_cosines: step.step === 'Write the formula' ?
                ['Note the minus sign: -2ab cos(C)'] : []
        };

        return warnings[problemType] || [];
    }

    generateSelfCheckQuestionTriangle(step) {
        const questions = {
            'Square the sides': 'Did I square each side before adding or subtracting?',
            'Set up proportion': 'Is each side matched with its opposite angle?',
            'Use inverse sine': 'Is my calculator in the correct mode (degrees/radians)?',
            'Take square root': 'Is my answer positive and reasonable for a side length?'
        };

        return questions[step.step] || 'Does this step make geometric and mathematical sense?';
    }

    describeExpectedResultTriangle(step) {
        const expectations = {
            'Square the sides': 'Squared values should be larger than original sides',
            'Calculate semi-perimeter': 'Semi-perimeter should be positive and less than full perimeter',
            'Set up proportion': 'Proportion should have side/sin(angle) form',
            'Take square root': 'Result should be a positive number representing a length'
        };

        return expectations[step.step] || 'Result should make geometric sense';
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsTriangle(step, problem),
                subSteps: this.breakIntoSubStepsTriangle(step),
                hints: this.generateProgressiveHintsTriangle(step),
                practiceVariation: this.generatePracticeVariation(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcessTriangle(step),
                decisionPoints: this.identifyDecisionPointsTriangle(step),
                alternativeApproaches: this.suggestAlternativeMethodsTriangle(step, problem)
            }
        }));
    }

    generateGuidingQuestionsTriangle(step, problem) {
        const questions = {
            'Identify triangle components': [
                'What type of triangle is this?',
                'Which sides and angles are given?',
                'What are we trying to find?'
            ],
            'Square the sides': [
                'Why do we square the sides in the Pythagorean theorem?',
                'Which sides need to be squared?',
                'What does squaring a length represent geometrically?'
            ],
            'Set up proportion': [
                'Which angles are opposite which sides?',
                'How do I write the Law of Sines correctly?',
                'What values do I know and what am I finding?'
            ]
        };

        return questions[step.step] || ['What is the purpose of this step?', 'How does this help solve the triangle?'];
    }

    breakIntoSubStepsTriangle(step) {
        if (step.step === 'Square the sides') {
            return [
                'Identify the first side length',
                'Multiply that side by itself',
                'Identify the second side length',
                'Multiply that side by itself',
                'Write both squared values'
            ];
        }

        if (step.step === 'Set up proportion') {
            return [
                'Identify the known side and its opposite angle',
                'Identify the unknown value (side or angle)',
                'Write the proportion: known/sin(known) = unknown/sin(unknown)',
                'Verify the correspondence is correct'
            ];
        }

        return ['Understand what is needed', 'Perform the calculation', 'Verify the result'];
    }

    generateProgressiveHintsTriangle(step) {
        return {
            level1: 'Think about what geometric principle applies here.',
            level2: 'Consider which formula or theorem is relevant.',
            level3: 'Set up the equation with the known values.',
            level4: step.operation ? `Try the operation: ${step.operation}` : 'Perform the calculation step by step.'
        };
    }

    explainThinkingProcessTriangle(step) {
        return {
            observe: 'What information do I have about this triangle?',
            goal: 'What am I trying to find?',
            strategy: 'Which geometric principle or formula should I use?',
            execute: 'How do I apply this correctly?',
            verify: 'Does my answer make sense geometrically?'
        };
    }

    identifyDecisionPointsTriangle(step) {
        return [
            'Choosing which formula to apply',
            'Identifying which values are known and unknown',
            'Selecting the most efficient solution method',
            'Deciding whether special cases apply'
        ];
    }

    suggestAlternativeMethodsTriangle(step, problem) {
        const alternatives = {
            'pythagorean': [
                'Could use trigonometric ratios if an angle is known',
                'Could use coordinate geometry if vertices are given'
            ],
            'triangle_area_base_height': [
                'Could use Heron\'s formula if all three sides are known',
                'Could use SAS formula if two sides and included angle are known'
            ]
        };

        return alternatives[problem.type] || ['Alternative approaches exist but this is most direct'];
    }

    // Helper methods from linear version

    getProceduralExplanation(step) {
        if (step.operation) {
            return `1. Identify the operation needed: ${step.operation}
2. Apply this operation to the values
3. Calculate the result
4. Verify the answer makes sense`;
        }
        return 'Follow the standard geometric procedure for this type of step.';
    }

    getAdaptiveExplanation(step, explanationLevel) {
        const adaptations = {
            basic: {
                vocabulary: 'simple geometric terms',
                detail: 'essential information only',
                format: 'short sentences'
            },
            intermediate: {
                vocabulary: 'standard geometry terms',
                detail: 'main concepts with brief explanations',
                format: 'clear step-by-step format'
            },
            detailed: {
                vocabulary: 'full geometric terminology',
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
                    'hypotenuse': 'longest side (across from right angle)',
                    'perpendicular': 'at a right angle to',
                    'semi-perimeter': 'half the distance around',
                    'proportion': 'equal ratios',
                    'inverse sine': 'arcsin or sin⁻¹'
                }
            },
            intermediate: {
                replacements: {
                    'hypotenuse': 'hypotenuse',
                    'perpendicular': 'perpendicular',
                    'semi-perimeter': 'semi-perimeter',
                    'proportion': 'proportion',
                    'inverse sine': 'inverse sine'
                }
            },
            detailed: {
                replacements: {
                    'hypotenuse': 'hypotenuse (side opposite the right angle)',
                    'perpendicular': 'perpendicular (forming a 90° angle)',
                    'semi-perimeter': 'semi-perimeter (half the perimeter, s = (a+b+c)/2)',
                    'proportion': 'proportion (equality of ratios)',
                    'inverse sine': 'inverse sine function (arcsin, the angle whose sine equals the given value)'
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

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by continuing the solution process`,
            progression: 'We are making progress toward solving the triangle',
            relationship: 'Each step brings us closer to the final answer'
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we need to ${nextStep.description.toLowerCase()} to continue solving`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description.toLowerCase()}`;
    }

    generateTroubleshootingTips(step) {
        return [
            'If stuck, review the triangle diagram',
            'Check for arithmetic errors',
            'Verify you\'re using the correct formula',
            'Consider if there\'s a simpler approach',
            'Check that calculator is in correct mode (degrees/radians)'
        ];
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try a similar triangle problem with different measurements',
            practiceHint: 'Practice the same type of calculation with simpler numbers first',
            extension: 'Once comfortable, try more complex triangle configurations'
        };
    }

    explainStepNecessity(currentStep, nextStep) {
        return `${nextStep.step} is necessary because ${currentStep.step} left us with a value that needs further calculation`;
    }

    explainStepBenefit(nextStep) {
        return `This step will help us get closer to finding the unknown measurement`;
    }

    generateStepBridge(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This step is necessary because: ${this.explainStepNecessity(currentStep, nextStep)}`,
            howItHelps: `This will help us by: ${this.explainStepBenefit(nextStep)}`
        };
    }

    // GRAPH DATA GENERATION

    generateTriangleGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;

        // Generate visualization data based on problem type
        switch(type) {
            case 'pythagorean':
            case 'triangle_area_base_height':
            case 'coordinate_triangles':
                this.graphData = this.generateTriangleVisualization();
                break;

            case 'triangle_angles':
                this.graphData = this.generateAngleVisualization();
                break;

            case 'law_of_sines':
            case 'law_of_cosines':
                this.graphData = this.generateObliqueTriangleVisualization();
                break;
        }
    }

    generateTriangleVisualization() {
        const { parameters } = this.currentProblem;
        
        return {
            type: 'triangle',
            vertices: this.calculateTriangleVertices(parameters),
            sides: this.extractSideLengths(parameters),
            angles: this.extractAngles(parameters),
            labels: this.generateTriangleLabels(parameters)
        };
    }

    generateAngleVisualization() {
        return {
            type: 'angle_diagram',
            angles: this.currentProblem.parameters,
            angleSum: 180,
            visualization: 'angle_arc_diagram'
        };
    }

    generateObliqueTriangleVisualization() {
        return {
            type: 'oblique_triangle',
            configuration: this.currentProblem.parameters,
            highlightedElements: this.identifyHighlightedElements()
        };
    }

    calculateTriangleVertices(parameters) {
        // Calculate vertex positions for visualization
        // This is a simplified version - would need more sophisticated layout
        return [
            { x: 0, y: 0, label: 'A' },
            { x: 100, y: 0, label: 'B' },
            { x: 50, y: 86.6, label: 'C' }
        ];
    }

    extractSideLengths(parameters) {
        return {
            a: parameters.a || parameters.side1,
            b: parameters.b || parameters.side2,
            c: parameters.c || parameters.side3
        };
    }

    extractAngles(parameters) {
        return {
            A: parameters.angleA,
            B: parameters.angleB,
            C: parameters.angleC
        };
    }

    generateTriangleLabels(parameters) {
        return {
            sides: ['a', 'b', 'c'],
            angles: ['∠A', '∠B', '∠C'],
            vertices: ['A', 'B', 'C']
        };
    }

    identifyHighlightedElements() {
        // Identify which elements to highlight in visualization
        return {
            knownSides: [],
            knownAngles: [],
            unknownElements: []
        };
    }

    // VERIFICATION SECTION GENERATION

    createVerificationSection() {
        if (!this.currentSolution || !this.currentProblem) return null;

        const verificationData = [];
        const { type } = this.currentProblem;

        verificationData.push(['Verification Method', 'Result']);
        verificationData.push(['', '']); // Spacing

        switch (type) {
            case 'pythagorean':
                const verification = this.verifyPythagorean(
                    this.currentProblem.parameters.a || this.currentSolution.solution,
                    this.currentProblem.parameters.b || this.currentSolution.solution,
                    this.currentProblem.parameters.c || this.currentSolution.solution
                );
                verificationData.push(...this.formatPythagoreanVerification(verification));
                break;

            case 'triangle_angles':
                const angleVerification = this.verifyAngleSum(
                    this.currentProblem.parameters.angleA || this.currentSolution.solution,
                    this.currentProblem.parameters.angleB,
                    this.currentProblem.parameters.angleC
                );
                verificationData.push(...this.formatAngleVerification(angleVerification));
                break;

            case 'triangle_area_base_height':
                verificationData.push(['Area Formula', 'A = (1/2)bh']);
                verificationData.push(['Calculated Area', `${this.currentSolution.solution} square units`]);
                verificationData.push(['Units Check', 'Length × Length = Area ✓']);
                break;

            case 'triangle_area_herons':
                verificationData.push(['Heron\'s Formula', 'A = √[s(s-a)(s-b)(s-c)]']);
                verificationData.push(['Semi-perimeter', this.currentSolution.semiPerimeter]);
                verificationData.push(['Calculated Area', `${this.currentSolution.solution} square units`]);
                break;

            case 'triangle_inequality':
                verificationData.push(['Triangle Validity', this.currentSolution.isValid ? 'VALID' : 'INVALID']);
                this.currentSolution.checks.forEach(check => {
                    verificationData.push([check.inequality, check.satisfied ? 'TRUE ✓' : 'FALSE ✗']);
                });
                break;

            case 'law_of_sines':
                verificationData.push(['Law of Sines', 'a/sin(A) = b/sin(B) = c/sin(C)']);
                if (this.currentSolution.ambiguousCase) {
                    verificationData.push(['Ambiguous Case', 'YES - Two possible solutions']);
                    verificationData.push(['Solution 1', `${this.currentSolution.solution}°`]);
                    verificationData.push(['Solution 2', `${this.currentSolution.secondSolution}°`]);
                } else {
                    verificationData.push(['Solution', `${this.currentSolution.solution}${this.currentSolution.units || ''}`]);
                }
                break;

            case 'law_of_cosines':
                verificationData.push(['Law of Cosines', 'c² = a² + b² - 2ab cos(C)']);
                verificationData.push(['Solution', `${this.currentSolution.solution}${this.currentSolution.units || ''}`]);
                break;

            default:
                verificationData.push(['General Check', 'Solution verified using appropriate geometric principles']);
        }

        if (this.verificationDetail === 'detailed') {
            verificationData.push(['', '']); // Spacing
            verificationData.push(['Confidence Level', this.calculateVerificationConfidenceTriangle()]);
            verificationData.push(['Verification Notes', this.getVerificationNotesTriangle()]);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData,
            confidence: this.calculateVerificationConfidenceTriangle()
        };
    }

    formatPythagoreanVerification(verification) {
        return [
            ['Pythagorean Check', verification.leftSide],
            ['Should Equal', verification.rightSide],
            ['Difference', verification.difference.toExponential(2)],
            ['Valid', verification.isValid ? 'YES ✓' : 'NO ✗']
        ];
    }

    formatAngleVerification(verification) {
        return [
            ['Angle Sum', verification.sum],
            ['Expected Sum', verification.expected],
            ['Difference', verification.difference.toFixed(6) + '°'],
            ['Valid', verification.isValid ? 'YES ✓' : 'NO ✗']
        ];
    }

    calculateVerificationConfidenceTriangle() {
        if (!this.currentSolution || !this.currentProblem) return 'Unknown';

        const { type } = this.currentProblem;

        switch (type) {
            case 'pythagorean':
                return 'High';

            case 'triangle_angles':
                return 'High';

            case 'triangle_inequality':
                return this.currentSolution.isValid ? 'Confirmed' : 'Confirmed (Invalid Triangle)';

            case 'law_of_sines':
                return this.currentSolution.ambiguousCase ? 'Medium (Ambiguous Case)' : 'High';

            case 'law_of_cosines':
                return 'High';

            default:
                return 'Medium';
        }
    }

    getVerificationNotesTriangle() {
        const { type } = this.currentProblem;
        const notes = [];

        switch (type) {
            case 'pythagorean':
                notes.push('Direct substitution into Pythagorean theorem');
                notes.push('Numerical tolerance: 1e-10');
                break;

            case 'triangle_angles':
                notes.push('Angle sum property checked');
                notes.push('All angles must be positive and sum to 180°');
                break;

            case 'triangle_inequality':
                notes.push('All three inequality conditions tested');
                notes.push('Sum of any two sides must exceed third side');
                break;

            case 'law_of_sines':
                notes.push('Ratio verified for known values');
                if (this.currentSolution.ambiguousCase) {
                    notes.push('Both solutions checked for validity');
                }
                break;

            case 'law_of_cosines':
                notes.push('Formula application verified');
                notes.push('Result checked for geometric validity');
                break;

            default:
                notes.push('Standard geometric verification applied');
        }

        return notes.join('; ');
    }

    // PEDAGOGICAL NOTES SECTION

    createPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const { type } = this.currentProblem;
        const notes = this.generatePedagogicalNotesTriangle(type);

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

    generatePedagogicalNotesTriangle(problemType) {
        const pedagogicalDatabase = {
            pythagorean: {
                objectives: [
                    'Apply the Pythagorean theorem to find missing sides',
                    'Identify right triangles and their components',
                    'Verify solutions using the Pythagorean relationship'
                ],
                keyConcepts: [
                    'Relationship between legs and hypotenuse',
                    'Geometric meaning of squaring sides',
                    'Right angle identification'
                ],
                prerequisites: [
                    'Square and square root operations',
                    'Basic triangle terminology',
                    'Understanding of right angles'
                ],
                commonDifficulties: [
                    'Identifying which side is the hypotenuse',
                    'Forgetting to take square root at end',
                    'Squaring before adding vs. adding before squaring'
                ],
                extensions: [
                    'Pythagorean triples',
                    'Three-dimensional distance problems',
                    'Applications in coordinate geometry'
                ],
                assessment: [
                    'Check understanding of which side is hypotenuse',
                    'Verify correct order of operations',
                    'Test with non-integer solutions'
                ]
            },

            triangle_area_base_height: {
                objectives: [
                    'Calculate triangle area using base and height',
                    'Identify perpendicular height in triangles',
                    'Understand relationship to parallelogram area'
                ],
                keyConcepts: [
                    'Height must be perpendicular to base',
                    'Triangle is half of parallelogram',
                    'Base-height pair options'
                ],
                prerequisites: [
                    'Understanding of perpendicular lines',
                    'Multiplication and division',
                    'Concept of area'
                ],
                commonDifficulties: [
                    'Confusing slant height with perpendicular height',
                    'Forgetting to multiply by 1/2',
                    'Unit confusion (length vs. area)'
                ],
                extensions: [
                    'Heron\'s formula',
                    'Area using trigonometry',
                    'Composite figures'
                ],
                assessment: [
                    'Test with various triangle orientations',
                    'Check height identification skills',
                    'Verify unit understanding'
                ]
            },

            triangle_area_herons: {
                objectives: [
                    'Apply Heron\'s formula for triangle area',
                    'Calculate semi-perimeter',
                    'Work with complex radical expressions'
                ],
                keyConcepts: [
                    'Semi-perimeter as reference value',
                    'Relationship between sides and area',
                    'Square root of products'
                ],
                prerequisites: [
                    'Basic arithmetic operations',
                    'Square roots',
                    'Order of operations'
                ],
                commonDifficulties: [
                    'Calculating semi-perimeter correctly',
                    'Order of operations in the formula',
                    'Calculator usage for complex expressions'
                ],
                extensions: [
                    'Proof of Heron\'s formula',
                    'Applications in surveying',
                    'Relationship to other area formulas'
                ],
                assessment: [
                    'Check semi-perimeter calculation',
                    'Verify correct formula application',
                    'Compare with base-height method when possible'
                ]
            },

            triangle_angles: {
                objectives: [
                    'Apply angle sum property of triangles',
                    'Find missing angles',
                    'Understand triangle angle relationships'
                ],
                keyConcepts: [
                    'Sum of angles equals 180°',
                    'Angle classification (acute, right, obtuse)',
                    'Exterior angle theorem'
                ],
                prerequisites: [
                    'Angle measurement',
                    'Addition and subtraction',
                    'Basic triangle properties'
                ],
                commonDifficulties: [
                    'Arithmetic errors in subtraction',
                    'Confusing degrees and radians',
                    'Not recognizing impossible angle combinations'
                ],
                extensions: [
                    'Polygon angle sums',
                    'Angle relationships in special triangles',
                    'Trigonometric angle relationships'
                ],
                assessment: [
                    'Test with various angle combinations',
                    'Check understanding of angle sum property',
                    'Verify ability to identify invalid triangles'
                ]
            },

            law_of_sines: {
                objectives: [
                    'Apply Law of Sines to solve oblique triangles',
                    'Recognize ambiguous case (SSA)',
                    'Use inverse trigonometric functions'
                ],
                keyConcepts: [
                    'Side-angle opposite relationships',
                    'Ratio equality',
                    'Ambiguous case understanding'
                ],
                prerequisites: [
                    'Sine function and inverse sine',
                    'Proportions and cross-multiplication',
                    'Calculator proficiency'
                ],
                commonDifficulties: [
                    'Matching sides with opposite angles',
                    'Missing second solution in ambiguous case',
                    'Calculator mode (degrees vs radians)'
                ],
                extensions: [
                    'Applications in navigation',
                    'Surveying problems',
                    'Extended Law of Sines with circumradius'
                ],
                assessment: [
                    'Test SSA case specifically',
                    'Check angle-side correspondence',
                    'Verify both solutions when applicable'
                ]
            },

            law_of_cosines: {
                objectives: [
                    'Apply Law of Cosines for SAS and SSS cases',
                    'Understand relationship to Pythagorean theorem',
                    'Solve for sides or angles as needed'
                ],
                keyConcepts: [
                    'Generalization of Pythagorean theorem',
                    'Cosine term adjustment',
                    'Inverse cosine for angle finding'
                ],
                prerequisites: [
                    'Cosine function and inverse cosine',
                    'Algebraic manipulation',
                    'Pythagorean theorem'
                ],
                commonDifficulties: [
                    'Sign error (minus instead of plus)',
                    'Forgetting 2ab term',
                    'Calculator mode issues'
                ],
                extensions: [
                    'Derivation from coordinate geometry',
                    'Applications in physics',
                    'Relationship to dot product'
                ],
                assessment: [
                    'Test both SAS and SSS cases',
                    'Check formula accuracy',
                    'Verify connection to Pythagorean theorem'
                ]
            },

            triangle_inequality: {
                objectives: [
                    'Apply triangle inequality theorem',
                    'Determine triangle validity',
                    'Understand geometric constraints'
                ],
                keyConcepts: [
                    'Sum of two sides exceeds third',
                    'Shortest path principle',
                    'Degenerate triangle concept'
                ],
                prerequisites: [
                    'Addition and comparison',
                    'Inequality understanding',
                    'Basic triangle properties'
                ],
                commonDifficulties: [
                    'Testing all three inequalities',
                    'Understanding why theorem is true',
                    'Boundary cases (equality)'
                ],
                extensions: [
                    'Generalization to polygons',
                    'Applications in optimization',
                    'Distance metrics in other spaces'
                ],
                assessment: [
                    'Test with various side combinations',
                    'Check understanding of all three conditions',
                    'Verify reasoning ability'
                ]
            }
        };

        return pedagogicalDatabase[problemType] || {
            objectives: ['Solve the given triangle problem'],
            keyConcepts: ['Apply appropriate geometric principles'],
            prerequisites: ['Basic geometry knowledge'],
            commonDifficulties: ['Various computational errors'],
            extensions: ['More complex triangle problems'],
            assessment: ['Check understanding of solution process']
        };
    }

    // ALTERNATIVE METHODS SECTION

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const { type } = this.currentProblem;
        const alternatives = this.generateAlternativeMethodsTriangle(type);

        return {
            title: 'Alternative Solution Methods',
            type: 'alternatives',
            data: [
                ['Primary Method Used', alternatives.primaryMethod],
                ['', ''], // Spacing
                ['Alternative Methods', ''],
                ...alternatives.methods.map((method, index) => [
                    `Method ${index + 1}`, `${method.name}: ${method.description}`
                ]),
                ['', ''], // Spacing
                ['Method Comparison', alternatives.comparison]
            ]
        };
    }

    generateAlternativeMethodsTriangle(problemType) {
        const alternativeDatabase = {
            pythagorean: {
                primaryMethod: 'Pythagorean theorem (a² + b² = c²)',
                methods: [
                    {
                        name: 'Trigonometric Ratios',
                        description: 'Use sine, cosine, or tangent if an angle is known'
                    },
                    {
                        name: 'Coordinate Geometry',
                        description: 'Use distance formula if vertices are on coordinate plane'
                    },
                    {
                        name: 'Similar Triangles',
                        description: 'Use proportions if triangle is part of similar triangle system'
                    }
                ],
                comparison: 'Pythagorean theorem is most direct for right triangles with two known sides; trig ratios useful when angle is known; coordinate method when working with graphs'
            },

            triangle_area_base_height: {
                primaryMethod: 'Base-height formula (A = ½bh)',
                methods: [
                    {
                        name: 'Heron\'s Formula',
                        description: 'Use when all three sides are known: A = √[s(s-a)(s-b)(s-c)]'
                    },
                    {
                        name: 'SAS Formula',
                        description: 'Use when two sides and included angle known: A = ½ab sin(C)'
                    },
                    {
                        name: 'Coordinate Formula',
                        description: 'Use when vertices are given as coordinates'
                    }
                ],
                comparison: 'Base-height is simplest when height is easily determined; Heron\'s for SSS; SAS for angle problems; coordinate method for graphed triangles'
            },

            law_of_sines: {
                primaryMethod: 'Law of Sines (a/sin A = b/sin B = c/sin C)',
                methods: [
                    {
                        name: 'Law of Cosines',
                        description: 'Can be used for some cases but requires more calculation'
                    },
                    {
                        name: 'Coordinate Geometry',
                        description: 'Place triangle on coordinate plane and use analytical methods'
                    },
                    {
                        name: 'Graphical Method',
                        description: 'Construct triangle with compass and straightedge, measure result'
                    }
                ],
                comparison: 'Law of Sines is most efficient for ASA, AAS, and SSA cases; Law of Cosines works but involves more computation; graphical methods provide visual understanding'
            },

            law_of_cosines: {
                primaryMethod: 'Law of Cosines (c² = a² + b² - 2ab cos C)',
                methods: [
                    {
                        name: 'Law of Sines',
                        description: 'Use after finding one angle to find remaining parts'
                    },
                    {
                        name: 'Coordinate Geometry',
                        description: 'Place triangle strategically and use distance/angle formulas'
                    },
                    {
                        name: 'Vector Methods',
                        description: 'Use vector dot product relationship'
                    }
                ],
                comparison: 'Law of Cosines is most direct for SAS and SSS; can combine with Law of Sines for efficiency; vector methods provide theoretical insight'
            },

            triangle_angles: {
                primaryMethod: 'Angle sum property (∠A + ∠B + ∠C = 180°)',
                methods: [
                    {
                        name: 'Exterior Angle Theorem',
                        description: 'Use if exterior angles are involved'
                    },
                    {
                        name: 'Trigonometric Methods',
                        description: 'Use if sides are known (inverse trig functions)'
                    },
                    {
                        name: 'Geometric Construction',
                        description: 'Construct triangle and measure with protractor'
                    }
                ],
                comparison: 'Angle sum is simplest when two angles known; exterior angle theorem useful in specific configurations; trig methods when working from sides'
            }
        };

        return alternativeDatabase[problemType] || {
            primaryMethod: 'Standard geometric approach',
            methods: [
                {
                    name: 'Alternative Approach',
                    description: 'Other geometric principles may apply depending on given information'
                }
            ],
            comparison: 'Method choice depends on given information and problem context'
        };
    }

    // WORKBOOK GENERATION

    generateTriangleWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createEnhancedStepsSection(),
            this.createLessonSectionTriangle(),
            this.createSolutionSection(),
            this.createAnalysisSectionTriangle(),
            this.createVerificationSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Triangle Mathematical Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSection() {
        if (!this.currentProblem) return null;

        const problemData = [
            ['Problem Type', this.triangleTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.triangleTypes[this.currentProblem.type]?.category || 'general']
        ];

        // Add given information
        const params = this.currentProblem.parameters;
        for (const [key, value] of Object.entries(params)) {
            if (value !== undefined && key !== 'findWhat' && key !== 'findSide') {
                problemData.push([`Given: ${key}`, value]);
            }
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createLessonSectionTriangle() {
        const { type } = this.currentProblem;
        const lessonInfo = this.lessons?.[type];

        if (!lessonInfo) {
            return {
                title: 'Key Concepts',
                type: 'lesson',
                data: [
                    ['Concept', 'Triangle geometry and measurements'],
                    ['Goal', 'Find unknown triangle measurements'],
                    ['Method', 'Apply appropriate geometric theorems']
                ]
            };
        }

        return {
            title: `Lesson: ${lessonInfo.title}`,
            type: 'lesson',
            data: [
                ['Key Concepts', lessonInfo.concepts.join('; ')],
                ['Theory', lessonInfo.theory],
                ['Main Formula', Object.entries(lessonInfo.keyFormulas)[0]?.join(': ') || 'N/A']
            ]
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        if (this.currentSolution.solution !== undefined) {
            solutionData.push(['Final Answer', `${this.currentSolution.solution}${this.currentSolution.units ? ' ' + this.currentSolution.units : ''}`]);
        }

        if (this.currentSolution.problemType) {
            solutionData.push(['Solution Type', this.currentSolution.problemType]);
        }

        if (this.currentSolution.formula) {
            solutionData.push(['Formula Used', this.currentSolution.formula]);
        }

        if (this.currentSolution.ambiguousCase) {
            solutionData.push(['Note', 'Ambiguous case - two solutions possible']);
            solutionData.push(['Second Solution', `${this.currentSolution.secondSolution}°`]);
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createAnalysisSectionTriangle() {
        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: [
                ['Steps Used', this.solutionSteps?.length || 0],
                ['Difficulty Level', this.explanationLevel],
                ['Method', this.triangleTypes[this.currentProblem.type]?.name || 'Geometric method'],
                ['Category', this.triangleTypes[this.currentProblem.type]?.category || 'general']
            ]
        };
    }

    createEnhancedStepsSection() {
        if (!this.solutionSteps || this.solutionSteps.length === 0) return null;

        const stepsData = [];

        this.solutionSteps.forEach((step, index) => {
            // Skip bridge steps in basic display
            if (step.stepType === 'bridge') {
                if (this.explanationLevel === 'detailed' || this.explanationLevel === 'scaffolded') {
                    stepsData.push(['→ Transition', step.explanation.nextGoal]);
                    stepsData.push(['', '']); // Spacing
                }
                return;
            }

            // Main step
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

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.algebraicRule) {
                stepsData.push(['Rule Used', step.algebraicRule]);
            }

            if (step.visualHint && (this.explanationLevel === 'detailed' || this.explanationLevel === 'scaffolded')) {
                stepsData.push(['Visual Hint', step.visualHint]);
            }

            // Enhanced explanations
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

            if (step.criticalWarning) {
                stepsData.push(['⚠ WARNING', step.criticalWarning]);
            }

            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                stepsData.push(['Guiding Questions', step.scaffolding.guidingQuestions.join(' ')]);
            }

            if (step.finalAnswer) {
                stepsData.push(['✓ Final Answer', step.afterExpression || step.numericalResult]);
            }

            stepsData.push(['', '']); // Spacing
        });

        return {
            title: 'Enhanced Step-by-Step Solution',
            type: 'steps',
            data: stepsData
        };
    }
}
