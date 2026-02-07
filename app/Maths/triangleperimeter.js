// Enhanced Triangle Perimeter Calculations Mathematical Workbook
import * as math from 'mathjs';

export class EnhancedTrianglePerimeterMathematicalWorkbook {
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
        this.initializeTrianglePerimeterSolvers();
        this.initializeTrianglePerimeterLessons();
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
        this.initializeTriangleTypeDatabase();
        this.initializeUnitConversionDatabase();
        this.initializeGeometricPropertiesDatabase();
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
            // Special symbols
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'perpendicular': '⊥', 'parallel': '∥', 'degree': '°',
            // Triangle symbols
            'triangle': '△', 'angle': '∠', 'congruent': '≅', 'similar': '∼'
        };
    }

    initializeTrianglePerimeterLessons() {
        this.lessons = {
            basic_perimeter: {
                title: "Triangle Perimeter Basics",
                concepts: [
                    "Perimeter is the total distance around the triangle",
                    "Formula: P = a + b + c (sum of all three sides)",
                    "Measured in linear units (cm, m, in, ft, etc.)",
                    "Always positive and greater than any single side"
                ],
                theory: "The perimeter of a triangle is the sum of the lengths of its three sides. This represents the total distance you would travel if you walked around the entire triangle.",
                keyFormulas: {
                    "Basic Perimeter": "P = a + b + c",
                    "With two sides equal (isosceles)": "P = 2a + b",
                    "With all sides equal (equilateral)": "P = 3a"
                },
                solvingSteps: [
                    "Identify all three side lengths",
                    "Add the three side lengths together",
                    "Include appropriate units in the answer",
                    "Verify that perimeter is greater than any single side"
                ],
                applications: [
                    "Fencing triangular yards",
                    "Framing triangular art pieces",
                    "Border calculations for triangular gardens",
                    "Material estimation for construction"
                ]
            },

            equilateral_perimeter: {
                title: "Equilateral Triangle Perimeter",
                concepts: [
                    "All three sides are equal in length",
                    "Formula simplifies to P = 3s",
                    "Most symmetric type of triangle",
                    "All angles are 60 degrees"
                ],
                theory: "An equilateral triangle has all three sides equal. This special property allows us to use the simplified formula P = 3s, where s is the length of one side.",
                keyFormulas: {
                    "Perimeter": "P = 3s",
                    "Finding side from perimeter": "s = P/3"
                },
                properties: {
                    "Sides": "All equal (a = b = c)",
                    "Angles": "All 60°",
                    "Symmetry": "3 lines of symmetry"
                },
                solvingSteps: [
                    "Identify the side length s",
                    "Multiply by 3 to get perimeter",
                    "Or: divide perimeter by 3 to find side length",
                    "Verify all sides are equal"
                ],
                applications: [
                    "Equilateral tile borders",
                    "Triangular traffic signs",
                    "Structural trusses",
                    "Geometric design elements"
                ]
            },

            isosceles_perimeter: {
                title: "Isosceles Triangle Perimeter",
                concepts: [
                    "Two sides are equal in length",
                    "Formula: P = 2a + b (where a = equal sides, b = base)",
                    "Has line of symmetry through vertex angle",
                    "Two angles are equal"
                ],
                theory: "An isosceles triangle has two equal sides (legs) and one different side (base). The perimeter is found by adding the two equal sides and the base.",
                keyFormulas: {
                    "Perimeter": "P = 2a + b",
                    "Finding equal side": "a = (P - b)/2",
                    "Finding base": "b = P - 2a"
                },
                properties: {
                    "Equal sides": "Two sides congruent",
                    "Base angles": "Equal in measure",
                    "Symmetry": "1 line of symmetry"
                },
                solvingSteps: [
                    "Identify which two sides are equal",
                    "Add: equal side + equal side + base",
                    "Or use formula: P = 2(equal side) + base",
                    "Verify triangle inequality"
                ],
                applications: [
                    "Roof trusses (often isosceles)",
                    "Bridge supports",
                    "Symmetric design elements",
                    "Tent frames"
                ]
            },

            scalene_perimeter: {
                title: "Scalene Triangle Perimeter",
                concepts: [
                    "All three sides have different lengths",
                    "Most general type of triangle",
                    "Formula: P = a + b + c",
                    "No lines of symmetry"
                ],
                theory: "A scalene triangle has all three sides of different lengths. We must add all three distinct side lengths to find the perimeter.",
                keyFormulas: {
                    "Perimeter": "P = a + b + c",
                    "Triangle inequality": "a + b > c, a + c > b, b + c > a"
                },
                solvingSteps: [
                    "Identify all three side lengths",
                    "Add all three sides together",
                    "Verify triangle inequality holds",
                    "Include units"
                ],
                applications: [
                    "Irregular land plots",
                    "Non-standard construction",
                    "Natural formations",
                    "Custom design work"
                ]
            },

            right_triangle_perimeter: {
                title: "Right Triangle Perimeter",
                concepts: [
                    "One angle is 90 degrees",
                    "Sides: two legs (a, b) and hypotenuse (c)",
                    "Pythagorean theorem: a² + b² = c²",
                    "Perimeter: P = a + b + c"
                ],
                theory: "A right triangle has one 90-degree angle. If we know two sides, we can find the third using the Pythagorean theorem, then calculate perimeter.",
                keyFormulas: {
                    "Perimeter": "P = a + b + c",
                    "Pythagorean theorem": "a² + b² = c²",
                    "Finding hypotenuse": "c = √(a² + b²)",
                    "Finding leg": "a = √(c² - b²)"
                },
                solvingSteps: [
                    "Identify which sides are given",
                    "If needed, use Pythagorean theorem to find missing side",
                    "Add all three sides for perimeter",
                    "Verify right angle using Pythagorean theorem"
                ],
                applications: [
                    "Building corners",
                    "Ramps and slopes",
                    "Ladder positioning",
                    "Surveying and navigation"
                ]
            },

            perimeter_word_problems: {
                title: "Triangle Perimeter Word Problems",
                concepts: [
                    "Translate verbal descriptions to mathematical relationships",
                    "Identify known and unknown sides",
                    "Set up equations based on perimeter",
                    "Solve and interpret in context"
                ],
                theory: "Real-world problems often describe triangle sides in terms of relationships (one side is twice another, etc.). We translate these to equations and solve.",
                problemTypes: {
                    "Finding sides from perimeter": "Given perimeter and relationships between sides",
                    "Finding perimeter from side relationships": "Given how sides relate to each other",
                    "Comparing triangles": "Which has greater perimeter",
                    "Optimization": "Maximum/minimum perimeter given constraints"
                },
                solutionStrategy: [
                    "Read problem carefully, identify what's asked",
                    "Define variables for unknown sides",
                    "Write perimeter equation",
                    "Use given relationships to express in terms of one variable",
                    "Solve equation",
                    "Check if solution forms valid triangle",
                    "Answer with appropriate units and context"
                ],
                commonPhrases: {
                    "twice as long": "2x",
                    "3 cm longer than": "x + 3",
                    "half the length": "x/2",
                    "sum of": "+",
                    "difference": "-",
                    "total distance around": "perimeter"
                }
            },

            triangle_inequality: {
                title: "Triangle Inequality and Perimeter",
                concepts: [
                    "Sum of any two sides must be greater than third side",
                    "Essential for valid triangle existence",
                    "Three inequalities must all be satisfied",
                    "Affects minimum possible perimeter"
                ],
                theory: "For three lengths to form a triangle, the sum of any two must exceed the third. This is the triangle inequality theorem.",
                keyFormulas: {
                    "Inequality 1": "a + b > c",
                    "Inequality 2": "a + c > b",
                    "Inequality 3": "b + c > a",
                    "Simplified check": "sum of two smaller > largest"
                },
                implications: {
                    "Minimum perimeter": "Given constraints, what's smallest valid perimeter",
                    "Maximum side": "Given two sides, what's maximum third side",
                    "Feasibility": "Can these three lengths form a triangle"
                },
                solvingSteps: [
                    "Identify the three side lengths or constraints",
                    "Check all three triangle inequalities",
                    "If all satisfied, triangle is valid",
                    "Calculate perimeter if valid",
                    "If not valid, explain why"
                ],
                applications: [
                    "Engineering design constraints",
                    "Route planning (can you form triangular path)",
                    "Material feasibility",
                    "Geometric construction"
                ]
            },

            unit_conversion_perimeter: {
                title: "Triangle Perimeter with Unit Conversion",
                concepts: [
                    "Convert all sides to same unit before adding",
                    "Common conversions: cm↔m, in↔ft, mm↔cm",
                    "Final answer in requested units",
                    "Maintain precision through calculation"
                ],
                theory: "When triangle sides are given in different units, convert them all to the same unit before calculating perimeter.",
                keyConversions: {
                    "Metric": "1 m = 100 cm, 1 cm = 10 mm, 1 km = 1000 m",
                    "Imperial": "1 ft = 12 in, 1 yd = 3 ft, 1 mi = 5280 ft",
                    "Metric-Imperial": "1 in = 2.54 cm, 1 m ≈ 3.28 ft"
                },
                solvingSteps: [
                    "Identify units of each side",
                    "Choose target unit for answer",
                    "Convert all sides to target unit",
                    "Add converted sides for perimeter",
                    "Express answer with unit"
                ],
                applications: [
                    "International projects (mixing metric/imperial)",
                    "Scale drawings and models",
                    "Scientific measurements",
                    "Construction with mixed specifications"
                ]
            },

            perimeter_from_coordinates: {
                title: "Triangle Perimeter from Coordinate Points",
                concepts: [
                    "Given three vertices as coordinate points",
                    "Use distance formula to find side lengths",
                    "Then add for perimeter",
                    "Requires coordinate geometry"
                ],
                theory: "When triangle vertices are given as coordinates, use the distance formula to find each side length, then add them.",
                keyFormulas: {
                    "Distance formula": "d = √[(x₂-x₁)² + (y₂-y₁)²]",
                    "Perimeter": "P = AB + BC + CA"
                },
                solvingSteps: [
                    "Label the three vertices (e.g., A, B, C)",
                    "Use distance formula to find length AB",
                    "Use distance formula to find length BC",
                    "Use distance formula to find length CA",
                    "Add the three distances for perimeter",
                    "Simplify and round as appropriate"
                ],
                applications: [
                    "Computer graphics",
                    "GPS and mapping",
                    "Surveying land plots",
                    "Game development"
                ]
            },

            semi_perimeter: {
                title: "Semi-Perimeter and Its Applications",
                concepts: [
                    "Semi-perimeter is half the perimeter",
                    "Formula: s = P/2 = (a + b + c)/2",
                    "Used in Heron's formula for area",
                    "Useful in various geometric proofs"
                ],
                theory: "The semi-perimeter (half-perimeter) is frequently used in triangle formulas, especially Heron's formula for area.",
                keyFormulas: {
                    "Semi-perimeter": "s = (a + b + c)/2",
                    "Heron's formula (area)": "A = √[s(s-a)(s-b)(s-c)]",
                    "Inradius": "r = A/s"
                },
                solvingSteps: [
                    "Find perimeter P = a + b + c",
                    "Divide by 2 to get semi-perimeter s",
                    "Use s in subsequent formulas if needed"
                ],
                applications: [
                    "Calculating triangle area (Heron's formula)",
                    "Finding inscribed circle radius",
                    "Advanced geometric proofs",
                    "Optimization problems"
                ]
            }
        };
    }

    initializeTrianglePerimeterSolvers() {
        this.trianglePerimeterTypes = {
            // Basic perimeter with all three sides given
            three_sides_given: {
                patterns: [
                    /sides?\s+(\d+\.?\d*)\s*,?\s*(\d+\.?\d*)\s*,?\s*and\s+(\d+\.?\d*)/i,
                    /perimeter.*three.*sides/i,
                    /a\s*=\s*(\d+\.?\d*).*b\s*=\s*(\d+\.?\d*).*c\s*=\s*(\d+\.?\d*)/i
                ],
                solver: this.solveThreeSidesGiven.bind(this),
                name: 'Triangle Perimeter (Three Sides Given)',
                category: 'basic_perimeter',
                description: 'Calculate perimeter when all three sides are known'
            },

            // Equilateral triangle
            equilateral: {
                patterns: [
                    /equilateral.*side\s+(\d+\.?\d*)/i,
                    /equilateral.*(\d+\.?\d*)/i,
                    /all.*sides.*equal.*(\d+\.?\d*)/i
                ],
                solver: this.solveEquilateral.bind(this),
                name: 'Equilateral Triangle Perimeter',
                category: 'equilateral_perimeter',
                description: 'Calculate perimeter of equilateral triangle'
            },

            // Equilateral - find side from perimeter
            equilateral_reverse: {
                patterns: [
                    /equilateral.*perimeter\s+(\d+\.?\d*)/i,
                    /perimeter.*(\d+\.?\d*).*equilateral.*side/i
                ],
                solver: this.solveEquilateralReverse.bind(this),
                name: 'Find Equilateral Side from Perimeter',
                category: 'equilateral_perimeter',
                description: 'Find side length given perimeter of equilateral triangle'
            },

            // Isosceles triangle
            isosceles: {
                patterns: [
                    /isosceles.*equal.*sides?\s+(\d+\.?\d*).*base\s+(\d+\.?\d*)/i,
                    /isosceles.*legs?\s+(\d+\.?\d*).*base\s+(\d+\.?\d*)/i,
                    /two.*sides?\s+(\d+\.?\d*).*third\s+(\d+\.?\d*)/i
                ],
                solver: this.solveIsosceles.bind(this),
                name: 'Isosceles Triangle Perimeter',
                category: 'isosceles_perimeter',
                description: 'Calculate perimeter of isosceles triangle'
            },

            // Right triangle with legs
            right_triangle_legs: {
                patterns: [
                    /right.*triangle.*legs?\s+(\d+\.?\d*)\s+(?:and\s+)?(\d+\.?\d*)/i,
                    /right.*triangle.*a\s*=\s*(\d+\.?\d*).*b\s*=\s*(\d+\.?\d*)/i
                ],
                solver: this.solveRightTriangleLegs.bind(this),
                name: 'Right Triangle Perimeter (Given Legs)',
                category: 'right_triangle_perimeter',
                description: 'Calculate perimeter given two legs of right triangle'
            },

            // Right triangle with leg and hypotenuse
            right_triangle_leg_hypotenuse: {
                patterns: [
                    /right.*triangle.*leg\s+(\d+\.?\d*).*hypotenuse\s+(\d+\.?\d*)/i,
                    /right.*triangle.*hypotenuse\s+(\d+\.?\d*).*leg\s+(\d+\.?\d*)/i
                ],
                solver: this.solveRightTriangleLegHypotenuse.bind(this),
                name: 'Right Triangle Perimeter (Leg and Hypotenuse)',
                category: 'right_triangle_perimeter',
                description: 'Calculate perimeter given leg and hypotenuse'
            },

            // Word problem - perimeter given, find sides
            perimeter_find_sides: {
                patterns: [
                    /perimeter.*(\d+\.?\d*).*find.*sides?/i,
                    /perimeter.*is\s+(\d+\.?\d*)/i
                ],
                solver: this.solvePerimeterFindSides.bind(this),
                name: 'Find Sides Given Perimeter',
                category: 'perimeter_word_problems',
                description: 'Find side lengths given perimeter and relationships'
            },

            // Triangle from coordinate points
            coordinate_triangle: {
                patterns: [
                    /vertices.*\(.*\).*\(.*\).*\(.*\)/i,
                    /points.*\(.*\).*\(.*\).*\(.*\)/i,
                    /coordinates/i
                ],
                solver: this.solveCoordinateTriangle.bind(this),
                name: 'Triangle Perimeter from Coordinates',
                category: 'perimeter_from_coordinates',
                description: 'Calculate perimeter from vertex coordinates'
            },

            // Unit conversion problem
            mixed_units: {
                patterns: [
                    /(\d+\.?\d*)\s*(cm|m|mm|in|ft|yd).*(\d+\.?\d*)\s*(cm|m|mm|in|ft|yd).*(\d+\.?\d*)\s*(cm|m|mm|in|ft|yd)/i,
                    /convert|different\s+units/i
                ],
                solver: this.solveMixedUnits.bind(this),
                name: 'Triangle Perimeter with Unit Conversion',
                category: 'unit_conversion_perimeter',
                description: 'Calculate perimeter with mixed units'
            },

            // Triangle inequality check
            triangle_inequality_check: {
                patterns: [
                    /can.*form.*triangle/i,
                    /valid.*triangle/i,
                    /triangle.*inequality/i,
                    /possible.*triangle/i
                ],
                solver: this.solveTriangleInequality.bind(this),
                name: 'Triangle Inequality Verification',
                category: 'triangle_inequality',
                description: 'Check if three lengths can form a valid triangle'
            },

            // Semi-perimeter calculation
            semi_perimeter: {
                patterns: [
                    /semi.*perimeter/i,
                    /half.*perimeter/i,
                    /s\s*=/i
                ],
                solver: this.solveSemiPerimeter.bind(this),
                name: 'Semi-Perimeter Calculation',
                category: 'semi_perimeter',
                description: 'Calculate semi-perimeter (half of perimeter)'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            basic_perimeter: {
                'Add three sides': [
                    'Forgetting to add all three sides',
                    'Adding only two sides',
                    'Arithmetic errors in addition',
                    'Forgetting units in answer'
                ],
                'Verify triangle inequality': [
                    'Not checking if sides can form triangle',
                    'Assuming any three numbers work',
                    'Ignoring impossible configurations'
                ]
            },
            equilateral_perimeter: {
                'Multiply by 3': [
                    'Multiplying by 2 instead of 3',
                    'Adding instead of multiplying',
                    'Using wrong side measurement'
                ],
                'Find side from perimeter': [
                    'Multiplying instead of dividing',
                    'Dividing by wrong number',
                    'Mixing up formulas'
                ]
            },
            isosceles_perimeter: {
                'Identify equal sides': [
                    'Confusing which sides are equal',
                    'Using wrong sides in formula',
                    'Not doubling the equal side'
                ],
                'Apply formula': [
                    'Forgetting to multiply equal side by 2',
                    'Adding base twice',
                    'Using equilateral formula instead'
                ]
            },
            right_triangle_perimeter: {
                'Use Pythagorean theorem': [
                    'Forgetting to take square root',
                    'Adding instead of squaring',
                    'Using wrong formula',
                    'Arithmetic errors in calculation'
                ],
                'Add all three sides': [
                    'Forgetting to add the calculated side',
                    'Using wrong value for hypotenuse',
                    'Not including all three sides'
                ]
            },
            unit_conversion_perimeter: {
                'Convert units': [
                    'Forgetting to convert all sides',
                    'Using wrong conversion factor',
                    'Converting in wrong direction',
                    'Mixing up units in final answer'
                ],
                'Calculate perimeter': [
                    'Adding before converting',
                    'Losing track of which unit to use',
                    'Decimal placement errors'
                ]
            },
            coordinate_triangle: {
                'Use distance formula': [
                    'Forgetting to square differences',
                    'Forgetting to take square root',
                    'Subtracting coordinates in wrong order',
                    'Arithmetic errors in calculation'
                ],
                'Calculate all three distances': [
                    'Finding only one or two distances',
                    'Using wrong pairs of points',
                    'Confusing which vertices to use'
                ]
            }
        };

        this.errorPrevention = {
            unit_tracking: {
                reminder: 'Always write units with every measurement',
                method: 'Keep a units column in your work'
            },
            triangle_inequality: {
                reminder: 'Sum of any two sides must exceed the third',
                method: 'Quick check: add two smaller sides, compare to largest'
            },
            formula_selection: {
                reminder: 'Choose formula based on triangle type',
                method: 'Identify triangle type first (equilateral, isosceles, scalene, right)'
            },
            pythagorean_theorem: {
                reminder: 'a² + b² = c², where c is hypotenuse (longest side)',
                method: 'Draw a diagram and label sides clearly'
            },
            coordinate_calculation: {
                reminder: 'Distance formula: √[(x₂-x₁)² + (y₂-y₁)²]',
                method: 'Calculate each distance separately, then add'
            },
            verification: {
                reminder: 'Check if answer makes sense',
                method: 'Perimeter should be larger than any single side'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why perimeter represents total distance around triangle',
                language: 'intuitive and geometric'
            },
            procedural: {
                focus: 'Step-by-step process to calculate perimeter',
                language: 'clear instructions'
            },
            visual: {
                focus: 'Drawing and visualizing the triangle',
                language: 'spatial and visual metaphors'
            },
            algebraic: {
                focus: 'Formulas and mathematical relationships',
                language: 'precise mathematical notation'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential steps only',
                examples: 'concrete measurements with whole numbers'
            },
            intermediate: {
                vocabulary: 'standard geometric terms',
                detail: 'main steps with brief explanations',
                examples: 'mix of whole numbers and decimals'
            },
            ELI5: {
                vocabulary: 'explain like I\'m 5 years old - simplest possible terms',
                detail: 'every step explained with real-world analogies',
                examples: 'physical objects like fences and borders',
                analogies: true,
                visualization: 'simple drawings and shapes'
            },
            detailed: {
                vocabulary: 'full geometric vocabulary',
                detail: 'comprehensive explanations with formulas',
                examples: 'abstract and varied measurements'
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
            fencing: {
                scenario: "Fencing a triangular garden or yard",
                context: "You need to buy fencing material to enclose a triangular area",
                examples: [
                    "A triangular garden has sides 10 ft, 12 ft, and 15 ft. How much fencing is needed?",
                    "Your backyard triangle measures 8m, 10m, and 12m. How many meters of fence to buy?"
                ],
                realWorldTip: "Add 5-10% extra for waste and gates",
                application: "Landscaping, agriculture, property boundaries"
            },
            
            framing: {
                scenario: "Creating a frame for triangular artwork or window",
                context: "Calculate the length of framing material needed",
                examples: [
                    "A triangular photo frame has sides 6 in, 8 in, and 10 in. How much frame molding needed?",
                    "A triangular window has equal sides of 50 cm each. How much trim?"
                ],
                realWorldTip: "Account for mitering corners (usually requires slightly more material)",
                application: "Picture framing, window installation, crafts"
            },

            hiking_trail: {
                scenario: "Planning a triangular hiking route",
                context: "Calculate total distance of a triangular trail",
                examples: [
                    "A trail forms a triangle: 2.5 km north, 3 km east, 4 km back to start. Total distance?",
                    "Three campgrounds form a triangle with distances 5 mi, 7 mi, and 9 mi. Total loop?"
                ],
                realWorldTip: "Perimeter gives total hiking distance for the loop",
                application: "Hiking, orienteering, route planning"
            },

            construction: {
                scenario: "Triangular roof truss or structural element",
                context: "Calculate total length of material for triangular structure",
                examples: [
                    "A roof truss has sides 12 ft, 12 ft, and 18 ft. How much lumber for the perimeter?",
                    "A triangular support beam structure measures 2m, 3m, 4m. Total steel needed?"
                ],
                realWorldTip: "Includes material for the outer edges only, interior bracing separate",
                application: "Construction, engineering, architecture"
            },

            sports_field: {
                scenario: "Triangular section of sports field or park",
                context: "Calculate border length for painting or edging",
                examples: [
                    "A triangular batting cage has sides 30 ft, 40 ft, 50 ft. How much edge painting?",
                    "A triangular playground area measures 15m, 20m, 25m. Edging material needed?"
                ],
                realWorldTip: "Perimeter determines boundary marking or edging requirements",
                application: "Sports facilities, parks, playgrounds"
            },

            sewing: {
                scenario: "Triangular fabric pieces or quilting",
                context: "Calculate trim or binding needed for triangular fabric",
                examples: [
                    "A triangular quilt piece has sides 8 in, 10 in, 12 in. How much binding?",
                    "A triangular banner measures 60 cm per side. How much decorative trim?"
                ],
                realWorldTip: "Add extra for overlapping at corners",
                application: "Sewing, quilting, crafts"
            },

            pool_border: {
                scenario: "Decorative border around triangular pool or pond",
                context: "Calculate tiles or coping stones needed",
                examples: [
                    "A triangular pool has sides 20 ft, 25 ft, 30 ft. How many feet of coping?",
                    "A triangular pond measures 4m, 5m, 6m. Decorative stone edging needed?"
                ],
                realWorldTip: "Purchase individual tiles/stones based on their width",
                application: "Pool installation, landscaping, water features"
            },

            land_survey: {
                scenario: "Surveying triangular land plots",
                context: "Calculate boundary length for property assessment",
                examples: [
                    "A triangular lot has frontages of 100 ft, 120 ft, and 140 ft. Total boundary?",
                    "A farm field triangle measures 200m, 250m, 300m. Total perimeter?"
                ],
                realWorldTip: "Accurate measurements crucial for property valuation",
                application: "Real estate, surveying, land management"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            basic_perimeter: {
                skills: ['Addition', 'Understanding of length', 'Basic geometry'],
                priorKnowledge: ['What a triangle is', 'Meaning of perimeter', 'Linear units'],
                checkQuestions: [
                    "What is 5 + 7 + 9?",
                    "What does perimeter mean?",
                    "How many sides does a triangle have?"
                ]
            },
            equilateral_perimeter: {
                skills: ['Multiplication', 'Division', 'Understanding of equality'],
                priorKnowledge: ['All sides equal in equilateral triangle', 'P = 3s formula'],
                checkQuestions: [
                    "What is 3 × 8?",
                    "What is 24 ÷ 3?",
                    "What makes a triangle equilateral?"
                ]
            },
            isosceles_perimeter: {
                skills: ['Multiplication by 2', 'Addition', 'Identifying equal sides'],
                priorKnowledge: ['Two sides equal in isosceles triangle', 'P = 2a + b formula'],
                checkQuestions: [
                    "What is 2 × 6?",
                    "Which sides are equal in an isosceles triangle?",
                    "What is 2(5) + 3?"
                ]
            },
            right_triangle_perimeter: {
                skills: ['Pythagorean theorem', 'Square roots', 'Squaring numbers'],
                priorKnowledge: ['a² + b² = c²', 'Right angle = 90°', 'Hypotenuse is longest side'],
                checkQuestions: [
                    "What is 3²?",
                    "What is √25?",
                    "What is 3² + 4²?",
                    "Which side is the hypotenuse in a right triangle?"
                ]
            },
            unit_conversion_perimeter: {
                skills: ['Unit conversion', 'Decimal arithmetic', 'Keeping track of units'],
                priorKnowledge: ['Common unit conversions', 'When to convert units'],
                checkQuestions: [
                    "How many centimeters in 1 meter?",
                    "How many inches in 1 foot?",
                    "If sides are in different units, what should you do first?"
                ]
            },
            coordinate_triangle: {
                skills: ['Distance formula', 'Coordinate geometry', 'Working with coordinates'],
                priorKnowledge: ['(x, y) notation', 'Distance between two points', 'Pythagorean theorem basis'],
                checkQuestions: [
                    "What is the distance formula?",
                    "How do you find distance between (0,0) and (3,4)?",
                    "What does (x, y) represent?"
                ]
            },
            triangle_inequality: {
                skills: ['Inequalities', 'Comparing sums', 'Logical reasoning'],
                priorKnowledge: ['Triangle inequality theorem', 'When three sides can form triangle'],
                checkQuestions: [
                    "What is the triangle inequality?",
                    "Can sides 2, 3, 10 form a triangle? Why or why not?",
                    "What must be true about the sum of two sides?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            walking_around: {
                description: "Perimeter as walking around the triangle",
                analogy: "Like walking around the edge of a triangular park",
                visualization: "Trace your finger around all three sides",
                suitableFor: ['all_triangle_perimeter'],
                explanation: "Perimeter is the total distance you'd travel going all the way around"
            },
            
            fencing: {
                description: "Perimeter as fence length",
                analogy: "How much fence to enclose a triangular yard",
                visualization: "Draw fence posts along each side",
                suitableFor: ['all_triangle_perimeter'],
                explanation: "The fence would go along all three sides, total length is perimeter"
            },

            ribbon: {
                description: "Perimeter as ribbon around border",
                analogy: "Length of ribbon to go around triangular shape",
                visualization: "Imagine laying a ribbon along each edge",
                suitableFor: ['all_triangle_perimeter'],
                explanation: "The ribbon length needed is exactly the perimeter"
            },

            formula_blocks: {
                description: "Formula as building blocks",
                analogy: "P = a + b + c is like stacking three blocks",
                visualization: "Three segments laid end-to-end",
                suitableFor: ['basic_perimeter', 'scalene'],
                explanation: "Each side is one block, perimeter is total length of all blocks"
            },

            pythagorean_visual: {
                description: "Right triangle with squares on sides",
                analogy: "Visual proof using area squares",
                visualization: "Squares drawn on each side showing a² + b² = c²",
                suitableFor: ['right_triangle_perimeter'],
                explanation: "Pythagorean theorem lets us find missing side, then calculate perimeter"
            },

            coordinate_grid: {
                description: "Triangle on coordinate plane",
                analogy: "Like a map with points marked",
                visualization: "Plot points and connect to form triangle",
                suitableFor: ['coordinate_triangle'],
                explanation: "Distance formula finds length of each side, then add for perimeter"
            },

            symmetry_lines: {
                description: "Lines of symmetry in special triangles",
                analogy: "Mirror images showing equal parts",
                visualization: "Dashed lines showing symmetry",
                suitableFor: ['equilateral', 'isosceles'],
                explanation: "Symmetry helps identify equal sides, simplifying perimeter calculation"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "Triangle with sides 3 cm, 4 cm, 5 cm",
                    solution: "12 cm",
                    steps: ["P = 3 + 4 + 5", "P = 12 cm"],
                    difficulty: "easy",
                    type: "basic_perimeter"
                },
                {
                    problem: "Equilateral triangle with side 6 m",
                    solution: "18 m",
                    steps: ["P = 3s", "P = 3(6)", "P = 18 m"],
                    difficulty: "easy",
                    type: "equilateral"
                },
                {
                    problem: "Isosceles triangle: equal sides 5 ft, base 8 ft",
                    solution: "18 ft",
                    steps: ["P = 2a + b", "P = 2(5) + 8", "P = 10 + 8", "P = 18 ft"],
                    difficulty: "easy",
                    type: "isosceles"
                }
            ],
            
            intermediate: [
                {
                    problem: "Right triangle with legs 6 cm and 8 cm",
                    solution: "24 cm",
                    steps: [
                        "Find hypotenuse: c² = 6² + 8²",
                        "c² = 36 + 64 = 100",
                        "c = 10 cm",
                        "P = 6 + 8 + 10 = 24 cm"
                    ],
                    difficulty: "medium",
                    type: "right_triangle"
                },
                {
                    problem: "Triangle with sides 7.5 m, 10.2 m, 12.3 m",
                    solution: "30 m",
                    steps: ["P = 7.5 + 10.2 + 12.3", "P = 30 m"],
                    difficulty: "medium",
                    type: "scalene"
                },
                {
                    problem: "Equilateral triangle, perimeter 36 in, find side",
                    solution: "12 in",
                    steps: ["s = P/3", "s = 36/3", "s = 12 in"],
                    difficulty: "medium",
                    type: "equilateral_reverse"
                }
            ],
            
            advanced: [
                {
                    problem: "Right triangle: leg 5 cm, hypotenuse 13 cm",
                    solution: "30 cm",
                    steps: [
                        "Find other leg: a² + 5² = 13²",
                        "a² + 25 = 169",
                        "a² = 144",
                        "a = 12 cm",
                        "P = 5 + 12 + 13 = 30 cm"
                    ],
                    difficulty: "hard",
                    type: "right_triangle"
                },
                {
                    problem: "Triangle vertices: A(0,0), B(0,4), C(3,0)",
                    solution: "12 units",
                    steps: [
                        "AB = 4 (vertical distance)",
                        "AC = 3 (horizontal distance)",
                        "BC = √(3² + 4²) = √25 = 5",
                        "P = 3 + 4 + 5 = 12 units"
                    ],
                    difficulty: "hard",
                    type: "coordinate_triangle"
                },
                {
                    problem: "Sides: 2.5 m, 150 cm, 3500 mm. Find perimeter in meters.",
                    solution: "7.5 m",
                    steps: [
                        "Convert all to meters:",
                        "2.5 m, 1.5 m (150 cm), 3.5 m (3500 mm)",
                        "P = 2.5 + 1.5 + 3.5 = 7.5 m"
                    ],
                    difficulty: "hard",
                    type: "mixed_units"
                }
            ],

            byMethod: {
                basic_perimeter: [
                    { problem: "Sides 5, 7, 9", solution: "21", steps: ["5 + 7 + 9 = 21"] },
                    { problem: "Sides 10, 15, 20", solution: "45", steps: ["10 + 15 + 20 = 45"] }
                ],
                equilateral: [
                    { problem: "Side 7", solution: "21", steps: ["3 × 7 = 21"] },
                    { problem: "Side 12", solution: "36", steps: ["3 × 12 = 36"] }
                ],
                isosceles: [
                    { problem: "Equal sides 6, base 8", solution: "20", steps: ["2(6) + 8 = 20"] },
                    { problem: "Equal sides 10, base 5", solution: "25", steps: ["2(10) + 5 = 25"] }
                ],
                right_triangle: [
                    { problem: "Legs 3, 4", solution: "12", steps: ["c = 5", "3 + 4 + 5 = 12"] },
                    { problem: "Legs 5, 12", solution: "30", steps: ["c = 13", "5 + 12 + 13 = 30"] }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            perimeter_vs_area: {
                misconception: "Confusing perimeter with area",
                reality: "Perimeter is distance around (1D), area is space inside (2D)",
                correctiveExample: "A 3-4-5 triangle has perimeter 12 but area 6",
                commonIn: ['basic_perimeter']
            },
            
            only_two_sides: {
                misconception: "Thinking perimeter only uses two sides",
                reality: "Must include all three sides of triangle",
                correctiveExample: "Sides 5, 7, 9: P = 5+7+9 = 21 (not just 5+7)",
                commonIn: ['basic_perimeter']
            },

            equilateral_confusion: {
                misconception: "Thinking all triangles have equal sides",
                reality: "Only equilateral triangles have all sides equal",
                correctiveExample: "Most triangles are scalene (all different) or isosceles (two equal)",
                commonIn: ['equilateral_perimeter']
            },

            pythagorean_misuse: {
                misconception: "Using Pythagorean theorem on non-right triangles",
                reality: "Pythagorean theorem only works for right triangles",
                correctiveExample: "For non-right triangles, use other methods (law of cosines, etc.)",
                commonIn: ['right_triangle_perimeter']
            },

            hypotenuse_identification: {
                misconception: "Not recognizing which side is hypotenuse",
                reality: "Hypotenuse is always opposite the right angle and is the longest side",
                correctiveExample: "In 3-4-5 triangle, 5 is hypotenuse (opposite 90° angle)",
                commonIn: ['right_triangle_perimeter']
            },

            unit_mixing: {
                misconception: "Adding measurements in different units without converting",
                reality: "Must convert all to same unit before adding",
                correctiveExample: "Can't add 5 cm + 2 m directly; convert first: 5 cm + 200 cm = 205 cm",
                commonIn: ['unit_conversion_perimeter']
            },

            triangle_inequality_ignore: {
                misconception: "Assuming any three numbers can form a triangle",
                reality: "Must satisfy triangle inequality: sum of two sides > third side",
                correctiveExample: "Sides 2, 3, 10 cannot form triangle (2 + 3 = 5, not > 10)",
                commonIn: ['triangle_inequality']
            },

            distance_formula_errors: {
                misconception: "Forgetting to square or take square root in distance formula",
                reality: "Formula is √[(x₂-x₁)² + (y₂-y₁)²] - must square then root",
                correctiveExample: "Distance from (0,0) to (3,4) is √(9+16) = 5, not 3+4 = 7",
                commonIn: ['coordinate_triangle']
            },

            isosceles_base_confusion: {
                misconception: "Not sure which side is the base in isosceles triangle",
                reality: "Base is the different side; equal sides are legs",
                correctiveExample: "If two sides are 5 and one is 8, the 8 is the base",
                commonIn: ['isosceles_perimeter']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            perimeter_walking: {
                analogy: "Walking around a triangular park",
                explanation: "Just like you'd walk along each path to go around a triangular park, perimeter adds up all three sides - the total distance you'd travel",
                suitableFor: ['all_types'],
                ELI5: "Imagine you're an ant walking around the edge of a triangle. Perimeter is how far you walked!"
            },

            equilateral_three_equal_slices: {
                analogy: "Cutting a circular pizza into three equal slices",
                explanation: "An equilateral triangle is like three identical pizza slices - all the same size. If one edge is 6 inches, all three are 6 inches",
                suitableFor: ['equilateral'],
                ELI5: "It's like having three identical sticks. If one stick is 5 inches, all three are 5 inches, so together they're 15 inches!"
            },

            isosceles_twins: {
                analogy: "Two twins and a friend",
                explanation: "In an isosceles triangle, two sides are like twins - exactly the same. The third side is like a friend who's different",
                suitableFor: ['isosceles'],
                ELI5: "Imagine two sides are twins who are both 10 years old, and one side is a friend who is 8. Together: 10 + 10 + 8 = 28!"
            },

            right_triangle_corner: {
                analogy: "Corner of a room or book",
                explanation: "A right triangle has one perfect corner (90°) like the corner of a room. The Pythagorean theorem helps us find missing measurements",
                suitableFor: ['right_triangle'],
                ELI5: "Think of the corner where two walls meet the floor. That's a right angle! The triangle uses that special corner."
            },

            pythagorean_ladder: {
                analogy: "Ladder against a wall",
                explanation: "When a ladder leans against a wall, it forms a right triangle. The ladder is the hypotenuse, distance from wall and height up wall are the legs",
                suitableFor: ['right_triangle'],
                ELI5: "Imagine a ladder leaning on a wall. The ladder, the wall, and the ground make a triangle! The ladder is the longest part."
            },

            unit_conversion_money: {
                analogy: "Converting different currencies",
                explanation: "Just like you can't add dollars and euros without converting, you can't add centimeters and meters without converting to the same unit",
                suitableFor: ['mixed_units'],
                ELI5: "It's like having 5 pennies and 2 dimes. You need to change them all to the same thing before counting!"
            },

            triangle_inequality_bridge: {
                analogy: "Three roads connecting three cities",
                explanation: "For three cities to form a triangle of roads, no direct route can be longer than the other two combined (otherwise you'd just take the long road directly)",
                suitableFor: ['triangle_inequality'],
                ELI5: "Imagine three towns. If one road is super long, longer than the other two together, you can't make a triangle - the road won't reach!"
            },

            coordinate_treasure_map: {
                analogy: "Treasure map with marked points",
                explanation: "Coordinates are like marks on a treasure map. The distance formula tells you how far between any two points",
                suitableFor: ['coordinate_triangle'],
                ELI5: "It's like a treasure map! Each corner of the triangle is marked with an X. We measure how far between each X."
            },

            semi_perimeter_halfway: {
                analogy: "Halfway around a running track",
                explanation: "Semi-perimeter is exactly half of the perimeter, like running halfway around a track",
                suitableFor: ['semi_perimeter'],
                ELI5: "If walking all the way around takes 20 steps, walking halfway around takes 10 steps. That's semi-perimeter!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            basic_perimeter: {
                level1: "How many sides does a triangle have?",
                level2: "To find perimeter, what do you do with all the sides?",
                level3: "Add all three side lengths together",
                level4: "P = {a} + {b} + {c} = {answer}"
            },
            
            equilateral: {
                level1: "What's special about an equilateral triangle?",
                level2: "If all sides are equal, how can you find total quickly?",
                level3: "Multiply one side length by 3",
                level4: "P = 3 × {s} = {answer}"
            },

            equilateral_reverse: {
                level1: "If perimeter is total of all sides, and all sides are equal, how do you find one side?",
                level2: "What operation is opposite of multiplying by 3?",
                level3: "Divide perimeter by 3",
                level4: "s = {P}/3 = {answer}"
            },

            isosceles: {
                level1: "How many sides are equal in an isosceles triangle?",
                level2: "If two sides are equal, how do you count them?",
                level3: "Multiply equal side by 2, then add base",
                level4: "P = 2 × {a} + {b} = {answer}"
            },

            right_triangle_legs: {
                level1: "What theorem helps you find the hypotenuse?",
                level2: "How does the Pythagorean theorem work?",
                level3: "c² = a² + b², so c = √(a² + b²), then add all three sides",
                level4: "c = √({a}² + {b}²) = {c}, P = {a} + {b} + {c} = {answer}"
            },

            right_triangle_leg_hypotenuse: {
                level1: "If you have one leg and hypotenuse, how do you find the other leg?",
                level2: "Rearrange Pythagorean theorem to solve for unknown leg",
                level3: "a² = c² - b² or b² = c² - a², then add all three",
                level4: "Missing leg = √({c}² - {a}²) = {b}, P = {answer}"
            },

            mixed_units: {
                level1: "Can you add measurements in different units?",
                level2: "What should you do before adding?",
                level3: "Convert all sides to the same unit first",
                level4: "Convert to {unit}: {a}, {b}, {c}, then P = {answer}"
            },

            coordinate_triangle: {
                level1: "How do you find distance between two points?",
                level2: "What formula gives distance on a coordinate plane?",
                level3: "Use distance formula √[(x₂-x₁)² + (y₂-y₁)²] for each side",
                level4: "Calculate AB, BC, CA using distance formula, then add"
            },

            triangle_inequality: {
                level1: "Can any three lengths form a triangle?",
                level2: "What must be true about the sum of two sides?",
                level3: "Sum of any two sides must be greater than the third side",
                level4: "Check: {a}+{b} > {c}? {a}+{c} > {b}? {b}+{c} > {a}?"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "What is the perimeter of a triangle with sides 5 cm, 7 cm, and 9 cm?",
                    answer: "21 cm",
                    assesses: "basic_perimeter",
                    difficulty: "basic"
                },
                {
                    question: "An equilateral triangle has side length 8 m. What is its perimeter?",
                    answer: "24 m",
                    assesses: "equilateral",
                    difficulty: "basic"
                },
                {
                    question: "A right triangle has legs 6 and 8. What is its perimeter?",
                    answer: "24",
                    assesses: "right_triangle",
                    difficulty: "intermediate"
                },
                {
                    question: "Can sides 3, 4, and 10 form a valid triangle?",
                    answer: "No",
                    assesses: "triangle_inequality",
                    difficulty: "intermediate"
                }
            ],

            formative: [
                {
                    question: "To find perimeter of a triangle, you should:",
                    options: ["Multiply all sides", "Add all three sides", "Square all sides", "Divide sides by 3"],
                    correct: "Add all three sides",
                    explanation: "Perimeter is the total distance around, so add all sides"
                },
                {
                    question: "An equilateral triangle has perimeter 30. Each side is:",
                    options: ["30", "15", "10", "90"],
                    correct: "10",
                    explanation: "Divide perimeter by 3 for equilateral triangle"
                },
                {
                    question: "For a right triangle with legs a and b, the hypotenuse c is:",
                    options: ["a + b", "√(a + b)", "√(a² + b²)", "a² + b²"],
                    correct: "√(a² + b²)",
                    explanation: "Pythagorean theorem: c = √(a² + b²)"
                },
                {
                    question: "If triangle sides are in different units, you should:",
                    options: [
                        "Add them as-is",
                        "Convert all to same unit first",
                        "Use the largest unit",
                        "Use the smallest unit"
                    ],
                    correct: "Convert all to same unit first",
                    explanation: "Must have same units before adding"
                }
            ],

            summative: [
                {
                    question: "Find perimeter of triangle with vertices A(0,0), B(3,0), C(0,4)",
                    answer: "12",
                    showsWork: true,
                    rubric: {
                        find_AB: 1,
                        find_BC: 1,
                        find_CA: 1,
                        add_correctly: 1,
                        units: 1
                    }
                },
                {
                    question: "A triangle has one side 2.5 m, another 150 cm, and third 3500 mm. Find perimeter in meters.",
                    answer: "7.5 m",
                    showsWork: true,
                    rubric: {
                        convert_cm: 1,
                        convert_mm: 1,
                        add_correctly: 1,
                        correct_unit: 1
                    }
                }
            ],

            byDifficulty: {
                easy: [
                    "Triangle with sides 4, 5, 6. Find perimeter.",
                    "Equilateral triangle, side 10. Find perimeter.",
                    "Isosceles: equal sides 7, base 10. Perimeter?"
                ],
                medium: [
                    "Right triangle, legs 9 and 12. Find perimeter.",
                    "Equilateral perimeter 45. Find side length.",
                    "Triangle sides 8.5, 10.2, 12.8. Perimeter?"
                ],
                hard: [
                    "Right triangle: leg 8, hypotenuse 17. Find perimeter.",
                    "Vertices (1,2), (4,6), (7,2). Find perimeter.",
                    "Sides: 2 m, 150 cm, 4000 mm. Perimeter in meters?"
                ]
            },

            byObjective: {
                canCalculateBasicPerimeter: [
                    "Sides 3, 4, 5",
                    "Sides 10, 15, 20",
                    "Sides 6.5, 8.2, 9.3"
                ],
                canCalculateEquilateral: [
                    "Equilateral, side 12",
                    "Equilateral, perimeter 42, find side",
                    "All sides 7.5"
                ],
                canCalculateIsosceles: [
                    "Equal sides 8, base 12",
                    "Legs 10, base 6",
                    "Equal sides 15, base 15"
                ],
                canCalculateRightTriangle: [
                    "Legs 5 and 12",
                    "Legs 8 and 15",
                    "Leg 7, hypotenuse 25"
                ],
                canConvertUnits: [
                    "5 cm, 0.1 m, 150 mm",
                    "2 ft, 18 in, 1 yd",
                    "0.5 m, 40 cm, 600 mm"
                ],
                canUseCoordinates: [
                    "(0,0), (0,5), (12,0)",
                    "(1,1), (4,5), (7,1)",
                    "(2,3), (6,3), (4,7)"
                ],
                canCheckTriangleInequality: [
                    "Can 2, 3, 8 form triangle?",
                    "Can 5, 7, 10 form triangle?",
                    "Can 4, 4, 10 form triangle?"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "all_sides_given": "Simple addition: P = a + b + c",
                "all_sides_equal": "Equilateral: P = 3s",
                "two_sides_equal": "Isosceles: P = 2a + b",
                "right_triangle_legs_given": "Find hypotenuse with Pythagorean, then add",
                "right_triangle_leg_and_hypotenuse": "Find missing leg with Pythagorean, then add",
                "coordinate_vertices": "Use distance formula for each side, then add",
                "mixed_units": "Convert all to same unit, then add",
                "given_perimeter_find_sides": "Set up equation with relationships, solve"
            },

            whenToUseWhat: {
                basic_addition: "When all three side lengths are known and in same units",
                equilateral_formula: "When all sides are equal (equilateral triangle)",
                isosceles_formula: "When two sides are equal (isosceles triangle)",
                pythagorean_theorem: "When triangle is right triangle and need to find missing side",
                distance_formula: "When triangle vertices given as coordinates",
                unit_conversion: "When sides given in different units",
                triangle_inequality: "To verify if three lengths can form a valid triangle"
            },

            methodSelection: {
                factorsToConsider: [
                    "Triangle type (equilateral, isosceles, scalene, right)",
                    "What information is given (sides, coordinates, relationships)",
                    "Units of measurement",
                    "Whether all sides are known or need to be calculated"
                ],
                generalApproach: [
                    "1. Identify triangle type and what's given",
                    "2. If needed, find any missing side lengths",
                    "3. Convert all measurements to same unit if necessary",
                    "4. Add all three sides for perimeter",
                    "5. Include appropriate units in answer",
                    "6. Verify answer makes sense (perimeter > any single side)"
                ]
            },

            optimizationTips: {
                "Identify triangle type first": "Knowing if equilateral/isosceles saves work",
                "Check units immediately": "Convert early to avoid mistakes later",
                "Use Pythagorean triples": "Recognize 3-4-5, 5-12-13, 8-15-17 for speed",
                "Draw a diagram": "Visual helps prevent mistakes, especially with coordinates",
                "Verify triangle inequality": "Catch impossible triangles early"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Basic Perimeter Sprint",
                    timeLimit: 60,
                    problems: [
                        "Sides 2, 3, 4",
                        "Sides 5, 7, 9",
                        "Sides 10, 10, 10",
                        "Sides 6, 8, 10",
                        "Equilateral side 9",
                        "Isosceles: equal 7, base 6",
                        "Sides 12, 15, 18",
                        "Equilateral side 11"
                    ]
                },
                {
                    name: "Right Triangle Challenge",
                    timeLimit: 120,
                    problems: [
                        "Legs 3, 4",
                        "Legs 5, 12",
                        "Legs 8, 15",
                        "Legs 7, 24",
                        "Leg 9, hypotenuse 15"
                    ]
                }
            ],

            puzzles: [
                {
                    name: "Mystery Triangle",
                    problem: "A triangle has perimeter 30. One side is 8, another is 2 more than the first. Find all sides.",
                    solve: "Find the three side lengths",
                    solution: "Sides are 8, 10, 12 (8 + 10 + 12 = 30)"
                },
                {
                    name: "Unit Mix Challenge",
                    problem: "Sides are 0.5 m, 60 cm, and 800 mm. Perimeter in cm?",
                    solve: "Convert and calculate",
                    solution: "50 cm + 60 cm + 80 cm = 190 cm"
                },
                {
                    name: "Triangle Inequality Puzzle",
                    challenge: "You have sticks of length 2, 5, 7, 10, 12. Which three can form a triangle with largest perimeter?",
                    solution: "7, 10, 12 (perimeter 29)"
                }
            ],

            applications: [
                {
                    scenario: "Fencing a Yard",
                    problem: "A triangular yard has sides 25 ft, 30 ft, and 35 ft. Fencing costs $8 per foot. Total cost?",
                    equation: "P = 25 + 30 + 35 = 90 ft, Cost = 90 × $8",
                    solution: "$720"
                },
                {
                    scenario: "Picture Frame",
                    problem: "A triangular frame has equal sides of 18 inches and base of 24 inches. How many inches of molding?",
                    equation: "P = 2(18) + 24",
                    solution: "60 inches"
                },
                {
                    scenario: "Trail Planning",
                    problem: "Three campsites form triangle: A to B is 2.5 km, B to C is 3.8 km, C to A is 4.2 km. Total loop distance?",
                    equation: "P = 2.5 + 3.8 + 4.2",
                    solution: "10.5 km"
                }
            ],

            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Equilateral triangle, side 7",
                        "P = 7 + 7 = 14"  // ERROR: only added two sides
                    ],
                    correctAnswer: "21",
                    errorType: "Forgot third side"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Right triangle, legs 6 and 8",
                        "c = 6 + 8 = 14",  // ERROR: should use Pythagorean theorem
                        "P = 6 + 8 + 14 = 28"
                    ],
                    correctAnswer: "24",
                    errorType: "Didn't use Pythagorean theorem for hypotenuse"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "Sides: 2 m, 150 cm, 3000 mm",
                        "P = 2 + 150 + 3000 = 3152"  // ERROR: mixed units
                    ],
                    correctAnswer: "6.5 m or 650 cm",
                    errorType: "Added without converting units"
                }
            ]
        };
    }

    initializeTriangleTypeDatabase() {
        this.triangleTypes = {
            byAngles: {
                acute: {
                    definition: "All three angles less than 90°",
                    properties: "No right or obtuse angles",
                    perimeterNote: "Standard formula P = a + b + c"
                },
                right: {
                    definition: "One angle exactly 90°",
                    properties: "Pythagorean theorem applies: a² + b² = c²",
                    perimeterNote: "May need to find hypotenuse first"
                },
                obtuse: {
                    definition: "One angle greater than 90°",
                    properties: "Longest side opposite obtuse angle",
                    perimeterNote: "Standard formula P = a + b + c"
                }
            },
            bySides: {
                equilateral: {
                    definition: "All three sides equal",
                    properties: "All angles 60°, highly symmetric",
                    perimeterFormula: "P = 3s"
                },
                isosceles: {
                    definition: "Two sides equal",
                    properties: "Two angles equal (base angles)",
                    perimeterFormula: "P = 2a + b"
                },
                scalene: {
                    definition: "All three sides different",
                    properties: "All angles different",
                    perimeterFormula: "P = a + b + c"
                }
            },
            special: {
                "45-45-90": {
                    definition: "Isosceles right triangle",
                    properties: "Legs equal, angles 45-45-90",
                    sideRelationship: "If legs = a, hypotenuse = a√2"
                },
                "30-60-90": {
                    definition: "Special right triangle",
                    properties: "Angles 30-60-90",
                    sideRelationship: "Sides in ratio 1 : √3 : 2"
                }
            }
        };
    }

    initializeUnitConversionDatabase() {
        this.unitConversions = {
            metric: {
                length: {
                    "km to m": 1000,
                    "m to cm": 100,
                    "cm to mm": 10,
                    "m to mm": 1000,
                    "km to cm": 100000
                },
                conversions: [
                    { from: "km", to: "m", factor: 1000 },
                    { from: "m", to: "cm", factor: 100 },
                    { from: "m", to: "mm", factor: 1000 },
                    { from: "cm", to: "mm", factor: 10 }
                ]
            },
            imperial: {
                length: {
                    "mi to ft": 5280,
                    "yd to ft": 3,
                    "ft to in": 12,
                    "yd to in": 36,
                    "mi to yd": 1760
                },
                conversions: [
                    { from: "mi", to: "ft", factor: 5280 },
                    { from: "yd", to: "ft", factor: 3 },
                    { from: "ft", to: "in", factor: 12 }
                ]
            },
            metricImperial: {
                length: {
                    "in to cm": 2.54,
                    "cm to in": 0.3937,
                    "m to ft": 3.2808,
                    "ft to m": 0.3048,
                    "km to mi": 0.6214,
                    "mi to km": 1.6093
                }
            }
        };

        this.unitConversionMethods = {
            sameSystem: "Multiply or divide by appropriate power of 10 (metric) or fixed factor (imperial)",
            crossSystem: "Use conversion factors like 2.54 cm/in or 0.3048 m/ft",
            strategy: "Convert all sides to same unit before calculating perimeter"
        };
    }

    initializeGeometricPropertiesDatabase() {
        this.geometricProperties = {
            triangleInequality: {
                theorem: "The sum of lengths of any two sides must be greater than the length of the third side",
                formula: "a + b > c AND a + c > b AND b + c > a",
                implications: [
                    "Not all combinations of three lengths form valid triangles",
                    "Longest side must be less than sum of other two",
                    "Determines minimum perimeter for given constraints"
                ],
                examples: [
                    { sides: [3, 4, 5], valid: true, reason: "3+4=7>5, 3+5=8>4, 4+5=9>3" },
                    { sides: [2, 3, 10], valid: false, reason: "2+3=5 not >10" }
                ]
            },

            perimeterProperties: {
                minimum: "For fixed area, equilateral triangle has minimum perimeter",
                maximum: "No maximum perimeter for fixed area (can be arbitrarily thin/long)",
                relationship: "Perimeter alone doesn't determine area (many triangles same perimeter, different areas)",
                examples: [
                    "Equilateral with side 6 has P=18, area ≈15.6",
                    "Right triangle 6-8-10 has P=24, area=24",
                    "Different triangles can have same perimeter"
                ]
            },

            semiPerimeter: {
                definition: "Half of perimeter, denoted s = (a+b+c)/2",
                uses: [
                    "Heron's formula for area: A = √[s(s-a)(s-b)(s-c)]",
                    "Radius of inscribed circle: r = A/s",
                    "Various geometric proofs and formulas"
                ],
                significance: "Appears frequently in advanced triangle formulas"
            },

            pythagoreanTheorem: {
                statement: "In right triangle, a² + b² = c² where c is hypotenuse",
                converse: "If a² + b² = c², triangle is right triangle",
                pythagoreanTriples: [
                    [3, 4, 5],
                    [5, 12, 13],
                    [8, 15, 17],
                    [7, 24, 25],
                    [20, 21, 29]
                ],
                scaledTriples: "Multiples of triples are also triples (6-8-10, 9-12-15, etc.)"
            }
        };
    }

    // MAIN SOLVER METHOD
    solveTrianglePerimeterProblem(config) {
        const { description, sides, triangleType, vertices, units, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseTrianglePerimeterProblem(
                description, sides, triangleType, vertices, units, context
            );

            // Solve the problem
            this.currentSolution = this.solveTrianglePerimeterProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateTrianglePerimeterSteps(this.currentProblem, this.currentSolution);

            // Generate graph data if applicable
            this.generateTrianglePerimeterGraphData();

            // Generate workbook
            this.generateTrianglePerimeterWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                perimeter: this.currentSolution?.perimeter,
                perimeterType: this.currentSolution?.type
            };

        } catch (error) {
            throw new Error(`Failed to solve triangle perimeter problem: ${error.message}`);
        }
    }

    parseTrianglePerimeterProblem(description = '', sides = null, triangleType = null, vertices = null, units = null, context = {}) {
        const cleanInput = description ? this.cleanMathExpression(description) : '';

        // If triangle type is specified, use it directly
        if (triangleType && this.trianglePerimeterTypes[triangleType]) {
            return {
                originalInput: description || `${triangleType} problem`,
                cleanInput: cleanInput,
                type: triangleType,
                sides: sides,
                vertices: vertices,
                units: units,
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect triangle perimeter problem type
        for (const [type, config] of Object.entries(this.trianglePerimeterTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput)) {
                    const match = cleanInput.match(pattern);
                    const extractedParams = this.extractTrianglePerimeterParameters(match, type);

                    return {
                        originalInput: description,
                        cleanInput: cleanInput,
                        type: type,
                        sides: sides || extractedParams.sides,
                        vertices: vertices,
                        units: units || extractedParams.units,
                        context: { ...context },
                        match: match,
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        // Default to three_sides_given if sides are provided
        if (sides && sides.length === 3) {
            return {
                originalInput: description || 'Triangle with three sides given',
                cleanInput: cleanInput,
                type: 'three_sides_given',
                sides: sides,
                vertices: vertices,
                units: units,
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize triangle perimeter problem type from: ${description}`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/√/g, 'sqrt')
            .trim();
    }

    extractTrianglePerimeterParameters(match, type) {
        const params = { sides: null, units: null };

        if (!match) return params;

        // Extract based on problem type
        switch(type) {
            case 'three_sides_given':
                if (match[1] && match[2] && match[3]) {
                    params.sides = [
                        parseFloat(match[1]),
                        parseFloat(match[2]),
                        parseFloat(match[3])
                    ];
                }
                break;

            case 'equilateral':
                if (match[1]) {
                    const side = parseFloat(match[1]);
                    params.sides = [side, side, side];
                }
                break;

            case 'equilateral_reverse':
                if (match[1]) {
                    params.perimeter = parseFloat(match[1]);
                }
                break;

            case 'isosceles':
                if (match[1] && match[2]) {
                    const equalSide = parseFloat(match[1]);
                    const base = parseFloat(match[2]);
                    params.sides = [equalSide, equalSide, base];
                }
                break;

            case 'right_triangle_legs':
                if (match[1] && match[2]) {
                    params.legs = [parseFloat(match[1]), parseFloat(match[2])];
                }
                break;

            case 'right_triangle_leg_hypotenuse':
                if (match[1] && match[2]) {
                    params.leg = parseFloat(match[1]);
                    params.hypotenuse = parseFloat(match[2]);
                }
                break;
        }

        return params;
    }

    solveTrianglePerimeterProblem_Internal(problem) {
        const solver = this.trianglePerimeterTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for triangle perimeter problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // TRIANGLE PERIMETER SOLVERS

    solveThreeSidesGiven(problem) {
        const sides = problem.sides || [0, 0, 0];
        const [a, b, c] = sides;

        // Check triangle inequality
        const isValid = this.checkTriangleInequality(a, b, c);

        if (!isValid.valid) {
            return {
                type: 'Triangle Perimeter (Three Sides Given)',
                sides: sides,
                valid: false,
                reason: isValid.reason,
                perimeter: null,
                category: 'basic_perimeter'
            };
        }

        const perimeter = a + b + c;
        const unit = problem.units || 'units';

        return {
            type: 'Triangle Perimeter (Three Sides Given)',
            sides: sides,
            sideA: a,
            sideB: b,
            sideC: c,
            perimeter: perimeter,
            unit: unit,
            formula: `P = a + b + c`,
            calculation: `P = ${a} + ${b} + ${c} = ${perimeter}`,
            valid: true,
            triangleType: this.identifyTriangleType(a, b, c),
            category: 'basic_perimeter'
        };
    }

    solveEquilateral(problem) {
        const side = problem.sides ? problem.sides[0] : 0;
        const perimeter = 3 * side;
        const unit = problem.units || 'units';

        return {
            type: 'Equilateral Triangle Perimeter',
            side: side,
            perimeter: perimeter,
            unit: unit,
            formula: 'P = 3s',
            calculation: `P = 3 × ${side} = ${perimeter}`,
            triangleType: 'equilateral',
            properties: {
                allSidesEqual: true,
                allAngles: '60°',
                symmetry: '3 lines of symmetry'
            },
            category: 'equilateral_perimeter'
        };
    }

    solveEquilateralReverse(problem) {
        const perimeter = problem.perimeter || 0;
        const side = perimeter / 3;
        const unit = problem.units || 'units';

        return {
            type: 'Find Equilateral Side from Perimeter',
            perimeter: perimeter,
            side: side,
            unit: unit,
            formula: 's = P/3',
            calculation: `s = ${perimeter}/3 = ${side}`,
            verification: `P = 3 × ${side} = ${perimeter}`,
            triangleType: 'equilateral',
            category: 'equilateral_perimeter'
        };
    }

    solveIsosceles(problem) {
        const sides = problem.sides || [0, 0, 0];
        const [equalSide1, equalSide2, base] = sides;
        
        // Verify two sides are equal
        const equalSide = equalSide1; // Assuming first two are equal
        const perimeter = 2 * equalSide + base;
        const unit = problem.units || 'units';

        return {
            type: 'Isosceles Triangle Perimeter',
            equalSides: equalSide,
            base: base,
            sides: sides,
            perimeter: perimeter,
            unit: unit,
            formula: 'P = 2a + b',
            calculation: `P = 2(${equalSide}) + ${base} = ${2 * equalSide} + ${base} = ${perimeter}`,
            triangleType: 'isosceles',
            properties: {
                twoSidesEqual: true,
                baseAnglesEqual: true,
                symmetry: '1 line of symmetry'
            },
            category: 'isosceles_perimeter'
        };
    }

    solveRightTriangleLegs(problem) {
        const legs = problem.legs || [0, 0];
        const [a, b] = legs;
        
        // Calculate hypotenuse using Pythagorean theorem
        const cSquared = a * a + b * b;
        const c = Math.sqrt(cSquared);
        
        const perimeter = a + b + c;
        const unit = problem.units || 'units';

        return {
            type: 'Right Triangle Perimeter (Given Legs)',
            legA: a,
            legB: b,
            hypotenuse: c,
            sides: [a, b, c],
            perimeter: perimeter,
            unit: unit,
            pythagoreanCalculation: `c² = ${a}² + ${b}² = ${a*a} + ${b*b} = ${cSquared}`,
            hypotenuseCalculation: `c = √${cSquared} = ${c}`,
            perimeterFormula: 'P = a + b + c',
            perimeterCalculation: `P = ${a} + ${b} + ${c} = ${perimeter}`,
            triangleType: 'right',
            category: 'right_triangle_perimeter'
        };
    }

    solveRightTriangleLegHypotenuse(problem) {
        const leg = problem.leg || 0;
        const hypotenuse = problem.hypotenuse || 0;
        
        // Calculate other leg using Pythagorean theorem: a² = c² - b²
        const otherLegSquared = hypotenuse * hypotenuse - leg * leg;
        const otherLeg = Math.sqrt(otherLegSquared);
        
        const perimeter = leg + otherLeg + hypotenuse;
        const unit = problem.units || 'units';

        return {
            type: 'Right Triangle Perimeter (Leg and Hypotenuse)',
            givenLeg: leg,
            hypotenuse: hypotenuse,
            calculatedLeg: otherLeg,
            sides: [leg, otherLeg, hypotenuse],
            perimeter: perimeter,
            unit: unit,
            pythagoreanCalculation: `a² = ${hypotenuse}² - ${leg}² = ${hypotenuse*hypotenuse} - ${leg*leg} = ${otherLegSquared}`,
            legCalculation: `a = √${otherLegSquared} = ${otherLeg}`,
            perimeterFormula: 'P = a + b + c',
            perimeterCalculation: `P = ${leg} + ${otherLeg} + ${hypotenuse} = ${perimeter}`,
            triangleType: 'right',
            category: 'right_triangle_perimeter'
        };
    }

    solvePerimeterFindSides(problem) {
        return {
            type: 'Find Sides Given Perimeter',
            approach: 'Set up equation using given perimeter and relationships between sides',
            note: 'Requires additional information about side relationships',
            category: 'perimeter_word_problems'
        };
    }

    solveCoordinateTriangle(problem) {
        const vertices = problem.vertices || [[0,0], [0,0], [0,0]];
        
        if (vertices.length !== 3) {
            throw new Error('Need exactly three vertices for triangle');
        }

        const [A, B, C] = vertices;
        
        // Calculate distances using distance formula
        const AB = this.calculateDistance(A, B);
        const BC = this.calculateDistance(B, C);
        const CA = this.calculateDistance(C, A);
        
        const perimeter = AB + BC + CA;

        return {
            type: 'Triangle Perimeter from Coordinates',
            vertices: vertices,
            vertexA: A,
            vertexB: B,
            vertexC: C,
            sideAB: AB,
            sideBC: BC,
            sideCA: CA,
            sides: [AB, BC, CA],
            perimeter: perimeter,
            unit: 'units',
            distanceFormula: 'd = √[(x₂-x₁)² + (y₂-y₁)²]',
            calculations: {
                AB: `√[(${B[0]}-${A[0]})² + (${B[1]}-${A[1]})²] = ${AB}`,
                BC: `√[(${C[0]}-${B[0]})² + (${C[1]}-${B[1]})²] = ${BC}`,
                CA: `√[(${A[0]}-${C[0]})² + (${A[1]}-${C[1]})²] = ${CA}`
            },
            perimeterCalculation: `P = ${AB} + ${BC} + ${CA} = ${perimeter}`,
            category: 'perimeter_from_coordinates'
        };
    }

    solveMixedUnits(problem) {
        return {
            type: 'Triangle Perimeter with Unit Conversion',
            approach: 'Convert all sides to same unit, then add',
            note: 'Requires unit conversion before calculating perimeter',
            category: 'unit_conversion_perimeter'
        };
    }

    solveTriangleInequality(problem) {
        const sides = problem.sides || [0, 0, 0];
        const [a, b, c] = sides;
        
        const check = this.checkTriangleInequality(a, b, c);

        return {
            type: 'Triangle Inequality Verification',
            sides: sides,
            valid: check.valid,
            reason: check.reason,
            inequalities: check.inequalities,
            conclusion: check.valid ? 'These sides can form a valid triangle' : 'These sides cannot form a valid triangle',
            category: 'triangle_inequality'
        };

       }

    solveSemiPerimeter(problem) {
        const sides = problem.sides || [0, 0, 0];
        const [a, b, c] = sides;
        
        const perimeter = a + b + c;
        const semiPerimeter = perimeter / 2;
        const unit = problem.units || 'units';

        return {
            type: 'Semi-Perimeter Calculation',
            sides: sides,
            perimeter: perimeter,
            semiPerimeter: semiPerimeter,
            unit: unit,
            formula: 's = (a + b + c)/2',
            calculation: `s = (${a} + ${b} + ${c})/2 = ${perimeter}/2 = ${semiPerimeter}`,
            uses: [
                'Heron\'s formula for area',
                'Inscribed circle radius calculation',
                'Various geometric proofs'
            ],
            category: 'semi_perimeter'
        };
    }

    // HELPER METHODS

    checkTriangleInequality(a, b, c) {
        const check1 = a + b > c;
        const check2 = a + c > b;
        const check3 = b + c > a;

        const allValid = check1 && check2 && check3;

        return {
            valid: allValid,
            inequalities: {
                'a + b > c': { check: `${a} + ${b} > ${c}`, result: check1, value: `${a + b} > ${c}` },
                'a + c > b': { check: `${a} + ${c} > ${b}`, result: check2, value: `${a + c} > ${b}` },
                'b + c > a': { check: `${b} + ${c} > ${a}`, result: check3, value: `${b + c} > ${a}` }
            },
            reason: allValid ? 
                'All three triangle inequalities are satisfied' : 
                'One or more triangle inequalities are not satisfied'
        };
    }

    identifyTriangleType(a, b, c) {
        // Check if equilateral
        if (Math.abs(a - b) < 1e-9 && Math.abs(b - c) < 1e-9) {
            return 'equilateral';
        }
        
        // Check if isosceles
        if (Math.abs(a - b) < 1e-9 || Math.abs(b - c) < 1e-9 || Math.abs(a - c) < 1e-9) {
            return 'isosceles';
        }
        
        // Check if right triangle (Pythagorean theorem)
        const sides = [a, b, c].sort((x, y) => x - y);
        const [s1, s2, s3] = sides;
        if (Math.abs(s1*s1 + s2*s2 - s3*s3) < 1e-9) {
            return 'right';
        }
        
        return 'scalene';
    }

    calculateDistance(point1, point2) {
        const [x1, y1] = point1;
        const [x2, y2] = point2;
        
        const dx = x2 - x1;
        const dy = y2 - y1;
        
        return Math.sqrt(dx * dx + dy * dy);
    }

    // STEP GENERATION

    generateTrianglePerimeterSteps(problem, solution) {
        let baseSteps = this.generateBaseTrianglePerimeterSteps(problem, solution);

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

    generateBaseTrianglePerimeterSteps(problem, solution) {
        const { type } = problem;
        const category = this.trianglePerimeterTypes[type]?.category;

        switch(category) {
            case 'basic_perimeter':
                return this.generateBasicPerimeterSteps(problem, solution);
            case 'equilateral_perimeter':
                return this.generateEquilateralPerimeterSteps(problem, solution);
            case 'isosceles_perimeter':
                return this.generateIsoscelesPerimeterSteps(problem, solution);
            case 'right_triangle_perimeter':
                return this.generateRightTrianglePerimeterSteps(problem, solution);
            case 'perimeter_from_coordinates':
                return this.generateCoordinatePerimeterSteps(problem, solution);
            case 'unit_conversion_perimeter':
                return this.generateUnitConversionPerimeterSteps(problem, solution);
            case 'triangle_inequality':
                return this.generateTriangleInequalitySteps(problem, solution);
            case 'semi_perimeter':
                return this.generateSemiPerimeterSteps(problem, solution);
            default:
                return this.generateGenericPerimeterSteps(problem, solution);
        }
    }

    generateBasicPerimeterSteps(problem, solution) {
        const steps = [];
        
        // Step 1: Identify the three sides
        steps.push({
            stepNumber: 1,
            step: 'Identify the three sides',
            description: 'List all three side lengths of the triangle',
            sides: solution.sides,
            expression: `a = ${solution.sideA}, b = ${solution.sideB}, c = ${solution.sideC}`,
            reasoning: 'A triangle has three sides, and we need all three to find the perimeter',
            goalStatement: 'We need to know the length of each side of the triangle',
            visualHint: 'Draw the triangle and label each side with its length'
        });

        // Step 2: Apply perimeter formula
        steps.push({
            stepNumber: 2,
            step: 'Apply perimeter formula',
            description: 'Perimeter is the sum of all three sides',
            formula: solution.formula,
            beforeExpression: `P = a + b + c`,
            substitution: `P = ${solution.sideA} + ${solution.sideB} + ${solution.sideC}`,
            reasoning: 'Perimeter represents the total distance around the triangle',
            algebraicRule: 'Perimeter of triangle: P = a + b + c',
            conceptualMeaning: 'Adding all sides gives us the total boundary length'
        });

        // Step 3: Calculate the sum
        steps.push({
            stepNumber: 3,
            step: 'Calculate the sum',
            description: 'Add the three numbers together',
            beforeExpression: `P = ${solution.sideA} + ${solution.sideB} + ${solution.sideC}`,
            calculation: solution.calculation,
            afterExpression: `P = ${solution.perimeter} ${solution.unit}`,
            reasoning: 'Simple arithmetic addition gives us the total perimeter',
            finalAnswer: true
        });

        // Step 4: Verify and state answer
        steps.push({
            stepNumber: 4,
            step: 'State final answer',
            description: 'Express the perimeter with appropriate units',
            expression: `Perimeter = ${solution.perimeter} ${solution.unit}`,
            verification: `Check: ${solution.perimeter} > ${solution.sideA}, ${solution.perimeter} > ${solution.sideB}, ${solution.perimeter} > ${solution.sideC} ✓`,
            reasoning: 'Perimeter should always be greater than any individual side',
            finalAnswer: true,
            conclusion: `The perimeter of the triangle is ${solution.perimeter} ${solution.unit}`
        });

        return steps;
    }

    generateEquilateralPerimeterSteps(problem, solution) {
        const steps = [];

        if (problem.type === 'equilateral_reverse') {
            // Finding side from perimeter
            
            steps.push({
                stepNumber: 1,
                step: 'Understand the problem',
                description: 'We know the perimeter and need to find the side length',
                given: `Perimeter = ${solution.perimeter} ${solution.unit}`,
                find: 'Side length s',
                reasoning: 'In an equilateral triangle, all three sides are equal',
                property: 'Equilateral triangle: all sides equal'
            });

            steps.push({
                stepNumber: 2,
                step: 'Use the formula',
                description: 'For equilateral triangle: s = P/3',
                formula: solution.formula,
                reasoning: 'Since P = 3s, we divide perimeter by 3 to find one side',
                algebraicRule: 'Division is inverse of multiplication'
            });

            steps.push({
                stepNumber: 3,
                step: 'Calculate side length',
                description: 'Divide perimeter by 3',
                calculation: solution.calculation,
                expression: `s = ${solution.side} ${solution.unit}`,
                reasoning: 'This gives us the length of each equal side',
                finalAnswer: true
            });

            steps.push({
                stepNumber: 4,
                step: 'Verify the answer',
                description: 'Check by multiplying back',
                verification: solution.verification,
                conclusion: `Each side of the equilateral triangle is ${solution.side} ${solution.unit}`,
                finalAnswer: true
            });

        } else {
            // Finding perimeter from side
            
            steps.push({
                stepNumber: 1,
                step: 'Identify triangle type',
                description: 'This is an equilateral triangle',
                given: `Side length = ${solution.side} ${solution.unit}`,
                property: 'All three sides are equal',
                reasoning: 'Equilateral means all sides have the same length',
                visualHint: 'Draw an equilateral triangle with all sides labeled the same'
            });

            steps.push({
                stepNumber: 2,
                step: 'Use equilateral formula',
                description: 'For equilateral triangle: P = 3s',
                formula: solution.formula,
                reasoning: 'Since all three sides equal s, perimeter is 3 times s',
                algebraicRule: 'P = s + s + s = 3s'
            });

            steps.push({
                stepNumber: 3,
                step: 'Calculate perimeter',
                description: 'Multiply side length by 3',
                calculation: solution.calculation,
                expression: `P = ${solution.perimeter} ${solution.unit}`,
                reasoning: 'Multiplying by 3 adds the three equal sides',
                finalAnswer: true
            });

            steps.push({
                stepNumber: 4,
                step: 'State final answer',
                description: 'The perimeter with units',
                expression: `Perimeter = ${solution.perimeter} ${solution.unit}`,
                conclusion: `The perimeter of the equilateral triangle is ${solution.perimeter} ${solution.unit}`,
                finalAnswer: true
            });
        }

        return steps;
    }

    generateIsoscelesPerimeterSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify triangle type and sides',
            description: 'This is an isosceles triangle with two equal sides',
            given: `Equal sides = ${solution.equalSides} ${solution.unit}, Base = ${solution.base} ${solution.unit}`,
            property: 'Isosceles triangle: two sides equal, one different',
            reasoning: 'The two equal sides are called legs, the different side is the base',
            visualHint: 'Draw isosceles triangle with two sides marked equal'
        });

        steps.push({
            stepNumber: 2,
            step: 'Apply isosceles formula',
            description: 'For isosceles: P = 2a + b (where a = equal side, b = base)',
            formula: solution.formula,
            reasoning: 'We add the equal side twice, plus the base once',
            algebraicRule: 'P = a + a + b = 2a + b'
        });

        steps.push({
            stepNumber: 3,
            step: 'Substitute values',
            description: 'Plug in the known values',
            beforeExpression: `P = 2(${solution.equalSides}) + ${solution.base}`,
            reasoning: 'Replace variables with actual measurements',
            substitution: `P = ${2 * solution.equalSides} + ${solution.base}`
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate perimeter',
            description: 'Perform the addition',
            calculation: solution.calculation,
            expression: `P = ${solution.perimeter} ${solution.unit}`,
            reasoning: 'Add the products and base together',
            finalAnswer: true
        });

        steps.push({
            stepNumber: 5,
            step: 'State final answer',
            description: 'Express perimeter with units',
            expression: `Perimeter = ${solution.perimeter} ${solution.unit}`,
            conclusion: `The perimeter of the isosceles triangle is ${solution.perimeter} ${solution.unit}`,
            finalAnswer: true
        });

        return steps;
    }

    generateRightTrianglePerimeterSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify given information',
            description: 'Identify what we know about the right triangle',
            given: solution.type.includes('Legs') ? 
                `Legs: a = ${solution.legA}, b = ${solution.legB}` :
                `Leg = ${solution.givenLeg}, Hypotenuse = ${solution.hypotenuse}`,
            find: solution.type.includes('Legs') ? 'Hypotenuse and perimeter' : 'Other leg and perimeter',
            reasoning: 'A right triangle has two legs and a hypotenuse (longest side)',
            property: 'Right triangle: one 90° angle',
            visualHint: 'Draw right triangle with right angle marked'
        });

        steps.push({
            stepNumber: 2,
            step: 'Apply Pythagorean theorem',
            description: 'Use a² + b² = c² to find missing side',
            formula: 'a² + b² = c²',
            calculation: solution.pythagoreanCalculation || solution.pythagoreanCalculation,
            reasoning: 'Pythagorean theorem relates the three sides of a right triangle',
            algebraicRule: 'In right triangle: (leg₁)² + (leg₂)² = (hypotenuse)²'
        });

        steps.push({
            stepNumber: 3,
            step: 'Solve for missing side',
            description: 'Calculate the unknown side length',
            beforeExpression: solution.type.includes('Legs') ? 
                `c² = ${solution.legA * solution.legA + solution.legB * solution.legB}` :
                `a² = ${solution.hypotenuse * solution.hypotenuse - solution.givenLeg * solution.givenLeg}`,
            calculation: solution.hypotenuseCalculation || solution.legCalculation,
            afterExpression: solution.type.includes('Legs') ?
                `c = ${solution.hypotenuse}` :
                `a = ${solution.calculatedLeg}`,
            reasoning: 'Taking square root gives us the side length',
            algebraicRule: 'If x² = n, then x = √n'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate perimeter',
            description: 'Add all three sides together',
            formula: solution.perimeterFormula,
            calculation: solution.perimeterCalculation,
            expression: `P = ${solution.perimeter} ${solution.unit}`,
            reasoning: 'Perimeter is sum of both legs and hypotenuse',
            finalAnswer: true
        });

        steps.push({
            stepNumber: 5,
            step: 'State final answer',
            description: 'Express the perimeter with units',
            expression: `Perimeter = ${solution.perimeter} ${solution.unit}`,
            sides: `Sides are: ${solution.sides.join(', ')}`,
            conclusion: `The perimeter of the right triangle is ${solution.perimeter} ${solution.unit}`,
            finalAnswer: true
        });

        return steps;
    }

    generateCoordinatePerimeterSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify the vertices',
            description: 'List the three coordinate points',
            vertices: solution.vertices,
            expression: `A${solution.vertexA}, B${solution.vertexB}, C${solution.vertexC}`,
            reasoning: 'These three points form the vertices of the triangle',
            visualHint: 'Plot the three points on a coordinate grid'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate distance AB',
            description: 'Find length of side AB using distance formula',
            formula: solution.distanceFormula,
            calculation: solution.calculations.AB,
            result: `AB = ${solution.sideAB}`,
            reasoning: 'Distance formula gives straight-line distance between two points',
            algebraicRule: 'd = √[(x₂-x₁)² + (y₂-y₁)²]'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate distance BC',
            description: 'Find length of side BC using distance formula',
            formula: solution.distanceFormula,
            calculation: solution.calculations.BC,
            result: `BC = ${solution.sideBC}`,
            reasoning: 'Apply same distance formula for second side'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate distance CA',
            description: 'Find length of side CA using distance formula',
            formula: solution.distanceFormula,
            calculation: solution.calculations.CA,
            result: `CA = ${solution.sideCA}`,
            reasoning: 'Apply distance formula for third side'
        });

        steps.push({
            stepNumber: 5,
            step: 'Calculate perimeter',
            description: 'Add all three side lengths',
            beforeExpression: `P = AB + BC + CA`,
            calculation: solution.perimeterCalculation,
            expression: `P = ${solution.perimeter} ${solution.unit}`,
            reasoning: 'Perimeter is sum of all three sides',
            finalAnswer: true
        });

        steps.push({
            stepNumber: 6,
            step: 'State final answer',
            description: 'Express the perimeter',
            expression: `Perimeter = ${solution.perimeter} ${solution.unit}`,
            conclusion: `The perimeter of the triangle is ${solution.perimeter} ${solution.unit}`,
            finalAnswer: true
        });

        return steps;
    }

    generateUnitConversionPerimeterSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify mixed units',
            description: 'Recognize that sides are in different units',
            note: 'Cannot add measurements in different units',
            reasoning: 'Units must be consistent before performing arithmetic'
        });

        steps.push({
            stepNumber: 2,
            step: 'Choose target unit',
            description: 'Decide which unit to convert all measurements to',
            reasoning: 'Usually choose the most convenient unit or the one requested in the problem'
        });

        steps.push({
            stepNumber: 3,
            step: 'Convert all sides',
            description: 'Convert each side to the target unit',
            reasoning: 'Apply appropriate conversion factors',
            note: 'Be careful with conversion factors - multiply or divide as needed'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate perimeter',
            description: 'Add the converted side lengths',
            reasoning: 'Now that all sides are in same unit, we can add them',
            finalAnswer: true
        });

        return steps;
    }

    generateTriangleInequalitySteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'State triangle inequality theorem',
            description: 'The sum of any two sides must be greater than the third side',
            theorem: 'For sides a, b, c: a+b>c AND a+c>b AND b+c>a',
            reasoning: 'This is a fundamental requirement for three lengths to form a triangle'
        });

        steps.push({
            stepNumber: 2,
            step: 'Check first inequality',
            description: `Check if ${solution.sides[0]} + ${solution.sides[1]} > ${solution.sides[2]}`,
            calculation: solution.inequalities['a + b > c'].value,
            result: solution.inequalities['a + b > c'].result ? 'True ✓' : 'False ✗',
            reasoning: 'First condition of triangle inequality'
        });

        steps.push({
            stepNumber: 3,
            step: 'Check second inequality',
            description: `Check if ${solution.sides[0]} + ${solution.sides[2]} > ${solution.sides[1]}`,
            calculation: solution.inequalities['a + c > b'].value,
            result: solution.inequalities['a + c > b'].result ? 'True ✓' : 'False ✗',
            reasoning: 'Second condition of triangle inequality'
        });

        steps.push({
            stepNumber: 4,
            step: 'Check third inequality',
            description: `Check if ${solution.sides[1]} + ${solution.sides[2]} > ${solution.sides[0]}`,
            calculation: solution.inequalities['b + c > a'].value,
            result: solution.inequalities['b + c > a'].result ? 'True ✓' : 'False ✗',
            reasoning: 'Third condition of triangle inequality'
        });

        steps.push({
            stepNumber: 5,
            step: 'State conclusion',
            description: solution.valid ? 'All inequalities satisfied' : 'At least one inequality failed',
            conclusion: solution.conclusion,
            reasoning: solution.reason,
            finalAnswer: true
        });

        return steps;
    }

    generateSemiPerimeterSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Calculate perimeter',
            description: 'First find the full perimeter',
            formula: 'P = a + b + c',
            calculation: `P = ${solution.sides[0]} + ${solution.sides[1]} + ${solution.sides[2]} = ${solution.perimeter}`,
            reasoning: 'Semi-perimeter is based on the full perimeter'
        });

        steps.push({
            stepNumber: 2,
            step: 'Apply semi-perimeter formula',
            description: 'Semi-perimeter is half of the perimeter',
            formula: solution.formula,
            reasoning: '"Semi" means half, so we divide perimeter by 2'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate semi-perimeter',
            description: 'Divide perimeter by 2',
            calculation: solution.calculation,
            expression: `s = ${solution.semiPerimeter} ${solution.unit}`,
            reasoning: 'This gives us the semi-perimeter',
            finalAnswer: true
        });

        steps.push({
            stepNumber: 4,
            step: 'Note applications',
            description: 'Semi-perimeter is used in various formulas',
            uses: solution.uses,
            note: 'Semi-perimeter appears in Heron\'s formula and other geometric calculations',
            finalAnswer: true
        });

        return steps;
    }

    generateGenericPerimeterSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Triangle perimeter calculation',
            description: 'Calculate perimeter using appropriate method',
            reasoning: 'Apply triangle perimeter technique based on given information',
            solution: solution
        }];
    }

    // ENHANCED EXPLANATION METHODS (Shared with Linear class - adapted for triangle context)

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
            'Identify the three sides': 'Every triangle has exactly three sides. To find the perimeter (distance around), we need to know all three side lengths.',
            'Apply perimeter formula': 'Perimeter means "distance around." For a triangle, this is simply the sum of all three sides - like measuring the total length if you walked along each edge.',
            'Calculate the sum': 'Adding the three side lengths gives us the total distance around the triangle.',
            'Apply Pythagorean theorem': 'The Pythagorean theorem is a special relationship in right triangles that lets us find an unknown side when we know the other two.',
            'Use equilateral formula': 'In an equilateral triangle, all sides are equal, so we can simply multiply one side by 3 instead of adding three identical numbers.',
            'Calculate distance AB': 'The distance formula comes from the Pythagorean theorem applied to coordinate geometry - it finds the straight-line distance between two points.',
            'Convert all sides': 'To add measurements, they must be in the same unit - just like you can\'t add apples and oranges without converting them to the same thing first.'
        };

        return conceptualExplanations[step.step] || 'This step helps us progress toward finding the perimeter of the triangle.';
    }

    getProceduralExplanationTriangle(step) {
        const procedures = {
            'Identify the three sides': '1. List side a\n2. List side b\n3. List side c\n4. Verify you have all three',
            'Apply perimeter formula': '1. Write P = a + b + c\n2. Substitute known values\n3. Prepare to add',
            'Calculate the sum': '1. Add first two numbers\n2. Add third number to result\n3. Write final sum',
            'Apply Pythagorean theorem': '1. Square each leg\n2. Add the squares\n3. Take square root for hypotenuse',
            'Calculate distance AB': '1. Find difference in x-coordinates\n2. Find difference in y-coordinates\n3. Square both differences\n4. Add squares\n5. Take square root'
        };

        return procedures[step.step] || 'Follow standard procedure for this step';
    }

    getVisualExplanationTriangle(step, problem) {
        const visualExplanations = {
            'basic_perimeter': 'Imagine tracing your finger around all three sides of the triangle - that path length is the perimeter',
            'equilateral_perimeter': 'Picture three identical sticks arranged in a triangle - the total length is 3 times one stick',
            'isosceles_perimeter': 'Visualize two matching sides (like the legs of a person) and one different side (the base)',
            'right_triangle_perimeter': 'See the right angle corner (like a book corner), with three sides forming a path around',
            'coordinate_triangle': 'Picture a treasure map with three points marked - measure distance between each pair'
        };

        const category = this.trianglePerimeterTypes[problem.type]?.category;
        return visualExplanations[category] || 'Visualize the triangle and its three sides forming a closed path';
    }

    getAlgebraicExplanationTriangle(step) {
        const algebraicRules = {
            'Apply perimeter formula': 'Definition: Perimeter P = a + b + c where a, b, c are side lengths',
            'Apply Pythagorean theorem': 'Theorem: a² + b² = c² for right triangle with legs a, b and hypotenuse c',
            'Use equilateral formula': 'Property: If all sides equal s, then P = 3s',
            'Use isosceles formula': 'Property: If two sides equal a and base equals b, then P = 2a + b',
            'Calculate distance AB': 'Distance Formula: d = √[(x₂-x₁)² + (y₂-y₁)²]'
        };

        return algebraicRules[step.step] || step.algebraicRule || 'Apply standard geometric principles';
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
            'Identify the three sides': "A triangle is like a piece of pizza! It has three edges. We need to know how long each edge is.",
            'Apply perimeter formula': "Perimeter is like walking around the triangle. We add up how far we walk on each side!",
            'Calculate the sum': "Now we just count up all the lengths together - like adding up how many candies you have!",
            'Apply Pythagorean theorem': "In a right triangle (one with a perfect corner), there's a magic rule that helps us find the longest side!",
            'Use equilateral formula': "All three sides are the same, like three identical crayons! So we just multiply one side by 3.",
            'Calculate distance AB': "It's like measuring how far you'd walk to get from one dot to another on a map!"
        };

        return ELI5Explanations[step.step] || "We're taking another step to find how far it is around the triangle!";
    }

    findRelevantAnalogyTriangle(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            const category = this.trianglePerimeterTypes[problem.type]?.category;
            if (analogy.suitableFor.includes(category) || analogy.suitableFor.includes('all_types')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of it like measuring a fence around a triangular yard!";
    }

    convertToSimpleLanguageTriangle(description) {
        const simplifications = {
            'perimeter': 'distance around',
            'hypotenuse': 'longest side',
            'leg': 'shorter side',
            'equilateral': 'all sides same',
            'isosceles': 'two sides same',
            'scalene': 'all sides different',
            'vertex': 'corner',
            'coordinate': 'point on a map',
            'theorem': 'math rule',
            'formula': 'math recipe'
        };

        let simple = description;
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp(term, 'gi');
            simple = simple.replace(regex, replacement);
        }

        return simple;
    }

    suggestVisualizationTriangle(step) {
        const visualizations = {
            'Identify the three sides': 'Draw a triangle and point to each of its three sides, labeling them',
            'Apply perimeter formula': 'Show arrows going around all three sides of the triangle',
            'Calculate the sum': 'Draw three line segments and show them being placed end-to-end',
            'Apply Pythagorean theorem': 'Draw squares on each side of the right triangle to show a² + b² = c²',
            'Use equilateral formula': 'Draw three identical sticks arranged in a triangle shape',
            'Calculate distance AB': 'Draw a coordinate grid with two points and the line connecting them'
        };

        return visualizations[step.step] || 'Draw the triangle and label all measurements';
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
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression || currentStep.result}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary because: ${this.explainStepNecessityTriangle(currentStep, nextStep)}`,
            howItHelps: `This will help by: ${this.explainStepBenefitTriangle(nextStep)}`
        };
    }

    explainStepProgressionTriangle(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue toward finding the perimeter`;
    }

    explainStepStrategyTriangle(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
    }

    explainStepNecessityTriangle(currentStep, nextStep) {
        return `we need to continue the process of finding the total perimeter`;
    }

    explainStepBenefitTriangle(nextStep) {
        return `bringing us closer to the final perimeter value`;
    }

    addErrorPrevention(step, problemType) {
        const category = this.trianglePerimeterTypes[problemType]?.category || 'basic_perimeter';
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
            'Identify the three sides': [
                'Make sure you have exactly three side lengths',
                'Check that all measurements are in the same units',
                'Verify each side length is positive'
            ],
            'Apply perimeter formula': [
                'Remember: P = a + b + c (all three sides)',
                'Don\'t forget any of the three sides',
                'Write the formula before substituting'
            ],
            'Calculate the sum': [
                'Double-check your arithmetic',
                'Make sure you\'re adding, not multiplying',
                'Keep track of decimal places'
            ],
            'Apply Pythagorean theorem': [
                'Remember to square before adding',
                'Don\'t forget to take the square root at the end',
                'Check that you\'re using the right triangle formula'
            ]
        };

        return tips[step.step] || ['Work carefully and check your work'];
    }

    generateCheckPointsTriangle(step) {
        return [
            'Did I use all three sides of the triangle?',
            'Are my units consistent?',
            'Did I perform the correct operation (addition for perimeter)?',
            'Does my answer make sense (perimeter > any single side)?'
        ];
    }

    identifyWarningFlagsTriangle(step, problemType) {
        const warnings = {
            basic_perimeter: step.step === 'Calculate the sum' ?
                ['Watch for decimal place errors', 'Ensure all three sides are included'] : [],
            right_triangle_perimeter: step.step === 'Apply Pythagorean theorem' ?
                ['Don\'t forget to take square root', 'Square first, then add'] : [],
            unit_conversion_perimeter: step.step === 'Convert all sides' ?
                ['Use correct conversion factor', 'Convert in the right direction'] : []
        };

        const category = this.trianglePerimeterTypes[problemType]?.category || 'basic_perimeter';
        return warnings[category] || [];
    }

    generateSelfCheckQuestionTriangle(step) {
        const questions = {
            'Identify the three sides': 'Do I have all three side lengths?',
            'Apply perimeter formula': 'Am I adding all three sides together?',
            'Calculate the sum': 'Did I add correctly and include units?',
            'Apply Pythagorean theorem': 'Did I square both legs, add them, then take the square root?',
            'Use equilateral formula': 'Did I multiply by 3 (not 2)?',
            'Calculate distance AB': 'Did I use the distance formula correctly with both coordinates?'
        };

        return questions[step.step] || 'Does this step make sense and move me toward the perimeter?';
    }

    describeExpectedResultTriangle(step) {
        const expectations = {
            'Identify the three sides': 'Three positive numbers representing side lengths',
            'Apply perimeter formula': 'Setup showing P = a + b + c with values',
            'Calculate the sum': 'A single number with units representing total perimeter',
            'Apply Pythagorean theorem': 'The length of the missing side',
            'Calculate distance AB': 'A positive distance value'
        };

        return expectations[step.step] || 'Progress toward finding the perimeter';
    }

    generateTroubleshootingTipsTriangle(step) {
        return [
            'If stuck, draw a diagram of the triangle',
            'Label all known sides and what you need to find',
            'Check that units are consistent',
            'Verify you\'re using the correct formula for the triangle type',
            'Double-check arithmetic calculations'
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
            'Identify the three sides': [
                'How many sides does every triangle have?',
                'Can you name or label each side?',
                'Are all the measurements in the same unit?'
            ],
            'Apply perimeter formula': [
                'What does perimeter mean?',
                'How do we find the total distance around a shape?',
                'What operation combines all the sides?'
            ],
            'Calculate the sum': [
                'What is a + b + c?',
                'Did you add all three numbers?',
                'What units should the answer have?'
            ],
            'Apply Pythagorean theorem': [
                'What type of triangle is this?',
                'Which side is the hypotenuse?',
                'What is the Pythagorean theorem formula?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'What information do I have?'];
    }

    breakIntoSubStepsTriangle(step) {
        if (step.step === 'Apply Pythagorean theorem') {
            return [
                'Square the first leg',
                'Square the second leg',
                'Add the two squares',
                'Take the square root of the sum',
                'This is the hypotenuse length'
            ];
        }

        if (step.step === 'Calculate the sum') {
            return [
                'Add the first two sides',
                'Add the third side to that result',
                'Write the final sum with units'
            ];
        }

        return ['Understand what to do', 'Apply the technique', 'Verify the result'];
    }

    generateProgressiveHintsTriangle(step, problem) {
        const category = this.trianglePerimeterTypes[problem.type]?.category || 'basic_perimeter';
        const hintSet = this.hints[category] || this.hints.basic_perimeter;

        return {
            level1: hintSet.level1 || 'Think about what information you have',
            level2: hintSet.level2 || 'Consider what formula or operation is needed',
            level3: hintSet.level3 || 'Apply the appropriate formula',
            level4: hintSet.level4 || 'Calculate the final answer'
        };
    }

    generatePracticeVariationTriangle(step, problem) {
        return {
            similarProblem: 'Try finding perimeter of a triangle with different side lengths',
            practiceHint: 'Start with whole numbers before trying decimals or fractions',
            extension: 'Try finding perimeter of different triangle types (equilateral, isosceles, right)'
        };
    }

    explainThinkingProcessTriangle(step) {
        return {
            observe: 'What information do I have about the triangle?',
            goal: 'What am I trying to find?',
            strategy: 'What formula or method should I use?',
            execute: 'How do I perform this calculation correctly?',
            verify: 'Does my result make sense for a triangle perimeter?'
        };
    }

    identifyDecisionPointsTriangle(step) {
        return [
            'What type of triangle is this?',
            'What information is given vs. what needs to be calculated?',
            'Are all measurements in the same units?',
            'Do I need to find a missing side first?'
        ];
    }

    suggestAlternativeMethodsTriangle(step, problem) {
        const alternatives = {
            'Calculate the sum': [
                'Could use a calculator for accuracy',
                'Could add in different order (commutative property)',
                'Could group two sides first, then add third'
            ],
            'Apply Pythagorean theorem': [
                'Could use Pythagorean triples if applicable (3-4-5, etc.)',
                'Could verify with inverse Pythagorean check',
                'Could use geometric construction'
            ]
        };

        return alternatives[step.step] || ['The chosen method is appropriate'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by continuing the perimeter calculation`,
            progression: 'We are moving toward the final perimeter value',
            relationship: 'Each step brings us closer to knowing the total distance around the triangle'
        };
    }

    identifyPrerequisitesTriangle(step, problemType) {
        const category = this.trianglePerimeterTypes[problemType]?.category || 'basic_perimeter';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Basic arithmetic', 'Understanding of triangles'];
    }

    identifyKeyVocabularyTriangle(step) {
        const vocabulary = {
            'Identify the three sides': ['triangle', 'side', 'length', 'measurement'],
            'Apply perimeter formula': ['perimeter', 'formula', 'sum', 'distance around'],
            'Apply Pythagorean theorem': ['Pythagorean theorem', 'hypotenuse', 'leg', 'square root'],
            'Use equilateral formula': ['equilateral', 'equal sides', 'multiply'],
            'Calculate distance AB': ['distance formula', 'coordinates', 'vertices']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPromptsTriangle(step) {
        return {
            before: 'Before I start, what do I need to know about this triangle?',
            during: 'As I work, am I using the correct formula for this triangle type?',
            after: 'After calculating, does my perimeter make sense (larger than any single side)?'
        };
    }

    findRealWorldConnectionTriangle(step, problem) {
        const connections = {
            'basic_perimeter': 'Like measuring how much fencing you need for a triangular garden',
            'equilateral_perimeter': 'Like finding the border length for a triangular traffic sign',
            'isosceles_perimeter': 'Like calculating trim needed for a triangular roof section',
            'right_triangle_perimeter': 'Like finding total lumber needed for a right-angled corner brace'
        };

        const category = this.trianglePerimeterTypes[problem.type]?.category;
        return connections[category] || 'Finding perimeter helps solve real problems involving triangular boundaries';
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
                'perimeter': 'distance around',
                'hypotenuse': 'longest side',
                'theorem': 'rule',
                'formula': 'equation'
            },
            intermediate: {
                'perimeter': 'perimeter',
                'hypotenuse': 'hypotenuse',
                'theorem': 'theorem',
                'formula': 'formula'
            },
            ELI5: {
                'perimeter': 'how far around',
                'hypotenuse': 'the longest side',
                'theorem': 'math rule',
                'formula': 'math recipe',
                'calculate': 'figure out',
                'apply': 'use'
            },
            detailed: {
                'perimeter': 'perimeter (total boundary distance)',
                'hypotenuse': 'hypotenuse (side opposite right angle)',
                'theorem': 'theorem (proven mathematical statement)',
                'formula': 'formula (mathematical relationship)'
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

    // GRAPH GENERATION

    generateTrianglePerimeterGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        if (this.currentSolution.sides && this.currentSolution.perimeter) {
            this.graphData = this.generateTriangleVisualization(this.currentProblem, this.currentSolution);
        }
    }

    generateTriangleVisualization(problem, solution) {
        return {
            type: 'triangle_perimeter',
            sides: solution.sides,
            perimeter: solution.perimeter,
            triangleType: solution.triangleType,
            description: `Triangle with perimeter ${solution.perimeter} ${solution.unit}`,
            visualization: 'Draw triangle with labeled sides showing perimeter path'
        };
    }

    // WORKBOOK GENERATION

    generateTrianglePerimeterWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSectionTriangle(),
            this.createPrerequisiteSectionTriangle(),
            this.createEnhancedStepsSectionTriangle(),
            this.createTrianglePerimeterLessonSection(),
            this.createSolutionSectionTriangle(),
            this.createAnalysisSectionTriangle(),
            this.createVerificationSectionTriangle(),
            this.createRealWorldApplicationSectionTriangle(),
            this.createPedagogicalNotesSectionTriangle(),
            this.createAlternativeMethodsSectionTriangle(),
            this.createPracticeProblemsSectionTriangle()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Triangle Perimeter Mathematical Workbook',
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
            ['Problem Type', this.trianglePerimeterTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.trianglePerimeterTypes[this.currentProblem.type]?.category || 'triangle_perimeter'],
            ['Description', this.currentProblem.cleanInput || 'Triangle perimeter calculation']
        ];

        if (this.currentSolution.sides) {
            problemData.push(['', '']);
            problemData.push(['Triangle Sides', '']);
            this.currentSolution.sides.forEach((side, index) => {
                problemData.push([`Side ${index + 1}`, `${side} ${this.currentSolution.unit || 'units'}`]);
            });
        }

        if (this.currentSolution.triangleType) {
            problemData.push(['', '']);
            problemData.push(['Triangle Type', this.currentSolution.triangleType]);
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSectionTriangle() {
        if (!this.prerequisiteChecks) return null;

        const category = this.trianglePerimeterTypes[this.currentProblem.type]?.category;
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

            stepsData.push([`Step ${step.stepNumber}`, step.description]);

            if (step.formula) {
                stepsData.push(['Formula', step.formula]);
            }

            if (step.beforeExpression && step.afterExpression) {
                stepsData.push(['Before', step.beforeExpression]);
                if (step.operation || step.calculation) {
                    stepsData.push(['Calculation', step.calculation || step.operation]);
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
                stepsData.push(['Procedural', step.explanations.procedural]);
            }

            if (step.visualHint) {
                stepsData.push(['Visual Hint', step.visualHint]);
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
                stepsData.push(['Think During', step.thinkingPrompts.during]);
                stepsData.push(['Think After', step.thinkingPrompts.after]);
            }

            if (step.selfCheck && this.includeSelfCheckQuestions) {
                stepsData.push(['Self-Check', step.selfCheck]);
            }

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

    createTrianglePerimeterLessonSection() {
        const { type } = this.currentProblem;
        const category = this.trianglePerimeterTypes[type]?.category;
        const lesson = this.lessons[category];

        if (!lesson) {
            return {
                title: 'Key Concepts',
                type: 'lesson',
                data: [
                    ['Perimeter Definition', 'Total distance around the triangle'],
                    ['Formula', 'P = a + b + c (sum of all three sides)'],
                    ['Units', 'Always use consistent units for all measurements']
                ]
            };
        }

        const lessonData = [
            ['Topic', lesson.title],
            ['', ''],
            ['Key Concepts', '']
        ];

        lesson.concepts.forEach(concept => {
            lessonData.push(['', concept]);
        });

        lessonData.push(['', '']);
        lessonData.push(['Theory', lesson.theory]);
        
        if (lesson.keyFormulas) {
            lessonData.push(['', '']);
            lessonData.push(['Key Formulas', '']);
            Object.entries(lesson.keyFormulas).forEach(([name, formula]) => {
                lessonData.push([name, formula]);
            });
        }

        return {
            title: 'Key Concepts',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSectionTriangle() {
        if (!this.currentSolution) return null;

        const solutionData = [
            ['Perimeter', `${this.currentSolution.perimeter} ${this.currentSolution.unit}`]
        ];

        if (this.currentSolution.triangleType) {
            solutionData.push(['Triangle Type', this.currentSolution.triangleType]);
        }

        if (this.currentSolution.sides) {
            solutionData.push(['Sides', this.currentSolution.sides.join(', ')]);
        }

        if (this.currentSolution.formula) {
            solutionData.push(['Formula Used', this.currentSolution.formula]);
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
            ['Solution Method', this.currentSolution.type || this.currentSolution.category],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Difficulty Level', this.explanationLevel],
            ['Category', this.trianglePerimeterTypes[this.currentProblem.type]?.category]
        ];

        if (this.currentSolution.triangleType) {
            analysisData.push(['Triangle Classification', this.currentSolution.triangleType]);
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSectionTriangle() {
        if (!this.currentSolution || !this.currentProblem) return null;

        const verificationData = [
            ['Verification Method', 'Check that perimeter equals sum of sides'],
            ['', '']
        ];

        if (this.currentSolution.sides && this.currentSolution.perimeter) {
            const sum = this.currentSolution.sides.reduce((a, b) => a + b, 0);
            const difference = Math.abs(sum - this.currentSolution.perimeter);
            
            verificationData.push(['Sum of sides', `${this.currentSolution.sides.join(' + ')} = ${sum}`]);
            verificationData.push(['Calculated perimeter', this.currentSolution.perimeter]);
            verificationData.push(['Difference', difference.toExponential(2)]);
            verificationData.push(['Valid', difference < 1e-9 ? 'Yes ✓' : 'No ✗']);
        }

        if (this.currentSolution.valid === false) {
            verificationData.push(['', '']);
            verificationData.push(['Triangle Validity', 'Invalid - fails triangle inequality']);
            verificationData.push(['Reason', this.currentSolution.reason]);
        } else {
            verificationData.push(['', '']);
            verificationData.push(['Sanity Check', 'Perimeter > any single side ✓']);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createRealWorldApplicationSectionTriangle() {
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
            appData.push(['Real-World Tip', app.realWorldTip]);
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

        const notes = this.generateTrianglePerimeterPedagogicalNotes(this.currentProblem.type);

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

        const alternatives = this.generateTrianglePerimeterAlternativeMethods(this.currentProblem.type);

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

    generateTrianglePerimeterPedagogicalNotes(problemType) {
        const category = this.trianglePerimeterTypes[problemType]?.category;

        const pedagogicalDatabase = {
            basic_perimeter: {
                objectives: [
                    'Calculate perimeter of any triangle given three sides',
                    'Understand perimeter as total distance around',
                    'Apply correct units to perimeter measurements'
                ],
                keyConcepts: [
                    'Perimeter = sum of all sides',
                    'Units must be consistent',
                    'Perimeter is always greater than any single side'
                ],
                prerequisites: [
                    'Addition of decimals and fractions',
                    'Understanding of geometric shapes',
                    'Concept of linear measurement'
                ],
                commonDifficulties: [
                    'Forgetting one of the three sides',
                    'Mixing up perimeter with area',
                    'Working with mixed units'
                ],
                teachingStrategies: [
                    'Use physical models and string',
                    'Connect to real-world fencing problems',
                    'Draw and label triangles clearly'
                ],
                extensions: [
                    'Find missing side given perimeter',
                    'Compare perimeters of different triangles',
                    'Explore perimeter-area relationships'
                ],
                assessment: [
                    'Can student identify all three sides?',
                    'Does student add correctly?',
                    'Does student include appropriate units?'
                ]
            },
            equilateral_perimeter: {
                objectives: [
                    'Recognize equilateral triangles',
                    'Use simplified formula P = 3s',
                    'Find side length given perimeter'
                ],
                keyConcepts: [
                    'All sides equal in equilateral triangle',
                    'Multiplication shortcut for addition of equal values',
                    'Division as inverse of multiplication'
                ],
                prerequisites: [
                    'Multiplication and division',
                    'Understanding of equilateral properties',
                    'Basic perimeter concept'
                ],
                commonDifficulties: [
                    'Confusing equilateral with isosceles',
                    'Multiplying by 2 instead of 3',
                    'Dividing instead of multiplying'
                ],
                teachingStrategies: [
                    'Use examples of equilateral objects (signs, tiles)',
                    'Emphasize "equi" means equal',
                    'Practice both directions (find P, find s)'
                ],
                extensions: [
                    'Explore other equilateral properties',
                    'Compare with other triangle types',
                    'Scale equilateral triangles'
                ],
                assessment: [
                    'Can student identify equilateral triangles?',
                    'Does student use P = 3s correctly?',
                    'Can student reverse the calculation?'
                ]
            },
            right_triangle_perimeter: {
                objectives: [
                    'Apply Pythagorean theorem to find missing side',
                    'Calculate perimeter of right triangles',
                    'Recognize when Pythagorean theorem applies'
                ],
                keyConcepts: [
                    'Right angle (90°) defines right triangle',
                    'Pythagorean theorem: a² + b² = c²',
                    'Hypotenuse is always longest side'
                ],
                prerequisites: [
                    'Squaring numbers and square roots',
                    'Pythagorean theorem',
                    'Basic triangle perimeter'
                ],
                commonDifficulties: [
                    'Forgetting to take square root',
                    'Identifying which side is hypotenuse',
                    'Arithmetic errors with squares'
                ],
                teachingStrategies: [
                    'Use right triangle models and diagrams',
                    'Teach Pythagorean triples',
                    'Connect to real-world right angles'
                ],
                extensions: [
                    'Explore Pythagorean triples',
                    'Converse of Pythagorean theorem',
                    '3D applications (diagonal distances)'
                ],
                assessment: [
                    'Can student apply Pythagorean theorem?',
                    'Does student identify hypotenuse correctly?',
                    'Can student find perimeter after finding missing side?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Calculate triangle perimeter'],
            keyConcepts: ['Perimeter = sum of sides'],
            prerequisites: ['Basic arithmetic'],
            commonDifficulties: ['Various computational challenges'],
            teachingStrategies: ['Step-by-step instruction'],
            extensions: ['More complex problems'],
            assessment: ['Verify understanding']
        };
    }

    generateTrianglePerimeterAlternativeMethods(problemType) {
        const category = this.trianglePerimeterTypes[problemType]?.category;

        const alternativeDatabase = {
            basic_perimeter: {
                primaryMethod: 'Direct Addition',
                methods: [
                    {
                        name: 'Physical Measurement',
                        description: 'Use string or rope to measure around triangle, then measure string length'
                    },
                    {
                        name: 'Grouping',
                        description: 'Add two sides first, then add third (uses associative property)'
                    },
                    {
                        name: 'Calculator',
                        description: 'For complex decimals or many problems, use calculator'
                    }
                ],
                comparison: 'Direct addition is most straightforward; physical measurement good for understanding; calculator best for complex numbers'
            },
            right_triangle_perimeter: {
                primaryMethod: 'Pythagorean Theorem then Addition',
                methods: [
                    {
                        name: 'Pythagorean Triples',
                        description: 'Recognize common triples (3-4-5, 5-12-13) to skip calculation'
                    },
                    {
                        name: 'Coordinate Geometry',
                        description: 'If vertices given, use distance formula for all three sides'
                    },
                    {
                        name: 'Trigonometry',
                        description: 'Use sine/cosine if angles and one side known'
                    }
                ],
                comparison: 'Pythagorean theorem most direct; triples fastest for standard sizes; coordinates work well on graph'
            },
            equilateral_perimeter: {
                primaryMethod: 'Multiply by 3',
                methods: [
                    {
                        name: 'Repeated Addition',
                        description: 'Add s + s + s instead of multiplying'
                    },
                    {
                        name: 'Reverse Division',
                        description: 'If given perimeter, divide by 3 for side'
                    },
                    {
                        name: 'Pattern Recognition',
                        description: 'Recognize that P is always 3 times side'
                    }
                ],
                comparison: 'Multiplication most efficient; addition more intuitive for beginners; both give same result'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard triangle perimeter approach',
            methods: [{
                name: 'Alternative approach',
                description: 'Other methods based on triangle properties'
            }],
            comparison: 'Choose method based on given information and triangle type'
        };
    }
}

// Export the class
export default EnhancedTrianglePerimeterMathematicalWorkbook;
