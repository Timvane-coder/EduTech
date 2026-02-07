// Enhanced Triangle Classification Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedTriangleClassificationMathematicalWorkbook {
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
        this.initializeTriangleClassifiers();
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
        this.initializeTriangleLessons();
    }

    initializeTriangleLessons() {
        this.lessons = {
            triangle_basics: {
                title: "Triangle Fundamentals",
                concepts: [
                    "A triangle is a polygon with three sides and three angles",
                    "Sum of interior angles always equals 180°",
                    "Triangle Inequality: sum of any two sides must be greater than the third side",
                    "Triangles are the most stable polygon"
                ],
                theory: "Triangles are fundamental geometric shapes with unique stability properties. The three-sided structure creates inherent rigidity used in engineering and architecture.",
                keyFormulas: {
                    "Angle Sum": "∠A + ∠B + ∠C = 180°",
                    "Triangle Inequality": "a + b > c, b + c > a, a + c > b",
                    "Perimeter": "P = a + b + c",
                    "Area (Heron's Formula)": "A = √[s(s-a)(s-b)(s-c)] where s = (a+b+c)/2"
                },
                applications: [
                    "Structural engineering and truss design",
                    "Navigation and triangulation",
                    "Computer graphics and modeling",
                    "Surveying and mapping"
                ]
            },

            classification_by_sides: {
                title: "Classification by Side Lengths",
                concepts: [
                    "Equilateral: all three sides equal (a = b = c)",
                    "Isosceles: exactly two sides equal",
                    "Scalene: all three sides different lengths",
                    "Side classification determines angle properties"
                ],
                theory: "Classifying triangles by sides reveals symmetry and angle relationships. Equal sides always correspond to equal angles.",
                keyFormulas: {
                    "Equilateral": "a = b = c, all angles = 60°",
                    "Isosceles": "Two sides equal → two angles equal",
                    "Scalene": "All sides different → all angles different"
                },
                solvingSteps: [
                    "Measure or identify all three side lengths",
                    "Compare sides to each other",
                    "Count how many sides are equal",
                    "Apply classification rule",
                    "Verify using angle relationships if possible"
                ],
                applications: [
                    "Roof truss design",
                    "Bridge construction",
                    "Packaging optimization",
                    "Crystallography"
                ]
            },

            classification_by_angles: {
                title: "Classification by Angles",
                concepts: [
                    "Acute: all three angles less than 90°",
                    "Right: one angle exactly 90°",
                    "Obtuse: one angle greater than 90°",
                    "Equiangular: all angles equal (60° each)"
                ],
                theory: "Angle classification determines triangle shape and properties. The largest angle is opposite the longest side.",
                keyFormulas: {
                    "Acute Triangle": "All angles < 90°, sum = 180°",
                    "Right Triangle": "One angle = 90°, a² + b² = c²",
                    "Obtuse Triangle": "One angle > 90°, c² > a² + b²",
                    "Equiangular": "All angles = 60° (always equilateral)"
                },
                solvingSteps: [
                    "Identify or calculate all three angles",
                    "Check if sum equals 180°",
                    "Identify largest angle",
                    "Compare to 90° threshold",
                    "Apply classification rule"
                ],
                applications: [
                    "Optics and reflection angles",
                    "Ramp and incline design",
                    "Astronomy and celestial triangulation",
                    "Computer vision"
                ]
            },

            pythagorean_classification: {
                title: "Pythagorean Theorem Classification",
                concepts: [
                    "Right triangle: a² + b² = c² (c is hypotenuse)",
                    "Acute triangle: a² + b² > c² (c is longest side)",
                    "Obtuse triangle: a² + b² < c² (c is longest side)",
                    "Works only when c is the longest side"
                ],
                theory: "The Pythagorean theorem and its converse provide a precise method for angle classification using only side lengths.",
                keyFormulas: {
                    "Right Triangle Test": "a² + b² = c²",
                    "Acute Triangle Test": "a² + b² > c²",
                    "Obtuse Triangle Test": "a² + b² < c²",
                    "Longest Side": "c = max(a, b, c)"
                },
                solvingSteps: [
                    "Identify the longest side (c)",
                    "Calculate a² + b² (sum of squares of shorter sides)",
                    "Calculate c² (square of longest side)",
                    "Compare a² + b² to c²",
                    "Apply classification: equal=right, greater=acute, less=obtuse"
                ],
                applications: [
                    "Construction and carpentry (checking square corners)",
                    "GPS triangulation",
                    "Physics and force vectors",
                    "Computer graphics rendering"
                ]
            },

            triangle_inequality: {
                title: "Triangle Inequality Theorem",
                concepts: [
                    "For any triangle: a + b > c, b + c > a, a + c > b",
                    "Sum of any two sides must exceed the third side",
                    "Determines if three lengths can form a triangle",
                    "Equality case (a + b = c) forms degenerate triangle (straight line)"
                ],
                theory: "The triangle inequality is a fundamental constraint. It reflects the geometric truth that the straight-line distance is always shortest.",
                keyFormulas: {
                    "General Form": "a + b > c for all side combinations",
                    "Quick Check": "sum of two smallest > largest",
                    "Degenerate Case": "a + b = c (not a valid triangle)"
                },
                solvingSteps: [
                    "Identify all three side lengths",
                    "Find the longest side",
                    "Add the two shorter sides",
                    "Check if sum > longest side",
                    "Verify all three inequalities if needed"
                ],
                applications: [
                    "Path planning and routing",
                    "Network topology",
                    "Geometric feasibility checking",
                    "Optimization problems"
                ]
            },

            special_triangles: {
                title: "Special Triangle Types",
                concepts: [
                    "30-60-90 triangle: sides in ratio 1:√3:2",
                    "45-45-90 triangle: sides in ratio 1:1:√2",
                    "3-4-5 triangle: Pythagorean triple (right triangle)",
                    "Equilateral triangle: all sides and angles equal"
                ],
                theory: "Special triangles have predictable ratios and appear frequently in applications. Recognizing them simplifies calculations.",
                keyFormulas: {
                    "30-60-90": "If short leg = x, then hypotenuse = 2x, long leg = x√3",
                    "45-45-90": "If leg = x, then hypotenuse = x√2",
                    "Pythagorean Triples": "3-4-5, 5-12-13, 8-15-17, 7-24-25",
                    "Equilateral": "Side = a, height = (a√3)/2, area = (a²√3)/4"
                },
                applications: [
                    "Architectural design",
                    "Trigonometry simplifications",
                    "Quick mental calculations",
                    "Standardized construction"
                ]
            },

            congruence_similarity: {
                title: "Triangle Congruence and Similarity",
                concepts: [
                    "Congruent triangles: same size and shape (SSS, SAS, ASA, AAS)",
                    "Similar triangles: same shape, different size (AA, SAS~, SSS~)",
                    "Corresponding parts of congruent triangles are equal (CPCTC)",
                    "Similar triangles have proportional sides"
                ],
                theory: "Congruence and similarity allow us to deduce information about unknown triangles from known relationships.",
                keyFormulas: {
                    "Congruence Tests": "SSS, SAS, ASA, AAS, HL (for right triangles)",
                    "Similarity Tests": "AA, SAS~, SSS~",
                    "Similarity Ratio": "a₁/a₂ = b₁/b₂ = c₁/c₂"
                },
                applications: [
                    "Scale modeling",
                    "Map reading",
                    "Indirect measurement",
                    "Geometric proofs"
                ]
            },

            area_calculations: {
                title: "Triangle Area Methods",
                concepts: [
                    "Base-height formula: A = (1/2)bh",
                    "Heron's formula using three sides",
                    "Trigonometric area formula",
                    "Coordinate geometry method"
                ],
                theory: "Multiple area formulas exist for different known information. Choose the formula matching available data.",
                keyFormulas: {
                    "Base-Height": "A = (1/2) × base × height",
                    "Heron's Formula": "A = √[s(s-a)(s-b)(s-c)] where s = (a+b+c)/2",
                    "Trigonometric": "A = (1/2)ab sin(C)",
                    "Coordinates": "A = (1/2)|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|"
                },
                applications: [
                    "Land surveying",
                    "Material estimation",
                    "Graphic design",
                    "Physics and engineering"
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
            // Geometric symbols
            'angle': '∠', 'triangle': '△', 'perpendicular': '⊥', 
            'parallel': '∥', 'congruent': '≅', 'similar': '∼',
            'degree': '°'
        };
    }

    initializeTriangleClassifiers() {
        this.triangleTypes = {
            // Classification by sides
            by_sides: {
                patterns: [
                    /sides?/i,
                    /equilateral|isosceles|scalene/i,
                    /classify.*side/i
                ],
                classifier: this.classifyBySides.bind(this),
                name: 'Classification by Side Lengths',
                category: 'sides',
                description: 'Classifies triangle as equilateral, isosceles, or scalene'
            },

            // Classification by angles
            by_angles: {
                patterns: [
                    /angles?/i,
                    /acute|right|obtuse/i,
                    /classify.*angle/i
                ],
                classifier: this.classifyByAngles.bind(this),
                name: 'Classification by Angles',
                category: 'angles',
                description: 'Classifies triangle as acute, right, or obtuse'
            },

            // Pythagorean classification
            pythagorean: {
                patterns: [
                    /pythag/i,
                    /a.*b.*c/i,
                    /right.*triangle.*test/i
                ],
                classifier: this.classifyByPythagorean.bind(this),
                name: 'Pythagorean Theorem Classification',
                category: 'pythagorean',
                description: 'Uses Pythagorean theorem to determine angle type'
            },

            // Triangle inequality check
            inequality: {
                patterns: [
                    /inequality/i,
                    /valid.*triangle/i,
                    /can.*form/i
                ],
                classifier: this.checkTriangleInequality.bind(this),
                name: 'Triangle Inequality Check',
                category: 'inequality',
                description: 'Determines if three lengths can form a valid triangle'
            },

            // Complete classification
            complete: {
                patterns: [
                    /complete/i,
                    /full.*classif/i,
                    /both.*side.*angle/i
                ],
                classifier: this.completeClassification.bind(this),
                name: 'Complete Triangle Classification',
                category: 'complete',
                description: 'Classifies by both sides and angles'
            },

            // Special triangle identification
            special: {
                patterns: [
                    /special/i,
                    /30.*60.*90|45.*45.*90/i,
                    /3.*4.*5/i
                ],
                classifier: this.identifySpecialTriangle.bind(this),
                name: 'Special Triangle Identification',
                category: 'special',
                description: 'Identifies 30-60-90, 45-45-90, and Pythagorean triples'
            },

            // Missing angle calculation
            find_angle: {
                patterns: [
                    /find.*angle/i,
                    /missing.*angle/i,
                    /calculate.*angle/i
                ],
                classifier: this.findMissingAngle.bind(this),
                name: 'Find Missing Angle',
                category: 'angle_calculation',
                description: 'Calculates missing angle using angle sum property'
            },

            // Side relationship analysis
            side_relationship: {
                patterns: [
                    /relationship/i,
                    /compare.*side/i,
                    /longest.*shortest/i
                ],
                classifier: this.analyzeSideRelationships.bind(this),
                name: 'Side Relationship Analysis',
                category: 'relationships',
                description: 'Analyzes relationships between sides and angles'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            sides: {
                'Comparing sides': [
                    'Not using exact equality (floating point comparison)',
                    'Forgetting to check all three side pairs',
                    'Confusing "at least two equal" with "exactly two equal"'
                ],
                'Measurement errors': [
                    'Using different units without conversion',
                    'Rounding too early in calculations',
                    'Measurement precision issues'
                ]
            },
            angles: {
                'Angle sum': [
                    'Forgetting angles must sum to 180°',
                    'Using degrees vs radians inconsistently',
                    'Not accounting for measurement error'
                ],
                'Classification': [
                    'Checking only one angle instead of all three for acute',
                    'Confusing obtuse (>90°) with reflex (>180°)',
                    'Missing that equiangular is always equilateral'
                ]
            },
            pythagorean: {
                'Side identification': [
                    'Not identifying longest side as hypotenuse',
                    'Using wrong sides in a² + b²',
                    'Forgetting to square the sides'
                ],
                'Comparison': [
                    'Using ≥ or ≤ instead of strict > or <',
                    'Comparing wrong values',
                    'Rounding errors in squared values'
                ]
            },
            inequality: {
                'Testing': [
                    'Only checking one inequality instead of all three',
                    'Using ≥ instead of strict >',
                    'Not identifying the longest side correctly'
                ],
                'Edge cases': [
                    'Degenerate triangle (sum equals third side)',
                    'Negative or zero side lengths',
                    'Very small differences (floating point)'
                ]
            }
        };

        this.errorPrevention = {
            floating_point: {
                reminder: 'Use small epsilon for floating point comparisons',
                method: 'Math.abs(a - b) < 0.0001 instead of a === b'
            },
            unit_consistency: {
                reminder: 'Ensure all measurements in same units',
                method: 'Convert all to common unit before calculation'
            },
            longest_side: {
                reminder: 'Always identify longest side first for Pythagorean test',
                method: 'c = Math.max(a, b, c)'
            },
            angle_sum: {
                reminder: 'Sum of angles in triangle must equal 180°',
                method: 'Verify: angle1 + angle2 + angle3 = 180'
            },
            all_checks: {
                reminder: 'For triangle inequality, check all three conditions',
                method: 'Verify: a+b>c AND b+c>a AND a+c>b'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why triangles have these properties and what they mean',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Exact steps to classify triangles',
                language: 'step-by-step instructions'
            },
            visual: {
                focus: 'How triangles look and geometric visualization',
                language: 'visual and spatial descriptions'
            },
            algebraic: {
                focus: 'Mathematical formulas and precise definitions',
                language: 'precise mathematical terminology'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential steps only',
                examples: 'concrete triangles with simple numbers'
            },
            intermediate: {
                vocabulary: 'standard geometric terms',
                detail: 'main steps with brief explanations',
                examples: 'mix of simple and moderate complexity'
            },
            ELI5: {
                vocabulary: 'explain like I\'m 5 years old',
                detail: 'every tiny step with real-world analogies',
                examples: 'pizza slices, building blocks, familiar objects',
                analogies: true,
                visualization: 'simple pictures and comparisons'
            },
            detailed: {
                vocabulary: 'full geometric and mathematical vocabulary',
                detail: 'comprehensive explanations with proofs',
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
            roof_truss: {
                scenario: "Roof truss design using triangular supports",
                application: "Triangles provide stability in construction",
                examples: [
                    "A-frame roof with equal rafters (isosceles triangle)",
                    "Standard pitched roof with specific angle requirements",
                    "Truss bridge supports using equilateral triangles"
                ],
                context: "Triangles are the only rigid polygon, making them essential in structural engineering"
            },
            navigation: {
                scenario: "GPS triangulation for location finding",
                application: "Three known points determine position",
                examples: [
                    "GPS satellites forming triangles to pinpoint location",
                    "Maritime navigation using lighthouse triangulation",
                    "Surveying land using triangle properties"
                ],
                context: "Triangle properties enable precise location determination"
            },
            art_design: {
                scenario: "Triangles in graphic design and art",
                application: "Creating visual balance and interest",
                examples: [
                    "Logo design using equilateral triangles",
                    "Architectural facades with triangular patterns",
                    "Mosaic art using various triangle types"
                ],
                context: "Different triangle types create different visual effects"
            },
            pyramids: {
                scenario: "Egyptian pyramids and triangular faces",
                application: "Structural stability and geometry",
                examples: [
                    "Great Pyramid with isosceles triangular faces",
                    "Calculating pyramid dimensions using triangles",
                    "Shadow angles and right triangles"
                ],
                context: "Ancient civilizations used triangle properties in monumental architecture"
            },
            ramps: {
                scenario: "Wheelchair ramps and accessibility",
                application: "Right triangle ratios for safe slopes",
                examples: [
                    "ADA compliant ramp using 1:12 ratio",
                    "Calculating ramp length from height and slope",
                    "Loading dock ramp design"
                ],
                context: "Right triangle relationships determine safe, functional ramps"
            },
            sailing: {
                scenario: "Sailboat sails as triangular shapes",
                application: "Aerodynamics and force distribution",
                examples: [
                    "Jib and mainsail forming triangular shapes",
                    "Wind force calculations using triangle geometry",
                    "Sail area optimization"
                ],
                context: "Triangular sails efficiently capture wind energy"
            },
            pizza: {
                scenario: "Pizza slices as triangular sectors",
                application: "Equal distribution and portioning",
                examples: [
                    "Cutting pizza into equal isosceles triangle slices",
                    "Calculating slice area",
                    "Fair sharing using geometric principles"
                ],
                context: "Everyday objects often involve triangular geometry"
            },
            supports: {
                scenario: "Triangular bracing in structures",
                application: "Preventing structural deformation",
                examples: [
                    "Table leg bracing using triangles",
                    "Shelf supports forming right triangles",
                    "Ladder stability from triangular structure"
                ],
                context: "Triangular bracing prevents rectangular frames from collapsing"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            by_sides: {
                skills: ['Comparing numbers', 'Understanding equality', 'Measuring lengths'],
                priorKnowledge: ['What makes two measurements equal', 'Precision vs accuracy'],
                checkQuestions: [
                    "If a = 5 and b = 5, are they equal?",
                    "What does equilateral mean?",
                    "How many sides does a triangle have?"
                ]
            },
            by_angles: {
                skills: ['Angle measurement', 'Comparing angles to 90°', 'Angle sum property'],
                priorKnowledge: ['Acute vs obtuse angles', 'Right angle = 90°', 'Angles sum to 180°'],
                checkQuestions: [
                    "What is a right angle?",
                    "Is 95° acute or obtuse?",
                    "What do angles in a triangle add to?"
                ]
            },
            pythagorean: {
                skills: ['Squaring numbers', 'Pythagorean theorem', 'Comparing values', 'Identifying hypotenuse'],
                priorKnowledge: ['a² + b² = c² for right triangles', 'Hypotenuse is longest side'],
                checkQuestions: [
                    "What is 3²?",
                    "In a right triangle, which side is longest?",
                    "What is the Pythagorean theorem?"
                ]
            },
            inequality: {
                skills: ['Addition', 'Comparison operators', 'Understanding inequalities'],
                priorKnowledge: ['Greater than (>)', 'Triangle must close'],
                checkQuestions: [
                    "Is 5 + 3 > 7?",
                    "What does > mean?",
                    "Can sides 1, 2, 10 form a triangle?"
                ]
            },
            complete: {
                skills: ['All classification methods', 'Logical reasoning', 'Multiple criteria'],
                priorKnowledge: ['Side classification', 'Angle classification', 'Combining information'],
                checkQuestions: [
                    "Can a triangle be both equilateral and acute?",
                    "What angles does an equilateral triangle have?",
                    "Can a triangle be both isosceles and right?"
                ]
            },
            special: {
                skills: ['Special ratios', 'Recognizing patterns', 'Pythagorean triples'],
                priorKnowledge: ['30-60-90 ratios', '45-45-90 ratios', 'Common triples like 3-4-5'],
                checkQuestions: [
                    "What are the angles in a 3-4-5 triangle?",
                    "If one leg of 45-45-90 triangle is 1, what is hypotenuse?",
                    "Is 6-8-10 a Pythagorean triple?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            visual_diagram: {
                description: "Draw the actual triangle with labeled sides/angles",
                analogy: "Like a blueprint showing exact proportions",
                visualization: "Sketch triangle with measurements marked",
                suitableFor: ['all_types'],
                explanation: "Visual representation helps understand spatial relationships"
            },
            side_comparison_table: {
                description: "Table comparing all three sides",
                analogy: "Like a comparison chart showing which items are same/different",
                visualization: "Three-column table: Side A | Side B | Side C",
                suitableFor: ['by_sides'],
                explanation: "Organized comparison reveals equality patterns"
            },
            angle_sum_diagram: {
                description: "Show how three angles combine to 180°",
                analogy: "Like puzzle pieces that fit perfectly to make a straight line",
                visualization: "Three angles laid end-to-end forming straight line",
                suitableFor: ['by_angles'],
                explanation: "Demonstrates fundamental angle sum property"
            },
            pythagorean_squares: {
                description: "Draw squares on each side to visualize a² + b² vs c²",
                analogy: "Like comparing areas of garden plots",
                visualization: "Squares drawn on triangle sides, areas compared",
                suitableFor: ['pythagorean'],
                explanation: "Visual proof of Pythagorean relationship"
            },
            inequality_segments: {
                description: "Line segments showing if sides can connect",
                analogy: "Like checking if three sticks can form a closed triangle",
                visualization: "Three line segments attempting to close into triangle",
                suitableFor: ['inequality'],
                explanation: "Physical demonstration of triangle inequality"
            },
            classification_tree: {
                description: "Decision tree for systematic classification",
                analogy: "Like a flowchart for troubleshooting",
                visualization: "Tree diagram with yes/no questions leading to classifications",
                suitableFor: ['complete'],
                explanation: "Systematic approach to multi-criteria classification"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "Classify triangle with sides 5, 5, 5",
                    classification: "Equilateral",
                    steps: ["All sides equal", "5 = 5 = 5", "Therefore equilateral"],
                    difficulty: "easy"
                },
                {
                    problem: "Classify triangle with angles 90°, 45°, 45°",
                    classification: "Right triangle (also isosceles)",
                    steps: ["One angle = 90°", "Therefore right triangle", "Two angles equal → also isosceles"],
                    difficulty: "easy"
                },
                {
                    problem: "Can sides 3, 4, 10 form a triangle?",
                    classification: "No - violates triangle inequality",
                    steps: ["Check 3 + 4 > 10", "7 > 10 is FALSE", "Therefore cannot form triangle"],
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "Classify triangle with sides 6, 8, 10",
                    classification: "Right scalene triangle",
                    steps: ["Check Pythagorean: 6² + 8² = 36 + 64 = 100 = 10²", "Equal → right triangle", "All sides different → scalene"],
                    difficulty: "medium"
                },
                {
                    problem: "Triangle has angles 60°, 60°, 60°",
                    classification: "Equiangular (equilateral) acute",
                    steps: ["All angles equal", "All angles < 90° → acute", "Equiangular always means equilateral"],
                    difficulty: "medium"
                },
                {
                    problem: "Classify triangle: sides 7, 7, 9",
                    classification: "Isosceles acute",
                    steps: ["Two sides equal (7 = 7) → isosceles", "Check: 7² + 7² = 98 > 9² = 81 → acute"],
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "Complete classification: sides 5, 12, 13",
                    classification: "Right scalene triangle",
                    steps: [
                        "Check inequality: 5+12>13 ✓, 12+13>5 ✓, 5+13>12 ✓",
                        "All different → scalene",
                        "Pythagorean: 5² + 12² = 25 + 144 = 169 = 13²",
                        "Equal → right triangle",
                        "Final: Right scalene"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "Triangle angles: 30°, 60°, find third angle and classify",
                    classification: "30-60-90 right triangle",
                    steps: [
                        "Third angle = 180° - 30° - 60° = 90°",
                        "Has 90° angle → right triangle",
                        "Special right triangle: 30-60-90",
                        "All angles different → scalene"
                    ],
                    difficulty: "hard"
                }
            ],
            byMethod: {
                by_sides: [
                    { sides: [4, 4, 4], classification: "Equilateral" },
                    { sides: [5, 5, 8], classification: "Isosceles" },
                    { sides: [3, 4, 5], classification: "Scalene" }
                ],
                by_angles: [
                    { angles: [60, 60, 60], classification: "Acute (equiangular)" },
                    { angles: [90, 45, 45], classification: "Right" },
                    { angles: [120, 30, 30], classification: "Obtuse" }
                ],
                pythagorean: [
                    { sides: [3, 4, 5], test: "3²+4²=9+16=25=5²", type: "Right" },
                    { sides: [2, 3, 4], test: "2²+3²=13<16=4²", type: "Obtuse" },
                    { sides: [5, 6, 7], test: "5²+6²=61>49=7²", type: "Acute" }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            equilateral_vs_isosceles: {
                misconception: "Equilateral triangles are not isosceles",
                reality: "All equilateral triangles are also isosceles (they have at least two equal sides)",
                correctiveExample: "Triangle with sides 5,5,5 is both equilateral AND isosceles",
                commonIn: ['by_sides']
            },
            pythagorean_direction: {
                misconception: "Any triangle with a²+b²=c² is right-angled",
                reality: "TRUE, but must use LONGEST side as c",
                correctiveExample: "For 3,4,5: must use 5 as c, not 3²+5²=4²",
                commonIn: ['pythagorean']
            },
            acute_all_angles: {
                misconception: "If one angle is acute, triangle is acute",
                reality: "ALL three angles must be acute for acute triangle",
                correctiveExample: "Triangle with 30°,60°,90° has acute angles but is RIGHT triangle",
                commonIn: ['by_angles']
            },
            inequality_one_check: {
                misconception: "Only need to check longest side in triangle inequality",
                reality: "Must verify all three inequalities (though checking longest is sufficient)",
                correctiveExample: "Checking only a+b>c is enough if c is longest",
                commonIn: ['inequality']
            },
            isosceles_which_two: {
                misconception: "Isosceles means two specific sides are equal",
                reality: "ANY two sides equal makes it isosceles",
                correctiveExample: "5,8,8 and 8,5,8 and 8,8,5 are all the same isosceles triangle",
                commonIn: ['by_sides']
            },
            obtuse_multiple: {
                misconception: "Triangle can have two obtuse angles",
                reality: "IMPOSSIBLE - only one angle can be >90° (since sum=180°)",
                correctiveExample: "If two angles are >90°, sum would exceed 180°",
                commonIn: ['by_angles']
            },
            right_angle_location: {
                misconception: "Right angle can be anywhere in triangle",
                reality: "Right angle is always opposite the longest side (hypotenuse)",
                correctiveExample: "In 3-4-5 triangle, 90° angle is opposite side 5",
                commonIn: ['pythagorean']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            triangle_classification: {
                analogy: "Sorting toys into bins",
                explanation: "Just like toys can be sorted by color, size, or type, triangles can be classified by sides or angles",
                suitableFor: ['all_types'],
                ELI5: "Imagine sorting blocks: some match exactly (equilateral), some have 2 matching (isosceles), some all different (scalene)"
            },
            triangle_inequality: {
                analogy: "Three sticks trying to touch",
                explanation: "Like trying to form a triangle with three sticks - if one is too long, the others can't reach to close it",
                suitableFor: ['inequality'],
                ELI5: "If you have three sticks and one is super long, the other two can't reach each other to make a triangle shape"
            },
            pythagorean_test: {
                analogy: "Comparing areas of gardens",
                explanation: "Like checking if two small square gardens together equal one big square garden",
                suitableFor: ['pythagorean'],
                ELI5: "Imagine three square playgrounds. In a right triangle, the two smaller playgrounds together equal the biggest one!"
            },
            angle_sum: {
                analogy: "Pizza slices adding to whole pizza",
                explanation: "Three triangle angles fit together like three pizza slices that make exactly half a pizza (180°)",
                suitableFor: ['by_angles'],
                ELI5: "The three corners of a triangle fit together perfectly to make a straight line - like a flat table edge!"
            },
            equilateral_symmetry: {
                analogy: "Perfect triplets",
                explanation: "Like three identical triplets - everything about them is the same",
                suitableFor: ['by_sides'],
                ELI5: "An equilateral triangle is like three identical twins of a side - all exactly the same!"
            },
            acute_vs_obtuse: {
                analogy: "Sharp vs blunt corners",
                explanation: "Acute triangles have all sharp corners (like pencil points), obtuse has one blunt corner (like a hockey stick bend)",
                suitableFor: ['by_angles'],
                ELI5: "Acute means all pointy corners. Obtuse means one corner opened wide like a big mouth yawning!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            by_sides: {
                level1: "How many sides are equal to each other?",
                level2: "Count: are all 3 equal, or just 2, or all different?",
                level3: "Compare each pair of sides: a=b? b=c? a=c?",
                level4: "If all equal→equilateral, if 2 equal→isosceles, if all different→scalene"
            },
            by_angles: {
                level1: "How do the angles compare to 90 degrees?",
                level2: "Find the largest angle and compare to 90°",
                level3: "Check: all<90° (acute), one=90° (right), one>90° (obtuse)",
                level4: "Classify based on largest angle's relationship to 90°"
            },
            pythagorean: {
                level1: "Which side is longest?",
                level2: "That longest side is 'c' - square it",
                level3: "Square the two shorter sides and add them: a² + b²",
                level4: "Compare a²+b² to c²: equal=right, greater=acute, less=obtuse"
            },
            inequality: {
                level1: "Can these three lengths actually form a triangle?",
                level2: "Find the longest side",
                level3: "Add the two shorter sides together",
                level4: "If sum > longest side, triangle is valid; otherwise invalid"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Classify triangle with sides 4, 4, 4",
                    answer: "Equilateral",
                    assesses: "by_sides",
                    difficulty: "basic"
                },
                {
                    question: "Classify triangle with angles 90°, 40°, 50°",
                    answer: "Right",
                    assesses: "by_angles",
                    difficulty: "basic"
                },
                {
                    question: "Is a triangle with sides 3, 4, 5 right-angled?",
                    answer: "Yes (Pythagorean triple)",
                    assesses: "pythagorean",
                    difficulty: "intermediate"
                },
                {
                    question: "Can sides 2, 3, 8 form a triangle?",
                    answer: "No (2+3 not > 8)",
                    assesses: "inequality",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "How many sides must be equal for an isosceles triangle?",
                    options: ["All three", "Exactly two", "At least two", "None"],
                    correct: "At least two",
                    explanation: "Isosceles means at least two sides equal (equilateral is also isosceles)"
                },
                {
                    question: "What is the sum of angles in any triangle?",
                    options: ["90°", "180°", "270°", "360°"],
                    correct: "180°",
                    explanation: "This is the fundamental angle sum property"
                },
                {
                    question: "For Pythagorean test, which side must be 'c'?",
                    options: ["Any side", "Shortest side", "Longest side", "Either leg"],
                    correct: "Longest side",
                    explanation: "The longest side is the potential hypotenuse"
                }
            ],
            summative: [
                {
                    question: "Complete classification: triangle with sides 8, 15, 17",
                    answer: "Right scalene",
                    showsWork: true,
                    rubric: {
                        identify_scalene: 1,
                        pythagorean_calculation: 2,
                        correct_classification: 2
                    }
                },
                {
                    question: "Find missing angle and classify: angles are 35° and 55°",
                    answer: "90°; right triangle",
                    showsWork: true,
                    rubric: {
                        calculate_third_angle: 2,
                        classify_by_angle: 2,
                        verify_sum: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "Sides 3,3,3",
                    "Angles 60°,60°,60°",
                    "Sides 5,5,7",
                    "Can 1,2,5 form triangle?"
                ],
                medium: [
                    "Sides 6,8,10 - classify completely",
                    "Angles 30°,60°,90° - identify type",
                    "Sides 5,12,13 - use Pythagorean test",
                    "Find third angle given 45° and 65°"
                ],
                hard: [
                    "Classify triangle: sides 7,9,12",
                    "Sides a,a,a√2 - what type?",
                    "Two angles 50° and 80° - classify completely",
                    "Prove why triangle can't have two obtuse angles"
                ]
            },
            byObjective: {
                canClassifyBySides: [
                    "4,4,4",
                    "3,5,5",
                    "2,3,4",
                    "6,6,6"
                ],
                canClassifyByAngles: [
                    "60°,60°,60°",
                    "90°,45°,45°",
                    "100°,40°,40°",
                    "70°,70°,40°"
                ],
                canUsePythagorean: [
                    "3,4,5",
                    "5,12,13",
                    "8,15,17",
                    "7,24,25"
                ],
                canCheckInequality: [
                    "3,4,5",
                    "1,2,10",
                    "5,5,5",
                    "2,3,4"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "have_sides_only": "Use Pythagorean test for angle type, compare sides for side type",
                "have_angles_only": "Compare to 90° for angle type, use angle relationships for sides",
                "have_both": "Verify consistency, classify by both criteria",
                "check_validity_first": "Always verify triangle inequality before classifying",
                "two_equal_sides": "Isosceles - check angles for right/acute/obtuse",
                "all_equal_sides": "Equilateral - automatically also acute (all 60°)",
                "one_90_degree": "Right triangle - check sides for isosceles/scalene"
            },
            whenToUseWhat: {
                side_comparison: "When you have all three side measurements",
                angle_comparison: "When you have angle measurements",
                pythagorean_theorem: "To determine angle type from sides alone",
                triangle_inequality: "To check if three lengths can form a triangle",
                angle_sum_property: "To find missing angle or verify angle measurements"
            },
            methodSelection: {
                factorsToConsider: [
                    "What information is given (sides, angles, or both)?",
                    "Is triangle validity already confirmed?",
                    "What level of detail is needed?",
                    "Are there special patterns (3-4-5, 45-45-90, etc.)?"
                ],
                generalApproach: [
                    "1. Verify triangle is valid (inequality if needed)",
                    "2. Classify by sides (if side lengths given)",
                    "3. Classify by angles (if angles given or use Pythagorean)",
                    "4. Identify special triangles if applicable",
                    "5. Verify consistency of classifications"
                ]
            },
            optimizationTips: {
                "Quick side check": "For equilateral/isosceles, just check if any sides equal",
                "Quick angle check": "Find largest angle first - determines acute/right/obtuse",
                "Pythagorean shortcut": "Recognize common triples: 3-4-5, 5-12-13, 8-15-17",
                "Inequality shortcut": "Only check sum of two smallest > largest"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Side Classification Sprint",
                    timeLimit: 60,
                    problems: [
                        "5,5,5",
                        "3,4,5",
                        "7,7,9",
                        "2,3,4",
                        "6,6,6",
                        "8,8,10",
                        "1,2,2",
                        "4,5,6"
                    ]
                },
                {
                    name: "Angle Classification Challenge",
                    timeLimit: 90,
                    problems: [
                        "60°,60°,60°",
                        "90°,45°,45°",
                        "30°,60°,90°",
                        "70°,70°,40°",
                        "100°,50°,30°"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Triangle",
                    problem: "Triangle has two sides equal and one 90° angle",
                    question: "What are the other two angles?",
                    solution: "45° and 45° (isosceles right triangle)"
                },
                {
                    name: "Impossible Triangle?",
                    problem: "Can you make a triangle with sides 5, 7, and 15?",
                    solution: "No - 5+7=12 which is not > 15"
                },
                {
                    name: "Perfect Ratios",
                    problem: "Triangle sides in ratio 1:√3:2. What type?",
                    solution: "30-60-90 special right triangle"
                }
            ],
            applications: [
                {
                    scenario: "Roof Design",
                    problem: "A-frame cabin roof has 8ft rafters meeting at 40° angle. Classify the roof triangle.",
                    solution: "Isosceles triangle (two equal rafters), obtuse if peak angle > 90°"
                },
                {
                    scenario: "Ladder Safety",
                    problem: "15ft ladder against wall, base 9ft from wall, reaches 12ft high. Safe if angle < 75°?",
                    solution: "Check: 9²+12²=81+144=225=15², so right triangle (90°-safe), base angle = arctan(12/9)≈53° < 75° ✓"
                },
                {
                    scenario: "Triangular Garden",
                    problem: "Garden plot with sides 6m, 8m, 10m. What type and area?",
                    solution: "Right scalene (6²+8²=10²), Area = (1/2)(6)(8) = 24 m²"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Triangle sides: 5, 7, 8",
                        "Check Pythagorean: 5² + 7² = 25 + 49 = 74",
                        "8² = 64",
                        "74 > 64 so triangle is acute",  // Correct!
                        "Sides all different, so scalene",  // Correct!
                        "But wait - check inequality: 5+7=12 > 8 ✓"  // Unnecessary but not wrong
                    ],
                    verdict: "Actually correct! No error found.",
                    teachingPoint: "This demonstrates correct Pythagorean classification"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Triangle with two sides equal = equilateral",  // ERROR!
                        "Both are 5cm",
                        "Therefore all angles are 60°"  // Wrong conclusion
                    ],
                    correctAnswer: "Two equal sides = isosceles, not equilateral",
                    errorType: "Confused isosceles with equilateral"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "Triangle angles: 30°, 60°, 100°",  // ERROR!
                        "Largest angle is 100° > 90°",
                        "Therefore obtuse triangle"
                    ],
                    correctAnswer: "30+60+100=190° ≠ 180°, invalid triangle!",
                    errorType: "Forgot to check angle sum property"
                }
            ]
        };
    }

    // MAIN CLASSIFIER METHOD
    classifyTriangle(config) {
        const { sides, angles, method, parameters, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseTriangleProblem(sides, angles, method, parameters, context);

            // Classify the triangle
            this.currentSolution = this.classifyTriangle_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateTriangleSteps(this.currentProblem, this.currentSolution);

            // Generate graph data if applicable
            this.generateTriangleGraphData();

            // Generate workbook
            this.generateTriangleWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                classification: this.currentSolution?.classification,
                properties: this.currentSolution?.properties
            };

        } catch (error) {
            throw new Error(`Failed to classify triangle: ${error.message}`);
        }
    }

    parseTriangleProblem(sides = null, angles = null, method = null, parameters = {}, context = {}) {
        // Determine classification method
        let detectedMethod = method;

        if (!detectedMethod) {
            if (sides && sides.length === 3) {
                detectedMethod = 'complete'; // Will do both side and angle classification
            } else if (angles && angles.length === 3) {
                detectedMethod = 'by_angles';
            } else if (context.checkInequality) {
                detectedMethod = 'inequality';
            } else {
                detectedMethod = 'complete';
            }
        }

        return {
            sides: sides || parameters.sides || null,
            angles: angles || parameters.angles || null,
            method: detectedMethod,
            parameters: { ...parameters },
            context: { ...context },
            parsedAt: new Date().toISOString()
        };
    }

    classifyTriangle_Internal(problem) {
        const classifier = this.triangleTypes[problem.method]?.classifier;
        if (!classifier) {
            // Default to complete classification
            return this.completeClassification(problem);
        }

        return classifier(problem);
    }

    // TRIANGLE CLASSIFIERS

    classifyBySides(problem) {
        const sides = problem.sides;
        if (!sides || sides.length !== 3) {
            throw new Error("Three side lengths required for side classification");
        }

        const [a, b, c] = sides.sort((x, y) => x - y);
        const epsilon = 0.0001;

        let classification;
        let equalCount = 0;

        if (Math.abs(a - b) < epsilon && Math.abs(b - c) < epsilon) {
            classification = "Equilateral";
            equalCount = 3;
        } else if (Math.abs(a - b) < epsilon || Math.abs(b - c) < epsilon || Math.abs(a - c) < epsilon) {
            classification = "Isosceles";
            equalCount = 2;
        } else {
            classification = "Scalene";
            equalCount = 0;
        }

        return {
            classification: classification,
            category: 'sides',
            sides: { a, b, c },
            equalSides: equalCount,
            properties: {
                allSidesEqual: equalCount === 3,
                twoSidesEqual: equalCount === 2,
                allSidesDifferent: equalCount === 0
            },
            explanation: this.getSideClassificationExplanation(classification, sides)
        };
    }

    classifyByAngles(problem) {
        const angles = problem.angles;
        if (!angles || angles.length !== 3) {
            throw new Error("Three angles required for angle classification");
        }

        const [angle1, angle2, angle3] = angles;
        const sum = angle1 + angle2 + angle3;
        const epsilon = 0.1;

        // Verify angle sum
        if (Math.abs(sum - 180) > epsilon) {
            return {
                classification: "Invalid",
                category: 'angles',
                error: `Angles sum to ${sum}° instead of 180°`,
                isValid: false
            };
        }

        const maxAngle = Math.max(angle1, angle2, angle3);
        let classification;

        if (Math.abs(maxAngle - 90) < epsilon) {
            classification = "Right";
        } else if (maxAngle > 90) {
            classification = "Obtuse";
        } else {
            classification = "Acute";
        }

        // Check for equiangular
        const allEqual = Math.abs(angle1 - angle2) < epsilon && 
                        Math.abs(angle2 - angle3) < epsilon;
        if (allEqual) {
            classification = "Equiangular (Acute)";
        }

        return {
            classification: classification,
            category: 'angles',
            angles: { angle1, angle2, angle3 },
            maxAngle: maxAngle,
            properties: {
                isRight: Math.abs(maxAngle - 90) < epsilon,
                isAcute: maxAngle < 90,
                isObtuse: maxAngle > 90,
                isEquiangular: allEqual
            },
            explanation: this.getAngleClassificationExplanation(classification, angles)
        };
    }

    classifyByPythagorean(problem) {
        const sides = problem.sides;
        if (!sides || sides.length !== 3) {
            throw new Error("Three side lengths required for Pythagorean classification");
        }

        const sorted = [...sides].sort((a, b) => a - b);
        const [a, b, c] = sorted; // c is longest

        const aSquared = a * a;
        const bSquared = b * b;
        const cSquared = c * c;
        const sumSquares = aSquared + bSquared;

        const epsilon = 0.0001;
        let classification;

        if (Math.abs(sumSquares - cSquared) < epsilon) {
            classification = "Right";
        } else if (sumSquares > cSquared) {
            classification = "Acute";
        } else {
            classification = "Obtuse";
        }

        return {
            classification: classification,
            category: 'pythagorean',
            sides: { a, b, c },
            calculation: {
                aSquared: aSquared,
                bSquared: bSquared,
                cSquared: cSquared,
                sumSquares: sumSquares,
                comparison: sumSquares === cSquared ? "=" : (sumSquares > cSquared ? ">" : "<")
            },
            properties: {
                isRight: Math.abs(sumSquares - cSquared) < epsilon,
                isAcute: sumSquares > cSquared,
                isObtuse: sumSquares < cSquared
            },
            explanation: this.getPythagoreanExplanation(classification, sorted, sumSquares, cSquared)
        };
    }

    checkTriangleInequality(problem) {
        const sides = problem.sides;
        if (!sides || sides.length !== 3) {
            throw new Error("Three side lengths required for inequality check");
        }

        const [a, b, c] = sides;

        const check1 = a + b > c;
        const check2 = b + c > a;
        const check3 = a + c > b;

        const isValid = check1 && check2 && check3;

        // Find which inequality fails (if any)
        let failedInequality = null;
        if (!check1) failedInequality = `${a} + ${b} = ${a+b} not > ${c}`;
        else if (!check2) failedInequality = `${b} + ${c} = ${b+c} not > ${a}`;
        else if (!check3) failedInequality = `${a} + ${c} = ${a+c} not > ${b}`;

        return {
            classification: isValid ? "Valid Triangle" : "Invalid Triangle",
            category: 'inequality',
            sides: { a, b, c },
            checks: {
                check1: { expression: `${a} + ${b} > ${c}`, result: check1, value: a + b },
                check2: { expression: `${b} + ${c} > ${a}`, result: check2, value: b + c },
                check3: { expression: `${a} + ${c} > ${b}`, result: check3, value: a + c }
            },
            isValid: isValid,
            failedInequality: failedInequality,
            explanation: this.getInequalityExplanation(isValid, sides, failedInequality)
        };
    }

    completeClassification(problem) {
        const sides = problem.sides;
        const angles = problem.angles;

        if (!sides || sides.length !== 3) {
            throw new Error("Three side lengths required for complete classification");
        }

        // First check validity
        const inequalityCheck = this.checkTriangleInequality(problem);
        if (!inequalityCheck.isValid) {
            return inequalityCheck;
        }

        // Classify by sides
        const sideClassification = this.classifyBySides(problem);

        // Classify by angles using Pythagorean theorem
        const angleClassification = this.classifyByPythagorean(problem);

        // Combined classification
        const combined = `${angleClassification.classification} ${sideClassification.classification}`;

        return {
            classification: combined,
            category: 'complete',
            sides: sideClassification.sides,
            sideType: sideClassification.classification,
            angleType: angleClassification.classification,
            properties: {
                ...sideClassification.properties,
                ...angleClassification.properties
            },
            pythagoreanTest: angleClassification.calculation,
            isValid: true,
            explanation: this.getCompleteExplanation(sideClassification, angleClassification)
        };
    }

    identifySpecialTriangle(problem) {
        const sides = problem.sides;
        const angles = problem.angles;

        let specialType = null;
        let properties = {};

        // Check for special angle-based triangles
        if (angles) {
            const sorted = [...angles].sort((a, b) => a - b);
            if (this.isApproximately(sorted, [30, 60, 90])) {
                specialType = "30-60-90 Triangle";
                properties.sideRatio = "1 : √3 : 2";
            } else if (this.isApproximately(sorted, [45, 45, 90])) {
                specialType = "45-45-90 Triangle (Isosceles Right)";
                properties.sideRatio = "1 : 1 : √2";
            } else if (this.isApproximately(sorted, [60, 60, 60])) {
                specialType = "Equilateral Triangle";
                properties.sideRatio = "1 : 1 : 1";
            }
        }

        // Check for Pythagorean triples
        if (sides && !specialType) {
            const sorted = [...sides].sort((a, b) => a - b);
            const [a, b, c] = sorted;
            
            // Check if it's a Pythagorean triple
            if (Math.abs(a*a + b*b - c*c) < 0.0001) {
                // Common Pythagorean triples
                const ratio = this.normalizeRatio([a, b, c]);
                if (this.isApproximately(ratio, [3, 4, 5])) {
                    specialType = "3-4-5 Pythagorean Triple";
                } else if (this.isApproximately(ratio, [5, 12, 13])) {
                    specialType = "5-12-13 Pythagorean Triple";
                } else if (this.isApproximately(ratio, [8, 15, 17])) {
                    specialType = "8-15-17 Pythagorean Triple";
                } else if (this.isApproximately(ratio, [7, 24, 25])) {
                    specialType = "7-24-25 Pythagorean Triple";
                } else {
                    specialType = "Pythagorean Triple (Right Triangle)";
                }
                properties.isPythagoreanTriple = true;
            }
        }

        return {
            classification: specialType || "Not a special triangle",
            category: 'special',
            isSpecial: specialType !== null,
            properties: properties,
            explanation: this.getSpecialTriangleExplanation(specialType, sides, angles)
        };
    }

    findMissingAngle(problem) {
        const angles = problem.angles;
        if (!angles || angles.length !== 2) {
            throw new Error("Exactly two angles required to find missing angle");
        }

        const [angle1, angle2] = angles;
        const missingAngle = 180 - angle1 - angle2;

        if (missingAngle <= 0 || missingAngle >= 180) {
            return {
                classification: "Invalid",
                error: `Missing angle would be ${missingAngle}°, which is invalid`,
                isValid: false
            };
        }

        // Classify the triangle now that we have all angles
        const fullProblem = {
            ...problem,
            angles: [angle1, angle2, missingAngle]
        };

        const classification = this.classifyByAngles(fullProblem);

        return {
            ...classification,
            missingAngle: missingAngle,
            givenAngles: [angle1, angle2],
            calculation: `180° - ${angle1}° - ${angle2}° = ${missingAngle}°`
        };
    }

    analyzeSideRelationships(problem) {
        const sides = problem.sides;
        if (!sides || sides.length !== 3) {
            throw new Error("Three sides required for relationship analysis");
        }

        const sorted = [...sides].sort((a, b) => a - b);
        const [shortest, medium, longest] = sorted;

        return {
            classification: "Side Relationship Analysis",
            category: 'relationships',
            sides: {
                shortest: shortest,
                medium: medium,
                longest: longest
            },
            relationships: {
                shortestToLongest: (shortest / longest).toFixed(3),
                mediumToLongest: (medium / longest).toFixed(3),
                shortestToMedium: (shortest / medium).toFixed(3)
            },
            properties: {
                longestSideOppositeToLargestAngle: true,
                shortestSideOppositeToSmallestAngle: true
            },
            explanation: "In any triangle, the longest side is opposite the largest angle, and shortest side is opposite smallest angle"
        };
    }

    // HELPER METHODS

    isApproximately(arr1, arr2, epsilon = 0.1) {
        if (arr1.length !== arr2.length) return false;
        
        const sorted1 = [...arr1].sort((a, b) => a - b);
        const sorted2 = [...arr2].sort((a, b) => a - b);
        
        for (let i = 0; i < sorted1.length; i++) {
            if (Math.abs(sorted1[i] - sorted2[i]) > epsilon) return false;
        }
        return true;
    }

    normalizeRatio(sides) {
        const gcd = this.findGCD(sides);
        return sides.map(s => s / gcd);
    }

    findGCD(numbers) {
        const gcd2 = (a, b) => b === 0 ? a : gcd2(b, a % b);
        return numbers.reduce((acc, num) => gcd2(acc, num));
    }

    getSideClassificationExplanation(classification, sides) {
        const explanations = {
            "Equilateral": `All three sides are equal (${sides[0]} = ${sides[1]} = ${sides[2]}), so this is an equilateral triangle`,
            "Isosceles": `Exactly two sides are equal, making this an isosceles triangle`,
            "Scalene": `All three sides have different lengths (${sides[0]} ≠ ${sides[1]} ≠ ${sides[2]}), so this is a scalene triangle`
        };
        return explanations[classification] || "";
    }

    getAngleClassificationExplanation(classification, angles) {
        const max = Math.max(...angles);
        const explanations = {
            "Right": `One angle equals 90°, making this a right triangle`,
            "Acute": `All angles are less than 90° (largest is ${max}°), making this an acute triangle`,
            "Obtuse": `One angle is greater than 90° (${max}°), making this an obtuse triangle`,
            "Equiangular (Acute)": `All three angles are equal (60° each), making this an equiangular triangle (which is always equilateral)`
        };
        return explanations[classification] || "";
    }

    getPythagoreanExplanation(classification, sides, sumSquares, cSquared) {
        const [a, b, c] = sides;
        const comparison = sumSquares === cSquared ? "equals" : (sumSquares > cSquared ? "is greater than" : "is less than");
        
        return `Using Pythagorean theorem: ${a}² + ${b}² = ${a*a} + ${b*b} = ${sumSquares}, and ${c}² = ${cSquared}. Since ${sumSquares} ${comparison} ${cSquared}, this is a ${classification.toLowerCase()} triangle.`;
    }

    getInequalityExplanation(isValid, sides, failedInequality) {
        if (isValid) {
            return `All three sides satisfy the triangle inequality (sum of any two > third), so these lengths can form a valid triangle.`;
        } else {
            return `Triangle inequality violated: ${failedInequality}. These lengths cannot form a valid triangle.`;
        }
    }

    getCompleteExplanation(sideClass, angleClass) {
        return `By sides: ${sideClass.explanation}. By angles: ${angleClass.explanation}`;
    }

    getSpecialTriangleExplanation(specialType, sides, angles) {
        if (!specialType) {
            return "This triangle does not match any special triangle patterns.";
        }
        
        const explanations = {
            "30-60-90 Triangle": "This is a special right triangle with angles 30°-60°-90° and sides in ratio 1:√3:2",
            "45-45-90 Triangle (Isosceles Right)": "This is a special right triangle with angles 45°-45°-90° and sides in ratio 1:1:√2",
            "Equilateral Triangle": "This is an equilateral triangle with all sides equal and all angles 60°",
            "3-4-5 Pythagorean Triple": "This is the famous 3-4-5 right triangle, a Pythagorean triple",
            "5-12-13 Pythagorean Triple": "This is a 5-12-13 right triangle, a common Pythagorean triple",
            "Pythagorean Triple (Right Triangle)": "This is a right triangle with sides forming a Pythagorean triple"
        };
        
        return explanations[specialType] || `Special triangle identified: ${specialType}`;
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
                this.addErrorPrevention(step, problem.method)
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
        const { method } = problem;
        const category = this.triangleTypes[method]?.category;

        switch(category) {
            case 'sides':
                return this.generateSideClassificationSteps(problem, solution);
            case 'angles':
                return this.generateAngleClassificationSteps(problem, solution);
            case 'pythagorean':
                return this.generatePythagoreanSteps(problem, solution);
            case 'inequality':
                return this.generateInequalitySteps(problem, solution);
            case 'complete':
                return this.generateCompleteSteps(problem, solution);
            default:
                return this.generateGenericTriangleSteps(problem, solution);
        }
    }

    generateSideClassificationSteps(problem, solution) {
        const steps = [];
        const sides = problem.sides;

        // Step 1: Given sides
        steps.push({
            stepNumber: 1,
            step: 'Given triangle sides',
            description: 'Identify the three side lengths',
            expression: `Sides: ${sides[0]}, ${sides[1]}, ${sides[2]}`,
            reasoning: 'We will compare these sides to classify the triangle',
            goalStatement: 'Determine if sides are all equal, two equal, or all different'
        });

        // Step 2: Compare sides
        steps.push({
            stepNumber: 2,
            step: 'Compare side lengths',
            description: 'Check which sides are equal',
            comparisons: [
                `${sides[0]} vs ${sides[1]}: ${sides[0] === sides[1] ? 'Equal' : 'Different'}`,
                `${sides[1]} vs ${sides[2]}: ${sides[1] === sides[2] ? 'Equal' : 'Different'}`,
                `${sides[0]} vs ${sides[2]}: ${sides[0] === sides[2] ? 'Equal' : 'Different'}`
            ],
            reasoning: 'Comparing each pair tells us the pattern of equality',
            algebraicRule: 'Side classification definition'
        });

        // Step 3: Classification
        steps.push({
            stepNumber: 3,
            step: 'Apply classification rule',
            description: 'Determine triangle type based on side equality',
            expression: solution.classification,
            reasoning: solution.explanation,
            finalAnswer: true
        });

        return steps;
    }

    generateAngleClassificationSteps(problem, solution) {
        const steps = [];
        const angles = problem.angles;

        // Step 1: Given angles
        steps.push({
            stepNumber: 1,
            step: 'Given triangle angles',
            description: 'Identify the three angle measurements',
            expression: `Angles: ${angles[0]}°, ${angles[1]}°, ${angles[2]}°`,
            reasoning: 'We will compare these to 90° and check their sum',
            goalStatement: 'Verify angles sum to 180° and classify by largest angle'
        });

        // Step 2: Verify sum
        const sum = angles[0] + angles[1] + angles[2];
        steps.push({
            stepNumber: 2,
            step: 'Verify angle sum property',
            description: 'Check that angles sum to 180°',
            calculation: `${angles[0]}° + ${angles[1]}° + ${angles[2]}° = ${sum}°`,
            reasoning: 'All triangles must have angles summing to 180°',
            verification: Math.abs(sum - 180) < 0.1 ? 'Valid ✓' : 'Invalid ✗'
        });

        // Step 3: Find largest angle
        const maxAngle = Math.max(...angles);
        steps.push({
            stepNumber: 3,
            step: 'Identify largest angle',
            description: 'Find the maximum angle',
            expression: `Largest angle = ${maxAngle}°`,
            reasoning: 'Triangle type is determined by comparing largest angle to 90°'
        });

        // Step 4: Classification
        steps.push({
            stepNumber: 4,
            step: 'Classify by angle',
            description: 'Compare largest angle to 90°',
            comparison: maxAngle === 90 ? '= 90°' : (maxAngle < 90 ? '< 90°' : '> 90°'),
            expression: solution.classification,
            reasoning: solution.explanation,
            finalAnswer: true
        });

        return steps;
    }

    generatePythagoreanSteps(problem, solution) {
        const steps = [];
        const sides = problem.sides;
        const sorted = [...sides].sort((a, b) => a - b);
        const [a, b, c] = sorted;

        // Step 1: Given sides
        steps.push({
            stepNumber: 1,
            step: 'Given triangle sides',
            description: 'Identify the three side lengths',
            expression: `Sides: ${sides[0]}, ${sides[1]}, ${sides[2]}`,
            reasoning: 'We will use Pythagorean theorem to classify by angles',
            goalStatement: 'Determine if triangle is right, acute, or obtuse'
        });

        // Step 2: Identify longest side
        steps.push({
            stepNumber: 2,
            step: 'Identify longest side',
            description: 'Sort sides to find the potential hypotenuse',
            beforeExpression: `Unsorted: ${sides.join(', ')}`,
            afterExpression: `Sorted: a=${a}, b=${b}, c=${c}`,
            reasoning: 'The longest side (c) is the potential hypotenuse',
            visualHint: 'In any triangle, longest side is opposite the largest angle'
        });

        // Step 3: Calculate squares
        const aSquared = a * a;
        const bSquared = b * b;
        const cSquared = c * c;
        steps.push({
            stepNumber: 3,
            step: 'Square the sides',
            description: 'Calculate a², b², and c²',
            calculations: [
                `a² = ${a}² = ${aSquared}`,
                `b² = ${b}² = ${bSquared}`,
                `c² = ${c}² = ${cSquared}`
            ],
            reasoning: 'We need squared values for Pythagorean comparison'
        });

        // Step 4: Compare
        const sumSquares = aSquared + bSquared;
        steps.push({
            stepNumber: 4,
            step: 'Apply Pythagorean test',
            description: 'Compare a² + b² to c²',
            beforeExpression: `a² + b² = ${aSquared} + ${bSquared} = ${sumSquares}`,
            afterExpression: `c² = ${cSquared}`,
            comparison: sumSquares === cSquared ? '=' : (sumSquares > cSquared ? '>' : '<'),
            reasoning: 'If equal: right triangle. If greater: acute. If less: obtuse.',
            algebraicRule: 'Pythagorean Theorem Converse'
        });

        // Step 5: Classification
        steps.push({
            stepNumber: 5,
            step: 'Conclude classification',
            description: 'State the triangle type',
            expression: solution.classification,
            reasoning: solution.explanation,
            finalAnswer: true
        });

        return steps;
    }

    generateInequalitySteps(problem, solution) {
        const steps = [];
        const sides = problem.sides;
        const [a, b, c] = sides;

        // Step 1: Given sides
        steps.push({
            stepNumber: 1,
            step: 'Given three lengths',
            description: 'Three lengths are provided',
            expression: `Lengths: ${a}, ${b}, ${c}`,
            reasoning: 'We must verify these can form a valid triangle',
            goalStatement: 'Check triangle inequality: sum of any two sides > third side'
        });

        // Step 2: State inequality theorem
        steps.push({
            stepNumber: 2,
            step: 'Triangle Inequality Theorem',
            description: 'For any triangle, a + b > c, b + c > a, and a + c > b',
            reasoning: 'All three conditions must be satisfied',
            visualHint: 'Two sides must be long enough to reach and close the triangle'
        });

        // Step 3: Check each inequality
        steps.push({
            stepNumber: 3,
            step: 'Check all three inequalities',
            description: 'Verify each condition',
            checks: [
                `${a} + ${b} = ${a+b} > ${c}? ${a+b > c ? 'Yes ✓' : 'No ✗'}`,
                `${b} + ${c} = ${b+c} > ${a}? ${b+c > a ? 'Yes ✓' : 'No ✗'}`,
                `${a} + ${c} = ${a+c} > ${b}? ${a+c > b ? 'Yes ✓' : 'No ✗'}`
            ],
            reasoning: 'All three must be true for valid triangle'
        });

        // Step 4: Conclusion
        steps.push({
            stepNumber: 4,
            step: 'Conclusion',
            description: 'Determine if triangle is valid',
            expression: solution.classification,
            reasoning: solution.explanation,
            finalAnswer: true
        });

        return steps;
    }

    generateCompleteSteps(problem, solution) {
        const steps = [];
        
        // Combine steps from both side and pythagorean classification
        const sideSteps = this.generateSideClassificationSteps(problem, { 
            classification: solution.sideType,
            explanation: solution.explanation
        });
        
        const angleSteps = this.generatePythagoreanSteps(problem, {
            classification: solution.angleType,
            explanation: solution.explanation
        });

        steps.push({
            stepNumber: 1,
            step: 'Complete Classification',
            description: 'We will classify by both sides and angles',
            expression: `Given sides: ${problem.sides.join(', ')}`,
            reasoning: 'Complete classification requires both criteria',
            goalStatement: 'Classify by sides, then by angles'
        });

        // Add side classification steps (skip first step as we combined it)
        sideSteps.slice(1).forEach((step, index) => {
            steps.push({
                ...step,
                stepNumber: steps.length + 1,
                subsection: 'Side Classification'
            });
        });

        // Add angle classification steps (skip first step)
        angleSteps.slice(1).forEach((step, index) => {
            steps.push({
                ...step,
                stepNumber: steps.length + 1,
                subsection: 'Angle Classification'
            });
        });

        // Final combined classification
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Combined Classification',
            description: 'State complete triangle classification',
            expression: solution.classification,
            reasoning: `By sides: ${solution.sideType}. By angles: ${solution.angleType}.`,
            finalAnswer: true
        });

        return steps;
    }

    generateGenericTriangleSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Triangle classification',
            description: 'Classify the given triangle',
            expression: solution.classification,
            reasoning: solution.explanation || 'Triangle classified using appropriate method',
            solution: solution
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
                prerequisiteSkills: this.identifyPrerequisites(step, problem.method),
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
            'Given triangle sides': "We have three sticks that make up the sides of our triangle!",
            'Compare side lengths': "Let's see if any of our sticks are the same length, like matching toys!",
            'Identify longest side': "We're finding which stick is the longest - like finding the tallest person!",
            'Square the sides': "We're making each number bigger by multiplying it by itself - like making a square garden!",
            'Apply Pythagorean test': "We're checking if two smaller gardens added together equal the big garden!",
            'Triangle Inequality Theorem': "Can our three sticks actually touch to make a triangle, or is one too long?",
            'Verify angle sum property': "Let's check that our three angles fit together like puzzle pieces to make a straight line!"
        };

        return ELI5Explanations[step.step] || "We're taking another step to figure out what kind of triangle we have!";
    }

    findRelevantAnalogy(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(problem.method) || analogy.suitableFor.includes('all_types')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of this like solving a shape puzzle!";
    }

    convertToSimpleLanguage(description) {
        const simplifications = {
            'hypotenuse': 'longest side (in right triangle)',
            'equilateral': 'all sides equal',
            'isosceles': 'two sides equal',
            'scalene': 'all sides different',
            'acute': 'all angles less than a square corner',
            'obtuse': 'one angle bigger than a square corner',
            'right': 'has a square corner (90 degrees)',
            'classify': 'figure out what type',
            'theorem': 'rule or pattern',
            'inequality': 'not equal; greater than or less than',
            'congruent': 'exactly the same'
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
            'Given triangle sides': 'Draw three line segments of the given lengths',
            'Compare side lengths': 'Line up the sides next to each other to see which are equal',
            'Identify longest side': 'Place sides from shortest to longest like stairs',
            'Square the sides': 'Draw squares on each side of the triangle',
            'Apply Pythagorean test': 'Compare areas of squares on the sides',
            'Triangle Inequality Theorem': 'Try to connect three sticks end-to-end to form a closed triangle',
            'Verify angle sum property': 'Cut out the three angles and arrange them to form a straight line'
        };

        return visualizations[step.step] || 'Draw a picture of the triangle showing this step';
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

    addErrorPrevention(step, problemMethod) {
        const category = this.triangleTypes[problemMethod]?.category || 'sides';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTips(step, problemMethod),
                checkPoints: this.generateCheckPoints(step),
                warningFlags: this.identifyWarningFlags(step, problemMethod)
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
            'Given triangle sides': 'A triangle is defined by its three sides. Their lengths determine all properties of the triangle.',
            'Compare side lengths': 'Equality of sides reveals symmetry. Equal sides correspond to equal opposite angles.',
            'Identify longest side': 'The longest side is always opposite the largest angle. This is a fundamental triangle property.',
            'Square the sides': 'Squaring converts lengths to areas. Pythagorean theorem relates areas of squares on sides.',
            'Apply Pythagorean test': 'The relationship between squared sides reveals the largest angle type without measuring angles.',
            'Triangle Inequality Theorem': 'This expresses the geometric truth that a straight line is the shortest distance between two points.',
            'Verify angle sum property': 'All triangles have angles summing to 180° - this is a fundamental property of Euclidean geometry.',
            'Apply classification rule': 'Classification organizes triangles into categories based on their defining properties.'
        };

        return conceptualExplanations[step.step] || 'This step helps us understand the triangle\'s properties.';
    }

    getProceduralExplanation(step) {
        if (step.comparisons) {
            return `1. Compare each pair of values
2. Count how many are equal
3. Apply the classification rule
4. State the result`;
        }
        if (step.calculations) {
            return `1. Perform each calculation shown
2. Write down intermediate results
3. Use these values in next step`;
        }
        return 'Follow the procedure shown in this step carefully.';
    }

    getVisualExplanation(step, problem) {
        const category = this.triangleTypes[problem.method]?.category;
        
        const visualExplanations = {
            'sides': 'Picture three line segments. Which ones match in length?',
            'angles': 'Visualize the three corners of the triangle. How sharp or wide are they?',
            'pythagorean': 'Imagine squares drawn on each side. How do their areas compare?',
            'inequality': 'Picture trying to connect three sticks into a closed triangle shape.',
            'complete': 'See both the side lengths and the angles working together to define the triangle.'
        };

        return visualExplanations[category] || 'Visualize the triangle and this property.';
    }

    getAlgebraicExplanation(step) {
        const algebraicRules = {
            'Compare side lengths': 'Definition of equilateral (a=b=c), isosceles (two equal), scalene (all different)',
            'Verify angle sum property': 'Angle sum theorem: ∠A + ∠B + ∠C = 180°',
            'Apply Pythagorean test': 'Pythagorean theorem converse: if a²+b²=c² then right; if a²+b²>c² then acute; if a²+b²<c² then obtuse',
            'Triangle Inequality Theorem': 'For any triangle: a+b>c, b+c>a, a+c>b',
            'Square the sides': 'Squaring function: n² = n × n',
            'Apply classification rule': 'Classification by definition and properties'
        };

        return algebraicRules[step.step] || 'Apply standard geometric principles.';
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
                'hypotenuse': 'longest side',
                'equilateral': 'all equal',
                'isosceles': 'two equal',
                'scalene': 'all different',
                'classify': 'identify type',
                'theorem': 'rule',
                'inequality': 'comparison'
            },
            intermediate: {
                'hypotenuse': 'hypotenuse (longest side)',
                'equilateral': 'equilateral',
                'isosceles': 'isosceles',
                'scalene': 'scalene'
            },
            ELI5: {
                'hypotenuse': 'the longest stick in a right triangle',
                'equilateral': 'all three sides are exactly the same, like triplets',
                'isosceles': 'two sides match, like twins',
                'scalene': 'all three sides are different sizes',
                'classify': 'figure out what kind of triangle it is',
                'theorem': 'a math rule that always works',
                'inequality': 'when things are not equal',
                'square': 'multiply a number by itself',
                'acute': 'all corners are pointy (less than a square corner)',
                'obtuse': 'one corner is wide open (bigger than a square corner)',
                'right': 'has a perfect square corner like a book'
            },
            detailed: {
                'hypotenuse': 'hypotenuse (side opposite the right angle)',
                'equilateral': 'equilateral (all sides congruent)',
                'isosceles': 'isosceles (at least two sides congruent)',
                'scalene': 'scalene (no congruent sides)'
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
            currentState: `We now know: ${currentStep.expression || currentStep.description}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary to: ${this.explainStepNecessity(currentStep, nextStep)}`,
            howItHelps: `This will help by: ${this.explainStepBenefit(nextStep)}`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue the classification process`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
    }

    explainStepNecessity(currentStep, nextStep) {
        return `build toward complete triangle classification`;
    }

    explainStepBenefit(nextStep) {
        return `providing information needed for the final classification`;
    }

    generatePreventionTips(step, problemMethod) {
        const tips = {
            'Compare side lengths': [
                'Use consistent precision when comparing',
                'Consider floating-point rounding',
                'Check all pairs systematically'
            ],
            'Square the sides': [
                'Don\'t forget to square each value',
                'Keep track of which side is which',
                'Write intermediate calculations'
            ],
            'Apply Pythagorean test': [
                'Always use longest side as c',
                'Compare carefully: equal, greater, or less',
                'Remember the strict inequality (>, not ≥)'
            ],
            'Triangle Inequality Theorem': [
                'Check all three conditions',
                'Use strict inequality (>)',
                'Remember sum must be GREATER, not equal'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Check your arithmetic'];
    }

    generateCheckPoints(step) {
        return [
            'Did I identify all the necessary values?',
            'Are my calculations correct?',
            'Does this result make sense geometrically?',
            'Am I using the right comparison (<, >, or =)?'
        ];
    }

    identifyWarningFlags(step, problemMethod) {
        const warnings = {
            sides: step.step === 'Compare side lengths' ?
                ['Watch for floating-point precision', 'Ensure units are consistent'] : [],
            pythagorean: step.step === 'Apply Pythagorean test' ?
                ['Must use longest side as c', 'Square first, then compare'] : [],
            inequality: step.step === 'Triangle Inequality Theorem' ?
                ['Check all three inequalities', 'Use strict > not ≥'] : []
        };

        const category = this.triangleTypes[problemMethod]?.category || 'sides';
        return warnings[category] || [];
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'Given triangle sides': 'Do I have all three side lengths clearly identified?',
            'Compare side lengths': 'Did I compare all three pairs of sides?',
            'Identify longest side': 'Is this truly the longest of the three sides?',
            'Square the sides': 'Did I square each side correctly?',
            'Apply Pythagorean test': 'Did I use the longest side as c in my comparison?',
            'Triangle Inequality Theorem': 'Did I check all three inequalities?',
            'Verify angle sum property': 'Do the angles sum to exactly 180°?',
            'Apply classification rule': 'Does my classification match the criteria I found?'
        };

        return questions[step.step] || 'Does this step make sense and lead toward the answer?';
    }

    describeExpectedResult(step) {
        const expectations = {
            'Given triangle sides': 'Three positive side lengths',
            'Compare side lengths': 'Identification of which sides are equal',
            'Identify longest side': 'The side with maximum length',
            'Square the sides': 'Three squared values',
            'Apply Pythagorean test': 'Comparison showing right/acute/obtuse',
            'Triangle Inequality Theorem': 'Valid or invalid triangle determination',
            'Verify angle sum property': 'Sum equals 180° (or close due to rounding)',
            'Apply classification rule': 'Final triangle classification'
        };

        return expectations[step.step] || 'Progress toward classification';
    }

    generateTroubleshootingTips(step) {
        return [
            'Review the definition of the concept used',
            'Check each calculation step by step',
            'Draw a diagram if helpful',
            'Verify you\'re using the correct formula or rule',
            'Ask: does this answer make geometric sense?'
        ];
    }

    generateGuidingQuestions(step, problem) {
        const questions = {
            'Given triangle sides': [
                'What are the three side lengths?',
                'Are they all positive numbers?',
                'What units are they in?'
            ],
            'Compare side lengths': [
                'Which sides might be equal?',
                'How do I check for equality?',
                'What does it mean if two are equal?'
            ],
            'Identify longest side': [
                'Which side appears longest?',
                'How do I verify it\'s the longest?',
                'Why do I need to know the longest side?'
            ],
            'Square the sides': [
                'What does squaring mean?',
                'Why do we square the sides?',
                'What do these squared values represent?'
            ],
            'Apply Pythagorean test': [
                'What am I comparing?',
                'What do the three outcomes (=, >, <) mean?',
                'Which side must be c?'
            ],
            'Triangle Inequality Theorem': [
                'What does the theorem say?',
                'Why must the sum be greater than?',
                'Do I need to check all three?'
            ]
        };

        return questions[step.step] || ['What is this step asking me to do?', 'Why is this step necessary?'];
    }

    generateProgressiveHints(step, problem) {
        const category = this.triangleTypes[problem.method]?.category || 'sides';
        const hintSet = this.hints[category] || this.hints.by_sides;

        return {
            level1: hintSet.level1 || 'Think about what information you have.',
            level2: hintSet.level2 || 'Consider the classification criteria.',
            level3: hintSet.level3 || 'Apply the specific test or comparison.',
            level4: hintSet.level4 || 'State the classification based on your findings.'
        };
    }

    breakIntoSubSteps(step) {
        if (step.comparisons) {
            return [
                'List all three sides clearly',
                'Compare first pair of sides',
                'Compare second pair of sides',
                'Compare third pair of sides',
                'Count how many pairs are equal',
                'Apply classification rule'
            ];
        }

        if (step.calculations) {
            return [
                'Identify which values to calculate',
                'Perform first calculation',
                'Perform second calculation',
                'Perform third calculation',
                'Write all results clearly'
            ];
        }

        return ['Understand the goal', 'Apply the technique', 'Verify the result'];
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try the same classification method with different side lengths',
            practiceHint: 'Start with simple whole numbers to build confidence',
            extension: 'Once comfortable, try with decimals or larger numbers'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What information is given in this step?',
            goal: 'What am I trying to determine?',
            strategy: 'What method or rule should I use?',
            execute: 'How do I perform this correctly?',
            verify: 'Does my result make geometric sense?'
        };
    }

    identifyDecisionPoints(step) {
        return [
            'Which classification criterion to use?',
            'How to handle measurement precision?',
            'Whether to use direct measurement or calculation?',
            'How to verify the result?'
        ];
    }

    suggestAlternativeMethods(step, problem) {
        const alternatives = {
            'Compare side lengths': [
                'Visual comparison with diagrams',
                'Numerical subtraction to find differences',
                'Ratio comparison'
            ],
            'Apply Pythagorean test': [
                'Calculate angles using law of cosines',
                'Measure angles directly if possible',
                'Use geometric construction'
            ]
        };

        return alternatives[step.step] || ['The chosen method is most appropriate for this classification'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by using its results`,
            progression: 'We are narrowing down the triangle classification',
            relationship: 'Each step reveals more about the triangle\'s properties'
        };
    }

    identifyPrerequisites(step, problemMethod) {
        const category = this.triangleTypes[problemMethod]?.category || 'sides';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Basic triangle properties'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Given triangle sides': ['triangle', 'side', 'length'],
            'Compare side lengths': ['equal', 'different', 'compare'],
            'Identify longest side': ['longest', 'maximum', 'hypotenuse'],
            'Square the sides': ['square', 'squared', 'exponent'],
            'Apply Pythagorean test': ['Pythagorean theorem', 'acute', 'right', 'obtuse'],
            'Triangle Inequality Theorem': ['inequality', 'valid', 'theorem'],
            'Verify angle sum property': ['angle', 'sum', 'degrees'],
            'Apply classification rule': ['classify', 'equilateral', 'isosceles', 'scalene']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPrompts(step) {
        return {
            before: 'Before starting, what do I need to identify or recall?',
            during: 'As I work, what should I watch out for?',
            after: 'After completing, how can I verify this is correct?'
        };
    }

    findRealWorldConnection(step, problem) {
        const connections = {
            'sides': 'Like comparing lengths of building materials to ensure they fit together properly',
            'angles': 'Like checking roof angles to ensure proper water drainage',
            'pythagorean': 'Like checking if a corner is square in construction',
            'inequality': 'Like checking if three road segments can connect to form a route'
        };

        const category = this.triangleTypes[problem.method]?.category;
        return connections[category] || 'Triangle properties appear in architecture, engineering, and design';
    }

    // GRAPH GENERATION

    generateTriangleGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        if (this.currentProblem.sides && this.currentProblem.sides.length === 3) {
            this.graphData = this.generateTriangleVisualization(
                this.currentProblem.sides,
                this.currentSolution.classification
            );
        }
    }

    generateTriangleVisualization(sides, classification) {
        return {
            type: 'triangle',
            sides: sides,
            classification: classification,
            description: `Visual representation of ${classification} triangle`,
            visualization: 'Draw triangle with labeled sides and angles'
        };
    }

    // WORKBOOK GENERATION

    generateTriangleWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createEnhancedStepsSection(),
            this.createTriangleLessonSection(),
            this.createSolutionSection(),
            this.createAnalysisSection(),
            this.createPropertiesSection(),
            this.createRealWorldApplicationSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection(),
            this.createPracticeProblemsSection(),
            this.createHistoricalContextSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Triangle Classification Mathematical Workbook',
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
            ['Classification Method', this.triangleTypes[this.currentProblem.method]?.name || this.currentProblem.method],
            ['Category', this.triangleTypes[this.currentProblem.method]?.category || 'general']
        ];

        if (this.currentProblem.sides) {
            problemData.push(['', '']);
            problemData.push(['Given Sides', '']);
            this.currentProblem.sides.forEach((side, index) => {
                problemData.push([`Side ${index + 1}`, side]);
            });
        }

        if (this.currentProblem.angles) {
            problemData.push(['', '']);
            problemData.push(['Given Angles', '']);
            this.currentProblem.angles.forEach((angle, index) => {
                problemData.push([`Angle ${index + 1}`, `${angle}°`]);
            });
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSection() {
        if (!this.prerequisiteChecks) return null;

        const category = this.triangleTypes[this.currentProblem.method]?.category;
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

            // Main step header
            if (step.subsection) {
                stepsData.push([`[${step.subsection}]`, '']);
            }
            stepsData.push([`Step ${step.stepNumber}`, step.description]);

            if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            if (step.comparisons) {
                stepsData.push(['Comparisons', '']);
                step.comparisons.forEach(comp => {
                    stepsData.push(['', comp]);
                });
            }

            if (step.calculations) {
                stepsData.push(['Calculations', '']);
                step.calculations.forEach(calc => {
                    stepsData.push(['', calc]);
                });
            }

            if (step.checks) {
                stepsData.push(['Inequality Checks', '']);
                step.checks.forEach(check => {
                    stepsData.push(['', check]);
                });
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

            // Enhanced explanations
            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
                stepsData.push(['Procedural', step.explanations.procedural]);
            }

            if (step.visualHint) {
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

            stepsData.push(['', '']); // Spacing
        });

        return {
            title: `Enhanced Step-by-Step Classification (${this.explanationLevel} level)`,
            type: 'steps',
            data: stepsData
        };
    }

    createTriangleLessonSection() {
        const { method } = this.currentProblem;
        const category = this.triangleTypes[method]?.category;

        const lessonData = [
            ['Key Triangle Concepts', ''],
            ['', 'Triangles are three-sided polygons'],
            ['', 'Sum of interior angles always equals 180°'],
            ['', 'Classified by sides (equilateral/isosceles/scalene)'],
            ['', 'Classified by angles (acute/right/obtuse)'],
            ['', 'Triangle inequality: sum of two sides > third side'],
            ['', ''],
            ['Important Properties', ''],
            ['', 'Longest side opposite largest angle'],
            ['', 'Shortest side opposite smallest angle'],
            ['', 'Equilateral triangles are always acute (60° angles)'],
            ['', 'Right triangles satisfy Pythagorean theorem']
        ];

        return {
            title: 'Triangle Classification Concepts',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [
            ['Classification', this.currentSolution.classification],
            ['Category', this.currentSolution.category]
        ];

        if (this.currentSolution.sideType) {
            solutionData.push(['By Sides', this.currentSolution.sideType]);
        }

        if (this.currentSolution.angleType) {
            solutionData.push(['By Angles', this.currentSolution.angleType]);
        }

        if (this.currentSolution.isValid !== undefined) {
            solutionData.push(['Valid Triangle', this.currentSolution.isValid ? 'Yes' : 'No']);
        }

        if (this.currentSolution.explanation) {
            solutionData.push(['', '']);
            solutionData.push(['Explanation', this.currentSolution.explanation]);
        }

        return {
            title: 'Classification Result',
            type: 'solution',
            data: solutionData
        };
    }

    createAnalysisSection() {
        if (!this.currentSolution) return null;

        const analysisData = [
            ['Classification Method', this.currentSolution.category],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Explanation Level', this.explanationLevel]
        ];

        if (this.currentSolution.properties) {
            analysisData.push(['', '']);
            analysisData.push(['Properties', '']);
            
            for (const [key, value] of Object.entries(this.currentSolution.properties)) {
                const readableKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                analysisData.push([readableKey, value.toString()]);
            }
        }

        return {
            title: 'Classification Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createPropertiesSection() {
        if (!this.currentSolution) return null;

        const propertiesData = [];

        if (this.currentSolution.sides) {
            propertiesData.push(['Sides', '']);
            const { a, b, c } = this.currentSolution.sides;
            propertiesData.push(['Side a', a]);
            propertiesData.push(['Side b', b]);
            propertiesData.push(['Side c (longest)', c]);
            propertiesData.push(['', '']);
        }

        if (this.currentSolution.angles) {
            propertiesData.push(['Angles', '']);
            const { angle1, angle2, angle3 } = this.currentSolution.angles;
            propertiesData.push(['Angle 1', `${angle1}°`]);
            propertiesData.push(['Angle 2', `${angle2}°`]);
            propertiesData.push(['Angle 3', `${angle3}°`]);
            propertiesData.push(['Sum', `${angle1 + angle2 + angle3}°`]);
            propertiesData.push(['', '']);
        }

        if (this.currentSolution.pythagoreanTest) {
            propertiesData.push(['Pythagorean Test', '']);
            const calc = this.currentSolution.pythagoreanTest;
            propertiesData.push(['a²', calc.aSquared]);
            propertiesData.push(['b²', calc.bSquared]);
            propertiesData.push(['c²', calc.cSquared]);
            propertiesData.push(['a² + b²', calc.sumSquares]);
            propertiesData.push(['Comparison', `a² + b² ${calc.comparison} c²`]);
        }

        if (propertiesData.length === 0) return null;

        return {
            title: 'Triangle Properties',
            type: 'properties',
            data: propertiesData
        };
    }

    createRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const applications = Object.values(this.realWorldProblems).slice(0, 4);

        if (applications.length === 0) return null;

        const appData = [
            ['Real-World Applications of Triangle Classification', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Use Case', app.application]);
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

        const notes = this.generateTrianglePedagogicalNotes(this.currentProblem.method);

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

        const alternatives = this.generateTriangleAlternativeMethods(this.currentProblem.method);

        return {
            title: 'Alternative Classification Methods',
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

        return {
            title: 'Historical Context',
            type: 'historical',
            data: [
                ['Ancient Origins', 'Triangles studied by ancient Egyptians, Babylonians, and Greeks'],
                ['Pythagorean Theorem', 'Known to Babylonians ~1800 BCE, proven by Pythagoras ~500 BCE'],
                ['Euclid\'s Elements', 'Systematic study of triangle properties (~300 BCE)'],
                ['Modern Applications', 'GPS, computer graphics, structural engineering, surveying'],
                ['Interesting Fact', 'The triangle is the only rigid polygon - cannot be deformed without changing side lengths']
            ]
        };
    }

    generateTrianglePedagogicalNotes(problemMethod) {
        const category = this.triangleTypes[problemMethod]?.category;

        const pedagogicalDatabase = {
            sides: {
                objectives: [
                    'Classify triangles by side lengths',
                    'Identify equilateral, isosceles, and scalene triangles',
                    'Understand relationship between equal sides and equal angles'
                ],
                keyConcepts: [
                    'Equal sides correspond to equal opposite angles',
                    'Equilateral is a special case of isosceles',
                    'Precision matters when comparing measurements'
                ],
                prerequisites: [
                    'Comparing numbers',
                    'Understanding equality',
                    'Basic measurement skills'
                ],
                commonDifficulties: [
                    'Confusing isosceles ("at least two") with "exactly two"',
                    'Floating-point precision in comparisons',
                    'Not checking all pairs systematically'
                ],
                teachingStrategies: [
                    'Use physical models (straws, sticks) to build triangles',
                    'Practice with whole numbers before decimals',
                    'Emphasize systematic pair-wise comparison'
                ],
                extensions: [
                    'Combined side and angle classification',
                    'Proving angle relationships',
                    'Congruence and similarity'
                ],
                assessment: [
                    'Can student identify all three types?',
                    'Does student check all pairs?',
                    'Can student explain why equilateral is also isosceles?'
                ]
            },
            angles: {
                objectives: [
                    'Classify triangles by angle measures',
                    'Identify acute, right, and obtuse triangles',
                    'Apply angle sum property',
                    'Find missing angles'
                ],
                keyConcepts: [
                    'Angle sum always equals 180°',
                    'Only one angle determines acute/right/obtuse',
                    'Largest angle determines classification',
                    'Equiangular triangles are also equilateral'
                ],
                prerequisites: [
                    'Angle measurement',
                    'Understanding of 90° reference',
                    'Addition to 180'
                ],
                commonDifficulties: [
                    'Checking only one angle instead of finding maximum',
                    'Forgetting to verify angle sum',
                    'Confusing obtuse (>90°) with reflex (>180°)'
                ],
                teachingStrategies: [
                    'Use protractors for hands-on measurement',
                    'Compare angles to square corners (90°)',
                    'Practice finding missing angles using 180° sum'
                ],
                extensions: [
                    'Exterior angles',
                    'Angle bisectors',
                    'Trigonometry in right triangles'
                ],
                assessment: [
                    'Can student identify largest angle?',
                    'Does student verify angle sum?',
                    'Can student find missing angle?'
                ]
            },
            pythagorean: {
                objectives: [
                    'Use Pythagorean theorem to classify triangles',
                    'Understand relationship between sides and angles',
                    'Apply a² + b² comparison to c²',
                    'Recognize Pythagorean triples'
                ],
                keyConcepts: [
                    'Pythagorean theorem determines largest angle type',
                    'Must use longest side as c',
                    'Three outcomes: equal (right), greater (acute), less (obtuse)',
                    'Squared values represent areas'
                ],
                prerequisites: [
                    'Pythagorean theorem knowledge',
                    'Squaring numbers',
                    'Comparing values',
                    'Identifying maximum'
                ],
                commonDifficulties: [
                    'Not using longest side as c',
                    'Forgetting to square sides',
                    'Misinterpreting comparison direction',
                    'Arithmetic errors in squaring'
                ],
                teachingStrategies: [
                    'Draw squares on triangle sides to visualize areas',
                    'Memorize common Pythagorean triples',
                    'Practice systematic: identify c, square all, compare'
                ],
                extensions: [
                    'Law of cosines for any triangle',
                    'Distance formula',
                    'Applications in coordinate geometry'
                ],
                assessment: [
                    'Does student identify longest side first?',
                    'Are calculations accurate?',
                    'Does student interpret comparison correctly?'
                ]
            },
            inequality: {
                objectives: [
                    'Apply triangle inequality theorem',
                    'Determine if three lengths can form a triangle',
                    'Understand geometric meaning of inequality',
                    'Recognize degenerate cases'
                ],
                keyConcepts: [
                    'Sum of two sides must exceed third',
                    'Shortest path between two points is straight line',
                    'All three inequalities must hold',
                    'Equality gives degenerate (straight line) case'
                ],
                prerequisites: [
                    'Addition',
                    'Inequality symbols (>)',
                    'Understanding "greater than"'
                ],
                commonDifficulties: [
                    'Only checking one inequality',
                    'Using ≥ instead of strict >',
                    'Not identifying longest side',
                    'Forgetting all three must be checked'
                ],
                teachingStrategies: [
                    'Physical demonstration with sticks/straws',
                    'Shortcut: check sum of two smallest > largest',
                    'Explain why equality means degenerate'
                ],
                extensions: [
                    'Quadrilateral inequality',
                    'Polygon perimeters',
                    'Optimization problems'
                ],
                assessment: [
                    'Does student check all three?',
                    'Does student recognize invalid cases?',
                    'Can student explain why inequality is necessary?'
                ]
            },
            complete: {
                objectives: [
                    'Classify triangles by both sides and angles',
                    'Combine multiple classification criteria',
                    'Verify consistency of classifications',
                    'Identify special triangles'
                ],
                keyConcepts: [
                    'Two independent classification systems',
                    'Some combinations impossible (e.g., equilateral obtuse)',
                    'Complete classification gives full picture',
                    'Special triangles have both classifications'
                ],
                prerequisites: [
                    'Side classification',
                    'Angle classification',
                    'Pythagorean theorem',
                    'Logical reasoning'
                ],
                commonDifficulties: [
                    'Confusion between two systems',
                    'Not recognizing impossible combinations',
                    'Forgetting to classify by both criteria'
                ],
                teachingStrategies: [
                    'Create classification table (sides × angles)',
                    'Identify which combinations are possible',
                    'Practice with diverse examples'
                ],
                extensions: [
                    'Congruence conditions',
                    'Similarity conditions',
                    'Triangle centers and special segments'
                ],
                assessment: [
                    'Can student classify by both criteria?',
                    'Does student recognize special cases?',
                    'Can student verify consistency?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Classify triangles correctly'],
            keyConcepts: ['Triangle properties and classification'],
            prerequisites: ['Basic geometry'],
            commonDifficulties: ['Various computational and conceptual challenges'],
            teachingStrategies: ['Systematic instruction and practice'],
            extensions: ['More complex triangle problems'],
            assessment: ['Verify understanding of classification']
        };
    }

    generateTriangleAlternativeMethods(problemMethod) {
        const category = this.triangleTypes[problemMethod]?.category;

        const alternativeDatabase = {
            sides: {
                primaryMethod: 'Direct Side Comparison',
                methods: [
                    {
                        name: 'Visual Measurement',
                        description: 'Measure sides with ruler and compare lengths visually'
                    },
                    {
                        name: 'Ratio Analysis',
                        description: 'Calculate ratios between sides to identify patterns'
                    },
                    {
                        name: 'Difference Method',
                        description: 'Subtract pairs and check if differences are zero'
                    }
                ],
                comparison: 'Direct comparison most efficient; visual good for learning; ratios useful for similar triangles'
            },
            angles: {
                primaryMethod: 'Angle Measurement and Comparison',
                methods: [
                    {
                        name: 'Protractor Measurement',
                        description: 'Physically measure each angle with protractor'
                    },
                    {
                        name: 'Angle Sum Property',
                        description: 'Use two angles and calculate third from 180° sum'
                    },
                    {
                        name: 'Visual Estimation',
                        description: 'Compare angles to 90° reference visually'
                    }
                ],
                comparison: 'Measurement most accurate; calculation works when two angles known; visual good for quick estimates'
            },
            pythagorean: {
                primaryMethod: 'Pythagorean Theorem Comparison',
                methods: [
                    {
                        name: 'Law of Cosines',
                        description: 'Calculate largest angle using c² = a² + b² - 2ab cos(C)'
                    },
                    {
                        name: 'Coordinate Geometry',
                        description: 'Place triangle in coordinate system and use distance formula'
                    },
                    {
                        name: 'Construction Method',
                        description: 'Draw triangle and measure largest angle with protractor'
                    }
                ],
                comparison: 'Pythagorean test fastest with sides only; law of cosines more general; measurement useful for verification'
            },
            inequality: {
                primaryMethod: 'Sum Comparison',
                methods: [
                    {
                        name: 'Physical Model',
                        description: 'Try to connect three physical segments (straws, sticks)'
                    },
                    {
                        name: 'All Three Checks',
                        description: 'Verify all three inequalities: a+b>c, b+c>a, a+c>b'
                    },
                    {
                        name: 'Shortest Path Principle',
                        description: 'Recognize that direct path is shorter than detour'
                    }
                ],
                comparison: 'Checking longest side sufficient; physical model builds intuition; all three checks most thorough'
            },
            complete: {
                primaryMethod: 'Combined Side and Pythagorean Classification',
                methods: [
                    {
                        name: 'Sequential Classification',
                        description: 'First classify by sides, then by angles separately'
                    },
                    {
                        name: 'Recognition of Special Triangles',
                        description: 'Identify if triangle matches known special types (3-4-5, 30-60-90, etc.)'
                    },
                    {
                        name: 'Comprehensive Measurement',
                        description: 'Measure all sides and angles, verify consistency'
                    }
                ],
                comparison: 'Sequential most systematic; special triangle recognition fastest when applicable; comprehensive verification most thorough'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard geometric classification',
            methods: [{
                name: 'Alternative approach',
                description: 'Other methods available depending on given information'
            }],
            comparison: 'Choose method based on available data and desired precision'
        };
    }
}

// Export the class
export default EnhancedTriangleClassificationMathematicalWorkbook;
