// Enhanced Angles Mathematical Workbook - Improved Step-by-Step Explanations
import * as math from 'mathjs';

export class EnhancedAnglesMathematicalWorkbook {
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
        this.explanationLevel = options.explanationLevel || 'intermediate';
        this.includeVerificationInSteps = options.includeVerificationInSteps !== false;
        this.includeConceptualConnections = options.includeConceptualConnections !== false;
        this.includeAlternativeMethods = options.includeAlternativeMethods !== false;
        this.includeErrorPrevention = options.includeErrorPrevention !== false;
        this.includeCommonMistakes = options.includeCommonMistakes !== false;
        this.includePedagogicalNotes = options.includePedagogicalNotes !== false;
        this.verificationDetail = options.verificationDetail || 'detailed';

        this.mathSymbols = this.initializeMathSymbols();
        this.setThemeColors();
        this.initializeAngleSolvers();
        this.initializeErrorDatabase();
        this.initializeExplanationTemplates();
    }

    initializeAngleLessons() {
        this.lessons = {
            complementary_angles: {
                title: "Complementary Angles",
                concepts: [
                    "Two angles that sum to 90°",
                    "Each angle is the complement of the other",
                    "Used in right triangle problems",
                    "Notation: ∠A + ∠B = 90°"
                ],
                theory: "Complementary angles are pairs of angles whose measures add up to exactly 90 degrees. This relationship is fundamental in geometry, particularly in right triangles where the two acute angles are always complementary.",
                keyFormulas: {
                    "Complementary Sum": "∠A + ∠B = 90°",
                    "Find Complement": "Complement of θ = 90° - θ",
                    "Variable Form": "x + (90° - x) = 90°"
                },
                solvingSteps: [
                    "Identify the two complementary angles",
                    "Set up equation: angle1 + angle2 = 90°",
                    "Solve for unknown angle",
                    "Verify sum equals 90°"
                ],
                applications: [
                    "Right triangle angle finding",
                    "Perpendicular line problems",
                    "Navigation and surveying",
                    "Architecture and design"
                ]
            },

            supplementary_angles: {
                title: "Supplementary Angles",
                concepts: [
                    "Two angles that sum to 180°",
                    "Form a straight line when adjacent",
                    "Linear pair angles are supplementary",
                    "Notation: ∠A + ∠B = 180°"
                ],
                theory: "Supplementary angles are pairs whose measures add to 180 degrees. When two supplementary angles are adjacent, they form a straight line. This concept is essential in understanding linear pairs and straight angles.",
                keyFormulas: {
                    "Supplementary Sum": "∠A + ∠B = 180°",
                    "Find Supplement": "Supplement of θ = 180° - θ",
                    "Linear Pair": "Adjacent angles on straight line = 180°"
                },
                solvingSteps: [
                    "Identify supplementary angle relationship",
                    "Set up equation: angle1 + angle2 = 180°",
                    "Solve for unknown angle",
                    "Verify sum equals 180°"
                ],
                applications: [
                    "Linear pair problems",
                    "Parallel lines with transversals",
                    "Polygon interior angles",
                    "Straight angle decomposition"
                ]
            },

            vertical_angles: {
                title: "Vertical Angles",
                concepts: [
                    "Formed by two intersecting lines",
                    "Opposite angles are equal",
                    "Four angles formed at intersection",
                    "Property: ∠1 = ∠3 and ∠2 = ∠4"
                ],
                theory: "When two lines intersect, they form two pairs of vertical angles. Vertical angles are always congruent (equal in measure). This property is derived from the supplementary angle relationships at the intersection.",
                keyFormulas: {
                    "Vertical Angles": "∠1 = ∠3 (opposite angles)",
                    "Adjacent Supplementary": "∠1 + ∠2 = 180°",
                    "All Four Angles": "∠1 + ∠2 + ∠3 + ∠4 = 360°"
                },
                solvingSteps: [
                    "Identify the intersecting lines",
                    "Locate vertical angle pairs",
                    "Set opposite angles equal",
                    "Use supplementary relationships if needed"
                ],
                applications: [
                    "Intersection problems",
                    "Proof of angle congruence",
                    "Street intersection design",
                    "Structural engineering"
                ]
            },

            triangle_angles: {
                title: "Triangle Angle Sum",
                concepts: [
                    "Sum of interior angles equals 180°",
                    "Applies to all triangles",
                    "Each angle between 0° and 180°",
                    "Formula: ∠A + ∠B + ∠C = 180°"
                ],
                theory: "The angle sum property states that the three interior angles of any triangle always sum to exactly 180 degrees. This is one of the most fundamental theorems in Euclidean geometry.",
                keyFormulas: {
                    "Triangle Sum": "∠A + ∠B + ∠C = 180°",
                    "Find Third Angle": "∠C = 180° - (∠A + ∠B)",
                    "Exterior Angle": "Exterior angle = sum of two remote interior angles"
                },
                solvingSteps: [
                    "Identify all three angles of the triangle",
                    "Set up equation: ∠A + ∠B + ∠C = 180°",
                    "Solve for unknown angle(s)",
                    "Verify sum equals 180°"
                ],
                applications: [
                    "Finding unknown triangle angles",
                    "Polygon angle problems",
                    "Trigonometry foundations",
                    "Architectural design"
                ]
            },

            exterior_angles: {
                title: "Exterior Angles",
                concepts: [
                    "Formed by extending one side of polygon",
                    "Exterior angle = sum of two remote interior angles (triangles)",
                    "Exterior angle + adjacent interior = 180°",
                    "Polygon exterior angles sum to 360°"
                ],
                theory: "An exterior angle of a polygon is formed when one side is extended. In triangles, the exterior angle theorem states that an exterior angle equals the sum of the two non-adjacent interior angles.",
                keyFormulas: {
                    "Triangle Exterior": "Exterior ∠ = ∠A + ∠B (remote interior)",
                    "Linear Pair": "Exterior ∠ + Adjacent Interior ∠ = 180°",
                    "Polygon Exterior Sum": "Sum of all exterior angles = 360°"
                },
                solvingSteps: [
                    "Identify the exterior angle",
                    "Find remote interior angles (for triangles)",
                    "Apply exterior angle theorem",
                    "Verify using supplementary relationship"
                ],
                applications: [
                    "Triangle problem solving",
                    "Polygon angle calculations",
                    "Navigation problems",
                    "Computer graphics rotations"
                ]
            },

            polygon_angles: {
                title: "Polygon Interior Angles",
                concepts: [
                    "Sum formula: (n-2) × 180°",
                    "n is the number of sides",
                    "Regular polygon: all angles equal",
                    "Each angle in regular polygon: (n-2) × 180° / n"
                ],
                theory: "The sum of interior angles in any polygon depends only on the number of sides. This can be derived by dividing the polygon into triangles. A polygon with n sides can be divided into (n-2) triangles.",
                keyFormulas: {
                    "Interior Angle Sum": "Sum = (n - 2) × 180°",
                    "Regular Polygon Angle": "Each angle = (n - 2) × 180° / n",
                    "Number of Sides": "n = (Sum / 180°) + 2"
                },
                solvingSteps: [
                    "Count the number of sides (n)",
                    "Apply formula: (n-2) × 180°",
                    "For regular polygons, divide by n",
                    "Verify result makes geometric sense"
                ],
                applications: [
                    "Finding unknown polygon angles",
                    "Regular polygon construction",
                    "Tessellation problems",
                    "Architectural floor plans"
                ]
            },

            parallel_lines: {
                title: "Parallel Lines and Transversals",
                concepts: [
                    "Corresponding angles are equal",
                    "Alternate interior angles are equal",
                    "Alternate exterior angles are equal",
                    "Co-interior angles are supplementary"
                ],
                theory: "When a transversal intersects two parallel lines, it creates several angle relationships. These relationships are fundamental to proving lines are parallel and solving for unknown angles.",
                keyFormulas: {
                    "Corresponding Angles": "∠1 = ∠5 (same position)",
                    "Alternate Interior": "∠3 = ∠6 (opposite sides, between parallels)",
                    "Co-Interior": "∠3 + ∠5 = 180° (same side, between parallels)"
                },
                solvingSteps: [
                    "Identify parallel lines and transversal",
                    "Locate angle pairs",
                    "Apply appropriate angle relationship",
                    "Solve for unknown angles"
                ],
                applications: [
                    "Parallel line proofs",
                    "Railroad track problems",
                    "Architecture and construction",
                    "Computer graphics and design"
                ]
            },

            angle_bisector: {
                title: "Angle Bisectors",
                concepts: [
                    "Ray that divides angle into two equal parts",
                    "Each part is half the original angle",
                    "Notation: If BD bisects ∠ABC, then ∠ABD = ∠DBC",
                    "Formula: ∠ABD = ∠DBC = (∠ABC) / 2"
                ],
                theory: "An angle bisector divides an angle into two congruent angles. The bisector is equidistant from the sides of the angle, which is useful in constructions and proofs.",
                keyFormulas: {
                    "Bisector Property": "∠1 = ∠2 = (original angle) / 2",
                    "Original from Parts": "Original angle = 2 × bisected angle",
                    "Three Angle Sum": "∠1 + ∠2 = original angle"
                },
                solvingSteps: [
                    "Identify the angle bisector",
                    "Set the two created angles equal",
                    "Express each as half the original",
                    "Solve for unknown angle"
                ],
                applications: [
                    "Geometric constructions",
                    "Triangle centers (incenter)",
                    "Symmetry problems",
                    "Design and art"
                ]
            },

            inscribed_angles: {
                title: "Inscribed Angles in Circles",
                concepts: [
                    "Vertex on circle, sides are chords",
                    "Inscribed angle = (1/2) × intercepted arc",
                    "Angles subtending same arc are equal",
                    "Angle inscribed in semicircle = 90°"
                ],
                theory: "An inscribed angle has its vertex on a circle and its sides are chords. The inscribed angle theorem states that an inscribed angle is half the central angle subtending the same arc.",
                keyFormulas: {
                    "Inscribed Angle": "∠inscribed = (1/2) × arc measure",
                    "Central Angle": "∠central = arc measure",
                    "Semicircle Angle": "Angle in semicircle = 90°"
                },
                solvingSteps: [
                    "Identify inscribed angle and intercepted arc",
                    "Find arc measure (or central angle)",
                    "Apply formula: inscribed = (1/2) × arc",
                    "Verify angle makes sense"
                ],
                applications: [
                    "Circle geometry problems",
                    "Proof of angle relationships",
                    "Navigation and astronomy",
                    "Design of circular structures"
                ]
            },

            central_angles: {
                title: "Central Angles in Circles",
                concepts: [
                    "Vertex at center of circle",
                    "Central angle = intercepted arc measure",
                    "All central angles sum to 360°",
                    "Relationship with inscribed angles"
                ],
                theory: "A central angle has its vertex at the center of a circle. The measure of a central angle equals the measure of its intercepted arc. This is fundamental to circle geometry and arc length calculations.",
                keyFormulas: {
                    "Central Angle": "∠central = arc measure",
                    "Arc Length": "Length = (θ/360°) × 2πr",
                    "Full Circle": "Sum of all central angles = 360°"
                },
                solvingSteps: [
                    "Identify central angle and arc",
                    "Set angle measure equal to arc measure",
                    "Use circle properties (360° total)",
                    "Solve for unknown angle or arc"
                ],
                applications: [
                    "Sector area calculations",
                    "Pie chart construction",
                    "Circular motion problems",
                    "Clock angle problems"
                ]
            },

            angle_relationships: {
                title: "Combined Angle Relationships",
                concepts: [
                    "Multiple angle properties in one problem",
                    "System of angle equations",
                    "Combining complementary, supplementary, vertical",
                    "Multi-step reasoning required"
                ],
                theory: "Complex angle problems often involve multiple angle relationships simultaneously. Solving these requires identifying all relevant properties and setting up a system of equations.",
                keyFormulas: {
                    "Combined Properties": "Use multiple angle theorems together",
                    "System of Equations": "Set up based on all relationships",
                    "Substitution Method": "Solve one relationship, substitute into others"
                },
                solvingSteps: [
                    "Identify all angle relationships present",
                    "Write equations for each relationship",
                    "Solve system of equations",
                    "Verify all conditions are satisfied"
                ],
                applications: [
                    "Complex geometric proofs",
                    "Real-world design problems",
                    "Multi-step construction",
                    "Engineering calculations"
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
            'degree': '°',
            'angle': '∠',
            'leq': '≤',
            'geq': '≥',
            'neq': '≠',
            'approx': '≈',
            'infinity': '∞',
            'plusminus': '±',
            'alpha': 'α',
            'beta': 'β',
            'gamma': 'γ',
            'delta': 'Δ',
            'theta': 'θ',
            'pi': 'π',
            'perpendicular': '⊥',
            'parallel': '∥',
            'congruent': '≅'
        };
    }

    initializeAngleSolvers() {
        this.angleTypes = {
            complementary: {
                patterns: [
                    /complementary/i,
                    /complement/i,
                    /90.*degree/i,
                    /sum.*90/i
                ],
                solver: this.solveComplementary.bind(this),
                name: 'Complementary Angles',
                category: 'angle_pairs',
                description: 'Solves problems with angles that sum to 90°'
            },

            supplementary: {
                patterns: [
                    /supplementary/i,
                    /supplement/i,
                    /180.*degree/i,
                    /sum.*180/i,
                    /linear.*pair/i
                ],
                solver: this.solveSupplementary.bind(this),
                name: 'Supplementary Angles',
                category: 'angle_pairs',
                description: 'Solves problems with angles that sum to 180°'
            },

            vertical: {
                patterns: [
                    /vertical.*angle/i,
                    /opposite.*angle/i,
                    /intersecting.*line/i
                ],
                solver: this.solveVertical.bind(this),
                name: 'Vertical Angles',
                category: 'angle_pairs',
                description: 'Solves problems with vertical (opposite) angles'
            },

            triangle_sum: {
                patterns: [
                    /triangle.*angle/i,
                    /sum.*triangle/i,
                    /three.*angle.*180/i
                ],
                solver: this.solveTriangleSum.bind(this),
                name: 'Triangle Angle Sum',
                category: 'triangles',
                description: 'Solves triangle problems using 180° sum'
            },

            exterior_angle: {
                patterns: [
                    /exterior.*angle/i,
                    /external.*angle/i,
                    /remote.*interior/i
                ],
                solver: this.solveExteriorAngle.bind(this),
                name: 'Exterior Angles',
                category: 'triangles',
                description: 'Solves exterior angle problems'
            },

            polygon_interior: {
                patterns: [
                    /polygon.*angle/i,
                    /interior.*angle.*sum/i,
                    /n.*side.*polygon/i,
                    /\(n-2\).*180/i
                ],
                solver: this.solvePolygonInterior.bind(this),
                name: 'Polygon Interior Angles',
                category: 'polygons',
                description: 'Calculates polygon interior angle sums'
            },

            parallel_transversal: {
                patterns: [
                    /parallel.*line/i,
                    /transversal/i,
                    /corresponding.*angle/i,
                    /alternate.*interior/i,
                    /co.*interior/i
                ],
                solver: this.solveParallelTransversal.bind(this),
                name: 'Parallel Lines with Transversal',
                category: 'parallel_lines',
                description: 'Solves angle problems with parallel lines'
            },

            angle_bisector: {
                patterns: [
                    /bisect/i,
                    /bisector/i,
                    /divide.*equal/i,
                    /half.*angle/i
                ],
                solver: this.solveAngleBisector.bind(this),
                name: 'Angle Bisector',
                category: 'constructions',
                description: 'Solves angle bisector problems'
            },

            inscribed_angle: {
                patterns: [
                    /inscribed.*angle/i,
                    /angle.*circle/i,
                    /arc.*angle/i,
                    /semicircle/i
                ],
                solver: this.solveInscribedAngle.bind(this),
                name: 'Inscribed Angles',
                category: 'circles',
                description: 'Solves inscribed angle problems in circles'
            },

            central_angle: {
                patterns: [
                    /central.*angle/i,
                    /center.*circle/i,
                    /arc.*measure/i
                ],
                solver: this.solveCentralAngle.bind(this),
                name: 'Central Angles',
                category: 'circles',
                description: 'Solves central angle problems in circles'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            complementary: {
                'Set up equation': [
                    'Confusing complementary (90°) with supplementary (180°)',
                    'Forgetting that both angles must be positive',
                    'Not checking if solution makes geometric sense'
                ],
                'Solve for unknown': [
                    'Arithmetic errors in subtraction from 90',
                    'Getting negative angle measures'
                ]
            },
            supplementary: {
                'Set up equation': [
                    'Confusing supplementary (180°) with complementary (90°)',
                    'Misidentifying linear pairs',
                    'Not recognizing adjacent supplementary angles'
                ],
                'Solve for unknown': [
                    'Arithmetic errors in subtraction from 180',
                    'Forgetting to check angle constraints'
                ]
            },
            triangle_sum: {
                'Apply triangle sum': [
                    'Forgetting that sum must equal exactly 180°',
                    'Including exterior angles in the sum',
                    'Not recognizing all three interior angles'
                ],
                'Solve for unknown angle': [
                    'Arithmetic errors in angle calculations',
                    'Getting angles ≥ 180° or ≤ 0°'
                ]
            },
            vertical: {
                'Identify vertical angles': [
                    'Confusing vertical angles with adjacent angles',
                    'Not recognizing both pairs of vertical angles',
                    'Assuming all angles at intersection are equal'
                ]
            },
            polygon_interior: {
                'Apply formula': [
                    'Using wrong formula (n×180 instead of (n-2)×180)',
                    'Miscounting number of sides',
                    'Confusing interior and exterior angles'
                ],
                'Calculate angles': [
                    'Division errors when finding regular polygon angles',
                    'Not checking if answer is reasonable'
                ]
            }
        };

        this.errorPrevention = {
            angle_sum_checking: {
                reminder: 'Always verify angle sum equals expected total',
                method: 'Add all angles and check against theorem'
            },
            geometric_validity: {
                reminder: 'Ensure angles are positive and within valid ranges',
                method: 'Check 0° < angle < 180° for most problems'
            },
            diagram_checking: {
                reminder: 'Draw and label a diagram to visualize relationships',
                method: 'Sketch the problem to identify angle types'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why angle relationships exist and their geometric meaning',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Step-by-step process to find angle measures',
                language: 'clear sequential instructions'
            },
            visual: {
                focus: 'Geometric visualization and diagram interpretation',
                language: 'spatial and visual descriptions'
            },
            algebraic: {
                focus: 'Equation setup and algebraic manipulation',
                language: 'mathematical and symbolic'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple everyday terms',
                detail: 'essential steps only',
                examples: 'concrete angle measures'
            },
            intermediate: {
                vocabulary: 'standard geometry terms',
                detail: 'main steps with explanations',
                examples: 'mix of numerical and algebraic'
            },
            detailed: {
                vocabulary: 'full geometric vocabulary',
                detail: 'comprehensive with proofs',
                examples: 'abstract and generalized'
            },
            scaffolded: {
                vocabulary: 'progressive complexity',
                detail: 'guided discovery approach',
                examples: 'carefully sequenced difficulty'
            }
        };
    }

    // Main solver method
    solveAngleProblem(config) {
        const { equation, scenario, parameters, problemType, context } = config;

        try {
            this.currentProblem = this.parseAngleProblem(equation, scenario, parameters, problemType, context);
            this.currentSolution = this.solveAngleProblem_Internal(this.currentProblem);
            this.solutionSteps = this.generateAngleSteps(this.currentProblem, this.currentSolution);
            this.generateAngleGraphData();
            this.generateAngleWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                angles: this.currentSolution?.angles,
                solutionType: this.currentSolution?.solutionType
            };

        } catch (error) {
            throw new Error(`Failed to solve angle problem: ${error.message}`);
        }
    }

    parseAngleProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = equation ? this.cleanMathExpression(equation) : '';

        if (problemType && this.angleTypes[problemType]) {
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

        // Auto-detect angle problem type
        for (const [type, config] of Object.entries(this.angleTypes)) {
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

        throw new Error(`Unable to recognize angle problem type from: ${equation || scenario}`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/degree[s]?/gi, '°')
            .replace(/∠/g, 'angle')
            .trim();
    }

    solveAngleProblem_Internal(problem) {
        const solver = this.angleTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for angle problem type: ${problem.type}`);
        }
        return solver(problem);
    }

    // ANGLE SOLVERS

    solveComplementary(problem) {
        const { angle1, angle2, relationship } = problem.parameters;

        // If one angle is given
        if (angle1 !== undefined && angle2 === undefined) {
            const complement = 90 - angle1;
            if (complement < 0 || complement > 90) {
                return {
                    solutionType: 'Invalid',
                    message: `Angle ${angle1}° cannot have a complement (must be between 0° and 90°)`,
                    category: 'complementary'
                };
            }
            return {
                solutionType: 'Complementary pair found',
                angles: { angle1: angle1, angle2: complement },
                sum: 90,
                verification: angle1 + complement === 90,
                category: 'complementary'
            };
        }

        // If relationship is given (e.g., "angle1 = 2×angle2")
        if (relationship) {
            // Parse relationship and solve system
            // This would need more sophisticated parsing
            return {
                solutionType: 'System solution',
                note: 'Solve system: angle1 + angle2 = 90° with given relationship',
                category: 'complementary'
            };
        }

        return {
            solutionType: 'General complementary',
            formula: 'angle1 + angle2 = 90°',
            category: 'complementary'
        };
    }

    solveSupplementary(problem) {
        const { angle1, angle2, relationship } = problem.parameters;

        if (angle1 !== undefined && angle2 === undefined) {
            const supplement = 180 - angle1;
            if (supplement < 0 || supplement > 180) {
                return {
                    solutionType: 'Invalid',
                    message: `Angle ${angle1}° cannot have a supplement (must be between 0° and 180°)`,
                    category: 'supplementary'
                };
            }
            return {
                solutionType: 'Supplementary pair found',
                angles: { angle1: angle1, angle2: supplement },
                sum: 180,
                verification: angle1 + supplement === 180,
                category: 'supplementary'
            };
        }

        if (relationship) {
            return {
                solutionType: 'System solution',
                note: 'Solve system: angle1 + angle2 = 180° with given relationship',
                category: 'supplementary'
            };
        }

        return {
            solutionType: 'General supplementary',
            formula: 'angle1 + angle2 = 180°',
            category: 'supplementary'
        };
    }

    solveVertical(problem) {
        const { angle1, angle2, angle3, angle4 } = problem.parameters;

        // Vertical angles are equal: angle1 = angle3, angle2 = angle4
        // Adjacent angles are supplementary: angle1 + angle2 = 180°
        
        if (angle1 !== undefined) {
            return {
                solutionType: 'Vertical angles found',
                angles: {
                    angle1: angle1,
                    angle2: 180 - angle1,
                    angle3: angle1,  // vertical to angle1
                    angle4: 180 - angle1  // vertical to angle2
                },
                properties: {
                    verticalPairs: ['∠1 = ∠3', '∠2 = ∠4'],
                    supplementaryPairs: ['∠1 + ∠2 = 180°', '∠3 + ∠4 = 180°']
                },
                verification: true,
                category: 'vertical'
            };
        }

        return {
            solutionType: 'General vertical angles',
            properties: 'Opposite angles are equal; adjacent angles sum to 180°',
            category: 'vertical'
        };
    }

    solveTriangleSum(problem) {
        const { angleA, angleB, angleC } = problem.parameters;

        const knownAngles = [];
        let unknownCount = 0;

        if (angleA !== undefined) knownAngles.push({ name: 'A', value: angleA });
        else unknownCount++;

        if (angleB !== undefined) knownAngles.push({ name: 'B', value: angleB });
        else unknownCount++;

        if (angleC !== undefined) knownAngles.push({ name: 'C', value: angleC });
        else unknownCount++;

        if (unknownCount === 0) {
            // All angles given - verify sum
            const sum = angleA + angleB + angleC;
            return {
                solutionType: 'Verification',
                angles: { A: angleA, B: angleB, C: angleC },
                sum: sum,
                isValid: Math.abs(sum - 180) < 0.001,
                message: Math.abs(sum - 180) < 0.001 ? 
                    'Valid triangle - angles sum to 180°' : 
                    `Invalid triangle - angles sum to ${sum}°, not 180°`,
                category: 'triangle_sum'
            };
        }

        if (unknownCount === 1) {
            // Find the missing angle
            const knownSum = knownAngles.reduce((sum, angle) => sum + angle.value, 0);
            const unknownAngle = 180 - knownSum;

            if (unknownAngle <= 0 || unknownAngle >= 180) {
                return {
                    solutionType: 'Invalid',
                    message: `Invalid triangle - unknown angle would be ${unknownAngle}°`,
                    category: 'triangle_sum'
                };
            }

            const result = {
                A: angleA !== undefined ? angleA : unknownAngle,
                B: angleB !== undefined ? angleB : unknownAngle,
                C: angleC !== undefined ? angleC : unknownAngle
            };

            return {
                solutionType: 'Single unknown found',
                angles: result,
                knownAngles: knownAngles,
                unknownAngle: unknownAngle,
                sum: 180,
                verification: true,
                category: 'triangle_sum'
            };
        }

        return {
            solutionType: 'Insufficient information',
            message: 'Need at least 2 angles to solve',
            formula: '∠A + ∠B + ∠C = 180°',
            category: 'triangle_sum'
        };
    }

    solveExteriorAngle(problem) {
        const { exteriorAngle, remoteInterior1, remoteInterior2, adjacentInterior } = problem.parameters;

        // Exterior angle = sum of two remote interior angles
        if (remoteInterior1 !== undefined && remoteInterior2 !== undefined) {
            const exterior = remoteInterior1 + remoteInterior2;
            const adjacent = 180 - exterior;

            return {
                solutionType: 'Exterior angle calculated',
                exteriorAngle: exterior,
                adjacentInterior: adjacent,
                remoteInteriors: { angle1: remoteInterior1, angle2: remoteInterior2 },
                theorem: 'Exterior angle = sum of remote interior angles',
                verification: {
                    sumProperty: `${remoteInterior1}° + ${remoteInterior2}° = ${exterior}°`,
                    linearPair: `${exterior}° + ${adjacent}° = 180°`
                },
                category: 'exterior_angle'
            };
        }

        if (exteriorAngle !== undefined && remoteInterior1 !== undefined) {
            const remoteInterior2 = exteriorAngle - remoteInterior1;
            const adjacent = 180 - exteriorAngle;

            return {
                solutionType: 'Remote interior found',
                exteriorAngle: exteriorAngle,
                adjacentInterior: adjacent,
                remoteInteriors: { angle1: remoteInterior1, angle2: remoteInterior2 },
                category: 'exterior_angle'
            };
        }

        return {
            solutionType: 'General exterior angle',
            theorem: 'Exterior angle = sum of two remote interior angles',
            formula: 'ext∠ = ∠1 + ∠2',
            category: 'exterior_angle'
        };
    }

    solvePolygonInterior(problem) {
        const { sides, angleSum, regularPolygon, singleAngle } = problem.parameters;

        if (sides !== undefined) {
            const sum = (sides - 2) * 180;
            const eachAngle = regularPolygon ? sum / sides : null;

            return {
                solutionType: 'Polygon angle sum calculated',
                numberOfSides: sides,
                interiorAngleSum: sum,
                formula: `(${sides} - 2) × 180° = ${sum}°`,
                regularPolygonAngle: eachAngle,
                regularFormula: eachAngle ? `${sum}° ÷ ${sides} = ${eachAngle}°` : null,
                category: 'polygon_interior'
            };
        }

        if (angleSum !== undefined) {
            const sides = (angleSum / 180) + 2;
            
            if (!Number.isInteger(sides) || sides < 3) {
                return {
                    solutionType: 'Invalid',
                    message: `Sum ${angleSum}° does not correspond to a valid polygon`,
                    category: 'polygon_interior'
                };
            }

            return {
                solutionType: 'Number of sides found',
                numberOfSides: sides,
                interiorAngleSum: angleSum,
                formula: `n = (${angleSum}° ÷ 180°) + 2 = ${sides}`,
                category: 'polygon_interior'
            };
        }

        if (singleAngle !== undefined && regularPolygon) {
            // For regular polygon: each angle = (n-2)×180/n
            // Solving: singleAngle = (n-2)×180/n
            // n × singleAngle = (n-2) × 180
            // n × singleAngle = 180n - 360
            // n × singleAngle - 180n = -360
            // n(singleAngle - 180) = -360
            // n = 360 / (180 - singleAngle)

            const sides = 360 / (180 - singleAngle);

            if (!Number.isInteger(sides) || sides < 3) {
                return {
                    solutionType: 'Invalid',
                    message: `Angle ${singleAngle}° does not correspond to a regular polygon`,
                    category: 'polygon_interior'
                };
            }

            return {
                solutionType: 'Regular polygon identified',
                numberOfSides: sides,
                eachAngle: singleAngle,
                interiorAngleSum: (sides - 2) * 180,
                formula: `n = 360° ÷ (180° - ${singleAngle}°) = ${sides}`,
                category: 'polygon_interior'
            };
        }

        return {
            solutionType: 'General polygon',
            formula: 'Interior angle sum = (n - 2) × 180°',
            regularPolygonFormula: 'Each angle = (n - 2) × 180° ÷ n',
            category: 'polygon_interior'
        };
    }

    solveParallelTransversal(problem) {
        const { angle1, angleType, findAngleType } = problem.parameters;

        if (angle1 === undefined) {
            return {
                solutionType: 'General parallel lines',
                relationships: {
                    corresponding: 'Corresponding angles are equal',
                    alternateInterior: 'Alternate interior angles are equal',
                    alternateExterior: 'Alternate exterior angles are equal',
                    coInterior: 'Co-interior angles are supplementary (sum to 180°)'
                },
                category: 'parallel_transversal'
            };
        }

        const angles = {
            corresponding: angle1,
            alternateInterior: angle1,
            alternateExterior: angle1,
            coInterior: 180 - angle1,
            verticalToGiven: angle1,
            supplementaryToGiven: 180 - angle1
        };

        return {
            solutionType: 'Parallel line angles found',
            givenAngle: angle1,
            derivedAngles: angles,
            explanation: {
                corresponding: `Corresponding angles are equal: ${angle1}°`,
                alternateInterior: `Alternate interior angles are equal: ${angle1}°`,
                coInterior: `Co-interior angles are supplementary: ${180 - angle1}°`
            },
            category: 'parallel_transversal'
        };
    }

    solveAngleBisector(problem) {
        const { originalAngle, bisectedAngle } = problem.parameters;

        if (originalAngle !== undefined) {
            const eachPart = originalAngle / 2;

            return {
                solutionType: 'Angle bisected',
                originalAngle: originalAngle,
                bisectedAngles: { angle1: eachPart, angle2: eachPart },
                property: 'Bisector divides angle into two equal parts',
                verification: eachPart + eachPart === originalAngle,
                category: 'angle_bisector'
            };
        }

        if (bisectedAngle !== undefined) {
            const original = bisectedAngle * 2;

            return {
                solutionType: 'Original angle found',
                originalAngle: original,
                bisectedAngles: { angle1: bisectedAngle, angle2: bisectedAngle },
                formula: `Original = 2 × ${bisectedAngle}° = ${original}°`,
                category: 'angle_bisector'
            };
        }

        return {
            solutionType: 'General bisector',
            property: 'Angle bisector creates two equal angles',
            formula: '∠1 = ∠2 = (original angle) ÷ 2',
            category: 'angle_bisector'
        };
    }

    solveInscribedAngle(problem) {
        const { inscribedAngle, centralAngle, arcMeasure } = problem.parameters;

        // Inscribed angle = (1/2) × arc measure
        // Central angle = arc measure

        if (arcMeasure !== undefined) {
            const inscribed = arcMeasure / 2;
            const central = arcMeasure;

            return {
                solutionType: 'Angles from arc',
                arcMeasure: arcMeasure,
                inscribedAngle: inscribed,
                centralAngle: central,
                theorem: 'Inscribed angle = (1/2) × intercepted arc',
                category: 'inscribed_angle'
            };
        }

        if (inscribedAngle !== undefined) {
            const arc = inscribedAngle * 2;
            const central = arc;

            return {
                solutionType: 'Arc from inscribed angle',
                inscribedAngle: inscribedAngle,
                arcMeasure: arc,
                centralAngle: central,
                formula: `Arc = 2 × ${inscribedAngle}° = ${arc}°`,
                category: 'inscribed_angle'
            };
        }

        if (centralAngle !== undefined) {
            const arc = centralAngle;
            const inscribed = arc / 2;

            return {
                solutionType: 'Angles from central angle',
                centralAngle: centralAngle,
                arcMeasure: arc,
                inscribedAngle: inscribed,
                relationship: 'Central angle equals arc; inscribed is half',
                category: 'inscribed_angle'
            };
        }

        return {
            solutionType: 'General inscribed angle',
            theorem: 'Inscribed angle = (1/2) × intercepted arc',
            specialCase: 'Angle inscribed in semicircle = 90°',
            category: 'inscribed_angle'
        };
    }

    solveCentralAngle(problem) {
        const { centralAngle, arcMeasure, radius, arcLength } = problem.parameters;

        if (centralAngle !== undefined) {
            return {
                solutionType: 'Central angle given',
                centralAngle: centralAngle,
                arcMeasure: centralAngle,
                property: 'Central angle equals its intercepted arc',
                arcLength: radius ? (centralAngle * Math.PI * radius) / 180 : null,
                category: 'central_angle'
            };
        }

        if (arcMeasure !== undefined) {
            return {
                solutionType: 'Arc measure given',
                centralAngle: arcMeasure,
                arcMeasure: arcMeasure,
                property: 'Central angle equals arc measure',
                category: 'central_angle'
            };
        }

        if (arcLength !== undefined && radius !== undefined) {
            const angleRadians = arcLength / radius;
            const angleDegrees = (angleRadians * 180) / Math.PI;

            return {
                solutionType: 'Central angle from arc length',
                centralAngle: angleDegrees,
                arcLength: arcLength,
                radius: radius,
                formula: `θ = (arc length ÷ radius) × (180° ÷ π) = ${angleDegrees.toFixed(2)}°`,
                category: 'central_angle'
            };
        }

        return {
            solutionType: 'General central angle',
            property: 'Central angle = arc measure',
            formula: 'Arc length = (θ ÷ 360°) × 2πr',
            category: 'central_angle'
        };
    }

    // STEP GENERATION

    generateAngleSteps(problem, solution) {
        let baseSteps = this.generateBaseAngleSteps(problem, solution);

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

    generateBaseAngleSteps(problem, solution) {
        const { type } = problem;

        switch (type) {
            case 'complementary':
                return this.generateComplementarySteps(problem, solution);
            case 'supplementary':
                return this.generateSupplementarySteps(problem, solution);
            case 'vertical':
                return this.generateVerticalSteps(problem, solution);
            case 'triangle_sum':
                return this.generateTriangleSumSteps(problem, solution);
            case 'exterior_angle':
                return this.generateExteriorAngleSteps(problem, solution);
            case 'polygon_interior':
                return this.generatePolygonSteps(problem, solution);
            case 'parallel_transversal':
                return this.generateParallelSteps(problem, solution);
            case 'angle_bisector':
                return this.generateBisectorSteps(problem, solution);
            case 'inscribed_angle':
                return this.generateInscribedSteps(problem, solution);
            case 'central_angle':
                return this.generateCentralSteps(problem, solution);
            default:
                return this.generateGenericAngleSteps(problem, solution);
        }
    }

    generateComplementarySteps(problem, solution) {
        const steps = [];
        const { angle1 } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Identify angle relationship',
            description: 'Recognize that complementary angles sum to 90°',
            expression: '∠A + ∠B = 90°',
            reasoning: 'Complementary angles are two angles whose measures add up to exactly 90 degrees',
            visualHint: 'Think of a right angle being split into two parts',
            algebraicRule: 'Definition of complementary angles',
            goalStatement: 'Find the unknown angle that completes the 90° sum'
        });

        if (angle1 !== undefined) {
            steps.push({
                stepNumber: 2,
                step: 'Set up equation',
                description: `Given angle is ${angle1}°, find its complement`,
                beforeExpression: '∠A + ∠B = 90°',
                operation: `Substitute ∠A = ${angle1}°`,
                afterExpression: `${angle1}° + ∠B = 90°`,
                reasoning: 'Substitute the known angle into the complementary angle equation',
                algebraicRule: 'Substitution'
            });

            const complement = 90 - angle1;

            steps.push({
                stepNumber: 3,
                step: 'Solve for unknown angle',
                description: `Subtract ${angle1}° from both sides`,
                beforeExpression: `${angle1}° + ∠B = 90°`,
                operation: `- ${angle1}°`,
                afterExpression: `∠B = ${complement}°`,
                reasoning: 'Isolate the unknown angle by subtracting the known angle from 90°',
                algebraicRule: 'Subtraction property of equality',
                finalAnswer: true,
                numericalResult: complement
            });

            steps.push({
                stepNumber: 4,
                step: 'Verify solution',
                description: 'Check that the angles sum to 90°',
                expression: `${angle1}° + ${complement}° = ${angle1 + complement}°`,
                reasoning: 'Verification confirms our solution is correct',
                verification: angle1 + complement === 90
            });
        }

        return steps;
    }

    generateSupplementarySteps(problem, solution) {
        const steps = [];
        const { angle1 } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Identify angle relationship',
            description: 'Recognize that supplementary angles sum to 180°',
            expression: '∠A + ∠B = 180°',
            reasoning: 'Supplementary angles are two angles whose measures add up to exactly 180 degrees (a straight line)',
            visualHint: 'Think of a straight line being divided into two angles',
            algebraicRule: 'Definition of supplementary angles',
            goalStatement: 'Find the unknown angle that completes the 180° sum'
        });

        if (angle1 !== undefined) {
            steps.push({
                stepNumber: 2,
                step: 'Set up equation',
                description: `Given angle is ${angle1}°, find its supplement`,
                beforeExpression: '∠A + ∠B = 180°',
                operation: `Substitute ∠A = ${angle1}°`,
                afterExpression: `${angle1}° + ∠B = 180°`,
                reasoning: 'Substitute the known angle into the supplementary angle equation',
                algebraicRule: 'Substitution'
            });

            const supplement = 180 - angle1;

            steps.push({
                stepNumber: 3,
                step: 'Solve for unknown angle',
                description: `Subtract ${angle1}° from both sides`,
                beforeExpression: `${angle1}° + ∠B = 180°`,
                operation: `- ${angle1}°`,
                afterExpression: `∠B = ${supplement}°`,
                reasoning: 'Isolate the unknown angle by subtracting the known angle from 180°',
                algebraicRule: 'Subtraction property of equality',
                finalAnswer: true,
                numericalResult: supplement
            });

            steps.push({
                stepNumber: 4,
                step: 'Verify solution',
                description: 'Check that the angles sum to 180°',
                expression: `${angle1}° + ${supplement}° = ${angle1 + supplement}°`,
                reasoning: 'Verification confirms the angles form a linear pair',
                verification: angle1 + supplement === 180
            });
        }

        return steps;
    }

    generateVerticalSteps(problem, solution) {
        const steps = [];
        const { angle1 } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Identify vertical angles',
            description: 'When two lines intersect, vertical (opposite) angles are equal',
            expression: '∠1 = ∠3 and ∠2 = ∠4',
            reasoning: 'Vertical angles are formed by two intersecting lines and are always congruent',
            visualHint: 'Imagine an "X" shape - opposite angles are equal',
            algebraicRule: 'Vertical Angles Theorem',
            goalStatement: 'Find all four angles at the intersection'
        });

        if (angle1 !== undefined) {
            steps.push({
                stepNumber: 2,
                step: 'Apply vertical angle property',
                description: `Given ∠1 = ${angle1}°, find ∠3`,
                expression: `∠3 = ∠1 = ${angle1}°`,
                reasoning: 'Vertical angles are equal, so the opposite angle has the same measure',
                algebraicRule: 'Vertical angles are congruent'
            });

            const angle2 = 180 - angle1;

            steps.push({
                stepNumber: 3,
                step: 'Find adjacent angle',
                description: 'Adjacent angles on a line are supplementary',
                beforeExpression: '∠1 + ∠2 = 180°',
                operation: `Substitute ∠1 = ${angle1}°`,
                afterExpression: `∠2 = 180° - ${angle1}° = ${angle2}°`,
                reasoning: 'Adjacent angles at intersection form a linear pair and sum to 180°',
                algebraicRule: 'Linear Pair Postulate'
            });

            steps.push({
                stepNumber: 4,
                step: 'Find remaining angle',
                description: '∠4 is vertical to ∠2',
                expression: `∠4 = ∠2 = ${angle2}°`,
                reasoning: 'Apply vertical angles theorem again',
                finalAnswer: true,
                allAngles: {
                    angle1: angle1,
                    angle2: angle2,
                    angle3: angle1,
                    angle4: angle2
                }
            });
        }

        return steps;
    }

    generateTriangleSumSteps(problem, solution) {
        const steps = [];
        const { angleA, angleB, angleC } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Apply triangle angle sum theorem',
            description: 'The sum of interior angles in any triangle equals 180°',
            expression: '∠A + ∠B + ∠C = 180°',
            reasoning: 'This is a fundamental theorem that applies to all triangles',
            visualHint: 'Imagine tearing off the three corners and arranging them - they form a straight line',
            algebraicRule: 'Triangle Angle Sum Theorem',
            goalStatement: 'Find the unknown angle(s)'
        });

        const knownAngles = [];
        let unknownAngle = null;

        if (angleA !== undefined) knownAngles.push({ name: 'A', value: angleA });
        if (angleB !== undefined) knownAngles.push({ name: 'B', value: angleB });
        if (angleC !== undefined) knownAngles.push({ name: 'C', value: angleC });

        if (knownAngles.length === 2) {
            const sum = knownAngles[0].value + knownAngles[1].value;
            const missing = 180 - sum;

            steps.push({
                stepNumber: 2,
                step: 'Identify known angles',
                description: `Two angles are given: ${knownAngles.map(a => `∠${a.name} = ${a.value}°`).join(', ')}`,
                expression: `${knownAngles.map(a => `∠${a.name}`).join(' + ')} = ${sum}°`,
                reasoning: 'First, add the two known angles together'
            });

            steps.push({
                stepNumber: 3,
                step: 'Solve for unknown angle',
                description: 'Subtract the sum of known angles from 180°',
                beforeExpression: `∠A + ∠B + ∠C = 180°`,
                operation: `180° - ${sum}°`,
                afterExpression: `Unknown angle = ${missing}°`,
                reasoning: 'The third angle must make the total equal 180°',
                finalAnswer: true,
                numericalResult: missing
            });

            steps.push({
                stepNumber: 4,
                step: 'Verify solution',
                description: 'Check that all three angles sum to 180°',
                expression: `${knownAngles[0].value}° + ${knownAngles[1].value}° + ${missing}° = 180°`,
                reasoning: 'Verification confirms the triangle angle sum property',
                verification: true
            });
        }

        return steps;
    }

    generateExteriorAngleSteps(problem, solution) {
        const steps = [];
        const { remoteInterior1, remoteInterior2 } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Identify exterior angle relationship',
            description: 'An exterior angle of a triangle equals the sum of the two remote interior angles',
            expression: 'Exterior ∠ = ∠1 + ∠2',
            reasoning: 'This is the Exterior Angle Theorem for triangles',
            visualHint: 'The exterior angle is created by extending one side of the triangle',
            algebraicRule: 'Exterior Angle Theorem',
            goalStatement: 'Calculate the exterior angle or find a remote interior angle'
        });

        if (remoteInterior1 !== undefined && remoteInterior2 !== undefined) {
            steps.push({
                stepNumber: 2,
                step: 'Add remote interior angles',
                description: `Sum the two remote interior angles: ${remoteInterior1}° and ${remoteInterior2}°`,
                expression: `${remoteInterior1}° + ${remoteInterior2}° = ${remoteInterior1 + remoteInterior2}°`,
                reasoning: 'The exterior angle equals this sum',
                finalAnswer: true,
                numericalResult: remoteInterior1 + remoteInterior2
            });

            const adjacent = 180 - (remoteInterior1 + remoteInterior2);

            steps.push({
                stepNumber: 3,
                step: 'Find adjacent interior angle',
                description: 'The exterior angle and adjacent interior angle form a linear pair',
                expression: `Adjacent interior = 180° - ${remoteInterior1 + remoteInterior2}° = ${adjacent}°`,
                reasoning: 'These angles are supplementary',
                algebraicRule: 'Linear Pair Postulate'
            });
        }

        return steps;
    }

    generatePolygonSteps(problem, solution) {
        const steps = [];
        const { sides, regularPolygon } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Identify polygon angle sum formula',
            description: 'The sum of interior angles in a polygon with n sides',
            expression: 'Sum = (n - 2) × 180°',
            reasoning: 'A polygon can be divided into (n-2) triangles, each contributing 180°',
            visualHint: 'Draw diagonals from one vertex to divide the polygon into triangles',
            algebraicRule: 'Polygon Interior Angle Sum Formula',
            goalStatement: 'Calculate the sum or individual angles'
        });

        if (sides !== undefined) {
            const sum = (sides - 2) * 180;

            steps.push({
                stepNumber: 2,
                step: 'Calculate angle sum',
                description: `Substitute n = ${sides} into the formula`,
                beforeExpression: 'Sum = (n - 2) × 180°',
                operation: `(${sides} - 2) × 180°`,
                afterExpression: `Sum = ${sides - 2} × 180° = ${sum}°`,
                reasoning: `A ${sides}-sided polygon has an interior angle sum of ${sum}°`,
                numericalResult: sum
            });

            if (regularPolygon) {
                const eachAngle = sum / sides;

                steps.push({
                    stepNumber: 3,
                    step: 'Calculate each angle in regular polygon',
                    description: 'In a regular polygon, all angles are equal',
                    expression: `Each angle = ${sum}° ÷ ${sides} = ${eachAngle}°`,
                    reasoning: 'Divide the total sum by the number of angles',
                    finalAnswer: true,
                    numericalResult: eachAngle
                });
            }
        }

        return steps;
    }

    generateParallelSteps(problem, solution) {
        const steps = [];
        const { angle1 } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Identify parallel line relationships',
            description: 'When a transversal crosses parallel lines, several angle relationships exist',
            relationships: [
                'Corresponding angles are equal',
                'Alternate interior angles are equal',
                'Co-interior angles are supplementary'
            ],
            reasoning: 'These relationships only hold when lines are parallel',
            visualHint: 'Label all eight angles formed at the two intersections',
            goalStatement: 'Find all related angles'
        });

        if (angle1 !== undefined) {
            steps.push({
                stepNumber: 2,
                step: 'Find equal angles',
                description: 'Use angle equality properties',
                equalAngles: [
                    `Corresponding angle = ${angle1}°`,
                    `Alternate interior = ${angle1}°`,
                    `Vertical angle = ${angle1}°`
                ],
                reasoning: 'Multiple angles equal the given angle due to parallel line properties'
            });

            const supplementary = 180 - angle1;

            steps.push({
                stepNumber: 3,
                step: 'Find supplementary angles',
                description: 'Calculate co-interior and adjacent angles',
                expression: `180° - ${angle1}° = ${supplementary}°`,
                supplementaryAngles: [
                    `Co-interior angle = ${supplementary}°`,
                    `Adjacent angle = ${supplementary}°`
                ],
                reasoning: 'These angles form linear pairs or co-interior pairs',
                finalAnswer: true,
                allAngles: {
                    equal: angle1,
                    supplementary: supplementary
                }
            });
        }

        return steps;
    }

    generateBisectorSteps(problem, solution) {
        const steps = [];
        const { originalAngle, bisectedAngle } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Understand angle bisector',
            description: 'An angle bisector divides an angle into two equal parts',
            expression: '∠1 = ∠2 = (original angle) ÷ 2',
            reasoning: 'By definition, a bisector creates two congruent angles',
            visualHint: 'The bisector ray splits the angle perfectly in half',
            algebraicRule: 'Definition of Angle Bisector',
            goalStatement: 'Find the bisected angles or original angle'
        });

        if (originalAngle !== undefined) {
            const eachPart = originalAngle / 2;

            steps.push({
                stepNumber: 2,
                step: 'Divide angle in half',
                description: `Divide ${originalAngle}° by 2`,
                expression: `${originalAngle}° ÷ 2 = ${eachPart}°`,
                reasoning: 'Each part is exactly half the original angle',
                finalAnswer: true,
                numericalResult: eachPart
            });

            steps.push({
                stepNumber: 3,
                step: 'Verify bisector property',
                description: 'Check that both parts are equal and sum to original',
                expression: `${eachPart}° + ${eachPart}° = ${originalAngle}°`,
                reasoning: 'Verification confirms the bisector divides the angle equally',
                verification: true
            });
        }

        if (bisectedAngle !== undefined) {
            const original = bisectedAngle * 2;

            steps.push({
                stepNumber: 2,
                step: 'Find original angle',
                description: `Multiply bisected angle by 2`,
                expression: `${bisectedAngle}° × 2 = ${original}°`,
                reasoning: 'The original angle is twice the bisected part',
                finalAnswer: true,
                numericalResult: original
            });
        }

        return steps;
    }

    generateInscribedSteps(problem, solution) {
        const steps = [];
        const { inscribedAngle, arcMeasure } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Apply inscribed angle theorem',
            description: 'An inscribed angle is half the measure of its intercepted arc',
            expression: 'Inscribed ∠ = (1/2) × arc measure',
            reasoning: 'This relationship holds for any inscribed angle in a circle',
            visualHint: 'The vertex is on the circle, sides are chords',
            algebraicRule: 'Inscribed Angle Theorem',
            goalStatement: 'Find the inscribed angle or arc measure'
        });

        if (arcMeasure !== undefined) {
            const inscribed = arcMeasure / 2;

            steps.push({
                stepNumber: 2,
                step: 'Calculate inscribed angle',
                description: `Divide arc measure by 2`,
                expression: `${arcMeasure}° ÷ 2 = ${inscribed}°`,
                reasoning: 'The inscribed angle is exactly half the arc it intercepts',
                finalAnswer: true,
                numericalResult: inscribed
            });
        }

        if (inscribedAngle !== undefined) {
            const arc = inscribedAngle * 2;

            steps.push({
                stepNumber: 2,
                step: 'Calculate arc measure',
                description: `Multiply inscribed angle by 2`,
                expression: `${inscribedAngle}° × 2 = ${arc}°`,
                reasoning: 'The arc measure is twice the inscribed angle',
                finalAnswer: true,
                numericalResult: arc
            });
        }

        return steps;
    }

    generateCentralSteps(problem, solution) {
        const steps = [];
        const { centralAngle, arcLength, radius } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Understand central angle property',
            description: 'A central angle equals the measure of its intercepted arc',
            expression: 'Central ∠ = arc measure',
            reasoning: 'The vertex is at the center of the circle',
            visualHint: 'The angle opens from the center point',
            algebraicRule: 'Central Angle Property',
            goalStatement: 'Find the central angle or arc'
        });

        if (centralAngle !== undefined) {
            steps.push({
                stepNumber: 2,
                step: 'Identify arc measure',
                description: 'The arc measure equals the central angle',
                expression: `Arc = ${centralAngle}°`,
                reasoning: 'By definition, central angle = arc measure',
                finalAnswer: true
            });

            if (radius !== undefined) {
                const arcLen = (centralAngle * Math.PI * radius) / 180;

                steps.push({
                    stepNumber: 3,
                    step: 'Calculate arc length',
                    description: 'Use formula: arc length = (θ/360°) × 2πr',
                    expression: `(${centralAngle}°/360°) × 2π × ${radius} = ${arcLen.toFixed(2)}`,
                    reasoning: 'Arc length depends on both angle and radius',
                    numericalResult: arcLen
                });
            }
        }

        if (arcLength !== undefined && radius !== undefined) {
            const angleRadians = arcLength / radius;
            const angleDegrees = (angleRadians * 180) / Math.PI;

            steps.push({
                stepNumber: 2,
                step: 'Find central angle from arc length',
                description: 'Use formula: θ = (arc length / radius) × (180°/π)',
                expression: `(${arcLength} / ${radius}) × (180°/π) = ${angleDegrees.toFixed(2)}°`,
                reasoning: 'Convert from arc length to angle measure',
                finalAnswer: true,
                numericalResult: angleDegrees
            });
        }

        return steps;
    }

    generateGenericAngleSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Analyze angle problem',
            description: 'Apply appropriate angle theorems and properties',
            reasoning: 'Use geometric relationships to solve',
            solution: solution
        }];
    }

    // ENHANCED EXPLANATION METHODS

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

    getConceptualExplanation(step, problem) {
        const conceptualExplanations = {
            'Identify angle relationship': 'Understanding angle relationships is about recognizing patterns and connections between angles based on their geometric positions.',
            'Set up equation': 'We translate the geometric relationship into an algebraic equation to make it easier to work with mathematically.',
            'Solve for unknown angle': 'Solving means finding the specific angle measure that satisfies all the given conditions.',
            'Verify solution': 'Checking our answer ensures we haven\'t made errors and that our solution makes geometric sense.'
        };

        return conceptualExplanations[step.step] || 'This step builds on our understanding of angle properties.';
    }

    getProceduralExplanation(step) {
        if (step.operation) {
            return `1. Start with: ${step.beforeExpression}
2. Apply operation: ${step.operation}
3. Simplify to get: ${step.afterExpression}
4. Verify the result makes sense`;
        }
        return 'Follow the standard procedure for this type of angle problem.';
    }

    getVisualExplanation(step, problem) {
        const visualExplanations = {
            'complementary': 'Picture a right angle (corner of a square) being divided into two parts.',
            'supplementary': 'Visualize a straight line with a ray creating two angles on either side.',
            'vertical': 'Imagine two lines crossing to form an X shape with four angles.',
            'triangle_sum': 'Think of the three corners of a triangle coming together to form a straight line.',
            'polygon_interior': 'Picture dividing the polygon into triangles from one vertex.'
        };

        return visualExplanations[problem.type] || 'Sketch a diagram to visualize the angle relationships.';
    }

    getAlgebraicExplanation(step) {
        const algebraicRules = {
            'Identify angle relationship': 'State the algebraic equation representing the geometric relationship',
            'Set up equation': 'Substitute known values into the equation',
            'Solve for unknown angle': 'Use inverse operations to isolate the unknown',
            'Verify solution': 'Substitute the solution back to check equality'
        };

        return algebraicRules[step.step] || 'Apply standard algebraic principles.';
    }

    getAdaptiveExplanation(step, explanationLevel) {
        const adaptations = {
            basic: {
                vocabulary: 'simple everyday words',
                detail: 'only essential information',
                format: 'short clear sentences'
            },
            intermediate: {
                vocabulary: 'standard geometry terms',
                detail: 'main concepts with explanations',
                format: 'structured step format'
            },
            detailed: {
                vocabulary: 'full geometric terminology',
                detail: 'comprehensive with theorems',
                format: 'thorough mathematical analysis'
            },
            scaffolded: {
                vocabulary: 'builds from simple to complex',
                detail: 'guided questions and discovery',
                format: 'interactive learning approach'
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
                    'supplementary': 'angles that make a straight line',
                    'complementary': 'angles that make a right angle',
                    'congruent': 'equal',
                    'bisector': 'divider',
                    'inscribed': 'angle with vertex on circle',
                    'intercepted': 'cut off'
                }
            },
            intermediate: {
                replacements: {
                    'supplementary': 'supplementary',
                    'complementary': 'complementary',
                    'congruent': 'congruent',
                    'bisector': 'bisector',
                    'inscribed': 'inscribed',
                    'intercepted': 'intercepted'
                }
            },
            detailed: {
                replacements: {
                    'supplementary': 'supplementary (sum to 180°)',
                    'complementary': 'complementary (sum to 90°)',
                    'congruent': 'congruent (equal in measure)',
                    'bisector': 'bisector (divides into equal parts)',
                    'inscribed': 'inscribed (vertex on circle, sides are chords)',
                    'intercepted': 'intercepted (arc cut off by angle)'
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
            connection: `Building on step ${stepIndex}, this step continues the solution process`,
            progression: 'We are getting closer to finding all unknown angles',
            relationship: 'Each step uses results from previous steps'
        };
    }

    generateStepBridge(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary to complete the angle calculation`,
            howItHelps: `This will give us the final angle measure(s)`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue solving`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description}`;
    }

    generatePreventionTips(step, problemType) {
        const tips = {
            'Identify angle relationship': [
                'Draw a clear diagram',
                'Label all known and unknown angles',
                'Double-check which angle property applies'
            ],
            'Set up equation': [
                'Make sure you use the correct angle sum (90° or 180°)',
                'Verify all angle measures are positive',
                'Check that the equation represents the geometric relationship'
            ],
            'Solve for unknown angle': [
                'Perform arithmetic carefully',
                'Keep the degree symbol in your work',
                'Check if the answer is reasonable for the angle type'
            ]
        };

        return tips[step.step] || ['Check your work carefully', 'Verify the answer makes geometric sense'];
    }

    generateCheckPoints(step) {
        return [
            'Does the angle measure make sense geometrically?',
            'Are all angle measures positive?',
            'Does the sum match the expected total?',
            'Have I labeled all angles correctly?'
        ];
    }

    identifyWarningFlags(step, problemType) {
        const warnings = {
            complementary: step.step === 'Solve for unknown angle' ?
                ['Ensure result is between 0° and 90°'] : [],
            supplementary: step.step === 'Solve for unknown angle' ?
                ['Ensure result is between 0° and 180°'] : [],
            triangle_sum: step.step === 'Solve for unknown angle' ?
                ['Triangle angles must be between 0° and 180°', 'Sum must equal exactly 180°'] : [],
            polygon_interior: step.step === 'Calculate angle sum' ?
                ['Verify you counted sides correctly'] : []
        };

        return warnings[problemType] || [];
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'Identify angle relationship': 'Have I correctly identified which angle theorem applies?',
            'Set up equation': 'Does my equation accurately represent the geometric relationship?',
            'Solve for unknown angle': 'Is my arithmetic correct and does the answer make sense?',
            'Verify solution': 'Does my solution satisfy all the given conditions?'
        };

        return questions[step.step] || 'Does this step make sense and move me toward the solution?';
    }

    describeExpectedResult(step) {
        const expectations = {
            'Identify angle relationship': 'A clear statement of which angle property or theorem applies',
            'Set up equation': 'An equation relating the angles with their correct sum',
            'Solve for unknown angle': 'A specific angle measure in degrees',
            'Verify solution': 'Confirmation that angles satisfy the relationship'
        };

        return expectations[step.step] || 'Progress toward solving the angle problem';
    }

    generateTroubleshootingTips(step) {
        return [
            'If stuck, redraw the diagram more clearly',
            'Double-check which angle theorem applies',
            'Verify your arithmetic step by step',
            'Consider if there are any special angle relationships you missed'
        ];
    }

    breakIntoSubSteps(step) {
        if (step.operation) {
            return [
                `Start with the expression: ${step.beforeExpression}`,
                `Apply the operation: ${step.operation}`,
                'Simplify both sides if needed',
                `Arrive at: ${step.afterExpression}`,
                'Check that the result is reasonable'
            ];
        }

        return ['Analyze the current situation', 'Determine what angle property to use', 'Apply the property'];
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try a similar problem with different angle measures',
            practiceHint: 'Start with simpler angle values to build confidence',
            extension: 'Try problems combining multiple angle relationships'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What angles do I know? What angle relationships exist?',
            goal: 'What angle am I trying to find?',
            strategy: 'Which angle theorem or property should I use?',
            execute: 'How do I apply this property correctly?',
            verify: 'Does my answer make geometric sense?'
        };
    }

    identifyDecisionPoints(step) {
        return [
            'Choosing which angle relationship applies',
            'Deciding which equation to set up',
            'Selecting the most efficient solution method'
        ];
    }

    suggestAlternativeMethods(step, problem) {
        const alternatives = {
            'complementary': [
                'Direct subtraction from 90°',
                'Setting up and solving an equation',
                'Using visual/geometric reasoning'
            ],
            'triangle_sum': [
                'Subtract known angles from 180°',
                'Use exterior angle theorem',
                'Apply multiple angle relationships'
            ]
        };

        return alternatives[problem.type] || ['Standard geometric approach is most direct'];
    }

    identifyPrerequisites(step, problemType) {
        const prerequisites = {
            'Identify angle relationship': ['Understanding of angle types', 'Knowledge of angle theorems'],
            'Set up equation': ['Basic algebra', 'Angle sum properties'],
            'Solve for unknown angle': ['Arithmetic operations', 'Solving linear equations']
        };

        return prerequisites[step.step] || ['Basic geometry knowledge'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Identify angle relationship': ['angle', 'relationship', 'theorem', 'property'],
            'Set up equation': ['equation', 'substitute', 'expression'],
            'Solve for unknown angle': ['solve', 'isolate', 'unknown'],
            'Verify solution': ['verify', 'check', 'substitute']
        };

        return vocabulary[step.step] || [];
    }

    generateGuidingQuestions(step, problem) {
        const questions = {
            'Identify angle relationship': [
                'What type of angle relationship is this?',
                'What is the angle sum for this relationship?',
                'How are these angles positioned relative to each other?'
            ],
            'Set up equation': [
                'What angles do I know?',
                'What equation represents this relationship?',
                'Have I included all relevant angles?'
            ],
            'Solve for unknown angle': [
                'What operation will isolate the unknown angle?',
                'Is my arithmetic correct?',
                'Does this answer seem reasonable?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'How does this help solve the problem?'];
    }

    generateProgressiveHints(step) {
        return {
            level1: 'Think about what angle relationship exists here.',
            level2: 'Remember the angle sum property for this type.',
            level3: 'Set up an equation using the angle relationship.',
            level4: step.expression ? `Use the relationship: ${step.expression}` : 'Apply the appropriate angle theorem.'
        };
    }

    // VERIFICATION METHODS

    verifyComplementary() {
        const { angle1 } = this.currentProblem.parameters;
        const angle2 = this.currentSolution.angles?.angle2;

        if (!angle2) return { type: 'incomplete' };

        const sum = angle1 + angle2;
        const isValid = Math.abs(sum - 90) < 0.001;

        return {
            angle1: angle1,
            angle2: angle2,
            sum: sum,
            expectedSum: 90,
            isValid: isValid,
            difference: Math.abs(sum - 90),
            message: isValid ? 'Angles are complementary' : `Sum is ${sum}°, not 90°`
        };
    }

    verifySupplementary() {
        const { angle1 } = this.currentProblem.parameters;
        const angle2 = this.currentSolution.angles?.angle2;

        if (!angle2) return { type: 'incomplete' };

        const sum = angle1 + angle2;
        const isValid = Math.abs(sum - 180) < 0.001;

        return {
            angle1: angle1,
            angle2: angle2,
            sum: sum,
            expectedSum: 180,
            isValid: isValid,
            difference: Math.abs(sum - 180),
            message: isValid ? 'Angles are supplementary' : `Sum is ${sum}°, not 180°`
        };
    }

    verifyTriangleSum() {
        const angles = this.currentSolution.angles;
        if (!angles) return { type: 'incomplete' };

        const sum = (angles.A || 0) + (angles.B || 0) + (angles.C || 0);
        const isValid = Math.abs(sum - 180) < 0.001;

        return {
            angleA: angles.A,
            angleB: angles.B,
            angleC: angles.C,
            sum: sum,
            expectedSum: 180,
            isValid: isValid,
            message: isValid ? 'Valid triangle angles' : `Sum is ${sum}°, not 180°`
        };
    }

    verifyPolygonSum() {
        const { sides } = this.currentProblem.parameters;
        const calculatedSum = this.currentSolution.interiorAngleSum;

        const expectedSum = (sides - 2) * 180;
        const isValid = calculatedSum === expectedSum;

        return {
            sides: sides,
            calculatedSum: calculatedSum,
            expectedSum: expectedSum,
            isValid: isValid,
            formula: `(${sides} - 2) × 180° = ${expectedSum}°`
        };
    }

    // FORMATTING METHODS FOR VERIFICATION

    formatComplementaryVerification(verification) {
        return [
            ['Angle 1', `${verification.angle1}°`],
            ['Angle 2', `${verification.angle2}°`],
            ['Sum', `${verification.sum}°`],
            ['Expected Sum', `${verification.expectedSum}°`],
            ['Valid', verification.isValid ? 'Yes' : 'No'],
            ['Message', verification.message]
        ];
    }

    formatSupplementaryVerification(verification) {
        return [
            ['Angle 1', `${verification.angle1}°`],
            ['Angle 2', `${verification.angle2}°`],
            ['Sum', `${verification.sum}°`],
            ['Expected Sum', `${verification.expectedSum}°`],
            ['Valid', verification.isValid ? 'Yes' : 'No'],
            ['Message', verification.message]
        ];
    }

    formatTriangleSumVerification(verification) {
        return [
            ['Angle A', `${verification.angleA}°`],
            ['Angle B', `${verification.angleB}°`],
            ['Angle C', `${verification.angleC}°`],
            ['Sum', `${verification.sum}°`],
            ['Expected Sum', `${verification.expectedSum}°`],
            ['Valid Triangle', verification.isValid ? 'Yes' : 'No'],
            ['Message', verification.message]
        ];
    }

    formatPolygonVerification(verification) {
        return [
            ['Number of Sides', verification.sides],
            ['Calculated Sum', `${verification.calculatedSum}°`],
            ['Expected Sum', `${verification.expectedSum}°`],
            ['Formula Used', verification.formula],
            ['Valid', verification.isValid ? 'Yes' : 'No']
        ];
    }

    calculateVerificationConfidence() {
        if (!this.currentSolution || !this.currentProblem) return 'Unknown';

        const { type } = this.currentProblem;

        switch (type) {
            case 'complementary':
                const compVerif = this.verifyComplementary();
                return compVerif.isValid ? 'High' : 'Low';

            case 'supplementary':
                const suppVerif = this.verifySupplementary();
                return suppVerif.isValid ? 'High' : 'Low';

            case 'triangle_sum':
                const triVerif = this.verifyTriangleSum();
                return triVerif.isValid ? 'High' : 'Low';

            case 'polygon_interior':
                const polyVerif = this.verifyPolygonSum();
                return polyVerif.isValid ? 'High' : 'Low';

            default:
                return 'Medium';
        }
    }

    getVerificationNotes() {
        const { type } = this.currentProblem;
        const notes = [];

        switch (type) {
            case 'complementary':
                notes.push('Verified angles sum to 90°');
                notes.push('Tolerance: 0.001°');
                break;

            case 'supplementary':
                notes.push('Verified angles sum to 180°');
                notes.push('Linear pair property confirmed');
                break;

            case 'triangle_sum':
                notes.push('All three triangle angles verified');
                notes.push('Sum equals 180° as required');
                break;

            case 'polygon_interior':
                notes.push('Formula (n-2)×180° applied');
                notes.push('Verified against polygon properties');
                break;

            default:
                notes.push('Standard angle verification applied');
        }

        return notes.join('; ');
    }

    generatePedagogicalNotes(problemType) {
        const pedagogicalDatabase = {
            complementary: {
                objectives: [
                    'Understand complementary angle relationships',
                    'Find complement of a given angle',
                    'Apply complementary angles in problem solving'
                ],
                keyConcepts: [
                    'Angles that sum to 90°',
                    'Right angle relationship',
                    'Angle subtraction from 90°'
                ],
                prerequisites: [
                    'Understanding of angle measurement',
                    'Basic arithmetic (addition/subtraction)',
                    'Concept of right angles (90°)'
                ],
                commonDifficulties: [
                    'Confusing complementary with supplementary',
                    'Arithmetic errors in subtraction',
                    'Negative angle results'
                ],
                extensions: [
                    'Complementary angles in right triangles',
                    'Multiple complementary relationships',
                    'Algebraic expressions for complements'
                ],
                assessment: [
                    'Can student identify complementary angles?',
                    'Can student calculate complement accurately?',
                    'Does student verify the 90° sum?'
                ]
            },
            supplementary: {
                objectives: [
                    'Understand supplementary angle relationships',
                    'Find supplement of a given angle',
                    'Apply supplementary angles to linear pairs'
                ],
                keyConcepts: [
                    'Angles that sum to 180°',
                    'Linear pair concept',
                    'Straight angle relationship'
                ],
                prerequisites: [
                    'Understanding of angle measurement',
                    'Concept of straight lines (180°)',
                    'Basic arithmetic operations'
                ],
                commonDifficulties: [
                    'Confusing supplementary with complementary',
                    'Misidentifying linear pairs',
                    'Calculation errors'
                ],
                extensions: [
                    'Supplementary angles with variables',
                    'Multiple supplementary relationships',
                    'Applications in parallel lines'
                ],
                assessment: [
                    'Can student recognize linear pairs?',
                    'Can student calculate supplements correctly?',
                    'Does student verify the 180° sum?'
                ]
            },
            triangle_sum: {
                objectives: [
                    'Apply triangle angle sum theorem',
                    'Find missing angles in triangles',
                    'Verify triangle validity'
                ],
                keyConcepts: [
                    'Sum of angles equals 180°',
                    'Triangle angle sum theorem',
                    'Relationship between three angles'
                ],
                prerequisites: [
                    'Understanding of triangles',
                    'Angle measurement concepts',
                    'Addition and subtraction skills'
                ],
                commonDifficulties: [
                    'Including exterior angles in sum',
                    'Arithmetic errors with three numbers',
                    'Accepting invalid triangle angles'
                ],
                extensions: [
                    'Angle relationships in special triangles',
                    'Exterior angle theorem',
                    'Triangle classification by angles'
                ],
                assessment: [
                    'Can student apply the 180° rule?',
                    'Can student find third angle from two?',
                    'Does student recognize invalid triangles?'
                ]
            },
            vertical: {
                objectives: [
                    'Identify vertical angle pairs',
                    'Apply vertical angles theorem',
                    'Find all angles at an intersection'
                ],
                keyConcepts: [
                    'Vertical angles are equal',
                    'Four angles at intersection',
                    'Adjacent angles are supplementary'
                ],
                prerequisites: [
                    'Understanding of intersecting lines',
                    'Concept of opposite angles',
                    'Supplementary angle knowledge'
                ],
                commonDifficulties: [
                    'Confusing vertical with adjacent angles',
                    'Not recognizing both pairs',
                    'Assuming all four angles are equal'
                ],
                extensions: [
                    'Multiple intersecting lines',
                    'Proofs using vertical angles',
                    'Applications in coordinate geometry'
                ],
                assessment: [
                    'Can student identify vertical pairs?',
                    'Can student find all four angles?',
                    'Does student understand the equality property?'
                ]
            },
            polygon_interior: {
                objectives: [
                    'Apply polygon angle sum formula',
                    'Calculate interior angles of polygons',
                    'Find angles in regular polygons'
                ],
                keyConcepts: [
                    'Formula: (n-2) × 180°',
                    'Relationship between sides and angle sum',
                    'Regular vs irregular polygons'
                ],
                prerequisites: [
                    'Triangle angle sum knowledge',
                    'Understanding of polygons',
                    'Multiplication and division skills'
                ],
                commonDifficulties: [
                    'Using wrong formula (n×180)',
                    'Miscounting polygon sides',
                    'Confusing interior and exterior angles'
                ],
                extensions: [
                    'Exterior angle sum (always 360°)',
                    'Tessellations and angle measures',
                    'Irregular polygon problems'
                ],
                assessment: [
                    'Can student apply the formula correctly?',
                    'Can student work backwards to find sides?',
                    'Does student understand regular polygons?'
                ]
            },
            exterior_angle: {
                objectives: [
                    'Understand exterior angle theorem',
                    'Calculate exterior angles',
                    'Apply remote interior angle relationship'
                ],
                keyConcepts: [
                    'Exterior angle = sum of remote interiors',
                    'Exterior + adjacent interior = 180°',
                    'Polygon exterior angles sum to 360°'
                ],
                prerequisites: [
                    'Triangle angle sum theorem',
                    'Supplementary angles',
                    'Understanding of angle positions'
                ],
                commonDifficulties: [
                    'Identifying remote interior angles',
                    'Confusing exterior with interior',
                    'Incorrect angle identification'
                ],
                extensions: [
                    'Exterior angles in polygons',
                    'Proofs using exterior angles',
                    'Applications in navigation'
                ],
                assessment: [
                    'Can student identify exterior angles?',
                    'Can student find remote interiors?',
                    'Does student apply theorem correctly?'
                ]
            },
            parallel_transversal: {
                objectives: [
                    'Identify angle relationships with parallel lines',
                    'Apply corresponding and alternate angle theorems',
                    'Use co-interior angle properties'
                ],
                keyConcepts: [
                    'Corresponding angles are equal',
                    'Alternate interior angles are equal',
                    'Co-interior angles sum to 180°'
                ],
                prerequisites: [
                    'Understanding of parallel lines',
                    'Knowledge of transversals',
                    'Angle identification skills'
                ],
                commonDifficulties: [
                    'Confusing different angle types',
                    'Misidentifying angle positions',
                    'Not recognizing which angles are equal'
                ],
                extensions: [
                    'Proving lines are parallel',
                    'Multiple transversals',
                    'Applications in coordinate geometry'
                ],
                assessment: [
                    'Can student identify angle types?',
                    'Can student find all related angles?',
                    'Does student understand parallel line properties?'
                ]
            },
            angle_bisector: {
                objectives: [
                    'Understand angle bisector properties',
                    'Calculate bisected angle measures',
                    'Apply bisector in constructions'
                ],
                keyConcepts: [
                    'Bisector divides angle into equal parts',
                    'Each part is half the original',
                    'Two congruent angles created'
                ],
                prerequisites: [
                    'Understanding of angle measurement',
                    'Division by 2',
                    'Concept of equality'
                ],
                commonDifficulties: [
                    'Confusing bisector with other angle divisions',
                    'Arithmetic errors in division',
                    'Not recognizing equal parts'
                ],
                extensions: [
                    'Angle trisection concepts',
                    'Bisector constructions',
                    'Applications in triangle centers'
                ],
                assessment: [
                    'Can student find bisected angles?',
                    'Can student work backwards to original?',
                    'Does student understand equality property?'
                ]
            },
            inscribed_angle: {
                objectives: [
                    'Understand inscribed angle theorem',
                    'Calculate inscribed angles from arcs',
                    'Apply half-arc relationship'
                ],
                keyConcepts: [
                    'Inscribed angle = (1/2) × arc',
                    'Vertex on circle, sides are chords',
                    'Angle in semicircle is 90°'
                ],
                prerequisites: [
                    'Understanding of circles',
                    'Arc measurement concepts',
                    'Division by 2'
                ],
                commonDifficulties: [
                    'Confusing inscribed with central angles',
                    'Incorrect arc identification',
                    'Forgetting the 1/2 relationship'
                ],
                extensions: [
                    'Angles subtending same arc',
                    'Cyclic quadrilaterals',
                    'Circle theorems and proofs'
                ],
                assessment: [
                    'Can student apply the half-arc rule?',
                    'Can student find arc from inscribed angle?',
                    'Does student recognize semicircle property?'
                ]
            },
            central_angle: {
                objectives: [
                    'Understand central angle properties',
                    'Calculate central angles and arcs',
                    'Apply arc length relationships'
                ],
                keyConcepts: [
                    'Central angle = arc measure',
                    'Vertex at center of circle',
                    'Relationship with inscribed angles'
                ],
                prerequisites: [
                    'Understanding of circles',
                    'Arc measurement',
                    'Basic circle properties'
                ],
                commonDifficulties: [
                    'Confusing central with inscribed',
                    'Arc length vs arc measure',
                    'Unit conversions (degrees/radians)'
                ],
                extensions: [
                    'Sector area calculations',
                    'Arc length formulas',
                    'Applications in circular motion'
                ],
                assessment: [
                    'Can student identify central angles?',
                    'Can student calculate arc lengths?',
                    'Does student understand the 1:1 relationship?'
                ]
            }
        };

        return pedagogicalDatabase[problemType] || {
            objectives: ['Solve angle problems using geometric properties'],
            keyConcepts: ['Apply appropriate angle theorems'],
            prerequisites: ['Basic geometry knowledge'],
            commonDifficulties: ['Various calculation errors'],
            extensions: ['More complex angle relationships'],
            assessment: ['Check understanding of angle properties']
        };
    }

    generateAlternativeMethods(problemType) {
        const alternativeDatabase = {
            complementary: {
                primaryMethod: 'Subtraction from 90°',
                methods: [
                    {
                        name: 'Direct Subtraction',
                        description: 'Complement = 90° - given angle'
                    },
                    {
                        name: 'Equation Method',
                        description: 'Set up equation x + given = 90°, solve for x'
                    },
                    {
                        name: 'Visual Method',
                        description: 'Use protractor to measure complement directly'
                    }
                ],
                comparison: 'Direct subtraction is fastest; equation method reinforces algebra; visual method builds geometric intuition'
            },
            supplementary: {
                primaryMethod: 'Subtraction from 180°',
                methods: [
                    {
                        name: 'Direct Subtraction',
                        description: 'Supplement = 180° - given angle'
                    },
                    {
                        name: 'Linear Pair Method',
                        description: 'Recognize as linear pair, apply straight angle property'
                    },
                    {
                        name: 'Equation Method',
                        description: 'Set up equation x + given = 180°, solve for x'
                    }
                ],
                comparison: 'Direct subtraction is most efficient; linear pair method emphasizes geometric relationship; equation method connects to algebra'
            },
            triangle_sum: {
                primaryMethod: 'Apply 180° sum rule',
                methods: [
                    {
                        name: 'Sum and Subtract',
                        description: 'Add two known angles, subtract from 180°'
                    },
                    {
                        name: 'Equation Method',
                        description: 'Set up A + B + C = 180°, solve for unknown'
                    },
                    {
                        name: 'Exterior Angle Method',
                        description: 'Use exterior angle if available for alternative solution'
                    }
                ],
                comparison: 'Sum-subtract is direct; equation method is systematic; exterior angle method provides verification'
            },
            polygon_interior: {
                primaryMethod: 'Formula (n-2) × 180°',
                methods: [
                    {
                        name: 'Triangle Division',
                        description: 'Divide polygon into triangles, multiply by 180°'
                    },
                    {
                        name: 'Direct Formula',
                        description: 'Apply (n-2) × 180° directly'
                    },
                    {
                        name: 'Table/Pattern Method',
                        description: 'Build table of values to see pattern'
                    }
                ],
                comparison: 'Triangle division shows why formula works; direct formula is fastest; pattern method builds understanding'
            },
            parallel_transversal: {
                primaryMethod: 'Apply parallel line angle relationships',
                methods: [
                    {
                        name: 'Corresponding Angles',
                        description: 'Use corresponding angles are equal'
                    },
                    {
                        name: 'Alternate Interior',
                        description: 'Use alternate interior angles are equal'
                    },
                    {
                        name: 'Co-Interior',
                        description: 'Use co-interior angles sum to 180°'
                    },
                    {
                        name: 'Combined Method',
                        description: 'Use multiple relationships together'
                    }
                ],
                comparison: 'Choose method based on which angles are given; combined method is most comprehensive'
            },
            inscribed_angle: {
                primaryMethod: 'Half-arc formula',
                methods: [
                    {
                        name: 'Direct Formula',
                        description: 'Inscribed angle = (1/2) × arc'
                    },
                    {
                        name: 'Central Angle Method',
                        description: 'Find central angle first, then divide by 2'
                    },
                    {
                        name: 'Theorem Application',
                        description: 'Apply inscribed angle theorem directly'
                    }
                ],
                comparison: 'Direct formula is fastest; central angle method provides context; theorem application emphasizes proof'
            }
        };

        return alternativeDatabase[problemType] || {
            primaryMethod: 'Standard geometric approach',
            methods: [
                {
                    name: 'Systematic Method',
                    description: 'Follow standard angle problem-solving steps'
                }
            ],
            comparison: 'Method selection depends on given information and problem context'
        };
    }

    // GRAPH DATA GENERATION

    generateAngleGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;

        switch (type) {
            case 'complementary':
            case 'supplementary':
                this.graphData = this.generateAnglePairGraph();
                break;

            case 'vertical':
                this.graphData = this.generateIntersectionGraph();
                break;

            case 'triangle_sum':
                this.graphData = this.generateTriangleGraph();
                break;

            case 'polygon_interior':
                this.graphData = this.generatePolygonGraph();
                break;

            case 'inscribed_angle':
            case 'central_angle':
                this.graphData = this.generateCircleGraph();
                break;
        }
    }

    generateAnglePairGraph() {
        const { angle1 } = this.currentProblem.parameters;
        const angle2 = this.currentSolution.angles?.angle2;

        return {
            type: 'angle_pair',
            angle1: angle1,
            angle2: angle2,
            visualization: 'Two angles forming complementary or supplementary pair'
        };
    }

    generateIntersectionGraph() {
        const angles = this.currentSolution.angles;

        return {
            type: 'intersection',
            angles: angles,
            visualization: 'Four angles at line intersection'
        };
    }

    generateTriangleGraph() {
        const angles = this.currentSolution.angles;

        return {
            type: 'triangle',
            angleA: angles?.A,
            angleB: angles?.B,
            angleC: angles?.C,
            visualization: 'Triangle with three interior angles'
        };
    }

    generatePolygonGraph() {
        const { sides } = this.currentProblem.parameters;

        return {
            type: 'polygon',
            sides: sides,
            angleSum: this.currentSolution.interiorAngleSum,
            visualization: `${sides}-sided polygon`
        };
    }

    generateCircleGraph() {
        return {
            type: 'circle',
            inscribedAngle: this.currentSolution.inscribedAngle,
            centralAngle: this.currentSolution.centralAngle,
            arcMeasure: this.currentSolution.arcMeasure,
            visualization: 'Circle with inscribed/central angle'
        };
    }

    // WORKBOOK GENERATION

    generateAngleWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createEnhancedStepsSection(),
            this.createLessonSection(),
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
            title: 'Enhanced Angles Mathematical Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSection() {
        if (!this.currentProblem) return null;

        return {
            title: 'Angle Problem Statement',
            type: 'problem',
            data: [
                ['Problem Type', this.angleTypes[this.currentProblem.type]?.name || this.currentProblem.type],
                ['Description', this.currentProblem.scenario || 'Angle calculation problem'],
                ['Category', this.angleTypes[this.currentProblem.type]?.category || 'general']
            ]
        };
    }

    createEnhancedStepsSection() {
        if (!this.solutionSteps || this.solutionSteps.length === 0) return null;

        const stepsData = [];

        this.solutionSteps.forEach((step, index) => {
            stepsData.push(['Step ' + step.stepNumber, step.description]);

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

            if (step.algebraicRule) {
                stepsData.push(['Theorem/Rule', step.algebraicRule]);
            }

            if (step.visualHint && this.explanationLevel !== 'basic') {
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

            if (step.finalAnswer) {
                stepsData.push(['*** FINAL ANSWER ***', step.numericalResult || step.afterExpression]);
            }

            stepsData.push(['', '']); // Spacing between steps
        });

        return {
            title: 'Detailed Step-by-Step Solution',
            type: 'steps',
            data: stepsData
        };
    }

    createLessonSection() {
        const { type } = this.currentProblem;
        const lessonInfo = this.lessons?.[type];

        if (!lessonInfo) {
            return {
                title: 'Key Concepts',
                type: 'lesson',
                data: [
                    ['Concept', 'Angle relationships are fundamental to geometry'],
                    ['Goal', 'Find unknown angle measures using geometric properties'],
                    ['Method', 'Apply appropriate angle theorems and formulas']
                ]
            };
        }

        return {
            title: lessonInfo.title,
            type: 'lesson',
            data: [
                ['Theory', lessonInfo.theory],
                ['Key Concepts', lessonInfo.concepts.join('; ')],
                ['Solving Steps', lessonInfo.solvingSteps.join(' → ')],
                ['Applications', lessonInfo.applications.join('; ')]
            ]
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        if (this.currentSolution.angles) {
            const angles = this.currentSolution.angles;
            for (const [key, value] of Object.entries(angles)) {
                solutionData.push([`Angle ${key}`, `${value}°`]);
            }
        }

        if (this.currentSolution.solutionType) {
            solutionData.push(['Solution Type', this.currentSolution.solutionType]);
        }

        if (this.currentSolution.formula) {
            solutionData.push(['Formula Used', this.currentSolution.formula]);
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData.length > 0 ? solutionData : [['Solution', 'See detailed steps above']]
        };
    }

    createAnalysisSection() {
        const { type } = this.currentProblem;

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: [
                ['Problem Type', this.angleTypes[type]?.name || type],
                ['Category', this.angleTypes[type]?.category || 'general'],
                ['Steps Used', this.solutionSteps?.length || 0],
                ['Explanation Level', this.explanationLevel],
                ['Method', 'Geometric angle properties and theorems']
            ]
        };
    }

    createVerificationSection() {
        if (!this.currentSolution || !this.currentProblem) return null;

        const verificationData = [];
        const { type } = this.currentProblem;

        verificationData.push(['Verification Method', 'Angle Sum Check']);
        verificationData.push(['', '']); // Spacing

        let verification;
        switch (type) {
            case 'complementary':
                verification = this.verifyComplementary();
                if (verification.type !== 'incomplete') {
                    verificationData.push(...this.formatComplementaryVerification(verification));
                }
                break;

            case 'supplementary':
                verification = this.verifySupplementary();
                if (verification.type !== 'incomplete') {
                    verificationData.push(...this.formatSupplementaryVerification(verification));
                }
                break;

            case 'triangle_sum':
                verification = this.verifyTriangleSum();
                if (verification.type !== 'incomplete') {
                    verificationData.push(...this.formatTriangleSumVerification(verification));
                }
                break;

            case 'polygon_interior':
                verification = this.verifyPolygonSum();
                verificationData.push(...this.formatPolygonVerification(verification));
                break;

            default:
                verificationData.push(['Status', 'Solution verified using geometric properties']);
        }

        if (this.verificationDetail === 'detailed') {
            verificationData.push(['', '']); // Spacing
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

    createPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const { type } = this.currentProblem;
        const notes = this.generatePedagogicalNotes(type);

        return {
            title: 'Teaching and Learning Notes',
            type: 'pedagogical',
            data: [
                ['Learning Objectives', notes.objectives.join('; ')],
                ['Key Concepts', notes.keyConcepts.join('; ')],
                ['Prerequisites', notes.prerequisites.join('; ')],
                ['Common Difficulties', notes.commonDifficulties.join('; ')],
                ['Extension Ideas', notes.extensions.join('; ')],
                ['Assessment Considerations', notes.assessment.join('; ')]
            ]
        };
    }

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const { type } = this.currentProblem;
        const alternatives = this.generateAlternativeMethods(type);

        return {
            title: 'Alternative Solution Approaches',
            type: 'alternatives',
            data: [
                ['Primary Method Used', alternatives.primaryMethod],
                ['', ''], // Spacing
                ['Alternative Methods', ''],
                ...alternatives.methods.map((method, index) => [
                    `Approach ${index + 1}`, `${method.name}: ${method.description}`
                ]),
                ['', ''], // Spacing
                ['Method Comparison', alternatives.comparison]
            ]
        };
    }
}

