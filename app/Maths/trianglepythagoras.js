// Enhanced Triangle Pythagorean Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedTrianglePythagoreanMathematicalWorkbook {
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
        this.initializePythagoreanSolvers();
        this.initializePythagoreanLessons();
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
        this.initializeTriangleTypes();
        this.initializeSpecialTriangles();
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
            'perpendicular': '⊥', 'parallel': '∥', 'angle': '∠',
            'triangle': '△', 'square': '²', 'cube': '³'
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
                triangleFill: '#e3f2fd',
                triangleStroke: '#1976d2'
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
                triangleFill: '#fff3e0',
                triangleStroke: '#e65100'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializePythagoreanLessons() {
        this.lessons = {
            pythagorean_theorem: {
                title: "The Pythagorean Theorem",
                concepts: [
                    "Applies only to right triangles (triangles with a 90° angle)",
                    "Relates the three sides: two legs (a and b) and hypotenuse (c)",
                    "Formula: a² + b² = c²",
                    "The hypotenuse is always the longest side, opposite the right angle",
                    "Can be used to find any side if two sides are known"
                ],
                theory: "The Pythagorean Theorem states that in a right triangle, the square of the length of the hypotenuse equals the sum of the squares of the lengths of the other two sides. This fundamental relationship has been known for over 2,500 years.",
                keyFormulas: {
                    "Standard Form": "a² + b² = c²",
                    "Finding hypotenuse": "c = √(a² + b²)",
                    "Finding leg a": "a = √(c² - b²)",
                    "Finding leg b": "b = √(c² - a²)",
                    "Distance Formula": "d = √((x₂-x₁)² + (y₂-y₁)²)"
                },
                solvingSteps: [
                    "Identify the right triangle and label sides",
                    "Identify which side is the hypotenuse (opposite right angle)",
                    "Identify what you're looking for",
                    "Choose the correct form of the theorem",
                    "Substitute known values",
                    "Solve for the unknown (square, add/subtract, square root)",
                    "Verify answer makes sense (check triangle inequality)"
                ],
                applications: [
                    "Construction and carpentry (ensuring square corners)",
                    "Navigation and distance calculation",
                    "Computer graphics and game development",
                    "Physics (velocity components, forces)",
                    "Architecture and engineering",
                    "Sports field layout",
                    "Ladder safety calculations"
                ],
                visualRepresentation: "Right triangle with legs a and b forming the right angle, and hypotenuse c as the longest side opposite the right angle"
            },

            finding_hypotenuse: {
                title: "Finding the Hypotenuse",
                concepts: [
                    "Hypotenuse is the longest side in a right triangle",
                    "Always opposite the right angle",
                    "Use formula: c = √(a² + b²)",
                    "Must add the squares before taking square root",
                    "Result is always positive"
                ],
                theory: "When both legs of a right triangle are known, we can find the hypotenuse by squaring each leg, adding those squares, and taking the square root of the sum.",
                keyFormulas: {
                    "Hypotenuse Formula": "c = √(a² + b²)",
                    "Step-by-step": "1) Square leg a, 2) Square leg b, 3) Add results, 4) Take square root"
                },
                solvingSteps: [
                    "Identify the two legs (a and b)",
                    "Square the first leg: a²",
                    "Square the second leg: b²",
                    "Add the squared values: a² + b²",
                    "Take the square root: c = √(a² + b²)",
                    "Verify: c should be larger than both a and b"
                ],
                applications: [
                    "Finding diagonal distance across a rectangle",
                    "Calculating ramp length needed for a given height and base",
                    "Determining wire or cable length in construction",
                    "GPS distance calculations"
                ],
                commonMistakes: [
                    "Taking square root before adding squares",
                    "Adding the legs instead of their squares",
                    "Forgetting to take the square root at the end",
                    "Confusing which side is the hypotenuse"
                ]
            },

            finding_leg: {
                title: "Finding a Leg of a Right Triangle",
                concepts: [
                    "Need to know the hypotenuse and one leg",
                    "Use formula: leg = √(c² - other_leg²)",
                    "Subtract the known leg's square from hypotenuse's square",
                    "Then take square root of the difference",
                    "Leg must be shorter than hypotenuse"
                ],
                theory: "When the hypotenuse and one leg are known, we can rearrange the Pythagorean Theorem to solve for the unknown leg by subtracting the known leg's square from the hypotenuse's square, then taking the square root.",
                keyFormulas: {
                    "Finding leg a": "a = √(c² - b²)",
                    "Finding leg b": "b = √(c² - a²)",
                    "General form": "leg = √(hypotenuse² - known_leg²)"
                },
                solvingSteps: [
                    "Identify the hypotenuse (c)",
                    "Identify the known leg",
                    "Square the hypotenuse: c²",
                    "Square the known leg",
                    "Subtract: c² - known_leg²",
                    "Take square root: √(c² - known_leg²)",
                    "Verify: result should be less than hypotenuse"
                ],
                applications: [
                    "Finding missing dimension in construction",
                    "Calculating shadow length given object height and angle",
                    "Finding horizontal distance when slope and distance are known",
                    "Computer graphics coordinate calculations"
                ],
                commonMistakes: [
                    "Subtracting in wrong order (leg² - c² gives negative)",
                    "Forgetting to square before subtracting",
                    "Using wrong side as hypotenuse",
                    "Not checking if answer is reasonable"
                ]
            },

            pythagorean_triples: {
                title: "Pythagorean Triples",
                concepts: [
                    "Sets of three positive integers that satisfy a² + b² = c²",
                    "Most common: 3-4-5, 5-12-13, 8-15-17",
                    "Any multiple of a triple is also a triple",
                    "Useful for quick calculations and verification",
                    "Primitive triples have no common factors"
                ],
                theory: "Pythagorean triples are special sets of whole numbers that form the sides of right triangles. Recognizing these can speed up calculations and help verify solutions.",
                commonTriples: {
                    "Basic Triples": [
                        "3-4-5",
                        "5-12-13",
                        "8-15-17",
                        "7-24-25"
                    ],
                    "Common Multiples": [
                        "6-8-10 (2 × 3-4-5)",
                        "9-12-15 (3 × 3-4-5)",
                        "10-24-26 (2 × 5-12-13)",
                        "15-20-25 (5 × 3-4-5)"
                    ]
                },
                generatingFormulas: {
                    "Euclid's Formula": "For m > n > 0: a = m² - n², b = 2mn, c = m² + n²",
                    "Example": "m=2, n=1 gives 3-4-5 triple"
                },
                applications: [
                    "Quick mental calculations in construction",
                    "Verifying right angles without measurement",
                    "Estimating distances rapidly",
                    "Creating test problems and examples"
                ]
            },

            distance_formula: {
                title: "Distance Formula (Pythagorean Application)",
                concepts: [
                    "Finds distance between two points in coordinate plane",
                    "Based on Pythagorean Theorem",
                    "Formula: d = √((x₂-x₁)² + (y₂-y₁)²)",
                    "Differences in coordinates form the legs",
                    "Distance is the hypotenuse"
                ],
                theory: "The distance formula is a direct application of the Pythagorean Theorem where the horizontal and vertical distances between two points form the legs of a right triangle, and the direct distance is the hypotenuse.",
                keyFormulas: {
                    "Distance Formula": "d = √((x₂-x₁)² + (y₂-y₁)²)",
                    "Horizontal leg": "Δx = x₂ - x₁",
                    "Vertical leg": "Δy = y₂ - y₁",
                    "Simplified": "d = √(Δx² + Δy²)"
                },
                solvingSteps: [
                    "Identify coordinates of both points: (x₁,y₁) and (x₂,y₂)",
                    "Find horizontal distance: Δx = x₂ - x₁",
                    "Find vertical distance: Δy = y₂ - y₁",
                    "Square both differences: Δx² and Δy²",
                    "Add the squares: Δx² + Δy²",
                    "Take square root: d = √(Δx² + Δy²)",
                    "Simplify if possible"
                ],
                applications: [
                    "GPS and navigation systems",
                    "Computer graphics and animation",
                    "Game development (collision detection)",
                    "Mapping and geography",
                    "Physics (displacement calculations)",
                    "Data analysis (clustering algorithms)"
                ]
            },

            three_dimensional_distance: {
                title: "3D Distance (Extended Pythagorean)",
                concepts: [
                    "Extension of Pythagorean Theorem to 3D space",
                    "Formula: d = √((x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²)",
                    "Apply theorem twice: once for x-y plane, once for z",
                    "Three perpendicular components",
                    "Used in 3D graphics, physics, and engineering"
                ],
                theory: "The 3D distance formula extends the Pythagorean Theorem by first finding the distance in the xy-plane, then treating that as one leg and the z-difference as another leg of a new right triangle.",
                keyFormulas: {
                    "3D Distance": "d = √(Δx² + Δy² + Δz²)",
                    "Full Form": "d = √((x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²)",
                    "Two-step approach": "d_xy = √(Δx² + Δy²), then d = √(d_xy² + Δz²)"
                },
                applications: [
                    "3D modeling and CAD",
                    "Robotics and motion planning",
                    "Molecular chemistry (bond distances)",
                    "Astronomy (stellar distances)",
                    "Virtual reality applications"
                ]
            },

            converse_pythagorean: {
                title: "Converse of Pythagorean Theorem",
                concepts: [
                    "Tests if a triangle is a right triangle",
                    "If a² + b² = c², then triangle is right",
                    "If a² + b² > c², then triangle is acute",
                    "If a² + b² < c², then triangle is obtuse",
                    "c must be the longest side for test"
                ],
                theory: "The converse allows us to determine if a triangle is right-angled by checking if the sides satisfy the Pythagorean relationship. This is essential in construction and verification.",
                keyFormulas: {
                    "Right Triangle Test": "a² + b² = c² ⟹ right angle",
                    "Acute Triangle Test": "a² + b² > c² ⟹ all angles < 90°",
                    "Obtuse Triangle Test": "a² + b² < c² ⟹ one angle > 90°"
                },
                solvingSteps: [
                    "Identify the longest side (call it c)",
                    "Square all three sides",
                    "Add squares of two shorter sides",
                    "Compare sum to square of longest side",
                    "Determine triangle type based on comparison"
                ],
                applications: [
                    "Checking if corners are square in construction",
                    "Verifying right angles without protractor",
                    "Quality control in manufacturing",
                    "Surveying and land measurement"
                ]
            },

            pythagorean_word_problems: {
                title: "Word Problems Using Pythagorean Theorem",
                concepts: [
                    "Identify right triangle in real-world scenario",
                    "Determine which measurements represent legs and hypotenuse",
                    "Translate problem into mathematical form",
                    "Solve and interpret answer in context",
                    "Check if answer makes sense for the situation"
                ],
                problemTypes: {
                    "Ladder Problems": "Ladder against wall forms right triangle",
                    "Distance Problems": "Shortest path, diagonal across room/field",
                    "Height Problems": "Finding height using shadow or guy wire",
                    "Navigation": "Finding direct distance given north/east travel",
                    "Construction": "Diagonal bracing, roof pitch, ramps",
                    "Sports": "Baseball diamond, throwing distance"
                },
                solvingStrategy: [
                    "Draw a diagram showing the right triangle",
                    "Label known and unknown sides",
                    "Identify which side is the hypotenuse",
                    "Write the appropriate Pythagorean equation",
                    "Solve for the unknown",
                    "Check answer for reasonableness",
                    "State answer with appropriate units"
                ]
            }
        };
    }

    initializePythagoreanSolvers() {
        this.pythagoreanTypes = {
            find_hypotenuse: {
                patterns: [
                    /find.*hypotenuse/i,
                    /hypotenuse.*\?/i,
                    /legs.*(\d+\.?\d*).*(\d+\.?\d*)/i,
                    /a\s*=\s*(\d+\.?\d*).*b\s*=\s*(\d+\.?\d*)/i
                ],
                solver: this.solveForHypotenuse.bind(this),
                name: 'Finding the Hypotenuse',
                category: 'finding_hypotenuse',
                description: 'Given both legs, find the hypotenuse: c = √(a² + b²)'
            },

            find_leg: {
                patterns: [
                    /find.*leg/i,
                    /find.*a\s*=|find.*b\s*=/i,
                    /hypotenuse.*(\d+\.?\d*).*leg.*(\d+\.?\d*)/i,
                    /c\s*=\s*(\d+\.?\d*).*[ab]\s*=\s*(\d+\.?\d*)/i
                ],
                solver: this.solveForLeg.bind(this),
                name: 'Finding a Leg',
                category: 'finding_leg',
                description: 'Given hypotenuse and one leg, find the other leg'
            },

            verify_right_triangle: {
                patterns: [
                    /right triangle|is.*right/i,
                    /verify|check|test.*triangle/i,
                    /three sides.*(\d+\.?\d*).*(\d+\.?\d*).*(\d+\.?\d*)/i
                ],
                solver: this.verifyRightTriangle.bind(this),
                name: 'Verify Right Triangle',
                category: 'converse_pythagorean',
                description: 'Check if three sides form a right triangle'
            },

            pythagorean_triple: {
                patterns: [
                    /triple/i,
                    /pythagorean triple/i,
                    /integer.*sides/i
                ],
                solver: this.findPythagoreanTriple.bind(this),
                name: 'Pythagorean Triple',
                category: 'pythagorean_triples',
                description: 'Work with Pythagorean triples'
            },

            distance_formula: {
                patterns: [
                    /distance.*between.*points/i,
                    /coordinate.*distance/i,
                    /\(\s*(-?\d+\.?\d*)\s*,\s*(-?\d+\.?\d*)\s*\).*\(\s*(-?\d+\.?\d*)\s*,\s*(-?\d+\.?\d*)\s*\)/i
                ],
                solver: this.solveDistanceFormula.bind(this),
                name: 'Distance Formula',
                category: 'distance_formula',
                description: 'Find distance between two points using coordinates'
            },

            word_problem_ladder: {
                patterns: [
                    /ladder/i,
                    /wall.*ground/i,
                    /leaning/i
                ],
                solver: this.solveLadderProblem.bind(this),
                name: 'Ladder Word Problem',
                category: 'pythagorean_word_problems',
                description: 'Solve ladder-related Pythagorean problems'
            },

            word_problem_diagonal: {
                patterns: [
                    /diagonal/i,
                    /rectangle.*diagonal/i,
                    /rectangular.*path/i
                ],
                solver: this.solveDiagonalProblem.bind(this),
                name: 'Diagonal Word Problem',
                category: 'pythagorean_word_problems',
                description: 'Find diagonal distances'
            },

            word_problem_navigation: {
                patterns: [
                    /north.*east|east.*north/i,
                    /navigation|travel/i,
                    /direct.*distance/i
                ],
                solver: this.solveNavigationProblem.bind(this),
                name: 'Navigation Word Problem',
                category: 'pythagorean_word_problems',
                description: 'Find direct distance from perpendicular movements'
            },

            three_dimensional: {
                patterns: [
                    /3d|three.?dimensional/i,
                    /space.*distance/i,
                    /\(\s*(-?\d+\.?\d*)\s*,\s*(-?\d+\.?\d*)\s*,\s*(-?\d+\.?\d*)\s*\)/i
                ],
                solver: this.solve3DDistance.bind(this),
                name: '3D Distance',
                category: 'three_dimensional_distance',
                description: 'Calculate distance in 3D space'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            finding_hypotenuse: {
                'Square the legs': [
                    'Forgetting to square the legs before adding',
                    'Adding legs before squaring (a + b instead of a² + b²)',
                    'Squaring the sum instead of sum of squares'
                ],
                'Add the squares': [
                    'Multiplying instead of adding the squared values',
                    'Taking square root of each term separately'
                ],
                'Take square root': [
                    'Forgetting to take the square root at the end',
                    'Taking square root before adding squares',
                    'Getting negative result (should always be positive)'
                ]
            },
            finding_leg: {
                'Square hypotenuse and known leg': [
                    'Forgetting to square before subtracting',
                    'Squaring the difference instead of difference of squares',
                    'Using the wrong side as hypotenuse'
                ],
                'Subtract squares': [
                    'Subtracting in wrong order (leg² - c² gives negative)',
                    'Adding instead of subtracting',
                    'Forgetting that c² must be larger'
                ],
                'Take square root': [
                    'Getting negative under square root (means error in setup)',
                    'Forgetting square root step',
                    'Taking square root before subtracting'
                ]
            },
            converse_pythagorean: {
                'Identify longest side': [
                    'Not using longest side as c',
                    'Assuming a particular labeling instead of checking lengths'
                ],
                'Square all sides': [
                    'Forgetting to square one or more sides',
                    'Adding before squaring'
                ],
                'Compare values': [
                    'Misinterpreting the comparison result',
                    'Confusing acute and obtuse triangle tests'
                ]
            },
            word_problems: {
                'Draw diagram': [
                    'Not drawing a diagram at all',
                    'Misidentifying which angle is the right angle',
                    'Confusing which side is the hypotenuse'
                ],
                'Identify knowns and unknowns': [
                    'Mixing up which measurements are given',
                    'Not recognizing which side to solve for',
                    'Using wrong formula for the situation'
                ],
                'Set up equation': [
                    'Using wrong form of Pythagorean theorem',
                    'Substituting values in wrong positions',
                    'Unit conversion errors'
                ]
            }
        };

        this.errorPrevention = {
            hypotenuse_identification: {
                reminder: 'The hypotenuse is ALWAYS the longest side and ALWAYS opposite the right angle',
                method: 'Draw and label the triangle; mark the right angle; identify the opposite side'
            },
            square_before_add: {
                reminder: 'Must square EACH side BEFORE adding or subtracting',
                method: 'Write out a², b², c² separately before combining'
            },
            square_root_last: {
                reminder: 'Square root is the LAST step, after adding or subtracting squares',
                method: 'Complete all operations under the square root first'
            },
            check_reasonableness: {
                reminder: 'Hypotenuse must be longer than either leg; all sides must be positive',
                method: 'After solving, verify c > a and c > b; check all values are positive'
            },
            units: {
                reminder: 'All measurements must be in the same units before calculating',
                method: 'Convert all measurements to same unit first; include units in final answer'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why the Pythagorean theorem works and its geometric meaning',
                language: 'intuitive understanding of the relationship between sides'
            },
            procedural: {
                focus: 'Exact sequence of calculations to perform',
                language: 'step-by-step arithmetic instructions'
            },
            visual: {
                focus: 'Geometric representation and visual understanding',
                language: 'spatial relationships and diagrams'
            },
            algebraic: {
                focus: 'Mathematical formulas and symbolic manipulation',
                language: 'precise mathematical notation'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential steps only',
                examples: 'whole numbers and common triangles',
                diagrams: 'simple labeled triangles'
            },
            intermediate: {
                vocabulary: 'standard geometric terms',
                detail: 'main steps with brief explanations',
                examples: 'mix of whole numbers and decimals',
                diagrams: 'detailed triangles with all markings'
            },
            ELI5: {
                vocabulary: 'explain like I\'m 5 - simplest possible terms',
                detail: 'every tiny step explained with real-world comparisons',
                examples: 'familiar objects and situations',
                analogies: true,
                visualization: 'simple pictures and stories'
            },
            detailed: {
                vocabulary: 'full geometric and mathematical vocabulary',
                detail: 'comprehensive explanations with proofs',
                examples: 'abstract and generalized cases',
                diagrams: 'multiple representations and perspectives'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced difficulty progression',
                diagrams: 'build-up diagrams showing construction'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            ladder_safety: {
                scenario: "Ladder placement for safe climbing",
                context: "A ladder should be placed at a safe angle against a wall. The base should be about 1/4 of the ladder's length away from the wall.",
                equation: "ladder_length² = height² + base_distance²",
                examples: [
                    "A 20-foot ladder reaches 16 feet up a wall. How far is the base from the wall?",
                    "You need to reach 12 feet up. Your ladder is 15 feet long. How far from the wall should you place it?"
                ],
                safetyNote: "Following the 4-to-1 rule (height = 4 × base distance) ensures ladder stability"
            },

            construction_squaring: {
                scenario: "Ensuring corners are square in construction",
                context: "The 3-4-5 method ensures a perfect right angle when laying foundations or framing.",
                equation: "If sides measure 3, 4, and diagonal is 5, corner is square",
                examples: [
                    "Measure 3 feet along one wall, 4 feet along perpendicular wall. Diagonal should be 5 feet.",
                    "For larger projects, use multiples: 6-8-10, 9-12-15, etc."
                ],
                practicalTip: "Carpenters use this constantly - it's faster than a square or level for large structures"
            },

            baseball_diamond: {
                scenario: "Calculating distances on a baseball diamond",
                context: "Baseball diamonds are squares with 90-foot sides. Finding diagonal distances uses Pythagorean theorem.",
                equation: "diagonal = √(90² + 90²) ≈ 127.3 feet",
                examples: [
                    "Distance from home plate to second base",
                    "Distance from first base to third base",
                    "Catcher's throw to second base to catch a stealing runner"
                ],
                sportsFact: "Knowing these distances helps players position themselves and judge throw distances"
            },

            tv_screen_size: {
                scenario: "Understanding TV screen measurements",
                context: "TV sizes are measured diagonally. If you know width and height, you can find the advertised size.",
                equation: "diagonal = √(width² + height²)",
                examples: [
                    "A TV is 48 inches wide and 27 inches tall. What size is it? (≈55 inches)",
                    "Will a 65-inch TV fit in a 56-inch wide space? (Need to check dimensions)"
                ],
                consumerTip: "Screen diagonal doesn't tell you if it fits your space - check actual width and height"
            },

            walking_distance: {
                scenario: "Comparing walking routes",
                context: "Finding the shortest path when you can't go diagonally (like city blocks) vs. direct distance.",
                equation: "shortest_path = √(blocks_east² + blocks_north²)",
                examples: [
                    "Walk 3 blocks east, 4 blocks north. Actual path = 7 blocks, direct distance ≈ 5 blocks",
                    "Which is shorter: path around or cutting through the park diagonally?"
                ],
                urbanPlanning: "City planners use this to determine optimal locations for services"
            },

            guy_wire: {
                scenario: "Guy wire length for supporting structures",
                context: "Cell towers, flagpoles, and antennas need guy wires for stability. Calculate exact length needed.",
                equation: "wire_length = √(height² + anchor_distance²)",
                examples: [
                    "Tower is 100 feet tall, anchor is 40 feet from base. How much wire needed?",
                    "Guy wire is 50 feet long, anchored 30 feet from base. How high up does it attach?"
                ],
                engineering: "Account for extra length for attachments and ground anchoring"
            },

            ramp_building: {
                scenario: "Wheelchair ramp specifications",
                context: "ADA requires 1:12 slope (1 foot rise per 12 feet run). Calculate ramp length.",
                equation: "ramp_length = √(rise² + run²)",
                examples: [
                    "Need to rise 2 feet. Run must be 24 feet (1:12 ratio). Ramp length ≈ 24.08 feet",
                    "Have 30 feet of space. Rising 2.5 feet. Is slope gentle enough?"
                ],
                accessibility: "Proper ramp design ensures wheelchair users can safely navigate elevation changes"
            },

            roof_pitch: {
                scenario: "Calculating roof measurements",
                context: "Roof pitch affects materials needed. Finding rafter length requires Pythagorean theorem.",
                equation: "rafter_length = √(rise² + run²)",
                examples: [
                    "Roof rises 6 feet over 12 foot run. Rafter length needed?",
                    "Building is 24 feet wide, roof peak is 8 feet above walls. Total rafter material?"
                ],
                construction: "Multiply rafter length by number of rafters to find total lumber needed"
            },

            screen_resolution: {
                scenario: "Monitor size and pixel density",
                context: "Screen resolution and physical size determine pixel density (PPI - pixels per inch).",
                equation: "diagonal_pixels = √(width_pixels² + height_pixels²), then PPI = diagonal_pixels / diagonal_inches",
                examples: [
                    "1920×1080 resolution on 24-inch monitor. What's the PPI?",
                    "Want at least 100 PPI. How big can a 1920×1080 screen be?"
                ],
                technology: "Higher PPI means sharper image - important for graphics work and readability"
            },

            navigation_gps: {
                scenario: "GPS distance calculations",
                context: "GPS uses Pythagorean theorem (extended to 3D) to calculate distances between coordinates.",
                equation: "distance = √(Δlatitude² + Δlongitude²) [simplified]",
                examples: [
                    "Two locations differ by 3 degrees latitude and 4 degrees longitude. Direct distance?",
                    "Hiking trail goes 2 miles north, then 1.5 miles east. How far are you from start?"
                ],
                realWorld: "Actual GPS uses spherical coordinates, but Pythagorean theorem is the foundation"
            },

            kite_flying: {
                scenario: "Kite string length and height",
                context: "If you know how much string is out and horizontal distance, you can find kite height.",
                equation: "height = √(string_length² - horizontal_distance²)",
                examples: [
                    "Released 100 feet of string. Kite is 60 feet away horizontally. How high is it?",
                    "Kite is 80 feet high and 50 feet away horizontally. How much string is out?"
                ],
                recreation: "Wind angle affects these calculations - this assumes straight line from hand to kite"
            },

            picture_hanging: {
                scenario: "Hanging pictures level and centered",
                context: "Using measurements to ensure pictures are properly aligned and spaced.",
                equation: "diagonal_spacing = √(horizontal² + vertical²)",
                examples: [
                    "Two picture hangers are 16 inches apart horizontally. Diagonal distance to check?",
                    "Want pictures 12 inches apart diagonally at 45° angle. How far apart horizontally?"
                ],
                interiorDesign: "Proper spacing creates visual balance and professional appearance"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            finding_hypotenuse: {
                skills: [
                    'Squaring numbers',
                    'Adding whole numbers and decimals',
                    'Taking square roots',
                    'Understanding right triangles'
                ],
                priorKnowledge: [
                    'What a right angle is (90°)',
                    'Identifying the hypotenuse as longest side',
                    'Basic calculator use for square roots',
                    'Understanding that hypotenuse is opposite the right angle'
                ],
                checkQuestions: [
                    "What is 3²?",
                    "What is 4²?",
                    "What is 9 + 16?",
                    "What is √25?",
                    "Which side is the hypotenuse in a right triangle?"
                ]
            },

            finding_leg: {
                skills: [
                    'Squaring numbers',
                    'Subtracting whole numbers and decimals',
                    'Taking square roots',
                    'Understanding that hypotenuse is longest'
                ],
                priorKnowledge: [
                    'Hypotenuse must be larger than either leg',
                    'Order matters in subtraction',
                    'Square root of difference of squares',
                    'Checking answer reasonableness'
                ],
                checkQuestions: [
                    "What is 5²?",
                    "What is 25 - 9?",
                    "What is √16?",
                    "If c = 5 and a = 3, can we find b?",
                    "Should b be larger or smaller than c?"
                ]
            },

            converse_pythagorean: {
                skills: [
                    'Squaring three numbers',
                    'Adding two numbers',
                    'Comparing numerical values',
                    'Identifying the longest side'
                ],
                priorKnowledge: [
                    'Understanding equality, greater than, less than',
                    'Triangle inequality basics',
                    'Right, acute, and obtuse angles',
                    'The Pythagorean theorem itself'
                ],
                checkQuestions: [
                    "What is 3² + 4²?",
                    "What is 5²?",
                    "Is 25 equal to, greater than, or less than 3² + 4²?",
                    "Which is the longest side: 3, 4, or 5?",
                    "What is a right angle?"
                ]
            },

            distance_formula: {
                skills: [
                    'Coordinate plane understanding',
                    'Subtracting signed numbers',
                    'Squaring negative numbers',
                    'Pythagorean theorem application'
                ],
                priorKnowledge: [
                    'Plotting points on coordinate plane',
                    'Understanding that (x₂ - x₁) can be negative',
                    'Squaring makes all values positive',
                    'Distance is always positive'
                ],
                checkQuestions: [
                    "What is the difference: 5 - 2?",
                    "What is the difference: 2 - 5?",
                    "What is (-3)²?",
                    "On a graph, how do you find horizontal distance between points?",
                    "How do you find vertical distance?"
                ]
            },

            word_problems: {
                skills: [
                    'Reading comprehension',
                    'Drawing diagrams from descriptions',
                    'Identifying right triangles in real situations',
                    'All Pythagorean theorem skills'
                ],
                priorKnowledge: [
                    'Translating words to mathematical setup',
                    'Understanding common scenarios (ladder, distance, etc.)',
                    'Unit awareness and conversion',
                    'Checking answer reasonableness in context'
                ],
                checkQuestions: [
                    "If a ladder leans against a wall, where is the right angle?",
                    "In 'walk 3 blocks east then 4 blocks north', what forms the legs?",
                    "What's the difference between path distance and direct distance?",
                    "Do all measurements need to be in the same units?",
                    "Should the hypotenuse be longer or shorter than walking around the corner?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            geometric_squares: {
                description: "Visual proof using squares on each side",
                analogy: "Like puzzle pieces - the two smaller squares together equal the large square",
                visualization: "Draw squares on all three sides of right triangle; area of two smaller squares = area of largest square",
                suitableFor: ['finding_hypotenuse', 'pythagorean_theorem'],
                explanation: "The areas of the squares visually demonstrate why a² + b² = c²",
                historicalNote: "One of the oldest known proofs, possibly used by Pythagoras himself"
            },

            right_triangle_diagram: {
                description: "Standard labeled right triangle",
                analogy: "Like a map showing where everything is",
                visualization: "Draw right triangle with right angle marked, sides labeled a, b, c",
                suitableFor: ['all_pythagorean'],
                explanation: "Clear labeling prevents confusion about which side is which",
                keyFeatures: "Mark right angle with small square; label hypotenuse clearly"
            },

            number_line_squares: {
                description: "Showing squared values on number line",
                analogy: "Like measuring how much bigger numbers get when squared",
                visualization: "Number line showing 3, 4, 5 and their squares 9, 16, 25",
                suitableFor: ['finding_hypotenuse', 'pythagorean_triples'],
                explanation: "Helps visualize that 9 + 16 = 25, so √25 = 5"
            },

            coordinate_grid: {
                description: "Right triangle on coordinate plane",
                analogy: "Like using a city map grid to find distances",
                visualization: "Plot two points; horizontal and vertical segments form legs; diagonal is hypotenuse",
                suitableFor: ['distance_formula', 'finding_hypotenuse'],
                explanation: "Shows how Pythagorean theorem calculates straight-line distance"
            },

            real_world_photo: {
                description: "Photograph of ladder against wall or similar",
                analogy: "Seeing it in real life makes it click",
                visualization: "Picture showing actual right triangle in everyday situation",
                suitableFor: ['word_problems', 'all_pythagorean'],
                explanation: "Connects abstract concept to concrete reality"
            },

            step_by_step_boxes: {
                description: "Flowchart showing calculation steps",
                analogy: "Like a recipe with one step per box",
                visualization: "Boxes connected by arrows: square → add → square root",
                suitableFor: ['finding_hypotenuse', 'finding_leg'],
                explanation: "Makes the process crystal clear and sequential"
            },

            comparison_table: {
                description: "Table showing legs vs. hypotenuse",
                analogy: "Like comparing before and after",
                visualization: "Table with columns: leg a, leg b, hypotenuse c, showing a² + b² = c²",
                suitableFor: ['pythagorean_triples', 'converse_pythagorean'],
                explanation: "Organized presentation makes relationships obvious"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "Find the hypotenuse when a = 3 and b = 4",
                    solution: 5,
                    steps: [
                        "Square leg a: 3² = 9",
                        "Square leg b: 4² = 16",
                        "Add the squares: 9 + 16 = 25",
                        "Take square root: √25 = 5",
                        "c = 5"
                    ],
                    difficulty: "easy",
                    category: "finding_hypotenuse",
                    note: "This is the famous 3-4-5 Pythagorean triple"
                },
                {
                    problem: "Find the hypotenuse when a = 6 and b = 8",
                    solution: 10,
                    steps: [
                        "Square leg a: 6² = 36",
                        "Square leg b: 8² = 64",
                        "Add: 36 + 64 = 100",
                        "Square root: √100 = 10",
                        "c = 10"
                    ],
                    difficulty: "easy",
                    category: "finding_hypotenuse",
                    note: "This is 2 times the 3-4-5 triple"
                },
                {
                    problem: "Find leg b when c = 13 and a = 5",
                    solution: 12,
                    steps: [
                        "Square hypotenuse: 13² = 169",
                        "Square known leg: 5² = 25",
                        "Subtract: 169 - 25 = 144",
                        "Square root: √144 = 12",
                        "b = 12"
                    ],
                    difficulty: "easy",
                    category: "finding_leg",
                    note: "This is the 5-12-13 Pythagorean triple"
                }
            ],

            intermediate: [
                {
                    problem: "Find the hypotenuse when a = 5 and b = 12",
                    solution: 13,
                    steps: [
                        "Square first leg: 5² = 25",
                        "Square second leg: 12² = 144",
                        "Add: 25 + 144 = 169",
                        "Take square root: √169 = 13",
                        "Hypotenuse = 13"
                    ],
                    difficulty: "medium",
                    category: "finding_hypotenuse",
                    verification: "Check: 5² + 12² = 25 + 144 = 169 = 13² ✓"
                },
                {
                    problem: "A ladder is 10 feet long. The base is 6 feet from the wall. How high does it reach?",
                    solution: 8,
                    steps: [
                        "Draw diagram: ladder = hypotenuse = 10, base = 6, height = ?",
                        "Use: a² + b² = c² → 6² + h² = 10²",
                        "Calculate: 36 + h² = 100",
                        "Subtract: h² = 100 - 36 = 64",
                        "Square root: h = √64 = 8 feet"
                    ],
                    difficulty: "medium",
                    category: "word_problems",
                    realWorld: "This is a common ladder safety problem"
                },
                {
                    problem: "Is a triangle with sides 7, 24, 25 a right triangle?",
                    solution: "Yes",
                    steps: [
                        "Identify longest side: 25 (this is c)",
                        "Square all sides: 7² = 49, 24² = 576, 25² = 625",
                        "Add smaller squares: 49 + 576 = 625",
                        "Compare: 625 = 625 ✓",
                        "Yes, it's a right triangle"
                    ],
                    difficulty: "medium",
                    category: "converse_pythagorean",
                    note: "7-24-25 is a Pythagorean triple"
                }
            ],

            advanced: [
                {
                    problem: "Find the distance between points (1, 2) and (4, 6)",
                    solution: 5,
                    steps: [
                        "Find horizontal distance: Δx = 4 - 1 = 3",
                        "Find vertical distance: Δy = 6 - 2 = 4",
                        "Square both: Δx² = 9, Δy² = 16",
                        "Add: 9 + 16 = 25",
                        "Square root: d = √25 = 5 units"
                    ],
                    difficulty: "hard",
                    category: "distance_formula",
                    note: "This creates a 3-4-5 triangle on the coordinate plane"
                },
                {
                    problem: "Find hypotenuse when a = 7.5 and b = 10",
                    solution: 12.5,
                    steps: [
                        "Square: 7.5² = 56.25",
                        "Square: 10² = 100",
                        "Add: 56.25 + 100 = 156.25",
                        "Square root: √156.25 = 12.5"
                    ],
                    difficulty: "hard",
                    category: "finding_hypotenuse",
                    note: "This is 2.5 times the 3-4-5 triple (works with decimals too!)"
                },
                {
                    problem: "A 25-foot ladder reaches 24 feet up a wall. The safety rule says base should be 1/4 of ladder length from wall. Is this ladder safe?",
                    solution: "Yes, safe",
                    steps: [
                        "Find current base distance: 25² = 24² + b²",
                        "Calculate: 625 = 576 + b²",
                        "Solve: b² = 49, so b = 7 feet",
                        "Safety rule: base should be 25/4 = 6.25 feet",
                        "Actual base (7) > minimum (6.25), so YES, it's safe"
                    ],
                    difficulty: "hard",
                    category: "word_problems",
                    realWorld: "Combines Pythagorean theorem with practical safety standards"
                }
            ],

            byCategory: {
                finding_hypotenuse: [
                    { legs: [3, 4], hypotenuse: 5, note: "Basic triple" },
                    { legs: [5, 12], hypotenuse: 13, note: "Common triple" },
                    { legs: [8, 15], hypotenuse: 17, note: "Larger triple" },
                    { legs: [6, 8], hypotenuse: 10, note: "2× of 3-4-5" },
                    { legs: [9, 12], hypotenuse: 15, note: "3× of 3-4-5" }
                ],
                finding_leg: [
                    { hypotenuse: 5, leg: 3, missing: 4 },
                    { hypotenuse: 13, leg: 5, missing: 12 },
                    { hypotenuse: 17, leg: 8, missing: 15 },
                    { hypotenuse: 10, leg: 6, missing: 8 }
                ],
                pythagorean_triples: [
                    [3, 4, 5],
                    [5, 12, 13],
                    [8, 15, 17],
                    [7, 24, 25],
                    [6, 8, 10],
                    [9, 12, 15],
                    [12, 16, 20]
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            adding_before_squaring: {
                misconception: "Thinking (a + b)² equals a² + b²",
                reality: "(a + b)² = a² + 2ab + b², which is NOT the same as a² + b²",
                correctiveExample: "For a=3, b=4: (3+4)² = 49, but 3² + 4² = 25. These are different!",
                commonIn: ['finding_hypotenuse'],
                correction: "Must square EACH number FIRST, then add the results"
            },

            square_root_too_early: {
                misconception: "Taking square root of each term before adding",
                reality: "Must add the squared values first, then take square root of the sum",
                correctiveExample: "√(9) + √(16) = 3 + 4 = 7, but √(9 + 16) = √25 = 5. Need the second approach!",
                commonIn: ['finding_hypotenuse'],
                correction: "Complete all operations under the square root symbol before taking the square root"
            },

            wrong_subtraction_order: {
                misconception: "When finding a leg, subtracting leg² from c² (backwards)",
                reality: "Must subtract the smaller value from the larger: c² - a²",
                correctiveExample: "If c=5, a=3: correct is 25-9=16, wrong is 9-25=-16 (can't have negative!)",
                commonIn: ['finding_leg'],
                correction: "Hypotenuse squared is always larger, so c² comes first in subtraction"
            },

            hypotenuse_confusion: {
                misconception: "Thinking any side can be the hypotenuse",
                reality: "Hypotenuse is ALWAYS the longest side and ALWAYS opposite the right angle",
                correctiveExample: "In triangle with sides 3,4,5: hypotenuse must be 5 (longest), not 3 or 4",
                commonIn: ['all_categories'],
                correction: "Always identify the right angle first; the opposite side is the hypotenuse"
            },

            forgetting_square_root: {
                misconception: "Stopping after adding squares without taking square root",
                reality: "Final step for hypotenuse is always taking square root of the sum",
                correctiveExample: "If a=3, b=4: answer is √25=5, not 25!",
                commonIn: ['finding_hypotenuse'],
                correction: "Remember: c² = a² + b², so c = √(a² + b²)"
            },

            unit_mixing: {
                misconception: "Using different units without converting",
                reality: "All measurements must be in the same units before calculating",
                correctiveExample: "Can't use a=3 feet and b=40 inches together. Convert: 40 in = 3.33 ft first",
                commonIn: ['word_problems'],
                correction: "Convert all measurements to the same unit before starting calculation"
            },

            converse_test_error: {
                misconception: "Not using the longest side as c when testing for right triangle",
                reality: "Must identify longest side first and use it as c in the formula",
                correctiveExample: "For sides 5,12,13: must test if 5²+12²=13², not if 5²+13²=12²",
                commonIn: ['converse_pythagorean'],
                correction: "Always identify longest side; it goes on the right side of the equation alone"
            },

            negative_square_root: {
                misconception: "Getting confused when square root calculation seems to give negative answer",
                reality: "If you get a negative value under the square root, you made an error in setup",
                correctiveExample: "If calculating √(16-25), something is wrong! Check: is hypotenuse really the longest side?",
                commonIn: ['finding_leg'],
                correction: "Square roots of positive numbers are positive; negative result means setup error"
            },

            diagram_mislabeling: {
                misconception: "Labeling sides without checking which is which",
                reality: "Careful labeling is crucial: legs form right angle, hypotenuse is opposite",
                correctiveExample: "Don't just call sides a, b, c randomly. Check: which is longest? Where's the right angle?",
                commonIn: ['word_problems'],
                correction: "Draw diagram carefully, mark right angle clearly, label hypotenuse explicitly"
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            pythagorean_theorem: {
                analogy: "Pizza boxes stacking",
                explanation: "Imagine square pizza boxes on each side of a right triangle. The two smaller boxes together have exactly the same total area as the large box. That's a² + b² = c²!",
                suitableFor: ['finding_hypotenuse', 'pythagorean_theorem'],
                ELI5: "It's like having 2 small square blankets that together cover the same space as 1 big square blanket"
            },

            squaring_numbers: {
                analogy: "Making square gardens",
                explanation: "Squaring a number is like making a square garden. If one side is 3 feet, the garden is 3×3 = 9 square feet. That's 3²!",
                suitableFor: ['all_categories'],
                ELI5: "When you square a number, imagine making a square where each side is that number. Count all the little squares inside!"
            },

            square_root: {
                analogy: "Finding the fence length from garden area",
                explanation: "If you know a square garden is 25 square feet, the square root tells you each side is 5 feet. √25 = 5 is finding the side from the area.",
                suitableFor: ['finding_hypotenuse', 'finding_leg'],
                ELI5: "Square root is like asking: 'What number times itself gives me this?' If you have 25 candies in a perfect square, each side has 5 candies."
            },

            right_triangle: {
                analogy: "Corner of a room",
                explanation: "A right triangle is like the corner where two walls meet the floor - the corner is the right angle, and an imaginary line across the corner is the hypotenuse.",
                suitableFor: ['all_categories'],
                ELI5: "Stand in a corner of a room. The two walls make a right angle. Now imagine a rope stretched from where one wall meets the floor to where the other wall meets the floor. That's the hypotenuse!"
            },

            ladder_problem: {
                analogy: "Slide at playground",
                explanation: "A ladder against a wall is like a playground slide. The ground is one leg, the wall is the other leg, and the ladder/slide is the hypotenuse.",
                suitableFor: ['word_problems', 'finding_hypotenuse', 'finding_leg'],
                ELI5: "Think of a slide. It goes up high (one leg), stretches out from the base (other leg), and you slide down the long part (hypotenuse)!"
            },

            distance_formula: {
                analogy: "Walking around the block vs. cutting through",
                explanation: "If you walk east then north (following streets), that's the two legs. The direct diagonal path (cutting through) is the hypotenuse.",
                suitableFor: ['distance_formula'],
                ELI5: "Imagine you're at one corner of a rectangular park. To get to the opposite corner, you could walk along two edges (long way) or cut straight across (short way). The straight across is what Pythagorean theorem finds!"
            },

            pythagorean_triple: {
                analogy: "Perfect recipe ratios",
                explanation: "Like how 1 cup flour, 1/2 cup sugar, 1/4 cup butter makes a recipe, 3-4-5 is a perfect ratio that always works for right triangles. Double it (6-8-10) and it still works!",
                suitableFor: ['pythagorean_triples'],
                ELI5: "Some number groups are best friends that always work together perfectly to make right triangles, like 3-4-5 or 5-12-13. They're like a team that never fails!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            finding_hypotenuse: {
                level1: "What do you know about the two legs of the triangle?",
                level2: "You need to square each leg. What is a² and what is b²?",
                level3: "Now add those squared values together. What is a² + b²?",
                level4: "The hypotenuse is the square root of that sum: c = √(a² + b²)",
                level5: "Calculate √({sum}) = {answer}"
            },

            finding_leg: {
                level1: "What do you know about the hypotenuse and one leg?",
                level2: "You need to find the missing leg. Which formula do you use?",
                level3: "Square the hypotenuse and subtract the known leg squared",
                level4: "Use: unknown_leg = √(c² - known_leg²)",
                level5: "Calculate: √({c_squared} - {leg_squared}) = √{difference} = {answer}"
            },

            verify_right_triangle: {
                level1: "Which side is the longest? That should be c.",
                level2: "Square all three sides separately",
                level3: "Add the squares of the two shorter sides",
                level4: "Does that sum equal the square of the longest side?",
                level5: "If a² + b² = c², it's a right triangle. If a² + b² > c², it's acute. If a² + b² < c², it's obtuse."
            },

            word_problems: {
                level1: "What is the problem asking you to find?",
                level2: "Can you draw a diagram showing the right triangle?",
                level3: "Label what you know and what you need to find",
                level4: "Which is the hypotenuse? Remember, it's opposite the right angle and longest!",
                level5: "Now use the appropriate Pythagorean formula based on what you're finding"
            },

            distance_formula: {
                level1: "What are the coordinates of the two points?",
                level2: "Find the horizontal distance (difference in x-coordinates)",
                level3: "Find the vertical distance (difference in y-coordinates)",
                level4: "These distances are the legs of a right triangle!",
                level5: "Use Pythagorean theorem: d = √((x₂-x₁)² + (y₂-y₁)²)"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Find the hypotenuse: a = 3, b = 4",
                    answer: 5,
                    assesses: "finding_hypotenuse",
                    difficulty: "basic"
                },
                {
                    question: "Find the missing leg: c = 10, a = 6",
                    answer: 8,
                    assesses: "finding_leg",
                    difficulty: "basic"
                },
                {
                    question: "Is a triangle with sides 5, 12, 13 a right triangle?",
                    answer: "Yes",
                    assesses: "converse_pythagorean",
                    difficulty: "intermediate"
                },
                {
                    question: "Find distance between (0,0) and (3,4)",
                    answer: 5,
                    assesses: "distance_formula",
                    difficulty: "intermediate"
                }
            ],

            formative: [
                {
                    question: "In the Pythagorean theorem a² + b² = c², which side is c?",
                    options: ["Either leg", "The hypotenuse", "The shortest side", "Any side"],
                    correct: "The hypotenuse",
                    explanation: "c is always the hypotenuse, the longest side opposite the right angle"
                },
                {
                    question: "To find the hypotenuse when given both legs, you should:",
                    options: [
                        "Add the legs then take square root",
                        "Square each leg, add them, then take square root",
                        "Take square root of each leg then add",
                        "Multiply the legs then take square root"
                    ],
                    correct: "Square each leg, add them, then take square root",
                    explanation: "The formula is c = √(a² + b²): square first, add, then square root"
                },
                {
                    question: "If a = 6 and b = 8, what is a² + b²?",
                    options: ["14", "48", "100", "196"],
                    correct: "100",
                    explanation: "6² + 8² = 36 + 64 = 100"
                },
                {
                    question: "The hypotenuse is always:",
                    options: [
                        "The shortest side",
                        "The longest side",
                        "One of the legs",
                        "Either leg or the longest side"
                    ],
                    correct: "The longest side",
                    explanation: "The hypotenuse is always the longest side in a right triangle"
                }
            ],

            summative: [
                {
                    question: "A ladder is 20 feet long. If the base is 12 feet from the wall, how high does it reach?",
                    answer: 16,
                    showsWork: true,
                    rubric: {
                        diagram: 1,
                        identify_knowns: 1,
                        correct_formula: 1,
                        calculation: 2,
                        units: 1
                    }
                },
                {
                    question: "Find the distance between points (-2, 3) and (2, 6)",
                    answer: 5,
                    showsWork: true,
                    rubric: {
                        find_delta_x: 1,
                        find_delta_y: 1,
                        square_both: 1,
                        add: 1,
                        square_root: 1,
                        final_answer: 1
                    }
                }
            ],

            byDifficulty: {
                easy: [
                    "Find c: a = 3, b = 4",
                    "Find c: a = 5, b = 12",
                    "Find c: a = 6, b = 8",
                    "Find b: c = 5, a = 3",
                    "Find a: c = 13, b = 12"
                ],
                medium: [
                    "Find c: a = 7, b = 24",
                    "Find b: c = 17, a = 8",
                    "Find c: a = 9, b = 12",
                    "Is triangle with sides 8, 15, 17 a right triangle?",
                    "Distance from (1,2) to (4,6)"
                ],
                hard: [
                    "A 25-foot ladder reaches 20 feet up a wall. How far is the base from the wall?",
                    "Walking 7 miles north then 9 miles east. How far from start?",
                    "Find diagonal of rectangle: 15 ft × 8 ft",
                    "Is triangle with sides 11, 12, 15 a right triangle?",
                    "Distance from (-3, -2) to (5, 4)"
                ]
            },

            byObjective: {
                canFindHypotenuse: [
                    "a = 3, b = 4, find c",
                    "a = 5, b = 12, find c",
                    "a = 8, b = 15, find c",
                    "a = 7, b = 24, find c",
                    "a = 6, b = 8, find c"
                ],
                canFindLeg: [
                    "c = 5, a = 3, find b",
                    "c = 13, a = 5, find b",
                    "c = 17, b = 15, find a",
                    "c = 25, a = 7, find b",
                    "c = 10, b = 6, find a"
                ],
                canVerifyRightTriangle: [
                    "Sides: 3, 4, 5",
                    "Sides: 5, 12, 13",
                    "Sides: 7, 24, 25",
                    "Sides: 6, 7, 8",
                    "Sides: 9, 12, 15"
                ],
                canSolveWordProblems: [
                    "Ladder 15 ft long, base 9 ft from wall. How high does it reach?",
                    "Walk 6 blocks north, 8 blocks east. Direct distance?",
                    "Rectangle 12 ft by 5 ft. Find diagonal.",
                    "TV screen 24 in wide, 18 in tall. Diagonal size?",
                    "Baseball diamond has 90 ft sides. Distance from home to second base?"
                ],
                canUseDistanceFormula: [
                    "Distance from (0,0) to (3,4)",
                    "Distance from (1,2) to (5,5)",
                    "Distance from (-2,1) to (2,4)",
                    "Distance from (0,3) to (4,0)",
                    "Distance from (-1,-1) to (2,3)"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "finding_unknown_side": {
                    question: "What are you looking for?",
                    answers: {
                        "hypotenuse": "Use c = √(a² + b²)",
                        "leg": "Use leg = √(c² - other_leg²)",
                        "verify_right_triangle": "Check if a² + b² = c²"
                    }
                },
                "word_problem": {
                    question: "What type of problem?",
                    answers: {
                        "ladder_against_wall": "Height, base, and ladder form right triangle; ladder is hypotenuse",
                        "walking_distance": "East/west and north/south are legs; direct distance is hypotenuse",
                        "diagonal": "Length and width are legs; diagonal is hypotenuse",
                        "height_from_distance": "Usually involves finding a leg when hypotenuse is known"
                    }
                }
            },

            whenToUseWhat: {
                find_hypotenuse: "When you know both legs and need the longest side",
                find_leg: "When you know hypotenuse and one leg, need the other leg",
                distance_formula: "When you have coordinates of two points",
                converse: "When you want to check if a triangle is right-angled",
                pythagorean_triple: "For quick mental math or to check your answer"
            },

            methodSelection: {
                factorsToConsider: [
                    "What information is given?",
                    "What are you trying to find?",
                    "Is this a right triangle? (Must be for Pythagorean theorem)",
                    "Are the numbers nice (suggesting a Pythagorean triple)?",
                    "Is it a word problem requiring diagram first?"
                ],
                generalApproach: [
                    "1. Verify you have a right triangle",
                    "2. Draw and label a diagram",
                    "3. Identify the hypotenuse (longest side, opposite right angle)",
                    "4. Determine what you're looking for",
                    "5. Choose the correct form: c = √(a² + b²) or leg = √(c² - other_leg²)",
                    "6. Substitute known values carefully",
                    "7. Calculate: square, add/subtract, then square root",
                    "8. Check if answer is reasonable",
                    "9. Verify by substituting back if needed"
                ]
            },

            optimizationTips: {
                "recognize_triples": "If you see 3-4, think 5. If you see 5-12, think 13. Etc.",
                "multiples_of_triples": "6-8-10 is just 2×(3-4-5). Recognize the pattern!",
                "estimate_first": "Before calculating, estimate. If legs are 6 and 8, hypotenuse should be between 8 and 14",
                "calculator_use": "Use calculator for square roots but show the setup first",
                "units_matter": "Always convert to same units before calculating; include units in answer"
            },

            commonPatterns: {
                "ladder_problem_pattern": {
                    setup: "Ladder = hypotenuse, distance from wall = one leg, height on wall = other leg",
                    typical_formula: "Usually finding height: h = √(ladder² - distance²)"
                },
                "distance_problem_pattern": {
                    setup: "Movement in two perpendicular directions = legs, direct distance = hypotenuse",
                    typical_formula: "Direct distance = √(east_west² + north_south²)"
                },
                "diagonal_pattern": {
                    setup: "Length and width = legs, diagonal = hypotenuse",
                    typical_formula: "Diagonal = √(length² + width²)"
                }
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Pythagorean Triples Sprint",
                    timeLimit: 60,
                    problems: [
                        { a: 3, b: 4, find: "c" },
                        { a: 5, b: 12, find: "c" },
                        { c: 5, a: 3, find: "b" },
                        { a: 6, b: 8, find: "c" },
                        { a: 8, b: 15, find: "c" },
                        { c: 13, a: 5, find: "b" },
                        { a: 7, b: 24, find: "c" },
                        { c: 10, a: 6, find: "b" }
                    ],
                    note: "All are Pythagorean triples - answers are whole numbers!"
                },
                {
                    name: "Mixed Pythagorean Challenge",
                    timeLimit: 120,
                    problems: [
                        { a: 9, b: 12, find: "c" },
                        { c: 15, b: 12, find: "a" },
                        { a: 20, b: 21, find: "c" },
                        { c: 25, a: 15, find: "b" },
                        { a: 11, b: 60, find: "c" }
                    ]
                }
            ],

            puzzles: [
                {
                    name: "Missing Triple Member",
                    problem: "One number in a Pythagorean triple is 20. What could the other two be?",
                    hints: [
                        "Try 20-21-29",
                        "Or 12-16-20",
                        "Or 20-99-101"
                    ],
                    solution: "Multiple answers: (12,16,20), (20,21,29), (20,99,101), etc."
                },
                {
                    name: "Coordinate Challenge",
                    problem: "Point A is at (2, 3). Point B is exactly 5 units away. Where could B be?",
                    solution: "Many locations! Forms a circle with radius 5. Examples: (5,7), (-1,0), (6,0), etc."
                },
                {
                    name: "Triangle Type Trio",
                    problem: "Can you create three triangles with sides from 1-10 that are: right, acute, and obtuse?",
                    solution: "Right: 3-4-5; Acute: 3-4-4; Obtuse: 2-3-4"
                },
                {
                    name: "Nested Squares",
                    problem: "A square has side length 10. A square is drawn on its diagonal. What's the area of the new square?",
                    solution: "Diagonal = √(100+100) = √200 = 10√2 ≈ 14.14, so area = 200"
                }
            ],

            applications: [
                {
                    scenario: "Flatscreen TV Shopping",
                    problem: "A TV is advertised as 55 inches (diagonal). It's 48 inches wide. How tall is it?",
                    setup: "width² + height² = diagonal²",
                    equation: "48² + h² = 55²",
                    solution: "h = √(3025 - 2304) = √721 ≈ 26.9 inches",
                    realWorld: "Helps determine if TV fits your space"
                },
                {
                    scenario: "Building a Wheelchair Ramp",
                    problem: "Need to rise 3 feet over 36 feet horizontal distance. How long will the ramp be?",
                    setup: "rise² + run² = ramp_length²",
                    equation: "3² + 36² = L²",
                    solution: "L = √(9 + 1296) = √1305 ≈ 36.1 feet",
                    realWorld: "Ensures you buy enough materials"
                },
                {
                    scenario: "Baseball Diamond Distance",
                    problem: "Baseball diamond is a square with 90-foot sides. How far is it from home to second base?",
                    setup: "Two sides of square form legs; diagonal is hypotenuse",
                    equation: "90² + 90² = d²",
                    solution: "d = √(8100 + 8100) = √16200 ≈ 127.3 feet",
                    realWorld: "Catchers need to know this distance for throws"
                },
                {
                    scenario: "Guy Wire for Cell Tower",
                    problem: "Tower is 150 feet tall. Guy wire attached 120 feet up, anchored 50 feet from base. Wire length?",
                    setup: "height² + distance² = wire²",
                    equation: "120² + 50² = w²",
                    solution: "w = √(14400 + 2500) = √16900 = 130 feet",
                    realWorld: "Critical for tower stability and safety"
                }
            ],

            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Find c when a=6, b=8",
                        "a + b = 6 + 8 = 14",  // ERROR
                        "c = √14 ≈ 3.74"
                    ],
                    correctAnswer: "c = 10",
                    errorType: "Added legs instead of adding their squares"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Find c when a=5, b=12",
                        "5² + 12² = 25 + 144 = 169",  // Correct so far
                        "c = 169"  // ERROR: forgot square root
                    ],
                    correctAnswer: "c = 13",
                    errorType: "Forgot to take square root of the sum"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "Find b when c=10, a=6",
                        "b² = 6² - 10²",  // ERROR: subtraction order wrong
                        "b² = 36 - 100 = -64",
                        "Cannot take square root of negative number"
                    ],
                    correctAnswer: "b = 8",
                    errorType: "Subtracted in wrong order; should be c² - a²"
                },
                {
                    name: "Find the Error #4",
                    incorrectWork: [
                        "Find c when a=3, b=4",
                        "√3² + √4² = √9 + √16 = 3 + 4 = 7"  // ERROR
                    ],
                    correctAnswer: "c = 5",
                    errorType: "Took square root of each term separately instead of adding first"
                }
            ],

            investigativeProjects: [
                {
                    title: "Pythagorean Triple Generator",
                    task: "Use Euclid's formula (a = m²-n², b = 2mn, c = m²+n²) to generate 10 new Pythagorean triples",
                    extension: "Why does this formula always work?"
                },
                {
                    title: "Proof Exploration",
                    task: "Research and illustrate three different proofs of the Pythagorean theorem",
                    methods: ["Geometric (squares on sides)", "Algebraic", "Rearrangement proof"]
                },
                {
                    title: "Historical Investigation",
                    task: "Research: Did Pythagoras actually discover this theorem? Who else knew it?",
                    discover: "Babylonians knew it 1000+ years before Pythagoras!"
                },
                {
                    title: "Real-World Survey",
                    task: "Find and photograph 10 real right triangles in your environment. Measure and verify using Pythagorean theorem.",
                    examples: ["Door frames", "Staircases", "Roof lines", "Book leaning against wall"]
                }
            ]
        };
    }

    initializeHistoricalContext() {
        this.historicalContext = {
            ancientOrigins: {
                era: "~1800 BCE",
                civilization: "Babylonians",
                evidence: "Babylonian tablet YBC 7289 shows Pythagorean triples",
                significance: "Theorem was known long before Pythagoras (~570-495 BCE)"
            },
            pythagoras: {
                era: "~500 BCE",
                contribution: "First formal proof (according to tradition)",
                school: "Pythagorean school in ancient Greece",
                philosophy: "Connected mathematics to mysticism and philosophy",
                note: "May not have personally discovered it, but formalized and proved it"
            },
            euclid: {
                era: "~300 BCE",
                work: "Elements, Proposition I.47",
                contribution: "Rigorous geometric proof",
                impact: "Made it part of formal mathematics curriculum"
            },
            china: {
                era: "~200 BCE",
                text: "Zhou Bi Suan Jing",
                evidence: "Independent discovery/knowledge in China",
                name: "Known as 'Gougu theorem' in China"
            },
            india: {
                era: "~800 BCE - 200 CE",
                texts: "Baudhayana Sulba Sutra and other Sulba Sutras",
                evidence: "Used for altar construction in Vedic rituals",
                significance: "May predate Greek knowledge"
            },
            islamic_golden_age: {
                era: "800-1200 CE",
                scholars: "Al-Khwarizmi, Thabit ibn Qurra",
                contribution: "Algebraic proofs and generalizations",
                preservation: "Preserved and expanded Greek mathematical knowledge"
            },
            modern_applications: {
                era: "1600s - present",
                developments: [
                    "Coordinate geometry (Descartes)",
                    "Generalization to n-dimensions",
                    "Applications in physics (vectors, forces)",
                    "Computer graphics and game development",
                    "GPS and navigation systems"
                ]
            },
            culturalImpact: {
                recognition: "One of the most famous mathematical theorems",
                education: "Taught worldwide; fundamental to geometry",
                proofs: "Over 400 different proofs discovered",
                applications: "Essential in science, engineering, construction, navigation"
            }
        };
    }

    initializeTriangleTypes() {
        this.triangleTypes = {
            right_triangle: {
                definition: "Triangle with one 90° angle",
                properties: [
                    "Has one right angle (90°)",
                    "Other two angles are acute and sum to 90°",
                    "Hypotenuse is longest side",
                    "Satisfies Pythagorean theorem: a² + b² = c²",
                    "Two legs form the right angle"
                ],
                examples: ["3-4-5", "5-12-13", "8-15-17"],
                identification: "Look for right angle symbol (small square in corner)"
            },
            acute_triangle: {
                definition: "All three angles are less than 90°",
                properties: [
                    "All angles are acute (< 90°)",
                    "All angles sum to 180°",
                    "For longest side c: a² + b² > c²"
                ],
                pythagorean_test: "If a² + b² > c², triangle is acute",
                example: "Triangle with sides 5, 7, 8"
            },
            obtuse_triangle: {
                definition: "One angle is greater than 90°",
                properties: [
                    "Has one obtuse angle (> 90°)",
                    "Other two angles are acute",
                    "For longest side c: a² + b² < c²"
                ],
                pythagorean_test: "If a² + b² < c², triangle is obtuse",
                example: "Triangle with sides 3, 4, 6"
            },
            scalene: {
                definition: "All three sides have different lengths",
                canBe: ["Right", "Acute", "Obtuse"],
                example: "3-4-5 is scalene AND right"
            },
            isosceles: {
                definition: "Two sides have equal length",
                properties: [
                    "Two equal sides",
                    "Two equal angles (opposite the equal sides)",
                    "Can be right, acute, or obtuse"
                ],
                rightIsosceles: "45-45-90 triangle; legs are equal; hypotenuse = leg × √2"
            },
            equilateral: {
                definition: "All three sides equal, all angles 60°",
                properties: [
                    "All sides equal length",
                    "All angles are 60°",
                    "Always acute",
                    "Height = (√3/2) × side"
                ],
                note: "Cannot be a right triangle"
            }
        };
    }

    initializeSpecialTriangles() {
        this.specialTriangles = {
            "45-45-90": {
                name: "45-45-90 Triangle (Isosceles Right Triangle)",
                angles: [45, 45, 90],
                sideRatios: "1 : 1 : √2",
                description: "If legs are both 1, hypotenuse is √2",
                generalForm: "If each leg is x, hypotenuse is x√2",
                formula: "c = a√2 (where a = b)",
                applications: [
                    "Square diagonal",
                    "Construction angles",
                    "Compass directions (NE, NW, SE, SW)"
                ],
                example: "Square with side 5 has diagonal 5√2 ≈ 7.07"
            },
            "30-60-90": {
                name: "30-60-90 Triangle",
                angles: [30, 60, 90],
                sideRatios: "1 : √3 : 2",
                description: "Short leg : Long leg : Hypotenuse = 1 : √3 : 2",
                generalForm: "If short leg is x, long leg is x√3, hypotenuse is 2x",
                formulas: {
                    "From short leg x": "long leg = x√3, hypotenuse = 2x",
                    "From long leg y": "short leg = y/√3, hypotenuse = 2y/√3",
                    "From hypotenuse z": "short leg = z/2, long leg = z√3/2"
                },
                applications: [
                    "Equilateral triangle half",
                    "Hexagon geometry",
                    "Trigonometry foundations"
                ],
                example: "If short leg is 5, long leg is 5√3 ≈ 8.66, hypotenuse is 10"
            },
            "3-4-5": {
                name: "3-4-5 Right Triangle (Most Common Pythagorean Triple)",
                sides: [3, 4, 5],
                verification: "3² + 4² = 9 + 16 = 25 = 5²",
                multiples: ["6-8-10", "9-12-15", "12-16-20", "15-20-25"],
                applications: [
                    "Construction (squaring corners)",
                    "Quick right angle verification",
                    "Foundation layout"
                ],
                practicalUse: "Measure 3 feet on one line, 4 feet on perpendicular line; if diagonal is 5 feet, corner is square"
            },
            "5-12-13": {
                name: "5-12-13 Right Triangle (Second Most Common Triple)",
                sides: [5, 12, 13],
                verification: "5² + 12² = 25 + 144 = 169 = 13²",
                multiples: ["10-24-26", "15-36-39", "20-48-52"],
                note: "Larger than 3-4-5 but still manageable for mental math"
            },
            "8-15-17": {
                name: "8-15-17 Right Triangle",
                sides: [8, 15, 17],
                verification: "8² + 15² = 64 + 225 = 289 = 17²",
                note: "Less commonly used but still a primitive Pythagorean triple"
            },
            "7-24-25": {
                name: "7-24-25 Right Triangle",
                sides: [7, 24, 25],
                verification: "7² + 24² = 49 + 576 = 625 = 25²",
                note: "Useful for problems involving 25 as hypotenuse"
            }
        };
    }

    // MAIN SOLVER METHOD
    solvePythagoreanProblem(config) {
        const { equation, scenario, parameters, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parsePythagoreanProblem(equation, scenario, parameters, problemType, context);

            // Solve the problem
            this.currentSolution = this.solvePythagoreanProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generatePythagoreanSteps(this.currentProblem, this.currentSolution);

            // Generate graph/diagram data
            this.generatePythagoreanDiagram();

            // Generate workbook
            this.generatePythagoreanWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                solutionValue: this.currentSolution?.result,
                solutionType: this.currentSolution?.type
            };

        } catch (error) {
            throw new Error(`Failed to solve Pythagorean problem: ${error.message}`);
        }
    }

    parsePythagoreanProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = equation ? this.cleanMathExpression(equation) : '';

        // If problem type is specified, use it directly
        if (problemType && this.pythagoreanTypes[problemType]) {
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

        // Auto-detect problem type
        for (const [type, config] of Object.entries(this.pythagoreanTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(scenario)) {
                    const match = cleanInput.match(pattern) || scenario.match(pattern);
                    const extractedParams = this.extractPythagoreanParameters(match, type, parameters);

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

        // Default to finding hypotenuse if a and b are provided
        if (parameters.a !== undefined && parameters.b !== undefined && parameters.c === undefined) {
            return {
                originalInput: equation || 'Find hypotenuse',
                cleanInput: cleanInput,
                type: 'find_hypotenuse',
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Default to finding leg if c and one leg are provided
        if (parameters.c !== undefined && (parameters.a !== undefined || parameters.b !== undefined)) {
            return {
                originalInput: equation || 'Find missing leg',
                cleanInput: cleanInput,
                type: 'find_leg',
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize Pythagorean problem type from: ${equation || scenario}`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/²/g, '^2')
            .replace(/√/g, 'sqrt')
            .replace(/≈/g, '~')
            .trim();
    }

    extractPythagoreanParameters(match, type, providedParams = {}) {
        const params = { ...providedParams };

        if (!match) return params;

        // Extract based on problem type
        switch(type) {
            case 'find_hypotenuse':
                // Pattern captures legs a and b
                if (match[1] !== undefined && params.a === undefined) {
                    params.a = this.parseNumber(match[1]);
                }
                if (match[2] !== undefined && params.b === undefined) {
                    params.b = this.parseNumber(match[2]);
                }
                break;

            case 'find_leg':
                // Pattern captures hypotenuse and one leg
                if (match[1] !== undefined && params.c === undefined) {
                    params.c = this.parseNumber(match[1]);
                }
                if (match[2] !== undefined) {
                    // Determine which leg is provided
                    if (params.a === undefined && params.b === undefined) {
                        params.a = this.parseNumber(match[2]);
                    }
                }
                break;

            case 'verify_right_triangle':
                // Pattern captures three sides
                if (match[1] !== undefined) params.side1 = this.parseNumber(match[1]);
                if (match[2] !== undefined) params.side2 = this.parseNumber(match[2]);
                if (match[3] !== undefined) params.side3 = this.parseNumber(match[3]);
                break;

            case 'distance_formula':
                // Pattern captures coordinates
                if (match[1] !== undefined) params.x1 = this.parseNumber(match[1]);
                if (match[2] !== undefined) params.y1 = this.parseNumber(match[2]);
                if (match[3] !== undefined) params.x2 = this.parseNumber(match[3]);
                if (match[4] !== undefined) params.y2 = this.parseNumber(match[4]);
                break;

            case 'three_dimensional':
                // Pattern captures 3D coordinates
                if (match[1] !== undefined) params.x1 = this.parseNumber(match[1]);
                if (match[2] !== undefined) params.y1 = this.parseNumber(match[2]);
                if (match[3] !== undefined) params.z1 = this.parseNumber(match[3]);
                if (match[4] !== undefined) params.x2 = this.parseNumber(match[4]);
                if (match[5] !== undefined) params.y2 = this.parseNumber(match[5]);
                if (match[6] !== undefined) params.z2 = this.parseNumber(match[6]);
                break;
        }

        return params;
    }

    parseNumber(value) {
        if (value === undefined || value === null || value === '') return undefined;
        const num = parseFloat(value);
        return isNaN(num) ? undefined : num;
    }

    solvePythagoreanProblem_Internal(problem) {
        const solver = this.pythagoreanTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for Pythagorean problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // PYTHAGOREAN EQUATION SOLVERS

    solveForHypotenuse(problem) {
        const { a, b } = problem.parameters;

        if (a === undefined || b === undefined) {
            throw new Error('Both legs (a and b) must be provided to find hypotenuse');
        }

        if (a <= 0 || b <= 0) {
            throw new Error('Leg lengths must be positive');
        }

        const aSquared = a * a;
        const bSquared = b * b;
        const cSquared = aSquared + bSquared;
        const c = Math.sqrt(cSquared);

        // Check if it's a Pythagorean triple
        const isTriple = Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c);

        return {
            type: 'Finding Hypotenuse',
            formula: 'c = √(a² + b²)',
            givenSides: { a, b },
            calculation: {
                step1: { description: 'Square leg a', expression: `${a}²`, result: aSquared },
                step2: { description: 'Square leg b', expression: `${b}²`, result: bSquared },
                step3: { description: 'Add the squares', expression: `${aSquared} + ${bSquared}`, result: cSquared },
                step4: { description: 'Take square root', expression: `√${cSquared}`, result: c }
            },
            result: c,
            verification: this.verifyPythagoreanSolution(a, b, c),
            isPythagoreanTriple: isTriple,
            category: 'finding_hypotenuse',
            interpretation: `The hypotenuse is ${c.toFixed(4)} units long`,
            checkReasonable: c > Math.max(a, b) ? 'Valid: hypotenuse is longest side' : 'ERROR: hypotenuse should be longest'
        };
    }

    solveForLeg(problem) {
        const { a, b, c } = problem.parameters;

        if (c === undefined) {
            throw new Error('Hypotenuse (c) must be provided to find a leg');
        }

        if (c <= 0) {
            throw new Error('Hypotenuse length must be positive');
        }

        // Determine which leg is known and which to find
        let knownLeg, knownLegName, unknownLegName;
        if (a !== undefined) {
            knownLeg = a;
            knownLegName = 'a';
            unknownLegName = 'b';
        } else if (b !== undefined) {
            knownLeg = b;
            knownLegName = 'b';
            unknownLegName = 'a';
        } else {
            throw new Error('One leg must be provided to find the other');
        }

        if (knownLeg <= 0) {
            throw new Error('Leg length must be positive');
        }

        if (knownLeg >= c) {
            throw new Error('Leg cannot be longer than or equal to hypotenuse');
        }

        const cSquared = c * c;
        const knownLegSquared = knownLeg * knownLeg;
        const unknownLegSquared = cSquared - knownLegSquared;

        if (unknownLegSquared < 0) {
            throw new Error('Invalid triangle: calculation results in negative value under square root');
        }

        const unknownLeg = Math.sqrt(unknownLegSquared);

        // Check if it's a Pythagorean triple
        const isTriple = Number.isInteger(knownLeg) && Number.isInteger(c) && Number.isInteger(unknownLeg);

        const result = {
            type: 'Finding a Leg',
            formula: `${unknownLegName} = √(c² - ${knownLegName}²)`,
            givenSides: { c, [knownLegName]: knownLeg },
            calculation: {
                step1: { description: 'Square hypotenuse', expression: `${c}²`, result: cSquared },
                step2: { description: `Square known leg (${knownLegName})`, expression: `${knownLeg}²`, result: knownLegSquared },
                step3: { description: 'Subtract', expression: `${cSquared} - ${knownLegSquared}`, result: unknownLegSquared },
                step4: { description: 'Take square root', expression: `√${unknownLegSquared}`, result: unknownLeg }
            },
            result: unknownLeg,
            unknownLegName: unknownLegName,
            verification: unknownLegName === 'a' 
                ? this.verifyPythagoreanSolution(unknownLeg, knownLeg, c)
                : this.verifyPythagoreanSolution(knownLeg, unknownLeg, c),
            isPythagoreanTriple: isTriple,
            category: 'finding_leg',
            interpretation: `The missing leg (${unknownLegName}) is ${unknownLeg.toFixed(4)} units long`,
            checkReasonable: unknownLeg < c ? 'Valid: leg is shorter than hypotenuse' : 'ERROR: leg should be shorter than hypotenuse'
        };

        return result;
    }

    verifyRightTriangle(problem) {
        let { side1, side2, side3 } = problem.parameters;

        if (side1 === undefined || side2 === undefined || side3 === undefined) {
            throw new Error('All three sides must be provided to verify right triangle');
        }

        if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
            throw new Error('All side lengths must be positive');
        }

        // Sort sides to identify longest (potential hypotenuse)
        const sides = [side1, side2, side3].sort((a, b) => a - b);
        const a = sides[0];
        const b = sides[1];
        const c = sides[2]; // Longest side

        const aSquared = a * a;
        const bSquared = b * b;
        const cSquared = c * c;
        const sumOfSquares = aSquared + bSquared;

        const difference = Math.abs(sumOfSquares - cSquared);
        const tolerance = 1e-9;

        let triangleType, relationship;

        if (difference < tolerance) {
            triangleType = 'Right Triangle';
            relationship = 'a² + b² = c²';
        } else if (sumOfSquares > cSquared) {
            triangleType = 'Acute Triangle';
            relationship = 'a² + b² > c²';
        } else {
            triangleType = 'Obtuse Triangle';
            relationship = 'a² + b² < c²';
        }

        const isRightTriangle = triangleType === 'Right Triangle';
        const isPythagoreanTriple = isRightTriangle && Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c);

        return {
            type: 'Verify Right Triangle (Converse of Pythagorean Theorem)',
            givenSides: { side1, side2, side3 },
            sortedSides: { a, b, c },
            calculation: {
                step1: { description: 'Identify longest side', expression: `c = ${c}`, note: 'This should be the hypotenuse if right triangle' },
                step2: { description: 'Square all sides', expressions: [`a² = ${aSquared}`, `b² = ${bSquared}`, `c² = ${cSquared}`] },
                step3: { description: 'Add squares of shorter sides', expression: `a² + b² = ${sumOfSquares}` },
                step4: { description: 'Compare to square of longest side', expression: `${sumOfSquares} vs ${cSquared}`, difference: difference }
            },
            result: triangleType,
            isRightTriangle: isRightTriangle,
            relationship: relationship,
            isPythagoreanTriple: isPythagoreanTriple,
            category: 'converse_pythagorean',
            interpretation: `The triangle with sides ${a}, ${b}, ${c} is a ${triangleType}`,
            verification: {
                aSquaredPlusBSquared: sumOfSquares,
                cSquared: cSquared,
                areEqual: isRightTriangle,
                comparison: sumOfSquares > cSquared ? 'a² + b² > c² (acute)' : 
                           sumOfSquares < cSquared ? 'a² + b² < c² (obtuse)' : 
                           'a² + b² = c² (right)'
            }
        };
    }

    findPythagoreanTriple(problem) {
        const { a, b, c } = problem.parameters;

        // If looking for triples in general
        if (a === undefined && b === undefined && c === undefined) {
            return {
                type: 'Pythagorean Triples',
                commonTriples: this.workedExamples.byCategory.pythagorean_triples,
                formula: "Euclid's formula: a = m² - n², b = 2mn, c = m² + n² (where m > n > 0)",
                examples: [
                    { m: 2, n: 1, triple: [3, 4, 5] },
                    { m: 3, n: 2, triple: [5, 12, 13] },
                    { m: 4, n: 1, triple: [15, 8, 17] },
                    { m: 4, n: 3, triple: [7, 24, 25] }
                ],
                category: 'pythagorean_triples',
                note: 'Pythagorean triples are sets of positive integers (a, b, c) that satisfy a² + b² = c²'
            };
        }

        // Check if given values form a triple
        if (a !== undefined && b !== undefined && c !== undefined) {
            const verification = this.verifyRightTriangle({ parameters: { side1: a, side2: b, side3: c } });
            return {
                type: 'Verify Pythagorean Triple',
                givenValues: { a, b, c },
                isTriple: verification.isRightTriangle && verification.isPythagoreanTriple,
                verification: verification,
                category: 'pythagorean_triples'
            };
        }

        return {
            type: 'Pythagorean Triple Information',
            category: 'pythagorean_triples',
            note: 'Provide three sides to verify if they form a Pythagorean triple'
        };
    }

    solveDistanceFormula(problem) {
        const { x1, y1, x2, y2 } = problem.parameters;

        if (x1 === undefined || y1 === undefined || x2 === undefined || y2 === undefined) {
            throw new Error('All four coordinates (x1, y1, x2, y2) must be provided');
        }

        const deltaX = x2 - x1;
        const deltaY = y2 - y1;
        const deltaXSquared = deltaX * deltaX;
        const deltaYSquared = deltaY * deltaY;
        const sumOfSquares = deltaXSquared + deltaYSquared;
        const distance = Math.sqrt(sumOfSquares);

        return {
            type: 'Distance Formula (Pythagorean Application)',
            formula: 'd = √((x₂-x₁)² + (y₂-y₁)²)',
            givenPoints: { 
                point1: `(${x1}, ${y1})`, 
                point2: `(${x2}, ${y2})` 
            },
            calculation: {
                step1: { description: 'Find horizontal distance', expression: `Δx = ${x2} - ${x1}`, result: deltaX },
                step2: { description: 'Find vertical distance', expression: `Δy = ${y2} - ${y1}`, result: deltaY },
                step3: { description: 'Square horizontal distance', expression: `(Δx)² = ${deltaX}²`, result: deltaXSquared },
                step4: { description: 'Square vertical distance', expression: `(Δy)² = ${deltaY}²`, result: deltaYSquared },
                step5: { description: 'Add the squares', expression: `${deltaXSquared} + ${deltaYSquared}`, result: sumOfSquares },
                step6: { description: 'Take square root', expression: `√${sumOfSquares}`, result: distance }
            },
            result: distance,
            components: {
                horizontalDistance: Math.abs(deltaX),
                verticalDistance: Math.abs(deltaY),
                directDistance: distance
            },
            category: 'distance_formula',
            interpretation: `The distance between points (${x1}, ${y1}) and (${x2}, ${y2}) is ${distance.toFixed(4)} units`,
            geometricNote: 'The horizontal and vertical distances form the legs of a right triangle; the direct distance is the hypotenuse'
        };
    }

    solveLadderProblem(problem) {
        const { ladderLength, baseDistance, height } = problem.parameters;

        // Determine what we're finding
        if (ladderLength !== undefined && baseDistance !== undefined && height === undefined) {
            // Find height the ladder reaches
            const result = this.solveForLeg({ 
                parameters: { c: ladderLength, a: baseDistance } 
            });
            
            return {
                ...result,
                type: 'Ladder Problem - Finding Height',
                scenario: `A ${ladderLength}-foot ladder is placed ${baseDistance} feet from a wall`,
                interpretation: `The ladder reaches ${result.result.toFixed(2)} feet up the wall`,
                category: 'word_problems',
                diagram: 'Wall (vertical) and ground (horizontal) form right angle; ladder is hypotenuse',
                safetyNote: this.checkLadderSafety(ladderLength, baseDistance, result.result)
            };
        } else if (ladderLength !== undefined && height !== undefined && baseDistance === undefined) {
            // Find base distance
            const result = this.solveForLeg({ 
                parameters: { c: ladderLength, a: height } 
            });
            
            return {
                ...result,
                type: 'Ladder Problem - Finding Base Distance',
                scenario: `A ${ladderLength}-foot ladder reaches ${height} feet up a wall`,
                interpretation: `The base of the ladder is ${result.result.toFixed(2)} feet from the wall`,
                category: 'word_problems',
                safetyNote: this.checkLadderSafety(ladderLength, result.result, height)
            };
        } else if (baseDistance !== undefined && height !== undefined && ladderLength === undefined) {
            // Find ladder length needed
            const result = this.solveForHypotenuse({ 
                parameters: { a: baseDistance, b: height } 
            });
            
            return {
                ...result,
                type: 'Ladder Problem - Finding Ladder Length',
                scenario: `Need to reach ${height} feet up a wall with base ${baseDistance} feet away`,
                interpretation: `A ${result.result.toFixed(2)}-foot ladder is needed`,
                category: 'word_problems',
                safetyNote: this.checkLadderSafety(result.result, baseDistance, height)
            };
        } else {
            throw new Error('Provide exactly two of: ladderLength, baseDistance, height');
        }
    }

    checkLadderSafety(ladderLength, baseDistance, height) {
        const recommendedBase = ladderLength / 4;
        const isSafe = baseDistance >= recommendedBase * 0.9 && baseDistance <= recommendedBase * 1.5;
        
        return {
            safetyRule: '1:4 ratio - base should be 1/4 of ladder length from wall',
            recommendedBaseDistance: recommendedBase.toFixed(2),
            actualBaseDistance: baseDistance.toFixed(2),
            isSafe: isSafe,
            warning: isSafe ? 'Ladder placement is within safe range' : 
                     baseDistance < recommendedBase ? 'WARNING: Ladder too vertical - risk of tipping backward' :
                     'WARNING: Ladder too shallow - risk of base slipping'
        };
    }

    solveDiagonalProblem(problem) {
        const { length, width, diagonal } = problem.parameters;

        if (length !== undefined && width !== undefined && diagonal === undefined) {
            // Find diagonal
            const result = this.solveForHypotenuse({ 
                parameters: { a: length, b: width } 
            });
            
            return {
                ...result,
                type: 'Diagonal Problem - Finding Diagonal',
                scenario: `Rectangle with length ${length} and width ${width}`,
                interpretation: `The diagonal is ${result.result.toFixed(2)} units long`,
                category: 'word_problems',
                application: 'Used for TV screens, room measurements, picture frames, etc.'
            };
        } else if (diagonal !== undefined && length !== undefined && width === undefined) {
            // Find width
            const result = this.solveForLeg({ 
                parameters: { c: diagonal, a: length } 
            });
            
            return {
                ...result,
                type: 'Diagonal Problem - Finding Width',
                scenario: `Rectangle with diagonal ${diagonal} and length ${length}`,
                interpretation: `The width is ${result.result.toFixed(2)} units`,
                category: 'word_problems'
            };
        } else if (diagonal !== undefined && width !== undefined && length === undefined) {
            // Find length
            const result = this.solveForLeg({ 
                parameters: { c: diagonal, a: width } 
            });
            
            return {
                ...result,
                type: 'Diagonal Problem - Finding Length',
                scenario: `Rectangle with diagonal ${diagonal} and width ${width}`,
                interpretation: `The length is ${result.result.toFixed(2)} units`,
                category: 'word_problems'
            };
        } else {
            throw new Error('Provide exactly two of: length, width, diagonal');
        }
    }

    solveNavigationProblem(problem) {
        const { north, south, east, west, directDistance } = problem.parameters;

        // Calculate net displacements
        const netNorthSouth = (north || 0) - (south || 0);
        const netEastWest = (east || 0) - (west || 0);

        if (directDistance === undefined) {
            // Find direct distance
            const result = this.solveForHypotenuse({ 
                parameters: { a: Math.abs(netNorthSouth), b: Math.abs(netEastWest) } 
            });
            
            const direction = this.determineDirection(netNorthSouth, netEastWest);
            
            return {
                ...result,
                type: 'Navigation Problem - Finding Direct Distance',
                scenario: problem.scenario || 'Navigation with perpendicular movements',
                movements: {
                    northSouth: netNorthSouth >= 0 ? `${netNorthSouth} north` : `${Math.abs(netNorthSouth)} south`,
                    eastWest: netEastWest >= 0 ? `${netEastWest} east` : `${Math.abs(netEastWest)} west`
                },
                interpretation: `Direct distance from start: ${result.result.toFixed(2)} units ${direction}`,
                category: 'word_problems',
                note: 'Path distance would be longer if following streets/grid'
            };
        }

        return {
            type: 'Navigation Problem',
            category: 'word_problems',
            note: 'Provide north/south and east/west movements to find direct distance'
        };
    }

    determineDirection(northSouth, eastWest) {
        const ns = northSouth > 0 ? 'north' : northSouth < 0 ? 'south' : '';
        const ew = eastWest > 0 ? 'east' : eastWest < 0 ? 'west' : '';
        
        if (ns && ew) return `${ns}${ew}`;
        if (ns) return ns;
        if (ew) return ew;
        return '';
    }

    solve3DDistance(problem) {
        const { x1, y1, z1, x2, y2, z2 } = problem.parameters;

        if (x1 === undefined || y1 === undefined || z1 === undefined ||
            x2 === undefined || y2 === undefined || z2 === undefined) {
            throw new Error('All six coordinates must be provided for 3D distance');
        }

        const deltaX = x2 - x1;
        const deltaY = y2 - y1;
        const deltaZ = z2 - z1;
        
        const deltaXSquared = deltaX * deltaX;
        const deltaYSquared = deltaY * deltaY;
        const deltaZSquared = deltaZ * deltaZ;
        
        const sumOfSquares = deltaXSquared + deltaYSquared + deltaZSquared;
        const distance = Math.sqrt(sumOfSquares);

        return {
            type: '3D Distance (Extended Pythagorean Theorem)',
            formula: 'd = √((x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²)',
            givenPoints: { 
                point1: `(${x1}, ${y1}, ${z1})`, 
                point2: `(${x2}, ${y2}, ${z2})` 
            },
            calculation: {
                step1: { description: 'Find x displacement', expression: `Δx = ${x2} - ${x1}`, result: deltaX },
                step2: { description: 'Find y displacement', expression: `Δy = ${y2} - ${y1}`, result: deltaY },
                step3: { description: 'Find z displacement', expression: `Δz = ${z2} - ${z1}`, result: deltaZ },
                step4: { description: 'Square all displacements', expressions: [`Δx² = ${deltaXSquared}`, `Δy² = ${deltaYSquared}`, `Δz² = ${deltaZSquared}`] },
                step5: { description: 'Sum the squares', expression: `${deltaXSquared} + ${deltaYSquared} + ${deltaZSquared}`, result: sumOfSquares },
                step6: { description: 'Take square root', expression: `√${sumOfSquares}`, result: distance }
            },
            result: distance,
            components: {
                xDistance: Math.abs(deltaX),
                yDistance: Math.abs(deltaY),
                zDistance: Math.abs(deltaZ),
                directDistance: distance
            },
            category: 'three_dimensional_distance',
            interpretation: `The 3D distance is ${distance.toFixed(4)} units`,
            note: 'This extends the Pythagorean theorem by applying it twice: once for the xy-plane, then including the z-component'
        };
    }

    // VERIFICATION METHODS

    verifyPythagoreanSolution(a, b, c) {
        const aSquared = a * a;
        const bSquared = b * b;
        const cSquared = c * c;
        const leftSide = aSquared + bSquared;
        const rightSide = cSquared;
        const difference = Math.abs(leftSide - rightSide);
        const isValid = difference < 1e-9;

        return {
            equation: `${a}² + ${b}² = ${c}²`,
            substitution: `${aSquared} + ${bSquared} = ${cSquared}`,
            leftSide: leftSide,
            rightSide: rightSide,
            difference: difference,
            isValid: isValid,
            checkMark: isValid ? '✓' : '✗'
        };
    }

    // STEP GENERATION

    generatePythagoreanSteps(problem, solution) {
        let baseSteps = this.generateBasePythagoreanSteps(problem, solution);

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

    generateBasePythagoreanSteps(problem, solution) {
        const category = this.pythagoreanTypes[problem.type]?.category;

        switch(category) {
            case 'finding_hypotenuse':
                return this.generateHypotenuseSteps(problem, solution);
            case 'finding_leg':
                return this.generateLegSteps(problem, solution);
            case 'converse_pythagorean':
                return this.generateConverseSteps(problem, solution);
            case 'distance_formula':
                return this.generateDistanceSteps(problem, solution);
            case 'word_problems':
                return this.generateWordProblemSteps(problem, solution);
            case 'three_dimensional_distance':
                return this.generate3DSteps(problem, solution);
            default:
                return this.generateGenericPythagoreanSteps(problem, solution);
        }
    }

    generateHypotenuseSteps(problem, solution) {
        const { a, b } = problem.parameters;
        const steps = [];

        // Step 1: Problem statement
        steps.push({
            stepNumber: 1,
            step: 'Identify the problem',
            description: 'Find the hypotenuse given both legs',
            expression: `a = ${a}, b = ${b}, c = ?`,
            reasoning: 'We know both legs of a right triangle and need to find the hypotenuse (longest side)',
            goalStatement: 'Use the Pythagorean theorem: c = √(a² + b²)',
            formula: 'c² = a² + b²'
        });

        // Step 2: Square first leg
        steps.push({
            stepNumber: 2,
            step: 'Square leg a',
            description: `Calculate a²`,
            beforeExpression: `a = ${a}`,
            operation: 'Square',
            afterExpression: `a² = ${solution.calculation.step1.result}`,
            calculation: `${a} × ${a} = ${solution.calculation.step1.result}`,
            reasoning: 'Squaring means multiplying the number by itself',
            algebraicRule: 'Exponentiation',
            visualHint: `Imagine a square with sides of length ${a}; its area is ${solution.calculation.step1.result}`
        });

        // Step 3: Square second leg
        steps.push({
            stepNumber: 3,
            step: 'Square leg b',
            description: `Calculate b²`,
            beforeExpression: `b = ${b}`,
            operation: 'Square',
            afterExpression: `b² = ${solution.calculation.step2.result}`,
            calculation: `${b} × ${b} = ${solution.calculation.step2.result}`,
            reasoning: 'We square this leg for the same reason - to prepare for the Pythagorean formula',
            visualHint: `Imagine a square with sides of length ${b}; its area is ${solution.calculation.step2.result}`
        });

        // Step 4: Add the squares
        steps.push({
            stepNumber: 4,
            step: 'Add the squared values',
            description: 'Calculate a² + b²',
            beforeExpression: `${solution.calculation.step1.result} + ${solution.calculation.step2.result}`,
            operation: 'Add',
            afterExpression: `a² + b² = ${solution.calculation.step3.result}`,
            reasoning: 'According to the Pythagorean theorem, the sum of the squares of the legs equals the square of the hypotenuse',
            algebraicRule: 'Pythagorean Theorem: a² + b² = c²',
            visualHint: 'The combined areas of squares on the two legs equal the area of the square on the hypotenuse'
        });

        // Step 5: Take square root
        steps.push({
            stepNumber: 5,
            step: 'Take the square root',
            description: 'Find c by taking square root of both sides',
            beforeExpression: `c² = ${solution.calculation.step3.result}`,
            operation: '√',
            afterExpression: `c = √${solution.calculation.step3.result}`,
            calculation: `c = ${solution.result}`,
            reasoning: 'Square root undoes the squaring operation, giving us the actual length of the hypotenuse',
            algebraicRule: 'Square root is the inverse of squaring'
        });

        // Step 6: Final answer
        steps.push({
            stepNumber: 6,
            step: 'Solution',
            description: 'State the final answer',
            expression: `c = ${solution.result}`,
            finalAnswer: true,
            reasoning: `The hypotenuse is ${solution.result.toFixed(4)} units long`,
            verification: solution.verification.isValid ? 'Verified ✓' : 'Check calculation',
            interpretation: solution.interpretation
        });

        if (solution.isPythagoreanTriple) {
            steps.push({
                stepNumber: 7,
                step: 'Note',
                description: 'Pythagorean Triple',
                note: `This is a Pythagorean triple: ${a}-${b}-${Math.round(solution.result)}. All three sides are whole numbers!`,
                specialProperty: 'Pythagorean triples are useful for quick calculations and checking answers'
            });
        }

        return steps;
    }

    generateLegSteps(problem, solution) {
        const { c } = problem.parameters;
        const knownLegName = problem.parameters.a !== undefined ? 'a' : 'b';
        const knownLeg = problem.parameters[knownLegName];
        const unknownLegName = solution.unknownLegName;
        
        const steps = [];

        // Step 1: Problem statement
        steps.push({
            stepNumber: 1,
            step: 'Identify the problem',
            description: 'Find a missing leg given hypotenuse and one leg',
            expression: `c = ${c}, ${knownLegName} = ${knownLeg}, ${unknownLegName} = ?`,
            reasoning: 'We know the hypotenuse and one leg; need to find the other leg',
            goalStatement: `Use the rearranged Pythagorean theorem: ${unknownLegName} = √(c² - ${knownLegName}²)`,
            formula: `${unknownLegName}² = c² - ${knownLegName}²`
        });

        // Step 2: Square hypotenuse
        steps.push({
            stepNumber: 2,
            step: 'Square the hypotenuse',
            description: 'Calculate c²',
            beforeExpression: `c = ${c}`,
            operation: 'Square',
            afterExpression: `c² = ${solution.calculation.step1.result}`,
            calculation: `${c} × ${c} = ${solution.calculation.step1.result}`,
            reasoning: 'We need c² for the Pythagorean theorem',
            visualHint: 'This represents the area of the square on the hypotenuse'
        });

        // Step 3: Square known leg
        steps.push({
            stepNumber: 3,
            step: `Square the known leg (${knownLegName})`,
            description: `Calculate ${knownLegName}²`,
            beforeExpression: `${knownLegName} = ${knownLeg}`,
            operation: 'Square',
            afterExpression: `${knownLegName}² = ${solution.calculation.step2.result}`,
            calculation: `${knownLeg} × ${knownLeg} = ${solution.calculation.step2.result}`,
            reasoning: `We need ${knownLegName}² to subtract from c²`,
            visualHint: 'This represents the area of the square on the known leg'
        });

        // Step 4: Subtract
        steps.push({
            stepNumber: 4,
            step: 'Subtract to find unknown leg squared',
            description: `Calculate c² - ${knownLegName}²`,
            beforeExpression: `${solution.calculation.step1.result} - ${solution.calculation.step2.result}`,
            operation: 'Subtract',
            afterExpression: `${unknownLegName}² = ${solution.calculation.step3.result}`,
            reasoning: `From a² + b² = c², we rearrange to get ${unknownLegName}² = c² - ${knownLegName}²`,
            algebraicRule: 'Rearranged Pythagorean Theorem',
            criticalNote: 'IMPORTANT: Always subtract smaller from larger (c² - leg²), never leg² - c²'
        });

        // Step 5: Take square root
        steps.push({
            stepNumber: 5,
            step: 'Take the square root',
            description: `Find ${unknownLegName}`,
            beforeExpression: `${unknownLegName}² = ${solution.calculation.step3.result}`,
            operation: '√',
            afterExpression: `${unknownLegName} = √${solution.calculation.step3.result}`,
            calculation: `${unknownLegName} = ${solution.result}`,
            reasoning: 'Square root gives us the actual length of the missing leg',
            algebraicRule: 'Square root is the inverse of squaring'
        });

        // Step 6: Final answer
        steps.push({
            stepNumber: 6,
            step: 'Solution',
            description: 'State the final answer',
            expression: `${unknownLegName} = ${solution.result}`,
            finalAnswer: true,
            reasoning: solution.interpretation,
            verification: solution.verification.isValid ? 'Verified ✓' : 'Check calculation',
            checkReasonable: solution.checkReasonable
        });

        return steps;
    }

    generateConverseSteps(problem, solution) {
        const { a, b, c } = solution.sortedSides;
        const steps = [];

        // Step 1: Problem statement
        steps.push({
            stepNumber: 1,
            step: 'State the problem',
            description: 'Determine if triangle is right, acute, or obtuse',
            expression: `Given sides: ${problem.parameters.side1}, ${problem.parameters.side2}, ${problem.parameters.side3}`,
            reasoning: 'Use the converse of the Pythagorean theorem to classify the triangle',
            goalStatement: 'Test if a² + b² = c² (right), a² + b² > c² (acute), or a² + b² < c² (obtuse)'
        });

        // Step 2: Identify longest side
        steps.push({
            stepNumber: 2,
            step: 'Identify the longest side',
            description: 'The longest side must be used as c',
            beforeExpression: `Sides: ${a}, ${b}, ${c}`,
            afterExpression: `Longest side c = ${c}`,
            reasoning: 'If the triangle is right, the longest side would be the hypotenuse',
            criticalNote: 'ALWAYS use the longest side as c when testing'
        });

        // Step 3: Square all sides
        steps.push({
            stepNumber: 3,
            step: 'Square all three sides',
            description: 'Calculate a², b², and c²',
            calculations: [
                `a² = ${a}² = ${solution.calculation.step2.expressions[0].split('=')[1]}`,
                `b² = ${b}² = ${solution.calculation.step2.expressions[1].split('=')[1]}`,
                `c² = ${c}² = ${solution.calculation.step2.expressions[2].split('=')[1]}`
            ],
            reasoning: 'We need all squared values to apply the test'
        });

        // Step 4: Add squares of shorter sides
        steps.push({
            stepNumber: 4,
            step: 'Add squares of two shorter sides',
            description: 'Calculate a² + b²',
            calculation: solution.calculation.step3.expression,
            result: solution.verification.aSquaredPlusBSquared,
            reasoning: 'This sum will be compared to c²'
        });

        // Step 5: Compare
        steps.push({
            stepNumber: 5,
            step: 'Compare a² + b² with c²',
            description: 'Determine the relationship',
            comparison: {
                sumOfSmaller: solution.verification.aSquaredPlusBSquared,
                largestSquared: solution.verification.cSquared,
                relationship: solution.verification.comparison
            },
            reasoning: 'The comparison tells us the triangle type',
            interpretation: solution.verification.comparison
        });

        // Step 6: Conclusion
        steps.push({
            stepNumber: 6,
            step: 'Conclusion',
            description: 'State the triangle type',
            expression: `Triangle is ${solution.result}`,
            finalAnswer: true,
            reasoning: solution.interpretation,
            rule: {
                'Right Triangle': 'a² + b² = c²',
                'Acute Triangle': 'a² + b² > c² (all angles < 90°)',
                'Obtuse Triangle': 'a² + b² < c² (one angle > 90°)'
            }[solution.result]
        });

        if (solution.isPythagoreanTriple) {
            steps.push({
                stepNumber: 7,
                step: 'Special Note',
                description: 'Pythagorean Triple',
                note: `This is a Pythagorean triple: ${a}-${b}-${c}. Perfect whole number right triangle!`
            });
        }

        return steps;
    }

    generateDistanceSteps(problem, solution) {
        const { x1, y1, x2, y2 } = problem.parameters;
        const steps = [];

        // Step 1: Problem statement
        steps.push({
            stepNumber: 1,
            step: 'Identify the problem',
            description: 'Find distance between two points',
            expression: `Point 1: (${x1}, ${y1}), Point 2: (${x2}, ${y2})`,
            reasoning: 'The distance formula is based on the Pythagorean theorem',
            goalStatement: 'd = √((x₂-x₁)² + (y₂-y₁)²)',
            geometricInterpretation: 'Horizontal and vertical distances form legs of a right triangle; direct distance is the hypotenuse'
        });

        // Step 2: Find horizontal distance
        steps.push({
            stepNumber: 2,
            step: 'Find horizontal distance',
            description: 'Calculate Δx = x₂ - x₁',
            calculation: `Δx = ${x2} - ${x1} = ${solution.calculation.step1.result}`,
            result: solution.calculation.step1.result,
            reasoning: 'This is the horizontal leg of our right triangle',
            visualHint: 'Draw a horizontal line between the two x-coordinates'
        });

        // Step 3: Find vertical distance
        steps.push({
            stepNumber: 3,
            step: 'Find vertical distance',
            description: 'Calculate Δy = y₂ - y₁',
            calculation: `Δy = ${y2} - ${y1} = ${solution.calculation.step2.result}`,
            result: solution.calculation.step2.result,
            reasoning: 'This is the vertical leg of our right triangle',
            visualHint: 'Draw a vertical line between the two y-coordinates'
        });

        // Step 4: Square horizontal distance
        steps.push({
            stepNumber: 4,
            step: 'Square the horizontal distance',
            description: 'Calculate (Δx)²',
            calculation: solution.calculation.step3.expression,
            result: solution.calculation.step3.result,
            reasoning: 'Squaring is part of the Pythagorean theorem formula'
        });

        // Step 5: Square vertical distance
        steps.push({
            stepNumber: 5,
            step: 'Square the vertical distance',
            description: 'Calculate (Δy)²',
            calculation: solution.calculation.step4.expression,
            result: solution.calculation.step4.result,
            reasoning: 'Squaring the second leg'
        });

        // Step 6: Add the squares
        steps.push({
            stepNumber: 6,
            step: 'Add the squared values',
            description: 'Calculate (Δx)² + (Δy)²',
            calculation: solution.calculation.step5.expression,
            result: solution.calculation.step5.result,
            reasoning: 'Sum of squares of legs equals square of hypotenuse',
            algebraicRule: 'Pythagorean Theorem'
        });

        // Step 7: Take square root
        steps.push({
            stepNumber: 7,
            step: 'Take the square root',
            description: 'Find the distance',
            calculation: solution.calculation.step6.expression,
            result: solution.result,
            reasoning: 'Square root gives us the actual distance',
            finalAnswer: true
        });

        // Step 8: Final answer
        steps.push({
            stepNumber: 8,
            step: 'Solution',
            description: 'State the distance',
            expression: `d = ${solution.result.toFixed(4)} units`,
            finalAnswer: true,
            reasoning: solution.interpretation,
            components: `Horizontal: ${solution.components.horizontalDistance}, Vertical: ${solution.components.verticalDistance}, Direct: ${solution.components.directDistance.toFixed(4)}`
        });

        return steps;
    }

    generateWordProblemSteps(problem, solution) {
        const steps = [];

        // Word problems already have their steps from the specific solver
        // Just add introductory step
        steps.push({
            stepNumber: 1,
            step: 'Understand the problem',
            description: 'Translate word problem to mathematical form',
            scenario: solution.scenario || problem.scenario,
            reasoning: 'Identify the right triangle and what we need to find',
            diagram: solution.diagram || 'Draw a right triangle representing the situation',
            goalStatement: 'Determine which values are legs and which is hypotenuse'
        });

        // Add the calculation steps from the solution
        let stepNum = 2;
        for (const [key, calc] of Object.entries(solution.calculation || {})) {
            steps.push({
                stepNumber: stepNum++,
                step: calc.description,
                expression: calc.expression,
                result: calc.result,
                ...calc
            });
        }

        // Add final interpretation
        steps.push({
            stepNumber: stepNum,
            step: 'Answer in context',
            description: 'Interpret the result',
            expression: solution.interpretation,
            finalAnswer: true,
            verification: solution.verification?.isValid ? 'Verified ✓' : ''
        });

        return steps;
    }

    generate3DSteps(problem, solution) {
        const { x1, y1, z1, x2, y2, z2 } = problem.parameters;
        const steps = [];

        // Step 1: Problem statement
        steps.push({
            stepNumber: 1,
            step: 'Identify the 3D problem',
            description: 'Find distance between two points in 3D space',
            expression: `Point 1: (${x1}, ${y1}, ${z1}), Point 2: (${x2}, ${y2}, ${z2})`,
            reasoning: 'Extend Pythagorean theorem to three dimensions',
            goalStatement: 'd = √((x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²)',
            note: 'This is like applying Pythagorean theorem twice'
        });

        // Add displacement calculations
        let stepNum = 2;
        for (const calc of Object.values(solution.calculation).slice(0, 3)) {
            steps.push({
                stepNumber: stepNum++,
                step: calc.description,
                calculation: calc.expression,
                result: calc.result,
                reasoning: `Finding displacement in ${calc.description.includes('x') ? 'x' : calc.description.includes('y') ? 'y' : 'z'} direction`
            });
        }

        // Add squaring steps
        steps.push({
            stepNumber: stepNum++,
            step: 'Square all displacements',
            description: 'Calculate (Δx)², (Δy)², and (Δz)²',
            calculations: solution.calculation.step4.expressions,
            reasoning: 'Need all squared values for 3D Pythagorean formula'
        });

        // Add sum
        steps.push({
            stepNumber: stepNum++,
            step: 'Sum the squared values',
            description: 'Calculate (Δx)² + (Δy)² + (Δz)²',
            calculation: solution.calculation.step5.expression,
            result: solution.calculation.step5.result,
            reasoning: 'Sum represents the square of the 3D distance'
        });

        // Add square root
        steps.push({
            stepNumber: stepNum++,
            step: 'Take the square root',
            description: 'Find the 3D distance',
            calculation: solution.calculation.step6.expression,
            result: solution.result,
            reasoning: 'Square root gives us the actual 3D distance',
            finalAnswer: true
        });

        steps.push({
            stepNumber: stepNum,
            step: 'Solution',
            description: 'State the 3D distance',
            expression: `d = ${solution.result.toFixed(4)} units`,
            finalAnswer: true,
            reasoning: solution.interpretation
        });

        return steps;
    }

    generateGenericPythagoreanSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Pythagorean problem',
            description: solution.type || 'Solve using Pythagorean theorem',
            expression: problem.cleanInput || 'Pythagorean relationship',
            reasoning: 'Apply Pythagorean theorem: a² + b² = c²',
            solution: solution
        }];
    }

    // (Continue with the enhanced explanation methods, workbook generation, etc. - these will be identical in structure to the linear workbook but adapted for Pythagorean context)

    // ENHANCED EXPLANATION METHODS (adapted for Pythagorean)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanationPythagorean(step, problem),
                procedural: this.getProceduralExplanationPythagorean(step),
                visual: this.getVisualExplanationPythagorean(step, problem),
                algebraic: this.getAlgebraicExplanationPythagorean(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisites(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyPythagorean(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPromptsPythagorean(step);
        }

        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestionPythagorean(step);
        }

        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findRealWorldConnectionPythagorean(step, problem);
        }

        return enhanced;
    }

    getConceptualExplanationPythagorean(step, problem) {
        const conceptualExplanations = {
            'Identify the problem': 'The Pythagorean theorem describes the relationship between the three sides of a right triangle',
            'Square leg a': 'Squaring creates the area of a square built on that side',
            'Square leg b': 'Squaring the second leg creates another square area',
            'Add the squared values': 'The combined areas of squares on the two legs equal the area of the square on the hypotenuse',
            'Take the square root': 'Square root converts from area back to length',
            'Square the hypotenuse': 'Finding the area of the square on the longest side',
            'Subtract to find unknown leg squared': 'Removing one leg\'s square area from the hypotenuse square area leaves the other leg\'s square area'
        };

        return conceptualExplanations[step.step] || 'This step applies the Pythagorean relationship a² + b² = c²';
    }

    getProceduralExplanationPythagorean(step) {
        if (step.calculation) {
            return `Perform the calculation: ${step.calculation}`;
        }
        return 'Follow the indicated operation';
    }

    getVisualExplanationPythagorean(step, problem) {
        const visualExplanations = {
            'Square leg a': 'Imagine drawing a square on side a of the triangle',
            'Square leg b': 'Imagine drawing a square on side b of the triangle',
            'Add the squared values': 'Picture the two smaller squares fitting together to equal the large square on the hypotenuse',
            'Take the square root': 'Find the side length of a square with this area',
            'Find horizontal distance': 'Draw a horizontal line from point 1 to point 2',
            'Find vertical distance': 'Draw a vertical line, creating a right angle'
        };

        return visualExplanations[step.step] || 'Visualize the right triangle with labeled sides';
    }

    getAlgebraicExplanationPythagorean(step) {
        const algebraicRules = {
            'Square leg a': 'a² = a × a',
            'Square leg b': 'b² = b × b',
            'Add the squared values': 'Pythagorean Theorem: a² + b² = c²',
            'Take the square root': 'c = √(a² + b²)',
            'Square the hypotenuse': 'c² (needed for rearranged theorem)',
            'Subtract to find unknown leg squared': 'Rearranged theorem: leg² = c² - other_leg²'
        };

        return step.algebraicRule || algebraicRules[step.step] || 'Apply standard algebraic operations';
    }

    identifyKeyVocabularyPythagorean(step) {
        const vocabulary = {
            'Identify the problem': ['right triangle', 'hypotenuse', 'legs', 'Pythagorean theorem'],
            'Square leg a': ['square', 'exponent', 'leg'],
            'Square leg b': ['square', 'exponent', 'leg'],
            'Add the squared values': ['sum', 'squares', 'Pythagorean theorem'],
            'Take the square root': ['square root', 'hypotenuse', 'radical'],
            'Identify the longest side': ['hypotenuse', 'longest side', 'right angle'],
            'Compare a² + b² with c²': ['converse', 'right triangle', 'acute', 'obtuse']
        };

        return vocabulary[step.step] || ['right triangle', 'Pythagorean theorem'];
    }

    generateThinkingPromptsPythagorean(step) {
        return {
            before: 'What do I know about this right triangle at this point?',
            during: 'Am I squaring before adding? Am I using the longest side as the hypotenuse?',
            after: 'Does my answer make sense? Is the hypotenuse longer than either leg?'
        };
    }

    generateSelfCheckQuestionPythagorean(step) {
        const questions = {
            'Square leg a': 'Did I square the number (multiply it by itself)?',
            'Square leg b': 'Did I square this leg too?',
            'Add the squared values': 'Did I add the SQUARED values, not the original lengths?',
            'Take the square root': 'Did I remember to take the square root at the end?',
            'Subtract to find unknown leg squared': 'Did I subtract in the correct order (c² - leg²)?',
            'Identify the longest side': 'Is this actually the longest of the three sides?'
        };

        return questions[step.step] || 'Does this step follow logically from the previous one?';
    }

    findRealWorldConnectionPythagorean(step, problem) {
        const connections = {
            'finding_hypotenuse': 'Like finding the diagonal distance across a room when you know length and width',
            'finding_leg': 'Like figuring out how far a ladder base should be from a wall when you know ladder length and height',
            'distance_formula': 'GPS systems use this to calculate straight-line distances between locations',
            'converse_pythagorean': 'Carpenters use this to check if corners are truly square'
        };

        const category = this.pythagoreanTypes[problem.type]?.category;
        return connections[category] || 'The Pythagorean theorem appears everywhere from construction to computer graphics';
    }

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateELI5ExplanationPythagorean(step, problem),
                analogy: this.findRelevantAnalogyPythagorean(step, problem),
                simpleLanguage: this.convertToSimpleLanguagePythagorean(step.description),
                visualization: this.suggestVisualizationPythagorean(step)
            }
        }));
    }

    generateELI5ExplanationPythagorean(step, problem) {
        const ELI5Explanations = {
            'Identify the problem': "We have a triangle with a perfect corner (like the corner of a room). We want to find how long one of the sides is!",
            'Square leg a': "We make a square using this side. It's like making a square blanket where each side is this long. How big is the blanket?",
            'Square leg b': "Now we make another square blanket using the other side. How big is THIS blanket?",
            'Add the squared values': "Here's the magic: if we put both small square blankets together, they're exactly as big as one big square blanket on the longest side!",
            'Take the square root': "Now we work backwards: if we know how big the big square blanket is, we can figure out how long each side of it must be!",
            'Find horizontal distance': "Imagine walking straight across (left to right or right to left) from one point to the other.",
            'Find vertical distance': "Now imagine walking straight up or down from one point to the other."
        };

        return ELI5Explanations[step.step] || "We're using a special math trick that works perfectly for triangles with square corners!";
    }

    findRelevantAnalogyPythagorean(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(problem.type) || analogy.suitableFor.includes('all_categories')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "It's like a puzzle where the pieces fit together in a special way!";
    }

    convertToSimpleLanguagePythagorean(description) {
        const simplifications = {
            'hypotenuse': 'longest side (across from the square corner)',
            'leg': 'one of the two shorter sides',
            'square': 'times itself',
            'square root': 'find what number times itself gives this',
            'calculate': 'figure out',
            'substitute': 'put in',
            'verify': 'check',
            'Pythagorean theorem': 'special triangle rule',
            'right triangle': 'triangle with a square corner',
            'converse': 'working backwards'
        };

        let simple = description;
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp(term, 'gi');
            simple = simple.replace(regex, replacement);
        }

        return simple;
    }

    suggestVisualizationPythagorean(step) {
        const visualizations = {
            'Identify the problem': 'Draw a triangle with a square in one corner showing it\'s a right angle',
            'Square leg a': 'Draw a square on side a of the triangle',
            'Square leg b': 'Draw a square on side b of the triangle',
            'Add the squared values': 'Show that the two smaller squares together equal the big square on the hypotenuse',
            'Take the square root': 'Show finding the side length from the area',
            'Find horizontal distance': 'Draw a horizontal arrow between the two points',
            'Find vertical distance': 'Draw a vertical arrow to complete the right triangle'
        };

        return visualizations[step.step] || 'Draw the right triangle with all sides labeled';
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generateStepBridgePythagorean(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgression(steps[i], steps[i + 1]),
                    strategicThinking: this.explainStepStrategy(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateStepBridgePythagorean(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression || 'completed this step'}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary because: ${this.explainStepNecessityPythagorean(currentStep, nextStep)}`,
            howItHelps: `This will help by: ${this.explainStepBenefitPythagorean(nextStep)}`
        };
    }

    explainStepNecessityPythagorean(currentStep, nextStep) {
        return `we need to continue applying the Pythagorean theorem formula`;
    }

    explainStepBenefitPythagorean(nextStep) {
        return `moving us toward finding the unknown side length`;
    }

    addErrorPrevention(step, problemType) {
        const category = this.pythagoreanTypes[problemType]?.category || 'finding_hypotenuse';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsPythagorean(step, problemType),
                checkPoints: this.generateCheckPointsPythagorean(step),
                warningFlags: this.identifyWarningFlagsPythagorean(step, problemType)
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestionPythagorean(step),
                expectedResult: this.describeExpectedResultPythagorean(step),
                troubleshooting: this.generateTroubleshootingTipsPythagorean(step)
            }
        };
    }

    generatePreventionTipsPythagorean(step, problemType) {
        const tips = {
            'Square leg a': [
                'Multiply the number by itself, don\'t add it to itself',
                'Use calculator if needed for larger numbers',
                'Write out: a × a = a²'
            ],
            'Add the squared values': [
                'Add the SQUARED values, not the original leg lengths',
                'Make sure you squared both numbers first',
                'Don\'t take square root until after adding'
            ],
            'Take the square root': [
                'This is the LAST step - don\'t skip it!',
                'Use calculator square root function',
                'Result should be positive'
            ],
            'Subtract to find unknown leg squared': [
                'Always subtract smaller from larger: c² - leg²',
                'If you get negative, you switched the order',
                'Hypotenuse squared must be larger'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Check each calculation'];
    }

    generateCheckPointsPythagorean(step) {
        return [
            'Did I perform the correct operation?',
            'Did I work in the right order (square, then add/subtract, then square root)?',
            'Do my numbers make sense?',
            'Is the hypotenuse the longest side?'
        ];
    }

    identifyWarningFlagsPythagorean(step, problemType) {
        const warnings = {
            finding_hypotenuse: step.step === 'Add the squared values' ?
                ['Don\'t add legs before squaring', 'Don\'t take square root before adding'] : [],
            finding_leg: step.step === 'Subtract to find unknown leg squared' ?
                ['Don\'t subtract in wrong order', 'If result is negative, check your setup'] : []
        };

        const category = this.pythagoreanTypes[problemType]?.category || 'finding_hypotenuse';
        return warnings[category] || [];
    }

    describeExpectedResultPythagorean(step) {
        const expectations = {
            'Square leg a': 'A positive number (area of a square)',
            'Square leg b': 'A positive number (area of a square)',
            'Add the squared values': 'Sum of the two squared values',
            'Take the square root': 'The hypotenuse length (should be larger than either leg)',
            'Subtract to find unknown leg squared': 'A positive number (if negative, error in setup)',
            'Identify the longest side': 'The side with the greatest length'
        };

        return expectations[step.step] || 'Progress toward finding the unknown side';
    }

    generateTroubleshootingTipsPythagorean(step) {
        return [
            'If answer seems wrong, check if you squared before adding/subtracting',
            'Verify you\'re using the longest side as hypotenuse',
            'Make sure you took square root at the end',
            'Check calculator entries for typos',
            'Draw a diagram to visualize the triangle'
        ];
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsPythagorean(step, problem),
                subSteps: this.breakIntoSubStepsPythagorean(step),
                hints: this.generateProgressiveHintsPythagorean(step, problem),
                practiceVariation: this.generatePracticeVariationPythagorean(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcessPythagorean(step),
                decisionPoints: this.identifyDecisionPointsPythagorean(step),
                alternativeApproaches: this.suggestAlternativeMethodsPythagorean(step, problem)
            }
        }));
    }

    generateGuidingQuestionsPythagorean(step, problem) {
        const questions = {
            'Identify the problem': [
                'Do we have a right triangle?',
                'What sides do we know?',
                'What side are we finding?',
                'Which side is the hypotenuse?'
            ],
            'Square leg a': [
                'What does it mean to square a number?',
                'Why do we need to square the sides?',
                'What is a × a?'
            ],
            'Add the squared values': [
                'Have we squared both legs?',
                'What does a² + b² represent?',
                'Why do we add these values?'
            ],
            'Take the square root': [
                'What operation undoes squaring?',
                'Why is this the last step?',
                'What does the square root give us?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'How does this help solve the problem?'];
    }

    breakIntoSubStepsPythagorean(step) {
        if (step.calculation) {
            return [
                'Identify the values to use',
                'Set up the calculation',
                'Perform the operation',
                'Check the result',
                'Write the new equation'
            ];
        }

        return ['Understand the goal', 'Apply the technique', 'Verify the result'];
    }

    generateProgressiveHintsPythagorean(step, problem) {
        const category = this.pythagoreanTypes[problem.type]?.category || 'finding_hypotenuse';
        const hintSet = this.hints[category] || this.hints.finding_hypotenuse;

        return {
            level1: hintSet.level1 || 'Think about what you know and what you need to find.',
            level2: hintSet.level2 || 'Consider which Pythagorean formula applies.',
            level3: hintSet.level3 || 'Apply the formula step by step.',
            level4: hintSet.level4 || 'Calculate the result.',
            level5: hintSet.level5 || 'Check if your answer makes sense.'
        };
    }

    generatePracticeVariationPythagorean(step, problem) {
        return {
            similarProblem: 'Try the same type of problem with different numbers',
            practiceHint: 'Start with Pythagorean triples (3-4-5, 5-12-13) to build confidence',
            extension: 'Once comfortable, try problems with decimals or larger numbers'
        };
    }

    explainThinkingProcessPythagorean(step) {
        return {
            observe: 'What do I see in this triangle?',
            goal: 'What am I trying to find?',
            strategy: 'Which form of the Pythagorean theorem should I use?',
            execute: 'How do I perform the calculation correctly?',
            verify: 'Does my result make sense for a right triangle?'
        };
    }

    identifyDecisionPointsPythagorean(step) {
        return [
            'Which side is the hypotenuse?',
            'Am I finding the hypotenuse or a leg?',
            'Do I add or subtract the squared values?',
            'Should I take the square root now?'
        ];
    }

    suggestAlternativeMethodsPythagorean(step, problem) {
        const alternatives = {
            'finding_hypotenuse': [
                'Can recognize this as a Pythagorean triple for faster solution',
                'Could use distance formula if working on coordinate plane',
                'Could estimate answer first to check if calculation is reasonable'
            ],
            'finding_leg': [
                'Could rearrange formula first, then substitute',
                'Could check if it\'s a known Pythagorean triple',
                'Could work with areas of squares conceptually'
            ]
        };

        const category = this.pythagoreanTypes[problem.type]?.category;
        return alternatives[category] || ['The chosen method is appropriate for this problem'];
    }

    // DIAGRAM GENERATION

    generatePythagoreanDiagram() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;
        const category = this.pythagoreanTypes[type]?.category;

        if (category) {
            this.graphData = this.generateTriangleDiagram(this.currentProblem, this.currentSolution);
        }
    }

    generateTriangleDiagram(problem, solution) {
        let a, b, c;

        // Extract triangle dimensions based on solution type
        if (solution.givenSides) {
            a = solution.givenSides.a || solution.result;
            b = solution.givenSides.b || solution.givenSides[solution.unknownLegName === 'a' ? 'b' : 'a'];
            c = solution.givenSides.c;
        }

        if (solution.sortedSides) {
            a = solution.sortedSides.a;
            b = solution.sortedSides.b;
            c = solution.sortedSides.c;
        }

        return {
            type: 'right_triangle',
            dimensions: { a, b, c },
            description: `Right triangle with legs ${a?.toFixed(2)} and ${b?.toFixed(2)}, hypotenuse ${c?.toFixed(2)}`,
            labels: {
                sideA: `a = ${a?.toFixed(2)}`,
                sideB: `b = ${b?.toFixed(2)}`,
                sideC: `c = ${c?.toFixed(2)} (hypotenuse)`
            },
            rightAngleLocation: 'between legs a and b',
            visualization: 'Draw right triangle with right angle marked; label all sides'
        };
    }

    // WORKBOOK GENERATION

    generatePythagoreanWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createTriangleVisualizationSection(),
            this.createEnhancedStepsSection(),
            this.createPythagoreanLessonSection(),
            this.createSolutionSection(),
            this.createAnalysisSection(),
            this.createVerificationSection(),
            this.createRealWorldApplicationSection(),
            this.createHistoricalContextSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection(),
            this.createPracticeProblemsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Triangle Pythagorean Mathematical Workbook',
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
            ['Problem Type', this.pythagoreanTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.pythagoreanTypes[this.currentProblem.type]?.category || 'pythagorean'],
            ['Description', this.currentProblem.scenario || this.currentSolution?.type || 'Pythagorean theorem problem']
        ];

        // Add given values
        if (this.currentProblem.parameters) {
            problemData.push(['', '']);
            problemData.push(['Given Values', '']);
            
            for (const [key, value] of Object.entries(this.currentProblem.parameters)) {
                if (value !== undefined && value !== null) {
                    let label = key;
                    if (key === 'a' || key === 'b') label = `Leg ${key}`;
                    if (key === 'c') label = 'Hypotenuse c';
                    if (key.startsWith('x') || key.startsWith('y') || key.startsWith('z')) label = `Coordinate ${key}`;
                    
                    problemData.push([label, value]);
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

        const category = this.pythagoreanTypes[this.currentProblem.type]?.category;
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

    createTriangleVisualizationSection() {
        if (!this.graphData) return null;

        const vizData = [
            ['Triangle Type', 'Right Triangle'],
            ['', ''],
            ['Dimensions', '']
        ];

        if (this.graphData.dimensions) {
            const { a, b, c } = this.graphData.dimensions;
            if (a) vizData.push(['Leg a', a.toFixed(4)]);
            if (b) vizData.push(['Leg b', b.toFixed(4)]);
            if (c) vizData.push(['Hypotenuse c', c.toFixed(4)]);
        }

        vizData.push(['', '']);
        vizData.push(['Visualization', this.graphData.description || 'Right triangle diagram']);
        vizData.push(['Right Angle', this.graphData.rightAngleLocation || 'Between the two legs']);

        return {
            title: 'Triangle Visualization',
            type: 'diagram',
            data: vizData
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
                stepsData.push(['Current State', step.explanation.currentState]);
                stepsData.push(['Next Goal', step.explanation.nextGoal]);
                stepsData.push(['', '']);
                return;
            }

            stepsData.push([`Step ${step.stepNumber}`, step.description]);

            if (step.calculation) {
                stepsData.push(['Calculation', step.calculation]);
            }

            if (step.beforeExpression && step.afterExpression) {
                stepsData.push(['Before', step.beforeExpression]);
                if (step.operation) {
                    stepsData.push(['Operation', step.operation]);
                }
                stepsData.push(['After', step.afterExpression]);
            } else if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            if (step.result !== undefined) {
                stepsData.push(['Result', typeof step.result === 'number' ? step.result.toFixed(4) : step.result]);
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
                stepsData.push(['Visual', step.explanations.visual]);
            }

            // Visual hints
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

    createPythagoreanLessonSection() {
        const { type } = this.currentProblem;
        const category = this.pythagoreanTypes[type]?.category;
        const lesson = this.lessons[category] || this.lessons.pythagorean_theorem;

        const lessonData = [
            ['Topic', lesson.title],
            ['', ''],
            ['Key Concepts', '']
        ];

        lesson.concepts.forEach((concept, index) => {
            lessonData.push([`${index + 1}`, concept]);
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

        if (lesson.solvingSteps) {
            lessonData.push(['', '']);
            lessonData.push(['Solving Steps', '']);
            lesson.solvingSteps.forEach((step, index) => {
                lessonData.push([`${index + 1}`, step]);
            });
        }

        return {
            title: 'Key Concepts & Theory',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        if (this.currentSolution.result !== undefined && this.currentSolution.result !== null) {
            if (typeof this.currentSolution.result === 'number') {
                solutionData.push(['Result', this.currentSolution.result.toFixed(4)]);
                
                // Check for Pythagorean triple
                if (this.currentSolution.isPythagoreanTriple) {
                    solutionData.push(['Special Property', 'This is a Pythagorean Triple (all whole numbers)!']);
                }
            } else {
                solutionData.push(['Result', this.currentSolution.result]);
            }

            solutionData.push(['Solution Type', this.currentSolution.type || 'Pythagorean Theorem']);
        }

        if (this.currentSolution.interpretation) {
            solutionData.push(['Interpretation', this.currentSolution.interpretation]);
        }

        if (this.currentSolution.checkReasonable) {
            solutionData.push(['Reasonableness Check', this.currentSolution.checkReasonable]);
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
            ['Problem Type', this.currentSolution.type || this.currentSolution.category],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Explanation Level', this.explanationLevel],
            ['Category', this.pythagoreanTypes[this.currentProblem.type]?.category]
        ];

        if (this.currentSolution.formula) {
            analysisData.push(['Formula Used', this.currentSolution.formula]);
        }

        if (this.currentSolution.isPythagoreanTriple) {
            analysisData.push(['Pythagorean Triple', 'Yes - all integer sides']);
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSection() {
        if (!this.currentSolution) return null;

        const verification = this.currentSolution.verification;
        if (!verification) return null;

        const verificationData = [
            ['Verification Method', 'Substitution into Pythagorean Theorem'],
            ['', ''],
            ['Equation', verification.equation],
            ['Substitution', verification.substitution],
            ['Left Side (a² + b²)', verification.leftSide.toFixed(4)],
            ['Right Side (c²)', verification.rightSide.toFixed(4)],
            ['Difference', verification.difference.toExponential(2)],
            ['Valid', verification.isValid ? 'Yes ✓' : 'No ✗'],
            ['', '']
        ];

        if (verification.isValid) {
            verificationData.push(['Conclusion', 'Solution verified! The values satisfy the Pythagorean theorem.']);
        } else {
            verificationData.push(['Note', 'Check calculations - values do not satisfy Pythagorean theorem.']);
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
            ['Real-World Applications of Pythagorean Theorem', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Context', app.context]);
            if (app.examples && app.examples[0]) {
                appData.push(['Example', app.examples[0]]);
            }
            if (app.safetyNote || app.practicalTip || app.sportsFact) {
                appData.push(['Note', app.safetyNote || app.practicalTip || app.sportsFact]);
            }
            appData.push(['', '']);
        });

        return {
            title: 'Real-World Applications',
            type: 'applications',
            data: appData
        };
    }

    createHistoricalContextSection() {
        if (!this.includeHistoricalContext) return null;

        const histData = [
            ['Historical Context of Pythagorean Theorem', ''],
            ['', ''],
            ['Ancient Origins', ''],
            ['Era', this.historicalContext.ancientOrigins.era],
            ['Civilization', this.historicalContext.ancientOrigins.civilization],
            ['Evidence', this.historicalContext.ancientOrigins.evidence],
            ['', ''],
            ['Pythagoras', ''],
            ['Era', this.historicalContext.pythagoras.era],
            ['Contribution', this.historicalContext.pythagoras.contribution],
            ['Note', this.historicalContext.pythagoras.note],
            ['', ''],
            ['Cultural Impact', ''],
            ['Recognition', this.historicalContext.culturalImpact.recognition],
            ['Education', this.historicalContext.culturalImpact.education],
            ['Number of Proofs', this.historicalContext.culturalImpact.proofs]
        ];

        return {
            title: 'Historical Context',
            type: 'historical',
            data: histData
        };
    }

    createPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const notes = this.generatePythagoreanPedagogicalNotes(this.currentProblem.type);

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

        const alternatives = this.generatePythagoreanAlternativeMethods(this.currentProblem.type);

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
                ['Method Comparison',alternatives.comparison]
            ]
        };
    }

    createPracticeProblemsSection() {
        const category = this.pythagoreanTypes[this.currentProblem.type]?.category;
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

    generatePythagoreanPedagogicalNotes(problemType) {
        const category = this.pythagoreanTypes[problemType]?.category;

        const pedagogicalDatabase = {
            finding_hypotenuse: {
                objectives: [
                    'Apply Pythagorean theorem to find hypotenuse',
                    'Square numbers accurately',
                    'Add squared values correctly',
                    'Take square roots',
                    'Verify solutions'
                ],
                keyConcepts: [
                    'Hypotenuse is longest side, opposite right angle',
                    'Formula: c = √(a² + b²)',
                    'Must square BEFORE adding',
                    'Square root is the LAST step',
                    'Result must be longer than either leg'
                ],
                prerequisites: [
                    'Identifying right triangles',
                    'Squaring numbers',
                    'Adding',
                    'Square roots',
                    'Understanding hypotenuse vs legs'
                ],
                commonDifficulties: [
                    'Adding legs before squaring',
                    'Taking square root before adding',
                    'Confusing which side is hypotenuse',
                    'Calculator errors with square roots',
                    'Not verifying answer is reasonable'
                ],
                teachingStrategies: [
                    'Use square areas visual proof',
                    'Practice with Pythagorean triples first',
                    'Emphasize order: square, add, square root',
                    'Show common errors and corrections',
                    'Use real-world examples (TV diagonal, room corner)'
                ],
                extensions: [
                    'Finding legs when hypotenuse is known',
                    'Distance formula on coordinate plane',
                    'Word problems with context',
                    '3D distance formula',
                    'Pythagorean triples exploration'
                ],
                assessment: [
                    'Can student identify hypotenuse?',
                    'Does student square before adding?',
                    'Does student take square root at end?',
                    'Can student verify answer is reasonable?',
                    'Can student apply to word problems?'
                ]
            },

            finding_leg: {
                objectives: [
                    'Apply rearranged Pythagorean theorem to find leg',
                    'Subtract squared values in correct order',
                    'Recognize when subtraction gives negative (error)',
                    'Verify leg is shorter than hypotenuse'
                ],
                keyConcepts: [
                    'Rearranged formula: leg = √(c² - other_leg²)',
                    'Must subtract smaller from larger (c² - leg²)',
                    'Negative under square root means setup error',
                    'Answer must be less than hypotenuse',
                    'Hypotenuse must be longest side'
                ],
                prerequisites: [
                    'Finding hypotenuse',
                    'Squaring and square roots',
                    'Subtraction',
                    'Understanding c is always largest',
                    'Algebraic rearrangement concept'
                ],
                commonDifficulties: [
                    'Subtracting in wrong order (leg² - c²)',
                    'Using wrong side as hypotenuse',
                    'Not recognizing negative result as error',
                    'Confusing which formula to use',
                    'Not checking if answer < hypotenuse'
                ],
                teachingStrategies: [
                    'Emphasize c² must be larger',
                    'Show what happens with wrong order',
                    'Practice identifying hypotenuse first',
                    'Use ladder problems for context',
                    'Color-code hypotenuse vs legs'
                ],
                extensions: [
                    'Missing leg in word problems',
                    'Optimization problems (minimize/maximize)',
                    'Ladder safety calculations',
                    'Height from distance problems'
                ],
                assessment: [
                    'Does student identify hypotenuse correctly?',
                    'Does student subtract in correct order?',
                    'Does student recognize negative result error?',
                    'Can student verify answer is reasonable?'
                ]
            },

            converse_pythagorean: {
                objectives: [
                    'Apply converse to test for right triangles',
                    'Identify longest side for testing',
                    'Distinguish right, acute, and obtuse triangles',
                    'Understand when Pythagorean theorem applies'
                ],
                keyConcepts: [
                    'Converse tests IF triangle is right',
                    'Must use longest side as c',
                    'a² + b² = c² → right triangle',
                    'a² + b² > c² → acute triangle',
                    'a² + b² < c² → obtuse triangle'
                ],
                prerequisites: [
                    'Pythagorean theorem',
                    'Comparing numbers',
                    'Understanding triangle types',
                    'Identifying longest side'
                ],
                commonDifficulties: [
                    'Not using longest side as c',
                    'Confusing acute/obtuse test results',
                    'Not squaring before comparing',
                    'Thinking any triangle can use Pythagorean theorem'
                ],
                teachingStrategies: [
                    'Start with known right triangles to verify',
                    'Show non-right triangle examples',
                    'Practice identifying longest side',
                    'Use carpenter\'s 3-4-5 method',
                    'Connect to construction applications'
                ],
                extensions: [
                    'Triangle inequality theorem',
                    'Law of cosines (generalization)',
                    'Practical construction uses',
                    'Verifying right angles without protractor'
                ],
                assessment: [
                    'Can student identify longest side?',
                    'Does student square all sides?',
                    'Can student interpret comparison correctly?',
                    'Does student understand when to apply test?'
                ]
            },

            distance_formula: {
                objectives: [
                    'Apply Pythagorean theorem to coordinate plane',
                    'Find horizontal and vertical distances',
                    'Calculate direct distance between points',
                    'Recognize connection to Pythagorean theorem'
                ],
                keyConcepts: [
                    'Distance formula is Pythagorean theorem',
                    'Horizontal distance = Δx = x₂ - x₁',
                    'Vertical distance = Δy = y₂ - y₁',
                    'd = √(Δx² + Δy²)',
                    'Forms right triangle on coordinate plane'
                ],
                prerequisites: [
                    'Coordinate plane plotting',
                    'Subtraction with signed numbers',
                    'Pythagorean theorem',
                    'Squaring negative numbers'
                ],
                commonDifficulties: [
                    'Sign errors in subtraction',
                    'Forgetting squares make values positive',
                    'Not seeing the right triangle',
                    'Coordinate confusion (which is x, which is y)'
                ],
                teachingStrategies: [
                    'Plot points and draw the triangle',
                    'Show horizontal and vertical legs visually',
                    'Connect to "as crow flies" concept',
                    'Practice with simple coordinates first',
                    'Use graph paper for visualization'
                ],
                extensions: [
                    '3D distance formula',
                    'Midpoint formula',
                    'Circle equations',
                    'GPS and navigation applications'
                ],
                assessment: [
                    'Can student find Δx and Δy correctly?',
                    'Does student handle negative coordinates?',
                    'Can student visualize the right triangle?',
                    'Does student apply Pythagorean correctly?'
                ]
            },

            word_problems: {
                objectives: [
                    'Translate word problems to Pythagorean setups',
                    'Draw diagrams from descriptions',
                    'Identify right triangles in real situations',
                    'Interpret answers in context'
                ],
                keyConcepts: [
                    'Many real situations form right triangles',
                    'Identify what forms the right angle',
                    'Determine which measurement is hypotenuse',
                    'Check answer makes sense in context',
                    'Include units in final answer'
                ],
                prerequisites: [
                    'Reading comprehension',
                    'Pythagorean theorem mastery',
                    'Drawing diagrams',
                    'Unit awareness'
                ],
                commonDifficulties: [
                    'Not drawing diagram',
                    'Misidentifying hypotenuse',
                    'Confusing which angle is right angle',
                    'Unit conversion errors',
                    'Not checking reasonableness'
                ],
                teachingStrategies: [
                    'Always start with diagram',
                    'Use familiar contexts (ladder, TV, room)',
                    'Practice identifying right angle location',
                    'Check answers with estimation',
                    'Use Pythagorean triples for verification'
                ],
                extensions: [
                    'Multi-step problems',
                    'Optimization problems',
                    'Navigation and surveying',
                    'Engineering applications'
                ],
                assessment: [
                    'Can student draw accurate diagram?',
                    'Does student identify right components?',
                    'Can student set up correct equation?',
                    'Does student interpret answer in context?',
                    'Are units included and correct?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Apply Pythagorean theorem correctly'],
            keyConcepts: ['a² + b² = c² for right triangles'],
            prerequisites: ['Basic geometry'],
            commonDifficulties: ['Computational errors'],
            teachingStrategies: ['Clear explanations and practice'],
            extensions: ['More complex applications'],
            assessment: ['Verify understanding of theorem']
        };
    }

    generatePythagoreanAlternativeMethods(problemType) {
        const category = this.pythagoreanTypes[problemType]?.category;

        const alternativeDatabase = {
            finding_hypotenuse: {
                primaryMethod: 'Standard Pythagorean formula: c = √(a² + b²)',
                methods: [
                    {
                        name: 'Pythagorean Triple Recognition',
                        description: 'If legs are 3 and 4 (or multiples), immediately know hypotenuse is 5 (or multiple)'
                    },
                    {
                        name: 'Area of Squares Method',
                        description: 'Draw squares on each side; areas of two smaller equal area of largest'
                    },
                    {
                        name: 'Distance Formula',
                        description: 'If legs represent coordinate displacements, use d = √(Δx² + Δy²)'
                    },
                    {
                        name: 'Trigonometric Method',
                        description: 'If angle is known, use c = a/sin(A) or c = b/sin(B)'
                    }
                ],
                comparison: 'Standard formula works always; Pythagorean triples fastest for whole numbers; trigonometry useful when angles known'
            },

            finding_leg: {
                primaryMethod: 'Rearranged Pythagorean: leg = √(c² - other_leg²)',
                methods: [
                    {
                        name: 'Pythagorean Triple Recognition',
                        description: 'If hypotenuse is 5 and one leg is 3, immediately know other is 4'
                    },
                    {
                        name: 'Area Subtraction Method',
                        description: 'Subtract known leg square area from hypotenuse square area, then find side length'
                    },
                    {
                        name: 'Trigonometric Method',
                        description: 'If angle known, use a = c·sin(A) or b = c·cos(A)'
                    },
                    {
                        name: 'Guess and Check',
                        description: 'For small numbers, try values and check if a² + b² = c²'
                    }
                ],
                comparison: 'Rearranged formula is most reliable; triple recognition fastest when applicable; trigonometry good with angles'
            },

            converse_pythagorean: {
                primaryMethod: 'Compare a² + b² with c² to determine triangle type',
                methods: [
                    {
                        name: 'Pythagorean Triple Lookup',
                        description: 'Check if sides match known triple (immediate right triangle)'
                    },
                    {
                        name: 'Geometric Construction',
                        description: 'Construct triangle and measure angle with protractor'
                    },
                    {
                        name: 'Law of Cosines',
                        description: 'Calculate c² = a² + b² - 2ab·cos(C); if cos(C)=0, then C=90°'
                    },
                    {
                        name: 'Carpenter\'s Method',
                        description: 'Physical measurement: measure 3-4-5 or multiple to verify right angle'
                    }
                ],
                comparison: 'Converse test is pure calculation; construction is visual verification; Law of Cosines more general; carpenter method practical'
            },

            distance_formula: {
                primaryMethod: 'Distance formula: d = √((x₂-x₁)² + (y₂-y₁)²)',
                methods: [
                    {
                        name: 'Pythagorean Theorem Explicitly',
                        description: 'Calculate Δx and Δy as legs, then use c = √(a² + b²)'
                    },
                    {
                        name: 'Graphical Method',
                        description: 'Plot points, draw right triangle, count squares and use Pythagorean'
                    },
                    {
                        name: 'Vector Magnitude',
                        description: 'Treat as displacement vector; magnitude is ||v|| = √(v_x² + v_y²)'
                    },
                    {
                        name: 'Coordinate Geometry',
                        description: 'Use coordinate geometry formulas and properties'
                    }
                ],
                comparison: 'Distance formula is most direct; explicit Pythagorean clarifies connection; graphical good for visualization'
            },

            word_problems: {
                primaryMethod: 'Draw diagram, identify right triangle, apply appropriate formula',
                methods: [
                    {
                        name: 'Diagram-First Approach',
                        description: 'Always draw labeled diagram before any calculations'
                    },
                    {
                        name: 'Table Method',
                        description: 'Create table of known/unknown values, then solve systematically'
                    },
                    {
                        name: 'Pythagorean Triple Shortcut',
                        description: 'If numbers suggest triple, use it for quick answer'
                    },
                    {
                        name: 'Working Backwards',
                        description: 'Start with what you want to find, work backwards to what you know'
                    }
                ],
                comparison: 'Diagram-first ensures correct setup; table organizes information; triples save time when applicable'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard Pythagorean theorem application',
            methods: [{
                name: 'Alternative approach',
                description: 'Other methods depend on specific problem context'
            }],
            comparison: 'Choose method based on available information and problem type'
        };
    }

    // UTILITY METHODS

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by continuing to apply the Pythagorean theorem`,
            progression: 'We are moving through the formula systematically',
            relationship: 'Each calculation brings us closer to the final answer'
        };
    }

    identifyPrerequisites(step, problemType) {
        const category = this.pythagoreanTypes[problemType]?.category;
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Basic arithmetic', 'Understanding of right triangles'];
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
                'leg': 'shorter side',
                'square': 'times itself',
                'square root': 'find what times itself gives',
                'Pythagorean theorem': 'special triangle rule',
                'converse': 'backwards test',
                'right triangle': 'triangle with square corner',
                'acute': 'all angles less than 90°',
                'obtuse': 'one angle greater than 90°'
            },
            intermediate: {
                'hypotenuse': 'hypotenuse',
                'leg': 'leg',
                'square': 'square',
                'square root': 'square root',
                'Pythagorean theorem': 'Pythagorean theorem',
                'converse': 'converse',
                'right triangle': 'right triangle'
            },
            ELI5: {
                'hypotenuse': 'the longest side (opposite the square corner)',
                'leg': 'one of the two shorter sides that make the square corner',
                'square': 'multiply by itself (like 3×3)',
                'square root': 'find what number times itself equals this',
                'Pythagorean theorem': 'special rule for triangles with square corners',
                'converse': 'checking if it works backwards',
                'right triangle': 'triangle with one corner that\'s perfectly square (90 degrees, like a book corner)',
                'acute': 'all pointy corners (less than square corners)',
                'obtuse': 'one wide corner (more than a square corner)'
            },
            detailed: {
                'hypotenuse': 'hypotenuse (longest side, opposite the right angle)',
                'leg': 'leg (side forming the right angle)',
                'square': 'square (raise to the second power)',
                'square root': 'square root (inverse operation of squaring)',
                'Pythagorean theorem': 'Pythagorean theorem (a² + b² = c²)',
                'converse': 'converse of Pythagorean theorem'
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

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue solving for the unknown`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
    }
}

// Export the class
export default EnhancedTrianglePythagoreanMathematicalWorkbook;
