// Enhanced Triangle Area Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedTriangleAreaMathematicalWorkbook {
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
        this.initializeTriangleAreaSolvers();
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
        this.initializeVisualizationDatabase();
        this.initializeUnitConversionDatabase();
    }

    initializeTriangleLessons() {
        this.lessons = {
            triangle_area_base_height: {
                title: "Triangle Area Using Base and Height",
                concepts: [
                    "General formula: Area = (1/2) × base × height",
                    "Height is perpendicular distance from base to opposite vertex",
                    "Base can be any side of the triangle",
                    "Units of area are square units (e.g., cm², m², ft²)",
                    "Height must be perpendicular to the chosen base"
                ],
                theory: "The area of a triangle is half the area of a parallelogram with the same base and height. This is because a parallelogram can be divided into two congruent triangles.",
                keyFormulas: {
                    "Standard Area Formula": "A = (1/2) × b × h",
                    "Alternative Form": "A = (b × h) / 2",
                    "With Given Measurements": "A = 0.5 × base × height"
                },
                derivation: {
                    step1: "Start with a parallelogram with base b and height h",
                    step2: "Area of parallelogram = base × height",
                    step3: "A diagonal divides parallelogram into two congruent triangles",
                    step4: "Therefore, triangle area = (1/2) × base × height"
                },
                solvingSteps: [
                    "Identify the base measurement",
                    "Identify the perpendicular height",
                    "Verify height is perpendicular to base",
                    "Apply formula: A = (1/2) × base × height",
                    "Multiply base by height",
                    "Divide result by 2 (or multiply by 0.5)",
                    "Include appropriate square units in answer"
                ],
                applications: [
                    "Architecture and construction",
                    "Land surveying and measurement",
                    "Sail design and nautical calculations",
                    "Roof truss calculations",
                    "Computer graphics and game design",
                    "Art and design composition"
                ],
                importantNotes: [
                    "Height must be perpendicular to base",
                    "Any side can serve as the base",
                    "Height may fall outside the triangle (obtuse triangles)",
                    "Units must be consistent (both in same unit)",
                    "Area is always expressed in square units"
                ]
            },

            triangle_types: {
                title: "Triangle Classification",
                byAngles: {
                    "Acute Triangle": "All angles less than 90°",
                    "Right Triangle": "One angle exactly 90°",
                    "Obtuse Triangle": "One angle greater than 90°"
                },
                bySides: {
                    "Equilateral": "All sides equal, all angles 60°",
                    "Isosceles": "Two sides equal, two angles equal",
                    "Scalene": "All sides different, all angles different"
                },
                areaImplications: {
                    "Right Triangle": "Can use legs as base and height directly",
                    "Obtuse Triangle": "Height falls outside triangle",
                    "Equilateral": "Can use special formula: A = (√3/4) × s²"
                }
            },

            perpendicular_height: {
                title: "Understanding Perpendicular Height",
                concept: "Height is the perpendicular distance from a vertex to the line containing the opposite side (base)",
                keyPoints: [
                    "Height forms a 90° angle with the base",
                    "Height may be inside, on, or outside the triangle",
                    "Every triangle has three different base-height pairs",
                    "All three base-height pairs give the same area"
                ],
                visualization: {
                    "Acute Triangle": "Height inside triangle",
                    "Right Triangle": "Height is one of the legs",
                    "Obtuse Triangle": "Height outside triangle (extended base needed)"
                }
            },

            unit_considerations: {
                title: "Units in Area Calculations",
                linearUnits: ["cm", "m", "km", "in", "ft", "yd", "mi"],
                areaUnits: ["cm²", "m²", "km²", "in²", "ft²", "yd²", "mi²", "acres", "hectares"],
                conversionRules: [
                    "If base and height in cm, area is in cm²",
                    "If base and height in m, area is in m²",
                    "Always convert to same units before calculating",
                    "Area unit is the square of the linear unit"
                ],
                commonConversions: {
                    "1 m² = 10,000 cm²": true,
                    "1 ft² = 144 in²": true,
                    "1 yd² = 9 ft²": true,
                    "1 acre = 43,560 ft²": true,
                    "1 hectare = 10,000 m²": true
                }
            },

            measurement_techniques: {
                title: "Measuring Base and Height",
                measuringBase: [
                    "Use ruler or measuring tape along the side",
                    "Ensure measurement is straight and accurate",
                    "Record units clearly"
                ],
                measuringHeight: [
                    "Identify the perpendicular from vertex to base",
                    "May need to extend base line (for obtuse triangles)",
                    "Use right angle tool to verify perpendicularity",
                    "Measure shortest distance from vertex to base line"
                ],
                practicalTips: [
                    "Draw a clear diagram",
                    "Label all measurements",
                    "Use appropriate precision",
                    "Double-check perpendicularity"
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
            'multiply': '×',
            'divide': '÷',
            'equals': '=',
            'approx': '≈',
            'perpendicular': '⊥',
            'angle': '∠',
            'triangle': '△',
            'degrees': '°',
            'squared': '²',
            'sqrt': '√',
            'pi': 'π',
            'infinity': '∞',
            'plusminus': '±'
        };
    }

    initializeTriangleAreaSolvers() {
        this.triangleAreaTypes = {
            base_height_given: {
                patterns: [
                    /base.*height/i,
                    /triangle.*area/i,
                    /(\d+\.?\d*)\s*(cm|m|ft|in|mm|km).*(\d+\.?\d*)\s*(cm|m|ft|in|mm|km)/
                ],
                solver: this.solveBaseHeightArea.bind(this),
                name: 'Triangle Area - Base and Height Given',
                category: 'base_height',
                description: 'Calculate area when base and height are known'
            },

            find_base: {
                patterns: [
                    /find.*base/i,
                    /calculate.*base/i,
                    /area.*height.*base/i
                ],
                solver: this.findBase.bind(this),
                name: 'Find Base Given Area and Height',
                category: 'reverse_calculation',
                description: 'Find base when area and height are known'
            },

            find_height: {
                patterns: [
                    /find.*height/i,
                    /calculate.*height/i,
                    /area.*base.*height/i
                ],
                solver: this.findHeight.bind(this),
                name: 'Find Height Given Area and Base',
                category: 'reverse_calculation',
                description: 'Find height when area and base are known'
            },

            unit_conversion: {
                patterns: [
                    /convert/i,
                    /different.*unit/i,
                    /cm.*m|m.*cm|ft.*in|in.*ft/
                ],
                solver: this.solveWithUnitConversion.bind(this),
                name: 'Triangle Area with Unit Conversion',
                category: 'unit_conversion',
                description: 'Calculate area with different units for base and height'
            },

            word_problem: {
                patterns: [
                    /garden/i,
                    /field/i,
                    /sail/i,
                    /roof/i,
                    /plot/i,
                    /land/i
                ],
                solver: this.solveWordProblem.bind(this),
                name: 'Triangle Area Word Problem',
                category: 'word_problem',
                description: 'Real-world triangle area problems'
            },

            comparison: {
                patterns: [
                    /compare/i,
                    /larger|smaller|bigger/i,
                    /how.*much.*more/i
                ],
                solver: this.compareTriangleAreas.bind(this),
                name: 'Compare Triangle Areas',
                category: 'comparison',
                description: 'Compare areas of different triangles'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            base_height: {
                'Identify base and height': [
                    'Using non-perpendicular measurements',
                    'Confusing slant height with perpendicular height',
                    'Not verifying 90° angle between base and height'
                ],
                'Apply formula': [
                    'Forgetting to divide by 2 (or multiply by 0.5)',
                    'Multiplying by 2 instead of dividing',
                    'Wrong order of operations'
                ],
                'Calculate product': [
                    'Arithmetic errors in multiplication',
                    'Incorrect decimal placement',
                    'Forgetting to multiply before dividing'
                ],
                'Include units': [
                    'Forgetting square units',
                    'Using linear units instead of square units',
                    'Mixing different unit systems'
                ]
            },
            unit_conversion: {
                'Convert units': [
                    'Converting incorrectly (wrong conversion factor)',
                    'Converting area units instead of linear units',
                    'Forgetting to convert both measurements'
                ],
                'Apply conversion factors': [
                    'Multiplying when should divide (or vice versa)',
                    'Using wrong conversion factor',
                    'Not squaring conversion factor for area'
                ]
            },
            reverse_calculation: {
                'Rearrange formula': [
                    'Incorrect algebraic manipulation',
                    'Forgetting to multiply by 2',
                    'Sign errors in rearrangement'
                ],
                'Solve for unknown': [
                    'Division errors',
                    'Not showing complete work',
                    'Losing track of which variable is unknown'
                ]
            }
        };

        this.errorPrevention = {
            perpendicular_check: {
                reminder: 'Always verify height is perpendicular to base',
                method: 'Look for right angle symbol or measure to confirm 90°'
            },
            divide_by_two: {
                reminder: 'Triangle area is HALF of base times height',
                method: 'Remember: multiply first, then divide by 2'
            },
            square_units: {
                reminder: 'Area is always in square units',
                method: 'If base and height in cm, area is in cm²'
            },
            unit_consistency: {
                reminder: 'Base and height must be in same units before calculating',
                method: 'Convert to common unit first, then calculate'
            },
            formula_check: {
                reminder: 'Formula is A = (1/2) × b × h, not b × h',
                method: 'Think: triangle is half a parallelogram'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why the formula works and its geometric meaning',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Exact sequence of calculations to perform',
                language: 'step-by-step computational instructions'
            },
            visual: {
                focus: 'Geometric understanding and diagram interpretation',
                language: 'spatial and visual descriptions'
            },
            algebraic: {
                focus: 'Mathematical formula and symbolic manipulation',
                language: 'precise mathematical notation'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential calculation steps only',
                examples: 'concrete numbers and simple measurements'
            },
            intermediate: {
                vocabulary: 'standard mathematical terms',
                detail: 'main steps with brief explanations',
                examples: 'mix of simple and moderate complexity'
            },
            ELI5: {
                vocabulary: 'explain like I\'m 5 years old - simplest possible terms',
                detail: 'every tiny step explained with everyday comparisons',
                examples: 'real-world analogies and simple stories',
                analogies: true,
                visualization: 'simple pictures and hands-on demonstrations'
            },
            detailed: {
                vocabulary: 'full mathematical vocabulary',
                detail: 'comprehensive explanations with geometric reasoning',
                examples: 'variety of triangle types and scenarios'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery with questions at each step',
                examples: 'carefully sequenced difficulty progression'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            garden: {
                scenario: "Calculating area of triangular garden bed",
                equation: "Area = (1/2) × base × height",
                examples: [
                    "A triangular garden has base 8 feet and height 6 feet. How much soil is needed to cover it?",
                    "Triangle-shaped flower bed with base 3m and height 2m. What's the planting area?"
                ],
                context: "Gardeners need to know area to calculate soil, mulch, or fertilizer quantities",
                units: "Square feet or square meters"
            },
            roof: {
                scenario: "Calculating roof surface area for triangular gables",
                equation: "Area = (1/2) × base × height",
                examples: [
                    "A roof gable is 12 feet wide at base and 8 feet high. How much roofing material needed?",
                    "Triangular roof section: base 5m, height 3.5m. Calculate shingle coverage needed."
                ],
                context: "Construction requires accurate area calculations for material ordering",
                units: "Square feet or square meters"
            },
            sail: {
                scenario: "Determining sail area for boats",
                equation: "Area = (1/2) × base × height",
                examples: [
                    "A triangular sail has base 10 feet and height 15 feet. What's the sail area?",
                    "Jib sail dimensions: base 3m, height 5m. Calculate total sail area."
                ],
                context: "Sail area affects boat speed and handling characteristics",
                units: "Square feet or square meters"
            },
            land_surveying: {
                scenario: "Measuring triangular plots of land",
                equation: "Area = (1/2) × base × height",
                examples: [
                    "A triangular lot has frontage 50m and depth 30m. What's the lot area?",
                    "Corner property: base 75 ft, height 60 ft. Calculate land area in square feet."
                ],
                context: "Land value and taxation depend on accurate area measurements",
                units: "Square meters, square feet, or acres"
            },
            signage: {
                scenario: "Designing triangular signs and displays",
                equation: "Area = (1/2) × base × height",
                examples: [
                    "Warning sign triangle: base 18 inches, height 15 inches. Calculate sign area.",
                    "Triangular banner: base 2m, height 1.5m. How much fabric needed?"
                ],
                context: "Material cost depends on area calculations",
                units: "Square inches or square centimeters"
            },
            art_design: {
                scenario: "Creating triangular design elements",
                equation: "Area = (1/2) × base × height",
                examples: [
                    "Triangular mosaic tile: base 6cm, height 8cm. Calculate tile area.",
                    "Design element in painting: base 4 inches, height 5 inches. What's the area?"
                ],
                context: "Artists and designers use area calculations for composition and materials",
                units: "Square centimeters or square inches"
            },
            construction: {
                scenario: "Building triangular structures and supports",
                equation: "Area = (1/2) × base × height",
                examples: [
                    "Triangular support brace: base 24 inches, height 18 inches. Calculate surface area.",
                    "Truss component: base 1.5m, height 1m. What's the area?"
                ],
                context: "Structural engineering requires precise area calculations",
                units: "Square inches or square meters"
            },
            pizza_slice: {
                scenario: "Calculating pizza slice area (approximation)",
                equation: "Area = (1/2) × base × height",
                examples: [
                    "Pizza slice approximated as triangle: base 6 inches, height 8 inches. What's the slice area?",
                    "Large pizza slice: base 15cm, height 20cm (approximate triangle). Calculate area."
                ],
                context: "Understanding portion sizes and food quantity",
                units: "Square inches or square centimeters"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            base_height: {
                skills: [
                    'Multiplication of whole numbers and decimals',
                    'Division by 2',
                    'Understanding of perpendicular lines',
                    'Basic geometry vocabulary',
                    'Unit awareness'
                ],
                priorKnowledge: [
                    'What is a triangle',
                    'Concept of base and height',
                    'Perpendicular vs. slant measurements',
                    'Square units for area',
                    'Basic fraction concept (1/2)'
                ],
                checkQuestions: [
                    "What is 6 × 8?",
                    "What is 24 ÷ 2?",
                    "What does perpendicular mean?",
                    "If base is in cm and height is in cm, what unit is area?",
                    "What is 1/2 of 20?"
                ]
            },
            unit_conversion: {
                skills: [
                    'Unit conversion for length',
                    'Understanding metric and imperial systems',
                    'Multiplication and division with conversion factors',
                    'Basic triangle area calculation'
                ],
                priorKnowledge: [
                    'Common unit conversions (cm to m, inches to feet)',
                    'How to apply conversion factors',
                    'Difference between linear and square units'
                ],
                checkQuestions: [
                    "How many centimeters in 1 meter?",
                    "How many inches in 1 foot?",
                    "If 1 m = 100 cm, what is 1 m²?",
                    "Convert 250 cm to meters",
                    "Convert 36 inches to feet"
                ]
            },
            reverse_calculation: {
                skills: [
                    'Algebraic manipulation',
                    'Solving for a variable',
                    'Multiplying by 2',
                    'Division',
                    'Understanding inverse operations'
                ],
                priorKnowledge: [
                    'Triangle area formula',
                    'How to rearrange formulas',
                    'Order of operations'
                ],
                checkQuestions: [
                    "If A = (1/2) × b × h, how do you solve for b?",
                    "What is 2 × 15?",
                    "What is 30 ÷ 5?",
                    "If A = 20 and h = 4, what is b?",
                    "What operation undoes division?"
                ]
            },
            word_problem: {
                skills: [
                    'Reading comprehension',
                    'Extracting numerical information',
                    'Identifying base and height from context',
                    'Triangle area calculation',
                    'Unit interpretation'
                ],
                priorKnowledge: [
                    'Real-world measurement contexts',
                    'Common units of measurement',
                    'How to organize problem information'
                ],
                checkQuestions: [
                    "In 'a garden with base 10 feet', what is the base?",
                    "What does 'height' mean in a triangle?",
                    "If dimensions are in meters, what unit is area?",
                    "How do you identify base vs. height in a word problem?",
                    "What information do you need to find triangle area?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            parallelogram_split: {
                description: "Triangle as half of a parallelogram",
                analogy: "A triangle is like cutting a parallelogram in half diagonally",
                visualization: "Draw parallelogram, then diagonal to show two triangles",
                suitableFor: ['base_height', 'conceptual_understanding'],
                explanation: "Parallelogram area is base × height; triangle is half of that"
            },
            rectangle_comparison: {
                description: "Triangle compared to rectangle",
                analogy: "Triangle takes up half the space of a rectangle with same base and height",
                visualization: "Draw rectangle, then triangle inside it showing half the area",
                suitableFor: ['base_height', 'visual_learners'],
                explanation: "Rectangle area = b × h; triangle area = (1/2) × b × h"
            },
            perpendicular_drop: {
                description: "Height as vertical drop from apex",
                analogy: "Height is like dropping a straight line from the top point to the base",
                visualization: "Show dashed line from vertex perpendicular to base with right angle marker",
                suitableFor: ['understanding_height', 'measurement'],
                explanation: "Height must form 90° angle with base"
            },
            real_object: {
                description: "Physical triangular objects",
                analogy: "Like a slice of pizza, a sail, or a roof section",
                visualization: "Draw real-world triangular object with measurements",
                suitableFor: ['word_problems', 'motivation'],
                explanation: "Many real objects have triangular shapes we need to measure"
            },
            grid_counting: {
                description: "Counting square units on grid",
                analogy: "Like counting whole and half squares that triangle covers",
                visualization: "Triangle on grid paper with shaded squares",
                suitableFor: ['visual_verification', 'elementary'],
                explanation: "Physical counting confirms formula calculation"
            },
            formula_breakdown: {
                description: "Formula components explained",
                analogy: "Formula tells us: multiply base and height, then take half",
                visualization: "Show formula with arrows pointing to each part",
                suitableFor: ['procedural_understanding', 'formula_mastery'],
                explanation: "A = (1/2) × b × h breaks down into clear steps"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "Triangle with base 6 cm and height 4 cm",
                    base: 6,
                    height: 4,
                    unit: "cm",
                    solution: 12,
                    solutionUnit: "cm²",
                    steps: [
                        "Identify base = 6 cm",
                        "Identify height = 4 cm",
                        "Apply formula: A = (1/2) × b × h",
                        "A = (1/2) × 6 × 4",
                        "A = (1/2) × 24",
                        "A = 12 cm²"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "Triangle with base 10 m and height 8 m",
                    base: 10,
                    height: 8,
                    unit: "m",
                    solution: 40,
                    solutionUnit: "m²",
                    steps: [
                        "Base = 10 m, Height = 8 m",
                        "A = (1/2) × 10 × 8",
                        "A = (1/2) × 80",
                        "A = 40 m²"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "Triangle with base 5 inches and height 6 inches",
                    base: 5,
                    height: 6,
                    unit: "in",
                    solution: 15,
                    solutionUnit: "in²",
                    steps: [
                        "Base = 5 in, Height = 6 in",
                        "A = 0.5 × 5 × 6",
                        "A = 0.5 × 30",
                        "A = 15 in²"
                    ],
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "Triangle with base 7.5 cm and height 12 cm",
                    base: 7.5,
                    height: 12,
                    unit: "cm",
                    solution: 45,
                    solutionUnit: "cm²",
                    steps: [
                        "Base = 7.5 cm, Height = 12 cm",
                        "A = (1/2) × 7.5 × 12",
                        "A = (1/2) × 90",
                        "A = 45 cm²"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "Triangle: base 15 ft, height 9.5 ft",
                    base: 15,
                    height: 9.5,
                    unit: "ft",
                    solution: 71.25,
                    solutionUnit: "ft²",
                    steps: [
                        "Base = 15 ft, Height = 9.5 ft",
                        "A = 0.5 × 15 × 9.5",
                        "A = 0.5 × 142.5",
                        "A = 71.25 ft²"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "Find base if area = 30 cm² and height = 5 cm",
                    area: 30,
                    height: 5,
                    unit: "cm",
                    solution: 12,
                    solutionUnit: "cm",
                    steps: [
                        "Given: A = 30 cm², h = 5 cm",
                        "Formula: A = (1/2) × b × h",
                        "30 = (1/2) × b × 5",
                        "30 = 2.5b",
                        "b = 30 / 2.5",
                        "b = 12 cm"
                    ],
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "Triangle: base 25 cm, height 1.2 m (convert units)",
                    base: 25,
                    baseUnit: "cm",
                    height: 1.2,
                    heightUnit: "m",
                    solution: 1500,
                    solutionUnit: "cm²",
                    steps: [
                        "Base = 25 cm, Height = 1.2 m",
                        "Convert: 1.2 m = 120 cm",
                        "Now: base = 25 cm, height = 120 cm",
                        "A = (1/2) × 25 × 120",
                        "A = (1/2) × 3000",
                        "A = 1500 cm²"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "Find height if area = 84 m² and base = 12 m",
                    area: 84,
                    base: 12,
                    unit: "m",
                    solution: 14,
                    solutionUnit: "m",
                    steps: [
                        "Given: A = 84 m², b = 12 m",
                        "A = (1/2) × b × h",
                        "84 = (1/2) × 12 × h",
                        "84 = 6h",
                        "h = 84 / 6",
                        "h = 14 m"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "Compare two triangles: Triangle A (b=10, h=8) vs Triangle B (b=12, h=6)",
                    triangleA: { base: 10, height: 8 },
                    triangleB: { base: 12, height: 6 },
                    unit: "cm",
                    solutionA: 40,
                    solutionB: 36,
                    comparison: "Triangle A is larger by 4 cm²",
                    steps: [
                        "Triangle A: A = (1/2) × 10 × 8 = 40 cm²",
                        "Triangle B: A = (1/2) × 12 × 6 = 36 cm²",
                        "Difference: 40 - 36 = 4 cm²",
                        "Triangle A is larger"
                    ],
                    difficulty: "hard"
                }
            ],
            byScenario: {
                garden: [
                    { problem: "Garden bed: base 8 ft, height 6 ft", base: 8, height: 6, unit: "ft", area: 24 },
                    { problem: "Planting area: base 5 m, height 4 m", base: 5, height: 4, unit: "m", area: 10 }
                ],
                roof: [
                    { problem: "Roof gable: base 12 ft, height 8 ft", base: 12, height: 8, unit: "ft", area: 48 },
                    { problem: "Attic section: base 6 m, height 4.5 m", base: 6, height: 4.5, unit: "m", area: 13.5 }
                ],
                sail: [
                    { problem: "Triangular sail: base 10 ft, height 15 ft", base: 10, height: 15, unit: "ft", area: 75 },
                    { problem: "Jib sail: base 3 m, height 5 m", base: 3, height: 5, unit: "m", area: 7.5 }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            multiply_only: {
                misconception: "Area = base × height (forgetting to divide by 2)",
                reality: "Triangle area is HALF of base times height: A = (1/2) × b × h",
                correctiveExample: "Triangle with b=6, h=4: Area is NOT 24, it's 12 (half of 24)",
                commonIn: ['base_height'],
                correction: "Remember: triangle is half of a parallelogram"
            },
            slant_height: {
                misconception: "Using slant side as height instead of perpendicular height",
                reality: "Height must be perpendicular (90°) to the base",
                correctiveExample: "In right triangle, use the legs, not the hypotenuse",
                commonIn: ['measurement', 'word_problems'],
                correction: "Look for perpendicular symbol (⊥) or right angle marker"
            },
            units_confusion: {
                misconception: "Using linear units (cm, m) for area instead of square units (cm², m²)",
                reality: "Area is always measured in square units",
                correctiveExample: "If base and height in cm, area MUST be in cm², not cm",
                commonIn: ['all_calculations'],
                correction: "Area unit is the square of the linear measurement unit"
            },
            mixed_units: {
                misconception: "Calculating with base and height in different units without converting",
                reality: "Base and height must be in same units before calculation",
                correctiveExample: "Base 50 cm, height 2 m: must convert to 50 cm and 200 cm (or 0.5 m and 2 m)",
                commonIn: ['unit_conversion', 'word_problems'],
                correction: "Always convert to common units first"
            },
            formula_reversal: {
                misconception: "When finding base: dividing area by height without multiplying by 2 first",
                reality: "Must rearrange formula correctly: b = 2A / h",
                correctiveExample: "If A=20, h=5: base = (2×20)/5 = 8, not 20/5 = 4",
                commonIn: ['reverse_calculation'],
                correction: "Remember to undo the 1/2 by multiplying by 2"
            },
            any_side_is_height: {
                misconception: "Thinking any side can be used as height",
                reality: "Height is perpendicular distance, not a side length (except in right triangles)",
                correctiveExample: "In triangle with sides 5, 12, 13: height is NOT 12 unless it's perpendicular to chosen base",
                commonIn: ['triangle_types'],
                correction: "Height is always perpendicular to the base, may not be a side"
            },
            square_conversion: {
                misconception: "Converting area units incorrectly (e.g., 1 m² = 100 cm² instead of 10,000 cm²)",
                reality: "Area conversions square the linear conversion: 1 m = 100 cm, so 1 m² = 10,000 cm²",
                correctiveExample: "1 m² = (100 cm)² = 10,000 cm², not 100 cm²",
                commonIn: ['unit_conversion'],
                correction: "Square the conversion factor for area units"
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            half_parallelogram: {
                analogy: "Cutting a rectangular card diagonally",
                explanation: "When you cut a rectangle corner to corner, you get two identical triangles. Each triangle has half the area of the rectangle.",
                suitableFor: ['base_height', 'formula_understanding'],
                ELI5: "Imagine a sandwich cut diagonally. Each triangular half is exactly half of the whole sandwich. Same with our triangle - it's half of a rectangle!"
            },
            pizza_slice: {
                analogy: "Pizza slice approximation",
                explanation: "A pizza slice is roughly triangular. The longer the slice (height) and wider the crust edge (base), the more pizza you get!",
                suitableFor: ['real_world_connection', 'motivation'],
                ELI5: "Think of a triangle like a slice of pizza. A bigger slice has a longer pointy part (height) and wider crust (base), so it has more pizza (area)!"
            },
            tent_or_roof: {
                analogy: "Tent or roof coverage",
                explanation: "The triangular side of a tent shows how much fabric is needed. Base is ground width, height is pole height.",
                suitableFor: ['word_problems', 'practical_application'],
                ELI5: "A tent side is like a triangle! The wider the tent bottom and the taller the pole, the more cloth you need to cover it."
            },
            ladder_against_wall: {
                analogy: "Space behind a leaning ladder",
                explanation: "A ladder against a wall creates a triangle. Base is distance from wall, height is how high it reaches.",
                suitableFor: ['right_triangles', 'perpendicular_understanding'],
                ELI5: "When a ladder leans on a wall, it makes a triangle shape. The ground distance is the base, and how high it goes up the wall is the height."
            },
            half_the_box: {
                analogy: "Triangle takes half the space",
                explanation: "If you fit a triangle in a box (rectangle), the triangle fills exactly half the box",
                suitableFor: ['formula_derivation', 'conceptual'],
                ELI5: "Draw a rectangle, then draw a diagonal line. The triangle you make fills exactly half the rectangle - that's why we divide by 2!"
            },
            staircase_pattern: {
                analogy: "Stacking blocks in triangle pattern",
                explanation: "Stack blocks: 1 on top, 2 in next row, 3 in next, etc. The total is related to triangle area",
                suitableFor: ['visual_learners', 'counting'],
                ELI5: "If you stack toys in a triangle (1 on top, 2 below, 3 below that), you're making a triangle! The space it takes is the area."
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            base_height_given: {
                level1: "What two measurements do you need for triangle area?",
                level2: "You need base and height. Do you have both?",
                level3: "Formula is A = (1/2) × base × height. What's the first step?",
                level4: "Multiply base × height, then divide by 2. Base is {base}, height is {height}.",
                level5: "Calculate: (1/2) × {base} × {height} = {answer} {unit}²"
            },
            find_base: {
                level1: "You know area and height. What are you solving for?",
                level2: "You need to rearrange the formula A = (1/2) × b × h to solve for b",
                level3: "Start with A = (1/2) × b × h. Multiply both sides by 2, then divide by h",
                level4: "Formula becomes: b = (2 × Area) / height",
                level5: "Calculate: b = (2 × {area}) / {height} = {answer} {unit}"
            },
            find_height: {
                level1: "You know area and base. What are you solving for?",
                level2: "Rearrange A = (1/2) × b × h to solve for h",
                level3: "Multiply both sides by 2, then divide by base",
                level4: "Formula becomes: h = (2 × Area) / base",
                level5: "Calculate: h = (2 × {area}) / {base} = {answer} {unit}"
            },
            unit_conversion: {
                level1: "Are base and height in the same units?",
                level2: "You need to convert one measurement to match the other",
                level3: "Convert the larger unit to the smaller unit (or vice versa)",
                level4: "After conversion, both should be in {targetUnit}. Then calculate area normally.",
                level5: "Converted measurements: base = {convertedBase} {targetUnit}, height = {convertedHeight} {targetUnit}"
            },
            word_problem: {
                level1: "What information does the problem give you?",
                level2: "Can you identify which measurement is the base and which is the height?",
                level3: "Draw a diagram and label the base and height",
                level4: "Now you have base = {base} and height = {height}. Apply the area formula.",
                level5: "Area = (1/2) × {base} × {height} = {answer} {unit}²"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Find area: base 8 cm, height 5 cm",
                    base: 8,
                    height: 5,
                    unit: "cm",
                    answer: 20,
                    answerUnit: "cm²",
                    assesses: "basic_calculation",
                    difficulty: "basic"
                },
                {
                    question: "Find area: base 12 m, height 9 m",
                    base: 12,
                    height: 9,
                    unit: "m",
                    answer: 54,
                    answerUnit: "m²",
                    assesses: "basic_calculation",
                    difficulty: "basic"
                },
                {
                    question: "Find base if area = 24 cm² and height = 6 cm",
                    area: 24,
                    height: 6,
                    unit: "cm",
                    answer: 8,
                    answerUnit: "cm",
                    assesses: "reverse_calculation",
                    difficulty: "intermediate"
                },
                {
                    question: "Find area: base 50 cm, height 1.5 m",
                    base: 50,
                    baseUnit: "cm",
                    height: 1.5,
                    heightUnit: "m",
                    answer: 3750,
                    answerUnit: "cm²",
                    assesses: "unit_conversion",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "What is the formula for triangle area?",
                    options: ["A = b × h", "A = (1/2) × b × h", "A = 2 × b × h", "A = b + h"],
                    correct: "A = (1/2) × b × h",
                    explanation: "Triangle area is half of base times height"
                },
                {
                    question: "If base is 10 cm and height is 8 cm, what is 10 × 8?",
                    options: ["18", "80", "40", "800"],
                    correct: "80",
                    explanation: "First multiply: 10 × 8 = 80, then divide by 2 to get area"
                },
                {
                    question: "What must be true about the height measurement?",
                    options: [
                        "It must be the longest side",
                        "It must be perpendicular to the base",
                        "It must be one of the triangle's sides",
                        "It must be larger than the base"
                    ],
                    correct: "It must be perpendicular to the base",
                    explanation: "Height is always perpendicular (90°) to the base"
                },
                {
                    question: "If base and height are both in meters, what unit is the area?",
                    options: ["meters", "square meters", "cubic meters", "meters per second"],
                    correct: "square meters",
                    explanation: "Area is always in square units (m²)"
                }
            ],
            summative: [
                {
                    question: "A triangular sail has base 12 feet and height 18 feet. Calculate the sail area.",
                    base: 12,
                    height: 18,
                    unit: "ft",
                    answer: 108,
                    answerUnit: "ft²",
                    showsWork: true,
                    rubric: {
                        identify_measurements: 1,
                        write_formula: 1,
                        substitute_values: 1,
                        calculate_correctly: 1,
                        include_units: 1
                    }
                },
                {
                    question: "A triangular garden has area 45 m² and base 9 m. Find the height.",
                    area: 45,
                    base: 9,
                    unit: "m",
                    answer: 10,
                    answerUnit: "m",
                    showsWork: true,
                    rubric: {
                        identify_given: 1,
                        rearrange_formula: 2,
                        solve_correctly: 1,
                        verify_answer: 1
                    }
                },
                {
                    question: "Triangle A: base 15 cm, height 10 cm. Triangle B: base 20 cm, height 7.5 cm. Which has greater area?",
                    triangleA: { base: 15, height: 10 },
                    triangleB: { base: 20, height: 7.5 },
                    unit: "cm",
                    answer: "Equal (both 75 cm²)",
                    showsWork: true,
                    rubric: {
                        calculate_area_A: 2,
                        calculate_area_B: 2,
                        compare: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    { base: 6, height: 4, unit: "cm" },
                    { base: 10, height: 5, unit: "m" },
                    { base: 8, height: 6, unit: "ft" },
                    { base: 12, height: 10, unit: "in" }
                ],
                medium: [
                    { base: 7.5, height: 8, unit: "cm" },
                    { base: 15, height: 12.5, unit: "m" },
                    { area: 36, height: 9, unit: "cm" },
                    { area: 48, base: 12, unit: "ft" }
                ],
                hard: [
                    { base: 25, baseUnit: "cm", height: 1.5, heightUnit: "m" },
                    { base: 3, baseUnit: "ft", height: 24, heightUnit: "in" },
                    { area: 2.4, base: 80, unit: "cm" },
                    { compare: true, triangleA: {base: 18, height: 10}, triangleB: {base: 15, height: 12} }
                ]
            },
            byObjective: {
                canCalculateBasicArea: [
                    "Triangle: base 8 cm, height 6 cm. Find area.",
                    "Triangle: base 10 m, height 7 m. Find area.",
                    "Triangle: base 5 ft, height 12 ft. Find area."
                ],
                canWorkWithDecimals: [
                    "Triangle: base 6.5 cm, height 8 cm. Find area.",
                    "Triangle: base 12 m, height 9.5 m. Find area.",
                    "Triangle: base 7.2 ft, height 10.5 ft. Find area."
                ],
                canFindBase: [
                    "Area = 30 cm², height = 5 cm. Find base.",
                    "Area = 48 m², height = 8 m. Find base.",
                    "Area = 60 ft², height = 10 ft. Find base."
                ],
                canFindHeight: [
                    "Area = 40 cm², base = 10 cm. Find height.",
                    "Area = 54 m², base = 9 m. Find height.",
                    "Area = 72 ft², base = 12 ft. Find height."
                ],
                canConvertUnits: [
                    "Base 50 cm, height 2 m. Find area in cm².",
                    "Base 3 ft, height 36 in. Find area in in².",
                    "Base 250 cm, height 1.5 m. Find area in m²."
                ],
                canSolveWordProblems: [
                    "A triangular garden has base 8 feet and height 6 feet. How many square feet of soil are needed?",
                    "A sail has base 3 meters and height 5 meters. What's the sail area?",
                    "A roof section has base 15 feet and height 10 feet. Calculate the roofing area."
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "both_measurements_given": "Calculate area directly using A = (1/2) × b × h",
                "find_base": "Rearrange to b = (2A) / h",
                "find_height": "Rearrange to h = (2A) / b",
                "different_units": "Convert to same units first, then calculate",
                "word_problem": "Extract measurements from context, identify base and height, then calculate",
                "comparison": "Calculate both areas, then compare values"
            },
            whenToUseWhat: {
                direct_calculation: "When base and height are clearly given in same units",
                unit_conversion: "When measurements are in different units",
                formula_rearrangement: "When solving for base or height given area",
                estimation: "To check if calculated answer is reasonable",
                diagram_drawing: "When problem description is complex or unclear"
            },
            methodSelection: {
                factorsToConsider: [
                    "Are both measurements given or is one unknown?",
                    "Are units consistent or do they need conversion?",
                    "Is this a straightforward calculation or word problem?",
                    "What level of precision is needed?",
                    "Should answer be in specific units?"
                ],
                generalApproach: [
                    "1. Read problem carefully and identify what's given and what's asked",
                    "2. Draw and label a diagram if helpful",
                    "3. Check units and convert if necessary",
                    "4. Choose appropriate formula (direct or rearranged)",
                    "5. Substitute values and calculate",
                    "6. Include correct square units in answer",
                    "7. Check reasonableness of answer"
                ]
            },
            optimizationTips: {
                "Draw a diagram": "Visual representation helps identify base and height correctly",
                "Convert to smaller units": "Often easier to work with whole numbers (cm vs m)",
                "Multiply first, then divide by 2": "Reduces decimal calculation errors",
                "Use 0.5 instead of 1/2": "Calculator-friendly, but be careful with decimals",
                "Estimate first": "Rough calculation helps catch major errors",
                "Check units constantly": "Prevent unit-related mistakes"
            },
            calculationOrder: {
                recommended: "Multiply base × height first, then divide by 2",
                alternative: "Multiply by 0.5, but watch for decimal errors",
                avoid: "Don't divide base or height by 2 individually"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Triangle Area Sprint - Whole Numbers",
                    timeLimit: 60,
                    problems: [
                        { base: 6, height: 4, unit: "cm" },
                        { base: 8, height: 5, unit: "m" },
                        { base: 10, height: 6, unit: "ft" },
                        { base: 12, height: 8, unit: "in" },
                        { base: 5, height: 10, unit: "cm" },
                        { base: 14, height: 7, unit: "m" }
                    ]
                },
                {
                    name: "Triangle Area Sprint - Decimals",
                    timeLimit: 90,
                    problems: [
                        { base: 6.5, height: 4, unit: "cm" },
                        { base: 8, height: 5.5, unit: "m" },
                        { base: 7.2, height: 10, unit: "ft" },
                        { base: 12.5, height: 8, unit: "cm" }
                    ]
                },
                {
                    name: "Reverse Calculation Challenge",
                    timeLimit: 120,
                    problems: [
                        { area: 24, height: 6, unit: "cm", find: "base" },
                        { area: 35, base: 7, unit: "m", find: "height" },
                        { area: 48, height: 8, unit: "ft", find: "base" },
                        { area: 60, base: 12, unit: "cm", find: "height" }
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Measurements",
                    problem: "Triangle area is 30 cm². Base and height are whole numbers. Find all possible pairs.",
                    solution: [
                        { base: 1, height: 60 },
                        { base: 2, height: 30 },
                        { base: 3, height: 20 },
                        { base: 4, height: 15 },
                        { base: 5, height: 12 },
                        { base: 6, height: 10 }
                    ]
                },
                {
                    name: "Double Trouble",
                    problem: "If you double both base and height, how does area change?",
                    solution: "Area becomes 4 times larger",
                    explanation: "Original: (1/2)bh. New: (1/2)(2b)(2h) = (1/2)(4bh) = 4 × original"
                },
                {
                    name: "Equal Areas",
                    problem: "Create three different triangles that all have area 24 cm²",
                    solution: [
                        { base: 8, height: 6 },
                        { base: 12, height: 4 },
                        { base: 6, height: 8 }
                    ]
                },
                {
                    name: "Unit Converter",
                    problem: "Triangle has area 20,000 cm². What is this in m²?",
                    solution: "2 m²",
                    explanation: "20,000 cm² ÷ 10,000 = 2 m² (since 1 m² = 10,000 cm²)"
                }
            ],
            applications: [
                {
                    scenario: "Garden Planning",
                    problem: "You have 50 m² of mulch. Can you cover a triangular garden bed with base 15 m and height 7 m?",
                    calculation: "Area = (1/2) × 15 × 7 = 52.5 m²",
                    solution: "No, need 52.5 m² but only have 50 m²"
                },
                {
                    scenario: "Sail Making",
                    problem: "Sailcloth costs $12 per m². How much for a triangular sail with base 4 m and height 6 m?",
                    calculation: "Area = (1/2) × 4 × 6 = 12 m²; Cost = 12 × $12 = $144",
                    solution: "$144"
                },
                {
                    scenario: "Roof Repair",
                    problem: "Triangular roof section: base 20 ft, height 12 ft. Shingles cover 100 ft² per bundle. How many bundles?",
                    calculation: "Area = (1/2) × 20 × 12 = 120 ft²; Bundles = 120 ÷ 100 = 1.2",
                    solution: "2 bundles (round up)"
                },
                {
                    scenario: "Land Pricing",
                    problem: "Triangular lot: base 40 m, height 30 m. Land costs $150/m². What's the total cost?",
                    calculation: "Area = (1/2) × 40 × 30 = 600 m²; Cost = 600 × $150 = $90,000",
                    solution: "$90,000"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Base = 10 cm, Height = 8 cm",
                        "Area = 10 × 8",
                        "Area = 80 cm²"
                    ],
                    correctAnswer: "40 cm²",
                    errorType: "Forgot to divide by 2"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Base = 12 m, Height = 6 m",
                        "Area = (1/2) × 12",
                        "Area = 6",
                        "Area = 6 × 6 = 36 m²"
                    ],
                    correctAnswer: "36 m²",
                    errorType: "Wrong process but got right answer by accident"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "Base = 50 cm, Height = 2 m",
                        "Area = (1/2) × 50 × 2",
                        "Area = 50 cm²"
                    ],
                    correctAnswer: "5000 cm² or 0.5 m²",
                    errorType: "Didn't convert units before calculating"
                },
                {
                    name: "Find the Error #4",
                    incorrectWork: [
                        "Area = 60 cm², Height = 10 cm",
                        "Base = 60 / 10",
                        "Base = 6 cm"
                    ],
                    correctAnswer: "12 cm",
                    errorType: "Forgot to multiply by 2 when finding base"
                }
            ],
            visualChallenges: [
                {
                    name: "Grid Drawing",
                    task: "On graph paper, draw a triangle with area exactly 12 square units",
                    hint: "Try base 6, height 4 or base 8, height 3"
                },
                {
                    name: "Same Area, Different Shape",
                    task: "Draw three different-looking triangles that all have the same area",
                    hint: "Change base and height but keep their product the same"
                },
                {
                    name: "Maximum Area",
                    task: "Given a perimeter of 24 cm, what triangle shape has maximum area?",
                    solution: "Equilateral triangle (all sides 8 cm)"
                }
            ]
        };
    }

    initializeVisualizationDatabase() {
        this.visualizations = {
            basic_triangle: {
                description: "Simple triangle with base and height marked",
                elements: [
                    "Draw triangle",
                    "Mark base with measurement",
                    "Draw dashed line for height",
                    "Mark height with measurement",
                    "Show right angle symbol where height meets base"
                ],
                labels: ["Base (b)", "Height (h)", "Area = (1/2) × b × h"]
            },
            parallelogram_comparison: {
                description: "Show triangle as half of parallelogram",
                elements: [
                    "Draw parallelogram",
                    "Draw diagonal to create triangle",
                    "Shade one triangle",
                    "Label: Triangle area = (1/2) × Parallelogram area"
                ]
            },
            rectangle_comparison: {
                description: "Triangle inside rectangle showing half area",
                elements: [
                    "Draw rectangle",
                    "Draw triangle inside using diagonal",
                    "Show rectangle area = b × h",
                    "Show triangle area = (1/2) × b × h"
                ]
            },
            obtuse_triangle: {
                description: "Obtuse triangle with external height",
                elements: [
                    "Draw obtuse triangle",
                    "Extend base line",
                    "Draw height perpendicular to extended base",
                    "Note: height falls outside triangle"
                ]
            },
            right_triangle: {
                description: "Right triangle using legs as base and height",
                elements: [
                    "Draw right triangle",
                    "Label one leg as base",
                    "Label other leg as height",
                    "Show right angle",
                    "Note: height is one of the sides"
                ]
            },
            unit_squares: {
                description: "Triangle on grid showing square unit coverage",
                elements: [
                    "Draw triangle on grid",
                    "Count whole squares inside",
                    "Count partial squares",
                    "Compare count to formula result"
                ]
            }
        };
    }

    initializeUnitConversionDatabase() {
        this.unitConversions = {
            metric: {
                "mm to cm": 0.1,
                "cm to m": 0.01,
                "m to km": 0.001,
                "cm to mm": 10,
                "m to cm": 100,
                "km to m": 1000
            },
            imperial: {
                "in to ft": 1/12,
                "ft to yd": 1/3,
                "yd to mi": 1/1760,
                "ft to in": 12,
                "yd to ft": 3,
                "mi to yd": 1760
            },
            area: {
                "cm² to m²": 0.0001,
                "m² to cm²": 10000,
                "in² to ft²": 1/144,
                "ft² to in²": 144,
                "ft² to yd²": 1/9,
                "yd² to ft²": 9,
                "m² to hectare": 0.0001,
                "hectare to m²": 10000,
                "ft² to acre": 1/43560,
                "acre to ft²": 43560
            },
            commonPairs: {
                "1 m = 100 cm": true,
                "1 ft = 12 in": true,
                "1 yd = 3 ft": true,
                "1 m² = 10,000 cm²": true,
                "1 ft² = 144 in²": true,
                "1 hectare = 10,000 m²": true,
                "1 acre = 43,560 ft²": true
            }
        };
    }

    // MAIN SOLVER METHOD
    solveTriangleAreaProblem(config) {
        const { base, height, area, unit, baseUnit, heightUnit, scenario, parameters, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseTriangleAreaProblem(config);

            // Solve the problem
            this.currentSolution = this.solveTriangleAreaProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateTriangleAreaSteps(this.currentProblem, this.currentSolution);

            // Generate visualization data
            this.generateTriangleVisualization();

            // Generate workbook
            this.generateTriangleAreaWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                area: this.currentSolution?.area,
                base: this.currentSolution?.base,
                height: this.currentSolution?.height
            };

        } catch (error) {
            throw new Error(`Failed to solve triangle area problem: ${error.message}`);
        }
    }

    parseTriangleAreaProblem(config) {
        const { base, height, area, unit, baseUnit, heightUnit, scenario, parameters, problemType, context } = config;

        // Determine problem type if not specified
        let type = problemType;
        
        if (!type) {
            if (base !== undefined && height !== undefined) {
                if (baseUnit && heightUnit && baseUnit !== heightUnit) {
                    type = 'unit_conversion';
                } else {
                    type = 'base_height_given';
                }
            } else if (area !== undefined && height !== undefined) {
                type = 'find_base';
            } else if (area !== undefined && base !== undefined) {
                type = 'find_height';
            } else if (scenario) {
                type = 'word_problem';
            } else {
                type = 'base_height_given';
            }
        }

        return {
            type: type,
            base: base,
            height: height,
            area: area,
            unit: unit || baseUnit || heightUnit || 'units',
            baseUnit: baseUnit || unit,
            heightUnit: heightUnit || unit,
            scenario: scenario || '',
            parameters: parameters || {},
            context: context || {},
            parsedAt: new Date().toISOString()
        };
    }

    solveTriangleAreaProblem_Internal(problem) {
        const solver = this.triangleAreaTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for triangle area problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // TRIANGLE AREA SOLVERS

    solveBaseHeightArea(problem) {
        const { base, height, unit } = problem;

        if (base === undefined || height === undefined) {
            throw new Error('Base and height must be provided');
        }

        if (base <= 0 || height <= 0) {
            throw new Error('Base and height must be positive numbers');
        }

        const area = 0.5 * base * height;

        return {
            type: 'Triangle Area - Base and Height Given',
            base: base,
            height: height,
            area: area,
            unit: unit,
            areaUnit: `${unit}²`,
            formula: 'A = (1/2) × b × h',
            calculation: `A = (1/2) × ${base} × ${height}`,
            verification: this.verifyTriangleArea(area, base, height),
            category: 'base_height'
        };
    }

    findBase(problem) {
        const { area, height, unit } = problem;

        if (area === undefined || height === undefined) {
            throw new Error('Area and height must be provided');
        }

        if (area <= 0 || height <= 0) {
            throw new Error('Area and height must be positive numbers');
        }

        // A = (1/2) × b × h
        // b = 2A / h
        const base = (2 * area) / height;

        return {
            type: 'Find Base Given Area and Height',
            area: area,
            height: height,
            base: base,
            unit: unit,
            areaUnit: `${unit}²`,
            formula: 'b = 2A / h',
            calculation: `b = (2 × ${area}) / ${height}`,
            verification: this.verifyTriangleArea(area, base, height),
            category: 'reverse_calculation'
        };
    }

    findHeight(problem) {
        const { area, base, unit } = problem;

        if (area === undefined || base === undefined) {
            throw new Error('Area and base must be provided');
        }

        if (area <= 0 || base <= 0) {
            throw new Error('Area and base must be positive numbers');
        }

        // A = (1/2) × b × h
        // h = 2A / b
        const height = (2 * area) / base;

        return {
            type: 'Find Height Given Area and Base',
            area: area,
            base: base,
            height: height,
            unit: unit,
            areaUnit: `${unit}²`,
            formula: 'h = 2A / b',
            calculation: `h = (2 × ${area}) / ${base}`,
            verification: this.verifyTriangleArea(area, base, height),
            category: 'reverse_calculation'
        };
    }

    solveWithUnitConversion(problem) {
        const { base, height, baseUnit, heightUnit } = problem;

        if (base === undefined || height === undefined) {
            throw new Error('Base and height must be provided');
        }

        // Convert to common unit
        let convertedBase = base;
        let convertedHeight = height;
        let targetUnit = baseUnit;

        // Simple conversion logic - convert height to base unit
        if (baseUnit !== heightUnit) {
            const conversionKey = `${heightUnit} to ${baseUnit}`;
            const conversionFactor = this.unitConversions.metric[conversionKey] || 
                                   this.unitConversions.imperial[conversionKey];

            if (conversionFactor) {
                convertedHeight = height * conversionFactor;
            } else {
                // Try reverse conversion
                const reverseKey = `${baseUnit} to ${heightUnit}`;
                const reverseFactor = this.unitConversions.metric[reverseKey] || 
                                    this.unitConversions.imperial[reverseKey];
                
                if (reverseFactor) {
                    convertedBase = base * reverseFactor;
                    targetUnit = heightUnit;
                } else {
                    throw new Error(`Cannot convert between ${baseUnit} and ${heightUnit}`);
                }
            }
        }

        const area = 0.5 * convertedBase * convertedHeight;

        return {
            type: 'Triangle Area with Unit Conversion',
            originalBase: base,
            originalHeight: height,
            originalBaseUnit: baseUnit,
            originalHeightUnit: heightUnit,
            convertedBase: convertedBase,
            convertedHeight: convertedHeight,
            targetUnit: targetUnit,
            area: area,
            areaUnit: `${targetUnit}²`,
            formula: 'A = (1/2) × b × h',
            calculation: `A = (1/2) × ${convertedBase} × ${convertedHeight}`,
            conversionNote: `Converted ${height} ${heightUnit} to ${convertedHeight} ${targetUnit}`,
            category: 'unit_conversion'
        };
    }

    solveWordProblem(problem) {
        const { scenario, parameters } = problem;
        
        // Extract measurements from scenario or parameters
        const base = parameters.base || problem.base;
        const height = parameters.height || problem.height;
        const unit = parameters.unit || problem.unit || 'units';

        if (base === undefined || height === undefined) {
            return {
                type: 'Triangle Area Word Problem',
                scenario: scenario,
                needsMoreInfo: true,
                requiredInfo: ['base measurement', 'height measurement'],
                category: 'word_problem'
            };
        }

        const area = 0.5 * base * height;

        return {
            type: 'Triangle Area Word Problem',
            scenario: scenario,
            base: base,
            height: height,
            area: area,
            unit: unit,
            areaUnit: `${unit}²`,
            formula: 'A = (1/2) × b × h',
            calculation: `A = (1/2) × ${base} × ${height}`,
            interpretation: `The triangular area is ${area} ${unit}²`,
            category: 'word_problem'
        };
    }

    compareTriangleAreas(problem) {
        const { parameters } = problem;
        const triangleA = parameters.triangleA || {};
        const triangleB = parameters.triangleB || {};
        const unit = parameters.unit || problem.unit || 'units';

        const areaA = 0.5 * triangleA.base * triangleA.height;
        const areaB = 0.5 * triangleB.base * triangleB.height;

        const difference = Math.abs(areaA - areaB);
        const larger = areaA > areaB ? 'A' : (areaB > areaA ? 'B' : 'Equal');
        const percentDifference = areaA !== areaB ? 
            ((Math.abs(areaA - areaB) / Math.min(areaA, areaB)) * 100).toFixed(2) : 0;

        return {
            type: 'Compare Triangle Areas',
            triangleA: {
                base: triangleA.base,
                height: triangleA.height,
                area: areaA,
                unit: unit,
                areaUnit: `${unit}²`
            },
            triangleB: {
                base: triangleB.base,
                height: triangleB.height,
                area: areaB,
                unit: unit,
                areaUnit: `${unit}²`
            },
            comparison: {
                larger: larger,
                difference: difference,
                differenceUnit: `${unit}²`,
                percentDifference: percentDifference,
                ratio: areaB !== 0 ? (areaA / areaB).toFixed(2) : 'undefined'
            },
            category: 'comparison'
        };
    }

    // VERIFICATION METHODS

    verifyTriangleArea(area, base, height) {
        const calculatedArea = 0.5 * base * height;
        const difference = Math.abs(calculatedArea - area);
        const isValid = difference < 1e-9;

        return {
            givenArea: area,
            calculatedArea: calculatedArea,
            base: base,
            height: height,
            formula: `A = (1/2) × ${base} × ${height}`,
            result: calculatedArea,
            difference: difference,
            isValid: isValid,
            verification: isValid ? 'Correct ✓' : 'Error detected'
        };
    }

    // STEP GENERATION

    generateTriangleAreaSteps(problem, solution) {
        let baseSteps = this.generateBaseTriangleAreaSteps(problem, solution);

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

    generateBaseTriangleAreaSteps(problem, solution) {
        const { type } = problem;

        switch(type) {
            case 'base_height_given':
                return this.generateBaseHeightSteps(problem, solution);
            case 'find_base':
                return this.generateFindBaseSteps(problem, solution);
            case 'find_height':
                return this.generateFindHeightSteps(problem, solution);
            case 'unit_conversion':
                return this.generateUnitConversionSteps(problem, solution);
            case 'word_problem':
                return this.generateWordProblemSteps(problem, solution);
            case 'comparison':
                return this.generateComparisonSteps(problem, solution);
            default:
                return this.generateGenericTriangleSteps(problem, solution);
        }
    }

    generateBaseHeightSteps(problem, solution) {
        const steps = [];

        // Step 1: Identify measurements
        steps.push({
            stepNumber: 1,
            step: 'Identify given measurements',
            description: 'Write down the base and height measurements',
            expression: `Base = ${solution.base} ${solution.unit}, Height = ${solution.height} ${solution.unit}`,
            reasoning: 'We need both base and height to calculate triangle area',
            goalStatement: 'Our goal is to find the area using the formula A = (1/2) × b × h',
            visualization: 'Draw a triangle and label the base and perpendicular height'
        });

        // Step 2: Write formula
        steps.push({
            stepNumber: 2,
            step: 'Write the area formula',
            description: 'Recall the triangle area formula',
            expression: 'A = (1/2) × b × h',
            alternativeForm: 'A = (b × h) / 2',
            reasoning: 'Triangle area is half of base times height',
            conceptualNote: 'A triangle takes up exactly half the space of a rectangle with the same base and height',
            algebraicRule: 'Triangle Area Formula'
        });

        // Step 3: Substitute values
        steps.push({
            stepNumber: 3,
            step: 'Substitute the values',
            description: 'Replace b and h with the actual measurements',
            beforeExpression: 'A = (1/2) × b × h',
            afterExpression: `A = (1/2) × ${solution.base} × ${solution.height}`,
            reasoning: 'Plug in base and height to prepare for calculation',
            note: 'Make sure both measurements are in the same units'
        });

        // Step 4: Multiply base and height
        steps.push({
            stepNumber: 4,
            step: 'Multiply base by height',
            description: `Calculate ${solution.base} × ${solution.height}`,
            calculation: `${solution.base} × ${solution.height} = ${solution.base * solution.height}`,
            beforeExpression: `A = (1/2) × ${solution.base} × ${solution.height}`,
            afterExpression: `A = (1/2) × ${solution.base * solution.height}`,
            reasoning: 'First multiply to find the parallelogram area',
            visualNote: 'This gives the area of a parallelogram with the same base and height'
        });

        // Step 5: Divide by 2
        steps.push({
            stepNumber: 5,
            step: 'Divide by 2',
            description: 'Calculate half of the product',
            calculation: `${solution.base * solution.height} ÷ 2 = ${solution.area}`,
            beforeExpression: `A = (1/2) × ${solution.base * solution.height}`,
            afterExpression: `A = ${solution.area}`,
            reasoning: 'Dividing by 2 gives us the triangle area (half of the parallelogram)',
            note: 'This is the same as multiplying by 0.5'
        });

        // Step 6: Final answer with units
        steps.push({
            stepNumber: 6,
            step: 'State final answer with units',
            description: 'Include square units in the answer',
            expression: `A = ${solution.area} ${solution.areaUnit}`,
            finalAnswer: true,
            reasoning: 'Area is always measured in square units',
            unitNote: `Since base and height are in ${solution.unit}, area is in ${solution.areaUnit}`,
            verification: `Check: (1/2) × ${solution.base} × ${solution.height} = ${solution.area} ✓`
        });

        return steps;
    }

    generateFindBaseSteps(problem, solution) {
        const steps = [];

        // Step 1: Identify what's given
        steps.push({
            stepNumber: 1,
            step: 'Identify given information',
            description: 'Write down what we know',
            expression: `Area = ${solution.area} ${solution.areaUnit}, Height = ${solution.height} ${solution.unit}`,
            reasoning: 'We know area and height, need to find base',
            goalStatement: 'Solve for base using A = (1/2) × b × h'
        });

        // Step 2: Write formula
        steps.push({
            stepNumber: 2,
            step: 'Write the area formula',
            description: 'Start with the standard formula',
            expression: 'A = (1/2) × b × h',
            reasoning: 'This is our starting equation to rearrange'
        });

        // Step 3: Substitute known values
        steps.push({
            stepNumber: 3,
            step: 'Substitute known values',
            description: 'Replace A and h with their values',
            beforeExpression: 'A = (1/2) × b × h',
            afterExpression: `${solution.area} = (1/2) × b × ${solution.height}`,
            reasoning: 'Now we have an equation with one unknown (b)'
        });

        // Step 4: Multiply both sides by 2
        steps.push({
            stepNumber: 4,
            step: 'Multiply both sides by 2',
            description: 'Eliminate the fraction',
            beforeExpression: `${solution.area} = (1/2) × b × ${solution.height}`,
            operation: '× 2',
            afterExpression: `${2 * solution.area} = b × ${solution.height}`,
            reasoning: 'This removes the 1/2, making it easier to solve for b',
            algebraicRule: 'Multiplication Property of Equality'
        });

        // Step 5: Divide both sides by height
        steps.push({
            stepNumber: 5,
            step: 'Divide both sides by height',
            description: `Divide by ${solution.height} to isolate b`,
            beforeExpression: `${2 * solution.area} = b × ${solution.height}`,
            operation: `÷ ${solution.height}`,
            afterExpression: `b = ${2 * solution.area} / ${solution.height}`,
            reasoning: 'Division isolates the base on one side',
            algebraicRule: 'Division Property of Equality'
        });

        // Step 6: Calculate
        steps.push({
            stepNumber: 6,
            step: 'Calculate the base',
            description: 'Perform the division',
            calculation: `${2 * solution.area} ÷ ${solution.height} = ${solution.base}`,
            expression: `b = ${solution.base} ${solution.unit}`,
            finalAnswer: true,
            reasoning: 'This is the base measurement',
            verification: `Check: (1/2) × ${solution.base} × ${solution.height} = ${solution.area} ✓`
        });

        return steps;
    }

    generateFindHeightSteps(problem, solution) {
        const steps = [];

        // Step 1: Identify given information
        steps.push({
            stepNumber: 1,
            step: 'Identify given information',
            description: 'Write down what we know',
            expression: `Area = ${solution.area} ${solution.areaUnit}, Base = ${solution.base} ${solution.unit}`,
            reasoning: 'We know area and base, need to find height',
            goalStatement: 'Solve for height using A = (1/2) × b × h'
        });

        // Step 2: Write formula
        steps.push({
            stepNumber: 2,
            step: 'Write the area formula',
            description: 'Start with the standard formula',
            expression: 'A = (1/2) × b × h',
            reasoning: 'This is our starting equation to rearrange'
        });

        // Step 3: Substitute known values
        steps.push({
            stepNumber: 3,
            step: 'Substitute known values',
            description: 'Replace A and b with their values',
            beforeExpression: 'A = (1/2) × b × h',
            afterExpression: `${solution.area} = (1/2) × ${solution.base} × h`,
            reasoning: 'Now we have an equation with one unknown (h)'
        });

        // Step 4: Multiply both sides by 2
        steps.push({
            stepNumber: 4,
            step: 'Multiply both sides by 2',
            description: 'Eliminate the fraction',
            beforeExpression: `${solution.area} = (1/2) × ${solution.base} × h`,
            operation: '× 2',
            afterExpression: `${2 * solution.area} = ${solution.base} × h`,
            reasoning: 'This removes the 1/2',
            algebraicRule: 'Multiplication Property of Equality'
        });

        // Step 5: Divide both sides by base
        steps.push({
            stepNumber: 5,
            step: 'Divide both sides by base',
            description: `Divide by ${solution.base} to isolate h`,
            beforeExpression: `${2 * solution.area} = ${solution.base} × h`,
            operation: `÷ ${solution.base}`,
            afterExpression: `h = ${2 * solution.area} / ${solution.base}`,
            reasoning: 'Division isolates the height on one side',
            algebraicRule: 'Division Property of Equality'
        });

        // Step 6: Calculate
        steps.push({
            stepNumber: 6,
            step: 'Calculate the height',
            description: 'Perform the division',
            calculation: `${2 * solution.area} ÷ ${solution.base} = ${solution.height}`,
            expression: `h = ${solution.height} ${solution.unit}`,
            finalAnswer: true,
            reasoning: 'This is the perpendicular height measurement',
            verification: `Check: (1/2) × ${solution.base} × ${solution.height} = ${solution.area} ✓`
        });

        return steps;
    }

    generateUnitConversionSteps(problem, solution) {
        const steps = [];

        // Step 1: Identify measurements and units
        steps.push({
            stepNumber: 1,
            step: 'Identify measurements and units',
            description: 'Note the different units',
            expression: `Base = ${solution.originalBase} ${solution.originalBaseUnit}, Height = ${solution.originalHeight} ${solution.originalHeightUnit}`,
            reasoning: 'Units are different, so we need to convert before calculating',
            warningNote: 'Cannot calculate area with different units!'
        });

        // Step 2: Choose target unit
        steps.push({
            stepNumber: 2,
            step: 'Choose target unit',
            description: 'Decide which unit to convert to',
            expression: `Target unit: ${solution.targetUnit}`,
            reasoning: 'We\'ll convert everything to this unit for consistency'
        });

        // Step 3: Convert units
        steps.push({
            stepNumber: 3,
            step: 'Convert to common unit',
            description: solution.conversionNote,
            beforeExpression: `Height = ${solution.originalHeight} ${solution.originalHeightUnit}`,
            afterExpression: `Height = ${solution.convertedHeight} ${solution.targetUnit}`,
            reasoning: 'Now both measurements are in the same unit',
            conversionDetail: solution.conversionNote
        });

        // Step 4: Write formula
        steps.push({
            stepNumber: 4,
            step: 'Write area formula',
            description: 'Use standard triangle area formula',
            expression: 'A = (1/2) × b × h',
            reasoning: 'Now that units match, we can proceed with calculation'
        });

        // Step 5: Substitute converted values
        steps.push({
            stepNumber: 5,
            step: 'Substitute converted values',
            description: 'Use the converted measurements',
            beforeExpression: 'A = (1/2) × b × h',
            afterExpression: `A = (1/2) × ${solution.convertedBase} × ${solution.convertedHeight}`,
            reasoning: 'Both values now in same unit'
        });

        // Step 6: Calculate
        steps.push({
            stepNumber: 6,
            step: 'Calculate area',
            description: 'Perform the multiplication and division',
            calculation: `A = (1/2) × ${solution.convertedBase * solution.convertedHeight} = ${solution.area}`,
            expression: `A = ${solution.area} ${solution.areaUnit}`,
            finalAnswer: true,
            reasoning: 'Area in square units of the target unit',
            note: `Original: ${solution.originalBase} ${solution.originalBaseUnit} × ${solution.originalHeight} ${solution.originalHeightUnit} = ${solution.area} ${solution.areaUnit}`
        });

        return steps;
    }

    generateWordProblemSteps(problem, solution) {
        const steps = [];

        // Step 1: Read and understand
        steps.push({
            stepNumber: 1,
            step: 'Read and understand the problem',
            description: 'Identify what information is given',
            expression: solution.scenario,
            reasoning: 'Extract the measurements from the word problem',
            readingStrategy: 'Look for words like "base", "width", "height", "tall", measurements in units'
        });

        // Step 2: Identify measurements
        steps.push({
            stepNumber: 2,
            step: 'Identify base and height',
            description: 'Extract the numerical values',
            expression: `Base = ${solution.base} ${solution.unit}, Height = ${solution.height} ${solution.unit}`,
            reasoning: 'These are the two measurements we need for the formula',
            organizationTip: 'Draw a diagram and label these measurements'
        });

        // Step 3: Draw diagram (if appropriate)
        steps.push({
            stepNumber: 3,
            step: 'Visualize the problem',
            description: 'Sketch a triangle with the measurements',
            reasoning: 'A diagram helps ensure we understand the problem correctly',
            diagramNote: 'Draw triangle, mark base and perpendicular height',
            checkPoint: 'Does the diagram match the word problem description?'
        });

        // Step 4: Write formula
        steps.push({
            stepNumber: 4,
            step: 'Write the area formula',
            description: 'Recall the triangle area formula',
            expression: 'A = (1/2) × b × h',
            reasoning: 'This formula applies to all triangles'
        });

        // Step 5: Substitute and calculate
        steps.push({
            stepNumber: 5,
            step: 'Substitute values and calculate',
            description: 'Replace b and h with the values from the problem',
            beforeExpression: 'A = (1/2) × b × h',
            afterExpression: `A = (1/2) × ${solution.base} × ${solution.height}`,
            calculation: `A = ${solution.area}`,
            reasoning: 'Perform the multiplication and division'
        });

        // Step 6: Answer in context
        steps.push({
            stepNumber: 6,
            step: 'State answer in context',
            description: 'Write answer with units and relate to original problem',
            expression: `A = ${solution.area} ${solution.areaUnit}`,
            finalAnswer: true,
            interpretation: solution.interpretation,
            reasoning: 'Always include units and relate back to the real-world scenario',
            contextNote: 'This answers the original question from the word problem'
        });

        return steps;
    }

    generateComparisonSteps(problem, solution) {
        const steps = [];

        // Step 1: Identify triangles
        steps.push({
            stepNumber: 1,
            step: 'Identify the triangles to compare',
            description: 'List the measurements for each triangle',
            expression: `Triangle A: base = ${solution.triangleA.base} ${solution.triangleA.unit}, height = ${solution.triangleA.height} ${solution.triangleA.unit}
Triangle B: base = ${solution.triangleB.base} ${solution.triangleB.unit}, height = ${solution.triangleB.height} ${solution.triangleB.unit}`,
            reasoning: 'We need to calculate both areas to compare them'
        });

        // Step 2: Calculate Triangle A area
        steps.push({
            stepNumber: 2,
            step: 'Calculate Triangle A area',
            description: 'Apply formula to Triangle A',
            expression: `A_A = (1/2) × ${solution.triangleA.base} × ${solution.triangleA.height}`,
            calculation: `A_A = ${solution.triangleA.area} ${solution.triangleA.areaUnit}`,
            reasoning: 'First triangle area calculated'
        });

        // Step 3: Calculate Triangle B area
        steps.push({
            stepNumber: 3,
            step: 'Calculate Triangle B area',
            description: 'Apply formula to Triangle B',
            expression: `A_B = (1/2) × ${solution.triangleB.base} × ${solution.triangleB.height}`,
            calculation: `A_B = ${solution.triangleB.area} ${solution.triangleB.areaUnit}`,
            reasoning: 'Second triangle area calculated'
        });

        // Step 4: Compare areas
        steps.push({
            stepNumber: 4,
            step: 'Compare the areas',
            description: 'Determine which is larger',
            expression: `Triangle A: ${solution.triangleA.area} ${solution.triangleA.areaUnit}
Triangle B: ${solution.triangleB.area} ${solution.triangleB.areaUnit}`,
            comparison: solution.comparison.larger === 'Equal' ? 
                'Both triangles have equal area' : 
                `Triangle ${solution.comparison.larger} is larger`,
            reasoning: 'Direct comparison of calculated areas'
        });

        // Step 5: Find difference
        steps.push({
            stepNumber: 5,
            step: 'Calculate the difference',
            description: 'Find how much larger one is than the other',
            calculation: `Difference = |${solution.triangleA.area} - ${solution.triangleB.area}| = ${solution.comparison.difference} ${solution.comparison.differenceUnit}`,
            expression: solution.comparison.larger === 'Equal' ? 
                'Difference = 0' : 
                `Triangle ${solution.comparison.larger} is ${solution.comparison.difference} ${solution.comparison.differenceUnit} larger`,
            reasoning: 'Absolute difference shows magnitude of size difference'
        });

        // Step 6: Additional analysis
        steps.push({
            stepNumber: 6,
            step: 'Additional analysis',
            description: 'Percent difference and ratio',
            percentDifference: `${solution.comparison.percentDifference}% difference`,
            ratio: `Ratio of A to B: ${solution.comparison.ratio}:1`,
            finalAnswer: true,
            reasoning: 'These metrics provide additional perspective on the comparison'
        });

        return steps;
    }

    generateGenericTriangleSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Triangle area calculation',
            description: 'Calculate the area of the triangle',
            expression: solution.formula || 'A = (1/2) × b × h',
            reasoning: 'Apply triangle area formula',
            solution: solution
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
                algebraic: this.getAlgebraicExplanation(step)
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
            'Identify given measurements': "First, we need to know two things: how wide the triangle is at the bottom (base) and how tall it is (height).",
            'Write the area formula': "There's a magic formula for triangles: take the base times the height, then cut that in half!",
            'Substitute the values': "Now we put our actual numbers into the formula instead of just saying 'base' and 'height'.",
            'Multiply base by height': "We multiply the bottom width by the height - this tells us how big a rectangle with those sides would be.",
            'Divide by 2': "Since a triangle is exactly half of that rectangle, we cut our answer in half by dividing by 2!",
            'State final answer with units': "We write our answer and don't forget to say 'square' units, because we're measuring flat space!",
            'Multiply both sides by 2': "To get rid of the 'divide by 2' part, we do the opposite - multiply by 2 on both sides!",
            'Divide both sides by height': "To get the base by itself, we divide both sides by the height.",
            'Divide both sides by base': "To get the height by itself, we divide both sides by the base.",
            'Convert to common unit': "We need both measurements in the same size unit - like both in centimeters or both in meters - before we can calculate!"
        };

        return ELI5Explanations[step.step] || "We're taking the next step to find our answer!";
    }

    findRelevantAnalogy(step, problem) {
        // Find appropriate analogy based on step type
        if (step.step.includes('formula')) {
            return this.analogies.half_parallelogram.ELI5;
        } else if (step.step.includes('Divide by 2')) {
            return this.analogies.pizza_slice.ELI5;
        } else if (step.step.includes('Multiply base by height')) {
            return this.analogies.half_the_box.ELI5;
        }
        
        return "Each step brings us closer to finding how much space the triangle takes up!";
    }

    convertToSimpleLanguage(description) {
        if (!description) return '';

        const simplifications = {
            'perpendicular': 'straight up and down (makes a square corner)',
            'formula': 'math recipe',
            'substitute': 'put in the real numbers',
            'calculate': 'figure out the answer',
            'area': 'how much space it covers',
            'base': 'bottom side',
            'height': 'how tall it is',
            'multiply': 'times',
            'divide': 'split into equal parts',
            'measurement': 'how long or tall',
            'square units': 'boxes that cover the space',
            'verify': 'check if it\'s right',
            'rearrange': 'move things around in the formula'
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
            'Identify given measurements': 'Draw a triangle and mark which side is the base and where the height goes',
            'Write the area formula': 'Write A = (1/2) × b × h with arrows showing what each letter means',
            'Substitute the values': 'Show the formula with the actual numbers replacing b and h',
            'Multiply base by height': 'Draw a rectangle with the same base and height as the triangle',
            'Divide by 2': 'Show the rectangle cut in half diagonally to make the triangle',
            'State final answer with units': 'Draw the triangle again and write the area inside it',
            'Convert to common unit': 'Show a ruler or measuring stick with both units marked'
        };

        return visualizations[step.step] || 'Draw a picture to help understand this step';
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
        const category = this.triangleAreaTypes[problemType]?.category || 'base_height';
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

    // HELPER METHODS

    getConceptualExplanation(step, problem) {
        const conceptualExplanations = {
            'Identify given measurements': 'The base and height are the two perpendicular dimensions that define a triangle\'s size.',
            'Write the area formula': 'The formula A = (1/2) × b × h comes from the fact that a triangle is exactly half of a parallelogram with the same base and height.',
            'Substitute the values': 'Substitution transforms an abstract formula into a concrete calculation with specific numbers.',
            'Multiply base by height': 'Base times height gives the area of a rectangle; the triangle occupies exactly half of this rectangle.',
            'Divide by 2': 'Dividing by 2 accounts for the triangle being half of the corresponding rectangle.',
            'State final answer with units': 'Area represents two-dimensional space, so units must be squared (e.g., cm²).',
            'Multiply both sides by 2': 'This operation eliminates the division by 2 in the formula, simplifying our equation.',
            'Divide both sides by height': 'Division isolates the base by removing the multiplication by height.',
            'Divide both sides by base': 'Division isolates the height by removing the multiplication by base.',
            'Convert to common unit': 'Measurements must be in the same units because area represents multiplication of like quantities.'
        };

        return conceptualExplanations[step.step] || 'This step progresses toward finding the triangle\'s area.';
    }

    getProceduralExplanation(step) {
        if (step.calculation) {
            return `1. Identify the operation needed
2. Perform the calculation: ${step.calculation}
3. Verify the result
4. Proceed to next step`;
        }
        return 'Follow the standard procedure for this type of calculation.';
    }

    getVisualExplanation(step, problem) {
        const visualExplanations = {
            'Identify given measurements': 'Picture the triangle with the base as a horizontal line and height as a vertical line perpendicular to it.',
            'Write the area formula': 'Visualize a rectangle being cut diagonally - one half is the triangle.',
            'Multiply base by height': 'Imagine filling a rectangle with small squares; count how many squares fit.',
            'Divide by 2': 'Picture cutting the rectangle in half diagonally - only one triangle remains.',
            'Convert to common unit': 'Visualize a ruler showing both measurement units side by side.'
        };

        return visualExplanations[step.step] || 'Create a mental picture of the triangle and measurements.';
    }

    getAlgebraicExplanation(step) {
        const algebraicRules = {
            'Write the area formula': 'Triangle Area Formula: A = (1/2)bh or A = ½bh',
            'Substitute the values': 'Substitution: Replace variables with known values',
            'Multiply both sides by 2': 'Multiplication Property of Equality: If a = b, then 2a = 2b',
            'Divide both sides by height': 'Division Property of Equality: If a = b and c ≠ 0, then a/c = b/c',
            'Divide both sides by base': 'Division Property of Equality: If a = b and c ≠ 0, then a/c = b/c'
        };

        return algebraicRules[step.step] || 'Apply standard algebraic principles.';
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
                'perpendicular': 'straight up',
                'formula': 'rule',
                'substitute': 'put in',
                'calculate': 'figure out',
                'measurement': 'size',
                'multiply': 'times',
                'divide': 'split'
            },
            intermediate: {
                'perpendicular': 'perpendicular',
                'formula': 'formula',
                'substitute': 'substitute',
                'calculate': 'calculate'
            },
            ELI5: {
                'perpendicular': 'straight up and down like a flagpole',
                'formula': 'recipe for math',
                'substitute': 'swap in the real numbers',
                'calculate': 'do the math to find the answer',
                'area': 'how much space it takes up',
                'base': 'the bottom flat part',
                'height': 'how tall it stands',
                'multiply': 'put together (like 3 groups of 4)',
                'divide': 'share equally or cut in half'
            },
            detailed: {
                'perpendicular': 'perpendicular (forming a 90° angle)',
                'formula': 'mathematical formula',
                'substitute': 'substitute (replace variables with values)',
                'calculate': 'calculate (compute the result)'
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
            why: `This is necessary because: ${this.explainStepNecessity(currentStep, nextStep)}`,
            howItHelps: `This will help by: ${this.explainStepBenefit(nextStep)}`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue the calculation`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
    }

    explainStepNecessity(currentStep, nextStep) {
        return `we need to continue with the calculation process`;
    }

    explainStepBenefit(nextStep) {
        return `progressing toward the final answer`;
    }

    generatePreventionTips(step, problemType) {
        const tips = {
            'Identify given measurements': [
                'Verify height is perpendicular to base',
                'Check that both measurements are in same units',
                'Make sure you have both base AND height'
            ],
            'Multiply base by height': [
                'Double-check your multiplication',
                'Remember this is not the final answer yet',
                'Keep track of decimal places'
            ],
            'Divide by 2': [
                'Don\'t forget this crucial step!',
                'Can also multiply by 0.5',
                'This is what makes it a triangle, not a rectangle'
            ],
            'State final answer with units': [
                'Use SQUARE units (cm², m², ft²)',
                'Not linear units (cm, m, ft)',
                'Check: if measurements in cm, area is in cm²'
            ]
        };

        return tips[step.step] || ['Work carefully and check each calculation'];
    }

    generateCheckPoints(step) {
        return [
            'Did I perform the correct operation?',
            'Are my calculations accurate?',
            'Do I have the right units?',
            'Does my answer make sense?'
        ];
    }

    identifyWarningFlags(step, problemType) {
        const warnings = {
            base_height: step.step === 'State final answer with units' ?
                ['Forgetting square units', 'Using linear units instead'] : [],
            unit_conversion: step.step === 'Convert to common unit' ?
                ['Using wrong conversion factor', 'Converting in wrong direction'] : []
        };

        const category = this.triangleAreaTypes[problemType]?.category || 'base_height';
        return warnings[category] || [];
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'Identify given measurements': 'Do I have both the base and the perpendicular height?',
            'Write the area formula': 'Is my formula correct: A = (1/2) × b × h?',
            'Substitute the values': 'Did I substitute the correct values for b and h?',
            'Multiply base by height': 'Did I multiply correctly?',
            'Divide by 2': 'Did I remember to divide by 2 (or multiply by 0.5)?',
            'State final answer with units': 'Did I include square units in my answer?',
            'Convert to common unit': 'Are both measurements now in the same unit?'
        };

        return questions[step.step] || 'Does this step make sense?';
    }

    describeExpectedResult(step) {
        const expectations = {
            'Identify given measurements': 'Two measurements: base and perpendicular height',
            'Write the area formula': 'The formula A = (1/2) × b × h',
            'Substitute the values': 'Formula with actual numbers replacing variables',
            'Multiply base by height': 'A single number (the rectangle area)',
            'Divide by 2': 'Half of the previous number (the triangle area)',
            'State final answer with units': 'A number followed by square units (e.g., 20 cm²)'
        };

        return expectations[step.step] || 'Progress toward the final answer';
    }

    generateTroubleshootingTips(step) {
        return [
            'If unsure, review the previous step',
            'Check your arithmetic carefully',
            'Verify you\'re using the correct formula',
            'Draw a diagram if it helps visualize',
            'Ask: does my answer make sense for the size of the triangle?'
        ];
    }

    generateGuidingQuestions(step, problem) {
        const questions = {
            'Identify given measurements': [
                'What is the base measurement?',
                'What is the height measurement?',
                'Are they in the same units?',
                'Is the height perpendicular to the base?'
            ],
            'Write the area formula': [
                'What is the formula for triangle area?',
                'Why do we divide by 2?',
                'What do b and h represent?'
            ],
            'Substitute the values': [
                'Which number is the base?',
                'Which number is the height?',
                'Where do these numbers go in the formula?'
            ],
            'Multiply base by height': [
                'What is base times height?',
                'Am I multiplying correctly?',
                'What does this product represent?'
            ],
            'Divide by 2': [
                'Why do we divide by 2?',
                'What is half of my previous result?',
                'Did I remember this critical step?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'How does this help find the area?'];
    }

    generateProgressiveHints(step, problem) {
        const category = this.triangleAreaTypes[problem.type]?.category || 'base_height';
        const hintSet = this.hints[category] || this.hints.base_height_given;

        return {
            level1: hintSet.level1 || 'Think about what information you have.',
            level2: hintSet.level2 || 'Consider the triangle area formula.',
            level3: hintSet.level3 || 'Apply the formula step by step.',
            level4: hintSet.level4 || 'Perform the calculation.',
            level5: hintSet.level5 || 'Check your final answer.'
        };
    }

    breakIntoSubSteps(step) {
        if (step.step === 'Multiply base by height') {
            return [
                'Identify the base value',
                'Identify the height value',
                'Set up the multiplication',
                'Perform the calculation',
                'Record the result'
            ];
        } else if (step.step === 'Divide by 2') {
            return [
                'Take the result from previous step',
                'Divide it by 2 (or multiply by 0.5)',
                'Calculate the answer',
                'This is your triangle area'
            ];
        }

        return ['Understand the goal', 'Apply the technique', 'Verify the result'];
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try the same type of calculation with different numbers',
            practiceHint: 'Start with whole numbers to build confidence',
            extension: 'Once comfortable, try problems with decimals or unit conversions'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What information do I have in this step?',
            goal: 'What am I trying to find or calculate?',
            strategy: 'What mathematical operation should I use?',
            execute: 'How do I perform this operation correctly?',
            verify: 'Does my result make sense?'
        };
    }

    identifyDecisionPoints(step) {
        return [
            'Which measurement is the base and which is the height?',
            'Should I multiply first or divide first?',
            'Do I need to convert units?',
            'What precision should I use for my answer?'
        ];
    }

    suggestAlternativeMethods(step, problem) {
        const alternatives = {
            'Multiply base by height': [
                'Could use a calculator',
                'Could use repeated addition for whole numbers',
                'Could estimate first to check reasonableness'
            ],
            'Divide by 2': [
                'Could multiply by 0.5 instead',
                'Could find half mentally for some numbers',
                'Could use fraction form: (b × h)/2'
            ]
        };

        return alternatives[step.step] || ['The chosen method is appropriate'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by continuing the calculation`,
            progression: 'We are systematically working through the formula',
            relationship: 'Each step brings us closer to the final area'
        };
    }

    identifyPrerequisites(step, problemType) {
        const category = this.triangleAreaTypes[problemType]?.category || 'base_height';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Basic arithmetic', 'Understanding of area'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Identify given measurements': ['base', 'height', 'perpendicular', 'measurement', 'units'],
            'Write the area formula': ['area', 'formula', 'variable', 'coefficient'],
            'Substitute the values': ['substitute', 'replace', 'value'],
            'Multiply base by height': ['multiply', 'product', 'factor'],
            'Divide by 2': ['divide', 'half', 'quotient'],
            'State final answer with units': ['area', 'square units', 'answer']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPrompts(step) {
        return {
            before: 'Before I start, what information do I need?',
            during: 'As I work, am I being careful with my calculations?',
            after: 'After finishing, does my answer make sense?'
        };
    }

    findRealWorldConnection(step, problem) {
        const connections = {
            'base_height': 'Like measuring a triangular garden bed to know how much soil to buy',
            'unit_conversion': 'Like when a blueprint is in feet but you need to order materials in inches',
            'word_problem': 'Real-world situations like roofing, sailing, or land surveying'
        };

        const category = this.triangleAreaTypes[problem.type]?.category;
        return connections[category] || 'Triangle area is used in construction, design, and everyday measurements';
    }

    // VISUALIZATION GENERATION

    generateTriangleVisualization() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;

        this.graphData = {
            type: 'triangle_diagram',
            base: this.currentSolution.base || this.currentSolution.convertedBase,
            height: this.currentSolution.height || this.currentSolution.convertedHeight,
            area: this.currentSolution.area,
            unit: this.currentSolution.unit,
            areaUnit: this.currentSolution.areaUnit,
            visualization: this.visualizations.basic_triangle,
            description: `Triangle with base ${this.currentSolution.base} ${this.currentSolution.unit} and height ${this.currentSolution.height} ${this.currentSolution.unit}`
        };
    }

    // WORKBOOK GENERATION

    generateTriangleAreaWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createConceptSection(),
            this.createEnhancedStepsSection(),
            this.createSolutionSection(),
            this.createVisualizationSection(),
            this.createVerificationSection(),
            this.createRealWorldApplicationSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection(),
            this.createPracticeProblemsSection(),
            this.createCommonMistakesSection(),
            this.createExtensionSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Triangle Area Mathematical Workbook',
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
            ['Problem Type', this.triangleAreaTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.triangleAreaTypes[this.currentProblem.type]?.category || 'triangle_area']
        ];

        if (this.currentProblem.scenario) {
            problemData.push(['Scenario', this.currentProblem.scenario]);
        }

        problemData.push(['', '']);
        problemData.push(['Given Information', '']);

        if (this.currentProblem.base !== undefined) {
            problemData.push(['Base', `${this.currentProblem.base} ${this.currentProblem.baseUnit || this.currentProblem.unit}`]);
        }
        if (this.currentProblem.height !== undefined) {
            problemData.push(['Height', `${this.currentProblem.height} ${this.currentProblem.heightUnit || this.currentProblem.unit}`]);
        }
        if (this.currentProblem.area !== undefined) {
            problemData.push(['Area', `${this.currentProblem.area} ${this.currentProblem.unit}²`]);
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSection() {
        if (!this.prerequisiteChecks) return null;

        const category = this.triangleAreaTypes[this.currentProblem.type]?.category;
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

    createConceptSection() {
        const lesson = this.lessons.triangle_area_base_height;

        const conceptData = [
            ['Key Concepts', ''],
            ...lesson.concepts.map(c => ['•', c]),
            ['', ''],
            ['Theory', lesson.theory],
            ['', ''],
            ['Formulas', ''],
            ...Object.entries(lesson.keyFormulas).map(([name, formula]) => [name, formula]),
            ['', ''],
            ['Important Notes', ''],
            ...lesson.importantNotes.map(note => ['⚠', note])
        ];

        return {
            title: 'Concepts and Theory',
            type: 'concepts',
            data: conceptData
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
                stepsData.push(['Connection', step.explanation.currentState]);
                stepsData.push(['Next Goal', step.explanation.nextGoal]);
                stepsData.push(['', '']);
                return;
            }

            stepsData.push([`Step ${step.stepNumber}`, step.description]);

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

            if (step.calculation) {
                stepsData.push(['Calculation', step.calculation]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.ELI5 && this.explanationLevel === 'ELI5') {
                stepsData.push(['ELI5 Explanation', step.ELI5.explanation]);
                if (step.ELI5.analogy) {
                    stepsData.push(['Analogy', step.ELI5.analogy]);
                }
                if (step.ELI5.visualization) {
                    stepsData.push(['Visualize', step.ELI5.visualization]);
                }
            }

            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
                stepsData.push(['Visual', step.explanations.visual]);
            }

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

            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                const questions = step.scaffolding.guidingQuestions;
                if (questions && questions.length > 0) {
                    stepsData.push(['Guiding Questions', questions.join(' | ')]);
                }
            }

            if (step.thinkingPrompts && this.includeThinkingPrompts) {
                stepsData.push(['Think Before', step.thinkingPrompts.before]);
                stepsData.push(['Think After', step.thinkingPrompts.after]);
            }

            if (step.selfCheck && this.includeSelfCheckQuestions) {
                stepsData.push(['Self-Check', step.selfCheck]);
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

        if (this.currentSolution.area !== undefined) {
            solutionData.push(['Area', `${this.currentSolution.area} ${this.currentSolution.areaUnit}`]);
        }
        if (this.currentSolution.base !== undefined) {
            solutionData.push(['Base', `${this.currentSolution.base} ${this.currentSolution.unit}`]);
        }
        if (this.currentSolution.height !== undefined) {
            solutionData.push(['Height', `${this.currentSolution.height} ${this.currentSolution.unit}`]);
        }

        solutionData.push(['', '']);
        solutionData.push(['Formula Used', this.currentSolution.formula]);
        
        if (this.currentSolution.calculation) {
            solutionData.push(['Calculation', this.currentSolution.calculation]);
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createVisualizationSection() {
        if (!this.graphData) return null;

        const vizData = [
            ['Diagram Type', 'Triangle with base and height marked'],
            ['Base', `${this.graphData.base} ${this.graphData.unit}`],
            ['Height', `${this.graphData.height} ${this.graphData.unit}`],
            ['Area', `${this.graphData.area} ${this.graphData.areaUnit}`],
            ['', ''],
            ['Visualization Elements', ''],
            ...this.graphData.visualization.elements.map(e => ['•', e])
        ];

        return {
            title: 'Visualization',
            type: 'visualization',
            data: vizData
        };
    }

    createVerificationSection() {
        if (!this.currentSolution || !this.currentSolution.verification) return null;

        const verification = this.currentSolution.verification;

        const verificationData = [
            ['Verification Method', 'Substitute values back into formula'],
            ['', ''],
            ['Formula', verification.formula],
            ['Calculated Area', `${verification.result} ${this.currentSolution.areaUnit}`],
            ['Given/Expected Area', `${verification.givenArea} ${this.currentSolution.areaUnit}`],
            ['Difference', verification.difference < 1e-9 ? 'Negligible (< 0.000000001)' : verification.difference],
            ['Verification Status', verification.verification]
        ];

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const applications = Object.values(this.realWorldProblems).slice(0, 4);

        const appData = [
            ['Real-World Applications of Triangle Area', ''],
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
                ['Visual Aids', notes.visualAids.join('; ')],
                ['Extension Ideas', notes.extensions.join('; ')],
                ['Assessment Tips', notes.assessment.join('; ')]
            ]
        };
    }

    createAlternativeMethodsSection() {
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

    createPracticeProblemsSection() {
        const problems = this.questionBank.byDifficulty;

        const practiceData = [
            ['Practice Problems', ''],
            ['', ''],
            ['Easy Problems', '']
        ];

        problems.easy.slice(0, 3).forEach((p, i) => {
            const problemText = p.base ? `Triangle: base ${p.base} ${p.unit}, height ${p.height} ${p.unit}. Find area.` : p;
            practiceData.push([`${i + 1}`, problemText]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Medium Problems', '']);

        problems.medium.slice(0, 3).forEach((p, i) => {
            const problemText = p.base !== undefined ? 
                `Triangle: base ${p.base} ${p.unit}, height ${p.height} ${p.unit}. Find area.` :
                p.area !== undefined && p.height !== undefined ?
                `Area ${p.area} ${p.unit}², height ${p.height} ${p.unit}. Find base.` :
                `Area ${p.area} ${p.unit}², base ${p.base} ${p.unit}. Find height.`;
            practiceData.push([`${i + 1}`, problemText]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Hard Problems', '']);

        problems.hard.slice(0, 2).forEach((p, i) => {
            const problemText = p.baseUnit && p.heightUnit ? 
                `Triangle: base ${p.base} ${p.baseUnit}, height ${p.height} ${p.heightUnit}. Find area.` :
                p.toString();
            practiceData.push([`${i + 1}`, problemText]);
        });

        return {
            title: 'Practice Problems',
            type: 'practice',
            data: practiceData
        };
    }

    createCommonMistakesSection() {
        if (!this.includeCommonMistakes) return null;

        const mistakesData = [
            ['Common Mistakes and How to Avoid Them', ''],
            ['', '']
        ];

        Object.entries(this.misconceptions).forEach(([key, misconception]) => {
            mistakesData.push(['Misconception', misconception.misconception]);
            mistakesData.push(['Reality', misconception.reality]);
            mistakesData.push(['Example', misconception.correctiveExample]);
            mistakesData.push(['How to Correct', misconception.correction]);
            mistakesData.push(['', '']);
        });

        return {
            title: 'Common Mistakes',
            type: 'mistakes',
            data: mistakesData
        };
    }

    createExtensionSection() {
        const extensionData = [
            ['Extension Topics', ''],
            ['', ''],
            ['Advanced Triangle Area Methods', ''],
            ['• Heron\'s Formula', 'Find area using three side lengths: A = √[s(s-a)(s-b)(s-c)]'],
            ['• Trigonometric Method', 'Using sine: A = (1/2)ab·sin(C)'],
            ['• Coordinate Geometry', 'Using vertex coordinates'],
            ['', ''],
            ['Related Topics', ''],
            ['• Pythagorean Theorem', 'For right triangles'],
            ['• Similar Triangles', 'Area ratios'],
            ['• Triangle Inequality', 'Relationship between sides'],
            ['• Law of Sines and Cosines', 'For non-right triangles']
        ];

        return {
            title: 'Extension Topics',
            type: 'extension',
            data: extensionData
        };
    }

    generateTrianglePedagogicalNotes(problemType) {
        return {
            objectives: [
                'Calculate triangle area using base and height',
                'Understand why formula is (1/2) × b × h',
                'Apply correct square units to area answers',
                'Verify perpendicularity of height to base'
            ],
            keyConcepts: [
                'Triangle is half of a parallelogram',
                'Height must be perpendicular to base',
                'Area is measured in square units',
                'Any side can serve as the base'
            ],
            prerequisites: [
                'Multiplication and division',
                'Understanding of perpendicular lines',
                'Concept of area as space coverage',
                'Unit awareness and conversion'
            ],
            commonDifficulties: [
                'Forgetting to divide by 2',
                'Using slant height instead of perpendicular height',
                'Forgetting square units',
                'Mixing different units without converting'
            ],
            teachingStrategies: [
                'Use physical models or grid paper',
                'Show triangle as half of rectangle/parallelogram',
                'Emphasize perpendicular height with right angle symbol',
                'Practice with various triangle orientations'
            ],
            visualAids: [
                'Triangle on grid paper to count squares',
                'Rectangle divided diagonally',
                'Perpendicular height with right angle marker',
                'Real-world triangular objects (signs, sails, roofs)'
            ],
            extensions: [
                'Heron\'s formula (three sides)',
                'Trigonometric area formula',
                'Composite shapes containing triangles',
                'Optimization problems'
            ],
            assessment: [
                'Can student identify base and height correctly?',
                'Does student remember to divide by 2?',
                'Are square units included in answer?',
                'Can student verify perpendicularity?'
            ]
        };
    }

    generateTriangleAlternativeMethods(problemType) {
        return {
            primaryMethod: 'Base × Height ÷ 2',
            methods: [
                {
                    name: 'Standard Formula',
                    description: 'A = (1/2) × b × h - multiply first, then divide by 2'
                },
                {
                    name: 'Decimal Multiplication',
                    description: 'A = 0.5 × b × h - use 0.5 instead of 1/2'
                },
                {
                    name: 'Fraction Form',
                    description: 'A = (b × h) / 2 - multiply in numerator, 2 in denominator'
                },
                {
                    name: 'Grid Counting',
                    description: 'For small triangles on grid paper, count full and partial squares'
                },
                {
                    name: 'Decomposition',
                    description: 'Break complex shape into multiple triangles and sum areas'
                }
            ],
            comparison: 'Standard formula is most systematic; decimal method is calculator-friendly; grid counting provides visual verification'
        };
    }
}

// Export the class
export default EnhancedTriangleAreaMathematicalWorkbook;
