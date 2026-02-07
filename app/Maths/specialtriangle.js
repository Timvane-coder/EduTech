// Enhanced Special Right Triangles Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedSpecialRightTrianglesMathematicalWorkbook {
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
        this.initializeSpecialTrianglesSolvers();
        this.initializeSpecialTrianglesLessons();
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
            'degree': '°', 'triangle': '△'
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

    initializeSpecialTrianglesLessons() {
        this.lessons = {
            special_triangles_overview: {
                title: "Special Right Triangles Overview",
                concepts: [
                    "Two main types: 45-45-90 and 30-60-90 triangles",
                    "Fixed side ratios that never change",
                    "Derived from geometric principles (isosceles right triangle and equilateral triangle)",
                    "Appear frequently in geometry, trigonometry, and real-world applications"
                ],
                theory: "Special right triangles have angle measures and side ratios that follow predictable patterns, making calculations easier without trigonometry.",
                keyFormulas: {
                    "45-45-90 Triangle": "sides in ratio 1 : 1 : √2",
                    "30-60-90 Triangle": "sides in ratio 1 : √3 : 2"
                },
                importance: [
                    "Foundation for trigonometry",
                    "Shortcut for many geometry problems",
                    "Essential for standardized tests",
                    "Common in architecture and engineering"
                ]
            },

            triangle_45_45_90: {
                title: "45-45-90 Triangle (Isosceles Right Triangle)",
                concepts: [
                    "Two angles of 45°, one angle of 90°",
                    "Two legs are equal (congruent)",
                    "Hypotenuse is leg × √2",
                    "Derived from cutting a square diagonally"
                ],
                theory: "A 45-45-90 triangle is half of a square. The diagonal of a square with side length 'a' is a√2 by the Pythagorean theorem.",
                keyFormulas: {
                    "If leg = a": "hypotenuse = a√2",
                    "If hypotenuse = c": "leg = c/√2 = c√2/2",
                    "Side ratios": "leg : leg : hypotenuse = 1 : 1 : √2"
                },
                derivation: {
                    step1: "Start with a square of side length a",
                    step2: "Draw diagonal creating two congruent triangles",
                    step3: "Each triangle has two sides of length a",
                    step4: "By Pythagorean theorem: a² + a² = c²",
                    step5: "Therefore: 2a² = c², so c = a√2"
                },
                properties: [
                    "Isosceles: two equal legs",
                    "Angles: 45°-45°-90°",
                    "Legs are perpendicular",
                    "Hypotenuse is longest side"
                ],
                applications: [
                    "Square diagonals",
                    "Staircase design",
                    "Roof pitches (45° angle)",
                    "Graph paper diagonal measurements"
                ]
            },

            triangle_30_60_90: {
                title: "30-60-90 Triangle",
                concepts: [
                    "Angles of 30°, 60°, and 90°",
                    "Sides in ratio 1 : √3 : 2",
                    "Short leg opposite 30° angle",
                    "Long leg opposite 60° angle",
                    "Hypotenuse opposite 90° angle",
                    "Derived from cutting an equilateral triangle in half"
                ],
                theory: "A 30-60-90 triangle is half of an equilateral triangle. When you bisect an equilateral triangle with altitude, you create two congruent 30-60-90 triangles.",
                keyFormulas: {
                    "If short leg = a": "long leg = a√3, hypotenuse = 2a",
                    "If long leg = b": "short leg = b/√3 = b√3/3, hypotenuse = 2b/√3 = 2b√3/3",
                    "If hypotenuse = c": "short leg = c/2, long leg = c√3/2",
                    "Side ratios": "short leg : long leg : hypotenuse = 1 : √3 : 2"
                },
                derivation: {
                    step1: "Start with equilateral triangle, all sides = 2a",
                    step2: "Draw altitude from one vertex to opposite side",
                    step3: "Altitude bisects the base, creating two segments of length a",
                    step4: "Altitude creates 90° angle with base",
                    step5: "Original 60° angles remain, new 30° angles formed",
                    step6: "By Pythagorean theorem: a² + h² = (2a)²",
                    step7: "Therefore: h² = 4a² - a² = 3a², so h = a√3"
                },
                properties: [
                    "Scalene: all sides different lengths",
                    "Angles: 30°-60°-90°",
                    "Short leg is half the hypotenuse",
                    "Long leg is short leg times √3"
                ],
                applications: [
                    "Equilateral triangle calculations",
                    "Hexagon problems",
                    "Clock angles (hour and minute hands)",
                    "Trigonometry foundations"
                ]
            },

            finding_missing_sides_45_45_90: {
                title: "Finding Missing Sides in 45-45-90 Triangles",
                concepts: [
                    "Given one side, can find all others",
                    "Use ratio 1 : 1 : √2",
                    "Multiply or divide by √2 as needed",
                    "Rationalize denominators when necessary"
                ],
                procedures: {
                    "Given leg, find hypotenuse": "Multiply leg by √2",
                    "Given hypotenuse, find leg": "Divide hypotenuse by √2, then rationalize",
                    "Given one leg, find other leg": "They're equal!"
                },
                examples: [
                    "Leg = 5, hypotenuse = 5√2",
                    "Hypotenuse = 10, leg = 10/√2 = 5√2",
                    "Leg = 3, other leg = 3"
                ],
                commonErrors: [
                    "Forgetting to multiply/divide by √2",
                    "Not rationalizing denominators",
                    "Confusing which side is which"
                ]
            },

            finding_missing_sides_30_60_90: {
                title: "Finding Missing Sides in 30-60-90 Triangles",
                concepts: [
                    "Must identify which side is given",
                    "Use ratio 1 : √3 : 2",
                    "Short leg (opposite 30°) is key reference",
                    "Express all sides in terms of short leg"
                ],
                procedures: {
                    "Given short leg (a)": "long leg = a√3, hypotenuse = 2a",
                    "Given long leg (b)": "short leg = b/√3 = b√3/3, hypotenuse = 2b/√3 = 2b√3/3",
                    "Given hypotenuse (c)": "short leg = c/2, long leg = c√3/2"
                },
                examples: [
                    "Short leg = 4: long leg = 4√3, hypotenuse = 8",
                    "Hypotenuse = 12: short leg = 6, long leg = 6√3",
                    "Long leg = 6: short leg = 6/√3 = 2√3, hypotenuse = 4√3"
                ],
                strategicApproach: [
                    "Step 1: Identify which side you have",
                    "Step 2: Determine if it's short leg, long leg, or hypotenuse",
                    "Step 3: Use appropriate formula from ratio",
                    "Step 4: Rationalize if needed",
                    "Step 5: Simplify radicals"
                ],
                commonErrors: [
                    "Confusing short leg and long leg",
                    "Using wrong ratio multiplier",
                    "Not rationalizing denominators",
                    "Simplifying radicals incorrectly"
                ]
            },

            area_and_perimeter: {
                title: "Area and Perimeter of Special Triangles",
                concepts: [
                    "Area = (1/2) × base × height",
                    "Perimeter = sum of all three sides",
                    "Can use any leg as base in right triangles",
                    "Special formulas using side ratios"
                ],
                formulas_45_45_90: {
                    "Area (leg = a)": "(1/2)a² or a²/2",
                    "Perimeter (leg = a)": "2a + a√2 = a(2 + √2)"
                },
                formulas_30_60_90: {
                    "Area (short leg = a)": "(1/2) × a × a√3 = a²√3/2",
                    "Perimeter (short leg = a)": "a + a√3 + 2a = a(3 + √3)"
                },
                applications: [
                    "Finding land area in surveying",
                    "Calculating material needs",
                    "Fencing requirements",
                    "Tile coverage"
                ]
            },

            pythagorean_verification: {
                title: "Pythagorean Theorem Verification",
                concepts: [
                    "Special triangles satisfy Pythagorean theorem",
                    "a² + b² = c² always holds",
                    "Useful for verifying calculations",
                    "Connects special ratios to general right triangle theorem"
                ],
                verification_45_45_90: {
                    "If leg = a": "a² + a² = (a√2)²",
                    "Simplify": "2a² = 2a² ✓"
                },
                verification_30_60_90: {
                    "If short leg = a": "a² + (a√3)² = (2a)²",
                    "Simplify": "a² + 3a² = 4a²",
                    "Result": "4a² = 4a² ✓"
                }
            },

            altitude_on_hypotenuse: {
                title: "Altitude to the Hypotenuse",
                concepts: [
                    "Creates two smaller similar triangles",
                    "Both smaller triangles are also special triangles",
                    "Useful for complex problems",
                    "Demonstrates self-similarity"
                ],
                properties_45_45_90: [
                    "Altitude creates two congruent 45-45-90 triangles",
                    "Altitude equals leg/√2",
                    "Each smaller triangle has legs = altitude"
                ],
                properties_30_60_90: [
                    "Altitude creates one 30-60-90 and one 60-30-90 triangle",
                    "Complex relationships between segments",
                    "Requires careful angle analysis"
                ]
            },

            word_problems: {
                title: "Word Problems with Special Triangles",
                concepts: [
                    "Identify triangle type from angle measures",
                    "Draw and label diagram",
                    "Apply appropriate side ratios",
                    "Include units in answer"
                ],
                problemTypes: {
                    "Distance and Navigation": "Using angles and one distance to find others",
                    "Construction and Architecture": "Roof pitch, ramp angles, support beams",
                    "Diagonal Measurements": "Cutting squares, rectangular paths",
                    "Height Calculations": "Trees, buildings, flagpoles with shadows",
                    "Tiling and Flooring": "Diagonal tile patterns"
                },
                solutionStrategy: [
                    "Read problem carefully, identify given information",
                    "Determine triangle type (45-45-90 or 30-60-90)",
                    "Draw and label accurate diagram",
                    "Identify which side is given",
                    "Apply correct ratio to find unknowns",
                    "Check reasonableness of answer",
                    "Include units"
                ]
            },

            composite_figures: {
                title: "Composite Figures with Special Triangles",
                concepts: [
                    "Complex shapes made of special triangles",
                    "Hexagons decompose into six 30-60-90 triangles",
                    "Squares with diagonals create four 45-45-90 triangles",
                    "Regular polygons often involve special triangles"
                ],
                techniques: [
                    "Break complex shape into simple triangles",
                    "Identify special triangle types",
                    "Calculate each triangle separately",
                    "Sum areas or perimeters as needed"
                ],
                examples: [
                    "Regular hexagon (six 30-60-90 triangles)",
                    "Octagon (combination of square and 45-45-90 triangles)",
                    "Star patterns (multiple special triangles)"
                ]
            },

            trigonometry_connection: {
                title: "Connection to Trigonometry",
                concepts: [
                    "Special triangles give exact trig values",
                    "No calculator needed for 30°, 45°, 60°",
                    "Foundation for understanding sine, cosine, tangent",
                    "Basis of unit circle values"
                ],
                trig_values_45: {
                    "sin(45°)": "√2/2",
                    "cos(45°)": "√2/2",
                    "tan(45°)": "1"
                },
                trig_values_30: {
                    "sin(30°)": "1/2",
                    "cos(30°)": "√3/2",
                    "tan(30°)": "√3/3"
                },
                trig_values_60: {
                    "sin(60°)": "√3/2",
                    "cos(60°)": "1/2",
                    "tan(60°)": "√3"
                },
                derivation: "Trig ratios come directly from side ratios in special triangles"
            }
        };
    }

    initializeSpecialTrianglesSolvers() {
        this.triangleTypes = {
            triangle_45_45_90_given_leg: {
                patterns: [
                    /45.*45.*90/i,
                    /isosceles.*right/i,
                    /leg.*45/i
                ],
                solver: this.solve45_45_90_GivenLeg.bind(this),
                name: '45-45-90 Triangle - Given Leg',
                category: '45_45_90',
                description: 'Find hypotenuse and other leg given one leg'
            },

            triangle_45_45_90_given_hypotenuse: {
                patterns: [
                    /45.*45.*90.*hypotenuse/i,
                    /hypotenuse.*45/i
                ],
                solver: this.solve45_45_90_GivenHypotenuse.bind(this),
                name: '45-45-90 Triangle - Given Hypotenuse',
                category: '45_45_90',
                description: 'Find both legs given hypotenuse'
            },

            triangle_30_60_90_given_short_leg: {
                patterns: [
                    /30.*60.*90.*short/i,
                    /short.*leg.*30/i
                ],
                solver: this.solve30_60_90_GivenShortLeg.bind(this),
                name: '30-60-90 Triangle - Given Short Leg',
                category: '30_60_90',
                description: 'Find long leg and hypotenuse given short leg'
            },

            triangle_30_60_90_given_long_leg: {
                patterns: [
                    /30.*60.*90.*long/i,
                    /long.*leg.*60/i
                ],
                solver: this.solve30_60_90_GivenLongLeg.bind(this),
                name: '30-60-90 Triangle - Given Long Leg',
                category: '30_60_90',
                description: 'Find short leg and hypotenuse given long leg'
            },

            triangle_30_60_90_given_hypotenuse: {
                patterns: [
                    /30.*60.*90.*hypotenuse/i,
                    /hypotenuse.*30.*60/i
                ],
                solver: this.solve30_60_90_GivenHypotenuse.bind(this),
                name: '30-60-90 Triangle - Given Hypotenuse',
                category: '30_60_90',
                description: 'Find both legs given hypotenuse'
            },

            area_45_45_90: {
                patterns: [
                    /area.*45.*45.*90/i,
                    /45.*45.*90.*area/i
                ],
                solver: this.solveArea45_45_90.bind(this),
                name: '45-45-90 Triangle Area',
                category: '45_45_90',
                description: 'Calculate area of 45-45-90 triangle'
            },

            area_30_60_90: {
                patterns: [
                    /area.*30.*60.*90/i,
                    /30.*60.*90.*area/i
                ],
                solver: this.solveArea30_60_90.bind(this),
                name: '30-60-90 Triangle Area',
                category: '30_60_90',
                description: 'Calculate area of 30-60-90 triangle'
            },

            perimeter_45_45_90: {
                patterns: [
                    /perimeter.*45.*45.*90/i,
                    /45.*45.*90.*perimeter/i
                ],
                solver: this.solvePerimeter45_45_90.bind(this),
                name: '45-45-90 Triangle Perimeter',
                category: '45_45_90',
                description: 'Calculate perimeter of 45-45-90 triangle'
            },

            perimeter_30_60_90: {
                patterns: [
                    /perimeter.*30.*60.*90/i,
                    /30.*60.*90.*perimeter/i
                ],
                solver: this.solvePerimeter30_60_90.bind(this),
                name: '30-60-90 Triangle Perimeter',
                category: '30_60_90',
                description: 'Calculate perimeter of 30-60-90 triangle'
            },

            word_problem_45_45_90: {
                patterns: [
                    /square.*diagonal/i,
                    /roof.*45/i,
                    /staircase/i
                ],
                solver: this.solveWordProblem45_45_90.bind(this),
                name: '45-45-90 Word Problem',
                category: 'word_problems',
                description: 'Real-world 45-45-90 triangle applications'
            },

            word_problem_30_60_90: {
                patterns: [
                    /equilateral.*height/i,
                    /hexagon/i,
                    /30.*degree.*angle/i
                ],
                solver: this.solveWordProblem30_60_90.bind(this),
                name: '30-60-90 Word Problem',
                category: 'word_problems',
                description: 'Real-world 30-60-90 triangle applications'
            },

            pythagorean_verification: {
                patterns: [
                    /verify.*pythagorean/i,
                    /check.*theorem/i,
                    /prove.*right/i
                ],
                solver: this.verifyPythagoreanTheorem.bind(this),
                name: 'Pythagorean Theorem Verification',
                category: 'verification',
                description: 'Verify special triangle using Pythagorean theorem'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            '45_45_90': {
                'Identify triangle type': [
                    'Not recognizing 45-45-90 from angle measures',
                    'Confusing with 30-60-90 triangle',
                    'Missing that two angles are 45°'
                ],
                'Apply ratio': [
                    'Forgetting to multiply by √2 for hypotenuse',
                    'Dividing by √2 instead of multiplying',
                    'Not rationalizing denominator'
                ],
                'Calculate sides': [
                    'Arithmetic errors with √2',
                    'Not simplifying radicals',
                    'Losing track of which side is which'
                ]
            },
            '30_60_90': {
                'Identify sides': [
                    'Confusing short leg with long leg',
                    'Not knowing which leg is opposite which angle',
                    'Mixing up the ratio order'
                ],
                'Apply ratio 1:√3:2': [
                    'Using √3 in wrong position',
                    'Forgetting hypotenuse is 2× short leg',
                    'Incorrect rationalization'
                ],
                'Work with √3': [
                    'Not rationalizing √3 in denominator',
                    'Arithmetic errors with √3',
                    'Simplifying √3 incorrectly'
                ]
            },
            'word_problems': {
                'Set up problem': [
                    'Not drawing diagram',
                    'Labeling sides incorrectly',
                    'Missing which angle is 30° vs 60°'
                ],
                'Apply concepts': [
                    'Using wrong triangle type',
                    'Applying wrong ratio',
                    'Forgetting units'
                ]
            }
        };

        this.errorPrevention = {
            ratio_confusion: {
                reminder: 'Always write out the complete ratio: 45-45-90 is 1:1:√2, 30-60-90 is 1:√3:2',
                method: 'Label each side with its position in ratio before calculating'
            },
            side_identification: {
                reminder: 'In 30-60-90: short leg opposite 30°, long leg opposite 60°, hypotenuse opposite 90°',
                method: 'Mark angles on diagram, then label sides accordingly'
            },
            rationalization: {
                reminder: 'Never leave √2 or √3 in denominator',
                method: 'Multiply numerator and denominator by the radical'
            },
            radical_arithmetic: {
                reminder: '√2 ≈ 1.414, √3 ≈ 1.732 for estimation',
                method: 'Check if answer is reasonable using approximations'
            },
            diagram_drawing: {
                reminder: 'Always draw and label a diagram for word problems',
                method: 'Mark all angles, label all given information, identify unknowns'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why these ratios exist and their geometric meaning',
                language: 'intuitive and visual'
            },
            procedural: {
                focus: 'Step-by-step calculation process',
                language: 'clear instructions'
            },
            visual: {
                focus: 'Geometric understanding through diagrams',
                language: 'spatial and visual descriptions'
            },
            algebraic: {
                focus: 'Mathematical derivations and proofs',
                language: 'precise mathematical notation'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple geometric terms',
                detail: 'essential ratios only',
                examples: 'whole number sides when possible'
            },
            intermediate: {
                vocabulary: 'standard geometry vocabulary',
                detail: 'ratios with explanations',
                examples: 'mix of whole numbers and radicals'
            },
            ELI5: {
                vocabulary: 'everyday language',
                detail: 'every step with pictures',
                examples: 'real objects and situations',
                analogies: true,
                visualization: 'simple drawings'
            },
            detailed: {
                vocabulary: 'complete geometric terminology',
                detail: 'full derivations and proofs',
                examples: 'abstract and generalized'
            },
            scaffolded: {
                vocabulary: 'progressive complexity',
                detail: 'guided discovery',
                examples: 'sequenced from simple to complex'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            square_diagonal: {
                scenario: "Finding diagonal of a square",
                triangle: "45-45-90",
                equation: "diagonal = side × √2",
                examples: [
                    "A square room is 12 ft × 12 ft. What's the diagonal distance?",
                    "A square tile has 6-inch sides. What's the diagonal?"
                ],
                context: "Walking diagonally across square spaces, cutting square materials"
            },
            roof_pitch: {
                scenario: "45° roof pitch calculations",
                triangle: "45-45-90",
                equation: "rise = run (for 45° pitch)",
                examples: [
                    "A roof has 45° pitch. If horizontal span is 20 ft, what's the vertical rise?",
                    "Building a shed with 45° roof. Base is 8 ft wide, how tall is peak?"
                ],
                context: "Construction, carpentry, architecture"
            },
            equilateral_height: {
                scenario: "Height of equilateral triangle",
                triangle: "30-60-90",
                equation: "height = (side × √3)/2",
                examples: [
                    "An equilateral triangle has sides of 10 cm. Find its height.",
                    "A triangular sign with equal 2-ft sides. How tall is it?"
                ],
                context: "Design, signage, structural engineering"
            },
            hexagon_problems: {
                scenario: "Regular hexagon calculations",
                triangle: "30-60-90",
                equation: "Six triangles with 30-60-90 relationships",
                examples: [
                    "Regular hexagon with 4-inch sides. Find the height.",
                    "Hexagonal tile, side = 5 cm. What's the diameter?"
                ],
                context: "Tiling, honeycomb structures, nuts and bolts"
            },
            ladder_against_wall: {
                scenario: "Ladder at specific angle",
                triangle: "30-60-90 or 45-45-90",
                equation: "Use appropriate triangle ratios",
                examples: [
                    "A 20-ft ladder at 60° angle. How high does it reach?",
                    "Ladder must reach 12 ft high at 45° angle. How long?"
                ],
                context: "Safety, construction, firefighting"
            },
            ramp_design: {
                scenario: "Wheelchair ramp with specific angle",
                triangle: "30-60-90 or 45-45-90",
                equation: "rise/run based on angle",
                examples: [
                    "Ramp must rise 3 ft at 30° angle. How long is ramp?",
                    "A 45° ramp goes up 2 feet. How far does it extend?"
                ],
                context: "Accessibility, architecture, building codes"
            },
            shadow_problems: {
                scenario: "Tree height from shadow at specific sun angle",
                triangle: "30-60-90 or 45-45-90",
                equation: "height/shadow based on angle",
                examples: [
                    "Sun at 60° angle, shadow is 15 ft. How tall is tree?",
                    "At 45° sun angle, tree casts 25-ft shadow. Tree height?"
                ],
                context: "Surveying, photography, astronomy"
            },
            staircase_design: {
                scenario: "Staircase with 45° angle",
                triangle: "45-45-90",
                equation: "rise = run for each step",
                examples: [
                    "Stairs rise 10 ft at 45°. How much floor space?",
                    "Each step is 8 inches. At 45°, what's the run?"
                ],
                context: "Architecture, building codes, carpentry"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            '45_45_90': {
                skills: [
                    'Understanding of right triangles',
                    'Pythagorean theorem basics',
                    'Working with square roots',
                    'Simplifying radicals'
                ],
                priorKnowledge: [
                    'Properties of isosceles triangles',
                    'Angle sum in triangles = 180°',
                    'Meaning of √2',
                    'Rationalizing denominators'
                ],
                checkQuestions: [
                    'What is √2 approximately?',
                    'What is 45° + 45° + 90°?',
                    'How do you rationalize 1/√2?',
                    'What is an isosceles right triangle?'
                ]
            },
            '30_60_90': {
                skills: [
                    'Understanding of right triangles',
                    'Properties of equilateral triangles',
                    'Working with √3',
                    'Identifying opposite sides to angles'
                ],
                priorKnowledge: [
                    'Equilateral triangles have all 60° angles',
                    'Altitude bisects equilateral triangle',
                    'Meaning of √3',
                    'Side ratios and proportions'
                ],
                checkQuestions: [
                    'What is √3 approximately?',
                    'What are angles in equilateral triangle?',
                    'How do you rationalize 1/√3?',
                    'Which leg is "short" in 30-60-90 triangle?'
                ]
            },
            word_problems: {
                skills: [
                    'Angle identification',
                    'Drawing diagrams',
                    'Labeling correctly',
                    'Choosing correct triangle type'
                ],
                priorKnowledge: [
                    'Reading geometry word problems',
                    'Identifying given vs unknown',
                    'Unit conversions',
                    'Reasonableness checks'
                ],
                checkQuestions: [
                    'How do you identify triangle type from angles?',
                    'What information do you mark on diagram?',
                    'Which side is opposite which angle?',
                    'How do you check if answer makes sense?'
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            geometric_derivation_45: {
                description: "45-45-90 from square diagonal",
                analogy: "Cutting a square in half diagonally",
                visualization: "Draw square, add diagonal, observe two congruent triangles",
                suitableFor: ['45_45_90'],
                explanation: "Each triangle has two sides from square and diagonal as hypotenuse"
            },
            geometric_derivation_30: {
                description: "30-60-90 from equilateral triangle altitude",
                analogy: "Cutting an equilateral triangle in half vertically",
                visualization: "Draw equilateral triangle, add altitude, observe two congruent 30-60-90 triangles",
                suitableFor: ['30_60_90'],
                explanation: "Altitude creates right angle and bisects base"
            },
            ratio_memory_aid_45: {
                description: "Remember 1:1:√2",
                analogy: "Two equal legs, hypotenuse is √2 times bigger",
                visualization: "Picture two equal-length pencils forming a right angle, diagonal connects them",
                suitableFor: ['45_45_90'],
                explanation: "Isosceles means equal, so 1:1, and √2 comes from Pythagorean theorem"
            },
            ratio_memory_aid_30: {
                description: "Remember 1:√3:2",
                analogy: "Small, medium-squared, double: 1, √3, 2",
                visualization: "Short leg opposite small angle (30°), long leg opposite bigger angle (60°), hypotenuse opposite biggest (90°)",
                suitableFor: ['30_60_90'],
                explanation: "Hypotenuse is exactly double the short leg"
            },
            angle_labeling: {
                description: "Always label angles to identify sides",
                analogy: "Like putting addresses on houses",
                visualization: "Mark 30°, 60°, 90° clearly, then identify opposite sides",
                suitableFor: ['all'],
                explanation: "Knowing angles tells you which side is which"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "45-45-90 triangle, leg = 5, find hypotenuse",
                    solution: "5√2",
                    steps: [
                        "Identify: 45-45-90 triangle",
                        "Know ratio: leg:leg:hypotenuse = 1:1:√2",
                        "Given: leg = 5",
                        "Hypotenuse = leg × √2",
                        "Hypotenuse = 5√2"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "30-60-90 triangle, short leg = 3, find hypotenuse",
                    solution: "6",
                    steps: [
                        "Identify: 30-60-90 triangle",
                        "Know ratio: 1:√3:2",
                        "Given: short leg = 3",
                        "Hypotenuse = 2 × short leg",
                        "Hypotenuse = 2 × 3 = 6"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "45-45-90 triangle, hypotenuse = 10, find leg",
                    solution: "5√2",
                    steps: [
                        "Ratio: 1:1:√2",
                        "Hypotenuse = leg × √2",
                        "10 = leg × √2",
                        "leg = 10/√2",
                        "Rationalize: leg = 10√2/2 = 5√2"
                    ],
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "30-60-90 triangle, long leg = 6, find short leg and hypotenuse",
                    solution: "short leg = 2√3, hypotenuse = 4√3",
                    steps: [
                        "Ratio: short:long:hyp = 1:√3:2",
                        "Given: long leg = 6",
                        "Long = short × √3",
                        "6 = short × √3",
                        "short = 6/√3 = 6√3/3 = 2√3",
                        "hypotenuse = 2 × short = 2 × 2√3 = 4√3"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "Square with side 8, find diagonal",
                    solution: "8√2",
                    steps: [
                        "Diagonal splits square into two 45-45-90 triangles",
                        "Legs = side of square = 8",
                        "Diagonal = hypotenuse = leg × √2",
                        "Diagonal = 8√2"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "Equilateral triangle side 12, find height",
                    solution: "6√3",
                    steps: [
                        "Height splits equilateral into two 30-60-90 triangles",
                        "Original side (12) becomes hypotenuse",
                        "Short leg = hypotenuse/2 = 12/2 = 6",
                        "Height = long leg = short × √3 = 6√3"
                    ],
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "30-60-90 triangle, hypotenuse = 20, find area",
                    solution: "50√3",
                    steps: [
                        "short leg = hyp/2 = 20/2 = 10",
                        "long leg = short × √3 = 10√3",
                        "Area = (1/2) × short × long",
                        "Area = (1/2) × 10 × 10√3 = 50√3"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "45-45-90 triangle, perimeter = 12 + 12√2, find area",
                    solution: "36",
                    steps: [
                        "Perimeter = leg + leg + hypotenuse",
                        "= leg + leg + leg√2",
                        "= leg(2 + √2)",
                        "leg(2 + √2) = 12 + 12√2",
                        "leg = 12",
                        "Area = (1/2) × leg² = (1/2) × 144 = 72... wait, let me recalculate",
                        "Actually: leg(2 + √2) = 12(1 + √2), so leg = 12",
                        "Area = leg²/2 = 144/2 = 72"
                    ],
                    difficulty: "hard"
                }
            ],
            byMethod: {
                '45_45_90_basics': [
                    { problem: "leg = 3, find hypotenuse", solution: "3√2" },
                    { problem: "leg = 7, find hypotenuse", solution: "7√2" },
                    { problem: "hypotenuse = 6√2, find leg", solution: "6" }
                ],
                '30_60_90_basics': [
                    { problem: "short leg = 4, find long leg", solution: "4√3" },
                    { problem: "short leg = 5, find hypotenuse", solution: "10" },
                    { problem: "hypotenuse = 16, find short leg", solution: "8" }
                ],
                applications: [
                    { problem: "Square side 10, find diagonal", solution: "10√2" },
                    { problem: "Equilateral triangle side 8, find height", solution: "4√3" }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            ratio_order_45: {
                misconception: "Thinking 45-45-90 ratio is 1:√2:1",
                reality: "Ratio is 1:1:√2 (leg:leg:hypotenuse)",
                correctiveExample: "Hypotenuse is always longest, so √2 must be last",
                commonIn: ['45_45_90']
            },
            ratio_order_30: {
                misconception: "Thinking 30-60-90 ratio is √3:1:2 or 2:1:√3",
                reality: "Ratio is 1:√3:2 (short leg : long leg : hypotenuse)",
                correctiveExample: "Short leg opposite small angle, hypotenuse is largest",
                commonIn: ['30_60_90']
            },
            leg_confusion_30: {
                misconception: "Thinking long leg is opposite 30° angle",
                reality: "Short leg opposite 30°, long leg opposite 60°",
                correctiveExample: "Longer side opposite larger angle",
                commonIn: ['30_60_90']
            },
            hypotenuse_doubling_45: {
                misconception: "Thinking hypotenuse is 2× leg in 45-45-90",
                reality: "Hypotenuse is √2 times leg, not 2 times",
                correctiveExample: "If leg = 5, hypotenuse = 5√2 ≈ 7.07, not 10",
                commonIn: ['45_45_90']
            },
            forgetting_rationalization: {
                misconception: "Leaving answer as 10/√2 or 6/√3",
                reality: "Must rationalize to get 5√2 or 2√3",
                correctiveExample: "Multiply numerator and denominator by the radical",
                commonIn: ['all']
            },
            square_root_arithmetic: {
                misconception: "Thinking √2 + √2 = √4 = 2",
                reality: "√2 + √2 = 2√2 (like adding variables)",
                correctiveExample: "Treat √2 like 'x': x + x = 2x, so √2 + √2 = 2√2",
                commonIn: ['all']
            },
            equilateral_confusion: {
                misconception: "Thinking equilateral triangle sides form the 30-60-90",
                reality: "Altitude creates two 30-60-90 triangles, each using half the base",
                correctiveExample: "If equilateral has side 12, each 30-60-90 has hypotenuse 12 and short leg 6",
                commonIn: ['30_60_90']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            square_cutting: {
                analogy: "Cutting a sandwich diagonally",
                explanation: "When you cut a square sandwich diagonally, you create two 45-45-90 triangles. The cut (diagonal) is longer than the sides by a factor of √2.",
                suitableFor: ['45_45_90'],
                ELI5: "Imagine cutting a square piece of paper from corner to corner. You get two identical triangles with a 45° angle at each bottom corner."
            },
            equilateral_splitting: {
                analogy: "Folding a triangle down the middle",
                explanation: "An equilateral triangle folded down its height creates two mirror-image 30-60-90 triangles, like butterfly wings.",
                suitableFor: ['30_60_90'],
                ELI5: "Take a triangle where all sides are the same length. Now draw a line from the top straight down to the middle of the bottom. You've made two special triangles!"
            },
            staircase_45: {
                analogy: "Stairs where you go up the same amount as you go forward",
                explanation: "A 45-45-90 triangle is like stairs where each step goes up 1 foot and forward 1 foot. The railing (hypotenuse) is √2 times the horizontal distance.",
                suitableFor: ['45_45_90'],
                ELI5: "Imagine climbing stairs where each step is the same height as it is deep. The handrail goes at a 45° angle."
            },
            clock_angles: {
                analogy: "Clock hands at 1:00 and 2:00",
                explanation: "The angle between clock hands at 1:00 or 2:00 is 30°. Imagine drawing from center to both hands and connecting the hands—you can form 30-60-90 relationships.",
                suitableFor: ['30_60_90'],
                ELI5: "Look at a clock when the big hand is on 12 and the little hand is on 1. That angle is 30 degrees!"
            },
            ratio_pattern: {
                analogy: "Recipe scaling",
                explanation: "Just like doubling a recipe means doubling all ingredients in the same ratio, special triangles keep their side ratios no matter the size.",
                suitableFor: ['all'],
                ELI5: "If one triangle is like a small toy car and another is like a big real car, they have the same shape but different sizes. The special number pattern stays the same!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            '45_45_90_find_hypotenuse': {
                level1: "What type of triangle is this?",
                level2: "In a 45-45-90 triangle, how does the hypotenuse relate to the leg?",
                level3: "The hypotenuse is the leg times √2",
                level4: "Multiply {leg} by √2 to get {answer}"
            },
            '45_45_90_find_leg': {
                level1: "What's given and what are you looking for?",
                level2: "If hypotenuse = leg × √2, how do you find leg?",
                level3: "Divide hypotenuse by √2, then rationalize",
                level4: "({hypotenuse}/√2) × (√2/√2) = {answer}"
            },
            '30_60_90_identify_sides': {
                level1: "Which angle is each side opposite to?",
                level2: "Short leg is opposite 30°, long leg opposite 60°",
                level3: "Label your diagram with 30°, 60°, 90° first",
                level4: "The side opposite 30° is the short leg"
            },
            '30_60_90_find_long_leg': {
                level1: "What's the relationship between short and long leg?",
                level2: "In the ratio 1:√3:2, √3 is the multiplier for long leg",
                level3: "Long leg = short leg × √3",
                level4: "Long leg = {short_leg} × √3 = {answer}"
            },
            '30_60_90_find_hypotenuse_from_short': {
                level1: "How does hypotenuse relate to short leg?",
                level2: "Look at the ratio 1:√3:2. What does the 2 represent?",
                level3: "Hypotenuse is exactly 2 times the short leg",
                level4: "Hypotenuse = 2 × {short_leg} = {answer}"
            },
            word_problem: {
                level1: "Have you drawn a diagram?",
                level2: "What triangle type do the angles suggest?",
                level3: "Label your diagram with all given information",
                level4: "Apply the ratio: {ratio} to find {unknown}"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "In a 45-45-90 triangle, if one leg is 6, what is the hypotenuse?",
                    answer: "6√2",
                    assesses: "45_45_90_basic",
                    difficulty: "basic"
                },
                {
                    question: "In a 30-60-90 triangle, if the short leg is 5, what is the hypotenuse?",
                    answer: "10",
                    assesses: "30_60_90_basic",
                    difficulty: "basic"
                },
                {
                    question: "What is the ratio of sides in a 45-45-90 triangle?",
                    answer: "1:1:√2",
                    assesses: "ratio_knowledge",
                    difficulty: "basic"
                },
                {
                    question: "What is the ratio of sides in a 30-60-90 triangle?",
                    answer: "1:√3:2",
                    assesses: "ratio_knowledge",
                    difficulty: "basic"
                }
            ],
            formative: [
                {
                    question: "In a 45-45-90 triangle, the hypotenuse is always:",
                    options: ["2× the leg", "√2 times the leg", "√3 times the leg", "3× the leg"],
                    correct: "√2 times the leg",
                    explanation: "The ratio is 1:1:√2, so hypotenuse = leg × √2"
                },
                {
                    question: "In a 30-60-90 triangle, which leg is longer?",
                    options: ["The one opposite 30°", "The one opposite 60°", "They're equal", "The hypotenuse"],
                    correct: "The one opposite 60°",
                    explanation: "Longer side is opposite larger angle"
                },
                {
                    question: "To rationalize 5/√2, you should:",
                    options: ["Multiply by 2/2", "Multiply by √2/√2", "Leave it as is", "Convert to decimal"],
                    correct: "Multiply by √2/√2",
                    explanation: "Multiply by √2/√2 to eliminate radical from denominator"
                }
            ],
            summative: [
                {
                    question: "A square has diagonal of 14√2 inches. Find the perimeter.",
                    answer: "56 inches",
                    showsWork: true,
                    rubric: {
                        identify_triangle: 1,
                        find_side: 2,
                        calculate_perimeter: 1,
                        correct_answer: 1
                    }
                },
                {
                    question: "An equilateral triangle has height 9√3 cm. Find the perimeter.",
                    answer: "54 cm",
                    showsWork: true,
                    rubric: {
                        identify_triangle: 1,
                        find_side: 2,
                        calculate_perimeter: 1,
                        correct_answer: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "45-45-90 triangle: leg = 4, find hypotenuse",
                    "30-60-90 triangle: short leg = 3, find hypotenuse",
                    "45-45-90 triangle: hypotenuse = 8√2, find leg",
                    "30-60-90 triangle: hypotenuse = 12, find short leg"
                ],
                medium: [
                    "45-45-90 triangle: hypotenuse = 20, find area",
                    "30-60-90 triangle: long leg = 12, find short leg and hypotenuse",
                    "Square with side 9, find diagonal",
                    "Equilateral triangle with side 10, find height"
                ],
                hard: [
                    "45-45-90 triangle: perimeter = 24 + 24√2, find area",
                    "30-60-90 triangle: area = 25√3, find all sides",
                    "Regular hexagon side length 6, find height",
                    "Two 45-45-90 triangles joined at hypotenuse, total area = 50, find leg length"
                ]
            },
            byObjective: {
                canSolve45_45_90: [
                    "leg = 5, find hypotenuse",
                    "hypotenuse = 10√2, find leg",
                    "leg = 8, find perimeter"
                ],
                canSolve30_60_90: [
                    "short leg = 4, find long leg and hypotenuse",
                    "hypotenuse = 18, find both legs",
                    "long leg = 6√3, find short leg and hypotenuse"
                ],
                canApplyToSquares: [
                    "Square side = 7, find diagonal",
                    "Square diagonal = 12√2, find side and perimeter",
                    "Square diagonal = 20, find area"
                ],
                canApplyToEquilateral: [
                    "Equilateral triangle side = 8, find height",
                    "Equilateral triangle height = 5√3, find side",
                    "Equilateral triangle side = 12, find area"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "Given leg in 45-45-90": "Multiply by √2 to get hypotenuse",
                "Given hypotenuse in 45-45-90": "Divide by √2 (then rationalize) to get leg",
                "Given short leg in 30-60-90": "Multiply by √3 for long leg, by 2 for hypotenuse",
                "Given long leg in 30-60-90": "Divide by √3 (rationalize) for short leg, then double for hypotenuse",
                "Given hypotenuse in 30-60-90": "Divide by 2 for short leg, multiply short leg by √3 for long leg",
                "Square diagonal problem": "Use 45-45-90 triangle",
                "Equilateral triangle height": "Use 30-60-90 triangle",
                "Unknown triangle type": "Look at angles to determine type"
            },
            whenToUseWhat: {
                "45-45-90": "Square problems, isosceles right triangles, 45° angles",
                "30-60-90": "Equilateral triangle problems, hexagons, 30° or 60° angles",
                "Pythagorean theorem": "To verify answer or when ratios not immediately applicable",
                "Trigonometry": "When angles aren't exactly 30°, 45°, or 60°"
            },
            methodSelection: {
                factorsToConsider: [
                    "Angle measures (determines triangle type)",
                    "Which side is given",
                    "What needs to be found",
                    "Whether rationalization needed",
                    "Context (square, equilateral triangle, etc.)"
                ],
                generalApproach: [
                    "1. Identify triangle type from angles",
                    "2. Draw and label diagram",
                    "3. Identify which side you have (short leg, long leg, or hypotenuse)",
                    "4. Apply appropriate ratio formula",
                    "5. Rationalize if needed",
                    "6. Verify with Pythagorean theorem if desired"
                ]
            },
            optimizationTips: {
                "Memorize the ratios": "1:1:√2 and 1:√3:2 are essential",
                "Always draw diagrams": "Visual representation prevents errors",
                "Label angles first": "Helps identify which side is which",
                "Rationalize at the end": "Work with radicals, rationalize final answer",
                "Check with Pythagorean": "Quick verification of your answer"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "45-45-90 Speed Round",
                    timeLimit: 90,
                    problems: [
                        "leg = 3, find hyp",
                        "hyp = 6√2, find leg",
                        "leg = 7, find hyp",
                        "hyp = 10√2, find leg",
                        "leg = 12, find hyp",
                        "hyp = 18√2, find leg"
                    ]
                },
                {
                    name: "30-60-90 Speed Round",
                    timeLimit: 120,
                    problems: [
                        "short = 4, find hyp",
                        "hyp = 20, find short",
                        "short = 5, find long",
                        "long = 9√3, find short",
                        "hyp = 16, find long"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Triangle",
                    problem: "A right triangle has one angle of 45° and a side of length 10. What are all possibilities for the other sides?",
                    solution: "Could be 45-45-90 with leg=10 (hyp=10√2) or hyp=10 (legs=5√2)"
                },
                {
                    name: "Composite Figure",
                    problem: "A regular hexagon has sides of length 6. What is its total area?",
                    solution: "Six 30-60-90 triangles, each with area 9√3, total = 54√3"
                },
                {
                    name: "Nested Triangles",
                    problem: "An equilateral triangle has side 12. Inside it, connect midpoints to form another equilateral. What's the ratio of areas?",
                    solution: "1:4 (smaller area is 1/4 of larger)"
                }
            ],
            applications: [
                {
                    scenario: "Roof Design",
                    problem: "A roof has a 45° pitch and spans 30 feet horizontally. What is the length of the roof from peak to edge?",
                    solution: "15√2 ≈ 21.2 feet (each side)"
                },
                {
                    scenario: "Hexagonal Tile",
                    problem: "A regular hexagonal tile has sides of 4 inches. What is the distance across opposite vertices?",
                    solution: "8 inches"
                },
                {
                    scenario: "Ladder Safety",
                    problem: "A 20-foot ladder should lean at 60° angle. How far from wall should base be?",
                    solution: "10 feet (short leg of 30-60-90)"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "45-45-90 triangle, leg = 8",
                        "Hypotenuse = leg × 2",  // ERROR
                        "Hypotenuse = 16"
                    ],
                    correctAnswer: "8√2",
                    errorType: "Used 2 instead of √2"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "30-60-90 triangle, short leg = 6",
                        "Long leg = short × 2",  // ERROR
                        "Long leg = 12"
                    ],
                    correctAnswer: "6√3",
                    errorType: "Used 2 instead of √3 for long leg"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "30-60-90 triangle, hypotenuse = 14",
                        "Short leg = 14/√3",  // Correct formula but...
                        "Short leg = 14/√3"  // ERROR: didn't rationalize
                    ],
                    correctAnswer: "7 (or equivalently 14√3/3 if rationalizing the other way, but hyp/2 is simpler)",
                    errorType: "Forgot hypotenuse = 2 × short leg, so short = hyp/2 = 7"
                }
            ]
        };
    }

    // MAIN SOLVER METHOD
    solveSpecialTrianglesProblem(config) {
        const { triangleType, givenSide, givenValue, findWhat, scenario, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseSpecialTrianglesProblem(config);

            // Solve the problem
            this.currentSolution = this.solveSpecialTrianglesProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateSpecialTrianglesSteps(this.currentProblem, this.currentSolution);

            // Generate graph/diagram data
            this.generateSpecialTrianglesGraphData();

            // Generate workbook
            this.generateSpecialTrianglesWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                sides: this.currentSolution?.sides,
                area: this.currentSolution?.area,
                perimeter: this.currentSolution?.perimeter
            };

        } catch (error) {
            throw new Error(`Failed to solve special triangles problem: ${error.message}`);
        }
    }

    parseSpecialTrianglesProblem(config) {
        const { triangleType, givenSide, givenValue, findWhat, scenario, problemType, context } = config;

        // Determine problem type
        let detectedType = problemType;
        
        if (!detectedType) {
            if (triangleType === '45-45-90') {
                if (givenSide === 'leg') {
                    detectedType = 'triangle_45_45_90_given_leg';
                } else if (givenSide === 'hypotenuse') {
                    detectedType = 'triangle_45_45_90_given_hypotenuse';
                }
            } else if (triangleType === '30-60-90') {
                if (givenSide === 'short_leg' || givenSide === 'short') {
                    detectedType = 'triangle_30_60_90_given_short_leg';
                } else if (givenSide === 'long_leg' || givenSide === 'long') {
                    detectedType = 'triangle_30_60_90_given_long_leg';
                } else if (givenSide === 'hypotenuse') {
                    detectedType = 'triangle_30_60_90_given_hypotenuse';
                }
            }

            // Check for area/perimeter problems
            if (findWhat === 'area') {
                detectedType = triangleType === '45-45-90' ? 'area_45_45_90' : 'area_30_60_90';
            } else if (findWhat === 'perimeter') {
                detectedType = triangleType === '45-45-90' ? 'perimeter_45_45_90' : 'perimeter_30_60_90';
            }
        }

        return {
            triangleType: triangleType,
            givenSide: givenSide,
            givenValue: givenValue,
            findWhat: findWhat || 'all_sides',
            scenario: scenario || '',
            context: context || {},
            problemType: detectedType,
            parsedAt: new Date().toISOString()
        };
    }

    solveSpecialTrianglesProblem_Internal(problem) {
        const solver = this.triangleTypes[problem.problemType]?.solver;
        if (!solver) {
            throw new Error(`No solver available for problem type: ${problem.problemType}`);
        }

        return solver(problem);
    }

    // SPECIAL TRIANGLES SOLVERS

    solve45_45_90_GivenLeg(problem) {
        const leg = problem.givenValue;
        const hypotenuse = leg * Math.sqrt(2);

        return {
            triangleType: '45-45-90',
            angles: { angle1: 45, angle2: 45, angle3: 90 },
            sides: {
                leg1: leg,
                leg2: leg,
                hypotenuse: hypotenuse
            },
            exactSides: {
                leg1: `${leg}`,
                leg2: `${leg}`,
                hypotenuse: `${leg}√2`
            },
            ratio: '1:1:√2',
            given: `leg = ${leg}`,
            calculations: {
                hypotenuse: `leg × √2 = ${leg} × √2 = ${leg}√2`
            },
            verification: this.verifySpecialTriangle('45-45-90', leg, leg, hypotenuse)
        };
    }

    solve45_45_90_GivenHypotenuse(problem) {
        const hypotenuse = problem.givenValue;
        const leg = hypotenuse / Math.sqrt(2);
        const legExact = `${hypotenuse}√2/2`;

        // Simplify if possible
        let simplified = legExact;
        if (hypotenuse % 2 === 0) {
            simplified = `${hypotenuse / 2}√2`;
        }

        return {
            triangleType: '45-45-90',
            angles: { angle1: 45, angle2: 45, angle3: 90 },
            sides: {
                leg1: leg,
                leg2: leg,
                hypotenuse: hypotenuse
            },
            exactSides: {
                leg1: simplified,
                leg2: simplified,
                hypotenuse: `${hypotenuse}`
            },
            ratio: '1:1:√2',
            given: `hypotenuse = ${hypotenuse}`,
            calculations: {
                leg: `hypotenuse / √2 = ${hypotenuse} / √2 = ${hypotenuse}√2/2 = ${simplified}`
            },
            verification: this.verifySpecialTriangle('45-45-90', leg, leg, hypotenuse)
        };
    }

    solve30_60_90_GivenShortLeg(problem) {
        const shortLeg = problem.givenValue;
        const longLeg = shortLeg * Math.sqrt(3);
        const hypotenuse = 2 * shortLeg;

        return {
            triangleType: '30-60-90',
            angles: { angle1: 30, angle2: 60, angle3: 90 },
            sides: {
                shortLeg: shortLeg,
                longLeg: longLeg,
                hypotenuse: hypotenuse
            },
            exactSides: {
                shortLeg: `${shortLeg}`,
                longLeg: `${shortLeg}√3`,
                hypotenuse: `${hypotenuse}`
            },
            ratio: '1:√3:2',
            given: `short leg = ${shortLeg}`,
            calculations: {
                longLeg: `short leg × √3 = ${shortLeg} × √3 = ${shortLeg}√3`,
                hypotenuse: `2 × short leg = 2 × ${shortLeg} = ${hypotenuse}`
            },
            sideLabels: {
                shortLeg: 'opposite 30°',
                longLeg: 'opposite 60°',
                hypotenuse: 'opposite 90°'
            },
            verification: this.verifySpecialTriangle('30-60-90', shortLeg, longLeg, hypotenuse)
        };
    }

    solve30_60_90_GivenLongLeg(problem) {
        const longLeg = problem.givenValue;
        const shortLeg = longLeg / Math.sqrt(3);
        const hypotenuse = 2 * shortLeg;

        const shortLegExact = `${longLeg}√3/3`;
        const hypotenuse Exact = `${2 * longLeg}√3/3`;

        // Try to simplify
        let shortSimplified = shortLegExact;
        let hypSimplified = hypotenuseExact;
        
        if (longLeg % 3 === 0) {
            const factor = longLeg / 3;
            shortSimplified = `${factor}√3`;
            hypSimplified = `${2 * factor}√3`;
        }

        return {
            triangleType: '30-60-90',
            angles: { angle1: 30, angle2: 60, angle3: 90 },
            sides: {
                shortLeg: shortLeg,
                longLeg: longLeg,
                hypotenuse: hypotenuse
            },
            exactSides: {
                shortLeg: shortSimplified,
                longLeg: `${longLeg}`,
                hypotenuse: hypSimplified
            },
            ratio: '1:√3:2',
            given: `long leg = ${longLeg}`,
            calculations: {
                shortLeg: `long leg / √3 = ${longLeg} / √3 = ${longLeg}√3/3 = ${shortSimplified}`,
                hypotenuse: `2 × short leg = 2 × ${shortSimplified} = ${hypSimplified}`
            },
            sideLabels: {
                shortLeg: 'opposite 30°',
                longLeg: 'opposite 60°',
                hypotenuse: 'opposite 90°'
            },
            verification: this.verifySpecialTriangle('30-60-90', shortLeg, longLeg, hypotenuse)
        };
    }

    solve30_60_90_GivenHypotenuse(problem) {
        const hypotenuse = problem.givenValue;
        const shortLeg = hypotenuse / 2;
        const longLeg = shortLeg * Math.sqrt(3);

        return {
            triangleType: '30-60-90',
            angles: { angle1: 30, angle2: 60, angle3: 90 },
            sides: {
                shortLeg: shortLeg,
                longLeg: longLeg,
                hypotenuse: hypotenuse
            },
            exactSides: {
                shortLeg: `${shortLeg}`,
                longLeg: `${shortLeg}√3`,
                hypotenuse: `${hypotenuse}`
            },
            ratio: '1:√3:2',
            given: `hypotenuse = ${hypotenuse}`,
            calculations: {
                shortLeg: `hypotenuse / 2 = ${hypotenuse} / 2 = ${shortLeg}`,
                longLeg: `short leg × √3 = ${shortLeg} × √3 = ${shortLeg}√3`
            },
            sideLabels: {
                shortLeg: 'opposite 30°',
                longLeg: 'opposite 60°',
                hypotenuse: 'opposite 90°'
            },
            verification: this.verifySpecialTriangle('30-60-90', shortLeg, longLeg, hypotenuse)
        };
    }

    solveArea45_45_90(problem) {
        const leg = problem.givenValue;
        const area = (leg * leg) / 2;

        return {
            triangleType: '45-45-90',
            given: `leg = ${leg}`,
            area: area,
            areaFormula: 'Area = leg²/2',
            calculation: `Area = ${leg}² / 2 = ${leg * leg} / 2 = ${area}`,
            sides: {
                leg1: leg,
                leg2: leg,
                hypotenuse: leg * Math.sqrt(2)
            }
        };
    }

    solveArea30_60_90(problem) {
        const { givenSide, givenValue } = problem;
        
        let shortLeg, longLeg;
        
        if (givenSide === 'short_leg' || givenSide === 'short') {
            shortLeg = givenValue;
            longLeg = shortLeg * Math.sqrt(3);
        } else if (givenSide === 'long_leg' || givenSide === 'long') {
            longLeg = givenValue;
            shortLeg = longLeg / Math.sqrt(3);
        } else if (givenSide === 'hypotenuse') {
            shortLeg = givenValue / 2;
            longLeg = shortLeg * Math.sqrt(3);
        }

        const area = (shortLeg * longLeg) / 2;

        return {
            triangleType: '30-60-90',
            given: `${givenSide} = ${givenValue}`,
            area: area,
            areaFormula: 'Area = (short leg × long leg) / 2',
            calculation: `Area = (${shortLeg} × ${longLeg}) / 2 = ${area}`,
            exactArea: `${shortLeg * shortLeg}√3 / 2`,
            sides: {
                shortLeg: shortLeg,
                longLeg: longLeg,
                hypotenuse: 2 * shortLeg
            }
        };
    }

    solvePerimeter45_45_90(problem) {
        const leg = problem.givenValue;
        const hypotenuse = leg * Math.sqrt(2);
        const perimeter = 2 * leg + hypotenuse;

        return {
            triangleType: '45-45-90',
            given: `leg = ${leg}`,
            perimeter: perimeter,
            perimeterFormula: 'Perimeter = 2×leg + hypotenuse = leg(2 + √2)',
            calculation: `Perimeter = 2(${leg}) + ${leg}√2 = ${2 * leg} + ${leg}√2`,
            exactPerimeter: `${leg}(2 + √2)`,
            approximatePerimeter: perimeter.toFixed(2),
            sides: {
                leg1: leg,
                leg2: leg,
                hypotenuse: hypotenuse
            }
        };
    }

    solvePerimeter30_60_90(problem) {
        const { givenSide, givenValue } = problem;
        
        let shortLeg;
        
        if (givenSide === 'short_leg' || givenSide === 'short') {
            shortLeg = givenValue;
        } else if (givenSide === 'long_leg' || givenSide === 'long') {
            shortLeg = givenValue / Math.sqrt(3);
        } else if (givenSide === 'hypotenuse') {
            shortLeg = givenValue / 2;
        }

        const longLeg = shortLeg * Math.sqrt(3);
        const hypotenuse = 2 * shortLeg;
        const perimeter = shortLeg + longLeg + hypotenuse;

        return {
            triangleType: '30-60-90',
            given: `${givenSide} = ${givenValue}`,
            perimeter: perimeter,
            perimeterFormula: 'Perimeter = short + long + hyp = short(1 + √3 + 2) = short(3 + √3)',
            calculation: `Perimeter = ${shortLeg} + ${shortLeg}√3 + ${hypotenuse}`,
            exactPerimeter: `${shortLeg}(3 + √3)`,
            approximatePerimeter: perimeter.toFixed(2),
            sides: {
                shortLeg: shortLeg,
                longLeg: longLeg,
                hypotenuse: hypotenuse
            }
        };
    }

    solveWordProblem45_45_90(problem) {
        const { scenario, context } = problem;
        
        return {
            triangleType: '45-45-90',
            scenario: scenario,
            approach: 'Identify the 45-45-90 triangle in the problem, determine given side, apply ratio',
            context: context,
            note: 'Common in square diagonal, staircase, and 45° angle problems'
        };
    }

    solveWordProblem30_60_90(problem) {
        const { scenario, context } = problem;
        
        return {
            triangleType: '30-60-90',
            scenario: scenario,
            approach: 'Identify the 30-60-90 triangle (often from equilateral triangle), determine which leg, apply ratio',
            context: context,
            note: 'Common in equilateral triangle height, hexagon, and 30°/60° angle problems'
        };
    }

    verifyPythagoreanTheorem(problem) {
        const { triangleType, sides } = problem;
        
        let a, b, c;
        
        if (triangleType === '45-45-90') {
            a = sides.leg1;
            b = sides.leg2;
            c = sides.hypotenuse;
        } else if (triangleType === '30-60-90') {
            a = sides.shortLeg;
            b = sides.longLeg;
            c = sides.hypotenuse;
        }

        const leftSide = a * a + b * b;
        const rightSide = c * c;
        const difference = Math.abs(leftSide - rightSide);
        const isValid = difference < 1e-9;

        return {
            triangleType: triangleType,
            verification: 'Pythagorean Theorem: a² + b² = c²',
            leftSide: `${a}² + ${b}² = ${leftSide.toFixed(4)}`,
            rightSide: `${c}² = ${rightSide.toFixed(4)}`,
            difference: difference,
            isValid: isValid,
            conclusion: isValid ? 'Pythagorean theorem confirmed ✓' : 'Does not satisfy Pythagorean theorem'
        };
    }

    verifySpecialTriangle(type, a, b, c) {
        const leftSide = a * a + b * b;
        const rightSide = c * c;
        const difference = Math.abs(leftSide - rightSide);
        const isValid = difference < 1e-9;

        return {
            type: type,
            pythagorean: `${a.toFixed(2)}² + ${b.toFixed(2)}² = ${c.toFixed(2)}²`,
            leftSide: leftSide.toFixed(4),
            rightSide: rightSide.toFixed(4),
            difference: difference.toExponential(2),
            isValid: isValid
        };
    }

    // STEP GENERATION

    generateSpecialTrianglesSteps(problem, solution) {
        let baseSteps = this.generateBaseSpecialTrianglesSteps(problem, solution);

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
                this.addErrorPrevention(step, problem.triangleType)
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

    generateBaseSpecialTrianglesSteps(problem, solution) {
        const steps = [];
        const { triangleType, givenSide, givenValue, problemType } = problem;

        // Step 1: Identify triangle type
        steps.push({
            stepNumber: 1,
            step: 'Identify Triangle Type',
            description: `This is a ${solution.triangleType} triangle`,
            expression: `Angles: ${solution.angles ? `${solution.angles.angle1}°-${solution.angles.angle2}°-${solution.angles.angle3}°` : triangleType}`,
            reasoning: `Special right triangle with fixed side ratios`,
            ratio: solution.ratio,
            goalStatement: 'Use the side ratio to find missing sides'
        });

        // Step 2: State the ratio
        steps.push({
            stepNumber: 2,
            step: 'Recall Side Ratio',
            description: `The ratio of sides is ${solution.ratio}`,
            expression: solution.ratio,
            reasoning: this.getRatioReasoning(triangleType),
            visualHint: this.getRatioVisualization(triangleType)
        });

        // Step 3: Identify given information
        steps.push({
            stepNumber: 3,
            step: 'Identify Given',
            description: solution.given || `Given: ${givenSide} = ${givenValue}`,
            expression: `${givenSide} = ${givenValue}`,
            reasoning: 'This is the starting point for our calculations'
        });

        // Step 4-N: Calculate each missing side
        if (solution.calculations) {
            let stepNum = 4;
            for (const [sideName, calculation] of Object.entries(solution.calculations)) {
                steps.push({
                    stepNumber: stepNum++,
                    step: `Find ${sideName}`,
                    description: `Calculate the ${sideName}`,
                    beforeExpression: `Using ratio ${solution.ratio}`,
                    calculation: calculation,
                    reasoning: this.getCalculationReasoning(triangleType, sideName),
                    algebraicRule: this.getAlgebraicRule(triangleType, sideName)
                });
            }
        }

        // Final step: State all sides
        if (solution.exactSides) {
            steps.push({
                stepNumber: steps.length + 1,
                step: 'Complete Solution',
                description: 'All sides determined',
                expression: this.formatSidesExpression(solution.exactSides, triangleType),
                finalAnswer: true,
                reasoning: 'These sides satisfy the special triangle ratios'
            });
        }

        // Add verification step if enabled
        if (this.includeVerificationInSteps && solution.verification) {
            steps.push({
                stepNumber: steps.length + 1,
                step: 'Verify with Pythagorean Theorem',
                description: 'Check that a² + b² = c²',
                expression: solution.verification.pythagorean,
                verification: solution.verification,
                reasoning: 'Confirms our solution is correct'
            });
        }

        return steps;
    }

    getRatioReasoning(triangleType) {
        const reasons = {
            '45-45-90': 'Derived from cutting a square diagonally. Two equal legs, hypotenuse = leg × √2',
            '30-60-90': 'Derived from bisecting an equilateral triangle. Sides in ratio 1:√3:2'
        };
        return reasons[triangleType] || 'Special triangle with fixed ratios';
    }

    getRatioVisualization(triangleType) {
        const visuals = {
            '45-45-90': 'Imagine cutting a square from corner to corner',
            '30-60-90': 'Imagine cutting an equilateral triangle from top to middle of base'
        };
        return visuals[triangleType] || 'Visualize the triangle';
    }

    getCalculationReasoning(triangleType, sideName) {
        const reasons = {
            '45-45-90': {
                'hypotenuse': 'In 45-45-90 triangle, hypotenuse is always leg × √2',
                'leg': 'In 45-45-90 triangle, leg is hypotenuse / √2 (then rationalize)'
            },
            '30-60-90': {
                'longLeg': 'Long leg (opposite 60°) is short leg × √3',
                'shortLeg': 'Short leg (opposite 30°) is hypotenuse / 2, or long leg / √3',
                'hypotenuse': 'Hypotenuse is exactly 2 times the short leg'
            }
        };
        return reasons[triangleType]?.[sideName] || 'Apply the ratio';
    }

    getAlgebraicRule(triangleType, sideName) {
        const rules = {
            '45-45-90': {
                'hypotenuse': 'c = a√2',
                'leg': 'a = c/√2 = c√2/2'
            },
            '30-60-90': {
                'longLeg': 'b = a√3',
                'shortLeg': 'a = c/2 or a = b/√3 = b√3/3',
                'hypotenuse': 'c = 2a'
            }
        };
        return rules[triangleType]?.[sideName] || 'Ratio application';
    }

    formatSidesExpression(exactSides, triangleType) {
        if (triangleType === '45-45-90') {
            return `leg₁ = ${exactSides.leg1}, leg₂ = ${exactSides.leg2}, hypotenuse = ${exactSides.hypotenuse}`;
        } else if (triangleType === '30-60-90') {
            return `short leg = ${exactSides.shortLeg}, long leg = ${exactSides.longLeg}, hypotenuse = ${exactSides.hypotenuse}`;
        }
        return '';
    }

    // ENHANCED EXPLANATION METHODS (reuse from linear workbook with adaptations)

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
                prerequisiteSkills: this.identifyPrerequisites(step, problem.triangleType),
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
            'Identify Triangle Type': "We need to figure out what kind of special triangle this is - either the one with equal sides (45-45-90) or the one that comes from cutting a triangle with all equal sides in half (30-60-90).",
            'Recall Side Ratio': "These special triangles are like magic! The sides always follow the same pattern, like a recipe. We just need to remember the pattern!",
            'Identify Given': "We know one measurement. It's like having one piece of a puzzle - we can figure out all the other pieces!",
            'Find hypotenuse': "The hypotenuse is the longest side, the one across from the right angle. We use our special ratio to figure it out!",
            'Find leg': "The legs are the two sides that make the right angle. We use division and a special trick called 'rationalizing' to find them!",
            'Find longLeg': "The long leg is the longer of the two sides that make the right angle. It's across from the bigger angle (60°). We multiply by √3 to find it!",
            'Find shortLeg': "The short leg is the shorter side that makes the right angle. It's across from the smaller angle (30°). We can divide to find it!",
            'Complete Solution': "Now we have all three sides! We can check our work by making sure they follow the special pattern.",
            'Verify with Pythagorean Theorem': "This is like double-checking our answer. We use the famous formula a² + b² = c² to make sure everything adds up correctly!"
        };

        return ELI5Explanations[step.step] || "We're taking another step to solve our triangle puzzle!";
    }

    findRelevantAnalogy(step, problem) {
        const triangleType = problem.triangleType;
        
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(triangleType) || analogy.suitableFor.includes('all')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of this like following a pattern - once you know the pattern, you can figure out all the missing pieces!";
    }

    convertToSimpleLanguage(description) {
        const simplifications = {
            'hypotenuse': 'the longest side (across from the right angle)',
            'leg': 'one of the two shorter sides',
            'ratio': 'pattern of how the sides relate',
            'opposite': 'across from',
            'adjacent': 'next to',
            'rationalize': 'clean up the fraction by removing √ from bottom',
            'simplify': 'make it easier to read',
            'equilateral': 'triangle with all equal sides',
            'isosceles': 'triangle with two equal sides',
            'bisect': 'cut exactly in half',
            'altitude': 'height line that makes a right angle',
            'perpendicular': 'making a square corner (90°)',
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
            'Identify Triangle Type': 'Draw the triangle and label all three angles',
            'Recall Side Ratio': 'Write the ratio next to your triangle: 1:1:√2 or 1:√3:2',
            'Identify Given': 'Circle or highlight the measurement you know',
            'Find hypotenuse': 'Draw an arrow from the leg to the hypotenuse and write "×√2" or "×2"',
            'Find leg': 'Draw an arrow from hypotenuse to leg and write "÷√2" or "÷2"',
            'Find longLeg': 'Draw arrow from short leg to long leg and write "×√3"',
            'Find shortLeg': 'Draw arrow showing how to get short leg',
            'Complete Solution': 'Label all three sides with their values',
            'Verify with Pythagorean Theorem': 'Draw squares on each side to show a² + b² = c²'
        };

        return visualizations[step.step] || 'Draw a diagram showing this step';
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

    addErrorPrevention(step, triangleType) {
        const category = triangleType === '45-45-90' ? '45_45_90' : '30_60_90';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTips(step, triangleType),
                checkPoints: this.generateCheckPoints(step),
                warningFlags: this.identifyWarningFlags(step, triangleType)
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
            'Identify Triangle Type': 'Special right triangles have specific angle measures that create predictable side relationships. Recognizing the type tells us which ratio to use.',
            'Recall Side Ratio': 'These ratios come from geometric principles - not arbitrary rules. The 45-45-90 ratio comes from a square\'s diagonal, and 30-60-90 from an equilateral triangle\'s altitude.',
            'Identify Given': 'Knowing one side gives us complete information because the ratios are fixed. It\'s like knowing one ingredient amount in a recipe with fixed proportions.',
            'Find hypotenuse': 'The hypotenuse is always the longest side. In special triangles, it has a specific relationship to the legs.',
            'Find leg': 'Working backwards from the hypotenuse requires using the inverse of our ratio relationship.',
            'Complete Solution': 'All three sides now form the exact ratio that defines this special triangle.',
            'Verify with Pythagorean Theorem': 'Special triangles must satisfy the Pythagorean theorem because they are right triangles. This verification confirms our ratios are correct.'
        };

        return conceptualExplanations[step.step] || 'This step applies the fundamental properties of special right triangles.';
    }

    getProceduralExplanation(step) {
        const proceduralSteps = {
            'Identify Triangle Type': '1. Look at angle measures\n2. Determine if 45-45-90 or 30-60-90\n3. Recall corresponding ratio',
            'Recall Side Ratio': '1. Write down the ratio\n2. Label which position each side occupies\n3. Prepare to apply ratio',
            'Find hypotenuse': '1. Identify the leg value\n2. Multiply by √2 (45-45-90) or 2 (30-60-90 from short leg)\n3. Simplify if needed',
            'Find leg': '1. Identify the hypotenuse value\n2. Divide by the appropriate ratio multiplier\n3. Rationalize denominator\n4. Simplify',
            'Verify with Pythagorean Theorem': '1. Square each leg\n2. Add the squares\n3. Square the hypotenuse\n4. Confirm they are equal'
        };

        return proceduralSteps[step.step] || 'Follow the standard procedure for this step type.';
    }

    getVisualExplanation(step, problem) {
        const triangleType = problem.triangleType;
        
        const visualExplanations = {
            '45-45-90': 'Picture a square cut diagonally. The two legs are the sides of the square (equal), and the diagonal is √2 times longer.',
            '30-60-90': 'Picture an equilateral triangle cut vertically down the middle. The original side becomes the hypotenuse, half the base is the short leg, and the height is the long leg.'
        };

        return visualExplanations[triangleType] || 'Visualize the triangle with labeled angles and sides.';
    }

    getAlgebraicExplanation(step) {
        const algebraicRules = {
            'Identify Triangle Type': 'Classification based on angle measures: 45°-45°-90° or 30°-60°-90°',
            'Recall Side Ratio': '45-45-90: a:a:a√2  |  30-60-90: a:a√3:2a',
            'Find hypotenuse': 'c = a√2 (45-45-90) or c = 2a (30-60-90)',
            'Find leg': 'a = c/√2 = c√2/2 (45-45-90) or a = c/2 (30-60-90)',
            'Find longLeg': 'b = a√3 where a is short leg',
            'Find shortLeg': 'a = b/√3 = b√3/3 where b is long leg',
            'Verify with Pythagorean Theorem': 'a² + b² = c² must hold for all right triangles'
        };

        return algebraicRules[step.step] || 'Apply algebraic properties of special triangles.';
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
                'ratio': 'pattern',
                'opposite': 'across from',
                'isosceles': 'two equal sides',
                'equilateral': 'all equal sides',
                'rationalize': 'clean up fraction',
                'bisect': 'cut in half'
            },
            intermediate: {
                'hypotenuse': 'hypotenuse',
                'leg': 'leg',
                'ratio': 'ratio',
                'opposite': 'opposite',
                'isosceles': 'isosceles',
                'equilateral': 'equilateral',
                'rationalize': 'rationalize',
                'bisect': 'bisect'
            },
            ELI5: {
                'hypotenuse': 'the longest side that goes across from the right angle',
                'leg': 'one of the two sides that make the square corner',
                'ratio': 'pattern that tells us how the sides are related',
                'opposite': 'on the other side from',
                'isosceles': 'a triangle where two sides are exactly the same length',
                'equilateral': 'a triangle where all three sides are exactly the same',
                'rationalize': 'get rid of the square root on the bottom of the fraction',
                'bisect': 'cut exactly in half, like cutting a sandwich'
            },
            detailed: {
                'hypotenuse': 'hypotenuse (side opposite the right angle)',
                'leg': 'leg (side adjacent to the right angle)',
                'ratio': 'proportional relationship',
                'opposite': 'opposite to',
                'isosceles': 'isosceles (two congruent sides)',
                'equilateral': 'equilateral (three congruent sides)',
                'rationalize': 'rationalize (eliminate radicals from denominator)',
                'bisect': 'bisect (divide into two equal parts)'
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
            currentState: `We now have: ${currentStep.expression || currentStep.description}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This helps us: ${this.explainStepNecessity(currentStep, nextStep)}`,
            howItHelps: `This will help by: ${this.explainStepBenefit(nextStep)}`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue finding all sides of the triangle`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
    }

    explainStepNecessity(currentStep, nextStep) {
        return `continuing to apply the special triangle ratios to find all unknown sides`;
    }

    explainStepBenefit(nextStep) {
        return `bringing us closer to knowing all three sides of the triangle`;
    }

    generatePreventionTips(step, triangleType) {
        const tips = {
            'Identify Triangle Type': [
                'Check all three angle measures',
                'Look for 45-45-90 or 30-60-90 pattern',
                'Draw and label the triangle'
            ],
            'Recall Side Ratio': [
                'Write the ratio clearly: 1:1:√2 or 1:√3:2',
                'Label which side is which position in ratio',
                'Double-check you have the right ratio for the triangle type'
            ],
            'Find hypotenuse': [
                'Use √2 for 45-45-90, not 2',
                'Use 2 for 30-60-90 (when given short leg)',
                'Check: hypotenuse should be longest side'
            ],
            'Find leg': [
                'Remember to rationalize denominators',
                'For 45-45-90: divide by √2 then rationalize',
                'For 30-60-90 short leg: divide hypotenuse by 2'
            ],
            'Find longLeg': [
                'Multiply short leg by √3',
                'Long leg is opposite the 60° angle',
                'Check: long leg > short leg'
            ]
        };

        return tips[step.step] || ['Check your arithmetic', 'Verify with the ratio'];
    }

    generateCheckPoints(step) {
        return [
            'Did I use the correct ratio for this triangle type?',
            'Did I identify which side I have correctly?',
            'If I rationalized, did I do it properly?',
            'Does my answer make sense (is hypotenuse longest)?',
            'Can I verify with Pythagorean theorem?'
        ];
    }

    identifyWarningFlags(step, triangleType) {
        const warnings = {
            '45_45_90': {
                'Find hypotenuse': ['Using 2 instead of √2', 'Forgetting the √2 multiplier'],
                'Find leg': ['Not rationalizing 1/√2', 'Arithmetic errors with √2']
            },
            '30_60_90': {
                'Find longLeg': ['Using 2 instead of √3', 'Confusing which leg is long'],
                'Find shortLeg': ['Not rationalizing 1/√3', 'Using wrong formula'],
                'Identify Given': ['Mixing up short and long leg']
            }
        };

        const category = triangleType === '45-45-90' ? '45_45_90' : '30_60_90';
        return warnings[category]?.[step.step] || [];
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'Identify Triangle Type': 'Do the angles add up to 180° and include a 90° angle?',
            'Recall Side Ratio': 'Am I using the correct ratio for this triangle type?',
            'Find hypotenuse': 'Is my hypotenuse the longest side?',
            'Find leg': 'Did I remember to rationalize the denominator?',
            'Find longLeg': 'Is the long leg opposite the 60° angle?',
            'Complete Solution': 'Do all three sides follow the expected ratio?',
            'Verify with Pythagorean Theorem': 'Does a² + b² equal c²?'
        };

        return questions[step.step] || 'Does this step make sense and follow the ratio?';
    }

    describeExpectedResult(step) {
        const expectations = {
            'Identify Triangle Type': 'Triangle type clearly identified (45-45-90 or 30-60-90)',
            'Recall Side Ratio': 'Ratio written and understood',
            'Find hypotenuse': 'Hypotenuse calculated and expressed with radical if needed',
            'Find leg': 'Leg calculated with rationalized denominator',
            'Find longLeg': 'Long leg calculated using √3',
            'Find shortLeg': 'Short leg calculated correctly',
            'Complete Solution': 'All three sides known and verified'
        };

        return expectations[step.step] || 'Step completed correctly';
    }

    generateTroubleshootingTips(step) {
        return [
            'If stuck, review the ratio for this triangle type',
            'Draw a clear diagram with all angles labeled',
            'Check which side you have and which you need',
            'Remember: always rationalize denominators',
            'Verify your answer makes geometric sense'
        ];
    }

    generateGuidingQuestions(step, problem) {
        const questions = {
            'Identify Triangle Type': [
                'What are the three angle measures?',
                'Do I see 45-45-90 or 30-60-90?',
                'What ratio corresponds to this type?'
            ],
            'Recall Side Ratio': [
                'Is this 45-45-90 (ratio 1:1:√2) or 30-60-90 (ratio 1:√3:2)?',
                'Which position in the ratio does each side occupy?'
            ],
            'Find hypotenuse': [
                'Which leg do I have?',
                'What do I multiply by to get the hypotenuse?',
                'Is √2 or 2 the correct multiplier?'
            ],
            'Find leg': [
                'Do I divide by √2 or by 2?',
                'After dividing, do I need to rationalize?',
                'What is the rationalized form?'
            ],
            'Find longLeg': [
                'Do I have the short leg?',
                'What do I multiply by to get long leg?',
                'Is the long leg opposite 60°?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'What information do I have?'];
    }

    generateProgressiveHints(step, problem) {
        const triangleType = problem.triangleType === '45-45-90' ? '45_45_90' : '30_60_90';
        const category = problem.problemType || triangleType;
        
        const hintSet = this.hints[category] || this.hints['45_45_90_find_hypotenuse'];

        return {
            level1: hintSet.level1 || 'What type of triangle is this?',
            level2: hintSet.level2 || 'What ratio should you use?',
            level3: hintSet.level3 || 'Apply the ratio to find the unknown side.',
            level4: hintSet.level4 || 'Calculate the final answer.'
        };
    }

    breakIntoSubSteps(step) {
        const subSteps = {
            'Recall Side Ratio': [
                'Identify triangle type',
                'Write down the complete ratio',
                'Label each position (short, long, hypotenuse)'
            ],
            'Find hypotenuse': [
                'Identify which leg you have',
                'Determine the multiplier (√2 or 2)',
                'Multiply: leg × multiplier',
                'Write in exact form with radical'
            ],
            'Find leg': [
                'Set up division: hypotenuse ÷ divisor',
                'If there\'s a radical in denominator, rationalize',
                'Multiply numerator and denominator by the radical',
                'Simplify the result'
            ],
            'Verify with Pythagorean Theorem': [
                'Square the first leg',
                'Square the second leg',
                'Add the two squares',
                'Square the hypotenuse',
                'Confirm the sums are equal'
            ]
        };

        return subSteps[step.step] || ['Understand the goal', 'Apply the technique', 'Check the result'];
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: `Try a ${problem.triangleType} triangle with a different given side`,
            practiceHint: 'Practice with whole numbers first before trying radicals',
            extension: 'Try finding area and perimeter once you know all sides'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What triangle type and information do I have?',
            goal: 'What side am I trying to find?',
            strategy: 'Which ratio or formula should I use?',
            execute: 'How do I calculate this correctly?',
            verify: 'Does my answer fit the pattern?'
        };
    }

    identifyDecisionPoints(step) {
        return [
            'Which triangle type (45-45-90 or 30-60-90)?',
            'Which side do I have?',
            'Which formula from the ratio applies?',
            'Do I need to rationalize?'
        ];
    }

    suggestAlternativeMethods(step, problem) {
        const alternatives = {
            'Find sides': [
                'Use the ratio method (recommended)',
                'Use trigonometry (sin, cos, tan)',
                'Use Pythagorean theorem with one known relationship'
            ],
            'Verify answer': [
                'Pythagorean theorem',
                'Check ratio proportions',
                'Use calculator to check decimal approximations'
            ]
        };

        return alternatives[step.step] || ['The chosen method is appropriate'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by using that information to find another side`,
            progression: 'We are systematically finding all sides using the ratio',
            relationship: 'Each side we find helps us find the next one'
        };
    }

    identifyPrerequisites(step, triangleType) {
        const category = triangleType === '45-45-90' ? '45_45_90' : '30_60_90';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Understanding of right triangles', 'Working with radicals'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Identify Triangle Type': ['special right triangle', '45-45-90', '30-60-90', 'angles'],
            'Recall Side Ratio': ['ratio', 'proportion', 'hypotenuse', 'leg'],
            'Find hypotenuse': ['hypotenuse', 'leg', '√2', 'multiply'],
            'Find leg': ['rationalize', 'denominator', 'simplify', 'divide'],
            'Find longLeg': ['long leg', 'short leg', '√3', 'opposite'],
            'Find shortLeg': ['short leg', 'rationalize', '√3'],
            'Verify with Pythagorean Theorem': ['Pythagorean theorem', 'square', 'verify']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPrompts(step) {
        return {
            before: 'Before starting, what triangle type do I have and what ratio applies?',
            during: 'As I calculate, am I using the correct multiplier from the ratio?',
            after: 'After finishing, does my answer make sense geometrically?'
        };
    }

    findRealWorldConnection(step, problem) {
        const connections = {
            '45-45-90': 'Like finding the diagonal distance across a square room, or calculating staircase measurements with 45° slope.',
            '30-60-90': 'Like finding the height of an equilateral triangular sign, or calculating roof measurements with specific pitch angles.'
        };

        return connections[problem.triangleType] || 'Special triangles appear in architecture, construction, and design.';
    }

    // GRAPH/DIAGRAM GENERATION

    generateSpecialTrianglesGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        this.graphData = this.generateTriangleDiagram(this.currentProblem, this.currentSolution);
    }

    generateTriangleDiagram(problem, solution) {
        return {
            type: 'special_triangle',
            triangleType: solution.triangleType,
            angles: solution.angles,
            sides: solution.sides || solution.exactSides,
            description: `${solution.triangleType} triangle diagram with labeled sides and angles`,
            visualization: 'Triangle with vertices at (0,0), (base,0), and calculated third vertex',
            labels: {
                angles: solution.angles,
                sides: solution.exactSides || solution.sides
            }
        };
    }

    // WORKBOOK GENERATION

    generateSpecialTrianglesWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createTriangleLessonSection(),
            this.createEnhancedStepsSection(),
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
            title: 'Enhanced Special Right Triangles Mathematical Workbook',
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
            ['Triangle Type', this.currentSolution?.triangleType || this.currentProblem.triangleType],
            ['Problem Type', this.triangleTypes[this.currentProblem.problemType]?.name || this.currentProblem.problemType],
            ['Given Information', this.currentSolution?.given || `${this.currentProblem.givenSide} = ${this.currentProblem.givenValue}`],
            ['Find', this.currentProblem.findWhat || 'All sides']
        ];

        if (this.currentSolution?.angles) {
            problemData.push(['', '']);
            problemData.push(['Angles', `${this.currentSolution.angles.angle1}°-${this.currentSolution.angles.angle2}°-${this.currentSolution.angles.angle3}°`]);
        }

        if (this.currentSolution?.ratio) {
            problemData.push(['Side Ratio', this.currentSolution.ratio]);
        }

        if (this.currentProblem.scenario) {
            problemData.push(['', '']);
            problemData.push(['Scenario', this.currentProblem.scenario]);
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSection() {
        if (!this.prerequisiteChecks) return null;

        const triangleType = this.currentProblem.triangleType;
        const category = triangleType === '45-45-90' ? '45_45_90' : '30_60_90';
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

    createTriangleLessonSection() {
        const triangleType = this.currentProblem.triangleType;
        const lessonKey = triangleType === '45-45-90' ? 'triangle_45_45_90' : 'triangle_30_60_90';
        const lesson = this.lessons[lessonKey];

        if (!lesson) return null;

        const lessonData = [
            ['Triangle Type', lesson.title],
            ['', ''],
            ['Key Concepts', '']
        ];

        lesson.concepts.forEach(concept => {
            lessonData.push(['', concept]);
        });

        lessonData.push(['', '']);
        lessonData.push(['Theory', lesson.theory]);
        lessonData.push(['', '']);
        lessonData.push(['Key Formulas', '']);

        for (const [name, formula] of Object.entries(lesson.keyFormulas)) {
            lessonData.push([name, formula]);
        }

        if (lesson.derivation) {
            lessonData.push(['', '']);
            lessonData.push(['Derivation', '']);
            for (const [step, description] of Object.entries(lesson.derivation)) {
                lessonData.push([step, description]);
            }
        }

        if (lesson.properties) {
            lessonData.push(['', '']);
            lessonData.push(['Properties', '']);
            lesson.properties.forEach(prop => {
                lessonData.push(['', prop]);
            });
        }

        if (lesson.applications) {
            lessonData.push(['', '']);
            lessonData.push(['Applications', '']);
            lesson.applications.forEach(app => {
                lessonData.push(['', app]);
            });
        }

        return {
            title: 'Key Concepts & Theory',
            type: 'lesson',
            data: lessonData
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
                stepsData.push(['Current State', step.explanation.currentState]);
                stepsData.push(['Next Goal', step.explanation.nextGoal]);
                stepsData.push(['Why', step.explanation.why]);
                stepsData.push(['', '']);
                return;
            }

            stepsData.push([`Step ${step.stepNumber}`, step.description]);

            if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            if (step.calculation) {
                stepsData.push(['Calculation', step.calculation]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.algebraicRule) {
                stepsData.push(['Algebraic Rule', step.algebraicRule]);
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
                stepsData.push(['Procedural', step.explanations.procedural]);
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

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        if (this.currentSolution.exactSides) {
            solutionData.push(['Final Sides (Exact)', '']);
            for (const [sideName, value] of Object.entries(this.currentSolution.exactSides)) {
                solutionData.push([sideName, value]);
            }
        }

        if (this.currentSolution.sides) {
            solutionData.push(['', '']);
            solutionData.push(['Decimal Approximations', '']);
            for (const [sideName, value] of Object.entries(this.currentSolution.sides)) {
                if (typeof value === 'number') {
                    solutionData.push([sideName, value.toFixed(4)]);
                }
            }
        }

        if (this.currentSolution.area !== undefined) {
            solutionData.push(['', '']);
            solutionData.push(['Area', this.currentSolution.area]);
            if (this.currentSolution.exactArea) {
                solutionData.push(['Area (Exact)', this.currentSolution.exactArea]);
            }
        }

        if (this.currentSolution.perimeter !== undefined) {
            solutionData.push(['', '']);
            solutionData.push(['Perimeter', this.currentSolution.perimeter]);
            if (this.currentSolution.exactPerimeter) {
                solutionData.push(['Perimeter (Exact)', this.currentSolution.exactPerimeter]);
            }
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
            ['Triangle Type', this.currentSolution.triangleType],
            ['Side Ratio', this.currentSolution.ratio],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Explanation Level', this.explanationLevel]
        ];

        if (this.currentSolution.sideLabels) {
            analysisData.push(['', '']);
            analysisData.push(['Side Labels', '']);
            for (const [side, label] of Object.entries(this.currentSolution.sideLabels)) {
                analysisData.push([side, label]);
            }
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
            ['Verification Method', 'Pythagorean Theorem'],
            ['Equation', verification.pythagorean || 'a² + b² = c²'],
            ['', ''],
            ['Left Side (a² + b²)', verification.leftSide],
            ['Right Side (c²)', verification.rightSide],
            ['Difference', verification.difference],
            ['Valid', verification.isValid ? 'Yes ✓' : 'No ✗']
        ];

        if (this.verificationDetail === 'detailed') {
            verificationData.push(['', '']);
            verificationData.push(['Conclusion', verification.isValid ? 
                'The sides satisfy the Pythagorean theorem, confirming our special triangle ratios are correct.' :
                'There appears to be an error in the calculations.']);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const triangleType = this.currentProblem.triangleType;
        const applications = Object.values(this.realWorldProblems).filter(app => 
            app.triangle === triangleType
        ).slice(0, 3);

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

        const triangleType = this.currentProblem.triangleType;
        const notes = this.generateSpecialTrianglesPedagogicalNotes(triangleType);

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

        const triangleType = this.currentProblem.triangleType;
        const alternatives = this.generateSpecialTrianglesAlternativeMethods(triangleType);

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
        const triangleType = this.currentProblem.triangleType;
        const category = triangleType === '45-45-90' ? 'canSolve45_45_90' : 'canSolve30_60_90';
        const problems = this.questionBank.byObjective[category] || [];

        const practiceData = [
            ['Practice Problems', ''],
            ['', '']
        ];

        problems.forEach((p, i) => {
            practiceData.push([`Problem ${i + 1}`, p]);
        });

        // Add mixed problems
        practiceData.push(['', '']);
        practiceData.push(['Mixed Problems', '']);
        
        this.questionBank.byDifficulty.easy.forEach((p, i) => {
            if (i < 2) practiceData.push([`Easy ${i + 1}`, p]);
        });

        this.questionBank.byDifficulty.medium.forEach((p, i) => {
            if (i < 2) practiceData.push([`Medium ${i + 1}`, p]);
        });

        return {
            title: 'Practice Problems',
            type: 'practice',
            data: practiceData
        };
    }

    generateSpecialTrianglesPedagogicalNotes(triangleType) {
        const pedagogicalDatabase = {
            '45-45-90': {
                objectives: [
                    'Identify 45-45-90 triangles from angle measures',
                    'Apply the 1:1:√2 ratio to find missing sides',
                    'Solve problems involving square diagonals',
                    'Rationalize denominators when needed'
                ],
                keyConcepts: [
                    'Isosceles right triangle has two 45° angles and one 90° angle',
                    'Two legs are always equal',
                    'Hypotenuse is leg times √2',
                    'Derived from square diagonal'
                ],
                prerequisites: [
                    'Understanding of right triangles',
                    'Pythagorean theorem',
                    'Working with square roots',
                    'Rationalizing denominators'
                ],
                commonDifficulties: [
                    'Using 2 instead of √2 for hypotenuse',
                    'Forgetting to rationalize denominators',
                    'Not simplifying radicals',
                    'Confusing 45-45-90 with 30-60-90'
                ],
                teachingStrategies: [
                    'Show derivation from square diagonal',
                    'Practice with concrete measurements first',
                    'Use graph paper to draw squares and diagonals',
                    'Emphasize that √2 ≈ 1.414 for estimation'
                ],
                extensions: [
                    'Finding area and perimeter',
                    'Composite figures with multiple 45-45-90 triangles',
                    'Three-dimensional applications',
                    'Trigonometric ratios'
                ],
                assessment: [
                    'Can student identify 45-45-90 from angles?',
                    'Can student apply the ratio correctly?',
                    'Does student rationalize denominators?',
                    'Can student apply to real-world problems?'
                ]
            },
            '30-60-90': {
                objectives: [
                    'Identify 30-60-90 triangles from angle measures',
                    'Apply the 1:√3:2 ratio to find missing sides',
                    'Distinguish between short leg and long leg',
                    'Solve problems involving equilateral triangles'
                ],
                keyConcepts: [
                    'Triangle has angles of 30°, 60°, and 90°',
                    'Short leg opposite 30°, long leg opposite 60°',
                    'Hypotenuse is exactly double the short leg',
                    'Long leg is short leg times √3',
                    'Derived from equilateral triangle altitude'
                ],
                prerequisites: [
                    'Understanding of equilateral triangles',
                    'Properties of altitudes',
                    'Working with √3',
                    'Identifying opposite sides'
                ],
                commonDifficulties: [
                    'Confusing short leg and long leg',
                    'Using wrong multiplier (2 vs √3)',
                    'Not rationalizing with √3',
                    'Setting up problems from equilateral triangles'
                ],
                teachingStrategies: [
                    'Show derivation from equilateral triangle',
                    'Always label angles first, then sides',
                    'Use mnemonic: "Short opposite small, long opposite large"',
                    'Practice recognizing which leg is given',
                    'Emphasize that hypotenuse = 2 × short leg (simplest relationship)'
                ],
                extensions: [
                    'Regular hexagons (six 30-60-90 triangles)',
                    'Finding height of equilateral triangles',
                    'Area calculations',
                    'Trigonometric ratios'
                ],
                assessment: [
                    'Can student identify which leg is which?',
                    'Can student apply all three relationships in ratio?',
                    'Does student handle rationalization with √3?',
                    'Can student solve equilateral triangle problems?'
                ]
            }
        };

        return pedagogicalDatabase[triangleType] || {
            objectives: ['Solve special right triangles'],
            keyConcepts: ['Fixed ratios in special triangles'],
            prerequisites: ['Right triangle basics'],
            commonDifficulties: ['Ratio application'],
            teachingStrategies: ['Practice with examples'],
            extensions: ['Advanced applications'],
            assessment: ['Check understanding']
        };
    }

    generateSpecialTrianglesAlternativeMethods(triangleType) {
        const alternativeDatabase = {
            '45-45-90': {
                primaryMethod: 'Ratio Method (1:1:√2)',
                methods: [
                    {
                        name: 'Pythagorean Theorem',
                        description: 'Use a² + a² = c² to find hypotenuse, or c² = a² + a² to find leg'
                    },
                    {
                        name: 'Trigonometry',
                        description: 'Use sin(45°) = cos(45°) = √2/2 and tan(45°) = 1'
                    },
                    {
                        name: 'Coordinate Geometry',
                        description: 'Plot triangle on coordinate plane and use distance formula'
                    }
                ],
                comparison: 'Ratio method is fastest and most direct. Pythagorean theorem works but requires more calculation. Trigonometry useful for verification.'
            },
            '30-60-90': {
                primaryMethod: 'Ratio Method (1:√3:2)',
                methods: [
                    {
                        name: 'Pythagorean Theorem',
                        description: 'Use a² + (a√3)² = (2a)² to verify or find sides'
                    },
                    {
                        name: 'Trigonometry',
                        description: 'Use sin(30°) = 1/2, cos(30°) = √3/2, tan(30°) = √3/3, etc.'
                    },
                    {
                        name: 'Equilateral Triangle Construction',
                        description: 'Build from equilateral triangle and use altitude properties'
                    }
                ],
                comparison: 'Ratio method is most efficient. Pythagorean works but is more complex. Trigonometry provides exact values. Construction method helps understanding.'
            }
        };

        return alternativeDatabase[triangleType] || {
            primaryMethod: 'Ratio-based approach',
            methods: [{
                name: 'Alternative method',
                description: 'Other approaches possible depending on given information'
            }],
            comparison: 'Choose method based on given information and personal preference'
        };
    }
}

// Export the class
export default EnhancedSpecialRightTrianglesMathematicalWorkbook;

