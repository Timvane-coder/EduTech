// Enhanced Circle Area and Circumference Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedCircleAreaCircumferenceMathematicalWorkbook {
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

        // Circle-specific options
        this.piApproximation = options.piApproximation || 'exact'; // 'exact', '3.14', '22/7'
        this.unitSystem = options.unitSystem || 'metric'; // 'metric', 'imperial', 'both'
        this.includeDerivations = options.includeDerivations !== false;
        this.visualizeCircle = options.visualizeCircle !== false;

        this.mathSymbols = this.initializeMathSymbols();
        this.setThemeColors();
        this.initializeCircleSolvers();
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
        this.initializeCircleLessons();
        this.initializeHistoricalContext();
        this.initializeUnitConversions();
    }

    initializeCircleLessons() {
        this.lessons = {
            circle_basics: {
                title: "Circle Fundamentals",
                concepts: [
                    "Circle: set of all points equidistant from a center point",
                    "Radius (r): distance from center to any point on circle",
                    "Diameter (d): distance across circle through center, d = 2r",
                    "π (pi): ratio of circumference to diameter, approximately 3.14159..."
                ],
                theory: "Circles are fundamental geometric shapes with constant curvature. All properties relate to the radius and the constant π.",
                keyFormulas: {
                    "Radius to Diameter": "d = 2r",
                    "Diameter to Radius": "r = d/2",
                    "Pi Definition": "π = C/d"
                },
                applications: [
                    "Wheels and rotating machinery",
                    "Circular tracks and paths",
                    "Pizza, plates, coins",
                    "Orbits and circular motion"
                ]
            },

            circumference: {
                title: "Circle Circumference",
                concepts: [
                    "Circumference: distance around the circle (perimeter)",
                    "Formula using radius: C = 2πr",
                    "Formula using diameter: C = πd",
                    "Circumference is always π times the diameter",
                    "Measured in linear units (cm, m, inches, feet)"
                ],
                theory: "Circumference represents the perimeter of a circle. The ratio of circumference to diameter is always π, regardless of circle size.",
                keyFormulas: {
                    "Circumference (radius)": "C = 2πr",
                    "Circumference (diameter)": "C = πd",
                    "Radius from Circumference": "r = C/(2π)",
                    "Diameter from Circumference": "d = C/π"
                },
                derivation: "If you 'unwrap' a circle, the length equals πd. Since d = 2r, we get C = 2πr.",
                solvingSteps: [
                    "Identify what's given (radius, diameter, or circumference)",
                    "Choose appropriate formula",
                    "Substitute known values",
                    "Calculate using π (exact or approximate)",
                    "Include proper units in answer"
                ],
                applications: [
                    "Bike wheel distance per revolution",
                    "Running track length",
                    "Fencing around circular garden",
                    "Belt length around pulleys"
                ]
            },

            area: {
                title: "Circle Area",
                concepts: [
                    "Area: amount of space inside the circle",
                    "Formula: A = πr²",
                    "Area depends on radius squared (not linear)",
                    "Doubling radius quadruples area",
                    "Measured in square units (cm², m², sq ft)"
                ],
                theory: "Area represents the two-dimensional space enclosed by the circle. It grows proportionally to the square of the radius.",
                keyFormulas: {
                    "Area": "A = πr²",
                    "Area from diameter": "A = π(d/2)² = πd²/4",
                    "Radius from Area": "r = √(A/π)",
                    "Diameter from Area": "d = 2√(A/π)"
                },
                derivation: "Area can be derived by summing infinite thin triangular sectors, or by integration. Each sector contributes (1/2)r·dC, totaling πr².",
                solvingSteps: [
                    "Identify the radius (or convert from diameter/circumference)",
                    "Square the radius",
                    "Multiply by π",
                    "Include proper square units"
                ],
                applications: [
                    "Pizza area for pricing",
                    "Circular field area for seeding",
                    "Satellite dish collection area",
                    "Circular pool surface area"
                ]
            },

            radius_from_circumference: {
                title: "Finding Radius from Circumference",
                concepts: [
                    "Given: circumference C",
                    "Find: radius r",
                    "Formula: r = C/(2π)",
                    "Divide circumference by 2π",
                    "Inverse of circumference formula"
                ],
                theory: "Since C = 2πr, we can isolate r by dividing both sides by 2π.",
                keyFormulas: {
                    "Radius from C": "r = C/(2π)",
                    "Also": "r = C/(2π) = d/2"
                },
                solvingSteps: [
                    "Write formula: r = C/(2π)",
                    "Substitute known circumference",
                    "Divide by 2π (or 6.28...)",
                    "Calculate radius",
                    "Verify by computing C = 2πr"
                ],
                applications: [
                    "Finding wheel radius from distance traveled",
                    "Determining circular object size from perimeter",
                    "Reverse engineering circular designs"
                ]
            },

            diameter_from_circumference: {
                title: "Finding Diameter from Circumference",
                concepts: [
                    "Given: circumference C",
                    "Find: diameter d",
                    "Formula: d = C/π",
                    "Divide circumference by π",
                    "Direct inverse of C = πd"
                ],
                theory: "Since C = πd, diameter equals circumference divided by π.",
                keyFormulas: {
                    "Diameter from C": "d = C/π"
                },
                solvingSteps: [
                    "Write formula: d = C/π",
                    "Substitute circumference",
                    "Divide by π",
                    "Calculate diameter"
                ],
                applications: [
                    "Finding tree diameter from trunk circumference",
                    "Determining pipe diameter from wrap-around measurement"
                ]
            },

            radius_from_area: {
                title: "Finding Radius from Area",
                concepts: [
                    "Given: area A",
                    "Find: radius r",
                    "Formula: r = √(A/π)",
                    "Divide area by π, then take square root",
                    "Inverse of area formula"
                ],
                theory: "Since A = πr², we solve for r by dividing by π and taking the square root.",
                keyFormulas: {
                    "Radius from Area": "r = √(A/π)"
                },
                solvingSteps: [
                    "Write formula: r = √(A/π)",
                    "Substitute known area",
                    "Divide by π",
                    "Take square root",
                    "Result is radius"
                ],
                applications: [
                    "Finding sprinkler radius from coverage area",
                    "Determining circular pen radius from available space",
                    "Calculating pizza radius from advertised area"
                ]
            },

            diameter_from_area: {
                title: "Finding Diameter from Area",
                concepts: [
                    "Given: area A",
                    "Find: diameter d",
                    "Formula: d = 2√(A/π)",
                    "Find radius first, then double it",
                    "Or use d = √(4A/π)"
                ],
                theory: "Since A = πr² and d = 2r, we can derive d = 2√(A/π).",
                keyFormulas: {
                    "Diameter from Area": "d = 2√(A/π)",
                    "Alternative": "d = √(4A/π)"
                },
                solvingSteps: [
                    "Find radius: r = √(A/π)",
                    "Double it: d = 2r",
                    "Or directly: d = 2√(A/π)"
                ],
                applications: [
                    "Determining circular table diameter from top area",
                    "Finding circular hole diameter from area requirement"
                ]
            },

            circumference_from_area: {
                title: "Finding Circumference from Area",
                concepts: [
                    "Given: area A",
                    "Find: circumference C",
                    "Method: Find radius first, then circumference",
                    "Formula: C = 2π√(A/π) = 2√(πA)"
                ],
                theory: "We can relate area and circumference through the radius: r = √(A/π), then C = 2πr.",
                keyFormulas: {
                    "Circumference from Area": "C = 2π√(A/π)",
                    "Simplified": "C = 2√(πA)"
                },
                solvingSteps: [
                    "Find radius: r = √(A/π)",
                    "Calculate circumference: C = 2πr",
                    "Or use direct formula: C = 2√(πA)"
                ],
                applications: [
                    "Finding fence length from circular area",
                    "Calculating track length from field area"
                ]
            },

            area_from_circumference: {
                title: "Finding Area from Circumference",
                concepts: [
                    "Given: circumference C",
                    "Find: area A",
                    "Method: Find radius first, then area",
                    "Formula: A = C²/(4π)"
                ],
                theory: "From C = 2πr, we get r = C/(2π). Then A = πr² = π[C/(2π)]² = C²/(4π).",
                keyFormulas: {
                    "Area from Circumference": "A = C²/(4π)",
                    "Step-by-step": "r = C/(2π), then A = πr²"
                },
                solvingSteps: [
                    "Find radius: r = C/(2π)",
                    "Square the radius",
                    "Multiply by π",
                    "Or use direct formula: A = C²/(4π)"
                ],
                applications: [
                    "Finding circular area from perimeter constraint",
                    "Calculating enclosed space from border length"
                ]
            },

            semicircle_perimeter: {
                title: "Semicircle Perimeter",
                concepts: [
                    "Semicircle: half of a circle",
                    "Perimeter includes curved part + diameter",
                    "Curved part = (1/2) × circumference = πr",
                    "Total perimeter = πr + 2r = r(π + 2)"
                ],
                theory: "Semicircle perimeter consists of half the circumference plus the straight diameter edge.",
                keyFormulas: {
                    "Semicircle Perimeter": "P = πr + 2r",
                    "Factored": "P = r(π + 2)",
                    "With diameter": "P = (πd/2) + d"
                },
                solvingSteps: [
                    "Find half circumference: πr",
                    "Add diameter: 2r",
                    "Total: P = πr + 2r"
                ],
                applications: [
                    "Semicircular window frame",
                    "Half-circle garden border",
                    "Arch perimeter"
                ]
            },

            semicircle_area: {
                title: "Semicircle Area",
                concepts: [
                    "Semicircle area = half of full circle area",
                    "Formula: A = (1/2)πr²",
                    "Or: A = πr²/2",
                    "Half the area of corresponding circle"
                ],
                theory: "Since semicircle is exactly half a circle, its area is half of πr².",
                keyFormulas: {
                    "Semicircle Area": "A = πr²/2",
                    "With diameter": "A = πd²/8"
                },
                solvingSteps: [
                    "Find full circle area: πr²",
                    "Divide by 2",
                    "Result: A = πr²/2"
                ],
                applications: [
                    "Semicircular window area",
                    "Half-circle garden space",
                    "Arch area calculation"
                ]
            },

            quarter_circle: {
                title: "Quarter Circle (Quadrant)",
                concepts: [
                    "Quarter circle: one-fourth of a circle",
                    "Area: A = πr²/4",
                    "Perimeter: curved part + two radii = (πr/2) + 2r"
                ],
                theory: "Quarter circle is 1/4 of the full circle, with perimeter including arc and two radii.",
                keyFormulas: {
                    "Quarter Circle Area": "A = πr²/4",
                    "Quarter Circle Perimeter": "P = (πr/2) + 2r"
                },
                applications: [
                    "Corner rounded designs",
                    "Pizza slice calculations",
                    "Curved corner areas"
                ]
            },

            sector_area: {
                title: "Circle Sector Area",
                concepts: [
                    "Sector: pie-slice shaped region",
                    "Area depends on central angle θ",
                    "Formula (degrees): A = (θ/360) × πr²",
                    "Formula (radians): A = (1/2)r²θ"
                ],
                theory: "Sector area is proportional to the central angle. Full circle (360°) has area πr².",
                keyFormulas: {
                    "Sector Area (degrees)": "A = (θ/360) × πr²",
                    "Sector Area (radians)": "A = (1/2)r²θ"
                },
                applications: [
                    "Pizza slices",
                    "Pie charts",
                    "Radar coverage areas",
                    "Circular sector designs"
                ]
            },

            arc_length: {
                title: "Arc Length",
                concepts: [
                    "Arc: part of the circumference",
                    "Length depends on central angle θ",
                    "Formula (degrees): L = (θ/360) × 2πr",
                    "Formula (radians): L = rθ"
                ],
                theory: "Arc length is proportional to central angle, just as sector area is.",
                keyFormulas: {
                    "Arc Length (degrees)": "L = (θ/360) × 2πr",
                    "Arc Length (radians)": "L = rθ"
                },
                applications: [
                    "Curved track segments",
                    "Partial circular paths",
                    "Swing arc distance"
                ]
            },

            annulus_area: {
                title: "Annulus (Ring) Area",
                concepts: [
                    "Annulus: region between two concentric circles",
                    "Outer radius R, inner radius r",
                    "Area = Area of outer circle - Area of inner circle",
                    "Formula: A = πR² - πr² = π(R² - r²)"
                ],
                theory: "The ring area is the difference between two circular areas.",
                keyFormulas: {
                    "Annulus Area": "A = π(R² - r²)",
                    "Factored": "A = π(R + r)(R - r)"
                },
                applications: [
                    "Washer area",
                    "Circular track width",
                    "Ring-shaped regions",
                    "Donut surface area (top view)"
                ]
            },

            composite_shapes: {
                title: "Composite Shapes with Circles",
                concepts: [
                    "Combine circles with rectangles, triangles, etc.",
                    "Add areas for combination",
                    "Subtract areas for removal",
                    "Combine perimeters carefully (shared edges don't count)"
                ],
                theory: "Complex shapes can be broken into simpler components. Use addition and subtraction of areas.",
                applications: [
                    "Windows with semicircular tops",
                    "Rectangular fields with circular ends (stadium)",
                    "Circular holes in rectangular plates"
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
            // Special symbols
            'degree': '°', 'squared': '²', 'cubed': '³',
            'perpendicular': '⊥', 'parallel': '∥', 'diameter': '⌀'
        };
    }

    initializeCircleSolvers() {
        this.circleTypes = {
            // Basic circumference calculations
            circumference_from_radius: {
                patterns: [
                    /circumference.*radius\s*=?\s*([0-9.]+)/i,
                    /perimeter.*circle.*radius\s*=?\s*([0-9.]+)/i,
                    /C.*r\s*=\s*([0-9.]+)/i
                ],
                solver: this.solveCircumferenceFromRadius.bind(this),
                name: 'Circumference from Radius',
                category: 'circumference',
                description: 'Calculate circumference given radius: C = 2πr'
            },

            circumference_from_diameter: {
                patterns: [
                    /circumference.*diameter\s*=?\s*([0-9.]+)/i,
                    /perimeter.*circle.*diameter\s*=?\s*([0-9.]+)/i,
                    /C.*d\s*=\s*([0-9.]+)/i
                ],
                solver: this.solveCircumferenceFromDiameter.bind(this),
                name: 'Circumference from Diameter',
                category: 'circumference',
                description: 'Calculate circumference given diameter: C = πd'
            },

            // Basic area calculations
            area_from_radius: {
                patterns: [
                    /area.*radius\s*=?\s*([0-9.]+)/i,
                    /A.*r\s*=\s*([0-9.]+)/i,
                    /circle.*area.*r\s*=?\s*([0-9.]+)/i
                ],
                solver: this.solveAreaFromRadius.bind(this),
                name: 'Area from Radius',
                category: 'area',
                description: 'Calculate area given radius: A = πr²'
            },

            area_from_diameter: {
                patterns: [
                    /area.*diameter\s*=?\s*([0-9.]+)/i,
                    /circle.*area.*d\s*=?\s*([0-9.]+)/i
                ],
                solver: this.solveAreaFromDiameter.bind(this),
                name: 'Area from Diameter',
                category: 'area',
                description: 'Calculate area given diameter: A = π(d/2)²'
            },

            // Reverse calculations - finding dimensions
            radius_from_circumference: {
                patterns: [
                    /radius.*circumference\s*=?\s*([0-9.]+)/i,
                    /find.*radius.*C\s*=\s*([0-9.]+)/i,
                    /r.*from.*circumference/i
                ],
                solver: this.solveRadiusFromCircumference.bind(this),
                name: 'Radius from Circumference',
                category: 'reverse_circumference',
                description: 'Find radius given circumference: r = C/(2π)'
            },

            diameter_from_circumference: {
                patterns: [
                    /diameter.*circumference\s*=?\s*([0-9.]+)/i,
                    /find.*diameter.*C\s*=\s*([0-9.]+)/i,
                    /d.*from.*circumference/i
                ],
                solver: this.solveDiameterFromCircumference.bind(this),
                name: 'Diameter from Circumference',
                category: 'reverse_circumference',
                description: 'Find diameter given circumference: d = C/π'
            },

            radius_from_area: {
                patterns: [
                    /radius.*area\s*=?\s*([0-9.]+)/i,
                    /find.*radius.*A\s*=\s*([0-9.]+)/i,
                    /r.*from.*area/i
                ],
                solver: this.solveRadiusFromArea.bind(this),
                name: 'Radius from Area',
                category: 'reverse_area',
                description: 'Find radius given area: r = √(A/π)'
            },

            diameter_from_area: {
                patterns: [
                    /diameter.*area\s*=?\s*([0-9.]+)/i,
                    /find.*diameter.*A\s*=\s*([0-9.]+)/i,
                    /d.*from.*area/i
                ],
                solver: this.solveDiameterFromArea.bind(this),
                name: 'Diameter from Area',
                category: 'reverse_area',
                description: 'Find diameter given area: d = 2√(A/π)'
            },

            // Cross calculations
            area_from_circumference: {
                patterns: [
                    /area.*from.*circumference\s*=?\s*([0-9.]+)/i,
                    /A.*from.*C\s*=\s*([0-9.]+)/i
                ],
                solver: this.solveAreaFromCircumference.bind(this),
                name: 'Area from Circumference',
                category: 'cross_calculation',
                description: 'Find area given circumference: A = C²/(4π)'
            },

            circumference_from_area: {
                patterns: [
                    /circumference.*from.*area\s*=?\s*([0-9.]+)/i,
                    /C.*from.*A\s*=\s*([0-9.]+)/i
                ],
                solver: this.solveCircumferenceFromArea.bind(this),
                name: 'Circumference from Area',
                category: 'cross_calculation',
                description: 'Find circumference given area: C = 2√(πA)'
            },

            // Semicircle calculations
            semicircle_area: {
                patterns: [
                    /semicircle.*area.*r\s*=?\s*([0-9.]+)/i,
                    /half.*circle.*area/i,
                    /semi.*area/i
                ],
                solver: this.solveSemicircleArea.bind(this),
                name: 'Semicircle Area',
                category: 'semicircle',
                description: 'Calculate semicircle area: A = πr²/2'
            },

            semicircle_perimeter: {
                patterns: [
                    /semicircle.*perimeter.*r\s*=?\s*([0-9.]+)/i,
                    /half.*circle.*perimeter/i,
                    /semi.*perimeter/i
                ],
                solver: this.solveSemicirclePerimeter.bind(this),
                name: 'Semicircle Perimeter',
                category: 'semicircle',
                description: 'Calculate semicircle perimeter: P = πr + 2r'
            },

            // Quarter circle
            quarter_circle_area: {
                patterns: [
                    /quarter.*circle.*area/i,
                    /quadrant.*area/i
                ],
                solver: this.solveQuarterCircleArea.bind(this),
                name: 'Quarter Circle Area',
                category: 'quarter_circle',
                description: 'Calculate quarter circle area: A = πr²/4'
            },

            quarter_circle_perimeter: {
                patterns: [
                    /quarter.*circle.*perimeter/i,
                    /quadrant.*perimeter/i
                ],
                solver: this.solveQuarterCirclePerimeter.bind(this),
                name: 'Quarter Circle Perimeter',
                category: 'quarter_circle',
                description: 'Calculate quarter circle perimeter: P = πr/2 + 2r'
            },

            // Sector and arc
            sector_area: {
                patterns: [
                    /sector.*area/i,
                    /slice.*area/i
                ],
                solver: this.solveSectorArea.bind(this),
                name: 'Sector Area',
                category: 'sector',
                description: 'Calculate sector area: A = (θ/360)πr²'
            },

            arc_length: {
                patterns: [
                    /arc.*length/i,
                    /curved.*length/i
                ],
                solver: this.solveArcLength.bind(this),
                name: 'Arc Length',
                category: 'arc',
                description: 'Calculate arc length: L = (θ/360)×2πr'
            },

            // Annulus (ring)
            annulus_area: {
                patterns: [
                    /annulus.*area/i,
                    /ring.*area/i,
                    /washer.*area/i
                ],
                solver: this.solveAnnulusArea.bind(this),
                name: 'Annulus Area',
                category: 'annulus',
                description: 'Calculate ring area: A = π(R² - r²)'
            },

            // Word problems
            word_wheel: {
                patterns: [
                    /wheel/i,
                    /tire/i,
                    /revolution/i
                ],
                solver: this.solveWordWheel.bind(this),
                name: 'Wheel/Revolution Problems',
                category: 'word_problems',
                description: 'Problems involving wheels, rotations, revolutions'
            },

            word_circular_region: {
                patterns: [
                    /circular.*garden/i,
                    /circular.*field/i,
                    /circular.*pool/i,
                    /round.*table/i
                ],
                solver: this.solveWordCircularRegion.bind(this),
                name: 'Circular Region Problems',
                category: 'word_problems',
                description: 'Problems involving circular areas and perimeters'
            },

            word_pizza: {
                patterns: [
                    /pizza/i,
                    /pie/i
                ],
                solver: this.solveWordPizza.bind(this),
                name: 'Pizza/Pie Problems',
                category: 'word_problems',
                description: 'Problems involving circular food items'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            circumference: {
                'Formula confusion': [
                    'Using A = πr² instead of C = 2πr',
                    'Forgetting the "2" in C = 2πr',
                    'Using diameter when radius is given (or vice versa)'
                ],
                'Calculation errors': [
                    'Not multiplying by 2π completely',
                    'Forgetting to use π in calculation',
                    'Arithmetic errors with π approximations'
                ],
                'Units': [
                    'Forgetting units in answer',
                    'Using square units instead of linear units',
                    'Not converting between units properly'
                ]
            },
            area: {
                'Formula confusion': [
                    'Using C = 2πr instead of A = πr²',
                    'Forgetting to square the radius',
                    'Using diameter without dividing by 2 first'
                ],
                'Squaring errors': [
                    'Squaring π instead of radius',
                    'Not squaring radius at all',
                    'Incorrect calculation of r²'
                ],
                'Units': [
                    'Using linear units instead of square units',
                    'Forgetting to square unit conversion factors',
                    'Not including units in final answer'
                ]
            },
            reverse_calculations: {
                'Inverse operations': [
                    'Not dividing by π or 2π when finding radius',
                    'Forgetting to take square root when finding radius from area',
                    'Using wrong inverse formula'
                ],
                'Order of operations': [
                    'Squaring before dividing (or vice versa)',
                    'Not following proper order in multi-step problems',
                    'Calculation sequence errors'
                ]
            },
            semicircle: {
                'Perimeter confusion': [
                    'Forgetting to add the diameter to the arc',
                    'Using full circumference instead of half',
                    'Not including straight edge in perimeter'
                ],
                'Area errors': [
                    'Not dividing circle area by 2',
                    'Using full circle formula',
                    'Calculation mistakes'
                ]
            }
        };

        this.errorPrevention = {
            formula_selection: {
                reminder: 'Identify what you\'re looking for: C (perimeter) or A (area)',
                method: 'Write down the formula before substituting values'
            },
            radius_diameter: {
                reminder: 'Check if you have radius or diameter - they\'re different!',
                method: 'Remember: diameter = 2 × radius, radius = diameter ÷ 2'
            },
            squaring: {
                reminder: 'Square the radius, not π',
                method: 'Calculate r² first, then multiply by π'
            },
            units: {
                reminder: 'Circumference uses linear units, area uses square units',
                method: 'Always include units and check if they make sense'
            },
            pi_value: {
                reminder: 'Use appropriate π approximation or keep exact',
                method: 'Be consistent with π throughout problem'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why formulas work and geometric meaning',
                language: 'intuitive and visualization-based'
            },
            procedural: {
                focus: 'Step-by-step calculation process',
                language: 'clear instructions'
            },
            visual: {
                focus: 'Drawing circles and seeing relationships',
                language: 'visual and spatial'
            },
            algebraic: {
                focus: 'Formula derivations and manipulations',
                language: 'precise mathematical notation'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple terms like "distance around" instead of "circumference"',
                detail: 'essential steps only',
                examples: 'whole number radii, simple calculations'
            },
            intermediate: {
                vocabulary: 'standard geometric terms',
                detail: 'main steps with brief reasoning',
                examples: 'decimal values, realistic measurements'
            },
            ELI5: {
                vocabulary: 'explain like I\'m 5 - simplest possible',
                detail: 'every step with analogies',
                examples: 'real objects like pizzas, coins, wheels',
                analogies: true,
                visualization: 'simple pictures and comparisons'
            },
            detailed: {
                vocabulary: 'full mathematical vocabulary',
                detail: 'comprehensive with derivations',
                examples: 'complex scenarios, multiple steps'
            },
            scaffolded: {
                vocabulary: 'progressive complexity',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced difficulty'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            bicycle_wheel: {
                scenario: "Bicycle wheel travel distance",
                formulas: ["C = 2πr (circumference)", "Distance = C × revolutions"],
                examples: [
                    "A bike wheel has radius 35 cm. How far does the bike travel in 100 revolutions?",
                    "If a bike travels 440 meters, how many times did a 28 cm radius wheel rotate?"
                ],
                context: "Understanding wheel circumference helps calculate distance traveled"
            },
            pizza_area: {
                scenario: "Pizza size and pricing",
                formulas: ["A = πr²", "Price per square inch"],
                examples: [
                    "A 12-inch diameter pizza costs $10. A 16-inch costs $15. Which is a better deal?",
                    "How much more pizza do you get with a 14-inch vs. a 10-inch pizza?"
                ],
                context: "Area helps compare value when buying circular items"
            },
            circular_garden: {
                scenario: "Circular garden fencing and planting",
                formulas: ["C = 2πr (fence needed)", "A = πr² (planting area)"],
                examples: [
                    "A circular garden has radius 5 meters. How much fence is needed? How many square meters to plant?",
                    "You have 50 feet of fence. What's the maximum circular area you can enclose?"
                ],
                context: "Gardening requires both perimeter (fence) and area (planting) calculations"
            },
            circular_pool: {
                scenario: "Swimming pool cover and volume",
                formulas: ["A = πr² (cover area)", "V = πr²h (volume)"],
                examples: [
                    "A circular pool has 10-foot diameter. What size cover is needed?",
                    "Pool is 10 ft diameter and 4 ft deep. How much water to fill?"
                ],
                context: "Pool maintenance involves area and volume calculations"
            },
            running_track: {
                scenario: "Circular or oval running track",
                formulas: ["C = 2πr", "Total distance with straightaways"],
                examples: [
                    "A circular track has 50-meter radius. How far is one lap?",
                    "How many laps for a 5K race on a 400-meter track?"
                ],
                context: "Track athletes need to know lap distances"
            },
            tree_diameter: {
                scenario: "Measuring tree size",
                formulas: ["d = C/π", "r = C/(2π)"],
                examples: [
                    "A tree trunk has 95 cm circumference. What's the diameter?",
                    "Tree circumference is 6 feet. What's the radius?"
                ],
                context: "Foresters measure circumference with tape, calculate diameter"
            },
            circular_table: {
                scenario: "Table size and seating",
                formulas: ["A = πr²", "C = 2πr"],
                examples: [
                    "A 6-foot diameter table. What's the area? Can 10 people sit (2 feet each)?",
                    "Need 30 feet of edge trim for circular table. What's the diameter?"
                ],
                context: "Furniture sizing involves circumference and area"
            },
            satellite_dish: {
                scenario: "Dish collection area",
                formulas: ["A = πr²"],
                examples: [
                    "A satellite dish is 80 cm diameter. What's the collection area?",
                    "Need 1 square meter collection area. What radius dish?"
                ],
                context: "Signal collection depends on dish area"
            },
            sprinkler_coverage: {
                scenario: "Circular sprinkler pattern",
                formulas: ["A = πr²", "C = 2πr"],
                examples: [
                    "Sprinkler covers 15-foot radius. What area is watered?",
                    "Need to water 1000 square feet. What sprinkler radius?"
                ],
                context: "Irrigation planning uses circular coverage areas"
            },
            coin_comparison: {
                scenario: "Comparing coin sizes",
                formulas: ["A = πr²", "d = 2r"],
                examples: [
                    "Penny diameter 19mm, quarter 24mm. How much bigger is quarter?",
                    "What's the area of a 1-inch diameter coin?"
                ],
                context: "Understanding relative sizes through area"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            circumference: {
                skills: ['Multiplication', 'Working with π', 'Understanding perimeter'],
                priorKnowledge: ['What a circle is', 'Radius vs diameter', 'π ≈ 3.14'],
                checkQuestions: [
                    "What is π approximately?",
                    "If radius is 5, what is diameter?",
                    "What does perimeter mean?"
                ]
            },
            area: {
                skills: ['Squaring numbers', 'Working with π', 'Understanding area'],
                priorKnowledge: ['What area means', 'How to square a number', 'π ≈ 3.14'],
                checkQuestions: [
                    "What is 6²?",
                    "What does area measure?",
                    "What units for area (if length in meters)?"
                ]
            },
            reverse_circumference: {
                skills: ['Division by π', 'Inverse operations', 'Algebra basics'],
                priorKnowledge: ['C = 2πr formula', 'Solving for a variable', 'Division'],
                checkQuestions: [
                    "What is 31.4 ÷ 3.14?",
                    "If 2πr = 20, how do you find r?",
                    "What operation undoes multiplication?"
                ]
            },
            reverse_area: {
                skills: ['Square roots', 'Division by π', 'Algebra'],
                priorKnowledge: ['A = πr² formula', 'What square root means', 'Inverse operations'],
                checkQuestions: [
                    "What is √25?",
                    "If r² = 16, what is r?",
                    "How do you undo squaring?"
                ]
            },
            semicircle: {
                skills: ['Fractions (half)', 'Circumference and area formulas', 'Adding measurements'],
                priorKnowledge: ['Full circle formulas', 'What semicircle means', 'Dividing by 2'],
                checkQuestions: [
                    "What is half of πr²?",
                    "If C = 20, what is half?",
                    "What is a semicircle?"
                ]
            },
            sector: {
                skills: ['Fractions and proportions', 'Angles', 'Circle formulas'],
                priorKnowledge: ['Degrees in circle (360°)', 'Proportional reasoning', 'Full circle area/circumference'],
                checkQuestions: [
                    "How many degrees in a circle?",
                    "What fraction is 90° of 360°?",
                    "What is 1/4 of πr²?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            circle_drawing: {
                description: "Visual circle with labeled radius/diameter",
                analogy: "Draw the circle and mark measurements",
                visualization: "Circle with center point, radius line, diameter line",
                suitableFor: ['all_circle_problems'],
                explanation: "Seeing the circle helps understand which measurement you have/need"
            },
            unwrapping_circumference: {
                description: "Circumference as unwrapped circle",
                analogy: "If you cut and straighten the circle, length = circumference",
                visualization: "Circle next to straight line of same length",
                suitableFor: ['circumference'],
                explanation: "Helps visualize that circumference is a linear measurement"
            },
            pizza_slices: {
                description: "Circle divided into sectors",
                analogy: "Pizza slices show fractional parts",
                visualization: "Circle cut into wedges",
                suitableFor: ['sector', 'area'],
                explanation: "Sectors are fractions of total area"
            },
            grid_overlay: {
                description: "Circle on grid paper",
                analogy: "Count squares to estimate area",
                visualization: "Circle drawn on graph paper",
                suitableFor: ['area'],
                explanation: "Shows that area is amount of space, measured in square units"
            },
            concentric_circles: {
                description: "Circles within circles",
                analogy: "Target rings or tree rings",
                visualization: "Multiple circles sharing same center",
                suitableFor: ['annulus', 'comparing_sizes'],
                explanation: "Shows how area grows as radius increases"
            },
            wheel_rotation: {
                description: "Wheel rolling and marking distance",
                analogy: "Paint one spot on wheel, see how far it travels per rotation",
                visualization: "Wheel rolling with marked path",
                suitableFor: ['circumference', 'applications'],
                explanation: "One rotation = one circumference distance"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "Find circumference of circle with radius 7 cm",
                    solution: "43.96 cm (or 14π cm)",
                    steps: ["C = 2πr", "C = 2π(7)", "C = 14π ≈ 43.96 cm"],
                    difficulty: "easy"
                },
                {
                    problem: "Find area of circle with radius 5 m",
                    solution: "78.5 m² (or 25π m²)",
                    steps: ["A = πr²", "A = π(5²)", "A = 25π ≈ 78.5 m²"],
                    difficulty: "easy"
                },
                {
                    problem: "Circle diameter is 10 inches. Find circumference.",
                    solution: "31.4 inches (or 10π inches)",
                    steps: ["C = πd", "C = π(10)", "C = 10π ≈ 31.4 in"],
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "Circumference is 62.8 cm. Find radius.",
                    solution: "10 cm",
                    steps: ["C = 2πr", "62.8 = 2πr", "r = 62.8/(2π)", "r ≈ 10 cm"],
                    difficulty: "medium"
                },
                {
                    problem: "Area is 154 m². Find diameter.",
                    solution: "14 m",
                    steps: ["A = πr²", "154 = πr²", "r² = 154/π ≈ 49", "r ≈ 7", "d = 2(7) = 14 m"],
                    difficulty: "medium"
                },
                {
                    problem: "Find area of semicircle with diameter 20 ft",
                    solution: "157 ft²",
                    steps: ["r = d/2 = 10", "A_full = π(10²) = 100π", "A_semi = 100π/2 = 50π ≈ 157 ft²"],
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "Annulus: outer radius 10 cm, inner radius 6 cm. Find area.",
                    solution: "201 cm²",
                    steps: ["A = π(R² - r²)", "A = π(10² - 6²)", "A = π(100 - 36) = 64π ≈ 201 cm²"],
                    difficulty: "hard"
                },
                {
                    problem: "Sector with angle 60° and radius 12. Find area.",
                    solution: "75.4 units²",
                    steps: ["A = (θ/360)πr²", "A = (60/360)π(12²)", "A = (1/6)π(144) = 24π ≈ 75.4"],
                    difficulty: "hard"
                },
                {
                    problem: "Circle area is 200. Find circumference.",
                    solution: "50.1 units",
                    steps: ["A = πr² = 200", "r = √(200/π) ≈ 7.98", "C = 2π(7.98) ≈ 50.1"],
                    difficulty: "hard"
                }
            ],
            byMethod: {
                circumference_basic: [
                    { problem: "r = 3, find C", solution: "18.84 (or 6π)" },
                    { problem: "d = 14, find C", solution: "43.96 (or 14π)" },
                    { problem: "r = 2.5, find C", solution: "15.7 (or 5π)" }
                ],
                area_basic: [
                    { problem: "r = 4, find A", solution: "50.24 (or 16π)" },
                    { problem: "d = 10, find A", solution: "78.5 (or 25π)" },
                    { problem: "r = 6, find A", solution: "113.04 (or 36π)" }
                ],
                reverse_problems: [
                    { problem: "C = 31.4, find r", solution: "5" },
                    { problem: "A = 314, find r", solution: "10" },
                    { problem: "C = 25π, find d", solution: "25" }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            circumference_vs_area: {
                misconception: "Confusing C = 2πr with A = πr²",
                reality: "Circumference (C) is perimeter/distance around. Area (A) is space inside.",
                correctiveExample: "For r=5: C=31.4 (distance around), A=78.5 (space inside)",
                commonIn: ['all_circle_calculations']
            },
            radius_vs_diameter: {
                misconception: "Using radius and diameter interchangeably",
                reality: "Diameter is always 2 times radius. They're different measurements.",
                correctiveExample: "If d=10, then r=5 (not 10). If r=7, then d=14 (not 7).",
                commonIn: ['all_circle_calculations']
            },
            forgetting_to_square: {
                misconception: "Calculating A = πr instead of A = πr²",
                reality: "Must square the radius in area formula",
                correctiveExample: "If r=5, A = π(5²) = π(25) = 78.5, NOT π(5) = 15.7",
                commonIn: ['area']
            },
            squaring_pi: {
                misconception: "Squaring π instead of radius: (πr)² instead of πr²",
                reality: "Only the radius is squared, not π",
                correctiveExample: "A = πr² means π × (r²), not (π×r)²",
                commonIn: ['area']
            },
            linear_vs_square_units: {
                misconception: "Using cm² for circumference or cm for area",
                reality: "Circumference uses linear units (cm, m). Area uses square units (cm², m²).",
                correctiveExample: "C = 30 cm (distance). A = 70 cm² (space).",
                commonIn: ['circumference', 'area']
            },
            semicircle_perimeter: {
                misconception: "Semicircle perimeter = half of circumference only",
                reality: "Must add the diameter (straight edge) too",
                correctiveExample: "For r=5: Half C = 5π, but perimeter = 5π + 10",
                commonIn: ['semicircle']
            },
            inverse_operations: {
                misconception: "Not using inverse properly when finding radius",
                reality: "To undo squaring, take square root. To undo ×π, divide by π.",
                correctiveExample: "If A=πr²=100, then r²=100/π, then r=√(100/π)",
                commonIn: ['reverse_calculations']
            },
            sector_proportions: {
                misconception: "Using wrong fraction for sector angle",
                reality: "Sector angle over 360° gives fraction of full circle",
                correctiveExample: "90° sector is 90/360 = 1/4 of circle, not 90% or 90 parts",
                commonIn: ['sector', 'arc']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            circumference_as_string: {
                analogy: "String wrapped around can",
                explanation: "If you wrap string around a can then straighten it, the length is the circumference",
                suitableFor: ['circumference'],
                ELI5: "Imagine wrapping a string around a circle, then pulling it straight. That's how long the circumference is!"
            },
            area_as_paint: {
                analogy: "Paint needed to cover surface",
                explanation: "Area is how much paint you'd need to completely cover the inside of the circle",
                suitableFor: ['area'],
                ELI5: "If you color inside a circle, the area tells you how much space you colored!"
            },
            pizza_slices: {
                analogy: "Cutting a pizza",
                explanation: "Each slice is a sector. More slices = smaller sectors.",
                suitableFor: ['sector', 'fractions'],
                ELI5: "A pizza slice is a sector! The bigger the angle, the bigger the slice!"
            },
            wheel_revolution: {
                analogy: "Wheel rolling",
                explanation: "One complete roll of a wheel = one circumference distance",
                suitableFor: ['circumference', 'applications'],
                ELI5: "When a wheel rolls all the way around once, it goes as far as the circle's edge is long!"
            },
            radius_as_spoke: {
                analogy: "Bicycle wheel spoke",
                explanation: "Radius is like a spoke from center to rim",
                suitableFor: ['radius', 'all_circle'],
                ELI5: "The radius is like the spoke on a bike wheel - it goes from the middle to the edge!"
            },
            doubling_radius_quadrupling_area: {
                analogy: "Four circles fit in doubled circle",
                explanation: "When radius doubles, area quadruples (4 times bigger)",
                suitableFor: ['area', 'scaling'],
                ELI5: "If you make a circle twice as wide, four of the old circles fit inside the new one!"
            },
            annulus_as_donut: {
                analogy: "Donut or washer",
                explanation: "Ring area is like the dough part of a donut (not the hole)",
                suitableFor: ['annulus'],
                ELI5: "An annulus is like a donut shape - we measure just the dough, not the hole!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            circumference_from_radius: {
                level1: "What formula relates circumference to radius?",
                level2: "The formula is C = 2πr. What are you given?",
                level3: "Multiply the radius by 2π",
                level4: "C = 2π({radius}) = {answer}"
            },
            area_from_radius: {
                level1: "What formula gives area of a circle?",
                level2: "The formula is A = πr². What's the radius?",
                level3: "Square the radius, then multiply by π",
                level4: "A = π({radius}²) = π({radius_squared}) = {answer}"
            },
            radius_from_circumference: {
                level1: "You know C, want r. What's the formula?",
                level2: "C = 2πr, so r = ?",
                level3: "Divide circumference by 2π",
                level4: "r = {circumference}/(2π) = {answer}"
            },
            radius_from_area: {
                level1: "You know A, want r. What's the formula?",
                level2: "A = πr², so r = ?",
                level3: "Divide area by π, then take square root",
                level4: "r = √({area}/π) = √{area_over_pi} = {answer}"
            },
            semicircle_perimeter: {
                level1: "What makes up the semicircle's edge?",
                level2: "It's the curved part plus the straight diameter",
                level3: "Curved part = πr, straight part = 2r",
                level4: "P = πr + 2r = r(π + 2) = {answer}"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Circle radius is 6 cm. Find circumference.",
                    answer: "37.68 cm (or 12π cm)",
                    assesses: "circumference_from_radius",
                    difficulty: "basic"
                },
                {
                    question: "Circle radius is 4 m. Find area.",
                    answer: "50.24 m² (or 16π m²)",
                    assesses: "area_from_radius",
                    difficulty: "basic"
                },
                {
                    question: "Circumference is 31.4 inches. Find radius.",
                    answer: "5 inches",
                    assesses: "radius_from_circumference",
                    difficulty: "intermediate"
                },
                {
                    question: "Area is 78.5 cm². Find radius.",
                    answer: "5 cm",
                    assesses: "radius_from_area",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "For circumference, do you use C = 2πr or A = πr²?",
                    options: ["C = 2πr", "A = πr²", "Both", "Neither"],
                    correct: "C = 2πr",
                    explanation: "Circumference uses C = 2πr; Area uses A = πr²"
                },
                {
                    question: "If diameter is 12, what is radius?",
                    options: ["24", "12", "6", "3"],
                    correct: "6",
                    explanation: "Radius = diameter/2 = 12/2 = 6"
                },
                {
                    question: "Which units for area?",
                    options: ["cm", "cm²", "cm³", "no units"],
                    correct: "cm²",
                    explanation: "Area uses square units"
                },
                {
                    question: "To find radius from area, you:",
                    options: ["Divide by π and square root", "Multiply by π", "Square", "Divide by 2π"],
                    correct: "Divide by π and square root",
                    explanation: "A = πr², so r = √(A/π)"
                }
            ],
            summative: [
                {
                    question: "Circle area is 314 cm². Find diameter.",
                    answer: "20 cm",
                    showsWork: true,
                    rubric: {
                        find_radius: 2,
                        find_diameter: 1,
                        correct_answer: 1,
                        units: 1
                    }
                },
                {
                    question: "Semicircle radius is 8 m. Find perimeter.",
                    answer: "41.12 m (or 8π + 16)",
                    showsWork: true,
                    rubric: {
                        arc_length: 2,
                        add_diameter: 1,
                        calculation: 1,
                        units: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "r = 5, find C",
                    "r = 3, find A",
                    "d = 10, find C",
                    "d = 8, find A"
                ],
                medium: [
                    "C = 44, find r",
                    "A = 154, find r",
                    "C = 62.8, find d",
                    "Find area from circumference 31.4"
                ],
                hard: [
                    "Annulus: R=10, r=7, find area",
                    "Sector: θ=90°, r=8, find area",
                    "Semicircle perimeter with r=6",
                    "Circle area is 200, find circumference"
                ]
            },
            byObjective: {
                canFindCircumference: [
                    "r = 7, find C",
                    "d = 12, find C",
                    "r = 2.5, find C"
                ],
                canFindArea: [
                    "r = 6, find A",
                    "d = 10, find A",
                    "r = 4.5, find A"
                ],
                canFindRadius: [
                    "C = 31.4, find r",
                    "A = 78.5, find r",
                    "C = 25π, find r"
                ],
                canWorkSemicircles: [
                    "Semicircle r=5, find area",
                    "Semicircle d=12, find perimeter",
                    "Semicircle area is 50, find radius"
                ],
                canSolveWordProblems: [
                    "Pizza diameter 14 inches, find area",
                    "Wheel radius 30 cm, distance in 50 revolutions?",
                    "Garden radius 4 m, how much fence needed?"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "finding_circumference": "Use C = 2πr if you have radius, or C = πd if you have diameter",
                "finding_area": "Use A = πr² with radius, or A = π(d/2)² with diameter",
                "finding_radius_from_C": "Use r = C/(2π)",
                "finding_radius_from_A": "Use r = √(A/π)",
                "finding_diameter": "Find radius first, then d = 2r",
                "semicircle": "Find for full circle, then divide area by 2 (but perimeter needs diameter added)",
                "sector": "Use (θ/360) × full circle measurement",
                "annulus": "Subtract inner circle from outer circle"
            },
            whenToUseWhat: {
                exact_vs_approximate: "Use exact (π) for symbolic answers, approximate (3.14) for numerical",
                radius_vs_diameter: "Identify which you have, convert if needed using d=2r",
                direct_formula: "When given radius/diameter, use direct formulas",
                inverse_formula: "When given circumference/area, use inverse formulas",
                composite_shapes: "Break into simple parts, combine areas"
            },
            methodSelection: {
                factorsToConsider: [
                    "What measurement is given (r, d, C, or A)?",
                    "What measurement is asked for?",
                    "Is it a full circle, semicircle, sector?",
                    "Do you need exact or approximate answer?",
                    "Are units consistent?"
                ],
                generalApproach: [
                    "1. Identify what's given and what's needed",
                    "2. Choose appropriate formula",
                    "3. Substitute values carefully",
                    "4. Calculate step-by-step",
                    "5. Include proper units",
                    "6. Verify reasonableness"
                ]
            },
            optimizationTips: {
                "Remember key formulas": "C = 2πr, A = πr² are fundamental",
                "Check units": "Always include and check unit correctness",
                "Use π wisely": "Keep exact (π) until final step, or use consistent approximation",
                "Draw it": "Quick sketch helps identify what you have/need",
                "Verify": "Check if answer makes sense (area > circumference for r>2)"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Circumference Sprint",
                    timeLimit: 60,
                    problems: [
                        "r=3, C=?",
                        "r=5, C=?",
                        "d=10, C=?",
                        "r=7, C=?",
                        "d=14, C=?"
                    ]
                },
                {
                    name: "Area Challenge",
                    timeLimit: 90,
                    problems: [
                        "r=2, A=?",
                        "r=4, A=?",
                        "r=6, A=?",
                        "d=10, A=?",
                        "d=12, A=?"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Circle",
                    problem: "A circle has the property that its circumference in cm equals its area in cm². What is the radius?",
                    solution: "r = 2 cm (C = 2πr = 4π, A = πr² = 4π)",
                    hint: "Set C = A and solve for r"
                },
                {
                    name: "Doubling Puzzle",
                    problem: "If you double the radius, how does area change?",
                    solution: "Area quadruples (becomes 4 times larger)",
                    explanation: "A = π(2r)² = 4πr²"
                },
                {
                    name: "Ring Width",
                    problem: "Annulus area is 75π. Outer radius is 10. What's inner radius?",
                    solution: "r = 5",
                    steps: ["π(10² - r²) = 75π", "100 - r² = 75", "r² = 25", "r = 5"]
                }
            ],
            applications: [
                {
                    scenario: "Pizza Value",
                    problem: "12\" pizza costs $10, 16\" costs $16. Which is better value per square inch?",
                    solution: "16\" pizza (better value)",
                    explanation: "12\": A=113.04, cost $0.088/in². 16\": A=201, cost $0.080/in²"
                },
                {
                    scenario: "Wheel Distance",
                    problem: "Bike wheel radius 35 cm. How many revolutions for 1 kilometer?",
                    solution: "≈455 revolutions",
                    explanation: "C = 2π(35) ≈ 220 cm. 1000m = 100000cm. 100000/220 ≈ 455"
                },
                {
                    scenario: "Fence Maximum Area",
                    problem: "100 feet of fence. Maximum circular area?",
                    solution: "≈796 ft²",
                    explanation: "C=100, r=100/(2π)≈15.92, A=π(15.92)²≈796"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Find area when r = 6",
                        "A = πr",
                        "A = 3.14 × 6",
                        "A = 18.84"
                    ],
                    error: "Forgot to square radius",
                    correctAnswer: "113.04",
                    correctWork: "A = πr² = π(6²) = 36π ≈ 113.04"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Find radius when C = 31.4",
                        "C = 2πr",
                        "r = 31.4/(2) = 15.7"
                    ],
                    error: "Didn't divide by π",
                    correctAnswer: "5",
                    correctWork: "r = C/(2π) = 31.4/(2×3.14) = 31.4/6.28 = 5"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "Semicircle r=4, find perimeter",
                        "Full C = 2πr = 8π",
                        "Semi P = 8π/2 = 4π ≈ 12.56"
                    ],
                    error: "Forgot to add diameter",
                    correctAnswer: "20.56",
                    correctWork: "Arc = 4π, diameter = 8, P = 4π + 8 ≈ 20.56"
                }
            ]
        };
    }

    initializeHistoricalContext() {
        this.historicalContext = {
            pi_discovery: {
                title: "Discovery of π",
                timeline: [
                    "Ancient Babylon (~1900 BC): π ≈ 3.125",
                    "Ancient Egypt (~1650 BC): π ≈ 3.16",
                    "Archimedes (~250 BC): π between 3.1408 and 3.1429",
                    "Chinese mathematician Zu Chongzhi (5th century): π ≈ 355/113",
                    "Modern era: π calculated to trillions of digits"
                ],
                significance: "π is a fundamental constant in mathematics, appearing in geometry, trigonometry, calculus, and physics",
                funFact: "π is irrational (never-ending, non-repeating decimal) and transcendental"
            },
            circle_importance: {
                title: "Circles in History",
                applications: [
                    "Ancient wheels revolutionized transportation",
                    "Stonehenge and other circular structures",
                    "Planetary orbits (ellipses, close to circles)",
                    "Architecture: domes, arches, circular buildings"
                ],
                culturalSignificance: "Circles represent perfection, infinity, and wholeness in many cultures"
            }
        };
    }

    initializeUnitConversions() {
        this.unitConversions = {
            length: {
                "inch_to_cm": 2.54,
                "foot_to_meter": 0.3048,
                "yard_to_meter": 0.9144,
                "mile_to_km": 1.60934,
                "cm_to_inch": 0.393701,
                "meter_to_foot": 3.28084
            },
            area: {
                "sq_inch_to_sq_cm": 6.4516,
                "sq_foot_to_sq_meter": 0.092903,
                "sq_yard_to_sq_meter": 0.836127,
                "sq_mile_to_sq_km": 2.58999,
                "sq_cm_to_sq_inch": 0.155,
                "sq_meter_to_sq_foot": 10.7639
            }
        };
    }

    // MAIN SOLVER METHOD
    solveCircleProblem(config) {
        const { equation, scenario, parameters, problemType, context } = config;

        try {
            this.currentProblem = this.parseCircleProblem(equation, scenario, parameters, problemType, context);
            this.currentSolution = this.solveCircleProblem_Internal(this.currentProblem);
            this.solutionSteps = this.generateCircleSteps(this.currentProblem, this.currentSolution);
            this.generateCircleGraphData();
            this.generateCircleWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                solutionValue: this.currentSolution?.solution,
                solutionType: this.currentSolution?.solutionType || 'numeric'
            };

        } catch (error) {
            throw new Error(`Failed to solve circle problem: ${error.message}`);
        }
    }

    parseCircleProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = equation ? this.cleanMathExpression(equation) : '';

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
                    const extractedParams = this.extractCircleParameters(match, type, cleanInput, scenario);

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

        // Default based on parameters
        if (parameters.radius !== undefined) {
            if (parameters.findWhat === 'area') {
                return {
                    originalInput: equation || 'Find area from radius',
                    cleanInput: cleanInput,
                    type: 'area_from_radius',
                    scenario: scenario,
                    parameters: { ...parameters },
                    context: { ...context },
                    parsedAt: new Date().toISOString()
                };
            } else {
                return {
                    originalInput: equation || 'Find circumference from radius',
                    cleanInput: cleanInput,
                    type: 'circumference_from_radius',
                    scenario: scenario,
                    parameters: { ...parameters },
                    context: { ...context },
                    parsedAt: new Date().toISOString()
                };
            }
        }

        throw new Error(`Unable to recognize circle problem type from: ${equation || scenario}`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/π/g, 'pi')
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .trim();
    }

    extractCircleParameters(match, type, cleanInput, scenario) {
        const params = {};

        if (!match) return params;

        // Extract numeric value from match
        const numericPattern = /([0-9.]+)/g;
        const numbers = cleanInput.match(numericPattern);

        switch(type) {
            case 'circumference_from_radius':
            case 'area_from_radius':
            case 'semicircle_area':
            case 'semicircle_perimeter':
            case 'quarter_circle_area':
            case 'quarter_circle_perimeter':
                params.radius = numbers && numbers[0] ? parseFloat(numbers[0]) : 0;
                break;

            case 'circumference_from_diameter':
            case 'area_from_diameter':
                params.diameter = numbers && numbers[0] ? parseFloat(numbers[0]) : 0;
                break;

            case 'radius_from_circumference':
            case 'diameter_from_circumference':
            case 'area_from_circumference':
                params.circumference = numbers && numbers[0] ? parseFloat(numbers[0]) : 0;
                break;

            case 'radius_from_area':
            case 'diameter_from_area':
            case 'circumference_from_area':
                params.area = numbers && numbers[0] ? parseFloat(numbers[0]) : 0;
                break;

            case 'sector_area':
            case 'arc_length':
                params.radius = numbers && numbers[0] ? parseFloat(numbers[0]) : 0;
                params.angle = numbers && numbers[1] ? parseFloat(numbers[1]) : 0;
                break;

            case 'annulus_area':
                params.outerRadius = numbers && numbers[0] ? parseFloat(numbers[0]) : 0;
                params.innerRadius = numbers && numbers[1] ? parseFloat(numbers[1]) : 0;
                break;
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

    // CIRCLE EQUATION SOLVERS

    solveCircumferenceFromRadius(problem) {
        const { radius } = problem.parameters;
        const pi = Math.PI;
        const solution = 2 * pi * radius;

        return {
            type: 'Circumference from Radius',
            formula: 'C = 2πr',
            given: { radius: radius },
            calculation: `C = 2π(${radius})`,
            exactAnswer: `${2 * radius}π`,
            approximateAnswer: solution.toFixed(2),
            solution: solution,
            units: problem.context.units || 'units',
            category: 'circumference',
            verification: this.verifyCircumference(solution, radius, null)
        };
    }

    solveCircumferenceFromDiameter(problem) {
        const { diameter } = problem.parameters;
        const pi = Math.PI;
        const solution = pi * diameter;

        return {
            type: 'Circumference from Diameter',
            formula: 'C = πd',
            given: { diameter: diameter },
            calculation: `C = π(${diameter})`,
            exactAnswer: `${diameter}π`,
            approximateAnswer: solution.toFixed(2),
            solution: solution,
            units: problem.context.units || 'units',
            category: 'circumference',
            verification: this.verifyCircumference(solution, null, diameter)
        };
    }

    solveAreaFromRadius(problem) {
        const { radius } = problem.parameters;
        const pi = Math.PI;
        const solution = pi * radius * radius;

        return {
            type: 'Area from Radius',
            formula: 'A = πr²',
            given: { radius: radius },
            calculation: `A = π(${radius}²) = π(${radius * radius})`,
            exactAnswer: `${radius * radius}π`,
            approximateAnswer: solution.toFixed(2),
            solution: solution,
            units: `${problem.context.units || 'units'}²`,
            category: 'area',
            verification: this.verifyArea(solution, radius)
        };
    }

    solveAreaFromDiameter(problem) {
        const { diameter } = problem.parameters;
        const radius = diameter / 2;
        const pi = Math.PI;
        const solution = pi * radius * radius;

        return {
            type: 'Area from Diameter',
            formula: 'A = π(d/2)²',
            given: { diameter: diameter },
            intermediateStep: `radius = ${diameter}/2 = ${radius}`,
            calculation: `A = π(${radius}²) = π(${radius * radius})`,
            exactAnswer: `${radius * radius}π`,
            approximateAnswer: solution.toFixed(2),
            solution: solution,
            units: `${problem.context.units || 'units'}²`,
            category: 'area',
            verification: this.verifyArea(solution, radius)
        };
    }

    solveRadiusFromCircumference(problem) {
        const { circumference } = problem.parameters;
        const pi = Math.PI;
        const solution = circumference / (2 * pi);

        return {
            type: 'Radius from Circumference',
            formula: 'r = C/(2π)',
            given: { circumference: circumference },
            calculation: `r = ${circumference}/(2π) = ${circumference}/${(2 * pi).toFixed(4)}`,
            solution: solution,
            approximateAnswer: solution.toFixed(2),
            units: problem.context.units || 'units',
            category: 'reverse_circumference',
            verification: this.verifyCircumference(circumference, solution, null)
        };
    }

    solveDiameterFromCircumference(problem) {
        const { circumference } = problem.parameters;
        const pi = Math.PI;
        const solution = circumference / pi;

        return {
            type: 'Diameter from Circumference',
            formula: 'd = C/π',
            given: { circumference: circumference },
            calculation: `d = ${circumference}/π = ${circumference}/${pi.toFixed(4)}`,
            solution: solution,
            approximateAnswer: solution.toFixed(2),
            units: problem.context.units || 'units',
            category: 'reverse_circumference',
            verification: this.verifyCircumference(circumference, null, solution)
        };
    }

    solveRadiusFromArea(problem) {
        const { area } = problem.parameters;
        const pi = Math.PI;
        const solution = Math.sqrt(area / pi);

        return {
            type: 'Radius from Area',
            formula: 'r = √(A/π)',
            given: { area: area },
            calculation: `r = √(${area}/π) = √(${(area / pi).toFixed(4)})`,
            solution: solution,
            approximateAnswer: solution.toFixed(2),
            units: problem.context.units || 'units',
            category: 'reverse_area',
            verification: this.verifyArea(area, solution)
        };
    }

    solveDiameterFromArea(problem) {
        const { area } = problem.parameters;
        const pi = Math.PI;
        const radius = Math.sqrt(area / pi);
        const solution = 2 * radius;

        return {
            type: 'Diameter from Area',
            formula: 'd = 2√(A/π)',
            given: { area: area },
            intermediateStep: `radius = √(${area}/π) = ${radius.toFixed(4)}`,
            calculation: `d = 2(${radius.toFixed(4)})`,
            solution: solution,
            approximateAnswer: solution.toFixed(2),
            units: problem.context.units || 'units',
            category: 'reverse_area',
            verification: this.verifyArea(area, radius)
        };
    }

    solveAreaFromCircumference(problem) {
        const { circumference } = problem.parameters;
        const pi = Math.PI;
        const solution = (circumference * circumference) / (4 * pi);

        return {
            type: 'Area from Circumference',
            formula: 'A = C²/(4π)',
            given: { circumference: circumference },
            calculation: `A = (${circumference}²)/(4π) = ${circumference * circumference}/${(4 * pi).toFixed(4)}`,
            solution: solution,
            approximateAnswer: solution.toFixed(2),
            units: `${problem.context.units || 'units'}²`,
            category: 'cross_calculation',
            alternativeMethod: 'Find radius first: r = C/(2π), then A = πr²'
        };
    }

    solveCircumferenceFromArea(problem) {
        const { area } = problem.parameters;
        const pi = Math.PI;
        const solution = 2 * Math.sqrt(pi * area);

        return {
            type: 'Circumference from Area',
            formula: 'C = 2√(πA)',
            given: { area: area },
            calculation: `C = 2√(π×${area}) = 2√(${(pi * area).toFixed(4)})`,
            solution: solution,
            approximateAnswer: solution.toFixed(2),
            units: problem.context.units || 'units',
            category: 'cross_calculation',
            alternativeMethod: 'Find radius first: r = √(A/π), then C = 2πr'
        };
    }

    solveSemicircleArea(problem) {
        const { radius } = problem.parameters;
        const pi = Math.PI;
        const solution = (pi * radius * radius) / 2;

        return {
            type: 'Semicircle Area',
            formula: 'A = πr²/2',
            given: { radius: radius },
            calculation: `A = π(${radius}²)/2 = ${pi * radius * radius}/2`,
            exactAnswer: `${radius * radius}π/2`,
            approximateAnswer: solution.toFixed(2),
            solution: solution,
            units: `${problem.context.units || 'units'}²`,
            category: 'semicircle',
            note: 'Semicircle area is half of full circle area'
        };
    }

    solveSemicirclePerimeter(problem) {
        const { radius } = problem.parameters;
        const pi = Math.PI;
        const solution = pi * radius + 2 * radius;

        return {
            type: 'Semicircle Perimeter',
            formula: 'P = πr + 2r = r(π + 2)',
            given: { radius: radius },
            calculation: `P = π(${radius}) + 2(${radius}) = ${(pi * radius).toFixed(2)} + ${2 * radius}`,
            exactAnswer: `${radius}(π + 2)`,
            approximateAnswer: solution.toFixed(2),
            solution: solution,
            units: problem.context.units || 'units',
            category: 'semicircle',
            note: 'Includes curved part (πr) plus diameter (2r)'
        };
    }

    solveQuarterCircleArea(problem) {
        const { radius } = problem.parameters;
        const pi = Math.PI;
        const solution = (pi * radius * radius) / 4;

        return {
            type: 'Quarter Circle Area',
            formula: 'A = πr²/4',
            given: { radius: radius },
            calculation: `A = π(${radius}²)/4 = ${pi * radius * radius}/4`,
            exactAnswer: `${radius * radius}π/4`,
            approximateAnswer: solution.toFixed(2),
            solution: solution,
            units: `${problem.context.units || 'units'}²`,
            category: 'quarter_circle'
        };
    }

    solveQuarterCirclePerimeter(problem) {
        const { radius } = problem.parameters;
        const pi = Math.PI;
        const solution = (pi * radius) / 2 + 2 * radius;

        return {
            type: 'Quarter Circle Perimeter',
            formula: 'P = πr/2 + 2r',
            given: { radius: radius },
            calculation: `P = π(${radius})/2 + 2(${radius})`,
            approximateAnswer: solution.toFixed(2),
            solution: solution,
            units: problem.context.units || 'units',
            category: 'quarter_circle',
            note: 'Includes arc (πr/2) plus two radii (2r)'
        };
    }

    solveSectorArea(problem) {
        const { radius, angle } = problem.parameters;
        const pi = Math.PI;
        const solution = (angle / 360) * pi * radius * radius;

        return {
            type: 'Sector Area',
            formula: 'A = (θ/360) × πr²',
            given: { radius: radius, angle: angle },
            calculation: `A = (${angle}/360) × π(${radius}²) = ${angle / 360} × ${pi * radius * radius}`,
            solution: solution,
            approximateAnswer: solution.toFixed(2),
            units: `${problem.context.units || 'units'}²`,
            category: 'sector',
            note: `Sector is ${angle}° out of 360°, which is ${(angle / 360 * 100).toFixed(1)}% of circle`
        };
    }

    solveArcLength(problem) {
        const { radius, angle } = problem.parameters;
        const pi = Math.PI;
        const solution = (angle / 360) * 2 * pi * radius;

        return {
            type: 'Arc Length',
            formula: 'L = (θ/360) × 2πr',
            given: { radius: radius, angle: angle },
            calculation: `L = (${angle}/360) × 2π(${radius})`,
            solution: solution,
            approximateAnswer: solution.toFixed(2),
            units: problem.context.units || 'units',
            category: 'arc',
            note: `Arc is ${angle}° out of 360°, which is ${(angle / 360 * 100).toFixed(1)}% of circumference`
        };
    }

    solveAnnulusArea(problem) {
        const { outerRadius, innerRadius } = problem.parameters;
        const pi = Math.PI;
        const solution = pi * (outerRadius * outerRadius - innerRadius * innerRadius);

        return {
            type: 'Annulus (Ring) Area',
            formula: 'A = π(R² - r²)',
            given: { outerRadius: outerRadius, innerRadius: innerRadius },
            calculation: `A = π(${outerRadius}² - ${innerRadius}²) = π(${outerRadius * outerRadius} - ${innerRadius * innerRadius})`,
            exactAnswer: `${outerRadius * outerRadius - innerRadius * innerRadius}π`,
            approximateAnswer: solution.toFixed(2),
            solution: solution,
            units: `${problem.context.units || 'units'}²`,
            category: 'annulus',
            note: 'Ring area = outer circle area - inner circle area'
        };
    }

    solveWordWheel(problem) {
        return {
            type: 'Wheel/Revolution Problem',
            approach: 'Use C = 2πr to find distance per revolution, then multiply by number of revolutions',
            category: 'word_problems',
            hint: 'One complete revolution = one circumference distance'
        };
    }

    solveWordCircularRegion(problem) {
        return {
            type: 'Circular Region Problem',
            approach: 'Identify if problem needs circumference (fence/border) or area (planting/coverage)',
            category: 'word_problems',
            hint: 'Perimeter/fence → circumference. Space/coverage → area'
        };
    }

    solveWordPizza(problem) {
        return {
            type: 'Pizza/Pie Problem',
            approach: 'Use area to compare sizes. Remember diameter is given, so find radius first.',
            category: 'word_problems',
            hint: 'Pizza size comparison: calculate and compare areas'
        };
    }

    // VERIFICATION METHODS

    verifyCircumference(circumference, radius, diameter) {
        const pi = Math.PI;
        let calculated;
        
        if (radius !== null) {
            calculated = 2 * pi * radius;
        } else if (diameter !== null) {
            calculated = pi * diameter;
        }

        const difference = Math.abs(calculated - circumference);
        const isValid = difference < 1e-6;

        return {
            given: radius !== null ? `radius = ${radius}` : `diameter = ${diameter}`,
            calculated: `C = ${calculated.toFixed(4)}`,
            expected: `C = ${circumference}`,
            difference: difference.toExponential(2),
            isValid: isValid
        };
    }

    verifyArea(area, radius) {
        const pi = Math.PI;
        const calculated = pi * radius * radius;
        const difference = Math.abs(calculated - area);
        const isValid = difference < 1e-6;

        return {
            given: `radius = ${radius}`,
            calculated: `A = π(${radius}²) = ${calculated.toFixed(4)}`,
            expected: `A = ${area}`,
            difference: difference.toExponential(2),
            isValid: isValid
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

        if (this.explanationLevel === 'ELI5') {
            baseSteps = this.addELI5Explanations(baseSteps, problem);
        }

        return baseSteps;
    }

    generateBaseCircleSteps(problem, solution) {
        const { type } = problem;
        const category = this.circleTypes[type]?.category;

        switch(category) {
            case 'circumference':
                return this.generateCircumferenceSteps(problem, solution);
            case 'area':
                return this.generateAreaSteps(problem, solution);
            case 'reverse_circumference':
                return this.generateReverseCircumferenceSteps(problem, solution);
            case 'reverse_area':
                return this.generateReverseAreaSteps(problem, solution);
            case 'cross_calculation':
                return this.generateCrossCalculationSteps(problem, solution);
            case 'semicircle':
                return this.generateSemicircleSteps(problem, solution);
            case 'quarter_circle':
                return this.generateQuarterCircleSteps(problem, solution);
            case 'sector':
                return this.generateSectorSteps(problem, solution);
            case 'arc':
                return this.generateArcSteps(problem, solution);
            case 'annulus':
                return this.generateAnnulusSteps(problem, solution);
            default:
                return this.generateGenericCircleSteps(problem, solution);
        }
    }

    generateCircumferenceSteps(problem, solution) {
        const steps = [];
        const { radius, diameter } = problem.parameters;

        // Step 1: Identify what's given
        steps.push({
            stepNumber: 1,
            step: 'Identify Given Information',
            description: radius !== undefined ? 
                `Given: radius r = ${radius} ${problem.context.units || 'units'}` :
                `Given: diameter d = ${diameter} ${problem.context.units || 'units'}`,
            reasoning: 'First, identify what measurement we have for the circle',
            goalStatement: 'We need to find the circumference (distance around the circle)'
        });

        // Step 2: Choose formula
        steps.push({
            stepNumber: 2,
            step: 'Select Formula',
            description: solution.formula,
            expression: solution.formula,
            reasoning: radius !== undefined ?
                'Use C = 2πr when radius is given' :
                'Use C = πd when diameter is given',
            conceptualNote: 'Circumference formula relates the circle\'s perimeter to its radius or diameter'
        });

        // Step 3: Substitute values
        steps.push({
            stepNumber: 3,
            step: 'Substitute Values',
            description: 'Replace variables with known values',
            beforeExpression: solution.formula,
            afterExpression: solution.calculation,
            reasoning: radius !== undefined ?
                `Substitute r = ${radius}` :
                `Substitute d = ${diameter}`,
            visualHint: 'Make sure you\'re using the correct value'
        });

        // Step 4: Calculate
        steps.push({
            stepNumber: 4,
            step: 'Calculate Result',
            description: 'Multiply to find circumference',
            expression: `C = ${solution.exactAnswer}`,
            approximateExpression: `C ≈ ${solution.approximateAnswer} ${solution.units}`,
            reasoning: 'Use π ≈ 3.14159 for numerical approximation',
            exactVsApproximate: {
                exact: solution.exactAnswer,
                approximate: solution.approximateAnswer,
                note: 'Exact answer keeps π symbol; approximate uses decimal value'
            }
        });

        // Step 5: Final answer
        steps.push({
            stepNumber: 5,
            step: 'Final Answer',
            description: 'State the solution with proper units',
            expression: `C ≈ ${solution.approximateAnswer} ${solution.units}`,
            finalAnswer: true,
            reasoning: 'Circumference is measured in linear units (same as radius/diameter)',
            unitCheck: `Units are ${solution.units} (linear measurement)`
        });

        return steps;
    }

    generateAreaSteps(problem, solution) {
        const steps = [];
        const { radius, diameter } = problem.parameters;

        // Step 1: Identify given
        steps.push({
            stepNumber: 1,
            step: 'Identify Given Information',
            description: radius !== undefined ?
                `Given: radius r = ${radius} ${problem.context.units || 'units'}` :
                `Given: diameter d = ${diameter} ${problem.context.units || 'units'}`,
            reasoning: 'Identify the circle measurement we have',
            goalStatement: 'We need to find the area (space inside the circle)'
        });

        // Step 2: Convert if needed
        if (diameter !== undefined) {
            steps.push({
                stepNumber: 2,
                step: 'Find Radius from Diameter',
                description: 'Since area formula uses radius, convert diameter to radius',
                expression: `r = d/2 = ${diameter}/2 = ${diameter / 2}`,
                reasoning: 'Diameter is twice the radius, so radius = diameter ÷ 2',
                importantNote: 'Area formula requires radius, not diameter'
            });
        }

        // Step 3: Choose formula
        const stepNum = diameter !== undefined ? 3 : 2;
        steps.push({
            stepNumber: stepNum,
            step: 'Select Formula',
            description: 'A = πr²',
            expression: 'A = πr²',
            reasoning: 'Area of a circle is π times radius squared',
            conceptualNote: 'The r² means area grows with square of radius'
        });

        // Step 4: Square the radius
        const r = radius !== undefined ? radius : diameter / 2;
        steps.push({
            stepNumber: stepNum + 1,
            step: 'Square the Radius',
            description: `Calculate r²`,
            expression: `r² = ${r}² = ${r * r}`,
            reasoning: 'Squaring the radius is a crucial step - don\'t skip it!',
            commonMistake: 'Don\'t forget to square the radius - it\'s r², not just r',
            visualHint: `${r} × ${r} = ${r * r}`
        });

        // Step 5: Multiply by π
        steps.push({
            stepNumber: stepNum + 2,
            step: 'Multiply by π',
            description: 'Multiply the squared radius by π',
            expression: `A = π(${r * r})`,
            exactAnswer: `${r * r}π`,
            approximateAnswer: `${solution.approximateAnswer}`,
            reasoning: 'Multiply r² by π to get area'
        });

        // Step 6: Final answer
        steps.push({
            stepNumber: stepNum + 3,
            step: 'Final Answer',
            description: 'State the solution with proper square units',
            expression: `A ≈ ${solution.approximateAnswer} ${solution.units}`,
            finalAnswer: true,
            reasoning: 'Area is measured in square units',
            unitCheck: `Units are ${solution.units} (square units for area)`
        });

        return steps;
    }

    generateReverseCircumferenceSteps(problem, solution) {
        const steps = [];
        const { circumference } = problem.parameters;
        const isRadius = solution.type.includes('Radius');

        // Step 1: Given circumference
        steps.push({
            stepNumber: 1,
            step: 'Identify Given Information',
            description: `Given: circumference C = ${circumference} ${problem.context.units || 'units'}`,
            reasoning: 'We know the distance around the circle',
            goalStatement: isRadius ? 
                'We need to find the radius' : 
                'We need to find the diameter'
        });

        // Step 2: Write formula
        steps.push({
            stepNumber: 2,
            step: 'Write Circumference Formula',
            description: isRadius ? 'C = 2πr' : 'C = πd',
            reasoning: 'Start with the circumference formula',
            note: 'We\'ll rearrange this to solve for the unknown'
        });

        // Step 3: Solve for unknown
        steps.push({
            stepNumber: 3,
            step: isRadius ? 'Solve for Radius' : 'Solve for Diameter',
            description: isRadius ? 
                'Divide both sides by 2π to isolate r' :
                'Divide both sides by π to isolate d',
            beforeExpression: isRadius ? 'C = 2πr' : 'C = πd',
            operation: isRadius ? '÷ 2π' : '÷ π',
            afterExpression: solution.formula,
            reasoning: 'Use inverse operation to isolate the variable',
            algebraicRule: 'Division Property of Equality'
        });

        // Step 4: Substitute and calculate
        steps.push({
            stepNumber: 4,
            step: 'Substitute and Calculate',
            description: `Substitute C = ${circumference}`,
            expression: solution.calculation,
            reasoning: isRadius ?
                `Divide ${circumference} by 2π (approximately 6.283)` :
                `Divide ${circumference} by π (approximately 3.14159)`,
            calculation: `≈ ${solution.approximateAnswer}`
        });

        // Step 5: Final answer
        steps.push({
            stepNumber: 5,
            step: 'Final Answer',
            description: `${isRadius ? 'Radius' : 'Diameter'} = ${solution.approximateAnswer} ${solution.units}`,
            expression: `${isRadius ? 'r' : 'd'} ≈ ${solution.approximateAnswer} ${solution.units}`,
            finalAnswer: true,
            reasoning: 'This is the circle\'s ' + (isRadius ? 'radius' : 'diameter')
        });

        return steps;
    }

    generateReverseAreaSteps(problem, solution) {
        const steps = [];
        const { area } = problem.parameters;
        const isRadius = solution.type.includes('Radius');

        // Step 1: Given area
        steps.push({
            stepNumber: 1,
            step: 'Identify Given Information',
            description: `Given: area A = ${area} ${problem.context.units || 'units'}²`,
            reasoning: 'We know the space inside the circle',
            goalStatement: isRadius ?
                'We need to find the radius' :
                'We need to find the diameter'
        });

        // Step 2: Write area formula
        steps.push({
            stepNumber: 2,
            step: 'Write Area Formula',
            description: 'A = πr²',
            reasoning: 'Start with the area formula',
            note: 'We\'ll solve this for r'
        });

        // Step 3: Divide by π
        steps.push({
            stepNumber: 3,
            step: 'Divide by π',
            description: 'Isolate r² by dividing both sides by π',
            beforeExpression: 'A = πr²',
            operation: '÷ π',
            afterExpression: 'r² = A/π',
            reasoning: 'This removes π from the right side',
            calculation: `r² = ${area}/π ≈ ${(area / Math.PI).toFixed(4)}`
        });

        // Step 4: Take square root
        steps.push({
            stepNumber: 4,
            step: 'Take Square Root',
            description: 'Find r by taking the square root of both sides',
            beforeExpression: `r² = ${(area / Math.PI).toFixed(4)}`,
            operation: '√',
            afterExpression: `r = √(${(area / Math.PI).toFixed(4)})`,
            reasoning: 'Square root undoes squaring',
            importantNote: 'Only use positive square root (radius is always positive)',
            calculation: `r ≈ ${Math.sqrt(area / Math.PI).toFixed(4)}`
        });

        // Step 5: Find diameter if needed
        if (!isRadius) {
            const radius = Math.sqrt(area / Math.PI);
            steps.push({
                stepNumber: 5,
                step: 'Find Diameter',
                description: 'Double the radius to get diameter',
                expression: `d = 2r = 2(${radius.toFixed(4)})`,
                reasoning: 'Diameter is twice the radius',
                calculation: `d ≈ ${solution.approximateAnswer}`
            });
        }

        // Final step
        steps.push({
            stepNumber: isRadius ? 5 : 6,
            step: 'Final Answer',
            description: `${isRadius ? 'Radius' : 'Diameter'} = ${solution.approximateAnswer} ${solution.units}`,
            expression: `${isRadius ? 'r' : 'd'} ≈ ${solution.approximateAnswer} ${solution.units}`,
            finalAnswer: true
        });

        return steps;
    }

    generateCrossCalculationSteps(problem, solution) {
        const steps = [];
        const isAreaFromC = solution.type.includes('Area from Circumference');

        // Step 1: Given
        steps.push({
            stepNumber: 1,
            step: 'Identify Given Information',
            description: isAreaFromC ?
                `Given: circumference C = ${problem.parameters.circumference}` :
                `Given: area A = ${problem.parameters.area}`,
            goalStatement: isAreaFromC ?
                'Find area from circumference' :
                'Find circumference from area'
        });

        // Step 2: Strategy
        steps.push({
            stepNumber: 2,
            step: 'Solution Strategy',
            description: 'Two approaches: use direct formula or find radius first',
            approach1: 'Direct formula: ' + solution.formula,
            approach2: solution.alternativeMethod,
            reasoning: 'Direct formula is faster; step-by-step is clearer'
        });

        // Step 3: Apply formula
        steps.push({
            stepNumber: 3,
            step: 'Apply Formula',
            description: 'Using direct formula',
            expression: solution.calculation,
            reasoning: 'Substitute known value into formula'
        });

        // Step 4: Calculate
        steps.push({
            stepNumber: 4,
            step: 'Calculate Result',
            description: 'Perform the calculation',
            expression: `≈ ${solution.approximateAnswer} ${solution.units}`,
            finalAnswer: true
        });

        return steps;
    }

    generateSemicircleSteps(problem, solution) {
        const steps = [];
        const isArea = solution.type.includes('Area');

        // Step 1: Identify
        steps.push({
            stepNumber: 1,
            step: 'Identify Shape',
            description: `Semicircle with radius ${problem.parameters.radius}`,
            reasoning: 'A semicircle is exactly half of a circle',
            visualHint: 'Picture a circle cut in half'
        });

        if (isArea) {
            // Area steps
            steps.push({
                stepNumber: 2,
                step: 'Full Circle Area',
                description: 'Calculate area of full circle first',
                expression: `A_full = πr² = π(${problem.parameters.radius}²)`,
                calculation: `= ${Math.PI * problem.parameters.radius ** 2}`,
                reasoning: 'Start with complete circle area'
            });

            steps.push({
                stepNumber: 3,
                step: 'Divide by 2',
                description: 'Semicircle is half the circle',
                expression: solution.calculation,
                reasoning: 'Semicircle area = (full circle area) ÷ 2',
                finalAnswer: true,
                result: `A ≈ ${solution.approximateAnswer} ${solution.units}`
            });
        } else {
            // Perimeter steps
            steps.push({
                stepNumber: 2,
                step: 'Calculate Arc Length',
                description: 'Curved part is half the circumference',
                expression: `Arc = πr = π(${problem.parameters.radius})`,
                calculation: `≈ ${(Math.PI * problem.parameters.radius).toFixed(2)}`,
                reasoning: 'Half of full circumference (2πr) is πr'
            });

            steps.push({
                stepNumber: 3,
                step: 'Add Diameter',
                description: 'Don\'t forget the straight edge!',
                expression: `Diameter = 2r = 2(${problem.parameters.radius}) = ${2 * problem.parameters.radius}`,
                reasoning: 'Perimeter includes both curved and straight parts',
                importantNote: 'Many students forget to add the diameter!'
            });

            steps.push({
                stepNumber: 4,
                step: 'Total Perimeter',
                description: 'Add arc length and diameter',
                expression: solution.calculation,
                finalAnswer: true,
                result: `P ≈ ${solution.approximateAnswer} ${solution.units}`
            });
        }

        return steps;
    }

    generateQuarterCircleSteps(problem, solution) {
        const steps = [];
        const isArea = solution.type.includes('Area');

        steps.push({
            stepNumber: 1,
            step: 'Identify Shape',
            description: `Quarter circle with radius ${problem.parameters.radius}`,
            reasoning: 'A quarter circle is 1/4 of a full circle',
            visualHint: 'Like a pizza slice that\'s 1/4 of the pizza'
        });

        if (isArea) {
            steps.push({
                stepNumber: 2,
                step: 'Full Circle Area',
                description: 'Calculate full circle area',
                expression: `A_full = π(${problem.parameters.radius}²) = ${Math.PI * problem.parameters.radius ** 2}`,
                reasoning: 'Start with complete circle'
            });

            steps.push({
                stepNumber: 3,
                step: 'Divide by 4',
                description: 'Quarter circle is 1/4 of full circle',
                expression: solution.calculation,
                finalAnswer: true,
                result: `A ≈ ${solution.approximateAnswer} ${solution.units}`
            });
        } else {
            steps.push({
                stepNumber: 2,
                step: 'Arc Length',
                description: 'Curved part is 1/4 of circumference',
                expression: `Arc = (2πr)/4 = πr/2`,
                calculation: `= π(${problem.parameters.radius})/2 ≈ ${(Math.PI * problem.parameters.radius / 2).toFixed(2)}`
            });

            steps.push({
                stepNumber: 3,
                step: 'Add Two Radii',
                description: 'Add the two straight edges',
                expression: `2r = 2(${problem.parameters.radius}) = ${2 * problem.parameters.radius}`,
                reasoning: 'Quarter circle perimeter includes arc plus two radii'
            });

            steps.push({
                stepNumber: 4,
                step: 'Total Perimeter',
                expression: solution.calculation,
                finalAnswer: true,
                result: `P ≈ ${solution.approximateAnswer} ${solution.units}`
            });
        }

        return steps;
    }

    generateSectorSteps(problem, solution) {
        const steps = [];
        const { radius, angle } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Identify Sector',
            description: `Sector with radius ${radius} and central angle ${angle}°`,
            reasoning: 'A sector is a "pie slice" of the circle',
            visualHint: `The sector is ${(angle / 360 * 100).toFixed(1)}% of the full circle`
        });

        steps.push({
            stepNumber: 2,
            step: 'Find Fraction',
            description: 'Determine what fraction of the circle the sector represents',
            expression: `Fraction = ${angle}°/360° = ${(angle / 360).toFixed(4)}`,
            reasoning: 'Full circle is 360°, so sector is θ/360 of the circle',
            percentage: `${(angle / 360 * 100).toFixed(1)}%`
        });

        steps.push({
            stepNumber: 3,
            step: 'Full Circle Area',
            description: 'Calculate area of full circle',
            expression: `A_full = π(${radius}²) = ${Math.PI * radius * radius}`,
            reasoning: 'We\'ll take a fraction of this'
        });

        steps.push({
            stepNumber: 4,
            step: 'Multiply by Fraction',
            description: 'Sector area = fraction × full circle area',
            expression: solution.calculation,
            reasoning: `Take ${(angle / 360 * 100).toFixed(1)}% of the full circle area`,
            finalAnswer: true,
            result: `A ≈ ${solution.approximateAnswer} ${solution.units}`
        });

        return steps;
    }

    generateArcSteps(problem, solution) {
        const steps = [];
        const { radius, angle } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Identify Arc',
            description: `Arc with radius ${radius} and central angle ${angle}°`,
            reasoning: 'An arc is part of the circle\'s circumference',
            visualHint: `The arc is ${(angle / 360 * 100).toFixed(1)}% of the full circumference`
        });

        steps.push({
            stepNumber: 2,
            step: 'Find Fraction',
            description: 'Determine what fraction of the circumference',
            expression: `Fraction = ${angle}°/360° = ${(angle / 360).toFixed(4)}`,
            reasoning: 'Arc is θ/360 of the full circumference'
        });

        steps.push({
            stepNumber: 3,
            step: 'Full Circumference',
            description: 'Calculate full circle circumference',
            expression: `C_full = 2π(${radius}) = ${2 * Math.PI * radius}`,
            reasoning: 'We\'ll take a fraction of this'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate Arc Length',
            description: 'Arc length = fraction × full circumference',
            expression: solution.calculation,
            finalAnswer: true,
            result: `L ≈ ${solution.approximateAnswer} ${solution.units}`
        });

        return steps;
    }

    generateAnnulusSteps(problem, solution) {
        const steps = [];
        const { outerRadius, innerRadius } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Identify Annulus',
            description: `Ring with outer radius ${outerRadius} and inner radius ${innerRadius}`,
            reasoning: 'An annulus is the region between two circles',
            visualHint: 'Like a donut or washer shape'
        });

        steps.push({
            stepNumber: 2,
            step: 'Outer Circle Area',
            description: 'Calculate area of outer circle',
            expression: `A_outer = π(${outerRadius}²) = ${Math.PI * outerRadius ** 2}`,
            reasoning: 'This is the total area including the hole'
        });

        steps.push({
            stepNumber: 3,
            step: 'Inner Circle Area',
            description: 'Calculate area of inner circle (the hole)',
            expression: `A_inner = π(${innerRadius}²) = ${Math.PI * innerRadius ** 2}`,
            reasoning: 'This is the area we need to subtract'
        });

        steps.push({
            stepNumber: 4,
            step: 'Subtract to Find Ring Area',
            description: 'Ring area = outer area - inner area',
            expression: solution.calculation,
            reasoning: 'Subtract the hole from the total',
            finalAnswer: true,
            result: `A ≈ ${solution.approximateAnswer} ${solution.units}`
        });

        return steps;
    }

    generateGenericCircleSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Circle Calculation',
            description: solution.type || 'Solve circle problem',
            expression: solution.formula || 'Apply appropriate formula',
            solution: solution,
            finalAnswer: true
        }];
    }

    // ENHANCED EXPLANATION METHODS (similar to linear workbook)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanationCircle(step, problem),
                procedural: this.getProceduralExplanationCircle(step),
                visual: this.getVisualExplanationCircle(step, problem),
                algebraic: this.getAlgebraicExplanationCircle(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisitesCircle(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyCircle(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPromptsCircle(step);
        }

        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestionCircle(step);
        }

        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findRealWorldConnectionCircle(step, problem);
        }

        return enhanced;
    }

    getConceptualExplanationCircle(step, problem) {
        const conceptualExplanations = {
            'Identify Given Information': 'Understanding what measurement you have is crucial - radius, diameter, circumference, or area all require different formulas.',
            'Select Formula': 'Each circle formula connects different measurements. Choosing the right one depends on what you have and what you need.',
            'Square the Radius': 'Squaring the radius shows why area grows so quickly - doubling radius makes area 4 times bigger!',
            'Divide by π': 'Dividing by π "undoes" multiplication by π, helping us isolate the variable.',
            'Take Square Root': 'Square root undoes squaring, recovering the original radius from r².',
            'Calculate Arc Length': 'The arc is a fraction of the full circumference, proportional to the central angle.'
        };

        return conceptualExplanations[step.step] || 'This step progresses toward finding the solution.';
    }

    getProceduralExplanationCircle(step) {
        if (step.expression) {
            return `Apply the formula ${step.expression} by substituting known values and calculating the result.`;
        }
        return 'Follow the standard procedure for this calculation.';
    }

    getVisualExplanationCircle(step, problem) {
        const visualExplanations = {
            'circumference': 'Imagine wrapping a string around the circle, then measuring its length.',
            'area': 'Picture filling the circle with paint - area is how much surface you cover.',
            'semicircle': 'Visualize a circle cut perfectly in half.',
            'sector': 'Think of a pizza slice - the bigger the angle, the bigger the slice.',
            'annulus': 'Picture a donut or ring - the shaded region between two circles.'
        };

        const category = this.circleTypes[problem.type]?.category;
        return visualExplanations[category] || 'Draw a circle and label the known measurements.';
    }

    getAlgebraicExplanationCircle(step) {
        const algebraicRules = {
            'Square the Radius': 'Apply the exponent: r² = r × r',
            'Divide by π': 'Division Property of Equality: if a = bc, then a/b = c',
            'Take Square Root': 'Square root is inverse of squaring: if r² = x, then r = √x',
            'Multiply by π': 'Multiplication to find area or circumference'
        };

        return algebraicRules[step.step] || 'Apply standard algebraic operations.';
    }

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateELI5ExplanationCircle(step, problem),
                analogy: this.findRelevantAnalogyCircle(step, problem),
                simpleLanguage: this.convertToSimpleLanguageCircle(step.description),
                visualization: this.suggestVisualizationCircle(step)
            }
        }));
    }

    generateELI5ExplanationCircle(step, problem) {
        const ELI5Explanations = {
            'Identify Given Information': "First, let's see what we know about our circle!",
            'Select Formula': "Now we pick the magic rule that helps us find what we're looking for!",
            'Square the Radius': "We multiply the radius by itself - like saying 'radius times radius'!",
            'Multiply by π': "Now we multiply by π (pi), which is a special number about 3.14!",
            'Divide by π': "We divide by π to undo the multiplication, like working backwards!",
            'Take Square Root': "Taking the square root is like asking 'what number times itself gives this?'",
            'Calculate Arc Length': "The arc is like walking part way around the circle!",
            'Add Diameter': "Don't forget to include the straight part across the middle!"
        };

        return ELI5Explanations[step.step] || "We're taking another step to solve our circle puzzle!";
    }

    findRelevantAnalogyCircle(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(problem.type) || analogy.suitableFor.includes('all_circle')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of a circle like a perfectly round pizza!";
    }

    convertToSimpleLanguageCircle(description) {
        const simplifications = {
            'circumference': 'distance around the circle',
            'area': 'space inside the circle',
            'radius': 'distance from center to edge',
            'diameter': 'distance across through the center',
            'π': 'pi (the special circle number, about 3.14)',
            'squared': 'times itself',
            'square root': 'the number that when multiplied by itself gives',
            'sector': 'pizza slice shape',
            'arc': 'curved part of the edge',
            'annulus': 'ring or donut shape'
        };

        let simple = description;
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp(term, 'gi');
            simple = simple.replace(regex, replacement);
        }

        return simple;
    }

    suggestVisualizationCircle(step) {
        const visualizations = {
            'Identify Given Information': 'Draw a circle and label what you know (r, d, C, or A)',
            'Square the Radius': 'Draw a square with sides equal to the radius to see r²',
            'Calculate Arc Length': 'Highlight the curved portion you\'re measuring',
            'Add Diameter': 'Draw a straight line across the semicircle',
            'Subtract to Find Ring Area': 'Shade the ring region between two circles'
        };

        return visualizations[step.step] || 'Draw the circle and mark the measurements';
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: {
                        currentState: `We now have: ${steps[i].afterExpression || steps[i].expression || 'this result'}`,
                        nextGoal: `Next, we need to: ${steps[i + 1].description}`,
                        why: `This is necessary to ${this.explainStepNecessityCircle(steps[i], steps[i + 1])}`,
                        howItHelps: `This brings us closer to ${problem.type.includes('area') ? 'finding the area' : problem.type.includes('circumference') ? 'finding the circumference' : 'the solution'}`
                    }
                });
            }
        }

        return enhancedSteps;
    }

    explainStepNecessityCircle(currentStep, nextStep) {
        return `continue the calculation toward our goal`;
    }

    addErrorPrevention(step, problemType) {
        const category = this.circleTypes[problemType]?.category || 'circumference';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsCircle(step, problemType),
                checkPoints: this.generateCheckPointsCircle(step),
                warningFlags: this.identifyWarningFlagsCircle(step, problemType)
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestionCircle(step),
                expectedResult: this.describeExpectedResultCircle(step),
                troubleshooting: this.generateTroubleshootingTipsCircle(step)
            }
        };
    }

    generatePreventionTipsCircle(step, problemType) {
        const tips = {
            'Square the Radius': [
                'Remember to multiply radius by itself: r × r',
                'Don\'t multiply by 2, that\'s for diameter',
                'Make sure you square before multiplying by π'
            ],
            'Multiply by π': [
                'Use π ≈ 3.14159 or keep as π for exact answer',
                'Don\'t forget this step!',
                'Multiply the squared radius by π, not just π'
            ],
            'Divide by π': [
                'Remember to divide by π when finding radius from area',
                'Use calculator for accuracy',
                'Division comes before square root'
            ],
            'Take Square Root': [
                'Only take positive square root (radius is positive)',
                'Square root undoes squaring',
                'Use calculator for non-perfect squares'
            ]
        };

        return tips[step.step] || ['Check your work carefully', 'Verify units'];
    }

    generateCheckPointsCircle(step) {
        return [
            'Did I use the correct formula?',
            'Did I square the radius (not multiply by 2)?',
            'Are my units correct (linear vs. square)?',
            'Does my answer seem reasonable?'
        ];
    }

    identifyWarningFlagsCircle(step, problemType) {
        const warnings = {
            area: step.step === 'Square the Radius' ?
                ['Don\'t forget to square!', 'r² means r times r, not 2r'] : [],
            circumference: step.step === 'Multiply by π' ?
                ['Remember the 2 in C = 2πr', 'Don\'t confuse with area formula'] : []
        };

        const category = this.circleTypes[problemType]?.category || 'circumference';
        return warnings[category] || [];
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsCircle(step, problem),
                subSteps: this.breakIntoSubStepsCircle(step),
                hints: this.generateProgressiveHintsCircle(step, problem),
                practiceVariation: this.generatePracticeVariationCircle(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcessCircle(step),
                decisionPoints: this.identifyDecisionPointsCircle(step),
                alternativeApproaches: this.suggestAlternativeMethodsCircle(step, problem)
            }
        }));
    }

    generateGuidingQuestionsCircle(step, problem) {
        const questions = {
            'Identify Given Information': [
                'What measurement do I have?',
                'Is it radius, diameter, circumference, or area?',
                'What am I trying to find?'
            ],
            'Select Formula': [
                'Which formula connects what I have to what I need?',
                'Do I need circumference (C = 2πr) or area (A = πr²)?'
            ],
            'Square the Radius': [
                'What does r² mean?',
                'How do I calculate 5²?',
                'Is squaring the same as doubling?'
            ],
            'Take Square Root': [
                'What operation undoes squaring?',
                'What number times itself equals this?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'How does this help?'];
    }

    breakIntoSubStepsCircle(step) {
        if (step.step === 'Square the Radius') {
            return [
                'Identify the radius value',
                'Multiply radius by itself',
                'Write the result as r²',
                'This is ready to multiply by π'
            ];
        }

        if (step.operation) {
            return [
                'Understand what operation to perform',
                'Apply it carefully',
                'Simplify the result',
                'Check reasonableness'
            ];
        }

        return ['Understand the goal', 'Apply the technique', 'Verify'];
    }

    generateProgressiveHintsCircle(step, problem) {
        const category = this.circleTypes[problem.type]?.category || 'circumference';
        const hintSet = this.hints[category] || this.hints.circumference_from_radius;

        return {
            level1: hintSet.level1 || 'What formula applies to this situation?',
            level2: hintSet.level2 || 'Think about what you have and what you need.',
            level3: hintSet.level3 || 'Apply the appropriate circle formula.',
            level4: hintSet.level4 || 'Substitute and calculate.'
        };
    }

    generatePracticeVariationCircle(step, problem) {
        return {
            similarProblem: 'Try the same type with different measurements',
            practiceHint: 'Start with whole number radii for easier practice',
            extension: 'Once comfortable, try decimal values or reverse problems'
        };
    }

    explainThinkingProcessCircle(step) {
        return {
            observe: 'What do I see in this problem?',
            goal: 'What am I trying to find?',
            strategy: 'Which formula should I use?',
            execute: 'How do I calculate accurately?',
            verify: 'Does this answer make sense?'
        };
    }

    identifyDecisionPointsCircle(step) {
        return [
            'Which formula to use (circumference or area)?',
            'Should I find radius first?',
            'Do I need exact (π) or approximate answer?',
            'Are my units correct?'
        ];
    }

    suggestAlternativeMethodsCircle(step, problem) {
        const alternatives = {
            'Calculate Result': [
                'Use π ≈ 3.14 for simple approximation',
                'Use π ≈ 3.14159 for better accuracy',
                'Keep answer in terms of π for exact value'
            ]
        };

        return alternatives[step.step] || ['The chosen method is appropriate'];
    }

    identifyPrerequisitesCircle(step, problemType) {
        const category = this.circleTypes[problemType]?.category || 'circumference';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Basic arithmetic', 'Understanding of circles'];
    }

    identifyKeyVocabularyCircle(step) {
        const vocabulary = {
            'Identify Given Information': ['circle', 'radius', 'diameter', 'circumference', 'area'],
            'Select Formula': ['formula', 'π (pi)', 'squared'],
            'Square the Radius': ['square', 'exponent', 'r²'],
            'Multiply by π': ['π (pi)', 'product', 'multiply'],
            'Divide by π': ['divide', 'quotient', 'inverse'],
            'Take Square Root': ['square root', '√', 'inverse operation']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPromptsCircle(step) {
        return {
            before: 'Before starting, what formula do I need?',
            during: 'Am I squaring correctly? Using π properly?',
            after: 'Does my answer have the right units? Is it reasonable?'
        };
    }

    generateSelfCheckQuestionCircle(step) {
        const questions = {
            'Identify Given Information': 'Do I know whether I have radius, diameter, circumference, or area?',
            'Select Formula': 'Did I choose the right formula for what I\'m finding?',
            'Square the Radius': 'Did I multiply radius by itself (not by 2)?',
            'Multiply by π': 'Did I use π ≈ 3.14159 or keep it exact?',
            'Divide by π': 'Did I divide correctly by π?',
            'Take Square Root': 'Did I take the square root of the right value?'
        };

        return questions[step.step] || 'Does this step make sense?';
    }

    describeExpectedResultCircle(step) {
        const expectations = {
            'Square the Radius': 'A number larger than the radius (unless r < 1)',
            'Multiply by π': 'A result about 3.14 times the input',
            'Divide by π': 'A result about 1/3 of the input',
            'Take Square Root': 'A number that, when squared, gives the input'
        };

        return expectations[step.step] || 'Progress toward the answer';
    }

    generateTroubleshootingTipsCircle(step) {
        return [
            'Double-check which formula you\'re using',
            'Verify you squared the radius (not doubled it)',
            'Make sure units are correct (linear vs. square)',
            'Use calculator for π calculations',
            'Draw a picture if it helps visualize'
        ];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex}`,
            progression: 'We\'re getting closer to the answer',
            relationship: 'Each step transforms the equation toward the solution'
        };
    }

    findRealWorldConnectionCircle(step, problem) {
        const connections = {
            'circumference': 'Like measuring around a tree trunk, bicycle wheel, or circular track',
            'area': 'Like finding how much pizza you get, or grass seed needed for circular lawn',
            'semicircle': 'Like a rainbow shape or half-moon window',
            'sector': 'Like a slice of pizza or pie chart segment'
        };

        const category = this.circleTypes[problem.type]?.category;
        return connections[category] || 'Circles appear everywhere in real life!';
    }

    // GRAPH GENERATION

    generateCircleGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        if (this.visualizeCircle) {
            this.graphData = this.generateCircleVisualization(this.currentProblem, this.currentSolution);
        }
    }

    generateCircleVisualization(problem, solution) {
        let radius = null;

        // Determine radius for visualization
        if (problem.parameters.radius !== undefined) {
            radius = problem.parameters.radius;
        } else if (problem.parameters.diameter !== undefined) {
            radius = problem.parameters.diameter / 2;
        } else if (solution.solution && problem.type.includes('radius')) {
            radius = solution.solution;
        }

        if (radius) {
            return {
                type: 'circle',
                radius: radius,
                diameter: 2 * radius,
                circumference: 2 * Math.PI * radius,
                area: Math.PI * radius * radius,
                description: `Circle with radius ${radius.toFixed(2)}`,
                visualization: 'Display circle with labeled radius, diameter, and center'
            };
        }

        return null;
    }

    // WORKBOOK GENERATION

    generateCircleWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createCircleWorkbookStructure();

        workbook.sections = [
            this.createProblemSectionCircle(),
            this.createPrerequisiteSectionCircle(),
            this.createEnhancedStepsSectionCircle(),
            this.createCircleLessonSectionCircle(),
            this.createSolutionSectionCircle(),
            this.createAnalysisSectionCircle(),
            this.createVerificationSectionCircle(),
            this.createCircleVisualizationSection(),
            this.createRealWorldApplicationSectionCircle(),
            this.createPedagogicalNotesSectionCircle(),
            this.createAlternativeMethodsSectionCircle(),
            this.createPracticeProblemsSectionCircle(),
            this.createHistoricalContextSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createCircleWorkbookStructure() {
        return {
            title: 'Enhanced Circle Area and Circumference Mathematical Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            explanationLevel: this.explanationLevel,
            piApproximation: this.piApproximation,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSectionCircle() {
        if (!this.currentProblem) return null;

        const problemData = [
            ['Problem Type', this.circleTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.circleTypes[this.currentProblem.type]?.category || 'circle'],
            ['Description', this.currentProblem.scenario || this.circleTypes[this.currentProblem.type]?.description]
        ];

        // Add parameters
        if (Object.keys(this.currentProblem.parameters).length > 0) {
            problemData.push(['', '']);
            problemData.push(['Given Information', '']);
            for (const [key, value] of Object.entries(this.currentProblem.parameters)) {
                if (value !== undefined && value !== null) {
                    problemData.push([key, value]);
                }
            }
        }

        // Add π approximation info
        problemData.push(['', '']);
        problemData.push(['π Approximation', this.piApproximation === 'exact' ? 'Exact (π)' : `≈ ${Math.PI.toFixed(5)}`]);

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSectionCircle() {
        if (!this.prerequisiteChecks) return null;

        const category = this.circleTypes[this.currentProblem.type]?.category;
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

    createEnhancedStepsSectionCircle() {
        if (!this.solutionSteps || this.solutionSteps.length === 0) return null;

        const stepsData = [];

        this.solutionSteps.forEach((step) => {
            if (step.stepType === 'bridge' && this.explanationLevel === 'basic') {
                return;
            }

            if (step.stepType === 'bridge') {
                stepsData.push(['→ Bridge', step.title]);
                stepsData.push(['Current State', step.explanation.currentState]);
                stepsData.push(['Next Goal', step.explanation.nextGoal]);
                stepsData.push(['', '']);
                return;
            }

            stepsData.push([`Step ${step.stepNumber}`, step.step]);
            stepsData.push(['Description', step.description]);

            if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            if (step.calculation) {
                stepsData.push(['Calculation', step.calculation]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.exactAnswer && step.approximateAnswer) {
                stepsData.push(['Exact Answer', step.exactAnswer]);
                stepsData.push(['Approximate', step.approximateAnswer]);
            }

            // ELI5
            if (step.ELI5 && this.explanationLevel === 'ELI5') {
                stepsData.push(['ELI5', step.ELI5.explanation]);
                if (step.ELI5.analogy) {
                    stepsData.push(['Analogy', step.ELI5.analogy]);
                }
            }

            // Enhanced explanations
            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
            }

            // Error prevention
            if (step.errorPrevention && this.includeErrorPrevention) {
                const mistakes = step.errorPrevention.commonMistakes;
                if (mistakes && mistakes.length > 0) {
                    stepsData.push(['Common Mistakes', mistakes.join('; ')]);
                }
            }

            // Scaffolding
            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                const questions = step.scaffolding.guidingQuestions;
                if (questions && questions.length > 0) {
                    stepsData.push(['Guiding Questions', questions.join(' | ')]);
                }
            }

            // Self-check
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

    createCircleLessonSectionCircle() {
        const { type } = this.currentProblem;
        const category = this.circleTypes[type]?.category;

        const lessonData = [
            ['Circle Fundamentals', ''],
            ['', 'Circle: all points equidistant from center'],
            ['', 'Radius (r): distance from center to edge'],
            ['', 'Diameter (d): distance across through center, d = 2r'],
            ['', 'π (pi): approximately 3.14159...'],
            ['', ''],
            ['Key Formulas', ''],
            ['', 'Circumference: C = 2πr or C = πd'],
            ['', 'Area: A = πr²'],
            ['', 'Radius from C: r = C/(2π)'],
            ['', 'Radius from A: r = √(A/π)']
        ];

        return {
            title: 'Circle Concepts',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSectionCircle() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        if (this.currentSolution.solution !== null && this.currentSolution.solution !== undefined) {
            solutionData.push(['Result', `${this.currentSolution.approximateAnswer || this.currentSolution.solution} ${this.currentSolution.units}`]);
            
            if (this.currentSolution.exactAnswer) {
                solutionData.push(['Exact Form', this.currentSolution.exactAnswer]);
            }
            
            if (this.currentSolution.approximateAnswer) {
                solutionData.push(['Approximate', `${this.currentSolution.approximateAnswer} ${this.currentSolution.units}`]);
            }
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createAnalysisSectionCircle() {
        if (!this.currentSolution) return null;

        const analysisData = [
            ['Problem Type', this.currentSolution.type || this.currentSolution.category],
            ['Formula Used', this.currentSolution.formula || 'Circle formula'],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Difficulty Level', this.explanationLevel],
            ['Category', this.circleTypes[this.currentProblem.type]?.category]
        ];

        if (this.currentSolution.note) {
            analysisData.push(['Note', this.currentSolution.note]);
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSectionCircle() {
        if (!this.currentSolution || !this.currentProblem) return null;

        const verificationData = [
            ['Verification Method', 'Formula Verification'],
            ['', '']
        ];

        const verification = this.currentSolution.verification;
        if (verification) {
            verificationData.push(['Given', verification.given]);
            verificationData.push(['Calculated', verification.calculated]);
            verificationData.push(['Expected', verification.expected]);
            verificationData.push(['Difference', verification.difference]);
            verificationData.push(['Valid', verification.isValid ? 'Yes ✓' : 'No']);
        } else {
            verificationData.push(['Note', 'Solution verified through formula application']);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createCircleVisualizationSection() {
        if (!this.graphData || !this.visualizeCircle) return null;

        const vizData = [
            ['Circle Visualization', ''],
            ['Radius', this.graphData.radius.toFixed(2)],
            ['Diameter', this.graphData.diameter.toFixed(2)],
            ['Circumference', this.graphData.circumference.toFixed(2)],
            ['Area', this.graphData.area.toFixed(2)],
            ['', ''],
            ['Description', this.graphData.description]
        ];

        return {
            title: 'Circle Visualization',
            type: 'visualization',
            data: vizData
        };
    }

    createRealWorldApplicationSectionCircle() {
        if (!this.includeRealWorldApplications) return null;

        const applications = Object.values(this.realWorldProblems).slice(0, 3);

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

    createPedagogicalNotesSectionCircle() {
        if (!this.includePedagogicalNotes) return null;

        const notes = this.generateCirclePedagogicalNotes(this.currentProblem.type);

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

    createAlternativeMethodsSectionCircle() {
        if (!this.includeAlternativeMethods) return null;

        const alternatives = this.generateCircleAlternativeMethods(this.currentProblem.type);

        return {
            title: 'Alternative Solution Methods',
            type: 'alternatives',
            data: [
                ['Primary Method', alternatives.primaryMethod],
                ['', ''],
                ['Alternative Approaches', ''],
                ...alternatives.methods.map((method, index) => [
                    `Method ${index + 1}`, `${method.name}: ${method.description}`
                ]),
                ['', ''],
                ['Comparison', alternatives.comparison]
            ]
        };
    }

    createPracticeProblemsSectionCircle() {
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
            ['Historical Context', ''],
            ['', ''],
            ['Discovery of π', ''],
            ...this.historicalContext.pi_discovery.timeline.map(item => ['', item]),
            ['', ''],
            ['Significance', this.historicalContext.pi_discovery.significance],
            ['Fun Fact', this.historicalContext.pi_discovery.funFact]
        ];

        return {
            title: 'Historical Context',
            type: 'historical',
            data: histData
        };
    }

    generateCirclePedagogicalNotes(problemType) {
        const category = this.circleTypes[problemType]?.category;

        const pedagogicalDatabase = {
            circumference: {
                objectives: [
                    'Calculate circumference from radius or diameter',
                    'Understand relationship between circumference and π',
                    'Apply circumference formula to real situations'
                ],
                keyConcepts: [
                    'Circumference is distance around circle',
                    'π is ratio of circumference to diameter',
                    'C = 2πr or C = πd'
                ],
                prerequisites: [
                    'Multiplication',
                    'Understanding of π',
                    'Concept of perimeter'
                ],
                commonDifficulties: [
                    'Confusing circumference and area formulas',
                    'Forgetting the 2 in C = 2πr',
                    'Using diameter instead of radius'
                ],
                teachingStrategies: [
                    'Use string to measure circumference physically',
                    'Demonstrate C/d = π with various circles',
                    'Practice with real circular objects'
                ],
                extensions: [
                    'Find circumference from area',
                    'Word problems with wheels',
                    'Semicircle perimeter'
                ],
                assessment: [
                    'Can student choose correct formula?',
                    'Does student distinguish radius from diameter?',
                    'Are units correct?'
                ]
            },
            area: {
                objectives: [
                    'Calculate area from radius',
                    'Understand why area formula is πr²',
                    'Compare areas of different circles'
                ],
                keyConcepts: [
                    'Area is space inside circle',
                    'Must square the radius',
                    'Area grows with square of radius'
                ],
                prerequisites: [
                    'Squaring numbers',
                    'Understanding area concept',
                    'Working with π'
                ],
                commonDifficulties: [
                    'Forgetting to square radius',
                    'Confusing with circumference formula',
                    'Using wrong units (linear instead of square)'
                ],
                teachingStrategies: [
                    'Show area growth visually',
                    'Compare pizza sizes',
                    'Grid paper estimation'
                ],
                extensions: [
                    'Find area from circumference',
                    'Semicircle and sector areas',
                    'Annulus (ring) areas'
                ],
                assessment: [
                    'Does student square the radius?',
                    'Are square units used?',
                    'Can student explain why doubling radius quadruples area?'
                ]
            },
            reverse_calculations: {
                objectives: [
                    'Find radius from circumference or area',
                    'Use inverse operations correctly',
                    'Solve for unknown in circle formulas'
                ],
                keyConcepts: [
                    'Inverse operations',
                    'Division by π',
                    'Square root operation'
                ],
                prerequisites: [
                    'Division',
                    'Square roots',
                    'Algebra basics'
                ],
                commonDifficulties: [
                    'Not dividing by π when needed',
                    'Forgetting square root step',
                    'Order of operations errors'
                ],
                teachingStrategies: [
                    'Practice forward then reverse',
                    'Emphasize checking by substitution',
                    'Use real measurement scenarios'
                ],
                extensions: [
                    'Cross-calculations (area from C)',
                    'Multi-step problems',
                    'Literal equations with circles'
                ],
                assessment: [
                    'Can student apply inverse operations?',
                    'Does student verify by checking?',
                    'Are calculations accurate?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Solve circle problems'],
            keyConcepts: ['Circle formulas'],
            prerequisites: ['Basic geometry'],
            commonDifficulties: ['Formula application'],
            teachingStrategies: ['Step-by-step instruction'],
            extensions: ['More complex problems'],
            assessment: ['Verify understanding']
        };
    }

    generateCircleAlternativeMethods(problemType) {
        const category = this.circleTypes[problemType]?.category;

        const alternativeDatabase = {
            circumference: {
                primaryMethod: 'Direct Formula Application',
                methods: [
                    {
                        name: 'String Method',
                        description: 'Physically measure with string, then calculate π from C/d'
                    },
                    {
                        name: 'Diameter First',
                        description: 'If you have radius, double it then use C = πd'
                    },
                    {
                        name: 'Wheel Rolling',
                        description: 'Mark wheel, measure distance per rotation'
                    }
                ],
                comparison: 'Formula method is most direct; physical methods build intuition'
            },
            area: {
                primaryMethod: 'Formula A = πr²',
                methods: [
                    {
                        name: 'Grid Estimation',
                        description: 'Draw on graph paper, count squares inside'
                    },
                    {
                        name: 'Sector Summation',
                        description: 'Divide into thin sectors, approximate as triangles'
                    },
                    {
                        name: 'Diameter Method',
                        description: 'Use A = πd²/4 if diameter is known'
                    }
                ],
                comparison: 'Formula is exact and efficient; estimation methods build understanding'
            },
            reverse_calculations: {
                primaryMethod: 'Algebraic Solution',
                methods: [
                    {
                        name: 'Trial and Error',
                        description: 'Guess radius, check circumference/area, adjust'
                    },
                    {
                        name: 'Graphical Method',
                        description: 'Plot C vs r or A vs r, find intersection'
                    },
                    {
                        name: 'Step-by-step Unwinding',
                        description: 'Write formula, solve one operation at a time'
                    }
                ],
                comparison: 'Algebraic is most efficient; others help build intuition'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard circle formulas',
            methods: [{
                name: 'Alternative approach',
                description: 'Other methods depend on specific situation'
            }],
            comparison: 'Choose based on what measurements are available'
        };
    }
}

// Export the class
export default EnhancedCircleAreaCircumferenceMathematicalWorkbook;
