// Enhanced Triangle Angles Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedTriangleAnglesWorkbook {
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
        this.initializeTriangleSolvers();
        this.initializeTriangleLessons();
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
        this.initializeHistoricalContext();
    }

    initializeMathSymbols() {
        return {
            // Mathematical operators
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±', 'sqrt': '√',
            // Greek letters (angles)
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            // Geometric symbols
            'angle': '∠', 'triangle': '△', 'degree': '°',
            'perpendicular': '⊥', 'parallel': '∥', 'congruent': '≅', 'similar': '∼'
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
                triangleBg: '#e8f4f8',
                angleBg: '#fce4ec'
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
                triangleBg: '#e0f2f7',
                angleBg: '#f8bbd0'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeTriangleSolvers() {
        this.triangleTypes = {
            // Finding missing angle given two angles
            two_angles_given: {
                patterns: [
                    /two.*angles.*(\d+).*(\d+)/i,
                    /find.*third.*angle/i,
                    /missing.*angle/i,
                    /angle.*sum/i
                ],
                solver: this.solveTwoAnglesGiven.bind(this),
                name: 'Find Third Angle (Two Angles Given)',
                category: 'angle_sum',
                description: 'Uses triangle angle sum theorem: A + B + C = 180°'
            },

            // Finding all angles in equilateral triangle
            equilateral: {
                patterns: [
                    /equilateral/i,
                    /all.*sides.*equal/i,
                    /60.*degree/i
                ],
                solver: this.solveEquilateral.bind(this),
                name: 'Equilateral Triangle Angles',
                category: 'special_triangles',
                description: 'All angles are 60° in an equilateral triangle'
            },

            // Finding angles in isosceles triangle
            isosceles: {
                patterns: [
                    /isosceles/i,
                    /two.*equal.*sides/i,
                    /base.*angles/i
                ],
                solver: this.solveIsosceles.bind(this),
                name: 'Isosceles Triangle Angles',
                category: 'special_triangles',
                description: 'Base angles are equal in isosceles triangle'
            },

            // Right triangle angles
            right_triangle: {
                patterns: [
                    /right.*triangle/i,
                    /90.*degree/i,
                    /perpendicular/i,
                    /complementary.*angles/i
                ],
                solver: this.solveRightTriangle.bind(this),
                name: 'Right Triangle Angles',
                category: 'special_triangles',
                description: 'One angle is 90°, other two are complementary'
            },

            // Exterior angle theorem
            exterior_angle: {
                patterns: [
                    /exterior.*angle/i,
                    /outside.*angle/i,
                    /remote.*interior/i
                ],
                solver: this.solveExteriorAngle.bind(this),
                name: 'Exterior Angle Theorem',
                category: 'angle_relationships',
                description: 'Exterior angle equals sum of two remote interior angles'
            },

            // Similar triangles - corresponding angles
            similar_triangles: {
                patterns: [
                    /similar.*triangle/i,
                    /corresponding.*angle/i,
                    /proportion/i
                ],
                solver: this.solveSimilarTriangles.bind(this),
                name: 'Similar Triangles - Angles',
                category: 'angle_relationships',
                description: 'Corresponding angles in similar triangles are equal'
            },

            // Triangle with algebraic expressions for angles
            algebraic_angles: {
                patterns: [
                    /\dx\s*[\+\-]/,
                    /expression.*angle/i,
                    /variable.*angle/i
                ],
                solver: this.solveAlgebraicAngles.bind(this),
                name: 'Algebraic Angle Expressions',
                category: 'algebraic',
                description: 'Angles expressed with variables, solve using angle sum'
            },

            // Angle bisector problems
            angle_bisector: {
                patterns: [
                    /bisector/i,
                    /divided.*equally/i,
                    /half.*angle/i
                ],
                solver: this.solveAngleBisector.bind(this),
                name: 'Angle Bisector Problems',
                category: 'angle_relationships',
                description: 'Angle bisector divides angle into two equal parts'
            },

            // Triangle inequality for angles
            triangle_inequality_angles: {
                patterns: [
                    /possible.*triangle/i,
                    /valid.*angles/i,
                    /can.*form/i
                ],
                solver: this.solveTriangleInequality.bind(this),
                name: 'Triangle Inequality - Angles',
                category: 'validity',
                description: 'Checks if given angles can form a valid triangle'
            },

            // Isosceles right triangle (45-45-90)
            isosceles_right: {
                patterns: [
                    /45.*45.*90/i,
                    /isosceles.*right/i
                ],
                solver: this.solveIsoscelesRight.bind(this),
                name: '45-45-90 Triangle',
                category: 'special_triangles',
                description: 'Special right triangle with angles 45°, 45°, 90°'
            },

            // 30-60-90 triangle
            thirty_sixty_ninety: {
                patterns: [
                    /30.*60.*90/i,
                    /half.*equilateral/i
                ],
                solver: this.solveThirtySixtyNinety.bind(this),
                name: '30-60-90 Triangle',
                category: 'special_triangles',
                description: 'Special right triangle with angles 30°, 60°, 90°'
            },

            // Multiple triangles (complex figures)
            multiple_triangles: {
                patterns: [
                    /multiple.*triangle/i,
                    /composite.*figure/i,
                    /overlapping/i
                ],
                solver: this.solveMultipleTriangles.bind(this),
                name: 'Multiple Triangle Problems',
                category: 'complex',
                description: 'Problems involving multiple triangles in one figure'
            },

            // Angle-side relationships
            angle_side_relationship: {
                patterns: [
                    /largest.*angle/i,
                    /smallest.*angle/i,
                    /opposite.*longest/i
                ],
                solver: this.solveAngleSideRelationship.bind(this),
                name: 'Angle-Side Relationships',
                category: 'relationships',
                description: 'Largest angle is opposite longest side, etc.'
            },

            // Triangle with one angle and ratio of other two
            angle_ratio: {
                patterns: [
                    /ratio.*\d+:\d+/i,
                    /proportion.*angle/i
                ],
                solver: this.solveAngleRatio.bind(this),
                name: 'Angles in Given Ratio',
                category: 'ratios',
                description: 'Find angles when given ratio and one angle or sum'
            },

            // Complementary and supplementary in triangles
            complementary_supplementary: {
                patterns: [
                    /complementary/i,
                    /supplementary/i,
                    /add.*90/i,
                    /add.*180/i
                ],
                solver: this.solveComplementarySupplementary.bind(this),
                name: 'Complementary/Supplementary Angles',
                category: 'angle_relationships',
                description: 'Using complementary (90°) and supplementary (180°) relationships'
            }
        };
    }

    initializeTriangleLessons() {
        this.lessons = {
            angle_sum_theorem: {
                title: "Triangle Angle Sum Theorem",
                concepts: [
                    "Sum of interior angles in any triangle is always 180°",
                    "Formula: ∠A + ∠B + ∠C = 180°",
                    "Works for all triangles: acute, obtuse, right",
                    "Foundation for solving most triangle angle problems"
                ],
                theory: "The triangle angle sum theorem states that the three interior angles of any triangle always add up to 180 degrees. This is a fundamental property that holds true regardless of the triangle's size, shape, or type.",
                keyFormulas: {
                    "Angle Sum": "∠A + ∠B + ∠C = 180°",
                    "Missing Angle": "∠C = 180° - ∠A - ∠B",
                    "General Form": "α + β + γ = 180°"
                },
                proof: "Can be proven by drawing a line parallel to one side through the opposite vertex, creating alternate interior angles",
                applications: [
                    "Finding missing angles in triangles",
                    "Verifying if three angles can form a triangle",
                    "Solving for variables in algebraic angle expressions",
                    "Navigation and surveying"
                ],
                visualizations: [
                    "Tear off triangle corners and align them to form straight line (180°)",
                    "Draw parallel line and use alternate interior angles",
                    "Use triangle with marked angles showing sum"
                ]
            },

            special_triangles: {
                title: "Special Triangles",
                concepts: [
                    "Equilateral: All three angles are 60°",
                    "Isosceles: Two base angles are equal",
                    "Right triangle: One angle is 90°, other two are complementary",
                    "45-45-90: Isosceles right triangle",
                    "30-60-90: Half of an equilateral triangle"
                ],
                theory: "Special triangles have predictable angle relationships that make calculations easier. Recognizing these patterns is essential for efficient problem-solving.",
                keyFormulas: {
                    "Equilateral": "All angles = 60°",
                    "Isosceles": "Base angles equal, vertex angle different",
                    "Right Triangle": "One angle = 90°, other two add to 90°",
                    "45-45-90": "Angles are 45°, 45°, 90°",
                    "30-60-90": "Angles are 30°, 60°, 90°"
                },
                properties: {
                    equilateral: {
                        angles: "60°, 60°, 60°",
                        sides: "All equal",
                        symmetry: "3 lines of symmetry"
                    },
                    isosceles: {
                        angles: "Two equal base angles",
                        sides: "Two equal sides",
                        symmetry: "1 line of symmetry"
                    },
                    right: {
                        angles: "One 90°, two complementary",
                        sides: "Follows Pythagorean theorem",
                        special: "Can be isosceles (45-45-90)"
                    }
                },
                applications: [
                    "Architecture and construction",
                    "Engineering designs",
                    "Art and aesthetics",
                    "Navigation"
                ]
            },

            exterior_angles: {
                title: "Exterior Angle Theorem",
                concepts: [
                    "Exterior angle = sum of two remote interior angles",
                    "Exterior angle + adjacent interior angle = 180°",
                    "Sum of all exterior angles (one at each vertex) = 360°",
                    "Useful for finding angles without knowing all interior angles"
                ],
                theory: "An exterior angle of a triangle is formed when one side is extended. The exterior angle theorem states that an exterior angle equals the sum of the two remote (non-adjacent) interior angles.",
                keyFormulas: {
                    "Exterior Angle Theorem": "Exterior ∠ = ∠A + ∠B (remote interior)",
                    "Linear Pair": "Exterior ∠ + Adjacent Interior ∠ = 180°",
                    "Sum of Exteriors": "Sum of all exterior angles = 360°"
                },
                proof: "Using angle sum theorem and linear pairs (supplementary angles)",
                applications: [
                    "Finding angles in complex figures",
                    "Navigation and surveying",
                    "Architectural design",
                    "Proof writing in geometry"
                ],
                commonMistakes: [
                    "Confusing exterior angle with interior angle",
                    "Adding all three interior angles instead of two remote ones",
                    "Forgetting that exterior and adjacent interior are supplementary"
                ]
            },

            angle_relationships: {
                title: "Angle Relationships in Triangles",
                concepts: [
                    "Vertical angles are equal",
                    "Corresponding angles in similar triangles are equal",
                    "Angle bisectors divide angles into two equal parts",
                    "Largest angle is opposite longest side",
                    "Smallest angle is opposite shortest side"
                ],
                theory: "Triangles have many angle relationships that connect angles to each other and to sides. Understanding these relationships is key to solving complex problems.",
                keyRelationships: {
                    "Similar Triangles": "Corresponding angles are equal (congruent)",
                    "Angle Bisector": "Divides angle into two equal angles",
                    "Angle-Side": "Larger angle opposite longer side",
                    "Complementary in Right △": "Two acute angles sum to 90°",
                    "Base Angles in Isosceles": "Two base angles are equal"
                },
                applications: [
                    "Proving triangle similarity",
                    "Finding unknown angles using relationships",
                    "Construction and design",
                    "Geometric proofs"
                ]
            },

            algebraic_angles: {
                title: "Algebraic Expressions for Angles",
                concepts: [
                    "Angles can be expressed as algebraic expressions",
                    "Use angle sum theorem to set up equations",
                    "Solve for variable, then find each angle",
                    "Check that all angles are positive and sum to 180°"
                ],
                theory: "When angles are given as algebraic expressions (like 2x, x+10, 3x-5), we use the angle sum theorem to create an equation, solve for the variable, then substitute back to find each angle.",
                keyFormulas: {
                    "Setup Equation": "Expression₁ + Expression₂ + Expression₃ = 180°",
                    "Solve for Variable": "Combine like terms and solve",
                    "Find Each Angle": "Substitute variable value into each expression"
                },
                solvingSteps: [
                    "Write expressions for each angle",
                    "Set up equation using angle sum theorem",
                    "Combine like terms",
                    "Solve for variable",
                    "Substitute to find each angle",
                    "Verify: angles are positive and sum to 180°"
                ],
                applications: [
                    "Word problems with angle descriptions",
                    "Optimization problems",
                    "Design problems with constraints",
                    "Algebraic geometry"
                ],
                commonExpressions: [
                    "Consecutive multiples: x, 2x, 3x",
                    "Linear expressions: x, x+10, x+20",
                    "Ratio-based: 2x, 3x, 4x (angles in ratio 2:3:4)",
                    "With operations: 2x-10, 3x+5, x"
                ]
            },

            triangle_classification: {
                title: "Classifying Triangles by Angles",
                concepts: [
                    "Acute: All three angles < 90°",
                    "Right: One angle = 90°",
                    "Obtuse: One angle > 90°",
                    "Equiangular: All three angles equal (60° each, same as equilateral)"
                ],
                theory: "Triangles can be classified by their angles. Each triangle falls into exactly one category based on its largest angle.",
                classification: {
                    acute: {
                        definition: "All angles less than 90°",
                        example: "60°, 70°, 50°",
                        property: "Can also be equilateral or isosceles"
                    },
                    right: {
                        definition: "Exactly one 90° angle",
                        example: "90°, 45°, 45° or 90°, 30°, 60°",
                        property: "Other two angles are complementary"
                    },
                    obtuse: {
                        definition: "One angle greater than 90°",
                        example: "100°, 50°, 30°",
                        property: "Cannot be equilateral or right"
                    },
                    equiangular: {
                        definition: "All angles equal (60° each)",
                        example: "60°, 60°, 60°",
                        property: "Same as equilateral triangle"
                    }
                },
                applications: [
                    "Determining triangle type from angles",
                    "Understanding properties and constraints",
                    "Solving geometry problems",
                    "Real-world object classification"
                ]
            },

            angle_bisectors_medians: {
                title: "Angle Bisectors and Special Lines",
                concepts: [
                    "Angle bisector divides angle into two equal parts",
                    "Three angle bisectors meet at incenter",
                    "Incenter is equidistant from all three sides",
                    "Used in construction and design"
                ],
                theory: "An angle bisector is a line or ray that divides an angle into two equal angles. The three angle bisectors of a triangle always meet at a single point called the incenter.",
                keyProperties: {
                    "Bisector Property": "Creates two equal angles",
                    "Incenter": "Point where all three bisectors meet",
                    "Equidistant": "Incenter is same distance from all sides",
                    "Inscribed Circle": "Incenter is center of inscribed circle"
                },
                applications: [
                    "Finding equal angles",
                    "Geometric constructions",
                    "Circle inscribed in triangle",
                    "Design and symmetry"
                ]
            },

            real_world_applications: {
                title: "Real-World Applications of Triangle Angles",
                concepts: [
                    "Architecture: roof pitches, structural stability",
                    "Navigation: triangulation, determining position",
                    "Engineering: bridge design, force analysis",
                    "Art and Design: perspective, composition",
                    "Surveying: land measurement, mapping"
                ],
                examples: [
                    {
                        application: "Roof Design",
                        description: "Roof pitch angles affect drainage, snow load, and aesthetics",
                        triangleType: "Isosceles triangle for symmetric roof"
                    },
                    {
                        application: "GPS Navigation",
                        description: "Uses triangulation from multiple satellites",
                        triangleType: "Various triangles formed by satellite positions"
                    },
                    {
                        application: "Bridge Trusses",
                        description: "Triangles provide structural stability",
                        triangleType: "Often equilateral or isosceles for strength"
                    },
                    {
                        application: "Art Perspective",
                        description: "Vanishing points create triangular sight lines",
                        triangleType: "Various angles create depth perception"
                    }
                ]
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            angle_sum: {
                'Setting up equation': [
                    'Forgetting that angles sum to 180°, not 360°',
                    'Using wrong total (confusing with quadrilateral)',
                    'Not including all three angles in the sum'
                ],
                'Calculating missing angle': [
                    'Arithmetic errors in subtraction',
                    'Forgetting to subtract from 180°',
                    'Subtracting angles in wrong order'
                ],
                'Verification': [
                    'Not checking if answer makes sense',
                    'Accepting negative angles',
                    'Not verifying sum equals 180°'
                ]
            },
            special_triangles: {
                'Identifying triangle type': [
                    'Confusing equilateral with isosceles',
                    'Not recognizing right triangle from 90° angle',
                    'Mixing up properties of different special triangles'
                ],
                'Using properties': [
                    'Forgetting that equilateral has all 60° angles',
                    'Not recognizing that base angles in isosceles are equal',
                    'Confusing complementary angles in right triangle'
                ]
            },
            exterior_angles: {
                'Applying theorem': [
                    'Adding all three interior angles instead of two remote',
                    'Confusing exterior with interior angle',
                    'Using adjacent interior angle instead of remote'
                ],
                'Identifying angles': [
                    'Not recognizing which angles are remote interior',
                    'Confusing which angle is exterior',
                    'Forgetting linear pair relationship'
                ]
            },
            algebraic: {
                'Setting up equation': [
                    'Not setting sum equal to 180°',
                    'Forgetting to include all angle expressions',
                    'Incorrectly combining like terms'
                ],
                'Solving for variable': [
                    'Arithmetic errors in solving equation',
                    'Sign errors when combining terms',
                    'Not simplifying completely'
                ],
                'Finding angles': [
                    'Forgetting to substitute back to find angles',
                    'Arithmetic errors in substitution',
                    'Not checking if angles are valid (positive, sum to 180°)'
                ]
            }
        };

        this.errorPrevention = {
            angle_sum_errors: {
                reminder: 'Always remember: angle sum in triangle = 180°, not 360°',
                method: 'Write "∠A + ∠B + ∠C = 180°" at top of work'
            },
            special_triangle_confusion: {
                reminder: 'Draw and label the triangle to see its properties clearly',
                method: 'Make a reference chart: Equilateral (60-60-60), Isosceles (two equal), Right (one 90°)'
            },
            exterior_angle_mistakes: {
                reminder: 'Exterior angle = sum of TWO remote interior angles only',
                method: 'Circle the two remote interior angles before adding'
            },
            algebraic_setup_errors: {
                reminder: 'Set up equation carefully: (expression) + (expression) + (expression) = 180',
                method: 'Use parentheses around each expression'
            },
            verification_importance: {
                reminder: 'Always check: Are angles positive? Do they sum to 180°?',
                method: 'Add final angles to verify sum, check each is between 0° and 180°'
            },
            units_reminder: {
                reminder: 'Include degree symbol (°) in final answer',
                method: 'Write ° after each angle measure'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why the angle relationships work and their geometric meaning',
                language: 'intuitive and meaning-focused, using visual reasoning'
            },
            procedural: {
                focus: 'Exact sequence of steps to find angles',
                language: 'step-by-step instructions with formulas'
            },
            visual: {
                focus: 'Graphical understanding and spatial visualization',
                language: 'visual and spatial metaphors with diagrams'
            },
            algebraic: {
                focus: 'Formal geometric theorems and algebraic manipulation',
                language: 'precise mathematical terminology'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential steps only',
                examples: 'concrete numbers and simple triangles',
                diagrams: 'clearly labeled basic triangles'
            },
            intermediate: {
                vocabulary: 'standard geometric terms',
                detail: 'main steps with brief explanations',
                examples: 'mix of simple and moderate complexity',
                diagrams: 'labeled triangles with some annotations'
            },
            ELI5: {
                vocabulary: 'explain like I\'m 5 years old - simplest possible terms',
                detail: 'every tiny step explained with real-world analogies',
                examples: 'pizza slices, corners of shapes, real objects',
                analogies: true,
                visualization: 'simple pictures and physical objects',
                diagrams: 'colorful, friendly triangles with faces or themes'
            },
            detailed: {
                vocabulary: 'full geometric vocabulary with theorems',
                detail: 'comprehensive explanations with proofs and reasoning',
                examples: 'abstract and generalized cases, complex problems',
                diagrams: 'detailed technical diagrams with all markings'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery with leading questions',
                examples: 'carefully sequenced difficulty progression',
                diagrams: 'building diagrams that add complexity gradually'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            roof_pitch: {
                scenario: "Determining roof angles for proper drainage",
                context: "Architects design roofs as triangles - the angles affect water runoff and snow load",
                equation: "If peak angle is 100° and roof is isosceles, find base angles",
                solution: "Base angles = (180° - 100°)/2 = 40° each",
                application: "Roof design, construction, architecture",
                explanation: "Symmetric roofs are isosceles triangles - knowing peak angle helps find pitch for each side"
            },
            navigation_triangulation: {
                scenario: "GPS uses triangulation to find your position",
                context: "Your position and three satellites form triangles - angles help determine distance",
                equation: "If two angles from your position to satellites are 45° and 60°, find third angle",
                solution: "Third angle = 180° - 45° - 60° = 75°",
                application: "GPS navigation, surveying, mapping",
                explanation: "Knowing angles in triangle helps calculate distances and pinpoint location"
            },
            bridge_truss: {
                scenario: "Bridge trusses use equilateral triangles for strength",
                context: "Triangles are stable shapes - equilateral triangles distribute force evenly",
                equation: "Each angle in equilateral truss triangle",
                solution: "All angles = 60°",
                application: "Engineering, bridge design, structural stability",
                explanation: "Equilateral triangles with 60° angles provide maximum strength and stability"
            },
            ramp_design: {
                scenario: "Wheelchair ramp angle must be accessible",
                context: "ADA standards require ramp angles to be safe - too steep is dangerous",
                equation: "If ramp makes 5° with ground and forms right triangle, find other angles",
                solution: "One angle = 90°, one = 5°, third = 180° - 90° - 5° = 85°",
                application: "Accessibility design, architecture, safety compliance",
                explanation: "Right triangle formed by ramp, ground, and vertical - angles determine safety"
            },
            ladder_safety: {
                scenario: "Safe ladder angle prevents tipping",
                context: "Ladder, ground, and wall form right triangle - proper angle ensures safety",
                equation: "If ladder makes 75° with ground, what angle with wall?",
                solution: "Wall angle = 90° - 75° = 15°; triangle has 90°, 75°, 15°",
                application: "Safety, construction, emergency services",
                explanation: "Right triangle angles are complementary - if one is 75°, other is 15°"
            },
            art_perspective: {
                scenario: "Artists use vanishing points and triangular sight lines",
                context: "Perspective drawing uses triangles to create depth - angles create realistic scenes",
                equation: "If viewer's sight line creates 30° and 80° angles with canvas edges, find third angle",
                solution: "Third angle = 180° - 30° - 80° = 70°",
                application: "Art, design, computer graphics, photography",
                explanation: "Understanding triangle angles helps create proper perspective and depth"
            },
            solar_panel_angle: {
                scenario: "Solar panels need optimal angle for sun exposure",
                context: "Panel, ground, and sun ray form triangle - angle affects energy capture",
                equation: "For maximum efficiency at latitude 40°, panel should tilt 40° from horizontal",
                solution: "Triangle has 90° (vertical), 40° (panel), 50° (remaining angle)",
                application: "Renewable energy, engineering, sustainability",
                explanation: "Angle of panel relative to sun's rays determines energy efficiency"
            },
            playground_slide: {
                scenario: "Slide angle must be fun but safe for children",
                context: "Slide, ladder, and ground form triangle - angle determines speed and safety",
                equation: "If slide makes 30° with ground and ladder is vertical, find angles",
                solution: "90° (ladder-ground), 30° (slide-ground), 60° (slide-ladder top)",
                application: "Playground design, safety standards, recreation",
                explanation: "Triangle angles determine how steep slide is - affects fun and safety"
            },
            surveying_land: {
                scenario: "Surveyors measure land using triangulation",
                context: "Unknown distances found by measuring angles in triangles formed by landmarks",
                equation: "From point A, angles to points B and C are 35° and 80°. Find third angle.",
                solution: "Third angle = 180° - 35° - 80° = 65°",
                application: "Land surveying, mapping, property boundaries",
                explanation: "Measuring angles helps calculate distances without directly measuring them"
            },
            airplane_descent: {
                scenario: "Airplane descent angle affects landing smoothness",
                context: "Airplane path, ground, and vertical form triangle - angle determines descent rate",
                equation: "Typical descent is 3° angle. If altitude is vertical, find other angles.",
                solution: "90° (altitude), 3° (descent), 87° (remaining)",
                application: "Aviation, flight safety, air traffic control",
                explanation: "Shallow descent angle (3°) provides smooth, comfortable landing"
            },
            mountain_grade: {
                scenario: "Road grade on mountain expressed as angle",
                context: "Road, horizontal, and vertical form right triangle - angle shows steepness",
                equation: "If 6% grade equals about 3.4° angle, find other angles in right triangle",
                solution: "90° (vertical-horizontal), 3.4° (road), 86.6° (remaining)",
                application: "Civil engineering, road design, transportation",
                explanation: "Small angle creates manageable grade - triangle helps visualize slope"
            },
            tent_design: {
                scenario: "Tent poles and ground create triangular frame",
                context: "Stable tent has triangular cross-section - angles affect space and stability",
                equation: "If tent makes 50° angles with ground on each side, find top angle",
                solution: "Top angle = 180° - 50° - 50° = 80°",
                application: "Outdoor gear design, camping, emergency shelters",
                explanation: "Isosceles triangle provides symmetric, stable tent structure"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            angle_sum: {
                skills: ['Addition', 'Subtraction', 'Understanding of angles', 'Degree measurement'],
                priorKnowledge: ['What an angle is', 'How to measure angles', 'Straight angle = 180°'],
                checkQuestions: [
                    "What is 180 - 70 - 50?",
                    "What is an angle?",
                    "How many degrees in a straight line?"
                ],
                fundamentals: [
                    "Recognize angles in geometric figures",
                    "Understand degree as unit of angle measure",
                    "Know that triangle has three angles and three sides"
                ]
            },
            special_triangles: {
                skills: ['Identifying equal sides', 'Recognizing right angles', 'Pattern recognition'],
                priorKnowledge: ['Angle sum theorem', 'What makes triangles special', 'Symmetry'],
                checkQuestions: [
                    "What is 180 ÷ 3?",
                    "What angle is a square corner?",
                    "If two angles are equal and their sum is 120°, what is each angle?"
                ],
                fundamentals: [
                    "Understand concept of equal angles",
                    "Recognize perpendicular lines (90° angle)",
                    "Identify symmetric shapes"
                ]
            },
            exterior_angles: {
                skills: ['Angle sum theorem', 'Addition', 'Identifying angle types'],
                priorKnowledge: ['Interior vs exterior', 'Supplementary angles', 'Linear pairs'],
                checkQuestions: [
                    "If two angles sum to 180°, what is their relationship?",
                    "What is 50 + 60?",
                    "Solve: ∠A + ∠B + ∠C = 180 when ∠A = 50 and ∠B = 60"
                ],
                fundamentals: [
                    "Understand what an exterior angle is",
                    "Know linear pair concept (supplementary)",
                    "Can identify remote interior angles"
                ]
            },
            algebraic: {
                skills: ['Solving linear equations', 'Combining like terms', 'Substitution'],
                priorKnowledge: ['Basic algebra', 'Angle sum theorem', 'Order of operations'],
                checkQuestions: [
                    "Solve: 2x + 3x + 4x = 180",
                    "If x = 20, what is 3x + 10?",
                    "Combine: 5x + 2x - x"
                ],
                fundamentals: [
                    "Can solve simple linear equations",
                    "Understands variables represent unknown values",
                    "Can substitute values into expressions"
                ]
            },
            similar_triangles: {
                skills: ['Angle sum theorem', 'Understanding similarity', 'Corresponding parts'],
                priorKnowledge: ['Congruence vs similarity', 'Corresponding angles', 'Proportions'],
                checkQuestions: [
                    "If triangle ABC ~ triangle DEF, what can you say about their angles?",
                    "What does 'corresponding' mean?",
                    "Are all equilateral triangles similar?"
                ],
                fundamentals: [
                    "Understand similarity concept",
                    "Can identify corresponding parts",
                    "Know that corresponding angles are equal in similar figures"
                ]
            },
            angle_relationships: {
                skills: ['Multiple geometric concepts', 'Logical reasoning', 'Pattern recognition'],
                priorKnowledge: ['Various angle theorems', 'Triangle properties', 'Deductive reasoning'],
                checkQuestions: [
                    "In a triangle, which side is opposite the largest angle?",
                    "If an angle is bisected, what happens?",
                    "What is a vertical angle?"
                ],
                fundamentals: [
                    "Understand multiple angle relationships",
                    "Can apply different theorems",
                    "Logical thinking and reasoning skills"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            triangle_sum_visual: {
                description: "Tear off triangle corners and arrange in line",
                analogy: "Like puzzle pieces fitting together to make a straight line (180°)",
                visualization: "Draw triangle, cut out corners, align them to show they form straight angle",
                suitableFor: ['angle_sum', 'two_angles_given'],
                explanation: "Visual proof that three angles sum to 180° by physically showing them form straight line"
            },
            parallel_line_proof: {
                description: "Draw line parallel to base through top vertex",
                analogy: "Like creating alternate interior angles on train tracks",
                visualization: "Triangle with parallel line showing alternate interior angles equal triangle angles",
                suitableFor: ['angle_sum', 'algebraic'],
                explanation: "Proves angle sum using alternate interior angles with parallel lines"
            },
            pizza_slice_model: {
                description: "Triangle as pizza slice",
                analogy: "Pizza slice has pointy end (small angle) and wide end (larger angles)",
                visualization: "Draw triangle that looks like pizza slice with crust as one side",
                suitableFor: ['all_types'],
                explanation: "Familiar object helps visualize triangle and its angles",
                ELI5: "Think of a triangle like a slice of pizza - it has three corners (angles) and three edges (sides)"
            },
            roof_model: {
                description: "Triangle as house roof",
                analogy: "Roof has peak angle at top and base angles where it meets walls",
                visualization: "Draw house with triangular roof, label angles",
                suitableFor: ['isosceles', 'two_angles_given'],
                explanation: "Symmetric roof illustrates isosceles triangle with equal base angles",
                ELI5: "A roof on a house is like a triangle - the pointy part at the top is one angle, and where the roof meets the house walls are the other two angles"
            },
            angle_arithmetic: {
                description: "Number line showing angle addition",
                analogy: "Like adding numbers, but total must always be exactly 180",
                visualization: "Number line from 0° to 180° showing three angles adding up",
                suitableFor: ['angle_sum', 'algebraic'],
                explanation: "Visual representation of adding angles to reach 180°"
            },
            exterior_angle_model: {
                description: "Opening a door creates exterior angle",
                analogy: "Door swinging open - outside angle equals sum of two inside corners",
                visualization: "Triangle with one side extended, showing exterior angle",
                suitableFor: ['exterior_angle'],
                explanation: "Physical model of how exterior angle relates to interior angles",
                ELI5: "When you open a door, the angle on the outside is the same as if you added two of the angles on the inside of the triangle together"
            },
            special_triangle_gallery: {
                description: "Gallery of special triangles with properties",
                analogy: "Like a collection of different triangle types, each with special features",
                visualization: "Chart showing equilateral (60-60-60), isosceles (two equal), right (90°), etc.",
                suitableFor: ['special_triangles'],
                explanation: "Reference chart for recognizing and using special triangle properties"
            },
            angle_bisector_symmetry: {
                description: "Angle bisector creates mirror symmetry",
                analogy: "Like folding paper perfectly in half - both sides match",
                visualization: "Triangle with angle bisector showing two equal halves",
                suitableFor: ['angle_bisector', 'isosceles'],
                explanation: "Bisector divides angle into two equal parts, creating symmetry"
            },
            algebraic_balance: {
                description: "Expressions on balance scale totaling 180°",
                analogy: "Like three weights on a scale that must equal 180",
                visualization: "Balance scale with three angle expressions adding to 180°",
                suitableFor: ['algebraic_angles'],
                explanation: "Shows how algebraic expressions must sum to 180° total"
            },
            similar_triangles_overlay: {
                description: "Similar triangles overlaid showing equal angles",
                analogy: "Like different sized photos of same object - shape same, size different",
                visualization: "Two similar triangles with corresponding angles marked equal",
                suitableFor: ['similar_triangles'],
                explanation: "Visual proof that corresponding angles in similar triangles are equal"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "Two angles of a triangle are 50° and 70°. Find the third angle.",
                    solution: 60,
                    steps: ["Sum of angles = 180°", "50° + 70° + ? = 180°", "120° + ? = 180°", "? = 180° - 120° = 60°"],
                    difficulty: "easy",
                    type: "two_angles_given"
                },
                {
                    problem: "Find each angle in an equilateral triangle.",
                    solution: "60°, 60°, 60°",
                    steps: ["Equilateral triangle has all equal angles", "Three equal angles sum to 180°", "Each angle = 180° ÷ 3 = 60°"],
                    difficulty: "easy",
                    type: "equilateral"
                },
                {
                    problem: "A right triangle has one acute angle of 35°. Find the other acute angle.",
                    solution: 55,
                    steps: ["Right triangle has one 90° angle", "90° + 35° + ? = 180°", "125° + ? = 180°", "? = 55°"],
                    difficulty: "easy",
                    type: "right_triangle"
                },
                {
                    problem: "An isosceles triangle has a vertex angle of 80°. Find each base angle.",
                    solution: "50° each",
                    steps: ["Base angles are equal", "80° + x + x = 180°", "80° + 2x = 180°", "2x = 100°", "x = 50° each"],
                    difficulty: "easy",
                    type: "isosceles"
                }
            ],
            intermediate: [
                {
                    problem: "The angles of a triangle are in ratio 2:3:4. Find each angle.",
                    solution: "40°, 60°, 80°",
                    steps: [
                        "Let angles be 2x, 3x, 4x",
                        "2x + 3x + 4x = 180°",
                        "9x = 180°",
                        "x = 20°",
                        "Angles: 2(20°)=40°, 3(20°)=60°, 4(20°)=80°"
                    ],
                    difficulty: "medium",
                    type: "angle_ratio"
                },
                {
                    problem: "An exterior angle of a triangle measures 125°. Two remote interior angles are 65° and what?",
                    solution: 60,
                    steps: [
                        "Exterior angle = sum of two remote interior angles",
                        "125° = 65° + ?",
                        "? = 125° - 65° = 60°"
                    ],
                    difficulty: "medium",
                    type: "exterior_angle"
                },
                {
                    problem: "Triangle angles are x, 2x, and 3x. Find each angle.",
                    solution: "30°, 60°, 90°",
                    steps: [
                        "x + 2x + 3x = 180°",
                        "6x = 180°",
                        "x = 30°",
                        "Angles: 30°, 2(30°)=60°, 3(30°)=90°",
                        "This is a 30-60-90 triangle!"
                    ],
                    difficulty: "medium",
                    type: "algebraic_angles"
                },
                {
                    problem: "In isosceles right triangle, find all angles.",
                    solution: "45°, 45°, 90°",
                    steps: [
                        "Right triangle: one angle = 90°",
                        "Isosceles: two angles equal",
                        "The two equal angles are the acute angles",
                        "90° + x + x = 180°",
                        "2x = 90°",
                        "x = 45° each"
                    ],
                    difficulty: "medium",
                    type: "isosceles_right"
                }
            ],
            advanced: [
                {
                    problem: "Angles of a triangle are (2x-10)°, (3x+5)°, and (x+25)°. Find each angle.",
                    solution: "50°, 65°, 65°",
                    steps: [
                        "(2x-10) + (3x+5) + (x+25) = 180",
                        "2x - 10 + 3x + 5 + x + 25 = 180",
                        "6x + 20 = 180",
                        "6x = 160",
                        "x = 26.67° (or 80/3)",
                        "Angles: 2(80/3)-10 = 160/3-10 = 130/3 ≈ 43.3°"
                        // Note: This example needs adjustment for clean values
                    ],
                    difficulty: "hard",
                    type: "algebraic_angles"
                },
                {
                    problem: "One angle of an isosceles triangle is 40°. What are the other angles? (Two possible answers)",
                    solution: ["40°, 100°" or "70°, 70°"],
                    steps: [
                        "Case 1: 40° is one of two equal angles",
                        "40° + 40° + x = 180°",
                        "x = 100°",
                        "Case 2: 40° is the different angle",
                        "40° + x + x = 180°",
                        "2x = 140°",
                        "x = 70° each",
                        "Both solutions valid: (40°, 40°, 100°) or (40°, 70°, 70°)"
                    ],
                    difficulty: "hard",
                    type: "isosceles"
                },
                {
                    problem: "In triangle ABC, angle A is twice angle B, and angle C is 20° more than angle B. Find all angles.",
                    solution: "80°, 40°, 60°",
                    steps: [
                        "Let ∠B = x",
                        "∠A = 2x",
                        "∠C = x + 20",
                        "2x + x + (x + 20) = 180",
                        "4x + 20 = 180",
                        "4x = 160",
                        "x = 40°",
                        "∠A = 2(40°) = 80°, ∠B = 40°, ∠C = 40°+20° = 60°"
                    ],
                    difficulty: "hard",
                    type: "algebraic_angles"
                }
            ],
            byMethod: {
                two_angles_given: [
                    { problem: "Angles are 45° and 60°, find third", solution: 75 },
                    { problem: "Angles are 30° and 30°, find third", solution: 120 },
                    { problem: "Angles are 90° and 50°, find third", solution: 40 }
                ],
                equilateral: [
                    { problem: "All angles in equilateral triangle", solution: "60° each" },
                    { problem: "Is 60-60-60 equilateral?", solution: "Yes" }
                ],
                isosceles: [
                    { problem: "Vertex angle 100°, find base angles", solution: "40° each" },
                    { problem: "Base angle 55°, find vertex angle", solution: 70 },
                    { problem: "Base angle 40°, find other angles", solution: "40°, 100°" }
                ],
                right_triangle: [
                    { problem: "Right triangle with 30° acute angle", solution: "30°, 60°, 90°" },
                    { problem: "Right triangle with 45° acute angle", solution: "45°, 45°, 90°" },
                    { problem: "Right triangle with 25° acute angle", solution: "25°, 65°, 90°" }
                ],
                exterior_angle: [
                    { problem: "Exterior 110°, one remote interior 50°", solution: "Other remote = 60°" },
                    { problem: "Remote interiors 40° and 70°", solution: "Exterior = 110°" }
                ],
                algebraic: [
                    { problem: "Angles are x, 2x, 3x", solution: "30°, 60°, 90°" },
                    { problem: "Angles are x, x, 2x", solution: "45°, 45°, 90°" },
                    { problem: "Angles are x+10, x+20, x+30", solution: "50°, 60°, 70°" }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            angle_sum_360: {
                misconception: "Thinking triangle angles sum to 360° (confusing with quadrilateral)",
                reality: "Triangle angles always sum to exactly 180°",
                correctiveExample: "Triangle: 3 sides, 180°. Quadrilateral: 4 sides, 360°. Pentagon: 5 sides, 540°.",
                commonIn: ['angle_sum', 'two_angles_given'],
                correction: "Remember: triangle (3 corners) = 180°, square (4 corners) = 360°"
            },
            all_angles_equal: {
                misconception: "Thinking all triangles have equal angles like equilateral",
                reality: "Only equilateral triangles have all angles equal (60° each)",
                correctiveExample: "Right triangle: 90°, 45°, 45° - angles are NOT all equal",
                commonIn: ['special_triangles'],
                correction: "Equilateral means equal SIDES and equal ANGLES. Most triangles are not equilateral."
            },
            exterior_equals_interior: {
                misconception: "Thinking exterior angle equals adjacent interior angle",
                reality: "Exterior angle equals sum of TWO REMOTE interior angles, and is supplementary to adjacent interior",
                correctiveExample: "If remote interiors are 50° and 60°, exterior = 110° (not 50° or 60°)",
                commonIn: ['exterior_angle'],
                correction: "Exterior = remote interior #1 + remote interior #2 (the two angles NOT next to it)"
            },
            isosceles_confusion: {
                misconception: "In isosceles, thinking the vertex angle (top) is also equal to base angles",
                reality: "In isosceles, only the TWO BASE angles are equal, not all three",
                correctiveExample: "Isosceles with vertex 80° has base angles of 50° each (not 80°)",
                commonIn: ['isosceles'],
                correction: "Isosceles: 2 equal sides → 2 equal BASE angles (opposite the equal sides)"
            },
            algebraic_setup_wrong_total: {
                misconception: "Setting algebraic expressions equal to wrong total (not 180)",
                reality: "Expressions for three angles must sum to exactly 180°",
                correctiveExample: "If angles are 2x, 3x, 4x, equation is 2x+3x+4x=180, NOT =360",
                commonIn: ['algebraic_angles'],
                correction: "Always write: (angle 1) + (angle 2) + (angle 3) = 180"
            },
            negative_angles: {
                misconception: "Accepting negative values as valid angle measures",
                reality: "Angles in a triangle must be positive (between 0° and 180°)",
                correctiveExample: "If solving gives x=-10°, this is INVALID. Check your work.",
                commonIn: ['algebraic_angles'],
                correction: "Always check: Are all angles positive? Do they sum to 180°?"
            },
            confusing_complementary_supplementary: {
                misconception: "Confusing complementary (90°) with supplementary (180°)",
                reality: "Complementary = sum to 90° (right angle). Supplementary = sum to 180° (straight line).",
                correctiveExample: "30° and 60° are complementary (sum=90°). 30° and 150° are supplementary (sum=180°).",
                commonIn: ['right_triangle', 'angle_relationships'],
                correction: "Think: 'C' in Complementary = Corner (90°). 'S' in Supplementary = Straight (180°)"
            },
            side_angle_mismatch: {
                misconception: "Thinking smallest angle is opposite smallest side in ALL problems",
                reality: "This is true, but often not the focus of basic angle-sum problems",
                correctiveExample: "Problem just asks for angles, not which is largest",
                commonIn: ['angle_side_relationship'],
                correction: "Use angle-side relationship only when problem involves comparing sides and angles"
            },
            forgetting_right_angle: {
                misconception: "In right triangle, forgetting to include the 90° angle in sum",
                reality: "Right triangle ALWAYS has one 90° angle that must be in the sum",
                correctiveExample: "If acute angles are 30° and 60°, total is 30°+60°+90°=180° (not 30°+60°=90°)",
                commonIn: ['right_triangle'],
                correction: "Right triangle: Always start with 90°, then find the other two angles"
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            triangle_sum_pizza: {
                analogy: "Three pizza slices arranged in circle",
                explanation: "If you take three slices (angles) from a triangle and arrange them point-to-point, they form a straight line (half circle = 180°)",
                suitableFor: ['angle_sum', 'two_angles_given'],
                ELI5: "Imagine cutting out the three corners of a triangle and putting them next to each other. They make a straight line! A straight line is 180 degrees."
            },
            equilateral_equality: {
                analogy: "Fair sharing among three friends",
                explanation: "If 180° is divided equally among three angles, each gets exactly 60°, just like sharing 180 candies among 3 friends gives 60 each",
                suitableFor: ['equilateral'],
                ELI5: "If you have 180 cookies and share them equally with 2 friends (3 people total), everyone gets 60 cookies. Same with angles in an equilateral triangle!"
            },
            isosceles_twins: {
                analogy: "Twin siblings with one older sibling",
                explanation: "In a family with twins and one older child, the twins are equal (like base angles) but the older child is different (like vertex angle)",
                suitableFor: ['isosceles'],
                ELI5: "Think of isosceles like twins - two things that are exactly the same (the base angles), and one thing that's different (the top angle)"
            },
            right_angle_corner: {
                analogy: "Corner of a book or room",
                explanation: "A right angle is like a perfect corner - exactly 90°. The other two angles must share the remaining 90° to total 180°",
                suitableFor: ['right_triangle'],
                ELI5: "A right triangle has one perfect square corner (90 degrees), just like the corner of your bedroom. The other two corners together also equal 90 degrees."
            },
            exterior_door_swing: {
                analogy: "Door opening creates exterior angle",
                explanation: "When a door swings open past the wall, the outside angle equals how far it opened plus the angle of the door frame",
                suitableFor: ['exterior_angle'],
                ELI5: "Imagine opening a door really wide. The angle on the outside equals adding up two of the angles on the inside of the triangle."
            },
            algebraic_mystery_box: {
                analogy: "Three mystery boxes that must total 180",
                explanation: "If you have three boxes with unknown amounts (x, 2x, 3x) that together must contain exactly 180 items, you can figure out what's in each box",
                suitableFor: ['algebraic_angles'],
                ELI5: "You have three piggy banks (angles) with different amounts of coins, but together they MUST have exactly 180 coins. If you know the pattern (like one has twice as many as another), you can figure out each one!"
            },
            complementary_puzzle: {
                analogy: "Two puzzle pieces fitting to make square corner",
                explanation: "Complementary angles fit together like puzzle pieces to make a perfect 90° corner",
                suitableFor: ['right_triangle', 'complementary_supplementary'],
                ELI5: "Two angles that are complementary are like two puzzle pieces that fit perfectly into a square corner (90 degrees total)"
            },
            similar_triangles_photos: {
                analogy: "Photos of same thing in different sizes",
                explanation: "Similar triangles are like printing a photo in different sizes - the angles stay the same even though the size changes",
                suitableFor: ['similar_triangles'],
                ELI5: "Imagine taking a photo of a triangle and making it bigger or smaller. The angles stay exactly the same - that's what similar triangles are!"
            },
            angle_bisector_folding: {
                analogy: "Folding paper exactly in half",
                explanation: "Bisecting an angle is like folding a piece of paper so both halves match perfectly - you get two equal angles",
                suitableFor: ['angle_bisector'],
                ELI5: "Cutting an angle in half with a bisector is like folding a piece of paper so both sides match perfectly"
            },
            triangle_stability: {
                analogy: "Three-legged stool is stable",
                explanation: "Triangles are strong because once the three angles are set, the shape is locked - that's why they sum to exactly 180°",
                suitableFor: ['all_types'],
                ELI5: "A triangle is like a three-legged stool - once you know the three angles, the shape can't wiggle or change. The angles always add up to the same number: 180!"
            },
            ratio_sharing: {
                analogy: "Sharing 180 items according to a recipe",
                explanation: "If angles are in ratio 2:3:4, it's like following a recipe that uses 2 cups of one thing, 3 of another, 4 of a third, but scaled to total 180",
                suitableFor: ['angle_ratio'],
                ELI5: "If angles are in a ratio like 2:3:4, imagine sharing 180 candies where one person gets 2 pieces for every 3 the second gets and 4 the third gets. You do the math to find out how many each person gets!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            two_angles_given: {
                level1: "What do all three angles in a triangle add up to?",
                level2: "You know two angles. What's the sum of those two?",
                level3: "Subtract the sum of the two known angles from 180°",
                level4: "Third angle = 180° - (angle1 + angle2)"
            },
            equilateral: {
                level1: "What's special about an equilateral triangle?",
                level2: "All three angles are equal. If they sum to 180°, what's each one?",
                level3: "Divide 180° by 3",
                level4: "Each angle = 180° ÷ 3 = 60°"
            },
            isosceles: {
                level1: "What's special about an isosceles triangle?",
                level2: "Two angles (the base angles) are equal. Do you know the vertex angle or a base angle?",
                level3: "If you know vertex: (180° - vertex) ÷ 2 = each base angle. If you know base: 180° - 2×base = vertex angle",
                level4: "Set up equation: vertex + base + base = 180° or vertex + 2×base = 180°"
            },
            right_triangle: {
                level1: "What angle does a right triangle always have?",
                level2: "One angle is 90°. The other two must add up to how much?",
                level3: "Other two angles sum to 180° - 90° = 90° (they're complementary)",
                level4: "If you know one acute angle, the other = 90° - that angle"
            },
            exterior_angle: {
                level1: "What does the exterior angle theorem say?",
                level2: "Exterior angle equals the sum of which interior angles?",
                level3: "Add the TWO REMOTE interior angles (not the adjacent one)",
                level4: "Exterior angle = remote interior angle 1 + remote interior angle 2"
            },
            algebraic_angles: {
                level1: "What equation can you set up using the angle sum theorem?",
                level2: "Add all three angle expressions and set equal to 180°",
                level3: "Combine like terms in your equation",
                level4: "Solve for the variable, then substitute back to find each angle"
            },
            angle_ratio: {
                level1: "If angles are in ratio a:b:c, how can you represent them?",
                level2: "Let the angles be a×x, b×x, c×x where x is a common factor",
                level3: "Set up equation: a×x + b×x + c×x = 180°",
                level4: "Solve for x: x = 180°/(a+b+c), then find each angle"
            },
            similar_triangles: {
                level1: "What's true about angles in similar triangles?",
                level2: "Corresponding angles are equal",
                level3: "If you know angles in one triangle, the similar triangle has the same angles",
                level4: "Match up corresponding angles - they're equal"
            },
            angle_bisector: {
                level1: "What does an angle bisector do?",
                level2: "It divides an angle into two equal parts",
                level3: "If the original angle is x°, each half is x°/2",
                level4: "Each resulting angle = original angle ÷ 2"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Two angles of a triangle measure 45° and 60°. Find the third angle.",
                    answer: 75,
                    assesses: "two_angles_given",
                    difficulty: "basic"
                },
                {
                    question: "What is each angle in an equilateral triangle?",
                    answer: 60,
                    assesses: "equilateral",
                    difficulty: "basic"
                },
                {
                    question: "An isosceles triangle has a vertex angle of 40°. Find each base angle.",
                    answer: 70,
                    assesses: "isosceles",
                    difficulty: "intermediate"
                },
                {
                    question: "In a right triangle, one acute angle is 30°. Find the other acute angle.",
                    answer: 60,
                    assesses: "right_triangle",
                    difficulty: "intermediate"
                },
                {
                    question: "The angles of a triangle are in ratio 1:2:3. Find the largest angle.",
                    answer: 90,
                    assesses: "angle_ratio",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "Do the angles 40°, 70°, and 80° form a valid triangle?",
                    options: ["Yes", "No", "Not enough information", "Only if it's isosceles"],
                    correct: "No",
                    explanation: "Sum is 40+70+80=190°, not 180°, so these cannot form a triangle"
                },
                {
                    question: "In a 30-60-90 triangle, which angle is the largest?",
                    options: ["30°", "60°", "90°", "They're all equal"],
                    correct: "90°",
                    explanation: "90° is larger than both 30° and 60°"
                },
                {
                    question: "If an exterior angle of a triangle is 120°, and one remote interior angle is 50°, what is the other remote interior angle?",
                    options: ["60°", "70°", "80°", "120°"],
                    correct: "70°",
                    explanation: "Exterior angle = sum of remote interiors, so 120° = 50° + x, thus x = 70°"
                },
                {
                    question: "What type of triangle has angles measuring 60°, 60°, and 60°?",
                    options: ["Right", "Isosceles", "Equilateral", "Obtuse"],
                    correct: "Equilateral",
                    explanation: "All angles equal means equilateral"
                }
            ],
            summative: [
                {
                    question: "The angles of a triangle are (3x-10)°, (2x+15)°, and (x+25)°. Find all three angles.",
                    answer: "65°, 55°, 60°",
                    showsWork: true,
                    rubric: {
                        setup_equation: 1,
                        combine_terms: 1,
                        solve_for_x: 1,
                        find_all_angles: 1,
                        verify_sum: 1
                    }
                },
                {
                    question: "An isosceles triangle has one angle of 36°. Find all possible sets of angles for this triangle.",
                    answer: "36°, 36°, 108° OR 36°, 72°, 72°",
                    showsWork: true,
                    rubric: {
                        recognize_two_cases: 2,
                        solve_case1: 1,
                        solve_case2: 1,
                        verify_both: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "Two angles are 50° and 60°. Find the third.",
                    "Find each angle in an equilateral triangle.",
                    "A right triangle has one angle of 90° and another of 40°. Find the third.",
                    "An isosceles triangle has base angles of 50° each. Find the vertex angle."
                ],
                medium: [
                    "Angles are in ratio 2:3:4. Find each angle.",
                    "An exterior angle measures 140°. One remote interior is 80°. Find the other remote interior.",
                    "Triangle angles are x, 2x, and x+60. Find each angle.",
                    "One angle in isosceles triangle is 40°. Find all possible sets of angles."
                ],
                hard: [
                    "Angles are (2x-15)°, (3x+10)°, and (x+35)°. Find each angle.",
                    "In triangle ABC, angle A is 30° more than angle B, and angle C is twice angle B. Find all angles.",
                    "Two angles of a triangle are complementary. The third angle is 60°. Find the complementary angles.",
                    "Prove that the sum of any two angles in a triangle is less than 180°."
                ]
            },
            byObjective: {
                canFindMissingAngle: [
                    "60° and 70° are two angles. Find the third.",
                    "85° and 45° are two angles. Find the third.",
                    "30° and 120° are two angles. Find the third."
                ],
                canRecognizeSpecialTriangles: [
                    "What are the angles in an equilateral triangle?",
                    "What are the angles in a 45-45-90 triangle?",
                    "What are the angles in a 30-60-90 triangle?"
                ],
                canSolveAlgebraicAngles: [
                    "Angles are x, 2x, 3x. Find each.",
                    "Angles are x, x+10, x+20. Find each.",
                    "Angles are 2x, 3x, 4x. Find each."
                ],
                canUseExteriorAngle: [
                    "Exterior angle is 100°, one remote interior is 40°. Find the other.",
                    "Remote interiors are 50° and 60°. Find exterior angle.",
                    "Exterior angle is 130°, one remote interior is 70°. Find the other."
                ],
                canSolveRatioProblems: [
                    "Angles in ratio 1:2:3. Find each.",
                    "Angles in ratio 2:3:4. Find each.",
                    "Angles in ratio 1:1:2. Find each and identify triangle type."
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "two_angles_known": "Use angle sum: third = 180° - (angle1 + angle2)",
                "equilateral_mentioned": "All angles = 60°",
                "isosceles_mentioned": "Two base angles equal; use angle sum with 2x for bases",
                "right_triangle": "One angle = 90°; other two are complementary (sum to 90°)",
                "ratio_given": "Let angles be ratio terms × variable; sum = 180°",
                "algebraic_expressions": "Set up equation: expression1 + expression2 + expression3 = 180°",
                "exterior_angle": "Exterior = sum of two remote interior angles",
                "angle_bisector": "Bisector divides angle into two equal parts",
                "similar_triangles": "Corresponding angles are equal"
            },
            whenToUseWhat: {
                angle_sum_theorem: "When you know two angles and need the third",
                special_triangle_properties: "When triangle is identified as equilateral, isosceles, or right",
                exterior_angle_theorem: "When problem involves exterior angles or you need alternative method",
                algebraic_setup: "When angles are given as expressions with variables",
                ratio_method: "When angles are described in ratio form",
                complementary_angles: "In right triangles for the two acute angles"
            },
            methodSelection: {
                factorsToConsider: [
                    "What information is given?",
                    "What type of triangle (if specified)?",
                    "Are angles given numerically or algebraically?",
                    "Is there a ratio or proportion involved?",
                    "Are exterior angles mentioned?"
                ],
                generalApproach: [
                    "1. Identify what type of triangle and what's given",
                    "2. Choose appropriate theorem or property",
                    "3. Set up equation if needed",
                    "4. Solve for unknown(s)",
                    "5. Verify: angles positive and sum to 180°"
                ]
            },
            optimizationTips: {
                "Draw a diagram": "Always sketch the triangle and label known angles",
                "Mark equal angles": "In isosceles or equilateral, mark equal angles with same symbol",
                "Use special triangle shortcuts": "Recognize 30-60-90, 45-45-90, and equilateral quickly",
                "Check reasonableness": "Each angle should be between 0° and 180°, and sum should be exactly 180°",
                "Look for patterns": "Ratios, multiples, complementary relationships",
                "Verify solution": "Always add the three angles to confirm they equal 180°"
            },
            problemTypeRecognition: {
                "contains 'equilateral'": "All angles are 60°",
                "contains 'isosceles'": "Two angles equal, find which two",
                "contains 'right triangle' or '90°'": "One angle is 90°, others are complementary",
                "gives two specific angles": "Use angle sum to find third",
                "angles in ratio a:b:c": "Let angles be ax, bx, cx and solve ax+bx+cx=180°",
                "angles as expressions": "Set up equation with expressions summing to 180°",
                "mentions 'exterior angle'": "Use exterior angle theorem",
                "mentions 'bisector'": "Angle is divided into two equal parts"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Quick Angle Sum",
                    timeLimit: 60,
                    problems: [
                        { problem: "50° and 60°, find third", answer: 70 },
                        { problem: "40° and 80°, find third", answer: 60 },
                        { problem: "45° and 90°, find third", answer: 45 },
                        { problem: "30° and 100°, find third", answer: 50 },
                        { problem: "75° and 75°, find third", answer: 30 }
                    ]
                },
                {
                    name: "Special Triangles Sprint",
                    timeLimit: 45,
                    problems: [
                        { problem: "Equilateral triangle angles", answer: "60°, 60°, 60°" },
                        { problem: "45-45-90 triangle", answer: "45°, 45°, 90°" },
                        { problem: "30-60-90 triangle", answer: "30°, 60°, 90°" },
                        { problem: "Isosceles with vertex 100°", answer: "40°, 40°, 100°" }
                    ]
                },
                {
                    name: "Algebraic Angles Challenge",
                    timeLimit: 120,
                    problems: [
                        { problem: "x, 2x, 3x", answer: "30°, 60°, 90°" },
                        { problem: "x, x, 2x", answer: "45°, 45°, 90°" },
                        { problem: "2x, 3x, 4x", answer: "40°, 60°, 80°" },
                        { problem: "x+10, x+20, x+30", answer: "50°, 60°, 70°" }
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Triangle or Not?",
                    problem: "Which sets of angles CAN form a triangle?",
                    sets: [
                        { angles: "50°, 60°, 70°", valid: true },
                        { angles: "40°, 70°, 80°", valid: false },
                        { angles: "60°, 60°, 60°", valid: true },
                        { angles: "90°, 90°, 0°", valid: false },
                        { angles: "30°, 60°, 90°", valid: true }
                    ],
                    solution: "Valid if sum equals exactly 180°"
                },
                {
                    name: "Mystery Triangle Type",
                    problem: "Given only angles, identify the triangle type",
                    examples: [
                        { angles: "60°, 60°, 60°", type: "Equilateral" },
                        { angles: "50°, 50°, 80°", type: "Isosceles" },
                        { angles: "45°, 45°, 90°", type: "Isosceles Right" },
                        { angles: "30°, 60°, 90°", type: "Right (scalene)" },
                        { angles: "110°, 40°, 30°", type: "Obtuse (scalene)" }
                    ]
                },
                {
                    name: "Angle Expression Creator",
                    challenge: "Create angle expressions (using x) that result in a specific triangle type",
                    constraints: "Must use variable x and sum to 180°",
                    examples: [
                        { target: "Right triangle", solution: "x, 2x, 3x (gives 30°, 60°, 90°)" },
                        { target: "Isosceles right", solution: "x, x, 2x (gives 45°, 45°, 90°)" },
                        { target: "Equilateral", solution: "x, x, x (gives 60°, 60°, 60°)" }
                    ]
                },
                {
                    name: "Reverse Engineering",
                    problem: "Given one angle and triangle type, find other angles",
                    examples: [
                        { given: "40° in isosceles triangle", solutions: ["40°, 40°, 100° OR 40°, 70°, 70°"] },
                        { given: "60° in right triangle", solutions: ["30°, 60°, 90°"] },
                        { given: "50° in isosceles triangle", solutions: ["50°, 50°, 80° OR 50°, 65°, 65°"] }
                    ]
                }
            ],
            applications: [
                {
                    scenario: "Roof Design",
                    problem: "A symmetric roof has a peak angle of 110°. What are the base angles where the roof meets the walls?",
                    equation: "110° + x + x = 180° (isosceles triangle)",
                    solution: "35° on each side",
                    realWorld: "Roof pitch affects drainage and structural load"
                },
                {
                    scenario: "Triangulation in GPS",
                    problem: "GPS satellites form triangle with your position. Two angles at your position are 40° and 85°. Find third angle.",
                    equation: "40° + 85° + x = 180°",
                    solution: "55°",
                    realWorld: "GPS uses triangulation from multiple satellites to find your exact position"
                },
                {
                    scenario: "Wheelchair Ramp",
                    problem: "A ramp forms a triangle with the ground and vertical. If ramp angle is 5° with ground, what's the angle with the vertical?",
                    equation: "90° + 5° + x = 180° (right triangle)",
                    solution: "85°",
                    realWorld: "Ramp angles must meet ADA accessibility standards for safety"
                },
                {
                    scenario: "Bridge Truss",
                    problem: "Equilateral triangles are used in bridge trusses for strength. What are all the angles?",
                    equation: "Equilateral triangle",
                    solution: "60°, 60°, 60°",
                    realWorld: "Equilateral triangles distribute force evenly across structure"
                },
                {
                    scenario: "Ladder Safety",
                    problem: "A ladder makes a 75° angle with the ground. What angle does it make with the wall?",
                    equation: "90° + 75° + x = 180° (right triangle: ground, wall, ladder)",
                    solution: "15°",
                    realWorld: "Proper ladder angle (about 75° with ground) prevents tipping"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Find third angle when two are 50° and 70°",
                        "50° + 70° + x = 360°",  // ERROR: should be 180°
                        "120° + x = 360°",
                        "x = 240°"
                    ],
                    correctAnswer: "x = 60°",
                    errorType: "Used 360° instead of 180° (confused with quadrilateral)"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Isosceles triangle with vertex angle 80°",
                        "All three angles equal, so each = 80°"  // ERROR: isosceles has only 2 equal
                    ],
                    correctAnswer: "Base angles = 50° each",
                    errorType: "Confused isosceles (2 equal) with equilateral (3 equal)"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "Exterior angle = 110°, one remote interior = 50°",
                        "Other remote interior = 110° - 50° = 60°",  // Actually correct!
                        "Wait, let me verify: 50° + 60° = 110° ✓"
                    ],
                    correctAnswer: "60° (work is actually correct)",
                    errorType: "No error - good work!"
                },
                {
                    name: "Find the Error #4",
                    incorrectWork: [
                        "Angles are x, 2x, 3x",
                        "x + 2x + 3x = 180",
                        "6x = 180",
                        "x = 30",
                        "Angles are: 30°, 30°, 30°"  // ERROR: forgot to multiply
                    ],
                    correctAnswer: "30°, 60°, 90°",
                    errorType: "Forgot to multiply x by coefficients when finding each angle"
                }
            ],
            criticalThinking: [
                {
                    question: "Can a triangle have two obtuse angles?",
                    answer: "No",
                    explanation: "Two obtuse angles (each > 90°) would sum to more than 180°, impossible in a triangle"
                },
                {
                    question: "Can a triangle have two right angles?",
                    answer: "No",
                    explanation: "Two 90° angles sum to 180°, leaving 0° for third angle, which is impossible"
                },
                {
                    question: "If you know a triangle is isosceles and one angle is 40°, can you definitely find the other angles?",
                    answer: "No - two possible solutions",
                    explanation: "40° could be vertex (giving 70°, 70°, 40°) or base angle (giving 40°, 40°, 100°)"
                },
                {
                    question: "True or false: The largest angle in a triangle is always less than 180°",
                    answer: "True",
                    explanation: "If one angle were 180° or more, the other two couldn't be positive (sum must be exactly 180°)"
                }
            ]
        };
    }

    initializeHistoricalContext() {
        this.historicalContext = {
            ancient_greece: {
                period: "~600-300 BCE",
                contribution: "Pythagoras and Eucle discovered and proved fundamental triangle properties",
                significance: "Euclid's Elements (Book I) contains formal proofs of triangle angle sum",
                keyFigures: ["Pythagoras", "Euclid", "Thales"],
                famousTheorem: "Pythagorean theorem connects triangle sides and angles in right triangles"
            },
            practical_origins: {
                origin: "Egyptian and Babylonian surveying",
                use: "Land measurement after Nile floods required triangle calculations",
                tools: "Rope stretchers (harpedonaptae) used 3-4-5 right triangles",
                significance: "Practical necessity drove mathematical discovery"
            },
            islamic_golden_age: {
                period: "~800-1200 CE",
                contribution: "Development of trigonometry to solve triangle problems",
                significance: "Al-Khwarizmi and others advanced triangle mathematics",
                innovation: "Systematic methods for solving all types of triangles"
            },
            modern_applications: {
                period: "20th-21st century",
                applications: [
                    "GPS and navigation (triangulation)",
                    "Computer graphics (triangular meshes)",
                    "Engineering (structural analysis using triangular trusses)",
                    "Astronomy (measuring distances using parallax triangles)",
                    "Architecture (triangular stability in design)"
                ],
                significance: "Triangle mathematics essential to modern technology"
            },
            interesting_facts: [
                "Ancient Egyptians used 3-4-5 right triangles to create perfect square corners for pyramids",
                "The triangle is the only polygon that is rigid - its shape is determined by its sides",
                "Triangulation is how GPS determines your position using satellites",
                "Surveyors still use triangulation methods developed thousands of years ago",
                "Every polygon can be divided into triangles, making triangles fundamental to geometry"
            ]
        };
    }

    // MAIN SOLVER METHOD
    solveTriangleProblem(config) {
        const { scenario, parameters, problemType, context, angles } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseTriangleProblem(scenario, parameters, problemType, context, angles);

            // Solve the problem
            this.currentSolution = this.solveTriangleProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateTriangleSteps(this.currentProblem, this.currentSolution);

            // Generate graph/diagram data if applicable
            this.generateTriangleVisualization();

            // Generate workbook
            this.generateTriangleWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                angles: this.currentSolution?.angles,
                triangleType: this.currentSolution?.triangleType
            };

        } catch (error) {
            throw new Error(`Failed to solve triangle problem: ${error.message}`);
        }
    }

    parseTriangleProblem(scenario = '', parameters = {}, problemType = null, context = {}, angles = null) {
        // If problem type is specified, use it directly
        if (problemType && this.triangleTypes[problemType]) {
            return {
                originalInput: scenario || `${problemType} problem`,
                type: problemType,
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                angles: angles,
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect triangle problem type from scenario
        for (const [type, config] of Object.entries(this.triangleTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(scenario)) {
                    return {
                        originalInput: scenario,
                        type: type,
                        scenario: scenario,
                        parameters: { ...parameters },
                        context: { ...context },
                        angles: angles,
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        // Default to two_angles_given if angles are provided
        if (angles || (parameters.angle1 !== undefined && parameters.angle2 !== undefined)) {
            return {
                originalInput: scenario || 'Find missing angle in triangle',
                type: 'two_angles_given',
                scenario: scenario,
                parameters: { 
                    angle1: parameters.angle1 || (angles ? angles[0] : 0),
                    angle2: parameters.angle2 || (angles ? angles[1] : 0),
                    ...parameters 
                },
                context: { ...context },
                angles: angles,
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize triangle problem type from: ${scenario}`);
    }

    solveTriangleProblem_Internal(problem) {
        const solver = this.triangleTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for triangle problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // TRIANGLE SOLVERS

    solveTwoAnglesGiven(problem) {
        const { angle1, angle2 } = problem.parameters;
        const angle3 = 180 - angle1 - angle2;

        // Validate
        if (angle3 <= 0 || angle3 >= 180) {
            return {
                error: `Invalid triangle: third angle would be ${angle3}°`,
                solutionType: 'Invalid',
                angles: null
            };
        }

        // Determine triangle type
        const angles = [angle1, angle2, angle3].sort((a, b) => a - b);
        const triangleType = this.classifyTriangleByAngles(angles);

        return {
            problemType: 'Two Angles Given',
            givenAngles: [angle1, angle2],
            missingAngle: angle3,
            allAngles: [angle1, angle2, angle3],
            angles: { angle1, angle2, angle3 },
            triangleType: triangleType,
            solutionType: 'Valid triangle',
            verification: this.verifyTriangleAngles([angle1, angle2, angle3]),
            category: 'angle_sum'
        };
    }

    solveEquilateral(problem) {
        return {
            problemType: 'Equilateral Triangle',
            angles: { angle1: 60, angle2: 60,angle3: 60 },
            allAngles: [60, 60, 60],
            triangleType: 'Equilateral',
            solutionType: 'All angles equal',
            properties: [
                'All three angles are 60°',
                'All three sides are equal',
                'Three lines of symmetry',
                'Also called equiangular'
            ],
            verification: this.verifyTriangleAngles([60, 60, 60]),
            category: 'special_triangles'
        };
    }

    solveIsosceles(problem) {
        const { vertexAngle, baseAngle, givenAngle, angleType } = problem.parameters;

        let vertex, base1, base2;

        if (vertexAngle !== undefined) {
            // Vertex angle given, find base angles
            vertex = vertexAngle;
            base1 = base2 = (180 - vertexAngle) / 2;
        } else if (baseAngle !== undefined) {
            // Base angle given, find vertex angle
            base1 = base2 = baseAngle;
            vertex = 180 - 2 * baseAngle;
        } else if (givenAngle !== undefined) {
            // One angle given but not specified if vertex or base - two cases
            const case1_vertex = givenAngle;
            const case1_base = (180 - givenAngle) / 2;

            const case2_base = givenAngle;
            const case2_vertex = 180 - 2 * givenAngle;

            return {
                problemType: 'Isosceles Triangle - Ambiguous',
                givenAngle: givenAngle,
                possibleSolutions: [
                    {
                        case: 'Given angle is vertex',
                        vertexAngle: case1_vertex,
                        baseAngles: [case1_base, case1_base],
                        allAngles: [case1_base, case1_base, case1_vertex],
                        valid: case1_base > 0 && case1_base < 180
                    },
                    {
                        case: 'Given angle is base',
                        vertexAngle: case2_vertex,
                        baseAngles: [case2_base, case2_base],
                        allAngles: [case2_base, case2_base, case2_vertex],
                        valid: case2_vertex > 0 && case2_vertex < 180
                    }
                ],
                triangleType: 'Isosceles',
                solutionType: 'Multiple valid solutions',
                note: 'Need to know if given angle is vertex or base angle',
                category: 'special_triangles'
            };
        }

        // Validate
        if (base1 <= 0 || base1 >= 180 || vertex <= 0 || vertex >= 180) {
            return {
                error: 'Invalid isosceles triangle - angles out of valid range',
                solutionType: 'Invalid'
            };
        }

        return {
            problemType: 'Isosceles Triangle',
            vertexAngle: vertex,
            baseAngles: [base1, base2],
            allAngles: [base1, base2, vertex],
            angles: { angle1: base1, angle2: base2, angle3: vertex },
            triangleType: 'Isosceles',
            solutionType: 'Two equal base angles',
            properties: [
                'Two base angles are equal',
                'Two sides are equal (opposite the base angles)',
                'One line of symmetry'
            ],
            verification: this.verifyTriangleAngles([base1, base2, vertex]),
            category: 'special_triangles'
        };
    }

    solveRightTriangle(problem) {
        const { acuteAngle1, acuteAngle2, givenAcuteAngle } = problem.parameters;

        let acute1, acute2;

        if (acuteAngle1 !== undefined && acuteAngle2 !== undefined) {
            acute1 = acuteAngle1;
            acute2 = acuteAngle2;
            
            // Verify they sum to 90
            if (Math.abs(acute1 + acute2 - 90) > 0.001) {
                return {
                    error: `Acute angles must sum to 90° in right triangle, but ${acute1}° + ${acute2}° = ${acute1 + acute2}°`,
                    solutionType: 'Invalid'
                };
            }
        } else if (givenAcuteAngle !== undefined) {
            acute1 = givenAcuteAngle;
            acute2 = 90 - givenAcuteAngle;
        } else if (acuteAngle1 !== undefined) {
            acute1 = acuteAngle1;
            acute2 = 90 - acuteAngle1;
        } else {
            // No acute angle given, just return general right triangle info
            return {
                problemType: 'Right Triangle',
                angles: { angle1: 'a', angle2: '90-a', angle3: 90 },
                allAngles: ['a', '90-a', 90],
                triangleType: 'Right',
                solutionType: 'General right triangle',
                properties: [
                    'One angle is exactly 90°',
                    'Other two angles are complementary (sum to 90°)',
                    'Follows Pythagorean theorem for sides'
                ],
                category: 'special_triangles'
            };
        }

        const angles = [acute1, acute2, 90].sort((a, b) => a - b);

        return {
            problemType: 'Right Triangle',
            rightAngle: 90,
            acuteAngles: [acute1, acute2],
            allAngles: [acute1, acute2, 90],
            angles: { angle1: acute1, angle2: acute2, angle3: 90 },
            triangleType: 'Right',
            solutionType: 'Right angle with complementary acute angles',
            properties: [
                'One angle is 90°',
                `Acute angles are ${acute1}° and ${acute2}°`,
                'Acute angles are complementary',
                'Follows Pythagorean theorem'
            ],
            verification: this.verifyTriangleAngles([acute1, acute2, 90]),
            category: 'special_triangles'
        };
    }

    solveExteriorAngle(problem) {
        const { exteriorAngle, remoteInterior1, remoteInterior2, adjacentInterior } = problem.parameters;

        if (exteriorAngle !== undefined && remoteInterior1 !== undefined) {
            // Find second remote interior
            const remote2 = exteriorAngle - remoteInterior1;
            const adjacent = 180 - exteriorAngle;
            
            return {
                problemType: 'Exterior Angle Theorem',
                exteriorAngle: exteriorAngle,
                remoteInteriorAngles: [remoteInterior1, remote2],
                adjacentInteriorAngle: adjacent,
                allInteriorAngles: [remoteInterior1, remote2, adjacent],
                angles: { angle1: remoteInterior1, angle2: remote2, angle3: adjacent },
                triangleType: this.classifyTriangleByAngles([remoteInterior1, remote2, adjacent]),
                solutionType: 'Using exterior angle theorem',
                theorem: `Exterior angle (${exteriorAngle}°) = sum of two remote interior angles (${remoteInterior1}° + ${remote2}°)`,
                verification: this.verifyTriangleAngles([remoteInterior1, remote2, adjacent]),
                category: 'angle_relationships'
            };
        } else if (remoteInterior1 !== undefined && remoteInterior2 !== undefined) {
            // Find exterior angle
            const exterior = remoteInterior1 + remoteInterior2;
            const adjacent = 180 - exterior;
            
            return {
                problemType: 'Exterior Angle Theorem',
                exteriorAngle: exterior,
                remoteInteriorAngles: [remoteInterior1, remoteInterior2],
                adjacentInteriorAngle: adjacent,
                allInteriorAngles: [remoteInterior1, remoteInterior2, adjacent],
                angles: { angle1: remoteInterior1, angle2: remoteInterior2, angle3: adjacent },
                triangleType: this.classifyTriangleByAngles([remoteInterior1, remoteInterior2, adjacent]),
                solutionType: 'Finding exterior angle',
                theorem: `Exterior angle = ${remoteInterior1}° + ${remoteInterior2}° = ${exterior}°`,
                verification: this.verifyTriangleAngles([remoteInterior1, remoteInterior2, adjacent]),
                category: 'angle_relationships'
            };
        }

        return {
            problemType: 'Exterior Angle Theorem',
            solutionType: 'Insufficient information',
            error: 'Need either exterior angle with one remote interior, or both remote interior angles'
        };
    }

    solveSimilarTriangles(problem) {
        const { triangle1Angles, triangle2Angles, knownAngles, correspondingAngles } = problem.parameters;

        if (triangle1Angles && triangle1Angles.length === 3) {
            // Triangle 1 fully known, triangle 2 is similar
            return {
                problemType: 'Similar Triangles',
                triangle1: {
                    angles: triangle1Angles,
                    verification: this.verifyTriangleAngles(triangle1Angles)
                },
                triangle2: {
                    angles: triangle1Angles, // Same angles in similar triangles
                    note: 'Corresponding angles are equal in similar triangles'
                },
                solutionType: 'Similar triangles have equal corresponding angles',
                property: 'Corresponding angles in similar triangles are congruent',
                category: 'angle_relationships'
            };
        }

        return {
            problemType: 'Similar Triangles',
            solutionType: 'Corresponding angles are equal',
            property: 'In similar triangles, corresponding angles are congruent',
            note: 'Provide angles from one triangle to find angles in similar triangle',
            category: 'angle_relationships'
        };
    }

    solveAlgebraicAngles(problem) {
        const { expression1, expression2, expression3, variable } = problem.parameters;

        // Example: angles are x, 2x, 3x
        // Setup equation: x + 2x + 3x = 180
        // Solve for x, then find each angle

        // This is a placeholder - actual implementation would parse expressions
        return {
            problemType: 'Algebraic Angle Expressions',
            expressions: [expression1, expression2, expression3],
            equation: `${expression1} + ${expression2} + ${expression3} = 180°`,
            solutionType: 'Solve equation for variable, then substitute',
            steps: [
                'Set up equation: sum of expressions = 180°',
                'Combine like terms',
                'Solve for variable',
                'Substitute to find each angle',
                'Verify angles are positive and sum to 180°'
            ],
            category: 'algebraic'
        };
    }

    solveAngleBisector(problem) {
        const { originalAngle, bisectedAngle } = problem.parameters;

        if (originalAngle !== undefined) {
            const half = originalAngle / 2;
            return {
                problemType: 'Angle Bisector',
                originalAngle: originalAngle,
                bisectedAngles: [half, half],
                solutionType: 'Angle divided into two equal parts',
                property: 'Angle bisector divides angle into two congruent angles',
                category: 'angle_relationships'
            };
        }

        return {
            problemType: 'Angle Bisector',
            solutionType: 'Angle bisector creates two equal angles',
            property: 'Each resulting angle = original angle ÷ 2',
            category: 'angle_relationships'
        };
    }

    solveTriangleInequality(problem) {
        const { angle1, angle2, angle3 } = problem.parameters;
        const angles = [angle1, angle2, angle3];

        const sum = angle1 + angle2 + angle3;
        const allPositive = angles.every(a => a > 0 && a < 180);
        const sumIs180 = Math.abs(sum - 180) < 0.001;

        const isValid = allPositive && sumIs180;

        return {
            problemType: 'Triangle Validity Check',
            givenAngles: angles,
            angleSum: sum,
            isValid: isValid,
            solutionType: isValid ? 'Valid triangle' : 'Invalid triangle',
            checks: {
                allPositive: allPositive,
                sumEquals180: sumIs180
            },
            explanation: isValid 
                ? 'All angles are positive and sum to 180°' 
                : `Invalid: ${!allPositive ? 'Some angles invalid' : ''} ${!sumIs180 ? `Sum is ${sum}°, not 180°` : ''}`,
            category: 'validity'
        };
    }

    solveIsoscelesRight(problem) {
        return {
            problemType: '45-45-90 Triangle',
            angles: { angle1: 45, angle2: 45, angle3: 90 },
            allAngles: [45, 45, 90],
            triangleType: 'Isosceles Right',
            solutionType: 'Special right triangle',
            properties: [
                'Two angles are 45°',
                'One angle is 90°',
                'Two sides are equal (the legs)',
                'Side ratio is 1:1:√2'
            ],
            verification: this.verifyTriangleAngles([45, 45, 90]),
            category: 'special_triangles'
        };
    }

    solveThirtySixtyNinety(problem) {
        return {
            problemType: '30-60-90 Triangle',
            angles: { angle1: 30, angle2: 60, angle3: 90 },
            allAngles: [30, 60, 90],
            triangleType: '30-60-90 Right',
            solutionType: 'Special right triangle',
            properties: [
                'Angles are 30°, 60°, and 90°',
                'Half of an equilateral triangle',
                'Side ratio is 1:√3:2',
                'Common in architecture and design'
            ],
            verification: this.verifyTriangleAngles([30, 60, 90]),
            category: 'special_triangles'
        };
    }

    solveMultipleTriangles(problem) {
        return {
            problemType: 'Multiple Triangles',
            solutionType: 'Complex figure with multiple triangles',
            approach: 'Solve each triangle separately using appropriate methods',
            note: 'Look for shared angles and sides between triangles',
            category: 'complex'
        };
    }

    solveAngleSideRelationship(problem) {
        const { sides, angles } = problem.parameters;

        return {
            problemType: 'Angle-Side Relationships',
            solutionType: 'Relationship between angles and opposite sides',
            properties: [
                'Largest angle is opposite longest side',
                'Smallest angle is opposite shortest side',
                'Medium angle is opposite medium side'
            ],
            theorem: 'In any triangle, larger angles are opposite longer sides',
            category: 'relationships'
        };
    }

    solveAngleRatio(problem) {
        const { ratio, knownAngle } = problem.parameters;

        // Example: ratio 2:3:4
        // Let angles be 2x, 3x, 4x
        // 2x + 3x + 4x = 180
        // 9x = 180
        // x = 20
        // Angles: 40°, 60°, 80°

        if (ratio && Array.isArray(ratio) && ratio.length === 3) {
            const [a, b, c] = ratio;
            const sum = a + b + c;
            const x = 180 / sum;
            const angles = [a * x, b * x, c * x];

            return {
                problemType: 'Angles in Given Ratio',
                ratio: `${a}:${b}:${c}`,
                variable: x,
                angles: { angle1: angles[0], angle2: angles[1], angle3: angles[2] },
                allAngles: angles,
                triangleType: this.classifyTriangleByAngles(angles),
                solutionType: 'Solved using ratio',
                steps: [
                    `Let angles be ${a}x, ${b}x, ${c}x`,
                    `${a}x + ${b}x + ${c}x = 180`,
                    `${sum}x = 180`,
                    `x = ${x}`,
                    `Angles: ${angles[0]}°, ${angles[1]}°, ${angles[2]}°`
                ],
                verification: this.verifyTriangleAngles(angles),
                category: 'ratios'
            };
        }

        return {
            problemType: 'Angles in Given Ratio',
            solutionType: 'Ratio method',
            approach: 'Let angles be ratio terms × variable, then solve',
            category: 'ratios'
        };
    }

    solveComplementarySupplementary(problem) {
        const { relationshipType, angle1, angle2 } = problem.parameters;

        if (relationshipType === 'complementary') {
            // Two angles sum to 90°
            if (angle1 !== undefined) {
                const angle2 = 90 - angle1;
                return {
                    problemType: 'Complementary Angles',
                    angle1: angle1,
                    angle2: angle2,
                    relationship: 'Complementary (sum to 90°)',
                    solutionType: 'Angles sum to 90°',
                    context: 'Common in right triangles where two acute angles are complementary',
                    category: 'angle_relationships'
                };
            }
        } else if (relationshipType === 'supplementary') {
            // Two angles sum to 180°
            if (angle1 !== undefined) {
                const angle2 = 180 - angle1;
                return {
                    problemType: 'Supplementary Angles',
                    angle1: angle1,
                    angle2: angle2,
                    relationship: 'Supplementary (sum to 180°)',
                    solutionType: 'Angles sum to 180°',
                    context: 'Forms a linear pair or straight angle',
                    category: 'angle_relationships'
                };
            }
        }

        return {
            problemType: 'Complementary/Supplementary Angles',
            solutionType: 'Angle relationships',
            definitions: {
                complementary: 'Two angles that sum to 90°',
                supplementary: 'Two angles that sum to 180°'
            },
            category: 'angle_relationships'
        };
    }

    // HELPER METHODS

    classifyTriangleByAngles(angles) {
        const sorted = [...angles].sort((a, b) => a - b);
        const [min, mid, max] = sorted;

        // Check for equilateral
        if (Math.abs(min - 60) < 0.001 && Math.abs(mid - 60) < 0.001 && Math.abs(max - 60) < 0.001) {
            return 'Equilateral (Equiangular)';
        }

        // Check for right triangle
        if (Math.abs(max - 90) < 0.001) {
            // Check if also isosceles
            if (Math.abs(min - mid) < 0.001) {
                return 'Isosceles Right (45-45-90)';
            }
            // Check for 30-60-90
            if (Math.abs(min - 30) < 0.001 && Math.abs(mid - 60) < 0.001) {
                return '30-60-90 Right';
            }
            return 'Right';
        }

        // Check for obtuse
        if (max > 90) {
            if (Math.abs(min - mid) < 0.001 || Math.abs(mid - max) < 0.001) {
                return 'Obtuse Isosceles';
            }
            return 'Obtuse';
        }

        // Must be acute
        if (Math.abs(min - mid) < 0.001 || Math.abs(mid - max) < 0.001 || Math.abs(min - max) < 0.001) {
            return 'Acute Isosceles';
        }

        return 'Acute';
    }

    verifyTriangleAngles(angles) {
        const sum = angles.reduce((a, b) => a + b, 0);
        const allPositive = angles.every(a => a > 0 && a < 180);
        const sumIs180 = Math.abs(sum - 180) < 0.001;

        return {
            angles: angles,
            sum: sum,
            allPositive: allPositive,
            sumEquals180: sumIs180,
            isValid: allPositive && sumIs180,
            message: (allPositive && sumIs180) 
                ? 'Valid triangle: all angles positive and sum to 180°' 
                : `Invalid: ${!allPositive ? 'Some angles invalid' : ''} ${!sumIs180 ? `Sum is ${sum}°, not 180°` : ''}`
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

        if (this.explanationLevel === 'ELI5') {
            baseSteps = this.addELI5Explanations(baseSteps, problem);
        }

        return baseSteps;
    }

    generateBaseTriangleSteps(problem, solution) {
        const { type } = problem;
        const category = this.triangleTypes[type]?.category;

        switch(category) {
            case 'angle_sum':
                return this.generateAngleSumSteps(problem, solution);
            case 'special_triangles':
                return this.generateSpecialTriangleSteps(problem, solution);
            case 'angle_relationships':
                return this.generateAngleRelationshipSteps(problem, solution);
            case 'algebraic':
                return this.generateAlgebraicAngleSteps(problem, solution);
            case 'ratios':
                return this.generateRatioSteps(problem, solution);
            default:
                return this.generateGenericTriangleSteps(problem, solution);
        }
    }

    generateAngleSumSteps(problem, solution) {
        const steps = [];
        const { angle1, angle2 } = problem.parameters;
        const angle3 = solution.missingAngle;

        // Step 1: Given information
        steps.push({
            stepNumber: 1,
            step: 'Given information',
            description: 'Identify what angles are given',
            expression: `Two angles: ∠A = ${angle1}°, ∠B = ${angle2}°`,
            reasoning: 'We know two of the three angles in the triangle',
            goalStatement: 'Find the third angle using the triangle angle sum theorem'
        });

        // Step 2: Apply angle sum theorem
        steps.push({
            stepNumber: 2,
            step: 'Apply angle sum theorem',
            description: 'Use the fact that angles in a triangle sum to 180°',
            expression: '∠A + ∠B + ∠C = 180°',
            reasoning: 'The sum of interior angles in any triangle is always 180°',
            theorem: 'Triangle Angle Sum Theorem',
            visualHint: 'If you cut out the three corners and arrange them, they form a straight line (180°)'
        });

        // Step 3: Substitute known values
        steps.push({
            stepNumber: 3,
            step: 'Substitute known angles',
            description: 'Replace ∠A and ∠B with their values',
            beforeExpression: '∠A + ∠B + ∠C = 180°',
            afterExpression: `${angle1}° + ${angle2}° + ∠C = 180°`,
            reasoning: 'Substituting the given values into our equation'
        });

        // Step 4: Add known angles
        steps.push({
            stepNumber: 4,
            step: 'Add the known angles',
            description: `Calculate ${angle1}° + ${angle2}°`,
            beforeExpression: `${angle1}° + ${angle2}° + ∠C = 180°`,
            operation: `${angle1} + ${angle2} = ${angle1 + angle2}`,
            afterExpression: `${angle1 + angle2}° + ∠C = 180°`,
            reasoning: 'Simplifying by adding the two known angles'
        });

        // Step 5: Solve for missing angle
        steps.push({
            stepNumber: 5,
            step: 'Solve for third angle',
            description: `Subtract ${angle1 + angle2}° from both sides`,
            beforeExpression: `${angle1 + angle2}° + ∠C = 180°`,
            operation: `∠C = 180° - ${angle1 + angle2}°`,
            afterExpression: `∠C = ${angle3}°`,
            reasoning: 'Isolating ∠C by subtracting the sum from 180°',
            algebraicRule: 'Subtraction Property of Equality'
        });

        // Step 6: Final answer
        steps.push({
            stepNumber: 6,
            step: 'Solution',
            description: 'The third angle is found',
            expression: `The three angles are ${angle1}°, ${angle2}°, and ${angle3}°`,
            finalAnswer: true,
            reasoning: 'These three angles sum to 180° and form a valid triangle',
            triangleType: solution.triangleType
        });

        return steps;
    }

    generateSpecialTriangleSteps(problem, solution) {
        const steps = [];
        const type = problem.type;

        if (type === 'equilateral') {
            steps.push({
                stepNumber: 1,
                step: 'Identify triangle type',
                description: 'Triangle is equilateral',
                expression: 'Equilateral triangle',
                reasoning: 'All sides are equal in an equilateral triangle'
            });

            steps.push({
                stepNumber: 2,
                step: 'Apply equilateral property',
                description: 'All angles in equilateral triangle are equal',
                expression: '∠A = ∠B = ∠C',
                reasoning: 'Equal sides mean equal angles',
                property: 'Equilateral triangle property'
            });

            steps.push({
                stepNumber: 3,
                step: 'Use angle sum theorem',
                description: 'Three equal angles sum to 180°',
                expression: '∠A + ∠A + ∠A = 180°',
                reasoning: 'Triangle angle sum theorem with equal angles'
            });

            steps.push({
                stepNumber: 4,
                step: 'Simplify',
                description: 'Combine equal angles',
                beforeExpression: '∠A + ∠A + ∠A = 180°',
                afterExpression: '3∠A = 180°',
                reasoning: 'Three of the same angle'
            });

            steps.push({
                stepNumber: 5,
                step: 'Solve for each angle',
                description: 'Divide both sides by 3',
                beforeExpression: '3∠A = 180°',
                operation: '÷ 3',
                afterExpression: '∠A = 60°',
                reasoning: 'Each angle is one-third of 180°'
            });

            steps.push({
                stepNumber: 6,
                step: 'Solution',
                description: 'All angles are 60°',
                expression: 'Each angle = 60°',
                finalAnswer: true,
                reasoning: 'All three angles in an equilateral triangle are always 60°'
            });
        } else if (type === 'isosceles') {
            const { vertexAngle, baseAngle } = problem.parameters;

            if (vertexAngle !== undefined) {
                const base = (180 - vertexAngle) / 2;

                steps.push({
                    stepNumber: 1,
                    step: 'Identify triangle type and given',
                    description: 'Isosceles triangle with vertex angle given',
                    expression: `Vertex angle = ${vertexAngle}°`,
                    reasoning: 'Vertex angle is the angle between the two equal sides'
                });

                steps.push({
                    stepNumber: 2,
                    step: 'Apply isosceles property',
                    description: 'Base angles are equal',
                    expression: '∠B = ∠C (base angles)',
                    reasoning: 'In isosceles triangle, base angles are equal',
                    property: 'Isosceles triangle base angles theorem'
                });

                steps.push({
                    stepNumber: 3,
                    step: 'Set up equation',
                    description: 'Use angle sum theorem',
                    expression: `${vertexAngle}° + ∠B + ∠B = 180°`,
                    reasoning: 'Sum of all three angles equals 180°'
                });

                steps.push({
                    stepNumber: 4,
                    step: 'Simplify',
                    description: 'Combine equal base angles',
                    beforeExpression: `${vertexAngle}° + ∠B + ∠B = 180°`,
                    afterExpression: `${vertexAngle}° + 2∠B = 180°`,
                    reasoning: 'Two equal base angles can be combined'
                });

                steps.push({
                    stepNumber: 5,
                    step: 'Isolate base angle term',
                    description: `Subtract ${vertexAngle}° from both sides`,
                    beforeExpression: `${vertexAngle}° + 2∠B = 180°`,
                    operation: `- ${vertexAngle}°`,
                    afterExpression: `2∠B = ${180 - vertexAngle}°`,
                    reasoning: 'Moving vertex angle to isolate base angles'
                });

                steps.push({
                    stepNumber: 6,
                    step: 'Solve for base angle',
                    description: 'Divide both sides by 2',
                    beforeExpression: `2∠B = ${180 - vertexAngle}°`,
                    operation: '÷ 2',
                    afterExpression: `∠B = ${base}°`,
                    reasoning: 'Each base angle is half of the remaining degrees'
                });

                steps.push({
                    stepNumber: 7,
                    step: 'Solution',
                    description: 'All three angles found',
                    expression: `Vertex = ${vertexAngle}°, Base angles = ${base}° each`,
                    finalAnswer: true,
                    reasoning: 'The two base angles are equal, and all three sum to 180°'
                });
            }
        } else if (type === 'right_triangle') {
            const { givenAcuteAngle } = problem.parameters;

            if (givenAcuteAngle !== undefined) {
                const otherAcute = 90 - givenAcuteAngle;

                steps.push({
                    stepNumber: 1,
                    step: 'Identify triangle type',
                    description: 'Right triangle',
                    expression: 'One angle = 90°',
                    reasoning: 'Right triangle always has one 90° angle'
                });

                steps.push({
                    stepNumber: 2,
                    step: 'Given acute angle',
                    description: 'One acute angle is known',
                    expression: `∠A = ${givenAcuteAngle}°`,
                    reasoning: 'This is one of the two acute angles'
                });

                steps.push({
                    stepNumber: 3,
                    step: 'Use complementary angle property',
                    description: 'In right triangle, acute angles are complementary',
                    expression: '∠A + ∠B = 90°',
                    reasoning: 'The two acute angles must sum to 90° (since third angle is 90°)',
                    property: 'Complementary angles in right triangle'
                });

                steps.push({
                    stepNumber: 4,
                    step: 'Solve for other acute angle',
                    description: `Subtract ${givenAcuteAngle}° from 90°`,
                    beforeExpression: `${givenAcuteAngle}° + ∠B = 90°`,
                    operation: `∠B = 90° - ${givenAcuteAngle}°`,
                    afterExpression: `∠B = ${otherAcute}°`,
                    reasoning: 'Complementary angles: one is 90° minus the other'
                });

                steps.push({
                    stepNumber: 5,
                    step: 'Solution',
                    description: 'All three angles found',
                    expression: `Angles are ${givenAcuteAngle}°, ${otherAcute}°, and 90°`,
                    finalAnswer: true,
                    reasoning: 'These three angles form a valid right triangle'
                });
            }
        }

        return steps;
    }

    generateAngleRelationshipSteps(problem, solution) {
        const steps = [];
        const type = problem.type;

        if (type === 'exterior_angle') {
            const { exteriorAngle, remoteInterior1 } = problem.parameters;
            if (exteriorAngle !== undefined && remoteInterior1 !== undefined) {
                const remoteInterior2 = exteriorAngle - remoteInterior1;
                const adjacentInterior = 180 - exteriorAngle;

                steps.push({
                    stepNumber: 1,
                    step: 'Identify given information',
                    description: 'Exterior angle and one remote interior angle',
                    expression: `Exterior = ${exteriorAngle}°, Remote interior = ${remoteInterior1}°`,
                    reasoning: 'We need to find the other remote interior angle'
                });

                steps.push({
                    stepNumber: 2,
                    step: 'Apply exterior angle theorem',
                    description: 'Exterior angle equals sum of two remote interior angles',
                    expression: `${exteriorAngle}° = ${remoteInterior1}° + ∠B`,
                    reasoning: 'This is the exterior angle theorem',
                    theorem: 'Exterior Angle Theorem'
                });

                steps.push({
                    stepNumber: 3,
                    step: 'Solve for second remote interior',
                    description: `Subtract ${remoteInterior1}° from both sides`,
                    beforeExpression: `${exteriorAngle}° = ${remoteInterior1}° + ∠B`,
                    operation: `∠B = ${exteriorAngle}° - ${remoteInterior1}°`,
                    afterExpression: `∠B = ${remoteInterior2}°`,
                    reasoning: 'Isolating the unknown remote interior angle'
                });

                steps.push({
                    stepNumber: 4,
                    step: 'Find adjacent interior angle (optional)',
                    description: 'Adjacent interior and exterior are supplementary',
                    expression: `Adjacent interior = 180° - ${exteriorAngle}° = ${adjacentInterior}°`,
                    reasoning: 'Exterior and adjacent interior form linear pair (180°)'
                });

                steps.push({
                    stepNumber: 5,
                    step: 'Solution',
                    description: 'All angles found',
                    expression: `Remote interiors: ${remoteInterior1}°, ${remoteInterior2}°; Adjacent: ${adjacentInterior}°`,
                    finalAnswer: true,
                    reasoning: 'Verified: remote interiors (${remoteInterior1}° + ${remoteInterior2}° = ${exteriorAngle}°) equal exterior'
                });
            }
        }

        return steps;
    }

    generateAlgebraicAngleSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Algebraic angle problem',
            description: 'Angles expressed as algebraic expressions',
            expression: 'Use angle sum theorem with expressions',
            reasoning: 'Set up equation where expressions sum to 180°'
        });

        return steps;
    }

    generateRatioSteps(problem, solution) {
        const steps = [];
        const ratio = problem.parameters.ratio;

        if (ratio && Array.isArray(ratio) && ratio.length === 3) {
            const [a, b, c] = ratio;
            const sum = a + b + c;
            const x = 180 / sum;
            const angles = [a * x, b * x, c * x];

            steps.push({
                stepNumber: 1,
                step: 'Identify given ratio',
                description: 'Angles are in a specific ratio',
                expression: `Ratio = ${a}:${b}:${c}`,
                reasoning: 'Angles are proportional to these numbers'
            });

            steps.push({
                stepNumber: 2,
                step: 'Express angles with variable',
                description: 'Let angles be ratio terms times a variable',
                expression: `Let angles be ${a}x, ${b}x, ${c}x`,
                reasoning: 'Using variable x to represent the common factor'
            });

            steps.push({
                stepNumber: 3,
                step: 'Set up equation',
                description: 'Use angle sum theorem',
                expression: `${a}x + ${b}x + ${c}x = 180°`,
                reasoning: 'Sum of angles in triangle equals 180°'
            });

            steps.push({
                stepNumber: 4,
                step: 'Combine like terms',
                description: `Add coefficients: ${a} + ${b} + ${c}`,
                beforeExpression: `${a}x + ${b}x + ${c}x = 180°`,
                afterExpression: `${sum}x = 180°`,
                reasoning: 'Combining all x terms'
            });

            steps.push({
                stepNumber: 5,
                step: 'Solve for x',
                description: `Divide both sides by ${sum}`,
                beforeExpression: `${sum}x = 180°`,
                operation: `÷ ${sum}`,
                afterExpression: `x = ${x}°`,
                reasoning: 'Finding the value of the common factor'
            });

            steps.push({
                stepNumber: 6,
                step: 'Find each angle',
                description: 'Substitute x into each expression',
                calculations: [
                    `First angle: ${a}x = ${a}(${x}) = ${angles[0]}°`,
                    `Second angle: ${b}x = ${b}(${x}) = ${angles[1]}°`,
                    `Third angle: ${c}x = ${c}(${x}) = ${angles[2]}°`
                ],
                reasoning: 'Multiplying each ratio term by x'
            });

            steps.push({
                stepNumber: 7,
                step: 'Solution',
                description: 'All three angles found',
                expression: `Angles are ${angles[0]}°, ${angles[1]}°, ${angles[2]}°`,
                finalAnswer: true,
                reasoning: `These angles are in ratio ${a}:${b}:${c} and sum to 180°`
            });
        }

        return steps;
    }

    generateGenericTriangleSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Triangle angle problem',
            description: 'Solve using appropriate triangle properties',
            expression: problem.scenario || 'Triangle angle problem',
            reasoning: 'Apply triangle angle theorems and properties',
            solution: solution
        }];
    }

    // ENHANCED EXPLANATION METHODS (reusing and adapting from linear workbook)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanationTriangle(step, problem),
                procedural: this.getProceduralExplanationTriangle(step),
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

        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPromptsTriangle(step);
        }

        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestionTriangle(step);
        }

        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findRealWorldConnectionTriangle(step, problem);
        }

        return enhanced;
    }

    getConceptualExplanationTriangle(step, problem) {
        const conceptualExplanations = {
            'Given information': 'Understanding what we know helps us choose the right strategy to find unknown angles.',
            'Apply angle sum theorem': 'The angle sum theorem is fundamental: no matter what type of triangle, angles always total exactly 180°.',
            'Substitute known angles': 'Replacing variables with actual numbers makes the equation concrete and solvable.',
            'Add the known angles': 'Finding their sum shows us how much of the 180° total is already accounted for.',
            'Solve for third angle': 'What remains after subtracting the known sum from 180° is the missing angle.',
            'Apply equilateral property': 'Equal sides create equal angles - this symmetry is a powerful property.',
            'Apply isosceles property': 'Two equal sides mean two equal base angles - understanding why helps recognize patterns.',
            'Use complementary angle property': 'In right triangles, the two acute angles complete what the 90° angle started - together they make 180°.',
            'Apply exterior angle theorem': 'The exterior angle shortcut lets us find angles without knowing all interior angles first.'
        };

        return conceptualExplanations[step.step] || 'This step applies triangle angle properties to move toward the solution.';
    }

    getProceduralExplanationTriangle(step) {
        if (step.operation) {
            return `1. Identify what operation is needed
2. Apply it carefully with correct numbers
3. Simplify the result
4. Write the new equation or answer`;
        }
        return 'Follow the standard geometric procedure for this type of step.';
    }

    getVisualExplanationTriangle(step, problem) {
        const category = this.triangleTypes[problem.type]?.category;

        const visualExplanations = {
            'angle_sum': 'Picture cutting out the three corners of a triangle and arranging them in a line - they form exactly 180°.',
            'special_triangles': 'Draw the triangle and mark equal sides with tick marks, equal angles with arc marks.',
            'angle_relationships': 'Sketch the triangle and extend sides to show exterior angles, or draw similar triangles side by side.',
            'algebraic': 'Use a variable box for x, then show how expressions build from that box.',
            'ratios': 'Draw pie slices or bar segments in the given ratio to visualize angle distribution.'
        };

        return visualExplanations[category] || 'Sketch a triangle and label all known information to visualize the problem.';
    }

    getAlgebraicExplanationTriangle(step) {
        const algebraicRules = {
            'Apply angle sum theorem': 'Triangle Angle Sum Theorem: ∠A + ∠B + ∠C = 180° for all triangles',
            'Substitute known angles': 'Substitution: Replace variables with their known values',
            'Solve for third angle': 'Subtraction Property of Equality: If a + b = c, then a = c - b',
            'Apply equilateral property': 'Equilateral Triangle Theorem: All angles equal 60°',
            'Apply isosceles property': 'Isosceles Triangle Theorem: Base angles are congruent',
            'Use complementary angle property': 'Complementary angles sum to 90°',
            'Apply exterior angle theorem': 'Exterior Angle Theorem: Exterior angle = sum of remote interior angles'
        };

        return algebraicRules[step.step] || 'Apply standard geometric theorems and algebraic principles.';
    }

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateELI5ExplanationTriangle(step, problem),
                analogy: this.findRelevantAnalogyTriangle(step, problem),
                simpleLanguage: this.convertToSimpleLanguageTriangle(step.description),
                visualization: this.suggestVisualizationTriangle(step)
            }
        }));
    }

    generateELI5ExplanationTriangle(step, problem) {
        const ELI5Explanations = {
            'Given information': "We know some of the corners (angles) of our triangle, and we need to find the missing one!",
            'Apply angle sum theorem': "Here's the special rule: If you add up all three corners of any triangle, you always get exactly 180 degrees. It's like magic, but it's math!",
            'Substitute known angles': "Now we put in the numbers we know. It's like filling in blanks in a sentence.",
            'Add the known angles': "Let's add up the two corners we already know - like adding your toys together to see how many you have.",
            'Solve for third angle': "We know all three corners add up to 180. We have some already, so what's left over? That's our missing corner!",
            'Apply equilateral property': "In an equilateral triangle, everything is fair and equal - all three corners are exactly the same size!",
            'Apply isosceles property': "An isosceles triangle is like having twin corners - two of them are exactly the same!",
            'Use complementary angle property': "In a right triangle with one square corner (90 degrees), the other two corners are friends that always add up to 90 degrees too!",
            'Apply exterior angle theorem': "When you swing a triangle side out, the outside corner equals adding two specific inside corners together - it's a shortcut!"
        };

        return ELI5Explanations[step.step] || "We're taking another step to solve our triangle puzzle and find all the corners!";
    }

    findRelevantAnalogyTriangle(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(problem.type) || analogy.suitableFor.includes('all_types')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of this like solving a puzzle - each step gets us closer to finding all the triangle's corners!";
    }

    convertToSimpleLanguageTriangle(description) {
        const simplifications = {
            'angle': 'corner',
            'triangle': 'three-sided shape',
            'theorem': 'rule',
            'sum': 'total when you add',
            'substitute': 'put in',
            'solve': 'find the answer',
            'equilateral': 'all equal sides triangle',
            'isosceles': 'two equal sides triangle',
            'right triangle': 'triangle with a square corner',
            'exterior': 'outside',
            'interior': 'inside',
            'complementary': 'add up to 90',
            'supplementary': 'add up to 180',
            'vertex': 'top point',
            'base': 'bottom side',
            'acute': 'pointy (less than 90 degrees)',
            'obtuse': 'wide (more than 90 degrees)',
            'congruent': 'exactly the same',
            'remote': 'far away (not touching)'
        };

        let simple = description || '';
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp(term, 'gi');
            simple = simple.replace(regex, replacement);
        }

        return simple;
    }

    suggestVisualizationTriangle(step) {
        const visualizations = {
            'Given information': 'Draw a triangle and label the angles you know',
            'Apply angle sum theorem': 'Show three triangle corners cut out and arranged in a line',
            'Substitute known angles': 'Write the actual degree numbers in your triangle diagram',
            'Add the known angles': 'Show the addition with a number sentence',
            'Solve for third angle': 'Show 180 with some taken away, leaving the remainder',
            'Apply equilateral property': 'Draw triangle with three equal tick marks on sides and three equal arc marks on angles',
            'Apply isosceles property': 'Draw triangle with two equal tick marks on sides and matching arc marks on base angles',
            'Use complementary angle property': 'Show a square corner (90°) and how the other two angles together also make a square corner',
            'Apply exterior angle theorem': 'Draw triangle with one side extended, showing outside and inside angles'
        };

        return visualizations[step.step] || 'Draw a picture to show what\'s happening in this step';
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
                    reasoning: this.explainStepProgressionTriangle(steps[i], steps[i + 1]),
                    strategicThinking: this.explainStepStrategyTriangle(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateStepBridgeTriangle(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression}`,
            nextGoal: `Next, we will: ${nextStep.description}`,
            why: `This is necessary because: ${this.explainStepNecessityTriangle(currentStep, nextStep)}`,
            howItHelps: `This will help by: ${this.explainStepBenefitTriangle(nextStep)}`
        };
    }

    explainStepProgressionTriangle(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue finding all angles in the triangle`;
    }

    explainStepStrategyTriangle(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
    }

    explainStepNecessityTriangle(currentStep, nextStep) {
        return `we need to continue applying triangle properties to find all unknown angles`;
    }

    explainStepBenefitTriangle(nextStep) {
        return `bringing us closer to knowing all three angles in the triangle`;
    }

    addErrorPrevention(step, problemType) {
        const category = this.triangleTypes[problemType]?.category || 'angle_sum';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

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
                troubleshooting: this.generateTroubleshootingTipsTriangle(step)
            }
        };
    }

    generatePreventionTipsTriangle(step, problemType) {
        const tips = {
            'Apply angle sum theorem': [
                'Remember: triangle angles sum to 180°, NOT 360°',
                'Write the formula at the top of your work',
                'Double-check you\'re using 180°'
            ],
            'Add the known angles': [
                'Check your arithmetic carefully',
                'Use a calculator if needed',
                'Verify the sum makes sense'
            ],
            'Solve for third angle': [
                'Make sure to subtract from 180°',
                'Check that result is positive and less than 180°',
                'Verify by adding all three angles'
            ],
            'Apply equilateral property': [
                'All angles must equal 60° in equilateral',
                'Don\'t confuse with isosceles (only 2 equal)',
                'Verify: 60 + 60 + 60 = 180'
            ],
            'Apply isosceles property': [
                'Only BASE angles are equal, not all three',
                'Make sure you know which is the vertex angle',
                'Draw and label the triangle'
            ],
            'Apply exterior angle theorem': [
                'Add only the TWO REMOTE interior angles',
                'Don\'t include the adjacent interior angle',
                'Circle the two remote angles before adding'
            ]
        };

        return tips[step.step] || ['Check your arithmetic', 'Verify angles are valid', 'Make sure sum is 180°'];
    }

    generateCheckPointsTriangle(step) {
        return [
            'Did I use the correct theorem or property?',
            'Are my calculations accurate?',
            'Do my angles make sense (all positive, less than 180°)?',
            'Does this step bring me closer to the solution?',
            'Have I labeled everything clearly?'
        ];
    }

    identifyWarningFlagsTriangle(step, problemType) {
        const warnings = {
            angle_sum: step.step === 'Apply angle sum theorem' ?
                ['Don\'t use 360° - that\'s for quadrilaterals!', 'Make sure all angles are included in sum'] : [],
            special_triangles: step.step === 'Apply isosceles property' ?
                ['Only 2 angles are equal in isosceles, not all 3', 'Make sure you identify base angles correctly'] : [],
            angle_relationships: step.step === 'Apply exterior angle theorem' ?
                ['Only add REMOTE interior angles, not adjacent', 'Exterior + adjacent interior = 180° (supplementary)'] : []
        };

        const category = this.triangleTypes[problemType]?.category || 'angle_sum';
        return warnings[category] || [];
    }

    generateSelfCheckQuestionTriangle(step) {
        const questions = {
            'Given information': 'Do I understand what information is provided and what I need to find?',
            'Apply angle sum theorem': 'Did I remember that triangle angles sum to 180°?',
            'Substitute known angles': 'Did I substitute the correct values in the right places?',
            'Add the known angles': 'Did I add correctly? Should I double-check?',
            'Solve for third angle': 'Did I subtract from 180°? Is my answer reasonable?',
            'Apply equilateral property': 'Are all three angles equal to 60°?',
            'Apply isosceles property': 'Did I identify which two angles are equal?',
            'Use complementary angle property': 'Do the two acute angles add up to 90°?',
            'Apply exterior angle theorem': 'Did I add only the two remote interior angles?'
        };

        return questions[step.step] || 'Does this step make sense and move me toward finding all angles?';
    }

    describeExpectedResultTriangle(step) {
        const expectations = {
            'Given information': 'A clear understanding of what\'s known and unknown',
            'Apply angle sum theorem': 'An equation showing angles sum to 180°',
            'Substitute known angles': 'Specific numbers in the equation',
            'Add the known angles': 'A simplified equation with sum calculated',
            'Solve for third angle': 'The value of the missing angle',
            'Apply equilateral property': 'Three 60° angles',
            'Apply isosceles property': 'Two equal base angles identified',
            'Use complementary angle property': 'Two angles that sum to 90°',
            'Apply exterior angle theorem': 'Exterior angle value or missing remote interior'
        };

        return expectations[step.step] || 'Progress toward finding all triangle angles';
    }

    generateTroubleshootingTipsTriangle(step) {
        return [
            'If stuck, review what makes this triangle type special',
            'Draw a diagram if you haven\'t already',
            'Check that you\'re using the right theorem or property',
            'Verify your arithmetic carefully',
            'Try explaining the step out loud to yourself',
            'Make sure all angles are between 0° and 180°',
            'Confirm the sum is heading toward 180°'
        ];
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsTriangle(step, problem),
                subSteps: this.breakIntoSubStepsTriangle(step),
                hints: this.generateProgressiveHintsTriangle(step, problem),
                practiceVariation: this.generatePracticeVariationTriangle(step, problem)
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
            'Given information': [
                'What type of triangle is this?',
                'What angles do I know?',
                'What am I trying to find?'
            ],
            'Apply angle sum theorem': [
                'What do all triangle angles add up to?',
                'How can I write this as an equation?',
                'Which angles are unknown?'
            ],
            'Substitute known angles': [
                'What are the values I need to substitute?',
                'Where do they go in the equation?',
                'Did I substitute correctly?'
            ],
            'Add the known angles': [
                'What is the sum of the known angles?',
                'Did I calculate correctly?',
                'How much do I have left to reach 180°?'
            ],
            'Solve for third angle': [
                'What operation do I use to find the missing angle?',
                'Did I subtract from 180°?',
                'Is my answer reasonable?'
            ],
            'Apply equilateral property': [
                'What makes an equilateral triangle special?',
                'If all angles are equal, what must each one be?',
                'Does 3 times my answer equal 180°?'
            ],
            'Apply isosceles property': [
                'Which two angles are equal in isosceles?',
                'How do I identify the base angles?',
                'What equation represents this situation?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'What property or theorem should I use?', 'How does this help find the angles?'];
    }

    generateProgressiveHintsTriangle(step, problem) {
        const category = this.triangleTypes[problem.type]?.category || 'angle_sum';
        const hintSet = this.hints[problem.type] || this.hints.two_angles_given;

        return {
            level1: hintSet.level1 || 'Think about what triangle property or theorem applies here.',
            level2: hintSet.level2 || 'Consider what you know about triangle angle sums.',
            level3: hintSet.level3 || 'Set up an equation using the angle sum theorem.',
            level4: hintSet.level4 || 'Apply the specific formula or property to solve.'
        };
    }

    breakIntoSubStepsTriangle(step) {
        if (step.operation) {
            return [
                'Understand what this step accomplishes',
                'Identify the numbers or expressions involved',
                'Perform the calculation carefully',
                'Write the result clearly',
                'Check that the result makes sense'
            ];
        }

        const subStepMap = {
            'Apply angle sum theorem': [
                'Recall that triangle angles sum to 180°',
                'Identify the three angles (some may be unknown)',
                'Write the equation: angle1 + angle2 + angle3 = 180°',
                'Prepare to substitute known values'
            ],
            'Apply equilateral property': [
                'Recognize that all sides are equal',
                'Remember that equal sides create equal angles',
                'Set up equation with three equal angles',
                'Divide 180° by 3'
            ],
            'Apply isosceles property': [
                'Identify the two equal sides',
                'Determine which angles are the base angles',
                'Set up equation with two equal angles',
                'Solve for the equal angles or the vertex angle'
            ]
        };

        return subStepMap[step.step] || ['Understand the goal', 'Apply the technique', 'Verify the result'];
    }

    generatePracticeVariationTriangle(step, problem) {
        return {
            similarProblem: 'Try the same type of triangle problem with different angle values',
            practiceHint: 'Start with simple angles (like 30°, 60°, 90°) to build confidence',
            extension: 'Once comfortable, try problems with decimals, ratios, or algebraic expressions'
        };
    }

    explainThinkingProcessTriangle(step) {
        return {
            observe: 'What do I see in this triangle? What information is given?',
            goal: 'What am I trying to find?',
            strategy: 'What triangle property or theorem should I use?',
            execute: 'How do I apply this property step-by-step?',
            verify: 'Do my angles make sense? Do they sum to 180°?'
        };
    }

    identifyDecisionPointsTriangle(step) {
        return [
            'Which triangle property applies here?',
            'Do I use angle sum theorem or a special triangle property?',
            'Should I set up an equation or use a direct formula?',
            'How can I check if my answer is correct?'
        ];
    }

    suggestAlternativeMethodsTriangle(step, problem) {
        const alternatives = {
            'Apply angle sum theorem': [
                'Could use exterior angle theorem if exterior angle is known',
                'Could use special triangle properties if applicable'
            ],
            'Solve for third angle': [
                'Could verify using exterior angle theorem',
                'Could check by adding all three angles'
            ]
        };

        return alternatives[step.step] || ['The chosen method is appropriate for this triangle problem'];
    }

    identifyPrerequisitesTriangle(step, problemType) {
        const category = this.triangleTypes[problemType]?.category || 'angle_sum';
        const prereqs = this.prerequisites[category];

        if (prereqs) {
            return prereqs.skills;
        }

        return ['Basic angle measurement', 'Addition and subtraction'];
    }

    identifyKeyVocabularyTriangle(step) {
        const vocabulary = {
            'Given information': ['triangle', 'angle', 'degree', 'given', 'unknown'],
            'Apply angle sum theorem': ['sum', 'theorem', 'interior angles', '180 degrees'],
            'Substitute known angles': ['substitute', 'replace', 'known values'],
            'Add the known angles': ['add', 'sum', 'total'],
            'Solve for third angle': ['solve', 'subtract', 'missing angle'],
            'Apply equilateral property': ['equilateral', 'equal', 'congruent', '60 degrees'],
            'Apply isosceles property': ['isosceles', 'base angles', 'vertex angle', 'congruent'],
            'Use complementary angle property': ['complementary', 'right triangle', '90 degrees'],
            'Apply exterior angle theorem': ['exterior angle', 'remote interior', 'adjacent interior', 'supplementary']
        };

        return vocabulary[step.step] || ['triangle', 'angle', 'degrees'];
    }

    generateThinkingPromptsTriangle(step) {
        return {
            before: 'Before I start, what triangle property or theorem do I need?',
            during: 'As I work, am I using the property correctly?',
            after: 'After completing this step, do my angles make sense? Should I verify?'
        };
    }

    findRealWorldConnectionTriangle(step, problem) {
        const connections = {
            'angle_sum': 'Like architects designing a triangular roof - they need all angles to sum to 180° for structural integrity.',
            'special_triangles': 'Equilateral triangles are used in bridge trusses for their strength and stability with equal 60° angles.',
            'angle_relationships': 'GPS uses triangulation with multiple satellites - understanding triangle angles helps pinpoint your exact location.'
        };

        const category = this.triangleTypes[problem.type]?.category;
        return connections[category] || 'Triangle angles are essential in construction, navigation, and design - from building roofs to GPS technology.';
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by continuing to work toward finding all triangle angles`,
            progression: 'We are getting closer to knowing all three angles',
            relationship: 'Each step applies triangle properties systematically to solve the problem'
        };
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
                'angle': 'angle',
                'triangle': 'triangle',
                'theorem': 'rule',
                'substitute': 'put in',
                'sum': 'total',
                'solve': 'find',
                'exterior': 'outside',
                'interior': 'inside'
            },
            intermediate: {
                'angle': 'angle',
                'triangle': 'triangle',
                'theorem': 'theorem',
                'substitute': 'substitute',
                'sum': 'sum',
                'solve': 'solve',
                'exterior': 'exterior',
                'interior': 'interior'
            },
            ELI5: {
                'angle': 'corner',
                'triangle': 'three-sided shape',
                'theorem': 'special rule',
                'substitute': 'put in place of',
                'sum': 'total when you add everything up',
                'solve': 'figure out',
                'equilateral': 'all-equal triangle',
                'isosceles': 'two-equal triangle',
                'right triangle': 'square-corner triangle',
                'exterior': 'outside',
                'interior': 'inside',
                'complementary': 'add up to 90',
                'supplementary': 'add up to 180'
            },
            detailed: {
                'angle': 'angle (geometric figure formed by two rays)',
                'triangle': 'triangle (three-sided polygon)',
                'theorem': 'theorem (proven mathematical statement)',
                'substitute': 'substitute (replace with equivalent value)',
                'sum': 'sum (result of addition)',
                'solve': 'solve (find value that satisfies equation)',
                'exterior': 'exterior (outside the figure)',
                'interior': 'interior (inside the figure)'
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

    // VISUALIZATION GENERATION

    generateTriangleVisualization() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;

        this.graphData = this.generateTriangleDiagram(this.currentProblem, this.currentSolution);
    }

    generateTriangleDiagram(problem, solution) {
        const angles = solution.allAngles || solution.angles;

        return {
            type: 'triangle',
            triangleType: solution.triangleType,
            angles: angles,
            description: `Triangle with angles: ${angles ? angles.join('°, ') + '°' : 'various'}`,
            visualizationType: 'geometric_diagram',
            labels: {
                angleA: angles ? angles[0] + '°' : '',
                angleB: angles ? angles[1] + '°' : '',
                angleC: angles ? angles[2] + '°' : ''
            },
            properties: solution.properties || []
        };
    }

    // WORKBOOK GENERATION

    generateTriangleWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSectionTriangle(),
            this.createPrerequisiteSectionTriangle(),
            this.createEnhancedStepsSectionTriangle(),
            this.createTriangleLessonSection(),
            this.createSolutionSectionTriangle(),
            this.createAnalysisSectionTriangle(),
            this.createVerificationSectionTriangle(),
            this.createRealWorldApplicationSectionTriangle(),
            this.createPedagogicalNotesSectionTriangle(),
            this.createAlternativeMethodsSectionTriangle(),
            this.createPracticeProblemsSectionTriangle(),
            this.createHistoricalContextSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Triangle Angles Mathematical Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            explanationLevel: this.explanationLevel,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSectionTriangle() {
        if (!this.currentProblem) return null;

        const problemData = [
            ['Problem Type', this.triangleTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.triangleTypes[this.currentProblem.type]?.category || 'triangle_angles'],
            ['Description', this.currentProblem.scenario || 'Triangle angle problem']
        ];

        // Add given angles if available
        if (this.currentProblem.parameters.angle1 !== undefined) {
            problemData.push(['', '']);
            problemData.push(['Given Information', '']);
            if (this.currentProblem.parameters.angle1 !== undefined) {
                problemData.push(['Angle 1', this.currentProblem.parameters.angle1 + '°']);
            }
            if (this.currentProblem.parameters.angle2 !== undefined) {
                problemData.push(['Angle 2', this.currentProblem.parameters.angle2 + '°']);
            }
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSectionTriangle() {
        if (!this.prerequisiteChecks) return null;

        const category = this.triangleTypes[this.currentProblem.type]?.category;
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

    createEnhancedStepsSectionTriangle() {
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

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.theorem) {
                stepsData.push(['Theorem Used', step.theorem]);
            }

            if (step.property) {
                stepsData.push(['Property Used', step.property]);
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

            // Visual hints
            if (step.visualHint && (this.explanationLevel === 'intermediate' || this.explanationLevel === 'detailed')) {
                stepsData.push(['Visual Hint', step.visualHint]);
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

    createTriangleLessonSection() {
        const lessonData = [
            ['Triangle Angle Sum Theorem', ''],
            ['', 'Sum of interior angles = 180° (always!)'],
            ['', 'Formula: ∠A + ∠B + ∠C = 180°'],
            ['', 'Works for ALL triangles: acute, right, obtuse'],
            ['', ''],
            ['Special Triangles', ''],
            ['', 'Equilateral: All angles = 60°'],
            ['', 'Isosceles: Two base angles equal'],
            ['', 'Right: One 90° angle, other two complementary'],
            ['', '45-45-90: Isosceles right triangle'],
            ['', '30-60-90: Half of equilateral triangle'],
            ['', ''],
            ['Key Properties', ''],
            ['', 'Largest angle opposite longest side'],
            ['', 'Smallest angle opposite shortest side'],
            ['', 'Exterior angle = sum of remote interiors'],
            ['', 'Triangle is rigid - angles determine shape']
        ];

        return {
            title: 'Key Concepts',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSectionTriangle() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        if (this.currentSolution.allAngles) {
            const angles = this.currentSolution.allAngles;
            solutionData.push(['All Angles', angles.join('°, ') + '°']);
            solutionData.push(['Triangle Type', this.currentSolution.triangleType || 'General']);
        } else if (this.currentSolution.angles) {
            const { angle1, angle2, angle3 } = this.currentSolution.angles;
            solutionData.push(['Angle 1', angle1 + '°']);
            solutionData.push(['Angle 2', angle2 + '°']);
            solutionData.push(['Angle 3', angle3 + '°']);
            solutionData.push(['Triangle Type', this.currentSolution.triangleType || 'General']);
        }

        if (this.currentSolution.properties) {
            solutionData.push(['', '']);
            solutionData.push(['Properties', '']);
            this.currentSolution.properties.forEach(prop => {
                solutionData.push(['', prop]);
            });
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createAnalysisSectionTriangle() {
        if (!this.currentSolution) return null;

        const analysisData = [
            ['Problem Type', this.currentSolution.problemType || this.currentSolution.category],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Explanation Level', this.explanationLevel],
            ['Category', this.triangleTypes[this.currentProblem.type]?.category]
        ];

        if (this.currentSolution.approach) {
            analysisData.push(['Approach', this.currentSolution.approach]);
        }

        if (this.currentSolution.theorem) {
            analysisData.push(['Main Theorem', this.currentSolution.theorem]);
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSectionTriangle() {
        if (!this.currentSolution || !this.currentProblem) return null;

        const verification = this.currentSolution.verification;

        if (!verification) {
            return {
                title: 'Solution Verification',
                type: 'verification',
                data: [
                    ['Verification', 'Check that all angles are positive and sum to 180°']
                ]
            };
        }

        const verificationData = [
            ['Verification Method', 'Angle Sum Check'],
            ['', '']
        ];

        if (verification.angles) {
            verificationData.push(['Angles', verification.angles.join('°, ') + '°']);
            verificationData.push(['Sum', verification.sum + '°']);
            verificationData.push(['All Positive', verification.allPositive ? 'Yes ✓' : 'No']);
            verificationData.push(['Sum Equals 180°', verification.sumEquals180 ? 'Yes ✓' : 'No']);
            verificationData.push(['Valid Triangle', verification.isValid ? 'Yes ✓' : 'No']);
        }

        if (this.verificationDetail === 'detailed') {
            verificationData.push(['', '']);
            verificationData.push(['Verification Notes', verification.message || 'Solution verified']);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createRealWorldApplicationSectionTriangle() {
        if (!this.includeRealWorldApplications) return null;

        const applications = Object.values(this.realWorldProblems).slice(0, 4);

        if (applications.length === 0) return null;

        const appData = [
            ['Real-World Applications of Triangle Angles', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Context', app.context]);
            if (app.explanation) {
                appData.push(['Example', app.explanation]);
            }
            appData.push(['Field', app.application]);
            appData.push(['', '']);
        });

        return {
            title: 'Real-World Applications',
            type: 'applications',
            data: appData
        };
    }

    createPedagogicalNotesSectionTriangle() {
        if (!this.includePedagogicalNotes) return null;

        const notes = this.generateTrianglePedagogicalNotes(this.currentProblem.type);

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

    createAlternativeMethodsSectionTriangle() {
        if (!this.includeAlternativeMethods) return null;

        const alternatives = this.generateTriangleAlternativeMethods(this.currentProblem.type);

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

    createPracticeProblemsSectionTriangle() {
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

    createHistoricalContextSection() {
        if (!this.includeHistoricalContext) return null;

        const histData = [
            ['Historical Development of Triangle Mathematics', ''],
            ['', ''],
            ['Ancient Greece (600-300 BCE)', ''],
            ['', this.historicalContext.ancient_greece.contribution],
            ['Key Figures', this.historicalContext.ancient_greece.keyFigures.join(', ')],
            ['', ''],
            ['Practical Origins', ''],
            ['', this.historicalContext.practical_origins.use],
            ['Tools', this.historicalContext.practical_origins.tools],
            ['', ''],
            ['Islamic Golden Age (800-1200 CE)', ''],
            ['', this.historicalContext.islamic_golden_age.contribution],
            ['', ''],
            ['Modern Applications', ''],
            ...this.historicalContext.modern_applications.applications.map(app => ['', app]),
            ['', ''],
            ['Interesting Facts', ''],
            ...this.historicalContext.interesting_facts.map(fact => ['', fact])
        ];

        return {
            title: 'Historical Context',
            type: 'historical',
            data: histData
        };
    }

    generateTrianglePedagogicalNotes(problemType) {
        const category = this.triangleTypes[problemType]?.category;

        const pedagogicalDatabase = {
            angle_sum: {
                objectives: [
                    'Apply triangle angle sum theorem',
                    'Find missing angles when two are known',
                    'Verify solutions by checking sum equals 180°'
                ],
                keyConcepts: [
                    'Triangle angles always sum to 180°',
                    'Works for all triangle types',
                    'Visual proof: corners form straight line'
                ],
                prerequisites: [
                    'Understanding of angles and degree measurement',
                    'Addition and subtraction skills',
                    'Concept that straight angle = 180°'
                ],
                commonDifficulties: [
                    'Using 360° instead of 180° (confusing with quadrilateral)',
                    'Arithmetic errors in addition/subtraction',
                    'Not verifying that angles are valid'
                ],
                teachingStrategies: [
                    'Have students cut out triangle corners and arrange in line',
                    'Use multiple examples with different triangle types',
                    'Always verify by adding all three angles'
                ],
                extensions: [
                    'Exterior angle theorem',
                    'Angles in polygons',
                    'Algebraic angle expressions'
                ],
                assessment: [
                    'Can student state angle sum theorem?',
                    'Does student use 180° (not 360°)?',
                    'Can student find missing angle accurately?'
                ]
            },
            special_triangles: {
                objectives: [
                    'Recognize and classify special triangles',
                    'Apply properties of equilateral, isosceles, and right triangles',
                    'Solve problems using special triangle shortcuts'
                ],
                keyConcepts: [
                    'Equilateral: all angles 60°',
                    'Isosceles: two base angles equal',
                    'Right: one 90°, others complementary',
                    '45-45-90 and 30-60-90 special right triangles'
                ],
                prerequisites: [
                    'Angle sum theorem',
                    'Concept of equal angles',
                    'Understanding of right angles'
                ],
                commonDifficulties: [
                    'Confusing equilateral with isosceles',
                    'Not identifying which angles are equal in isosceles',
                    'Forgetting that right triangle acute angles are complementary'
                ],
                teachingStrategies: [
                    'Create reference chart of special triangles',
                    'Use physical models (cut-outs, manipulatives)',
                    'Practice identifying triangle type from properties'
                ],
                extensions: [
                    'Side ratios in special right triangles',
                    'Applications in construction and design',
                    'Trigonometry introduction'
                ],
                assessment: [
                    'Can student identify special triangles?',
                    'Does student apply properties correctly?',
                    'Can student explain why properties hold?'
                ]
            },
            angle_relationships: {
                objectives: [
                    'Apply exterior angle theorem',
                    'Understand angle relationships in triangles',
                    'Use properties of similar triangles'
                ],
                keyConcepts: [
                    'Exterior angle = sum of remote interiors',
                    'Corresponding angles in similar triangles equal',
                    'Angle bisectors create equal angles'
                ],
                prerequisites: [
                    'Angle sum theorem',
                    'Supplementary angles',
                    'Basic geometric vocabulary'
                ],
                commonDifficulties: [
                    'Adding wrong angles for exterior angle theorem',
                    'Confusing interior and exterior angles',
                    'Not identifying remote vs adjacent interior'
                ],
                teachingStrategies: [
                    'Draw and label diagrams clearly',
                    'Use colors to distinguish angle types',
                    'Practice identifying which angles are "remote"'
                ],
                extensions: [
                    'Proofs of angle theorems',
                    'Complex figures with multiple triangles',
                    'Similarity and congruence'
                ],
                assessment: [
                    'Can student apply exterior angle theorem?',
                    'Does student identify angles correctly?',
                    'Can student explain angle relationships?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Solve triangle angle problems'],
            keyConcepts: ['Triangle angle properties'],
            prerequisites: ['Basic geometry'],
            commonDifficulties: ['Various conceptual challenges'],
            teachingStrategies: ['Clear visual examples'],
            extensions: ['More complex problems'],
            assessment: ['Verify understanding']
        };
    }

    generateTriangleAlternativeMethods(problemType) {
        const category = this.triangleTypes[problemType]?.category;

        const alternativeDatabase = {
            angle_sum: {
                primaryMethod: 'Angle Sum Theorem',
                methods: [
                    {
                        name: 'Exterior Angle Method',
                        description: 'Use exterior angle theorem if an exterior angle is known or helpful'
                    },
                    {
                        name: 'Complementary Angles',
                        description: 'For right triangles, use fact that acute angles sum to 90°'
                    },
                    {
                        name: 'Visual/Physical Method',
                        description: 'Cut out corners and arrange to see they form 180° (straight line)'
                    }
                ],
                comparison: 'Angle sum theorem is most direct; exterior angle useful when exterior is known; complementary shortcut works for right triangles'
            },
            special_triangles: {
                primaryMethod: 'Special Triangle Properties',
                methods: [
                    {
                        name: 'Direct Formula',
                        description: 'Use known values: equilateral=60°, isosceles has 2 equal, etc.'
                    },
                    {
                        name: 'Angle Sum with Constraints',
                        description: 'Set up equation using angle sum plus equality constraints'
                    },
                    {
                        name: 'Symmetry Recognition',
                        description: 'Identify symmetry lines to deduce equal angles'
                    }
                ],
                comparison: 'Direct formulas fastest for recognized special triangles; angle sum works universally; symmetry helps visualization'
            },
            angle_relationships: {
                primaryMethod: 'Exterior Angle Theorem',
                methods: [
                    {
                        name: 'Angle Sum Method',
                        description: 'Find all interior angles first, then use supplementary for exterior'
                    },
                    {
                        name: 'Direct Application',
                        description: 'Apply exterior angle = sum of remote interiors directly'
                    },
                    {
                        name: 'Similar Triangle Method',
                        description: 'Use corresponding angles if triangles are similar'
                    }
                ],
                comparison: 'Exterior angle theorem is shortcut; angle sum always works but takes more steps; similarity useful for comparison problems'
            },
            algebraic: {
                primaryMethod: 'Algebraic Equation Setup',
                methods: [
                    {
                        name: 'Standard Approach',
                        description: 'Set expressions equal to 180°, solve for variable, substitute back'
                    },
                    {
                        name: 'Ratio Method',
                        description: 'If angles in ratio, use ratio terms × variable'
                    },
                    {
                        name: 'Substitution Method',
                        description: 'Express all angles in terms of one variable, then solve'
                    }
                ],
                comparison: 'Standard approach most reliable; ratio method efficient for ratio problems; substitution useful for related expressions'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard geometric approach',
            methods: [{
                name: 'Alternative approach',
                description: 'Other methods may apply depending on problem structure'
            }],
            comparison: 'Choose method based on given information and personal preference'
        };
    }
}

// Export the class
export default EnhancedTriangleAnglesWorkbook;
